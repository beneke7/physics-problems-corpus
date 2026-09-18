---
id: solution-ocr-kevin-zhou-p2sol-p023
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p023]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 23. Some more examples of finding lines to plot.

(a) Suppose that you are given points $( x , y )$ that lie on a circle centered at $( a , 0 )$ with radius $r$. What line can be plotted to find $a$ and $r$ ?
(b) Consider an Atwood's machine with masses $m$ and $M > m$. The acceleration of the machine is measured as a function of $M$. However, since the pulley has mass, it slows the acceleration of the Atwood's machine, so that
$$
a = \frac { M - m } { M + m + \delta m } g .
$$
Find a line that can be plotted to find $g$ and $\delta m$, assuming $m , M$, and $a$ are known. This is an example of how plotting a line can separate out a systematic error, i.e. the value of $\delta m$, which would be impossible if only one value of $M$ were used.
(c) Suppose an object is undergoing simple harmonic motion with amplitude $A$ and angular frequency $\omega$. Given measurements of the position $x$ and velocity $v$, what line can be plotted to find $A$ and $\omega$ ?

Solution. (a) The equation of the circle is

$$
( x - a ) ^ { 2 } + y ^ { 2 } = r ^ { 2 } , \quad y ^ { 2 } + x ^ { 2 } = 2 a x + r ^ { 2 } - a ^ { 2 }
$$


Plotting $y ^ { 2 } + x ^ { 2 }$ vs. $x$ will give a slope of $2 a$ and a $y$-intercept of $r ^ { 2 } - a ^ { 2 }$. Combining the two pieces of information yields $a$ and $r$.
    (b) The equation can be slightly rearranged to give
$$
\frac { M - m } { a } = \frac { M + m } { g } + \frac { \delta m } { g } .
$$
Therefore, a plot of $( M - m ) / a$ vs. $M + m$ has slope $1 / g$ and $y$-intercept $\delta m / g$.
    (c) By conservation of energy, $A ^ { 2 } = x ^ { 2 } + v ^ { 2 } / \omega ^ { 2 }$, so
$$
x ^ { 2 } = A ^ { 2 } - v ^ { 2 } / \omega ^ { 2 } .
$$
Thus, a plot of $x ^ { 2 }$ vs. $v ^ { 2 }$ has $y$-intercept $A ^ { 2 }$ and slope $- 1 / \omega ^ { 2 }$.
[3] Problem 24. USAPhO 2012, problem A2. (This one requires basic thermodynamics.)
[3] Problem 25. USAPhO 2011, problem A2.
[3] Problem 26. INPhO 2018, problem 7. (This one requires basic fluid dynamics.)
[3] Problem 27 (USAPhO 2024). An experimentalist drives a series RLC circuit with a sinusoidal voltage $V ( t ) = V _ { 0 } \cos \omega t$. In E6, you will learn how to show that the voltage across the capacitor, in the steady state, oscillates with amplitude

$$
V _ { c } = \frac { V _ { 0 } } { \sqrt { \left( 1 - \omega ^ { 2 } / \omega _ { 0 } ^ { 2 } \right) ^ { 2 } + \left( \omega / \omega _ { 0 } Q \right) ^ { 2 } } }
$$

where $\omega _ { 0 }$ is the resonant angular frequency and $Q$ is the circuit's quality factor. The experimentalist takes the following data near the resonance, for a fixed value of $V _ { 0 }$ :

| $\omega ( \mathrm { rad } / \mathrm { s } )$ | 133.0 | 133.5 | 134.0 | 134.5 | 135.0 | 135.5 | 136.0 | 136.5 | 137.0 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $V _ { c }$ (Volts) | 3.64 | 4.76 | 6.52 | 8.53 | 8.18 | 6.06 | 4.44 | 3.42 | 2.75 |

Find the values of $\omega _ { 0 }$ and $Q$ as accurately as possible. Uncertainty analysis is not required. (Hint: you don't always have to draw a line. Carefully examine and approximate the given formula.)
Solution. See the official solutions to problem B3, part a.b.ii. A good answer for $\omega _ { 0 }$ is within the range (134.7 ± 0.1) rad/s, and a good answer for $Q$ is within $88 \pm 3$.

## 5 Estimation

Estimation is a useful skill for checking the answers to real-world problems.
Example 7
Estimate the circumference of the Earth.


Solution
If you know that the United States is 3,000 miles wide, and there is a time zone difference of three hours between California and New York, then a reasonable estimate is 24,000 miles. Or, if you know the factoid that light can go about seven times around the Earth in a second, then a reasonable estimate is $( 3 / 7 ) \times 10 ^ { 8 } \mathrm {~m} \approx 4 \times 10 ^ { 7 } \mathrm {~m}$.

Let's check these results are compatible. There are about 5 miles in 8 kilometers, a fact you can get by remembering how your car's speedometer looks, or by noting that 3 feet are about 1 meter. Then $4 \times 10 ^ { 4 } \mathrm {~km} \approx ( 5 / 8 ) \times 4 \times 10 ^ { 4 } \mathrm { mi } = 2.5 \times 10 ^ { 4 } \mathrm { mi }$, so the two results are compatible. There are probably at least a hundred more ways to perform this estimation.

Example 8
Estimate the density of air, and compare this to the density of water.

Solution
We can directly use the ideal gas law, $P V = n R T$. The density is $\rho = \mu n / V$ where $\mu$ is the mass of one mole of air, so

$$
\rho = \frac { \mu P } { R T } .
$$

Atmospheric pressure is about $10 ^ { 5 } \mathrm {~Pa}$, typical temperatures are about 300 K, and air is mostly $\mathrm { N } _ { 2 }$, which has a molar mass of $\mu = 28 \mathrm {~g} / \mathrm { mol }$, so

$$
\rho = \frac { ( 0.028 ) \left( 10 ^ { 5 } \right) } { ( 8.3 ) ( 300 ) } \frac { \mathrm { kg } } { \mathrm {~m} ^ { 3 } } \approx 1 \frac { \mathrm {~kg} } { \mathrm {~m} ^ { 3 } } .
$$

The density of water is, almost by definition,

$$
\rho _ { w } \approx 10 ^ { 3 } \frac { \mathrm {~kg} } { \mathrm {~m} ^ { 3 } } .
$$

Most liquids and solids have densities within an order of magnitude of this, since in all cases the atoms are packed close together. Evidently, air molecules are about a factor of $\left( 10 ^ { 3 } \right) ^ { 1 / 3 } = 10$ times further apart than typical water molecules.

Example 9
Estimate how much useful power you can produce in a short burst.

Solution
This is a bit tricky to test, because most exercises just burn energy against air resistance or friction, which is hard to estimate. However, a task that directly performs work is useful. I weigh about 75 kg and can run up a 3 m high staircase in around 3 s, so

$$
P = m g v = ( 75 ) ( 10 ) ( 3 / 3 ) \mathrm { W } \approx 750 \mathrm {~W} .
$$


This is a typical max power output, while typical steady state power outputs are several times smaller, and the corresponding numbers for elite athletes are several times larger.

Remark
It's important not to overthink estimation questions. If you already know what answer you're targeting, you can always add ad-hoc factors to get closer, but that's not a good instinct in novel situations, where you don't know the answer. Instead, it's best to keep things simple, and only try to get within one or two orders of magnitude. Accordingly, the solutions to the problems below will also use very simple estimates, accurate to only an order of magnitude.
