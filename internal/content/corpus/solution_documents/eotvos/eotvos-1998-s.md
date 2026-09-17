---
id: solution-document-eotvos-1998-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1998_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [eotvos-1998-curvature-variometer, eotvos-1998-perfume-evaporation, eotvos-1998-solenoid-induction]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/1998_S.pdf."
---

1998. október 16-án rendezte meg az Eötvös Loránd Fizikai Társulat hagyományos ®szi tanulóversenyét, az Eötvös-
versenyt. Ismertetjük a feladatokat, mindegyik feladat helyes megoldását, majd a verseny végeredményét.

   1.   Eötvös Loránd görbületi variométerében egy vékony torziós szálra középen felfüggesztett könny¶ rúd végein
két test helyezkedik el azonos magasságban. (l. az           1. ábrát   .)
   Eötvös megmérte e görbületi variométer torziós lengésidejét (kis kitérések esetén) a Gellért-hegy lábánál, egyszer
úgy, hogy a vízszintes rúd egyensúlyi helyzetében a hegy közepe felé mutatott, másszor úgy, hogy erre mer®leges
egyensúlyi helyzet körül lengett a rúd. Az els® esetben 564,6 se undumnak, a második esetben 572,2 se undumnak
találta a lengésid®t.
   Tegyük fel, hogy a Gellért-hegy gravitá iós hatása egy a m¶szert®l vízszintesen 300 méter távolságra lev®, megfelel®
tömeg¶, pontszer¶ test vonzásával egyenérték¶. Ezek után Eötvös fenti mérési adatait felhasználva be süljük meg, hogy
a Gellért-hegy mekkora szöggel módosítja a mérés helyén a függ®ón irányát!
                                                                                                                 (Radnai Gyula)
   Megoldás. Tekintsük a     2. ábrát    !
   A könny¶ rúd hosszát 2l -lel jelöltük, a rúd végein lév® kis testek tömegét m-mel, a Gellért-hegyet helyettesít®
pontszer¶ test tömegét pedig M -mel. A rúd közepe M -t®l állandó r                 = 300 m távolságra van; az ábra egy olyan
helyzetet mutat, amikor az ábra (vízszintes) síkjában leng® rúd egyik vége r1 , másik vége r2 távolságra van M -t®l.
Felrajzoltuk a kis testekre ható gravitá iós vonzóer®ket is (F1 , ill. F2 ), amelyeket M fejt ki rájuk.
   Newton gravitá iós törvénye szerint

                                                      mM                                mM
                                             F1 = γ        ,      illetve      F2 = γ        .
                                                       r12                               r22

Írjuk fel ezen er®k által a rúdra kifejtett Γ gravitá iós forgatónyomatékot!


                                                  Γ = F1 · l sin α1 − F2 l sin α2 .

Egy-egy szinusz-tétel felhasználásával ez így is írható:
                                                                                                 
                                             F1   F2                                      1     1
                                    Γ=          −           lr sin α = γmM lr sin α           − 3       .
                                             r1   r2                                      r13  r2

Itt α, r1 és r2 változnak a rúd lengése közben. Jó lenne, ha sikerülne Γ-t            supán α függvényeként meghatározni. Ehhez
a zárójelben álló kifejezést át kell alakítanunk:


                                     1    1  r3 − r3  (r2 − r1 )(r22 + r2 r1 + r12 )
                                      3 − 3 = 23 31 =                                .
                                     r1  r2   r1 · r2           (r1 r2 )3

Használjuk ki, hogy l ≪ r! Ekkor


                             r22 + r2 r1 + r12 ≈ 3r2 ,          (r1 r2 )3 ≈ r6 ,   r2 − r1 ≈ 2l cos α.
                                                                                               2
(Ez utóbbi összefüggés például így látható be: A koszinusz-tétel kétszeri alkalmazásával r2                 = l2 + r2 + 2lr cos α,
 2    2   2              2    2
r1 = l + r − 2lr cos α, r2 − r1 = (r2 + r1 )(r2 − r1 ) = 4lr cos α, innen r2 − r1 ≈ 2l cos α.)
   Azt kapjuk tehát, hogy
                                                                 2
                                                1     1           3r   6l
                                                    − 3 ≈ 2l cos α 6 = 4 cos α.
                                                r13  r2           r   r
