---
id: komal-P4965
source: komal
language: hu
translated: false
problem: komal-P4965
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az energiamegmaradás törvénye szerint abban a helyzetben, amikor az $\ell$ hosszúságú gyöngysor $x\ell$ hosszú darabja ($\tfrac12>x>0$) még a vízszintes asztallapon van, a többi (tehát $\ell-x\ell$ hosszúságú) része pedig függőleges, a gyöngysor minden darabkájának sebessége $\sqrt{4x^2-8x+3}$-mal arányos, a vízszintes darab lendülete pedig az $x\sqrt{4x^2-8x+3}$ kifejezéssel arányos. Ez a lendület $x$ csökkenésével kezdetben növekszik, ezt a lánc többi részének húzóereje okozza. Egy bizonyos $x_0$-tól kezdve azonban a lendület csökkenő $x$-ekre csökkenni kezdene, ez azonban csak úgy következhet be, ha az addig függőleges gyöngysordarab hullámossá válik és ,,visszafelé'' ható erőt is ki tud fejteni. A hullámzás kezdetét a vízszintes irányú lendület szélsőértéke (maximuma) határozza meg. Ezt numerikus vagy grafikus módszerrel, illetve differenciálszámítással határozhatjuk meg. A szélsőérték helye: 
 $x_0=\frac{3-\sqrt{3}}{4}\approx 0{,}317,$ 
 tehát a hullámosodás akkor indul be, amikor a gyöngysornak mintegy 32 százaléka van még az asztalon.
