---
id: komal-P5564
source: komal
language: hu
translated: false
problem: komal-P5564
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelölje a labda tömegét $m$, sugarát $R$, ekkor a tehetetlenségi nyomatéka a középpontra vonatkoztatva $2mR^2/3$. A labda tömegközéppontját az (időfüggő) $S$ tapadási súrlódási erő gyorsítja:
 $S=ma_\textrm{TK}.$
 A tömegközéppontra nézve csak a súrlódási erőnek van forgatónyomatéka, ez hozza létre a labda $\beta$ szöggyorsulását:
 $RS=\frac{2}{3}mR^2\beta.$
 A fenti két egyenletből $S$ kiküszöbölésével kapcsolatot írhatunk fel $a_\textrm{TK}$ és $\beta$ között:
 $R\beta=\frac{3}{2}a_\textrm{TK}.$
 Mivel a labda nem csúszik meg, a legalsó pontjának érintőleges gyorsulása minden pillanatban megegyezik az ütő gyorsulásával:
 $a_\textrm{TK}+R\beta=a_\textrm{ütő},$
 amiből a korábbi eredményeinket felhasználva az
 $a_\textrm{TK}=\frac{2}{5}a_\textrm{ütő}$
 összefüggésre jutunk. Mivel mind a labda, mind az ütő nyugalomból indul, hasonló egyenlőség áll fenn a labda középpontjának sebessége és az ütő sebessége között, valamint a pillanatnyi elmozdulások között is:
 $v_\textrm{TK}(t)=\frac{2}{5}v_\textrm{ütő}(t),\qquad\Delta x_\textrm{TK}(t)=\frac{2}{5}\Delta x_\textrm{ütő}(t).$
 Vegyük észre, hogy ezek az összefüggések az ütő tetszőleges mozgása esetén fennállnak. Abban a speciális esetben, amikor az ütőt harmonikus rezgőmozgásra késztetjük, a labda tömegközéppontjának elmozdulása az idő függvényében:
 $\Delta x_\textrm{TK}(t)=\frac{2}{5}A\left[1-\cos(\omega t)\right],$
 ahol felhasználtuk a $\Delta x_\textrm{TK}(0)=0$, $v_\textrm{TK}(0)=0$ kezdeti feltételeket.
 A labda és az ütő relatív elmozdulása:
 $\Delta x_\textrm{rel}(t)=\Delta x_\textrm{ütő}(t)-\Delta x_\textrm{TK}(t)=\frac{3}{2}\Delta x_\textrm{TK}(t),$
 amely a $\Delta x_\textrm{TK}$-ra kapott korábbi eredményünk szerint $0$ és $6A/5$ között változik, tehát a keletkező grafitnyom hossza $6A/5$.
