---
id: kevin-zhou-notes-phy-ex033
source: kevin-zhou-notes
native_id: "phy Example 033"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex033
topic: [statisztikus-mechanika]
subtopic: [termodinamika, extenzivitás]
math_tools: [Euler-tétel, Legendre-transzformációk]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3237-3346"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. A legtöbb esetben az energia és az entrópia kiterjedt mennyiség. Ez azt jelenti, hogy

                                    E(λS, λV, λN ) = λE(S, V, N ).

λ = 1-nél deriválva azt kapjuk, hogy
                                         E = T S − pV + µN.
62 3. Statisztikus mechanika


A teljes differenciál felvétele után a Gibbs–Duhem-egyenletet kapjuk:
                                       S dT − V dp + N dµ = 0.
Azt is látjuk, hogy a nagykanonikus potenciál Φ = −pV , ami egyszerű módot ad a nyomás kiszámítására. Vegyük észre, hogy ha még egy Legendre-transzformációt végzünk V -ből p-be, akkor egy azonosan nulla potenciált kapunk! Ez érthető, hiszen ha már nincs kiterjedt változó, akkor a „rendszerünknek” a hőtartálytól függetlenül nincs jellemzője. Emiatt a Φ + pV potenciál nem hasznos. Egy másik hasznos felismerés, hogy µ = G/N , tehát a kémiai potenciál a molekulánkénti Gibbs-szabadenergiát méri.

3.2     Thermodynamics
Ettől a ponttól kezdve újrakezdjük a termodinamikát. Az egyszerűség kedvéért olyan gázokat tekintünk, amelyeknek csak a nyomás, a térfogat és a hőmérséklet a termodinamikai változóik.
  • A termodinamika célja, hogy egy sok szabadsági fokkal rendelkező rendszert mindössze makroszkopikusan megfigyelhető mennyiségekkel, azaz termodinamikai változókkal írjon le.
    Történetileg ezt szükségből alkalmazták, és egyszerűsége miatt ma is hasznos. Csak részleges információt ad, de a gyakorlatban gyakran éppen erre az információra van szükségünk.
  • A termodinamika a modern effektív térelmélet és renormálási csoport egyfajta előfutára. Amint a Statisztikus térelmélet jegyzeteiben leírtuk, a mikroszkopikus fizikából statisztikus mechanikával és ismételt durvaszemcsézéssel vezethető le, míg végül csak a makroszkopikus információ marad. A termodinamika azonban önmagában is megáll; érvényessége nagyrészt független a mikroszkopikus fizikától.
  • A nulladik főtétel kimondja, hogy a rendszerek közötti termikus egyensúly létezik és tranzitív. Ez azt jelenti, hogy a rendszerekhez hozzárendelhetünk egy T (p, V ) hőmérsékletet úgy, hogy az azonos hőmérsékletű rendszerek egyensúlyban vannak. A T = T (p, V ) egyenletet állapotegyenletnek nevezzük. Ebben a szakaszban T helyett bármely monoton f (T ) függvény választható.
  • Az első főtétel szerint az energia állapotfüggvény. A munka azon energiatranszferek összessége, amelyeket makroszkopikusan megfigyelhető makroszkopikus mennyiségek, például a térfogat változása okoz. Minden más energiaátadást hőnek nevezünk, tehát
                                           dE = d̄Q + d̄W
      ahol a d̄ a nem egzakt differenciált jelöli. (Itt az „egzakt” ugyanabban az értelemben szerepel, mint a differenciálformák elméletében, mivel a fenti tagok mindegyike a termodinamikai változók terén értelmezett egyforma lehet.)
  • A második főtétel szerint lehetetlen hőt más hatás nélkül hidegebb testről melegebb testre átvinni.
  • A Carnot-körfolyamat olyan ideális gázzal végzett folyamat, amely QH hőt von el egy meleg hőtartályból, W munkát végez, és QL hőt ad le egy hideg hőtartálynak. A hatásfok definíciója
                                                      W
                                                 η=      .
                                                      QH
      A Carnot-körfolyamat felépítéséből adódóan reverzibilis. A második főtétel szerint ezért egyetlen körfolyamatnak sem lehet nagyobb hatásfoka.
63 3. Statisztikus mechanika


 • Két Carnot-körfolyamat összekapcsolásával a következő feltételt kapjuk:

                              (1 − η(T1 , T3 )) = (1 − η(T1 , T2 ))(1 − η(T2 , T3 ))

    ahol T a hőmérséklet. Ezért

                                                               f (T2 )
                                           1 − η(T1 , T2 ) =           .
                                                               f (T1 )

    Az egyszerűség kedvéért az f (T ) = T választással rögzítjük a hőmérséklet definícióját. (A statisztikus mechanikában ezt a választást az S = kB log Ω definíció kényszeríti ki.)

 • E választással a Carnot-körfolyamatra QH /TH + QC /TC = 0 teljesül. Mivel minden reverzibilis folyamat felbontható infinitezimális Carnot-körfolyamatokra,
                                               I
                                                  d̄Q
                                                      =0
                                                   T
                                                R
    tetszőleges reverzibilis körfolyamatra. Ez azt jelenti, hogy a d̄Q/T független az úttól, amennyiben csak reverzibilis utakat használunk, ezért definiálhatunk egy állapotfüggvényt:
                                                        Z A
                                                               d̄Q
                                               S(A) =              .
                                                          0     T

 • A második főtételt ismét használva kapjuk a Clausius-egyenlőtlenséget:
                                          I
                                             d̄Q
                                                 ≤0
                                              T
    tetszőleges körfolyamatra. Tegyük fel például, hogy A-ból B-be irreverzibilis adiabatikus utat, majd visszafelé reverzibilis utat választunk. A Clausius-egyenlőtlenség ekkor azt mondja, hogy S(B) ≥ S(A), ami a második főtétel szokásos állítása.
  • A harmadik főtétel szerint S/N nullához tart, amikor T nullához tart; ez azt jelenti, hogy a hőkapacitásoknak nullához kell tartaniuk. Egy ezzel ekvivalens megfogalmazás szerint izoterm és adiabatikus folyamatokkal végtelen sok lépés szükséges a T = 0 eléréséhez.
  • A statisztikus mechanikában a harmadik főtétel egyszerűen azt jelenti, hogy az alapállapot degenerációjának logaritmusa nem lehet kiterjedt. Például N spinből álló, nulla térben lévő rendszerben azt gondolhatnánk, hogy az alapállapot degenerációja 2N . A valóságban azonban a tetszőlegesen gyenge kölcsönhatások is mindig megszüntetik ezt a degenerációt.

Megjegyzés. Reverzibilis és irreverzibilis folyamatok. Csak reverzibilis folyamatokra igaz, hogy

                                   d̄Qrev = T dS,      d̄Wrev = −p dV.

Például szabad tágulásnál a térfogat és az entrópia megváltozik, noha nincs hő- vagy munkaközlés. Reverzibilis folyamat esetén azonban az első főtétel dE = T dS − p dV alakú. Mivel mindkét oldal állapotfüggvény, ennek minden folyamatra igaznak kell lennie, bár az egyes tagok többé nem a hőt, illetve a munkát írják le! Az alábbiakban figyelmen kívül hagyjuk ezt a finomságot, és minden változást reverzibilisnek tekintünk.
