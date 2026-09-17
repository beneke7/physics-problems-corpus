---
id: kevin-zhou-notes-phy-ex039
source: kevin-zhou-notes
native_id: "phy Example 039"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex039
topic: [statisztikus-mechanika]
subtopic: [termodinamika, dipólusok, entrópia és információ]
math_tools: [termodinamikai-potenciálok, Maxwell-relációk, információelmélet]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3459-3602"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Elektromos dipólusok munkája. Az előző szakaszban azt állítottuk, hogy egy elektromos dipólus munkájának növekménye
                                         dUdip = E · dp
ami közvetlenül megfelel a dipólus megnyújtásakor végzett F dx munkának. A dipólus térben lévő potenciális energiáját is hozzászámíthatjuk:
                              Upot = −p · E,   dUpot = −p · dE − E · dp
ezzel az elektromos tér energiájának egy része is bekerül. Attól függően, hogy ezt a dipólus „belső” energiájának tekintjük-e, eltérő konvenciókat használnak, mivel az elektromos terek nem lokalizálódnak a dipólusra. Ha beleszámítjuk, akkor
                                  dUtot = d(Udip + Upot ) = −p · dE
és a mágneses dipólusokra hasonlóan dUtot = −m · dB adódik. Végső soron ez pusztán konvenció kérdése, a megfigyelhető mennyiségek mindig megegyeznek. Például az „belső energiához”, Udip -hez tartozó Maxwell-relációk ugyanazok, mint az Utot + p · E „szabadenergiájához” tartozó Maxwell-relációk. A konvenció megváltoztatásával csak azt cseréljük fel, hogy mit nevezünk belső energiának és mit szabadenergiának; a tényleges eredmények változatlanok maradnak.
Megjegyzés. A gyakorlatban a mágnesek és a gázok közötti fő különbség az, hogy m a hőmérséklettel csökken, míg p nő; ezért a mágneseket magukban foglaló, (m, B) térben végbemenő körfolyamatok a gázok analóg körfolyamataival ellentétes irányban futnak.
Megjegyzés. Kémiai reakciók. Több reakció esetén az energia egy
                                                                            P
i µi dNi járulékot tartalmaz. Tekintsünk most egy elszigetelt rendszert, amelyben valamely részecskének nincs megmaradási törvénye; ekkor e részecske Ni mennyisége a szabadenergia minimalizálásával alakul ki, ami µ = 0-t ad. Ez a helyzet a legtöbb esetben a fotonoknál. Általánosabban, ha kémiai reakciók mehetnek végbe, akkor a szabadenergia minimalizálása azt jelenti, hogy a kémiai potenciálok a reakció két oldalán kiegyenlítik egymást.
   Példaként tekintsük az n A ↔ m B reakciót. Egyensúlyban nµA = mµB . Ha viszont az A és B részecskefajták térben egyenletesen oszlanak el, akkor
                                                      N
                                      µi = kB T log     + const.
                                                      V
Ha [A] és [B] az A, illetve B koncentrációját jelöli, akkor a tömeghatás törvényét kapjuk:
                                           [A]n
                                                = K(T )
                                           [B]m
ami nyilvánvaló módon általánosítható összetettebb reakciókra is. (Bevezető kémiaórákon a tömeghatás törvényét gyakran azzal indokolják, hogy n A-molekula találkozásának valószínűsége [A]n-nel arányos, de ez nem jó érv, mert a valódi reakciók több lépésben mennek végbe. Például két A-molekula instabil közbenső termékké egyesülhet, amely ezután egy harmadik A-molekulával reagál, és így tovább.)
66 3. Statisztikus mechanika


Megjegyzés. A Clausius–Clapeyron-egyenlet. Fázisátalakuláskor a két fázis kémiai potenciálja (részecskénként) egyenlő. Tekintsük a (p, T ) síkban egy együttlétezési görbe két közeli pontját. Ha ezeket egy i fázishoz tartozó tartományban haladó úttal kötjük össze, akkor
                                       ∆µi = −si dT + vi dP
ahol a µ = G/N összefüggést használtuk, si és vi pedig az entrópia, illetve a térfogat és az összes részecskeszám N hányadosa. Mivel ∆µ1 = ∆µ2 kell legyen,
                                   dP   s2 − s1        L
                                      =         =              .
                                   dT   v2 − v1   T (V2 − V1 )
Ez levezethető úgy is, hogy megköveteljük: egy fázisátalakuláson végighaladó hőerőgép ne sértse meg a második főtételt.
Megjegyzés. Betekintés a Legendre-transzformációba. Egy F (x) függvény Legendre-transzformációja az a G(s) függvény, amelyre
                                                             dF
                                    G(s) + F (x) = sx, s =
                                                             dx
teljesül; ebből megmutatható, hogy x = dG/ds. A fenti egyenlet szimmetriája világossá teszi, hogy a Legendre-transzformáció a saját inverze. Továbbá a Legendre-transzformációhoz döntően szükséges, hogy F (x) konvex legyen, hogy az s(x) függvény egyértékű legyen. Akkor hasznos, amikor s-t könnyebb szabályozni vagy mérni, mint x-et.
   A termodinamikában használt Legendre-transzformációkhoz azonban mintha további mínuszjelek társulnának. Ennek oka, hogy az alapvető mennyiség nem az energia, hanem az entrópia. Konkrétan
                                                        ∂S          ∂F
                            F (β) + S(E) = βE,     β=      ,      E=      .
                                                        ∂E          ∂β
