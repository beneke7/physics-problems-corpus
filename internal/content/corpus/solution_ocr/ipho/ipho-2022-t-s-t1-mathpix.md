---
id: solution-ocr-ipho-2022-t-s-t1
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2022_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2022-t1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## T1: Permanent magnets

## Part A: Interaction of two magnets.

(A.1) Solution 1.

For all questions, note that spurious rounding (e.g. rounding 2.4kA to 2kA) will incur a penalty of 0.1 points lost per incident. Although such rounding does technically adhere to rules about significant figures, IPhO is not meant to test one's understanding of significant figures. Such rounding is both unreasonable and makes checking solutions much more difficult. Since the distance between the magnets is big as compared to their size, we can approximate each of them as a dipole of magnitude

$$
m = \frac { \pi } { 4 } d ^ { 2 } h J = 0.75 \mathrm { Am } ^ { 2 } .
$$

Since the two dipoles are parallel to each other and to the line connecting them, the interaction energy of one of the magnets with the field of the other magnet is

$$
W = - \vec { B } \cdot \vec { m } = - \frac { \mu _ { 0 } m ^ { 2 } } { 2 \pi L ^ { 3 } } ,
$$

and by taking a derivative we obtain

$$
F _ { 1 } = \frac { \mathrm { d } W } { \mathrm {~d} L } = \frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi L ^ { 4 } } \approx 0.21 \mathrm { mN } .
$$

| a) $m = \frac { \pi } { 4 } d ^ { 2 } h J$ | 0.2 pts |
| :--- | :--- |
| b) $W = - \vec { B } \cdot \vec { m }$ | 0.1 pts |
| c) $F _ { 1 } = \frac { \mathrm { d } W } { \mathrm {~d} L }$ | 0.1 pts |
| d) $F _ { 1 } = \frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi L ^ { 4 } }$ | 0.1 pts |
| Answer: 0.21 mN | 0.1 pts |

Solution 2. The force between the magnets is found by converting one cylinder into a superconducting ring. The current in the ring is $I = \frac { m } { A } = J h$. Consider a small line element $d l$ on the ring with a radial vector joining from the dipole to the line element. The dipole moment is decomposed into radial and tangential component. By rotational symmetry along the co-axis, the force on the ring is $F = B _ { p } I \pi d$, where $B _ { p }$ is the magnetic field component lying in the plane of the ring at its line element. From the given formula of dipole field, $\left| B _ { p } \right| = \frac { \mu _ { 0 } m } { 4 \pi r ^ { 3 } } ( 2 \cos \theta \sin \theta + \sin \theta \cos \theta ) = \frac { 3 \mu _ { 0 } m \sin \theta \cos \theta } { 4 \pi r ^ { 3 } }$. Substituting $\tan \theta = \frac { d } { 2 L }$ with small angle approximation for $\sin \theta \approx \theta$ and $\cos \theta \approx 1$, one gets $F = \frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi L ^ { 4 } }$.

| a) $m = \frac { \pi } { 4 } d ^ { 2 } h J$ | 0.1 pts |
| :--- | :--- |
| b) $I = J h$ | 0.1 pts |
| c) $\left\| B _ { p } \right\| = \frac { 3 \mu _ { 0 } m \sin \theta \cos \theta } { 4 \pi r ^ { 3 } }$ | 0.1 pts |
| d) $F _ { 1 } = \frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi L ^ { 4 } }$ | 0.1 pts |
| e) small angle approx. |  |
| or correct limiting behavior | 0.1 pts |
| Answer: 0.21 mN | 0.1 pts |

![](../../../figures/solution-ocr/2fc48820e142bbc3406c9a7f.jpg)
(A.2) In the case of a homogeneous magnetization, the molecular currents in the bulk of the material cancel out, leaving only a surface current at the surfaces which are not perpendicular to the magnetization vector. Hence, there is a surface current on the side surfaces of the cylinder. As the height of the surface is much smaller than the radius, these currents can be approximated as a ring current $I$; the dipole moment $\pi d ^ { 2 } I / 4$ of the ring current must be equal to the total dipole moment $\pi d ^ { 2 } h J / 4$ of the magnet, hence $I = J h \approx 2.4 \mathrm { k } A$.

| a) current around edge of magnet | 0.1 pts |
| :--- | :--- |
| c) $m = I A$ | 0.1 pts |
| d) $I = J h$ | 0.1 pts |
| Answer: 2.4 kA | 0.1 pts |

Remark: Having established the analogy to an edge current, one could instead find $I$ by evaluating the magnetic field at some point (e.g. far above the current loop) and matching to the given dipole result. Biot-Savart at a point on the ring axis at some distance $z \gg d$ above the loop gives

$$
\begin{equation*}
\mathbf { B } = B \hat { z } = \frac { \mu _ { 0 } } { 4 \pi } \int _ { 0 } ^ { 2 \pi } \frac { I ( d / 2 ) d \theta } { z ^ { 3 } } \frac { d / 2 } { z } \hat { z } = \frac { \mu _ { 0 } I d ^ { 2 } } { 8 z ^ { 3 } } \hat { z } . \tag{1}
\end{equation*}
$$

Matching this to the dipole result from the previous part gives $I = J h$ as above.
(A.3) Since the distance between the magnets is now significantly smaller than their diameter, the force can be approximately found as the force between two straight currents $I$ of length $\pi d$ at distance $L$ :

$$
F _ { 2 } = \frac { \mu _ { 0 } I ^ { 2 } } { 2 \pi L } \pi d = \frac { \mu _ { 0 } I ^ { 2 } d } { 2 L } \approx 14 \mathrm {~N} .
$$


a) Consider as straight currents
b) $B = \frac { \mu _ { 0 } I } { 2 \pi L }$
c) $F _ { 2 } = \pi d I B$
d) $F _ { 2 } = \frac { \mu _ { 0 } I ^ { 2 } d } { 2 L }$

Answer: 14 N
0.3 pts

0.3 pts
0.2 pts
0.1 pts
0.1 pts

(A.4) The chain will most likely break below the topmost magnet because then the magnetic pull between the magnets needs to compensate the largest possible weight. Let the number of magnets be $N + 1$, and the mass of a single magnet $M = \frac { \pi } { 6 } \rho \delta ^ { 3 } \approx 0.5 \mathrm {~g}$; then the weight of the magnets $F = M N g$ is balanced by the magnetic force

