---
id: komal-G841
source: komal
language: hu
translated: false
problem: komal-G841
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az energiaminimumra való törekvés miatt a gumikarika minél kisebb hosszúságot akar elérni, hiszen így tudja minimalizálni a rugalmas energiát. Adott keresztmetszeti terület esetén a kör alak eredményezi a legkisebb kerületet, ezért veszi fel a köteg (közelítőleg) a henger alakot.
 A hurkapálcák szoros illeszkedésű hatszöges formát képeznek, de nem biztos, hogy teljes lesz a rendeződés. A keresztmetszetet vizsgálva minden hurkapálcához tartozik egy köré írható, szabályos hatszög, és ideális esetben ezek a hatszögek hézag nélkül töltik ki a keresztmetszetet. Ha a hatszög oldalélei egységnyiek, akkor a hatszög területe $\tfrac{3\sqrt{3}}{2}$, míg a beírható kör (ami maga a hukapálca) területe $\tfrac{3}{4}\pi$. A kettő aránya: $\tfrac{\pi}{2\sqrt{3}}=0,907$, vagyis az úgynevezett kitöltési tényező nagyjából 90%.
 A fentiek alapján alulról megbecsülhető a köteg sugara. Ha például 25 darab 2 mm átmérőjű hurkapálca alkotja a köteget, akkor a keresztmetszeti körök teljes területe $25\pi\,\mathrm{mm^2}$, és ezt az értéket kell $\tfrac{\pi}{2\sqrt{3}}$-mal elosztanunk, hogy megkapjuk a hibamentesen illeszkedő köteg keresztmetszetének a területét: $50\sqrt{3}\,\mathrm{mm^2}$. A köteg természetesen még ideálisan, vagyis hibamentesen szoros illeszkedés esetén sem pontosan kör keresztmetszetű, de egy körrel jól közelíthető. A számítást elvégezve azt kapjuk, hogy a 25 pálcából álló köteg átmérője legalább $10{,}5\,\mathrm{mm}$.
