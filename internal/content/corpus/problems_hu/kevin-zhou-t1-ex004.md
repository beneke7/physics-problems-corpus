---
id: "kevin-zhou-t1-ex004"
source: "kevin-zhou"
native_id: "KZ-T1-EX004"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t1-ex004"
topic: [termodinamika]
subtopic: [ideális gáz, I. főtétel, entrópia, irreverzibilis-folyamatok]
math_tools: [algebra]
format: "explanation"
kind: "example"
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

# KZ-T1-EX004

  4. példa

  Egy hőszigetelt kamrában vákuum van; a kamra egy kis szelepen keresztül kapcsolódik a külvilághoz. A szelepet addig nyitjuk, amíg a kamrában lévő levegő nyomása el nem éri a légköri nyomást, majd bezárjuk. A kamrán kívüli levegő hőmérséklete T0 . A levegőt kétatomos gáznak tekintve, mekkora a kamrában lévő levegő T hőmérséklete?

  Megoldás
  Legyen a kamra térfogata V, a légköri nyomás pedig p0 . Rendszerünknek tekintsük az összes levegőt, amely végül bejut a kamrába, és tegyük fel, hogy ennek a levegőnek a kamrába belépés előtt V0 térfogata volt. A teljes légkör által erre a levegőre a kamrába jutása közben végzett munka p0 V0 . A levegő végső belső energiája
                                     5              7
                                  E = nRT0 + p0 V0 = nRT0 .
                                     2              2
  Másrészt E = nCV T = (5/2)nRT, amiből
                                                7
                                             T = T0 .
                                                5
  Ekkor az áramlás leáll, mert a nyomás kiegyenlítődött, noha a hőmérséklet még nem. Ez arra példa, hogy a mechanikai egyensúly a hőegyensúly előtt áll be. (Hosszú idő elteltével a hőmérséklet is kiegyenlítődik a falakon át történő hőátadás miatt.)

  Felmerülhet, hogy ez sérti az energiamegmaradást. Honnan származik a gáz többlet hőenergiája? A mögötte lévő levegőből származik, amely a gázt a kamrába nyomja. Mélyebb szinten azonban az energia végső soron gravitációs eredetű: a teljes légkör kissé a Föld felé húzódik, miután V0 térfogatú levegőt eltávolítunk belőle, és a gravitációs potenciális energia ezen csökkenése megegyezik e rendszer hőenergiájának növekedésével.

  Felmerülhet az is, hogy ez sérti a termodinamika második főtételét. Kezdetben minden T0 hőmérsékletű volt, most pedig a rendszer egyik része a többi résznél magasabb hőmérsékletű lett. Ezt a hőmérséklet-különbséget felhasználva hőerőgépet működtethetnénk, amivel látszólag ingyen juthatnánk munkához. Ennek az érvelésnek a hibája, hogy nem csak melegítés történik;


                                                 6


    Kevin Zhou                                                               Physics Olympiad Handouts



       a kezdetben üres kamra is megtelik. A hőerőgép működtetése után a rendszer eredeti állapotának visszaállításához ki kell szivattyúzni a levegőt, ami munkát igényel. Másképpen fogalmazva, amikor a levegő bejut a kamrába, az entrópia valójában nem csökken. A hőenergia kevésbé egyenletes eloszlása csökkenti az entrópiát, de a levegő most nagyobb térfogatot foglalhat el, ez pedig még nagyobb mértékben növeli az entrópiát.
