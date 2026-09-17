---
id: kevin-zhou-notes-phy-ex044
source: kevin-zhou-notes
native_id: "phy Example 044"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex044
topic: [statisztikus-mechanika]
subtopic: [Bose–Einstein-statisztika, fotongázok]
math_tools: [állapotsűrűség, partíciós-függvény, termodinamikai-határátmenet]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3951-4078"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Tekintsünk egy N részecskéből álló ideális gázt, amelyben a részecskék általános diszperziós relációt követnek, H = H(|p|), mint például a relativisztikus részecskék. Figyelemre méltó módon az ideális gáz törvénye továbbra is érvényes! Ennek belátásához vegyük észre, hogy a szokásos kinetikus gázelméleti érv szerint egy részecske nyomása

                          dp e−H(p)/kB T px (∂H/∂px )     dp px ∂px (−kB T e−H(p)/kB T )
                        R                               R
       P V = ⟨px vx ⟩ =       R                       =        R                         = kB T.
                                dp e−H(p)/kB T                   dp e−H(p)/kB T

Ezt az eredményt a tankönyvekben nem gyakran említik, mivel relativisztikus esetben általában rögzített kémiai potenciált, nem pedig rögzített részecskeszámot tekintünk. (Másképpen úgy is láthatjuk ezt, hogy ∂F/∂V |T nem függ a diszperziós relációtól, mivel Z-ben a helykoordináták szerinti integrál triviális.)
75 3. Statisztikus mechanika


3.5     Bose–Einstein-statisztika
Most a bozonikus kvantumgázakra térünk át; az általános elmélet előtt néhány motiváló példát tekintünk.

Megjegyzés. Az állapotsűrűség kiszámítása. Periodikus peremfeltételekkel rendelkező dobozban független részecskék esetén az állapotok síkhullámok, ezért a fázistér szokásos állapotsűrűsége 1/h3 . A helykoordináták és a lendület iránya szerinti integrálást elvégezve:
                                                     4πV 2
                                           g(k) =         k .
                                                    (2π)3

Az energiára változócserét végezve, dk = (dk/dE)dE mellett, nemrelativisztikus részecskére
                                                          3/2
                                            V         2m
                                     g(E) = 2                      E 1/2 .
                                           4π         ℏ2

Relativisztikus részecske esetén ugyanez az eljárás
                                               VE p 2
                                    g(E) =              E − m2 c4 .
                                             2π 2 ℏ3 c3
Tömeg nélküli részecskékre különösen
                                                     V E2
                                           g(E) =              .
                                                    2π 2 ℏ3 c3
Általánosságban még meg kell szoroznunk ezt a spinállapotok/polarizációk számával.

Most a feketetest-sugárzás fotonjait vizsgáljuk.

 • Az E = ℏω összefüggést és azt használva, hogy a fotonok bozonok két polarizációval, egy ω frekvenciájú fotonmódus partíciós függvénye a vákuumenergia elhanyagolásával
                                                                              1
                               Zω = 1 + e−βℏω + e−2βℏω + . . . =                    .
                                                                          1 − e−βℏω
      Vegyük észre, hogy a fotonok száma nincs rögzítve. Képzelhetjük, hogy a kanonikus sokaságban dolgozunk, de a kvantummező állapotai szerint összegzünk. Alternatívaként a nagykanonikus sokaságban is gondolkodhatunk, ahol µ = 0, mivel a fotonszám nem megmaradó mennyiség; a fotonszám ehelyett a Gibbs-szabadenergia minimumánál helyezkedik el. Nincsenek további kombinatorikus tényezők arra, hogy melyik foton melyik módusban van, mert a fotonok azonosak.

 • Mindkét esetben a teljes partíciós függvény
                             Z ∞                        Z ∞
                                                     V
                    log Z =      dω g(ω) log Zω = − 2 3     dω ω 2 log(1 − e−βℏω ).
                              0                     π c 0

      Az energia                                         Z ∞
                                      ∂         Vℏ                           ω3
                                 E=−    log Z = 2 3                  dω
                                     ∂β        π c            0           eβℏω − 1
      ahol az integrandus a Planck-eloszlás. A nagy T határátmenetben az ekvipartícióból visszakapjuk a Rayleigh–Jeans-törvényt.
