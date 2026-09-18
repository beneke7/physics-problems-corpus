---
id: solution-ocr-ipho-2018-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2018/T2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2018-t2]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## IPh0 2018 <br> Lisbon, Postugal

## Solutions to Theory Problem 2

## Where is the neutrino?

(Miguel C N Fiolhais and António Onofre)

July 24, 2018
v1.2


## Where is the neutrino? (10 points)

Part A. ATLAS Detector physics (4.0 points)
A. 1

The magnetic force is the centripetal force:

$$
m \frac { v ^ { 2 } } { r } = e v B \Rightarrow r = \frac { m v } { e B } .
$$

First express the velocity in terms of the kinetic energy,

$$
K = \frac { 1 } { 2 } m v ^ { 2 } \Rightarrow v = \sqrt { \frac { 2 K } { m } } ,
$$

and then insert it in the expression above for the radius to get
A. 1 0.5pt
A. 2

The radius of the circular motion of a charged particle in the presence of a uniform magnetic field is given by,

$$
r = \frac { m v } { e B } .
$$

This formula is valid in the relativistic scenario if the mass correction, $m \rightarrow \gamma m$ is included:

$$
r = \frac { \gamma m v } { e B } = \frac { p } { e B } \Rightarrow p = r e B .
$$

Note that the radius of the circular motion is half the radius of the inner part of the detector. One obtains $\left[ 1 \mathrm { MeV } / c = 5.34 \times 10 ^ { - 22 } \mathrm {~m} \mathrm {~kg} \mathrm {~s} ^ { - 1 } \right]$
A. 2 0.5pt

$$
p = 330 \mathrm { MeV } / c .
$$

A. 3

The acceleration for the particle is $a = \frac { e v B } { \gamma m } \sim \frac { e c B } { \gamma m }$, in the ultrarelativistic limit. Then,

$$
P = \frac { e ^ { 4 } c ^ { 2 } \gamma ^ { 4 } B ^ { 2 } } { 6 \pi \epsilon _ { 0 } c ^ { 3 } \gamma ^ { 2 } m ^ { 2 } } = \frac { e ^ { 4 } \gamma ^ { 2 } c ^ { 4 } B ^ { 2 } } { 6 \pi \epsilon _ { 0 } c ^ { 5 } m ^ { 2 } }
$$

Since $E = \gamma m c ^ { 2 }$ we can obtain $\gamma ^ { 2 } c ^ { 4 } = \frac { E ^ { 2 } } { m ^ { 2 } }$ and, finally,


-

"

$$
\theta =
$$

"
A. 4

The power emitted by the particle is given by,

$$
P = - \frac { \mathrm { d } E } { \mathrm {~d} t } = \frac { e ^ { 4 } } { 6 \pi \epsilon _ { 0 } m ^ { 4 } c ^ { 5 } } E ^ { 2 } B ^ { 2 } .
$$

The energy of the particle as a function of time can be calculated from

$$
\int _ { E _ { 0 } } ^ { E ( t ) } \frac { 1 } { E ^ { 2 } } \mathrm {~d} E = - \int _ { 0 } ^ { t } \frac { e ^ { 4 } } { 6 \pi \epsilon _ { 0 } m ^ { 4 } c ^ { 5 } } B ^ { 2 } \mathrm {~d} t
$$

where $E ( 0 ) = E _ { 0 }$. This leads to,

$$
\frac { 1 } { E ( t ) } - \frac { 1 } { E _ { 0 } } = \frac { e ^ { 4 } B ^ { 2 } } { 6 \pi \epsilon _ { 0 } m ^ { 4 } c ^ { 5 } } t \Rightarrow E ( t ) = \frac { E _ { 0 } } { 1 + \alpha E _ { 0 } t } ,
$$

with
A. 4

$$
\alpha = \frac { e ^ { 4 } B ^ { 2 } } { 6 \pi \epsilon _ { 0 } m ^ { 4 } c ^ { 5 } } .
$$

1.0pt
A. 5

