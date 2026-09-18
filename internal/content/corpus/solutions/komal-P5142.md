---
id: komal-P5142
source: komal
language: hu
translated: false
problem: komal-P5142
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ Az abszolút fekete test által a teljes hullámhossztartományban időegységenként és felületegységenként a felület normálisának irányában kisugárzott energia a Stefan–Boltzmann-törvény szerint a hőmérséklet negyedik hatványával arányos, azaz
 $(1)$ $P_0 = \sigma T^4,$
 ahol $\sigma = 5{,}67\cdot 10^{-8}~{\mathrm{W}\mathrm{m}^{-2}\mathrm{K}^{-4}}$. Egységnyi idő alatt az $R_\odot$ sugarú, feketetest-sugárzónak tekintett Nap teljes felszínén, a felszínre merőleges irányban kiáramló energia:
 $(2)
$ $L_\odot = 4R_\odot^2 \pi P_\odot = 4R_\odot^2 \pi \sigma T_\odot^4.$
 Ez az energia a Naptól $r$ távolságban egy $4r^2 \pi$ felszínű gömbön oszlik el egyenletesen, így egységnyi idő alatt az $r$ sugarú gömb egységnyi felületén, a felületre merőlegesen áthaladó energia:
 $(3)
$ $p_0 = \sigma T_\odot^4 \, \dfrac{R_\odot^2}{r^2}.$
 Az elnyelt energia nagysága szempontjából nem számít, hogy a felület adott pontjában a sugárzás a felület normálisával mekkora szöget bezáró irányban érkezett, ezért a tökéletesen fekete, $R$ sugarú, gömb alakú szonda ebből a szempontból $R^2\pi$ nagyságú felületként (körlapként) tekinthető, így az általa másodpercenként elnyelt energia:
 $(4)
$ $a_0 = \sigma T_\odot^4 \, \dfrac{R_\odot^2}{r^2} \, R^2 \pi.$
 A szonda azonban maga is bocsát ki sugárzást, mégpedig a teljes felületén. Tegyük fel, hogy a szonda is abszolút fekete testként sugároz, így a felületére merőleges irányban a szonda által másodpercenként kibocsátott teljes energia:
 $(5)
$ $e_0 = 4 R^2 \pi \sigma T^4.$
 Mivel a szonda hőmérséklete állandó, az elnyelt és a kibocsátott energiának meg kell egyeznie:
 $(6)
$ $a_0 = e_0, \text{ azaz }\sigma T_\odot^4 \, \dfrac{R_\odot^2}{r^2} \, R^2 \pi = 4 R^2 \pi \sigma T^4,$
 ebből pedig $r$-re a következő kifejezést kapjuk:
 $(7)
$ $r = \dfrac{1}{2} \, R_\odot \left ( \dfrac{T_\odot}{T} \right )^2.$
 Számértékekkel:
 $(8)
$ $r = \dfrac{1}{2} \cdot {6.96\cdot 10^8}~{\mathrm{km}} \cdot \left ( \dfrac{{5778}~{\mathrm{K}}}{{180}{\mathrm{K}}} \right )^2 = {3{,}59\cdot 10^{11}}~{\mathrm{m}} \approx {2{,}4}~{\mathrm{CSE}}.$
 A szonda tehát a Naptól ${2{,}4}{\mathrm{CSE}}$ távolságban kering.
 $b)$ A Nap luminozitása $L_\odot = {3{,}83\cdot 10^{26}}~{\mathrm{W}}$, azaz a Nap felszínén a teljes hullámhossztartományban másodpercenként $\Delta E = {3{,}83\cdot10^{26}}~{\mathrm{J}}$ energia távozik. Ez az energia a Naptól $r$ távolságban egy $4r^2\pi$ felületű gömb felszínén oszlik el egyenletesen.
 A gömb alakú, $R$ sugarú, tökéletesen fekete szonda a sugárzás által rá gyakorolt erőhatás szempontjából is úgy viselkedik, mint egy $R$ sugarú, azaz $R^2\pi$ felületű körlap, amelynek síkja merőleges a sugárzás irányára, így a szondára $\Delta t = {1}{\mathrm{s}}$ alatt eső energia:
 $(9)
