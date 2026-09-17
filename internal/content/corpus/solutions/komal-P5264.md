---
id: komal-P5264
source: komal
language: hu
translated: false
problem: komal-P5264
figure_files: [komal-P5264-sol-fig1.png, komal-P5264-sol-fig2.png, komal-P5264-sol-fig3.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 $a)$ SI-egységeket használva: 
 – az autó érintőleges gyorsulása $a_1=6$; 
 – a pálya sugara: $r=60$; 
 – az autó sebessége $t$ idő elteltével $v=a_1t=6t$; 
 – az autó centripetális gyorsulása: $a_2=\frac{v^2}{r}=0{,}6\,t^2$. Az autó gyorsulásvektora a kör érintőjével 
 $\alpha(t)=\arctg\frac{a_2}{a_1}=\arctg(0{,}1\,t^2)$ 
 szöget zár be. Ennek a szögnek az egységnyi időre vonatkozó megváltozása a keresett 
 $\omega(t)= \frac{\Delta\alpha}{\Delta t}
$ 
 szögsebesség. 
 Számítsuk ki, hogy mennyit változik $\tg\alpha$ egy kicsiny $\Delta t$ idő alatt, ha eközben az $\alpha$ szög $\Delta\alpha$-val nagyobb lesz. Mivel $\tg\alpha=0{,}1\,t^2$, fennáll, hogy 
 $\tg(\alpha+\Delta\alpha)-\tg\alpha=0{,}1 (t+\Delta t)^2-0{,}1
t^2.$ 
 Kicsiny változások esetén érvényes 
 $\tg(\Delta\alpha)\approx \Delta\alpha\qquad \text{és}\qquad \Delta t\ll
t.$ 
 Trigonometriai és algebrai átalakítások után kapjuk, hogy ebben a közelítésben 
 $\frac{\tg\alpha+\Delta\alpha}{1-\Delta\alpha\cdot \tg\alpha}-\tg\alpha=0{,}2t\,\Delta
t+0{,}1(\Delta t)^2,$ 
 azaz 
 $\Delta\alpha\left(1+\tg^2\alpha\right)=\Delta
t(0{,}2t+0{,}1t\,\Delta t)(1-\Delta\alpha\,\tg\alpha).$ 
 Innen kapjuk, hogy a keresett szögsebesség: 
 $\omega(t)\approx \frac{\Delta\alpha}{\Delta t}=
\frac{0{,}2\,t+0{,}1\Delta t}{1+\tg^2\alpha}
(1-\Delta\alpha\cdot\tg\alpha) =\frac{0{,}2\,t}{1+0{,}01\,t^4}.$ 
 Ha ábrázoljuk az $\omega(t)$ függvényt, a grafikonról leolvashatjuk, hogy a szögsebességnek $t=2{,}4$ s közelében maximuma van, és hogy a szögsebesség legnagyobb értéke $\omega_\text{max}=0{,}36\, \rm s^{-1}$. 

 Megjegytés. $\omega(t)$ szélsőértékét deriválással is meghatározhatjuk: A differenciálhányados $t_0=\sqrt[4]{100/3} \approx 2{,}4\ {\rm s}$ idő elteltével lesz nulla, és $\omega_\text{max}=\omega(t_0)\approx 0{,}36\,\rm s^{-1}$. 

