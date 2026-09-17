---
id: eotvos-2018-gas-mixture-heating
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2018-gas-mixture-heating
solution_type: official
source_document: solution-document-eotvos-2018-s
source_pdf: cache/phoxiv/eotvos/2018_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2018_S.pdf."
---

2. Egy tartályban 1 mólnyi egyatomos gáz és 2 mólnyi kétatomos gáz keveréke található. A tartály fala az egyatomos
gáz atomjait átengedi, de a kétatomos gáz molekuláit nem. Kezdetben a tartály a 20 ◦
C-os környezettel egyensúlyban
van. A tartályban lév® gázkeveréket egy f¶t®test lassan 120 ◦
C-kal felmelegíti.
a) Mennyivel változik meg a tartályban lév® gáz bels® energiája?
b) Mennyi h®t ad le a f¶t®test a gáznak? (A tartály melegedéséhez szükséges h®t és a tartály h®vezetését hagyjuk

gyelmen kívül!)
(Ti hy Géza)
Megoldás. a) Két gázkeverék akkor van egyensúlyban, ha azon komponensek par iális nyomása megegyezik,
melyek a két tartály között áramolhatnak. Feladatunkban sak az egyatomos molekulák gázát engedi át a fal, ezért ha
egyensúlyban a tartályban lév® egyatomos gáz par iális nyomása p1, akkor a környezetben ennek a gáznak a par iális
nyomása is ugyanakkora. Ez az egyensúly a kétatomos gáz par iális nyomására nem jelent megszorítást.
El®ször vizsgáljuk az egyatomos gáz folyamatát! Mivel ennek par iális nyomását a környezet állítja be állandóra, ez
egy izobár folyamat, de a mólok száma, amely kezdetben n1k = 1 mol nem állandó, hanem a folyamat közben állandóan
változik, melegítés hatására gáz áramlik a tartályból a környezetbe. Az egyesített gáztörvény alapján p1V = n1RT,
ahol V a tartály térfogata. Mivel sem a par iális nyomás, sem a térfogat nem változik, a folyamatra az
n1T = állandó
összefüggés jellemz®.
3. ábra
A kétatomos gázt a fal nem engedi át, ennélfogva térfogata állandó, a folyamat izo hor. A f¶t®test a gázt 20
◦
C-
ról melegíti 120
◦
C-ra, ezért mind az egyatomos gáz, mind a kétatomos gáz kezdeti és végs® h®mérséklete kelvinben
Tk = 293 K és Tv = 393 K (3. ábra).
Az egyatomos gáz szabadsági foka 3, ennek ismeretében a bels® energia kezdeti értéke:
E1k =
3
2
n1kRTk,
míg bels® energiája a folyamat végén:
E1v =
3
2
n1vRTv =
3
2
n1kRTk,
ami a folyamatra jellemz®
n1vTv = n1kTk
összefüggés miatt megegyezik a kezdeti energiával. Látjuk, hogy az egyatomos gáz bels® energiája nem változik.
A kétatomos gáz öt szabadsági fokkal rendelkezik. A bels® energiájának megváltozása:
∆E1 =
5
2
n2R(Tv − Tk).
A teljes rendszer bels® energiájának megváltozása:
∆E =
5
2
n2R(Tv − Tk) = 4,16 kJ.
b) Most rátérünk annak a h®nek a kiszámítására, amit a f¶t®test ad le. Az egyatomos gáz izobár folyamatában
a része skeszám állandóan változik, tehát az általa felvett h®t részfolyamatonként kell összeadni. Ezt integrállal lehet
kifejezni:
Q1 =
Z Tv
Tk
5
2
n1RdT,
ahol a folyamat során a mólszám az
n1 =
n1kTk
T
alapján függ a h®mérséklett®l. Felhasználtuk, hogy az egyatomos gáz állandó nyomáson vett mólh®je Cp1 = (5/2)R.
Az integrált elvégezve
Q1 =
Z Tv
Tk
5
2
n1kRTk
T
dT =
5
2
n1kRTk ln
Tv
Tk
= 1,79 kJ.
Az integrálás lépése több módon is elkerülhet®, például úgy, hogy felhasználjuk a hasonlóságot az izoterm folyamat
munkavégzésével, vagy egy közelít® összegzést alkalmazva számolunk numerikusan.
A kétatomos gáz izo hor folyamatot végez, ezért az általa felvett h® megegyezik a bels® energia megváltozásával:
Q2 =
5
2
n2R(Tv − Tk) = 4,16 kJ.
A f¶t®test a kett® h® összegét adja le:
Q = Q1 + Q2 = 5,95 kJ.
