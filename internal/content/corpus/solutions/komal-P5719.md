---
id: komal-P5719
source: komal
language: hu
translated: false
problem: komal-P5719
figure_files: [komal-P5719-sol-fig1.gif, komal-P5719-sol-fig2.png, komal-P5719-sol-fig3.png, komal-P5719-sol-fig4.png, komal-P5719-sol-fig5.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 A feladatnak megfelelő töltésekkel ellátott sokszöget helyezzük el egy koordináta-rendszerben az 1. ábra szerint! 

 1. ábra 

 Az egyes csúcsokat indexeljük a rajtuk lévő töltéseknek megfelelően. A $j$-edik csúcs járuléka a középpontban kialakuló $\boldsymbol{E}$ térerősséghez 
 $\boldsymbol{E}_j=E_0j\boldsymbol{e}_j,$ 
 ahol 
 $E_0=\frac{q}{4\pi\varepsilon_0R^2},$ 
 $\boldsymbol{e}_j$ pedig a $\varphi_j=\frac{\pi}{n}(2j-1)$ irányba mutató egységvektor, amely komponensekkel az 
 $\boldsymbol{e}_j=\left(\sin\frac{\pi}{n}(2j-1),\cos\frac{\pi}{n}(2j-1)\right)$ 
 alakban adható meg. (Megjegyezzük, hogy az elrendezésünkben a sokszög csúcsai a töltésekkel a $\varphi'_j=\frac{\pi}{n}(2j-1)+\pi$, ha $j\leq \frac{n}{2}$, illetve a $\varphi'_j=\frac{\pi}{n}(2j-1)-\pi$, ha $j> \frac{n}{2}$ irányokban helyezkednek el, így az $\boldsymbol{e}_j$ egységvektorok páros $n$ esetén csúcs, páratlan $n$ esetén oldalfelező pont felé mutatnak.) Az eredő térerősség komponensei 
 $E_x=E_0\sum_{j=1}^n j\sin\frac{\pi}{n}(2j-1)$ 
 és 
 $E_y=E_0\sum_{j=1}^nj\cos\frac{\pi}{n}(2j-1).$ 
 Használjuk a 
$$\begin{gather*}
2\sin\alpha\sin\beta=\cos(\alpha-\beta)-\cos(\alpha+\beta),\\
2\cos\alpha\sin\beta=\sin(\alpha+\beta)-\sin(\alpha-\beta)
\end{gather*}$$
 azonosságokat: 
$$\begin{gather*}
\sin\frac{\pi}{n}(2j-1)=\frac{1}{2\sin\frac{\pi}{n}}\left(\cos\frac{2\pi}{n}(j-1)-\cos\frac{2\pi}{n}j\right),\\
\cos\frac{\pi}{n}(2j-1)=\frac{1}{2\sin\frac{\pi}{n}}\left(\sin\frac{2\pi}{n}j-\sin\frac{2\pi}{n}(j-1)\right).
\end{gather*}$$
 Az így kapott összegek átrendezéssel egyszerűsíthetők: 
 $\sum_{j=1}^nj\left(\cos\frac{2\pi}{n}(j-1)-\cos\frac{2\pi}{n}j\right)=\sum_{j=0}^{n-1}(j+1)\cos\frac{2\pi}{n}j-\sum_{j=1}^{n}j\cos\frac{2\pi}{n}j=-n+\sum_{j=1}^{n}\cos\frac{2\pi}{n}j,$ 
 és 
 $\sum_{j=1}^nj\left(\sin\frac{2\pi}{n}j-\sin\frac{2\pi}{n}(j-1)\right)=\sum_{j=1}^{n}j\sin\frac{2\pi}{n}j-\sum_{j=0}^{n-1}(j+1)\sin\frac{2\pi}{n}j=-\sum_{j=1}^n \sin\frac{2\pi}{n} j.$ 
 Könnyű belátni, hogy $\sum_{j=1}^{n}\cos\frac{2\pi}{n}j=\sum_{j=1}^{n}\sin\frac{2\pi}{n}j=0$. Ehhez használhatjuk például a 
 $\sin\frac{2\pi}{n}j=\frac{1}{2\sin\frac{\pi}{n}}\left(\cos\frac{\pi}{n}(2j-1)-\cos\frac{\pi}{n}(2j+1)\right)$ 
 és 
 $\cos\frac{2\pi}{n}j=\frac{1}{\sin\frac{\pi}{n}}\left(\sin\frac{\pi}{n}(2j+1)-\sin\frac{\pi}{n}(2j-1)\right)$ 
 összefüggéseket, de gondolhatunk arra is, hogy ezek egy szabályos n-szög középpontjából a csúcsai felé mutató egységvektorok összegének (ami történetesen egy null vektor) a komponensei. Eredményünk szerint tehát 
 $E_x=-E_0\frac{n}{2\sin\frac{\pi}{n}}\qquad\textrm{és}\qquad E_y=0,$ 
 ami, koordináta-rendszertől független megfogalmazásban azt jelenti, hogy az eredő térerősség párhuzamos az $n$-szög $nq$ és $q$ töltésű csúcsát összekötő oldallal, és a nagysága 
 $E=E_0\frac{n}{2\sin\frac{\pi}{n}}.$ 

**II. megoldás.**
 A keresett eredő térerősség a sokszög középpontjában 
 $(1)$ $\boldsymbol{E}=-E_0\left(\boldsymbol{e}_1+2\boldsymbol{e}_2+3\boldsymbol{e}_3+\cdots+n\boldsymbol{e}_n\right),$ 
 ahol $\boldsymbol{e}_k$ a középpontból a $k$-adik csúcs felé mutató egységvektor (2. ábra) , $E_0$ pedig a $q$ nagyságú töltés járulékának nagysága : 
 $E_0=\frac{q}{4\pi\varepsilon_0R^2}.$ 

 2. ábra 

 Megjegyzés. A $\boldsymbol{e}_k$ egységvektorok nem egyeznek meg az I. megoldásban szereplő, ugyanígy jelölt vektorokkal, hanem azok $(-1)$-szeresei; innen származik az (1) képlet jobb oldalán a negatív előjel.) 

 A szabályos sokszög szimmetriája miatt nyilván fennáll, hogy 
 $(2)$ $\boldsymbol{e}_1+\boldsymbol{e}_2+\boldsymbol{e}_3+\cdots+\boldsymbol{e}_n=0.$ 
 Vonjuk ki (2) bal oldalát (1) jobb oldalának zárójelben álló részéből: 
 $\boldsymbol{E}=-E_0\left(\boldsymbol{e}_2+2\boldsymbol{e}_3+3\boldsymbol{e}_4+\cdots
+(n-1)\boldsymbol{e}_n\right).$ 
 Ez a kifejezés így is felírható: 
 $(3)$ $\boldsymbol{E}=-E_0\left(\boldsymbol{e}_2+2\boldsymbol{e}_3+3\boldsymbol{e}_4+\cdots
+(n-1)\boldsymbol{e}_n+n\boldsymbol{e}_{n+1}\right)+nE_0\boldsymbol{e}_1\equiv\boldsymbol{E^*}+nE_0\boldsymbol{e}_1,$ 
 ahol $\boldsymbol{e}_{n+1}=\boldsymbol{e}_1$. Az $\boldsymbol{E^*}$ vektor ugyanolyan nagyságú, mint a keresett $\boldsymbol{E}$, de ahhoz képest – a csúcspontbeli töltések növekedésének irányában – $2\pi/n$ szöggel ,,el van forgatva'', és 
 $(4)$ $\boldsymbol{E }-\boldsymbol{E^*}=nE_0\,\boldsymbol{e}_1.$ 
 Ennek megfelelően (lásd a 3. ábrát ) 
 $nE_0=2\sin\frac\alpha 2\left\vert \boldsymbol{E}\right\vert,$ 
 vagyis 
 $\left\vert \boldsymbol{E}\right\vert=\frac{ 1}{4\pi\varepsilon_0}\frac{nq}{R^2}\,\frac{1}{2\sin\frac{\pi}{n}}.$ 

 3. ábra 

 Hátravan még $\boldsymbol E$ irányának meghatározása. Mivel (4) így is felírható: 
 $\frac1{nE_0}\boldsymbol E-\frac1{nE_0}\boldsymbol E^*=\boldsymbol e_1,$ 
 a 4. ábrán látható vektorok két zárt vektorháromszöget alkotnak. Látjuk, hogy $ABC$ és $OAC$ hasonló (egyenlő szárú) háromszögek, így megállapíthatjuk, hogy $\boldsymbol E$ párhuzamos az $\boldsymbol e_1-\boldsymbol e_n$ vektorral, és így annak $R$-szeresével is. Ez utóbbi éppen az $nq$ nagyságú töltéstől a $q$ nagyságú töltésig mutató vektor, ez adja meg tehát az eredő térerősség irányát. 

 4. ábra 