Helyettesítsük ezt be Γ fenti kifejezésébe:


                                                         6l          mM l2
                                         Γ = γmM lr sin α 4 cos α = γ 2    3 sin 2α.
                                                         r            r r
                mM
Bevezetve a γ       = F0 jelölést
                 r2
                                                                      l2
                                                            Γ = 3F0      sin 2α.
                                                                      r
                                                                                                            π
Mikor lesz a Γ gravitá iós forgatónyomaték zérus? Amikor sin 2α = 0, vagyis α = 0 és α =                      esetén. Egyik az a
                                                                                                            2
helyzet, amikor a rúd éppen M felé mutat, a másik helyzet erre mer®leges. Ha sak a gravitá iós er®k hatnának, akkor
                                                       π
α = 0 a rúd stabilis egyensúlyi helyzete lenne, míg α = esetén a rúd labilis egyensúlyi helyzetben lenne.
                                                       2
   Most azonban a rúdra nem         sak a gravitá iós forgatónyomaték hat, hanem az elfordulás közben meg savarodó
torziós szál által kifejtett visszatérít® forgatónyomaték is. Kis ∆α szögkitérés esetén ez ∆α-val arányosnak tekinthet®;
                              ∗
az arányossági tényez®t D -gal szokás jelölni.
     Ha nem lenne a gravitá iós forgatónyomaték, akkor a torziós inga lengésidejét így lehetne kiszámítani: T =
     p
2π    Θ/D∗ , ahol Θ a rúd közepére vonatkozó tehetetlenségi nyomaték. Milyen taggal egészül ki D∗ , ha gravitá i-
ós forgatónyomaték is fellép?
     Határozzuk meg a kis ∆α-hoz tartozó ∆Γ-t!

                                                        dΓ         l2
                                               ∆Γ ≈        ∆α = 6F0 cos 2α · ∆α.
                                                        dα         r

Ebb®l leolvasható, hogy α = 0 esetén D
                                           ∗
                                               korrek iója 6F0
                                                                 l2
                                                                 r
                                                                    , míg α =
                                                                               π
                                                                               2
                                                                                 esetén −6F0
                                                                                             l2
                                                                                              r
                                                                                                           3. ábra
                                                                                                 lesz, így (         )

                                           s                                     s
                                                    Θ                                   Θ
                                 T1 = 2π                 2       és      T2 = 2π             2 .
                                               D∗ + 6F0 lr                         D − 6F0 lr
                                                                                     ∗


Ezt a T1 és T2 lengésid®t mérte le Eötvös Loránd.
     Hogyan lehet ebb®l kiszámítani a függ®ón elhajlását? Tegyük fel, hogy a függ®ónra  fonálon függ® kis testre 
                                                                            ∗
a Föld mg nagyságú függ®leges irányú er®t, a Gellért-hegy pedig F0 = mg       nagyságú vízszintes irányú er®t fejt ki.
Ekkor az a pi i δ szög, amivel a függ®ón a függ®legest®l eltér, így kapható meg:

                                                                   g∗
                                                              δ=      ,
                                                                   g
vagyis a lengésid®-képletekben F0 rejti a szükséges informá iót. Felírhatjuk, hogy

                                        1     1     12 F0 l2   3 mg ∗ l2     3 g∗
                                           −     =           =            =        .
                                       T12   T22   4π 2 Θr     π 2 2ml2 r   2π 2 r
                            2
(Felhasználtuk, hogy Θ = 2ml .) A keresett δ szög tehát
                                                                                
                                                    g∗  2 r             1    1
                                                 δ=    = π2                − 2       .
                                                    g   3 g            T12  T2
                            m
