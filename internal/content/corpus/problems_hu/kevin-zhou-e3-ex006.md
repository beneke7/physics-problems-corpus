---
id: "kevin-zhou-e3-ex006"
source: "kevin-zhou"
native_id: "KZ-E3-EX006"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-e3-ex006"
topic: [magnetosztatika]
subtopic: [szolenoidok, Ampère-törvény, mágneses dipólusok]
math_tools: [vektorszámítás, szimmetriaérvek]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E3.txt"
source_url: "sources/kevin_zhou/site/handouts/E3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Példa 6

       Keressük meg egy végtelen, hengeres, R sugarú, egységnyi hosszra n menetű, I áramot vivő szolenoid mágneses terét.




                                                      12


Kevin Zhou                                                              Physics Olympiad Handouts


  Megoldás
  A szolenoidot függőleges irányba állítjuk, és hengerkoordinátákat használunk. A szimmetria miatt a térnek z-től függetlennek kell lennie. Vizsgáljuk most a mágneses tér radiális Br komponensét. A szolenoid fejjel lefelé fordítása egyenértékű az áram megfordításával. Az előbbi azonban nem fordítja meg Br-t, míg az utóbbi igen, ezért Br = 0.

  A forgásszimmetria miatt az érintőirányú Bϕ komponensnek állandónak kell lennie. Ekkor azonban az Ampère-törvény bármely körhurokra Bϕ (2πr) = 0 eredményt ad, ezért Bϕ = 0.

  Már csak Bz-t kell vizsgálnunk. Ampère-törvényét kis függőleges téglalapokra alkalmazva azt látjuk, hogy Bz állandó, kivéve ha a téglalap metszi a szolenoid felületét. Továbbá Bz-nek a szolenoidtól távol nullának kell lennie, ezért a szolenoidon kívül mindenütt nulla. Ha egy h magasságú, a felületet metsző téglalapra alkalmazzuk Ampère-törvényt, akkor
                                I
                                    B · ds = Bzin h = µ0 Ienc = µ0 nIh

  amiből Bzin = µ0 nI.

  Példa 7

  Most tegyük fel, hogy a szolenoid véges, L ≫ R hosszúságú. Hogyan néz ki a peremtér?

  Megoldás
  Elvileg a pontos peremteret a Biot–Savart-törvénynek a szolenoid vezetékére való alkalmazásával határozhatnánk meg, de ez meglehetősen bonyolult lenne. Ehelyett közelítsük a szolenoidot N = nL egyenletesen elhelyezkedő, azonos térközű körhurokból álló köteggel. E hurkok mindegyike µ = πR2 I mágneses dipólus, ezért a huroktól jóval távolabb a tere egyszerűen dipólustér.

  E dipólusterek összeadása továbbra is bonyolult, ezért használjuk a 7. ötletet. Minden vezetékhurkot egy d távolságra lévő, ±qm mágneses töltéspárral helyettesíthetünk, amelynek ugyanakkora µ = qm d mágneses dipólusmomentuma van. µ rögzítése mellett qm és d változtatható, ezért az egyszerűség kedvéért d-t a hurkok közötti 1/n távolsággal tesszük egyenlővé. Ekkor a szomszédos dipólusok töltései kiesnek, és a végeken csak qm = ±nµ = ±πR2 nI töltések maradnak.

  Így a szolenoid peremtere az R-nél jóval nagyobb távolságokban két ponttöltés elektromos teréhez hasonlít! Ezt az alábbi bal oldalon látható numerikus számítás is megerősíti.




                                                 13


Kevin Zhou                                                             Physics Olympiad Handouts




  Ez meglepő lehet, ha alapvető, algebrai bevezető fizikai tankönyveket olvastunk. Sokukban a fenti jobb oldalán láthatóhoz hasonló, kézzel rajzolt ábrák vannak, amelyeken a teljes mágneses fluxus szépen, egyenes vonalak mentén lép ki a szolenoidok végein. A valóságban a tér csaknem gömbszimmetrikusan szóródik ki a végből; a fluxusnak mindössze a fele halad ki a végfelületen, a többi lefelé, az oldalfelületen át távozik. (Ezt közvetlenebbül is megmutatjuk a 23. feladatban egy elegáns érveléssel.)

  Mennyiségileg is pontosabbak lehetünk. Tegyük fel, hogy a szolenoid függőleges, és középpontja z = 0-ban van. Ekkor a szolenoid tengelyétől r távolságban, z = 0-nál a tér
                                            
                                            1
                                                          r<R
                           B(r) = µ0 nIẑ × −2R /L 2   2   R≪r≪L
                                            
                                                2       3
                                             −R L/4r L ≪ r

  ahol az első sor a szokásos szolenoidteret adja, a második sor a dipólusanalógiánkra alkalmazott Coulomb-törvényből származik (ez csak R ≪ r esetén érvényes), a harmadik pedig a két töltés dipólusteréből következik (csak L ≪ r esetén érvényes). Ahogy vártuk, L ≫ R esetén a szolenoidon kívüli peremtér elhanyagolható. Másképpen megfogalmazva: a szolenoidon felfelé áthaladó fluxus legnagyobb része egy lefelé irányuló téren keresztül tér vissza, amely főként r ∼ L távolságig terjed. A fenti pontos ábrán mindezek a jellegzetességek láthatók.

  E példából két tanulságot vonhatunk le. Először is, a félrevezető ábrák gyakori problémát jelentenek a bevezető tankönyvekben. Általános szabály, hogy minél alapszintűbb egy tankönyv, annál több kép van benne, de annál kevésbé hasznosak. Másodszor, az Ampère- és Gilbert-dipólusok közötti analógia igen hasznos, és gyakran felbukkan trükkös olimpiai feladatokban.

  Megjegyzés: Valós szolenoidok
  A valós szolenoidok még bonyolultabbak. Először is nem vettük figyelembe a vezetékek diszkrét voltát. Úgy kezeltük őket, mintha egységnyi hosszra K = nI homogén áramot alkotnának; ezért írtuk Ienc = nIh. Ez akkor érvényes, ha nem vizsgáljuk túl közelről a rendszert, vagyis ha bármely vezetéktől mért távolságunk sokkal nagyobb a vezetékek közötti 1/n távolságnál.




                                                14


    Kevin Zhou                                                               Physics Olympiad Handouts



       Másodszor, mivel a szolenoidokat valódi vezetékek feltekerésével készítjük, az áramnak egy másik járuléka is van, még az n → ∞ határátmenetben is. A vezetékeket kis emelkedéssel tekerik fel, mivel az I nettó áramnak a szolenoid mentén is haladnia kell. Másképpen fogalmazva, a szolenoid felülete mentén az egységnyi hosszra jutó áram K = nI θ̂ + (I/2πR)ẑ. Ez a szolenoidon kívül Bϕ = µ0 I/2πr érintőirányú mágneses teret hoz létre. Ezért a gyakorlatban sok szolenoid ellenkező irányú tekercselésű: a vezetékek fele egyenletes térközzel felfelé fut a tengely mentén, a másik fele pedig ugyanilyen térközzel lefelé, így zárja az áramkört és kioltja ezt a nem kívánt teret.
