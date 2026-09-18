---
id: solution-ocr-eotvos-2020-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2020_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2020-nitrogen-cooling]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. feladat. Egy $m _ { 0 }$ tömegǘ, állandó $c$ fajhöjü minta hőmérséklete kicsivel a nitrogén $T _ { 0 }$ forráspontja alatt van. Rendelkezésünkre áll $m$ tömegữ, forrásban lévó folyékony nitrogén és egy hốszivattyú. Mekkora minimális hốmérsékletre lehet lehúteni a mintát, mire elforr az összes nitrogén? A nitrogén forráshöje L.

Megoldás. Egy $\eta = \frac { T _ { 2 } - T _ { 1 } } { T _ { 2 } }$ hatásfokú, hőerőépként üzemeltetett Carnot-féle körfolyamat esetén a felső hốtartályból kivett hő $\eta$-ad része mint munkavégzés jelenik meg, $( 1 - \eta )$-ad része pedig az alsó hốtartályba kerül. Hőszivattyúként üzemeltetve munkát kell befektetnünk, az alsó hőtartályból szivattyúzzuk át az energiát a felsőbe, azaz a hő előjele változik ellenkezőre.

A Carnot-körfolyamattal általában úgy találkozunk, hogy a gép két állandó hőmérsékletű hốtartály között müködik. Feladatunkban a Carnot-gép felső hốtartálya a forrásban lévő nitrogén, amelynek hốmérséklete végig $T _ { 0 }$, az alsó hőtartály pedig a minta, amely viszont lassan húl, $T$ hőmérséklete nem állandó. Egy ciklus során azonban a minta hőmérséklete állandónak tekinthető.

Ebből a lassan változó hőmérsékletű hốtartályból vonunk el egy kis lépésben $c m _ { 0 } \Delta T$ hốt. Ez a hő a felsố hốtartályba érkező $q$ hőnek

$$
1 - \eta = 1 - \frac { T _ { 0 } - T } { T _ { 0 } } = \frac { T } { T _ { 0 } } \text {-szorosa, }
$$

ahogy az 1. ábrán is látható.
![](../../../figures/solution-ocr/0969d214e240046569c69fc8.jpg)

Ha $\Delta m$ mennyiségű nitrogén forrt el, akkor a felső hőtartálynak $L \Delta m$ hốt kellett kapnia. Ebből a

$$
c m _ { 0 } \Delta T = \frac { T } { T _ { 0 } } L \Delta m
$$

összefüggéshez jutunk. Ez a

$$
\frac { c m _ { 0 } \mathrm {~d} T } { T } = \frac { L \mathrm {~d} m } { T _ { 0 } }
$$

differenciális összefüggéséhez vezet. Ezt kell integrálni a kezdeti állapottól a végső állapotig. Az alsó hốtartály $T$ hőmérséklete $T _ { 0 }$-ról $T _ { \text {min } }$-re csökken, és közben a folyékony nitrogén tömege $m$-ről nullára csökken. Tehát

$$
c m _ { 0 } \ln \frac { T _ { 0 } } { T _ { \min } } = \frac { L m } { T _ { 0 } } ,
$$

amiből a keresett minimális hőmérséklet

$$
T _ { \min } = T _ { 0 } e ^ { - \frac { L m } { T _ { 0 } c m _ { 0 } } } .
$$

Megjegyzés. Aki tudja, hogy a Carnot-körfolyamat közben az entrópia állandó, és ismeri az entrópia kifejezéseit, az azonnal megkapja az integrálásból kapott összefüggést.
