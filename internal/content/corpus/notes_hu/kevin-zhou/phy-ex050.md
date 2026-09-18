---
id: kevin-zhou-notes-phy-ex050
source: kevin-zhou-notes
native_id: "phy Example 050"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex050
topic: [folytonos-közegek-mechanikája]
subtopic: [rugalmasságtan, feszültség, szilárd-testek]
math_tools: [tenzorok, differenciálegyenletek]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "5712-5961"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Tekintsünk egy statikus, homogén, izotróp anyagból készült, L oldalhosszúságú kockát, amelynek az x̂-re merőleges lapjain ŷ irányú, egyenletes P nyírófeszültséget alkalmazunk. E külső feszültség hatására az erőegyensúly biztosítja, hogy az egész anyagban egyenletes σxy = P nyírófeszültség alakuljon ki. A nyomatéki egyensúly azonban azt mutatja, hogy ez a helyzet valójában lehetetlen: a feszültségtensor nem szimmetrikus, ezért a nyomatéki egyensúly nem teljesülhet; a kocka a valóságban a ẑ tengely körül forogni kezd.
   Ezt úgy akadályozhatjuk meg, ha az ŷ-re merőleges lapokon x̂ irányú másik, egyenletes P nyírófeszültséget is alkalmazunk. Ekkor az egész anyagban σxy = σyx = P, és

                                           P   1
                                   uxy =      = (∇x uy + ∇y ux ).
                                           2µ  2

Az eltolási mezőnek több megoldása is van, és általában nem határozható meg egyértelműen. A kocka például nyíródhat x̂ irányban, ŷ irányban, vagy e kettő tetszőleges kombinációjaként. Hogy a gyakorlatban melyik valósul meg, az attól függ, hogyan alkalmazzuk a külső erőket.

4.3     Ideális folyadék áramlása
A folyadékáramlás matematikai leírásával kezdjük.

 • A folyadék mozgását a v(x, t) sebességmezővel írjuk le. Ahogy korábban említettük, ez nem az egyes molekulák mozgását jelenti, hanem az „anyagi részecskékét”, vagyis egy kis folyadékcsomag tömegközépponti sebességét. Egy ilyen csomag impulzusa
                                                 dP = ρv dV.

 • A mozgás a v(x, t) rögzített időpontbeli erővonalainak, az áramvonalaknak a segítségével szemléltethető. Ha az áramlás nem stacionárius, ezek különböznek maguknak az anyagi részecskéknek a pályáitól. Például a kéményből a t időpontig kiáramlott füst alakja általában nem áramvonal, hanem „csíkvonal”: a kéményből különböző kezdeti t0 időpontokban kibocsátott részecskék t időpontban felvett pályáinak halmaza.
 • A tömeg megmaradása a kontinuitási egyenletet adja:
                                             ∂ρ
                                                + ∇ · (ρv) = 0.
                                             ∂t
      Összenyomhatatlan áramlás esetén ez ∇ · v = 0-ra egyszerűsödik.
 • A folyadék egy anyagi részecskéje által tapasztalt mennyiségváltozását az anyagi/együttmozgó időderivált jellemzi:
                                              D      ∂
                                                  =     + v · ∇.
                                              Dt     ∂t
      Az első tag a lokális változás ütemét, az „advekciós” tag pedig a folyadék mozgásának követéséből eredő hatást írja le. Például az x időfüggetlen vektormező esetén egy anyagi részecske x-et érő változásának üteme egyszerűen a sebesség:
                                             Dx
                                                = (v · ∇)x = v.
                                             Dt
 • A kontinuitási egyenlet ekvivalens alakja
                                               Dρ
                                                   = −ρ ∇ · v
                                               Dt
      intuitívan világos. Vegyük észre azt is, hogy egy kis időintervallumban a folyadék minden pontja δu = v δt elmozdulást végez. Ezért a térfogat alakváltozás alatti transzformációjára kapott korábbi eredményünk szerint az anyagi részecske térfogata így változik:
                                             D(dV )
                                                    = (∇ · v) dV
                                              Dt
      ahol az együttmozgó derivált itt csak formális. Ezek összevonásából D(dM )/Dt = 0 következik, vagyis annak nyilvánvaló ténye, hogy egy anyagi részecske tömege mozgás közben nem változik.
 • Newton második törvényét egy anyagi részecskére alkalmazva kapjuk Cauchy egyenletét,
                                                     Dv
                                                 ρ      = f∗
                                                     Dt
      ahol f ∗ a hatásos erősűrűség. A Dv/dt mezőt anyagi gyorsulásnak nevezzük; vegyük észre, hogy stacionárius áramlásban is lehet nemzérus.


 • Ez az eredmény az impulzus kontinuitási egyenleteként is felírható:

                                        ∂(ρv)
                                              + ∇ · (ρvv) = f ∗ .
                                         ∂t
    A ρv mennyiséget tömegáram-sűrűségnek, impulzussűrűségnek, tömegfluxusnak vagy tömegfluxus-sűrűségnek nevezzük.

 • Ennek az egyenletnek a megoldásához általában konstitutív relációkra van szükség, amelyek f ∗-ot az anyag paramétereivel adják meg. Ha f ∗ csak x-től és a sűrűségtől függ, akkor a Dρ/Dt-re és Dv/Dt-re vonatkozó egyenleteink önmagukban zártak.

 • A fenti formalizmus szilárd testekre is alkalmazható, de ekkor f ∗ az eltolási mezőtől függ,

                                         u(x, t) = x − X(x, t)

    amelyet nyomon kell követnünk. Ennek legegyszerűbb módja, ha megjegyezzük, hogy X(x, t) egyszerűen annak a helynek a koordinátája, ahonnan az x-ben lévő anyagi részecske eredetileg származott. Ez időfüggetlen, tehát
                                                DX
                                                   = 0.
                                                Dt
    A definíciókat behelyettesítve
                                                  Du
                                                v=
                                                  Dt
    adódik, amelyet a másik három egyenlettel együtt kell megoldani.

