---
id: komal-P5032
source: komal
language: hu
translated: false
problem: komal-P5032
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A folyamatban részt vevő izotópok (semleges) atomtömege (5 tizedesjegy pontossággal) 
 $m_{\rm Rn}=220{,}011\,39~{\rm u};\qquad m_{\rm Po}=216{,}001\,91~{\rm u};\qquad m_{\rm He}=4{,}002\,60~{\rm u}. $ 
 A tömeghiány: 
 $\Delta M=m_{\rm Rn}-m_{\rm Po}-m_{\rm He}=0{,}006\,88~{\rm u}.$ 

 Megjegyzés: A fenti atomtömeg-értékek tartalmazzák a semleges atomokban található elektronok tömegét is, ez azonban a tömegkülönbségből kiesik, hiszen a folyamatban részt vevő elektronok száma nem változik. Emiatt $\Delta M$ megegyezik az atommagok tömegkülönbségével, tehát felhasználható a felszabaduló energia kiszámításánál is. 
 Vigyázat: Ha a héliumatom helyett az alfa-részecske $m_{\alpha}=4{,}0015\,\rm u$ tömegével számoljuk a tömeghiányt, de a többi izotópnál a semleges atomok tömegét írjuk be a képletbe, a 3. tizedesjegyben, vagyis a legelső értékes jegyben már hibás eredményt kapunk. 

 A radon radioaktív izotópjának $\alpha$-bomlása során felszabaduló energia: $\Delta E=\Delta M c^2$, ahol $c$ a fénysebesség. Mivel ez az energia nagyságrendekkel kisebb, mint az $\alpha$-részecske kb. $4~{\rm u}\cdot c^2$ nyugalmi energiája, a bomlástermékek mozgási energiáját számíthatjuk a klasszikus (newtoni) fizika képleteinek felhasználásával: 
 $\Delta E=\frac{1}{2}m_{\rm Po} v_{\rm Po} ^2+\frac{1}{2}m_\alpha v_\alpha ^2,$ 
 valamint 
 $m_{\rm Po} v_{\rm Po}- m_\alpha v_\alpha=0.$ 
 Ezek szerint a bomlás után visszamaradó polónium atommag sebessége 
 $v_{\rm Po}=c\sqrt{\frac{2\Delta M\cdot m_\alpha }{m_{\rm Po}\left( m_{\rm Po}+m_\alpha\right) }}\approx
c\sqrt{\frac{2\cdot 0{,}006\,88\cdot 4 }{216\cdot 220}}=0{,}001\,08~c=323~\frac{\rm km}{\rm s}.$
