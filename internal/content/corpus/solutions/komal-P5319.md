---
id: komal-P5319
source: komal
language: hu
translated: false
problem: komal-P5319
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ A pálca végpontjainak pillanatnyi helyvektora (egy önkényesen választott $O$ ponthoz viszonyítva) legyen $\boldsymbol r_1$ és $\boldsymbol r_2$. A pálca felezőpontjába (tömegközéppontjába) mutató vektor: 
 $\boldsymbol r_\text{tkp.}=\frac{ \boldsymbol r_1+\boldsymbol r_2 }{2}.$ 
 Ennek a vektornak a változási sebessége 
 $\boldsymbol v_\text{tkp.}=\frac{ \boldsymbol v_1+\boldsymbol v_2 }{2},$ 
 és így a pálca lendülete: 
 $\boldsymbol I=m \boldsymbol v_\text{tkp.}=m\frac{ \boldsymbol v_1+\boldsymbol v_2 }{2}.$ 

 Megjegyzés. A $\boldsymbol v_1$ és $\boldsymbol v_2$ vektorok nem választhatók meg tetszőlegesen, mert a pálca hossza időben állandó, emiatt a két sebesség különbsége a pálcára merőleges kell hogy legyen. Ha $\boldsymbol
\ell$ a pálca egyik végétől a másik végéig mutató vektor, akkor a pálca hosszának állandóságát kifejező vektoregyenlet: 
 $\left(\boldsymbol v_1-\boldsymbol v_2\right)\cdot \boldsymbol \ell=0,\qquad\text{azaz}\qquad \boldsymbol v_1\cdot \boldsymbol \ell=
\boldsymbol v_2\cdot \boldsymbol \ell.$ 
 A fenti képletekben a ,,pont'' a vektorok skaláris szorzatát jelöli. 

 $b)$ A végpontoknak a tömegközépponthoz viszonyított sebessége: 
 $\boldsymbol u_1= \boldsymbol v_1
 -\boldsymbol v_\text{tkp}=\frac{\boldsymbol v_1-\boldsymbol v_2}{2},$ 
 illetve 
 $\boldsymbol u_2= \boldsymbol v_2
 -\boldsymbol v_\text{tkp.}=\frac{\boldsymbol v_2-\boldsymbol v_1}{2}=-\boldsymbol u_1.$ 
 A pálca tehetetlenségi nyomatéka 
 $\Theta=\frac{m\ell^2 }{12},$ 
 a szögsebessége pedig 
 $\omega=\frac{\vert \boldsymbol u_1 \vert}{\ell/2}=\frac{1}{\ell}\vert \boldsymbol v_1-\boldsymbol v_2 \vert,$ 
 és így a tömegközéppontra vanatkoztatott perdülete: 
 $N=\Theta\omega=\frac{m\ell}{12}\vert \boldsymbol v_1-\boldsymbol v_2 \vert.$ 
 A perdületet egy – a síkra merőleges – vektorként is értelmezhetjük, ami $\boldsymbol\ell=\boldsymbol r_1-\boldsymbol
r_2$ segítségével így adható meg: 
 $\boldsymbol N= \frac{1}{12}m\,\boldsymbol \ell\times\left( \boldsymbol v_1-\boldsymbol v_2\right).$ 
 (A ,,kereszt'' a vektoriális szorzatot jelöli. ) 

 $c)$ A pálca teljes mozgási energiája a tömegközépponthoz tartozó mozgási energia és a forgási energia összegeként adható meg: 
 $E_{\text{összes}}=E_{\text{tkp.}}+E_{\text{forgás}}=\frac{1}{2}m\boldsymbol{v}^2_{\text{tkp.}}+\frac{1}{2}\Theta\omega^2.$ 
 A korábban kiszámított értékeket behelyettesítve kapjuk, hogy 
 $E_{\text{összes}} =\frac{m}{8}\, \left(\boldsymbol v_1+\boldsymbol v_2\right)^2+\frac{m}{24}
\left(\boldsymbol v_1-\boldsymbol v_2\right)^2=\frac{m}{6}\, \left(v_1^2+v_2^2+\boldsymbol v_1\cdot\boldsymbol v_2
\right).$
