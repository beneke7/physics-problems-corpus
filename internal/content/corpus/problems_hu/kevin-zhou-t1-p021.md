---
id: "kevin-zhou-t1-p021"
source: "kevin-zhou"
native_id: "KZ-T1-P021"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t1-p021"
topic: [termodinamika, kvantumfizika]
subtopic: [foton-gáz, kinetikus gázelmélet, adiabatikus-folyamatok, entrópia]
math_tools: [analízis, valószínűségszámítás és statisztika]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T1.txt"
source_url: "sources/kevin_zhou/site/handouts/T1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T1-P021

[2] 21. feladat. A kinetikus gázelmélet segítségével határozzuk meg egy fotongáz (azaz E = pc összefüggést kielégítő,
    tömeg nélküli részecskékből álló ideális gáz) nyomását a teljes belső energiája, U , és térfogata, V , függvényében.
    Ezt az eredményt felhasználva határozzuk meg γ-t a fotongázra, ahol γ definíció szerint olyan, hogy adiabatikus
    folyamatban P V γ állandó.

        8. példa

        Egy M tömegű, a világűrben rekedt űrhajós a következő primitív rakétát készíti. Fog egy m ≪ M tömegű, µ moláris
        tömegű szárazjégdarabot, és egy T hőmérsékleten tartott, hosszú, vékony üvegcsőbe helyezi. A szárazjég szublimál,
        az űrhajós pedig a cső nyílását a kívánt haladási iránnyal ellentétes irányba fordítja. Becsüljük meg nagyságrendileg,



                                                      14
Kevin Zhou                                                              Physics Olympiad Handouts



  mekkora sebességgel halad az űrhajós, miután az összes szárazjég eltűnt.

  Megoldás
  Legyen m′ egy szárazjégmolekula tömege. Az ekvipartíció tétele szerint a molekulák jellemző sebességének nagyságrendje
                                   r        r         s
                                      kT       N kT     RT
                                v∼       =          =       .
                                      m′       N m′      µ

  A molekulák nagyjából ugyanabba az irányba hagyják el az üveget, ezért az impulzusmegmaradás alapján az űrhajós u
  végsebességének nagyságrendje
                                                     s
                                           m      m RT
                                      u∼     v=            .
                                          M       M      µ

  Hallgatólagosan feltételeztük, hogy az üveg elég hosszú ahhoz, hogy a molekulák a távozásuk előtt termikus egyensúlyba
  kerüljenek az üveggel. Rövid üvegcső esetén a válasz ehelyett a molekulák szublimáció pillanatában jellemző sebességétől
  függne.

  9. példa

  Egy V térfogatú tartályt egyenletes T hőmérsékletű gázzal töltünk meg, majd vákuumba helyezünk. Ha egy kis lyukat
  ütünk a tartályon, és a gáz lassan kiszivárog, hogyan változik a tartály hőmérséklete az idő múlásával?

  Megoldás
  A λ szabad úthossz az a közepes távolság, amelyet egy gázmolekula megtesz, mielőtt egy másiknak ütközik. Legyen d a
  lyuk szélessége. Két fontos határeset van.

  Ha λ ≪ d, akkor a molekulák nem tudnak úgy kijutni a lyukon, hogy közben ne ütközzenek sokszor.
  Ezért ha a gáznak van valamilyen átlagos áramlási sebessége, a molekulákat magával viszi az áramlás. A gázt így
  folytonos közegként kezelhetjük, és a 4. példa gondolatmenete alkalmazható. A tartályban lévő gáz P dV munkát végez a
  kilépő gázon, és ezért energiát veszít. Így a visszamaradó gáz lehűl, vagyis a tartály hőmérséklete idővel csökken.
  (A feladat mennyiségi megoldásához a gázokra vonatkozó Bernoulli-elv megfelelője szükséges, amelyet a T3-ban vezetünk le.)

  Ha d ≪ λ, akkor a molekulák úgy repülnek ki a lyukon, hogy egyáltalán nem találkoznak más molekulával; ez az „effúzió”
  tartománya. Ezért nem szabad átlagos gáznyomásban vagy áramlási sebességben gondolkodnunk, hanem minden molekulát
  önmagában kell tekintenünk. Egy molekulának nagyobb az esélye, hogy kijut a lyukon, ha gyorsabban mozog. Így a kilépő
  molekulák átlagosan nagyobb energiájúak lesznek, mint a tartályban maradók. Tehát az előző határesethez hasonlóan a
  visszamaradó gáz lehűl, de teljesen más okból. (Ezt az esetet mennyiségileg Wang és Ricardo 2. kötetének 2.24. feladata
  tárgyalja.)




                                                 15
    Kevin Zhou                                                               Physics Olympiad Handouts


       Megjegyzés
       Az előző példa arra utal, hogy egy egyenletes hőmérsékletű gáz külső munka nélkül forró és hideg gázzá alakulhat,
       ami látszólag közvetlenül ellentmond a termodinamika második főtételének! Másképpen fogalmazva a szabadon
       rendelkezésre álló hőmérséklet-különbséget hőgép működtetésére használhatjuk, ami látszólag örökmozgást tesz lehetővé.

       A feloldás természetesen az, hogy a gáz teljes entrópiája továbbra is nő. A kinetikus energia kevésbé oszlik meg,
       az atomok helyzete viszont jobban szétszóródik, mivel némelyikük most már a tartályon kívül lehet. Így az „örökmozgás”
       csak addig működik, amíg a gáz még kiszivárog a tartályból; megszűnik, amikor a sűrűség egyenletessé válik.
       A tanulság az, hogy bár a legtöbb elrendezés hőmérséklet-különbségből nyer munkát, általánosabban az entrópia
       bármilyen lehetséges növekedéséből kinyerhetjük; ebben az esetben ez a sűrűségek kezdeti különbségéből származik.
