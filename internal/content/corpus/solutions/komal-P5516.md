---
id: komal-P5516
source: komal
language: hu
translated: false
problem: komal-P5516
figure_files: [komal-P5516-sol-fig1.png, komal-P5516-sol-fig2.png, komal-P5516-sol-fig3.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az 1. ábra az ütközés előtti $(a)$ pillanatot, az ütközéskor fellépő erőket $(b)$, és végül az ütközést követő pillanatot $(c)$ mutatja. 

 1. ábra 

 Az ütközés ,,pillanatszerű'' (valójában nagyon rövid idő alatt végbemenő) folyamat. A súrlódási erő időben gyorsan változó, de csak nagyon rövid ($\Delta t$) ideig fellépő $S(t)$ függvénnyel adható meg. ($S(t)$ konkrét alakjára nem lesz szükségünk.) Ezt az erőlökést 
 $I_S\equiv \overline{S(t)}\cdot \Delta t$ 
 módon lehetne kiszámítani (a felülvonás az időbeli átlagértéket jelöli). Newton törvénye szerint az erőlökés a lendületváltozással egyezik meg: 
 $(1)$ $I_S=mv_x,$ 
 ahol $v_x$ a pingponglabda sebességének vízszintes komponense az ütközés után. 
 Az ütközés során az asztallap valamekkora $N(t)$ nagyságú, függőlegesen felfelé irányuló erővel nyomja a labdát, és ez 
 $I_N\equiv \overline{N(t)}\cdot \Delta t$ 
 erőlökést eredményez. (Mivel az ütközés ,,pillanatszerű'', $\overline{N(t)}\gg mg$, a labdára ható nehézségi erőt tehát az ütközés alatt elhanyagolhatjuk.) A labda függőleges ($y$ irányú) sebessége az ütközés során $v_y=-v_0$-ról $+v_0$-ra változik, tehát 
 $(2)$ $I_N=2mv_0.$ 
 A súrlódási erő hatására a labda szögsebessége a kezdeti $\omega_0$-ról valamekkora $\omega$-ra csökken. A labdára ható erők hatásvonalai az ütközés $P$ pontjára illeszkednek, így erre a pontra nézve nincs forgatónyomatékuk. A forgómozgás törvényei szerint tehát a labda $P$ pontra vonatkoztatott perdülete (ami egyrészt a labda forgásából, másrészt a tömegközépponjának mozgásából származik) az ütközés során változatlan marad: 
 $(3)$ $\Theta \omega_0=\Theta \omega+mv_xR.$ 

 Megjegyzés. Ezt az eredményt úgy is megkaphatjuk, hogy az (1)-ből kiszámított $I_S$ erőlökésnek a pingponglabda tömegközéppontjára vonatkoztatott forgatónyomatékát a perdületváltozással tesszük egyenlővé: 
 $I_SR=mv_xR=-\Theta(\omega-\omega_0).$ 

 Tudjuk még, hogy mindaddig, amíg a labda csúszik az asztalon, minden pillanatban fennáll: $S(t)=\mu N(t)$, és így 
 $\overline{S(t)}=\mu \overline{N(t)}.$ 
 A továbbiakban két esetet különböztethetünk meg. 

 I. eset. A súrlódási együttható nem túl nagy, vagyis nem halad meg egy bizonyos (később kiszámítandó) ,,kritikus értéket'' ($\mu<\mu_\text{krit.}$), és emiatt a labda az ütközés során mindvégig csúszik az asztalon. Ilyenkor az erőlökések is ugyanolyan arányban állnak egymással, mint a pillanatnyi erőnagyságok, vagyis 
 $(4)$ $I_S=\mu I_N.$ 
 Az (1), (2) és (4) egyenletek szerint a labda középpontjának sebessége az ütközés után: 
 $v_x=2\mu\,v_0,$ 
 a szögsebessége pedig (3) szerint 
 $\omega=(1-3\mu)\frac{v_0}{R}.$ 
 A folyamatos csúszás feltétele: $R\omega>v_x$, ami 
 $\mu<\frac15=\mu_\text{krit.} $ 
 esetén teljesül. 
 II. eset. Ha $\mu>\frac15$, akkor még az ütközés vége előtt $v_x$ és $R\omega$ egyenlő nagyságúvá válik, vagyis a labda a továbbiakban már nem csúszik, hanem tisztán gördül az asztalon. Ilyenkor (3) szerint 
 $(5)$ $v_x=R\omega=\frac25\,v_0.$ 
 Ez a sebesség a továbbiakban nem változik, mert a (tapadási) súrlódási erő hirtelen nullára csökken. 

 Megjegyzés. Jóllehet a feladat szövege nem kéri az ütközés folyamatának részletes leírását, tanulságos lehet ennek tárgyalása is. A folyamat időbeli lefolyását az asztal és a labda rugalmas tulajdonságaitól függő $N(t)$ erő ismerete nélkül nem tudjuk megadni, de a függőleges irányú $v_y$ sebesség függvényében ki tudjuk számítani a tömegközéppont vízszintes sebességét és a labda kerületi sebességét is. (Ha $N(t)=$ állandó teljesülne, akkor $v_y$ az időnek lineáris függvénye lenne, tehát ez a két változó egy állandó szorzófaktor erejéig megegyezne. A valós helyzet ettől nyilván különböző.) 
 Jelöljük az ütközés kezdete után $t$ idővel későbbi pillanatban a labda középpontjának sebességkomponenseit $v_x(t)$-vel és $v_y(t)$-vel, a szögsebességet $\omega(t)$-vel, az asztal által $t$ idő alatt kifejtett erőlökés komponenseit pedig $I_N(t)$-vel és $I_S(t)$-vel. 
 A lendületváltozásokra és a perdületmegmaradásra a következő egyenleteket írhatjuk fel: 
 $(1')$ $I_S(t)=mv_x(t), $ 
 $(2')$ $I_N(t)=mv_y(t)+mv_0,$ 
 $(3')$ $\frac23mR^2\omega_0=mRv_x(t)+\frac23mR^2\omega(t),$ 
 és végül a csúszási szakaszra érvényes 
 $(4')$ $I_S(t)=\mu I_N(t), \qquad\text{ameddig}\qquad v_x(t)<R\omega(t).$ 
 A fenti egyenletrendszer megoldása $\mu<\mu_\text{krit.}=\frac15$ esetén: 
 $v_x(t)=\mu v_y(t)+\mu v_0,$ 
 $R\omega(t)=v_0\left(1-\frac{3\mu}{2}\right)-\frac{3\mu}{2}v_y(t).$ 
 Ezek a sebességfüggvények pl. $\mu=0{,}15$-re a 2. ábrán látható grafikonnal szemléltethetők. 

 2. ábra 

 Amennyiben $\mu=0{,}4>\mu_\text{krit.}$, a labda tömegközéppontjának vízszintes sebessége és a kerületi sebessége már az ütközés befejeződése előtt egyenlővé válik, és ettől a pillanattól kezdve tiszta gördülés esete valósul meg ( 3. ábra ). 

 3. ábra 

 Ha $\mu\ge \frac15$, a labda tömegközéppontjának teljes sebessége az ütközés után 
 $v=\frac{\sqrt{29}}{5}v_0\approx 1{,}08\,v_0$ 
 nagyságú, és az irányának a a vízszintessel bezárt szöge 
 $\alpha=\arctg\frac25\approx 68{,}2^\circ.$ 
 Ha viszont $\mu\le\frac15$, akkor 
 $v=\sqrt{1+4\mu^2}\cdot v_0\le 1{,}08\,v_0$ 
 és 
 $\alpha=\arctg\frac1{2\mu}\ge\arctg\frac52\approx 68{,}2^\circ.$

![solution figure](../../raw_html/komal_figures/komal-P5516-sol-fig1.png)

![solution figure](../../raw_html/komal_figures/komal-P5516-sol-fig2.png)

![solution figure](../../raw_html/komal_figures/komal-P5516-sol-fig3.png)
