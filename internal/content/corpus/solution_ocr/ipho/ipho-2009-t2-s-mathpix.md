---
id: solution-ocr-ipho-2009-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2009/T2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2009-t2]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## THEORETICAL PROBLEM 2

## SOLUTION

## DOPPLER LASER COOLING AND OPTICAL MOLASSES

The key to this problem is the Doppler effect (to be precise, the longitudinal Doppler effect): The frequency of a monochromatic beam of light detected by an observer depends on its state of motion relative to the emitter, i.e. the observed frequency is

$$
\omega ^ { \prime } = \omega \sqrt { \frac { 1 \pm v / c } { 1 \mp v / c } } \approx \omega \left( 1 \pm \frac { v } { c } \right)
$$

where $v$ is the relative speed of emitter and observer and $\omega$ the frequency of the emitter. The upper-lower signs correspond, respectively, when source and observer move towards or away from each other. The second equality holds in the limit of low velocities (non-relativistic limit).

The frequency of the laser in the lab is $\omega _ { L } ; \omega _ { 0 }$ is the transition frequency of the atom; the atom moves with speed $v$ towards the incident direction of the laser:

It is important to point out that the results must be given to first significant order in $v / c$ or $\hbar q / m v$.

## PART I: BASICS OF LASER COOLING

## 1. Absorption.

| 1a | Write down the resonance condition for the absorption of the photon. $\omega _ { 0 } \approx \omega _ { L } \left( 1 + \frac { v } { c } \right)$ | 0.2 |
| :--- | :--- | :--- |


| 1b | Write down the momentum $p _ { a t }$ of the atom after absorption, as seen in the laboratory $p _ { a t } = p - \hbar q \approx m v - \frac { \hbar \omega _ { L } } { c }$ | 0.2 |
| :--- | :--- | :--- |


| 1c | Write down the energy $\varepsilon _ { a t }$ of the atom after absorption, as seen in the laboratory $\varepsilon _ { a t } = \frac { p _ { a t } ^ { 2 } } { 2 m } + \hbar \omega _ { 0 } \approx \frac { m v ^ { 2 } } { 2 } + \hbar \omega _ { L }$ | 0.2 |
| :--- | :--- | :--- |


## 2. Spontaneous emission in the $- x$ direction.

First, one calculates the energy of the emitted photon, as seen in the lab reference frame. One must be careful to keep the correct order; this is because the velocity of the atom changes after the absorption, however, this is second order correction for the emitted frequency:

$$
\omega _ { p h } \approx \omega _ { 0 } \left( 1 - \frac { v ^ { \prime } } { c } \right) \quad \text { with } \quad v ^ { \prime } \approx v - \frac { \hbar q } { m }
$$

thus,

$$
\begin{aligned}
\omega _ { p h } & \approx \omega _ { 0 } \left( 1 - \frac { v } { c } + \frac { \hbar q } { m c } \right) \\
& \approx \omega _ { L } \left( 1 + \frac { v } { c } \right) \left( 1 - \frac { v } { c } + \frac { \hbar q } { m c } \right) \\
& \approx \omega _ { L } \left( 1 + \frac { \hbar q } { m c } \right) \\
& \approx \omega _ { L } \left( 1 + \left( \frac { \hbar q } { m v } \right) \left( \frac { v } { c } \right) \right) \\
& \approx \omega _ { L }
\end{aligned}
$$

| 2a | Write down the energy of the emitted photon, $\varepsilon _ { p h }$, after the emission process in the $- x$ direction, as seen in the laboratory. $\varepsilon _ { p h } \approx \hbar \omega _ { L }$ | 0.2 |
| :--- | :--- | :--- |


| 2b | Write down the momentum of the emitted photon $p _ { p h }$, after the emission process in the $- x$ direction, as seen in the laboratory. $p _ { p h } \approx - \hbar \omega _ { L } / c$ | 0.2 |
| :--- | :--- | :--- |

Use conservation of momentum (see 1b):

$$
p _ { a t } + p _ { p h } \approx p - \hbar q
$$

| 2c | Write down the momentum of the atom $p _ { a t }$, after the emission process in the $- x$ direction, as seen in the laboratory. $p _ { a t } \approx p = m v$ | 0.2 |
| :--- | :--- | :--- |


| 2d | Write down the energy of the atom $\varepsilon _ { a t }$, after the emission process in the $- x$ direction, as seen in the laboratory. $\varepsilon _ { a t } \approx \frac { p ^ { 2 } } { 2 m } = \frac { m v ^ { 2 } } { 2 }$ | 0.2 |
| :--- | :--- | :--- |


## 3. Spontaneous emission in the $+ \boldsymbol { x }$ direction.

The same as in the previous questions, keeping the right order

| За | Write down the energy of the emitted photon, $\varepsilon _ { p h }$, after the emission process in the $+ x$ direction, as seen in the laboratory. $\varepsilon _ { p h } \approx \hbar \omega _ { 0 } \left( 1 + \frac { v } { c } \right) \approx \hbar \omega _ { L } \left( 1 + \frac { v } { c } \right) \left( 1 + \frac { v } { c } \right) \approx \hbar \omega _ { L } \left( 1 + 2 \frac { v } { c } \right)$ | 0.2 |
| :--- | :--- | :--- |


