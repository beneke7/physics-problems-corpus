---
id: "kevin-zhou-e3-ex003"
source: "kevin-zhou"
native_id: "KZ-E3-EX003"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-e3-ex003"
topic: [Elektromágnesség]
subtopic: [egyenáramú áramkörök, vezetőképesség, töltéssűrűség]
math_tools: [integrálszámítás, vektoranalízis]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E3.txt"
source_url: "sources/kevin_zhou/site/handouts/E3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Példa 3

       Tekintsünk két hosszú, koaxiális, a < b sugarú és L hosszúságú hengeres héjat. A héjak közötti teret
       a σ(r) = k/r vezetőképességű anyag tölti ki. Mekkora a héjak közötti ellenállás és töltéssűrűség?

       Megoldás
       Az ellenállás meghatározásához kiszámítjuk az I áramot, amikor a héjak között V feszültséget kapcsolunk.
       Szimmetria miatt az állandósult állapotban az áramsűrűségnek
                                                         I
                                               J(r) =         r̂.
                                                       2πrL
       Másrészt azt is tudjuk, hogy
                                                  Z b
                                                         I           I(b − a)
                                       Z
                                 V = E · dr =                   dr =
                                                    a 2πrLσ           2πkL
       amiből következik, hogy
                                                      b−a
                                                 R=         .
                                                      2πkL
       Vegyük észre, hogy a héjak közötti radiális elektromos tér állandó, ezért
                                                         V
                                               E(r) =         r̂.
                                                       b−a


                                                    4


    Kevin Zhou                                                              Physics Olympiad Handouts



       A töltéssűrűség meghatározásához a leggyorsabb a Gauss-törvény differenciális alakjának alkalmazása hengeres
       hengerkoordinátákban. Az E1-ben levezetett divergencia-alakot használva azt kapjuk, hogy

                                                     ϵ0 ∂(rEr )   ϵ0 V
                                    ρ = ϵ0 ∇ · E =              =       .
                                                     r ∂r         r b−a
       Meglepő lehet, hogy ρ nem nulla. Ennek oka, hogy a legtöbb tankönyvi példában a vezetőképesség homogén, így
       ∇ · E = ∇ · (J/σ) = (∇ · J)/σ = 0. Ebben az esetben csak a vezetők felületén lehet töltés.
