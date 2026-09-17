---
id: eotvos-2024-balloon-elastic
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2024-balloon-elastic
solution_type: official
source_document: solution-document-eotvos-2024-s
source_pdf: cache/phoxiv/eotvos/2024_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2024_S.pdf."
---

1. Egy léggömb elasztikus viselkedése a fal rugalmas energiája segítségével jelle-
mezhető. Ha a jó közelítéssel mindvégig gömb alakú lufi mérete a feszítetlen méret
λ-szorosára változik, akkor a léggömb rugalmas energiája a 2λ2
+λ−4
−3 kifejezés-
sel egyenes arányban növekszik egészen addig, míg végül λ ≈ 3 érték körül a lufi
kidurran.
A kezdetben ernyedt állapotú léggömböt egy kompresszorhoz csatlakoztatott
T-alakú elosztó egyik kivezetésére kötjük, a másik kivezetésre pedig egy vékony
üvegcsőből készült vizes manométert rögzítünk az 1. ábrán látható módon. A víz
a cső 20 cm hosszú szakaszát foglalja el. A kompresszor elindítása után azt ta-
pasztaljuk, hogy a folyadékszintek az eredeti helyzetükhöz képest lassan 5 cm-rel
mozdulnak el, mialatt a léggömb átmérője 5%-kal növekszik. Mi fog történni ez-
után?
20 cm
1. ábra
(Vigh Máté)
1Részletek a verseny honlapján: http://eik.bme.hu/~vanko/fizika/eotvos.htm
Középiskolai Matematikai és Fizikai Lapok, 2025/1 41
i
i
2025.1.4 – 21:12 – 42. oldal – 42. lap KöMaL, 2025. január
i
i
i
i
i
i
Megoldás. A lufi rugalmas energiája egy alkalmas E0 konstans bevezetésével így
írható:
E = E0 2λ2
+λ−4
−3

.
Meggyőződhetünk róla, hogy nyújtatlan állapotban (azaz λ = 1 esetén) a rugalmas
energia a várakozásnak megfelelően zérus, λ > 1 értékekre pedig E(λ) monoton nö-
vekvő függvény. Vajon hogyan határozható meg ebből az összefüggésből a lufiban
uralkodó p túlnyomás értéke? Alkalmazzuk a virtuális munka elvét: ha a léggömb
térfogatát kis ∆V értékkel megnöveljük, a bezárt és a külső levegő együttes mun-
kavégzése éppen egyenlő a rugalmas energia növekedésével:
p∆V = ∆E.
A lufi pillanatnyi térfogata a kezdeti V0 térfogattal V = V0λ3
módon fejezhető ki.
Ennek kicsiny megváltozása a magasabb rendű tagok elhanyagolásával a követke-
zőképpen közelíthető:
∆V ≈ 3V0λ2
∆λ.
Ehhez hasonlóan a rugalmas energia kifejezése is sorba fejthető:
∆E ≈ E0 4λ−4λ−5

∆λ.
Az eddigiek felhasználásával a túlnyomás kiszámítható:
p =
∆E
∆V
=
4E0 λ−λ−5

∆λ
3V0λ2∆λ
= p0

1
λ
−
1
λ7