Behelyettesítve g = 9, 81      , r = 300 m, T1 = 564, 6 s, T2 = 572, 2 s értékeket, kapjuk:
                            s2
                                                  δ = 1, 7 · 10−5 radián = 3, 4′′ .
     Ezzel a feladatot megoldottuk, mégis érdemes a megoldáshoz néhány kiegészít® megjegyzést f¶zni.
                                                                                                  2      ∗
  1. A kapott eredmény birtokában meghatározható a vonzó entrum tömege! Minthogy F0 = γmM/r = mg , ezért
     ∗ 2              11                               3
M = g r /γ = 2, 2 · 10 kg. A Föld átlagos ̺ = 5000 kg/m s¶r¶ségét felhasználva be slést adhatunk a vonzó entrum
térfogatára is: ez 44 millió köbméter lesz, ami egy 219 méter sugarú gömb vagy egy 353 méter élhosszúságú ko ka
térfogata. A Gellért-hegy meglehet®sen szabálytalan alakú, ezért keresett azután Eötvös egy szabályosabb alakú hegyet
az országban. A Szombathely közelében lév® Ság-hegy            sonkakúp alakja nyerte meg tetszését, itt készült az a ma már
híres fénykép, amelyen a mérést végz® Eötvös látható munkatársaival: Tangl Károllyal, Bodola Lajossal és Kövesligethy
Radóval.
      2. Visszatérve a feladat megoldására, a helyes végeredménnyel azonos nagyságrend¶ eredmény adódhat a fentinél
valamivel durvább közelítések esetén is. Sok versenyz® feltételezte mindjárt a megoldás elején, hogy mivel r ≫ l , ezért
az F1 és F2 er®k gyakorlatilag párhuzamosak egymással. Ezzel a feltételezéssel élve a következ® eredmény adódik:
                                                                   
                                                 2r        1    1
                                           δ=π                − 2       = 2, 5 · 10−5 radián.
                                                  g       T12  T2
      Ha nem sak az er®k párhuzamosságát tételezi fel valaki, hanem még azt a kis eltérést is elhanyagolja,
                                                                                                 p          amivel a
mer®leges helyzet¶ torziós inga lengésideje eltér a gravitá ió nélküli esett®l, tehát a T2 = T = 2π
                                                                                                   Θ/D∗ közelítéssel
él, akkor a következ® eredményt kapja:
                                                                       
                                                    2r         1    1
                                           δ = 2π               2 − 2       = 5 · 10−5 radián.
                                                      g       T1   T2
Ezek a megoldások sem rosszak,          sak rosszabb, durvább közelítések, mint amit a helyes megoldásnál kaptunk. A
Versenybizottság  ha nem is teljes pontszámmal, de  értékelte ezeket a megoldásokat is.

   2. Két egyenes, függ®legesen álló, felül nyitott kém s® közül az egyik 20 m, a másik 40 m magas. Keresztmetszetük
                         3                    3
egyforma. Az els®be 1 cm , a másikba 2 cm kölnivizet töltünk. Vajon körülbelül hányszor több id® alatt párolog el
teljesen a kölni a második kém s®b®l, mint az els®b®l?
      Módosul-e a válasz, ha mindkét kém sövet leragasztjuk, és a fed®lapokon supán egy-egy parányi (egyforma) nyílást
hagyunk?
                                                                                                             (Károlyházy Frigyes)
      Megoldás. Hogyan párolog a kölnivíz? Ugyanúgy, mint minden más folyadék. A felszín közelében dinamikus
egyensúly alakul ki a folyadékból kilép® és a folyadékba belép® molekulák között. Az egyes molekulák szempontjából
mindkét folyamat véletlenszer¶. Mindaddig, amíg a g®zben nin s elég molekula ahhoz, hogy ez a telítési g®znyomás
érték beálljon, több molekula lép ki a folyadékból, mint amennyi vissza sapódik oda. Ekkor még a g®z nin s egyensúlyi
állapotban, s¶r¶sége helyr®l helyre változhat. Ha leveg® is van jelen, akkor a g®z és a leveg® keverékében a folyadék
felszíne közelében a legnagyobb a g®z kon entrá iója, attól távolodva fokozatosan                sökken. Ez a kon entrá ió-gradiens
(kon entrá ió-esés) idézi el® a kölnimolekulák diúzióját a leveg®n keresztül. Ennek tanulmányozásával oldhatjuk
meg a feladatot.
      A Négyjegy¶ függvénytáblázatok. . . 124. oldalán szerepel az alábbi összefüggés (Fi k-törvény):

                                                              ∆m       ∆̺
                                                                 = −DA    .
                                                              ∆t       ∆z
   ∆̺
