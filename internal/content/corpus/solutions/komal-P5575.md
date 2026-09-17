---
id: komal-P5575
source: komal
language: hu
translated: false
problem: komal-P5575
figure_files: [komal-P5575-sol-fig1.gif, komal-P5575-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Az elektromos dipólus modellezéséhez induljunk ki egy $q$ és egy $-q$ töltésből képzett párból, amelyek egymástól $d$ távolságra helyezkednek el. Ha elvégezzük a $d\to 0$, $q\to\infty$ határértékeket a $p=qd$ konstans feltétel mellett, akkor megkapjuk az ideális dipólust. 
 Vizsgáljuk meg, hogy mi történik a tükörtöltésekkel a határérték elvégzése közben! A $q$ illetve $-q$ töltésekhez rendre $-q$ illetve $q$ tükörtöltések tartoznak, amelyek egymástól vett távolsága $d$. Mivel a töltések előjele felcserélődik, az említett limeszben könnyen látható, hogy a tükördipólus a valódival párhuzamos $\boldsymbol{p}$ dipólmomentummal jellemezhető. 
 Az elektromos térerősség értéke a koordináta-rendszer $(x,y)$ síkjába helyezett fémlap felületén, az elrendezés szimmetriatengelyétől $r$ távolságra a valódi és tükördipólusok járulékainak összegeként adódik: 
 $\boldsymbol{E}(r)=\frac{1}{2\pi\varepsilon_0}\frac{3ph^2-p(h^2+r^2)}{(h^2+r^2)^{5/2}}\begin{pmatrix}0\\0\\1\end{pmatrix},$ 
 ez a várakozásainknak megfelelően merőleges a fémlapra. A felületi töltéssűrűség a $\sigma=\varepsilon_0 E$ összefüggésből kapható: 
 $\sigma(r)=\frac{p}{2\pi}\frac{2h^2-r^2}{(h^2+r^2)^{5/2}}.$ 
 Jól látható, hogy a fenti kifejezés számlálója zérussá válik, amennyiben a $r$ sugár az alábbi $R$ értéket veszi fel: 
 $R=\sqrt{2}\,h.$ 
 A töltéssűrűség tehát egy ekkora sugarú körvonal mentén zérus. 

**II. megoldás.**
 A fémlap közvetlen közelében az elektromos térerősség merőleges a fémlapra, nagysága helyről helyre változó $E_\perp$. A fémlap felületi töltéssűrűsége (egységnyi felületen található töltés nagysága) a Gauss-féle fluxustörvény szerint arányos az $E_\perp$ komponenssel, tehát ott válik nullává, ahol $E_\perp$ eltűnik. 
 A fémlapnak a dipólust tartalmazó oldalán az elektromos térerősség úgy számítható ki, mintha a fémlap ott se lenne. Helyette a ténylegesen ott lévő (az alábbi ábrákon pirosan jelölt) dipólus mellett egy, annak a fémlapra vett tükörkép-pontjában található másik, ugyancsak $\boldsymbol p$ dipólmomentummal rendelkező (kék színnel jelölt) ,,tükördipólus'' elektromos terét is számításba kell vegyük. (Ez a tükrözési módszer az elektrosztatikában.) 

 Megjegyzés. Érdekes, hogy a tükördipól iránya nem tükröződik, hanem $\boldsymbol{p}$-vel megegyező marad. Ennek az a szemléletes magyarázata, hogy a tükrözés során a dipólust alkotó két, egymáshoz közeli töltést összekötő vektor iránya is és a töltések előjele is megváltozik, a szorzatuk tehát változatlan marad. 

 Egyetlen elektromos dipólus térerőssége a dipólus helyétől $\boldsymbol{r}$ vektorral megadott pontban 
 $\boldsymbol{E}(\boldsymbol{r})=\frac{1}{4\pi\varepsilon_0}\frac{(3\boldsymbol{p}\boldsymbol{r})\boldsymbol{r}-\boldsymbol{p}r^2}{r^5}.$ 
 (Ez a formula tankönyvekben és az interneten is megtalálható.) 
 Esetünkben a teljes elektromos térerősség a valódi és a tükördipólus terének összege: 
 $\boldsymbol{E}=\frac{1}{4\pi\varepsilon_0}\left(\frac{(3\boldsymbol{p}\boldsymbol{r})\boldsymbol{r}-\boldsymbol{p}r^2}{r^5} +\frac{(3\boldsymbol{p}\boldsymbol{r'})\boldsymbol{r'}-\boldsymbol{p}r'^2}{r'^5}\right),$ 
 ahol $\boldsymbol{r'}$ a tükördipólustól a vizsgált pontba mutató vektor ( 1. ábra ). Az ábráról leolvasható, hogy $\vert\boldsymbol{r'}\vert\equiv r'=r.$ 

 1. ábra 

 A fenti térerősségnek a normális irányú (a fémlapra merőleges) komponense akkor nulla, ha $\boldsymbol{E}$-t egy normális irányú vektorral, például $\boldsymbol{p}$-vel skalárisan szorozva nullát kapunk: $\boldsymbol{E}\cdot\boldsymbol{p}=0$. Ez akkor teljesül, ha 
 $3(\boldsymbol{p}\boldsymbol{r})^2+3(\boldsymbol{p}\boldsymbol{r'})^2-2p^2r^2=0.$ 
 Tekintettel arra, hogy $\boldsymbol{p}$ merőleges az $\boldsymbol{r}+\boldsymbol{r'}$ vektorra, vagyis $\boldsymbol{p}\left(\boldsymbol{r}+\boldsymbol{r'}\right)=0,$ így 
 $\boldsymbol{p}\boldsymbol{r}=-\boldsymbol{p}\boldsymbol{r'}\qquad \text{és}\qquad 
(\boldsymbol{p}\boldsymbol{r})^2=(-\boldsymbol{p}\boldsymbol{r'})^2=p^2r^2\cos^2\alpha.$ 
 A felületi töltéssűrűség eltűnésének feltétele (behelyettesítés és 2-vel való osztás után): 
 $3p^2r^2\cos^2\alpha=p^2r^2,$ 
 azaz $\cos\alpha=\frac{1}{\sqrt3}$. Innen a kérdéses távolság 
 $R=h\tg\alpha=\sqrt{2}\,h,$ 
 vagyis a fémfelület töltéssűrűsége egy $R$ sugarú kör mentén válik zérussá. 

**III. megoldás.**
 Gauss sokat foglalkozott a mágneses dipólusok által keltett mágneses mező sajátságaival. Megállapította, hogy egy $\boldsymbol{m}$ erősségű mágneses dipólus tengelye mentén, attól $r$ távolságban a mágneses tér (mai szóhasználattal: a mágneses indukció) $\boldsymbol{m}$ irányú és $2k\frac{m}{r^3}$ nagyságú. Az arányossági tényező a mértékegységek választásától függ, Gauss például $k$-t 1-nek vette; SI egységekben pedig $k=\mu_0/(4\pi)$. Gauss azt is megállapította, hogy a dipólus tengelyére merőleges irányban a mágneses indukció $\boldsymbol{m}$-mel ellentétes irányú és $k\frac{m}{r^3}$ nagyságú. Ezt a két irányt (vagyis amikor $\boldsymbol{r}$ párhuzamos, illetve merőleges $\boldsymbol{m}$-re) Gauss-féle I. és II. főhelyzetnek nevezik. 
 Az elektromos dipólusok által keltett elektromos tér a főhelyzetekben a mágneses térrel analóg összefüggésekkel írható le. Bontsuk fel $\boldsymbol{p}$-t két olyan vektor összegére, amelyeknek a keresett $P$ pont a Gauss-féle I., illetve II. főhelyzetébe kerül, és járjunk el ugyanígy a tükördipólus esetében is ( 2. ábra ). 

 2. ábra 

 Az egyes dipóluskomponensek nagysága $p\cos\alpha$ és $p\sin\alpha$, és a $P$ pont mindegyik dipól-összetevőtől ugyanakkora $r$ távolságban van. Ennek megfelelően az eredő elektromos térerősség a fémlemez $P$ pontjánál – a szuperpozíció-elvnek megfelelően – a négy járulék összege 
 $2\lambda\cos^2\alpha-\lambda\sin^2\alpha+2\lambda\cos^2\alpha-\lambda\sin^2\alpha=0.$ 
 (A $\lambda$ állandó a fentebb említett $k$ konstans elektrosztatikus megfelelőjének és a mindegyik dipól-összetevőre ugyanakkora $p/r^3$ tényezőnek a szorzata.) A nulla töltéssűrűségű helyeket tehát a $4\cos^2\alpha=2\sin^2\alpha$ egyenlet jellemzi, ahonnan 
 $\tg\alpha=\sqrt2,\qquad\text{és így}\qquad R=\sqrt2\,h.$

![solution figure](../../raw_html/komal_figures/komal-P5575-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5575-sol-fig2.gif)
