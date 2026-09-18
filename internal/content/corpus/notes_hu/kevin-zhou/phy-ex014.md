---
id: kevin-zhou-notes-phy-ex014
source: kevin-zhou-notes
native_id: "phy Example 014"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex014
topic: [klasszikus mechanika]
subtopic: [kanonikus transzformációk, szimplektikus geometria]
math_tools: [lineáris algebra, differenciálgeometria]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "969-1071"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Tekintsünk egy „ponttranszformációt” qi → Qi (q). Megmutattuk, hogy ezek változatlanul hagyják a Lagrange-
egyenleteket, de a Hamilton-formalizmusban az impulzust is megfelelően
kell transzformálnunk. Az indexeket elhagyva és Θ = ∂Q/∂q-t definiálva

                                                                   Θ(∂P/∂p)T

                         Θ       0             T           0
                J =                     , J JJ =
                       ∂P/∂q ∂P/∂p                    −ΘT ∂P/∂p         0

ebből Pi = (Θ−1
                          ji )pj adódik, összhangban a Pi = ∂L/∂ Q̇i képlettel. Mivel Θ
q-tól függ, a P impulzus p-nek és q-nak egyaránt függvénye.
Most az infinitezimális kanonikus transzformációkat vizsgáljuk.

 • Tekintsük a Qi = qi + αFi (q, p), Pi = pi + αEi (q, p) kanonikus transzformációt, ahol α
   kicsi. A szimplektikus feltételt első rendig kifejtve
                              ∂Fi    ∂Ej         ∂Fi   ∂Fj        ∂Ei   ∂Ej
                                  =−     ,           =     ,          =     .
                              ∂qj    ∂pi         ∂pj   ∂pi        ∂qj   ∂qi
    Ezek mind automatikusan teljesülnek, ha
                                                ∂G               ∂G
                                         Fi =       ,   Ei = −
                                                ∂pi              ∂qi
    valamilyen G(q, p) esetén; ekkor azt mondjuk, hogy G generálja a transzformációt.

 • Általánosabban tekintsük a kanonikus transzformációk egy α-val paraméterezett, egyparaméteres családját.
   α. A fentiek alapján
                               dqi   ∂G        dpi    ∂G         df
                                   =     ,         =−     ,         = {f, G}.
                               dα    ∂pi       dα     ∂qi        dα
    A transzformációt aktívan értelmezve ez éppen úgy néz ki, mint a Hamilton-függvény szerinti fejlődés,
    ahol H helyén G, t helyén pedig α áll. A G(p, q, α) által generált infinitezimális kanonikus transzformáció
    a saját vektormezője szerinti áramlás.

 • Azt mondjuk, hogy G a H szimmetriája, ha a G által generált áramlás nem változtatja meg H-t, azaz {H, G} = 0.
   Ez azonban éppen G megmaradásának feltétele: mivel a Poisson-zárójel antiszimmetrikus,
   a H szerinti áramlás G-t sem változtatja meg. Ez Noether tétele a Hamilton-mechanikában.

 • Például a G = H választás egyszerűen időeltolást generál, y(t) = x(t − t0 ). Kevésbé triviálisan
   G = pk a qi → qi + αδik transzformációt generálja, tehát az impulzus eltolásokat generál.

Most röviden áttekintjük a klasszikus mechanika geometriai megfogalmazását.

 • A Lagrange-mechanikában a konfigurációs tér egy M sokaság, a Lagrange-függvény pedig egy
   az érintőnyalábon értelmezett L : T M → R függvény. Az akció a sokaságon
   haladó pályák valós értékű függvénye.


  • A p = ∂L/∂ q̇ impulzus M-en kovektor, és adott az

                                    F : T M → T ∗ M,     (q, q̇) 7→ (q, p)

      úgynevezett Legendre-transzformáció, amely akkor invertálható, ha a Lagrange-függvény reguláris. A kotangens-
      nyaláb T ∗ M ezért azonosítható a fázistérrel.

  • A kotangensnyalábnak van egy kanonikus ω = pi dq i egyformája, ahol a q i tetszőleges koordináták
    a pi pedig a duális bázis koordinátái. Külső deriváltja, az Ω = dpi ∧ dq i , szimplektikus
    forma, azaz páros dimenziós sokaságon zárt és nemelfajuló kétforma.

  • Megfordítva, a Darboux-tétel szerint minden szimplektikus formához választhatunk olyan koordinátákat,
    amelyekben lokálisan dpi ∧ dq i alakú.

  • A szimplektikus forma az f fázistérbeli függvényeket az Xf vektormezőkkel kapcsolja össze:

                                        iXf Ω = df,    Ωµν Xfµ = ∂ν f

      ahol iXf az Xf-fel képzett belső szorzat, az indexek pedig a fázistér 2 dim M koordinátáján futnak
      A nemelfajulóság azt jelenti, hogy a forma invertálható, így

                                              Xfµ = Ωµν ∂ν f

      ezért adott f-hez Xf egyértelmű.

  • Az időfejlődés az XH alatti áramlás, ezért egy tetszőleges f fázistérbeli függvény változási sebessége XH (f ).

  • A Poisson-zárójel definíciója

                                    {f, g} = Ω(Xf , Xg ) = Ωµν ∂µ f ∂ν g.

      Ω zártsága maga után vonja a Poisson-zárójel Jacobi-azonosságát.

  • Ha az X vektormező alatti áramlás megőrzi a szimplektikus formát, LX Ω = 0, akkor X-et
    Hamilton-vektormezőnek nevezzük. Cartan varázsformuláját és Ω zártságát használva ez
    a szimplektikus formából származó minden Xf-re teljesül.

  • Ha Ω megmarad, akkor minden külső hatványa is megmarad. Mivel Ωn arányos a térfogatformával,
    megmaradása visszaadja Liouville tételét.

Megjegyzés. Tekintsünk egy xµ (τ ) paraméterezett pályán mozgó részecskét. A sebesség természetes módon
Lorentz-vektor, a kanonikus impulzus pedig Lorentz-kovektor. A fizikai energia
és impulzus azonban vektorok, mert eltolásokhoz tartozó megmaradó mennyiségek,
amelyek vektorok. Ezért a kanonikus impulzus fizikai
impulzussá alakításakor előjelek jelennek meg; ez az alapvető oka annak, hogy a kvantummechanikában p = −i∇, de H = +i∂t.

1.5     Hatás-szög változók
A kanonikus transzformációk további rugalmassága lehetővé teszi még kényelmesebb változók használatát
a Lagrange-mechanika általánosított koordinátáinál. Gyakran az úgynevezett hatás-szög változók jó választásnak
bizonyulnak, és drasztikusan leegyszerűsítik a problémát.
