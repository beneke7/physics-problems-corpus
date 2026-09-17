---
id: kevin-zhou-notes-phy-ex061
source: kevin-zhou-notes
native_id: "phy Example 061"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex061
topic: [kvantumfizika]
subtopic: [Fourier-transzformáció, hullámmechanika]
math_tools: [Fourier-ötletek, differenciálegyenletek]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "6859-7000"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Az impulzustérbeli ϕ(p) = ⟨p|ψ⟩ hullámfüggvényt a Fourier-transzformáció kapcsolja a
ψ(x)-hez,
           Z                      Z                                   Z
                              1         −ipx/ℏ                    1
     ϕ(p) = dx ⟨p|x⟩⟨x|ψ⟩ = √       dx e       ψ(x), ψ(x) = √            dp eipx/ℏ ϕ(p).
                              2πℏ                                 2πℏ
Ez a fő pont, ahol a konvenciók eltérhetnek. Az eredeti 2π tényező a delta-függvény
                                           Z
                                     δ(x) = dξ e2πixξ .

reprezentációjából származik.

Az impulzussajátállapotok definiálásakor szabadon választhatjuk meg p skáláját, ami megváltoztathatja
a fenti ⟨x′ |p′ ⟩ kifejezést. Ez lehetővé teszi, hogy a 2π tényezőt ide-oda helyezzük. Térrelméleti
szövegekben az impulzsintegrálokat inkább dk p/(2π)k alakú differenciállal definiáljuk.

Megjegyzés. Általában nincs olyan recept, amely klasszikus elméletekből meghatározná a kvantum-
elméleteket, és nem is várhatjuk, hogy legyen, mivel a kvantummechanika több információt tartalmaz,
mint a klasszikus mechanika. Fizikailag különböző kvantumrendszereknek pontosan ugyanaz lehet a
klasszikus határesetük. Tekintsük például egy q 2 p2-et tartalmazó Hamilton-operátor kanonikus
kvantálását. Klasszikusan q 2 p2 és p2 q 2 ugyanaz a fázistérbeli függvény, kvantumos megfelelőik
azonban különböznek:

                                q̂ 2 p̂2 − p̂2 q̂ 2 = q̂[q̂, p̂2 ] + [q̂, p̂2 ]q̂ = 2iℏ(q̂ p̂ + p̂q̂)

ahol a [A, BC] = B[A, C] + [A, B]C kommutátorazonosságot használtuk. Sok különböző „rendezési
előírás” létezik. Ezek közül különösen szép a Weyl-rendezés, amelyről az Optika-jegyzetekben
olvashatunk részletesebben; ez lényegében szimmetrizálja q és p sorrendjét.
129 5. A kvantummechanika alapjai


   Ha azonban rögzítünk is egy rendezési előírást, akkor sem lehet minden Hamilton-operátort
„szép” módon kanonikusan kvantálni. Pontosabban lineáris kvantálási leképezést, Q-t szeretnénk a
f fázistérbeli függvényekből önadjungált operátorokba úgy, hogy a Poisson-zárójelek kommutátorokba
menjenek át,
                                                          1
                                       Q({f, g}) =          [Q(f ), Q(g)],
                                                         iℏ
az állandó függvény az identitásba menjen át, Q(1) = I, a hatványok pedig hatványokba, Q(f n ) = Q(f )n.
A Groenewold–van Hove-tétel megmutatja, hogy ez lehetetlen, egy egydimenziós részecske konkrét
ellenpéldáján keresztül. Klasszikusan a
                                                     1
                                    {q 3 , p3 } +      {{p2 , q 3 }, {q 2 , p3 }}
                                                    12
Poisson-zárójel-kifejezés eltűnik, amint az könnyen megmutatható a {q n , pm } = nmq n−1 pm−1
azonosságból kiindulva. Ennek kanonikusan kvantált megfelelője azonban nem tűnik el:
                              1 3 3             1
                                [q̂ , p̂ ] +         [[p̂2 , q̂ 3 ], [q̂ 2 , p̂3 ]] = −3ℏ2
                             iℏ              12(iℏ)2
