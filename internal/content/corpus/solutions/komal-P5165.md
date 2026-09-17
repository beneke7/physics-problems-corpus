---
id: komal-P5165
source: komal
language: hu
translated: false
problem: komal-P5165
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a $k$-adik kivágott kör sugarát $r_k$-val, tömegét $m_k$-val, a középpontjának távolságát az eredeti (tömör) körlemez középpontjától pedig $x_k$-val. Legyen továbbá a maradék lemez tömege $k$ darab kis kör kivágása után $M_k$. A távolságokat olyan egységekben számoljuk, amelyben az eredeti kör sugara 1, és a tömegeket is olyan módon adjuk meg, hogy az eredeti körlemez tömegének nagysága éppen 1 legyen. 
 A feladat szövege szerint 
 $r_1=\frac14,\quad r_2=\frac18,\quad \ldots \quad r_k=\frac1{2^{k+1}}.$ 
 Ebből számíthatóan 
 $m_1=\frac1{16},\quad m_2=\frac1{64},\quad \ldots \quad m_k=\frac1{4^{k+1}}.$ 
 A kivágott lemez tömege: 
 $M_1=1-m_1=\frac{15}{16},\quad M_2=1-m_1-m_2=\frac{59}{64},$ 
 és általában 
 $M_k=1-\sum_{i=1}^k m_k=\frac1{12}\left(11+\frac1{4^k}\right).$ 
 Szükségünk lesz még az $x_k$ távolságokra is. 
 $x_1=r_1=\frac14, \quad x_2=2r_1+r_2=\frac58,\qquad \ldots\qquad x_k=1-3r_k=1-\frac3{2^{k+1}}.$ 
 Jelöljük $s_k$-val a $k$ lyukat tartalmazó maradék idom tömegközéppontjának az eredeti kör középpontjától mért távolságát $s_k$-val. A feladatunk $s_1$, $s_2$ és a nagyon nagy $k$-hoz tartozó $s_k \rightarrow s^*$ értékének meghatározása. 
 Helyezzük (gondolatban) a lyukas idomot vízszintes helyzetben egy, az eredeti kör középpontján átmenő és a feladat ábráján bejelölt sugárra merőleges tengelyre. Az idom jobbra el fog billenni, hiszen $M_kgs_k$ forgatónyomaték hat rá. Ha ezt a forgatónyomatékot ki tudjuk számolni, abból már leolvashatjuk $s_k$ értékét is. 
 Rakjuk vissza (gondolatban) a kivágott kis körlemezeket, és számítsuk ki az eredő forgatónyomatékukat. Ez éppen a lyukas lemez forgatónyomatékával lesz egyenlő, hiszen a tömör körlemez az átmérőjére, mint forgástengelyre nézve egyensúlyban van. Ezek szerint fennáll, hogy 
 $M_kgs_k=m_1gx_1+m_2gx_2+\quad \ldots\quad m_kgx_k.$ 
 Nem túl nagy $k$-kra $s_k$ ,,nyers erővel'' kiszámolható: 
 $s_1=\frac{m_1x_1}{M_1}=\frac1{60}\approx 0{,}017,$ 
 $s_2=\frac{m_1x_1+m_2x_2}{M_2}=\frac{13}{472}\approx 0{,}027,$ 
 és így tovább. 
 Az $m_k$ és $x_k$ mennyiségek fentebb megadott általános képletének ismeretében (a megfelelő mértani sorok összegzésével) a $k\rightarrow\infty$ határesetet is kiszámíthatjuk: 
 $s^*=\frac{\sum\limits_{i=1}^\infty m_ix_i}{1-\sum\limits_{i=1}^\infty m_i}=\frac{5}{154}\approx 0{,}032. $
