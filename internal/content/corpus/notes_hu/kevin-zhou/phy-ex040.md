---
id: kevin-zhou-notes-phy-ex040
source: kevin-zhou-notes
native_id: "phy Example 040"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex040
topic: [statisztikus-mechanika]
subtopic: [entrópia, üvegek, relativisztikus termodinamika]
math_tools: [termodinamikai integrálás, Liouville-tétel, négyvektorok]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3603-3695"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Üvegek akkor képződnek, amikor a folyadékokat túl gyorsan hűtjük le ahhoz, hogy kialakuljon a kristályos egyensúlyi állapot. Az üvegek általában a sok metastabil egyensúlyi állapot egyikében maradnak, ami nagyon alacsony hőmérsékleten „maradék entrópiához” (azaz befagyott rendezetlenséghez) vezet. A maradék entrópia becsléséhez kiindulhatunk egy hideg, tökéletes kristályból (amelynek entrópiája megközelítőleg nulla), megolvaszthatjuk, majd üveggé hűthetjük. Ekkor a maradék entrópia
                                           Z T =Tℓ           Z T =0
                                                     d̄Q              d̄Q
                                  Sres =                 +                .
                                            T =0      T       T =ℓ     T


Más szavakkal a maradék entrópia a „hiányzó hő” mennyiségéhez kapcsolódik: ezt a kristály megolvasztásakor bevisszük, de kristályosításakor nem kapjuk vissza.
   Konkrétabban tekintsünk egy δ energiakülönbségű, sokkal magasabb gátú kettős potenciálgödröt. Amikor a rendszert kB T ≲ δ hőmérsékletre hűtjük, az egyik völgyben megreked, ami kB log 2 ∼ kB statisztikus entrópiához vezet. Ha a rendszer a magasabb völgyben reked, akkor δ nagyságú „hiányzó hő” keletkezik; ezt T ∼ δ/kB hőmérsékleten nyertük volna ki, ha a gát alacsony lett volna, ezért a rendszer δ/T ∼ kB nagyságú termodinamikai entrópiát tart meg. Így az entrópia két definíciója megegyezik: a maradék entrópia nagyjából kB -vel szorozva annyi, ahány ilyen „választást” kell a rendszernek meghoznia lehűlés közben.

Megjegyzés. Néhányan kifogásolják, hogy a szubjektív információ entrópiával való azonosítása kategóriatévesztés; az azonban valóban igaz, hogy „az információ fizikai”. Tegyük fel, hogy egy számítógép memóriája a következőképpen tárol egy bitet: minden bit egy elválasztóval ellátott doboz. A 0/1 bitértékhez egyetlen pattogó atom tartozik a bal, illetve a jobb oldalon. A bitértékek energiaköltség nélkül felcserélhetők; például egy 0 úgy alakítható 1-é, hogy a bal oldali falat és az elválasztót egyszerre jobbra mozgatjuk.
     Energiát nyerhetünk egy bit értékének elfelejtésével; ez a Szilárd-motor. Konkrétan hagyjuk, hogy az atom nyomása alatt az elválasztó adiabatikusan kifelé mozogjon. Amikor az elválasztó eléri a falat, új elválasztót helyezünk be az eredeti helyére. kB T log 2 nagyságú P dV munkát nyertünk, annak árán, hogy többé nem tudjuk a bit értékét. Így a puszta „információ” hő munkává alakítására használható.
     Ugyanez az érvelés Maxwell démonának elűzésére is használható. A démon egy korábban ismeretlen bit állapotát energiaköltség nélkül megmérheti, majd munkát nyerhet ki belőle. Eközben azonban a démon entrópiája megnő; konkrétan, ha a démon hasonló biteket használ a méréshez, az ismert értékek ismeretlen értékekké alakulnak.
     Paradoxonnal állnánk szemben, ha a démon ezeket az ismeretlen értékeket következmények nélkül vissza tudná állítani ismert értékekre. Ha azonban a démon egyszerűen megpróbálja befelé tolni a dugattyúkat, akkor megnöveli az atomok hőmérsékletét, és bitenként kB T log 2 hőt termel. Vagyis a tiszta „információ” törlése a démont felmelegítheti. Nincs ebben semmi paradoxon, mert a démon minden szempontból úgy viselkedik, mint egy közönséges hideg hőtartály.
     Azt az eredményt, hogy egy bit törlésekor kB T log 2 hő keletkezik, Landauer-elvnek nevezzük; ez igen általánosan érvényes, mivel a fenti érvelés minden, Liouville tételét teljesítő rendszerre alkalmazható. Azokra a számításokra is érvényes, amelyek visszafordíthatatlan lépéseket tartalmaznak. Például egy egyenletesen véletlen bemenetekkel táplált AND-kapu kisebb Shannon-entrópiájú kimenetet hoz létre, ezért az AND-kapu ilyen bemeneteken való működtetésének hőt kell termelnie. Szobahőmérsékleten számszerűen kB T log 2 = 0.0175 eV. Számítás azonban hőleadás nélkül is végezhető, ha csak reverzibilis kapukat használunk. A számítás során „szemét” bitek halmozódnak fel, amelyeket nem lehet törölni; a végén egyszerűen lemásolhatjuk a válaszbiteket, majd visszafelé futtathatjuk a számítást. A reverzibilis számítás számos konkrét modelljét javasolták, mivel régebben úgy gondolták, hogy a Landauer-elv szerint maga a számítás is energiaelnyeléssel jár.

