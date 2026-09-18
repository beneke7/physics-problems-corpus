---
id: kevin-zhou-notes-phy-ex053
source: kevin-zhou-notes
native_id: "phy Example 053"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex053
topic: [mechanika]
subtopic: [folytonos közegek, lökéshullámok]
math_tools: [differenciálegyenletek, megmaradási törvények, skálázási érvek]
format: explanation
kind: reference_example
has_solution: false
has_figure: true
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "6224-6474"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Egy tompa test szuperszonikus sebességgel haladva „orrhullámot” kelt maga előtt, amint az
ábra mutatja. (Éles csúcsú test esetén ehelyett a testhez csatolt kúpos lökéshullámot kapnánk,
amelyet Mach-kúpnak nevezünk.)



Ezen a lökéshullámon áthaladva a folyadék tulajdonságai szakadásszerűen megváltoznak. Az
egyszerűség kedvéért „normális” lökéshullámra összpontosítunk, amelyben a lökéshullám merőleges a
folyadék sebességére; ez a rajzon látható orrhullám elülső csúcsára alkalmazható. Állandósult
állapotban, a testhez rögzített vonatkoztatási rendszerben a tömeg, a lendület és az energia
megmaradását alkalmazhatjuk a lökéshullámon keresztül, amiből
                                                                    1 2           1
                    ρ1 v1 = ρ2 v2 ,   ρ1 v12 + p1 = ρ2 v22 + p2 ,     v1 + cp T1 = v22 + cp T2 .
                                                                    2             2
A tökéletes gáz törvényét használva az energiamegmaradás feltétele átírható:
                                       1 2      γ p1    1        γ p2
                                         v1 +          = v22 +          .
                                       2      γ − 1 ρ1  2      γ − 1 ρ2
Ezeket az egyenleteket Rankine–Hugoniot-feltételeknek nevezzük. Célszerű a megoldásokat a
lökéshullám előtti Mach-számmal kifejezni, ahol M = v1 /c1, és c1 = γp1 /ρ1 . Ekkor

                            p2   2γM 2 − (γ − 1)          ρ2   v1     (γ + 1)M 2
                               =                 ,           =    =                .
                            p1       γ+1                  ρ1   v2   2 + (γ − 1)M 2

A hőmérsékletek arányát a tökéletes gáz törvénye adja meg:
                                                    T2   p2 ρ 1
                                                       =        .
                                                    T1   p1 ρ 2
Az M → ∞ határesetben ezek az eredmények a következőképpen egyszerűsödnek:

                           p2    2γ              ρ2   γ+1           T2   2γ(γ − 1) 2
                              =     M 2,            =     ,            =           M .
                           p1   γ+1              ρ1   γ−1           T1    (γ + 1)2

Ezek az eredmények Laval-fúvókában kialakuló lökéshullámokra is alkalmazhatók. Ferde
lökéshullám esetén, amilyen az orrhullám más részein fordul elő, az eredmények azonosak, azzal a
különbséggel, hogy a vi-t a lökéshullámra merőleges sebességkomponensként kell értelmezni; a
érintőirányú sebesség változatlan.

Megjegyzés. A Rankine–Hugoniot-feltételek szimmetrikusan kezelik a lökéshullám két oldalát, a
valóságban azonban a termodinamika második főtétele miatt T2 > T1 kell legyen, mivel a mozgási
energia hőenergiává alakul. Vegyük észre, hogy a torlóponti hőmérsékletre kapott korábbi eredményünk
akkor is teljesen helyes, ha van lökéshullám, és akkor is, ha nincs, mivel csak a Bernoulli-tételt
használta, amely a Rankine–Hugoniot-feltételek egyike. Csak a p ∝ ργ izentrópikus feltevés romlik el.

