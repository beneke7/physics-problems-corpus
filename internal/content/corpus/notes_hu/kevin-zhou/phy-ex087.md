---
id: kevin-zhou-notes-phy-ex087
source: kevin-zhou-notes
native_id: "phy Example 087"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex087
topic: [kvantumfizika]
subtopic: [atom- és molekulafizika, Stark-effektus, finomszerkezet]
math_tools: [dimenzióanalízis, differenciálegyenletek, perturbációelmélet]
format: explanation
kind: reference_example
has_solution: false
has_figure: true
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "11092-12017"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. A H2+ molekulában a protonok nagyjából rögzítettnek tekinthetők. Ekkor a molekulát összekötő
tengely körül rotációs szimmetria áll fenn, ami a fentihez hasonlóan a m ̸= 0 állapotok kétszeres degenerációját
okozza. A valóságban azonban a protonok szabadon mozoghatnak, ami egy „Λ-kettőzésnek” nevezett kis
felhasadást okoz; Λ az elektronok molekulatengely körüli mágneses kvantumszámának szokásos neve.
Most folytatjuk a hidrogén Stark-effektusának tárgyalását.

 • Külső tér hiányában a hidrogén 2p szintje gyorsan, 10−9 s nagyságrendű élettartammal bomlik 1s-re.
   A 2s állapot élettartama azonban sokkal hosszabb, 10−1 s nagyságrendű, mert két foton kibocsátásával
   bomlik 1s-re. Így könnyű 2s és 1s állapotokból álló populációt előállítani.
 • Elektromos tér bekapcsolásával a 2s és 2p állapotok gyorsan egymásba fejlődnek. Ha ilyen teret
   alkalmazunk egy 2s állapotú hidrogénatomokból álló populációra, gyors fotonkitörést kapunk.
 • Térjünk most vissza az alapállapothoz, és vizsgáljuk az elsőrendű hullámfüggvény-eltolódást. Az eredmény
                                           X            ⟨nℓm|eF z|100⟩
                           |ψ⟩ = |100⟩ +        |nℓm⟩                  .
                                                            E1 − En
                                             nℓm̸=100

    Ennek az állapotnak indukált dipólusmomentuma van.
 • Ha a polarizálhatóságot a térre adott elsőrendű válasz segítségével definiáljuk,
                                           ⟨d⟩ = αF + O(F 2 )
   akkor
                                           X        ⟨100|z|nℓm⟩⟨nℓm|z|100⟩
                              α = −2e2                                     .
                                                            E1 − En
                                         nℓm̸=100

   Általánosabban a polarizálhatóság tenzor is lehet, ⟨di ⟩ = αij Fj + O(F 2 ). Egy atom polarizálhatóságát
   a Clausius–Mossotti-formulával gázt alkotó anyag dielektromos állandójává alakíthatjuk.
207 9. Időfüggetlen perturbációelmélet

 • Ezután kiszámíthatjuk az alapállapot másodrendű energiaeltolódását, vagyis a kvadratikus Stark-effektust.
   Az eredmény
                          X ⟨100|eF z|nℓm⟩⟨nℓm|eF z|100⟩         1         1
               ∆Eg(2) =                                     = − αF 2 = − ⟨d⟩ · F.
                                        E1 − En                  2         2
                          nℓm̸=100

      Az 1/2 tényező pontosan a vártnak megfelelő, mert a dipólusmomentum indukált, nem állandó; F
      bekapcsolásakor lineárisan nő F-fel.

 • α kiszámítása kissé trükkös, mert végtelen sok közbenső állapoton, köztük ionizált kontinuumállapotokon
   kell összegezni. Durva becslés azonban adható az
                                                                  3 e2
                                          En − E1 > E2 − E1 =
                                                                  8 a0
      egyenlőtlenséggel, amiből
                                          2e2 X
                                α<              ⟨100|z|nℓm⟩⟨nℓm|z|100⟩
                                        E2 − E1
                                                 nℓm
      következik. Az összeg korlátozását elhagytuk, mert a hozzáadott tag úgysem járul hozzá. Az identitás
      felbontását felismerve
                                       2e2                      2e2        16
                             α<              ⟨100|z 2 |100⟩ =         a20 = a30 .
                                     E2 − E1                  E2 − E1      3
      adódik. Természetesen klasszikus modellből is sejthettük volna, hogy α ∼ a30, az elektront egy rugóra
      erősített tömegnek tekintve. A pontos eredmény α = (9/2)a30 .

 • Fent egy degenerált és egy nem degenerált rendszer közötti fontos különbséget tárgyaltunk: a degeneráció
   hiánya garantálja, hogy nincs lineáris Stark-effektus. A valóságban azonban degeneráció soha nem tökéletes.
   Pontosabban, ha valamilyen más fizika gyengén felbontja a degenerációt, akkor a Stark-effektus kvadratikus
   abban a tartományban, ahol a másik fizika dominál, és lineáris, ahol a Stark-effektus dominál. Pontosan
   ez történik hidrogénben, ahol a 2s és 2p degenerációját már a Lamb-eltolódás felbontja.

 • Formálisabban a teljes Hamilton-operátor H0 és esetleg sok kis perturbáció összegeként írható fel. A
   helyes eredményhez először a legfontosabb perturbációt kell figyelembe venni, majd a következő
   legfontosabbat az eredmény perturbációjaként kezelni, és így tovább. A fizikai eredmény természetesen
   nem függ a sorrendtől, de rossz választás esetén a kapott sor nem lesz jó.

 • A kémiában gyakran beszélnek állandó elektromos dipólusmomentummal rendelkező molekulákról. Ez nem
   sérti a paritást; csupán azt jelenti, hogy az ellentétes paritású két energiaszint elég közel van egymáshoz,
   hogy már egy kis elektromos tér is a lineáris tartományba vigye a Stark-effektust. Amíg azonban a szintek
   nem pontosan degeneráltak (ami mindig így van), kis terekben kvadratikus tartomány is létezik.

