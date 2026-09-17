---
id: komal-G917
source: komal
language: hu
translated: false
problem: komal-G917
figure_files: [komal-G917-sol-fig1.png, komal-G917-sol-fig2.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Osszuk fel az útvonalat $vT$ hosszúságú szakaszokra, és vizsgáljunk meg két egymást követő ilyen szakaszt. Amíg a szökevények megteszik a szakasz első felét (és ezt mutatja a tévé), addig a főmezőny megteszi az eggyel hátrább lévő szakasz első felét, amit nem mutat a tévé (hiszen ezt már korábban mutatták a szökevényekkel). Jön a váltás, és a vizsgált szakasz második felén nem mutatják a szökevényeket, mert ekkor a hátrébb lévő szakasz második felén van a főmezőny, amit mutat a tévé. 
 Mindezt egy alkalmasan választott út-idő diagramon is szemléltethetjük ( 1. ábra ). A kamerák bekapcsolt állapotát zöld, kikapcsolt állapotát piros vonal jelzi az út-idő diagramon. 

 1. ábra 

 Ezzel a módszerrel a szökevényeket $T/2$ ideig mutatják a szakaszok első felén, majd ugyancsak $T/2$ ideig mutatják a főmezőnyt, akik a szakaszok második felét teszik meg. A $v$ sebességgel mozgó (1. jelzésű) kamera egy $vT/2$ hosszúságú szakaszt mutat, majd a közvetítés átvált egy $vT$ távolsággal hátrább lévő (2. jelzésű) kamerára, és az ott kimaradt, szintén $vT/2$ hosszú szakaszt mutatja, majd megint visszavált a $vT$ távolsággal előrébb lévő kamerára. Ha a zölden jelzett, bekapcsolt állapotú kamerák út–idő vonalait az ábra ,,út'' tengelyére vetítjük, azok teljesen lefedik ezt a tengelyt, tehát teljesül az a rendezői utasítás, hogy az útvonal minden pontját legalább egyszer mutatni kell a tévén. 
 A 30 másodperces szabály miatt a $T$ idő nem lehet 60 s-nál rövidebb, de hosszabb lehet. Ha például $T$ legalább 120 s, akkor a $T$ időt negyedelni is lehet, hogy érdekesebb legyen a közvetítés. Ezt mutatja a 2. ábra . 

 2. ábra 

 A $v$ sebesség bármilyen lehet, a rendező kívánságait akármilyen kerékpáros sebesség mellett teljesíteni lehet.

![solution figure](../../raw_html/komal_figures/komal-G917-sol-fig1.png)

![solution figure](../../raw_html/komal_figures/komal-G917-sol-fig2.png)
