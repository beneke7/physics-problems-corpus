---
id: eotvos-2007-glass-plates-water-capillary
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2007-glass-plates-water-capillary
solution_type: official
source_document: solution-document-eotvos-2007-s
source_pdf: cache/phoxiv/eotvos/2007_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2007_S.pdf."
---

1. Két téglalap alakú üveglemezt egyik élük mentén egymáshoz támasztunk úgy, hogy 2ϕ szöget zárjanak be egymással.
Az így rögzített lemezeket lassan vízbe engedjük az ábrán látható módon. A víz, amely tökéletesen nedvesíti az üveget,
a felületi feszültség hatására a két lemez között bizonyos H magasságig felemelkedik.
1. ábra
Mekkora ez a H magasság, ha a lemezek vízszintesen tartott érintkezési vonala
a) h = 30 mm,
b) h = 15 mm,
távolságra van a szabad vízfelszínt®l? Ábrázoljuk vázlatosan, hogyan változik H a fokozatosan sökken® h függvé-
nyében!
Feltehetjük, hogy a lemezek egymással érintkez® éle sokkal hosszabb, mint h, továbbá a lemezek szimmetriasíkja
mindvégig függ®leges.
Adatok: σvíz = 0,072 N/m, ̺víz = 1000 kg/m3
, 2ϕ = 6◦
.
(Varga István feladata)
Megoldás. Mivel a két üveglemez elég kis szöget zár be egymással, a köztük felemelked® víz felületét jó közelítéssel
vehetjük félhenger alakúnak. Így felírhatjuk (a félhenger sugarát r-rel jelölve):
ϕ ≈ tgϕ =
r
h − H
.
Me hanikai egyensúly esetén a víz felületi feszültségéb®l adódó görbületi nyomásnak és a felemelkedett vízoszlop
H magasságának megfelel® hidrosztatikai nyomásnak meg kell egyeznie, vagyis
σ
r
= H̺g.
(Azért nem
2σ
r
a görbületi nyomás, mert a felszín nem gömb, hanem henger alakú.)
Amíg
σ
r
> H̺g, addig a folyadékszint még emelkedik az üveglapok között. Ha pedig már túlfutott és H̺g >
σ
r
lett, akkor a vízszint sökkenni kezd. A kialakuló állapot stabil egyensúlyi állapot kell, hogy legyen.
Vizsgáljuk meg, milyen H értékre teljesül a
σ
(h − H)ϕ
= H̺g
egyensúlyi feltétel! Átalakítva és az ismert adatokat behelyettesítve
H(h − H) =
σ
̺gϕ
= 1,4 · 10−4
m2
= 140 mm2
.
A magasságokat mm-ben mérve az alábbi másodfokú egyenletet kell megoldanunk:
H2
− hH + 140 = 0.
Ennek h = 30 mm esetén két megoldása lesz: H1 = 5,8 mm és H2 = 24,2 mm. E kett® közül azonban sak az egyik, a
kisebb érték a stabil, a másik instabil egyensúlyi állapotot határoz meg! A stabilitási viszonyokat is megvizsgálhatjuk,
ha H függvényében ábrázoljuk a ̺gH és a
σ
(h − H)ϕ
kifejezéseket (2. ábra). Attól függ®en, hogy melyik kifejezés a
nagyobb, a víz felszíne a bejelölt nyila skáknak megfelel®en fel- vagy lefelé mozog. Látható, hogy H1 a stabil, H2 pedig
az instabil megoldás.
2. ábra
A fenti ábra addig helyes, amíg
h >
√
4 · 140 = 23,7 mm,
ekkor pozitív ugyanis a fenti másodfokú egyenlet diszkriminánsa.
De mi történik akkor, amikor az üveglapok lassú leengedése közben elérjük a h = 23,7 mm értéket, és még tovább
süllyesztjük az üveglapokat? h = 23,7 mm esetén H =
h
2
magasan áll a vízszint, majd a következ® pillanatban (amikor
a 2. ábrán látható hiperbolának és az egyenesnek már nem lesz metszéspontja, tehát a görbületi nyomás minden
helyzetben nagyobb lesz, mint a hidrosztatikai nyomás) a víz emelkedni kezd és egészen a két üveglap érintkezéséig
felszalad! Ett®l kezdve H = h lesz végig.
Hogyan változik H a fokozatosan sökken® h függvényében? A választ a 3. ábra mutatja, a kérdéses helyzetekben
pedig a numerikus értékek:
a) h = 30 mm esetén H = 5,8 mm;
b) h = 15 mm esetén H = 15 mm.
3. ábra
Megjegyzések: A feladatra adott hibás megoldások közül három tipikusat érdemes külön is megemlíteni.
1. Többen a körkeresztmetszet¶, függ®leges hajszál s®ben felemelked® vízre érvényes képletet próbálták meg itt
alkalmazni. (Ekkor jelenik meg a
2σ
r
görbületi nyomás!) Nem kaphattak helyes eredményt.
2. Sokan a felemelkedett vízmennyiség súlyát tették egyenl®vé a felületi feszültségb®l származó, felfelé húzó er®vel.
Ez azért hibás, mert a ferde, nem függ®leges üveglemezek által kifejtett nyomóer®nek is van függ®leges összetev®je, amit
az er®egyensúlynál 
gyelembe kellene venni. A probléma hasonló ahhoz, ami a jól ismert hidrosztatikai paradoxonnál
jelentkezik.
3. Néhányan energetikailag próbálták megoldani a feladatot úgy, hogy a felemelkedett víz helyzeti energiáját tették
egyenl®vé a felületi feszültség σ · ∆A munkájával. Ez ugyanúgy hibás, mintha egy rugóra függesztett test egyensúlyi
helyzetének meghatározásához a nehézségi er® és a rugóer® munkájának egyenl®ségét írnánk fel. Jól tudjuk, hogy ez az
egyenl®ség sak a rugón rezg® test mozgásának széls® helyzeteire teljesül, ahol éppenhogy nin s a test egyensúlyban.
Egyensúlyi állapotban a mozgási energia nem hanyagolható el, s®t, éppen akkor maximális!