9.3     Finomszerkezet
Most a finomszerkezetet vizsgáljuk, amely a relativitás és a spin hatásaival foglalkozik. Ezek azonos
rendben, nevezetesen (v/c)2 rendben jelennek meg, ezért együtt kell kezelni őket. Egységes módon a
Dirac-egyenletből is levezethetők lennének, de ezt itt nem tesszük meg.
208 9. Időfüggetlen perturbációelmélet

 • Három új tag jelenik meg: a relativisztikus kinetikusenergia-korrekció, a Darwin-tag és a spin–pálya-tag:
                                    HFS = HRKE + HD + HSO .

 • Az első korrekció a relativisztikus kinetikus energiából származik:
                               p                      p2   p4
                          E=    m2 c4 + p2 c2 = mc2 +    −      + ....
                                                      2m 8m3 c2
 • A spin–pálya-csatolási tag
                                                    1
                                         HSO = − µ · B′
                                                    2
   ahol B′ az elektron pillanatnyi nyugalmi rendszerében látott mágneses tér. Az 1/2 tényező azért jelenik
   meg, mert az elektron rendszere nem inerciarendszer, és a hatás felét a Thomas-precesszió kioltja.
   Ez nehéz számítás; mindenesetre az eredmény közvetlenül a Dirac-egyenletből is kinyerhető.

 • A laborrendszerben
                                       1       1 1 dV
                                   E = ∇V =           x, B = 0.
                                       e       e r dr
   A vezető elektromos tér esetén a tértranszformációk vezető rendje
                                                       v
                                      E′ = E, B′ = − × E.
                                                       c
 • Mivel a vezető hatás érdekel bennünket, p = mv-t behelyettesítve
                                                   1 1 dV
                                           B′ =            L
                                                  emc r dr
   adódik, ahol L = x × p az elektron pályamenti szögimpulzusa. Végül a µ = −(e/mc)S relációt használva,
   a vezető rendű g = 2 eredménnyel,
                                                 1 1 dV
                                       HSO =               L · S.
                                               2m2 c2 r dr
 • A Darwin-tag végül azért jelenik meg, mert az elektron helye a λ = ℏ/mc Compton-hosszúság rendjében
   elmosódik. Ez azt jelenti, hogy az elektron valójában az elektrosztatikus potenciál λ sugarú tartomány
   feletti átlagát érzi. A Laplace-operátor harmonikus tulajdonsága miatt ez λ2 ∇2 V-vel arányos korrekciót
   ad.

 • A Dirac-egyenlet valódi levezetése az együtthatót is megadja:
                                                  1 ℏ2
                                          HD =            ∇2 V.
                                                  8 m2 c2
   A Dirac-egyenlet szintjén a Darwin-tag a pozitív és negatív frekvenciájú komponensek interferenciájából
   származik. Ezek gyors, Compton-frekvenciájú oszcillációkat, az úgynevezett Zitterbewegungot okozzák,
   amelyek kisimítják az elektron helyét.

 • Most az ℏ = m = e = 1 atomi egységekre szorítkozunk, ahol α = 1/c ≈ 1/137. Ekkor
                                 α2 4             α2 2                α2 1 dV
                      HRKE = −     p ,    HD =      ∇ V,     HSO =            L·S
                                 8                8                   2 r dr
   és világos, hogy a tagok mind azonos rendűek.
209 9. Időfüggetlen perturbációelmélet

 • Tovább szűkíthetünk az egy elektront tartalmazó atomokra, amelyekre
                                      Z        1 dV   Z
                             V (r) = − ,            = 3,        ∇2 V = 4πZδ(x)
                                      r        r dr  r
    és az utolsó két tag
                                       π                          Zα2 1
                               HD = Zα2 δ(x),             HSO =         L · S.
                                       2                           2 r3
    alakúvá válik. Vegyük észre, hogy HD-ben megjelent egy Z tényező, mert Zδ(x) az atommag töltéssűrűsége.

 • Amint alább látni fogjuk, az energiaeltolódások mind (Zα)2-tel lesznek arányosak. A Dirac-egyenlet
   teljes kifejtése valójában (Zα)2 szerinti sor, ezért akkor jó, ha Zα ≪ 1. Nehéz atomok, például az
   urán esetén jobb teljesen relativisztikus kezelést alkalmazni.

Ezután a bázis megválasztását tárgyaljuk.

 • Mivel most spinnel foglalkozunk, bevezetjük a spin mágneses kvantumszámát, és a perturbálatlan bázis
   |nℓmℓ ms ⟩ lesz, amely egyszerre diagonalizálja L-t, L2-t, S-t és S 2-t. Az energiaszintek
   En = −Z 2 /2n2.

 • Általában célszerű olyan bázist választani, amely diagonalizálja a teljes Hamilton-operátorral kommutáló
   megfigyelhető mennyiségeket. Naiv bázisválasztás esetén egy 2n2 × 2n2-es mátrixot kellene diagonalizálni,
   jó választással viszont kiválasztási szabályokat kapunk, amelyek a mátrixot kisebb részekre bontják.

 • Ezért hasznos lehet a teljes J = L + S szögimpulzust tekinteni. Mivel HRKE skalár, L-lel kommutál.
   Mivel csak a pályamozgástól függ, S-sel, így J-vel is kommutál. Hasonlóan HD mindezekkel az
   operátorokkal kommutál. Ezzel szemben

                                        [L, HSO ] ̸= 0,    [S, HSO ] ̸= 0

   de [J, HSO ] = 0, mivel J az egész rendszert forgatja. Továbbá HSO kommutál L2-tel és S 2-tel, mert
   például [L2 , L · S] = [L2 , L] · S = 0.

 • Ezért a „csatolt bázisban” |nℓjmj ⟩ célszerű dolgozni, amely egyszerre diagonalizálja L2-t, S 2-t,
   J 2-t és Jz-t. Ez a bázis a Clebsch–Gordan-együtthatókkal kapcsolódik az eredetihez:
                                                 X
                                    |nℓjmj ⟩ =        |nℓmℓ ms ⟩⟨ℓsmℓ ms |jmj ⟩
                                             mℓ ,ms

   és alább elhagyjuk s indexét. Mivel mindhárom finomszerkezeti tag diagonális a csatolt bázisban,
   nincs szükség degenerált perturbációelméletre; csak a diagonális mátrixelemeket kell kiszámítanunk.
   (Másodrendű perturbációelméletre nincs értelme áttérni, mert más hatások elsőrendben fontosabbak.)

Most kiszámítjuk az energiaeltolódásokat.

 • Könnyebb a HRKE-re a csatolatlan bázisban gondolni, majd áttérni a csatolt bázisra. Ez a tag tisztán
   pályamenti, és L2-tel kommutál, ezért

                      ⟨nℓmℓ ms |HRKE |nℓ′ m′ℓ m′s ⟩ = δℓℓ′ δms m′s ⟨nℓmℓ |HRKE |nℓm′ℓ ⟩.

    Mivel HRKE skalároperátor, a Wigner–Eckart-tétel szerint

                             ⟨nℓmℓ |HRKE |nℓm′ℓ ⟩ = δmℓ m′ℓ ⟨nℓ0|HRKE |nℓ0⟩.
