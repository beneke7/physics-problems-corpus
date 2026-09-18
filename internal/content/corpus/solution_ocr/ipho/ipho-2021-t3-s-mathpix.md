---
id: solution-ocr-ipho-2021-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2021/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2021-t3]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## Particles and Waves (10 points)

## Part A. Quantum particle in a box (1.4 points)

## A. 1 (0.4 points)

The width of the potential well (L) should be equal to the half of the wavelength of the de Broglie standing wave $\lambda _ { \mathrm { dB } } = h / p$, here $h$ is the Planck's constant and $p$ is the momentum of the particle. Thus $p = h / \lambda _ { \mathrm { dB } } = h / ( 2 L )$, and the minimal possible energy of the particle is

$$
E _ { \min } = \frac { p ^ { 2 } } { 2 m } = \frac { h ^ { 2 } } { 8 m L ^ { 2 } } .
$$

## A. 2 (0.6 points)

The potential well should fit an integer number of the de Broglie half-wavelengths: $L = \frac { 1 } { 2 } \lambda _ { \mathrm { dB } } ^ { ( n ) } \cdot n$, $n = 1,2 , \ldots$. Therefore, particle's momentum, corresponding to the de Broglie wavelength $\lambda _ { \mathrm { dB } } ^ { ( n ) }$ is

$$
p _ { n } = \frac { h } { \lambda _ { \mathrm { dB } } ^ { ( n ) } } = \frac { h n } { 2 L } ,
$$

and the corresponding energy is

$$
\begin{equation*}
E _ { n } = \frac { p _ { n } ^ { 2 } } { 2 m } = \frac { h ^ { 2 } n ^ { 2 } } { 8 m L ^ { 2 } } , \quad n = 1,2,3 , \ldots \tag{1}
\end{equation*}
$$

## A. 3 (0.4 points)

