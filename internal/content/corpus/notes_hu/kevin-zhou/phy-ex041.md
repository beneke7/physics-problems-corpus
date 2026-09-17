---
id: kevin-zhou-notes-phy-ex041
source: kevin-zhou-notes
native_id: "phy Example 041"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex041
topic: [statisztikus-mechanika]
subtopic: [klasszikus-gázok, partíciós-függvény]
math_tools: [nyom, fázistérbeli integrálok, Gauss-integrálok]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3696-3778"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Minden részecskéhez a Ĥ = p̂2 /2m + V (q̂) Hamilton-operátor tartozik, ahol a potenciál a részecskét egy dobozba zárja. A partíciós függvény definíciója Z = tr e−β Ĥ . A klasszikus határátmenetben elhanyagoljuk a kommutátorokat:
                                                    2
                                     e−β Ĥ = e−β p̂ /2m e−βV (q̂) + O(ℏ).

A helykoordináták szerinti nyomot véve:
              Z                                   Z
                     −βV (q)      −β p̂2 /2m                                        2
         Z ≈ dq e            ⟨q|e            |q⟩ = dq dp dp′ e−βV (q) ⟨q|p⟩⟨p|e−β p̂ /2m |p′ ⟩⟨p′ |q⟩.
                                                      √
A p′ szerinti integrált kiértékelve, valamint az ⟨q|p⟩ = eipq/ℏ / 2πℏ összefüggést használva azt kapjuk, hogy
                                             Z
                                           1
                                      Z=        dq dp e−βH(p,q)
                                           h
klasszikus határátmenetben. Általában az e−βH fázistérbeli integráljai adódnak, ahol h a fázistérfogat egysége. h értéke nem befolyásolja a klasszikus számításunkat, mivel csak egy multiplikatív konstanssal változtatja Z-t.
71 3. Statisztikus mechanika


Ezután visszakapjuk a klasszikus ideális gáz tulajdonságait.

 • Ideális gáz egyetlen részecskéje esetén a helykoordináták szerinti integrál V térfogati tényezőt ad. A Gauss-integrálokat elvégezve:
                                                      s
                                            V             2πℏ2
                                      Z = 3, λ =                .
                                           λ             mkB T

    A termikus de Broglie-hullámhossz, λ, egy részecske jellemző de Broglie-hullámhossza. A Z-re kapott kifejezés akkor válik érthetővé, ha Z-re úgy gondolunk, mint a „termikusan hozzáférhető állapotok számára”; mindegyik ilyen állapot egy λ3 térfogatú hullámcsomag lehet.

 • N részecskére
                                                   1 VN
                                                Z=         .
                                                   N ! λ3N
    Az N ! tényezőt Gibbs-korrekciónak nevezzük. Ezt az azonos részecskék konfigurációinak túlszámlálása elkerülése érdekében kell beiktatni; nélküle az entrópia nem lenne kiterjedt. A Gibbs-korrekció kiváló tárgyalása, amely az entrópia fogalmi kérdéseit is érinti, a The Gibbs Paradox című írásban található.

 • Az ideális gáz entrópiája:
                                                                     
                              ∂F    ∂                          V    5
                          S=−    =    (kB T log Z) = N kB log     +
                              ∂T   ∂T                         N λ3 2
    ahol Stirling-közelítést használtunk, és elhagytuk a szubextenzív tagokat. Ez a Sackur–Tetrode-egyenlet. Bár az entrópia explicit módon függ h-tól, h értéke nem mérhető, mivel klasszikusan csak entrópiakülönbségek mérhetők. Ezt felhasználva visszakaphatjuk az ideális gáz törvényét és a belső energiát, amelyekre az ekvipartíció teljesül.

 • A nagykanonikus sokaságban
                                                               βµ 
                                        X
                                            βµN                e V
                                   Z=       e     Z(N ) = exp        .
                                                                λ3
                                        N

    A várható részecskeszám ekkor
                                   1 ∂          eβµ V                      λ3 N
                              N=        log Z =       ,     µ = kB T log        .
                                   β ∂µ          λ3                         V
    A kémiai potenciál tehát negatív, mivel a klasszikus határátmenet feltétele λ3 ≪ V /N .

 • A sebesség- és a sebességnagyság-eloszlást könnyen levezethetjük:
                                            2                          2
                              F (v) ∝ e−mv /2kB T      f (v) ∝ v 2 e−mv /2kB T .

    Ennek egyik gyakori, elegáns levezetése az, hogy feltesszük: a sebességkomponensek függetlenek és azonos eloszlásúak, továbbá forgásszimmetria miatt F csak a sebesség nagyságától függhet. Ekkor

                                        F (v) = ϕ(vx )ϕ(vy )ϕ(vz )
                                                   2
    amelynek csak egy megoldása van, F (v) ∝ e−Av . Ez a levezetés azonban hibás, mert általában a sebességkomponensek nem függetlenek.
