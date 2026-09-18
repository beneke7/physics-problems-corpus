---
id: komal-P5187
source: komal
language: hu
translated: false
problem: komal-P5187
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Kis kitérések esetén a fonálingák szögkitérése:
 $\varphi_1(t)=A \cos(\omega_1t), \qquad \varphi_2(t)=-A \cos(\omega_2t),$
 ahol $A\ll 1$ a lengések maximális szögkitérése, a körfrekvenciák pedig
 $\omega_1=\sqrt{\frac{g}{\ell_1}}\approx 6{,}26~\frac{1}{\rm s}, \qquad \text{illetve}\qquad \omega_2=\sqrt{\frac{g}{\ell_2}}\approx 2{,}86~\frac{1}{\rm s}.$
 A továbbiak szempontjából lényeges mennyiség a két körfrekvencia aránya:
 $K=\frac{\omega_1}{\omega_2}=\sqrt{\frac{\ell_2}{\ell_1}}=2{,}19. $
 (A fenti képletekben szereplő körfrekvenciák a fonalak rezgőmozgására vonatkoznak, nem keverendők össze a fonalak szögének pillanatnyi változási sebességéhez, vagyis a szögsebességükhöz tartozó körfrekvenciával.)
 Amikor a két fonál egymás mellett halad el, teljesül $\varphi_1(t)=\varphi_2(t),$ vagyis
 $\varphi_2(t)-\varphi_1(t)=A \cos(\omega_2t)+A\cos\left(K\omega_2t\right)\equiv 2A\cos\left(\frac{K+1}{2}\omega_2t\right)\cdot\cos\left(\frac{K-1}{2}\omega_2t\right)=0.
$
 A fenti egyenlet megoldásai:
 $\omega_2t\equiv \alpha_n=(2n-1)\frac{\pi}{K+1}, \qquad \text{illetve}\qquad \omega_2t\equiv \beta_n=(2n-1)\frac{\pi}{K-1},
$
 ahol $n$ pozitív egész szám. $\alpha_n$ és $\beta_n$ az első inga (radiánban mért) fázisszöge az ingák találkozásának pillanatában. Esetünkben $K=2{,}19$, vagyis
 $\alpha_1=0{,}98; \quad\alpha_2=2{,}95; \quad\alpha_3=4{,}92; \ldots,$
 $\beta_1=2{,}63; \quad\beta_2=7{,}92; \quad\beta_3=13{,}20; \ldots.$
 $a)$ A találkozások fázisszögeit növekvő sorrendbe rakva leolvashatjuk, hogy az indulástól számított
 $t_1=\frac{\alpha_1}{\omega_2}=0{,}34~\rm s$
 múlva kerül a két fonál fedésbe.
 $b)$ A második találkozás időpontja:
 $t_2=\frac{\beta_1}{\omega_2}=0{,}92~\rm s.$
 $c)$ Belátjuk, hogy az $\alpha_i$ szögeknél az ingák ,,szembe haladva'' találkoznak, vagyis a sebességük ellentétes előjelű, a $\beta_i$ szögeknél pedig ugyanabba az irányba mozognak, sebességük egyforma előjelű.
 A lengő testek sebessége:
 $v_1(t)=-A\ell_1\omega_1\sin(\omega_1t), \qquad v_2(t)= A\ell_2\omega_2\sin(\omega_2t).$
 $(i)$ A sebességek aránya az $\alpha_n$ fázisszögű találkozásoknál:
 $\frac{v_1}{v_2}=-\frac{\ell_1}{K\ell_2}\, \frac{\sin\alpha_n}{\sin(K\alpha_n)}.$
 Tekintve, hogy $\alpha_n+K\alpha_n=(2n-1)\pi,$ vagyis $\sin\alpha_n=\sin(K\alpha_n),$ a sebességek aránya negatív, az ingák szembe mozogva találkoznak.
 $(ii)$ A sebességek aránya a $\beta_n$ fázisszögű találkozásoknál:
 $\frac{v_1}{v_2}=-\frac{\ell_1}{K\ell_2}\, \frac{\sin\beta_n}{\sin(K\beta_n)}.$
 Tekintve, hogy $\beta_n-K\beta_n=(2n-1)\pi,$ vagyis $\sin\beta_n=-\sin(K\beta_n),$ a sebességek aránya pozitív, az ingák azonos irányba mozogva találkoznak.
 Annak feltétele, hogy az ötödik találkozás legyen az első azonos irányba haladó::
 $\alpha_4<\beta_1<\alpha_5,$
 vagyis
 $\frac{7\pi}{K+1}<\frac{ \pi}{K-1}<\frac{9\pi}{K+1}.$
 Ebből következik, hogy $\frac54<K<\frac43$. Amennyiben $K>1{,}33$, akkor az ötödiknél hamarabb , $K<1{,}25$ esetén pedig az ötödiknél később következik be az első ,,szembetalálkozás''. Mivel $\ell_1/\ell_2=K^2$, a fonalak hosszának arányára a
 $\frac{25}{16}<\frac{\ell_1}{\ell_2}<\frac{16}9$
 megszorítást kapjuk.

**II. megoldás.**
 Mivel a harmonikus rezgőmozgás felfogható az egyenletes körmozgás vetületeként, a feladat átfogalmazható a következő módon: Egy $R$ sugarú, kör alakú futópálya egyik átmérőjének két végpontjából elindul egy-egy futó, sebességük $v$ és $Kv$. Hol találkoznak, ha ugyanabban az irányban, illetve ha ellentétes irányban járják be a pályát?
 Ellentétes körüljárás esetén a találkozás feltétele:
 $vt+Kvt=R\pi +(n-1)2R\pi=(2n-1)R\pi,\qquad (n=1,2,3,\ldots),$
 vagyis
 $\frac{vt}{R}=\alpha_n=(2n-1)\frac{\pi}{K+1}.$
 A futók ilyenkor egymással szembe mozogva találkoznak.
 Ha a futók ellentétes irányban indulnak el, akkor a találkozásuk feltétele:
 $Kvt=vt+R\pi +(n-1)2R\pi=vt+(2n-1)R\pi,\qquad (n=1,2,3,\ldots),$
 vagyis
 $\frac{vt}{R}=\beta_n=(2n-1)\frac{\pi}{K-1}.$
 A futók ilyenkor azonos irányban mozogva találkoznak, az egyik ,,lehagyja'' a másikat.
 A továbbiakban (az ingák hosszából kiszámítható) $\frac{v}{R}=\omega_1=6{,}26~\frac{1}{\rm s}$ értéket felhasználva az I. megoldásban ismertetett eredményeket kapjuk.
