---
id: solution-ocr-inpho-2014-s-a6
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2014_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [inpho-2014-a6]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
6. Consider an equilateral triangle ABC of side $2 a$ in the plane of the paper as shown. The centroid of the triangle is $O$. Equal charges $( Q )$ are fixed at the vertices $A , B$ and $C$. In what follows consider all motion and situations to be confined to the plane of the paper.
[Marks: 11]
![](../../../figures/solution-ocr/a77b8a1f2bff95f0f8b32450.jpg)
    (a) A test charge $( q )$, of same sign as $Q$, is placed on the median AD at a point at a distance $\delta$ below $O$. Obtain the force $( \vec { F } )$ felt by the test charge.
Solution: $\vec { F } = \frac { 2 K Q q \left( \frac { a } { \sqrt { 3 } } - \delta \right) } { \left( a ^ { 2 } + \left( \frac { a } { \sqrt { 3 } } - \delta \right) ^ { 2 } \right) ^ { 3 / 2 } } - \frac { K Q q } { \left( \frac { 2 a } { \sqrt { 3 } } + \delta \right) ^ { 2 } }$
Here $K = 1 / 4 \pi \epsilon _ { 0 }$ and direction is upward (towards $A$ ).
    (b) Assuming $\delta \ll a$ discuss the motion of the test charge when it is released.
Solution: Using binomial approximation, $\vec { F } = K Q q \frac { 9 \sqrt { 3 } } { 16 } \frac { \delta } { a ^ { 3 } }$ (upward) which is linear in $\delta$. Hence charge will oscillate simple harmonically about $O$ when released.
    (c) Obtain the force ( $\vec { F } _ { D }$ ) on this test charge if it is placed at the point $D$ as shown in the figure.
Solution: $\vec { F } _ { D } = \frac { K Q q } { 3 a ^ { 2 } }$ (downward)
    (d) In the figure below mark the approximate locations of the equilibrium point(s) for this system. Justify your answer.
Solution: For small $\delta$ force on the test charge is upwards while for large $\delta$ (eg. at $D$ ) force is downwards. So there is a neutral point between $O$ and $D$. By symmetry there will be neutral points on other medians also. In figure below all possible (4) neutral points are shown by •
![](../../../figures/solution-ocr/e76f934743b16d630ce02d1b.jpg)

(e) Is the equilibrium at $O$ stable or unstable if we displace the test charge in the direction of $O P$ ? The line $P Q$ is parallel to the base $B C$. Justify your answer.
![](../../../figures/solution-ocr/53177e369b6c400ab5930777.jpg)

Solution: Let the distance along $P$ be $x$ and $O$ to be at $( 0,0 )$. Electric potential of a test charge along $O P$ can be written as

$$
\begin{aligned}
V ( x ) & = \frac { K Q } { \sqrt { x ^ { 2 } + ( 4 / 3 ) } } + \frac { K Q } { \sqrt { ( x + 1 ) ^ { 2 } + ( 1 / 3 ) } } + \frac { K Q } { \sqrt { ( x - 1 ) ^ { 2 } + ( 1 / 3 ) } } \\
& \approx K Q \sqrt { \frac { 3 } { 4 } } \left( 3 + \frac { 9 } { 16 } x ^ { 2 } \right)
\end{aligned}
$$

We can see that $V ( x ) \propto x ^ { 2 }$, hence it is a stable equilibrium.

(f) Consider a rectangle $A B C D$. Equal charges are fixed at the vertices $A , B , C$, and $D . O$ is the centroid. In the figure below mark the approximate locations of all the neutral points of the system for a test charge with same sign as the charges on the vertices. Dotted lines are drawn for the reference.

Solution: Equilibrium points are indicated by •
![](../../../figures/solution-ocr/8afd9c106cad50a4663c2983.jpg)

(g) How many neutral points are possible for a system in which $N$ charges are placed at the $N$ vertices of a regular $N$ sided polygon?

Solution: $N + 1$

