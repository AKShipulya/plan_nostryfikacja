// powtorka: недели плана в порядке изучения. id дня — ключ прогресса и заметок в localStorage, не менять.
registerPlanBlock("powtorka", [
    {
        key: "rep-1",
        subject: "powtorka",
        title: "Повторение I — Диагностическая симуляция, терапия и хирургия",
        days: [
            {
                title: "Пн: Симуляция №1 — диагностическая (Egzamin próbny, 160 pytań)",
                id: "w12d3",
                time: "4.5 ч",
                lepolekPath: "Testy -> Test własny: 160 pytań CEM (po 40: Choroby wewnętrzne, Chirurgia, Ginekologia i położnictwo, Pediatria)",
                popup: { what: "Первый полный прогон экзамена и первый полный смешанный тест плана — все четыре dziedziny (раздела) вперемешку: 160 вопросов за 4 ч в режиме экзамена, затем 30 мин первичного подсчёта. Цифры этого дня — исходная точка для всех пяти недель повторения.", focus: "Честный результат, а не высокий. Без учебников, без объяснений LEPOLEK до конца теста, без телефона. Разбор вопросов — завтра, сегодня только цифры.", reading: "Ничего нового. Накануне сон 7–8 ч; перед стартом не больше 15 мин Anki." },
                subtopics: [
                    {
                        title: "Konfiguracja testu (сборка теста)",
                        what: "Тест из 160 вопросов в пропорции экзамена: 4 dziedziny (раздела) по 40 вопросов.",
                        where: "LEPOLEK -> Testy (генератор собственного теста); формат экзамена — регламент нострификационного экзамена UZ.",
                        study: "40 вопросов из каждой dziedziny, случайный отбор, режим «ответы после завершения». Если генератор не собирает 160 сразу — 4 теста по 40 подряд под одним общим таймером на 4 ч, без пауз между блоками. Если реальное распределение вопросов по разделам на экзамене UZ окажется другим — подстроить пропорции под него. Бланк для себя: таблица 1–160 с колонками «ответ» и «уверенность» (P — pewny, 2 — колебался между двумя, Z — угадал).",
                        focus: "Ловушка — вопросы, уже решённые в тематические недели: они завышают результат. Если база не позволяет исключить решённые, отметить в бланке «видел раньше» и посчитать процент отдельно без них."
                    },
                    {
                        title: "Tempo 1,5 min/pytanie (режим экзамена и темп)",
                        what: "Воспроизведение условий экзамена: одна сессия 4 ч, 160 вопросов, в среднем 1,5 мин на вопрос, два прохода.",
                        where: "Таймер + бланк; условия зала — регламент UZ (уточнить, компьютер или бумажная карта ответов).",
                        study: "Начать в то же время суток, в которое будет экзамен. Тактика и контрольные точки те же, что на симуляциях №2 и №3 и на экзамене, иначе темп и ошибки в последних 40 вопросах нельзя сравнивать между симуляциями. Первый проход ~200 мин (≈75 с на вопрос): уверенные ответы сразу, сомнительные — лучший вариант + отметка. Контрольные точки: вопрос 40 — 50 мин, 80 — 100 мин, 120 — 150 мин, 160 — 200 мин. Второй проход ~30 мин — только отмеченные вопросы; последние ~10 мин — проверка, что ни один вопрос не остался без ответа. Вопрос, на который нет ответа за 2 мин, — отметить, выбрать лучший вариант и идти дальше. Один перерыв на туалет до 5 мин, вода на столе.",
                        focus: "Записать номер вопроса, на котором начала падать концентрация (обычно после 100–120). Это данные для тактики финальной недели, а не повод остановиться."
                    },
                    {
                        title: "Wynik w działach (первичный подсчёт по разделам)",
                        what: "Процент правильных ответов в каждой dziedzinie (разделе) и в целом.",
                        where: "Результаты теста LEPOLEK + собственный бланк.",
                        study: "Процент раздела = верные / 40 × 100; общий = верные / 160 × 100. Ориентиры: 56% = 90/160 (próg LEK — порог LEK), 60% = 96/160 (порог UM Łódź; порог UZ официально не опубликован), цель ≥70% = 112/160, то есть ≥28/40 в каждом разделе. В протокол: верные по разделам, число Z среди верных, число ошибок в последних 40 вопросах (усталость).",
                        focus: "Отдельно посчитать точность «уверенных» ответов (P). Если среди P больше 10–15% неверных — проблема в ложной уверенности, то есть в устаревших или перепутанных фактах, а не в пробелах."
                    },
                    {
                        title: "Protokół symulacji (протокол симуляции)",
                        what: "Одна страница с цифрами, по которой потом сравниваются симуляции №1, №2 и №3.",
                        where: "Отдельный лист в тетради ошибок (Zeszyt błędów).",
                        study: "Дата, время старта, время окончания первого прохода, число отмеченных вопросов, число изменённых ответов с причиной каждого (факт — вспомнил или подсказал другой вопрос теста; чтение — нашёл ошибку чтения; ощущение — без конкретной причины) и итог по каждой причине (неверно→верно / верно→неверно), самооценка усталости 1–10 на 1-м, 2-м, 3-м и 4-м часу, результат по 4 разделам.",
                        focus: "Правило исправлений по умолчанию: менять ответ, когда есть конкретная причина (вспомнил факт, нашёл ошибку чтения, другой вопрос теста подсказал ответ), и не менять «по ощущению». Исследования тестов с выбором ответа раз за разом показывают, что исправления чаще переводят неверный ответ в верный, чем наоборот. Своя статистика трёх симуляций — это 10–30 исправлений, поэтому она проверяет правило, а не заменяет его: если исправления «по ощущению» у тебя стабильно портят ответ, отказаться именно от них."
                    }
                ]
            },
            {
                title: "Вт: Разбор симуляции №1 — результат, 10 слабых тем, типы ошибок",
                id: "w12d4",
                time: "2.5 ч",
                lepolekPath: "Testy -> Historia testów -> Symulacja nr 1 (przegląd odpowiedzi z wyjaśnieniami)",
                popup: { what: "Разбор каждого неверного и каждого угаданного ответа симуляции №1 с классификацией ошибок.", focus: "Выход дня — не «прочитал объяснения», а три документа: таблица по разделам, список 10 słabych tematów (слабых тем), пополненная zeszyt błędów (тетрадь ошибок). Классификацию и разметку по темам сделать сегодня для всех ошибок (20–30 с на вопрос); подробный разбор с чтением объяснений — сколько уложится в 2,5 ч, остальное переходит в дни сжатого повторения.", reading: "Точечно — главы Szczeklik, Noszczyk, Bręborowicz, Kawalec по темам ошибок; LEK w pigułce, rozdz. 2 «25 najczęściej pojawiających się zagadnień na LEK-u» для взвешивания тем." },
                subtopics: [
                    {
                        title: "Klasyfikacja błędów (классификация ошибок)",
                        what: "Каждой ошибке присваивается одна из четырёх причин, потому что каждая лечится по-разному.",
                        where: "Бланк симуляции + объяснения LEPOLEK.",
                        study: "L — luka w wiedzy: факт не знал; лечение — перечитать источник, карточка Anki. N — nieuwaga: знал, но не дочитал «nie», перепутал номер или единицы; лечение — личный чек-лист чтения. P — pułapka sformułowania: два верных варианта, нужно было «najbardziej prawdopodobne» или «w pierwszej kolejności», либо в вопросе старая версия рекомендации; лечение — выписать шаблон формулировки. J — język: не понял польское слово или конструкцию; лечение — глоссарий. Плюс Z — верно, но угадано: разбирается как ошибка L.",
                        focus: "Не больше 1–2 мин на вопрос. Порядок подробного разбора: сначала неверные ответы с пометкой P (ложная уверенность), затем остальные неверные и Z; ошибки N только посчитать. При результате 60–65% неверных и угаданных набирается 60–80, и в 2,5 ч все не разобрать: неразобранные вопросы раздела переносятся в день его сжатого повторения (rep-int-1, rep-int-2, rep-chir, rep-polozn, rep-gin, rep-ped-1, rep-ped-2) и заменяют там ~30 вопросов LEPOLEK. Если разбор одного вопроса тянет на 10 мин чтения — это тема для повторения, а не для разбора: записать в список и идти дальше."
                    },
                    {
                        title: "Analiza według tematów (результат по подразделам)",
                        what: "Разложение ошибок каждого раздела по темам, чтобы увидеть, где именно теряются баллы.",
                        where: "Таблица: раздел → тема → число ошибок L/N/P/J/Z.",
                        study: "Темы для разметки. Choroby wewnętrzne (терапия): kardiologia (кардиология), pulmonologia (пульмонология), gastroenterologia/hepatologia (гастро/гепато), nefrologia i zaburzenia elektrolitowe (нефрология и электролиты), endokrynologia (эндокринология), hematologia (гематология), reumatologia (ревматология), choroby zakaźne (инфекции). Chirurgia (хирургия): ostry brzuch (острый живот), urazy (травма), chirurgia onkologiczna (онкохирургия), chirurgia naczyniowa (сосуды), urologia (урология), chirurgia dziecięca (детская хирургия), proktologia (проктология). Położnictwo i ginekologia (акушерство-гинекология): ciąża i poród (беременность и роды), patologia ciąży (патология беременности), ginekologia onkologiczna (онкогинекология), endokrynologia ginekologiczna (эндокринная гинекология), zakażenia (инфекции), antykoncepcja (контрацепция). Pediatria (педиатрия): neonatologia (неонатология), PSO и rozwój (развитие), choroby zakaźne (инфекции), choroby układowe (системные болезни), stany nagłe (неотложные состояния).",
                        focus: "Сравнить долю N по разделам. Если в одном разделе N заметно выше — вероятно, там длинные клинические задачи и падает внимание, а не знания."
                    },
                    {
                        title: "Lista 10 słabych tematów (10 самых слабых тем)",
                        what: "Узкий список тем, по которым будет Сб-тест и которые получат лишнее время в сжатых повторениях.",
                        where: "Таблица подразделов + LEK w pigułce, rozdz. 2 (частота тем на LEK).",
                        study: "Ранг = число ошибок L+P+Z в теме; при равенстве выше тема, которая стоит в списке «25 najczęściej pojawiających się zagadnień». Формулировать узко: не «nefrologia» (нефрология), а «leczenie hiperkaliemii» (лечение гиперкалиемии); не «położnictwo» (акушерство), а «KTG — rodzaje deceleracji» (типы децелераций). К каждой теме — источник и страница.",
                        focus: "Темы, в которых ошибки только типа N, в список не входят: их не надо учить заново, их надо внимательнее читать."
                    },
                    {
                        title: "Zeszyt błędów (тетрадь ошибок)",
                        what: "Единая база ошибок, которую повторяют до экзамена вместо новых источников.",
                        where: "LEPOLEK -> Zeszyt błędów / Ulubione + Anki + бумажная или электронная тетрадь.",
                        study: "Формат записи: суть вопроса одной строкой → правильный ответ → почему остальные неверны → источник. L и P — в Anki (одна карточка = один факт). N — в чек-лист («читать последнюю фразу вопроса дважды», «проверить единицы: мг/дл или ммоль/л»). J — в глоссарий PL→RU. Устаревшие ответы помечать отдельно: «CEM прошлых лет: X, сейчас: Y».",
                        focus: "Тетрадь, в которую только добавляют, бесполезна. Раз в неделю вычёркивать то, что трижды подряд отвечено верно."
                    }
                ]
            },
            {
                title: "Ср: Терапия — сжатое повторение I (kardiologia, pulmonologia, nefrologia, elektrolity i RKZ)",
                id: "rep-int-1",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Kardiologia, Pulmonologia, Nefrologia -> Test mieszany (30 pytań)",
                popup: { what: "Самые частые на экзамене факты kardiologii (кардиологии), pulmonologii (пульмонологии), nefrologii (нефрологии), zaburzeń elektrolitowych (электролитов) и równowagi kwasowo-zasadowej — RKZ (кислотно-основного равновесия).", focus: "Пороги, препараты первого выбора и изменения рекомендаций: CHA₂DS₂-VA вместо CHA₂DS₂-VASc, 24 ч вместо 48 ч для kardiowersji (кардиоверсии), 4 группы препаратов при HFrEF, GINA без монотерапии SABA.", reading: "Szczeklik (Mały Szczeklik) — главы тематических недель 1, 2, 4, 6, 7; LEK w pigułce, rozdz. 7 «Najważniejsze skale, kryteria i klasyfikacje» и rozdz. 15 «Medycyna w liczbach». Главы Szczeklik открывать только по темам своих ошибок симуляции №1; остальное — чтение выжимки ниже и вопросы: объём дня реален только в таком режиме." },
                subtopics: [
                    {
                        title: "Kardiologia I: nadciśnienie tętnicze, OZW, przewlekłe zespoły wieńcowe, niewydolność serca (NT, ОКС, хроническая ИБС, сердечная недостаточность)",
                        what: "Топ-факты по nadciśnieniu tętniczemu — NT (гипертензии), ostrym i przewlekłym zespołom wieńcowym (острым и хроническим коронарным синдромам) и przewlekłej niewydolności serca (хронической сердечной недостаточности) (NS).",
                        where: "Szczeklik -> Kardiologia -> Nadciśnienie tętnicze / Ostre zespoły wieńcowe / Niewydolność serca; ESC 2023 (ACS, HF update), ESC 2024 (NT, CCS).",
                        study: "NT (гипертензия): диагноз ≥140/90 в кабинете, ≥130/80 по ABPM (суточному мониторированию), ≥135/85 дома (HBPM). Старт у большинства — двойная комбинация в одной таблетке: ACEI (иАПФ) или sartan (ARB) + CCB (antagonista wapnia — БКК) или diuretyk tiazydopodobny (тиазидоподобный диуретик). Цель SBP (САД) 120–129 мм рт. ст., если переносится (ESC 2024); в PTK 2019 — <130/80 до 65 лет. Ciąża (беременность): metyldopa (метилдопа), labetalol (лабеталол), nifedypina o przedłużonym uwalnianiu (нифедипин пролонгированный). STEMI: EKG ≤10 мин от первого контакта; pierwotna PCI (первичная PCI), если от диагноза до проводника ≤120 мин, иначе fibrynoliza (фибринолиз) в течение 10 мин от диагноза и koronarografia (коронарография) через 2–24 ч. NSTE-ACS: немедленная strategia inwazyjna (инвазия) (<2 ч) при нестабильности, рефрактерной боли, угрожающих zaburzeniach rytmu (аритмиях), ostrej NS (острой СН); ранняя (<24 ч) при подтверждённом NSTEMI. DAPT 12 мес: ASA (кислота ацетилсалициловая) + tikagrelor (тикагрелор) или prasugrel (прасугрел) (klopidogrel (клопидогрел) — при высоком риске кровотечения или если других нет). Tlen (кислород) только при SpO₂ <90%. Przewlekłe zespoły wieńcowe (хроническая ИБС, ESC 2024): тяжесть dławicy piersiowej (стенокардии) по классам CCS I–IV (Canadian Cardiovascular Society); при низкой и промежуточной вероятности — сначала неинвазивный тест (angio-TK tętnic wieńcowych (КТ-коронарография) или функциональный тест с визуализацией); inwazyjna koronarografia (инвазивная коронарография) — при высокой вероятности, симптомах, не отвечающих на лечение, или высоком риске по неинвазивным тестам; лечение — ASA 75–100 мг, statyna (статин), β-bloker (β-блокатор) или CCB от симптомов, azotan krótko działający (нитрат короткого действия) по требованию. NS (сердечная недостаточность): HFrEF ≤40%, HFmrEF 41–49%, HFpEF ≥50%. HFrEF — четыре группы с самого начала: ACEI/ARNI, β-bloker (bisoprolol, karwedilol, bursztynian metoprololu, nebiwolol), MRA (antagonista receptora mineralokortykoidowego), SGLT2 (flozyny: dapagliflozyna, empagliflozyna). ICD в первичной профилактике — LVEF ≤35% после ≥3 мес оптимальной терапии. NT-proBNP <125 пг/мл исключает przewlekłą NS (хроническую СН), <300 — ostrą (острую).",
                        focus: "В вопросах CEM прошлых лет HFrEF лечится ступенями (ACEI + β-bloker → MRA → ARNI/iwabradyna, как в LEK w pigułce); сейчас четыре группы вводят параллельно. Azotany (нитраты) противопоказаны при SBP (САД) <90, zawale prawej komory (инфаркте правого желудочка), приёме inhibitorów PDE-5 (ингибиторов ФДЭ) (sildenafil (силденафил) 24 ч, tadalafil (тадалафил) 48 ч). Niedihydropirydynowe CCB (не-дигидропиридиновые БКК) (werapamil, diltiazem) противопоказаны при HFrEF."
                    },
                    {
                        title: "Kardiologia II: migotanie przedsionków, wady zastawkowe, IZW, zatorowość płucna (AF, пороки, эндокардит, ТЭЛА)",
                        what: "Migotanie przedsionków — AF (фибрилляция предсердий) и antykoagulacja (антикоагуляция), stenoza aortalna (аортальный стеноз), infekcyjne zapalenie wsierdzia — IZW (инфекционный эндокардит), zatorowość płucna — ZP (тромбоэмболия лёгочной артерии).",
                        where: "Szczeklik -> Kardiologia -> Migotanie przedsionków / Wady zastawkowe / Infekcyjne zapalenie wsierdzia; Szczeklik -> Choroby układu krążenia -> Zatorowość płucna; ESC 2024 (AF), ESC 2023 (IE), ESC 2019 (PE).",
                        study: "AF: antykoagulacja (антикоагуляция) при CHA₂DS₂-VA ≥2 рекомендуется, при 1 — рассмотреть (ESC 2024; пол больше не считается). В CEM прошлых лет — CHA₂DS₂-VASc: мужчины ≥2 / женщины ≥3 — рекомендуется. NOAC предпочтительнее warfaryny (варфарина); warfaryna (VKA) обязательна при mechanicznej zastawce (механическом клапане) и умеренной/тяжёлой stenozie mitralnej (митральном стенозе). HAS-BLED ≥3 — высокий риск кровотечения: исправить модифицируемые факторы, а не отменять antykoagulację. Kardiowersja (кардиоверсия) без предварительной antykoagulacji/TEE (ЧПЭхоКГ) — если AF длится <24 ч (ESC 2024); в прежних рекомендациях и старых вопросах — <48 ч. Нестабильный больной — kardiowersja elektryczna (электрическая кардиоверсия) сразу. Kontrola częstości rytmu (контроль частоты): β-bloker (β-блокатор); при LVEF ≤40% — β-bloker и/или digoksyna (дигоксин), не werapamil (верапамил). Ciężka stenoza aortalna (тяжёлый аортальный стеноз): Vmax ≥4 м/с, средний градиент ≥40 мм рт. ст., AVA <1 см²; триада — dławica (стенокардия), omdlenia (обмороки), duszność (одышка); при симптомах — wymiana zastawki (замена клапана) (хирургическая или TAVI). IZW (эндокардит): 3 пары posiewów krwi (посевов крови) до antybiotyku, ECHO serca (ЭхоКГ) (TTE, затем TEE), zmodyfikowane kryteria Duke (модифицированные критерии Duke). Профилактика — только у высокого риска (proteza zastawkowa (протез клапана), перенесённый IZW, sinicze wady serca (синие пороки)) перед стоматологическими процедурами с манипуляцией на десне: amoksycylina (амоксициллин) 2 г p.o. за 30–60 мин. ZP (ТЭЛА): skala Wellsa (шкала Wells) или genewska (женевская) → D-dimery (D-димер) при низкой/промежуточной вероятности (после 50 лет порог = возраст × 10 мкг/л) → angio-TK (КТ-ангиография) при высокой вероятности или положительном D-dimerze; wstrząs (шок) — systemowa tromboliza (системный тромболизис) (alteplaza (алтеплаза) 100 мг за 2 ч); sPESI 0 — ранняя выписка.",
                        focus: "Типичная ловушка — пациент с AF и mechaniczną zastawką (механическим клапаном) в варианте ответа «dabigatran»: NOAC противопоказаны. Вторая — ZP (ТЭЛА) у нестабильного больного, которого «сначала отправляют на TK (КТ)»: при wstrząsie (шоке) и невозможности TK решает przyłóżkowe ECHO serca (прикроватная ЭхоКГ) (przeciążenie prawej komory — перегрузка правого желудочка)."
                    },
                    {
                        title: "Pulmonologia: astma, POChP, PZP, odma, gruźlica, rak płuca (пульмонология: астма, ХОБЛ, пневмония, пневмоторакс, туберкулёз, рак лёгкого)",
                        what: "Топ-факты по chorobom obturacyjnym (обструктивным болезням), pozaszpitalnemu zapaleniu płuc — PZP (внебольничной пневмонии), odmie opłucnowej (пневмотораксу), gruźlicy (туберкулёзу) и rakowi płuca (раку лёгкого).",
                        where: "Szczeklik -> Pulmonologia; GINA 2024, GOLD 2024; Rekomendacje postępowania w pozaszpitalnych zakażeniach układu oddechowego (NPOA 2016).",
                        study: "Astma (астма): odwracalność (обратимость) — прирост FEV₁ ≥12% и ≥200 мл после leku rozszerzającego oskrzela (бронхолитика). GINA с 2019: монотерапия SABA не рекомендуется; предпочтительный путь — wGKS-formoterol (ICS-формотерол) по требованию (ступени 1–2) и как поддерживающая терапия (3–5). Ciężkie zaostrzenie (тяжёлое обострение): O₂ до SpO₂ 93–95%, SABA ± bromek ipratropium (ипратропий), systemowy GKS (системный ГКС) (prednizon (преднизон) 40–50 мг 5–7 дней), MgSO₄ (siarczan magnezu) 2 г i.v. за 20 мин. POChP (ХОБЛ): FEV₁/FVC <0,7 после bronchodilatatora (бронхолитика); группы GOLD A, B, E; B и E — LABA + LAMA; wGKS (ICS) добавить в группе E при eozynofilach (эозинофилах) ≥300/мкл. Domowe leczenie tlenem (длительная кислородотерапия, DDTL): PaO₂ ≤55 мм рт. ст. или SaO₂ ≤88%, либо PaO₂ 56–59 при sercu płucnym (лёгочном сердце) или hematokrycie (гематокрите) >55%. В zaostrzeniu (обострении) цель SpO₂ 88–92%, prednizon 40 мг 5 дней. PZP (внебольничная пневмония): CURB-65 (splątanie (спутанность), mocznik (мочевина) >7 ммоль/л, RR (ЧД) ≥30, SBP (САД) <90 или DBP (ДАД) ≤60, возраст ≥65): 0–1 амбулаторно, 2 — стационар, ≥3 — тяжёлая, рассмотреть OIT (ОИТ); амбулаторно у взрослых — amoksycylina (амоксициллин) 1 г каждые 8 ч. Legionella — hiponatremia (гипонатриемия), biegunka (диарея), antygen w moczu (антиген в моче), лечение fluorochinolonem (фторхинолоном) или makrolidem (макролидом). Odma prężna (напряжённый пневмоторакс) — немедленное nakłucie (пункция) (II межреберье по linii środkowoobojczykowej (среднеключичной линии) или IV–V межреберье впереди linii pachowej środkowej (средней подмышечной линии) — ATLS 10), затем drenaż (дренаж). Kryteria Lighta (критерии Light) (wysięk — экссудат): białko płyn opłucnowy/surowica (белок плевр./сыв.) >0,5, LDH (ЛДГ) плевр./сыв. >0,6, LDH плевр. >2/3 верхней нормы. Gruźlica (туберкулёз): 2 мес HRZE, затем 4 мес HR. Działania niepożądane (побочные): izoniazyd (изониазид) — neuropatia (нейропатия) (witamina B6) и hepatotoksyczność (гепатотоксичность), ryfampicyna (рифампицин) — pomarańczowe wydzieliny (оранжевые выделения) и indukcja enzymów (индукция ферментов) (неэффективна antykoncepcja hormonalna (гормональная контрацепция)), etambutol (этамбутол) — zapalenie nerwu wzrokowego (неврит зрительного нерва) (widzenie barw — цветовое зрение), pirazynamid (пиразинамид) — hiperurykemia (гиперурикемия). Rak płuca (рак лёгкого): niedrobnokomórkowy — NDRP (немелкоклеточный) ~80–85% (gruczolakorak — аденокарцинома, płaskonabłonkowy — плоскоклеточный), drobnokomórkowy — DRP (мелкоклеточный) ~15% — центральный, почти всегда у курильщиков, paranowotworowe (паранеопластические) SIADH и ektopowe ACTH (эктопический ACTH), лечение — chemioterapia (химиотерапия) (редко операция); płaskonabłonkowy — hiperkalcemia (гиперкальциемия) (PTHrP); guz Pancoasta (опухоль Панкоста) — zespół Hornera (синдром Горнера) и боль в плече; zespół żyły głównej górnej (синдром верхней полой вены) — см. rep-przekroj; badanie przesiewowe NDTK (скрининг, низкодозовая КТ) — см. rep-przekroj.",
                        focus: "В LEK w pigułce 1-я ступень astmy (астмы) — «SABA doraźnie»: это ответ старых вопросов, в новых он неверен. При POChP (ХОБЛ) tlen (кислород) «до нормы» — ошибка: цель 88–92% из-за риска hiperkapnii (гиперкапнии)."
                    },
                    {
                        title: "Nefrologia: ONN, PChN, zespół nerczycowy i nefrytyczny (ОПП, ХБП, нефротический и нефритический синдромы)",
                        what: "Ostre uszkodzenie nerek — ONN/AKI (острое повреждение почек), przewlekła choroba nerek — PChN (хроническая болезнь почек) и diagnostyka różnicowa zespołów kłębuszkowych (дифдиагноз гломерулярных синдромов).",
                        where: "Szczeklik -> Nefrologia; KDIGO 2012 (AKI), KDIGO 2024 (CKD), KDIGO 2021 (glomerular diseases).",
                        study: "AKI (ONN) по KDIGO: kreatynina (креатинин) ↑ ≥0,3 мг/дл за 48 ч, или ≥1,5 × исходного за 7 дней, или diureza (диурез) <0,5 мл/кг/ч 6 ч. Przednerkowe (преренальное): FENa <1%, Na мочи <20 ммоль/л, osmolalność moczu (осмоляльность мочи) >500. PChN (ХБП): eGFR <60 или маркеры повреждения >3 мес; G1 ≥90, G2 60–89, G3a 45–59, G3b 30–44, G4 15–29, G5 <15; albuminuria (альбуминурия) A1 <30, A2 30–300, A3 >300 мг/г. Лечение: ACEI/sartan (ACEi/ARB) при albuminurii, SGLT2 от eGFR ≥20, metformina (метформин) уменьшить при 30–44 и отменить при <30. Показания к срочной dializoterapii (диализу): oporna hiperkaliemia (рефрактерная гиперкалиемия), ciężka kwasica (тяжёлый ацидоз), przewodnienie z obrzękiem płuc (гипергидратация с отёком лёгких), mocznicowe zapalenie osierdzia (уремический перикардит) или encefalopatia (энцефалопатия), некоторые zatrucia (отравления). Zespół nerczycowy (нефротический): białkomocz (протеинурия) >3,5 г/сут, hipoalbuminemia (гипоальбуминемия), obrzęki (отёки), hiperlipidemia (гиперлипидемия); у взрослых — nefropatia błoniasta (мембранозная нефропатия) (anty-PLA2R) и FSGS (ogniskowe segmentowe stwardnienie kłębuszków), у детей — choroba zmian minimalnych (болезнь минимальных изменений); осложнения — zakrzepica (тромбозы) (żyły nerkowej — вены почки), zakażenia (инфекции). Zespół nefrytyczny (нефритический): krwinkomocz (гематурия) с dysmorficznymi erytrocytami (дисморфными эритроцитами) и wałeczkami (цилиндрами), nadciśnienie (гипертензия), oliguria (олигурия). Popaciorkowcowe KZN (постстрептококковый) — через 1–3 нед после anginy (ангины), C3 снижен; nefropatia IgA (IgA-нефропатия) — krwinkomocz через 1–3 дня от начала инфекции, C3 норма. Szybko postępujące KZN (быстропрогрессирующий): anty-GBM (zespół Goodpasture'a), zapalenia naczyń ANCA-zależne (ANCA-васкулиты).",
                        focus: "Главная дифференцировка вопроса: интервал между zakażeniem (инфекцией) и krwinkomoczem (гематурией). 1–3 дня — nefropatia IgA (IgA-нефропатия), 1–3 недели — popaciorkowcowe KZN (постстрептококковый ГН)."
                    },
                    {
                        title: "Zaburzenia elektrolitowe, gazometria (электролиты и КОС)",
                        what: "Sód (натрий), potas (калий), wapń (кальций) и интерпретация gazometrii krwi tętniczej (газометрии артериальной крови).",
                        where: "Szczeklik -> Zaburzenia wodno-elektrolitowe i kwasowo-zasadowe; ERC 2021 -> Zatrzymanie krążenia w szczególnych okolicznościach (hiperkaliemia).",
                        study: "Hiperkaliemia (гиперкалиемия) ≥6,5 ммоль/л или изменения EKG (высокий острый załamek T, poszerzenie QRS (расширение QRS), исчезновение P): 1) ochrona mięśnia sercowego (защита миокарда) — 10% glukonian wapnia (глюконат кальция) 30 мл или 10% chlorek wapnia (хлорид кальция) 10 мл i.v.; 2) przesunięcie do komórek (сдвиг в клетки) — 10 j. (ЕД) insuliny krótkodziałającej (короткого инсулина) + 25 г glukozy (глюкозы), salbutamol (сальбутамол) 10–20 мг в nebulizacji (небулайзере); 3) usunięcie (выведение) — diuretyk pętlowy (петлевой диуретик), leki wiążące potas (связывающие препараты), dializa (диализ). Hipokaliemia (гипокалиемия): fala U (волна U), spłaszczenie T (уплощение T); i.v. KCl рутинно ~10 ммоль/ч; в периферическую вену — не быстрее 20 ммоль/ч при концентрации ≤40 ммоль/л (сверить с актуальной редакцией Szczeklik), быстрее — только в центральную вену под EKG-мониторингом; одновременно восполнить magnez (магний). Hiponatremia (гипонатриемия): коррекция не быстрее 10 ммоль/л за 24 ч (8 — у группы риска) из-за риска zespołu osmotycznej demielinizacji (осмотического демиелинизирующего синдрома); тяжёлые симптомы — 150 мл 3% NaCl за 20 мин, повтор до 2–3 раз, цель +5 ммоль/л. SIADH: euwolemia (эуволемия), osmolalność moczu (осмоляльность мочи) >100, Na мочи >30, лечение — ograniczenie płynów (ограничение жидкости). Hiperkalcemia (гиперкальциемия): 0,9% NaCl, затем kwas zoledronowy (золедроновая кислота); kalcytonina (кальцитонин) — быстрый, но кратковременный эффект; diuretyk pętlowy только после nawodnienia (гидратации). Gazometria (газометрия): pH 7,35–7,45, pCO₂ 35–45 мм рт. ст., HCO₃⁻ 22–26 ммоль/л. Luka anionowa (анионный интервал) = Na − (Cl + HCO₃⁻), норма 8–12. Повышенный: kwasica ketonowa (кетоацидоз), mleczanowa (лактат), mocznica (уремия), metanol (метанол), glikol etylenowy (этиленгликоль), salicylany (салицилаты). Нормальный: biegunka (диарея), kwasica cewkowa nerkowa (почечный канальцевый ацидоз). Wzór Wintersa (формула Winters): ожидаемый pCO₂ = 1,5 × HCO₃⁻ + 8 ± 2. Wymioty (рвота) — zasadowica metaboliczna hipochloremiczna hipokaliemiczna (гипохлоремический гипокалиемический метаболический алкалоз).",
                        focus: "Порядок при hiperkaliemii (гиперкалиемии) — вопрос-ловушка: первым вводят wapń (кальций) (он не снижает калий, а защищает сердце). В заданиях с быстро исправленной hiponatremią (гипонатриемией) и новым niedowładem (парезом)/dyzartrią (дизартрией) через 2–6 дней ответ — zespół osmotycznej demielinizacji (осмотический демиелинизирующий синдром) (mielinoliza środkowa mostu)."
                    }
                ]
            },
            {
                title: "Чт: Терапия — сжатое повторение II (gastroenterologia, endokrynologia, hematologia, reumatologia, choroby zakaźne)",
                id: "rep-int-2",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne -> Gastroenterologia, Endokrynologia, Hematologia, Reumatologia -> Test mieszany (30 pytań)",
                popup: { what: "Самые частые на экзамене факты gastroenterologii i hepatologii (гастроэнтерологии и гепатологии), endokrynologii (эндокринологии), hematologii (гематологии), reumatologii (ревматологии) и chorób zakaźnych (инфекций).", focus: "Первый выбор (IPP (ИПП), eradykacja H. pylori (эрадикация), metotreksat (метотрексат), tiamazol (тиамазол)), неотложные алгоритмы (krwawienie z przewodu pokarmowego (кровотечение из ЖКТ), kwasica ketonowa (кетоацидоз), przełom nadnerczowy (надпочечниковый криз), sepsa (сепсис)) и дифференцировка похожих состояний (WZJG vs ChLC, ITP vs TTP vs HIT).", reading: "Szczeklik — главы тематических недель 3, 4, 5 и новых недель терапии 8–9; LEK w pigułce, rozdz. 6 «Leki wskazane». Главы открывать только по темам своих ошибок симуляции №1; остальное — чтение выжимки ниже и вопросы." },
                subtopics: [
                    {
                        title: "Krwawienie z GOPP, H. pylori, NChZJ, OZT, marskość, WZW B (гастроэнтерология и гепатология)",
                        what: "Krwawienie z górnego odcinka przewodu pokarmowego — GOPP (кровотечение из верхних отделов ЖКТ), H. pylori, nieswoiste choroby zapalne jelit — NChZJ (ВЗК), ostre zapalenie trzustki — OZT (острый панкреатит), marskość wątroby (цирроз), серология WZW B (гепатит B).",
                        where: "Szczeklik -> Gastroenterologia i hepatologia; ESGE 2021 (NVUGIH), Baveno VII, Maastricht VI, ECCO.",
                        study: "Krwawienie z GOPP (кровотечение из ВОЖКТ): skala Glasgow-Blatchford ≤1 — амбулаторно (ESGE 2021); endoskopia (эндоскопия) ≤24 ч после стабилизации; IPP (ИПП) i.v. в высокой дозе; przetoczenie KKCz (переливание) при Hb ≤7 г/дл (цель 7–9), при choroby sercowo-naczyniowej (сердечно-сосудистой болезни) — при ≤8. Forrest Ia, Ib, IIa — hemostaza endoskopowa (эндоскопический гемостаз). Żylakowe (варикозное): terlipresyna (терлипрессин) или somatostatyna (соматостатин) сразу + antybiotyk (ceftriakson — цефтриаксон) + opaskowanie żylaków (лигирование) ≤12 ч. H. pylori: Польша — страна высокой oporności na klarytromycynę (резистентности к кларитромицину); terapia trójlekowa (тройная терапия) с klarytromycyną не первый выбор; актуально — terapia czterolekowa z bizmutem (висмутовая квадротерапия) 14 дней (Maastricht VI). Диагностика: mocznikowy test oddechowy (уреазный дыхательный тест) или antygen w kale (антиген в кале), IPP отменить за 2 нед, antybiotyki — за 4 нед; контроль eradykacji ≥4 нед после лечения. WZJG — wrzodziejące zapalenie jelita grubego (НЯК): непрерывно от odbytnicy (прямой кишки), krwista biegunka (кровавая диарея), p-ANCA, курение снижает риск, связь с PSC — pierwotne stwardniające zapalenie dróg żółciowych (ПСХ). ChLC — choroba Leśniowskiego-Crohna (болезнь Крона): любой отдел, перемежающиеся очаги, zapalenie pełnościenne (трансмуральное воспаление), przetoki (свищи), ziarniniaki (гранулёмы), курение ухудшает. Kryteria Truelove'a-Wittsa (критерии Truelove-Witts) тяжёлого zaostrzenia (обострения): ≥6 кровавых стулов + HR (ЧСС) >90, или T >37,8 °C, или Hb <10,5 г/дл, или OB (СОЭ) >30 → GKS (ГКС) i.v.; нет ответа на 3-й день — infliksymab/cyklosporyna (инфликсимаб/циклоспорин) или kolektomia (колэктомия). OZT (острый панкреатит): 2 из 3 (боль, lipaza/amylaza (липаза/амилаза) >3 × нормы, визуализация); умеренная инфузия krystaloidów (кристаллоидов), раннее żywienie dojelitowe (энтеральное питание), без профилактических antybiotyków; ECPW (ERCP) ≤24 ч только при zapaleniu dróg żółciowych (холангите). Marskość (цирроз): Child-Pugh A 5–6, B 7–9, C 10–15; SBP — samoistne bakteryjne zapalenie otrzewnej (спонтанный бактериальный перитонит) — neutrofile (нейтрофилы) в płynie puchlinowym (асците) ≥250/мкл → cefotaksym/ceftriakson + albumina (альбумин); paracenteza (парацентез) >5 л → albumina 8 г на каждый литр. Серология WZW B: HBsAg — текущая инфекция (>6 мес — przewlekła (хроническая)); anti-HBc IgM — ostra (острая); HBsAg(−) + anti-HBc(+) + anti-HBs(+) — перенесённая инфекция; только anti-HBs — после szczepienia (прививки); HBeAg и HBV-DNA — активность replikacji (репликации).",
                        focus: "В LEK w pigułce первым выбором eradykacji (эрадикации) стоит terapia trójlekowa (тройная терапия) без klarytromycyny (кларитромицина) — это устаревшая позиция. Если в вопросе есть вариант «czterolekowa z bizmutem, 14 dni» — выбрать его; старый ответ — только если вопрос прямо ссылается на старую редакцию рекомендаций (правило экзамена «старое или новое» — sym2-cel-1)."
                    },
                    {
                        title: "Cukrzyca, tarczyca, nadnercza (эндокринология и диабетология)",
                        what: "Rozpoznanie (диагноз) и лечение cukrzycy (СД), stany nagłe w cukrzycy (неотложные состояния при СД), tarczyca (щитовидная железа) и nadnercza (надпочечники).",
                        where: "PTD: Zalecenia kliniczne dotyczące postępowania u chorych na cukrzycę (актуальный год); Szczeklik -> Endokrynologia.",
                        study: "Rozpoznanie cukrzycy (диагноз СД): glikemia na czczo (глюкоза натощак) ≥126 мг/дл дважды, или przygodna (случайная) ≥200 мг/дл с симптомами, или OGTT 2 ч ≥200 мг/дл, или HbA1c ≥6,5% (PTD допускает при стандартизированном методе). Stan przedcukrzycowy (предиабет): na czczo 100–125 (IFG — nieprawidłowa glikemia na czczo), OGTT 140–199 (IGT — nieprawidłowa tolerancja glukozy). Цели HbA1c: ≤7% обычно; ≤6,5% при cukrzycy typu 1 и коротком typie 2; ≤8% у пожилых с сопутствующими болезнями. Cukrzyca typu 2: metformina (метформин) + образ жизни; при ChSN (ССЗ), NS (сердечной недостаточности) или PChN (ХБП) — SGLT2 или GLP-1 RA независимо от HbA1c. Kwasica ketonowa (кетоацидоз): pH <7,3 и/или HCO₃⁻ <18, ketonemia (кетонемия); лечение — 0,9% NaCl ~1 л в 1-й час, insulina (инсулин) 0,1 j. (ЕД)/кг/ч i.v.; если K <3,5 ммоль/л — сначала potas (калий), insulinę откладывают (ADA/EASD 2024; в старых вопросах CEM — 3,3). Hipoglikemia (гипогликемия) <70 мг/дл: 15–20 г glukozy (глюкозы) p.o.; без сознания — glukagon (глюкагон) 1 мг i.m./s.c. или 20% glukoza i.v. Tarczyca (щитовидная): choroba Gravesa-Basedowa (Graves) — TRAb, лечение tiamazolem (тиамазолом); в I триместре — propylotiouracyl (пропилтиоурацил); jod radioaktywny (радиойод) противопоказан в ciąży (беременность) и laktacji (лактацию). Choroba Hashimoto — anty-TPO, lewotyroksyna (левотироксин) натощак; у пожилых и при ChNS (ИБС) начинать с 12,5–25 мкг. Subkliniczna niedoczynność tarczycy (субклинический гипотиреоз) лечить при TSH >10 mj.m./l (мЕд/л) (в беременность — раньше). Guzek (узел) — USG (УЗИ), при подозрительных чертах BACC (FNAB), cytologia (цитология) по Bethesda I–VI. Nadnercza (надпочечники): przełom nadnerczowy (криз) — hydrokortyzon (гидрокортизон) 100 мг i.v. + 0,9% NaCl, не ждать результатов kortyzolu (кортизола). Guz chromochłonny (феохромоцитома) — metoksykatecholaminy (метанефрины); α-bloker (α-блокатор) перед β-blokerem (β-блокатором). Hiperaldosteronizm pierwotny (первичный гиперальдостеронизм) — соотношение aldosteron/renina (альдостерон/ренин). Самая частая причина zespołu Cushinga (синдрома Кушинга) — egzogenne GKS (экзогенные ГКС); скрининг эндогенного — test z 1 mg deksametazonu (тест с дексаметазоном) на ночь, dobowe wydalanie wolnego kortyzolu z moczem (суточный свободный кортизол в моче), kortyzol w ślinie (кортизол слюны) поздно вечером.",
                        focus: "Порядок «сначала α, потом β» при guzie chromochłonnym (феохромоцитоме) и «сначала potas (калий), потом insulina (инсулин)» при kwasicy ketonowej (кетоацидозе) с K <3,5 ммоль/л (в старых вопросах CEM — <3,3) — два любимых вопроса о последовательности. Критерии DKA (ДКА) 2024 (glukoza ≥200 мг/дл) отличаются от классических (>250 мг/дл) — в старых вопросах последнее."
                    },
                    {
                        title: "Niedokrwistości, skazy krwotoczne, nowotwory układu krwiotwórczego (гематология)",
                        what: "Niedokrwistości (анемии), małopłytkowości (тромбоцитопении), koagulopatie (коагулопатии), białaczki (лейкозы), chłoniaki (лимфомы), szpiczak (миелома).",
                        where: "Szczeklik -> Hematologia.",
                        study: "Niedokrwistość (анемия): z niedoboru żelaza (железодефицитная) — ferrytyna (ферритин) <30 мкг/л, TIBC ↑; niedokrwistość chorób przewlekłych (анемия хронического заболевания) — ferrytyna норм/↑, TIBC ↓; talasemia (талассемия) — mikrocytoza (микроцитоз) при нормальном или высоком числе эритроцитов. Niedobór witaminy B12 (дефицит) — makrocytoza (макроцитоз), hipersegmentacja neutrofilów (гиперсегментация нейтрофилов), zwyrodnienie sznurowe rdzenia (фуникулярный миелоз); лечение B12 i.m.; одна kwas foliowy (фолиевая кислота) при дефиците B12 ухудшает неврологию. Hemoliza (гемолиз): LDH (ЛДГ) ↑, bilirubina pośrednia (непрямой билирубин) ↑, haptoglobina (гаптоглобин) ↓, retikulocyty (ретикулоциты) ↑; BTA (+) — autoimmunologiczna (аутоиммунный). Małopłytkowości (тромбоцитопении): ITP — izolowana (изолированная), лечение при <30 000/мкл или кровотечении (GKS, IVIG); TTP — małopłytkowość + mikroangiopatyczna hemoliza (микроангиопатический гемолиз) (schistocyty — шистоциты), ADAMTS13 <10%, plazmafereza (плазмаферез), przetoczenie płytek (переливание тромбоцитов) нежелательно; HIT — через 5–10 дней heparyny (гепарина), падение płytek (тромбоцитов) >50%, zakrzepica (тромбозы), skala 4T; отменить всю heparynę, назначить argatroban (аргатробан) или fondaparynuks (фондапаринукс), без przetoczenia płytek. Hemofilia A (гемофилия A) — удлинён APTT при нормальном PT, niedobór czynnika (дефицит) VIII; choroba von Willebranda (болезнь фон Виллебранда) — самая частая наследственная, desmopresyna (десмопрессин). Białaczki (лейкозы): CML (przewlekła białaczka szpikowa) — t(9;22) BCR-ABL, imatynib (иматиниб); APL (AML M3) — t(15;17), ATRA, DIC (DIC — rozsiane wykrzepianie wewnątrznaczyniowe); CLL (przewlekła białaczka limfocytowa) — пожилые, limfocytoza (лимфоцитоз), cienie Gumprechta (тени Гумпрехта), CD5+/CD19+/CD23+. Chłoniak Hodgkina (Ходжкин) — komórki Reed-Sternberga (клетки Reed-Sternberg), objawy B (симптомы B) (gorączka (лихорадка) >38 °C, poty nocne (ночные поты), utrata (потеря) >10% массы за 6 мес). Szpiczak plazmocytowy (миелома) — CRAB (hiperkalcemia — гиперкальциемия, nerki — почки, niedokrwistość — анемия, osteoliza — остеолиз), białko M (M-протеин), ≥10% plazmocytów (плазмоцитов) в szpiku (костном мозге). Czerwienica prawdziwa (polycythaemia vera) — JAK2 V617F, upusty krwi (флеботомии) до Ht <45%, ASA.",
                        focus: "Przetoczenie płytek (переливание тромбоцитов) при TTP и HIT — классический неверный вариант. VKA при HIT начинать только после восстановления płytek (тромбоцитов)."
                    },
                    {
                        title: "RZS, toczeń, ZZSK, dna, twardzina, zapalenia naczyń (ревматология)",
                        what: "Топ-факты по chorobom reumatycznym (ревматологическим болезням), которые CEM задаёт чаще всего.",
                        where: "Szczeklik -> Reumatologia; LEK w pigułce, rozdz. 7 (kryteria) и rozdz. 13 «Przeciwciała».",
                        study: "RZS — reumatoidalne zapalenie stawów (РА): kryteria ACR/EULAR 2010 ≥6/10 баллов (суставы, серология RF/anty-CCP, białka ostrej fazy (реактанты острой фазы), длительность ≥6 нед); первый выбор — metotreksat (метотрексат) раз в неделю + kwas foliowy (фолиевая кислота), GKS (ГКС) как «мост». В ciąży (беременность) противопоказаны metotreksat и leflunomid (лефлуномид), допустимы sulfasalazyna (сульфасалазин) и hydroksychlorochina (гидроксихлорохин). Toczeń rumieniowaty układowy — TRU/SLE (СКВ): скрининг ANA (входной критерий EULAR/ACR 2019 — ANA ≥1:80), специфичны anty-dsDNA и anty-Sm, C3/C4 ↓; hydroksychlorochina всем. Toczeń polekowy (лекарственная волчанка) — przeciwciała przeciwhistonowe (антигистоновые антитела) (hydralazyna, prokainamid, izoniazyd). Anty-Ro у беременной — риск wrodzonego bloku AV (врождённой АВ-блокады) у плода. ZZSK — zesztywniające zapalenie stawów kręgosłupa (анкилозирующий спондилит): HLA-B27, zapalenie stawów krzyżowo-biodrowych (сакроилеит), test Schobera (проба Шобера); первый выбор — NLPZ (НПВП), далее anty-TNF/anty-IL-17. Dna moczanowa (подагра): igiełkowate kryształy (игольчатые кристаллы) с ujemną dwójłomnością (отрицательным двулучепреломлением); napad (приступ) — kolchicyna (колхицин), NLPZ или GKS; цель moczanu (урата) <6 мг/дл (<5 при guzkach dnawych (тофусах)); allopurynol (аллопуринол) не отменять во время приступа. Choroba z odkładania pirofosforanu wapnia (пирофосфатная артропатия) — romboidalne kryształy (ромбовидные кристаллы) с dodatnią dwójłomnością (положительным двулучепреломлением). Twardzina układowa (системная склеродермия): anty-Scl-70 — uogólniona (диффузная), antycentromerowe (антицентромерные) — ograniczona (ограниченная) (CREST); twardzinowy przełom nerkowy (склеродермический почечный криз) — ACEI (kaptopryl — каптоприл); GKS в высоких дозах провоцируют криз. Olbrzymiokomórkowe zapalenie tętnic (гигантоклеточный артериит) — возраст >50, ból głowy (головная боль), chromanie żuchwy (перемежающаяся хромота жевательных мышц), OB (СОЭ) ↑; GKS сразу, не дожидаясь biopsji (биопсии). Polimialgia reumatyczna (ревматическая полимиалгия) — prednizon (преднизон) 12,5–25 мг, быстрый ответ. Zespół antyfosfolipidowy — APS (АФС): przeciwciała (антитела) подтверждаются через ≥12 нед; лечение — VKA (NOAC не рекомендуются, особенно при potrójnej dodatniości (тройной позитивности)); в ciąży — HDCz (LMWH, heparyna drobnocząsteczkowa) + ASA.",
                        focus: "LEK w pigułce: «Dna moczanowa — kwas acetylosalicylowy» в списке противопоказанных (малые дозы ASA повышают moczany (урат)). «Twardzina — GKS» — противопоказаны высокие дозы. Оба варианта встречаются в старых вопросах."
                    },
                    {
                        title: "Sepsa, zapalenie opon, borelioza, C. difficile, HIV (инфекции)",
                        what: "Sepsa (сепсис), bakteryjne zapalenie opon mózgowo-rdzeniowych (бактериальный менингит), borelioza (боррелиоз), zakażenie C. difficile (инфекция C. difficile), profilaktyka poekspozycyjna HIV (постконтактная профилактика ВИЧ).",
                        where: "Szczeklik -> Choroby zakaźne; Surviving Sepsis Campaign 2021; ESCMID 2016 (meningitis); PTEiLChZ — rekomendacje dotyczące boreliozy.",
                        study: "Sepsa (сепсис) (Sepsis-3): zakażenie (инфекция) + прирост SOFA ≥2. Wstrząs septyczny (септический шок): wazopresor (вазопрессор) для MAP ≥65 мм рт. ст. и mleczan (лактат) >2 ммоль/л после восполнения объёма. Лечение: antybiotyk (антибиотик) ≤1 ч, posiewy (посевы) до него, krystaloidy (кристаллоиды) 30 мл/кг в первые 3 ч, noradrenalina (норадреналин) первым; hydrokortyzon (гидрокортизон) 200 мг/сут при сохраняющейся потребности в wazopresorze. qSOFA (RR (ЧД) ≥22, zaburzenia świadomości (нарушение сознания), SBP (САД) ≤100) не рекомендуется как единственный скрининг. Zapalenie opon (менингит) у взрослых: ceftriakson (цефтриаксон) или cefotaksym (цефотаксим) + ampicylina (ампициллин) при возрасте >50 лет или immunosupresji (иммуносупрессии) (Listeria) ± wankomycyna (ванкомицин); deksametazon (дексаметазон) 10 мг каждые 6 ч, первая доза до или вместе с antybiotykiem. TK (КТ) перед nakłuciem lędźwiowym (пункцией) — objawy ogniskowe (очаговые симптомы), drgawki (судороги), obrzęk tarczy nerwu wzrokowego (отёк диска), GCS <10, immunosupresja; antybiotyk не откладывать ради TK. Płyn mózgowo-rdzeniowy (ликвор) бактериальный: neutrofile (нейтрофилы), białko (белок) ↑, glukoza (глюкоза) ↓ (<0,4 от сывороточной). Chemioprofilaktyka (химиопрофилактика) контактов при meningokokach (менингококке): cyprofloksacyna (ципрофлоксацин) однократно, ryfampicyna (рифампицин) или ceftriakson. Borelioza (боррелиоз): rumień wędrujący (мигрирующая эритема) — диагноз клинический, без serologii (серологии); doksycyklina (доксициклин) 100 мг 2 раза в день 14 дней; дети <8 лет и беременные — amoksycylina (амоксициллин). C. difficile: wankomycyna p.o. или fidaksomycyna (фидаксомицин) (ESCMID 2021); metronidazol (метронидазол) больше не первый выбор; leki przeciwbiegunkowe (противодиарейные) противопоказаны. HIV (ВИЧ) — profilaktyka poekspozycyjna — PEP (постконтактная профилактика) как можно раньше, не позже 72 ч, курс 28 дней.",
                        focus: "Serologia (серология) при типичном rumieniu wędrującym (мигрирующей эритеме) — неверный ответ (в первые недели часто отрицательна). Metronidazol (метронидазол) при C. difficile — ответ старых вопросов."
                    }
                ]
            },
            {
                title: "Пт: Хирургия — сжатое повторение (ostry brzuch, urazy, naczynia, urologia, onkologia, chirurgia dziecięca)",
                id: "rep-chir",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Chirurgia -> Chirurgia ogólna, Urazy, Naczynia, Urologia -> Test mieszany (30 pytań)",
                popup: { what: "Самые частые хирургические факты шести блоков: ostry brzuch (острый живот), urazy (травма), chirurgia naczyniowa (сосуды), urologia (урология), chirurgia onkologiczna (онкохирургия), chirurgia dziecięca (детская хирургия).", focus: "Что делать в первую очередь (ABCDE, odbarczenie (декомпрессия), операция без ожидания USG (УЗИ) при skręcie jądra (перекруте яичка)), пороги операций (AAA — tętniak aorty brzusznej, zwężenie tętnicy szyjnej (стеноз сонной)) и классические objawy (симптомы).", reading: "Noszczyk «Chirurgia» — главы недель 6–8 и 13–15; LEK w pigułce, rozdz. 2 (25 частых тем хирургии) и rozdz. 15 (правило девяток). Главы Noszczyk открывать только по темам своих ошибок; шесть блоков за 2,5 ч реальны только как чтение выжимки." },
                subtopics: [
                    {
                        title: "Ostry brzuch: wyrostek, drogi żółciowe, niedrożność, perforacja, przepukliny, uchyłki, proktologia (острый живот)",
                        what: "Zapalenie wyrostka robaczkowego (аппендицит), zapalenie pęcherzyka żółciowego (холецистит) и zapalenie dróg żółciowych (холангит), niedrożność (непроходимость), perforacja (перфорация), uwięźnięta przepuklina (ущемлённая грыжа), niedokrwienie krezkowe (мезентериальная ишемия), zapalenie uchyłków (дивертикулит), ropień odbytu (абсцесс прямой кишки) и гнойная хирургия пальцев.",
                        where: "Noszczyk -> Ostre choroby jamy brzusznej; Tokyo Guidelines 2018.",
                        study: "Zapalenie wyrostka robaczkowego (аппендицит): skala Alvarado (шкала Alvarado) (MANTRELS, 10 баллов; ≥7 — высокая вероятность), objawy Blumberga, Rovsinga, Jaworskiego (psoas) (симптомы Блюмберга, Ровзинга, Яворского); у беременных — USG (УЗИ), затем MRI (МРТ). Zapalenie pęcherzyka żółciowego (холецистит): objaw Murphy'ego (симптом Мерфи), USG первым; ранняя cholecystektomia laparoskopowa (лапароскопическая холецистэктомия). Zapalenie dróg żółciowych (холангит): triada Charcota (триада Шарко) (gorączka (лихорадка), żółtaczka (желтуха), боль в правом подреберье), pentada Reynoldsa (пентада Рейнольдса) (+ wstrząs (шок), splątanie (спутанность)) — срочное drenaż dróg żółciowych (дренирование желчных путей) (ECPW/ERCP). Objaw Courvoisiera (симптом Курвуазье) — безболезненный увеличенный pęcherzyk żółciowy (жёлчный пузырь) + żółtaczka → rak głowy trzustki (рак головки поджелудочной железы). Niedrożność (непроходимость): jelito cienkie (тонкая кишка) чаще всего — zrosty (спайки), jelito grube (толстая) — rak (рак); skręt esicy (заворот сигмы) — objaw «ziarna kawy» (кофейного зерна), odkręcenie endoskopowe (эндоскопическая деторсия). Perforacja wrzodu (перфорация язвы) — wolny gaz pod przeponą (свободный газ под диафрагмой) на вертикальном снимке, операция. Przepukliny (грыжи): pachwinowa skośna (паховая косая) — самая частая у обоих полов; udowa (бедренная) — чаще у женщин, наибольший риск uwięźnięcia (ущемления); uwięźnięta (ущемлённая) — операция в срочном порядке. Ostre niedokrwienie krezkowe (острая мезентериальная ишемия): боль непропорциональна находкам, AF (migotanie przedsionków) в анамнезе, mleczan (лактат) ↑, angio-TK (КТ-ангиография). Zapalenie uchyłków esicy (дивертикулит сигмовидной кишки) (choroba uchyłkowa esicy): TK z kontrastem (КТ с контрастом); klasyfikacja Hincheya (классификация Hinchey) — I–II ropień (абсцесс), III ropne zapalenie otrzewnej (гнойный перитонит), IV kałowe zapalenie otrzewnej (каловый перитонит) → операция (часто operacja Hartmanna (операция Гартмана)). Ropień odbytu (абсцесс прямой кишки) — nacięcie i drenaż (разрез и дренирование), одни antybiotyki (антибиотики) не лечат. Zastrzał (панариций) и zanokcica (паронихия) — nacięcie (разрез) при нагноении.",
                        focus: "Analgezja (анальгезия) не маскирует диагноз ostrego brzucha (острого живота) — отказ от обезболивания до осмотра хирурга является неверным ответом в современных вопросах."
                    },
                    {
                        title: "ATLS, urazy głowy, oparzenia, tężec (травма и ожоги)",
                        what: "Первичная оценка по ATLS, wstrząs krwotoczny (геморрагический шок), uraz czaszkowo-mózgowy (ЧМТ), oparzenia (ожоги), profilaktyka tężca (профилактика столбняка).",
                        where: "Noszczyk -> Urazy / Oparzenia; ATLS 10th ed.; ERC 2021 -> Zatrzymanie krążenia w urazach.",
                        study: "Порядок: (c)ABCDE — сначала остановка массивного наружного krwotoku (кровотечения), затем drogi oddechowe (дыхательные пути) со stabilizacją odcinka szyjnego (стабилизацией шейного отдела). Klasy wstrząsu ATLS (классы шока): I <15% objętości krwi krążącej (ОЦК), II 15–30%, III 31–40% (HR (ЧСС) >120, SBP (САД) ↓), IV >40%. Kwas traneksamowy (транексамовая кислота) 1 г за 10 мин в первые 3 ч, затем 1 г за 8 ч. Hipotensja permisywna (допустимая гипотензия) SBP 80–90 мм рт. ст. — кроме urazu czaszkowo-mózgowego (ЧМТ). eFAST — у нестабильного; положительный FAST + нестабильность → laparotomia (лапаротомия); стабильный — TK (КТ), uraz śledziony (повреждение селезёнки) часто лечится консервативно. Tamponada (тампонада) — triada Becka (триада Бека) (hipotensja (гипотензия), poszerzone żyły szyjne (набухшие яремные вены), ściszone tony serca (глухие тоны)). Masywny krwiak opłucnej (массивный гемоторакс) — >1500 мл сразу или >200 мл/ч за 2–4 ч → torakotomia (торакотомия). Drenaż opłucnej (дренаж плевральной полости) — IV–V межреберье впереди linii pachowej środkowej (средней подмышечной линии) («trójkąt bezpieczeństwa» — треугольник безопасности), по верхнему краю нижележащего ребра. Uraz czaszkowo-mózgowy (ЧМТ): GCS ≤8 — intubacja (интубация); krwiak nadtwardówkowy (эпидуральная гематома) — «przerwa jasna» (светлый промежуток), dwuwypukły (двояковыпуклая), a. meningea media; krwiak podtwardówkowy (субдуральная) — sierpowaty (серповидная), żyły mostkowe (мостовые вены), пожилые и алкоголь; triada Cushinga (триада Кушинга) — nadciśnienie (гипертензия), bradykardia (брадикардия), zaburzenia oddychania (нарушение дыхания). Oparzenia (ожоги): reguła dziewiątek (правило девяток) (голова 9, рука 9, передняя и задняя поверхности туловища по 18, нога 18, krocze (промежность) 1), ладонь пациента ≈1%; wzór Parklanda (формула Паркланда) 4 мл × кг × %TBSA, половина за первые 8 ч от момента ожога; в ATLS 10 — 2 мл у взрослых, 3 мл у детей, 4 мл при urazie elektrycznym (электротравме); цель diurezy (диуреза) 0,5 мл/кг/ч у взрослых. Tężec (столбняк): чистая мелкая rana (рана) — anatoksyna (анатоксин) (Td), если <3 доз или последняя >10 лет; прочие раны — если последняя доза >5 лет; неизвестный или неполный анамнез + zanieczyszczona rana (загрязнённая рана) — Td + immunoglobulina przeciwtężcowa (противостолбнячный иммуноглобулин) 250 j.m. (ЕД).",
                        focus: "Wzór Parklanda (формула Паркланда) и значение из ATLS 10 дают разные числа: в польских вопросах CEM ожидается 4 мл. Oparzenia I stopnia (ожоги I степени) в %TBSA для płynoterapii (инфузии) не считаются."
                    },
                    {
                        title: "Tętniak aorty, ostre i przewlekłe niedokrwienie, tętnice szyjne, żylaki (сосудистая хирургия)",
                        what: "Tętniak aorty brzusznej (аневризма брюшной аорты), ostre i przewlekłe niedokrwienie kończyny (острая и хроническая ишемия конечности), zwężenie tętnicy szyjnej (стеноз сонной артерии), żylaki (варикоз) и zakrzepowe zapalenie żył (тромбофлебит).",
                        where: "Noszczyk -> Chirurgia naczyniowa; ESVS 2023–2024.",
                        study: "AAA (tętniak aorty brzusznej): плановая операция при ≥5,5 см у мужчин, ≥5,0 см у женщин, росте ≥1 см/год или симптомах; pęknięcie (разрыв) — боль в животе/спине, tętniący guz (пульсирующее образование), hipotensja (гипотензия) → операция без TK (КТ), если нестабилен. Ostre niedokrwienie (острая ишемия) — 6P (ból — боль, bladość — бледность, brak tętna — отсутствие пульса, parestezje — парестезии, porażenie — паралич, oziębienie — похолодание): heparyna (гепарин) 5000 j.m. (ЕД) i.v. сразу, embolektomia (эмболэктомия) или rewaskularyzacja (реваскуляризация); klasyfikacja Rutherforda (классификация Rutherford): III — необратимая, amputacja (ампутация). Przewlekłe (хроническая): ABI (wskaźnik kostka-ramię) <0,9 — PAD (miażdżyca tętnic kończyn dolnych), >1,4 — несжимаемые артерии (ESC 2024; в старых источниках — >1,3); klasyfikacja Fontaine'a (Fontaine) I — бессимптомно, IIa — chromanie przestankowe (хромота) >200 м, IIb — <200 м, III — ból spoczynkowy (боль покоя), IV — martwica (некроз); лечение — lek przeciwpłytkowy (антиагрегант), statyna (статин), trening marszowy (тренировка ходьбой), cilostazol (цилостазол). Tętnica szyjna (сонная артерия): objawowe zwężenie (симптомный стеноз) 70–99% — endarterektomia (эндартерэктомия), по возможности ≤14 дней от симптомов; 50–69% — рассмотреть. Zakrzepowe zapalenie żył powierzchownych (поверхностный тромбофлебит) ≥5 см — fondaparynuks (фондапаринукс) 2,5 мг 45 дней; близко к ujściu odpiszczelowo-udowemu (сафено-феморальному соустью) (≤3 см) — лечение как ZŻG (ТГВ).",
                        focus: "Бессимптомный tętniak (аневризма) 4,5 см у мужчины — наблюдение (USG), а не операция. При ostrym niedokrwieniu (острой ишемии) heparyna (гепарин) вводится до визуализации."
                    },
                    {
                        title: "Kolka nerkowa, skręt jądra, BPH, nowotwory układu moczowego (урология)",
                        what: "Kolka nerkowa (почечная колика), skręt jądra (перекрут яичка), łagodny rozrost gruczołu krokowego — BPH (доброкачественная гиперплазия простаты), nowotwory układu moczowo-płciowego (опухоли мочеполовой системы).",
                        where: "Noszczyk -> Urologia; EAU Guidelines.",
                        study: "Kolka nerkowa (почечная колика): NLPZ (НПВП) (diklofenak — диклофенак) — первый выбор, metamizol (метамизол); золотой стандарт диагностики — TK bez kontrastu (КТ без контраста); kamienie moczowodu (камни мочеточника) <10 мм в дистальном отделе — medyczna terapia wydalnicza (медикаментозное изгнание) α-blokerem (α-блокатором) (tamsulosyna — тамсулозин). Obstrukcja (обструкция) + zakażenie (gorączka — лихорадка) — срочная odbarczenie (декомпрессия) (nefrostomia (нефростомия) или stent DJ), не ESWL. Skręt jądra (перекрут яичка): внезапная боль, высокое поперечное положение, нет odruchu mięśnia dźwigacza jądra (кремастерного рефлекса), objaw Prehna (симптом Prehna) отрицательный; операция в первые 6 ч, USG (УЗИ) не должен задерживать. Zapalenie najądrza (эпидидимит) — постепенное начало, gorączka, ropomocz (пиурия), Prehn положительный. BPH: IPSS; α₁-bloker (α₁-блокатор) первым; inhibitor 5-α-reduktazy (ингибитор редуктазы) (finasteryd — финастерид) при простате >40 мл; ostre zatrzymanie moczu (острая задержка мочи) — cewnikowanie (катетеризация). Bezbolesny krwiomocz (безболезненная гематурия) у взрослого курильщика — rak pęcherza moczowego (рак мочевого пузыря) до исключения: cystoskopia (цистоскопия) + urografia TK (КТ-урография). Rak nerki (рак почки): krwiomocz (гематурия), боль, guz (опухоль) (полная триада редко), paranowotworowe (паранеопластические) czerwienica (полицитемия) и hiperkalcemia (гиперкальциемия). Nowotwór jądra (опухоль яичка): nasieniak (семинома) — самая частая; маркёры AFP (при чистом nasieniaku не повышен), β-hCG, LDH (ЛДГ); orchidektomia (орхиэктомия) только z dostępu pachwinowego (паховым доступом), biopsja przez mosznę (биопсия через мошонку) противопоказана. Организованного популяционного badania przesiewowego raka gruczołu krokowego (скрининга рака простаты) в Польше нет.",
                        focus: "В вопросе о skręcie jądra (перекруте) вариант «wykonać USG Doppler i obserwować» — ловушка, если клиника типична. Правильный ответ — срочная rewizja moszny (ревизия мошонки)."
                    },
                    {
                        title: "Rak jelita grubego, żołądka, trzustki, piersi, tarczycy, czerniak (онкохирургия)",
                        what: "Топ-факты по nowotworom (опухолям), которые CEM относит к хирургии.",
                        where: "Noszczyk -> Chirurgia onkologiczna; PTOK / PTChO — zalecenia; LEK w pigułce, rozdz. 12 «Markery».",
                        study: "Rak jelita grubego (рак толстой кишки): правые отделы — niedokrwistość (анемия), левые — niedrożność (непроходимость) и zmiana rytmu wypróżnień (изменение ритма стула); rak odbytnicy (рак прямой кишки) — MRI miednicy (МРТ малого таза), neoadiuwantna (chemio)radioterapia (неоадъювантная (химио)лучевая терапия), TME (całkowite wycięcie mezorektum). Kryteria amsterdamskie (критерии Amsterdam) (zespół Lyncha — синдром Линча): 3 родственника, 2 поколения, 1 до 50 лет. FAP (APC) — profilaktyczna kolektomia (профилактическая колэктомия). Rak żołądka (рак желудка): węzeł Virchowa (узел Вирхова), guzek siostry Mary Joseph (узел сестры Мэри Джозеф), guz Krukenberga (опухоль Крукенберга); H. pylori — фактор риска. Przełyk (пищевод): rak płaskonabłonkowy (плоскоклеточный) — верхняя и средняя треть (алкоголь, курение), gruczolakorak (аденокарцинома) — нижняя треть (przełyk Barretta — пищевод Барретта). Rak trzustki (рак поджелудочной): CA 19-9, objaw Courvoisiera (симптом Курвуазье), resekcyjne (резектабельны) около 15–20%, operacja Whipple'a (операция Уиппла). Rak piersi (рак молочной железы): potrójna ocena (тройная оценка) (осмотр, визуализация, biopsja gruboigłowa (толстоигольная биопсия)); BI-RADS 4–5 — biopsja; при cN0 — biopsja węzła wartowniczego (биопсия сторожевого узла); BRCA1 — чаще potrójnie ujemny (трижды негативный). Tarczyca (щитовидная): rak brodawkowaty (папиллярный) — самый частый, przerzuty drogą chłonną (лимфогенное метастазирование); pęcherzykowy (фолликулярный) — drogą krwionośną (гематогенное); rdzeniasty (медуллярный) — kalcytonina (кальцитонин), MEN2 (RET). Czerniak (меланома): ABCDE; biopsja wycinająca (диагностическое иссечение) с отступом 1–2 мм (не biopsja nacinająca (инцизионная биопсия) и не «golenie» (бритьё)); grubość wg Breslowa (толщина по Breslow) — главный прогностический фактор; окончательные marginesy (края): in situ 0,5 см, ≤2 мм — 1 см, >2 мм — 2 см.",
                        focus: "Markery nowotworowe (онкомаркёры) (CEA, CA 19-9) не используются для badań przesiewowych (скрининга) и не ставят диагноз — они для мониторинга wznowy (рецидива). Вариант «oznaczenie CEA jako badanie przesiewowe» неверен."
                    },
                    {
                        title: "Chirurgia dziecięca (детская хирургия)",
                        what: "Неотложные хирургические состояния noworodków (новорождённых) и детей.",
                        where: "Noszczyk -> Chirurgia dziecięca; Kawalec/Grenda/Kulus «Pediatria» -> Chirurgia.",
                        study: "Przerostowe zwężenie odźwiernika (гипертрофический пилоростеноз): чаще первенцы-мальчики 2–8 нед, wymioty chlustające (фонтанная рвота) без желчи, «oliwka» (олива), zasadowica hipochloremiczna hipokaliemiczna (гипохлоремический гипокалиемический алкалоз); USG (УЗИ); сначала коррекция elektrolitów (электролитов), потом pyloromiotomia (пилоромиотомия). Wgłobienie (инвагинация): 6 мес — 3 года, схваткообразная боль, stolec «galaretka malinowa» (малиновое желе), objaw tarczy (симптом мишени) на USG; dezinwaginacja hydrostatyczna lub pneumatyczna (гидростатическая или пневматическая дезинвагинация), при zapaleniu otrzewnej (перитоните) — операция. Wymioty żółciowe (желчная рвота) у новорождённого — nieprawidłowy zwrot jelit ze skrętem (мальротация с заворотом) до исключения, экстренно. Choroba Hirschsprunga (болезнь Гиршпрунга): отхождение smółki (мекония) >48 ч, wzdęcie (вздутие); диагноз — biopsja odbytnicy (ректальная биопсия) (нет komórek zwojowych — ганглиозных клеток). Zarośnięcie przełyku z przetoką (атрезия пищевода со свищом) (чаще проксимальная атрезия + дистальный свищ): wielowodzie (многоводие), ślinienie (слюнотечение), zgłębnik (зонд) не проходит. Wytrzewienie wrodzone (гастрошизис) — дефект справа от пупка без мешка; przepuklina pępowinowa (омфалоцеле) — с мешком, сочетается с aberracjami chromosomowymi (хромосомными аномалиями). Wrodzona przepuklina przeponowa (врождённая диафрагмальная грыжа) (чаще левая, Bochdaleka — Бохдалека): łódkowaty brzuch (ладьевидный живот), не вентилировать workiem samorozprężalnym (мешком Амбу) через маску — intubacja (интубация). Wnętrostwo (крипторхизм) — orchidopeksja (орхидопексия) в 6–12 мес (не позже 18 мес). Uchyłek Meckela (дивертикул Меккеля) — «reguła dwójek» (правило двоек), bezbolesne krwawienie (безболезненное кровотечение), scyntygrafia z technetem (сцинтиграфия с технецием).",
                        focus: "Очерёдность при zwężeniu odźwiernika (пилоростенозе) — любимый вопрос: операция не экстренная, сначала nawodnienie (регидратация) и коррекция zasadowicy (алкалоза)."
                    }
                ]
            },
            {
                title: "Сб: Тест 40 вопросов по 10 слабым темам + обновление тетради ошибок",
                id: "rep-1-test",
                time: "1.5 ч",
                lepolekPath: "Testy -> Test własny: 10 słabych tematów z symulacji nr 1 (40 pytań CEM)",
                popup: { what: "Проверка, закрылись ли за неделю 10 słabych tematów (слабых тем), найденных во вторник.", focus: "Сравнить процент по каждой теме с симуляцией №1. Тема, где снова ≥2 ошибки из 4, остаётся в списке на следующую неделю.", reading: "Список 10 слабых тем и zeszyt błędów (тетрадь ошибок)." },
                subtopics: [
                    {
                        title: "Test 40 pytań (тест 40 вопросов)",
                        what: "По 4 вопроса на каждую из 10 слабых тем, 60 мин, режим экзамена.",
                        where: "LEPOLEK -> Testy, фильтр по темам списка.",
                        study: "Темп 1,5 мин на вопрос. Если по какой-то теме в базе меньше 4 невиданных вопросов — добрать вопросами соседней темы того же раздела и отметить это в протоколе.",
                        focus: "Не решать вопросы, ответ на которые помнишь по разбору вторника: они показывают память, а не знание темы."
                    },
                    {
                        title: "Analiza błędów (разбор и переклассификация)",
                        what: "Разбор 40 вопросов с теми же типами ошибок L/N/P/J/Z.",
                        where: "Объяснения LEPOLEK + тетрадь ошибок.",
                        study: "Для каждой темы: результат во вторник → результат сегодня. Тема «закрыта» при 4/4 или 3/4 без ошибок типа L. Незакрытые темы — первой строкой в список к rep-2.",
                        focus: "Если в теме повторяется одна и та же ошибка L — значит, карточка Anki сформулирована неудачно: переписать её вопросом из клиники, а не определением."
                    },
                    {
                        title: "Podsumowanie tygodnia (итоговая таблица недели)",
                        what: "Одна строка на каждый раздел и список тем, переходящих на следующую неделю.",
                        where: "Протокол симуляции №1.",
                        study: "Записать: процент по разделам в симуляции №1, число закрытых тем из 10, новые темы из сжатых повторений среды–пятницы, которые оказались незнакомыми. Проверить часы недели: 17 ч — предел; если неделя потребовала больше, сократить rep-2, а не выходной.",
                        focus: "Отметить самый слабый раздел по симуляции №1 — кандидат на блок пятницы недели sym-2. Окончательно раздел выбирается по сумме симуляций №1 и №2 (sym2-blok): один тест из 40 вопросов на раздел для такого решения слишком шумный."
                    }
                ]
            }
        ]
    },
    {
        key: "rep-2",
        subject: "powtorka",
        title: "Повторение II — Акушерство, гинекология, педиатрия, сквозные темы",
        days: [
            {
                title: "Пн: Акушерство — сжатое повторение (standard okołoporodowy, poród i KTG, nadciśnienie i cukrzyca w ciąży, krwawienia, poród przedwczesny)",
                id: "rep-polozn",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Ginekologia i położnictwo -> Położnictwo -> Test mieszany (30 pytań)",
                popup: { what: "Самые частые акушерские факты: standard opieki okołoporodowej (польский стандарт ведения беременности), poród (роды) и KTG, nadciśnienie (гипертензия) и cukrzyca ciężarnych (диабет беременных), krwawienia (кровотечения), poród przedwczesny (преждевременные роды), ciąża ektopowa (внематочная беременность) и poronienie (выкидыш), konflikt serologiczny (серологический конфликт), miednica (таз) и mechanizm porodu (биомеханизм родов).", focus: "Сроки badań przesiewowych (скринингов) по стандарту, пороги OGTT, siarczan magnezu (магнезия) и её токсичность, różnicowanie łożyska przodującego (предлежания) и przedwczesnego oddzielenia łożyska (отслойки), GKS (глюкокортикостероиды) и tokoliza (токолиз).", reading: "Bręborowicz «Położnictwo i ginekologia»; Rozporządzenie w sprawie standardu organizacyjnego opieki okołoporodowej; rekomendacje PTGiP; LEK w pigułce, rozdz. 15 (раздел «Ginekologia i położnictwo»)." },
                subtopics: [
                    {
                        title: "Standard organizacyjny opieki okołoporodowej, konflikt serologiczny (польский стандарт ведения беременности, серологический конфликт)",
                        what: "Обязательный график badań (обследований) ciężarnej (беременной) в Польше; диагностика и лечение alloimmunizacji (аллоиммунизации) antygenami erytrocytarnymi (эритроцитарными антигенами).",
                        where: "Rozporządzenie Ministra Zdrowia w sprawie standardu organizacyjnego opieki okołoporodowej (2018, с изменениями); Bręborowicz -> Opieka przedporodowa.",
                        study: "USG (УЗИ): 11+0–13+6 tc. (нед) (с оценкой NT — przezierności karkowej), 18–22 tc. (анатомия), 27–32 tc. (рост, łożysko — плацента), после 40 tc. OGTT 75 г — 24–28 tc.; glikemia na czczo (глюкоза натощак) — при первом визите (92–125 мг/дл → GDM — cukrzyca ciążowa (гестационный диабет), ≥126 → cukrzyca jawna (явный диабет)). Wymaz (мазок) на GBS (Streptococcus agalactiae) z pochwy i odbytu (из влагалища и прямой кишки) — 35–37 tc. Rh(−) без przeciwciał (антител): oznaczenie przeciwciał (определение антител) и immunoglobulina anti-D около 28 tc., повторно в течение 72 ч после родов ребёнка Rh(+), а также в течение 72 ч после событий с риском immunizacji (сенсибилизации) (poronienie — выкидыш, ciąża ektopowa — внематочная беременность, amniopunkcja — амниоцентез, uraz brzucha — травма живота, krwawienie — кровотечение). Konflikt serologiczny: при выявленных przeciwciałach anti-D (pośredni test antyglobulinowy) — miano (титр) в динамике; при krytycznym mianie (обычно ≥1:16) — badanie dopplerowskie MCA-PSV (допплерометрия); MCA-PSV >1,5 MoM — подозрение на ciężką niedokrwistość płodu (тяжёлую анемию плода) → kordocenteza (кордоцентез) и transfuzja dopłodowa (внутриматочное переливание); obrzęk uogólniony płodu (водянка плода) — тяжёлая форма; у noworodka (новорождённого) — BTA (+), żółtaczka (желтуха) в первые 24 ч, fototerapia, transfuzja wymienna (заменное переливание). Серология по стандарту 2018: первый визит (до 10 tc.) — HIV, HCV, VDRL; 33–37 tc. — HBsAg, повторно HIV, HCV, VDRL. Kwas foliowy (фолиевая кислота) 0,4 мг до и в начале беременности; после ребёнка с wadą cewy nerwowej (дефектом нервной трубки) — 4 мг (сверить сроки и объём обследований с актуальной редакцией стандарта).",
                        focus: "GBS в 35–37 tc. — самый частый числовой вопрос раздела. Положительный GBS → penicylina i.v. (внутривенный пенициллин) w porodzie (в родах), а не лечение во время беременности. Anti-D не вводят женщине, у которой przeciwciała anti-D уже есть: ей нужна диагностика niedokrwistości płodu (анемии плода)."
                    },
                    {
                        title: "Budowa miednicy, mechanizm porodu, KTG, skala Bishopa (таз, биомеханизм родов, KTG)",
                        what: "Wymiary miednicy (размеры таза) и główki (головки), mechanizm porodu (биомеханизм родов), okresy porodu (периоды родов), оценка KTG, dojrzałość szyjki macicy (готовность шейки матки).",
                        where: "Bręborowicz -> Miednica kostna / Mechanizm porodu / Poród fizjologiczny / Nadzór nad płodem; FIGO 2015 (intrapartum fetal monitoring).",
                        study: "Miednica (таз): conjugata vera (obstetrica) ≈11 см; conjugata diagonalis ≈12,5–13 см, vera = diagonalis − 1,5–2 см; во wchodzie miednicy (входе в таз) наибольший размер поперечный, в wychodzie (выходе) — прямой. Główka (головка): при ułożeniu potylicowym przednim (переднем затылочном вставлении) через таз проходит наименьший размер — wymiar podpotyliczno-bregmatyczny (малый косой) ≈9,5 см, obwód (окружность) ≈32 см. Mechanizm porodu: wstawianie się (вставление) szwem strzałkowym (стреловидным швом) в поперечном или косом размере входа → przygięcie (сгибание) → zwrot wewnętrzny (внутренний поворот; затылок к лону) → odgięcie (разгибание; точка опоры — dołek podpotyliczny под spojeniem łonowym) → zwrot zewnętrzny główki (наружный поворот головки). Okresy porodu: II — у pierwiastki (первородящей) до 2 ч (дольше при analgezji zewnątrzoponowej — эпидуральной анальгезии), III — до 30 мин, IV — 2 ч после urodzenia łożyska (рождения последа); utrata krwi (кровопотеря) при porodzie fizjologicznym около 250 мл. KTG по FIGO 2015: częstość podstawowa (базальная частота) 110–160 уд/мин, zmienność (вариабельность) 5–25 уд/мин; deceleracje wczesne (ранние) — ucisk główki (сдавление головки; норма), późne (поздние) — niewydolność łożyska (плацентарная недостаточность), zmienne (вариабельные) — ucisk pępowiny (сдавление пуповины); zapis sinusoidalny (синусоидальный ритм) — niedokrwistość płodu (анемия плода). Skala Bishopa (5 параметров: rozwarcie — раскрытие, skrócenie — сглаживание, położenie główki, konsystencja, położenie szyjki; максимум 13): <6 — szyjka niedojrzała (незрелая) → preindukcja (подготовка) (mizoprostol, dinoproston, cewnik Foleya — катетер Фолея), ≥8 — dojrzała (зрелая).",
                        focus: "В LEK w pigułce норма FHR (ЧСС плода) 110–150 — это старая граница; по FIGO 2015 — 110–160. Deceleracje późne (поздние децелерации) — самый частый «патологический» ответ в задачах с nadciśnieniem (гипертензией) или FGR."
                    },
                    {
                        title: "Nadciśnienie, stan przedrzucawkowy, GDM (гипертензия и диабет в беременности)",
                        what: "Stan przedrzucawkowy (преэклампсия), rzucawka (эклампсия), HELLP и cukrzyca ciążowa — GDM (гестационный диабет).",
                        where: "Bręborowicz -> Nadciśnienie w ciąży / Cukrzyca w ciąży; rekomendacje PTGiP; PTD — rozdział «Cukrzyca a ciąża».",
                        study: "Nadciśnienie tętnicze indukowane ciążą (гестационная гипертензия) — после 20 tc.; stan przedrzucawkowy — nadciśnienie + białkomocz (протеинурия) ≥300 мг/сут или поражение органов; ciężki (тяжёлый) — ≥160/110. Лечение: metyldopa (метилдопа), labetalol, nifedypina (нифедипин); противопоказаны ACEI (иАПФ), sartany (ARB), diuretyki (диуретики). Профилактика у группы высокого риска — ASA (аспирин) 150 мг на ночь с 11–16 tc. до 36 tc. Siarczan magnezu (сульфат магния) — профилактика и лечение rzucawki: dawka nasycająca (нагрузка) 4–6 г i.v., затем 1–2 г/ч; контроль — odruch kolanowy (коленный рефлекс), częstość oddechów (ЧД) >12, diureza (диурез) >25–30 мл/ч; антидот — 10% glukonian wapnia (глюконат кальция) 10 мл i.v. HELLP — hemoliza, ↑ AST/ALT, płytki krwi (тромбоциты) <100 000/мкл → ukończenie ciąży (родоразрешение). GDM (критерии WHO 2013, PTD): na czczo (натощак) ≥92, через 1 ч ≥180, через 2 ч ≥153 мг/дл — достаточно одного значения. Лечение — dieta, при недостижении целей — insulina.",
                        focus: "Zniesienie odruchu kolanowego (потеря коленного рефлекса) на фоне siarczanu magnezu (магнезии) — первый признак передозировки: остановить инфузию и дать glukonian wapnia (глюконат кальция)."
                    },
                    {
                        title: "Łożysko przodujące, przedwczesne oddzielenie łożyska, krwotok poporodowy (кровотечения в беременности и родах)",
                        what: "Krwawienia (кровотечения) II–III trymestru (триместра) и krwotok poporodowy (послеродовое кровотечение).",
                        where: "Bręborowicz -> Krwawienia w II i III trymestrze / Krwotok poporodowy.",
                        study: "Łożysko przodujące (предлежание плаценты): безболезненное ярко-красное krwawienie, macica miękka (матка мягкая); badanie wewnętrzne (влагалищное исследование) противопоказано до USG; родоразрешение — cięcie cesarskie (КС). Przedwczesne oddzielenie łożyska (отслойка плаценты): боль, napięta bolesna macica (напряжённая болезненная матка), zagrożenie płodu (дистресс плода); факторы риска — nadciśnienie (гипертензия), uraz (травма), kokaina; tokoliza (токолиз) противопоказана. Vasa praevia — кровотечение при pęknięciu błon płodowych (разрыве плодных оболочек) с быстрым ухудшением KTG. Krwotok poporodowy — PPH (послеродовое кровотечение): ≥500 мл после porodu drogami natury (родов через естественные пути), ≥1000 мл после cięcia cesarskiego; причины «4T» — tonus (самая частая), trauma, tissue, thrombin. Лечение: masaż macicy (массаж матки), oksytocyna (окситоцин), kwas traneksamowy (транексамовая кислота) 1 г i.v. ≤3 ч, затем metyloergometryna (метилэргометрин; противопоказан при nadciśnieniu), karboprost (карбопрост; противопоказан при astmie — астме), balon (баллон), szwy B-Lynch (швы), histerektomia (гистерэктомия).",
                        focus: "Главная дифференцировка: боль и napięcie macicy (тонус матки). Безболезненное krwawienie + miękka macica → łożysko przodujące (предлежание); боль + «deskowata» (деревянная) macica → przedwczesne oddzielenie łożyska (отслойка)."
                    },
                    {
                        title: "Poród przedwczesny, PPROM (преждевременные роды и PPROM)",
                        what: "Poród (роды) в 22+0–36+6 tc. (нед), профилактика осложнений у wcześniaka (недоношенного).",
                        where: "Bręborowicz -> Poród przedwczesny; rekomendacje PTGiP.",
                        study: "Steroidoterapia (стероиды) для dojrzewania płuc (созревания лёгких): 24+0–33+6 tc. — betametazon (бетаметазон) 12 мг i.m. 2 дозы через 24 ч (или deksametazon (дексаметазон) 6 мг 4 дозы через 12 ч). Siarczan magnezu (сульфат магния) для neuroprotekcji (нейропротекции) — при zagrażającym porodzie (угрожающих родах) до 32 tc. Tokoliza (токолиз) до 48 ч, чтобы завершить курс GKS: atosiban (атосибан), nifedypina (нифедипин); indometacyna (индометацин) — только до 32 tc. Противопоказания к tokolizie: przedwczesne oddzielenie łożyska (отслойка плаценты), zapalenie błon płodowych (хориоамнионит), obumarcie płodu (гибель плода), ciężki stan przedrzucawkowy (тяжёлая преэклампсия), zagrożenie płodu (дистресс плода). Krótka szyjka (короткая шейка; <25 мм до 24 tc. при ciąży pojedynczej — одноплодной) — progesteron dopochwowo (вагинальный прогестерон). PPROM: antybiotyk (ampicylina + makrolid — ампициллин + макролид), GKS; amoksycylina z kwasem klawulanowym (амоксициллин с клавуланатом) не применяют (риск NEC у noworodka — новорождённого).",
                        focus: "Из списка LEK w pigułce: при przedwczesnym oddzieleniu łożyska (отслойке плаценты) tokoliza (nifedypina, β-mimetyki, progesteron, siarczan magnezu как токолитик) противопоказана. Amoksycylina z kwasem klawulanowym при PPROM — неверный ответ."
                    },
                    {
                        title: "Ciąża ektopowa, poronienie (внематочная беременность и выкидыш)",
                        what: "Ciąża ektopowa (беременность вне полости матки) и poronienie samoistne (самопроизвольное прерывание беременности) до 22+0 tc. (нед).",
                        where: "Bręborowicz -> Ciąża ektopowa / Poronienie; rekomendacje PTGiP; ESHRE 2022 (recurrent pregnancy loss).",
                        study: "Ciąża ektopowa: чаще всего — bańka jajowodu (ампулярная часть маточной трубы); факторы риска — PID (chlamydie — хламидии), operacje jajowodów (операции на трубах), wkładka wewnątrzmaciczna (ВМС), IVF (ЭКО), wcześniejsza ciąża ektopowa (предыдущая внематочная). Диагностика — β-hCG + TVUS (трансвагинальное USG): если β-hCG выше strefy dyskryminacyjnej (дискриминационной зоны) (≈1500–2000 мМЕ/мл; в части новых рекомендаций — до 3500) и в полости матки нет pęcherzyka ciążowego (плодного яйца) — подозрение на ciążę ektopową; недостаточный прирост β-hCG за 48 ч или plateau — против нормальной беременности. Metotreksat (метотрексат) однократно i.m.: hemodynamicznie stabilna (гемодинамически стабильная) пациентка, нет pęknięcia (разрыва), β-hCG обычно <5000 мМЕ/мл, нет czynności serca zarodka (сердцебиения эмбриона), образование <3,5–4 см, возможен контроль β-hCG. Иначе — laparoskopia (лапароскопия) (salpingektomia или salpingotomia); niestabilna (нестабильная) пациентка — немедленная операция. Poronienie (выкидыш): zagrażające (угрожающий) — krwawienie, szyjka zamknięta (шейка закрыта), płód żywy (плод жив); w toku (в ходе) — szyjka rozwarta (раскрыта); niecałkowite (неполный) — resztki (остатки) в полости матки; całkowite (полный); zatrzymane (несостоявшийся) — плод погиб, шейка закрыта. Niecałkowite и zatrzymane — postępowanie wyczekujące (выжидательная тактика), mizoprostol (± mifepriston) или aspiracja (аспирация). Poronienia nawracające (привычное невынашивание): ESHRE 2022 — ≥2 потери беременности; в старых определениях — ≥3 подряд; обследование — zespół antyfosfolipidowy (антифосфолипидный синдром), kariotyp rodziców (кариотип родителей), anatomia macicy. Rh(−) — anti-D после poronienia и ciąży ektopowej.",
                        focus: "Ból podbrzusza (боль внизу живота) и plamienie (кровянистые выделения) у женщины репродуктивного возраста — сначала β-hCG: ciążę ektopową (внематочную беременность) исключают первой. Niestabilna (нестабильная) пациентка с подозрением на pęknięcie (разрыв) — операция, а не metotreksat (метотрексат) и не повтор β-hCG через 48 ч."
                    }
                ]
            },
            {
                title: "Вт: Гинекология и онкогинекология — сжатое повторение",
                id: "rep-gin",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Ginekologia i położnictwo -> Ginekologia, Onkologia ginekologiczna -> Test mieszany (30 pytań)",
                popup: { what: "Самые частые факты гинекологии: rak szyjki macicy (рак шейки матки) и badania przesiewowe (скрининг), rak endometrium (рак эндометрия) и rak jajnika (рак яичника), ginekologia endokrynologiczna (эндокринная гинекология), zakażenia (инфекции), antykoncepcja (контрацепция) и menopauza.", focus: "Стадии FIGO и соответствующее лечение, критерии PCOS старые и новые, leki (препараты) при zakażeniach dróg rodnych (инфекциях половых путей), bezwzględne przeciwwskazania (абсолютные противопоказания) к estrogenom (эстрогенам).", reading: "Bręborowicz «Położnictwo i ginekologia» -> Ginekologia; rekomendacje PTGiP; LEK w pigułce, rozdz. 7 (FIGO) и rozdz. 11 «Badania przesiewowe»." },
                subtopics: [
                    {
                        title: "Rak szyjki macicy (рак шейки матки и скрининг)",
                        what: "HPV-zależny rak szyjki macicy (HPV-зависимый рак шейки матки): badania przesiewowe (скрининг), cytologia (цитология), стадии, лечение.",
                        where: "Bręborowicz -> Onkologia ginekologiczna -> Rak szyjki macicy; FIGO 2018; Program profilaktyki raka szyjki macicy (NFZ).",
                        study: "Onkogenne HPV (онкогенные) 16 и 18 — около 70% случаев. Cytologia по Bethesda: ASC-US, LSIL, ASC-H, HSIL, AGC; HSIL и ASC-H → kolposkopia z biopsją (кольпоскопия с биопсией). Польская программа (с 1.07.2025, Rozporządzenie MZ z 7.03.2025): основной скрининговый тест — HPV HR z genotypowaniem (с генотипированием) у женщин 25–64 лет раз в 5 лет; при положительном HPV из того же материала делают cytologię na podłożu płynnym — LBC (жидкостную цитологию); при нормальной LBC — повтор через 12 мес. В LEK w pigułce и старых вопросах CEM — cytologia каждые 3 года у женщин 25–59 лет. FIGO 2018: IA1 — inwazja (инвазия) ≤3 мм, IA2 — 3–5 мм, IB — >5 мм или видимая опухоль (IB1 ≤2 см, IB2 2–4 см, IB3 >4 см), IIA — верхние 2/3 pochwy (влагалища), IIB — przymacicza (параметрии), IIIA — нижняя треть pochwy, IIIB — ściana miednicy (стенка таза) или wodonercze (гидронефроз), IIIC — węzły chłonne (лимфоузлы), IVA — błona śluzowa pęcherza moczowego/odbytnicy (слизистая мочевого пузыря/прямой кишки), IVB — przerzuty odległe (отдалённые метастазы). Лечение: IA1 — konizacja (конизация) или histerektomia prosta (простая гистерэктомия); IB1–IIA1 — histerektomia radykalna (радикальная гистерэктомия); от IIB — radiochemioterapia (химиолучевая терапия) с cisplatyną (цисплатином).",
                        focus: "Wodonercze (гидронефроз) сразу даёт IIIB независимо от размера опухоли. При IIB операция — неверный ответ. На вопрос «co ile lat» по действующей программе — 5 лет (HPV HR); 3 года — ответ старых вопросов про cytologię (цитологию)."
                    },
                    {
                        title: "Rak endometrium, guzy jajnika (рак эндометрия и опухоли яичника)",
                        what: "Rak endometrium (рак эндометрия) — самый частый рак narządów płciowych (женских половых органов) в Польше; rak jajnika (рак яичника) — самый смертоносный из них.",
                        where: "Bręborowicz -> Rak trzonu macicy / Nowotwory jajnika; FIGO 2023 (endometrium).",
                        study: "Rak endometrium: krwawienie po menopauzie (кровотечение в постменопаузе) → TVUS; endometrium >4 мм → biopsja (биопсия) или histeroskopia (гистероскопия). Факторы риска — otyłość (ожирение), cukrzyca (СД), nierództwo (отсутствие родов), późna menopauza (поздняя менопауза), tamoksyfen (тамоксифен), zespół Lyncha (синдром Линча), PCOS. Лечение — histerektomia z przydatkami (гистерэктомия с придатками) ± węzły chłonne/węzeł wartowniczy (лимфоузлы/сторожевой узел). FIGO 2023 включает klasyfikację molekularną (молекулярную классификацию) (POLE, p53); в старых вопросах — FIGO 2009. Guzy jajnika (опухоли яичника): самый частый złośliwy (злокачественный) тип — rak surowiczy high-grade (серозный); CA-125 >35 j./ml неспецифичен (повышен при endometriozie — эндометриозе, ciąży — беременности); skale IOTA, RMI, ROMA (CA-125 + HE4). Guzy germinalne (герминогенные) у молодых: rozrodczak (дисгерминома) — LDH, guz pęcherzyka żółtkowego (опухоль желточного мешка) — AFP, rak kosmówki (хориокарцинома) — β-hCG. Ziarniszczak (гранулёзоклеточная опухоль) — estrogeny (эстрогены), inhibina (ингибин). Zespół Meigsa (синдром Мейгса) — włókniak (фиброма) + wodobrzusze (асцит) + płyn w opłucnej (гидроторакс). Риск — BRCA1/2, zespół Lyncha; защищают porody (роды), laktacja (лактация), doustna antykoncepcja (оральные контрацептивы), salpingektomia (сальпингэктомия).",
                        focus: "Badań przesiewowych w kierunku raka jajnika (скрининга рака яичника; CA-125 или USG у здоровых) нет — вариант «badanie przesiewowe CA-125» неверен."
                    },
                    {
                        title: "PCOS, endometrioza, mięśniaki, AUB, hiperprolaktynemia (эндокринная гинекология и доброкачественная патология)",
                        what: "PCOS — zespół policystycznych jajników (СПКЯ), endometrioza (эндометриоз), mięśniaki macicy (миома), AUB — nieprawidłowe krwawienia maciczne (аномальные маточные кровотечения), hiperprolaktynemia (гиперпролактинемия).",
                        where: "Bręborowicz -> Endokrynologia ginekologiczna; International PCOS Guideline 2023; ESHRE 2022 (endometriosis); FIGO PALM-COEIN.",
                        study: "PCOS (kryteria rotterdamskie — Роттердам): 2 из 3 — oligo-/brak owulacji (олиго/ановуляция), hiperandrogenizm (гиперандрогения), policystyczne jajniki (поликистозные яичники). Порог USG: ≥20 pęcherzyków (фолликулов) в яичнике (2023); в старых вопросах — ≥12. У взрослых AMH может заменить USG. Indukcja owulacji (индукция овуляции) — letrozol (летрозол) первым выбором (раньше — klomifen — кломифен); metformina (метформин) — для zaburzeń metabolicznych (метаболических нарушений). Endometrioza: bolesne miesiączkowanie (дисменорея), dyspareunia (диспареуния), niepłodność (бесплодие); ESHRE 2022 — диагноз возможен по USG/MRI без laparoskopii (лапароскопии); лечение первой линии — NLPZ (НПВП) + progestageny (прогестагены) (dienogest — диеногест) или COC (комбинированные оральные контрацептивы). Mięśniaki (миома) — самая частая доброкачественная опухоль матки; octan uliprystalu (улипристала ацетат) ограничен из-за uszkodzenia wątroby (поражения печени) (EMA 2020). AUB — классификация PALM-COEIN (Polyp, Adenomyosis, Leiomyoma, Malignancy; Coagulopathy, Ovulatory, Endometrial, Iatrogenic, Not classified). Hiperprolaktynemia: исключить ciążę (беременность), niedoczynność tarczycy (гипотиреоз), leki (препараты: neuroleptyki — нейролептики, metoklopramid — метоклопрамид); лечение — kabergolina (каберголин) или bromokryptyna (бромокриптин).",
                        focus: "Порог 12 vs 20 pęcherzyków и klomifen vs letrozol — два места, где старый и новый ответы различаются. На экзамене — новый; старый только если вопрос прямо называет старые критерии (правило экзамена «старое или новое» — sym2-cel-1)."
                    },
                    {
                        title: "Zapalenia pochwy, choroby przenoszone drogą płciową, PID (инфекции половых путей и ИППП)",
                        what: "Zapalenia pochwy (вагиниты), chlamydioza (хламидиоз), rzeżączka (гонорея), kiła (сифилис), PID — zapalenie narządów miednicy mniejszej (воспалительные заболевания органов малого таза).",
                        where: "Bręborowicz -> Zakażenia narządów płciowych; rekomendacje PTGiP; IUSTI Europe.",
                        study: "Kandydoza (кандидоз) — serowata wydzielina (творожистые выделения), pH ≤4,5, świąd (зуд); flukonazol (флуконазол) или miejscowe azole (местные азолы). Bakteryjna waginoza (бактериальный вагиноз) — kryteria Amsela (3 из 4: jednorodna wydzielina — гомогенные выделения, pH >4,5, dodatni test aminowy — положительный аминовый тест, clue cells — ключевые клетки); metronidazol (метронидазол); в беременность — metronidazol или klindamycyna (клиндамицин) (в LEK w pigułce — klindamycyna). Rzęsistkowica (трихомониаз) — pienista żółtozielona wydzielina (пенистые жёлто-зелёные выделения), «truskawkowa» szyjka (клубничная шейка), pH >4,5; metronidazol, обязательно лечить partnera (партнёра). Chlamydioza — doksycyklina (доксициклин) 100 мг 2 раза в день 7 дней; в беременность — azytromycyna (азитромицин) 1 г однократно. Rzeżączka — ceftriakson (цефтриаксон) i.m. однократно. Kiła — penicylina benzatynowa (бензатин-пенициллин) 2,4 mln j.m. i.m.; odczyn Jarischa-Herxheimera (реакция Яриша-Герксгеймера). PID — ceftriakson + doksycyklina + metronidazol 14 дней; wkładkę wewnątrzmaciczną (ВМС) удалять не обязательно.",
                        focus: "Doksycyklina (доксициклин) в беременности противопоказана — при chlamydiozie (хламидиозе) у ciężarnej (беременной) ответ azytromycyna (азитромицин)."
                    },
                    {
                        title: "Antykoncepcja, menopauza, HTZ (контрацепция и менопауза)",
                        what: "Metody antykoncepcji (методы контрацепции), przeciwwskazania (противопоказания) к estrogenom, HTZ — hormonalna terapia zastępcza (заместительная гормональная терапия).",
                        where: "Bręborowicz -> Antykoncepcja / Menopauza; WHO Medical Eligibility Criteria; LEK w pigułce, rozdz. 10 «Przeciwwskazania do stosowania HTZ».",
                        study: "Wskaźnik Pearla (индекс Перля) — число беременностей на 100 женщин за год применения. Bezwzględne przeciwwskazania (абсолютные противопоказания) к antykoncepcji złożonej (комбинированной контрацепции) (WHO MEC 4): migrena z aurą (мигрень с аурой), palenie (курение) ≥15 сигарет/день в возрасте ≥35 лет, ŻChZZ (ВТЭ) в анамнезе или trombofilia (тромбофилия), ciśnienie (АД) ≥160/100, ChNS (ИБС) или udar (инсульт), rak piersi (рак молочной железы), ciężka marskość wątroby (тяжёлый цирроз), karmienie piersią (грудное вскармливание) <6 нед после родов, TRU/SLE (СКВ) z przeciwciałami antyfosfolipidowymi (с антифосфолипидными антителами). Antykoncepcja awaryjna (экстренная контрацепция): lewonorgestrel (левоноргестрел) 1,5 мг ≤72 ч, uliprystal (улипристал) 30 мг ≤120 ч, wkładka miedziana (медная ВМС) ≤5 дней — самая эффективная. Menopauza — 12 мес braku miesiączki (аменореи) после 45 лет. HTZ: при сохранённой матке — estrogen + progestagen; начинать до 60 лет или ≤10 лет от menopauzy; estrogen przezskórny (трансдермальный) меньше повышает риск ŻChZZ. Przeciwwskazania к HTZ: rak piersi или endometrium, ŻChZZ, czynna choroba wątroby (активная болезнь печени), niezdiagnozowane krwawienie (недиагностированное кровотечение). Przedwczesna niewydolność jajników — POI (преждевременная недостаточность яичников) — <40 лет, FSH >25 j.m./l дважды с интервалом 4 нед; HTZ до возраста естественной menopauzy.",
                        focus: "Monoterapia estrogenowa (монотерапия эстрогенами) у женщины с маткой — неверный ответ (rozrost i rak endometrium — гиперплазия и рак эндометрия)."
                    }
                ]
            },
            {
                title: "Ср: Педиатрия I — неонатология, PSO, развитие, питание, инфекции с сыпью",
                id: "rep-ped-1",
                time: "3.5 ч",
                lepolekPath: "Baza Pytań -> Pediatria -> Neonatologia, Szczepienia, Rozwój, Żywienie, Choroby zakaźne -> Test mieszany (30 pytań)",
                popup: { what: "Самые частые педиатрические факты «первого года жизни», chorób wysypkowych (детских инфекций с сыпью) и wrodzonych wad serca (врождённых пороков сердца).", focus: "Числа: skala Apgar, żółtaczka (желтуха), сроки развития, календарь по PSO; różnicowanie osutek (дифференцировка экзантем) по времени появления wysypki (сыпи) и сопутствующим симптомам; kryteria choroby Kawasaki (критерии Кавасаки).", reading: "Kawalec/Grenda/Kulus «Pediatria» или Dobrzańska «Pediatria»; Komunikat GIS w sprawie PSO na aktualny rok; Schemat żywienia niemowląt (PTGHiŻD 2021); LEK w pigułce, rozdz. 15 (Pediatria) и rozdz. 17." },
                subtopics: [
                    {
                        title: "Noworodek: Apgar, żółtaczka, profilaktyka, badania przesiewowe (неонатология)",
                        what: "Ocena noworodka (оценка новорождённого), żółtaczka (желтуха), обязательная profilaktyka и badania przesiewowe (скрининги).",
                        where: "Kawalec -> Neonatologia; Program badań przesiewowych noworodków w Polsce.",
                        study: "Skala Apgar на 1-й и 5-й минуте (и 10-й при низкой оценке): 8–10 — хорошее состояние, 4–7 — среднее, 0–3 — тяжёлое. Masa ciała (масса): LBW <2500 г, VLBW <1500 г, ELBW <1000 г. Fizjologiczny spadek masy ciała (физиологическая потеря массы) до 10% к 3–5 дню. Żółtaczka fizjologiczna (физиологическая желтуха) появляется после 24 ч; patologiczna (патологическая) — в первые 24 ч (hemoliza — гемолиз), быстрый прирост, bilirubina sprzężona (конъюгированный билирубин) >1 мг/дл или przedłużająca się (длительная; >14 дней у donoszonego — доношенного). Profilaktyka: witamina K 1 мг i.m. после рождения, witamina D 400 j.m./сут с первых дней, zabieg Credégo (профилактика Креде). Badania przesiewowe: sucha kropla krwi (сухая капля крови) на 2–3-и сутки — fenyloketonuria (фенилкетонурия), wrodzona niedoczynność tarczycy (врождённый гипотиреоз; TSH), mukowiscydoza (муковисцидоз; IRT), rozszerzony panel MS/MS (расширенная панель тандемной масс-спектрометрии), SMA; słuch (слух; otoemisja akustyczna — отоакустическая эмиссия); pulsoksymetria (пульсоксиметрия) (сверить актуальный перечень болезней). Hipoglikemia noworodka (гипогликемия новорождённого): группы риска — dzieci matek z cukrzycą (дети матерей с СД), makrosomia, SGA, wcześniaki (недоношенные), hipotermia — контроль glikemii в первые часы жизни и wczesne karmienie (раннее кормление); при симптомах или стойко низкой glikemii — 10% glukoza 2 мл/кг i.v., затем wlew (инфузия). Zaburzenia oddychania (респираторный дистресс): RDS — wcześniaki, niedobór surfaktantu (дефицит сурфактанта); TTN — przejściowe przyspieszenie oddechów (транзиторное тахипноэ) — после cięcia cesarskiego (КС), проходит за 24–72 ч; NEC — martwicze zapalenie jelit (некротизирующий энтероколит) — wcześniaki, krew w stolcu (кровь в стуле), pneumatoza jelit (пневматоз кишечной стенки).",
                        focus: "Żółtaczka (желтуха) в первые сутки никогда не fizjologiczna — ответ «obserwacja» неверен, нужна оценка hemolizy (гемолиза) (grupa krwi — группа крови, BTA)."
                    },
                    {
                        title: "PSO, Program Szczepień Ochronnych (программа прививок)",
                        what: "Польский календарь obowiązkowych szczepień (обязательных прививок) и главные przeciwwskazania (противопоказания).",
                        where: "Komunikat Głównego Inspektora Sanitarnego w sprawie Programu Szczepień Ochronnych на текущий год; Kawalec -> Szczepienia ochronne.",
                        study: "Первые 24 ч: WZW B (гепатит B) + BCG (BCG не делают при массе <2000 г и подозрении на niedobór odporności (иммунодефицит), в т. ч. при HIV у матери). С 6–8 нед: DTP-IPV-Hib-WZW B (часто szczepionka heksawalentna — гексавалентная), szczepionka przeciw pneumokokom skoniugowana (пневмококковая конъюгированная; обязательна с 2017), przeciw rotawirusom (ротавирусная; в программе с 2021; первая доза с 6 нед, курс до 24 или 32 нед в зависимости от препарата). MMR: первая доза в 13–15 мес, вторая — в 6 лет (с 2019; до этого — в 10 лет, так в LEK w pigułce). Dawki przypominające (ревакцинации) DTP: 16–18 мес, 6 лет, 14 лет (Tdap), 19 лет (Td). HPV — бесплатно и рекомендуется (zalecane, не obowiązkowe): с 1.09.2024 программа охватывает девочек и мальчиков 9–14 лет включительно (с июня 2023 до этого — 12–13 лет). Интервал между двумя szczepionkami żywymi (живыми вакцинами), введёнными не в один день, — ≥4 нед; kwalifikacja do szczepienia (квалификация к прививке) действительна 24 ч. Szczepionki żywe противопоказаны при ciężkim niedoborze odporności (тяжёлом иммунодефиците) и в ciąży (беременность) (сверить весь календарь с Komunikatem GIS на 2027).",
                        focus: "MMR в 10 лет — ответ вопросов до 2019 года. Лёгкая infekcja bez gorączki (инфекция без лихорадки) и приём antybiotyku (антибиотика) не являются przeciwwskazaniem do szczepienia (противопоказанием к прививке)."
                    },
                    {
                        title: "Rozwój fizyczny i psychoruchowy (рост и психомоторное развитие)",
                        what: "Числовые нормы роста и kamienie milowe (ключевые этапы развития), по которым CEM задаёт «в каком возрасте».",
                        where: "Kawalec -> Rozwój dziecka; LEK w pigułce, rozdz. 15 «Kamienie milowe».",
                        study: "Masa ciała (масса) удваивается к ~5 мес, утраивается к 12 мес; długość (длина) за первый год +50%. Ciemiączko przednie (большой родничок) закрывается в 12–18 мес, tylne (малый) — около 6 нед. Этапы: uśmiech społeczny (социальная улыбка) ~6 нед; trzyma głowę (держит голову) ~3 мес; przewraca się (переворот на живот и обратно) ~4–6 мес; siedzi bez podparcia (сидит без опоры) ~6–8 мес, samodzielnie siada (самостоятельно садится) ~8–9 мес; raczkuje (ползает) 8–10 мес; chwyt pęsetowy (пинцетный захват) 9–10 мес; chodzi samodzielnie (ходит самостоятельно) 12–15 мес; pierwsze słowa (первые слова) ~12 мес, zdania dwuwyrazowe (фразы из двух слов) ~24 мес. Objawy alarmowe (тревожные признаки): не ходит к 18 мес, нет слов к 16 мес, нет двусловных фраз к 24 мес, любой regres (утрата навыков) — скрининг autyzmu (аутизма) (M-CHAT, 18–24 мес). Odruch Moro (рефлекс Моро) угасает к 4–6 мес. Centyle (перцентили): <3 и >97 — патология. Przedwczesne dojrzewanie płciowe (преждевременное половое созревание): девочки <8 лет, мальчики <9 лет.",
                        focus: "У wcześniaków (недоношенных) этапы оценивают по wieku skorygowanym (скорригированному возрасту) до 2 лет — вопрос с «отставанием» 5-месячного ребёнка, родившегося на 28 нед, обычно про это."
                    },
                    {
                        title: "Żywienie niemowląt, alergia na białka mleka krowiego (питание младенца, аллергия на БКМ)",
                        what: "Karmienie piersią (грудное вскармливание), rozszerzanie diety (введение прикорма), alergia na białka mleka krowiego — ABMK (аллергия на белок коровьего молока).",
                        where: "Schemat żywienia niemowląt karmionych piersią i mlekiem modyfikowanym (PTGHiŻD 2021); ESPGHAN 2017 (complementary feeding).",
                        study: "Wyłączne karmienie piersią (исключительно грудное вскармливание) ~6 мес (минимум 4 мес). Rozszerzanie diety (прикорм) — не раньше 17 нед и не позже 26 нед жизни. Gluten (глютен) — между 4 и 12 мес, небольшими количествами. Alergeny (аллергены: jajko — яйцо, orzeszki ziemne — арахис) не откладывать. Mleko krowie (цельное коровье молоко) как основной напиток — не раньше 12 мес, miód (мёд) — не раньше 12 мес (botulizm — ботулизм). Witamina D: 400 j.m./сут в 0–6 мес, 400–600 j.m./сут в 6–12 мес. ABMK: у ребёнка на karmieniu piersią — dieta eliminacyjna matki (элиминационная диета матери), продолжать кормление; на mieszance (смеси) — hydrolizat o wysokim stopniu hydrolizy (смесь с высокой степенью гидролиза), при тяжёлой форме — mieszanka aminokwasowa (аминокислотная); mleko kozie (козье молоко) не заменяет, mieszanka sojowa (соевая смесь) не до 6 мес.",
                        focus: "«Przerwać karmienie piersią» (прекратить грудное вскармливание) при ABMK — неверный ответ."
                    },
                    {
                        title: "Choroby wysypkowe, choroba Kawasaki (инфекции с сыпью и Кавасаки)",
                        what: "Odra (корь), różyczka (краснуха), rumień nagły (внезапная экзантема), rumień zakaźny (инфекционная эритема), ospa wietrzna (ветряная оспа), płonica (скарлатина), choroba Kawasaki (болезнь Кавасаки).",
                        where: "Kawalec -> Choroby zakaźne wieku dziecięcego / Choroba Kawasaki; AHA 2017 (Kawasaki).",
                        study: "Odra: prodrom (продром) — kaszel (кашель), katar (насморк), zapalenie spojówek (конъюнктивит), plamki Koplika (пятна Филатова-Коплика); wysypka (сыпь) на ~4-й день от ушей и линии роста волос вниз; powikłania (осложнения) — zapalenie płuc (пневмония), zapalenie mózgu (энцефалит), SSPE через годы. Różyczka: węzły chłonne potyliczne i zauszne (затылочные и заушные лимфоузлы); różyczka wrodzona (врождённая краснуха) — zaćma (катаракта), głuchota (глухота), PDA, наибольший риск в первые 12 нед беременности. Rumień nagły (HHV-6): 6 мес — 2 года, 3 дня высокой gorączki (лихорадки), wysypka после снижения температуры, drgawki gorączkowe (фебрильные судороги). Rumień zakaźny (parwowirus B19): «policzki jak po spoliczkowaniu» (нашлёпанные щёки), koronkowa wysypka (кружевная сыпь); przełom aplastyczny (апластический криз) при sferocytozie (сфероцитозе), obrzęk płodu (водянка плода). Ospa wietrzna: wysypka wielopostaciowa (полиморфная сыпь), заразность от 1–2 дней до сыпи до подсыхания всех элементов; ASA противопоказана (zespół Reye'a — синдром Рея). Płonica: Streptococcus pyogenes, język malinowy (малиновый язык), linie Pastii (линии Пастиа), trójkąt Fiłatowa (бледный носогубный треугольник), złuszczanie (шелушение); fenoksymetylpenicylina (феноксиметилпенициллин) 10 дней. Kawasaki: gorączka (лихорадка) ≥5 дней + ≥4 из 5 — nieropne zapalenie spojówek (негнойный конъюнктивит), zmiany warg/jamy ustnej (изменения губ/полости рта), wysypka, zmiany dłoni i stóp (изменения кистей и стоп), węzeł chłonny szyjny (шейный лимфоузел) ≥1,5 см; IVIG 2 г/кг в первые 10 дней + ASA; echokardiografia (ЭхоКГ) — tętniaki tętnic wieńcowych (аневризмы коронарных артерий).",
                        focus: "Amoksycylina (амоксициллин) при mononukleozie zakaźnej (инфекционном мононуклеозе) даёт wysypkę (сыпь) — отсюда вопрос «angina + powiększona śledziona + wysypka po amoksycylinie». Niepełna postać choroby Kawasaki (неполная форма Кавасаки) у niemowlęcia (младенца) <6 мес — не отказываться от echokardiografii (ЭхоКГ) из-за недостатка критериев."
                    },
                    {
                        title: "Wrodzone wady serca (врождённые пороки сердца)",
                        what: "Самые частые wady serca (пороки сердца) у детей: z przeciekiem lewo-prawym (с лево-правым сбросом) и sinicze (цианотические).",
                        where: "Kawalec/Grenda/Kulus «Pediatria» -> Kardiologia dziecięca -> Wrodzone wady serca.",
                        study: "Z przeciekiem lewo-prawym (без sinicy — цианоза): VSD — ubytek przegrody międzykomorowej, самый частый порок, głośny szmer holosystoliczny (грубый пансистолический шум) слева у грудины в III–IV межреберье, малые дефекты часто закрываются сами; ASD II — ubytek przegrody międzyprzedsionkowej, sztywne rozdwojenie II tonu (фиксированное расщепление II тона), часто бессимптомен до взрослого возраста; PDA — przetrwały przewód tętniczy, szmer ciągły «maszynowy» (непрерывный машинный шум) под левой ключицей, чаще у wcześniaków (недоношенных) и при różyczce wrodzonej (врождённой краснухе), закрытие у wcześniaka — ibuprofen, paracetamol или indometacyna (индометацин); AVSD — ubytek przegrody przedsionkowo-komorowej (дефект атриовентрикулярной перегородки) — zespół Downa (синдром Дауна). Sinicze (цианотические): tetralogia Fallota (тетрада Фалло) — VSD, aorta dosiadająca (декстропозиция аорты), zwężenie drogi odpływu prawej komory (стеноз выводного тракта ПЖ), przerost prawej komory (гипертрофия ПЖ); sylwetka serca w kształcie «buta» (сердце в форме сапожка); napad hipoksemiczny (одышечно-цианотический приступ) — pozycja kolanowo-łokciowa (коленно-грудное положение), O₂, morfina (морфин), propranolol; самый частый siniczy порок после периода noworodkowego (новорождённости). TGA — przełożenie wielkich pni tętniczych (транспозиция магистральных артерий) — самый частый siniczy порок, проявляющийся в первые дни жизни; тень сердца «jajo leżące na boku» (яйцо, лежащее на боку); alprostadil (алпростадил; PGE1) для сохранения przewodu tętniczego (артериального протока), atrioseptostomia balonowa Rashkinda (баллонная атриосептостомия), затем operacja przełożenia tętnic (артериальное переключение). Koarktacja aorty (коарктация аорты) — ciśnienie (АД) на руках выше, чем на ногах, osłabione tętno na tętnicach udowych (ослабленный пульс на бедренных артериях), nadżerki żeber (узурация рёбер) у старших детей; связь с zespołem Turnera (синдромом Тёрнера) и dwupłatkową zastawką aortalną (двустворчатым аортальным клапаном).",
                        focus: "Sinica (цианоз) у noworodka (новорождённого) в первые сутки, которая не уменьшается от tlenu (кислорода), — TGA до исключения; первое действие — alprostadil (алпростадил). Ibuprofen или indometacyna закрывают przewód tętniczy (проток), alprostadil держит его открытым: при wadzie przewodozależnej (протоко-зависимом пороке) закрытие протока смертельно."
                    }
                ]
            },
            {
                title: "Чт: Педиатрия II — по системам и неотложные состояния у детей",
                id: "rep-ped-2",
                time: "3 ч",
                lepolekPath: "Baza Pytań -> Pediatria -> Układ oddechowy, Gastroenterologia, Nefrologia, Endokrynologia, Hematologia, Neurologia -> Test mieszany (30 pytań)",
                popup: { what: "Педиатрия по системам: układ oddechowy (дыхание), przewód pokarmowy (ЖКТ) и odwodnienie (обезвоживание), nerki (почки), endokrynologia, hematoonkologia, neurologia и stany nagłe (неотложные состояния).", focus: "Что не назначать (antybiotyki (антибиотики) при krupie (крупе), salbutamol (сальбутамол) при zapaleniu oskrzelików (бронхиолите), loperamid (лоперамид) при biegunce (диарее), bolus insuliny (болюс инсулина) при kwasicy ketonowej — DKA (ДКА)) и детские дозировки препаратов в stanach nagłych.", reading: "Kawalec/Grenda/Kulus «Pediatria»; ESPGHAN 2014 и 2020; ISPAD 2022; KDIGO 2021 (pediatric nephrotic syndrome)." },
                subtopics: [
                    {
                        title: "Krup, zapalenie nagłośni, zapalenie oskrzelików, ciało obce, astma, mukowiscydoza (дыхательная система)",
                        what: "Stridor (стридор), świszczący oddech (свистящее дыхание) и przewlekłe choroby płuc (хронические болезни лёгких) у детей.",
                        where: "Kawalec -> Choroby układu oddechowego; GINA 2024 (dzieci).",
                        study: "Krup (круп): szczekający kaszel (лающий кашель), stridor wdechowy (инспираторный стридор), chrypka (охриплость), 6 мес — 3 года; deksametazon (дексаметазон) 0,15–0,6 мг/кг p.o./i.m. однократно (альтернатива — budezonid (будесонид) 2 мг w nebulizacji (в небулайзере)), при среднетяжёлом и тяжёлом — adrenalina w nebulizacji; antybiotyki не показаны. Zapalenie nagłośni (эпиглоттит): wysoka gorączka (высокая лихорадка), ślinienie się (слюнотечение), «pozycja trójnogu» (поза треножника), без szczekającego kaszlu; не осматривать gardło szpatułką (горло шпателем), intubacja (интубация) в контролируемых условиях, cefalosporyna III generacji (цефалоспорин III поколения) i.v. Zapalenie oskrzelików (бронхиолит; RSV, <2 лет): tlen (кислород) и nawodnienie (гидратация); salbutamol, GKS и antybiotyki не рекомендуются. Ciało obce (инородное тело): чаще prawe oskrzele główne (правый главный бронх), jednostronne osłabienie szmeru oddechowego (одностороннее ослабление дыхания), «pułapka powietrzna» (воздушная ловушка) на RTG на выдохе; bronchoskopia sztywna (ригидная бронхоскопия). Astma у детей (GINA 2024): monoterapia SABA не рекомендуется и у детей; 6–11 лет — ступени 1–2 niska dawka ICS (низкая доза ИГКС) (ежедневно или вместе с каждым приёмом SABA), с 3-й ступени возможна terapia podtrzymująca i doraźna (поддерживающая и симптоматическая терапия) низкой дозой budezonidu z formoterolem (будесонид-формотерола); ≤5 лет — SABA doraźnie (по требованию) + ежедневная низкая доза ICS при частых симптомах. Mukowiscydoza (муковисцидоз): chlorki w pocie (хлориды пота) ≥60 ммоль/л — диагноз, 30–59 — пограничная зона; Pseudomonas aeruginosa, niedrożność smółkowa (мекониевый илеус), niewydolność zewnątrzwydzielnicza trzustki (недостаточность поджелудочной железы).",
                        focus: "Szczekający kaszel (лающий кашель) = krup, ślinienie się (слюнотечение) без кашля = zapalenie nagłośni (эпиглоттит). При zapaleniu nagłośni вариант «badanie gardła szpatułką» — ловушка."
                    },
                    {
                        title: "Biegunka, odwodnienie, celiakia, zaparcia (гастроэнтерология и обезвоживание)",
                        what: "Ostra biegunka (острая диарея), ocena odwodnienia (оценка обезвоживания), celiakia (целиакия), zaparcia czynnościowe (функциональные запоры).",
                        where: "Kawalec -> Gastroenterologia; ESPGHAN/ESPID 2014 (acute gastroenteritis); ESPGHAN 2020 (celiac disease).",
                        study: "Odwodnienie (обезвоживание): łagodne (лёгкое) <5%, umiarkowane (среднее) 5–10%, ciężkie (тяжёлое) >10% массы. Лечение лёгкого и среднего — DPN (доустная регидратация) o obniżonej osmolarności (с пониженной осмолярностью) (Na 60 ммоль/л) 50–100 мл/кг за 3–4 ч, затем продолжать питание; тяжёлое — i.v. Дополнительно допустимы ondansetron (ондансетрон), probiotyki (пробиотики) (LGG, S. boulardii), racekadotryl (рацекадотрил); loperamid (лоперамид) детям не рекомендуется; antybiotyki — не рутинно. Rotawirus (ротавирус) — самая частая причина тяжёлого nieżytu żołądkowo-jelitowego (гастроэнтерита) до 5 лет. Celiakia: tTG-IgA + całkowite IgA (общий IgA); без biopsji (биопсии), если tTG-IgA ≥10 × верхней границы нормы и EMA-IgA положительны во втором образце (ESPGHAN 2020). Zaparcie (запор): у детей почти всегда czynnościowe (функциональный); первый выбор — makrogol (макрогол; PEG). Kolka niemowlęca (колика младенца) — «reguła trzech» (правило трёх) (≥3 ч в день, ≥3 дней в неделю, ≥3 нед).",
                        focus: "У ребёнка с biegunką (диареей) и niewydolnością nerek (почечной недостаточностью) после krwistego stolca (кровавого стула) (STEC O157:H7) antybiotyki и leki przeciwbiegunkowe (противодиарейные) не назначают — риск HUS."
                    },
                    {
                        title: "ZUM, zespół nerczycowy, HUS, IgAV (почки и мочевые пути)",
                        what: "ZUM — zakażenie układu moczowego (инфекция мочевых путей), zespół nerczycowy (нефротический синдром), HUS — zespół hemolityczno-mocznicowy (гемолитико-уремический синдром), IgAV — zapalenie naczyń z IgA (IgA-васкулит).",
                        where: "Kawalec -> Nefrologia dziecięca; KDIGO 2021; rekomendacje PTNFD (ZUM).",
                        study: "ZUM у niemowlęcia (младенца) — часто только gorączka (лихорадка) без очага; mocz na posiew (мочу для посева) брать cewnikiem (катетером) или nakłuciem nadłonowym (надлобковой пункцией) (woreczek — мешочек даёт ложноположительные); niemowlęta <3 мес — лечение в стационаре i.v. USG nerek (УЗИ почек) после первой gorączkowej ZUM; cystouretrografia mikcyjna (микционная цистоуретрография) — при изменениях на USG или nawrocie (рецидиве). Zespół nerczycowy (чаще choroba zmian minimalnych — болезнь минимальных изменений): prednizon (преднизон) 60 мг/м²/сут (≈2 мг/кг, макс. 60 мг) 4–6 нед, затем 40 мг/м² через день 4–6 нед; biopsja не нужна у типичного ребёнка 1–10 лет, нужна при steroidooporności (стероидорезистентности), возрасте <1 года или >12 лет, низком C3, nadciśnieniu (гипертензии), AKI (ОПП). HUS: niedokrwistość hemolityczna ze schistocytami (гемолитическая анемия со шистоцитами) + małopłytkowość (тромбоцитопения) + AKI, чаще после krwistej biegunki (кровавой диареи) STEC. IgAV (Schönlein-Henoch): wyczuwalna plamica (пальпируемая пурпура) ног и ягодиц, bóle stawów (артралгии), ból brzucha (боль в животе), zapalenie nerek (нефрит); контроль moczu (мочи) и ciśnienia (АД) ~6 мес.",
                        focus: "Pobranie moczu do woreczka (сбор мочи в мешочек) для посева — классический неверный ответ, если нужно подтвердить ZUM."
                    },
                    {
                        title: "Cukrzyca typu 1 i kwasica, niedoczynność tarczycy, WPN, niskorosłość (эндокринология у детей)",
                        what: "Kwasica ketonowa — DKA (детский кетоацидоз), wrodzona niedoczynność tarczycy (врождённый гипотиреоз), WPN — wrodzony przerost nadnerczy (врождённая гиперплазия надпочечников), niskorosłość (низкий рост).",
                        where: "Kawalec -> Endokrynologia i diabetologia dziecięca; ISPAD 2022; PTD — rozdział «Cukrzyca u dzieci».",
                        study: "DKA у ребёнка: 0,9% NaCl 10–20 мл/кг за 20–30 мин при zaburzeniach perfuzji (нарушении перфузии); insulina (инсулин) 0,05–0,1 j./кг/ч i.v. через ~1 ч после начала инфузии, без bolusa (болюса); wodorowęglan (бикарбонат) не рутинно; obrzęk mózgu (отёк мозга) (ból głowy — головная боль, bradykardia, zaburzenia świadomości — нарушение сознания) — mannitol (маннитол) 0,5–1 г/кг или 3% NaCl 2,5–5 мл/кг. Wrodzona niedoczynność tarczycy — badanie przesiewowe (скрининг) TSH; L-T4 (левотироксин) 10–15 мкг/кг/сут как можно раньше (до 2 нед жизни). WPN (niedobór 21-hydroksylazy — дефицит гидроксилазы): 17-OHP ↑; przełom nadnerczowy z utratą soli (сольтеряющий криз) на 2–3-й неделе — hiponatremia, hiperkaliemia, hipoglikemia; obojnacze narządy płciowe (неопределённые гениталии) у девочек; hydrokortyzon (гидрокортизон) + fludrokortyzon (флудрокортизон) + NaCl. Niskorosłość: rodzinna (семейный) — wiek kostny (костный возраст) = паспортному; konstytucjonalne opóźnienie wzrastania (конституциональная задержка) — wiek kostny отстаёт; низкая девочка — kariotyp (кариотип) (zespół Turnera — синдром Тёрнера).",
                        focus: "Bolus insuliny (болюс инсулина) и быстрая массивная инфузия у ребёнка с DKA — неверные ответы (риск obrzęku mózgu — отёка мозга)."
                    },
                    {
                        title: "Niedokrwistość, ITP, białaczki, guzy lite (гематология и онкология у детей)",
                        what: "Niedokrwistości (анемии), ITP — małopłytkowość immunologiczna (иммунная тромбоцитопения), ALL — ostra białaczka limfoblastyczna (ОЛЛ) и guzy lite (солидные опухоли) детского возраста.",
                        where: "Kawalec -> Hematologia i onkologia dziecięca.",
                        study: "Niedokrwistość z niedoboru żelaza (железодефицитная анемия) — самая частая, 6 мес — 3 года, избыток mleka krowiego (коровьего молока). ITP у ребёнка: через 2–4 нед после infekcji wirusowej (вирусной инфекции), izolowana małopłytkowość (изолированная тромбоцитопения); при отсутствии или лёгком krwawieniu (кровотечении) — obserwacja (наблюдение) независимо от числа płytek (тромбоцитов); при значимом krwawieniu — GKS или IVIG. ALL — самый частый rak (рак) у детей, пик 2–5 лет: bladość (бледность), wybroczyny (петехии), bóle kostne (боли в костях), hepatosplenomegalia; хороший прогноз при возрасте 1–10 лет и leukocytach (лейкоцитах) <50 000/мкл. Guzy OUN (опухоли ЦНС) — самые частые lite (солидные); rdzeniak zarodkowy (медуллобластома) — tylny dół czaszki (задняя черепная ямка). Nerwiak zarodkowy — neuroblastoma (нейробластома) — <5 лет, пересекает linię środkową (среднюю линию), zwapnienia (кальцификаты), VMA/HVA в моче, zespół opsoklonie-mioklonie (опсоклонус-миоклонус). Guz Wilmsa (опухоль Вильмса) — 2–5 лет, бессимптомное образование, не пересекающее linii środkowej; chemioterapia przedoperacyjna (предоперационная химиотерапия) (SIOP). Siatkówczak (ретинобластома) — leukokoria (лейкокория) (RB1). Kostniakomięsak (остеосаркома) — przynasada (метафиз), «promienie słońca» (солнечные лучи), trójkąt Codmana (треугольник Кодмана); mięsak Ewinga (саркома Юинга) — trzon (диафиз), «łuska cebuli» (луковичная шелуха), t(11;22).",
                        focus: "Linia środkowa (средняя линия) и возраст — главный дифференциал neuroblastoma (нейробластомы) и guza Wilmsa (опухоли Вильмса)."
                    },
                    {
                        title: "Drgawki gorączkowe, stan padaczkowy, zapalenie opon, przemoc (неврология и неотложные состояния)",
                        what: "Drgawki gorączkowe (фебрильные судороги), stan padaczkowy (эпилептический статус), zapalenie opon mózgowo-rdzeniowych (менингит) у детей, признаки przemocy (насилия).",
                        where: "Kawalec -> Neurologia dziecięca / Stany nagłe; ERC 2021 -> Pediatric Life Support; procedura «Niebieskie Karty».",
                        study: "Drgawki gorączkowe: 6 мес — 5 лет; proste (простые) — uogólnione (генерализованные), <15 мин, один раз за 24 ч; EEG (ЭЭГ) и neuroobrazowanie (визуализация) не нужны; leki przeciwgorączkowe (жаропонижающие) не предотвращают nawrotu (рецидив). Stan padaczkowy: napad (приступ) >5 мин — benzodiazepina (бензодиазепин) (midazolam (мидазолам) podpoliczkowo/donosowo/i.m. — буккально/интраназально, diazepam (диазепам) doodbytniczo (ректально) или i.v., lorazepam (лоразепам) i.v.), повтор через 5–10 мин; далее lek II linii (препарат II линии) — lewetyracetam (леветирацетам), walproinian (вальпроат) или fenytoina (фенитоин). Zapalenie opon: noworodki (новорождённые) — ampicylina + cefotaksym (ампициллин + цефотаксим) (или gentamycyna — гентамицин): GBS, E. coli, Listeria; старше — cefotaksym или ceftriakson (цефтриаксон) ± wankomycyna (ванкомицин), deksametazon (дексаметазон) (не у noworodków). Wybroczynowa wysypka niebledniejąca (нестирающаяся петехиальная сыпь) + gorączka — zakażenie meningokokowe (менингококковая инфекция): antybiotyk сразу, до госпитализации. Przemoc: krwiak podtwardówkowy (субдуральная гематома) + wylewy do siatkówki (кровоизлияния в сетчатку) у niemowlęcia (shaken baby), złamania przynasadowe «narożnikowe» (метафизарные угловые переломы), złamania tylnych odcinków żeber (задние переломы рёбер), несоответствие wywiadu (анамнеза) травме, позднее обращение; в Польше — procedura «Niebieskie Karty». Profilaktyka SIDS: сон на спине, твёрдый матрас, без курения, karmienie piersią (грудное вскармливание).",
                        focus: "При подозрении на przemoc (насилие) правильный первый шаг — защитить ребёнка (hospitalizacja, dokumentowanie — документирование), а не конфронтация с родителями."
                    }
                ]
            },
            {
                title: "Пт: Сквозные темы — неотложные состояния и онкология (stany nagłe, onkologia)",
                id: "rep-przekroj",
                time: "3.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne / Pediatria -> Stany nagłe, Onkologia, Zatrucia -> Test mieszany (30 pytań)",
                popup: { what: "Темы, которые встречаются во всех четырёх разделах: resuscytacja (реанимация) взрослых и детей, anafilaksja (анафилаксия), wstrząs (шок), zatrucia (отравления), markery nowotworowe (онкомаркёры), польские badania przesiewowe (скрининги), stany nagłe w onkologii (неотложная онкология).", focus: "Дозы и последовательность (adrenalina (адреналин), amiodaron (амиодарон), 15:2 и 30:2), odtrutki (антидоты), что markery nowotworowe не делают, и первое действие при zespole żyły głównej górnej (синдроме верхней полой вены), ucisku rdzenia kręgowego (компрессии спинного мозга) и gorączce neutropenicznej (фебрильной нейтропении).", reading: "ERC Guidelines 2021 (и изменения ERC 2025); Szczeklik -> Stany nagłe / Zatrucia / Onkologia; LEK w pigułce, rozdz. 6 (Resuscytacja), rozdz. 11 и 12." },
                subtopics: [
                    {
                        title: "Zaawansowane zabiegi resuscytacyjne, ALS u dorosłych, ERC (расширенная реанимация взрослых)",
                        what: "Алгоритм ALS — zaawansowanych zabiegów resuscytacyjnych (расширенной реанимации) взрослых.",
                        where: "ERC Guidelines 2021 -> Adult Advanced Life Support (сверить изменения ERC 2025).",
                        study: "Uciśnięcia klatki piersiowej (компрессии) 5–6 см, 100–120/мин, 30:2 до zabezpieczenia drożności dróg oddechowych (обеспечения проходимости дыхательных путей). Rytmy do defibrylacji (ритмы для дефибрилляции) (VF/pVT): wyładowanie (разряд) → 2 мин CPR (RKO) → оценка; adrenalina (адреналин) 1 мг i.v./i.o. после 3-го разряда, затем каждые 3–5 мин; amiodaron (амиодарон) 300 мг после 3-го разряда, 150 мг после 5-го; lidokaina (лидокаин) 100 мг (1–1,5 мг/кг) — только если нет amiodaronu. Rytmy niedefibrylacyjne (недефибриллируемые) (asystolia, PEA): adrenalina 1 мг как можно скорее. Odwracalne przyczyny (обратимые причины) 4H/4T: hipoksja (гипоксия), hipowolemia (гиповолемия), hipo-/hiperkaliemia и metaboliczne (метаболические), hipotermia (гипотермия); zakrzepica (тромбоз) (wieńcowa — коронарный, płucna — лёгочный), odma prężna (напряжённый пневмоторакс), tamponada (тампонада), toksyny (токсины). Bradykardia z objawami niepokojącymi (брадикардия с признаками угрозы) — atropina (атропин) 0,5 мг, до 3 мг, затем stymulacja serca (кардиостимуляция). Tachykardia z objawami niepokojącymi — kardiowersja synchroniczna (синхронизированная кардиоверсия) до 3 разрядов. SVT stabilna (стабильная) — próby wagalne (вагусные пробы), adenozyna (аденозин) 6 мг, затем 12 мг (ERC 2021 допускает третью дозу 18 мг). После ROSC: SpO₂ 94–98%, SBP (САД) >100, MAP >65, zapobieganie gorączce (профилактика лихорадки).",
                        focus: "Adrenalina (адреналин) в rytmach do defibrylacji — после 3-го разряда, а не сразу. Lidokaina (лидокаин) после amiodaronu (амиодарона) не назначается."
                    },
                    {
                        title: "Resuscytacja dzieci i noworodków, PALS (реанимация детей и новорождённых)",
                        what: "Особенности resuscytacji (реанимации) детей и noworodków (новорождённых) по ERC.",
                        where: "ERC Guidelines 2021 -> Paediatric Life Support / Newborn Life Support (сверить изменения ERC 2025).",
                        study: "Дети: 5 oddechów ratowniczych (начальных вдохов), затем 15:2 для медицинского персонала (одиночный спасатель без навыка PLS может 30:2); глубина ≥1/3 wymiaru przednio-tylnego klatki piersiowej (передне-заднего размера грудной клетки) (≈4 см у niemowlęcia — младенца, ≈5 см у ребёнка); у niemowlęcia — technika dwóch kciuków (два больших пальца) с обхватом грудной клетки. Adrenalina (адреналин) 10 мкг/кг (0,01 мг/кг, макс. 1 мг) i.v./i.o. каждые 3–5 мин; defibrylacja (дефибрилляция) 4 Дж/кг; amiodaron (амиодарон) 5 мг/кг (макс. 300 мг) после 3-го и 5-го разряда. Bolus płynów (болюс жидкости) 10 мл/кг krystaloidu (кристаллоида) с повторной оценкой (ERC 2021; в старых вопросах — 20 мл/кг). Bradykardia <60/мин со złą perfuzją (плохой перфузией) — начать uciśnięcia (компрессии). Hipoglikemia — 10% glukoza 2 мл/кг. Noworodek: 5 oddechów rozprężających (раздувающих вдохов), uciśnięcia 3:1 при HR (ЧСС) <60/мин; у donoszonego (доношенного) начать с powietrza (воздуха) (21% O₂).",
                        focus: "Соотношения 30:2 (взрослые), 15:2 (дети), 3:1 (noworodki — новорождённые) — готовый вопрос с тремя правдоподобными вариантами."
                    },
                    {
                        title: "Wstrząs anafilaktyczny, rodzaje wstrząsu (анафилаксия и шок)",
                        what: "Лечение anafilaksji (анафилаксии) и различение rodzajów wstrząsu (типов шока).",
                        where: "ERC 2021 -> Anafilaksja; EAACI 2021; Szczeklik -> Wstrząs.",
                        study: "Anafilaksja: adrenalina (адреналин) i.m. в przednio-boczną powierzchnię uda (переднебоковую поверхность бедра) — взрослые 0,5 мг (0,5 мл раствора 1 мг/мл), дети 0,01 мг/кг (макс. 0,5 мг) или по возрасту: >12 лет 500 мкг, 6–12 лет 300 мкг, 6 мес — 6 лет 150 мкг; повтор через 5 мин при отсутствии эффекта. Płyny (жидкость): взрослые 500–1000 мл, дети 10 мл/кг. Leki przeciwhistaminowe (антигистаминные) и GKS — не первая линия. Больной на β-blokerach (β-блокаторах) с oporną anafilaksją (рефрактерной анафилаксией) — glukagon (глюкагон). Wstrząs (шок): hipowolemiczny (гиповолемический) (utrata krwi — кровопотеря, odwodnienie — обезвоживание), kardiogenny (кардиогенный) (MI/zawał — ИМ — dobutamina (добутамин), rewaskularyzacja (реваскуляризация)), obturacyjny (обструктивный) (tamponada, odma prężna — напряжённый пневмоторакс, ZP (ТЭЛА) — устранить причину), dystrybucyjny (дистрибутивный) (sepsa — сепсис, anafilaksja, rdzeniowy — спинальный — noradrenalina (норадреналин)). Цель MAP ≥65 mmHg; wskaźnik wstrząsowy (шоковый индекс) HR/SBP (ЧСС/САД) >1.",
                        focus: "Adrenalina i.v. в дозе 0,5 мг при anafilaksji без zatrzymania krążenia (остановки кровообращения) — опасная ошибка; i.v. — только титрованный wlew (инфузия) под мониторингом."
                    },
                    {
                        title: "Zatrucia, odtrutki (отравления и антидоты)",
                        what: "Частые zatrucia (отравления) и их odtrutki (антидоты).",
                        where: "Szczeklik -> Zatrucia; LEK w pigułce, rozdz. 6 (Leki wskazane — odtrutki).",
                        study: "Paracetamol (парацетамол): dawka toksyczna (токсическая доза) ≥150 мг/кг; уровень через 4 ч по nomogramie Rumacka-Matthewa (номограмме); N-acetylocysteina (N-ацетилцистеин). Metanol (метанол) и glikol etylenowy (этиленгликоль): высокая luka anionowa (анионный интервал) и luka osmolalna (осмоляльный интервал); fomepizol (фомепизол) или etanol (этанол), hemodializa (гемодиализ). Związki fosforoorganiczne (фосфорорганические соединения): zwężenie źrenic (миоз), bradykardia, bronchorea (бронхорея), ślinotok (слюнотечение); atropina (атропин) до «сухих» бронхов + prallidoksym (пралидоксим). Opioidy (опиоиды): zwężenie źrenic, bradypnoë (брадипноэ); nalokson (налоксон) 0,4 мг i.v. (или 0,8 мг i.m./donosowo — интраназально). Benzodiazepiny (бензодиазепины): flumazenil (флумазенил) не рутинно (риск drgawek (судорог) при хроническом приёме и сочетании с TLPD — trójpierścieniowymi lekami przeciwdepresyjnymi (трициклическими антидепрессантами)). TLPD: QRS >100 мс — wodorowęglan sodu (бикарбонат натрия). CO (tlenek węgla — угарный газ): pulsoksymetr показывает ложно нормальную SpO₂; 100% O₂, tlenoterapia hiperbaryczna (гипербарическая оксигенация) при тяжёлом отравлении и ciąży (беременности). Digoksyna (дигоксин) — fragmenty Fab; β-blokery — glukagon (глюкагон); CCB (блокаторы кальциевых каналов) — wapń (кальций), высокие дозы insuliny; heparyna (гепарин) — protamina (протамин); żelazo (железо) — deferoksamina (дефероксамин); lit (литий) — hemodializa. Węgiel aktywowany (активированный уголь) — в течение 1 ч; неэффективен при alkoholach (спиртах), metalach (металлах) (żelazo, lit), kwasach i zasadach (кислотах и щелочах).",
                        focus: "Prowokowanie wymiotów (вызывание рвоты) и węgiel aktywowany (уголь) при отравлении kwasem (кислотой) или zasadą (щёлочью) — неверные ответы."
                    },
                    {
                        title: "Markery nowotworowe, badania przesiewowe (онкомаркёры и скрининги в Польше)",
                        what: "Роль markerów nowotworowych (онкомаркёров) и польские программы раннего выявления рака.",
                        where: "LEK w pigułce, rozdz. 11 «Badania przesiewowe» и rozdz. 12 «Markery»; программы NFZ: pacjent.gov.pl «Profilaktyka raka szyjki macicy»; nio.gov.pl и nfz.gov.pl — Program badań przesiewowych raka płuca (NDTK).",
                        study: "Markery nowotworowe — для monitorowania leczenia (мониторинга лечения) и nawrotu (рецидива), не для badań przesiewowych (скрининга) и не для диагноза (исключения обсуждаются только для PSA). Соответствия: CEA — rak jelita grubego (колоректальный рак), CA 19-9 — trzustka (поджелудочная железа) и drogi żółciowe (желчные пути), CA-125 и HE4 — jajnik (яичник), AFP — HCC и nienasieniakowe guzy germinalne (несеминомные герминогенные опухоли), β-hCG — guzy germinalne и choroba trofoblastyczna (трофобластическая болезнь), PSA — gruczoł krokowy (простата), kalcytonina (кальцитонин) — rak rdzeniasty tarczycy (медуллярный рак щитовидной железы), tyreoglobulina (тиреоглобулин) — zróżnicowany rak tarczycy (дифференцированный рак щитовидной железы) после tyreoidektomii (тиреоидэктомии), CA 15-3 — rak piersi (рак молочной железы), NSE — rak drobnokomórkowy płuca (мелкоклеточный рак лёгкого) и neuroblastoma (нейробластома), chromogranina A (хромогранин A) — guzy neuroendokrynne (нейроэндокринные опухоли), SCC — raki płaskonabłonkowe (плоскоклеточные раки). Badania przesiewowe: mammografia (маммография) каждые 2 года (в LEK w pigułce 50–69 лет; программа расширена до 45–74 лет); szyjka macicy (шейка матки) — test HPV HR раз в 5 лет у женщин 25–64 лет, при положительном — LBC (жидкостная цитология) из того же материала (с 1.07.2025; в LEK w pigułce — cytologia (цитология) каждые 3 года, 25–59 лет); kolonoskopia (колоноскопия) — 50–65 лет, 40–49 при raku jelita grubego (раке толстой кишки) у krewnego I stopnia (родственника I степени); niskodawkowa TK płuc — NDTK (низкодозовая КТ лёгких) раз в 12 мес — 55–74 года и ≥20 paczkolat (пачко-лет) (курит или бросил ≤15 лет назад), 50–74 года при тех же paczkolatach и дополнительном факторе риска (POChP (ХОБЛ), włóknienie płuc (фиброз лёгких), zawodowe kancerogeny (профессиональные канцерогены) — azbest (асбест), krzemionka (кремнезём) и др., rak tytoniozależny (рак, связанный с курением) в анамнезе или rak płuca (рак лёгкого) у родственников); в koszyku NFZ по Rozporządzeniu MZ z 14.07.2026, первые обследования с октября 2026; USG wątroby (УЗИ печени) каждые 6 мес при marskości (циррозе). Badań przesiewowych raka gruczołu krokowego (простаты), żołądka (желудка) и jajnika (яичника) нет.",
                        focus: "В вопросах CEM разных лет возрастные границы и тесты badań przesiewowych (скринингов) разные. На экзамене — программа, действующая на момент экзамена; ответ LEK w pigułce — только если вопрос прямо называет прежнюю редакцию программы (правило экзамена «старое или новое» — sym2-cel-1)."
                    },
                    {
                        title: "Stany nagłe w onkologii (неотложная онкология)",
                        what: "Пять угрожающих жизни powikłań nowotworów (осложнений опухолей) и их первое действие.",
                        where: "Szczeklik -> Onkologia -> Stany nagłe w onkologii; ESMO (febrile neutropenia).",
                        study: "Zespół żyły głównej górnej (синдром верхней полой вены): obrzęk twarzy i szyi (отёк лица и шеи), poszerzone żyły klatki piersiowej (расширенные вены грудной стенки); чаще rak płuca (рак лёгкого) (особенно drobnokomórkowy — мелкоклеточный) и chłoniaki (лимфомы); при подозрении на chłoniak GKS не давать до biopsji (биопсии); stent, radioterapia (лучевая) или chemioterapia (химиотерапия) по histologii (гистологии). Ucisk rdzenia kręgowego (компрессия спинного мозга): ból pleców (боль в спине) — первый симптом, затем osłabienie kończyn dolnych (слабость ног) и zaburzenia zwieraczy (нарушения тазовых функций); MRI (МРТ) всего позвоночника срочно; deksametazon (дексаметазон) (например 16 мг/сут), затем radioterapia или operacja. Hiperkalcemia nowotworowa (гиперкальциемия злокачественных опухолей): PTHrP (raki płaskonabłonkowe — плоскоклеточные), przerzuty do kości (костные метастазы), szpiczak (миелома); 0,9% NaCl, затем kwas zoledronowy (золедроновая кислота) или denosumab (деносумаб). Gorączka neutropeniczna (фебрильная нейтропения): neutrofile (нейтрофилы) <500/мкл (или <1000 с ожидаемым падением) + T ≥38,3 °C однократно или ≥38,0 °C в течение 1 ч; posiewy (посевы) и antybiotyk o szerokim spektrum (антибиотик широкого спектра) против Pseudomonas (piperacylina z tazobaktamem — пиперациллин-тазобактам, cefepim — цефепим) в течение 1 ч; skala MASCC ≥21 — низкий риск. Zespół rozpadu guza (синдром лизиса опухоли): hiperkaliemia, hiperfosfatemia, hiperurykemia, hipokalcemia, AKI (ОПП); профилактика — nawodnienie (гидратация) + allopurynol (аллопуринол) или rasburykaza (расбуриказа) (rasburykaza противопоказана при niedoborze G6PD).",
                        focus: "В zespole rozpadu guza (синдроме лизиса) wapń (кальций) снижен, а не повышен — вариант «hiperkalcemia» ловушка. При gorączce neutropenicznej (фебрильной нейтропении) ожидание результатов posiewów (посевов) перед antybiotykiem — неверный ответ."
                    }
                ]
            },
            {
                title: "Сб: Тест 40 вопросов — акушерство-гинекология, педиатрия, сквозные темы",
                id: "rep-2-test",
                time: "1.5 ч",
                lepolekPath: "Testy -> Test własny: Ginekologia i położnictwo + Pediatria + stany nagłe (40 pytań CEM)",
                popup: { what: "Проверка сжатых повторений недели: 15 вопросов położnictwa i ginekologii (акушерства-гинекологии), 15 pediatrii (педиатрии), 10 по stanom nagłym (неотложным состояниям) и onkologii (онкологии).", focus: "Цель ≥28/40. Отдельно отметить вопросы, где ответ изменился по сравнению со старыми rekomendacjami (рекомендациями).", reading: "Тетрадь ошибок; конспекты rep-polozn — rep-przekroj." },
                subtopics: [
                    {
                        title: "Test 40 pytań (тест 40 вопросов)",
                        what: "Смешанный тест по темам недели, 60 мин, режим экзамена.",
                        where: "LEPOLEK -> Testy, фильтр по dziedzinom и темам недели.",
                        study: "Пропорция 15 / 15 / 10. Бланк с колонкой уверенности (P / 2 / Z), как на симуляции.",
                        focus: "Особое внимание на числовые вопросы (сроки, dawki — дозы): здесь чаще всего ошибка N — перепутанные единицы или недели."
                    },
                    {
                        title: "Analiza błędów (разбор и классификация ошибок)",
                        what: "Разбор ошибок с типами L/N/P/J/Z.",
                        where: "Объяснения LEPOLEK + конспекты недели.",
                        study: "Каждую ошибку L — в Anki одним фактом; каждую P — выписать шаблон формулировки; ошибки с устаревшими ответами — в раздел «старое vs новое» тетради.",
                        focus: "Если ≥3 ошибки в одной теме — тема добавляется в список целевого повторения sym-2."
                    },
                    {
                        title: "Podsumowanie rep-1 i rep-2 (итог двух недель повторения)",
                        what: "Готовность к симуляции №2.",
                        where: "Протокол симуляции №1 + результаты двух суббот.",
                        study: "Обновить список слабых тем: удалить закрытые, добавить новые. Подготовить условия симуляции №2: то же время старта, те же правила, новые вопросы.",
                        focus: "Накануне симуляции — лёгкий вечер, без нового материала."
                    }
                ]
            }
        ]
    },
    {
        key: "sym-2",
        subject: "powtorka",
        title: "Симуляция №2 и целевое повторение",
        days: [
            {
                title: "Пн: Симуляция №2 — 160 вопросов за 4 ч",
                id: "sym2",
                time: "4.5 ч",
                lepolekPath: "Testy -> Test własny: 160 pytań CEM (po 40 z 4 dziedzin, pytania dotąd nierozwiązywane)",
                popup: { what: "Второй полный прогон экзамена в тех же условиях, что и №1, плюс 30 мин подсчёта.", focus: "Проверить не только знания, но и тактику: два прохода, отметки, контрольные точки времени. Сравнимость с №1 важнее всего — условия не менять.", reading: "Ничего нового. Протокол симуляции №1 — перечитать только раздел о темпе и усталости." },
                subtopics: [
                    {
                        title: "Warunki porównywalne z symulacją №1 (сопоставимые условия)",
                        what: "Те же время старта, длительность, пропорция разделов и запрет на источники.",
                        where: "Протокол симуляции №1.",
                        study: "160 вопросов, по 40 из раздела, только вопросы, которые не решались раньше. Если база по какому-то разделу исчерпана — взять вопросы, решённые больше 6 недель назад, и отметить это в протоколе.",
                        focus: "Результат на повторно решённых вопросах не смешивать с новыми — посчитать отдельно."
                    },
                    {
                        title: "Dwa przejścia (тактика двух проходов)",
                        what: "Первый проход — все 160 вопросов с отметками; второй — только отмеченные.",
                        where: "Бланк симуляции.",
                        study: "Первый проход ~200 мин (≈75 с на вопрос): уверенные ответы сразу, сомнительные — лучший вариант + отметка. Второй проход ~30 мин — отмеченные вопросы. Последние ~10 мин — проверка, что ни один вопрос не остался без ответа. Контрольные точки: 40 — 50 мин, 80 — 100 мин, 120 — 150 мин, 160 — 200 мин.",
                        focus: "Сравнить с №1: сколько отметок стало, сколько из них изменено и в какую сторону."
                    },
                    {
                        title: "Wynik i protokół (подсчёт и протокол)",
                        what: "Те же поля, что в протоколе №1.",
                        where: "Протокол симуляции №2.",
                        study: "Процент по каждому разделу и общий; число Z среди верных; ошибки в последних 40 вопросах; время первого прохода; статистика исправлений; усталость по часам. Ориентир: ≥28/40 в каждом разделе и ≥112/160 в целом.",
                        focus: "Разбор — завтра. Сегодня ни одного объяснения не открывать: иначе завтрашний разбор будет по памяти, а не по ошибкам."
                    }
                ]
            },
            {
                title: "Вт: Разбор симуляции №2 и сравнение с №1",
                id: "sym2-analiza",
                time: "2.5 ч",
                lepolekPath: "Testy -> Historia testów -> Symulacja nr 2 (przegląd odpowiedzi z wyjaśnieniami)",
                popup: { what: "Разбор ошибок №2 и таблица сравнения с №1 по разделам, типам ошибок и темпу.", focus: "Отличить реальный прирост от случайного колебания: разница двух симуляций по разделу из 40 вопросов почти всегда лежит в пределах шума. Решения по разделу — по сумме всех тестов раздела после rep-1, а не по разнице двух попыток.", reading: "Протоколы №1 и №2, тетрадь ошибок." },
                subtopics: [
                    {
                        title: "Porównanie symulacji 1 i 2 (таблица сравнения)",
                        what: "Разница по каждому разделу в вопросах и процентных пунктах.",
                        where: "Протоколы №1 и №2.",
                        study: "Колонки: раздел / №1 (из 40) / №2 (из 40) / разница / сумма тестов раздела после rep-1 (ведётся накопительно до экзамена). Шум — записать один раз и держать в голове до экзамена: при истинной точности 70% результат 40 вопросов раздела колеблется со стандартным отклонением ≈2,9 вопроса (≈7 п. п.), разность двух симуляций — ≈4,1 вопроса (≈10 п. п.), так что разница в 4 вопроса примерно в трети случаев — чистый шум. Сумма 100 вопросов раздела шумит на ≈4,6 п. п., 160 вопросов — на ≈3,6 п. п. Поэтому решения по разделу (какой раздел получает блок, стабилен ли он, нужны ли дополнительные вопросы) принимаются по сумме всех смешанных тестов раздела после rep-1 — симуляции №2 и №3, блок 60, субботний тест раздела, мини-симуляция; к финальной неделе это 100–160 вопросов на раздел. Разница №1 → №2 показывает только направление. Темп и ошибки в последних 40 вопросах сравнимы между симуляциями, потому что контрольные точки во всех трёх одинаковые.",
                        focus: "Рост общего процента при падении одного раздела — возможный сигнал, что раздел выпал из повторения. Проверить по сумме №1 + №2 (80 вопросов) и на блоке пятницы, а не по одной симуляции."
                    },
                    {
                        title: "Zmiana struktury błędów (сдвиг типов ошибок)",
                        what: "Как изменилось соотношение L/N/P/J между №1 и №2.",
                        where: "Бланк №2 + классификация L/N/P/J/Z.",
                        study: "Ожидаемая картина после двух недель повторения: доля L падает, доля N и P становится относительно больше. Если L не падает — повторения были слишком широкими, нужно сужать темы. Если растёт N — проверить усталость по часам (ошибки в последних 40 вопросах).",
                        focus: "Ошибки J (язык) к этому моменту должны быть единичными; если нет — сделать глоссарий частью ежедневного Anki."
                    },
                    {
                        title: "Lista słabych tematów v2 (обновлённый список слабых тем)",
                        what: "Новый список до 10 тем с пометкой, сколько раз тема уже была в списке.",
                        where: "Список №1 + разбор №2.",
                        study: "Тема, которая была в списке №1 и снова дала ≥2 ошибки L/P, — «упорная»: для неё не пересказ, а другой источник (например LEK w pigułce вместо Szczeklik или объяснения LEPOLEK вместо учебника) и решение 15–20 вопросов подряд.",
                        focus: "Список разделить на две половины: interna (терапия) + chirurgia (хирургия) (среда) и położnictwo i ginekologia (акушерство-гинекология) + pediatria (педиатрия) (четверг)."
                    },
                    {
                        title: "Porządkowanie zeszytu błędów (чистка тетради ошибок)",
                        what: "Удаление закрытых записей и перенос повторяющихся ошибок наверх.",
                        where: "LEPOLEK -> Zeszyt błędów, Anki.",
                        study: "Запись, отвеченная верно в трёх проверках подряд, — в архив. Запись, ошибка по которой повторилась на симуляции, — отметить звёздочкой: такие записи идут в финальное повторение.",
                        focus: "Объём тетради к финальной неделе должен уменьшаться, а не расти."
                    }
                ]
            },
            {
                title: "Ср: Целевое повторение по тетради ошибок — терапия и хирургия",
                id: "sym2-cel-1",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Choroby wewnętrzne, Chirurgia -> tematy z listy słabych tematów v2 (30 pytań)",
                popup: { what: "Работа только по своим ошибкам в internie (терапии) и chirurgii (хирургии) плюс систематический обзор мест, где старый и новый ответы CEM различаются.", focus: "«Старое vs новое» — источник ошибок P, которые не лечатся повторным чтением учебника: их надо знать парами.", reading: "Тетрадь ошибок; для тем из списка — главы Szczeklik и Noszczyk." },
                subtopics: [
                    {
                        title: "Praca z zeszytem błędów (работа по тетради ошибок)",
                        what: "Порядок работы с записями interny (терапии) и chirurgii (хирургии).",
                        where: "Тетрадь ошибок + список слабых тем v2.",
                        study: "1) Записи со звёздочкой: закрыть ответ, ответить, проверить. 2) Для каждой «упорной» темы — 15–20 мин чтения по другому источнику и 5 вопросов. 3) 30 вопросов LEPOLEK по темам списка, разбор.",
                        focus: "Не открывать новые главы и темы, которых нет в списке."
                    },
                    {
                        title: "Interna: stare i nowe odpowiedzi (терапия: старое и новое в вопросах CEM)",
                        what: "Места, где ответ в вопросах прошлых лет отличается от актуальных rekomendacji (рекомендаций).",
                        where: "ESC 2023–2024, GINA 2024, Maastricht VI, ESCMID 2021, консенсус по przełomom hiperglikemicznym (гипергликемическим кризам) 2024.",
                        study: "AF — migotanie przedsionków (ФП): CHA₂DS₂-VASc (мужчины ≥2, женщины ≥3) → CHA₂DS₂-VA ≥2 (ESC 2024). Kardiowersja (кардиоверсия) без antykoagulacji (антикоагуляции): <48 ч → <24 ч. HFrEF: ступени ACEI (иАПФ) + β-bloker (β-блокатор) → MRA → ARNI → сейчас четыре группы (ACEI/ARNI, β-bloker, MRA, SGLT2) сразу. Astma (астма): ступень 1 SABA doraźnie (по требованию) → ICS-formoterol (ИГКС-формотерол) doraźnie. H. pylori в Польше: terapia potrójna (тройная терапия) → poczwórna terapia z bizmutem (висмутовая квадротерапия) 14 дней. C. difficile: metronidazol (метронидазол) → wankomycyna (ванкомицин) p.o. или fidaksomycyna (фидаксомицин). Sepsa (сепсис): «ранняя целенаправленная терапия» (EGDT) и aktywowane białko C (активированный протеин C) (в LEK w pigułce) — отменены, aktywowane białko C снято с рынка в 2011. DKA — kwasica ketonowa (ДКА): glikemia (глюкоза) >250 мг/дл → ≥200 мг/дл или известная cukrzyca (СД).",
                        focus: "Правило экзамена «старое или новое» — одно для всего плана: по умолчанию выбирать ответ по актуальной rekomendacji или программе; старый ответ — только если вопрос прямо называет старую skalę (шкалу), редакцию или год (например «wg skali CHA₂DS₂-VASc», «wg zaleceń z 2015 r.»). Даты у вопроса на экзамене нет, поэтому «ориентироваться на год вопроса» не получится. Неизвестно, составляет ли UZ вопросы сам или берёт их из старых баз CEM; если регламент или сдававшие это прояснят, правило стоит пересмотреть. В тренировке: если ключ LEPOLEK засчитывает старый ответ, записать пару «CEM прошлых лет: X, сейчас: Y» и запоминать Y."
                    },
                    {
                        title: "Chirurgia: pułapki CEM (хирургия: частые ловушки)",
                        what: "Ответы, которые кажутся осторожными, но неверны.",
                        where: "Noszczyk; ATLS 10; EAU; ESVS.",
                        study: "Skręt jądra (перекрут яичка) — operacja, а не ожидание USG (УЗИ). Niestabilny (нестабильный) больной с положительным FAST — sala operacyjna (операционная), а не TK (КТ). Odma prężna (напряжённый пневмоторакс) — nakłucie (пункция) до RTG klatki piersiowej (рентгенограммы). Zakażone wodonercze (инфицированная обструкция почки) — odbarczenie (дренирование), а не ESWL. Uwięźnięta przepuklina (ущемлённая грыжа) с признаками martwicy (некроза) — не вправлять. Czerniak (меланома) — только biopsja wycinająca (эксцизионная биопсия). Markery nowotworowe (онкомаркёры) — не для badań przesiewowych (скрининга). Oparzenia (ожоги): I stopień (степень) в %TBSA не считается; wzór Parkland (формула Паркланда) 4 мл (в ATLS 10 — 2 мл у взрослых). Tężec (столбняк): при неизвестном анамнезе и zanieczyszczonej ranie (загрязнённой ране) — anatoksyna (анатоксин) и immunoglobulina.",
                        focus: "Общий принцип хирургических задач CEM: сначала устраняется угроза жизни (ABCDE), потом уточняется диагноз."
                    },
                    {
                        title: "Test kontrolny: 30 pytań z listy (контроль по темам списка)",
                        what: "Проверка, что целевое повторение сработало.",
                        where: "LEPOLEK -> Baza Pytań, темы из списка v2.",
                        study: "30 вопросов за 45 мин, затем разбор. Для каждой темы — отметка «закрыта / не закрыта».",
                        focus: "Незакрытые темы не переходят в финальную неделю новыми: для них остаются только карточки Anki и записи тетради."
                    }
                ]
            },
            {
                title: "Чт: Целевое повторение по тетради ошибок — акушерство-гинекология и педиатрия",
                id: "sym2-cel-2",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> Ginekologia i położnictwo, Pediatria -> tematy z listy słabych tematów v2 (30 pytań)",
                popup: { what: "Работа только по своим ошибкам в położnictwie i ginekologii (акушерстве-гинекологии) и pediatrii (педиатрии) и обзор мест, где польские программы и rekomendacje (рекомендации) изменились.", focus: "Календари и программы (PSO, standard opieki okołoporodowej (стандарт перинатальной помощи), badania przesiewowe (скрининги)) меняются — ответы старых вопросов CEM часто им не соответствуют.", reading: "Тетрадь ошибок; Bręborowicz, Kawalec для тем из списка." },
                subtopics: [
                    {
                        title: "Praca z zeszytem błędów (работа по тетради ошибок)",
                        what: "Тот же порядок, что в среду, для położnictwa i ginekologii (акушерства-гинекологии) и pediatrii (педиатрии).",
                        where: "Тетрадь ошибок + список слабых тем v2.",
                        study: "Записи со звёздочкой → «упорные» темы по другому источнику → 30 вопросов LEPOLEK по списку → разбор.",
                        focus: "Числовые темы (сроки, dawki na kg — дозы на кг) разбирать с выписыванием числа в Anki, а не только с чтением объяснения."
                    },
                    {
                        title: "Położnictwo i ginekologia: stare i nowe odpowiedzi (акушерство-гинекология: старое и новое)",
                        what: "Места, где изменились rekomendacje (рекомендации) или программы.",
                        where: "PTGiP; International PCOS Guideline 2023; ESHRE 2022; FIGO 2015, 2018, 2023; программы NFZ.",
                        study: "PCOS (СПКЯ): ≥12 pęcherzyków (фолликулов) → ≥20; klomifen (кломифен) → letrozol (летрозол). Endometrioza (эндометриоз): laparoskopia (лапароскопия) как обязательный стандарт диагноза → допустим диагноз по diagnostyce obrazowej (визуализации). Rak endometrium (рак эндометрия): FIGO 2009 → FIGO 2023 с klasyfikacją molekularną (молекулярной классификацией). Badania przesiewowe raka szyjki macicy (скрининг шейки матки): cytologia (цитология) каждые 3 года, 25–59 лет → test HPV HR раз в 5 лет, 25–64 года (с 1.07.2025). Mammografia (маммография): 50–69 → 45–74 года. FHR — częstość akcji serca płodu (ЧСС плода): 110–150 → 110–160 (FIGO 2015).",
                        focus: "Возрастные границы badań przesiewowych (скринингов) — самая частая причина расхождения между LEK w pigułce и текущей программой."
                    },
                    {
                        title: "Pediatria: stare i nowe odpowiedzi (педиатрия: старое и новое)",
                        what: "Изменения, которые чаще всего дают ошибки P в pediatrii (педиатрии).",
                        where: "Komunikat GIS (PSO); ERC 2021; ESPGHAN 2017 и 2020; ISPAD 2022.",
                        study: "MMR вторая доза: 10 лет → 6 лет (с 2019). Szczepionka przeciw pneumokokom (пневмококковая вакцина): zalecana (рекомендованная) → obowiązkowa (обязательная) (с 2017); przeciw rotawirusom (ротавирусная) — в программе с 2021. Bolus płynów (болюс жидкости) у ребёнка во wstrząsie (шоке): 20 мл/кг → 10 мл/кг (ERC 2021). Rozszerzanie diety (прикорм) и gluten (глютен): строгое «окно» 4–6 мес → gluten между 4 и 12 мес, alergeny (аллергены) не откладывать. Celiakia (целиакия): обязательная biopsja (биопсия) → возможен диагноз без biopsji (tTG-IgA ≥10 × нормы + EMA). Zapalenie oskrzelików (бронхиолит): salbutamol (сальбутамол) «на пробу» → не рекомендуется.",
                        focus: "Если в вопросе о PSO возраст «в 10 лет» — вопрос составлен до 2019 года, и ключ банка может засчитать старый календарь. На экзамене — актуальный календарь, если вопрос прямо не спрашивает о прежнем (правило экзамена «старое или новое» — sym2-cel-1)."
                    },
                    {
                        title: "Test kontrolny: 30 pytań z listy (контроль по темам списка)",
                        what: "Проверка целевого повторения по położnictwu i ginekologii (акушерству-гинекологии) и pediatrii (педиатрии).",
                        where: "LEPOLEK -> Baza Pytań, темы из списка v2.",
                        study: "30 вопросов за 45 мин, разбор, отметка «закрыта / не закрыта» по каждой теме.",
                        focus: "Результаты среды и четверга вместе определяют, какой раздел получает блок пятницы, если по симуляции №2 два раздела близки."
                    }
                ]
            },
            {
                title: "Пт: Блок 60 вопросов по самому слабому разделу + разбор",
                id: "sym2-blok",
                time: "2 ч",
                lepolekPath: "Testy -> Test własny: najsłabsza dziedzina z symulacji nr 2 (60 pytań CEM)",
                popup: { what: "Интенсивная проверка одного раздела: 60 вопросов за 90 мин и 30 мин разбора.", focus: "60 вопросов дают более надёжную оценку раздела, чем 40 на симуляции: разница в 1 вопрос = 1,7 п. п., стандартное отклонение ≈3,5 вопроса (≈6 п. п.). Решение по разделу — по сумме блока и симуляции №2.", reading: "Тетрадь ошибок по разделу." },
                subtopics: [
                    {
                        title: "Wybór dziedziny (выбор раздела и сборка блока)",
                        what: "Раздел с самой низкой суммой по симуляциям №1 и №2.",
                        where: "Протокол №2 + результаты среды и четверга.",
                        study: "Сумма №1 + №2 — 80 вопросов на раздел (стандартное отклонение ≈4 вопроса). Если суммы двух разделов отличаются не больше чем на 4 вопроса — выбрать тот, который был слабее в контрольных тестах среды и четверга. Вопросы — случайные по всему разделу, а не только по слабым темам: проверяется весь раздел.",
                        focus: "Не подбирать удобные темы: блок должен быть репрезентативным."
                    },
                    {
                        title: "Blok 60 pytań (решение 60 вопросов)",
                        what: "90 мин, режим экзамена, бланк с уверенностью.",
                        where: "LEPOLEK -> Testy.",
                        study: "Темп 1,5 мин на вопрос; отметки для сомнительных; без перерывов.",
                        focus: "Цель ≥42/60 (70%)."
                    },
                    {
                        title: "Analiza bloku (разбор блока)",
                        what: "30 мин: классификация ошибок и решение, что делать с разделом.",
                        where: "Объяснения LEPOLEK, тетрадь ошибок.",
                        study: "Решение — по сумме симуляции №2 и блока (100 вопросов раздела): ≥70/100 — раздел в норме, дальше только тетрадь ошибок. 60–69/100 — раздел получает дополнительные 30 вопросов в дни fakty недели sym-3. <60/100 — раздел становится приоритетом: 20–30 вопросов этого раздела каждый будний день до конца sym-3.",
                        focus: "Решение записать в протокол: оно определяет распределение времени на следующей неделе."
                    }
                ]
            },
            {
                title: "Сб: Тест 40 вопросов — второй по слабости раздел",
                id: "sym2-test",
                time: "1.5 ч",
                lepolekPath: "Testy -> Test własny: druga najsłabsza dziedzina z symulacji nr 2 (40 pytań CEM)",
                popup: { what: "Проверка второго по слабости раздела (по сумме симуляций №1 и №2), чтобы он не выпал из внимания после пятницы.", focus: "Цель ≥28/40.", reading: "Тетрадь ошибок по разделу." },
                subtopics: [
                    {
                        title: "Test 40 pytań (тест 40 вопросов)",
                        what: "60 мин, режим экзамена, случайные вопросы раздела.",
                        where: "LEPOLEK -> Testy.",
                        study: "Бланк с уверенностью P / 2 / Z; отметки для сомнительных.",
                        focus: "Не смотреть объяснения до конца теста."
                    },
                    {
                        title: "Analiza błędów (разбор ошибок)",
                        what: "Классификация ошибок L/N/P/J/Z.",
                        where: "Объяснения LEPOLEK + тетрадь ошибок.",
                        study: "L — в Anki, P — в раздел шаблонов формулировок, N — в чек-лист чтения.",
                        focus: "Повторяющиеся N в числовых вопросах — выработать привычку подчёркивать единицы и сроки в условии."
                    },
                    {
                        title: "Plan tygodnia sym-3 (план следующей недели)",
                        what: "Распределение дополнительных вопросов на неделю ключевых фактов.",
                        where: "Протокол №2 + решения пятницы и субботы.",
                        study: "Записать: какой раздел получает дополнительные вопросы, какие темы остались «упорными», сколько карточек Anki в очереди. Бюджет недели sym-3 — не больше 17 ч.",
                        focus: "Если Anki-очередь больше 150 карточек в день — приостановить добавление новых карточек до конца симуляции №3."
                    }
                ]
            }
        ]
    },
    {
        key: "sym-3",
        subject: "powtorka",
        title: "Симуляция №3 и ключевые факты",
        days: [
            {
                title: "Пн: Симуляция №3 — 160 вопросов за 4 ч",
                id: "sym3",
                time: "4.5 ч",
                lepolekPath: "Testy -> Test własny: 160 pytań CEM (po 40 z 4 dziedzin, pytania dotąd nierozwiązywane)",
                popup: { what: "Последняя полная симуляция: 160 вопросов, те же условия, что №1 и №2, плюс 30 мин подсчёта.", focus: "Это генеральная репетиция экзамена: окончательная тактика темпа, еды, перерыва и работы с отметками.", reading: "Ничего нового. Чек-лист чтения из тетради ошибок — один раз перед стартом." },
                subtopics: [
                    {
                        title: "Próba generalna (генеральная репетиция)",
                        what: "Симуляция в условиях, максимально близких к дню экзамена.",
                        where: "Протоколы №1 и №2; регламент экзамена UZ.",
                        study: "Старт в час экзамена; тот же завтрак, который будет в день экзамена; одежда, вода, часы без смарт-функций (если в зале разрешены часы — уточнить). Если экзамен на бумажной карте ответов — перенос ответов в конце каждого блока из 40, а не в последние 10 мин.",
                        focus: "Всё, что сегодня мешало (голод, холод, спешка в конце), — записать и исправить до экзамена."
                    },
                    {
                        title: "Taktyka ostateczna (окончательная тактика)",
                        what: "Проверка тактики двух проходов с учётом статистики №1 и №2.",
                        where: "Бланк симуляции.",
                        study: "Контрольные точки 40 — 50 мин, 80 — 100 мин, 120 — 150 мин, 160 — 200 мин; второй проход ~30 мин; ~10 мин на проверку пустых ответов. Правило исправлений — как в протоколе №1: менять ответ при конкретной причине (вспомнил факт, нашёл ошибку чтения, подсказал другой вопрос), не менять «по ощущению»; если в №1 и №2 исправления «по ощущению» чаще портили ответ — отказаться от них окончательно.",
                        focus: "Не оставлять вопросов без ответа, если на экзамене нет штрафа за неверный ответ (так на LEK/LEW; для экзамена UZ уточнить в регламенте)."
                    },
                    {
                        title: "Wynik i protokół (подсчёт и протокол)",
                        what: "Процент по разделам и общий, в тех же полях, что №1 и №2.",
                        where: "Протокол симуляции №3.",
                        study: "Ориентиры по одной симуляции (шум ≈±6 вопросов, ≈3,6 п. п.): ≥112/160 (70%) — цель достигнута; 96–111 (60–69%) — зона риска, если порог UZ близок к 60%; <96 — порог UM Łódź не пройден, финальную неделю посвятить только тетради ошибок и самому слабому разделу. Окончательное решение — завтра, по сумме №2 и №3.",
                        focus: "Разбор — завтра."
                    }
                ]
            },
            {
                title: "Вт: Разбор симуляции №3 и тренд трёх симуляций",
                id: "sym3-analiza",
                time: "2.5 ч",
                lepolekPath: "Testy -> Historia testów -> Symulacja nr 3 (przegląd odpowiedzi z wyjaśnieniami)",
                popup: { what: "Разбор ошибок №3 и сводная таблица №1 → №2 → №3.", focus: "Решить, что делать последние 1,5 недели: закреплять или спасать раздел.", reading: "Протоколы трёх симуляций, тетрадь ошибок." },
                subtopics: [
                    {
                        title: "Trend wyników (тренд трёх симуляций)",
                        what: "Сводная таблица по разделам и общий результат трёх попыток.",
                        where: "Протоколы №1–№3.",
                        study: "Колонки: раздел / №1 / №2 / №3 / сумма тестов раздела после rep-1 (№2 + №3, плюс блок 60 и субботний тест, если они были у раздела) в процентах. Раздел стабилен при ≥70% по сумме, нестабилен — при <70%. Сумма 80–140 вопросов шумит на ≈4–5 п. п. (см. sym2-analiza): при 66–74% раздел на границе, и в сомнении его считают нестабильным — лишние 30 вопросов в день стоят дешевле недоученного раздела.",
                        focus: "Одна хорошая симуляция не доказывает готовность раздела: 40 вопросов — это ±7 п. п. шума. Решение — по сумме."
                    },
                    {
                        title: "Analiza błędów symulacji №3 (разбор ошибок)",
                        what: "Классификация L/N/P/J/Z, как в предыдущих разборах.",
                        where: "Объяснения LEPOLEK + тетрадь ошибок.",
                        study: "Ошибки L на этом этапе — только в Anki и тетрадь, без чтения глав. Ошибки N — дополнить чек-лист чтения; к экзамену в нём должно быть не больше 5 пунктов.",
                        focus: "Ошибки в темах, которые были в списках №1 и №2, отметить двумя звёздочками — это ядро финального повторения."
                    },
                    {
                        title: "Decyzja na ostatnie dni (решение о финальных днях)",
                        what: "Распределение времени fakty-дней и финальной недели.",
                        where: "Тренд трёх симуляций.",
                        study: "Все разделы стабильны — план недели без изменений. Один раздел нестабилен — +30 вопросов этого раздела в каждый fakty-день. Общий результат №2 + №3 <60% (<192/320) — сократить fakty-дни до фактов по нестабильному разделу.",
                        focus: "Новый материал не вводится ни при каком результате: в последние 10 дней прирост даёт только закрепление уже изученного."
                    }
                ]
            },
            {
                title: "Ср: Ключевые факты I — шкалы и классификации (skale, kryteria, klasyfikacje)",
                id: "fakty-1",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> wszystkie dziedziny -> pytania o skale i klasyfikacje (30 pytań)",
                popup: { what: "Skale i klasyfikacje (шкалы и классификации), которые встречаются в вопросах всех разделов: что считается, пороги, что из них следует.", focus: "Составные части skal (шкал) (что входит, сколько баллов) и порог, меняющий тактику.", reading: "LEK w pigułce, rozdz. 7 «Najważniejsze skale, kryteria i klasyfikacje»; ESC 2024 (AF), ESGE 2021." },
                subtopics: [
                    {
                        title: "Skale kardiologiczne: CHA₂DS₂-VA(Sc), HAS-BLED, Wells, NYHA, Killip (кардиология и тромбоз)",
                        what: "Skale (шкалы) риска udaru (инсульта), krwawienia (кровотечения), ZP/ZŻG (ТЭЛА/ТГВ) и тяжести niewydolności serca (сердечной недостаточности).",
                        where: "LEK w pigułce, rozdz. 7; ESC 2024 (AF), ESC 2019 (PE).",
                        study: "CHA₂DS₂-VA: C — NS (сердечная недостаточность) 1, H — nadciśnienie (гипертензия) 1, A₂ — возраст ≥75 2, D — cukrzyca (СД) 1, S₂ — udar/TIA/zator (инсульт/TIA/эмболия) 2, V — choroba naczyń (сосудистая болезнь) 1, A — 65–74 года 1; максимум 8; ≥2 — antykoagulacja (антикоагуляция) рекомендуется, 1 — рассмотреть. CHA₂DS₂-VASc добавляет Sc — женский пол 1 (максимум 9). HAS-BLED: niekontrolowane nadciśnienie (неконтролируемая гипертензия) (SBP — САД >160), zaburzenia czynności nerek i wątroby (нарушение функции почек и печени) (по 1), udar, krwawienie, chwiejne INR (лабильное INR), возраст >65, leki (лекарства: leki przeciwpłytkowe — антиагреганты, NLPZ — НПВП) и alkohol (по 1); ≥3 — высокий риск. Skala Wellsa ZP (ТЭЛА): objawy ZŻG (признаки ТГВ) 3, ZP najbardziej prawdopodobna (ТЭЛА наиболее вероятна) 3, HR (ЧСС) >100 1,5, unieruchomienie lub operacja (иммобилизация или операция) ≤4 нед 1,5, ZŻG/ZP в анамнезе 1,5, krwioplucie (кровохарканье) 1, nowotwór (рак) 1; >4 — вероятна (двухуровневый вариант). Skala Wellsa ZŻG ≥2 — вероятен. NYHA I — без ограничений, II — симптомы при обычной нагрузке, III — при нагрузке меньше обычной, IV — в покое. Killip (zawał serca — ИМ): I — без NS, II — rzężenia (хрипы) в нижних отделах / S3, III — obrzęk płuc (отёк лёгких), IV — wstrząs kardiogenny (кардиогенный шок).",
                        focus: "HAS-BLED ≥3 не przeciwwskazanie (противопоказание) к antykoagulacji. Killip и NYHA похожи по числу классов — Killip только для ostrego zawału serca (острого ИМ)."
                    },
                    {
                        title: "Skale internistyczne i chirurgiczne: CURB-65, Child-Pugh, Glasgow-Blatchford, Forrest, Alvarado (пульмонология и гастроэнтерология)",
                        what: "Skale (шкалы) тяжести zapalenia płuc (пневмонии), marskości wątroby (цирроза), krwawienia z przewodu pokarmowego (кровотечения из ЖКТ) и вероятности zapalenia wyrostka robaczkowego (аппендицита).",
                        where: "LEK w pigułce, rozdz. 7; ESGE 2021.",
                        study: "CURB-65: splątanie (спутанность), mocznik (мочевина) >7 ммоль/л (>42 мг/дл), częstość oddechów (ЧД) ≥30, SBP (САД) <90 или DBP (ДАД) ≤60, возраст ≥65; 0–1 — амбулаторно, 2 — стационар, 3–5 — тяжёлая. CRB-65 — без mocznika, для амбулаторного врача. Child-Pugh: bilirubina (билирубин), albumina (альбумин), INR, wodobrzusze (асцит), encefalopatia (энцефалопатия), по 1–3 балла; A 5–6, B 7–9, C 10–15. Glasgow-Blatchford (mocznik, Hb, SBP, HR (ЧСС), smoliste stolce (мелена), omdlenie (обморок), choroba wątroby (болезнь печени), NS (сердечная недостаточность)): ≤1 — амбулаторно (ESGE 2021; в старых вопросах — 0). Forrest: Ia — krwawienie tętnicze (струйное артериальное), Ib — sączenie (подтекание), IIa — widoczne naczynie (видимый сосуд), IIb — przylegający skrzep (фиксированный сгусток), IIc — płaska plamka (пигментированное пятно), III — czyste dno (чистое дно); hemostaza endoskopowa (гемостаз) при Ia, Ib, IIa. Alvarado (MANTRELS, максимум 10): migracja bólu (миграция боли) 1, jadłowstręt (анорексия) 1, nudności/wymioty (тошнота/рвота) 1, tkliwość w prawym dole biodrowym (болезненность в правой подвздошной области) 2, objaw otrzewnowy (симптом раздражения брюшины) 1, T ≥37,3 °C 1, leukocytoza (лейкоцитоз) >10 000/мкл 2, przesunięcie w lewo (сдвиг влево) 1; ≤4 — маловероятно, 5–6 — возможно, ≥7 — вероятно.",
                        focus: "В Alvarado по 2 балла дают только tkliwość w prawym dole biodrowym (болезненность в правой подвздошной области) и leukocytoza — частый вопрос «сколько баллов у пациента»."
                    },
                    {
                        title: "Skala Glasgow, skala Apgar (неврология и неонатология: GCS, Apgar)",
                        what: "Ocena przytomności (оценка сознания) при urazie (травме) и stanu noworodka (состояния новорождённого).",
                        where: "LEK w pigułce, rozdz. 7; Noszczyk -> Urazy czaszkowo-mózgowe; Kawalec -> Neonatologia.",
                        study: "GCS: otwieranie oczu (открывание глаз) 1–4, odpowiedź słowna (речевой ответ) 1–5, odpowiedź ruchowa (двигательный ответ) 1–6; минимум 3, максимум 15. Uraz czaszkowo-mózgowy (ЧМТ) лёгкий 13–15, средний 9–12, тяжёлый 3–8; ≤8 — zabezpieczenie dróg oddechowych (защита дыхательных путей) (intubacja). Odpowiedź ruchowa: 6 — spełnia polecenia (выполняет команды), 5 — lokalizuje ból (локализует боль), 4 — ucieka od bólu (отдёргивает), 3 — nieprawidłowe zgięcie (патологическое сгибание; odkorowanie — декортикация), 2 — wyprost (разгибание; odmóżdżenie — децеребрация), 1 — нет. Skala Apgar: 5 параметров по 0–2 (HR (ЧСС): 0 — нет, 1 — <100, 2 — ≥100; oddech (дыхание); napięcie mięśniowe (мышечный тонус); reakcja na bodźce (рефлекторная возбудимость); zabarwienie skóry (цвет кожи)); на 1-й и 5-й минуте; 8–10, 4–7, 0–3.",
                        focus: "Skala Apgar не используется для решения о начале resuscytacji (реанимации) — её начинают по oddechowi (дыханию) и HR (ЧСС), не дожидаясь 1-й минуты."
                    },
                    {
                        title: "Skala Bishopa, FIGO, TNM (акушерство и онкология)",
                        what: "Dojrzałość szyjki macicy (зрелость шейки матки), stopniowanie (стадирование) nowotworów ginekologicznych (гинекологических раков) и общая система TNM.",
                        where: "LEK w pigułce, rozdz. 7 (Klasyfikacja FIGO raka szyjki, jajnika, endometrium); Bręborowicz; AJCC/UICC TNM.",
                        study: "Skala Bishopa: rozwarcie (раскрытие) (0–3), skrócenie (сглаживание) (0–3), położenie główki (положение головки) (0–3), konsystencja (консистенция) (0–2), położenie szyjki (положение шейки) (0–2); максимум 13; <6 — niedojrzała (незрелая), ≥8 — dojrzała (зрелая). FIGO raka szyjki macicy (2018) — см. rep-gin: wodonercze (гидронефроз) → IIIB, węzły chłonne (лимфоузлы) → IIIC. FIGO raka jajnika (яичника): I — ограничено jajnikami, II — miednica mniejsza (малый таз), III — otrzewna (брюшина) за пределами таза или węzły zaotrzewnowe (забрюшинные лимфоузлы), IV — przerzuty odległe (отдалённые метастазы) (включая wysięk opłucnowy (плевральный выпот) с положительной cytologią). FIGO endometrium — stopniowanie chirurgiczne (хирургическое стадирование); FIGO 2023 с podtypami molekularnymi (молекулярными подтипами). TNM: T — guz pierwotny (первичная опухоль), N — regionalne węzły chłonne (регионарные лимфоузлы), M — przerzuty odległe; префиксы c — клиническая, p — патоморфологическая, y — после leczenia neoadiuwantowego (неоадъювантного лечения) (ypTNM).",
                        focus: "Rak szyjki macicy (рак шейки матки) стадируется клинически и по diagnostyce obrazowej (визуализации) (FIGO 2018 допускает визуализацию и patomorfologię), rak jajnika и endometrium — хирургически."
                    },
                    {
                        title: "Inne skale: Centor, Fontaine, Truelove-Witts, Ranson/BISAP (прочие частые шкалы)",
                        what: "Skale (шкалы), которые реже, но стабильно встречаются в вопросах.",
                        where: "LEK w pigułce, rozdz. 7.",
                        study: "Centor/McIsaac (angina — ангина): gorączka (лихорадка) >38 °C, brak kaszlu (отсутствие кашля), bolesne węzły chłonne szyjne przednie (болезненные передние шейные лимфоузлы), nalot/obrzęk migdałków (налёт/отёк миндалин), возраст 3–14 лет +1, ≥45 лет −1; 0–1 — не лечить antybiotykiem (антибиотиком), 2–3 — szybki test antygenowy (экспресс-тест) или posiew (посев), 4–5 — тест (в части рекомендаций — empiryczny antybiotyk). Fontaine — см. rep-chir (IIa/IIb граница 200 м). Truelove-Witts — см. rep-int-2. OZT — ostre zapalenie trzustki (острый панкреатит): Ranson (оценка при поступлении и через 48 ч) и BISAP (BUN, zaburzenia świadomości — нарушение сознания, SIRS, возраст >60, wysięk opłucnowy — плевральный выпот; ≥3 — высокий риск).",
                        focus: "Возрастная поправка McIsaac (+1 у детей, −1 после 45 лет) — отличие от классической skali Centora (шкалы Центора)."
                    }
                ]
            },
            {
                title: "Чт: Ключевые факты II — нормы и числа (normy, liczby, dawki)",
                id: "fakty-2",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> wszystkie dziedziny -> pytania liczbowe (normy, terminy, dawki) (30 pytań)",
                popup: { what: "Числа, которые проверяются напрямую: normy laboratoryjne (лабораторные нормы), возрастные нормы детей, календарь PSO, сроки ciąży (беременности) и badań przesiewowych (скринингов), dawki leków w stanach nagłych (дозы экстренных препаратов).", focus: "Единицы измерения (мг/дл vs ммоль/л, мг vs мкг) и граничные значения — типичное место ошибок N.", reading: "LEK w pigułce, rozdz. 15 «Medycyna w liczbach» и rozdz. 17; ERC 2021 (дозы)." },
                subtopics: [
                    {
                        title: "Normy laboratoryjne (лабораторные нормы)",
                        what: "Wartości referencyjne (референсные значения), от которых отталкиваются вопросы.",
                        where: "LEK w pigułce, rozdz. 15 «Najważniejsze normy laboratoryjne»; Szczeklik -> Wartości referencyjne.",
                        study: "Na 135–145 ммоль/л; K 3,5–5,0 ммоль/л (зависит от лаборатории; в LEK w pigułce 3,8–5,5). Glikemia na czczo (глюкоза натощак) 70–99 мг/дл; перевод ммоль/л × 18 = мг/дл. Kreatynina (креатинин) ~0,6–1,2 мг/дл. Hb: мужчины 14–18, женщины 12–16 г/дл; niedokrwistość (анемия) по WHO — <13 у мужчин, <12 у женщин, <11 у ciężarnych (беременных). Płytki krwi (тромбоциты) 150 000–400 000/мкл, leukocyty (лейкоциты) 4000–10 000/мкл. INR 0,85–1,15; APTT ~26–40 с. TSH 0,4–4,0 mIU/l. HbA1c <5,7% — норма. Gazometria (газометрия): pH 7,35–7,45, pCO₂ 35–45, HCO₃⁻ 22–26 (в LEK w pigułce 21–28), pO₂ >80 mmHg. CRP — порог ostrej fazy (острой фазы) 10 мг/л. Wapń całkowity (кальций общий) ~2,25–2,6 ммоль/л (≈9–10,5 мг/дл).",
                        focus: "Пограничные значения glikemii (глюкозы) (100, 126, 140, 200 мг/дл) — самый частый числовой вопрос interny (терапии)."
                    },
                    {
                        title: "Normy wiekowe u dzieci (возрастные нормы детей)",
                        what: "HR (ЧСС), częstość oddechów (ЧД), ciśnienie tętnicze (давление) и расчёт masy ciała (массы) по возрасту.",
                        where: "ERC 2021 -> Paediatric Life Support; APLS; Kawalec -> Badanie dziecka.",
                        study: "HR / częstość oddechów ориентировочно: niemowlę (младенец) <1 года 110–160 / 30–40; 1–2 года 100–150 / 25–35; 2–5 лет 95–140 / 25–30; 5–12 лет 80–120 / 20–25; >12 лет 60–100 / 15–20. Noworodek (новорождённый): częstość oddechów 40–60. Минимальное SBP (САД): 1–12 мес 70 mmHg, 1–10 лет 70 + 2 × возраст, >10 лет 90. Masa ciała 1–10 лет ≈ (возраст + 4) × 2 кг. Nadciśnienie tętnicze (гипертензия) у ребёнка — ≥95 centyla (перцентиля) для возраста, пола и роста. Temperaturę (температуру) до 3 лет измеряют doodbytniczo (ректально) (в LEK w pigułce).",
                        focus: "HR <60/мин с признаками złej perfuzji (плохой перфузии) у ребёнка — показание к uciśnięciom klatki piersiowej (компрессиям), а не к atropinie (атропину)."
                    },
                    {
                        title: "Kalendarz szczepień PSO — tabela skrócona (краткий календарь прививок)",
                        what: "Сжатая версия календаря szczepień (прививок) для запоминания сроков.",
                        where: "Komunikat GIS w sprawie PSO на актуальный год (сверить на 2027); LEK w pigułce, rozdz. 17 (версия 2016 года — для понимания старых вопросов).",
                        study: "0 (первые 24 ч): WZW B (гепатит B), BCG. 2 мес (6–8 нед): DTP, IPV, Hib, WZW B, PCV, rotawirusy (ротавирус). Далее до 1 года — продолжение szczepienia podstawowego (первичной серии) DTP-IPV-Hib-WZW B и PCV, серия przeciw rotawirusom до 24–32 нед. 13–15 мес: MMR. 16–18 мес: DTP-IPV-Hib (dawka przypominająca — ревакцинация). 6 лет: DTaP-IPV, MMR (вторая доза с 2019). 14 лет: Tdap. 19 лет: Td. Szczepionki żywe (живые вакцины): BCG, MMR, ospa wietrzna (ветряная оспа), rotawirusy, OPV, żółta gorączka (жёлтая лихорадка); между двумя живыми не в один день — ≥4 нед. BCG не делают при массе <2000 г.",
                        focus: "Точные месяцы серии DTP и PCV в разных версиях PSO различаются — запоминать их по актуальному Komunikatu, а не по LEK w pigułce."
                    },
                    {
                        title: "Terminy w ciąży (сроки беременности и скринингов)",
                        what: "Определения сроков и календарь badań (обследований) ciężarnej (беременной).",
                        where: "LEK w pigułce, rozdz. 15 (Ginekologia i położnictwo); Rozporządzenie o standardzie opieki okołoporodowej; Bręborowicz.",
                        study: "Poronienie (выкидыш) — до 22+0 tc. (нед); poród przedwczesny (преждевременные роды) — 22+0–36+6; ciąża donoszona (доношенная) — 37+0–41+6; ciąża przeterminowana (переношенная) — ≥42+0. Reguła Naegelego (правило Негеле): первый день ostatniej miesiączki (последней менструации) + 7 дней − 3 мес + 1 год. Pierwsze ruchy płodu (первые шевеления): 18–20 tc. у pierwiastek (первородящих), 16–18 у wieloródek (повторнородящих). Badania przesiewowe: USG 11+0–13+6, 18–22, 27–32 tc.; OGTT 24–28; GBS 35–37; anti-D около 28 tc. и ≤72 ч после родов. Wielowodzie (многоводие) AFI >20–24 см (в LEK w pigułce >20), małowodzie (маловодие) AFI <5 см. Połóg (послеродовой период) — 6 нед. Kwas foliowy (фолиевая кислота) 0,4 мг, после ребёнка с NTD — wadą cewy nerwowej (дефектом нервной трубки) — 4 мг.",
                        focus: "Польская граница porodu przedwczesnego (преждевременных родов) — 22 tc., а не 20 (американская литература) и не 28 (старые советские учебники)."
                    },
                    {
                        title: "Dawki leków w stanach nagłych (дозы экстренных препаратов)",
                        what: "Dawki (дозы), которые спрашивают напрямую, у взрослых и детей.",
                        where: "ERC 2021 (ALS, PLS, anafilaksja); LEK w pigułce, rozdz. 6.",
                        study: "Adrenalina (адреналин) при zatrzymaniu krążenia (остановке): взрослые 1 мг i.v./i.o., дети 10 мкг/кг (макс. 1 мг). Adrenalina при anafilaksji (анафилаксии) i.m.: взрослые 0,5 мг, дети 0,01 мг/кг (макс. 0,5 мг). Amiodaron (амиодарон): 300 мг, затем 150 мг; дети 5 мг/кг. Atropina (атропин) при bradykardii: 0,5 мг, до 3 мг. Adenozyna (аденозин): 6 мг, 12 мг (третья доза 18 мг по ERC 2021). Defibrylacja (дефибрилляция) у детей 4 Дж/кг. Płyny (жидкость) у ребёнка: bolus (болюс) 10 мл/кг. Glukoza у ребёнка при hipoglikemii: 10% 2 мл/кг. Nalokson (налоксон) 0,4 мг i.v. Siarczan magnezu (сульфат магния) при torsade de pointes — 2 г i.v. Kwas traneksamowy (транексамовая кислота) при urazie (травме) и PPH — krwotoku poporodowym — 1 г i.v. Deksametazon (дексаметазон) при krupie (крупе) — 0,15–0,6 мг/кг однократно. Hydrokortyzon (гидрокортизон) при przełomie nadnerczowym (надпочечниковом кризе) — 100 мг i.v.",
                        focus: "Stężenie adrenaliny (концентрация адреналина): для i.m. — 1 мг/мл (1:1000); путаница rozcieńczeń (разведений) — источник ошибок N."
                    }
                ]
            },
            {
                title: "Пт: Лекарства первого выбора и противопоказанные (Leki wskazane, leki przeciwwskazane, najczęściej…)",
                id: "fakty-3",
                time: "2.5 ч",
                lepolekPath: "Baza Pytań -> wszystkie dziedziny -> pytania o leczenie z wyboru i przeciwwskazania (30 pytań)",
                popup: { what: "Проработка трёх глав LEK w pigułce: leki pierwszego wyboru (лекарства первого выбора), leki przeciwwskazane (противопоказанные лекарства) и «najczęściej…» (самые частые…), с отметкой устаревших пунктов.", focus: "LEK w pigułce писался по rekomendacjom (рекомендациям) 2015–2018 годов: часть пунктов устарела. Знать и формулировку книги (чтобы узнать её среди вариантов), и актуальный ответ — на экзамене выбирается он (правило экзамена «старое или новое» — sym2-cel-1).", reading: "LEK w pigułce, rozdz. 5 «Leki przeciwwskazane», rozdz. 6 «Leki pierwszego wyboru» (в тексте главы — «Leki wskazane»), rozdz. 14 «Najczęściej…»." },
                subtopics: [
                    {
                        title: "Leki przeciwwskazane (противопоказанные лекарства)",
                        what: "Пары «состояние — препарат, который нельзя».",
                        where: "LEK w pigułce, rozdz. 5; rozdz. 10 «Przeciwwskazania».",
                        study: "Azotany (нитраты) — STEMI с SBP (САД) <90, bradykardią (брадикардией) <50, tachykardią (тахикардией) >100, zawałem prawej komory (инфарктом ПЖ), приёмом inhibitorów PDE-5 (ингибиторов фосфодиэстеразы) (sildenafil (силденафил) 24 ч, tadalafil (тадалафил) 48 ч). β-blokery (β-блокаторы) — dławica Prinzmetala (стенокардия Принцметала). Amoksycylina (амоксициллин) — mononukleoza (мононуклеоз). Leki przeciwbiegunkowe (противодиарейные) — rzekomobłoniaste zapalenie jelit (псевдомембранозный колит). Leki antycholinergiczne (антихолинергические) и TLPD (трициклические) — ostra jaskra z zamkniętym kątem (острая закрытоугольная глаукома). Klasyczne neuroleptyki (классические нейролептики) — otępienie z ciałami Lewy'ego (деменция с тельцами Леви). Leki przeciwkaszlowe (противокашлевые) — POChP (ХОБЛ). GKS в высоких дозах — twardzina układowa (системная склеродермия). Ciąża (беременность): ACEI (иАПФ), sartany (ARB), diuretyki (диуретики) при nadciśnieniu (гипертензии); VKA (антагонисты витамина K); fluorochinolony (фторхинолоны) при ZUM (ИМП); tokoliza (токолиз) при przedwczesnym oddzieleniu łożyska (отслойке плаценты). Metformina (метформин) — eGFR <30. NOAC — mechaniczna zastawka (механический клапан). Werapamil (верапамил) и diltiazem (дилтиазем) — HFrEF. Дети: ASA (zespół Reye'a — синдром Рея), kodeina (кодеин) <12 лет, tetracykliny (тетрациклины) <8 лет. Szczepionki żywe (живые вакцины) — ciąża, ciężki niedobór odporności (тяжёлый иммунодефицит).",
                        focus: "В вопросах «które z leków jest przeciwwskazane» обычно три препарата допустимы и один нет — искать патофизиологическую причину (снижение obciążenia wstępnego (преднагрузки) при zawale prawej komory (инфаркте ПЖ), skurcz naczyń (вазоспазм) при β-blokadzie)."
                    },
                    {
                        title: "Leki pierwszego wyboru — choroby wewnętrzne (первый выбор в терапии)",
                        what: "Пары «состояние — lek pierwszego wyboru (препарат первого выбора)» из LEK w pigułce с поправками.",
                        where: "LEK w pigułce, rozdz. 6.",
                        study: "Paciorkowcowe zapalenie gardła (стрептококковая ангина) — fenoksymetylpenicylina (феноксиметилпенициллин) 10 дней. Astma oskrzelowa (бронхиальная астма) — см. поправку ниже. Dławica Prinzmetala (стенокардия Принцметала) — CCB (блокаторы кальциевых каналов). Choroba Wilsona (болезнь Вильсона) — penicylamina (пеницилламин). Choroba von Willebranda (тип 1) — desmopresyna (десмопрессин). Gruźlica (туберкулёз) — 2 HRZE + 4 HR. Krwawienie z GOPP (кровотечение из верхних отделов ЖКТ) — IPP (ИПП). Insulinoma (инсулинома) — лечение выбора хирургическое (enukleacja — энуклеация); diazoksyd (диазоксид) — препарат выбора при nieoperacyjnym guzie (неоперабельной опухоли) или до операции (в книге — «insulinoma — diazoksyd»). Zakażona martwica (инфицированный некроз) при OZT (остром панкреатите) — karbapenem (карбапенем). Ostra jaskra z zamkniętym kątem (острая закрытоугольная глаукома) — pilokarpina (пилокарпин), acetazolamid (ацетазоламид), mannitol (маннитол). Anafilaksja (анафилаксия) — adrenalina 0,5 мг i.m. Twardzinowy przełom nerkowy (склеродермический почечный криз) — ACEI (иАПФ). Zapalenie uchyłków (дивертикулит) — metronidazol + fluorochinolon (в лёгких неосложнённых случаях сейчас допускается без antybiotyku). Zapalenia płuc (пневмонии): S. pneumoniae — amoksycylina (амоксициллин), Mycoplasma и Chlamydophila pneumoniae — makrolid (макролид), Legionella — fluorochinolon или azytromycyna (азитромицин), MRSA — wankomycyna (ванкомицин) или linezolid (линезолид), P. aeruginosa — ceftazydym (цефтазидим).",
                        focus: "Большинство пунктов главы совпадает с современными rekomendacjami (рекомендациями); поправки собраны в отдельной подтеме — выучить их именно как список исключений."
                    },
                    {
                        title: "Leki pierwszego wyboru — ginekologia, pediatria (первый выбор в акушерстве-гинекологии и педиатрии)",
                        what: "Пары «состояние — препарат» из разделов ginekologii (гинекологии) и pediatrii (педиатрии).",
                        where: "LEK w pigułce, rozdz. 6.",
                        study: "Ciąża ektopowa (внематочная беременность) при стабильном состоянии — metotreksat (метотрексат). Bakteryjna waginoza (бактериальный вагиноз) — metronidazol (метронидазол) (в беременность в книге — klindamycyna — клиндамицин). Rzęsistkowica (трихомониаз) — metronidazol + лечение partnera. ZUM (ИМП) у ciężarnej (беременной) — amoksycylina (амоксициллин) (или другие безопасные: cefalosporyny (цефалоспорины), nitrofurantoina (нитрофурантоин) вне конца III trymestru (триместра), fosfomycyna (фосфомицин)). Pediatria: ostre zapalenie zatok (острый синусит) и ostre zapalenie ucha środkowego (средний отит) — amoksycylina 75–90 мг/кг/сут; krup (круп) — deksametazon (дексаметазон) 0,15–0,6 мг/кг однократно (или budezonid (будесонид) 2 мг w nebulizacji), antybiotyki не показаны; zapalenie nagłośni (эпиглоттит) — cefalosporyna III generacji (III поколения) i.v. и hospitalizacja; krztusiec (коклюш) — makrolid (у niemowląt — младенцев — azytromycyna); SVT — adenozyna (аденозин); zespół wydłużonego QT (синдром удлинённого QT) — β-bloker; owsica (энтеробиоз) — mebendazol (мебендазол), albendazol (альбендазол), pyrantel (пирантел); PZP — pozaszpitalne zapalenie płuc (внебольничная пневмония) у ребёнка 4 мес — 5 лет — amoksycylina.",
                        focus: "Amoksycylina (амоксициллин) 75–90 мг/кг/сут — высокая доза для zapalenia ucha (отита) и zatok (синусита), её часто путают со стандартной 40–50 мг/кг/сут."
                    },
                    {
                        title: "Nieaktualne zalecenia LEK w pigułce (устаревшие пункты книги)",
                        what: "Места, где книга расходится с актуальными rekomendacjami (рекомендациями).",
                        where: "LEK w pigułce, rozdz. 5–6 в сравнении с GINA 2024, ESC 2021–2024, Maastricht VI, SSC 2021.",
                        study: "Astma (астма), ступень I «SABA doraźnie» → ICS-formoterol (ИГКС-формотерол) doraźnie (по требованию) (GINA с 2019). Astma, ступень V «przeciwciało anty-IgA» — опечатка книги: anty-IgE (omalizumab — омализумаб), а также anty-IL-5, anty-IL-4R. Sepsa (сепсис) у детей «aktywowane białko C» → снято с рынка в 2011, в лечении не используется. Anafilaksja (анафилаксия) у детей «ranitydyna» → ranitydyna (ранитидин) отозвана в 2020. H. pylori — terapia potrójna (тройная) без klarytromycyny (кларитромицина) → poczwórna terapia z bizmutem (висмутовая квадротерапия) 14 дней. HFrEF — ступенчатая схема → четыре группы параллельно, SGLT2 в первой линии. Норма FHR — częstości akcji serca płodu (ЧСС плода) 110–150 → 110–160 (FIGO 2015). Badania przesiewowe (скрининги): mammografia (маммография) 50–69 → 45–74 года; cytologia (цитология) каждые 3 года, 25–59 лет → test HPV HR раз в 5 лет, 25–64 года.",
                        focus: "В новых вопросах CEM устаревший пункт книги — неверный вариант; в старых вопросах банка ключ может быть по книге. На экзамене — актуальный ответ; книжный только если вопрос прямо называет старую редакцию (правило экзамена «старое или новое» — sym2-cel-1)."
                    },
                    {
                        title: "Najczęściej… (самые частые…)",
                        what: "Короткие утверждения «najczęstsza przyczyna / lokalizacja / powikłanie» (самая частая причина / локализация / осложнение), которые CEM задаёт почти дословно.",
                        where: "LEK w pigułce, rozdz. 14 «Najczęściej…».",
                        study: "Powikłanie anginy (осложнение ангины) — naciek i ropień okołomigdałkowy (паратонзиллярный инфильтрат и абсцесс). Przyczyna ostrego zapalenia gardła (причина острого фарингита) — wirusy (вирусы). Przepuklina rozworu przełykowego (грыжа пищеводного отверстия диафрагмы) — чаще wślizgowa (скользящая). Gruźlica pozapłucna (внелёгочный туберкулёз) — чаще opłucnowa (плевральный). Возбудитель PZP (внебольничной пневмонии) — S. pneumoniae. Przyczyna zaostrzenia POChP (причина обострения ХОБЛ) — infekcja (инфекция). Przepuklina pachwinowa (паховая грыжа) у мужчин — skośna (косая). GIST — чаще в żołądku (желудке). Uraz narządu miąższowego (повреждение паренхиматозного органа) — śledziona (селезёнка). Uchyłki (дивертикулы) — esica (сигмовидная кишка). Niedrożność mechaniczna (механическая непроходимость) — jelito cienkie (тонкая кишка) (zrosty — спайки); niedrożność jelita grubego (непроходимость толстой кишки) — rak (рак). Проработать главу целиком и отметить пункты, по которым были ошибки.",
                        focus: "В книге «najczęstszy rak płuca — płaskonabłonkowy»: так долго было в Польше, особенно у мужчин. По данным последних лет доля gruczolakoraka (аденокарциномы) выросла, у женщин она первая, и в целом разрыв между типами небольшой. Вопрос «najczęstszy» без указания пола спорен: по актуальным данным выбрать gruczolakorak (аденокарциному), но помнить, что ключ старых вопросов — rak płaskonabłonkowy (плоскоклеточный)."
                    }
                ]
            },
            {
                title: "Сб: Мини-симуляция 80 вопросов за 2 ч",
                id: "mini-sym",
                time: "2 ч",
                lepolekPath: "Testy -> Test własny: 80 pytań CEM (po 20 z 4 dziedzin)",
                popup: { what: "Половина экзамена в режиме симуляции: 80 вопросов, 20 из каждого раздела, 120 мин.", focus: "Проверка темпа без полной усталости: 80 вопросов за 100 мин первого прохода, 20 мин на отмеченные.", reading: "Ничего нового." },
                subtopics: [
                    {
                        title: "Minisymulacja 80 pytań (мини-симуляция)",
                        what: "80 вопросов, 120 мин, режим экзамена.",
                        where: "LEPOLEK -> Testy.",
                        study: "Контрольные точки: 40 — 50 мин, 80 — 100 мин, затем 20 мин на отмеченные. Бланк с уверенностью P / 2 / Z.",
                        focus: "Разбор в 2 ч не входит: ошибки мини-симуляции разбираются в первые 20 мин final-cel."
                    },
                    {
                        title: "Wynik w działach (подсчёт по разделам)",
                        what: "Процент на 20 вопросах каждого раздела.",
                        where: "Протокол мини-симуляции.",
                        study: "1 вопрос = 5 п. п.; цель ≥14/20 (70%). 20 вопросов раздела шумят на ±10 п. п., поэтому отдельного решения по ним не принимают: результат добавить к сумме тестов раздела после rep-1 (теперь 100–160 вопросов).",
                        focus: "Раздел, отмеченный во вторник как нестабильный, получает Пн финальной недели целиком, если и по обновлённой сумме он ниже 70%."
                    },
                    {
                        title: "Lista na ostatni tydzień (список для финальной недели)",
                        what: "Окончательный список записей тетради для final-cel.",
                        where: "Тетрадь ошибок (записи с двумя звёздочками) + ошибки мини-симуляции.",
                        study: "Не больше 60–80 записей: всё, что сверх, — архив. Начать одну страницу «ключевые факты» для final-przed: 15–20 чисел и пар «состояние — препарат», в которых ошибался чаще всего.",
                        focus: "Финальный список составляется сегодня, чтобы в понедельник не тратить время на выбор."
                    }
                ]
            }
        ]
    },
    {
        key: "final",
        subject: "powtorka",
        title: "Финальная неделя — без нового материала",
        days: [
            {
                title: "Пн: Последнее целевое повторение по тетради ошибок",
                id: "final-cel",
                time: "2.5 ч",
                lepolekPath: "Lepolek -> Zeszyt błędów / Ulubione (pytania oznaczone gwiazdką)",
                popup: { what: "Последний проход по списку тетради ошибок, составленному в субботу.", focus: "Без нового материала: никаких новых глав, rekomendacji (рекомендаций) и тем, даже если попалась незнакомая.", reading: "Только тетрадь ошибок и страница ключевых фактов." },
                subtopics: [
                    {
                        title: "Przegląd listy (проход по списку)",
                        what: "60–80 записей со звёздочками, по 1–2 мин на запись.",
                        where: "Тетрадь ошибок.",
                        study: "Закрыть ответ → ответить вслух → проверить → отметить «знаю / не знаю». Записи «не знаю» — второй круг в конце дня.",
                        focus: "Если запись не запоминается с третьего раза — переписать её короче (одно число или одна пара), а не читать главу."
                    },
                    {
                        title: "Ponowne rozwiązanie błędnych pytań (повторное решение ошибочных вопросов)",
                        what: "30–40 вопросов, в которых была ошибка на симуляциях.",
                        where: "LEPOLEK -> Zeszyt błędów.",
                        study: "Решать без подсказки; ошибка во второй раз — запись в страницу ключевых фактов.",
                        focus: "Ответ «помню, что там было C» не считается: нужно назвать причину."
                    },
                    {
                        title: "Strona kluczowych faktów (страница ключевых фактов)",
                        what: "Одна страница A4 для просмотра в пятницу.",
                        where: "Собственный конспект.",
                        study: "15–20 пунктов: числа, пороги, пары «stan — lek» (состояние — препарат) и «старое — новое», в которых ошибался чаще всего. Без объяснений, только факт.",
                        focus: "Страница, которая не помещается на A4, — уже не страница ключевых фактов."
                    },
                    {
                        title: "Lista kontrolna czytania (чек-лист чтения)",
                        what: "Итог по ошибкам N — не больше 5 правил.",
                        where: "Тетрадь ошибок, раздел N.",
                        study: "Пример: 1) прочитать последнее предложение вопроса до условия; 2) обвести «nie», «fałszywe», «z wyjątkiem»; 3) проверить единицы; 4) в вопросе «najbardziej prawdopodobne» выбрать самое частое, а не самое опасное; 5) в «w pierwszej kolejności» — действие, а не диагностику, если есть угроза жизни.",
                        focus: "Чек-лист перечитывается перед экзаменом один раз, а не заучивается."
                    }
                ]
            },
            {
                title: "Вт: Язык вопросов CEM и тактика ответа (język pytań, taktyka)",
                id: "final-jezyk",
                time: "2 ч",
                lepolekPath: "Baza Pytań -> wszystkie dziedziny -> pytania typu «wskaż fałszywe» / «z wyjątkiem» (30 pytań)",
                popup: { what: "Польские формулировки вопросов CEM, ложные друзья переводчика, тактика длинных клинических задач и распределение 160 вопросов на 4 ч.", focus: "Ошибки из-за формулировки — это баллы, которые не требуют новых знаний.", reading: "Глоссарий PL→RU из тетради ошибок; LEK w pigułce, rozdz. 1 «O egzaminie»." },
                subtopics: [
                    {
                        title: "Typy pytań CEM (формулировки вопроса)",
                        what: "Конструкции, меняющие смысл вопроса.",
                        where: "Вопросы LEPOLEK с этими формулировками.",
                        study: "«Wskaż zdanie fałszywe / nieprawdziwe» — ищется неверное утверждение. «…z wyjątkiem» — все варианты верны, кроме одного. «Wszystkie wymienione» — вариант «все перечисленные» верен, только если верен каждый пункт. «Najbardziej prawdopodobne rozpoznanie» — самый вероятный, а не самый опасный диагноз. «Postępowaniem z wyboru jest» — стандартное лечение первой линии. «W pierwszej kolejności należy» — первое действие по очерёдности. «Przeciwwskazaniem bezwzględnym jest» — абсолютное, а не относительное. Комбинированные ответы «Prawidłowe są: 1, 3, 4» — сначала исключить вариант с явно ложным пунктом.",
                        focus: "Решить 30 вопросов только этих типов; перед выбором ответа проговорить про себя: «ищу ложное» или «ищу первое действие»."
                    },
                    {
                        title: "Fałszywi przyjaciele tłumacza (ложные друзья переводчика)",
                        what: "Польские медицинские слова, которые русскоязычный читатель понимает неверно.",
                        where: "Глоссарий PL→RU; Szczeklik (terminologia).",
                        study: "Udar — инсульт (не «удар»). Zawał — инфаркт. Porażenie — паралич/парез (не «поражение»); поражение, очаг — zmiana. Objaw — симптом или признак (не «объявление»). Rozpoznanie — диагноз. Wskazanie — показание. Rzut — обострение/атака болезни (например, rzut SM, rzut WZJG). Nawrót — рецидив. Przerzut — метастаз. Guz — опухоль или образование. Dna moczanowa — подагра. Staw — сустав. Nerka — почка. Wole — зоб. Róża — рожа, а różyczka — краснуха; odra — корь; płonica — скарлатина; ospa wietrzna — ветряная оспа; półpasiec — опоясывающий лишай; krztusiec — коклюш; świnka — эпидемический паротит. Zapalenie — воспаление. Niedomykalność — недостаточность клапана (регургитация), zwężenie — стеноз. Stolec — стул, кал.",
                        focus: "«Porażenie» против «zmiana» и «róża» против «różyczka» — чаще всего дают ошибки J в клинических задачах."
                    },
                    {
                        title: "Długie przypadki kliniczne (тактика длинных клинических задач)",
                        what: "Как читать задачу из 6–10 предложений за ≤1,5 мин.",
                        where: "Длинные вопросы LEPOLEK.",
                        study: "1) Сначала последнее предложение — что спрашивают. 2) Затем варианты ответа — какой выбор нужно сделать (rozpoznanie — диагноз, leczenie — лечение, badanie — обследование). 3) Затем условие: подчеркнуть возраст, пол, срок, длительность симптомов и одно-два ключевых числа (wyniki laboratoryjne — лабораторные значения, ciśnienie tętnicze — АД). 4) Лишние детали не анализировать: если ответ уже ясен по ключевым данным — выбрать и идти дальше.",
                        focus: "Не решать задачу «с нуля» по условию: сначала варианты, потом проверка каждого по ключевым данным."
                    },
                    {
                        title: "Rozkład czasu: 160 pytań / 4 h (распределение времени)",
                        what: "Итоговый план времени, проверенный на трёх симуляциях.",
                        where: "Протоколы №1–№3.",
                        study: "Среднее 1,5 мин на вопрос. План: первый проход ~200 мин (контрольные точки 40 — 50 мин, 80 — 100, 120 — 150, 160 — 200), второй проход по отметкам ~30 мин, проверка пустых ответов ~10 мин. Вопрос без ответа за 2 мин — лучший вариант + отметка.",
                        focus: "Скорректировать контрольные точки под свою статистику: если на симуляциях первый проход стабильно занимал 210 мин, план должен это учитывать."
                    },
                    {
                        title: "Wybór przy wątpliwości (работа с сомнением)",
                        what: "Правила выбора ответа, когда остаются два варианта.",
                        where: "Статистика исправлений из протоколов.",
                        study: "Из двух вариантов «старый — новый» выбрать ответ по актуальной rekomendacji (рекомендации) или польской программе; старый — только если вопрос прямо называет старую skalę (шкалу) или редакцию (правило экзамена «старое или новое» — sym2-cel-1); ответ с абсолютными словами («zawsze», «nigdy») чаще неверен; из двух верных утверждений в вопросе «najbardziej» — более конкретное для данной клиники.",
                        focus: "Менять первый ответ, когда есть конкретная причина (вспомнил факт, нашёл ошибку чтения, другой вопрос подсказал ответ); не менять «по ощущению» — особенно если на трёх симуляциях такие исправления чаще портили ответ."
                    }
                ]
            },
            {
                title: "Ср: Лёгкий день — только тетрадь ошибок и Anki",
                id: "final-lekki",
                time: "1.5 ч",
                lepolekPath: "Lepolek -> Zeszyt błędów (przegląd bez nowych pytań)",
                popup: { what: "Короткое закрепление: Anki и тетрадь ошибок, без тестов и новых вопросов.", focus: "Восстановление: к экзамену нужна свежая голова, а не ещё 100 решённых вопросов.", reading: "Тетрадь ошибок, страница ключевых фактов." },
                subtopics: [
                    {
                        title: "Powtórka Anki (Anki)",
                        what: "Ежедневная очередь карточек, без новых.",
                        where: "Anki.",
                        study: "Только плановая очередь; новые карточки не добавлять.",
                        focus: "Если очередь больше 60 мин — пройти только карточки с пометкой тетради ошибок."
                    },
                    {
                        title: "Zeszyt błędów, drugie przejście (тетрадь ошибок — второй круг)",
                        what: "Записи, отмеченные в понедельник как «не знаю».",
                        where: "Тетрадь ошибок.",
                        study: "Закрыть ответ → ответить → проверить. Записи, которые снова не вспомнились, — на страницу ключевых фактов.",
                        focus: "Никакого чтения учебников."
                    },
                    {
                        title: "Odpoczynek (отдых)",
                        what: "Остаток дня без учёбы.",
                        where: "—",
                        study: "Прогулка или физическая нагрузка, обычное время сна.",
                        focus: "Сдвигать режим сна к времени экзамена начинают сегодня, если экзамен утром, а привычный подъём поздний."
                    }
                ]
            },
            {
                title: "Чт: Организация экзамена — документы, дорога, правила, сон",
                id: "final-organizacja",
                time: "1 ч",
                lepolekPath: "—",
                popup: { what: "Проверка всего, что не относится к знаниям, но может сорвать экзамен.", focus: "Всё подготовить за два дня, чтобы накануне ничего не искать.", reading: "Регламент экзамена и письмо-приглашение от UZ (Uniwersytet Zielonogórski)." },
                subtopics: [
                    {
                        title: "Dokumenty (документы)",
                        what: "Что нужно предъявить при входе.",
                        where: "Письмо-приглашение и регламент UZ; решение о допуске к нострификации.",
                        study: "Паспорт или другой документ с фотографией, указанный в приглашении; подтверждение регистрации на экзамен; подтверждение оплаты, если его требуют; номер дела нострификации. Сделать копии и фото документов.",
                        focus: "Перечень документов брать только из официального письма UZ — требования разных вузов различаются."
                    },
                    {
                        title: "Dojazd (дорога и время)",
                        what: "Маршрут до корпуса и зала.",
                        where: "Адрес из приглашения.",
                        study: "Маршрут, время в пути с запасом не меньше 45–60 мин; если экзамен в другом городе — ночёвка рядом с местом экзамена накануне. Найти вход, зал, парковку или остановку заранее (по карте или лично).",
                        focus: "Запас времени рассчитывать на опоздание транспорта, а не на идеальную дорогу."
                    },
                    {
                        title: "Zasady na sali (правила зала и что взять)",
                        what: "Разрешённые и запрещённые предметы.",
                        where: "Регламент экзамена UZ.",
                        study: "Уточнить: разрешены ли часы, вода, еда, leki (лекарства); формат ответов (компьютер или бумажная карта, какой ручкой заполнять); порядок выхода в туалет; что делать с телефоном. Взять: документы, 2 ручки нужного цвета, воду, лёгкий перекус, если разрешён, тёплую одежду слоями, необходимые leki (лекарства).",
                        focus: "Любое электронное устройство в зале, даже выключенное, может стать причиной аннулирования — уточнить правило заранее."
                    },
                    {
                        title: "Sen przed egzaminem (режим сна)",
                        what: "Сон двух последних ночей.",
                        where: "—",
                        study: "Две ночи подряд лечь и встать в то время, которое нужно в день экзамена; 7–8 ч сна; кофеин не позже раннего дня; без алкоголя.",
                        focus: "Одна плохая ночь перед экзаменом мало влияет на результат, если предыдущие были нормальными: не паниковать, если не спится."
                    }
                ]
            },
            {
                title: "Пт: День перед экзаменом — без учёбы",
                id: "final-przed",
                time: "0.5 ч",
                lepolekPath: "—",
                popup: { what: "Короткий просмотр страницы ключевых фактов и отдых.", focus: "Никаких тестов и новых вопросов: ошибка накануне экзамена снижает уверенность и ничего не добавляет к знаниям.", reading: "Только страница ключевых фактов." },
                subtopics: [
                    {
                        title: "Przegląd strony faktów (страница ключевых фактов)",
                        what: "Один просмотр страницы A4, составленной в понедельник.",
                        where: "Страница ключевых фактов.",
                        study: "15–20 мин, один раз. Чек-лист чтения — один раз.",
                        focus: "Не дополнять страницу."
                    },
                    {
                        title: "Przygotowanie rzeczy (сборы)",
                        what: "Документы и вещи по списку четверга.",
                        where: "Список четверга.",
                        study: "Сумка собрана вечером; будильник на два устройства; маршрут проверен.",
                        focus: "Утро экзамена не должно содержать ни одного решения, кроме завтрака."
                    },
                    {
                        title: "Odpoczynek (отдых)",
                        what: "Остаток дня без медицины.",
                        where: "—",
                        study: "Прогулка, лёгкая еда, обычное время сна.",
                        focus: "Не обсуждать экзамен в чатах и форумах накануне."
                    }
                ]
            },
            {
                title: "Сб: Экзамен (или резервный день, если дата экзамена другая)",
                id: "final-egzamin",
                time: "4 ч",
                lepolekPath: "—",
                popup: { what: "Нострификационный экзамен: 160 вопросов за 4 ч, 4 раздела. Если экзамен в другой день — сегодня резервный день: мини-симуляция 80 вопросов или отдых.", focus: "Работать по плану, проверенному на трёх симуляциях: два прохода, контрольные точки, ни одного пустого ответа.", reading: "—" },
                subtopics: [
                    {
                        title: "Egzamin (экзамен)",
                        what: "160 вопросов, 4 ч.",
                        where: "Зал экзамена UZ.",
                        study: "Первый проход ~200 мин с отметками, второй ~30 мин, проверка пустых ответов ~10 мин. На бумажной карте — переносить ответы блоками по 40, а не в конце.",
                        focus: "Трудный вопрос в начале не говорит о трудности всего экзамена: отметить и идти дальше."
                    },
                    {
                        title: "Dzień rezerwowy (если экзамен в другой день)",
                        what: "Что делать, если дата экзамена не совпала с планом.",
                        where: "Тетрадь ошибок, LEPOLEK.",
                        study: "Экзамен через ≥7 дней: мини-симуляция 80 вопросов + разбор, дальше повторить дни final-cel — final-przed, сдвинув их к дате экзамена. Экзамен через 1–6 дней: только тетрадь ошибок и Anki, как в final-lekki.",
                        focus: "Дополнительные дни не превращать в новый материал."
                    },
                    {
                        title: "Po egzaminie (после экзамена)",
                        what: "Короткая запись для себя.",
                        where: "Тетрадь.",
                        study: "Записать темы, которые попались и вызвали сомнения, пока помнишь, — пригодится при пересдаче или для других кандидатов.",
                        focus: "Не проверять ответы по учебникам в тот же вечер."
                    }
                ]
            }
        ]
    }
]);
