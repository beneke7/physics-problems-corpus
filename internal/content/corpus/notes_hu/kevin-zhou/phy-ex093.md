---
id: kevin-zhou-notes-phy-ex093
source: kevin-zhou-notes
native_id: "phy Example 093"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex093
topic: [kvantumfizika]
subtopic: [időfüggő-perturbációelmélet, szórás]
math_tools: [differenciálegyenletek, perturbációelmélet, Fourier-transzformáció]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "13280-13652"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. A harmonikus oszcillátor. Legyen minden konstans egyenlő eggyel:
                                                       p2S + x2S
                                              HS =               .
                                                           2
Mivel a Hamilton-operátor időfüggetlen, HS = HH . Ennek ellenőrzéséhez vegyük észre, hogy
                                   p2H + x2H  (p2 + x2S )(cos2 t + sin2 t)
                          HH =               = S                           = HS
                                       2                   2
ahol behelyettesítettük pH és xH ismert időfüggését.
248 11. Időfüggő perturbációelmélet

Most áttérünk az interakciós képre. Az S indexeket hallgatólagosan elhagyjuk.

 • Legyen U0 (t) a pusztán H0 által meghatározott időfejlődés, vagyis
                                                   ∂U0 (t)
                                              iℏ           = H0 U0 (t)
                                                     ∂t
    Az interakciós képben „kivonjuk” a H0 által okozott állapotfejlődést, és definiáljuk

                             |ψI (t)⟩ = U0† (t)|ψS (t)⟩,    AI (t) = U0† (t)AS (t)U0 (t)

    úgy, hogy az operátorok fejlődése megőrizze a várható értékeket.

 • Az interakciós kép időfejlődési operátorát a következőképpen definiáljuk:

                                             |ψI (t)⟩ = W (t)|ψI (0)⟩.

    A fenti eredményeket kombinálva azt kapjuk, hogy

                                                 W (t) = U0 (t)† U (t).

    Vagyis először az egzakt Hamilton-operátor szerint fejlődünk előre az időben, majd a perturbálatlan
    Hamilton-operátor szerint fejlődünk visszafelé.

 • A deriválás és egyszerűsítés után
                                                 ∂W (t)
                                            iℏ          = H1I (t)W (t)
                                                  ∂t
    adódik, ahol H1I (t) a perturbációs tag az interakciós képben. Ennek integrálása azt adja, hogy

                                                1 t ′
                                                 Z
                                   W (t) = 1 +       dt H1I (t′ )W (t′ )
                                               iℏ 0
    majd ha ezt az egyenletet önmagába visszahelyettesítjük, W (t) sorfejtését, a Dyson-sorfejtést kapjuk.

 • A teljes eredmény tömören időrendezett exponenciálissal írható fel:
                                                 Z t              
                                                   1      ′      ′
                                W (t) = T exp           dt H1I (t ) .
                                                  iℏ 0
    Ez az időfüggő Hamilton-operátorral felírt Schrödinger-egyenlet általános megoldása.

 • Általában mindig felbonthatjuk a Hamilton-operátort úgy, hogy az egyik rész az operátorok időfejlődéséhez
   járuljon hozzá (a Heisenberg-egyenleten keresztül), a másik pedig az állapotok időfejlődéséhez (a
   Schrödinger-egyenleten keresztül). Az interakciós kép éppen a H0 és H1 (t) szerinti speciális felbontás.

Most felállítjuk az időfüggő perturbációelméletet. Az egyszerűség kedvéért először azt az esetet tekintjük,
amikor H0 diszkrét spektrumú, H0 |n⟩ = En |n⟩, és a kezdeti állapot |i⟩.

 • A Dyson-sorfejtést alkalmazva az interakciós képbeli állapot egy későbbi időpontban
                                                              Z t′
                           1 t ′
                            Z                        Z t
                                        ′         1         ′
         |ψI (t)⟩ = |i⟩ +      dt H1I (t )|i⟩ +          dt        dt′′ H1I (t′ )H1I (t′′ )|i⟩ + · · · .
                          iℏ 0                  (iℏ)2 0        0
