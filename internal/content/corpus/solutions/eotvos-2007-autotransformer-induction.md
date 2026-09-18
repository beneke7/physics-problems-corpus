---
id: eotvos-2007-autotransformer-induction
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2007-autotransformer-induction
solution_type: official
source_document: solution-document-eotvos-2007-s
source_pdf: cache/phoxiv/eotvos/2007_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2007_S.pdf."
---

2. Egy terebélyes vasmaggal ellátott, nagy öninduk iójú, de mégis elhanyagolható ohmikus ellenállású teker s végeit
U feszültségre méretezett izzón keresztül kötjük össze. Ha az A és B pontok közé U/2 e ektív érték¶ váltakozó feszültséget
kap solunk, az izzó nagyon halványan világít.
4. ábra
Mivel a teker s közepér®l is van egy C kivezetés, megpróbáljuk a feszültségforrás pólusait az A és C pontokhoz kötni.
Megváltozik-e az izzón átfolyó áram er®ssége, és ha igen, hogyan? Az ábrán bejelöltük a f®ágban folyó I(t) pillanatnyi
áram irányát. Hogyan folyik az áram ugyanekkor a teker sben?
(Károlyházy Frigyes)
Megoldás. Három dolgot kell egymás után észrevennünk, hogy viszonylag gyorsan eljussunk a helyes válaszhoz.
1. Mivel a teker s ohmikus ellenállása elhanyagolható, ezért UAC ≈
U
2
kell legyen, hogy ne folyjék a generátoron
végtelen nagy áram.
2. Mivel a
uxusváltozás mértéke a teker s különböz® részein ugyanakkora, ezért mindkét félteker sen ugyanakkora
az indukált feszültség, tehát UAC = UCB.
3. Mivel a lámpa párhuzamosan van kap solva a generátor plusz a teker s jobb oldali felével, ezért
Ulámpa = Ugen. + UCB =
U
2
+
U
2
, tehát Ulámpa = U.
Így a lámpa az  üzemi  feszültséget kapja, ezért jól ég!
Az áramirányok meghatározásához   Werner Miklós ötlete alapján   rajzoljuk át a megadott kap solást a következ®
módon: képzeljük el, hogy a teker s bal oldali részét alkotó huzalt hosszában kettévágjuk, s így ezen az oldalon két,
egymás mellett futó teker shez jutunk (5. ábra).
5. ábra
Kaptunk egy AC teker set, amire a generátor feszültségét kap soljuk, és egy AB teker set, amire a lámpát kötöttük.
Ez bizony egy transzformátor! A primer menetszám
N
2
, a primer áram (a feladatban alkalmazott jelölés szerint) I.
A szekunder menetszám N, tehát a szekunder áram
I
2
lesz.
C-t®l B felé
I
2
, C-t®l A felé ugyan sak
I
2

I −
I
2
=
I
2

áram folyik (6. ábra).
6. ábra
Megjegyzések. Bemutatunk további három megoldást, amellyel a versenyz®k eljutottak a helyes válaszhoz. Mindegyi-
kük  ráérzett  a feladatban rejl® transzformátorra (ténylegesen autotranszformátornak nevezik a feladatban megadott
kap solást), és helyesen alkalmazták az általuk ismert összefüggéseket. Nem részletezzük, sak vázoljuk a megoldásnál
követett gondolatmeneteket.
7. ábra
1. Kon zer József a 7. ábrán látható módon rajzolta át a kap solást. Figyelembe véve a teker srészek közötti szoros
satolást, a köl sönös induk iós együttható: M =
p
L1L2. Az indukált feszültségek:
U1 = −L1
∆I1
∆t
+ M
∆I2
∆t
,
illetve
U2 = −L2
∆I2
∆t
+ M
∆I1
∆t
.
Mivel most L1 = L2 = L = M, ezért
U1 + U2 = 0.
A generátor feszültsége:
U
2
= −U2 = I1R − U1,
ebb®l pedig I1R = U következik.
8. ábra
2. Kónya Gábor a 8. ábrán látható módon rajzolta át a kap solást. A szinuszos váltakozó áram tárgyalására
kidolgozott komplex formalizmus ismeretében ® az alábbi egyenleteket tudta felírni:
U1 = jωL(I1 − I2),
illetve
U2 = jωL(I2 − I1).
ezekb®l következik, hogy U2 = −U1. Mivel
U1 = U2 + I2R és U1 =
U
2
,
ezért
U
2
= −
U
2
+ I2R, vagyis U = I2R
kell legyen. (j-vel az ún. komplex egységgyököt,
√
−1-et jelöltük.)
3. Szolnoki Lénárd úgy rajzolta át a kap solást (9. ábra), hogy még jobban emlékeztessen egy veszteségmentes, zárt
vasmagú transzformátorra. Mivel a transzformátor szekunder oldalán ellentétes  irányú  a feszültség, mint a primer
oldalon, ezért a fels® hurokra felírva a második Kir hho -törvényt, kapjuk:
U
2
+
U
2
− U∗
= 0, tehát U∗
= U.
9. ábra
Mindhárom megoldó már a saját rajzán helyesen jelölte be az áramok irányát.
