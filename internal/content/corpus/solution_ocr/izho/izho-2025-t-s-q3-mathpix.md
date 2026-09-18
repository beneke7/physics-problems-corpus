---
id: solution-ocr-izho-2025-t-s-q3
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2025_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2025-t-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 3. Dirac's monopole (10.0 points)

## Introduction

3.1 It is easy to establish that the dimension of the magnetic charge is equal to $\left[ q _ { m } \right] = \mathrm { A } \cdot \mathrm { m }$, therefore we obtain

$$
\begin{equation*}
x _ { 1 } = 1 ; x _ { 2 } = 1 ; x _ { 3 } = 0 ; x _ { 4 } = 0 . \tag{1}
\end{equation*}
$$

3.2 Calculation using the given formula leads to the answer

$$
\begin{equation*}
L = 1.69 \cdot 10 ^ { - 7 } \mathrm { Hn } . \tag{2}
\end{equation*}
$$

## Classical description

3.3 Since the average normal component of the magnetic induction vector over the cross-section is known, the magnetic flux through the ring is equal to

$$
\begin{equation*}
\Phi = \pi R ^ { 2 } B _ { z } ( x ) , \tag{3}
\end{equation*}
$$

and the induction EMF in the ring is determined by M. Faraday's law of electromagnetic induction

$$
\begin{equation*}
\varepsilon _ { i n d } ( x ) = - \frac { d \Phi } { d t } , \tag{4}
\end{equation*}
$$

from which we finally find

$$
\begin{equation*}
\varepsilon _ { \text {ind } } ( x ) = - \frac { d \Phi } { d x } \frac { d x } { d t } = V \pi R ^ { 2 } B _ { 0 } a ^ { 3 } \frac { 3 x } { \left( x ^ { 2 } + a ^ { 2 } \right) ^ { \frac { 5 } { 2 } } } . \tag{5}
\end{equation*}
$$

The graph of this dependence is shown schematically in the figure below.
![](../../../figures/solution-ocr/38230262894f43a12232d942.jpg)


3.4 Since the ring is superconducting, the induction EMF that occurs in the ring when the external magnetic flux changes is compensated by the self-induction EMF, that is,

$$
\begin{equation*}
\varepsilon _ { i n d } - L \frac { d l } { d t } = 0 , \tag{6}
\end{equation*}
$$

from where, taking into account formula (4) and integration with the initial condition, we obtain

$$
\begin{equation*}
I ( x ) = - \frac { \Phi } { L } = - \frac { B _ { 0 } \pi R ^ { 2 } } { L } \frac { a ^ { 3 } } { \left( x ^ { 2 } + a ^ { 2 } \right) ^ { \frac { 3 } { 2 } } } . \tag{7}
\end{equation*}
$$

The schematic graph of this dependence is shown in the figure below. Up to a negative coefficient, this graph repeats the graph of the dependence of the magnetic flux through the ring on the ring coordinate.
![](../../../figures/solution-ocr/a482b33dad00061ebd8fc316.jpg)
3.5 As follows from the obtained expression (7), after the magnet flies away through the ring, the final current in the ring is found to be zero, that is

$$
\begin{equation*}
I _ { f } = 0 . \tag{8}
\end{equation*}
$$

3.6 In the frame of reference associated with the monopole, the electrons in the ring are subject to the Lorentz force, whose magnitude can be represented as

$$
\begin{equation*}
F _ { L } ( z ) = - e V B _ { r } ( z ) , \tag{9}
\end{equation*}
$$

where $B _ { r }$ denotes the radial component of the magnetic field induction vector of the monopole. The minus sign appears because in this frame of reference the velocity of the ring is negative.

The radial component of the induction vector in this case can be easily expressed using the formula given in the problem formulation:

$$
\begin{equation*}
B _ { r } ( z ) = \frac { \mu _ { 0 } q _ { m } } { 4 \pi } \frac { R } { \left( R ^ { 2 } + z ^ { 2 } \right) ^ { \frac { 3 } { 2 } } } . \tag{10}
\end{equation*}
$$

Thus, the dependence of the Lorentz force on the ring coordinate has the form

$$
\begin{equation*}
F _ { L } ( z ) = - e V \frac { \mu _ { 0 } q _ { m } } { 4 \pi } \frac { R } { \left( R ^ { 2 } + z ^ { 2 } \right) ^ { \frac { 3 } { 2 } } } . \tag{11}
\end{equation*}
$$

This force always points in one direction, which means that the resulting formula is valid for any values of the ring coordinate.
3.7 The induction EMF in this case is equal to the work of the Lorentz force to move a single charge along the ring

