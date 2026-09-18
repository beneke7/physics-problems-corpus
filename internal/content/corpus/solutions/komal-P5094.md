---
id: komal-P5094
source: komal
language: hu
translated: false
problem: komal-P5094
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 $a)$ Amikor a testek sebessége maximális, akkor a sebességük nagysága nem változik, tehát a rájuk ható eredő erőnek nincsen a sebességükkel párhuzamos komponense.
 Az elrendezés szimmetriája miatt a három test mindig szabályos háromszöget alkot, melynek oldalai
 $\ell=\sqrt{3}L\sin\varphi $
 hosszúságúak, ahol $\varphi$ a fonalaknak a függőlegessel bezárt szöge. (Kezdetben $\varphi=\alpha$ és $\ell=a$.)
 Tekintsük az egyik testet, amely $L$ sugarú körpályán mozog. A testre függőlegesen lefelé $mg$ nehézségi erő, vízszintes irányban (a másik két test által kifejtett) $\sqrt{3}kQ^2/\ell^2$ nagyságú elektrosztatikus taszítóerő hat. Ezek eredője a legnagyobb sebességnek megfelelő helyzetben fonál irányú, vagyis
 $mg\sin\varphi=\frac{kQ^2}{\sqrt{3}L^2\sin^2\varphi}\cos\varphi$
 teljesül. Ezt az egyenletet
 $\sin^3\varphi=\lambda\,\cos\varphi$
 alakban is felírhatjuk, ahol
 $\lambda=\frac{kQ^2}{\sqrt{3}mgL^2}=1{,}27.$
 A fenti egyenlet $x=\tan\varphi$ helyettesítéssel harmadfokú egyenletté alakítható:
 $x^2-1{,}27x^2-1{,}27=0,$
 amelynek egyetlen valós gyöke $x=1{,}704$, azaz
 $\varphi=59{,}6^\circ\approx 60^\circ.$
 $b)$ A testek legnagyobb sebességét a rendszer összes (mozgási + gravitációs + elektrosztatikus) energiájának állandóságából határozhatjuk meg.
 $-3mgL\cos\alpha+3\frac{kQ^2}{\sqrt{3}L\sin\alpha}=3\cdot\frac{1}{2}mv^2-3mgL\cos\varphi+3\frac{kQ^2}{\sqrt{3}L\sin\varphi},$
 innen az ismert, illetve már kiszámított adatok behelyettesítése után kapjuk, hogy
 $v=1{,}67~\frac{\rm m}{\rm s}.$

**II. megoldás.**
 Az energiamegmaradás tétele szerint (lásd az I. megoldást)
 $\frac{v^2}{6gL}=\left(\cos\varphi- \frac{\sqrt{3}}{2}\right)+\lambda
\left(2-\frac{1}{\sin\varphi}\right) \equiv f(\varphi).$
 $a)$ A legnagyobb sebességű helyzetben az $f(\varphi)$ deriváltja eltűnik:
 $-\sin\varphi+\lambda\frac{\cos\varphi}{\sin^2\varphi}=0,$
 melynek numerikus megoldása (lásd pl. www.wolframalpha.com ): $\varphi=\varphi_0=59{,}6^\circ.$
 $b)$ A maximális sebesség: $v=\sqrt{2gL\cdot f(\varphi_0)}=1{,}67~\frac{\rm m}{\rm s}.$
