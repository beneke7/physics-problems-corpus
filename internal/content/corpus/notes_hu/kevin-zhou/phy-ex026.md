---
id: kevin-zhou-notes-phy-ex026
source: kevin-zhou-notes
native_id: "phy Example 026"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex026
topic: [elektromágnesség, speciális relativitáselmélet]
subtopic: [mágnesség levezetése, Faraday-tenzor, Helmholtz-felbontás]
math_tools: [speciális relativitáselmélet, lineáris algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1913-1986"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. A mágnesség levezetése. Tekintsünk egy vezetéket, amelyben a q pozitív töltések v sebességgel
a −q negatív töltések pedig −v sebességgel mozognak. Ekkor

                                              I = 2nAqv.

Tekintsünk most egy ugyanabba az irányba u sebességgel mozgó részecskét, amely a töltések sebességét
v± = u ⊕ (∓v)-nek méri. Legyen n0 az egyes töltésfajták nyugalmi rendszerbeli részecskeszáma térfogategységenként,
így n = γ(v)n0 . A következő tulajdonság felhasználásával:

                                      γ(u ⊕ v) = γ(u)γ(v)(1 + uv)

megmutatható, hogy a részecske teljes töltéssűrűségként ezt érzékeli:

                                  ρ′ = q(n+ − n− ) = −q(uvγ(u))n

saját rendszerében. Így F ′ ∼ uvγ(u) nagyságú elektromos erőt tapasztal. Az eredeti rendszerbe visszatranszformálva
F ∼ uv adódik, összhangban a magnetosztatikából kapott eredményeinkkel.
Most a mértéktranszformációkat és a Faraday-tenzort vizsgáljuk.

  • A terek a potenciálokkal így definiálhatók:
                                                  ∂A
                                      E = −∇ϕ −      ,     B = ∇ × A.
                                                  ∂t
    A mértéktranszformációk alakja
                                                ∂χ
                                       ϕ→ϕ−        ,   A → A + ∇χ
                                                ∂t
    és invariánsan hagyják a tereket.

  • Relativisztikus jelöléssel Aµ = (ϕ, A) (vegye észre, hogy ez Aµ komponenseit
    metrikafüggővé teszi), a mértéktranszformációk pedig

                                             Aµ → Aµ − ∂µ χ.
38 2. Elektromágnesség


  • A Faraday-tenzor definíciója

                                              Fµν = ∂µ Aν − ∂ν Aµ

    és mértékinvariáns. Komponensei tartalmazzák az elektromos és mágneses teret,
                                                                  
                                            0      Ex    Ey    Ez
                                        −Ex        0   −Bz By 
                                 Fµν = −Ey Bz
                                                                   .
                                                          0   −Bx 
                                          −Ez −By Bx            0

  • Indexjelöléssel vagy mátrixszorzással

                                       F ′µν = Λµρ Λν σ F ρσ    F ′ = ΛF ΛT .

    Az utóbbi alakban F mindkét indexe felül van, Λ pedig a v → Λv vektortranszformáció mátrixa.

  • Forgatások alatt E és B is elfordul. Az x irányú boostok esetén

                          Ex′ = Ex ,     Ey′ = γ(Ey − vBz ),       Ez′ = γ(Ez + vBy ),

                          Bx′ = Bx ,     By′ = γ(By + vEz ),       Bz′ = γ(Bz − vEy ).

  • Megkonstruálhatjuk a Lorentz-skalárokat:

                                 Fµν F µν ∝ E2 − B2 ,          Fµν Feµν ∝ E · B.

    A második eredmény gyorsan megkapható annak észrevételével, hogy a duális képzés E → B → −E leképezést ad.

Megjegyzés. A Helmholtz-felbontás szerint egy általános vektormező rotációmentes
rész és divergenciamentes rész összegeként írható fel, ha a tér a végtelenben gyorsabban csökken 1/r-nél. A legelegánsabb
bizonyítás a F̃(k) Fourier-transzformáció vétele; ennek létezését a csökkenési
feltétel garantálja. A rotációmentes rész a k-val párhuzamos rész (azaz (F̃(k) · k̂)k̂), a divergencia-
mentes rész pedig a k-ra merőleges rész. Mivel A mindig választható divergenciamentesnek, a fenti
E-re vonatkozó kifejezés a Helmholtz-felbontás egyik példája.
