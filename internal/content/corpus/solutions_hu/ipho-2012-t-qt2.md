---
id: "ipho-2012-t-qt2"
problem: "ipho-2012-t-qt2"
source: "ipho"
language: "hu"
solution_language: "hu"
solution_type: "official"
source_pdf: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf"
figure_files: []
provenance_note: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf; Mathpix OCR"
verification_status: "pending"
---

## Megoldás 2

2.A.1. A feladat szövege szerint a víz lassan csöpög ki a csőből: ez időben állandósult vízhozamra utal, ezért a csőben lévő vízoszlopra ható erők eredője (a csó falánál és a folyadékban fellépő belső́ súrlódás miatt) zérus. A vízcseppben uralkodó nyomás a külső légnyomásnál a felületi feszültség miatt $\Delta p=2 \sigma / r$ értékkel nagyobb (itt $r$ a vízcsepp sugara). A cső végén függő, lassan hízó vízcseppre a következő négy erő hat: függőlegesen lefelé a $\frac{4}{3} \pi r^{3} \varrho g$ nehézségi erő, a cső szája és a víz érintkezési vonalán a felületi feszültségből származó $2 \pi r \sigma$ nagyságú, felfelé mutató erő, a $p_{0}$ külső légnyomásból származó (felfelé irányuló) erő és a vízcsepp csőhöz csatlakozó részén egy kis $d$ átmérőjü körlapon ható $p_{0}+\Delta p$ nyomásból származó, lefelé mutató erő. Könnyen belátható, hogy utóbbi két erő eredője $\frac{\pi}{4} d^{2} \Delta p$, ezt a $d$-ben másodrendúen kicsiny hatást $d \ll r$ miatt elhanyagolhatjuk.

Közvetlenül a leválás előtt a vízcsepp jelentősen deformálódik: a csepp felső része és a cső között kicsiny, $d$ átmérőjü, hengeres nyak képződik. Ebben a pillanatban a „nyak” által függőlegesen felfelé kifejtett $\pi d \sigma$ kapilláris erő éppen ellensúlyozza a vízcsepp súlyát, azaz
\[
\pi d \sigma=\frac{4}{3} \pi r_{\max }^{3} \varrho g
\]
innen a csepp maximális sugara:
\[
r_{\max }=\sqrt[3]{\frac{3 \sigma d}{4 \varrho g}} .
\]
2.A.2. A vízcsepp töltéseloszlása ( $d \ll r$ miatt) jó közelítéssel egyenletes, így a $\operatorname{csepp} \varphi$ potenciálja egy $Q$ töltésú gömb potenciáljaként számolható:
\[
\varphi=\frac{1}{4 \pi \varepsilon_{0}} \frac{Q}{r},
\]
ebból $Q=4 \pi \varepsilon_{0} \varphi r$.
2.A.3. A feltöltött gömbön kívül, felületének közelében $E=\frac{1}{4 \pi \varepsilon_{0}} \frac{Q}{r^{2}}$ nagyságú térerősség uralkodik, a gömbön belül pedig zérus az elektromos térerősség. A gömb felületén lévő, $\Delta A$ felszínú kicsiny darabka töltése az egyenletes töltéseloszlás miatt $\Delta Q=\frac{\Delta A}{4 \pi r^{2}} Q$, a rá ható erő pedig
\[
\Delta F=\frac{1}{2} E \Delta Q=\frac{Q^{2}}{32 \pi^{2} \varepsilon_{0} r^{4}} \Delta A=\frac{\varepsilon_{0} \varphi^{2}}{2 r^{2}} \Delta A .
\]
(Az $\frac{1}{2}$-es szorzótényező - kissé pongyolán fogalmazva - onnan származik, hogy a térerósség csak a darabka külső oldalán $E$, a belső oldalon zérus, így átlagosan $E / 2$ a darabka helyén a térerősség. Ugyanez a faktor jelenik meg egy síkkondenzátor lemezei között ható erő kifejezésében is.)

A vízcseppet a felületi feszültség igyekszik összehúzni, a felületén lévő, egymást taszító töltések pedig igyekeznek kitágítani. Az elektromos taszításból származó erő $\frac{\Delta F}{\Delta A}$ értékkel csökkenti a csepp belsejében uralkodó nyomást. A csepp akkor szakad szét, ha ez a „negatív” nyomás éppen megegyezik a görbületi nyomással:
\[
\frac{\varepsilon_{0} \varphi_{\max }^{2}}{2 r^{2}}=\frac{2 \sigma}{r},
\]
ebből a maximálisan alkalmazható potenciál $\varphi_{\text {max }}=2 \sqrt{\sigma r / \varepsilon_{0}}$.
Ezt az eredményt a virtuális munka elvével is megkaphatjuk. A még éppen egyensúlyban lévó cseppet gondolatban kissé megnöveljük, akkor a felületi erők által végzett munka $\mathrm{d} W_{1}=-\sigma\left[4 \pi(r+\mathrm{d} r)^{2}-4 \pi r^{2}\right]=-8 \pi \sigma r \mathrm{~d} r$ (negatív, hiszen a felületi energia megnövekedett). A cseppet gömbkondenzátornak képzelve, annak potenciálja állandó ugyan (a csepp a $\varphi_{\text {max }}$ feszültségú telephez van kötve), de a $C=4 \pi \varepsilon_{0} r$ kapacitása megnövekszik, azaz energiája növekszik. Tehát az elektrosztatikus munka $\mathrm{d} W_{2}=-\frac{1}{2} \varphi_{\text {max }}^{2} \mathrm{~d} C=-2 \pi \varepsilon_{0} \varphi_{\text {max }}^{2} \mathrm{~d} r$. Azonban nem szabad megfeledkezni a telep által végzett, pozitív munkáról. Mivel a „cseppkondenzátor" potenciálja állandó, kapacitása növekszik, akkor a töltése is növekszik.

