---
id: kevin-zhou-notes-phy-ex011
source: kevin-zhou-notes
native_id: "phy Example 011"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex011
topic: [klasszikus mechanika, elektromágnesség]
subtopic: [Hamilton-mechanika, Poisson-zárójelek]
math_tools: [kalkulus, lineáris algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "783-911"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Egy nemrelativisztikus, elektromágneses térben mozgó részecske Hamilton-függvénye

                                               (p − eA)2
                                          H=             − eϕ
                                                  2m
ahol p = mṙ + eA a kanonikus impulzus. Látható, hogy a Hamilton-függvény számértéke
mágneses tér hozzáadásakor változatlan marad, ami azt tükrözi, hogy a mágneses terek nem végeznek munkát,
az időfejlődést azonban befolyásolja, mivel a kanonikus impulzus különböző.


   Relativisztikus részecskénél ugyanezt az eljárást alkalmazhatjuk S1-re, ahol a Lagrange-függvényt
a sajátidővel paraméterezzük. Az eredmény
                                        p
                                   H = m2 c2 + c2 (p − eA)2 + eϕ.

A problémát kovariánsabb módon is megpróbálhatjuk kezelni úgy, hogy a négy xµ (λ) változót
függetlennek, λ-t pedig „idő”-paraméternek tekintjük, és a tetszőleges paraméterezéshez tartozó
Lagrange-függvényt Legendre-transzformáljuk. Az eredmény azonban a triviális H = 0, ami általában
újraparaméterezési invarianciájú akciók esetén lép fel, és abból ered, hogy az xµ (λ) csak három
független fizikai szabadságfokot képvisel. A Hamilton-formalizmus ily módon kezelhető, de az ehhez tartozó
kényszereket gondosabban kell kezelni, ahogy a húrelméleti jegyzetek leírják.

Megjegyzés. A fenti Hamilton-függvények mindegyike kikövetkeztethető a minimális csatolás előírásából is:
az elektromágneses térrel való kölcsönhatás beépítéséhez kicseréljük

                                          pµ → pµ − eAµ

ami nemrelativisztikus jelöléssel ennek felel meg:

                                   E → E − eϕ,          p → p − eA.

Általában a minimális csatolás jó első feltevés,
                                               mert ez a legegyszerűbb Lorentz-invariáns lehetőség.
Térelméletben ez egy dx J Aµ tag hozzáadását jelenti, ahol J µ az anyag négyesárama. Azonban
                                                    µ

nemminimális csatolásra lenne szükség például a részecske dipólusmomentumának figyelembevételéhez.

A Hamilton-mechanika néhány szép elméleti eredményhez vezet.

  • Liouville tétele szerint a fázistér tartományainak térfogata állandó. Ennek belátásához
    tekintsük az infinitezimális időfejlődést
                                              ∂H                     ∂H
                                  qi → qi +       dt,    pi → pi −       dt.
                                              ∂pi                    ∂qi
    Ekkor a Jacobi-mátrix
                               I + (∂ 2 H/∂pi ∂qj )dt (∂ 2 H/∂pi ∂pj )dt

                       J=                                                   .
                                −(∂ 2 H/∂qi ∂qj )dt I − (∂ 2 H/∂qi ∂pj )dt

    A det(I + ϵM ) = 1 + ϵ tr M azonosság alapján a vegyes parciális deriváltak egyenlősége miatt det J = 1.

  • A statisztikus mechanikában a fázistéren ρ(q, p, t) valószínűségi eloszlást tekinthetünk. A
    konvektív dρ/dt derivált a fázistér áramlásával együtt mozgó megfigyelő változási sebessége,

                                        ∂ρ   ∂ρ ∂H     ∂ρ ∂H
                                           =         −
                                        ∂t   ∂pi ∂qi   ∂qi ∂pi

    Liouville tétele pedig dρ/dt = 0-t ad.

  • Liouville tétele akkor is érvényes, ha az energia nem marad meg, például külső tér esetén. A tétel
    disszipáció jelenlétében nem érvényes, mert ilyenkor egyáltalán nincs Hamilton-féle leírás.


 • A Poincaré-féle visszatérési tétel szerint korlátos fázisterű rendszerben egy kezdeti pontból
   indulva p minden D0 környezete tartalmaz olyan pontot, amely véges idő alatt visszatér D0-ba.
      Bizonyítás: tekintsük azokat a Dk környezeteket, amelyek a D0 kT idejű, tetszőleges
      fejlődésével jönnek létre. Mivel a fázistér térfogata véges, és a Dk mind azonos térfogatúak,
      kettőjüknek át kell fednie egymást, legyen ez például Dk és Dk′ . Mivel a Hamilton-féle időfejlődés
      megfordítható, visszafelé fejlődve D0 és Dk−k′ átfedését kapjuk.

 • Következményként megmutatható, hogy a Hamilton-féle időfejlődés általában vagy periodikus,
   vagy sűrűn kitölt egy fázistérbeli részsokaságot. Ezt később, a
   hatás-szög változók kapcsán újra tárgyaljuk.

1.4     Poisson-zárójelek
A Poisson-zárójelek formalizmusa szorosan analóg a kvantummechanikával.

 • Két f és g fázistérbeli függvény Poisson-zárójelét így definiáljuk:
                                                   X ∂f ∂g             ∂f ∂g
                                        {f, g} =                   −           .
                                                         ∂qi ∂pi       ∂pi ∂qi
                                                   i

      Geometriailag g-hez hozzárendelhető egy Xg vektormező a fázistéren, és {f, g} az
      f-nek az Xg áramlásán mért változási sebessége.

 • A Poisson-zárójel antiszimmetrikus és lineáris, valamint teljesíti a szorzási szabályt:

                                         {f g, h} = f {g, h} + {f, h}g.

      A láncszabályt is teljesíti: ha f = f (hi ), akkor
                                                       X ∂f
                                            {f, g} =               {hi , g}.
                                                             ∂hi
                                                         i


 • Hamilton egyenleteit alkalmazva tetszőleges f (p, q, t) függvényre
                                               df            ∂f
                                                  = {f, H} +
                                               dt            ∂t
      ahol a teljes derivált konvektív derivált: a (q(t), p(t)) pontot követi, miközben az időben
      fejlődik. Ez az eredmény azt fejezi ki, hogy a H-hoz tartozó áramlás időbeli eltolás.

 • Ha f (p, q) kielégíti a {H, f } = 0 feltételt, akkor a rendszer egy szimmetriájának felel meg, mert olyan
   áramlást ad, amely mentén a Hamilton-függvény invariáns. A {H, f } akkor és csak akkor zérus, ha {f, H}
   is zérus, ami azt jelzi, hogy f megmarad az időfejlődés során. Ez a
   Hamilton-mechanikabeli Noether-tétel analógja, amely összekapcsolja a szimmetriákat és a megmaradási törvényeket.

 • A Poisson-zárójel teljesíti a Jacobi-azonosságot:

                                  {f, {g, h}} + {g, {h, f }} + {h, {f, g}} = 0

      így a Poisson-zárójellel ellátott függvények tere Lie-algebra. Ennek következtében a
      megmaradó mennyiségek Lie-zárójelei is megmaradnak, tehát a megmaradó mennyiségek Lie-részalgebrát alkotnak.


  • A hely és az impulzus Poisson-zárójelei mindig

                                   {qi , qj } = 0,    {qi , pj } = δij ,   {pi , pj } = 0.

    Az impulzus által generált áramlás az impulzus irányába történő eltolás, és fordítva: a hely által generált áramlás impulzuseltolás.
