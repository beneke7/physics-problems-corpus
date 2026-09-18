---
id: solution-ocr-spot-2024-s-q5
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2024_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2024-q5]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
5. The 1997 Nobel Prize in Physics was awarded to Steven Chu, Claude Cohen-Tannoudji and William D. Phillips for development of methods to cool and trap atoms with laser light. The laser light cools the particles down to the $\mu \mathrm { K }$ temperature range, allowing particles to move at speeds less than 1 km/h. At these speeds, scientists can study individual atoms with great accuracy, opening the gateway to a deeper understanding of the properties of gases at low temperatures.
In this problem, you will be analysing the basics of laser cooling and a method of cooling using the Doppler effect.
Part A: Radiation Pressure
An atom can be represented as an electron of charge $q$ and mass $m$ attached to a spring with spring constant $m \omega _ { 0 } ^ { 2 }$, experiencing a damping force proportional to its speed with proportionality constant $m \gamma$. It is driven by an electromagnetic field $E = E _ { 0 } \cos \omega t$, whose frequency is very close to the resonant frequency of the atom: defining the detuning $\Delta =$ $\omega - \omega _ { 0 }$, we may write $| \Delta | \ll \omega$. Also assume that $\gamma \ll \omega$.
    (a) Write down the differential equation satisfied by the displacement $x ( t )$ of the electron from its equilibrium position. Hence, find $x _ { 0 }$ and $\phi$ in terms of $q , m , \Delta , \gamma , E _ { 0 }$, and $\omega _ { 0 }$.
    (b) Find the average power $\langle P \rangle$ absorbed over one cycle of the electromagnetic field, expressing your answer in terms of $q , m , \gamma , E _ { 0 }$ and $\Delta$.
The saturation intensity $I _ { s }$ is the intensity of the laser beam which causes the atom to spend one-quarter of its time in the excited state, and it is a quantity which appears widely in literature on laser cooling:
$$
I _ { s } = \frac { \varepsilon _ { 0 } m c \gamma ^ { 2 } \hbar \omega } { q ^ { 2 } } .
$$
    (c) Show that the average rate $R$ at which photons are absorbed by an atom is $R = \frac { I / I _ { s } } { 1 + 4 \Delta ^ { 2 } / \gamma ^ { 2 } } \gamma$
    (d) Find an expression for the force on an atom due to resonant absorption.

Part B: Doppler Cooling
For gases to reach low temperatures, their atoms must achieve low velocities as well. This damping mechanism is different from the radiation damping $\gamma$ described earlier, and relies on the Doppler effect on an atom's interaction with its surrounding electromagnetic field.
Consider the case where the atom is moving in one dimension $( x )$, and the electromagnetic field is propagating in the $+ x$-direction with angular frequency $\omega$.


(e) Write down the angular frequency $\omega ^ { \prime }$ the particle sees the field oscillating at while it is moving at velocity $v$. Show that for $v \ll c$, the Doppler shift $\delta \omega _ { D } = \omega ^ { \prime } - \omega$ can be expressed as $- k v$, where $k$ is the wave number of the electromagnetic wave.

This means that when you calculate the force, you can take into account the Doppler effect by replacing $\Delta$ with $\Delta + \delta \omega _ { D }$.
It is clear that when an atom travels into an incoming laser beam, it will slow down. However, if the radiative forces continue to act, it will accelerate in the opposite direction. We want the atom to experience no further force after coming to a stop. This will be possible if we illuminate the atom with two identical laser beams propagating in opposite directions.


(f) Calculate the net force $F$ on an atom moving with velocity $v$. Express your answer in terms of quantities defined earlier. Furthermore, show that in the low-velocity limit $( k v \ll | \Delta |$ and $\gamma )$, the net force $F$ can be written as $F = - \alpha v$, where $\alpha$ is to be determined.

Part C: Heating Due to Photon Recoil
The damping force causes the atom to slow down. However, there is another heating mechanism - the atom absorbs a photon from the electromagnetic field, making a transition from the ground state to the excited state. The excited state is not stable, so the atom returns to the ground state by emitting a photon in a random direction (+ or - in one dimension). In both instances, momentum is not transferred to the atom in a continuous manner, but rather in units of $\hbar k$.
This quantized gains and losses of energy causes the momentum of the atom to take the path of a random walk. In a given time interval, the number of steps is the number of photons absorbed and emitted. Take the probability of absorption of a photon from either beam to be equally likely. Thus, each absorption and emission results in two steps of the random walk. In a time interval $d t$, the atom executes $d N = 2 R _ { \text {tot } } d t$ steps, where $R _ { \text {tot } } = R _ { + } + R _ { - }$ is the total absorption rate from the two beams.
For this one-dimensional walk, the average momentum remains zero, but the RMS momentum equals the square root of the number of steps times the step size:

