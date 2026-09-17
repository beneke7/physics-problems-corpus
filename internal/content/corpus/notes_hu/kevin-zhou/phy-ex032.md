---
id: kevin-zhou-notes-phy-ex032
source: kevin-zhou-notes
native_id: "phy Example 032"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex032
topic: [statisztikus-mechanika]
subtopic: [entrópia, kanonikus-sokaság]
math_tools: [Gibbs-entrópia, kombinatorika]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3154-3236"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Most kiszámítjuk a kanonikus sokaság entrópiáját. Tegyük fel, hogy a kanonikus sokaságnak W példánya van; ekkor a |n⟩ állapotban pn W rendszer lesz. Mivel W nagy, az összes példányt mikrokanonikus sokaságban lévőnek tekinthetjük, amelynek entrópiája
                                                 W!               X
                     S = kB log Ω = kB log Q              = −kB W   pn log pn .
                                               n (pn W )!         n

Mivel az entrópia kiterjedt mennyiség, egy példány entrópiája
                                                 X
                                       S = −kB      pn log pn
                                                     n

és ezt a kifejezést Gibbs-entrópiának nevezzük. Arányos az információelmélet Shannon-entrópiájával; azt az információmennyiséget adja meg, amelyet akkor nyerünk, ha a makroállapot ismeretében megtudjuk, melyik a mikroállapot.

Most definiáljuk a szabadenergiát és a többi termodinamikai potenciált.

 • A kanonikus sokaságban a szabadenergiát így definiáljuk:

                                              F = E − T S.

    Itt hallgatólagosan a termodinamikai határátmenetet vettük, és E az ⟨E⟩ átlagértéket jelenti.

 • F differenciálja dT és dV segítségével felírható:
                                                           ∂F                ∂F
                          dF = −S dT − p dV,         S=−        ,     p=−         .
                                                           ∂T V              ∂V T
    Néha olyan kijelentéseket hallani, hogy „F természetes változói T és V , míg E természetes változói S és V ”. Természetesen e mennyiségek bármelyike felírható a (P, V, T, S) négyes bármely két tagjának függvényeként, az entrópia kifejezését és az állapotegyenletet használva. A megfogalmazás csak azt jelenti, hogy ha F-et T és V függvényének tekintjük, a differenciálja különösen egyszerű.
61 3. Statisztikus mechanika


 • Az F és Z kapcsolatának meghatározásához használjuk a Gibbs-entrópiára kapott kifejezésünket:
                                        X e−βEn                e−βEn
                            S/kB = −                     log         = log Z + ⟨βE⟩.
                                         n
                                                Z                Z

    Átrendezve:
                                               F = −kB T log Z.

 • Ezután megengedjük, hogy a részecskeszám N változzon, és definiáljuk a kémiai potenciált:
                                                           ∂S
                                               µ = −T             .
                                                           ∂N E,V

    Az energia teljes differenciálja:
                                                                            ∂E
                                 dE = T dS − p dV + µ dN,             µ=
                                                                            ∂N S,V

    ahol a háromtényezős szorzási szabályt használtuk.

 • Vegyük észre, hogy egy klasszikus gáz kémiai potenciálja negatív, mivel ez az energia ára rögzített S mellett hozzáadott részecskénként. Az entrópia állandó értéken tartásához rendszerint több energiát kell eltávolítanunk, mint amennyit a részecske jelenléte hozzáadott. Ezzel szemben a Fermi-gázban abszolút nulla hőmérsékleten µ = EF > 0, mert az entrópia pontosan nulla.

 • Hasonlóan definiálhatjuk a nagykanonikus sokaságot is, megengedve N változását. Ekkor
                                 e−β(En −µNn )                        X
                          pn =                 ,    Z(T, µ, V ) =           e−β(En −µNn )
                                      Z                                 n

    ahol Z a nagykanonikus partíciós függvény.

 • Az N eloszlására vonatkozó információt Z deriválásával nyerhetünk. A kumulánsgeneráló függvényre vonatkozó érv az előzőhöz hasonlóan működik:
                                             ∂ log Z                  ∂ 2 log Z
                                    ⟨N ⟩ =           ,     var N =              .
                                             ∂(βµ)                    ∂(βµ)2
    Az energiához hasonlóan itt is azt látjuk, hogy a variancia kiterjedt mennyiség, így a fluktuációk a termodinamikai határátmenetben eltűnnek.

 • Hasonlóképpen definiáljuk a nagykanonikus potenciált, Φ = F − µN , ekkor
                            dΦ = −S dT − p dV − N dµ,               Φ = −kB T log Z

    az előzőhöz hasonló érveléssel. Más szavakkal, az (E, Z, F ) megfelel az (F, Z, Φ) hármasnak.
