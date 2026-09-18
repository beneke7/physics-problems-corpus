---
id: eotvos-1998-curvature-variometer
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-1998-curvature-variometer
solution_type: official
source_document: solution-document-eotvos-1998-s
source_pdf: cache/phoxiv/eotvos/1998_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/1998_S.pdf."
---

1. Eötvös Loránd görbületi variométerében egy vékony torziós szálra középen felfüggesztett könny¶ rúd végein
két test helyezkedik el azonos magasságban. (l. az 1. ábrát.)
Eötvös megmérte e görbületi variométer torziós lengésidejét (kis kitérések esetén) a Gellért-hegy lábánál, egyszer
úgy, hogy a vízszintes rúd egyensúlyi helyzetében a hegy közepe felé mutatott, másszor úgy, hogy erre mer®leges
egyensúlyi helyzet körül lengett a rúd. Az els® esetben 564,6 se undumnak, a második esetben 572,2 se undumnak
találta a lengésid®t.
Tegyük fel, hogy a Gellért-hegy gravitá iós hatása egy a m¶szert®l vízszintesen 300 méter távolságra lev®, megfelel®
tömeg¶, pontszer¶ test vonzásával egyenérték¶. Ezek után Eötvös fenti mérési adatait felhasználva be süljük meg, hogy
a Gellért-hegy mekkora szöggel módosítja a mérés helyén a függ®ón irányát!
(Radnai Gyula)
Megoldás. Tekintsük a 2. ábrát!
A könny¶ rúd hosszát 2l-lel jelöltük, a rúd végein lév® kis testek tömegét m-mel, a Gellért-hegyet  helyettesít®
pontszer¶ test tömegét pedig M-mel. A rúd közepe M-t®l állandó r = 300 m távolságra van; az ábra egy olyan
helyzetet mutat, amikor az ábra (vízszintes) síkjában leng® rúd egyik vége r1, másik vége r2 távolságra van M-t®l.
Felrajzoltuk a kis testekre ható gravitá iós vonzóer®ket is (F1, ill. F2), amelyeket M fejt ki rájuk.
Newton gravitá iós törvénye szerint
F1 = γ
mM
r2
1
, illetve F2 = γ
mM
r2
2
.
Írjuk fel ezen er®k által a rúdra kifejtett Γ gravitá iós forgatónyomatékot!
Γ = F1 · lsinα1 − F2lsinα2.
Egy-egy szinusz-tétel felhasználásával ez így is írható:
Γ =

F1
r1
−
F2
r2

lrsinα = γmMlrsinα

1
r3
1
−
1
r3
2

