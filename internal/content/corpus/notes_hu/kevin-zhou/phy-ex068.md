---
id: kevin-zhou-notes-phy-ex068
source: kevin-zhou-notes
native_id: "phy Example 068"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex068
topic: [kvantumfizika, elektromágnesesség]
subtopic: [fluxuscső, Aharonov–Bohm-jelenség, topológia]
math_tools: [differenciálegyenletek]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7572-7627"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Részecske egy fluxuscső körül. Tekintsünk egy r sugarú gyűrűre kényszerített részecskét,
amelyen Φ mágneses fluxus halad át. Ekkor választhatjuk
                                                     Φ
                                             Aϕ =
                                                    2πr
és a Hamilton-operátor
                               (pϕ − qAϕ )2                     qΦ 2
                                                                  
                                               1
                            H=              =           −iℏ∂ϕ −      .
                                   2m         2mr2              2π
A sajátállapotok továbbra is exponenciálisak, alakjuk
                                                  1
                                           ψ=√        einϕ
                                                  2πr
ahol n ∈ Z, mivel a hullámfüggvény egyértékű. Ezt behelyettesítve az energia

                                            ℏ2         Φ 2
                                                        
                                     E=           n−
                                          2mr2        Φ0
142 5. A kvantummechanika alapjai

ahol Φ0 = 2πℏ/q a fluxus kvantuma. Mivel általában Φ/Φ0 nem egész szám, a mágneses tér akkor is
megváltoztatja a spektrumot, ha a mágneses tér zérus mindenütt, ahol a hullámfüggvény nem zérus!
   Ezt a jelenséget kissé másképpen is megvizsgálhatjuk. Tegyük fel, hogy megpróbáljuk a vektor-
potenciált mértéktranszformációval eltüntetni. Mivel
                                                           Φϕ
                                         A = ∇α,      α=
                                                           2π
megpróbálhatunk α mértékskalárral transzformálni. Ekkor a hullámfüggvény
                                                          
                                        iqα              Φ
                              ψ → exp         ψ = exp      iϕ ψ.
                                         ℏ              Φ0

Ez érvénytelen, hacsak Φ nem Φ0 egész számú többszöröse, mert nem egyértékű hullámfüggvényt ad.
Ez tükrözi, hogy a spektrum valóban megváltozik, amikor Φ/Φ0 nem egész szám; ez fizikailag megfigyel-
hető hatás, amelyet nem lehet mértéktranszformációval eltüntetni. A ψ egyértékűségének feltétele
tökéletesen fizikai; ezt használtuk az energiasajátállapotok előállításakor, amikor A zérus volt.
Azért korlátozza a megengedett mértéktranszformációkat, mert a hullámfüggvény körbetekeredik a
fluxuscső körül. Ez az első pillantás arra, hogyan jelenik meg a topológia a kvantummechanikában.
Annak általános tényét, hogy egy egész Φ/Φ0 nem befolyásolja a rendszer spektrumát, Byers–Yang-
tételnek nevezzük.

Megjegyzés. Néha ezt a két érvet összekeverik, és azt állítják, hogy bármely hurokon átmenő fluxusnak
Φ0 egész számú többszörösének kell lennie. Ez egyszerűen helytelen, de szupravezető hurkokra igaz, ha
ψ-t makroszkopikus hullámfüggvényként értelmezzük. Ennek oka, hogy a szupravezető hurok energiája
minimalizálódik, amikor Φ/Φ0 egész szám. (További részletek hozzáadandók.)

Megjegyzés. Hasznos azt is megvizsgálni, hogyan mozdulnak el az energiaszintek, vagyis a „spektrális
áramlást”. Zérus térben a |n = 0⟩ állapot legalul van, míg a ±|n⟩ állapotok degeneráltak. A tér
növelésével az energiaszintek úgy tolódnak el, hogy amikor a fluxus Φ0, a |n⟩ állapot az eredeti
|n + 1⟩ állapot energiaszintjére kerül.
