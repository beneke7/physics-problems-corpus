---
id: ipho-book-1999-q2
problem: ipho-book-1999-q2
source: ipho
language: hu
solution_language: hu
solution_type: official
source_pdf: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf"
figure_files: []
provenance_note: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf; Mathpix OCR"
verification_status: pending
---

## Megoldás 2

a) A mágneses indukcióvektor (a Biot-Savart-törvény - vagyis a jobbkéz-szabály - alapján) a $P$ pontban a papír síkjára merólegesen, felfelé mutat.
b) A megadott formula $\alpha=\pi / 2$ esetben (egyenes vezetőre) is igaz. Ekkor viszont az Ampére-törvény értelmében
\[
B(P)=\frac{\mu_{0} I}{2 \pi d}=k \cdot \operatorname{tg} \frac{\pi}{4},
\]
ahonnan a keresett arányossági tényezőre
\[
k=\frac{\mu_{0} I}{2 \pi d} .
\]
c) A $P^{*}$ pontban ( $P$-nek a csúcspontra vonatkoztatott tükörképében) a mágneses indukció a papír síkjára merólegesen lefelé mutat. A nagyságát többféle gondolatmenettel is meg tudjuk határozni.

Érvelhetünk úgy, hogy ha $\alpha$ helyébe $(\pi-\alpha)$-t írunk, vagyis a V-alakú vezetéket „kifordítjuk”, akkor a $P$ pont a vezetékhez képest éppen olyan helyzetbe kerül, mint amilyenben a $P^{*}$ pont volt az eredeti vezetékhez képest. Eszerint
\[
B\left(P^{*}\right)=k \cdot \operatorname{tg} \frac{\pi-\alpha}{2}=k \cdot \operatorname{ctg} \frac{\alpha}{2} .
\]

Másfajta megfontolással, a végtelen egyenes vezető mágneses terének ismeretét felhasználva is eljuthatunk a fenti eredményhez. Egészítsük ki gondolatban a Valakú vezetéket egy másik, ugyanakkora árammal átjárt V-alakkal úgy, hogy két egymást metsző végtelen egyenes vezetőt kapjunk. A kérdéses $P^{*}$ pont mindkét vezetőtől $d \sin \alpha$ távolságra van. A két vezeték mágneses terét szuperponálhatjuk, és kihasználhatjuk, hogy a végtelen egyenes vezető mágneses terét ismerjük:
\[
B\left(P^{*}\right)+B(P)=2 \cdot \frac{\mu_{0} I}{2 \pi d \sin \alpha},
\]
ahonnan az útmutatásban megadott azonosság felhasználásával:
\[
B\left(P^{*}\right)=k \cdot\left(\frac{2}{\sin \alpha}-\operatorname{tg} \frac{\alpha}{2}\right)=k \cdot \operatorname{ctg} \frac{\alpha}{2} .
\]
d) Ha egy $\mu$ mágneses dipólmomentumú, csapágyazott tengelyú mágnest $B$ indukciójú mágneses térben az egyensúlyi helyzetéből kicsiny $\varphi$ szöggel kitérítünk, a mágnesre
\[
M(\varphi)=-\mu \cdot B \cdot \sin \varphi \approx-\mu \cdot B \cdot \varphi=\Theta \beta
\]
forgatónyomaték hat. Innen leolvasható, hogy a torziós lengések periódusideje
\[
T=2 \pi \sqrt{\frac{\Theta}{\mu B}} \sim \frac{1}{\sqrt{B}} .
\]
- e) A két elméletnek a torziós lengések periódusidejére vonatkozó jóslatának aránya:
\[
\frac{T_{1}}{T_{2}}=\sqrt{\frac{B_{2}}{B_{1}}}=\sqrt{\frac{2 \alpha}{\pi \operatorname{tg} \frac{\alpha}{2}}} .
\]
Ez az arány $\alpha \rightarrow \pi / 2$ szögeknél (vagyis az egyenes vezető határeseténél) 1-hez tart. A másik határesetben, nagyon kicsiny $\alpha$ szögeknél (nagyon „hegyes” V-alaknál, $\operatorname{tg} \alpha \approx \alpha) \sqrt{4 / \pi}=1,13$, tehát itt sem tér el nagyon a két elmélet jóslata. A mérhetőség feltétele az, hogy a két jóslat legalább 10 százalékkal eltérjen egymástól, vagyis
\[
\sqrt{\frac{2 \alpha}{\pi \operatorname{tg} \frac{\alpha}{2}}}>1,1
\]
teljesüljön. Ezt jó közelítéssel az alábbi alakba írhatjuk:
\[
\alpha>1,9 \operatorname{tg} \frac{\alpha}{2} .
\]
Ezt az egyenlőtlenséget közelítőleg (pl. próbálgatással) egy zsebszámológép segítségével, vagy grafikusan könnyen meg lehet oldani, és a kérdéses szögtartományra $\alpha<0,77 \mathrm{rad}=44^{\circ}$ adódik.
