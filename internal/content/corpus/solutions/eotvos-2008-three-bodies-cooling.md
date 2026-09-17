---
id: eotvos-2008-three-bodies-cooling
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2008-three-bodies-cooling
solution_type: official
source_document: solution-document-eotvos-2008-s
source_pdf: cache/phoxiv/eotvos/2008_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2008_S.pdf."
---

2. feladat. Ugyanabból az anyagból készült, állandó fajh®j¶ három test h®mérséklete 13 ◦
C, 27 ◦
C és 90 ◦
C.
A két melegebb test tömege egyenként fele a 13 ◦
C-os test tömegének. Megfelel® h®gépek és energiatároló eszközök
közbeiktatásával, küls® energia befektetése nélkül szeretnénk a 13 ◦
C-os testet minél jobban leh¶teni.
a) Hogyan kell eljárnunk? (A testek sak h®felvétel vagy h®leadás során változtathatják meg h®mérsékletüket, hal-
mazállapotváltozás nem történik, h®tágulásuk elhanyagolható.)
b) Mennyire h¶lhet le az eredetileg 13 ◦
C-os test?
(Radnai Gyula)
Megoldás. a) Hogyan lehet három test közül a leghidegebbet még tovább h¶teni? Nin s nála hidegebb test, amivel
kap solatba hozhatnánk. Adiabatikus munka végzésére sin s lehet®ség, a testek most sak h®felvétel vagy h®leadás
során változtathatják meg a h®mérsékletüket.
Semmi kétség: h¶t®gépre van szükségünk! Viszont minden h¶t®gép m¶ködtetéséhez küls® energiaforrás kell, ami
most nem áll rendelkezésre.
Illetve mégis van egy kiút: ha a két különböz® h®mérséklet¶ másik test felhasználásával m¶ködtetünk egy h®er®-
gépet! Azt a munkát, amit ebb®l nyerünk, felhalmozzuk egy energiatárolóban. Mire a két melegebb test között végül
megsz¶nik a h®mérsékletkülönbség, az így el®állt középmeleg test és a hideg test közé már beiktathatunk egy h¶-
t®gépet, amely az el®bb nyert munka befektetésével biztosan m¶ködik valameddig. Ennek eredményeképpen a hideg
test tovább h¶l. Már sak azt kell kiszámítanunk, mennyire h¶l le.
b) El®ször azt számítsuk ki, mennyi munka nyerhet® a kezdetben T1 = 90◦
C = 363 K és T2 = 27 ◦
C = 300 K
h®mérséklet¶, m tömeg¶, c fajh®j¶ testek között m¶ködtetett h®er®gép segítségével! A legnagyobb munkát akkor
nyerjük, ha egyensúlyi folyamatokat végz®, úgynevezett reverzibilis Carnot-gépet használunk. Q1-gyel, illetve Q2-vel
jelölve e körfolyamatot végz® gép egyetlen iklusában a T1, illetve T2 h®mérséklet¶ testekt®l felvett h®t, Q1 > 0 és
Q2 < 0, ha T1 > T2. Ekkor a iklusonként végzett munka a termodinamika els® f®tétele szerint:
W = Q1 + Q2.
Ugyanakkor a termodinamika második f®tétele szerint
Q1
T1
+
Q2
T2
= 0

η =
W
Q1
=
T1 − T2
T1

.
Egyetlen iklus még alig változtatja meg a h®tartálynak tekinthet® testek h®mérsékletét, elég sok iklus után azonban
egyre közelebb kerül egymáshoz a két test h®mérséklete.
Hogyan függ össze ez a két h®mérséklet? Helyettesítsük be a második f®tételbe
Q1 = −cm∆T1 és Q2 = −cm∆T2
értékeit (a negatív el®jel azért kell, mert ami a munkavégz® közeg szempontjából felvett h®, az a h®tartályok szem-
pontjából leadott h®nek számít):
−cm∆T1
T1
+
−cm∆T2
T2
= 0.
Innen kapjuk, hogy
∆T1
T1
+
∆T2
T2
= 0,
T2∆T1 + T1∆T2 = ∆(T1T2) = 0,
vagyis
T1T2 = állandó.
Tehát úgy változik a két test abszolút h®mérséklete, hogy a szorzatuk állandó marad! (Ez akkor és sak akkor van
így, ha a két test h®kapa itása egyenl®; de ez most teljesül.) Végül is egy olyan közös h®mérséklet áll be, amelyre
T2
közös = T1T2,
vagyis a közös h®mérséklet a kezdeti h®mérsékletek mértani közepe lesz. Esetünkben
Tközös =
√
363 K · 300 K = 330 K.
A melegebb test által leadott h® nagysága (a h®mérséklet kelvin mértékegységének kiírása nélkül):
cm · (363 − 330) = cm · 33.
A hidegebb test által felvett h® nagysága:
cm · (330 − 300) = cm · 30.
Így az összesen nyert munka: cm · 3, ezt használhatjuk fel majd a h¶t®gép meghajtására.
Most már foglalkozhatunk a h¶t®géppel, aminek az alsó h®tartálya lesz a c fajh®j¶, 2m tömeg¶, T3 = 13 ◦
C = 286 K
h®mérséklet¶ test. A fels® h®tartály is c fajh®j¶, és ugyan sak 2m tömeg¶, az el®z® folyamat végén nyert 330 K
h®mérséklet¶ test. Ismét két azonos h®kapa itású testr®l van szó, vagyis most is állandó marad a két (abszolút)
h®mérséklet szorzata.
Jelöljük T-vel az a kiszámítandó h®mérsékletet, amire a hideg test leh¶l, és T⋆
-gal azt a h®mérsékletet, amire a
két másik test felmelegszik. Ekkor tehát
T · T⋆
= 286 · 330,
és az energiaegyenlet:
c · 2m(T⋆
− 330) − c · 2m(286− T) = cm · 3.
A fenti két egyenlet már meghatározza a keresett T és T⋆
értékeket:
T = 278 K = 5 ◦
C, T⋆
= 339,5 K = 66,5 ◦
C.
Vagyis a kezdetben 13 ◦
C-os test végül is 5 ◦
C-osra h¶thet® le. Ezt kellett kiszámítanunk.