The energy of the emitted photon, $E = h c / \lambda$ (here $c$ is the speed of light and $\lambda$ is the photon's wavelength) should be equal to the energy difference $\Delta E = E _ { 2 } - E _ { 1 }$, therefore

$$
\lambda _ { 21 } = \frac { h c } { E _ { 2 } - E _ { 1 } } = \frac { 8 m c L ^ { 2 } } { 3 h } .
$$

## Part B. Optical properties of molecules (2.1 points)

## B. 1 (0.8 points)

Taking into account the Pauli exclusion principle, each energy level $E _ { n }$ is occupied by two electrons with spins oriented in the opposite directions. As a results, 10 electrons fill the lowest 5 states, and the absorption of the photon of the longest wavelength corresponds to the transition of one electron from the occupied $E _ { 5 }$ to the unoccupied $E _ { 6 }$ energy state:

$$
\frac { h c } { \lambda } = E _ { 6 } - E _ { 5 } ,
$$


where $E _ { 6 }$ and $E _ { 5 }$ can be found from Eq. 1, where $m$ is replaced with the electron mass $m _ { \mathrm { e } }$. Hence we obtain:

$$
\lambda = \frac { c \cdot 8 m _ { \mathrm { e } } L ^ { 2 } } { h \left( 6 ^ { 2 } - 5 ^ { 2 } \right) } = \frac { 10.5 ^ { 2 } \cdot 8 } { 11 } \frac { m _ { \mathrm { e } } c l ^ { 2 } } { h } = \frac { 882 } { 11 } \frac { m _ { \mathrm { e } } c l ^ { 2 } } { h } \approx 647 \mathrm {~nm} .
$$

This result correspond precisely to the experimental value the peak position of the Cy5 absorption spectrum.

## B. 2 (0.4 points)

In the similar model for the Cy3 molecule, there are 8 electrons in the box of length $L = 8.5 l$, thus photon's absorption corresponds to the $E _ { 4 } \rightarrow E _ { 5 }$ transition. Taking into account the result of question B1, we obtain

$$
\lambda _ { \mathrm { Cy } 3 } = \frac { 8.5 ^ { 2 } \cdot 8 } { \left( 5 ^ { 2 } - 4 ^ { 2 } \right) } \frac { m _ { \mathrm { e } } c l ^ { 2 } } { h } \approx 518 \mathrm {~nm} ,
$$

i. e. the absorption spectrum of the Cy3 molecule is shifted by $\Delta \lambda \approx 129 \mathrm {~nm}$ to the blue comparing to that of the Cy5 molecule. The experimental value is $\lambda _ { \mathrm { Cy } 3 } ^ { ( \text {exp } ) } = 548 \mathrm {~nm}$, so that our model catches general properties of these dye molecules rather well.

## B. 3 (0.7 points)

Let us assume

$$
\begin{equation*}
K = k \varepsilon _ { 0 } ^ { \alpha } h ^ { \beta } \lambda ^ { \gamma } d ^ { \delta } . \tag{2}
\end{equation*}
$$

The SI units of the relevant quantities are:

$$
\left[ \varepsilon _ { 0 } \right] = \frac { \mathrm { A } ^ { 2 } \cdot \mathrm {~s} ^ { 4 } } { \mathrm {~kg} \cdot \mathrm {~m} ^ { 3 } } , \quad [ h ] = \frac { \mathrm { kg } \cdot \mathrm {~m} ^ { 2 } } { \mathrm {~s} } , \quad [ \lambda ] = \mathrm { m } , \quad [ d ] = \mathrm { A } \cdot \mathrm {~s} \cdot \mathrm {~m} , \quad [ K ] = \mathrm { s } ^ { - 1 } .
$$

By plugging these expressions into Eq. 2 we obtain a simple system of linear equations for the unknown powers $\alpha , \beta , \gamma$, and $\delta$ :

$$
2 \alpha + \delta = 0 , \quad - \alpha + \beta = 0 , \quad 4 \alpha - \beta + \delta = - 1 , \quad - 3 \alpha + 2 \beta + \gamma + \delta = 0 .
$$

By solving this system we get:

$$
\alpha = \beta = - 1 , \quad \gamma = - 3 , \quad \delta = 2 ,
$$

so that the rate of spontaneous emission is

$$
\begin{equation*}
K = \frac { 16 \pi ^ { 3 } } { 3 } \frac { d ^ { 2 } } { \varepsilon _ { 0 } h \lambda ^ { 3 } } . \tag{3}
\end{equation*}
$$

## B. 4 (0.2 points)

By using the result of question B. 2 and expressing transition dipole moment as $d = 2.4 e l$, we obtain from Eq. 3:

$$
\tau _ { \mathrm { Cy } 5 } = \frac { 3 } { 16 \pi ^ { 3 } } \frac { \varepsilon _ { 0 } h } { 2.4 ^ { 2 } l ^ { 2 } e ^ { 2 } } \lambda ^ { 3 } \approx 3.3 \mathrm {~ns} .
$$


## Part C. Bose-Einstein condensation (1.5 points)

## C. 1 (0.4 points)

At temperature $T$, the average kinetic energy of translational motion is $\frac { 3 } { 2 } k _ { \mathrm { B } } T$. Equating this result to $p ^ { 2 } / ( 2 m )$, we obtain typical momentum $p = \sqrt { 3 m k _ { \mathrm { B } } T }$ and the de Broglie wavelength

$$
\lambda _ { \mathrm { dB } } = \frac { h } { p } = \frac { h } { \sqrt { 3 m k _ { \mathrm { B } } T } } .
$$

## C. 2 (0.5 points)

The volume per particle $V / N$ is a good estimate for $\ell ^ { 3 }$. We obtain $\ell = n ^ { - 1 / 3 }$, with $n = N / V$ and equate $\ell = \lambda _ { \text {dB } }$ to express $T _ { c } = h ^ { 2 } n ^ { 2 / 3 } / \left( 3 m k _ { \mathrm { B } } \right)$.

## C. 3 (0.6 points)

Using the answer to the previous question, we express $n _ { c } = \left( 3 m k _ { \mathrm { B } } T _ { c } \right) ^ { 3 / 2 } / h ^ { 3 }$. Equation of state for the ideal gas gives $n _ { 0 } = p / \left( k _ { \mathrm { B } } T \right)$. Numerical estimations yield $n _ { c } \approx 1.59 \cdot 10 ^ { 18 } \mathrm {~m} ^ { - 3 }$ and $n _ { 0 } / n _ { c } \approx 1.5 \cdot 10 ^ { 7 }$.

## Part D. Three-beam optical lattices (5.0 points)

## D. 1 (1.4 points)

We sum the three electric fields ( $z$ components)

$$
\begin{equation*}
E ( \vec { r } , t ) = E _ { 0 } \sum _ { i = 1 } ^ { 3 } \cos \left( \vec { k } _ { i } \cdot \vec { r } - \omega t \right) , \tag{4}
\end{equation*}
$$

and square the result

$$
\begin{align*}
E ^ { 2 } ( \vec { r } , t ) & = E _ { 0 } ^ { 2 } \sum _ { i = 1 } ^ { 3 } \sum _ { j = 1 } ^ { 3 } \cos \left( \vec { k } _ { i } \cdot \vec { r } - \omega t \right) \cos \left( \vec { k } _ { j } \cdot \vec { r } - \omega t \right) \\
& = \frac { E _ { 0 } ^ { 2 } } { 2 } \sum _ { i = 1 } ^ { 3 } \sum _ { j = 1 } ^ { 3 } \left\{ \cos \left[ \left( \vec { k } _ { i } - \vec { k } _ { j } \right) \cdot \vec { r } \right] + \cos \left[ \left( \vec { k } _ { i } + \vec { k } _ { j } \right) \cdot \vec { r } - 2 \omega t \right] \right\} . \tag{5}
\end{align*}
$$

Time averaging gives

$$
\begin{equation*}
\left\langle E ^ { 2 } ( \vec { r } , t ) \right\rangle = \frac { E _ { 0 } ^ { 2 } } { 2 } \sum _ { i = 1 } ^ { 3 } \sum _ { j = 1 } ^ { 3 } \cos \left[ \left( \vec { k } _ { i } - \vec { k } _ { j } \right) \cdot \vec { r } \right] , \tag{6}
\end{equation*}
$$


we analyse the 9 terms and simplify to

$$
\begin{equation*}
\left\langle E ^ { 2 } ( \vec { r } , t ) \right\rangle = E _ { 0 } ^ { 2 } \left( \frac { 3 } { 2 } + \sum _ { j = 1 } ^ { 3 } \cos \left( \vec { b } _ { j } \cdot \vec { r } \right) \right) . \tag{7}
\end{equation*}
$$

Here

$$
\vec { b } _ { 1 } = \vec { k } _ { 2 } - \vec { k } _ { 3 } , \quad \vec { b } _ { 2 } = \vec { k } _ { 3 } - \vec { k } _ { 1 } , \quad \vec { b } _ { 3 } = \vec { k } _ { 1 } - \vec { k } _ { 2 } ,
$$

or in terms of the Levi-Civita symbol, $\vec { b } _ { k } = \varepsilon _ { i j k } \left( \vec { k } _ { i } - \vec { k } _ { j } \right)$. Incidentally, they are known as the reciprocal lattice vectors.

## D. 2 (0.5 points)

Argument: Observe that rotation by $60 ^ { \circ }$ maps the three vectors $\vec { b } _ { 1,2,3 }$ into the relabelled triplet of $- \vec { b }$ 's.

## D. 3 (1.2 points)

We find

$$
\begin{equation*}
V ( x , y ) = - \alpha E _ { 0 } ^ { 2 } \left\{ \frac { 3 } { 2 } + \cos ( k y \sqrt { 3 } ) + \cos \left( \frac { 3 k x } { 2 } + \frac { k y \sqrt { 3 } } { 2 } \right) + \cos \left( \frac { 3 k x } { 2 } - \frac { k y \sqrt { 3 } } { 2 } \right) \right\} , \tag{8}
\end{equation*}
$$

and deduce

$$
\begin{equation*}
V _ { X } ( x ) = - \alpha E _ { 0 } ^ { 2 } \left\{ \frac { 5 } { 2 } + 2 \cos \frac { 3 k x } { 2 } \right\} . \tag{9}
\end{equation*}
$$

The potential has a simple cosine form, and the origin in an obvious minimum. Its replica appear at multiples of $\Delta x = 4 \pi / ( 3 k )$. In the midpoint between any two minima, e.g. at $x = \Delta x / 2 = 2 \pi / ( 3 k )$, the function $V _ { X } ( x )$ has its maxima.

Concerning the behaviour along the $y$ axis, we have

$$
\begin{equation*}
V _ { Y } ( y ) = - \alpha E _ { 0 } ^ { 2 } \left\{ \frac { 3 } { 2 } + \cos 2 \varphi + 2 \cos \varphi \right\} , \quad \varphi = \sqrt { 3 } k y / 2 . \tag{10}
\end{equation*}
$$

Looking for the extrema, we find the equation

$$
\begin{equation*}
\sin 2 \varphi + \sin \varphi = 0 . \tag{11}
\end{equation*}
$$

○ $\varphi = 0$ (corresponding to $y = 0$ ) is the 'deep' minimum - the lattice site;
○ $\varphi = \pi$ (corresponding to $y = \frac { 2 \pi } { \sqrt { 3 } k }$ ) is the 'shallow' minimum (later shown to be a saddle point of $V ( x , y ) )$;
○ $\varphi = 2 \pi / 3$ and $\varphi = 4 \pi / 3$ (corresponding to $y = \frac { 4 \pi } { 3 \sqrt { 3 } k }$ and $y = \frac { 8 \pi } { 3 \sqrt { 3 } k }$, respectively) are maxima.


## D. 4 (0.8 points)

We review the minima found in the previous question and eliminate the saddle point at $( 0,2 \pi / 3 \sqrt { 3 } k )$. The actual minima of the 2D potential landscape $V ( x , y )$ are:

○ $( 0,0 )$ - at the origin;
$\circ ( 4 \pi / ( 3 k ) , 0 )$ - nearest to the origin in the positive direction along the $x$ axis. On the grounds of symmetry we argue that there are six equivalent nearest minima in the directions 0°, ±60°, $\pm 120 ^ { \circ }$, and $180 ^ { \circ }$ with respect to the $x$ axis.

Distance between nearest minima (the lattice constant) $a = 4 \pi / ( 3 k )$. Given that the laser wavelength is $\lambda _ { \text {las } } = 2 \pi / k$, we have $a = \Delta x = 2 \lambda _ { \text {las } } / 3$, thus $a / \lambda _ { \text {las } } = 2 / 3$.

## D. 5 (1.1 points)

The atom's core electrons (all but the one promoted to to a state with a high principal quantum number $n$ ) shield the electric field of the nucleus so that the effective potential for the outer electron resembles that of a hydrogen atom. The attractive force acting on that electron, $F = e ^ { 2 } / \left( 4 \pi \varepsilon _ { 0 } r ^ { 2 } \right)$, gives rise to its centripetal acceleration $a = v ^ { 2 } / r$. Equating $F = m _ { \mathrm { e } } a$ and using the expression for the angular momentum $m _ { \mathrm { e } } v r = n \hbar$ to eliminate the velocity, we find the quantum number $n$ corresponding to the orbit with the radius $r = \lambda _ { \text {las } }$ :

$$
\begin{equation*}
n = \frac { e } { \hbar } \sqrt { \frac { m _ { \mathrm { e } } \lambda } { 4 \pi \varepsilon _ { 0 } } } \approx 85 . \tag{12}
\end{equation*}
$$
