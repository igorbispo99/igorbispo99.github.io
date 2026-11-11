(function () {
  'use strict';

  var I18N = {
    pt: {
      'a11y.skip': 'Pular para o conteúdo',

      'nav.about': 'Sobre',
      'nav.experience': 'Experiência',
      'nav.research': 'Pesquisa',
      'nav.teaching': 'Aulas',
      'nav.contact': 'Contato',

      'w.since': 'Desde',
      'w.to': 'a',
      'w.tools': 'Ferramentas:',

      'intro.role': 'Especialista de IA Sênior na FPFtech e doutorando em Engenharia Elétrica na UFAM.',
      'intro.text': 'Trabalho com visão computacional desde 2019. Na CNT, cuidei dos modelos que avaliam milhares de quilômetros de rodovias brasileiras, e no mestrado detectei desmatamento na Amazônia em imagens de radar. Hoje desenvolvo detecção de objetos para segurança automotiva, rodando em hardware embarcado.',
      'intro.cv': 'Currículo em PDF',

      'about.title': 'Sobre',
      'about.p1': 'Sou cientista da computação e mestre em Engenharia Elétrica, na área de Processamento de Sinais, pela Universidade de Brasília (UnB). Desde 2026 faço doutorado em Engenharia Elétrica na Universidade Federal do Amazonas (UFAM).',
      'about.p2': 'Na FPFtech, trabalho em sistemas de visão para segurança automotiva: detecção e classificação de objetos, estimativa de profundidade e melhoria de imagem, tudo rodando em hardware com poucos recursos. Também dou aulas de Aprendizado de Máquina e Deep Learning na pós-graduação do IPOS.',
      'about.p3': 'Antes disso, passei três anos na Confederação Nacional do Transporte cuidando dos modelos da Pesquisa CNT de Rodovias, a maior pesquisa rodoviária do país. No mestrado, trabalhei no projeto Curupira, com imagens de radar da Amazônia, e no Gigasistêmica, com radiografias odontológicas.',
      'about.p4': 'Meu interesse pela área começou em 2019, quando fui monitor de Princípios de Visão Computacional na UnB. Fora do trabalho, gosto de música e de jogos.',

      'exp.title': 'Experiência',
      'exp.remote': 'remoto',
      'exp.fpf.role': 'Especialista de IA Sênior',
      'exp.fpf.loc': 'Manaus (híbrido)',
      'exp.fpf.desc': 'Desenvolvo sistemas de visão computacional para segurança automotiva, seguindo regulamentações internacionais do setor. Trabalho no pipeline inteiro: pré-processamento, avaliação da qualidade da imagem, inferência dos modelos e monitoramento de desempenho no hardware embarcado.',
      'exp.fpf.quant': 'quantização INT8/INT16/FP16',
      'exp.fpf.kd': 'destilação de conhecimento',
      'exp.ipos.role': 'Professor de Pós-Graduação',
      'exp.ipos.desc': 'Dou as disciplinas Aprendizado de Máquina com Python e Deep Learning com Python na especialização em Inteligência Artificial para Construção Civil. Preparo o conteúdo, as aulas e as avaliações.',
      'exp.ipos.link': 'Página do curso',
      'exp.ipos.lessons': 'Imagens das aulas',
      'exp.cnt.role': 'Analista de IA',
      'exp.cnt.org': 'Confederação Nacional do Transporte (CNT), Brasília',
      'exp.cnt.desc': 'Fui responsável pelos modelos de IA da Pesquisa CNT de Rodovias, do projeto ao deploy. Os sistemas detectam e classificam mais de 40 variáveis da via, como defeitos no pavimento, sinalização, viadutos e guardrails.',
      'exp.unb.role': 'Pesquisador de Pós-Graduação',
      'exp.unb.org': 'Universidade de Brasília (UnB)',
      'exp.unb.desc': 'No projeto Curupira, feito em parceria com o CENSIPAM, desenvolvi em PyTorch um sistema que detecta desmatamento e queimadas na Amazônia em imagens SAR do Sentinel-1. No Gigasistêmica, que coordeno junto à Odontologia da UnB e à rede GigaCandanga, treino modelos de segmentação para identificar osteoporose e ateromas em tomografias e radiografias panorâmicas. Também supervisionei a anotação dos dados no CVAT.',
      'exp.unb.code': 'Código do Gigasistêmica no GitHub',
      'exp.zerum.role': 'Cientista de Dados',
      'exp.zerum.desc': 'Classificação de textos fiscais para detectar fraudes e anomalias. Treinei modelos LSTM e Transformer para séries temporais e coloquei o classificador em produção com uma API em Django.',
      'exp.proic.role': 'Iniciação Científica',
      'exp.proic.desc': 'Análise de confiabilidade de linhas de produto de software (projeto ReAna), com bolsa da FAP/DF.',
      'exp.ta.role': 'Monitor de Princípios de Visão Computacional',

      'pub.title': 'Pesquisa',
      'pub.pubsTitle': 'Publicações',
      'pub.eduTitle': 'Formação',
      'pub.sideTitle': 'Projetos pessoais',
      'pub.code': 'Código no GitHub',
      'pub.yolo.title': 'A Comprehensive Assessment of Optimized YOLO Architectures for Edge and Real-Time Applications',
      'pub.yolo.desc': 'Artigo publicado na ICCT-Pacific 2026. Compara arquiteturas YOLO otimizadas para aplicações em tempo real.',
      'pub.quant.title': 'Importance-Aware Quantization Strategy for Layer-Sensitive YOLO Architectures',
      'pub.quant.desc': 'Artigo publicado na ICCT-Pacific 2026. Propõe uma estratégia de quantização que leva em conta a importância de cada camada.',
      'pub.carotid.title': 'Detection and Segmentation of Carotid Atheroma Calcification in Dental Panoramic Radiographs Using a Hybrid Deep Learning Model',
      'pub.carotid.desc': 'Um modelo híbrido que detecta e segmenta calcificações de ateroma carotídeo em radiografias panorâmicas.',
      'pub.msc.title': 'Deforestation Detection in SAR Images using Deep Neural Networks',
      'pub.msc.venue': 'Dissertação de mestrado, UnB, 2024',
      'pub.msc.desc': 'Detecção de desmatamento em cenas Sentinel-1 com redes convolucionais profundas.',
      'pub.sbrt.title': 'Estudo Comparativo da Detecção de Desmatamento em Cenas Sentinel-1 da Floresta Amazônica',
      'pub.sbrt.desc': 'Anais do XLI Simpósio Brasileiro de Telecomunicações e Processamento de Sinais, com Prof.ª Mylène C. Q. Farias e outros autores.',
      'pub.edu.phd': 'Doutorado em Engenharia Elétrica, em andamento',
      'pub.edu.phdOrg': 'Universidade Federal do Amazonas (UFAM), PPGEE',
      'pub.edu.msc': 'Mestrado em Engenharia Elétrica, Processamento de Sinais',
      'pub.edu.mscNote': 'Orientada pela Prof.ª Mylène C. Q. Farias, com bolsa da FINATEC.',
      'pub.edu.bsc': 'Bacharelado em Ciência da Computação',
      'pub.edu.bscNote': 'Trabalho de conclusão sobre detecção de desmatamento em imagens SAR com redes neurais profundas, orientado pelo Prof. Edson M. Hung, com bolsa da FAP/DF.',

      'side.parrot': 'App desktop que transcreve áudio e vídeo no próprio computador, com Whisper via CTranslate2. Não precisa de internet nem de chave de API.',
      'side.speech': 'Reconhece palavras faladas em tempo real convertendo o áudio em espectrograma e passando por uma CNN baseada na MobileNetV2.',
      'side.mine': 'Uma CNN que aprende a encontrar as minas do Campo Minado olhando tabuleiros parcialmente abertos. Dá para jogar junto com ela numa interface em Tkinter.',
      'side.ioeditor': 'Editor de texto para o terminal, com destaque de sintaxe, escrito do zero em C.',

      'stack.title': 'Ferramentas que uso',
      'stack.dl': 'Deep learning e visão',
      'stack.edge': 'Embarcados',
      'stack.lang': 'Linguagens',
      'stack.infra': 'Infraestrutura',
      'stack.data': 'Dados',
      'stack.other': 'Outros',
      'stack.quant': 'quantização INT8/INT16/FP16',
      'stack.cross': 'cross-compilação para aarch64',
      'stack.carla': 'simulador CARLA',

      'teach.title': 'Aulas',
      'teach.lead': 'Aulas de Aprendizado de Máquina e Deep Learning com Python na pós-graduação do IPOS. Foram 16 aulas em 4 módulos, de março a dezembro de 2025. As imagens abaixo são capturas de tela das aulas.',
      'teach.m1.title': 'Módulo 1: Fundamentos de ML',
      'teach.m1.date': 'março de 2025',
      'teach.m2.title': 'Módulo 2: Algoritmos e avaliação',
      'teach.m2.date': 'maio de 2025',
      'teach.m3.title': 'Módulo 3: Deep learning com Python',
      'teach.m3.date': 'outubro de 2025',
      'teach.m4.title': 'Módulo 4: Visão computacional',
      'teach.m4.date': 'dezembro de 2025',

      'contact.title': 'Contato',
      'contact.lead': 'Para conversar sobre pesquisa ou trabalho com visão computacional, o melhor caminho é o e‑mail.',
      'contact.phone': 'Telefone',
      'contact.city': 'Cidade',
      'contact.langs': 'Idiomas',
      'contact.langsValue': 'Português (nativo), inglês (avançado) e espanhol (intermediário)'
    },

    en: {
      'a11y.skip': 'Skip to content',

      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.research': 'Research',
      'nav.teaching': 'Teaching',
      'nav.contact': 'Contact',

      'w.since': 'Since',
      'w.to': 'to',
      'w.tools': 'Tools:',

      'intro.role': 'Senior AI Specialist at FPFtech and PhD candidate in Electrical Engineering at UFAM.',
      'intro.text': 'I have worked in computer vision since 2019. At CNT I was responsible for the models that assess thousands of kilometers of Brazilian highways, and during my MSc I detected deforestation in the Amazon from radar imagery. Today I build object detection for automotive safety that runs on embedded hardware.',
      'intro.cv': 'Résumé (PDF)',

      'about.title': 'About',
      'about.p1': 'I have a BSc in Computer Science and an MSc in Electrical Engineering, in Signal Processing, both from the University of Brasília (UnB). Since 2026 I have been a PhD candidate in Electrical Engineering at the Federal University of Amazonas (UFAM).',
      'about.p2': 'At FPFtech I work on vision systems for automotive safety: object detection and classification, depth estimation and image enhancement, all running on hardware with tight resource limits. I also teach Machine Learning and Deep Learning in the IPOS postgraduate program.',
      'about.p3': 'Before that I spent three years at the Brazilian National Transport Confederation, responsible for the models behind the CNT Road Survey, the largest highway survey in the country. During my MSc I worked on the Curupira project, with radar imagery of the Amazon, and on Gigasistêmica, with dental radiographs.',
      'about.p4': 'My interest in the field started in 2019, when I was a teaching assistant for Principles of Computer Vision at UnB. Outside work I enjoy music and games.',

      'exp.title': 'Experience',
      'exp.remote': 'remote',
      'exp.fpf.role': 'Senior AI Specialist',
      'exp.fpf.loc': 'Manaus (hybrid)',
      'exp.fpf.desc': 'I build computer vision systems for automotive safety that follow international industry regulations. I work across the whole pipeline: preprocessing, image quality assessment, model inference and performance monitoring on the embedded hardware.',
      'exp.fpf.quant': 'INT8/INT16/FP16 quantization',
      'exp.fpf.kd': 'knowledge distillation',
      'exp.ipos.role': 'Postgraduate Lecturer',
      'exp.ipos.desc': 'I teach Machine Learning with Python and Deep Learning with Python in the AI for Civil Construction specialization program. I prepare the content, the lectures and the assessments.',
      'exp.ipos.link': 'Course page',
      'exp.ipos.lessons': 'Lesson screenshots',
      'exp.cnt.role': 'AI Analyst',
      'exp.cnt.org': 'Brazilian National Transport Confederation (CNT), Brasília',
      'exp.cnt.desc': 'I was responsible for the AI models of the CNT Road Survey, from design to deployment. The systems detect and classify more than 40 road variables, such as pavement defects, signage, viaducts and guardrails.',
      'exp.unb.role': 'Postgraduate Researcher',
      'exp.unb.org': 'University of Brasília (UnB)',
      'exp.unb.desc': 'In the Curupira project, a partnership with CENSIPAM, I built a PyTorch system that detects deforestation and wildfires in the Amazon from Sentinel-1 SAR imagery. In Gigasistêmica, which I coordinate with the UnB School of Dentistry and the GigaCandanga network, I train segmentation models that find osteoporosis and atheromas in CT scans and panoramic radiographs. I also supervised data annotation in CVAT.',
      'exp.unb.code': 'Gigasistêmica code on GitHub',
      'exp.zerum.role': 'Data Scientist',
      'exp.zerum.desc': 'Classification of tax documents to detect fraud and anomalies. I trained LSTM and Transformer models for time series and put the classifier into production behind a Django API.',
      'exp.proic.role': 'Undergraduate Researcher',
      'exp.proic.desc': 'Reliability analysis of software product lines (ReAna project), funded by an FAP/DF scholarship.',
      'exp.ta.role': 'Teaching Assistant, Principles of Computer Vision',

      'pub.title': 'Research',
      'pub.pubsTitle': 'Publications',
      'pub.eduTitle': 'Education',
      'pub.sideTitle': 'Side projects',
      'pub.code': 'Code on GitHub',
      'pub.yolo.title': 'A Comprehensive Assessment of Optimized YOLO Architectures for Edge and Real-Time Applications',
      'pub.yolo.desc': 'Paper published at ICCT-Pacific 2026. Compares optimized YOLO architectures for real-time applications.',
      'pub.quant.title': 'Importance-Aware Quantization Strategy for Layer-Sensitive YOLO Architectures',
      'pub.quant.desc': 'Paper published at ICCT-Pacific 2026. Proposes a quantization strategy that takes the importance of each layer into account.',
      'pub.carotid.title': 'Detection and Segmentation of Carotid Atheroma Calcification in Dental Panoramic Radiographs Using a Hybrid Deep Learning Model',
      'pub.carotid.desc': 'A hybrid model that detects and segments carotid atheroma calcifications in panoramic radiographs.',
      'pub.msc.title': 'Deforestation Detection in SAR Images using Deep Neural Networks',
      'pub.msc.venue': 'MSc dissertation, UnB, 2024',
      'pub.msc.desc': 'Deforestation detection in Sentinel-1 scenes with deep convolutional networks.',
      'pub.sbrt.title': 'Comparative Study of Deforestation Detection in Sentinel-1 Scenes of the Amazon Forest',
      'pub.sbrt.desc': 'Proceedings of the 41st Brazilian Symposium on Telecommunications and Signal Processing, with Prof. Mylène C. Q. Farias and co-authors.',
      'pub.edu.phd': 'PhD in Electrical Engineering, in progress',
      'pub.edu.phdOrg': 'Federal University of Amazonas (UFAM), PPGEE',
      'pub.edu.msc': 'MSc in Electrical Engineering, Signal Processing',
      'pub.edu.mscNote': 'Advised by Prof. Mylène C. Q. Farias, with a FINATEC scholarship.',
      'pub.edu.bsc': 'BSc in Computer Science',
      'pub.edu.bscNote': 'Final thesis on deforestation detection in SAR images with deep neural networks, advised by Prof. Edson M. Hung, with an FAP/DF scholarship.',

      'side.parrot': 'Desktop app that transcribes audio and video on your own computer, using Whisper through CTranslate2. No internet connection or API key needed.',
      'side.speech': 'Recognizes spoken words in real time by turning audio into a spectrogram and running it through a MobileNetV2-based CNN.',
      'side.mine': 'A CNN that learns to find the mines in Minesweeper by looking at partially opened boards. You can play alongside it in a Tkinter window.',
      'side.ioeditor': 'A terminal text editor with syntax highlighting, written from scratch in C.',

      'stack.title': 'Tools I use',
      'stack.dl': 'Deep learning and vision',
      'stack.edge': 'Embedded',
      'stack.lang': 'Languages',
      'stack.infra': 'Infrastructure',
      'stack.data': 'Data',
      'stack.other': 'Other',
      'stack.quant': 'INT8/INT16/FP16 quantization',
      'stack.cross': 'aarch64 cross-compilation',
      'stack.carla': 'CARLA simulator',

      'teach.title': 'Teaching',
      'teach.lead': 'Machine Learning and Deep Learning with Python, taught in the IPOS postgraduate program. 16 lessons in 4 modules, from March to December 2025. The images below are screenshots from the lessons.',
      'teach.m1.title': 'Module 1: ML fundamentals',
      'teach.m1.date': 'March 2025',
      'teach.m2.title': 'Module 2: Algorithms and evaluation',
      'teach.m2.date': 'May 2025',
      'teach.m3.title': 'Module 3: Deep learning with Python',
      'teach.m3.date': 'October 2025',
      'teach.m4.title': 'Module 4: Computer vision',
      'teach.m4.date': 'December 2025',

      'contact.title': 'Contact',
      'contact.lead': 'To talk about research or computer vision work, email is the best way to reach me.',
      'contact.phone': 'Phone',
      'contact.city': 'City',
      'contact.langs': 'Languages',
      'contact.langsValue': 'Portuguese (native), English (advanced) and Spanish (intermediate)'
    }
  };

  var CV_HREF = {
    pt: 'assets/docs/Igor_Bispo_Curriculo_PT.pdf',
    en: 'assets/docs/Igor_Bispo_Resume_EN.pdf'
  };

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }
  function load(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  /* ----- Language ----- */
  function applyLang(lang) {
    if (!I18N[lang]) lang = 'pt';
    document.body.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');

    var dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      var value = dict[node.getAttribute('data-i18n')];
      if (value) node.textContent = value;
    });

    var cv = document.getElementById('cvLink');
    if (cv) cv.setAttribute('href', CV_HREF[lang]);

    document.querySelectorAll('.lang button').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });

    store('lang', lang);
  }

  function initialLang() {
    var saved = load('lang');
    if (saved && I18N[saved]) return saved;
    var nav = (navigator.language || 'pt').toLowerCase();
    return nav.indexOf('pt') === 0 ? 'pt' : 'en';
  }

  function initLangToggle() {
    document.querySelectorAll('.lang button').forEach(function (btn) {
      btn.addEventListener('click', function () { applyLang(btn.getAttribute('data-lang')); });
    });
  }

  /* ----- Theme (initial value is set by the inline script in <head>) ----- */
  function initThemeToggle() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      store('theme', next);
    });
  }

  /* ----- Lightbox with keyboard navigation ----- */
  function initLightbox() {
    var lb = document.getElementById('lightbox');
    var img = document.getElementById('lbImg');
    var count = document.getElementById('lbCount');
    if (!lb || !img) return;

    var shots = Array.prototype.slice.call(document.querySelectorAll('.shot'));
    var index = -1;
    var opener = null;

    function show(i) {
      index = (i + shots.length) % shots.length;
      var el = shots[index];
      img.src = el.getAttribute('href');
      img.alt = el.querySelector('img').alt;
      if (count) count.textContent = (index + 1) + ' / ' + shots.length;
    }
    function open(i) {
      opener = document.activeElement;
      show(i);
      lb.setAttribute('data-open', '');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lb.querySelector('.lb-close').focus();
    }
    function close() {
      lb.removeAttribute('data-open');
      lb.setAttribute('aria-hidden', 'true');
      img.removeAttribute('src');
      document.body.style.overflow = '';
      if (opener) opener.focus();
    }

    shots.forEach(function (el, i) {
      el.addEventListener('click', function (ev) { ev.preventDefault(); open(i); });
    });
    lb.querySelector('.lb-close').addEventListener('click', close);
    lb.addEventListener('click', function (ev) { if (ev.target === lb) close(); });
    document.addEventListener('keydown', function (ev) {
      if (!lb.hasAttribute('data-open')) return;
      if (ev.key === 'Escape') close();
      else if (ev.key === 'ArrowRight') show(index + 1);
      else if (ev.key === 'ArrowLeft') show(index - 1);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(initialLang());
    initLangToggle();
    initThemeToggle();
    initLightbox();
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
})();
