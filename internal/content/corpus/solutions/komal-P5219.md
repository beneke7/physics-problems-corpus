---
id: komal-P5219
source: komal
language: hu
translated: false
problem: komal-P5219
figure_files: [komal-P5219-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Mivel az oszlop látószöge kezdetben elég kicsi, az egyenes, függőleges oszlop magasságát jó közelítéssel helyettesíthetjük a megfelelő (100 m sugarú, $2{,}3^\circ$-os nyílásszögű) körív hosszával. Mivel $2{,}3^\circ=0{,}040~$radián, az oszlop magassága $\ell=100\cdot0{,}040= 4{,}0$ méter, a gém hossza pedig $2\ell=8{,}0$ méter. 
 Ahogy közeledünk a kúthoz, $t$ idő elteltével az oszloptól mért távolságunk (SI egységekben) $100-t$, A gém közepétől (az oszlop tetejétől) mért távolságunk $t$ idővel a rétre lépésünk után 
 $d(t)=\sqrt{(100-t)^2+(4-1{,}65)^2}.$ 
 A gém teljes látószögét $2\varphi(t)$-vel jelölve felírhatjuk, hogy 
 $(1)$ $\tg\varphi(t)=\frac{ \ell }{d(t)}=\frac{4{,}0}{\sqrt{(100-t)^2+ 5{,}52}}.$ 
 Mindaddig, amíg nem érünk a kút közvetlen közelébe (mondjuk a $0\le t \le 80~{\rm s}$ időintervallumban) a látószög így számolható: 
 $2\varphi\approx\frac{8}{100-t}~\text{radián}=\frac{4{,}6^\circ}{1-0{,}01\,t},$ 
 de $t\approx 10$ s-nál már a pontosabb (1) összefüggést kell alkalmaznunk. A gém legnagyobb látószöge (amikor éppen az oszlopnál vagyunk): $2\varphi_\text{max}\approx120^\circ.$ 

 Megjegyzés. Ekkora szöget a mozdulatlan szemünk már nem, vagy csak igen nehezen tud ,,befogni''. Ilyen és ezt meghaladó látószögű tárgyakat csak úgy észlelhetünk, ha a tekintetünk ide-oda cikázik.

![solution figure](../../raw_html/komal_figures/komal-P5219-sol-fig1.gif)
