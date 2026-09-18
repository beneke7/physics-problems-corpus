---
id: kevin-zhou-notes-phy-ex025
source: kevin-zhou-notes
native_id: "phy Example 025"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex025
topic: [elektromágnesség, speciális relativitáselmélet]
subtopic: [mágneses dipólusra ható erő, elektrodinamika, térenergia]
math_tools: [vektoranalízis, kalkulus]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1727-1912"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Mágneses dipólusra ható erő. Egy általános árameloszlásra ható erő
                                       Z
                                  F = dr J(r) × B(r).

Az r = R körül lokalizált kis eloszlások esetén Taylor-sorba fejthetünk:

                                 B(r) = B(R) + (r · ∇′ )B(r′ )
                                                                 r′ =R
ahol a vessző r′ szerinti deriválást jelöl. Az első tag nem járul hozzá, a korábbi példához
hasonló okok miatt. Indexekkel a második tag
                       Z                             Z
                  F = dr J(r) × (r · ∇ )B(r ) = dr ϵijk Ji rℓ ∂ℓ′ Bj (r′ ) êk .
                                         ′     ′



Most a zárójelben álló tagokra összpontosítunk. Feltesszük, hogy B rotációja eltűnik, ami szinte minden
releváns helyzetben teljesül (bár lásd az itt szereplő megszorításokat). Mivel a rotáció egyszerűen a külső derivált,
                                          ∂i Bj − ∂j Bi = 0.
ez eltér a rotációmentesség szokásos (3D) kifejezésétől, amely ϵijk-t tartalmaz, mert ott
a Hodge-duálist is vesszük. Ez azt jelenti, hogy az indexeket felcserélhetjük a következő kifejezésben:
                      Z                                    Z
                        dr ϵijk Ji rℓ ∂j Bℓ (r ) êk = −∇ × dr (r · B(r′ ))J(r).
                                       ′      ′          ′



Az integrál ezután az előző mágneses dipólusintegrállal azonos, csak egy állandó
B(r′ ) vektor szerepel benne. Ezért
                                   F = ∇ × (B × m) = (m · ∇)B.
ahol ismét a szorzási szabályt és a rotáció eltűnését használtuk.
   Ha m állandó, az erőt F = ∇(B · m) alakban írhatjuk, ismét azért, mert
B rotációja eltűnik. Ennek az erőnek az integrálása az U = −m · B potenciális energiát adja, amelyet
a bevezető tankönyvekben általában megadnak. Ezt a kifejezést azonban óvatosan kell értelmezni. Amikor egy
a mágneses dipólust térben mozgatunk, általában olyan indukált elektromotoros erők keletkeznek, amelyek megváltoztathatják az
áramot. Ezért m állandónak tekintése elhanyagolja a mágneses
dipólusmomentum állandó értéken tartásához szükséges energiát. (Ha a térre gyakorolt visszahatást is számoljuk, akkor az
külső mágneses tér állandó értéken tartásához szükséges energiát is elhanyagolja.) A potenciális energia itt csak abban az értelemben hasznos,
hogy deriváltja megadja a dipólusra ható mechanikai erőt. Hasonlóan, szög szerint deriválva és feltételezve,
hogy m állandó marad, a dipólusra ható forgatónyomaték τ = m × B.

2.3   Elektrodinamika
Az elektrodinamika első alapegyenlete Faraday-törvénye,
                                                   ∂B
                                         ∇×E+         = 0.
                                                   ∂t
Konkrétan, az elektromotoros erőt így definiálva:              Z
                                              1
                                         E=       F · dr
                                              q C
ahol F a q töltésre ható Lorentz-erő, kapjuk
                                                 dΦ
                                             E =−
                                                  dt
ahol Φ a C peremű felületen átmenő fluxus.


  • Vezető hurkokban a keletkező elektromotoros erő olyan áramot hoz létre, amely a fluxus változásával ellentétes
    teret kelt; ez Lenz törvénye. Ez egyszerűen az energiamegmaradás következménye; ha az
    előjel megfordulna, elszabaduló pozitív visszacsatolást kapnánk.
  • Faraday-törvény integrális alakja mozgó vezetékekre is érvényes. Tekintsünk egy C hurkot S felülettel,
    amelynek pontjai statikus térben v(r) sebességgel mozognak. Kis dt idő elteltével a felület
    S ′ lesz. Mivel bármely zárt felületen átmenő fluxus nulla,
                                     Z           Z              Z
                               dΦ =     B · dS −    B · dS = −       B · dS
                                      S′           S              Sc

    ahol Sc a C és C ′ peremű felület. Ha ezt a felületet síknak választjuk, akkor
    dS = (dr × v) dt, így           Z                   Z
                            dΦ
                                =−      B · (dr × v) = − (v × B) · dr.
                            dt        C                   C
    Faraday-törvénye a korábbiakhoz hasonlóan teljesül, bár az elektromotoros erőt most mágneses erő szolgáltatja.
  • Egy C görbe öninduktivitását az S felülettel így definiáljuk:
                                                     Φ
                                                L=
                                                     I
    ahol Φ az S-en átmenő fluxus, amikor I áram folyik C-ben. Ekkor
                                          dI         1       1
                                    E = −L   , U = LI 2 = IΦ.
                                          dt         2       2
    Az induktorok tehát energiát tárolnak, amikor áram folyik rajtuk.
  • Például egy szolenoidban B = µ0 nI, a teljes fluxus pedig Φ = BAnℓ, ahol ℓ a teljes hossz.
    Ezért L = µ0 n2 V, ahol V = Aℓ a teljes térfogat.
  • Az induktor energiájára kapott kifejezéssel meghatározhatjuk a mágneses tér energiasűrűségét:
                                 Z               Z             Z
                               1              1              1
                         U= I       B · dS = I      A · dr =     dx J · A
                               2 S            2 C            2
    ahol a vonalintegrált térfogatintegrállá alakítottuk.
  • A ∇ × B = µ0 J összefüggést és parciális integrálást használva
                                                Z
                                             1
                                       U=          dx B · B.
                                           2µ0
    Ez nem bizonyítja, hogy az elektromágneses tér teljes energiasűrűsége u ∼ E 2 + B 2 , mert
    lehetnek E · B tagok is, és eddig csak statikus terekkel dolgoztunk. Később az energia
    sűrűségét szabályosan, egy Lagrange-függvényből kiindulva vezetjük le.

