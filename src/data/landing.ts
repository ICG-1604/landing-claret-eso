// ─────────────────────────────────────────────────────────────
// Landing específica de 1.º y 2.º de ESO en el Colegio Claret. Duplicado de
// landing-claret-web (30/09/2026) con los cambios indicados por Ignacio: lunes de
// 14:15 a 15:15 o viernes de 13:15 a 14:15, clases desde el 13 de octubre,
// octubre gratuito, CEUMUN en enero (2.º ESO) y EstuMUN en abril (1.º y 2.º ESO),
// sin SYMUN. Heredados de Claret y pendientes de revalidar: la baja libre
// avisando y la horquilla de 50-65 € por torneo.
// ─────────────────────────────────────────────────────────────

/** Formulario de inscripción (Google Forms). */
export const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScdU7jpMqMWx5fEyeITGAw_d_6dQsUIzacB1_tNk0Zpd2txuQ/viewform'

export const site = {
  title: 'MUN en las aulas · Colegio Claret · 1.º y 2.º de ESO 2026/27',
  description:
    'Debate, oratoria y negociación para alumnos de 1.º y 2.º de ESO en el Colegio Claret. Lunes o viernes, octubre gratis y después 39 € al mes, sin permanencia.',
  ogAlt: 'Alumnos del Colegio Claret debatiendo en un Modelo de Naciones Unidas',
}

export const hero = {
  pill: '1.º y 2.º de ESO · Curso 2026/27',
  claim: 'Aprende a debatir.',
  claimEm: 'Compite en MUN.',
  lead:
    'Una actividad práctica de debate, oratoria y negociación para alumnos de 1.º y 2.º de ESO. Una clase semanal en el colegio y preparación para participar en CEUMUN y EstuMUN.',
  cta: 'Reservar plaza: octubre gratis',
  ctaMicro:
    'Octubre no se cobra · Dos minutos · La reserva la hace el padre, madre o tutor legal',
  facts: [
    '1.º y 2.º de ESO',
    'Lunes 14:15–15:15 o viernes 13:15–14:15',
    'En el Colegio Claret, desde el 13 de octubre',
    'Octubre gratis; después, 39 € al mes',
  ],
}

export const confianza = [
  { value: '5 años', label: 'en el Colegio Claret', sub: 'Curso tras curso' },
  { value: '+2.000', label: 'alumnos formados', sub: 'En más de 10 colegios desde 2019' },
  { value: '2', label: 'premios a mejor delegación', sub: 'En CEUMUN y en SYMUN el curso pasado' },
  { value: '6-15', label: 'alumnos por grupo', sub: 'Las plazas de cada grupo son limitadas' },
]

export const etapas = {
  eyebrow: 'Antes de nada',
  title: '¿Es para su hijo?',
  lead:
    'Sí. Este grupo es para alumnos de 1.º y 2.º de ESO. Se elige entre dos horarios, lunes de 14:15 a 15:15 o viernes de 13:15 a 14:15, y cada curso participa en los torneos que le corresponden.',
  tituloDerecha: 'Lo que se lleva',
  llevaConsigo: [
    'Habla en público sin que le tiemble la voz.',
    'Defiende una postura que no comparte.',
    'Responde cuando le rebaten, sin bloquearse.',
    'Investiga antes de opinar.',
    'Negocia hasta sacar algo adelante.',
  ],
  cierreDerecha: 'Se nota en la mesa de casa y en la clase del día siguiente.',
}

export const mun = {
  eyebrow: 'La metodología',
  title: '¿Qué es un Modelo de Naciones Unidas?',
  lead:
    'Una simulación académica de Naciones Unidas. Cada alumno representa a un país, investiga su posición sobre un problema internacional y debate con delegados de otros centros hasta acordar una resolución.',
  destacadoStrong: 'No hace falta experiencia previa ni destacar hablando en público.',
  destacadoResto:
    'Casi ningún alumno llega sabiendo hacerlo. Para eso son las clases: se progresa practicando, en un grupo pequeño de compañeros del propio colegio, mucho antes de salir a competir.',
  pasos: [
    {
      n: '01',
      title: 'Investiga',
      text: 'Entiende el problema y qué defiende el país que le ha tocado, aunque no sea lo que él piensa.',
    },
    {
      n: '02',
      title: 'Argumenta',
      text: 'Prepara una intervención, la sostiene ante el comité y responde a quien le rebate.',
    },
    {
      n: '03',
      title: 'Negocia',
      text: 'Busca a quién le interesa lo mismo, cede en lo accesorio y aguanta en lo importante.',
    },
    {
      n: '04',
      title: 'Resuelve',
      text: 'Redacta una propuesta con su bloque y la defiende en la votación final.',
    },
  ],
}