210 9. Időfüggetlen perturbációelmélet

 • A Clebsch–Gordan-együtthatókat és a fenti eredményeket használva
                             X X
     ⟨nℓjmj |HRKE |nℓjmj ⟩ =            ⟨jmj |ℓmℓ ms ⟩⟨nℓmℓ ms |HRKE |nℓm′ℓ m′s ⟩⟨ℓm′ℓ m′s |jmj ⟩
                                 mℓ ,ms m′ ,m′s
                                          ℓ
                                                     X
                              = ⟨nℓ0|HRKE |nℓ0⟩              ⟨jmj |ℓmℓ ms ⟩⟨ℓmℓ ms |jmj ⟩
                                                    mℓ ,ms

                              = ⟨nℓ0|HRKE |nℓ0⟩

   tehát az együtthatók teljesen kiesnek.

 • Már csak a várható értéket kell kiszámítani. Ehhez a legegyszerűbb észrevenni, hogy

                                                  α2 2   α2
                                   HRKE = −         T = − (H0 − V )2
                                                  2      2
   mivel H0 és V várható értékeit már ki tudjuk számítani:

                                                                Z2
                                                       
                                                        1
                              ⟨H0 ⟩ = En , ⟨V ⟩ = −Z        =− 2
                                                        r       n

   ahol az utóbbi eredmény a virialtételből következik.

 • A nehéz rész a ⟨V 2 ⟩ kiszámítása, ami speciálisfüggvény-technikai módszereket igényel, és azt adja,

                                                          Z2
                                            
                                              1
                                                  =
                                             r2      n3 (ℓ + 1/2)

   amiből a teljes energiaeltolódás
                                                                                       
                                                                   1        3    n
                        ⟨nℓjmj |HRKE |nℓjmj ⟩ = (Zα)2 (−En )                  −             .
                                                                   n2       4 ℓ + 1/2

 • Ugyanezzel az érveléssel a Darwin-tag
                                                                 π
                        ⟨nℓjmj |HD |nℓjmj ⟩ = ⟨nℓ0|HD |nℓ0⟩ = Zα2  |ψnℓ0 (0)|2 .
                                                                 2
                                                                           √
   Az eltolódás csak ℓ = 0 esetén nemzérus, amikor Y00 = 1/ 4π tényezőt kapunk. Az
   Rn0 (0) = 2(Z/n)3/2 eredményt használva
                                                                  1
                                ⟨nℓjmj |HD |nℓjmj ⟩ = (Zα)2 (−En ) δℓ0 .
                                                                  n

 • A spin–pálya-tagot célszerű a következő alakban írni:
                                                1
                                         L · S = (J 2 − L2 − S 2 ).
                                                2
   A fent ígérteknek megfelelően ezt könnyű kiértékelni a csatolt bázisban:

                                     Zα2                                          1
            ⟨nℓjmj |HSO |nℓjmj ⟩ =       (j(j + 1) − ℓ(ℓ + 1) − s(s + 1))⟨nℓjmj | 3 |nℓjmj ⟩
                                      4                                          r
   ahol j = ℓ ± 1/2.
211 9. Időfüggetlen perturbációelmélet

 • A fentihez hasonlóan az utolsó tényező felírható így:
                                           1                  1
                                  ⟨nℓjmj | 3 |nℓjmj ⟩ = ⟨nℓ0| 3 |nℓ0⟩
                                          r                  r
   a speciálisfüggvény-technika pedig azt adja, hogy

                                                   Z3
                                    
                                      1
                                        =                      .
                                     r3   n3 ℓ(ℓ + 1/2)(ℓ + 1)

 • ℓ = 0 esetén az előtényező zérus, de ⟨1/r3 ⟩ divergál, ezért az eredmény határozatlan. Ezt úgy kell
   kezelni, hogy regularizáljuk a Coulomb-szingularitást; ekkor ⟨1/r3 ⟩ nem divergál, és zérus eredményt ad.

 • A spin–pálya- és a Darwin-tagnak egyaránt különleges esete van ℓ = 0-ra: rendre járulékot adnak,
   illetve nem adnak járulékot, de együtt egyszerű alakot eredményeznek. A teljes eredmény
                                                                  
                                            2      1 3         n
                               ∆EFS = (Zα) (−En ) 2      −           .
                                                   n    4 j + 1/2

   Figyelemre méltó, hogy az eredmény közvetlenül csak n-től és j-től függ, ezért az energiaszintek

                                   Z2        (Zα)2 3
                                                               
                                                             n
                          Enj = − 2 1 −                −             .
                                   2n          n2    4 j + 1/2

   alakúak. Az energiaszintek lefelé tolódnak, a teljes energia pedig j növekedésével nő. Degeneráció
   továbbra is marad, ami a rendszer maradék szimmetriájára utal.

Most néhány megjegyzést fűzünk ehhez az eredményhez.

 • Amint itt látható, a Dirac-egyenlet pontos eredményt ad a hidrogén energiaszintjeire:

                                                      mc2
                      Enj =                                               !2 1/2
                             1 +                  Zα                         
                                                  p
                                     n − j − 1/2 + (j + 1/2)2 − (Zα)2

   amely kifejtve visszaadja az mc2-t, a közönséges energiaszinteket és a finomszerkezetet. A következő
   rendben azonban olyan további hatások jelennek meg, amelyeket a Dirac-egyenlet nem tartalmaz, például
   a hiperfinom szerkezet és a Lamb-eltolódás.

 • Az alábbi ábrán néhány energiaszint látható, a finomszerkezetet a szemléltetés kedvéért eltúlozva.
   Az ábra az nℓj spektroszkópiai jelölést használja, ahol ℓ = s, p, d, f, . . ..
212 9. Időfüggetlen perturbációelmélet


  • A fenti nyilak a megengedett elektromos dipólusátmeneteket is mutatják. Ezeket az
    ⟨nℓjmj |x|n′ ℓ′ j ′ m′j ⟩ mátrixelemek határozzák meg. Az x operátor az L által generált tisztán
    térbeli forgatásokra és a J által generált teljes rendszer forgatásaira nézve is 1 spinű tenzoroperátor.
    A Wigner–Eckart-tétel alkalmazása a következő korlátokat adja:

                                   |∆ℓ| ≤ 1,    |∆j| ≤ 1,   |∆mj | ≤ 1.

                                              ̸ 0, mivel a csatolt állapotok paritása (−1)ℓ,
    A paritás további korlátja ∆ℓ =
    de ∆j-re nem ad korlátozást.

  • A Lamb-eltolódás az elektron és a kvantált elektromágneses tér kölcsönhatásából ered. Történelmileg
    legfontosabb hatása a 2s1/2 és 2p1/2 degenerációjának felhasítása, így a 2s1/2 körülbelül 1 GHz-cel
    magasabb a 2p1/2-nél. Összehasonlításképpen a finomszerkezet a 2p3/2 szintet körülbelül 10 GHz-cel
    magasabbra helyezi. Parametrikusan a Lamb-eltolódás En α3 log(1/α) szerint skálázódik.

  • Mivel a 2s1/2 nem vehet részt elektromos dipólusátmenetben, a Lamb-eltolódás azt jelenti, hogy
    domináns bomlási módja a 2p1/2-be való átmenet, amely után az atom gyorsan 1s1/2-be bomlik.

  • Alkáliatomoknál a fenti érvelés nagy része szintén működik, azzal a különbséggel, hogy itt az ℓ szerinti
    degenerációt már erősen felbontja a potenciál nem-Coulomb-jellege. Ebben az esetben a legfontosabb
    hatás a spin–pálya-csatolás, mert ez az egyetlen tag, amely a j szerinti degenerációt felbontja.
    Hasonló elemzésből

                                       α2
                                                                            
                                                                        1 dV
                             ∆ESO =       (j(j + 1) − ℓ(ℓ + 1) − 3/4)          .
                                        4                               r dr

    Például ez a tag a nátrium 3p szintjét 3p1/2 és 3p3/2 szintekre hasítja. Amikor ezek a szintek 3s-be
    bomlanak, a nátrium-dublettet figyelhetjük meg.

