---
id: eotvos-2023-laser-diffraction-grid
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2023-laser-diffraction-grid
solution_type: official
source_document: solution-document-eotvos-2023-s
source_pdf: cache/phoxiv/eotvos/2023_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2023_S.pdf."
---

3 Egy átlátszatlan lapon egyforma, kicsiny lyukak
9. ábra
találhatóak szabályos négyzetrács elrendezésben. Ha a
lapot monokromatikus, a rácsállandónál jóval nagyobb
hullámhosszúságú lézerfénnyel merőlegesen megvilágı́t-
juk, akkor a távoli ernyőn szabályos négyzetrács elren-
dezésű, I0 intenzitású fénypöttyöket láthatunk.
Hogyan változik meg az elhajlási kép, ha a lapon
minden második sor minden második nyı́lását eltakar-
juk az ábrán látható módon? Mekkora lesz az egyes fény-
pöttyök intenzitása?
(Széchenyi Gábor)
Középiskolai Matematikai és Fizikai Lapok, 2024/1 47
i
i
2024.1.7 – 15:30 – 48. oldal – 48. lap KöMaL, 2024. január
i
i
i
i
i
i
Megoldás. Sajnálatos módon a feladat szövegében maradt egy hiba: a lézerfény-
ről szóló
”
a rácsállandónál jóval nagyobb hullámhosszúságú” félmondat ellentmond
annak, hogy a távoli ernyőn szabályos négyzetrács elrendezésű diffrakciós kép ke-
letkezik. Helyesen
”
a rácsállandónál kisebb hullámhosszúságú”-t kellett volna ı́rni
(a nagyon kicsi hullámhossz esetén a diffrakciós ábra nagyon apró lenne, vagy na-
gyon messze kellene helyezni az ernyőt). A megoldásban, ahogy látni fogjuk, nincs
szükség a hullámhosszra, ezért kerülhette el a hiba sokszori átolvasás után is a sze-
münket. Elnézést kérünk érte!
A Huygens–Fresnel-elv alapján a nyı́lások mindegyikéből azonos fázisú gömb-
hullámok indulnak ki. Az eredeti rács diffrakciós ábráján ott jelennek meg fénylő
pontok, ahol a nyı́lásokból kiinduló gömbhullámok konstruktı́van interferálnak. Ha
a nyı́lások egynegyedét letakarjuk, akkor a korábbi fénylő pontok helyére csak há-
romnegyed annyi nyı́lásból érkeznek be a gömbhullámok, ı́gy a tér amplitúdója is
háromnegyedére csökken. Az intenzitás az amplitúdónégyzettel arányos, ı́gy ezen
fénypöttyök intenzitása 9/16I0 lesz. Továbbiakban azt a kérdést vizsgáljuk, hogy
megjelennek-e további intenzitásmaximumok az ernyőn.
A feladatban szereplő hiányos rács (H rács) felfogható úgy mint az eredeti
négyzetrács (E rács) és egy ritkább négyzetrács (R rács) különbsége. Mivel a
diffrakciót leı́ró Maxwell-egyenletek lineárisak, ı́gy az E rács és R rács esetében
kialakuló tér különbségének a H rács által keltett térrel kell megegyeznie. Érdemes
megjegyezni, hogy ilyenkor a hullámok fázishelyes különbségét kell képezni, nem
lehet közvetlenül az intenzitásokat kivonni.
Az E rács esetében a diffrakciós mintázatot ismerjük, ez négyzetrács elrendezé-
sű fénypöttyök összessége. A diffrakciós ábra rácsállandója legyen a, a fénypöttyök
helyén a tér amplitúdója pedig A.
Az R rács egy kétszer akkora rácsállandójú négyzetrács, ı́gy a megjelenő diff-
rakciós képet szintén négyzetrács elrendezésű fénypöttyök alkotják, de a rácsállandó
a/2, azaz a diffrakciós ábra sűrűbb, mint az eredeti esetben. (Ez az inverziós tulaj-
donság már a hagyományos optikai rácsnál is megmutatható. Ha az optikai rácsot
kétszeresére megnyújtjuk, akkor a diffrakciós ábrát a felére kell összenyomni.) Az R
rács esetében a fénypöttyök helyén a tér amplitúdója A/4, mivel csak negyedannyi
nyı́lás van az apertúrán, ı́gy a hullámok eredő amplitúdója 4-szer kisebb.
Következőkben az E és az R rács esetében kialakuló téreloszlások különbségét
kell képezni. Azokban a pontokban, ahol az E és R rács esetében is nem nulla a tér,
ott az első bekezdésben leı́rt gondolatmenetet megismételve A − A/4 = 3/4A lesz
az amplitúdó értéke, ı́gy az intenzitás 9/16I0-nak adódik. Azokban a pontokban,
H rács elhajlási képe E rács elhajlási képe R rács elhajlási képe
10. ábra
48 Középiskolai Matematikai és Fizikai Lapok, 2024/1
i
i
2024.1.7 – 15:30 – 49. oldal – 49. lap KöMaL, 2024. január
i
i
i
i
i
i
ahol csak az R rács esetében nem nulla a tér, ott a különbség −A/4-nek adódik.
A negatı́v előjel ara utal, hogy a H rács ezen a pontjaiban éppen ellentétes a fázis.
Az intenzitás ismételten az amplitúdónégyzettel arányos, ı́gy ezekben a pontokban
1/16I0 intenzitású fénypöttyöket láthatunk.
A letakart rács elhajlási képe egy kétszer sűrűbb négyzetrács, ahol az eredeti
fénypöttyök helyén az intenzitás 9/16I0, az újonnan megjelenő pontok intenzitása
pedig 1/16I0. A megoldás elsőre kissé meglepő. Letakartunk néhány pontot az
apertúrán, melynek hatására nem eltűntek a pontok az elhajlási ábráról, hanem
újabbak jelentek meg.
Ellenőrzésképpen számı́tsuk ki, hogyan változott meg az ernyőn mérhető össz-
intenzitás a letakarás nyomán. Kezdetben I0 intenzitású fénypöttyeink voltak, me-
lyek intenzitása lecsökkent 9/16I0-ra. Ellenben megjelentek kisebb intenzitású pon-
tok is, minden nagy intenzitású pontra három kis intenzitású pont jut. Szebben
megfogalmazva, a H rács elhajlási képének elemi cellájában egy 9/16I0 és három
1/16I0 fénypötty található. Az elemi cellában ı́gy az összintenzitás 3/4I0. Az er-
nyőn mérhető összintenzitás a 3/4-edére csökkent, ami megegyezik az előzetes el-
várásunkkal, miszerint a nyı́lások 1/4-ét takartuk el, ı́gy a kezdeti esethez képest
csak a fény intenzitásának 3/4-e jut át.
❄
Az ünnepélyes eredményhirdetésre és dı́jkiosztásra 2023. november 24-én dél-
után került sor az ELTE TTK Konferenciatermében. Megemlékeztünk az 50 és 25
évvel ezelőtti Eötvös-versenyről, ismertettük az akkori feladatokat és a győztesek
nevét. Ezután következett a 2023. évi verseny feladatainak és megoldásainak bemu-
tatása. Az 1. és 2. feladat megoldását Vankó Péter, a 3. feladatét Széchenyi Gábor
ismertette.
Az esemény végén került sor az eredményhirdetésre. A dı́jakat Ormos Pál, az
Eötvös Loránd Fizikai Társulat elnöke adta át.
I. dı́jat a versenybizottság nem adott ki.
A harmadik feladat helyes, valamint az első és második feladat hiányos meg-
oldásáért második dı́jat nyert Fey Dávid, az ELTE fizika BSc szakos hallgatója, aki
a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnáziumban érettsé-
gizett Nagy Piroska Mária tanı́tványaként.
A második feladat helyes megoldásáért és a másik két feladatban elért rész-
eredményekért, illetve az első feladat hiányos megoldásáért és a második feladat-
ban elért részeredményekért harmadik dı́jat nyert Molnár Barnabás, az ELTE fizika
BSc szakos hallgatója, aki a Budapesti Fazekas Mihály Gyakorló Általános Iskola
és Gimnáziumban érettségizett Nagy Piroska Mária tanı́tványaként (2. helyezett)
és Seprődi Barnabás, az Óbudai Árpád Gimnázium 12. osztályos tanulója, Gärtner
István tanı́tványa (3. helyezett).
Az első feladat hiányos megoldásáért dicséretet kapott Beke Bálint, a BME
fizikus-mérnök BSc szakos hallgatója, aki az ELTE Apáczai Csere János Gyakorló
Gimnázium és Kollégiumban érettségizett Zsigri Ferenc tanı́tványaként (4. helye-
zett), Sarkadi Sándor István, az ELTE fizika BSc szakos hallgatója, aki a nyı́regy-
házi Szent Imre Katolikus Gimnáziumban érettségizett Bartáné Cserny Katalin
Középiskolai Matematikai és Fizikai Lapok, 2024/1 49
