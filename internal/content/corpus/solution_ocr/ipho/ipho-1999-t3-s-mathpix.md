---
id: solution-ocr-ipho-1999-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1999/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-1999-t3]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## Solution

1A. Assuming - as outlined in the text - that the orbit is circular, and relating the radial acceleration $\frac { V ^ { 2 } } { R }$ to the gravitational field $\frac { G M _ { \mathrm { S } } } { R ^ { 2 } }$ (where $M _ { \mathrm { S } }$ is the solar mass) we obtain Jupiter's orbital speed $V = \sqrt { \frac { G M _ { \mathrm { S } } } { R } } \approx 1.306 \cdot 10 ^ { 4 } \mathrm {~m} / \mathrm { s }$.
The following alternative solution is also acceptable:
1B. Since we treat Jupiter's motion as circular and uniform, $V = \omega R = \frac { 2 \pi R } { y _ { \mathrm { J } } }$, where $y _ { \mathrm { J } }$ is the revolution period of Jupiter, which is given in the list of the general physical constants.
2. The two gravitational forces on the space probe are equal when
$$
\begin{equation*}
\frac { G M m } { \rho ^ { 2 } } = \frac { G M _ { \mathrm { S } } m } { ( R - \rho ) ^ { 2 } } \tag{2}
\end{equation*}
$$
(where $\rho$ is the distance from Jupiter and $M$ is Jupiter's mass), whence
$$
\begin{equation*}
\sqrt { M } ( R - \rho ) = \rho \sqrt { M _ { \mathrm { S } } } \tag{3}
\end{equation*}
$$
and
$$
\begin{equation*}
\rho = \frac { \sqrt { M } } { \sqrt { M _ { \mathrm { S } } } + \sqrt { M } } R = 0.02997 R = 2.333 \cdot 10 ^ { 10 } \mathrm {~m} \tag{4}
\end{equation*}
$$
and therefore the two gravitational attractions are equal at a distance of about 23.3 million kilometers from Jupiter (about 334 Jupiter radii).
3. With a simple Galilean transformation we find that the velocity components of the probe in Jupiter's reference frame are
$$
\left\{ \begin{array} { l }
v ^ { \prime } { } _ { x } = V \\
v ^ { \prime } { } _ { y } = v _ { 0 }
\end{array} \right.
$$
and therefore - in Jupiter's reference frame - the probe travels with an angle $\theta _ { 0 } = \arctan \frac { v _ { 0 } } { V }$ with respect to the $x$ axis and its speed is $v ^ { \prime } = \sqrt { v _ { 0 } ^ { 2 } + V ^ { 2 } }$ (we also note that $\cos \theta _ { 0 } = \frac { V } { \sqrt { v _ { 0 } ^ { 2 } + V ^ { 2 } } } = \frac { V } { v ^ { \prime } }$

and $\sin \theta _ { 0 } = \frac { v _ { 0 } } { \sqrt { v _ { 0 } ^ { 2 } + V ^ { 2 } } } = \frac { v _ { 0 } } { v ^ { \prime } }$ ).
Using the given values we obtain $\theta _ { 0 } = 0.653 \mathrm { rad } \approx 37.4 ^ { \circ }$ and $v ^ { \prime } = 1.65 \cdot 10 ^ { 4 } \mathrm {~m} / \mathrm { s }$.

4. Since the probe trajectory can be described only approximately as the result of a two-body gravitational interaction (we should also take into account the interaction with the Sun and other planets) we assume a large but not infinite distance from Jupiter and we approximate the total energy in Jupiter's reference frame as the probe's kinetic energy at that distance:
$$
\begin{equation*}
E \approx \frac { 1 } { 2 } m v ^ { \prime 2 } \tag{5}
\end{equation*}
$$
The corresponding numerical value is $E = 112 \mathrm { GJ }$.
5. Equation (1) shows that the radial distance becomes infinite, and its reciprocal equals zero, when
$$
\begin{equation*}
1 + \sqrt { 1 + \frac { 2 E v ^ { \prime 2 } b ^ { 2 } } { G ^ { 2 } M ^ { 2 } m } } \cos \theta = 0 \tag{7}
\end{equation*}
$$
namely when
$$
\begin{equation*}
\cos \theta = - \frac { 1 } { \sqrt { 1 + \frac { 2 E v ^ { \prime 2 } b ^ { 2 } } { G ^ { 2 } M ^ { 2 } m } } } \tag{8}
\end{equation*}
$$
We should also note that the radial distance can't be negative, and therefore its acceptable values are those satisfying the equation
$$
\begin{equation*}
1 + \sqrt { 1 + \frac { 2 E v ^ { \prime 2 } b ^ { 2 } } { G ^ { 2 } M ^ { 2 } m } } \cos \theta \geq 0 \tag{9}
\end{equation*}
$$
or
$$
\begin{equation*}
\cos \theta \geq - \frac { 1 } { \sqrt { 1 + \frac { 2 E v ^ { \prime 2 } b ^ { 2 } } { G ^ { 2 } M ^ { 2 } m } } } \tag{10}
\end{equation*}
$$
The solutions for the limiting case of eq. (10) (i.e. when the equal sign applies) are:
$$
\begin{equation*}
\theta _ { \pm } = \pm \arccos \left[ - \left( 1 + \frac { 2 E v ^ { \prime 2 } b ^ { 2 } } { G ^ { 2 } M ^ { 2 } m } \right) ^ { - 1 / 2 } \right] = \pm \left( \pi - \arccos \frac { 1 } { \sqrt { 1 + \frac { 2 E v ^ { \prime 2 } b ^ { 2 } } { G ^ { 2 } M ^ { 2 } m } } } \right) \tag{11}
\end{equation*}
$$

and therefore the angle $\Delta \theta$ (shown in figure 2 ) between the two hyperbola asymptotes is given by:

$$
\begin{align*}
\Delta \theta & = \left( \theta _ { + } - \theta _ { - } \right) - \pi \\
& = \pi - 2 \arccos \frac { 1 } { \sqrt { 1 + \frac { 2 E v ^ { \prime 2 } b ^ { 2 } } { G ^ { 2 } M ^ { 2 } m } } }  \tag{12}\\
& = \pi - 2 \arccos \frac { 1 } { \sqrt { 1 + \frac { v ^ { \prime 4 } b ^ { 2 } } { G ^ { 2 } M ^ { 2 } } } }
\end{align*}
$$

In the last line, we used the value of the total energy as computed in the previous section.
6. The angular deviation is a monotonically decreasing function of the impact parameter, whence the deviation has a maximum when the impact parameter has a minimum. From the discussion in the previous section we easily see that the point of nearest approach is when $\theta = 0$, and in this case the minimum distance between probe and planet center is easily obtained from eq. (1):

$$
\begin{equation*}
r _ { \min } = \frac { v ^ { \prime 2 } b ^ { 2 } } { G M } \left( 1 + \sqrt { 1 + \frac { v ^ { \prime 4 } b ^ { 2 } } { G ^ { 2 } M ^ { 2 } } } \right) ^ { - 1 } \tag{13}
\end{equation*}
$$

By inverting equation (13) we obtain the impact parameter

$$
\begin{equation*}
b = \sqrt { r _ { \min } ^ { 2 } + \frac { 2 G M } { v ^ { \prime 2 } } r _ { \min } } \tag{14}
\end{equation*}
$$

We may note that this result can alternatively be obtained by considering that, due to the conservation of angular momentum, we have

$$
L = m v ^ { \prime } b = m v _ { \min } ^ { \prime } r _ { \min }
$$

where we introduced the speed corresponding to the nearest approach. In addition, the conservation of energy gives

$$
E = \frac { 1 } { 2 } m v ^ { \prime 2 } = \frac { 1 } { 2 } m v _ { \min } ^ { \prime 2 } - \frac { G M m } { r _ { \min } }
$$


and by combining these two equations we obtain equation (14) again.
The impact parameter is an increasing function of the distance of nearest approach; therefore, if the probe cannot approach Jupiter's surface by less than two radii (and thus $r _ { \text {min } } =$ $3 R _ { \mathrm { B } }$, where $R _ { \mathrm { B } }$ is Jupiter's body radius), the minimum acceptable value of the impact parameter is