$$
\begin{equation*}
\varepsilon _ { \text {ind } } ( z ) = \frac { 2 \pi R F _ { L } ( z ) } { e } = - \frac { \mu _ { 0 } q _ { m } V } { 2 } \frac { R ^ { 2 } } { \left( R ^ { 2 } + z ^ { 2 } \right) ^ { \frac { 3 } { 2 } } } . \tag{12}
\end{equation*}
$$

The schematic graph of this dependence is shown in the figure below.
![](../../../figures/solution-ocr/cb2fc2e96310cf960b50bfd8.jpg)
3.8 From formula (6) we find the current strength by integrating, taking into account that $d z = - V d t$, and also using the initial condition

$$
\begin{equation*}
I = - \frac { \mu _ { 0 } q _ { m } } { 2 L } \left( 1 - \frac { z } { \sqrt { R ^ { 2 } + z ^ { 2 } } } \right) . \tag{13}
\end{equation*}
$$

The schematic graph of this dependence is shown in the figure below.


![](../../../figures/solution-ocr/5e80e3a3d25c26d24534c427.jpg)
3.9 After the monopole passes away through the ring $( z = - \infty )$, the ring current "remains", whose strength is equal to

$$
\begin{equation*}
I _ { f } = - \frac { \mu _ { 0 } q _ { m } } { L } . \tag{14}
\end{equation*}
$$

Thus, unlike when a magnet passes through a ring, there must be a residual current that can be attempted to be detected in an experiment!

## Quantization of magnetic flux in superconductors

3.10 Cooper pairs are accelerated in the ring due to the action of the Lorentz force, therefore, using formula (12), which relates the force with the EMF arising in the ring, as well as M. Faraday's law (4), we obtain the following equation of motion of an electron in the ring

$$
\begin{equation*}
m _ { e } \frac { d v } { d t } = - \frac { e } { 2 \pi R } \frac { d \Phi } { d t } , \tag{15}
\end{equation*}
$$

where $v$ designates the speed of its motion.
The angular momentum of a pair of electrons relative to the center of the ring is equal to

$$
\begin{equation*}
M = 2 m _ { e } v R , \tag{16}
\end{equation*}
$$

therefore, the sought relationship takes the form

$$
\begin{equation*}
\Delta M = - \frac { e } { \pi } \Delta \Phi . \tag{17}
\end{equation*}
$$

3.11 Considering that the change in the magnetic field of the induced current is equal in magnitude and opposite to the change in the magnetic flux of the external field and taking into account N. Bohr's quantization rule, we find

$$
\begin{equation*}
\varphi _ { 0 } = \frac { \pi } { e } \hbar = 2.06 \cdot 10 ^ { - 15 } \mathrm {~Wb} . \tag{18}
\end{equation*}
$$

3.12 From formula (7), which relates the change in flux to the current in the ring, we obtain

$$
\begin{equation*}
\Delta I _ { 0 } = \frac { \varphi _ { 0 } } { L } = 1.22 \cdot 10 ^ { - 8 } \mathrm {~A} . \tag{19}
\end{equation*}
$$

## Estimating the Dirac Monopole Mass

3.13 The induction of the magnetic field of a monopole is determined by the formula from the problem statement, and since the magnetic field of a monopole is spherically symmetric, the total magnetic flux through a sphere, whose center coincides with the monopole, is equal to

$$
\begin{equation*}
\Phi = \mu _ { 0 } q _ { m } , \tag{20}
\end{equation*}
$$

and since it is quantized

$$
\begin{equation*}
\Phi = n \varphi _ { 0 } , \tag{21}
\end{equation*}
$$

where $n$ is an integer, then from expressions (20) and (21) we infer that the magnetic charge is also quantized

$$
\begin{equation*}
q _ { m } = n \frac { \varphi _ { 0 } } { \mu _ { 0 } } . \tag{22}
\end{equation*}
$$

From formula (22) we conclude that the elementary magnetic charge is equal to

$$
\begin{equation*}
q _ { m 0 } = \frac { \varphi _ { 0 } } { \mu _ { 0 } } = \frac { \pi \hbar } { e \mu _ { 0 } } = 1.64 \cdot 10 ^ { - 9 } \mathrm {~A} \cdot \mathrm {~m} . \tag{23}
\end{equation*}
$$

3.14 Since the change in the magnetic flux through the ring during the flight of the Dirac monopole is equal to one quantum of the magnetic flux, the change in current in the ring is equal to the previously found value

