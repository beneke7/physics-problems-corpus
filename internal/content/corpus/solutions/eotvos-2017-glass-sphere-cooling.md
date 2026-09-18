---
id: eotvos-2017-glass-sphere-cooling
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2017-glass-sphere-cooling
solution_type: official
source_document: solution-document-eotvos-2017-s
source_pdf: cache/phoxiv/eotvos/2017_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2017_S.pdf."
---

3. feladat. Egy 30 mm sugarú, homogén, tömör üveggolyó igen hosszú ideje forrásban lév® vízbe merül. A golyót
hirtelen jeges vízzel telt edénybe merítjük 30 másodper re, majd onnan kiemelve h®szigetel® edénybe helyezzük. (A víz-
seppeket gyorsan letöröljük.) Be süljük meg, mennyi lesz az üveggolyó egyensúlyi h®mérséklete hosszú id® elteltével!
További adatok: Az üveg s¶r¶sége 2500 kg/m3
, fajh®je 830 J/(kg K), h®vezetési tényez®je 0,95 W/(m K).
I. megoldás. A hosszú ideje lobogó vízbe merül® golyó belsejében a h®mérséklet mindenhol T1 = 100 ◦
C-os. Amikor
a golyót a T2 = 0 ◦
C-os, jeges vízbe tesszük, akkor annak küls® része kezd el el®ször leh¶lni, majd ez a  hidegfront
halad fokozatosan a golyó belseje felé. A h®szigetel® edénybe helyezve a golyó bels® energiája már nem változik
tovább, sak annyi történik, hogy a h®mérséklet a belsejében kiegyenlít®dik. Vajon mekkora tipikus ξ mélységig hatol
be a hidegfront a golyóba 30 másodper alatt? Elképzelhet®, hogy sak a golyó legküls®, vékony  kérge  h¶l le a jeges
vízben, de az is, hogy szinte az egész golyó leh¶l, sak a közepe táján marad meleg (4. ábra).
4. ábra
A golyó belseje és a jeges vízzel érintkez® (0 ◦
C-os) felülete közötti h®vezetést a Fourier-törvény írja le, amely
analóg a fémek elektromos vezetését leíró Ohm-törvénnyel (5. ábra). Míg egy állandó A keresztmetszet¶, ∆x hosszú-
ságú egyenes vezetékben folyó elektromos áram (I) a vezeték végei közötti ∆U poten iálkülönbséggel arányos, addig
ugyanezen vezetékben terjed® h®áram (IQ) a ∆T h®mérséklet-különbséggel arányos:
I = −
1
̺
A
∆U
∆x
⇐⇒ IQ = −λA
∆T
∆x
,
ahol 1/̺ a vezeték anyagának elektromos vezet®képessége (a fajlagos ellenállás re iproka), λ pedig a h®vezetési tényez®.
5. ábra
Sajnos golyó (gömbgeometria) esetén a Fourier-törvény matematikai alakja a fentinél bonyolultabb. További ne-
hézség, hogy a feladatban a h®mérsékleteloszlás nem állandó (nem sta ionárius), hanem a h®áram hatására id®ben
változik. Ilyen körülmények között reménytelen a feladatra matematikailag egzakt választ adni. Megpróbálhatjuk azon-
ban dimenzionális megfontolásokkal kitalálni, hogy hogyan függ a hidegfront ξ behatolási mélysége az id®t®l.
Els® lépésként vizsgáljuk meg, milyen mennyiségekt®l függhet ξ. Természetesen függ az id®t®l, ezen kívül függ még
a golyó λ h®vezetési tényez®jét®l (rossz h®vezet® esetén ξ lassabban növekszik), az üveg ̺ s¶r¶ségét®l és c fajh®jét®l.
A golyó R sugara is fontos paraméter lehet, de ha ξ ≪ R (azaz a jeges vízbe merítés ideje viszonylag rövid), akkor
a hidegfront terjedésére lényegében nin s hatással a golyó véges mérete. Mi a helyzet a golyó közepe és a felülete közötti
h®mérséklet-különbséggel? A Fourier-törvény szerint kétszer akkora h®mérséklet-különbséghez kétszer akkora h®áram
tartozik, de ekkor a golyó egyes rétegeinek leh¶téséhez szükséges h®elvonás is megkétszerez®dik. Tehát a hidegfront
id®beli terjedését nem, supán a  magasságát  befolyásolja ∆T = T1 − T2 értéke.
Keressük tehát a ξ behatolási mélységet a következ® alakban:
ξ ∼ λα
̺β
cγ
tδ
,
ahol α, β, γ és δ dimenziótlan konstans kitev®k. A jobb oldalon álló mennyiségek mértékegységei:
[λ] =
kg · m
s3K
, [̺] =
kg
m3
, [c] =
m
2
s2K
, [t] = s.
Ezekb®l sak egyféleképpen  keverhetünk ki  méter dimenziójú mennyiséget:
ξ(t) ∼
s
λt
c̺
.
Egy dimenziótlan faktor erejéig most már ismerjük a ξ(t) függvényt, de vajon mi az arányossági tényez®? Nem tudjuk,
de várhatóan egységnyi nagyságrend¶, és mivel be slésr®l volt szó, vegyük 1-nek! A megadott adatok alapján tehát
t = 30 s alatt a  hidegfront  behatolási mélysége:
ξ ≈
s
λt
c̺
≈ 3,7 mm,
ami majdnem egy nagyságrenddel kisebb a golyó R = 30 mm-es sugaránál. El®zetes feltevésünk, mely szerint ξ sokkal
kisebb R-nél, utólag beigazolódott.
A T∞ egyensúlyi h®mérsékletet be süljük úgy, hogy a ξ vastagságú kéreg h®mérséklete T2 = 0 ◦
C, azon belül pedig
T1 = 100 ◦
C. A h®mérséklet kiegyenlít®dését kifejez® egyenlet:
4
3
π(R − ξ)
3
T1 +
4
3
π

