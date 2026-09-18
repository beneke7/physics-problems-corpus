---
id: kevin-zhou-notes-phy-ex055
source: kevin-zhou-notes
native_id: "phy Example 055"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex055
topic: [mechanika]
subtopic: [folyadékok, viszkozitás]
math_tools: [skálázási érvek]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "6496-6543"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. A gömb körüli áramlás a Re függvényében sok minőségileg különböző viselkedést mutat.
Re ≲ 1 esetén „kúszó” áramlást kapunk, amely látszólag hasonlít a potenciáláramlásra; a
potenciáláramláshoz hasonlóan analitikusan megoldható. Re ∼ 10 esetén a gömb mögött állandósult
körmozgás alakul ki. Re ∼ 100 esetén ez a keringés periodikusan leválik a gömbről, és „Karman-
örvénysort” hoz létre. (Fizikailag úgy gondolhatunk a Re-re, mint amely azt a sebességet jellemzi,
amellyel örvényesség keletkezik a gömb felületén. Az örvények akkor válnak le, amikor ez a képződés
túl gyors ahhoz, hogy egyszerűen diffundálódjanak.) Re ∼ 104 esetén az áramlás kaotikussá válik,
és turbulens nyom keletkezik a gömb mögött. Re ∼ 105 esetén „ellenállási válság” lép fel: a
légellenállási együttható hirtelen lecsökken, a turbulens áramlás pedig ismét a gömbhöz tapad.

5      A kvantummechanika alapjai
5.1     Fizikai posztulátumok
Feltesszük, hogy egy rendszer állapotát egy adott időpontban a H Hilbert-tér egy sugara adja meg.

    • A Hilbert-tér komplex vektortér, pozitív definit szeszkvilineáris formával ⟨α|β⟩. H elemeit
      keteknek, a duális tér H∗ elemeit bra-knek nevezzük. A forma segítségével kanonikusan
      azonosíthatjuk |α⟩-t a hozzá tartozó ⟨α| bra-val, a komponensek fel- és leindexeléséhez
      hasonlóan. Ez antilineáris leképezés, c|α⟩ ↔ c⟨α|, mivel a forma szeszkvilineáris.

    • A sugár egy nem zérus ket a |ψ⟩ ∼ c|ψ⟩ ekvivalenciareláció erejéig, ahol c tetszőleges nem
      zérus komplex szám; ez azt fejezi ki, hogy a kvantummechanikában a globális fázisok nem
      fontosak.

    • A Hilbert-terek teljesek is, vagyis minden Cauchy-sorozatba tartozó ket konvergál H-ban.

    • Egy V Hilbert-tér szeparábilis, ha van olyan megszámlálható D részhalmaza, hogy D = V ; ez
      ekvivalens azzal, hogy van megszámlálható ortonormált bázisa. A nem szeparábilis Hilbert-terek
      matematikailag problematikusak, ezért általában ezt a szeparabilitást fogjuk feltételezni.

    • Ha {|ϕi ⟩} ortonormált bázis, akkor fennáll a teljességi reláció
                                               X
                                                  |ϕi ⟩⟨ϕi | = 1.
                                                      i

      Továbbá fennáll a Schwartz-egyenlőtlenség:

                                               ⟨α|α⟩⟨β|β⟩ ≥ |⟨α|β⟩|2 .

      A bizonyítás trükkje, hogy a |γ⟩ = |α⟩ + λ|β⟩, λ = −⟨β|α⟩/⟨β|β⟩ választással használjuk a
      ⟨γ|γ⟩ ≥ 0 egyenlőtlenséget.

Megjegyzés. Az, hogy a kvantummechanika komplex vektortereket használ, nem triviális fizikai tény,
nem pedig önkényesen választott definíció. Amint itt tárgyaljuk, maga Schrödinger is azt állította,
hogy a hullámfüggvénynek csak a valós része fizikailag értelmes, a klasszikus hullámmechanikából
származó intuíció alapján. Megpróbálta kiküszöbölni a komplex számokat a róla elnevezett egyenletből,
például úgy, hogy −ℏ2 ∂t2 ψ = H 2 ψ alakban írta fel, vagy valós és képzetes részre választotta szét.
Egy évnyi oda-vissza gondolkodás kellett annak felismeréséhez, hogy a komplex értékek valóban
értelmesek, és a valószínűségeknek |ψ|2 szerint kell alakulniuk.
