// Banco de preguntas — Normativa Aeronáutica, 2do Parcial
// correcta = índice (0 = a, 1 = b, 2 = c) de la opción correcta en el orden original.
// estado: "archivo" = respuesta del material; "investigada" = completada/corregida buscando en la norma.
const PREGUNTAS = [
  {
    "id": 1,
    "tema": "RAAC Parte 45 — Marcas e identificación",
    "pregunta": "Las aeronaves de planos fijos llevarán la Marca de Nacionalidad:",
    "opciones": [
      "Sobre el intradós (superficie inferior del ala) en ambos semiplanos.",
      "Sobre el intradós en el semiplano derecho y en el extradós (superficie superior del ala) en el semiplano izquierdo.",
      "Sobre el extradós en el semiplano derecho y el intradós en el semiplano izquierdo."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 2,
    "tema": "RAAC Parte 45 — Marcas e identificación",
    "pregunta": "La identificación en una hélice (RAAC Parte 45):",
    "opciones": [
      "No se indica en la Norma un lugar o característica específica para su ubicación.",
      "Está consignado en la Norma un lugar específico para su colocación.",
      "Debe ser ubicada en una parte (superficie) no crítica."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 3,
    "tema": "RAAC Parte 45 — Marcas e identificación",
    "pregunta": "Deben identificarse con Número de Parte y Número de Serie:",
    "opciones": [
      "Todos los componentes del avión.",
      "Cualquier componente fabricado como parte de reemplazo.",
      "Los componentes críticos fabricados como parte de reemplazo."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 4,
    "tema": "RAAC Parte 45 — Marcas e identificación",
    "pregunta": "Las aeronaves experimentales construidas por aficionados llevarán una matrícula:",
    "opciones": [
      "Consistente en la letra \"X\" seguida por el Número de Orden correspondiente.",
      "Consistente en la letra \"P\" seguida por el Número de Orden correspondiente.",
      "Consistente en la letra \"X\" seguida de otras letras."
    ],
    "correcta": 0,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 5,
    "tema": "RAAC Parte 45 — Marcas e identificación",
    "pregunta": "Las aeronaves prototipos llevarán una matrícula:",
    "opciones": [
      "Consistente en la letra \"X\" seguida por el Número de Orden correspondiente.",
      "Consistente en la letra \"P\" seguida por el Número de Orden correspondiente.",
      "Consistente en la letra \"P\" seguida de otras letras."
    ],
    "correcta": 0,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 6,
    "tema": "RAAC Parte 45 — Marcas e identificación",
    "pregunta": "Las aeronaves sanitarias:",
    "opciones": [
      "Deben llevar una Cruz Roja en el extradós de la semiala izquierda, y a ambos lados del fuselaje.",
      "Deben llevar una Cruz Roja en ambos lados del fuselaje.",
      "Deben llevar una Cruz Roja en el extradós de la semiala izquierda, en el intradós de la semiala derecha y a ambos lados del fuselaje."
    ],
    "correcta": 0,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 7,
    "tema": "RAAC Parte 45 — Marcas e identificación",
    "pregunta": "Los planeadores y motoplaneadores llevarán la Marca de Nacionalidad:",
    "opciones": [
      "Sobre el intradós (superficie inferiore del ala) en ambas semialas, y sobre el extradós en el semiplano derecho.",
      "Sobre el intradós en el semiplano derecho y en el extradós en el semiplano izquierdo.",
      "Sobre el extradós en el semiplano derecho y el intradós en el semiplano izquierdo."
    ],
    "correcta": 0,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 8,
    "tema": "RAAC Parte 45 — Marcas e identificación",
    "pregunta": "En aeronaves de alas fijas en que sea imposible colocar las marcas de Matrícula y Nacionalidad en su lugar convencional, se las colocará en:",
    "opciones": [
      "El ala solamente.",
      "La deriva y el ala.",
      "El estabilizador horizontal y el ala."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 9,
    "tema": "RAAC Parte 45 — Marcas e identificación",
    "pregunta": "Los ultralivianos motorizados construidos en serie llevarán una matrícula:",
    "opciones": [
      "Consistente en la letra \"UX\" seguida por el Número de Orden correspondiente.",
      "Consistente en la letra \"UX\" seguida de otras letras.",
      "Consistente en la letra \"U\" seguida por el Número de Orden correspondiente."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 10,
    "tema": "RAAC Parte 45 — Marcas e identificación",
    "pregunta": "La Marca de Nacionalidad argentina:",
    "opciones": [
      "Está compuesta por dos letras.",
      "Está compuesta por tres letras.",
      "Está compuesta por una letra."
    ],
    "correcta": 0,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 11,
    "tema": "RAAC Parte 43 — Mantenimiento, reparaciones y alteraciones",
    "pregunta": "El fabricante puede:",
    "opciones": [
      "Aprobar para retornar al servicio cualquier aeronave de acuerdo a un Certificado Tipo en vigencia.",
      "Aprobar para retornar al servicio cualquier aeronave autorizada por la DA de acuerdo a un Certificado Tipo en vigencia.",
      "Aprobar para retornar al servicio cualquier aeronave fabricada por él de acuerdo a un Certificado Tipo en vigencia."
    ],
    "correcta": 2,
    "notas": [
      "Variante 2022: el inciso c agrega \"...siempre que sea titular de un Certificado bajo la Parte 145\". Sigue siendo la correcta."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 12,
    "tema": "RAAC Parte 43 — Mantenimiento, reparaciones y alteraciones",
    "pregunta": "En el RAAC Parte 43 están fijados los ítems que como mínimo deben realizarse en:",
    "opciones": [
      "Una inspección de 100 horas.",
      "Una inspección progresiva.",
      "Una alteración mayor de un ala, superficie de empenaje, fuselaje."
    ],
    "correcta": 0,
    "notas": [
      "Variante 2022: \"Una inspección anual o de 100 horas\"."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 13,
    "tema": "RAAC Parte 43 — Mantenimiento, reparaciones y alteraciones",
    "pregunta": "¿Hay algún sistema que analice performances de avión consignado en el RAAC Parte 43?",
    "opciones": [
      "El sistema anemométrico.",
      "El sistema Pitot.",
      "El sistema altimétrico."
    ],
    "correcta": 2,
    "notas": [
      "El RAAC 43 (Apéndice E y F) fija los ensayos del sistema altimétrico y del transponder."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 14,
    "tema": "RAAC Parte 43 — Mantenimiento, reparaciones y alteraciones",
    "pregunta": "Realizar la inspección anual es cumplir necesariamente para cualquier aeronave los ítems de:",
    "opciones": [
      "Una de 100 horas.",
      "Una de 200 horas.",
      "Ninguna de las anteriores es correcta."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": true
  },
  {
    "id": 15,
    "tema": "RAAC Parte 43 — Mantenimiento, reparaciones y alteraciones",
    "pregunta": "La inspección anual que debe hacerse a las aeronaves siguiendo la Parte 43 está estipulada en:",
    "opciones": [
      "RAAC 121.",
      "RAAC 135.",
      "RAAC 91."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 16,
    "tema": "RAAC Parte 43 — Mantenimiento, reparaciones y alteraciones",
    "pregunta": "Si una aeronave no está en condiciones de aeronavegabilidad, el Representante Técnico debe:",
    "opciones": [
      "Inmovilizar la aeronave hasta que se encuentre en condiciones de aeronavegabilidad.",
      "Colocar en los Registros de Mantenimiento dicha condición permitiendo el libre desplazamiento de la aeronave.",
      "Informar mediante el formulario de Dificultades en Servicio."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 17,
    "tema": "RAAC Parte 43 — Mantenimiento, reparaciones y alteraciones",
    "pregunta": "Personas autorizadas para aprobar el Retorno al Servicio:",
    "opciones": [
      "Un ingeniero.",
      "Un mecánico.",
      "El poseedor del Certificado de Habilitación de Centro de Mantenimiento."
    ],
    "correcta": 2,
    "notas": [
      "Variante 2022: la correcta es \"El titular de un Certificado de TAR, a través de su Representante Técnico\"; las otras opciones son a) un ingeniero aeronáutico fuera de un TAR y b) un mecánico MMA fuera de un TAR."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 18,
    "tema": "RAAC Parte 43 — Mantenimiento, reparaciones y alteraciones",
    "pregunta": "El formulario de Registro de Inspecciones, Reparaciones y Alteraciones:",
    "opciones": [
      "DNA 8310.3",
      "DNA 337",
      "DNA 103"
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 19,
    "tema": "RAAC Parte 43 — Mantenimiento, reparaciones y alteraciones",
    "pregunta": "Una reparación mayor es una de aquellas que:",
    "opciones": [
      "Está listada en el Apéndice A de la Parte 43.",
      "Está listada en el Apéndice A de la Parte 43, e incluye aumento de resistencia, refuerzos, empalmes y la fabricación de miembros estructurales primarios o sus reemplazos, y/o se realiza por medio de remachado y/o soldadura.",
      "Está listada en el Apéndice A de la Parte 43, no se realiza por medio de remachado y/o soldadura, y no incluye aumento de resistencia, refuerzos, empalmes ni la fabricación de miembros estructurales primarios o sus reemplazos."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 20,
    "tema": "RAAC Parte 65 — Personal aeronáutico",
    "pregunta": "El poseedor de solamente una Licencia de Mecánico de Mantenimiento de Aeronaves:",
    "opciones": [
      "Puede retornar al servicio una aeronave menor de 2000 kg.",
      "No puede retornar al servicio una aeronave menor de 5700 kg.",
      "Puede retornar al servicio una aeronave menor de 5700 kg."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 21,
    "tema": "RAAC Parte 65 — Personal aeronáutico",
    "pregunta": "El código ATA (definiciones de RAAC Parte 65):",
    "opciones": [
      "Estandariza los manuales de las Organizaciones de Mantenimiento.",
      "Estandariza el contenido de los capítulos de Sistemas y Componentes de las aeronaves.",
      "Estandariza el contenido de los capítulos de los Manuales de Control de Calidad."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 22,
    "tema": "RAAC Parte 65 — Personal aeronáutico",
    "pregunta": "El Certificado de Competencia de Certificador Aeronáutico:",
    "opciones": [
      "Es aplicable al Mecánico de Equipos radioeléctricos.",
      "Es aplicable al Mecánico de Mantenimiento de Aeronaves.",
      "Es aplicable (entre otros) al Técnico en Aviónica."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 23,
    "tema": "RAAC Parte 65 — Personal aeronáutico",
    "pregunta": "La Licencia de Mecánico de Mantenimiento de Aeronaves tiene:",
    "opciones": [
      "Habilitación Cat. \"A\" tras mín. 2 años, Cat. \"B\" tras mín. 2 años y Cat. \"C\" tras mín. 1 año.",
      "Habilitación Cat. \"A\" tras mín. 2 años, Cat. \"B\" tras mín. 1 año y Cat. \"C\" tras mín. 2 años.",
      "Habilitación Cat. \"A\" tras mín. 2 años, Cat. \"B\" tras mín. 1 año y Cat. \"C\" tras mín. 1 año."
    ],
    "correcta": 1,
    "notas": [
      "Variante 2022: A = 2 años de ejercicio en la Licencia MMA; B = 1 año de ejercicio de la Habilitación A; C = 2 años de ejercicio de la Habilitación B."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 24,
    "tema": "RAAC Parte 65 — Personal aeronáutico",
    "pregunta": "El Certificado de Competencia en Tareas Especiales de Mantenimiento:",
    "opciones": [
      "Es aplicable al Reparador de Globos Libres Tripulados.",
      "Es aplicable al Idóneo en Tareas Aeronáuticas.",
      "Es aplicable al Certificador Aeronáutico."
    ],
    "correcta": 0,
    "notas": [
      "Corregida según la RAAC 65 vigente: la Subparte L (Tareas Especiales de Mantenimiento) incluye al Reparador de Globos Libres Tripulados (65.221), además de soldadura, END, materiales compuestos, estructuras de planeador y aeronaves experimentales. El Certificador Aeronáutico es otra subparte (K). Ojo: en el parcial 2016 se dio por buena la c), pero en el 2022 la c) figura como mala."
    ],
    "estado": "investigada",
    "fijaUltima": false
  },
  {
    "id": 25,
    "tema": "RAAC Parte 65 — Personal aeronáutico",
    "pregunta": "El Especialista en Materiales Compuestos tiene derecho a un/a:",
    "opciones": [
      "Constancia de Idoneidad.",
      "Certificado de Competencia.",
      "Certificado de Recurrencia."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 26,
    "tema": "RAAC Parte 65 — Personal aeronáutico",
    "pregunta": "Aviónica es:",
    "opciones": [
      "Una Licencia.",
      "Un Certificado de Competencia.",
      "Una Habilitación."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 27,
    "tema": "RAAC Parte 65 — Personal aeronáutico",
    "pregunta": "La Habilitación en Aviónica se puede obtener solo si se posee:",
    "opciones": [
      "Una Licencia de Mecánico Radioeléctrico de Aeronaves (MERA).",
      "Una Licencia de Mecánico de Mantenimiento de Aeronaves (MMA).",
      "Un Certificado de Competencia para Técnico en Aviónica."
    ],
    "correcta": 0,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 28,
    "tema": "RAAC Parte 65 — Personal aeronáutico",
    "pregunta": "El RAAC Parte 65 comprende entre otros el otorgamiento de:",
    "opciones": [
      "Licencia de Mecánico de Mantenimiento de Aeronaves, Constancia de Idóneo.",
      "Habilitación de Mecánico de Mantenimiento de Aeronaves, Certificado de Competencia.",
      "Licencia de Mecánico de Mantenimiento de Aeronaves, Certificado de Representante Técnico."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 29,
    "tema": "RAAC Parte 65 — Personal aeronáutico",
    "pregunta": "El Técnico Aeronáutico que cumple tareas en la oficina técnica de un TAR y es su Representante Técnico:",
    "opciones": [
      "No debe poseer Certificado Psicofisiológico Clase III emitido según la Parte 67.",
      "Debe poseer Certificado Psicofisiológico Clase III emitido según la Parte 67.",
      "Debe poseer Certificado Psicofisiológico Clase III con limitaciones emitido según la Parte 67."
    ],
    "correcta": 0,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 30,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "¿Está definida taxativamente la cantidad de empleados de un TAR?",
    "opciones": [
      "No.",
      "Sí.",
      "Sí, en el caso de TAR con limitaciones."
    ],
    "correcta": 0,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 31,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Dentro de los privilegios de un TAR se encuentra la de:",
    "opciones": [
      "Aprobar el retorno al servicio de un avión después de realizar un mantenimiento preventivo.",
      "Aprobar el retorno al servicio de un avión después de realizar una alteración mayor.",
      "Aprobar el retorno al servicio de un avión después de realizar una reconstrucción."
    ],
    "correcta": 0,
    "notas": [
      "Variante 2022: la correcta es a) \"...después de realizar mantenimiento, mantenimiento preventivo y/o alteraciones\"."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 32,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El idóneo en Tareas Aeronáuticas:",
    "opciones": [
      "Tiene un Certificado emitido por la Autoridad Aeronáutica.",
      "Tiene una Constancia emitida por la Autoridad Aeronáutica.",
      "Tiene una Constancia emitida por el Representante Técnico."
    ],
    "correcta": 2,
    "notas": [
      "Corregida según la RAAC 145, Apéndice C: \"Las Constancias de Idóneo en Tareas Aeronáuticas serán otorgadas por el Representante Técnico\". Ojo: el parcial 2016 daba como buena la a), pero en el 2022 la a) figura como mala."
    ],
    "estado": "investigada",
    "fijaUltima": false
  },
  {
    "id": 33,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El TAR puede contratar el mantenimiento a una persona NO certificada:",
    "opciones": [
      "Sí, para algunas funciones de trabajo y acepta el control de calidad de dicha persona.",
      "No.",
      "Sí, para algunas funciones de trabajo y extiende su control de calidad sobre la persona."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 34,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Categoría de Planta de Poder Clase II es:",
    "opciones": [
      "Motores a turbinas de más de 400 HP.",
      "Motores alternativos de más de 400 HP.",
      "Motores alternativos de más de 600 HP."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 35,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Categoría de Estructura de Aeronaves Clase I es:",
    "opciones": [
      "Aeronaves de construcción compuesta certificadas bajo la Parte 25 y/o 29.",
      "Aeronaves de construcción integralmente metálica certificadas bajo la Parte 22, 23, 27 y/o 31.",
      "Aeronaves de construcción compuesta certificadas bajo la Parte 22, 23, 27 y/o 31."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 36,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "La Categoría que se otorga a un TAR que se dedica exclusivamente a procedimientos e inspección de ensayos no destructivos se define como:",
    "opciones": [
      "Especial.",
      "Restringida.",
      "Limitada."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 37,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El personal de un Taller de Reparaciones Satélite:",
    "opciones": [
      "No está permitido compartir su actividad con el TAR principal.",
      "Puede compartir su actividad con el TAR principal.",
      "Puede compartir su actividad con el TAR principal incluyendo al personal de inspección."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 38,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Un Taller de Reparación Satélite:",
    "opciones": [
      "Debe tener Habilitación.",
      "No necesita Habilitación.",
      "Utiliza la Habilitación del Taller de Reparación contratante."
    ],
    "correcta": 0,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 39,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Un TAR habilitado debe poseer:",
    "opciones": [
      "Edificios, registros, clientes, documentos de aviación.",
      "Edificios, instalaciones, equipos, materiales, personal y documentación técnica, conforme lo requiere la Parte 145.",
      "Experiencia en el rubro, solvencia económica, recursos financieros."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 40,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "La calibración del equipo de inspección:",
    "opciones": [
      "Debe ser trazable a Patrones Nacionales.",
      "Debe ser realizada a intervalos regulares.",
      "Las dos respuestas anteriores son correctas."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": true
  },
  {
    "id": 41,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "En el Taller Aeronáutico Extranjero de Reparaciones, el responsable de la supervisión o inspección final de un trabajo en aeronave con matrícula argentina:",
    "opciones": [
      "Se le acepta el idioma local.",
      "No se hace exigencia de idioma.",
      "Se le exige leer, escribir y comprender español."
    ],
    "correcta": 2,
    "notas": [
      "Variante 2022: \"...comprender e interpretar el idioma en el cual se encuentran escritos los procedimientos\"."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 42,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El Supervisor de un TAR:",
    "opciones": [
      "Tiene dependencia de la Gerencia de Control de Calidad.",
      "Tiene dependencia de Oficina Técnica.",
      "Tiene dependencia de la Gerencia de Mantenimiento."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 43,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "¿Con qué plazo máximo se debe informar a la DA de una falla, malfuncionamiento y defectos?",
    "opciones": [
      "24 hs",
      "72 hs",
      "96 hs"
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 44,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El Representante Técnico de un TAR debe:",
    "opciones": [
      "Comunicar por escrito la asunción de la función al Taller Aeronáutico de Reparación.",
      "Comunicar por escrito la asunción de la función a la Autoridad Aeronáutica.",
      "Comunicar por escrito la asunción de la función al Consejo Profesional de la Ingeniería Aeronáutica y Espacial."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 45,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Se deberán mantener actualizados los Registros de personal de:",
    "opciones": [
      "Conducción, Supervisión, Inspección.",
      "Inspección, Mecánicos.",
      "Inspección, Conducción, Supervisión, Mecánicos."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 46,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El programa de Entrenamiento del personal del TAR incluye, según la normativa, al Representante Técnico en la recepción de los mismos:",
    "opciones": [
      "No lo incluye taxativamente.",
      "Sí lo incluye taxativamente para funciones de mantenimiento.",
      "Sí lo incluye taxativamente para temas de Factores Humanos."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 47,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Un TAR que obtiene su Certificado el 11/12/2014:",
    "opciones": [
      "Deberá tener un Manual de Procedimientos y un Manual del TAR.",
      "Deberá tener un Manual de Procedimientos y un Manual de Control de Calidad.",
      "Deberá tener un Manual de Control de Calidad y un Manual de TAR."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 48,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Si el titular de un Certificado de Habilitación de un Centro de Mantenimiento realiza algún cambio de ubicación del mismo:",
    "opciones": [
      "Podrá realizarlo sin aprobación previa de la Autoridad Aeronáutica.",
      "Podrá realizarlo sin aprobación previa de la Autoridad Aeronáutica, si existe una petición formal previa del Titular.",
      "Deberá ser aprobado previamente por la Autoridad Aeronáutica."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 49,
    "tema": "RAAC Parte 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El Taller Aeronáutico que realiza mantenimiento sobre aeronaves de Explotadores Aéreos que operan bajo las RAAC 121 y 135 debe tener un SMS que sirva para:",
    "opciones": [
      "Identificar los peligros, corregirlos y neutralizarlos.",
      "Identificar los peligros sin evaluar sus consecuencias; mantener un nivel aceptable de ingresos económicos y seguridad patrimonial; tener como meta el aumento de capital.",
      "Identificar los peligros y evaluar sus consecuencias; asegurar que se apliquen correcciones necesarias para mantener un nivel aceptable de seguridad; desarrollar una vigilancia permanente y una evaluación periódica del nivel de seguridad logrado; y tener como meta mejorar el nivel global de seguridad en forma continua."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 50,
    "tema": "RAAC Partes 91, 119, 121 y 135 — Operaciones y explotadores",
    "pregunta": "En la Subparte E de la Parte 91, en particular se imponen requisitos especiales para la inspección de los siguientes sistemas y/o instrumentos:",
    "opciones": [
      "TCAS y ACAS.",
      "Altímetro y Transponder.",
      "Pitot y radar de a bordo."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 51,
    "tema": "RAAC Partes 91, 119, 121 y 135 — Operaciones y explotadores",
    "pregunta": "La Parte 91 de las RAAC vigentes contiene requisitos relacionados:",
    "opciones": [
      "Únicamente con las operaciones de vuelo de las aeronaves.",
      "Únicamente con las operaciones de mantenimiento de aeronaves y sus movimientos en los aeródromos.",
      "Con todas aquellas operaciones que resulten posibles y legales de realizar con las aeronaves y sobre las aeronaves."
    ],
    "correcta": 0,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 52,
    "tema": "RAAC Partes 91, 119, 121 y 135 — Operaciones y explotadores",
    "pregunta": "En la Subparte E de la Parte 91, como requisito para el mantenimiento de aeronaves que operen según esa Parte, sobre la misma debe practicarse:",
    "opciones": [
      "Una Inspección Anual según lo definido en la Parte 43.",
      "Una Inspección cada 100 horas según lo define el fabricante de la aeronave.",
      "Una Inspección Anual según la Parte 43 y una Inspección cada 100 horas según lo define el fabricante de la aeronave."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 53,
    "tema": "RAAC Partes 91, 119, 121 y 135 — Operaciones y explotadores",
    "pregunta": "En la Parte 91 se establece claramente que el responsable primario por la operación de la aeronave es:",
    "opciones": [
      "El piloto al mando.",
      "El propietario o explotador.",
      "El Representante Técnico."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 54,
    "tema": "RAAC Partes 91, 119, 121 y 135 — Operaciones y explotadores",
    "pregunta": "Una vez cumplidos satisfactoriamente todos los requisitos de las Partes 119 y 121 y/o 135, el solicitante puede iniciar sus operaciones de transporte aéreo regular o no regular, según:",
    "opciones": [
      "El CESA (Certificado de Explotador de Servicios Aéreos) y las Especificaciones de Operación firmadas por la Autoridad Aeronáutica.",
      "El Permiso de Vuelo firmado por la Autoridad Aeronáutica.",
      "El Permiso de Vuelo y las Especificaciones de Operación firmadas por la Autoridad Aeronáutica."
    ],
    "correcta": 0,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 55,
    "tema": "RAAC Partes 91, 119, 121 y 135 — Operaciones y explotadores",
    "pregunta": "Una vez cumplidos los requisitos contenidos en la Parte 119, el solicitante:",
    "opciones": [
      "Puede iniciar operaciones de transporte aéreo regular y/o no regular.",
      "Debe cumplir con otros requisitos para poder iniciar operaciones de transporte aéreo regular y/o no regular.",
      "Puede optar por iniciar operaciones de transporte aéreo regular y/o no regular."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 56,
    "tema": "RAAC Partes 91, 119, 121 y 135 — Operaciones y explotadores",
    "pregunta": "La autoridad aeronáutica emite el Certificado de Explotador de Servicios Aéreos y junto con éste, las Especificaciones Relativas a las Operaciones. Éstas contienen:",
    "opciones": [
      "Tipo de aeronave, matrícula, número de serie y configuración de cada aeronave autorizada, aeropuertos regulares o de alternativa, tripulantes (especificando sus funciones), tipos de operaciones autorizadas, autorizaciones y limitaciones de las rutas aéreas y áreas de operación, límites de tiempo o estándares para determinar los límites de tiempo para recorridos generales.",
      "Autorizaciones, condiciones y limitaciones relacionadas con aspectos exclusivamente operacionales.",
      "Autorizaciones, condiciones y limitaciones relacionadas exclusivamente con el mantenimiento de la aeronavegabilidad de las aeronaves del explotador."
    ],
    "correcta": 0,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 57,
    "tema": "RAAC Partes 91, 119, 121 y 135 — Operaciones y explotadores",
    "pregunta": "El personal directivo requerido para operaciones conducidas según las RAAC 121 (Parte 119):",
    "opciones": [
      "Es definido por el explotador, pero se encuentra sujeto a la aceptación de la Autoridad Aeronáutica.",
      "Es definido por el explotador y no se encuentra sujeto a la aceptación de la Autoridad Aeronáutica.",
      "Se encuentra definido en las RAAC 119 y se encuentra sujeto a la aceptación de la Autoridad Aeronáutica."
    ],
    "correcta": 2,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 58,
    "tema": "RAAC Partes 91, 119, 121 y 135 — Operaciones y explotadores",
    "pregunta": "Los Programas de Mantenimiento mencionados en las RAAC Parte 91 (91.409), Parte 135 (135.411) y Parte 121 (121.367):",
    "opciones": [
      "No precisan aprobación de parte de la Autoridad Aeronáutica.",
      "Precisan de la aprobación de la Autoridad Aeronáutica.",
      "Dependiendo del lugar de operación de la aeronave, precisan de la aprobación de la Autoridad Aeronáutica."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 59,
    "tema": "RAAC Partes 91, 119, 121 y 135 — Operaciones y explotadores",
    "pregunta": "Las operaciones regulares internas e internacionales realizadas en cumplimiento de las RAAC 121 pueden desarrollarse exclusivamente con:",
    "opciones": [
      "Aviones turborreactores; aviones turbohélices y alternativos con más de 19 asientos de pasajeros, o con peso máximo certificado de despegue superior a 5 700 kg.",
      "Excepto monomotores, cualquier tipo de avión, siempre y cuando se cumplan los requisitos de la Parte 121 o de la Parte 135, según corresponda.",
      "Aviones turbohélices y alternativos de 19 asientos de pasajeros o menos y peso máximo certificado de despegue de 5 700 kg o menos."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 60,
    "tema": "RAAC Partes 91, 119, 121 y 135 — Operaciones y explotadores",
    "pregunta": "Las operaciones aéreas regulares nacionales, internacionales y suplementarias (Parte 119):",
    "opciones": [
      "Deben ceñirse a la Parte 121 cuando las aeronaves tienen capacidad de menos de 30 pax y/o menos de 3400 kg de carga paga.",
      "Deben ceñirse a la Parte 121 cuando las aeronaves tienen más de 30 asientos de pax y/o más de 3400 kg de carga paga.",
      "Deben ceñirse a la Parte 135 cuando las aeronaves tienen menos de 30 asientos de pax y/o menos de 3400 kg de carga paga."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 61,
    "tema": "RAAC Partes 91, 119, 121 y 135 — Operaciones y explotadores",
    "pregunta": "Un Sistema de Análisis y Vigilancia continuos es requerido por las Partes 121 y 135 para:",
    "opciones": [
      "Evaluar el cumplimiento y la efectividad de su organización de mantenimiento.",
      "Evaluar el cumplimiento y la efectividad de su Programa de Inspección y de Mantenimiento.",
      "Evaluar el cumplimiento y la efectividad de los procedimientos de mantenimiento."
    ],
    "correcta": 1,
    "notas": [],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 62,
    "tema": "RAAC Partes 91, 119, 121 y 135 — Operaciones y explotadores",
    "pregunta": "Un Explotador de Servicios Aéreos certificado según la Parte 119 y que opere según la Parte 121:",
    "opciones": [
      "Solo puede realizar, o hacer que otro realice, el mantenimiento de sus aeronaves en un TAR certificado según la Parte 145.",
      "Puede contratar a otro explotador de servicios aéreos (solo certificado según la Parte 119 y que opere según las Partes 121 y/o 135) para que realice el mantenimiento de sus aeronaves.",
      "Sin estar certificado según la Parte 145 como TAR, puede realizar el mantenimiento de sus aeronaves, o bien contratar a otro explotador aéreo similar para que lo realice."
    ],
    "correcta": 2,
    "notas": [
      "Respuesta probable (no confirmada en el material). En el examen 2022 la a) fue marcada como incorrecta. La c) coincide con el criterio de la norma de origen (FAR 121.379): el explotador puede realizar su propio mantenimiento o contratarlo con otros, sin ser TAR."
    ],
    "estado": "investigada",
    "fijaUltima": false
  },
  {
    "id": 63,
    "tema": "Modelo 2010 — preguntas extra",
    "pregunta": "El tiempo mínimo que se deben guardar los registros de ejecución de tareas es de (Parte 145):",
    "opciones": [
      "Tres años.",
      "Cinco años.",
      "Siete años."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 145.219(c): el TAR \"debe conservar los registros requeridos por esta Sección por lo menos 5 años\" desde que el artículo vuelve al servicio."
    ],
    "estado": "investigada",
    "fijaUltima": false
  },
  {
    "id": 64,
    "tema": "Modelo 2010 — preguntas extra",
    "pregunta": "El certificado de taller aeronáutico Nacional (Parte 145):",
    "opciones": [
      "Tiene vigencia hasta la fecha de su vencimiento.",
      "Tiene vigencia por cuatro años.",
      "Tiene vigencia por un año."
    ],
    "correcta": 0,
    "notas": [
      "RAAC 145.55(a): los certificados de TAR nacionales \"tienen vigencia desde la fecha en que fueron emitidos hasta la fecha que determine la Autoridad Aeronáutica\"."
    ],
    "estado": "investigada",
    "fijaUltima": false
  },
  {
    "id": 65,
    "tema": "Modelo 2010 — preguntas extra",
    "pregunta": "El Certificado de Taller Aeronáutico Extranjero (Parte 145):",
    "opciones": [
      "No tiene vencimiento.",
      "Vence a los 12 meses.",
      "Vence a los 24 meses."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 145.55(b): los certificados de taller extranjero \"vencen a los 12 meses, a partir de su fecha de emisión\" (la renovación puede otorgarse por 24 meses)."
    ],
    "estado": "investigada",
    "fijaUltima": false
  },
  {
    "id": 66,
    "tema": "Modelo 2010 — preguntas extra",
    "pregunta": "Cuando se realiza una inspección anual se debe utilizar una lista de chequeo que debe contener:",
    "opciones": [
      "Ítems de inspección.",
      "Ítems de inspección y espacio para la firma de quien realizó el trabajo.",
      "Ítems de inspección, espacio para la firma de quien realizó el trabajo y otro para el sello del inspector interviniente."
    ],
    "correcta": 0,
    "notas": [
      "RAAC 43.15: quien hace una inspección anual o de 100 horas \"debe usar una lista de verificación\" que contenga los propósitos y detalles de los ítems del Apéndice D. La norma no exige firma ni sello en la lista (la firma y sello son para los registros de mantenimiento, 43.2). Respuesta investigada: verificala con la cátedra."
    ],
    "estado": "investigada",
    "fijaUltima": false
  },
  {
    "id": 67,
    "tema": "Modelo 2010 — preguntas extra",
    "pregunta": "De modo integral, el Manual General de Mantenimiento del Explotador Aerocomercial aceptado por la autoridad aeronáutica es el documento que contiene (RAAC 121 y 135):",
    "opciones": [
      "Los procedimientos del Explotador para realizar mantenimiento de las aeronaves de su flota.",
      "Las políticas y procedimientos del Explotador relacionadas con las operaciones de mantenimiento.",
      "Los acuerdos de mantenimiento que el Explotador mantiene con los TAR."
    ],
    "correcta": 1,
    "notas": [
      "Respuesta probable: \"de modo integral\" apunta a que el manual reúne las políticas y los procedimientos de mantenimiento del explotador (las otras dos opciones son solo una parte de su contenido). No confirmada en el material."
    ],
    "estado": "investigada",
    "fijaUltima": false
  },
  {
    "id": 68,
    "tema": "Modelo 2010 — preguntas extra",
    "pregunta": "El DNAR/RAAC 43 trata de:",
    "opciones": [
      "Mantenimiento, Mantenimiento Preventivo, Fabricación y Alteración.",
      "Mantenimiento, Mantenimiento Preventivo, Reconstrucción y Alteración.",
      "Mantenimiento, Mantenimiento Preventivo, Alteración y Modificación."
    ],
    "correcta": 1,
    "notas": [
      "Título de la norma: \"Parte 43 – Mantenimiento, mantenimiento preventivo, reconstrucción y alteraciones\"."
    ],
    "estado": "investigada",
    "fijaUltima": false
  }
];
