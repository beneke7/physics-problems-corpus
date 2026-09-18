---
id: solution-ocr-ipho-2023-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2023/T2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2023-t2]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## Theory Problem 2: Neutron Stars (10 points)

## Part A. Mass and stability of nuclei (2.5 points)

A. 1 The given binding energy is often called the Weizsäcker-Bethe mass formula, and the physical interpretation of the volume and the surface terms is based on the liquid drop model. The formula works quite well except for the shell effects. Find $A$ to minimize the binding energy per mass number, i.e.,

$$
\begin{equation*}
\frac { B } { A } = a _ { V } - a _ { S } A ^ { - 1 / 3 } - \frac { a _ { C } } { 4 } A ^ { 2 / 3 } . \tag{S2.1}
\end{equation*}
$$

As long as $A$ is small, the second term is dominantly increasing with increasing $A$, and it is eventually taken over by the third term which is decreasing. Therefore, the extremal corresponds to the maximum of $B / A$. One can explicitly carry out

$$
\begin{equation*}
\frac { d ( B / A ) } { d A } = 0 \tag{S2.2}
\end{equation*}
$$

to find the following condition,

$$
\begin{equation*}
\frac { a _ { S } } { 3 } A ^ { - 4 / 3 } - \frac { a _ { C } } { 6 } A ^ { - 1 / 3 } = 0 \tag{S2.3}
\end{equation*}
$$

The solution is

$$
\begin{equation*}
A = \frac { 2 a _ { S } } { a _ { C } } . \tag{S2.4}
\end{equation*}
$$

From the given numerical values, $A = 50$ (which must be an integer) is concluded.

- Note: In reality $B / A$ has a maximum for $A$ ranging from ${ } ^ { 56 } \mathrm { Fe }$ to ${ } ^ { 62 } \mathrm { Ni }$. The discrepancy from the answer in this problem is understood by the approximation of dropping the pairing energy and disregarding a mass difference between the proton and the neutron.
A. 1

$$
\begin{equation*}
A = 50 \tag{0.9 pt}
\end{equation*}
$$

A. 2 Take the differentiation of $B ( Z , A - Z ) / A$ with respect to $Z$ for a fixed $A$, which leads to

$$
\begin{equation*}
- 2 a _ { C } \frac { Z ^ { * } } { A ^ { 1 / 3 } } - 4 a _ { \mathrm { sym } } \frac { 2 Z ^ { * } - A } { A } = 0 . \tag{S2.5}
\end{equation*}
$$

By solving this in terms of $Z ^ { * }$, one finds

$$
\begin{equation*}
Z ^ { * } = \frac { 1 } { 1 + \frac { a _ { C } } { 4 a _ { \mathrm { sym } } } A ^ { 2 / 3 } } \cdot \frac { A } { 2 } . \tag{S2.6}
\end{equation*}
$$

From this expression one can understand that $Z ^ { * } \simeq N$ as long as $A$ is small enough, while $Z ^ { * }$ becomes far smaller than $N$ for large $A$. It is obvious from the explicit form that the symmetry energy tends to favor $Z = N$ but the Coulomb interaction tends to favor $Z \rightarrow 0$, and the balance between these competing effects determines $Z ^ { * }$. Nuclei with too many neutrons (protons) would go through the $\beta ^ { - }$decay (the $\beta ^ { + }$ decay or the electron capture) toward the stable ( $Z , N$ ).
A. 2

$$
Z ^ { * } = 79
$$


A. 3 Plugging the binding energy into the given inequality, one sees that the volume terms cancel due to volume conservation. Then, the condition involves only $a _ { S }$ and $a _ { C }$ which are related as

$$
\begin{equation*}
a _ { S } \left[ A ^ { 2 / 3 } - 2 \left( \frac { A } { 2 } \right) ^ { 2 / 3 } \right] + a _ { C } \left[ \frac { Z ^ { 2 } } { A ^ { 1 / 3 } } - 2 \frac { ( Z / 2 ) ^ { 2 } } { ( A / 2 ) ^ { 1 / 3 } } \right] > 0 . \tag{S2.7}
\end{equation*}
$$

As guided in the problem, the above inequality becomes as simple as

