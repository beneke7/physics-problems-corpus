---
id: komal-P5203
source: komal
language: hu
translated: false
problem: komal-P5203
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 A fény pályájának egyenletét 
 $(1)$ $z(x)=A\cos(kx)$ 
 alakban adhatjuk meg, ahol $k=\frac{2\pi}{\lambda}$ ($\lambda$ a koszinuszgörbe egyelőre még ismeretlen ,,hullámhossza''). 
 A Snellius–Descartes-törvény általánosított alakja szerint a rétegenként állandó, de a rétegekre merőleges irányban folytonosan változó törésmutató esetén is érvényes az 
 $(2)$ $n(z)\cdot \cos\varphi=K=\text{állandó}$ 
 összefüggés, amelyben $\varphi$ a görbe érintőjének az $x$ tengellyel bezárt szöge. Ennek a szögnek a tangense a görbe – helyről helyre változó – meredekségével, vagyis az $n(z)$ függvény deriváltjával egyezik meg. Ez a meredekség (a deriválás szabályaiból, vagy egy analógia, a harmonikus rezgőmozgás ismert út- és sebességfüggvényének vizsgálatából adódóan) 
 $\tan\varphi=-Ak\sin(kx), $ 
 ami (1) szerint így is írható: 
 $(3)$ $\tan\varphi=-k\sqrt{A^2-z^2}.$ 
 Mivel 
 $(4)$ $\cos\varphi=\frac{1}{\sqrt{1+\tan^2\varphi}},$ 
 a törési törvény (2) összefüggése (3) és (4) felhasználásával így alakul: 
 $n(z)=K\sqrt{1+k^2(A^2-z^2)}.$ 
 Mivel $n(x=A)=n_0$ és $n(x=0)=n_1$, a $K$ és $k$ állandókat meghatározhatjuk: 
 $K=n_0 \qquad \text{és}\qquad k=\frac{1}{A}\sqrt{\left(\frac{n_1}{n_0}\right)^2-1}.$ 
 A törésmutató keresett alakja tehát 
 $n(z)=\sqrt{n_1^2-(n_1^2-n_0^2)\frac{z^2}{A^2}}=\sqrt{2{,}56-0{,}31\frac{z^2}{(1\,\rm cm)^2}},$ 
 és a fény pályagörbéjének hullámhossza: 
 $\lambda=2\pi\frac{n_0A}{\sqrt{n_1^2-n_0^2}}\approx 17~\rm cm.$ 

**II. megoldás.**
 A Maupertuis-elv (legkisebb hatás elve) szerint (lásd a P. 5066. feladat megoldását és a Variációs elvek a klasszikus és a kvantumfizikában c. cikket a KöMaL 2018. évi decemberi számában) a helyről helyre változó törésmutató és a fénypálya alakja között ugyanolyan összefüggés van, mint valamilyen erő hatására mozgó tömegpont helyről helyre változó sebességnagysága és a részecske pályagörbéje között. 
 A feladatban szereplő koszinuszgörbe alakú mozgás a klasszikus mechanikában úgy valósul meg, ha egy test $z$ tengely irányában harmonikus rezgőmozgást végez, miközben az $x$ tengely irányában egyenletesen halad: 
 $(5)$ $z(t)=A\cos(\omega t) \qquad\text{és}\qquad x=v_0t.$ 
 Az időt kiküszöbölve a pályagörbe egyenletéhez jutunk: 
 $(6)$ $z(x)=A\cos\frac{\omega}{v_0}x.$ 
 Ilyen mozgást egy olyan $D=m\omega^2$ rugóállandójú rugó képes létrehozni, ami a $z$ tengely irányában a kitéréssel arányos erőt fejt ki, de az $x$ tengely mentén szabad mozgást enged meg. Ebben az esetben az energiamegmaradás törvénye így írható fel: 
 $\frac12Dz^2+\frac12mv^2=E =\text{állandó},$ 
 vagyis 
 $(7)$ $v(z)= \sqrt{\frac{2E}{m} -\frac{D}{m}z^2}.$ 
 (Itt $v=\vert \boldsymbol v\vert$ a test teljes sebességének nagyságát jelöli.) Mivel $z=A$ esetben $v=v_0$, a teljes energia 
 $E=\frac12 mv_0^2+\frac12 DA^2,$ 
 és a test sebességének képlete: 
 $(8)$ $v(z)=\sqrt{v_0^2+\left(A^2-z^2\right)\omega^2}.$ 
 Az optikai Fermat-elv és a mechanikai Maupertuis-elv közötti hasonlóság alapján mondhatjuk, hogy a koszinusz alakú fénygörbe akkor valósulhat meg, ha a törésmutató a $z$ koordinátának ugyanolyan függvénye, mint $v(z)$, attól legfeljebb egy arányossági tényezőben térhet el. (Az arányossági tényező a Fermat-féle minimumelvben nyilván nem játszik szerepet.) Érvényes tehát, hogy 
 $(9)$ $n(z)=\alpha\sqrt{v_0^2+\left(A^2-z^2\right)\omega^2},$ 
 ahol $\alpha$ egy tetszőlegesen választható állandó. 
 Felhasználva a megadott $n(\pm A)=n_0$ és $n(0)=n_1$ értékeket, megkapjuk, hogy 
 $n_0=\alpha v_0 \qquad \text{és} \qquad n_1=\alpha\sqrt{v_0^2+A^2\omega^2},$ 
 vagyis 
 $v_0=\frac{n_0}{\alpha}, \qquad \text{továbbá} \qquad \omega= \frac{\sqrt{n_1^2-n_0^2}}{\alpha A}.$ 
 Ezeket visszahelyettesítve (9)-be kapjuk, hogy 
 $n(z)=\sqrt{n_1^2-(n_1^2-n_0^2)\frac{z^2}{A^2}},$ 
 és a fénypálya hullámhossza (6) szerint: 
 $\lambda=2\pi \frac{v_0}{\omega}= 2\pi\frac{n_0A}{\sqrt{n_1^2-n_0^2}}.$
