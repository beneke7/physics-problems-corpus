---
id: komal-P5579
source: komal
language: hu
translated: false
problem: komal-P5579
figure_files: [komal-P5579-sol-fig1.gif, komal-P5579-sol-fig2.gif, komal-P5579-sol-fig3.gif, komal-P5579-sol-fig4.gif, komal-P5579-sol-fig5.gif, komal-P5579-sol-fig6.gif, komal-P5579-sol-fig7.gif, komal-P5579-sol-fig8.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Tekintsük a Földet a keringési síkjában a Nap-Föld tengelyre merőleges irányból. A Föld felületének egyik oldaláról a teljes Nap látszik, a másik oldalról nézve a teljes Nap a horizont alatt van. A két részt (a Föld sugarát $R$-rel jelölve) egy a Nap $\Delta\eta$ látószögével egyenlő középponti szöggel jellemezhető, szimmetrikusan elhelyezkedő 
 $d=\Delta\eta\,R$ 
 szélességű sáv (gömböv) választja el egymástól, amelyből a Nap egy része látszik csak. A felszín egy adott pontján addig tart a napfelkelte (napnyugta), amíg az adott pont ezen a sávon áthalad. Ha eltekintünk a pályamenti mozgástól, a forgásból adódó sebesség minden pontban időben állandó, így a napfelkelte ideje akkor a legrövidebb, ha a pont ezen a sávon merőlegesen halad át. Ez akkor van, ha a forgástengely merőleges a Nap-Föld tengelyre, azaz vagy a tavaszi, vagy az őszi nap-éj egyenlőségkor. A $\varphi$ szélességi kör pontjainak a sebessége (a Föld lapultságát figyelmen kívül hagyva) 
 $v=\frac{2\pi R\cos\varphi}{T},$ 
 ahol $T$ a forgás periódusa, azaz egy nap. Mindebből a napfelkelte időtartama 
 $\Delta t=\frac{d}{v}=\frac{\Delta\eta}{2\pi}\frac{1}{\cos\varphi}T$ 
 Adatainkkal ($\Delta\eta=0{,}5^{\circ}=\tfrac{0{,}5}{360}2\pi$, $\varphi=60^{\circ}$) $\Delta t=4$ percet kapunk. 

 Megjegyzés. Abból, hogy a nap-éj egyenlőség idején a földfelszín minden pontja merőlegesen halad át a ,,napfelkelte (napnyugta) sávon", nem következik, hogy ilyenkor a Nap függőlegesen emelkedik a horizont fölé (vagy süllyed az alá). A Nap látszólagos útjának a horizonttal bezárt szögét az határozza meg, hogy földfelszín minden, – az egyenlítőtől különböző – pontjában maga a horizont is forog $\omega \sin \varphi=(360^{\circ}/\mathrm{nap})\sin\varphi$ szögsebességgel. (Ez a szögsebesség a Föld szögsebesség vektorának az adott ponthoz tartozó horizont síkjára merőleges komponense.) 

 Ezzel a feladatban feltett kérdést megválaszoltuk, a továbbiakban a probléma teljesebb leírása szerepel. 

 Ebben a közelítésben (amikor tehát elhanyagoltuk a Föld lapultságát, a keringését a Nap körül, és a légkör hatását) a napfelkelte és napnyugta hossza viszonylag könnyen kiszámítható az év bármely napjára. Elsőként rögzítsük a viszonyítási rendszereket! Legyen az $x$ tengely a Nap-Föld tengely meghosszabbítása a sötét oldalon, az $y$ tengely erre merőleges a keringés síkjában, és a $z$ pedig mindkettőre merőleges! Ebben a rendszerben a ,,napkelte-napnyugta'' sáv a Föld felszínének és az $S_\pm: x=\pm d/2$ síkoknak a metszetei által határolt gömböv. A forgástengely helyzetét adjuk meg gömbi polár koordináták segítségével: a $\theta$ polárszöget (ami a Föld-tengely esetében mindig 23,5$^\circ$ ) mérjük a $z$, a $\psi$ azimutot pedig az $x$ tengelytől! Így a forgástengely irányát megadó $\mathbf{e}(\psi,\theta)$ egységvektor 
 $\mathbf{e}(\psi,\theta)=\begin{pmatrix}\cos\psi\sin\theta\\ \sin\psi\sin\theta\\ \cos\theta\end{pmatrix}.$ 
 Ebből megállapítható az Egyenlítő (és így bármelyik szélességi kör) síkjának az $S_\pm$ síkokkal bezárt $\alpha$ szöge. Ez azonos a kérdéses síkok normálisainak, azaz a forgástengelynek és az $x$ tengelynek a szögével, aminek a koszinusza éppen az $\mathbf{e}(\psi,\theta)$ $x$ komponense: 
 $\cos\alpha=\cos\psi\sin\theta$ 
 A konstrukcióból következően $\alpha$ a Nap iránya és az Egyenlítő síkja által bezárt $-\phi$ szög pótszöge, $\cos\psi\sin\theta=\cos\alpha=-\sin\phi$. (Itt azt a konvenciót követjük, hogy $\phi$ pozitív, ha a Nap az Egyenlítő ,,fölött'', és negatív, ha az ,,alatt'' van. Az ábra egy téli helyzetet mutat, ilyenkor $\alpha<\pi/2$, és $\phi<0$. Ebben a konvencióban az $\alpha-\phi=\pi/2$ összefüggés igaz nyáron is, amikor $\alpha>\pi/2$ tehát formálisan nincs pótszöge.) 

 1. ábra 

 Az 1/a ábra azt a síkmetszetet mutatja, amely merőleges az $S_\pm$ síkokra, a szélességi körökre, és magába foglalja a Föld forgástengelyét (tehát nem a fentiekben definiált $x$-$z$ sík!), míg az 1/b ábra a $\varphi$ szélességi kört tartalmazó, (az 1/a ábra síkjára) merőleges metszet látható. (Az ábra torz különösen az $S_\pm$ síkok $d$ távolságát illetően, ez ugyanis minden más távolságnál lényegesen kisebb, arányos ábrán nem lehetne a két síkot megkülönböztetni.) Ezekről leolvasható, hogy az $S_\pm$ síkok a $\varphi$ szélességhez tartozó síkot két egymástól 
 $d'=\frac{d}{\sin\alpha}$ 
 távolságban futó, a középponttól 
 $m=\frac{M}{\tan\alpha}\pm\frac{d'}{2}\simeq\frac{M}{\tan\alpha}$ 
 távolságra lévő párhuzamos egyenesben metszik, ahol 
 $M=R\sin\varphi.$ 
 Látható az is, hogy a kérdéses szélességi körnek jó esetben két, 
 $s=\frac{d'}{\sin\beta}$ 
 hosszúságú szakasza esik a két sík közé, ahol 
 $\cos\beta=\frac{m}{r}.$ 
 Az eddigieket összegezve tehát a $\varphi$-vel jellemzett szélességi körnek két, egyenként 
 $s=\frac{R\Delta\eta}{\sqrt{\sin^2{\alpha}-{\tan}^2\varphi\cos^2\alpha}}$ 
 hosszúságú darabja (íve) esik az $S_\pm$ síkok közé, ezek felelnek meg a napfelkeltének és a napnyugtának. A szélességi kör egyes pontjai ezeken 
 $\Delta t=\frac{s}{v}=\frac{T\Delta\eta}{2\pi\cos\varphi\sqrt{\sin^2\alpha-\tan^2\varphi\cos^2\alpha}}=
\frac{T\Delta\eta}{2\pi}\frac{1}{\sqrt{\cos^2\varphi-\sin^2\theta\cos^2\psi}}=\frac{T\Delta\eta}{2\pi}\frac{1}{\sqrt{\cos^2\varphi-\sin^2\phi}}$ 
 idő alatt haladnak végig. 

 Az általunk felvett $(x,y,z)$ koordináta-rendszer egy év periódussal forog a $z$ tengely körül, ennek megfelelően a $\psi$ ,,visszafelé'' forog, egy év alatt összesen $-2\pi$-t változik. Ha pl. $\delta$-val jelöljük a Föld pályáján való előrehaladásának a szögét a nyári napfordulótól mérve, akkor $\psi=\pi-\delta$. Így a téli napforduló idején $0$, a tavaszi és őszi nap-éj egyenlőségkor pedig $\pm\pi/2$ értékű. Ez utóbbiak adják a napkelte ill. napnyugta hosszának a szélsőérték helyeit. (Az ábra egy téli helyzetet mutat.) Látható, a kifejezésünk csak addig értelmes, amíg 
 $\left\vert\cos\varphi\right\vert>\left\vert\sin\theta\cos\psi\right\vert.$ 
 Ennek nyilvánvaló oka, hogy a sarkkörön ($\varphi=\pi/2-\theta$) túl az év bizonyos részeiben nem megy le, illetve nem kel fel a Nap. 

 Megjegyzés. Képletünk megbízhatatlanná válik, ha 
 $\left\vert\cos\varphi\right\vert\gtrapprox\left\vert\sin\theta\cos\psi\right\vert.$ 
 Ha ugyanis az adott szélességi kör túl kicsiny szög alatt metszi az $S_\pm$ síkokat, a kettő közötti szakasz hosszának a kiszámításához alkalmazott közelítésünk (az ív helyettesítése egy egyenessel) nem megengedhető. Ennek legszembeötlőbb példája, amikor 
 $m-\frac{d'}{2}<r<m+\frac{d'}{2}.$ 
 Ilyenkor a napfelkelte és a napnyugta összeér, nem megengedhető a $d'$ elhanyagolása az $m$ mellett, és a pontos ívhosszal kellene számolni. A számításaink során a $\varphi$ változásával nem foglalkoztunk. Ez a változás a pólusokhoz nem túl közel egy napfelkelte alatt nagyságrendileg akkora pontatlanságot visz be az eredménybe, mint a ,,valódi nap'' (a Nap két delelése közti idő) és a forgás periódusa közötti különbség elhanyagolása. Végül megjegyezzük, a sarkok közvetlen közelében a napkelte és napnyugta időtartamát már jelentős részben befolyásolja a $\psi$ változási üteme: azt, hogy a nap-éj egyenlőség idején egy ilyen pont mennyi ideig van a napkelte-napnyugta sávban, attól is függ, hogy maga a pólus mennyi idő alatt halad át ezen a sávon. 
 Mint azt fentebb már említettük, a Nap emelkedésének az $\varepsilon$ szögét a horizont forgása határozza meg: a napfelkelte $\Delta t$ időtartama alatt a Nap $\Delta\eta$ szöget emelkedik, a horizont pedig $\Delta t\omega\sin\varphi$ szöggel elfordul. Ebből következően 
 $\varepsilon=\arctan\left(\frac{\Delta\eta}{\Delta t\omega\sin\varphi}\right)=\arctan\left(\frac{\sqrt{\cos^2\varphi-\sin^2\theta\cos^2\psi}}{\sin\varphi}\right)=\arctan\left(\frac{\sqrt{\cos^2\varphi-\sin^2\phi}}{\sin\varphi}\right)=\arccos\left(\frac{\sin\varphi}{\cos\phi}\right).$ 
 Néhány egyszerű térgeometriai megfontolás segítségével a napkelte helye (iránya) is meghatározható. Ehhez tekintsük a vizsgált ponthoz tartozó horizontális síkot! 

 2. ábra 

 A 2/a ábrán (ami ugyanazt a nézetet mutatja, mint az 1/a ábra , ezért az ott szereplő mennyiségek itt nincsenek újra jelölve), $P$ a vizsgált pont pozíciója akkor, amikor a napfelkelte éppen a felénél tart, és $E$ az a pont, ahol a Föld forgástengelye a $P$ horizontális síkját döfi. Mivel az $OPE\sphericalangle$ szög derékszög, $\overline{OE}=f=R/\sin\varphi$. Az $E$ pontból a Nap felé irányuló egyenes benne fekszik a $P$ horizontális síkjában, és a $P$-n átmenő, a Nap irányára merőleges síkot $K$-ban döfi. $E$ és $K$ az ábra síkjában van, de $P$ $h=\sqrt{r^2-m^2}$ távolságra kiemelkedik abból. A 2/b ábra a Nap felől nézve mutatja a helyzetet, ezen az $E$ és $K$ pontok fedésben vannak. Definíció szerint $P$-től $E$ északra van, így az ábrán bejelölt (de nem az ábra síkjába illeszkedő) $KEP\sphericalangle=\vartheta$ szög a napfelkelte pozícióját adja a déli iránytól mérve. Mivel 
 $\overline{EP}=k=R\,\cot\varphi\,,\qquad{\textrm{és}}\qquad\overline{EK}=l=f\cos\alpha=R\frac{\cos\psi\sin\theta}{\sin\varphi},$ 
 $\vartheta=\arccos\left(\frac{l}{k}\right)=\arccos\left(\frac{\sin\theta\cos\psi}{\cos\varphi}\right)=\arccos\left(-\frac{\sin\phi}{\cos\varphi}\right).$ 

**II. megoldás.**
 A Nap napi mozgása során 24 óra alatt tesz meg egy teljes kört a látszólagos pályáján, tehát 4 percenként egy fokot halad rajta. Ebből elhamarkodottan azt a téves következtetést vonhatnánk le, hogy a fél fokos emelkedéshez 2 percre van szükség. Azonban a napéjegyenlőségeket kivéve a látszólagos pálya nem egy főkör , (azaz a körpálya középpontja nem a Föld középpontja, hanem a tengely valamelyik pontja), így a Nap az égbolton (a napéjegyenlőségeket kivéve) ennél kisebb szögsebességgel mozog. Ezen kívül a Nap csak az Egyenlítőn kel fel és nyugszik le a horizontra merőlegesen (ott egész évben), máshol viszont (az évszaktól és a földrajzi helytől függően más-más) laposabb szögben. Mindkét hatás befolyásolja a napkelte és napnyugta időtartamát. 

 A Nap éves mozgása során látszólagosan az ekliptikán mozog a csillagokhoz képest, így az egyenlítő síkjához képesti szöge az év során folyamatosan változik $\pm\phi_0$ szélsőértékek között, ahol $\phi_0=23{,}4^\circ$, a Föld tengelyferdesége. Ha a Föld-pálya kicsiny excentricitásával nem foglalkozunk, akkor a szög változása első közelítésben 
 $(1)$ $\phi(d)=\phi_0\cos\delta,$ 
 ahol $\delta=\tfrac{d}{365,24\,\mathrm{nap}}2\pi$, és $d$ a napok száma a nyári napfordulótól számítva ( 3. ábra ). 

 3. ábra 

 Megjegyzés. Ez a közelítés azt se veszi figyelembe, hogy a Nap az ekliptikán mozog (a körpálya közelítést használva) egyenletes sebességgel, de ezt levetítve az egyenlítőre már nem lesz egyenletes a mozgása. (Ez okozza az időegyenlet esetében is a féléves periódusú tagot, lásd a P. 3118. feladat megoldását a KöMaL 1999. áprilisi számában: http://db.komal.hu/KomalHU/felhivatkoz.phtml?id=42077 
 Pontosabb eredményt kapunk a következőképpen: Vegyük fel a koordináta-rendszert úgy, hogy a $z_0$ tengelye merőleges legyen az ekliptika síkjára, $x_0$ tengelye pedig a tavaszpont felé (és így $y_0$ tengelye a nyári napforduló irányába) mutasson. Ekkor a Földtől a Nap irányába mutató $\boldsymbol{n_0}$ egységvektor, valamint a Föld tengelyének $\boldsymbol{t}$ irányvektora: 
 $$\begin{align*}
\boldsymbol{n_0} &=(\sin\delta,\,-\cos\delta,\,0),\\
\boldsymbol{t} &=(0,\,-\sin\phi_0,\,\cos\phi_0).
\end{align*}$$
 A Nap irányvektora és az egyenlítő síkja által bezárt $\phi$ szög a Nap irányvektora és a Föld tengelye által bezárt szög pótszöge, így 
 $$\begin{align*}
\sin\phi &=\boldsymbol{n_0t},\\
\phi &=\arcsin(\sin\phi_0\cos\delta).
\end{align*}$$
 A két számítás között a napfordulókkor és a napéjegyenlőségekkor nincs eltérés, máskor legfeljebb $0{,}2^\circ$. A feladatunk megoldása szempontjából az (1) közelítés is elég (sőt már az is, hogy $\phi=\phi_0$ a nyári napfordulókor, majd folyamatosan csökken, az őszi napéjegyenlőség idején $\phi=0$, a téli napfordulókor $\phi=-\phi_0$, és így tovább). 

 Ezután meghatározhatjuk, hogy a Nap adott $\phi$ szög esetén (a deleléshez képest) mikor (és hol) kel fel, illetve nyugszik le. (Az időpont levezetése megtalálható az előbbi megjegyzésben említett P. 3118. feladat megoldásában is.) 
 Most vegyük fel a koordináta-rendszert úgy, hogy a $z$ tengely a Föld forgástengelyével legyen párhuzamos, az $y$ tengely pedig erre merőlegesen, a déli irányba mutasson (azaz a Nap az $yz$ síkban legyen). Ekkor a Föld felszínének egy $\varphi$ szélességű pontja felé mutató egységvektor: 
 $\boldsymbol{r}=(-\cos\varphi\sin\tau,\,\cos\varphi\cos\tau,\,\sin\varphi),$ 
 ahol $\tau=\tfrac{t}{24^\mathrm{h}}2\pi$ és $t$ a deleléstől számított idő órákban, a Nap irányvektora pedig 
 $(2)$ $\boldsymbol{n}=(0,\,\cos\phi,\,\sin\phi).$ 
 Napkelte vagy napnyugta akkor van, amikor a Nap a horizonton látszik, azaz iránya merőleges az adott hely irányába (a zenit felé) mutató $\boldsymbol{r}_\mathrm{h}=\boldsymbol{r}(\tau_\mathrm{h})$ egységvektorra: 
$$\begin{align*}
\boldsymbol{r}_\mathrm{h}\boldsymbol{n} &=0,\\
\cos\varphi\cos\tau_\mathrm{h}\cos\phi+\sin\varphi\sin\phi &=0,\\
\cos\tau_\mathrm{h} &=-\tan\varphi\tan\phi.\tag{3}
\end{align*}$$
 Ez a kifejezés nem mindig ad megoldást $\tau_\mathrm{h}$-ra, hiszen (a sarkok közelében) lehet, hogy a Nap nem is kel fel, vagy le sem nyugszik az adott napon. Amennyiben van megoldása, akkor 
 $t_{1,2}=\mp\tfrac{24^\mathrm{h}}{2\pi}\arccos(-\tan\varphi\tan\phi)$ 
 adja meg a Nap keltének, illetve nyugtának időpontját a deleléshez viszonyítva. 

 Megjegyzés. A napkelte és napnyugta tényleges időpontját a delelés időpontja határozza meg. Ez utóbbi egyrészt függ a választott időzónától és az adott hely és az időzóna középvonala közötti szögkülönbségtől, másrészt a fentebb említett P. 3118. feladatban is vizsgált időegyenlettől (amely körülbelül $\pm15$ perc ingadozást okoz). Az időzónától való eltérés Budapesten (E19$^\circ$ és CET időzóna) $+4^\circ$, ami 16 perc ,,sietést'' okoz, míg Helsinkiben (E25$^\circ$ és EET időzóna) $-5^\circ$, ami 20 perc ,,késést'' eredményez. A két hatás miatt Budapesten a delelés időpontja a téli időszámítás idején $11^\mathrm{h}\,28'$ és $11^\mathrm{h}\,58'$ között, a nyári időszámítás idején pedig $12^\mathrm{h}\,28'$ és $12^\mathrm{h}\,50'$ között, míg Helsinkiben a téli időszámítás idején $12^\mathrm{h}\,03'$ és $12^\mathrm{h}\,34'$ között, a nyári időszámítás idején pedig $13^\mathrm{h}\,04$ és $13^\mathrm{h}\,24'$ között változik. 

 Bár a feladat nem kérdezi, érdemes meghatároznunk, hogy hol kel fel és hol nyugszik le a Nap, melyik égtáj irányába? Naivan azt gondolhatnánk, hogy a déli irányhoz képest $\mp\tau_\mathrm{h}$ szögre, de ez nem így van! A $\tau$ szöget a Nap (napi) pályája mentén, az egyenlítő síkjával párhuzamos körön mérjük, az égtájakat pedig a horizont síkjában. A két szögbeosztás (az időegyenlet levezetésénél láthatóval megegyezően most is) csak a $0^\circ$, $\pm90^\circ$ és $180^\circ$ szögeknél egyezik meg. 
 A megfigyelő helye felé mutató egységvektor napkeltekor, illetve napnyugtakor 
 $\boldsymbol{r}_\mathrm{h}=(\pm\cos\varphi\sin\tau_\mathrm{h},\,-\cos\varphi\cos\tau_\mathrm{h},\,\sin\varphi).$ 
 Napkeltekor, illetve napnyugtakor a horizonton a déli irányba mutató vektor erre merőleges, mégpedig úgy, hogy az $\boldsymbol{r}_\mathrm{h}$ vektort a $\tau_\mathrm{h}$ óraszögű síkban forgatjuk el déli irányba $90^\circ$-kal: 
 $\boldsymbol{d}_\mathrm{h}=(\pm\sin\varphi\sin\tau_\mathrm{h},\,-\sin\varphi\cos\tau_\mathrm{h},\,-\cos\varphi).$ 
 A felkelő vagy lenyugvó Nap $\boldsymbol{n}$ irányvektora [(2)] ekkor szintén épp a horizont egy-egy pontjára mutat. A napkelte és napnyugta helyéhez éppen a $\boldsymbol{d}_\mathrm{h}$ és $\boldsymbol{n}$ vektorok által bezárt $\vartheta$ szöget keressük. A szög koszinusza a skalárszorzat alapján, majd behelyettesítve (3)-at és rendezve: 
 $(4)$ $\cos\vartheta=\boldsymbol{d}_\mathrm{h}\boldsymbol{n}=-\sin\varphi\cos\tau_\mathrm{h}\cos\phi-\cos\varphi\sin\phi=-\frac{\sin\phi}{\cos\varphi}.$ 
 Ha a (3) és (4) kifejezések alapján $\vartheta$-t és $\tau_\mathrm{h}$-t $\phi$ (1)-es kifejezését felhasználva $d$ függvényében ábrázoljuk (a 4. ábrán Budapesten), akkor láthatjuk, hogy $\vartheta$ nagyobb amplitúdóval (Budapesten $36^\circ$, Helsinkiben $52{,}6^\circ$) változik a keleti és nyugati irányt jelentő $+90^\circ$ szög körül, mint $\tau_\mathrm{h}$ (Budapesten $28{,}2^\circ$, Helsinkiben $48{,}5^\circ$, ami a napkelte, illetve napnyugta 1 óra 53 perces, illetve 3 óra 14 perces éves ingadozásnak felel meg a napéjegyenlőség idején tapasztalható deleléshez viszonyított 6 órás eltérés körül). 

 4. ábra 

 Ezután térjünk rá a feladatban megfogalmazott kérdésre: a napkelte (és napnyugta) időtartamára! A napkelte és napnyugta időpontjának meghatározásakor azt kerestük, hogy mikor merőleges a Föld középpontjától a megfigyelőhöz húzott vektor a Nap felé mutató vektorral: ekkor a két vektor skalárszorzatának nullát kellett adnia. 
 Ehhez hasonlóan, a két vektor skalárszorzatát felírva kiszámíthatjuk egy kicsiny $\Delta t$ időponttal a napkelte után (vagy a napnyugta előtt) a Nap $\Delta\eta$ magasságát a horizont felett. Mivel ez a szög a Nap zenittől mért távolságának pótszöge: 
 $\sin\Delta\eta=\cos(90^\circ-\Delta\eta)=\boldsymbol{r}(\tau_\mathrm{h}-\Delta\tau)\boldsymbol{n},$ 
 ahol $\Delta\tau=\tfrac{\Delta t}{24^\mathrm{h}}2\pi$. Behelyettesítve, a zárójeles kifejezést felbontva, felhasználva, hogy kis $\Delta\eta$ és $\Delta\tau$ szögekre $\sin\Delta\eta\approx\Delta\eta$, $\sin\Delta\tau\approx\Delta\tau$ és $\cos\Delta\tau\approx 1$: 
$$\begin{align*}
\Delta\eta\approx\sin\Delta\eta&=\cos\varphi\cos(\tau_\mathrm{h}-\Delta\tau)\cos\phi+\sin\varphi\sin\phi=\\
&=\cos\varphi\cos\phi(\cos\tau_\mathrm{h}+\sin\tau_\mathrm{h}\,\Delta\tau)+\sin\varphi\sin\phi=\\
&=-\cos\varphi\cos\phi\tan\varphi\tan\phi+\cos\varphi\cos\phi\sin\tau_\mathrm{h}\,\Delta\tau+\sin\varphi\sin\phi=\\
&=\cos\varphi\cos\phi\sin\tau_\mathrm{h}\,\Delta\tau.
\end{align*}$$
 Ha $\tau_\mathrm{h}$-t (3)-ból kifejezzük és behelyettesítjük, majd a kifejezést tovább alakítjuk: 
 $(5)$ $\Delta\eta=\sqrt{\cos(\varphi+\phi)\cos(\varphi-\phi)}\Delta\tau.$ 
 A napkelte és napnyugta $\Delta t$ időtartamának meghatározása: 
$$\begin{align*}
\Delta\eta &=0{,}5^\circ=\frac{2\pi}{360^\circ}0{,}5^\circ=\frac{\pi}{360},\\
\Delta\tau &=\frac{\Delta\eta}{\sqrt{\cos(\varphi+\phi)\cos(\varphi-\phi)}}=\frac{\pi}{360}\frac{1}{\sqrt{\cos(\varphi+\phi)\cos(\varphi-\phi)}},\\
\Delta t &=\frac{24^\mathrm{h}}{2\pi}\Delta\tau=\frac{720'}{\pi}\Delta\tau=\frac{2'}{\sqrt{\cos(\varphi+\phi)\cos(\varphi-\phi)}}.\tag{6}
\end{align*}$$
 Látható, hogy az eredmény a földrajzi helytől ($\varphi$) és az évszaktól ($\phi$) függ. Az évszaktól való függés könnyebben látható, ha a (6) nevezőjében lévő kifejezést átalakítjuk: 
 $\sqrt{\cos(\varphi+\phi)\cos(\varphi-\phi)}=\sqrt{\cos^2\phi-\sin^2\varphi}.$ 
 Rögzített $\varphi$ esetén $\phi=0$ esetén lesz a nevező maximális. Ez (talán meglepő módon) a tavaszi és az őszi napéjegyenlőségkor következik be, tehát ilyenkor lesz a napkelték és napnyugták időpontja mindenhol a legrövidebb : 
 $\Delta t_\textrm{napéjegyenlőség}=\frac{2'}{\cos\varphi}.$ 
 Tehát a feladatunk kérdésére választ adva Helsinkiben ($\varphi=60^\circ$) a leggyorsabb napkelte (és napnyugta) időtartama a tavaszi és őszi napéjegyenlőség idején: 
 $\Delta t_\mathrm{H, min}=\frac{2'}{\cos 60^\circ}=4'.$ 
 A leghosszabb időtartamokat mindenhol a nyári és téli napfordulókor figyelhetjük meg, amikor $\phi=\pm\phi_0$ ( 3. ábra ). 
 Áttérve a földrajzi helytől való függésre: az Egyenlítőnél $\varphi=0^\circ$, így a (6) kifejezés 
 $\Delta t_\mathrm{E}=\frac{2'}{\cos\phi}$ 
 alakra egyszerűsödik. $-\phi_0\leq\phi\leq\phi_0$ alapján az időtartam $2'$ és $2'\,11''$ között lehet, az év során tehát alig változik. 
 Budapesten ($\varphi=47{,}5^\circ$) az időtartam hosszabb, és az év során már jelentősebben változik: $2'\,58''$ (tavaszi és őszi napéjegyenlőség) és $3'\,40''$ (nyári és téli napforduló) között. 
 Helsinkiben ($\varphi=60^\circ$) a minimális érték, ahogy láttuk $4'$, a maximális pedig $6'\,38''$ (,,kicsit több, mint hat és fél perc'', de nem csak karácsonykor, hanem Szent Iván napján is) ( 5. ábra ). 

 5. ábra 

 Tovább haladva észak felé, Luleåban ($\varphi=65^\circ\,30'$) már $4'\,49''$ és $16'\,45''$ között változik az időtartam (a sarkkörökhöz közeledve azonban a közelítéseink – a látszólagos pálya egyenes szakasszal való közelítése – egyre kevésbé jogosak). Láthatjuk, hogy $\varphi\pm\phi>90^\circ$ (vagy $\varphi\mp\phi<-90^\circ$) esetén a (6) kifejezés nem ad eredményt: az északi sarkkörön túl nyáron egy ideig nem megy le, télen pedig nem kel fel a Nap (a déli sarkkörön túl pedig fordítva). 

 Végül – bár szintén nem része a feladatnak – vizsgáljuk meg a Nap pályájának meredekségét a horizontnál! Az (5) kifejezés megadja, hogy mekkora $\Delta\eta$ szöggel emelkedik a Nap a horizont fölé, miközben a pályáján egy (kicsiny) $\Delta\tau$ szöggel elfordul. Ahogy a bevezetőben említettük, a Nap napi mozgása során (általában) nem egy főkörön, hanem egy kisebb $\cos\phi$ sugarú körön mozog, emiatt az égbolton az elmozdulása eközben csak $\Delta\tau\cos\phi$ lesz. Ez alapján a Nap pályájának horizonttal bezárt $\varepsilon$ szöge (érdemes áttérni a szög koszinuszára, mert az könnyebben értelmezhető eredményt ad): 
 $$\begin{align*}
\sin\varepsilon &=\frac{\Delta\eta}{\Delta\tau\cos\phi}=\frac{\sqrt{\cos(\varphi+\phi)\cos(\varphi-\phi)}}{\cos\phi},\\
\cos\varepsilon &=\sqrt{1-\sin^2\varepsilon}=\frac{\sin\varphi}{\cos\phi}.\tag{7}
\end{align*}$$
 Az Egyenlítőn ($\varphi=0^\circ$) a Nap pályája egész évben merőlegesen metszi a horizontot ($\varepsilon=90^\circ$). Minden más helyen a Nap a tavaszi és őszi napéjegyenlőség idején (amikor $\phi=0^\circ$) emelkedik a legmeredekebben, $90^\circ-\varphi$ szögben (Budapesten ez $\varepsilon_\mathrm{max}=90^\circ-47{,}5^\circ=42{,}5^\circ$, Helsinkiben pedig $\varepsilon_\mathrm{max}=90^\circ-60^\circ=30^\circ$), míg a nyári és téli napforduló idején a leglaposabb (Budapesten $\varepsilon_\mathrm{min}=36{,}5^\circ$-os, Helsinkiben $\varepsilon_\mathrm{min}=19{,}3^\circ$-os) szögben ( 6. ábra ). 
 6. ábra 

 Megjegyzések. 1. A téli lapos emelkedést, amikor egész nap nem megy magasra a Nap, ,,ösztönösen'' érezni lehet, de a nyári eredmény először meglepő lehet, hiszen olyankor emelkedik a Nap a legmagasabbra. (A korábbi, a napkelte és napnyugta időtartamára kapott eredmény után persze már sejteni lehetett, hogy a meredekségnek nem nyáron, hanem tavasszal és ősszel van maximuma.) Szemléletesen mutatja a nyári lapos emelkedést, hogy például az északi sarkkörön a nyári napfordulókor a nap (északon) csak érinti a horizontot, tehát $\varepsilon=0^\circ$. 

 2. A (3), (4) és (7) kifejezések összevetéséből láthatjuk, hogy 
 $\cos\tau_\mathrm{h}=\cos\vartheta\cos\varepsilon,$ 
 amely igazolja, hogy a 2. ábrán megfigyelt $\left|\vartheta-90^\circ\right|\geq\left|\tau_\mathrm{h}-90^\circ\right|$ egyenlőtlenség általánosságban is teljesül. 

**III. megoldás.**
 Az II. megoldásban vektorokkal dolgoztunk. Most használjunk gömbi geometriát ! 

 Bevezetés. A gömbi geometriában egy egységsugarú gömb felületén futó főkörök a síkgeometria egyeneseinek megfelelői. Egy főkör két pontját összekötő $\pi$-nél nem hosszabb ívet nevezzük gömbi szakasznak. Három, nem egy főkörön elhelyezkedő pont meghatároz egy gömbháromszöget: a pontokat összekötő szakaszok a gömb felületét két tartományra osztják, ezek közül a kisebb területű a gömbháromszög. A gömbháromszög $a$, $b$ és $c$ oldalai a csúcsokat összekötő gömbi szakaszok, melyek hossza a főkörívekhez tartozó középponti szögek. A gömbháromszög $\alpha$, $\beta$ és $\gamma$ szögei a csúcsokban találkozó főkörök csúcsbeli érintő félegyenesei által bezárt szögek (amelyek megegyeznek a csúcsban találkozó főkörívekre fektetett síkok hajlásszögével). 
 A gömbháromszög oldalaira és szögeire a síkbeli háromszöghöz hasonlóan összefüggések írhatók fel. Ezek közül használni fogjuk a gömbi szinusztételt: 
 $\frac{\sin\alpha}{\sin\beta}=\frac{\sin a}{\sin b},$ 
 az oldalakra vonatkozó gömbi koszinusztételt: 
 $\cos c=\cos a\cos b+\sin a\sin b\cos\gamma,$ 
 valamint a gömbi Pitagorasz-tételt (amely az utóbbi speciális esete, ha $\gamma=90^\circ$): 
 $\cos c=\cos a\cos b.$ 

 7. ábra 

 A 7. ábrán egy olyan gömbháromszöget rajzoltunk fel, amelyet egy a $\varphi$ szélességi körön lévő helyről látunk észak felé nézve. A háromszög $P$ csúcsa a Sarkcsillag (Polaris), $N$ csúcsa a horizont északi pontja, $H$ csúcsa pedig a horizontnak az a pontja, ahol a Nap felkel. A gömbháromszög oldalai az (egységsugarú) gömb főkörívei, hosszukat a hozzájuk tartozó középponti szögek adják meg. Eszerint 
$$\begin{align*}
 \overline{NP} &=\varphi,\,\textrm{a Sarkcsillag magassága a horizont felett},\\
 \overline{PH} &=90^\circ-\phi,\,\textrm{ahol }\phi\textrm{ a Nap egyenlítővel bezárt szöge (1)},\\
 \overline{NH} &=180^\circ-\vartheta,\,\textrm{ahol }\vartheta\textrm{ a Napkelte keresett helye a déli iránytól mérve}.
\end{align*}$$
 A gömbháromszög szögei: 
$$\begin{align*}
 \measuredangle{PNH} &=90^\circ,\,\textrm{mert az }\overline{NP}\textrm{ szakasz rajta van a zeniten átmenő főkörön},\\
 \measuredangle{NPH} &=180^\circ-\tau_\mathrm{h},\,\textrm{ahol }\tau_\mathrm{h}\textrm{ a napkeltéhez tartozó keresett óraszög},\\
 \measuredangle{NHP} &=90^\circ-\varepsilon,\,\textrm{ahol }\varepsilon\textrm{ a felkelő Nap pályájának horizonttal bezárt szöge}.
\end{align*}$$
 A $H$ ponton átmenő görbe (általában nem főkör) a nap pályája, amelynek $H$-beli érintője merőleges a $\overline{PH}$ gömbi szakaszra (hiszen napi mozgása során a Nap a Sarkcsillag körüli körpályán mozog). 

 Az előkészületek után már nagyon gyorsan megkapjuk a II. megoldásban is levezetett összefüggéseket. 

 1. Írjuk fel a gömbi szinusz-tételt: 
 $\frac{\sin(90^\circ-\varepsilon)}{\sin 90^\circ}=\frac{\sin\varphi}{\sin(90^\circ-\phi)},$ 
 amiből a felkelő (és lenyugvó) Nap pályájának horizonttal bezárt szögére a 
 $\cos\varepsilon=\frac{\sin\varphi}{\cos\phi}$ 
 összefüggés adódik, a (7) kifejezéssel összhangban. 

 8. ábra 

 Miközben a Nap $\Delta\eta=0{,}5^\circ$ szöget emelkedik, a $2\pi\cos\phi$ kerületű pályáján $\Delta\tau\cos\phi$ szöget halad. Így a 8. ábrán látható kicsiny síkháromszögre: 
 $\sin\varepsilon=\frac{\Delta\eta}{\Delta\tau\cos\phi},$ 
 amelyből ($\cos\varepsilon$ előbbi kifejezését is felhasználva) már megkapható a napkelte (és napnyugta) feladatban kérdezett $\Delta t$ időtartama: 
$$\begin{align*}
 \Delta t &=\frac{1440'}{360^\circ}\Delta\tau=\frac{1440'}{360^\circ}\,\frac{0{,}5^\circ}{\cos\phi\sin\varepsilon}=\frac{2'}{\cos\phi\sqrt{1-\cos^2\varepsilon}}=\\
 &=\frac{2'}{\sqrt{\cos^2\phi-\sin^2\varphi}}=\frac{2'}{\sqrt{\cos(\varphi+\phi)\cos(\varphi-\phi)}}.
\end{align*}$$
 a (6) kifejezéssel megegyezően. 

 2. A gömbi Pitagorasz-tételt szerint: 
 $\cos(90^\circ-\phi)=\cos\varphi\cos(180^\circ-\vartheta),$ 
 amiből azonnal 
 $\cos\vartheta=-\frac{\sin\phi}{\cos\varphi}$ 
 adódik, a (4) összefüggéssel összhangban. 

 3. Az oldalakra vonatkozó gömbi koszinusztétel alapján: 
 $\cos(180^\circ-\vartheta)=\cos\varphi\cos(90^\circ-\phi)+\sin\varphi\sin(90^\circ-\phi)\cos(180^\circ-\tau_\mathrm{h}),$ 
 amiből az előbbi eredményt is felhasználva 
 $\cos\tau_\mathrm{h}=\frac{\cos\vartheta+\cos\varphi\sin\phi}{\sin\varphi\cos\phi}=\frac{-\frac{\sin\phi}{\cos\varphi}+\cos\varphi\sin\phi}{\sin\varphi\cos\phi}=-\tan\varphi\tan\phi,$ 
 a (3) kifejezéssel megegyezően.

![solution figure](../../raw_html/komal_figures/komal-P5579-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5579-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5579-sol-fig3.gif)

![solution figure](../../raw_html/komal_figures/komal-P5579-sol-fig4.gif)

![solution figure](../../raw_html/komal_figures/komal-P5579-sol-fig5.gif)

![solution figure](../../raw_html/komal_figures/komal-P5579-sol-fig6.gif)

![solution figure](../../raw_html/komal_figures/komal-P5579-sol-fig7.gif)

![solution figure](../../raw_html/komal_figures/komal-P5579-sol-fig8.gif)