$$
\begin{equation*}
\frac { Z ^ { 2 } } { A } > \frac { 2 ^ { 1 / 3 } - 1 } { 1 - 2 ^ { - 2 / 3 } } \cdot \frac { a _ { S } } { a _ { C } } . \tag{S2.8}
\end{equation*}
$$

Therefore, the numerical coefficient turns out to be 0.7.

- Note: The physical interpretation of this result may need some explanations. Using the values of $a _ { S }$ and $a _ { C }$, one finds that such a symmetric fission process is possible for $Z ^ { 2 } / A \gtrsim 18$. For example, lead (Pb) with $Z = 82$ and $A = 208$ is a stable element among several isotopes. Now, one can compute $82 ^ { 2 } / 208 \approx 32$, which is larger than the threshold 18. The key to resolving this gap is the potential barrier from the deformation. When a heavy nucleus splits into two fragments, the shape and the surface should change from the stable configuration (which is not necessarily spherical due to interaction) and thus the surface energy increases. Although some heavy elements are energetically unstable, the lifetime necessary to overcome the potential barrier can be very large.
A. 3
0.7 pt

$$
C _ { \text {fission } } = 7.0 \times 10 ^ { - 1 }
$$

## Part B. Neutron star as a gigantic nucleus (1.5 points)

B. 1 The expression apart from the parametric dependence on $A$ can be identified as

$$
\begin{equation*}
a _ { \mathrm { grav } } = \frac { 3 } { 5 } \frac { G m _ { N } ^ { 2 } } { R _ { 0 } } , \tag{S2.9}
\end{equation*}
$$

which is re-expressed in terms of $M _ { P }$ using the given relation to $G$, leading to

$$
\begin{equation*}
a _ { \text {grav } } = \frac { 3 } { 5 } \frac { \hbar c m _ { N } ^ { 2 } } { R _ { 0 } M _ { P } ^ { 2 } } = \frac { 3 } { 5 } \cdot \frac { 197 \mathrm { fm } \cdot \mathrm { MeV } \times \left( 939 \mathrm { MeV } / c ^ { 2 } \right) ^ { 2 } } { 1.1 \mathrm { fm } \times \left( 1.22 \times 10 ^ { 22 } \mathrm { MeV } / c ^ { 2 } \right) ^ { 2 } } \simeq 6.4 \times 10 ^ { - 37 } \mathrm { MeV } . \tag{S2.10}
\end{equation*}
$$

Here, $M _ { P }$ is a quantity often called the Planck mass. The gravitational effect is extremely tiny as compared to the typical scale in nuclear physics and this scale difference is manifest for this expression of $G$ with $M _ { P }$ in the MeV unit.

The stability is judged from the condition that the binding energy should be positive, i.e.,

$$
\begin{equation*}
B _ { \text {total } } ( A ) = a _ { V } A - a _ { \text {sym } } A + a _ { \text {grav } } A ^ { 5 / 3 } > 0 . \tag{S2.11}
\end{equation*}
$$

This inequality can be translated into $A > A _ { c }$ with $A _ { c }$ given by

$$
\begin{equation*}
A _ { c } = \left( \frac { a _ { \mathrm { sym } } - a _ { V } } { a _ { \mathrm { grav } } } \right) ^ { 3 / 2 } \simeq 4.4 \times 10 ^ { 55 } . \tag{S2.12}
\end{equation*}
$$

- Note: One may think that one neutron drip is a process with the least change in the surface area and thus the smallest barrier. This leads to a condition, $B _ { \text {total } } ( A ) > B _ { \text {total } } ( A - 1 )$ or approximately $d B _ { \text {total } } ( A ) / d A > 0$, which is satisfied in a window with $B _ { \text {total } } < 0$. This condition, $d B _ { \text {total } } / d A = 0$, results in smaller $A _ { c }$ but it is nontrivial whether such an unstable initial state could be prepared in the nature. The neutron star is born in the Type-II (core-collapse) supernovae, and a baby star called the proto-neutron star is an energetic state at high temperature. Neutrinos bring heat out from the proto-neutron star


