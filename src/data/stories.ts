import { Story, Collaboration } from '../types';

export const mainStories: Story[] = [
  {
    id: 'javier-merelas',
    name: 'Javier Merelas',
    wood: 'castaño/castiñeiro',
    province: 'Lugo',
    preview: 'Un artesán que traballa coa tradición do castaño galego, mantendo vivas as técnicas ancestrais.',
    fullStory: 'Javier Merelas dedica a súa vida ao traballo artesanal co castaño galego. Nas súas mans, a madeira cobra vida e forma, mantendo viva unha tradición que se remonta a xeracións. O seu taller en Lugo é un lugar onde o tempo parece deténse, onde cada golpe de formón conta unha historia diferente. A súa madeira aporta ao chelo a fortaleza e a resistencia que caracterizan ao pobo galego.',
    image: '/images/javier-merelas.jpg'
  },
  {
    id: 'pedro-elba-eco-teixos',
    name: 'Pedro e Elba - Eco dos Teixos',
    wood: 'tejo/teixo',
    province: 'Lugo',
    preview: 'Gardadores da memoria dos teixos milenarios, protexen o bosque sagrado de Galicia.',
    fullStory: 'Pedro e Elba son os gardians dos teixos milenarios de Lugo. A súa misión transcende o simple coidado das árbores; son preservadores dunha memoria ancestral, protectores dun ecosistema único. O teixo que aportan ao chelo leva consigo séculos de historia, a sabedoría dos bosques sagrados galegos e o respecto pola natureza que caracteriza a súa filosofía de vida.',
    image: '/images/pedro-elba.jpg'
  },
  {
    id: 'ivan-matos',
    name: 'Iván Matos',
    wood: 'pino de Oregón',
    province: 'Pontevedra',
    preview: 'Mestre carpinteiro que combina tradición e innovación no traballo da madeira.',
    fullStory: 'Iván Matos representa a evolución da carpintería galega. Na súa oficina en Pontevedra, o pino de Oregón toma formas inesperadas baixo as súas mans expertas. Combina técnicas tradicionais coa innovación, creando pezas que respectan o pasado mentres abrazan o futuro. A súa contribución ao chelo é unha ponte entre mundos, entre o que fomos e o que podemos chegar a ser.',
    image: '/images/ivan-matos.jpg'
  },
  {
    id: 'xaneco',
    name: 'Xaneco',
    wood: 'ciruelo/ciruelo',
    province: 'Pontevedra',
    preview: 'Un visionario que ve na madeira de ciruelo as posibilidades infinitas da creación.',
    fullStory: 'Xaneco é un artista visionario que traballa coa madeira de ciruelo na provincia de Pontevedra. Comezou a súa traxectoria na EMAO de Vigo, onde desenvolveu a súa paixón pola madeira e a creación. Para el, cada tronco é un universo de posibilidades esperando ser descuberto. A súa aproximación á madeira é case mística, escolta o que cada peza ten que dicirllle e responde con ferramentas e intuición. O ciruelo que achega ao chelo porta a doçura e a delicadeza dos froitos da terra galega.',
    image: '/images/xaneco.jpg'
  }
];

