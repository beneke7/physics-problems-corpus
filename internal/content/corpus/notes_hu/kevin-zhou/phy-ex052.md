---
id: kevin-zhou-notes-phy-ex052
source: kevin-zhou-notes
native_id: "phy Example 052"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex052
topic: [folytonos-közegek-mechanikája]
subtopic: [összenyomható áramlás, fúvókák]
math_tools: [megmaradási törvények, Mach-szám]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "6182-6223"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Áramlás lassan változó keresztmetszetű A(x) csatornán. Feltesszük, hogy az áramlás minden tulajdonsága csak x-től függ, és a sebesség teljes egészében az x̂ irányába mutat. Hasznos a mennyiségeket egy (esetleg hipotetikus) hangsebességi pontban felvett értékekhez viszonyítani. A tömegáram kontinuitása:
                                                                  1/2+1/(γ−1)
                            A    ρ1 v1   1 c1 ρ1   1          T1
                               =       =         =                                .
                            A1    ρv     M c ρ     M          T

Korábbi kifejezésünket behelyettesítve
                                                     1/2+1/(γ−1)
                             A    1        γ−1   2
                                =       1+     (M − 1)             .
                             A1   M        γ+1

Érdekes módon a jobb oldal nem monoton, hanem M = 1-nél lokális minimuma van. Ez azt jelenti, hogy ha létezik hangsebességi pont, annak a csatorna legszűkebb részén kell megjelennie. Szubszonikus áramlásban a csatorna csökkenő keresztmetszete növekvő áramlási sebességet, valamint csökkenő hőmérsékletet, nyomást és sűrűséget jelent, szuperszonikus áramlásban viszont ennek az ellenkezője igaz.
116 4. Folytonos közegek mechanikája

A torok környezetében minden A-értékhez két lehetséges M-érték tartozik, és hogy ezek közül melyik valósul meg, azt a peremfeltételek határozzák meg. Tekintsünk egy „Laval-fúvókát”, vagyis keskeny torokot tartalmazó szimmetrikus csatornát. Ha nincs nyomáskülönbség, a folyadék egyáltalán nem mozog. A nyomáskülönbség növelésével az áramlás egyre gyorsabb lesz: a torokban M lokális maximumot vesz fel, de mindenütt szubszonikus marad. Egy bizonyos kritikus nyomásnál a torokban M = 1 teljesül; ekkor a folyadék a torok után is tovább gyorsul, és M > 1 értékkel lép ki. Ezt az ellentmondásosnak tűnő viselkedést a sugárhajtóművek és rakéták tolóerejének maximalizálására használják.
    A fúvókán átáramlást a bemeneti sebesség és nyomás határozza meg, ez pedig a kimeneti nyomást is meghatározza. Szubszonikus áramlásnál ennek a kimeneti nyomásnak meg kell egyeznie a légköri nyomással, ami korlátozza a bemeneti adatokat. Szuperszonikus áramlásnál azonban az információ nem terjedhet visszafelé az áramlással szemben, ezért ez a feltétel nem hatékony. A gyakorlatban, ha a kimeneti és a légköri nyomás nem egyezik, a kimeneten lökéshullámnak nevezett folytonossági hiány alakul ki. Ebben a tartományban azt mondjuk, hogy az áramlás „fojtott”. A kimeneti nyomás megváltoztatása egyáltalán nem változtatja meg az áramlási sebességet; csak a lökéshullám helyét módosíthatja.
    Azt is megjegyezzük, hogy a fúvóka fordítva is használható, így diffúzor hozható létre. Ha az áramlás már szuperszonikus állapotban lép be egy Laval-fúvókába, akkor a fúvóka összehúzódásával lefelé haladva áramlik. Ha az összehúzódás elegendő, a torokban M = 1 alakul ki, és a folyadék M < 1 értékkel lép ki. Ehhez a kimeneti nyomásnak nagyobbnak kell lennie a bemeneti nyomásnál. A fúvókához hasonlóan lökéshullámok is kialakulhatnak a peremfeltételektől függően.