Tehát az elektromos tér munkája $\mathrm{d} W_{3}=\varphi_{\text {max }} \mathrm{d} Q$, ami a 2.A.2. rész eredménye alapján $\mathrm{d} W_{3}=4 \pi \varepsilon_{0} \varphi_{\text {max }}^{2} \mathrm{~d} r$. Mivel egyensúlyi helyzetet vizsgálunk, a három munka előjeles összege nullát kell adjon (első rendben a sugár megnövelésekor a rendszer energiája összességében nem változik, mert egyensúlyban az energiának szélsőértéke van), amivel $\varphi_{\text {max }}$-ra a korábbival azonos eredményre jutunk.
2.B.1. Mivel a cseppek földelve vannak (potenciáljuk nulla), a környező, hengeres elektródák hatása miatt feltöltődnek. Vizsgáljuk meg a potenciál változását a következő, bal oldali csepptől a jobb oldali cseppig vezető útvonalon: a bal oldali csepptől a bal oldali hengeres elektródáig $U$ a potenciálkülönbség, a bal oldali és a jobb oldali elektróda között $q / C$ a feszültség (hiszen a kondenzátoron át kell haladnunk), végül a jobb oldali elektróda és a jobb oldali csepp között (a szimmetria miatt és a töltések előjele miatt) ismét $U$ a feszültség. Az útvonal kezdő- és végpontja egyaránt zérus potenciálú, tehát a feszültségek összegének is nullának kell lennie:
\[
U+q / C+U=0
\]
azaz az azonos oldalon elhelyezkedő hengeres elektróda és csepp között
\[
U= \pm q /(2 C)
\]
a feszültség (az előjel attól függ, hogy a jobb vagy bal oldalt vizsgáljuk). A 2.A.2. rész eredményét felhasználva, a $\varphi=q /(2 C)$ és $r=r_{\max }$ helyettesítéssel megkapjuk az éppen leeső cseppek töltését:
\[
Q_{0}=\frac{2 \pi \varepsilon_{0} q r_{\max }}{C} .
\]

Megjegyzés: A cseppek potenciálja nulla a földhöz képest, viszont a hengeres elektródához képest $U$, így ilyen értelemben tudjuk megadni a töltés nagyságát, mert az nem függ a potenciál nullszintjének megválasztásától.
2.B.2. Az egységnyi idő alatt lecseppenő cseppek száma $n$, így a hengeres elektródák (vagyis a kondenzátor) töltése $\mathrm{d} t$ idő alatt $\mathrm{d} q=Q n \mathrm{~d} t$ értékkel növekszik. Az előző alkérdés eredményét felhasználva ez tovább alakítható:
\[
\frac{\mathrm{d} q}{\mathrm{~d} t}=\frac{2 \pi \varepsilon_{0} r_{\max } n}{C} q,
\]
ami egy előjeltől eltekintve a radioaktív bomlás differenciálegyenletére hasonlít. A jobb oldalon eltérő előjel azt eredményezi, hogy a kondenzátor töltése a radioaktív atommagok számával ellentétben nem exponenciálisan csökken, hanem exponenciálian növekszik az idővel:
\[
q(t)=q_{0} e^{\gamma t}, \quad \text { ahol } \quad \gamma=\frac{2 \pi \varepsilon_{0} r_{\max } n}{C}=\frac{\pi \varepsilon_{0} n}{C} \sqrt[3]{\frac{6 \sigma d}{\rho g}} .
\]
2.B.3. A leesó cseppek akkor érhetik el az alattuk elhelyezkedő edényeket, ha az $m g H$ gravitációs helyzeti energiájuk elég nagy az elektrosztatikus taszítás
legyőzéséhez. Közvetlenül a leszakadás után a $Q$ töltésú csepp a hengeres elektróda által létrehozott $q /(2 C)$ potenciált érzi, amikor pedig az alatta lévő, vízzel telt edénybe érkezik, $-q /(2 C)$ potenciálú helyre kerül. Az edény elérésének feltétele tehát:
\[
\frac{q}{C} Q \leq m g H, \quad \text { ahol } \quad Q=\frac{2 \pi \varepsilon_{0} q r_{\max }}{C} .
\]
Ebből a kondenzátor $U_{C}=q / C$ feszültségének legnagyobb értéke:
\[
U_{C}^{\max }=\sqrt{\frac{m g H}{2 \pi \varepsilon_{0} r_{\max }}} .
\]
A 2.A.1. rész eredményét felhasználva a végeredmény:
\[
U_{C}^{\max }=\sqrt[6]{\frac{\sigma^{2} d^{2} H^{3} \rho g}{6 \varepsilon_{0}}} .
\]