$$
F = \frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi \delta ^ { 4 } } \sum _ { n = 1 } ^ { N } \frac { 1 } { n ^ { 4 } } = \frac { \mu _ { 0 } m ^ { 2 } \pi ^ { 3 } } { 60 \delta ^ { 4 } } ,
$$

where $m = \frac { \pi } { 6 } J \delta ^ { 3 } \approx 78 \mathrm { mAm } ^ { 2 }$ and we have assumed that $N \gg 1$ so that we can assume in the sum $N = \infty$. From the force balance we obtain

$$
N = \frac { \mu _ { 0 } m ^ { 2 } \pi ^ { 3 } } { 60 M g \delta ^ { 4 } } \approx 1320
$$

hence, the total length of the chain is $N \delta = 6.6 \mathrm {~m}$. Note that $N = 1320$ is indeed much bigger than 1.

a) It will break at the top
b) $M = \frac { \pi } { 6 } \rho \delta ^ { 3 }$
c) $F = M N g$
d) $F = \frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi \delta ^ { 4 } } \sum _ { n = 1 } ^ { N } \frac { 1 } { n ^ { 4 } }$
e) $m = \frac { \pi } { 6 } J \delta ^ { 3 }$
f) $l = \frac { \mu _ { 0 } m ^ { 2 } \pi ^ { 3 } } { 60 M g \delta ^ { 3 } }$

Answer: 6.6 m
0.1 pts
0.1 pts
0.2 pts
0.2 pts
0.2 pts
0.1 pts
0.1 pts

Remark: if the sum is substituted with a finite sum as an approximation, with two or three terms in it, full marks are given. If only one term is kept, subtract 0.1 from d) or f). Remark 2: It's possible to get a range of final answers depending on the approximations used for $g$, mass, magnetic moment, etc. Answers that round to 1300 balls should definitely not be penalized, which corresponds to a distance range of 6.25-6.75m. 1260 balls (6.3m) is what you get with $\mathrm { g } = 10$ and mass $= 0.5 \mathrm {~g} ; 1320$ balls (6.6m) is what you get with $\mathrm { g } = 9.8$ and a mass of 0.49g (or, with-

a) Idea of magnetic charges
b) $q = m / \delta$
c) $B = \frac { \mu _ { 0 } q } { 4 \pi r ^ { 2 } }$
d) $B = \frac { J \mu _ { 0 } \delta ^ { 2 } } { 24 r ^ { 2 } }$

0.4 pts

0.4 pts
0.4 pts

0.3 pts

The same scheme applies for solutions which work with electrical charges, with a proportionality constant relating that field to the magnetic field of magnetic dipoles. Then, the sub-score a) is given for the idea of calculating the field of electrical dipoles (0.2 pts), with a correct proportionality factor between the two fields, $k = B / E =$ $\mu _ { 0 } \varepsilon _ { 0 } = c ^ { - 2 }$ (0.2 pts).

Solution 2. It is clear that from distances larger than the diameter of a magnet, the shape of the magnets doesn't matter; what matters is only the total dipole moment as this is what defines the magnitude of the field at large distances. So, we can substitute the balls with cylinders of equal volume. Now, let us require the height of these cylinders to be $\delta$; then the neighbouring cylinders in the chain will be touching each other. As a result, instead of the chain of balls, we have a long homogeneous cylinder. Equal volume means that the crosssectional area of these cylinders $A = \frac { \pi } { 6 } \delta ^ { 2 }$. We know from task A. 2 that such a cylinder can be considered as a long solenoid carrying surface density of bound currents equal to $J$. So, the magnetic field inside it $B _ { 0 } = \mu _ { 0 } J$, and therefore, it carries magnetic flux $\Phi = B _ { 0 } A = \frac { \pi } { 6 } \delta ^ { 2 } \mu _ { 0 } J$. We know that inside the solenoid, magnetic field is constant, and outside, the field is zero. However, this is valid only until the endpoints of the solenoid are far. All that flux is released near each of the endpoints of the solenoid. The released flux needs to satisfy the Maxwell equations: the $B$-field needs to have no sources and be potential. We know that the only solution in such a case is a central isotropic field $\vec { B } = f ( r ) \hat { r }$, where $r$ denotes the distance from the endpoint and $\hat { r }$ - the corresponding unit vector. From the Gauss law we conclude that $4 \pi r ^ { 2 } f ( r ) = { } ^ { \prime } \Phi = \frac { \pi } { 6 } \delta ^ { 2 } \mu _ { 0 } J$, hence $B = \frac { J \mu _ { 0 } \delta ^ { 2 } } { 24 r ^ { 2 } }$.

a) Idea of substituting spheres with cylinders
b) $A = \frac { \pi } { 6 } \delta ^ { 2 }$
c) $\Phi = \frac { \pi } { 6 } \delta ^ { 2 } \mu _ { 0 } J$
d) $B = \Phi / 4 \pi r ^ { 2 }$
e) $B = \frac { J \mu _ { 0 } \delta ^ { 2 } } { 24 r ^ { 2 } }$

0.4 pts
0.2 pts
0.4 pts
0.4 pts
0.1 pts out rounding the mass and magnetic moment and cancelling out the volume).

Remark: for part a, give only 0.1 points if students make
(A.5) Solution 1. Each of the balls creates magnetic field the cylinder replacement but then fail to make any real of a dipole $m$; the magnetic dipole creates the same field progress using it. wich would be created by two magnetic charges, equal

Solution 3. This solution follows the solution 2 up to by modulus to $q$ and of opposite sign, at a distance $s =$ the point where we have a solenoid with surface cur- $m / q$, assuming that this distance $s$ is much smaller than rent density $J$. After that we observe that at any point the distance from the dipole to the observation point. in space, the axial component of the magnetic field is Here it is convenient to select $s = \delta$ (hence $q = m / \delta$ ) because in that case almost all the positive and negative magnetic charges overlap and cancel out each other.

$$
B = \mu _ { 0 } J \frac { \Omega } { 4 \pi } ,
$$

The only ones which will not cancel out are the magnetic charges at the chain's endpoints. One of these charges is
where $\Omega$ denotes the solid angle under which we can very far so that the field at $P$ is the field of a magnetic see the interior surface of the solenoid, minus the solid charge at $O$ : angle under which we can see the outer surface. This can be derived easily from the Biot-Savart law: $\mathrm { d } B _ { z } =$

$$
B = \frac { \mu _ { 0 } q } { 4 \pi r ^ { 2 } } = \frac { \mu _ { 0 } m } { 4 \pi \delta r ^ { 2 } } = \frac { J \mu _ { 0 } \delta ^ { 2 } } { 24 r ^ { 2 } } .
$$

