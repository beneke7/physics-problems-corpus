---
id: komal-P5227
source: komal
language: hu
translated: false
problem: komal-P5227
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ Bármelyik ellenállás-pár kihúzásának ugyanakkora az esélye, és mivel összesen 25 lehetőség van, az egyes valószínűségek nagysága $\frac1{25}$. A soros eredő nagysága az egyes ellenállások összege. Mivel 2 k$\Omega$-os vagy 10 k$\Omega$-os összeg csak egyféleképpen valósulhat meg, ezek valószínűsége: $p_2=p_{10}=\frac1{25}$. (A valószínűségek indexe az eredő ellenállás k$\Omega$-ban mért értékére utal.) A 3 k$\Omega$-os összeg kétféleképpen is kialakulhat ($1+2$ vagy $2+1$), és ugyanez igaz a 9 k$\Omega$-ra is, tehát $p_3=p_9=\frac2{25}$. Hasonló megfontolásból adódik, hogy $p_4=p_8=\frac3{25}$, $p_5=p_7=\frac4{25}$, és végül $p_6=\frac5{25}$. Természetesen a valószínűségek összegére teljesül, hogy 
 $\sum_{i=2}^{10}p_i=1.$ 
 $b)$ Párhuzamos kapcsolásnál az ellenállások reciproka adódik össze, ez adja meg az eredő reciprokát. Vegyük észre, hogy az egyes dobozokban található ellenállás-reciprokok számtani sorozatot alkotnak, így az előzőekben leírtak itt is alkalmazhatók. Az eredő csak úgy lehet 30 k$\Omega$, ha mindkét dobozból a legnagyobb ellenállást vesszük ki, ennek esélye $\frac1{25}=4\%$. A 20 k$\Omega$-os eredő kétféleképpen (60 és 30, illetve 30 és 60 $\Omega$-ból) alakulhat ki, ennek esélye tehát 8%. Hasonlóan adódik, hogy a 15 k$\Omega$-os eredő esélye 12%, a 12 k$\Omega$-osé 16%, és végül a 10 k$\Omega$-os eredőt 20% valószínűséggel kapjuk. Ezen valószínűségek összege 60%, az ezektől eltérő (10 $\Omega$-nál kisebb) eredő ellenállás kialakításának esélye tehát 40%.