Végül visszatérünk Ampère-törvényéhez,
                                            ∇ × B = µ0 J.
Ahogy korábban láttuk, ez ∇ · J = 0-t kényszerít ki, ezért általában nem lehet helyes. A valódi egyenlet

                                                             ∂E
                                      ∇ × B = µ0 J + ϵ0
                                                             ∂t
így a divergenciát véve megkapjuk a teljes folytonossági egyenletet. A változó elektromos tér
áramként viselkedik; ezt eltolási áramnak nevezzük. Ez terjedő hullámmegoldásokhoz vezet.


  • Vákuumban
                                                                       ∂B                      ∂E
                      ∇ · E = 0,    ∇ · B = 0,       ∇×E=−                ,   ∇ × B = µ0 ϵ 0      .
                                                                       ∂t                      ∂t
      Ezen egyenletek kombinálásával

                                             ∂2E
                                     µ0 ϵ0       = −∇ × (∇ × E) = ∇2 E
                                             ∂t2
                                                                                       √
      a B-re hasonló egyenletet kapunk, ezért az elektromágneses hullámok c = 1/ µ0 ϵ0 sebességgel terjednek.

  • E0 és B0 amplitúdójú síkhullámokat véve Maxwell-egyenleteiből leolvasható

                                    k · E0 = k · B0 = 0,           k × E0 = ωB0

      a ∇ ∼ ik megfelelést használva. Különösen E0 = cB0 .

  • A tér energiájának változási sebessége
             Z                            Z
                                1               1                       1
        U̇ = dx ϵ0 E · Ė + B · Ḃ = dx            E · (∇ × B) − E · J − B · (∇ × E) .
                               µ0               µ0                      µ0

      A szorzási szabályt alkalmazva
                                             Z                     Z
                                                              1
                                   U̇ = −        dx J · E −            (E × B) · dS.
                                                              µ0
      Ez a térenergia folytonossági egyenlete; az első tag a töltéseken végzett munka sebessége,
      a második pedig az energia határ menti áramlását írja le. Konkrétan az energiaáramlást
      a tér minden pontjában a Poynting-vektor adja meg:
                                                        1
                                                   S=      E × B.
                                                        µ0

  • Elektromágneses hullámban az átlagos térenergiasűrűség u = ϵ0 E 2 /2, ahol az 1/2 faktor
    egy trigonometrikus függvény négyzetének átlagolásából, a 2-es faktor pedig a mágneses
    térből származik. Ahogy várható, a Poynting-vektorra S = cu teljesül.

  • Az elektromágneses hullámok potenciálokkal is felírhatók, bár ezeknek van mértékszabadságuk.
    Síkhullámoknál gyakori választás az elektromos potenciált ϕ = 0-ra állítani.

2.4     Relativitáselmélet
Most relativisztikus formában írjuk át eredményeinket.

Megjegyzés. A töltésmegmaradást a folytonossági egyenlet fejezi ki:

                                        ∂µ J µ = 0,      J µ = (ρ, J).

Például egy kezdetben nyugalomban lévő töltéseloszlás transzformációja

                                         ρ′ = γρ0 ,     J′ = −γρv.


Bár a töltéssűrűség nem invariáns, a teljes töltés az. Ennek belátásához vegyük észre, hogy
                               Z                Z
                          Q = d x J (x) = d4 x J µ (x)nµ δ(n · x).
                                    3   0


Lorentz-transzformációt végezve
                                   Z
                              Q′ = d4 x Λµν J ν (Λ−1 x)nµ δ(n · x).

Legyen n′ = Λ−1 n és x′ = Λ−1 x. Az x′ változókra áttérve
                                      Z
                                Q′ = d4 x′ J ν (x′ )n′ν δ(n′ · x′ ).

Ez azonos Q kifejezésével, azzal a különbséggel, hogy n helyett n′ szerepel. Másképpen fogalmazva
egy másik rendszerben mért teljes töltést az eredeti rendszerben egy megdöntött
térszerű felületen vett integrállal számíthatjuk ki. A folytonossági egyenlet miatt ekkor Q = Q′ .
Formálisabban az nµ δ(n · x) = ∂µ θ(n · x) összefüggéssel megmutatható, hogy a különbség teljes derivált.
