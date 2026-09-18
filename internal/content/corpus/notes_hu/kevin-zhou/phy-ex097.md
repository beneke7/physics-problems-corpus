---
id: kevin-zhou-notes-phy-ex097
source: kevin-zhou-notes
native_id: "phy Example 097"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex097
topic: [kvantumfizika]
subtopic: [cavity-QED, AC-Stark-eltolódás]
math_tools: [perturbációelmélet, operátoralgebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "14023-14064"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Az AC Stark-eltolódás cavity-QED-rendszerben. Tegyük fel most, hogy az atom egy üreg elektromágneses módusához
csatolódik. Másképpen fogalmazva: most már az elektromágneses teret is kvantumosan kezeljük. A Hamilton-operátor
forgóhullám-közelítésben
                                               1
                                  H = ωc a† a + ωa σz + g(a† σ− + aσ+ )
                                               2

ahol g a csatolási erősség. E konvenció szerint az atom nulladik és első állapota rendre a gerjesztett és az alapállapot,
ezért σz pozitív előjellel szerepelhet. Az atom keltő- és annihilációs operátorai σ+ = |e⟩⟨g| és σ− = |g⟩⟨e|.
   Legyen a hangolási eltérés ∆ = ωc − ωa , és tegyük fel, hogy g, ∆ ≪ ωc , ωa . Az interakciós képben
                                                                    g †
              HI (t) = g(a† σ− ei∆t + aσ+ e−i∆t ),     U1 (t) = −     (a σ− ei∆t − aσ+ e−i∆t ).
                                                                    ∆
Olyan τ időintervallumon integrálunk, amelyre τ ≫ ∆−1 , ami azt jelenti, hogy ⟨HI (t)⟩ = 0. Ezért

                                       1                    g2
                             Heff (t) = ⟨[HI (t), U1 (t)]⟩ = [a† σ− , aσ+ ].
                                       2                    ∆
Az [a, a† ] = 1 és [σ+ , σ− ] = σz összefüggéseket használva a kommutátor egyszerűsödik:

                                  [a† σ− , aσ+ ] = −σz (a† a + 1/2) − 1/2.

A konstans tagot elhagyva

                                                     g2
                                      Heff (t) = −      σz (a† a + 1/2).
                                                     ∆
Az új jelenség az 1/2 megjelenése, vagyis az AC Stark-eltolódás vákuumban is fellép a „vákuumfluktuációkkal” való
csatolás eredményeként. Természetesen ez a rendszer különösebb nehézség nélkül egzaktul is kezelhető, ahogyan az
Optika jegyzeteiben történik. Eredményünk az egzakt eredmény O(g 2 ) rendű része.
                                                √
   Figyeljük meg, hogy ez a számítás csak akkor működik, ha g n ≪ ∆, ahol n a módusban lévő fotonok tipikus száma;
ez annak felel meg, hogy az előző számításban Ω ≪ ∆-t követeltünk. Ha ez nem teljesül, nincs olyan τ, amelyre egyszerre
jó közelítés lenne ⟨HI (t)⟩ = 0 beállítása, miközben Heff (t)-ben megtartjuk a g 2 n/∆ rendű tagot. Ha τ rövid, az előbbi
járulék fontosabbá válik az utóbbinál, ha pedig τ hosszú, akkor az utóbbi járulék által okozott dinamika kiátlagolódik.