$\frac { \mu _ { 0 } } { 4 \pi r ^ { 2 } } j \mathrm {~d} z \mathrm {~d} \vec { l } \times \hat { r } \cdot \hat { z }$, where hats denotes unit vectors, $\mathrm { d } \vec { l }$ -an infinitesimal vector parallel to the surface current,


and $\vec { r }$ - a vector pointing from the observation point to a point on the solenoid. This can be rewritten as $\mathrm { d } B _ { z } = \frac { \mu _ { 0 } } { 4 \pi r ^ { 2 } } j \mathrm {~d} \vec { z } \times \mathrm { d } \vec { l } \cdot \hat { r } = \frac { \mu _ { 0 } } { 4 \pi r ^ { 2 } } J \mathrm {~d} \vec { A } \cdot \hat { r }$, where $\mathrm { d } \vec { A }$ denotes the area of a surface element on the solenoid. To complete our proof, it suffices to notice that $\overrightarrow { \mathrm { d } } A \cdot \hat { r }$ is the apparent area of the surface element, $\mathrm { d } \Omega = \overrightarrow { \mathrm { d } } A \cdot \hat { r } / r ^ { 2 }$.

Now, at the point $P$, the outside and inside contributions to $\Omega$ cancel out everywhere except for the circular opening of the solenoid. Thus, $\Omega = A \cos \theta / r ^ { 2 }$ so that $B _ { z } = \frac { J \mu _ { 0 } \delta ^ { 2 } } { 24 r ^ { 2 } } \cos \theta$. Finally, we can use the Gauss law to obtain expression for the radial component $B _ { R }$ (with $R$ denoting the radius in cylindrical coordinates) of the magnetic field. Someone not familiar with vector calculus can calculate the magnetic flux $\Phi _ { c }$ through a circle of radius $R _ { 0 } = r \sin \theta$. Then, the cylindrical coordinate $R = z \tan \theta ^ { \prime }$ so that $\mathrm { d } R = z \cos ^ { - 2 } \theta ^ { \prime } \mathrm { d } \theta ^ { \prime }$, and $\frac { 1 } { r ^ { 2 } } = \cos ^ { 2 } \theta ^ { \prime } / z ^ { 2 }$. Therefore $\Phi _ { c } = \int 2 \pi R B _ { z } \mathrm {~d} R =$ $\frac { \pi J \mu _ { 0 } \delta ^ { 2 } } { 12 } \cos \theta ^ { \prime } \mathrm { d } \theta ^ { \prime } = \frac { \pi J \mu _ { 0 } \delta ^ { 2 } } { 12 } \sin \theta$. We can see that this depends only the spherical coordinate $\theta$; by considering conical frusta with circular faces having the same polar angle $\theta$ we can easily conclude that the magnetic field must be radial, i.e. $B = B _ { z } / \cos \theta = \frac { J \mu _ { 0 } \delta ^ { 2 } } { 24 r ^ { 2 } }$.

a) Idea of substituting spheres with cylinders
b) $A = \frac { \pi } { 6 } \delta ^ { 2 }$
c) $B _ { z } = \frac { J \mu _ { 0 } \delta ^ { 2 } } { 24 r ^ { 2 } } \cos \theta$
d) $B = B _ { z } / \cos \theta$
e) $B = \frac { J \mu _ { 0 } \delta ^ { 2 } } { 24 r ^ { 2 } }$

Solution 4. Finally, the solution could be obtained theoretically also by summing over all the fields of individual magnets. However, this is mathematically very demanding, therefore full solution is not provided here. The first steps are as follows. (i) Writing the contribution $B _ { s z }$ and $B _ { s R }$ of a single magnet at distance $z$ from the point $O$ to the axial and radial (in cylindrical coordinates) components of the magnetic field; (ii) going from summation of individual contributions to integration by assuming linear density of dipoles $\rho _ { m } = m / \delta$ so that $\mathrm { d } m = m \mathrm {~d} z / \delta$; performing integration over $z$ to find the field components.
The mathematical derivation: A dipole at position $z$ $d m = \frac { m } { \delta } d z$ generates a magnetic field (in Cartesian coordinates):

$$
\begin{aligned}
& d B _ { z } = d B _ { r ^ { \prime } } \cos \theta - d B _ { \theta ^ { \prime } } \sin \theta = \frac { \mu _ { 0 } d m } { 4 \pi r ^ { \prime 3 } } \left( 2 - 3 \sin ^ { 2 } \theta ^ { \prime } \right) \\
& d B _ { R } = d B _ { r ^ { \prime } } \sin \theta + d B _ { \theta ^ { \prime } } \cos \theta = \frac { 3 \mu _ { 0 } d m } { 4 \pi r ^ { \prime 3 } } \sin \theta ^ { \prime } \cos \theta ^ { \prime }
\end{aligned}
$$

Where $r ^ { \prime } = \sqrt { r ^ { 2 } + z ^ { 2 } - 2 r z \cos \theta }$ and $\sin \theta ^ { \prime } = \frac { r } { r ^ { \prime } } \sin \theta$ are coordinates relative to the dipole $d m$. In order to simplify the integration, do substitution: $u = \frac { z - r \cos \theta } { r \sin \theta }$, then $r ^ { \prime } = r \sin \theta \sqrt { u ^ { 2 } + 1 } ; d z = r \sin \theta d u$. Integration for $B _ { z }$ :

$$
\begin{aligned}
B _ { z } & = \int d B _ { z } = \frac { \mu _ { 0 } m } { 4 \pi \delta } \int _ { 0 } ^ { \infty } d z \frac { 1 } { r ^ { \prime 3 } } \left( 2 - \frac { 3 r ^ { 2 } \sin ^ { 2 } \theta } { r ^ { \prime 2 } } \right) \\
& = \frac { \mu _ { 0 } m } { 4 \pi \delta r ^ { 2 } \sin ^ { 2 } \theta } \int _ { - \cot \theta } ^ { \infty } d u \left[ 2 \left( u ^ { 2 } + 1 \right) ^ { - 3 / 2 } - 3 \left( u ^ { 2 } + 1 \right) ^ { - 5 / 2 } \right] \\
& = \frac { \mu _ { 0 } m } { 4 \pi \delta r ^ { 2 } \sin ^ { 2 } \theta } \left[ \frac { 2 u } { \sqrt { u ^ { 2 } + 1 } } - \frac { 2 u ^ { 3 } + 3 u } { \left( u ^ { 2 } + 1 \right) ^ { 3 / 2 } } \right] _ { - \cot \theta } ^ { \infty } \\
& = - \frac { \mu _ { 0 } m \cos \theta } { 4 \pi \delta r ^ { 2 } }
\end{aligned}
$$

