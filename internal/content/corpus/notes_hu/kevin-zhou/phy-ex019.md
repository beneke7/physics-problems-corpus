---
id: kevin-zhou-notes-phy-ex019
source: kevin-zhou-notes
native_id: "phy Example 019"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex019
topic: [klasszikus mechanika, elektromágnesség]
subtopic: [adiabatikus invariánsok, Hamilton–Jacobi-egyenlet, geometriai optika]
math_tools: [kalkulus, parciális differenciálegyenletek]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1219-1448"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Részecske mágneses térben. Tekintsünk egy xy síkra kényszerített részecskét, amely
mágneses teret tapasztal:
                                         B = B(x, y, t)ẑ
amely lassan változik. Tegyük fel azt is, hogy B olyan, hogy a részecske zárt pályákon mozog. Ha a
tér lassú változású, akkor az adiabatikus tétel érvényes. Egy ciklusra integrálva
                             I           Z             Z
                           1                                       2π
                     I=         p · dq ∝ mv · dq − e A · dq =         mv 2 − eΦB .
                          2π                                       ω
Homogén mágneses tér esetén
                                                           eB
                                          v = Rω,     ω=
                                                           m
ami megmutatja, hogy a két tag arányos; ezért a mágneses fluxus megmarad. Másrészt
mivel ΦB = AB és B ∝ ω, a részecske által létrehozott áramhurok mágneses momentuma
megmarad; a plazmafizikusok ezt első adiabatikus invariánsnak nevezik. Ennek egyik következménye, hogy
a töltött részecskék a tér növelésével felhevíthetők.
   Tegyük fel ehelyett, hogy B = B(r), és a részecske az origó körül középpontos körpályákon mozog.
Ekkor az adiabatikus invariáns így írható:

                                           I ∝ r2 (2B − Bav )


ahol Bav a körpálya belsejében vett átlagos tér. Ebből következik, hogy amikor B(r, t) időben változik,
a pálya nagyobb vagy kisebb lesz, kivéve ha 2B = Bav teljesül; ezt a feltételt a betatron-gyorsítók,
amelyek a mágneses tér ilyen változtatásával gyorsítják a részecskéket, teljesíteni igyekeznek.
   Az első adiabatikus invariáns a mágneses tükrök alapelve is. Tegyük fel, hogy adott egy
B(x, y, z) mágneses tér, amelyben Bz dominál, és a tér lassan változik a hely szerint. A részecskék
csavarvonalas pályákon, a mágneses erővonalak mentén spirálozhatnak. A sebesség invariáns, ezért
                                              vx2 + vy2 + vz2 = const.
Másrészt, ha a spirálozó részecske vz sebességével együtt mozgó rendszerbe transzformálunk, a helyzet éppen úgy néz ki, mint
egy időben változó mágneses térben az xy síkban mozgó részecske esetén. A pályát kicsinek tekintve
és a belső Bz-t közel állandónak véve
                                               mv 2   vx2 + vy2
                                         I∝         ∝           = const.
                                                ω        Bz
Ezért Bz növekedésekor vz csökken, és a részecske egy ponton „visszaverődik”, majd az ellenkező irányba spirálozik
vissza. Ez a mágneses tükrök működési elve; ilyen tükrökkel
plazmát lehet összetartani fúziós reaktorokban.

