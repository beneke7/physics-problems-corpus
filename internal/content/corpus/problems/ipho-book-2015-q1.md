---
id: ipho-book-2015-q1
source: ipho
native_id: "IPhO 2015, 1. feladat."
year: 2015
language: hu
translated: false
topic: [pending]
subtopic: []
math_tools: []
format: scaffolded
core_ideas: []
points: null
has_solution: true
has_figure: true
figure_files: ["IPhO_konyv-p603-f1.png"]
provenance_note: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf; Mathpix OCR"
verification_status: pending
links_en: "ipho-2015-t1"
---

## Feladat 1

Napból érkező részecskék

A Nap felületéről érkező fotonok és a belsejéből érkező neutrínók a Nap belső és külső hőmérsékletéről adhatnak információt, valamint megerősítik azt is, hogy a Nap a benne zajló nukleáris folyamatok miatt ragyog.

A feladatban a következő adatokat használhatjuk: a Nap tömege: $M_{\odot}=2,00 \times$ $\times 10^{30} \mathrm{~kg}$, a Nap sugara: $R_{\odot}=7,00 \cdot 10^{8} \mathrm{~m}$, a Nap luminozitása (egységnyi idő alatt kisugárzott energia): $L_{\odot}=3,85 \cdot 10^{26} \mathrm{~W}$ és a Föld-Nap átlagos távolsága: $d_{\odot}=1,50 \cdot 10^{11} \mathrm{~m}$.

Néhány függvény határozatlan integrálja:
\[
\begin{aligned}
\int x \mathrm{e}^{a x} \mathrm{~d} x & =\left(\frac{x}{a}-\frac{1}{a^{2}}\right) \mathrm{e}^{a x}+\text { állandó, } \\
\int x^{2} \mathrm{e}^{a x} \mathrm{~d} x & =\left(\frac{x^{2}}{a}-\frac{2 x}{a^{2}}+\frac{2}{a^{3}}\right) \mathrm{e}^{a x}+\text { állandó, } \\
\int x^{3} \mathrm{e}^{a x} \mathrm{~d} x & =\left(\frac{x^{3}}{a}-\frac{3 x^{2}}{a^{2}}+\frac{6 x}{a^{3}}-\frac{6}{a^{4}}\right) \mathrm{e}^{a x}+\text { állandó. }
\end{aligned}
\]

A rész. A Naptól érkező sugárzás
1.A.1. Tegyük fel, hogy a Nap abszolút feketetestként sugároz. Ezt felhasználva határozzuk meg a Nap $T_{\odot}$ felszíni hőmérsékletét!

A napsugárzás spektrumát jó közelítéssel a Wien-féle eloszlás adja meg. Eszerint a Napból a Föld egy adott felületére egységnyi idő alatt, egységnyi frekvenciatartományban érkező energia:
\[
u(f)=A \frac{R_{\odot}^{2}}{d_{\odot}^{2}} \frac{2 \pi h}{c^{2}} f^{3} \exp \left(-h f / k_{\mathrm{B}} T_{\odot}\right),
\]
ahol $f$ a frekvencia, $A$ pedig a bejövő sugárzás irányára merőleges felület nagysága, $c$ a fénysebesség, $h$ a Planck-állandó és $k_{\mathrm{B}}$ pedig a Boltzmann-állandó.

Ezek után tekintsünk egy, a beeső napsugárzás irányára merőlegesen elhelyezett, $A$ felületú, félvezető anyagból készült, vékony napelemet.
1.A.2. A Wien-közelítést felhasználva fejezzük ki a napelem felületére beeső napsugárzás teljes $P_{\text {be }}$ teljesítményét az $A, R_{\odot}, d_{\odot}, T_{\odot}$ paraméterekkel, valamint a $c, h, k_{\mathrm{B}}$ fizikai állandókkal!
1.A.3. Fejezzük ki az egységnyi idő alatt, egységnyi frekvenciatartományban a napelem felületére beesó fotonok $n_{\gamma}(f)$ számát az $A, R_{\odot}, d_{\odot}, T_{\odot}, f$ paraméterekkel, valamint a $c, h, k_{\mathrm{B}}$ fizikai állandókkal!
![](../../figures/ipho/figures/IPhO_konyv-p603-f1.png)