Integration for $B _ { R }$ :

$$
\begin{aligned}
B _ { R } = & \int d B _ { R } \\
= & \frac { 3 \mu _ { 0 } m } { 4 \pi \delta } \left( \int _ { 0 } ^ { r \cos \theta } d z \frac { 1 } { r ^ { \prime 3 } } \cdot \frac { r } { r ^ { \prime } } \sin \theta \sqrt { 1 - \frac { r ^ { 2 } } { r ^ { \prime 2 } } \sin ^ { 2 } \theta } \right. \\
& \left. - \int _ { r \cos \theta } ^ { \infty } d z \frac { 1 } { r ^ { \prime 3 } } \cdot \frac { r } { r ^ { \prime } } \sin \theta \sqrt { 1 - \frac { r ^ { 2 } } { r ^ { \prime 2 } } \sin ^ { 2 } \theta } \right) \\
= & - \frac { 3 \mu _ { 0 } m } { 4 \pi \delta r ^ { 2 } \sin ^ { 2 } \theta } \int _ { \cot \theta } ^ { \infty } \frac { u d u } { \left( u ^ { 2 } + 1 \right) ^ { 5 / 2 } } \\
= & - \frac { 3 \mu _ { 0 } m } { 8 \pi \delta r ^ { 2 } \sin ^ { 2 } \theta } \int _ { \cot ^ { 2 } \theta } ^ { \infty } d v ( v + 1 ) ^ { - 5 / 2 } \quad \left( v = u ^ { 2 } \right) \\
= & - \frac { \mu _ { 0 } m \sin \theta } { 4 \pi \delta r ^ { 2 } }
\end{aligned}
$$

0.2 pts
b) writing correctly $B _ { R z }$
0.2 pts
c) $\mathrm { d } m = m \mathrm {~d} z / \delta$
0.2 pts
c) $B _ { z } = \frac { J \mu _ { 0 } \delta ^ { 2 } } { 24 r ^ { 2 } } \cos \theta$
0.4 pts
d) $B _ { R } = \frac { J \mu _ { 0 } \delta ^ { 2 } } { 24 r ^ { 2 } } \sin \theta$
0.4 pts
e) $B = \frac { J \mu _ { 0 } \delta ^ { 2 } } { 24 r ^ { 2 } }$
0.1 pts

Remarks: for c) and d), a partial credit of 0.1 pts can be given for each of these integrals if the initial integral is written correctly, but the calculation of the integral is not performed or there are many mistakes. If only few mistakes were made, subtract 0.1 for each mistake made. If initial integral is written incorrectly, no points are given. Points for e) are given only if the final answer is completely correct.
Another remark: in the integration of $B _ { R }$, if the change of sign (of the cosine) is ignored, the correct answer could still be obtained (because the extra parts cancel out), but the derivation would technically be wrong.

Solution 5. It's possible to perform the direct integration of the previous solution more easily using angular variables in place of $z$. Let $s = r \sin \theta$ be the distance of closest approach of the line to $P$ for convenience and $\phi$ be the angle from a point on the line to $P$ (such that $\phi = \theta$ at the end near $P , \phi \approx \pi$ at the other end). Then the additional magnetic field from a small component given by $d \phi$ is

$$
\begin{aligned}
d \mathbf { B } = & \frac { \mu _ { 0 } \sin ^ { 3 } \phi } { 4 \pi s ^ { 3 } } \left( 2 d \mathbf { m } _ { \| } - d \mathbf { m } _ { \perp } \right) \\
= & \frac { \mu _ { 0 } \sin ^ { 3 } \phi } { 4 \pi s ^ { 3 } } d m \times \\
& ( 2 \cos \phi ( \cos \phi \hat { z } - \sin \phi \hat { r } ) - \sin \phi ( \sin \phi \hat { z } + \cos \phi \hat { r } ) ) \\
= & \frac { \mu _ { 0 } \sin ^ { 3 } \phi } { 4 \pi s ^ { 3 } } \frac { d m } { d z } d z \left( \left( 3 \cos ^ { 2 } \phi - 1 \right) \hat { z } - \cos \phi \sin \phi \hat { r } \right)
\end{aligned}
$$


Since $s = - z \tan \phi$ and $d m = m d z / \delta$, we have $d m / d \phi =$ $s m / \left( \delta \sin ^ { 2 } \phi \right)$. Then

$$
d \mathbf { B } = \frac { \mu _ { 0 } m } { 4 \pi s ^ { 2 } \delta } \left( \left( 3 \cos ^ { 2 } \phi - 1 \right) \hat { z } \sin \phi d \phi - \sin ^ { 2 } \phi \hat { r } \cos \phi d \phi \right)
$$

and thus

$$
\begin{aligned}
\mathbf { B } & = \frac { \mu _ { 0 } m } { 4 \pi s ^ { 2 } \delta } \int _ { \phi = \theta } ^ { \phi = \pi } \left( - \left( 3 \cos ^ { 2 } \phi - 1 \right) \hat { z } d \cos \phi - \sin ^ { 2 } \phi \hat { r } d \sin \phi \right) \\
& = - \frac { \mu _ { 0 } m } { 4 \pi s ^ { 2 } \delta } \left( \cos ^ { 3 } \phi - \left. \cos \phi \right| _ { \phi = \theta } ^ { \pi } \hat { z } + \left. \sin ^ { 3 } \phi \right| _ { \phi = \theta } ^ { \pi } \hat { r } \right) \\
& = \frac { \mu _ { 0 } m } { 4 \pi s ^ { 2 } \delta } \left( - \cos \theta \sin ^ { 2 } \theta \hat { z } + \sin ^ { 3 } \theta \hat { r } \right)
\end{aligned}
$$

Putting back in our expression for $s$, we have

$$
\begin{equation*}
\mathbf { B } = \frac { \mu _ { 0 } m } { 4 \pi r ^ { 2 } \delta } ( - \cos \theta \hat { z } + \sin \theta \hat { r } ) \tag{2}
\end{equation*}
$$

which is the desired result.