,
ahol a rövidség kedvéért bevezettük a p0 = 4E0
3V0
jelölést (ami nem azonos a külső
légnyomással).
A feladat szövegéből tudjuk, hogy p(λ=1,05)=10 vízcm, hiszen ha a vízszintek
5 cm-rel mozdulnak el, akkor a folyadékszintek különbsége 10 cm lesz. Ebből:
p0 =
10 vízcm
1,05−1 −1,05−7
= 41,4 vízcm.
Érdemes kiszámítani a nyomás értékét a következő két speciális esetben:
λ = 1 esetén (ernyedt állapotban) p valóban nulla, ahogy várjuk.
λ = 3 esetén (azaz a kidurranás határán) p = 13,8 vízcm.
Ekkora túlnyomást a manométerben lévő 20 cm hosszú vízoszlop ki tud fejteni.
Ebből azt a hibás következtetést vonhatjuk le, hogy a lufi felfújódása egészen addig
folytatódik, míg a vízszintek elmozdulása 13,8
2 = 6,9 cm-re nő, majd ekkor a lufi
kidurran.
Vajon hol a hiba ebben a gondolatmenetben? Ehhez vizsgáljuk meg részlete-
sebben a p(λ) függvényt (2. ábra)! Numerikus értékek behelyettesítésével észre-
vehetjük, hogy a nyomásnak λ = 1 és λ = 3 között maximuma van. (A jelenséget
tapasztalatból is ismerjük: egy lufit kezdetben nehezebb, majd egy bizonyos méret
felett könnyebb felfújni.)
42 Középiskolai Matematikai és Fizikai Lapok, 2025/1
i
i
2025.1.4 – 21:12 – 43. oldal – 43. lap KöMaL, 2025. január
i
i
i
i
i
i
p (vízcm)
20
30
10
0
1 1,5 2 2,5 3
2. ábra
A maximum pontos helye deriválással határozható meg:
dp
dλ
= p0 −λ−2
+7λ−8

.
Ez a derivált zérus, ha
λ = λ∗
=
6
√
7 = 1,38, ahol p(λ∗
) = 25,7 vízcm.
Mi fog tehát történni? Ahogy az a 2. ábráról látszik, a lufi tovább növekszik
egészen addig, amíg a túlnyomás eléri a 20 vízcm-es értéket, azaz a folyadékoszlop
már ekkor teljes egészében a jobb oldali csőszár függőleges részébe kerül. Innentől
a nyomás nem növekszik tovább, és így a lufi mérete is egy ideig állandó marad,
a kompresszor pedig immár gyorsabban emeli a vízoszlopot a csőben (hiszen a
lufiba már nem kell levegőt fújnia). Amikor a víz elkezd kifolyni a csőből, akkor
a nyomás, és így a lufi mérete is csökkenni kezd. Innentől a kompresszorból és a
leeresztő lufiból kiáramló levegő is az egyre kisebb tömegű vízoszlopot nyomja ki,
amely így egyre gyorsulva „kilövell” a csőből. Amikor minden víz kifolyt a csőből,
a lufi visszakerül a teljesen felfújatlan állapotba (a kompresszor pedig ekkortól a
szabadba fújja a levegőt).
A lufi maximális méretéhez tartozó λ értéket a p(λ) = 20 vízcm egyenlet megol-
dása adja, amelyet iterálással vagy grafikusan (2. ábrán zöld vonal) kaphatunk meg:
λmax ≈ 1,145, azaz a lufi átmérője a folyamat során mindössze 14,5%-kal növekszik
meg az eredeti méretéhez képest.
Megjegyzések. 1. A folyamatok időbeliségének kvantitatív vizsgálatához további nume-
rikus adatok szükségesek. A 3. ábrán látható grafikonok a következő feltevésekkel készül-
tek: a lufi kezdeti sugara 2,5 cm, a manométer csövének belső keresztmetszete 0,1 cm2
,
az alsó ívének hossza 4 cm, a kompresszor térfogatárama 0,54 cm3
, amivel a feladat-
ban szereplő λ = 1,05 érték és s = 5 cm folyadékszál-elmozdulás épp 20 s alatt történik
meg. A grafikonokon a folyadékszál s elmozdulása, a bezárt levegő p túlnyomása és a lufi
méretét leíró λ paraméter látható az idő függvényében.
2. Ha a folyadékszál hossza nagyobb lenne, mint a maximális nyomáshoz tartozó
25,65 cm, akkor a nyomás elérné a maximális értéket, majd csökkenni kezdene, de a
lufi tovább fújódna, míg λ ≈ 3 értéknél kipukkadna.
Középiskolai Matematikai és Fizikai Lapok, 2025/1 43
i
i
2025.1.4 – 21:12 – 44. oldal – 44. lap KöMaL, 2025. január
i
i
i
i
i
i
20
0
10
p (vízcm)
1
1,05
1,10
1,15
t (s)
0 20 60 40
0
20
10
40
30
s (cm)
t (s)
0 20 60 40
t (s)
0 20 60 40
3. ábra
