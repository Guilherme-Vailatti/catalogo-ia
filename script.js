document.addEventListener("DOMContentLoaded", function () {
  

  // Parte do menu mobile
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.createElement("div");
  mobileMenu.classList.add("mobile-menu");

  mobileMenu.innerHTML = `
     <span class="close-menu">✖</span>
  <ul class="mobile-menu-list">
    <li class="mobile-dropdown">
      <a href="https://materiais.senior.com.br/manifesto-ia-senior?hs_preview=dlQUcUYx-187324225575">Manifesto IA</a>
    </li>
    <li class="mobile-dropdown">
      <a href="https://www.senior.com.br/inteligencia-artificial">Soluções</a>
    </li>
    <li class="mobile-dropdown">
      <a href="https://www.senior.com.br/inteligencia-artificial-guia-completo">Guia Completo</a>
    </li>
  </ul>
`;
  document.body.appendChild(mobileMenu);
  const closeMenu = mobileMenu.querySelector(".close-menu");

  function resetDropdowns() {
    const dropdowns = mobileMenu.querySelectorAll(".dropdown-menu");
    dropdowns.forEach(menu => {
      menu.classList.remove("open");
      menu.style.maxHeight = "0px";
      menu.style.opacity = "0";
    });
  }

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.add("show");
    document.body.classList.add("menu-open");
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("show");
    document.body.classList.remove("menu-open");
    resetDropdowns();
  });

  document.addEventListener("click", function (e) {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      mobileMenu.classList.remove("show");
      document.body.classList.remove("menu-open");
      if (window.innerWidth <= 768) {
        // menuToggle.style.display = "block"; // agora controlado por CSS
      }
      resetDropdowns();
    }
  });

  document.querySelectorAll(".mobile-dropdown > a").forEach((item) => {
    item.addEventListener("click", function (e) {
      const submenu = this.nextElementSibling;
  
      // Só previne o clique se houver submenu dropdown
      if (submenu && submenu.classList.contains("dropdown-menu")) {
        e.preventDefault();
  
        if (submenu.classList.contains("open")) {
          submenu.classList.remove("open");
          submenu.style.maxHeight = "0px";
          submenu.style.opacity = "0";
        } else {
          mobileMenu.querySelectorAll(".dropdown-menu").forEach((menu) => {
            menu.classList.remove("open");
            menu.style.maxHeight = "0px";
            menu.style.opacity = "0";
          });
  
          submenu.classList.add("open");
          submenu.style.maxHeight = submenu.scrollHeight + "px";
          submenu.style.opacity = "1";
        }
      }
    });
  });
  

  window.addEventListener("resize", function () {
    const isDesktop = window.innerWidth > 768;
    const desktopMenu = document.querySelector(".menu");

    mobileMenu.classList.remove("show");
    document.body.classList.remove("menu-open");
    resetDropdowns();

    if (desktopMenu) {
      desktopMenu.style.display = isDesktop ? "flex" : "none";
      desktopMenu.classList.remove("show");
    }

    document.querySelectorAll(".dropdown-menu").forEach(menu => {
      menu.style.removeProperty("max-height");
      menu.style.removeProperty("opacity");
      menu.style.removeProperty("display");
    });
  });
});


// CARDS //