$$
\begin{equation*}
\Delta I = \Delta I _ { 0 } = 1.22 \cdot 10 ^ { - 8 } \mathrm {~A} . \tag{24}
\end{equation*}
$$

3.15 The energy of the electric field of a sphere of radius $r _ { 0 }$ uniformly charged over the surface can be calculated using the formula

$$
\begin{equation*}
W _ { e } = \frac { e ^ { 2 } } { 8 \pi \varepsilon _ { 0 } r _ { 0 } } . \tag{25}
\end{equation*}
$$

Equating this energy to the rest energy


$$
\begin{equation*}
W _ { e } = m _ { e } c ^ { 2 } , \tag{26}
\end{equation*}
$$

we find the classical radius of the electron

$$
\begin{equation*}
r _ { 0 } = \frac { e ^ { 2 } } { 8 \pi \varepsilon _ { 0 } m _ { e } c ^ { 2 } } = 1.40 \cdot 10 ^ { - 15 } \mathrm {~m} . \tag{27}
\end{equation*}
$$

3.16 The energy of the magnetic field of the Dirac monopole $W _ { m }$ is found by analogy with the electric field energy of electron (25) as

$$
\begin{equation*}
W _ { m } = \frac { \mu _ { 0 } q _ { m 0 } ^ { 2 } } { 8 \pi r _ { 0 } } . \tag{28}
\end{equation*}
$$

Equating this energy to the rest energy

$$
\begin{equation*}
W _ { m } = m _ { m } c ^ { 2 } , \tag{29}
\end{equation*}
$$

we obtain for the sought mass ratio

$$
\begin{equation*}
\frac { m _ { m } } { m _ { e } } = \frac { \mu _ { 0 } \varepsilon _ { 0 } q _ { m 0 } ^ { 2 } } { e ^ { 2 } } = \left( \frac { \pi } { e ^ { 2 } c \mu _ { 0 } } \right) ^ { 2 } = 1.17 \cdot 10 ^ { 3 } . \tag{30}
\end{equation*}
$$

|  | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 3.1 | Formula (1): $x _ { 1 } = 1 ; x _ { 2 } = 1 ; x _ { 3 } = 0 ; x _ { 4 } = 0$, за каждое по 0.2 | 0.8 | 0.8 |
| 3.2 | Numerical value in formula (2): $L = 1.69 \cdot 10 ^ { - 7 } \Gamma \mathrm { H }$ | 0.6 | 0.6 |
| 3.3 | Formula (3): $\Phi = \pi R ^ { 2 } B _ { z } ( x )$ | 0.2 | 1.2 |
|  | Formula (4): $\varepsilon _ { \text {ind } } ( x ) = - \frac { d \Phi } { d t }$ | 0.2 |  |
|  | Formula (5): $\varepsilon _ { \text {ind } } ( x ) = V \pi R ^ { 2 } B _ { 0 } a ^ { 3 } \frac { 3 x } { \left( x ^ { 2 } + a ^ { 2 } \right) ^ { \frac { 5 } { 2 } } }$ | 0.2 |  |
|  | Qualitative graph: |  |  |
|  | Passes through the origin | 0.2 |  |
|  | Two local extrema, maximum and minimum | 0.2 |  |
| 3.4 | Formula (6): $\varepsilon _ { \text {ind } } - L \frac { d I } { d t } = 0$ | 0.2 | 0.8 |
|  | Formula (7): $I ( x ) = - \frac { B _ { 0 } \pi R ^ { 2 } } { L } \frac { a ^ { 3 } } { \left( x ^ { 2 } + a ^ { 2 } \right) ^ { \frac { 3 } { 2 } } }$ | 0.2 |  |
|  | Qualitative graph: |  |  |
|  | Extremum at the origin | 0.2 |  |
| 3.5 | Formula (8): $I _ { f } = 0$ | 0.2 | 0.2 |
| 3.6 | Formula (9): $F _ { L } ( z ) = - e V B _ { r } ( z )$ | 0.2 | 0.6 |
|  | Formula (10): $B _ { r } ( z ) = \frac { \mu _ { 0 } q _ { m } } { 4 \pi } \frac { R } { \left( R ^ { 2 } + z ^ { 2 } \right) ^ { \frac { 3 } { 2 } } }$ | 0.2 |  |
|  | Formula (11): $F _ { L } ( z ) = - e V \frac { \mu _ { 0 } q _ { m } } { 4 \pi } \frac { R } { \left( R ^ { 2 } + z ^ { 2 } \right) ^ { \frac { 3 } { 2 } } }$ | 0.2 |  |
| 3.7 | Formula (12): $\varepsilon _ { \text {ind } } ( z ) = - \frac { \mu _ { 0 } q _ { m } V } { 2 } \frac { R } { \left( R ^ { 2 } + z ^ { 2 } \right) ^ { \frac { 3 } { 2 } } }$ | 0.2 | 0.6 |
|  | Qualitative graph: |  |  |
|  | Extremum at the origin | 0.2 |  |
| 3.8 | Formula (13): $I = - \frac { \mu _ { 0 } q _ { m } } { 2 L } \left( 1 - \frac { z } { \sqrt { R ^ { 2 } + z ^ { 2 } } } \right)$ | 0.2 | 0.8 |
|  | Quality graph: |  |  |
|  | Tends to zero a plus infinity | 0.2 |  |
|  | Monotonic in nature | 0.2 |  |
| 3.9 | Formula (14): $I _ { f } = - \frac { \mu _ { 0 } q _ { m } } { L }$ | 0.2 | 0.2 |
| 3.10 | Formula (15): $m _ { e } \frac { d v } { d t } = - \frac { e } { 2 \pi R } \frac { d \Phi } { d t }$ | 0.2 | 0.6 |
|  | Formula (16): $M = 2 m _ { e } v R$ | 0.2 |  |


