---
id: eotvos-2020-nitrogen-cooling
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2020-nitrogen-cooling
solution_type: official
source_document: solution-document-eotvos-2020-s
source_pdf: cache/phoxiv/eotvos/2020_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2020_S.pdf."
---

1. feladat. Egy m0 tömeg¶, állandó c fajh®j¶ minta h®mérséklete ki sivel a nitrogén T0 forráspontja alatt van.
Rendelkezésünkre áll m tömeg¶, forrásban lév® folyékony nitrogén és egy h®szivattyú. Mekkora minimális h®mérsékletre
lehet leh¶teni a mintát, mire elforr az összes nitrogén? A nitrogén forrásh®je L.
Megoldás. Egy η =
T2 − T1
T2
hatásfokú, h®er®gépként üzemeltetett Carnot-féle körfolyamat esetén a fels® h®tar-
tályból kivett h® η-ad része mint munkavégzés jelenik meg, (1 − η)-ad része pedig az alsó h®tartályba kerül. H®szi-
vattyúként üzemeltetve munkát kell befektetnünk, az alsó h®tartályból szivattyúzzuk át az energiát a fels®be, azaz
a h® el®jele változik ellenkez®re.
A Carnot-körfolyamattal általában úgy találkozunk, hogy a gép két állandó h®mérséklet¶ h®tartály között m¶ködik.
Feladatunkban a Carnot-gép fels® h®tartálya a forrásban lév® nitrogén, amelynek h®mérséklete végig T0, az alsó
h®tartály pedig a minta, amely viszont lassan h¶l, T h®mérséklete nem állandó. Egy iklus során azonban a minta
h®mérséklete állandónak tekinthet®.
Ebb®l a lassan változó h®mérséklet¶ h®tartályból vonunk el egy kis lépésben cm0∆T h®t. Ez a h® a fels® h®tartályba
érkez® q h®nek
1 − η = 1 −
T0 − T
T0
=
T
T0
-szorosa,
ahogy az 1. ábrán is látható.
1. ábra
Ha ∆m mennyiség¶ nitrogén forrt el, akkor a fels® h®tartálynak L∆m h®t kellett kapnia. Ebb®l a
cm0∆T =
T
T0
L∆m
összefüggéshez jutunk. Ez a
cm0 dT
T
=
Ldm
T0
dieren iális összefüggéséhez vezet. Ezt kell integrálni a kezdeti állapottól a végs® állapotig. Az alsó h®tartály T
h®mérséklete T0-ról Tmin-re sökken, és közben a folyékony nitrogén tömege m-r®l nullára sökken. Tehát
cm0 ln
T0
Tmin
=
Lm
T0
,
amib®l a keresett minimális h®mérséklet
Tmin = T0e
−
Lm
T0cm0 .
Megjegyzés. Aki tudja, hogy a Carnot-körfolyamat közben az entrópia állandó, és ismeri az entrópia kifejezéseit, az azonnal
megkapja az integrálásból kapott összefüggést.
