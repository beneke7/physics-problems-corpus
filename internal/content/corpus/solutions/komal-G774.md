---
id: komal-G774
source: komal
language: hu
translated: false
problem: komal-G774
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A becslést többféle módon is elvégezhetjük. A megadott sebességprofil grafikonon látszik, hogy az első 34 méteren a folyó sebessége nagyjából egyenletesen növekszik 0-ról 1 m/s-ra, ezen a szakaszon tehát számolhatunk 0,5 m/s-os átlagsebességgel. Az első 34 méteren, vagyis 34 s alatt a csónak 17 méternyit sodródna lefelé. A mozgás további $221-34=188$ méterén a víz sebessége jó közelítéssel állandó $1{,}1~$m/s-nak vehető, a sodródás nagysága tehát $1{,}1\cdot 188\approx 206$ méter, a teljes szakaszon pedig összesen kb. $223~{\rm m}\approx 220~{\rm m}$. (Ennél pontosabban nincs értelme az eredményt megadni, hiszen a becslésnél használt közelítés $\pm 10$ méteres hibát is okozhatott.)
 Egy másik eljárás: A táblázatban megadott $v_i$ értékeknek páronként képezzük a számtani közepét, és az így kapott
 $\overline{v_i}=\frac{v_i+v_{i+1}}{2}$
 átlagsebességgel számítjuk ki az $i$-edik szakaszhoz tartozó $d_i$ lesodródást. Így a becsült érték:
 $d=\sum_i d_i=\left(\frac{0+0{,}41}{2}+\frac{ 0{,}41+1{,}00}{2}+\frac{ 1{,}00+1{,}05}{2}+\cdots
+\frac{ 1{,}07+1{,}02}{2}\right)\,\frac{\rm m}{\rm s}\cdot (17~{\rm s}) \approx 230 ~\rm s.
$
 A harmadik eljárás az lehet, hogy a mérési adatokra (számítógép segítségével) egy ,,sima'' görbét illesztünk, és az ezt leíró $v(x)$ függvény integrálját számítjuk ki. Ennek részleteit azonban itt nem tárgyaljuk.