const cardsData = [


   {
    title: "Agente de Admissão",
    linhaProduto: "HCM",
    segmento: "Admissão",
    description: "Orienta candidatos aprovados no processo seletivo, fornecendo informações sobre documentação necessária, integração e primeiros passos na empresa.",
    contexto: "Execução e Operação",
    situacao: "Roadmap",
    beneficios: "Só preencher o que for de benefício suave"
  },
  {
    title: "Modelos de convite por SMS",
    linhaProduto: "HCM",
    segmento: "Admissão",
    description: "Gera texto vase para envio de convite de admissão a novos colaboradores",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Modelo do convite",
    linhaProduto: "HCM",
    segmento: "Admissão",
    description: "Gera texto base para o modelo de convite para envio aos candidatos",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Texto com instruções para o assinante",
    linhaProduto: "HCM",
    segmento: "Admissão",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Criar conteúdo dos documentos admissionais",
    linhaProduto: "HCM",
    segmento: "Admissão",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },

  // Segmento: Agronegócio
  {
    title: "Agente de Qualidade da Colheita",
    linhaProduto: "ERP",
    segmento: "Agronegócio",
    description: "Monitora e avalia a qualidade das colheitas, garantindo que os padrões estabelecidos sejam atendidos.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Qualidade das Commodities",
    linhaProduto: "ERP",
    segmento: "Agronegócio",
    description: "Assegura que os produtos agrícolas atendam aos critérios de qualidade para comercialização.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Performance Operacional",
    linhaProduto: "ERP",
    segmento: "Agronegócio",
    description: "Avalia o desempenho das operações agrícolas, identificando áreas para otimização e melhoria.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  // Segmento: Backoffice
  {
    title: "Abordagem de Venda",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Elaboração de e-mail para prospect com IA",
    contexto: "nan",
    situacao: "Liberado",
    beneficios: "Agilidade e assertividade na descrição de e-mails para abordagem de leads."
  },
  {
    title: "Gerador de conteúdo - E-mail Marketing",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Elaboração de campanha de e-mail mkt com IA",
    contexto: "nan",
    situacao: "Liberado",
    beneficios: "Assertividade e produtividade na geração de texto para campanhas de marketing via e-mail."
  },
  {
    title: "Requisição  de Estoque",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Complemento e descrição de itens da requisição de estoque",
    contexto: "nan",
    situacao: "Liberado",
    beneficios: "Assertividade na requisição de materiais, com descritivos mais completos."
  },
  {
    title: "Sales",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Assistência a interpretação e consumo dos dados de vendas do ERP",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade no acesso aos dados de negócio para tomada de decisão;</li><li>Precisão na busca do dados de várias tabelas;</li><li>Ganho de produtividade, disponibilizando o time para funções mais estratégicas;</li><li>Geração de gráficos em tempo real.</li></ul>"
  },
  {
    title: "Invoicing",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Assistência a interpretação e consumo dos dados de faturamento do ERP",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade no acesso aos dados de negócio para tomada de decisão;</li><li>Precisão na busca do dados de várias tabelas;</li><li>Ganho de produtividade, disponibilizando o time para funções mais estratégicas;</li><li>Geração de gráficos em tempo real.</li></ul>"
  },
  {
    title: "Expert Suprimentos",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Assistência a interpretação e consumo dos dados de suprimentos do ERP",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade no acesso aos dados de negócio para tomada de decisão;</li><li>Precisão na busca do dados de várias tabelas;</li><li>Ganho de produtividade, disponibilizando o time para funções mais estratégicas;</li><li>Geração de gráficos em tempo real.</li></ul>"
  },
  {
    title: "Virtual CFO",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Assistência a interpretação e consumo dos dados financeiros do fluxo de caixa",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade no acesso aos dados de negócio para tomada de decisão;</li><li>Precisão na busca do dados de várias tabelas;</li><li>Ganho de produtividade, disponibilizando o time para funções mais estratégicas;</li><li>Geração de gráficos em tempo real.</li></ul>"
  },
  {
    title: "Resumo de Negociação",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Síntese das negociações para personas de gestão",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "Agilidade na análise das negociações através do resumo das mesmas para as personas de gestão."
  },
  {
    title: "Insights Faturamento",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Variação de faturamento nos últimos dois meses | Análise de faturamento último mês | Análise de desempenho mensal nos últimos doze meses",
    contexto: "nan",
    situacao: "Liberado",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"
  },
  {
    title: "Insight prazos financeiros",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Cálculo do ciclo financeiro com PMR, PMP e compras",
    contexto: "nan",
    situacao: "Liberado",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"

  },
  {
    title: "Insight de cobrança",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Elaboração de e-mail de cobrança com base na seleção de títulos diretamente na tela de consulta do ERP",
    contexto: "nan",
    situacao: "Liberado",
    beneficios: "Agilidade e assertividade na descrição de e-mails de cobrança."
  },
  {
    title: "Insights Vendas",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Variação do ticket médio nos últimos dois meses | Análise de faturamento, ticket médio no último mês | Indicadores de desempenho mensal nos últimos doze meses",
    contexto: "nan",
    situacao: "Liberado",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"
  },
  {
    title: "Insights Estoques",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Produtos com saldo em estoque abaixo do mínimo | Estoque de maior valor | Recomendações para prevenção de rupturas",
    contexto: "nan",
    situacao: "Liberado",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"
  },
  {
    title: "Insights Recebimentos",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Melhores oportunidades de crédito de imposto | Análise do valor de compras mensais",
    contexto: "nan",
    situacao: "Liberado",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"
  },
  {
    title: "Insights Faturamento",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Ag confirmação dos insights",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"
  },
  {
    title: "Insights Compras",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "nan",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"
  },
  {
    title: "Insights Financeiros",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "nan",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"
  },
  {
    title: "Insights Mercado",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "nan",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"
  },
  {
    title: "Predição de Faturamento",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Estimativa de faturamento bruto por CNPJ",
    contexto: "nan",
    situacao: "Liberado",
    beneficios: "Dados complementares que apoiam e geram maior assertividade na prospecção de mercado."
  },
  {
    title: "Predição de número de Funcionários",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Estimativa de número de empregados de CNPJ",
    contexto: "nan",
    situacao: "Liberado",
    beneficios: "Dados complementares que apoiam e geram maior assertividade na prospecção de mercado."
  },
  {
    title: "Insight Negociações",
    linhaProduto: "ERP",
    segmento: "Backoffice",
    description: "Assistente de vendas - apoio à equipe de vendas para encontrar as melhores sugestões para realização da venda",
    contexto: "Liderança Estratégica",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"
  },

  // Segmento: Compliance
  {
    title: "TAX",
    linhaProduto: "ERP",
    segmento: "Compliance",
    description: "Assistência a interpretação e consumo dos dados tributários da oferta Simulador X (Reforma)",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade no acesso aos dados de negócio para tomada de decisão quanto a Reforma tributária;</li><li>Precisão na busca do dados de várias tabelas;</li><li>Ganho de produtividade, disponibilizando o time para funções mais estratégicas.</li><li>Eficiência e agilidade na análise fiscal: o agente pode analisar de forma instantânea os cálculos dos novos impostos e fornecendo respostas em tempo real e utilizando os dados da própria empresa;</li><li>Economia de tempo e redução de erros: como a análise do impacto fiscal envolve vários cálculos, o agente permite automatizar esses cálculos, reduzindo tempo e o risco de erros;</li><li>Geração de gráficos em tempo real.</li></ul>"
  },
  {
    title: "Insights Contabilidade",
    linhaProduto: "ERP",
    segmento: "Compliance",
    description: "Prazo médio (em dias) de recebimento, pagamento e estoques | Saúde financeira da empresa | Redução de custos da empresa",
    contexto: "nan",
    situacao: "Liberado",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"
  },
  {
    title: "Insights Contábil",
    linhaProduto: "ERP",
    segmento: "Compliance",
    description: "nan",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"
  },
  {
    title: "Insights Fiscais",
    linhaProduto: "ERP",
    segmento: "Compliance",
    description: "nan",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"
  },
  {
    title: "Analista de suporte Sara",
    linhaProduto: "ERP",
    segmento: "Compliance",
    description: "Sara especialista de suporte nas mensagens de erro de envio de documentos. A IA embarcada consome dados dos KCS de suporte pra direcionar à solução do problema",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "Sara especialista de suporte nas mensagens de erro de envio de documentos. A IA embarcada consome dados dos KCS de suporte pra direcionar à solução do problema."
  },
  {
    title: "Recebimento de NFS-e via PDF",
    linhaProduto: "ERP",
    segmento: "Compliance",
    description: "Leitura de documentos padrões para lançamento automático no sistema",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Maior produtividade na entrada de documentos;</li><li>Mitigação de erros em lançamentos.</li></ul>"
  },

  // Segmento: Compras
  {
    title: "Agente de Performance de Compras",
    linhaProduto: "ERP",
    segmento: "Compras",
    description: "Avalia o desempenho do setor de compras, buscando eficiência e redução de custos.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },

  // Segmento: Construção
  {
    title: "Agente de Orçamento",
    linhaProduto: "ERP",
    segmento: "Construção",
    description: "Elabora e monitora os orçamentos dos projetos, assegurando aderência aos custos previstos.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Planejamento",
    linhaProduto: "ERP",
    segmento: "Construção",
    description: "Define cronogramas e etapas dos projetos, coordenando recursos e prazos.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Receitas",
    linhaProduto: "ERP",
    segmento: "Construção",
    description: "Acompanha as entradas financeiras dos projetos, garantindo a saúde financeira dos empreendimentos.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Solicitações",
    linhaProduto: "ERP",
    segmento: "Construção",
    description: "Gerencia pedidos e requisições relacionadas aos projetos, assegurando respostas ágeis e adequadas.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Otimização de Compras",
    linhaProduto: "ERP",
    segmento: "Construção",
    description: "Busca as melhores condições de aquisição de materiais e serviços, visando economia e qualidade.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Distratos",
    linhaProduto: "ERP",
    segmento: "Construção",
    description: "Administra cancelamentos de contratos, garantindo o cumprimento de cláusulas.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },

  // Segmento: Desempenho
  {
    title: "Agente de Avaliação de Desempenho",
    linhaProduto: "HCM",
    segmento: "Desempenho",
    description: "Auxilia na avaliação periódica dos colaboradores, fornecendo insights sobre desempenho e áreas de melhoria.",
    contexto: "Liderança Estratégica",
    situacao: "Roadmap"
  },
  {
    title: "Agente de PDIs (Planos de Desenvolvimento Individual)",
    linhaProduto: "HCM",
    segmento: "Desempenho",
    description: "Ajuda na criação e monitoramento de planos personalizados para o desenvolvimento profissional dos membros da equipe.",
    contexto: "Liderança Estratégica",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Feedbacks",
    linhaProduto: "HCM",
    segmento: "Desempenho",
    description: "Facilita a coleta e gestão de feedbacks contínuos entre líderes e colaboradores.",
    contexto: "Liderança Estratégica",
    situacao: "Roadmap"
  },
  {
    title: "Agente 1:1 (Reuniões Individuais)",
    linhaProduto: "HCM",
    segmento: "Desempenho",
    description: "Organiza e sugere pautas para reuniões individuais entre líderes e membros da equipe.",
    contexto: "Liderança Estratégica",
    situacao: "Roadmap"
  },
  {
    title: "Geração de PDI",
    linhaProduto: "HCM",
    segmento: "Desempenho",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Evidências das competências",
    linhaProduto: "HCM",
    segmento: "Desempenho",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Criação de meta da avaliação de resultados",
    linhaProduto: "HCM",
    segmento: "Desempenho",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
   {
    title: "Agente para Lideranças",
    linhaProduto: "HCM",
    segmento: "Desempenho",
    description: "nan",
    contexto: "Liderança Estratégica",
    situacao: "Roadmap"
  },

  // Segmento: Diversidade e inclusão
  {
    title: "Insights de Diversidade",
    linhaProduto: "HCM",
    segmento: "Diversidade e inclusão",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },

  // Segmento: Estoque
  {
    title: "Agente de Estoque",
    linhaProduto: "ERP",
    segmento: "Estoque",
    description: "Gerencia os níveis de estoque, evitando excessos ou faltas de produtos.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Alocação de Estoque",
    linhaProduto: "ERP",
    segmento: "Estoque",
    description: "Determina a distribuição ideal dos produtos em estoque para atender à demanda.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Inventário",
    linhaProduto: "ERP",
    segmento: "Estoque",
    description: "Realiza auditorias e controle dos itens em estoque, assegurando a precisão dos registros.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Controle de Pátio",
    linhaProduto: "ERP",
    segmento: "Estoque",
    description: "Organiza e monitora as atividades no pátio industrial, garantindo fluxo eficiente de materiais e produtos.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },

  // Segmento: Financeiro
  {
    title: "Agente de Contas a Receber",
    linhaProduto: "ERP",
    segmento: "Financeiro",
    description: "Gerencia entradas financeiras, acompanhando pagamentos e identificando inadimplências.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Contas a Pagar",
    linhaProduto: "ERP",
    segmento: "Financeiro",
    description: "Supervisiona as obrigações financeiras da empresa, garantindo pagamentos em dia e controle de despesas.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Tesouraria",
    linhaProduto: "ERP",
    segmento: "Financeiro",
    description: "Controla o fluxo de caixa, assegurando a liquidez necessária para as operações diárias.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente Fiscal",
    linhaProduto: "ERP",
    segmento: "Financeiro",
    description: "Garante a conformidade com as obrigações fiscais, monitorando prazos e regulamentos tributários.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente Contábil",
    linhaProduto: "ERP",
    segmento: "Financeiro",
    description: "Mantém os registros contábeis atualizados, facilitando a elaboração de demonstrações financeiras precisas.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Faturamento",
    linhaProduto: "ERP",
    segmento: "Financeiro",
    description: "Emite e gerencia faturas, assegurando a correta cobrança pelos serviços ou produtos fornecidos.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },

  // Segmento: Gestão do ponto
  {
    title: "Insight - Marcações de ponto em cada modo",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações de ponto online e offline",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações em cada plataforma",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações em dispositivos sem permissão para usar a câmera",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações registradas fora, dentro ou sem a cerca virtual",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações com ou sem permissão de localização",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações com reconhecimento",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações com reconhecimento facial cadastrado ou cancelado",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações com foto não permitida, foto cancelada ou sem permissão para usar a câmera",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações com captura de foto cancelada pelo usuário",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações realizadas com assinatura inválida ou válida",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações realizadas no modo Múltiplo",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações realizadas no modo Individual",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações realizadas no modo Motorista",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações realizadas no modo QR Code",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações realizadas no modo NFC",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações realizadas no modo Biometria",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Insight - Marcações realizadas no modo Reconhecimento Facial",
    linhaProduto: "HCM",
    segmento: "Gestão do ponto",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },

  // Segmento: Indústria
  {
    title: "Agente de Gestão da Produção",
    linhaProduto: "ERP",
    segmento: "Indústria",
    description: "Supervisiona o processo produtivo, garantindo eficiência e cumprimento dos cronogramas.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Planejamento e Controle da Produção",
    linhaProduto: "ERP",
    segmento: "Indústria",
    description: "Planeja as atividades produtivas, otimizando recursos e tempos de produção.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Custos",
    linhaProduto: "ERP",
    segmento: "Indústria",
    description: "Monitora os custos operacionais, identificando oportunidades de economia.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Manufacturing",
    linhaProduto: "ERP",
    segmento: "Indústria",
    description: "Assistência a interpretação e consumo dos dados de industrialização do ERP",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade no acesso aos dados de negócio para tomada de decisão;</li><li>Precisão na busca do dados de várias tabelas;</li><li>Ganho de produtividade, disponibilizando o time para funções mais estratégicas;</li><li>Geração de gráficos em tempo real.</li></ul>"
  },
  {
    title: "Insights Custos",
    linhaProduto: "ERP",
    segmento: "Indústria",
    description: "Análise dos dados de fechamento de custos do período em tela de produto",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"
  },
  {
    title: "Insights Industrial",
    linhaProduto: "ERP",
    segmento: "Indústria",
    description: "Eficácia de estágios/recursos (tempo, refugo, parada)",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"
  },
  {
    title: "Insights Produção",
    linhaProduto: "ERP",
    segmento: "Indústria",
    description: "nan",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Agilidade na análise de indicadores estratégicos através do cruzamento dos dados;</li><li>Apoio na interpretação dos dados constantes nos dashboards;</li><li>Conexão da análise com ações de mitigação dos erros e impactos para a operação.</li></ul>"
  },
  {
    title: "CRP",
    linhaProduto: "ERP",
    segmento: "Indústria",
    description: "Otimização de linha de produção",
    contexto: "nan",
    situacao: "Roadmap",
    beneficios: "<ul><li>Sequenciamento automatizado de ordens de produção considerando situações restritivas;</li><li>Tomada de decisões estratégicas orientada à dados;</li><li>Redução de custos através do uso inteligente dos recursos industriais.</li></ul>"
  },

  // Segmento: Painel de gestão
  {
    title: "Justificativa na avaliação contratual",
    linhaProduto: "HCM",
    segmento: "Painel de gestão",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Escrever feedback",
    linhaProduto: "HCM",
    segmento: "Painel de gestão",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Resumo de perfil profissional",
    linhaProduto: "HCM",
    segmento: "Painel de gestão",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },

  // Segmento: Portal de talentos
  {
    title: "Descrever sobre você",
    linhaProduto: "HCM",
    segmento: "Portal de talentos",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },

  // Segmento: Recrutamento e seleção
  {
    title: "Agente Recrutador",
    linhaProduto: "HCM",
    segmento: "Recrutamento e seleção",
    description: "Apoia os analistas de recrutamento e seleção na triagem de candidatos, agendamento de entrevistas e comunicação com potenciais colaboradores.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Descrição da Vaga",
    linhaProduto: "HCM",
    segmento: "Recrutamento e seleção",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Geração de mensagens ao candidato",
    linhaProduto: "HCM",
    segmento: "Recrutamento e seleção",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Descrição do perfil na requisição de pessoal",
    linhaProduto: "HCM",
    segmento: "Recrutamento e seleção",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },

  // Segmento: Remuneração
  {
    title: "Descrição de Cargos",
    linhaProduto: "HCM",
    segmento: "Remuneração",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Sugestão de justificativa de transferência",
    linhaProduto: "HCM",
    segmento: "Remuneração",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },
  {
    title: "Sugestão de justificativa de proposta",
    linhaProduto: "HCM",
    segmento: "Remuneração",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  },

  // Segmento: Transporte
  {
    title: "Agente de Expedição",
    linhaProduto: "Logística",
    segmento: "Transporte",
    description: "Coordena o envio de produtos aos clientes, assegurando prazos e condições adequadas de transporte.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Recebimento",
    linhaProduto: "Logística",
    segmento: "Transporte",
    description: "Supervisiona a entrada de materiais e produtos, conferindo quantidades e qualidade.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Rotas",
    linhaProduto: "Logística",
    segmento: "Transporte",
    description: "Otimize as rotas de entrega e coleta, buscando eficiência logística.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Frotas:",
    linhaProduto: "Logística",
    segmento: "Transporte",
    description: "Gerencia os veículos da empresa, programando manutenções e controlando custos operacionais.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Fretes",
    linhaProduto: "Logística",
    segmento: "Transporte",
    description: "Negocia e controla os custos de transporte, buscando parcerias vantajosas.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },
  {
    title: "Agente de Entregas",
    linhaProduto: "Logística",
    segmento: "Transporte",
    description: "Acompanha o status das entregas, garantindo a satisfação dos clientes.",
    contexto: "Execução e Operação",
    situacao: "Roadmap"
  },

  // Segmento: Waapi - Mobilidade
  {
    title: "Escrever feedback",
    linhaProduto: "HCM",
    segmento: "Waapi - Mobilidade",
    description: "nan",
    contexto: "Execução e Operação",
    situacao: "nan"
  }

];

localStorage.setItem("cardsData", JSON.stringify(cardsData));


const container = document.getElementById("cardContainer");

let activeCategory = "all";
let activeTag = "all";
let activeContexto = "all";
let activeSituacao = "all";


// VOLTA PARA O CATÁLOGO JÁ FILTRADO AO CLICAR EM IA RELACIONADO AO PRODUTO..
const urlParams = new URLSearchParams(window.location.search);
const linhaProdutoParam = urlParams.get("linhaProduto");
const origem = urlParams.get("origem");

if (linhaProdutoParam && origem === "card") {
  activeCategory = linhaProdutoParam;
  document.querySelectorAll(".filter").forEach(f => {
    f.classList.remove("active");
    if (f.getAttribute("data-category") === linhaProdutoParam) {
      f.classList.add("active");
    }
  });
    // Limpa a URL após aplicar o filtro
    window.history.replaceState({}, document.title, window.location.pathname);
}


function slugify(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}

function renderCards(customData) {
  container.innerHTML = "";

  const filtered = (customData || cardsData).filter(c => {
    const matchCategory = activeCategory === "all" || c.linhaProduto === activeCategory;
    const matchTag = activeTag === "all" || c.segmento === activeTag;
    const matchContexto = activeContexto === "all" || c.contexto === activeContexto;
    const matchSituacao = activeSituacao === "all" || c.situacao === activeSituacao;
    return matchCategory && matchTag && matchContexto && matchSituacao;
  });

  filtered.forEach(card => {
    const div = document.createElement("a");
    div.className = "card";
    div.href = `card.html?slug=${slugify(card.title)}`;

    const situacoes = Array.isArray(card.situacao)
      ? card.situacao
      : (card.situacao && card.situacao !== "nan" ? [card.situacao] : []);

    const badges = situacoes.map(tag => `<span class="badge ${tag.toLowerCase()}">${tag}</span>`).join(" ");

    div.innerHTML = `
      <div class="card-header">
        <img class="icon" src="images/logo-iassist.png" alt="Ícone">
        <div class="badges">${badges}</div>
      </div>
      <h3>${card.title}</h3>
      <p class="category">${card.linhaProduto}</p>
      <p class="description">${card.description}</p>
    `;

    container.appendChild(div);
  });
}

renderCards();



// Event listeners para cada filtro
document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(f => f.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.getAttribute("data-category");
    renderCards();
  });
});

document.querySelectorAll(".tag-filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tag-filter").forEach(f => f.classList.remove("active"));
    btn.classList.add("active");
    activeTag = btn.getAttribute("data-tag");
    renderCards();

      // Fecha filtros no mobile
      if (window.innerWidth <= 768 && sidebarContainer.classList.contains('show')) {
        sidebarContainer.classList.remove('show');
        toggleBtn.textContent = 'Mostrar Filtros';
      }
  });
});