| 3b | Write down the momentum of the emitted photon $p _ { p h }$, after the emission process in the $+ x$ direction, as seen in the laboratory. $p _ { p h } \approx \frac { \hbar \omega _ { L } } { c } \left( 1 + 2 \frac { v } { c } \right)$ | 0.2 |
| :--- | :--- | :--- |


| 3c | Write down the momentum of the atom $p _ { a t }$, after the emission process in the $+ x$ direction, as seen in the laboratory. $p _ { a t } = p - \hbar q - p _ { p h } \approx p - \hbar q - \frac { \hbar \omega _ { L } } { c } \left( 1 + 2 \frac { v } { c } \right) \approx m v - 2 \frac { \hbar \omega _ { L } } { c }$ | 0.2 |
| :--- | :--- | :--- |


| 3d | Write down the energy of the atom $\varepsilon _ { a t }$, after the emission process in the $+ x$ direction, as seen in the laboratory. $\varepsilon _ { a t } = \frac { p _ { a t } ^ { 2 } } { 2 m } \approx \frac { m v ^ { 2 } } { 2 } \left( 1 - 2 \frac { \hbar q } { m v } \right)$ | 0.2 |
| :--- | :--- | :--- |

## 4. Average emission after absorption.

The spontaneous emission processes occur with equal probabilities in both directions.

| 4a | Write down the average energy of an emitted photon, $\varepsilon _ { p h }$, after the emission process. $\varepsilon _ { p h } = \frac { 1 } { 2 } \varepsilon _ { p h } ^ { + } + \frac { 1 } { 2 } \varepsilon _ { p h } ^ { - } \approx \hbar \omega _ { L } \left( 1 + \frac { v } { c } \right)$ | 0.2 |
| :--- | :--- | :--- |


| 4b | Write down the average momentum of an emitted photon $p _ { p h }$, after the emission process. $p _ { p h } = \frac { 1 } { 2 } p _ { p h } ^ { + } + \frac { 1 } { 2 } p _ { p h } ^ { - } \approx \frac { \hbar \omega _ { L } } { c } \frac { v } { c } = m v \left( \frac { \hbar q } { m v } \frac { v } { c } \right) \approx 0 \text { second order }$ | 0.2 |
| :--- | :--- | :--- |


| 4c | Write down the average energy of the atom $\varepsilon _ { a t }$, after the emission process. $\varepsilon _ { a t } = \frac { 1 } { 2 } \varepsilon _ { a t } ^ { + } + \frac { 1 } { 2 } \varepsilon _ { a t } ^ { - } \approx \frac { m v ^ { 2 } } { 2 } \left( 1 - \frac { \hbar q } { m v } \right)$ | 0.2 |
| :--- | :--- | :--- |


| 4d | Write down the average momentum of the atom $p _ { a t }$, after the emission process. $p _ { a t } = \frac { 1 } { 2 } p _ { a t } ^ { + } + \frac { 1 } { 2 } p _ { a t } ^ { - } \approx p - \frac { \hbar \omega _ { L } } { c }$ | 0.2 |
| :--- | :--- | :--- |

## 5. Energy and momentum transfer.

Assuming a complete one-photon absorption-emission process only, as described above, there is a net average momentum and energy transfer between the laser and the atom.

| 5a | Write down the average energy change $\Delta \varepsilon$ of the atom after a complete one-photon absorption-emission process. $\Delta \varepsilon = \varepsilon _ { a t } ^ { \text {after } } - \varepsilon _ { a t } ^ { \text {before } } \approx - \frac { 1 } { 2 } \hbar q v = - \frac { 1 } { 2 } \hbar \omega _ { L } \frac { v } { c }$ | 0.2 |
| :--- | :--- | :--- |


| 5b | Write down the average momentum change $\Delta p$ of the atom after a complete one-photon absorption-emission process. $\Delta p = p _ { a t } ^ { \text {after } } - p _ { a t } ^ { \text {before } } \approx - \hbar q = - \frac { \hbar \omega _ { L } } { c }$ | 0.2 |
| :--- | :--- | :--- |

## 6. Energy and momentum transfer by a laser beam along the $+ x$ direction.

| 6a | Write down the average energy change $\Delta \varepsilon$ of the atom after a complete one-photon absorption-emission process. $\Delta \varepsilon = \varepsilon _ { a t } ^ { \text {after } } - \varepsilon _ { a t } ^ { \text {before } } \approx + \frac { 1 } { 2 } \hbar q v = + \frac { 1 } { 2 } \hbar \omega _ { L } ^ { \prime } \frac { v } { c }$ | 0.3 |
| :--- | :--- | :--- |


| 6b | Write down the average momentum change $\Delta p$ of the atom after a complete one-photon absorption-emission process. $\Delta p = p _ { a t } ^ { \text {after } } - p _ { a t } ^ { \text {before } } \approx + \hbar q = + \frac { \hbar \omega _ { L } ^ { \prime } } { c }$ | 0.3 |
| :--- | :--- | :--- |