within the time scale of $\mathcal { O } ( 10 )$ seconds. What is the possible smallest mass of the neutron star? This is not completely understood partly because the computer simulation of the supernovae is a big challenge even today. Although the neutron star mass can become much smaller than $M _ { \odot }$ theoretically, the simulation and the observation favor the mass $\gtrsim 1.4 M _ { \odot }$.
B. 1
1.5 pt

$$
\begin{aligned}
& a _ { \text {grav } } = 6 \times 10 ^ { - 37 } \mathrm { MeV } \\
& A _ { c } = 4 \times 10 ^ { 55 }
\end{aligned}
$$

## Part C. Neutron star in a binary system (6.0 points)

C. 1 From the energy conservation, the free-falling system earns the kinetic energy $\frac { 1 } { 2 } m v ^ { 2 }$ from the potential energy $m g \Delta h$, and the velocity takes

$$
\begin{equation*}
v ^ { 2 } = 2 g \Delta h = 2 \Delta \phi . \tag{S2.13}
\end{equation*}
$$

The time delay can be derived from the standard arguments. Suppose that Clock-II passes two infinitesimally separate points, $z$ and $z + \Delta z$, in F at time $t$ and $t + \Delta \tau _ { \mathrm { II } }$, then the time interval registered by Clock-II is

$$
\begin{equation*}
\Delta \tau _ { \mathrm { II } } = \frac { \gamma } { c } \left( c \Delta \tau _ { \mathrm { F } } - \beta \Delta z \right) , \tag{S2.14}
\end{equation*}
$$

where the Lorentz transformation is used ${ } ^ { 1 }$ with $\beta = v / c$ and $\gamma = 1 / \sqrt { 1 - \beta ^ { 2 } }$. Because $\Delta z / \Delta \tau _ { \mathrm { F } } = v$ and $\Delta \tau _ { \mathrm { F } } = \Delta \tau _ { \mathrm { I } }$, the above expression is written as

$$
\begin{equation*}
\Delta \tau _ { \mathrm { II } } = \gamma \left( 1 - \beta ^ { 2 } \right) \Delta \tau _ { \mathrm { F } } = \sqrt { 1 - \beta ^ { 2 } } \Delta \tau _ { \mathrm { I } } . \tag{S2.15}
\end{equation*}
$$

Using the expression of $v ^ { 2 }$, one finally arrives at

$$
\begin{equation*}
\Delta \tau _ { \mathrm { II } } = \sqrt { 1 - 2 \frac { \Delta \phi } { c ^ { 2 } } } \Delta \tau _ { \mathrm { I } } \simeq \left( 1 - \frac { \Delta \phi } { c ^ { 2 } } \right) \Delta \tau _ { \mathrm { I } } . \tag{S2.16}
\end{equation*}
$$

C. 1
1.0 pt

$$
\Delta \tau _ { \mathrm { II } } = \left( 1 - \frac { \Delta \phi } { c ^ { 2 } } \right) \Delta \tau _ { \mathrm { I } }
$$

C. 2 In terms of the effective speed of light, the total time necessary for the light propagation from $\mathbf { N }$ to E is

$$
\begin{equation*}
t _ { \mathrm { E } - \mathrm { N } } = \int _ { x _ { N } } ^ { x _ { E } } \frac { d x } { c _ { \mathrm { eff } } ( x ) } . \tag{S2.17}
\end{equation*}
$$

The denominator is expanded in terms of the gravitational potential and the leading-order correction is found to be

$$
\begin{equation*}
t _ { \mathrm { E } - \mathrm { N } } \simeq \frac { 1 } { c } \int _ { x _ { N } } ^ { x _ { E } } d x \left( 1 + \frac { 2 G M _ { \mathrm { WD } } } { c ^ { 2 } \sqrt { x ^ { 2 } + d ^ { 2 } } } \right) = \frac { x _ { E } - x _ { N } } { c } + \Delta t , \tag{S2.18}
\end{equation*}
$$

[^0]
where the time delay $\Delta t$ is identified as