If the initial energy of the electron is 100 GeV , the radius of curvature is extremely large $\left( r = \frac { E } { e B c } \approx 167 \mathrm {~m} \right)$. Therefore, in approximation, one can consider the electron is moving in the inner part of the ATLAS detector along a straight line. The time of flight of the electron is $t = R / c$, where $R = 1.1 \mathrm {~m}$ is the radius of the inner part of the detector. The total energy lost due to synchrotron radiation is,

$$
\Delta E = E ( R / c ) - E _ { 0 } = \frac { E _ { 0 } } { 1 + \alpha E _ { 0 } \frac { R } { c } } - E _ { 0 } \approx - \alpha E _ { 0 } ^ { 2 } \frac { R } { c }
$$

and
A. 5
0.5pt

$$
\Delta E = - 56 \mathrm { MeV } .
$$


## A. 6

In the ultrarelativistic limit, $v \approx c$ and $E \approx p c$. The cyclotron frequency is,

$$
\omega ( t ) = \frac { c } { r ( t ) } = \frac { e c B } { p ( t ) } = \frac { e c ^ { 2 } B } { E ( t ) }
$$

A. 6

$$
\omega ( t ) = \frac { e c ^ { 2 } B } { E _ { 0 } } \left( 1 + \frac { e ^ { 4 } B ^ { 2 } } { 6 \pi \epsilon _ { 0 } m ^ { 4 } c ^ { 5 } } E _ { 0 } t \right) .
$$


Part B. Finding the neutrino (6.0 points)

## B. 1

Since the $W ^ { + }$boson decays into an anti-muon and a neutrino, one can use principles of conservation of energy and linear momentum to calculate the unknown $p _ { \mathrm { z } } { } ^ { ( \nu ) }$ of the neutrino. Moreover, the antimuon and the neutrino can be considered massless, which implies that the magnitude of their momenta (times $c$ ) and their energies are the same. Therefore, the conservation of linear momentum can be expressed as

$$
\vec { p } ^ { ( W ) } = \vec { p } ^ { ( \mu ) } + \vec { p } ^ { ( \nu ) } ,
$$

and the conservation of energy as,

$$
E ^ { ( W ) } = c p ^ { ( \mu ) } + c p ^ { ( \nu ) } .
$$

In addition, one can also relate the energy and the momentum of the $W ^ { + }$boson through its mass,

$$
m _ { W } ^ { 2 } = \left( E ^ { ( W ) } \right) ^ { 2 } / c ^ { 4 } - \left( p ^ { ( W ) } \right) ^ { 2 } / c ^ { 2 }
$$

which leads to a quadratic equation on $p _ { z } { } ^ { ( \nu ) }$,

$$
\begin{aligned}
m _ { W } ^ { 2 } & = \left[ \left( p ^ { ( \mu ) } + p ^ { ( \nu ) } \right) ^ { 2 } - \left( \vec { p } ^ { ( \mu ) } + \vec { p } ^ { ( \nu ) } \right) ^ { 2 } \right] / c ^ { 2 } \\
& = \left( 2 p ^ { ( \mu ) } p ^ { ( \nu ) } - 2 \vec { p } ^ { ( \mu ) } \cdot \vec { p } ^ { ( \nu ) } \right) / c ^ { 2 }
\end{aligned}
$$

B. 1 1.5pt

$$
m _ { W } ^ { 2 } = \frac { 1 } { c ^ { 2 } } \left( 2 p ^ { ( \mu ) } \sqrt { \left( p _ { \mathrm { T } } ^ { ( \nu ) } \right) ^ { 2 } + \left( p _ { z } ^ { ( \nu ) } \right) ^ { 2 } } - 2 \vec { p } _ { \mathrm { T } } ^ { ( \mu ) } \cdot \vec { p } _ { \mathrm { T } } ^ { ( \nu ) } - 2 p _ { z } ^ { ( \mu ) } p _ { z } ^ { ( \nu ) } \right) .
$$

B. 2

The numerical substitution directly in the answer of B.1, using

