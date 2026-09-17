---
id: eotvos-2011-toroid-transformer
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2011-toroid-transformer
solution_type: official
source_document: solution-document-eotvos-2011-s
source_pdf: cache/phoxiv/eotvos/2011_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2011_S.pdf."
---

3. feladat. Egy toroid (úszógumi) alakú sovány vasmagra szimmetrikus elrendezésben három egyforma, kövér
elektromágneses teker s van felf¶zve a 4. ábra szerint. Az els® teker sre váltóáramú feszültségforrást kap solunk, a má-
sodik teker s kivezetéseit szabadon hagyjuk, a harmadik teker s satlakozóira pedig voltmér®t kötünk. Ekkor a voltmér®
a feszültségforrás eektív értékének a felét mutatja.
4. ábra
Ezután a második teker s kivezetéseit a K kap solóval rövidre zárjuk. Mit mutat ebben az esetben a voltmér®?
Útmutatás: A teker sek ohmos ellenállása elhanyagolható, a feszültségforrást és a voltmér®t ideálisnak tekinthetjük.
A vasmag mágneses permeabilitása nem függ a mágneses 
uxustól.
(Honyek Gyula)
Megoldás. A könnyebb áttekinthet®ség végett a teker seket már a feladat ábráján megszámoztuk.
A szimmetrikus elrendezés miatt (a középiskolai képlettár jelöléseit követve) a teker sek öninduk iós és köl sönös
induk iós együtthatói között az alábbi összefüggéseket írhatjuk fel:
L11 = L22 = L33, jelöljük L-lel;
L12 = L21 = L13 = L31 = L23 = L32, jelöljük M-mel.
Tekintsük az egyes teker sekben indukált feszültségeket! Minthogy I2 = 0, mert a kap soló nyitva van, valamint
I3 ≈ 0, mert a voltmér® ellenállása nagyon nagy, supán az I1 áram változása indukál feszültséget.
Az 1. teker sben U1 = L
∆I1
∆t
, a 3. teker sben pedig U3 = M
∆I1
∆t
. A feladat szövege szerint U3 =
U1
2
, vagyis M =
L
2
.
Zárjuk a kap solót! Ekkor már a 2. teker sben is fog áram folyni, vagyis az egyes teker sekben indukált feszültségek
így írhatók fel:
U1 = L
∆I1
∆t
+ M
∆I2
∆t
,
U2 = M
∆I1
∆t
+ L
∆I2
∆t
,
U3 = M
∆I1
∆t
+ M
∆I2
∆t
.
Azt kell észrevennünk, hogy a rövidzár miatt U2 = 0. Ezt felhasználva a két áramváltozási sebesség között adódik
egy egyszer¶ összefüggés:
∆I2
∆t
= −
M
L
∆I1
∆t
.
Képezzük az
U3
U1
hányadost:
U3
U1
=
M − M2
L
L − M2
L
=
1
3
.
(Az utolsó lépésnél 
gyelembe vettük, hogy M = L/2).
Tehát a kap soló zárása után a voltmér® a feszültségforrás eektív értékének harmadát fogja mutatni.
Kiegészítés: A vasmag permeabilitásának állandóságát akkor használtuk fel, amikor feltételeztük a teker sek induktivitásának
és a köl sönös induk iós együtthatóknak az állandóságát, vagyis hogy pl. M = L/2 akkor is fennáll, ha zárjuk a kap solót.
Szokatlan volt a feladatban, hogy ebben a tipikusan transzformátoros összeállításban a feszültségek aránya lényegesen eltér
a menetszámok arányától. A mindennapi gyakorlatban ez jól ismert jelenség, inkább az tekinthet® idealizá iónak, hogy az
említett két arány megegyezik. A mágneses mez® kiszóródása a vasmagból általában elkerülhetetlen, ha nem is olyan jelent®s
mindig, mint most, ebben a feladatban.
A verseny eredménye
Els® díjat és 30 ezer forint pénzjutalmat vehetett át Budai Ádám, a BME 
zika BS szakos hallgatója, aki a mis-
kol i Földes Feren Gimnáziumban érettségizett mint Bíró István tanítványa; olimpiai szakkörvezet®je Zámborszky
Feren volt.
Második díjat és 20 ezer forint pénzjutalmat hárman kaptak: Jéhn Zoltán, a BME 
zika BS szakos hallgatója,
aki Pé sett, a PTE Babits Mihály Gyakorló Gimnáziumban érettségizett, tanára a gimnáziumban Kon z Károly,
az olimpiai szakkörön Kotek László volt; Kalina Kende, a ELTE matematika BS szakos hallgatója, aki a Fazekas
Mihály F®városi Gyakorló Gimnáziumban érettségizett Horváth Gábor, Csefkó Zoltán és Szokolai Tibor tanítványaként;
Szabó Attila, a pé si Le®wey Klára Gimnázium 11. évf. tanulója, tanára a gimnáziumban Simon Péter, az olimpiai
szakkörön Kotek László.
Harmadik díjat és 15-15 ezer forint pénzjutalmat vehetett át két versenyz®: Bolgár Dániel, a pé si Le®wey Klára
Gimnázium 12. évf. tanulója, tanárai Almási László és Simon Péter; Ková s Péter, az ELTE Apá zai Csere János
Gyakorló Gimnáziumának 12. évf. tanulója, Pákó Gyula tanítványa.
Hárman kaptak di séretet és 10-10 ezer forint érték¶ könyvjutalmat: Batki Bálint, a BME 
zika BS szakos
hallgatója, aki az ELTE Apá zai Csere János Gyakorló Gimnáziumban érettségizett mint Zsigri Feren tanítványa;
Forman Feren , az ELTE Radnóti Miklós Gyakorló Gimnáziumának 10. évf. tanulója, Honyek Gyula tanítványa;
Jenei Márk, a Fazekas Mihály F®városi Gyakorló Gimnázium 11. évf. tanulója, Dvorák Ce ília és Csefkó Zoltán
tanítványa.
Ünnepélyes díjkiosztás
2011. november 25-én délután 3 órai kezdettel került sor az ünnepélyes eredményhirdetésre és díjkiosztásra. A már
jól bevált hagyományt követve el®ször az 50, majd a 25 évvel ezel®tti Eötvös-verseny feladatainak felidézésére került
sor. Az akkori nyertesek közül többen is eljöttek, szóltak néhány szót emlékeikr®l, azóta befutott pályájukról.
Zakariás László 1961-ben a piaristáknál érettségizett. Az Elektronikus Mér®készülékek Gyárának dolgozójaként
nyerte meg az Eötvös-versenyt, mivel a BME-re nem vették fel. Így emlékezett vissza a fél évszázaddal ezel®tt tör-
téntekre: A M¶szaki Egyetemre második próbálkozásra se vettek fel. Fellebbeztünk. A fellebbezést elutasították.
A minisztériumi fellebbezéshez satoltuk az Eötvös-verseny eredményét. Szeptember végén, a születésnapomon, levél
érkezett a minisztériumból: Örömmel értesítjük, hogy felvételt nyert a Budapesti M¶szaki Egyetem Villamosmérnöki
Karára. Én voltam a világ legboldogabb embere. Tisztelettel és hálával gondolok Ková s Mihály tanár úrra. Fritz Jó-
zsef Mosonmagyaróvárról 
zikusnak jelentkezett az ELTE-re, Molnár Emil a gy®ri Révai Gimnáziumból matematika

