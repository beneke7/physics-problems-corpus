---
id: kevin-zhou-notes-phy-ex102
source: kevin-zhou-notes
native_id: "phy Example 102"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex102
topic: [kvantumfizika]
subtopic: [Green-függvények, Lippmann–Schwinger-egyenlet, szórás]
math_tools: [komplex-analízis, differenciálegyenletek, Born-sorfejtés]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "14781-14948"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. A szabad részecske háromdimenziós G0± (x, x′ , E) Green-függvényei. Legyen z = E +iϵ,
                                                                                                             ′
                                                                                              dp eip·(x−x )/ℏ
                                           Z                                            Z
          ′                  −1       ′              ′           1
 G0+ (x, x , z) = ⟨x|(z − H0 )    |x ⟩ =       dp dp ⟨x|p⟩⟨p|        |p′ ⟩⟨p′ |x′ ⟩ =                         .
                                                              z − H0                        (2πℏ)3 z − p2 /2m

Az egyszerűség kedvéért a transzlációs invariancia miatt x′ = 0-t választunk, p = ℏq-t írunk, és z = E + iϵ =
ℏ2 w2 /2m alakot veszünk egy komplex w hullámszámra (így w az első síknegyedben van). Ekkor
                                                                              Z ∞
                                               eiq·x                                              qeiqx
                                      Z
                             1 2m                          1 2m i
            G0+ (x, z) = −                 dq 2        =                                dq
                           (2π)3 ℏ2          q −w    2   (2π)2 ℏ2 x                −∞        (q − w)(q + w)

ahol elvégeztük a szögintegrálást. A végső integrálhoz a kontúrt a felső félsíkban zárjuk, és felvesszük a q = w pólust.
Ekkor

                                                         1 2m eiwx
                                      G0+ (x, z) = −               .
                                                        4π ℏ2 x
