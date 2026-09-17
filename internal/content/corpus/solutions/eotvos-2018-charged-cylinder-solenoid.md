---
id: eotvos-2018-charged-cylinder-solenoid
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2018-charged-cylinder-solenoid
solution_type: official
source_document: solution-document-eotvos-2018-s
source_pdf: cache/phoxiv/eotvos/2018_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2018_S.pdf."
---

3. Egy rögzített, vízszintes tengely¶, légmagos, hosszú szolenoid keresztmetszete R sugarú kör. A teker s belsejében
egy (nem-mágneses) szigetel® anyagból készült, r sugarú tömör henger helyezkedik el. A szigetel® henger pozitívan
töltött, egyenletes térfogati eloszlásban. A szolenoidba id®ben egyenletesen, gyorsan növekv® er®sség¶ áramot vezetünk
az ábrán látható körüljárás szerint.
Milyen irányban indul el a szigetel® henger? Hogyan függ a válasz az r/R aránytól? Mekkora r/R arány esetén
marad a töltött henger nyugalomban?
A tapadási súrlódás elegend®en nagy ahhoz, hogy a henger ne sússzon meg. A gördülési ellenállástól tekintsünk el!
(Vigh Máté)
Megoldás. A változó (növekv®) er®sség¶ áram hatására a teker s belsejében id®ben változó, homogén mágneses
mez® alakul ki. A változó mágneses mez® a Faraday-törvény értelmében id®ben állandó, forrásmentes és örvényes
elektromos mez®t kelt (4. ábra), amely ered® er®t és forgatónyomatékot fejt ki a töltött hengerre: ez mozdíthatja el
a hengert egyik vagy másik irányban.
4. ábra
5. ábra
6. ábra
Vizsgáljuk az egész elrendezésnek a szolenoid tengelyére mer®leges síkmetszetét! Jelöljük ezen a síkmetszeten a szol-
enoid középpontját C-vel, a szigetel® henger középpontját O-val, a henger és a szolenoid érintkezési pontját pedig P-vel!
A szolenoid belsejében kialakuló indukált elektromos mez® térer®sségét a Faraday-törvényb®l határozhatjuk meg, ha
azt egy C középpontú, r0 sugarú körre alkalmazzuk (5. ábra):
E(r0) · 2πr0 = πr2
0
∆B
∆t | {z }
∆Φ
∆t
, ahonnan E(r0) =
1
2
∆B
∆t
r0.
Ez az összefüggés a balkéz-szabály alapján vektoriálisan is felírható a C pontból a vizsgált pontba mutató r0 vektor
segítségével:
E(r0) = −
1
2
∆B
∆t
eB × r0,
ahol eB = B/|B| a mágneses induk ióvektorral azonos irányú egységvektor.
Vezessük be a 6. ábrán látható r1 és r2 vektorokat, ahol r1 + r2 = r0. Ezek közül r1 =
− − →
CO konstans vektor
(melynek hossza R − r), míg r2 az O pontból abba a pontba mutat, ahol a térer®sségre kíván siak vagyunk. Ennek
felhasználásával a térer®sség így írható:
E(r0) = −
1
2
∆B
∆t
eB × r1
| {z }
E1
−
1
2
∆B
∆t
eB × r2
| {z }
E2
,
Ebben az összegben az E1-gyel jelölt tag homogén, vízszintesen balra mutató elektromos mez®t, az E2-vel jelölt tag
pedig a töltött henger tengelye (O pont) körül örvényl® mez®t jelent. Az indukált elektromos teret tehát felbontottuk
két mez® szuperpozí iójára, ahogy az a 7. ábrán látható.
7. ábra
Azt, hogy a töltött henger jobbra vagy balra indul el az dönti el, hogy a henger legalsó P pontjára vonatkoztatott
ered® forgatónyomaték milyen irányba mutat (erre a pontra nézve ugyanis a súrlódási er®nek, a nyomóer®nek és
a nehézségi er®nek a forgatónyomatéka is nulla). Az elektromos mez® 7. ábrán látható felbontásának az az el®nye,
hogy segítségével könnyen kiszámítható ez az ered® forgatónyomaték.
A homogén E1 mez® |E1|Q nagyságú, a henger O középpontjában ébred® er®t fejt ki a hengerre, melynek forga-
tónyomatéka a P pontra nézve:
M1 = |E1|Qr =
1
2
∆B
∆t
|eB × r1|Qr =
1
2
∆B
∆t
(R − r)Qr,
ahol Q a henger össztöltése, r pedig az er®kar.
Az O pont körül örvényl® E2 mez® ered® er®t a szimmetria miatt nem eredményez. A forgatónyomatékhoz viszont ez
a mez® is ad járulékot, hiszen a henger O pontra nézve átellenes darabkáira ható er®k er®párokat alkotnak. Az er®párok
ered® forgatónyomatéka bármely pontra, így a P és O pontokra számítva is ugyanakkora, de a számolás az O pontra
vonatkoztatva egyszer¶bb. Az O ponttól |r2| távolságra lév®, ∆Q töltés¶ kis darabkára |E2|∆Q er® hat, így az ered®
forgatónyomaték:
M2 =
X
|E2|∆Q|r2| =
1
2
∆B
∆t
X
∆Q|r2|
2
| {z }
1
2Qr2
.
Az összegzésben szerepl® kifejezés éppen olyan alakú, mint a henger tehetetlenségi nyomatéka a szimmetriatengelyére
vonatkoztatva ( sak ott a darabkák ∆Q töltése helyett azok ∆m tömege szerepel). Ezt az analógiát felhasználva
az összegzés eredménye Qr2
/2, így
M2 =
1
4
∆B
∆t
Qr2
.
8. ábra
A P pontra vonatkoztatott M1 forgatónyomaték balra szeretné kitéríteni a töltött hengert, míg az M2 forgatónyo-
maték jobbra (8. ábra). A henger tehát balra indul el, ha:
1
2
∆B
∆t
Q(R − r)r
| {z }
M1
>
1
4
∆B
∆t
Qr2
| {z }
M2
,
azaz ha r/R < 2/3, ellenkez® esetben pedig jobbra. Az r = 2R/3 egyenl®ség fennállása esetén a henger egyáltalán nem
indul el.
Megjegyzés. A hengerre ható, P pontra vonatkoztatott ered® forgatónyomaték irányát a forgómozgással kap so-
latos analógia segítségével is meghatározhatjuk. Vegyük az óramutató járásával ellentétes körüljárási irányokat po-
zitívnak! Tekintsük a hengert egy m tömeg¶, homogén tömegeloszlású, a C pont körül ω < 0 szögsebességgel forgó
merev testnek! Ezen test egy-egy darabkájának sebessége (és emiatt az egységnyi térfogatú kis részének lendülete)
éppen olyan irányú és (egy pozitív arányossági tényez®t®l eltekintve) ugyanolyan nagyságú, mint az eredeti feladatban
az elektromos er®tér által kifejtett er®. Hasonlóan, a forgó merev test kis darabkájának P-re vonatkoztatott perdülete
(impulzusmomentuma) egy arányossági tényez®t®l eltekintve az eredeti feladatban szerepl® er®k P-re vonatkoztatott
forgatónyomatékának felel meg. A kérdés tehát az, hogy milyen el®jel¶ a C pont körül negatív irányban forgó henger
perdülete a P pontra vonatkoztatva.
Egy merev test teljes perdülete a tömegközéppont körüli forgás sajátperdületéb®l és a tömegközéppontba kép-
zelt, annak sebességével mozgó teljes anyagmennyiség pályaperdületéb®l tehet® össze. Esetünkben az O tömegközép-
pont (balra mutató) sebessége vO = (R − r)ω nagyságú, a pályaperdület tehát +mr(R − r)ω, a sajátperdület pedig
−(1/2)mr2
ω. A P pontra vonatkoztatott teljes perdület tehát:
NP = mr(R − r)ω −
1
2
mr2
ω =
mrω
2
(2R − 3r).
Látható, hogy r <
2
3
R esetén N > 0, tehát a henger balra indul el, r >
2
3
R esetén N < 0, azaz a henger jobbra
indul el, míg r =
2
3
R esetén nem jön mozgásba.
(G. P.)
∗
Az ünnepélyes eredményhirdetésre és díjkiosztásra 2018. november 23-án délután került sor az ELTE TTK Konfe-
ren iatermében. Meghívást kaptak az 50 és 25 évvel ezel®tti Eötvös-verseny nyertesei is. Jelen volt az 50 évvel ezel®tti
díjazottak közül Vetier András, aki az akkori feladatok ismertetése után röviden beszélt a versenyhez kap solódó
emlékeir®l, és a 25 évvel ezel®tti díjazottak közül Ková s Krisztián.
Ezután következett a 2018. évi verseny feladatainak és megoldásainak bemutatása. Az 1. feladat megoldását Vankó
Péter, a 2. feladatét Ti hy Géza, a 3. feladatét Vigh Máté ismertette.
Az esemény végén került sor az eredményhirdetésre. A díjakat Sólyom Jen®, az Eötvös Loránd Fizikai Társulat
elnöke adta át.
Els® díjat a versenybizottság nem adott ki.
Az els® feladat hibátlan megoldásáért második díjat nyert Fajszi Bul sú, a Budapesti Fazekas Mihály Gyakorló
Általános Iskola és Gimnázium 11. osztályos tanulója, Csefkó Zoltán és Horváth Gábor tanítványa.
A második feladat lényegében helyes megoldásáért harmadik díjat nyert Hajdú Csanád, a BME 
zikus hallgatója,
a budapesti Eötvös József Gimnázium érettségizett tanulója, Gulyás Erzsébet tanítványa, valamint Vavrik Márton,
a BME 
zikus hallgatója, a budapesti Berzsenyi Dániel Gimnázium érettségizett tanulója, Lendvai Dorottya és Izsa
Éva tanítványa.
Az els® feladat helyes közelít® megoldásáért di séretben részesült Berke Martin, a BME 
zikus hallgatója, a Za-
laegerszegi Zrínyi Miklós Gimnázium érettségizett tanulója, Bóbi s Lilla tanítványa.
A második díjjal Zimányi Gergely adományából 50 ezer, a harmadik díjjal 30 ezer, a di sérettel 20 ezer forint
pénzjutalom járt, a díjazottak tanárai pedig a Typotex Kiadó könyveit kapták. A verseny megszervezését az Eötvös
Loránd Fizikai Társulat a MOL támogatásából fedezte.
Ti hy Géza, Vankó Péter, Vigh Máté