Most az összenyomhatatlan és súrlódásmentes/ideális/tökéletes áramlás esetét tekintjük.

 • Ha az egyetlen erő a gravitáció és a nyomás, akkor f ∗ = ρg − ∇p, ezért az Euler-egyenletek:
                                ∂v                  ∇p
                                   + (v · ∇)v = g −    ,      ∇ · v = 0.
                                ∂t                  ρ0
    Az első Euler-egyenletet egyszerűen Euler-egyenletnek is nevezzük.

 • Az Euler-egyenletek meghatározzák v időfejlődését. A nyomást is rögzítik; az Euler-egyenlet divergenciáját véve kapjuk
                                   ∇2 p = ρ0 ∇ · g − ρ0 ∇ · ((v · ∇)v).

    Így a nyomást valamely pillanatban mindenütt az abban a pillanatban érvényes sebesség határozza meg.

 • Ez rejtélyesnek tűnhet, mert a sebesség távoli változásai azonnal hatnak a nyomásra, látszólag nemlokális módon. Ennek oka, hogy a nyomás a hangsebességgel terjed, összenyomhatatlan folyadékban pedig a hangsebesség végtelen. Ez sok valós, vizet és levegőt érintő helyzetben jó közelítés, ahol a hangsebesség jóval nagyobb az áramlás sebességénél.

 • Két folyadék határfelületén további peremfeltétel, hogy p és v · n folytonos, ahol n a normálvektor. Szilárd határ esetén ez azt jelenti, hogy a sebesség normális komponense eltűnik.


  • Amint alább látni fogjuk, a viszkozitás elhanyagolhatóságának mértékét a Reynolds-szám adja meg, amely sok valós alkalmazásban nagy. Azonban már kis viszkozitás is minőségileg jelentős hatásokkal járhat. Szilárd határokon például mindig kialakul egy határréteg, amelyben a folyadék tangenciális sebessége nullához tart.

  • Stacionárius áramlásban az Euler-egyenlet erre egyszerűsödik:
                                                             ∇p
                                            (v · ∇)v = g −      .
                                                             ρ0
    Ahogy később látni fogjuk, amikor egy összenyomható folyadék stacionárius áramlást végez, akkor úgy viselkedik, mintha összenyomhatatlan lenne, amennyiben az áramlás sebessége sokkal kisebb a hangsebességnél. Intuitívan: a nyomás lokális növekedése inkább elmozdítja a folyadékot az útból, mintsem összenyomja. Emiatt az összenyomhatatlanság még levegőre alkalmazva is gyakran ésszerű feltevés.

  • Bernoulli tétele szerint stacionárius áramlásban a Bernoulli-mező
                                               1         p
                                            H = v2 + Φ +
                                               2         ρ0
    állandó az áramvonalak mentén, ahol Φ a gravitációs potenciál. Ennek belátásához vegyük észre, hogy
                                 DH     Dv           1
                                    =v·    + v · ∇Φ + v · ∇p = 0
                                 Dt     Dt           ρ0
    ahol a stacionárius áramlás feltevését és az Euler-egyenletet használtuk.

  • A Bernoulli-mező első két tagja egységnyi tömegre eső teljes mechanikai energiát alkotja, a nyomás változása pedig az áramló részecskéken végzett munkát méri, ezért Bernoulli tétele az energiamegmaradás állításaként értelmezhető.

  • Hidrodinamikában a ρ0 v 2 /2 mennyiséget „dinamikai nyomásnak” is nevezik, mivel az áramlás megállításakor nyomássá alakul. Állandó g0 gravitációs térben a H/g0 mennyiséget „teljes emelőmagasságnak” is nevezik, mert azt fejezi ki, milyen magasra emelhető a folyadék.

Megjegyzés. Szűkületen átmenő stacionárius áramlásban a beömlés és a kiömlés között aszimmetria van: a víz a szűkület beömlésénél összetart, majd a kiömlésen keskeny sugárban távozik. (A szűkületben határréteg is megfigyelhető.)


