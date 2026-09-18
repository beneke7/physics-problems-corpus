---
id: komal-G791
source: komal
language: hu
translated: false
problem: komal-G791
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A megadott formula szerint a labdák tömege:
 $m_1=m_0,\quad m_2=\frac13 m_0,\quad \ldots$
 Tekintsük először az $n=2$ esetet. Az alsó labda $v_0$ sebességgel pattan fel a talajról, majd ütközik a lefelé $v_0$ sebességgel mozgó felső labdával. Ha ezután az alsó labda megáll, a felső pedig $2v_0$ sebességgel kezd el mozogni felfelé, akkor a tökéletesen rugalmas ütközés lendület- és energiamegmaradási törvénye szerint
 $-m_2 v_0+m_1v_0=m_2\cdot(2v_0),$
 illetve
 $\frac12 m_2v_0^2+\frac12 m_1v_0^2=\frac12 m_2(2v_0)^2.$
 Mindkét feltétel teljesül, ha
 $\frac{m_2}{m_1}=\frac13,$
 ami valóban fennáll, tehát $n=2$-re a mutatvány sikeres.
 Tételezzük fel, hogy $n-1$ labdával a mutatvány a leírt módon bemutatható, és vizsgáljuk meg, milyen tömegarány esetén lesz a mutatvány sikeres $n$ labdával is. Ismét a megmaradási törvényeket írjuk fel:
 $-m_nv_0+m_{n-1}\cdot(n-1)v_0=m_n\cdot (nv_0),$
 valamint
 $\frac12 m_nv_0^2+\frac12 m_{n-1}(n-1)^2v_0^2=\frac12 m_n(nv_0)^2.$
 Mindkét feltétel teljesül, ha
 $m_n=\frac{n-1}{n+1}m_{n-1},$
 ami valóban fennáll, hiszen a megadott formula szerint
 $m_n= \frac{2m_0}{n(n+1)}\qquad\text{és}\qquad
m_{n-1}= \frac{2m_0}{(n-1)n}.$
 Ezzel beláttuk, hogy a mutatvány – elvben – akárhány labdával sikeres lehet.

 Megjegyzés. Túlságosan sok labda nyilván nem helyezhető el ,,pontosan'' egymás tetejére, így ha $n\gg2$, a mutatvány a labdák oldalirányú szétrepülése miatt még a legügyesebb elméleti fizikusnak sem fog sikerülni.