4.5     Viszkozitás
Végül a viszkozitás figyelembevételével eljutunk a teljes Navier–Stokes-egyenletekhez. Az
intuíció kedvéért néhány példával kezdünk, és mindvégig összenyomhatatlan áramlást tételezünk fel.

  • A viszkozitás a sebességgradienssel ellentétes nyírófeszültség. Newtoni folyadékban feltesszük,
    hogy a kettő arányos, ezért egy vx (y) áramlásra

                                                                dvx
                                                      σxy = η
                                                                dy

      ahol η-t (dinamikai) viszkozitásnak nevezzük. A viszkozitás mértékegységének többféle neve
      van: 1 Pa s = 1 Poiseuille = 0.1 poise.



 • Például egy tökéletes gázra kinetikus gázelmélettel megmutathatjuk, hogy
                                            √
                                              kB T m
                                        η∼           ∼ ρλv
                                               σ
   ahol σ az ütközési hatáskeresztmetszet, m egy molekula tömege, λ pedig a szabad úthossz.
   Talán meglepő módon a viszkozitás T négyzetgyökével skálázódik, és állandó hőmérsékleten
   független a sűrűségtől. Folyadékokban a viszkozitás általában csökken a hőmérséklet növekedésével.

 • Gyakran hasznos a kinematikai viszkozitással dolgozni:
                                                            η
                                                       ν=
                                                            ρ

   mivel ez közvetlenül meghatározza a folyadék gyorsulását. Tökéletes gázban ν ∝ T 3/2 /p.

 • Első példaként tekintsünk síkbeli, összenyomhatatlan áramlást, amelyben a sebesség vx (y, t).
   Ebben az esetben nincs konvektív gyorsulás, ezért testierők hiányában
                                                  ∂vx    ∂ 2 vx
                                                      =ν
                                                   ∂t    ∂y 2
   ami ν diffúziós állandójú diffúziós egyenlet alakú.

 • Példaként tegyük fel, hogy egy lemezt keresztirányban mozgatunk, és a peremfeltétel

                                           vx (0, t) = u0 cos(ωt).

   Ekkor az állandósult állapot megoldása
                                                                             r
                                                 −ky                             ω
                              vx (y, t) = u0 e         cos(ky − ωt),    k=
                                                                                 2ν
   így a nyíróhullám 1/k távolságra terjed be a folyadékba.

 • Másik példaként tegyük fel, hogy egy „Gauss-folyóval” kezdünk,
                                                                2   2
                                           vx (y, 0) = u0 e−y /a .

   A későbbi időpontokban a megoldás
                                                              y2

                                              u0 a
                                vx (y, t) = √         exp − 2
                                             a2 + 4νt      a + 4νt
   ami miatt a folyó idővel szétterül.
                                           √ Ha a kezdeti szélesség kicsi, a lendület idővel a
   δ ∼ 2 νt szélességen diffundál. Gyenge viszkozitás esetén ez az ekkor kialakuló határrétegek
   tipikus szélessége.

 • Végső példaként tegyük fel, hogy egy lemezt hirtelen meglökünk,

                                             vx (0, t) = u0 θ(t).

   Ezt Stokes első problémájának nevezik. Mivel a δ-n kívül nincs más hosszskála a problémában,
   a megoldásnak csak ettől kell függnie:
                                                            √
                                        vx (y, t) = u0 f (y/ νt).



    Ezt a próbafüggvényt behelyettesítve kapjuk:
                                                                 Z ∞
                                  1                         1             2
                           f (s) + sf ′ (s) = 0,
                            ′′
                                                   f (s) = √           e−u /4 du.
                                  2                          π   s

    Néha a határréteg vastagságát úgy definiálják, mint azt a távolságot, ahol a sebesség u0 /100-ra
    csökken; ebben az esetben δ99 = 3.64 √νt.

 • Vegyük észre, hogy a folyadékon belüli viszkozitás csupán a perdületet szállítja benne, összhangban
   a perdületmegmaradással. Ebben a példában a perdület tisztán a lemez meglökésekor kifejtett
   külső forgatónyomatékból származik. Továbbá minden példában a sebesség változásai azonnal
   terjednek, ami ismét az összenyomhatatlanság feltevésének következménye.

