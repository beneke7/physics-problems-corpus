---
id: solution-ocr-gpho-2019-theory-solutions-t2
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2019_theory_solutions.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [gpho-2019-t2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Problem T2. Controlled fusion (11 points)
Part A. General considerations (0.5 points)
i. (0.5 pts) We need to equate thermal and electrostatic energies, $k _ { B } T = e V$ (0.2 pts)
with $V = 14 \mathrm { kV }$. (0.1 pts)
Hence, the fusion temperature can be expressed in Kelvins as $T = e V / k _ { B }$ (0.1 pts)
which yields numerically

$$
T _ { 0 } = \frac { 14 \mathrm { keV } } { k _ { B } } = \frac { 14 \times 10 ^ { 3 } \times 1.60 \times 10 ^ { - 19 } \mathrm { C } \cdot \mathrm {~V} } { 1.38 \times 10 ^ { - 23 } \mathrm {~J} \cdot \mathrm {~K} ^ { - 1 } } = 1.6 \times 10 ^ { 8 } \mathrm {~K} .
$$

(0.1 pts)

Part B. Tokamak (2.5 points)
i. (0.5 pts) The magnetic field lines curl around the straight current with the direction determined by the right hand rule or something equivalent. (0.2 pts)
![](../../../figures/solution-ocr/60f6a033c7ff7a01ba0d5a3d.jpg)
(0.3 pts)

Only one fieldline shown: -0.1 pts. No direction of the fieldlines shown: -0.2 pts; wrong direction: -0.1 pts.
ii. (0.5 pts) Very close to the circular loop, the magnetic field is similar to that of a straight wire. Far away, the magnetic field lines correspond to that of a magnetic dipole. (0.2 pts) The in-between area can be approximate drawn as shown in the figure
![](../../../figures/solution-ocr/f426f4888e11e7a1a34284eb.jpg)
(0.3 pts)

Only one fieldline shown: -0.1 pts. No direction of the fieldlines shown: -0.2 pts; wrong direction: -0.1 pts.
iii. (0.75 pts) Without the infinite wire, the field line would make a short circular loop around the circular current and terminate. In the presence of the long wire, a tangential component of the magnetic field is added, so the previously circular magnetic field line starts to drift in the tangential direction around the infinite wire while still winding rapidly around the circular loop. This forms a helixal pattern along the surface of a toroid as shown in the figure. (0.25 pts)
![](../../../figures/solution-ocr/554aac568827af1b57ce5e49.jpg)
(0.5 pts)
iv. (0.75 pts) Using similar arguments, without the presence of the circular loop, the magnetic field lines would make a short circular loop around the infinite wire and then terminate. If we add the circular loop, the field lines start drifting along the field lines of the circular loop that are very close to the center (the fied lines lie on the $z$ - and $r$-axis in cylindrical coordinates) while winding rapidly around the symmetry axis (after all, the magnetic field strength from the infinite wire is much bigger). This means that the field line forms a dense helix that's slowly getting wider and wider the farther away you go from the plane of the circular loop until it eventually completes the loop by coming back very far away from the circular loop. (0.25 pts)
![](../../../figures/solution-ocr/4e4bb34a66c66ece37015330.jpg)


(0.5 pts)

If the helix doesn't get wider, subtract 0.15 pts from the full score.
Part C. Cold fusion (3.5 points)
i. (1 pt) The electron (muon) experiences an electrostatic force of

$$
\begin{equation*}
F = - \frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { 2 e ^ { 2 } } { R ^ { 2 } } , \tag{0.4pts}
\end{equation*}
$$

where the factor of two comes from the fact that the nucleus has charge $+ 2 e$. This is an attractive force and it acts as a centripetal force

$$
\begin{equation*}
F = \frac { m v ^ { 2 } } { R } = \frac { p ^ { 2 } } { m R } \tag{0.4pts}
\end{equation*}
$$

(formula for centripetal acceleration only yields 0.3 pts). Combining the two, one gets

$$
\begin{equation*}
p = \sqrt { \frac { m e ^ { 2 } } { 2 \pi \epsilon _ { 0 } R } } . \tag{0.2pts}
\end{equation*}
$$

ii. (1 pt) According to the uncertainty principle, the standard deviation of the momentum and the position of the particle obey the following inequality

$$
\begin{equation*}
\sigma _ { x } \sigma _ { p } \geq \frac { \hbar } { 2 } , \tag{0.3pts}
\end{equation*}
$$

where $\hbar = h / 2 \pi$ is the reduced Planck's constant. Since we are after an estimate, the numerical factors do not really matter so we will omit those from now on. The momentum of the electron (muon) is always $p$ so $\sigma _ { p } = p$, whereas the standard deviation of the position is in the order of the radius of the circle, so $\sigma _ { r } \sim R$.
This yields

$$
\begin{equation*}
\sqrt { \frac { m e ^ { 2 } R } { \epsilon _ { 0 } } } \geq h . \tag{0.3pts}
\end{equation*}
$$

Solving for $R$ gives

$$
\begin{equation*}
R \sim \frac { h ^ { 2 } \epsilon _ { 0 } } { m e ^ { 2 } } . \tag{0.2pts}
\end{equation*}
$$

For an electron, $R \left( m = m _ { e } \right) = 1.7 \times 10 ^ { - 10 } \mathrm {~m}$, for a muon, $R \left( m = m _ { \mu } \right) = 8.1 \times 10 ^ { - 13 } \mathrm {~m}$.

No marks for energy expressions, and no marks for $p = m v$. iii. (1 pt) Due to symmetry, we need only consider the force balance on one of the nuclei because the other one experiences exactly the same forces.
(0.1 pts)

The force balance is between the electromagnetic force from the other nucleus and from the electron (muon cloud). The first corresponds to a repulsive force of

$$
\begin{equation*}
F _ { 1 } = \frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { e ^ { 2 } } { d ^ { 2 } } . \tag{0.2pts}
\end{equation*}
$$

With the electron (muon) cloud, only the charge that is inside a sphere of radius $d$ contributes to the electromagnetic force. This can be verified using Gauss' theorem on the said sphere.
(0.1 pts)

The charge inside the smaller sphere is given by $q =$ $- 2 e d ^ { 3 } / 8 R ^ { 3 }$, because the charge of the sphere scales as the radius cubed.
(0.2 pts)

The force from the cloud is then

$$
\begin{equation*}
F _ { 2 } = - 2 e \frac { d ^ { 3 } } { 8 R ^ { 3 } } \frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { e } { d ^ { 2 } } . \tag{0.2pts}
\end{equation*}
$$

Now, because of force balance, $F _ { 1 } + F _ { 2 } = 0$, so

$$
\begin{equation*}
\frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { e ^ { 2 } } { d ^ { 2 } } - \frac { d ^ { 3 } } { 4 R ^ { 3 } } \frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { e ^ { 2 } } { d ^ { 2 } } = 0 . \tag{0.1pts}
\end{equation*}
$$

Solving for $d$, one gets

$$
\begin{equation*}
d = R \sqrt [ 3 ] { 4 } . \tag{0.1pts}
\end{equation*}
$$

iv. (0.5 pts) Since $d$ scales linearly with $R$ and $R$ is inversely proportional to the mass, the distance between the nuclei is reduced by a factor of $m _ { \mu } / m _ { e } = 207$.
(0.5 pts)

No marks for the answer without any motivation. The points can be obtained only by summarizing the results of Ciii and Civ. Using the result of Civ without the result of Ciii gives 0.1 pt.
Part D. Inertial confinement fusion (4.5 points)
i. (0.5 pts) The fluid shell has uniform mass density along its surface which can be expressed as $\sigma = M / A$, where $A = 4 \pi r ^ { 2 }$ is the total area of the shell.
(0.2 pts)

The mass of the small piece is therefore

$$
\begin{equation*}
\Delta M = \sigma \Delta A = M \frac { \Delta A } { 4 \pi r ^ { 2 } } . \tag{0.3pts}
\end{equation*}
$$

ii. (1 pt) Since the external pressure is much bigger than the internal, the shell will start contracting.
(0.2 pts)

The total force acting on the small piece is $\Delta F = p _ { 0 } \Delta A -$ $p _ { e } \Delta A \simeq - p _ { e } \Delta A$, where a positive force would be pointing radially outwards.
The acceleration can therefore be expressed as

$$
\begin{equation*}
a = \frac { \Delta F } { \Delta M } = - \frac { 4 \pi r ^ { 2 } p _ { e } } { M } . \tag{0.3pts}
\end{equation*}
$$

iii. (1.5 pts) Since $p _ { e } \gg p _ { 0 }$, the final pressure $p _ { m }$ is also much smaller than $p _ { e }$. Indeed, the shell accelerates until the pressure inside becomes equal to the external pressure $p _ { e }$ and continues motion due to inertia, until huge inside pressure stops the motion. So, final volume is correspondingly much smaller than the initial - this can be inferred from the adiabatic law $V \propto p ^ { - 1 / \gamma }$.
(0.2 pts)

So, the work of the external force can be calculated as

$$
\begin{equation*}
W = p _ { e } \Delta V \approx p _ { e } V _ { 0 } . \tag{0.2pts}
\end{equation*}
$$

This work goes to the internal energy,

$$
\begin{equation*}
W = c _ { V } N k _ { B } T _ { m } , \tag{0.2pts}
\end{equation*}
$$


where $c _ { V } = \frac { 3 } { 2 } k _ { B }$ is the heat capacitance by constant volume per one particle, and $N$ is the total number of particles. (0.2 pts) Since the gas becomes totally ionized, each DT molecule will produce 4 particles. (0.2 pts)
So, $N = 4 N _ { 0 }$, where

$$
\begin{equation*}
N _ { 0 } = \frac { p _ { 0 } V _ { 0 } } { k _ { B } T _ { 0 } } . \tag{0.2pts}
\end{equation*}
$$

Bringing all expressions together, we obtain

$$
\begin{equation*}
T _ { m } = \frac { p _ { e } } { 4 p _ { 0 } } T _ { 0 } \tag{0.2pts}
\end{equation*}
$$

To find $r _ { m }$, we combine adiabatic law and ideal gas law to obtain $V ^ { \gamma - 1 } T =$ const . This gives $V \propto T ^ { - 1 / ( \gamma - 1 ) }$ and since $r ( V ) \propto V ^ { 1 / 3 }$, we get

$$
\begin{equation*}
r _ { m } = r \left( \frac { T _ { 0 } } { T _ { m } } \right) ^ { \frac { 1 } { 3 ( \gamma - 1 ) } } = r \left( \frac { 4 p _ { 0 } } { p _ { e } } \right) ^ { \frac { 1 } { 3 ( \gamma - 1 ) } } . \tag{0.1pts}
\end{equation*}
$$

iv. (1.5 pts) To get an estimate of the induced pressure, we
can say that all of the power from the laser goes to increasing the kinetic energy of the evaporated outgoing flow of mass.
(0.3 pts)

If the absolute sign of the rate of change of the mass of the outer shell is $\dot { M }$, then, by considering a small interval of time $\Delta t$, conservation of energy reads as

$$
\begin{equation*}
P \Delta t = \Delta M \frac { u ^ { 2 } } { 2 } = \dot { M } \Delta t \frac { u ^ { 2 } } { 2 } . \tag{0.3pts}
\end{equation*}
$$

Therefore,

$$
\begin{equation*}
\dot { M } = \frac { 2 P } { u ^ { 2 } } . \tag{0.3pts}
\end{equation*}
$$

From the conservation of momentum, one can write

$$
\begin{equation*}
4 \pi r ^ { 2 } p _ { e } = \dot { M } u , \tag{0.3pts}
\end{equation*}
$$

so

$$
\begin{equation*}
p _ { e } = \frac { \dot { M } u } { 4 \pi r ^ { 2 } } = \frac { 2 P } { 4 \pi r ^ { 2 } u } . \tag{0.3pts}
\end{equation*}
$$