249 11. Időfüggő perturbációelmélet

 • Célunk az együtthatók kiszámítása:
                                                                     X
                                                       |ψI (t)⟩ =            cn (t)|n⟩.
                                                                         n

   A cn (t) együtthatók eltérnek a korábban említett átmeneti amplitúdóktól, mert hiányoznak belőlük a gyorsan
   oszcilláló eiEn t/ℏ fázistényezők; ezek nem befolyásolják az átmeneti valószínűségeket. (Az |n⟩ sajátállapotok
   minden képben ugyanazok; az állapotok időben fejlődnek, a sajátállapotok azonban nem.)

 • A Dyson-sorfejtés segítségével minden együtthatót hatványsorba fejthetünk:

                                           cn (t) = δni + c(1)      (2)
                                                           n (t) + cn (t) + . . . .

   Az első tag
                            Z t                                     Z t
                        1         ′                ′1                               ′                             En − Ei
           c(1)
            n (t) =            dt ⟨n|H1I (t )|i⟩ =                        dt′ eiωni t ⟨n|H1 (t′ )|i⟩,     ωni =
                       iℏ    0                     iℏ                0                                               ℏ

   ahol H1 -et visszaírtuk a Schrödinger-képbe.

 • Hasonlóképpen a másodrendű tag
                                      Z t         Z t′
                               1              ′
                                                                X             ′      ′′
                c(2)
                 n (t) =                    dt           dt′′       eiωnk t +iωki t ⟨n|H1 (t′ )|k⟩⟨k|H1 (t′′ )|i⟩.
                             (iℏ)2     0           0            k

   Itt beillesztettük az egységoperátor felbontását; a másodrendű tag nyilvánvalóan egy közbenső állapoton
   keresztül történő átmeneteket ír le.

 • A továbblépéshez pontosabban meg kell adnunk a H1 perturbációt. Állandó perturbáció esetén például a
   fázistényezők kiemelhetők az integrálból, és

                                                          2 iωni t/2 sin ωni t/2
                                       c(1)
                                        n (t) =             e                    ⟨n|H1 |i⟩.
                                                         iℏ              ωni
   A hozzá tartozó, elsőrendű átmeneti valószínűség

                                                          4 sin2 ωni t/2
                                            Pn (t) =              2      |⟨n|H1 |i⟩|2 .
                                                          ℏ2    ωni

   Láthatjuk, hogy a valószínűség elsőrendben szinuszosan oszcillál az időben. Kis ωni esetén ez egynél nagyobbá
   válhat, ami azt jelzi, hogy magasabb rendig kell elmennünk a perturbációelméletben.

 • A következő legegyszerűbb példa a szinuszos gerjesztés. Az általános alak

                                                  H1 (t) = Ke−iω0 t + K † eiω0 t
                                                                                                        (1)
   ahol K-nek nem kell hermitikusnak lennie. Emiatt cn kifejezésében két tag jelenik meg, ωni ± ω0 nevezőkkel.
   Ezért a szinuszos gerjesztés hatása nagyon nagy lehet, ha rezonanciában van valamely átmenettel.
250 11. Időfüggő perturbációelmélet

 • Ha ωni ≈ ω0 , akkor a K-tag dominál, ezért alkalmazhatjuk a „forgóhullám-közelítést”, és elhagyhatjuk K † -et.
   Ekkor

                                           4 sin2 (ωni − ω0 )t/2
                                Pn (t) =                         |⟨n|K|i⟩|2 .
                                           ℏ2   (ωni − ω0 )2

    Fizikailag ez a fény abszorpcióját jelentheti, ahol a szinuszos elektromágneses tér a gerjesztés; a válasz
    frekvenciafüggése Lorentz-görbe. Mivel a K † -tagnak is jelen kell lennie, ωni ≈ −ω0 esetén is rezonanciát
    kapunk, ami a stimulált emissziónak felel meg. Általában a valószínűség 1/(∆ω)2 -tel arányos, kezdetben
    pedig t2 szerint nő. Ha túl közel vagyunk a rezonanciához, a valószínűség ismét egynél nagyobb lehet, ami
    jelzi, hogy magasabb rendig kell folytatni a számítást.

