---
id: "kevin-zhou-e4-ex005"
source: "kevin-zhou"
native_id: "KZ-E4-EX005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-e4-ex005"
topic: [magnetosztatika]
subtopic: [mágneses dipólusok, mágneses energia, indukció]
math_tools: [megmaradási törvények]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E4.txt"
source_url: "sources/kevin_zhou/site/handouts/E4.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Példa 5

  Ha egy mágnest egy asztal fölött tartunk, fel tud venni egy gemkapcsot. Ha a gemkapcsot eltávolítjuk, ugyanilyen könnyen fel tud venni egy másikat is, és ez a folyamat látszólag a mágnesre gyakorolt bármilyen hatás nélkül a végtelenségig folytatható. Mivel a mágnes minden gemkapcson munkát végez, nem jelenti-e ez azt, hogy az állandó mágnes kimeríthetetlen energiaforrás?

  Megoldás
  Ez a kérdés jól mutatja, miért tűnnek olyan rejtélyesnek a mágnesek. A gravitáción kívül lényegében ez az egyetlen, a mindennapokban tapasztalható, nagy hatótávolságú erő (Kepler például egy időben úgy gondolta, hogy a Nap óriási mágnesként hat a bolygókra), ezért számtalan örökmozgó-kísérletet ihlettek. Évszázadokon át sokan éveket áldoztak életükből arra, hogy ennek a példának a továbbfejlesztett változatait működőképessé tegyék.

  Ahhoz, hogy lássuk, miért nem működik ez rúdmágnessel, egyszerűen helyettesítsük a „mágnes” szót a „töltés” szóval. Valóban, egy pozitív töltés magához vonzhat egy negatív töltést. Ha ezután eltávolítjuk a negatív töltést, a pozitív töltés ugyanígy magához vonzhat egy másik negatív töltést. Az energiamegmaradás azonban nem sérül, mert a pozitív töltés által kifejtett erő konzervatív: a negatív töltés közel húzásakor végzett munka pontosan ellentétes azzal a munkával, amelyet egy külső erőnek kell végeznie az eltávolításához. A mágnes gemkapocsra kifejtett ereje szintén konzervatív.

  Érdemes egy kissé eltérő esetet is megvizsgálni. A rúdmágnessel ellentétben egy elektromágnes (azaz hurokban folyó árammal létrehozott mágnes) egy kapcsoló átbillentésével be- és kikapcsolható. Ezért felmerülhet, hogy a következő elrendezés örökmozgó:

     1. Kapcsoljuk be az elektromágnest, ami E0 energiába kerül.

     2. Emeljünk fel vele egy gemkapcsot, ezzel mgh-val növelve a helyzeti energiáját.

     3. Kapcsoljuk ki az elektromágnest, ami E0 energiába kerül, miközben a gemkapcsot tartjuk.


                                                  8
    Kevin Zhou                                                              Physics Olympiad Handouts



          4. Távolítsuk el a gemkapcsot; sikerült ingyen magasabbra emelnünk.

       A probléma megértéséhez jegyezzük meg, hogy a mágnes és a gemkapocs közötti vonzóerő azért jön létre, mert a mágnes mágneses dipólusmomentumot indukál a gemkapocsban, ami (m·∇)B erőhöz vezet. Amikor a gemkapocs a mágnes felé mozog, saját dipólusmomentuma miatt megváltozik az elektromágnesen áthaladó mágneses fluxus, így az árammal ellentétes elektromotoros erő keletkezik. Ezért az elektromágnes áramának állandó értéken tartása többletenergiát igényel. Mivel a qv × B Lorentz-erő nem végez munkát, ennek az energiának pontosan mgh-nak kell lennie, tehát semmi sem jár ingyen.

       Megjegyzés
       Az iránytű mágneses tűje lényegében egy kis mágneses dipólus, amelynek dipólusmomentuma a pirosra festett vége felé mutat. A Föld mágneses terét szintén közelíthetjük dipólustérrel.




       Mivel ennek a dipólustérnek az érintőirányú komponense észak felé mutat, az iránytű piros vége a földrajzi északi pólus felé mutat, amely a Föld mágneses déli pólusa.

       Egyébként az Amerikában vagy Európában való használatra beállított olcsó iránytű Ausztráliában nem működik jól. Ennek oka, hogy a Föld mágneses terének radiális komponense is van, amely felfelé vagy lefelé billenti az iránytű tűjét. A tűt megfelelően ki kell egyensúlyozni, hogy vízszintes maradjon és szabadon foroghasson, de a súlyozandó oldal a két féltekén különbözik.