amint egy kimerítő, nyers erővel végzett számolással megmutatható.
    Ezért minden Hamilton-operátort csak akkor tudunk kvantálni, ha hajlandók vagyunk a fenti
feltételek némelyikét elhagyni. Az egyik módszer a deformációs kvantálás: a fázistérbeli függvények
szorzatát nemkommutatív „csillag-szorzattal” helyettesítjük, reprodukálva a kvantumoperátorok
nemkommutativitását. Ezután a Poisson-zárójel analógját, a Moyal-zárójelet definiálhatjuk, és a
kanonikus kvantálást ehelyett Moyal-zárójelekre alkalmazhatjuk. A geometriai kvantálás matematikailag
bonyolultabb módszer: először a kívántnál sokkal nagyobb Hilbert-téren hoz létre egy „előkvantálást”,
majd a megfelelő Hilbert-teret egy „polarizáció” kiválasztásával nyeri vissza.
    A gyakorlatban ez a fizikában lényegtelen. A fentihez hasonló kvantálási problémák csak p és q
köbös rendjében jelennek meg, de a p3 q 3 alakú tagok ritkák és természetellenesek a Hamilton-
mechanikában; ezekkel a jegyzetekben nem fogunk találkozni. Ahogy azonban fent láttuk, az operátorok
rendezésének kétértelműségei számíthatnak, és gyakorlati fizikai helyzetekben számítanak is. Az ilyen
kétértelműségeket többnyire egy általánosabb elmélet határátmenetével kezelik, amelyben nem jelennek
meg. Például a hidrogénatom finomszerkezeti korrekciói tartalmaznak a ∇2 V (r)-rel arányos „Darwin-
tagot”, amely p és r meglehetősen bonyolult rendezésének felel meg. Ez probléma lenne, ha a Darwin-
tagot klasszikus érvekből motiváltuk volna, de nem így van: ehelyett a Dirac-egyenlet nemrelativisztikus
határátmenetéből származik. A Dirac-egyenlet operátorrendezése egyszerű és ismert, és megadja a Darwin-
tag fizikailag helyes rendezését.
    A Dirac-egyenlet pedig egy relativisztikus kvantumtér-elmélet határátmenetével vezethető le,
ahol a fenti rejtélyek kevés szerepet játszanak, mivel a mezők kanonikus impulzusait soha nem
használjuk. Ezzel szemben új probléma jelenik meg: egyes operátorokat „normálisan kell rendezni” az
ultraibolya divergenciák elkerülésére. Ez vezet a renormáláshoz, amint azt a Kvantumtér-elmélet című
jegyzet tárgyalja.
Most az egydimenziós hullámmechanika néhány tényét tekintjük át.

  • Az időfüggetlen Schrödinger-egyenlet
                                         ℏ2 ′′
                                               −
                                            ψ + V ψ = Eψ.
                                         2m
    Tekintsünk két degenerált ψ és ϕ megoldást. Az egyenletek kombinálásával
                                                                        dW
                                              ϕψ ′′ − ψϕ′′ = 0 =
                                                                        dx