$$
\begin{equation*}
b _ { \min } = \sqrt { 9 R _ { \mathrm { B } } ^ { 2 } + \frac { 6 G M } { v ^ { \prime 2 } } R _ { \mathrm { B } } } \tag{15}
\end{equation*}
$$

From this equation we finally obtain the maximum possible deviation:

$$
\begin{equation*}
\Delta \theta _ { \max } = \pi - 2 \arccos \frac { 1 } { \sqrt { 1 + \frac { v ^ { \prime 4 } b _ { \min } ^ { 2 } } { G ^ { 2 } M ^ { 2 } } } } = \pi - 2 \arccos \frac { 1 } { \sqrt { 1 + \frac { v ^ { \prime 4 } } { G ^ { 2 } M ^ { 2 } } \left( 9 R _ { \mathrm { B } } ^ { 2 } + \frac { 6 G M } { v ^ { \prime 2 } } R _ { \mathrm { B } } \right) } } \tag{16}
\end{equation*}
$$

and by using the numerical values we computed before we obtain:

$$
b _ { \min } = 4.90 \cdot 10 ^ { 8 } \mathrm {~m} \approx 7.0 R _ { \mathrm { B } } \quad \text { and } \quad \Delta \theta _ { \max } = 1.526 \mathrm { rad } \approx 87.4 ^ { \circ }
$$

