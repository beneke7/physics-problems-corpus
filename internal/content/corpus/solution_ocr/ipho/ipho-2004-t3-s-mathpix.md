---
id: solution-ocr-ipho-2004-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2004/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2004-t3]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## Theoretical Question 3: Scanning Probe Microscope

1. Answers
(a) $A = \frac { F _ { 0 } } { \sqrt { m ^ { 2 } \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } \right) ^ { 2 } + b ^ { 2 } \omega ^ { 2 } } }$ and $\tan \phi = \frac { b \omega _ { 0 } } { m \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } \right) }$. At $\omega = \omega _ { 0 } , A = \frac { F _ { 0 } } { b \omega _ { 0 } }$ and $\phi = \frac { \pi } { 2 }$.
(b) A non-vanishing dc component exists only when $\omega = \omega _ { i }$.

In this case the amplitude of the dc signal will be $\frac { 1 } { 2 } V _ { i 0 } V _ { R 0 } \cos \phi _ { i }$.

(c) $\frac { c _ { 1 } c _ { 2 } } { 2 } \frac { V _ { R 0 } ^ { 2 } } { b \omega _ { 0 } }$ at the resonance frequency $\omega _ { 0 }$.
(d) $\Delta m = 1.7 \times 10 ^ { - 18 } \mathrm {~kg}$.
(e) $\omega _ { 0 } ^ { \prime } = \omega _ { 0 } \left( 1 - \frac { c _ { 3 } } { m \omega _ { 0 } ^ { 2 } } \right) ^ { 1 / 2 }$.
(f) $d _ { 0 } = \left( k _ { e } \frac { q Q } { m \omega _ { 0 } \Delta \omega _ { 0 } } \right) ^ { 1 / 3 }$
$$
d _ { 0 } = 41 \mathrm {~nm} .
$$


## 2. Solutions

(a) [1.5 points]
Substituting $z ( t ) = A \sin ( \omega t - \phi )$ in the equation $m \frac { d ^ { 2 } z } { d t ^ { 2 } } + b \frac { d z } { d t } + m \omega _ { 0 } ^ { 2 } z = F _ { 0 } \sin \omega t$ yields,

$$
\begin{equation*}
- m \omega ^ { 2 } \sin ( \omega t - \phi ) + b \omega \cos ( \omega t - \phi ) + m \omega _ { 0 } ^ { 2 } \sin ( \omega t - \phi ) = \frac { F _ { 0 } } { A } \sin \omega t . \tag{a1}
\end{equation*}
$$

Collecting terms proportional to $\sin \omega t$ and $\cos \omega t$, one obtains

$$
\begin{equation*}
\left\{ m \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } \right) \cos \phi + b \omega \sin \phi - \frac { F _ { 0 } } { A } \right\} \sin \omega t + \left\{ - m \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } \right) \sin \phi + b \omega \cos \phi \right\} \cos \omega t = 0 \tag{a2}
\end{equation*}
$$

Zeroing the each curly square bracket produces

$$
\begin{gather*}
\tan \phi = \frac { b \omega } { m \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } \right) } ,  \tag{a3}\\
A = \frac { F _ { 0 } } { \sqrt { m ^ { 2 } \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } \right) ^ { 2 } + b ^ { 2 } \omega ^ { 2 } } } . \tag{a4}
\end{gather*}
$$

At $\omega = \omega _ { 0 }$,

$$
\begin{equation*}
A = \frac { F _ { 0 } } { b \omega _ { 0 } } \text { and } \phi = \frac { \pi } { 2 } . \tag{a5}
\end{equation*}
$$

(b) [1 point]
The multiplied signal is

$$
\begin{align*}
& V _ { i 0 } \sin \left( \omega _ { i } t - \phi _ { i } \right) V _ { R 0 } \sin ( \omega t ) \\
& = \frac { 1 } { 2 } V _ { i 0 } V _ { R 0 } \left[ \cos \left\{ \left( \omega _ { i } - \omega \right) t - \phi _ { i } \right\} - \cos \left\{ \left( \omega _ { i } + \omega \right) t - \phi _ { i } \right\} \right] \tag{b1}
\end{align*}
$$

A non-vanishing dc component exists only when $\omega = \omega _ { i }$. In this case the amplitude of the dc signal will be

$$
\begin{equation*}
\frac { 1 } { 2 } V _ { i 0 } V _ { R 0 } \cos \phi _ { i } . \tag{b2}
\end{equation*}
$$

