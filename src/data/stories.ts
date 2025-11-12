import type { Story, Collaboration } from '../types';

export const mainStories: Story[] = [
  {
    id: 'javier-merelas',
    name: 'Javier Merelas',
    wood: 'Castiñeiro',
    province: 'Lugo',
    preview: {
      gl: 'Emprendedor rural que quedou prendado de Seceda e desenvolveu Lar da Cima e A Barreira.',
      es: 'Emprendedor rural que se enamoró de Seceda y desarrolló Lar da Cima y A Barreira.',
      en: 'Rural entrepreneur who fell in love with Seceda and developed Lar da Cima and A Barreira.'
    },
    fullStory: {
      gl: 'Con dezanove anos Javier quedou prendado de Seceda nunha sensación que él mesmo di que é difícil de explicar... Quería vivir vinculado ao monte e comezou coa idea dunha explotación de cabras, non resultou pero logo xurdiu Lar da Cima e A Barreira o proxecto de rehabilitación de dúas vivendas seguindo métodos e formas de respecto coa contorna. Na actualidade estas son o seu sustento económico e a súa forma de vida. O castiñeiro que forma os aros do violonchelo foi o chan desa casa sobre o que pisaron familias e fixeron vida...',
      es: 'Con diecinueve años Javier se enamoró de Seceda en una sensación que él mismo dice que es difícil de explicar... Quería vivir vinculado al monte y comenzó con la idea de una explotación de cabras, no resultó pero luego surgió Lar da Cima y A Barreira el proyecto de rehabilitación de dos viviendas siguiendo métodos y formas de respeto con el entorno. En la actualidad estas son su sustento económico y su forma de vida. El castaño que forma los aros del violonchelo fue el suelo de esa casa sobre el que pisaron familias y hicieron vida...',
      en: 'At nineteen years old Javier fell in love with Seceda in a feeling that he himself says is difficult to explain... He wanted to live linked to the mountain and began with the idea of a goat farm, it didn\'t work out but then Lar da Cima and A Barreira emerged, the project of rehabilitating two houses following methods and forms of respect with the environment. Currently these are his economic sustenance and his way of life. The chestnut that forms the ribs of the cello was the floor of that house on which families stepped and made life...'
    },
    image: '/images/javier-merelas.jpg',
    website: 'https://lardacima.com/'
  },
  {
    id: 'pedro-elba-eco-teixos',
    name: 'Pedro e Elba - Eco dos Teixos',
    wood: 'Teixo',
    province: 'Ourense',
    preview: {
      gl: 'Emprendedores rurais que rehabilitaron a antiga escola do pobo converténdoa nun albergue turístico.',
      es: 'Emprendedores rurales que rehabilitaron la antigua escuela del pueblo convirtiéndola en un albergue turístico.',
      en: 'Rural entrepreneurs who rehabilitated the old village school turning it into a tourist hostel.'
    },
    fullStory: {
      gl: 'Eco dos Teixos é un no que dous mozos rehabilitaron a antiga escola do pobo e converténdoa nun albergue turístico con actividades que o complementan. As súas liñas de traballo son a educación ambiental, rutas de sendeirismo, campamentos de diferentes tipos e obradoiros de artesanía-danza-circo etc. Este proxecto pon en valor a importancia dun lugar tan singular Casaio e especialmente o Teixadal; un dos reductos de teixos máis importantes de Europa que posee máis de catrocentos teixos que alcanzan idades superiores aos cincocentos anos. O teixo forma parte da pestana superior e inferior do violonchelo e é unha rama caída traida do propio teixadal.',
      es: 'Eco dos Teixos es un lugar donde dos jóvenes rehabilitaron la antigua escuela del pueblo y la convirtieron en un albergue turístico con actividades que lo complementan. Sus líneas de trabajo son la educación ambiental, rutas de senderismo, campamentos de diferentes tipos y talleres de artesanía-danza-circo etc. Este proyecto pone en valor la importancia de un lugar tan singular Casaio y especialmente el Teixadal; uno de los reductos de tejos más importantes de Europa que posee más de cuatrocientos tejos que alcanzan edades superiores a los quinientos años. El tejo forma parte de la pestana superior e inferior del violonchelo y es una rama caída traída del propio teixadal.',
      en: 'Eco dos Teixos is a place where two young people rehabilitated the old village school and turned it into a tourist hostel with activities that complement it. Their lines of work are environmental education, hiking routes, different types of camps and craft-dance-circus workshops etc. This project values the importance of such a unique place Casaio and especially the Teixadal; one of the most important yew refuges in Europe that has more than four hundred yews that reach ages over five hundred years. The yew forms part of the upper and lower nut of the cello and is a fallen branch brought from the teixadal itself.'
    },
    image: '/images/pedro-elba.jpg',
    website: 'https://ecodosteixos.com/'
  },
  {
    id: 'ivan-matos',
    name: 'Iván Matos',
    wood: 'Pino de Oregón',
    province: 'A Coruña',
    preview: {
      gl: 'Escultor formado na escola Pablo Picasso da Coruña, especialista en talla escultórica con motoserra.',
      es: 'Escultor formado en la escuela Pablo Picasso de La Coruña, especialista en talla escultórica con motosierra.',
      en: 'Sculptor trained at the Pablo Picasso school in La Coruña, specialist in sculptural carving with chainsaw.'
    },
    fullStory: {
      gl: 'Formouse na escola Pablo Picasso da Coruña onde aprendeu as técnicas escultóricas máis elementais como a talla en pedra, moldeando e baleirando, forxa artística e talla en madeira. Estudou Belas Artes e pouco a pouco foi crecendo como escultor, traballando en obras persoais e tamén atendendo as encargas de clientes. Enfocouse na tala escultórica coa especialidade en motoserra, chegou a representar a España no festival Tosmk (Rusia) cunha figura dun gorila xigante. A madeira que aportou a este proxecto é o pino de Oregón plantado en Altamira (A Coruña) que iba a ser material para unha escultura.',
      es: 'Se formó en la escuela Pablo Picasso de La Coruña donde aprendió las técnicas escultóricas más elementales como la talla en piedra, moldeando y vaciando, forja artística y talla en madera. Estudió Bellas Artes y poco a poco fue creciendo como escultor, trabajando en obras personales y también atendiendo los encargos de clientes. Se enfocó en la talla escultórica con la especialidad en motosierra, llegó a representar a España en el festival Tosmk (Rusia) con una figura de un gorila gigante. La madera que aportó a este proyecto es el pino de Oregón plantado en Altamira (A Coruña) que iba a ser material para una escultura.',
      en: 'He trained at the Pablo Picasso school in La Coruña where he learned the most elementary sculptural techniques such as stone carving, molding and hollowing, artistic forging and wood carving. He studied Fine Arts and little by little grew as a sculptor, working on personal works and also attending to client commissions. He focused on sculptural carving with chainsaw specialty, came to represent Spain at the Tosmk festival (Russia) with a giant gorilla figure. The wood he contributed to this project is the Oregon pine planted in Altamira (A Coruña) that was going to be material for a sculpture.'
    },
    image: '/images/ivan-matos.jpg',
    website: 'https://www.instagram.com/ivanhe_matos_sculpture/?hl=es'
  },
  {
    id: 'adri-pereiro',
    name: 'Adri Pereiro',
    wood: '',
    province: 'Pontevedra',
    preview: {
      gl: 'Luthier de instrumentos de corda frotada e creador do proxecto Un chelo e catro historias.',
      es: 'Luthier de instrumentos de cuerda frotada y creador del proyecto Un chelo y cuatro historias.',
      en: 'Luthier of bowed string instruments and creator of the project A cello and four stories.'
    },
    fullStory: {
      gl: 'Adri Pereiro é luthier de instrumentos de corda frotada. Na súa paixón por coñecer as posibilidades que ofrecen as madeiras locais xurde este proxecto "Un chelo e catro historias". Actualmente desenrola a súa actividade como luthier na cidade da Coruña onde segue a analizar as posibilidades físico acústicas das madeiras locais (e de fora) na construción deste instrumento.',
      es: 'Adri Pereiro es luthier de instrumentos de cuerda frotada. En su pasión por conocer las posibilidades que ofrecen las maderas locales surge este proyecto "Un chelo y cuatro historias". Actualmente desarrolla su actividad como luthier en la ciudad de La Coruña donde sigue analizando las posibilidades físico acústicas de las maderas locales (y de fuera) en la construcción de este instrumento.',
      en: 'Adri Pereiro is a luthier of bowed string instruments. In his passion for knowing the possibilities that local woods offer, this project "A cello and four stories" arises. Currently he develops his activity as a luthier in the city of La Coruña where he continues to analyze the physical-acoustic possibilities of local woods (and from outside) in the construction of this instrument.'
    },
    image: '/images/adrian.jpg',
    website: 'https://luthierpereiro.es/'
  }
];

