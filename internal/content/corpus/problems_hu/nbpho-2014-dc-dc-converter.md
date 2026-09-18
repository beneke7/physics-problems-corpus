---
id: nbpho-2014-dc-dc-converter
source: nbpho
native_id: "2014 P1 DC-DC CONVERTER"
year: 2014
language: hu
translated: true
topic: [electromagnetism]
subtopic: [dc-circuits, inductors, diodes, switching]
math_tools: []
format: open-ended
points: 8
core_ideas: []
has_figure: true
figure_files: [nbpho-2014-dc-dc-converter-fig1.jpg]
provenance_note: "NBPhO 2014 (Északi-Balti Fizika Olimpia), 1. feladat. Mathpix OCR born-digital PDF-ből (cache/phoxiv/nbpho/2014.pdf)."
verification_status: pending
links_en: nbpho-2014-dc-dc-converter
---
**1. DC-DC KONVERTER (8 pont)**

Ahhoz, hogy nagy feszültségű energiaforrást nyerjünk egy akkumulátorból, az alábbi kapcsolást használjuk.

![ábra](../../figures/nbpho/figures/nbpho-2014-dc-dc-converter-fig1.jpg)

Egy elektromágneses kapcsoló $K_{1}$ egy $\mathscr{E}$ elektromotoros erőjű akkumulátort csatol egy $L$ induktivitású induktor-hoz: zárt helyzetben van, ha az induktor árama nulla (egy rugó tartja ezt az állapotot), de ha az induktor árama elér egy $I_{0}$ kritikus értéket, az induktor által létrehozott mágneses tér megnyitja. A tehetetlenség miatt, ha a kapcsoló nyitott, akkor még ha az áram nullára csökken is, egy $\tau_{K}$ ideig szükséges, hogy újra bezáruljon.

A $D$ dióda esetén feltételezzük, hogy az árama nulla minden negatív feszültség esetén $\left(V_{D}<0\right.$ ), valamint minden olyan pozitív feszültség esetén, amely kisebb az $V_{0}$ nyitófeszültségnél (azaz $0<V_{D}<V_{0}$ ). Nullától különböző előrecsatolt áram esetén a dióda feszültsége $V_{D} = V_{0}$.

A válaszokat a $L, \mathscr{E}, I_{0}, V_{0}$ és a $C$ kapacitás (az ábrán látható) segítségével fejezze ki.

**i)** *(1 pont)* Kezdetben a $K_{2}$ kapcsoló nyitott. Ha az induktor kezdeti árama nulla, akkor mennyi idő $\tau_{L}$ szükséges a $K_{1}$ kapcsoló megnyitásához?

**ii)** *(1 pont)* Feltételezve (és a továbbiakban is feltételezve), hogy $L / R \ll \tau_{K} \ll \tau_{L}$, rajzolja meg az induktor áramát az idő függvényében $t$ esetén ($0 \leq t<3 \tau_{L}$ ).

**iii)** *(1 pont)* Mekkora a maximális $V_{\mathrm{max}}$ feszültség az $R$ ellenálláson?

**iv)** *(2 pont)* Feltételezve, hogy $V_{\max} \gg V_{0}$, mekkora az átlagos teljesítményleadás a dióda?

**v)** *(2 pont)* Most legyen a $K_{2}$ kapcsoló zárt, és feltételezzünk egyszerűsítésként, hogy $V_{0}=0$; valamint $R C \gg \tau_{L}$ és $\tau_{K}>\pi \sqrt{L C}$. Tegyük fel, hogy a kapcsolás nagyon hosszú ideig üzemel. Határozza meg az ellenálláson átlagos feszültséget.

**vi)** *(1 pont)* Határozza meg az ellenálláson a feszültség amplitúdóját.