---
id: ipho-book-1971-q2
problem: ipho-book-1971-q2
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

A hidrogén és a levegő adatait a négy állapotban következőképp jelöljük (feltesszük, hogy a csőbeli higanyoszlop magasságának megváltozása során a higanyszint a dugattyúban jó közelítéssel állandó, mert a dugattyú átméróje sokkal nagyobb, mint a csőé):

\begin{tabular}[t]{|l|l|l|l|l|}
\hline állapot & 1 & 2 & 3 & 4 \\
\hline hidrogén nyomása & $p_{\mathrm{h} 1}$ & $p_{\mathrm{h} 2}$ & $p_{\mathrm{h} 3}$ & $p_{\mathrm{h} 4}$ \\
\hline hidrogén térfogata & $V_{\mathrm{h} 1}$ & $V_{\mathrm{h} 2}$ & $V_{\mathrm{h} 3}$ & $V_{\mathrm{h} 4}$ \\
\hline levegő nyomása & $p_{1}$ & $p_{2}$ & $p_{34}$ & $p_{34}$ \\
\hline levegő térfogata & $V_{1}$ & $V_{23}$ & $V_{23}$ & $V_{4}$ \\
\hline közös hómérséklet & 273 K & 273 K & $T_{3}$ & $T_{4}$ \\
\hline
\end{tabular}

Minden nyomást Hgcm-ben mérünk. A Torricelli-cső hossza $L$ (cm-ben), a hidrogén térfogatának mértéke a hidrogén által betöltött csőrész hossza.

A hidrogénre az 1 és 2 állapotok között alkalmazzuk a Boyle-Mariotte-törvényt. A nyomások $p_{\mathrm{h} 1}=(100-70) \mathrm{Hgcm}=30 \mathrm{Hgcm}$ és $p_{\mathrm{h} 2}=(60-40) \mathrm{Hgcm}=$ $=20 \mathrm{Hgcm}$. Tehát
\[
30(L-70)=20(L-40) .
\]
Innen megtudjuk a Torricelli-cső hosszát: $L=130 \mathrm{~cm}$. A négy hidrogéntérfogatnak megfelelő csőhossz:
\[
V_{\mathrm{h} 1}=60 \mathrm{~cm}, \quad V_{\mathrm{h} 2}=90 \mathrm{~cm}, \quad V_{\mathrm{h} 3}=80 \mathrm{~cm}, \quad V_{\mathrm{h} 4}=85 \mathrm{~cm} .
\]

A hidrogén nyomása a 3, illetve 4 állapotban $p_{\mathrm{h} 3}=p_{34}-50 \mathrm{Hgcm}$, illetve $p_{\mathrm{h} 4}=p_{34}-45 \mathrm{Hgcm}$. A levegő nyomása 3. és 4 állapotok között nem változott meg, ezért a higanyszál csak úgy mehetett le, hogy a hőmérséklet emelkedett. De akkor a dugattyút is feljebb kell húzni, hogy melegebb állapotban a levegó nyomása ugyanannyi maradhasson.

Felírjuk a hidrogénre az egyesített gáztörvényt a 2 és 3 állapotok között:
\[
\frac{20 \cdot 90}{273}=\frac{\left(p_{34}-50\right) 80}{T_{3}} .
\]
Felírjuk a hidrogénre az egyesített gáztörvényt a 3 és 4 állapotok között:
\[
\frac{\left(p_{34}-50\right) 80}{T_{3}}=\frac{\left(p_{34}-45\right) 85}{T_{4}} .
\]
Felírjuk a levegőre Gay-Lussac II. törvényét a 2 és 3 állapotok között:
\[
\frac{p_{34}}{T_{3}}=\frac{60}{273} .
\]
Ennek az egyenletrendszernek a megoldása: $p_{34}=80 \mathrm{Hgcm}, T_{3}=364 \mathrm{~K}, T_{4}=$ $=451 \mathrm{~K}$. A hidrogén nyomásai: $p_{\mathrm{h} 3}=30 \mathrm{Hgcm}, p_{\mathrm{h} 4}=35 \mathrm{Hgcm}$. Ezzel minden kérdésre feleltünk.

A levegő térfogatainak az arányát is kiszámíthatjuk a gáztörvényekből:
\[
V_{1}: V_{23}: V_{4}=6: 10: 12,4 .
\]

Megjegyzés. Az eredeti feladat figyelembe kívánta vetetni a higany hótágulását is. Fizikai szempontból nézve ennek nincs sok értelme, hiszen a higany nemlineáris hótágulása és gőznyomása legalább annyit jelent, mint a hốtágulás okozta százalékos nagyságrendi eltérés.
