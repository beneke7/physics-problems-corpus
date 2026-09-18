---
id: eotvos-2022-ion-diffusion
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2022-ion-diffusion
solution_type: official
source_document: solution-document-eotvos-2022-s
source_pdf: cache/phoxiv/eotvos/2022_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2022_S.pdf."
---

p2
.
A teljes munkavégzés tehát ı́gy ı́rható:
Wteljes = eΔN · U − ΔNkT ln
p1
p2
.
Ha ez a munka negatı́v lenne, akkor a folyamat magától végbemenne, azaz a kis
gázmennyiség átjutna a kisebb térrészből a nagyobb térrészbe. Ellenkező esetben,
ha a munka előjele pozitı́v lenne, a folyamat az ellentétes irányban menne végbe
spontán módon. Mivel stacionárius állapotban egyik sem történik meg, Wteljes
szükségképpen zérus:
eΔN · U − ΔNkT ln
p1
p2
= 0.
A mozgatott gázmennyiség ΔN részecskeszámával leoszthatunk, majd közvetlenül
megkapjuk az
U =
kT
e
ln

p1
p2

=
kT
e
ln2
eredményt, amely megegyezik az I. megoldás eredményével.
III. megoldás. Vegyük észre, hogy a megoldás, amit kaptunk, átrendezhető
a következő alakba:
n2
n1
=
p2
p1
= e−
eU
kT = e−
ΔE
kT ,
ahol ΔE a két térrész közötti (elektrosztatikus) potenciális energia különbsége.
Ugyanerre az eredményre jutunk, ha átrendezzük a jól ismert
”
barometrikus ma-
gasságformula” képletét:
p2
p1
= e
−
 gΔh
p1 = e−
mgΔh
kT = e−
ΔE
kT ,
Középiskolai Matematikai és Fizikai Lapok, 2023/2 113
i
i
2023.2.4 – 16:39 – 114. oldal – 50. lap KöMaL, 2023. február
i
i
i
i
i
i
ahol a gáz sűrűsége, g a nehézségi gyorsulás, Δh a magasságkülönbség, m a ré-
szecskék tömege, és ΔE itt is a két helyzet közötti (gravitációs) potenciális energia
különbsége.
Ha nem a
”
nagy szabad úthossz”közelı́tését vizsgálnánk, a két fémháló között
a nyomás ugyanúgy változna, mint a
”
barometrikus magasságformula”izotermikus
légoszlopában. Az mg nehézségi erő helyére az eE elektromos erő kerülne.
Mindkét esetben megjelenik az e−
ΔE
kT Boltzmann-tényező. Ennek magyarázata
az, hogy a gázrészecskéket energetikai szempontból jellemző (vx,vy,vz) sebesség-
komponensek mellett a feladatbeli rendszerben megjelenik még egy
”
szabadsági fok”
is: az, hogy a részecske melyik térfélben helyezkedik el. A nagyobb (2-es számú)
térrészben az ionok potenciális energiája ΔE = eU értékkel magasabb, mint a ki-
sebb (1-es számú) térrészben, ezért az ionok megtalálási valószı́nűség-sűrűségének
(vagy az azzal arányos részecskesűrűségek) aránya e−
eU
kT .
Ezzel a gondolatmenettel a megoldás – megfelelő indoklással – egyetlen sorban
megkapható.