zika szakos tanárnak. Mindkett®jüket felvették. Fritz József ma már matematikus akadémikus, Molnár Emil a BME
Geometria tanszékének vezet®jeként ment nyugdíjba. Mindhárman hálával emlékeztek vissza tanáraikra, akik megsze-
rettették velük a 
zikát, a matematikát, felkészítették ®ket a versenyre.
A 25 évvel ezel®tti Eötvös-versenynek két els® helyezettje volt: Kaiser András és Kohári Zsolt. Mindketten eljöttek,
szóltak is a mai nyertesekhez. A többi díjazott közül Drasny Gábor és Gyuris Viktor az Egyesült Államokból levélben
üdvözölték a sikeres versenyz®ket és di sérték egykori 
zikatanárukat, Horváth Gábort. Leveleiket a versenybizottság
tagjai olvasták fel.
Az idei Eötvös-verseny díjait Kroó Norbert akadémikus, az Eötvös Loránd Fizikai Társulat elnöke, Kürti Jen®
professzor, a Társulat f®titkára és a verseny lebonyolítását és díjait anyagilag támogató MOL képviseletében Csernik
Kornél adta át.
A díjazott versenyz®k tanárai a Vin e Kiadó és a Typotex Kiadó könyvei közül válogathattak, és jelent®s kedvez-
ménnyel vehetnek majd részt a 2012. évi Fizikatanári Ankéton.
Az ünnepélyes díjkiosztást követ®, a RAMOSOFT Zrt. támogatásával lebonyolított, jó hangulatú állófogadás részt-
vev®i között ott voltak nem sak az idei, a 25 és 50 évvel ezel®tti díjazottak, de megjelent a 49 évvel ezel®tti Eötvös-
verseny egyik nyertese is.
Remélhet®leg jöv®re is találkozhatunk vele.