Itt     jelenti a z tengely irányú s¶r¶ség-gradienst a gáztérben: esetünkben a kölnig®z függ®leges s¶r¶ségeloszlásáról
   ∆z
                                                                                        ∆m
van szó. Ez arányos az A keresztmetszeten id®egység alatt átáramló anyag tömegével, a        tömegárammal, esetünk-
                                                                                         ∆t
ben a kölnimolekulák tömegáramával. Az áram mindig a nagyobb kon entrá iójú helyr®l folyik a kisebb kon entrá iójú
                ∆m     ∆̺
hely felé, ezért    és     mindig ellentétes el®jel¶ek. A törvényben éppen azért szerepel a negatív el®jel, hogy a
                 ∆t    ∆z
folyamatra jellemz® D arányossági tényez®  az ún. diúziós állandó  pozitív lehessen.
      Gondoljuk át, hogyan változik a kölnig®z s¶r¶ségeloszlása a függ®leges kém s®ben a betöltés pillanatától kezdve
mindaddig, amíg beáll valamilyen  ha nem is egyensúlyi, de legalább id®ben állandó állapot (               4. ábra).
   4. ábra. Nyitott kém s® esetén a kölnig®z                                          s¶r¶sége    a     magasság függvényében:
a) kezdetben; b) ki sit kés®bb; ) az állandósult állapotban.
      Felül nyitott kém s® esetén a kölni betöltésének pillanatában a kém s® leveg®vel van tele; a kölnig®z s¶r¶sége
zérus. Ki sit kés®bb már lesznek a        s®ben kölnimolekulák, a kölnig®z s¶r¶sége a magassággal rohamosan              sökken,
    sak közvetlenül a folyadék felszínénél éri el az egyensúlyi, telített g®z állapotát lényegében elér® s¶r¶séget. Lassanként
egyre több kölnimolekula lesz a kém s®ben lév® leveg®ben, és el®bb-utóbb beáll egy olyan egyenletes eloszlás, amikor
a s¶r¶ség-gradiens álladó, vagyis a s¶r¶ség a magassággal lineárisan                sökken. Feltételezhetjük, hogy a nyitott kém s®
tetején annyi a kölnig®z s¶r¶sége, mint a szobában, tehát gyakorlatilag mindvégig zérus.
      A   4. ) ábrán   látható állandósult s¶r¶ségeloszlás mindaddig fennmarad, amíg a kém s® alján lév® kölnivíz teljesen
el nem párolog.
      Ezek után hasonlítsuk össze a hosszú (40      m-es) és a rövid (20         m-es) kém s®ben az állandósult s¶r¶ségeloszlásokat
(5. ábra   )!
    5. ábra. Az állandósult s¶r¶ségeloszlások a felül nyitott hosszú és rövid kém s®ben.
                         ∆̺                                                                  ∆m
      Látszik, hogy a       hányados a fele hosszúságú kém s®ben kétszer akkora, tehát itt a    párolgási sebesség is
                         ∆z                                                                  ∆t
kétszerese a másikénak. Mivel a hosszú kém s®be ráadásul kétszer annyi kölnivizet is töltöttünk, ezért jó közelítéssel
négyszer annyi id® alatt               3                                               3
                        párolog el 2 cm kölnivíz a 40 m hosszú kém s®b®l, mint 1 cm kölnivíz a 20 m-esb®l.
      Válaszoljunk még arra a kérdésre, hogy mi történne, ha mindkét kém s® tetejét annyira leragasztanánk, hogy a