76 3. Statisztikus mechanika


  • Az integrál kiértékeléséhez vegyük észre, hogy ω4 dimenziójú, ezért 1/(βℏ)4 -et kell adnia. Ekkor
                                             E ∝ V (kB T )4
    ami visszaadja a Stefan–Boltzmann-törvényt.

  • Más mennyiségek meghatározásához deriváljuk a szabadenergiát. Különösen fontos eredmény:
                                                    E
                                                 p=
                                                   3V
    ami a kozmológiában hasznos. Az együtthatót például úgy vezethetjük le, hogy a kinetikus gázelméletben a nyomás a pv mennyiségtől függ, és nemrelativisztikus gázban pv a kinetikus energia kétszerese, fotongázban viszont a kinetikus energiával egyenlő. Ezért fotongázra pV = (1/2)(2E/3).

  • Izokor változást tekintve:
                                        dE
                                    dS =   ∝ V T 2 dT, S ∝ V T 3
                                         T
    ahol a konstans a harmadik főtétel miatt nulla. Így adiabatikus (entrópiamegőrző) folyamatokban pV γ invariáns, ahol γ = 4/3.

  • Vegyük észre, hogy egy fotongáz adiabatikus tágítása vagy összehúzása során egyensúlyban kell maradjon, éppúgy, mint bármely más gáz. Ennek egyszerű oka, hogy egy fotongáz Carnot-körfolyamatban használható; ha a gáz minden egyes adiabat végén nem lenne egyensúlyban, akkor több munkát nyerhetnénk ki, és megsértenénk a második főtételt.

  • Mikroszkopikusan a fotonok száma adiabatikus folyamatok során megmarad, és minden foton ugyanazzal a tényezővel vöröseltolódik. Ennek oka, hogy minden foton sebessége azonos, ezért mindegyik ugyanannyiszor verődik vissza a falakról, és minden alkalommal ugyanazt a vöröseltolódási tényezőt kapja. Mivel az adiabatikus folyamatok megőrzik az egyensúlyt, a Planck-törvény energiáinak/frekvenciáinak skálázása pontosan ugyanaz, mint a hőmérséklet skálázása.

Megjegyzés. A fotongáz és a klasszikus ideális gáz között az ultrarelativisztikus határban lényeges különbség van. A fotonok szabadon létrehozhatók és megsemmisíthetők, ami nulla kémiai potenciálnak felel meg. Ideális gázok esetén ezzel szemben rendszerint rögzített részecskeszámot, N -et képzelünk el. Egy ultrarelativisztikus ideális gázra az általánosított kinetikus gázelméleti érv alapján pV = N kB T , az ekvipartíció tétele alapján pedig E = 3N kB T . Egyik sem értelmes fotongáz esetén, ahol N általában végtelen, de a pV = E/3 eredmény mindkét esetben teljesül. Továbbá az adiabatikus folyamatok is ugyanúgy működnek, mivel a relativisztikus Doppler-eltolódás azonos, és a fotonok adiabatikus táguláskor nem keletkeznek és nem semmisülnek meg, ezért mindkét esetben γ = 4/3. A részletesebb eredmények azonban eltérnek. Egy fotongáznak például nincs klasszikus határátmenete: az energia nagy része ∼ kB T frekvenciájú módusokból származik, ezért a módusok tipikus foglaltsága 1 nagyságrendű, és a foglaltsági szám diszkrét volta mindig érzékelhető.

Megjegyzés. Fent minden fotonmódust harmonikus oszcillátorként kezeltünk. Ennek mikroszkopikus belátásához vegyük észre, hogy A az E konjugált impulzusa, és az energia
                                    1              1
                                H ∼ (E 2 + B 2 ) ∼ (E 2 + ω 2 A2 )
                                    2              2
ahol Coulomb-mértékben dolgoztunk. Ez formálisan azonos egy harmonikus oszcillátorral. Azért van E és B azonos fázisban, nem pedig a szokásos 90◦-kal eltérő fázisban, mert B a valódi kanonikus változó, A deriváltja.
77 3. Statisztikus mechanika


Megjegyzés. Történetileg Planck javasolta elsőként, hogy az energia anyag és sugárzás között csak ℏω egész számú többszöröseiben adható át. Einstein tett további javaslatot arra, hogy magának a sugárzásnak az energiája is mindig ℏω egész számú többszöröseiben, fotonoknak nevezett részecskékben jelenik meg. Ez ma azért tűnik furcsának, mert a Planck-törvény levezetéséhez a fotonok fogalmát használtuk. Planck azonban maga nem alkalmazott egyensúlyi statisztikus mechanikát. Ehelyett egy kinetikus egyenletet próbált megoldani, és a hosszú idő alatti határban egyensúlyt keresni, például egy H-tétel megfogalmazásával. Ez sokkal nehezebb feladat volt, amelyhez az anyag és a sugárzás kölcsönhatásának explicit elméletére volt szükség. Egyébként Boltzmann az 1870-es években úgy vezette le a Stefan–Boltzmann-törvényt, hogy a feketetest-sugárzást munkaközegként használta egy Carnot-körfolyamatban.
