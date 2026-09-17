---
id: nbpho-2020-tunnel-diode
source: nbpho
native_id: "2020 P2 TUNNEL DIODE"
year: 2020
language: hu
translated: true
links_en: nbpho-2020-tunnel-diode
topic: [electromagnetism]
subtopic: [dc-circuits, ac-circuits, oscillations, non-linear-devices]
math_tools: [calculus, series-complex]
format: open-ended
points: 10
core_ideas: [kalda-circuits-idea10, kalda-circuits-idea12, kalda-circuits-idea25]
has_figure: true
figure_files: [nbpho-2020-tunnel-diode-fig1.jpg, nbpho-2020-tunnel-diode-fig2.jpg]
provenance_note: "NBPhO 2020 (Északi-Balti Fizika Olimpia), 2. feladat, szerző Jaan Kalda. Mathpix OCR born-digital PDF-ből (cache/phoxiv/nbpho/2020.pdf). Az ábrákat a Mathpix OCR-ből nyertük."
verification_status: pending
---

**2. ALAGÚT DIÓDA (10 pont)** — *Jaan Kalda.*

Az alagút dióda U-I görbéje az alábbi ábrán látható, (a) görbe. A feladat egyes részében egy idealizált (b) modellgörbét használunk.

![ábra](../../sources/nbpho/figures/nbpho-2020-tunnel-diode-fig1.jpg)

**i)** *(1 pont)* A dióda U-I görbéjének méréséhez azt egy változtatható feszültségforrással (az elektromotoros erő $\mathscr{E}$ 0V-tól 1V-ig változtatható) sorba kötött áramkörbe helyezzük, lásd az (a) kapcsolást. Az ampermérő belső ellenállása $r=2 \Omega$; az alkalmazott feszültség $\mathscr{E}=50 \mathrm{mV}$. Mekkora a dióda feszültsége $V_{i}$ és az árama $I_{i}$? Használd a dióda valódi U-I görbéjét!

![ábra](../../sources/nbpho/figures/nbpho-2020-tunnel-diode-fig2.jpg)

**ii)** *(1 pont)* Most vizsgáljuk meg a vezetékek önindukciójának hatását. Ennek az induktivitásnak a figyelembevételéhez az áramkört a (b) kapcsolás szerint kell módosítani; legyen $L=500 \mathrm{nH}$. A $K$ kapcsoló addig marad nyitva, amíg a feszültséget $\mathscr{E}=250 \mathrm{mV}$-ra nem állítjuk, majd bezárjuk. Mennyi idő alatt éri el az áram az $I_{1}=20 \mathrm{~mA}$ értéket? A továbbiakban (másként nem jelezve) hanyagoljuk el az akkumulátor és az ampermérő belső ellenállásait (legyen $r=0$ ), és használjuk az idealizált dióda U-I görbéjét!

**iii)** *(1 pont)* A ii. feladattal megegyező beállítások mellett mennyi idő telik el a kapcsoló bezárása után addig, amíg a dióda feszültsége eléri az $V_{2}=500 \mathrm{mV}$ értéket?

**iv)** *(2 pont)* A ii. feladattal megegyező beállítások mellett rajzold meg az áram időbeli változását, és határozd meg az áramingadozások periódusát és amplitúdóját!

**v)** *(2 pont)* A (b) áramkört a dióda U-I görbéjének méréséhez használjuk: minden adatponthoz a feszültséget a kívánt értékre állítjuk, miközben a kapcsoló nyitva marad, majd bezárjuk azt. Vedd figyelembe, hogy amikor az ampermérő árama nagy frekvenciával ingadozik, az átlagáramot mutatja. Rajzold meg a várt mérési eredményt, azaz az ampermérő átlagáramát az alkalmazott feszültség $V=\mathscr{E}$ függvényében!

**vi)** *(1 pont)* Eddig feltételeztük, hogy a dióda ideális eszköz; valójában van egy kis паразita kapacitása, legyen $C=30 \mathrm{pF}$. Ennek figyelembevételével az áramkört a (c) diagramnak megfelelően rajzoljuk. Most feltételezzük, hogy az ampermérő nem ideális, belső ellenállása $r=2 \Omega$. Tegyük fel, hogy a kapcsoló bezárása után a feszültséget lassan $\mathscr{E}=0 \mathrm{mV}$-ról $\mathscr{E}=150 \mathrm{mV}$-ra növeltük, így egy stacionárius (rezgésmentés) üzemi módot $V(t) \equiv V_{0}$ és $I(t) \equiv I_{0}$ értékekkel érünk el. Tegyük fel, hogy az áram és a feszültség kismértékben perturbálódik: $I=I_{0}+\delta I(t)$ és $V=V_{0}+\delta V(t)$, ahol $I_{0}$ és $V_{0}$ az stacionárius üzemi módban az áram és a feszültség. Kis perturbációs amplitúdók esetén a dióda U-I görbéjét linearizálhatjuk, amit $\delta V=R_{d} \delta I$ ad meg, ahol $R_{d}$ a dióda differenciális ellenállása. Határozd meg az $R_{d}$ értékét!

**vii)** *(2 pont)* Az előző feladat folytatásaként belátható, hogy az (c) áramkör stabilitási problémája, azaz a kérdés, hogy az áram kis $\delta I(t)$ perturbációi az időben exponenciálisan növekednek-e vagy sem, ekvivalens a (d) áramkör stabilitási problémájával (az akkumulátor eltávolítva, a dióda az előző feladatban talált differenciális ellenállásra helyettesítve). Mekkora az a legnagyobb $L$ vezetékinduktivitás, amelyhez a rendszer még stabil?