7. Bohr-Wheeler fission limit: Using the liquid drop model for the nucleus, Bohr and Wheeler established in 1939 a natural limit for $Z ^ { 2 } / A$ beyond which nuclei are unstable against spontaneous fission, where $Z$ and $A$ are the atomic and nucleon numbers respectively. In the following problem we will estimate this limit.
Consider the liquid drop model of a nucleus where the total energy of the nucleus is considered to be sum of surface energy $U _ { A }$ and electrostatic energy $U _ { E } . U _ { A }$ can be expressed as $U _ { A } = a _ { S } R ^ { 2 }$ where $a _ { S }$ is a dimensioned proportionality constant and $R$ is the radius of the nucleus. In what follows we take the nucleus to be spherical with its radius $R = r _ { 0 } A ^ { 1 / 3 }$ where $r _ { 0 } = 1.2 \mathrm { fm } \left( 1 \mathrm { fm } = 10 ^ { - 15 } \mathrm {~m} \right)$. Consider the case of a nucleus of radius $R _ { 0 }$, atomic mass $A$ and atomic number $Z$ undergoing a fission reaction and breaking into two daughter nuclei of radii $R _ { 1 }$ and $R _ { 2 }$ as shown in figure below. We define the mass ratio of fission

products 1 to 2 as $f$. Assume that mass density and charge density of parent and daughter nuclei are same.
[Marks: 13]

![](../../../figures/solution-ocr/254f6a8453f9c954b4a1c2d7.jpg)
(a) Original nucleus

![](../../../figures/solution-ocr/ea8fd9b9c9180ffb3749d0d4.jpg)
(b) Moment of fission

![](../../../figures/solution-ocr/f0608c885ee2760e885759eb.jpg)
(c) Large separation

(a) Estimate the nuclear mass density $\left( \rho _ { n } \right)$ assuming $m _ { p } = m _ { n }$.
Solution: $\rho _ { n } \approx 10 ^ { 17 } \mathrm {~kg} / \mathrm { m } ^ { - 3 }$
(b) The sum of the surface energies of the fissioned daughter nuclei can be written as $U _ { A } ^ { \mathrm { d } } = a _ { S } R _ { 0 } ^ { 2 } \alpha$. Obtain $\alpha$ in terms of $f$.
Solution: $\alpha = \frac { 1 + f ^ { 2 / 3 } } { ( 1 + f ) ^ { 2 / 3 } }$
(c) Obtain the total electrostatic energy $U _ { E } ^ { \mathrm { p } }$ of parent nuclei in terms of given parameters and relevant universal constants.
Solution: $U _ { E } ^ { \mathrm { p } } = \frac { 3 e ^ { 2 } Z ^ { 2 } } { 5 \left( 4 \pi \epsilon _ { 0 } r _ { 0 } A ^ { 1 / 3 } \right) }$
(d) Calculate $U _ { E } ^ { \mathrm { p } }$ (in MeV) in terms of $Z$ and $A$ only.
Solution: $U _ { E } ^ { \mathrm { p } } = 0.72 Z ^ { 2 } A ^ { - 1 / 3 } \mathrm { MeV }$
(e) i. Obtain the total electrostatic energy $U _ { E } ^ { \mathrm { d } }$ of daughter nuclei just after the fission i.e. at the instance shown in Fig. (b).
Solution: $\left. U _ { E } ^ { \mathrm { d } } = \frac { 3 e ^ { 2 } } { 5 \left( 4 \pi \epsilon _ { 0 } r _ { 0 } \right. } \right) \left( \frac { Z _ { 1 } ^ { 2 } } { A _ { 1 } ^ { 1 / 3 } } + \frac { Z _ { 2 } ^ { 2 } } { A _ { 2 } ^ { 1 / 3 } } + \frac { 5 } { 3 } \frac { Z _ { 1 } Z _ { 2 } } { A _ { 1 } ^ { 1 / 3 } + A _ { 2 } ^ { 1 / 3 } } \right)$
Here $Z _ { 1 } , R _ { 1 }$ are atomic number and radius of daughter nuclei.
ii. $U _ { E } ^ { \mathrm { d } }$ can be simplified and written in terms of $U _ { E } ^ { \mathrm { p } }$ i.e. in terms of electrostatic energy of parent nucleus as $U _ { E } ^ { \mathrm { d } } = \beta U _ { E } ^ { \mathrm { p } }$ where $\beta$ depends solely on $f$. Obtain $\beta$.
Solution: $\beta = \frac { 1 + f + f ^ { 1 / 3 } + f ^ { 2 } + f ^ { 5 / 3 } } { ( 1 + f ) ^ { 5 / 3 } \left( 1 + f ^ { 1 / 3 } \right) }$