**III. megoldás.**
 A feladatot a komplex számok és a velük végezhető műveletek felhasználásával is megoldhatjuk (lásd pl. Gnädig Péter: Komplex számok a fizikában című cikk I. részét a KöMaL 2024. évi áprilisi számában). Felhasználhatjuk, hogy a Gauss-féle komplex számsík $z=x+iy$ pontjai és az $(x,y)$ komponensekkel rendelkező síkbeli vektorok kölcsönösen egyértelműen megfeleltethetők egymásnak. A komplex számok összeadása, illetve valós számmal történő szorzása a vektorösszeadásnak, illetve a vektorok skalárral történő szorzásának felelnek meg, és mindkét leírásmódnál ugyanazok a műveleti szabályok érvényesek. 
 Helyezzük el az $n$ oldalú szabályos sokszöget a Gauss-féle komplex számsíkon úgy, hogy a középpontja az origóban, az egyik csúcsa (amelyen a legnagyobb töltés található) a pozitív valós tengelyen legyen. A csúcspontoknak megfelelő komplex számok az $n$-edik egységgyökök segítségével adhatók meg. Az egységgyökök az 
 $\epsilon=\cos\alpha+i\sin\alpha$ 
 komplex szám egész kitevős hatványaival egyeznek meg, ahol $\alpha=2\pi/n$. Nyilván teljesül, hogy $\epsilon^n=1,$ ezért jogos az ,,egységgyök'' elnevezés. Ugyancsak egységgyökök $\epsilon$ egész kitevőjű hatványai, ezekből összesen $n$ különböző található. A sokszög csúcsainak megfelelő komplex számok $R\epsilon, R\epsilon^2,\ldots, R\epsilon^n=R$ ( 5. ábra ). 

 5. ábra 

 Az egyes töltések által a sokszög középpontjában létrehozott elektromos térerősségvektoroknak megfelelő komplex számok rendre 
 $E_j=-\frac{1}{4\pi\varepsilon_0}\, \frac{jq}{R^2}\,\epsilon^j,\quad (j=1,2,\ldots,n).$ 
 az eredő (komplex) térerősség pedig 
 $(5)$ $E=-E_0\left[\epsilon +2\epsilon^2+3\epsilon^3+\cdots + (n-1)\epsilon^{n-1}+n\epsilon^n\right],$ 
 ahol $E_0=\frac{q}{4\pi\varepsilon_0 R^2}$ a legkisebb töltés által keltett térerősség nagysága a középpontban. 
 Az (5) egyenlőség jobb oldalán szögletes zárójelben szereplő kifejezés egy mértani sor összegének deriváltjaként is előállítható: 
 $[\ldots]=\epsilon\left(1+2\epsilon+3\epsilon^2+\cdots+n\epsilon^{n-1}\right)=z\frac{\mathrm{d}}{{\mathrm{d}}z}\left(z+z^2+\cdots+z^n\right)\Biggr\vert_{z=\epsilon}=z\frac{\rm d}{\textrm{d}z}\left(\frac{z^{n+1}-z}{z-1}\right)\Biggr\vert_{z=\epsilon}=$ 
 $=\epsilon\frac{(n+1)\epsilon^n-1}{\epsilon-1}-\epsilon\frac{\epsilon^{n+1}-\epsilon}{(\epsilon-1)^2}=\frac{n\epsilon}{\epsilon-1}.$ 
 (Az utolsó lépésnél felhasználtuk, hogy $\epsilon^n=1$.) A keresett eredő elektromos térerősség tehát komplex írásmódban 
 $E=-E_0\frac{n\epsilon}{\epsilon-1}=nE_0\frac{\cos\alpha+i\sin\alpha}{(1-\cos\alpha)-i\sin\alpha}.$ 
 A térerősség vektorának nagysága a komplex térerősség abszolút értéke: 
 $\vert\boldsymbol{E}\vert=\vert E\vert=nE_0\frac{1}{\sqrt{(1-\cos\alpha)^2+\sin^2\alpha}}=\frac{nE_0}{2\sin\frac{\alpha}{2}}=\frac{1}{4\pi\varepsilon_0}\frac{nq}{R^2}\,\frac{1}{2\sin\frac{\pi}{n}}.$ 
 Megmutatjuk, hogy az eredő térerősségvektor iránya megegyezik az $nq$ töltéstől a $q$ töltésig mutató vektor irányával. Az előbbi vektor komplex írásmódban az $\epsilon/(\epsilon-1)$ számmal arányos, az utóbbi komplex vektor pedig az $\epsilon-1$ valós számszorosa (nevezetesen $R$-szerese). Két komplex vektor párhuzamos hatásvonalú és azonos irányba mutat, ha a hányadosuk pozitív valós szám. Esetünkben ez ténylegesen teljesül, hiszen 
 $\frac{R(\epsilon-1)}{E}=-\frac{R}{nE_0}\frac{(\epsilon-1)^2}{\epsilon}\sim-\frac{(\epsilon-1)^2}{\epsilon}=-\epsilon+2-\frac{1}{\epsilon}=-(\cos\alpha+i\sin\alpha)+2-(\cos\alpha-i\sin\alpha)=2(1-\cos\alpha)=4\sin^2\frac{\alpha}{2},$ 
 ami valóban egy pozitív valós szám.

![solution figure](../../raw_html/komal_figures/komal-P5719-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5719-sol-fig2.png)

![solution figure](../../raw_html/komal_figures/komal-P5719-sol-fig3.png)

![solution figure](../../raw_html/komal_figures/komal-P5719-sol-fig4.png)

![solution figure](../../raw_html/komal_figures/komal-P5719-sol-fig5.png)
