(function () {
  'use strict';

  var I18N = {
    pt: {
      'nav.about': 'Sobre',
      'nav.stack': 'Stack',
      'nav.experience': 'Experiência',
      'nav.teaching': 'Aulas',
      'nav.publications': 'Publicações',
      'nav.contact': 'Contato',

      'hero.eyebrow': 'Especialista em IA · Visão Computacional',
      'hero.sub': 'Engenheiro de deep learning e visão computacional com mais de 5 anos aplicando IA em domínios críticos — rodovias, sensoriamento remoto (SAR), imagens médicas e segurança automotiva.',
      'hero.downloadCv': 'Baixar currículo (PDF)',
      'hero.contact': 'Entrar em contato',
      'hero.location': 'Localização',
      'hero.edu': 'Formação',
      'hero.eduValue': 'MSc Eng. Elétrica — UnB',
      'hero.langs': 'Idiomas',
      'hero.langsValue': 'PT (nativo) · EN (avançado) · ES (intermediário)',

      'about.kicker': '// sobre',
      'about.title': 'Sobre mim',
      'about.p1': 'Cientista da computação formado pela Universidade de Brasília (UnB) com mestrado em Engenharia Elétrica na área de Processamento de Sinais. Desde o início da graduação, venho atuando com inteligência artificial e visão computacional, tanto em projetos acadêmicos quanto profissionais.',
      'about.p2': 'Atualmente, Especialista de IA Sênior na FPFtech, desenvolvendo sistemas de visão computacional para segurança automotiva — detecção e classificação de objetos, estimativa de profundidade e aprimoramento visual em hardware embarcado. Também leciono Aprendizado de Máquina e Deep Learning em pós-graduação no IPOS.',
      'about.p3': 'Atuei no ciclo completo de modelos de IA na Pesquisa CNT de Rodovias — a maior pesquisa rodoviária do Brasil — detectando mais de 40 variáveis de infraestrutura viária. No mestrado, participei dos projetos Curupira (desmatamento e incêndios na Amazônia com imagens SAR) e Gigasistêmica (diagnóstico de osteoporose e ateromas em imagens médicas).',

      'stack.kicker': '// stack',
      'stack.title': 'Stack Técnica',
      'stack.dlTitle': 'Deep Learning & CV',
      'stack.langTitle': 'Linguagens',
      'stack.imgTitle': 'Processamento de Imagem',
      'stack.sar': 'Imagens SAR',
      'stack.med': 'Imagens médicas',
      'stack.depth': 'Depth estimation',
      'stack.embedded': 'Vídeo embarcado',
      'stack.enhance': 'Aprimoramento visual',
      'stack.mlopsTitle': 'MLOps & Infra',
      'stack.dataTitle': 'Dados',
      'stack.toolsTitle': 'Ferramentas',
      'stack.cvat': 'CVAT (anotação)',

      'exp.kicker': '// trajetória',
      'exp.title': 'Experiência Profissional',
      'exp.present': 'presente',
      'exp.remote': 'Remoto',
      'exp.fpf.role': 'Especialista de IA Sênior',
      'exp.fpf.loc': 'Manaus, AM (híbrido)',
      'exp.fpf.desc': 'Desenvolvimento de sistemas de visão computacional para segurança automotiva: detecção e classificação de objetos em conformidade com regulamentações internacionais, estimativa de profundidade e aprimoramento visual. Atuação em todo o pipeline — pré-processamento, avaliação de qualidade de imagem, inferência com deep learning e monitoramento de performance em hardware embarcado.',
      'exp.ipos.role': 'Professor de Pós-Graduação',
      'exp.ipos.desc': 'Docência de Aprendizado de Máquina com Python e Deep Learning com Python na especialização em Inteligência Artificial para Construção Civil. Planejamento do conteúdo programático, condução de aulas e elaboração de atividades avaliativas.',
      'exp.cnt.role': 'Analista de IA',
      'exp.cnt.loc': 'Brasília, DF',
      'exp.cnt.desc': 'Responsável pelo ciclo completo de modelos de IA para a Pesquisa CNT de Rodovias — a maior pesquisa rodoviária do Brasil. Desenvolveu e manteve sistemas de detecção, classificação e análise de mais de 40 variáveis viárias (defeitos de pavimento, sinalização, viadutos, guardrails).',
      'exp.unb.role': 'Pesquisador de Pós-Graduação',
      'exp.unb.desc': 'Projeto Curupira — sistema de detecção de desmatamento e incêndios na Amazônia a partir de imagens SAR (Sentinel-1) com PyTorch e redes convolucionais profundas. Projeto Gigasistêmica — modelos para diagnóstico de osteoporose e ateromas em TC e panorâmica dental (U-Net, segmentação semântica). Supervisão de pipeline de anotação no CVAT.',
      'exp.unb.medCT': 'TC médica',
      'exp.zerum.role': 'Cientista de Dados',
      'exp.zerum.desc': 'Análise de linguagem natural e classificação de textos fiscais com foco em detecção de fraudes e anomalias. Modelos LSTM e Transformer para séries temporais. API de classificação em produção com Django.',

      'teach.kicker': '// docência',
      'teach.title': 'Aulas & Docência',
      'teach.lead': 'Pós-graduação IPOS — Aprendizado de Máquina e Deep Learning com Python. Frames extraídos das aulas ministradas entre março e dezembro de 2025.',
      'teach.statLessons': 'aulas',
      'teach.statMods': 'módulos',
      'teach.statYear': 'turma',
      'teach.m1.title': 'Módulo 1 — Fundamentos de ML',
      'teach.m2.title': 'Módulo 2 — Algoritmos e Avaliação',
      'teach.m3.title': 'Módulo 3 — Deep Learning com Python',
      'teach.m4.title': 'Módulo 4 — Visão Computacional',

      'pub.kicker': '// pesquisa',
      'pub.title': 'Publicações & Formação',
      'pub.msc.title': 'Deforestation Detection in SAR Images using Deep Neural Networks',
      'pub.msc.desc': 'Dissertação de Mestrado — Engenharia Elétrica, Universidade de Brasília. Detecção de desmatamento em cenas Sentinel-1 com arquiteturas convolucionais profundas.',
      'pub.sbrt.title': 'Estudo Comparativo da Detecção de Desmatamento em Cenas Sentinel-1 da Floresta Amazônica',
      'pub.sbrt.desc': 'Anais do XLI Simpósio Brasileiro de Telecomunicações e Processamento de Sinais. Co-autoria com Prof. M. Farias et al.',
      'pub.edu.tag': 'Formação',
      'pub.edu.msc': 'Engenharia Elétrica — Processamento de Sinais',
      'pub.edu.bsc': 'Ciência da Computação',

      'contact.kicker': '// contato',
      'contact.title': 'Vamos conversar',
      'contact.lead': 'Aberto a colaborações em pesquisa aplicada, projetos de visão computacional e oportunidades em IA.',

      'footer.made': 'Feito com HTML, CSS e muito café ☕.'
    },

    en: {
      'nav.about': 'About',
      'nav.stack': 'Stack',
      'nav.experience': 'Experience',
      'nav.teaching': 'Teaching',
      'nav.publications': 'Publications',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'AI Specialist · Computer Vision',
      'hero.sub': 'Deep learning and computer vision engineer with 5+ years applying AI to mission-critical domains — road infrastructure, SAR remote sensing, medical imaging and automotive safety.',
      'hero.downloadCv': 'Download résumé (PDF)',
      'hero.contact': 'Get in touch',
      'hero.location': 'Location',
      'hero.edu': 'Education',
      'hero.eduValue': 'MSc Electrical Eng. — UnB',
      'hero.langs': 'Languages',
      'hero.langsValue': 'PT (native) · EN (advanced) · ES (intermediate)',

      'about.kicker': '// about',
      'about.title': 'About me',
      'about.p1': 'Computer scientist trained at the University of Brasília (UnB), with an MSc in Electrical Engineering focused on Signal Processing. Since my undergraduate years I have been working with artificial intelligence and computer vision, in both academic and industry projects.',
      'about.p2': 'Currently Senior AI Specialist at FPFtech, developing computer vision systems for automotive safety — object detection and classification, depth estimation and visual enhancement on resource-constrained embedded hardware. I also lecture Machine Learning and Deep Learning at the IPOS postgraduate program.',
      'about.p3': 'Owned the full AI model lifecycle for the CNT Road Survey — Brazil\'s largest highway assessment program — detecting 40+ road infrastructure variables. During my MSc I contributed to the Curupira project (deforestation and wildfire detection in the Amazon from SAR imagery) and Gigasistêmica (osteoporosis and atheroma diagnosis in medical imaging).',

      'stack.kicker': '// stack',
      'stack.title': 'Technical Stack',
      'stack.dlTitle': 'Deep Learning & CV',
      'stack.langTitle': 'Languages',
      'stack.imgTitle': 'Image Processing',
      'stack.sar': 'SAR imagery',
      'stack.med': 'Medical imaging',
      'stack.depth': 'Depth estimation',
      'stack.embedded': 'Embedded video',
      'stack.enhance': 'Visual enhancement',
      'stack.mlopsTitle': 'MLOps & Infra',
      'stack.dataTitle': 'Data',
      'stack.toolsTitle': 'Tools',
      'stack.cvat': 'CVAT (annotation)',

      'exp.kicker': '// journey',
      'exp.title': 'Work Experience',
      'exp.present': 'present',
      'exp.remote': 'Remote',
      'exp.fpf.role': 'Senior AI Specialist',
      'exp.fpf.loc': 'Manaus, Brazil (hybrid)',
      'exp.fpf.desc': 'Developed computer vision systems for automotive safety: object detection and classification in compliance with international industry regulations, depth estimation and visual enhancement. Worked across the full CV pipeline — preprocessing, image quality assessment, deep learning inference and performance monitoring on resource-constrained embedded hardware.',
      'exp.ipos.role': 'Postgraduate Lecturer',
      'exp.ipos.desc': 'Teaching Machine Learning with Python and Deep Learning with Python in the AI for Civil Construction specialization program. Responsible for curriculum design, course delivery and assessment.',
      'exp.cnt.role': 'AI Analyst',
      'exp.cnt.loc': 'Brasília, Brazil',
      'exp.cnt.desc': 'Managed the full AI model lifecycle — design, training and deployment — for the CNT Road Survey, Brazil\'s largest highway assessment program. Built and maintained detection, classification and analysis systems covering 40+ road variables (pavement defects, signage, viaducts, guardrails).',
      'exp.unb.role': 'Postgraduate Researcher',
      'exp.unb.desc': 'Curupira project: built a deforestation and wildfire detection system for Sentinel-1 SAR imagery using PyTorch and deep convolutional networks. Gigasistêmica project: designed and trained models for osteoporosis and atheroma detection in CT and dental panoramic images (U-Net, semantic segmentation). Supervised annotation pipelines in CVAT.',
      'exp.unb.medCT': 'Medical CT',
      'exp.zerum.role': 'Data Scientist',
      'exp.zerum.desc': 'Natural language analysis and fiscal text classification for fraud and anomaly detection. Developed LSTM and Transformer models for time-series data. Production classification API with Django.',

      'teach.kicker': '// teaching',
      'teach.title': 'Teaching',
      'teach.lead': 'IPOS postgraduate program — Machine Learning and Deep Learning with Python. Frames captured from the lectures delivered between March and December 2025.',
      'teach.statLessons': 'lessons',
      'teach.statMods': 'modules',
      'teach.statYear': 'cohort',
      'teach.m1.title': 'Module 1 — ML Fundamentals',
      'teach.m2.title': 'Module 2 — Algorithms & Evaluation',
      'teach.m3.title': 'Module 3 — Deep Learning with Python',
      'teach.m4.title': 'Module 4 — Computer Vision',

      'pub.kicker': '// research',
      'pub.title': 'Publications & Education',
      'pub.msc.title': 'Deforestation Detection in SAR Images using Deep Neural Networks',
      'pub.msc.desc': 'MSc Dissertation — Electrical Engineering, University of Brasília. Deforestation detection in Sentinel-1 scenes using deep convolutional architectures.',
      'pub.sbrt.title': 'Comparative Study of Deforestation Detection in Sentinel-1 Scenes of the Amazon Forest',
      'pub.sbrt.desc': 'Proceedings of the XLI Brazilian Symposium on Telecommunications and Signal Processing. Co-authored with Prof. M. Farias et al.',
      'pub.edu.tag': 'Education',
      'pub.edu.msc': 'Electrical Engineering — Signal Processing',
      'pub.edu.bsc': 'Computer Science',

      'contact.kicker': '// contact',
      'contact.title': 'Let\'s talk',
      'contact.lead': 'Open to collaborations in applied research, computer vision projects and AI opportunities.',

      'footer.made': 'Built with HTML, CSS and plenty of coffee ☕.'
    }
  };

  var CV_HREF = {
    pt: 'assets/docs/Igor_Bispo_Curriculo_PT.pdf',
    en: 'assets/docs/Igor_Bispo_Resume_EN.pdf'
  };

  function applyLang(lang) {
    if (!I18N[lang]) lang = 'pt';
    document.body.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');

    var dict = I18N[lang];
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[key]) nodes[i].textContent = dict[key];
    }

    var cv = document.getElementById('cvLink');
    if (cv) cv.setAttribute('href', CV_HREF[lang]);

    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  function initLangToggle() {
    var btn = document.getElementById('langToggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var cur = document.body.getAttribute('data-lang') || 'pt';
      applyLang(cur === 'pt' ? 'en' : 'pt');
    });
    var opts = btn.querySelectorAll('.lang-opt');
    for (var i = 0; i < opts.length; i++) {
      (function (el) {
        el.addEventListener('click', function (ev) {
          ev.stopPropagation();
          applyLang(el.getAttribute('data-lang'));
        });
      })(opts[i]);
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }

  function initThemeToggle() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme') || 'dark';
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    });
  }

  function initLightbox() {
    var lb = document.getElementById('lightbox');
    var img = document.getElementById('lbImg');
    var closeBtn = lb ? lb.querySelector('.lb-close') : null;
    if (!lb || !img) return;

    function open(src, alt) {
      img.src = src;
      img.alt = alt || '';
      lb.setAttribute('data-open', '1');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      lb.removeAttribute('data-open');
      img.src = '';
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.shot').forEach(function (el) {
      el.addEventListener('click', function (ev) {
        ev.preventDefault();
        open(el.getAttribute('href'), el.querySelector('img').alt);
      });
    });
    if (closeBtn) closeBtn.addEventListener('click', close);
    lb.addEventListener('click', function (ev) { if (ev.target === lb) close(); });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && lb.getAttribute('data-open')) close();
    });
  }

  function initReveal() {
    if (!('IntersectionObserver' in window)) return;
    var targets = document.querySelectorAll('.section, .tl-item, .stack-card, .pub-card, .module, .hero-meta li');
    targets.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    targets.forEach(function (el) { io.observe(el); });
    // Safety net: if any element hasn't been revealed after 3.5s, force-show.
    setTimeout(function () {
      targets.forEach(function (el) {
        if (!el.classList.contains('in')) el.classList.add('in');
      });
    }, 3500);
  }

  function initYear() {
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  function bootLangFromStorage() {
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    if (saved && I18N[saved]) return saved;
    var nav = (navigator.language || 'pt').toLowerCase();
    return nav.indexOf('pt') === 0 ? 'pt' : 'en';
  }

  function bootThemeFromStorage() {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    if (saved === 'light' || saved === 'dark') return saved;
    var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(bootThemeFromStorage());
    applyLang(bootLangFromStorage());
    initLangToggle();
    initThemeToggle();
    initLightbox();
    initReveal();
    initYear();
  });
})();
