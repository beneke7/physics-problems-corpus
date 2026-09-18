---
id: "kevin-zhou-t2-ex009"
source: "kevin-zhou"
native_id: "KZ-T2-EX009"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t2-ex009"
topic: [Hőtan]
subtopic: [hőerőgépek, hősugárzás, optimalizálás]
math_tools: [differenciálszámítás, optimalizálás]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T2.txt"
source_url: "sources/kevin_zhou/site/handouts/T2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T2-EX009

  Példa 9

  Egy műhold magjában nukleáris reaktor van, TH hőmérsékleten tartva. Tegyük fel, hogy a
  műhold külső felszíne valamilyen módon TC hőmérsékleten van tartva, és a műhold ideális
  hőerőgépet működtet, a magot és a külső felszínt meleg, illetve hideg hőtartályként használva. A külső felszínt
  ideális fekete testnek tekintsük, a világűr hőmérsékletét hanyagoljuk el. Milyen TC mellett maximális
  a kivett munka üteme?

  Megoldás
  Azt gondolhatnánk, hogy TC-nek a lehető legkisebbnek kell lennie a ciklus hatásfokának növeléséhez.
  Az alacsonyabb TC azonban a hőleadás Q̇out ütemének csökkenését jelenti, mivel a feketesugárzás kibocsátása
  korlátozza a folyamatot, ez pedig csökkenti a végzett munka Ẇ ütemét.

  A műhold által leadott hő üteme
                                        Q̇out = σATC4 ∝ TC4 .
  Ezért a végzett munka üteme

                                   TH               TC TH 4
                   Ẇ = η Q̇in = η    Q̇out ∝    1−      T = TH TC3 − TC4 .
                                   TC               TH TC C
  Ez akkor maximális, amikor TC = (3/4)TH, ekkor a hatásfok 1/4.


                                                  15


    Kevin Zhou                                                                      Physics Olympiad Handouts