(f) Surface energy calculation
    i. Energy $Q$ released in fission is described as the difference in energy between the instances shown in Fig. (a) and Fig. (c) i.e. parent nuclei and product nuclei separated by a very large distance. Obtain the expression for $a _ { S }$ in terms of $\{ Q ( \mathrm { inMeV } ) , Z , A , \alpha , \gamma \}$, where $A$ and $Z$ refer to the parent nucleus. Here $\gamma$ depends solely on $f$.
$$
\text { Solution: } a _ { S } = \frac { Q - 0.72 ( 1 - \gamma ) Z ^ { 2 } A ^ { - 1 / 3 } } { r _ { 0 } ^ { 2 } A ^ { 2 / 3 } ( 1 - \alpha ) } \text { where } \gamma = \frac { 1 + f ^ { 5 / 3 } } { ( 1 + f ) ^ { 5 / 3 } }
$$
        ii. Assuming that the above expression holds, calculate $a _ { S }$ (in units of MeV/fm ${ } ^ { 2 }$ ) for the following reaction with $Q$ value 173.2 MeV:
$$
{ } _ { 0 } ^ { 1 } n + { } _ { 92 } ^ { 235 } \mathrm { U } \rightarrow { } _ { 56 } ^ { 141 } \mathrm { Ba } + { } _ { 36 } ^ { 92 } \mathrm { Kr } + 3 \left( { } _ { 0 } ^ { 1 } n \right)
$$
Solution: $a _ { S } = 12.7 \mathrm { MeV } / \mathrm { fm } ^ { - 2 }$.
(g) General $Z ^ { 2 } / A$ limit Condition for fission to occur can be expressed as $\frac { Z ^ { 2 } } { A } > C$ where $C$ depends on $a _ { S }$ and $f$. Obtain $C$.
Solution: $\frac { Z ^ { 2 } } { A } > \frac { \alpha - 1 } { ( 1 - \gamma ) } \frac { a _ { S } r _ { 0 } ^ { 2 } } { 0.72 \mathrm { MeV } }$
(h) Assume that $a _ { S }$ is a constant function of $f$, using the value of $a _ { S }$ obtained in part f(ii), calculate the minimum value of $C$.

Solution: $Z ^ { 2 } / A$ limit is matter of fundamental physics. If we define $f$ as mass ratio of fission products 2 to 1 then for spontaneous fission this $f$ should be equally valid. It is possible only if $f = 1 / f$ which gives $f = 1$. Hence $C = 1.4 a _ { S } = 17.6$

8. A conducting wire frame of single turn in the shape of a rectangle $A B C D$ (sides $A B = a$, $B C = b$ ) is free to rotate about the side $A B$ which is horizontal. Initially, the frame is held in a horizontal plane and a steady current $i$ (clockwise as seen from above) is switched on in the wire and then the frame is released (still free to rotate about $A B$ ). Find the magnitude and direction of the minimum uniform magnetic field necessary to keep the frame horizontal. The origin of the coordinate system is at $A$ and $A B$ lies along the direction of the $+ x$ axis. Take the mass of the wire per unit length as $\lambda$ and the acceleration due to gravitational field to be $g \hat { k }$. Here $\hat { k }$ is unit vector in $+ z$ direction.

Solution: Minimum magnetic field $= \frac { \lambda ( a + b ) g } { i a }$ which is in the direction of $+ y$ or $- y$ axis.
