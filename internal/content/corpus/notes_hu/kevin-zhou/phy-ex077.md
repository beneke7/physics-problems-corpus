---
id: kevin-zhou-notes-phy-ex077
source: kevin-zhou-notes
native_id: "phy Example 077"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex077
topic: [kvantumfizika]
subtopic: [SO(3)-reprezentáció, perdület]
math_tools: [lineáris algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "9011-9027"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Az SO(3) esetében a fundamentális reprezentáció egybeesik az adjungált reprezentációval.
Ennek belátásához vegyük észre, hogy

                                      R(a × u) = (Ra) × (Ru)

ami egyszerűen azt mondja ki, hogy a vektoriális szorzat vektorként transzformálódik forgatások alatt
(valójában pszeudovektor). Ekkor

                        R(a · J)u = ((Ra) · J)Ru,    R(a · J)R−1 = (Ra) · J.

Ez a Lie-csoport egy reprezentációját adja, amely R-t úgy reprezentálja, mint az a vektort Ra-ba
vivő operátort. Ez éppen a fundamentális reprezentáció, csak absztraktabb módon szemlélve: a vektor-
tér most térbeli vektorok helyett infinitézimális forgatásokat tartalmaz.
   A fenti másképpen azt jelenti, hogy „a szögsebesség vektor”. Ez általában nem igaz; SO(2)-ben
skalár, és az adjungált reprezentáció triviális; SO(4)-ben a Lie-csoport hatdimenziós, így a
szögsebesség helyesebben kétdimenziós differenciálforma.
