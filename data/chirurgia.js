// chirurgia: недели плана в порядке изучения. id дня — ключ прогресса и заметок в localStorage, не менять.
registerPlanBlock("chirurgia", [
    {
        key: "chir-1",
        subject: "chirurgia",
        title: "Хирургия I — Общая хирургия и Острый живот",
        days: [
            {
                title: "Пн: Основы хирургии и Профилактика столбняка/инфекций",
                id: "w6d1",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Podstawy chirurgii",
                popup: { what: "Общие принципы хирургии и zakażenie rany (раневая инфекция).", focus: "Схемы profilaktyki tężca (противостолбнячной профилактики) в зависимости от типа rany (раны) и статуса szczepień (прививок).", reading: "Chirurgia Noszczyk." },
                subtopics: [
                    {
                        title: "Klasyfikacja stanu fizycznego ASA (I–VI) (шкала физического состояния)",
                        what: "Классификация stanu fizycznego (физического состояния) пациента перед znieczuleniem (анестезией).",
                        where: "Chirurgia Noszczyk -> Ocena ryzyka.",
                        study: "ASA I (zdrowy — здоров), II (łagodna choroba układowa — лёгкое системное заболевание), III (ciężka choroba układowa — тяжёлое системное заболевание), IV (ciężka choroba stanowiąca stałe zagrożenie życia — постоянная угроза жизни), V (umierający — умирающий, не выживет без операции), VI (stwierdzona śmierć mózgu (констатирована смерть мозга), dawca narządów (донор органов)).",
                        focus: "Буква «E» добавляется при operacjach w trybie nagłym (экстренных операциях) (напр. ASA IIE)."
                    },
                    {
                        title: "Gojenie ran: rychłozrost vs ziarninowanie (фазы заживления ран)",
                        what: "Gojenie przez rychłozrost (первичное заживление) (per primam) и przez ziarninowanie (вторичное) (per secundam).",
                        where: "Chirurgia -> Gojenie ran.",
                        study: "Фазы: 1. Faza zapalna (воспалительная) (eksudacja); 2. Faza proliferacyjna (пролиферативная) (ziarninowanie); 3. Przebudowa (ремоделирование) (bliznowacenie).",
                        focus: "Rany zakażone i zanieczyszczone (инфицированные и загрязнённые раны) НЕ zszywa się szczelnie (не ушиваются наглухо) — ведутся открыто или накладывается szew odroczony (отсроченный шов)."
                    },
                    {
                        title: "Okołooperacyjna profilaktyka antybiotykowa (периоперационная антибиотикопрофилактика)",
                        what: "Профилактическое введение antybiotyku (антибиотика) для предотвращения ZMO — zakażenie miejsca operowanego (инфекция области хирургического вмешательства).",
                        where: "Wytyczne chirurgiczne.",
                        study: "Вводится строго за 30-60 минут ДО nacięcia skóry (разреза кожи) (обычно cefazolina (цефазолин) i.v. 1-2 g).",
                        focus: "Обычно достаточно одной дозы. Длительность profilaktyki (профилактики) не должна превышать 24 часа!"
                    },
                    {
                        title: "Profilaktyka tężca po zranieniu (профилактика столбняка после ранения)",
                        what: "Экстренная profilaktyka tężca (профилактика столбняка) после urazu (травмы): решение о введении anatoksyny (анатоксина) (szczepionka Td) и immunoglobuliny przeciwtężcowej (противостолбнячного иммуноглобулина) принимают по двум осям — тип rany (раны) и число полученных доз с датой последней.",
                        where: "PSO (Komunikat GIS) -> Szczepienia przeciw tężcowi; Szczeklik -> Choroby zakaźne -> Tężec; Noszczyk «Chirurgia» -> Zakażenia chirurgiczne -> Tężec.",
                        study: "Первое действие — opracowanie chirurgiczne rany (хирургическая обработка раны) (usunięcie martwicy, ciał obcych — удаление некроза, инородных тел); препараты её не заменяют. Rana wysokiego ryzyka (рана высокого риска) (rana zanieczyszczona, tężcogenna): загрязнение землёй, навозом, калом, слюной; rany kłute, szarpane, miażdżone, postrzałowe (колотые, рваные, размозжённые, огнестрельные раны); oparzenia (ожоги) и odmrożenia (отморожения); martwica (некроз), ciało obce (инородное тело). Остальные — чистые мелкие раны (rany czyste, drobne). Таблица решения: (1) rana czysta drobna + анамнез неизвестен или <3 доз — Td (начать или дополнить базовую схему), immunoglobulina (иммуноглобулин) не нужна; (2) rana czysta drobna + ≥3 доз — Td, только если от последней дозы прошло >10 лет, при ≤10 годах — ничего; (3) rana zanieczyszczona + анамнез неизвестен или <3 доз — Td + immunoglobulina одновременно, в разные места тела; (4) rana zanieczyszczona + ≥3 доз — Td, если от последней дозы прошло >5 лет, при ≤5 годах — ничего; immunoglobulina не нужна. Препараты: szczepionka Td (anatoksyna tężcowa + błonicza; в старых польских текстах — anatoksyna tężcowa, TT) 0,5 мл i.m.; swoista (ludzka) immunoglobulina przeciwtężcowa (TIG) 250 j.m. i.m., по ChPL до 500 j.m. при сильно загрязнённой ране или opracowaniu (обработке) позже 24 ч. Nieszczepionemu (непривитому) после первой дозы Td — завершить базовую схему из 3 доз. У тяжело immunosupresją (иммуносупрессированных) при rana zanieczyszczona TIG дают независимо от прививочного анамнеза (ACIP).",
                        focus: "Классический вопрос CEM: полностью привит (≥3 доз), последняя доза 7 лет назад, rana zanieczyszczona (грязная рана) — только Td, БЕЗ immunoglobuliny (иммуноглобулина). Immunoglobulina показана лишь при сочетании «rana zanieczyszczona + неизвестный анамнез или <3 доз». Тот же пациент с raną czystą (чистой раной) — ничего (7 лет <10). Пороги считают от последней дозы: 5 лет для rany zanieczyszczonej, 10 лет для czystej. Неизвестный анамнез приравнивают к отсутствию szczepienia (прививки). Antybiotyk (антибиотик) profilaktykę tężca не заменяет."
                    }
                ]
            },
            {
                title: "Вт: Острый живот и Аппендицит (Wyrostek robaczkowy)",
                id: "w6d2",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Ostry brzuch / Zapalenie wyrostka",
                popup: { what: "Ostre zapalenie wyrostka robaczkowego (острый аппендицит) и zapalenie otrzewnej (перитонит).", focus: "Różnicowanie objawów ostrego brzucha (дифференциация симптомов острого живота).", reading: "Chirurgia: Ostry brzuch." },
                subtopics: [
                    {
                        title: "Objawy otrzewnowe (перитонеальные симптомы)",
                        what: "Физикальные признаки podrażnienia otrzewnej (раздражения брюшины) (ostry brzuch — острый живот).",
                        where: "Chirurgia -> Ostry brzuch.",
                        study: "Objaw Blumberga (симптом Щёткина-Блюмберга), objaw Rovsinga (симптом Ровзинга) — давление на lewy dół biodrowy (левую подвздошную область) отдаёт вправо, objaw Jaworskiego (симптом Яворского).",
                        focus: "Obrona mięśniowa (мышечная защита) / brzuch deskowaty (доскообразный живот) — ключевой признак rozlanego zapalenia otrzewnej (разлитого перитонита)!"
                    },
                    {
                        title: "Skala Alvarado w ostrym zapaleniu wyrostka robaczkowego (шкала Alvarado при аппендиците)",
                        what: "Клиническая система оценки вероятности ostrego zapalenia wyrostka robaczkowego (острого аппендицита).",
                        where: "Chirurgia -> Zapalenie wyrostka.",
                        study: "Симптомы: wędrówka bólu (миграция боли) в prawy dół biodrowy (правую подвздошную область), jadłowstręt (анорексия), nudności (тошнота), tkliwość w prawym dole biodrowym (болезненность в правой подвздошной области), objaw Blumberga (симптом Блюмберга), gorączka (температура) >37.3, leukocytoza (лейкоцитоз), przesunięcie w lewo (сдвиг влево).",
                        focus: "Шкала стратифицирует вероятность, а не заменяет решение хирурга: 1–4 балла — zapalenie wyrostka (аппендицит) маловероятно, 5–6 — возможно (obserwacja, USG/TK — наблюдение, УЗИ/КТ), 7–8 — вероятно, 9–10 — очень вероятно. Максимум 10 баллов: tkliwość w prawym dole biodrowym (болезненность в правой подвздошной области) и leukocytoza (лейкоцитоз) — по 2 балла, остальные признаки — по 1."
                    },
                    {
                        title: "Rozlane zapalenie otrzewnej (разлитой перитонит)",
                        what: "Тяжёлое zapalenie otrzewnej (воспаление брюшины) из-за perforacji (перфорации) или инфицирования.",
                        where: "Chirurgia -> Zapalenie otrzewnej.",
                        study: "Клиника: brzuch deskowaty (доскообразный живот), głucha cisza w brzuchu (отсутствие кишечных шумов), niedrożność porażenna (паралитическая непроходимость), wstrząs (шок).",
                        focus: "Показание к экстренной laparotomii pośrodkowej (срединной лапаротомии) с санированием и drenażem jamy otrzewnej (дренированием брюшной полости)."
                    },
                    {
                        title: "Appendektomia laparoskopowa (лапароскопическая аппендэктомия)",
                        what: "Золотой стандарт оперативного лечения ostrego zapalenia wyrostka robaczkowego (острого аппендицита).",
                        where: "Chirurgia -> Wyrostek.",
                        study: "Преимущества: меньший болевой синдром, быстрая реабилитация, лучший косметический эффект.",
                        focus: "При атипичном (zakątniczym (ретроцекальном), miednicznym (тазовом)) расположении wyrostka robaczkowego (червеобразного отростка) клиника может имитировать kolkę nerkową (почечную колику) или патологию органов малого таза."
                    }
                ]
            },
            {
                title: "Ср: Кишечная непроходимость (Niedrożność jelit) и Грыжи",
                id: "w6d3",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Niedrożność / Przepukliny",
                popup: { what: "Niedrożność przewodu pokarmowego (непроходимость ЖКТ) и przepukliny brzuszne (грыжи брюшной стенки).", focus: "Анатомия kanału pachwinowego (пахового канала), тактика при uwięźnięciu (ущемлении).", reading: "Chirurgia: Niedrożność." },
                subtopics: [
                    {
                        title: "Niedrożność mechaniczna vs porażenna (механическая и паралитическая непроходимость)",
                        what: "Классификация niedrożności jelit (непроходимости кишечника).",
                        where: "Chirurgia -> Niedrożność.",
                        study: "Mechaniczna (механическая) (obturacyjna / z zadzierzgnięcia): ból kolkowy (схваткообразная боль), wzmożona perystaltyka (усиленная звонкая перистальтика), widoczna perystaltyka (видимая перистальтика). Porażenna (паралитическая): wzdęcie (вздутие) без схваткообразной боли, «głucha cisza» («гробовая тишина») при osłuchiwaniu (аускультации).",
                        focus: "Самая частая причина niedrożności mechanicznej jelita cienkiego (механической непроходимости тонкой кишки) — zrosty (спайки) после операций; jelita grubego (толстой кишки) — rak (рак)."
                    },
                    {
                        title: "Poziomy płynów na RTG — objaw Kloibera (чаши Клойбера)",
                        what: "Классический radiologiczny (рентгенологический) признак niedrożności jelit (непроходимости кишечника).",
                        where: "Chirurgia -> RTG brzucha.",
                        study: "RTG przeglądowe jamy brzusznej w pozycji stojącej (обзорная рентгенография брюшной полости стоя): горизонтальные poziomy płynów (уровни жидкости) с газовыми пузырями над ними (poziomy płynów i gazy).",
                        focus: "Jelito cienkie (тонкая кишка) — уровни широкие и низкие в центре; jelito grube (толстая кишка) — уровни высокие по периферии с haustracjami (гаустрами)."
                    },
                    {
                        title: "Przepuklina pachwinowa (паховые грыжи)",
                        what: "Skośna (косая) vs prosta (прямая) przepuklina pachwinowa (паховая грыжа).",
                        where: "Chirurgia -> Przepukliny.",
                        study: "Skośna: проходит через pierścień pachwinowy głęboki (глубокое паховое кольцо) и весь kanał pachwinowy (паховый канал) (часто опускается в mosznę (мошонку), wrodzona/nabyta — врождённая/приобретённая). Prosta: выходит через trójkąt Hesselbacha (треугольник Гессельбаха) (dół pachwinowy przyśrodkowy — медиальная ямка, слабость брюшной стенки).",
                        focus: "Przepuklina udowa (бедренная грыжа) чаще бывает у женщин и имеет НАИВЫСШИЙ риск uwięźnięcia (ущемления)!"
                    },
                    {
                        title: "Przepuklina uwięźnięta (ущемлённая грыжа)",
                        what: "Острое сдавливание zawartości worka przepuklinowego (содержимого грыжевого мешка) во wrotach przepukliny (воротах грыжи).",
                        where: "Chirurgia -> Uwięźnięcie.",
                        study: "Симптомы: przepuklina (грыжа) внезапно становится напряжённой, болезненной, nieodprowadzalną (невправимой), кожа над ней краснеет + objawy niedrożności (признаки непроходимости).",
                        focus: "ЭКСТРЕННАЯ ОПЕРАЦИЯ! Попытки насильственного odprowadzenia (вправления) przepukliny uwięźniętej СТРОГО ПРОТИВОПОКАЗАНЫ (риск вправления martwiczego jelita — некротизированной кишки)!"
                    },
                    {
                        title: "Przepukliny nietypowe, niedrożność żółciowa (редкие грыжи и желчнокаменная непроходимость)",
                        what: "Przepukliny (грыжи) с нестандартной клиникой (Richtera (Рихтера), Littrego (Литтре), kresy półksiężycowatej — Spiegla (Спигелиевой линии), zasłonowa (запирательная), pępkowa u dorosłych (пупочная у взрослых), pooperacyjna (послеоперационная)) и niedrożność żółciowa (непроходимость кишки желчным камнем).",
                        where: "Noszczyk «Chirurgia» -> Przepukliny brzuszne; Noszczyk «Chirurgia» -> Niedrożność jelit.",
                        study: "Przepuklina Richtera (грыжа Рихтера): ущемляется только часть стенки кишки по противобрыжеечному краю — возможны martwica (некроз) и perforacja (перфорация) без objawów niedrożności (признаков непроходимости); чаще при przepuklinach udowych (бедренных грыжах). Przepuklina Littrego (грыжа Литтре) — в мешке uchyłek Meckela (дивертикул Меккеля). Przepuklina Spiegla (грыжа Спигелиевой линии): у латерального края mięśnia prostego brzucha (прямой мышцы) ниже пупка, под rozcięgnem mięśnia skośnego zewnętrznego (апоневрозом наружной косой мышцы) — плохо пальпируется, диагноз по USG (УЗИ) или TK (КТ); риск uwięźnięcia (ущемления) высокий — операция. Przepuklina zasłonowa (запирательная грыжа): пожилые худые женщины, niedrożność jelita cienkiego (непроходимость тонкой кишки) + боль по внутренней поверхности бедра (objaw Howshipa-Romberga — симптом Хоуша-Ромберга). Przepuklina pępkowa (пупочная грыжа) у взрослого, в отличие от ребёнка, сама не закрывается — лечение операционное; факторы — otyłość (ожирение), ciąża (беременность), wodobrzusze (асцит). Przepuklina pooperacyjna (послеоперационная грыжа) (w bliźnie): после laparotomii pośrodkowej (срединной лапаротомии) ≈10–20%; факторы — zakażenie rany (инфекция раны), otyłość, palenie (курение); лечение — plastyka z użyciem siatki (пластика с сеткой) (без siatki много nawrotów — рецидивов). Niedrożność żółciowa (желчнокаменная непроходимость): крупный złóg (камень) проходит через przetokę pęcherzykowo-dwunastniczą (холецистодуоденальный свищ) и застревает чаще в końcowym odcinku jelita krętego (терминальном отделе подвздошной кишки); пожилые женщины; triada Riglera (триада Риглера) на RTG/TK — aerobilia (пневмобилия), niedrożność jelita cienkiego, ektopowy złóg (эктопический камень). Лечение — enterotomia (энтеротомия) с удалением złogu; cholecystektomię (холецистэктомию) и zamknięcie przetoki (закрытие свища) обычно откладывают.",
                        focus: "Przepuklina Richtera (грыжа Рихтера) — ловушка: uwięźnięcie (ущемление) без niedrożności (непроходимости), кишка может ulec martwicy (некротизироваться). Пожилая женщина с niedrożnością jelita cienkiego (непроходимостью тонкой кишки) и aerobilią (воздухом в желчных путях) — niedrożność żółciowa (желчнокаменная непроходимость). Przepuklina pępkowa (пупочная грыжа) у взрослого — операция; у ребёнка до 2–4 лет — наблюдение."
                    }
                ]
            },
            {
                title: "Чт: Заболевания желчных путей и хирургия OZT (Kamica żółciowa, ostre zapalenie trzustki)",
                id: "w6d4",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Drogi żółciowe",
                popup: { what: "Kamica żółciowa (желчнокаменная болезнь), её powikłania (осложнения) и хирургическая тактика при OZT — ostre zapalenie trzustki (острый панкреатит).", focus: "Показания к экстренной cholecystektomii laparoskopowej (лапароскопической холецистэктомии).", reading: "Chirurgia: Drogi żółciowe." },
                subtopics: [
                    {
                        title: "Objaw Murphy'ego (симптом Мерфи)",
                        what: "Физикальный признак ostrego zapalenia pęcherzyka żółciowego (острого холецистита).",
                        where: "Chirurgia -> Zapalenie pęcherzyka.",
                        study: "Palpacja (пальпация) w prawym podżebrzu (в правой подреберной области) на высоте глубокого вдоха вызывает резкую боль и прерывание вдоха.",
                        focus: "USG jamy brzusznej (УЗИ брюшной полости) — золотой стандарт первичной диагностики kamicy żółciowej (желчнокаменной болезни) (pogrubienie ściany (утолщение стенки) > 4мм, podwójny zarys (двойной контур))."
                    },
                    {
                        title: "Ostre zapalenie pęcherzyka żółciowego (острый холецистит)",
                        what: "Острое воспаление pęcherzyka żółciowego (желчного пузыря), обычно из-за obturacji złogiem (обструкции камнем).",
                        where: "Chirurgia -> Cholecystitis.",
                        study: "Клиника: боль w prawym podżebrzu (в правом подреберье) с иррадиацией в правую лопатку, gorączka (лихорадка), leukocytoza (лейкоцитоз), dodatni objaw Murphy'ego (положительный симптом Мерфи).",
                        focus: "Лечение выбора: cholecystektomia laparoskopowa (лапароскопическая холецистэктомия) в первые 72 часа от начала симптомов."
                    },
                    {
                        title: "Triada Charcota i pentada Reynoldsa (триада Шарко и пентада Рейнольдса)",
                        what: "Клинические критерии ostrego zapalenia dróg żółciowych (острого холангита).",
                        where: "Chirurgia -> Cholangitis.",
                        study: "Triada Charcota (триада Шарко): gorączka z dreszczami (лихорадка с ознобом) + żółtaczka mechaniczna (механическая желтуха) + ból w prawym podżebrzu (боль в правом подреберье). Pentada Reynoldsa (пентада Рейнольдса): triada + hipotensja we wstrząsie (шоковая гипотония) + zaburzenia świadomości (спутанность сознания).",
                        focus: "Ostre zapalenie dróg żółciowych (острый холангит) — экстренное состояние, требующее немедленной декомпрессии dróg żółciowych (желчных путей) (ECPW — ЭРХПГ)!"
                    },
                    {
                        title: "ECPW i sfinkterotomia endoskopowa (ЭРХПГ, эндоскопическая папиллотомия)",
                        what: "ECPW — endoskopowa cholangiopankreatografia wsteczna (эндоскопическая ретроградная холангиопанкреатография).",
                        where: "Chirurgia -> ECPW.",
                        study: "Лечебно-диагностическая процедура при kamicy przewodowej (холедохолитиазе). Позволяет рассечь zwieracz Oddiego (сфинктер Одди) и извлечь złogi (камни).",
                        focus: "Самое частое осложнение ECPW — ostre zapalenie trzustki po ECPW (панкреатит после ЭРХПГ) (OZT): в среднем 3–5%, до 10–15% в группах высокого риска (молодые женщины, подозрение на dysfunkcję zwieracza Oddiego (дисфункцию сфинктера Одди), trudna kaniulacja (трудная канюляция)). Профилактика (ESGE): diklofenak (диклофенак) или indometacyna (индометацин) 100 мг doodbytniczo (ректально) непосредственно перед процедурой всем без przeciwwskazań (противопоказаний)."
                    },
                    {
                        title: "Leczenie zabiegowe ostrego zapalenia trzustki, OZT (хирургия острого панкреатита)",
                        what: "Показания и сроки инвазивных вмешательств при OZT (остром панкреатите): ECPW (ЭРХПГ), cholecystektomia (холецистэктомия), лечение zakażonej martwicy (инфицированного некроза), torbieli rzekomych (псевдокист) и zespołu ciasnoty wewnątrzbrzusznej (абдоминального компартмент-синдрома).",
                        where: "Noszczyk «Chirurgia» -> Ostre zapalenie trzustki; wytyczne IAP/APA 2013 i WSES 2019 (ciężkie OZT); Szczeklik -> Choroby trzustki -> Ostre zapalenie trzustki.",
                        study: "Основа лечения OZT (острого панкреатита) — консервативная (płynoterapia (инфузия), analgezja (обезболивание), wczesne żywienie dojelitowe (раннее энтеральное питание)); операция в первые дни ухудшает исход. ECPW (ЭРХПГ): в первые 24 ч — только при сопутствующем zapaleniu dróg żółciowych (холангите); при стойкой obturacji przewodu żółciowego wspólnego (обструкции холедоха) — в течение 72 ч; при żółciopochodnym OZT (билиарном ОП) без zapalenia dróg żółciowych и obturacji — не показана. Cholecystektomia (холецистэктомия): при лёгком żółciopochodnym OZT — в ту же госпитализацию (при отсрочке высок риск nawrotu (рецидива)); при тяжёлом с okołotrzustkowymi zbiornikami płynu (перипанкреатическими скоплениями) — после их регресса или не раньше 6 недель. Profilaktyczne antybiotyki (профилактические антибиотики) при jałowej martwicy (стерильном некрозе) не назначают. Zakażoną martwicę (инфицированный некроз) подозревают при gazie w martwicy (газе в некрозе) на TK (КТ) или ухудшении после 7–10 суток; лечение — antybiotyk (karbapenem (карбапенем); альтернатива — chinolon (хинолон) + metronidazol (метронидазол)), затем стратегия step-up: drenaż przezskórny (чрескожный) или endoskopowy przezżołądkowy (эндоскопический трансгастральный дренаж), при неэффективности — małoinwazyjna nekrektomia (малоинвазивная некрэктомия) (endoskopowa или zaotrzewnowa (ретроперитонеальная), VARD). Вмешательство откладывают до odgraniczenia martwicy (отграничения некроза), обычно ≥4 недель от начала болезни. Zbiorniki (скопления) по klasyfikacji z Atlanty (по Атланте) 2012: <4 недель — ostry okołotrzustkowy zbiornik płynu (острое перипанкреатическое скопление жидкости) или ostry zbiornik martwiczy (острое некротическое скопление); >4 недель — torbiel rzekoma (псевдокиста) или odgraniczona martwica (отграниченный некроз, WON). Bezobjawową torbiel rzekomą (бессимптомную псевдокисту) не дренируют независимо от размера; objawową (симптомную) — предпочтительно endoskopowo (cystogastrostomia — цистогастростомия). Zespół ciasnoty wewnątrzbrzusznej (абдоминальный компартмент-синдром) (ciśnienie w pęcherzu moczowym (давление в мочевом пузыре) >20 mm Hg + новая niewydolność narządowa (органная недостаточность)) — декомпрессия.",
                        focus: "Неверные ответы CEM: ранняя otwarta nekrektomia (открытая некрэктомия); profilaktyczny karbapenem (профилактический карбапенем) при jałowej martwicy (стерильном некрозе); ECPW (ЭРХПГ) всем с żółciopochodnym OZT (билиарным ОП) (правильно — только при zapaleniu dróg żółciowych (холангите) или obturacji (обструкции)); выписка после лёгкого żółciopochodnego OZT без cholecystektomii (холецистэктомии). Старое правило «torbiel rzekoma (псевдокиста) >6 см и >6 недель — дренировать» больше не действует, но встречается в вопросах прошлых лет."
                    }
                ]
            },
            {
                title: "Пт: Язвенная болезнь в хирургии и кровотечения из ЖКТ (Choroba wrzodowa, krwawienia z przewodu pokarmowego)",
                id: "w6d5",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Krwawienia z przewodu pokarmowego",
                popup: { what: "Perforacja (перфорация) и leczenie chirurgiczne choroby wrzodowej (хирургия язвенной болезни), krwawienia z przewodu pokarmowego (кровотечения из ЖКТ).", focus: "Экстренная endoskopia (эндоскопия) (≤24 ч), stabilizacja hemodynamiczna (стабилизация гемодинамики), skala Glasgow-Blatchford (шкала Глазго-Блэтчфорд).", reading: "Chirurgia: Krwawienia." },
                subtopics: [
                    {
                        title: "Sierp powietrza pod przeponą (симптом «серпа воздуха» под диафрагмой)",
                        what: "Radiologiczny (рентгенологический) признак perforacji narządu jamistego (перфорации полого органа) (przedziurawienie).",
                        where: "Chirurgia -> Perforacja.",
                        study: "RTG przeglądowe jamy brzusznej na stojąco (обзорный снимок брюшной полости стоя): wolny gaz (свободный газ) под куполом przepony (диафрагмы) (sierp powietrza pod przeponą).",
                        focus: "Внезапный ból sztyletowaty («кинжальная» боль) в nadbrzuszu (эпигастрии) — классическое начало perforacji wrzodu (перфорации язвы)."
                    },
                    {
                        title: "Krwawienie z górnego vs dolnego odcinka przewodu pokarmowego (верхнее и нижнее кровотечение ЖКТ)",
                        what: "Классификация кровотечений по отношению к więzadłu Treitza (связке Трейтца).",
                        where: "Chirurgia -> Krwawienia z PP.",
                        study: "Górne (верхнее) (выше więzadła Treitza): krwawe wymioty (кровавая рвота) или fusowate wymioty (рвота «кофейной гущей»), smolisty stolec (дёгтеобразный стул). Dolne (нижнее): świeża krew w stolcu (свежая кровь в кале) (hematochezja). Przetoczenie krwi (трансфузия) при Hb <7 г/дл (<8 г/дл при ChNS — choroba niedokrwienna serca (ИБС)), IPP (ИПП) i.v., endoskopia (эндоскопия) в первые 24 ч.",
                        focus: "Самая частая причина krwawienia z górnego odcinka (верхнего кровотечения) — choroba wrzodowa (язвенная болезнь); dolnego (нижнего) — uchyłki (дивертикулы) и guzki krwawnicze (геморрой)."
                    },
                    {
                        title: "Klasyfikacja Forresta (эндоскопическая классификация Forrest)",
                        what: "Endoskopowa (эндоскопическая) оценка активности krwawienia z wrzodu (кровотечения из язвы).",
                        where: "Chirurgia -> Klasyfikacja Forresta.",
                        study: "Forrest IA (wypływ tętniczy — струйное) / IB (sączenie — подтекающее); Forrest IIA (widoczne naczynie — виден сосуд) / IIB (przylegający skrzep — тромб-клише) / IIC (płaskie przebarwienie — пигмент); Forrest III (czyste dno — чистое дно).",
                        focus: "Hemostaza endoskopowa (эндоскопический гемостаз) обязательна при Forrest IA, IB, IIA; при IIB — попытка удаления skrzepu (сгустка) и лечение подлежащего сосуда. Iniekcja adrenaliny (инъекция адреналина) — только в комбинации со вторым методом (klipsy (клипсы), koagulacja (коагуляция))."
                    },
                    {
                        title: "Sonda Sengstakena-Blakemore'a (зонд Сенгстакена-Блэкмора)",
                        what: "Tamponada balonowa (баллонная тампонада) при krwawieniu z żylaków przełyku (кровотечении из варикозных вен пищевода).",
                        where: "Chirurgia -> Żylaki przełyku.",
                        study: "Механическое сдавливание кровоточащих żylaków (вен) баллоном. Временная мера (не более 24 часов) при неэффективности endoskopii (эндоскопии).",
                        focus: "Krwawienie z żylaków (кровотечение из варикозных вен): terlipresyna (терлипрессин) (или oktreotyd/somatostatyna — октреотид/соматостатин) i.v. сразу, профилактика zakażeń (инфекций) ceftriaksonem (цефтриаксоном), endoskopowe opaskowanie żylaków (эндоскопическое лигирование) в течение 12 ч."
                    },
                    {
                        title: "Leczenie chirurgiczne choroby wrzodowej, zespoły po resekcji żołądka (язвенная болезнь в хирургии)",
                        what: "Показания к операции при chorobie wrzodowej (язвенной болезни), zeszycie perforacji (ушивание перфорации), zwężenie odźwiernika (стеноз привратника), wrzody stresowe (стрессовые язвы) и поздние осложнения resekcji żołądka (резекции желудка).",
                        where: "Noszczyk «Chirurgia» -> Choroba wrzodowa żołądka i dwunastnicy -> Leczenie chirurgiczne; LEK w pigułce -> Chirurgia -> Choroba wrzodowa.",
                        study: "Плановые операции при niepowikłanym wrzodzie (неосложнённой язве) почти не выполняют: основа — eradykacja H. pylori (эрадикация) и IPP (ИПП). Показания к операции: perforacja (перфорация); krwawienie (кровотечение) при неудаче повторной hemostazy endoskopowej (эндоскопического гемостаза) и embolizacji (эмболизации); zwężenie odźwiernika (стеноз привратника), не поддающееся endoskopowemu rozszerzaniu balonem (эндоскопической баллонной дилатации); подозрение на raka (рак) (niegojący się wrzód żołądka (незаживающая язва желудка) — повторная gastroskopia (гастроскопия) с biopsjami (биопсиями)). Perforacja: laparoskopowe или otwarte zeszycie (ушивание) с пластикой лоскутом сальника (łata z sieci, по Грэхему), płukanie jamy otrzewnej (промывание брюшной полости), затем IPP и eradykacja; края wrzodu żołądka (язвы желудка) при ушивании biopsjuje się (биопсируют). Консервативное ведение (metoda Taylora (метод Тейлора): zgłębnik (зонд), IPP, antybiotyki (антибиотики)) — только у отобранных стабильных пациентов с perforacją krytą (прикрытой перфорацией) без zapalenia otrzewnej (перитонита). Zwężenie odźwiernika (стеноз привратника): wymioty (рвота) пищей, съеденной накануне, chlupotanie (шум плеска) натощак, hipochloremiczna hipokaliemiczna zasadowica metaboliczna (гипохлоремический гипокалиемический метаболический алкалоз) с paradoksalną acydurią (парадоксальной ацидурией); лечение — возмещение воды, NaCl и KCl, odbarczenie zgłębnikiem (декомпрессия зондом), затем rozszerzanie (дилатация) или операция. Wrzody stresowe (стрессовые язвы): wrzód Curlinga (язва Курлинга) — при обширных oparzeniach (ожогах), wrzód Cushinga (язва Кушинга) — при urazie czaszkowo-mózgowym (ЧМТ) и wzmożonym ciśnieniu śródczaszkowym (повышенном внутричерепном давлении); профилактика у пациентов OIT (ОИТ) с факторами риска — IPP. Zespoły po resekcji żołądka (постгастрорезекционные синдромы): wczesny zespół poposiłkowy (ранний демпинг) (10–30 мин после еды: гиперосмолярное содержимое в jelicie czczym (тощей кишке) — kołatanie serca (сердцебиение), potliwość (потливость), osłabienie (слабость), biegunka (диарея)); późny zespół poposiłkowy (поздний демпинг) (1–3 ч после еды: hipoglikemia reaktywna (реактивная гипогликемия)); лечение — частое дробное питание, ограничение простых углеводов, жидкость отдельно от еды, при неэффективности oktreotyd (октреотид). Zespół pętli doprowadzającej (синдром приводящей петли) (после resekcji sposobem Billroth II (резекции по Бильрот II)): боль после еды, стихающая после wymiotów żółcią (рвоты желчью) без пищи. Поздно: niedobór witaminy B12 (дефицит) и żelaza (железа), osteoporoza (остеопороз), rak kikuta żołądka (рак культи желудка) через 15–20 лет.",
                        focus: "Perforacja wrzodu dwunastnicy (перфорация язвы ДПК) — zeszycie (ушивание) с łatą z sieci (пластикой сальником), а не resekcja żołądka (резекция желудка); wrzód żołądka (язву желудка) на операции всегда biopsjuje się (биопсируют). Wymioty żółcią (рвота желчью) без пищи после Billroth II — zespół pętli doprowadzającej (синдром приводящей петли). Симптомы через 1–3 ч после еды с hipoglikemią (гипогликемией) — późny (поздний), а не wczesny (ранний) zespół poposiłkowy (демпинг). Oparzenie (ожог) — wrzód Curlinga (язва Курлинга), uraz czaszkowo-mózgowy (ЧМТ) — wrzód Cushinga (язва Кушинга)."
                    }
                ]
            },
            {
                title: "Сб: Тестирование по Хирургии I",
                id: "w6d6",
                time: "1.5 ч",
                lepolekPath: "Testy -> Chirurgia I (40 pytań CEM)",
                popup: { what: "Проверка базовых хирургических тем.", focus: "Objawy ostrego brzucha (симптомы острого живота).", reading: "Заметки." },
                subtopics: [
                    {
                        title: "Rozwiązanie 40 pytań CEM (решение вопросов CEM)",
                        what: "Контрольный тест по общим хирургическим темам.",
                        where: "Lepolek.",
                        study: "Проверка знаний по ostry brzuch (острому животу), perforacje (перфорациям), przepukliny (грыжам) и drogi żółciowe (желчным путям).",
                        focus: "Особое внимание на хирургическую тактику (operacja w trybie nagłym (экстренная операция) vs planowa (плановая))."
                    },
                    {
                        title: "Analiza objawów otrzewnowych (разбор перитонеальных симптомов)",
                        what: "Повторение дифференциальной диагностики objawów Rovsinga (Ровзинга), Blumberga (Щёткина-Блюмберга) и Murphy'ego (Мерфи).",
                        where: "Личные заметки.",
                        study: "Сопоставление objawów (симптомов) с пораженным органом.",
                        focus: "Исключение ошибочных трактовок физикальных названий в тестах."
                    },
                    {
                        title: "Profilaktyka tężca — utrwalenie schematu (закрепление схем столбняка)",
                        what: "Повторение таблицы экстренной profilaktyki tężca (противостолбнячной профилактики): тип rany (раны) × число доз и срок от последней.",
                        where: "Конспект w6d1; PSO (Komunikat GIS) -> Szczepienia przeciw tężcowi.",
                        study: "Воспроизвести по памяти четыре клетки: rana czysta drobna (чистая мелкая рана) + <3 доз или неизвестно — Td; czysta + ≥3 доз — Td, если от последней дозы >10 лет; rana zanieczyszczona (загрязнённая) + <3 доз или неизвестно — Td + swoista immunoglobulina przeciwtężcowa (TIG, 250 j.m.) в разные места; zanieczyszczona + ≥3 доз — Td, если от последней дозы >5 лет, без TIG.",
                        focus: "TIG — только при сочетании «rana zanieczyszczona (загрязнённая рана) + неизвестный анамнез или <3 доз». Пороги 5 лет (zanieczyszczona) и 10 лет (czysta — чистая) считают от последней дозы. Привит полностью, последняя доза 7 лет назад, грязная рана — Td без immunoglobuliny (иммуноглобулина)."
                    }
                ]
            }
        ]
    },
    {
        key: "chir-2",
        subject: "chirurgia",
        title: "Хирургия II — Онкохирургия & Проктология",
        days: [
            {
                title: "Пн: Колоректальный рак (Rak jelita grubego)",
                id: "w7d1",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Rak jelita grubego",
                popup: { what: "Rak okrężnicy i odbytnicy (рак ободочной и прямой кишки).", focus: "Całkowite wycięcie mezorektum (тотальная мезоректумэктомия) (TME), marker nowotworowy CEA (онкомаркер).", reading: "Chirurgia onkologiczna." },
                subtopics: [
                    {
                        title: "Kolonoskopia przesiewowa (скрининговая колоноскопия)",
                        what: "Национальная program badań przesiewowych (программа раннего выявления) raka jelita grubego (рака толстой кишки) w Polsce.",
                        where: "Programy profilaktyczne w Polsce.",
                        study: "Program kolonoskopii przesiewowej (программа скрининговой колоноскопии): люди 50–65 лет, с 40 лет — при raku jelita grubego (раке толстой кишки) у родственника 1-й степени (сверить актуальную версию программы, возможен переход на тест FIT).",
                        focus: "Позволяет не только найти рак, но и удалить przednowotworowe polipy gruczolakowe (предраковые аденоматозные полипы) (polipektomia — полипэктомия)."
                    },
                    {
                        title: "Objawy: prawa vs lewa połowa okrężnicy (симптомы правой и левой половины)",
                        what: "Клинические различия raka okrężnicy (рака ободочной кишки) в зависимости от локализации.",
                        where: "Chirurgia onkologiczna -> Rak jelita grubego.",
                        study: "Prawa połowa (правая половина) (kątnica, okrężnica wstępująca — слепая, восходящая): utajone krwawienie (скрытое кровотечение), niedokrwistość z niedoboru żelaza (железодефицитная анемия), wyczuwalny guz (пальпируемая опухоль). Lewa połowa i esica (левая половина и сигма): zmiana rytmu i kształtu wypróżnień (изменение ритма и формы стула) («ołówkowaty» stolec — «карандашный» стул), zaparcia (запоры), niedrożność (непроходимость). Rak odbytnicy (рак прямой кишки): krew w stolcu (кровь в стуле), bolesne parcie na stolec (тенезмы).",
                        focus: "Niedokrwistość z niedoboru żelaza (анемия с дефицитом железа) у пожилого мужчины = rak prawej połowy okrężnicy (рак правой половины толстой кишки), пока не доказано обратное!"
                    },
                    {
                        title: "Klasyfikacja TNM i marker CEA (TNM и онкомаркер CEA)",
                        what: "Стадирование и мониторинг raka jelita grubego (колоректального рака).",
                        where: "Chirurgia onkologiczna.",
                        study: "CEA — antygen karcynoembrionalny (раково-эмбриональный антиген) НЕ используется для первичной диагностики, а служит для контроля wznowy (рецидивов) после операции!",
                        focus: "Chemioterapia adiuwantowa (адъювантная химиотерапия) raka okrężnicy (рака ободочной кишки) — стадия III (N+) и II с факторами высокого риска. Rak odbytnicy (рак прямой кишки) II–III стадии — radioterapia/radiochemioterapia przedoperacyjna (предоперационная лучевая/радиохимиотерапия), затем TME."
                    },
                    {
                        title: "Operacja Hartmanna (операция Гартмана)",
                        what: "Экстренная операция при perforacji (перфорации) или niedrożności (непроходимости) левых отделов кишки.",
                        where: "Chirurgia -> Operacja Hartmanna.",
                        study: "Resekcja (резекция) поражённого участка кишки + zamknięcie kikuta odbytnicy (ушивание слепого конца прямой кишки) + wyłonienie kolostomii jednolufowej (выведение одноствольной колостомы) на переднюю брюшную стенку.",
                        focus: "Выполняется в условиях zapalenia otrzewnej (перитонита), когда опасное наложение pierwotnego zespolenia (первичного анастомоза) грозит его nieszczelnością (несостоятельностью)!"
                    }
                ]
            },
            {
                title: "Вт: Рак желудка и Рак поджелудочной железы",
                id: "w7d2",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Nowotwory żołądka i trzustki",
                popup: { what: "Gruczolakorak żołądka i trzustki (аденокарцинома желудка и поджелудочной железы).", focus: "Bezbolesna żółtaczka mechaniczna (безболезненная механическая желтуха) как симптом raka głowy trzustki (рака головки поджелудочной железы).", reading: "Chirurgia onkologiczna." },
                subtopics: [
                    {
                        title: "Węzeł Virchowa i guz Krukenberga (узел Вирхова и метастаз Крукенберга)",
                        what: "Специфические пути przerzutowania (метастазирования) raka żołądka (рака желудка).",
                        where: "Chirurgia onkologiczna -> Rak żołądka.",
                        study: "Węzeł Virchowa (узел Вирхова): przerzut (метастаз) do lewego węzła nadobojczykowego (в левый надключичный лимфоузел). Guz Krukenberga (опухоль Крукенберга): przerzut raka żołądka do jajnika (метастаз рака желудка в яичник).",
                        focus: "Węzeł Troisiera / Virchowa (узел Труазье / Вирхова) указывает на przerzuty odległe (отдалённое метастазирование) (Стадия IV)."
                    },
                    {
                        title: "Objaw Courvoisiera (симптом Курвуазье)",
                        what: "Классический признак raka głowy trzustki (рака головки поджелудочной железы).",
                        where: "Chirurgia -> Rak trzustki.",
                        study: "Powiększony, niebolesny, wyczuwalny pęcherzyk żółciowy (увеличенный безболезненный пальпируемый желчный пузырь) у пациента с żółtaczką mechaniczną (механической желтухой).",
                        focus: "Marker nowotworowy (онкомаркер) raka trzustki (рака поджелудочной железы) — CA 19-9."
                    },
                    {
                        title: "Radykalna resekcja żołądka z limfadenektomią D2 (радикальная резекция желудка)",
                        what: "Хирургический стандарт лечения raka żołądka (рака желудка).",
                        where: "Chirurgia onkologiczna.",
                        study: "Gastrektomia całkowita (тотальная гастрэктомия) или resekcja subtotalna (субтотальная резекция) + limfadenektomia D2 (удаление лимфоузлов 1 и 2 порядка).",
                        focus: "Rekonstrukcja przewodu pokarmowego (реконструкция ЖКТ) по Ру (Roux-en-Y) для предотвращения refluksu żółci (рефлюкса желчи)."
                    },
                    {
                        title: "Pankreatoduodenektomia — operacja Whipple'a (операция Уиппла)",
                        what: "Радикальное хирургическое вмешательство при raku głowy trzustki (раке головки поджелудочной железы).",
                        where: "Chirurgia -> Operacja Whipple'a.",
                        study: "Удаление głowy trzustki (головки поджелудочной железы), dwunastnicy (12-перстной кишки), части jelita czczego (тощей кишки), pęcherzyka żółciowego (желчного пузыря), przewodu żółciowego wspólnego (холедоха) и дистальной части żołądka (желудка).",
                        focus: "Крайне сложная операция с высокой частотой послеоперационных осложнений (przetoka trzustkowa — панкреатический свищ)."
                    }
                ]
            },
            {
                title: "Ср: Хирургия молочной железы (Rak piersi)",
                id: "w7d3",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Rak piersi",
                popup: { what: "Łagodne i złośliwe guzy piersi (доброкачественные и злокачественные опухоли груди).", focus: "Стадирование, status receptorowy (рецепторный статус) (ER, PR, HER2).", reading: "Chirurgia: Rak piersi." },
                subtopics: [
                    {
                        title: "Mammografia przesiewowa (MMG) (скрининговая маммография)",
                        what: "Program badań przesiewowych raka piersi (программа раннего скрининга рака молочной железы) w Polsce.",
                        where: "Programy profilaktyczne.",
                        study: "Бесплатная mammografia (маммография) каждые 2 года для женщин в возрасте 45–74 лет.",
                        focus: "Skala BIRADS (шкала BIRADS) (0-6) по результатам MMG: BIRADS 4 и 5 требуют обязательной biopsji gruboigłowej (толстоигольной биопсии)."
                    },
                    {
                        title: "Biopsja węzła wartowniczego, SLNB (биопсия сигнального лимфоузла)",
                        what: "Оценка поражения węzłów chłonnych pachowych (подмышечных лимфоузлов) без их полного удаления.",
                        where: "Chirurgia -> SLNB.",
                        study: "Введение barwnika/radioznacznika (красителя/радиофармпрепарата) -> поиск первого лимфоузла на пути оттока (węzeł wartowniczy — сигнальный узел). Если SLN (-) -> limfadenektomia pachowa (подмышечная лимфаденэктомия) НЕ нужна! При 1–2 позитивных SLN у пациентки после BCT с napromienianiem całej piersi (облучением всей железы) (cT1–T2, cN0, без leczenia neoadiuwantowego (неоадъювантной терапии)) limfadenektomia pachowa тоже не обязательна (ACOSOG Z0011).",
                        focus: "Позволяет избежать тяжёлого obrzęku limfatycznego (лимфатического отёка) руки."
                    },
                    {
                        title: "Leczenie oszczędzające, BCT (органосохраняющие операции)",
                        what: "Leczenie oszczędzające (органосохраняющее лечение, BCT): wycięcie guza z marginesem (иссечение опухоли с краем здоровых тканей), kwadrantektomia (квадрантэктомия) + radioterapia (облучение).",
                        where: "Chirurgia onkologiczna -> BCT.",
                        study: "Удаление guza (опухоли) z marginesem zdrowych tkanek (с краем здоровых тканей) + обязательная последующая radioterapia (лучевая терапия) на оставшуюся часть железы.",
                        focus: "BCT + radioterapia равноценна по выживаемости mastektomii (мастэктомии)."
                    },
                    {
                        title: "Podtypy molekularne i hormonoterapia (молекулярные подтипы и гормонотерапия)",
                        what: "Классификация raka piersi (рака груди) по receptorom (рецепторам) ER, PR и HER2.",
                        where: "Onkologia -> Rak piersi.",
                        study: "Luminalny A/B (люминальный) (ER/PR+): hormonoterapia (гормонотерапия) — tamoksyfen (тамоксифен) до менопаузы, inhibitory aromatazy (ингибиторы ароматазы) (anastrozol, letrozol — анастрозол, летрозол) после менопаузы. HER2+: trastuzumab (трастузумаб). Potrójnie ujemny (трижды негативный): chemioterapia (химиотерапия).",
                        focus: "Tamoksyfen (тамоксифен) повышает риск raka błony śluzowej trzonu macicy (рака эндометрия) и powikłań zakrzepowo-zatorowych (тромбоэмболии)."
                    }
                ]
            },
            {
                title: "Чт: Проктология (Геморрой, Трещины, Парапроктит, Рак анального канала)",
                id: "w7d4",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Proktologia",
                popup: { what: "Choroby odbytu i odbytnicy (заболевания аноректальной зоны).", focus: "Неотложная хирургическая помощь при ropniu odbytu (парапроктите).", reading: "Chirurgia: Proktologia." },
                subtopics: [
                    {
                        title: "Stopnie guzków krwawniczych wg Goligera (I–IV) (степени геморроя)",
                        what: "Классификация choroby guzków krwawniczych (геморроидальной болезни).",
                        where: "Chirurgia -> Proktologia.",
                        study: "I ст: krwawienie (кровотечение) без wypadania (выпадения); II ст: wypadają przy defekacji (выпадают при дефекации), вправляются САМИ; III ст: wypadają, вправляются РУКОЙ; IV ст: nieodprowadzalne (невправимые).",
                        focus: "I–II степени — консервативно или podwiązywanie gumkami (лигирование латексными кольцами) (metoda Barrona); III — podwiązywanie или операция; IV — операция (hemoroidektomia Milligana-Morgana — геморроидэктомия Миллигана-Моргана)."
                    },
                    {
                        title: "Szczelina odbytu (анальная трещина)",
                        what: "Линейный дефект błony śluzowej kanału odbytu (слизистой оболочки анального канала).",
                        where: "Chirurgia -> Szczelina odbytu.",
                        study: "Триада: резкая боль при дефекации, skurcz zwieracza (спазм сфинктера), капли алой крови на бумаге. Локализация: задняя срединная линия (6 часов) — ~90%. Szczelina (трещина) вне срединной линии — думать о chorobie Leśniowskiego-Crohna (болезни Крона), gruźlicy (ТБ), raku (раке).",
                        focus: "Лечение: maści z nitrogliceryną (мази с нитроглицерином) или diltiazemem (дилтиаземом) (rozluźnienie zwieracza — расслабление сфинктера); при przewlekłej (хронической) — toksyna botulinowa (ботулотоксин) или boczna sfinkterotomia wewnętrzna (латеральная внутренняя сфинктеротомия)."
                    },
                    {
                        title: "Ropień odbytu (парапроктит)",
                        what: "Острое ropne zapalenie (гнойное воспаление) параректальной клетчатки.",
                        where: "Chirurgia -> Ropień odbytu.",
                        study: "Симптомы: pulsujący ból (пульсирующая боль) w okolicy odbytu (в области ануса), усиливающаяся при сидении, gorączka (лихорадка), zaczerwienienie i obrzęk skóry (гиперемия и припухлость кожи).",
                        focus: "Экстренное состояние! Лечение: НЕМЕДЛЕННОЕ szerokie nacięcie i drenaż ropnia (широкое вскрытие и дренирование гнойника) (без ожидания размягчения)!"
                    },
                    {
                        title: "Przetoka odbytu (свищ прямой кишки)",
                        what: "Хронический патологический ход между odbytnicą (прямой кишкой) и кожей.",
                        where: "Chirurgia -> Przetoka.",
                        study: "Почти всегда является исходом неадекватно дренированного ropnia odbytu (парапроктита).",
                        focus: "Klasyfikacja Parksa (классификация Паркса) по отношению к zwieraczowi (сфинктеру) (międzyzwieraczowe, przezzwieraczowe, nadzwieraczowe, pozazwieraczowe — интер-, транс-, супра-, экстрасфинктерные). Лечение только хирургическое (fistulotomia (фистулотомия), seton (дренаж-сетон))."
                    },
                    {
                        title: "Rak kanału odbytu, wypadanie odbytnicy (рак анального канала и выпадение прямой кишки)",
                        what: "Rak płaskonabłonkowy kanału odbytu (плоскоклеточный рак анального канала) и pełnościenne wypadanie odbytnicy (полнослойное выпадение прямой кишки) — состояния, которые в тестах путают с guzkami krwawniczymi (геморроем).",
                        where: "Noszczyk «Chirurgia» -> Choroby odbytnicy i odbytu; wytyczne ESMO (rak kanału odbytu).",
                        study: "Rak kanału odbytu (рак анального канала): чаще płaskonabłonkowy (плоскоклеточный); главный фактор — HPV (типы 16 и 18); риск выше при HIV (ВИЧ), immunosupresji (иммуносупрессии), paleniu (курении); stan przedrakowy (предраковое состояние) — śródnabłonkowa neoplazja odbytu (анальная интраэпителиальная неоплазия) (AIN). Клиника: krwawienie (кровотечение), боль, zgrubienie (уплотнение), świąd (зуд) — часто принимают за guzki krwawnicze (геморрой). Лимфоотток ниже linii zębatej (зубчатой линии) — в węzły chłonne pachwinowe (паховые лимфоузлы). Лечение первого выбора — radiochemioterapia (химиолучевая терапия) по Nigro (5-fluorouracyl (фторурацил) + mitomycyna C (митомицин C) + napromienianie (облучение)) с сохранением zwieracza (сфинктера); brzuszno-kroczowe odjęcie odbytnicy (брюшно-промежностная экстирпация прямой кишки) (APR) — только при остаточной опухоли или nawrocie (рецидиве). Небольшой rak brzegu odbytu (рак края ануса) — miejscowe wycięcie (местное иссечение). Wypadanie odbytnicy (выпадение прямой кишки) (pełnościenne — полнослойное): пожилые женщины, słabość dna miednicy (слабость тазового дна), przewlekłe zaparcia (хронические запоры); при осмотре — концентрические циркулярные fałdy błony śluzowej (складки слизистой) (при wypadaniu guzków krwawniczych (выпадении геморроидальных узлов) — радиальные борозды). Лечение хирургическое: у пациентов в хорошем состоянии — rektopeksja brzuszna (абдоминальная ректопексия) (часто laparoskopowa rektopeksja brzuszna z siatką — лапароскопическая вентральная сетчатая); у пожилых с высоким операционным риском — dostęp kroczowy (промежностный доступ) (operacje Altemeiera, Delorme'a — Альтемейера, Делорма). Uwięźnięte wypadanie (ущемлённое выпадение) — попытка odprowadzenia (вправления) (сахар на błonę śluzową уменьшает obrzęk (отёк)), при martwicy (некрозе) — операция.",
                        focus: "Первичное лечение raka płaskonabłonkowego kanału odbytu (плоскоклеточного рака анального канала) — radiochemioterapia (химиолучевая терапия), а не APR (в отличие от gruczolakoraka odbytnicy (аденокарциномы прямой кишки)). Концентрические fałdy (складки) — wypadanie odbytnicy (выпадение прямой кишки), радиальные — wypadanie guzków krwawniczych (выпадение геморроидальных узлов)."
                    }
                ]
            },
            {
                title: "Пт: Хирургическая щитовидная железа",
                id: "w7d5",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Chirurgia tarczycy",
                popup: { what: "Operacje tarczycy (операции на щитовидной железе).", focus: "Powikłania (осложнения) и неотложная помощь при asfiksji (асфиксии).", reading: "Chirurgia: Tarczyca." },
                subtopics: [
                    {
                        title: "Wskazania do operacji tarczycy (показания к операциям на щитовидной железе)",
                        what: "Tyreoidektomia (тиреоидэктомия; в старых текстах — strumektomia) и resekcja subtotalna (субтотальная резекция).",
                        where: "Chirurgia -> Tarczyca.",
                        study: "Показания: rak tarczycy (рак щитовидной железы) (Bethesda V-VI), wole (зоб) больших размеров с симптомами ucisku (сдавления) (dysfagia (дисфагия), stridor (стридор)), wole zamostkowe (загрудинный зоб), oporne wole toksyczne (резистентный токсический зоб).",
                        focus: "Resekcja subtotalna (субтотальная резекция) сейчас выполняется редко из-за высокого риска nawrotu (рецидива); предпочтение отдаётся całkowitej tyreoidektomii (тотальной тиреоидэктомии)."
                    },
                    {
                        title: "Uszkodzenie nerwu krtaniowego wstecznego (повреждение возвратного гортанного нерва)",
                        what: "Uraz (травма) N. laryngeus recurrens во время операции.",
                        where: "Chirurgia -> Powikłania po tyroidektomii.",
                        study: "Jednostronne (одностороннее) повреждение: chrypka (охриплость). Obustronne (двустороннее): fałdy głosowe (голосовые складки) в парамедианном положении -> stridor (стридор) и ostra niewydolność oddechowa (острая дыхательная недостаточность) после ekstubacji (экстубации).",
                        focus: "Obustronne uszkodzenie nerwów krtaniowych wstecznych (двустороннее повреждение возвратных нервов) требует экстренной reintubacji (реинтубации) или tracheotomii (трахеостомии)."
                    },
                    {
                        title: "Pooperacyjna niedoczynność przytarczyc (послеоперационный гипопаратиреоз)",
                        what: "Случайное удаление или niedokrwienie przytarczyc (ишемия паращитовидных желёз).",
                        where: "Chirurgia -> Hipokalcemia pooperacyjna.",
                        study: "Развивается hipokalcemia (гипокальциемия) (Ca2+ ⬇). Симптомы: parestezje (парестезии) пальцев и губ, objawy Chvostka i Trousseau (симптомы Хвостека и Труссо), drgawki tężyczkowe (тетанические судороги).",
                        focus: "Купирование ostrej tężyczki (острой тетании): медленное введение i.v. 10% glukonianu wapnia (глюконата кальция)."
                    },
                    {
                        title: "Krwiak pooperacyjny szyi (послеоперационная гематома шеи)",
                        what: "Кровотечение в ложе удалённой tarczycy (щитовидной железы).",
                        where: "Chirurgia -> Krwiak pooperacyjny.",
                        study: "Нарастающий obrzęk szyi (отёк шеи), sinica (посинение), прогрессирующая duszność (удушье) из-за ucisku tchawicy (сдавления трахеи).",
                        focus: "Экстренное действие прямо в палате: СРАЗУ распустить szwy (швы) на ране и ewakuować krwiak (удалить гематому), затем транспортировать в операционную!"
                    },
                    {
                        title: "Rak tarczycy — leczenie operacyjne (рак щитовидной железы, хирургическое лечение)",
                        what: "Объём операции и дальнейшее лечение при raku zróżnicowanym (дифференцированном), rdzeniastym (медуллярном) и anaplastycznym (анапластическом) raku tarczycy (раке щитовидной железы).",
                        where: "Noszczyk «Chirurgia» -> Tarczyca -> Rak tarczycy; Szczeklik -> Choroby tarczycy -> Rak tarczycy; rekomendacje polskich towarzystw naukowych (diagnostyka i leczenie raka tarczycy, сверить актуальную редакцию).",
                        study: "Rak zróżnicowany (дифференцированный рак) (brodawkowaty ≈85%, pęcherzykowy): при опухоли >4 см, naciekaniu poza torebkę (выходе за капсулу), przerzutach do węzłów chłonnych (метастазах в лимфоузлы) или odległych (отдалённых) — tyreoidektomia całkowita (тотальная тиреоидэктомия); при одноочаговой опухоли низкого риска ≤4 см без поражения узлов допустима lobektomia (лобэктомия); mikrorak (микрорак) ≤1 см низкого риска — lobektomia или aktywna obserwacja (активное наблюдение) в отдельных центрах. Limfadenektomia centralna szyi (центральная лимфодиссекция шеи) — при клинически поражённых узлах. После tyreoidektomii całkowitej у пациентов промежуточного и высокого риска — jod radioaktywny (радиойод) (131I) после stymulacji TSH (стимуляции ТТГ); затем lewotyroksyna (левотироксин) (степень supresji TSH (подавления ТТГ) зависит от риска) и контроль tyreoglobuliny (тиреоглобулина) вместе с przeciwciałami anty-Tg (антителами к нему). Rak pęcherzykowy (фолликулярный рак) нельзя отличить от gruczolaka (аденомы) cytologicznie (цитологически) (Bethesda IV) — нужна гистология капсулы и сосудов. Rak rdzeniasty (медуллярный рак) (z komórek C — из парафолликулярных клеток): маркёры — kalcytonina (кальцитонин) и CEA; около 25% наследственные (mutacja RET, MEN2A — с guzem chromochłonnym (феохромоцитомой) и nadczynnością przytarczyc (гиперпаратиреозом), MEN2B); лечение — tyreoidektomia całkowita + limfadenektomia centralna; jod radioaktywny неэффективен; носителям RET — profilaktyczna tyreoidektomia (профилактическая тиреоидэктомия) в детстве (срок зависит от мутации). Перед операцией raka rdzeniastego исключают guz chromochłonny (metanefryny — метанефрины); если он есть — первым удаляют его после blokady α (α-блокады). Rak anaplastyczny (анапластический рак): пожилые, быстрый рост, очень плохой прогноз, часто nieoperacyjny (неоперабелен).",
                        focus: "Jod radioaktywny (радиойод) при raku rdzeniastym (медуллярном раке) — неверный ответ. Tyreoglobulina (тиреоглобулин) как маркёр nawrotu (рецидива) информативна после tyreoidektomii całkowitej (тотальной тиреоидэктомии), а не после lobektomii (лобэктомии). Rak rdzeniasty + повышенные metanefryny (метанефрины) — сначала adrenalektomia (адреналэктомия), потом tarczyca (щитовидная железа). Kalcytonina (кальцитонин) — маркёр raka rdzeniastego."
                    }
                ]
            },
            {
                title: "Сб: Тестирование по Онкохирургии и Проктологии",
                id: "w7d6",
                time: "1.5 ч",
                lepolekPath: "Testy -> Chirurgia Onkologiczna (40 pytań CEM)",
                popup: { what: "Проверка онкологических тем хирургии.", focus: "Badania przesiewowe (скрининги) и стадии TNM.", reading: "Заметки." },
                subtopics: [
                    {
                        title: "Rozwiązanie 40 pytań CEM (решение вопросов CEM)",
                        what: "Тест по chorobom nowotworowym (опухолевым) и proktologicznym (проктологическим заболеваниям).",
                        where: "Lepolek.",
                        study: "Проверка понимания badań przesiewowych (скринингов) raka jelita grubego i piersi (рака толстой кишки и груди), operacji Hartmanna i Whipple'a (операций Гартмана и Уиппла).",
                        focus: "Выявление ошибок в показаниях к хирургическому лечению."
                    },
                    {
                        title: "Analiza operacji proktologicznych (разбор проктологических операций)",
                        what: "Сравнение методов лечения guzków krwawniczych (геморроя), szczelin odbytu (трещин) и ropni odbytu (парапроктитов).",
                        where: "Личные заметки.",
                        study: "Сроки экстренного вмешательства при проктологической патологии.",
                        focus: "Запоминание правила: ropień odbytu (парапроктит) не лечится консервативно — только nacięcie chirurgiczne (хирургический разрез)."
                    },
                    {
                        title: "Markery nowotworowe — utrwalenie (закрепление онкомаркеров)",
                        what: "Итоговая повторительная таблица markerów nowotworowych (онкомаркеров) в хирургии.",
                        where: "Личные заметки.",
                        study: "CEA (jelito grube — толстая кишка), CA 19-9 (trzustka — поджелудочная железа), CA 125 (jajniki — яичники), AFP (HCC / wątroba — ГЦК / печень).",
                        focus: "Правильное понимание роли markerów (маркеров): оценка nawrotu (рецидива) и эффективности лечения, а не badania przesiewowe (скрининг)!"
                    }
                ]
            }
        ]
    },
    {
        key: "chir-3",
        subject: "chirurgia",
        title: "Хирургия III — Урология, Сосудистая & Детская хирургия",
        days: [
            {
                title: "Пн: Сосудистая хирургия",
                id: "w8d1",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Chirurgia naczyniowa",
                popup: { what: "Choroby tętnic i aorty (заболевания артерий и аорты).", focus: "Показания к экстренной fasciotomii (фасциотомии) и trombektomii (тромбэктомии).", reading: "Chirurgia naczyniowa." },
                subtopics: [
                    {
                        title: "Tętniak aorty brzusznej, AAA (аневризма брюшной аорты)",
                        what: "Miejscowe poszerzenie aorty (локальное расширение аорты) ≥ 30 мм в диаметре.",
                        where: "Chirurgia naczyniowa -> AAA.",
                        study: "Показания к плановой операции: диаметр ≥5.5 см у мужчин / ≥5.0 см у женщин, szybki wzrost (быстрый рост) (≥10 мм в год) или objawy (симптомы).",
                        focus: "Методы лечения: operacja otwarta z wszczepieniem protezy (открытая операция с вшиванием протеза) или leczenie wewnątrznaczyniowe (эндоваскулярное протезирование) (EVAR)."
                    },
                    {
                        title: "Pęknięty tętniak aorty brzusznej (разрыв аневризмы брюшной аорты)",
                        what: "Смертельное осложнение tętniaka aorty (аневризмы аорты).",
                        where: "Chirurgia -> Pęknięty tętniak.",
                        study: "Классическая триада: 1. Внезапная сильная боль в животе/пояснице; 2. Tętniący guz w jamie brzusznej (пульсирующее образование в животе); 3. Hipotensja (гипотония) / wstrząs krwotoczny (геморрагический шок).",
                        focus: "Показание к экстренной неотложной операции без промедления!"
                    },
                    {
                        title: "Ostre niedokrwienie kończyny — reguła 6P (острая ишемия конечностей)",
                        what: "Внезапный zator (эмболия) или zakrzepica (тромбоз) магистральной артерии.",
                        where: "Chirurgia naczyniowa -> Ostre niedokrwienie.",
                        study: "Правило 6P: Pain (ból — боль), Pallor (bladość — бледность), Paresthesia (parestezje — парестезии), Pulselessness (brak tętna — отсутствие пульса), Paralysis (porażenie — паралич), Poikilothermia (oziębienie kończyny — холодная конечность).",
                        focus: "Обратимое окно niedokrwienia (ишемии) — 6 часов! Необходима экстренная embolektomia cewnikiem Fogarty'ego (эмболэктомия катетером Фогарти)."
                    },
                    {
                        title: "Przewlekłe niedokrwienie kończyn dolnych i wskaźnik kostka-ramię, ABI/WKR (хроническая ишемия, индекс ABI)",
                        what: "Miażdżyca zarostowa tętnic kończyn dolnych (облитерирующий атеросклероз артерий нижних конечностей) (PAD).",
                        where: "Chirurgia naczyniowa -> PAD.",
                        study: "Chromanie przestankowe (перемежающаяся хромота). Wskaźnik kostka-ramię (лодыжечно-плечевой индекс) (ABI, WKR): норма 0.9–1.4; ≤0.9 — PAD; >1.4 — tętnice niepodatne na ucisk (несжимаемые артерии) (cukrzyca (СД), PChN (ХБП)); <0.4 — ciężkie niedokrwienie (тяжёлая ишемия).",
                        focus: "Klasyfikacja Fontaine'a (классификация Фонтена) (Fontaine I-IV): IV стадия = martwica (некрозы) и zgorzel (гангрена)."
                    }
                ]
            },
            {
                title: "Вт: Урология I — Почечная колика и ДГПЖ (BPH)",
                id: "w8d2",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Urologia -> Kamica i BPH",
                popup: { what: "Kamica moczowa (мочекаменная болезнь) и łagodny rozrost gruczołu krokowego (гиперплазия простаты).", focus: "Купирование острой боли, показания к TURP — przezcewkowa elektroresekcja prostaty (ТУРП).", reading: "Urologia." },
                subtopics: [
                    {
                        title: "Kolka nerkowa (почечная колика)",
                        what: "Острый приступ боли из-за przemieszczania się złogu (миграции камня) по moczowodzie (мочеточнику).",
                        where: "Urologia -> Kamica moczowa.",
                        study: "Резкая ból kolkowy (схваткообразная боль) в пояснице с иррадиацией в пах/jądro (яичко), mikroskopowy krwiomocz (микрогематурия), nudności (тошнота). Objaw Goldflama (симптом Пастернацкого) dodatni (положительный).",
                        focus: "Первая линия обезболивания — NLPZ (НПВП) i.v. (ketoprofen (кетопрофен), deksketoprofen (декскетопрофен)), а НЕ leki spazmolityczne (спазмолитики)!"
                    },
                    {
                        title: "Metody usuwania złogów: ESWL, URSL, PCNL (методы удаления камней)",
                        what: "Хирургическое лечение kamicy moczowej (мочекаменной болезни).",
                        where: "Urologia -> Leczenie zabiegowe.",
                        study: "ESWL — litotrypsja falą uderzeniową (дистанционная литотрипсия) — kamienie nerkowe (камни почек) < 2см. URSL — ureterorenoskopia z litotrypsją (контактная уретеролитотрипсия) — kamienie moczowodu (камни мочеточника). PCNL — przezskórna nefrolitotrypsja (перкутанная нефролитотомия) — kamienie odlewowe (коралловидные камни) почек > 2см.",
                        focus: "Kamienie (камни) <5 мм в большинстве случаев отходят самостоятельно; α-bloker (α-блокатор) (tamsulozyna — тамсулозин) как leczenie wspomagające wydalanie złogu (экспульсивная терапия) — при камнях dystalnego moczowodu (дистального мочеточника) >5 мм."
                    },
                    {
                        title: "Łagodny rozrost gruczołu krokowego, BPH (доброкачественная гиперплазия простаты)",
                        what: "Łagodny rozrost stercza (аденома предстательной железы) у пожилых мужчин.",
                        where: "Urologia -> BPH.",
                        study: "Objawy LUTS (симптомы LUTS): podrażnieniowe (ирритативные) (oddawanie moczu w nocy — никтурия) и przeszkodowe (обструктивные) (słaby strumień moczu (слабая струя), zatrzymanie (задержка)). Badanie per rectum (пальпация per rectum): gruczoł (железа) увеличен, эластичный, безболезненный.",
                        focus: "Лечение: α1-blokery (α-блокаторы) (tamsulozyna (тамсулозин) — быстро снимают тонус) + inhibitory 5-alfa-reduktazy (ингибиторы редуктазы) (finasteryd (финастерид) — уменьшают объём простаты)."
                    },
                    {
                        title: "Ostre zatrzymanie moczu i TURP (острая задержка мочи и операция TURP)",
                        what: "Неотложная помощь и хирургия BPH.",
                        where: "Urologia -> TURP.",
                        study: "Ostre zatrzymanie moczu (острая задержка мочи) -> немедленное cewnikowanie pęcherza moczowego (катетеризация мочевого пузыря) cewnikiem Foleya (катетером Фолея); при невозможности (zwężenie cewki (стриктура), uraz cewki moczowej (травма уретры)) — cystostomia nadłonowa (надлобковая цистостомия).",
                        focus: "Золотой стандарт хирургии BPH — przezcewkowa elektroresekcja prostaty (трансуретральная резекция простаты) (TURP)."
                    }
                ]
            },
            {
                title: "Ср: Урология II — Острые состояния и Онкоурология",
                id: "w8d3",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Urologia -> Nowotwory i Stany nagłe",
                popup: { what: "Stany nagłe w urologii (экстренная урология) и nowotwory (опухоли).", focus: "Różnicowanie skrętu jądra i zapalenia jądra (дифференциация перекрута яичка и орхита) (Objaw Prehna).", reading: "Urologia." },
                subtopics: [
                    {
                        title: "Skręt jądra (перекрут яичка)",
                        what: "Ургентная урологическая патология у детей и молодых людей.",
                        where: "Urologia -> Skręt jądra.",
                        study: "Внезапная сильная боль в mosznie (мошонке), podciągnięcie jądra (подтягивание яичка) вверх, brak odruchu z mięśnia dźwigacza jądra (отсутствие кремастерного рефлекса). Objaw Prehna (симптом Прена) ujemny (отрицательный) (uniesienie moszny (поднимание мошонки) НЕ уменьшает боль).",
                        focus: "Окно для спасения jądra (яичка) — 6 часов! Экстренная rewizja moszny (ревизия), odkręcenie (деторсия) и orchidopeksja (орхидопексия) (с фиксацией и контралатерального jądra). USG dopplerowskie (УЗИ-допплер) не должно задерживать операцию."
                    },
                    {
                        title: "Rak pęcherza moczowego (рак мочевого пузыря)",
                        what: "Rak urotelialny (уротелиальная карцинома).",
                        where: "Urologia -> Rak pęcherza.",
                        study: "Классический первый симптом: bezbolesny krwiomocz (безболезненная макрогематурия) со skrzepami (сгустками). Главный фактор риска — palenie tytoniu (курение)!",
                        focus: "Диагностика: USG (УЗИ) и cystoskopia (цистоскопия) -> przezcewkowa elektroresekcja guza pęcherza (трансуретральная резекция опухоли) (TURBT) с гистологией; urografia TK (КТ-урография) для верхних мочевых путей."
                    },
                    {
                        title: "Rak nerki, RCC (рак почки)",
                        what: "Rak nerkowokomórkowy (почечно-клеточный рак) (jasnokomórkowy — светлоклеточный).",
                        where: "Urologia -> Rak nerki.",
                        study: "Классическая триада (встречается редко): ból okolicy lędźwiowej (боль в пояснице) + krwiomocz (макрогематурия) + wyczuwalny guz (пальпируемая опухоль). Часто przypadkowe znalezisko (случайная находка) на USG (УЗИ).",
                        focus: "Rak nerki (рак почки) малочувствителен к классической chemioterapii (химиотерапии) и radioterapii (лучевой терапии). Основа — хирургия (nefrektomia (нефрэктомия) или resekcja nerki (резекция почки) — NSS); при przerzutach (метастазах) — terapia celowana (таргетная терапия) (inhibitory kinaz tyrozynowych — ингибиторы тирозинкиназ) и immunoterapia (иммунотерапия)."
                    },
                    {
                        title: "Rak gruczołu krokowego (рак простаты)",
                        what: "Gruczolakorak stercza (аденокарцинома предстательной железы).",
                        where: "Urologia -> Rak stercza.",
                        study: "Повышение PSA (>4 ng/ml) и/или плотный guzek (узел) per rectum -> wieloparametryczny MR prostaty (мультипараметрическая МРТ предстательной железы) (PI-RADS) до biopsji (биопсии), затем biopsja celowana (прицельная) и systematyczna (систематическая). EAU предпочитает dostęp przezkroczowy (трансперинеальный доступ) (меньше инфекционных осложнений); biopsja przezodbytnicza (трансректальная биопсия) под TRUS — с antybiotykoprofilaktyką (антибиотикопрофилактикой).",
                        focus: "Оценка агрессивности по sumie Gleasona (сумме Глисона) (Gleason score 6-10). Лечение: radykalna prostatektomia (радикальная простатэктомия) или hormonoterapia (гормонотерапия) (analogi LHRH — аналоги LHRH)."
                    }
                ]
            },
            {
                title: "Чт: Элементы Ортопедии и Травматологии",
                id: "w8d4",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Ortopedia",
                popup: { what: "Urazy narządu ruchu (травмы опорно-двигательного аппарата).", focus: "Признаки zespołu ciasnoty przedziałów powięziowych (компартмент-синдрома) (fasciotomia — фасциотомия!).", reading: "Ortopedia." },
                subtopics: [
                    {
                        title: "Złamanie szyjki kości udowej (перелом шейки бедра)",
                        what: "Частая травма у пожилых людей с osteoporozą (остеопорозом).",
                        where: "Ortopedia -> Złamanie szyjki.",
                        study: "Конечность укорочена, rotacja zewnętrzna (ротирована наружу). Высок риск jałowej martwicy głowy kości udowej (асептического некроза головки бедра).",
                        focus: "У пожилых при przemieszczonym złamaniu szyjki kości udowej (смещённом переломе шейки бедра) — endoprotezoplastyka (эндопротезирование, артропластика); операция в течение 24–48 ч снижает смертность."
                    },
                    {
                        title: "Zespół ciasnoty przedziałów powięziowych (компартмент-синдром)",
                        what: "Повышение давления в przedziale powięziowym (фасциальном ложе) конечности.",
                        where: "Ortopedia -> Zespół ciasnoty.",
                        study: "Симптомы: непропорционально сильная боль при biernym rozciąganiu mięśni (пассивном растяжении мышц), parestezje (парестезии), napięty przedział (твёрдость ложа).",
                        focus: "Экстренная fasciotomia (фасциотомия); brak tętna (отсутствие пульса) — поздний признак, на него не ждут."
                    },
                    {
                        title: "Zwichnięcia (вывихи суставов)",
                        what: "Смещение суставных поверхностей костей.",
                        where: "Ortopedia -> Zwichnięcia.",
                        study: "Zwichnięcie stawu ramiennego (вывих плеча) — самый частый (zwichnięcie przednie — передний вывих). Objaw pagonowy (симптом «эполета»).",
                        focus: "Обязательное исследование tętna (пульса) и czucia (чувствительности) (N. axillaris) ДО и ПОСЛЕ nastawienia (вправления)!"
                    },
                    {
                        title: "Złamania otwarte — klasyfikacja Gustilo-Andersona (открытые переломы)",
                        what: "Złamanie (перелом) с повреждением кожных покровов и сообщением с внешней средой.",
                        where: "Ortopedia -> Złamania otwarte.",
                        study: "Klasyfikacja Gustilo-Andersona (классификация Густило-Андерсона) (I-III тип в зависимости от размера rany (раны) и повреждения тканей).",
                        focus: "Неизменные элементы: antybiotyk (антибиотик) i.v. как можно раньше, в течение 1 ч (cefazolina (цефазолин); при III типе — расширить спектр), profilaktyka tężca (профилактика столбняка), opracowanie chirurgiczne rany (хирургическая обработка раны) (debridement), stabilizacja złamania (стабилизация перелома). Способ стабилизации выбирают по типу złamania и состоянию пациента: stabilizator zewnętrzny (наружный фиксатор) — временная или окончательная стабилизация при тяжёлом загрязнении и у нестабильного пациента (damage control); при типах I–II часто сразу gwóźdź śródszpikowy (интрамедуллярный гвоздь). Aparat Ilizarowa (аппарат Илизарова) — лишь один из видов stabilizatora zewnętrznego, а не обязательный стандарт."
                    }
                ]
            },
            {
                title: "Пт: Детская хирургия (Chirurgia dziecięca)",
                id: "w8d5",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Chirurgia dziecięca",
                popup: { what: "Wrodzona i ostra patologia chirurgiczna u dzieci (врождённая и острая хирургическая патология у детей).", focus: "Obraz USG wgłobienia (УЗИ-клиника инвагинации) (objaw tarczy — симптом мишени).", reading: "Chirurgia dziecięca." },
                subtopics: [
                    {
                        title: "Przerostowe zwężenie odźwiernika — pylorostenosis (пилоростеноз)",
                        what: "Wrodzony przerost mięśnia odźwiernika (врождённая гипертрофия сфинктера привратника) у младенцев (2-6 недель жизни).",
                        where: "Chirurgia dziecięca -> Pylorostenosis.",
                        study: "Симптом: wymioty chlustające bez żółci (фонтанирующая рвота, НЕОКРАШЕННАЯ желчью) после каждого кормления.",
                        focus: "Лаборатория: hipochloremiczna hipokaliemiczna zasadowica metaboliczna (гипохлоремический гипокалиемический метаболический алкалоз)! Лечение: pyloromiotomia sposobem Ramstedta (пилоромиотомия по Рамштедту)."
                    },
                    {
                        title: "Wgłobienie jelita (инвагинация кишечника)",
                        what: "Внедрение одного сегмента кишки в просвет другого у детей от 3 мес до 3 лет.",
                        where: "Chirurgia dziecięca -> Wgłobienie.",
                        study: "Триада: 1. Ból kolkowy (схваткообразная боль) с криком и поджиманием ножек; 2. Wyczuwalny guz w brzuchu (пальпируемая опухоль в животе); 3. Stolec jak galaretka malinowa (стул в виде «малинового желе»).",
                        focus: "USG (УЗИ): objaw tarczy / tarczy strzeleckiej (симптом «мишени» или «пончика»). Лечение первого выбора — нехирургическая dezinwaginacja (дезинвагинация) под контролем USG или RTG (рентгена): pneumatyczna (пневматическая) (воздухом) или hydrostatyczna (гидростатическая) (физраствором, контрастом). Противопоказания: zapalenie otrzewnej (перитонит), perforacja (перфорация) (wolny gaz — свободный газ), wstrząs (шок) — тогда операция."
                    },
                    {
                        title: "Atrezja przełyku (атрезия пищевода)",
                        what: "Врождённый перерыв непрерывности przełyku (пищевода) (часто с przetoką tchawiczo-przełykową (свищом в трахею)).",
                        where: "Chirurgia dziecięca -> Atrezja.",
                        study: "Симптомы сразу после рождения: pienista wydzielina z ust i nosa (пенистые выделения изо рта и носа), krztuszenie się (поперхивание) и sinica (цианоз) при первом кормлении.",
                        focus: "Диагностика: невозможность провести zgłębnik (зонд) в желудок (zgłębnik сворачивается в слепом мешке)."
                    },
                    {
                        title: "Przepuklina pępkowa vs pachwinowa u dzieci (пупочная и паховая грыжа у детей)",
                        what: "Хирургическая тактика при przepuklinach (грыжах) у детей.",
                        where: "Chirurgia dziecięca -> Przepukliny.",
                        study: "Przepuklina pępkowa (пупочная грыжа) у детей склонна к самопроизвольному закрытию до 2-4 лет (операция нужна редко).",
                        focus: "Przepuklina pachwinowa (паховая грыжа) у детей ВСЕГДА skośna (косая) и ВСЕГДА требует хирургического лечения из-за высокого риска uwięźnięcia (ущемления)!"
                    }
                ]
            },
            {
                title: "Сб: Итоговый тест по всему блоку Хирургии",
                id: "w8d6",
                time: "1.5 ч",
                lepolekPath: "Testy -> Chirurgia Całość (40 pytań CEM)",
                popup: { what: "Итоговый контроль 3 недель хирургии.", focus: "Chirurgia naczyniowa (сосуды), urologia (урология) и stany nagłe w chirurgii (экстренная хирургия).", reading: "Заметки." },
                subtopics: [
                    {
                        title: "Rozwiązanie 40 pytań CEM (решение вопросов CEM)",
                        what: "Финальный контроль по всем 3 неделям хирургического блока.",
                        where: "Lepolek.",
                        study: "Комплексное тестирование по chirurgii ogólnej (общей хирургии), chirurgii onkologicznej (онкохирургии), urologii (урологии), chirurgii naczyniowej (сосудам) и chirurgii dziecięcej (детской хирургии).",
                        focus: "Отработка уверенного выбора правильного ответа без колебаний."
                    },
                    {
                        title: "Powtórka okien czasowych: skręt jądra, ostre niedokrwienie kończyny, zatrzymanie moczu (повтор временных окон)",
                        what: "Освежение знаний по niedokrwieniu jądra (ишемии яичка) и ostremu zatrzymaniu moczu (острой задержке мочи).",
                        where: "Личные заметки.",
                        study: "Временные рамки экстренных вмешательств (6 часов при skręcie jądra (перекруте яичка) и ostrym niedokrwieniu kończyny (острой ишемии конечности)).",
                        focus: "Запоминание временных окон для предотвращения необратимых изменений."
                    },
                    {
                        title: "Podsumowanie 3 tygodni chirurgii (итоговый обзор хирургии)",
                        what: "Подведение итогов хирургического цикла подготовки.",
                        where: "Статистика Lepolek.",
                        study: "Сводная оценка результатов по всем хирургическим категориям.",
                        focus: "Запись сложных тем для обязательного повторения во 2-м цикле."
                    }
                ]
            }
        ]
    },
    {
        key: "chir-4",
        subject: "chirurgia",
        title: "Хирургия IV — Травма и неотложная хирургия",
        days: [
            {
                title: "Пн: ATLS, геморрагический шок и травма груди (Urazy klatki piersiowej)",
                id: "chir-atls-klatka",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Chirurgia urazowa -> Urazy klatki piersiowej i wstrząs",
                popup: { what: "Badanie wstępne (первичный осмотр) пострадавшего по ATLS, klasy utraty krwi (классы кровопотери) и шесть жизнеугрожающих состояний klatki piersiowej (груди), которые распознаются клинически и лечатся до снимков.", focus: "Odma prężna (напряжённый пневмоторакс) — клинический диагноз, odbarczenie (декомпрессия) без RTG; пороги torakotomii (торакотомии) при krwiaku opłucnej (гемотораксе) (1500 мл / 200 мл/ч); kwas traneksamowy (транексамовая кислота) только в первые 3 ч; место odbarczenia по ATLS 10 и по старым вопросам.", reading: "Noszczyk «Chirurgia» -> Obrażenia klatki piersiowej, Wstrząs; ATLS (10. edycja); LEK w pigułce -> Chirurgia -> Urazy." },
                subtopics: [
                    {
                        title: "Badanie wstępne ABCDE wg ATLS (первичный осмотр ABCDE)",
                        what: "Последовательность оценки и одновременного лечения угроз жизни у пострадавшего: A — drożność dróg oddechowych (проходимость дыхательных путей) с ochroną odcinka szyjnego kręgosłupa (защитой шейного отдела), B — oddychanie (дыхание), C — krążenie (кровообращение) и tamowanie krwotoku (остановка кровотечения), D — stan neurologiczny (неврологический статус), E — pełne badanie (полный осмотр) с ochroną przed wychłodzeniem (защитой от переохлаждения).",
                        where: "ATLS (10. edycja) -> Initial assessment; Noszczyk «Chirurgia» -> Postępowanie z chorym po urazie wielonarządowym.",
                        study: "Порядок жёсткий: угрозу на текущем этапе устраняют до перехода к следующему. Masywny krwotok zewnętrzny (массивное наружное кровотечение) (opaska uciskowa (жгут), bezpośredni ucisk (прямое давление)) останавливают первым, ещё до A: в ATLS 10 — как приоритет этапа C, в PHTLS 9 (2019) и ATLS 11 (2025) — отдельной буквой «x» (xABCDE; изменения ATLS 11 сверить). На этапе A — stabilizacja odcinka szyjnego (стабилизация шейного отдела) (sztywny kołnierz) до исключения травмы; на D — GCS, źrenice (зрачки), lateralizacja (латерализация); на E — раздеть, осмотреть спину (log-roll), согреть. Дополнения к badaniu wstępnemu: eFAST, RTG klatki piersiowej i miednicy (RTG грудной клетки и таза), gazometria (газометрия), cewnik i zgłębnik (катетер и зонд) (с учётом przeciwwskazań — противопоказаний). Badanie szczegółowe (вторичный осмотр) (badanie szczegółowe, wywiad AMPLE — анамнез AMPLE) — только после стабилизации.",
                        focus: "В вопросе «первое действие» правильный ответ всегда соответствует самой ранней букве, в которой есть проблема: у пациента со stridorem (стридором) и krwawieniem z uda (кровотечением из бедра) сначала drogi oddechowe (дыхательные пути) — если только krwotok (кровотечение) не masywny (тогда первым — tamowanie krwotoku, «x»). TK (КТ) никогда не делают niestabilnemu pacjentowi (нестабильному пациенту)."
                    },
                    {
                        title: "Wstrząs krwotoczny (геморрагический шок)",
                        what: "Niedostateczna perfuzja tkankowa (недостаточная тканевая перфузия) из-за ostrej utraty krwi (острой кровопотери) — самая частая причина wstrząsu (шока) у пострадавшего.",
                        where: "ATLS (10. edycja) -> Shock; Noszczyk «Chirurgia» -> Wstrząs; Europejskie wytyczne postępowania w krwawieniu pourazowym.",
                        study: "Klasy ATLS (классы ATLS) (классическая таблица ATLS 9 с числами HR — częstość rytmu serca (ЧСС); в ATLS 10 HR описана качественно — норма / норма или ↑ / ↑ / ↑↑): I — <15% objętości krwi krążącej (ОЦК) (<750 мл), HR <100, ciśnienie tętnicze (давление) в норме; II — 15–30% (750–1500 мл), HR 100–120, ciśnienie в норме, ciśnienie tętna (пульсовое давление) снижено; III — 30–40% (1500–2000 мл), HR 120–140, hipotensja (гипотония), splątanie (спутанность); IV — >40% (>2000 мл), HR >140, выраженная hipotensja, sopor (сопор), bezmocz (анурия). В ATLS 10 классы дополнительно привязаны к niedoborowi zasad (дефициту оснований) (0 до −2; −2 до −6; −6 до −10; < −10). Начальная płynoterapia (инфузия): 1 л krystaloidu (кристаллоида) у взрослого, 20 мл/кг у ребёнка, затем ранняя krew (кровь). Hipotensja permisywna (пермиссивная гипотензия): целевое ciśnienie skurczowe (САД) 80–90 mm Hg до остановки кровотечения; при urazie czaszkowo-mózgowym (ЧМТ) противопоказана (średnie ciśnienie tętnicze (среднее давление) ≥80 mm Hg). Kwas traneksamowy (транексамовая кислота): 1 г i.v. за 10 мин, затем 1 г за 8 ч, только в первые 3 ч после травмы. Masywne przetoczenie (массивная трансфузия) — ≥10 j. KKCz (доз эритроцитов) за 24 ч; соотношение KKCz : FFP : KKP (эритроциты : СЗП : тромбоциты) ≈ 1:1:1.",
                        focus: "Hipotensja (гипотония) появляется только с класса III — нормальное ciśnienie (давление) не исключает utraty krwi (кровопотерю) до 30%. Kwas traneksamowy (транексамовая кислота) после 3 ч повышает смертность от кровотечения (CRASH-2) — его не дают «на всякий случай» позже. У пожилых на β-blokerach (β-блокаторах) tachykardii (тахикардии) может не быть."
                    },
                    {
                        title: "Odma prężna i odma otwarta (напряжённый и открытый пневмоторакс)",
                        what: "Odma prężna (напряжённый пневмоторакс) — клапанное нагнетание воздуха в jamę opłucnej (плевральную полость) со смещением śródpiersia (средостения) и падением powrotu żylnego (венозного возврата); odma otwarta (открытый) — сообщение jamy opłucnej с атмосферой через рану стенки.",
                        where: "ATLS (10. edycja) -> Thoracic trauma; Noszczyk «Chirurgia» -> Obrażenia klatki piersiowej -> Odma opłucnowa.",
                        study: "Клиника odmy prężnej: duszność (одышка), hipotensja (гипотония), tachykardia (тахикардия), brak szmeru pęcherzykowego (отсутствие дыхательных шумов) и odgłos opukowy bębenkowy (коробочный звук) на стороне поражения, poszerzone żyły szyjne (набухшие шейные вены), przesunięcie tchawicy (отклонение трахеи) в противоположную сторону (поздний признак). Лечение — немедленное odbarczenie igłowe (игольная декомпрессия): по ATLS 10 у взрослых 4–5 przestrzeń międzyżebrowa (межреберье) przed linią pachową środkową (кпереди от средней подмышечной линии) (там тоньше стенка); у детей и в вопросах CEM прошлых лет — 2 przestrzeń międzyżebrowa w linii środkowo-obojczykowej (по среднеключичной линии). Затем обязателен drenaż jamy opłucnej (дренаж плевральной полости). Odma otwarta: jałowy opatrunek okluzyjny (стерильная окклюзионная повязка), закреплённый с трёх сторон (mechanizm zastawkowy — клапанный механизм), затем dren (дренаж) вдали от раны и opracowanie chirurgiczne rany (хирургическая обработка раны).",
                        focus: "Диагноз odmy prężnej (напряжённого пневмоторакса) клинический: ответ «сделать RTG для подтверждения» — ловушка. Если в вопросе нет варианта 4–5 przestrzeni międzyżebrowej (межреберья), правильный — 2 przestrzeń w linii środkowo-obojczykowej (по среднеключичной). Полностью szczelny opatrunek (герметичная повязка) на odmę otwartą может превратить её в prężną (напряжённую)."
                    },
                    {
                        title: "Masywny krwiak opłucnej i drenaż jamy opłucnej (массивный гемоторакс и дренирование)",
                        what: "Скопление крови в jamie opłucnej (плевральной полости); masywny (массивный) — более 1500 мл или треть objętości krwi krążącej (ОЦК) у взрослого.",
                        where: "ATLS (10. edycja) -> Thoracic trauma; Noszczyk «Chirurgia» -> Krwiak opłucnej, Drenaż opłucnej.",
                        study: "Клиника: wstrząs (шок) + stłumienie odgłosu opukowego (притупление перкуторного звука) и osłabiony szmer pęcherzykowy (ослабленное дыхание) на стороне травмы, zapadnięte żyły szyjne (шейные вены спавшиеся) (отличие от odmy prężnej (напряжённого пневмоторакса) и tamponady serca (тампонады)). Первично — dren o dużej średnicy (дренаж толстого калибра) и восполнение объёма. Показания к torakotomii (торакотомии): ≥1500 мл крови сразу после drenażu или продолжающееся поступление >200 мл/ч в течение 2–4 ч, а также потребность в продолжающихся przetoczeniach (трансфузиях). Trójkąt bezpieczeństwa (треугольник безопасности): передний край mięśnia najszerszego grzbietu (широчайшей мышцы спины), латеральный край mięśnia piersiowego większego (большой грудной мышцы), горизонталь на уровне соска (5 przestrzeń międzyżebrowa — межреберье), вершина под подмышкой. Dren вводят по верхнему краю нижележащего ребра — pęczek naczyniowo-nerwowy (сосудисто-нервный пучок) идёт под нижним краем ребра.",
                        focus: "Типичный вопрос — порог torakotomii (торакотомии): 1500 мл сразу или 200 мл/ч. Место введения drenu (дренажа) — над ребром, не под ним. Zapadnięte żyły szyjne (спавшиеся шейные вены) при wstrząsie (шоке) указывают на hipowolemię (гиповолемию) (krwiak opłucnej — гемоторакс), poszerzone (набухшие) — на wstrząs obturacyjny (обструктивный шок) (odma prężna, tamponada serca)."
                    },
                    {
                        title: "Wiotka klatka piersiowa, tamponada serca (флотирующая грудная клетка и тампонада сердца)",
                        what: "Wiotka klatka piersiowa (флотирующая клетка) — złamanie (перелом) ≥2 соседних рёбер в ≥2 местах с образованием свободного сегмента; tamponada serca (тампонада) — сдавление сердца кровью в osierdziu (перикарде), чаще при ranie penetrującej (проникающей ране).",
                        where: "ATLS (10. edycja) -> Thoracic trauma; Noszczyk «Chirurgia» -> Obrażenia klatki piersiowej.",
                        study: "Wiotki segment (флотирующий сегмент) движется парадоксально (западает на вдохе). Основная угроза — не сам сегмент, а подлежащее stłuczenie płuca (ушиб лёгкого) и боль, ограничивающая дыхание: лечение — tlen (кислород), адекватная analgezja (обезболивание) (в т. ч. znieczulenie regionalne — регионарное), осторожная płynoterapia (инфузия), при niewydolności oddechowej (дыхательной недостаточности) — wentylacja mechaniczna (вентиляция); chirurgiczna stabilizacja żeber (хирургическая стабилизация рёбер) — выборочно. Tamponada serca: triada Becka (триада Бека) — hipotensja (гипотония), ściszone tony serca (глухие тоны), poszerzone żyły szyjne (набухшие шейные вены); tętno paradoksalne (парадоксальный пульс), objaw Kussmaula (признак Куссмауля); подтверждение — FAST (okno osierdziowe — перикардиальное окно). Лечение — хирургическое (torakotomia/sternotomia — торакотомия/стернотомия); perikardiocenteza (перикардиоцентез) — временная мера, если хирурга нет.",
                        focus: "Rana penetrująca (проникающая рана) в «опасной зоне» (между сосками и лопатками) + wstrząs (шок) + poszerzone żyły szyjne (набухшие вены) = tamponada serca (тампонада), а не krwiak opłucnej (гемоторакс). При wiotkiej klatce piersiowej (флотирующей клетке) ошибка — фиксировать сегмент тугой повязкой; решающее — analgezja (обезболивание) и oksygenacja (оксигенация)."
                    }
                ]
            },
            {
                title: "Вт: Травма живота, таза и уретры (Urazy brzucha i miednicy)",
                id: "chir-uraz-brzuch",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Chirurgia urazowa -> Urazy brzucha i miednicy",
                popup: { what: "Алгоритм при tępym i penetrującym urazie brzucha (тупой и проникающей травме живота), органосохраняющая тактика при urazie śledziony i wątroby (травме селезёнки и печени), krwawienie z miednicy (кровотечение из таза) и uraz cewki moczowej (травма уретры).", focus: "Решение принимает гемодинамика: niestabilny (нестабильный) + dodatni FAST (положительный FAST) — sala operacyjna (операционная), stabilny (стабильный) — TK z kontrastem (КТ с контрастом). Krew w ujściu zewnętrznym cewki moczowej (кровь у наружного отверстия уретры) — запрет cewnikowania (катетеризации). Szczepienia po splenektomii (вакцинация после спленэктомии).", reading: "Noszczyk «Chirurgia» -> Obrażenia brzucha, Obrażenia miednicy; ATLS (10. edycja) -> Abdominal and pelvic trauma; wytyczne WSES (śledziona, wątroba)." },
                subtopics: [
                    {
                        title: "Tępy i penetrujący uraz brzucha (тупая и проникающая травма живота)",
                        what: "Повреждение narządów jamy brzusznej (органов брюшной полости) и przestrzeni zaotrzewnowej (забрюшинного пространства) от удара, сдавления или ранящего снаряда.",
                        where: "ATLS (10. edycja) -> Abdominal and pelvic trauma; Noszczyk «Chirurgia» -> Obrażenia brzucha.",
                        study: "eFAST (osierdzie (перикард), zachyłek wątrobowo-nerkowy Morisona (печёночно-почечный карман Морисона), zachyłek śledzionowo-nerkowy (селезёночно-почечный карман), miednica mniejsza (малый таз) + jamy opłucnej (плевральные полости) и odma (пневмоторакс)) выполняется у постели на этапе C. Niestabilny pacjent (нестабильный пациент) с płynem (жидкостью) по FAST — laparotomia (лапаротомия) без TK (КТ). Stabilny (стабильный) — TK z kontrastem dożylnym (КТ с внутривенным контрастом) (оценка narządów miąższowych (паренхиматозных органов), przestrzeni zaotrzewnowej, aktywnego wynaczynienia kontrastu (активного контрастирования)). Rana postrzałowa (огнестрельная рана) живота с проникновением otrzewnej (брюшины) — как правило, laparotomia. Rana kłuta (колотая рана) передней стенки у стабильного без zapalenia otrzewnej (перитонита) — lokalna rewizja rany (локальная ревизия раны), серия осмотров, TK или laparoskopia (лапароскопия). Абсолютные показания к laparotomii: wstrząs (шок) без внешней причины, zapalenie otrzewnej, wytrzewienie (эвисцерация), wolny gaz (свободный газ), выделение крови из zgłębnika (зонда) или odbytnicy (прямой кишки) при ranie penetrującej (проникающей ране).",
                        focus: "FAST плохо видит narządy jamiste (полые органы), trzustkę (поджелудочную железу) и przestrzeń zaotrzewnową (забрюшинное пространство): ujemny FAST (отрицательный FAST) не исключает urazu jelita (травму кишки). Wypadniętą sieć (выпавший сальник) или jelito (кишку) в рану не вправляют — накрывают wilgotnym jałowym opatrunkiem (влажной стерильной повязкой)."
                    },
                    {
                        title: "Uraz śledziony (травма селезёнки)",
                        what: "Pęknięcie (разрыв) miąższu (паренхимы) или torebki śledziony (капсулы селезёнки), чаще всего при tępym urazie (тупой травме) левого подреберья и złamaniach (переломах) нижних левых рёбер.",
                        where: "Noszczyk «Chirurgia» -> Obrażenia śledziony; wytyczne WSES (uraz śledziony); ATLS (10. edycja).",
                        study: "Клиника: боль в lewym podżebrzu (левом подреберье), objaw Kehra (признак Кера — боль в левом плече из-за раздражения przepony (диафрагмы)), objawy utraty krwi (признаки кровопотери). Stopnie AAST (степени AAST) I–V по TK (КТ). Stabilny pacjent (стабильный пациент) — leczenie zachowawcze (консервативное ведение) (monitorowanie, seryjne oznaczenia Hb (серия Hb), постельный режим) независимо от степени, при aktywnym wynaczynieniu kontrastu (активном затекании контраста) — angioembolizacja (ангиоэмболизация). Niestabilny (нестабильный) — splenektomia (спленэктомия). После splenektomii — szczepienie (вакцинация) против Streptococcus pneumoniae, Neisseria meningitidis (MenACWY и MenB) и Haemophilus influenzae typu b, ежегодно grypa (грипп); при экстренной операции — не раньше 14 дней после неё (или перед выпиской), при плановой — не позже 2 недель до.",
                        focus: "Dwuczasowe pęknięcie śledziony (двухмоментный разрыв селезёнки): krwiak podtorebkowy (подкапсульная гематома) разрывается через дни или недели после травмы — пациент возвращается во wstrząsie (в шоке), «травма была неделю назад». Stabilnego pacjenta (стабильного пациента) с pęknięciem (разрывом) III–IV степени не оперируют автоматически."
                    },
                    {
                        title: "Uraz wątroby (травма печени)",
                        what: "Повреждение miąższu (паренхимы), naczyń (сосудов) или dróg żółciowych (желчных протоков) печени; печень — самый крупный narząd miąższowy (паренхиматозный орган) и часто повреждается как при tępym (тупой), так и при penetrującym (проникающей) urazie.",
                        where: "Noszczyk «Chirurgia» -> Obrażenia wątroby; wytyczne WSES (uraz wątroby).",
                        study: "У stabilnego pacjenta (стабильного пациента) большинство повреждений ведут zachowawczo (консервативно) (TK (КТ), monitorowanie, angioembolizacja (ангиоэмболизация) при aktywnym krwawieniu (активном кровотечении)). У niestabilnego (нестабильного) — операция по принципу damage control: tamponada wątroby serwetami (тампонада печени салфетками) (packing), контроль кровотечения, czasowe zamknięcie jamy brzusznej (временное закрытие живота) и повторная операция через 24–48 ч после коррекции «triady śmierci» («смертельной триады») (hipotermia (гипотермия), kwasica (ацидоз), koagulopatia (коагулопатия)). Manewr Pringle'a (манёвр Прингла) — zaciśnięcie więzadła wątrobowo-dwunastniczego (пережатие печёночно-двенадцатиперстной связки); если кровотечение продолжается — источник в żyłach wątrobowych (печёночных венах) или żyle głównej dolnej (нижней полой вене). Поздние осложнения: hemobilia (гемобилия) (триада: krwawienie z przewodu pokarmowego (кровотечение из ЖКТ), żółtaczka (желтуха), ból w prawym podżebrzu (боль в правом подреберье)), żółciak (билома), ropień (абсцесс).",
                        focus: "Damage control означает сознательно неполную первую операцию — это правильный ответ у пациента с hipotermią (гипотермией), kwasicą (ацидозом) и koagulopatią (коагулопатией), а не «radykalna resekcja wątroby» («радикальная резекция печени»)."
                    },
                    {
                        title: "Złamanie miednicy (травма таза)",
                        what: "Złamanie pierścienia miednicy (перелом тазового кольца) от высокоэнергетической травмы; niestabilne złamanie (нестабильный перелом) — источник masywnego krwawienia zaotrzewnowego (массивного забрюшинного кровотечения), чаще из splotów żylnych (венозных сплетений).",
                        where: "ATLS (10. edycja) -> Pelvic fractures; Noszczyk «Chirurgia» -> Obrażenia miednicy.",
                        study: "Оценка стабильности — RTG miednicy (RTG таза) в SOR (приёмном отделении); manewry uciskowe miednicy (пружинящие манёвры таза) не повторяют (усиливают кровотечение). При подозрении на niestabilne złamanie (нестабильный перелом) и wstrząsie (шоке) — pas stabilizujący miednicę (тазовый бандаж) на уровне krętarzy większych (больших вертелов), до снимков. Затем: при продолжающемся кровотечении — angioembolizacja (ангиоэмболизация) (źródło tętnicze — артериальный источник) или tamponada przedotrzewnowa miednicy (предбрюшинная тампонада таза), stabilizator zewnętrzny (внешний фиксатор). Złamania typu «otwartej książki» (переломы типа «открытой книги») увеличивают объём таза и utratę krwi (кровопотерю).",
                        focus: "Pas (бандаж) накладывают на уровне krętarzy większych (больших вертелов), не на talerze biodrowe (гребни подвздошных костей). При złamaniu miednicy (переломе таза) обязательно проверить cewkę moczową (уретру) и odbytnicę (прямую кишку) (badanie per rectum i przez pochwę — ректальное и вагинальное исследование)."
                    },
                    {
                        title: "Uraz cewki moczowej i pęcherza moczowego (травма уретры и мочевого пузыря)",
                        what: "Rozerwanie tylnej cewki moczowej (разрыв задней уретры) — чаще при złamaniu miednicy (переломе таза); przedniej (передней) — при падении kroczem (промежностью) на твёрдый предмет; pęknięcie pęcherza moczowego (разрыв мочевого пузыря) — при ударе по наполненному pęcherzowi или złamaniu miednicy.",
                        where: "Noszczyk «Chirurgia» -> Urazy układu moczowego; ATLS (10. edycja).",
                        study: "Признаки urazu cewki moczowej (травмы уретры): krew w ujściu zewnętrznym cewki (кровь у наружного отверстия уретры), zatrzymanie moczu (задержка мочи), krwiak krocza (гематома промежности) («motyl» — «бабочка»), wysoko położony lub niewyczuwalny gruczoł krokowy (высоко стоящая или неопределяемая простата) при badaniu per rectum (ректальном исследовании). При любом из них cewnik Foleya (катетер Фолея) НЕ вводят — сначала uretrografia wsteczna (ретроградная уретрография); для отведения мочи — cystostomia nadłonowa (надлобковая цистостомия). Pęknięcie pęcherza (разрыв пузыря) диагностируют cystografią TK (КТ-цистографией): wewnątrzotrzewnowe (внутрибрюшинный) — операция (zeszycie — ушивание), zewnątrzotrzewnowe (внебрюшинный) — чаще zachowawczo (консервативно), cewnik на 10–14 дней. Krwiomocz (гематурия) при травме — обязательна визуализация dróg moczowych (мочевых путей).",
                        focus: "Главная ловушка — «założyć cewnik (установить катетер) для контроля diurezy (диуреза)» у мужчины с złamaniem miednicy (переломом таза) и krwią w ujściu cewki (кровью у меатуса). Правильно — uretrografia (уретрография), затем cystostomia (цистостомия)."
                    }
                ]
            },
            {
                title: "Ср: Черепно-мозговая травма и травма позвоночника (Urazy czaszkowo-mózgowe)",
                id: "chir-uraz-glowa",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Chirurgia urazowa -> Urazy głowy i kręgosłupa",
                popup: { what: "Ocena świadomości w skali GCS (оценка сознания по GCS), krwiaki wewnątrzczaszkowe (внутричерепные гематомы), objawy wzmożonego ciśnienia śródczaszkowego (признаки повышения внутричерепного давления), wskazania do TK głowy i odcinka szyjnego (показания к КТ головы и шейного отдела), wstrząs rdzeniowy i neurogenny (спинальный и нейрогенный шок).", focus: "GCS ≤8 — intubacja (интубация); krwiak nadtwardówkowy (эпидуральная гематома) с przerwą jasną (светлым промежутком) против podtwardówkowego (субдуральной) у пожилого на lekach przeciwkrzepliwych (антикоагулянтах); Canadian CT Head Rule и NEXUS — кому снимок не нужен.", reading: "Noszczyk «Chirurgia» -> Obrażenia czaszkowo-mózgowe, Obrażenia kręgosłupa; ATLS (10. edycja) -> Head trauma, Spine trauma." },
                subtopics: [
                    {
                        title: "Skala śpiączki Glasgow, GCS (шкала комы Глазго)",
                        what: "Шкала оценки уровня świadomości (сознания) по трём ответам: otwieranie oczu (открывание глаз), odpowiedź słowna (речь), odpowiedź ruchowa (двигательная реакция); диапазон 3–15.",
                        where: "Noszczyk «Chirurgia» -> Obrażenia czaszkowo-mózgowe; ATLS (10. edycja) -> Head trauma.",
                        study: "Oczy (глаза) (E, 1–4): 4 спонтанно, 3 на звук/речь, 2 на давление (боль), 1 нет. Odpowiedź słowna (речь) (V, 1–5): 5 zorientowany (ориентирован), 4 splątany (спутан), 3 отдельные неуместные слова, 2 нечленораздельные звуки, 1 нет. Odpowiedź ruchowa (движения) (M, 1–6): 6 spełnia polecenia (выполняет команды), 5 lokalizuje ból (локализует боль), 4 cofanie kończyny (отдёргивание), 3 patologiczne zgięcie (патологическое сгибание) (odkorowanie — декортикация), 2 wyprost (разгибание) (odmóżdżenie — децеребрация), 1 нет. Тяжесть urazu czaszkowo-mózgowego (ЧМТ): lekki (лёгкая) 13–15, średni (средняя) 9–12, ciężki (тяжёлая) ≤8. GCS ≤8 — показание к intubacji (интубации) (ochrona dróg oddechowych — защита дыхательных путей). Решающий прогностический компонент — odpowiedź ruchowa. При wzmożonym ciśnieniu śródczaszkowym (повышении ВЧД): подъём головного конца на 30°, normokapnia (нормокапния) (PaCO₂ 35–40 mm Hg), normowolemia (нормоволемия), mannitol (маннитол) или hipertoniczny NaCl (гипертонический NaCl); hiperwentylacja (гипервентиляция) — только кратко как мост до операции.",
                        focus: "Минимальная сумма — 3, а не 0. Считают лучший ответ (лучшую конечность). Спросят о сумме по описанию: «открывает глаза на боль, издаёт звуки, отдёргивает руку» = 2+2+4 = 8 → intubacja (интубация)."
                    },
                    {
                        title: "Krwiak nadtwardówkowy vs podtwardówkowy (эпидуральная и субдуральная гематома)",
                        what: "Krwiak nadtwardówkowy (эпидуральная) — кровь между костью и oponą twardą (твёрдой мозговой оболочкой), обычно tętnicza (артериальная); podtwardówkowy (субдуральная) — под oponą twardą, из разорванных żył mostkowych (мостиковых вен).",
                        where: "Noszczyk «Chirurgia» -> Obrażenia czaszkowo-mózgowe -> Krwiaki wewnątrzczaszkowe.",
                        study: "Krwiak nadtwardówkowy: złamanie kości skroniowej (перелом височной кости) с разрывом tętnicy oponowej środkowej (средней оболочечной артерии), молодые; классика — кратковременная utrata przytomności (потеря сознания), przerwa jasna (светлый промежуток), затем быстрое ухудшение, poszerzenie źrenicy (расширение зрачка) на стороне krwiaka и przeciwstronny niedowład połowiczy (контралатеральный гемипарез); на TK (КТ) — dwuwypukła (soczewkowata) hiperdensyjna zmiana (двояковыпуклая линзовидная гиперденсная зона), не переходит линии szwów czaszkowych (швов). Krwiak podtwardówkowy: żyły mostkowe (мостиковые вены), пожилые, alkoholizm (алкоголизм), leki przeciwkrzepliwe (антикоагулянты), zanik mózgu (атрофия мозга); на TK — półksiężycowaty (серповидная), переходит линии szwów, но не через sierp mózgu (серп). Ostry (острая) — hiperdensyjny (гиперденсная), przewlekły (хроническая) — hipodensyjny (гиподенсная), симптомы нарастают недели (splątanie (спутанность), ból głowy (головная боль), «otępienie» — «деменция»). Лечение значимых krwiaków — экстренная kraniotomia (краниотомия); przewlekły — otwór trepanacyjny z drenażem (трепанационное отверстие с дренированием).",
                        focus: "Przerwa jasna (светлый промежуток) не патогномонична, но в тесте указывает на krwiak nadtwardówkowy (эпидуральную). Пожилой на warfarynie (варфарине) после «лёгкого» падения и splątania (спутанности) через 2–3 недели — przewlekły krwiak podtwardówkowy (хроническая субдуральная)."
                    },
                    {
                        title: "Triada Cushinga i wskazania do TK głowy — Canadian CT Head Rule (триада Кушинга и показания к КТ головы)",
                        what: "Triada Cushinga (триада Кушинга) — поздняя реакция на wzrost ciśnienia śródczaszkowego (повышение ВЧД) перед wgłobieniem (вклинением); Canadian CT Head Rule — правило отбора пациентов с lekkim urazem czaszkowo-mózgowym (лёгкой ЧМТ) на TK (КТ).",
                        where: "Noszczyk «Chirurgia» -> Obrażenia czaszkowo-mózgowe; ATLS (10. edycja) -> Head trauma.",
                        study: "Triada Cushinga: nadciśnienie tętnicze (артериальная гипертензия) (ze wzrostem ciśnienia tętna — с расширением пульсового давления), bradykardia (брадикардия), nieregularny oddech (нерегулярное дыхание). Правило применяется у пациентов ≥16 лет с GCS 13–15 и utratą przytomności (потерей сознания), niepamięcią (амнезией) или dezorientacją (дезориентацией). Высокий риск (нужна TK): GCS <15 через 2 ч после травмы; подозрение на złamanie otwarte lub z wgnieceniem (открытый или вдавленный перелом); objawy złamania podstawy czaszki (признаки перелома основания черепа) (objaw okularowy / oczy szopa (симптом очков), objaw Battle'a (симптом Баттла — кровоподтёк за ухом), krwiak jamy bębenkowej (гемотимпанум), płynotok nosowy lub uszny (ликворея из носа или уха)); wymioty (рвота) ≥2 раз; возраст ≥65 лет. Средний риск: niepamięć wsteczna (ретроградная амнезия) ≥30 мин, опасный механизм (пешеход, сбитый автомобилем; выброс из машины; падение с высоты >1 м или 5 ступеней).",
                        focus: "Пациенты на lekach przeciwkrzepliwych (антикоагулянтах) были исключены из исходного правила — им TK (КТ) показана практически всегда. Bradykardia (брадикардия) + nadciśnienie (гипертония) при urazie czaszkowo-mózgowym (ЧМТ) — не «вагусная реакция», а угроза wgłobienia (вклинения)."
                    },
                    {
                        title: "Uraz kręgosłupa szyjnego, NEXUS (травма шейного отдела позвоночника)",
                        what: "Повреждение kręgów (позвонков) или więzadeł (связок) шейного отдела с риском uszkodzenia rdzenia kręgowego (повреждения спинного мозга); NEXUS — клинические критерии, позволяющие не делать визуализацию.",
                        where: "ATLS (10. edycja) -> Spine and spinal cord trauma; Noszczyk «Chirurgia» -> Obrażenia kręgosłupa.",
                        study: "NEXUS: визуализация не нужна, если выполнены все 5 условий — нет tkliwości w linii pośrodkowej (болезненности по средней линии) сзади, нет ogniskowych objawów neurologicznych (очагового неврологического дефицита), нормальный stan świadomości (уровень сознания), нет zatrucia (интоксикации), нет bolesnego urazu odwracającego uwagę (болезненной отвлекающей травмы). Альтернатива — Canadian C-spine Rule (высокий риск: возраст ≥65, опасный механизм, parestezje (парестезии) в конечностях). Метод выбора у взрослых — TK odcinka szyjnego (КТ шейного отдела); MR (МРТ) — при deficycie neurologicznym (неврологическом дефиците) или подозрении на uraz więzadłowy (связочную травму). Unieruchomienie (иммобилизация): sztywny kołnierz (жёсткий воротник) и укладка до исключения травмы; deska ortopedyczna (длинная доска) — только для транспорта. Рутинное введение metyloprednizolonu (метилпреднизолона) при urazie rdzenia kręgowego (травме спинного мозга) не рекомендуется.",
                        focus: "Пьяный пациент без жалоб на шею не «очищается» клинически — нарушен критерий NEXUS, нужна визуализация."
                    },
                    {
                        title: "Wstrząs rdzeniowy vs neurogenny (спинальный и нейрогенный шок)",
                        what: "Wstrząs rdzeniowy (спинальный шок) — временная утрата всех odruchów (рефлексов) и napięcia (тонуса) ниже уровня uszkodzenia rdzenia kręgowego (повреждения спинного мозга); wstrząs neurogenny (нейрогенный) — гемодинамический wstrząs от утраты unerwienia współczulnego (симпатической иннервации) при травме выше Th6.",
                        where: "ATLS (10. edycja) -> Spine and spinal cord trauma; Noszczyk «Chirurgia» -> Obrażenia rdzenia kręgowego.",
                        study: "Wstrząs rdzeniowy — неврологическое понятие: porażenie wiotkie (вялый паралич), arefleksja (арефлексия), длится от часов до недель; окончание — возвращение odruchu opuszkowo-jamistego (бульбокавернозного рефлекса). Wstrząs neurogenny — гемодинамическое: hipotensja (гипотония) + bradykardia (брадикардия), тёплая сухая кожа (wazodylatacja — вазодилатация). Лечение: płynoterapia (инфузия), wazopresory (вазопрессоры) (noradrenalina — норадреналин), при bradykardii — atropina (атропин). У пострадавшего с hipotensją и urazem kręgosłupa (травмой позвоночника) сначала исключают krwawienie (кровотечение).",
                        focus: "Hipotensja (гипотония) с tachykardią (тахикардией) и холодной кожей у пострадавшего со złamaniem kręgosłupa (переломом позвоночника) — это utrata krwi (кровопотеря), а не wstrząs neurogenny (нейрогенный шок). Wstrząs neurogenny — единственный вид wstrząsu (шока) с bradykardią (брадикардией)."
                    }
                ]
            },
            {
                title: "Чт: Ожоги, электротравма, холодовая травма и укусы (Oparzenia, odmrożenia, pogryzienia)",
                id: "chir-oparzenia",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Chirurgia urazowa -> Oparzenia i urazy termiczne",
                popup: { what: "Ocena głębokości i rozległości oparzenia (оценка глубины и площади ожога), płynoterapia (инфузионная терапия), oparzenie dróg oddechowych (ингаляционная травма), porażenie prądem (электротравма), odmrożenia (отморожения), hipotermia (гипотермия), pogryzienia (укусы) и profilaktyka wścieklizny (профилактика бешенства).", focus: "Польская klasyfikacja głębokości (классификация глубины) (I, IIa, IIb, III); площадь по regule dziewiątek (правилу девяток) без oparzeń I stopnia (ожогов I степени); wzór Parkland (формула Паркланда) и время отсчёта — od momentu oparzenia (от момента ожога); wczesna intubacja (ранняя интубация) при oparzeniu dróg oddechowych (ингаляционной травме).", reading: "Noszczyk «Chirurgia» -> Oparzenia, Odmrożenia; ATLS (10. edycja) -> Thermal injuries; ERC (Resuscytacja w szczególnych okolicznościach — hipotermia); PZH/GIS — profilaktyka wścieklizny." },
                subtopics: [
                    {
                        title: "Klasyfikacja głębokości oparzeń, reguła dziewiątek Wallace'a (глубина и площадь ожога)",
                        what: "Польская klasyfikacja (классификация) делит oparzenia (ожоги) по глубине на I, IIa, IIb и III stopień (степень); площадь выражают в процентах поверхности тела (%TBSA, % powierzchni ciała).",
                        where: "Noszczyk «Chirurgia» -> Oparzenia -> Ocena głębokości i rozległości.",
                        study: "I — naskórek (эпидермис): rumień (эритема), боль, без pęcherzy (пузырей), заживает за несколько дней. IIa (powierzchowne) — powierzchowna warstwa skóry właściwej (поверхностная дерма): pęcherze (пузыри), розовое влажное дно, сильная боль, заживает примерно за 2 недели без blizny (рубца). IIb (głębokie) — głęboka warstwa skóry właściwej (глубокая дерма): бледное дно, czucie (чувствительность) снижено, заживает >3 недель с blizną, часто требует przeszczepu skóry (пересадки кожи). III — вся толщина кожи: белый или коричневый плотный strup (струп), безболезненный, только wycięcie (иссечение) и przeszczep. В части польских источников выделяют IV степень (zwęglenie (обугливание), mięśnie (мышцы), kość (кость)). Reguła dziewiątek (правило девяток) у взрослых: голова 9%, каждая рука 9%, передняя поверхность туловища 18%, задняя 18%, каждая нога 18%, krocze (промежность) 1%. Ладонь пациента с пальцами ≈1%. У детей голова относительно больше (у младенца ≈18%), ноги меньше — используют tabelę Lunda-Browdera (таблицу Лунда-Браудера).",
                        focus: "Oparzenia I stopnia (ожоги I степени) НЕ включают в %TBSA для расчёта płynów (жидкости). Bezbolesność oparzenia (безболезненность ожога) — признак глубины (III), а не лёгкости."
                    },
                    {
                        title: "Wzór Parkland i wskazania do leczenia w ośrodku oparzeniowym (инфузия по Паркланду, показания к ожоговому центру)",
                        what: "Расчёт объёма krystaloidów (кристаллоидов) в первые 24 ч у пациента с rozległym oparzeniem (обширным ожогом).",
                        where: "Noszczyk «Chirurgia» -> Oparzenia -> Leczenie wstrząsu oparzeniowego; ATLS (10. edycja) -> Thermal injuries.",
                        study: "Wzór Parkland (формула Паркланда): 4 мл × масса тела (кг) × %TBSA (II и III степени) płynu Ringera z mleczanami (раствора Рингера лактата) за 24 ч; половина — за первые 8 ч, отсчитываемые od momentu oparzenia (от момента ожога), вторая половина — за следующие 16 ч. ATLS 10 рекомендует стартовать с 2 мл × кг × %TBSA у взрослых, 3 мл у детей, 4 мл при porażeniu prądem (электротравме), затем титровать по diurezie (диурезу). Целевая diureza: 0,5 мл/кг/ч у взрослых, 1 мл/кг/ч у детей; при porażeniu prądem с mioglobinurią (миоглобинурией) — выше (≈1–1,5 мл/кг/ч до осветления мочи). Resuscytacja płynowa (инфузионная реанимация) обычно нужна при >20% TBSA у взрослого и >10% у ребёнка (пороги в источниках 15–20% / 10%). Направление в ośrodek leczenia oparzeń (ожоговый центр): II степени >10% TBSA; любые oparzenia III stopnia; oparzenia twarzy, rąk, stóp, krocza, narządów płciowych, dużych stawów (лица, кистей, стоп, промежности, половых органов, крупных суставов); elektryczne (электрические), chemiczne (химические), oparzenie dróg oddechowych (ингаляционная травма); oparzenia okrężne (циркулярные ожоги); тяжёлые сопутствующие болезни, дети (польские критерии сверить с актуальными).",
                        focus: "Ловушка по времени: если пациент поступил через 2 ч после oparzenia (ожога), первую половину объёма вводят за оставшиеся 6 ч. Wzór (формула) — ориентир, решает diureza (диурез). Okrężne oparzenie III stopnia (циркулярный ожог III степени) конечности или груди — escharotomia (эсхаротомия)."
                    },
                    {
                        title: "Oparzenie dróg oddechowych, porażenie prądem (ингаляционная травма и электротравма)",
                        what: "Oparzenie dróg oddechowych (ингаляционная травма) — термическое и химическое поражение dróg oddechowych (дыхательных путей) и zatrucie tlenkiem węgla (отравление угарным газом) или cyjankami (цианидами); porażenie prądem (электротравма) — поражение тканей током с глубоким повреждением под малыми кожными ранами.",
                        where: "Noszczyk «Chirurgia» -> Oparzenia dróg oddechowych, Oparzenia elektryczne; ATLS (10. edycja).",
                        study: "Подозрение на oparzenie dróg oddechowych: пожар в замкнутом помещении, oparzenia twarzy (ожоги лица), опалённые волосы в носу, sadza (копоть) во рту и plwocinie (мокроте), chrypka (осиплость), stridor (стридор). Действие — wczesna intubacja (ранняя интубация) до развития obrzęku (отёка). Tlenek węgla (угарный газ): pulsoksymetr (пульсоксиметр) показывает ложно нормальную SpO₂, нужен уровень COHb; лечение — 100% tlen (кислород), при тяжёлом zatruciu (отравлении) — tlenoterapia hiperbaryczna (гипербарическая оксигенация). Cyjanki (цианиды) (горение пластмасс, тяжёлая kwasica mleczanowa (лактат-ацидоз)) — hydroksokobalamina (гидроксокобаламин). Porażenie prądem (электротравма): поражение «góry lodowej» («айсберга») — mięśnie (мышцы) и nerwy (нервы) повреждены больше, чем видно на коже; rabdomioliza (рабдомиолиз) и mioglobinuria (миоглобинурия) с риском ostrego uszkodzenia nerek (острого повреждения почек); zespół ciasnoty przedziałów powięziowych (компартмент-синдром); zaburzenia rytmu (аритмии) (prąd zmienny (переменный ток) — чаще VF — migotanie komór (ФЖ), piorun (молния) и prąd stały (постоянный ток) — asystolia (асистолия)) — monitorowanie EKG (мониторинг ЭКГ).",
                        focus: "Нормальная SpO₂ у пострадавшего из пожара не исключает zatrucia CO (отравления CO). При porażeniu prądem (электротравме) объём płynoterapii (инфузии) нельзя считать по площади кожного oparzenia (ожога)."
                    },
                    {
                        title: "Odmrożenia, hipotermia (отморожения и гипотермия)",
                        what: "Odmrożenie (отморожение) — локальное повреждение тканей холодом; hipotermia (гипотермия) — снижение temperatury głębokiej ciała (температуры ядра тела) ниже 35 °C.",
                        where: "Noszczyk «Chirurgia» -> Odmrożenia; ERC 2021 -> Resuscytacja w szczególnych okolicznościach -> Hipotermia (сверить с ERC 2025).",
                        study: "Odmrożenia (отморожения): быстрое ogrzewanie (согревание) в воде 37–39 °C, не растирать, не согревать при риске повторного замерзания; analgezja (обезболивание); demarkacja martwicy (демаркация некроза) занимает недели, поэтому amputacja (ампутация) откладывается (кроме zakażenia (инфекции) и zgorzeli wilgotnej (влажной гангрены)); при тяжёлых odmrożeniach в первые часы — iloprost (илопрост) или tromboliza (тромболизис) в специализированном центре. Hipotermia (классическое деление): lekka (лёгкая) 35–32 °C (drżenie mięśniowe (дрожь), сознание сохранено), umiarkowana (умеренная) 32–28 °C (drżenie исчезает, splątanie (спутанность)), ciężka (тяжёлая) <28 °C (śpiączka (кома), риск VF — migotanie komór (ФЖ)). По ERC 2021 риск zatrzymania krążenia (остановки кровообращения) появляется ниже 32 °C и высок ниже 28 °C; порог «<24 °C» — из старой швейцарской классификации (стадия HT IV). EKG (ЭКГ): fala Osborna (волна Осборна) (J), bradykardia (брадикардия). Zatrzymanie krążenia w hipotermii (ERC): <30 °C — adrenalina (адреналин) не вводят, до 3 попыток defibrylacji (дефибрилляции); 30–35 °C — adrenalina с удвоенным интервалом. Нестабильного или с zatrzymaniem krążenia — ogrzewanie pozaustrojowe (экстракорпоральное согревание) (ECLS).",
                        focus: "«Никто не мёртв, пока не тёплый и мёртвый» — resuscytację (реанимацию) при hipotermii продолжают долго. Odmrożenie (отморожение) не согревают у костра и растиранием снегом."
                    },
                    {
                        title: "Pogryzienia, wścieklizna (укусы животных и бешенство)",
                        what: "Rany kąsane (укушенные раны) с высоким риском zakażenia (инфекции) и риском передачи wirusa wścieklizny (вируса бешенства).",
                        where: "Noszczyk «Chirurgia» -> Rany pogryzione; Szczeklik -> Choroby zakaźne -> Wścieklizna; NIZP PZH / GIS — profilaktyka poekspozycyjna wścieklizny.",
                        study: "Ranę (рану) обильно промывают водой с мылом не менее 15 мин. Rany ręki (раны кисти) и głębokie rany kłute (глубокие проколы) не zszywa się pierwotnie (не ушивают первично), на лице — можно ушить. Antybiotykoprofilaktyka (антибиотикопрофилактика) — amoksycylina z kwasem klawulanowym (амоксициллин с клавулановой кислотой): pogryzienia przez koty (укусы кошек), кисти, глубокие, у лиц с immunosupresją (иммуносупрессией) и asplenią (аспленией). Возбудители: Pasteurella multocida (кошки, собаки), Capnocytophaga canimorsus (sepsa (сепсис) у лиц после splenektomii (спленэктомии)), при укусе человека — Eikenella corrodens («кулачный укус» над stawem śródręczno-paliczkowym (пястно-фаланговым суставом)). Profilaktyka tężca (профилактика столбняка) по схеме. Wścieklizna (бешенство), категории WHO (ВОЗ): I (контакт с неповреждённой кожей) — не нужна; II (покусывание открытой кожи, царапины без крови) — szczepionka (вакцина); III (укусы и царапины через кожу, ослюнение błon śluzowych (слизистых) или повреждённой кожи, контакт с nietoperzem (летучей мышью)) — szczepionka + immunoglobulina przeciwko wściekliźnie (антирабический иммуноглобулин) (20 МЕ/кг, максимум — инфильтрация вокруг раны). Схемы szczepienia (вакцинации): Essen 5 доз (0, 3, 7, 14, 28 день) — классическая в Польше; WHO допускает 4 дозы (0, 3, 7, 14–28) и Zagrzeb (Загреб) 2-1-1 (0, 7, 21) — сверить действующую польскую схему. Ранее szczepionym (вакцинированным) — 2 дозы (0, 3) без immunoglobuliny. Собаку, укусившую человека, в Польше направляют на obserwację weterynaryjną (ветеринарное наблюдение) на 15 дней от укуса (осмотры в 0, 5, 10 и 15 день; возможно продление до 21 дня).",
                        focus: "Для profilaktyki poekspozycyjnej wścieklizny (постконтактной профилактики бешенства) нет «слишком позднего» срока — её начинают даже через недели. Резервуар в Польше — прежде всего lisy (лисы) и nietoperze (летучие мыши)."
                    }
                ]
            },
            {
                title: "Пт: Хирургические инфекции мягких тканей (Zakażenia tkanek miękkich)",
                id: "chir-zakazenia-tkanek",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Zakażenia chirurgiczne -> Zakażenia skóry i tkanek miękkich",
                popup: { what: "Ograniczone i rozlane zakażenia ropne (ограниченные и разлитые гнойные инфекции), zakażenia palców (инфекции пальцев), zakażenia martwicze (некротизирующие инфекции), róża (рожа), torbiel włosowa (пилонидальная киста) и trądzik odwrócony (гидраденит).", focus: "Ropa (гной) — nacięcie i drenaż (разрез и дренирование), antybiotyk (антибиотик) вторичен; martwicze zapalenie powięzi (некротизирующий фасциит) — экстренное radykalne opracowanie chirurgiczne (радикальная хирургическая обработка), LRINEC не исключает диагноз; czyrak (фурункул) в треугольнике лица не выдавливают.", reading: "Noszczyk «Chirurgia» -> Zakażenia chirurgiczne, Zakażenia ręki; LEK w pigułce -> Chirurgia -> Zakażenia." },
                subtopics: [
                    {
                        title: "Ropień, ropowica, czyrak, czyrak mnogi (абсцесс, флегмона, фурункул и карбункул)",
                        what: "Ropień (абсцесс) — ограниченное torebką (капсулой) скопление ropy (гноя); ropowica (флегмона) — разлитое ropne zapalenie (гнойное воспаление), распространяющееся по клетчаточным пространствам; czyrak (фурункул) — ropne zapalenie mieszka włosowego (гнойное воспаление волосяного фолликула), czyrak mnogi (карбункул) — слияние нескольких czyraków.",
                        where: "Noszczyk «Chirurgia» -> Zakażenia chirurgiczne -> Zakażenia ropne.",
                        study: "Ropień: chełbotanie (флюктуация); лечение — nacięcie i drenaż (разрез и дренирование), antybiotyk (антибиотик) добавляют при zapaleniu tkanki łącznej (целлюлите) вокруг, objawach ogólnoustrojowych (системных симптомах), immunosupresji (иммуносупрессии), локализации на лице или кисти. Ropowica (флегмона) — широкие nacięcia (разрезы), drenaż и antybiotyk i.v. Czyrak i czyrak mnogi (фурункул и карбункул) — Staphylococcus aureus, фактор риска — cukrzyca (сахарный диабет). В «опасном треугольнике» лица (от углов рта до корня носа) czyrak не выдавливают: через żyłę kątową i żyły oczne (угловую и глазные вены) инфекция достигает zatoki jamistej (пещеристого синуса) — zakrzepica zatoki jamistej (тромбоз пещеристого синуса): obrzęk powiek (отёк век), wytrzeszcz (экзофтальм), oftalmoplegia (офтальмоплегия), gorączka (лихорадка). Лечение czyraka twarzy (фурункула лица) — antybiotyk, наблюдение, без манипуляций.",
                        focus: "Chełboczący ropień (флюктуирующий абсцесс) нельзя лечить только antybiotykiem (антибиотиком). Nawracające czyraki (рецидивирующие фурункулы) — проверить glikemię (гликемию)."
                    },
                    {
                        title: "Zastrzał, zanokcica (панариций и паронихия)",
                        what: "Zastrzał (панариций) — ropne zapalenie (гнойное воспаление) ладонной поверхности пальца; zanokcica (паронихия) — воспаление wału paznokciowego (околоногтевого валика).",
                        where: "Noszczyk «Chirurgia» -> Zakażenia ręki.",
                        study: "Виды zastrzału по глубине: skórny (кожный), podskórny (подкожный), ścięgnisty (сухожильный — ropne zapalenie pochewki ścięgna (гнойный тендовагинит)), kostny (костный), stawowy (суставной); отдельно — podpaznokciowy (подногтевой). Objawy Kanavela (признаки Канавела) при ścięgnistym: palec w półzgięciu (палец в полусогнутом положении), wrzecionowaty obrzęk (веретенообразный отёк), боль при biernym prostowaniu (пассивном разгибании), tkliwość (болезненность) по ходу pochewki ścięgna (влагалища сухожилия). Zastrzał ścięgnisty (сухожильный панариций) — экстренная операция (nacięcie i przepłukanie pochewki — вскрытие и промывание влагалища): из I и V пальцев инфекция по kaletce promieniowej i łokciowej (лучевой и локтевой сумкам) распространяется на ладонь — ropowica typu V (флегмона в форме буквы V). Zanokcica ostra (острая паронихия) — S. aureus, nacięcie (разрез) у валика, иногда удаление части płytki paznokciowej (ногтя); przewlekła (хроническая) — Candida у людей с «мокрой» работой. Обезболивание — znieczulenie przewodowe sposobem Oberst (проводниковая анестезия по Оберсту).",
                        focus: "Zastrzał ścięgnisty (сухожильный панариций) не лечат консервативно «до созревания». В старых вопросах znieczulenie palca (анестезия пальца) — без adrenaliny (адреналина); современные данные считают разведённый adrenalinę безопасным, но в тесте ожидают «без adrenaliny»."
                    },
                    {
                        title: "Martwicze zapalenie powięzi (некротизирующий фасциит)",
                        what: "Быстро распространяющаяся zakażenie powięzi (инфекция фасций) и tkanki podskórnej (подкожной клетчатки) с martwicą (некрозом), sepsą (сепсисом) и высокой летальностью.",
                        where: "Noszczyk «Chirurgia» -> Zakażenia martwicze tkanek miękkich; wytyczne WSES (zakażenia tkanek miękkich).",
                        study: "Typ I — wielobakteryjny (полимикробный) (cukrzyca (диабет), krocze (промежность): zgorzel Fourniera (гангрена Фурнье)); typ II — Streptococcus pyogenes, иногда с S. aureus. Ранний признак — боль, несоразмерная видимым изменениям; затем obrzęk (отёк) за пределами rumienia (эритемы), pęcherze (пузыри) с тёмным содержимым, trzeszczenia (крепитация), znieczulenie skóry (онемение кожи), «płyn jak pomyje» («жидкость цвета помоев»), wstrząs septyczny (септический шок). LRINEC: CRP ≥150 мг/л (4 балла), leukocyty (лейкоциты) 15–25 (1) или >25 тыс/мкл (2), Hb 11–13,5 (1) или <11 г/дл (2), Na <135 ммоль/л (2), kreatynina (креатинин) >141 мкмоль/л (1,6 мг/дл) (2), glukoza (глюкоза) >10 ммоль/л (180 мг/дл) (1); ≥6 — подозрение, ≥8 — высокий риск. Лечение: экстренное radykalne opracowanie chirurgiczne (радикальная хирургическая обработка) до жизнеспособных тканей, повторные rewizje (ревизии) каждые 24 ч; antybiotyki o szerokim spektrum (антибиотики широкого спектра) (напр. piperacylina/tazobaktam (пиперациллин/тазобактам) или karbapenem (карбапенем)) + klindamycyna (клиндамицин) (подавляет синтез токсинов) ± lek przeciw MRSA (препарат против MRSA).",
                        focus: "Низкий LRINEC не исключает martwiczego zapalenia powięzi (фасциита) — решает клиника и rewizja (ревизия). Ожидание TK (КТ) или «эффекта antybiotyku (антибиотика)» — ошибка; правильный ответ — операция немедленно."
                    },
                    {
                        title: "Zgorzel gazowa, róża (газовая гангрена и рожа)",
                        what: "Zgorzel gazowa (газовая гангрена) — martwica mięśni wywołana przez Clostridium (клостридиальный мионекроз); róża (рожа) — поверхностная paciorkowcowa (стрептококковая) инфекция skóry właściwej (дермы) и naczyń chłonnych (лимфатических сосудов).",
                        where: "Noszczyk «Chirurgia» -> Zakażenia beztlenowe -> Zgorzel gazowa; Szczeklik -> Choroby zakaźne -> Róża.",
                        study: "Zgorzel gazowa: Clostridium perfringens, глубокие загрязнённые раны (zmiażdżenie (размозжение), rany postrzałowe (огнестрельные)), wylęganie (инкубация) от часов до 3 дней; сильная боль, obrzęk (отёк), trzeszczenia (крепитация), бронзовая кожа, gaz w mięśniach (газ в мышцах) на RTG, tachykardia (тахикардия), hemoliza (гемолиз), wstrząs (шок). Лечение: экстренное wycięcie (иссечение) всех martwiczych mięśni (некротических мышц) (вплоть до amputacji (ампутации)), penicylina (пенициллин) + klindamycyna (клиндамицин), tlenoterapia hiperbaryczna (гипербарическая оксигенация) — как дополнение, не вместо операции. Róża (рожа): S. pyogenes (paciorkowiec grupy A — стрептококк группы A), чаще podudzie (голень) и twarz (лицо); резко очерченная, приподнятая, ярко-красная зона, высокая gorączka z dreszczami (лихорадка с ознобом); wrota zakażenia (входные ворота) — трещины при grzybicy stóp (грибке стоп). Лечение — penicylina (при аллергии — klindamycyna); nawroty (рецидивы) ведут к obrzękowi limfatycznemu (лимфедеме) — лечить grzybicę stóp (микоз стоп). Отличие от cellulitis (zapalenie tkanki łącznej — целлюлит): cellulitis глубже, границы нечёткие, возбудители — paciorkowce (стрептококки) и S. aureus.",
                        focus: "Tlenoterapia hiperbaryczna (гипербарическая оксигенация) — не первое действие при zgorzeli gazowej (газовой гангрене). Róża (рожа) с резкой границей лечится penicyliną (пенициллином), а не nacięciem (вскрытием)."
                    },
                    {
                        title: "Torbiel włosowa, trądzik odwrócony (пилонидальная киста и гнойный гидраденит)",
                        what: "Torbiel włosowa (пилонидальная киста) — хроническое воспаление в okolicy krzyżowo-guzicznej (крестцово-копчиковой области) вокруг вросших волос; trądzik odwrócony (гидраденит) — хроническое воспаление okolic z gruczołami apokrynowymi (апокриновых зон) (pachy, pachwiny, krocze — подмышки, пах, промежность).",
                        where: "Noszczyk «Chirurgia» -> Zatoka włosowa; Szczeklik -> Dermatologia (hidradenitis suppurativa).",
                        study: "Torbiel włosowa (torbiel włosowa / zatoka pilonidalna): молодые мужчины с густым оволосением, сидячая работа; ostry ropień (острый абсцесс) — nacięcie i drenaż (разрез и дренирование) (nacięcie в стороне от linii pośrodkowej — средней линии); przewlekła lub nawrotowa (хроническая или рецидивирующая) — wycięcie (иссечение) с otwartym leczeniem rany (открытым ведением раны) либо zamknięciem poza linią pośrodkową (закрытием вне средней линии) (Karydakis, Limberg), depilacja (удаление волос) в области. Trądzik odwrócony (hidradenitis suppurativa — гидраденит): bolesne guzki (болезненные узлы), ropnie (абсцессы), przetoki (свищевые ходы), blizny (рубцы); stopnie Hurleya (стадии Hurley) I–III; факторы — palenie (курение), otyłość (ожирение). Лечение: отказ от курения, снижение веса, tetracykliny (тетрациклины), klindamycyna z ryfampicyną (клиндамицин с рифампицином), adalimumab (адалимумаб) при среднетяжёлой и тяжёлой форме; в стадии III — szerokie wycięcie (широкое иссечение) поражённой кожи.",
                        focus: "Trądzik odwrócony (гидраденит) не лечится повторными nacięciami (разрезами) отдельных ropni (абсцессов) — это ведёт к nawrotom (рецидивам); при стадии Hurley III правильный ответ — szerokie wycięcie (широкое иссечение)."
                    }
                ]
            },
            {
                title: "Сб: Тест по хирургии IV (травма и неотложная хирургия)",
                id: "chir-4-test",
                time: "1.5 ч",
                lepolekPath: "Testy -> Chirurgia urazowa i stany nagłe (40 pytań CEM)",
                popup: { what: "Контрольный тест по urazom (травме), oparzeniom (ожогам) и zakażeniom chirurgicznym (хирургическим инфекциям).", focus: "Числовые пороги недели: klasy wstrząsu (классы шока), progi torakotomii (пороги торакотомии), GCS, reguła dziewiątek (правило девяток), wzór Parkland (Паркланд), LRINEC.", reading: "Личные заметки недели; ATLS (10. edycja) — таблицы." },
                subtopics: [
                    {
                        title: "Test 40 pytań CEM (решение 40 вопросов CEM)",
                        what: "Тест по разделам urazów klatki piersiowej, brzucha i głowy (травматологии груди, живота, головы), oparzeń (ожогов) и zakażeń tkanek miękkich (инфекций мягких тканей).",
                        where: "LEPOLEK -> Testy -> Chirurgia urazowa.",
                        study: "Режим экзамена: 40 вопросов за 60 мин без подсказок. Отмечать вопросы, где выбор зависел от версии рекомендаций (ATLS 9 vs 10, miejsce odbarczenia (место декомпрессии), стартовая формула płynoterapii (инфузии) при oparzeniach (ожогах)).",
                        focus: "Проверить, что в вопросах «первое действие» ответ соответствует последовательности xABCDE."
                    },
                    {
                        title: "Analiza błędów (разбор ошибок)",
                        what: "Разбор неверных ответов с записью причины: незнание факта, неверная последовательность действий, ловушка формулировки.",
                        where: "Объяснения LEPOLEK; Noszczyk «Chirurgia».",
                        study: "Каждую ошибку свести к одной строке «ситуация -> правильное действие -> почему не другое». Типичные ошибки недели: RTG перед odbarczeniem (декомпрессией), cewnik (катетер) при krwi w ujściu cewki moczowej (крови у меатуса), TK (КТ) у niestabilnego (нестабильного), выдавливание czyraka twarzy (фурункула лица), antybiotyk (антибиотик) вместо nacięcia (разреза).",
                        focus: "Ошибки в последовательности действий записать в Anki отдельно от ошибок в числах."
                    },
                    {
                        title: "Liczby do zapamiętania (таблица чисел недели)",
                        what: "Сводная таблица порогов и доз травматологической недели.",
                        where: "Личные заметки.",
                        study: "Wstrząs (шок): <15 / 15–30 / 30–40 / >40% objętości krwi krążącej (ОЦК); HR (ЧСС) <100 / 100–120 / 120–140 / >140. Kwas traneksamowy (транексамовая кислота) 1 г + 1 г, ≤3 ч. Ciśnienie skurczowe (САД) 80–90 при hipotensji permisywnej (пермиссивной гипотензии). Krwiak opłucnej (гемоторакс): 1500 мл / 200 мл/ч. GCS ≤8 — intubacja (интубация); 13–15 / 9–12 / ≤8. Reguła dziewiątek (правило девяток): 9 / 9 / 18 / 18 / 18 / 1. Parkland 4 мл × кг × %TBSA, половина за 8 ч od oparzenia (от ожога); diureza (диурез) 0,5 / 1 мл/кг/ч. Hipotermia (гипотермия) 35 / 32 / 28 / 24 °C. LRINEC ≥6 / ≥8.",
                        focus: "Отдельно выучить, какие числа изменились в ATLS 10 (miejsce odbarczenia (место декомпрессии), 2 мл вместо 4 мл при oparzeniach (ожогах)) — в старых вопросах CEM ответы по прежним версиям."
                    }
                ]
            }
        ]
    },
    {
        key: "chir-5",
        subject: "chirurgia",
        title: "Хирургия V — Органная хирургия и периоперационный период",
        days: [
            {
                title: "Пн: Хирургия пищевода (Choroby przełyku)",
                id: "chir-przelyk",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Chirurgia przewodu pokarmowego -> Przełyk",
                popup: { what: "Zaburzenia motoryki (нарушения моторики) и uchyłki przełyku (дивертикулы пищевода), pęknięcia (разрывы), rak przełyku (рак), przepukliny rozworu przełykowego (грыжи пищеводного отверстия), operacje antyrefluksowe (антирефлюксные операции), ciała obce (инородные тела) и oparzenia żrące (химические ожоги).", focus: "Achalazja (ахалазия) — dysfagia (дисфагия) и к твёрдой, и к жидкой пище с начала; перед лечением обязательна endoskopia (эндоскопия) (pseudoachalazja при raku wpustu — раке кардии). Zespół Boerhaavego (Бурхаве) — kontrast rozpuszczalny w wodzie (водорастворимый контраст), не bar (барий). Bateria guzikowa (батарейка) в пищеводе — pilna endoskopia.", reading: "Noszczyk «Chirurgia» -> Przełyk; Szczeklik -> Gastroenterologia -> Choroby przełyku; wytyczne ESGE (ciała obce)." },
                subtopics: [
                    {
                        title: "Achalazja wpustu (ахалазия кардии)",
                        what: "Первичное zaburzenie motoryki przełyku (нарушение моторики пищевода) из-за утраты тормозных нейронов splotu mięśniowego (мышечного сплетения): dolny zwieracz przełyku (нижний сфинктер) не расслабляется при глотании, perystaltyka (перистальтика) отсутствует.",
                        where: "Szczeklik -> Gastroenterologia -> Achalazja; Noszczyk «Chirurgia» -> Przełyk -> Achalazja.",
                        study: "Клиника: dysfagia (дисфагия) к твёрдой и жидкой пище одновременно с начала болезни, regurgitacja (регургитация) непереваренной пищей, ночной кашель и aspiracja (аспирация), похудение. Диагностика: manometria wysokiej rozdzielczości (манометрия высокого разрешения) — золотой стандарт (неполное расслабление LES (НПС) + отсутствие perystaltyki; klasyfikacja chicagowska (чикагская классификация) — типы I, II, III); badanie kontrastowe RTG (контрастная рентгенография) — расширенный пищевод, сужение в виде «dziób ptaka» (птичий клюв); endoskopia (эндоскопия) — обязательна для исключения raka wpustu (рака кардии) (pseudoachalazja). Лечение: laparoskopowa miotomia Hellera (миотомия по Геллеру) с częściową fundoplikacją (частичной фундопликацией) (Dor или Toupet), POEM (эндоскопическая миотомия; предпочтительна при типе III), rozszerzanie pneumatyczne (пневматическая дилатация); toksyna botulinowa (ботулотоксин) — у пациентов, не подходящих для процедур. Отдалённый риск — rak płaskonabłonkowy przełyku (плоскоклеточный рак пищевода).",
                        focus: "Dysfagia (дисфагия) сначала к твёрдой, затем к жидкой пище, быстрое похудение у пожилого — rak (рак), а не achalazja. После POEM часто развивается refluks (рефлюкс), потому что fundoplikacja (фундопликация) не выполняется."
                    },
                    {
                        title: "Uchyłek Zenkera (дивертикул Ценкера)",
                        what: "Uchyłek pulsacyjny (пульсионный, ложный дивертикул) глотки, выпячивающийся через trójkąt Killiana (треугольник Киллиана) между частью tarczowo-gardłową и pierścienno-gardłową mięśnia zwieracza gardła dolnego (нижнего констриктора).",
                        where: "Noszczyk «Chirurgia» -> Przełyk -> Uchyłki przełyku.",
                        study: "Пожилые пациенты; dysfagia (дисфагия) в верхнем отделе, regurgitacja (регургитация) непереваренной пищи через часы после еды, halitoza (неприятный запах изо рта), булькание на шее, zachłystowe zapalenia płuc (аспирационные пневмонии). Диагностика — badanie kontrastowe RTG przełyku (контрастная рентгенография пищевода). Лечение симптомного uchyłka: endoskopowa diwertykulotomia (эндоскопическая дивертикулотомия; рассечение перегородки степлером или эндоскопически) или открытая miotomia mięśnia pierścienno-gardłowego (миотомия перстнеглоточной мышцы) с резекцией или подвешиванием uchyłka. Uchyłek nadprzeponowy (эпифренальный дивертикул) — связан с zaburzeniami motoryki (achalazja).",
                        focus: "Слепое введение зонда или неосторожная endoskopia (эндоскопия) при uchyłku Zenkera грозят perforacją (перфорацией) — первое исследование — badanie kontrastowe RTG (контрастная рентгенография)."
                    },
                    {
                        title: "Zespół Boerhaavego, zespół Mallory'ego-Weissa (синдромы Бурхаве и Мэллори-Вейсса)",
                        what: "Zespół Boerhaavego (Бурхаве) — спонтанный разрыв всей стенки пищевода при рвоте; zespół Mallory'ego-Weissa (Мэллори-Вейсс) — продольный разрыв слизистой в области połączenia przełykowo-żołądkowego (пищеводно-желудочного перехода).",
                        where: "Noszczyk «Chirurgia» -> Przełyk -> Perforacja przełyku; Szczeklik -> Krwawienia z górnego odcinka przewodu pokarmowego.",
                        study: "Zespół Boerhaavego: обычно левая заднебоковая стенка дистального отдела; triada Macklera (триада Маклера) — wymioty (рвота), резкая боль за грудиной, odma podskórna (подкожная эмфизема); хруст средостения (objaw Hammana), lewostronny płyn w opłucnej (левосторонний плевральный выпот), sepsa (сепсис). Диагностика: TK (КТ) с пероральным контрастом или ezofagografia (эзофагография) с kontrastem rozpuszczalnym w wodzie; bar (барий) противопоказан. Лечение: ничего через рот, antybiotyki o szerokim spektrum (антибиотики широкого спектра), drenaż (дренирование), хирургическое ушивание или stent — zapalenie śródpiersia (медиастинит) развивается за часы. Zespół Mallory'ego-Weissa: wymioty (часто алкоголь) с последующими krwawymi wymiotami (кровавой рвотой), общее состояние относительно хорошее; ~90% krwawień останавливаются сами; при активном — hemostaza endoskopowa (эндоскопический гемостаз).",
                        focus: "Mallory-Weiss = krwawienie (кровотечение) без perforacji (перфорации), Boerhaave = perforacja без значимого krwawienia. Endoskopia (эндоскопия) при подозрении на zespół Boerhaavego — не метод первого выбора."
                    },
                    {
                        title: "Rak przełyku (рак пищевода)",
                        what: "Nowotwór złośliwy przełyku (злокачественная опухоль пищевода): rak płaskonabłonkowy (плоскоклеточный рак) или gruczolakorak (аденокарцинома).",
                        where: "Noszczyk «Chirurgia» -> Przełyk -> Nowotwory; zalecenia PTOK (rak przełyku).",
                        study: "Rak płaskonabłonkowy (плоскоклеточный): верхняя и средняя треть; курение, алкоголь, горячие напитки, achalazja (ахалазия), oparzenie żrące (химический ожог) в анамнезе, zespół Plummera-Vinsona (синдром Пламмера-Винсона). Gruczolakorak (аденокарцинома): дистальная треть и wpust (кардия); GERD — choroba refluksowa przełyku (ГЭРБ), przełyk Barretta (пищевод Барретта), otyłość (ожирение), мужчины; в западных странах стал преобладать. Клиника: postępująca dysfagia (прогрессирующая дисфагия; сначала твёрдая пища), похудение, chrypka (осиплость) (nerw krtaniowy wsteczny — возвратный нерв) — поздний признак. Диагностика: endoskopia z biopsją (эндоскопия с биопсией); стадирование — EUS — endosonografia (эндосонография) (T, N), TK (КТ), PET-TK (ПЭТ-КТ). Лечение резектабельного: neoadiuwantowa radiochemioterapia (неоадъювантная химиолучевая терапия; схема CROSS) или okołooperacyjna chemioterapia (периоперационная химиотерапия) (FLOT, при gruczolakoraku), затем ezofagektomia (эзофагэктомия) (напр. operacja Ivora Lewisa). Rak płaskonabłonkowy шейного отдела — radykalna radiochemioterapia (радикальная химиолучевая терапия).",
                        focus: "Спросят, какой тип связан с przełykiem Barretta (пищеводом Барретта) — gruczolakorak (аденокарцинома). Chrypka (осиплость) у пациента с dysfagią (дисфагией) говорит о распространении на nerw krtaniowy wsteczny (возвратный нерв)."
                    },
                    {
                        title: "Przepuklina rozworu przełykowego, fundoplikacja, ciała obce, oparzenia żrące (грыжа ПОД, фундопликация, инородные тела, химические ожоги)",
                        what: "Смещение части желудка в грудную полость через rozwór przełykowy przepony (пищеводное отверстие диафрагмы); ciała obce (инородные тела) и substancje żrące (едкие вещества) в пищеводе.",
                        where: "Noszczyk «Chirurgia» -> Przepukliny rozworu przełykowego; wytyczne ESGE (ciała obce, uszkodzenia żrące).",
                        study: "Тип I — przepuklina wślizgowa (скользящая) (≈90–95%), связана с GERD (ГЭРБ); тип II — przepuklina okołoprzełykowa (параэзофагеальная; дно желудка рядом с пищеводом, wpust на месте) — риск uwięźnięcia (ущемления) и skrętu żołądka (заворота желудка); III — mieszana (смешанная); IV — другие органы. Симптомная przepuklina okołoprzełykowa — операция. Triada Borchardta (триада Борхардта) при skręcie żołądka: боль в nadbrzuszu (эпигастрии), позывы на рвоту без рвоты, невозможность провести зонд. Fundoplikacja (фундопликация): Nissen — 360°, Toupet — 270° задняя, Dor — 180° передняя; показания — GERD, не отвечающая на IPP, непереносимость IPP, объёмная regurgitacja (регургитация). Осложнения — dysfagia (дисфагия), zespół gas-bloat (синдром вздутия). Ciała obce (ESGE): bateria guzikowa (батарейка-таблетка) в пищеводе, острые предметы в пищеводе и полная obstrukcja (обструкция) — pilna endoskopia (экстренная эндоскопия) (желательно ≤2 ч, не позже 6 ч); прочие тела в пищеводе — в течение 24 ч. Застревание пищевого комка у молодого — искать eozynofilowe zapalenie przełyku (эозинофильный эзофагит). Oparzenia żrące (химические ожоги): zasady (щёлочи) — martwica rozpływna (колликвационный некроз), глубже, пищевод; kwasy (кислоты) — martwica skrzepowa (коагуляционный), чаще желудок. Не вызывать рвоту, не нейтрализовать; endoskopia в первые 12–48 ч (klasyfikacja Zargara — оценка по Заргару); отдалённо — zwężenia (стриктуры) и повышенный риск raka płaskonabłonkowego (плоскоклеточного рака).",
                        focus: "Bateria guzikowa (батарейка) в пищеводе — не «наблюдение до отхождения», а pilne usunięcie (экстренное удаление). Endoskopię (эндоскопию) после oparzenia żrącego (химического ожога) не выполняют в период примерно 5–15 суток (максимальная хрупкость стенки)."
                    }
                ]
            },
            {
                title: "Вт: Толстая кишка — дивертикулит, ишемия, завороты, ВЗК, полипы (Choroby jelita grubego)",
                id: "chir-jelito-grube",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Chirurgia przewodu pokarmowego -> Jelito grube",
                popup: { what: "Неотложная и плановая хирургия jelita grubego (толстой кишки) и naczyń krezkowych (брыжеечных сосудов), dziedziczne zespoły polipowatości (наследственные полипозные синдромы).", focus: "Kolonoskopia (колоноскопия) в остром периоде zapalenia uchyłków (дивертикулита) противопоказана; боль, несоразмерная находкам, — ostre niedokrwienie jelit (острая ишемия кишечника), angio-TK (КТ-ангиография) без промедления; «ziarno kawy» (кофейное зерно) — endoskopowa detorsja (эндоскопическая деторсия), затем плановая resekcja (резекция).", reading: "Noszczyk «Chirurgia» -> Jelito grube, Niedokrwienie jelit; wytyczne WSES (zapalenie uchyłków, ostre niedokrwienie krezkowe); Szczeklik -> Polipy i zespoły polipowatości." },
                subtopics: [
                    {
                        title: "Zapalenie uchyłków jelita grubego (дивертикулит)",
                        what: "Zapalenie uchyłków (воспаление дивертикулов) толстой кишки, в Европе — чаще esicy (сигмовидной).",
                        where: "Noszczyk «Chirurgia» -> Choroba uchyłkowa jelita grubego; wytyczne WSES / ESCP (zapalenie uchyłków).",
                        study: "Клиника: боль в lewym dole biodrowym (левой подвздошной области), gorączka (лихорадка), leukocytoza (лейкоцитоз) («lewostronne zapalenie wyrostka» — левосторонний аппендицит). Метод выбора — TK z kontrastem (КТ с контрастом). Klasyfikacja Hincheya: I — ropień okołookrężniczy (периколический абсцесс); II — ropień odległy (miednicy) (отдалённый, тазовый абсцесс); III — ropne zapalenie otrzewnej (гнойный перитонит); IV — kałowe zapalenie otrzewnej (каловый перитонит). Niepowikłane zapalenie uchyłków (неосложнённый дивертикулит) у иммунокомпетентного без системных признаков — возможно ведение без antybiotyków (антибиотиков) (ESCP, WSES), амбулаторно. Крупный ropień (>4–5 см по WSES; по ESCP — от 3 см) — drenaż przezskórny (чрескожное дренирование) под TK, мелкий — antybiotyki. Hinchey III — laparoskopowe płukanie (лапароскопический лаваж) или resekcja; Hinchey IV — resekcja: operacja Hartmanna (операция Гартмана) или pierwotne zespolenie (первичный анастомоз) с stomią protekcyjną (протективной стомой) у стабильного. Kolonoskopia (колоноскопия) — через 6–8 недель после острого эпизода (особенно powikłanego) для исключения raka (рака). Плановая resekcja — решение индивидуальное, не автоматически после 2 эпизодов.",
                        focus: "Старое правило «resekcja после двух эпизодов» уже не действует — в вопросах прошлых лет может встречаться. Kolonoskopia (колоноскопия) в остром периоде — ошибка (риск perforacji — перфорации)."
                    },
                    {
                        title: "Ostre niedokrwienie krezkowe (острая ишемия кишечника)",
                        what: "Внезапное нарушение кровоснабжения кишки: zator (эмболия) или zakrzepica tętnicy krezkowej górnej (тромбоз ВБА), nieokluzyjne niedokrwienie (неокклюзионная ишемия, NOMI), zakrzepica żył krezkowych (тромбоз брыжеечных вен).",
                        where: "Noszczyk «Chirurgia» -> Niedokrwienie jelit; wytyczne ESVS / WSES (ostre niedokrwienie krezkowe).",
                        study: "Zator (эмболия) — чаще всего у пациентов с migotaniem przedsionków (фибрилляцией предсердий, AF); zakrzepica (тромбоз) — на фоне miażdżycy (атеросклероза) (в анамнезе «dławica brzuszna» — брюшная жаба: боль после еды, страх еды, похудение); NOMI — niski rzut serca (низкий сердечный выброс), wazopresory (вазопрессоры), dializa (диализ). Ключевой признак — сильная боль, несоразмерная скудным находкам при осмотре; позже — zapalenie otrzewnej (перитонит), кровь в стуле, wstrząs (шок). Mleczany (лактат) повышаются поздно и неспецифичны; нормальный D-dimer (D-димер) делает диагноз маловероятным. Метод выбора — angio-TK (КТ-ангиография), её не откладывают из-за kreatyniny (креатинина). Лечение: heparyna i.v. (гепарин в/в), rewaskularyzacja (реваскуляризация) (embolektomia или эндоваскулярно), resekcja нежизнеспособной кишки, second-look (повторная ревизия) через 24–48 ч. Niedokrwienne zapalenie jelita grubego (ишемический колит; другое состояние) — пограничные зоны (zagięcie śledzionowe — селезёночный изгиб, połączenie odbytniczo-esicze — ректосигмоидный переход), чаще консервативно.",
                        focus: "Пожилой с migotaniem przedsionków (фибрилляцией предсердий), сильной болью и мягким животом — niedokrwienie jelit (ишемия кишечника), пока не доказано обратное. Нормальные mleczany (лактат) её не исключают."
                    },
                    {
                        title: "Skręt esicy, zespół Ogilviego (заворот сигмы, синдром Огилви)",
                        what: "Skręt esicy (заворот сигмовидной кишки) вокруг оси брыжейки; zespół Ogilviego (синдром Огилви) — ostra rzekoma niedrożność okrężnicy (острая псевдообструкция ободочной кишки) без механического препятствия.",
                        where: "Noszczyk «Chirurgia» -> Niedrożność jelita grubego.",
                        study: "Skręt esicy: пожилые, przewlekłe zaparcia (хронические запоры), неврологические и психиатрические болезни, пациенты ZOL (домов опеки). RTG — резко раздутая петля в виде «ziarna kawy» (кофейного зерна) или «изогнутой камеры»; TK (КТ) — objaw wiru (симптом водоворота). Без признаков niedokrwienia (ишемии) — endoskopowa detorsja (эндоскопическая деторсия) (sigmoidoskopia giętka — гибкая сигмоскопия) и rurka doodbytnicza (газоотводная трубка); из-за высокого риска nawrotu (рецидива) — плановая resekcja esicy (резекция сигмы) в ту же госпитализацию. Признаки martwicy (некроза) или zapalenie otrzewnej (перитонит) — pilna operacja Hartmanna (экстренная операция Гартмана). Skręt kątnicy (заворот слепой кишки) — молодые, endoskopia неэффективна, hemikolektomia prawostronna (правосторонняя гемиколэктомия). Zespół Ogilviego: пожилые после операций (ортопедия, cięcie cesarskie — КС), тяжёлые болезни, zaburzenia elektrolitowe (электролитные нарушения), opioidy (опиоиды). Лечение: ничего через рот, zgłębnik (зонд), коррекция K и Mg, отмена opioidów и leków antycholinergicznych (холинолитиков); при отсутствии эффекта — neostygmina (неостигмин) 2 мг i.v. медленно под контролем EKG (риск bradykardii — брадикардии, atropina наготове), затем dekompresja kolonoskopowa (колоноскопическая декомпрессия). Kątnica (слепая кишка) >12 см — высокий риск perforacji (перфорации).",
                        focus: "Перед neostygminą (неостигмином) обязательно исключить niedrożność mechaniczną (механическую обструкцию). При skręcie esicy (завороте сигмы) с detorsją без последующей resekcji nawroty (рецидивы) частые — в тесте правильна плановая resekcja."
                    },
                    {
                        title: "WZJG, ChLC — leczenie operacyjne; megacolon toxicum (ВЗК в хирургии, токсический мегаколон)",
                        what: "Показания и виды операций при WZJG — wrzodziejące zapalenie jelita grubego (язвенный колит) и ChLC — choroba Leśniowskiego-Crohna (болезнь Лесневского-Крона).",
                        where: "Noszczyk «Chirurgia» -> Leczenie chirurgiczne NZJ; wytyczne ECCO; Szczeklik -> NZJ.",
                        study: "WZJG: ciężki rzut (тяжёлая атака) по Truelove-Witts — ≥6 кровянистых стулов в сутки + хотя бы один признак: HR (ЧСС) >90, T >37,8 °C, Hb <10,5 г/дл, OB (СОЭ) >30 мм/ч. Лечение — glikokortykosteroidy i.v. (глюкокортикоиды в/в); оценка на 3-и сутки, при неэффективности — leczenie ratunkowe (спасательная терапия) (cyklosporyna — циклоспорин или infliksymab — инфликсимаб), при её неудаче через 4–7 дней — kolektomia (колэктомия). Экстренная операция — subtotalna kolektomia z ileostomią końcową (субтотальная колэктомия с концевой илеостомой). Плановая радикальная операция — proktokolektomia odtwórcza z zbiornikiem krętniczo-odbytowym (проктоколэктомия с илеоанальным резервуаром, J-pouch); она излечивает WZJG. Megacolon toxicum (токсический мегаколон): okrężnica poprzeczna (поперечная ободочная) >6 см на RTG + системная токсичность; отменить opioidy (опиоиды), leki antycholinergiczne (холинолитики), leki przeciwbiegunkowe (противодиарейные); kolonoskopia противопоказана; при отсутствии улучшения за 24–72 ч или perforacji — kolektomia. ChLC: операции экономные (strikturoplastyka — стриктуропластика, ограниченные resekcje), так как болезнь рецидивирует у zespolenia (анастомоза); ropień (абсцесс) — сначала drenaż; przetoki okołoodbytowe (перианальные свищи) — seton (сетон).",
                        focus: "При ChLC (болезни Крона) обширная resekcja «с запасом» — ошибка (zespół krótkiego jelita — синдром короткой кишки). Proktokolektomia (проктоколэктомия) излечивает WZJG, но не ChLC."
                    },
                    {
                        title: "Polipy jelita grubego, rodzinna polipowatość gruczolakowata, zespół Lyncha (полипы, FAP, синдром Линча)",
                        what: "Gruczolaki (аденомы) — предшественники raka jelita grubego (колоректального рака); FAP и zespół Lyncha (синдром Линча) — наследственные синдромы с высоким риском raka.",
                        where: "Szczeklik -> Gastroenterologia -> Polipy i zespoły polipowatości; Noszczyk «Chirurgia» -> Rak jelita grubego.",
                        study: "Gruczolaki (аденомы): cewkowe (тубулярные), cewkowo-kosmkowe (тубуловиллёзные), kosmkowe (виллёзные; наибольший риск; большой gruczolak kosmkowy odbytnicy может вызывать hipokaliemię — гипокалиемию); polipy ząbkowane (зубчатые полипы) — путь к raku через metylację (метилирование). Zaawansowany gruczolak (продвинутая аденома) — ≥10 мм, компонент kosmkowy или dysplazja dużego stopnia (дисплазия высокой степени). FAP: mutacja APC, autosomalnie dominująco (аутосомно-доминантно); сотни–тысячи gruczolaków, риск raka ≈100% к 40 годам; kolonoskopia (колоноскопия) ежегодно с 10–12 лет; профилактическая proktokolektomia (или kolektomia z zespoleniem krętniczo-odbytniczym — илеоректальным анастомозом) обычно в 15–25 лет; вне кишки — gruczolaki dwunastnicy (аденомы ДПК) (gastroduodenoskopia), guzy desmoidalne (десмоиды), kostniaki (остеомы) (zespół Gardnera), guzy mózgu (опухоли мозга) (zespół Turcota). Zespół Lyncha: mutacje MMR (MLH1, MSH2, MSH6, PMS2, EPCAM), autosomalnie dominująco; rak prawej połowy okrężnicy (правой половины ободочной кишки), endometrium (эндометрия), jajnika (яичников), żołądka (желудка), dróg moczowych (мочевых путей); kryteria amsterdamskie II (правило 3-2-1: 3 родственника, 2 поколения, 1 до 50 лет, FAP исключён); kolonoskopia каждые 1–2 года с 20–25 лет; профилактическая histerektomia z usunięciem przydatków (гистерэктомия с аднексэктомией) после реализации репродуктивных планов.",
                        focus: "Zespół Lyncha — немного polipów, но rak рано и справа; FAP — тысячи polipów. После kolektomii (колэктомии) при FAP частая причина смерти — rak okolicy okołobrodawkowej (рак периампулярной зоны) и guzy desmoidalne (десмоиды)."
                    }
                ]
            },
            {
                title: "Ср: Периоперационный период (Okres okołooperacyjny)",
                id: "chir-okolooperacyjna",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Podstawy chirurgii -> Okres okołooperacyjny",
                popup: { what: "Przygotowanie do operacji (подготовка к операции), odstawianie leków (отмена лекарств), głodzenie (голодание), ERAS, profilaktyka ŻChZZ (профилактика ВТЭ), powikłania pooperacyjne (послеоперационные осложнения), analgezja (обезболивание) и leczenie żywieniowe (питание).", focus: "Сроки отмены leków przeciwkrzepliwych (антикоагулянтов) и leków przeciwpłytkowych (антиагрегантов); głodzenie 6 ч / 2 ч; gorączka pooperacyjna (лихорадка) по суткам после операции; wytrzewienie (эвентрация) с surowiczo-krwistą wydzieliną (серозно-кровянистым отделяемым) на 5–8 сутки; żywienie dojelitowe (энтеральное питание) предпочтительнее pozajelitowego (парентерального).", reading: "Noszczyk «Chirurgia» -> Przygotowanie do operacji, Powikłania pooperacyjne; ESC 2022 (operacje niekardiochirurgiczne); ESA/ESAIC (głodzenie); ESPEN (żywienie w chirurgii); ACCP (profilaktyka ŻChZZ)." },
                subtopics: [
                    {
                        title: "Ocena przedoperacyjna, odstawianie leków (предоперационная оценка и отмена лекарств)",
                        what: "Решение, какие leki (препараты) отменить, продолжить или заменить перед плановой операцией.",
                        where: "Wytyczne ESC 2022 (ocena kardiologiczna i postępowanie w operacjach niekardiochirurgicznych); Noszczyk «Chirurgia» -> Przygotowanie do operacji; zalecenia PTD (okres okołooperacyjny).",
                        study: "VKA — antagoniści witaminy K (антагонисты витамина K): warfaryna (варфарин) отменить за 5 дней, acenokumarol (аценокумарол; в Польше назначают чаще) — за 2–3 дня; перед операцией INR (МНО) ≤1,5; terapia pomostowa (бриджинг) HDCz — только при высоком риске zakrzepicy (тромбоза) (mechaniczna zastawka mitralna — механический митральный клапан, ŻChZZ (ВТЭ) <3 мес., недавний udar (инсульт)); при AF — migotanie przedsionków (ФП) terapia pomostowa обычно не нужна. DOAC (NOAC): отмена за 24 ч при низком риске krwawienia (кровотечения) и за 48 ч при высоком (при сниженном klirensie kreatyniny (клиренсе креатинина), особенно для dabigatranu (дабигатрана), дольше); terapia pomostowa не нужна. ASA — kwas acetylosalicylowy (аспирин) во вторичной профилактике обычно продолжают (кроме нейрохирургии, операций в kanale kręgowym (позвоночном канале), некоторых урологических). Klopidogrel (клопидогрел) — за 5 дней, tikagrelor (тикагрелор) — 3–5 дней, prasugrel (прасугрел) — 7 дней. Плановую операцию после PCI откладывают до 6 мес. (после OZW (ОКС) — до 12 мес.). Inhibitory SGLT2 (глифлозины) — отменить за 3 дня (ertugliflozyna — эртуглифлозин — за 4) из-за euglikemicznej kwasicy ketonowej (эугликемического кетоацидоза). Metformina (метформин) — не принимать в день операции (последняя доза накануне); отменять за 2–3 дня не нужно (PTD 2025). Перед dotętniczym (внутриартериальным) введением jodowego środka kontrastowego (йодсодержащего контраста) — отменить ≥24 ч до исследования, при сниженной eGFR оценить функцию почек перед возобновлением. В вопросах CEM прошлых лет — отмена за 48 ч. β-blokery (β-блокаторы) и statyny (статины) продолжают.",
                        focus: "Не начинать β-bloker (β-блокатор) в день операции (повышает смертность). Terapia pomostowa (бриджинг) при AF (ФП) без mechanicznej zastawki (механического клапана) — чаще ошибка, чем правильный ответ."
                    },
                    {
                        title: "Głodzenie przedoperacyjne, ERAS (предоперационное голодание, ERAS)",
                        what: "Правила głodzenia przedoperacyjnego (предоперационного голодания) и протокол ускоренного восстановления после операции (Enhanced Recovery After Surgery).",
                        where: "Wytyczne ESA/ESAIC (głodzenie przedoperacyjne); wytyczne ERAS Society; Noszczyk «Chirurgia» -> Przygotowanie do operacji.",
                        study: "Взрослые: твёрдая пища — до 6 ч, klarowne płyny (прозрачные жидкости) (вода, чай без молока, прозрачный сок) — до 2 ч перед znieczuleniem (анестезией). Дети (ESAIC 2022, правило 6–4–3–1): твёрдая пища — 6 ч, mleko modyfikowane (молочная смесь) и другое нечеловеческое молоко — 4 ч, mleko kobiece (грудное молоко) — 3 ч, klarowne płyny — 1 ч; в вопросах CEM прошлых лет (ESA 2011) — mleko kobiece 4 ч, mleko modyfikowane 6 ч, klarowne płyny 2 ч. Элементы ERAS: информирование пациента, отказ от длительного głodzenia, ładowanie węglowodanami (углеводная нагрузка) за 2–3 ч, без рутинной длительной premedykacji (премедикации), profilaktyka PONV — nudności i wymiotów pooperacyjnych (тошноты и рвоты), celowana płynoterapia (целевая инфузионная терапия), normotermia (нормотермия), dostęp małoinwazyjny (малоинвазивный доступ), отказ от рутинных drenów (дренажей) и zgłębnika nosowo-żołądkowego (назогастрального зонда), analgezja multimodalna (мультимодальное обезболивание) со снижением opioidów (опиоидов), раннее żywienie doustne (питание через рот), wczesna mobilizacja (ранняя мобилизация), раннее удаление cewnika (катетера).",
                        focus: "«Ничего через рот с полуночи» — устаревший ответ. Вода за 2 ч до znieczulenia (анестезии) разрешена."
                    },
                    {
                        title: "Profilaktyka żylnej choroby zakrzepowo-zatorowej, skala Caprini (профилактика ВТЭ)",
                        what: "Оценка риска ŻChZZ — żylnej choroby zakrzepowo-zatorowej (венозной тромбоэмболии) у хирургического пациента и выбор метода профилактики.",
                        where: "Wytyczne ACCP (profilaktyka ŻChZZ u chorych chirurgicznych); Szczeklik -> Żylna choroba zakrzepowo-zatorowa -> Profilaktyka.",
                        study: "Skala Caprini (шкала Каприни): 0 — очень низкий риск, 1–2 — низкий, 3–4 — умеренный, ≥5 — высокий. Очень низкий — wczesna mobilizacja (ранняя мобилизация); низкий — profilaktyka mechaniczna (механическая профилактика); умеренный — HDCz (НМГ) или mechaniczna; высокий — HDCz + mechaniczna. Enoksaparyna (эноксапарин) профилактически — 40 мг s.c. (п/к) 1 раз в сутки (в европейской практике первая доза за 12 ч до операции или через 6–12 ч после). Przedłużona profilaktyka (продлённая профилактика) до 4 недель — после больших онкологических операций на животе и малом тазу; endoprotezoplastyka stawu biodrowego (эндопротезирование тазобедренного сустава) — до 35 дней, kolanowego (коленного) — 10–14 дней и дольше. Znieczulenie regionalne (регионарная анестезия): пункция или удаление cewnika (катетера) не ранее 12 ч после профилактической дозы HDCz и 24 ч после лечебной; следующая доза — не ранее 4 ч после удаления cewnika.",
                        focus: "При высоком риске krwawienia (кровотечения) — profilaktyka mechaniczna (механическая профилактика) до его снижения, а не отказ от профилактики вообще."
                    },
                    {
                        title: "Gorączka pooperacyjna, nieszczelność zespolenia, niedrożność porażenna, wytrzewienie (послеоперационные осложнения)",
                        what: "Типичные powikłania (осложнения) раннего послеоперационного периода по срокам появления.",
                        where: "Noszczyk «Chirurgia» -> Powikłania pooperacyjne.",
                        study: "Gorączka (лихорадка) по суткам (мнемоника 5W): 1–2 сутки — niedodma (ателектаз) (классически, хотя доказательства слабые), реакция на операционную травму; в первые часы — hipertermia złośliwa (злокачественная гипертермия), reakcja poprzetoczeniowa (трансфузионная реакция), ранняя martwicze zakażenie rany (некротизирующая инфекция раны) (paciorkowce — стрептококк, Clostridium — клостридии); 3–5 сутки — zapalenie płuc (пневмония), ZUM (ИМП), zakażenie związane z cewnikiem (катетер-ассоциированная инфекция); 5–7 сутки — ZMO (инфекция области операции), nieszczelność zespolenia (несостоятельность анастомоза), ropień (абсцесс); после 5–7 суток — ZŻG/ZP (ТГВ/ТЭЛА), gorączka polekowa (лекарственная лихорадка). Nieszczelność zespolenia: чаще на 5–7 сутки (диапазон 3–10); ранний признак — tachykardia (тахикардия), затем gorączka, боль, zapalenie otrzewnej (перитонит), кишечное отделяемое по drenowi; TK z kontrastem (КТ с контрастом); лечение — от drenażu до relaparotomii (релапаротомии) и stomii (стомы). Niedrożność porażenna (послеоперационный парез): тонкая кишка восстанавливается за часы, желудок — за 24–48 ч, толстая — за 48–72 ч; лечение — коррекция K и Mg, ограничение opioidów (опиоидов), mobilizacja, zgłębnik (зонд) при рвоте; затяжной парез требует исключения nieszczelności и niedrożności mechanicznej (механической непроходимости) (TK). Wytrzewienie (эвентрация): 5–8 сутки, предвестник — обильная surowiczo-krwista wydzielina (серозно-кровянистое отделяемое) из раны; факторы — otyłość (ожирение), hipoalbuminemia (гипоальбуминемия), glikokortykosteroidy (глюкокортикоиды), кашель, zakażenie rany (инфекция раны). Действие — стерильный влажный opatrunek (повязка) (sól fizjologiczna — физраствор) на выпавшие органы и pilna operacja (экстренная операция).",
                        focus: "Не путать wytrzewienie (эвентрация, ранняя, экстренная) с przepukliną pooperacyjną (послеоперационной грыжей, поздняя, плановая). Выпавшие петли не вправляют у постели."
                    },
                    {
                        title: "Analgezja multimodalna, leczenie żywieniowe, NRS 2002 (мультимодальное обезболивание и питание)",
                        what: "Комбинация leków przeciwbólowych (анальгетиков) с разными механизмами для снижения дозы opioidów (опиоидов); оценка риска niedożywienia (недоедания) и выбор пути żywienia (питания).",
                        where: "Wytyczne ESPEN (żywienie kliniczne w chirurgii); Noszczyk «Chirurgia» -> Leczenie bólu pooperacyjnego, Leczenie żywieniowe.",
                        study: "Analgezja (обезболивание): paracetamol (парацетамол) (1 г каждые 6 ч, максимум 4 г/сут, меньше при болезнях печени и низкой массе), NLPZ (НПВП), metamizol (метамизол) (риск agranulocytozy — агранулоцитоза), методы regionalne (регионарные) (znieczulenie zewnątrzoponowe — эпидуральная анестезия, blokady — блокады, TAP), opioidy «по требованию»; przedawkowanie opioidów (передозировка) — nalokson (налоксон) i.v. титрованно. Żywienie (питание): NRS 2002 ≥3 баллов — риск niedożywienia (недоедания), показано leczenie żywieniowe (нутритивная поддержка). Ciężkie niedożywienie (тяжёлое недоедание) (потеря массы >10–15% за 6 мес., BMI (ИМТ) <18,5, SGA C, albumina (альбумин) <30 г/л без болезни печени и почек) — отложить плановую операцию на 7–14 дней для żywienia. Żywienie dojelitowe (энтеральное питание) предпочтительнее: сохраняет барьер слизистой, меньше zakażeń, дешевле. Żywienie pozajelitowe (парентеральное) — если dojelitowo не удаётся покрыть >50% потребности более 7 дней или при противопоказаниях (niedrożność — непроходимость, niedokrwienie — ишемия, wysoka przetoka — высокий свищ). Потребность: 25–30 kcal/kg/сут, белок ≈1,5 г/кг/сут. Zespół ponownego odżywienia (синдром возобновлённого питания): hipofosfatemia (гипофосфатемия), hipokaliemia (гипокалиемия), hipomagnezemia (гипомагниемия), niedobór tiaminy (дефицит тиамина) — медленный старт и tiamina до начала żywienia.",
                        focus: "«Если кишка работает — используй её». Главный лабораторный маркёр zespołu ponownego odżywienia (синдрома возобновлённого питания) — hipofosfatemia (гипофосфатемия)."
                    }
                ]
            },
            {
                title: "Чт: Анестезиология и трансплантология (Anestezjologia, transplantologia)",
                id: "chir-anestezja-transplant",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Anestezjologia i transplantologia",
                popup: { what: "Ocena dróg oddechowych (оценка дыхательных путей), выбор znieczulenia (анестезии) и её powikłania (осложнения); śmierć mózgu (смерть мозга), immunosupresja (иммуносупрессия), odrzucanie przeszczepu (отторжение) и правовые основы dawstwa (донорства) в Польше.", focus: "Hipertermia złośliwa (злокачественная гипертермия) — первый признак рост EtCO₂, лечение dantrolenem (дантроленом); toksyczność miejscowych środków znieczulających (токсичность местных анестетиков) — 20% emulsja tłuszczowa (липидная эмульсия); в Польше zgoda domniemana (презумпция согласия), sprzeciw (возражение) — в Centralny Rejestr Sprzeciwów.", reading: "Noszczyk «Chirurgia» -> Znieczulenie, Transplantologia; Ustawa z dnia 1 lipca 2005 r. o pobieraniu, przechowywaniu i przeszczepianiu komórek, tkanek i narządów; Poltransplant." },
                subtopics: [
                    {
                        title: "Skala Mallampatiego, znieczulenie ogólne vs przewodowe (шкала Mallampati и выбор анестезии)",
                        what: "Шкала оценки видимости структур глотки для прогноза trudnej intubacji (трудной интубации); сравнение znieczulenia ogólnego (общей) и regionalnego (регионарной анестезии).",
                        where: "Noszczyk «Chirurgia» -> Znieczulenie; podręcznik anestezjologii (Larsen «Anestezjologia»).",
                        study: "Mallampati (сидя, рот открыт, язык высунут, без фонации): I — podniebienie miękkie (мягкое нёбо), cieśń gardła (зев), języczek (язычок), łuki podniebienne (дужки); II — podniebienie miękkie, cieśń gardła, języczek; III — podniebienie miękkie и основание języczka; IV — видно только podniebienie twarde (твёрдое нёбо). III–IV — предиктор trudnej intubacji (трудной интубации). Другие предикторы: odległość tarczowo-bródkowa (тироментальное расстояние) <6 см, ограничение открывания рта и разгибания шеи, otyłość (ожирение), короткая шея (мнемоника LEMON). Znieczulenie regionalne (регионарная анестезия) (podpajęczynówkowe — спинальная, zewnątrzoponowe — эпидуральная, blokady — блокады) — сохранённое сознание, меньше nudności (тошноты), хорошая analgezja pooperacyjna (послеоперационное обезболивание). Противопоказания к znieczuleniu centralnemu (нейроаксиальной): отказ пациента, zakażenie (инфекция) в месте пункции, koagulopatia (коагулопатия) и leki przeciwkrzepliwe (антикоагулянты) вне безопасного окна, wzmożone ciśnienie śródczaszkowe (повышенное ВЧД), niewyrównana hipowolemia (некорригированная гиповолемия); относительно — ciężka stenoza aortalna (тяжёлый аортальный стеноз). Типичное осложнение podpajęczynówkowego — hipotensja (гипотония) и bradykardia (брадикардия) от blokady współczulnej (симпатической блокады): płynoterapia (инфузия), efedryna (эфедрин) или fenylefryna (фенилэфрин).",
                        focus: "Sukcynylocholina (сукцинилхолин) вызывает опасную hiperkaliemię (гиперкалиемию) при oparzeniach (ожогах), zmiażdżeniach (размозжении) и odnerwieniu (денервации) (начиная примерно с 24–48 ч после травмы) — её избегают."
                    },
                    {
                        title: "LAST, hipertermia złośliwa (токсичность местных анестетиков, злокачественная гипертермия)",
                        what: "LAST — układowa toksyczność miejscowych środków znieczulających (системная токсичность местных анестетиков) при przedawkowaniu (передозировке) или внутрисосудистом введении; hipertermia złośliwa (злокачественная гипертермия) — генетический гиперметаболический криз скелетных мышц на триггерные anestetyki.",
                        where: "Wytyczne ASRA / AAGBI (LAST); European Malignant Hyperthermia Group (EMHG); Noszczyk «Chirurgia» -> Powikłania znieczulenia.",
                        study: "LAST: сначала OUN (ЦНС) — drętwienie wokół ust (онемение вокруг рта), metaliczny smak (металлический вкус), szumy uszne (шум в ушах), pobudzenie (возбуждение), drgawki (судороги); затем сердце — zaburzenia rytmu (аритмии), depresja mięśnia sercowego (депрессия миокарда), zatrzymanie krążenia (остановка); наиболее кардиотоксична bupiwakaina (бупивакаин). Лечение: прекратить введение, drogi oddechowe (дыхательные пути), benzodiazepina (бензодиазепин) при drgawkach, 20% emulsja tłuszczowa (липидная эмульсия) — болюс 1,5 мл/кг за ~1 мин, затем инфузия 0,25 мл/кг/мин, болюс можно повторить; при zatrzymaniu krążenia — adrenalina (адреналин) в сниженных дозах (≤1 мкг/кг). Максимальные дозы (ориентир): lidokaina (лидокаин) ≈3–4,5 мг/кг без adrenaliny и ≈7 мг/кг с adrenaliną, bupiwakaina ≈2 мг/кг. Hipertermia złośliwa: mutacja RYR1, autosomalnie dominująco (аутосомно-доминантно); триггеры — anestetyki wziewne (ингаляционные анестетики) (sewofluran, desfluran, izofluran) и sukcynylocholina (сукцинилхолин). Первые признаки — рост EtCO₂ несмотря на wentylację (вентиляцию), tachykardia (тахикардия), sztywność mięśni żwaczy (ригидность жевательных мышц); hipertermia — поздний признак; hiperkaliemia (гиперкалиемия), kwasica (ацидоз), rabdomioliza (рабдомиолиз). Лечение: отключить триггер, 100% O₂ с высоким потоком, dantrolen (дантролен) 2,5 мг/кг i.v., повторять до регресса симптомов, chłodzenie (охлаждение), лечение hiperkaliemii. Безопасны propofol (пропофол), opioidy (опиоиды), niedepolaryzujące leki zwiotczające (недеполяризующие миорелаксанты), podtlenek azotu (закись азота), miejscowe środki znieczulające (местные анестетики).",
                        focus: "Самый ранний признак hipertermii złośliwej (злокачественной гипертермии) — hiperkapnia (гиперкапния), а не температура. Antidotum (антидот) — dantrolen (дантролен), не paracetamol и не chłodzenie (охлаждение) само по себе."
                    },
                    {
                        title: "Popunkcyjny ból głowy (постпункционная головная боль)",
                        what: "Ból głowy (головная боль) после пункции opony twardej (твёрдой мозговой оболочки) из-за утечки płynu mózgowo-rdzeniowego (ликвора).",
                        where: "Noszczyk «Chirurgia» -> Powikłania znieczulenia przewodowego; ICHD-3.",
                        study: "Появляется в течение 5 дней после пункции, типично через 24–48 ч; позиционная: усиливается сидя и стоя, стихает лёжа; может сопровождаться nudnościami (тошнотой), sztywnością karku (ригидностью шеи), szumami usznymi (шумом в ушах), podwójnym widzeniem (диплопией) (n. VI). Факторы риска: молодые женщины, ciąża (беременность), толстая igła tnąca (режущая игла) (Quincke), многократные попытки. Профилактика — тонкие igły atraumatyczne (атравматичные иглы) типа pencil-point (Sprotte, Whitacre); постельный режим после пункции НЕ предотвращает боль. Лечение: leki przeciwbólowe (анальгетики), kofeina (кофеин), nawodnienie (жидкость); при тяжёлой или стойкой боли — zewnątrzoponowa łata z krwi autologicznej (эпидуральная пломба аутокровью, blood patch).",
                        focus: "Gorączka (лихорадка) и objawy oponowe (менингеальные признаки) после пункции — не popunkcyjny ból głowy, а подозрение на zapalenie opon mózgowo-rdzeniowych (менингит) или ropień nadtwardówkowy (эпидуральный абсцесс)."
                    },
                    {
                        title: "Śmierć mózgu — trwałe nieodwracalne ustanie czynności mózgu (смерть мозга в Польше)",
                        what: "Trwałe nieodwracalne ustanie czynności (необратимое прекращение функций) всего головного мозга, приравненное в польском праве к смерти человека.",
                        where: "Obwieszczenie Ministra Zdrowia w sprawie sposobu i kryteriów stwierdzenia trwałego nieodwracalnego ustania czynności mózgu (2019, сверить актуальную редакцию); Ustawa transplantacyjna z 2005 r.",
                        study: "Условия: известная структурная причина śpiączki (комы); исключены обратимые причины — leki (препараты) (sedacja — седация, leki zwiotczające — миорелаксанты), hipotermia (гипотермия), тяжёлые zaburzenia metaboliczne i endokrynne (метаболические и эндокринные нарушения). Клиника: głęboka śpiączka (глубокая кома), отсутствие всех odruchów pniowych (стволовых рефлексов) (źreniczny na światło — зрачковый, rogówkowy — роговичный, oczno-głowowy — окулоцефалический, przedsionkowo-oczny — вестибуло-окулярный, kaszlowy — кашлевой, gardłowy — глоточный, reakcja na ból w zakresie nerwu trójdzielnego — реакция на боль в зоне тройничного нерва) и bezdech (апноэ) в próbie bezdechu (тесте апноэ). Исследование проводят дважды с интервалом; badania instrumentalne (инструментальные тесты) — в установленных ситуациях. Констатирует единогласно komisja (комиссия) из трёх врачей-специалистов, в том числе specjalista anestezjologii i intensywnej terapii (анестезиолог-реаниматолог) и specjalista neurologii lub neurochirurgii (невролог или нейрохирург) (детали и интервалы сверить с актуальным obwieszczenie).",
                        focus: "Odruchy rdzeniowe (спинальные рефлексы) (например, движения конечностей на боль спинального происхождения) не исключают śmierci mózgu (смерть мозга). Отключение аппаратуры после stwierdzenia śmierci mózgu — не eutanazja (эвтаназия)."
                    },
                    {
                        title: "Immunosupresja, odrzucanie przeszczepu, Centralny Rejestr Sprzeciwów (иммуносупрессия, отторжение, донорство)",
                        what: "Leki immunosupresyjne (препараты), предотвращающие odrzucanie przeszczepu (отторжение трансплантата), их działania niepożądane (побочные эффекты); типы odrzucania; правовая модель pośmiertnego dawstwa (посмертного донорства) в Польше.",
                        where: "Noszczyk «Chirurgia» -> Transplantologia; Szczeklik -> Przeszczepianie nerek; Ustawa z dnia 1 lipca 2005 r. o pobieraniu, przechowywaniu i przeszczepianiu komórek, tkanek i narządów; Poltransplant.",
                        study: "Inhibitory kalcyneuryny (ингибиторы кальциневрина) — takrolimus (такролимус) и cyklosporyna (циклоспорин): nefrotoksyczność (нефротоксичность), nadciśnienie tętnicze (артериальная гипертензия), hiperkaliemia (гиперкалиемия), hipomagnezemia (гипомагниемия), neurotoksyczność (нейротоксичность) (drżenie — тремор), cukrzyca potransplantacyjna (посттрансплантационный диабет) (чаще takrolimus); cyklosporyna — przerost dziąseł (гиперплазия дёсен), hirsutyzm (гирсутизм). Метаболизм через CYP3A4: klarytromycyna (кларитромицин), azole (азолы), diltiazem (дилтиазем), grejpfrut (грейпфрут) повышают уровень; ryfampicyna (рифампицин), karbamazepina (карбамазепин), dziurawiec (зверобой) — снижают. Mykofenolan (микофенолат): biegunka (диарея), leukopenia (лейкопения), teratogenność (тератогенность) (обязательна antykoncepcja — контрацепция). Inhibitory mTOR (ингибиторы mTOR) (syrolimus — сиролимус, ewerolimus — эверолимус): плохое gojenie ran (заживление ран), hiperlipidemia (гиперлипидемия), białkomocz (протеинурия). Отдалённо — zakażenie CMV (CMV-инфекция), choroby limfoproliferacyjne (лимфопролиферативные болезни) (PTLD, EBV), rak skóry (рак кожи) (у реципиентов płaskonabłonkowy — плоскоклеточный чаще podstawnokomórkowego — базальноклеточного). Odrzucanie (отторжение): nadostre (сверхострое) — минуты–часы, предсуществующие przeciwciała (антитела) (AB0, HLA), необратимо, предупреждается próbą krzyżową (перекрёстной пробой); ostre (острое) — дни–месяцы, komórkowe (клеточное) (pulsy glikokortykosteroidów — пульсы ГКС) или humoralne (гуморальное) (plazmafereza — плазмаферез, IVIG); przewlekłe (хроническое) — месяцы–годы, włóknienie (фиброз) и waskulopatia (васкулопатия), необратимо. Dawstwo (донорство): zgoda domniemana (презумпция согласия) — pobranie (изъятие) у умершего допустимо, если он не выразил sprzeciwu (возражения): запись в Centralny Rejestr Sprzeciwów (ведёт Poltransplant), письменное заявление с подписью или устное в присутствии двух свидетелей с их письменным подтверждением. За несовершеннолетнего до 16 лет sprzeciw может выразить przedstawiciel ustawowy (законный представитель) (сверить). Żywe dawstwo (живое донорство) — прежде всего родственники; донор вне круга близких — с согласия sądu rejonowego после opinii Komisji Etycznej Krajowej Rady Transplantacyjnej.",
                        focus: "Юридически zgoda rodziny (согласие семьи) не требуется — семью спрашивают, не выражал ли умерший sprzeciwu (возражения). Препарат с przerostem dziąseł (гиперплазией дёсен) — cyklosporyna (циклоспорин), а не takrolimus."
                    }
                ]
            },
            {
                title: "Пт: Сосудистая хирургия II — вены, сонные артерии, лимфа, травма (Chirurgia naczyniowa II)",
                id: "chir-naczynia-2",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Chirurgia naczyniowa -> Żyły, tętnice szyjne, urazy naczyń",
                popup: { what: "Przewlekła choroba żylna (хронические болезни вен), zakrzepowe zapalenie żył powierzchownych (тромбофлебит поверхностных вен), zwężenie tętnic szyjnych (стеноз сонных артерий), zespół podkradania tętnicy podobojczykowej (синдром подключичного обкрадывания), amputacje (ампутации), obrzęk limfatyczny (лимфедема) и urazy naczyń (травма сосудов).", focus: "Skrzeplina (тромб) в żyle powierzchownej в пределах 3 см от ujścia (соустья) — лечить как ZŻG (ТГВ); objawowe zwężenie (симптомный стеноз) ≥70% — endarterektomia (эндартерэктомия) в течение 14 дней; objawy pewne (жёсткие признаки) urazu naczynia — операция без визуализации.", reading: "Noszczyk «Chirurgia» -> Chirurgia naczyniowa; wytyczne ESVS (choroby żył 2022, tętnice szyjne 2023); Szczeklik -> Choroby naczyń." },
                subtopics: [
                    {
                        title: "Żylaki kończyn dolnych, klasyfikacja CEAP (варикозная болезнь)",
                        what: "Przewlekła choroba żylna (хроническая болезнь вен) с расширением żył podskórnych (подкожных вен) ≥3 мм из-за niewydolności zastawek (клапанной недостаточности).",
                        where: "Wytyczne ESVS 2022 (przewlekła choroba żylna); Noszczyk «Chirurgia» -> Żylaki kończyn dolnych.",
                        study: "CEAP (клиническая часть): C0 — без видимых признаков; C1 — teleangiektazje (телеангиэктазии) и żyły siatkowate (ретикулярные вены); C2 — żylaki (варикозные вены); C3 — obrzęk (отёк); C4 — zmiany skórne (изменения кожи) (C4a — przebarwienia (пигментация), wyprysk (экзема); C4b — lipodermatoskleroza (липодерматосклероз), atrophie blanche (белая атрофия); C4c — corona phlebectatica, пересмотр 2020); C5 — wygojone owrzodzenie (зажившая язва); C6 — czynne owrzodzenie (активная язва). Диагностика — USG dupleks (дуплексное УЗИ). Лечение: kompresjoterapia (компрессия); при niewydolności żyły odpiszczelowej (большой подкожной вены) метод первого выбора — wewnątrzżylna ablacja termiczna (эндовенозная термическая абляция) (laser, RF — радиочастотная); skleroterapia pianką (склеротерапия пеной); классическая операция (krossektomia + stripping). Owrzodzenie żylne (венозная язва) — над kostką przyśrodkową (медиальной лодыжкой), неглубокое, умеренно болезненное; основа лечения — kompresjoterapia, перед ней измерить ABI — wskaźnik kostka-ramię (лодыжечно-плечевой индекс) (при ABI <0,5–0,6 сильная kompresja противопоказана).",
                        focus: "Отличать owrzodzenia (язвы): żylne (венозная) — kostka przyśrodkowa (медиальная лодыжка); tętnicze (артериальная) — пальцы и пятка, резко болезненная, «штампованная»; neuropatyczne (нейропатическая) — подошва в точках давления, безболезненная."
                    },
                    {
                        title: "Zakrzepowe zapalenie żył powierzchownych, zespół pozakrzepowy (тромбофлебит, посттромботический синдром)",
                        what: "Zakrzepica (тромбоз) с воспалением żyły podskórnej (подкожной вены); zespół pozakrzepowy (посттромботический синдром) — przewlekła niewydolność żylna (хроническая венозная недостаточность) после ZŻG (ТГВ).",
                        where: "Szczeklik -> Żylna choroba zakrzepowo-zatorowa; wytyczne ESVS 2022; wytyczne ACCP.",
                        study: "Zakrzepowe zapalenie żył powierzchownych (тромбофлебит): болезненный плотный тяж с покраснением. Обязательно USG dupleks (дуплексное УЗИ) — у заметной части больных сопутствует ZŻG (ТГВ). Skrzeplina (тромб) ≥5 см длиной и не ближе 3 см от ujścia odpiszczelowo-udowego (сафено-феморального соустья) — fondaparynuks (фондапаринукс) 2,5 мг s.c. 1 раз в сутки 45 дней (альтернатива — профилактическая доза HDCz — НМГ). Skrzeplina в пределах 3 см от ujścia — как ZŻG: лечебная antykoagulacja (антикоагуляция) ≈3 мес. Короткая (<5 см) дистальная — NLPZ (НПВП), kompresja (компрессия), контроль. Wędrujące zakrzepowe zapalenie żył (мигрирующий тромбофлебит) — zespół Trousseau (синдром Труссо), искать raka (рак) (trzustka — поджелудочная железа). Zespół pozakrzepowy: obrzęk (отёк), тяжесть, боль, zmiany skórne (изменения кожи), owrzodzenia (язвы); оценка по skali Villalta; профилактика — адекватная antykoagulacja; рутинные pończochy uciskowe (компрессионные чулки) для его предупреждения не рекомендуются (исследование SOX), но помогают при симптомах.",
                        focus: "«Поверхностный — значит безобидный» — ловушка: skrzeplina (тромб) у ujścia (соустья) лечат как zakrzepicę żył głębokich (глубокий)."
                    },
                    {
                        title: "Zwężenie tętnicy szyjnej wewnętrznej, zespół podkradania tętnicy podobojczykowej (стеноз сонной артерии, синдром подключичного обкрадывания)",
                        what: "Miażdżycowe zwężenie (атеросклеротический стеноз) tętnicy szyjnej wewnętrznej (внутренней сонной артерии) как источник zatorowych udarów (эмболических инсультов); zespół podkradania (синдром обкрадывания) — wsteczny przepływ (ретроградный кровоток) в tętnicy kręgowej (позвоночной артерии) при проксимальном zwężeniu tętnicy podobojczykowej (подключичной).",
                        where: "Wytyczne ESVS 2023 (choroba tętnic szyjnych i kręgowych); Noszczyk «Chirurgia» -> Chirurgia naczyniowa -> Tętnice szyjne.",
                        study: "Objawowe zwężenie (симптомный стеноз) — TIA (ТИА), udar (инсульт) или przemijająca jednooczna ślepota (преходящая монокулярная слепота, amaurosis fugax) на стороне zwężenia за последние 6 мес. Objawowe 70–99% (NASCET) — endarterektomia (эндартерэктомия, endarterektomia szyjna) показана; 50–69% — рассматривается; <50% — только leczenie zachowawcze (медикаментозно). Срок — как можно раньше, в течение 14 дней от симптомов. Całkowite zamknięcie (полная окклюзия) — не оперируют. Bezobjawowe (асимптомный) 60–99% — операция у отдельных пациентов с признаками высокого риска; всем — lek przeciwpłytkowy (антиагрегант), statyna (статин), контроль ciśnienia (давления). Endarterektomia предпочтительнее stentowania (стентирования) у пациентов старше ~70 лет. Диагностика — USG dupleks (дуплексное УЗИ), подтверждение angio-TK (КТ-ангиографией) или angio-MR (МР-ангиографией). Zespół podkradania: zwężenie проксимального отдела tętnicy podobojczykowej (чаще левой) до отхождения tętnicy kręgowej; при работе рукой — zawroty głowy (головокружение), omdlenia (обмороки), chromanie kończyny górnej (хромота руки); разница ciśnienia на руках >15–20 мм рт. ст., ослабленное tętno (пульс); лечение objawowego — angioplastyka ze stentem (ангиопластика со стентом).",
                        focus: "Amaurosis fugax — симптом zwężenia (стеноза) ipsilateralnej tętnicy szyjnej (ипсилатеральной сонной артерии), то есть zwężenie «objawowe» (симптомный). Przeciwstronny niedowład połowiczy (контралатеральный гемипарез) при zwężeniu prawej ICA (правой ВСА) — справа zwężenie, слева слабость."
                    },
                    {
                        title: "Amputacje w zespole stopy cukrzycowej, obrzęk limfatyczny (ампутации при диабетической стопе, лимфедема)",
                        what: "Уровни и показания к amputacji (ампутации) при осложнённом zespole stopy cukrzycowej (диабетической стопе); obrzęk limfatyczny (лимфедема) — отёк от нарушения odpływu chłonki (лимфооттока).",
                        where: "Wytyczne IWGDF; zalecenia PTD (zespół stopy cukrzycowej); Noszczyk «Chirurgia» -> Amputacje; wytyczne ESVS (obrzęk limfatyczny).",
                        study: "Klasyfikacja Wagnera (классификация Вагнера) 0–5 (0 — stopa zagrożona (стопа риска), 1 — owrzodzenie powierzchowne (поверхностная язва), 2 — głębokie (глубокая), 3 — z zapaleniem kości (остеомиелитом) или ropniem (абсцессом), 4 — ograniczona zgorzel (ограниченная гангрена), 5 — zgorzel całej stopy (гангрена всей стопы)). Zapalenie kości (остеомиелит) — test «probe-to-bone» (зонд до кости), MR (МРТ). Перед amputacją — оценка ukrwienia (кровоснабжения) и попытка rewaskularyzacji (реваскуляризации). Zgorzel wilgotna (влажная гангрена) с sepsą (сепсисом) — pilna (экстренная) (иногда двухэтапная «gilotynowa» — гильотинная) amputacja; zgorzel sucha (сухая) — дождаться demarkacji (демаркации), плановая операция. Уровни: palce (пальцы), przezśródstopowa (трансметатарзальная), по Lisfrancu и Chopartowi (Лисфранку и Шопару), goleń (голень), udo (бедро); сохранение stawu kolanowego (коленного сустава) резко снижает энергозатраты ходьбы на protezie (протезе). Obrzęk limfatyczny: pierwotny (первичная) (Milroya — врождённая, Meige'a — в пубертате, późny (поздняя) — после 35 лет) и wtórny (вторичная) (в Европе — после лечения raka (рака): limfadenektomia pachowa (подмышечная лимфаденэктомия), radioterapia (облучение), операции в малом тазу; в мире — filarioza (филяриоз)). Objaw Stemmera (признак Штеммера): невозможно захватить кожную складку у основания второго пальца стопы. Obrzęk сначала мягкий, затем плотный, не спадает при поднятии. Лечение — kompleksowa terapia przeciwobrzękowa (комплексная противоотёчная терапия) (manualny drenaż limfatyczny — ручной лимфодренаж, многослойная kompresja, упражнения, уход за кожей); leki moczopędne (диуретики) неэффективны. Осложнения — nawracająca róża (рецидивирующая рожа), naczyniakomięsak (ангиосаркома) (zespół Stewarta-Trevesa).",
                        focus: "Leki moczopędne (диуретики) при obrzęku limfatycznym (лимфедеме) — неверный ответ. Lipedema (липедема), в отличие от obrzęku limfatycznego, не затрагивает стопы и симметрична."
                    },
                    {
                        title: "Urazy naczyń (травма сосудов)",
                        what: "Uszkodzenie tętnicy lub żyły (повреждение артерии или вены) при urazie penetrującym (проникающей) или tępym (тупой травме) конечности, шеи, туловища.",
                        where: "ATLS (10. edycja) -> Musculoskeletal trauma, Vascular injuries; Noszczyk «Chirurgia» -> Urazy naczyń.",
                        study: "Objawy pewne (жёсткие признаки): pulsujące krwawienie (пульсирующее кровотечение), narastający lub tętniący krwiak (растущая или пульсирующая гематома), wyczuwalny szmer/drżenie (пальпируемое дрожание или шум), brak tętna obwodowego (отсутствие дистального пульса), objawy niedokrwienia (признаки ишемии) (6P) — операция без дополнительной визуализации. Objawy niepewne (мягкие признаки): krwawienie (кровотечение) в анамнезе, небольшой стабильный krwiak, deficyt neurologiczny (неврологический дефицит) рядом с сосудом, osłabione tętno (ослабленный пульс), близость раны к сосуду — API/ABI (индекс повреждённой конечности) <0,9 — angio-TK (КТ-ангиография). Masywne krwawienie (массивное кровотечение) из конечности — bezpośredni ucisk (прямое давление), затем opaska uciskowa (жгут, турникет) выше раны с записью времени наложения. Высокий риск uszkodzenia tętnicy: zwichnięcie stawu kolanowego (вывих колена) — tętnica podkolanowa (подколенная артерия); złamanie nadkłykciowe kości ramiennej (надмыщелковый перелом плеча) у ребёнка — tętnica ramienna (плечевая артерия). После rewaskularyzacji длительного niedokrwienia — fasciotomia (фасциотомия) (zespół reperfuzyjny — синдром реперфузии и zespół ciasnoty przedziałów powięziowych — компартмент-синдром).",
                        focus: "Zwichnięcie stawu kolanowego (вывих колена) с нормальным tętnem не исключает urazu tętnicy podkolanowej (травмы подколенной артерии) — нужен ABI или angiografia (ангиография)."
                    }
                ]
            },
            {
                title: "Сб: Тест по хирургии V (органная хирургия и периоперационный период)",
                id: "chir-5-test",
                time: "1.5 ч",
                lepolekPath: "Testy -> Chirurgia przewodu pokarmowego i okres okołooperacyjny (40 pytań CEM)",
                popup: { what: "Контрольный тест по przełykowi (пищеводу), jelitu grubemu (толстой кишке), okresowi okołooperacyjnemu (периоперационному периоду), anestezjologii (анестезиологии), transplantologii (трансплантологии) и żyłom (венам).", focus: "Сроки odstawiania leków (отмены препаратов), głodzenie (голодание), gorączka pooperacyjna (лихорадка) по суткам, hipertermia złośliwa (злокачественная гипертермия), пороги zwężenia tętnicy szyjnej (стеноза сонной артерии).", reading: "Личные заметки недели." },
                subtopics: [
                    {
                        title: "Test 40 pytań CEM (решение 40 вопросов)",
                        what: "Тест по темам недели в режиме экзамена.",
                        where: "LEPOLEK -> Testy -> Chirurgia.",
                        study: "40 вопросов за 60 мин. Отдельно помечать вопросы о польском праве (śmierć mózgu — смерть мозга, dawstwo — донорство) — их ответы сверять с текстом ustawy, а не с интуицией.",
                        focus: "Вопросы о сроках okołooperacyjnych (периоперационных) часто различаются между источниками — записывать, по какому источнику дан ответ LEPOLEK."
                    },
                    {
                        title: "Analiza błędów (разбор ошибок)",
                        what: "Разбор неверных ответов по схеме «ситуация -> действие -> почему не другое».",
                        where: "Объяснения LEPOLEK; Noszczyk «Chirurgia».",
                        study: "Типичные ошибки недели: kolonoskopia (колоноскопия) в ostrym zapaleniu uchyłków (остром дивертикулите), bar (барий) при подозрении на perforację przełyku (перфорацию пищевода), terapia pomostowa (бриджинг) при AF (ФП), leki moczopędne (диуретики) при obrzęku limfatycznym (лимфедеме), «ничего через рот с полуночи», chłodzenie (охлаждение) вместо dantrolenu (дантролена).",
                        focus: "Ошибки в последовательности действий записать отдельно от ошибок в числах."
                    },
                    {
                        title: "Liczby do zapamiętania (таблица чисел недели)",
                        what: "Сводная таблица порогов и сроков.",
                        where: "Личные заметки.",
                        study: "Głodzenie (голодание): взрослые 6 ч / 2 ч; дети 6–4–3–1 (твёрдая пища / mleko modyfikowane (смесь) / mleko kobiece (грудное молоко) / klarowne płyny (прозрачные), ESAIC 2022; в старых вопросах — 6 / 6 / 4 / 2). Metformina (метформин) — не принимать в день операции (в старых вопросах — 48 ч). Отмена: warfaryna (варфарин) 5 дней, klopidogrel 5, tikagrelor 3–5, prasugrel 7, DOAC 24/48 ч, SGLT2 3 дня. Caprini 0 / 1–2 / 3–4 / ≥5. Gorączka (лихорадка): 1–2 / 3–5 / 5–7 / >7 сутки. Megacolon (мегаколон) >6 см, kątnica (слепая кишка) >12 см. Hinchey I–IV. Tętnica szyjna (сонная артерия): ≥70% objawowe (симптомный), ≤14 дней. Zakrzepowe zapalenie żył powierzchownych (тромбофлебит): ≥5 см, 3 см от ujścia (соустья), fondaparynuks (фондапаринукс) 45 дней. Emulsja tłuszczowa (липидная эмульсия) 1,5 мл/кг; dantrolen (дантролен) 2,5 мг/кг.",
                        focus: "Проверить, что каждое число недели связано с конкретным решением (что делаем при превышении порога)."
                    }
                ]
            }
        ]
    },
    {
        key: "chir-6",
        subject: "chirurgia",
        title: "Хирургия VI — Онкология, ортопедия, урология и детская хирургия II",
        days: [
            {
                title: "Пн: Опухоли кожи, саркомы и доброкачественные болезни груди (Nowotwory skóry, mięsaki, łagodne choroby piersi)",
                id: "chir-onko-skora-piersi",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Chirurgia onkologiczna -> Nowotwory skóry i tkanek miękkich",
                popup: { what: "Czerniak (меланома), rak podstawnokomórkowy (базальноклеточный) и kolczystokomórkowy skóry (плоскоклеточный рак кожи), mięsaki tkanek miękkich (саркомы мягких тканей), łagodne zmiany (доброкачественные образования) и zapalenia sutka (воспаления груди), nosicielstwo mutacji BRCA (носительство BRCA).", focus: "Podejrzane znamię (подозрительный невус) — biopsja wycinająca (эксцизионная биопсия) с узким краем, не shave biopsy (бритьё) и не biopsja częściowa (частичная биопсия); grubość wg Breslowa (толщина по Бреслоу) определяет край и SLNB; mięsak (саркома) — biopsja в ośrodku referencyjnym (референсном центре) по оси будущего разреза.", reading: "Noszczyk «Chirurgia» -> Nowotwory skóry, Mięsaki tkanek miękkich, Choroby sutka; zalecenia PTOK (czerniak, mięsaki); NCCN / zalecenia PTOK (BRCA)." },
                subtopics: [
                    {
                        title: "Czerniak skóry (меланома)",
                        what: "Nowotwór złośliwy (злокачественная опухоль) из melanocytów (меланоцитов) с ранним przerzutowaniem limfatycznym i krwiopochodnym (лимфогенным и гематогенным метастазированием).",
                        where: "Zalecenia PTOK (czerniaki skóry); Noszczyk «Chirurgia» -> Nowotwory skóry -> Czerniak.",
                        study: "ABCDE: asymetria (асимметрия), nieregularne brzegi (неровные края, Border), niejednolity kolor (неоднородный цвет), średnica (диаметр) >6 мм, ewolucja (изменение); objaw «brzydkiego kaczątka» (гадкого утёнка). Подтипы: czerniak szerzący się powierzchownie (поверхностно распространяющаяся; самая частая), guzkowy (узловая; быстрая, толстая), czerniak z plamy soczewicowatej (лентиго-меланома; лицо пожилых), odsiebny/akralny (акральная лентигинозная; ладони, подошвы, под ногтем). Диагностика: biopsja wycinająca (эксцизионная биопсия) всего очага с краем 1–2 мм, по оси odpływu chłonki (лимфооттока). Главный прогностический фактор первичной опухоли — grubość wg Breslowa (толщина по Бреслоу) (мм); также owrzodzenie (изъязвление), indeks mitotyczny (митотический индекс). pT: T1 ≤1,0 мм, T2 1,01–2,0, T3 2,01–4,0, T4 >4,0 мм. Radykalizacja (расширенное иссечение): in situ — 0,5 см, ≤2 мм — 1 см, >2 мм — 2 см. Biopsja węzła wartowniczego (биопсия сторожевого узла, SLNB) — от pT1b (≥0,8 мм или owrzodzenie) и выше. Przerzutowy (метастатическая) — immunoterapia (иммунотерапия) (anty-PD-1 ± anty-CTLA-4), при mutacji BRAF — inhibitory BRAF+MEK.",
                        focus: "Shave biopsy (бритьевая) или biopsja częściowa (частичная биопсия) не позволяет оценить grubość (толщину) — это ошибочный ответ. Skala Clarka (уровни Кларка) — устаревший ответ; решает Breslow."
                    },
                    {
                        title: "Rak podstawnokomórkowy, rak kolczystokomórkowy skóry (базальноклеточный и плоскоклеточный рак кожи)",
                        what: "Самые частые nowotwory złośliwe skóry (злокачественные опухоли кожи); BCC (базалиома) почти не метастазирует, SCC (плоскоклеточный рак) может давать przerzuty (метастазы) в węzły chłonne (лимфоузлы).",
                        where: "Noszczyk «Chirurgia» -> Nowotwory skóry; zalecenia PTOK (raki skóry).",
                        study: "BCC: самый частый rak skóry, лицо (верхняя половина), perłowy guzek (жемчужный узелок) с teleangiektazjami (телеангиэктазиями), «wrzód drążący» (грызущая язва, ulcus rodens); местно деструктивен, przerzuty исключительно редки. Лечение — wycięcie (иссечение) с краем ≈4 мм при низком риске; на лице и при nawrotach (рецидивах) — chirurgia mikrograficzna Mohsa (микрографическая хирургия Мооса); powierzchowny BCC (поверхностный) — krioterapia (криотерапия), imikwimod (имиквимод), terapia fotodynamiczna (фотодинамическая терапия). Zespół Gorlina (синдром Горлина) — множественные BCC. SCC: из rogowacenia słonecznego (актинического кератоза), choroby Bowena (болезни Боуэна) (SCC in situ), przewlekłych owrzodzeń (хронических язв) и blizn (рубцов) (owrzodzenie Marjolina — язва Марьолина), у biorców narządów (реципиентов органов); риск przerzutów выше на wardze (губе) и uchu (ухе). Лечение — wycięcie с краем 4–6 мм при низком риске (NCCN; EADO 2023 — 5 мм), при высоком риске — ≈10 мм (EADO 2023) или chirurgia mikrograficzna, оценка regionalnych węzłów chłonnych (регионарных лимфоузлов).",
                        focus: "Незаживающая язва в старой bliźnie pooparzeniowej (ожоговом рубце) — owrzodzenie Marjolina (язва Марьолина, SCC), нужна biopsja (биопсия). У biorcy przeszczepu (реципиента трансплантата) чаще SCC, чем BCC."
                    },
                    {
                        title: "Mięsaki tkanek miękkich (саркомы мягких тканей)",
                        what: "Nowotwory złośliwe (злокачественные опухоли) мезенхимального происхождения; у взрослых чаще tłuszczakomięsak (липосаркома) и niezróżnicowany mięsak pleomorficzny (недифференцированная плеоморфная саркома), у детей — mięsak prążkowanokomórkowy (рабдомиосаркома).",
                        where: "Zalecenia PTOK (mięsaki tkanek miękkich); Noszczyk «Chirurgia» -> Mięsaki tkanek miękkich.",
                        study: "Подозрение: образование >5 см, расположенное pod powięzią (под фасцией), растущее или болезненное — направить в ośrodek referencyjny (референсный центр) до любой операции. Визуализация — MR (МРТ) до biopsji; TK klatki piersiowej (КТ грудной клетки) для стадирования (przerzuty (метастазы) — drogą krwi (гематогенно) в płuca (лёгкие); drogą chłonną (лимфогенно) редко). Biopsja — gruboigłowa (толстоигольная) в центре, который будет оперировать; kanał biopsji (канал биопсии) прокладывают по оси будущего разреза, чтобы иссечь его единым блоком. BAC — biopsja aspiracyjna cienkoigłowa (тонкоигольная аспирация) для первичного диагноза недостаточна. Лечение — szerokie wycięcie (широкое иссечение) с краем здоровых тканей (R0) ± radioterapia (лучевая терапия); chemioterapia (химиотерапия) — выборочно. Tłuszczakomięsak zaotrzewnowy (забрюшинная липосаркома) — большая масса без симптомов.",
                        focus: "Самая частая ошибка — «wyłuszczenie» (вылущивание) образования без диагноза (нерадикальная операция). Poprzeczne cięcie (поперечный разрез) для biopsji на конечности — ошибка."
                    },
                    {
                        title: "Gruczolakowłókniak, torbiel, zapalenie sutka, ginekomastia (доброкачественные болезни груди и гинекомастия)",
                        what: "Gruczolakowłókniak (фиброаденома), torbiel (киста), połogowe (лактационный) и niepołogowe zapalenie sutka (нелактационный мастит), ginekomastia (гинекомастия) у мужчин.",
                        where: "Noszczyk «Chirurgia» -> Choroby sutka -> Zmiany łagodne; Bręborowicz «Położnictwo i ginekologia» -> Połogowe zapalenie sutka.",
                        study: "Gruczolakowłókniak (фиброаденома): 15–35 лет, плотная, подвижная, безболезненная, чётко отграниченная; USG (УЗИ), biopsja gruboigłowa (толстоигольная биопсия) по potrójnej ocenie (тройной оценке) (осмотр + визуализация + гистология); наблюдение, wycięcie (иссечение) при росте или размере >2–3 см. Быстрый рост — думать о guzie liściastym (листовидной опухоли), szerokie wycięcie. Torbiel (киста): 35–50 лет; USG — zmiana bezechowa (анэхогенное образование); objawowa — aspiracja (аспирация); кровянистое содержимое или остаточное образование — biopsja. Połogowe zapalenie sutka (лактационный мастит): S. aureus, продолжать karmienie (кормление) и опорожнять грудь, antybiotyk przeciwgronkowcowy (антибиотик против стафилококка) (напр. kloksacylina — клоксациллин, cefaleksyna — цефалексин, amoksycylina z kwasem klawulanowym — амоксициллин с клавулановой кислотой); ropień (абсцесс) — aspiracja pod kontrolą USG или nacięcie (разрез). Niepołogowe (okołoprzewodowe) zapalenie sutka (перидуктальный мастит): курильщицы, ropień podotoczkowy (субареолярный абсцесс), nawracające przetoki (рецидивирующие свищи), смешанная флора с beztlenowcami (анаэробами). Не отвечающее на antybiotyk «воспаление» у немолодой женщины — исключить rak zapalny (воспалительный рак) (biopsja). Ginekomastia (гинекомастия): fizjologiczna (физиологическая) (новорождённые, пубертат, пожилые); leki (лекарства) (spironolakton — спиронолактон, antyandrogeny — антиандрогены, finasteryd — финастерид, ketokonazol — кетоконазол, sterydy anaboliczne — анаболики, marihuana — марихуана), marskość wątroby (цирроз), hipogonadyzm (гипогонадизм), guzy jądra (опухоли яичка) (hCG) — USG jąder (УЗИ яичек), nadczynność tarczycy (гипертиреоз). Rak piersi (рак груди) у мужчины — плотный эксцентричный guzek (узел), не центральное подсосковое уплотнение.",
                        focus: "Połogowe zapalenie sutka (лактационный мастит) — не повод прекращать karmienie (кормление). Молодой мужчина с ginekomastią (гинекомастией) — осмотреть и сделать USG jąder (УЗИ яичек)."
                    },
                    {
                        title: "Mutacje BRCA1/2, operacje redukujące ryzyko (носительство BRCA и профилактические операции)",
                        what: "Dziedziczny zespół raka piersi i jajnika (наследственный синдром рака груди и яичников) при mutacjach (мутациях) генов BRCA1 и BRCA2.",
                        where: "Zalecenia PTOK (rak piersi — nosicielki mutacji); wytyczne NCCN (Genetic/Familial High-Risk); Noszczyk «Chirurgia» -> Rak piersi.",
                        study: "Пожизненный риск raka piersi (рака груди) — примерно 60–70% (BRCA1) и 45–70% (BRCA2), raka jajnika (рака яичников) — ≈40–45% (BRCA1) и ≈10–20% (BRCA2); BRCA2 — также rak piersi у мужчин, rak gruczołu krokowego (простаты), rak trzustki (поджелудочной железы). Rak при BRCA1 часто potrójnie ujemny (трижды негативный). В польской популяции частые mutacje założycielskie (founder-мутации) BRCA1 (c.5266dupC/5382insC, c.181T>G/C61G, c.4035delA/4153delA). Наблюдение: MR piersi (МРТ груди) ежегодно с 25 лет, mammografia (маммография) с 30 лет. Profilaktyczna obustronna mastektomia (профилактическая двусторонняя мастэктомия) снижает риск raka piersi примерно на 90% и более. Profilaktyczna salpingooforektomia (профилактическая сальпингоофорэктомия) — BRCA1 в 35–40 лет, BRCA2 в 40–45 лет, после реализации репродуктивных планов; снижает риск raka jajnika примерно на 80% и общую смертность. Эффективного badania przesiewowego (скрининга) raka jajnika нет. Inhibitory PARP (ингибиторы PARP) (olaparyb — олапариб) — в лечении raka у nosicielek (носительниц).",
                        focus: "Profilaktyczną operację (профилактическую операцию) при BRCA1 для jajników (яичников) не откладывают до menopauzy (менопаузы) — оптимум 35–40 лет. USG (УЗИ) и CA-125 не заменяют salpingooforektomii (сальпингоофорэктомию)."
                    }
                ]
            },
            {
                title: "Вт: Опухоли и кисты печени, селезёнка, рак желчных путей (Guzy wątroby, śledziona, nowotwory dróg żółciowych)",
                id: "chir-watroba-sledziona",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Chirurgia wątroby, dróg żółciowych i śledziony",
                popup: { what: "Łagodne guzy wątroby (доброкачественные опухоли печени), HCC — rak wątrobowokomórkowy (ГЦК), przerzuty raka jelita grubego (метастазы колоректального рака), bąblowica (эхинококкоз), ropień wątroby (абсцесс печени), splenektomia (спленэктомия) и OPSI, rak pęcherzyka żółciowego (рак желчного пузыря) и guz Klatskina (опухоль Клацкина).", focus: "Naczyniaka (гемангиому) не биопсируют; gruczolak (аденома) связан с antykoncepcją hormonalną (контрацептивами) и может pęknąć (разорваться); HCC в marskiej wątrobie (цирротической печени) диагностируется визуализацией без biopsji; kryteria mediolańskie (критерии Милана); torbiel bąblowcową (эхинококковую кисту) не пунктируют вслепую.", reading: "Noszczyk «Chirurgia» -> Wątroba, Śledziona, Drogi żółciowe; wytyczne EASL (guzy łagodne wątroby 2016, HCC); Szczeklik -> Choroby wątroby." },
                subtopics: [
                    {
                        title: "Naczyniak, FNH, gruczolak wątrobowokomórkowy (доброкачественные опухоли печени)",
                        what: "Naczyniak (гемангиома), FNH — ogniskowy rozrost guzkowy (фокальная нодулярная гиперплазия) и gruczolak wątrobowokomórkowy (гепатоцеллюлярная аденома) — три главных łagodnych zmian ogniskowych wątroby (доброкачественных очага печени) у взрослых.",
                        where: "Wytyczne EASL (łagodne guzy wątroby, 2016); Noszczyk «Chirurgia» -> Guzy wątroby.",
                        study: "Naczyniak (гемангиома): самая частая łagodny guz wątroby, чаще у женщин; USG (УЗИ) — ognisko hiperechogeniczne (гиперэхогенный очаг); TK/MR (КТ/МРТ) — obwodowe guzkowe wzmocnienie (периферическое узловое контрастирование) с dośrodkowym wypełnianiem (центростремительным заполнением). Не биопсируют (krwawienie — кровотечение); лечение обычно не нужно. FNH (ogniskowy rozrost guzkowy): вторая по частоте, молодые женщины; centralna gwiaździsta blizna (центральный звёздчатый рубец), wzmocnienie tętnicze (артериальное контрастирование); злокачественного потенциала нет, лечения не требует, antykoncepcję (контрацептивы) отменять не обязательно. Gruczolak (gruczolak wątrobowokomórkowy — аденома): молодые женщины, длительный приём estrogenowej antykoncepcji (эстрогенных контрацептивов), sterydy anaboliczne (анаболические стероиды), glikogenozy (гликогенозы); риск krwawienia/pęknięcia (кровотечения/разрыва) и transformacji złośliwej (злокачественной трансформации) (подтип с β-kateniną, мужчины). Отмена antykoncepcji; ≥5 см после отмены — resekcja (резекция); у мужчин — resekcja независимо от размера.",
                        focus: "Три очага — три разных ответа: naczyniak (гемангиома) — ничего (без biopsji), FNH — ничего, gruczolak (аденома) — отменить antykoncepcję (контрацептивы), при ≥5 см — resekcja."
                    },
                    {
                        title: "Rak wątrobowokomórkowy, przerzuty raka jelita grubego (рак печени и метастазы КРР)",
                        what: "HCC (ГЦК) — первичный nowotwór wątroby (опухоль печени), обычно на фоне marskości (цирроза); przerzuty (метастазы) — самые частые złośliwe zmiany (злокачественные очаги) в печени.",
                        where: "Wytyczne EASL (HCC); Noszczyk «Chirurgia» -> Nowotwory wątroby; Szczeklik -> Rak wątrobowokomórkowy.",
                        study: "Факторы риска HCC: marskość wątroby (цирроз) любой этиологии (HBV, HCV, алкоголь, MASLD), HBV — и без marskości. Наблюдение при marskości — USG (УЗИ) каждые 6 мес. (± AFP). Диагноз у пациента с marskością возможен без biopsji: ognisko (очаг) ≥1 см с wzmocnieniem tętniczym (артериальным усилением) и wypłukiwaniem (вымыванием, washout) в fazie wrotnej lub późnej (портальную или отсроченную фазу) на wielofazowej TK lub MR (многофазной КТ или МРТ). Стадирование BCLC: 0/A — resekcja (резекция), ablacja (абляция), przeszczepienie (трансплантация); B — TACE; C — leczenie systemowe (системная терапия) (atezolizumab + bewacyzumab; sorafenib — в старых вопросах); D — objawowe (симптоматическое). Resekcja — при печени без marskości или Child-Pugh A без выраженного nadciśnienia wrotnego (портальной гипертензии). Kryteria mediolańskie (критерии Милана) для przeszczepienia: одно ognisko ≤5 см или до 3 ognisk ≤3 см каждое, без naciekania naczyń (инвазии сосудов) и przerzutów pozawątrobowych (внепечёночных метастазов). Przerzuty raka jelita grubego (метастазы КРР): resekcja, если возможна R0 при достаточном остатке печени (≈20–30% при здоровом miąższu — паренхиме); часто с okołooperacyjną chemioterapią (периоперационной химиотерапией); 5-летняя выживаемость после resekcji около 40–50%.",
                        focus: "Przerzuty raka jelita grubego do wątroby (метастазы КРР в печень) — не приговор: при resekcyjności (резектабельности) правильный ответ — resekcja, а не leczenie paliatywne (паллиатив)."
                    },
                    {
                        title: "Bąblowica wątroby, ropień wątroby (эхинококкоз и абсцесс печени)",
                        what: "Torbiele pasożytnicze wątroby (паразитарные кисты печени) (Echinococcus granulosus — jednokomorowy (однокамерный), E. multilocularis — wielojamowy (альвеолярный)); ropień (абсцесс) — ropny (гнойный) или pełzakowy (амёбный).",
                        where: "Noszczyk «Chirurgia» -> Torbiele pasożytnicze wątroby, Ropień wątroby; Szczeklik -> Choroby pasożytnicze.",
                        study: "E. granulosus: żywiciel ostateczny (окончательный хозяин) — собака, человек — żywiciel pośredni (промежуточный); torbiel (киста) с pęcherzykami potomnymi (дочерними пузырями), objaw «lilii wodnej» (симптом водяной лилии), zwapniała ściana (обызвествлённая стенка); serologia (серология). Опасность пункции — anafilaksja (анафилаксия) и rozsiew w jamie otrzewnej (обсеменение брюшной полости); лечение — albendazol (альбендазол) + операция (с обработкой полости roztworem skolikobójczym — сколицидным раствором) или PAIR (пункция-аспирация-инъекция-реаспирация) под прикрытием albendazolu в отобранных случаях. E. multilocularis (bąblowica wielojamowa — альвеококкоз; лиса): naciekający wzrost (инфильтративный рост) как у опухоли; в Польше встречается, наибольшая заболеваемость — warmińsko-mazurskie и podlaskie (северо-восток), второй очаг — podkarpackie; radykalna resekcja (радикальная резекция) + длительный albendazol, иногда przeszczepienie wątroby (трансплантация). Ropień ropny (гнойный абсцесс): источник — drogi żółciowe (желчные пути) или droga wrotna (портальный путь) (zapalenie wyrostka robaczkowego — аппендицит, zapalenie uchyłków — дивертикулит); Klebsiella pneumoniae, E. coli, beztlenowce (анаэробы); antybiotyki + drenaż przezskórny (чрескожное дренирование) крупных полостей. Ropień pełzakowy (амёбный) (Entamoeba histolytica): после поездки в тропики, prawy płat (правая доля), «pasta z sardeli» (паста анчоусов); metronidazol (метронидазол) обычно без drenażu, затем lek działający w świetle jelita (просветный препарат).",
                        focus: "Диагностическая пункция torbieli wątroby (кисты печени) без исключения bąblowicy (эхинококкоза) — ошибочный ответ. Ropień pełzakowy (амёбный абсцесс), в отличие от ropnego, чаще лечится без drenażu (дренирования)."
                    },
                    {
                        title: "Splenektomia, OPSI (спленэктомия и OPSI)",
                        what: "Показания к usunięciu śledziony (удалению селезёнки) и piorunujące zakażenie po splenektomii (молниеносная инфекция после спленэктомии, overwhelming post-splenectomy infection).",
                        where: "Noszczyk «Chirurgia» -> Śledziona; Szczeklik -> Hematologia (sferocytoza, ITP); PSO — szczepienia osób z asplenią (сверить актуальный Komunikat GIS).",
                        study: "Показания: uraz (травма) у нестабильного или неуспех leczenia oszczędzającego (органосохраняющего лечения); sferocytoza wrodzona (наследственный сфероцитоз) (по возможности после 6 лет); ITP — małopłytkowość immunologiczna (ИТП), не отвечающая на лечение (сейчас после других линий, обычно не ранее 12 мес. от диагноза); oporna niedokrwistość autoimmunohemolityczna (рефрактерная аутоиммунная гемолитическая анемия); hipersplenizm (гиперспленизм); ropień (абсцесс), torbiele (кисты), guzy śledziony (опухоли селезёнки). OPSI: Streptococcus pneumoniae (самый частый), N. meningitidis, H. influenzae b, Capnocytophaga canimorsus после pogryzienia przez psa (укуса собаки); тяжёлое течение malarii (малярии) и babeszjozy (бабезиоза); śmiertelność (летальность) до 50%; риск выше у детей и в первые 2 года, но сохраняется пожизненно. Профилактика: szczepionki (вакцины) против pneumokoków (пневмококка), meningokoków (менингококка) (ACWY и B), Hib, ежегодно grypa (грипп) — за ≥2 недели до плановой операции или через ≥14 дней после экстренной; у детей — длительная profilaktyka penicyliną (профилактика пенициллином); всем — «резервный» antybiotyk (amoksycylina z kwasem klawulanowym — амоксициллин с клавулановой кислотой) при gorączce (лихорадке) и немедленное обращение. После splenektomii в rozmazie (мазке) — ciałka Howella-Jolly'ego (тельца Хауэлла-Жолли), nadpłytkowość (тромбоцитоз).",
                        focus: "Gorączka (лихорадка) у пациента bez śledziony (без селезёнки) — неотложное состояние: antybiotyk (антибиотик) сразу, без ожидания результатов."
                    },
                    {
                        title: "Rak pęcherzyka żółciowego, guz Klatskina (рак желчного пузыря, опухоль Клацкина)",
                        what: "Gruczolakorak pęcherzyka żółciowego (аденокарцинома желчного пузыря) и rak wnęki wątroby (воротная холангиокарцинома; рак у слияния печёночных протоков).",
                        where: "Noszczyk «Chirurgia» -> Nowotwory dróg żółciowych; wytyczne ESGAR/EAES (polipy pęcherzyka, 2022).",
                        study: "Rak pęcherzyka żółciowego: факторы — крупные kamienie (камни) (>3 см), pęcherzyk porcelanowy («фарфоровый» пузырь; обызвествлённая стенка), polipy (полипы) ≥10 мм, PSC — pierwotne stwardniające zapalenie dróg żółciowych (ПСХ), аномалии połączenia trzustkowo-żółciowego (панкреато-билиарного соустья). Pęcherzyk porcelanowy — показание к cholecystektomii (холецистэктомии) (исторические оценки риска raka завышены, но в тестах ответ — операция). Polipy ≥10 мм — cholecystektomia; 6–9 мм с факторами риска — операция или наблюдение. Часто находка после cholecystektomii: при T1b и глубже — повторная операция (resekcja łożyska IVb/V (резекция ложа) + limfadenektomia (лимфаденэктомия)). Guz Klatskina (опухоль Клацкина): bezbolesna narastająca żółtaczka (безболезненная нарастающая желтуха), poszerzone drogi żółciowe wewnątrzwątrobowe (расширены внутрипечёночные протоки), pęcherzyk żółciowy НЕ увеличен (obstrukcja выше przewodu pęcherzykowego (пузырного протока) — objaw Courvoisiera (симптом Курвуазье) отрицателен); факторы — PSC (ПСХ), torbiele dróg żółciowych (кисты холедоха), przywry wątrobowe (печёночные двуустки); CA 19-9, MRCP (МРХПГ); klasyfikacja Bismutha-Corlette'a I–IV; лечение — resekcja dróg żółciowych z hemihepatektomią (резекция протоков с гемигепатэктомией), у отобранных — przeszczepienie wątroby (трансплантация).",
                        focus: "Bezbolesna żółtaczka (безболезненная желтуха) + пальпируемый pęcherzyk = rak głowy trzustki (рак головки поджелудочной) или okolicy okołobrodawkowej (периампулярной зоны); bezbolesna żółtaczka + спавшийся pęcherzyk + poszerzone drogi żółciowe wewnątrzwątrobowe = guz Klatskina."
                    }
                ]
            },
            {
                title: "Ср: Ортопедия и травматология II (Złamania kończyny górnej, złamania u dzieci, kręgosłup, kolano)",
                id: "chir-ortopedia-2",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Ortopedia i traumatologia narządu ruchu",
                popup: { what: "Złamania kończyny górnej (переломы верхней конечности), особенности złamań u dzieci (переломов у детей), zapalenie kości i szpiku (остеомиелит), radikulopatia (радикулопатия) и zespół ogona końskiego (синдром конского хвоста), urazy ścięgna Achillesa (травмы ахиллова сухожилия) и stawu kolanowego (колена).", focus: "Боль в tabakierce anatomicznej (анатомической табакерке) при нормальном RTG — unieruchomienie (иммобилизация) и повтор снимка; złamanie trzonu kości ramiennej (перелом диафиза плеча) — nerw promieniowy (лучевой нерв); zespół ogona końskiego — pilne MR (экстренная МРТ) и dekompresja (декомпрессия); test Lachmana — самый чувствительный тест на ACL — więzadło krzyżowe przednie (ПКС).", reading: "Noszczyk «Chirurgia» -> Ortopedia i traumatologia; podręcznik ortopedii (Gaździk «Ortopedia i traumatologia»); LEK w pigułce -> Ortopedia." },
                subtopics: [
                    {
                        title: "Złamanie Collesa, Smitha, złamanie kości łódeczkowatej (переломы лучевой и ладьевидной кости)",
                        what: "Złamania dalszej nasady kości promieniowej (переломы дистального отдела лучевой кости) и самый частый перелом kości nadgarstka (костей запястья).",
                        where: "Gaździk «Ortopedia i traumatologia» -> Złamania nadgarstka; Noszczyk «Chirurgia» -> Złamania kończyny górnej.",
                        study: "Złamanie Collesa (Коллес): падение на разогнутую кисть, смещение дистального отломка к тылу — деформация «bagnetowa» (штыка) или «widelcowa» (вилки); пожилые женщины с osteoporozą (остеопорозом) (после złamania niskoenergetycznego — диагностика osteoporozy). Złamanie Smitha (Смит) — падение на согнутую кисть, смещение к ладони («обратный Коллес»). Лечение: zamknięta repozycja (закрытая репозиция) и opatrunek gipsowy (гипс), при нестабильности или внутрисуставном смещении — płytka dłoniowa (пластина с ладонной стороны). Осложнения: ucisk nerwu pośrodkowego (сдавление срединного нерва), CRPS — zespół algodystroficzny (комплексный регионарный болевой синдром, zespół Sudecka), поздний разрыв ścięgna prostownika długiego kciuka (сухожилия длинного разгибателя большого пальца). Kość łódeczkowata (ладьевидная кость): молодые, падение на разогнутую кисть; болезненность в tabakierce anatomicznej (анатомической табакерке), над guzkiem kości łódeczkowatej (бугорком), при осевой нагрузке на I палец. Первичный RTG может быть нормальным — при клиническом подозрении unieruchomienie (иммобилизация) (gips z objęciem kciuka — гипс с захватом большого пальца) и повтор RTG через 10–14 дней или ранняя MR/TK (МРТ/КТ). Кровоснабжение идёт от дистального полюса — риск martwicy jałowej (асептического некроза) проксимального полюса и stawu rzekomego (несращения). Несмещённый перелом talii (талии) — gips 6–12 недель или śruba (винт); смещённый и проксимального полюса — osteosynteza (остеосинтез).",
                        focus: "«RTG без złamania — отпустить без unieruchomienia (иммобилизации)» — классическая ловушка CEM. Решает клиника, а не первый снимок."
                    },
                    {
                        title: "Złamanie obojczyka, kości ramiennej (переломы ключицы и плечевой кости)",
                        what: "Частые złamania obręczy barkowej (переломы плечевого пояса) с характерными uszkodzeniami nerwów (повреждениями нервов).",
                        where: "Gaździk «Ortopedia i traumatologia» -> Złamania obojczyka i kości ramiennej.",
                        study: "Obojczyk (ключица): ≈80% — средняя треть; лечение в основном zachowawcze (консервативное) (temblak — косыночная повязка, реже opatrunek ósemkowy — восьмиобразная); операция — złamanie otwarte (открытый перелом), угроза перфорации кожи, uszkodzenie naczyń i nerwów (повреждение сосудов и нервов), выраженное przemieszczenie (смещение) или skrócenie (укорочение) >2 см (относительно). Złamanie obojczyka (перелом ключицы) — самый частый złamanie okołoporodowe (родовой перелом), лечения обычно не требует. Szyjka chirurgiczna kości ramiennej (хирургическая шейка плеча) — nerw pachowy (подмышечный нерв) (чувствительность над mięśniem naramiennym — дельтовидной мышцей). Trzon kości ramiennej (диафиз плеча) — nerw promieniowy (лучевой нерв) в борозде: «opadająca ręka» (свисающая кисть), нарушение разгибания кисти и пальцев; большинство — neuropraksja (нейропраксия) с самостоятельным восстановлением, наблюдение 3–4 мес.; лечение złamania чаще ortezą czynnościową (функциональным ортезом). Złamanie nadkłykciowe (надмыщелковый перелом) у ребёнка — tętnica ramienna (плечевая артерия) и nerw pośrodkowy (срединный нерв) (nerw międzykostny przedni — передний межкостный), риск niedokrwiennego przykurczu Volkmanna (ишемической контрактуры Фолькмана). Nadkłykieć przyśrodkowy (медиальный надмыщелок) — nerw łokciowy (локтевой нерв).",
                        focus: "Сопоставление «złamanie — nerw»: szyjka kości ramiennej — nerw pachowy (подмышечный), trzon — nerw promieniowy (лучевой), nadkłykieć przyśrodkowy — nerw łokciowy (локтевой), nadkłykciowe у детей — nerw pośrodkowy (срединный) и tętnica ramienna (плечевая артерия)."
                    },
                    {
                        title: "Złamania u dzieci, Salter-Harris; krwiopochodne zapalenie kości (переломы у детей и гематогенный остеомиелит)",
                        what: "Особенности złamań (переломов) растущего скелета и ostre krwiopochodne zapalenie kości (острая гематогенная инфекция кости) у детей.",
                        where: "Gaździk «Ortopedia i traumatologia» -> Złamania u dzieci; Kawalec/Grenda/Kulus «Pediatria» -> Zapalenie kości i szpiku; wytyczne ESPID (osteomyelitis u dzieci).",
                        study: "Salter-Harris: I — через chrząstkę wzrostową (зону роста); II — через chrząstkę wzrostową и przynasadę (метафиз) (самый частый, ≈75%); III — chrząstka wzrostowa и nasada (эпифиз) (внутрисуставной); IV — через przynasadę, chrząstkę wzrostową и nasadę; V — kompresja chrząstki wzrostowej (компрессия зоны роста) (худший прогноз, часто не виден на первом снимке). III и IV требуют анатомической repozycji (репозиции), часто otwartej (открытой). «Zielona gałązka» (зелёная ветка; złamanie typu zielonej gałązki, podokostnowe) — неполный перелом с сохранённой okostną (надкостницей); złamanie typu torus (торус) — выпячивание warstwy korowej (кортикального слоя) при компрессии. Подозрение na przemoc wobec dziecka (жестокое обращение): przynasadowe złamania «narożne» (метафизарные «угловые» переломы), tylne złamania żeber (задние переломы рёбер), множественные złamania разной давности, złamania у неходящего младенца. Krwiopochodne zapalenie kości (гематогенный остеомиелит): przynasada kości długich (метафиз длинных костей) (kość udowa — бедро, piszczel — большеберцовая); S. aureus во всех возрастах, Kingella kingae у 6 мес.–4 лет, у новорождённых — также paciorkowiec grupy B (стрептококк группы B) и E. coli, при niedokrwistości sierpowatokrwinkowej (серповидноклеточной анемии) — Salmonella. Gorączka (лихорадка), боль, отказ опираться на ногу. RTG в первые 10–14 дней нормален; MR (МРТ) — самое чувствительное раннее исследование; posiewy krwi (посевы крови), punkcja (пункция). Лечение — эмпирически antybiotyk przeciwgronkowcowy i.v. (противостафилококковый антибиотик в/в) (cefazolina — цефазолин, kloksacylina — клоксациллин; при MRSA — klindamycyna (клиндамицин) или wankomycyna (ванкомицин)), ранний переход на doustny (пероральный); всего ≈3 недели при неосложнённом течении; ropień (абсцесс) — drenaż (дренирование).",
                        focus: "Нормальный RTG не исключает zapalenia kości (остеомиелит) в первые две недели. Salter-Harris V часто диагностируют ретроспективно — по skróceniu kończyny (укорочению конечности)."
                    },
                    {
                        title: "Przepuklina krążka międzykręgowego, zespół ogona końskiego, «czerwone flagi» (грыжа диска, синдром конского хвоста, «красные флаги»)",
                        what: "Выпячивание jądra miażdżystego (пульпозного ядра) со сдавлением korzenia nerwowego (корешка); zespół ogona końskiego (синдром конского хвоста) — сдавление korzeni ниже stożka rdzeniowego (конуса спинного мозга).",
                        where: "Gaździk «Ortopedia i traumatologia» -> Choroby kręgosłupa; Szczeklik -> Bóle krzyża.",
                        study: "≈90–95% przepuklin — L4–L5 и L5–S1; tylno-boczna przepuklina (заднебоковая грыжа) L4–L5 сдавливает korzeń L5. L4: ослаблен odruch kolanowy (коленный рефлекс), слабость mięśnia czworogłowego (четырёхглавой мышцы), чувствительность по przyśrodkowej powierzchni goleni (медиальной поверхности голени). L5: слабость zgięcia grzbietowego (тыльного сгибания) I пальца (трудно ходить на пятках), онемение grzbietu stopy (тыла стопы), odruchy (рефлексы) в норме. S1: ослаблен odruch skokowy (ахиллов рефлекс), слабость zgięcia podeszwowego (подошвенного сгибания) (трудно ходить на носках), латеральный край стопы. Objaw Lasègue'a (симптом Ласега) положителен при 30–70°. Лечение: 6 недель zachowawczo (консервативно) (NLPZ (НПВП), сохранение активности, fizjoterapia (физиотерапия); постельный режим не рекомендован); MR (МРТ) — при «czerwonych flagach» или неэффективности; mikrodiscektomia (микродискэктомия) — стойкая radikulopatia (радикулопатия) >6 недель, нарастающий deficyt ruchowy (двигательный дефицит), zespół ogona końskiego. Zespół ogona końskiego: znieczulenie siodłowate (седловидная анестезия), zatrzymanie moczu (задержка мочи) (с nietrzymaniem z przepełnienia — парадоксальным недержанием), nietrzymanie stolca (недержание кала), obniżone napięcie zwieracza odbytu (сниженный тонус сфинктера), obustronna rwa kulszowa (двусторонняя ишиалгия) — pilne MR (экстренная МРТ) и dekompresja (декомпрессия) (классически в течение 48 ч, чем раньше, тем лучше). «Czerwone flagi» (красные флаги) bólu pleców (боли в спине): возраст <20 или >50 лет, онкологический анамнез, необъяснимое похудение, gorączka (лихорадка), immunosupresja (иммуносупрессия), narkotyki i.v. (в/в наркотики), uraz (травма), osteoporoza (остеопороз) или длительные glikokortykosteroidy (глюкокортикоиды), ночная и постоянная боль в покое, postępujący deficyt neurologiczny (прогрессирующий неврологический дефицит), objawy ogona końskiego.",
                        focus: "Zatrzymanie moczu (задержка мочи) у пациента с bólem pleców (болью в спине) — не «урология», а zespół ogona końskiego (конский хвост): pilne MR (экстренная МРТ). Без «czerwonych flag» MR в первые 6 недель не нужна."
                    },
                    {
                        title: "Zerwanie ścięgna Achillesa, uszkodzenie łąkotki, więzadło krzyżowe przednie (ахиллово сухожилие, мениск, ПКС)",
                        what: "Частые urazy sportowe (спортивные травмы) kończyny dolnej (нижней конечности) с характерными testami klinicznymi (клиническими тестами).",
                        where: "Gaździk «Ortopedia i traumatologia» -> Urazy stawu kolanowego, Urazy ścięgien.",
                        study: "Ścięgno Achillesa (ахиллово сухожилие): 30–50 лет, «спортсмены выходного дня», fluorochinolony (фторхинолоны), glikokortykosteroidy (глюкокортикоиды); внезапная боль «как удар по пятке», пальпируемый ubytek (дефект). Test Thompsona (тест Томпсона) (Simmondsa): сжатие mięśnia łydki (икроножной мышцы) у лежащего на животе НЕ вызывает zgięcia podeszwowego (подошвенного сгибания) — zerwanie (разрыв). Подтверждение — USG (УЗИ); лечение operacyjne (оперативное) или zachowawcze czynnościowe (консервативное функциональное) (orteza w ustawieniu końskim — ортез в эквинусе) с сопоставимой частотой ponownych zerwań (повторных разрывов). Łąkotka (мениск): przyśrodkowa (медиальный) повреждается чаще (сращена с więzadłem pobocznym piszczelowym — медиальной коллатеральной связкой); ротационная травма на согнутом колене, blokowanie stawu (блокада сустава), болезненность szpary stawowej (суставной щели), testy McMurraya, Apleya, Thessaly; MR (МРТ); szycie łąkotki (шов) в периферической «czerwonej» strefie (красной зоне) или częściowa meniscektomia (частичная менискэктомия); zwyrodnieniowe uszkodzenie (дегенеративный разрыв) у пожилого — сначала rehabilitacja (реабилитация). ACL — więzadło krzyżowe przednie (ПКС): бесконтактный поворот на опорной ноге, «trzask» (щелчок), быстрый krwiak stawu (гемартроз) (в течение часов); test Lachmana (тест Лахмана) — самый чувствительный, pivot shift — самый специфичный, objaw szuflady przedniej (передний выдвижной ящик); MR; rekonstrukcja (реконструкция) у молодых активных и при niestabilności (нестабильности). «Nieszczęsna triada» O'Donoghue (несчастная триада О'Донохью) — ACL, więzadło poboczne przyśrodkowe (медиальная коллатеральная связка), łąkotka (классически przyśrodkowa; в острых травмах чаще boczna — латеральный).",
                        focus: "Сохранённое активное zgięcie podeszwowe stopy (подошвенное сгибание) не исключает zerwania ścięgna Achillesa (разрыва ахиллова сухожилия) — работают zginacze palców (сгибатели пальцев) и mięsień piszczelowy tylny (задняя большеберцовая). Решает test Thompsona."
                    }
                ]
            },
            {
                title: "Чт: Урология и детская хирургия II (Nowotwory jądra, wady narządów płciowych, chirurgia noworodka)",
                id: "chir-urologia-dziecieca",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Urologia i chirurgia dziecięca",
                popup: { what: "Rak jądra (рак яичка), wnętrostwo (крипторхизм), stulejka (фимоз) и załupek (парафимоз), spodziectwo (гипоспадия), żylaki powrózka nasiennego (варикоцеле), wodniak jądra (гидроцеле); choroba Hirschsprunga (болезнь Гиршпрунга), zaburzenia zwrotu jelit ze skrętem (мальротация с заворотом), NEC — martwicze zapalenie jelit (НЭК), uchyłek Meckela (дивертикул Меккеля), zapalenie wyrostka robaczkowego (аппендицит) у детей и беременных.", focus: "Orchidektomia (орхиэктомия) при подозрении на raka — только dostępem pachwinowym (паховым доступом); AFP при «чистом» nasieniaku (семиноме) не повышен; wymioty żółciowe (рвота желчью) у новорождённого — экстренное исключение zaburzeń zwrotu jelit (мальротации); ребёнка со spodziectwem (гипоспадией) не обрезают.", reading: "Noszczyk «Chirurgia» -> Urologia; wytyczne EAU (nowotwory jądra, urologia dziecięca); Kawalec/Grenda/Kulus «Pediatria» -> Chirurgia noworodka; Bręborowicz «Położnictwo i ginekologia» -> Ostry brzuch w ciąży." },
                subtopics: [
                    {
                        title: "Nowotwory zarodkowe jądra (рак яичка)",
                        what: "Nowotwory zarodkowe jądra (герминогенные опухоли яичка) — самая частая солидная опухоль у мужчин 15–35 лет.",
                        where: "Wytyczne EAU (nowotwory jądra); Noszczyk «Chirurgia» -> Urologia -> Nowotwory jądra.",
                        study: "Факторы: wnętrostwo (крипторхизм) (риск и в przeciwległym jądrze — контралатеральном яичке), rak jądra в анамнезе и у родственников, zespół Klinefeltera (синдром Клайнфельтера), niepłodność (бесплодие). Клиника — безболезненное плотное образование в яичке. Nasieniak (семинома) (≈50%): пик 30–40 лет, AFP НЕ повышен никогда, β-hCG повышен примерно у 15–30% (EAU — до 30%); чувствителен к radioterapii (лучевой) и chemioterapii (химиотерапии). Nienasieniakowe (несеминомные): rak zarodkowy (эмбриональный рак), guz pęcherzyka żółtkowego (опухоль желточного мешка) (AFP; самая частая у детей), rak kosmówki (хориокарцинома) (очень высокий β-hCG, ранние przerzuty krwiopochodne (гематогенные метастазы) в płuca, ginekomastia), potworniak (тератома) (маркёры отрицательны, chemiooporny — химиорезистентна — операция). LDH — отражает массу опухоли. Маркёры до и после orchidektomii (орхиэктомии) (okres półtrwania (период полувыведения) AFP 5–7 дней, β-hCG 1–3 дня). Диагностика — USG moszny (УЗИ мошонки). Лечение — radykalna orchidektomia z dostępu pachwinowego (радикальная орхиэктомия паховым доступом) с высокой перевязкой powrózka nasiennego (семенного канатика); biopsja przez mosznę (трансскротальная биопсия) или orchidektomia przez mosznę противопоказаны (меняют odpływ chłonki (лимфоотток) на węzły pachwinowe (паховые узлы)). Первые regionalne przerzuty — węzły chłonne zaotrzewnowe (забрюшинные, парааортальные лимфоузлы); стадирование — TK klatki piersiowej, jamy brzusznej, miednicy (КТ грудной клетки, живота, таза). До лечения — kriokonserwacja nasienia (криоконсервация спермы). Chemioterapia BEP (bleomycyna — блеомицин — włóknienie płuc, фиброз лёгких).",
                        focus: "Повышенный AFP у пациента с «nasieniakiem» (семиномой) в гистологии означает komponent nienasieniakowy (несеминомный компонент) — лечат как nienasieniaka. Przerzuty do węzłów pachwinowych (метастазы в паховые узлы) — не типичны (odpływ chłonki в zaotrzewnowe)."
                    },
                    {
                        title: "Wnętrostwo, stulejka, załupek, spodziectwo (крипторхизм, фимоз, парафимоз, гипоспадия)",
                        what: "Самые частые wady i choroby zewnętrznych narządów płciowych (пороки и болезни наружных половых органов) у мальчиков.",
                        where: "Wytyczne EAU (urologia dziecięca); Kawalec/Grenda/Kulus «Pediatria» -> Wady układu moczowo-płciowego.",
                        study: "Wnętrostwo (крипторхизм): ≈1–4,6% доношенных и до ~30–45% недоношенных; самопроизвольное опущение в основном в первые 6 мес. Orchidopeksja (орхидопексия) — в 6–12 мес., не позднее 18 мес. (EAU); hormonoterapia (гормональная терапия) рутинно не рекомендуется. Niewyczuwalne jądro (непальпируемое яичко) — laparoskopia diagnostyczna (диагностическая лапароскопия) (USG не рекомендуется). Obustronne niewyczuwalne jądra (двусторонние непальпируемые яички) или wnętrostwo со spodziectwem (гипоспадией) — диагностика DSD — zaburzeń rozwoju płci (нарушения формирования пола) (kariotyp — кариотип, исключить wrodzony przerost nadnerczy — ВГКН). Последствия — niepłodność (бесплодие) и повышенный риск raka (orchidopeksja облегчает контроль, но риск не устраняет). Jądro wędrujące (ретрактильное яичко) — наблюдение. Stulejka fizjologiczna (физиологический фимоз) у маленьких мальчиков — норма, насильно не оттягивать; patologiczna (патологический) (bliznowata — рубцовый, liszaj twardzinowy — склероатрофический лишай) — miejscowy glikokortykosteroid (местный глюкокортикоид) 4–8 недель, затем операция. Załupek (парафимоз) — неотложное состояние: ręczne odprowadzenie (ручное вправление) (сдавление obrzęku — отёка, chłodzenie — охлаждение, analgezja — обезболивание), при неудаче — nacięcie grzbietowe (дорзальный разрез). Spodziectwo (гипоспадия): ujście zewnętrzne cewki moczowej (наружное отверстие уретры) на брюшной стороне (чаще dystalna postać — дистальная форма), skrzywienie prącia (искривление полового члена); не выполнять obrzezania (циркумцизии) — napletek (крайняя плоть) нужен для реконструкции; операция в 6–18 мес.",
                        focus: "Сроки: orchidopeksja (орхидопексия) до 12–18 мес.; ожидание «до школы» — старый и неверный ответ. Załupka (парафимоз) оставлять до утра нельзя."
                    },
                    {
                        title: "Żylaki powrózka nasiennego, wodniak jądra (варикоцеле и гидроцеле)",
                        what: "Żylaki powrózka nasiennego (варикоцеле) — расширение żył splotu wiciowatego (вен лозовидного сплетения); wodniak jądra (гидроцеле) — скопление жидкости в jamie osłonki pochwowej jądra (полости влагалищной оболочки яичка).",
                        where: "Wytyczne EAU (niepłodność męska, urologia dziecięca); Noszczyk «Chirurgia» -> Urologia.",
                        study: "Żylaki powrózka (варикоцеле): ≈90% — слева (lewa żyła jądrowa — левая яичковая вена впадает в lewą żyłę nerkową — левую почечную под прямым углом); «worek robaków» (мешок червей), увеличивается стоя и при próbie Valsalvy (пробе Вальсальвы), спадается лёжа. Prawostronne (правостороннее), внезапно возникшее или не спадающее лёжа — искать guz zaotrzewnowy (забрюшинную опухоль) или rak nerki (рак почки) с zakrzepem (тромбом) (USG/TK). Лечение (mikrochirurgiczne podwiązanie — микрохирургическая перевязка или embolizacja — эмболизация): niepłodność (бесплодие) с изменениями seminogramu (спермограммы), отставание роста jądra у подростка (разница объёмов >20%), боль. Wodniak (гидроцеле): просвечивает при diafanoskopii (transiluminacja), jądro плохо прощупывается; у младенцев — wodniak komunikujący (сообщающееся) (otwarty wyrostek pochwowy otrzewnej — открытый влагалищный отросток брюшины), обычно проходит к 12–24 мес., операция при сохранении или сочетании с przepukliną pachwinową (паховой грыжей); у взрослого — USG для исключения guza (опухоли) и zapalenia najądrza (эпидидимита), операция при симптомах.",
                        focus: "Новое prawostronne żylaki powrózka (правостороннее варикоцеле) у взрослого — симптом, а не диагноз: визуализация nerek (почек) и przestrzeni zaotrzewnowej (забрюшинного пространства)."
                    },
                    {
                        title: "Choroba Hirschsprunga, zaburzenia zwrotu jelit ze skrętem, martwicze zapalenie jelit (хирургия новорождённых: Гиршпрунг, мальротация, НЭК)",
                        what: "Три ведущие причины niedrożności jelit (кишечной непроходимости) и «ostrego brzucha» (острого живота) у новорождённого.",
                        where: "Kawalec/Grenda/Kulus «Pediatria» -> Chirurgia noworodka; Noszczyk «Chirurgia» -> Chirurgia dziecięca.",
                        study: "Choroba Hirschsprunga (Гиршпрунг): отсутствие komórek zwojowych (ганглиозных клеток) в splocie podśluzówkowym i mięśniowym (подслизистом и мышечном сплетениях), начиная от odbytu (ануса), у ≈75–80% — odcinek odbytniczo-esiczy (ректосигмоидная зона); мальчики ≈4:1, связь с zespołem Downa (синдромом Дауна) и RET. Opóźnione oddanie smółki (задержка отхождения мекония) >48 ч (>24 ч — подозрение), wzdęcie (вздутие), wymioty żółciowe (рвота желчью), «взрывное» отхождение газов и стула после badania per rectum (ректального исследования); позже — przewlekłe zaparcia (хронические запоры). Грозное осложнение — zapalenie jelit w chorobie Hirschsprunga (энтероколит Гиршпрунга). Золотой стандарт — biopsja ssąca odbytnicy (ректальная аспирационная биопсия): нет komórek zwojowych, повышена активность acetylocholinoesterazy (ацетилхолинэстеразы), нет kalretyniny (кальретинина); wlew kontrastowy (контрастная клизма) — strefa przejściowa (переходная зона); manometria (манометрия) — нет odruchu odbytniczo-odbytowego hamującego (ректоанального тормозного рефлекса). Лечение — resekcja odcinka bezzwojowego (резекция аганглионарного сегмента) с przeciągnięciem (низведением) (Swenson, Duhamel, Soave, dostęp przezodbytniczy — трансанальный). Zaburzenia zwrotu jelit ze skrętem jelita środkowego (мальротация с заворотом средней кишки): wymioty żółciowe у новорождённого — pilny stan chirurgiczny (хирургическая неотложность), пока не доказано обратное; большинство — в первый месяц; исследование выбора — badanie kontrastowe górnego odcinka przewodu pokarmowego (контрастное исследование верхних отделов ЖКТ) (zgięcie dwunastniczo-czcze — дуоденоеюнальный переход не слева от позвоночника, «korkociąg» — штопор), USG — objaw wiru (симптом водоворота), żyła krezkowa górna (верхняя брыжеечная вена) слева от tętnicy krezkowej górnej (верхней брыжеечной артерии); нестабильный — сразу laparotomia (лапаротомия). Operacja Ladda (операция Ладда): detorsja przeciwnie do ruchu wskazówek zegara (деторсия против часовой стрелки), przecięcie pasm Ladda (рассечение тяжей Ладда), poszerzenie krezki (расширение брыжейки), appendektomia (аппендэктомия). NEC — martwicze zapalenie jelit (НЭК): wcześniaki (недоношенные), масса <1500 г, karmienie sztuczne (искусственное вскармливание) (mleko kobiece — грудное молоко защищает), обычно на 2–3 неделе; wzdęcie (вздутие), zaleganie żółciowe w żołądku (застой в желудке с желчью), кровь в стуле, bezdechy (апноэ). RTG: pneumatosis intestinalis (пневматоз кишечной стенки) — ключевой признак, gaz w żyle wrotnej (газ в воротной вене), odma otrzewnowa (пневмоперитонеум) — perforacja (перфорация). Klasyfikacja Bella (стадии по Беллу). Лечение: ничего dojelitowo (энтерально), odbarczenie żołądka (декомпрессия желудка), antybiotyki i.v., żywienie pozajelitowe (парентеральное питание); perforacja — операция или drenaż otrzewnowy (перитонеальный дренаж). Поздние осложнения — zwężenia (стриктуры), zespół krótkiego jelita (синдром короткой кишки).",
                        focus: "Wymioty żółciowe (рвота желчью) у здорового до того новорождённого — не «ждать и наблюдать», а экстренное исследование на zaburzenia zwrotu jelit (мальротацию). Opóźnione oddanie smółki (задержка мекония) при mukowiscydozie (муковисцидозе) — niedrożność smółkowa (мекониальный илеус), не choroba Hirschsprunga."
                    },
                    {
                        title: "Uchyłek Meckela, zapalenie wyrostka u dzieci i w ciąży (дивертикул Меккеля, аппендицит у детей и беременных)",
                        what: "Uchyłek Meckela (дивертикул Меккеля) — остаток przewodu żółtkowego (желточного протока) на jelicie krętym (подвздошной кишке); особенности zapalenia wyrostka robaczkowego (аппендицита) у детей и беременных.",
                        where: "Noszczyk «Chirurgia» -> Chirurgia dziecięca; Kawalec/Grenda/Kulus «Pediatria» -> Ostry brzuch u dzieci; Bręborowicz «Położnictwo i ginekologia» -> Ostry brzuch w ciąży.",
                        study: "Uchyłek Meckela — uchyłek prawdziwy (истинный дивертикул) на противобрыжеечном крае jelita krętego (подвздошной кишки). Правило двоек: ≈2% населения, ≈60 см (2 фута) от zastawki krętniczo-kątniczej (илеоцекального клапана), ≈5 см длины, 2 вида ektopowej tkanki (эктопической ткани) (błona śluzowa żołądka — желудочная — чаще, trzustkowa — панкреатическая), симптомы чаще до 2 лет, мальчики ≈2:1. У детей чаще всего — bezbolesne krwawienie z odbytu (безболезненное ректальное кровотечение) (кирпично-красное или тёмное, может вызвать niedokrwistość — анемию); также wgłobienie (инвагинация), skręt (заворот), zapalenie uchyłka (дивертикулит), имитирующее zapalenie wyrostka; przepuklina Littrégo (грыжа Литтре). Диагностика — scyntygrafia (сцинтиграфия) с Tc-99m nadtechnecjanem (пертехнетатом) (выявляет ektopową błonę śluzową żołądka). Лечение objawowego — diwertykulektomia (дивертикулэктомия) или resekcja segmentu jelita (сегментарная резекция). Zapalenie wyrostka u dzieci (аппендицит у детей): до 5 лет атипичен, быстро perforuje (перфорирует) (cienka sieć — тонкий сальник); PAS (Pediatric Appendicitis Score); визуализация первого выбора — USG (УЗИ), не TK (КТ); имитаторы — prawostronne dolnopłatowe zapalenie płuc (правосторонняя нижнедолевая пневмония), zapalenie węzłów chłonnych krezki (мезаденит) (Yersinia), plamica Schönleina-Henocha (пурпура Шёнлейна-Геноха), kwasica ketonowa (кетоацидоз). У беременных: самая частая niepołożnicza (неакушерская) хирургическая причина ostrego brzucha (острого живота); после ~20 недель wyrostek (аппендикс) смещён вверх и латерально (боль может быть в prawym boku — правом фланге), fizjologiczna leukocytoza (физиологический лейкоцитоз) снижает ценность анализов. USG, затем MR (МРТ) без gadolinu (гадолиния); лечение — appendektomia (аппендэктомия) (laparoskopia допустима во всех trymestrach — триместрах), leczenie zachowawcze antybiotykami (консервативное лечение антибиотиками) не рекомендуется; perforacja резко повышает риск utraty płodu (потери плода).",
                        focus: "Bezbolesne masywne krwawienie z odbytu (безболезненное массивное ректальное кровотечение) у ребёнка 1–2 лет — uchyłek Meckela, исследование — scyntygrafia (сцинтиграфия) Tc-99m. У беременной с подозрением на zapalenie wyrostka (аппендицит) «наблюдение до родов» — ошибка."
                    }
                ]
            },
            {
                title: "Пт: Клинические случаи — смешанный блок (Przypadki kliniczne)",
                id: "chir-przypadki",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Przypadki kliniczne (mieszane)",
                popup: { what: "Интеграция хирургического блока: diagnostyka różnicowa ostrego brzucha (дифференциальный диагноз острого живота), выбор trybu operacji (срочности операции), польские эпонимы objawów (симптомов), okna czasowe (временные окна).", focus: "У женщины детородного возраста с bólem brzucha (болью в животе) — всегда β-hCG; у пожилого с bólem w nadbrzuszu (болью в эпигастрии) — EKG; эпонимы Chełmońskiego, Goldflama, Jaworskiego почти не встречаются в англоязычных источниках, но есть в CEM.", reading: "LEK w pigułce -> Chirurgia; Noszczyk «Chirurgia» -> Ostry brzuch; личные заметки всех хирургических недель." },
                subtopics: [
                    {
                        title: "Ostry brzuch — diagnostyka różnicowa (острый живот — дифференциальный диагноз по локализации боли)",
                        what: "Перечень причин ostrego bólu brzucha (острой боли в животе) по квадрантам с учётом возраста и пола.",
                        where: "Noszczyk «Chirurgia» -> Ostry brzuch; LEK w pigułce -> Chirurgia -> Ostry brzuch.",
                        study: "Prawe podżebrze (правое подреберье): ostre zapalenie pęcherzyka żółciowego (острый холецистит), zapalenie dróg żółciowych (холангит), zapalenie wątroby (гепатит), ropień wątroby (абсцесс печени), perforacja wrzodu dwunastnicy (перфорация язвы ДПК), prawostronne dolnopłatowe zapalenie płuc (правосторонняя нижнедолевая пневмония), odmiedniczkowe zapalenie nerek (пиелонефрит). Nadbrzusze (эпигастрий): choroba wrzodowa (язвенная болезнь) и perforacja, OZT (острый панкреатит), zawał ściany dolnej (нижний инфаркт миокарда), rozwarstwienie (расслоение) или pęknięcie aorty (разрыв аорты), zapalenie przełyku (эзофагит). Lewe podżebrze (левое подреберье): pęknięcie (разрыв) или zawał śledziony (инфаркт селезёнки), OZT (хвост), zapalenie żołądka (гастрит). Prawy dół biodrowy (правая подвздошная): zapalenie wyrostka robaczkowego (аппендицит), ChLC (болезнь Крона) терминального отдела, uchyłek Meckela, zapalenie węzłów chłonnych krezki (мезаденит) (Yersinia), ciąża ektopowa (внематочная беременность), skręt (перекрут) и pęknięcie torbieli jajnika (разрыв кисты яичника), zapalenie narządów miednicy mniejszej (воспалительные болезни органов малого таза), kamień moczowodowy (камень мочеточника), uwięźnięta przepuklina (ущемлённая грыжа). Lewy dół biodrowy (левая подвздошная): zapalenie uchyłków esicy (дивертикулит сигмы), те же гинекологические причины, kamień moczowodowy, zapalenie jelita grubego (колит). Околопупочная и rozlana (разлитая): wczesne zapalenie wyrostka (ранний аппендицит), niedrożność (непроходимость), niedokrwienie jelit (ишемия кишечника), pęknięcie tętniaka (разрыв аневризмы), zapalenie otrzewnej (перитонит). Внебрюшные и метаболические причины: kwasica ketonowa (кетоацидоз), porfiria (порфирия), hiperkalcemia (гиперкальциемия), zatrucie ołowiem (отравление свинцом), plamica Schönleina-Henocha (пурпура Шёнлейна-Геноха), przełom hemolityczny w niedokrwistości sierpowatokrwinkowej (серповидноклеточный криз).",
                        focus: "Обязательные рутинные действия: β-hCG у женщины детородного возраста, EKG у пожилого с bólem w nadbrzuszu (болью в эпигастрии), осмотр wrót przepuklinowych (грыжевых ворот) и moszny (мошонки) у любого с niedrożnością (непроходимостью)."
                    },
                    {
                        title: "Tryb nagły, pilny, planowy (экстренная vs срочная vs плановая операция)",
                        what: "Распределение хирургических состояний по допустимой задержке вмешательства.",
                        where: "Noszczyk «Chirurgia» -> Wskazania do operacji; wytyczne WSES, Tokyo Guidelines 2018.",
                        study: "Немедленно (минуты — часы): pęknięty tętniak aorty (разрыв аневризмы аорты), perforacja narządu jamistego (перфорация полого органа) с zapaleniem otrzewnej (перитонитом), uwięźnięta przepuklina (ущемлённая грыжа), ostre niedokrwienie kończyny (острая ишемия конечности) и jelit (кишечника), skręt jądra (перекрут яичка), odma prężna (напряжённый пневмоторакс), krwiak nadtwardówkowy (эпидуральная гематома) с ухудшением, martwicze zapalenie powięzi (некротизирующий фасциит), zespół ogona końskiego (синдром конского хвоста), zaburzenia zwrotu jelit ze skrętem (мальротация с заворотом), pęknięta ciąża ektopowa (разрыв внематочной беременности), krwawienie z przewodu pokarmowego (кровотечение из ЖКТ) при неудаче endoskopii. Pilnie (срочно; часы — несколько суток): ostre zapalenie wyrostka robaczkowego (острый аппендицит) (≈в течение 24 ч), ostre zapalenie pęcherzyka żółciowego (острый холецистит) (cholecystektomia laparoskopowa — лапароскопическая холецистэктомия — оптимально в первые 72 ч от начала симптомов; по Tokyo 2018 ранняя операция допустима и позже 72 ч, отсчёт — от начала симптомов; точный верхний срок сверить), zapalenie dróg żółciowych (холангит) — drenaż dróg żółciowych (дренаж желчных путей) (ciężkie — тяжёлый — немедленно, umiarkowane — среднетяжёлый — в течение 24–48 ч), niedrożność zrostowa (спаечная непроходимость) без zadzierzgnięcia (странгуляции) — попытка zachowawcza (консервативная) до 72 ч с kontrastem rozpuszczalnym w wodzie (водорастворимым контрастом). Planowo (плановые): odprowadzalna przepuklina (вправимая грыжа), objawowa kamica pęcherzyka żółciowego (симптомная желчнокаменная болезнь), tętniak aorty (аневризма аорты) ≥5,5 см; «срочно-плановые»: endarterektomia (эндартерэктомия) при objawowym zwężeniu (симптомном стенозе) в течение 14 дней, операции onkologiczne (онкологические).",
                        focus: "Признаки zadzierzgnięcia (странгуляции) при niedrożności (непроходимости) (постоянная боль, gorączka, tachykardia, leukocytoza, mleczany — лактат, zapalenie otrzewnej) переводят случай из «zachowawczo» (консервативно) в «операция сразу»."
                    },
                    {
                        title: "Objawy: Blumberga, Rovsinga, Jaworskiego, Chełmońskiego, Goldflama, Murphy'ego, Courvoisiera, Chwostka, Trousseau (польские эпонимы симптомов)",
                        what: "Названия objawów fizykalnych (физикальных симптомов), под которыми они встречаются в польских учебниках и вопросах CEM.",
                        where: "LEK w pigułce -> Chirurgia -> Badanie przedmiotowe brzucha; Noszczyk «Chirurgia» -> Ostry brzuch.",
                        study: "Objaw Blumberga — боль при резком отнятии руки после надавливания (podrażnienie otrzewnej — раздражение брюшины; русский аналог — Щёткина-Блюмберга). Objaw Rovsinga — давление в lewym dole biodrowym (левой подвздошной области) вызывает боль в prawym (правой) (zapalenie wyrostka — аппендицит). Objaw Jaworskiego — боль в prawym dole biodrowym при поднимании выпрямленной правой ноги с одновременным давлением на эту область (zapalenie wyrostka, особенно zakątniczego — ретроцекального). Objaw Chełmońskiego — боль при поколачивании по prawym łuku żebrowym (правой рёберной дуге) (pęcherzyk żółciowy — желчный пузырь, wątroba — печень). Objaw Goldflama — боль при поколачивании okolicy lędźwiowej (поясничной области) (nerka — почка; аналог симптома Пастернацкого). Objaw Murphy'ego — прерывание вдоха при пальпации под prawym łukiem żebrowym (ostre zapalenie pęcherzyka żółciowego — острый холецистит). Objaw Courvoisiera — увеличенный безболезненный пальпируемый pęcherzyk żółciowy при żółtaczce mechanicznej (механической желтухе) (rak głowy trzustki — рак головки поджелудочной железы — или okołobrodawkowy (периампулярный); при kamicy (камнях) pęcherzyk сморщен). Objaw Chwostka — сокращение мышц угла рта при постукивании по nerwie twarzowym (лицевому нерву) перед ухом (hipokalcemia — гипокальциемия, tężyczka utajona — латентная тетания). Objaw Trousseau — судорога кисти («ręka położnika» — рука акушера) через 1–3 мин после раздувания манжеты выше ciśnienia skurczowego (систолического давления) (hipokalcemia); не путать с zespołem Trousseau (синдромом Труссо) — wędrującym zakrzepowym zapaleniem żył (мигрирующим тромбофлебитом) при raku.",
                        focus: "Самая частая путаница — objaw Chełmońskiego (prawy łuk żebrowy, pęcherzyk żółciowy — правая рёберная дуга, желчный пузырь) против objawu Goldflama (okolica lędźwiowa, nerka — поясница, почка). Два разных «Trousseau» — tężyczka (тетания) и paranowotworowe zakrzepowe zapalenie żył (паранеопластический тромбофлебит)."
                    },
                    {
                        title: "Okna czasowe w chirurgii (временные окна в хирургии)",
                        what: "Сводка сроков, от которых зависит правильный ответ в хирургических вопросах.",
                        where: "Личные заметки недель хирургии; ATLS (10. edycja); wytyczne EAU, ESVS, Tokyo Guidelines 2018.",
                        study: "Kwas traneksamowy (транексамовая кислота) — ≤3 ч от urazu (травмы). Skręt jądra (перекрут яичка) — спасение jądra наиболее вероятно в первые 6 ч. Ostre niedokrwienie kończyny (острая ишемия конечности) — необратимые изменения примерно через 6 ч. Zespół ciasnoty przedziałów powięziowych (компартмент-синдром) — fasciotomia (фасциотомия) немедленно после диагноза. Profilaktyka antybiotykowa (антибиотикопрофилактика) — за 30–60 мин до разреза (wankomycyna — ванкомицин, fluorochinolony — фторхинолоны — за 60–120 мин). Złamanie otwarte (открытый перелом) — antybiotyk в течение 1 ч. Cholecystektomia laparoskopowa (лапароскопическая холецистэктомия) — ≤72 ч от начала симптомов (Tokyo 2018 допускает раннюю операцию и позже 72 ч; верхний срок сверить). Endarterektomia (эндартерэктомия) при objawowym zwężeniu (симптомном стенозе) — ≤14 дней. Zespół ogona końskiego (синдром конского хвоста) — dekompresja классически ≤48 ч. Oparzenia (ожоги) — половина объёма по wzorze Parkland (формуле Паркланда) за 8 ч от момента oparzenia. Отсроченное szczepienie (вакцинация) после pilnej splenektomii (экстренной спленэктомии) — ≥14 дней. Kość łódeczkowata (ладьевидная кость) — повтор RTG через 10–14 дней. Orchidopeksja (орхидопексия) — 6–12 (до 18) мес. Poekspozycyjna profilaktyka wścieklizny (постконтактная профилактика бешенства) — без верхнего предела, как можно раньше. Amputowany palec (ампутированный палец) для replantacji (реплантации) — в gazę (марлю), в пакет, пакет на лёд (не прямой контакт со льдом).",
                        focus: "Для ответа важна точка отсчёта: от urazu (травмы), от oparzenia (ожога), от начала симптомов или от поступления."
                    }
                ]
            },
            {
                title: "Сб: Итоговый тест по хирургии (Chirurgia — test końcowy)",
                id: "chir-6-test",
                time: "1.5 ч",
                lepolekPath: "Testy -> Chirurgia — całość (40 pytań CEM)",
                popup: { what: "Итоговый контроль по всему хирургическому блоку и составление списка słabych tematów (слабых тем) для повторения на неделях 28–29.", focus: "Не набрать новый материал, а честно зафиксировать, где ошибки повторяются.", reading: "Статистика LEPOLEK по категориям хирургии; личные заметки всех хирургических недель." },
                subtopics: [
                    {
                        title: "Test końcowy z całej chirurgii (решение 40 вопросов CEM)",
                        what: "Смешанный тест по chirurgii ogólnej (общей хирургии), chirurgii onkologicznej (онкохирургии), urologii (урологии), chirurgii naczyniowej (сосудам), traumatologii (травме), okresowi okołooperacyjnemu (периоперационному периоду), ortopedii (ортопедии) и chirurgii dziecięcej (детской хирургии).",
                        where: "LEPOLEK -> Testy -> Chirurgia (całość).",
                        study: "40 вопросов за 60 мин в режиме экзамена. После теста выгрузить статистику LEPOLEK по категориям хирургии за все хирургические недели (процент верных ответов по каждой категории).",
                        focus: "Сравнить результат с тестом недели 8 — видно, какие темы первого круга закрепились, а какие нет."
                    },
                    {
                        title: "Analiza błędów (разбор ошибок по типам)",
                        what: "Классификация ошибок итогового теста: незнание факта, неверная последовательность действий, устаревшая версия wytycznych (рекомендаций), невнимательное чтение.",
                        where: "Объяснения LEPOLEK; личные заметки.",
                        study: "Каждую ошибку отнести к одному типу. Ошибки «устаревшая версия» (ATLS 9 vs 10, Parkland 4 мл vs 2 мл, resekcja (резекция) после двух zapaleń uchyłków (дивертикулитов), Clark vs Breslow) записать в отдельную карточку Anki с обеими версиями ответа.",
                        focus: "Если больше трети ошибок — невнимательное чтение, на неделях повторения тренировать поиск ключевых слов в условии (возраст, время от начала, hemodynamika — гемодинамика)."
                    },
                    {
                        title: "Lista słabych tematów do powtórki (список слабых тем для недель 28–29)",
                        what: "Итоговый перечень хирургических тем для второго круга, составленный по статистике LEPOLEK и ошибкам всех хирургических тестов.",
                        where: "Статистика LEPOLEK; результаты всех субботних тестов по хирургии.",
                        study: "Правило отбора: категория с долей верных ответов ниже 65% или тема, где одна и та же ошибка повторилась дважды. Кандидаты для проверки в первую очередь (темы с наибольшей плотностью чисел и эпонимов): klasy wstrząsu (классы шока) и пороги torakotomii (торакотомии); GCS — skala Glasgow и показания к TK (КТ); oparzenia (ожоги) (głębokość — глубина, powierzchnia — площадь, Parkland); okołooperacyjne сроки odstawiania leków (отмены препаратов); klasyfikacje Hinchey, Forrest, CEAP, Salter-Harris, Breslow; markery raka jądra (маркёры рака яичка); сроки в urologii и chirurgii dziecięcej; польские эпонимы objawów (симптомов); польское право (śmierć mózgu — смерть мозга, dawstwo — донорство). Для каждого słabego tematu (слабой темы) записать: источник для повторения, 3 ключевых факта, число вопросов LEPOLEK для повторного решения.",
                        focus: "Список ограничить 8–10 темами — больше за две недели повторения качественно не закрыть."
                    }
                ]
            }
        ]
    }
]);