$$
\begin{equation*}
\Delta t = \frac { 2 G M _ { \mathrm { WD } } } { c ^ { 3 } } \int _ { x _ { N } } ^ { x _ { E } } \frac { d x } { \sqrt { x ^ { 2 } + d ^ { 2 } } } = \left. \frac { G M _ { \mathrm { WD } } } { c ^ { 3 } } \log \left( \frac { \sqrt { x ^ { 2 } + d ^ { 2 } } + x } { \sqrt { x ^ { 2 } + d ^ { 2 } } - x } \right) \right| _ { x = x _ { N } } ^ { x = x _ { E } } . \tag{S2.19}
\end{equation*}
$$

Inside the logarithm, the following approximations are made:

$$
\begin{equation*}
\sqrt { x _ { N } ^ { 2 } + d ^ { 2 } } + x _ { N } \simeq \frac { d ^ { 2 } } { 2 \left| x _ { N } \right| } , \quad \sqrt { x _ { N } ^ { 2 } + d ^ { 2 } } - x _ { N } \simeq 2 \left| x _ { N } \right| , \tag{S2.20}
\end{equation*}
$$

and

$$
\begin{equation*}
\sqrt { x _ { E } ^ { 2 } + d ^ { 2 } } - x _ { E } \simeq \frac { d ^ { 2 } } { 2 x _ { E } } , \quad \sqrt { x _ { E } ^ { 2 } + d ^ { 2 } } + x _ { E } \simeq 2 x _ { E } \tag{S2.21}
\end{equation*}
$$

Then, the simple form of approximated $\Delta t$ is

$$
\begin{equation*}
\Delta t \simeq \frac { G M _ { \mathrm { WD } } } { c ^ { 3 } } \log \left( \frac { 2 x _ { E } \cdot 2 \left| x _ { N } \right| } { d ^ { 2 } / \left( 2 x _ { E } \right) \cdot d ^ { 2 } / \left( 2 \left| x _ { N } \right| \right) } \right) = \frac { 2 G M _ { \mathrm { WD } } } { c ^ { 3 } } \log \left( \frac { 4 \left| x _ { N } \right| x _ { E } } { d ^ { 2 } } \right) . \tag{S2.22}
\end{equation*}
$$

C. 2

$$
\begin{equation*}
\Delta t = \frac { 2 G M _ { \mathrm { WD } } } { c ^ { 3 } } \log \left( \frac { 4 \left| x _ { N } \right| x _ { E } } { d ^ { 2 } } \right) \tag{1.8 pt}
\end{equation*}
$$

C. 3 Because $\left| x _ { N } \right| = L \cos \varepsilon \simeq L$ and $d = L \sin \varepsilon \simeq L \varepsilon$ for $\Delta t _ { \text {max } }$, the answer of C. 2 gives

$$
\begin{equation*}
\Delta t _ { \max } = \frac { 2 G M _ { \mathrm { WD } } } { c ^ { 3 } } \log \left( 4 x _ { E } / L \varepsilon ^ { 2 } \right) \tag{S2.23}
\end{equation*}
$$

For $\Delta t _ { \text {min } }$ the sign of $x _ { N }$ is changed. Although the expression of $\Delta t$ is intact, the approximation takes a different form as

$$
\begin{equation*}
\sqrt { x _ { N } ^ { 2 } + d ^ { 2 } } + x _ { N } \simeq 2 x _ { N } , \quad \sqrt { x _ { N } ^ { 2 } + d ^ { 2 } } - x _ { N } \simeq \frac { d ^ { 2 } } { 2 x _ { N } } . \tag{S2.24}
\end{equation*}
$$

Then, the approximated form of $\Delta t _ { \text {min } }$ is

$$
\begin{equation*}
\Delta t _ { \min } \simeq \frac { G M _ { \mathrm { WD } } } { c ^ { 3 } } \log \left( \frac { 2 x _ { E } \cdot d ^ { 2 } / \left( 2 x _ { N } \right) } { d ^ { 2 } / \left( 2 x _ { E } \right) \cdot 2 x _ { N } } \right) = \frac { 2 G M _ { \mathrm { WD } } } { c ^ { 3 } } \log \left( x _ { E } / L \right) , \tag{S2.25}
\end{equation*}
$$

where $x _ { N } \simeq L$ is used in the last expression. In the difference, $\Delta t _ { \text {max } } - \Delta t _ { \text {min } }$, one sees that $L$ and $x _ { E }$ disappear.
C. 3