Ez az aszimmetria azonban nem jelenik meg a stacionárius áramlás Euler-egyenleteiben, amelyek időtükrözésre szimmetrikusak. Az időtükrözési szimmetriát a viszkozitás töri meg (a szokásos termodinamikai időnyíl következtében), de ha ezt nem vesszük figyelembe, a megfelelő fizikai megoldás kiválasztásához peremfeltételeket kell előírnunk, ahogy például az elektromágnesességben a retardált és avanzsált megoldásoknál tesszük.

Ezután az áramlás örvényességét vizsgáljuk.

 • Tegyük fel, hogy egy stacionárius áramlás egy végtelenben aszimptotikusan egyenletes áramlásból ered. Ekkor intuitívan azt várjuk, hogy H minden áramvonal között, tehát mindenütt állandó legyen. Ez az intuíció azonban téves lehet, ha az áramvonalak zárt hurkokat alkotnak.

 • Ennek az intuíciónak a pontosításához vegyük észre, hogy

                                                           p
                             ∂i H = vj ∂i vj + ∂i       Φ+          = vj ∂i vj − vj ∂j vi
                                                           ρ0

    ahol az Euler-egyenletet használtuk. Indexes jelölésre áttérve:
                                        ∇H = v × ω,         ω=∇×v
    ahol ω az örvényességmező. Így H állandó, ha az örvényesség eltűnik.

 • Szemléletesen ω erővonalait örvényvonalaknak nevezzük. Mivel az örvényességmező egy rotáció, ∇ · ω = 0, ezért az örvényvonalak általában zártak. Úgy képzelhetjük el, hogy a folyadék lokálisan e vonalak körül kering. Mivel ∇H merőleges v-re és ω-ra is, H állandó az örvényvonalakból és áramvonalakból alkotott felületeken, amelyeket Lamb-felületeknek is nevezünk.

 • Az Euler-egyenlet időfüggő tagját is figyelembe véve:
                                            ∂v
                                               = v × ω − ∇H
                                            ∂t
    és mindkét oldal rotációját véve:
                                            ∂ω
                                               = ∇ × (v × ω).
                                            ∂t
    Ezért ha egy ideális folyadék kezdetben örvénymentes, akkor soha nem is válhat örvényessé.

 • Ez fizikailag nehezen megérthető lehet. Ha például egy labdát kezdetben nyugalomban lévő vízben mozgatunk, örvények alakulnak ki mögötte. Ezeket a labda felszínén lévő határrétegek „leválása” hozza létre, amelyek a viszkozitás miatt léteznek.

 • Stokes tétele szerint a folyadék cirkulációja egy C görbe mentén
                                            I              Z
                                 Γ(C, t) =     v(t) · dℓ =   ω · dS
                                                    C                  S

    ahol Stokes tételét használtuk.


  • Örvényesség hiányában a sebesség rotációja eltűnik, ezért felírhatjuk
                                                 v = ∇Ψ
    alakban, ahol Ψ-t sebességpotenciálnak nevezzük. Mivel a sebesség divergenciája eltűnik,
                                                ∇2 Ψ = 0.
    Ez a „potenciáláramlás” egyszerű, mert a problémát lineáris differenciálegyenletekre redukálja, és a Laplace-egyenletről sok minden ismert. Ha az áramlás kétdimenziós, komplex analitikai módszerek is alkalmazhatók.

  • Ez a módszer stacionárius és nem stacionárius áramlásra egyaránt hasznos. Ha az áramlás nem stacionárius, megoldhatjuk a nyomást, majd ezt felhasználva az Euler-egyenletből meghatározhatjuk az időfejlődést:
                                          ∇(H + ∂Ψ/∂t) = 0.
    Ez Ψ(x, t)-t egy tetszőleges időfüggő függvény erejéig határozza meg, amely érdektelen, ezért választhatjuk
                                                ∂Ψ
                                                   = −H.
                                                ∂t
    alakban.

  • Mivel a sebesség divergenciája eltűnik, egy másik függvény rotációjaként is felírhatjuk. Ez a gyakorlatban kétdimenziós áramlásokban hasznos, ahol a rotáció skalármezőket vektormezőkre képez. Ekkor bevezethetjük a ψ(x, y) áramfüggvényt, amelyre
                                                ∂ψ              ∂ψ
                                         vx =      ,   vy = −
                                                ∂y              ∂x
    ekkor a divergencia a vegyes parciális deriváltak felcserélhetősége miatt eltűnik. Továbbá
                                                 ∂ψ ∂ψ ∂ψ ∂ψ
                                    v · ∇ψ = −         +       =0
                                                 ∂y ∂x   ∂x ∂y
    amiből következik, hogy az áramfüggvény az áramvonalak mentén állandó. Az örvényesség
                                              ∂vy   ∂vx
                                       ωz =       −     = −∇2 ψ
                                              ∂vx   ∂y
    ezért örvénymentes áramlásban ψ a Laplace-egyenlet megoldásával határozható meg.
