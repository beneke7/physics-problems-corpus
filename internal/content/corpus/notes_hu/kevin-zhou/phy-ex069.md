---
id: kevin-zhou-notes-phy-ex069
source: kevin-zhou-notes
native_id: "phy Example 069"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex069
topic: [kvantumfizika, elektromágnesesség]
subtopic: [Aharonov–Bohm-jelenség, interferencia]
math_tools: [vonal- és felületi integrálok]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7628-7671"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Az Aharonov–Bohm-jelenség. Tekintsük a kettős rés kísérletét, de a rések közötti fal mögé
rejtsünk egy szolenoidot. Ekkor a szolenoid jelenléte befolyásolja az interferenciaképet, még akkor is,
ha elektromágneses tere zérus mindenütt, ahol a részecske jár! Ennek belátásához vegyük észre, hogy
egy kezdőpontból egy x pontba vezető út fázisa
                                               q x
                                                 Z
                                        ∆θ =         A(x′ ) · dx′ .
                                               ℏ
Ezért a réseken átvezető két lehetséges út relatív fázisa
                                     I               Z
                                   q               q             qΦ
                             ∆θ =       A · dx =       B · dS =
                                   ℏ               ℏ              ℏ
amely eltolja az interferenciaképet. Ismét azt látjuk, hogy ha Φ Φ0 többszöröse, a hatás eltűnik,
általában azonban fizikailag megfigyelhető hatás lép fel.

Megjegyzés. A fázisok igazolására sokféle mód van. Az úttintegrál-formalizmusban az összes klasszikus
útra összegzünk eiS/ℏ fázissal. A domináns járulék a két klasszikus úttól származik, így minden mást
elhanyagolhatunk; az egyes utak fáziseltolása egyszerűen ei∆S/ℏ.

    Alternatívaként használhatjuk az adiabatikus tételt. Tegyük fel, hogy egy vektorpotenciálban
lévő, jól lokalizált, lassan mozgó részecskénk van. Alkalmazhatjuk az adiabatikus tételt, ahol a
paraméter a részecske helye; ekkor megmutatható, hogy a Berry-kapcsolat A, a Berry-görbület pedig B,
így ugyanarra a következtetésre jutunk. Ez a módszer meglehetősen konkrét, de az adiabatikus
közelítés használatát igényli, hogy elkerüljük az olyan nem kívánt további járulékokat, mint a
dinamikai p · dx fázis; ezek az úttintegrálos megközelítésben automatikusan szétválnak.
    Egy további, bizonyos értelemben köztes módszer a transzlációs operátorok algebrájának közvetlen
használata, amint azt itt magyarázzuk.

Megjegyzés. Az Aharonov–Bohm-jelenséget néha arra használják, hogy a vektorpotenciál „fizikai”,
kissé homályos fogalmát állítsák, amely azt az intuíciót fejezi ki, hogy a hatás nem magyarázható
pusztán a lokális, mértékinvariáns elektromos és mágneses terek hatásaival. Ezt a nézőpontot Vaidman
vitatta, aki szerint a fáziseltolás a töltött részecske terének a szolenoiddal való kölcsönhatásával
is magyarázható. Ez azt mutatja, hogy a potenciál nem az egyetlen módja a hatás létrehozásának, hanem
csupán a legkényelmesebb. A vita azonban továbbra is folyik.

Megjegyzés. A fenti hatásokat szálkötegekkel is leírhatjuk, bár ez kevéssé ad hozzá, mivel az S 1
fölötti összes U (1)-köteg triviális. Hasznos lehet azonban a mértékfoltokban gondolkodni. Ha S 1-et
két folttal fedjük le, akkor A-t mindkét folton belül mértéktranszformációval eltüntethetjük, és a
fenti két példában a fizikai fázisok kizárólag az átmeneti függvényekből származnak. Ez bizonyos
helyzetekben kényelmesebb lehet, mivel az A hatásai nem jelennek meg az egyes foltok Schrödinger-
egyenleteiben.
