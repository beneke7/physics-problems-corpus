---
id: "kevin-zhou-t1-ex003"
source: "kevin-zhou"
native_id: "KZ-T1-EX003"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t1-ex003"
topic: [Hőtan, mechanika]
subtopic: [ideális gáz, hidrosztatika, forgó vonatkoztatási rendszerek]
math_tools: [differenciálegyenletek]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T1.txt"
source_url: "sources/kevin_zhou/site/handouts/T1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T1-EX003

        Példa 3

        Egy űrállomás egy R0 sugarú, nagy henger, amelyet m tömegű levegőmolekulák töltenek ki. A henger
        tengelye körül ω szögsebességgel forog, a levegő pedig vele együtt forog. Ha
        az állomáson belül a T hőmérséklet állandó, mekkora a levegő nyomásának aránya az állomás
        középpontjában és a peremén?

        Megoldás
        Az M7-ben láttuk, hogy egy mozgó fal melletti folyadék viszkozitása révén felveszi a fal sebességét.
        Ebben a helyzetben ez azért történik, mert a falról visszapattanó gázmolekula
        átlagosan további érintőirányú sebességkomponenst vesz fel. Állandósult állapotban a gáz
        együtt forog a falakkal. Ezért a legegyszerűbb az állomással együtt forgó
        vonatkoztatási rendszerben dolgozni, amelyben a fal és a gáz nyugalomban van, így egyszerű folyadékstatikai
        feladatot kapunk.

        Egy dr radiális vastagságú és A területű vékony levegődarabra ható erők egyensúlyát vizsgálva

                                               A dP = ρgeff A dr

        ahol geff = ω 2 r a centrifugális gyorsulás. Az ideális gáztörvényt alkalmazva
                                                dP   mgeff
                                                   =       dr
                                                P    kB T
        amelynek integrálásával azt kapjuk, hogy
                                          P (r = 0)        2 2
                                                     = e−mω R0 /2kB T .
                                         P (r = R0 )