Most felírjuk az összenyomhatatlan áramlás Navier–Stokes-egyenleteit.

 • Feltesszük, hogy a folyadék izotróp és összenyomhatatlan, a feszültségtenzor pedig szimmetrikus.
   Ekkor a Newtoni folyadék legáltalánosabb lehetséges feszültségtenzora, amelyben a nyírófeszültségek
   csak a sebesség gradiensétől függenek,

                                    σij = −p δij + η(∇i vj + ∇j vi ).

   Ha a folyadék homogén, vagyis η állandó, az ebből adódó erősűrűség
                                  X
                                       ∇j σij = −∇i p + η∇2 vi .
                                       j

   A feszültségtenzor a Galilei-invariancia miatt nem tartalmazhat közvetlenül a sebességtől függő
   tagokat.

 • Összehasonlításképpen rugalmas szilárd test esetén azt tettük fel, hogy a nyírófeszültség arányos
   a deformációval; Newtoni folyadék esetén ehelyett azt tételezzük fel, hogy a deformáció időbeli
   deriváltjával, vagyis a deformációsebességgel arányos. Vannak olyan folyadékok is, amelyekben a
   nyírófeszültség bonyolultabban függ a sebességgradiensektől, például a ketchup, a zselé és a gyurma,
   valamint olyan viszkoelasztikus anyagok, amelyek egyszerre rugalmasak és viszkózusak.

 • A fenti erősűrűséget behelyettesítve Cauchy mozgásegyenletébe azt kapjuk, hogy
                            ∂v              f    ∇p
                               + (v · ∇)v =    −    + ν∇2 v,           ∇·v =0
                            ∂t              ρ0   ρ0
   ezek az összenyomhatatlan, izotróp, homogén Newtoni folyadékok Navier–Stokes-egyenletei. Az ilyen
   folyadékok összetett dinamikája a tehetetlenségnek, amelyet a konvektív tag (v · ∇)v képvisel, és a
   viszkozitásnak, amelyet a ν∇2 v képvisel, az összjátékából ered.

 • Ezeket az egyenleteket megfelelő peremfeltételekkel kell kiegészíteni. Két folyadék, illetve egy
   folyadék és egy szilárd test határán a sebesség normális komponensének nyilvánvalóan folytonosnak
   kell lennie. Finomabban: a sebesség érintőirányú komponensének is folytonosnak kell lennie; kezdetben
   nem az, ezért gyorsan határréteg alakul ki, amely ezt biztosítja. Ahogy korábban érveltünk, σ · n̂ is
   folytonos.

 • Ezekből levezethető, hogy a nyomás folytonos egy szilárd falnál, ami szilárd testeknél nem volt
   igaz. Tegyük fel, hogy a fal z = 0-nál van. Az origóban ∇x v = ∇y v = 0, mivel a sebesség eltűnik
   a falnál. Az összenyomhatatlanság miatt a falnál ∇z vz = 0 is, tehát a nyírófeszültség eltűnik a
   falnál, és így σ · n̂ = −pn̂ folytonos, vagyis p is az.



 • Ennek az egyenletnek a rotációját véve
                                         ∂ω
                                            = ∇ × (v × ω) + ν∇2 ω
                                         ∂t
    ami megerősíti, hogy a viszkozitás diffundálja az örvényességet, ahogy azt a fenti példákban láttuk.

 • Tegyük fel, hogy a sebesség egy tipikus értéke u egy L tipikus méretű testen. A konvektív és
   viszkózus tagok arányát a Reynolds-számmal jellemezhetjük:
                                           |(v · ∇)v|   u2 /L   uL
                                    Re ∼         2
                                                      ∼       ∼    .
                                             |ν∇ v|     νu/L2    ν
    A Re értékétől függően több, minőségileg különböző tartomány van.

     – Re ≪ 1 esetén az áramlás „kúszó”, és a viszkozitás uralja. A mikroorganizmusok ebben a világban
       élnek. Érdekes leírásért lásd a Life at Low Reynolds Number című művet.
     – Re ∼ 1 esetén a viszkozitás továbbra is nagyon fontos; a legyek ebben a világban élnek. Ebben a
       tartományban az áramlás rendezett és réteges, amit laminárisnak nevezünk.
     – Re ≫ 1 esetén turbulencia lép fel a vele járó szabálytalan viselkedéssel. Ez a tartomány fontos a
       járművek és a mindennapi életben előforduló emberi méretű testek esetében.

 • A Reynolds-szám jelentőségét más módon is kiemelhetjük: dimenziótlanítjuk a Navier–Stokes-
   egyenleteket. Állandósult, külső erők nélküli áramlásnál ez leegyszerűsödik:

                                                    ˜ + 1 ∇
                                               ˜ = −∇p̃
                                         (ṽ · ∇)ṽ        ˜ 2 ṽ
                                                        Re
    ahol a ρ0 , u és L skálákat használtuk a dimenziótlan változók definiálására:
                                                                           1˜
                             v = U ṽ,    x = Lx̃,   p = ρ0 U 2 p̃,   ∇=     ∇.
                                                                           L
    Ez azt jelenti, hogy egy repülőgép aerodinamikai tulajdonságait szélcsatornában modellen
    szimulálhatjuk, ha ρ0-t és u-t úgy skálázzuk, hogy a Reynolds-szám azonos maradjon. Szuperszonikus
    repülőgépeknél az összenyomhatóság fontos, ezért a Mach-számot is azonosan kellene tartanunk.