Megjegyzés. A Lamb-eltolódás a Darwin-taghoz hasonló további elmosódás, amelyet vákuumfluktuációkkal
való kölcsönhatás okoz. Tekintsünk egy L oldalhosszúságú nagy kocka alakú dobozba zárt atomot. A
213 9. Időfüggetlen perturbációelmélet

kvantált elektromágneses tér módusainak állandó vákuumenergiája ℏωk, ahol ωk a frekvenciájuk. Ezeket
a kvantumfluktuációkat heurisztikusan véletlenszerűen változó klasszikus Ek elektromos térként kezelhetjük,
amelyre
                                         |Ek |2 L3 ∼ ℏωk
teljesül, mivel mindkét oldal az adott módus teljes térenergiáját méri. A véletlen fluktuációk τ ∼ 1/ωk
karakterisztikus idő alatt változnak, amely alatt a részecske elmozdulása

                                                  e|Ek |τ 2   e|Ek |
                                           δr ∼             ∼        .
                                                     m        mωk2

Mivel e módusok fluktuációi függetlenek, a négyzetes átlagos fluktuáció
                  X e2 |Ek |2                                        3
                                 e2 ℏ X           e2 ℏ                                e2
                                                             Z                              Z
            2                             1                          L     1                  dk
        ⟨δr ⟩ ∼                 ∼ 2             ∼                dk               ∼
                       m2 ωk4    m      (Lωk )3   m2                 ℏ   (Lωk ) 3    2  2   3
                   k
                                                                                    m ℏ c  k

ahol felhasználtuk, hogy az állapotok a lendülettérben ∆k ∼ ℏ/L távolságra vannak egymástól. Ez az
integrál logaritmikusan divergál, de levágásokat kell bevezetnünk. Az atomnál nagyobb hullámhosszú módusok
nem hatnak erősen az elektronra, csak adiabatikusan lökik, míg az elektron Compton-hosszánál kisebb
hullámhosszú módusok új részecskék spontán megjelenését okozzák a vákuumból. A két skála aránya α, ezért

                                                        e2        1
                                           ⟨δr2 ⟩ ∼            log .
                                                      m2 ℏ2 c3    α
Ugyanezt az érvelést alkalmazva a Darwin-tagra ℓ = 0 állapotokra
                                              ∆E          1
                                                 ∼ α3 log
                                              En          α
energiaeltolódást kapunk. Hasonló történettel a Darwin-tag kvantumtérelméleti értelmezését is indokolhatjuk.
A virtuális fotonokkal való kölcsönhatás helyett egy elektron–pozitron pár hirtelen, spontán megjelenik a
vákuumból. A pozitron megsemmisíti a régi elektront, az új elektron pedig a helyén továbbhalad; ez
gyakorlatilag lehetővé teszi az elektron helyének teleportációját.
   Ez szép levezetés, de észben kell tartani, hogy a „kvantumfluktuációk” általában nem úgy viselkednek,
mint a klasszikus sztochasztikus fluktuációk. Sztochasztikus fluktuációk bevitele elegendő a kvantumtérelmélet
néhány jóslatának visszanyeréséhez, ahogy egy klasszikus pontszerű részecske fluktuációinak hozzáadása is
visszaadhat valamit a közönséges kvantummechanika jellegéből, de ez általában nem működik. (Ha valóban
működne, semmi értelme nem lenne egyáltalán kvantummechanikát használni!)

Megjegyzés. Thomas-precesszió gyors és durva levezetése. Tekintsünk egy v ≪ c sebességű elektront,
amely egyenes pályán mozog, majd a pálya hirtelen θ ≪ 1 szöggel elfordul. Az elektron rendszerében a
pálya a hosszirányban kontrahálódik, így nagyobb fordulási szöget lát:

                                       θ′ = tan−1 (γ tan θ) ≈ γθ.

Vagyis az elektron úgy látja, hogy a laborrendszerben mértnél nagyobb szöggel fordul, mégpedig

                                           θ′ − θ          v2
                                                  ≈ γ − 1 ≈ 2.
                                              θ            2c
214 9. Időfüggetlen perturbációelmélet

Ha az elektron a laborrendszerben egyenletesen mozog, akkor az „extra” precesszió
                                                    ωv 2   av
                                             ωT =        = 2
                                                    2c2   2c
és az irányokat is figyelembe véve
                                                      v×a
                                              ωT =         .
                                                       2c2
Ez a Thomas-precesszió nemrelativisztikus határértéke. Az a = r̂(dV /dr) behelyettesítésével látható,
hogy a naiv spin–pálya-hozzájárulás fele kioltódik, a fentiek szerint. A pontos eredmény, amely
infinitézimális Lorentz-transzformációk integrálásával vezethető le,
                                                     γ2 v × a
                                           ωT =               .
                                                    γ + 1 2c2

9.4     Zeeman-effektus
Ezután a mágneses térben lévő atomok Zeeman-effektusát vizsgáljuk.

  • Továbbra is atomi egységeket használunk, amelyekben c = 1/α ≈ 137. Ez azt jelenti, hogy a Bohr-
    magneton
                                                  eℏ    1   α
                                             µB =    =     = .
                                                 2mc    2c  2
      Ha az elektron g-faktorát 2-nek vesszük, akkor
                                                      S
                                              µ = gµB    = −αS
                                                      ℏ
      ezért egy elektronspin mágneses térrel való kölcsönhatási energiája
                                              −µ · B = αB · S.

  • Egy atomban a tipikus mágneses tér Gauss-egységekben, dimenzióanalízissel,
                                             e     m2 e5
                                      B0 =       =       = 1.72 × 103 T
                                             a20    ℏ4
      Ez megegyezik a Bohr-sugárnál fennálló elektromos térrel, amely Gauss-egységekben ugyanazokkal az
      egységekkel rendelkezik, mint a mágneses tér.
  • A perturbációelmélet szempontjából azonban a legfontosabb mennyiség az erő nagysága; a mágneses erők
    az elektromosakhoz képest v/c = α tényezővel elnyomottak. Ahhoz tehát, hogy a mágneses tér perturbációja
    az elektrosztatikus térrel összehasonlítható hatású legyen, B0 /α = 2.35 × 105 T térerősségre volna
    szükség, ami jóval nagyobb minden laboratóriumban előállítható értéknél. Ezért a mágneses tereket
    mindig gyengének tekintjük.
  • A finomszerkezetet is figyelembe véve a Hamilton-operátor
                                       1
                                  H = (p + αA)2 + V (r) + HFS + αB · S.
                                       2
      Ez eltér korábbi kifejezésünktől, mert Gauss- és atomi egységeket használunk, ahol q = −1. Gauss-
      egységekben a mágneses és elektromos tér azonos egységű, így az SI-eredményből „c-vel osztva”
      kaphatjuk meg, ami az orbitális tagban az α tényezőt adja. Ez azt is világossá teszi, hogy a spin-
      és a pályamenti rész egyaránt O(α) rendben járul hozzá.