**II. megoldás.**
 A feladat elemi úton (a differenciálszámítás felhasználása nélkül) is megoldható. Az autó inerciarendszerbeli $\boldsymbol a$ gyorsulásvektora az autóhoz rögzített (tehát egyenletes gyorsuló szögsebességgel forgó) $(X,Y)$ koordináta-rendszerben $\boldsymbol a=(a_1, a_2)$ módon adható meg (1. ábra) , ahol – az I. megoldás elején leírtaknak megfelelően 
 $a_1= 6 \qquad \text{és}\qquad a_2=0{,}6\,t^2.$ 

 1. ábra 

 A továbbiakban a gyorsulásvektort $\boldsymbol R$-rel, ezen vektor változási sebességét $\boldsymbol V$-rel, ez utóbbi változási sebességét (vagyis a $\boldsymbol R$ gyorsulását) $\boldsymbol A$-val fogjuk jelölni. (Az átjelölés oka: el akarjuk kerülni a $\boldsymbol V$ vektornak és az autó $\boldsymbol v$ sebességvektorának, valamint $\boldsymbol A$-nak és $\boldsymbol a$-nak esetleges összetévesztését.) Ennek megfelelően írhatjuk, hogy 
 $R_1= 6, \qquad R_2=0{,}6\,t^2.$ 
 Ráismerhetünk, hogy ezek éppen egy olyan test koordinátái, amely az $Y$ tengely irányában egyenletesen gyorsuló mozgást végez $1{,}2$ nagyságú gyorsulással. Így tehát 
 $V_1= 0, \qquad V_2=1{,}2\,t,$ 
 és 
 $A_1= 0, \qquad A_2=1{,}2.$ 
 Az $\boldsymbol R$ vektor nagyságát jelölje $R$, az autó haladási irányával (vagyis az $X$ tengellyel) bezárt szöge pedig legyen $\alpha$. Ennek megfelelően 
 $(1)$ $R=\sqrt{R_1^2+R_2^2}=6\sqrt{1+0{,}01\,t^4},$ 
 továbbá 
 $(2)$ $\cos\alpha=\frac{R_1}{R}=\frac{1}{\sqrt{1+0{,}01\,t^4}}$ 
 és 
 $\sin\alpha=\frac{R_2}{R}=\frac{0{,}1\,t^2}{\sqrt{1+0{,}01\,t^4}.} $ 
 a) A $\boldsymbol V$ vektort nemcsak az $X,Y$ koordinátákkal, hanem $\boldsymbol R$ irányú $V_\text{rad}$ ,,radiális'' és arra merőleges $V_\text{tan}$ ,,tangenciális'' komponensekkel is jellemezhetjük (2. ábra) . 

 2. ábra 

 Az ábráról leolvashatjuk, hogy 
 $V_\text{rad}=V_2\sin\alpha={1{,}2\,t}\,
\frac{0{,}1\,t^2}{\sqrt{1+0{,}01\,t^4}}=\frac{0{,}12\,t^3}{\sqrt{1+0{,}01\,t^4}},$ 
 valamint 
 $(3)$ $V_\text{tan}=R\omega=V_2\cos\alpha=\frac{1{,}2\,t }{\sqrt{1+0{,}01\,t^4}},$ 
 tehát a kérdéses szögsebesség: 
 $(4)$ $\omega=\frac{V_\text{tan}}{R}=\frac{0{,}2\,t }{ 1+0{,}01\,t^4} .$ 

 b) A fentebb leírtakhoz hasonlóan járhatunk el az $\boldsymbol A$ vektorral is (3. ábra) . 

 3. ábra 

 Itt azonban figyelembe kell vegyük, hogy a radiális és a tangenciális komponensek, valamint az $(A_1,A_2)$ komponensek közötti kapcsolat a forgásból származó extra tagokat is tartalmaz: 
 $A_\text{rad}= \frac{\Delta V_\text{rad}}{\Delta t}-R\omega^2, $ 
 ahol a jobb oldal második tagja a centripetális gyorsulás, valamint 
 $(5)$ $A_\text{tan}=R\beta+2V_\text{rad}\,\omega, $ 
 ahol a jobb oldal második tagja a Coriolis-gyorsulás. 

 Megjegyzás. Egy $m$ tömegű test forgó koordináta-rendszerbeli mozgásegyenletében a centrifugális erő a centripetális gyorsulás $(-m)$-szerese, a Coriolis-erő pedig a Coriolis-gyorsulás $(-m)$-szerese. (Lásd pl. a Négyjegyű függvénytáblázatokban a tehetetlenségi erők képleteit.) 

 Abban a $t_0$ pillanatban, amikor az $\omega$ szögsebesség a legnagyobb, a $\beta$ szöggyorsulás nulla , így (1-5) egyenletekből következően 
 $A_2\,\cos\alpha=2V_\text{rad}\,\omega,$ 
 azaz 
 ${1{,}2}\cdot\frac{1}{\sqrt{1+0{,}01\,t_0^4}}=2\cdot\frac{0{,}12\,t_0^3}{\sqrt{1+0{,}01\,t_0^4}}\cdot\frac{0{,}2\,t_0 }{\ 1+0{,}01\,t_0^4} .$ 
 Innen 
 $0{,}04\,t_0^4=1+0{,}01\,t_0^4,\qquad \text{azaz}\qquad 
 t_0=\root 4 \of {\frac{1}{0{,03}}}\approx 2{,}4\ \rm [s],
$ 
 a szögesbesség legnagyobb értéke pedig 
 $\omega_\text{max}=\omega(t_0)=\frac{3}{20}\root 4 \of {\frac{100}{3}}\approx 0{,}36\ \left[\rm s^{-1}\right].$

![solution figure](../../raw_html/komal_figures/komal-P5264-sol-fig1.png)

![solution figure](../../raw_html/komal_figures/komal-P5264-sol-fig2.png)

![solution figure](../../raw_html/komal_figures/komal-P5264-sol-fig3.png)