document.querySelectorAll(".tag-filter1").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tag-filter1").forEach(f => f.classList.remove("active"));
    btn.classList.add("active");
    activeContexto = btn.getAttribute("data-tag");
    renderCards();

      // Fecha filtros no mobile
      if (window.innerWidth <= 768 && sidebarContainer.classList.contains('show')) {
        sidebarContainer.classList.remove('show');
        toggleBtn.textContent = 'Mostrar Filtros';
      }

  });
});

document.querySelectorAll(".tag-filter2").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tag-filter2").forEach(f => f.classList.remove("active"));
    btn.classList.add("active");
    activeSituacao = btn.getAttribute("data-tag");
    renderCards();
    
      // Fecha filtros no mobile
      if (window.innerWidth <= 768 && sidebarContainer.classList.contains('show')) {
        sidebarContainer.classList.remove('show');
        toggleBtn.textContent = 'Mostrar Filtros';
      }

  });
});

localStorage.setItem("cardsData", JSON.stringify(cardsData));





// Toggle de Filtros para Mobile
const toggleBtn = document.querySelector('.toggle-filters');
const sidebarContainer = document.querySelector('.sidebar-container');

toggleBtn.addEventListener('click', () => {
  sidebarContainer.classList.toggle('show');
  toggleBtn.textContent = sidebarContainer.classList.contains('show') 
    ? 'Ocultar Filtros' 
    : 'Mostrar Filtros';
});


