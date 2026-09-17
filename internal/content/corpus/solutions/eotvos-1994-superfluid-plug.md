---
id: eotvos-1994-superfluid-plug
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-1994-superfluid-plug
solution_type: official
source_document: solution-document-eotvos-1994-s
source_pdf: cache/phoxiv/eotvos/1994_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/1994_S.pdf."
---

2. feladat. Egy henger alakú edény szuperfolyékony héliummal van tele. Az edény magassága 1 dm, bels® alapte-
rülete 1 dm2
.
A héliumra kell® óvatossággal egy ugyan sak henger alakú, 1 dm magas, de sak 0,99 dm2
alapterület¶ dugót
helyezünk, és elengedjük. A dugó s¶r¶sége a hélium s¶r¶ségével egyenl®.
| Hogyan mozog a dugó?
| Mennyi id® alatt ér le az edény aljára?
Az egész berendezés h®mérséklete 0 K közvetlen közelében van, a folyadék súrlódása és felületi feszültsége 
gyelmen
kívül hagyható.
Gnädig Péter
Megoldás. Amikor elengedjük a dugót (3. ábra), ennek esését az alatta lév® folyadék hirtelen lefékezi bizonyos v0
sebességre. Ezt a dugó további mozgása során kezd®sebességnek fogjuk tekinteni.
Próbáljuk meg kiszámítani ezt a v0 kezd®sebességet, s sak utána keressük a választ a feladat kérdésére: Hogyan
mozog a dugó?
Amint a dugó v0 sebességgel elindul lefelé, oldalt felspri el a folyadék. Jelöljük a folyadék kiömlési sebességét
u0-lal. Ez sokkal nagyobb, mint v0, hiszen a folyadék összenyomhatatlansága miatt a ∆A terület¶ résen ugyanannyi
folyadéknak kell kifre sennie, mint amennyi az A terület¶ dugó alól kiszorul:
v0 · A = u0 · ∆A.
v0 kiszámításához lehet, hogy el®ször u0-t kell meghatároznunk? Ez elég is lenne, hiszen a feladat adataiból az
A : ∆A = 100 arány kiolvasható.
Milyen összefüggésben szerepelhet még a kiöml® folyadék sebessége? Mivel a folyadék súrlódása és felületi feszültsége

gyelmen kívül hagyható, ezért érdemes lesz felírni az egész rendszerre a a munkatételt. Eszerint a rendszeren végzett
munka a rendszer mozgási energiájának megváltozásával egyenl®.
Munkát végz® er® a dugóra ható nehézségi er®. Amíg a dugó | a test |, egy ki siny ∆x-szel elmozdul lefelé, kiszorít
∆mfoly tömeg¶ folyadékot, amely u0 sebességgel hagyja el a tartályt. Ezért írhatjuk:
mtest · g · ∆x =
1
2
∆mfoly · u2
0.
Igaz, a dugónak is megváltozott a mozgási energiája, de a sokkal kisebb sebesség miatt ezt a folyadék mozgási
energiájának változásához képest elhanyagolhatjuk.
Helyettesítsük a fenti egyenletbe a következ®ket:
mtest = Al̺test és ∆mfoly = A∆x̺foly.
Egyszer¶sítés után a következ® összefüggés adódik:
l̺testg =
1
2
̺folyu2
0.
Ez éppen a jó öreg Bernoulli-törvény (1738) spe iális esete, akár ebb®l is kiindulhattunk volna u0 kiszámításához. Ha
pedig azt is kihasználjuk, hogy a feladatban most a test és a folyadék s¶r¶sége egyenl®, a folyadék kiömlési sebességére
kapjuk:
u0 =
p
2gl.
Ez a Torri elli-féle kiöntési törvény (1646) még egy évszázaddal korábbról.
Akár át is fogalmazhatjuk a feladatot: Ahelyett, hogy Hogyan mozog a dugó?, azt kérdezhetjük: Hogyan mozog
egy lyukas edényb®l súrlódásmentesen kiöml® folyadék esetén a folyadék fels® szintje? Azt már tudjuk, hogyan indul
el. Kezd®sebessége:
v0 =
∆A
A
u0 =
∆A
A
p
2gl.
Tekintsünk most egy közbüls® esetet a mozgás során. Tegyük fel, hogy a dugónak még h magasságú része áll ki a
hengerb®l. A dugó úgy mozog ekkor, mint az oldalt lyukas edényben lév® folyadékok fels® szintje abban a pillanatban,
amikor ez a szint éppen h magasságban van a lyuk felett (4. ábra). Ugyanis mindkét esetben a súrlódásmentesen kiöml®
folyadék sebessége
u =
p
2gh,
és így a dugó sebessége
v =
∆A
A
u =
∆A
A
p
2gh.
Ez még így is írható:
v =
s
2

∆A
A
2
gh,
amib®l látszik, hogy a dugó mozgása egyenletesen változik, lassulásának nagysága pedig

∆A
A
2
· g = 10−4
g = 10−3 m
s2
.
A dugó mozgásának sebességid® gra
konja az 5. ábrán látható.
A dugó sebessége éppen akkor sökken egyébként is zérusra, amikor a dugó alja eléri az edény alját, teteje pedig a
hengeres edény tetejével kerül egy szintre. (Az analóg példában: a kiöml® folyadék felszíne a lyukhoz ér.)
Így a dugó leérkezéséig eltelt τ id®
τ =
2l
v0
=
2l
∆A
A
√
2gl
=
A
∆A
s
2l
g
= 14,1 s.
Kiegészít® megjegyzések.
1. A leérkezési id® kiszámításakor elhanyagoltuk azt az id®tartamot, amennyi id® alatt a dugó felveszi a kezd®se-
bességet, s azt az utat is, amit ez alatt megtesz. Az elhanyagolás jogosságát a következ® be sléssel ellen®rzihetjük. A
dugó valódi kezd®sebessége nulla, de ebb®l az állapotából | feltételezésünk szerint igen hamar | felgyorsul a kérdéses v0
sebességre. Amikor elengedjük, a dugó tetején és az aljánál egyaránt a légköri nyomás hat rá, tehát a dugó kezdeti gyor-
sulása g (szabadesés!). Ez a gyorsulás bizonyos τ0 id® alatt gyarkorlatilag nullára (10−4
g-re) sökken, s a dugó sebessége
v0 lesz. Ha átlagosan g/2 értékkel számolunk, a (g/2)τ0 = v0 összefüggésekb®l τ0 = 2v0/g = 2 ·
∆A
A
s
2l
g
≈ 0,003 s
adódik. Ez ez id® és a dugó által ezalatt megtett kb. v0τ0/2 = 0,02 mm út valóban elhanyagolható.
2. A szuperfolyékony héliumnak semmi más különleges extrém tulajdonságát | például, hogy lassan magától is
kimászna az edényb®l | nem használtuk ki azon az egyen kívül, hogy nin s bels® súrlódása. Éppen elég meglep® ez is!