215 9. Időfüggetlen perturbációelmélet

 • A mágneses tér és a vektorpotenciál legyen
                                                       1
                                        B = Bẑ,    A = B × r.
                                                       2
    Mivel ez a vektorpotenciál Coulomb-mértékben van, p · A = A · p, ezért

                          1            p2            α2 2
                       T = (p + αA)2 =    + αp · A +   A = T1 + T2 + T3 .
                          2            2             2

 • T2 egyszerűsíthető, ha észrevesszük, hogy
                                      α              α
                               T2 =     p · (B × r) = B · L,      L=r×p
                                      2              2
    ahol a skaláris hármasszorzat szabályát használtuk; sorrendi probléma nincs, mert ∇ · B = 0.

 • A T3 tag kifejthető:

                                                 α2 2 2
                                          T3 =     B (x + y 2 )
                                                 8
    így potenciálként viselkedik. Egy további α-hatvánnyal azonban elnyomott, ezért elhagyható.

 • Az utolsó tag a spin-tag, αB · S. Ezt T2-vel összeadva a teljes perturbáció
                                        α               α
                                HZ =      B · (L + 2S) = B(Lz + 2Sz )
                                        2               2
    adódik. A finomszerkezeti járulékokat azért nem hagyhatjuk el, mert α2 szerint skálázódnak, míg a
    Zeeman-perturbáció αB szerint. Durva becslésként a kettő αB0 ∼ 10 T térerősségnél egyformán fontos,
    ami meglehetősen nagy, bár a határ valójában körülbelül tízszer kisebb a dimenziótlan kvantumszámok
    elnyomása miatt.

 • Anyagok léptékén a spin- és T2-tag felelős a Pauli-paramágnesességért, a T3-tag pedig a Landau-
   diamágnesességért; mindkettőt láttuk a statisztikus mechanika tárgyalásakor. A Zeeman-effektust a
   mágneses terek spektrális vonalakkal történő mérésére is használják.

Először az erős térerősség esetét vizsgáljuk, amikor HZ dominál. Ezt az erős terű Zeeman-effektust
Paschen–Back-effektusnak is nevezik. A térerősséget nem növelhetjük túl magasra, különben a T3-tag fontossá
válik.

 • Első feladatunk jó bázist választani. Mivel a mágneses tér ẑ irányú, HZ kommutál Lz-vel, Sz-zel és Jz-vel.
   Továbbá L2-tel és S 2-tel is kommutál. Ezzel szemben

                                              [J 2 , HZ ] ̸= 0

   mert J 2 tartalmazza az L · S tagot, amelyben Lx Sx + Ly Sy szerepel. Ezért a Zeeman-effektus a
   csatolatlan bázist részesíti előnyben.
216 9. Időfüggetlen perturbációelmélet

 • A csatolatlan bázisban a perturbáció már diagonális, ezért csak leolvassuk:
                     α                                 α
             ∆E =      B⟨nℓmℓ ms |Lz + 2Sz |nℓmℓ ms ⟩ = B(mℓ + 2ms ) = µB B(mℓ + 2ms ).
                     2                                 2
   Ha nem tudnánk a spinről, azt várnánk, hogy egy spektrális vonal mindig páratlan számú vonalra hasad,
   mivel ∆E = µB Bmℓ. E szabály megsértését anomális Zeeman-effektusnak nevezték, és ez volt a spin
   egyik első bizonyítéka. (Valójában az atom klasszikus modellje három vonalat meg tud magyarázni, ami
   az egyik leggyakoribb eset. A vonalak az elektron térrel párhuzamos, illetve az arra merőleges, két
   ellentétes irányú forgó oszcillációjának felelnek meg.)

 • Például a hidrogén n = 2 állapotai az alábbiak szerint viselkednek.



   A 2p állapotok |mℓ ms ⟩ = |−1, 12 ⟩ és |1, − 12 ⟩ degeneráltak. Ezt a degenerációt az elektron g-
   faktorának QED-korrekciói felbontják, bár ezt további α tényező nyomja el. Ez az eredmény alkáliatomokra
   változatlanul érvényes.

 • Egy elektront tartalmazó atomokban néhány 2s állapot szintén degenerált a 2p állapotokkal, mivel
   |ℓmℓ ms ⟩ = |00 12 ⟩ degenerált |10 12 ⟩-vel, illetve |00, − 12 ⟩ degenerált |10, − 21 ⟩-gyel.
   Összesen a nyolc n = 2 állapot öt energiaszintre hasad, amelyek közül három kétszeresen degenerált.

 • Most a finomszerkezet hatását vizsgáljuk, HZ-t a perturbálatlan Hamilton-operátor részeként kezelve.
   Az egyszerűség kedvéért csak a spin–pálya-hozzájárulást vesszük figyelembe:

                                                                     α2 1 dV
                                    HSO = f (r)L · S,      f (r) =           .
                                                                     2 r dr
   Ez fogalmilag a legtrükkösebb, mivel a csatolt bázist részesíti előnyben, miközben a csatolatlan
   |nℓmℓ ms ⟩ bázisban kell dolgoznunk, ahol kétszeres degenerációk vannak.

 • Ennek a bázisnak a használata azért nehéz, mert HSO módosíthatja mℓ és ms értékét (ℓ értékét azonban
   nem, mivel [L2 , HSO ] = 0). mℓ-et és ms-t azonban egyszerre legfeljebb egy egységgel változtathatja,
   mivel
                                             1
                                      L · S = (L+ S− + L− S+ ) + Lz Sz
                                             2
   vagy a Wigner–Eckart-tétel alkalmazásával. A 2p degenerált állapotok ms-ben 2 többszöröseivel térnek
   el, ezért HSO nem keverheti a degenerált állapotokat. Az elsőrendű eltolódás kiszámításához elegendő
   a diagonális mátrixelemeket vizsgálni.

 • Így az energiaeltolódások

                      ∆E = ⟨nℓmℓ ms |f (r)L · S|nℓmℓ ms ⟩ = mℓ ms ⟨nℓmℓ |f (r)|nℓmℓ ⟩
217 9. Időfüggetlen perturbációelmélet

   és hidrogénre
                                        α2       1        α2       mℓ ms
                           ∆E = mℓ ms      ⟨nℓ0| 3 |nℓ0⟩ = 3                   .
                                        2       r         2n ℓ(ℓ + 1/2)(ℓ + 1)
   ℓ = 0 esetén a fenti alak határozatlan, de az energiaeltolódás a korábbihoz hasonló érveléssel zérus.

