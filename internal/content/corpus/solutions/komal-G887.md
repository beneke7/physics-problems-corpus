---
id: komal-G887
source: komal
language: hu
translated: false
problem: komal-G887
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Vegyük fel az adatokat, illetve a kiszámolandó mennyiségeket: $d_{0\,\textrm{acél}}=4{,}160\,\mathrm{cm}$; $d_{0\,\textrm{Al}}=4{,}150\,\mathrm{cm}$; $\alpha_\textrm{acél}=1{,}2\cdot 10^{-5}\,\mathrm{\tfrac{1}{K}}$; $\alpha_{\textrm{Al}}=2{,}4\cdot 10^{-5}\,\mathrm{\tfrac{1}{K}}$; $T_\textrm{acél}=?$ $T_\textrm{Al}=?$ $T_\textrm{közös}=?$

 a) A lineáris hőtágulás egyenlete:
 $\Delta\ell=\alpha\ell_0\Delta T.$
 Az acélgolyó átmérője $0{,}010\,\mathrm{cm}$-rel nagyobb, mint a $0\,^\circ\mathrm{C}$-os alumíniumlemezen lévő lyuk átmérője, ezért a golyót hűteni kell ahhoz, hogy átférjen a lyukon:
 $\Delta T_\textrm{acél}=\frac{\Delta\ell}{\alpha_\textrm{acél}d_{0\,\textrm{acél}}}=\frac{-0{,}010\,\mathrm{cm}}{1{,}2\cdot 10^{-5}\,\mathrm{\frac{1}{K}}\cdot 4{,}160\,\mathrm{cm}}=-200{,}3\,^\circ\mathrm{C}\approx-200\,^\circ\mathrm{C}.$
 Az acélgolyót tehát $T_\textrm{acél}=-200\,^\circ\mathrm{C}$-ra (ez lényegében a folyékony nitrogén hőmérséklete) kell lehűtenünk ahhoz, hogy átférjen a lyukon.

 Megjegyzés. Vegyük észre, hogy a megoldásban felváltva használtuk a K (kelvin) és a $^\circ\mathrm{C}$ egységeket olyan mennyiségek esetén, ahol hőmérséklet-különbségekről van szó. Ezzel nem vétünk hibát, ugyanis a hőmérséklet-különbségek megegyeznek a kétféle skálán, mert azok között csak egy 273 fokos eltolás adja az eltérést.

 b) A lyuk ugyanúgy tágul, mintha anyaggal lenne kitöltve, tehát a lyuk hőtágulásánál is ugyanúgy kell eljárnunk, mint az acélgolyó esetén:
 $\Delta T_\textrm{Al}=\frac{\Delta\ell}{\alpha_\textrm{Al}\cdot d_{0\,\textrm{Al}}}=\frac{0{,}010\,\mathrm{cm}}{2{,}4 \cdot 10^{-5}\,\mathrm{\frac{1}{K}}\cdot 4{,}150\,\mathrm{cm}}=100{,}4\,^\circ\mathrm{C}\approx100\,^\circ\mathrm{C}.$
 Az alumíniumlemezt tehát $T_\textrm{Al}=100\,^\circ\mathrm{C}$-ra kell felmelegítenünk ahhoz, hogy az acélgolyó átférjen rajta.

 Megjegyzés. Nem véletlen, hogy az acélgolyó esetén abszolút értékre kétszer akkora hőmérséklet-változás jött ki, mert az acélnak éppen feleakkora a hőtágulási együtthatója, mint az alumíniumnak, tehát ugyanakkora átmérő változáshoz kétszeres hőmérséklet-változás kell. Nagyon pontosan számolva nem egészen kell kétszer akkora, mert a kiindulási átmérők egy kissé eltérnek egymástól.

 c) Kiinduláskor az alumíniumban a lyuk átmérője kisebb, mint az acélban, azonban a hőtágulási együtthatója nagyobb, tehát melegítve valamikor utoléri az acélt. Használjuk ki, hogy az alumínium kétszer akkorát tágul, mint az acél, és kezdetben $0{,}010\,\mathrm{cm}$ a köztük lévő különbség. Ha tehát az acél $0{,}010\,\mathrm{cm}$-t tágul, akkor az alumínium $0{,}020\,\mathrm{cm}$-t, vagyis éppen egyforma lesz az átmérő. Az acél $0{,}010\,\mathrm{cm}$-es hőtágulásához $200\,^\circ\mathrm{C}$-os melegítés kell, ugyanígy az alumínium $0{,}020\,\mathrm{cm}$-es tágulásához is, tehát a helyes válasz az, hogy a közös hőmérséklet: $T_\textrm{közös}=200\,^\circ\mathrm{C}$.

 Megjegyzés. Azok kedvéért, akik nem szeretik az ilyen logikai megfontolásokat, nézzük meg, hogyan lehet egyenletekkel megoldani a feladat c) részét:
 $\Delta\ell_\textrm{Al}=\Delta\ell_\textrm{acél}+0{,}010\,\mathrm{cm},$
 vagyis
 $\alpha_\textrm{Al}d_{0\,\textrm{Al}}\Delta T=\alpha_\textrm{acél}d_{0\,\textrm{acél}}\Delta T+0{,}010\,\mathrm{cm},$
 amiből a hőmérséklet-változás így fejezhető ki:
 $\Delta T=\frac{0{,}010\,\mathrm{cm}}{\alpha_\textrm{Al}d_{0\,\textrm{Al}}-\alpha_\textrm{acél}d_{0\,\textrm{acél}}}=201{,}3\,^\circ\mathrm{C},$
 vagyis a fenti logikai megfontolásunk 1%-nál pontosabb eredményt adott.