A félvezető anyag, amiből a napelem készült, $E_{\mathrm{g}}$ szélességú tiltott sávval (angolul gap) rendelkezik. Alkalmazzuk a következő modellt. Minden, $E \geq E_{\mathrm{g}}$ energiájú foton egy elektront gerjeszt a tiltott sáv fölé. Ez az elektron $E_{\mathrm{g}}$ energiával járul hozzá a hasznos kimenő energiához, az esetleges többletenergiája hő formájában disszipálódik (nem hasznosul).
1.A.4. Legyen $x_{\mathrm{g}}=h f_{\mathrm{g}} / k_{\mathrm{B}} T_{\odot}$, ahol $E_{\mathrm{g}}=h f_{\mathrm{g}}$. Fejezzük ki a napelem $P_{\mathrm{ki}}$ hasznos kimenó teljesítményét az $x_{\mathrm{g}}, A, R_{\odot}, d_{\odot}, T_{\odot}$ paraméterekkel, valamint a $c, h, k_{\mathrm{B}}$ fizikai állandókkal!
1.A.5. Fejezzük ki a napelem $\eta$ hatásfokát $x_{\mathrm{g}}$ segítségével!
1.A.6. Ábrázoljuk vázlatosan $\eta$-t az $x_{\mathrm{g}}$ függvényében! Az $x_{\mathrm{g}}=0$ és az $x_{\mathrm{g}} \rightarrow \infty$ esetén érvényes értékeket is tüntessük fel. Mekkora az $\eta\left(x_{\mathrm{g}}\right)$ függvény meredeksége $x_{\mathrm{g}}=0$ és $x_{\mathrm{g}} \rightarrow \infty$ esetén?
1.A.7. Jelöljük $x_{0}-\mathrm{lal} x_{\mathrm{g}}$ azon értékét, ahol $\eta$ maximális. Írjuk fel azt a harmadfokú egyenletet, amiból $x_{0}$ meghatározható! Adjunk becslést $x_{0}$ értékére $\pm 0,25$ pontossággal! Ezt felhasználva számoljuk ki $\eta\left(x_{0}\right)$ értékét!
1.A.8. Tiszta szilícium esetén $E_{\mathrm{g}}=1,11 \mathrm{eV}$. Ezt az adatot felhasználva, számoljuk ki a szilíciumból készült napelem $\eta_{\text {Si }}$ hatásfokát!

A 19. század végén Kelvin és Helmholtz (KH) egy hipotézissel álltak elő a Nap sugárzásának magyarázatára. Feltételezték, hogy a Nap kezdetben egy óriási, elhanyagolható súrúségú, $M_{\odot}$ tömegú porfelhő volt, amely folyamatosan húzódott össze. A Nap sugárzása - feltevésük szerint - származhat a lassú zsugorodás során felszabaduló gravitációs potenciális energiából.
1.A.9. Tegyük fel, hogy a Nap egyenletes tömegeloszlású. Adjuk meg a Nap jelenlegi $\Omega$ gravitációs potenciális energiáját a $G$ gravitációs állandó, $M_{\odot}$ és $R_{\odot}$ segítségével!
1.A.10. A KH-hipotézis alapján becsüljük meg azt a legnagyobb lehetséges $\tau_{\mathrm{KH}}$ időt (években megadva), ameddig a Nap ragyogni tudna! Tételezzük fel, hogy ezen idő alatt a Nap luminozitása állandó.

A fenti módon kiszámolt $\tau_{\mathrm{KH}}$ idő nem egyeztethető össze a Naprendszer - meteoritok tanulmányozásával kapható - becsült életkorával. Ez azt mutatja, hogy a Nap energiaforrása nem lehet tisztán gravitációs eredetú.

B rész. A Napból érkező neutrínók
1938-ban Hans Bethe azt állította, hogy a Nap energiája a benne lévő hidrogén héliummá történő magfúziójából származik. Az eredő magreakció:
\[
4^{1} \mathrm{H} \rightarrow{ }^{4} \mathrm{He}+2 \mathrm{e}^{+}+2 \nu_{\mathrm{e}} .
\]
A reakcióban keletkező $\nu_{\mathrm{e}}$ „elektronneutrínók” tömege zérusnak vehető. Ezek a részecskék a Napból kiszabadulnak, és a Földön történő detektálásuk alátámasztja a magreakciók lezajlását a Nap belsejében. A neutrínók által elszállított energia elhanyagolható ebben a feladatban.
1.B.1. Számítsuk ki a Földet elérő neutrínók számának $\Phi_{\nu}$ fluxussürúségét $\mathrm{m}^{-2} \mathrm{~s}^{-1}$ egységben! A fenti reakcióban $\Delta E=4,0 \cdot 10^{-12} \mathrm{~J}$ energia szabadul
fel. Tételezzük fel, hogy a Nap által kisugárzott energia teljes mértékben ebből a reakcióból származik.