export const eventos = {
  eyebrow: 'Los torneos',
  title: 'Dos retos para el primer ciclo',
  lead:
    'Los dos se celebran en Madrid. Nosotros gestionamos la inscripción, preparamos a los alumnos en clase y les acompañamos durante el evento.',
  lista: [
    {
      nombre: 'CEUMUN',
      fecha: 'Enero de 2027',
      desde: 'Para 2.º de ESO',
      texto: 'El primer torneo grande del curso. Lo preparamos en clase durante el primer trimestre.',
      logro: 'Mejor delegación en la edición anterior',
      destacado: true,
    },
    {
      nombre: 'EstuMUN',
      fecha: 'Abril de 2027',
      desde: 'Para 1.º y 2.º de ESO',
      texto: 'Lo organizamos nosotros: dos ediciones celebradas y unos 150 participantes.',
      logro: 'Su último secretariado lo formaron alumnos',
      destacado: false,
    },
  ],
  notaStrong: 'Participar es voluntario.',
  notaResto:
    'Los torneos no están incluidos en la mensualidad: cada uno tiene una cuota aparte de entre 50 y 65 €, y dura de tres a cuatro días con desayunos y comidas incluidos. Esa cuota no altera los 39 € del mes. Cifras de referencia del curso anterior, sujetas a la organización de cada evento.',
}

export const equipo = {
  eyebrow: 'El equipo',
  title: 'Quién da la clase',
  lead:
    'Javier Sanz, antiguo alumno del Colegio Claret y de MUN en las aulas, coordinado por el fundador de la academia.',
  personas: [
    {
      nombre: 'Javier Sanz',
      rol: 'Profesor de 1.º y 2.º de ESO en Claret',
      bio: 'Alumni del Colegio Claret y miembro de la primera promoción de MUN en las aulas en el centro. Hoy es Secretario General del Modelo de Naciones Unidas de la Universidad Politécnica de Madrid.',
      foto: 'javier-sanz.jpg',
      pendiente: false,
    },
    {
      nombre: 'Ignacio Corroto',
      rol: 'Fundador y coordinador',
      bio: 'Fundó MUN en las aulas en 2019, tras trabajar como consultor de estrategia en KPMG. Dirige el área de Inteligencia Artificial en Spiralia, donde ha formado a equipos de ING, Coca-Cola Europacific Partners y Deloitte.',
      foto: 'ignacio-corroto.jpg',
      pendiente: false,
    },
  ] as { nombre: string; rol: string; bio: string; foto: string | null; pendiente: boolean }[],
  cierre:
    'La academia arrancó en 2019 y ya tiene antiguos alumnos dando clase. Ese es el recorrido completo: se entra aprendiendo a intervenir en un comité y se puede acabar dirigiéndolo.',
}

export const practica = {
  eyebrow: 'Curso 2026/27',
  title: 'Información práctica',
  datos: [
    { label: 'Cursos', value: '1.º y 2.º de ESO' },
    { label: 'Grupos', value: 'Dos horarios a elegir' },
    { label: 'Día y hora', value: 'Lunes de 14:15 a 15:15 o viernes de 13:15 a 14:15' },
    { label: 'Calendario', value: 'Del 13 de octubre de 2026 a mayo de 2027' },
    { label: 'Lugar', value: 'Aulas del Colegio Claret' },
    { label: 'Tamaño del grupo', value: 'Entre 6 y 15 alumnos' },
    { label: 'Idioma de clase', value: 'Español' },
    { label: 'Cuota', value: '39 € al mes' },
  ],
  precioImporte: '39 €',
  precioPeriodo: 'al mes',
  precioDetalles: [
    'Octubre no se cobra.',
    'Domiciliación a final de mes, de noviembre a mayo.',
    'Sin permanencia: puede darse de baja avisando con antelación.',
  ],
}

