---
id: "kevin-zhou-m1-p003"
source: "kevin-zhou"
native_id: "KZ-M1-P003"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m1-p003"
topic: [mechanika]
subtopic: [közegellenállás, differenciálegyenletek, harmonikus mozgás, lineáris rendszerek]
math_tools: [analízis, differenciálegyenletek, komplex számok]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M1.txt"
source_url: "sources/kevin_zhou/site/handouts/M1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

rugalmasan pattan vissza, miközben ugyanaz a négyzetes közegellenállás hat rá, mint a 2. feladatban. Határozzuk meg azt a maximális magasságot, ameddig ezt követően felemelkedik.
    (Tipp: ne próbáljuk felhasználni a 2. feladatban kapott eredményeinket.)
       Megjegyzés
       Hogyan függ egy csónak végsebessége az evezősök N számától? Egy könnyű, gyorsan haladó csónakra négyzetes súrlódás hat,
       ezért a közegellenállási erő v 2 A-val arányos, ahol A a csónak víz alá merülő keresztmetszeti területe. Egy N evezős számára
       tervezett csónak víz alá merülő térfogata V ∝ N, alakja pedig áramvonalas, ezért A ∝ V 2/3.
       Így a szükséges bemenő teljesítmény

                                             P = F v ∝ v 3 N 2/3 .

       Az evezősök által leadott teljesítmény N-nel arányos, és e két eredményt kombinálva kapjuk a meglepően gyenge v ∝ N 1/9
       függést, amely meglehetősen jól egyezik az olimpiai evezős idők adataival. Ez a becslés a Barrow által írt
       100 Essential Things You Didn’t Know About Sport című szórakoztató könyvből származik.

       1. ötlet
       Közönséges differenciálegyenletnek nevezzük az olyan egyenletet, amely egy x(t) mennyiséget és annak deriváltjait tartalmazza.
       A fizikában általában legfeljebb másodrendű differenciálegyenletekkel foglalkozunk; ezekben szerepelhet x, első deriváltja
       ẋ = v és második deriváltja ẍ = a, de magasabb rendű deriváltak nem. Ez azt jelenti, hogy a megoldást a kezdeti helyzet és
       a kezdeti sebesség meghatározhatja. (Az elsőrendű differenciálegyenletekhez csak egy kezdeti helyzet szükséges, és gyakran
       szétválasztással és integrálással oldhatók meg.)

       Itt arra az esetre is összpontosítunk, amikor a differenciálegyenlet lineáris és homogén, vagyis minden tag közvetlenül arányos
       x-szel, ẋ-vel vagy ẍ-vel. Például egy csillapított, gerjesztett harmonikus oszcillátort az alábbi egyenlet ír le:
                                              mẍ = −bẋ − kx.
       Az ilyen differenciálegyenletek megoldásai eleget tesznek a szuperpozíció elvének: ha x1 (t) és x2 (t) egyaránt megoldás,
       akkor c1 x1 (t) + c2 x2 (t) is az. A szuperpozíció elve akkor is érvényes, ha az m, b és k együtthatók időfüggők, de mi
       az időeltolás-invariáns esetre összpontosítunk.

       Ha a fenti egyenlethez hozzáadnánk egy f (t) gerjesztő erőt, a differenciálegyenlet többé nem lenne homogén. Ezzel az esettel
       az M4-ben foglalkozunk részletesebben.


                                                      2
    Kevin Zhou                                                              Physics Olympiad Handouts


       2. ötlet
       A lineáris, homogén, időeltolás-invariáns differenciálegyenletek mind megoldhatók egyetlen módszerrel. Először vegyük észre,
       hogy az x(t) mennyiséget komplex x̃(t) változóvá tehetjük, és a differenciálegyenletet a komplex számok felett oldhatjuk meg.
       Ha van komplex megoldásunk, abból a valós rész képzésével valós megoldást kaphatunk. Ezután egy komplex exponenciális függvényt
       veszünk fel:

                                                 x̃(t) = eiωt .

       Ezt a differenciálegyenletbe behelyettesítve megkapjuk ω megengedett értékeit, az általános megoldást pedig a komplex
       exponenciálisok szuperpozíciójával állíthatjuk elő. Ez szinte minden ilyen egyenletre működik; a fennmaradó esetekkel a
       7. feladatban foglalkozunk.

       2. példa

       Oldjuk meg a mẍ + kx = 0 egyenlettel leírt egyszerű harmonikus oszcillátort a fenti elvek segítségével.

       Megoldás
       Először áttérünk egy komplex differenciálegyenletre:

                                                ¨ + kx̃ = 0.
                                               mx̃

       Feltesszük, hogy x̃(t) = eiωt . Ezt behelyettesítve és a láncszabályt alkalmazva azt kapjuk, hogy

                                           m(iω)2 eiωt + keiωt = 0

       majd az eiωt kiesése és az egyenlet megoldása után két megoldást kapunk:
                                                              p
                                         ω = ±ω0 ,     ω0 =    k/m.

       Mivel ez egy másodrendű lineáris differenciálegyenlet, az általános megoldást e két komplex exponenciális szuperpozíciója adja:

                                          x̃(t) = Aeiω0 t + Be−iω0 t

       ahol A és B tetszőleges komplex számok. Az x̃(t) valós része kielégíti az eredeti valós differenciálegyenletet,
       vagyis ma + kx = 0, és

                                     Re x̃(t) = C cos(ω0 t) + D sin(ω0 t)

       ahol C és D valós számok; ez egy ω0 körfrekvenciájú általános szinuszos függvény.
