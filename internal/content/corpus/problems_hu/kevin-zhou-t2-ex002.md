---
id: "kevin-zhou-t2-ex002"
source: "kevin-zhou"
native_id: "KZ-T2-EX002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t2-ex002"
topic: [termodinamika és statisztikus fizika]
subtopic: [parciális deriválás, koordináta-transzformációk, termodinamikai változók]
math_tools: [parciális deriválás, differenciálás]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T2.txt"
source_url: "sources/kevin_zhou/site/handouts/T2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T2-EX002

       2. példa: Változócsere

       Ugyanazt a df differenciált leírhatjuk az x és y, illetve az x′ és y koordinátákkal úgy, hogy

                                       ∂f        ∂f        ∂f         ∂f
                                df =        dx +      dy =   ′
                                                                dx′ +       dy
                                       ∂x y      ∂y x      ∂x y       ∂y x′

       Hogyan kapcsolódnak egymáshoz ezek a parciális deriváltak?


                                                          2
Kevin Zhou                                                                  Fizikaolimpiai feladatgyűjtemény


   Megoldás
   A differenciál két alakja rendre dx és dy, illetve dx′ és dy szerint van felírva. Ezért dx-et
   dx′ és dy segítségével kell kifejeznünk; ezt úgy tesszük meg, hogy a 3. ötletet magára x-re
   alkalmazzuk:

                                           ∂x         ∂x
                                    dx =     ′
                                                dx′ +       dy.
                                           ∂x y       ∂y x′

   Ezt behelyettesítve df első alakja
                                                                        !
                              ∂f ∂x                  ∂f ∂x       ∂f
                         df =            dx′ +                 +            dy.
                              ∂x y ∂x′ y             ∂x y ∂y x′ ∂y x

   A df második alakjával összehasonlítva azt kapjuk, hogy

                       ∂f     ∂f ∂x                 ∂f      ∂f    ∂f ∂x
                         ′
                            =            ,                =     +           .
                       ∂x y   ∂x y ∂x′ y            ∂y x′   ∂y x ∂x y ∂y x′

   Ezek a kifejezések kissé bonyolultnak tűnhetnek, értelmezésük azonban egyszerű. Az első
   csupán azt mondja ki, hogy ha ugyanazt az y mennyiséget végig állandónak tartjuk, akkor a
   P1-ben megismert, egyváltozós láncszabály alkalmazható, mivel az összes érintett függvény
   lényegében egyváltozóssá válik. (Ebből az is következik, hogy a parciális deriváltak reciprokai
   a várt módon viselkednek. Például (∂f /∂x)|y = 1/(∂x/∂f )y .) A második szerint, ha x′ állandó
   tartása mellett változtatjuk y-t, két járulékkal kell számolnunk: az egyik magából y változásából
   származik, a másik pedig az x indukált változásából, amely x′ állandóan tartásához szükséges.

   Ha szeretnénk, az itt ismertetett gondolatmenetet általánosíthatjuk arra az esetre is, amikor
   mindkét koordinátát egyszerre változtatjuk, de az alábbi feladatokhoz erre nem lesz szükség.

Most komoly parciálisderivált-akrobatikába kezdünk. A következő módszerek kissé trükkösek, és
általában az egyetemi termodinamika legnehezebb részének tartják őket. Ugyanakkor ezek jelentik
az e szakasz feladatainak legegyszerűbb megoldási módját. Az alábbi anyagra a feladatgyűjtemény
semmelyik más részében nem lesz szükség.