Végül az összenyomható áramlás néhány bonyolultságát vizsgáljuk.

 • Ebben az esetben a feszültség ∇ · v-től is függhet, és szokás a következőképpen definiálni:

                                                        2
                        σij = −p δij + η ∇i vj + ∇j vi − δij ∇ · v + ζδij ∇ · v
                                                        3
    ahol ζ-t térfogati vagy tágulási viszkozitásnak nevezzük, szemben az η-val, amelyet nyírási
    viszkozitásnak nevezünk. E definíció célja, hogy a középső tag nyom nélküli legyen, így η nem
    befolyásolja a mechanikai nyomást.

 • A mozgásegyenletek ekkor

             ∂v                                                                   ∂ρ
         ρ       + (v · ∇)v) = f − ∇p + η∇2 v + (ζ + η/3)∇(∇ · v),                   + ∇ · (ρv) = 0
              ∂t                                                                  ∂t
    ahol ismét állandó η-t és ζ-t tételeztünk fel. Ezek az egyenletek barotróp folyadék esetén zártak.
    Ha p = p(ρ, T ), akkor a T fejlődésének leírásához egy differenciális hőegyenletre is szükségünk
    lenne. Az η és ζ viszkozitások szintén függhetnének T-től.



  • Ebben az összenyomható esetben a sebesség és a σ · n̂ folytonos marad a határfelületeken, a nyomás
    azonban már nem szükségképpen folytonos. Emellett lökéshullámfrontok is kialakulhatnak. Bár a
    viszkozitás bevezetése elvileg lehetővé teszi, hogy a lökéshullámfrontokat folytonosként írjuk le,
    a gyakorlatban gyakran olyan vékonyak, hogy a kontinuumközelítés érvényét veszti. Ezért valódi
    szakadásokként kell kezelnünk őket, és a megmaradási törvényeket kell alkalmaznunk rajtuk keresztül.

  • A szilárd testekre kapott korábbi eredményeinkből kiindulva a belső feszültségek ellenében végzett
    munka sebessége
                                                                                  
                     Z X                   Z                    X
                                                                    2
                Ẇ =        σij ∇j vi dV =     −p∇ · v + 2η       vij + ζ(∇ · v)2  dV.
                         V   ij                  V                          ij

    Ahogy várható, a viszkózus tagok mindig pozitívak, mivel energiát disszipálnak.
