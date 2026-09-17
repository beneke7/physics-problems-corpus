---
id: solution-document-eupho-2017-t-s
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2017_T_S.pdf
extraction_method: cached-mmd
mapped_problems: [eupho-2017-T1, eupho-2017-T2, eupho-2017-T3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eupho/2017_T_S.pdf."
---

## 1 Oscillating rope

A) It is evident from the figure that the curvature of the rope in the fundamental vibration is very small. It infers for a possibility to model the fundamental vibration as a swinging of a rigid uniform rod of length $L$ about a pivot point at its end. The moment of inertia of the rod is:

$$
I=m L^{2} / 3
$$

and the distance from the center-of-mass to the pivot point is:

$$
b=L / 2
$$

Therefore, the frequency of the fundamental vibration is approximated as:

$$
f_{1}=\frac{1}{2 \pi} \sqrt{m g b / I}=\frac{1}{2 \pi} \sqrt{3 g / 2 L} \approx 0.61 \mathrm{~Hz}
$$

Correspondingly, the period of the fundamental vibration is:

$$
T_{1}=2 \pi \sqrt{I / m g b}=2 \pi \sqrt{2 L / 3 g} \approx 1.6 \mathrm{~s}
$$

B) Whatever model for estimating of $f_{1}$ is being used, one may deduce on the basis of dimensionality arguments that the k -th natural frequency of the rope is:

$$
f_{k}=c_{k} \sqrt{g / L}
$$

