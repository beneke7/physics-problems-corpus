---
id: kevin-zhou-notes-phy-ex005
source: kevin-zhou-notes
native_id: "phy Example 005"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex005
topic: [klasszikus mechanika, speciális relativitáselmélet]
subtopic: [relativisztikus részecske, hatáselv]
math_tools: [kalkulus, speciális relativitáselmélet]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "364-580"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Szabad relativisztikus részecske. A c = 1 választással közvetlenül ellenőrizhető, hogy
                                                 p
                                        L = −m 1 − v 2

a helyes p = γmv impulzust adja, az Euler–Lagrange-egyenletek pedig azt mondják, hogy p állandó.
Továbbá a négyzetgyök vezető rendig történő kifejtése L = −m + mv 2 /2 + O(v 4 ) alakot ad, ami
egy konstans tagtól eltekintve a szokásos szabad részecske Lagrange-függvénye.
   Ennek a Lagrange-függvénynek a helyessége mélyebb okból következik: az akció Lorentz-invariáns lesz,
                                            Z            Z
                                       S = L dt = −m dτ.


Így a legkisebb hatás elve a sajátidő maximalizálásának felel meg. A relativitáselméletben
valójában az akció az alapvető; a Lagrange-függvény az akcióintegrál egy adott paraméterezésének
megválasztásából következik. Ezért a mozgásegyenleteket kovariánsabb módon is levezethetjük, ha
a részecske pályájának általános xµ (λ) paraméterezését választjuk, és definiáljuk
                                           Z
                                      S = L(xµ (λ), ẋµ (λ)) dλ

ahol a pont λ szerinti deriváltat jelöl. Mivel az akció újraparaméterezési invarianciájú,
a Lagrange-függvénynek ẋµ (λ) szerint első fokú homogén függvénynek kell lennie. Ezért Euler
homogén függvényekre vonatkozó tétele megadja a követelményt:
                                                 ∂L
                                           ẋµ         − L = 0.
                                                 ∂ ẋµ
Négy Euler–Lagrange-egyenlet van:
                                          ∂L     d ∂L
                                            µ
                                              −          = 0.
                                          ∂x    dλ ∂ ẋµ
Közülük azonban csak három független, mert minden xµ (λ) pályára

                                                                           dẋµ ∂L

                      µ   ∂L   d ∂L           µ ∂L     d        µ ∂L
                   ẋ        −           = ẋ      −         ẋ          +
                          ∂xµ dλ ∂ ẋµ         ∂xµ dλ            ∂ ẋµ     dλ ∂ ẋµ

                                            d            ∂L
                                         =       L − ẋµ µ
                                           dλ            ∂ ẋ

a fenti követelmény miatt. A szabad részecske esetén
                                                 p
                                        L = −m −ηµν ẋµ ẋν

a megfelelő megmaradó impulzusok mẋµ / −ηµν ẋµ ẋν . Ahogy várható, az egyik egyenlet
                                                     p

redundáns, mivel a négyesimpulzus normája rögzített. Korábbi Lagrange-függvényünket a λ = t választással
kapjuk vissza. Mivel ez a példa meglehetősen triviális, természetesen sok más beállítás is lehetséges.
Például választhatjuk a sajátidő szerinti paraméterezést, vagy bevezethetünk egy einbeint
(erről a húrelméleti jegyzetek szólnak), amelynek előnye, hogy eltávolítja a négyzetgyököt.

Megjegyzés. Hogyan írhatjuk le a kölcsönható relativisztikus részecskéket? Először is fontos, hogy még
két részecske esetén sem adhatunk egyszerűen hozzá egy V (r1 , r2 ) potenciáltagot. A probléma megértéséhez tekintsünk
két azonos töltésű részecskét, amelyek egyenlő nagyságú, ellentétes irányú impulzussal közelednek egymáshoz. A
részecskék a Coulomb-erő miatt taszítják egymást, pillanatra megállnak, majd eltávolodnak. Ha ezután
ugyanezt a helyzetet mozgó vonatkoztatási rendszerben vizsgáljuk, az egyidejűség elvesztése miatt az egyik
részecske a másik előtt lassul le, így a folyamat közben a négyesimpulzus nem marad meg!
   A speciális relativitáselmélet elemi tárgyalásai nem ütköznek ebbe a problémába, mert csak
a folyamat előtt jóval és utána jóval alkalmazzák a négyesimpulzus-megmaradást, és elhanyagolják a
ütközés közben történteket. Számunkra ez azt jelenti, hogy a speciális relativitáselméletben nem lehet távolhatásos
részecske-kölcsönhatás; ezt néha van Dam–Wigner-féle kölcsönhatásmentességi tételnek nevezik. Csak
részecskék közötti kontaktuskölcsönhatás, illetve részecskék és terek közötti lokális kölcsönhatás lehetséges.
(A tisztesség kedvéért tegyük hozzá, hogy a különböző lehetetlenségi tételek ellenére még mindig felépíthető relativisztikus
többrészecske-dinamika, ha lemondunk néhány fontosnak tartott tulajdonságról, ahogy itt le van írva.)


  Itt arra az egyszerűbb feladatra összpontosítunk, hogy egy részecskét háttértérhez csatoljunk. Kézenfekvő