Vagyis β és E a konjugált változók, nem pedig T és S! Erre a partíciós függvény definíciója is utal:
                         Z
                 Z(β) = Ω(E)e−βE dE, F (β) = − log Z(β), S(E) = log Ω(E)
amelyből a nyeregpont-közelítéssel visszakapjuk a fenti eredményt.

3.3   Entrópia és információ
Ebben a szakaszban közelebbről vizsgáljuk az entrópiát, és egyesítjük a fenti két definíciót.

 • A termodinamikában az entrópiára dS = d̄Q/T teljesül. Ezzel ekvivalens, hogy egy folyamat megőrzi az entrópiát, ha reverzibilis, a rendszer mindvégig egyensúlyban van, és minden energiaátadás makroszkopikusan megfigyelhető mennyiségeken keresztül történik. A statisztikus mechanikában az entrópia az e makroszkopikus mennyiségek által meghatározott makroállapothoz tartozó fázistérfogatot számszerűsíti.

 • Ezt a két elképzelést az adiabatikus tétel egyesíti. A termodinamikai entrópiamegőrző folyamat egy lassan változó Hamilton-operátornak felel meg, amely teljesíti az adiabatikus tétel feltételeit; ez közvetlenül a fázistérfogat megmaradásához vezet. Ugyanez az elképzelés érvényes a kvantum-statisztikus mechanikában is, ahol az entrópia a lehetséges állapotok számát méri, amelyet a kvantumos adiabatikus tétel megőriz.

 • A termodinamika általános eredményei nem változnak számottevően, ha a mikroszkopikus fizika megváltozik. (A gőzgépek például nem szűntek meg működni a kvantummechanika felfedezésekor!) Tegyük fel például, hogy kiderül: egy gáz mágnesezhető. Ha ezután a mágnesezettséget felvesszük a termodinamikai változók közé, akkor megváltozik a munka, a szabadenergia, az entrópia és más mennyiségek számszerű értéke.
67 3. Statisztikus mechanika


 • Ez azonban nem érvényteleníti az e változó nélkül levezetett eredményeket. A munka azt méri, mennyi energiát kap egy rendszer makroszkopikusan mérhető módokon. Az entrópia azt méri, hány állapotban lehet a rendszer a makroszkopikusan mért változók ismeretében. A szabadenergia azt méri, mekkora munkát nyerhetünk ki a rendszerből ugyanezen változók ismeretében. (Ha minden változót figyelembe veszünk, a szabadenergia egyszerűen a mikroszkopikus Hamilton-operátorrá válik.) Mindezek jogosan változhatnak, ha több mennyiség válik mérhetővé.

 • Az entrópiára egy modernebb, egyesítő nézőpont szerint a rendszerállapottal kapcsolatos szubjektív tudatlanságunk mértékeként tekintünk. Amint fentebb a kanonikus sokaságnál láttuk,
                                                X
                                       S = −kB      pn log pn .
                                                       n
    Ez arányos a −⟨log2 pn ⟩ mennyiséggel, vagyis azzal a bitekben mért információmennyiséggel, amelyet átlagosan megkapunk, amikor megtudjuk az n állapotot. Ezzel definiálhatjuk a nem egyensúlyi rendszerek entrópiáját.

 • Hamilton-mechanikai összefüggésben az entrópia a −ρ log ρ fázistérbeli integráljává válik. Liouville tétele miatt az entrópia így megmarad. Amint korábban említettük, a gyakorlatban az eloszlás egyre finomabban rétegződik, ezért az időfejlődés durvaszemcsézéssel együtt növeli az entrópiát.

 • Információelméleti összefüggésben a Shannon-féle információ, −⟨log2 pn ⟩, az üzenet egy szimbólumára jutó, átlagos bitmennyiség, amely egy üzenet továbbításához szükséges, ha az üzenet szimbólumai függetlenek és pn valószínűséggel fordulnak elő.

 • Általánosabban a Shannon-féle információ a tudatlanság egyetlen mértéke, abban az értelemben, hogy a {pn } egyetlen olyan függvénye, amely teljesíti a következő ésszerű feltételeket.

      1. S({pn }) akkor maximális, amikor a pn értékek mind egyenlők.
      2. S({pn }) nem változik, ha nulla valószínűségű kimeneteleket adunk hozzá.
      3. Tekintsük az n lehetőségek tetszőleges A(n) függvényét, amelynek lehetséges értékei a pAm eloszlással rendelkeznek.
         Az S értékének A értékének megtanulásakor bekövetkező várható csökkenése legyen egyenlő az S({pAm }) mennyiséggel.
         (Ez magában foglalja, hogy nem kölcsönható alrendszerek esetén az entrópia kiterjedt mennyiség.)

 • Ezt az érvelést tovább folytatva a statisztikus mechanika némileg radikális újrafogalmazásához jutunk, amelyet Jaynes népszerűsített. Ebben a képben az egyensúlyi eloszlások nem dinamikájuk miatt maximalizálják az entrópiát, hanem azért, mert ez a legkevésbé információt tartalmazó becslés arról, mit csinál a rendszer. Szerintem ez túlságosan eltávolodik a fizikától ahhoz, hogy valóban hasznos gondolkodásmód legyen, de érdekes elképzelés.
