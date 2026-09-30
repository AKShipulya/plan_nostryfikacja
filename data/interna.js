// interna: недели плана в порядке изучения. id дня — ключ прогресса и заметок в localStorage, не менять.
registerPlanBlock("interna", [
    {
        key: "int-1",
        subject: "interna",
        title: "Терапия I — Кардиология",
        days: [
            {
                title: "Пн: Артериальная гипертензия (Nadciśnienie tętnicze)",
                id: "w1d1",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Kardiologia -> Nadciśnienie tętnicze",
                popup: { what: "Pierwotne i wtórne nadciśnienie tętnicze (первичная и вторичная гипертензия), powikłania narządowe (поражение органов-мишеней, HMOD).", focus: "Docelowe wartości ciśnienia tętniczego (целевые значения АД) по PTK/ESC, monoterapia (монотерапия) vs terapia skojarzona (комбинация), przeciwwskazania (противопоказания) к препаратам.", reading: "Szczeklik Mały: Nadciśnienie tętnicze." },
                subtopics: [
                    {
                        title: "Klasyfikacja ciśnienia tętniczego i progi rozpoznania (классификация АД)",
                        what: "Деление на ciśnienie optymalne, prawidłowe, wysokie prawidłowe (оптимальное, нормальное, высокое нормальное) и nadciśnienie tętnicze stopnia I-III (гипертензия I-III степени).",
                        where: "Szczeklik -> Kardiologia -> Nadciśnienie tętnicze -> Tabela klasyfikacji.",
                        study: "Пороги rozpoznania (диагноза) NT: w gabinecie (в кабинете) ≥140/90; ABPM (СМАД) — среднее за сутки ≥130/80, днём ≥135/85, ночью ≥120/70; HBPM (домашние измерения) ≥135/85 mm Hg. Цели лечения: PTK 2019 — <130/80 mm Hg у большинства больных <65 лет, SBP (САД) 130–139 mm Hg у ≥65 лет (DBP (ДАД) <80); ESC 2024 — SBP 120–129 mm Hg при хорошей переносимости. ESC 2024 ввела категорию «podwyższone ciśnienie tętnicze» (повышенное АД, elevated BP) 120–139/70–89 mm Hg.",
                        focus: "CEM часто спрашивает progi ciśnienia (пороги АД) для стартовых таблеток и нормальные диапазоны у пожилых."
                    },
                    {
                        title: "Leki I rzutu: ACEI/sartany + CCB/diuretyki (препараты 1-й линии)",
                        what: "Основные 5 классов leków hipotensyjnych (антигипертензивные средства).",
                        where: "Wytyczne PTK / Szczeklik -> Nadciśnienie -> Leczenie farmakologiczne.",
                        study: "Показания к конкретным группам (напр. ACEI — inhibitory konwertazy angiotensyny (ингибиторы АПФ) при cukrzycy (диабет)/PChN (ХБП), β-blokery (β-блокаторы) при ChNS (ИБС)/HR (ЧСС)>80).",
                        focus: "Противопоказания: ciąża (беременность) = СТРОГО НЕ ACEI/sartany (выбираем metyldopa (метилдопа) — классический первый выбор, labetalol (лабеталол) или nifedypina o przedłużonym uwalnianiu (нифедипин пролонгированного действия); PTK/PTGiP)."
                    },
                    {
                        title: "Leki złożone w jednej tabletce — SPC (фиксированные комбинации)",
                        what: "Однотаблеточные комбинации 2 или 3 препаратов (Single Pill Combination).",
                        where: "Szczeklik -> Schematy leczenia AHI.",
                        study: "Преимущества для przestrzegania zaleceń (комплаенс), стартовая терапия у большинства пациентов (ACEI/sartan + CCB или diuretyk).",
                        focus: "Когда стартуем с monoterapii (монотерапия): NT I stopnia (I степень АД) <150 mm Hg у низкого риска или возрастом >80 лет."
                    },
                    {
                        title: "Stan nagły i stan pilny w nadciśnieniu, przełom nadciśnieniowy (неотложные состояния при АГ)",
                        what: "Острое повышение ciśnienia tętniczego (АД) >180/120 mm Hg с powikłaniami narządowymi (поражение органов-мишеней, HMOD).",
                        where: "Szczeklik -> Stany nagłe w kardiologii.",
                        study: "Leki i.v. (внутривенные препараты): labetalol, nitroprusydek sodu (нитропруссид), urapidyl (урапидил); скорость снижения ciśnienia — не более 25% в 1-е часы.",
                        focus: "Отличие stanu nagłego (≥180/120 с острым поражением органов — лечение i.v. в стационаре) от stanu pilnego (≥180/120 без HMOD — leki doustne (пероральные препараты), снижение ciśnienia в течение 24–48 h). Исключение из правила «−25%»: rozwarstwienie aorty (расслоение аорты) — SBP <120 mm Hg в первый час."
                    }
                ]
            },
            {
                title: "Вт: Стабильная ИБС и Дислипидемии (Zaburzenia lipidowe)",
                id: "w1d2",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Kardiologia -> Stabilna choroba wieńcowa",
                popup: { what: "Przewlekłe zespoły wieńcowe (хронические коронарные синдромы), leczenie przeciwdławicowe (антиангинальная терапия).", focus: "Statyny dużej intensywności (статины высокой интенсивности), ezetymib (эзетимиб), ASA vs klopidogrel (клопидогрел).", reading: "Szczeklik: Stabilna choroba wieńcowa." },
                subtopics: [
                    {
                        title: "Dławica piersiowa — obraz kliniczny (клиника стенокардии)",
                        what: "Typowy vs atypowy ból w klatce piersiowej (типичная vs атипичная боль в грудной клетке).",
                        where: "Szczeklik -> Stabilna choroba wieńcowa -> Objawy.",
                        study: "3 критерия типичности: zamostkowa (загрудинная) локализация, провокация нагрузкой/стрессом, снятие за 5 min отдыхом/nitrogliceryną (нитроглицерин).",
                        focus: "CEM любит вопросы на дифдиагностику с rozwarstwieniem aorty (расслоение аорты; раздирающая боль в спину) и ZP — zatorowością płucną (ТЭЛА)."
                    },
                    {
                        title: "Skala SCORE2 (шкала риска)",
                        what: "Оценка 10-летнего риска zdarzeń sercowo-naczyniowych zakończonych i niezakończonych zgonem (фатальные и нефатальные ССС-события) в Европе.",
                        where: "Wytyczne PTK / Szczeklik -> Ocena ryzyka.",
                        study: "Параметры: возраст, пол, palenie tytoniu (курение), cholesterol nie-HDL (не-HDL холестерин), ciśnienie skurczowe (систолическое АД). SCORE2 — 40–69 лет, SCORE2-OP — ≥70 лет. Польша относится к региону высокого риска (свои таблицы калибровки).",
                        focus: "Градация kategorii ryzyka (категории риска): niskie, umiarkowane, wysokie, bardzo wysokie (низкий, умеренный, высокий, очень высокий) и связь с целями LDL."
                    },
                    {
                        title: "Docelowe stężenia cholesterolu LDL (цели ЛПНП)",
                        what: "Целевые уровни cholesterolu LDL (холестерин ЛПНП) по kategoriom ryzyka (категории риска).",
                        where: "Szczeklik -> Dyslipidemia.",
                        study: "ESC/EAS 2019: bardzo wysokie ryzyko (очень высокий риск) <55 mg/dl и снижение ≥50% от исходного; wysokie (высокий) <70 mg/dl и ≥50%; umiarkowane (умеренный) <100 mg/dl; niskie (низкий) <116 mg/dl; повторное zdarzenie sercowo-naczyniowe (ССС-событие) в течение 2 лет на максимальной терапии — <40 mg/dl. Польские рекомендации 2021 (PTL/KLRwP/PTK) выделили категорию ekstremalnego ryzyka (экстремальный риск) с целью <40 mg/dl.",
                        focus: "Ступени: statyna dużej intensywności (статин высокой интенсивности; atorwastatyna 40–80 mg, rosuwastatyna 20–40 mg) -> + ezetymib (эзетимиб) -> + inhibitor PCSK9. По польским рекомендациям PTL у bardzo wysokiego ryzyka допустим старт сразу с комбинации statyna + ezetymib."
                    },
                    {
                        title: "Wskazania do koronarografii (показания к коронарографии)",
                        what: "Инвазивная диагностика анатомии tętnic wieńcowych (коронарные артерии).",
                        where: "Szczeklik -> Koronarografia.",
                        study: "Высокий риск по testom obciążeniowym (нагрузочные тесты), ciężka dławica piersiowa (тяжёлая стенокардия) CCS III-IV, oporność na leczenie farmakologiczne (резистентность к медикаментам).",
                        focus: "Подготовка пациентов с PChN (ХБП): профилактика nefropatii pokontrastowej (контрастная нефропатия) 0.9% NaCl."
                    },
                    {
                        title: "Hipercholesterolemia rodzinna, hipertriglicerydemia, działania niepożądane statyn (семейная ГХС, гипертриглицеридемия, побочные эффекты статинов)",
                        what: "Наследственные и тяжёлые dyslipidemie (дислипидемии) и безопасность leczenia hipolipemizującego (гиполипидемическая терапия).",
                        where: "Szczeklik -> Dyslipidemia; Wytyczne ESC/EAS 2019 (dyslipidemie); Wytyczne PTL/KLRwP/PTK 2021.",
                        study: "Hipercholesterolemia rodzinna (семейная гиперхолестеринемия, FH; чаще мутация LDLR, аутосомно-доминантно): LDL ≥190 mg/dl у взрослого без вторичной причины, żółtaki ścięgien (ксантомы сухожилий; ахиллово), rąbek rogówkowy (роговичная дуга) до 45 лет, ранняя ChNS (ИБС) в семье; критерии Dutch Lipid Clinic Network (DLCN): >8 баллов — определённая, 6–8 — вероятная; каскадный скрининг родственников. Hipertriglicerydemia (гипертриглицеридемия): TG (ТГ) ≥150 mg/dl — повышенные; ≥880 mg/dl (10 mmol/l) — риск OZT — ostrego zapalenia trzustki (острый панкреатит), лечение — fibrat (фибрат), отказ от алкоголя, ограничение жиров. Statyny: mialgia (миалгия) без роста CK (КФК) частая; CK >4× GGN (ВГН) — прервать statynę, >10× — думать о rabdomiolizie (рабдомиолиз); ALT (АЛТ) >3× GGN — снизить дозу или прервать и повторить анализ; interakcje (взаимодействия) — makrolidy, azole, cyklosporyna, gemfibrozyl; противопоказаны w ciąży (при беременности). Lp(a) определяют хотя бы 1 раз в жизни.",
                        focus: "У пациента с FH skali SCORE2 (шкала) не применяют — он сразу в высоком (при ChNS — очень высоком) риске. Statyna + gemfibrozyl (гемфиброзил) — высокий риск rabdomiolizy, с fenofibratem (фенофибрат) комбинация безопаснее."
                    }
                ]
            },
            {
                title: "Ср: Острый коронарный синдром (STEMI / NSTE-ACS)",
                id: "w1d3",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Kardiologia -> Ostre zespoły wieńcowe",
                popup: { what: "Niedokrwienie i zawał serca (ишемия и инфаркт миокарда).", focus: "Dawkowanie ASA, tikagrelor/prasugrel (тикагрелор/прасугрел), heparyny (гепарины), leczenie wstrząsu (противошоковые мероприятия).", reading: "Szczeklik: Ostre zespoły wieńcowe." },
                subtopics: [
                    {
                        title: "STEMI vs NSTEMI / UA: EKG i troponiny (ЭКГ и тропонины)",
                        what: "Дифференциация видов OZW (ОКС) по EKG (ЭКГ) и markerom martwicy (маркеры некроза).",
                        where: "Szczeklik -> OZW -> Rozpoznanie.",
                        study: "STEMI = новое uniesienie odcinka ST (элевация ST) в ≥2 смежных отведениях (при типичной боли). Blok lewej/prawej odnogi pęczka Hisa (блокада ЛНПГ/ПНПГ) при клинике ишемии трактуется как эквивалент STEMI (ESC 2023; в старых вопросах CEM — «новая LBBB»). NSTEMI = wzrost/spadek troponiny (рост/падение тропонина) выше 99 перцентиля без uniesienia ST; niestabilna dławica piersiowa (нестабильная стенокардия) — без роста troponiny.",
                        focus: "Локализация по EKG: II, III, aVF = ściana dolna (нижняя стенка; RCA); V1-V4 = ściana przednia (передняя стенка; LAD)."
                    },
                    {
                        title: "Okna czasowe PCI (< 120 min) (временные окна PCI)",
                        what: "Strategia reperfuzji (стратегия реперфузии) при STEMI.",
                        where: "Wytyczne PTK -> STEMI.",
                        study: "Если ожидаемое время от постановки диагноза STEMI до PCI >120 min -> fibrynoliza (фибринолиз; tenekteplaza/alteplaza) в течение 10 min от диагноза, затем перевод в центр PCI (koronarografia через 2–24 h).",
                        focus: "Przeciwwskazania do fibrynolizy (противопоказания к тромболизису): udar krwotoczny (геморрагический инсульт) в анамнезе, krwawienie z przewodu pokarmowego (кровотечения ЖКТ)."
                    },
                    {
                        title: "Podwójna terapia przeciwpłytkowa — DAPT (двойная антиагрегантная терапия)",
                        what: "Комбинация ASA (аспирин) и inhibitora P2Y12 (ингибитора).",
                        where: "Szczeklik -> OZW -> Leczenie.",
                        study: "ASA (нагрузочно 150-300 mg) + tikagrelor (тикагрелор; 180 mg) или prasugrel (прасугрел; 60 mg) на 12 месяцев.",
                        focus: "Klopidogrel (клопидогрел) — при противопоказаниях к tikagrelorowi/prasugrelowi, при необходимости doustnej antykoagulacji (оральная антикоагуляция; тройная терапия) и после fibrynolizy (фибринолиз). Prasugrel противопоказан после udaru/TIA (инсульт/ТИА). Предварительная нагрузка inhibitorem P2Y12 до koronarografii (коронарография) при NSTE-ACS с планируемой ранней инвазивной стратегией рутинно не рекомендуется (ESC 2023); в вопросах CEM прошлых лет правильный ответ — нагрузка до koronarografii."
                    },
                    {
                        title: "Powikłania zawału serca (осложнения инфаркта миокарда)",
                        what: "Острые ранние и поздние powikłania zawału (осложнения ИМ).",
                        where: "Szczeklik -> Powikłania zawału.",
                        study: "Wstrząs kardiogenny (кардиогенный шок), pęknięcie wolnej ściany/przegrody międzykomorowej (разрыв свободной стенки/межжелудочковой перегородки), ostra niedomykalność mitralna (острая митральная недостаточность), zespół Dresslera (синдром Дресслера).",
                        focus: "Klasyfikacja Killipa-Kimballa (шкала Killip-Kimball; I-IV) для оценки выраженности niewydolności serca (сердечная недостаточность) при zawale."
                    }
                ]
            },
            {
                title: "Чт: Аритмии и Фибрилляция предсердий (Migotanie przedsionków)",
                id: "w1d4",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Kardiologia -> Zaburzenia rytmu i przewodzenia",
                popup: { what: "Tachyarytmie i bradyarytmie (тахи- и брадиаритмии).", focus: "Выбор NOAC (dabigatran, rywaroksaban, apiksaban), контрольные точки EKG (ЭКГ).", reading: "Szczeklik: Migotanie przedsionków." },
                subtopics: [
                    {
                        title: "Postacie migotania przedsionków — AF (формы фибрилляции предсердий)",
                        what: "Klasyfikacja AF (классификация ФП): napadowe, przetrwałe, długotrwale przetrwałe, utrwalone (пароксизмальная, персистирующая, длительно персистирующая, постоянная).",
                        where: "Szczeklik -> Migotanie przedsionków -> Klasyfikacja.",
                        study: "Cechy w EKG (ЭКГ-признаки): brak załamków P (отсутствие зубцов P), niemiarowość odstępów RR (нерегулярность интервалов RR; niemiarowość zupełna).",
                        focus: "Разница между kontrolą rytmu (контроль ритма; leczenie kontrolujące rytm) и kontrolą częstotliwości rytmu komór (контроль ЧСС)."
                    },
                    {
                        title: "Skale CHA₂DS₂-VA(Sc) i HAS-BLED (шкалы риска при ФП)",
                        what: "Оценка ryzyka powikłań zakrzepowo-zatorowych (риск тромбоэмболии) и krwawień (геморрагические осложнения) при AF.",
                        where: "Szczeklik -> AF -> Profilaktyka powikłań zatorowych.",
                        study: "ESC 2024 перешла на CHA₂DS₂-VA (без пола): ≥2 балла — antykoagulacja (антикоагуляция) рекомендована, 1 балл — рассмотреть. В вопросах CEM прошлых лет — CHA₂DS₂-VASc: ≥2 у мужчин / ≥3 у женщин = OAC (оральные антикоагулянты). NOAC предпочтительнее VKA — antagonistów witaminy K (АВК), кроме mechanicznej zastawki (механический клапан) и umiarkowanej/ciężkiej stenozy mitralnej (умеренный/тяжёлый митральный стеноз; там только VKA).",
                        focus: "HAS-BLED ≥3 не отменяет leków przeciwkrzepliwych (антикоагулянты), а требует устранения модифицируемых факторов риска."
                    },
                    {
                        title: "Bloki przedsionkowo-komorowe I-III stopnia (АВ-блокады I-III степени)",
                        what: "Zaburzenia przewodzenia przedsionkowo-komorowego (нарушения атриовентрикулярного проведения).",
                        where: "Szczeklik -> Bloki serca.",
                        study: "I stopień (PQ > 0.20 s); II stopień Mobitz I (удлинение PQ -> выпадение QRS); II stopień Mobitz II (выпадение QRS без удлинения); III stopień (полная диссоциация P и QRS).",
                        focus: "Mobitz II и III stopień = абсолютное показание к имплантации stymulatora serca na stałe (постоянный кардиостимулятор, ЭКС)."
                    },
                    {
                        title: "Kardiowersja elektryczna i farmakologiczna, kontrola częstotliwości rytmu komór (кардиоверсия, контроль ЧСС)",
                        what: "Методы przywrócenia rytmu zatokowego (восстановление синусового ритма).",
                        where: "Szczeklik -> Kardiowersja.",
                        study: "При niestabilności hemodynamicznej (гемодинамическая нестабильность; hipotensja, obrzęk płuc — гипотония, отёк лёгких) -> ЭКСТРЕННАЯ kardiowersja elektryczna. Kardiowersja farmakologiczna у стабильного пациента: без strukturalnej choroby serca (структурная болезнь сердца) — flekainid или propafenon (в том числе «pill in the pocket» — «таблетка в кармане» после первой проверки в стационаре); при структурной болезни сердца/NS (СН) — amiodaron i.v. Kontrola częstotliwości rytmu komór: β-bloker, diltiazem или werapamil (не при HFrEF с LVEF ≤40%), digoksyna (дигоксин); начальная цель HR (ЧСС) в покое <110/min.",
                        focus: "Плановая kardiowersja при AF, длящейся дольше порога без antykoagulacji, — только после TEE — echokardiografii przezprzełykowej (ЧП-ЭхоКГ) или ≥3 недель эффективной antykoagulacji; после неё — OAC ≥4 недели. Порог: 24 h по ESC 2024, 48 h — в вопросах CEM прошлых лет."
                    }
                ]
            },
            {
                title: "Пт: Сердечная недостаточность и Пороки клапанов",
                id: "w1d5",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Kardiologia -> Niewydolność serca / Wady serca",
                popup: { what: "Przewlekła (CHSN) i ostra (OSN) niewydolność serca (хроническая и острая сердечная недостаточность).", focus: "Frakcja wyrzutowa (фракция выброса; HFrEF ≤40%, HFmrEF 41–49%, HFpEF ≥50%), leki zmniejszające śmiertelność (препараты, снижающие смертность), profilaktyka IZW (профилактика ИЭ). Детально wady zastawkowe (пороки) и IZW — в неделе 6.", reading: "Szczeklik: Niewydolność serca." },
                subtopics: [
                    {
                        title: "4 filary leczenia HFrEF (фантастическая четвёрка)",
                        what: "Базовая квадротерапия przewlekłej niewydolności serca (ХСН) со сниженной frakcją wyrzutową (фракция выброса; EF ≤ 40%).",
                        where: "Wytyczne PTK / Szczeklik -> Niewydolność serca.",
                        study: "Rozpoznanie niewydolności serca (диагноз ХСН): симптомы + NT-proBNP ≥125 pg/ml (BNP ≥35 pg/ml) при хронической, ≥300 pg/ml (BNP ≥100 pg/ml) при ostrej NS (острая СН); ключевое исследование — echokardiografia (ЭхоКГ; LVEF); тяжесть — klasy NYHA I–IV. Лечение HFrEF: 1. ARNI/ACEI; 2. β-bloker (karwedilol, bisoprolol, nebiwolol, metoprolol CR/XL); 3. MRA — antagoniści receptora mineralokortykoidowego (spironolakton/eplerenon); 4. inhibitor SGLT2 (dapagliflozyna/empagliflozyna).",
                        focus: "Diuretyki pętlowe (петлевые диуретики; furosemid) улучшают симптомы, но НЕ снижают смертность!"
                    },
                    {
                        title: "Stenoza aortalna (аортальный стеноз)",
                        what: "Самая частая nabyta wada zastawkowa (приобретённый порок клапана) у взрослых.",
                        where: "Szczeklik -> Wady serca.",
                        study: "Триада симптомов: duszność, dławica piersiowa, omdlenia (одышка, стенокардия, обмороки; SAD: Syncope, Angina, Dyspnea). Szmer skurczowy (систолический шум), проводимый на tętnice szyjne (сонные артерии).",
                        focus: "Лечение ciężkiej objawowej stenozy (тяжёлый симптоматический стеноз) — chirurgiczna wymiana zastawki (хирургическая замена клапана, SAVR) или TAVI."
                    },
                    {
                        title: "Niedomykalność mitralna (митральная недостаточность)",
                        what: "Обратный ток крови из lewej komory (левый желудочек) в lewy przedsionek (левое предсердие).",
                        where: "Szczeklik -> Wady mitralne.",
                        study: "Szmer holosystoliczny (голосистолический шум) на koniuszku (верхушка) с проведением do lewej pachy (левая подмышечная область).",
                        focus: "Дифференциация ostrej (острой; pęknięcie strun ścięgnistych — разрыв хорд при zawale) и przewlekłej (хронической) niedomykalności."
                    },
                    {
                        title: "Profilaktyka IZW (профилактика ИЭ)",
                        what: "Profilaktyka antybiotykowa (антибиотикопрофилактика) infekcyjnego zapalenia wsierdzia (инфекционный эндокардит).",
                        where: "Szczeklik -> Infekcyjne zapalenie wsierdzia.",
                        study: "Только у групп ВЫСОКОГО риска (sztuczne zastawki — протезы клапанов, IZW в анамнезе, wady sinicze — синие пороки) при zabiegach stomatologicznych (стоматологические процедуры).",
                        focus: "Препарат выбора: amoksycylina (амоксициллин) 2 g p.o. за 30-60 min до процедуры. Alergia na penicylinę (аллергия на пенициллин; ESC 2023): azytromycyna или klarytromycyna 500 mg, doksycyklina 100 mg p.o., cefaleksyna 2 g (если не было anafilaksji — анафилаксия); klindamycyny (клиндамицин) ESC 2023 больше не рекомендует. В вопросах CEM прошлых лет — klindamycyna 600 mg (ESC 2015)."
                    }
                ]
            },
            {
                title: "Сб: Субботний тест по Кардиологии & Разбор Zeszyt Błędów",
                id: "w1d6",
                time: "1.5 ч",
                lepolekPath: "Testy -> Kardiologia (40 pytań CEM)",
                popup: { what: "Проверка блока kardiologii (кардиологический блок).", focus: "Разбор dawkowania (дозировки) и kryteriów EKG (критерии ЭКГ).", reading: "Заметки." },
                subtopics: [
                    {
                        title: "Rozwiązanie 40 pytań CEM (решение вопросов CEM)",
                        what: "Тренировочное тестирование по разделу Kardiologia.",
                        where: "Aplikacja Lepolek.",
                        study: "Прохождение блока вопросов в режиме контрольного времени (1 мин на вопрос).",
                        focus: "Отмечайте «наугад» угаданные вопросы так же, как и ошибочные."
                    },
                    {
                        title: "Analiza błędów: zaburzenia rytmu i OZW (анализ ошибок по аритмиям и ОКС)",
                        what: "Глубокий разбор логики составителей CEM.",
                        where: "Lepolek -> Zeszyt Błędów.",
                        study: "Выяснить, ПОЧЕМУ выбран неверный вариант (незнание критерия, невнимательность, ловушка в условии).",
                        focus: "Обращайте внимание на отрицательные формулировки в вопросах («Wskaż FAŁSZYWE»)."
                    },
                    {
                        title: "Utrwalenie trudnych dawek (фиксация сложных дозировок)",
                        what: "Запись ключевых цифр и шкал в личный блокнот.",
                        where: "Личные заметки.",
                        study: "Dawki ASA (нагрузка 150–300 mg), tikagreloru i prasugrelu, amiodaronu в ALS (300/150 mg), docelowe wartości ciśnienia tętniczego (целевые значения АД) и LDL.",
                        focus: "Заучивание пороговых значений шкал недели: CHA₂DS₂-VA(Sc), HAS-BLED, Killip, SCORE2."
                    }
                ]
            }
        ]
    },
    {
        key: "int-2",
        subject: "interna",
        title: "Терапия II — Пульмонология & Ревматология",
        days: [
            {
                title: "Пн: ТЭЛА (Zatorowość płucna), Тромбоз глубоких вен (ZŻG) и Лёгочная гипертензия (Nadciśnienie płucne)",
                id: "w2d1",
                time: "3.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Pulmonologia -> Zatorowość płucna",
                popup: { what: "Żylna choroba zakrzepowo-zatorowa — ŻChZZ (венозный тромбоэмболизм).", focus: "Stratyfikacja ryzyka ZP (стратификация ТЭЛА по риску: высокий / промежуточный / низкий), D-dimer (D-димер) с поправкой на возраст.", reading: "Szczeklik: Zatorowość płucna." },
                subtopics: [
                    {
                        title: "Skale Wellsa i genewska (шкалы Wells и Geneva)",
                        what: "Оценка klinicznego prawdopodobieństwa ZP (клиническая вероятность ТЭЛА) перед назначением анализов.",
                        where: "Szczeklik -> Zatorowość płucna -> Diagnostyka.",
                        study: "Низкая/средняя вероятность (или «ZP mało prawdopodobna» — «ТЭЛА маловероятна») -> D-dimer (D-димер); отрицательный исключает ZP. Высокая вероятность -> сразу angio-TK (КТ-ангиография). У лиц >50 лет порог D-dimeru = возраст × 10 µg/l.",
                        focus: "Ловушка CEM: D-dimer НЕ сдается при высокой клинической вероятности ZP (ТЭЛА; сразу делаем TK)!"
                    },
                    {
                        title: "Angio-TK tętnic płucnych (КТ-ангиография)",
                        what: "Эталонный метод визуализации ubytków wypełnienia (дефекты наполнения) в tętnicach płucnych (лёгочные артерии).",
                        where: "Szczeklik -> Angio-TK płuc.",
                        study: "Показания, контрастирование, альтернативы при противопоказаниях (scyntygrafia wentylacyjno-perfuzyjna — вентиляционно-перфузионная сцинтиграфия).",
                        focus: "Альтернатива при ciężkiej niewydolności nerek (тяжёлая почечная недостаточность) или alergii na jod (аллергия на йод)."
                    },
                    {
                        title: "Leczenie trombolityczne vs HDCz/LMWH (тромболизис vs НМГ)",
                        what: "Лечение ZP (ТЭЛА) в зависимости от stratyfikacji ryzyka (стратификация риска).",
                        where: "Szczeklik -> Zatorowość płucna -> Leczenie.",
                        study: "ZP wysokiego ryzyka (ТЭЛА высокого риска; ze wstrząsem/hipotensją — с шоком/гипотонией, SBP < 90 mm Hg) = alteplaza i.v. (тромболизис). ZP niewysokiego ryzyka (невысокого риска) = HDCz — heparyna drobnocząsteczkowa (НМГ)/NOAC.",
                        focus: "ZP pośredniego-wysokiego ryzyka (промежуточно-высокого риска; dysfunkcja prawej komory (дисфункция ПЖ) + troponina без hipotensji) — antykoagulacja и мониторинг, tromboliza только ratunkowa (спасительная) при ухудшении. Признаки przeciążenia prawej komory (перегрузка ПЖ): S1Q3T3 в EKG, poszerzenie prawej komory (дилатация ПЖ) в echokardiografii (ЭхоКГ)."
                    },
                    {
                        title: "Triada Virchowa w ZŻG (триада Вирхова)",
                        what: "Патогенез zakrzepicy żył głębokich kończyn dolnych (тромбоз глубоких вен нижних конечностей, ZŻG).",
                        where: "Szczeklik -> Zakrzepica żył głębokich.",
                        study: "1. Zastój krwi (застой крови); 2. Uszkodzenie śródbłonka (повреждение эндотелия); 3. Nadkrzepliwość (гиперкоагуляция).",
                        focus: "Objaw Homansa (симптом Хоманса) малоспецифичен. Алгоритм: skala Wellsa для ZŻG -> D-dimer при низкой вероятности -> USG uciskowe żył (компрессионное УЗИ вен) при высокой вероятности или положительном D-dimerze."
                    },
                    {
                        title: "Nadciśnienie płucne i CTEPH — przewlekłe zakrzepowo-zatorowe nadciśnienie płucne (лёгочная гипертензия и ХТЭЛГ)",
                        what: "Среднее ciśnienie w tętnicy płucnej (давление в лёгочной артерии) >20 mm Hg в покое по cewnikowaniu prawostronnemu serca (катетеризация правых отделов сердца; ESC/ERS 2022).",
                        where: "Szczeklik -> Kardiologia -> Nadciśnienie płucne; Wytyczne ESC/ERS 2022 (nadciśnienie płucne).",
                        study: "Przedwłośniczkowe nadciśnienie płucne (прекапиллярная ЛГ): ciśnienie zaklinowania (давление заклинивания) ≤15 mm Hg и płucny opór naczyniowy (лёгочное сосудистое сопротивление) >2 j. Wooda (ед. Вуда). 5 групп: 1 — tętnicze nadciśnienie płucne, TNP (лёгочная артериальная гипертензия; idiopatyczne, dziedziczne BMPR2, polekowe — лекарственная, при chorobach tkanki łącznej (болезни соединительной ткани) — прежде всего twardzina układowa (склеродермия), HIV (ВИЧ), wrotno-płucne (портопульмональная), wrodzone wady serca (врождённые пороки)); 2 — choroby lewego serca (болезни левых отделов сердца; самая частая); 3 — choroby płuc i hipoksja (болезни лёгких и гипоксия; POChP, choroby śródmiąższowe płuc — ИЗЛ, OBPS — obturacyjny bezdech podczas snu (ОАС)); 4 — CTEPH (хроническая тромбоэмболическая) и другие obstrukcje tętnic płucnych (обструкции лёгочных артерий); 5 — неясные и многофакторные. Скрининг — echokardiografia (ЭхоКГ; prędkość fali zwrotnej przez zastawkę trójdzielną — скорость трикуспидальной регургитации >2.8 m/s), подтверждение — cewnikowanie prawostronne. Лечение TNP: antagoniści receptora endoteliny (антагонисты рецепторов эндотелина; bozentan, macytentan, ambrisentan), inhibitory PDE-5 (ингибиторы ФДЭ; syldenafil, tadalafil), prostacykliny (простациклины); antagoniści wapnia (блокаторы кальциевых каналов) в высоких дозах — только при положительном teście wazoreaktywności (тест на вазореактивность). CTEPH: endarterektomia płucna (лёгочная эндартерэктомия; метод выбора), balonowa angioplastyka tętnic płucnych (баллонная ангиопластика), riocyguat, пожизненная antykoagulacja.",
                        focus: "Duszność (одышка) сохраняется >3 месяцев после ZP (ТЭЛА) на antykoagulacji — думать о CTEPH; скрининговый тест — scyntygrafia wentylacyjno-perfuzyjna (вентиляционно-перфузионная сцинтиграфия; нормальная исключает CTEPH), а не TK (КТ). Самая частая причина nadciśnienia płucnego (ЛГ) — choroby lewego serca (болезни левого сердца); специфические препараты TNP (ЛАГ) при группе 2 не применяют."
                    }
                ]
            },
            {
                title: "Вт: Астма (Astma), ХОБЛ (POChP) и Бронхоэктазы (Rozstrzenie oskrzeli)",
                id: "w2d2",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Pulmonologia -> Astma / POChP",
                popup: { what: "Obturacyjne choroby płuc (обструктивные заболевания лёгких).", focus: "Odwracalność obturacji (обратимость обструкции; próba rozkurczowa — тест с бронходилататором).", reading: "Szczeklik: Astma i POChP." },
                subtopics: [
                    {
                        title: "Spirometria (FEV1/FVC < 0.70) (спирометрия)",
                        what: "Золотой стандарт диагностики obturacji dróg oddechowych (обструкция дыхательных путей).",
                        where: "Szczeklik -> Badania czynnościowe układu oddechowego.",
                        study: "Wskaźnik Tiffeneau (индекс Тиффно; FEV1/FVC) < 0.70 после leku rozszerzającego oskrzela (бронходилататор) = nieodwracalna obturacja (необратимая обструкция; POChP).",
                        focus: "При astmie (астма) obturacja ОБРАТИМА (при приросте FEV1 > 12% и > 200 ml в próbie rozkurczowej — бронходилатационный тест)."
                    },
                    {
                        title: "Stopnie GINA: wGKS + formoterol (ступени GINA)",
                        what: "Современный стандарт ступенчатой терапии astmy (астма).",
                        where: "Wytyczne GINA / Szczeklik -> Astma.",
                        study: "Monoterapia SABA (монотерапия; salbutamol) больше НЕ рекомендуется. Предпочтительный путь GINA: małe dawki wGKS — wziewnych glikokortykosteroidów (ИГКС) + formoterol по требованию (ступени 1–2), затем как базисная терапия и по требованию (MART, ступени 3–5).",
                        focus: "Kontrola astmy (контроль астмы): dobrze kontrolowana, częściowo kontrolowana, niekontrolowana (контролируемая, частично контролируемая, неконтролируемая)."
                    },
                    {
                        title: "Kategorie GOLD A-E w POChP (категории ХОБЛ)",
                        what: "Классификация POChP (ХОБЛ) по выраженности симптомов (mMRC, CAT) и частоте zaostrzeń (обострения).",
                        where: "Wytyczne GOLD / Szczeklik -> POChP.",
                        study: "Группа A: LAMA или LABA. Группа B: LAMA + LABA. Группа E (zaostrzenia): LAMA + LABA (+ wGKS (ИГКС) при eozynofilach (эозинофилы) ≥ 300).",
                        focus: "Выживаемость при POChP увеличивают zaprzestanie palenia (отказ от курения) и DLT — domowe leczenie tlenem (длительная домашняя кислородотерапия) при PaO₂ ≤55 mm Hg (или ≤60 при sercu płucnym (лёгочное сердце)/policytemii (полицитемия)), ≥15 h в сутки."
                    },
                    {
                        title: "Zaostrzenie POChP (обострение ХОБЛ)",
                        what: "Острое ухудшение симптомов, требующее изменения терапии.",
                        where: "Szczeklik -> Zaostrzenie POChP.",
                        study: "Показания к antybiotykom (антибиотики; kryteria Anthonisena, GOLD): все три кардинальных симптома (nasilenie duszności — усиление одышки, zwiększenie objętości plwociny — увеличение объёма мокроты, ropna plwocina — гнойная мокрота); или два из них, если один — ropna plwocina; или потребность в wentylacji mechanicznej (механическая вентиляция; inwazyjnej или NIV).",
                        focus: "Целевая saturacja SpO2 при tlenoterapii (оксигенотерапия) у больных POChP — 88-92% (опасность hiperkapnii — гиперкапния!)."
                    },
                    {
                        title: "Rozstrzenie oskrzeli, mukowiscydoza u dorosłych (бронхоэктазы, муковисцидоз у взрослых)",
                        what: "Необратимое расширение oskrzeli (бронхи) с хронической инфекцией; mukowiscydoza (муковисцидоз) — аутосомно-рецессивная болезнь гена CFTR, частая причина rozstrzeni oskrzeli (бронхоэктазы) у молодых.",
                        where: "Szczeklik -> Pulmonologia -> Rozstrzenie oskrzeli, Mukowiscydoza; Wytyczne ERS 2017 (rozstrzenie oskrzeli).",
                        study: "Rozstrzenie oskrzeli: przewlekły kaszel (хронический кашель) с обильной ropną plwociną (гнойная мокрота), krwioplucie (кровохарканье), повторные инфекции; HRCT — просвет oskrzela шире сопровождающей tętnicy (артерия; objaw sygnetu — симптом «перстня»), нет сужения к периферии. Причины: постинфекционные (krztusiec — коклюш, gruźlica — ТБ), mukowiscydoza, pierwotna dyskineza rzęsek (первичная цилиарная дискинезия; zespół Kartagenera — синдром Картагенера, с situs inversus), niedobory odporności (иммунодефициты), ABPA — alergiczna aspergiloza oskrzelowo-płucna (АБЛА). Лечение: drenaż wydzieliny (дренаж мокроты) и fizjoterapia oddechowa (кинезитерапия), при zaostrzeniu antybiotyk 14 дней по posiewowi (посев); ≥3 zaostrzenia в год — длительный makrolid (макролид; azytromycyna), при хронической P. aeruginosa — antybiotyk wziewny (ингаляционный антибиотик). Mukowiscydoza: test potowy (потовый тест) — chlorki (хлориды) ≥60 mmol/l, подтверждение генетическое (чаще F508del); у взрослых — rozstrzenie oskrzeli, P. aeruginosa, S. aureus, B. cepacia, zewnątrzwydzielnicza niewydolność trzustki (экзокринная недостаточность поджелудочной железы), cukrzyca (диабет, CFRD), niepłodność (бесплодие) у мужчин (brak nasieniowodów — отсутствие семявыносящих протоков); modulatory CFTR (модуляторы; eleksakaftor/tezakaftor/iwakaftor).",
                        focus: "Впервые высеянная P. aeruginosa при rozstrzeniach oskrzeli — попытка eradykacji (эрадикация). Niepłodność męska (мужское бесплодие) + przewlekłe zapalenie zatok (хронический синусит) + rozstrzenie oskrzeli — думать о mukowiscydozie или zespole Kartagenera."
                    }
                ]
            },
            {
                title: "Ср: Пневмонии (PZP/SZP) и Рак легкого",
                id: "w2d3",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Pulmonologia -> Zapalenia płuc / Rak płuca",
                popup: { what: "Zakażenia i nowotwory płuc (инфекции и опухоли лёгких).", focus: "Wskazania do hospitalizacji (показания к госпитализации) по CURB-65, zespół Hornera (синдром Горнера).", reading: "Szczeklik: Zapalenia płuc." },
                subtopics: [
                    {
                        title: "Skala CURB-65 (шкала тяжести пневмонии)",
                        what: "Оценка тяжести pozaszpitalnego zapalenia płuc (внебольничная пневмония, PZP) и выбора места лечения.",
                        where: "Szczeklik -> Pozaszpitalne zapalenie płuc.",
                        study: "C (splątanie — спутанность), U (mocznik — мочевина >7 mmol/l), R (częstość oddechów — ЧД ≥30/min), B (SBP <90 или DBP ≤60 mm Hg), 65 (возраст ≥65). В амбулаторной практике — CRB-65 (без mocznika).",
                        focus: "CURB-65: 0–1 балл — амбулаторно; 2 — госпитализация; 3–5 — тяжёлая пневмония, стационар, при 4–5 — рассмотреть OIT (ОРИТ)."
                    },
                    {
                        title: "Empiryczna antybiotykoterapia PZP (эмпирическая антибиотикотерапия внебольничной пневмонии)",
                        what: "Выбор antybiotyku (антибиотик) 1-й линии.",
                        where: "Szczeklik -> PZP -> Leczenie.",
                        study: "Амбулаторно без сопутствующих патологий = amoksycylina (амоксициллин) p.o. высокими дозами (1 g co 8 h). При аллергии — makrolidy (макролиды; azytromycyna).",
                        focus: "Atypowe zapalenia płuc (атипичные пневмонии; Mycoplasma, Legionella) НЕ чувствительны к penicylinom (пенициллины)!"
                    },
                    {
                        title: "Typy raka płuca (типы рака лёгкого)",
                        what: "Rak drobnokomórkowy (мелкоклеточный, SCLC) vs rak niedrobnokomórkowy (немелкоклеточный, NSCLC).",
                        where: "Szczeklik -> Rak płuca.",
                        study: "SCLC (~15%) — агрессивен, ранние przerzuty (метастазы), лечение — chemioterapia i radioterapia (химио- и лучевая терапия). NSCLC (~85%: gruczolakorak — аденокарцинома, rak płaskonabłonkowy — плоскоклеточный, rak wielkokomórkowy — крупноклеточный) — на ранних стадиях leczenie chirurgiczne (хирургическое лечение). Подробно — в неделе 7.",
                        focus: "Guz Pancoasta (синдром Панкоста; верхушечный рак) -> zespół Hornera (синдром Горнера; opadanie powieki, zwężenie źrenicy, zapadnięcie gałki ocznej — птоз, миоз, энофтальм) + ból barku (боль в плече)."
                    },
                    {
                        title: "Kryteria Lighta w płynie opłucnowym (критерии Лайта)",
                        what: "Дифференциация wysięku (экссудат) и przesięku (транссудат) в jamie opłucnej (плевральная полость).",
                        where: "Szczeklik -> Płyn w jamie opłucnej.",
                        study: "Wysięk, если выполнен хотя бы 1 критерий: białko płyn/surowica (белок жидкость/сыворотка) >0.5; LDH (ЛДГ) płyn/surowica >0.6; LDH płynu >2/3 górnej granicy normy (верхняя граница нормы) LDH surowicy.",
                        focus: "Przesięk бывает при niewydolności serca (сердечная недостаточность), marskości wątroby (цирроз печени) и zespole nerczycowym (нефротический синдром)."
                    }
                ]
            },
            {
                title: "Чт: Ревматология I — Ревматоидный артрит (RZS) и ZZSK",
                id: "w2d4",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Reumatologia -> RZS / ZZSK",
                popup: { what: "Zapalne choroby stawów (воспалительные артропатии).", focus: "Sztywność poranna (утренняя скованность), суставные проявления RZS (ревматоидный артрит).", reading: "Szczeklik: RZS i ZZSK." },
                subtopics: [
                    {
                        title: "Markery RF i anti-CCP (маркеры ревматоидного артрита)",
                        what: "Лабораторная диагностика RZS — reumatoidalnego zapalenia stawów (ревматоидный артрит).",
                        where: "Szczeklik -> RZS -> Diagnostyka.",
                        study: "Przeciwciała anti-CCP (антитела; ACPA) имеют более высокую специфичность (>95%), чем czynnik reumatoidalny (ревматоидный фактор; RF класса IgM).",
                        focus: "Kryteria klasyfikacyjne ACR/EULAR 2010 (классификационные критерии): ≥6 из 10 баллов (stawy — суставы, serologia RF/anti-CCP, OB/CRP (СОЭ/СРБ), czas trwania (длительность) ≥6 недель). Seronegatywne RZS (серонегативный РА) не исключается отсутствием przeciwciał (антитела)."
                    },
                    {
                        title: "Metotreksat — LMPCh I rzutu (метотрексат, 1-я линия)",
                        what: "Базисный противоревматический препарат первого выбора (LMPCh — leki modyfikujące przebieg choroby).",
                        where: "Szczeklik -> RZS -> Leczenie.",
                        study: "Назначается 1 раз в неделю (!) p.o. или s.c. (перорально или подкожно) + kwas foliowy (фолиевая кислота; ≥5 mg в неделю) через 24–48 h после дозы metotreksatu.",
                        focus: "Działania niepożądane (побочные эффекты): hepatotoksyczność (гепатотоксичность), supresja szpiku (угнетение костного мозга), śródmiąższowe zapalenie płuc (интерстициальный пневмонит)."
                    },
                    {
                        title: "Obraz RTG w ZZSK — kręgosłup bambusowy (рентген-картина АС)",
                        what: "ZZSK — zesztywniające zapalenie stawów kręgosłupa (анкилозирующий спондилоартрит; choroba Bechterewa).",
                        where: "Szczeklik -> ZZSK.",
                        study: "Symetryczne zapalenie stawów krzyżowo-biodrowych (симметричный сакроилеит), syndesmofity (синдесмофиты; «kręgosłup bambusowy» — «бамбуковый позвоночник»).",
                        focus: "Test Schobera (тест Шобера) для оценки ограничения подвижности odcinka lędźwiowego (поясничный отдел)."
                    },
                    {
                        title: "Związek z HLA-B27 (ассоциация с антигеном)",
                        what: "Генетический маркер seronegatywnych spondyloartropatii (серонегативные спондилоартропатии).",
                        where: "Szczeklik -> Spondyloartropatie.",
                        study: "Присутствует у >90% больных ZZSK, а также при reaktywnym zapaleniu stawów (реактивный артрит), łuszczycowym zapaleniu stawów (псориатический артрит) и NZZJ (ВЗК).",
                        focus: "Objawy pozastawowe ZZSK (внесуставные проявления): zapalenie przedniego odcinka błony naczyniowej (переднее увеальное воспаление), zapalenie aorty (аортит) с niedomykalnością zastawki aortalnej (недостаточность аортального клапана), włóknienie szczytów płuc (фиброз верхушек лёгких)."
                    }
                ]
            },
            {
                title: "Пт: Ревматология II — Волчанка (SLE), Склеродермия и Васкулиты",
                id: "w2d5",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Reumatologia -> Toczeń / Twardzina / Zapalenia naczyń",
                popup: { what: "Układowe choroby autoimmunologiczne (системные аутоиммунные заболевания).", focus: "Diagnostyka zapaleń naczyń (диагностика васкулитов), профилактика ślepoty (слепота) при olbrzymiokomórkowym zapaleniu tętnic (артериит височной артерии).", reading: "Szczeklik: Układowe choroby tkanki łącznej." },
                subtopics: [
                    {
                        title: "Markery TRU (SLE): anti-dsDNA i anti-Sm (маркеры СКВ)",
                        what: "Toczeń rumieniowaty układowy — TRU (системная красная волчанка).",
                        where: "Szczeklik -> SLE -> Rozpoznanie.",
                        study: "ANA — скрининг (высокая чувствительность); anti-dsDNA и anti-Sm — высокоспецифичны для TRU.",
                        focus: "Уровень anti-dsDNA коррелирует с активностью toczniowego zapalenia nerek (волчаночный нефрит) и снижением C3/C4."
                    },
                    {
                        title: "Twardzina układowa (системная склеродермия)",
                        what: "Аутоиммунное заболевание с włóknieniem (фиброз) skóry i narządów wewnętrznych (кожа и внутренние органы).",
                        where: "Szczeklik -> Twardzina układowa.",
                        study: "Postać ograniczona (лимитированная форма; CREST) — przeciwciała antycentromerowe (антицентромерные антитела); postać uogólniona (диффузная форма; dcSSc) — przeciwciała anti-Scl70 (anty-topoizomeraza I).",
                        focus: "Objaw Raynauda (синдром Рейно) — первичный признак. Twardzinowy przełom nerkowy (склеродермический почечный криз) лечится ACEI — inhibitorami konwertazy angiotensyny (ингибиторы АПФ)!"
                    },
                    {
                        title: "Ziarniniakowatość z zapaleniem naczyń — GPA, Wegener (гранулематоз с полиангиитом)",
                        what: "Zapalenie naczyń związane z ANCA (ассоциированный с ANCA васкулит) мелких и средних сосудов.",
                        where: "Szczeklik -> Zapalenia naczyń.",
                        study: "Триада: górne drogi oddechowe (ЛОР-органы; nos siodełkowaty — седловидный нос, zapalenia zatok — синуситы) + płuca (лёгкие; jamy — каверны) + nerki (почки; kłębuszkowe zapalenie nerek — гломерулонефрит). Маркер: c-ANCA (anti-PR3).",
                        focus: "Eozynofilowa ziarniniakowatość z zapaleniem naczyń (эозинофильный гранулематоз; EGPA / Churg-Strauss) сопровождается ciężką astmą (тяжёлая бронхиальная астма) и eozynofilią (эозинофилия)."
                    },
                    {
                        title: "Olbrzymiokomórkowe zapalenie tętnic (гигантоклеточный артериит)",
                        what: "Zapalenie dużych naczyń (васкулит крупных сосудов) у лиц старше 50 лет.",
                        where: "Szczeklik -> Olbrzymiokomórkowe zapalenie tętnic.",
                        study: "Ból głowy w okolicy skroniowej (головная боль в височной области), pogrubienie tętnicy skroniowej (уплотнение височной артерии), chromanie żuchwy (перемежающаяся хромота челюсти), wysokie OB (высокая СОЭ; > 50 mm/h).",
                        focus: "Угроза ślepoty (слепота)! GKS (ГКС) начинают НЕМЕДЛЕННО, не дожидаясь biopsji (биопсия): prednizon 40–60 mg/dobę; при zaburzeniach widzenia (нарушения зрения) — metyloprednizolon i.v. pulsami (пульсы). Biopsja информативна ещё 1–2 недели на фоне GKS."
                    }
                ]
            },
            {
                title: "Сб: Тест по Пульмонологии и Ревматологии",
                id: "w2d6",
                time: "1.5 ч",
                lepolekPath: "Testy -> Pulmonologia + Reumatologia (40 pytań CEM)",
                popup: { what: "Проверка пройденного материала за неделю.", focus: "Разбор przeciwciał (антитела) и spirometrii (спирометрия).", reading: "Заметки." },
                subtopics: [
                    {
                        title: "Rozwiązanie 40 pytań CEM (решение вопросов CEM)",
                        what: "Контрольное тестирование по patologii oddechowej i reumatycznej (респираторная и ревматическая патология).",
                        where: "Lepolek.",
                        study: "Закрепление алгоритмов диагностики ZP (ТЭЛА), astmy (астма) и markerów autoimmunologicznych (аутоиммунные маркеры).",
                        focus: "Анализ времени, затраченного на клинические задачи с длинным анамнезом."
                    },
                    {
                        title: "Przeciwciała swoiste — zestawienie (разбор специфических антител)",
                        what: "Создание сводной таблицы autoprzeciwciał (аутоантитела) для ревматологии.",
                        where: "Личные заметки.",
                        study: "Anti-dsDNA (TRU), anti-Scl70 (twardzina — склеродермия), anti-CCP (RZS), c-ANCA (GPA), anti-Ro/SSA (zespół Sjögrena — синдром Шегрена).",
                        focus: "В вопросах CEM часто дается готовый профиль przeciwciał (антитела) и требуется назвать диагноз."
                    },
                    {
                        title: "Wykresy spirometryczne — utrwalenie (закрепление спирометрических графиков)",
                        what: "Интерпретация badań czynnościowych układu oddechowego (функциональные пробы дыхания).",
                        where: "Szczeklik -> Badania spirometryczne.",
                        study: "Obturacja (обструкция): FEV1/FVC <0.70 (или <LLN). Restrykcję (рестрикция) подозревают при сниженной FVC и нормальном/повышенном FEV1/FVC; подтверждает её снижение TLC в pletyzmografii (бодиплетизмография).",
                        focus: "Примеры chorób restrykcyjnych (рестриктивные патологии): idiopatyczne włóknienie płuc (идиопатический фиброз лёгких), sarkoidoza (саркоидоз), kifoskolioza (кифосколиоз)."
                    }
                ]
            }
        ]
    },
    {
        key: "int-3",
        subject: "interna",
        title: "Терапия III — Гастроэнтерология & Гепатология",
        days: [
            {
                title: "Пн: Желудок и Пищевод (ГЭРБ, Язва, H. pylori)",
                id: "w3d1",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Gastroenterologia -> Żołądek i przełyk",
                popup: { what: "Choroby górnego odcinka przewodu pokarmowego (заболевания верхних отделов ЖКТ).", focus: "Польские схемы eradykacji H. pylori (эрадикация) на 14 дней: terapia poczwórna z bizmutem (висмутовая квадротерапия; IPP + bizmut + metronidazol + tetracyklina) или terapia poczwórna bez bizmutu (сопутствующая, concomitant; IPP + amoksycylina + metronidazol + klarytromycyna).", reading: "Szczeklik: Choroba wrzodowa." },
                subtopics: [
                    {
                        title: "Przełyk Barretta (пищевод Барретта)",
                        what: "Замещение nabłonka wielowarstwowego płaskiego (многослойный плоский эпителий) przełyku (пищевод) цилиндрическим (metaplazja jelitowa — кишечная метаплазия) из-за хронической ChRP — choroby refluksowej przełyku (ГЭРБ).",
                        where: "Szczeklik -> Refluks / Barrett.",
                        study: "Stan przedrakowy (предраковое состояние; предшественник gruczolakoraka przełyku — аденокарцинома пищевода). Требует biopsji (биопсия) при gastroskopii (ЭГДС).",
                        focus: "Objawy alarmowe (симптомы «тревоги»): dysfagia, odynofagia, utrata masy ciała (похудение), niedokrwistość (анемия) -> ПРЯМОЕ показание к gastroskopii!"
                    },
                    {
                        title: "Eradykacja Helicobacter pylori (эрадикация H. pylori)",
                        what: "Схемы первой линии eradykacji H. pylori в Польше (14 дней) при высокой oporności na klarytromycynę (резистентность к кларитромицину).",
                        where: "Wytyczne PTG / Szczeklik -> Eradykacja H.pylori.",
                        study: "Польские рекомендации (Toruń 2017) и Maastricht VI 2022 допускают на равных: 1) terapię poczwórną z bizmutem (висмутовая квадротерапия) — IPP (ИПП; высокая доза 2 р/д) + sól bizmutu (соль висмута) + metronidazol + tetracyklina; 2) terapię poczwórną bez bizmutu (безвисмутовая сопутствующая, concomitant) — IPP + amoksycylina + metronidazol + klarytromycyna; обе 14 дней. Terapia trójlekowa (тройная терапия) IPP + amoksycylina + klarytromycyna 7 дней — ответ вопросов CEM прошлых лет, сейчас в Польше не рекомендуется из-за oporności na klarytromycynę.",
                        focus: "Kontrola eradykacji (контроль эрадикации) — не ранее 4 недель после antybiotyków (антибиотики) и 2 недель после отмены IPP (mocznikowy test oddechowy — дыхательный тест с мочевиной, или antygen H. pylori w kale — антиген в кале). Serologia (серология) для контроля НЕ годится."
                    },
                    {
                        title: "Wrzód żołądka vs wrzód dwunastnicy (язва желудка vs язва ДПК)",
                        what: "Клинические различия choroby wrzodowej (язвенная болезнь).",
                        where: "Szczeklik -> Choroba wrzodowa.",
                        study: "Wrzód żołądka (язва желудка): боль ВО ВРЕМЯ или сразу после еды. Wrzód dwunastnicy (язва ДПК): боль НАГОЛОДНЯК, ночью, купируется едой.",
                        focus: "Wrzód żołądka ОБЯЗАТЕЛЬНО требует повторной gastroskopii (ЭГДС) с biopsją (биопсия) для исключения raka (рак); wrzód dwunastnicy обычно доброкачественный."
                    },
                    {
                        title: "Inhibitory pompy protonowej — IPP (ингибиторы протонной помпы)",
                        what: "Основная группа leków przeciwwydzielniczych (антисекреторные препараты; omeprazol, pantoprazol).",
                        where: "Szczeklik -> Farmakologia przewodu pokarmowego.",
                        study: "Принимаются за 30 min до еды (утром). Działania niepożądane (побочные эффекты) длительного приёма: hipomagnezemia (гипомагниемия), niedobór witaminy B12 (дефицит витамина), osteoporoza/złamania (остеопороз/переломы), zakażenie C. difficile (инфекция C. difficile).",
                        focus: "Pantoprazol (пантопразол) имеет минимальные interakcje (взаимодействие) с klopidogrelem (клопидогрел)."
                    }
                ]
            },
            {
                title: "Вт: Кишечник (ВЗК / NZZJ, Целиакия, СРК, Инфекционная диарея)",
                id: "w3d2",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Gastroenterologia -> Jelita",
                popup: { what: "Nieswoiste zapalenia jelit — NZZJ (воспалительные заболевания кишечника).", focus: "Różnicowanie WZJG i choroby Leśniowskiego-Crohna (дифференциация ЯК и болезни Крона), objawy pozajelitowe (внекишечные проявления).", reading: "Szczeklik: NZZJ." },
                subtopics: [
                    {
                        title: "Wrzodziejące zapalenie jelita grubego (WZJG) vs choroba Leśniowskiego-Crohna (язвенный колит vs болезнь Крона)",
                        what: "Nieswoiste zapalenia jelit (неспецифические воспалительные заболевания кишечника, NZZJ).",
                        where: "Szczeklik -> NZZJ -> Tabela różnicowa.",
                        study: "WZJG (ЯК): только odbytnica i okrężnica (прямая и толстая кишка), ciągłe zajęcie (непрерывное поражение), błona śluzowa (слизистая оболочка), krew w stolcu (кровь в кале). Choroba Crohna (Крон): от рта до ануса, «bruk» (булыжная мостовая), zajęcie pełnościenne (трансмуральное поражение), przetoki (свищи).",
                        focus: "Palenie tytoniu (курение) ЗАЩИЩАЕТ от WZJG, но УХУДШАЕТ течение choroby Crohna!"
                    },
                    {
                        title: "Kalprotektyna w kale, zespół jelita drażliwego (фекальный кальпротектин и СРК)",
                        what: "Неинвазивный маркер zapalenia błony śluzowej jelita (воспаление слизистой оболочки кишечника).",
                        where: "Szczeklik -> Diagnostyka jelit.",
                        study: "Позволяет дифференцировать choroby zapalne (воспалительные; NZZJ) от czynnościowych (функциональные; IBS — zespół jelita drażliwego, СРК). IBS по Rome IV: nawracający ból brzucha (рецидивирующая боль в животе) в среднем ≥1 дня в неделю за последние 3 месяца, связанная с ≥2 из: defekacją (дефекация), zmianą częstości wypróżnień (изменение частоты стула), zmianą konsystencji stolca (изменение формы стула); начало симптомов ≥6 месяцев назад. Подтипы по skali bristolskiej (Бристольская шкала): IBS-C, IBS-D, IBS-M.",
                        focus: "Prawidłowe stężenie kalprotektyny (нормальный кальпротектин) с высокой вероятностью исключает острую фазу NZZJ (ВЗК). IBS ставят после исключения «objawów alarmowych» (симптомы тревоги): начало после 50 лет, krew w stolcu (кровь в кале), utrata masy ciała (похудение), niedokrwistość (анемия), ночные симптомы, gorączka (лихорадка), rak jelita grubego (рак толстой кишки), NZZJ или celiakia в семье — при них kolonoskopia (колоноскопия)."
                    },
                    {
                        title: "Celiakia — choroba trzewna (целиакия)",
                        what: "Аутоиммунная enteropatia (энтеропатия), вызванная glutenem (глютен).",
                        where: "Szczeklik -> Celiakia.",
                        study: "Serologia (серология): przeciwciała przeciw transglutaminazie tkankowej (антитела к тканевой трансглутаминазе; anti-tTG IgA) + całkowite IgA (общий IgA). У взрослых диагноз подтверждает biopsja dwunastnicy (биопсия ДПК; zanik kosmków — атрофия ворсинок, klasyfikacja Marsha-Oberhubera). Исследования — на diecie z glutenem (диета с глютеном).",
                        focus: "При niedoborze IgA (дефицит IgA) сдаются przeciwciała klasy IgG (anti-tTG IgG или anti-DGP IgG)."
                    },
                    {
                        title: "Leczenie zakażenia Clostridium difficile — CDI (лечение C. difficile)",
                        what: "Rzekomobłoniaste zapalenie jelita grubego (псевдомембранозный колит) после antybiotykoterapii (антибиотикотерапия).",
                        where: "Szczeklik -> Zakażenie C.difficile.",
                        study: "Препараты выбора перорально: wankomycyna p.o. (ванкомицин; 125 mg 4 р/д) или fidaksomycyna p.o. (фидаксомицин; 200 mg 2 р/д) на 10 дней.",
                        focus: "Metronidazol (метронидазол) больше НЕ является lekiem pierwszego rzutu (препарат первой линии) при C. difficile!"
                    },
                    {
                        title: "Biegunka infekcyjna, zatrucia pokarmowe u dorosłych (инфекционная диарея и пищевые отравления)",
                        what: "Ostra biegunka (острая диарея) <14 дней, чаще wirusowa (вирусная; norowirus); bakteryjna (бактериальная) — Campylobacter, Salmonella, Shigella, STEC.",
                        where: "Szczeklik -> Choroby zakaźne -> Biegunki infekcyjne; LEK w pigułce -> Choroby zakaźne.",
                        study: "Основа — nawadnianie (регидратация; DPN — doustne płyny nawadniające внутрь, при тяжёлом odwodnieniu (обезвоживание) i.v.). Antybiotyk (антибиотик) — только при czerwonce (дизентерия; krew, gorączka — кровь, лихорадка), тяжёлом течении, immunosupresji (иммуносупрессия), тяжёлой biegunce podróżnych (диарея путешественника): azytromycyna (выбор, особенно при Campylobacter) или cyprofloksacyna. Niepowikłana salmonelloza (неосложнённый сальмонеллёз) у здорового взрослого antybiotykiem не лечат (продлевает nosicielstwo — носительство). Okres wylęgania (инкубация) как подсказка: 1–6 h — toksyny (токсины) S. aureus и B. cereus (рвота, рис), 8–16 h — C. perfringens, 1–3 дня — Salmonella, 2–5 дней — Campylobacter; botulizm (ботулизм; обычно 12–36 h) — нисходящий симметричный paraliż (паралич), podwójne widzenie (двоение), suchość w ustach (сухость во рту), rozszerzenie źrenic (мидриаз) при ясном сознании — antytoksyna (антитоксин). Posiew kału (посев кала) — при krwawej biegunce (кровавая диарея), gorączce, тяжёлом течении, длительности >7 дней, после antybiotyków (test na C. difficile).",
                        focus: "При krwawej biegunce (кровавая диарея) с подозрением на STEC (E. coli O157:H7) не дают antybiotyków и loperamidu (лоперамид) — риск HUS — zespołu hemolityczno-mocznicowego (ГУС). Loperamid противопоказан при gorączce (лихорадка) и krwi w stolcu (кровь в кале)."
                    }
                ]
            },
            {
                title: "Ср: Вирусные гепатиты (WZW) и Аутоиммунные болезни печени",
                id: "w3d3",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Gastroenterologia -> Wątroba",
                popup: { what: "Ostre i przewlekłe zapalenia wątroby (острые и хронические гепатиты).", focus: "Расшифровка profili serologicznych HBV (серологические профили).", reading: "Szczeklik: Choroby wątroby." },
                subtopics: [
                    {
                        title: "Serologia WZW B — HBV (серология гепатита B)",
                        what: "Интерпретация markerów wirusowego zapalenia wątroby typu B (маркеры вирусного гепатита B).",
                        where: "Szczeklik -> WZW B -> Diagnostyka.",
                        study: "HBsAg (+) = zakażenie (инфекция); anti-HBs (+) без HBsAg = odporność (иммунитет). Anti-HBc IgM = ostra faza (острая фаза); anti-HBc total = контакт с вирусом.",
                        focus: "Odporność poszczepienna (поствакцинальный иммунитет): ТОЛЬКО anti-HBs (+), все остальные маркеры (HBsAg, anti-HBc) — ОТРИЦАТЕЛЬНЫЕ!"
                    },
                    {
                        title: "WZW C (HCV) i DAA (гепатит C и противовирусные препараты прямого действия)",
                        what: "Диагностика и современная терапия WZW C (гепатит C).",
                        where: "Szczeklik -> WZW C.",
                        study: "Скрининг: anti-HCV; подтверждение активной инфекции: HCV RNA (PCR — ПЦР). Терапия: leki przeciwwirusowe o działaniu bezpośrednim (противовирусные препараты прямого действия, DAA) на 8-12 недель.",
                        focus: "Эффективность DAA превышает 95-98% (SVR12 — trwała odpowiedź wirusologiczna, стойкий вирусологический ответ)."
                    },
                    {
                        title: "PBC — pierwotne zapalenie dróg żółciowych (первичный билиарный холангит)",
                        what: "Аутоиммунное поражение wewnątrzwątrobowych dróg żółciowych (внутрипечёночные желчные протоки).",
                        where: "Szczeklik -> PBC.",
                        study: "Клиника: świąd skóry (зуд кожи), osłabienie (слабость), cholestaza (холестаз; ALP / GGTP ⬆ — ЩФ / ГГТ). Патогномоничные przeciwciała (антитела): AMA (антимитохондриальные).",
                        focus: "Препарат выбора для замедления прогрессирования PBC — kwas ursodeoksycholowy (урсодезоксихолевая кислота, UDCA)."
                    },
                    {
                        title: "PSC — pierwotne stwardniające zapalenie dróg żółciowych (первичный склерозирующий холангит)",
                        what: "Хроническое воспаление и włóknienie (фиброз) wewnątrz- i zewnątrzwątrobowych dróg żółciowych (внутри- и внепечёночные протоки).",
                        where: "Szczeklik -> PSC.",
                        study: "У ~70% больных PSC есть NZZJ (ВЗК), чаще WZJG (язвенный колит). MRCP — cholangiopankreatografia rezonansu magnetycznego (МРХПГ): чередование zwężeń (стриктуры) и poszerzeń (расширения) протоков («paciorki» — «чётки»).",
                        focus: "Высокий риск развития raka dróg żółciowych (холангиокарцинома)."
                    }
                ]
            },
            {
                title: "Чт: Цирроз печени (Marskość wątroby) и Портальная гипертензия",
                id: "w3d4",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Gastroenterologia -> Marskość wątroby",
                popup: { what: "Dekompensacja marskości wątroby (декомпенсация цирроза печени).", focus: "Profilaktyka krwawienia z żylaków przełyku (профилактика кровотечения из варикозных вен; nieselektywny β-bloker/karwedilol или opaskowanie — лигирование), wodobrzusze (асцит), SBP, encefalopatia (энцефалопатия).", reading: "Szczeklik: Marskość wątroby." },
                subtopics: [
                    {
                        title: "Skale Childa-Pugha i MELD (шкалы тяжести цирроза)",
                        what: "Оценка тяжести marskości (цирроз) и прогноза выживаемости.",
                        where: "Szczeklik -> Marskość -> Klasyfikacja.",
                        study: "Child-Pugh включает 5 параметров: albumina (альбумин), bilirubina (билирубин), INR (МНО), wodobrzusze (асцит), encefalopatia (энцефалопатия) (klasy A, B, C). MELD — для kolejki do przeszczepienia (очередь на трансплантацию).",
                        focus: "Klasa C wg Childa-Pugha = тяжёлая декомпенсация marskości wątroby (цирроз печени)."
                    },
                    {
                        title: "Leczenie wodobrzusza (лечение асцита)",
                        what: "Накопление płynu w jamie otrzewnej (жидкость в брюшной полости) из-за nadciśnienia wrotnego (портальная гипертензия).",
                        where: "Szczeklik -> Wodobrzusze.",
                        study: "Ограничение sodu (натрий) в диете + diuretyki (диуретики): spironolakton (100-400 mg) + furosemid (40-160 mg) в соотношении 100:40.",
                        focus: "При dużej paracentezie (крупный парацентез; > 5 l) ОБЯЗАТЕЛЬНО i.v. введение albuminy (альбумин; 8 g на каждый литр удалённой жидкости)!"
                    },
                    {
                        title: "Encefalopatia wątrobowa (печёночная энцефалопатия)",
                        what: "Неврологические и психические нарушения из-за накопления amoniaku (аммиак).",
                        where: "Szczeklik -> Encefalopatia wątrobowa.",
                        study: "Симптомы: drżenie trzepoczące (хлопающий тремор; asterixis), odwrócenie rytmu snu (инверсия сна), dezorientacja (дезориентация). Первая линия: laktuloza (лактулоза) p.o. или we wlewkach (в клизмах); rifaksymina (рифаксимин) добавляют при nawrocie (рецидив; вторичная профилактика). Поиск czynnika wyzwalającego (провоцирующий фактор): krwawienie, zakażenie, zaparcie, diuretyki, elektrolity (кровотечение, инфекция, запор, диуретики, электролиты).",
                        focus: "Цель назначения laktulozy — 2-3 мягких stolca (стул) в день."
                    },
                    {
                        title: "Samoistne bakteryjne zapalenie otrzewnej — SBP (спонтанный бактериальный перитонит)",
                        what: "Zakażenie płynu puchlinowego (инфицирование асцитической жидкости) без видимого источника в jamie brzusznej (брюшная полость).",
                        where: "Szczeklik -> SBP.",
                        study: "Диагностика: nakłucie jamy otrzewnej (пункция асцита; paracenteza) -> liczba neutrofilów (уровень нейтрофилов, PMN) ≥ 250/µl.",
                        focus: "Лечение SBP — cefotaksym или ceftriakson i.v. + albumina (1.5 g/kg в 1-й день, 1 g/kg на 3-й день) для профилактики zespołu wątrobowo-nerkowego (гепаторенальный синдром)."
                    }
                ]
            },
            {
                title: "Пт: Поджелудочная железа (OZT / PZT)",
                id: "w3d5",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Gastroenterologia -> Trzustka",
                popup: { what: "Zapalenia trzustki (панкреатиты).", focus: "Умеренная целенаправленная płynoterapia (инфузионная терапия; płyn Ringera — раствор Рингера) при OZT, оценка тяжести, powikłania (осложнения). Drogi żółciowe (желчные пути) хирургически — в неделе 10.", reading: "Szczeklik: OZT i PZT." },
                subtopics: [
                    {
                        title: "Przyczyny i diagnostyka OZT (причины и диагностика острого панкреатита)",
                        what: "Ostre zapalenie trzustki (острый панкреатит).",
                        where: "Szczeklik -> OZT.",
                        study: "Две главные причины (80%): kamica żółciowa (желчнокаменная болезнь) и alkohol. Диагноз = 2 из 3: typowy ból w nadbrzuszu (типичная боль в эпигастрии), lipaza/amylaza (липаза/амилаза) > 3x normy, признаки в TK/USG (КТ/УЗИ).",
                        focus: "Lipaza более специфична для trzustki (поджелудочная железа) и остается повышенной дольше, чем amylaza."
                    },
                    {
                        title: "Ocena ciężkości OZT: Atlanta, BISAP, Ranson (оценка тяжести острого панкреатита)",
                        what: "Оценка тяжести и прогноза OZT (острый панкреатит).",
                        where: "Szczeklik -> OZT -> Klasyfikacja.",
                        study: "Klasyfikacja z Atlanty 2012 (классификация Атланты): łagodne (лёгкая; bez niewydolności narządowej — без органной недостаточности), umiarkowanie ciężkie (средней тяжести; przemijająca — транзиторная <48 h или powikłania miejscowe — местные осложнения), ciężkie (тяжёлая; trwała niewydolność narządowa — стойкая органная недостаточность >48 h). Skale prognostyczne (прогностические шкалы): BISAP, Ranson (≥3 — тяжёлый), CRP (СРБ) >150 mg/l через 48 h.",
                        focus: "Основа раннего лечения — umiarkowane, ukierunkowane nawadnianie (умеренная, целенаправленная гидратация) płynem Ringera (раствор Рингера; агрессивные объёмы больше не рекомендуются, WATERFALL 2022), leczenie przeciwbólowe (обезболивание), wczesne żywienie dojelitowe (раннее энтеральное питание)."
                    },
                    {
                        title: "Przewlekłe zapalenie trzustki — PZT (хронический панкреатит)",
                        what: "Прогрессирующее необратимое разрушение miąższu trzustki (паренхима поджелудочной железы).",
                        where: "Szczeklik -> PZT.",
                        study: "Триада: ból opasujący (опоясывающая боль) + biegunka tłuszczowa (стеаторея; stolce tłuszczowe) + cukrzyca (сахарный диабет).",
                        focus: "Диагностика niewydolności zewnątrzwydzielniczej (экзокринная недостаточность): снижение elastazy-1 w kale (эластаза в кале; < 200 µg/g). Лечение: mikrosfery pankreatyny (микросферы панкреатина; Kreon)."
                    },
                    {
                        title: "Powikłania OZT: torbiele i martwica (осложнения: кисты и некрозы)",
                        what: "Powikłania miejscowe (местные осложнения) ostrego zapalenia trzustki (острый панкреатит).",
                        where: "Szczeklik -> Powikłania OZT.",
                        study: "Torbiel rzekoma (псевдокиста) — формируются через >4 недели. Zakażona martwica (инфицированный некроз) — лечение antybiotykami (антибиотики; karbapenemy — карбапенемы) и drenaż (дренирование).",
                        focus: "Antybiotyki НЕ назначаются профилактически при jałowej martwicy (стерильный некроз)!"
                    }
                ]
            },
            {
                title: "Сб: Субботний тест по Гастроэнтерологии",
                id: "w3d6",
                time: "1.5 ч",
                lepolekPath: "Testy -> Gastroenterologia (40 pytań CEM)",
                popup: { what: "Итоговый тест по przewodowi pokarmowemu i wątrobie (ЖКТ и печень).", focus: "Разбор markerów WZW (маркеры гепатитов) и NZZJ (ВЗК).", reading: "Заметки." },
                subtopics: [
                    {
                        title: "Rozwiązanie 40 pytań CEM (решение вопросов CEM)",
                        what: "Итоговое тестирование по разделу Gastroenterologia.",
                        where: "Lepolek.",
                        study: "Закрепление eradykacji H.pylori (эрадикация), markerów WZW (маркеры гепатитов), powikłań marskości (осложнения цирроза) и OZT (острый панкреатит).",
                        focus: "Контроль ошибок в дифференциации WZJG (язвенный колит) и choroby Crohna (болезнь Крона)."
                    },
                    {
                        title: "Serologia WZW — utrwalenie (закрепление серологии гепатитов)",
                        what: "Тренировка быстрого чтения анализов крови на markery HBV (маркеры).",
                        where: "Личные заметки.",
                        study: "Таблица комбинаций HBsAg, anti-HBs, anti-HBc IgM/IgG, HBeAg.",
                        focus: "Быстрый вывод: есть ли wiremia (вирусная нагрузка), zakażenie przewlekłe (хроника) или только odporność (иммунитет)."
                    },
                    {
                        title: "Skale Childa-Pugha, MELD i ocena OZT (разбор шкал)",
                        what: "Повторение компонентов skal prognostycznych (прогностические шкалы) в терапевтической гастроэнтерологии.",
                        where: "Szczeklik.",
                        study: "Учет parametrów krzepnięcia (показатели свёртываемости; INR) и bilirubiny (билирубин).",
                        focus: "Понимание того, какие параметры свидетельствуют о niewydolności wątroby (печёночно-клеточная недостаточность)."
                    }
                ]
            }
        ]
    },
    {
        key: "int-4",
        subject: "interna",
        title: "Терапия IV — Нефрология & Гематология",
        days: [
            {
                title: "Пн: Почечная недостаточность (AKI i PChN)",
                id: "w4d1",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Nefrologia -> AKI / PChN",
                popup: { what: "Ostre i przewlekłe uszkodzenie nerek (острое и хроническое повреждение почек).", focus: "Pilne wskazania do dializy (экстренные показания к диализу): kwasica, elektrolity, zatrucie, przewodnienie, mocznica (ацидоз, электролиты, интоксикация, перегрузка, уремия).", reading: "Szczeklik: AKI i PChN." },
                subtopics: [
                    {
                        title: "Przyczyny AKI: przednerkowe, nerkowe, pozanerkowe (причины ОПП: преренальная, ренальная, постренальная)",
                        what: "Ostre uszkodzenie nerek (острое повреждение почек, AKI).",
                        where: "Szczeklik -> AKI -> Etioalgorytm.",
                        study: "Przednerkowe (преренальное; самая частая причина внебольничного AKI): hipowolemia (гиповолемия), wstrząs (шок), NLPZ (НПВП), ACEI (ингибиторы АПФ). Nerkowe (ренальное): ostra martwica cewek nerkowych (острый некроз канальцев, ATN), toksyny (токсины). Pozanerkowe (постренальное): utrudnienie odpływu moczu (обструкция мочевых путей; kamień, prostata — камень, простата).",
                        focus: "Frakcja wydalania Na (индекс Na в моче) < 1% и высокий ciężar właściwy moczu (плотность мочи) характерны для ПРЕренального AKI."
                    },
                    {
                        title: "Stadia PChN wg eGFR (стадирование ХБП)",
                        what: "Przewlekła choroba nerek (хроническая болезнь почек, PChN).",
                        where: "Szczeklik -> PChN -> Klasyfikacja.",
                        study: "Stadia (стадии) G1 (≥90), G2 (60-89), G3a (45-59), G3b (30-44), G4 (15-29), G5 (<15 ml/min/1.73 m² — schyłkowa niewydolność nerek, терминальная почечная недостаточность). Kategorie albuminurii (категории альбуминурии; UACR): A1 <30, A2 30–300, A3 >300 mg/g; PChN классифицируют по обоим измерениям — G и A (KDIGO), критерий хронизации — >3 месяцев.",
                        focus: "Главные причины PChN в Европе: cukrzyca (сахарный диабет) и nadciśnienie tętnicze (артериальная гипертензия)."
                    },
                    {
                        title: "Wskazania do hemodializy (A-E-I-O-U) (показания к гемодиализу)",
                        what: "Pilne wskazania (ургентные показания) к экстренной terapii nerkozastępczej (заместительная почечная терапия).",
                        where: "Szczeklik -> Hemodializa w stanach nagłych.",
                        study: "A (kwasica — ацидоз, pH <7.1–7.2, oporna — рефрактерный); E (elektrolity — электролиты, K⁺ >6.5 mmol/l, oporna — рефрактерная); I (zatrucie (интоксикация) dializowalnymi truciznami — glikol etylenowy, metanol, lit, salicylany); O (przewodnienie (перегрузка объёмом) — obrzęk płuc (отёк лёгких), не отвечающий на diuretyki); U (mocznica (уремия) — zapalenie osierdzia (перикардит), encefalopatia).",
                        focus: "Запомнить аббревиатуру AEIOU — популярная ловушка во многих тестах CEM!"
                    },
                    {
                        title: "Osteodystrofia nerkowa i wtórna nadczynność przytarczyc (почечная остеодистрофия и вторичный гиперпаратиреоз)",
                        what: "Zaburzenia gospodarki mineralnej (нарушение минерального обмена) при PChN (ХБП).",
                        where: "Szczeklik -> PChN -> Powikłania.",
                        study: "Снижение синтеза kalcytriolu (кальцитриол; 1,25(OH)2D3) + hiperfosfatemia (гиперфосфатемия) -> hipokalcemia (гипокальциемия) -> nadmierne wydzielanie PTH (сверхсекреция ПТГ).",
                        focus: "Лечение: leki wiążące fosforany (фосфат-биндеры; sewelamer, węglan wapnia — карбонат кальция) + aktywna witamina D (активный витамин D; alfakalcydol)."
                    }
                ]
            },
            {
                title: "Вт: Гломерулонефриты и Нарушения Электролитов",
                id: "w4d2",
                time: "3.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Nefrologia -> Elektrolity / KZN",
                popup: { what: "Choroby kłębuszków nerkowych (заболевания клубочков) и gospodarka wodno-elektrolitowa (водно-электролитный баланс).", focus: "Leczenie hiperkaliemii (купирование гиперкалиемии): wapń, insulina z glukozą, salbutamol (кальций, инсулин с глюкозой, сальбутамол).", reading: "Szczeklik: Zaburzenia elektrolitowe." },
                subtopics: [
                    {
                        title: "Zespół nerczycowy (нефротический синдром)",
                        what: "Клинико-лабораторный симптом высокой проницаемости kłębuszków (клубочки).",
                        where: "Szczeklik -> Zespół nerczycowy.",
                        study: "Триада: dobowy białkomocz (суточная протеинурия) > 3.5 g/dobę у взрослых (у детей ≥50 mg/kg/dobę или ≥40 mg/m²/h), hipoalbuminemia (гипоальбуминемия), obrzęki (отёки) + hiperlipidemia (гиперлипидемия).",
                        focus: "Самая частая причина у детей — choroba minimalnych zmian (болезнь минимальных изменений, MCD); у взрослых — nefropatia błoniasta (мембранозная нефропатия)."
                    },
                    {
                        title: "Zespół nefrytyczny (нефритический синдром)",
                        what: "Воспалительное повреждение kłębuszków (клубочки).",
                        where: "Szczeklik -> Zespół nefrytyczny.",
                        study: "Триада: krwinkomocz (гематурия; dysmorficzne erytrocyty — изменённые эритроциты / wałeczki erytrocytarne — эритроцитарные цилиндры), nadciśnienie (гипертензия), umiarkowany białkomocz (умеренная протеинурия; <3.5 g) + oliguria (олигурия).",
                        focus: "Классический пример: ostre popaciorkowcowe kłębuszkowe zapalenie nerek (острый постстрептококковый гломерулонефрит; через 1-3 недели после anginy — ангина)."
                    },
                    {
                        title: "Hiperkaliemia (K+ > 5.5 mmol/l) (гиперкалиемия)",
                        what: "Zagrażające życiu zaburzenie gospodarki elektrolitowej (жизнеугрожающее нарушение электролитного обмена).",
                        where: "Szczeklik -> Zaburzenia potasowe.",
                        study: "EKG: wysokie, spiczaste załamki T (высокие заострённые T), poszerzenie QRS (расширение QRS), zanik załamka P (исчезновение P). Лечение: 1. glukonian wapnia (глюконат кальция) 10% i.v. (защита миокарда); 2. insulina krótkodziałająca (инсулин короткого действия) 10 j. + glukoza 25 g i.v.; 3. salbutamol w nebulizacji (в небулайзере); 4. usuwanie potasu (выведение калия): żywice jonowymienne (ионообменные смолы; polistyrenosulfonian, patiromer, cyklokrzemian sodowo-cyrkonowy), diuretyki pętlowe (петлевые диуретики), hemodializa (гемодиализ).",
                        focus: "Glukonian wapnia НЕ снижает уровень potasu (калий), а стабилизирует błonę kardiomiocytów (мембрана кардиомиоцитов)!"
                    },
                    {
                        title: "Hiponatremia i zespół osmotycznej demielinizacji (гипонатриемия и осмотический демиелинизирующий синдром)",
                        what: "Снижение Na+ < 135 mmol/l.",
                        where: "Szczeklik -> Hiponatremia.",
                        study: "Опасность быстрой коррекции przewlekłej hiponatremii (хроническая гипонатриемия): zespół osmotycznej demielinizacji (осмотический демиелинизирующий синдром; mielinoliza środkowa mostu — центральный понтинный миелинолиз). Ostra objawowa hiponatremia (острая симптомная гипонатриемия) — bolus 3% NaCl 150 ml.",
                        focus: "Максимальная скорость коррекции Na⁺ — не более 10 mmol/l за 24 h (8 mmol/l у пациентов высокого риска: alkoholizm, wyniszczenie (истощение), hipokaliemia)."
                    },
                    {
                        title: "Nefropatia IgA, RPGN, toczniowe zapalenie nerek, FSGS (гломерулонефриты по типам)",
                        what: "Основные первичные и вторичные glomerulopatie (гломерулопатии) взрослых, различаемые по клинике, serologii (серология) и biopsji (биопсия).",
                        where: "Szczeklik -> Nefrologia -> Kłębuszkowe zapalenia nerek; Wytyczne KDIGO 2021 (choroby kłębuszków nerkowych).",
                        study: "Nefropatia IgA (нефропатия IgA) — самое частое pierwotne kłębuszkowe zapalenie nerek (первичный ГН, KZN) в мире: krwiomocz (макрогематурия) через 1–3 дня после zakażenia górnych dróg oddechowych (инфекция верхних дыхательных путей; синфарингитная), C3 prawidłowe (нормальный); лечение — ACEI/sartan, inhibitor SGLT2, GKS (ГКС) при высоком риске прогрессии. RPGN (быстропрогрессирующий ГН: półksiężyce (полулуния) в >50% kłębuszków, потеря функции за дни–недели): typ I — anty-GBM (zespół Goodpasture'a — синдром Гудпасчера: krwawienie płucne (лёгочное кровотечение) + KZN, линейные złogi IgG (отложения)); typ II — kompleksów immunologicznych (иммунокомплексный; TRU, IgA, popaciorkowcowe KZN — ПСГН; ziarniste złogi — гранулярные отложения); typ III — skąpoimmunologiczny (малоиммунный), związany z ANCA (GPA, MPA). Лечение RPGN — pulsy metyloprednizolonu (пульсы метилпреднизолона) + cyklofosfamid или rytuksymab, при anty-GBM — plazmafereza (плазмаферез). Toczniowe zapalenie nerek (волчаночный нефрит) — klasy ISN/RPS I–VI; III и IV (ogniskowe i rozlane rozplemowe — очаговый и диффузный пролиферативный) — самые тяжёлые: GKS + mykofenolan mofetylu или cyklofosfamid, hydroksychlorochina всем. FSGS (ogniskowe segmentalne stwardnienie kłębuszków, ФСГС): zespół nerczycowy (нефротический синдром) у взрослых, первичный или вторичный (otyłość — ожирение, HIV (ВИЧ), heroina, hiperfiltracja), часто steroidooporny (стероидорезистентен). Nefropatia błoniasta (мембранозная нефропатия): przeciwciała anty-PLA2R (первичная), вторичная — nowotwory (опухоли), HBV, TRU, NLPZ (НПВП); высокий риск zakrzepicy żyły nerkowej (тромбоз почечной вены).",
                        focus: "Krwiomocz (гематурия) через 1–3 дня после anginy — nefropatia IgA (C3 норма), через 1–3 недели — popaciorkowcowe KZN (постстрептококковый ГН; C3 снижен). Krwioplucie (кровохарканье) + KZN — anty-GBM или zapalenie naczyń związane z ANCA (васкулит с ANCA): срочно przeciwciała (антитела) и biopsja, лечение не откладывают."
                    }
                ]
            },
            {
                title: "Ср: Гематология I — Анемии и недостаточность костного мозга (Niedokrwistości)",
                id: "w4d3",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Hematologia -> Niedokrwistości",
                popup: { what: "Diagnostyka zespołu anemicznego (диагностика анемического синдрома).", focus: "Diagnostyka różnicowa wg MCV (дифференциальная диагностика по MCV), objawy neurologiczne niedoboru B12 (неврологические симптомы дефицита).", reading: "Szczeklik: Niedokrwistości." },
                subtopics: [
                    {
                        title: "Niedokrwistość z niedoboru żelaza (железодефицитная анемия)",
                        what: "Самая частая niedokrwistość (анемия) в мире (mikrocytowa, hipochromiczna — микроцитарная, гипохромная).",
                        where: "Szczeklik -> Niedokrwistość z niedoboru żelaza.",
                        study: "Лаборатория: MCV ⬇, ferrytyna (ферритин) ⬇ (самый достоверный маркер!), TIBC ⬆, żelazo (железо) ⬇.",
                        focus: "Главная причина у мужчин и женщин в постменопаузе — przewlekła utrata krwi z przewodu pokarmowego (хроническая кровопотеря из ЖКТ): обязательны gastroskopia и kolonoskopia. У женщин до менопаузы — obfite miesiączki (обильные менструации)."
                    },
                    {
                        title: "Niedokrwistość megaloblastyczna z niedoboru B12/kwasu foliowego (мегалобластная анемия)",
                        what: "Niedokrwistość makrocytowa (макроцитарная анемия; MCV > 100 fl) из-за нарушения синтеза DNA (ДНК).",
                        where: "Szczeklik -> Niedokrwistość megaloblastyczna.",
                        study: "Niedokrwistość Addisona-Biermera (анемия Аддисона-Бирмера; autoimmunologiczne zanikowe zapalenie błony śluzowej żołądka — аутоиммунный атрофический гастрит, przeciwciała przeciw czynnikowi wewnętrznemu Castle'a i komórkom okładzinowym — антитела к фактору Касла и париетальным клеткам). Клиника: gładki «lakierowany» język (гладкий «лакированный» язык; zapalenie języka Huntera — глоссит Хантера), objawy neurologiczne (неврологические симптомы; zwyrodnienie sznurowe rdzenia kręgowego — фуникулярный миелоз, подострая комбинированная дегенерация спинного мозга).",
                        focus: "При niedoborze kwasu foliowego (дефицит фолиевой кислоты) objawów neurologicznych (неврологические симптомы) НЕТ!"
                    },
                    {
                        title: "Niedokrwistość chorób przewlekłych — ACD (анемия хронических заболеваний)",
                        what: "Niedokrwistość (анемия) при хронических воспалениях, nowotworach (опухоли) и zakażeniach (инфекции).",
                        where: "Szczeklik -> ACD.",
                        study: "Патогенез: избыток hepcydyny (гепцидин) блокирует выгрузку żelaza (железо) из депо.",
                        focus: "Лаборатория: ferrytyna (ферритин) НОРМАЛЬНАЯ или ПОВЫШЕНА, TIBC снижен (отличие от niedoboru żelaza — дефицит железа)."
                    },
                    {
                        title: "Niedokrwistości hemolityczne i test Coombsa (гемолитические анемии и тест Кумбса)",
                        what: "Усиленный rozpad erytrocytów (разрушение эритроцитов; skrócenie czasu przeżycia — укорочение жизни < 120 дней).",
                        where: "Szczeklik -> Niedokrwistości hemolityczne.",
                        study: "Niedokrwistość (анемия) + żółtaczka (желтуха; bilirubina pośrednia — непрямой билирубин ↑) + splenomegalia (спленомегалия). Retikulocyty (ретикулоциты) ↑, LDH (ЛДГ) ↑, haptoglobina (гаптоглобин) ↓.",
                        focus: "BTA — bezpośredni test antyglobulinowy (прямой антиглобулиновый тест, прямая проба Кумбса) положителен при niedokrwistości autoimmunohemolitycznej (аутоиммунная гемолитическая анемия, AIHA)."
                    },
                    {
                        title: "Niedokrwistość aplastyczna, zespoły mielodysplastyczne (апластическая анемия и МДС)",
                        what: "Niewydolność szpiku (недостаточность костного мозга): niedokrwistość aplastyczna (апластическая анемия) — aplazja układu krwiotwórczego (аплазия кроветворения); MDS — zespoły mielodysplastyczne (МДС) — nowotwory klonalne (клональные новообразования) с неэффективным диспластическим кроветворением.",
                        where: "Szczeklik -> Hematologia -> Niedokrwistość aplastyczna, Zespoły mielodysplastyczne.",
                        study: "Niedokrwistość aplastyczna: pancytopenia (панцитопения), niska liczba retikulocytów (низкие ретикулоциты), szpik hipoplastyczny, tłuszczowy (гипоцеллюлярный, жировой костный мозг), bez splenomegalii (без спленомегалии); причины — идиопатическая (иммунная), leki (лекарства; chloramfenikol, karbamazepina), benzen (бензол), promieniowanie jonizujące (облучение), wirusy (вирусы; zapalenie wątroby — гепатит), связь с PNH. Лечение: молодые с rodzeństwem zgodnym w HLA (совместимый по HLA сиблинг) — allogeniczne przeszczepienie komórek krwiotwórczych (аллогенная трансплантация), остальные — globulina antytymocytarna (антитимоцитарный глобулин) + cyklosporyna + eltrombopag. MDS: пожилые, cytopenie (цитопении; часто niedokrwistość makrocytowa — макроцитарная анемия), dysplazja (дисплазия) в ≥10% клеток линии, blasty (бласты) <20% (≥20% — AML), syderoblasty pierścieniowate (кольцевые сидеробласты); прогноз — IPSS-R, риск transformacji w AML (трансформация в ОМЛ). Лечение: przetoczenia (трансфузии), chelatacja żelaza (хелатирование железа), EPO (ЭПО); del(5q) — lenalidomid; высокий риск — azacytydyna, allogeniczne przeszczepienie.",
                        focus: "Pancytopenia без splenomegalii с «пустым» szpikiem (костный мозг) — niedokrwistość aplastyczna; со splenomegalią — думать о białaczce (лейкоз), mielofibrozie (миелофиброз), hipersplenizmie (гиперспленизм). Niedokrwistość makrocytowa (макроцитарная анемия) у пожилого при нормальных B12 и kwasie foliowym (фолиевая кислота) — MDS (МДС)."
                    }
                ]
            },
            {
                title: "Чт: Гематология II — Острые и Хронические Лейкозы",
                id: "w4d4",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Hematologia -> Białaczki",
                popup: { what: "Nowotwory układu krwiotwórczego (опухолевые заболевания кроветворной системы).", focus: "Imatynib (иматиниб) при CML (PBSz), przełom blastyczny (бластный криз), badanie szpiku (диагностика костного мозга).", reading: "Szczeklik: Białaczki." },
                subtopics: [
                    {
                        title: "Ostra białaczka szpikowa — AML (острый миелоидный лейкоз)",
                        what: "Nowotwór złośliwy (злокачественная опухоль) с накоплением mieloblastów (миелобласты) в szpiku (костный мозг) или krwi (кровь): ≥20%, а при określających nieprawidłowościach genetycznych (определяющие генетические аномалии; t(15;17), t(8;21), inv(16), NPM1 и др.) — при любом проценте blastów (бласты; WHO/ВОЗ 2022).",
                        where: "Szczeklik -> Ostra białaczka szpikowa.",
                        study: "Клиника: niedokrwistość (анемия), zakażenia (инфекции; neutropenia — нейтропения), skaza krwotoczna (кровоточивость; małopłytkowość — тромбоцитопения). Патогномонично: pałeczki Auera (палочки Ауэра) в цитоплазме blastów.",
                        focus: "Ostra białaczka promielocytowa (острый промиелоцитарный лейкоз; APL, t(15;17)) вызывает тяжёлый DIC — zespół rozsianego wykrzepiania wewnątrznaczyniowego (ДВС-синдром); лечение — ATRA (kwas all-trans-retinowy, полностью-транс-ретиноевая кислота) + trójtlenek arsenu (триоксид мышьяка) — начинают сразу при подозрении."
                    },
                    {
                        title: "Przewlekła białaczka szpikowa (CML) i t(9;22) (хронический миелолейкоз)",
                        what: "Nowotwór mieloproliferacyjny (миелопролиферативное заболевание) с chromosomem Philadelphia (филадельфийская хромосома).",
                        where: "Szczeklik -> Przewlekła białaczka szpikowa.",
                        study: "Translokacja (транслокация) t(9;22) создает гибридный gen BCR-ABL1 (ген) с высокой гиперактивностью kinazy tyrozynowej (тирозинкиназа). Ogromna splenomegalia (огромная спленомегалия).",
                        focus: "Terapia celowana inhibitorami kinazy tyrozynowej (таргетная терапия ингибиторами тирозинкиназы): imatynib (иматиниб; Glivec) совершил революцию в лечении CML."
                    },
                    {
                        title: "Przewlekła białaczka limfocytowa — CLL (хронический лимфолейкоз)",
                        what: "Самая частая białaczka (лейкоз) у взрослых в Европе (накопление dojrzałych limfocytów B — зрелых лимфоцитов B).",
                        where: "Szczeklik -> Przewlekła białaczka limfocytowa (PBL).",
                        study: "Bezwzględna limfocytoza (абсолютный лимфоцитоз) в крови. Rozmaz krwi (мазок крови): cienie Gumprechta (тени Гумпрехта; basket cells).",
                        focus: "Бессимптомные ранние стадии (Rai 0 / Binet A) НЕ требуют лечения (стратегия watch and wait)!"
                    },
                    {
                        title: "Zespół rozpadu guza — TLS (синдром лизиса опухоли)",
                        what: "Опасное powikłanie metaboliczne (метаболическое осложнение) при массивном rozpadzie blastów (разрушение бластов).",
                        where: "Szczeklik -> Zespół rozpadu nowotworu.",
                        study: "Hiperurykemia, hiperkaliemia, hiperfosfatemia (гиперурикемия, гиперкалиемия, гиперфосфатемия) + HIPOkalcemia (гипокальциемия) -> ostre uszkodzenie nerek (острая почечная недостаточность, AKI).",
                        focus: "Профилактика: intensywne nawodnienie (массивная гидратация) + rasburykaza (расбуриказа) или allopurynol (аллопуринол)."
                    }
                ]
            },
            {
                title: "Пт: Гематология III — Лимфомы и Множественная миелома",
                id: "w4d5",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Hematologia -> Chłoniaki / Szpiczak",
                popup: { what: "Choroby limfoproliferacyjne (лимфопролиферативные заболевания).", focus: "Kryteria CRAB (критерии CRAB; HyperCalcemia, Renal, Anemia, Bone), ogniska osteolityczne (остеолитические очаги).", reading: "Szczeklik: Chłoniaki." },
                subtopics: [
                    {
                        title: "Chłoniak Hodgkina (лимфома Ходжкина)",
                        what: "Chłoniak złośliwy (злокачественная лимфома) с komórkami Hodgkina i Reed-Sternberga (клетки Ходжкина и Рид-Штернберга, Березовского-Штернберга).",
                        where: "Szczeklik -> Chłoniak Hodgkina.",
                        study: "Niebolesne powiększenie węzłów chłonnych (безболезненная лимфаденопатия; чаще szyjno-nadobojczykowe — шейно-надключичная), пик заболеваемости в 20–30 лет. Ból węzłów chłonnych po spożyciu alkoholu (боль в лимфоузлах после приёма алкоголя) — редкий, но классический для тестов признак.",
                        focus: "Histologia (гистология): olbrzymie komórki Reed-Sternberga (гигантские клетки Рид-Штернберга; «sowie oczy» — «совиные глаза»). Схема лечения: ABVD."
                    },
                    {
                        title: "Objawy B w chłoniakach (общие симптомы при лимфомах)",
                        what: "Системные проявления, определяющие стадию и прогноз chłoniaków (лимфомы).",
                        where: "Szczeklik -> Objawy B.",
                        study: "1. Niewyjaśniona gorączka (необъяснимая лихорадка) > 38°C; 2. Obfite nocne poty (проливные ночные поты); 3. Utrata masy ciała (потеря массы тела) > 10% за 6 месяцев.",
                        focus: "Наличие objawów B ухудшает прогноз и меняет тактику лечения во всех классификациях (Ann Arbor)."
                    },
                    {
                        title: "Szpiczak plazmocytowy (множественная миелома)",
                        what: "Моноклональная złośliwa proliferacja plazmocytów (злокачественная пролиферация плазматических клеток).",
                        where: "Szczeklik -> Szpiczak.",
                        study: "Диагностика: białko monoklonalne (моноклональный белок, białko M) в surowicy/moczu (сыворотка/моча), klonalne plazmocyty (клональные плазмоциты) в szpiku (костный мозг) ≥10% + признаки uszkodzenia narządowego (поражение органов; CRAB) или biomarkery SLiM (биомаркеры).",
                        focus: "Запомнить критерии uszkodzenia narządowego (поражение органов) CRAB: C (HyperCalcemia), R (Renal failure), A (Anemia), B (Bone lesions)."
                    },
                    {
                        title: "Białko Bence'a Jonesa i zmiany kostne (белок Бенс-Джонса и поражение костей)",
                        what: "Специфические проявления szpiczaka plazmocytowego (множественная миелома).",
                        where: "Szczeklik -> Szpiczak -> Objawy.",
                        study: "Białko Bence'a Jonesa (белок Бенс-Джонса) — wolne monoklonalne łańcuchy lekkie (свободные моноклональные лёгкие цепи) иммуноглобулинов в моче (вызывают nerkę szpiczakową — миеломная почка).",
                        focus: "RTG kości (рентген костей): ogniska osteolityczne (остеолитические очаги) без склеротического ободка (штампованные дефекты «пробитые дыроколом» в czaszce — череп)."
                    },
                    {
                        title: "Chłoniaki nieziarnicze: DLBCL, grudkowy, MALT (неходжкинские лимфомы)",
                        what: "Гетерогенная группа chłoniaków (лимфомы) из komórek (клеток) B (чаще) или T: agresywne (агрессивные; DLBCL, chłoniak Burkitta) и indolentne (индолентные; grudkowy — фолликулярная, MALT).",
                        where: "Szczeklik -> Hematologia -> Chłoniaki nieziarnicze.",
                        study: "DLBCL — самая частая лимфома взрослых: szybko rosnące węzły chłonne (быстро растущие лимфоузлы) или guz pozawęzłowy (внеузловая опухоль), objawy B (общие симптомы), wysokie LDH (высокая ЛДГ); прогноз — IPI; лечение R-CHOP (rytuksymab + cyklofosfamid, doksorubicyna, winkrystyna, prednizon), обычно 6 циклов, потенциально излечима. Chłoniak grudkowy (фолликулярная) — самая частая индолентная, t(14;18) с nadekspresją BCL2 (гиперэкспрессия); при małej masie guza (малая опухолевая масса) без симптомов — obserwacja (наблюдение, watch and wait), при показаниях — rytuksymab + chemioterapia (химиотерапия; bendamustyna или CHOP); риск transformacji w DLBCL (трансформация). Chłoniak MALT żołądka (лимфома MALT желудка) связан с H. pylori: при локализованной форме z dodatnim H. pylori (H. pylori-положительной) первая линия — eradykacja (эрадикация). Chłoniak Burkitta (Беркитт) — t(8;14) с MYC, obraz «gwiaździstego nieba» (картина «звёздного неба»), очень быстрый рост, высокий риск zespołu rozpadu guza (синдром лизиса опухоли). Chłoniak z komórek płaszcza (мантийноклеточная) — t(11;14), cyklina D1 (циклин).",
                        focus: "Chłoniak MALT żołądka + H. pylori — сначала eradykacja (эрадикация), а не chemioterapia (химиотерапия). Перед rytuksymabem (ритуксимаб) — HBsAg и anti-HBc (риск reaktywacji HBV — реактивация)."
                    }
                ]
            },
            {
                title: "Сб: Тест по Нефрологии и Гематологии",
                id: "w4d6",
                time: "1.5 ч",
                lepolekPath: "Testy -> Nefrologia + Hematologia (40 pytań CEM)",
                popup: { what: "Проверка знаний за неделю.", focus: "Разбор niedokrwistości (анемии) и morfologii krwi (гемограмма).", reading: "Заметки." },
                subtopics: [
                    {
                        title: "Rozwiązanie 40 pytań CEM (решение вопросов CEM)",
                        what: "Тестирование по разделам Nefrologia i Hematologia.",
                        where: "Lepolek.",
                        study: "Закрепление kryteriów CRAB (критерии CRAB), pilnych wskazań do dializy (ургентные показания к диализу) и niedokrwistości makrocytowych (макроцитарные анемии).",
                        focus: "Анализ вопросов с картинками rozmazów krwi (мазки крови) и zdjęć RTG (рентгенограммы)."
                    },
                    {
                        title: "Trudne morfologie krwi — analiza (разбор сложных гемограмм)",
                        what: "Практика решения задач по morfologii krwi (общий анализ крови).",
                        where: "Задачи CEM.",
                        study: "Дифференциация pancytopenii (панцитопения; niedokrwistość aplastyczna — апластическая анемия, ostra białaczka — острый лейкоз, niedobór B12 — дефицит).",
                        focus: "Оценка liczby retikulocytów (уровень ретикулоцитов) для понимания регенераторной способности szpiku (костный мозг)."
                    },
                    {
                        title: "Kryteria CRAB i AEIOU — utrwalenie (закрепление критериев)",
                        what: "Заучивание двух ключевых мнемонических правил недели.",
                        where: "Личные заметки.",
                        study: "Повторение wskazań do dializy (показания к диализу; AEIOU) и kryteriów rozpoznania szpiczaka (диагностические признаки миеломы; CRAB).",
                        focus: "Уверенное воспроизведение каждого компонента аббревиатур по памяти."
                    }
                ]
            }
        ]
    },
    {
        key: "int-5",
        subject: "interna",
        title: "Терапия V — Эндокринология & Диабетология",
        days: [
            {
                title: "Пн: Сахарный диабет — Диагностика PTD & Фармакотерапия",
                id: "w5d1",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Diabetologia -> Cukrzyca",
                popup: { what: "Cukrzyca typu 1 i 2 (сахарный диабет).", focus: "Standardy Polskiego Towarzystwa Diabetologicznego (стандарты PTD).", reading: "Wytyczne PTD / Szczeklik." },
                subtopics: [
                    {
                        title: "Kryteria rozpoznania cukrzycy wg PTD (критерии диабета)",
                        what: "Диагностические критерии Polskie Towarzystwo Diabetologiczne (PTD).",
                        where: "Wytyczne PTD / Szczeklik -> Cukrzyca.",
                        study: "1. Glikemia na czczo (глюкоза натощак) ≥ 126 mg/dl (дважды); 2. Glikemia w 2. godzinie OGTT (глюкоза через два часа) ≥ 200 mg/dl; 3. HbA1c ≥ 6.5%; 4. Glikemia przygodna (случайная глюкоза) ≥ 200 mg/dl + objawy hiperglikemii (симптомы гипергликемии).",
                        focus: "Stan przedcukrzycowy (предиабет): nieprawidłowa glikemia na czczo (неправильная глюкоза натощак; 100-125) или nieprawidłowa tolerancja glukozy (нарушенная толерантность) w OGTT (140-199 mg/dl)."
                    },
                    {
                        title: "Metformina i leki kardioprotekcyjne: SGLT2 / GLP-1 (метформин и кардиопротекторы)",
                        what: "Современный алгоритм farmakoterapii cukrzycy typu 2 (фармакотерапия СД).",
                        where: "Wytyczne PTD -> Algorytm leczenia.",
                        study: "База = metformina (метформин) + zmiana stylu życia (изменение образа жизни). При сопутствующей przewlekłej niewydolności serca (ХСН), PChN (ХБП) или ChNS (ИБС) -> СРАЗУ добавляем inhibitory SGLT2 (flozyny, ингибиторы) или agonistów receptora GLP-1 (агонисты)!",
                        focus: "Metformina przy kontraście jodowym (при йодсодержащем контрасте): отменяют в день исследования у больных с eGFR <30 ml/min/1.73 m² или с AKI (по некоторым рекомендациям — при eGFR <45 и podaniu dotętniczym — внутриартериальное введение) и возобновляют через 48 h после kontroli kreatyniny (контроль креатинина). Устаревший ответ «за 48 ч до» встречается в старых вопросах."
                    },
                    {
                        title: "Docelowe wartości HbA1c (целевые уровни)",
                        what: "Индивидуализация kontroli glikemii (гликемический контроль).",
                        where: "Wytyczne PTD -> Cele leczenia.",
                        study: "Общая цель: HbA1c < 7.0%. Строгая цель (cukrzyca typu 1 — СД, świeżo rozpoznana cukrzyca typu 2 — свежий СД): < 6.5%. Пожилые с большими powikłaniami (осложнения): < 8.0%.",
                        focus: "Запомнить целевые цифры для тестов CEM — частый вопрос!"
                    },
                    {
                        title: "Insulinoterapia baza-bolus (базально-болюсная инсулинотерапия)",
                        what: "Intensywna insulinoterapia (интенсифицированная схема введения инсулина; обязательна при cukrzycy typu 1 — СД).",
                        where: "Szczeklik -> Insulinoterapia.",
                        study: "Insulina bazalna długodziałająca (базальный инсулин длительного действия; Lantus, Tresiba) 1-2 р/день + bolusy analogu szybkodziałającego (болюсы аналога ультракороткого действия) перед каждым приемом пищи.",
                        focus: "Расчет wymienników węglowodanowych (углеводные единицы, WW) и współczynnika wrażliwości na insulinę (фактор чувствительности к инсулину)."
                    }
                ]
            },
            {
                title: "Вт: Острые осложнения диабета",
                id: "w5d2",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Diabetologia -> Powikłania",
                popup: { what: "Stany nagłe w diabetologii (неотложные состояния в диабетологии).", focus: "Nawadnianie (регидратация; 0.9% NaCl), kontrola K+ (контроль калия) перед введением insuliny (инсулин).", reading: "Szczeklik: Ostre powikłania cukrzycy." },
                subtopics: [
                    {
                        title: "Cukrzycowa kwasica ketonowa — DKA (диабетический кетоацидоз)",
                        what: "Ostre powikłanie (острое декомпенсированное осложнение; чаще при cukrzycy typu 1 — СД).",
                        where: "Szczeklik -> Cukrzycowa kwasica ketonowa.",
                        study: "Критерии DKA — консенсус ADA/EASD 2024: glikemia (глюкоза) ≥200 mg/dl или cukrzyca (СД) в анамнезе (включая euglikemiczną DKA (эугликемический) на inhibitorach SGLT2) + β-hydroksymaślan (β-гидроксибутират) ≥3.0 mmol/l (или ketony w moczu — кетоны в моче ≥2+) + pH <7.3 и/или HCO3− <18 mmol/l. В вопросах CEM прошлых лет (ADA 2009): glikemia >250 mg/dl, pH ≤7.30, HCO3− ≤18 mmol/l, ketonemia/ketonuria (кетонемия/кетонурия), luka anionowa (анионный интервал) >10–12. Oddech Kussmaula (дыхание Куссмауля), zapach acetonu (запах ацетона).",
                        focus: "Лечение: 1. intensywne nawadnianie (массивная гидратация) 0.9% NaCl; 2. ciągły wlew insuliny i.v. (непрерывная инфузия инсулина; 0.1 j./kg/h); 3. korekta potasu (коррекция калия)!"
                    },
                    {
                        title: "Zespół hiperglikemiczno-hipermolalny — ZHH / HHS (гиперосмолярное состояние)",
                        what: "Powikłanie (осложнение) с выраженной hiperglikemią (гипергликемия) без ketozy (кетоз; чаще у пожилых с cukrzycą typu 2 — СД).",
                        where: "Szczeklik -> Zespół hiperglikemiczno-hipermolalny (ZHH).",
                        study: "Glikemia > 600 mg/dl, osmolalność surowicy (осмолярность сыворотки) > 320 mOsm/kg, отсутствие тяжелой kwasicy ketonowej (кетоацидоз). Ciężkie odwodnienie (тяжелейшее обезвоживание).",
                        focus: "Главный компонент лечения — nawadnianie (гидратация; niedobór płynów — дефицит жидкости до 8–10 l); insulina — в меньших дозах и после начала wlewu (инфузия), glikemię (глюкоза) снижают постепенно."
                    },
                    {
                        title: "Reguła 15/15 w hipoglikemii (правило при гипогликемии)",
                        what: "Leczenie łagodnej i umiarkowanej hipoglikemii (купирование лёгкой и среднетяжёлой гипогликемии; glikemia < 70 mg/dl).",
                        where: "Wytyczne PTD -> Hipoglikemia.",
                        study: "Принять 15 g węglowodanów prostych (простые углеводы; сладкий сок, 3 куска сахара) -> Подождать 15 min -> Повторить pomiar glikemii (замер глюкозы).",
                        focus: "Ciężka hipoglikemia (тяжёлая гипогликемия) с utratą przytomności (потеря сознания): 20% glukoza i.v. (20-40 ml) или glukagon 1 mg i.m."
                    },
                    {
                        title: "Suplementacja potasu w DKA (протоколы введения калия)",
                        what: "Профилактика смертельной hipokaliemii (гипокалиемия) при введении insuliny (инсулин).",
                        where: "Szczeklik -> DKA -> K+. ",
                        study: "Insulina перемещает potas (калий) в клетки! Если K⁺ <3.5 mmol/l — insulinę НЕ вводят до восполнения potasu (консенсус ADA/EASD 2024; в вопросах CEM прошлых лет — порог 3.3 mmol/l).",
                        focus: "K⁺ 3.5–5.0 mmol/l — potas добавляют к wlewowi (инфузия) вместе с insuliną; K⁺ >5.0 — potasu не добавляют, контроль каждые 2 h."
                    }
                ]
            },
            {
                title: "Ср: Щитовидная железа (Tarczyca)",
                id: "w5d3",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Endokrynologia -> Tarczyca",
                popup: { what: "Niedoczynność tarczycy, nadczynność tarczycy, guzki tarczycy (гипотиреоз, гипертиреоз, узлы щитовидной железы).", focus: "Интерпретация TSH/fT3/fT4 (ТТГ), tiamazol (Thyrozol)/propylotiouracyl (Propycil).", reading: "Szczeklik: Choroby tarczycy." },
                subtopics: [
                    {
                        title: "Choroba Hashimoto — przewlekłe limfocytarne zapalenie tarczycy (болезнь Хашимото)",
                        what: "Самая частая причина pierwotnej niedoczynności tarczycy (первичный гипотиреоз).",
                        where: "Szczeklik -> Hashimoto.",
                        study: "Autoimmunologiczne niszczenie gruczołu (аутоиммунное разрушение железы). Лаборатория: TSH (ТТГ) ⬆, fT4 ⬇. Положительные przeciwciała (антитела) anty-TPO и anty-TG.",
                        focus: "Заместительная терапия: lewotyroksyna (L-тироксин; Euthyrox/Letrox) строго na czczo (натощак) за 30-60 min до завтрака."
                    },
                    {
                        title: "Choroba Gravesa-Basedowa (болезнь Грейвса-Базедова)",
                        what: "Самая частая причина nadczynności tarczycy (гипертиреоз).",
                        where: "Szczeklik -> Ch. Gravesa-Basedowa.",
                        study: "Патогномоничные przeciwciała przeciw receptorowi TSH (антитела к рецептору ТТГ; anty-TSHR / TRAb). Триада: nadczynność tarczycy (гипертиреоз) + orbitopatia tarczycowa (офтальмопатия; эндокринный экзофтальм) + obrzęk przedgoleniowy (претибиальная микседема).",
                        focus: "Leczenie tyreostatyczne (тиреостатическая терапия): tiamazol (тиамазол; Thiamazole / Tyrozol). В I trymestrze ciąży (I триместр беременности) — propylotiouracyl (пропилтиоурацил, PTU)!"
                    },
                    {
                        title: "Przełom tarczycowy (тиреотоксический криз)",
                        what: "Жизнеугрожающее обострение nadczynności tarczycy (гипертиреоз) с высокой смертностью.",
                        where: "Szczeklik -> Przełom tarczycowy.",
                        study: "Симптомы: wysoka gorączka (высокая лихорадка), выраженная tachykardia (тахикардия) или AF (ФП), pobudzenie (возбуждение), psychoza или śpiączka (психоз или кома), żółtaczka (желтуха), NS (СН) и obrzęk płuc (отёк лёгких), wymioty i biegunka (рвота и диарея). Диагноз клинический, фиксированных порогов температуры и HR (ЧСС) нет; для оценки — skala Burcha-Wartofsky'ego (шкала Burch-Wartofsky): ≥45 баллов — криз вероятен, 25–44 — угрожающий криз.",
                        focus: "Лечение: tiamazol/PTU высокой дозой + płyn Lugola (Люголь; jod — йод) через 1 час ПОСЛЕ tyreostatyku (тиреостатик) + β-bloker (β-блокатор; propranolol) + hydrokortyzon (гидрокортизон)."
                    },
                    {
                        title: "System Bethesda w BACC (система Bethesda для биопсии)",
                        what: "Цитологическая классификация guzków tarczycy (узлы щитовидной железы) после BACC — biopsji aspiracyjnej cienkoigłowej (ТАБ).",
                        where: "Szczeklik -> BACC tarczycy.",
                        study: "Bethesda I (niediagnostyczny — недиагностический), II (łagodny — доброкачественный; риск raka (рак) ~4% (2–7%) по изданию 2023, ~0–3% — по изданию 2017), III (AUS — atypia o nieokreślonym znaczeniu, атипия неопределённого значения; в издании 2023 термин FLUS убран), IV (nowotwór pęcherzykowy lub podejrzenie nowotworu pęcherzykowego — фолликулярная опухоль или подозрение на неё), V (podejrzenie raka — подозрение на рак), VI (złośliwy — злокачественный).",
                        focus: "Самый частый рак tarczycy (щитовидная железа) — rak brodawkowaty (папиллярный рак — 80%)."
                    }
                ]
            },
            {
                title: "Чт: Надпочечники (Nadnercza)",
                id: "w5d4",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Endokrynologia -> Nadnercza",
                popup: { what: "Patologia kory i rdzenia nadnerczy (патология коры и мозгового слоя надпочечников).", focus: "Pilne leczenie przełomu nadnerczowego (неотложное лечение кризиса Аддисона).", reading: "Szczeklik: Nadnercza." },
                subtopics: [
                    {
                        title: "Zespół i choroba Cushinga (синдром и болезнь Кушинга)",
                        what: "Hiperkortyzolemia (гиперкортицизм; nadmiar kortyzolu — избыток кортизола).",
                        where: "Szczeklik -> Zespół Cushinga.",
                        study: "Клиника: twarz księżycowata (лунообразное лицо), otyłość centralna (центральное ожирение), «bawoli kark» («бизоний горб»), czerwone rozstępy (багровые стрии), osteoporoza (остеопороз), NT (АГ), hiperglikemia (гипергликемия). Самая частая причина zespołu Cushinga — jatrogenna (ятрогенная; egzogenne GKS — экзогенные ГКС); choroba Cushinga — gruczolak przysadki (аденома гипофиза).",
                        focus: "Скрининг: nocny test hamowania 1 mg deksametazonu (ночной тест с дексаметазоном; kortyzol утром ≥1.8 µg/dl = нет подавления), kortyzol w ślinie (кортизол в слюне) в 23:00, dobowe wydalanie wolnego kortyzolu z moczem (суточная экскреция свободного кортизола с мочой)."
                    },
                    {
                        title: "Choroba Addisona (болезнь Аддисона)",
                        what: "Pierwotna przewlekła niedoczynność kory nadnerczy (первичная хроническая недостаточность коры надпочечников).",
                        where: "Szczeklik -> Ch. Addisona.",
                        study: "Niedobór kortyzolu i aldosteronu (дефицит кортизола и альдостерона). Клиника: przebarwienia skóry i błon śluzowych (гиперпигментация кожи и слизистых; бронзовая болезнь из-за ACTH — АКТГ), hipotensja (гипотония), łaknienie soli (тяга к солёному).",
                        focus: "Лаборатория: hiponatremia (гипонатриемия; Na+ ⬇) + hiperkaliemia (гиперкалиемия; K+ ⬆) + hipoglikemia (гипогликемия)."
                    },
                    {
                        title: "Guz chromochłonny (феохромоцитома)",
                        what: "Guz rdzenia nadnerczy (опухоль мозгового слоя надпочечников), продуцирующая katecholaminy (катехоламины).",
                        where: "Szczeklik -> Guz chromochłonny.",
                        study: "Триада симптомов: napadowe nadciśnienie (пароксизмальная гипертензия) + ból głowy (головная боль) + nadmierne pocenie (потливость; а также tachykardia — тахикардия).",
                        focus: "Диагностика: wolne metoksykatecholaminy (свободные метанефрины) в osoczu (плазма) или dobowej zbiórce moczu (суточная моча). Перед операцией ОБЯЗАТЕЛЬНО назначают α-blokery (α-блокаторы; fenoksybenzamina/doksazosyna)! β-bloker (β-блокатор) — только ПОСЛЕ адекватной α-blokady: β-bloker без α-blokady вызывает przełom nadciśnieniowy (гипертонический криз; неуравновешенная α-стимуляция)."
                    },
                    {
                        title: "Przełom nadnerczowy — ostra niewydolność kory nadnerczy (острая надпочечниковая недостаточность)",
                        what: "Ургентный przełom nadnerczowy (аддисонический криз) с wstrząsem hipowolemicznym (гиповолемический шок).",
                        where: "Szczeklik -> Przełom nadnerczowy.",
                        study: "Симптомы: zapaść (коллапс), wymioty (рвота), biegunka (диарея), silny ból brzucha (резкая боль в животе; имитирует ostry brzuch — острый живот).",
                        focus: "Немедленное введение: hydrokortyzon (гидрокортизон) 100 mg i.v. bolus + intensywny wlew 0.9% NaCl z glukozą (массивная инфузия с глюкозой)!"
                    }
                ]
            },
            {
                title: "Пт: Гипофиз и Гиперпаратиреоз",
                id: "w5d5",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Endokrynologia -> Przysadka",
                popup: { what: "Choroby przysadki i przytarczyc (заболевания гипофиза и паращитовидных желёз).", focus: "Test odwodnieniowy (тест с ограничением жидкости).", reading: "Szczeklik: Przysadka." },
                subtopics: [
                    {
                        title: "Prolaktynoma (пролактинома)",
                        what: "Самый частый hormonalnie czynny guz przysadki (гормонально-активная опухоль гипофиза).",
                        where: "Szczeklik -> Gruczolak przysadki.",
                        study: "Zespół hiperprolaktynemii (синдром гиперпролактинемии): mlekotok (галакторея), brak miesiączki (аменорея)/niepłodność (бесплодие) у женщин, spadek libido (снижение либидо) и zaburzenia erekcji (эректильная дисфункция) у мужчин.",
                        focus: "Первая линия лечения — НЕ хирургия, а agoniści dopaminy (дофаминомиметики): kabergolina (каберголин; Dostinex) или bromokryptyna (бромокриптин)!"
                    },
                    {
                        title: "Akromegalia (акромегалия)",
                        what: "Nadmiar hormonu wzrostu (избыток гормона роста, GH) у взрослых после zarośnięcia chrząstek wzrostowych (закрытие зон роста).",
                        where: "Szczeklik -> Akromegalia.",
                        study: "Powiększenie dłoni, stóp, rysów twarzy (увеличение кистей, стоп, черт лица), prognatyzm (прогнатизм), makroglosja (макроглоссия), nadciśnienie tętnicze (гипертензия), kardiomiopatia (кардиомиопатия).",
                        focus: "Скрининг: podwyższone stężenie IGF-1 (повышенный ИФР-1) w surowicy (сыворотка). Подтверждение: brak supresji GH (отсутствие подавления GH) в OGTT."
                    },
                    {
                        title: "Moczówka prosta (несахарный диабет)",
                        what: "Niedobór wazopresyny (дефицит вазопрессина; ośrodkowa — центральный) или oporność nerek na wazopresynę (резистентность почек; nerkowa — почечный). Новая номенклатура (2022): niedobór argininowazopresyny (дефицит аргинин-вазопрессина, AVP-D, центральный) и oporność na argininowazopresynę (резистентность к аргинин-вазопрессину, AVP-R, почечный); в польских текстах пока «moczówka prosta ośrodkowa/nerkowa».",
                        where: "Szczeklik -> Moczówka prosta.",
                        study: "Poliuria (полиурия; > 4-10 l moczu na dobę o niskim ciężarze właściwym — низкой плотности < 1005) + polidypsja (полидипсия; pragnienie — жажда).",
                        focus: "Дифдиагностика: test odwodnieniowy (тест с ограничением жидкости) + test z desmopresyną (тест с десмопрессином): zagęszczenie moczu (концентрирование мочи) после desmopresyny — moczówka ośrodkowa (центральный), отсутствие — moczówka nerkowa (почечный несахарный диабет)."
                    },
                    {
                        title: "Pierwotna nadczynność przytarczyc — PNP (первичный гиперпаратиреоз)",
                        what: "Nadmierne wydzielanie parathormonu (избыточная секреция паратгормона, PTH) przez gruczolaka przytarczycy (аденома паращитовидной железы).",
                        where: "Szczeklik -> Nadczynność przytarczyc.",
                        study: "Триада: hiperkalcemia (гиперкальциемия; Ca2+ ⬆) + hipofosfatemia (гипофосфатемия) + podwyższony PTH (повышенный ПТГ ⬆).",
                        focus: "Симптомы: bóle kostne (костные боли; osteoporoza — остеопороз), kamica nerkowa (мочекаменная болезнь), choroba wrzodowa (язвенная болезнь ЖКТ), OZT (острый панкреатит)."
                    }
                ]
            },
            {
                title: "Сб: Итоговый тест по Эндокринологии и всей Терапии",
                id: "w5d6",
                time: "1.5 ч",
                lepolekPath: "Testy -> Endokrynologia + Zbiorczy Interna (40 pytań CEM)",
                popup: { what: "Завершение 5-недельного блока chorób wewnętrznych (блок Терапии).", focus: "Закрепление ловушек CEM.", reading: "Заметки." },
                subtopics: [
                    {
                        title: "Rozwiązanie 40 pytań CEM (решение вопросов CEM)",
                        what: "Финальное тестирование по терапевтическим дисциплинам.",
                        where: "Lepolek.",
                        study: "Закрепление kryteriów cukrzycy (критерии диабета), patologii tarczycy (щитовидная железа) и przysadki (гипофиз).",
                        focus: "Проверка усвоения stanów nagłych (неотложные состояния; DKA, przełom nadnerczowy — криз Аддисона, przełom tarczycowy — тиреотоксический криз)."
                    },
                    {
                        title: "Testy endokrynologiczne — utrwalenie (закрепление эндокринных тестов)",
                        what: "Сводный обзор testów diagnostycznych (диагностические пробы).",
                        where: "Личные заметки.",
                        study: "Mały test hamowania deksametazonem (малый тест с дексаметазоном), OGTT для cukrzycy (диабет) и akromegalii (акромегалия), test odwodnieniowy (сухой тест) для moczówki prostej (несахарный диабет).",
                        focus: "Четкое понимание нормальных и патологических порогов ответов."
                    },
                    {
                        title: "Podsumowanie bloku chorób wewnętrznych (итоговый обзор блока Терапии)",
                        what: "Оценка готовности по всем 5 неделям терапевтического раздела.",
                        where: "Статистика Lepolek.",
                        study: "Анализ общей успеваемости по kardiologii, pulmonologii, gastroenterologii, nefrologii, hematologii и endokrynologii (кардиология, пульмонология, гастроэнтерология, нефрология, гематология, эндокринология).",
                        focus: "Выделение тем с результатом менее 60% для включения во 2-й цикл повторения."
                    }
                ]
            }
        ]
    },
    {
        key: "int-6",
        subject: "interna",
        title: "Терапия VI — Кардиология II и неотложные состояния",
        days: [
            {
                title: "Пн: ЭКГ систематически и тахиаритмии (EKG, częstoskurcze)",
                id: "int-ekg",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Kardiologia -> Zaburzenia rytmu serca",
                popup: { what: "Пошаговое чтение EKG (ЭКГ) и распознавание częstoskurczów (тахикардии) с wąskimi i szerokimi zespołami QRS (узкий и широкий QRS).", focus: "Первый шаг при каждой tachykardii (тахикардия): стабилен ли пациент (нестабильный — kardiowersja synchronizowana, синхронизированная кардиоверсия); leki przeciwwskazane (запрещённые препараты) при WPW и torsade de pointes.", reading: "Szczeklik -> Kardiologia -> Zaburzenia rytmu serca; ESC 2019 (częstoskurcze nadkomorowe); ERC 2025 (algorytm częstoskurczu)." },
                subtopics: [
                    {
                        title: "Systematyczna ocena EKG (систематическая оценка ЭКГ)",
                        what: "Порядок чтения: rytm (ритм), HR (ЧСС), oś elektryczna serca (ось), odstępy PR/QRS/QT (интервалы), cechy przerostu (признаки гипертрофии), odcinek ST i załamek T (сегмент ST и зубец T).",
                        where: "Szczeklik -> Kardiologia -> Badania diagnostyczne -> Elektrokardiografia.",
                        study: "Норма: PR 120–200 ms, QRS <120 ms, QTc >450 ms у мужчин и >460 ms у женщин — wydłużony (удлинён), >500 ms — высокий риск torsade. Oś (ось) по отведениям I и aVF (норма от −30° до +90°); przerost lewej komory (ГЛЖ) по Sokolowowi-Lyonowi (Соколов-Лайон): SV1 + RV5/V6 >35 mm. Uniesienie ST (элевация ST) ≥1 mm в 2 соседних отведениях (в V2–V3 ≥2 mm у мужчин ≥40 лет, ≥2.5 mm у мужчин <40 лет, ≥1.5 mm у женщин).",
                        focus: "Rozlane wklęsłe uniesienie ST (диффузная вогнутая элевация ST) с obniżeniem PR (депрессия PR) без zmian przeciwstronnych (реципрокные изменения) — zapalenie osierdzia (перикардит), а не STEMI. Ból w klatce piersiowej (боль в груди) + blok odnogi pęczka Hisa (блокада ножки пучка Гиса) у нестабильного пациента ведётся как эквивалент STEMI."
                    },
                    {
                        title: "AVNRT i AVRT — częstoskurcz nawrotny węzłowy i przedsionkowo-komorowy (пароксизмальные тахикардии с узким QRS)",
                        what: "Napadowe częstoskurcze (пароксизмальные тахикардии) с wąskimi, miarowymi QRS (узкий регулярный QRS), 150–250/min, с кругом re-entry в węźle przedsionkowo-komorowym (АВ-узел; AVNRT) или через drogę dodatkową (дополнительный путь; AVRT).",
                        where: "Szczeklik -> Kardiologia -> Częstoskurcze nadkomorowe; Wytyczne ESC 2019 (SVT).",
                        study: "Стабильный пациент: 1) próby wagalne (вагусные пробы; zmodyfikowana próba Valsalvy — модифицированная проба Вальсальвы, в положении лёжа с подъёмом ног); 2) adenozyna (аденозин) 6 mg i.v. быстрым bolusem с промывкой, затем 12 mg (ERC допускает третью дозу 18 mg); 3) werapamil (верапамил) или β-bloker i.v. Нестабильный — kardiowersja synchronizowana (синхронизированная кардиоверсия). Рецидивы: ablacja (абляция) — метод первой линии.",
                        focus: "Adenozyna противопоказана при ciężkiej astmie (тяжёлая бронхиальная астма) и при migotaniu przedsionków z preekscytacją (ФП с предвозбуждением). При trzepotaniu przedsionków (трепетание предсердий) adenozyna не купирует ритм, а лишь проявляет fale F (волны F) — это диагностический, а не лечебный эффект."
                    },
                    {
                        title: "Zespół Wolffa-Parkinsona-White'a — WPW (синдром WPW)",
                        what: "Preekscytacja komór (предвозбуждение желудочков) через drogę dodatkową (дополнительный путь; pęczek Kenta — пучок Кента) с эпизодами tachyarytmii (тахиаритмии).",
                        where: "Szczeklik -> Kardiologia -> Zespoły preekscytacji.",
                        study: "EKG в rytmie zatokowym (синусовый ритм): PR <120 ms, fala delta (волна дельта), poszerzony QRS (расширенный QRS), wtórne zmiany ST-T (вторичные изменения ST-T). AF z preekscytacją (ФП с предвозбуждением) — niemiarowy częstoskurcz (нерегулярная тахикардия) с szerokimi, разными по форме QRS, HR может превышать 250/min с переходом в VF (ФЖ). Лечение: нестабильный — kardiowersja; стабильный — kardiowersja или prokainamid/ibutylid i.v.; далее ablacja drogi dodatkowej (абляция дополнительного пути).",
                        focus: "При AF z WPW НЕЛЬЗЯ блокировать węzeł AV (АВ-узел): adenozyna, werapamil, diltiazem, β-blokery, digoksyna (и amiodaron i.v. по ESC 2019) ускоряют проведение по drodze dodatkowej (дополнительный путь) и провоцируют VF."
                    },
                    {
                        title: "Trzepotanie przedsionków (трепетание предсердий)",
                        what: "Makro-re-entry в prawym przedsionku (правое предсердие; typowe — przez cieśń trójdzielno-żylną, кавотрикуспидальный перешеек) с частотой fal (волны) около 300/min.",
                        where: "Szczeklik -> Kardiologia -> Trzepotanie przedsionków.",
                        study: "Piłokształtne fale F (пилообразные волны F) в II, III, aVF; przewodzenie 2:1 (проведение) даёт регулярный ритм komór (желудочки) ровно около 150/min. Antykoagulacja (антикоагуляция) — по тем же правилам и шкале, что при AF (ФП). Метод выбора при nawrotach (рецидивы) typowego trzepotania — ablacja cieśni trójdzielno-żylnej (абляция кавотрикуспидального перешейка; эффективность >90%).",
                        focus: "Miarowy częstoskurcz z wąskimi QRS (регулярная узкая тахикардия) 150/min — сначала подумать о trzepotaniu 2:1. Leki klasy IC (препараты IC класса; propafenon, flekainid) без leku blokującego węzeł AV (блокатор АВ-узла) могут дать przewodzenie 1:1 с резким ростом HR (ЧСС)."
                    },
                    {
                        title: "Częstoskurcz komorowy (VT), torsade de pointes, zespół wydłużonego QT (желудочковые тахикардии и удлинённый QT)",
                        what: "Częstoskurcze komorowe (желудочковые тахикардии): jednokształtny VT (мономорфная) и wielokształtny torsade de pointes (полиморфная) на фоне wydłużonego QT (удлинённый QT).",
                        where: "Szczeklik -> Kardiologia -> Komorowe zaburzenia rytmu; ERC 2025 -> Zaburzenia rytmu w okołozatrzymaniowym okresie.",
                        study: "Szeroki QRS (широкий QRS; ≥120 ms) + dysocjacja przedsionkowo-komorowa (АВ-диссоциация), pobudzenia zsumowane i przewiedzione (сливные и захваченные комплексы) — VT. VT z tętnem (с пульсом) и признаками нестабильности — kardiowersja synchronizowana (до 3 попыток), затем amiodaron (амиодарон) 300 mg i.v. за 10–20 min; стабильная — amiodaron 300 mg i.v. за 10–60 min. Torsade: siarczan magnezu (магния сульфат) 2 g i.v., korekta K+ и Mg2+, отмена leków wydłużających QT (препараты, удлиняющие QT; makrolidy, fluorochinolony, haloperydol, sotalol, ondansetron, metadon), при bradykardii (брадикардия) — stymulacja (стимуляция).",
                        focus: "Częstoskurcz z szerokimi QRS (тахикардия с широким QRS) считается VT, пока не доказано обратное. При torsade de pointes amiodaron НЕ дают — он удлиняет QT; препарат выбора — MgSO4. Bez tętna (без пульса) — алгоритм ALS с defibrylacją (дефибрилляция)."
                    }
                ]
            },
            {
                title: "Вт: Пороки клапанов и инфекционный эндокардит (Wady zastawkowe, IZW)",
                id: "int-wady",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Kardiologia -> Wady zastawkowe serca i IZW",
                popup: { what: "Stenoza mitralna (митральный стеноз), niedomykalność aortalna (аортальная недостаточность), stenoza aortalna (аортальный стеноз) с выбором SAVR/TAVI; диагностика и лечение IZW (ИЭ).", focus: "Obraz osłuchowy (аускультативная картина) каждой wady (порок), progi ciężkości (пороги тяжести), kryteria Duke ESC 2023 (критерии Duke), wskazania do pilnej operacji (показания к срочной операции) при IZW.", reading: "Szczeklik -> Kardiologia -> Nabyte wady serca; Wytyczne ESC/EACTS 2025 (wady zastawkowe); Wytyczne ESC 2023 (zapalenie wsierdzia)." },
                subtopics: [
                    {
                        title: "Stenoza mitralna (митральный стеноз)",
                        what: "Zwężenie ujścia mitralnego (сужение митрального отверстия), в подавляющем большинстве — последствие gorączki reumatycznej (ревматическая лихорадка).",
                        where: "Szczeklik -> Kardiologia -> Stenoza mitralna.",
                        study: "Osłuchiwanie (аускультация): głośny I ton (громкий I тон), trzask otwarcia zastawki mitralnej (тон открытия митрального клапана), turkoczący szmer rozkurczowy (диастолический рокочущий шум) на koniuszku (верхушка) с пресистолическим усилением (исчезает при AF — ФП). Ciężka stenoza (тяжёлый стеноз) — pole powierzchni ujścia (площадь отверстия) ≤1.5 cm². Клинически: duszność (одышка), AF, krwioplucie (кровохарканье), powikłania zakrzepowo-zatorowe (тромбоэмболии). Лечение: przezskórna komisurotomia balonowa (чрескожная баллонная комиссуротомия, PMC) при подходящей анатомии, иначе chirurgiczna wymiana zastawki (хирургическая замена).",
                        focus: "AF при umiarkowanej/ciężkiej stenozie mitralnej (умеренный/тяжёлый митральный стеноз) — только VKA (АВК), NOAC противопоказаны. Ciąża (беременность) часто декомпенсирует стеноз (рост objętości krwi krążącej — ОЦК — и HR) — β-bloker для удлинения rozkurczu (диастола)."
                    },
                    {
                        title: "Niedomykalność aortalna (аортальная недостаточность)",
                        what: "Обратный ток крови из aorty в lewą komorę (ЛЖ) в rozkurczu (диастола) из-за поражения płatków (створки) или poszerzenia opuszki aorty (расширение корня аорты).",
                        where: "Szczeklik -> Kardiologia -> Niedomykalność zastawki aortalnej; Wytyczne ESC/EACTS 2025.",
                        study: "Причины: zastawka dwupłatkowa (двустворчатый клапан), poszerzenie opuszki aorty (zespół Marfana — синдром Марфана, NT — АГ), IZW (ИЭ), choroba reumatyczna (ревматизм); ostra (острая) — IZW и rozwarstwienie aorty (расслоение аорты). Wczesnorozkurczowy szmer malejący (ранний диастолический убывающий шум) в punkcie Erba (точка Эрба), duże ciśnienie tętna (большое пульсовое давление), tętno Corrigana (пульс Корригана), objaw Musseta (симптом Мюссе), szmer Austina Flinta (шум Остина Флинта). Операция: objawowa ciężka niedomykalność (симптоматическая тяжёлая недостаточность); bezobjawowa (бессимптомная) — при LVEF ≤50% или LVESD >50 mm (LVESDi >25 mm/m²) (ESC 2021, сохранено в ESC/EACTS 2025); ESC/EACTS 2025 добавили вмешательство при низком операционном риске, если LVESDi >22 mm/m², LVESVi >45 ml/m² или LVEF ≤55%. В вопросах CEM прошлых лет — только пороги 50 mm / 25 mm/m² / 50%.",
                        focus: "Ostra ciężka niedomykalność aortalna (острая тяжёлая аортальная недостаточность) при IZW или rozwarstwieniu — срочная операция, не медикаментозное ведение. Ciśnienie tętna (пульсовое давление) широкое при хронической и нормальное при острой форме."
                    },
                    {
                        title: "Stenoza aortalna — kwalifikacja do SAVR/TAVI (аортальный стеноз: SAVR или TAVI)",
                        what: "Выбор между chirurgiczną (хирургическая, SAVR) и przezcewnikową (транскатетерная, TAVI) wymianą zastawki aortalnej (замена аортального клапана) при ciężkiej stenozie (тяжёлый стеноз).",
                        where: "Wytyczne ESC/EACTS 2025 (wady zastawkowe) -> Stenoza aortalna; Szczeklik -> Kardiologia.",
                        study: "Ciężka stenoza (тяжёлый стеноз): pole powierzchni ujścia (площадь) <1.0 cm², Vmax ≥4 m/s, średni gradient (средний градиент) ≥40 mm Hg. Показания: любые objawy (симптомы; dławica, omdlenie, duszność — стенокардия, обморок, одышка); bezobjawowy (бессимптомный) — при LVEF <50% или objawach w teście wysiłkowym (симптомы в нагрузочной пробе; ESC 2021, ответ вопросов CEM прошлых лет); ESC/EACTS 2025 допускают вмешательство (TAVI/SAVR) и у бессимптомного с ciężką stenozą wysokogradientową (тяжёлый высокоградиентный стеноз) и zachowaną LVEF (сохранённая LVEF) при низком процедурном риске. Сейчас TAVI рекомендована при zastawce trójpłatkowej (трёхстворчатый клапан) у ≥70 лет (ESC/EACTS 2025), SAVR — <70 лет с низким риском; в вопросах CEM прошлых лет порог 75 лет (ESC 2021) или высокий хирургический риск.",
                        focus: "Farmakoterapia (медикаментозная терапия) не улучшает прогноз — после появления objawów (симптомы) нужна wymiana zastawki (замена клапана). Stenoza niskoprzepływowa, niskogradientowa (низкопоточный низкоградиентный стеноз) со сниженной EF верифицируют echokardiografią obciążeniową z dobutaminą (стресс-эхо с добутамином)."
                    },
                    {
                        title: "Infekcyjne zapalenie wsierdzia — kryteria Duke ESC 2023 i drobnoustroje (критерии Duke и возбудители ИЭ)",
                        what: "Zmodyfikowane kryteria Duke ESC 2023 (модифицированные критерии Duke) для диагностики IZW (ИЭ) и типичные drobnoustroje (возбудители) по клиническим ситуациям.",
                        where: "Wytyczne ESC 2023 (zapalenie wsierdzia) -> Diagnostyka; Szczeklik -> Kardiologia -> IZW.",
                        study: "Duże (большие): typowy drobnoustrój (типичный возбудитель) в 2 независимых posiewach krwi (посевы крови; paciorkowce zieleniejące — зеленящие стрептококки, S. gallolyticus, HACEK, S. aureus, E. faecalis) или стойко положительные posiewy; obrazowanie (визуализация) — wegetacja, ropień, tętniak rzekomy, przetoka, perforacja (вегетация, абсцесс, псевдоаневризма, фистула, перфорация) на echo (эхо), TK serca (КТ сердца) или [18F]FDG PET/CT (sztuczna zastawka — протез). Małe (малые): predyspozycja (предрасположенность), gorączka (лихорадка) >38 °C, zjawiska zatorowe i immunologiczne (эмболические и иммунологические феномены; guzki Oslera — узелки Ослера, plamki Rotha — пятна Рота, KZN — ГН), mikrobiologia poniżej progu (микробиология ниже порога). Pewne IZW (определённый ИЭ): 2 duże, 1 duże + 3 małe или 5 małych; 3 serie posiewów krwi (серии посевов) до antybiotyku (антибиотик).",
                        focus: "Osoby przyjmujące narkotyki dożylnie (внутривенные наркоманы) — S. aureus, zastawka trójdzielna (трикуспидальный клапан), zatory septyczne (септические эмболы) в płucach (лёгкие). S. gallolyticus (bovis) — обязательна kolonoskopia (колоноскопия; rak jelita grubego — рак толстой кишки). Wczesne IZW sztucznej zastawki (ранний ИЭ протеза; <1 roku) — gronkowce koagulazoujemne (коагулазонегативные стафилококки)."
                    },
                    {
                        title: "Leczenie IZW i wskazania do operacji (лечение ИЭ и показания к операции)",
                        what: "Empiryczna antybiotykoterapia (эмпирическая антибиотикотерапия) до identyfikacji drobnoustroju (идентификация возбудителя) и wskazania do wczesnego leczenia operacyjnego (ранняя хирургия).",
                        where: "Wytyczne ESC 2023 (zapalenie wsierdzia) -> Leczenie przeciwdrobnoustrojowe, Leczenie operacyjne.",
                        study: "Эмпирически, pozaszpitalne IZW zastawki natywnej (внебольничный ИЭ нативного клапана) или późne IZW sztucznej zastawki (поздний ИЭ протеза): ampicylina + ceftriakson или ampicylina + (flu)kloksacylina (ESC 2023); wczesne IZW sztucznej zastawki / szpitalne (ранний ИЭ протеза / нозокомиальный): wankomycyna + gentamycyna (+ ryfampicyna при протезе). В вопросах CEM прошлых лет — ampicylina + kloksacylina + gentamycyna (ESC 2015). Длительность: 4–6 недель zastawka natywna (нативный клапан), 6 недель sztuczna zastawka (протез). Операция: NS (СН) из-за dysfunkcji zastawki (дисфункция клапана; экстренно при obrzęku płuc/wstrząsie — отёк лёгких/шок), niekontrolowane zakażenie (неконтролируемая инфекция; ropień, grzyby, drobnoustroje wielooporne, bakteriemia >7 дней — абсцесс, грибы, полирезистентные, бактериемия), wegetacja ≥10 mm z zatorowością (вегетация с эмболией).",
                        focus: "Echo (эхо): сначала TTE, при отрицательном и высоком подозрении или при sztucznej zastawce (протез) — TEE. Posiewy (посевы) берут до antybiotyku (антибиотик); antybiotyk не откладывают у тяжёлого больного после взятия posiewów."
                    }
                ]
            },
            {
                title: "Ср: Миокардит, кардиомиопатии, перикард (Zapalenie mięśnia sercowego, kardiomiopatie, osierdzie)",
                id: "int-osierdzie",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Kardiologia -> Choroby mięśnia sercowego i osierdzia",
                popup: { what: "Zapalenie mięśnia sercowego (миокардит), kardiomiopatia przerostowa i rozstrzeniowa (ГКМП и ДКМП), ostre zapalenie osierdzia (острый перикардит), tamponada (тампонада) и zespół po perikardiotomii (постперикардиотомный синдром).", focus: "Manewry (манёвры), меняющие szmer (шум) при kardiomiopatii przerostowej (ГКМП); схема kolchicyna + NLPZ (колхицин + НПВП); triada Becka (триада Бека) и tętno paradoksalne (парадоксальный пульс).", reading: "Szczeklik -> Kardiologia -> Kardiomiopatie, Choroby osierdzia; Wytyczne ESC 2023 (kardiomiopatie); Wytyczne ESC 2025 (zapalenie mięśnia sercowego i osierdzia)." },
                subtopics: [
                    {
                        title: "Zapalenie mięśnia sercowego (миокардит)",
                        what: "Воспаление mięśnia sercowego (миокард), чаще wirusowe (вирусное; parwowirus B19, HHV-6, enterowirusy Coxsackie B, SARS-CoV-2).",
                        where: "Szczeklik -> Kardiologia -> Zapalenie mięśnia sercowego.",
                        study: "Клиника: ból w klatce piersiowej (боль в груди), duszność (одышка), zaburzenia rytmu (аритмии) через 1–2 недели после zakażenia wirusowego (вирусная инфекция); wzrost troponiny (подъём тропонина) при нормальных tętnicach wieńcowych (коронарные артерии). MR serca (МРТ сердца): obrzęk (отёк) и późne wzmocnienie kontrastowe (позднее контрастирование) podnasierdziowo/śródściennie (субэпикардиально/интрамурально; не podwsierdziowo — субэндокардиально, как при zawale — инфаркт); biopsja endomiokardialna (эндомиокардиальная биопсия) — золотой стандарт. Лечение — terapia NS i zaburzeń rytmu (терапия СН и аритмий); olbrzymiokomórkowe zapalenie mięśnia sercowego (гигантоклеточный миокардит) — immunosupresja (иммуносупрессия).",
                        focus: "Молодой пациент, ból w klatce piersiowej и wzrost troponiny после zakażenia — zapalenie mięśnia sercowego. Ограничение intensywnego wysiłku fizycznego (интенсивная физическая нагрузка): сейчас сначала на 1 месяц, дальше индивидуально по objawom (симптомы), biomarkerom (биомаркеры), Holterowi (Холтер) и MR serca (ESC 2025); в вопросах CEM прошлых лет — 3–6 месяцев (ESC 2020, kardiologia sportowa — спортивная кардиология)."
                    },
                    {
                        title: "Kardiomiopatia przerostowa (гипертрофическая кардиомиопатия)",
                        what: "Genetyczny (генетическая; geny sarkomerowe — саркомерные гены, аутосомно-доминантно) przerost lewej komory (гипертрофия ЛЖ) ≥15 mm, не объяснимый obciążeniem ciśnieniowym (нагрузка давлением).",
                        where: "Wytyczne ESC 2023 (kardiomiopatie) -> HCM; Szczeklik -> Kardiologia -> Kardiomiopatia przerostowa.",
                        study: "Zawężanie drogi odpływu lewej komory (обструкция выносящего тракта ЛЖ) — gradient ≥30 mm Hg (≥50 — istotny hemodynamicznie, гемодинамически значимый). Szmer skurczowy (систолический шум) усиливается при próbie Valsalvy (проба Вальсальвы) и вставании (падение obciążenia wstępnego — преднагрузка), ослабевает на корточках и при ściskaniu dłoni (сжатие кисти). Лечение: β-blokery (или werapamil), mawakamten (мавакамтен) при zawężaniu, miektomia (миоэктомия) или alkoholowa ablacja przegrody (алкогольная септальная абляция). ICD (ИКД) — по шкале HCM Risk-SCD (5-летний риск ≥6%) или после zatrzymania krążenia (остановка кровообращения).",
                        focus: "Частая причина nagłej śmierci sercowej (внезапная смерть) молодых спортсменов — omdlenie (обморок) при нагрузке требует исключения kardiomiopatii przerostowej (ГКМП). При zawężaniu (обструкция) противопоказаны azotany (нитраты), leki rozszerzające naczynia (вазодилататоры) и digoksyna (дигоксин); próba Valsalvy усиливает szmer kardiomiopatii przerostowej и ослабляет szmer stenozy aortalnej (аортальный стеноз)."
                    },
                    {
                        title: "Kardiomiopatia rozstrzeniowa (дилатационная кардиомиопатия)",
                        what: "Poszerzenie i dysfunkcja skurczowa lewej komory (дилатация и систолическая дисфункция ЛЖ) без ChNS (ИБС) и przeciążenia ciśnieniowego/objętościowego (перегрузка давлением/объёмом).",
                        where: "Szczeklik -> Kardiologia -> Kardiomiopatia rozstrzeniowa; Wytyczne ESC 2023 (kardiomiopatie).",
                        study: "Причины: genetyczne (генетические; tytyna — титин), alkohol (алкоголь), leki kardiotoksyczne (кардиотоксичные препараты; antracykliny, trastuzumab), przebyte zapalenie mięśnia sercowego (перенесённый миокардит), kardiomiopatia okołoporodowa (перипартальная), tachykardiomiopatia (тахикардиомиопатия). Лечение как HFrEF (4 группы препаратов). ICD (ИКД) в prewencji pierwotnej (первичная профилактика) при LVEF ≤35% после ≥3 месяцев оптимальной терапии.",
                        focus: "Kardiomiopatia alkoholowa (алкогольная КМП) и tachykardiomiopatia обратимы (abstynencja, kontrola rytmu — абстиненция, контроль ритма). Kardiotoksyczność antracyklin (антрациклиновая кардиотоксичность) дозозависима и необратима, trastuzumabu (трастузумаб) — обычно обратима."
                    },
                    {
                        title: "Ostre zapalenie osierdzia, zespół Dresslera (острый перикардит и синдром Дресслера)",
                        what: "Zapalenie osierdzia (воспаление перикарда), чаще idiopatyczne/wirusowe (идиопатическое/вирусное); zespół Dresslera (синдром Дресслера) — autoimmunologiczne zapalenie osierdzia (аутоиммунный перикардит) через недели после zawału (ИМ) или operacji kardiochirurgicznej (операция на сердце).",
                        where: "Szczeklik -> Kardiologia -> Choroby osierdzia; Wytyczne ESC (choroby osierdzia 2015, zapalenie mięśnia sercowego i osierdzia 2025).",
                        study: "Диагноз — ≥2 из 4: ból opłucnowy (плевритическая боль), облегчающийся наклоном вперёд; tarcie osierdziowe (шум трения перикарда); rozlane uniesienie ST (диффузная элевация ST) или obniżenie PR (депрессия PR); nowy płyn w osierdziu (новый выпот). Лечение: kwas acetylosalicylowy (аспирин) 750–1000 mg co 8 h или ibuprofen 600 mg co 8 h 1–2 недели + kolchicyna (колхицин) 0.5 mg 2 раза в день (0.5 mg 1 раз при массе <70 kg) не менее 3–6 месяцев, kolchicynę отменяют последней (ESC 2025; в вопросах CEM прошлых лет — 3 месяца, при nawrocie (рецидив) 6 месяцев, ESC 2015); ограничение нагрузок — сначала 1 месяц, дальше индивидуально. Zespół Dresslera — 1–6 недель после zawału; препарат выбора — kwas acetylosalicylowy.",
                        focus: "GKS (ГКС) — только вторая линия (повышают частоту nawrotów — рецидивы). Госпитализация при признаках złego rokowania (плохой прогноз): gorączka (лихорадка) >38 °C, podostry początek (подострое начало), duży płyn (большой выпот), tamponada (тампонада), brak odpowiedzi na NLPZ (нет ответа на НПВП) за неделю."
                    },
                    {
                        title: "Tamponada serca (тампонада сердца)",
                        what: "Ucisk serca (сдавление сердца) płynem w osierdziu (жидкость в перикарде) с нарушением napełniania rozkurczowego (диастолическое наполнение) и spadkiem rzutu serca (падение сердечного выброса).",
                        where: "Szczeklik -> Kardiologia -> Tamponada serca.",
                        study: "Triada Becka (триада Бека): hipotensja (гипотония), poszerzenie żył szyjnych (набухание шейных вен), ściszenie tonów serca (глухие тоны сердца). Tętno paradoksalne (парадоксальный пульс) — падение ciśnienia skurczowego (систолическое АД) >10 mm Hg на вдохе. EKG: niski woltaż (низкий вольтаж), naprzemienność elektryczna (электрическая альтернация); echo (эхо): zapadanie się prawego przedsionka/prawej komory w rozkurczu (диастолический коллапс ПП/ПЖ), poszerzona żyła główna dolna (расширенная нижняя полая вена). Лечение: perikardiocenteza (перикардиоцентез) под контролем echo; drenaż chirurgiczny (хирургический дренаж) при krwiaku osierdzia (гемоперикард) из-за rozwarstwienia aorty typu A (расслоение аорты типа A) или urazu (травма).",
                        focus: "Diuretyki (диуретики) и leki rozszerzające naczynia (вазодилататоры) при tamponadzie противопоказаны, временно помогает wlew płynów (инфузия). Objaw Kussmaula (симптом Куссмауля) более типичен для zaciskającego zapalenia osierdzia (констриктивный перикардит), чем для tamponady."
                    }
                ]
            },
            {
                title: "Чт: Острая СН, кардиогенный шок, обмороки, расслоение аорты (Ostra niewydolność serca, omdlenia, rozwarstwienie aorty)",
                id: "int-osn-omdlenia",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Kardiologia -> Stany nagłe w kardiologii",
                popup: { what: "Неотложная кардиология: obrzęk płuc (отёк лёгких), wstrząs kardiogenny (кардиогенный шок), diagnostyka różnicowa omdleń (дифференциальная диагностика обмороков), rozwarstwienie aorty (расслоение аорты).", focus: "Порядок препаратов при obrzęku płuc (отёк лёгких), признаки опасного omdlenia (обморок), β-bloker до leku rozszerzającego naczynia (вазодилататор) при rozwarstwieniu (расслоение).", reading: "Szczeklik -> Kardiologia -> Ostra niewydolność serca, Omdlenia, Choroby aorty; Wytyczne ESC 2021 (HF), ESC 2018 (omdlenia), ESC 2024 (choroby aorty)." },
                subtopics: [
                    {
                        title: "Ostra niewydolność serca, obrzęk płuc (острая СН и отёк лёгких)",
                        what: "Быстрое появление или нарастание objawów niewydolności serca (симптомы СН), чаще в профиле «ciepły-wilgotny» («тёплый-влажный»; zastój — застой при сохранённой perfuzji — перфузия).",
                        where: "Wytyczne ESC 2021 (niewydolność serca) -> Ostra HF; Szczeklik -> Kardiologia.",
                        study: "Tlen (кислород) при SpO2 <90% или PaO2 <60 mm Hg; wentylacja nieinwazyjna (неинвазивная вентиляция; CPAP/BiPAP) при niewydolności oddechowej (дыхательная недостаточность). Furosemid (фуросемид) i.v.: у ранее не получавших 20–40 mg, у получавших — не меньше суточной пероральной дозы. Azotany (нитраты) i.v. при SBP >110 mm Hg. Искать причину: OZW (ОКС), przełom nadciśnieniowy (гипертонический криз), zaburzenia rytmu (аритмия), механическая причина, ZP (ТЭЛА), zakażenie (инфекция).",
                        focus: "Morfina (морфин) больше не рекомендуется рутинно (ESC 2021), в старых вопросах CEM она входит в схему. Azotany противопоказаны при hipotensji (гипотония) и после inhibitorów PDE-5 (ингибиторы ФДЭ; syldenafil)."
                    },
                    {
                        title: "Wstrząs kardiogenny (кардиогенный шок)",
                        what: "Hipoperfuzja tkanek (гипоперфузия тканей) из-за первичной niewydolności pompy serca (недостаточность насосной функции сердца): SBP <90 mm Hg с признаками hipoperfuzji.",
                        where: "Wytyczne ESC 2021 (niewydolność serca), ESC 2023 (OZW); Szczeklik -> Kardiologia.",
                        study: "Признаки: zimne kończyny (холодные конечности), oliguria (олигурия), zaburzenia świadomości (нарушение сознания), mleczany (лактат) >2 mmol/l. Чаще всего причина — zawał serca (ИМ) с поражением lewej komory (ЛЖ); pilna koronarografia (срочная коронарография) с PCI только tętnicy odpowiedzialnej za zawał (инфаркт-связанная артерия). Noradrenalina (норадреналин) — вазопрессор первого выбора, dobutamina (добутамин) — lek inotropowy (инотроп); rutynowa kontrapulsacja wewnątrzaortalna (рутинная ВАБК, IABP) не рекомендуется, mechaniczne wspomaganie krążenia (механическая поддержка; Impella, ECMO) — у отобранных.",
                        focus: "При wstrząsie w ostrym zawale (шок при остром ИМ) wielonaczyniową PCI (многососудистая PCI) одномоментно не делают (culprit only). Zawał prawej komory (инфаркт ПЖ): wlew płynów (инфузия), без azotanów (нитраты) и diuretyków (диуретики)."
                    },
                    {
                        title: "Omdlenia (обмороки)",
                        what: "Przemijająca utrata przytomności (преходящая потеря сознания) из-за hipoperfuzji mózgu (гипоперфузия мозга): быстрое начало, короткая, со спонтанным полным восстановлением.",
                        where: "Wytyczne ESC 2018 (omdlenia); Szczeklik -> Kardiologia -> Omdlenia.",
                        study: "Классы: odruchowe (рефлекторные; wazowagalne, sytuacyjne, z zatoki szyjnej — вазовагальный, ситуационный, синокаротидный), hipotensja ortostatyczna (ортостатическая гипотензия; leki, hipowolemia, niewydolność autonomiczna — препараты, гиповолемия, вегетативная недостаточность при chorobie Parkinsona (болезнь Паркинсона) и cukrzycy (СД)), kardiogenne (кардиогенные; zaburzenia rytmu, choroby strukturalne — аритмии, структурные). Próba ortostatyczna (ортостатическая проба): падение SBP ≥20 mm Hg или DBP ≥10 mm Hg или SBP <90 в течение 3 min вставания. Masaż zatoki szyjnej (массаж каротидного синуса) у >40 лет: asystolia (асистолия) >3 s и/или падение SBP >50 mm Hg.",
                        focus: "Опасные признаки: omdlenie (обморок) при нагрузке или лёжа, kołatanie serca (сердцебиение) перед omdleniem, nagła śmierć w rodzinie (внезапная смерть в семье), strukturalna choroba serca (структурная болезнь сердца), EKG (zespół Brugadów — Бругада, zespół długiego QT — длинный QT, blok dwuwiązkowy — бифасцикулярная блокада, Mobitz II, preekscytacja — предвозбуждение). Przygryzienie boku języka (прикус языка сбоку) и splątanie ponapadowe (постиктальная спутанность) говорят за napad padaczkowy (эпиприступ)."
                    },
                    {
                        title: "Rozwarstwienie aorty (расслоение аорты)",
                        what: "Rozdarcie błony wewnętrznej (разрыв интимы) с образованием fałszywego kanału (ложный канал); Stanford A — с вовлечением aorty wstępującej (восходящая аорта), B — без неё.",
                        where: "Szczeklik -> Kardiologia -> Choroby aorty; Wytyczne ESC 2024 (choroby aorty i tętnic obwodowych).",
                        study: "Rozdzierający ból (разрывающая боль) с иррадиацией в спину, asymetria tętna lub ciśnienia (асимметрия пульса или АД) на руках >20 mm Hg, nowy szmer niedomykalności aortalnej (новый шум аортальной недостаточности), poszerzenie śródpiersia (расширение средостения). Диагностика: angio-TK (КТ-ангиография) у стабильного; TEE/echo przyłóżkowe (прикроватное эхо) у нестабильного. Контроль: HR ≤60/min и SBP 100–120 mm Hg, сначала β-bloker i.v. (esmolol, labetalol, metoprolol), затем lek rozszerzający naczynia (вазодилататор; urapidyl, nitroprusydek sodu), leczenie przeciwbólowe opioidem (обезболивание опиоидом). Typ A — pilna operacja (экстренная операция); typ B — farmakologicznie (медикаментозно), TEVAR при powikłaniach (осложнения).",
                        focus: "Lek rozszerzający naczynia (вазодилататор) без β-blokera вызывает odruchową tachykardię (рефлекторная тахикардия) и progresję rozwarstwienia (прогрессия расслоения). Tromboliza (тромболизис) и leki przeciwpłytkowe (антиагреганты) противопоказаны; rozwarstwienie typu A может дать нижний STEMI (вовлечение RCA — ПКА)."
                    }
                ]
            },
            {
                title: "Пт: BLS/ALS, брадикардия, шок, анафилаксия (Resuscytacja, bradykardia, wstrząs, anafilaksja)",
                id: "int-als",
                time: "3.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Stany nagłe -> Resuscytacja krążeniowo-oddechowa",
                popup: { what: "Алгоритмы ERC 2025 для взрослых, algorytm bradykardii (алгоритм брадикардии), 4 типа wstrząsu (шок), неотложная помощь при anafilaksji (анафилаксия).", focus: "Когда давать adrenalinę (адреналин) и amiodaron (амиодарон) в алгоритме ALS, 4H4T, доза и droga podania (путь введения) adrenaliny при anafilaksji.", reading: "Wytyczne ERC 2025 (BLS, ALS, sytuacje szczególne); Szczeklik -> Stany nagłe -> Wstrząs, Anafilaksja." },
                subtopics: [
                    {
                        title: "Podstawowe zabiegi resuscytacyjne u dorosłych — BLS (базовая реанимация взрослых)",
                        what: "Базовая реанимация с использованием AED до прибытия бригады.",
                        where: "Wytyczne ERC 2025 -> Podstawowe zabiegi resuscytacyjne u dorosłych.",
                        study: "Bezpieczeństwo (безопасность), ocena reakcji (проверка реакции), udrożnienie dróg oddechowych (открытие дыхательных путей), ocena oddechu (оценка дыхания) до 10 s; нет нормального дыхания — вызов 112 и AED. Uciśnięcia klatki piersiowej (компрессии) 30:2, глубина 5–6 cm, частота 100–120/min, полная декомпрессия, минимальные перерывы. AED включается сразу по прибытии, uciśnięcia возобновляются сразу после wyładowania (разряд).",
                        focus: "Oddech agonalny (агональное дыхание; редкие вздохи) — признак zatrzymania krążenia (остановка кровообращения), а не дыхания. Непрофессионал не проверяет tętna (пульс)."
                    },
                    {
                        title: "ALS: rytmy do defibrylacji — VF/pVT (дефибриллируемые ритмы)",
                        what: "Migotanie komór (фибрилляция желудочков, VF) и częstoskurcz komorowy bez tętna (VT без пульса).",
                        where: "Wytyczne ERC 2025 -> Zaawansowane zabiegi resuscytacyjne (ALS).",
                        study: "Wyładowanie (разряд; dwufazowe — двухфазный, первый ≥150 J), сразу 2 min RKO (СЛР), ocena rytmu (оценка ритма). Adrenalina (адреналин) 1 mg i.v. (ERC 2025 предпочитает dostęp dożylny — внутривенный доступ; doszpikowy — внутрикостный, если i.v. не удалось получить за 2 попытки) после 3-го wyładowania, далее каждые 3–5 min; amiodaron (амиодарон) 300 mg после 3-го разряда и 150 mg после 5-го (альтернатива — lidokaina 100 mg и 50 mg). Uporczywe VF (стойкая ФЖ) после 3 разрядов — рассмотреть zmianę położenia elektrod (смена положения электродов; przednio-tylne — передне-задняя). Zatrzymanie krążenia przy świadkach na monitorze (свидетельствованная остановка на мониторе) с defibrylatorem (дефибриллятор) под рукой — до 3 разрядов подряд.",
                        focus: "Adrenalina и amiodaron — после 3-го wyładowania (разряд), не после 1-го. Изменений в ALS по сравнению с ERC 2021 практически нет, так что старые вопросы CEM по дозам остаются актуальными."
                    },
                    {
                        title: "ALS: rytmy nie do defibrylacji i 4H4T — asystolia, PEA, odwracalne przyczyny (недефибриллируемые ритмы)",
                        what: "Asystolia (асистолия) и aktywność elektryczna bez tętna (электрическая активность без пульса, PEA) и odwracalne przyczyny (обратимые причины) остановки.",
                        where: "Wytyczne ERC 2025 -> ALS -> Odwracalne przyczyny.",
                        study: "Adrenalina (адреналин) 1 mg как можно скорее, далее каждые 3–5 min; rytm (ритм) оценивается каждые 2 min. 4H: hipoksja, hipowolemia, hipo-/hiperkaliemia i zaburzenia metaboliczne (гипоксия, гиповолемия, гипо-/гиперкалиемия и метаболические), hipo-/hipertermia; 4T: zakrzepica (тромбоз; wieńcowa, ZP — коронарный, ТЭЛА), odma prężna (напряжённый пневмоторакс), tamponada (тампонада), toksyny (токсины). После trombolizy (тромболизис) при ZP продолжать RKO (СЛР) 60–90 min.",
                        focus: "Asystolii (асистолия) не дефибриллируют; atropina (атропин) из алгоритма остановки убрана с 2010 г. PEA — всегда поиск odwracalnej przyczyny (обратимая причина; USG przyłóżkowe — прикроватное УЗИ: tamponada, odma, ZP)."
                    },
                    {
                        title: "Wstrząs hipowolemiczny, dystrybucyjny, kardiogenny, obturacyjny (типы шока)",
                        what: "Ostra niewydolność krążenia (острая недостаточность кровообращения) с niedotlenieniem tkanek (тканевая гипоксия); 4 патофизиологических типа.",
                        where: "Szczeklik -> Stany nagłe -> Wstrząs.",
                        study: "Hipowolemiczny (гиповолемический; krwotok — кровотечение, utrata płynów — потеря жидкости): OCŻ (ЦВД) низкое, rzut serca (выброс) низкий, opór obwodowy (ОПСС) высокое. Dystrybucyjny (дистрибутивный; septyczny, anafilaktyczny, neurogenny — септический, анафилактический, нейрогенный): opór obwodowy низкое, rzut serca нормальный/высокий, ciepła skóra (тёплые кожные покровы); neurogenny — с bradykardią (брадикардия). Kardiogenny (кардиогенный): OCŻ и ciśnienie zaklinowania (давление заклинивания) высокие, rzut serca низкий. Obturacyjny (обструктивный; ZP, tamponada, odma prężna): OCŻ высокое, rzut serca низкий. Wskaźnik wstrząsowy (шоковый индекс) HR/SBP >1 — тревожный признак.",
                        focus: "Лечение по механизму: при urazie z krwotokiem (травма с кровотечением) — tamowanie krwawienia (остановка кровотечения), preparaty krwi (препараты крови) и permisywna hipotensja (допустимая гипотензия; SBP 80–90 без urazu czaszkowo-mózgowego — ЧМТ); при obturacyjnym — устранение причины (drenaż, perikardiocenteza, tromboliza — дренаж, перикардиоцентез, тромболизис), а не только wlew płynów (инфузия)."
                    },
                    {
                        title: "Anafilaksja (анафилаксия)",
                        what: "Ciężka, zagrażająca życiu uogólniona reakcja nadwrażliwości (тяжёлая жизнеугрожающая генерализованная реакция гиперчувствительности) с поражением dróg oddechowych, oddychania lub krążenia (дыхательные пути, дыхание или кровообращение).",
                        where: "Wytyczne ERC 2025 -> Sytuacje szczególne -> Anafilaksja; Szczeklik -> Alergologia.",
                        study: "Adrenalina (адреналин) 1 mg/ml i.m. в przednio-boczną powierzchnię uda (передне-боковая поверхность бедра): взрослые и дети >12 лет 0.5 mg, 6–12 лет 0.3 mg, <6 лет 0.15 mg; повтор через 5 min при отсутствии эффекта. Положение лёжа с поднятыми ногами (при duszności — одышка — сидя), O2, bolus krystaloidów (болюс кристаллоидов) 500–1000 ml у взрослых. Oporna (рефрактерная) — wlew adrenaliny i.v. (инфузия адреналина); у принимающих β-blokery — glukagon (глюкагон). Tryptaza (триптаза): как можно скорее после начала, через 1–2 h и исходная через 24 h.",
                        focus: "Первый и единственный спасающий препарат — adrenalina i.m.; leki przeciwhistaminowe (антигистаминные) и GKS (ГКС) — вторая линия, не заменяют adrenaliny и не задерживают её. Bolus adrenaliny i.v. (болюс) — только при zatrzymaniu krążenia (остановка кровообращения) или у опытного персонала с мониторингом."
                    },
                    {
                        title: "Bradykardia — algorytm ERC (брадикардия: алгоритм ERC)",
                        what: "Bradykardia okołozatrzymaniowa (периостановочная брадикардия): тактика зависит от признаков угрозы и риска asystolii (асистолия).",
                        where: "Wytyczne ERC 2025 -> ALS -> Zaburzenia rytmu w okresie okołozatrzymaniowym; Szczeklik -> Kardiologia -> Bradyarytmie.",
                        study: "Признаки угрозы: wstrząs (шок), omdlenie (обморок), niedokrwienie mięśnia sercowego (ишемия миокарда), ciężka niewydolność serca (тяжёлая СН). При них — atropina (атропин) 500 µg i.v., при необходимости повтор каждые 3–5 min до 3 mg; при неэффективности — izoprenalina 5 µg/min или adrenalina 2–10 µg/min i.v., stymulacja przezskórna (чрескожная стимуляция) как мост к stymulacji przezżylnej (трансвенозная); альтернативы — aminofilina (аминофиллин; zawał ściany dolnej — нижний ИМ, после przeszczepienia serca — трансплантации сердца), glukagon (przedawkowanie β-blokera lub antagonisty wapnia — передозировка β-блокатора или блокатора кальциевых каналов). Риск asystolii даже при ответе на atropinę: недавняя asystolia, Mobitz II, całkowity blok przedsionkowo-komorowy (полная АВ-блокада) с szerokim QRS (широкий QRS), pauza komorowa (пауза желудочков) >3 s — нужна stymulacja (стимуляция).",
                        focus: "Atropiny не дают после przeszczepienia serca (денервация, возможна парадоксальная блокада), и она малоэффективна при bloku poniżej węzła AV (блокада ниже АВ-узла; szeroki QRS). Доза atropiny при bradykardii по ERC — 500 µg (в вопросах по AHA — 1 mg); при zatrzymaniu krążenia (остановка кровообращения) atropinę не применяют."
                    }
                ]
            },
            {
                title: "Сб: Тест по кардиологии II и неотложным состояниям",
                id: "int-6-test",
                time: "1.5 ч",
                lepolekPath: "Testy -> Kardiologia i stany nagłe (40 pytań CEM)",
                popup: { what: "Контрольный тест недели: zaburzenia rytmu (аритмии), wady zastawkowe (пороки), IZW (ИЭ), choroby osierdzia (перикард), wstrząs (шок), resuscytacja (реанимация).", focus: "Алгоритмы с порядком действий — ALS, częstoskurcze (тахикардии), anafilaksja (анафилаксия).", reading: "Собственный конспект недели и Zeszyt Błędów." },
                subtopics: [
                    {
                        title: "Rozwiązanie 40 pytań CEM (решение вопросов CEM)",
                        what: "Тест по темам недели в режиме экзамена (около 1.5 min на вопрос).",
                        where: "LEPOLEK -> Testy -> Kardiologia.",
                        study: "Tachyarytmie (тахиаритмии) и EKG, wady zastawkowe (пороки клапанов) и IZW (ИЭ), kardiomiopatie (кардиомиопатии) и choroby osierdzia (перикард), ostra niewydolność serca (острая СН) и rozwarstwienie aorty (расслоение), ALS и anafilaksja (анафилаксия).",
                        focus: "Отмечать вопросы, где ответ зависит от года рекомендаций (TAVI 75/70 лет, empiryczna terapia IZW — эмпирическая терапия ИЭ, morfina (морфин) при obrzęku płuc — отёк лёгких)."
                    },
                    {
                        title: "Analiza błędów w algorytmach (разбор ошибок по алгоритмам)",
                        what: "Разбор неверных ответов с привязкой к шагу алгоритма, на котором ошибка.",
                        where: "Объяснения LEPOLEK, Wytyczne ERC 2025, ESC 2023 (IZW).",
                        study: "Для каждой ошибки записать: какой шаг алгоритма пропущен или переставлен (например, amiodaron (амиодарон) после 1-го wyładowania (разряд) вместо 3-го).",
                        focus: "Частые ловушки: adenozyna (аденозин) при AF z WPW (ФП с WPW), amiodaron при torsade, lek rozszerzający naczynia (вазодилататор) до β-blokera при rozwarstwieniu (расслоение), lek przeciwhistaminowy (антигистаминный препарат) вместо adrenaliny (адреналин)."
                    },
                    {
                        title: "Liczby tygodnia — utrwalenie (закрепление чисел недели)",
                        what: "Сводная карточка dawek (дозы) и progów (пороги) для Anki.",
                        where: "Личные заметки.",
                        study: "Adenozyna 6–12 mg; amiodaron 300/150 mg; adrenalina 1 mg каждые 3–5 min и 0.5 mg i.m. при anafilaksji; MgSO4 2 g; kolchicyna 0.5 mg 2 раза ≥3–6 месяцев (ESC 2025; 3 месяца — ESC 2015); atropina 500 µg до 3 mg при bradykardii; ciężka stenoza aortalna (тяжёлый АС): <1.0 cm², ≥4 m/s, ≥40 mm Hg; ciężka stenoza mitralna (тяжёлый МС) ≤1.5 cm²; HR ≤60 и SBP 100–120 при rozwarstwieniu aorty.",
                        focus: "Проверить себя на progi kryteriów Duke (пороги; 2 duże / 1+3 / 5 małych — больших/малых) и próby ortostatycznej (ортостатическая проба; 20/10 mm Hg за 3 min)."
                    }
                ]
            }
        ]
    },
    {
        key: "int-7",
        subject: "interna",
        title: "Терапия VII — Пульмонология II, инфекции, токсикология",
        days: [
            {
                title: "Пн: Туберкулёз, грипп, COVID-19, госпитальная пневмония, вакцинации взрослых (Gruźlica, grypa, SZP, szczepienia dorosłych)",
                id: "int-gruzlica",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Pulmonologia -> Gruźlica i zakażenia układu oddechowego",
                popup: { what: "Diagnostyka i leczenie gruźlicy (туберкулёз), utajone zakażenie (латентная инфекция), leczenie przeciwwirusowe grypy (противовирусное лечение гриппа) и COVID-19, szpitalne zapalenie płuc (госпитальная пневмония).", focus: "Działania niepożądane leków przeciwprątkowych (побочные эффекты противотуберкулёзных препаратов), чего не умеют IGRA и odczyn tuberkulinowy (проба Манту), сроки oseltamiwiru (осельтамивир).", reading: "Szczeklik -> Pulmonologia -> Gruźlica; Szczeklik -> Choroby zakaźne -> Grypa; LEK w pigułce -> Pulmonologia." },
                subtopics: [
                    {
                        title: "Gruźlica płuc — diagnostyka (диагностика туберкулёза лёгких)",
                        what: "Zakażenie Mycobacterium tuberculosis (инфекция); диагноз подтверждается выявлением prątków (микобактерии) в материале.",
                        where: "Szczeklik -> Pulmonologia -> Gruźlica.",
                        study: "Bakterioskopia metodą Ziehla-Neelsena (микроскопия по Цилю-Нильсену; prątki kwasooporne — кислотоустойчивые палочки) — быстро, но малочувствительно; posiew (посев) — золотой стандарт (podłoże stałe Löwensteina-Jensena — твёрдая среда, 4–8 недель; podłoże płynne MGIT — жидкая среда, около 2 недель). GeneXpert MTB/RIF — PCR (ПЦР) за ~2 h, выявляет prątki (МБТ) и oporność na ryfampicynę (устойчивость к рифампицину; rpoB). RTG (рентген): nacieki (инфильтраты) и jamy (каверны) в płatach górnych (верхние доли).",
                        focus: "IGRA (QuantiFERON) и odczyn tuberkulinowy (проба Манту) выявляют инфицирование, но НЕ отличают utajonego zakażenia (латентная инфекция) от aktywnej gruźlicy (активный ТБ) и не исключают её при отрицательном результате. IGRA не зависит от szczepienia BCG (прививка BCG), которую в Польше делают всем новорождённым."
                    },
                    {
                        title: "Leczenie gruźlicy — schemat 2HRZE/4HR (лечение ТБ и побочные эффекты)",
                        what: "Стандартная 6-месячная схема для gruźlicy lekowrażliwej (лекарственно-чувствительный ТБ).",
                        where: "Szczeklik -> Pulmonologia -> Gruźlica -> Leczenie.",
                        study: "2 месяца izoniazyd + ryfampicyna + pirazynamid + etambutol, затем 4 месяца izoniazyd + ryfampicyna, под непосредственным контролем приёма (DOT). Izoniazyd (изониазид) — neuropatia obwodowa (периферическая нейропатия; профилактика pirydoksyną — пиридоксин, B6), hepatotoksyczność (гепатотоксичность); ryfampicyna (рифампицин) — pomarańczowe zabarwienie moczu i łez (оранжевая окраска мочи и слёз), indukcja CYP450 (индукция; снижает эффект doustnej antykoncepcji — оральные контрацептивы, warfaryny — варфарин); pirazynamid (пиразинамид) — hiperurykemia i dna moczanowa (гиперурикемия и подагра), hepatotoksyczność; etambutol (этамбутол) — zapalenie nerwu wzrokowego (неврит зрительного нерва; zaburzenia widzenia barw czerwony-zielony — нарушение цветоощущения красный-зелёный), нужен исходный осмотр okulisty (окулист).",
                        focus: "CEM спрашивает пары «lek — działanie niepożądane» («препарат — побочный эффект»). MDR-TB — oporność (устойчивость) как минимум к izoniazydowi и ryfampicynie; monoterapia aktywnej gruźlicy (монотерапия активного ТБ) недопустима."
                    },
                    {
                        title: "Utajone zakażenie prątkiem gruźlicy (латентная туберкулёзная инфекция)",
                        what: "Положительный IGRA или odczyn tuberkulinowy (проба Манту) без клинических и рентгенологических признаков aktywnej gruźlicy (активный ТБ).",
                        where: "Szczeklik -> Pulmonologia -> Gruźlica -> Utajone zakażenie.",
                        study: "Перед лечением исключить aktywną gruźlicę (RTG klatki piersiowej — рентген грудной клетки, при симптомах — plwocina — мокрота). Схемы: izoniazyd 6–9 месяцев, ryfampicyna 4 месяца, izoniazyd + ryfampicyna 3 месяца. Кого обследовать и лечить: перед anty-TNF и другими lekami biologicznymi (биологические препараты), HIV (ВИЧ), osoby z kontaktu (контактные), перед przeszczepieniem (трансплантация), dializa (диализ).",
                        focus: "Перед anty-TNF лечение utajonego zakażenia (латентная инфекция) начинают до leku biologicznego (биологический препарат; обычно за ≥1 месяц; сверить с актуальными рекомендациями). Если не исключена aktywna gruźlica (активный ТБ), лечение латентной формы одним препаратом ошибочно."
                    },
                    {
                        title: "Grypa, COVID-19 (грипп и COVID-19)",
                        what: "Ostre zakażenia wirusowe dróg oddechowych (острые вирусные инфекции дыхательных путей) с риском zapalenia płuc (пневмония) и тяжёлого течения у групп риска.",
                        where: "Szczeklik -> Choroby zakaźne -> Grypa; Zalecenia PTEiLChZ (COVID-19).",
                        study: "Grypa (грипп): внезапное начало с высокой gorączką (лихорадка) и bólami mięśni (миалгии); диагностика — RT-PCR или szybkie testy antygenowe (быстрые антигенные тесты). Oseltamiwir (осельтамивир) 75 mg 2 раза в день 5 дней, лучше в первые 48 h; у госпитализированных и групп риска — независимо от времени от начала. COVID-19: nirmatrelwir/rytonawir (нирматрелвир/ритонавир) в первые 5 дней у амбулаторных с риском тяжёлого течения (много interakcji — взаимодействий — через CYP3A4); deksametazon (дексаметазон) 6 mg 10 дней — только при потребности в tlenie (кислород).",
                        focus: "Powikłanie grypy (осложнение гриппа) — wtórne bakteryjne zapalenie płuc (вторичная бактериальная пневмония; S. aureus, S. pneumoniae). Deksametazon у пациента с COVID-19 без hipoksemii (гипоксемия) не показан (ухудшает исход)."
                    },
                    {
                        title: "Szpitalne zapalenie płuc (госпитальная пневмония)",
                        what: "Zapalenie płuc (пневмония), возникшее ≥48 h после przyjęcia do szpitala (госпитализация; не в инкубационном периоде); VAP — respiratorowe zapalenie płuc (ИВЛ-ассоциированная пневмония) — ≥48 h после intubacji (интубация).",
                        where: "Szczeklik -> Pulmonologia -> Zapalenia płuc -> Szpitalne zapalenie płuc.",
                        study: "Ранняя без факторов риска MDR — S. pneumoniae, H. influenzae, MSSA; поздняя или с факторами риска (antybiotyki (антибиотики) в последние 90 дней, wentylacja mechaniczna (ИВЛ), wstrząs septyczny (септический шок)) — P. aeruginosa, MRSA, Klebsiella ESBL, Acinetobacter. Эмпирически: β-laktam działający na Pseudomonas (антисинегнойный β-лактам; piperacylina/tazobaktam, cefepim, meropenem) ± wankomycyna (ванкомицин) или linezolid при риске MRSA. Длительность обычно 7 дней, коррекция по posiewom (посевы).",
                        focus: "Схема для pozaszpitalnego zapalenia płuc (внебольничная пневмония; amoksycylina) не покрывает госпитальную флору. Перед antybiotykiem — posiewy krwi (посевы крови) и materiału z dróg oddechowych (материал из дыхательных путей)."
                    },
                    {
                        title: "Szczepienia dorosłych (вакцинации взрослых)",
                        what: "Рекомендуемые szczepienia (прививки) у взрослых и в группах риска (часть PSO «szczepienia zalecane»).",
                        where: "Program Szczepień Ochronnych (Komunikat GIS) -> Szczepienia zalecane; Szczeklik -> Choroby zakaźne -> Szczepienia ochronne.",
                        study: "Grypa (грипп) — ежегодно, особенно ≥65 лет, хронически больным, kobietom w ciąży (беременные; szczepionka inaktywowana — инактивированная вакцина — в любом trymestrze), personelowi medycznemu (медперсонал). Pneumokoki (пневококк): ≥65 лет и группы риска (asplenia — аспления, PChN (ХБП), immunosupresja (иммуносупрессия), przewlekłe choroby serca i płuc (хронические болезни сердца и лёгких), palenie tytoniu (курение)) — PCV20 однократно (или PCV15 + PPSV23). Tężec i błonica (столбняк и дифтерия): dawka przypominająca (бустер) Td каждые 10 лет; Tdap в каждой ciąży (беременность; 27–36 неделя) для защиты noworodka (новорождённый) от krztuśca (коклюш). WZW B (HBV): 3 dawki (дозы; 0–1–6 мес) — personel medyczny, dializowani (диализ) и PChN, cukrzyca (диабет), перед плановыми операциями; у персонала контроль anty-HBs ≥10 mIU/ml (мМЕ/мл). Półpasiec (опоясывающий лишай): szczepionka rekombinowana (рекомбинантная вакцина; 2 dawki) у ≥50 лет и при immunosupresji. RSV — ≥60 лет. Szczepionki żywe (живые вакцины; MMR, ospa wietrzna — ветряная оспа, żółta gorączka — жёлтая лихорадка) противопоказаны при immunosupresji и ciąży. Бесплатные группы и возмещение в Польше меняются (сверить с актуальной версией программы).",
                        focus: "Перед плановой splenektomią (спленэктомия) szczepienie przeciw pneumokokom, meningokokom i Hib (вакцинация против пневококка, менингококка и Hib) — за ≥2 недели до операции. Inaktywowana szczepionka przeciw grypie (инактивированная вакцина от гриппа) в ciąży безопасна; żywa donosowa (живая назальная) — нет."
                    }
                ]
            },
            {
                title: "Вт: ИЗЛ, саркоидоз, пневмоторакс, ОАС, плевральный выпот (Choroby śródmiąższowe, odma, płyn w opłucnej)",
                id: "int-srodmiazszowe",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Pulmonologia -> Choroby śródmiąższowe płuc i opłucnej",
                popup: { what: "Idiopatyczne włóknienie płuc (идиопатический лёгочный фиброз), sarkoidoza (саркоидоз), odma opłucnowa (пневмоторакс), obturacyjny bezdech podczas snu (обструктивное апноэ сна), różnicowanie płynu w jamie opłucnej (дифференциация плеврального выпота).", focus: "Zespół Löfgrena (синдром Лёфгрена), тактика при odmie (пневмоторакс) по размеру и типу, все 3 kryteria Lighta (критерии Лайта).", reading: "Szczeklik -> Pulmonologia -> Choroby śródmiąższowe, Choroby opłucnej, Zaburzenia oddychania w czasie snu; Wytyczne BTS 2023 (odma)." },
                subtopics: [
                    {
                        title: "Idiopatyczne włóknienie płuc — IPF (идиопатический лёгочный фиброз)",
                        what: "Przewlekłe, postępujące, włókniejące śródmiąższowe zapalenie płuc (хроническая прогрессирующая фиброзирующая интерстициальная пневмония) неизвестной причины с wzorcem UIP (паттерн UIP).",
                        where: "Szczeklik -> Pulmonologia -> Choroby śródmiąższowe płuc -> IPF.",
                        study: "Мужчины >60 лет, palacze (курильщики); postępująca duszność (прогрессирующая одышка), suchy kaszel (сухой кашель), trzeszczenia u podstawy płuc (базальная крепитация; «velcro»), palce pałeczkowate (пальцы-барабанные палочки). HRCT: podopłucnowe przypodstawne zmiany siateczkowate (субплевральные базальные ретикулярные изменения), «plaster miodu» («сотовое лёгкое»), rozstrzenie oskrzeli z pociągania (тракционные бронхоэктазы). Spirometria (спирометрия) — restrykcja (рестрикция; FVC снижена, FEV1/FVC нормальный или повышен), DLCO снижена. Лечение: nintedanib или pirfenidon (нинтеданиб или пирфенидон) замедляют снижение FVC (в Польше — program lekowy, программа лекарственного обеспечения), przeszczepienie płuc (трансплантация лёгких).",
                        focus: "GKS (ГКС) при IPF НЕ применяют (исследование PANTHER — вред). Отличие от alergicznego zapalenia pęcherzyków płucnych (гиперчувствительный пневмонит): ekspozycja (экспозиция; ptaki, siano — птицы, сено), płaty górne/środkowe (верхние/средние доли), limfocytoza w BAL (лимфоцитоз в БАЛ)."
                    },
                    {
                        title: "Sarkoidoza (саркоидоз)",
                        what: "Układowa choroba ziarniniakowa (системное гранулематозное заболевание) с nieserowaciejącymi ziarniniakami (неказеифицирующиеся гранулёмы), чаще у лиц 20–40 лет.",
                        where: "Szczeklik -> Pulmonologia -> Sarkoidoza.",
                        study: "Zespół Löfgrena (синдром Лёфгрена): rumień guzowaty (узловатая эритема) + obustronne powiększenie węzłów chłonnych wnęk (двусторонняя лимфаденопатия корней) + zapalenie stawów skokowych (артрит голеностопных суставов) ± gorączka (лихорадка); хороший прогноз, частая samoistna remisja (спонтанная ремиссия). Stadia radiologiczne (рентгенологические стадии): 0 — норма, I — только węzły chłonne (лимфоузлы), II — węzły chłonne + miąższ (паренхима), III — только miąższ, IV — włóknienie (фиброз). ACE (АПФ) повышен (неспецифично), hiperkalcemia и hiperkalciuria (гиперкальциемия и гиперкальциурия; kalcytriol z ziarniniaków — кальцитриол из гранулём), в BAL CD4/CD8 >3.5.",
                        focus: "Типичный zespół Löfgrena не требует biopsji (биопсия); ACE не является диагностическим тестом. GKS (ГКС) — при zajęciu serca, oczu, OUN (поражение сердца, глаз, ЦНС), hiperkalcemii или progresji postaci płucnej (прогрессия лёгочной формы); stadium I bez objawów (I стадия без симптомов) — obserwacja (наблюдение)."
                    },
                    {
                        title: "Odma opłucnowa (пневмоторакс)",
                        what: "Powietrze w jamie opłucnej (воздух в плевральной полости): samoistna pierwotna (первичный спонтанный; без болезни лёгких), wtórna (вторичный; POChP, mukowiscydoza), prężna (напряжённый).",
                        where: "Szczeklik -> Pulmonologia -> Odma opłucnowa; Wytyczne BTS 2023.",
                        study: "Pierwotna (первичный): высокие худые молодые мужчины, palacze (курильщики). По BTS 2010 (основа большинства вопросов CEM): «duża» («большой») — ≥2 cm на уровне wnęki (корень лёгкого); pierwotna <2 cm bez duszności (без одышки) — obserwacja (наблюдение), ≥2 cm или duszność — aspiracja igłowa (аспирация иглой) 16–18G, при неудаче — drenaż (дренаж); wtórna >2 cm или duszność — drenaż, 1–2 cm — aspiracja, <1 cm — hospitalizacja (госпитализация) и O2. BTS 2023 решает по objawom (симптомы), а не по размеру (bezobjawowa pierwotna — бессимптомный первичный — консервативно). Profilaktyka nawrotu (профилактика рецидива; VATS, pleurodeza — плевродез): второй эпизод, obustronna (двусторонний), профессии pilot/nurek (пилот/водолаз).",
                        focus: "Odma prężna (напряжённый пневмоторакс) — клинический диагноз (hipotensja — гипотония, przesunięcie tchawicy (смещение трахеи) в здоровую сторону, brak szmeru oddechowego (отсутствие дыхания), poszerzone żyły szyjne (набухшие шейные вены)): natychmiastowe odbarczenie igłowe (немедленная декомпрессия иглой) без ожидания RTG: у взрослых — 4–5-е międzyżebrze (межреберье) кпереди od linii pachowej środkowej (средняя подмышечная линия; ATLS 10); 2-е międzyżebrze w linii środkowoobojczykowej (среднеключичная линия) — у детей и в вопросах CEM прошлых лет."
                    },
                    {
                        title: "Obturacyjny bezdech podczas snu — OBPS (обструктивное апноэ сна)",
                        what: "Повторные эпизоды obturacji górnych dróg oddechowych (обструкция верхних дыхательных путей) во сне с desaturacją (десатурация) и fragmentacją snu (фрагментация сна).",
                        where: "Szczeklik -> Pulmonologia -> Zaburzenia oddychania w czasie snu.",
                        study: "AHI: 5–14 łagodny (лёгкая), 15–29 umiarkowany (умеренная), ≥30 ciężki (тяжёлая). Скрининг — skala senności Epworth (шкала Эпворта; >10 — патологическая сонливость), STOP-Bang; диагностика — polisomnografia (полисомнография; золотой стандарт) или poligrafia (полиграфия). Лечение: redukcja masy ciała (снижение массы), отказ от алкоголя и leków nasennych (седативные), terapia pozycyjna (позиционная терапия); CPAP — первая линия при postaci umiarkowanej i ciężkiej (умеренная и тяжёлая форма); aparat wewnątrzustny (внутриротовой аппарат) — при postaci łagodnej/umiarkowanej.",
                        focus: "OBPS (ОАС) — частая причина nadciśnienia opornego (резистентная АГ) и AF (ФП); benzodiazepiny (бензодиазепины) для лечения bezsenności (бессонница) у таких пациентов ухудшают bezdech (апноэ)."
                    },
                    {
                        title: "Płyn w jamie opłucnej — kryteria Lighta (плевральный выпот: критерии Лайта)",
                        what: "Разделение płynu (выпот) на przesięk (транссудат) и wysięk (экссудат) по соотношению białka i LDH (белок и ЛДГ).",
                        where: "Szczeklik -> Pulmonologia -> Choroby opłucnej -> Płyn w jamie opłucnej.",
                        study: "Wysięk (экссудат), если выполнен ХОТЯ БЫ ОДИН критерий: białko płyn/surowica (белок плевральный/сывороточный) >0.5; LDH płyn/surowica >0.6; LDH w płynie >2/3 górnej granicy normy (верхняя граница нормы) LDH w surowicy. Przesięk (транссудат): niewydolność serca (СН; самая частая причина), marskość wątroby (цирроз), zespół nerczycowy (нефротический синдром). Wysięk: parapneumoniczny (парапневмонический), nowotworowy (опухолевый), gruźliczy (ТБ; limfocyty, wysoka aktywność deaminazy adenozyny — лимфоциты, высокая аденозиндезаминаза), ZP (ТЭЛА), RZS (РА; bardzo niska glukoza — очень низкая глюкоза). Powikłany wysięk parapneumoniczny/ropniak opłucnej (осложнённый парапневмонический выпот/эмпиема; pH <7.2, ropa — гной) — drenaż (дренаж).",
                        focus: "У пациента с niewydolnością serca (СН) после diuretyków (диуретики) kryteria Lighta могут ложно показать wysięk — тогда gradient albumin surowica−płyn (градиент альбумина сыворотка−выпот) >1.2 g/dl подтверждает przesięk. Obustronny płyn (двусторонний выпот) при явной niewydolności serca не пунктируют, если картина типична."
                    }
                ]
            },
            {
                title: "Ср: Газометрия и КОС (Gazometria, równowaga kwasowo-zasadowa)",
                id: "int-gazometria",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Nefrologia -> Zaburzenia równowagi kwasowo-zasadowej",
                popup: { what: "Пошаговое чтение gazometrii (газометрия), niewydolność oddechowa (дыхательная недостаточность), kwasice i zasadowice metaboliczne (метаболические ацидозы и алкалозы), kompensacja (компенсация).", focus: "Luka anionowa (анионный интервал) и её причины, wzór Wintera (формула Винтера), отличие zasadowicy chlorkowrażliwej (хлорчувствительный алкалоз).", reading: "Szczeklik -> Nefrologia -> Zaburzenia gospodarki kwasowo-zasadowej; Szczeklik -> Pulmonologia -> Niewydolność oddechowa." },
                subtopics: [
                    {
                        title: "Gazometria krwi tętniczej — interpretacja (пошаговая интерпретация газометрии)",
                        what: "Алгоритм определения pierwotnego zaburzenia równowagi kwasowo-zasadowej (первичное нарушение КОС) и адекватности kompensacji (компенсация).",
                        where: "Szczeklik -> Nefrologia -> Zaburzenia gospodarki kwasowo-zasadowej.",
                        study: "Норма: pH 7.35–7.45, PaCO2 35–45 mm Hg, HCO3− 22–26 mmol/l, BE ±2. Шаги: 1) pH — acydemia (ацидемия) или alkalemia (алкалемия); 2) pierwotne zaburzenie (первичное нарушение) — меняется ли в ту же сторону PaCO2 (oddechowe — дыхательное) или HCO3− (metaboliczne — метаболическое); 3) адекватна ли kompensacja; 4) при kwasicy metabolicznej (метаболический ацидоз) — luka anionowa (анионный интервал); 5) współczynnik delta (дельта-соотношение) для выявления zaburzeń mieszanych (смешанные нарушения); 6) клиника.",
                        focus: "Kompensacja (компенсация) никогда не возвращает pH полностью к норме: нормальный pH при патологических PaCO2 и HCO3− означает zaburzenie mieszane (смешанное нарушение)."
                    },
                    {
                        title: "Niewydolność oddechowa hipoksemiczna i hiperkapniczna (дыхательная недостаточность I и II типа)",
                        what: "Typ I — PaO2 <60 mm Hg при нормальном или сниженном PaCO2; typ II — PaCO2 >45 mm Hg (hipowentylacja — гиповентиляция).",
                        where: "Szczeklik -> Pulmonologia -> Niewydolność oddechowa.",
                        study: "Typ I: zapalenie płuc (пневмония), ARDS, obrzęk płuc (отёк лёгких), ZP (ТЭЛА) — gradient pęcherzykowo-tętniczy (градиент A-a) повышен. Typ II: zaostrzenie POChP (обострение ХОБЛ), choroby nerwowo-mięśniowe (нервно-мышечные болезни), opioidy (опиоиды), zespół otyłości i hipowentylacji (синдром ожирения-гиповентиляции) — при чистой hipowentylacji gradient A-a нормален. Ostra kwasica oddechowa (острый дыхательный ацидоз): HCO3− растёт на ~1 mmol/l на каждые 10 mm Hg PaCO2, przewlekła (хронический) — на ~3.5 mmol/l. POChP z hiperkapnią (с гиперкапнией): docelowa SpO2 (целевая) 88–92%, NIV при pH <7.35 и PaCO2 >45 mm Hg.",
                        focus: "Nadmiar tlenu (избыток кислорода) у хронического гиперкапнического больного углубляет hiperkapnię (гиперкапния); у остальных цель SpO2 94–98%. Высокий HCO3− при повышенном PaCO2 указывает на przewlekłą hiperkapnię (хроническая гиперкапния)."
                    },
                    {
                        title: "Kwasica metaboliczna z luką anionową i bez (метаболический ацидоз и анионный интервал)",
                        what: "Первичное снижение HCO3−; делится по luce anionowej (анионный интервал) AG = Na+ − (Cl− + HCO3−).",
                        where: "Szczeklik -> Nefrologia -> Kwasica metaboliczna.",
                        study: "Норма AG около 12 ± 4 mmol/l (зависит от анализатора); при hipoalbuminemii (гипоальбуминемия) AG снижается на ~2.5 на каждый 1 g/dl albuminy (альбумин) ниже 4. Высокий AG: kwasica ketonowa (кетоацидоз; cukrzycowa, alkoholowa, głodowa — диабетический, алкогольный, голодовый), kwasica mleczanowa (лактатацидоз), mocznica (уремия), metanol (метанол), glikol etylenowy (этиленгликоль), salicylany (салицилаты). Нормальный AG (hiperchloremiczna — гиперхлоремический): biegunka (диарея), kwasica cewkowa nerkowa (почечный канальцевый ацидоз), большие объёмы 0.9% NaCl, acetazolamid (ацетазоламид), choroba Addisona (болезнь Аддисона). Wzór Wintera (формула Винтера): ожидаемое PaCO2 = 1.5 × HCO3− + 8 ± 2.",
                        focus: "Luka osmolalna (осмолярный разрыв) >10 mOsm/kg + высокий AG — toksyczne alkohole (токсичные спирты). Luka anionowa w moczu (анионный интервал мочи) отрицательный при biegunce (диарея) и положительный при kwasicy cewkowej (канальцевый ацидоз). PaCO2 выше расчёта по Winterowi — присоединилась kwasica oddechowa (дыхательный ацидоз)."
                    },
                    {
                        title: "Zasadowica metaboliczna i oddechowa (метаболический и дыхательный алкалоз)",
                        what: "Первичное повышение HCO3− (zasadowica metaboliczna — метаболический) или снижение PaCO2 из-за hiperwentylacji (гипервентиляция; zasadowica oddechowa — дыхательный).",
                        where: "Szczeklik -> Nefrologia -> Zasadowica metaboliczna, Zaburzenia oddechowe.",
                        study: "Zasadowica chlorkowrażliwa (хлорчувствительный алкалоз; Cl− w moczu <20 mmol/l): wymioty (рвота), odsysanie treści żołądkowej przez zgłębnik (аспирация через зонд), ранее принятые diuretyki (диуретики) — лечение 0.9% NaCl + KCl. Zasadowica chlorkooporna (хлоррезистентный; Cl− w moczu >20): hiperaldosteronizm (гиперальдостеронизм), zespół Cushinga (синдром Кушинга), продолжающийся приём diuretyków, zespoły Barttera i Gitelmana (синдромы Барттера и Гительмана). Kompensacja (компенсация): PaCO2 растёт на ~0.7 mm Hg на 1 mmol/l HCO3−. Zasadowica oddechowa (дыхательный алкалоз): lęk (тревога), ZP (ТЭЛА), wczesna sepsa (ранний сепсис), ciąża (беременность), marskość wątroby (цирроз), hipoksemia (гипоксемия), wczesna faza zatrucia salicylanami (ранняя фаза отравления салицилатами).",
                        focus: "Wymioty (рвота) — hipochloremiczna, hipokaliemiczna zasadowica metaboliczna (гипохлоремический гипокалиемический метаболический алкалоз). Salicylany (салицилаты) дают типичное zaburzenie mieszane (смешанное нарушение): zasadowica oddechowa + kwasica z wysoką luką anionową (ацидоз с высоким AG). Zasadowica снижает wapń zjonizowany (ионизированный кальций) — parestezje (парестезии) и tężyczka (тетания)."
                    },
                    {
                        title: "Kwasica mleczanowa (лактатацидоз)",
                        what: "Kwasica metaboliczna (метаболический ацидоз) с высоким AG из-за накопления mleczanu (лактат; hiperlaktatemia — гиперлактатемия >2 mmol/l, ciężka — тяжёлая >4 mmol/l).",
                        where: "Szczeklik -> Nefrologia -> Kwasica mleczanowa.",
                        study: "Typ A (niedotlenienie tkanek — тканевая гипоксия): wstrząs (шок), sepsa (сепсис), zatrzymanie krążenia (остановка кровообращения), niedokrwienie jelit (ишемия кишечника), zatrucie CO (отравление CO). Typ B (без гипоперфузии): metformina (метформин; главным образом при AKI и eGFR <30), niewydolność wątroby (печёночная недостаточность), nowotwory złośliwe (злокачественные опухоли), niedobór tiaminy (дефицит тиамина), linezolid, propofol, drgawki (судороги). Лечение — устранение причины; ciężka kwasica mleczanowa związana z metforminą (тяжёлый метформин-ассоциированный лактатацидоз) — hemodializa (гемодиализ).",
                        focus: "Silny ból brzucha (интенсивная боль в животе), непропорциональный данным осмотра, + wzrost mleczanu (рост лактата) — думать об ostrym niedokrwieniu jelit (острая ишемия кишечника). Metformina противопоказана при eGFR <30, при 30–44 доза снижается."
                    }
                ]
            },
            {
                title: "Чт: Рак лёгкого подробно и солитарный узел (Rak płuca, guzek płuca)",
                id: "int-rak-pluca",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Pulmonologia -> Nowotwory płuc",
                popup: { what: "Typy histologiczne (гистологические типы), zespoły paranowotworowe (паранеопластические синдромы), zespół żyły głównej górnej (синдром ВПВ), диагностика и ocena zaawansowania (стадирование), badania przesiewowe NDTK (скрининг НДКТ), guzek płuca (узел в лёгком).", focus: "Какой тип raka (рак) даёт какой zespół (синдром), kryteria polskiego programu przesiewowego (критерии польского скрининга), тактика по размеру guzka (узел).", reading: "Szczeklik -> Pulmonologia -> Rak płuca; Wytyczne Fleischner Society 2017; Program badań przesiewowych raka płuca (NFZ, NDTK; Dz.U. 2026 poz. 976)." },
                subtopics: [
                    {
                        title: "Rak płuca — typy histologiczne (гистологические типы рака лёгкого)",
                        what: "Rak niedrobnokomórkowy (немелкоклеточный рак, NSCLC, ~85%) и rak drobnokomórkowy (мелкоклеточный, SCLC, ~15%).",
                        where: "Szczeklik -> Pulmonologia -> Rak płuca -> Klasyfikacja.",
                        study: "Gruczolakorak (аденокарцинома) — самый частый тип, obwodowy (периферическая), встречается у niepalących (некурящие) и женщин, носитель мутаций EGFR/ALK. Rak płaskonabłonkowy (плоскоклеточный) — centralny (центральный), у palaczy (курильщики), rozpad (распад) и hiperkalcemia (гиперкальциемия; PTHrP). SCLC — centralny, у palaczy, быстрый рост и ранние przerzuty (метастазы), neuroendokrynny (нейроэндокринный). NSCLC I–II стадии — resekcja (резекция; lobektomia — лобэктомия); SCLC — chemioterapia (химиотерапия) pochodne platyny + etopozyd (платина + этопозид) ± radioterapia (лучевая), при postaci rozsianej (распространённая форма) + immunoterapia (иммунотерапия; atezolizumab, durwalumab).",
                        focus: "SCLC почти никогда не оперируют (исключение — очень ранний T1–2N0). Obwodowy guzek (периферический узел) у niepalącej kobiety (некурящая женщина) — скорее gruczolakorak (аденокарцинома)."
                    },
                    {
                        title: "Zespoły paranowotworowe (паранеопластические синдромы)",
                        what: "Системные проявления nowotworu (опухоль), не связанные с её массой и przerzutami (метастазы).",
                        where: "Szczeklik -> Pulmonologia -> Rak płuca -> Zespoły paranowotworowe.",
                        study: "SCLC: SIADH (euwolemiczna hiponatremia — эуволемическая гипонатриемия, osmolalność moczu (осмоляльность мочи) >100, Na+ w moczu >30), ektopowe wydzielanie ACTH — zespół Cushinga (эктопический синдром Кушинга; hipokaliemia — гипокалиемия, szybki rozwój — быстрое развитие, brak hamowania dużą dawką deksametazonu — нет подавления большой дозой дексаметазона), zespół Lamberta-Eatona (синдром Ламберта-Итона; przeciwciała przeciw kanałom wapniowym P/Q — антитела к кальциевым каналам P/Q), zapalenie mózgu i rdzenia z przeciwciałami anty-Hu (энцефаломиелит). Rak płaskonabłonkowy (плоскоклеточный) — hiperkalcemia przez PTHrP (гиперкальциемия; PTH obniżony — подавлен). Gruczolakorak (аденокарцинома) — osteoartropatia przerostowa (гипертрофическая остеоартропатия), wędrujące zakrzepowe zapalenie żył (мигрирующий тромбофлебит; zespół Trousseau — Труссо).",
                        focus: "Zespół Lamberta-Eatona: osłabienie proksymalne (проксимальная слабость), которое УМЕНЬШАЕТСЯ при повторном усилии, hiporefleksja (гипорефлексия), suchość w ustach (сухость во рту); miastenia (миастения) — наоборот, ухудшается при нагрузке и начинается с глаз."
                    },
                    {
                        title: "Zespół żyły głównej górnej, guz Pancoasta (синдром ВПВ и опухоль Панкоста)",
                        what: "Obstrukcja żyły głównej górnej (обструкция ВПВ) опухолью или zakrzepem (тромб); guz Pancoasta (опухоль Панкоста) — rak szczytu płuca (рак верхушки лёгкого) с naciekiem splotu ramiennego (инвазия плечевого сплетения) и pnia współczulnego (симпатический ствол).",
                        where: "Szczeklik -> Pulmonologia -> Rak płuca; Szczeklik -> Onkologia -> Stany nagłe.",
                        study: "Zespół żyły głównej górnej (синдром ВПВ): obrzęk twarzy i szyi (отёк лица и шеи), poszerzenie żył szyi i ściany klatki piersiowej (расширение вен шеи и грудной стенки), duszność (одышка), nasilenie w pozycji leżącej i przy pochylaniu się (усиление в положении лёжа и при наклоне). Причины: чаще rak płuca (рак лёгкого; SCLC) и chłoniaki (лимфомы), затем zakrzepica na cewnikach i elektrodach (тромбоз на катетерах и электродах). Лечение: сначала histologia (гистология; при zagrożeniu drożności dróg oddechowych — угроза дыхательным путям — сразу stent), stentowanie żyły głównej górnej (стентирование ВПВ) даёт быстрое облегчение, далее по histologii chemioterapia lub radioterapia (химио- или лучевая терапия). Guz Pancoasta: zespół Hornera (синдром Горнера; opadanie powieki, zwężenie źrenicy, brak potu — птоз, миоз, ангидроз), ból barku i łokciowej strony ręki (боль в плече и по локтевой стороне руки; C8–Th2), zanik mięśni ręki (атрофия мышц кисти).",
                        focus: "GKS (ГКС) или radioterapia (облучение) до biopsji (биопсия) могут сделать невозможной diagnostykę chłoniaka (диагностика лимфомы) — у стабильного пациента сначала histologia."
                    },
                    {
                        title: "Diagnostyka raka płuca, badania przesiewowe NDTK (диагностика, стадирование и скрининг)",
                        what: "Путь от подозрения до histologii (гистология) и profilu molekularnego (молекулярный профиль); badania przesiewowe NDTK — niskodawkowa tomografia komputerowa (скрининг низкодозовой КТ) в группе риска.",
                        where: "Szczeklik -> Pulmonologia -> Rak płuca -> Diagnostyka; Program badań przesiewowych raka płuca (NFZ; Rozporządzenie MZ z 14.07.2026, Dz.U. 2026 poz. 976).",
                        study: "TK klatki piersiowej z kontrastem (КТ грудной клетки с контрастом; z objęciem nadnerczy i wątroby — с захватом надпочечников и печени), PET-CT для oceny zaawansowania (стадирование); bronchoskopia (бронхоскопия) — guzy centralne (центральные опухоли), EBUS-TBNA — ocena węzłów chłonnych śródpiersia (оценка лимфоузлов средостения), biopsja przezklatkowa pod kontrolą TK (трансторакальная биопсия под КТ) — guzy obwodowe (периферические). В NSCLC niepłaskonabłonkowym (несквамозный) — EGFR, ALK, ROS1, BRAF, KRAS, PD-L1: EGFR — ozymertynib (осимертиниб), ALK — alektynib (алектиниб), PD-L1 ≥50% без драйверов — pembrolizumab (пембролизумаб). Польский скрининг NDTK (świadczenie gwarantowane NFZ — гарантированная услуга NFZ, bez skierowania — без направления, договоры с 1.10.2026; Dz.U. 2026 poz. 976), ежегодно: 1) 55–74 года, ≥20 paczkolat (пачко-лет), pali (курит) или rzucił palenie (бросил) ≤15 лет назад; 2) 50–54 года с теми же критериями курения + ≥1 czynnik ryzyka (фактор риска) — narażenie zawodowe (профессиональная экспозиция) ≥2 лет (azbest, krzemionka, nikiel, chrom, kadm, spaliny silników Diesla — асбест, кремнезём, никель, хром, кадмий, выхлоп дизеля и др.), radon (радон), nowotwór w wywiadzie (рак в анамнезе; chłoniak, rak głowy i szyi, rak pęcherza moczowego — лимфома, рак головы и шеи, мочевого пузыря), rak płuca u krewnego I stopnia (рак лёгкого у родственника I степени), POChP; 3) 55–74 года с теми же критериями курения, завершившие лечение raka płuca и 5-летнее наблюдение после него. Не включают: TK klatki piersiowej за последние 12 месяцев, objawy (симптомы; krwioplucie — кровохарканье, chrypka — охриплость, utrata masy ciała — похудание, kaszel — кашель >8 недель) — им нужна diagnostyka (диагностика), а не скрининг.",
                        focus: "RTG klatki piersiowej (рентген грудной клетки) не является скрининговым методом. Скрининг — ежегодная NDTK (НДКТ), а не TK z kontrastem (КТ с контрастом)."
                    },
                    {
                        title: "Guzek pojedynczy płuca (солитарный узел лёгкого)",
                        what: "Okrągłe zacienienie (округлое затенение) ≤3 cm, окружённое miąższem płucnym (лёгочная ткань), без niedodmy (ателектаз) и powiększenia węzłów chłonnych (лимфаденопатия); >3 cm — guz (опухоль).",
                        where: "Szczeklik -> Pulmonologia -> Guzek płuca; Wytyczne Fleischner Society 2017.",
                        study: "Guzek lity (солидный узел), Fleischner 2017: <6 mm — у низкого риска без контроля, у высокого — факультативно TK (КТ) через 12 месяцев; 6–8 mm — TK через 6–12 месяцев; >8 mm — TK через 3 месяца, PET-CT или biopsja (биопсия). За złośliwość (злокачественность): размер, spikule (спикулы), płat górny (верхняя доля), wzrost (рост), palenie tytoniu (курение), возраст. За łagodność (доброкачественность): zwapnienia typu «popcorn» (кальцинаты «попкорн»; hamartoma — гамартома), centralne, warstwowe, rozlane (центральные, слоистые, диффузные); tłuszcz w guzku (жир в узле); stabilność guzka litego (стабильность солидного узла) 2 года.",
                        focus: "Первый шаг — сравнить со старыми снимками. PET daje wynik fałszywie ujemny (ложноотрицателен) при raku gruczołowym in situ (аденокарцинома in situ) и rakowiaku (карциноид), fałszywie dodatni (ложноположителен) — при gruźlicy (ТБ) и sarkoidozie (саркоидоз)."
                    }
                ]
            },
            {
                title: "Пт: Сепсис, менингит, ВИЧ, боррелиоз, отравления (Sepsa, zapalenie opon, HIV, borelioza, zatrucia)",
                id: "int-sepsa-zatrucia",
                time: "3.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Choroby zakaźne i toksykologia -> Sepsa, HIV, zatrucia",
                popup: { what: "Definicja i wstępne leczenie sepsy (определение и начальное лечение сепсиса), zakażenie HIV (ВИЧ-инфекция), borelioza z Lyme (болезнь Лайма), antidota (антидоты) при частых zatruciach (отравления).", focus: "Pakiet pierwszej godziny (пакет первого часа), progi CD4 (пороги) для zakażeń oportunistycznych (оппортунистические инфекции), сроки PEP, пары «trucizna — antidotum» («яд — антидот») и их ограничения.", reading: "Surviving Sepsis Campaign 2021; Szczeklik -> Choroby zakaźne -> HIV, Borelioza; Szczeklik -> Toksykologia; Rekomendacje PTEiLChZ (borelioza)." },
                subtopics: [
                    {
                        title: "Sepsa — Sepsis-3 (сепсис и септический шок)",
                        what: "Sepsa (сепсис) — zagrażająca życiu dysfunkcja narządów (жизнеугрожающая органная дисфункция) из-за нарушенного ответа организма на zakażenie (инфекция; рост SOFA ≥2 баллов).",
                        where: "Surviving Sepsis Campaign 2021; Szczeklik -> Choroby zakaźne -> Sepsa.",
                        study: "qSOFA (≥2 из 3): częstość oddechów (ЧДД) ≥22/min, zaburzenia świadomości (нарушение сознания), SBP (САД) ≤100 mm Hg. Wstrząs septyczny (септический шок): wazopresor (вазопрессор) для MAP ≥65 mm Hg и mleczany (лактат) >2 mmol/l несмотря на адекватную płynoterapię (инфузия). Pakiet pierwszej godziny (пакет первого часа): mleczany (повтор, если >2), posiewy krwi (посевы крови) до antybiotyku (антибиотик), antybiotyk o szerokim spektrum (широкого спектра), 30 ml/kg krystaloidów (кристаллоиды) при hipotensji (гипотония) или mleczanach ≥4, noradrenalina (норадреналин) при сохраняющейся hipotensji. Далее: предпочтительны zbilansowane krystaloidy (сбалансированные кристаллоиды), wazopresyna (вазопрессин) как второй wazopresor, hydrokortyzon (гидрокортизон) 200 mg/dobę при стойкой потребности в wazopresorach.",
                        focus: "SIRS больше не входит в definicję sepsy (определение сепсиса; в вопросах CEM прошлых лет — ещё входит); SSC 2021 не рекомендует qSOFA как единственный инструмент скрининга. Wazopresor (вазопрессор) первого выбора — noradrenalina, не dopamina (дофамин)."
                    },
                    {
                        title: "Zakażenie HIV (ВИЧ-инфекция)",
                        what: "Хроническая ретровирусная инфекция с прогрессирующим падением liczby limfocytów CD4 (лимфоциты) и стадией AIDS (СПИД) при CD4 <200/µl или chorobie wskaźnikowej AIDS (СПИД-индикаторное заболевание).",
                        where: "Szczeklik -> Choroby zakaźne -> Zakażenie HIV; Zalecenia PTN AIDS.",
                        study: "Скрининг — test 4. generacji (тест четвёртого поколения; antygen p24 + przeciwciała — антиген и антитела), подтверждение — test różnicujący (дифференцирующий иммунотест) или HIV RNA при подозрении на ostre zakażenie (острая инфекция). Progi CD4 (пороги): <200 — pneumocystozowe zapalenie płuc (пневмоцистная пневмония; profilaktyka kotrimoksazolem — профилактика котримоксазолом); <100 — toksoplazmoza (токсоплазмоз), kryptokokowe zapalenie opon mózgowo-rdzeniowych (криптококковый менингит); <50 — cytomegalowirusowe zapalenie siatkówki (ЦМВ-ретинит), MAC. ART (АРТ) начинают сразу всем независимо от CD4 (обычно 2 NRTI + inhibitor integrazy — ингибитор интегразы). PEP: как можно скорее, не позднее 72 h, 3 leki (препарата) 28 дней.",
                        focus: "Pneumocystozowe zapalenie płuc (пневмоцистная пневмония): obustronne zmiany śródmiąższowe (двусторонние интерстициальные изменения), hipoksemia przy wysiłku (гипоксемия при нагрузке), wysokie LDH (высокая ЛДГ); лечение kotrimoksazol (котримоксазол) + GKS (ГКС) при PaO2 <70 mm Hg. PEP после 72 h уже не начинают."
                    },
                    {
                        title: "Borelioza z Lyme (боррелиоз Лайма)",
                        what: "Zakażenie Borrelia burgdorferi sensu lato (инфекция), передаётся kleszczem Ixodes ricinus (клещ).",
                        where: "Szczeklik -> Choroby zakaźne -> Borelioza; Rekomendacje PTEiLChZ.",
                        study: "Rumień wędrujący (мигрирующая эритема): расширяющееся пятно ≥5 cm через 3–30 дней после ukłucia kleszcza (укус клеща) — диагноз клинический, serologia (серология) не нужна; doksycyklina (доксициклин) 100 mg 2 раза в день 14 дней (альтернатива — amoksycylina, aksetyl cefuroksymu — амоксициллин, цефуроксима аксетил; у kobiet w ciąży — беременных — amoksycylina). Wczesna postać rozsiana (ранняя диссеминированная): mnogi rumień wędrujący (множественная эритема), neuroborelioza (нейроборрелиоз; porażenie nerwu twarzowego — паралич лицевого нерва, zespół Bannwartha — синдром Баннварта), boreliozowe zapalenie mięśnia sercowego (кардит) с blokiem przedsionkowo-komorowym (АВ-блокада), chłoniak limfocytowy (лимфоцитома; płatek ucha, brodawka sutkowa — мочка уха, сосок). Późna (поздняя): zapalenie stawu kolanowego (артрит коленного сустава), przewlekłe zanikowe zapalenie skóry kończyn (хронический атрофический акродерматит). Serologia dwuetapowa (двухэтапная серология): ELISA, затем Western blot; при neuroboreliozie — przeciwciała w płynie mózgowo-rdzeniowym (антитела в ликворе).",
                        focus: "Rumień wędrujący (мигрирующая эритема) лечится без анализов; положительная serologia без симптомов — не повод для лечения. Rutynowa profilaktyka antybiotykowa (рутинная антибиотикопрофилактика) после ukłucia kleszcza (укус клеща) в Польше не рекомендуется."
                    },
                    {
                        title: "Zatrucia paracetamolem, alkoholami toksycznymi, tlenkiem węgla (отравления: парацетамол, метанол/этиленгликоль, CO)",
                        what: "Три zatrucia (отравления) с конкретным antidotum (антидот) и строгими сроками.",
                        where: "Szczeklik -> Toksykologia kliniczna.",
                        study: "Paracetamol (парацетамол): dawka toksyczna (токсическая доза) ≥150 mg/kg; уровень оценивают по nomogramie (номограмма) через ≥4 h после приёма; N-acetylocysteina (N-ацетилцистеин) максимально эффективна в первые 8 h, но показана и позже при признаках uszkodzenia wątroby (поражение печени) (21-часовая схема: 150 mg/kg за 1 h, 50 mg/kg за 4 h, 100 mg/kg за 16 h; в Великобритании и Австралии применяют укороченные 2-этапные схемы, например SNAP 12 h — CEM ждёт классическую 21-часовую). Metanol (метанол; zaburzenia widzenia, ślepota — нарушения зрения, слепота) и glikol etylenowy (этиленгликоль; AKI, kryształy szczawianu wapnia w moczu — кристаллы оксалата кальция в моче): wysoka luka anionowa (высокий AG) + luka osmolalna (осмолярный разрыв); fomepizol или etanol (фомепизол или этанол; blokada dehydrogenazy alkoholowej — блок алкогольдегидрогеназы), wodorowęglan sodu (бикарбонат), hemodializa (гемодиализ). CO: ból głowy (головная боль), splątanie (спутанность); pulsoksymetr (пульсоксиметр) показывает ложно нормальную SpO2, нужен COHb; 100% O2 через maskę z rezerwuarem (маска с резервуаром), tlenoterapia hiperbaryczna (ГБО) при utracie przytomności (потеря сознания), deficycie neurologicznym (неврологический дефицит), niedokrwieniu mięśnia sercowego (ишемия миокарда), ciąży (беременность), wysokim COHb.",
                        focus: "Uszkodzenie wątroby (поражение печени) при zatruciu paracetamolem проявляется через 24–72 h — ранняя норма ALT (АЛТ) не исключает отравления. Etanol (этанол) — antidotum при toksycznych alkoholach (токсичные спирты), а не противопоказание."
                    },
                    {
                        title: "Zatrucia opioidami, benzodiazepinami, digoksyną, związkami fosforoorganicznymi (отравления: опиоиды, бензодиазепины, дигоксин, ФОС)",
                        what: "Zatrucia z antidotum (отравления с антидотом), у которого есть ограничения или особая конечная точка.",
                        where: "Szczeklik -> Toksykologia kliniczna; Wytyczne ERC 2025 -> Sytuacje szczególne -> Zatrucia.",
                        study: "Opioidy (опиоиды): zwężenie źrenic (миоз), depresja oddechowa (угнетение дыхания), śpiączka (кома); nalokson (налоксон) 0.4 mg i.v. (или i.m., donosowo — интраназально), титровать; действует короче многих opioidów — ponowna sedacja (повторная седация), возможен wlew ciągły (инфузия). Benzodiazepiny (бензодиазепины): leczenie podtrzymujące (поддерживающее лечение); flumazenil (флумазенил) — только при чистом zatruciu (отравление) у ранее не принимавших benzodiazepin. Digoksyna (дигоксин): nudności (тошнота), ksantopsja (ксантопсия), zaburzenia rytmu (аритмии; dwukierunkowy częstoskurcz komorowy — двунаправленная ЖТ, częstoskurcz przedsionkowy z blokiem — предсердная тахикардия с блокадой), czynniki wyzwalające (провоцирующие факторы) — hipokaliemia (гипокалиемия), PChN (ХБП), amiodaron, werapamil; лечение — отмена, korekta K+/Mg2+ (коррекция), fragmenty Fab przeciwciał przeciw digoksynie (фрагменты Fab антител к дигоксину). Związki fosforoorganiczne (ФОС): zespół cholinergiczny (холинергический синдром; zwężenie źrenic, bradykardia, bronchorea, ślinotok, fascykulacje — миоз, брадикардия, бронхорея, слюнотечение, фасцикуляции) — dekontaminacja (деконтаминация), atropina (атропин) i.v. в удваивающихся дозах, oksymy (оксимы; pralidoksym, obidoksym).",
                        focus: "Flumazenil противопоказан при długotrwałym przyjmowaniu benzodiazepin (длительный приём бензодиазепинов) и сочетании с trójpierścieniowymi lekami przeciwdepresyjnymi (трициклические антидепрессанты) — провоцирует drgawki (судороги). Критерий достаточной atropinizacji (атропинизация) при zatruciu związkami fosforoorganicznymi — suche oskrzela (сухие бронхи), а не rozszerzenie źrenic (расширение зрачков)."
                    },
                    {
                        title: "Bakteryjne zapalenie opon mózgowo-rdzeniowych u dorosłych (бактериальный менингит у взрослых)",
                        what: "Ropne zapalenie opon mózgowo-rdzeniowych (гнойное воспаление мозговых оболочек); у взрослых чаще S. pneumoniae и N. meningitidis, у >50 лет и при immunosupresji (иммуносупрессия) — также Listeria monocytogenes.",
                        where: "Szczeklik -> Choroby zakaźne -> Bakteryjne zapalenie opon mózgowo-rdzeniowych; Wytyczne ESCMID 2016 (ostre bakteryjne zapalenie opon).",
                        study: "Клиника: gorączka (лихорадка), ból głowy (головная боль), sztywność karku (ригидность затылочных мышц), zaburzenia świadomości (нарушение сознания; полная триада — у меньшинства); wysypka wybroczynowa (петехиальная сыпь) — meningokok (менингококк). Posiewy krwi (посевы крови) сразу, затем без промедления deksametazon (дексаметазон) 10 mg i.v. co 6 h 4 дня (перед первой дозой antybiotyku (антибиотик) или вместе с ней) + эмпирически ceftriakson (цефтриаксон) 2 g co 12 h (или cefotaksym) ± wankomycyna (ванкомицин) при риске pneumokoka opornego na penicylinę (пенициллинрезистентный пневмококк) + ampicylina (ампициллин) при возрасте >50 лет, immunosupresji, ciąży (беременность), alkoholizmie (алкоголизм) (Listeria). TK przed nakłuciem lędźwiowym (КТ до люмбальной пункции) — при objawach ogniskowych (очаговая симптоматика), obrzęku tarczy nerwu wzrokowego (отёк диска зрительного нерва), drgawkach (судороги), GCS <10, immunosupresji; antybiotyk из-за TK не откладывают. Płyn mózgowo-rdzeniowy (ликвор): pleocytoza neutrofilowa (нейтрофильный плеоцитоз; обычно >1000/µl), wysokie stężenie białka (высокий белок), glukoza płyn/surowica (глюкоза ликвор/сыворотка) <0.4. Chemioprofilaktyka osób z bliskiego kontaktu (химиопрофилактика тесных контактов) при meningokoku: cyprofloksacyna (ципрофлоксацин) 500 mg jednorazowo (однократно), ryfampicyna (рифампицин) или ceftriakson 250 mg i.m.",
                        focus: "Antybiotyk (антибиотик) — в течение 1 h от поступления. Cefalosporyny (цефалоспорины) не действуют на Listeria — у пожилых обязательно ampicylina (ампициллин). Deksametazon (дексаметазон) снижает смертность и głuchotę (глухота) при pneumokokowym zapaleniu opon (пневмококковый менингит); если возбудитель не pneumokok и не H. influenzae — его отменяют (ESCMID)."
                    }
                ]
            },
            {
                title: "Сб: Тест по пульмонологии II, инфекциям и токсикологии",
                id: "int-7-test",
                time: "1.5 ч",
                lepolekPath: "Testy -> Pulmonologia, choroby zakaźne i toksykologia (40 pytań CEM)",
                popup: { what: "Контрольный тест недели: gruźlica (ТБ), choroby śródmiąższowe płuc (ИЗЛ), odma opłucnowa (пневмоторакс), gazometria (газометрия), rak płuca (рак лёгкого), sepsa (сепсис), zatrucia (отравления).", focus: "Задачи на gazometrię (газометрия) и пары «trucizna — antidotum» («яд — антидот»).", reading: "Собственный конспект недели и Zeszyt Błędów." },
                subtopics: [
                    {
                        title: "Rozwiązanie 40 pytań CEM (решение вопросов CEM)",
                        what: "Тест по темам недели в режиме экзамена.",
                        where: "LEPOLEK -> Testy -> Pulmonologia / Choroby zakaźne.",
                        study: "Gruźlica (ТБ) и utajone zakażenie (латентная инфекция), choroby śródmiąższowe płuc (ИЗЛ) и sarkoidoza (саркоидоз), odma opłucnowa (пневмоторакс), płyn w jamie opłucnej (выпот), równowaga kwasowo-zasadowa (КОС), rak płuca (рак лёгкого), sepsa (сепсис), HIV (ВИЧ), borelioza (боррелиоз), zatrucia (отравления).",
                        focus: "Каждую gazometrię (газометрия) в тесте решать по шагам на бумаге, а не на глаз."
                    },
                    {
                        title: "Analiza błędów w gazometrii (разбор ошибок по газометрии)",
                        what: "Прорешать 10 gazometrii (газометрии) из неверных ответов и объяснений LEPOLEK заново.",
                        where: "Объяснения LEPOLEK; Szczeklik -> Zaburzenia gospodarki kwasowo-zasadowej.",
                        study: "Для каждой: pierwotne zaburzenie (первичное нарушение), расчёт AG, проверка kompensacji (компенсация; wzór Wintera для kwasicy — ацидоз, 0.7 × ΔHCO3− для zasadowicy — алкалоз), наличие второго zaburzenia (нарушение).",
                        focus: "Типичные ошибки: не скорректировать AG по albuminie (альбумин), пропустить zaburzenie mieszane (смешанное нарушение) при нормальном pH."
                    },
                    {
                        title: "Tabele tygodnia — utrwalenie (закрепление таблиц недели)",
                        what: "Карточки Anki по antidotom (антидоты), lekom przeciwprątkowym (препараты от ТБ) и kryteriom (критерии).",
                        where: "Личные заметки.",
                        study: "Antidota (антидоты): NAC, fomepizol/etanol, O2/tlenoterapia hiperbaryczna (ГБО), nalokson, flumazenil (с ограничениями), fragmenty Fab przeciw digoksynie (Fab к дигоксину), atropina + oksymy. Działania niepożądane HRZE (побочные эффекты); kryteria Lighta (критерии Лайта); progi CD4 200/100/50; Sepsis-3 и pakiet pierwszej godziny (пакет первого часа).",
                        focus: "Проверить на память polskie kryteria programu przesiewowego NDTK (польские критерии скрининга НДКТ; 55–74 года, ≥20 paczkolat (пачко-лет), ≤15 лет после отказа; 50–54 года — только с czynnikiem ryzyka (фактор риска); после лечения raka płuca — по завершении 5-летнего наблюдения)."
                    }
                ]
            }
        ]
    },
    {
        key: "int-8",
        subject: "interna",
        title: "Терапия VIII — Нефрология II, гепатология II, гемостаз",
        days: [
            {
                title: "Пн: ZUM, мочекаменная болезнь, TIN, ADPKD, AKI (ZUM, kamica, wielotorbielowatość nerek)",
                id: "int-zum-kamica",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Nefrologia -> Zakażenia układu moczowego i kamica",
                popup: { what: "ZUM — zakażenia układu moczowego (инфекции мочевых путей) у взрослых, kamica nerkowa (камни почек) с терапевтической стороны, śródmiąższowe zapalenie nerek (интерстициальный нефрит), wielotorbielowatość nerek (поликистоз), стадии AKI — ostre uszkodzenie nerek (острое повреждение почек).", focus: "Когда bakteriomocz (бактериурию) лечить, lek pierwszego wyboru (препарат первого выбора) при zapalenie pęcherza moczowego (цистит), профилактика kamicy (камней) без ограничения кальция, стадии KDIGO.", reading: "Szczeklik -> Nefrologia -> Zakażenia układu moczowego, Kamica, Choroby cewkowo-śródmiąższowe, Torbielowatości; Wytyczne EAU; KDIGO AKI 2012." },
                subtopics: [
                    {
                        title: "Bezobjawowy bakteriomocz i powikłane ZUM (бессимптомная бактериурия, осложнённая ИМП)",
                        what: "Bakteriomocz (бактериурия) ≥10^5 CFU/ml (КОЕ/мл) без симптомов; powikłane ZUM (осложнённая инфекция мочевых путей) — инфекция на фоне анатомических, функциональных нарушений или у особых групп.",
                        where: "Szczeklik -> Nefrologia -> Zakażenia układu moczowego; Wytyczne EAU (Urological Infections).",
                        study: "Bezobjawowy bakteriomocz лечат только у беременных и перед урологическими вмешательствами с повреждением слизистой (например, TURP — przezcewkowa elektroresekcja prostaty (ТУРП)). Не лечат: пожилые, cukrzyca (СД), cewnik (катетер), uraz rdzenia kręgowego (повреждение спинного мозга), женщины в постменопаузе. Powikłane ZUM: мужчины, ciąża (беременность), obturacja (обструкция), cewnik, immunosupresja (иммуносупрессия), wady układu moczowego (аномалии мочевых путей) — всегда posiew moczu (посев мочи), лечение 7–14 дней (у мужчин 14 дней, если не исключено zapalenie gruczołu krokowego (простатит)).",
                        focus: "Leukocyturia (лейкоцитурия) или bakteriomocz у бессимптомного пожилого пациента — не показание к antybiotyk (антибиотик). Zakażenie związane z cewnikiem (катетер-ассоциированная инфекция) — смена cewnika перед взятием posiewu (посева)."
                    },
                    {
                        title: "Ostre zapalenie pęcherza moczowego i odmiedniczkowe zapalenie nerek (острый цистит и пиелонефрит)",
                        what: "Niepowikłane zakażenia (неосложнённые инфекции) нижних и верхних мочевых путей у небеременных женщин; основной возбудитель — E. coli.",
                        where: "Szczeklik -> Nefrologia -> Zakażenia układu moczowego; Wytyczne EAU.",
                        study: "Zapalenie pęcherza (цистит): dyzuria (дизурия), częstomocz (поллакиурия), parcie naglące (императивные позывы) без выделений из влагалища — диагноз клинический, posiew moczu (посев мочи) не обязателен; первый выбор — fosfomycyna z trometamolem (фосфомицина трометамол) 3 г однократно или nitrofurantoina (нитрофурантоин) 5 дней (в Польше широко применяется furazydyna (фуразидин)), альтернатива — piwmecylinam (пивмециллинам). Odmiedniczkowe zapalenie nerek (пиелонефрит): gorączka (лихорадка), боль в пояснице, dodatni objaw Goldflama (симптом Гольдфлама); posiew moczu всегда, USG (УЗИ) для исключения obturacji (обструкции); амбулаторно — fluorochinolon (фторхинолон) (cyprofloksacyna (ципрофлоксацин) 7 дней) при местной резистентности <10% или doustna cefalosporyna (пероральный цефалоспорин); тяжёлый — ceftriakson (цефтриаксон) i.v.",
                        focus: "Fosfomycyna (фосфомицин) и nitrofurantoina при odmiedniczkowe zapalenie nerek (пиелонефрит) не применяют — не создают концентрации в паренхиме почки. Fluorochinolony (фторхинолоны) для niepowikłane zapalenie pęcherza (неосложнённый цистит) не используются (ограничения EMA). Odmiedniczkowe zapalenie nerek z obturacją (обструктивный пиелонефрит) — срочная декомпрессия (nefrostomia (нефростомия) или stent JJ)."
                    },
                    {
                        title: "Kamica układu moczowego (мочекаменная болезнь, терапевтический аспект)",
                        what: "Образование złogów (конкрементов) в мочевых путях; чаще всего szczawian wapnia (оксалат кальция).",
                        where: "Szczeklik -> Nefrologia -> Kamica nerkowa; Wytyczne EAU (Urolithiasis).",
                        study: "Типы: szczawian wapnia (оксалат кальция) (~70–80%), fosforan wapnia (фосфат кальция), kwas moczowy (мочевая кислота) (рентгенонегативные, кислая моча, dna moczanowa (подагра) — растворяются при ощелачивании мочи cytrynianem potasu (цитрат калия)), struwit (струвит) (инфекция бактериями, продуцирующими ureazę (уреазу), Proteus, kamienie odlewowe (коралловидные камни), щелочная моча), cystyna (цистин) (шестиугольные кристаллы). Диагностика: niskodawkowa TK bez kontrastu (низкодозовая КТ без контраста) — метод выбора; у беременных и детей — USG (УЗИ). Kolka nerkowa (почечная колика): NLPZ (НПВП) первой линии (diklofenak (диклофенак), также metamizol (метамизол)), opioidy (опиоиды) — вторая; tamsulozyna (тамсулозин) облегчает отхождение дистальных камней >5 мм.",
                        focus: "Профилактика: жидкость до diurezy (диуреза) >2–2.5 л/сут, меньше соли и животного белка, НОРМАЛЬНОЕ потребление кальция (1000–1200 мг) — ограничение кальция повышает всасывание szczawianów (оксалатов). Kamień (камень) + gorączka (лихорадка) или bezmocz (анурия) jedynej nerki (единственной почки) — срочная декомпрессия."
                    },
                    {
                        title: "Cewkowo-śródmiąższowe zapalenie nerek i ADPKD (тубулоинтерстициальный нефрит и поликистоз почек)",
                        what: "Ostre śródmiąższowe zapalenie nerek (острый интерстициальный нефрит) — чаще лекарственная иммунная реакция; ADPKD — autosomalnie dominująca wielotorbielowatość nerek (аутосомно-доминантный поликистоз почек).",
                        where: "Szczeklik -> Nefrologia -> Choroby cewkowo-śródmiąższowe, Torbielowatości nerek.",
                        study: "Ostre TIN (острый ТИН): через 7–10 дней после β-laktamów (β-лактамов), NLPZ (НПВП), IPP (ИПП), ryfampicyny (рифампицина), sulfonamidów (сульфаниламидов), allopurynolu (аллопуринола); gorączka (лихорадка), wysypka (сыпь), eozynofilia (эозинофилия) (полная триада редка), jałowa leukocyturia (стерильная лейкоцитурия), wałeczki leukocytarne (лейкоцитарные цилиндры), AKI; лечение — отмена препарата, при отсутствии улучшения — GKS (ГКС). ADPKD: PKD1 (хромосома 16, тяжелее) и PKD2; NT (АГ), krwiomocz (гематурия), боли, kamica (камни), schyłkowa PChN (терминальная ХБП) к 50–60 годам; torbiele wątroby (кисты печени), tętniaki naczyń mózgowych (аневризмы сосудов мозга), wypadanie płatka zastawki mitralnej (пролапс митрального клапана). Лечение: контроль ciśnienia (АД) ACEI/ARB, tolwaptan (толваптан) при быстрой прогрессии (hepatotoksyczność — гепатотоксичность).",
                        focus: "Скрининг tętniaków mózgu (аневризм мозга) при ADPKD (angio-MR — МР-ангиография) — у пациентов с семейным анамнезом tętniaka (аневризмы) или SAH — krwotok podpajęczynówkowy (САК), а не у всех. TIN от NLPZ (НПВП) может сочетаться с zespołem nerczycowym (нефротический синдром)."
                    },
                    {
                        title: "Ostre uszkodzenie nerek wg KDIGO — kryteria i stadia AKI (острое повреждение почек)",
                        what: "Ostre uszkodzenie nerek (острое нарушение функции почек), определяемое по kreatyninie (креатинину) и diurezie (диурезу).",
                        where: "KDIGO Clinical Practice Guideline for AKI 2012; Szczeklik -> Nefrologia -> Ostre uszkodzenie nerek.",
                        study: "Определение: рост kreatyniny (креатинина) ≥0.3 мг/дл за 48 ч, или ≥1.5 раза от исходного за 7 дней, или diureza (диурез) <0.5 мл/кг/ч ≥6 ч. Стадия 1: kreatynina ×1.5–1.9 или +0.3 мг/дл; diureza <0.5 мл/кг/ч 6–12 ч. Стадия 2: ×2.0–2.9; <0.5 мл/кг/ч ≥12 ч. Стадия 3: ×3.0, или kreatynina ≥4.0 мг/дл, или начало leczenia nerkozastępczego (заместительной почечной терапии); <0.3 мл/кг/ч ≥24 ч или bezmocz (анурия) ≥12 ч.",
                        focus: "Стадию определяют по худшему из двух критериев. FENa <1% — przednerkowa przyczyna (преренальная причина), >2% — ostra martwica cewek nerkowych (острый тубулярный некроз) (на фоне diuretyków (диуретиков) информативнее FEUrea <35%)."
                    }
                ]
            },
            {
                title: "Вт: Электролиты II и инфузионная терапия (Zaburzenia elektrolitowe, płynoterapia)",
                id: "int-elektrolity-2",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Nefrologia -> Zaburzenia wodno-elektrolitowe",
                popup: { what: "Potas (калий), wapń (кальций), sód (натрий) и magnez (магний) сверх темы недели 4 (там — hiperkaliemia (гиперкалиемия) и hiponatremia (гипонатриемия)); основы выбора płynów infuzyjnych (инфузионных растворов).", focus: "Скорость введения KCl, первый шаг при hiperkalcemii (гиперкальциемии), отличие SIADH от mózgowy zespół utraty soli (церебральная потеря соли) по объёму.", reading: "Szczeklik -> Nefrologia -> Zaburzenia gospodarki wodno-elektrolitowej; LEK w pigułce -> Nefrologia." },
                subtopics: [
                    {
                        title: "Hipokaliemia (гипокалиемия)",
                        what: "K+ <3.5 ммоль/л; ciężka (тяжёлая) <2.5 ммоль/л.",
                        where: "Szczeklik -> Nefrologia -> Zaburzenia gospodarki potasowej.",
                        study: "Причины: diuretyki (диуретики) (pętlowe, tiazydowe — петлевые, тиазидные), wymioty (рвота), biegunka (диарея), hiperaldosteronizm (гиперальдостеронизм), insulina (инсулин), β2-mimetyki (бета-агонисты), hipomagnezemia (гипомагниемия), zespoły Barttera i Gitelmana (синдромы Барттера и Гительмана). EKG: spłaszczenie załamka T (уплощение T), fala U (зубец U), obniżenie ST (депрессия ST), wydłużenie QU (удлинение QU), zaburzenia rytmu (аритмии) (усиливает токсичность digoksyny (дигоксина)). Лечение: лёгкая — KCl p.o.; i.v. через периферическую вену обычно до 10 ммоль/ч (до 20 ммоль/ч при мониторинге EKG, быстрее — только через центральную вену), разведение в 0.9% NaCl.",
                        focus: "KCl никогда не вводят в bolusie (болюсом). Oporna hipokaliemia (рефрактерная гипокалиемия) — проверить и восполнить magnez (магний). Разведение KCl в glukozie (глюкозе) стимулирует insulinę (инсулин) и углубляет hipokaliemię."
                    },
                    {
                        title: "Hiperkalcemia (гиперкальциемия)",
                        what: "Общий wapń (кальций) >2.6 ммоль/л (10.5 мг/дл) после коррекции по albuminie (альбумину); przełom hiperkalcemiczny (криз) — обычно >3.5 ммоль/л (14 мг/дл) или с симптомами.",
                        where: "Szczeklik -> Nefrologia -> Zaburzenia gospodarki wapniowo-fosforanowej; Szczeklik -> Onkologia -> Stany nagłe.",
                        study: "Коррекция: Ca (мг/дл) + 0.8 × (4 − albumina г/дл). ~90% случаев — pierwotna nadczynność przytarczyc (первичный гиперпаратиреоз) (амбулаторно) и nowotwory (опухоли) (в стационаре: PTHrP, przerzuty osteolityczne (остеолитические метастазы), szpiczak plazmocytowy (миелома), kalcytriol (кальцитриол) при chłoniakach (лимфомах)). Симптомы: poliuria (полиурия), odwodnienie (обезвоживание), zaparcie (запор), zapalenie trzustki (панкреатит), splątanie (спутанность), skrócenie QT (укорочение QT). Неотложно: 1) i.v. 0.9% NaCl; 2) bisfosfonian (бисфосфонат) i.v. (kwas zoledronowy (золедроновая кислота) 4 мг за 15 мин), эффект через 2–4 дня; kalcytonina (кальцитонин) действует за часы, но быстро теряет эффект; denosumab (деносумаб) — при niewydolności nerek (почечной недостаточности) или рефрактерности; GKS (ГКС) — при избытке kalcytriolu (лимфома, sarkoidoza (саркоидоз), przedawkowanie witaminy D (передозировка витамина D)); dializa (диализ) — тяжёлые случаи с PChN (ХБП).",
                        focus: "Первый шаг — nawodnienie (гидратация), а не furosemid (фуросемид) (diuretyk pętlowy (петлевой диуретик) только после восполнения объёма). Tiazydy (тиазиды) повышают wapń (кальций) и противопоказаны."
                    },
                    {
                        title: "Hipokalcemia i hipomagnezemia (гипокальциемия и гипомагниемия)",
                        what: "Скорректированный wapń (кальций) <2.1–2.2 ммоль/л; magnez (магний) <0.7 ммоль/л.",
                        where: "Szczeklik -> Nefrologia -> Zaburzenia gospodarki wapniowej i magnezowej.",
                        study: "Hipokalcemia (гипокальциемия): после tyreoidektomii (тиреоидэктомии) (самая частая причина niedoczynności przytarczyc (гипопаратиреоза)), niedobór witaminy D (дефицит витамина D), PChN (ХБП), OZT (острый панкреатит), masywne przetoczenie krwi (массивная трансфузия) (cytrynian — цитрат), rabdomioliza (рабдомиолиз), zespół rozpadu guza (лизис опухоли), zespół głodnych kości (синдром «голодных костей»). Симптомы: parestezje wokół ust (периоральные парестезии), tężyczka (тетания), objawy Chvostka i Trousseau (признаки Хвостека и Труссо), skurcz krtani (ларингоспазм), drgawki (судороги), wydłużenie QT (удлинение QT). Острое лечение: 10% glukonian wapnia (кальция глюконат) 10–20 мл i.v. за 10 мин, затем инфузия. Hipomagnezemia (гипомагниемия): длительный приём IPP (ИПП), diuretyki (диуретики), alkoholizm (алкоголизм), biegunka (диарея), cisplatyna (цисплатин), aminoglikozydy (аминогликозиды); лечение siarczan magnezu (MgSO4) i.v. или magnez p.o.",
                        focus: "Hipomagnezemia нарушает секрецию PTH — hipokalcemia и hipokaliemia (гипокалиемия) не корректируются, пока не восполнен magnez (магний)."
                    },
                    {
                        title: "Hipernatremia; SIADH a mózgowy zespół utraty soli (гипернатриемия; SIADH или церебральная потеря соли)",
                        what: "Hipernatremia (гипернатриемия) — Na+ >145 ммоль/л, чаще niedobór wody (дефицит воды); SIADH и CSW — mózgowy zespół utraty soli (церебральная потеря соли) — две причины hiponatremii (гипонатриемии) с высоким Na+ мочи, различающиеся объёмом.",
                        where: "Szczeklik -> Nefrologia -> Zaburzenia gospodarki sodowej.",
                        study: "Hipernatremia: пожилые без доступа к воде, moczówka prosta (несахарный диабет), diureza osmotyczna (осмотический диурез), потери с потом и стулом; niedobór wody (дефицит воды) = całkowita woda ustrojowa (общая вода организма) × (Na+/140 − 1); хроническую корригируют не быстрее ~10 ммоль/л за сутки (риск obrzęku mózgu — отёка мозга), растворы — вода p.o., 5% glukoza (глюкоза), 0.45% NaCl, при wstrząsie (шоке) сначала 0.9% NaCl. SIADH: euwolemia (эуволемия), osmolalność (осмоляльность) плазмы <275, мочи >100 мОсм/кг, Na+ мочи >30 ммоль/л, нормальные TSH (ТТГ) и kortyzol (кортизол); причины — SCLC — drobnokomórkowy rak płuca (мелкоклеточный рак лёгкого), choroby OUN (болезни ЦНС), zapalenie płuc (пневмония), karbamazepina (карбамазепин), SSRI; лечение — ograniczenie płynów (ограничение жидкости), затем таблетки NaCl, mocznik (мочевина), tolwaptan (толваптан). CSW: hipowolemia (гиповолемия) после SAH (САК)/нейрохирургии; лечение — NaCl 0.9% или hipertoniczny (гипертонический), fludrokortyzon (флудрокортизон).",
                        focus: "Ograniczenie płynów (ограничение жидкости) при CSW ухудшает hipowolemię (гиповолемию) и skurcz naczyń (вазоспазм) после SAH (САК) — ключевое отличие в тактике. Ciężka objawowa hiponatremia (тяжёлая симптомная гипонатриемия): 150 мл 3% NaCl за 20 мин, повтор до цели +5 ммоль/л."
                    },
                    {
                        title: "Podstawy płynoterapii (основы инфузионной терапии)",
                        what: "Выбор płynu (раствора) и объёма для resuscytacji płynowej (реанимации), замещения потерь и поддержания.",
                        where: "Szczeklik -> Nefrologia -> Płynoterapia; NICE CG174 (IV fluid therapy in adults).",
                        study: "0.9% NaCl (Na+ и Cl− по 154 ммоль/л) в больших объёмах даёт kwasicę hiperchloremiczną (гиперхлоремический ацидоз); płyny zbilansowane (сбалансированные растворы) (płyn Ringera z mleczanami (Рингер-лактат), PlasmaLyte (Плазмалит)) ближе к плазме и предпочтительны при resuscytacji (реанимации). Из 1 л krystaloidu (кристаллоида) в сосудах остаётся ~1/4, из 1 л 5% glukozy (глюкозы) — около 1/12 (свободная вода). Поддержание у взрослого: вода 25–30 мл/кг/сут, Na+ и K+ по ~1 ммоль/кг/сут, glukoza 50–100 г/сут. HES — hydroksyetylowana skrobia (ГЭК) противопоказан при sepsie (сепсисе), AKI и у критических больных.",
                        focus: "5% glukoza (глюкоза) не является раствором для восполнения objętości krwi krążącej (ОЦК). Płyny hipotoniczne (гипотонические растворы) после операций и у детей провоцируют hiponatremię (гипонатриемию)."
                    }
                ]
            },
            {
                title: "Ср: Гепатология II — MASLD, ALD, метаболические болезни, варикоз, ГЦК (Choroby wątroby II)",
                id: "int-watroba-3",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Gastroenterologia -> Choroby wątroby",
                popup: { what: "Stłuszczeniowa choroba wątroby (стеатотическая болезнь печени), alkoholowe zapalenie wątroby (алкогольный гепатит), hemochromatoza (гемохроматоз), choroba Wilsona (болезнь Вильсона), AIH — autoimmunologiczne zapalenie wątroby (АИГ), zespół Gilberta (Жильбер), krwawienie z żylaków (кровотечение из варикоза), HCC — rak wątrobowokomórkowy (ГЦК), ostra niewydolność wątroby (острая печёночная недостаточность).", focus: "Wskaźnik Maddreya (индекс Мэддрея) ≥32 → prednizolon (преднизолон); пакет лечения krwawienia z żylaków (кровотечения из варикоза); наблюдение за HCC (ГЦК) при marskości (циррозе).", reading: "Szczeklik -> Gastroenterologia -> Choroby wątroby; Baveno VII (2022); Wytyczne EASL (MASLD 2024, HCC, ALF); PTGHiŻD." },
                subtopics: [
                    {
                        title: "MASLD i MASH — stłuszczeniowa choroba wątroby związana z dysfunkcją metaboliczną (метаболически ассоциированная стеатотическая болезнь печени)",
                        what: "Stłuszczenie wątroby (стеатоз печени) + ≥1 кардиометаболический критерий без другой причины; новое название NAFLD/NASH с 2023 г.",
                        where: "Wytyczne EASL-EASD-EASO 2024 (MASLD); Szczeklik -> Gastroenterologia -> Choroby wątroby.",
                        study: "Кардиометаболические критерии: BMI (ИМТ) ≥25 или obwód talii (окружность талии) >94/80 см; glikemia na czczo (глюкоза натощак) ≥100 мг/дл, HbA1c ≥5.7% или cukrzyca typu 2 (СД второго типа); ciśnienie tętnicze (АД) ≥130/85 или лечение; TG — triglicerydy (ТГ) ≥150 мг/дл; HDL (ЛПВП) <40 (М)/<50 (Ж) мг/дл. MetALD — MASLD + умеренный алкоголь. Стратификация włóknienia (фиброза): FIB-4 (<1.3 — низкий риск, >2.67 — высокий), затем elastografia (эластография) (<8 кПа — низкий риск). Лечение: снижение массы на 7–10% (≥10% — регресс włóknienia), dieta śródziemnomorska (средиземноморская диета), нагрузка; при MASH bez marskości (нецирротическом MASH) F2–F3 — resmetirom (резметиром) (условная регистрация Komisji Europejskiej (ЕК), август 2025); semaglutyd (семаглутид) при MASH — положительное мнение CHMP, окончательный статус регистрации в ЕС сверить.",
                        focus: "Главная причина смерти при MASLD — choroby sercowo-naczyniowe (сердечно-сосудистые заболевания), а не печень. Основной прогностический фактор — stopień włóknienia (стадия фиброза), а не степень stłuszczenia (стеатоза). В вопросах CEM прошлых лет — термины NAFLD/NASH."
                    },
                    {
                        title: "Alkoholowa choroba wątroby i wskaźnik Maddreya (алкогольная болезнь печени, индекс Мэддрея)",
                        what: "Спектр от stłuszczenia (стеатоза) до marskości (цирроза); alkoholowe zapalenie wątroby (алкогольный гепатит) — острая żółtaczka (желтуха) на фоне злоупотребления алкоголем.",
                        where: "Szczeklik -> Gastroenterologia -> Alkoholowa choroba wątroby; Wytyczne EASL (ALD).",
                        study: "AST/ALT >1.5–2, AST обычно <400 j./l (Ед/л), повышены GGT и MCV; alkoholowe zapalenie wątroby (алкогольный гепатит) — żółtaczka (желтуха) в течение 8 недель у пьющего много >6 месяцев, gorączka (лихорадка), leukocytoza (лейкоцитоз), hepatomegalia (гепатомегалия). Wskaźnik Maddreya (индекс Мэддрея) = 4.6 × (PT pacjenta − PT kontroli (ПВ пациента − ПВ контроля), с) + bilirubina (билирубин) (мг/дл); ≥32 — тяжёлый: prednizolon (преднизолон) 40 мг/сут 28 дней при отсутствии zakażenia (инфекции), krwawienia (кровотечения) и AKI. Skala Lille (шкала Лилля) на 7-й день (≥0.45 — нет ответа, GKS (ГКС) отменить). Основа лечения — abstynencja (абстиненция).",
                        focus: "Перед GKS (ГКС) исключить zakażenie (инфекцию). Pentoksyfilina (пентоксифиллин) больше не рекомендуется. Для поддержки abstynencji (абстиненции) при marskości (циррозе) — baklofen (баклофен) или akamprozat (акампросат); disulfiram (дисульфирам) и naltrekson (налтрексон) при болезни печени избегают."
                    },
                    {
                        title: "Hemochromatoza, choroba Wilsona, AIH, zespół Gilberta (гемохроматоз, Вильсон, АИГ, Жильбер)",
                        what: "Генетические и аутоиммунные причины przewlekłego uszkodzenia wątroby (хронического поражения печени) и izolowanej hiperbilirubinemii (изолированной гипербилирубинемии).",
                        where: "Szczeklik -> Gastroenterologia -> Choroby wątroby -> Choroby metaboliczne i autoimmunologiczne.",
                        study: "Hemochromatoza (гемохроматоз) (HFE C282Y, аутосомно-рецессивно): wysycenie transferyny (насыщение трансферрина) >45% — самый ранний маркер, высокая ferrytyna (ферритин); artropatia (артропатия) II–III пястно-фаланговых суставов, cukrzyca brązowa («бронзовый диабет»), marskość (цирроз), kardiomiopatia (КМП), hipogonadyzm (гипогонадизм); лечение — upusty krwi (кровопускания) до ferrytyny 50–100 мкг/л. Choroba Wilsona (ATP7B, аутосомно-рецессивно, 5–35 лет): низкая ceruloplazmina (церулоплазмин), высокая miedź w dobowej zbiórce moczu (медь в суточной моче), pierścień Kaysera-Fleischera (кольца Кайзера-Флейшера), неврологические и психиатрические симптомы, hemoliza z ujemnym odczynem Coombsa (Кумбс-отрицательный гемолиз) при ostrej niewydolności wątroby (ОПН); лечение — D-penicylamina (пеницилламин), trientyna (триентин), cynk (цинк). AIH (АИГ): женщины, высокий IgG, ANA/ASMA (тип 1) или anti-LKM-1 (тип 2); prednizolon (преднизолон) + azatiopryna (азатиоприн). Zespół Gilberta: hiperbilirubinemia pośrednia (непрямая гипербилирубинемия), растущая при голодании, стрессе и инфекции, при нормальных остальных пробах — лечения не требует.",
                        focus: "Высокая ferrytyna (ферритин) без высокого wysycenia transferyny (насыщения трансферрина) чаще отражает stan zapalny (воспаление) или MASLD, а не hemochromatozę. Zespół Gilberta (Жильбер) повышает токсичность irynotekanu (иринотекана)."
                    },
                    {
                        title: "Krwawienie z żylaków przełyku (кровотечение из варикозных вен пищевода)",
                        what: "Жизнеугрожающее осложнение nadciśnienia wrotnego (портальной гипертензии) при marskości (циррозе).",
                        where: "Baveno VII (2022); Szczeklik -> Gastroenterologia -> Nadciśnienie wrotne.",
                        study: "Сразу при подозрении: lek wazoaktywny (вазоактивный препарат) — terlipresyna (терлипрессин) (или somatostatyna/oktreotyd — соматостатин/октреотид) на 2–5 дней; antybiotykoprofilaktyka (антибиотикопрофилактика) ceftriaksonem (цефтриаксон) 1 г/сут до 7 дней; restrykcyjne przetaczanie (рестриктивная трансфузия) до Hb 7–8 г/дл; endoskopia (эндоскопия) ≤12 ч после стабилизации с opaskowaniem żylaków (лигированием варикозных узлов) (EVL). Wczesny TIPS (упреждающий TIPS) ≤72 ч у высокого риска (Child-Pugh C 10–13 или B >7 с активным кровотечением на endoskopii); sonda Sengstakena-Blakemore'a (зонд Сенгстакена-Блэкмора) или stent — мост при неконтролируемом кровотечении. Профилактика: первичная — nieselektywny β-bloker (неселективный β-блокатор) (propranolol — пропранолол) или karwedilol (карведилол) (Baveno VII предпочитает karwedilol при klinicznie istotnym nadciśnieniu wrotnym (клинически значимой портальной гипертензии)), при противопоказаниях — EVL; вторичная — β-bloker + EVL.",
                        focus: "Переливание до «нормального» Hb повышает ciśnienie wrotne (портальное давление) и риск повторного кровотечения. Antybiotyk (антибиотик) при кровотечении у больного marskością (циррозом) снижает смертность — это не опция, а стандарт."
                    },
                    {
                        title: "Rak wątrobowokomórkowy i ostra niewydolność wątroby (ГЦК и острая печёночная недостаточность)",
                        what: "HCC — rak wątrobowokomórkowy (ГЦК) — первичный рак печени, чаще на фоне marskości (цирроза); ostra niewydolność wątroby (ОПН) — koagulopatia (коагулопатия) (INR ≥1.5) и encefalopatia (энцефалопатия) у пациента без предшествующей marskości, <26 недель.",
                        where: "Wytyczne EASL (HCC, ALF); Szczeklik -> Gastroenterologia -> Nowotwory wątroby, Ostra niewydolność wątroby.",
                        study: "Наблюдение: USG (УЗИ) каждые 6 месяцев при marskości (циррозе) (и у отдельных носителей HBV без marskości), ± AFP. Диагноз при marskości без biopsji (биопсии): guzek (узел) ≥1 см с артериальным усилением и «вымыванием» (wash-out) в портальную/отсроченную фазу на wielofazowej TK (многофазной КТ) или MR (МРТ). BCLC 0/A — resekcja (резекция), ablacja (абляция), przeszczepienie wątroby (трансплантация) (kryteria mediolańskie (миланские критерии): 1 узел ≤5 см или до 3 узлов ≤3 см, без naciekania naczyń (сосудистой инвазии)); B — TACE; C — atezolizumab (атезолизумаб) + bewacyzumab (бевацизумаб). Ostra niewydolność wątroby: paracetamol (парацетамол), вирусы (HBV, HAV, HEV у беременных), leki (препараты), choroba Wilsona, AIH, zespół Budda-Chiariego (Бадда-Киари), muchomor sromotnikowy (бледная поганка); OIT (ОРИТ), NAC — N-acetylocysteina, раннее направление в ośrodek transplantacyjny (центр трансплантации) (kryteria King's College).",
                        focus: "Нормальный AFP не исключает HCC (ГЦК), поэтому основа наблюдения — USG (УЗИ). При ostrej niewydolności wątroby (ОПН) osocze świeżo mrożone (свежезамороженная плазма) без кровотечения рутинно не дают — INR нужен как прогностический показатель."
                    }
                ]
            },
            {
                title: "Чт: Гемостаз — skazy krwotoczne i zakrzepowe (ITP, hemofilia, vWD, DIC, TTP, HIT)",
                id: "int-hemostaza",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Hematologia -> Skazy krwotoczne i zakrzepowe",
                popup: { what: "Интерпретация PT/APTT, małopłytkowości (тромбоцитопении), wrodzone koagulopatie (наследственные коагулопатии), mikroangiopatie zakrzepowe (микроангиопатии), HIT и trombofilie (тромбофилии).", focus: "Какой тест удлиняется при каком дефекте; TTP — zakrzepowa plamica małopłytkowa (ТТП) против DIC — rozsiane wykrzepianie wewnątrznaczyniowe (ДВС); действия при HIT.", reading: "Szczeklik -> Hematologia -> Skazy krwotoczne, Małopłytkowości, Trombofilie." },
                subtopics: [
                    {
                        title: "Interpretacja badań układu krzepnięcia: PT/INR i APTT (интерпретация коагулограммы)",
                        what: "PT/INR отражает zewnątrzpochodny (внешний) (VII) и общий путь; APTT — wewnątrzpochodny (внутренний) (XII, XI, IX, VIII) и общий путь.",
                        where: "Szczeklik -> Hematologia -> Badania układu krzepnięcia.",
                        study: "Изолированно удлинён PT: VKA, ранний niedobór witaminy K (дефицит витамина K), choroba wątroby (болезнь печени) (у czynnika VII (фактора VII) короткий период полужизни). Изолированно удлинён APTT: hemofilia A/B (гемофилия), heparyna niefrakcjonowana (нефракционированный гепарин), иногда choroba von Willebranda (болезнь фон Виллебранда), antykoagulant toczniowy (волчаночный антикоагулянт), niedobór czynnika XII (дефицит фактора XII) (без кровоточивости). Оба: DIC (ДВС), ciężka niewydolność wątroby (тяжёлая печёночная недостаточность), выраженный niedobór witaminy K, дефицит X, V, II или fibrynogenu (фибриногена), masywne przetoczenie (массивная трансфузия). Test mieszania osocza (тест смешивания): коррекция — niedobór czynnika (дефицит фактора), без коррекции — inhibitor (ингибитор).",
                        focus: "Antykoagulant toczniowy (волчаночный антикоагулянт) удлиняет APTT in vitro, но клинически вызывает zakrzepicę (тромбозы), а не кровотечения. Wybroczyny (петехии) и krwawienia z błon śluzowych (кровоточивость слизистых) — skaza płytkowa (тромбоцитарный тип), wylewy dostawowe (гемартрозы) и krwiaki (гематомы) — skaza osoczowa (коагуляционный тип)."
                    },
                    {
                        title: "Małopłytkowość immunologiczna, ITP (иммунная тромбоцитопения)",
                        what: "Izolowana małopłytkowość (изолированная тромбоцитопения) <100 G/l (Г/л) аутоиммунного генеза; диагноз исключения.",
                        where: "Szczeklik -> Hematologia -> Małopłytkowość immunologiczna.",
                        study: "Исключить małopłytkowość rzekomą (псевдотромбоцитопению) (агрегация в EDTA — повтор с cytrynianem (цитратом)), HIV (ВИЧ), HCV, H. pylori, лекарства. Лечение при płytkach (тромбоцитах) <20–30 G/l или кровотечении: GKS (ГКС) (prednizon (преднизон) 1 мг/кг или deksametazon (дексаметазон) 40 мг 4 дня); IVIG — для быстрого подъёма (кровотечение, перед операцией); вторая линия — agoniści receptora trombopoetyny (агонисты рецептора тромбопоэтина) (eltrombopag (элтромбопаг), romiplostym (ромиплостим)), rytuksymab (ритуксимаб), splenektomia (спленэктомия) (szczepienie (вакцинация) против pneumokoków, meningokoków, Hib до операции).",
                        focus: "Przetoczenie koncentratu krwinek płytkowych (переливание тромбоцитов) — только при жизнеугрожающем кровотечении. У детей ITP чаще ostra poinfekcyjna (острая постинфекционная) и проходит сама, у взрослых — przewlekła (хроническая)."
                    },
                    {
                        title: "Hemofilia A/B i choroba von Willebranda (гемофилия и болезнь фон Виллебранда)",
                        what: "Hemofilia (гемофилия) — sprzężony z chromosomem X (сцепленный с X) niedobór czynnika VIII (дефицит фактора VIII) (A) или IX (B); choroba von Willebranda (болезнь фон Виллебранда) — самая частая wrodzona skaza krwotoczna (наследственная коагулопатия).",
                        where: "Szczeklik -> Hematologia -> Skazy osoczowe.",
                        study: "Hemofilia: мужчины, wylewy dostawowe (гемартрозы), krwiaki mięśniowe (мышечные гематомы); APTT удлинён, PT и płytki (тромбоциты) в норме. Лечение: koncentraty czynników (концентраты факторов) (профилактически), emicizumab (эмицизумаб) при hemofilii A, desmopresyna (десмопрессин) при лёгкой hemofilii A. Choroba von Willebranda (чаще тип 1, аутосомно-доминантно): krwawienia z błon śluzowych (кровоточивость слизистых), obfite miesiączki (меноррагии); снижены VWF:Ag и активность VWF, APTT нормальный или удлинён (из-за низкого VIII). Лечение: desmopresyna (тип 1), koncentraty zawierające VWF (концентраты с VWF), kwas traneksamowy (транексамовая кислота).",
                        focus: "При hemofilii противопоказаны iniekcje i.m. (в/м инъекции), ASA — kwas acetylosalicylowy (аспирин) и NLPZ (НПВП). Desmopresyna противопоказана при типе 2B (усиливает małopłytkowość — тромбоцитопению)."
                    },
                    {
                        title: "DIC, zakrzepowa plamica małopłytkowa, zespół hemolityczno-mocznicowy (ДВС, ТТП и ГУС)",
                        what: "DIC — rozsiane wykrzepianie wewnątrznaczyniowe (ДВС) — генерализованная активация свёртывания с потреблением факторов; TTP (ТТП) и HUS (ГУС) — mikroangiopatie zakrzepowe (тромботические микроангиопатии).",
                        where: "Szczeklik -> Hematologia -> DIC, Mikroangiopatie zakrzepowe.",
                        study: "DIC (sepsa (сепсис), uraz (травма), nowotwory (опухоли), ostra białaczka promielocytowa (острый промиелоцитарный лейкоз), położnictwo (акушерство)): małopłytkowość (тромбоцитопения), удлинение PT и APTT, низкий fibrynogen (фибриноген), высокие D-dimery (Д-димер); лечение причины, składniki krwi (компоненты) — только при кровотечении или вмешательстве. TTP (ТТП): активность ADAMTS13 <10%, niedokrwistość hemolityczna mikroangiopatyczna (микроангиопатическая гемолитическая анемия) со schistocytami (шистоцитами) + małopłytkowość ± неврологические симптомы, поражение почек, gorączka (лихорадка); PT и APTT нормальные; срочно — plazmafereza (плазмаферез) + GKS (ГКС) (+ kaplacyzumab (каплацизумаб), rytuksymab (ритуксимаб)). HUS typowy (типичный ГУС): STEC (E. coli O157:H7), дети, krwawa biegunka (кровавая диарея), AKI — поддерживающее лечение; atypowy (атипичный) (dopełniacz — комплемент) — ekulizumab (экулизумаб).",
                        focus: "Schistocyty (шистоциты) + małopłytkowość (тромбоцитопения) при НОРМАЛЬНЫХ PT/APTT — TTP/HUS, при удлинённых — DIC. Przetoczenie płytek (переливание тромбоцитов) при TTP относительно противопоказано; при typowym HUS antybiotyki (антибиотики) не дают."
                    },
                    {
                        title: "Małopłytkowość wywołana heparyną (HIT) i trombofilie (гепарин-индуцированная тромбоцитопения, тромбофилии)",
                        what: "HIT — иммунная (IgG против комплекса PF4-heparyna) małopłytkowość (тромбоцитопения) с высоким риском zakrzepicy (тромбозов); trombofilie (тромбофилии) — наследственная или приобретённая склонность к тромбозам.",
                        where: "Szczeklik -> Hematologia -> Małopłytkowość poheparynowa, Trombofilie.",
                        study: "HIT: падение płytek (тромбоцитов) >50% через 5–10 дней от начала heparyny (гепарина) (раньше — при недавнем контакте), zakrzepica (тромбозы); чаще при heparynie niefrakcjonowanej (нефракционированном гепарине) и у хирургических больных. Skala 4T (шкала) (małopłytkowość, czas, zakrzepica, inne przyczyny — тромбоцитопения, время, тромбоз, другие причины): 0–3 — низкая вероятность, 4–5 — промежуточная, 6–8 — высокая. При промежуточной/высокой: отменить ВСЮ heparynę (включая промывки), начать lek przeciwkrzepliwy niebędący heparyną (негепариновый антикоагулянт) (argatroban (аргатробан), biwalirudyna (бивалирудин), fondaparynuks (фондапаринукс) или DOAC), тест на przeciwciała anty-PF4 (антитела). Trombofilie: czynnik V Leiden (фактор V Лейден) (самая частая наследственная у европейцев), protrombina G20210A (протромбин), niedobór antytrombiny (дефицит антитромбина), białek C i S (протеинов C и S), APS — zespół antyfosfolipidowy (АФС).",
                        focus: "VKA при HIT не начинают до płytek (тромбоцитов) ≥150 G/l (риск zgorzeli żylnej — венозной гангрены), przetoczenie płytek (переливание тромбоцитов) не показано. Trombofilię (тромбофилию) не исследуют в острой фазе и на lekach przeciwkrzepliwych (антикоагулянтах) — искажаются białka C, S и antytrombina."
                    }
                ]
            },
            {
                title: "Пт: Антикоагулянты и миелопролиферативные новообразования (Leczenie przeciwkrzepliwe, nowotwory mieloproliferacyjne)",
                id: "int-antykoagulacja",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Hematologia -> Leczenie przeciwkrzepliwe i nowotwory mieloproliferacyjne",
                popup: { what: "VKA, NOAC и heparyny (гепарины): показания, дозы, odwracanie działania (реверсия), postępowanie okołooperacyjne (периоперационное ведение); czerwienica prawdziwa (истинная полицитемия), nadpłytkowość samoistna (эссенциальная тромбоцитемия), włóknienie szpiku (миелофиброз).", focus: "Przeciwwskazania (противопоказания) к NOAC, антидоты каждого класса, когда terapia pomostowa (bridging) не нужна.", reading: "Szczeklik -> Choroby układu krążenia -> Leczenie przeciwkrzepliwe; EHRA Practical Guide (NOAC); Szczeklik -> Hematologia -> Nowotwory mieloproliferacyjne." },
                subtopics: [
                    {
                        title: "Antagoniści witaminy K — acenokumarol, warfaryna (антагонисты витамина K)",
                        what: "Doustne leki przeciwkrzepliwe (пероральные антикоагулянты), подавляющие синтез czynników (факторов) II, VII, IX, X; в Польше чаще используется acenokumarol (аценокумарол).",
                        where: "Szczeklik -> Leczenie przeciwkrzepliwe -> VKA.",
                        study: "Целевой INR 2–3: AF — migotanie przedsionków (ФП), ŻChZZ (ВТЭ), APS (АФС); 2.5–3.5: mechaniczna zastawka mitralna (механический митральный клапан), mechaniczna zastawka aortalna (механический аортальный) с факторами риска (точная цель по ESC зависит от типа протеза). Odwracanie (реверсия): INR выше цели без кровотечения — пропустить дозу; INR >10 без кровотечения — witamina K (витамин K) p.o.; poważne krwawienie (большое кровотечение) — koncentrat czynników zespołu protrombiny (концентрат протромбинового комплекса) (PCC) + witamina K 5–10 мг i.v., osocze świeżo mrożone (свежезамороженная плазма) — если нет PCC. Повышают INR: amiodaron (амиодарон), flukonazol (флуконазол), metronidazol (метронидазол), kotrimoksazol (котримоксазол), makrolidy (макролиды); снижают: ryfampicyna (рифампицин), karbamazepina (карбамазепин), пища с witaminą K.",
                        focus: "Witamina K (витамин K) i.v. действует через 6–12 ч, поэтому при poważnym krwawieniu (большом кровотечении) нужен PCC. Warfaryna (варфарин) teratogenna (тератогенна) (6–12 неделя). В начале терапии при niedoborze białka C (дефиците протеина C) возможна martwica skóry (некроз кожи)."
                    },
                    {
                        title: "NOAC — doustne antykoagulanty niebędące antagonistami witaminy K: wskazania, przeciwwskazania, dawki, antidota (показания, противопоказания, дозы, антидоты)",
                        what: "Dabigatran (дабигатран) (bezpośredni inhibitor trombiny — прямой ингибитор тромбина) и rywaroksaban, apiksaban, edoksaban (ривароксабан, апиксабан, эдоксабан) (inhibitory czynnika Xa — ингибиторы фактора Xa).",
                        where: "EHRA Practical Guide on NOAC; Wytyczne ESC 2024 (AF).",
                        study: "Показания: AF — migotanie przedsionków (ФП) без mechanicznej zastawki (механического клапана) и umiarkowanej/ciężkiej stenozy mitralnej (умеренного/тяжёлого митрального стеноза), лечение и профилактика ŻChZZ (ВТЭ). Противопоказаны: mechaniczna zastawka, umiarkowana/ciężka (reumatyczna) stenoza mitralna, ciąża (беременность) и laktacja (лактация), potrójnie dodatni APS (тройная позитивность при АФС), ciężka niewydolność wątroby (тяжёлая печёночная недостаточность), CrCl <15 мл/мин (dabigatran <30). Снижение доз при AF: apiksaban 2.5 мг 2 раза при ≥2 из: возраст ≥80, масса ≤60 кг, kreatynina (креатинин) ≥1.5 мг/дл; rywaroksaban 15 мг при CrCl 15–49; edoksaban 30 мг при CrCl 15–50, массе ≤60 кг или inhibitorach P-gp (ингибиторах P-gp); dabigatran 110 мг 2 раза при возрасте ≥80 или с werapamilem (верапамил). Antidota (антидоты): idarucyzumab (идаруцизумаб) 5 г i.v. (dabigatran), andeksanet alfa (андексанет альфа) (apiksaban, rywaroksaban), при их отсутствии — PCC.",
                        focus: "CrCl считают по wzorze Cockcrofta-Gaulta (формула Кокрофта-Голта), а не по eGFR. Bioproteza (биопротез) (>3 месяцев после имплантации), stenoza aortalna (аортальный стеноз) и niedomykalność mitralna (митральная недостаточность) — НЕ przeciwwskazanie (противопоказание) к NOAC."
                    },
                    {
                        title: "Heparyny i postępowanie okołooperacyjne (гепарины и периоперационное ведение)",
                        what: "Heparyna niefrakcjonowana (нефракционированный гепарин, НФГ) и heparyny drobnocząsteczkowe (низкомолекулярные гепарины) (HDCz); перерыв в leczeniu przeciwkrzepliwym (антикоагуляции) перед операцией.",
                        where: "Szczeklik -> Leczenie przeciwkrzepliwe -> Heparyny; EHRA Practical Guide (NOAC); ACCP 2022 (perioperative).",
                        study: "Heparyna niefrakcjonowana — HNF (НФГ): контроль по APTT (1.5–2.5 × норма), полная реверсия protaminą (протамином) (1 мг на 100 j.m. (ЕД) введённого за последние 2–3 ч). HDCz — heparyny drobnocząsteczkowe (НМГ) (enoksaparyna (эноксапарин) 1 мг/кг 2 раза или 1.5 мг/кг 1 раз): контроль anty-Xa при PChN (ХБП), ciąży (беременности), otyłości (ожирении); protamina нейтрализует лишь частично; при CrCl <30 — снижение дозы или HNF. NOAC перед операцией: inhibitory Xa (ингибиторы Xa) отменяют за 24 ч (низкий риск кровотечения) или 48 ч (высокий), dabigatran (дабигатран) дольше при снижении CrCl. VKA: acenokumarol (аценокумарол) отменяют за ~3 дня, warfaryna (варфарин) за 5 дней, INR накануне.",
                        focus: "Terapia pomostowa (bridging) НЕ нужна никогда при NOAC и у большинства больных AF (ФП) на VKA (исследование BRIDGE: больше кровотечений без снижения powikłań zakrzepowo-zatorowych (тромбоэмболий)); рассматривают при mechanicznej zastawce mitralnej (механическом митральном клапане), ŻChZZ (ВТЭ) или udarze mózgu (инсульте) <3 месяцев назад. Ekstrakcja zęba (экстракция зуба), zaćma (катаракта), мелкие кожные вмешательства — без прерывания VKA."
                    },
                    {
                        title: "Czerwienica prawdziwa (истинная полицитемия)",
                        what: "Nowotwór mieloproliferacyjny (миелопролиферативное новообразование) с клональным увеличением эритроцитарной массы, mutacja JAK2 V617F (мутация) у ~95%.",
                        where: "Szczeklik -> Hematologia -> Nowotwory mieloproliferacyjne -> Czerwienica prawdziwa.",
                        study: "Критерии WHO: Hb >16.5 г/дл у мужчин и >16 г/дл у женщин (или Ht >49%/48%), panmieloza (панмиелоз) в szpiku kostnym (костном мозге), mutacja JAK2; малый критерий — низкий EPO (erytropoetyna — эритропоэтин). Клиника: świąd skóry (кожный зуд) после горячей воды, pletora (плетора), erytromelalgia (эритромелалгия), zakrzepica (тромбозы) (включая zespół Budda-Chiariego (Бадда-Киари)), splenomegalia (спленомегалия). Лечение: upusty krwi (флеботомии) до Ht <45%, низкая доза ASA (аспирина) всем; высокий риск (возраст ≥60 или zakrzepica w wywiadzie (тромбоз в анамнезе)) — cytoredukcja (циторедукция) hydroksymocznikiem (гидроксимочевина) или interferonem alfa (интерферон альфа).",
                        focus: "Erytrocytoza wtórna (вторичный эритроцитоз) (hipoksja (гипоксия), palenie (курение), OBPS — obturacyjny bezdech podczas snu (ОАС), guz nerki (опухоль почки) с продукцией EPO, testosteron (тестостерон)) — EPO высокий или нормальный, JAK2 отрицательный."
                    },
                    {
                        title: "Nadpłytkowość samoistna i pierwotne włóknienie szpiku (эссенциальная тромбоцитемия и первичный миелофиброз)",
                        what: "Nowotwory mieloproliferacyjne (миелопролиферативные новообразования) с nadpłytkowością (тромбоцитозом) (ET) или włóknieniem szpiku (фиброзом костного мозга) (PMF).",
                        where: "Szczeklik -> Hematologia -> Nowotwory mieloproliferacyjne.",
                        study: "ET: płytki (тромбоциты) ≥450 G/l, мутации JAK2 (~55–60%), CALR (~25%), MPL; исключить nadpłytkowość reaktywną (реактивный тромбоцитоз) (niedobór żelaza (дефицит железа), stan zapalny (воспаление), после splenektomii (спленэктомии), krwawienie (кровотечение)) и CML — przewlekła białaczka szpikowa (ХМЛ) (BCR-ABL1). Лечение: ASA (аспирин) у большинства; высокий риск (возраст >60, zakrzepica (тромбоз)) — hydroksymocznik (гидроксимочевина), вторая линия — anagrelid (анагрелид). PMF: masywna splenomegalia (массивная спленомегалия), hematopoeza pozaszpikowa (внекостномозговое кроветворение), obraz leukoerytroblastyczny (лейкоэритробластическая картина) с dakrocytami (каплевидными эритроцитами), «sucha» biopsja aspiracyjna (сухая пункция); лечение — ruksolitynib (руксолитиниб) (симптомы, селезёнка), излечивает только allogeniczne przeszczepienie komórek krwiotwórczych (аллогенная трансплантация).",
                        focus: "При płytkach (тромбоцитах) >1000–1500 G/l развивается nabyty zespół von Willebranda (приобретённый синдром фон Виллебранда) — ASA (аспирин) повышает риск кровотечения. «Sucha» biopsja (сухая пункция) + dakrocyty (дакроциты) — włóknienie szpiku (миелофиброз)."
                    }
                ]
            },
            {
                title: "Сб: Тест по нефрологии II, гепатологии II и гемостазу",
                id: "int-8-test",
                time: "1.5 ч",
                lepolekPath: "Testy -> Nefrologia, hepatologia i hematologia (40 pytań CEM)",
                popup: { what: "Контрольный тест недели: ZUM (инфекции мочевых путей), zaburzenia elektrolitowe (электролиты), печень, koagulopatie (коагулопатии), leki przeciwkrzepliwe (антикоагулянты).", focus: "Интерпретация koagulogramów (коагулограмм) и дозы/antidota (антидоты) leków przeciwkrzepliwych (антикоагулянтов).", reading: "Собственный конспект недели и Zeszyt Błędów." },
                subtopics: [
                    {
                        title: "Rozwiązanie 40 pytań CEM (решение вопросов CEM)",
                        what: "Тест по темам недели в режиме экзамена.",
                        where: "LEPOLEK -> Testy -> Nefrologia / Hepatologia / Hematologia.",
                        study: "ZUM (инфекции мочевых путей) и kamica (камни), AKI по KDIGO, potas/wapń/sód (калий/кальций/натрий), MASLD и ALD, krwawienie z żylaków (варикозное кровотечение), HCC (ГЦК), ITP, hemofilia (гемофилия), TTP/DIC (ТТП/ДВС), HIT, VKA и NOAC, nowotwory mieloproliferacyjne (МПН).",
                        focus: "Отмечать вопросы с устаревшей терминологией (NAFLD) и старыми схемами."
                    },
                    {
                        title: "Analiza koagulogramów (разбор коагулограмм)",
                        what: "Таблица «PT / APTT / płytki (тромбоциты) / fibrynogen (фибриноген) → диагноз» по ошибкам теста.",
                        where: "Объяснения LEPOLEK; Szczeklik -> Hematologia.",
                        study: "Проверить себя на 8 паттернов: VKA, HNF (НФГ), hemofilia (гемофилия), choroba von Willebranda (фон Виллебранд), DIC (ДВС), TTP (ТТП), niewydolność wątroby (печёночная недостаточность), antykoagulant toczniowy (волчаночный антикоагулянт).",
                        focus: "Ловушка — нормальные PT/APTT при TTP (ТТП) и удлинённый APTT при APS (АФС) с zakrzepicą (тромбозом)."
                    },
                    {
                        title: "Liczby tygodnia do zapamiętania (закрепление чисел недели)",
                        what: "Карточки Anki по порогам и дозам.",
                        where: "Личные заметки.",
                        study: "KDIGO 1.5/2/3 × kreatyniny (креатинина) и 0.5 мл/кг/ч; wskaźnik Maddreya (Мэддрей) ≥32; endoskopia (эндоскопия) ≤12 ч; Hb 7–8; INR 2–3 / 2.5–3.5; дозы NOAC и критерии их снижения; antidota (антидоты) (protamina (протамин), idarucyzumab (идаруцизумаб), andeksanet (андексанет), PCC + witamina K (витамин K)); 4T 0–3/4–5/6–8; Ht <45% при PV — czerwienica prawdziwa (истинная полицитемия).",
                        focus: "Проверить przeciwwskazania (противопоказания) к NOAC — одна из самых частых тем CEM по leczeniu przeciwkrzepliwym (антикоагуляции)."
                    }
                ]
            }
        ]
    },
    {
        key: "int-9",
        subject: "interna",
        title: "Терапия IX — Эндокринология II, ревматология III и итог терапии",
        days: [
            {
                title: "Пн: Хронические осложнения СД, ожирение, скрининг (Przewlekłe powikłania cukrzycy, otyłość)",
                id: "int-cukrzyca-przewlekle",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Diabetologia -> Przewlekłe powikłania cukrzycy",
                popup: { what: "Retinopatia (ретинопатия), cukrzycowa choroba nerek (нефропатия), neuropatia (нейропатия), zespół stopy cukrzycowej (диабетическая стопа), otyłość (ожирение) и её лечение, badania przesiewowe (скрининг) cukrzycy typu 2 (СД второго типа) по PTD.", focus: "Nefroprotekcja (нефропротекция) (ACEI/ARB, SGLT2, finerenon — финеренон), отличие stopy Charcota (стопа Шарко) от ropowicy (флегмоны), показания к chirurgii bariatrycznej (бариатрии).", reading: "Zalecenia kliniczne PTD (актуальный год) -> Powikłania przewlekłe, Otyłość; KDIGO 2022 (cukrzyca w PChN); Szczeklik -> Diabetologia." },
                subtopics: [
                    {
                        title: "Retinopatia cukrzycowa i neuropatia cukrzycowa (ретинопатия и нейропатия)",
                        what: "Mikroangiopatia (микроангиопатия) сетчатки и поражение периферических и вегетативных нервов при cukrzycy (СД).",
                        where: "Zalecenia PTD -> Retinopatia, Neuropatia; Szczeklik -> Diabetologia.",
                        study: "Badanie dna oka (осмотр глазного дна): при cukrzycy typu 2 (СД второго типа) — при диагнозе, при cukrzycy typu 1 (СД первого типа) — в первые 5 лет от диагноза, далее регулярно с частотой по стадии; у беременных — в I триместре, дальше по решению okulisty (окулиста) (PTD). Стадии: nieproliferacyjna (непролиферативная) (mikrotętniaki (микроаневризмы), wylewy (кровоизлияния), twarde wysięki (твёрдые экссудаты)), przedproliferacyjna (препролиферативная), proliferacyjna (пролиферативная) (neowaskularyzacja — неоваскуляризация) — panfotokoagulacja laserowa (панретинальная лазеркоагуляция); cukrzycowy obrzęk plamki (диабетический макулярный отёк) — anti-VEGF doszklistkowo (интравитреально). Neuropatia (нейропатия): dystalna symetryczna (дистальная симметричная) («skarpetki i rękawiczki» — «носки и перчатки»), ежегодный скрининг monofilamentem (монофиламентом) 10 г и kamertonem (камертоном) 128 Гц; bolesna (болевая) форма — pregabalina (прегабалин), gabapentyna (габапентин), duloksetyna (дулоксетин), amitryptylina (амитриптилин); autonomiczna (вегетативная) — hipotonia ortostatyczna (ортостатическая гипотензия), gastropareza (гастропарез), bezbólowy zawał serca (безболевой ИМ), tachykardia spoczynkowa (тахикардия покоя).",
                        focus: "Быстрое снижение HbA1c (в том числе на semaglutydzie — семаглутид) может временно ухудшить retinopatię (ретинопатию). Bezbólowy zawał serca (безболевой ИМ) у диабетика с neuropatią autonomiczną (вегетативной нейропатией) — типичный сценарий CEM."
                    },
                    {
                        title: "Cukrzycowa choroba nerek (диабетическая болезнь почек)",
                        what: "Albuminuria (альбуминурия) и/или снижение eGFR у больного cukrzycą (СД); ведущая причина schyłkowej PChN (терминальной ХБП).",
                        where: "Zalecenia PTD -> Cukrzycowa choroba nerek; KDIGO 2022 (Diabetes in CKD).",
                        study: "Скрининг: UACR и eGFR ежегодно (cukrzyca typu 2 (СД второго типа) — с момента диагноза, cukrzyca typu 1 (СД первого типа) — через 5 лет от начала). Категории albuminurii (альбуминурии): A1 <30, A2 30–300, A3 >300 мг/г, подтверждение в 2 из 3 проб за 3–6 месяцев. Лечение: ACEI (ингибитор АПФ) или ARB — sartan (сартан) в максимально переносимой дозе при albuminurii; SGLT2 (dapagliflozyna (дапаглифлозин), empagliflozyna (эмпаглифлозин)) при eGFR ≥20 мл/мин/1.73 м² независимо от glikemii (гликемии); finerenon (финеренон) при cukrzycy typu 2, eGFR ≥25, UACR ≥30 мг/г и нормальном K+; agoniści receptora GLP-1 (агонисты) (semaglutyd — семаглутид). Целевое ciśnienie tętnicze (АД) <130/80 mm Hg.",
                        focus: "Комбинация ACEI + ARB запрещена. Рост kreatyniny (креатинина) до 30% после начала ACEI/ARB или SGLT2 допустим и не является поводом для отмены."
                    },
                    {
                        title: "Zespół stopy cukrzycowej i neuroosteoartropatia Charcota (диабетическая стопа, стопа Шарко)",
                        what: "Owrzodzenia (язвы), zakażenie (инфекция) и деструкция тканей стопы на фоне neuropatii (нейропатии) и/или niedokrwienia (ишемии); stopa Charcota (стопа Шарко) — асептическая деструкция костей и суставов при neuropatii.",
                        where: "Zalecenia PTD -> Zespół stopy cukrzycowej; Wytyczne IWGDF.",
                        study: "Neuropatyczna (нейропатическая): тёплая стопа, tętno (пульс) сохранено, bezbolesne owrzodzenie (безболезненная язва) в точках давления (głowy kości śródstopia — головки плюсневых костей). Niedokrwienna (ишемическая): холодная, без tętna, болезненная, owrzodzenia на кончиках пальцев и пятке; ABI — wskaźnik kostka-ramię (ЛПИ) ненадёжен при >1.3 (zwapnienia — кальциноз) — wskaźnik palec-ramię (индекс палец-плечо). Zapalenie kości i szpiku (остеомиелит): zgłębnik dochodzi do kości (probe-to-bone), MR (МРТ). Лечение: odciążenie (разгрузка) (total contact cast), opracowanie chirurgiczne (хирургическая обработка), antybiotyki (антибиотики) только при zakażeniu, rewaskularyzacja (реваскуляризация) при niedokrwieniu. Ostra stopa Charcota (острая стопа Шарко): красная, горячая (разница >2 °C), отёчная, часто безболезненная, RTG (рентген) вначале может быть нормальным — MR; лечение — unieruchomienie (иммобилизация) и odciążenie гипсом.",
                        focus: "Ostrą stopę Charcota (острую стопу Шарко) часто принимают за ropowicę (флегмону) или ZŻG — zakrzepica żył głębokich (ТГВ) — antybiotyk (антибиотик) её не лечит, нужно немедленное odciążenie (разгрузка). Niezakażone owrzodzenie (неинфицированная язва) не требует antybiotyku."
                    },
                    {
                        title: "Otyłość (ожирение)",
                        what: "Хроническое заболевание: BMI (ИМТ) ≥30 кг/м²; otyłość brzuszna (абдоминальное ожирение) — по obwodzie talii (окружности талии).",
                        where: "Zalecenia PTD -> Otyłość; Szczeklik -> Choroby metaboliczne -> Otyłość.",
                        study: "BMI (ИМТ) 25–29.9 — nadwaga (избыточная масса), 30–34.9 — I класс, 35–39.9 — II, ≥40 — III. Obwód talii (окружность талии) ≥94 см у мужчин и ≥80 см у женщин (европейские критерии IDF). Farmakoterapia (фармакотерапия) при BMI ≥30 или ≥27 с осложнениями: semaglutyd (семаглутид) 2.4 мг в неделю, liraglutyd (лираглутид) 3 мг в день, tirzepatyd (тирзепатид) (agonista GIP/GLP-1 — агонист GIP/GLP) до 15 мг в неделю, naltrekson/bupropion (налтрексон/бупропион), orlistat (орлистат). Chirurgia bariatryczna (бариатрия): классически BMI ≥40 или ≥35 с осложнениями; ASMBS/IFSO 2022 — BMI ≥35 независимо от осложнений и ≥30 при cukrzycy typu 2 (СД второго типа) или метаболических нарушениях.",
                        focus: "Agoniści receptora GLP-1 (агонисты) противопоказаны при rak rdzeniasty tarczycy (медуллярный рак щитовидной железы) или MEN2 в анамнезе, zapaleniu trzustki (панкреатите), ciąży (беременности). После chirurgii bariatrycznej (бариатрии) — пожизненный контроль witaminy B12 (витамина), żelaza (железа), wapnia (кальция) и witaminy D."
                    },
                    {
                        title: "Badania przesiewowe w kierunku cukrzycy typu 2 wg PTD (скрининг СД 2 типа)",
                        what: "Активный поиск cukrzycy typu 2 (СД второго типа) и stanu przedcukrzycowego (предиабета) у лиц без симптомов (критерии диагноза cukrzycy — неделя 5).",
                        where: "Zalecenia kliniczne PTD -> Badania przesiewowe.",
                        study: "Glikemia na czczo (глюкоза натощак) каждые 3 года у всех ≥45 лет; ежегодно независимо от возраста в группах риска: BMI (ИМТ) ≥25, cukrzyca (СД) у родителей или сибсов, низкая физическая активность, ранее выявленные IFG — nieprawidłowa glikemia na czczo или IGT — nieprawidłowa tolerancja glukozy (нарушенная гликемия натощак, толерантность), cukrzyca ciążowa (гестационный СД) или ребёнок >4 кг, NT (АГ), HDL (ЛПВП) <40 мг/дл и/или TG (ТГ) >150 мг/дл, PCOS — zespół policystycznych jajników (СПКЯ), choroby sercowo-naczyniowe (ССЗ). Glikemia na czczo 100–125 мг/дл (IFG) — показание к OGTT (пероральный тест толерантности к глюкозе). Критерии: IGT — 140–199 мг/дл через 2 ч OGTT, cukrzyca — ≥200 мг/дл.",
                        focus: "Один результат glikemii na czczo (глюкозы натощак) ≥126 мг/дл без симптомов требует повторного измерения. При IFG следующий шаг — OGTT, а не сразу диагноз stanu przedcukrzycowego (предиабета) без нагрузки."
                    }
                ]
            },
            {
                title: "Вт: Щитовидная железа II (Tarczyca II — zapalenia, amiodaron, ciąża, raki)",
                id: "int-tarczyca-2",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Endokrynologia -> Choroby tarczycy",
                popup: { what: "Zapalenia tarczycy (тиреоидиты), tyreopatie poamiodaronowe (амиодароновые дисфункции), wole guzkowe toksyczne (токсический узловой зоб), śpiączka hipometaboliczna (микседематозная кома), subkliniczna niedoczynność tarczycy (субклинический гипотиреоз), ciąża (беременность), raki tarczycy (рак щитовидной железы).", focus: "Низкий wychwyt jodu (поглощение йода) при деструктивных tyreotoksykozach (тиреотоксикозах), GKS (ГКС) до L-T4 при śpiączce (коме), маркёры рака (tyreoglobulina, kalcytonina — тиреоглобулин, кальцитонин).", reading: "Szczeklik -> Endokrynologia -> Choroby tarczycy; Rekomendacje PTE (tarczyca w ciąży, raki tarczycy)." },
                subtopics: [
                    {
                        title: "Podostre zapalenie tarczycy de Quervaina, zapalenie bezbólowe i poporodowe (тиреоидиты: подострый, безболевой, послеродовой)",
                        what: "Деструктивные zapalenia tarczycy (воспаления щитовидной железы) с трёхфазным течением: tyreotoksykoza (тиреотоксикоз) → niedoczynność (гипотиреоз) → eutyreoza (эутиреоз).",
                        where: "Szczeklik -> Endokrynologia -> Zapalenia tarczycy.",
                        study: "Podostre de Quervaina (подострый де Кервена): после вирусной инфекции, боль в железе с иррадиацией в ухо/челюсть, gorączka (лихорадка), очень высокие OB (СОЭ) и CRP, низкий wychwyt jodu radioaktywnego (поглощение радиойода); лечение — NLPZ (НПВП), при тяжёлом течении prednizon (преднизон), β-bloker (β-блокатор) для симптомов. Bezbólowe i poporodowe (безболевой и послеродовой) (в течение 12 месяцев после родов): без боли, OB норма, часто anti-TPO+, низкий wychwyt; фаза niedoczynności (гипотиреоидная) может требовать L-T4 (lewotyroksyna — левотироксин), риск trwałej niedoczynności tarczycy (стойкого гипотиреоза).",
                        focus: "При деструктивном tyreotoksykozie (тиреотоксикозе) tyreostatyki (тиреостатики) (tiamazol — тиамазол) бесполезны — гормон вытекает из разрушенных фолликулов, синтез не повышен."
                    },
                    {
                        title: "Tyreopatie poamiodaronowe (амиодарон-индуцированные дисфункции)",
                        what: "Niedoczynność tarczycy (гипотиреоз) или tyreotoksykoza (тиреотоксикоз) из-за jodu (йода) (~37% массы препарата) и прямой токсичности amiodaronu (амиодарона).",
                        where: "Szczeklik -> Endokrynologia -> Wpływ leków na tarczycę.",
                        study: "Niedoczynność (гипотиреоз): чаще при anti-TPO+; лечение L-T4, amiodaron (амиодарон) можно продолжать. Tyreotoksykoza typu 1 (тиреотоксикоз) (избыток синтеза на фоне wola guzkowego (узлового зоба) или utajonej choroby Gravesa-Basedowa (латентного Грейвса)): усиленный кровоток при badaniu dopplerowskim (допплерографии) — tiamazol (тиамазол) (± nadchloran potasu — перхлорат). Typ 2 (деструктивное zapalenie tarczycy — тиреоидит): кровоток снижен — prednizon (преднизон). TSH (ТТГ) перед началом и каждые 6 месяцев.",
                        focus: "Jod radioaktywny (радиойод) неэффективен из-за йодной перегрузки. Tyreotoksykoza (тиреотоксикоз) может появиться через месяцы после отмены amiodaronu (очень длинный период полувыведения)."
                    },
                    {
                        title: "Wole guzkowe toksyczne i śpiączka hipometaboliczna (токсический узловой зоб и микседематозная кома)",
                        what: "Автономные «горячие» guzki (узлы) с nadczynnością tarczycy (гипертиреозом); śpiączka hipometaboliczna (микседематозная кома) — декомпенсированная ciężka niedoczynność tarczycy (тяжёлый гипотиреоз).",
                        where: "Szczeklik -> Endokrynologia -> Nadczynność tarczycy, Niedoczynność tarczycy.",
                        study: "Gruczolak toksyczny (токсическая аденома) или wole wieloguzkowe toksyczne (многоузловой токсический зоб): пожилые, регионы с йодным дефицитом; scyntygrafia (сцинтиграфия) — «горячий» guzek с подавлением остальной ткани; лечение — jod radioaktywny (радиойод) 131I (выбор) или операция при большом wole (зобе) со сдавлением или подозрении на рак, до этого tiamazol (тиамазол) до eutyreozy (эутиреоза). Śpiączka hipometaboliczna: пожилые, зима, провокаторы (zakażenie (инфекция), холод, leki uspokajające (седативные), отмена L-T4); hipotermia (гипотермия), bradykardia (брадикардия), hipowentylacja (гиповентиляция), hiponatremia (гипонатриемия), hipoglikemia (гипогликемия); лечение — hydrokortyzon (гидрокортизон) i.v., затем L-T4 i.v., пассивное согревание, поддержка дыхания.",
                        focus: "При śpiączce (коме) hydrokortyzon (гидрокортизон) вводят ДО или одновременно с L-T4 — иначе можно спровоцировать przełom nadnerczowy (надпочечниковый криз). Tyreostatyki (тиреостатики) при wolu guzkowym toksycznym (узловом токсическом зобе) не дают стойкой ремиссии, в отличие от choroby Gravesa-Basedowa (Грейвса). Jod radioaktywny (радиойод) противопоказан при ciąży (беременности) и laktacji (лактации)."
                    },
                    {
                        title: "Subkliniczna niedoczynność tarczycy, tarczyca a ciąża (субклинический гипотиреоз, щитовидная железа при беременности)",
                        what: "Повышенный TSH (ТТГ) при нормальном fT4; особые цели TSH до и во время ciąży (беременности).",
                        where: "Szczeklik -> Endokrynologia; Rekomendacje PTE (choroby tarczycy w ciąży).",
                        study: "Subkliniczna niedoczynność (субклинический гипотиреоз): повторить TSH (ТТГ) через 2–3 месяца; лечить при TSH ≥10 mj./l (мЕд/л); при 4.5–10 — индивидуально (симптомы, anti-TPO+, планирование ciąży (беременности)), у пожилых >70 лет обычно не лечат. Ciąża: цель TSH при планировании <2.5 mj./l, в I триместре около 0.1–2.5 (по ATA — референсные значения для триместра); при niedoczynności tarczycy (гипотиреозе) на L-T4 дозу увеличивают на ~25–30% сразу после подтверждения ciąży, TSH каждые 4 недели в первой половине. Nadczynność tarczycy (гипертиреоз): propylotiouracyl (пропилтиоурацил) в I триместре, tiamazol (тиамазол) со II; jod (йод) 150–200 мкг/сут.",
                        focus: "Przemijająca tyreotoksykoza ciążowa (гестационный транзиторный тиреотоксикоз) (hCG) tyreostatyków (тиреостатиков) не требует. L-T4 (левотироксин) принимают натощак за 30–60 мин до завтрака, отдельно от preparatów żelaza (железа) и wapnia (кальция)."
                    },
                    {
                        title: "Raki tarczycy, tyreoglobulina, kalcytonina (рак щитовидной железы и маркёры)",
                        what: "Zróżnicowane (высокодифференцированные) (brodawkowaty, pęcherzykowy — папиллярный, фолликулярный), rdzeniasty (медуллярный) и anaplastyczny (анапластический) рак.",
                        where: "Szczeklik -> Endokrynologia -> Nowotwory tarczycy; Rekomendacje PTE (raki tarczycy).",
                        study: "Rak brodawkowaty (папиллярный) (~80–85%): лимфогенное метастазирование, ciałka piaszczakowate (псаммомные тельца), napromienianie (облучение) в анамнезе, BRAF V600E, хороший прогноз. Rak pęcherzykowy (фолликулярный) (~10%): гематогенно (кости, лёгкие), в biopsji (биопсии) не отличается от gruczolaka (аденомы) (Bethesda IV) — нужна гистология капсулы и сосудов. Rak rdzeniasty (медуллярный) (~5%): из komórek C (парафолликулярных клеток), маркёры kalcytonina (кальцитонин) и CEA, ~25% наследственные (RET, MEN2), не накапливает 131I; tyreoidektomia (тиреоидэктомия) + limfadenektomia centralna (диссекция центральных лимфоузлов). Rak anaplastyczny (анапластический): пожилые, быстрый рост, очень плохой прогноз. После tyreoidektomii и 131I при zróżnicowanym raku (дифференцированном раке) — контроль tyreoglobuliny (тиреоглобулина) и anty-Tg.",
                        focus: "Перед операцией raka rdzeniastego (медуллярного рака) исключить guz chromochłonny (феохромоцитому) (MEN2), иначе — przełom nadciśnieniowy (криз) на столе. Рост tyreoglobuliny (тиреоглобулина) после całkowitej tyreoidektomii (тотальной тиреоидэктомии) означает wznowę (рецидив); при высоких anty-Tg результат Tg недостоверен."
                    }
                ]
            },
            {
                title: "Ср: Гиперальдостеронизм, инциденталома, вторичная АГ, остеопороз, MEN (Nadnercza, osteoporoza)",
                id: "int-nadnercza-kosci",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Endokrynologia -> Choroby nadnerczy i metabolizm kostny",
                popup: { what: "Zespół Conna (синдром Конна), guz nadnercza (образование надпочечника), скрининг nadciśnienia wtórnego (вторичной NT), osteoporoza (остеопороз), niedoczynność przytarczyc (гипопаратиреоз), zespoły MEN (синдромы MEN).", focus: "ARR — wskaźnik aldosteronowo-reninowy (альдостерон-рениновое соотношение) и условия его взятия, HU ≤10 как признак łagodnego gruczolaka (доброкачественной аденомы), правила приёма bisfosfonianów (бисфосфонатов), нельзя просто отменить denosumab (деносумаб).", reading: "Szczeklik -> Endokrynologia -> Choroby nadnerczy, Osteoporoza; Wytyczne ESE 2023 (incydentaloma); Zalecenia polskie dotyczące osteoporozy." },
                subtopics: [
                    {
                        title: "Hiperaldosteronizm pierwotny, zespół Conna (первичный гиперальдостеронизм)",
                        what: "Автономная секреция aldosteronu (альдостерона); самая частая эндокринная причина nadciśnienia wtórnego (вторичной NT).",
                        where: "Szczeklik -> Endokrynologia -> Hiperaldosteronizm pierwotny; Wytyczne Endocrine Society 2025.",
                        study: "NT — nadciśnienie tętnicze (АГ) + hipokaliemia (гипокалиемия) (есть лишь у части больных — normokaliemia (нормокалиемия) частая), zasadowica metaboliczna (метаболический алкалоз). Причины: obustronny przerost nadnerczy (двусторонняя гиперплазия) (~60%) и gruczolak wydzielający aldosteron (альдостерома) (~30–35%). Скрининг — ARR (aldosteron/renina — альдостерон/ренин) после коррекции K+ и отмены antagonistów receptora mineralokortykoidowego (антагонистов минералокортикоидов); подтверждение — test z wlewem soli fizjologicznej (тест с физраствором), test kaptoprylowy (каптоприловый); далее TK nadnerczy (КТ надпочечников) и cewnikowanie żył nadnerczowych (селективный забор крови из надпочечниковых вен, AVS) перед операцией. Лечение: jednostronna (односторонняя) форма — adrenalektomia laparoskopowa (лапароскопическая адреналэктомия); obustronna (двусторонняя) — spironolakton (спиронолактон) (ginekomastia — гинекомастия) или eplerenon (эплеренон).",
                        focus: "Кого обследовать: oporne NT (резистентная АГ), NT + hipokaliemia (в том числе на diuretyku (диуретике)), NT + incydentaloma (инциденталома), NT + OBPS — obturacyjny bezdech podczas snu (ОАС), NT + AF — migotanie przedsionków (ФП); сейчас Endocrine Society 2025 рекомендует скрининг ARR у всех больных NT (условная рекомендация); в вопросах CEM прошлых лет (ES 2016) — только перечисленные группы риска. β-blokery (β-блокаторы) дают ложноположительный ARR, ACEI/ARB и diuretyki (диуретики) — ложноотрицательный."
                    },
                    {
                        title: "Incydentaloma nadnercza (инциденталома надпочечника)",
                        what: "Guz nadnercza (образование надпочечника) ≥1 см, случайно выявленный при визуализации по другому поводу.",
                        where: "Wytyczne ESE/ENSAT 2023 (incydentaloma nadnercza); Szczeklik -> Endokrynologia.",
                        study: "Оценка злокачественности: плотность на TK bez kontrastu (КТ без контраста) ≤10 HU — łagodny gruczolak bogatolipidowy (доброкачественная аденома, богатая липидами), дальнейшая визуализация не нужна; >10 HU — TK z oceną wypłukiwania kontrastu (КТ с отсроченным вымыванием) или MR (МРТ); >4 см и неоднородность — подозрение на rak kory nadnercza (рак коры) (операция). Гормональная активность у всех: test hamowania deksametazonem (малая дексаметазоновая проба) 1 мг (kortyzol (кортизол) ≤1.8 мкг/дл исключает автономную секрецию), metanefryny (метанефрины) (ESE 2023 допускает не делать при ≤10 HU), при NT (АГ) или hipokaliemii (гипокалиемии) — ARR.",
                        focus: "Biopsję nadnercza (биопсию надпочечника) рутинно не делают; перед любой biopsją или операцией исключить guz chromochłonny (феохромоцитому). Łagodny (доброкачественный) ≤10 HU и <4 см без гормональной активности — не требует наблюдения визуализацией (ESE 2023)."
                    },
                    {
                        title: "Nadciśnienie tętnicze wtórne — przyczyny i badania przesiewowe (вторичная АГ: причины и скрининг)",
                        what: "NT — nadciśnienie tętnicze (АГ) с устранимой причиной; подозревать у молодых, при резкой манифестации, резистентности и нетипичных лабораторных данных.",
                        where: "Wytyczne PTK/ESC 2024 (nadciśnienie) -> Nadciśnienie wtórne; Szczeklik -> Kardiologia.",
                        study: "Miąższowa choroba nerek (паренхиматозная болезнь почек) — kreatynina (креатинин), badanie ogólne moczu (общий анализ мочи), USG (УЗИ). Nadciśnienie naczyniowo-nerkowe (реноваскулярная): miażdżyca (атеросклероз) у пожилых, dysplazja włóknisto-mięśniowa (фибромышечная дисплазия) у молодых женщин; «nagły» obrzęk płuc («вспышка» отёка лёгких), рост kreatyniny >30% после ACEI (ингибиторов АПФ), асимметрия почек >1.5 см — USG dopplerowskie (допплер-УЗИ), angio-TK/angio-MR (КТ/МР-ангиография). Hiperaldosteronizm (гиперальдостеронизм) — ARR; guz chromochłonny (феохромоцитома) — wolne metanefryny w osoczu (свободные метанефрины плазмы); zespół Cushinga (Кушинг) — test z deksametazonem (дексаметазоновая проба) 1 мг, dobowe wydalanie kortyzolu z moczem (суточный кортизол мочи), wieczorny kortyzol w ślinie (вечерний кортизол слюны); OBPS — obturacyjny bezdech podczas snu (ОАС) — polisomnografia (полисомнография); koarktacja aorty (коарктация) — ciśnienie (АД) на руках выше, чем на ногах, запаздывание tętna udowego (бедренного пульса), nadżerki żeber (узуры рёбер). Leki (препараты): NLPZ (НПВП), doustne środki antykoncepcyjne (оральные контрацептивы), GKS (ГКС), lukrecja (солодка), leki obkurczające śluzówkę nosa (деконгестанты), kokaina (кокаин), cyklosporyna (циклоспорин), EPO — erytropoetyna.",
                        focus: "Dysplazja włóknisto-mięśniowa (фибромышечная дисплазия) — angioplastyka balonowa (баллонная ангиопластика) без stentu (стента); при miażdżycowym zwężeniu tętnicy nerkowej (атеросклеротическом стенозе почечной артерии) начинают с медикаментозной терапии (stentowanie (стентирование) рутинно не улучшает исходы)."
                    },
                    {
                        title: "Osteoporoza (остеопороз)",
                        what: "Системное заболевание скелета со снижением массы и нарушением микроархитектуры кости и ростом риска złamań (переломов).",
                        where: "Szczeklik -> Choroby metaboliczne kości -> Osteoporoza; Zalecenia polskie dotyczące osteoporozy (сверить актуальную версию).",
                        study: "Диагноз: T-score ≤−2.5 в szyjce kości udowej (шейке бедра), bliższym końcu kości udowej (проксимальном отделе бедра) или odcinku lędźwiowym (поясничном отделе) (женщины в постменопаузе, мужчины ≥50); niskoenergetyczne złamanie (низкоэнергетический перелом) позвонка или szyjki kości udowej — osteoporoza независимо от T-score. FRAX — 10-летний риск большого osteoporotycznego (остеопоротического) и бедренного złamania. Лечение: bisfosfoniany (бисфосфонаты) первой линии (alendronian (алендронат) 70 мг 1 раз в неделю натощак, запить стаканом воды, 30 мин стоя; kwas zoledronowy (золедроновая кислота) 5 мг i.v. 1 раз в год); denosumab (деносумаб) 60 мг s.c. каждые 6 месяцев; очень высокий риск — teryparatyd (терипаратид), romosozumab (ромосозумаб). Wapń (кальций) 1000–1200 мг/сут (лучше с пищей) + witamina D (витамин D) 800–2000 j.m./сут.",
                        focus: "Отмена denosumabu (деносумаба) без последующего bisfosfonianu (бисфосфоната) вызывает «рикошетные» mnogie złamania kręgów (множественные переломы позвонков). Перед kwasem zoledronowym (золедронатом) и denosumabem — нормализовать wapń (кальций) и witaminę D; редкие осложнения — martwica kości szczęki (остеонекроз челюсти) и atypowe złamania kości udowej (атипичные переломы бедра)."
                    },
                    {
                        title: "Niedoczynność przytarczyc, MEN1, MEN2 (гипопаратиреоз и синдромы MEN)",
                        what: "Niedobór PTH (недостаток PTH) с hipokalcemią (гипокальциемией); MEN — наследственные zespoły mnogich nowotworów gruczołów wydzielania wewnętrznego (синдромы множественных эндокринных опухолей).",
                        where: "Szczeklik -> Endokrynologia -> Choroby przytarczyc, Zespoły mnogich nowotworów gruczołów wydzielania wewnętrznego.",
                        study: "Niedoczynność przytarczyc (гипопаратиреоз): чаще после tyreoidektomii (тиреоидэктомии); низкий Ca2+, высокий fosforan (фосфат), низкий или неадекватно нормальный PTH; лечение — wapń (кальций) + aktywna witamina D (активный витамин D) (alfakalcydol (альфакальцидол), kalcytriol (кальцитриол)), цель — нижняя граница нормы wapnia. Rzekoma niedoczynność przytarczyc (псевдогипопаратиреоз): PTH высокий, dziedziczna osteodystrofia Albrighta (остеодистрофия Олбрайта) (короткие IV–V пястные кости). MEN1 (gen menina — ген менин): nadczynność przytarczyc (гиперпаратиреоз) (~95%, чаще первое проявление), guzy neuroendokrynne trzustki (НЭО поджелудочной железы) (gastrinoma (гастринома), insulinoma (инсулинома)), gruczolak przysadki (аденома гипофиза) (prolactinoma — пролактинома). MEN2A (RET): rak rdzeniasty (медуллярный рак) (~100%), guz chromochłonny (феохромоцитома) (~50%), nadczynność przytarczyc; MEN2B: rak rdzeniasty, guz chromochłonny, nerwiaki błon śluzowych (невромы слизистых), habitus marfanoidalny (марфаноидный habitus), без nadczynności przytarczyc.",
                        focus: "Носителям мутации RET выполняют profilaktyczną tyreoidektomię (профилактическую тиреоидэктомию) в раннем возрасте (при MEN2B — на первом году жизни). Цель лечения niedoczynności przytarczyc (гипопаратиреоза) не норма высокого wapnia (кальция) — иначе hiperkalciuria (гиперкальциурия) и nefrokalcynoza (нефрокальциноз)."
                    }
                ]
            },
            {
                title: "Чт: Ревматология III — подагра, ОА, PMR, спондилоартриты, септический артрит (Dna moczanowa, choroba zwyrodnieniowa stawów)",
                id: "int-reuma-3",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Reumatologia -> Choroby stawów",
                popup: { what: "Krystaliczne zapalenia stawów (кристаллические артриты), choroba zwyrodnieniowa stawów (остеоартрит), polimialgia reumatyczna (ревматическая полимиалгия), reaktywne i łuszczycowe zapalenie stawów (реактивный и псориатический артрит), septyczne zapalenie stawu (септический артрит).", focus: "Kryształy (кристаллы) в mikroskopie polaryzacyjnym (поляризационной микроскопии), цель kwasu moczowego (урата) <6 мг/дл, nakłucie (пункция) горячего сустава до antybiotyku (антибиотика).", reading: "Szczeklik -> Reumatologia -> Dna moczanowa, Choroba zwyrodnieniowa stawów, Spondyloartropatie; Rekomendacje EULAR (dna 2016, PMR 2015)." },
                subtopics: [
                    {
                        title: "Dna moczanowa (подагра)",
                        what: "Воспалительный zapalenie stawów (артрит) из-за отложения kryształów moczanu sodu (кристаллов моноурата натрия) на фоне hiperurykemii (гиперурикемии).",
                        where: "Szczeklik -> Reumatologia -> Dna moczanowa; Rekomendacje EULAR 2016.",
                        study: "Kryształy (кристаллы) игольчатые, с silną UJEMNĄ dwójłomnością (отрицательным двулучепреломлением) (при CPPD — ромбовидные, слабо положительное). Napad dny (приступ): staw śródstopno-paliczkowy I (I плюснефаланговый сустав), ночью, после алкоголя, мяса, diuretyków (диуретиков); kwas moczowy (урат) в приступе может быть нормальным. Лечение приступа: kolchicyna (колхицин) (1 мг, через 1 ч 0.5 мг в первый день), NLPZ (НПВП) или GKS (ГКС) (prednizolon (преднизолон) 30–35 мг 3–5 дней, dostawowo (внутрисуставно)). Leczenie obniżające stężenie kwasu moczowego (уратснижающая терапия): allopurynol (аллопуринол), начало с 100 мг/сут с титрацией каждые 2–4 недели; цель kwasu moczowego <6 мг/дл (<360 мкмоль/л), при guzkach dnawych (тофусах) <5 мг/дл; профилактика приступов kolchicyną первые 6 месяцев; вторая линия — febuksostat (фебуксостат).",
                        focus: "Allopurynol (аллопуринол) НЕ отменяют во время napadu (приступа); начинать его классически после стихания приступа (ACR 2020 допускает старт на фоне приступа под прикрытием противовоспалительного). Allopurynol + azatiopryna (азатиоприн) — тяжёлая mielotoksyczność (миелотоксичность). Bezobjawową hiperurykemię (бессимптомную гиперурикемию) не лечат."
                    },
                    {
                        title: "Choroba zwyrodnieniowa stawów (остеоартрит)",
                        what: "Дегенеративное заболевание сустава с поражением chrząstki (хряща), kości podchrzęstnej (субхондральной кости) и błony maziowej (синовии).",
                        where: "Szczeklik -> Reumatologia -> Choroba zwyrodnieniowa stawów.",
                        study: "Guzki Heberdena (узлы Гебердена) (DIP) и Boucharda (Бушара) (PIP); sztywność poranna (утренняя скованность) <30 мин, боль усиливается при нагрузке, trzeszczenia (крепитация); OB/CRP (СОЭ/CRP) в норме. RTG (рентген): асимметричное zwężenie szpary stawowej (сужение щели), osteofity (остеофиты), podchrzęstne stwardnienie (субхондральный склероз) и torbiele (кисты). Лечение: снижение массы и fizjoterapia (лечебная физкультура) (основа), miejscowe NLPZ (местные НПВП) (колено, кисть), короткие курсы doustnych NLPZ, dostawowe GKS (внутрисуставные ГКС), duloksetyna (дулоксетин), endoprotezoplastyka (эндопротезирование).",
                        focus: "Поражение DIP говорит за chorobę zwyrodnieniową (остеоартрит) или łuszczycowe zapalenie stawów (псориатический артрит), не за RZS (РА). Glukozamina (глюкозамин) и chondroityna (хондроитин) в рекомендациях не имеют значимого доказательства эффективности."
                    },
                    {
                        title: "Polimialgia reumatyczna (ревматическая полимиалгия)",
                        what: "Воспалительный синдром у лиц >50 лет с болью и sztywnością (скованностью) obręczy barkowej i miednicznej (плечевого и тазового пояса).",
                        where: "Szczeklik -> Reumatologia -> Polimialgia reumatyczna; Rekomendacje EULAR/ACR 2015.",
                        study: "Двусторонняя боль в плечах и бёдрах, sztywność poranna (утренняя скованность) >45 мин, высокие OB (СОЭ) и CRP; мышечной слабости нет, CK — kinaza kreatynowa (КФК) норма. Лечение: prednizon (преднизон) 12.5–25 мг/сут с драматическим ответом за дни, снижение дозы в течение ≥12 месяцев; metotreksat (метотрексат) как lek oszczędzający GKS (ГКС-сберегающий препарат).",
                        focus: "У части больных сосуществует olbrzymiokomórkowe zapalenie tętnic (гигантоклеточный артериит) — спросить о головной боли, chromaniu żuchwy («перемежающейся хромоте» челюсти), зрении; при GCA нужна доза 40–60 мг, а при нарушении зрения — немедленно. Нормальная CK (КФК) отличает PMR от zapalenia mięśni (миозита)."
                    },
                    {
                        title: "Reaktywne zapalenie stawów, łuszczycowe zapalenie stawów (реактивный и псориатический артрит)",
                        what: "Spondyloartropatie (спондилоартриты): reaktywne (реактивный) — после urogenitalnej lub jelitowej infekcji (урогенитальной или кишечной инфекции); ŁZS — łuszczycowe zapalenie stawów (псориатический артрит) — у больных łuszczycą (псориазом).",
                        where: "Szczeklik -> Reumatologia -> Spondyloartropatie.",
                        study: "Reaktywne (реактивный): через 1–4 недели после Chlamydia trachomatis или Salmonella, Shigella, Yersinia, Campylobacter; частая связь с HLA-B27; асимметричное zapalenie kilku stawów (олигоартрит) ног, zapalenie przyczepów ścięgnistych (энтезит) (ścięgno Achillesa — ахиллово сухожилие), zapalenie palca (дактилит), zapalenie spojówek (конъюнктивит), zapalenie cewki moczowej (уретрит); лечение — NLPZ (НПВП), dostawowe GKS (внутрисуставные ГКС), sulfasalazyna (сульфасалазин) при хроническом течении, лечение chlamydiozy (хламидиоза) у пациента и партнёра. ŁZS: поражение DIP, асимметричное zapalenie kilku stawów, okaleczające zapalenie stawów (мутилирующий артрит) («ołówek w kubku» — «карандаш в стакане»), изменения ногтей (naparstkowanie (напёрстковые вдавления), onycholiza (онихолизис)), «palec kiełbaskowaty» («сосискообразный» палец), czynnik reumatoidalny (RF) отрицательный (kryteria CASPAR); лечение — NLPZ, metotreksat (метотрексат), sulfasalazyna, leflunomid (лефлуномид), anty-TNF, anty-IL-17, anty-IL-23.",
                        focus: "При łuszczycy (псориазе) системные GKS (ГКС) избегают — после отмены возможно обострение до łuszczycy krostkowej (пустулёзного псориаза). Antybiotyk (антибиотик) при reaktywnym zapaleniu stawów (реактивном артрите) не меняет течения самого артрита."
                    },
                    {
                        title: "Septyczne zapalenie stawu (септический артрит)",
                        what: "Бактериальная zakażenie stawu (инфекция сустава) — неотложное состояние с быстрой деструкцией chrząstki (хряща).",
                        where: "Szczeklik -> Reumatologia -> Infekcyjne zapalenie stawów.",
                        study: "Возбудители: чаще S. aureus; у молодых сексуально активных — N. gonorrhoeae (wędrujące bóle stawów (мигрирующие артралгии), zapalenie pochewek ścięgnistych (теносиновит), krosty (пустулы)); endoproteza (эндопротез) — gronkowce koagulazoujemne (коагулазонегативные стафилококки). Nakłucie stawu (пункция сустава) ДО antybiotyku (антибиотика): leukocyty w płynie stawowym (лейкоциты синовиальной жидкости) >50 000/мкл с преобладанием neutrofili (нейтрофилов), barwienie metodą Grama (окраска по Граму), posiew (посев); posiewy krwi (посевы крови). Лечение: эмпирический antybiotyk i.v. сразу после nakłucia (kloksacylina (клоксациллин) или cefazolina (цефазолин), wankomycyna (ванкомицин) при риске MRSA, ceftriakson (цефтриаксон) при rzeżączce (гонококке)) + drenaż stawu (дренирование сустава) (повторные nakłucia, artroskopia (артроскопия)).",
                        focus: "Горячий моноартрит — всегда nakłucie (пункция); kryształy (кристаллы) в пунктате не исключают zakażenia (инфекции). Dostawowe podanie GKS (внутрисуставное введение ГКС) при подозрении на zakażenie недопустимо."
                    }
                ]
            },
            {
                title: "Пт: Ревматология IV — Шегрен, АФС, миозиты, MCTD, васкулиты, ГКС и anti-TNF (Układowe choroby tkanki łącznej)",
                id: "int-reuma-4",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Reumatologia -> Układowe choroby tkanki łącznej i zapalenia naczyń",
                popup: { what: "Układowe choroby tkanki łącznej (системные болезни соединительной ткани) и zapalenia naczyń (васкулиты), не вошедшие в неделю 2, и безопасность immunosupresji (иммуносупрессии).", focus: "Пары «болезнь — przeciwciało (антитело)», VKA при APS — zespół antyfosfolipidowy (АФС), связь zapalenia skórno-mięśniowego (дерматомиозита) с раком, скрининг перед anty-TNF.", reading: "Szczeklik -> Reumatologia -> Zespół Sjögrena, Zespół antyfosfolipidowy, Zapalenia mięśni, Zapalenia naczyń; Rekomendacje EULAR (APS 2019)." },
                subtopics: [
                    {
                        title: "Zespół Sjögrena (синдром Шегрена)",
                        what: "Аутоиммунное поражение gruczołów zewnątrzwydzielniczych (экзокринных желёз) с сухостью глаз и рта; pierwotny (первичный) или wtórny (вторичный) (при RZS (РА), SLE — toczeń rumieniowaty układowy (СКВ)).",
                        where: "Szczeklik -> Reumatologia -> Zespół Sjögrena.",
                        study: "Suche zapalenie rogówki i spojówek (сухой кератоконъюнктивит), kserostomia (ксеростомия), powiększenie ślinianek przyusznych (увеличение околоушных желёз); anty-Ro/SSA (главный серологический критерий ACR/EULAR 2016), anty-La/SSB, RF, ANA, hipergammaglobulinemia (гипергаммаглобулинемия). Test Schirmera (тест Ширмера) ≤5 мм/5 мин, biopsja ślinianek mniejszych (биопсия малых слюнных желёз) (focus score ≥1). Pozagruczołowe (внежелезистые): kwasica cewkowa (канальцевый ацидоз) 1 типа, śródmiąższowe zapalenie nerek (интерстициальный нефрит), śródmiąższowa choroba płuc (ИЗЛ). Лечение: sztuczne łzy i ślina (искусственные слёзы и слюна), pilokarpina (пилокарпин), hydroksychlorochina (гидроксихлорохин) при bólach stawów (артралгиях), при системном поражении — GKS (ГКС), rytuksymab (ритуксимаб).",
                        focus: "Риск chłoniaka B-komórkowego (В-клеточной лимфомы) (чаще MALT) многократно повышен: стойкое powiększenie ślinianki przyusznej (увеличение околоушной железы), plamica (пурпура), krioglobulinemia (криоглобулинемия), низкий C4 — тревожные признаки. У беременной с anty-Ro — риск tocznia noworodkowego (неонатальной волчанки) и wrodzonego całkowitego bloku przedsionkowo-komorowego (врождённой полной АВ-блокады) у плода."
                    },
                    {
                        title: "Zespół antyfosfolipidowy (антифосфолипидный синдром)",
                        what: "Nabyta trombofilia (приобретённая тромбофилия): zakrzepica (тромбозы) и/или powikłania położnicze (акушерские осложнения) + стойкие przeciwciała antyfosfolipidowe (антифосфолипидные антитела).",
                        where: "Szczeklik -> Reumatologia -> Zespół antyfosfolipidowy; Rekomendacje EULAR 2019.",
                        study: "Kryteria sydnejskie (сиднейские критерии) 2006: клинический — zakrzepica naczyniowa (сосудистый тромбоз) или patologia położnicza (акушерская патология) (≥1 необъяснимое obumarcie płodu (гибель плода) ≥10 недель; ≥1 poród przedwczesny (преждевременные роды) <34 недель из-за stanu przedrzucawkowego (преэклампсии)/niewydolności łożyska (плацентарной недостаточности); ≥3 последовательных poronień (выкидыша) <10 недель) + лабораторный — antykoagulant toczniowy (волчаночный антикоагулянт), przeciwciała antykardiolipinowe (антикардиолипиновые) или anty-β2-glikoproteina I (антитела к бета-гликопротеину), дважды с интервалом ≥12 недель (с 2023 г. есть балльные критерии ACR/EULAR). Лечение после zakrzepicy (тромбоза) — VKA с INR 2–3 пожизненно; при ciąży (беременности) — HDCz (НМГ) + низкая доза ASA (аспирина).",
                        focus: "NOAC при APS (АФС) (особенно при potrójnej dodatniości (тройной позитивности) и zakrzepicy tętniczej (артериальных тромбозах)) НЕ применяют — выбор VKA. Warfarynę (варфарин) в ciąży (беременности) заменяют на HDCz (НМГ). Удлинённый APTT и fałszywie dodatni odczyn kiłowy (ложноположительная реакция на сифилис) — лабораторные подсказки."
                    },
                    {
                        title: "Zapalenie skórno-mięśniowe i wielomięśniowe, mieszana choroba tkanki łącznej (дерматомиозит/полимиозит и MCTD)",
                        what: "Idiopatyczne zapalne miopatie (идиопатические воспалительные миопатии); MCTD — mieszana choroba tkanki łącznej (смешанное заболевание соединительной ткани) — zespół nakładania (перекрёстный синдром) SLE (СКВ), twardziny (склеродермии) и zapalenia mięśni (миозита) с anty-U1-RNP.",
                        where: "Szczeklik -> Reumatologia -> Zapalenia mięśni, Mieszana choroba tkanki łącznej.",
                        study: "Симметричная слабость проксимальных мышц, высокая CK — kinaza kreatynowa (КФК), miopatyczne EMG (миопатическая ЭМГ), obrzęk (отёк) на MR (МРТ), biopsja mięśnia (биопсия мышцы). Кожа при DM: objaw heliotropowy (гелиотропная сыпь) (лиловый отёк век), grudki Gottrona (папулы Готтрона) над MCP/PIP, objaw dekoltu (сыпь в виде буквы V) и objaw szala («шаль»), «ręce mechanika» («руки механика») (zespół antysyntetazowy (антисинтетазный синдром) с anty-Jo-1 и śródmiąższową chorobą płuc (ИЗЛ)). Anty-TIF1γ и anty-NXP2 — связь с раком, anty-MDA5 — szybko postępująca śródmiąższowa choroba płuc (быстро прогрессирующая ИЗЛ). Лечение: prednizon (преднизон) 1 мг/кг + metotreksat (метотрексат) или azatiopryna (азатиоприн), IVIG при рефрактерности. MCTD: высокий титр anty-U1-RNP, objaw Raynauda (феномен Рейно), obrzęk rąk (отёчные кисти), zapalenie stawów (артрит), zapalenie mięśni (миозит), zaburzenia motoryki przełyku (гипомоторика пищевода), nadciśnienie płucne (лёгочная гипертензия) (главная причина смерти).",
                        focus: "Zapalenie skórno-mięśniowe (дерматомиозит) у взрослого — поиск raka (рака) (яичник, лёгкое, поджелудочная железа, przewód pokarmowy (ЖКТ), chłoniaki (лимфомы)), особенно в первые 3 года. MCTD: anty-U1-RNP без anty-dsDNA и anty-Sm, поражение почек и OUN (ЦНС) нехарактерно."
                    },
                    {
                        title: "Guzkowe zapalenie tętnic, choroba Takayasu (узелковый полиартериит и болезнь Такаясу)",
                        what: "PAN — guzkowe zapalenie tętnic (ПАН) — martwicze zapalenie naczyń (некротизирующий васкулит) средних артерий без поражения kłębuszków (клубочков) и płuc (лёгких); choroba Takayasu (Такаясу) — zapalenie dużych naczyń (васкулит крупных сосудов) у молодых женщин.",
                        where: "Szczeklik -> Reumatologia -> Zapalenia naczyń.",
                        study: "PAN: ANCA-ujemne (отрицательный по ANCA), связь с HBV; gorączka (лихорадка), utrata masy ciała (похудание), mnogie zapalenie pojedynczych nerwów (множественный мононеврит) («opadająca stopa» — «свисающая стопа»), ból jąder (боль в яичках), siność siatkowata (сетчатое ливедо), guzki i owrzodzenia skóry (узелки и язвы кожи), niedokrwienie jelit (ишемия кишечника), NT (АГ) и zawały nerek (инфаркты почек) (без kłębuszkowego zapalenia nerek (гломерулонефрита)); angiografia (ангиография) — mikrotętniaki (микроаневризмы) почечных и брыжеечных артерий; лечение — GKS (ГКС) ± cyklofosfamid (циклофосфамид), при HBV — leki przeciwwirusowe (противовирусные) + короткие GKS + plazmafereza (плазмаферез). Takayasu: женщины <40 лет, aorta (аорта) и её ветви; ослабление или отсутствие tętna (пульса), разница ciśnienia (АД) на руках >10 mm Hg, szmery (шумы) над tętnicami podobojczykowymi (подключичными артериями) и аортой, chromanie kończyn górnych («хромота» рук), nadciśnienie naczyniowo-nerkowe (реноваскулярная АГ); angio-MR/angio-TK (МР/КТ-ангиография), PET; лечение — GKS + metotreksat (метотрексат) или tocilizumab (тоцилизумаб)/anty-TNF.",
                        focus: "PAN щадит płuca (лёгкие) и kłębuszki (клубочки) — это отличает его от mikroskopowego zapalenia naczyń (микроскопического полиангиита) (ANCA-MPO, KZN — kłębuszkowe zapalenie nerek (ГН), krwawienie pęcherzykowe (лёгочное кровотечение)). Takayasu <40 лет, olbrzymiokomórkowe zapalenie tętnic (гигантоклеточный артериит) >50 лет."
                    },
                    {
                        title: "Działania niepożądane glikokortykosteroidów, badania przed leczeniem anty-TNF (побочные эффекты ГКС и скрининг перед anti-TNF)",
                        what: "Профилактика осложнений длительной terapii GKS (ГКС-терапии) и обследование перед lekami biologicznymi (биологическими препаратами).",
                        where: "Szczeklik -> Reumatologia -> Leczenie; Rekomendacje ACR 2022 (osteoporoza posteroidowa).",
                        study: "GKS (ГКС): osteoporoza (остеопороз) (при prednizonie (преднизоне) ≥2.5 мг/сут ≥3 месяцев — wapń (кальций) + witamina D (витамин D), по риску bisfosfonian (бисфосфонат)), cukrzyca posteroidowa (стероидный диабет), NT (АГ), zakażenia (инфекции) (профилактика pneumocystozowego zapalenia płuc (пневмоцистной пневмонии) kotrimoksazolem (котримоксазолом) при высоких дозах в комбинации с другими immunosupresantami (иммуносупрессантами)), zaćma podtorebkowa tylna (задняя субкапсулярная катаракта), jaskra (глаукома), miopatia (миопатия), jałowa martwica głowy kości udowej (асептический некроз головки бедра), hamowanie osi podwzgórze-przysadka-nadnercza (подавление оси гипоталамус-гипофиз-надпочечники) (постепенная отмена). Перед anty-TNF: анамнез, RTG klatki piersiowej (рентген грудной клетки), IGRA (предпочтительна у szczepionych BCG (вакцинированных BCG)) или próba tuberkulinowa (проба Манту); utajone zakażenie prątkiem gruźlicy (латентный ТБ) — лечить до начала leku biologicznego (биологического препарата); HBsAg, anty-HBc, HCV, HIV (ВИЧ), szczepienia (вакцинации).",
                        focus: "Gruźlica (туберкулёз) на anty-TNF часто pozapłucna (внелёгочный) и rozsiana (диссеминированный). Anty-TNF противопоказаны при aktywnym zakażeniu (активной инфекции), gruźlicy (ТБ), niewydolności serca (СН) NYHA III–IV и chorobach demielinizacyjnych (демиелинизирующих заболеваниях); szczepionki żywe (живые вакцины) противопоказаны на immunosupresji (иммуносупрессии)."
                    }
                ]
            },
            {
                title: "Сб: Итоговый тест по всей терапии и таблица слабых тем",
                id: "int-9-test",
                time: "1.5 ч",
                lepolekPath: "Testy -> Choroby wewnętrzne — test zbiorczy (40 pytań CEM)",
                popup: { what: "Итог 9 недель терапии: смешанный тест и план повторения на неделях 28–29.", focus: "Доля верных ответов по каждой подобласти и темы с результатом <60%.", reading: "Статистика LEPOLEK, Zeszyt Błędów за недели 1–9." },
                subtopics: [
                    {
                        title: "Rozwiązanie 40 mieszanych pytań CEM (решение смешанных вопросов CEM)",
                        what: "Итоговый тест по всем разделам chorób wewnętrznych (внутренних болезней) в режиме экзамена.",
                        where: "LEPOLEK -> Testy -> Choroby wewnętrzne (losowo, wszystkie działy).",
                        study: "Kardiologia (кардиология), pulmonologia (пульмонология), gastroenterologia i hepatologia (гастроэнтерология и гепатология), nefrologia (нефрология), hematologia (гематология), endokrynologia i diabetologia (эндокринология и диабетология), reumatologia (ревматология), choroby zakaźne i toksykologia (инфекции и токсикология).",
                        focus: "Засечь время: на экзамене около 1.5 мин на вопрос; вопросы, где потрачено >2 мин, отметить отдельно."
                    },
                    {
                        title: "Tabela słabych tematów — powtórka, tygodnie 28–29 (таблица слабых тем)",
                        what: "Таблица приоритетов для повторения terapii (терапии) на неделях 28–29.",
                        where: "Статистика LEPOLEK по разделам; Zeszyt Błędów.",
                        study: "Колонки: подобласть (например, «Hemostaza» (гемостаз)), % верных в LEPOLEK за все недели, тип ошибки (не знаю факт / путаю похожие / устаревшая рекомендация / невнимательность), источник для перечитывания (раздел Szczeklik или рекомендации), количество вопросов для повторного решения. Сортировать по % верных: <60% — неделя 28, 60–75% — неделя 29, >75% — только Anki.",
                        focus: "В таблицу вносить конкретные темы, а не разделы целиком: «przeciwwskazania do NOAC» (противопоказания к NOAC), а не «hematologia» (гематология). Отдельной строкой — темы, где ответ зависит от года рекомендаций."
                    },
                    {
                        title: "Liczby tygodnia i podsumowanie bloku (закрепление чисел недели и итог блока)",
                        what: "Сводная карточка по endokrynologii (эндокринологии) II и reumatologii (ревматологии) III–IV.",
                        where: "Личные заметки.",
                        study: "UACR 30/300 мг/г; SGLT2 при eGFR ≥20, finerenon (финеренон) при eGFR ≥25; BMI (ИМТ) 30/35/40; скрининг cukrzycy (СД) ≥45 лет каждые 3 года; TSH (ТТГ) <2.5 перед ciążą (беременностью), +25–30% L-T4; ≤10 HU, kortyzol (кортизол) ≤1.8 мкг/дл после 1 мг deksametazonu (дексаметазона); T-score ≤−2.5; kwas moczowy (урат) <6 мг/дл; leukocyty w płynie stawowym (синовиальные лейкоциты) >50 000/мкл; APS (АФС) — przeciwciała (антитела) дважды через ≥12 недель.",
                        focus: "Проверить пары «przeciwciało — choroba» («антитело — болезнь»): anty-Ro (zespół Sjögrena (Шегрен), wrodzony blok serca (врождённая блокада)), anty-U1-RNP (MCTD), anty-Jo-1 (zespół antysyntetazowy (антисинтетазный)), anty-TIF1γ (DM i nowotwór — DM и рак), ANCA-ujemne PAN (ПАН, отрицательный по ANCA)."
                    }
                ]
            }
        ]
    }
]);
