---
id: solution-ocr-kevin-zhou-e6sol-p004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e6-p004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 4. Consider two inductors $L _ { i }$, with mutual inductance $M$.

(a) Show that if the inductors have currents $I _ { i }$, the total stored energy is
$$
U = \frac { 1 } { 2 } L _ { 1 } I _ { 1 } ^ { 2 } + \frac { 1 } { 2 } L _ { 2 } I _ { 2 } ^ { 2 } + M I _ { 1 } I _ { 2 } .
$$
Use this result to show that $| M | \leq \sqrt { L _ { 1 } L _ { 2 } }$.
(b) Suppose these two inductors are in series. Find their combined effective inductance.
(c) Suppose these two inductors are in parallel. Find their combined effective inductance.

Solution. (a) The differential work required to change the currents is

$$
d U = \left( L _ { 1 } \dot { J } _ { 1 } + M \dot { J } _ { 2 } \right) \left( J _ { 1 } d t \right) + \left( L _ { 2 } \dot { J } _ { 2 } + M \dot { J } _ { 1 } \right) \left( J _ { 2 } d t \right) = L _ { 1 } J _ { 1 } d J _ { 1 } + L _ { 2 } J _ { 2 } d J _ { 2 } + M d \left( J _ { 1 } J _ { 2 } \right)
$$


where $J _ { 1 } , J _ { 2 }$ are the values of the currents at some intermediate time. Therefore, the total work required is
$$
U = \frac { 1 } { 2 } L _ { 1 } I _ { 1 } ^ { 2 } + \frac { 1 } { 2 } L _ { 2 } I _ { 2 } ^ { 2 } + M I _ { 1 } I _ { 2 } .
$$
Let $x = I _ { 2 } / I _ { 1 }$, so
$$
U \propto L _ { 2 } x ^ { 2 } + 2 M x + L _ { 1 } .
$$
Physically, $U$ must be positive for all $x$. Minimizing by setting the derivative to zero, we see the minimum of $U$ is positive only if $| M | \leq \sqrt { L _ { 1 } L _ { 2 } }$. The bound is saturated for inductors that practically overlap, or more generally for any configuration where all flux that goes through one inductor also goes through the other, such as the two coils of an ideal transformer.
(b) When the inductors are in series, they have the same current. The total emf is
$$
\mathcal { E } = - \left( L _ { 1 } \frac { d I } { d t } + M \frac { d I } { d t } + L _ { 2 } \frac { d I } { d t } + M \frac { d I } { d t } \right) = - \left( L _ { 1 } + L _ { 2 } + 2 M \right) \frac { d I } { d t }
$$
which means
$$
L _ { \mathrm { eff } } = L _ { 1 } + L _ { 2 } + 2 M .
$$
Incidentally, since $L _ { \text {eff } }$ must be positive, this implies the bound $M > - \left( L _ { 1 } + L _ { 2 } \right) / 2$, though this is weaker than the bound in part (a).
(c) When the inductors are in parallel, they have the same emf, so
$$
\mathcal { E } = - L _ { 1 } \frac { d I _ { 1 } } { d t } - M \frac { d I _ { 2 } } { d t } = - L _ { 2 } \frac { d I _ { 2 } } { d t } - M \frac { d I _ { 1 } } { d t } .
$$
Solving the system gives
$$
L _ { \mathrm { eff } } = \frac { L _ { 1 } L _ { 2 } - M ^ { 2 } } { L _ { 1 } + L _ { 2 } - 2 M } .
$$
This also implies the bound $| M | < \sqrt { L _ { 1 } L _ { 2 } }$, as shown in a different way in part (a).
[3] Problem 5 (Kalda). An electrical transformer is connected as shown.
![](../../../figures/solution-ocr/b5b95e484e433077a92a416b.jpg)
Both windings of the transformer have the same number of loops and the self-inductance of both coils is equal to $L$. There is no leakage of the magnetic field lines from the core, so that the mutual inductance is also equal to $L$.
    (a) Find the current in both loops immediately after the switch is closed.
    (b) Find the currents as a function of time.

Solution. (a) In a transformer, the flux is $\Phi = L \left( I _ { 1 } + I _ { 2 } \right)$ and $d \Phi / d t = \mathcal { E } _ { L } = L \left( d I _ { 1 } / d t + d I _ { 2 } / d t \right)$. Since $d \Phi / d t$ is finite, then initially $I _ { 1 } + I _ { 2 } = 0$. The voltage loop rule gives

$$
\mathcal { E } = I _ { 1 } R + L \left( d I _ { 1 } / d t + d I _ { 2 } / d t \right) = I _ { 1 } R - I _ { 2 } r
$$

Using the initial condition of $I _ { 1 } = - I _ { 2 }$ gives $I _ { 1 } = \mathcal { E } / ( R + r )$.

