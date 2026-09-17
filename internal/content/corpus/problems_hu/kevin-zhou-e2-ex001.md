---
id: "kevin-zhou-e2-ex001"
source: "kevin-zhou"
native_id: "KZ-E2-EX001"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-e2-ex001"
topic: [elektrosztatika]
subtopic: [tükörtöltések módszere, vezetők, határfeltételek]
math_tools: [geometria és trigonometria]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E2.txt"
source_url: "sources/kevin_zhou/site/handouts/E2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

1. példa

         Két földelt vezető fél-sík metszi egymást, így hengerkoordinátákban a síkok egyenlete
         θ = 0, illetve θ = θp = π/2. A síkok közé valahol egy q töltést helyezünk. Alkalmazható-e
         a tükörtöltések módszere a töltésre ható erő meghatározására? Mi a helyzet θp = 2π/3,
         illetve általános θp esetén?

         Megoldás
         Az első eset három tükörtöltéssel oldható meg. Legyen a valódi q töltés az (x, y) pontban.
         Ezután tükrözzünk a θ = 0 síkra, és helyezzünk el egy −q tükörtöltést az (x, −y) pontban,
         hogy teljesüljön a sík határfeltétele. Ezután tükrözzük a valódi töltést és ezt a tükörtöltést
         együtt a θ = π/2 síkra, hogy annak határfeltétele is teljesüljön; így egy −q tükörtöltést
         kapunk az (−x, y) pontban,


                                                        1
    Kevin Zhou                                                             Fizikaolimpiai feladatgyűjtemény



       valamint egy q tükörtöltést az (−x, −y) pontban.

       Ha azonban a másik sík θ = 2π/3-nél van, nincs működő tükörtöltés-konfiguráció. A
       konkrétság kedvéért tegyük fel, hogy a valódi töltés az y tengelyen lévő A pontban van.




       A θ = 0 síkra való tükrözés miatt egy −q tükörtöltésnek kell lennie D-ben; a θ = 2π/3
       síkra tükrözés egy q tükörtöltést eredményez E-ben, majd a θ = 0 síkra végzett újabb
       tükrözés egy −q töltést ad F-ben. Ez valódi töltés, mivel ugyanabban a tartományban van,
       mint A. Ez azonban nem megengedett: a tükörtöltések célja, hogy egy adott valódi
       töltésrendszer (azaz az A-ban lévő töltés) esetén egyszerűen kiszámíthassuk a vezető
       felületeken lévő árnyékoló töltések hatását, ezért az eljárás során nem vezethetünk be új
       valódi töltéseket. Ugyanerre a következtetésre jutunk akkor is, ha a síkra való tükrözéseket
       más sorrendben végezzük: mindig szükségünk van egy F-beli töltésre. Általánosabban a
       tükörtöltések módszere ebben a feladatban akkor és csak akkor működik, ha θp = π/n,
       ahol n egész szám.
