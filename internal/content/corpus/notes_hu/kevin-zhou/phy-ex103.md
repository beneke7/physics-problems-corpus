---
id: kevin-zhou-notes-phy-ex103
source: kevin-zhou-notes
native_id: "phy Example 103"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex103
topic: [kvantumfizika]
subtopic: [szórás, S-mátrix, Green-függvények]
math_tools: [komplex-analízis, lineáris-algebra, Green-függvények]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "14949-15068"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Green-függvények segítségével megmutatjuk, hogy a |ψk ⟩ szórási állapotok ortonormáltak. Azt kapjuk, hogy
                                                                                   1
           ⟨ψk′ |ψk ⟩ = ⟨ψk′ |k⟩ + ⟨ψk′ |G+ (E)V |k⟩ = ⟨ψk′ |k⟩ + lim                    ⟨ψk′ |V |k⟩
                                                                      ϵ→0 E + iϵ − E ′

ahol E ′ = ℏ2 k ′2 /2m. Ezután az első tényezőre alkalmazva a Lippmann–Schwinger-egyenletet,
                                                                               1
            ⟨ψk′ |k⟩ = ⟨k′ |k⟩ + ⟨ψk′ |V G0− (E ′ )|k⟩ = ⟨k′ |k⟩ + lim                 ⟨ψk′ |V |k⟩.
                                                                    ϵ→0 E ′ − iϵ − E

A járulékos tagok kiesnek, így ⟨ψk′ |ψk ⟩ = ⟨k′ |k⟩ = δ(k − k′ ). A teljességi reláció
                                X               Z
                                   |nα⟩⟨nα| + dk |ψk ⟩⟨ψk | = 1
                                   nα

ahol az első tag a kötött állapotokat tartalmazza, amelyek minden szórási állapotra ortogonálisak.

12.5   Az S-mátrix
Az S-mátrixot az egydimenziós potenciálszórás egyszerű példáján keresztül vezetjük be.

 • Jobbra haladó beeső hullám esetén a szórt hullámot így írhatjuk fel:
                                       (
                                        eikx + re−ikx x → −∞,
                              ψR (x) ∼
                                        teikx         x → +∞.

    Ekkor R = |r|2 és T = |t|2 a visszaverődés, illetve áteresztés valószínűségét adja, amint az a valószínűségi fluxusok
    kiszámításával látható. A valószínűség megmaradása R + T = 1-et követel meg.

 • Hasonlóképpen balra haladó hullámokat használhatunk, és definiálhatjuk
                                         (
                                          t′ e−ikx                     x → −∞,
                                ψL (x) ∼
                                          e−ikx + r′ eikx              x → +∞.

 • Mivel a potenciál valós, ha ψ megoldás, akkor ψ ∗ is az. Ez a következő azonosságokat adja:
                                                                    r∗ t
                                                 t′ = t,   r′ = −
                                                                    t∗
    így |r| = |r′ |. Ezek az eredmények a klasszikus szórásban is megjelennek az időtükrözési szimmetria következtében.
    Ugyanez a szimmetria működik itt is, mivel az időtükrözés komplex konjugálás.

 • Konkrét példaként a V (x) = −V0 θ(x − a/2)θ(x + a/2) véges kútnak

               (k 2 − q 2 ) sin(qa)e−ika                              2iqke−ika                        2mV0
    r=                                       ,    t=                                       ,    q2 =        + k2 .
         (q 2 + k 2 ) sin(qa) + 2iqk cos(qa)           (q 2 + k 2 ) sin(qa) + 2iqk cos(qa)              ℏ2
    alakja van. Megjegyezzük, hogy kis k esetén tökéletes visszaverődés, nagy k esetén nincs visszaverődés, továbbá olyan
    k-ra, amelyre sin(qa) = 0, tökéletes áteresztés, vagyis rezonáns áteresztés van. Azt is megjegyezzük, hogy r = r′ .
    Ez a paritásszimmetriából következik, ahogy alább látni fogjuk.

 • Az adatainkat az S-mátrixszal foglaljuk össze:

                            ψR       IR        OR                           t r
                                =         +S       ,                   S=
                            ψL       IL        OL                           r ′ t′

    ahol IR egy jobbra haladó beeső hullám, OL pedig egy balra haladó kimenő hullám, és így tovább. A fenti azonosságok
    alkalmazásával látható, hogy S unitér.

Most egy általános paritásszimmetrikus V (x) = V (−x) potenciált tekintünk.

 • Hasznos paritásbázisra áttérni:

         I+ (x) = e−ik|x| ,   I− (x) = sign(x)e−ik|x| ,      O+ (x) = eik|x| ,   O− (x) = − sign(x)eik|x|

    amelyet a következő bázisváltás kapcsol össze:

                       I+         IR        O+     OR                                 1 1
                            =M         ,       =M     ,                     M=              .
                       I−         IL        O−     OL                                −1 1

    E transzformáció alkalmazásával az S-mátrix paritásbázisbeli alakja S P = M SM −1 .

 • Paritásszimmetrikus potenciál esetén r = r′ , mert ψR (x) = ψL (−x). Ekkor S P alakja egyszerűsödik:

                         P     S++
                       S =                   , S++ = t + r, S−− = t − r.
                                      S−−

   A nem diagonális elemek nullák, mert a paritás megmarad.

 • Az azonosságainkat kombinálva azt kapjuk, hogy S++ és S−− fázisok:

                                  S++ = e2iδ+ (k) ,   S−− = e2iδ− (k) .

   Ez analóg azzal, ahogyan a háromdimenziós centrális erőterű szórást a parciális-hullám-kifejtésben fázisok halmazává
   alakítottuk.

 • Az S-mátrix kötött állapotokat is érzékelhet. Mivel az r(k) és t(k) levezetéséhez használt algebra sehol nem feltételezte,
   hogy k valós, ugyanezek a kifejezések általános komplex k-ra is érvényesek. Tekintsünk páros paritású, tisztán képzetes
   k = iλ hullámszámot:

                 lim ψ+ (x) = I+ (x) + S++ O+ (x),      I+ (x) = eλ|x| ,   O+ (x) = e−λ|x| .
               |x|→∞

   Úgy tűnik, itt nem lehet kötöttállapot-megoldás, mivel az I+ komponens divergál a végtelenben. A trükk az, hogy ezt így
   írjuk át:
                                                −1
                                  lim ψ+ (x) = S++ I+ (x) + O+ (x)
                                 |x|→∞

                                                 −1
   ami érvényes kötött állapotot ad, amennyiben S++    = 0, ez pedig S++ pólusának felel meg. Vagyis a kötött állapotokat
   az S-mátrix elemeinek pólusaiból azonosíthatjuk! (Ugyanez az érvelés az eredeti bal/jobb bázisban is működik, bár több
   tag jelenik meg.)

 • Gondos algebrai számolással

                                                      q tan(qa/2) − ik
                                 S++ (k) = −e−ika
                                                      q tan(qa/2) + ik

   adódik, ami megmutatja, hogy a páros paritású kötött állapotok akkor jelennek meg, amikor λ = q tan(qa/2), ami ismerős
   eredmény. A kötöttállapot-energiát az E = −ℏ2 λ2 /2m összefüggésből kaphatjuk meg.