Most a gyenge térerősség esetét vizsgáljuk, amikor HFS dominál.

 • Hidrogénnél helyesen figyelembe kellene vennünk a Lamb-eltolódást is, amely az n = 2 energiaszinteken
   csak tízszer kisebb a finomszerkezeti eltolódásoknál. Az egyszerűség kedvéért azonban elhanyagoljuk.

 • Ebben az esetben a csatolt |nℓjmj ⟩ bázist kell használnunk. A nehézség az, hogy [J 2 , HZ ] ̸= 0.
   Szerencsére a finomszerkezeti energiaszintek közvetlenül j-től függenek, vagyis a különböző j-jű
   szintek nem degeneráltak. Ezért az elsőrendű eltolódáshoz ismét nem kell mátrixokat diagonalizálnunk,
   hanem a diagonális elemekre összpontosíthatunk:

                                ∆E = ⟨nℓjmj |µB B(Lz + 2Sz )|nℓjmj ⟩.

   Az Lz + 2Sz = Jz + Sz átírással

                                ∆E = µB B (mj + ⟨nℓjmj |Sz |nℓjmj ⟩) .

 • A fennmaradó tényező a projekciós tétellel számítható:
                                                    1
                       ⟨nℓjmj |Sz |nℓjmj ⟩ =             ⟨nℓjmj |(S · J)Jz |nℓjmj ⟩
                                                j(j + 1)
   valamint
                                                1 2
                                                  J + S 2 − L2 .
                                                              
                                        S·J=
                                                2
   Így
                                                        j(j + 1) + s(s + 1) − ℓ(ℓ + 1)
                    ∆E = gL (µB B)mj ,       gL = 1 +
                                                                  2j(j + 1)
   ahol gL a Lande-féle g-faktor neve.

 • Annak alapvető oka, hogy az eltolódást akkor is mj-ben lineárisnak írhatjuk, amikor külön-külön mℓ-től
   és ms-től függ, ismét a Wigner–Eckart-tétel: a releváns altéren csak egyetlen lehetséges vektoroperátor van.

 • A naiv klasszikus eredmény gL = 1 + 1/2 = 3/2 lenne, a fenti eredmény pedig azért más, mert J, L és
   S nem klasszikus vektorok, hanem nem kommutáló kvantumoperátorok. (Naiv intuíció szerint a spin–pálya-
   csatolás miatt L és S gyorsan változik; a projekciós tételt kell használnunk a J menti komponensük
   kiszámításához, amely lassabban változik, mert a mágneses tér gyenge.) Vegyük észre, hogy gL teljesíti
   a várt határértékeket: ℓ = 0 esetén gL = 2, míg ℓ → ∞ esetén gL → 1.

 • Erősebb mágneses terekben a másodrendű hatást is ki kellene számítani, amely már különböző ℓ-jű
   alterek keveredését is tartalmazza. Az n = 2 energiaszinteknél ez nem túl nehéz, mivel csak állapotpárok
   keverednek, így a pontos eredmény könnyen kiszámítható.
218 9. Időfüggetlen perturbációelmélet

9.5     Hiperfinom szerkezet
A hiperfinom szerkezet az atommag multipólusmomentumaiból, különösen a mágneses dipólus- és elektromos
kvadrupólusterekből származik.

 • A hiperfinom hatások összecsatolják az atommagot és az elektronokat, ezáltal megnövelik a Hilbert-teret.
   Sok hasznos alkalmazásuk van. Például a hidrogén alapállapotának hiperfinom felhasadása adja a 21 cm-es
   vonalat, amely hasznos a rádiócsillagászatban. A legtöbb atomóra egy nehéz alkáliatom, például rubídium
   vagy cézium hiperfinom átmenetének frekvenciáját használja; az utóbbi definiálja a másodpercet.

 • Az atommag spinjét I-vel jelöljük, és szokás szerint feltesszük, hogy az atommagot egyetlen irrep írja
   le, I 2 sajátértéke i(i + 1)ℏ2. Az atommag Hilbert-terét az |imi ⟩ állapotok feszítik ki.

 • Stabil atommagok esetén i 0-tól 15/2-ig terjed. Például a protonra i = 1/2, a deutériumra i = 1,
   az atomórákban használt 133 Cs-re pedig i = 7/2.

 • Az i = 1/2 atommagokra korlátozódunk; ekkor az elektromos monopóluson kívül az egyetlen lehetséges
   multipólusmomentum a mágneses dipólus.

Ezután kifejtjük a Hamilton-operátort.

 • A teret és a vektorpotenciált egy fizikai dipólus terének választjuk:
                                                                             
                                   4π         1                    8π         T
                  A(r) = (µ × r)      δ(r) + 3 , B(r) = µ ·           δ(r)I + 5 .
                                    3         r                     3        r

      Itt keverjük a vektor- és tenzorjelölést; I az identitástenzor, T a kvadrupólusten­zor, a balról µ-val
      végzett skaláris szorzás pedig az első index kontrakcióját jelenti. A deltafüggvényes tagok minden
      fizikai dipólusnál jelen vannak, és a végső eredményben fontosak lesznek.

 • A Hamilton-operátor hasonló a Zeeman-effektuséhoz:

                                      A 2
                                       
                              1                                  1
                           H=      p+     + V (r) + HFS + HLamb + S · B.
                              2       c                          c

      Az atommag mágneses momentuma

                                                µ = gN µN I

      ahol µN a magmagneton. A Hilbert-tér állapotai |nℓjmj mi ⟩ alakban írhatók, ezt „csatolatlan” bázisnak
      nevezzük, mivel J és I nincs csatolva.

 • A Zeeman-effektus elemzéséhez hasonlóan a vektorpotenciál Coulomb-mértékben van, az A2-tag elhanyagolható,
   ezért ugyanazzal a gondolatmenettel
                                              1
                                          H1 = (p · A + S · B).
                                              c
      Ezeket a pályamenti és spin-tagokat azonban nehezebb lesz kiértékelni.
