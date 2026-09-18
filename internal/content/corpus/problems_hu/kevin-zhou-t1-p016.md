---
id: "kevin-zhou-t1-p016"
source: "kevin-zhou"
native_id: "KZ-T1-P016"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t1-p016"
topic: [termodinamika és statisztikus fizika]
subtopic: [kinetikus gázelmélet, Maxwell-eloszlás, ekvipartíció tétele]
math_tools: [integrálás, valószínűségszámítás és statisztika]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T1.txt"
source_url: "sources/kevin_zhou/site/handouts/T1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T1-P016

[3] 16. feladat. Néhány alapvető számítás ideális gázokra.

     (a) Mutassuk meg, hogy egy dobozban lévő ideális gáz sebességeinek valószínűségi eloszlása
                                                              2
                                               p(v) ∝ v 2 e−mv /2kB T

         a doboz bármely pontjában ilyen alakú, a doboz alakjától függetlenül.

     (b) Számítsuk ki a legvalószínűbb sebességet, vagyis a valószínűségi eloszlás maximumának
         helyét.

      (c) Mutassuk meg, hogy az átlagos mozgási energia ⟨mv 2 /2⟩ = 3kB T /2. Ez az alább
          bemutatott ekvipartíciótétel speciális esete. (Útmutatás: kissé trükkös integrált kell
          kiszámítanunk. Útmutatásért lásd az alábbi példát és a P1 példáit.)

       Megjegyzés: A Maxwell-féle sebességeloszlás levezetése

       A statisztikus mechanikából következik, hogy az ideális gáz sebességeloszlása
                                                          2
                                             p(v) ∝ e−mv /2kB T



                                                      9


Kevin Zhou                                                                       Fizikaolimpiai feladatgyűjtemény



  háromdimenziós Gauss-eloszlás. Ezt az eredményt Maxwell vezette le először, jóval a statisztikus
  mechanika megértése előtt, egy leleményes gondolatmenettel.

  Tegyük fel, hogy az ideális gáz téglatest alakú dobozban van, így a bal és jobb oldallal való
  ütközések határozzák meg vx-et, az első és hátsó oldallal valók vy-t, a felső és alsó oldallal
  valók pedig vz-t. Az egyes irányok sebességeloszlásai ezért függetlenek, és a forgásszimmetria
  miatt azonosak, tehát felírhatjuk, hogy

                                         p(v) = f (vx )f (vy )f (vz )

  valamely f függvényre. Továbbá a forgásszimmetria miatt p(v) csak v 2-től függhet. Mindkét
  oldal logaritmusát véve, és g = log f -et definiálva azt kapjuk, hogy

                                     log p = g(vx ) + g(vy ) + g(vz )

  és a jobb oldal csak v 2-től függ. Ez csak akkor lehetséges, ha g(x) = −αx2
                                                  2
  valamely α állandóra, amiből p(v) ∝ e−αv . (A Gauss-függvényeknek ez a figyelemre méltó
  tulajdonsága összefügg azzal, hogy megjelennek a centrális határeloszlás-tételben.) Végül α
  értéke például úgy határozható meg, hogy megköveteljük a nyomás ideálisgáz-törvénnyel való
  egyezését (lásd a 7. példát).

  Ez a trükk azonban korlátozott. Ha a relativisztikus hatások fontosak, a vi-k nem függetlenek:
  ha vx közel van c-hez, akkor vy-nak és vz-nek kicsinek kell lennie. (Konkrétan, ha az yz síkban
  lévő fallal való ütközés relativisztikus ∆px impulzust ad, akkor vy-t és vz-t is megváltoztatja,
  mivel p = γmv.) A vi-k akkor sem függetlenek, ha a kvantumstatisztika számít. Például ha a
  gáz részecskéi fermionok, amint azt az X1-ben tárgyaltuk, akkor kettő nem lehet ugyanabban az
  állapotban, ezért bizonyos végső v-k tiltottak. Ezért most egy másik, korszerűbb levezetést
  mutatunk be, amely jobban általánosítható.

  A gondolatmenet a következő: termodinamikai egyensúlyban az időtükrözési szimmetria miatt
  minden reakció „részletes egyensúlyban” van. Tegyük fel konkrétan, hogy két gázmolekula
  rugalmasan ütközik, sebességük (v1 , v2 ), majd (v1′ , v2′ ) sebességgel távoznak. Ekkor ennek
  gyakorisága meg kell egyezzen annak a gyakoriságával, hogy a (v1′ , v2′ ) sebességű molekulák
  ütköznek, és (v1 , v2 ) sebességgel távoznak. (Ellenkező esetben egy, a molekulák mozgását
  bemutató videót meg tudnánk különböztetni a visszafelé lejátszott ugyanettől a videótól.) Ezért

                             p(v1 )p(v2 ) |v1 − v2 | = p(v1′ )p(v2′ ) |v1′ − v2′ |

  ahol a relatív sebesség tényezője azért szerepel, mert nagyobb relatív sebesség mellett több
  lehetőség van ütközésre. Rugalmas ütközés esetén azonban a kezdeti és végső relatív sebesség
  azonos, ezért ez a tényező egyszerűen kiesik.

  A forgásszimmetria miatt p(v) = f (v 2 ) valamely f függvényre, tehát

                                       f (v12 )f (v22 ) = f (v1′2 )f (v2′2 )

  Továbbá az energiamegmaradás miatt v12 + v22 = v1′2 + v2′2 . A fenti egyenlet ezért csak akkor
  teljesülhet, ha f exponenciális, vagyis f (x) ∝ e−αx , amiből ismét p(v) ∝ e−αv adódik.




                                                       10