fed®lapokon      supán egy-egy parányi (egyforma) nyílás maradna. Módosulna-e az el®z® válasz? Természetesen igen,
hiszen új, az el®z®t®l eltér® s¶r¶ségeloszlás alakulna ki mindkét kém s®ben. Ha ugyanis     sak egy nagyon pi i nyíláson
tud párologni a kölnig®z a kém s®b®l, akkor jó közelítéssel feltételezhetjük, hogy gyakorlatilag az egész kém s®ben
telített lesz a g®z, végig ugyanannyi lesz a s¶r¶sége. A párolgás sebességét a lyuk pi iny keresztmetszete, valamint
a lyuknál kialakuló (nagy) s¶r¶ség-gradiens határozza meg. Ennek értéke azonban már nem függ attól, hogy milyen
hosszú a kém s®. Ebben az esetben tehát         sak az számít, hogy az egyik kém s®b®l kétszer annyi kölnivíznek kell
eltávoznia, mint a másikból, amihez pedig     kétszer annyi id®re van szükség   .
   A feladatot megoldottuk, foglaljuk össze azonban, hogy milyen feltételezésekkel éltünk a megoldás során, mert ezek
érvényességének mértéke határozza meg be sléseink pontosságát. Megoldásunk lényege az volt, hogy a kém sövekben
kialakuló állandósult állapotokat hasonlítottuk össze. Az állandósult állapot kialakulásának, beállásának idejét elha-
nyagoltuk a teljes elpárolgáshoz szükséges id®hoz képest. Mennyire jogos a fenti elhanyagolás? Ez a konkrét adatoktól
függ. Tapasztalat szerint még nyitott kém s® esetén is napokban mérhet® az elpárolgási id®, az állandósult s¶r¶ségel-
oszlás pedig 510 per    alatt beáll a feladatban szerepl® adatok esetén. Mérések szerint a párolgás valóban kb. 2-szer
gyorsabb a rövidebb kém s®nél, mint a hosszabbnál.
   Elhanyagoltuk még a folyadék térfogatát a kém s® térfogatához képest; feltételeztük, hogy a folyamatok ugyanazon
az állandó h®mérsékleten történtek; nem gyeltünk arra, hogy a kölnib®l hamarabb párolog el az alkohol, mint a víz;
feltételeztük a Fi k-törvény (lineáris összefüggés!) érvényességét; elhanyagoltuk a leveg®ben mindig meglév® szennyez®-
dések hatását, amelyek a folyadék felszínén vékony (molekuláris) rétegben lerakódva azon olyan lmet képezhetnek,
ami jelent®sen fékezheti a folyadék párolgását.

   3. Egy szolenoid keresztmetszete d oldalél¶ négyzet, hossza L (L ≫ d). A teker sben folyó egyenáram hatására
mélyen a szolenoid belsejében B0 induk iójú homogén mágneses maz® alakul ki. A teker set függ®legesen helyeztük el.
Közvetlenül a teker s fels® vége felett egy ugyan sak d oldalél¶, négyzet alakú, vízszintes vezet® keret függ l hosszúságú
fonalakon (l ≫ d), a   6. ábrán   látható módon. A keret tömege m, elektromos ellenállása R.
   A szolenoidot hirtelen vízszintesen, jobb felé elrántjuk. Melyik irányban lendül ki és milyen magasra emelkedik fel
az ingaszer¶en felfüggesztett keret?
                                                                                                         (Gnädig Péter)
   Megoldás.
   Gondoljuk át a folyamatot! Az ingaszer¶en felfüggesztett keret mágneses mez®be merül. Ha kimegy alóla a
szolenoid, kimegy a mez® is  ez pedig feszültséget indukál a keretben. A fellép® indukált áramra hat a távozóban
lév® mágneses mez®, ami a józan sejtés szerint maga után rántja a keretet is. Mindezeket a sejtéseket megfelel® zikai
törvényekkel kell még alátámasztanunk (vagy meg áfolnunk), s a kvantitatív törvények alkalmazásával majd arra is
válaszolni tudunk, hogy milyen magasra emelkedik fel a keret.
   A megoldás egyik kul skérdése az, hogy mit állíthatunk arról a mágneses mez®r®l, amibe belemerül a keret. Tudjuk,
