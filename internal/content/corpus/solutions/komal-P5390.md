---
id: komal-P5390
source: komal
language: hu
translated: false
problem: komal-P5390
figure_files: [komal-P5390-sol-fig1.gif, komal-P5390-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Az elektromos dipólust két olyan, $\pm q$ töltésű, pontszerű testnek gondolhatjuk, amelyek távolsága $2\epsilon\ll R$ és $2\epsilon q=p$. A dipólus elektromos tere a fémfelületen töltésátrendeződést indít el, ami mindaddig tart, amíg az eredő elektromos tér mindenhol merőleges nem lesz a fémfelületre. 
 A gömbi tükörtöltés módszere szerint az eredő elektromos tér a gömbhéj belsejében olyan, mintha a dipólus töltésein kívül még két másik elektromos töltés helyezkedne el a gömbhéjon kívül. Ezek töltése $Q=\mp
q\frac{R}{\epsilon}$, távolságuk pedig a gömbhéj középpontjától $\frac{R^2}\epsilon$ (lásd az ábrát ). 

 1. ábra 

 A fém gömbhéj falában nincs elektromos tér, és a gömbhéjon kívül is nulla a térerősség, hiszen a dipólus össztöltése nulla, és a gömbhéj is töltetlen. Így – a fluxustörvény szerint – a gömbhéj külső felületén az elektromos töltéssűrűség mindenhol nulla. 
 A gömbhéj belsejében az elektromos térerősséget a dipólus és a két tükörtöltés együttesen határozza meg. A felületi töltéssűrűség – a fluxustörvény szerint – a felületnél mérhető elektromos térerősség ${\varepsilon_0}$-szorosa. 
 A $B$ pontban a $\pm q$ és $\mp Q$ töltéspár szimmetriája miatt az eredő térerősség sugár irányú komponense nulla, így a $B$ pontban a felületi töltéssűrűség: $\sigma_B=0$. 
 Számítsuk ki az eredő elektromos térerősséget az $A$ pontban! (Kihasználjuk, hogy $\epsilon\ll R$, hogy a gömbhéjba befelé mutató irányt tekintjük pozitívnak.) 
 $E_A=\frac{q}{4\pi\varepsilon_0}\left( \frac{1}{(R-\epsilon)^2}-\frac{1}{(R+\epsilon)^2}\right)+
\frac{Q}{4\pi\varepsilon_0}\left(\frac{1}{\left( {R^2}/{\epsilon}+R\right)^2} +\frac{1}{\left(
{R^2}/{\epsilon}-R\right)^2}
 \right)\approx \frac{1}{4\pi\varepsilon_0}\frac{6 \epsilon q}{R^3}=\frac{1}{4\pi\varepsilon_0}\frac{3p}{R^3}.$ 
 Innen következik, hogy a felületi töltéssűrűség az $A$ pontban: 
 $\sigma_A= -{\varepsilon_0}{E_A}=-\frac{3p}{4\pi R^3}.$ 

**II. megoldás.**
 Ismerjük, vagy kézikönyvekben megtalálhatjuk, hogy az elektromos térerősség-vektor az ún. Gauss-féle főhelyzetekben, a dipólustól $R$ távolságban: 
 ${\boldsymbol E}_A^\text{(dipól)}=2\cdot\frac{1}{4\pi\varepsilon_0 R^3}{\boldsymbol p}=2{\boldsymbol E}_0,$ 
 illetve 
 ${\boldsymbol E}_B^\text{(dipól)}=-\frac{1}{4\pi\varepsilon_0 R^3}{\boldsymbol p}=-{\boldsymbol E}_0.$ 
 A dipólus elektromos tere önmagában nem merőleges a fém gömbhéj felületére, ezért nem írja le helyesen a feladatban szereplő tényleges erőteret. De ha hozzáadunk a dipólus teréhez egy megfelelően választott homogén elektromos teret, akkor az eredő a gömbhéj belső felületénél mindenhol sugár irányú lesz, vagyis merőleges a fémfelületre. 
 Vajon milyen irányú és milyen nagyságú kell, hogy legyen ez a homogén erőtér? Az elrendezés szimmetriája miatt $\boldsymbol p$-vel párhuzamos (vagy azzal ellentétes irányú), a nagysága pedig éppen $\vert {\boldsymbol E}_0\vert$, hiszen csak akkor teljesül, hogy a $B$ pontban az eredő térerősségnek ne legyen érintőleges komponense. Ezek szerint 
 ${\boldsymbol E}^\text{(összes)}={\boldsymbol E}^\text{(dipól)}+{\boldsymbol E}^\text{(homogén)}=
{\boldsymbol E}^\text{(dipól)}-{\boldsymbol E}_B^\text{(dipól)}.$ 
 A kérdéses pontokban a térerősség nagysága: 
 $E_A=2E_0-(-E_0)=3E_0=3p\cdot\frac{1}{4\pi\varepsilon_0 R^3},$ 
 illetve 
 $E_B=-E_0-(-E_0)=0.
$ 
 Ennek megfelelően a felületi töltéssűrűségek: 
 $\sigma_A= -{\varepsilon}{E_A}=-3\frac{p}{4\pi R^3} \qquad \text{és} \qquad \sigma_B=0.
$ 
 A gömbhéjon kívül az elektromos erőtér Coulomb-tér, aminek nagysága a gömbhéj belsejében lévő összes töltéssel arányos. Mivel ez a töltés nulla, kívül nincs elektromos erőtér, és így a felületi töltéssűrűség is nulla. 

 Megjegyzés. Megmutatjuk, hogy a dipól terének és a homogén elektromos térnek a szuperpoziciója valóban a fémfelületre merőleges vektorokat eredményez, nemcsak a Gauss-féle főhelyzetekben, hanem a dipól tengelyével tetszőleges $\vartheta$ szöget bezáró helyvektorral jellemzett $P$ pontban is. 
 A $\boldsymbol p$ dipólmomentum vektor felbontható egy $p\cos\varphi$ nagyságú $\boldsymbol p_1$ és $p\sin\varphi$ nagyságú $\boldsymbol p_2$ vektor összegére ( 2. ábra ). Ezen két dipólus szempontjából a $P$ pont Gauss-féle (első, illetve második) főhelyzetnek számít, így a dipól terének komponensei: 
 $E^\text{(dipól)}_\text{radiális}=2\cos\vartheta\,E_0,$ 
 $E^\text{(dipól)}_\text{tangenciális}=-\sin\vartheta\,E_0,$ 
 ahol $E_0$ az $\frac{1}{4\pi\varepsilon_0}\frac{p}{R^3}$ mennyiséget jelöli. 

 2. ábra 

 Szuperponáljuk a dipól terére az 
 $\boldsymbol E_0=\frac{1}{4\pi\varepsilon_0 R^3}\boldsymbol p$ 
 térerősségvektorral megadott homogén elektromos mezőt. Ennek komponensei a gömbhéj belső felületénél: 
 $E^\text{(homogén)}_\text{radiális}=\cos\vartheta\,E_0,$ 
 $E^\text{(homogén)}_\text{tangenciális}=+\sin\vartheta\,E_0.$ 
 Az eredő térnek a gömbhéj felületénél a tangenciális komponense nulla, a radiális pedig: 
 $E^\text{(eredő)}_\text{radiális}=3\cos\vartheta\,E_0=\frac{3p}{4\pi\varepsilon_0 R^3} \cos\vartheta.$ 
 Innen leolvasható, hogy a gömbhéj belső felületén a töltéssűrűség: 
 $\sigma(\vartheta)=\frac{3p}{4\pi R^3}\cos\vartheta,$ 
 vagyis $\vartheta=0$-nál $\sigma_A=\frac{3p}{4\pi R^3},$ valamint $\vartheta=90^\circ$-nál $\sigma_B=0.$

![solution figure](../../raw_html/komal_figures/komal-P5390-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5390-sol-fig2.gif)