módszer egy potenciálisenergia-tag hozzáadása:
                                             p
                                     L = −m 1 − v 2 − V (r).

Ez egyszerű problémákhoz, például gyenge gravitációs
vagy elektromos térben lévő relativisztikus részecske vizsgálatához elegendő, de nem kielégítő, mert nem Lorentz-invariáns; csak
a teret létrehozó forrás nyugalmi rendszerében van értelme. Ezt lényegében háromféleképpen módosíthatjuk
Lorentz-invariáns akció eléréséhez. Elsőként skalármező esetén írhatjuk fel:
                                                 Z
                                          S0 = − dτ (m + gϕ).

Másodszor a potenciált vektormezővé terjeszthetjük ki, így
                                            Z         Z
                                 S1 = −m dτ + e Aµ dxµ

ami az elektromágnesség elméletéhez vezet; az idő szerinti paraméterezés visszaadja a fent megadott akciót.
Végül megjegyezhetjük, hogy vezető rendben ekvivalens lett volna a potenciáltagot
a négyzetgyök alá vinni, így
                                         Z s
                                                    2V
                                 S = −m        1+         dt2 − dr2 .
                                                    m

Ennek az akciónak a legegyszerűbb kovariáns általánosítása, ha V-t tenzormezővé emeljük, ekkor
                                              Z
                                                 p
                                    S2 = −m        −gµν dxµ dxν

általános gµν metrika mellett. Ez az általános relativitáselméletben geodetikus mozgást ad! A nemrelativisztikus
határban kis hµν esetén gµν = ηµν + hµν , és h00 /2 lesz a gravitációs potenciál. Emellett
az, hogy a metrika a négyzetgyök alatt van, azt jelenti, hogy nincs lehetőség minden részecskefajtához külön
csatolási állandót bevezetni; ebből következik az ekvivalenciaelv.

Megjegyzés. Miért nem lehetett volna a gravitációt az elektromágnességhez hasonlóan Aµ vektormezővel leírni?
Az alapvető ok az, hogy az elektromágneses terek forrása a j µ áramnégyesvektor,
amely Aµ jµ alakban csatolódik a térhez. Ezzel szemben a gravitációs terek forrása a stressz-energia
T µν , amely elsőrendű helyett másodrendű tenzor.
    A nemrelativisztikus határban a stressz-energia tenzor legtöbb eleme elhanyagolható; csak
az anyagáram j µ = T µ0 ≈ (ρ, ρv) számít. Ekkor felépíthető a gravitáció vektormezős elmélete,
amelyet gravitációs elektromágnességnek nevezünk, és formailag nagyon hasonló a
közönséges elektromágnességhez. Nem Lorentz-invariáns, mert j µ valójában nem négyesvektor, de
bizonyos határok között nagyon hasznos közelítése az általános relativitáselméletnek.

Megjegyzés. További részletek a mozgásegyenletekről. S1 esetén a legegyszerűbb mozgásegyenletek
a sajátidő szerinti paraméterezésből és az uµ = dxµ /dτ négyessebesség használatából következnek,
így a négyeserő
                                            duµ
                                    fµ = m       = eF µν uν .
                                             dτ


Ha a visszahatást, vagyis a részecskének a térre gyakorolt hatását is figyelembe akarjuk venni, akkor az árama
                                                    dxµ
                                             Z
                                   µ
                                  j (x) = e dτ          δ(x − x(τ ))
                                                     dτ
szokás szerint Maxwell-egyenleteinek jobb oldalára kerül. S2 esetén a mozgásegyenlet
a fent bemutatott geodetikus egyenlet, bár a négyzetgyök eltávolításához a
jegyzetekben ismertetett trükk szükséges. A kivétel a skalármező S0 akciója, amely
kevésbé ismert a másik kettőnél. Az általános paraméterezéshez tartozó Euler–Lagrange-egyenletek
                                                  !
                              d   (m + gϕ)ẋµ
                                                    = −g(∂ µ ϕ) −ηνρ ẋν ẋρ .
                                                               p
                                  p
                             dλ             ν
                                     −ηνρ ẋ ẋ ρ


A végső eredmény ismét a sajátidő szerinti paraméterezéssel a legegyszerűbb:
                                              g
                                fµ = −              (∂ µ ϕ + uµ uν ∂ν ϕ).
                                         1 + (g/m)ϕ