export const additionalStories: Story[] = [
  {
    id: 'cesar-magali',
    name: 'Cesar Magali',
    wood: 'ciprés',
    province: 'Galicia',
    preview: 'Coñecedor profundo da madeira de ciprés e as súas propiedades únicas.',
    fullStory: 'Cesar Magali ten unha relación especial co ciprés galego. Coñece cada anel da madeira, cada veta que conta os anos pasados. O seu traballo caracterízase pola precisión e o respecto absoluto polas propiedades naturais da madeira. O ciprés que achega proxecto ten a durabilidade e a resistencia ao tempo que simboliza a permanencia da cultura galega.',
    image: '/images/cesar-magali.jpg'
  },
  {
    id: 'roi-earan',
    name: 'Roi Earan',
    wood: 'cerezo/cerdeira',
    province: 'Galicia',
    preview: 'Especialista na madeira de cerezo, busca a harmonía perfecta entre forma e función.',
    fullStory: 'Roi Earan atopa na madeira de cerezo a expresión perfecta da harmonía. O seu traballo busca sempre o equilibrio entre a funcionalidade e a beleza, entre a tradición e a innovación. Cada peza que crea é un poema en madeira, unha melodía silente que agarda ser escoitada. O cerezo que aporta ao chelo leva a promesa da primavera eterna.',
    image: '/images/roi-earan.jpg'
  },
  {
    id: 'inazio',
    name: 'Inazio',
    wood: 'chopo',
    province: 'Galicia',
    preview: 'Artesán do chopo que encontra beleza na simplicidade e na funcionalidade.',
    fullStory: 'Inazio traballa co chopo cunha filosofía de simplicidade e funcionalidade. Para el, a beleza reside na pureza das liñas, na honestidade dos materiais. O chopo que achega ao proxecto representa a humildade e a fortaleza silenciosa, as calidades que definen o carácter galego máis auténtico.',
    image: '/images/inazio.jpg'
  }
];

export const collaborations: Collaboration[] = [
  { 
    name: 'Esteban Zapata Blanco', 
    role: 'Compositor',
    description: 'É un compositor galego nacido en Arteixo en 1992, cunha linguaxe compositiva influenciada polo folclore e a música culta. Iniciou os seus estudos no Conservatorio da Coruña en 2012, graduándose con honores en 2016. Posteriormente, tivo a oportunidade de continuar os seus estudos na HKU Utrecht Conservatorium, onde realiza o Mestrado "Music as a path of life" centrado en composición contemporánea.',
    website: 'https://www.instagram.com/este_s/?hl=es'
  },
  { 
    name: 'Saúl Nogareda Candal', 
    role: 'Violonchelo',
    description: 'Comeza no CMUS de Culleredo e continúa nos CMUS e CSM da Coruña. Complementa a súa formación na EAEM de Santiago de Compostela, na OJSG e na HKU de Utrecht. Realizou concertos con Soncello Ensemble, Lugo Camerata, Orquesta de Cámara Galega, Orquesta Gaos e Orquesta Sinfónica de Ponferrada. Formouse en música antiga na ESMAE de Porto, e forma parte do Ensemble Barroco de Ponferrada e de Concert Le Phénix. Tamén é membro do grupo de folk Sangre de muérdago.',
    website: 'https://www.instagram.com/saulnogareda/?hl=es',
    image: '/images/saul.png'
  },
  { 
    name: 'BELE', 
    role: 'Escola de música',
    description: 'A Bilboko Euskal Luthería Eskola leva dende o ano 1986 formando a luthiers de corda frotada de todo o mundo. Dende o comezo amosáronse interesados polo proxecto e apoiaronno con todo o material e tempo necesario para dar uns fundamentos acústicos sobre os que vertebrar o proxecto.',
    website: 'https://www.bele.es/es/',
    image: '/images/chelo-3.jpg'
  },
  { 
    name: 'Ensaia', 
    role: 'Talento Galego',
    image: '/images/chelo-2.jpg',
    website: 'https://ensaia.com'
  },
  { 
    name: 'Nerea Pallares', 
    role: 'Poeta',
    image: '/images/nerea-pallares.jpg'
  },
  { 
    name: 'Laura Calvo', 
    role: 'Artista',
    description: 'Artista autodidacta, Laura pintábao todo cando era pequena. No 2024 dá un paso adiante e consolida Boor, unha proposta que combina a súa formación como educadora social con arte, cunha identidade propia e recoñecible. Afincada en Oza-Cesuras, Boor destaca por darlle unha segunda vida ás boias recuperadas do mar transformándoas en pezas únicas de deseño, e por crear debuxos fotorrealistas a gran escala cunha técnica singular de garabatos feitos con rotuladores.',
    image: '/images/laura.jpg'
  },
  { 
    name: 'Yago Fandiño', 
    role: 'Comunicación',
    image: '/images/yago-fandino.jpg'
  }
];