$ $P = L_\odot \, \dfrac{R^2 \pi}{4r^2\pi} = \dfrac{L_\odot}{4} \, \dfrac{R^2}{r^2}.$
 Mivel a szonda tökéletesen fekete, ezt az energiát teljes egészében elnyeli. Így a $\Delta t = {1}~{\mathrm{s}}$ alatt a sugárzással együtt elnyelt impulzus:
 $(10)
$ $\Delta p = \dfrac{P \Delta t}{c}.$
 A szondára a sugárzás által gyakorolt erőhatás nagysága így:
 $(11)
\label{eq:F_r}
$ $F_\text{r} = \dfrac{\Delta p}{\Delta t} = \dfrac{L_\odot}{4 c} \, \dfrac{R^2}{r^2}.$
 $c)$ Az $m$ tömegű szondára a Nap gravitációs vonzása, illetve a sugárnyomásból származó, a gravitációs hatással éppen ellentétes irányú, kifelé mutató erő hat – a szonda által kibocsátott sugárzás a teljes felületen gömbszimmetrikusan távozik, ezért az ebből származó erő eredője nulla –, így a mozgásegyenlete:
 $(12)
$ $\dfrac{m v_\text{c}^{\prime 2}}{r} = F_\text{g} - F_\text{r} =
G \, \dfrac{M_\odot m}{r^2} - \dfrac{L_\odot}{4c} \, \dfrac{R^2}{r^2} =
\dfrac{m}{r} \left ( \dfrac{GM_\odot}{r} - \dfrac{L_\odot R^2}{4mcr} \right ).$
 Ebből fejezzük ki $v_\text{c}^{\prime 2}$-t:
 $(13)
$ $v_\text{c}^{\prime 2} = \dfrac{GM_\odot}{r} - \dfrac{L_\odot R^2}{4mcr}.$
 Az űreszköz mozgását a feladat szövege szerint csak a Nap gravitációs hatása befolyásolja, és mivel $m \ll M$, tekinthetjük úgy, hogy a szonda kibocsátása után a tömege változatlan ($M$), így a mozgásegyenlete:
 $(14)
$ $\dfrac{M v_\text{c}^2}{r} = G \, \dfrac{M_\odot M}{r^2}.$
 Ebből fejezzük ki $v_\text{c}^2$-t:
 $(15)
$ $v_\text{c}^2 = \dfrac{GM_\odot}{r}.$
 A $v_\text{c}^{\prime 2}$-re és a $v_\text{c}^2$-re vonatkozó egyenletekből, felhasználva a gömb alakú szonda sugara, sűrűsége és tömege közti összefüggést is:
 $(16)
$ $v_\text{c}^{\prime 2} = v_\text{c}^2 - \dfrac{L_\odot R^2}{4mcr} =
v_\text{c}^2 - \dfrac{L_\odot R^2}{4 \, \dfrac{4\pi}{3} \, \varrho R^3 cr} =
v_\text{c}^2 - \dfrac{3L_\odot}{16 \pi c \varrho Rr} =
v_\text{c}^2 \left ( 1 - \dfrac{3L_\odot}{16 \pi c \varrho Rr v_\text{c}^2} \right ),$
 azaz
 $(17)
$ $v_\text{c}^\prime = v_\text{c} \sqrt{1 - \dfrac{3L_\odot}{16 \pi c \varrho Rr v_\text{c}^2}}
\label{eq:v_c_prime}.$
 $d)$ Mivel $m \ll M$, ezért a szonda kibocsátása során az űreszköz sebességének változása elhanyagolható. A szonda megengedett maximális impulzusváltozása:
 $(18)