$$
\begin{gathered}
p ^ { ( \mu ) } = 37.2 \mathrm { GeV } / c \quad m _ { W } ^ { 2 } c ^ { 2 } = 6464.2 ( \mathrm { GeV } / c ) ^ { 2 } \quad p _ { \mathrm { T } } ^ { ( \nu ) 2 } = 10864.9 ( \mathrm { GeV } / c ) ^ { 2 } \\
\vec { p } _ { \mathrm { T } } ^ { ( \mu ) } \cdot \vec { p } _ { \mathrm { T } } ^ { ( \nu ) } = 2439.3 ( \mathrm { GeV } / c ) ^ { 2 } \quad p _ { z } ^ { ( \mu ) } = - 12.4 \mathrm { GeV } / c ,
\end{gathered}
$$

leads to

$$
6464.2 = 74.4 \sqrt { 10864.9 + p _ { z } ^ { ( \nu ) 2 } } - 4878.6 + 24.8 p ^ { ( \nu ) } .
$$

This is a quadratic equation, equivalent to

$$
0.88889 p _ { z } ^ { ( \nu ) 2 } + 101.64 p _ { z } ^ { ( \nu ) } - 12378 = 0
$$

whose solutions are:


＂
＂

$$
= \mid c - 10
$$

＂

$$
= \frac { 1 } { n } =
$$

GC⿱⿱亠䒑口儿亾s

## B． 3

The final state particles of the top quark decay are the anti－muon，the neutrino and jet 1．Since the neutrino is now fully reconstructed the energy and linear momentum of the top quark can be calculated as，

$$
\begin{aligned}
E ^ { ( \mathrm { t } ) } & = c p ^ { ( \mu ) } + c p ^ { ( \nu ) } + c p ^ { \left( j _ { 1 } \right) } \\
\vec { p } ^ { ( \mathrm { t } ) } & = \vec { p } ^ { ( \mu ) } + \vec { p } ^ { ( \nu ) } + \vec { p } ^ { \left( j _ { 1 } \right) } .
\end{aligned}
$$

The top quark mass is，

$$
\begin{aligned}
m _ { \mathrm { t } } & = \sqrt { \left( E ^ { ( \mathrm { t } ) } \right) ^ { 2 } / c ^ { 4 } - \left( \vec { p } ^ { ( \mathrm { t } ) } \right) ^ { 2 } / c ^ { 2 } } \\
& = c ^ { - 1 } \sqrt { \left( p ^ { ( \mu ) } + p ^ { ( \nu ) } + p ^ { \left( j _ { 1 } \right) } \right) ^ { 2 } - \left( \vec { p } ^ { ( \mu ) } + \vec { p } ^ { ( \nu ) } + \vec { p } ^ { \left( j _ { 1 } \right) } \right) ^ { 2 } } .
\end{aligned}
$$

The substitution of values leads to two possible masses：
B． 3
1．0pt

$$
m _ { \mathrm { t } } = 169.3 \mathrm { GeV } / c ^ { 2 } \quad \text { or } \quad m _ { \mathrm { t } } = 311.2 \mathrm { GeV } / c ^ { 2 }
$$

## B． 4

According to the frequency distribution for signal（dashed line），the probability of the $m _ { \mathrm { t } } = 169.3 \mathrm { GeV } / c ^ { 2 }$ solution is roughly 0.1 while the probability of the $m _ { \mathrm { t } } = 311.2 \mathrm { GeV } / \mathrm { c } ^ { 2 }$ solution is below 0.01 ．Therefore，

B． 4 The most likely candidate is the $m _ { \mathrm { t } } = 169.3 \mathrm { GeV } / \mathrm { c } ^ { 2 }$ solution．
1．0pt


## B. 5

The top quark energy for the most likely candidate is $E ^ { ( \mathrm { t } ) } = c p ^ { ( \mu ) } + c p ^ { ( \nu ) } + c p ^ { \left( j _ { 1 } \right) } = 272.6 \mathrm { GeV }$.

$$
d = v t = v \gamma t _ { 0 } = \frac { p ^ { ( \mathrm { t } ) } } { m _ { \mathrm { t } } } t _ { 0 } = c t _ { 0 } \sqrt { \frac { E ^ { ( \mathrm { t } ) ^ { 2 } } } { m _ { \mathrm { t } } ^ { 2 } c ^ { 4 } } - 1 } .
$$

B. 5

$$
d = 2 \times 10 ^ { - 16 } \mathrm {~m} .
$$