R3
− (R − ξ)
3
T2 =
4
3
πR3
T∞,
amib®l ξ ≪ R felhasználásával ( sak a ξ-ben els®fokú tagokat tartva meg) megkapjuk a golyó egyensúlyi h®mérsékletét:
T∞ ≈ T1 −
3ξ
R
(T1 − T2) ≈ 63 ◦
C.
Mivel be slésr®l van szó, ezért az eredmény második értékes jegyét nem szabad nagyon komolyan vennünk.
II. megoldás. Használjuk a Fourier-törvényt, és közelítsük a h®mérsékletpro
lt a 6. ábra bal oldalán látható,
szakaszonként lineáris függvénnyel! (Könnyen belátható, hogy egy ilyen h®mérsékletpro
l kés®bb nem marad szaka-
szonként lineáris, de ez a be slésünk érvényességét nem befolyásolja majd.)
6. ábra
A várhatóan kis ξ behatolási mélység miatt a problémát kezelhetjük egydimenziósként (azaz golyó helyett egy
végtelen féltér esetét vizsgáljuk). Tegyük fel, hogy t id® után a  lineáris hidegfront  szélessége ξ. Ekkor a golyó belsejéb®l
a jeges vízbe átmen® h®áram nagysága (teljesítmény):
(4) IQ = λA
T1 − T2
ξ
.
Ez a kiáramló teljesítmény okozza ∆t id® alatt a hidegfront ∆ξ szélesedését (6. ábra jobb oldala):
IQ∆t = c̺A

T1∆ξ +
T1 + T2
2
ξ

