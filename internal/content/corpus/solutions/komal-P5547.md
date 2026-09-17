---
id: komal-P5547
source: komal
language: hu
translated: false
problem: komal-P5547
figure_files: [komal-P5547-sol-fig1.png, komal-P5547-sol-fig2.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A feladat szövege szerint a vödör aljához rögzített fonál a függőlegessel $30^\circ$-os szöget zár be, tehát megfeszül: ebből az következik, hogy a fagolyó sűrűsége kisebb a vízénél (erre következtethetünk az anyagából is). A golyóra a vízben a súlyerőn kívül a felhajtóerő is hat. A felhajtóerő nagysága a kiszorított víz súlyával egyenlő és azzal ellentétes irányú. A két erő eredője így szintén párhuzamos a súlyerővel, de mivel a felhajtóerő a nagyobb, így azzal ellentétes irányú. Ez alapján a fagolyót tartó fonál a forgás következtében a rögzítési ponton és a forgástengelyen átmenő síkban nem kifelé fog dőlni $30^\circ$-kal (mintha levegőben forgatnánk), hanem befelé, így 
 $r=(20-30\sin 30^\circ)=5\,\mathrm{cm}$ 
 távolságra lesz a forgástengelytől. 

 1. ábra 

**I. megoldás.**
 A vödörrel együtt forgó vonatkoztatási rendszerben egy $m$ tömegű, a forgástengelytől $r$ távolságra lévő testre az $mg$ nehézségi erőn kívül egy $m\omega^2r$ nagyságú, a forgástengelyre merőleges, kifelé mutató centrifugális erő is hat. Ebben a rendszerben ennek a két erőnek az eredője a test súlya. Fogalmazhatunk úgy is, hogy a (helyfüggő) nehézségi gyorsulás itt $\boldsymbol{g}'=\boldsymbol{g}+\omega^2\boldsymbol{r}$. 

 2. ábra 

 A bevezető gondolatmenet szerint a golyóra ható súlyerő és felhajtóerő eredője ezzel párhuzamos, de ellentétes irányú. Ezen kívül a forgó rendszerben nyugalomban lévő fagolyóra csak a fonálerő hat, így egyensúly csak akkor lehet ha az eredő súlyerő (és így a $\boldsymbol{g}'$ nehézségi gyorsulás) párhuzamos a fonállal. Ez alapján 
 $\frac{\omega^2r}{g}=\tg30^\circ,$ 
 és a keresett szögsebesség 
 $\omega=\sqrt{\frac{g\tg30^\circ}{r}}=10{,}6\,\mathrm{\frac{1}{s}}.$ 

**II. megoldás.**
 Inerciarendszerben a fagolyóra az $m\boldsymbol{g}$ nehézségi erő, a víz által kifejtett $\boldsymbol{F}_\mathrm{f}$ felhajtóerő és a $\boldsymbol{K}$ kötélerő hat, ezek eredője tartja körpályán: 
 $(1)$ $m\boldsymbol{g}+\boldsymbol{F}_\mathrm{f}+\boldsymbol{K}=-m\omega^2\boldsymbol{r}.$ 
 Milyen erőt fejt ki a forgó víz a golyóra? Érdemes végiggondolni, mi történik a nyugvó folyadékban. Ha a golyó helyén is folyadék lenne, akkor a körülötte lévő folyadék által kifejtett nyomóerők eredőjének a test helyén lévő folyadék súlyát kellene megtartania. Ezért a folyadékba helyezett testre is ugyanez az erő hat, ebből kapjuk meg, hogy a felhajtóerő nagysága a kiszorított folyadék súlyával egyenlő, és ellentétes irányú. 
 A forgó folyadékban a folyadék kicsiny, $m_\mathrm{f}$ tömegű, a forgástengelytől $r$ távolságra lévő darabja $\omega^2r$ gyorsulással gyorsul a forgástengely felé. A kis folyadékdarab mozgásegyenlete így: 
 $m_\mathrm{f}\boldsymbol{g}+\boldsymbol{F}_\mathrm{f}=-m_\mathrm{f}\omega^2\boldsymbol{r}.$ 
 Tehát ebben az esetben a körülötte lévő folyadéknak nem csak a folyadék $m_\mathrm{f}g$ súlyát kell megtartania, hanem egy $m_\mathrm{f}\omega^2r$ nagyságú, a forgástengely felé mutató vízszintes erőt is ki kell fejtenie. Ha a golyót ennek a kis folyadékdarabnak a helyére rakjuk, akkor arra is ugyanezzel az erővel hat a folyadék: 
 $\boldsymbol{F}_\mathrm{f}=-m_\mathrm{f}(\boldsymbol{g}+\omega^2\boldsymbol{r}).$ 
 Ezt beírva az (1) egyenletbe: 
 $m\boldsymbol{g}-m_\mathrm{f}(\boldsymbol{g}+\omega^2\boldsymbol{r})+\boldsymbol{K}=-m\omega^2\boldsymbol{r},$ 
 amiből: 
 $\boldsymbol{K}=(m_\mathrm{f}-m)(\boldsymbol{g}+\omega^2\boldsymbol{r}).$ 
 A test folyadéknál kisebb sűrűsége miatt $m_\mathrm{f}-m$ pozitív, tehát a $\boldsymbol{K}$ kötélerő (és így a kötél is) párhuzamos a $\boldsymbol{g}+\omega^2\boldsymbol{r}$ vektorral, ahogyan azt az előző megoldásban is láttuk. (A megoldás innen az előző gondolatmenettel adódik.)

![solution figure](../../raw_html/komal_figures/komal-P5547-sol-fig1.png)

![solution figure](../../raw_html/komal_figures/komal-P5547-sol-fig2.png)