Kevin Zhou                                                           Fizikaolimpiai feladatgyűjtemény


  6. ötlet: Az ekvipartíció tétele

  Tegyük fel, hogy a fázistér valamely szabadsági foka hatványfüggvény szerint járul hozzá az
  energiához:

                                       E ∝ pn vagy E ∝ xn .

  Ekkor termikus egyensúlyban e szabadsági fokra kB T /n átlagos energia jut. Ennek bizonyítása
  a 16(c) feladat gondolatmenetének közvetlen általánosítása. Vegyük észre, hogy az ekvipartíció
  tételének bizonyítása teljesen klasszikus, vagyis akkor érvényes, ha a rendszert megfelelően
  leírja a klasszikus mechanika. Szobahőmérséklet közelében jól leírja az egyszerű gázok
  hőkapacitását, amint az itt látható.

  Íme néhány fontos példa az ekvipartíció tételére.

    • Egy egydimenziós rugóra erősített tömegre

                                               p2   kx2
                                          E=      +     .
                                               2m    2
      Ez két fázistérbeli szabadsági fokot jelent, mindkettőre n = 2-vel, ezért az átlagos energia
      2(kB T /2) = kB T .

    • A 7. feladatban lineáris potenciális energiájú rendszert vizsgáltunk, E(h) = mgh. Ez n = 1
      kitevőjű szabadsági fok, ezért minden molekula átlagos potenciális energiája kB T .

    • Egy szilárd test atomját úgy képzelhetjük el, mintha szomszédaihoz rugók kapcsolnák.
      Mivel az atom három dimenzióban mozog, ez az első példa három példányát adja, így az
      átlagos hőenergia 3kB T . Ebből következik, hogy egy szilárd test atomonkénti fajhője
      3kB (vagy ekvivalensen mólonként 3R), amit Dulong–Petit-törvénynek nevezünk.

  Mellékesen, mivel a termikus egyensúlyban lévő rendszerek hosszú távú mechanikai egyensúlyban
  is vannak, alkalmazható az M6 virieltétele, amely megadja az átlagos mozgási és potenciális
  energia arányát; ez természetesen megegyezik az ekvipartíció tételének eredményével. Az alábbi
  feladatokban további fontos példákat vizsgálunk.

  6. példa

  Egy E = p2 /2m energiájú, egy dimenzióban két merev fal között pattogó szabad részecske
  energiaszintjei En = n2 E0, ahol n = 1, 2, . . ., amint azt az X1-ben megmutatjuk. Mutassuk meg,
  hogy nagy hőmérsékleten az átlagos energia összhangban van az ekvipartíció tételével.

  Megoldás
                                                                       2
  Az n-edik energiaszinten tartózkodás valószínűsége arányos e−n E0 /kB T -vel. Ezért a
  valószínűségi eloszlást normálva maga a valószínűség
                                                 2
                                           e−n E0 /kB T
                                    pn = P∞    −m2 E0 /kB T
                                                            .
                                          m=1 e




                                               11


   Kevin Zhou                                                                 Fizikaolimpiai feladatgyűjtemény



      Az energia átlagértéke tehát
                                      ∞                  P∞ 2       −n2 E0 /kB T
                                                          n=1 n E0 e
                                      X
                              ⟨E⟩ =         n2 E0 pn =    P∞ −n2 E /k T .
                                                            n=1 e
                                                                      0  B
                                      n=1

      Nagy hőmérsékleten ennek a kvantummechanikai eredménynek az ekvipartíció tételének
      klasszikus eredményére kell visszavezetnie. Vegyük észre, hogy ilyen hőmérsékleten n
      jellemző értékei nagyon nagyok lesznek. Ezért az n szerinti összegeket folytonos integrálokként
      kezelhetjük:
                                 R∞       2     −n2 E0 /kB T
                                                              R ∞ 2 −x2
                                  0 R dn n E0 e                    x e   dx
                          ⟨E⟩ ≈       ∞     −n 2 E /k T      = 0R ∞ −x2     kB T
                                     0 dn e                      0 e    dx
                                                  0  B


                                                            p
      ahol az x = n2 E0 /kB T dimenzió nélküli változóra tértünk át. Ezen integrálok bármelyikének
      kiszámítása trükkös, de parciális integrálással kapcsolatot teremthetünk közöttük:
                            Z ∞              Z ∞
                                                                  1 ∞ −x2
                                                                   Z
                                      2                2     x
                                x2 e−x dx =      (2xe−x dx) =           e    dx.
                             0                0              2    2 0

      Így az integrálok aránya 1/2, ezért az átlagos energia a vártnak megfelelően kB T /2.
