---
id: komal-P5592
source: komal
language: hu
translated: false
problem: komal-P5592
figure_files: [komal-P5592-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A megoldás első lépéseként gondoljuk végig, hogy a kötél mely keresztmetszetében lép fel a minimális, illetve maximális húzóerő! Tudjuk, hogy erő csak a kötél irányában ébredhet, ebből következik, hogy a jobb oldali végpontban fellépő húzóerő éppen vízszintes. Mivel a felhalmozódott hó tömegéből származó erőhatás függőleges irányú, és más külső erő nem hat a rendszerre, a kötélben keletkező húzóerő vízszintes komponense minden keresztmetszetben megegyezik. Az előzőekből egyértelműen következik, hogy a minimális kötélerő éppen a jobb oldali végpontban lép fel, míg a maximális érték a bal oldali végpontban keletkezik (hiszen a kötél érintőjének meredeksége, és így a függőleges irányú erőkomponens itt a legnagyobb). 
 A fentiek alapján rajzoljuk fel a kötélre ható erőket, ezt szemlélteti az ábra . Jelölje a kötél bal oldali végpontját $A$, jobb oldali végpontját pedig $B$! Ekkor az $A$ pontban fellépő húzóerő komponensei legyenek $K_{A,y}$ és $K_{A,x}$, a $B$ pontban keletkező húzóerőt pedig jelölje $K_B$. A felhalmozódott hó hatását egy, a kötél vízszintes vetülete mentén lineárisan változó erőként kezelhetjük, melynek $f=\tfrac{\Delta F}{\Delta x}$ ,,intenzitása'' a kötél bal oldali végpontján zérus, jobb oldalán pedig 
 $f_\mathrm{max}=\varrho gdh_\mathrm{max}.$ 

 A továbbiakban vizsgáljuk a kötél, mint kiterjedt test egyensúlyát! Ekkor tudjuk, hogy a kötélre ható erők, valamint forgatónyomatékok eredőjének bármely pontra nézve zérusnak kell lennie. Felírva vízszintes irányban az erők eredőjére vonatkozó feltételt: 
 $K_{A,x}=K_B,$ 
 továbbá függőleges irányban: 
 $K_{A,y}=\frac{f_\mathrm{max}L}{2}=\frac{\varrho gdh_\mathrm{max}L}{2}.$ 
 Írjuk fel a testre ható forgatónyomatékokat az $A$ pontra: 
 $K_BH=\frac{f_\mathrm{max}L}{2}\cdot\frac{2}{3}L=\frac{f_\mathrm{max}L^2}{3},$ 
 beírva $f_\mathrm{max}$ kifejezését, majd $K_B$-re rendezve: 
 $K_B=\frac{\varrho gdh_\mathrm{max}L^2}{3H}.$ 
 Azaz a kötélben keletkező minimális húzóerő: 
 $K_\mathrm{min}=K_B=\frac{\varrho gdh_\mathrm{max}L^2}{3H},$ 
 a fellépő maximális erő pedig a Pitagorasz-tételt felhasználva: 
 $K_\mathrm{max}=\sqrt{K^2_{A,x}+K^2_{A,y}}=\frac{\varrho gdh_\mathrm{max}L}{6H}\sqrt{9H^2+4L^2}.$

![solution figure](../../raw_html/komal_figures/komal-P5592-sol-fig1.gif)