Megjegyzés. Mekkora egy speciális relativitáselméletben mozgó test hőmérséklete? Ez vitatott kérdés; különböző szerzők T ′ = T /γ, T ′ = T és T ′ = γT értékeket javasolnak. A szakirodalom alapos áttekintése itt található. Személyes véleményem a következő. Első választásunk az lenne, hogy a hőmérsékletet „annak definiáljuk, amit egy hőmérő mér”, ez azonban nem működik. Tekintsünk például egy T hőmérsékletű feketetest-sugárzásba merített hőmérőt. A különböző hőmérők abszorptivitása lehet eltérő, a(f ), de az egyensúlyi kijelzés a hőmérő típusától függetlenül ugyanaz lesz, mert a termikus sugárzás Kirchhoff-törvénye szerint a(f ) = e(f ). Ha azonban a sugárzást meglökjük, ez többé nem igaz, mert a sugárzás a hőmérő rendszerében már nem feketetest-spektrumú.


Ez egy mélyebb problémára utal a hőmérséklet definiálásával kapcsolatban. Általában az olyan termodinamikai mennyiségek, mint a hőmérséklet, a nyomás és a kémiai potenciál, egyensúlyban azért egyenlők, mert annak az entrópiaköltségét tükrözik, ha valamely megmaradó mennyiséget cserélünk ki, nevezetesen energiát, térfogatot vagy részecskeszámot. Mozgó testek vizsgálatakor azonban egy újabb megmaradó mennyiség cserélhető ki: a lendület. Az ennek megfelelő hőmérsékletszerű mennyiségnek a szokásos hőmérséklettel együtt négyvektort kell alkotnia. Explicit módon definiálhatjuk

                                                  ∂S
                                          βµ =
                                                  ∂pµ V,N

és egy uµ négyessebességű test nyugalmi hőmérséklete mindig (uµ βµ )−1 . Itt βµ kovektor, mivel az entrópia Lorentz-skálár, hiszen a lehetséges mikroállapotok számát tükrözi. Egy testhez képest mozgó hőmérő által mért hőmérséklet általában a βµ minden komponensétől függ, és a konkrét kifejezés a hőmérő kialakításától függ. (Nyomásnál vagy kémiai potenciálnál nem találkozunk ezzel a finomsággal, mert viszonylag könnyű olyan hőmérőt készíteni, amely energiát cserél, de térfogatot vagy részecskeszámot nem. Sokkal nehezebb olyan hőmérőt készíteni, amely valamiképpen energiát cserél, de lendületet nem.)
   A nyugalmi rendszerben βµ = (1/T, 0), ezért tetszőleges rendszerben
                                                 γ γ v
                                          βµ =    ,      .
                                                 T T c
Ha egy általános rendszerben a hőmérsékletet 1/β0-ként definiáljuk, akkor T ′ = T /γ adódik. Ez a definíció azonban nem különösebben értelmes, mert valójában a teljes négyvektor számít.

3.4    Klasszikus gázok
Először egy nem kölcsönható kvantumgáz klasszikus határátmenetéből vezetjük le a partíciós függvényt.
