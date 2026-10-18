const publicationDate = '2026-10-17';

function article(story) {
  return {
    ...story,
    publishedAt: publicationDate,
    author: 'Redação INFM',
    status: 'published',
    featured: false
  };
}

export const phenomenonStories = [
  article({
    id: 'frentes-frias-calor-temporais', slug: 'frentes-frias-calor-temporais',
    title: 'Frentes frias e calor intenso: a combinação que pode favorecer temporais',
    summary: 'Ar aquecido, umidade e mecanismos de elevação podem criar instabilidade; a passagem frontal não garante tempestade severa em todo local.',
    content: [
      'Quando uma massa de ar frio avança, ela encontra ar mais quente à frente e forma uma zona de transição chamada frente fria. O ar quente e úmido pode ser forçado a subir sobre o ar mais denso, favorecendo nuvens e precipitação.',
      'Se houver umidade suficiente, instabilidade e ventos que variam com a altura, a atmosfera pode sustentar tempestades mais organizadas. Elas podem produzir chuva forte, raios, granizo ou rajadas, mas a intensidade e a localização dependem das condições de cada episódio.',
      'Em períodos quentes, uma frente também pode interromper o aquecimento: antes de sua chegada algumas áreas ficam mais quentes; após a passagem, o ar frio pode reduzir as temperaturas. O Simepar apontou essa alternância em sua previsão de outubro de 2026 para o Paraná, sem afirmar que toda frente produziria temporais.',
      'Observe a previsão e os avisos para sua região. Uma explicação geral dos mecanismos não substitui o monitoramento local nem confirma que uma tempestade severa vá ocorrer.'
    ],
    category: 'Clima Severo',
    image: 'https://www.nssl.noaa.gov/education/svrwx101/img/thunderstorm-1200x360.jpg',
    imageAlt: 'Tempestade com mesociclone em fotografia educativa do NOAA NSSL; ilustração de tempo severo, não de um evento no Brasil.',
    imageType: 'photo',
    imageCaption: 'Tempestade fotografada em outro evento; ilustração de sistemas convectivos. Crédito: NOAA National Severe Storms Laboratory.',
    sources: [
      { name: 'Simepar — previsão de outubro e oscilações de temperatura no Paraná', url: 'https://www.parana.pr.gov.br/aen/Noticia/Outubro-tera-chuva-acima-da-media-e-oscilacoes-de-temperatura-no-Parana-preve-o-Simepar', publishedAt: '2026-10-01' },
      { name: 'INMET — glossário meteorológico: frentes e massas de ar', url: 'https://portal.inmet.gov.br/glossario' },
      { name: 'NOAA/NSSL — formação e ciclo de vida de tempestades', url: 'https://www.nssl.noaa.gov/education/svrwx101/thunderstorms/' }
    ]
  }),
  article({
    id: 'granizo-gigante-formacao', slug: 'granizo-gigante-crescimento-tempestade',
    title: 'Granizo gigante: como pedras de gelo crescem dentro de uma tempestade',
    summary: 'Gotas congelam e incorporam água super-resfriada em correntes ascendentes; tamanho e danos variam de tempestade para tempestade.',
    content: [
      'Granizo se forma dentro de nuvens convectivas. Correntes ascendentes levam gotas de água a regiões frias da tempestade; ao congelar, elas podem crescer ao colidir com mais água líquida super-resfriada.',
      'O crescimento depende da quantidade de água disponível, da intensidade e duração das correntes dentro da nuvem e das condições térmicas encontradas. A pedra cai quando seu peso supera o suporte da corrente ascendente. Não é necessário que ela suba e desça repetidamente até o topo da nuvem.',
      'Granizo muito grande pode causar danos a telhados, veículos, lavouras e pessoas expostas, mas não é possível deduzir o tamanho de uma pedra a partir de relatos sem medição ou comparação confiável. O NSSL lembra que a forma irregular e o derretimento também dificultam estimar a velocidade de queda.',
      'Durante uma tempestade com granizo, procure abrigo firme e fique longe de janelas. Não saia para medir pedras enquanto a tempestade está ativa; relatos podem ser enviados depois, quando for seguro.'
    ],
    category: 'Clima Severo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Brisbane_November_2014_Hailstorm_-_Hailstones.jpg',
    imageAlt: 'Pedras de granizo fotografadas após tempestade em Brisbane, Austrália, em 2014; imagem ilustrativa.',
    imageType: 'photo',
    imageCaption: 'Granizo registrado em Brisbane, Austrália, em novembro de 2014; não corresponde a uma ocorrência brasileira. Foto: Craig Franklin, Wikimedia Commons, CC BY-SA 3.0.',
    sources: [
      { name: 'NOAA/NSSL — como se forma o granizo', url: 'https://www.nssl.noaa.gov/education/svrwx101/hail/' },
      { name: 'NOAA/NSSL — fundamentos sobre tempestades', url: 'https://www.nssl.noaa.gov/education/svrwx101/thunderstorms/' },
      { name: 'Wikimedia Commons — granizo em Brisbane (CC BY-SA 3.0)', url: 'https://commons.wikimedia.org/wiki/File:Brisbane_November_2014_Hailstorm_-_Hailstones.jpg' }
    ]
  }),
  article({
    id: 'vendavais-downbursts', slug: 'vendavais-downbursts-vento-descendente',
    title: 'Vendavais e downbursts: quando o vento desce violentamente de uma nuvem',
    summary: 'Downburst é uma corrente descendente intensa que se espalha ao chegar ao solo; o padrão de danos pode ajudar a diferenciá-la de tornado.',
    content: [
      'Downburst, ou microexplosão atmosférica quando localizado em uma área menor, é um fluxo intenso de ar descendente de uma tempestade. Ao alcançar o solo, o ar se espalha para fora e pode produzir rajadas danosas em uma área mais ampla do que a faixa estreita de um tornado.',
      '“Vendaval” é uma descrição corrente de vento forte, não uma identificação do mecanismo que o produziu. Rajadas retilíneas podem resultar do escoamento descendente de uma tempestade; danos convergentes ou com orientação que muda ao longo de um trajeto podem levantar a hipótese de rotação, mas só uma análise técnica pode classificar o evento.',
      'Meteorologistas cruzam observações de estações, radar, satélite, relatos e levantamento de danos. Em setembro de 2026, o Simepar classificou alguns danos no Paraná como compatíveis com downburst e disse não haver indícios de tornado em determinadas ocorrências analisadas.',
      'Ambos podem ser perigosos. Em alerta de vento, procure abrigo em construção firme, afaste-se de árvores e estruturas frágeis e acompanhe as orientações oficiais.'
    ],
    category: 'Clima Severo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Storm_Cloud_Outside_of_Denver.jpg',
    imageAlt: 'Nuvem de tempestade sobre área agrícola no Colorado, Estados Unidos; imagem ilustrativa, não documenta um downburst.',
    imageType: 'photo',
    imageCaption: 'Nuvem de tempestade fotografada a leste de Denver, Colorado, em 2021; não documenta um downburst. Foto: Linda M. Morgan, Wikimedia Commons, CC BY-SA 4.0.',
    sources: [
      { name: 'Simepar — distinção entre tornados, supercélulas e microexplosões', url: 'https://www.simepar.br/simepar/post/71027', publishedAt: '2025-11-05' },
      { name: 'Simepar — análise das tempestades de 29 de setembro de 2026', url: 'https://www.simepar.br/simepar/post/79161', publishedAt: '2026-09-30' },
      { name: 'NOAA/NSSL — ventos danosos e downbursts', url: 'https://www.nssl.noaa.gov/education/svrwx101/wind/faq/' },
      { name: 'Wikimedia Commons — Storm Cloud Outside of Denver (CC BY-SA 4.0)', url: 'https://commons.wikimedia.org/wiki/File:Storm_Cloud_Outside_of_Denver.jpg' }
    ]
  }),
  article({
    id: 'rios-atmosfericos', slug: 'rios-atmosfericos-chuvas-extremas',
    title: 'Rios atmosféricos: o que são e como podem contribuir para chuvas extremas',
    summary: 'São corredores alongados de vapor d’água na atmosfera; podem fornecer chuva e neve, mas os efeitos dependem do trajeto e da duração.',
    content: [
      'Rios atmosféricos são regiões longas e estreitas da atmosfera que transportam grandes quantidades de vapor d’água. Eles fazem parte do ciclo global da água e conectam áreas de evaporação a regiões onde a umidade pode condensar e precipitar.',
      'Quando um corredor úmido encontra condições que favorecem a subida do ar — por exemplo, uma frente ou relevo — parte do vapor pode cair como chuva ou neve. Sistemas fortes ou persistentes podem elevar riscos de precipitação intensa, mas muitos rios atmosféricos são fracos e podem contribuir para o abastecimento de água.',
      'A classificação e o impacto dependem de umidade transportada, duração, velocidade, localização e vulnerabilidade da bacia atingida. A existência do fenômeno não basta para afirmar que haverá inundação; é preciso avaliar a previsão hidrológica e meteorológica local.',
      'O termo é usado especialmente em pesquisas e previsões sobre a costa oeste da América do Norte. Esta matéria apresenta o mecanismo geral e não atribui um rio atmosférico a um evento brasileiro específico.'
    ],
    category: 'Ciência',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Atmospheric_River_Arrives_in_the_Pacific_Northwest_%28CIRA_2024-01-31_-_nolabels%29.gif',
    imageAlt: 'Animação de imagens GOES mostrando um rio atmosférico chegando ao noroeste do Pacífico em janeiro de 2024.',
    imageType: 'chart',
    imageCaption: 'Animação de um rio atmosférico sobre o Pacífico Noroeste, EUA, em 31 de janeiro de 2024; exemplo didático, não descreve chuva no Brasil. Imagens GOES: CSU/CIRA e NOAA, domínio público.',
    sources: [
      { name: 'NOAA — o que são rios atmosféricos', url: 'https://www.noaa.gov/stories/what-are-atmospheric-rivers', publishedAt: '2025-02-21' },
      { name: 'NOAA Research — como são estudados os rios atmosféricos', url: 'https://research.noaa.gov/atmospheric-rivers-what-are-they-and-how-does-noaa-study-them/' },
      { name: 'Wikimedia Commons — Atmospheric River Arrives (NOAA/CSU-CIRA, domínio público)', url: 'https://commons.wikimedia.org/wiki/File:Atmospheric_River_Arrives_in_the_Pacific_Northwest_(CIRA_2024-01-31_-_nolabels).gif' }
    ]
  }),
  article({
    id: 'ondas-calor-brasil-monitoramento', slug: 'ondas-de-calor-brasil-monitoramento',
    title: 'Ondas de calor no Brasil: causas, riscos e monitoramento',
    summary: 'Calor persistente precisa ser comparado à climatologia local; temperatura, duração, umidade e exposição influenciam os riscos à saúde.',
    content: [
      'Uma onda de calor não é apenas uma tarde quente. O glossário do INMET reproduz a definição da Organização Meteorológica Mundial: cinco ou mais dias consecutivos em que a máxima diária ultrapassa a máxima média mensal em pelo menos 5 °C. Critérios operacionais de avisos podem variar conforme a região e a finalidade.',
      'Períodos prolongados de alta pressão, céu com pouca nebulosidade, solo seco e advecção de ar quente podem favorecer temperaturas elevadas. Em cada episódio, a duração e a intensidade variam, e o efeito sobre o corpo também depende da umidade, exposição ao sol, atividade física, saúde e acesso a locais frescos.',
      'O INMET monitora temperatura e emite avisos meteorológicos quando os critérios de perigo são atendidos. Para acompanhar a condição do seu município, consulte a previsão, os avisos e as orientações da Defesa Civil e da saúde pública.',
      'Durante calor intenso, procure sombra ou ambiente fresco, hidrate-se e acompanhe pessoas mais vulneráveis. Esta é uma orientação geral e não substitui recomendações clínicas.'
    ],
    category: 'Clima Severo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/El_Ni%C3%B1o_in_September_2023.png',
    imageAlt: 'Mapa NOAA de anomalias oceânicas de setembro de 2023, usado como ilustração climática; não mostra temperatura do ar nem uma onda de calor no Brasil.',
    imageType: 'chart',
    imageCaption: 'Mapa de anomalias da superfície do mar durante o El Niño de 2023; não representa temperatura do ar ou evento de calor brasileiro. Crédito: NOAA Climate.gov, domínio público.',
    sources: [
      { name: 'INMET — glossário meteorológico: onda de calor', url: 'https://portal.inmet.gov.br/glossario/onda-de-calor' },
      { name: 'INMET — avisos meteorológicos', url: 'https://avisos.inmet.gov.br/' },
      { name: 'Defesa Civil — orientações e alertas da região', url: 'https://www.gov.br/mdr/pt-br/assuntos/protecao-e-defesa-civil' },
      { name: 'Wikimedia Commons — anomalias de SST NOAA, setembro de 2023 (domínio público)', url: 'https://commons.wikimedia.org/wiki/File:El_Ni%C3%B1o_in_September_2023.png' }
    ]
  }),
  article({
    id: 'raios-chuva-vento-tempestade', slug: 'raios-chuva-intensa-ventos-tempestade-severa',
    title: 'Raios, chuva intensa e ventos destrutivos: anatomia de uma tempestade severa',
    summary: 'Correntes ascendentes e descendentes organizam o ciclo da tempestade e podem produzir diferentes perigos ao mesmo tempo.',
    content: [
      'Tempestades se desenvolvem quando há umidade, ar instável e um mecanismo que o faça subir. Ao subir, o ar úmido esfria e condensa; a nuvem cresce e pode atingir níveis em que partículas de gelo se formam.',
      'Na fase madura, a precipitação começa a cair e ajuda a produzir correntes descendentes. Ao encontrar o solo, o ar resfriado pode se espalhar como uma frente de rajada. Colisões entre partículas de gelo também separam cargas elétricas; descargas produzem relâmpagos e o ar aquecido rapidamente pelo raio gera o trovão.',
      'Uma mesma tempestade pode trazer chuva forte, raios, granizo e vento. Uma corrente rotativa em uma supercélula pode elevar o potencial tornádico, mas a maioria dos temporais não deve ser classificada como tornado sem evidências específicas.',
      'Perigos não terminam quando a chuva diminui: raios podem ocorrer nas bordas da tempestade, e água pode se acumular rapidamente. Abrigue-se em local fechado, longe de janelas e árvores, e acompanhe avisos oficiais.'
    ],
    category: 'Clima Severo',
    image: 'https://www.nssl.noaa.gov/education/svrwx101/thunderstorms/img/tststage-800.png',
    imageAlt: 'Diagrama do ciclo de vida de uma tempestade, com correntes ascendentes e descendentes, do NOAA NSSL.',
    imageType: 'chart',
    imageCaption: 'Diagrama educativo do ciclo de vida de tempestade; não é uma imagem de radar ou de uma ocorrência atual. Crédito: NOAA National Severe Storms Laboratory.',
    sources: [
      { name: 'NOAA/NSSL — formação e ciclo de vida de tempestades', url: 'https://www.nssl.noaa.gov/education/svrwx101/thunderstorms/' },
      { name: 'Simepar — tornados, supercélulas e microexplosões', url: 'https://www.simepar.br/simepar/post/71027', publishedAt: '2025-11-05' },
      { name: 'National Weather Service — segurança em tempestades severas', url: 'https://www.weather.gov/safety/thunderstorm' }
    ]
  }),
  article({
    id: 'interpretar-mapa-meteorologico', slug: 'como-interpretar-mapa-meteorologico-instabilidade',
    title: 'Como interpretar um mapa meteorológico e identificar áreas de instabilidade',
    summary: 'Frentes, centros de pressão, isóbaras e campos de precipitação mostram partes diferentes da atmosfera; nenhum símbolo isolado é um alerta local.',
    content: [
      'Comece conferindo o horário de validade, o fuso e o tipo de produto. Um mapa de análise representa condições estimadas para uma hora; um mapa de previsão mostra um cenário futuro. As duas imagens podem ser parecidas, mas respondem a perguntas diferentes.',
      'Em cartas sinóticas, H e L identificam centros de alta e baixa pressão; linhas de isóbaras unem pontos com pressão igual. Frentes são desenhadas com símbolos próprios: triângulos azuis para frente fria e semicírculos vermelhos para frente quente. A direção dos símbolos indica para onde o limite avança no padrão cartográfico usado pela fonte.',
      'Campos de precipitação, nuvens, vento e radar acrescentam informações distintas. Um corredor de chuva pode sinalizar instabilidade, mas o mapa não informa sozinho o que ocorrerá em cada bairro, e o radar não substitui alertas oficiais.',
      'Leia legenda, escala, horário e fonte antes de compartilhar um mapa. Para decisões locais, use os avisos oficiais e previsões atualizadas do INMET, Simepar ou serviço meteorológico competente.'
    ],
    category: 'Ciência',
    image: 'https://www.wpc.ncep.noaa.gov/images/frontogenesis.png',
    imageAlt: 'Diagrama do Weather Prediction Center da NOAA que mostra a representação cartográfica de uma frente fria em formação.',
    imageType: 'chart',
    imageCaption: 'Diagrama explicativo da simbologia de frontogênese em uma carta de superfície do NOAA WPC; não representa as condições atuais no Brasil. Crédito: NOAA Weather Prediction Center.',
    sources: [
      { name: 'NOAA Weather Prediction Center — legenda de frentes e limites', url: 'https://www.wpc.ncep.noaa.gov/html/fntcodes2.shtml' },
      { name: 'INMET — glossário de mapas sinóticos, frentes e isóbaras', url: 'https://portal.inmet.gov.br/glossario' },
      { name: 'INMET — previsão e avisos meteorológicos', url: 'https://portal.inmet.gov.br/' }
    ]
  })
];
