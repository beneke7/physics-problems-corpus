---
id: kevin-zhou-notes-phy-ex010
source: kevin-zhou-notes
native_id: "phy Example 010"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex010
topic: [klasszikus mechanika]
subtopic: [aszimmetrikus pörgettyű, Hamilton-formalizmus]
math_tools: [differenciálegyenletek, lineáris algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: true
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "710-782"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Aszimmetrikus pörgettyű. Ha az összes Ii különböző, az Euler-egyenleteket sokkal
nehezebb megoldani. Ehelyett vizsgáljuk kis perturbációk hatását. Legyen
                                     ω1 = Ω + η1 ,      ω2 = η2 ,     ω3 = η3 .
η első rendjében az Euler-egyenletek alakja
                       I1 η̇1 = 0,    I2 η̇2 = Ωη3 (I3 − I1 ),      I3 η̇3 = Ωη2 (I1 − I2 ).
Az utolsó két egyenlet kombinálásával
                                                  Ω2
                                       I2 η̈2 =      (I3 − I1 )(I1 − I2 )η2 .
                                                  I3
Ebből látható, hogy az e1 körüli forgás akkor és csak akkor instabil, ha I1 az I2 és I3 között van. Egy aszimmetrikus
pörgettyű csak a legnagyobb és a legkisebb tehetetlenségi nyomatékhoz tartozó főtengely körül forog stabilan.
Megjegyzés. Az Euler-egyenleteket a Poinsot-szerkesztéssel szemléltethetjük. A testhez kötött rendszerben
a megmaradó mennyiségek
                        2T = I1 ω12 + I2 ω22 + I3 ω32 ,     L2 = I12 ω12 + I22 ω22 + I32 ω32
két ellipszoidot határoznak meg. Az elsőt tehetetlenségi ellipszoidnak nevezzük; ennek metszete az
L2-ellipszoiddal a polhódgörbe, amely ω lehetséges értékeit tartalmazza.




Fent egy tehetetlenségi ellipszoid látható néhány polhódgörbével. Mivel a polhódgörbék zártak, a
mozgás periodikus a testhez kötött rendszerben. Ez az ábra intuitív bizonyítékot is ad a közbülső tengely
tételére: a polhódgörbék kis hurkok az L2 minimumai és maximumai közelében, de nem a közbülső
tengely közelében, amely nyeregpontnak felel meg.
Megjegyzés. A térbeli rendszer bonyolultabb, mert a szimmetrikus pörgettyűre kapott szép eredmények már nem
érvényesek. Az egyetlen kényszerünk, hogy L · ω állandó; ez azt jelenti, hogy ω-nak az L-re merőleges
invariábilisnak nevezett síkban kell feküdnie. A tehetetlenségi ellipszoidot a pörgettyűbe ágyazott absztrakt
objektumként képzeljük el.
16 1. Klasszikus mechanika


Mivel L = ∂T /∂ ω, L merőleges a tehetetlenségi ellipszoidra, amiből következik, hogy az invariábilis
sík érinti a tehetetlenségi ellipszoidot. Így az ellipszoidot úgy képzelhetjük el, hogy az invariábilis síkon
csúszás nélkül gördül, ahogy fent látható. A szögsebesség ezen a síkon görbét ír le,
amelyet herpolhódgörbének nevezünk; ez nem feltétlenül zárt.

1.3     Hamilton-formalizmus
 • A Hamilton-mechanika a fázistérben zajlik; a (q, q̇) változókról a (q, p) változókra Legendre-
   transzformációval térünk át. Ha F az általánosított erő, akkor

                                              dL = F dq + p dq̇

      ezért a H = pq̇ − L választás ezt az alakot adja:

                                             dH = q̇ dp − F dq.

      A termodinamika nyelvén a Lagrange- és a Hamilton-függvény „természetes” argumentumai
      L = L(q, q̇), illetve H = H(q, p), mert a teljes differenciáljaik ezekben a változókban különösen egyszerűek.
      (Vegyük azonban észre, hogy H q és p szerinti felírásához q̇-t ki kell tudnunk küszöbölni p segítségével; ez
      általában csak akkor lehetséges, ha L konvex q̇-ban.)

 • Ebből leolvassuk Hamilton egyenleteit:
                                                     ∂H              ∂H
                                           ṗi = −       ,   q̇i =       .
                                                     ∂qi             ∂pi
      Az explicit időfüggőség bevonásával
                                             dH    ∂H    ∂L
                                                 =    =−
                                              dt   ∂t    ∂t
      ahol az első egyenlőség Hamilton egyenleteiből és a láncszabályból következik.

 • Hamilton egyenleteit az akció minimalizálásával is levezethetjük:
                                          Z
                                      S = (pi q̇i − H) dt.

                                                                                                 ˙
      Ebben a levezetésben pi és qi variációi függetlenek. Azonban a korábbiakhoz hasonlóan δ q̇ = (δq).
      A variáció behelyettesítésekor látjuk, hogy parciális integráláshoz δq-nak a végpontokban el kell tűnnie,
      δp-nek viszont nem kell eltűnnie, ezért a megfogalmazás nem teljesen szimmetrikus.

 • Ha L időfüggetlen, L = T − V alakú, és q̇ szerint másodfokú homogén függvény,
   akkor pq̇ = 2T , tehát H = T + V . A Hamilton-függvény értéke ekkor a teljes energia.