|  | Formula (17): $\Delta M = - \frac { e } { \pi } \Delta \Phi$ | 0.2 |  |
| :--- | :--- | :--- | :--- |
| 3.11 | Formula (18): $\varphi _ { 0 } = \frac { \pi } { e } \hbar$ | 0.2 | 0.4 |
|  | Numerical value in formula (18): $\varphi _ { 0 } = 2.06 \cdot 10 ^ { - 15 } \mathrm {~Wb}$ | 0.2 |  |
| 3.12 | Formula (19): $\Delta I _ { 0 } = \frac { \varphi _ { 0 } } { L }$ | 0.2 | 0.4 |
|  | Numerical value in formula (19): $\Delta I _ { 0 } = 1.22 \cdot 10 ^ { - 8 } \mathrm {~A}$ | 0.2 |  |
| 3.13 | Formula (20): $\Phi = \mu _ { 0 } q _ { m }$ | 0.2 | 1.0 |
|  | Formula (21): $\Phi = n \varphi _ { 0 }$ | 0.2 |  |
|  | Formula (22): $q _ { m } = n \frac { \varphi _ { 0 } } { \mu _ { 0 } }$ | 0.2 |  |
|  | Formula (23): $q _ { m 0 } = \frac { \varphi _ { 0 } } { \mu _ { 0 } } = \frac { \pi \hbar } { e \mu _ { 0 } }$ | 0.2 |  |
|  | Numerical value in formula (23): $q _ { m 0 } = 1.64 \cdot 10 ^ { - 9 } \mathrm {~A} \cdot \mathrm {~m}$ | 0.2 |  |
| 3.14 | Formula (24): $\Delta I = \Delta I _ { 0 }$ | 0.2 |  |
| 3.15 | Formula (25): $W _ { e } = \frac { e ^ { 2 } } { 8 \pi \varepsilon _ { 0 } r _ { 0 } }$. | 0.2 | 0.8 <br> 0.8 |
|  | Formula (26): $W _ { e } = m _ { e } c ^ { 2 }$ | 0.2 |  |
|  | Formula (27): $r _ { 0 } = \frac { e ^ { 2 } } { 8 \pi \varepsilon _ { 0 } m _ { e } c ^ { 2 } }$ | 0.2 |  |
|  | Numerical value in formula (27): $r _ { 0 } = 1.40 \cdot 10 ^ { - 15 } \mathrm {~m}$ | 0.2 |  |
| 3.16 | Formula (28): $W _ { m } = \frac { \mu _ { 0 } q _ { m 0 } ^ { 2 } } { 8 \pi r _ { 0 } }$ | 0.2 | 0.8 |
|  | Formula (29): $W _ { m } = m _ { m } c ^ { 2 }$ | 0.2 |  |
|  | Formula (30): $\frac { m _ { m } } { m _ { e } } = \frac { \mu _ { 0 } \varepsilon _ { 0 } q _ { m 0 } ^ { 2 } } { e ^ { 2 } } = \left( \frac { \pi } { e ^ { 2 } c \mu _ { 0 } } \right) ^ { 2 }$ | 0.2 |  |
|  | Numerical value in formula (30): $\frac { m _ { m } } { m _ { e } } = 1.17 \cdot 10 ^ { 3 }$ | 0.2 |  |
| Total |  |  | 10.0 |
