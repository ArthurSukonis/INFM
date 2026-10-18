import { tornadoStories } from './series-tornados.js';
import { ensoStories } from './series-enso.js';
import { phenomenonStories } from './series-fenomenos.js';
import { portalStories } from './series-portal.js';

const archiveStories = [
  {
    id: 'chuvas-intensas-parana-outubro-2026',
    slug: 'chuvas-intensas-parana-outubro-2026',
    title: 'Chuvas intensas no Paraná: cidades registram volumes acima da média histórica',
    summary: 'Boletim da Agência Estadual de Notícias publicado em 13 de outubro informa que 16 estações do Simepar já haviam superado a média mensal de chuva nos primeiros 12 dias do mês.',
    content: [
      'Até 12 de outubro de 2026, 16 das 47 estações meteorológicas do Simepar com mais de cinco anos de operação haviam acumulado, em apenas 12 dias, volume igual ou superior à média histórica de precipitação de todo o mês. Os dados foram publicados pela Agência Estadual de Notícias em 13 de outubro.',
      'No feriado de 12 de outubro, três cidades tiveram acumulados superiores a 100 milímetros: Cascavel registrou 111,2 mm, Cruzeiro do Iguaçu 127,4 mm e Foz do Iguaçu 147,4 mm. Esses números correspondem ao volume informado para aquele dia no boletim, não a uma estimativa para todo o estado.',
      'Considerando os valores acumulados no início do mês, as 16 estações que haviam alcançado a média mensal estavam em Altônia, Assis Chateaubriand, Capanema, Cascavel, Curitiba, Cruzeiro do Iguaçu, Foz do Iguaçu, Guaíra, Laranjeiras do Sul, Loanda, Palotina, Paranavaí, Ponta Grossa, Santa Helena, São Miguel do Iguaçu e Telêmaco Borba.',
      'A comparação é estação por estação: cada acumulado é confrontado com a climatologia de outubro correspondente àquela estação. Ela não significa que todas as cidades do Paraná, nem todas as estações do Simepar, tenham ultrapassado a média. A notícia da AEN detalha os valores observados e as médias usadas para cada um dos 16 locais.',
      'O boletim também registrou rajadas acima de 60 km/h em várias estações. Entre os exemplos publicados estão 84,6 km/h em Campo Mourão e 76 km/h em Cianorte na noite de 12 de outubro. São observações daquele episódio e não representam uma previsão ou alerta vigente.',
      'Volumes elevados em pouco tempo podem favorecer alagamentos, enxurradas e outros riscos locais. Acompanhe as atualizações do Simepar e os alertas oficiais da Defesa Civil; as condições descritas nesta matéria se referem aos dados disponíveis na publicação de 13 de outubro.'
    ],
    category: 'Tempo Severo',
    publishedAt: '2026-10-17',
    author: null,
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Storm_Cloud_Outside_of_Denver.jpg',
    imageAlt: 'Nuvem de chuva sobre área agrícola no Colorado, Estados Unidos; imagem ilustrativa, não relacionada às chuvas no Paraná.',
    imageType: 'photo',
    imageCaption: 'Imagem ilustrativa de chuva sobre lavouras a leste de Denver, Colorado, EUA, em 2021. Não documenta o episódio no Paraná. Foto: Linda M. Morgan, Wikimedia Commons, CC BY-SA 4.0.',
    sources: [
      { name: 'Agência Estadual de Notícias do Paraná — chuva volumosa faz 16 cidades atingirem a média do mês em 12 dias', url: 'https://www.parana.pr.gov.br/aen/Noticia/Chuva-volumosa-faz-16-cidades-paranaenses-atingirem-media-do-mes-em-12-dias', publishedAt: '2026-10-13' },
      { name: 'Wikimedia Commons — Storm Cloud Outside of Denver (CC BY-SA 4.0)', url: 'https://commons.wikimedia.org/wiki/File:Storm_Cloud_Outside_of_Denver.jpg' },
      { name: 'Defesa Civil do Paraná — alertas vigentes', url: 'https://www.defesacivil.pr.gov.br/alertas-vigentes' }
    ],
    status: 'published',
    featured: false
  },
  {
    id: 'tornados-parana-setembro-2026',
    slug: 'tornados-parana-setembro-2026',
    title: 'Tornados no Paraná em setembro de 2026: o que as análises meteorológicas revelaram',
    summary: 'O balanço mensal do Simepar aponta dois casos e diz que a intensidade ainda não podia ser classificada pela Escala Fujita.',
    content: [
      'No balanço do mês publicado em 1º de outubro, o Simepar informou que identificou dois tornados no Paraná em setembro de 2026: um por volta das 17h de 9 de setembro em Francisco Alves e outro por volta das 16h de 11 de setembro em Goioerê.',
      'A intensidade não foi informada como categoria Fujita. O Simepar disse que, até aquele balanço, a análise dos danos não permitia uma classificação conclusiva. A escala é aplicada a partir do levantamento dos efeitos observados; não se deve atribuir uma categoria ou velocidade de vento sem essa conclusão técnica.',
      'Há uma diferença entre publicações do próprio Simepar que merece ser registrada. Um comunicado de 10 de setembro descreveu ocorrências em Francisco Alves e Espigão Alto do Iguaçu entre os dias 9 e 10. Já o balanço mensal posterior lista Francisco Alves e Goioerê para setembro. Os textos consultados não explicam se a diferença corresponde a uma revisão, a uma ocorrência substituída ou a outro critério de contagem, portanto não é possível resolver essa divergência com segurança.',
      'O balanço mensal também menciona episódios de downburst, ou microexplosão atmosférica, em setembro. São rajadas descendentes associadas a tempestades e não devem ser automaticamente confundidas com tornados. Em análises de 21 de setembro, por exemplo, o Simepar disse que os danos em Francisco Beltrão e Apucarana eram compatíveis com downburst e não encontrou indícios de tornado nos casos examinados.',
      'A distinção depende da combinação de evidências. Para avaliar um tornado, meteorologistas podem cruzar registros de radar e satélite, imagens e vídeos, vistorias e distribuição dos danos. Vento destrutivo ou granizo, isoladamente, não confirmam que houve rotação tocando o solo.',
      'A conclusão segura, com base nos documentos citados, é que o balanço do Simepar registrou os dois casos de Francisco Alves e Goioerê, sem categoria Fujita conclusiva na data da publicação. A divergência com o comunicado anterior sobre Espigão Alto permanece sem explicação nas fontes consultadas.'
    ],
    category: 'Tornados',
    publishedAt: '2026-10-17',
    author: null,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Evolution_of_a_Tornado.jpg/1920px-Evolution_of_a_Tornado.jpg',
    imageAlt: 'Fotomontagem ilustrativa de um tornado no Kansas, Estados Unidos, em 2016; não representa nenhum caso paranaense de setembro de 2026.',
    imageType: 'photo',
    imageCaption: 'Ilustração: fotomontagem de oito imagens de um tornado formado no Kansas, EUA, em 24 de maio de 2016. Não é um dos casos do Paraná. Foto: Jason Weingart, Wikimedia Commons, CC BY-SA 4.0.',
    sources: [
      { name: 'Simepar — balanço de setembro de 2026 e identificação dos tornados', url: 'https://www.simepar.br/simepar/post/79188', publishedAt: '2026-10-01' },
      { name: 'Simepar — comunicado sobre as ocorrências de 9 e 10 de setembro', url: 'https://www.simepar.br/simepar/post/78662', publishedAt: '2026-09-10' },
      { name: 'Simepar — análise de tempestades de 21 de setembro', url: 'https://www.simepar.br/simepar/post/78996', publishedAt: '2026-09-23' },
      { name: 'Simepar — análise de tempestades de 29 de setembro', url: 'https://www.simepar.br/simepar/post/79161', publishedAt: '2026-09-30' },
      { name: 'Wikimedia Commons — Evolution of a Tornado (CC BY-SA 4.0)', url: 'https://commons.wikimedia.org/wiki/File:Evolution_of_a_Tornado.jpg' }
    ],
    status: 'published',
    featured: false
  },
  {
    id: 'ciclone-extratropical-regiao-sul',
    slug: 'ciclone-extratropical-regiao-sul-formacao-riscos',
    title: 'Ciclone extratropical no Sul: entenda como o fenômeno se forma e quais são seus riscos',
    summary: 'Um guia sobre baixa pressão, contraste entre massas de ar, frentes, chuva, vento e cuidados em situações de tempo severo.',
    content: [
      'Ciclones extratropicais são sistemas de baixa pressão comuns em latitudes médias. No Sul da América do Sul, formam-se com frequência em regiões onde massas de ar com características diferentes se encontram, muitas vezes sobre o oceano próximo ao Uruguai e ao Rio Grande do Sul.',
      'O contraste entre o ar frio e o ar mais quente e úmido favorece a organização de frentes frias e quentes em torno da baixa pressão. No Hemisfério Sul, os ventos giram no sentido horário ao redor do centro. A posição e a trajetória do sistema dependem também do escoamento atmosférico em grande escala.',
      'Quando as frentes associadas avançam sobre o continente, podem mudar as condições do tempo: há possibilidade de chuva, rajadas de vento e, depois da passagem da frente fria, queda de temperatura. A intensidade e a área afetada variam de um sistema para outro; esta explicação não descreve um ciclone específico nem constitui previsão para uma data ou cidade.',
      'Entre os riscos a considerar estão queda de galhos ou árvores, danos em estruturas vulneráveis, interrupções pontuais de energia, chuva forte e alagamentos localizados. Esses impactos não ocorrem necessariamente em todo ciclone. Consulte a previsão e os avisos vigentes para o seu município antes de tomar decisões.',
      'Em caso de aviso de vento ou tempestade, acompanhe a Defesa Civil e os serviços meteorológicos oficiais, evite permanecer sob árvores e procure abrigo em construção firme. Fique longe de janelas durante rajadas e não atravesse áreas alagadas a pé ou de veículo.',
      'Ciclone extratropical não é sinônimo de tornado. O ciclone é um sistema atmosférico de grande escala e duração que pode organizar frentes; o tornado é um vórtice muito menor, associado a uma tempestade e que alcança a superfície. Uma frente vinculada a ciclone pode contribuir para um ambiente instável, mas não significa que um tornado vá ocorrer.'
    ],
    category: 'Climatologia',
    publishedAt: '2026-10-17',
    author: null,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Ciclone_extratropical_Brasil_10_ago_2022.png',
    imageAlt: 'Imagem de satélite NOAA de um ciclone extratropical sobre o Brasil em 10 de agosto de 2022; usada apenas como ilustração.',
    imageType: 'chart',
    imageCaption: 'Imagem ilustrativa de satélite de um ciclone extratropical sobre o Brasil em 10 de agosto de 2022; não representa uma previsão atual. Crédito: NOAA. Imagem em domínio público.',
    sources: [
      { name: 'INMET — o que é e como se forma um ciclone', url: 'https://portal.inmet.gov.br/noticias/o-que-%C3%A9-e-como-se-forma-um-ciclone-entenda-agora', publishedAt: '2023-08-17' },
      { name: 'Simepar — ciclones podem atingir o Paraná?', url: 'https://www.simepar.br/simepar/post/77743', publishedAt: '2026-08-05' },
      { name: 'Defesa Civil do Paraná — alertas vigentes', url: 'https://www.defesacivil.pr.gov.br/alertas-vigentes' },
      { name: 'National Weather Service — segurança durante tornados e tempestades', url: 'https://www.weather.gov/safety/tornado-during' },
      { name: 'Wikimedia Commons — ciclone extratropical no Brasil, NOAA (domínio público)', url: 'https://commons.wikimedia.org/wiki/File:Ciclone_extratropical_Brasil_10_ago_2022.png' }
    ],
    status: 'published',
    featured: false
  },
  {
    id: 'primavera-2026-oscilacao-temperaturas',
    slug: 'primavera-2026-oscilacao-temperaturas-brasil',
    title: 'Primavera de 2026: por que as temperaturas oscilam tanto no Brasil?',
    summary: 'Frentes frias, aquecimento da superfície e variações regionais de umidade ajudam a alternar períodos quentes, chuva e resfriamento.',
    content: [
      'A primavera é uma estação de transição e não produz o mesmo padrão em todas as regiões do Brasil. O aumento gradual do aquecimento solar convive com a passagem de sistemas frontais e com diferenças na disponibilidade de umidade. Essa combinação pode fazer as temperaturas variarem em poucos dias, especialmente no Centro-Sul.',
      'Antes da passagem de uma frente fria, pode predominar ar mais quente vindo do interior do continente. A frente é a zona de transição entre massas de ar; quando uma massa mais fria avança, pode organizar chuva e vento e, depois, favorecer queda das temperaturas. A duração e a intensidade dessa mudança dependem do sistema e do lugar.',
      'A umidade também varia regionalmente. O prognóstico do INMET para a primavera de 2026 descreve o fortalecimento do fluxo de umidade vindo da Amazônia, que alimenta o período chuvoso em áreas do Centro-Oeste e Sudeste e em parte do centro-sul do Norte. Para o Sul, o instituto aponta a possibilidade de complexos convectivos de mesoescala, sistemas que podem estar associados a chuva forte, rajadas, raios e granizo.',
      'Nuvens e chuva reduzem o aquecimento durante o dia; períodos de abertura de sol podem elevá-lo novamente. Por isso, uma previsão sazonal sobre a tendência de chuva ou temperatura não determina a condição de cada tarde, nem garante a ocorrência de um evento severo em uma cidade específica.',
      'O INMET caracteriza a primavera como uma transição entre as estações seca e chuvosa, sobretudo na região central do país. Seu prognóstico de 2026 foi divulgado em 18 de setembro e inclui previsões por região. Os valores climatológicos citados pelo instituto usam como referência o período 1981–2010; são uma base de comparação, não medições deste ano.',
      'Para decisões cotidianas, confira a previsão de curto prazo e os avisos oficiais do município. A explicação desta matéria descreve mecanismos gerais e não substitui uma previsão atualizada.'
    ],
    category: 'Previsão do Tempo',
    publishedAt: '2026-10-17',
    author: null,
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Clouds_after_the_rain_storm_-_geograph.org.uk_-_8100638.jpg',
    imageAlt: 'Nuvens após uma tempestade no Reino Unido; imagem ilustrativa sobre a variabilidade do tempo na primavera.',
    imageType: 'photo',
    imageCaption: 'Imagem ilustrativa de nuvens após uma tempestade em Staunton, Inglaterra, em 2025; não representa condições observadas no Brasil. Foto: Peter Randall-Cook/Geograph Britain and Ireland, Wikimedia Commons, CC BY-SA 2.0.',
    sources: [
      { name: 'INMET — Primavera 2026: confira a previsão para a estação', url: 'https://portal.inmet.gov.br/noticias/primavera-2026-confira-a-previs%C3%A3o-para-a-esta%C3%A7%C3%A3o', publishedAt: '2026-09-18' },
      { name: 'INMET e INPE — Prognóstico climático da primavera de 2026 (PDF)', url: 'https://portal.inmet.gov.br/uploads/notastecnicas/Prognostico_Primavera_2026.pdf' },
      { name: 'Agência Estadual de Notícias — outubro terá chuva acima da média e oscilações de temperatura, prevê o Simepar', url: 'https://www.parana.pr.gov.br/aen/Noticia/Outubro-tera-chuva-acima-da-media-e-oscilacoes-de-temperatura-no-Parana-preve-o-Simepar', publishedAt: '2026-10-01' },
      { name: 'Wikimedia Commons — Clouds after the rain storm (CC BY-SA 2.0)', url: 'https://commons.wikimedia.org/wiki/File:Clouds_after_the_rain_storm_-_geograph.org.uk_-_8100638.jpg' }
    ],
    status: 'published',
    featured: false
  },
  {
    id: 'granizo-vendaval-tornado-diferencas',
    slug: 'granizo-vendaval-tornado-como-diferenciar',
    title: 'Granizo, vendaval e tornado: como diferenciar esses fenômenos?',
    summary: 'Granizo é precipitação de gelo; vendaval descreve vento destrutivo; tornado é uma coluna de ar em rotação que alcança o solo.',
    content: [
      'Granizo, vendaval e tornado podem ocorrer no contexto de tempestades, mas são fenômenos diferentes. Identificar uma ocorrência apenas pelo estrago visto em uma fotografia não basta: serviços meteorológicos cruzam observações, radar, imagens e levantamentos de campo.',
      'Granizo é precipitação de gelo. Dentro de uma tempestade, correntes ascendentes carregam gotas de água para regiões frias, onde congelam e podem crescer ao incorporar mais água líquida. As pedras caem quando ficam pesadas demais para a corrente ascendente sustentá-las. O tamanho varia; não há um tamanho único para todo episódio.',
      'Vendaval é um termo de uso corrente para vento forte capaz de causar danos. Ventos de tempestade podem resultar de correntes descendentes e do ar que se espalha ao alcançar o solo, produzindo rajadas predominantemente em uma direção. O termo, sozinho, não confirma um tornado nem define a escala de intensidade do vento.',
      'Tornado é uma coluna de ar em rotação que se estende de uma tempestade até a superfície. Alguns estão associados a supercélulas, tempestades com uma corrente ascendente rotativa. A confirmação e a classificação dependem da análise técnica; um funil visível ou árvores caídas, isoladamente, não determinam a intensidade.',
      'Os danos podem se sobrepor: uma tempestade pode produzir granizo e rajadas fortes sem tornado, e microexplosões (downbursts) também podem provocar destruição localizada. Em análises de setembro de 2026 no Paraná, o Simepar diferenciou eventos de downburst de casos com indícios de tornado, e registrou que a classificação Fujita dos tornados então identificados permanecia inconclusiva.',
      'Em tempestades, procure abrigo em uma construção firme, longe de janelas. Não tente observar o fenômeno ao ar livre, não se abrigue sob árvores e acompanhe os avisos oficiais. Após a tempestade, evite cabos caídos e estruturas danificadas.'
    ],
    category: 'Tempo Severo',
    publishedAt: '2026-10-17',
    author: null,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Brisbane_November_2014_Hailstorm_-_Hailstones.jpg',
    imageAlt: 'Pedras de granizo fotografadas após uma tempestade em Brisbane, Austrália, em 2014; imagem ilustrativa.',
    imageType: 'photo',
    imageCaption: 'Pedras de granizo registradas em Brisbane, Austrália, em 27 de novembro de 2014; imagem ilustrativa, sem relação com ocorrências no Paraná. Foto: Craig Franklin, Wikimedia Commons, CC BY-SA 3.0.',
    sources: [
      { name: 'Simepar — tornados, supercélulas e microexplosões: diferenças entre fenômenos', url: 'https://www.simepar.br/simepar/post/71027', publishedAt: '2025-11-05' },
      { name: 'Simepar — balanço de tornados e chuvas em setembro de 2026', url: 'https://www.simepar.br/simepar/post/79188', publishedAt: '2026-10-01' },
      { name: 'NOAA/NSSL — como se forma o granizo', url: 'https://www.nssl.noaa.gov/education/svrwx101/hail/' },
      { name: 'NOAA/NSSL — ventos danosos de tempestades', url: 'https://www.nssl.noaa.gov/education/svrwx101/wind/' },
      { name: 'NOAA/NSSL — fundamentos sobre tornados', url: 'https://www.nssl.noaa.gov/education/svrwx101/tornadoes/' },
      { name: 'Wikimedia Commons — granizo em Brisbane (CC BY-SA 3.0)', url: 'https://commons.wikimedia.org/wiki/File:Brisbane_November_2014_Hailstorm_-_Hailstones.jpg' }
    ],
    status: 'published',
    featured: false
  },
  {
    id: 'tornado-pirai-do-sul-2026',
    slug: 'tornado-pirai-do-sul-parana-2026',
    title: 'Tornado em Piraí do Sul: entenda o fenômeno e como foi feita a confirmação meteorológica',
    summary: 'O Simepar confirmou o tornado em 9 de agosto e, após análise de campo, radar e drone, classificou o evento como F3 em 14 de agosto de 2026.',
    content: [
      'Um tornado atingiu a zona rural de Piraí do Sul, nos Campos Gerais do Paraná, no fim da tarde de 8 de agosto de 2026. O Simepar confirmou a ocorrência no dia seguinte e concluiu a análise técnica em 14 de agosto: o fenômeno foi classificado como F3 na Escala Fujita.',
      'Na nota inicial, publicada às 12h33 de 9 de agosto, o Simepar informou que vídeos recebidos pelo centro operacional tinham características visuais compatíveis com um tornado. A conclusão preliminar também considerou relatos de moradores e a distribuição dos danos, mas a intensidade ainda estava sob investigação.',
      'Cinco dias depois, a equipe do Simepar divulgou o resultado da avaliação feita com a Defesa Civil do Paraná. O órgão identificou uma trajetória contínua de destruição de pelo menos 17,3 quilômetros na área rural. O mapeamento passou por Jararaca, Fundão e Boa Vista.',
      'A classificação F3 indica intensidade severa na Escala Fujita original. O Simepar associou ao evento rajadas estimadas entre 253 e 332 km/h. Esses valores não vieram de uma medição direta do vento durante a passagem: são uma estimativa da intensidade máxima, inferida a partir dos danos encontrados e dos critérios da escala.',
      'Para reconstruir o caminho e avaliar a força, especialistas combinaram vistorias de campo, imagens de radar meteorológico, levantamentos e fotogrametria por drone e registros enviados por moradores. A equipe observou a distribuição dos estragos, o movimento de detritos e deformações em estruturas e na vegetação para traçar a trajetória e aplicar os indicadores de dano da Escala Fujita.',
      'Entre os danos descritos pelo Simepar estão colapsos severos em edificações de alvenaria e madeira e em uma torre de transmissão de energia. Fragmentos de madeira, telhas e galhos foram arremessados e encontrados incrustados no solo ou em troncos; árvores de grande porte tiveram partes dos troncos rompidas, e pastagens apresentaram ranhuras e remoção localizada de vegetação e da camada superficial do solo.',
      'Em um balanço divulgado em 10 de agosto, a Defesa Civil informou, segundo a reportagem da Banda B, que 20 residências haviam sido afetadas na área rural e 20 pessoas ficaram desalojadas, acolhidas por familiares. Esse é o levantamento publicado naquele momento, não uma atualização posterior do total.',
      'O Simepar descreveu um ambiente favorável a tempestades organizadas: ar quente e úmido vindo do Norte do Brasil, um sistema de baixa pressão sobre o Paraguai, a passagem de uma frente fria e cisalhamento do vento, isto é, mudanças de velocidade ou direção do vento com a altura. Esses fatores ajudam a explicar o contexto meteorológico, mas não significam que toda tempestade nessas condições produza um tornado.',
      'Em termos simples, um tornado é uma coluna de ar estreita e em rotação que se estende de uma tempestade até o solo. Os tornados mais destrutivos costumam estar associados a supercélulas, tempestades com circulação organizada. A formação exata ainda não é totalmente compreendida pela ciência; uma nuvem em forma de funil, sozinha, não basta para confirmar contato com o solo.',
      'Durante uma tempestade severa, acompanhe os avisos oficiais da região e procure abrigo imediatamente em uma construção firme, no pavimento mais baixo e em um cômodo interno, afastado de janelas. Evite ficar em veículos, tendas ou estruturas leves. Se estiver em uma escola ou local de trabalho, siga o plano de emergência do estabelecimento.',
      'A confirmação de Piraí do Sul mostra por que a classificação de um tornado depende do levantamento posterior dos danos e de evidências complementares. A categoria F3 e a faixa de vento divulgadas pelo Simepar são conclusões técnicas desse processo, não uma leitura instrumental feita no local durante o fenômeno.'
    ],
    category: 'Tornados',
    publishedAt: '2026-10-17',
    author: null,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Evolution_of_a_Tornado.jpg/1920px-Evolution_of_a_Tornado.jpg',
    imageAlt: 'Fotomontagem ilustrativa de um tornado no Kansas, Estados Unidos, em 2016; não representa o evento de Piraí do Sul.',
    imageType: 'photo',
    imageCaption: 'Imagem ilustrativa: fotomontagem de oito imagens de um tornado formado no Kansas, EUA, em 24 de maio de 2016. Não é o tornado de Piraí do Sul. Recorte de exibição em 16:9. Foto: Jason Weingart, Wikimedia Commons, CC BY-SA 4.0.',
    sources: [
      { name: 'Simepar — confirmação inicial do tornado em Piraí do Sul', url: 'https://www.simepar.br/simepar/post/77849', publishedAt: '2026-08-09' },
      { name: 'Simepar — classificação F3 e análise da trajetória e dos danos', url: 'https://www.simepar.br/simepar/post/77986', publishedAt: '2026-08-14' },
      { name: 'Banda B — balanço inicial da Defesa Civil sobre imóveis e moradores afetados', url: 'https://www.bandab.com.br/noticias-parana/parana-10-tornado-2026-pirai-do-sul/', publishedAt: '2026-08-10' },
      { name: 'NOAA/NSSL — fundamentos sobre tornados e classificação por danos', url: 'https://www.nssl.noaa.gov/education/svrwx101/tornadoes/' },
      { name: 'National Weather Service — orientações durante um tornado', url: 'https://www.weather.gov/safety/tornado-during' },
      { name: 'Imagem: Jason Weingart, “Evolution of a Tornado”, Wikimedia Commons (CC BY-SA 4.0)', url: 'https://commons.wikimedia.org/wiki/File:Evolution_of_a_Tornado.jpg' }
    ],
    status: 'published',
    featured: false
  },
  {
    id: 'wmo-clima-global-2024',
    slug: 'clima-global-2024-recordes-omm',
    title: 'OMM confirma 2024 como o ano mais quente já observado',
    summary: 'Relatório da Organização Meteorológica Mundial reúne indicadores de temperatura, oceanos, geleiras e eventos extremos.',
    content: [
      'A Organização Meteorológica Mundial (OMM) publicou em 19 de março de 2025 o relatório Estado do Clima Global 2024. A publicação indica que 2024 foi provavelmente o primeiro ano-calendário com temperatura média global superior a 1,5 °C em relação ao período pré-industrial, com estimativa de 1,55 ± 0,13 °C.',
      'A OMM ressalva que um único ano acima de 1,5 °C não significa que a meta de longo prazo do Acordo de Paris tenha sido ultrapassada. Essa meta é avaliada a partir de tendências de longo prazo, e não de um ano isolado.',
      'O relatório também aponta recordes no conteúdo de calor dos oceanos e no nível médio global do mar em 2024. A organização destaca que esses indicadores complementam a leitura da temperatura do ar e ajudam a acompanhar mudanças persistentes no sistema climático.',
      'A síntese é baseada em contribuições de serviços meteorológicos e hidrológicos nacionais, centros regionais de clima, parceiros das Nações Unidas e pesquisadores. Os detalhes metodológicos estão no relatório completo da OMM.'
    ],
    category: 'Climatologia',
    publishedAt: '2025-03-19',
    author: null,
    image: 'https://wmo.int/sites/default/files/styles/featured_image_x1_768x512/public/2025-03/thumbnails.jpg?h=d1cb525d&itok=jl9s5Fs4',
    imageAlt: 'Imagem de capa do relatório Estado do Clima Global 2024, da OMM',
    imageType: 'photo',
    sources: [{ name: 'OMM — relatório documenta impactos do clima e do tempo', url: 'https://wmo.int/news/media-centre/wmo-report-documents-spiralling-weather-and-climate-impacts' }],
    status: 'published',
    featured: false
  },
  {
    id: 'eventos-extremos-deslocamentos-2024',
    slug: 'eventos-extremos-deslocamentos-2024',
    title: 'Eventos extremos de 2024 causaram o maior número de novos deslocamentos desde 2008',
    summary: 'A OMM relaciona ciclones, enchentes e secas a impactos humanos e econômicos em seu balanço anual do clima.',
    content: [
      'O balanço Estado do Clima Global 2024, divulgado pela OMM em 19 de março de 2025, registra que eventos meteorológicos extremos levaram ao maior número de novos deslocamentos anuais desde 2008.',
      'A publicação cita ciclones tropicais, inundações e secas entre os perigos que contribuíram para perdas humanas, danos a moradias e infraestrutura e impactos sobre áreas agrícolas. O relatório também descreve efeitos combinados de conflitos, seca e preços de alimentos em crises alimentares.',
      'A OMM enfatiza a importância de sistemas de alerta antecipado e serviços climáticos para apoiar decisões e reduzir riscos. A matéria resume o relatório e não atribui um número de vítimas ou deslocados que não esteja discriminado na fonte.'
    ],
    category: 'Tempo Severo',
    publishedAt: '2025-03-19',
    author: null,
    image: 'https://wmo.int/sites/default/files/styles/featured_image_x1_768x512/public/2025-03/thumbnails.jpg?h=d1cb525d&itok=jl9s5Fs4',
    imageAlt: 'Imagem ilustrativa usada pela OMM na publicação sobre o clima global de 2024',
    imageType: 'photo',
    sources: [{ name: 'OMM — relatório documenta impactos do clima e do tempo', url: 'https://wmo.int/news/media-centre/wmo-report-documents-spiralling-weather-and-climate-impacts' }],
    status: 'published',
    featured: false
  },
  {
    id: 'enchentes-rio-grande-do-sul-2024',
    slug: 'chuvas-e-enchentes-no-rio-grande-do-sul-2024',
    title: 'Relatório da NOAA registra enchentes catastróficas no Rio Grande do Sul',
    summary: 'O balanço climático de abril de 2024 descreve chuvas torrenciais no fim do mês e no início de maio no estado.',
    content: [
      'O relatório global de clima de abril de 2024 da NOAA, publicado em 14 de maio daquele ano, registra que chuvas torrenciais nos últimos dias de abril e no começo de maio provocaram enchentes catastróficas no Rio Grande do Sul.',
      'A publicação cita o evento em seu panorama mundial de precipitação e aponta para uma análise dedicada da NOAA sobre as enchentes. O texto desta matéria se limita ao que consta nesse relatório; não acrescenta estimativas locais de chuva, vítimas ou danos.',
      'O registro mostra como boletins climáticos globais documentam eventos regionais. Para reconstruções detalhadas do episódio, consulte também o documento técnico vinculado pela NOAA na lista de fontes.'
    ],
    category: 'Tempestades',
    publishedAt: '2024-05-14',
    author: null,
    image: 'https://www.ncei.noaa.gov/monitoring-content/sotc/global/extremes/extremes-202404.png',
    imageAlt: 'Mapa de anomalias e eventos climáticos selecionados em abril de 2024, NOAA',
    imageType: 'chart',
    sources: [
      { name: 'NOAA/NCEI — Relatório global de clima de abril de 2024', url: 'https://www.ncei.noaa.gov/access/monitoring/monthly-report/global/202404' },
      { name: 'NOAA — análise das enchentes no Rio Grande do Sul (PDF)', url: 'https://www.ncei.noaa.gov/monitoring-content/sotc/global/2024/apr/Brazil-Floods-RioGrandeSul-202404.pdf' }
    ],
    status: 'published',
    featured: false
  },
  {
    id: 'beryl-primeiro-furacao-categoria-4-junho',
    slug: 'furacao-beryl-recorde-no-atlantico-em-junho',
    title: 'Beryl foi o primeiro furacão de categoria 4 observado no Atlântico em junho',
    summary: 'O relatório da NOAA sobre junho de 2024 destaca o marco do ciclone durante um mês de temperaturas oceânicas recordes.',
    content: [
      'No relatório global de clima de junho de 2024, publicado em 12 de julho, a NOAA registrou que o furacão Beryl se tornou o primeiro furacão de categoria 4 observado no oceano Atlântico durante o mês de junho.',
      'O relatório também informa que junho de 2024 foi o junho mais quente no registro global de 175 anos da NOAA. A publicação apresenta esses dados em seções distintas; esta matéria não afirma que a temperatura oceânica, por si só, tenha causado a intensidade ou a trajetória do Beryl.',
      'O relatório mensal reúne observações climáticas e referências a eventos. Para detalhes de trajetória e análise operacional do ciclone, consulte os boletins do Centro Nacional de Furacões listados nas fontes.'
    ],
    category: 'Tempestades',
    publishedAt: '2024-07-12',
    author: null,
    image: 'https://www.ncei.noaa.gov/monitoring-content/sotc/global/extremes/extremes-202406.png',
    imageAlt: 'Mapa de anomalias e eventos climáticos selecionados em junho de 2024, NOAA',
    imageType: 'chart',
    sources: [
      { name: 'NOAA/NCEI — Relatório global de clima de junho de 2024', url: 'https://www.ncei.noaa.gov/access/monitoring/monthly-report/global/202406' },
      { name: 'Centro Nacional de Furacões — arquivos de ciclones tropicais', url: 'https://www.nhc.noaa.gov/data/tcr/' }
    ],
    status: 'published',
    featured: false
  },
  {
    id: 'pantanal-focos-incendio-junho-2024',
    slug: 'pantanal-registra-mais-de-2500-incendios-em-junho-de-2024',
    title: 'Pantanal teve mais de 2.500 incêndios registrados em junho de 2024',
    summary: 'A NOAA aponta o maior total para junho desde o início da série, em 1998, em seu relatório climático mensal.',
    content: [
      'O relatório global de clima de junho de 2024 da NOAA, publicado em 12 de julho, informa que mais de 2.500 incêndios foram registrados no Pantanal naquele mês.',
      'Segundo a publicação, esse foi o maior número já registrado para junho desde o início da série, em 1998. O relatório relaciona o contexto a temperaturas recordes em partes da América do Sul e a condições de seca, sem atribuir a um fator único a ocorrência dos incêndios.',
      'Os números acima são os reportados pela NOAA. Para dados operacionais e atualizações sobre focos de calor, consulte os sistemas oficiais brasileiros indicados nas fontes.'
    ],
    category: 'Tempo Severo',
    publishedAt: '2024-07-12',
    author: null,
    image: 'https://www.ncei.noaa.gov/monitoring-content/sotc/global/extremes/extremes-202406.png',
    imageAlt: 'Mapa de anomalias e eventos climáticos selecionados em junho de 2024, NOAA',
    imageType: 'chart',
    sources: [
      { name: 'NOAA/NCEI — Relatório global de clima de junho de 2024', url: 'https://www.ncei.noaa.gov/access/monitoring/monthly-report/global/202406' },
      { name: 'INPE — Programa Queimadas', url: 'https://terrabrasilis.dpi.inpe.br/queimadas/portal/' }
    ],
    status: 'published',
    featured: false
  },
  {
    id: 'perspectiva-la-nina-noaa-maio-2024',
    slug: 'perspectiva-de-la-nina-no-relatorio-de-maio-de-2024',
    title: 'Perspectiva da NOAA em maio de 2024 favorecia a formação de La Niña',
    summary: 'O boletim daquele mês estimava 65% de chance de desenvolvimento entre julho e setembro de 2024; trata-se de uma previsão histórica.',
    content: [
      'No relatório global de clima de maio de 2024, publicado em 13 de junho, a NOAA registrou a perspectiva então divulgada pelo Climate Prediction Center: condições neutras de ENSO estavam presentes e La Niña era favorecida para se desenvolver entre julho e setembro, com probabilidade de 65%.',
      'O mesmo texto indicava 85% de chance de persistência durante novembro de 2024 a janeiro de 2025. Essas probabilidades representam uma previsão feita naquele momento, não uma previsão válida hoje nem uma confirmação do que ocorreu posteriormente.',
      'A matéria preserva o contexto temporal do boletim para não apresentar uma perspectiva antiga como previsão atual. Consulte o Climate Prediction Center para a situação e os prognósticos mais recentes.'
    ],
    category: 'Previsão do Tempo',
    publishedAt: '2024-06-13',
    author: null,
    image: 'https://www.ncei.noaa.gov/monitoring-content/sotc/global/map-percentile-mntp/map-percentile-mntp-202405.png',
    imageAlt: 'Mapa NOAA de percentis de temperatura global em maio de 2024',
    imageType: 'chart',
    sources: [
      { name: 'NOAA/NCEI — Relatório global de clima de maio de 2024', url: 'https://www.ncei.noaa.gov/access/monitoring/monthly-report/global/202405' },
      { name: 'NOAA Climate Prediction Center — ENSO', url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml' }
    ],
    status: 'published',
    featured: false
  }
];

export const stories = [...tornadoStories, ...ensoStories, ...phenomenonStories, ...portalStories, ...archiveStories];

export const categories = [
  'Tornados',
  'Clima Severo',
  'Tempestades',
  'Tempo Severo',
  'El Niño',
  'Previsão',
  'Previsão do Tempo',
  'Ciência',
  'Climatologia',
  'INFM'
];