export const additionalStories: Story[] = [
  {
    id: 'xaneco',
    name: 'Xaneco',
    wood: 'ciruelo/ciruelo',
    province: 'Lugo',
    preview: {
      gl: 'Artesá de percusión tradicional e zanfonas asentado en Outeiro de Rei (Lugo).',
      es: 'Artesano de percusión tradicional y zanfonas asentado en Outeiro de Rei (Lugo).',
      en: 'Traditional percussion and hurdy-gurdy artisan settled in Outeiro de Rei (Lugo).'
    },
    fullStory: {
      gl: 'Artesá de percusión tradicional e zanfonas asentado en Outeiro de Rei (Lugo) cunha dilatada traxectoria é unha peza fundamental da AGG e organizador da Mostra de Instrumentos de Música Tradicional no festival de Pardiñas. Colaborou neste proxecto coa madeira de Ciruelo que forma parte do batedor do instrumento; este era dunha árbore que se atopaba na casa de seu pai.',
      es: 'Artesano de percusión tradicional y zanfonas asentado en Outeiro de Rei (Lugo) con una dilatada trayectoria es una pieza fundamental de la AGG y organizador de la Mostra de Instrumentos de Música Tradicional en el festival de Pardiñas. Colaboró en este proyecto con la madera de Ciruelo que forma parte del batedor del instrumento; este era de un árbol que se encontraba en la casa de su padre.',
      en: 'Traditional percussion and hurdy-gurdy artisan settled in Outeiro de Rei (Lugo) with a long career is a fundamental piece of the AGG and organizer of the Traditional Musical Instruments Show at the Pardiñas festival. He collaborated in this project with the Ciruelo wood that forms part of the instrument\'s beater; this was from a tree that was in his father\'s house.'
    },
    image: '/images/xaneco.jpg',
    website: 'https://xaneco.gal/es/'
  },
  {
    id: 'cesar-magali',
    name: 'Cesar Arias',
    wood: 'ciprés',
    province: 'Galicia',
    preview: {
      gl: 'Luthier de instrumentos de corda pulsada antigos, asentado no Areal (Santiago de Compostela).',
      es: 'Luthier de instrumentos de cuerda pulsada antiguos, asentado en el Areal (Santiago de Compostela).',
      en: 'Luthier of ancient plucked string instruments, settled in the Areal (Santiago de Compostela).'
    },
    fullStory: {
      gl: 'Luthier de instrumentos de corda pulsada antigos, asentado no Areal (Santiago de Compostela) leva varias décadas adicado a este campo da luthería e a súa investigación. A madeira que aportou a este proxecto foi o ciprés para a tapa, unha madeira que inicialmente iba a ser para un escultor e que se atopaba nun aserradoiro preto de Pontevedra.',
      es: 'Luthier de instrumentos de cuerda pulsada antiguos, asentado en el Areal (Santiago de Compostela) lleva varias décadas dedicado a este campo de la luthería y su investigación. La madera que aportó a este proyecto fue el ciprés para la tapa, una madera que inicialmente iba a ser para un escultor y que se encontraba en un aserradero cerca de Pontevedra.',
      en: 'Luthier of ancient plucked string instruments, settled in the Areal (Santiago de Compostela) has been dedicated to this field of lutherie and its research for several decades. The wood he contributed to this project was cypress for the top, a wood that was initially going to be for a sculptor and that was found in a sawmill near Pontevedra.'
    },
    image: '/images/cesar-magali.jpg',
    website: 'https://cesarariasluthier.com/'
  },
  {
    id: 'roi-earan',
    name: 'Roi Earan',
    wood: 'cerezo/cerdeira',
    province: 'Galicia',
    preview: {
      gl: 'Luthier de instrumentos de corda frotada asentado na cidade de Pontevedra.',
      es: 'Luthier de instrumentos de cuerda frotada asentado en la ciudad de Pontevedra.',
      en: 'Luthier of bowed string instruments settled in the city of Pontevedra.'
    },
    fullStory: {
      gl: 'Luthier de instrumentos de corda frotada asentado na cidade de Pontevedra, antigo compañeiro de EMAO de Vigo. Aportou unha peza de cerdeira para o mango do instrumento.',
      es: 'Luthier de instrumentos de cuerda frotada asentado en la ciudad de Pontevedra, antiguo compañero de EMAO de Vigo. Aportó una pieza de cerezo para el mango del instrumento.',
      en: 'Luthier of bowed string instruments settled in the city of Pontevedra, former colleague from EMAO de Vigo. He contributed a cherry piece for the instrument\'s neck.'
    },
    image: '/images/roi-earan.jpg',
    website: 'https://earan.eu/'
  },
  {
    id: 'inazio',
    name: 'Inazio',
    wood: 'chopo',
    province: 'Galicia',
    preview: {
      gl: 'Carpinteiro de Vilar de Cancelada (Becerreá) adicado á elaboración de moblería.',
      es: 'Carpintero de Vilar de Cancelada (Becerreá) dedicado a la elaboración de mobiliario.',
      en: 'Carpenter from Vilar de Cancelada (Becerreá) dedicated to furniture making.'
    },
    fullStory: {
      gl: 'Carpinteiro de Vilar de Cancelada (Becerreá) adicase a elaboración de moblería en madeira nobre do país. Aportou unha peza de chopo dunha árbore talada a veira da autoestrada de Baralla.',
      es: 'Carpintero de Vilar de Cancelada (Becerreá) se dedica a la elaboración de mobiliario en madera noble del país. Aportó una pieza de chopo de un árbol talado a la vera de la autopista de Baralla.',
      en: 'Carpenter from Vilar de Cancelada (Becerreá) is dedicated to making furniture in noble wood from the country. He contributed a poplar piece from a tree felled on the side of the Baralla highway.'
    },
    image: '/images/inazio.jpg'
  }
];