Ezután a végállapotok kontinuumát vizsgáljuk; ez elsőrendben Fermi aranyszabályához vezet.

 • Ebben az esetben nem számít, hogy a perturbáció állandó vagy szinuszos, de a folytonosság kedvéért továbbra
   is K-val dolgozunk. (Az érvelés akkor is működik, ha a szinuszos frekvenciát nullára állítjuk, hogy visszakapjuk
   az állandó esetet, de ekkor egy 2-es tényezőt kapunk.) Az ω frekvenciaváltozót úgy toljuk el, hogy rezonanciánál
   nulla legyen. A rezonancia körüli összes állapotba történő, elsőrendű teljes átmeneti valószínűség
                                          Z ∞
                                        4         sin2 ωt/2
                              P (t) ≈ 2        dω           g(ω)|⟨fω |H1 |i⟩|2
                                       ℏ −∞          ω2

    ahol g(ω) az állapotsűrűség.

 • A sin2 (ωt/2)/ω 2 függvény |ω| ≲ 1/t körül csúcsosodik, magassága t2 /4, ezért a központi lebeny területe
   O(t). A lebenytől távol, |ω| ≳ 1/t esetén 1/ω 2 amplitúdójú oszcillációkat látunk. Integráláskor az oldalsó
   lebenyek teljes területe szintén t szerint nő. Ezért a teljes területet t-vel arányosnak várjuk, és kontúrintegrálással
   azt kapjuk, hogy
                                        Z ∞
                                                sin2 ωt/2   πt
                                             dω      2
                                                          = .
                                         −∞        ω         2

 • Amikor t → ∞, az integrál hozzájárulása az ω = 0 környezetére koncentrálódik, ezért

                                           1 sin2 ωt/2  π
                                          lim     2
                                                       = δ(ω).
                                       t→∞ t    ω       2
    Általános t esetén definiálhatjuk

                                           1 sin2 ωt/2  π
                                                  2
                                                       = ∆t (ω).
                                           t    ω       2
    Ha ezt behelyettesítjük az integrálunkba, és hosszú időre határértéket veszünk, akkor
                                           2πt
                                P (t) ≈        g(ωni )|M|2 ,   M = ⟨f |K|i⟩
                                           ℏ2
    ahol f egy reprezentatív végállapot. Ezt Fermi aranyszabályának nevezzük.

 • Az átmeneti valószínűség lineárisan nő az idővel, ami összhangban van klasszikus intuíciónkkal (például a fény
   abszorpciója esetén), hiszen a rendszernek állandó „hatáskeresztmetszete” van. Hosszú idő után a valószínűség
   egynél nagyobbá válik, ami ismét azt jelzi, hogy az elsőrendű perturbációelmélet felmondja a szolgálatot.
251 11. Időfüggő perturbációelmélet

  • Nagyon korai időknél a szabály szintén nem érvényes, és visszakapjuk a t2 függést. Ehhez jegyezzük meg,
    hogy limt→0 ∆t (ω) = t2 /4. Ezért ∆t (ω) kiemelhető az integrálból:
                                             Z
                                           2
                                  P (t) ∝ t    dω g(ω)|⟨fω |K|i⟩|2 ∝ t2 .

    Fermi aranyszabálya akkor válik érvényessé, amikor a g(ω)|⟨fω |K|i⟩|2 változása lassú a ∆t (ω) változásához
    képest, és inkább az előbbi tényezőt emelhetjük ki az integrálból.

  • Az amplitúdók szintjén kezdetben az történik, hogy minden lehetséges végállapot amplitúdója t szerint nő,
    így a teljes átmeneti valószínűség t2 szerint nő. Az idő múlásával a rezonancián kívüli végállapotok amplitúdói
    növekedés helyett oszcillálni kezdenek. Azon állapotok száma, amelyekben az amplitúdó továbbra is növekszik,
    1/t szerint skálázódik, ezért a teljes átmeneti valószínűség t szerint nő. (Wigner–Weisskopf hozzáadandó.)

Megjegyzés. Tegyük fel, hogy egy atomot véges ∆t ideig ω frekvenciájú koherens fénnyel világítunk meg. Ebben
az időintervallumban a fenti eredmények érvényesek. Véges t esetén azonban ∆t (ω) az ω ̸= 0 tartományban is nemnulla,
ami azt jelenti, hogy a gerjesztés befejezése után az atom elnyelhetett egy ℏω energiájú fotont, mégis olyan állapotba
került, amelynek energiája ℏω-nál nagyobb vagy kisebb mértékben nőtt. Ez az energiamegmaradás egyértelmű megsértésének
tűnik, ezért sokan azt mondják, hogy a kvantummechanikában sérülhet az energiamegmaradás, ahogyan ezt az energia–idő
bizonytalansági reláció is sugallja.
    Ez az érvelés azonban teljesen téves. Az elektromágneses tér és az atom teljes energiája pontosan megmarad, mert
   közös Hamilton-operátoruk időeltolási invarianciával rendelkezik. Valójában az történik, hogy ha a tér véges
   hullámcsomag formájában érkezett, akkor a fotonoknak eleve nem volt jól meghatározott hullámhosszuk, így az energiájuk
   sem volt jól meghatározott. Vagyis az energia–idő bizonytalansági reláció nem azt mondja, hogy az atom ∆E ∼ ℏ/∆t
   mértékben megsértheti az energiamegmaradást. Azt mondja, hogy a fotonok már eleve ∆E ∼ ℏ/∆t energiabizonytalansággal
   érkeztek. Ez a korábban meglévő bizonytalanság egyszerűen átkerül az atomra.