A nevezőben szereplő ϕ-függvény nem különösebben fontos, mert egy általánosabb
− dτ f (ϕ) kölcsönhatási tag választásával tetszőlegessé tehettük volna. A zárójelben szereplő tenzorszerkezet
biztosítja, hogy uµ f µ = 0, így az erő nem változtatja meg a részecske nyugalmi tömegét.
Történetileg az elsőként javasolt relativisztikus gravitációelméletek skalármezőkön alapultak, mert ezek
a legegyszerűbb lehetőséget jelentették, de hamar elvetették őket, mert az általános relativitáselmélet jobban illeszkedett az adatokhoz.
A témáról bővebben lásd az általános relativitáselméleti jegyzeteket.

Megjegyzés. Tekintsünk egy rendszert egy q-val jelölt általánosított koordinátával és további, meg nem nevezett
koordinátákkal. A Lagrange-függvény q-tól és q̇-tól több különleges módon függhet.

   1. q-tól, de q̇-tól nem függ. Ilyenkor q időbeli megváltoztatásának nincs „költsége”, ezért minden
      pillanatban arra az értékre áll be, amelyre ∂L/∂q = 0; ez a többi változóra vonatkozó kényszer.
      Ha akarjuk, q kiküszöbölhető úgy, hogy ezt a kényszert visszahelyettesítjük az akcióba. A
      térelméletben az ilyen változót segédmezőnek nevezzük. Optimalizálási feladatokban
      végponti kényszerek nélküli L ⊃ qf alakot írunk fel, és q-t az f Lagrange-szorzójának nevezzük.

   2. q̇-tól, de q-tól nem függ. Ilyenkor az akció invariáns q konstans eltolására,
      q → q + a, és a mozgásegyenletek fennállásakor ∂L/∂ q̇ megmarad. Noether első tétele
      általánosan azt mondja ki, hogy ez a két jelenség mindig együtt jár: az
      akció globális szimmetriái héjon megmaradó mennyiségeknek felelnek meg.

   3. Sem q-tól, sem q̇-tól nem függ. Ekkor az akció tetszőleges eltolásra invariáns,
      q esetén, q(t) → q(t) + a(t). A q-ra vonatkozó Euler–Lagrange-egyenlet pedig nem ad információt, ezért
      q(t) megoldása teljesen tetszőleges. Ennek helyes fizikai értelmezése az, hogy q
      mértékváltozó, vagyis a leírás redundanciája, nem pedig valódi fizikai mennyiség.
      Noether második tétele általánosan azt mondja ki, hogy ez a két jelenség mindig együtt jár:
      az akció mértékszimmetriái redundáns Euler–Lagrange-egyenleteknek felelnek meg, amelyek
      nem határozzák meg egyértelműen az időfejlődést.

Noether két tételének ezek a lehető legegyszerűbb példái, bár természetesen maguk a tételek
sokkal mélyebbek voltak. Noether tetszőleges számú téridőbeli
mező és tetszőleges számú derivált függvényében álló akció esetét vizsgálta.


1.2     Merev test mozgása
A merev testek kinematikájával kezdjük.
  • A merev test tömegek olyan együttese, amelyre ∥ri − rj ∥ minden i és j esetén állandó.
    Így a merev testnek hat szabadságfoka van: három az eltolásokból és három a forgásokból.
  • Ha egy pontot origónak rögzítünk, csak a forgási szabadságfokok maradnak. Definiáljunk egy rögzített
    {ea } koordinátarendszert, valamint a testtel együtt mozgó {ea (t)} testkoordináta-rendszert.
    Mindkét tengelyrendszer ortogonális, ezért ortogonális mátrix kapcsolja össze őket,
                                     ea (t) = Rab (t)eb (t),             Rab = ea · e
                                                                                    eb .
      Mivel a testkoordináta-rendszert R(t) határozza meg, az orientációk konfigurációs tere C = SO(3).
  • A test minden r pontja a térbeli, illetve a testhez kötött rendszerben a következőképpen fejthető ki:
                                            r(t) = rea (t)ea = ra ea (t).
      Vegyük észre, hogy a testkoordináta-rendszer időben így változik:

                                      dea   dRab                     dR −1
                                          =      eb =
                                                 e                      R                  eb
                                       dt    dt                      dt               ab

      Ez arra indít, hogy bevezessük az ω = ṘR−1 mátrixot, ekkor ėa = ωab eb .
  • Az ω mátrix antiszimmetrikus, ezért Hodge-duálist veszünk, és megkapjuk a szögsebességvektort:
                                               1
                                        ωa = ϵabc ωbc , ω = ωa ea .
                                               2
      E kapcsolat megfordításával ωa ϵabc = ωbc adódik. Ezt a fenti összefüggésbe helyettesítve
                                            dea
                                                = −ϵabc ωb ec = ω × ea
                                             dt
      ahol felhasználtuk, hogy (ea )d = δad .
  • A fenti csak az alábbi formula speciális esete:
                                                      v = ω×r
      amely egyszerű vektorgeometriából levezethető. E kép alapján a fizikai értelmezés szerint
      ω = n̂ dϕ/dt, ahol n̂ a pillanatnyi forgástengely, dϕ/dt pedig a forgás sebessége.
      Általában n̂ és dϕ/dt is változik az időben.