1.6     A Hamilton–Jacobi-egyenlet
Hamilton főfüggvényének definiálásával kezdünk.

  • A (qi , ti ) kezdeti és (qf , tf ) végfeltételekhez általában több
    klasszikus pálya tartozhat. A pályák gyakran diszkrétek, ezért egy ág
    b indexével jelölhetjük őket. Vegyük azonban észre, hogy a harmonikus oszcillátornál folytonos ágindexre van szükség.
  • Minden ágindexhez Hamilton főfüggvényét a következőképpen definiáljuk:
                                                               Z tf
                         Sb (qi , ti ; qf , tf ) = A[qb (t)] =      dt L(qb (t), q̇b (t), t)
                                                                  ti

      ahol A a szokásos akciót jelöli. A továbbiakban elhagyjuk az ágindexet, így S négy
      argumentuma önmagában meghatározza az egész pályát.
  • Tekintsük qf infinitezimális megváltozását. Az új pálya a régi pálya és egy δq variáció összege,
    ahol δq(tf ) = δqf . Parciális integrálással a pf δqf végponti tag adódik, tehát
                                                       ∂S
                                                           = pf .
                                                       ∂qf

  • Tegyük fel ezután, hogy a meglévő pályát egyszerűen további dtf idővel meghosszabbítjuk.
    Ekkor S változását kétféleképpen számíthatjuk ki:
                                                            ∂S        ∂S
                                          dS = Lf dtf =         dtf +     dqf
                                                            ∂tf       ∂qf
      ahol dqf = q̇f dtf . Ezért
                                                      ∂S
                                                          = −Hf .
                                                      ∂tf
      Hasonló érveléssel
                                               ∂S               ∂S
                                                   = −pi ,          = Hi .
                                               ∂qi              ∂ti


 • A fenti eredmények pi,f-et qi,f és ti,f függvényében adják meg. Ezután a pi-re kapott kifejezést megfordítva
   qf = qf (pi , qi , ti , tf ) írható, majd ezt behelyettesítve pf = pf (pi , qi , ti , tf ) adódik. Vagyis adott
   t = ti időpontbeli (qi , pi ) kezdeti feltételből S ismeretében meghatározható a t = tf időpontbeli (qf , pf ).

 • A továbbiakban qi-t és ti-t rögzítettnek és implicitnek tekintjük, qf és tf helyett pedig q-t és t-t írunk. Ekkor
   S(q, t) függvényünk van, amelyre
                                         dS = −H dt + p dq
    ahol qi és ti egyszerűen az integrálási konstansokat adják. Az előjelek természetesek, ha
    úgy képzeljük, hogy a speciális relativitáselméletből származnak.

 • S meghatározásához felhasználjuk a ∂S/∂t-re kapott eredményt, az úgynevezett Hamilton–Jacobi-egyenletet:

                                                                  ∂S
                                             H(q, ∂S/∂q, t) +        = 0.
                                                                  ∂t
    Vagyis S egy parciális differenciálegyenlet megoldásával határozható meg. A módszer előnye, hogy a PDE
    szétválasztható, ha a probléma szimmetriával rendelkezik, így a feladat független
    ODE-k együttesére redukálódik. A Hamilton–Jacobi-egyenletet fordítva is alkalmazhatjuk PDE-k megoldására, ha azokat
    mechanikai rendszerekkel azonosítjuk.

 • Időfüggetlen Hamilton-függvény esetén annak értéke egyszerűen a megmaradó energia,
   így az S 0 = S + Et mennyiség időfüggetlen, és teljesíti az időfüggetlen Hamilton–
   Jacobi-egyenletet:
                                         H(q, ∂S 0 /∂q) = E.
    Az S 0 függvény segítségével meghatározhatók az E energiájú részecskék pályái.

Most összekapcsoljuk Hamilton főfüggvényét a szemiklasszikus mechanikával.

 • A pályák könnyen meghatározhatók az elsőrendű egyenlet megoldásával:

                                                          ∂H
                                                   q̇ =              .
                                                          ∂p p=∂S/∂q

    Vagyis Hamilton főfüggvénye a mozgásegyenleteket elsőrendű egyenletekre redukálhatja
    a konfigurációs téren.

 • Ellenőrzésként igazoljuk, hogy Hamilton második egyenlete teljesül. Azt kapjuk, hogy

                                                   d ∂S    ∂2S   ∂2S
                                            ṗ =         =      + 2 q̇
                                                   dt ∂q   ∂t∂q  ∂q

    ahol a ∂/∂q parciális derivált t-t állandón tartja, és

                                  ∂2S     ∂                   ∂H  ∂2S
                                       = − H(q, ∂S/∂q, t) = −    − 2 q̇.
                                  ∂t∂q    ∂q                  ∂q  ∂q

    Ezeket az eredményeket összevonva a kívánt ṗ = −∂H/∂q adódik. Vegyük észre, hogy a levezetés „aktív eleme”
    a vegyes parciális deriváltak egyenlősége volt; ezért hasonlítanak Hamilton egyenletei
    némileg a Maxwell-relációkra.


  • Az S(q, t) mennyiség valós értékű „klasszikus hullámfüggvényként” viselkedik. Egy helyhez a gradiense
    megadja az impulzust. A kvantummechanikával való kapcsolat bemutatásához legyen

                                         ψ(q, t) = R(q, t)eiW (q,t)/ℏ .

    Feltesszük, hogy a hullámfüggvény lassan változik, abban az értelemben, hogy

                                                 ∂2W     ∂W
                                             ℏ       2
                                                       ≪     .
                                                  ∂q      ∂q

    Itt némi óvatosság szükséges. Feltesszük, hogy R és W analitikus ℏ-ban, de ebből következik, hogy
    ψ nem az.

  • A Schrödinger-egyenletet ℏ legalacsonyabb rendjéig kifejtve

                                            ∂W 2

                               ∂W      1
                                   +               + V (q) = O(ℏ).
                                ∂t    2m ∂q

    A szemiklasszikus határban W tehát kielégíti a Hamilton–Jacobi-egyenletet. Az S(q, t) akció
    a kvantum-hullámfüggvény szemiklasszikus fázisa. Ez az eredmény előrevetíti a de Broglie-
    féle p = ℏk és E = ℏω relációkat klasszikusan, és a pályaintegrál-formulációt sugallja.

  • Ezzel az intuícióval a Hamilton–Jacobi-egyenlet egy diszperziós relációból olvasható le.
    Például egy szabad relativisztikus részecskére pµ pµ = m2 , ezért a Hamilton–Jacobi-
    egyenlet
                                           η µν ∂µ S∂ν S = m2 .
    általános metrika alkalmazásával azonnal általánosítható görbült téridőre.

  • Annak megértéséhez, hogyan jelennek meg a klasszikus pályák egy dimenzióban, képezzünk hullámcsomagot úgy, hogy
    a ti = 0 időpontban azonos fázisú, de kissé különböző energiájú megoldásokat szuperponálunk. A megoldások
    konstruktívan interferálnak, ha ∂S/∂E = 0, mert
                                  Z                 Z                  Z
                       ∂S             ∂p                 dq               dq
                           = −t +         dq = −t +            = −t +         =0
                       ∂E            ∂E                ∂H/∂p               q̇

    ahol Hamilton egyenleteit használtuk.

