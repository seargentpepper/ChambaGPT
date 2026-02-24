const sites = [
    {
        "id": 1,
        "name": "Rezi.ai",
        "url": "https://rezi.ai",
        "jobcat": "mentoring",
        "keywords": [
            "IA",
            "ATS Hack",
            "CV"
        ],
        "tags": [
            "Optimización"
        ],
        "desc": "SITUACIÓN: Tu CV tiene el carisma de una piedra mojada. Rezi usa IA para inyectarle esteroides y engañar a los robots de reclutamiento para que, por fin, un humano vea tu nombre.",
        "img": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 11,
        "name": "Toptal",
        "url": "https://www.toptal.com",
        "jobcat": "mentoring",
        "keywords": [
            "3%",
            "Senior",
            "Elite"
        ],
        "tags": [
            "Esnobismo"
        ],
        "desc": "SITUACIÓN: Te crees el regalo de Dios al código. Toptal te hará un examen que haría llorar a Einstein. Si pasas, cobrarás en USD como el rey que crees ser.",
        "img": "assets/cards/Toptal.jpg"
    },
    {
        "id": 18,
        "name": "LLH",
        "url": "https://www.lhh.com/es-mx/candidatos",
        "jobcat": "mentoring",
        "keywords": [
            "Inverso",
            "Match",
            "Tech"
        ],
        "tags": [
            "Reverse-Job"
        ],
        "desc": "SITUACIÓN: Cansado de mendigar. Aquí las empresas se pelean por ti como hienas sobre una presa tech. Solo si eres lo suficientemente bueno.",
        "img": "assets/cards/LLH.jpg"
    },
    {
        "id": 20,
        "name": "Talent.com",
        "url": "https://www.talent.com",
        "jobcat": "mentoring",
        "keywords": [
            "Impuestos",
            "Salario",
            "Finanzas"
        ],
        "tags": [],
        "desc": "SITUACIÓN: Te ofrecen un sueldo que suena bien hasta que el gobierno te deja para comer arroz. Calcula tu miseria antes de decir 'sí'.",
        "img": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 24,
        "name": "Arc.dev",
        "url": "https://arc.dev",
        "jobcat": "mentoring",
        "keywords": [
            "Mentores",
            "Senior",
            "Tech-Elite"
        ],
        "tags": [],
        "desc": "SITUACIÓN: Dev senior buscando un lugar donde no pregunten qué es una variable. Entrevistas brutales para salarios de seis cifras.",
        "img": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 25,
        "name": "The Muse",
        "url": "https://www.themuse.com/advice",
        "jobcat": "mentoring",
        "keywords": [
            "Cultura",
            "Coaching",
            "Career-Advice"
        ],
        "tags": [],
        "desc": "SITUACIÓN: Mira fotos de oficinas bonitas para imaginarte ahí mientras lloras en tu cubículo actual. Consejos para no arruinar tu entrevista.",
        "img": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 33,
        "name": "Behance",
        "url": "https://www.behance.net",
        "jobcat": "bolsa",
        "keywords": [
            "Portfolio",
            "Diseño",
            "Visual"
        ],
        "tags": [],
        "desc": "SITUACIÓN: Tu ego es proporcional a la resolución de tus archivos. Muestra tu trabajo y deja que las empresas se enamoren de tus píxeles.",
        "img": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 34,
        "name": "DesignHill",
        "url": "https://www.designhill.com",
        "jobcat": "bolsa",
        "keywords": [
            "Logos",
            "Contest",
            "Creative"
        ],
        "tags": [],
        "desc": "SITUACIÓN: Gladiador visual donde solo uno cobra y los demás ganan 'experiencia'. Pelea por ese logo de 50 dólares.",
        "img": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 7,
        "name": "Upwork",
        "url": "https://www.upwork.com",
        "jobcat": "bolsa",
        "keywords": [
            "Contratos",
            "Escala",
            "Bidding"
        ],
        "tags": [
            "Gig Economy"
        ],
        "desc": "SITUACIÓN: El Coliseo romano moderno. Pelea contra otros 50 freelancers por un contrato de 10 dólares. Si sobrevives, algún día pagarás la renta a tiempo.",
        "img": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 8,
        "name": "Freelancer.com",
        "url": "https://www.freelancer.com",
        "jobcat": "bolsa",
        "keywords": [
            "Subasta",
            "Rápido",
            "Battle Royale"
        ],
        "tags": [],
        "desc": "SITUACIÓN: Una subasta de dignidad. Gana el que sea más rápido, más barato y tenga menos necesidad de dormir. Ideal para los amantes de la adrenalina del bajo presupuesto.",
        "img": "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 9,
        "name": "Fiverr",
        "url": "https://www.fiverr.com",
        "jobcat": "bolsa",
        "keywords": [
            "Gigs",
            "Paquetes",
            "Micro-servicios"
        ],
        "tags": [],
        "desc": "SITUACIÓN: 'Haré un logo por 5 dólares'. Empezaste así y ahora eres un esclavo de los 'gigs'. Vende tu alma en cómodas cuotas de cinco en cinco.",
        "img": "assets/cards/fiverr.jpg"
    },
    {
        "id": 10,
        "name": "Guru",
        "url": "https://www.guru.com",
        "jobcat": "bolsa",
        "keywords": [
            "Seguro",
            "Expertos",
            "Proyectos"
        ],
        "tags": [
            "Old School"
        ],
        "desc": "SITUACIÓN: Plataforma para gente que aún usa corbata en Zoom. Proyectos serios para freelancers que no quieren interfaces que parecen videojuegos.",
        "img": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 19,
        "name": "TaskRabbit",
        "url": "https://www.taskrabbit.com",
        "jobcat": "bolsa",
        "keywords": [
            "Local",
            "Manual",
            "IKEA"
        ],
        "tags": [
            "Gig-Manual"
        ],
        "desc": "SITUACIÓN: Tu cerebro explotó por tanto Excel. Ve a armar muebles de IKEA o pasear perros de gente rica. Sudor real, dinero real.",
        "img": "assets/cards/TaskRabbit.jpg"
    },
    {
        "id": 30,
        "name": "Freelance Writing",
        "url": "https://www.freelancewriting.com",
        "jobcat": "bolsa",
        "keywords": [
            "Escribir",
            "Blogs",
            "Content"
        ],
        "tags": [],
        "desc": "SITUACIÓN: Poeta hambriento escribiendo sobre aspiradoras por 2 centavos la palabra. Al menos es escribir, ¿no?",
        "img": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 31,
        "name": "Content Writing Jobs",
        "url": "https://www.contentwritingjobs.com",
        "jobcat": "bolsa",
        "keywords": [
            "Copywriter",
            "SEO",
            "Marketing"
        ],
        "tags": [],
        "desc": "SITUACIÓN: Tu trabajo es hacer que la gente compre basura que no necesita. Mercenarios de la palabra, bienvenidos a su cuartel.",
        "img": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 3,
        "name": "Glassdoor",
        "url": "https://www.glassdoor.com",
        "jobcat": "network",
        "keywords": [
            "Chisme",
            "Salarios",
            "Realidad"
        ],
        "tags": [
            "Espionaje"
        ],
        "desc": "SITUACIÓN: ¿El 'café gratis' compensa el micromanagement nivel psicópata? Ven por el morbo de las reseñas de ex-empleados resentidos y ahorrate el trauma de tu vida.",
        "img": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 15,
        "name": "Remotive",
        "url": "https://remotive.com",
        "jobcat": "network",
        "keywords": [
            "Slack",
            "Startup",
            "Comunidad Tech"
        ],
        "tags": [],
        "desc": "SITUACIÓN: Comunidad selecta donde puedes llorar tus penas remotas en Slack mientras ves vacantes que no aparecen en otros lados.",
        "img": "assets/cards/Remotive.png"
    },
    {
        "id": 29,
        "name": "RemoteWorkHub",
        "url": "https://www.remoteworkhub.com",
        "jobcat": "network",
        "keywords": [
            "Recursos",
            "Aprende",
            "Edu-Career"
        ],
        "tags": [],
        "desc": "SITUACIÓN: Solo y confundido en tu cubículo. Aquí te enseñan a escapar y sobrevivir en la jungla del teletrabajo sin morir de soledad.",
        "img": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 35,
        "name": "LinkedIN",
        "url": "https://www.linkedin.com",
        "jobcat": "network",
        "keywords": [
            "Social",
            "Branding",
            "Coach"
        ],
        "tags": [
            "Algoritmo"
        ],
        "desc": "SITUACIÓN: Una mezcla entre un concurso de popularidad de secundaria y un culto a la positividad tóxica. Ven a leer cómo un \"coach\" de 22 años te explica por qué despertarse a las 4 a.m. a meditar te conseguirá ese puesto de becario que no paga.",
        "img": "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 47,
        "name": "Kimberly-Clark",
        "url": "https://careers.kimberly-clark.com/es-419/job-search?first=0&numberOfResults=10&ordenar=fecha%20de%20publicaci%C3%B3n%20del%20empleo&f:pa%C3%ADses=[m%C3%A9xico]",
        "jobcat": "brand",
        "keywords": [
            "Consumo",
            "Estabilidad",
            "Trayectoria"
        ],
        "tags": [
            "Corporativo"
        ],
        "desc": "SITUACIÓN: Tu carrera depende literalmente de que la gente siga yendo al baño y limpiándose la nariz. Es un negocio sucio pero alguien tiene que hacerlo. Estabilidad corporativa clásica donde lo más emocionante del día es el nuevo diseño del empaque de pañales.",
        "img": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 45,
        "name": "Mercadolibre",
        "url": "https://mercadolibre.eightfold.ai/careers?start=0&location=mexico&pid=39719906&sort_by=timestamp&filter_include_remote=1",
        "jobcat": "brand",
        "keywords": [
            "Unicornio",
            "Agilidad",
            "Crecimiento"
        ],
        "tags": [
            "Startup-Culture"
        ],
        "desc": "SITUACIÓN: El sueño de ser Silicon Valley en Latinoamérica, pero con el caos logístico de nuestras calles. Trabajarás a mil por hora en proyectos que cambian cada semana, tratando de convencer al mundo de que los envíos gratis no son magia, sino tus ojeras.",
        "img": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 46,
        "name": "Mondelez",
        "url": "https://www.mondelezinternational.com/careers/jobs/?term=&countrycode=MX",
        "jobcat": "brand",
        "keywords": [
            "Comercial",
            "Metas",
            "Corporativo"
        ],
        "tags": [
            "Global"
        ],
        "desc": "SITUACIÓN: Te pasas el día rodeado de galletas y chocolates que no puedes comer porque estás demasiado ocupado analizando por qué la gente no compra suficientes paquetes de 6 unidades. Un trabajo dulce, hasta que ves los objetivos de venta.",
        "img": "assets/cards/mondelez.jpg"
    },
    {
        "id": 41,
        "name": "Nestlé México",
        "url": "https://www.nestle.com.mx/trabajos/buscar-trabajos?keyword=&country=MX&location=&career_area=All",
        "jobcat": "brand",
        "keywords": [
            "Global",
            "Procesos",
            "Burocracia"
        ],
        "tags": [
            "Estándares"
        ],
        "desc": "SITUACIÓN: Una burocracia corporativa tan dulce que empalaga. Te sentirás parte de una familia global mientras navegas por 400 procesos de aprobación solo para cambiar el color de una diapositiva. Al menos el café en la oficina suele ser gratis.",
        "img": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 40,
        "name": "Coca-Cola FEMSA",
        "url": "https://careers.femsa.com/",
        "jobcat": "brand",
        "keywords": [
            "Logística",
            "Métrica",
            "Frenesí"
        ],
        "tags": [
            "Institucional"
        ],
        "desc": "SITUACIÓN: La religión roja. Entras aquí y tu sangre se convierte en jarabe de maíz. El ritmo es tan frenético que sentirás que estás corriendo un maratón diario solo para que la logística de la felicidad no se detenga un segundo.",
        "img": "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 42,
        "name": "PepsiCo México",
        "url": "https://www.pepsicojobs.com/main/jobs?stretchUnit=KILOMETERS&stretch=10&location=M%C3%A9xico&woe=12&regionCode=MX",
        "jobcat": "brand",
        "keywords": [
            "Retail",
            "Ventas",
            "Dinámico"
        ],
        "tags": [
            "KPIs"
        ],
        "desc": "SITUACIÓN: Un campo de batalla de consumo masivo. Prepárate para vivir en un estado constante de \"urgencia\" donde el éxito se mide en cuántas bolsas de frituras lograste meter en una tiendita de la esquina antes del mediodía.",
        "img": "assets/cards/PepsiCo México.png"
    },
    {
        "id": 43,
        "name": "DHL México",
        "url": "https://careers.dhl.com/amer/es/dhl-mexico",
        "jobcat": "brand",
        "keywords": [
            "Operaciones",
            "Presión",
            "Supply Chain"
        ],
        "tags": [
            "Métrica"
        ],
        "desc": "SITUACIÓN: Si te apasiona ver cómo el mundo se mueve mientras tú vives pegado a un reloj y a un GPS, bienvenido. Aquí la presión es tal que sentirás que si parpadeas, un paquete de Amazon llegará un segundo tarde y el universo colapsará.",
        "img": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 44,
        "name": "Grupo Bimbo",
        "url": "https://www.apli.jobs/lab/chat-plugin-gb-mex",
        "jobcat": "brand",
        "keywords": [
            "Tradición",
            "Lealtad",
            "Estabilidad"
        ],
        "tags": [
            "Institucional"
        ],
        "desc": "SITUACIÓN: El Osito te vigila. Una cultura tan arraigada que podrías terminar soñando en blanco y azul. Es la estabilidad hecha empresa, siempre y cuando no te importe que tu carrera avance al ritmo lento y seguro de una masa leudando.",
        "img": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 38,
        "name": "Halliburton",
        "url": "https://careers.halliburton.com/location/mexico-jobs/543/3996063/2",
        "jobcat": "brand",
        "keywords": [
            "Campo",
            "Rigidez",
            "Offshore"
        ],
        "tags": [
            "Rotación"
        ],
        "desc": "SITUACIÓN: Si te gusta el olor a diesel y no ver a tu familia por 14 días mientras te rostizas en el desierto o te mareas en una plataforma, este es tu lugar. Pagan bien, pero tu vida social tendrá la misma esperanza de vida que un pozo agotado.",
        "img": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 39,
        "name": "Schlumberger",
        "url": "https://careers.slb.com/job-listing#sortCriteria=%40title%20ascending&f-country-job=Mexico&cq=%40source%3D%3D%24%22ATS_Jobs_Source%20-%20Prod%22",
        "jobcat": "brand",
        "keywords": [
            "Tech-Field",
            "Jerarquía",
            "Guardias"
        ],
        "tags": [
            "Seniority"
        ],
        "desc": "SITUACIÓN: Te venden tecnología de punta y uniformes brillantes, pero prepárate para que tu jefe te llame a las 3 a.m. para decirte que hay un problema en un pozo en medio de la nada. Es como el ejército, pero sin las medallas y con más Excel.",
        "img": "assets/cards/Schlumberger.png"
    },
    {
        "id": 14,
        "name": "SimplyHired",
        "url": "https://www.simplyhired.com/",
        "jobcat": "bolsa",
        "keywords": [
            "Agregador",
            "Motor",
            "Meta-Search"
        ],
        "tags": [],
        "desc": "SITUACIÓN: No tienes tiempo de navegar por 20 sitios. Deja que este motor traiga toda la basura de la web a una pantalla para que elijas rápido.",
        "img": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 2,
        "name": "Indeed",
        "url": "https://www.indeed.com/",
        "jobcat": "bolsa",
        "keywords": [
            "Masa",
            "Volumen",
            "Suerte"
        ],
        "tags": [
            "Generalist"
        ],
        "desc": "SITUACIÓN: El Triángulo de las Bermudas de las aplicaciones. Mandas 100 CVs y recibes 0 respuestas. Ideal para sentir que 'estás buscando' mientras la realidad te ignora brutalmente.",
        "img": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 4,
        "name": "FlexJobs",
        "url": "https://www.flexjobs.com/",
        "jobcat": "bolsa",
        "keywords": [
            "Remoto",
            "Seguro",
            "Pago"
        ],
        "tags": [
            "Premium"
        ],
        "desc": "SITUACIÓN: Harto de ofertas que prometen '500 USD diarios' y resultan ser estafas piramidales. Aquí pagas por el privilegio de ver vacantes reales curadas por humanos.",
        "img": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 13,
        "name": "Hubstaff Talent",
        "url": "https://talent.hubstaff.com/",
        "jobcat": "bolsa",
        "keywords": [
            "Sin Comisión",
            "Directo",
            "Zero-Fee"
        ],
        "tags": [],
        "desc": "SITUACIÓN: Odias que Upwork muerda tu dinero. Aquí la conexión es directa y gratuita. Es el mercado libre de la explotación sin intermediarios.",
        "img": "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 17,
        "name": "Working Nomads",
        "url": "https://www.workingnomads.com/jobs",
        "jobcat": "bolsa",
        "keywords": [
            "Nómada",
            "Viajes",
            "Location-Indy"
        ],
        "tags": [],
        "desc": "SITUACIÓN: Tu hogar es cualquier lugar con Wi-Fi mayor a 50Mbps. Lista curada para los que prefieren acumular millas que metros cuadrados.",
        "img": "https://images.unsplash.com/photo-1504384308090-c89eec2adc38?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 18,
        "name": "LLH",
        "url": "https://www.lhh.com/es-mx/candidatos",
        "jobcat": "bolsa",
        "keywords": [
            "Inverso",
            "Match",
            "Tech"
        ],
        "tags": [
            "Reverse-Job"
        ],
        "desc": "SITUACIÓN: Cansado de mendigar. Aquí las empresas se pelean por ti como hienas sobre una presa tech. Solo si eres lo suficientemente bueno.",
        "img": "assets/cards/LLH.jpg"
    },
    {
        "id": 22,
        "name": "Jooble",
        "url": "https://jooble.org/",
        "jobcat": "bolsa",
        "keywords": [
            "Metabuscador",
            "Global",
            "Search-Engine"
        ],
        "tags": [],
        "desc": "SITUACIÓN: Rastrea toda la web para que no lo hagas tú. Es como el Google de la explotación laboral: eficiente y aterrador.",
        "img": "https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 36,
        "name": "OCC",
        "url": "https://www.occ.com.mx/",
        "jobcat": "bolsa",
        "keywords": [
            "Tradicional",
            "Filtros",
            "Volumen"
        ],
        "tags": [
            "Histórico"
        ],
        "desc": "SITUACIÓN: El cementerio digital de las vacantes en México. Entras buscando ser Director y sales con una oferta de \"Vendedor de Piso\" con sueldo base de hambre y bonos fantasma que solo aparecen si los planetas se alinean.",
        "img": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 37,
        "name": "Computrabajo",
        "url": "https://mx.computrabajo.com/",
        "jobcat": "bolsa",
        "keywords": [
            "Masivo",
            "Operativo",
            "Reclutamiento"
        ],
        "tags": [
            "Spam"
        ],
        "desc": "SITUACIÓN: El sótano de la desesperación. Donde las empresas publican vacantes con requisitos de la NASA pero ofrecen sueldos de 2010. Ideal para practicar el arte de aplicar a 50 puestos y que te llamen solo para venderte un seguro.",
        "img": "assets/cards/Computrabajo.jpg"
    },
    {
        "id": 48,
        "name": "Lapieza.io",
        "url": "https://lapieza.io/",
        "jobcat": "bolsa",
        "keywords": [
            "Match",
            "Algoritmo",
            "Startup"
        ],
        "tags": [
            "Filtro Tech"
        ],
        "desc": "SITUACIÓN: Intentan convencerte de que el reclutamiento puede ser \"humano\" y \"cool\" mientras te filtran con algoritmos que tienen menos sentimientos que tu ex. Es el Tinder de las vacantes: mucho swipe, mucho \"match\" con startups que tienen nombres de sonidos de pájaros, y la misma probabilidad de que te dejen en visto tras la primera cita.",
        "img": "assets/cards/Lapieza.io.jpg"
    },
    {
        "id": 50,
        "name": "Hireline",
        "url": "https://hireline.io/",
        "jobcat": "bolsa",
        "keywords": [
            "Tech",
            "Salarios",
            "México"
        ],
        "tags": [
            "Dev-Only"
        ],
        "desc": "SITUACIÓN: Te juran que por ser \"talento TI\" eres la última coca-cola del desierto, pero te piden ser Fullstack Senior en 5 lenguajes por el sueldo de un Junior. Es el termómetro perfecto para medir qué tan desfasadas están las expectativas de las empresas mexicanas con la realidad del mercado.",
        "img": "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 51,
        "name": "Get on Board",
        "url": "https://www.getonbrd.com.mx/",
        "jobcat": "bolsa",
        "keywords": [
            "Transparencia",
            "Tech",
            "Latam"
        ],
        "tags": [
            "Remoto"
        ],
        "desc": "SITUACIÓN: El lugar donde las empresas \"cool\" de Latam publican vacantes con sueldos en dólares que te hacen salivar, hasta que ves que compites contra 4,000 genios de todo el continente. Es el \"Survivor\" de los programadores: mucha transparencia, pero solo sobrevive el que tiene el stack más exótico.",
        "img": "https://images.unsplash.com/photo-1504384308090-c89eec2adc38?auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 52,
        "name": "Adecco",
        "url": "https://www.adecco.com/es-mx/aspirantes",
        "jobcat": "bolsa",
        "keywords": [
            "Reclutamiento Masivo",
            "Tradicional",
            "Agencia"
        ],
        "tags": [],
        "desc": "SITUACIÓN: Entras buscando “oportunidades” y sales con tres entrevistas para puestos operativos que no recuerdas haber aplicado. Prometen eficiencia, procesos pulidos y “talento adecuado”, pero la experiencia suele sentirse como una línea de ensamblaje donde tú eres la pieza intercambiable. Ideal si quieres volumen, rapidez y cero sorpresas emocionales.",
        "img": "assets/cards/Adecco.jpg"
    }
];

// DATA PINS (Basada en The Muse Advice)
// DATA PINS (Basada en The Muse Advice)
// DATA PINS (Basada en The Muse Advice)
const pinData = [
    { t: "IA en Postulaciones", s: "¿Qué quieren decir las empresas con 'No uses IA'? Alerta de hipocresía corporativa.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80" },
    { t: "Retiro Voluntario", s: "Buyouts: El arte de que te paguen para que te vayas antes de que te echen gratis.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80" }, // New: Business handshake/Ideal
    { t: "Balance de Vida", s: "Cómo liderar proyectos de marketing y no olvidar que tienes una vida en el proceso.", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80" },
    { t: "Networking Real", s: "Nunca comas solo: consejos para que alguien sepa tu nombre antes del despido masivo.", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80" }, // New: Group talking 
    { t: "Fuga de Cerebros", s: "Empresas en Asia que están contratando gente desesperada de este lado del charco.", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" },
    { t: "Ghosting Laboral", s: "Por qué no te llaman después de 5 entrevistas y cómo dejar de llorar por ello.", img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=600&q=80" }, // New: Laptop/Phone alone
    { t: "Salario emocional", s: "El término favorito de los tacaños. Aprende a detectarlo antes de firmar.", img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80" }
];
