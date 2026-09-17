---
id: usapho-2004-a1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2004-a1
solution_type: official
source_document: solution-document-usapho-2004-s
source_pdf: cache/phoxiv/usapho/2004_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2004_S.pdf."
---

A1. a. At the instant the switch is closed, there is no charge on the capacitor and no voltage across it. Applying Kirchhoff's junction rule Applying Kirchhoff's loop rule to the right loop

$$
I_{111}=I_{20}+I_{30} .
$$

Solving for $f_{30}$ and then $I_{10}$.

$$
t_{30}=1.5 t_{30} \quad t_{10}=1.5 t_{31}+t_{30}=2.5 t_{30}
$$

Applying Kirchhoff's loop rule to the left loop

$$
\begin{gathered}
0=6.00 \mathrm{~V}-(20.0 \Omega) I_{30}-(10.0 \Omega) I_{10}=6.00 \mathrm{~V}-(20.0 \Omega)\left(1.5 H_{30}\right)-(10.0 \Omega)\left(2.5 t_{30}\right) \\
0=6.00 \mathrm{~V}-(30.0 \Omega) t_{30}-(25.0 \Omega) t_{30}=6.00 \mathrm{~V}-(55.0 \Omega) H_{30}
\end{gathered}
$$

Solving for the currents $\quad l_{30}=\frac{6.00 \mathrm{~V}}{550 \Omega}=0.109 \mathrm{~A} . \quad l_{20}=1.5(0.109 \mathrm{~A})=0.104 \mathrm{~A}$ and

$$
I_{10}=2.5(0.109 \mathrm{~A})=0.273 \mathrm{~A}
$$

## (A solution using parallel and series resister combinations is equally valid.)

b. When the switch has been closed for a very long time, the capacitors are fully charged. Current no longer flows in the capacitor branch and

$$
I_{41}=0
$$

Applying Kitchhoff's loop rule to the left loop

$$
\begin{gathered}
0-6.00 \mathrm{~V}-(20.0 \Omega) t_{10}-(10.0 \Omega) t_{11}=6.00 \mathrm{~V}-(30.0 \Omega) t_{10} \\
t_{30}=t_{10}=\frac{6.00 \mathrm{~V}}{30.0 \Omega}=0.200 \mathrm{~A}
\end{gathered}
$$

c. The two capacitors are in series. Both have the same charge. The equivalent capacitance is
or

$$
\begin{gathered}
\frac{1}{C_{m}}=\frac{1}{C_{2}}+\frac{1}{C_{4}}=\frac{1}{2.00 \mu \mathrm{~F}}+\frac{1}{4.00 \mu \mathrm{~F}}=\frac{3}{4.00 \mu \mathrm{~F}} \\
C_{C_{9}}=1.33 \mu \mathrm{~F}
\end{gathered}
$$

The voltage across the equivalent capacitance is the same as that across the $20.0 \Omega 2$ resistor.

So the charge

$$
\begin{aligned}
& V_{r}=V_{10}=(20.0 \Omega) I_{20}=(20.0 \Omega)(0.200 \mathrm{~A})=4.00 \mathrm{~V} \\
& Q_{2}=Q_{4}=Q_{r q}=C_{e q} V_{.}=(1.33 \mu \mathrm{~F})(4.00 \mathrm{~V})=5.33 \mu \mathrm{C}
\end{aligned}
$$