130 5. A kvantummechanika alapjai


   adódik, ahol W a megoldások Wronski-determinánsa:
                                                                    
                                                              ϕ ψ
                                   W = ϕψ ′ − ψϕ′ = det                .
                                                              ϕ′ ψ ′

   Általában a Wronski-determináns meghatározza egy differenciálegyenlet-megoldáshalmaz
   függetlenségét; ha nulla, a megoldások lineárisan függők.

 • Ebben az esetben, ha ψ és ϕ ugyanabban a pontban eltűnik, akkor W = 0, tehát a megoldások
   egyszerűen egymás skalárszorosai. Különösen a kötött állapotok hullámfüggvényei a végtelenben
   eltűnnek, így a kötött állapotok nem degeneráltak. A nem kötött állapotok lehetnek kétszeresen
   degeneráltak, például a szabad részecske e±ikx állapotai.

 • Mivel a Schrödinger-egyenlet valós, ha ψ E energiájú megoldás, akkor ψ ∗ is E energiájú megoldás.
   Ha ψ megoldása nem degenerált, akkor ψ = cψ ∗ kell legyen, vagyis ψ egy konstans fázis erejéig
   valós. Ezért a kötött állapotok hullámfüggvényei valósnak választhatók. Kiderül, hogy a nem kötött
   állapotok hullámfüggvényei is választhatók valósnak. (Ez az érv valójában az időfordítási
   szimmetriát használja rejtett formában, hiszen a hullámfüggvényt konjugáljuk.)

 • Kötött állapotok esetén a legkisebb energiájú állapottól számított n-edik állapotnak n − 1 csomópontja
   van. Ennek igazolásához tegyük fel, hogy egy E energiájú kötöttállapot-hullámfüggvényt próbálunk
   numerikusan meghatározni. Ehhez a következő „kilövési” algoritmust használhatjuk.

     1. Válasszunk egy E energiát, és induljunk egy x− pontból, amely messze balra van.
     2. Állítsuk ψ(x−)-et tetszőleges valós értékre, és rögzítsük ψ ′ (x−)-et úgy, hogy a hullámfüggvény
        ne szaladjon el, amikor x → −∞ felé integrálunk.
     3. Integráljuk a Schrödinger-egyenletet a potenciálon keresztül egészen x → ∞-ig.

   E általános értékére olyan hullámfüggvényt kapunk, amely x → ∞ esetén pozitív vagy negatív
   végtelenbe szalad. E növelésekor az elszaladás felváltva pozitív, illetve negatív végtelenbe mutat.
   Valahányszor ez bekövetkezik, egy kötött állapotot találunk, és ezzel egyidejűleg a csomópontok
   száma eggyel nő.

 • A fenti érv hiányossága, hogy az energia hangolásakor köztes x-eknél csomópontpárok is megjelen-
   hetnek. Például miért ne nézhetne ki lokálisan úgy ψ(x), mint x2 − a, így két csomópontot létre-
   hozva egyszerre, amikor a nullán áthalad? Ez azért nem történhet meg, mert a = 0 esetén olyan
   megoldásunk lenne, amelynél egy ψ = 0 pontban lokálisan ψ ′′ ̸= 0. Ez általános differenciálegyenlet
   esetén lehetséges, de a Schrödinger-egyenletnél nem.

 • A Wronski-determinánssal azt is megmutathatjuk, hogy a csomópontok száma nő az energiával.
   Legyen ψn és ψm két valós, normált kötöttállapot-hullámfüggvény En > Em energiákkal. Wronski-
   determinánsuk W = ψm  ′ ψ − ψ ψ ′, és teljesíti
                        n   m n

                                     dW  2m
                                        = 2 (En − Em )ψm ψn .
                                     dx   ℏ
   Legyenek ψm szomszédos csomópontjai x1 és x2. Az x1-től x2-ig történő integrálás eredménye
                                                                     Z x2
                   ′                  ′                2m
                 ψm  (x2 )ψn (x2 ) − ψm (x1 )ψn (x1 ) = 2 (En − Em )      ψm ψn dx.
                                                        ℏ             x1
131 5. A kvantummechanika alapjai


    Ha ψn (x)-nek nem lenne csomópontja x1 és x2 között, akkor a két oldal előjele ellentétes kellene
    legyen. Így ψn (x)-nek ψm (x) minden két szomszédos csomópontja között van csomópontja. Mivel
    x1 = −∞ vagy x2 = ∞ is választható, ez megmutatja, hogy ψn (x)-nek legalább eggyel több
    csomópontja van, mint ψm (x)-nek, továbbá a csomópontjaik váltakoznak.
