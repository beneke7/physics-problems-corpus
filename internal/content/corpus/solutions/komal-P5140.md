---
id: komal-P5140
source: komal
language: hu
translated: false
problem: komal-P5140
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A fókusztávolságból és az üveg törésmutatójából kiszámíthatjuk a lencse domború oldalának görbületi sugarát: 
 $R=(n-1)f=1{,}35~\rm m.$ 
 A lencse és a plánparalel lemez közötti $d$ távolság az érintkezési pontjuktól $r$ távolságban a következő feltételből adódik: 
 $(R-d)^2+r^2=R^2,$ 
 ahonnan 
 $r^2=2 Rd-d^2\approx 2Rd,$ 
 azaz ($d\ll R$ esetén) 
 $d(r)\approx \frac{r^2}{2R}.$ 
 A plánparalel lemezen és a lencsén átmenő fény, valamint a résben kétszer visszaverődő, tehát $2d$-vel hosszabb úton haladó fény interferenciája akkor lesz ,,konstruktív'' (tehát egymást erősítő), ha 
 $2d=\frac{r^2}{R}=k\lambda,$ 
 ahol $\lambda$ az alkalmazott fény hullámhossza, $k$ pedig pozitív egész szám. (A fényvisszaverődések optikailag sűrűbb közegnél történnek, emiatt kétszer lép fel $180^\circ$-os fázisugrás, így összességében ezek figyelmen kívül hagyhatók.) A negyedik világos Newton-gyűrű ($k=4$) sugara: 
 $r_4=\sqrt{4\lambda R}=1{,}8~\rm mm.$ 
 Ha a lencsét kicsit, $d_0$ távolsággal elmozdítjuk a plánparalel lemeztől, az erősítés feltétele így módosul: 
 $2(d+d_0)=\frac{r_k^2}{R}+2d_0=k\lambda,$ 
 vagyis 
 $r_k=\sqrt{(k\lambda-2d_0) R}.$ 
 A Newton-gyűrűk sugara tehát lecsökken (a gyűrűk a középpont felé mozdulnak el), és bizonyos gyűrűk (amelyekre $k<2d_0/\lambda$) el is tűnnek.