hogy a mágneses induk ióvektor nagysága mélyen a teker s belsejében B0 , de milyen a mágneses mez® a szolenoid
végén? Az is elég lenne, ha a uxust meg tudnánk határozni.
   Egy kis gondolatkísérlet segíteni fog. Tudjuk, hogy a uxus mélyen a szolenoid belsejében:         B0 · A = B0 · d2 .
Gondolatban vágjuk itt a szolenoidot vízszintesen ketté! Nem kell a huzalt is elvágnunk,       supán gondoljuk azt, hogy
itt két, azonos keresztmetszet¶ és menetemelkedés¶, azonos árammal átjárt teker s van összetolva. Nyilvánvaló, hogy
mindkét teker s azonos mértékben járul hozzá az itt kialakuló uxushoz, amib®l pedig már következik, hogy a mágneses
                             1
uxus a szolenoid végénél:     B0 d2 .
                             2
   Nem állíthatjuk azt, hogy a mágneses mez® a szolenoid végén is homogén; a B vonalak széthajlanak. Azt azonban
                                                                                                1
                                                                                                  B0 nagyságú.
bizton állíthatjuk, hogy a mágneses induk ióvektor függ®leges komponense a teker s végénél mindenhol
                                                                                                2
                                                                                                       1
  A d élhosszúságú, négyzet alakú keret tehát egy olyan mágneses mez®be merül, amelynek uxusa Φ =       B0 d2 .
                                                                                                       2
Amikor  mondjuk ∆t id® alatt  elrántjuk a szolenoidot, ez a uxus zérusra sökken. Így a keretben indukálódó
feszültség nagysága:
                                                              ∆Φ   B0 d2
                                                  |Uind | =      =       .
                                                              ∆t   2∆t
A ∆t id® alatt megsz¶n® uxus által a keretben indukált áram nagysága:


                                                              1 B0 d2
                                                        I=            .
                                                              R 2∆t
Tételezzük fel, hogy pontosan ekkora áram folyik ∆t id®n keresztül a keretben  addig és       sak addig, amíg változik a
uxus. De hát eközben a keret jobb oldali, d hosszúságú szakaszára (az itt folyó áramra) még er®t fejt ki a mágneses
mez®! Írjuk fel az erre ható er®lökést:


                                                                  B0 1 B0 d2
                                           F · ∆t = BId · ∆t =               d · ∆t.
                                                                  2 R 2∆t
                                   B02 d3
Ez a keretnek mv0 = F ∆t =                lendületet ad. A keret tehát
                                    4R
                                                                    B02 d3
                                                             v0 =
                                                                    4Rm
sebességgel kilendül, és felemelkedik
                                                             v02     B04 d6
                                                        h=       =
                                                             2g    32R2 m2 g
magasságra.
   Már     sak azt kell meghatároznunk, hogy milyen irányban lendül ki a keret. A feladathoz tartozó ábráról leolvasható,
hogy a mágneses induk ióvektor a szolenoid belsejében függ®legesen felfelé irányul. A szolenoid elrántása közben a
keretben olyan irányú áram indukálódik, amelyik (Lenz törvénye alapján) a keret uxusának              sökkenését akadályozni
igyekszik. Ezek szerint az indukált áram a keretben felülr®l nézve az óramutató járásával ellentétes irányú, mivel
az ebb®l származó induk ióvektor mutat felfelé. A keret jobb oldali szakaszán ezek szerint befelé, hátrafelé folyik az
indukált áram. Ez ∆t ideig bemerül egy olyan mágneses mez®be, amelyben a mágneses induk ióvektor függ®leges
komponense felfelé mutat. Az erre ható er® pedig        jobbra   irányul!
   Tehát a keret     jobbra   fog kilendülni. Helyes volt a sejtésünk, az elrántott teker s maga után rántja a keretet.
   Érdemes még kitérnünk arra, hogy valójában a keretben folyó áram nem lesz végig ugyanakkora,               supán az átlag-
