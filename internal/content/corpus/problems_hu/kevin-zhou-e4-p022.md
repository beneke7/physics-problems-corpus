---
id: "kevin-zhou-e4-p022"
source: "kevin-zhou"
native_id: "KZ-E4-P022"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-e4-p022"
topic: [Elektromágnesség, Relativitáselmélet]
subtopic: [Ampère-törvény, mágneses pinch-hatás, Lorentz-összehúzódás]
math_tools: [vektoranalízis, algebra]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E4.txt"
source_url: "sources/kevin_zhou/site/handouts/E4.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Példa 7: Griffiths 5.40

        Mivel a párhuzamos áramok vonzzák egymást, egyetlen vezetőben az áramoknak össze kell húzniuk a vezetéket.
        Ennek becsléséhez tekintsünk egy r sugarú, hosszú vezetéket. Tegyük fel, hogy az atommagok rögzítettek és
        homogén sűrűségűek, az elektronok pedig v sebességgel mozognak a vezető mentén. Továbbá tegyük fel, hogy az
        elektronok összehúzódnak, és egy r′ < r sugarú, homogén negatív töltéssűrűségű hengert töltenek ki, miközben
        a vezető összességében semleges. Határozzuk meg r′-t.

        Megoldás
       Az elektronok összehúzódása összességében befelé mutató elektromos teret hoz létre, ezért az elektronokra
       kifelé mutató elektromos erő hat, amely kiegyenlíti a sugárirányú, befelé mutató mágneses erőt. Pontosabban
       az egyensúly akkor áll fenn, amikor E = vB.

       Legyen az atommagok és az elektronok töltéssűrűsége ρ+ , illetve ρ− . Az s ≤ r′ sugarú helyen a mágneses tér
       Ampère-törvényből határozható meg, amely szerint
                                                                   µ0 ρ− vs
                                   (2πs)B = µ0 (ρ− v)(πs2 ), B =            .
                                                                       2
       A megfelelő elektromos tér a Gauss-törvényből adódik:
                                         1                             1
                              (2πs)E =      (ρ+ + ρ− )πs2 ,      E=       (ρ+ + ρ− )s.
                                         ϵ0                           2ϵ0
        Vegyük észre, hogy E és B is arányos s-sel. Így az E = vB feltétel minden s-re egyszerre teljesülhet, ami
        igazolja, hogy a ρ+ és ρ− homogenitására vonatkozó feltevésünk önkonzisztens.

        Ezeket az eredményeket az E = vB feltételbe behelyettesítve
                                                                   v2
                                     ρ+ + ρ− = ρ− (ϵ0 µ0 v 2 ) = ρ− 2 .
                                                                   c
       Ez a speciális relativitáselmélet Lorentz-faktorával írható fel:
                                                                1
                                       ρ− = −γ 2 ρ+ ,     γ=p            .
                                                             1 − v 2 /c2
        Mivel a vezető összességében semleges, ρ− r′2 + ρ+ r2 = 0, ezért
                                                          r
                                                     r′ = .
                                                          γ


                                                         14


    Kevin Zhou                                                               Physics Olympiad Handouts



       Nemrelativisztikus mozgásnál az összehúzódás rendkívül kicsi. (Plazmákban azonban, ahol a pozitív töltések is
       szabadon mozoghatnak, ez az úgynevezett pinch-hatás igen jelentős lehet.)
