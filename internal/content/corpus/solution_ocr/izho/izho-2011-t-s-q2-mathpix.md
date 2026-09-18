---
id: solution-ocr-izho-2011-t-s-q2
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2011_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2011-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Theoretical Question 2 (10 points) Electrical conductivity of metals

## Ohm's law

1. [1 point]

In accordance with the Joule-Lentz law, the heat power released in the conductor is found as

$$
\begin{equation*}
P = \frac { U ^ { 2 } } { R } , \tag{1}
\end{equation*}
$$

which means that the specific heat power $P _ { V }$ is written as

$$
\begin{equation*}
P _ { V } = \frac { U ^ { 2 } } { R V } = \frac { U ^ { 2 } } { R S l } . \tag{2}
\end{equation*}
$$

With the aid of

$$
\begin{equation*}
R = \rho \frac { l } { S } = \frac { 1 } { \sigma } \frac { l } { S } \text { and } E = \frac { U } { l } \text {, } \tag{3}
\end{equation*}
$$

one gets

$$
\begin{equation*}
P _ { V } = \sigma E ^ { 2 } . \tag{4}
\end{equation*}
$$

## The Drude model

2. [1 point]

The second law of Newton for the electron motion in a constant electric field is read as

$$
\begin{equation*}
m \mathbf { a } = \mathbf { F } = - e \mathbf { E } . \tag{5}
\end{equation*}
$$

It follows from Eq.(5) that for the time interval $\tau$ the electron passes the distance

$$
\begin{equation*}
s = \frac { a \tau ^ { 2 } } { 2 } , \tag{6}
\end{equation*}
$$

which means that the module of the average velocity of the electron is

$$
\begin{equation*}
u = \frac { s } { \tau } = \frac { a \tau } { 2 } = \frac { e E \tau } { 2 m } , \tag{7}
\end{equation*}
$$

or, in the vector form,

$$
\begin{equation*}
\mathbf { u } = - \frac { e \tau } { 2 m } \mathbf { E } . \tag{8}
\end{equation*}
$$

3. [1 point]

The current density depends on the electron number density, its electric charge, and its average velocity as follows:

$$
\begin{equation*}
\mathbf { j } = - n e \mathbf { u } = \frac { e ^ { 2 } n \tau } { 2 m } \mathbf { E } , \tag{9}
\end{equation*}
$$

which is Ohm's law with the specific conductivity found as

$$
\begin{equation*}
\sigma = \frac { e ^ { 2 } n \tau } { 2 m } . \tag{10}
\end{equation*}
$$

4. [1 point]

Each electron transfers its kinetic energy at the end of the acceleration, i.e. at the moment of collision with an ion,


$$
\begin{equation*}
E _ { k } = \frac { m u _ { \max } ^ { 2 } } { 2 } = \frac { m } { 2 } \left( \frac { e E \tau } { m } \right) ^ { 2 } . \tag{11}
\end{equation*}
$$

By definition there are $n$ electrons in the cubic meter of the conductor, and each of them transfers its kinetic energy (11) for the time interval $\tau$. Thus, the total specific energy $Q _ { V }$ transferred by electrons to the crystal lattice in the unit of volume and in the unit of time,

$$
\begin{equation*}
Q _ { V } = \frac { n E _ { k } } { \tau } = \frac { n m u ^ { 2 } } { 2 \tau } = \frac { e ^ { 2 } n \tau } { 2 m } E ^ { 2 } = \sigma E ^ { 2 } . \tag{12}
\end{equation*}
$$

This expression coincides with Eq.(4), thus proving the validity of the Joule-Lenz law in the Drude model.

## Magnetoresistance

5. [1 point]

In the presence of magnetic field the equation of motion for the electron is written as

$$
\begin{equation*}
m \frac { d \mathbf { u } } { d t } = - e \mathbf { E } - e \mathbf { u } \times \mathbf { B } . \tag{13}
\end{equation*}
$$

The projections on the coordinate axes are found as

$$
\begin{align*}
m \frac { d u _ { x } } { d t } & = e E + e B u _ { y }  \tag{14}\\
m \frac { d u _ { y } } { d t } & = - e B u _ { x }  \tag{15}\\
m \frac { d u _ { z } } { d t } & = 0 \tag{16}
\end{align*}
$$

Eq.(16) shows that the electron trajectory lies in $X Y$ plane. Substituting $u _ { x } ^ { \prime } = u _ { x }$, $u _ { y } ^ { \prime } = u _ { y } + E / B$ into Eqs. (14)-(15), we obtain

$$
\begin{align*}
& m \frac { d u _ { x } ^ { \prime } } { d t } = e B u _ { y }  \tag{17}\\
& m \frac { d u _ { y } ^ { \prime } } { d t } = - e B u _ { x } ^ { \prime } \tag{18}
\end{align*}
$$

Solutions to Eqs. (17) and (18) are derived as harmonic oscillations of the form

$$
\begin{align*}
& u _ { x } ^ { \prime } = A \cos ( \omega t + \alpha ) ,  \tag{19}\\
& u _ { y } ^ { \prime } = A \sin ( \omega t + \alpha ) , \tag{20}
\end{align*}
$$

or, in terms of the previous variables,

$$
\begin{align*}
& u _ { x } = A \cos ( \omega t + \alpha )  \tag{21}\\
& u _ { y } = A \sin ( \omega t + \alpha ) - \frac { E } { B } \tag{22}
\end{align*}
$$

