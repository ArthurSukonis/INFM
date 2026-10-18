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

export const ensoStories = [
  article({
    id: 'el-nino-2026-previsoes-atuais', slug: 'el-nino-2026-previsoes-mais-recentes',
    title: 'El Niño em 2026: o que dizem as previsões meteorológicas mais recentes?',
    summary: 'No boletim de 8 de outubro, a NOAA mantinha o aviso de El Niño e estimava alta probabilidade de continuidade forte a muito forte até o início de 2027.',
    content: [
      'O relatório mais recente consultado nesta apuração foi a discussão diagnóstica do Climate Prediction Center da NOAA, publicada em 8 de outubro de 2026. O documento manteve o status de Aviso de El Niño e afirmou que havia mais de 83% de probabilidade de o fenômeno permanecer forte a muito forte até o trimestre janeiro–março de 2027.',
      'No mesmo boletim, a NOAA descreveu anomalias de temperatura da superfície do mar superiores a 4 °C em partes do Pacífico equatorial leste e um valor de +2,1 °C no índice Niño 3.4. São indicadores de regiões e períodos de cálculo específicos, não temperaturas uniformes em todo o oceano.',
      'Em 13 de outubro, o INMET informou que a anomalia mensal do Niño 3.4 em setembro foi de +2,08 °C, segunda maior para setembro desde 1950, e que uma observação semanal de outubro chegou a +2,4 °C. O próprio instituto recomenda cautela ao comparar médias mensais com dados semanais, pois usam janelas temporais diferentes.',
      'O cenário é uma previsão probabilística e muda com novas medições. Ele não informa em que dia haverá uma tempestade, nem permite atribuir automaticamente um evento extremo ao El Niño. Para decisões imediatas, acompanhe a previsão de curto prazo e os avisos meteorológicos oficiais.'
    ],
    category: 'El Niño',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/CPC-NWS-NOAA_SST_Anoms_08_JUL_2015.png',
    imageAlt: 'Mapa NOAA de anomalias da temperatura da superfície do mar no Pacífico tropical em julho de 2015, episódio histórico de El Niño.',
    imageType: 'chart',
    imageCaption: 'Mapa de anomalias da superfície do mar de julho de 2015, durante outro episódio de El Niño; não representa as condições de outubro de 2026. Crédito: NOAA Climate Prediction Center, domínio público.',
    sources: [
      { name: 'NOAA/CPC — ENSO Diagnostic Discussion, 8 de outubro de 2026', url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml', publishedAt: '2026-10-08' },
      { name: 'INMET — anomalia de setembro e dados semanais de outubro', url: 'https://portal.inmet.gov.br/noticias/el-ni%C3%B1o-ganha-intensidade-e-registra-a-segunda-maior-anomalia-para-setembro-desde-1950', publishedAt: '2026-10-13' },
      { name: 'Wikimedia Commons — NOAA CPC SST anomaly map (domínio público)', url: 'https://commons.wikimedia.org/wiki/File:CPC-NWS-NOAA_SST_Anoms_08_JUL_2015.png' }
    ]
  }),
  article({
    id: 'el-nino-chuvas-sul-brasil', slug: 'el-nino-chuvas-intensas-sul-brasil',
    title: 'El Niño pode aumentar o risco de chuvas intensas no Sul do Brasil?',
    summary: 'Prognósticos sazonais apontam maior probabilidade de chuva acima da média em partes do Sul, mas não antecipam quando ou onde ocorrerá uma tempestade.',
    content: [
      'Pode alterar as probabilidades de chuva em escala sazonal, mas não determina sozinho um episódio específico. No boletim conjunto de setembro de 2026, INMET e INPE indicaram maior probabilidade de chuva acima da média em áreas do Sul, enquanto outras regiões do país apresentavam sinais distintos.',
      'A Agência Estadual de Notícias informou em 9 de outubro, a partir de uma atualização do Simepar, que a projeção para o Paraná favorecia acumulados acima da média até dezembro, com desvios maiores previstos para Centro-Sul, Sul, Oeste e Sudoeste. A publicação ressalta que o acompanhamento diário continua indispensável: os episódios dependem de frentes frias, áreas de baixa pressão e outros sistemas.',
      'Uma tendência climática descreve probabilidades ao longo de semanas ou meses; uma previsão do tempo estima condições para dias e locais concretos. Mesmo em um ano de El Niño, não chove acima da média em toda cidade e não se pode concluir que cada temporal foi causado pelo fenômeno.',
      'Acompanhe o prognóstico regional do INMET e do Simepar, além de avisos da Defesa Civil. Prevenção de alagamentos deve considerar também drenagem, relevo, ocupação e condições locais.'
    ],
    category: 'El Niño',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Atmospheric_River_for_Chile_%28CIRA_2024-06-27%29.png',
    imageAlt: 'Imagem de satélite NOAA/CIRA de um rio atmosférico em direção ao Chile em 2024; ilustração de transporte de umidade, não é uma previsão para o Sul do Brasil.',
    imageType: 'chart',
    imageCaption: 'Imagem de um rio atmosférico no Pacífico Sul em 27 de junho de 2024; ilustra transporte de umidade, mas não representa uma previsão para o Brasil. Imagens GOES: CSU/CIRA e NOAA, domínio público.',
    sources: [
      { name: 'INMET — Painel El Niño, boletim de setembro de 2026', url: 'https://www.cptec.inpe.br/?nodeId=508510', publishedAt: '2026-09-30' },
      { name: 'Agência Estadual de Notícias — El Niño e previsão de chuva no Paraná', url: 'https://www.parana.pr.gov.br/aen/Noticia/El-Nino-trara-acumulados-de-chuva-acima-da-media-ate-dezembro-no-Parana', publishedAt: '2026-10-09' },
      { name: 'NOAA/CPC — padrões climáticos associados a El Niño', url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/ensocycle/elninosfc.shtml' },
      { name: 'Imagem: NOAA/CIRA — rio atmosférico no Chile (domínio público)', url: 'https://commons.wikimedia.org/wiki/File:Atmospheric_River_for_Chile_(CIRA_2024-06-27).png' }
    ]
  }),
  article({
    id: 'el-nino-tempestades-parana', slug: 'el-nino-tempestades-parana',
    title: 'Como o El Niño influencia as tempestades no Paraná?',
    summary: 'O aquecimento do Pacífico pode alterar padrões de circulação; no estado, frentes e sistemas locais determinam quando a instabilidade se organiza.',
    content: [
      'El Niño é uma fase do sistema oceano-atmosfera ENOS associada ao aquecimento persistente das águas superficiais do Pacífico equatorial. Ao alterar a circulação atmosférica, o fenômeno pode mudar probabilidades sazonais de chuva e temperatura em diferentes regiões.',
      'Para o Paraná, o Simepar relacionou o El Niño ativo em 2026 à passagem mais frequente de sistemas frontais e a uma tendência de chuva acima da média até dezembro. A projeção publicada pela AEN em 9 de outubro apontou maiores desvios em algumas regiões do estado, mas não previu uma tempestade particular nem seu horário.',
      'Uma tempestade severa requer uma combinação de fatores mais próxima no tempo e no espaço, como umidade, instabilidade, mecanismo de elevação e cisalhamento. Frentes frias e áreas de baixa pressão podem participar dessa combinação; o El Niño, por si só, não cria um tornado ou granizo em uma cidade.',
      'Assim, a relação útil para planejamento é probabilística: o fenômeno pode alterar o pano de fundo climático, enquanto observações, previsão de curto prazo e avisos definem o risco próximo. Atualizações do Simepar e da Defesa Civil são mais adequadas para acompanhar a situação de cada município.'
    ],
    category: 'El Niño',
    image: 'https://www.nssl.noaa.gov/education/svrwx101/img/thunderstorm-1200x360.jpg',
    imageAlt: 'Supercélula com mesociclone em imagem educativa do NOAA NSSL; não representa uma tempestade no Paraná.',
    imageType: 'photo',
    imageCaption: 'Tempestade rotativa fotografada em outro evento; não é uma ocorrência no Paraná. Crédito: NOAA National Severe Storms Laboratory.',
    sources: [
      { name: 'Agência Estadual de Notícias — El Niño e previsão de chuva no Paraná', url: 'https://www.parana.pr.gov.br/aen/Noticia/El-Nino-trara-acumulados-de-chuva-acima-da-media-ate-dezembro-no-Parana', publishedAt: '2026-10-09' },
      { name: 'Simepar — El Niño, frentes frias e chuva no Paraná em setembro de 2026', url: 'https://www.simepar.br/simepar/post/78447', publishedAt: '2026-09-01' },
      { name: 'NOAA — fundamentos de El Niño e La Niña', url: 'https://www.noaa.gov/education/resource-collections/weather-atmosphere/el-nino' },
      { name: 'Imagem: NOAA NSSL — supercélulas e tempestades', url: 'https://www.nssl.noaa.gov/education/svrwx101/thunderstorms/' }
    ]
  }),
  article({
    id: 'el-nino-tornados-relacao', slug: 'el-nino-tornados-relacao-causalidade',
    title: 'El Niño e tornados: existe uma relação direta entre os fenômenos?',
    summary: 'ENSO pode alterar padrões de circulação, mas isso não prova que tenha causado um tornado específico no Brasil.',
    content: [
      'Não há base para afirmar que El Niño provoca diretamente um tornado específico. O fenômeno oceano-atmosfera pode mudar padrões regionais de chuva e circulação em determinadas estações, mas tornados dependem de processos de tempestade em escalas menores.',
      'Estudos e previsões de risco nos Estados Unidos encontram relações estatísticas entre fases do ENSO e ambientes favoráveis a tempestades em certos períodos. Esses resultados são regionais: não estabelecem uma causa direta, não podem ser transferidos automaticamente ao Paraná e não dizem qual tempestade vai produzir um tornado.',
      'No Sul do Brasil, pesquisas examinam ambientes atmosféricos associados a tornados; o Simepar também descreve a combinação de umidade, instabilidade, frentes e cisalhamento. Para atribuir causalidade a um evento, seria necessária uma análise específica que isolasse a contribuição do ENSO de outros fatores.',
      'A formulação correta é: El Niño pode influenciar probabilidades climáticas e alguns ambientes atmosféricos. A confirmação e a explicação de cada tornado exigem evidências do caso, não apenas a coincidência temporal com uma fase do ENSO.'
    ],
    category: 'Ciência',
    image: 'https://www.nssl.noaa.gov/education/svrwx101/tornadoes/img/ElRenoUnionCity_supercell_annotated.jpg',
    imageAlt: 'Supercélula observada nos Estados Unidos, anotada pelo NOAA NSSL; imagem ilustrativa para discutir condições de tempestade, sem relação direta com El Niño.',
    imageType: 'photo',
    imageCaption: 'Supercélula em outro evento e país; ilustração do ambiente de tempestade, não evidência de relação causal entre El Niño e tornado. Crédito: Brian e Steve Koch/NOAA NSSL.',
    sources: [
      { name: 'Simepar — El Niño, frentes e sistemas de baixa pressão no Paraná', url: 'https://www.simepar.br/simepar/post/78447', publishedAt: '2026-09-01' },
      { name: 'Vera et al. — ambientes de tornados no Sudeste da América do Sul, Monthly Weather Review', url: 'https://journals.ametsoc.org/view/journals/mwre/152/1/MWR-D-22-0248.1.xml', publishedAt: '2024-01-01' },
      { name: 'NOAA — estudo de índice ambiental de tornados e ENSO/AO nos EUA', url: 'https://wcd.copernicus.org/articles/3/1063/2022/' },
      { name: 'Imagem: NOAA NSSL — supercélula El Reno/Union City', url: 'https://www.nssl.noaa.gov/education/svrwx101/tornadoes/' }
    ]
  }),
  article({
    id: 'el-nino-la-nina-neutralidade', slug: 'el-nino-la-nina-neutralidade-diferencas',
    title: 'El Niño, La Niña e neutralidade: entenda as diferenças',
    summary: 'As três fases do ENOS descrevem padrões oceânicos e atmosféricos no Pacífico equatorial, não previsões de um evento local.',
    content: [
      'ENOS é a interação entre oceano e atmosfera no Pacífico equatorial. El Niño corresponde à fase quente, La Niña à fase fria e neutralidade ao período em que as condições não atendem aos critérios de nenhuma das duas fases.',
      'As mudanças são avaliadas por temperaturas da superfície do mar em regiões de referência e por sinais atmosféricos associados, como ventos e convecção. Uma leitura semanal pode oscilar; centros de previsão usam médias de vários meses e analisam o acoplamento entre oceano e atmosfera antes de emitir um diagnóstico.',
      'Em outubro de 2026, a NOAA mantinha Aviso de El Niño e estimava alta probabilidade de que o episódio continuasse forte a muito forte até janeiro–março de 2027. Esse é o diagnóstico da fonte nessa data de corte, sujeito a revisão com novas observações.',
      'Nenhuma fase determina sozinha o tempo de cada cidade. ENSO modifica probabilidades e padrões sazonais; sistemas locais — frentes, ciclones, umidade e convecção — influenciam as condições concretas.'
    ],
    category: 'El Niño',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/El_Ni%C3%B1o_in_August_2023.png',
    imageAlt: 'Mapa NOAA de anomalias de temperatura da superfície do mar durante El Niño de 2023; ilustração de outro episódio.',
    imageType: 'chart',
    imageCaption: 'Anomalias da superfície do mar em agosto de 2023, durante outro episódio; não representa o estado atual de 2026. Crédito: NOAA Climate.gov, domínio público.',
    sources: [
      { name: 'NOAA — El Niño e La Niña: ENSO', url: 'https://www.noaa.gov/education/resource-collections/weather-atmosphere/el-nino' },
      { name: 'NOAA/CPC — diagnóstico ENSO de 8 de outubro de 2026', url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml', publishedAt: '2026-10-08' },
      { name: 'Wikimedia Commons — El Niño in August 2023 (NOAA, domínio público)', url: 'https://commons.wikimedia.org/wiki/File:El_Ni%C3%B1o_in_August_2023.png' }
    ]
  }),
  article({
    id: 'el-nino-muito-forte-calculo', slug: 'el-nino-muito-forte-intensidade-calculo',
    title: 'O que é um El Niño muito forte e como sua intensidade é calculada?',
    summary: 'A avaliação combina anomalias oceânicas em uma região e período definidos com sinais atmosféricos; intensidade não é medida por um único ponto.',
    content: [
      'A intensidade de El Niño não é medida pela temperatura de um dia ou por uma estação isolada. Centros como o NOAA Climate Prediction Center acompanham anomalias de temperatura da superfície do mar em áreas do Pacífico equatorial e índices calculados em janelas temporais, além de verificar a resposta da atmosfera.',
      'O diagnóstico do CPC de 8 de outubro de 2026 relatou +2,1 °C no índice Niño 3.4 e temperaturas ainda maiores em porções do Pacífico leste. O CPC também descreveu a possibilidade de um evento histórico usando RONI de três meses igual ou superior a +2,5 °C; esse é um critério específico citado para a probabilidade de recorde, não uma medida universal de “intensidade”.',
      'O INMET, ao comparar setembro com a série desde 1950, informou +2,08 °C de anomalia mensal no Niño 3.4. Seu texto alerta que comparar essa média mensal com uma observação semanal requer cautela: as janelas não são equivalentes.',
      'Classificações como fraco, moderado, forte ou muito forte dependem do índice, da janela e da convenção usada pelo centro responsável. A previsão ainda é probabilística: os números e categorias podem mudar quando as observações e os modelos são atualizados.'
    ],
    category: 'Ciência',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/NOAA-CPC-NWS-NOAA_SST_Anoms_2015.jpg',
    imageAlt: 'Mapa de anomalias de temperatura da superfície do mar durante o episódio El Niño de 2015; mapa histórico e ilustrativo.',
    imageType: 'chart',
    imageCaption: 'Mapa histórico de anomalias de temperatura do mar associado ao episódio de 2015; não representa a intensidade observada em 2026. Fonte: NOAA CPC, domínio público.',
    sources: [
      { name: 'NOAA/CPC — diagnóstico ENSO de 8 de outubro de 2026', url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml', publishedAt: '2026-10-08' },
      { name: 'NOAA/CPC — índice RONI e probabilidades de intensidade', url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso/roni/' },
      { name: 'INMET — anomalia do Niño 3.4 em setembro de 2026', url: 'https://portal.inmet.gov.br/noticias/el-ni%C3%B1o-ganha-intensidade-e-registra-a-segunda-maior-anomalia-para-setembro-desde-1950', publishedAt: '2026-10-13' },
      { name: 'Wikimedia Commons — NOAA CPC SST anomalies 2015 (domínio público)', url: 'https://commons.wikimedia.org/wiki/File:NOAA-CPC-NWS-NOAA_SST_Anoms_2015.jpg' }
    ]
  }),
  article({
    id: 'pacifico-el-nino-clima-global', slug: 'pacifico-equatorial-el-nino-clima-global',
    title: 'Como o aquecimento do Oceano Pacífico influencia o clima mundial?',
    summary: 'Mudanças na temperatura do Pacífico equatorial alteram trocas de calor, umidade e circulação atmosférica; os efeitos variam por região e estação.',
    content: [
      'O Pacífico tropical cobre uma área enorme e troca continuamente calor e umidade com a atmosfera. Quando a temperatura da superfície muda de forma persistente, também mudam as regiões de maior evaporação e convecção; essas alterações podem reorganizar circulações atmosféricas em escala ampla.',
      'Na fase El Niño, águas mais quentes que o normal no Pacífico central e leste e ventos alísios enfraquecidos modificam a circulação de Walker. A cadeia de respostas pode deslocar correntes de jato e trajetórias médias de tempestades, alterando probabilidades de chuva e temperatura longe do oceano.',
      'Os efeitos não são iguais em todo o planeta. A época do ano, a localização exata do aquecimento e outros padrões atmosféricos podem reforçar ou atenuar as teleconexões. Um mapa de impacto sazonal é uma média histórica, não uma previsão de que cada evento seguirá o mesmo padrão.',
      'É por isso que centros meteorológicos combinam observações oceânicas, variáveis atmosféricas e modelos. Acompanhar a evolução do sistema é mais útil do que tratar El Niño como explicação automática para qualquer anomalia local.'
    ],
    category: 'Climatologia',
    image: 'https://www.noaa.gov/sites/default/files/styles/landscape_width_856px_webp/public/legacy/image/2019/Jun/PHOTO%20-%20Satellite%20image%20showing%20El%20Nino%20sea%20surface%20temperature%20departure%20from%20norm-2015.11.12%20-%20NOAA-1920x1080-landscape.png.jpg.webp?h=920929c4&itok=JxZfuakC',
    imageAlt: 'Imagem NOAA de anomalias de temperatura da superfície do Pacífico em outubro de 2015 durante El Niño.',
    imageType: 'chart',
    imageCaption: 'Anomalia da temperatura superficial do mar no Pacífico em outubro de 2015, durante El Niño. Crédito: NOAA.',
    sources: [
      { name: 'NOAA — El Niño e La Niña: interação entre oceano e atmosfera', url: 'https://www.noaa.gov/education/resource-collections/weather-atmosphere/el-nino' },
      { name: 'NOAA JetStream — impactos meteorológicos do ENSO', url: 'https://www.noaa.gov/jetstream/enso_impacts' },
      { name: 'NOAA/CPC — padrão de temperatura e precipitação em El Niño', url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/ensocycle/elninosfc.shtml' }
    ]
  }),
  article({
    id: 'primavera-verao-2026-27-clima', slug: 'tendencias-primavera-verao-2026-2027',
    title: 'Primavera e verão de 2026/2027: quais tendências climáticas estão sendo monitoradas?',
    summary: 'Boletins sazonais indicam probabilidades regionais sob El Niño; previsões de meses não especificam a data de tempestades ou extremos locais.',
    content: [
      'Na primavera e no verão de 2026/2027, o monitoramento acompanha o El Niño em fortalecimento e seus possíveis efeitos sobre chuva e temperatura. No diagnóstico de 8 de outubro, a NOAA estimou mais de 83% de chance de o episódio permanecer forte a muito forte até janeiro–março de 2027.',
      'O boletim de setembro do Painel El Niño, elaborado por INMET, INPE e instituições parceiras, mostrou maior probabilidade de chuva acima da média no Sul, especialmente no Rio Grande do Sul, e maior probabilidade de chuva abaixo da média em áreas do Norte e Nordeste. São tendências sazonais probabilísticas, não determinísticas.',
      'Previsões climáticas para meses orientam preparação e planejamento, mas não informam em qual município ocorrerá cada chuva intensa, estiagem ou temporal. Para o horizonte de dias, use a previsão de tempo; para risco iminente, acompanhe os avisos oficiais atualizados.',
      'A evolução do oceano e da atmosfera pode alterar as projeções. Esta matéria registra o quadro disponível em 17 de outubro de 2026 e recomenda consultar as atualizações dos centros emissores antes de decisões operacionais.'
    ],
    category: 'Previsão',
    image: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/figure08.gif',
    imageAlt: 'Gráfico do NOAA Climate Prediction Center com probabilidades de intensidade do El Niño calculadas em outubro de 2026.',
    imageType: 'chart',
    imageCaption: 'Gráfico probabilístico do NOAA Climate Prediction Center, publicado no diagnóstico de 8 de outubro de 2026; a projeção pode mudar com novas observações. Crédito: NOAA/CPC.',
    sources: [
      { name: 'INMET/CPTEC-INPE — Painel El Niño, boletim de setembro de 2026', url: 'https://www.cptec.inpe.br/?nodeId=508510', publishedAt: '2026-09-30' },
      { name: 'NOAA/CPC — diagnóstico ENSO de 8 de outubro de 2026', url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml', publishedAt: '2026-10-08' },
      { name: 'NOAA/CPC — figura de probabilidades de intensidade ENSO', url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/figure08.gif' }
    ]
  }),
  article({
    id: 'el-nino-seca-enchente-regioes', slug: 'el-nino-secas-enchentes-brasil',
    title: 'El Niño pode provocar secas em algumas regiões e enchentes em outras?',
    summary: 'Sim: a resposta depende da região e da época; no Brasil, prognósticos de 2026 destacaram probabilidades diferentes de chuva no Sul e no Norte/Nordeste.',
    content: [
      'El Niño altera a circulação entre oceano e atmosfera e tende a deslocar padrões de chuva. Por isso, um mesmo episódio pode aumentar a probabilidade de precipitação em algumas regiões e reduzi-la em outras; a distribuição não é uniforme nem garantida em cada município.',
      'No Painel El Niño de setembro de 2026, INMET e INPE apontaram maior probabilidade de chuva acima da média no Sul e, em sentido oposto, abaixo da média em áreas do Norte e Nordeste. O boletim também ressaltou que episódios específicos e os volumes em cada local dependem de sistemas meteorológicos regionais.',
      'Chuva acima da média durante vários meses não significa que haverá uma enchente em todos os rios. Inundação depende de intensidade e duração da chuva, umidade antecedente do solo, níveis dos cursos d’água, relevo, drenagem e exposição. Da mesma forma, uma probabilidade sazonal de chuva abaixo da média não confirma uma seca local.',
      'Acompanhar clima, vazões e avisos meteorológicos em escalas diferentes ajuda a separar o cenário sazonal do risco imediato. Para alertas e ações de segurança, consulte a Defesa Civil da sua região.'
    ],
    category: 'El Niño',
    image: 'https://www.noaa.gov/sites/default/files/2022-09/el_winter1.png',
    imageAlt: 'Mapa NOAA de padrões médios de impacto de El Niño entre dezembro e fevereiro; padrão histórico, não previsão específica para o Brasil em 2026.',
    imageType: 'chart',
    imageCaption: 'Mapa de padrões médios associados a El Niño em dezembro–fevereiro; não descreve a previsão atual de cada região brasileira. Crédito: NOAA.',
    sources: [
      { name: 'INMET/CPTEC-INPE — Painel El Niño, boletim de setembro de 2026', url: 'https://www.cptec.inpe.br/?nodeId=508510', publishedAt: '2026-09-30' },
      { name: 'NOAA — relações históricas entre ENSO e impactos meteorológicos', url: 'https://www.noaa.gov/jetstream/enso_impacts' },
      { name: 'Defesa Civil do Paraná — alertas vigentes', url: 'https://www.defesacivil.pr.gov.br/alertas-vigentes' }
    ]
  }),
  article({
    id: 'mudanca-climatica-tornados-ciencia', slug: 'mudancas-climaticas-tornados-frequencia-ciencia',
    title: 'Mudanças climáticas estão tornando os tornados mais frequentes? O que a ciência realmente sabe',
    summary: 'Para tornados, tendências e projeções ainda são incertas; registros, ambientes favoráveis e atribuição de cada evento não são a mesma coisa.',
    content: [
      'Não há evidência suficiente para afirmar uma tendência global clara de aumento da frequência de tornados causada pela mudança climática. O U.S. Climate Resilience Toolkit, mantido por agências federais norte-americanas, classifica tendências e projeções para tornados entre os extremos que ainda permanecem incertos.',
      'Contar tornados ao longo de décadas é difícil: métodos de observação, cobertura populacional, radares e critérios de registro mudaram. Mais relatos podem refletir melhor detecção, não necessariamente uma mudança igual na ocorrência real. Essa ressalva é especialmente importante ao comparar regiões e períodos.',
      'O aquecimento pode alterar componentes do ambiente que favorece tempestades, como umidade e instabilidade, mas a relação entre esses ingredientes e tornados depende também de cisalhamento, circulação e processos locais. Uma mudança em um ingrediente não determina automaticamente mais tornados.',
      'A literatura científica avalia ambientes tornádicos e registros regionais; seus resultados não demonstram que uma ocorrência específica tenha sido causada pelo aquecimento global. Para afirmações locais no Brasil, são necessários estudos e bases de dados adequados à região.'
    ],
    category: 'Ciência',
    image: 'https://www.nssl.noaa.gov/education/svrwx101/img/thunderstorm-1200x360.jpg',
    imageAlt: 'Supercélula fotografada nos Estados Unidos; imagem ilustrativa de tempestade, sem representar uma tendência climática.',
    imageType: 'photo',
    imageCaption: 'Tempestade severa de outro local e evento, usada como ilustração; não é evidência de frequência de tornados. Crédito: NOAA National Severe Storms Laboratory.',
    sources: [
      { name: 'U.S. Climate Resilience Toolkit — incertezas em tendências de extremos', url: 'https://toolkit.climate.gov/extreme-events' },
      { name: 'Vera et al. — ambientes de tornados no Sudeste da América do Sul, Monthly Weather Review', url: 'https://journals.ametsoc.org/view/journals/mwre/152/1/MWR-D-22-0248.1.xml', publishedAt: '2024-01-01' },
      { name: 'Simepar — revisão de metodologia para confirmar e classificar tornados', url: 'https://www.simepar.br/simepar/post/77985', publishedAt: '2026-08-14' }
    ]
  })
];
