---
id: kevin-zhou-notes-phy-ex037
source: kevin-zhou-notes
native_id: "phy Example 037"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex037
topic: [statisztikus-mechanika]
subtopic: [termodinamika, ideális-gáz]
math_tools: [parciális-deriváltak, integrálás]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3421-3438"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Egy mól ideális gáz entrópiája. Adott:

                                                            
                         ∂S            ∂S           CV        ∂p
                 dS =          dT +            dV =    dT +        dV.
                         ∂T V          ∂V T          T        ∂T V

Az ideális gáz törvényét használva (∂p/∂T )|V = R/V , integrálás után
                          Z           Z
                             CV         R
                      S=        dT +       dV = CV log T + R log V + const.
                             T          V
ahol az integrálás egyszerűen elvégezhető, mert a dT együtthatója nem függ V -től, és fordítva.
A T → 0 esetén fellépő szinguláris viselkedés összeegyeztethetetlen a harmadik főtétellel, ahogyan az a CP = CV + R eredmény is, mivel minden hőkapacitásnak nullához kell tartania T → 0 esetén. Ezek a feszültségek azért állnak fenn, mert a harmadik főtétel kvantummechanikai eredetű, és azt jelzik, hogy az ideális gáz klasszikus modelljének érvényessége meg kell hogy szűnjön. Az alább, statisztikus mechanikából kiinduló gondosabb levezetés figyelembe tudja venni az N-től való függést és az ismeretlen konstansot.