a) writing correctly $d \mathbf { B } / d \phi \quad 0.5$ pts
b) $d m / d \phi = s m / \left( \delta \sin ^ { 2 } \phi \right) \quad 0.2$ pts
c) $\left| B _ { z } \right| = \mu _ { 0 } m / \left( 4 \pi r ^ { 2 } \delta \right) \quad 0.4$ pts
d) $\hat { B } = - \cos \theta \hat { z } + \sin \theta \hat { r } \quad 0.4$ pts

Remark: for d, note that the coordinate system wasn't specified in the problem, so check what the student is using; the point is to get the "radially outward" (or inward) idea.

## Part B: Interaction of magnets with ferromagnetic materials.

(B.1) Due to the boundary condition at the surface of the ferromagnet, the field lines must enter the plates almost perpendicularly. Indeed, as it follows from the Ampère's circutal law, the tangential component of $\vec { B } / \mu$ is continuous at the surface of a ferromagnet; similarly, the Gauss law for the magnetic field implies that the normal component of the $B$-field is continuous. From these two facts, one can derive the "refraction law" for the field lines, $\tan \alpha = \mu \tan \beta$, where $\alpha$ and $\beta$ are the angles between the tangents of a field line and the surface normal, inside and outside of the ferromagnetic, respectively. From the fact that $\mu \gg 1$ we can deduce that as long as $\alpha$ is not small, $\beta \approx 0$. Those field lines which enter the plate must exit it somewhere, this happens somewhere farther away from the magnet, see the sketch below.
![](../../../figures/solution-ocr/36b958e436efcb8be68eff43.jpg)

a) Field line 1 correct
b) Field line 2 correct
c) Field line 3 correct

0.2 pts
0.4 pts
0.4 pts

Remarks:
i) Subtract 0.1 both from b) and c) if the field line does not enter the plate perpendicularly;
ii) Subtract 0.1 both from b) and c) if the field line does not refract correctly;
iii) Subtract 0.1 from (b) if its segment rightwards of the magnet is not shown (note that in the student answer sheet, the magnet is to the right of the plate, not on top of it as shown in the solution);
iv) Subtract 0.1 both from a) and c) if the field line does not form a closed loop;
v) Subtract 0.1 from a) if the line touches or enters the plate; 0.1 from b) if the line exits the plate; 0.1 from c) if the line reaches the other side of the plate.
(B.2) The problem can be solved by introducing an image magnet-a mirror reflection of the real magnet with respect to the surface of the plate, with the dipole moment being both reflected and flipped. With this image magnet, the boundary condition above the plate is satisfied: the field lines enter the plate perpendicularly. Hence, the force and torque exerted to the real magnet are equal to the force and torque exerted by the image magnet. The equilibrium is achieved when the dipole is parallel to the field created by the image magnet which is the case when the dipole moment is perpendicular to the plate. Hence, leftmost boxes of the first and second row need to be marked with a tick. The force is almost the same as what was already found in part A(d), with the only difference that now there is only the first term in the sum:

$$
F = \frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi \delta ^ { 4 } } = 5.9 \mathrm {~N} .
$$

a) Idea of magnetic image (even if $\vec { J }$ not flipped)
b) Correct direction of the image $\vec { J }$
c) $F = \frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi \delta ^ { 4 } }$
d) $F = 5.9 \mathrm {~N}$
e) each correct tick
f) each incorrect tick

0.3 pts
0.2 pts
0.2 pts
0.1 pts
0.1 pts
-0.1 pts

Remark: if e) + f) adds up to a negative number, replace the total score for those two parts by 0.
(B.3) Solution 1. As explained above, the magnetic field lines are perpendicular to the surface of the ferromagnetic plate. Since the gap is narrow as compared to its width, the field lines are inside the gap almost straight. Due to the Ampère's circulation theorem it also means that the field in the gap is homogeneous. Due to the Ampère's circulation theorem, field outside the gap vanishes as the gap's width tends to 0, so in the limit all flux through the permanent magnet wraps around through the gap; see the sketch of magnetic field lines. Now, let us recall that the disc magnet is equivalent to a surface current of density $J$ along the curved surface of the disc. Hence we can write the circulation theorem along the loop defined by one of the field lines shown in the figure:

$$
I = \oint \vec { H } \cdot \mathrm {~d} \vec { r } \approx \left( B _ { 1 } + B _ { 2 } \right) h / \mu _ { 0 } ,
$$

where $B _ { 1 }$ and $B _ { 2 }$ denote the flux density inside the permanent magnet and outside the magnet (but still inside the slit), respectively. Here we have neglected the contribution of the magnetic field inside the ferromagnetic


plate to the integral because $\mu$ is very big. Due to the Gauss law, $\frac { \pi } { 4 } d ^ { 2 } B _ { 1 } = \frac { \pi } { 4 } \left( D ^ { 2 } - d ^ { 2 } \right) B _ { 2 }$; with $D = 2 d$ this yields $B _ { 1 } = 3 B _ { 2 }$. Thus, $B _ { 2 } = I \mu _ { 0 } / 4 h = J \mu _ { 0 } / 4 = 0.375 \mathrm {~T}$ and $B _ { 1 } = 1.125 \mathrm {~T}$. In order to find the force exerted to one of the ferromagnetic plates, we can notice that the force does not depend on what is creating the magnetic field and, hence, we can substitute the disc magnet with the current $I$ in a superconducting ring. Next we apply the virtual displacement method and increase the distance between the plates by $\mathrm { d } x$. In the case of a superconducting ring, the magnetic flux through the ring is conserved, and therefore, the magnetic field strength inside the gap will remain unchanged during the virtual displacement. With all this information we are ready to calculate the change of the magnetic field energy. The magnetic field energy inside the ferromagnet can be neglected because its density is ca $\mu$ times smaller than inside the gap. So, the energy is changed only because the volume of the gap is changed:

$$
\mathrm { d } W = \frac { \pi } { 8 \mu _ { 0 } } \left[ d ^ { 2 } B _ { 1 } ^ { 2 } + \left( D ^ { 2 } - d ^ { 2 } \right) B _ { 2 } ^ { 2 } \right] \mathrm { d } x = \left( \frac { 3 \pi } { 2 \mu _ { 0 } } B _ { 2 } ^ { 2 } d ^ { 2 } \right) \mathrm { d } x
$$

which means that the force

$$
F = \frac { \mathrm { d } W } { \mathrm {~d} x } = \frac { 3 \pi } { 2 \mu _ { 0 } } B _ { 2 } ^ { 2 } d ^ { 2 } = \frac { 3 \pi } { 32 } J ^ { 2 } \mu _ { 0 } d ^ { 2 } \approx 210 \mathrm {~N} .
$$

