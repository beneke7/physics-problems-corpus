---
id: komal-P5708
source: komal
language: hu
translated: false
problem: komal-P5708
figure_files: [komal-P5708-sol-fig1.gif, komal-P5708-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 A mozgásegyenletek az 1. ábra jelöléseit használva írjuk fel. 

 1. ábra 

 Az $m$ tömegű mozgócsiga és a $2m$ tömegű test közös gyorsulása: 
 $(1)$ $3ma_1=3mg-K_1-K_2.$ 
 A mozgó- és az állócsiga szöggyorsulása: 
$$\begin{gather*}
\Theta\beta_1=(K_1-K_2)r,\tag{2}\\
\Theta\beta_2=(K_2-K_3)r,\tag{3}
\end{gather*}$$
 ahol $\Theta=\tfrac{1}{2}mr^2$. Az asztalon mozgó test vízszintes gyorsulása és függőleges erőegyensúlya: 
$$\begin{gather*}
ma_2=K_3-S,\tag{4}\\
N=mg.\tag{5}
\end{gather*}$$
 A mozgási súrlódási erő: 
 $(6)$ $S=\mu N,$ 
 ahol $\mu=0{,}5$. Kényszerfeltételek: a mozgócsiga fele akkora gyorsulással mozog, mint a róla letekeredő fonál: 
 $(7)$ $a_2=2a_1,$ 
 és a fonalak nem csúsznak meg a csigákon: 
$$\begin{gather*}
a_1=r\beta_1,\tag{8}\\
a_2=r\beta_2.\tag{9}
\end{gather*}$$
 A (7)-(9) kényszerfeltételeket, $\Theta$ kifejezését, valamint az (5)-(6) egyenletek és $\mu$ értéke alapján $S$ kifejezését felhasználva az (1)-(4) egyenletek így írhatók át: 
$$\begin{gather*}
3ma_1=3mg-K_1-K_2,\\
\frac{1}{2}ma_1=K_1-K_2,\\
ma_1=K_2-K_3,\\
2ma_1=K_3-\frac{1}{2}mg.
\end{gather*}$$
 A lineáris egyenletrendszert megoldva a számunkra szükséges kötélerők: 
$$\begin{gather*}
K_2=\frac{43}{38}mg,\\
K_3=\frac{35}{38}mg.\\
\end{gather*}$$
 Az állócsigára ható erők egyensúlya alapján az $F$ erő vízszintes és függőleges komponensének nagysága: 
$$\begin{gather*}
F_x=K_3=\frac{35}{38}mg,\\
F_y=mg+K_2=\frac{81}{38}mg,
\end{gather*}$$
 amiből a keresett kényszererő nagysága: 
 $F=\sqrt{F_x^2+F_y^2}=\frac{\sqrt{35^2+81^2}}{38}\,mg\approx 2{,}32\cdot mg,$ 
 a függőlegessel bezárt szöge pedig: 
 $\varphi=\arctg\frac{F_x}{F_y}=\arctg\frac{35}{81}\approx 23{,}4^\circ.$ 

**II. megoldás.**
 A testek gyorsulását a munkatétellel is meghatározhatjuk. Az elengedés után $t$ idővel a testek 2. ábrán jelölt elmozdulása, sebessége és szögsebessége: 
$$\begin{gather*}
s_1=\frac{1}{2}a_1t^2,\qquad s_2=\frac{1}{2}a_2t^2,\\
v_1=a_1t,\qquad v_2=a_2t,\\
\omega_1=\beta_1t,\qquad \omega_2=\beta_2t.
\end{gather*}$$
 Az I. megoldásban felírt kényszerfeltételek alapján: 
$$\begin{gather*}
2a_1=a_2,\\
r\omega_1=v_1,\qquad r\omega_2=v_2.
\end{gather*}$$

 2. ábra 

 A munkatétel alapján, $S$ és $\Theta$ kifejezését, valamint $\mu$ értékét is felhasználva az asztalon csúszó test gyorsulása: 
$$\begin{gather*}
\Delta E_\mathrm{h}-W_\mathrm{s}=\Delta E_\mathrm{m},\\
3mgs_1-\mu mgs_2=\frac{1}{2}\cdot 3mv_1^2+\frac{1}{2}\Theta\omega_1^2+\frac{1}{2}\Theta\omega_2^2+\frac{1}{2}mv_2^2,\\
\frac{3}{4}mga_2t^2-\frac{1}{4}mga_2t^2=\frac{3}{8}ma_2^2t^2+\frac{1}{16}ma_2^2t^2+\frac{1}{4}ma_2^2t^2+\frac{1}{2}ma_2^2t^2,\\
\frac{1}{2}ga_2t^2=\frac{19}{16}a_2^2t^2,\\
a_2=\frac{8}{19}g.
\end{gather*}$$
 Ebből már a (4) és (3) mozgásegyenletek alapján: 
$$\begin{gather*}
K_3=ma_2+S=ma_2+\mu mg=\frac{35}{38}mg,\\
K_2=K_3+\frac{\Theta\beta_2}{r}=K_3+\frac{1}{2}ma_2=\frac{43}{38}mg,
\end{gather*}$$
 az előző megoldással egyezően. Innentől a megoldás megegyezik az I. megoldás végével.

![solution figure](../../raw_html/komal_figures/komal-P5708-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5708-sol-fig2.gif)
