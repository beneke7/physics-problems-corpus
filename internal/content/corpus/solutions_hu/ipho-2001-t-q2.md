---
id: "ipho-2001-t-q2"
problem: "ipho-2001-t-q2"
source: "ipho"
language: "hu"
solution_language: "hu"
solution_type: "official"
source_pdf: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf"
figure_files: []
provenance_note: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf; Mathpix OCR"
verification_status: "pending"
---

## Megoldás 2

$a$ ) Egy $R$ sugarú, $T$ hőmérsékletú (abszolút fekete) test egységnyi idő alatt $4 \pi R^{2} \sigma T^{4}$ energiát sugároz ki ( $\sigma$ a Stefan-Boltzmann-állandó). Ebből az energiából az $\ell$ távolságra lévő Földre felületegységenként és időegységenként
\[
P=\frac{4 \pi R^{2} \sigma T^{4}}{4 \pi \ell^{2}}
\]
energia jut; ez az egyik mérhető adat.
A kalcium színképvonalának (ugyancsak mérhető) $\Delta \lambda$ eltolódása és a csillag $m_{0}$ tömege, valamint $R$ sugara között az energiamegmaradás törvénye teremt kapcsolatot:
\[
\frac{h c}{\lambda_{0}}-\frac{G m_{0}}{R} \cdot \frac{h}{c \lambda_{0}}=\frac{h c}{\lambda}-\frac{G m_{0}}{\ell} \cdot \frac{h}{c \lambda} .
\]
A jobb oldal második tagja $\ell \gg R$ miatt elhanyagolható. A fenti összefüggésból a közönséges csillag sugarának és tömegének arányára $\left(\Delta \lambda=\lambda-\lambda_{0} \ll \lambda_{0}\right.$ felhasználásával)
\[
\frac{R}{m_{0}}=\frac{G \lambda_{0}}{c^{2} \Delta \lambda}
\]
adódik.
Tudjuk továbbá, hogy a kettőscsillag egyes tagjainak pályasugara $r_{1}=\ell \Delta \theta / 2$, illetve $r_{2}=\ell \Delta \varphi / 2$, a szögsebességük kifejezhető a mérhető $2 \tau$ keringési idővel $(\omega=\pi / \tau)$, így a neutroncsillagra vonatkozó Newton-féle mozgásegyenlet:
\[
\frac{G M m_{0}}{\left(r_{1}+r_{2}\right)^{2}}=M r_{2} \omega^{2} .
\]
A (01-1), (01-2) és (01-3) egyenletek összevetéséből a Föld és a kettőscsillag távolságára végül a következő kifejezés adódik:
\[
\ell=\frac{2}{\pi} \cdot \frac{c \tau}{T(\Delta \theta+\Delta \varphi)} \sqrt{\frac{2 \cdot \Delta \lambda \cdot \sqrt{P / \sigma}}{\Delta \varphi \cdot \lambda_{0}}} .
\]
b) A kibocsátott gáz mozgását a neutroncsillag centrális gravitációs erốtere határozza meg, emiatt a gáz perdülete megmarad:
\[
r_{0}^{2} \omega_{0}=r_{\mathrm{f}}^{2} \omega_{\mathrm{f}},
\]
ahol $\omega_{0}$ a gáz szögsebessége a neutroncsillagtól mért $r_{0}$ távolságra, $\omega_{\mathrm{f}}$ pedig a legközelebbi helyzetben.

A közönséges csillag körmozgásának feltétele szerint
\[
\frac{G M m_{0}}{r_{0}^{2}}=m_{0} \omega_{0}^{2} r_{0} \rightarrow \omega_{0}^{2}=\frac{G M}{r_{0}^{3}} .
\]

A $\mathrm{d} m$ tömegú gázra felírható energiamegmaradás:
\[
\frac{1}{2} \mathrm{~d} m\left(v_{0}^{2}+r_{0}^{2} \omega_{0}^{2}\right)-\frac{G M \mathrm{~d} m}{r_{0}}=\frac{1}{2} \mathrm{~d} m v_{\mathrm{f}}^{2}-\frac{G M \mathrm{~d} m}{r_{\mathrm{f}}},
\]
ahol $v_{\mathrm{f}}=r_{\mathrm{f}} \omega_{\mathrm{f}}$. Ezekből az egyenletekből a legkisebb távolságra az
\[
\left(\frac{r_{0}}{r_{\mathrm{f}}}\right)^{2}-2 \frac{r_{0}}{r_{\mathrm{f}}}-\left(\frac{v_{0}^{2} r_{0}}{G M}-1\right)=0
\]
egyenlet adódik. Ennek a fizikailag értelmes ( $r_{\mathrm{f}}<r_{0}$ ) megoldásából:
\[
r_{\mathrm{f}}=\frac{1}{\sqrt{1+\frac{v_{o}^{2} r_{0}}{G M}}} r_{0} .
\]