export const collaborations: Collaboration[] = [
  {
    name: 'Esteban Zapata Blanco',
    role: 'Compositor',
    description: {
      gl: 'É un compositor galego nacido en Arteixo en 1992, cunha linguaxe compositiva influenciada polo folclore e a música culta. Iniciou os seus estudos no Conservatorio da Coruña en 2012, graduándose con honores en 2016. Posteriormente, tivo a oportunidade de continuar os seus estudos na HKU Utrecht Conservatorium, onde realiza o Mestrado "Music as a path of life" centrado en composición contemporánea.',
      es: 'Es un compositor gallego nacido en Arteixo en 1992, con un lenguaje compositivo influenciado por el folclore y la música culta. Inició sus estudios en el Conservatorio de La Coruña en 2012, graduándose con honores en 2016. Posteriormente, tuvo la oportunidad de continuar sus estudios en la HKU Utrecht Conservatorium, donde realiza el Máster "Music as a path of life" centrado en composición contemporánea.',
      en: 'He is a Galician composer born in Arteixo in 1992, with a compositional language influenced by folklore and classical music. He began his studies at the Conservatory of La Coruña in 2012, graduating with honors in 2016. Subsequently, he had the opportunity to continue his studies at the HKU Utrecht Conservatorium, where he is pursuing the Master\'s degree "Music as a path of life" focused on contemporary composition.'
    },
    website: 'https://www.instagram.com/este_s/?hl=es',
    image: '/images/esteban-zapata.jpg'
  },
  {
    name: 'Saúl Nogareda Candal',
    role: 'Violonchelo',
    description: {
      gl: 'Comeza no CMUS de Culleredo e continúa nos CMUS e CSM da Coruña. Complementa a súa formación na EAEM de Santiago de Compostela, na OJSG e na HKU de Utrecht. Realizou concertos con Soncello Ensemble, Lugo Camerata, Orquesta de Cámara Galega, Orquesta Gaos e Orquesta Sinfónica de Ponferrada. Formouse en música antiga na ESMAE de Porto, e forma parte do Ensemble Barroco de Ponferrada e de Concert Le Phénix. Tamén é membro do grupo de folk Sangre de muérdago.',
      es: 'Comienza en el CMUS de Culleredo y continúa en los CMUS y CSM de La Coruña. Complementa su formación en la EAEM de Santiago de Compostela, en la OJSG y en la HKU de Utrecht. Ha realizado conciertos con Soncello Ensemble, Lugo Camerata, Orquesta de Cámara Galega, Orquesta Gaos y Orquesta Sinfónica de Ponferrada. Se formó en música antigua en la ESMAE de Porto, y forma parte del Ensemble Barroco de Ponferrada y de Concert Le Phénix. También es miembro del grupo de folk Sangre de muérdago.',
      en: 'He begins at the CMUS of Culleredo and continues at the CMUS and CSM of La Coruña. He complements his training at the EAEM of Santiago de Compostela, at the OJSG and at the HKU of Utrecht. He has performed concerts with Soncello Ensemble, Lugo Camerata, Orquesta de Cámara Galega, Orquesta Gaos and Orquesta Sinfónica de Ponferrada. He trained in early music at the ESMAE of Porto, and is part of the Ensemble Barroco de Ponferrada and Concert Le Phénix. He is also a member of the folk group Sangre de muérdago.'
    },
    website: 'https://www.instagram.com/saulnogareda/?hl=es',
    image: '/images/saul.png'
  },
  {
    name: 'BELE',
    role: 'Escola de música',
    description: {
      gl: 'A Bilboko Euskal Luthería Eskola leva dende o ano 1986 formando a luthiers de corda frotada de todo o mundo. Dende o comezo amosáronse interesados polo proxecto e apoiaronno con todo o material e tempo necesario para dar uns fundamentos acústicos sobre os que vertebrar o proxecto.',
      es: 'La Bilboko Euskal Luthería Eskola lleva desde el año 1986 formando a luthiers de cuerda frotada de todo el mundo. Desde el principio se mostraron interesados por el proyecto y lo apoyaron con todo el material y tiempo necesario para dar unos fundamentos acústicos sobre los que vertebrar el proyecto.',
      en: 'The Bilboko Euskal Luthería Eskola has been training bowed string luthiers from all over the world since 1986. From the beginning they showed interest in the project and supported it with all the material and time necessary to provide acoustic foundations on which to structure the project.'
    },
    website: 'https://www.bele.es/es/',
    image: '/images/bele.jpeg'
  },
  {
    name: 'Ensaia',
    role: 'Talento Galego',
    description: {
      gl: 'Ensaia é unha plataforma que promove e apoia o talento galego en diferentes ámbitos culturais e artísticos.',
      es: 'Ensaia es una plataforma que promueve y apoya el talento gallego en diferentes ámbitos culturales y artísticos.',
      en: 'Ensaia is a platform that promotes and supports Galician talent in different cultural and artistic fields.'
    },
    image: '/images/chelo-2.jpg',
    website: 'https://ensaia.com'
  },
  {
    name: 'Nerea Pallares',
    role: 'Escritora',
    description: {
      gl: 'Nerea Pallares é unha poeta galega que colaborou no proxecto creando textos que se atopan escritos dentro do fondo do instrumento.',
      es: 'Nerea Pallares es una poeta gallega que colaboró en el proyecto creando textos que se encuentran escritos dentro del fondo del instrumento.',
      en: 'Nerea Pallares is a Galician poet who collaborated on the project by creating texts that are written inside the back of the instrument.'
    },
    image: '/images/nerea-pallares.jpg',
    website: 'https://www.instagram.com/nerea_pallares/?hl=es'
  },
  {
    name: 'Laura Calvo',
    role: 'Artista',
    description: {
      gl: 'Artista autodidacta, Laura pintábao todo cando era pequena. No 2024 dá un paso adiante e consolida Boor, unha proposta que combina a súa formación como educadora social con arte, cunha identidade propia e recoñecible. Afincada en Oza-Cesuras, Boor destaca por darlle unha segunda vida ás boias recuperadas do mar transformándoas en pezas únicas de deseño, e por crear debuxos fotorrealistas a gran escala cunha técnica singular de garabatos feitos con rotuladores.',
      es: 'Artista autodidacta, Laura pintaba todo cuando era pequeña. En 2024 da un paso adelante y consolida Boor, una propuesta que combina su formación como educadora social con arte, con una identidad propia y reconocible. Afincada en Oza-Cesuras, Boor destaca por darle una segunda vida a las boyas recuperadas del mar transformándolas en piezas únicas de diseño, y por crear dibujos fotorrealistas a gran escala con una técnica singular de garabatos hechos con rotuladores.',
      en: 'Self-taught artist, Laura painted everything when she was little. In 2024 she takes a step forward and consolidates Boor, a proposal that combines her training as a social educator with art, with her own and recognizable identity. Based in Oza-Cesuras, Boor stands out for giving a second life to buoys recovered from the sea by transforming them into unique design pieces, and for creating large-scale photorealistic drawings with a singular technique of scribbles made with markers.'
    },
    image: '/images/laura.jpg',
    website: 'https://boor.es/'
  },
  {
    name: 'Yago Fandiño',
    role: 'Tatuador',
    description: {
      gl: 'Yago Fandiño é un tatuador residente na Coruña, amante do debuxo e da caligrafía ornamental traballa sobre a pel e o papel cun estilo denominado lettering. A súa contribución neste proxecto foi a colaboración directa con Nerea Pallares no traballo de caligrafía ornamental do texto creado por Nerea; que tamén se atopa escrito dentro do fondo do instrumento.',
      es: 'Yago Fandiño es un tatuador residente en La Coruña, amante del dibujo y la caligrafía ornamental trabaja sobre la piel y el papel con un estilo denominado lettering. Su contribución en este proyecto fue la colaboración directa con Nerea Pallares en el trabajo de caligrafía ornamental del texto creado por Nerea; que también se encuentra escrito dentro del fondo del instrumento.',
      en: 'Yago Fandiño is a tattoo artist resident in La Coruña, lover of drawing and ornamental calligraphy works on skin and paper with a style called lettering. His contribution to this project was direct collaboration with Nerea Pallares in the ornamental calligraphy work of the text created by Nerea; which is also written inside the back of the instrument.'
    },
    image: '/images/yago-fandino.jpg',
    website: 'https://www.instagram.com/___f.a.n.d.i___/'
  }
];