// Área de busca
const searchInput = document.querySelector('.search-box');
const searchButton = document.querySelector('.search-button');

function normalize(text) {
  return text?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') || '';
}

function searchCards() {
  const query = normalize(searchInput.value.trim());

  const searched = cardsData.filter(item => {
    return (
      normalize(item.title).includes(query) ||
      normalize(item.description).includes(query) ||
      normalize(item.linhaProduto).includes(query) ||
      normalize(item.segmento).includes(query) ||
      normalize(item.contexto).includes(query) ||
      normalize(item.situacao).includes(query)
    );
  });

  renderCards(searched);
}

searchButton.addEventListener("click", searchCards);

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchCards();
  }
});




// MODAL FEEDBACK //

// Abre o modal ao clicar em qualquer botão de feedback
document.querySelectorAll('.btn-feedback').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('feedbackModal').style.display = 'block';
  });
});

// Fecha o modal ao clicar no "X"
document.querySelector('.close-modal').addEventListener('click', () => {
  document.getElementById('feedbackModal').style.display = 'none';
});

// Fecha ao clicar fora da área do modal
window.addEventListener('click', (event) => {
  const modal = document.getElementById('feedbackModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

document.getElementById('enviarComentario').addEventListener('click', () => {
  const comentario = document.getElementById('comentario').value.trim();
  const consentimento = document.getElementById('consentimento').checked;

  if (!comentario) {
    alert('Por favor, escreva um comentário.');
    return;
  }

  if (!consentimento) {
    alert('É necessário concordar com a Política de Privacidade.');
    return;
  }

  // Aqui poderia enviar o comentário via fetch() ou integração
  alert('Comentário enviado com sucesso! Obrigado pelo feedback.');

  // Fecha o modal após envio
  document.getElementById('feedbackModal').style.display = 'none';

  // Limpa campos
  document.getElementById('comentario').value = '';
  document.getElementById('nomeEmail').value = '';
  document.getElementById('consentimento').checked = false;
});





// NOTÍCIAS //