## PART II: DISSIPATION AND THE FUNDAMENTALS OF OPTICAL MOLASSES

Two counterpropagating laser beams with the same but arbitrary frequency $\omega _ { L }$ are incident on a beam of $N$ atoms that move in the $+ x$ direction with (average) velocity $v$.


## 7. Force on the atomic beam by the lasers.

On the average, the fraction of atoms found in the excited state is given by,

$$
P _ { e x c } = \frac { N _ { e x c } } { N } = \frac { \Omega _ { R } ^ { 2 } } { \left( \omega _ { 0 } - \omega _ { L } \right) ^ { 2 } + \frac { \Gamma ^ { 2 } } { 4 } + 2 \Omega _ { R } ^ { 2 } }
$$

where $\omega _ { 0 }$ is the resonance frequency of the atoms and $\Omega _ { R }$ is the so-called Rabi frequency; $\Omega _ { R } ^ { 2 }$ is proportional to the intensity of the laser beam. The lifetime of the excited energy level of the atom is $\Gamma ^ { - 1 }$.

The force is calculated as the number of absorption-emission cycles, times the momentum exchange in each event, divided by the time of each event. CAREFUL! One must take into account the Doppler shift of each laser, as seen by the atoms:

| 7a | With the information found so far, find the force that the lasers exert on the atomic beam. You must assume that $m v \gg \hbar q$. $\begin{aligned} & F = N \Delta p ^ { - } P _ { e x c } ^ { - } \Gamma + N \Delta p ^ { + } P _ { e x c } ^ { + } \Gamma \\ & = \left( \frac { \Omega _ { R } ^ { 2 } } { \left( \omega _ { 0 } - \omega _ { L } + \omega _ { L } \frac { v } { c } \right) ^ { 2 } + \frac { \Gamma ^ { 2 } } { 4 } + 2 \Omega _ { R } ^ { 2 } } - \frac { \Omega _ { R } ^ { 2 } } { \left( \omega _ { 0 } - \omega _ { L } - \omega _ { L } \frac { v } { c } \right) ^ { 2 } + \frac { \Gamma ^ { 2 } } { 4 } + 2 \Omega _ { R } ^ { 2 } } \right) N \Gamma \hbar q \end{aligned}$ | 1.5 |
| :--- | :--- | :--- |

## 8. Low velocity limit.

Assume now the velocity to be small enough in order to expand the force to first order in $v$.

| 8a | Find an expression for the force found in Question (7a), in this limit. $F \approx - \frac { 4 N \hbar q ^ { 2 } \Omega _ { R } ^ { 2 } \Gamma } { \left( \left( \omega _ { 0 } - \omega _ { L } \right) ^ { 2 } + \frac { \Gamma ^ { 2 } } { 4 } + 2 \Omega _ { R } ^ { 2 } \right) ^ { 2 } } \left( \omega _ { 0 } - \omega _ { L } \right) v$ | 1.5 |
| :--- | :--- | :--- |


| 8b | Write down the condition to obtain a positive force (speeding up the atom). $\omega _ { 0 } < \omega _ { L }$ | 0.25 |
| :--- | :--- | :--- |


| 8c | Write down the condition to obtain a zero force. $\omega _ { 0 } = \omega _ { L }$ | 0.25 |
| :--- | :--- | :--- |


| 8d | Write down the condition to obtain a negative force (slowing down the atom). $\omega _ { 0 } > \omega _ { L } \ldots$ this is the famous rule "tune below resonance for cooling down" | 0.25 |
| :--- | :--- | :--- |


| 8e | Consider now that the atoms are moving with a velocity $- v$ (in the $- x$ direction). Write down the condition to obtain a slowing down force on the atoms. $\omega _ { 0 } > \omega _ { L } \ldots$ i.e. independent of the direction motion of the atom. | 0.25 |
| :--- | :--- | :--- |

## 9. Optical molasses

In the case of a negative force, one obtains a frictional dissipative force. Assume that initially, $t = 0$, the gas of atoms has velocity $v _ { 0 }$.

| 9a | In the limit of low velocities, find the velocity of the atoms after the laser beams have been on for a time $\tau$. $\begin{aligned} & F = - \beta v \Rightarrow m \frac { d v } { d t } \approx - \beta v \\ & \Rightarrow v = v _ { 0 } e ^ { - \beta t / m } \end{aligned} \quad \beta \text { can be read from (8a) }$ | 1.5 |
| :--- | :--- | :--- |


| 9b | Assume now that the gas of atoms is in thermal equilibrium at a temperature $T _ { 0 }$. Find the temperature $T$ after the laser beams have been on for a time $\tau$. <br> Recalling that $\frac { 1 } { 2 } m v ^ { 2 } = \frac { 1 } { 2 } k T$ in 1 dimension, and using $v$ as the average thermal velocity in the equation of (9a), we can write down $T = T _ { 0 } e ^ { - 2 \beta t / m }$ | 0.5 |
| :--- | :--- | :--- |