(c) [1.5 points]
Since the lock-in amplifier measures the ac signal of the same frequency with its reference signal, the frequency of the piezoelectric tube oscillation, the frequency of the


cantilever, and the frequency of the photodiode detector should be same. The magnitude of the input signal at the resonance is

$$
\begin{equation*}
V _ { i 0 } = c _ { 2 } \frac { F _ { 0 } } { b \omega _ { 0 } } = \frac { c _ { 1 } c _ { 2 } V _ { R 0 } } { b \omega _ { 0 } } . \tag{c1}
\end{equation*}
$$

Then, since the phase of the input signal is $- \frac { \pi } { 2 } + \frac { \pi } { 2 } = 0$ at the resonance, $\phi _ { i } = 0$ and the lock-in amplifier signal is

$$
\begin{equation*}
\frac { 1 } { 2 } V _ { i 0 } V _ { R 0 } \cos 0 = \frac { c _ { 1 } c _ { 2 } } { 2 } \frac { V _ { R 0 } ^ { 2 } } { b \omega _ { 0 } } . \tag{c2}
\end{equation*}
$$

(d) [2 points]
The original resonance frequency $\omega _ { 0 } = \sqrt { \frac { k } { m } }$ is shifted to

$$
\begin{equation*}
\sqrt { \frac { k } { m + \Delta m } } = \sqrt { \frac { k } { m } } \left( 1 + \frac { \Delta m } { m } \right) ^ { - \frac { 1 } { 2 } } \cong \sqrt { \frac { k } { m } } \left( 1 - \frac { 1 } { 2 } \frac { \Delta m } { m } \right) = \omega _ { 0 } \left( 1 - \frac { 1 } { 2 } \frac { \Delta m } { m } \right) . \tag{d1}
\end{equation*}
$$

Thus

$$
\begin{equation*}
\Delta \omega _ { 0 } = - \frac { 1 } { 2 } \omega _ { 0 } \frac { \Delta m } { m } . \tag{d2}
\end{equation*}
$$

Near the resonance, by substituting $\phi \rightarrow \frac { \pi } { 2 } + \Delta \phi$ and $\omega _ { 0 } \rightarrow \omega _ { 0 } + \Delta \omega _ { 0 }$ in Eq. (a3), the change of the phase due to the small change of $\omega _ { 0 }$ (not the change of $\omega$ ) is

$$
\begin{equation*}
\tan \left( \frac { \pi } { 2 } + \Delta \phi \right) = - \frac { 1 } { \tan \Delta \phi } = \frac { b } { 2 m \Delta \omega _ { 0 } } . \tag{d3}
\end{equation*}
$$

Therefore,

$$
\begin{equation*}
\Delta \phi \approx \tan \Delta \phi = - \frac { 2 m \Delta \omega _ { 0 } } { b } . \tag{d4}
\end{equation*}
$$

From Eqs. (d2) and (d4),

$$
\begin{equation*}
\Delta m = \frac { b } { \omega _ { 0 } } \Delta \phi = \frac { 10 ^ { 3 } \cdot 10 ^ { - 12 } } { 10 ^ { 6 } } \frac { \pi } { 1800 } = \frac { \pi } { 1.8 } 10 ^ { - 18 } = 1.7 \times 10 ^ { - 18 } \mathrm {~kg} . \tag{d5}
\end{equation*}
$$

(e) [1.5 points]
In the presence of interaction, the equation of motion near the new equilibrium position $h _ { 0 }$ becomes


$$
\begin{equation*}
m \frac { d ^ { 2 } z } { d t ^ { 2 } } + b \frac { d z } { d t } + m \omega _ { 0 } ^ { 2 } z - c _ { 3 } z = F _ { 0 } \sin \omega t \tag{e1}
\end{equation*}
$$

where we used $f ( h ) \approx f \left( h _ { 0 } \right) + c _ { 3 } z$ with $z = h - h _ { 0 }$ being the displacement from the new equilibrium position $h _ { 0 }$. Note that the constant term $f \left( h _ { 0 } \right)$ is cancelled at the new equilibrium position.
Thus the original resonance frequency $\omega _ { 0 } = \sqrt { \frac { k } { m } }$ will be shifted to