219 9. Időfüggetlen perturbációelmélet

 • A pályamenti tag arányos a

                                      p · (I × r) = I · (r × p) = I · L

    mennyiséggel, ahol ellenőrizhető, hogy nincs sorrendi probléma. A spin-tagban sincs ilyen probléma,
    mert S és I külön altereken hat. Ezért
                                                                                    
                                 4π        1                   8π               I·T ·S
             H1,orb = k(I · L)      δ(r) + 3 , H1,spin = k        δ(r)(I · S) +           .
                                  3       r                     3                 r5

    A deltafüggvényes tagokat Fermi-féle kontaktustagoknak nevezzük, és

                                      k = 2gN µB µN = ge gN µB µN .

    A H1,spin tag spin–spin kölcsönhatás, míg H1,orb a mozgó elektron és a proton mágneses tere közötti
    kölcsönhatásként fogható fel.

 • Csábító lenne további tagokat is hozzáadni, amelyek a proton mágneses momentumának az elektron spin-
   és pályamozgása által létrehozott mágneses térrel való kölcsönhatását írják le. Ezek rendre további
   H1,spin és H1,orb példányokat adnának, de nem szabad hozzáadni őket, mert a kölcsönhatást kétszer
   számolnánk.

 • Az I · L és I · S tagok nem kommutálnak L-lel, S-sel vagy I-vel. Ezért a finomszerkezethez hasonlóan
   a csatolt bázisra való áttérés indokolt. Legyen F = J + I, és diagonalizáljuk L2-t, J 2-t, F 2-t és Fz-t.
   A csatolt és csatolatlan bázis kapcsolata
                                          X
                             |nℓjf mf ⟩ =     |nℓjmj mi ⟩⟨jimj mi |f mf ⟩.
                                            mj ,mi

    E csatolt bázis és az eredeti csatolatlan |nℓmℓ ms mf ⟩ bázis összekapcsolásához kétszer kell
    Clebsch–Gordan-együtthatókat alkalmaznunk. Alternatívaként olyan eszközöket használhatunk, mint a
    Wigner-féle 6j-szimbólumok


    vagy a Racah-együtthatók, amelyekkel az összeadás egy lépésben elvégezhető.

Most kiszámítjuk az energiaeltolódásokat.

 • A csatolt bázisban a perturbáció diagonális, ezért ismét elkerülhetjük a mátrixok diagonalizálását.
   Elegendő a diagonális mátrixelemeket kiszámítani:

                                      ∆E = ⟨nℓjf mf |H1 |nℓjf mf ⟩.

 • Először az ℓ ̸= 0 esetet tekintjük, ahol a kontaktustagok nem járulnak hozzá. Az energiaeltolódás
   felírható

                                                          L    T ·S   L    3r(r · S) − r2 S
             ∆E = k⟨nℓjf mf |I · G|nℓjf mf ⟩,        G=      +      =    +                  .
                                                          r3    r5    r3          r5

 • A G tisztán elektronikus vektoroperátor, és az elektronikus forgatások (J által generált) egyetlen
   irpjén belül veszünk mátrixelemeket, így alkalmazhatjuk a projekciós tételt:

                                       k
                            ∆E =            ⟨nℓjf mf |(I · J)(J · G)|nℓjf mf ⟩.
                                   j(j + 1)
220 9. Időfüggetlen perturbációelmélet

 • Az első tag egyszerűsíthető, ha észrevesszük, hogy
                                              1
                                       I · J = (F 2 − J 2 − I 2 ).
                                              2
   Ez a Lande-féle g-faktorhoz hasonló tényezőt ad.

 • A második tagra közvetlen behelyettesítéssel

                                              L2 − S 2 3(r · S)2
                                     J·G=             +
                                                 r3       r5
   adódik, ahol felhasználtuk, hogy r · L = 0. Most

                                    1             1                         r2
                          (r · S)2 = ri rj σi σj = ri rj (δij + iϵijk σk ) = .
                                    4             4                         4
   Ezt behelyettesítve a −S 2 /r3 tag kiesik, és

                                                        L2
                                             J·G=          .
                                                        r3

 • Így az energiaeltolódás
                                                                                       
                               f (f + 1) − j(j + 1) − i(i + 1)                  1
                        ∆E = k                                 ℓ(ℓ + 1)                     .
                                          2j(j + 1)                             r3

   Hidrogénre specializálva és a korábban kiszámított ⟨1/r3 ⟩ értéket használva a végső eredmény

                                ge gN µB µN 1 f (f + 1) − j(j + 1) − i(i + 1)
                         ∆E =
                                     a30    n3       j(j + 1)(2ℓ + 1)

   ahol visszaállítottuk a Bohr-sugarat.

 • Most az ℓ = 0 esetet tekintsük. Amint láttuk, a nem kontaktusos tagok J·G = L2 /r3 tényezőt kapnak,
   ezért ebben az esetben eltűnnek. Csak a H1,spin kontaktustagja járul hozzá:
                                               8π
                                        ∆E =      k⟨δ(r)(I · S)⟩.
                                                3
   Mivel L = 0 esetén F = I + S,
                                                                               
                                  1                     1                   3
                           I · S = (F 2 − I 2 − S 2 ) =         f (f + 1) −         .
                                  2                     2                   2
   A deltafüggvényt a Darwin-tagnál látott módon értékeljük ki. A végső eredmény szerint a korábban
   ℓ ̸= 0-ra kapott energiaeltolódás ℓ = 0-ra is érvényes.

 • A hiperfinom felhasadás figyelembevételével az energiaszintek Enℓjf alakúak. A |nℓjf mf ⟩ állapotok
   (2f + 1)-szeresen degeneráltak.

 • Például a hidrogén 1s1/2 alapállapota két szintre hasad: f = 0 a valódi alapállapot, f = 1 pedig
   háromszorosan degenerált; ezek az atommag és az elektron antiparallel, illetve parallel spinjének felelnek
   meg. A frekvenciakülönbség körülbelül 1,42 GHz, ami 21 cm-es hullámhossznak felel meg.
221 9. Időfüggetlen perturbációelmélet

 • A 2s1/2 és 2p1/2 állapotok hasonlóan hasadnak; e szinteken belül a hiperfinom felhasadás kisebb, de
   összemérhető a köztük lévő Lamb-eltolódással. A 2p3/2 finomszerkezeti szint szintén felhasad, f = 1
   és f = 2 értékekre.

 • Az elektromos dipólusátmeneteket a

                                        ⟨nℓjf mf |xq |n′ ℓ′ j ′ f ′ m′f ⟩

   mátrixelem vezérli. A Wigner–Eckart-tétel külön alkalmazható a J, F és I által generált forgatásokra,
   amelyek mindegyike alatt xq k = 1 rendű irreducibilis tenzoroperátor; így

                           mf = m′f + q,     |∆f | ≤ 1,       |∆j| ≤ 1,      |∆ℓ| ≤ 1.

   Szokás szerint a paritás további ∆ℓ ̸= 0 feltételt ad.

 • Végül különleges az f ′ = 0 eset, mert ez az egyetlen olyan reprezentáció, amely az 1 spinű
   reprezentációval való szorzáskor nem tartalmazza önmagát: 0 ̸∈ 0 ⊗ 1. Ez azt jelenti, hogy f ′ = 0-ról
   f = 0-ra nem mehet át a rendszer. Ugyanez igaz ℓ-re, de ezt az esetet a paritás már kizárja.

 • Vegyük észre, hogy a hidrogén 21 cm-es vonalát a fenti szabályok tiltják; valójában mágneses dipólusátmenetként
   megy végbe. A felhasadás elég kicsi ahhoz, hogy még a kozmikus mikrohullámú háttérsugárzás is gerjeszthesse.
   A 21 cm-es vonal különösen hasznos, mert hullámhossza túl nagy ahhoz, hogy a por hatékonyan szórja.
   Intenzitásának mérése feltérképezi az atomos hidrogéngáz eloszlását, Doppler-eltolódása információt ad
   a gáz sebességéről, vonalszélessége pedig meghatározza a hőmérsékletet. A Doppler-eltolódás méréseivel
   feltérképezték a Tejútrendszer karjait. (Ezek az állítások atomos hidrogénre vonatkoznak; a molekuláris
   hidrogénnek (H2) egészen más a hiperfinom szerkezete.)

 • Időnként hasznos a gyenge terű Zeeman-effektust és a hiperfinom szerkezetet egyszerre figyelembe venni.
   Tekintsünk egy j = 1/2 finomszerkezeti energiaszintet. Minden mf értékhez két állapot tartozik,
   f = i ± 1/2 értékkel. A két perturbáció nem változtatja mf-et, ezért csak állapotpárokat kevernek.
   Így az energiaszint párokra hasad, amelyek viszonylag könnyen kiszámíthatók; az eredmény a Breit–Rabi-
   formula. A helyzet olyan, mint amikor a Zeeman-effektus a finomszerkezettel hat kölcsön, csak (ℓ, s)
   helyett (j, i) szerepel. Kisebb terekben a csatolt, nagyobb terekben a csatolatlan bázis előnyös.