$$
\sqrt { \left\langle p ^ { 2 } \right\rangle } = \sqrt { N } \hbar k .
$$

(g) Calculate the rate at which the atom's energy increases due to the heating.
(h) Find the equilibrium temperature $T$ associated with this atomic motion.
(i) Determine the resulting minimum temperature $T _ { \text {min } }$ and the corresponding $\Delta$ when this is achieved.

Solution:

a. The electron experiences a spring force $- m \omega _ { 0 } ^ { 2 } x$, a drag force $- m \gamma \dot { x }$ and a driving force $q E _ { 0 } \cos \omega t$. Therefore, Newton's 2nd Law can be written as
$$
\ddot { x } + \gamma \dot { x } + \omega _ { 0 } ^ { 2 } x = \frac { q } { m } E _ { 0 } \cos \omega t .
$$
Now substitute in the solution $x ( t ) = x _ { 0 } \cos ( \omega t - \phi )$ to obtain
$$
- \omega ^ { 2 } x _ { 0 } \cos ( \omega t - \phi ) - \gamma \omega x _ { 0 } \sin ( \omega t - \phi ) + \omega _ { 0 } ^ { 2 } x _ { 0 } \cos ( \omega t - \phi ) = \frac { q } { m } E _ { 0 } \cos \omega t
$$
Simplifying and expanding,
$$
\begin{aligned}
& - \left( \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } \right) x _ { 0 } \cos \omega t \cos \phi + \left( \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } \right) x _ { 0 } \sin \omega t \sin \phi \\
& \quad - \gamma \omega x _ { 0 } \sin \omega t \cos \phi - \gamma \omega x _ { 0 } \cos \omega t \sin \phi \\
& \quad = \frac { q } { m } E _ { 0 } \cos \omega t .
\end{aligned}
$$
Comparing coefficients, the $\cos \omega t$ and $\sin \omega t$ terms give
$$
\begin{aligned}
& x _ { 0 } \left[ \left( \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } \right) \cos \phi + \gamma \omega \sin \phi \right] = \frac { q } { m } E _ { 0 } \\
& x _ { 0 } \left[ \left( \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } \right) \sin \phi - \gamma \omega \cos \phi \right] = 0
\end{aligned}
$$

Squaring both equations and adding,

$$
x _ { 0 } ^ { 2 } \left[ \left( \omega ^ { 2 } - \omega _ { 0 } \right) ^ { 2 } \cos \phi + \gamma ^ { 2 } \omega ^ { 2 } \right] = \left( \frac { q } { m } E _ { 0 } \right) ^ { 2 } .
$$

Therefore,

$$
x _ { 0 } = \frac { \frac { q } { m } E _ { 0 } } { \sqrt { \left( \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } \right) ^ { 2 } + \gamma ^ { 2 } \omega ^ { 2 } } } \approx \frac { \frac { q } { m } E _ { 0 } } { \sqrt { ( 2 \Delta \omega ) ^ { 2 } + \gamma ^ { 2 } \omega ^ { 2 } } } = \frac { \frac { q } { m } E _ { 0 } } { 2 \omega \sqrt { \Delta ^ { 2 } + \frac { \gamma ^ { 2 } } { 4 } } }
$$

Solving the second equation yields

$$
\tan \phi = \frac { \gamma \omega } { \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } } \approx - \frac { \gamma \omega } { 2 \omega \Delta } = - \frac { \gamma } { 2 \Delta } .
$$

Mark scheme:

1 - Newton's 2nd Law
1 - Correct equations to compare coefficients
1 - Correct $x _ { 0 }$
1 - Correct $\phi$

b. The power absorbed is

$$
\begin{aligned}
P & = F v = q E _ { 0 } \cos \omega t \cdot \left( - \omega x _ { 0 } \sin ( \omega t - \phi ) \right) \\
& = - q E _ { 0 } \omega x _ { 0 } \left( \cos \omega t \sin \omega t \cos \phi - \cos ^ { 2 } \omega t \sin \phi \right) .
\end{aligned}
$$

