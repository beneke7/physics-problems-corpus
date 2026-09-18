---
id: kevin-zhou-notes-phy-ex092
source: kevin-zhou-notes
native_id: "phy Example 092"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex092
topic: [kvantumfizika]
subtopic: [atomfizika, elektronkonfigurációk, időfüggő-perturbációelmélet]
math_tools: [szögimpulzus, spin, lyukformalizmus, differenciálegyenletek]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "13224-13279"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Oxigén. Az elektronkonfiguráció 1s2 2s2 2p4 . Ez valójában könnyebb, mint a nitrogén esete, mert a két hiányzó elektront „lyukakként” kezelhetjük: ugyanazzal az ℓ-lel és s-sel rendelkeznek, de az elektronéhoz képest ellentétes mℓ- és ms-értékkel. Az LS-multiplettjelek ezért pontosan ugyanazok, mint a szén esetén.

Megjegyzés. Az első eset, amikor a H0 alapállapota degenerált LS-multiplettjelekhez vezet, három d-elektron esete; ez először a vanádiumban, Z = 23 esetén fordul elő. Ennél bonyolultabb rendszerekben a válasz meglehetősen körülményes, ezért standard táblázatokhoz fordulunk.

10.6    Kémia


11     Időfüggő perturbációelmélet
11.1    Formalizmus
Kezdetként a kvantummechanikai „képeket” (vagy „vonatkoztatási kereteket”) vezetjük be.

 • Időfüggő perturbációelméletben a Hamilton-operátort

                                              H(t) = H0 + H1 (t)

     alakúnak tekintjük, ahol H0 megoldható, H1 pedig perturbációként kezelendő.

 • Az ⟨f |U (t)|i⟩ átmeneti amplitúdókat szeretnénk kiszámítani, ahol tipikusan |i⟩ és |f ⟩ a perturbálatlan Hamilton-
   operátor sajátállapotai, U (t) pedig az időfejlődési operátor. Ezt célszerű az alább bevezetendő interakciós képben
   elvégezni.

 • A Heisenberg-képben minden időfüggést az operátorokra viszünk át:

                                           AH (t) = U † (t)AS (t)U (t)

     ahol U (t) a H(t) Hamilton-operátorhoz tartozó, 0-tól t-ig tartó időfejlődési operátor. Az állapotokat a t = 0
     időpontbeli értékükön rögzítjük. Konstrukció szerint természetesen minden mátrixelem ugyanúgy adódik, mint a
     Schrödinger-képben. Továbbá, ha CS = AS BS , akkor CH = AH BH , vagyis minden operátorazonosság (például a kommutációs
     relációk) érvényben marad a Heisenberg-képben.

 • Különösen a Hamilton-operátor kifejezése is érvényes marad, tehát

                                         HH (t) = HS (pH (t), xH (t), t).

     A speciális [HS (t), HS (t′ )] = 0 esetben minden időpontra (például időfüggetlenség esetén) azt kapjuk, hogy

                                                  HH (t) = HS (t).

 • A Heisenberg-operátor definícióját deriválva és felhasználva
                                                  ∂U (t)
                                             iℏ          = HS (t)U (t)
                                                   ∂t
     megkapjuk a Heisenberg-féle mozgásegyenletet:

                                   dAH (t)                               ∂AS (t)
                              iℏ           = [AH (t), HH (t)] + iℏ                         .
                                     dt                                    ∂t          H

     Azokat az időfüggetlen Schrödinger-operátorokat, amelyek mindig kommutálnak a Hamilton-operátorral, a Schrödinger-
     képben megmaradó mennyiségeknek nevezzük; a Heisenberg-képben nincs időfejlődésük.