− c̺A
T1 + T2
2
(ξ + ∆ξ),
ahol a behatolási mélységnek megfelel® rész energiáját a szélein mért h®mérsékletek átlagának segítségével fejeztük ki.
Ebb®l rendezés után adódik:
(5) IQ = c̺A
T1 − T2
2
∆ξ
∆t
.
A h®áramokra kapott (4) és (5) összefüggéseket egyenl®vé téve kapjuk:
ξ ∆ξ =
2λ
c̺
∆t.
Összegezzük fel ennek az egyenletnek mindkét oldalát! Ekkor a jobb oldalon a vízbe merítés t ideje, a bal oldalon
pedig ξ2
/2 jelenik meg (ezt beláthatjuk pl. egy összenyomott rugóban tárolt energia analógiájával vagy integrálással).
Tehát a  lineáris hidegfront  behatolási mélysége az id® függvényében:
ξ(t) = 2
s
λ
c̺
t ∼
√
t,
ami egy 2-es faktor erejéig egyezik a dimenzióanalízis eredményével.
A h®mérséklet kiegyenlít®dését kifejez® egyenlet (ξ ≪ R közelítésben):
4
3
π(R − ξ)3
T1 + 4πR2
ξ
T1 + T2
2
≈
4
3
πR3
T∞,
ebb®l
T∞ ≈ T1 −
3ξ
2R
(T1 − T2).
Végül a szakaszosan lineáris h®mérsékletpro
lra levezetett ξ behatolási mélységet felhasználva kapjuk a be slés végs®
formuláját:
T∞ = T1 −
3
R
s
λt
c̺
(T1 − T2).
Az adatokat behelyettesítve T∞ ≈ 63 ◦
C egyensúlyi h®mérséklet adódik, egyezésben a dimenzióanalízissel kapott
értékkel.
∗
Az ünnepélyes eredményhirdetésre és díjkiosztásra 2017. november 24-én délután került sor az ELTE TTK Konfe-
ren iatermében. Meghívást kaptak az 50 és 25 évvel ezel®tti Eötvös-verseny nyertesei is. Jelen volt a 25 évvel ezel®tti
díjazottak közül Ge erth András, Maulis Ádám és Pálfalvi László, akik az akkori feladatok ismertetése után röviden
beszéltek a versennyel kap solatos emlékeikr®l és pályájukról.
Ezután következett a 2017. évi verseny feladatainak és megoldásainak bemutatása. Az 1. feladat megoldását Ti hy
Géza, a 2. feladatét Vankó Péter, a 3. feladatét Vigh Máté ismertette.
Az esemény végén került sor az eredményhirdetésre. A díjakat Sólyom Jen®, az Eötvös Loránd Fizikai Társulat
elnöke adta át.
Mindhárom feladat helyes megoldásáért els® díjat és Eötvös-érmet nyert Ková s Péter Tamás, a Zalaegerszegi
Zrínyi Miklós Gimnázium érettségizett tanulója, Pálovi s Róbert és Juhász Tibor tanítványa, aki jelenleg a BME

zikus hallgatója.
Két feladat helyes megoldásáért második díjat nyert Marozsák Tóbiás, az Óbudai Árpád Gimnázium 12. osztályos
tanulója, Gärtner István tanítványa.
Egy feladat helyes megoldásáért harmadik díjat nyert Németh Balázs, a Budapesti Fazekas Mihály Gyakorló
Általános Iskola és Gimnázium 12. osztályos tanulója, Dvorák Ce ília és Csefkó Zoltán tanítványa, valamint Németh
Róbert, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium érettségizett tanulója, Horváth Gábor
és Szokolai Tibor tanítványa   az ELTE
zikus hallgatója.
Egy feladat lényegében helyes megoldásáért di séretet kapott Fajszi Bul sú, a Budapesti Fazekas Mihály Gyakorló
Általános Iskola és Gimnázium 10. osztályos tanulója, Horváth Gábor és Csefkó Zoltán tanítványa; Fehér Szilvesz-
ter, az Óbudai Gimnázium érettségizett tanulója, Fehér Gabriella tanítványa   az ELTE
zikus hallgatója; Gyulai
Márton, a miskol i Földes Feren Gimnázium 11. osztályos tanulója, Pál Mihály és Zámborszky Feren tanítványa;
Kürti Zoltán, az ELTE Apá zai Csere János Gyakorló Gimnázium és Kollégium érettségizett tanulója, Zsigri Feren
tanítványa   az ELTE
zikus hallgatója; Mo skonyi Mirkó, a szentendrei Feren es Gimnázium érettségizett tanu-
lója, Adolf Géza és Borbély Ven zel tanítványa   az ELTE
zikus hallgatója; Olosz Adél, a PTE Gyakorló Általános
Iskola, Gimnázium és Szakgimnázium 11. osztályos tanulója, Kon z Károly és Kotek László tanítványa; Simon Dáni-
el Gábor, a Ke skeméti Bányai Júlia Gimnázium 12. osztályos tanulója, Bakk János tanítványa; Szakály Mar ell,
a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 12. osztályos tanulója, Csefkó Zoltán és Dvorák
Ce ília tanítványa, valamint Tófalusi Ádám, a Debre eni Fazekas Mihály Gimnázium 11. osztályos tanulója, Tófalusi
Péter és Zámborszky Feren tanítványa.
Az els® díjjal Zimányi Gergely adományából 63 ezer, a második díjjal 45 ezer, a harmadik díjjal 25 ezer forint
pénzjutalom járt, a di séretesek könyv- és tárgyjutalmat, a díjazottak tanárai pedig a Typotex Kiadó könyveit kapták.
A verseny megszervezését az Eötvös Loránd Fizikai Társulat a MOL támogatásából fedezte.
