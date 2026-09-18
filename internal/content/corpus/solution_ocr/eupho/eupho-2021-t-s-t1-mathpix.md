---
id: solution-ocr-eupho-2021-t-s-t1
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2021_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2021-T1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## T1: A Leak

Let $p _ { 1 } , V _ { 1 } , T _ { 1 }$ denote the (time dependent) pressure, volume, and temperature in the upper chamber, and $p _ { 2 } , V _ { 2 }$, $T _ { 2 }$ - those in the lower one. Note that $V _ { 1 } \equiv V$ does not change.

Consider a parcel of volume $v$ below the diaphragm containing $n$ moles of helium. It is convenient to imagine it bounded by two fictitious free thin massless pistons. During slow perturbations the parcel undergoes an adiabatic process. The pressure and the temperature for the parcel are actually the pressure and the temperature for entire lower chamber $p _ { 2 }$ and $T _ { 2 }$. The energy conservation for the parcel is

$$
0 = p _ { 2 } \mathrm {~d} v + \mathrm { d } \left( \frac { 3 } { 2 } n _ { v } R T _ { 2 } \right) = \frac { 5 } { 2 } p _ { 2 } \mathrm {~d} v + \frac { 3 } { 2 } v \mathrm {~d} p _ { 2 } .
$$

This gives

$$
\begin{align*}
v ^ { 5 } p _ { 2 } ^ { 3 } & = \text { const } ,  \tag{1}\\
T _ { 2 } ^ { 5 } p _ { 2 } ^ { - 2 } & = \text { const } . \tag{2}
\end{align*}
$$

The leak begins when the pressure below the diaphragm exceeds that in the upper chamber by $\Delta p \equiv$ $p _ { 0 } - p = m g H / V = p x$, where

$$
\begin{equation*}
x = \frac { m g H } { p V } . \tag{a.,b.,c.}
\end{equation*}
$$

a. We may let $v = V _ { 2 }$ before that.

$$
\begin{gather*}
V ^ { 5 } p ^ { 3 } = V _ { 0 } ^ { 5 } ( p + \Delta p ) ^ { 3 } = V _ { 0 } ^ { 5 } p ^ { 3 } ( 1 + x ) ^ { 3 } \\
V _ { 0 } = V ( 1 + x ) ^ { - 3 / 5 } \tag{a.}
\end{gather*}
$$

b. The energy conservation for the whole system:

$$
\begin{gathered}
0 = p _ { 1 } \mathrm {~d} V _ { 1 } + \mathrm { d } \left( \frac { 3 } { 2 } n _ { 1 } R T _ { 1 } \right) + p _ { 2 } \mathrm {~d} V _ { 2 } + \mathrm { d } \left( \frac { 3 } { 2 } n _ { 2 } R T _ { 2 } \right) = \\
\frac { 5 } { 2 } \left( p _ { 1 } \mathrm {~d} V _ { 1 } + p _ { 2 } \mathrm {~d} V _ { 2 } \right) + \frac { 3 } { 2 } \left( V _ { 1 } \mathrm {~d} p _ { 1 } + V _ { 2 } \mathrm {~d} p _ { 2 } \right) = \\
\frac { 5 } { 2 } p _ { 2 } \mathrm {~d} \left( V + V _ { 2 } \right) + \frac { 3 } { 2 } \left( V + V _ { 2 } \right) \mathrm { d } p _ { 2 }
\end{gathered}
$$

since the pressure above the diaphragm remains lower than that below by the same margin $\Delta p$ during the later process and $\mathrm { d } V _ { 2 } = \mathrm { d } \left( V + V _ { 2 } \right)$. Similarly to (1), we get

$$
\left( V + V _ { 2 } \right) ^ { 5 } p _ { 2 } ^ { 3 } = \text { const } .
$$

The pressure $p _ { 2 } ^ { \prime }$ in the lower chamber when the piston touches the diaphragm is found from the equation

$$
\begin{gather*}
V ^ { 5 } p _ { 2 } ^ { \prime 3 } = \left( V + V _ { 0 } \right) ^ { 5 } p _ { 0 } ^ { 3 } = V ^ { 5 } \left( 1 + \frac { 1 } { ( 1 + x ) ^ { 3 / 5 } } \right) ^ { 5 } p ^ { 3 } ( 1 + x ) ^ { 3 } \\
p _ { 2 } ^ { \prime } = p \left( 1 + ( 1 + x ) ^ { 3 / 5 } \right) ^ { 5 / 3 } \tag{3}
\end{gather*}
$$

The pressure in the upper chamber at this moment is

$$
p _ { 1 } ^ { \prime } = p _ { 2 } ^ { \prime } - \Delta p = p \left( \left( 1 + ( 1 + x ) ^ { 3 / 5 } \right) ^ { 5 / 3 } - x \right) .
$$

The temperature in the upper chamber is found from the equations of state $p V = n R T$ and $p ^ { \prime } V = ( 2 n ) R T ^ { \prime }$

$$
\begin{equation*}
T _ { 1 } ^ { \prime } = \frac { T } { 2 } \left( \left( 1 + ( 1 + x ) ^ { 3 / 5 } \right) ^ { 5 / 3 } - x \right) . \tag{b.}
\end{equation*}
$$

The temperature and the pressure in the lower chamber are related by (2). Substituting (3) we get

$$
\begin{equation*}
T _ { 2 } ^ { \prime } = T \left( \frac { p _ { 2 } ^ { \prime } } { p } \right) ^ { 2 / 5 } = T \left( 1 + ( 1 + x ) ^ { 3 / 5 } \right) ^ { 2 / 3 } . \tag{c.}
\end{equation*}
$$

## Preliminary grading scheme

a1 It's stated (or written as a formula) that the process is adiabatic
a2 Relation between $V$ and $p$ is found in adiabaic process
a3 Condition on when the diaphragm leaks
a4 Answer for $V _ { 0 }$
b1 Energy conservation for the whole system in differential form. If conservation law is written only for one half but heat transfer is taken into account: 0.5 pts.
b2 Internal energy for a mono-atomic gas
b3 Usage of $V _ { 1 } = \mathrm { const }$
b3 Usage of $p _ { 2 } - p _ { 1 } =$ const
b4 Relation between $V _ { 2 }$ and $p _ { 2 }$
b5 Equation to find $p _ { 2 } ^ { \prime }$ (or $T _ { 2 } ^ { \prime }$ ) before the end
b6 Usage of $n ^ { \prime } = 2 n$
b7 Answer for $T _ { 1 } ^ { \prime }$
c1 Relation between $T _ { 1 } ^ { \prime }$ and $T _ { 2 } ^ { \prime }$
c2 Answer for $T _ { 2 } ^ { \prime }$

Arithmetic or typo errors gives half of point (rounded up to 0.1) for the item and is not considered as a mistake afterwards.