where $c_{k}$ is a dimensionless numeric coefficient depending on the consecutive mode number $k$ only. Let $A$ and $B$ be the suspension point and the free end of the rope respectively, and $N$ be the node on the rope for the second natural vibration (see the figure).
![](https://cdn.mathpix.com/cropped/0212cc66-6723-4aae-b8aa-01c6a7e51b1d-1.jpg?height=513&width=938&top_left_y=1475&top_left_x=95)

Since the node point is at rest (in the small-amplitude approximation), the vibration of the part $N B$ could be considered as a fundamental vibration of a rope of length $L N A$ about a suspension point $N$. Therefore:

$$
f_{2}(L) \equiv f_{1}(L-N A)
$$

Hence one may write:

$$
\frac{f_{2}(L)}{f_{1}(L)}=\frac{f_{1}(L-N A)}{f_{1}(L)}=\sqrt{\frac{L}{L-N A}}
$$

Since the absolute displacement is much smaller than the length of the rope, the distances could be measured in a vertical direction, to the ceiling, instead along the rope. Therefore, by taking $L=1 \mathrm{~m}$, and $N A \approx 0.8 \mathrm{~m}$, we obtain:

$$
\frac{f_{2}}{f_{1}} \approx 2.2
$$

Similarly, the vibration of the part $N_{1} B$ in the third eigenmode is equivalent to the second natural vibration of a rope of length $L-N_{1} A \approx 0.4 \mathrm{~m}$. In analogy to the first case:

$$
f_{3}(L) \equiv f_{2}\left(L-N_{1} A\right)
$$

and

$$
\frac{f_{2}(L)}{f_{1}(L)}=\frac{f_{2}\left(L-N_{1} A\right)}{f_{2}(L)}=\sqrt{\frac{L}{L-N_{1} A}} \approx 1.6
$$

Therefore:

$$
f_{3} / f_{1}=f_{2} / f_{1} \times f_{3} / f_{2} \approx 3.5
$$

Finally:

$$
f_{1}: f_{2}: f_{3} \approx 1: 2.2: 3.5
$$

| Part | Marking scheme | Points |
| :--- | :--- | :--- |
| A | States explicitly or realizes (proper drawing or notattions) the physical pendulum analogy | 1.0 |
|  | Correct expression for the moment of unertia | 1.0 |
|  | Determination of the position of the center of mass | 0.5 |
|  | Correct formula for the period/frequency of a physical pendulum | 1.0 |
|  | Calculates $\mathrm{f}_{1}=0.61 \mathrm{~Hz}$ with two significant digits | 0.5 |
|  | Subtotal on A | 4.0 |
| B | States or realizes (proper graph or formula) that the vibration of the rope below a node point is similar to a lower order vibration of a shorter rope. | 1.0 |
|  | Uses dimensionality arguments to argue that $\mathrm{f}_{\mathrm{k}}=\mathrm{c}_{\mathrm{k}}(\mathrm{g} / \mathrm{L})^{1 / 2}$ | 1.0 |
|  | Applies similarity arguments to $f_{1}$ and $f_{2}$ and derives $f_{2} / f_{1}=(L / L-$ NA) ${ }^{1 / 2}$ | 1.0 |
|  | Reads correctly NA from the graph | 0.5 |
|  | Calculates $\mathrm{f}_{2} / \mathrm{f}_{1}=2.2$ to a precision of 2 significant digits | 0.5 |
|  | Applies similarity arguments to $f_{3}$ and $f_{2}$ (or $f_{1}$ ) and derives $f_{3} / f_{2}$ $=\left(L / L-N_{1} A\right)^{1 / 2} \text { or } f_{3} / f_{1}=\left(L / L-N_{2} A\right)^{1 / 2}$ | 1.0 |
|  | Reads correctly $\mathrm{N}_{1} \mathrm{~A}\left(\mathrm{~N}_{2} \mathrm{~A}\right)$ from the graph. | 0.5 |
|  | Calculates $\mathrm{f}_{3} / \mathrm{f}_{1}=3.5$ to a precision of 2 significant digits. | 0.5 |
|  | Subtotal on B | 6.0 |

## 2 Disk in gas

The initial pressure on the thermal insulating layer is $P_{0}= n k_{B} T_{0}$, where $n$ is number density of the gas. It originates from multiplying the flux $j_{0} \propto v_{x 0}$ and momentum that one molecule transfers $p_{0}=2 m v_{x 0}$ (elastic collision), where $v_{x 0}$ is the normal component of molecule's velocity, and taking the average $\left(\overline{2 v_{x 0}^{2}} \propto T_{0}\right)$. When applying the same idea to the surface with good thermal contact, we find out that the flux remains the same, although the momentum increases:

$$
p_{1}=m\left(v_{x 0}+v_{x 1}\right) \approx m v_{x 1}
$$

where $v_{x 1}$ is the normal velocity component of the molecule flying away from the disk. Thus for pressure $P_{1}$ :

$$
\frac{P_{1}}{P_{0}}=\frac{\overline{v_{x 0} v_{x 1}}}{\overline{2 v_{x 0}^{2}}} \approx \frac{\sqrt{T_{1} T_{0}}}{T_{0}}
$$

which is correct to some numerical coefficient of the order of one.

The net force acting on the disk:

$$
F=\left(P_{1}-P_{0}\right) S \approx S n k_{B} \sqrt{T_{0} T_{1}}
$$

and then the initial acceleration:

$$
a_{0} \approx \frac{S n k_{B}}{M} \sqrt{T_{0} T_{1}}=\frac{S \rho k_{B}}{m M} \sqrt{T_{0} T_{1}}
$$

Since $P_{1} \gg P_{0}$, the disk will accelerate until its speed becomes of the order of average gas molecules speed. After the velocity $v$ of the disc becomes on the order of $v_{0}=\sqrt{k T_{0} / m}$, the flux of molecules reaching the backside $j(v)$ decays faster than exponentially due to the nature of the molecular velocity distribution in the ideal gas (for example, $j\left(2 v_{0}\right) \approx 10^{-3} j_{0}$ and $j\left(3 v_{0}\right) \approx 10^{-6} j_{0}$ ). That leads to a proportional decrease in a propelling pressure $P_{1}$. In order to compensate for an initial bias $\sqrt{T_{1} / T_{0}} \approx 30$, it will take around a factor of one on the velocity of the disk. Therefore the maximum velocity of the disk:

$$
v_{\max } \approx v_{0}=\sqrt{\frac{k_{B} T_{0}}{m}}
$$

Here we assumed that the disk will not cool close to $T_{0}$ before it reaches the maximum velocity. Let us show it. The acceleration time is approximately:

$$
t_{a} \approx \frac{v_{\max }}{a_{0}} \approx \frac{M \sqrt{m k_{B} T_{0}}}{S \rho k_{B} \sqrt{T_{0} T_{1}}}=\frac{M}{\rho S} / \sqrt{\frac{k_{B} T_{1}}{m}}
$$

Since the power of heat removal $P_{\mathrm{th}}$ is maximal at the beginning (at zero velocity), we can upper-bound estimate the time for the disk to cool as $t_{c}=Q / P_{\mathrm{th}}$, where $Q$ is the total heat of the disk. The initial thermal power of heat removal can be estimated as:

$$
P_{\mathrm{th}} \approx S j_{0} \times k_{B} T_{1} \approx S n k_{B} \sqrt{T_{0} T_{1}} \sqrt{\frac{k_{B} T_{1}}{m}}
$$

and the total heat $Q \approx N k_{B} T_{1}$. Given $M \approx N m$, we obtain:

$$
t_{c} \approx \frac{(M / m) k_{B} T_{1}}{S n k_{B} T_{1} \sqrt{k_{B} T_{0} / m}}=\frac{M}{\rho S} / \sqrt{\frac{k_{B} T_{0}}{m}}
$$

Finally, $t_{a} / t_{c} \approx \sqrt{T_{0} / T_{1}} \ll 1$, and indeed disk will not cool significantly before it reaches the velocity about $v_{0}$.

Grading scheme. Indented lines show partial points for partially correct solutions

## Initial acceleration (5 pts)

$P_{0}=n k T=j_{0} \times \Delta p_{0}, \Delta p_{0}=2 m v_{x 0} \ldots \ldots \ldots \ldots \ldots 2$ pts
$P \propto k T \ldots \ldots \ldots \ldots \ldots \ldots \ldots \ldots \ldots \ldots \ldots . .1$ pts
$\Delta p_{1}=m v_{x 1}, P_{1} \approx n k \sqrt{T_{0} T_{1}}$
2 pts
$P_{1}=n k T_{1}$, no points for $a_{0}$ further $\ldots \ldots \ldots .1$ pts
only $\Delta p_{1}=m v_{x 1} \ldots \ldots \ldots \ldots \ldots \ldots \ldots . .1$ pts
Answer for $a_{0}$ ⋯ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 pts
if some slight mistake
0.5 pts

Special rule
if $\left\langle v_{x 0}\right\rangle=\sqrt{3 k_{B} T / m}$ (student doesn't understand the difference between velocity of the molecule and the component of the velocity)
$-0.5 \mathrm{pts}$

## Maximal velocity (4 pts)

$P_{1}$ and $P_{0}$ depend on the velocity of the disk, $P_{1}$ drops significantly if $v \approx v_{0}$, thus $v_{\text {max }} \approx v_{0}$.

4 pts
$P_{0}^{\prime} \approx \rho v^{2}$, but $P_{1}$ stays the same, thus $v_{\text {max }} \approx v_{0} \sqrt{T_{1} / T_{0}} \ldots \ldots \ldots \ldots \ldots \ldots \ldots \ldots \ldots . . . \ldots \ldots$ pts Student understands that at least some pressure depends on the velocity of the disk………… 1 pts The velocity is maximal when disk cools to $T_{0} 0$ pts

## Justification of slow cooling (1 pts)

Estimation of times $t_{a}$ and $t_{c}$ given.
1 pts
Student explicitly writes that $T_{1}^{\prime} \approx T_{1}$ but doesn't prove it. 0.5 pts

## 3 Superconducting mesh

The most important physics to consider is that the magnetic flux through the superconducting mesh is effectively locally locked in place. Consider this effect before anything else. Once the mesh is cooled to the superconducting state the magnetic field as a function of position on the mesh cannot be varied, regardless of the change in location of the dipole. Since the magnetic field is effectively specified along this superconducting plane, the problem reduces to a boundary value problem that is traditionally solved by the method of images.

First, consider what happens if the physical dipole is moved far away from the mesh. An image dipole must be located that fixes the magnetic field to be unchanged. This can be done with an image dipole that is located a distance $a$ behind the mesh, and it must have the same orientation $m$. Now bring back the original dipole, placing it a distance $b$. It is necessary to cancel out the field from this original, but now displaced, dipole with an opposite dipole $-m$ placed behind the mesh at a distance $b$.

Double check your work. If the original dipole is placed at the original location $a$, then there is no need for image charges, and they should cancel out. Indeed, the two image dipoles will, as they have opposite orientations.

The force between the dipole and the image charges must be determined. Though it might be possible to write down these answers quickly, the derivation is shown below.

Consider first that a magnetic dipole moment $m$ can be thought of as a pair of magnetic monopoles of strength $q_{m}$ and $-q_{m}$ separated by a distance $d$ such that $m=q_{m} d$. Determine the magnetic field strength a distance $x \gg d$ away from the dipole:

$$
B=\frac{\mu_{0}}{4 \pi} \frac{q_{m}}{x^{2}}+\frac{\mu_{0}}{4 \pi} \frac{-q_{m}}{(x+d)^{2}}
$$

It should be clear that $q_{m}$ is at the origin and $-q_{m}$ is a distance $d$ farther away from the reference point $x$ where the field $B$ is being determined. This expression is exact.

The second term can be subjected to a binomial expansion and then

$$
B \approx \frac{\mu_{0}}{4 \pi} \frac{q_{m}}{x^{2}}-\frac{\mu_{0}}{4 \pi} \frac{q_{m}}{x^{2}}\left(1-2 \frac{d}{x}\right)=\frac{\mu_{0}}{2 \pi} \frac{q_{m} d}{x^{3}}=\frac{\mu_{0}}{2 \pi} \frac{m}{x^{3}}
$$

Now consider the magnetic force on a dipole at the location $x$ in a non-uniform field $B$, which is given by

$$
F=-q_{m} B(x)+q_{m} B(x+d)
$$

which can be approximated by a Taylor expansion of $B$,

$$
\begin{aligned}
F & \approx-q_{m} B(x)+q_{m}\left(B(x)+\left.d \frac{d B}{d x}\right|_{x}\right) \\
& =q_{m} d\left(-\frac{3 \mu_{0}}{2 \pi} \frac{m}{x^{4}}\right)=-\frac{3 \mu_{0}}{2 \pi} \frac{m^{2}}{x^{4}}
\end{aligned}
$$

The negative sign means that two parallel identical dipoles separated by a distance $x$ will attract.

Returning to the problem, the physical dipole at $b$ will be attracted to the image dipole at location $-a$ and repelled from the image dipole at $-b$, so

$$
F=-\frac{3 \mu_{0}}{2 \pi} \frac{m^{2}}{(b+a)^{4}}+\frac{3 \mu_{0}}{2 \pi} \frac{m^{2}}{(b+b)^{4}}=\frac{3 \mu_{0} m^{2}}{2 \pi}\left(\frac{1}{16 b^{4}}-\frac{1}{(a+b)^{4}}\right)
$$

where a negative sign means that the physical dipole feels attraction toward the mesh.

It is entertaining to consider what happens if $b$ is almost the same as $a$, say $b=a+\delta$. In this case,

$$
F=\frac{3 \mu_{0} m^{2}}{2 \pi}\left(\frac{1}{16(a+\delta)^{4}}-\frac{1}{(2 a+\delta)^{4}}\right)
$$

or

$$
F \approx \frac{3 \mu_{0} m^{2}}{2 \pi} \frac{1}{16 a^{4}}\left(\left(1-4 \frac{\delta}{a}\right)-\left(1-4 \frac{\delta / 2}{a}\right)\right),
$$

which simplifies further into

$$
F \approx-\frac{3 \mu_{0} m^{2}}{16 \pi a^{5}} \delta
$$

Now to interpret. A negative force here is a force of attraction toward the mesh. A positive $\delta$ is moving the physics dipole away from the mesh. As such, the force is a linear restoring force, and slight disturbances to the physical dipole will result in simple harmonic oscillations about the original position.

## Grading scheme

1.5 Recognition of nature of problem

- Recognize flux trapping in superconductor (1.0 pt)
- Recognize that flux trapping creates a boundary value problem ( 0.5 pt )
4.0 Recognize that the boundary value problem requires two image dipoles
- First image dipole to create original $B$ field on mesh (0.5 pt)
- Correct location of first image dipole (0.5 pt)
- Correct magnitude of first image dipole (0.5 pt)
- Correct orientation of first image dipole (0.5 pt)
- Second image dipole to cancel new $B$ field on mesh (0.5 pt)
- Correct location of second image dipole (0.5 pt)
- Correct magnitude of first image dipole (0.5 pt)
- Correct orientation of first image dipole (0.5 pt)
2.0 Determine the force between two dipoles
- Determine $B$ field a distance from a dipole (1 pt)
- Determine force on a dipole in a non-uniform $B$ field (1 pt)
2.5 Determine the force between the physical dipole and the mesh
- Correct magnitude and direction of force from image dipole one (1 pt)
- Correct magnitude and direction of force from image dipole two (1 pt)
- Correct magnitude and direction of force (0.5 pt)

Some notes:

- Dimensionally correct expression with no shown work but have wrong prefactor get zero marks
- Dimensionally correct expression that show work but have wrong prefactor caused from clear trivial math mistake get $1 / 2$ marks.
- Dimensionally correct expression that whow work but have wrong prefactor caused from serious math mistake or any physics mistake get zero marks.
- Dimensionally incorrect expression with no shown work get zero marks
- Dimensionally incorrect answers that show work get zero marks
- Follow on errors that use dimensionally correct, but wrong, derived inputs are not penalized further.
- Follow on errors that use dimensionally incorrect derived inputs are penalized half marks each time the input is used.
- Writing a formula incorrectly without showing the derivation and using it as an input is not considered a follow on error, but is instead a non-trivial error with a result of zero marks for that part.
- Ambiguous locations, magnitudes, or orientations receive zero marks.
- Correctly identifying the locations, magnitudes, or orientations of both of the two image dipoles without clearly specifying why will receive full 1.5 points for recognizing the nature of the problem.
- Correctly identifying the locations, magnitudes, or orientations of only one of the image dipoles without clearly specifying why will receive 0.5 points for recognizing the nature of the problem.
