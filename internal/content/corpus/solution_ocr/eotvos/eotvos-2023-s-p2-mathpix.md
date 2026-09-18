---
id: solution-ocr-eotvos-2023-s-p2
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2023-suspended-rod-ac]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. ábra

Látható, hogy ehhez a Vénusz két lehetséges helyzete tartozik, amelyeket az $\alpha _ { 1 }$, illetve az $\alpha _ { 2 }$ Föld-Nap-Vénusz szög jellemez. A feladat szövege szerint a Vénusz másnap néhány perccel korábban kel a Naphoz képest, ami azt jelenti, hogy $\varphi$ növekedni fog. Ez az 1-es helyzetben valósul meg.

Már az 1. ábra alapján is láthatjuk, hogy ekkor a Vénusz a Holdhoz hasonlóan vékony C alakú sarlónak látszik a távcsövön.

A fázist a 2. ábra alapján határozhatjuk meg. Könnyen belátható, hogy a korong megvilágított és teljes területének aránya megegyezik a $D _ { 1 } / D$ aránnyal, ugyanis a világos sarlót úgy kaphatjuk meg, ha gondolatban a sötét félkört a 2. ábra jobb oldalán bejelölt tengelye mentén összenyomjuk. Ez a transzformáció a tengelyirányú méreteket és a területet azonos arányban csökkenti. Eszerint a fázis

$$
f = \frac { D _ { 1 } } { D } = \frac { 1 + \cos \vartheta } { 2 } ,
$$

ahol $\vartheta$ a Nap-Vénusz-Föld szög. A szinusztétel alapján

$$
\frac { \sin \vartheta } { \sin \varphi } = \frac { r _ { \mathrm { F } } } { r _ { \mathrm { V } } } = \frac { 1 } { 0,723 } ,
$$

amiből

$$
\sin \vartheta = \frac { \sin \varphi } { 0,723 } = 0,793
$$

és $\vartheta _ { 1 } = 127,5 ^ { \circ }$. (Az ábra alapján a két lehetséges értékből ekkor a tompaszög a helyes.) Ebből a fázis

$$
f _ { 1 } = \frac { 1 + \cos \vartheta _ { 1 } } { 2 } \approx 0,20 .
$$

b) 2023. szeptember 12-én a Föld-Nap-Vénusz szög $\alpha _ { 1 } = 180 ^ { \circ } - \varphi - \vartheta _ { 1 } = 17,5 ^ { \circ }$. Az $\alpha$ szög ezután folyamatosan növekszik, és ezzel kezdetben $\varphi$ is növekszik, azaz a Vénusz a Naphoz viszonyítva egyre korábban kel. Ezzel együtt $\vartheta$ csökken, a fázis pedig folyamatosan növekszik. Ugyanakkor a $d$ Föld-Vénusz távolság folyamatosan nő, így a Vénusz látszólagos átmérője csökken.


A Vénusz akkor kel a Naphoz képest legkorábban, azaz $\varphi$ értéke akkor lesz maximális, amikor $\vartheta = 90 ^ { \circ }$ (és így a fázis 0,5 , azaz „félvénusz” látható).

Ezután $\varphi$ értéke már csökken, a Vénusz egyre kevesebb idővel kel a Nap előtt. Ugyanakkor $\vartheta$ értéke továbbra is csökken, a Vénusz fázisa pedig tovább növekszik, látszólagos átmérője viszont a növekvő távolság miatt tovább csökken.

A feladatban szereplő állapotot, amikor a Vénusz újra 2 óra 20 perccel kel a Nap előtt, az $\alpha _ { 2 }$ Föld-Nap-Vénusz szögnél érjük el. Ebben az esetben ismét $\varphi = 35 ^ { \circ } , \vartheta _ { 2 } = 180 ^ { \circ } - \vartheta _ { 1 } = 52,5 ^ { \circ } , \alpha _ { 2 } = 180 ^ { \circ } - \varphi - \vartheta _ { 2 } = 92,5 ^ { \circ }$. A Vénusz fázisa ekkor

$$
f _ { 2 } = \frac { 1 + \cos \vartheta _ { 2 } } { 2 } \approx 0,80 .
$$

Mikor fog ez bekövetkezni? A Vénusz sziderikus (csillagokhoz viszonyított) keringési ideje Kepler 3. törvénye alapján:

$$
T _ { \mathrm { V } } = \left( \frac { r _ { \mathrm { V } } } { r _ { \mathrm { F } } } \right) ^ { \frac { 3 } { 2 } } T _ { \mathrm { F } } = 224,5 \text { nap. }
$$

( $T _ { \mathrm { F } } = 365,25$ nap.) A szinodikus (Földhöz viszonyított) keringési ideje

$$
T _ { \mathrm { V } } ^ { \prime } = \left( \frac { 1 } { T _ { \mathrm { V } } } - \frac { 1 } { T _ { \mathrm { F } } } \right) ^ { - 1 } \approx 583 \text { nap } ,
$$

hiszen az általunk vizsgált koordináta-rendszerben a Vénusz keringésének szögsebessége $\Omega _ { \mathrm { V } } ^ { \prime } = \Omega _ { \mathrm { V } } - \Omega _ { \mathrm { F } }$.

A két vizsgált helyzet között $\Delta \alpha = \alpha _ { 2 } - \alpha _ { 1 } = 75 ^ { \circ }$-kal fordul el a Naptól a Vénuszhoz húzott sugár az általunk használt vonatkoztatási rendszerben. Ehhez

$$
t = \frac { \Delta \alpha } { 360 ^ { \circ } } T _ { \mathrm { V } } ^ { \prime } \approx 121 \mathrm { nap }
$$

időre van szükség. Eszerint a Vénusz - ebben a közelítésben számolva - legközelebb körülbelül négy hónappal később, 2024. január 11-én fog ismét 2 óra 20 perccel a Nap előtt kelni.

Vizsgáljuk a Vénusz látszólagos átmérőjét!
Legnagyobbnak Föld-közelben látnánk, ekkor $d _ { \text {min } } = r _ { \mathrm { F } } - r _ { \mathrm { V } } = 0,277 r _ { \mathrm { F } }$ (de ekkor persze „újvénusz" van, és a Vénusz a Nappal együtt kel, a Földről nem látható ${ } ^ { 4 ) }$ ). A változó Föld-Vénusz távolságot az 1. ábra szerint a szinusztétel alapján számolhatjuk ki:

$$
\frac { \sin \alpha } { \sin \vartheta } = \frac { d } { r _ { \mathrm { F } } } ,
$$

amiből

$$
d = \frac { \sin \alpha } { \sin \vartheta } r _ { \mathrm { F } } .
$$

[^1]
A Vénusz látszólagos $D$ átmérője fordítottan arányos a Föld-Vénusz távolsággal:

$$
D = \frac { d _ { \min } } { d } D _ { \max } .
$$

Ez alapján az 1-es és 2-es helyzetben

$$
D _ { 1 } = \frac { 0,277 \sin \vartheta _ { 1 } } { \sin \alpha _ { 1 } } D _ { \max } = 0,73 D _ { \max } ,
$$

illetve

$$
D _ { 2 } = \frac { 0,277 \sin \vartheta _ { 2 } } { \sin \alpha _ { 2 } } D _ { \max } = 0,22 D _ { \max } ,
$$

![](../../../figures/solution-ocr/9d5710b90001857bf40a1872.jpg)
