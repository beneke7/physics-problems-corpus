---
id: "kevin-zhou-t2-ex006"
source: "kevin-zhou"
native_id: "KZ-T2-EX006"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t2-ex006"
topic: [termodinamika]
subtopic: [ozmotikus nyomás, entrópia, entrópikus erő]
math_tools: [differenciálás]
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

# KZ-T2-EX006

  6. példa: Ozmotikus nyomás

  Egy vízzel töltött csövet egy, csak vízmolekulákat áteresztő membrán oszt két részre. Amikor a cső egyik felében egy anyagot oldunk fel, N iont létrehozva, a vízszint azon az oldalon az ábrán látható módon megemelkedik.




                                                9


Kevin Zhou                                                            Physics Olympiad Handouts




  Magyarázzuk meg a jelenséget, és számítsuk ki a szintkülönbséget, elhanyagolva a különböző ionok, illetve az ionok és a víz közötti kölcsönhatásokat.

  Megoldás
  Az ozmotikus nyomás az entrópikus erő egyik példája. Tegyük fel, hogy a cső egyik oldalán megemelkedik a vízszint. A víz egyébként változatlan, csak eltolódott a cső mentén, ezért az entrópiája nem változott. Az energiája azonban nagyobb lett, és ennek az energiának a környezetből származó hőátadás révén kellett érkeznie. Ezért a környezet entrópiája csökkent.

  Ha nem lennének oldott ionok, ez megmutatná, miért nem emelkedik meg spontán a vízszint: ezt a második főtétel tiltja. Itt azonban az ionokat tartalmazó szakaszban a víz mennyiségének növelése növeli az ionok entrópiáját, mivel most több hely áll rendelkezésükre. Mivel az elérhető kvantumállapotok száma arányos az elérhető térfogattal, azt kapjuk, hogy

                                       Sion = N kB log V

  egy additív állandó erejéig, amiből
                                                  N kB
                                        dSion =        dV.
                                                   V
  Egyensúlyban legyen P ozmotikus nyomáskülönbség a membrán két oldala között. Ekkor dV térfogatú víz membránon való átvitele P dV energiába kerül, így
                                                d̄Q    P
                                    dSenv = −       = − dV.
                                                 T     T
  Termodinamikai egyensúlyban a teljes entrópia maximális, ezért

                                       dSion + dSenv = 0.

  Az ozmotikus nyomásra megoldva azt kapjuk, hogy

                                           P V = N kB T.

  A szintkülönbség egyszerűen a hidrosztatikai nyomásból adódik:
                                             P    N kB T
                                       h=       =        .
                                             ρg    ρV g


                                                10


    Kevin Zhou                                                               Physics Olympiad Handouts



       Az entrópia csökkentésének lehetőségére válaszul megjelenő nyomást általában „entrópikus erőnek” nevezik. Valószínűleg kémiaórán már találkoztunk ezzel az eredménnyel, csak egészen más jelöléssel. A kémiakönyvekben rendszerint ezt látjuk:

                                                  Π = iM RT

       ahol Π az ozmotikus nyomás, M az oldott anyag molaritása, az i van ’t Hoff-tényező pedig az oldott anyag egy móljára jutó ionmólok száma. Ez teljesen ekvivalens az általunk kapott eredménnyel.