A Nap magjából a Földig tartó útjuk során a $\nu_{\mathrm{e}}$ elektronneutrínók egy része más típusú, $\nu_{\mathrm{x}}$ neutrínókká alakul át ${ }^{26}$ A detektor a $\nu_{\mathrm{x}}$ neutrínókat $\frac{1}{6}$ akkora hatásfokkal érzékeli, mint amekkora hatásfokkal a $\nu_{\mathrm{e}}$ neutrínókat. Ha nem volna neutrínóátalakulás, akkor egy év alatt átlagosan $N_{1}$ számú neutrínó detektálását várnánk. Azonban az átalakulás miatt a valóságban egy év alatt átlagosan $N_{2}$ számú neutrínót ( $\nu_{\mathrm{e}}$-t és $\nu_{\mathrm{x}}$-et együttesen) detektálnak.
1.B.2. Határozzuk meg $N_{1}$ és $N_{2}$ segítségével, hogy a $\nu_{\mathrm{e}}$ neutrínók mekkora $r$ hányada alakul át $\nu_{\mathrm{x}}$ neutrínóvá!

Ahhoz, hogy a neutrínókat észlelni tudjuk, nagy, vízzel töltött detektorokat építünk. Habár a neutrínók anyaggal való kölcsönhatása meglehetősen ritka, olykor elektronokat löknek ki a detektorbeli vízmolekulákból. Ezek a nagy energiájú elektronok nagy sebességgel hatolnak át a vízen, mely folyamat során elektromágneses sugárzást bocsátanak ki. Amíg egy ilyen elektron sebessége nagyobb, mint a fény sebessége az $n$ törésmutatójú vízben, a sugárzás (ún. Cserenkov-sugárzás) kúp alakban bocsátódik ki.
1.B.3. Tételezzük fel, hogy a neutrínó által kilökött elektron a vízben való haladása során állandó ütemben, időegységenként $\alpha$ energiát veszít. Határozzuk meg a neutrínó által az elektronnak átadott $E_{\text {átadott }}$ energiát $\alpha, \Delta t, n, m_{\mathrm{e}}$ és $c$ segítségével, ha az elektron $\Delta t$ ideig bocsát ki Cserenkov-sugárzást! (Tételezzük fel, hogy az elektron a neutrínóval való kölcsönhatása előtt nyugalomban volt.)

A Nap belsejében a hidrogén héliummá történő fúziója több lépésben történik meg. Az egyik ilyen lépés során ${ }^{7}$ Be atommag (nyugalmi tömege $m_{\mathrm{Be}}$ ) keletkezik. Ezután ez az atommag egy elektront nyelhet el, melynek folyamán egy ${ }^{7} \mathrm{Li}$ atommag (nyugalmi tömege $m_{\mathrm{Li}}<m_{\mathrm{Be}}$ ) és egy $\nu_{\mathrm{e}}$ neutrínó keletkezik. A megfeleló magreakció:
\[
{ }^{7} \mathrm{Be}+\mathrm{e}^{-} \rightarrow{ }^{7} \mathrm{Li}+\nu_{\mathrm{e}} .
\]
Ha egy nyugalomban lévő Be atommag $\left(m_{\mathrm{Be}}=11,5 \cdot 10^{-27} \mathrm{~kg}\right)$ elnyel egy ugyancsak nyugvó elektront, a keletkező neutrínó energiája $E_{\nu}=1,44 \cdot 10^{-13} \mathrm{~J}$. Azonban a Be atommagok véletlenszerú termikus mozgást végeznek a Nap magjában lévő $T_{\mathrm{c}}$ hőmérséklet miatt, és mozgó neutrínóforrásként viselkednek. Emiatt a kibocsátott neutrínók energiája $\Delta E_{\text {rms }}$ négyzetes középértékkel fluktuál.
1.B.4. Ha $\Delta E_{\mathrm{rms}}=5,54 \cdot 10^{-17} \mathrm{~J}$, számoljuk ki a Be magok $V_{\mathrm{Be}}$ sebességének négyzetes középértékét, majd ezzel adjunk becslést $T_{\mathrm{c}}$-re!

Útmutatás: $\Delta E_{\text {rms }}$ a megfigyelés irányába mutató sebességkomponens négyzetes középértékétől függ.

\footnotetext{
${ }^{26}$ Ezen jelenség, az ún. neutrínóoszcilláció kísérleti igazolásáért Kadzsita Takaaki japán és Arthur B. McDonald kanadai tudósnak ítélték oda a 2015. évi fizikai Nobel-díjat.