7. The final direction of motion with respect to the $x$ axis in Jupiter's reference frame is given by the initial angle plus the deviation angle, thus $6 + 16$ if the probe passes behind the planet. The final velocity components in Jupiter's reference frame are therefore:
$$
\left\{ \begin{array} { l }
v _ { x } ^ { \prime } = v ^ { \prime } \cos \left( \theta _ { 0 } + \Delta \theta \right) \\
v _ { y } ^ { \prime } = v ^ { \prime } \sin \left( \theta _ { 0 } + \Delta \theta \right)
\end{array} \right.
$$
whereas in the Sun reference frame they are
$$
\left\{ \begin{array} { c }
v _ { x } ^ { \prime \prime } = v ^ { \prime } \cos \left( \theta _ { 0 } + \Delta \theta \right) - V \\
v _ { y } ^ { \prime \prime } = v ^ { \prime } \sin \left( \theta _ { 0 } + \Delta \theta \right)
\end{array} \right.
$$
Therefore the final probe speed in the Sun reference frame is

$$
\begin{align*}
v ^ { \prime \prime } & = \sqrt { \left( v ^ { \prime } \cos \left( \theta _ { 0 } + \Delta \theta \right) - V \right) ^ { 2 } + \left( v ^ { \prime } \sin \left( \theta _ { 0 } + \Delta \theta \right) \right) ^ { 2 } } \\
& = \sqrt { v _ { 0 } ^ { 2 } + 2 V ^ { 2 } - 2 v ^ { \prime } V \cos \left( \theta _ { 0 } + \Delta \theta \right) } \\
& = \sqrt { v _ { 0 } ^ { 2 } + 2 V ^ { 2 } - 2 v ^ { \prime } V \left( \cos \theta _ { 0 } \cos \Delta \theta - \sin \theta _ { 0 } \sin \Delta \theta \right) }  \tag{17}\\
& = \sqrt { v _ { 0 } ^ { 2 } + 2 V ^ { 2 } - 2 V \left( V \cos \Delta \theta - v _ { 0 } \sin \Delta \theta \right) } \\
& = \sqrt { v _ { 0 } \left( v _ { 0 } + 2 V \sin \Delta \theta \right) + 2 V ^ { 2 } ( 1 - \cos \Delta \theta ) }
\end{align*}
$$

8. Using the value of the maximum possible angular deviation, the numerical result is $v ^ { \prime \prime } = 2.62 \cdot 10 ^ { 4 }$ m/s.


## Grading guidelines

1. 0.4 Law of gravitation, or law of circular uniform motion
    0.4 Correct approach
    0.4+0.3 Correct results for velocity of Jupiter
2. 0.3 Correct approach
    0.4+0.3 Correct results for distance from Jupiter
3. 1 Correct transformation between reference frames
    0.3+0.2 Correct results for probe speed in Jupiter reference frame
    0.3+0.2 Correct results for probe angle
4. 0.8 Understanding how to handle the potential energy at infinity
    0.2 Numerical result for kinetic energy
5. 0.6 Correct approach
    0.6 Equation for the orientation of the asymptotes
    0.8 Equation for the probe deflection angle
6. 0.3+0.2 Correct results for minimum impact parameter
    0.3+0.2 Correct results for maximum deflection angle
7. 0.5 Equation for velocity components in the Sun reference frame
    0.5 Equation for speed as a function of angular deflection
8. 0.5 Numerical result for final speed

For "correct results" two possible marks are given: the first one is for the analytical equation and the second one for the numerical value.
For the numerical values a full score cannot be given if the number of digits is incorrect (more than one digit more or less than those given in the solution) or if the units are incorrect or missing.