a) $\vec { B }$ in the slit is homogeneous
b) $\vec { B }$ in the permanent magnet is homog.
c) $\vec { B }$ in slit and in perm. magn. is normal
e) $I = \left( B _ { 1 } + B _ { 2 } \right) h / \mu _ { 0 }$
f) $\frac { \pi } { 4 } d ^ { 2 } B _ { 1 } = \frac { \pi } { 4 } \left( D ^ { 2 } - d ^ { 2 } \right) B _ { 2 }$
g) $B _ { 2 } = I \mu _ { 0 } / 4 h$
h) $B _ { 1 } = 3 I \mu _ { 0 } / 4 h$
i) $\mathrm { d } W = \frac { \pi } { 8 \mu _ { 0 } } \left[ d ^ { 2 } B _ { 1 } ^ { 2 } + \left( D ^ { 2 } - d ^ { 2 } \right) B _ { 2 } ^ { 2 } \right] \mathrm { d } x$
j) $F = \frac { \mathrm { d } W } { \mathrm {~d} x }$
k) $\frac { 3 \pi } { 32 } J ^ { 2 } \mu _ { 0 } d ^ { 2 }$
l) $F \approx 210 \mathrm {~N}$.

manent magnet in the magnetic field, '

$$
W _ { m } = - m B _ { 1 } = - \frac { \pi } { 4 } d ^ { 2 } I \cdot \frac { 3 I \mu _ { 0 } } { 4 h } = - 2 W _ { f } ,
$$

hence the total energy $W = - W _ { f }$. Now we can find force as $F = - \frac { \mathrm { d } W } { \mathrm {~d} h } = \frac { \mathrm { d } W _ { f } } { \mathrm {~d} h }$, yielding the same result as before. Notice that if we didn't take into account the energy of the dipole then we would have obtained the correct answer by modulus, but with a wrong sign - we would have had repulsion instead of attraction of the plates.

a) $\vec { B }$ in the slit is homogeneous
b) $\vec { B }$ in the permanent magnet is homog.
c) $\vec { B }$ in slit and in perm. magn. is normal
e) $I = \left( B _ { 1 } + B _ { 2 } \right) h / \mu _ { 0 }$
f) $\frac { \pi } { 4 } d ^ { 2 } B _ { 1 } = \frac { \pi } { 4 } \left( D ^ { 2 } - d ^ { 2 } \right) B _ { 2 }$
g) $B _ { 2 } = I \mu _ { 0 } / 4 h$
h) $B _ { 1 } = 3 I \mu _ { 0 } / 4 h$
i) $W _ { f } = \frac { \pi } { 8 \mu _ { 0 } } \left[ d ^ { 2 } B _ { 1 } ^ { 2 } + \left( D ^ { 2 } - d ^ { 2 } \right) B _ { 2 } ^ { 2 } \right] h$
j) $W _ { m } = - W _ { f }$
k) $F = \frac { \mathrm { d } W } { \mathrm {~d} h }$
l) $\frac { 3 \pi } { 32 } J ^ { 2 } \mu _ { 0 } d ^ { 2 }$
m) $F \approx 210 \mathrm {~N}$.

0.2 pts

0.2 pts
0.1 pts
0.1 pts
0.1 pts
0.1 pts
0.1 pts
0.1 pts
0.2 pts
0.1 pts
0.1 pts
0.1 pts

![](../../../figures/solution-ocr/850f3eaafe38ca503e09ce12.jpg)

Solution 2. The second solution follows mostly the first one, and deviates only after the fields $B _ { 1 }$ and $B _ { 2 }$ have been found. Now we do not introduce the fictitious superconducting loop, and instead calculate carefully all the changes to the magnetic field energy during virtual displacements. Now the current around the perimeter of Remark: those who do not take into account the energy of the dipole will be given zero points for j), k), l), and m).

Solution 3. There is a more intuitive way of finding the field distribution. Using carefully the analogy between electric and magnetic dipole fields, one could convert the problem into a permanent electric polarization inserted between two conducting plates. From similarities among Maxwell equations, it could be observed that $E \approx B , D \approx H$ and $P \approx M$, with some prefactors involving permeabilities and permittivities. Consider putting the smaller capacitor inside the conductor plates, the charge would induce opposite charge that makes field lines perpendicular to the conductor. In addition, there should not be net charge on the metal plates upon insertion of the smaller cylinder. Hence, there is again an uniform charge density of opposite charge on the metal plate spreading over the larger region. Effectively, for $E$ field, it is equivalent to spreading the original charge on smaller plate onto the larger plate. Because the radii has ratio of $2 , E = \frac { Q } { 4 S _ { 0 } \epsilon _ { 0 } } , D _ { 2 } = \frac { Q } { 4 S _ { 0 } }$, and $D _ { 1 } = \frac { Q } { S _ { 0 } } ( 1 - 1 / 4 ) =$ $3 D _ { 2 }$. This agrees with $B _ { 2 } , B _ { 1 }$ in previous solutions. The rest easily follows. (There are confusions about $B$ or $H$ but most are due to the definition of polarization charge or current being considered free or not, a self-consistent derivation would be sufficient.The close-to-centre part of the field of electric and magnetic dipole is opposite and one should be careful about this effect inside polarisation when utilizing the analogy.) the permanent magnet is fixed to $I$ as its magnetisation is assumed to be constant. We can still use the previous expressions for the magnetic field energy if we consider the distance $h$ between the plates to be a variable:

$$
W _ { f } = \frac { \pi d ^ { 2 } h } { 8 \mu _ { 0 } } \left[ B _ { 1 } ^ { 2 } + 3 B _ { 2 } ^ { 2 } \right] , B _ { 1 } = 3 B _ { 2 } = \frac { 3 I \mu _ { 0 } } { 4 h } \Rightarrow W _ { f } = \frac { 3 \mu _ { 0 } \pi d ^ { 2 } I ^ { 2 } } { 32 h } .
$$

In addition to the change of the magnetic field energy, we also need to take into account the energy of the per-


a) correct analogy arguments
b) correct charge distributions
c) E is uniform
e) correct D expressions
f) correct conversion factor
g) $B _ { 2 } = I \mu _ { 0 } / 4 h$
h) $B _ { 1 } = 3 I \mu _ { 0 } / 4 h$
i) $W _ { f } = \frac { \pi } { 8 \mu _ { 0 } } \left[ d ^ { 2 } B _ { 1 } ^ { 2 } + \left( D ^ { 2 } - d ^ { 2 } \right) B _ { 2 } ^ { 2 } \right] h$
j) $W _ { m } = - W _ { f }$
k) $F = \frac { \mathrm { d } W } { \mathrm {~d} h }$
l) $\frac { 3 \pi } { 32 } J ^ { 2 } \mu _ { 0 } d ^ { 2 }$
m) $F \approx 210 \mathrm {~N}$.

