---
id: kevin-zhou-notes-phy-ex064
source: kevin-zhou-notes
native_id: "phy Example 064"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex064
topic: [kvantumfizika]
subtopic: [Gauss-hullámcsomag]
math_tools: [differenciálegyenletek, kalkulus]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7173-7214"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. A Gauss-hullámcsomag egyik példája
                                     1/4 −ax2 /(1+2iℏat/m)
                                     2a     e
                          ψ(x, t) =           p
                                      π         1 + 2iℏat/m
amely kielégíti a szabad részecske Schrödinger-egyenletét. Ahogy az Ehrenfest-relációkból várható,
⟨x⟩ állandó. Mivel nincs potenciál, erre a hullámcsomagra úgy gondolhatunk, mint egymástól teljesen
függetlenül terjedő impulzusállapotok szuperpozíciójára. Az impulzus bizonytalansága állandó, a hely
bizonytalansága azonban t = 0-ban minimális, amikor a síkhullám-komponensek összehangolódnak, és
a hullámcsomag ezután mind a jövő, mind a múlt felé szétterül. A szétterülés riasztóan gyors: nagy t-re
                                     √
∆x ∼ (ℏt/m) a, ami azt jelenti, hogy egy a = (1 nm)−2 értékű elektronnál egy másodperc után
∆x ∼ 100 km! Azért nem látunk ilyen makroszkopikus szuperpozíciókat, mert a dekoherenciával
szemben instabilak, amint azt az Optika című jegyzet tárgyalja.
   Kiegészítő kérdésként feltehetjük, hogyan fejlődhet egy Gauss-féle helyeloszlású hullámcsomag
varianciája az időben. A fenti variancia t > 0 esetén nő, de könnyen létrehozhatunk olyan
hullámcsomagot is, amelynek varianciája kezdetben csökken; a bizonytalansági elv azonban korlátozza,
hogy mennyire csökkenhet. E kérdés általános tárgyalásának legegyszerűbb módja a Heisenberg-kép,
ahol az operátorok egyszerűen fejlődnek:
                                                          pt
                                   p(t) = p0 ,   x(t) =      + x0 .
                                                          m
Ezért a V = ⟨x2 ⟩ − ⟨x⟩2 variancia fejlődése
                     dV  1              2         1
                        = ⟨[x2 , p2 ]⟩ − ⟨x⟩⟨p⟩ =   (⟨xp + px⟩ − 2⟨x⟩⟨p⟩) .
                        dt  m              m         m
Másodszor deriválva
                                      d2 V     2⟨p2 ⟩ 2⟨p⟩2
                                            =        −
                                       dt2      m2      m2
adódik, ami állandó, mivel az impulzuseloszlás állandó. Ezért általában V (t) az idő másodfokú
függvénye, továbbá V ′′ (t) > 0, így minden hullámcsomag végül szétterül. Van néhány kiút: a koherens
állapotok megfelelő potenciál hatására nem terülnek szét, a nem szétterülő hullámcsomagok pedig úgy
kerülik meg a fenti érvet, hogy varianciájuk végtelen.
135 5. A kvantummechanika alapjai

   Ez az érv a Heisenberg-kép egyik erősségét is megmutatja: ideális, ha főként egyszerű operátorok
várható értékei érdekelnek. Ha viszont a teljes hullámfüggvény érdekel, az ekvivalens információt
végtelen sok operátor fejlődése kódolja. Ezekkel még egy olyan egyszerű rendszerben is nehéz dolgozni,
mint a szabad részecske.