where $\omega = e B / m$.
From initial conditions $u _ { x } = 0$ and $u _ { y } = 0$, we determine the constants $A = E / B$ and $\alpha = \pi / 2$. Substitution into Eqs. (21) and (22) yields

$$
\begin{align*}
& u _ { x } ( t ) = \frac { E } { B } \sin \left( \frac { e B } { m } t \right) ,  \tag{23}\\
& u _ { y } ( t ) = - \frac { E } { B } \left[ 1 - \cos \left( \frac { e B } { m } t \right) \right] . \tag{24}
\end{align*}
$$


## 6. [2 points]

At small magnitude of the magnetic field induction, Eq. (23) takes the form

$$
\begin{equation*}
u _ { x } = \frac { e E } { m } t - \frac { e ^ { 3 } E B ^ { 2 } } { 6 m ^ { 3 } } t ^ { 3 } . \tag{25}
\end{equation*}
$$

The displacement of the electron along the $O X$ axis over the time interval $\tau$ equals

$$
\begin{equation*}
s = \frac { e E } { 2 m } \tau ^ { 2 } - \frac { e ^ { 3 } E B ^ { 2 } } { 24 m ^ { 3 } } \tau ^ { 4 } , \tag{26}
\end{equation*}
$$

and the average speed is found as

$$
\begin{equation*}
u _ { a v } = \frac { s } { \tau } = \frac { e E } { 2 m } \tau - \frac { e ^ { 3 } E B ^ { 2 } } { 24 m ^ { 3 } } \tau ^ { 3 } . \tag{27}
\end{equation*}
$$

Thus, we are able to determine the relative deviation of the specific conductivity as

$$
\begin{equation*}
\frac { \Delta \sigma } { \sigma } = \frac { n e u _ { a v } ( B ) - n e u _ { a v } ( B = 0 ) } { n e u _ { a v } ( B = 0 ) } = - \frac { 1 } { 12 } \left( \frac { e \tau B } { m } \right) ^ { 2 } , \tag{28}
\end{equation*}
$$

and, therefore,

$$
\begin{equation*}
\mu = - \frac { 1 } { 12 } \left( \frac { e \tau } { m } \right) ^ { 2 } , \quad v = 2 . \tag{29}
\end{equation*}
$$

## The Hall effect

## 7. [0.5 points]

The Lorentz force acting on the electrons is directed downward, therefore the negative charge is accumulated near the bottom face.

## 8. [1.5 points]

Since the electrons are accumulated near the bottom face of the bar, the Hall electric field is oppositely directed with respect to the $O Y$ axis. Hence, the electron equation of motion (13) is rewritten as

$$
\begin{align*}
& m \frac { d u _ { x } } { d t } = e E + e B u _ { y } ,  \tag{30}\\
& m \frac { d u _ { y } } { d t } = e E _ { H } - e B u _ { x } ,  \tag{31}\\
& m \frac { d u _ { z } } { d t } = 0 . \tag{32}
\end{align*}
$$

Again, the electron trajectory lies in the $X Y$ plane. Making substitution $u _ { x } ^ { \prime } = u _ { x } - E _ { H } / B$, $u _ { y } ^ { \prime } = u _ { y } + E / B$ in Eqs. (30) and (31), one gets

$$
\begin{align*}
& m \frac { d u _ { x } ^ { \prime } } { d t } = e B u _ { y } ^ { \prime }  \tag{33}\\
& m \frac { d u _ { y } ^ { \prime } } { d t } = - e B u _ { x } ^ { \prime } . \tag{34}
\end{align*}
$$

Solutions to Eqs. (33) and (34) are again derived as harmonic oscillations of the form

$$
\begin{align*}
& u _ { x } ^ { \prime } = A \cos ( \omega t + \alpha ) ,  \tag{35}\\
& u _ { y } ^ { \prime } = A \sin ( \omega t + \alpha ) , \tag{36}
\end{align*}
$$

or, in terms of the previous variables,

$$
\begin{equation*}
u _ { x } = A \cos ( \omega t + \alpha ) + \frac { E _ { H } } { B } , \tag{37}
\end{equation*}
$$


$$
\begin{equation*}
u _ { y } = A \sin ( \omega t + \alpha ) - \frac { E } { B } . \tag{38}
\end{equation*}
$$

From initial conditions $u _ { x } = 0$ and $u _ { y } = 0$, we obtain the following final solution

$$
\begin{align*}
& u _ { x } ( t ) = \frac { E } { B } \sin \left( \frac { e B } { m } t \right) + \frac { E _ { H } } { B } \left[ 1 - \cos \left( \frac { e B } { m } t \right) \right] ,  \tag{39}\\
& u _ { y } ( t ) = \frac { E _ { H } } { B } \sin \left( \frac { e B } { m } t \right) - \frac { E } { B } \left[ 1 - \cos \left( \frac { e B } { m } t \right) \right] . \tag{40}
\end{align*}
$$

9. [1 point]

At small magnitudes of the magnetic field induction, the condition for zero final displacement $y ( \tau ) = 0$ along the $O Y$ axis at the time moment $\tau$

$$
\begin{equation*}
\int _ { 0 } ^ { \tau } u _ { y } ( t ) d t = 0 \Rightarrow E _ { H } = \frac { e E \tau } { 3 m } B , \tag{41}
\end{equation*}
$$

or

$$
\begin{equation*}
E _ { H } = \frac { 2 j } { 3 n e } B . \tag{42}
\end{equation*}
$$
