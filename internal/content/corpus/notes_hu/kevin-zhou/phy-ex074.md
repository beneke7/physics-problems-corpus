---
id: kevin-zhou-notes-phy-ex074
source: kevin-zhou-notes
native_id: "phy Example 074"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex074
topic: [kvantumfizika, termodinamika és statisztikus fizika]
subtopic: [úttintegrálok, kvantumstatisztika]
math_tools: [kalkulus, Gauss-integrálok]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "8849-8883"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Útintegrálok a kvantumstatisztikus fizikában. Mivel a sűrűségmátrix ρ = e−βH /Z, az e−βH
mátrixelemeit szeretnénk kiszámítani. Ez formálisan azonos az eddigiekkel, ha t = −iℏβ-t választunk.
Ezt behelyettesítve
                                                                                                   
                             N/2 Z                            N −1                  2          
                           m                                  η X      m(x j+1 − x j )
  ⟨x|e−βH |x0 ⟩ = lim                 dx1 . . . dxN −1 exp −                            + V (xj ) 
                  N →∞ 2πℏη                                   ℏ             2η 2
                                                                      j=0
164 6. Útintegrálok

ahol η = ℏβ/N-et és ϵ = −iη-t definiáltuk. A kinetikus és potenciális tagok relatív előjele meg-
változott, így most a Hamilton-operátorra kapunk integrált, és az integrál nem oszcilláló, hanem
csillapított. A kontinuumhatárt véve a partíciós függvény

                                                        1 βℏ
                                 Z      Z                Z         
                          Z = C dx0       Dx(u) exp −          H du
                                                        ℏ 0

ahol az úttintegrál az x(0) = x(βℏ) = x0 feltételű utakra vonatkozik. Egyszerű példaként tegyük
fel, hogy a hőmérséklet magas, ezért βℏ kicsi. Ekkor a részecske nem távolodhat el túlságosan x(0)-
tól a rövid, u = βℏ „idő” alatt, így a potenciált állandónak vehetjük:
                                                                 ! r
                                             1 βℏ m dx 2
            Z                Z                 Z                             Z
                   −βV (x0 )                                              m
     Z ≈ C dx0 e               Dx(u) exp −                     du =               dx0 e−βV (x0 )
                                             ℏ 0 2 du                   2πβℏ2

ahol az utolsó lépésben a szabad részecske analitikusan folytatott propagátorát használtuk. Ez a
klasszikus statisztikus mechanika eredménye, amelyben Z egyszerűen az e−βH fázistérbeli integrálja,
de most βℏ szerint rendről rendre korrekciókat is találhatunk.