0.2 pts
0.2 pts
0.1 pts
0.1 pts
0.1 pts
0.1 pts
0.1 pts
0.1 pts
0.2 pts
0.1 pts
0.1 pts
0.1 pts
![](../../../figures/solution-ocr/f7fc5d50aa898b2c4b97a740.jpg)

Solution 4. (Incorrect) A solution that has been submitted by a few students uses an infinite number of images of the permanent magnet. This forms an infinite rod, which they assume gives the same magnetic field as a normal magnetised rod would, 0 everywhere outside it. However, since the plates are finite, the magnetic field outside would actually be non-zero, and would need to be calculated according to Solution 1. In this case, only marks corresponding to a), b) and c) in the scheme of Solution 1 should be awarded, i.e. 0.5 marks. If someone doesn't assume the field outside to be 0 , give marks for the subsequent calculations according to solution 1. always pointing in the direction of $\hat { x }$ which ensures the rotational stability of the magnet. Attraction force between two neighbouring rows is contributed only by the vertical nearest-neighbour pairs of balls, so we can just calculate only the interaction force between two such magnets. If two such balls were to be at distance $y$, the interaction energy would be $W = \pm \frac { \mu _ { 0 } m ^ { 2 } } { 4 \pi y ^ { 3 } }$ so that the $y$ directional force $F _ { y } = \frac { \mathrm { d } W } { \mathrm {~d} y } = \mp \frac { 3 \mu _ { 0 } m ^ { 2 } } { 4 \pi y ^ { 4 } }$. This means that the two balls attract if they are antiparallel and repel otherwise. This brings us to the conclusion that the order must be antiferromagnetic, shown below in the sketch.
![](../../../figures/solution-ocr/765d8d93ee49232076b863a1.jpg)

The work needed to pull out one of the magnets is easily found as its interaction energy with the four nearest neighbours, with minus sign, i.e. $W = \vec { B } \cdot \vec { m }$, where $\vec { B } = 2 \vec { B } _ { 1 } + 2 \vec { B } _ { 2 } = \frac { 3 \mu _ { 0 } m } { 2 \pi \delta ^ { 3 } } \hat { x }$ so that $W = \frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi \delta ^ { 3 } } = 29 \mathrm {~mJ}$.

a) Fig: left and right parallel magnets attract
b) Fig: top and bottom antipar. magn. attract
c) $\vec { B }$ from the 4 neighbours $\| \vec { m } \Rightarrow$ no torque
d) correctly marked 12 arrows
e) antiferromagnetic
f) $W = \vec { B } \cdot \vec { m }$
g) $W = \frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi \delta ^ { 3 } }$
h) $W = 29 m J$

0.1 pts
0.1 pts
0.1 pts
0.1 pts
0.1 pts
0.1 pts
0.1 pts
0.1 pts

## Part C: Model of ferromagnetic and antiferromagnetic materials.

Remarks: no marks for d) if any of the magnets has a wrong direction or has no arrow. No marks for e) if the score for d) is zero.
(C.1) Solution 1, Since the task is about finding only one

Solution 2, It appears that there is another stable con- configuration of dipoles, we can just try looking for configuration, see figure below figurations satisfying the requirements. The simplest approach is to start construction with the chain of magnets described in part A.4: if all the dipoles are directed parallel to each other and parallel to the chain, the system is obviously in equilibrium. Now, two such chains can be parallel to each other, and they can be also antiparallel. In both cases, each of the balls is in a stable equilibrium in terms of rotations. Indeed, each of the balls from the left and from the right contribute the field $\vec { B } _ { 1 } = \hat { x } \frac { \mu _ { 0 } m } { 2 \pi \delta ^ { 3 } }$, while each of the balls from above and below contribute $\vec { B } _ { 2 } = \pm \frac { 1 } { 2 } \vec { B } _ { 1 }$, where $\hat { x }$ denotes a horizontal unit vector; '+' corresponds to antiparallel rows, and '-' - to parallel rows. Since $B _ { 2 } < B _ { 1 }$, the sum of the four contributions is


![](../../../figures/solution-ocr/667ca50676c6928a392cbebc.jpg)

In order to show that this configuration is stable, too, let us find the direction of the magnetic field at the position of one of the balls, the ball marked with A in the figure, due to its four neighbours. Using the formula for the magnetic field of a dipole, we can see that the balls B and D create both field $b ( \hat { x } + 2 \hat { y } )$, where $\hat { x }$ and $\hat { y }$ are horizontal and vertical unit vectors. Meanwhile, both C and E create field $b ( 2 \hat { x } + \hat { y } )$ so that the total field is $6 b ( \hat { x } + \hat { y } )$; this is parallel to the dipole moment of the ball A which means that no torque is exerted on it. What is left to do is to calculate the interaction force between two neighbouring balls, e.g. A and B. One way to do it is to decompose the both dipoles into vertical and horizontal components: $\vec { m } _ { A } = m _ { 0 } \left( \hat { x } + \hat { y } \right.$ and $\vec { m } _ { B } = m _ { 0 } ( - \hat { x } + \hat { y }$, where $m _ { 0 } = m / \sqrt { 2 }$. One can easily see that the pair of dipoles $m _ { 0 } \hat { x }$ and $- m _ { 0 } \hat { x }$ attract, and the same applies to the pair $m _ { 0 } \hat { y }$ and $- m _ { 0 } \hat { y }$. It is also easy to see that there is no horizontal component for the interaction force between the remaining pairs, $m _ { 0 } \hat { x }$ with $m _ { 0 } \hat { y }$ and $m _ { 0 } \hat { y }$ and $- m _ { 0 } \hat { x }$. A little more efforts are needed to see that the horizontal component of the interaction force is also zero. To that end one can calculate first the torque $T _ { A B }$ exerted by dipole A to B with respect to the centre of the ball B, and the torque $T _ { B A }$ exerted by B to A with respect to the centre of the ball A; one can easily see from symmetry that $T _ { A B } = - T _ { B A }$. Due to Newton's third law, with respect to the centre of the ball A, the sum of torques exerted by B to A and by A to B must be zero; it can be expressed as $T _ { A B } + T _ { B A } + F _ { x } \delta = 0$, where $F _ { x }$ denotes the horizontal component of the force exerted by A to B. From this equality we can conclude that $F _ { x } = 0$. So we found that each of the neighbouring balls attract each other, hence the whole configuration is stable.

a) Showing: neighbouring magnets attract
b) $\vec { B }$ from the 4 neighbours $\| \vec { m } \Rightarrow$ no torque
c) correctly marked 12 arrows
d) antiferromagnetic
e) $W = \vec { B } \cdot \vec { m }$
f) $W = \frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi \delta ^ { 3 } }$
g) $W = 29 m J$

