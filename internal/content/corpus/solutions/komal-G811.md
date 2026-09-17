---
id: komal-G811
source: komal
language: hu
translated: false
problem: komal-G811
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás**
. Legyen a három hasáb tömege (jobbról balra haladva) $m_1$, $m_2$ és $m_3$, az összekötő fonalakban ébredő fonálerőket pedig jelöljük így: $K_1$ és $K_2$. A rendszer gyorsulása: 
 $a=\frac{F-\mu(m_1+m_2+m_3)g}{m_1+m_2+m_3}.$ 
 A harmadik hasáb gyorsulását így is felírhatjuk: 
 $a=\frac{K_2-\mu m_3g}{m_3},$ 
 majd a kétféleképpen felírt gyorsulást egyenlővé téve megkaphatjuk az egyik kérdéses fonálerőt: 
 $K_2=\frac{m_3}{m_1+m_2+m_3}F.$ 
 Vegyük észre, hogy a fonálerő egyáltalán nem függ $\mu$-től. Tovább folytatva – az előzőekhez hasonlóan – az első és a második hasáb gyorsulását is felírhatjuk: 
 $a=\frac{F-K_1-\mu m_1g}{m_1},$ 
 illetve 
 $a=\frac{K_1-K_2-\mu m_2g}{m_2}.$ 
 Ezek után akár háromféleképpen is kiszámíthatjuk a még hiányzó fonálerőt, de szerencsére akárhogyan is tesszük, ugyanarra az eredményre jutunk: 
 $K_1=\frac{m_2+m_3}{m_1+m_2+m_3}F.$ 
 Láthatjuk, hogy ez a fonálerő sem függ $\mu$-től. 

 Megjegyzések. Ha már tudja az ember az eredményt, akkor könnyű egyszerűbb magyarázatot adni a kérdésre, hogy miért is nem függ a fonálerő a súrlódástól. Képzeljük el, hogy csak egy hosszú hasábunk van, és ezt húzzuk $F$ erővel. Képzeletben szeleteljük fel a hosszú hasábot sok kis részre, és a részeket kössük össze fonalakkal. A legelöl lévő darabot $F$ erővel húzzuk, az utolsót pedig lényegében nulla erővel. A fonalakban ható erők egyenesen arányosak azzal, hogy milyen ,,messze'' vannak a ,,vonat'' végétől, függetlenül attól, hogy mekkora a $\mu$. (Ha $m$ tömeg van ,,mögöttünk'', és az egész ,,vonat'' $M$ tömegű, akkor az aktuális fonálerő: $K=\tfrac{m}{M}F$.) Ennek oka az, hogy azonos gyorsulás esetén nemcsak az eredő erő arányos a tömeggel (Newton második törvénye szerint), hanem azonos súrlódási együttható esetén a súrlódási erő is arányos a tömeggel. 
 Észrevehetjük azt is, hogy eredményünk független attól, hogy a hasábok előrefelé gyorsulnak, vagy visszafelé lassulnak, sőt akár egyenletesen is mozoghatnak.