export const prueba = {
  eyebrow: 'Octubre gratis',
  title: 'Todo octubre para conocer la actividad antes de decidir',
  lead:
    'Las clases de octubre no se cobran. Su hijo o hija asiste con normalidad, conoce al profesor y ve cómo funciona el grupo. Si al terminar el mes no quiere continuar, no se realiza ningún cobro.',
  pasos: [
    { n: '1', title: 'Reserva la plaza', text: 'Completa el formulario. Dos minutos y sin ningún pago.' },
    { n: '2', title: 'Recibe la confirmación', text: 'Le comunicamos el grupo, el día y el aula.' },
    { n: '3', title: 'Asiste en octubre', text: 'Desde el 13 de octubre, como un alumno más.' },
    { n: '4', title: 'Decide después', text: 'Si continúa, 39 € al mes desde noviembre. Si no, se da de baja y no se cobra nada.' },
  ],
  cta: 'Reservar plaza: octubre gratis',
}

export const faq = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Lo que suelen preguntarnos las familias',
  preguntas: [
    {
      q: '¿Qué harán en octubre?',
      a: 'Clases normales, con el grupo ya formado: conocerán al profesor y participarán en las dinámicas de debate, argumentación y negociación como un alumno más.',
    },
    {
      q: '¿Tengo que pagar algo para reservar?',
      a: 'No. La reserva no lleva ningún pago y las clases de octubre no se cobran. Si su hijo o hija no continúa después de octubre, no se realiza ningún cobro.',
    },
    {
      q: 'Mi hijo es tímido y le cuesta hablar en clase. ¿Le sirve?',
      a: 'Es justo el perfil con el que mejor funciona. Se empieza en un grupo de entre 6 y 15 compañeros del propio colegio, con intervenciones cortas, y el listón sube poco a poco. Salir a competir es voluntario y llega mucho después.',
    },
    {
      q: '¿Le va a quitar tiempo de estudio?',
      a: 'La clase es una hora a la semana, dentro del colegio. La preparación de los torneos se hace en clase; desde casa solo resolvemos dudas puntuales.',
    },
    {
      q: '¿Y si a mitad de curso quiere dejarlo?',
      a: 'No hay permanencia. Puede darse de baja avisando con antelación y deja de girarse el recibo.',
    },
    {
      q: '¿Es obligatorio ir a los torneos? ¿Cuánto cuestan?',
      a: 'Es voluntario. Quien quiera ir tiene plaza en los torneos de su curso. Cada uno lleva una cuota aparte de entre 50 y 65 €, para tres o cuatro días con desayunos y comidas incluidos, y no está incluida en la mensualidad. Son cifras de referencia del curso anterior.',
    },
    {
      q: '¿Qué torneo le corresponde a cada curso?',
      a: '2.º de ESO participa en CEUMUN, en enero, y en EstuMUN, en abril. 1.º de ESO participa en EstuMUN. La preparación de cada torneo se hace en clase.',
    },
    {
      q: '¿Las clases son en inglés?',
      a: 'No. Las clases son en español y no hace falta ningún nivel de inglés para apuntarse.',
    },
    {
      q: '¿Qué día tiene clase?',
      a: 'El que elija la familia: lunes de 14:15 a 15:15 o viernes de 13:15 a 14:15. Le confirmamos el grupo y el aula tras la reserva.',
    },
  ],
}

export const cierre = {
  eyebrow: '1.º y 2.º de ESO · Curso 2026/27',
  title: 'Octubre gratis. Y después deciden.',
  lead:
    'Las clases empiezan a partir del 13 de octubre y las plazas de cada grupo son limitadas. La reserva la hace el padre, madre o tutor legal y lleva dos minutos.',
  cta: 'Reservar plaza: octubre gratis',
}

export const stickyCta = 'Reservar: octubre gratis'

export const footer = {
  linea: 'MUN en las aulas · 1.º y 2.º de ESO del Colegio Claret · Curso 2026/27',
  legal: 'Aviso legal',
  privacidad: 'Política de privacidad',
}