értéke az az I , amit kiszámítottunk. Ennek megfelel®en az áramra ható er® sem állandó, viszont az F    · ∆t szorzat
                                                                                                    átl
pontosan megadja azt a vízszintes er®lökést, amit a keret kap.
   Természetesen ahhoz is id®re van szükség, hogy a keret sebessége nulláról v0 -ra n®jön, az eközben megtett utat
elhanyagoltuk a fenti megoldásban. Ez a szokásos elhanyagolás a ballisztikus inga és sok hasonló ütközési folyamat
tárgyalásából ismer®s. Eredményünk tehát most is             sak közelít® érvény¶, pontossága a közelítés jogosságától függ. A
feladat ugyan paraméteresen lett kit¶zve, az elrántás szó utalt azonban arra, hogy a fenti közelítést joggal alkalmaz-
hatjuk.




   A verseny eredménye



   Els® díjat  és vele 6 ezer forintos pénzjutalmat nyertek:
   Sarlós Feren , a JATE zikus hallgatója, aki a bajai III. Béla Gimnáziumban érettségizett mint              Polgár László,
Szkladányi András Hilbert Margit
                        és                tanítványa;
   Végh Dávid        , az ELTE zikus hallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnáziumban érettségizett
mint  Horváth Gábor      tanítványa.

   Második díjat     és vele 5 ezer forintos pénzjutalmat nyertek:
   Rozsonday Gerzson           , a debre eni KLTE Gyakorló Gimnáziumának 12. osztályos tanulója,       Kirs h Éva Szegedi
                                                                                                                      és
Ervin  tanítványa;
   Somogyi Gábor         , a KLTE zikus hallgatója, aki a debre eni Tóth Árpád Gimnáziumban érettségizett mint     Baló
Péter  tanítványa;
   Terpai Tamás, a Fazekas Mihály F®városi Gyakorló Gimnázium 12. osztályos tanulója,              Horváth Gábor     tanítványa.

    Harmadik díjat     és vele 4 ezer forintos pénzjutalmat nyertek:
   Gulyás Nándor, a mez®ková sházai Hunyadi János Gimnázium 12. osztályos tanulója,                   Sallai István Varga
                                                                                                                       és
István tanítványa;
   Heged¶s Ákos, a pé si           iszter i Nagy Lajos Gimnázium 11. osztályos tanulója,     Orovi a Márkné   tanítványa;
   Kormos Márton, az ELTE zikus hallgatója, aki a debre eni KLTE Gyakorló Gimnáziumban érettségizett mint
Szegedi Ervin Farkas József
                és                   tanítványa;
   Máthé András          , a budapesti ELTE Apá zai Csere János Gyakorló Gimnázium 11. osztályos tanulója,                  Flórik
György    tanítványa;
   Sz®ke Szilárd-Zsigmond, a temesvári M¶szaki Egyetem (Traian Vuia Polite hni a) mérnök hallgatója, aki a
temesvári Bartók Béla Lí eumban érettségizett mint           Toró T. Tibor Benedek István
                                                                               és              tanítványa.

   Di séretet   kaptak a verseny 1118. helyezettjei:
   Bálint Imre       , az ELTE zikus hallgatója, aki Szegeden, a JATE Ságvári Endre Gyakorló Gimnáziumban érettsé-
gizett mintHomolya Ern®         tanítványa;
   Császár Balázs        , a BME mérnök-zikus hallgatója, aki a szombathelyi premontrei rendi Szent Norbert Gimnázi-
                       Heigl István Ková s László
umban érettségizett mint                      és                 tanítványa;
   Katona Gergely, a budapesti ELTE Trefort Ágoston Gyakorlóiskola 12. osztályos tanulója,                   Szörényi Zoltán
