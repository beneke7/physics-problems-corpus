---
id: solution-ocr-kevin-zhou-e5sol-ex003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E5Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e5-ex003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 3
A flat metal spiral, with a constant distance $h$ between coils, and $N \gg 1$ total turns is placed in a uniformly growing magnetic field $B ( t ) = \alpha t$ perpendicular to the plane of the spiral.
![](../../../figures/solution-ocr/dfacb7c1427937f1387f27bb.jpg)
Find the emf induced between points $A$ and $C$.

Solution
In theory, you can imagine connecting $A$ and $C$ and finding the flux through the resulting loop, but this is hard to visualize. A better way is to imagine turning the spiral into $N$ concentric circles, connected in series. Then the emf is the sum of the emfs through each,

$$
\mathcal { E } = \sum _ { k = 1 } ^ { N } \pi ( k h ) ^ { 2 } \alpha \approx \pi h ^ { 2 } \alpha \int _ { 0 } ^ { N } d k k ^ { 2 } = \frac { \pi } { 3 } h ^ { 2 } N ^ { 3 } \alpha
$$

To see why this is valid, remember that the emfs are due to a nonconservative electric field, integrated along the length of the loop. Deforming it into a bunch of concentric circles doesn't significantly change $\mathbf { E } \cdot d \mathbf { s }$ along it, because $N$ is large, so it doesn't change the answer much.


Remark: EMF vs. Voltage
We mentioned earlier in E2 that we often care about electromotive forces, which just mean any forces that act on charges to push them around a circuit. The force due to a nonconservative electric field is another example.

When nonconservative electric fields are in play, the idea of "voltage" breaks down entirely, because you can't define it consistently. However, electrical engineers use a more pragmatic definition of voltage: to them, voltage is just whatever a voltmeter displays. In other words, what they call voltage is what we call electromotive force. This tends to lead to long and bitter semantic disputes, along with rather nonintuitive results, as you'll see below. For example, the "voltage" can be different for different voltmeters even if they are connected at the same points!

Despite this trouble, we'll go along with the standard electrical engineer nomenclature and refer to these emfs as voltages in later problem sets. For example, Kirchhoff's loop rule should properly say that the sum of the voltage drops along a loop is not zero, but rather $- d \Phi / d t$. But it is conventional to move it to the other side and call it a "voltage drop" of $d \Phi / d t$.

Remark
When we apply Faraday's law, we often use Ampere's law (without the extra displacement current term) to calculate the magnetic field. This is not generally valid, but works if the currents are in the slowly changing "quasistatic" regime, which means radiation effects are negligible. All the problems below assume this, but we'll see more subtle examples in E7.
[2] Problem 8 (Purcell 7.6). An infinite cylindrical solenoid has radius $R$ and $n$ turns per unit length. The current grows linearly with time, according to $I ( t ) = C t$. Assuming the electric field is cylindrically symmetric and purely tangential, find the electric field everywhere.

Solution. Note that $B = \mu _ { 0 } n I$ in the solenoid, so that the flux through a loop of radius $r$ varies as

$$
\frac { d \Phi _ { B } } { d t } = \mu _ { 0 } n C \pi \times \begin{cases} r ^ { 2 } & r < R \\ R ^ { 2 } & r > R \end{cases}
$$

By assumption, the electric field is

$$
\mathbf { E } = E ( r ) \hat { \boldsymbol { \phi } }
$$

and the emf is $2 \pi r E$, so we conclude

$$
E ( r ) = \frac { 1 } { 2 } \mu _ { 0 } n C \times \left\{ \begin{array} { l l }
r & r < R \\
R ^ { 2 } / r & r > R
\end{array} . \right.
$$

Note that we had to assume $\mathbf { E } = E ( r ) \hat { \phi }$. It's impossible to derive that from Maxwell's equations, because it's not true in general; as discussed in E1, you can get different results if you had different boundary conditions (such as the solenoid being inside a giant capacitor) or different initial conditions (such as somebody shining electromagnetic radiation on the solenoid using a flashlight). But this is the solution you get if none of that "extra" stuff is around.


[2] Problem 9 (Purcell 7.4). Two voltmeters are attached around a solenoid with magnetic flux $\Phi$.
![](../../../figures/solution-ocr/9e3fd41d49d35feb8f33e948.jpg)
Find the readings on the two voltmeters in terms of $d \Phi / d t$, paying attention to the signs.
Solution. Let the resistance of each resistor be $R$. The current in the center loop with the two resistors is $I _ { 0 } = ( d \Phi / d t ) / ( 2 R )$, and the emf across each resistor is $\mathcal { E } _ { 0 } = I _ { 0 } R = ( 1 / 2 ) d \Phi / d t$.
Each voltmeter is connected across one resistor. Now consider the loop formed by one voltmeter's wires, and the half of the center loop closest to it. Neither of these loops encloses the solenoid, so the integral of $\mathbf { E } \cdot d \mathbf { s }$ around each of them is zero. Thus, the emf across the resistor is balanced by the emf across the voltmeter, so each voltmeter reads $\pm \mathcal { E } _ { 0 }$.
The subtlety is in the signs. Suppose that $d \Phi / d t$ is positive, as indicated in the diagram. Then the induced current in the top resistor is rightward, which means the right end of the resistor is at lower potential, which means the top voltmeter reads $- \mathcal { E } _ { 0 }$. But the induced current in the bottom resistor is leftward, so by similar reasoning, the bottom voltmeter reads $\mathcal { E } _ { 0 }$. So different voltmeters, with the same probes connected at the same points, can give different results!
[2] Problem 10 (Purcell 7.28). [A] Consider the loop of wire shown below.
![](../../../figures/solution-ocr/823730a9d1f32341b13c451c.jpg)
Suppose we want to calculate the flux of B through this loop. Two surfaces bounded by the loop are shown above. Which, if either, is the correct surface to use? If each of the two turns in the loop are approximately circles of radius $R$, then what is the flux? Generalize to an $N$-turn coil.
Solution. Remember that in the definition of the magnetic flux, one needs to define a normal vector $d \mathbf { S }$. This is arbitrary, since for any point on a surface there are two normal vectors which point in opposite directions. Applying Faraday's law requires making a consistent choice.

However, some surfaces are nonorientable, which means it is impossible to define the normal vector on the surface continuously. Concretely, what happens is that if we draw a normal vector at some point (arbitrarily picking up or down), and continuously extend this definition around the surface, we come back to the same point but with the normal vector pointing in the opposite direction. The surface on the right, which is a Mobius strip, has exactly this problem. For this reason, we can't define the flux through it at all! In order to apply Faraday's law (or Gauss's law, etc.) we always have to use orientable surfaces like the one on the left. Thankfully, for any closed loop, an orientable surface whose boundary is the loop always exists; it's called a Seifert surface.

The flux through the left surface is about $2 \pi R ^ { 2 } B$. In general, for $N$ turns, we would get a flux of about $N \pi R ^ { 2 } B$, though this gets hard to visualize in terms of surfaces.