(C.2) Now we need to repeat the steps done for the previous question, with the only difference in the mutual placement of the magnets. Also, each of the magnets of the top row interacts now with two magnets of the bottom row with the three magnets forming a equilateral triangle. Since we'll be going to use virtual displacement method, we consider the interaction of three magnets forming an isosceles triangle as shown in the figure; while the base of the triangle remains fixed during virtual displacements, the length of the sides $l$ will change.
![](../../../figures/solution-ocr/69d01b01d5af414b63d8c939.jpg)
First we need an expression of the magnetic field caused by the two bottom magnets at the centre of the topmost magnet. Due to symmetry, this field must be horizontal; we can use the formula provided in the problem text for finding it. The dipole moment of the left-bottom magnet needs to be divided into components parallel and perpendicular to the radius vector drawn from its centre to the centre of the topmost magnet, $m _ { \| } = m \cos \alpha$ and $m _ { \perp } = m \sin \alpha$. Hence, we can express the resultant $x$ component of the magnetic field as

$$
\vec { B } _ { 3 x } = \frac { \mu _ { 0 } } { 4 \pi l ^ { 3 } } \left( 2 \vec { m } _ { \| } \cos \alpha - \vec { m } _ { \perp } \sin \alpha \right) = \frac { \mu _ { 0 } \vec { m } } { 4 \pi l ^ { 3 } } \left( 3 \cos ^ { 2 } \alpha - 1 \right) .
$$

The magnetic field due to both magnets is therefore $2 B _ { 3 x } \hat { x }$.

As the first thing, we can now analyse the stability of a magnet with respect to rotations. As before, we assume that the magnets in one single row are parallel to each other, and the magnets at the two neighbouring rows are either parallel or antiparallel to each other. In either case, the rows at the top and at the bottom from a given magnet are parallel to each other; let them be oriented along $\hat { x }$. Then, each row contributes $2 B _ { 3 x } \hat { x }$ to the total field at the position of our magnet. The total field has also contributions $\vec { B } _ { 4 x } = \pm \frac { \mu _ { 0 } } { 2 \pi \delta ^ { 3 } }$ from the left and right magnets; here '+' corresponds to the ferromagnetic order, and '-' - to the antiferromagnetic order. Keeping in mind that $l = \delta$ and $\cos \alpha = \frac { 1 } { 2 }$ the total field is

$$
\vec { B } _ { 5 } = 4 \vec { B } _ { 3 x } + 2 \vec { B } _ { 4 x } = \frac { \mu _ { 0 } m } { 2 \pi \delta ^ { 3 } } \left( - \frac { 1 } { 2 } \pm 2 \right) \hat { x } .
$$

This is parallel to the given magnetic dipole for both '+' and '-', which ensures stability in any case.

With $\vec { m } = \pm \hat { x } m$ and $y$ denoting the height of the isosceles triangle, the vertical component of the interaction force of a magnet with a magnet in the bottom row can be found as

$$
F _ { 5 y } = \frac { \mathrm { d } } { \mathrm {~d} y } \vec { B } _ { 3 } \cdot \vec { m } = \pm \frac { \mathrm { d } l } { \mathrm {~d} y } \frac { \mathrm {~d} } { \mathrm {~d} l } \frac { \mu _ { 0 } m ^ { 2 } } { 4 \pi l ^ { 3 } } \left( \frac { 3 \delta ^ { 2 } } { 4 l ^ { 2 } } - 1 \right) = \mp \frac { \mathrm { d } l } { \mathrm {~d} y } \frac { 3 \mu _ { 0 } m ^ { 2 } } { 16 \pi \delta ^ { 3 } } ;
$$

here we have used $\cos \alpha = \frac { \delta } { 2 l }$ and upon taking derivative, substituted $l = \delta$. For this force to be attractive, we


need a minus sign which corresponds to the ferromagnetic order (keep in mind that $\frac { \mathrm { d } l } { \mathrm {~d} y } > 0$ ). Now we are ready to mark the direction of the dipoles on the sketch, see the figure below.
![](../../../figures/solution-ocr/b94e77cd603a07f677aefefc.jpg)

The work needed to pull out a magnet is found similarly to the part (C.1):

$$
W = \vec { B } _ { 5 } \cdot m \hat { x } = \frac { 3 \mu _ { 0 } m ^ { 2 } } { 4 \pi \delta ^ { 3 } } = 15 \mathrm {~mJ} .
$$

a) $\vec { B } _ { 3 x } = \frac { \mu _ { 0 } \vec { m } } { 4 \pi l ^ { 3 } } \left( 3 \cos ^ { 2 } \alpha - 1 \right)$
b) $\vec { B } _ { 4 x } = \pm \frac { \mu _ { 0 } } { 2 \pi \delta ^ { 3 } }$
c) $\vec { B } _ { 5 } = 4 \vec { B } _ { 3 x } + 2 \vec { B } _ { 4 x }$
d) $\vec { B } _ { 5 } = \frac { \mu _ { 0 } m } { 2 \pi \delta ^ { 3 } } \left( - \frac { 1 } { 2 } \pm 2 \right) \hat { x }$.
e) $F _ { 5 y } = \frac { \mathrm { d } } { \mathrm { d } y } \vec { B } _ { 3 } \cdot \vec { m }$
f) $F _ { 5 y } = \mp \frac { \mathrm { d } l } { \mathrm {~d} y } \frac { 3 \mu _ { 0 } m ^ { 2 } } { 16 \pi \delta ^ { 3 } }$
g) $F _ { 5 y }$ attractive
h) correctly marked 12 arrows
i) ferromagnetic
j) $W = \frac { 3 \mu _ { 0 } m ^ { 2 } } { 4 \pi \delta ^ { 3 } }$
k) $W = 15 m J$

Remark: ± signs are not required as long as the correct sign corresponding to the ferromagnetic order are used: meaning, + sign in f) and - sign in d). No marks for e) if the score for d) is zero.
