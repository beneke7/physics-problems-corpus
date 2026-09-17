---
id: komal-P5230
source: komal
language: hu
translated: false
problem: komal-P5230
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Kezdetben egy-egy réteg vastagsága $1{,}5\cdot 10^{-3}$ m, és minden nyújtás és összehajtás során a vastagsága a felére csökken. A vas rácsállandója kb. $3\cdot10^{-10}$ m. Ha az atomi réteg vastagságát $n$ lépés után éri el, akkor 
 $1{,}5\cdot 10^{-3}=2^{-n}\cdot 3\cdot10^{-10}\rm,$ 
 vagyis 
 $n= \frac{\log\left(3\cdot10^{-10}\right)-\log\left(1{,}5\cdot 10^{-3}\right)}{\log 2}\approx 22.$ 

 Megjegyzés. A rétegelt acél különleges mechanikai tulajdonságait az egymást váltakozva követő hajlékony és merev lemezek adják. A folyamatot nem érdemes 22-nél többször megismételni, mert utána megszűnik a réteges szerkezet, és a lemez átlagos széntartalmú, homogén fémmé válik. Ha mondjuk 1000 atomrétegre becsüljük azt a vastagságot, amely még megőrzi a fém eredeti mechanikai tulajdonságát, akkor elegendő 10-szer kevesebbszer, azaz csak 12-szer elvégezni a hajtogatást és a kovácsolást, mert $2^{10} \approx 1000$.