Averaging $P$ over one cycle, we note that $\langle \sin \omega t \rangle = 0$ while $\left\langle \cos ^ { 2 } \omega t \right\rangle = \frac { 1 } { 2 }$, thus

$$
\langle P \rangle = \frac { 1 } { 2 } q E _ { 0 } \omega x _ { 0 } \sin \phi .
$$

Therefore,

$$
\langle P \rangle = \frac { m \gamma \omega ^ { 2 } \frac { q ^ { 2 } } { m ^ { 2 } } E _ { 0 } ^ { 2 } } { 2 \omega _ { 0 } ^ { 2 } \left( 4 \Delta ^ { 2 } + \gamma ^ { 2 } \right) } \approx \frac { q ^ { 2 } } { 2 m } \frac { \gamma } { 4 \Delta ^ { 2 } + \gamma ^ { 2 } } E _ { 0 } ^ { 2 } .
$$

Mark scheme:


1 - Writing down expression for power in terms of trigonometric functions
1 - Correct final answer
c. The rate at which photons are absorbed is the power absorbed divided by the energy carried per photon. We know that the energy carried per photon is $\frac { h c } { \lambda } =$ $\frac { h \omega } { 2 \pi } = \hbar \omega$, thus the rate at which photons are absorbed is
$$
R = \left( \frac { q ^ { 2 } } { 2 m } \frac { \gamma } { 4 \Delta ^ { 2 } + \gamma ^ { 2 } } E _ { 0 } ^ { 2 } \right) \cdot \frac { 1 } { \hbar \omega } .
$$
Since $I = \frac { 1 } { 2 } c \varepsilon _ { 0 } E ^ { 2 }$, we have
$$
\frac { I } { I _ { s } } = \frac { q ^ { 2 } E _ { 0 } ^ { 2 } } { 2 m \hbar \omega \gamma ^ { 2 } } .
$$
Therefore,
$$
R = \frac { I / I _ { s } } { 1 + 4 \Delta ^ { 2 } / \gamma ^ { 2 } } \gamma
$$

Mark scheme:

0.5 - Rate at which photons are absorbed
0.5 - Correct expression for $I$
d. The force is given by multiplying the rate $R$ by the momentum per photon given by $p = \frac { \hbar \omega } { c }$ :
$$
F = \frac { I / I _ { s } } { 1 + 4 \Delta ^ { 2 } / \gamma ^ { 2 } } \frac { \hbar \omega \gamma } { c } .
$$
1 - Final answer

e. The Doppler effect causes the particle to see the field oscillating with angular velocity

$$
\omega ^ { \prime } = \omega \sqrt { \frac { c - v } { c + v } } .
$$

Performing binomial expansion, we have

$$
\left( 1 - \frac { v } { c } \right) ^ { 1 / 2 } \approx 1 - \frac { v } { 2 c } , \quad \left( 1 + \frac { v } { c } \right) ^ { - 1 / 2 } \approx 1 - \frac { v } { 2 c } .
$$

Multiplying the two quantities together,

$$
\omega ^ { \prime } = \omega \left( 1 - \frac { v } { c } \right) \Rightarrow \delta \omega _ { D } = - \frac { v \omega } { c } = - k v .
$$

Mark scheme:


1 - Correct Doppler effect expression
1 - Correct binomial expansion
f. The forces from the + and - beams can be written as
$$
F _ { \pm } = \pm \frac { R _ { \pm } \hbar \omega } { c } = \pm R _ { \pm } \hbar k .
$$
Since
$$
R _ { \pm } = \frac { I / I _ { s } } { 1 + 4 ( \Delta \mp k v ) ^ { 2 } / \gamma ^ { 2 } } ,
$$
the net force is
$$
F = F _ { + } + F _ { - } = \frac { I } { I _ { s } } \hbar k \gamma \left( \frac { 1 } { 1 + \frac { 4 ( \Delta - k v ) ^ { 2 } } { \gamma ^ { 2 } } } - \frac { 1 } { 1 + \frac { 4 ( \Delta + k v ) ^ { 2 } } { \gamma ^ { 2 } } } \right) .
$$
For low velocities, binomial expansion of the denominators yields
$$
\begin{aligned}
\frac { 1 } { 1 + \frac { 4 ( \Delta \mp k v ) ^ { 2 } } { \gamma ^ { 2 } } } & \approx \frac { 1 } { 1 + \frac { 4 \Delta ^ { 2 } \mp 8 \Delta k v } { \gamma ^ { 2 } } } \\
& = \frac { \gamma ^ { 2 } } { \gamma ^ { 2 } + 4 \Delta ^ { 2 } \mp 8 \Delta k v } \\
& = \frac { \gamma ^ { 2 } } { \left( \gamma ^ { 2 } + 4 \Delta ^ { 2 } \right) \left( 1 \mp \frac { 8 \Delta k v } { \gamma ^ { 2 } + 4 \Delta ^ { 2 } } \right) } \\
& \approx \frac { \gamma ^ { 2 } } { \gamma ^ { 2 } + 4 \Delta ^ { 2 } } \left( 1 \pm \frac { 8 \Delta k v } { \gamma ^ { 2 } + 4 \Delta ^ { 2 } } \right)
\end{aligned}
$$

