const publicationDate = '2026-10-17';

function article(story) {
  return {
    ...story,
    publishedAt: publicationDate,
    author: 'Redação INFM',
    status: 'published',
    featured: story.featured ?? false
  };
}

export const tornadoStories = [
  article({
    id: 'parana-propicio-tornados', slug: 'por-que-parana-propicio-tornados',
    title: 'Por que o Paraná é uma das regiões brasileiras mais propícias a tornados?',
    featured: true,
    summary: 'A posição do estado na América do Sul, a umidade transportada do norte do continente e o encontro de massas de ar favorecem ambientes de tempestade organizada.',
    content: [
      'O Paraná está em uma área do Centro-Sul da América do Sul onde tempestades severas podem encontrar calor, umidade e ventos que mudam de velocidade ou direção com a altura. Essa combinação favorece tempestades organizadas, algumas delas com rotação interna e potencial para produzir tornados.',
      'O Simepar destaca a influência da Cordilheira dos Andes, que ajuda a canalizar em baixos níveis o transporte de ar úmido da Amazônia para o Centro-Sul do continente. A passagem frequente de frentes frias acrescenta contraste entre massas de ar e pode intensificar a instabilidade. Nenhum desses fatores, isoladamente, garante a formação de um tornado.',
      'Em publicação de 2025, o Simepar afirmou que o Centro-Sul da América do Sul, especialmente o oeste dos estados do Sul do Brasil, concentra grande parte dos registros nacionais. Isso descreve uma região favorável, não uma previsão para um dia específico nem uma comparação absoluta com cada região brasileira.',
      'A ocorrência também depende de condições de escala local e de que a rotação de uma tempestade se estenda até o solo. Por isso, ambiente favorável, tempestade severa e tornado confirmado são conceitos diferentes.'
    ],
    category: 'Tornados',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Evolution_of_a_Tornado.jpg/1920px-Evolution_of_a_Tornado.jpg',
    imageAlt: 'Fotomontagem ilustrativa de um tornado no Kansas, Estados Unidos, em 2016; não representa uma ocorrência no Paraná.',
    imageType: 'photo',
    imageCaption: 'Fotomontagem de oito imagens de um tornado no Kansas, EUA, em 24 de maio de 2016; não representa uma ocorrência no Paraná. Foto: Jason Weingart, Wikimedia Commons, CC BY-SA 4.0.',
    sources: [
      { name: 'Simepar — ciclones, tornados ou furacões: diferenças entre os fenômenos', url: 'https://www.simepar.br/simepar/post/72141', publishedAt: '2025-12-22' },
      { name: 'Tornadoes in Southeast South America: mesoscale to planetary-scale environments', url: 'https://journals.ametsoc.org/view/journals/mwre/152/1/MWR-D-22-0248.1.xml', publishedAt: '2024-01-01' },
      { name: 'Wikimedia Commons — Evolution of a Tornado (CC BY-SA 4.0)', url: 'https://commons.wikimedia.org/wiki/File:Evolution_of_a_Tornado.jpg' }
    ]
  }),
  article({
    id: 'nascimento-tornado', slug: 'como-nasce-um-tornado',
    title: 'Como nasce um tornado? Entenda o processo desde a formação da tempestade',
    summary: 'Umidade, ar instável e um mecanismo de elevação formam a tempestade; rotação organizada pode, em certas condições, chegar à superfície.',
    content: [
      'O processo começa com uma tempestade, não com um funil isolado. Ar úmido próximo ao solo pode subir quando aquecido ou elevado por uma frente. Ao subir, esfria; o vapor condensa e forma nuvens. Se a atmosfera é instável, a corrente ascendente continua alimentando a nuvem e a tempestade se desenvolve.',
      'Em algumas tempestades severas, a diferença de velocidade e direção do vento com a altura — o cisalhamento — ajuda a organizar a circulação. Em uma supercélula, uma corrente ascendente rotativa chamada mesociclone pode sustentar uma estrutura duradoura. Nem toda supercélula produz tornado.',
      'A formação de um tornado envolve processos de pequena escala e ainda não é totalmente compreendida. A rotação precisa se intensificar e conectar-se à superfície. Uma nuvem em forma de funil sem contato confirmado com o solo não basta, por si só, para estabelecer que um tornado ocorreu.',
      'A explicação descreve mecanismos gerais. Não permite prever que uma tempestade específica vai gerar um tornado, nem em qual ponto ele tocaria o chão.'
    ],
    category: 'Tornados',
    image: 'https://www.nssl.noaa.gov/education/svrwx101/tornadoes/img/funnel-800.jpg',
    imageAlt: 'Funil de condensação sob uma tempestade, usado pelo NOAA NSSL para explicar a estrutura visual de um tornado.',
    imageType: 'photo',
    imageCaption: 'Funil de condensação fotografado em outro evento; não é um tornado no Paraná. Crédito: NOAA National Severe Storms Laboratory.',
    sources: [
      { name: 'NOAA/NSSL — tornado basics', url: 'https://www.nssl.noaa.gov/education/svrwx101/tornadoes/' },
      { name: 'NOAA/NSSL — thunderstorm basics', url: 'https://www.nssl.noaa.gov/education/svrwx101/thunderstorms/' },
      { name: 'Simepar — tornados, supercélulas e microexplosões', url: 'https://www.simepar.br/simepar/post/71027', publishedAt: '2025-11-05' }
    ]
  }),
  article({
    id: 'fujita-f2-f3', slug: 'tornado-f2-f3-escala-fujita',
    title: 'Tornado F2 e F3: o que muda entre as categorias da Escala Fujita?',
    summary: 'A categoria é estimada a partir de indicadores e graus de dano; não é uma leitura direta de anemômetro durante a passagem.',
    content: [
      'A Escala Fujita classifica a intensidade de um tornado a partir dos danos examinados após o evento. F2 e F3 são categorias diferentes da escala original: a segunda representa danos estimados mais severos do que a primeira. A categoria não é definida apenas pela aparência de uma imagem ou por um único objeto atingido.',
      'Na vistoria, especialistas avaliam diferentes indicadores — como construções, árvores, postes e torres — e o grau de dano em cada um. Também consideram materiais, dimensões, construção, ancoragem e condição anterior. O padrão espacial dos danos ajuda a distinguir rotação tornádica de ventos descendentes ou outros fenômenos.',
      'O Simepar informou, em janeiro de 2026, uma classificação F2 para o tornado de São José dos Pinhais; em agosto, classificou como F3 o tornado de Piraí do Sul. Em ambos os casos, o processo foi uma análise técnica posterior. As velocidades associadas às categorias são estimativas inferidas dos danos, não medições diretas feitas dentro do tornado.',
      'A escala Fujita original não deve ser confundida com a Escala Fujita Aprimorada (EF), utilizada pelo serviço meteorológico dos Estados Unidos. Ao citar um caso, é importante preservar a escala que a fonte responsável efetivamente aplicou.'
    ],
    category: 'Tornados',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/FEMA_-_44359_-_Oklahoma_tornado_destroyed_home.jpg',
    imageAlt: 'Casa destruída por tornado em Oklahoma, Estados Unidos, em 2010; imagem ilustrativa de danos usados em avaliações, sem relação com tornados paranaenses.',
    imageType: 'photo',
    imageCaption: 'Residência danificada por tornado em Oklahoma, EUA; imagem de outro evento e usada apenas para ilustração. Foto: Win Henderson/FEMA, domínio público.',
    sources: [
      { name: 'Simepar — metodologia de classificação oficial de tornados', url: 'https://www.simepar.br/simepar/post/77985', publishedAt: '2026-08-14' },
      { name: 'Simepar — tornado de São José dos Pinhais classificado como F2', url: 'https://www.simepar.br/simepar/post/72623', publishedAt: '2026-01-11' },
      { name: 'Simepar — tornado de Piraí do Sul classificado como F3', url: 'https://www.simepar.br/simepar/post/77986', publishedAt: '2026-08-14' },
      { name: 'NOAA/NSSL — como a intensidade de tornados é avaliada', url: 'https://www.nssl.noaa.gov/education/svrwx101/tornadoes/faq/' },
      { name: 'Imagem: FEMA — casa danificada por tornado (domínio público)', url: 'https://commons.wikimedia.org/wiki/File:FEMA_-_44359_-_Oklahoma_tornado_destroyed_home.jpg' }
    ]
  }),
  article({
    id: 'supercelulas-geram-tornados-granizo', slug: 'supercelulas-tempestades-tornados-granizo',
    title: 'Supercélulas: as tempestades que podem gerar tornados e granizo gigante',
    summary: 'Uma corrente ascendente rotativa diferencia a supercélula; ela pode produzir vários perigos, mas não necessariamente um tornado.',
    content: [
      'Supercélula é uma tempestade organizada que contém uma corrente ascendente persistente e rotativa, chamada mesociclone. Instabilidade e cisalhamento vertical do vento ajudam a estruturar esse sistema e podem prolongar sua vida em comparação com tempestades comuns.',
      'Uma supercélula pode produzir granizo grande, chuva intensa, raios, rajadas destrutivas e, em algumas circunstâncias, tornado. A existência de rotação dentro da nuvem não prova que um vórtice chegou ao solo; meteorologistas precisam analisar a estrutura da tempestade e as evidências de superfície.',
      'Correntes ascendentes fortes conseguem manter partículas de gelo dentro da nuvem por mais tempo, favorecendo seu crescimento ao encontrar água super-resfriada. Se o granizo se torna pesado demais para a corrente, cai. O tamanho e a ocorrência dependem da dinâmica de cada tempestade.',
      'Por isso, “supercélula” descreve a organização da tempestade, não um resultado inevitável. Alertas oficiais tratam dos riscos previstos na região e devem orientar a preparação.'
    ],
    category: 'Clima Severo',
    image: 'https://www.nssl.noaa.gov/education/svrwx101/tornadoes/img/ElRenoUnionCity_supercell_annotated.jpg',
    imageAlt: 'Supercélula com características meteorológicas identificadas em imagem educativa do NOAA NSSL.',
    imageType: 'photo',
    imageCaption: 'Supercélula fotografada nos Estados Unidos e anotada para fins educativos; imagem ilustrativa, não representa o Paraná. Crédito: Brian e Steve Koch/NOAA NSSL.',
    sources: [
      { name: 'Simepar — supercélulas, tornados e microexplosões', url: 'https://www.simepar.br/simepar/post/71027', publishedAt: '2025-11-05' },
      { name: 'NOAA/NSSL — thunderstorm basics', url: 'https://www.nssl.noaa.gov/education/svrwx101/thunderstorms/' },
      { name: 'NOAA/NSSL — hail basics', url: 'https://www.nssl.noaa.gov/education/svrwx101/hail/' },
      { name: 'Imagem: NOAA NSSL — supercélula El Reno/Union City', url: 'https://www.nssl.noaa.gov/education/svrwx101/tornadoes/' }
    ]
  }),
  article({
    id: 'tornado-microexplosao-diferencas', slug: 'tornado-ou-microexplosao-diferencas',
    title: 'Tornado ou microexplosão? Como os meteorologistas diferenciam os fenômenos',
    summary: 'A orientação dos danos, os dados de radar e a vistoria de campo ajudam a separar ventos rotativos de correntes descendentes.',
    content: [
      'Tornados e microexplosões podem deixar árvores caídas e construções danificadas, mas seus mecanismos são diferentes. No tornado, o vento gira em uma faixa estreita e o padrão de danos pode mudar de orientação ou convergir ao longo do percurso. No downburst, uma corrente descendente atinge o solo e o ar se espalha para fora, muitas vezes deixando danos divergentes ou alinhados.',
      'Essa diferença é uma pista, não uma regra isolada. O Simepar cruza radar e satélite com vídeos, relatos, levantamentos aéreos e vistorias. Para classificar intensidade, examina vários indicadores de dano, condições das estruturas e distribuição espacial.',
      'Nas análises de setembro de 2026, o Simepar identificou tornados em Francisco Alves e Goioerê, mas informou que a classificação Fujita ainda era inconclusiva. Em outra análise, danos de tempestades em Francisco Beltrão e Apucarana foram considerados compatíveis com downburst, sem indícios de tornado nos casos examinados.',
      'A mensagem operacional é importante: downbursts também podem ser destrutivos e exigem abrigo. Não espere conseguir diagnosticar o fenômeno pela aparência; siga avisos da Defesa Civil e dos serviços meteorológicos.'
    ],
    category: 'Tornados',
    image: 'https://www.nssl.noaa.gov/education/svrwx101/img/wind-1200x360.jpg',
    imageAlt: 'Danos provocados por vento de tempestade, imagem educativa do NOAA NSSL; ilustração de vento não tornádico.',
    imageType: 'photo',
    imageCaption: 'Imagem educativa de danos por vento associada a tempestades; não documenta um downburst no Brasil. Crédito: NOAA National Severe Storms Laboratory.',
    sources: [
      { name: 'Simepar — metodologia para classificar tornados', url: 'https://www.simepar.br/simepar/post/77985', publishedAt: '2026-08-14' },
      { name: 'Simepar — análise das tempestades de 21 de setembro de 2026', url: 'https://www.simepar.br/simepar/post/78996', publishedAt: '2026-09-23' },
      { name: 'Simepar — análise das tempestades de 29 de setembro de 2026', url: 'https://www.simepar.br/simepar/post/79161', publishedAt: '2026-09-30' },
      { name: 'Imagem: NOAA NSSL — ventos danosos de tempestade', url: 'https://www.nssl.noaa.gov/education/svrwx101/wind/' }
    ]
  }),
  article({
    id: 'como-simepar-confirma-tornado', slug: 'como-simepar-confirma-tornado',
    title: 'Como o Simepar confirma que um tornado realmente aconteceu?',
    summary: 'A confirmação combina sinais de radar e satélite com vídeos, relatos e danos; a classificação da intensidade vem depois.',
    content: [
      'Confirmar que houve um tornado e estimar sua intensidade são etapas distintas. O Simepar explica que o radar pode identificar circulação dentro de uma tempestade e, em certas condições, partículas ou detritos suspensos; isso oferece sinais, mas não substitui a verificação de que o fenômeno causou uma circulação em contato com a superfície.',
      'Na etapa inicial, meteorologistas recebem imagens e relatos da população e da Defesa Civil e os comparam com radar e satélite. Se o conjunto de evidências é coerente com um tornado, a ocorrência pode ser confirmada enquanto a categoria ainda permanece em aberto.',
      'A avaliação posterior inclui vistoria e georreferenciamento de danos, entrevistas, comparação de imagens anteriores e posteriores e, conforme o caso, mapeamento por drone ou levantamento aéreo. Os especialistas avaliam vários indicadores e o padrão espacial; um telhado destruído ou uma rajada forte, por si só, não determina uma categoria.',
      'No Paraná, o Simepar publicou casos inicialmente confirmados cuja intensidade foi investigada depois. Em outros eventos, como parte das tempestades de setembro de 2026, a análise não encontrou indícios de tornado e apontou downburst. Isso mostra por que uma conclusão técnica pode levar horas ou dias.'
    ],
    category: 'Ciência',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Buckland_Park_weather_radar_station.JPG',
    imageAlt: 'Torre de radar meteorológico em Buckland Park, Austrália; foto ilustrativa de equipamento de observação.',
    imageType: 'photo',
    imageCaption: 'Estação de radar meteorológico em Buckland Park, Austrália; ilustração, não é um radar do Simepar. Foto: Fairv8, Wikimedia Commons, CC BY-SA 3.0.',
    sources: [
      { name: 'Simepar — padrões e metodologia de classificação de tornados', url: 'https://www.simepar.br/simepar/post/77985', publishedAt: '2026-08-14' },
      { name: 'Simepar — confirmação de dois tornados em setembro de 2026', url: 'https://www.simepar.br/simepar/post/78662', publishedAt: '2026-09-10' },
      { name: 'Simepar — tornados identificados no balanço de setembro', url: 'https://www.simepar.br/simepar/post/79188', publishedAt: '2026-10-01' },
      { name: 'Imagem: Wikimedia Commons — Buckland Park weather radar station (CC BY-SA 3.0)', url: 'https://commons.wikimedia.org/wiki/File:Buckland_Park_weather_radar_station.JPG' }
    ]
  }),
  article({
    id: 'tornados-brasil-casos-ciencia', slug: 'tornados-brasil-casos-historicos-ciencia',
    title: 'Tornados no Brasil: os casos mais marcantes e o que a ciência aprendeu',
    summary: 'Casos documentados no Paraná mostram avanços de vistoria; séries de ocorrências ainda dependem de critérios e registros desiguais.',
    content: [
      'O Brasil registra tornados, sobretudo no Centro-Sul, mas não há um catálogo histórico homogêneo que permita tratar todo relato como evento confirmado. A documentação depende de observação, acesso ao local, evidências de radar e danos que possam ser distinguidos de rajadas descendentes ou outros fenômenos.',
      'O Simepar publicou classificações de episódios recentes no Paraná: F2 em São José dos Pinhais em janeiro de 2026 e F3 em Piraí do Sul em agosto. Já os tornados identificados em Francisco Alves e Goioerê, em setembro, ainda constavam sem classificação Fujita conclusiva no balanço mensal.',
      'Casos severos, como o tornado de Rio Bonito do Iguaçu em 2025, também motivaram levantamentos detalhados e atualizações de registros. Comparar eventos exige respeitar a fonte, a escala usada e o estágio da análise; uma categoria em uma notícia preliminar pode ser revisada quando chegam novos dados.',
      'Estudos sobre a América do Sul constroem bases a partir de relatos publicados e observações disponíveis. Os próprios pesquisadores alertam, na prática, para limitações de cobertura: áreas com menos população, radar ou equipes de vistoria podem ter eventos não observados ou documentados de modo incompleto. Aprender com os casos inclui aperfeiçoar o registro, não transformar listas em contagens absolutas.'
    ],
    category: 'Tornados',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/F5_tornado_Elie_Manitoba_2007.jpg',
    imageAlt: 'Tornado fotografado em Elie, Manitoba, Canadá, em 2007; imagem histórica de outro país, não de um caso brasileiro.',
    imageType: 'photo',
    imageCaption: 'Tornado em Elie, Manitoba, Canadá, em 22 de junho de 2007; não é um evento brasileiro. Foto: Justin Hobson, Wikimedia Commons, CC BY-SA 3.0.',
    sources: [
      { name: 'Simepar — classificação F2 de São José dos Pinhais', url: 'https://www.simepar.br/simepar/post/72623', publishedAt: '2026-01-11' },
      { name: 'Simepar — classificação F3 de Piraí do Sul', url: 'https://www.simepar.br/simepar/post/77986', publishedAt: '2026-08-14' },
      { name: 'Simepar — tornados de setembro de 2026 e ressalva de classificação', url: 'https://www.simepar.br/simepar/post/79188', publishedAt: '2026-10-01' },
      { name: 'Vera et al. — tornadoes in Southeast South America (Monthly Weather Review)', url: 'https://journals.ametsoc.org/view/journals/mwre/152/1/MWR-D-22-0248.1.xml', publishedAt: '2024-01-01' },
      { name: 'Imagem: Justin Hobson, Wikimedia Commons (CC BY-SA 3.0)', url: 'https://commons.wikimedia.org/wiki/File:F5_tornado_Elie_Manitoba_2007.jpg' }
    ]
  }),
  article({
    id: 'previsao-tornado-antecedencia', slug: 'prever-tornado-antecedencia-limites',
    title: 'É possível prever um tornado com antecedência? Entenda os limites da meteorologia',
    summary: 'Modelos e observações identificam ambientes favoráveis; indicar com precisão qual tempestade gerará um tornado continua fora do alcance operacional.',
    content: [
      'Meteorologistas conseguem reconhecer cenários que favorecem tempestades severas e potencial tornádico. Modelos numéricos usam medições de superfície, balões, satélites e outras observações para estimar a evolução da atmosfera; radares acompanham tempestades quando elas se formam.',
      'Isso não equivale a prever com antecedência o minuto, a rua, a trajetória ou a intensidade de um tornado específico. O NSSL afirma que ainda não é possível determinar com precisão onde e quando um tornado vai se desenvolver; a previsão pode indicar uma região e uma probabilidade de tempo severo, e avisos são emitidos quando a ameaça é observada ou indicada pelos dados.',
      'No Brasil, o Simepar explica que algumas horas antes é possível reconhecer ambiente propício a tempestades com potencial tornádico. A identificação de uma tempestade específica capaz de produzir tornado e do local exato depende do monitoramento em tempo real.',
      'Por isso, acompanhe avisos oficiais mesmo quando o céu da sua rua ainda parece calmo. A incerteza de localização faz parte do desafio: planos prévios e alertas recebidos a tempo reduzem a dependência de enxergar o funil.'
    ],
    category: 'Ciência',
    image: 'https://www.nssl.noaa.gov/education/svrwx101/img/tornado-1200x360.jpg',
    imageAlt: 'Imagem de tempestade usada em material educativo do NOAA NSSL sobre previsão de tornados.',
    imageType: 'photo',
    imageCaption: 'Imagem ilustrativa de tempestade associada a conteúdo educativo sobre previsão de tornados. Crédito: NOAA National Severe Storms Laboratory.',
    sources: [
      { name: 'Simepar — previsibilidade e classificação oficial de tornados', url: 'https://www.simepar.br/simepar/post/77985', publishedAt: '2026-08-14' },
      { name: 'NOAA/NSSL — tornado forecasting', url: 'https://www.nssl.noaa.gov/education/svrwx101/tornadoes/forecasting/' },
      { name: 'NOAA/NSSL — perguntas frequentes sobre previsão de tornados', url: 'https://www.nssl.noaa.gov/education/svrwx101/tornadoes/faq/' }
    ]
  }),
  article({
    id: 'tornado-destruicao-rua-vizinha', slug: 'tornado-destruicao-desigual-microescala',
    title: 'Por que alguns tornados destroem uma rua e deixam outra quase intacta?',
    summary: 'A circulação tem escala pequena, varia ao longo do percurso e encontra edificações e vegetação com resistências diferentes.',
    content: [
      'Tornados são vórtices estreitos comparados à tempestade que os forma. A faixa de vento mais intenso pode ocupar apenas parte do caminho, e sua posição, estrutura e interação com o solo variam ao longo do tempo. Por isso, quarteirões próximos podem apresentar níveis de dano bem diferentes.',
      'Também mudam os alvos encontrados: tipo e estado de conservação das construções, ancoragem, materiais, árvores, topografia e objetos disponíveis para serem carregados. A Escala Fujita avalia indicadores de dano e não presume que cada ponto da trajetória tenha recebido a mesma intensidade de vento.',
      'Um estudo de campo precisa mapear o percurso e o padrão espacial dos danos; o aspecto de uma rua isolada não determina sozinho a força do tornado. O Simepar descreve a análise conjunta de construções, vegetação, objetos deslocados, radar, drone e levantamentos no local.',
      'A ausência de danos em uma quadra não prova que o tornado não passou perto, assim como um dano severo isolado não basta para definir uma categoria. Essa variação é uma razão para não comparar bairros sem uma avaliação técnica.'
    ],
    category: 'Tornados',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mayfield_destroyed_by_a_powerful_tornado_(Copernicus).jpg',
    imageAlt: 'Vista de danos causados por tornado em Mayfield, Kentucky, Estados Unidos; imagem ilustrativa, não representa o Brasil.',
    imageType: 'photo',
    imageCaption: 'Imagem de danos em Mayfield, Kentucky, EUA, após tornado de 2021; usada apenas para ilustrar a variação espacial dos danos. Imagem: Copernicus Sentinel-2, European Union.',
    sources: [
      { name: 'Simepar — critérios da análise de danos e classificação Fujita', url: 'https://www.simepar.br/simepar/post/77985', publishedAt: '2026-08-14' },
      { name: 'NOAA/NSSL — como a largura e os danos de um tornado se relacionam', url: 'https://www.nssl.noaa.gov/education/svrwx101/tornadoes/faq/' },
      { name: 'Imagem: Copernicus Sentinel-2 — tornado em Mayfield (atribuição Copernicus)', url: 'https://commons.wikimedia.org/wiki/File:Mayfield_destroyed_by_a_powerful_tornado_(Copernicus).jpg' }
    ]
  }),
  article({
    id: 'seguranca-tornado-guia', slug: 'seguranca-antes-durante-depois-tornado',
    title: 'O que fazer antes, durante e depois de um tornado: guia de segurança',
    summary: 'Planeje o abrigo, mantenha meios de receber alertas e evite áreas danificadas; siga as orientações oficiais da sua região.',
    content: [
      'Antes de uma tempestade, defina um local de abrigo e como receber avisos da Defesa Civil. Em casa, prefira uma construção firme, um pavimento baixo e um cômodo interno sem janelas. Combine como familiares se encontrarão e mantenha telefone carregado e calçados resistentes acessíveis.',
      'Se houver aviso oficial ou sinais de perigo próximo, procure abrigo imediatamente. Afaste-se de janelas; não fique em tendas, veículos ou sob viadutos. Siga as instruções da Defesa Civil e não saia para filmar ou observar o fenômeno.',
      'Depois, confirme com autoridades se a ameaça terminou. Evite fios caídos, vidros, árvores instáveis e prédios danificados. Não toque em cabos nem entre em áreas isoladas. Use lanternas em vez de chama aberta se houver possível vazamento de gás e comunique emergências aos serviços locais.',
      'As orientações gerais do NWS foram adaptadas aqui para contexto informativo; canais, números de emergência e alertas devem ser os oficiais do município e do estado onde você está.'
    ],
    category: 'Clima Severo',
    image: 'https://www.weather.gov/images/wrn/Infographics/2023/confirming-tornadoes.png',
    imageAlt: 'Infográfico do National Weather Service que resume como equipes meteorológicas investigam e confirmam tornados.',
    imageType: 'photo',
    imageCaption: 'Infográfico educativo sobre confirmação de tornados, não fotografia de um evento. Crédito: National Weather Service/NOAA.',
    sources: [
      { name: 'Defesa Civil do Paraná — alertas vigentes', url: 'https://www.defesacivil.pr.gov.br/alertas-vigentes' },
      { name: 'National Weather Service — o que fazer durante um tornado', url: 'https://www.weather.gov/safety/tornado-during' },
      { name: 'National Weather Service — preparação para tornados', url: 'https://www.weather.gov/safety/tornado-prepare' },
      { name: 'National Weather Service — cuidados depois de um tornado', url: 'https://www.weather.gov/safety/tornado-after' }
    ]
  }),
  article({
    id: 'tornado-noturno-perigos', slug: 'tornados-noturnos-por-que-sao-perigosos',
    title: 'Tornados noturnos: por que são especialmente perigosos?',
    summary: 'À noite, o sono e a baixa visibilidade podem atrasar a percepção do risco; alertas audíveis e abrigo planejado fazem diferença.',
    content: [
      'Tornados podem ocorrer a qualquer hora. À noite, a escuridão dificulta a observação visual de uma tempestade e muitas pessoas estão dormindo, o que pode atrasar a reação a um aviso. A dificuldade é de receber e reconhecer a ameaça, não uma regra de que todo tornado noturno seja mais intenso.',
      'O National Weather Service recomenda preparar-se antes de dormir quando há risco de tempo severo: manter o celular carregado e alertas sem fio ativos, ter um rádio meteorológico quando disponível e deixar lanterna e calçados junto ao abrigo.',
      'Escolha com antecedência um cômodo interno no andar mais baixo de uma construção firme, longe de janelas. Em caso de aviso oficial, acorde os demais moradores e vá para o abrigo sem esperar ver um funil.',
      'A estatística e o padrão de risco citados por um escritório meteorológico dos Estados Unidos não devem ser transferidos automaticamente para o Brasil. A recomendação prática é universal: planejar a recepção de alertas durante a noite e seguir instruções locais.'
    ],
    category: 'Clima Severo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Severe_thunderstorms_rumble_through_the_night_across_Texas_and_produce_a_tornado_near_downtown_Dallas_%28CIRA_2019-10-21%29.gif',
    imageAlt: 'Sequência de satélite mostra tempestades noturnas no Texas em 2019; ilustração de outro país e evento.',
    imageType: 'photo',
    imageCaption: 'Animação de satélite de tempestades noturnas no Texas que produziram tornado próximo a Dallas em 2019. Não é um caso brasileiro. Imagens GOES: CSU/CIRA e NOAA, domínio público.',
    sources: [
      { name: 'National Weather Service — tornados podem ocorrer à noite', url: 'https://www.weather.gov/wrn/tornado-sm' },
      { name: 'National Weather Service — segurança para tempestades durante a noite', url: 'https://www.weather.gov/lmk/ref_night' },
      { name: 'Imagem: NOAA/CIRA — tempestades noturnas no Texas (domínio público)', url: 'https://commons.wikimedia.org/wiki/File:Severe_thunderstorms_rumble_through_the_night_across_Texas_and_produce_a_tornado_near_downtown_Dallas_(CIRA_2019-10-21).gif' }
    ]
  }),
  article({
    id: 'radar-tempestades-rotativas', slug: 'radares-identificar-tempestades-rotativas',
    title: 'Como radares meteorológicos ajudam a identificar tempestades rotativas?',
    summary: 'Doppler, refletividade e polarização dupla oferecem pistas complementares; uma assinatura de rotação não garante, sozinha, um tornado no solo.',
    content: [
      'O radar meteorológico emite pulsos de energia e mede o retorno das partículas. A refletividade mostra a distribuição e intensidade aproximada dos alvos; o Doppler estima o movimento em relação ao radar. Um par de velocidades que se aproximam e se afastam pode indicar circulação dentro da tempestade.',
      'Uma assinatura de rotação, como a Tornadic Vortex Signature (TVS), eleva a atenção dos meteorologistas, mas não prova sozinha que um tornado tocou o solo. O Simepar combina o radar com imagens de satélite, relatos, registros visuais e inspeção de danos.',
      'Radares de polarização dupla transmitem pulsos em duas orientações e ajudam a caracterizar tamanho e forma dos alvos. Valores compatíveis com detritos podem apoiar a análise de um tornado em contato com o terreno, mas alcance, altura do feixe e distância do radar limitam o que pode ser observado.',
      'Por isso, o radar é uma ferramenta de monitoramento e alerta, não uma fotografia infalível da superfície. A confirmação técnica pode exigir evidências de campo e diferentes instrumentos.'
    ],
    category: 'Ciência',
    image: 'https://www.nssl.noaa.gov/education/svrwx101/tornadoes/detection/img/may3-tvs.png',
    imageAlt: 'Exemplo educativo de assinatura de vórtice tornádico em dados de radar Doppler, produzido pelo NOAA NSSL.',
    imageType: 'chart',
    imageCaption: 'Exemplo didático de Tornadic Vortex Signature em dados de radar; não é uma observação atual do Paraná. Crédito: NOAA National Severe Storms Laboratory.',
    sources: [
      { name: 'Simepar — dados integrados e classificação oficial de tornados', url: 'https://www.simepar.br/simepar/post/77985', publishedAt: '2026-08-14' },
      { name: 'NOAA/NSSL — detecção de tornados por radar', url: 'https://www.nssl.noaa.gov/education/svrwx101/tornadoes/detection/' },
      { name: 'National Weather Service — radar Doppler e detritos de tornado', url: 'https://www.weather.gov/lmk/nws_radar_dualpol_tordebris' }
    ]
  })
];