$$
\begin{equation*}
\omega _ { 0 } ^ { \prime } = \sqrt { \frac { k - c _ { 3 } } { m } } = \sqrt { \frac { m \omega _ { 0 } ^ { 2 } - c _ { 3 } } { m } } = \omega _ { 0 } \sqrt { 1 - \frac { c _ { 3 } } { m \omega _ { 0 } ^ { 2 } } } . \tag{e3}
\end{equation*}
$$

Hence the resonance frequency shift is given by

$$
\begin{equation*}
\Delta \omega _ { 0 } = \omega _ { 0 } \left[ \sqrt { 1 - \frac { c _ { 3 } } { m \omega _ { 0 } ^ { 2 } } } - 1 \right] . \tag{e4}
\end{equation*}
$$

(f) [2.5 points]

The maximum shift occurs when the cantilever is on top of the charge, where the interacting force is given by

$$
\begin{equation*}
f ( h ) = k _ { e } \frac { q Q } { h ^ { 2 } } . \tag{f1}
\end{equation*}
$$

From this,

$$
\begin{equation*}
c _ { 3 } = \left. \frac { d f } { d h } \right| _ { h = d _ { 0 } } = - 2 k _ { e } \frac { q Q } { d _ { 0 } ^ { 3 } } . \tag{f2}
\end{equation*}
$$

Since $\Delta \omega _ { 0 } \ll \omega _ { 0 }$, we can approximate Eq. (e4) as

$$
\begin{equation*}
\Delta \omega _ { 0 } \approx - \frac { c _ { 3 } } { 2 m \omega _ { 0 } } . \tag{f3}
\end{equation*}
$$

From Eqs. (f2) and (f3), we have

$$
\begin{equation*}
\Delta \omega _ { 0 } = - \frac { 1 } { 2 m \omega _ { 0 } } \left( - 2 k _ { e } \frac { q Q } { d _ { 0 } ^ { 3 } } \right) = k _ { e } \frac { q Q } { m \omega _ { 0 } d _ { 0 } ^ { 3 } } . \tag{f4}
\end{equation*}
$$

Here $q = e = - 1.6 \times 10 ^ { - 19 }$ Coulomb and $Q = 6 e = - 9.6 \times 10 ^ { - 19 }$ Coulomb. Using the values provided,


$$
\begin{equation*}
d _ { 0 } = \left( k _ { e } \frac { q Q } { m \omega _ { 0 } \Delta \omega _ { 0 } } \right) ^ { 1 / 3 } = 4.1 \times 10 ^ { - 8 } \mathrm {~m} = 41 \mathrm {~nm} . \tag{f5}
\end{equation*}
$$

Thus the trapped electron is 41 nm from the cantilever.


## 3. Mark Distribution

| No. | Total Pt. | Partial Pt. | Contents |
| :--- | :--- | :--- | :--- |
| (a) | 1.5 | 0.7 | Equations for $A$ and $\phi$ (substitution and manipulation) |
|  |  | 0.4 | Correct answers for $A$ and $\phi$ |
|  |  | 0.4 | $A$ and $\phi$ at $\omega _ { 0 }$ |
| (b) | 1.0 | 0.4 | Equation for the multiplied signal |
|  |  | 0.3 | Condition for the non-vanishing dc output |
|  |  | 0.3 | Correct answer for the dc output |
| (c) | 1.5 | 0.6 | Relation between $V _ { i }$ and $V _ { R }$ |
|  |  | 0.4 | Condition for the maximum dc output |
|  |  | 0.5 | Correct answer for the magnitude of dc output |
| (d) | 2.0 | 0.5 | Relation between $\Delta m$ and $\Delta \omega _ { 0 }$ |
|  |  | 1.0 | Relations between $\Delta \omega _ { 0 }$ (or $\Delta m$ ) and $\Delta \phi$ |
|  |  | 0.5 | Correct answer (Partial credit of 0.2 for the wrong sign.) |
| (e) | 1.5 | 1.0 | Modification of the equation with $f ( h )$ and use of a proper approximation for the equation |
|  |  | 0.5 | Correct answer |
| (f) | 2.5 | 0.5 | Use of a correct formula of Coulomb force |
|  |  | 0.3 | Evaluation of $c _ { 3 }$ |
|  |  | 0.6 | Use of the result in (e) for either $\Delta \omega _ { 0 }$ or $\omega _ { 0 } ^ { \prime 2 } - \omega _ { 0 } ^ { 2 }$ |
|  |  | 0.6 | Expression for $d _ { 0 }$ |
|  |  | 0.5 | Correct answer |
| Total | 10 |  |  |