Amint alább látni fogjuk, Fermi aranyszabálya nagyon hasznos a fény abszorpciójának vagy emissziójának kezelésére,
de sok folyamathoz magasabb rendű perturbációelméletre van szükség. Például a kétfotonos abszorpció és emisszió,
valamint a fotonszórás másodrendű folyamat.
                                                                                                 (2)
  • Feltesszük, hogy a perturbáció időfüggetlen, és cn (t) korábbi kifejezését integrálva azt kapjuk, hogy
                                Z t                          ′
                                                                  !
                  (2)       1          ′
                                         X
                                            iωnk t′   eiωki t − 1
                cn (t) =            dt     e                        ⟨n|H1 |k⟩⟨k|H1 |i⟩
                         (iℏ)2 0                         iωki
                                         k
                                           iωni t
                                                    − 1 eiωnk t − 1
                                                                      
                            1 X 1          e
                       =                                −               ⟨n|H1 |k⟩⟨k|H1 |i⟩.
                         (iℏ)2      iωki      iωni             iωnk
                                   k

  • Ezzel a kifejezéssel több dolgot is tehetünk. Ha a szórás érdekel, akkor a végállapotok kontinuumot alkotnak,
    és a szórás utáni végállapotot szeretnénk megtudni, ezért t → ∞ határértéket veszünk. Fermi aranyszabályához
    hasonlóan a zárójelben álló első tag energiát megőrző deltafüggvényt és az idővel lineárisan növekvő
    valószínűséget ad; a második tag pusztán lényegtelen tranziens. (Ez annak a következménye, hogy a perturbációt
    t = 0-kor, perturbálatlan állapotból hirtelen kapcsoltuk be; a számítást helyesen t = −∞-től, beérkező
    hullámcsomaggal kellene kezdeni.)
252 11. Időfüggő perturbációelmélet

  • Konkrétan az eredmény ugyanaz lesz, mint Fermi aranyszabálya esetén, azzal a különbséggel, hogy a releváns
    mátrixelem
                                                   X ⟨n|H1 |k⟩⟨k|H1 |i⟩
                                 M = ⟨n|H1 |i⟩ +                            .
                                                             Ei − Ek
                                                    k

    Az energiának a nevezőben való megjelenése hasonló ahhoz, amit az időfüggetlen perturbációelméletben találtunk,
    és érthető is, mivel a Hamilton-operátor időfüggetlen.

  • Másfelől, ha az állapottér diszkrét, vagy a perturbáció nemtriviális módon időfüggő, például egy fel- és lekapcsolt
    lézerimpulzus esetén, akkor vissza kell térnünk cn (t) eredeti (2) kifejezéséhez. Ez egyszerűsíthető, de az alkalmazott
    egyszerűsítés a környezettől függ; példákat egy későbbi szakaszban adunk.

11.2    A Born-közelítés
Az időfüggő perturbációelméletet szórásra alkalmazzuk, először áttekintve a klasszikus szórást.

  • Klasszikus szórásnál olyan, p impulzusú kollimált részecskenyalábot tekintünk, amelyet a b becsapódási paraméter
    jellemez, és amely az origóban középre állított lokalizált U (x) potenciálba ütközik. A részecskék az n̂(b)
    aszimptotikus irányban szóródnak.

  • A differenciális hatáskeresztmetszetet a következőképpen definiáljuk:

                                                        dσ
                                               dσ =        dΩ
                                                        dΩ
    ahol a bal oldal egy terület a becsapódási paraméterek terében; θ és ϕ függvénye.

  • A hatáskeresztmetszet számlálási rátává alakításához legyen J a beeső részecskék fluxusa, w pedig a szóródott
    részecskék teljes számlálási rátája. Ekkor
                                                       Z
                                                             dσ
                                        w = Jσ, σ = dΩ
                                                             dΩ
    ahol σ a teljes hatáskeresztmetszet, és az integrálás kihagyja az előre irányt.

  • Például egy r sugarú akadályon történő keménygömb-szórásnál a hatáskeresztmetszet σ = πr2 . Klasszikusan
    azonban a teljes hatáskeresztmetszet gyakran végtelen, mivel a még egészen kis mértékben eltérített részecskéket
    is megszámoljuk.

  • Kéttest-szórás esetén a tömegközépponti rendszerre váltunk, a változók
                                                          m1 p2 − m2 p1
                                   r = x1 − x2 ,   p=                   .
                                                            m1 + m2
    mellett. A p impulzust egyszerűen úgy választjuk meg, hogy az r konjugált impulzusa legyen. Ez az egyik részecske
    impulzusa a tömegközépponti rendszerben.

  • Két, egymással ütköző nyaláb esetén, n1 és n2 részecskesűrűséggel és v relatív sebességgel,
                                     Z
                                        dw      dσ
                                             =     v dx n1 n2 .
                                        dΩ     dΩ
