---
id: kevin-zhou-notes-phy-ex081
source: kevin-zhou-notes
native_id: "phy Example 081"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex081
topic: [kvantumfizika]
subtopic: [kétrészecske-rendszerek]
math_tools: [lineáris-algebra, koordináta-transzformációk]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "9660-9690"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Kétrészecske-kölcsönhatások. Tegyük fel, hogy két tömeggel rendelkező test kölcsönhatási
Hamilton-operátora

                                        p21   p2
                                 H=         + 2 + V (|x1 − x2 |).
                                       2m1 2m2
Ebben az esetben célszerű áttérni a
                                       m1 x1 + m2 x2
                                 R=                  ,     r = x2 − x1
                                            M
koordinátákra, ahol M = m1 + m2. A konjugált impulzusokat P = −iℏ∂R és p = −iℏ∂r módon
definiálva azt kapjuk, hogy
                                                         m1 p2 − m2 p1
                                P = p1 + p2 ,      p=                  .
                                                              M
Ez a transzformáció kanonikus transzformáció példája, mivel megőrzi a kanonikus kommutációs
relációkat. A Hamilton-operátor alakja
                                    P2   p2                1   1   1
                             H=        +    + V (r),         =   +   .
                                    2M   2µ                µ   m1 m2

Látjuk, hogy P 2 /2M kommutál H-val, így az R változó leválasztható; ez adja a tömegközéppont
teljes mozgását. Ezután a relatív koordináta ψ(r) hullámfüggvényére összpontosítunk. Ez ugyanazt
az egyenletet elégíti ki, mint egy centrális erőtérben mozgó egyetlen részecske, azzal, hogy m helyett
µ szerepel.
   Végül a teljes L = L1 + L2 szögimpulzust felbonthatjuk:

                                         L=R×P+r×p

ami a klasszikus mechanikához hasonlóan egy „pálya-” és egy „spin-” (pontosabban „relatív-”)
hozzájárulás összege. A relatív hozzájárulás kommutál a relatív koordinátához tartozó
p2 /2µ + V (r) Hamilton-operátorral, ezért a ψ(r) megoldásában szereplő l és m kvantumszámok a
részecskék tömegközépponti rendszerbeli szögimpulzusára vonatkoznak.
