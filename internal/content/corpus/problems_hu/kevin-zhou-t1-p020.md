---
id: "kevin-zhou-t1-p020"
source: "kevin-zhou"
native_id: "KZ-T1-P020"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t1-p020"
topic: [termodinamika és statisztikus fizika, kvantumfizika]
subtopic: [paramágnesség, statisztikus-mechanika, Curie-törvény]
math_tools: [valószínűségszámítás és statisztika, algebra]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T1.txt"
source_url: "sources/kevin_zhou/site/handouts/T1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T1-P020

[3] 20. feladat. A paramágnesség modellezéséhez tekintsünk N független mágneses dipólust Bz
    függőleges mágneses térben és T hőmérsékleten. Minden dipólusnak két lehetséges kvantumállapota
    van, fel- és lefelé mutató spinnel, energiájuk pedig −µz Bz, ahol µz = ±eℏ/2m.

     (a) Legyen M a teljes mágneses momentum nagysága. Határozzuk meg M-et T függvényében.

     (b) Mutassuk meg, hogy nagy T esetén M ∝ 1/T. Ezt Curie-törvénynek nevezzük.

       Megjegyzés
       Elvben a statisztikus mechanikával kapcsolatos összes eredményünk levezethető a mikroszkopikus
       dinamika követésével, például egy gáz atomjainak egymással való ütközései alapján. Ezt a
       gyakorlatban azonban nagyon nehéz megtenni.

       Egyszerű esetekben azonban így is szerezhetünk némi betekintést. Tekintsünk például
       egy egyenletes gravitációs térben lévő, egydimenziós ideális gázt, amelynek energiája
       E = p2 /2m + mgh. Mivel a mozgási energia kvadratikus, a potenciális energia pedig lineáris
       szabadsági fok, az átlagos potenciális energiának kétszer akkorának kell lennie, mint az
       átlagos mozgási energiának. Továbbá ennek igaznak kell lennie függetlenül attól, milyen
       ritkák az ütközések; a ritkább ütközések csak azt jelentik, hogy hosszabb idő kell a termikus
       egyensúly eléréséhez, magát az egyensúlyt nem változtatják meg.

       Ebből az a konkrét, klasszikus mechanikai jóslat következik, hogy egy talajon rugalmasan
       pattogó, egyáltalán nem ütköző tömeg átlagos potenciális energiája kétszerese lesz átlagos
       mozgási energiájának; ezt közvetlenül Newton törvényeiből is igazolhatjuk.

       Íme egy finomabb rejtvény. Az izoterm légkör elemzésekor azt találtuk, hogy a sebességek
       eloszlása mindenütt azonos. Ha azonban egyetlen részecskét követünk, az lefelé esve
       nyilvánvalóan felgyorsul. Hogyan egyeztethető ez össze? Nem vezetne ez az alacsonyabb
       magasságokban a hőmérséklet növekedéséhez?

       Ismét a legegyszerűbb egy nagyon ritka gáz határesetében gondolkodni, ahol az ütközések
       ritkák. Valóban, minden, a légkör tetején kezdő részecske sokat gyorsul, miközben lefelé esik.
       De miért vannak egyáltalán részecskék a tetején? Mert a légkör jóval sűrűbb alján a részecskék
       ütközések során időnként sok energiára tesznek szert, ami a magasba repíti őket. Egyensúlyban
       a lefelé haladó részecskék szokatlanul nagy sebességgel érkeznek az aljára, de ezt kiegyenlítik
       a másik irányba haladó, szokatlanul gyors részecskék. A részletek nyomon követése meglehetősen
       összetett lehet, különösen gyakori ütközések esetén, de a Boltzmann-eloszlás csodával határos
       módon mindent elintéz helyettünk!




                                                       13
    Kevin Zhou                                                               Fizikaolimpiai feladatgyűjtemény


    4    Kinetikus gázelmélet
        7. ötlet
        A kinetikus gázelmélet a statisztikus mechanika azon ága, amely a gáz egyes molekuláinak
        mozgására összpontosít. Matematikailag meglehetősen összetett lehet, mivel figyelembe kell
        venni a molekulák ütközéseinek hatásait; ezért ezt a tárgyat általában csak a felsőoktatás
        későbbi szintjein tanítják. Egyszerű helyzetekben azonban az ütközések elhanyagolhatók,
        így a molekulák lényegében függetlenné válnak.

        7. példa: Az ideális gáz törvénye

        Vezessük le az ideális gáz törvényét a kinetikus gázelmélet segítségével.

        Megoldás
        Az általánosság csorbítása nélkül tekintsünk egy L oldalhosszúságú, köbös gáztartályt N
        gázmolekulával. Vizsgáljuk az yz síkkal párhuzamos falra kifejtett nyomást. Egy adott
        gázmolekula 2L/vx periódussal ütközik ezzel a fallal, és 2px lendületet ad át neki. A falra
        ható nyomás ezért
                                                 F     1 N ⟨px vx ⟩
                                           P =     = 2              .
                                                 A    L      L
        Ez felírható a következő alakban:
                                    N            N ⟨p · v⟩   N            N kB T
                              P =     ⟨px vx ⟩ =           =    ⟨mv 2 ⟩ =
                                    V            V   3       3V             V
        ahol felhasználtuk a forgásszimmetriát és az ekvipartíció tételét.

        Természetesen ez a számítás azért volt elvégezhető, mert elhanyagoltuk a különböző
        gázmolekulák közötti kölcsönhatásokat. Ez azonban nem annyira fontos, mint gondolnánk.
        Feltettük, hogy a molekulák ütközés nélkül áthaladhatnak az egész tartályon, de ha mégis
        ütköznek, a levezetés lényegében akkor is működik, mert lendületüket egyszerűen átadják
        egy másik molekulának. Amíg a molekulák idejük nagy részében szabadon mozognak, a fenti
        eredmény közelítőleg helyes.

        A T2-ben látni fogjuk, hogyan csökkenti a vonzó kölcsönhatás a nyomást. A T3-ban pedig
        azt látjuk majd, hogy amikor a gáz nagyon sűrűvé válik, ez drámai hatáshoz vezet: a gáz
        folyadékká kondenzálódik.
