---
id: komal-P4896
source: komal
language: hu
translated: false
problem: komal-P4896
figure_files: [komal-P4896-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a szélsebesség vektorát $\boldsymbol c$-vel, repülő sebességét a levegőhöz képest $\boldsymbol v$-vel, az elmozdulásvektort pedig $\boldsymbol d$-vel. A szél iránya zárjon be $\alpha$ szöget az észak-déli iránnyal! (Szembeszélnél $\alpha=180^\circ$, hátszélnél $\alpha=0$, északkeleti szélben pedig odafelé $135^\circ$, visszafelé $45^\circ$. 

 A repülőút $t$ idejét az ábrán látható vektorháromszögből kaphatjuk meg, ha alkalmazzuk a koszinusztételt. 
 $v^2t^2=c^2t^2+d^2-2dct\cos\alpha,$ 
 ahonnan a számunkra értelmes megoldás: 
 $t=d\frac{\sqrt{v^2-c^2\sin\alpha}-c\cos\alpha}{v^2-c^2}.$ 
 A szembeszélnek és a hátszélnek megfelelő adatokból 
 $3~\text{óra}=\frac{d}{v-c},$ 
 $2~\text{óra}=\frac{d}{v+c},$ 
 amiből $v=5\,c$ és $d=v\cdot 2{,}4~$óra következik. (Látható, hogy szélcsendes időben a repülőgép 2,4 óra alatt érne az egyik helytől a másikig. 
 Más szélirány esetén a repülési idő (órában kifejezve): 
 $t=\frac{\sqrt{25-\sin^2\alpha}-\cos\alpha}{2},$ 
 innen az $135^\circ$-hoz és $45^\circ$-hoz tartozó repülési idők: 2,83 óra és 2,12 óra. 
 Északkeleti szélben tehát összesen 4,95 óra hosszú a repülési idő, ez csak nagyon kicsit tér el az északi szélben történő oda-vissza repülés teljes idejétől.

![solution figure](../../raw_html/komal_figures/komal-P4896-sol-fig1.gif)