.
Itt α, r1 és r2 változnak a rúd lengése közben. Jó lenne, ha sikerülne Γ-t supán α függvényeként meghatározni. Ehhez
a zárójelben álló kifejezést át kell alakítanunk:
1
r3
1
−
1
r3
2
=
r3
2 − r3
1
r3
1 · r3
2
=
(r2 − r1)(r2
2 + r2r1 + r2
1)
(r1r2)3
.
Használjuk ki, hogy l ≪ r! Ekkor
r2
2 + r2r1 + r2
1 ≈ 3r2
, (r1r2)3
≈ r6
, r2 − r1 ≈ 2lcosα.
(Ez utóbbi összefüggés például így látható be: A koszinusz-tétel kétszeri alkalmazásával r2
2 = l2
+ r2
+ 2lrcosα,
r2
1 = l2
+ r2
− 2lrcosα, r2
2 − r2
1 = (r2 + r1)(r2 − r1) = 4lrcosα, innen r2 − r1 ≈ 2lcosα.)
Azt kapjuk tehát, hogy
1
r3
1
−
1
r3
2
≈ 2lcosα
3r2
r6
=
6l
r4
cosα.
Helyettesítsük ezt be Γ fenti kifejezésébe:
Γ = γmMlrsinα
6l
r4
cosα = γ
mM
r2
l2
r
3sin2α.
Bevezetve a γ
mM
r2
= F0 jelölést
Γ = 3F0
l2
r
sin2α.
Mikor lesz a Γ gravitá iós forgatónyomaték zérus? Amikor sin2α = 0, vagyis α = 0 és α =
π
2
esetén. Egyik az a
helyzet, amikor a rúd éppen M felé mutat, a másik helyzet erre mer®leges. Ha sak a gravitá iós er®k hatnának, akkor
α = 0 a rúd stabilis egyensúlyi helyzete lenne, míg α =
π
2
esetén a rúd labilis egyensúlyi helyzetben lenne.
Most azonban a rúdra nem sak a gravitá iós forgatónyomaték hat, hanem az elfordulás közben meg savarodó
torziós szál által kifejtett  visszatérít®  forgatónyomaték is. Kis ∆α szögkitérés esetén ez ∆α-val arányosnak tekinthet®;
az arányossági tényez®t D∗
-gal szokás jelölni.
Ha nem lenne a gravitá iós forgatónyomaték, akkor a torziós inga lengésidejét így lehetne kiszámítani: T =
2π
p
Θ/D∗, ahol Θ a rúd közepére vonatkozó tehetetlenségi nyomaték. Milyen taggal egészül ki D∗
, ha gravitá i-
ós forgatónyomaték is fellép?
Határozzuk meg a kis ∆α-hoz tartozó ∆Γ-t!
∆Γ ≈
dΓ
dα
∆α = 6F0
l2
r
cos2α · ∆α.
Ebb®l leolvasható, hogy α = 0 esetén D∗
korrek iója 6F0
l2
r
, míg α =
π
2
esetén −6F0
l2
r
lesz, így (3. ábra)
T1 = 2π
s
Θ
D∗ + 6F0
l2
r
és T2 = 2π
s
Θ
D∗ − 6F0
l2
r
.
Ezt a T1 és T2 lengésid®t mérte le Eötvös Loránd.
Hogyan lehet ebb®l kiszámítani a függ®ón  elhajlását ? Tegyük fel, hogy a függ®ónra   fonálon függ® kis testre
a Föld mg nagyságú függ®leges irányú er®t, a Gellért-hegy pedig F0 = mg∗
nagyságú vízszintes irányú er®t fejt ki.
Ekkor az a pi i δ szög, amivel a függ®ón a függ®legest®l eltér, így kapható meg:
δ =
g∗
g
,
vagyis a lengésid®-képletekben F0 rejti a szükséges informá iót. Felírhatjuk, hogy
1
T2
1
−
1
T2
2
=
12
4π2
F0l2
Θr
=
3
π2
mg∗
l2
2ml2r
=
3
2π2
g∗
r
.
(Felhasználtuk, hogy Θ = 2ml2
.) A keresett δ szög tehát
δ =
g∗
g
=
2
3
π2 r
g

1
T2
1
−
1
T2
2

.
Behelyettesítve g = 9,81
m
s2
, r = 300 m, T1 = 564,6 s, T2 = 572,2 s értékeket, kapjuk:
δ = 1,7 · 10−5
radián = 3,4′′
.
Ezzel a feladatot megoldottuk, mégis érdemes a megoldáshoz néhány kiegészít® megjegyzést f¶zni.
1. A kapott eredmény birtokában meghatározható a vonzó entrum tömege! Minthogy F0 = γmM/r2
= mg∗
, ezért
M = g∗
r2
/γ = 2,2·1011
kg. A Föld átlagos ̺ = 5000 kg/m3
s¶r¶ségét felhasználva be slést adhatunk a vonzó entrum
térfogatára is: ez 44 millió köbméter lesz, ami egy 219 méter sugarú gömb vagy egy 353 méter élhosszúságú ko ka
térfogata. A Gellért-hegy meglehet®sen szabálytalan alakú, ezért keresett azután Eötvös egy szabályosabb alakú hegyet
az országban. A Szombathely közelében lév® Ság-hegy sonkakúp alakja nyerte meg tetszését, itt készült az a ma már
híres fénykép, amelyen a mérést végz® Eötvös látható munkatársaival: Tangl Károllyal, Bodola Lajossal és Kövesligethy
Radóval.
