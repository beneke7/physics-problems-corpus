---
id: "kevin-zhou-e4-ex006"
source: "kevin-zhou"
native_id: "KZ-E4-EX006"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-e4-ex006"
topic: [elektromágnesség]
subtopic: [fajlagos ellenállás, vezetés, drude-modell]
math_tools: [differenciálegyenletek, algebra]
format: "explanation"
kind: "example"
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

6. példa: A Drude-modell

         Modellezzünk egy vezetőt q töltésű, m tömegű és n részecskeszám-sűrűségű, teljesen
         szabad elektronok együttesével. Tegyük fel, hogy minden kis dt időintervallumban egy-egy
         elektron dt/τ valószínűséggel rácsionnal ütközik, és ekkor sebességének iránya
         véletlenszerűvé válik. E feltevések mellett határozzuk meg az anyag fajlagos ellenállását.

         Megoldás
         Először tegyük fel, hogy az elektronok átlagos lendülete ⟨p⟩. dt idő alatt az elektronok
         dt/τ része rácsionnal ütközik, ezért ütközés utáni átlagos lendületük nulla. Az új átlagos




                                                        12
Kevin Zhou                                                              Fizikaolimpiai feladatgyűjtemény



  lendület (1 − dt/τ )⟨p⟩, amiből az exponenciális lecsengés következik:

                                           d⟨p⟩    ⟨p⟩
                                                =−     .
                                            dt      τ
  Ha viszont külső tér van jelen, a jobb oldalon megjelenik egy erőtag:

                                        d⟨p⟩    ⟨p⟩
                                             =−     + qE
                                         dt      τ
  hiszen minden egyes elektronra F = dp/dt. Az állandósult állapotban

                                            ⟨p⟩ = qEτ.

  Az áramsűrűség
                                                nq⟨p⟩   nq 2 τ
                                  J = nq⟨v⟩ =         =        E.
                                                 m       m
  Így a Drude-modellben a fajlagos ellenállás
                                                   m
                                             ρ=          .
                                                  nq 2 τ
  A jellegzetes sodródási sebesség is kiszámítható:
                                              qEτ    E
                                         v=       =     .
                                               m    nqρ
  Reális értékek mellett v szó szerint csigatempó; az elektronok mindig nagyon lassan mozognak.
  Az áram azonban ennél sokkal gyorsabban megindulhat az áramkörben, mert amikor telepet
  kapcsolunk rá, minden mozgó elektron meglöki a következőt a vezetékben. Ez a mozgáshullám
  sokkal gyorsabban terjed, mint maguk az elektronok.

  Megjegyzés: A Drude–Sommerfeld-modell
  Fent hallgatólagosan azt tettük fel, hogy az ütközés egységnyi időre jutó valószínűsége adott,
  ez azonban nem helyes: amikor egy részecske közegen halad át, az általa megtett egységnyi
  útra jutó ütközési valószínűség adott. Állandó sebességgel mozgó elektronok esetén ez a két
  feltevés ekvivalens, de intuitívan azt várnánk, hogy az elektronoknak minden ütközés után
  nyugalomból kell felgyorsulniuk; ebben az esetben a két leírás eltér. Ennek gyors becsléséhez
  vegyük észre, hogy ha az ütközések közötti jellegzetes
                        ℓ, akkor az ütközések között felvett mozgási energia mv 2 /2
  ütközési távolság √                                                          √ ∼ qEℓ, így a
  jellegzetes sebesség v ∝ E. Ohm törvényének megfelelője ekkor I ∝ V lenne, ami teljesen
  ellentmond a megfigyeléseknek!

  A feloldás az, hogy a szilárd anyagokban az elektronok valóban csaknem állandó sebességgel
  mozognak, még ütközések után is. Ez kvantummechanikai hatás, amint azt az X1-ben
  elmagyarázzuk. A Pauli-féle kizárási elv szerint a vezető elektronjainak különböző kvantum-
  állapotokat kell elfoglalniuk, az elektronok nagy sűrűsége pedig megköveteli, hogy többségük
  mindig rendkívül nagy, a fénysebesség mintegy 1%-ának megfelelő sebességgel rendelkezzen!
  A sodródási sebesség csupán az a parányi átlagos eltolódás, amelyet sebességük elszenved.



                                                  13
    Kevin Zhou                                                                   Fizikaolimpiai feladatgyűjtemény
