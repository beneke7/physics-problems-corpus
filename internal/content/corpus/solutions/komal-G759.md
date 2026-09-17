---
id: komal-G759
source: komal
language: hu
translated: false
problem: komal-G759
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás:**
 Ha egy álló, A jelű testnek tökéletesen rugalmasan nekiütközik egy másik (B jelű) test $v$ sebességgel, akkor a tömegüktől függően háromféle eset valósulhat meg: 
 $(i)$ Ha $m_A=m_B$, akkor $B$ megáll, A pedig $v$ sebességgel indul el. 
 $(ii)$ Ha $m_A>m_B$, akkor a B test $v$-nél kisebb sebességgel visszapattan, A pedig ugyancsak $v$-nél kisebb sebességgel indul el ,,előre''. 
 $(iii)$ Ha $m_A<m_B$, akkor a B test $v$-nél kisebb $v_1 $ sebességgel előrefelé mozog tovább, A pedig $v_1$-nél nagyobb sebességgel indul el előre. 
 (Az ,,előre'' és ,,hátra'' irányokat az álló testnek ütköző másik test korábbi sebességéhez viszonyítjuk.) 
 Számozzuk meg a 10 testet balról jobbra növekvő számokkal 1-től 10-ig. A sorozatos ütközések így zajlanak le: 
 – Az 1. test megáll, a 2. elindul $v$ sebességgel. 
 – A 2. test megáll, a 3. elindul $v$ sebességgel. 
 – A 3. test megáll, a 4. elindul $v$ sebességgel. 
 – A 4. test megáll, az 5. elindul $v$ sebességgel. 
 – Az $m$ tömegű 5. test ütközik a nála nagyobb tömegű 6. testtel. Az ütközés után az 5. test balra mozog $v_1<v$ sebességgel, a 6. pedig jobbra $v_2<v$ sebességgel. 
 – Az $m$ tömegű testek sorozatos ütközése után az 1. test végül balra fog mozogni $v_1<v$ sebességgel, a 2., 3., 4., és 5. test pedig megáll. 
 – Az $M$ tömegű testek sorozatos ütközése után a 6., 7., 8., megáll, a 9. pedig $v_2$ sebességgel nekiütközik a 10. testnek. 
 – Az ütközés után a 9. test jobbra fog mozogni $v_3<v_2$ sebességgel, a 10. pedig ugyancsak jobbra $v_4 > v_3$ sebességgel. 
 Összefoglalva: az ütközéssorozat végén a bal szélső test balra, a jobb szélső két test pedig jobbra fog mozogni, a többi pedig nyugalomban marad. 

 Megjegyzés. Az energia- és a lendületmegmaradás törvényét alkalmazva kiszámíthatjuk, hogy 
 $v_1=\frac{M-m}{M+m}v, \qquad v_3=\frac{2m(M-m)}{(M+m)^2}v \qquad \text{és}\qquad
v_4=\frac{4Mm}{(M+m)^2}v.$