253 11. Időfüggő perturbációelmélet

Most ugyanezt a helyzetet állítjuk fel a kvantummechanikában.

 • A Hamilton-operátort H0 = p2 /2m és H1 = V (x) alakban bontjuk fel. A perturbáció nem időfüggő, de a fenti
   eredmények ugyanúgy érvényesek.

 • Egy V = L3 térfogatú kockában periodikus határfeltételeket veszünk, a síkhullám-állapotok |k⟩ hullámfüggvényei
   pedig
                                                      eik·x
                                     ψk (x) = ⟨x|k⟩ = √ .
                                                         V
   Ezek H0 sajátállapotai. A kezdeti állapotot |ki ⟩-nek választjuk.

 • A |k⟩ állapotba vezető elsőrendű átmeneti amplitúdó
                                               
                    (1)       2 iωt/2 sin(ωt/2)                            ℏ 2
                   ck (t) = e                     ⟨k|U (x)|ki ⟩,     ω=      (k − ki2 ).
                             iℏ           ω                               2m
   A ∆Ω térszögű kúpon belüli szórás rátáját vizsgáljuk:
                                dw      X 2π
                                   ∆Ω =      ∆t (ω)|⟨k|U (x)|ki ⟩|2 ,
                                dΩ        ℏ2
                                            k∈cone

   ahol w-et most időegységre eső valószínűségként értelmezzük, a klasszikus számlálási rátának megfelelően. A
   beeső fluxust szintén valószínűségi fluxusként értelmezzük, J = ni vi = ℏki /mV .

 • Elég hosszú t időkre
                                                       m
                                     ∆t (ω) ≈ δ(ω) =       δ(k − ki ).
                                                       ℏki
    Továbbá V → ∞ határértékben
                                                          Z ∞
                                     X           V
                                             →       ∆Ω         k 2 dk.
                                               (2π)3        0
                                    k∈cone

 • Mindent behelyettesítve, és a Fourier-transzformáció szimmetrikus konvencióját használva,

                    2π m 2 ∞                                              2
                              Z
              dσ                                      e (k − ki )|2 = 2πm |U
                  = 2               dk k 2 δ(k − ki )|U                 4
                                                                            e (kf − ki )|2
              dΩ    ℏ     ℏki    0                                     ℏ

   ahol kf ∥ k, és energiamegmaradás miatt kf = ki . Ez az első Born-közelítés.

 • Ha az U (x) potenciál hosszskálája a, akkor U  e (k) skálája 1/a. Ezért Fermi aranyszabálya t ≫ a/v időkre
   alkalmazható, ahol v a sebesség. Ezt fizikailag a kezdeti |k⟩ állapot vizsgálatával érthetjük meg. Ez az állapot
   nem fizikai, mert mindenütt, magában a potenciálban is egyenletes impulzussal rendelkezik. Ha a kvantumállapotot
   részecskeegyüttesként képzeljük el, az a/v idő úgy értelmezhető, mint a tranziens, „nem fizikai” részecskék
   útból való eltűnéséhez szükséges idő.

 • t ≫ a/v idő elteltével az U (t)|k⟩ által létrehozott hullámfüggvény az origó körüli, megközelítőleg tv sugarú
   tartományban energiasajátállapotnak fog látszani, mivel elértük a beérkező és kiszóródó részecskék „állandósult
   állapotát”. Ez némi intuíciót ad ahhoz, hogy miért számíthatók ki a szórási ráták pusztán energiasajátállapotok
   segítségével.
254 11. Időfüggő perturbációelmélet
