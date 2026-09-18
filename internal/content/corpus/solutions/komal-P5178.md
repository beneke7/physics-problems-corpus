---
id: komal-P5178
source: komal
language: hu
translated: false
problem: komal-P5178
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a lövedék – talajhoz viszonyított – kezdősebességének vízszintes sebességkomponensét $v_x$-szel, a függőleges összetevőt $v_y$-nal, a rugóban tárolt energiának mechanikai szempontból hasznosítható részét pedig $E$-vel.
 Az első esetben, amikor a kocsi rögzített, fennállnak a következő összefüggések:
 $(1)$ $\frac{1}{2}m\left(v_x^2+v_y^2\right)=E,$
 továbbá
 $(2)$ $\frac{v_y}{v_x}=\rm tg\,\alpha=\frac{1}{\sqrt{3}}.$
 Fejezzük ki $v_x$-et a (2) összefüggésből $v_y$ segítségével, és helyettesítsük azt (1)-be, majd számítsuk ki (ismertnek tekintett $E$ mellett) a lövedék függőleges irányú kezdősebességét:
 $v_x=\frac{v_y}{\tan\alpha}=\sqrt{3}v_y,$
 $v_y=\sqrt{\frac{E}{2m}}.$
 A lövedék emelkedési magassága (a ferde hajítás összefüggései szerint):
 $h_1=\frac{v_y^2}{2g}=\frac{E}{4mg}.$
 A második esetben a lövedék kilövése során a kiskocsi $u$ sebességgel visszalökődik. A vízszintes irányú lendület megmaradási törvénye szerint $u=v_x$. Az energiamegmaradás törvénye most így írható:
 $(3)$ $\frac{1}{2}m\left(v_x^2+v_y^2\right)+\frac{1}{2}mu^2=E,$
 továbbá a kilövés irányából adódó kényszerfeltétel:
 $(4)$ $\frac{v_y}{2 v_x}=\rm tg\,\alpha=\frac{1}{\sqrt{3}}.$
 (Felhasználtuk, hogy a visszalökődő kiskocsihoz viszonyítva a lövedék vízszintes irányú sebessége $v_x+u=2v_x$.)
 Fejezzük ki most is $v_x$-et a (4) összefüggésből $v_y$ segítségével, és helyettesítsük azt (3)-ba, majd számítsuk ki (ismertnek tekintett $E$ mellett) a lövedék függőleges irányú kezdősebességét:
 $v_x=\frac{v_y}{2\tan\alpha}=\frac{\sqrt{3}}{2}v_y,$
 $v_y=\sqrt{\frac{4E}{5m}}.$
 A lövedék emelkedési magassága most
 $h_2=\frac{2E}{5mg},$
 és a kérdezett arány:
 $\frac{h_2}{h_1}=\frac{8}{5}=1{,}6.$

 Megjegyzés. Első ránézésre furcsának tűnhet, hogy a lövedék emelkedési magassága a visszalökődő kocsi esetében nagyobb , mint a rögzített puskából kilőtt lövedéké, jóllehet az első esetben a rugóban tárolt energiának még a kocsi mozgási energiáját is fedeznie kell. A látszólagos ellentmondást a kényszerfeltételek különbözősége oldja fel. A visszalökődő kocsinál a lövedék vízszintes irányú sebessége $v_y$-hoz viszonyítva kisebb , mint a rögzített kocsinál, így (az emelkedési magasság szempontjából lényegtelen) vízszintes irányú mozgásnak megfelelő energia is kisebb lesz, mint a rögzített puska esetén.