(b) The voltage loop rules give
$$
\mathcal { E } = I _ { 1 } R + L \left( d I _ { 1 } / d t + d I _ { 2 } / d t \right) , \quad L \left( d I _ { 1 } / d t + d I _ { 2 } / d t \right) + I _ { 2 } r = 0 .
$$
Let $I \equiv I _ { 1 } + I _ { 2 }$. Combining the equations give
$$
\frac { \mathcal { E } } { R } = I + \frac { L ( R + r ) } { R r } \frac { d I } { d t }
$$
which has solution
$$
I = \frac { \mathcal { E } } { R } \left( 1 - e ^ { - t / \tau } \right) , \quad \tau \equiv L \left( \frac { 1 } { r } + \frac { 1 } { R } \right) .
$$
Using $I _ { 1 } = \mathcal { E } / R - \frac { L } { R } d I / d t$ and $I _ { 2 } = - \frac { L } { r } d I / d t$, we can extract
$$
I _ { 1 } = \frac { \mathcal { E } } { R } \left( 1 - \frac { r } { r + R } e ^ { - t / \tau } \right) , \quad I _ { 2 } = - \frac { \mathcal { E } } { ( R + r ) } e ^ { - t / \tau } .
$$

## 2 AC RLC Circuits and Impedance

Idea 2: Impedance
Current and voltage can be promoted to complex quantities,

$$
V ( t ) = V _ { 0 } \cos ( \omega t + \phi ) , \quad \tilde { V } ( t ) = \tilde { V } _ { 0 } e ^ { i \omega t } , \quad \tilde { V } _ { 0 } = V _ { 0 } e ^ { i \phi }
$$

where the physical quantity is the real part. This is useful because we can relate $\tilde { V }$ and $\tilde { I }$ in all cases by $\tilde { V } = \tilde { I } Z$ where $Z$ is the impedance, and

$$
Z _ { R } = R , \quad Z _ { C } = \frac { 1 } { i \omega C } , \quad Z _ { L } = i \omega L
$$

for the three common circuit elements. Impedance is extremely useful for finding the steady state response of a circuit. If you're interested in the transients, you can find them by applying the techniques of M4 to the Kirchhoff's loop rule equation.

Idea 3: Power
Turning parameters complex and taking the real part works because we're dealing with linear equations. As a result, it doesn't work for energy or power, which are quadratic.

In particular, the power dissipated in an element is not $\operatorname { Re } ( \tilde { I } \tilde { V } )$, but rather

$$
P = I V = \operatorname { Re } ( \tilde { I } ) \operatorname { Re } ( \tilde { V } ) = I _ { 0 } V _ { 0 } \cos ( \omega t ) \cos ( \omega t + \phi )
$$


where $\phi$ is the phase angle of $Z$. To compute the average power, note that

$$
P = \frac { V _ { 0 } ^ { 2 } } { | Z | } \cos ( \omega t ) ( \cos ( \omega t ) \cos ( \phi ) - \sin ( \omega t ) \sin ( \phi ) ) .
$$

The second term averages to zero, while $\cos ^ { 2 } ( \omega t )$ averages to 1/2 as usual, so

$$
\bar { P } = \frac { 1 } { 2 } \frac { V _ { 0 } ^ { 2 } } { | Z | } \cos ( \phi ) = \frac { 1 } { 2 } I _ { 0 } V _ { 0 } \cos ( \phi )
$$

We can decompose a general impedance as $Z = R + i X$, in which case $\cos \phi = R / | Z |$, and

$$
\bar { P } = \frac { 1 } { 2 } \frac { I _ { 0 } V _ { 0 } R } { | Z | } = \frac { 1 } { 2 } I _ { 0 } ^ { 2 } R .
$$

It's conventional to define $I _ { \text {rms } } ^ { 2 } = I _ { 0 } ^ { 2 } / 2$ to be the average value of $I ^ { 2 }$, giving

$$
\bar { P } = I _ { \mathrm { rms } } ^ { 2 } R = \frac { V _ { \mathrm { rms } } ^ { 2 } } { R } .
$$

Example 4
Find the magnitude of the current through a series $R L C$ circuit with AC voltage source $V _ { 0 } \cos \omega t$.

Solution
We promote the voltage and current to complex numbers,

$$
V ( t ) = V _ { 0 } e ^ { i \omega t } .
$$

Kirchhoff's loop rule (subject to the caveats in E5) is

$$
L \dot { I } + I R + \frac { Q } { C } = V _ { 0 } e ^ { i \omega t } .
$$

This is quite similar to a damped driven harmonic oscillator, except that we want to get $I ( t )$, rather than $Q ( t )$. To get the steady state behavior, we guess

$$
I ( t ) = I _ { 0 } e ^ { i \omega t } .
$$

Then we have

$$
\dot { I } ( t ) = ( i \omega ) I _ { 0 } e ^ { i \omega t } , \quad Q ( t ) = \frac { 1 } { i \omega } I _ { 0 } e ^ { i \omega t } .
$$

Plugging this in, we find

$$
\left( i \omega L + R + \frac { 1 } { i \omega C } \right) I _ { 0 } = V _ { 0 } .
$$

Solving for the magnitude of the current gives

$$
\left| I _ { 0 } \right| = \frac { \left| V _ { 0 } \right| } { | i \omega L + R + 1 / i \omega C | } = \frac { \left| V _ { 0 } \right| } { \sqrt { R ^ { 2 } + ( \omega L - 1 / \omega C ) ^ { 2 } } }
$$

which is maximized when $\omega = 1 / \sqrt { L C }$, as we saw in M4. We could also have gotten straight to this last step by just using complex impedances.
