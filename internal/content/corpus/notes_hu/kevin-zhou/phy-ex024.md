---
id: kevin-zhou-notes-phy-ex024
source: kevin-zhou-notes
native_id: "phy Example 024"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex024
topic: [elektromágnesség]
subtopic: [mágneses multipólusok, árameloszlások]
math_tools: [vektoranalízis, Taylor-kifejtés]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1688-1726"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Ezeknek a trükköknek általános árameloszlásra alkalmazva bonyolultabb változatait is megadhatjuk:

                                         Ji (r′ ) Ji (r′ )(r · r′ )
                                Z
                             µ0      ′
                    Ai (r) =      dr             +                  + ... .
                             4π             r            r3

Az első tag egyszerűsítéséhez vegyük észre, hogy

                                    ∂j (Jj ri ) = (∂j Jj )ri + Ji = Ji

ahol felhasználtuk, hogy ∇ · J = 0. A monopólustag ezért teljes derivált, így eltűnik. Az
szemléletes értelmezés szerint az áramoknak hurkokban kell körbefutniuk, nettó elmozdulás nélkül; azonosságunk
ezután lényegében azt mondja, hogy „a töltésközéppont nem mozog”.
A második tag egyszerűsítéséhez vegyük észre, hogy

                                        ∂j (Jj ri rk ) = Ji rk + Jk ri .

Ezt felhasználhatjuk az integrandus „antiszimmetrizálására”:
                   Z               Z                           Z
                         ′      ′     ′ rj    ′      ′      r     ′      ′
                      dr Ji rj rj = dr (Ji rj − Jj ri ) =     × dr J × r
                                        2                   2               i

ahol a kettős vektoriális szorzat azonosságát használtuk. Így a dipólustér alakja megegyezik a korábbival, csak
az általánosabb dipólusmomentum
                                             Z
                                           1
                                     m=        dr′ r′ × J(r′ )
                                           2
amely a korábbi eredménnyel a következő vektorazonosság miatt ekvivalens:
                                           Z           Z
                                         1
                                              r × ds = dS.
                                         2