A fizikában hasznos analógia adódik az optikával.

  • Fermat legkisebb idő elve szerint a fény két pont között a legrövidebb
    lehetséges idő alatt terjed. Tekintsünk inhomogén, anizotrop közeget, valamint azon pontok halmazát,
    amelyek q0 pontból t idő alatt elérhetők. E halmaz határa a
    Φq0 (t) hullámfront.

  • Huygens tétele szerint

                      Φq0 (s + t) a Φq0 (t) q pontjaihoz tartozó Φq (s) frontok burkolója.

    Ez azért igaz, mert Φq0 (s + t) azoknak a pontoknak a halmaza, amelyek eléréséhez s + t idő kell, és egy optimális
    pályának e pontok egyikéhez lokálisan is optimálisnak kell lennie. Különösen vegyük észre, hogy az egyes
    Φq (s) frontok érintik a Φq0 (s + t) frontot.


 • Legyen Sq0 (q) a q pont q0-ból való eléréséhez szükséges minimális idő. Definiáljuk

                                                     ∂S
                                                p=
                                                     ∂q
    a front normális lassúságvektoraként. Ez a hullámfrontok mozgását írja le, míg q̇
    a fénysugarak mozgását írja le. Ezért dS = p dq.

 • A p és q̇ mennyiségek geometriailag összekapcsolhatók. Legyen az indikátrix egy pontban a
   lehetséges sebességvektorok által meghatározott felület; infinitezimális időre lényegében az adott pontbeli hullámfront
   infinitezimális megfelelője. q̇ konjugáltjaként definiáljuk az indikátrix q̇ pontbeli érintősíkját.

 • A q(t) pontban lévő Φq0 (t) hullámfront q̇(t) konjugáltja. A t = (t − ϵ) + ϵ felbontással
   és az indikátrix definícióját alkalmazva ez Huygens tételéből következik.

 • Minden, amit itt mondtunk, tökéletesen analóg a mechanikával; egyszerűen a teljes
   időt az akcióval, az indikátrixot pedig a Lagrange-függvénnyel helyettesítjük. A sugarak a
   pályáknak felelnek meg. A fő különbség az, hogy optikában a sugarak haladási sebessége rögzített, a mechanikában viszont
   változó, ezért a terünk (q, t), nem pusztán q, és dS = p dq − H dt helyett ez utóbbi alakú.

  (vége)


2     Elektromágnesség
2.1   Elektrosztatika
      A téma, amelyre most fel szeretném hívni a figyelmüket, szinte megrémít.
      A benne rejlő változatosság mérhetetlen, és a tények felsorolása inkább összezavar, mint tájékoztat.
      A témán, amelyre gondolok, az elektromosságot értem.
                                              – Euler, Levél egy német hercegnőhöz (1761)
Az elektrosztatika alapvető egyenletei
                                             ρ
                                   ∇·E= ,             ∇ × E = 0.
                                            ϵ0
Az utóbbi egyenlet lehetővé teszi az E = −∇ϕ potenciál bevezetését, amiből a Poisson-egyenlet
                                                    ρ
                                           ∇2 ϕ = − .
                                                    ϵ0
A ρ = 0 eset a Laplace-egyenlet, megoldásait harmonikus függvényeknek nevezzük.