Thus,

$$
F \approx 16 \frac { I } { I _ { s } } \frac { \hbar k ^ { 2 } \gamma ^ { 3 } \Delta v } { \left( \gamma ^ { 2 } + 4 \Delta ^ { 2 } \right) ^ { 2 } }
$$

Mark scheme:

1 - Correctly writing down $R _ { \pm }$
1 - Net force
1 - Correct final answer
g. For small $v$,
$$
\frac { d \left\langle p ^ { 2 } \right\rangle } { d t } = \frac { d N } { d t } ( \hbar k ) ^ { 2 } = 2 R _ { t o t } ( \hbar k ) ^ { 2 } = \frac { 4 I / I _ { s } } { 1 + 4 \Delta ^ { 2 } / \gamma ^ { 2 } } \gamma ( \hbar k ) ^ { 2 }
$$
Therefore,
$$
\frac { d E } { d t } = \frac { 1 } { 2 m } \frac { d \left\langle p ^ { 2 } \right\rangle } { d t } = \frac { ( \hbar k ) ^ { 2 } } { m } \frac { 2 I / I _ { s } } { 1 + 4 \Delta ^ { 2 } / \gamma ^ { 2 } } \gamma .
$$
Mark scheme:
1 - Correct $\frac { d \left\langle p ^ { 2 } \right\rangle } { d t }$
1 - Correct final answer

h. First we compute $\frac { d E } { d t }$ due to cooling.

$$
\frac { d E } { d t } = \frac { d } { d t } \left( \frac { 1 } { 2 } m v ^ { 2 } \right) = m v \frac { d v } { d t } = F v = - \alpha v ^ { 2 } = - \frac { 2 \alpha } { m } E .
$$

Therefore,

$$
\frac { ( \hbar k ) ^ { 2 } } { m } \frac { 2 I / I _ { s } } { 1 + 4 \Delta ^ { 2 } / \gamma ^ { 2 } } \gamma = \frac { 2 \alpha } { m } E .
$$

After substituting in the expression for $\alpha$, we have

$$
E = - \frac { \hbar \left( \gamma ^ { 2 } + 4 \Delta ^ { 2 } \right) } { 8 \Delta } .
$$

Applying the equipartition theorem, each degree of freedom contributes an energy $k _ { B } T / 2$. Thus, the equilibrium temperature is

$$
T = - \frac { \hbar \left( \gamma ^ { 2 } + 4 \Delta ^ { 2 } \right) } { 4 \Delta k _ { B } } .
$$

Mark scheme:

1 - Finding $\frac { d E } { d t }$ due to cooling and solving for $E$
1 - Applying equipartition theorem
1 - Correct equilibrium temperature
i. Note that
$$
T = \frac { \hbar \gamma } { 2 k _ { B } } \left( \frac { \gamma } { 2 ( - \Delta ) } + \frac { 2 ( - \Delta ) } { \gamma } \right) \geq \frac { \hbar \gamma } { k _ { B } } .
$$
Equality holds when $\frac { \gamma } { 2 ( - \Delta ) } = \frac { 2 ( - \Delta ) } { \gamma }$, or $\Delta = - \frac { \gamma } { 2 }$.
Mark scheme:
1 - Finding $\Delta = - \frac { \gamma } { 2 }$
1 - Correct $T _ { \text {min } }$

For a comprehensive discussion, see: Gould, P. (1997). Laser cooling of atoms to the Doppler limit. American Journal of Physics, 65(11), 1120-1123. https://doi.org/ 10.1119/1.18740