A bejövő Green-függvény hasonló, de a négyzetgyök olyan ágát választjuk, hogy w a negyedik síknegyedben legyen, így
ezúttal a q = −w pólust vesszük fel, ami e−iwx -et ad. Hullámszámokra visszatérve
                                                  (
                                            1 2m e±ikx /x, E ≥ 0,
                            G0± (x, E) = −
                                           4π ℏ2 e−κx /x, E ≤ 0
                              √
alakú, ahol a k, κ ∼ ±E mennyiségek mind valósak és pozitívak. Az ágak ezen megválasztásával biztosítottuk, hogy G0± a
negatív valós tengelyen folytonos legyen, ennek következtében viszont a pozitív valós tengelyen szakadása van, ahogy vártuk.

12.4    A Lippmann–Schwinger-egyenlet
A Green-függvények erős általános formalizmust adnak szórási feladatokhoz. Az alábbiakban potenciálszórásra összpontosítunk,
bár ugyanezek a technikák sok más kontextusban, például térelméletekben is működnek.

  • A gerjesztett, időfüggetlen Schrödinger-egyenlet megoldásai érdekelnek:

                                          (E − H0 )ψ(x) = V (x)ψ(x)

    ahol E > 0, és megmutattuk, hogy a megoldások felírhatók
                                          Z
                           ψ(x) = ϕ(x) + dx′ G0 (x, x′ , E)V (x′ )ψ(x′ )

    alakban, ahol ϕ(x) a homogén egyenletet oldja meg (vagyis E energiájú szabad részecske).

  • Mivel szórási megoldások érdekelnek, a kimenő G0+ Green-függvényt választjuk, a homogén megoldás pedig |ϕk ⟩ = |k⟩
    beeső síkhullám, amelyre E = ℏ2 k 2 /2m. Ez adja a Lippmann–Schwinger-egyenletet. Ketekkel felírva

                                          |ψk ⟩ = |ϕk ⟩ + Ĝ0+ (E)V |ψk ⟩

    A k indexet azért tesszük ki, hogy hangsúlyozzuk: a megoldás nemcsak E-től, hanem k megválasztásától is függ, mert k
    adja meg, milyen irányból indítjuk a részecskéket. Hullámfüggvényekkel

                                             1 2m
                                                       Z              ik|x−x′ |
                                                                ′ e
                          ψk (x) = ϕk (x) −                dx                     V (x′ )ψk (x′ ).
                                            4π ℏ2                |x − x′ |

 • A Lippmann–Schwinger-egyenletnek számos változata van. Például proton–proton szórásban V egy Coulomb-potenciál és a
   magpotenciál összege. Ekkor a Coulomb-tagot H0 -ba foglalhatjuk, így a beeső hullám pozitív energiájú Coulomb-megoldás lenne,
   és a Coulomb-potenciálhoz tartozó Green-függvényeket használnánk.

 • Tegyük fel most, hogy a potenciál véges sugár után levágódik, és a szórást sokkal nagyobb r = |x| sugáron figyeljük meg.
   Ekkor az integrálban x′ ≪ r, ezért x′ /r szerint sorba fejthetünk, és elhagyhatjuk az összes 1/r-nél gyorsabban lecsengő
   tagot. Így

                                           1 2m eikr
                                                                Z
                                                                              ′   ′
                        ψk (x) ≈ ϕk (x) −                           dx′ e−ik ·x V (x′ )ψk (x′ ).
                                          4π ℏ2 r
    Ez pontosan megegyezik a szakasz elején feltételezett „beeső plusz szórt” hullámfüggvény-alakkal, a szórási amplitúdó pedig

                                 (2π)3/2 2m                                           4π 2 m ′
                                              Z
                                                           ′    ′
                f (k, k′ ) = −                    dx′ e−ik ·x V (x′ )ψk (x′ ) = −           ⟨k |V |ψk ⟩.
                                   4π ℏ2                                               ℏ2
    Ezért bebizonyítottuk, hogy a hullámfüggvénynek általában ilyen alakúnak kell lennie. Gyorsan lecsengő potenciálokra
    hasonló állítás bizonyítható, a Coulomb-potenciálra azonban nem érvényes.

 • A bejövő Green-függvényt is használhatjuk; ez olyan megoldást ír le, amelyben a hullámok a végtelenből érkeznek, majd
   síkhullámként távoznak. Mivel a kimenő megoldás sokkal reálisabb, arra összpontosítunk, és a plusz jelet hallgatólagosan
   elhagyhatjuk.

 • Végül E < 0 esetén a kötött állapotokra integrálkifejezést kapunk:
                                                                          ′
                                                                e−κ|x−x |
                                                      Z
                                               1 2m
                                 ψ(x) = −                 dx′              V (x′ )ψ(x′ )
                                              4π ℏ2              |x − x′ |

    ahol nincs homogén tag, mert a szabad részecske megoldásai nem csengenek le a végtelenben. Megoldások csak E diszkrét
    értékeire léteznek. A Green-függvényben sincs választási lehetőség, mert a két függvény a negatív valós tengelyen megegyezik.

A Lippmann–Schwinger-egyenlet segítségével Born-sornak nevezett perturbációs sort vezethetünk le szórásra.

 • A Lippmann–Schwinger-egyenletet átírhatjuk:

                                          |k⟩ = (1 − G0+ (E)V )|ψk ⟩

    amelynek formális megoldása

                            |ψk ⟩ = Ω+ (E)|k⟩,         Ω+ (E) = (1 − G0+ (E)V )−1

    ahol Ω+ (E)-t Møller-féle szórási operátornak nevezzük. Hasonlóképpen definiálhatunk bejövő Ω− (E) alakot, valamint
    komplex energiájú, általános Ω(z) operátort:

                           Ω(z) = (1 − G0 (z)V )−1 ,            Ω± (E) = lim Ω(E ± iϵ).
                                                                              ϵ→0

  • V szerinti sorfejtéssel a Born-sor

                                Ω(z) = 1 + G0 (z)V + G0 (z)V G0 (z)V + . . .

    amely explicit módon

                        |ψk ⟩ = |k⟩ + G0+ (E)V |k⟩ + G0+ (E)V G0+ (E)V |k⟩ + . . .

    alakú. Ezt a szórási amplitúdó kifejezésébe behelyettesítve
                                         4π 2 m   ′
                        f (k, k′ ) = −           ⟨k |V |k⟩ + ⟨k′ |V G0+ (E)V |k⟩ + . . . .

                                          ℏ 2

    Ha ezeket a sorokat V n-nél levágjuk, az n-edik Born-közelítést kapjuk. A Born-sor úgy is levezethető, hogy a Lippmann–
    Schwinger-egyenletet önmagába helyettesítjük.

  • Az első Born-közelítés visszaadja az időfüggő perturbációelmélet elsőrendű eredményét: a szórási amplitúdó arányos a
    potenciál Fourier-transzformáltjával. Általában a Dyson-sor (az időfüggő perturbációelméletből) nagyon hasonló a Born-sorhoz.
    Mindkettő V hatványaiban fejt, csak rendre idő-, illetve energiatartományban.

  • Az eredményeket az egzakt Green-operátorral is megfogalmazhatjuk:
                                                            1
                                                 G(z) =        .
                                                           z−H
    A z argumentumot elhagyva és átrendezve

                                      G = G0 + G0 V G = G0 + GV G0

    adódik, ami G-re vonatkozó Lippmann–Schwinger-egyenlet. Ez az egzakt Green-függvényt a potenciálon történő szórások
    száma szerinti sorozatként adja.

  • További átrendezéssel

                                    Ω = 1 + GV,        |ψk ⟩ = (1 + GV )|k⟩.

    Ebben a képben egy szórási folyamat kezdeti szórással, majd az egzakt Green-függvény szerinti terjedéssel megy végbe.
