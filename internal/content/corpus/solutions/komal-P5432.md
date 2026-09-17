---
id: komal-P5432
source: komal
language: hu
translated: false
problem: komal-P5432
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Legyen a gyöngyök tömege $m$, töltésük $Q$, az alsó és a fölötte lévő gyöngy távolsága $d$, a legfelső és az alatta lévő gyöngy közötti távolság pedig $xd$ ($x$ a keresett arányszám). 
 Egyensúlyi állapotban bármelyik gyöngyre ható erők eredője nulla . Az erőegyensúly feltétele a középső gyöngyre 
 $k\frac{Q^2}{d^2}=k\frac{Q^2}{(xd)^2}+mg, $ 
 a felső gyöngyre pedig 
 $mg=k\frac{Q^2}{(xd)^2}+k\frac{Q^2}{(x+1)^2d^2}. $ 
 A fenti két egyenletet összeadva $mg$-t kiküszöbölhetjük, majd $kQ^2/d^2$-tel való egyszerűsítés után ezt kapjuk: 
 $1=\frac2{x^2}+\frac1{(x+1)^2}.$ 
 Ezt az egyenletet numerikusan megoldva (lásd pl. https://www.wolframalpha.com/ ) látjuk, hogy annak valós, pozitív gyöke: 
 $x=1{,}5386\approx 1{,}5.$ 
 A felső gyöngy tehát kb. másfélszer messzebb lesz a középsőtől, mint az a legalsótól. Ez az arány nem függ sem a gyöngyök tömegétől, sem pedig a töltésüktől, ha azok egyforma nagyságúak.