Megjegyzés. Az általunk vizsgált perturbációk a hidrogén energiaszintjeihez képest rendre ilyen nagyságrendűek:
                                                   1                                          me
            fine structure: α2 ,   Lamb: α3 log      ,    Zeeman: αB,         hyperfine: α2
                                                   α                                          mp

ahol α ∼ 10−2, me /mp ∼ 10−3, a finomszerkezetet pedig O(10) nagyságrendű numerikus tényezők is elnyomják.
A hidrogén energiaszintjei maguk α2 mc2 nagyságrendűek.
    Érdekes megvizsgálni, hogyan módosulnak ezek a skálázások pozitroniumban. A finomszerkezet továbbra is
α2, de a Lamb-eltolódás ugyanebben a rendben jelenik meg, mivel van egy fa-szintű diagram, amelyben az
elektron és a pozitron megsemmisül, majd újra létrejön; hidrogénben a Lamb-eltolódás hurokszintű. A
hiperfinom felhasadás szintén α2 rendű, így mindezeket a hatásokat egyszerre kell figyelembe venni.
222 9. Időfüggetlen perturbációelmélet

9.6     Variációs módszer
Most bevezetjük a variációs módszert.

 • A variációs módszer meglehetősen másfajta közelítő módszer, amelyhez nem kell egy megoldható
   Hamilton-operátor körüli perturbációt végezni. Leginkább alapállapotok energiájának közelítésére használható.

 • Legyen H egy olyan Hamilton-operátor, amelynek legalább néhány kötött állapota van, és energiasajátértékei
   E0 < E1 < E2 < . . .. Ekkor minden normálható |ψ⟩ állapotra

                                                    ⟨ψ|H|ψ⟩
                                                            ≥ E0 .
                                                     ⟨ψ|ψ⟩

      Ennek oka egyszerű: |ψ⟩-nek van komponense a valódi alapállapot irányában, és van arra merőleges
      komponense is. Az első komponens várható energiája E0, a másodiké pedig legalább E0.

 • Ha úgy tudjuk megválasztani |ψ⟩-t, hogy normálás után az alapállapottal vett átfedése 1 − ϵ legyen,
   akkor várható energiája O(ϵ2) korrekciókig megegyezik az alapállapot energiájával.

 • A gyakorlatban |ψ(λ)⟩ próbafüggvények családját használjuk, és a „Rayleigh–Ritz-hányadost” minimalizáljuk:
                                               ⟨ψ(λ)|H|ψ(λ)⟩
                                       F (λ) =
                                                ⟨ψ(λ)|ψ(λ)⟩
      hogy közelítsük az alapállapot energiáját. Ez a család lehet lineáris (vagyis a Hilbert-tér egy részhalmaza)
      vagy nemlineáris (például Gauss-hullámfüggvények halmaza).

 • Kényelmes a normálást Lagrange-szorzókkal kikényszeríteni, az alábbi minimalizálásával:

                              F (λ, β) = ⟨ψ(λ)|H|ψ(λ)⟩ − β(⟨ψ(λ)|ψ(λ)⟩ − 1).

      Ez különösen a lineáris esetben hasznos. Ha
                                                           N
                                                           X −1
                                                   |ψ⟩ =          cn |n⟩
                                                           n=0
      a függvény, amelyet minimalizálni kell,
                                                                                       !
                                             X                             X
                            F ({cn }, β) =         c∗n ⟨n|H|m⟩cm − β           |cn |2 − 1 .
                                             m,n                           n

 • A minimalizálási feltételek ekkor
                        ∂F    X                                       ∂F   X
                          ∗
                            =   ⟨n|H|m⟩cm − βcn = 0,                     =   |cn |2 − 1 = 0.
                        ∂cn   m
                                                                      ∂β   n

      Ez azonban csak azt mondja, hogy |ψ⟩ a Hamilton-operátor variációs altérre korlátozott sajátvektora,
      β sajátértékkel. Az alapállapot energiájára adott felső korlátunk e korlátozott Hamilton-operátor
      legkisebb sajátértéke, ami intuitív.
223 9. Időfüggetlen perturbációelmélet

 • Ez az eljárás rendkívül gyakori alapállapot-energiák numerikus számításakor, mivel a számítógép nem
   tud végtelen dimenziós Hilbert-térrel dolgozni. A variációs elv szerint a Hilbert-tér csonkolásával
   mindig túlbecsüljük az alapállapot energiáját, és a becslések mindig csökkennek, ahogy újabb állapotokat
   adunk hozzá.
                                       (M )
 • Sőt, többet is mondhatunk. Legyen βm az M dimenziójú altérre csonkolt Hamilton-operátor m-edik
   legalacsonyabb energiasajátértéke. A Hylleraas–Undheim-tétel szerint, ha egy N > M dimenziójú altérre
   bővítünk,
                                            (N )    (M )          (N )
                                           βm    ≤ βm    ≤ βN −M +m .

    Különösen, ha a Hilbert-tér véges N dimenziójú, akkor a variációs becslés pontossá válhat:
                                                (M )
                                        Em ≤ βm      ≤ EN −M +m .
    Ez azt jelenti, hogy gerjesztett állapotok energiáira felső és alsó korlátot is kinyerhetünk, bár az
    alapállapot energiájára továbbra is csak felső korlátot kapunk.

 • Gerjesztett állapotokról szimmetriatulajdonságok segítségével is szerezhetünk információt. Például
   páros, egydimenziós potenciál esetén az alapállapot páros, ezért a legelső gerjesztett állapot energiájára
   variációs felső korlátot kapunk páratlan próbafüggvények használatával. Általánosabban bármely adott
   szimmetriájú legalacsonyabb gerjesztett állapot energiája felülről korlátozható.
