---
id: nbpho-2016-dimmer
source: nbpho
native_id: "2016 P4 DIMMER"
year: 2016
language: hu
translated: true
links_en: nbpho-2016-dimmer
topic: [electromagnetism]
subtopic: [ac-circuits, electronic-components, switches, power-control]
math_tools: [calculus, geometry-trigonometry, differential-equations]
format: open-ended
points: 9
core_ideas: []
has_figure: true
figure_files: [nbpho-2016-dimmer-fig1.png, nbpho-2016-dimmer-fig2.png, nbpho-2016-dimmer-fig3.png]
provenance_note: "NBPhO 2016 (Északi-Balti Fizika Olimpia), 4. feladat, szerző Siim Ainsaar. Mathpix OCR born-digital PDF-ből (cache/phoxiv/nbpho/2016.pdf). A feladat ábráit a forrás-PDF-ből nyertük ki."
verification_status: pending
---

**4. FÉNYERŐSZABÁLYOZÓ (9 pont)** — *Siim Ainsaar.*

A fénytörés szabályozására szolgáló fényerőszabályozó egy reosztátból, egy kondenzátorból, egy diacból és egy triacból áll, az alábbi kapcsolásban csatlakoztatva.

![A fényerőszabályozó kapcsolása](../../figures/nbpho/figures/nbpho-2016-dimmer-fig1.png)

A diac egy olyan alkatrész, amelynek viselkedését a fent látható feszültség-áram-karakterisztika határozza meg. A triac viszont egy áramvezérelt kapcsolóként gondolható el—nézd meg az alábbi ekvivalens sémát.

![A triac ekvivalens kapcsolása](../../figures/nbpho/figures/nbpho-2016-dimmer-fig2.png)

A $K_{t}$ kapcsoló nyitott marad, amíg a triacon átfolyó áram az $I_{t}$ küszöb alatti marad; becsukódik, amikor a küszöb áram (bármely irányban) alkalmazva van, és nyitva marad, amíg áram folyik a $K_{t}$ kapcsolón keresztül (a kapu áram nem számít, amíg a kapcsoló újra megnyílik).

**i)** *(3 pont)* Feltételezzük, hogy az $R_{t}$ ellenállás elég nagy ahhoz, hogy a diacon átfolyó töltés elhanyagolható. Legyen a szinuszos tápfeszültség maximális értéke $U$ és frekvenciája $f$; az reosztát ellenállása $R$ és a kondenzátor kapacitása $C$. Határozd meg a kondenzátor $U_{C}$ maximális feszültségét és $\varphi$ fáziseltolódást a tápfeszültséghez képest.

**ii)** *(2 pont)* Milyen egyenlőtlenségnek kell teljesülnie a diac karakterisztikus feszültségei $U_{b}$ és $U_{d}$, a triac küszöb árama $I_{t}$ és kapufelületi ellenállása $R_{t}$ között annak érdekében, hogy amikor a diac elkezd vezetni (amíg a kondenzátor feszültsége nő), a triac is azonnal vezetni kezdjen? Feltételezheted, hogy $I_{b}<I_{t}$ és hogy a diac feszültsége az $I_{t}$ áram mellett $U_{d}$.

![A lámpa feszültsége](../../figures/nbpho/figures/nbpho-2016-dimmer-fig3.png)

**iii)** *(2 pont)* A lámpa $U_{l}$ feszültsége az alábbi grafikonnak felel meg. Feltételezzük, hogy az i) rész feltételei és a ii) rész egyenlőtlensége érvényesülnek. Határozd meg a $t_{0}$ időtartamot, amelyben a lámpa feszültsége nulla.

**iv)** *(2 pont)* A $t_{0}$ és $f$ segítségével fejezd ki, hányszor kisebb a lámpa átlagos teljesítménye, mint egy dimmer nélküli lámpa teljesítménye, feltételezve, hogy a lámpa ellenállása nem változik.