$$
\begin{equation*}
\Delta t _ { \max } - \Delta t _ { \min } = \frac { 2 G M _ { \mathrm { WD } } } { c ^ { 3 } } \log \left( 4 / \varepsilon ^ { 2 } \right) \tag{1.8 pt}
\end{equation*}
$$

C. 4 Using the expansion, $\cos \varepsilon \simeq 1 - \frac { 1 } { 2 } \varepsilon ^ { 2 }$, one can evaluate

$$
\begin{equation*}
\varepsilon ^ { 2 } \simeq 2 \times ( 1 - \cos \varepsilon ) = 0.00022 \text {. } \tag{S2.26}
\end{equation*}
$$

From the graph the difference in time delays is roughly read out as

$$
\begin{equation*}
\Delta t _ { \max } - \Delta t _ { \min } \approx 50 \mu \mathrm {~s} \tag{S2.27}
\end{equation*}
$$

From these numerical values, $M _ { \mathrm { WD } }$ is solved as

$$
\begin{equation*}
M _ { \mathrm { WD } } = M _ { \odot } \left( \frac { 2 G M _ { \odot } } { c ^ { 3 } } \right) ^ { - 1 } \frac { \Delta t _ { \max } - \Delta t _ { \min } } { \log \left( 4 / \varepsilon ^ { 2 } \right) } \simeq \frac { 50 \mu \mathrm {~s} } { 10 \mu \mathrm {~s} \log ( 4 / 0.00022 ) } M _ { \odot } \simeq 0.5 M _ { \odot } . \tag{S2.28}
\end{equation*}
$$


- Note: The data in this problem roughly correspond to PSR J1614-2230 [see P.B. Demorest et al., Nature 467, 1080-1083 (2010)]. From the Shapiro delay measurement, the White Dwarf mass was estimated as $0.500 \pm 0.006 M _ { \odot }$. With the Keplerian orbital parameters in the binary system, the neutron star mass was considered to be $1.97 \pm 0.04 M _ { \odot }$, which was the heaviest neutron star at that time. Since then, several candidates for heavier neutron stars have been found.
C. 4

$$
\begin{equation*}
M _ { \mathrm { WD } } / M _ { \odot } = 0.5 \tag{0.8 pt}
\end{equation*}
$$

C. 5 For the circular orbit with the radius $R$, the equation of motion is

$$
\begin{equation*}
m R \omega ^ { 2 } = G \frac { m M } { R ^ { 2 } } , \tag{S2.29}
\end{equation*}
$$

if $M$ is sufficiently large. From this it is easy to see

$$
\begin{equation*}
R ^ { 3 } \omega ^ { 2 } = G M = \text { (const.) } \tag{S2.30}
\end{equation*}
$$

This is nothing but Kepler's third law and the relation holds for more general elliptical orbits around the center of mass.
C. 5

$$
\begin{equation*}
p = - \frac { 3 } { 2 } \tag{0.4 pt}
\end{equation*}
$$

C. 6 The sum of the kinetic energy and the potential energy is

$$
\begin{equation*}
E = \frac { 1 } { 2 } m R ^ { 2 } \omega ^ { 2 } - G \frac { m M } { R } . \tag{S2.31}
\end{equation*}
$$

From the equation of motion this is rewritten as

$$
\begin{equation*}
E = - \frac { 1 } { 2 } G \frac { m M } { R } . \tag{S2.32}
\end{equation*}
$$

Therefore, when $E$ decreases due to gravitational wave emission, $R$ should decrease. Then, $\omega$ should increase. Since the amplitude is proportional to $R ^ { 2 } \omega ^ { 2 } \propto R ^ { - 1 }$, it should increase. In summary, both the frequency and the amplitude should increase as time goes on, as illustrated in (b).
C. 6
0.2 pt

The most appropriate profile is (b).


[^0]:    ${ } ^ { 1 }$ Clock-F is in an inertial frame but Clock-II is not. Using Clock-II' in another free-falling frame II' as an inertial reference to Clock-II, the Lorentz transformation is validated for Clock-II' seen from Clock-F.