$ $\Delta p_\text{m} = m (v_\text{c} - v_\text{c}^\prime) = \dfrac{4\pi}{3} \, R_\text{m}^3 \varrho (v_\text{c} - v_\text{c}^\prime).$
 A (17) egyenlet gyökös kifejezésében szereplő ismert mennyiségek ($L_\odot$, $c$, $r$) helyébe írjuk be azok értékeit, a nevezőben szereplő nem ismertekre pedig adjunk reális (alsó) becslést:

 A szonda minden bizonnyal valamilyen fémötvözetből készült, így átlagos sűrűsége valószínűleg nagyobb a víz sűrűségénél: $\varrho \geq {10^3}~{\mathrm{kg}\,\mathrm{m}^{-3}}$.
 Sugara valószínűleg nagyobb ${1}{\mathrm{cm}}$-nél (ez a nemrégiben elhunyt Stephen Hawking által is támogatott Breakthrough Initiatives program $\alpha$ Centauri felé indítandó nanoszondái méretének nagyságrendje): $R \geq {0{,}01}{\mathrm{m}}$.
 A III. Kepler-törvény szerint a Naptól ${2.4}~{\mathrm{CSE}}$ távolságban a keringési idő mintegy ${3{,}7}~{\text{év}}$, ez pedig $v \approx {19}\cdot 10^4~{\mathrm{m}\,\mathrm{s}^{-1}}$ keringési sebességnek felel meg: $v_\text{c} \approx {1{,}9}\cdot 10^4~{\mathrm{m}\,\mathrm{s}^{-1}}$.

 A fenti értékekkel kiszámolhatjuk, hogy
 $(19)
$ $\dfrac{3L_\odot}{16 \pi c \varrho Rr v_\text{c}^2} \approx 6\cdot 10^{-5},$
 tehát a gyökös kifejezés helyett használhatjuk a feladat szövegében megadott $\sqrt{1 - x} \approx 1 - x/2$, ha $|x| \ll 1$ közelítést:
 $(20)
$ $v_\text{c}^\prime = v_\text{c} \sqrt{1 - \dfrac{3L_\odot}{16 \pi c \varrho Rr v_\text{c}^2}} \approx
v_\text{c} \left ( 1 - \dfrac{3L_\odot}{32 \pi c \varrho Rr v_\text{c}^2} \right ) =
v_\text{c} - \dfrac{3L_\odot}{32 \pi c \varrho Rr v_\text{c}} \rightarrow$
 $(21)
$ $v_\text{c} - v_\text{c}^\prime = \dfrac{3L_\odot}{32 \pi c \varrho Rr v_\text{c}}.$
 Ezt írjuk be az impulzusváltozás kifejezésébe:
 $(22)
$ $\Delta p_\text{m} = m (v_\text{c} - v_\text{c}^\prime) = \dfrac{4\pi}{3} \, R_\text{m}^3 \varrho (v_\text{c} - v_\text{c}^\prime) =
\dfrac{4\pi}{3} \, R_\text{m}^3 \varrho \, \dfrac{3L_\odot}{32 \pi c \varrho R_\text{m} r v_\text{c}} =
R_\text{m}^2 \, \dfrac{L_\odot}{8crv_\text{c}}.$
 Mivel
 $(23)
$ $v_\text{c}^2 = \dfrac{GM_\odot}{r} \rightarrow v_\text{c} = \sqrt{\dfrac{GM_\odot}{r}} \rightarrow r v_\text{c} = \sqrt{GM_\odot r},$
 ezért
 $(24)
$ $\Delta p_\text{m} = R_\text{m}^2 \, \dfrac{L_\odot}{8crv_\text{c}} = R_\text{m}^2 \, \dfrac{L_\odot}{8c \sqrt{\mathstrut GM_\odot r}}.$
 Ebből
 $(25)
$ $R_\text{m}^2 = \dfrac{\Delta p_\text{m} 8c \sqrt{\mathstrut GM_\odot r}}{L_\odot} \rightarrow
R_\text{m} = \sqrt{\dfrac{\Delta p_\text{m} 8c \sqrt{\mathstrut GM_\odot r}}{L_\odot}}
\label{eq:R_m}.$
 A számértékeket behelyettesítve:
 $(26)
$ $R_\text{m} = {0{,}21}~{\mathrm{m}} = {21}~{\mathrm{cm}}.$
 A gömb alakú szonda sugara tehát legfeljebb ${21}\,{\mathrm{cm}}$ lehet.