tanítványa;
   Nagy Kálmán, a budapesti Veres Péter Gimnázium 12. osztályos tanulója,                Varga Mária   tanítványa;
   Pogány Ádám, az ELTE zikus hallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnáziumban érettségizett
mint   Horváth Gábor    tanítványa;
   Rá z Balázs, a budapesti Veres Péter Gimnázium 12. osztályos tanulója,         Varga Mária    tanítványa;
   Tóth Bálint, a Fazekas Mihály F®városi Gyakorló Gimnázium 12. osztályos tanulója,          Horváth Gábor Dvorák
                                                                                                                és
Ce ília   tanítványa;
   Tóth Gyula, a debre eni Tóth Árpád Gimnázium 12. osztályos tanulója,           Ková s Miklós   tanítványa.

   Az ünnepélyes eredményhirdetésre a BME Fizikai Intézetében került sor 1998. november 20-án.
   A megjelent versenyz®ket és tanáraikat a házigazdák nevében         Kertész János   egyetemi tanár üdvözölte, majd a
                                                                                                               Kármán
Versenybizottság elnöke emlékezett meg a 100 évvel ezel®tti versenyr®l s annak nyerteseir®l. Az els® díjat akkor
Tódor     nyerte, akinek   Beke Manó   volt tanára a budapesti Mintagimnáziumban. A második díjas     Gróts Gábor   is a
budapesti m¶egyetemen szerzett mérnöki diplomát, akár sak Kármán Tódor.
   Ezután a feladatok megoldásának diszkussziója következett, amelyhez         Härtlein Károly   mutatott be érdekes kí-
sérleteket. A második feladathoz kap solódó mérést s ennek számítógépes kiértékelését videón tekinthették meg a
jelenlév®k.
   A díjakat az Eötvös Loránd Fizikai Társulat f®titkára:     Nagy Dénes Lajos   és helyettese, a Versenybizottság elnöke
adta át, aki köszönetet mondott a Nemzeti Tankönyvkiadónak és a TypoTeX Könyvkiadónak a felajánlott könyvutal-
ványokért és könyvekért.
   A díjkiosztáson megjelent     Dolinszky Tamás   is, aki 1939-ben nyert díjat a versenyen.

                                                                                                         Radnai Gyula
                                        l                      l

                      l                               l



                                                          m,R
                             d
                                             d




                  L
                                             B0




                                            d

                                                               F1         α1 m
                                            r1
                                                                                        l
                                                     r                              α
    M
                                                          r2
                                                                                                 l
                                                                                        α2
                                                                               F2                    m
             11111111
             00000000
             11111111
             00000000
             11111111
             00000000
             11111111
             00000000
             11111111
             00000000
             11111111
             00000000
             11111111
             00000000                           T1
             00000000
             11111111
             11111111
             00000000
             00000000
             11111111
             11111111
             00000000
             11111111
             00000000
             11111111
             00000000
             11111111
             00000000
               Gellert-
             00000000
             11111111
             00000000
             11111111
             11111111
             00000000
                hegy
             11111111
             00000000
             11111111
             00000000
             11111111
             00000000
             11111111
             00000000
             11111111
             00000000
             00000000
             11111111
             11111111
             00000000
             11111111
             00000000
             11111111
             00000000
             11111111
             00000000
             11111111
             00000000
             11111111
             00000000
             00000000
             11111111                                     T2
             00000000
             11111111
             00000000
             11111111
             11111111
             00000000
z                                   z                                          z
    l                                       l                                       l
                                                                         .
                                                                     .
                                                                         .
                                                                     ...
                                                                         ..
                              .
                              ..                                     .....
                                                                      ...
                               ..                                     ....
                                                                      .
                          .....                                      ... ...
                                                                     .
                      ρ                                            ρ                                         ρ
             ρ                                            ρ                                              ρ
              0                                            0                                             0
        a)                                       b)                                         c)
           z                          z
               l                          l
    .
.
    .
...                                       l/2
    ..
.....                      ...
 ...                       ...
 ....                      ......
 .                          .......
........                   ...
                       ρ
                   ρ                            ρ0 ρ
                   0
