---
id: solution-ocr-nbpho-2007-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2007_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2007-coefficient-friction, nbpho-2007-laser, nbpho-2007-mars, nbpho-2007-pendulum, nbpho-2007-temporal-focusing, nbpho-2007-truck, nbpho-2007-wire]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## I. Wire (7 pts)

1) Using the Ohm's law in differential form, $E = \rho j$, and noting that the electric field must be the same both in the core and in the coating, we conclude $j _ { c } \rho _ { c } = j _ { a } \rho _ { a } \Rightarrow j _ { c } = \mathrm { x } _ { a } \rho _ { a } / \rho _ { c }$. On the other hand, the net current $I = \frac { \pi } { 4 } \left[ a ^ { 2 } j _ { c } + \left( b ^ { 2 } - a ^ { 2 } \right) j _ { a } \right] = \frac { \pi } { 4 } j _ { a } \left( b ^ { 2 } - a ^ { 2 } + a ^ { 2 } \rho _ { a } / \rho _ { c } \right)$, hence

$$
j _ { a } = \frac { 4 } { \pi } \frac { I } { b ^ { 2 } + a ^ { 2 } \left( \rho _ { a } - \rho _ { c } \right) / \rho _ { c } } \approx 0.15 \mathrm {~A} / \mathrm { mm } ^ { 2 } ; j _ { c } \approx 0.25 \mathrm {~A} / \mathrm { mm } ^ { 2 } .
$$

2) Writing down the circulation theorem for a circular concentric loop of radius $c$ around the straight wire, $2 \pi c B _ { 1 } = \mu _ { 0 } I$, we obtain $B _ { 1 } =$ $\mu _ { 0 } I / 2 \pi c = 2 \frac { I } { c } \cdot 10 ^ { - 7 } \mathrm { H } \cdot \mathrm { m } ^ { - 1 } = 4.8 \cdot 10 ^ { - 5 } T$.
3) Using the technique as before, but noting that the current flowing through the smaller loop of radius $a / 2$ is $I _ { c } = j _ { c } \frac { \pi } { 4 } a ^ { 2 }$, we obtain $B _ { 2 } = \mu _ { 0 } I _ { c } / \pi a = \mu _ { 0 } j _ { c } a / 4 = \pi j _ { c } a \cdot 10 ^ { - 7 } \mathrm { H } \cdot \mathrm { m } ^ { - 1 } = 2.0 \cdot 10 ^ { - 4 } T$.

## 2. Pendulum (7 pts)

1) The smallness of the oscillations means that the angle of the arc formed by the rod is small, $\alpha = l / R \ll 1$. Therefore, the force returning the ball is almost horizontal, $F = k / R = k \alpha / l$, and the horizontal displacement of the ball is $x = R ( 1 - \cos \alpha ) \approx R \alpha ^ { 2 } / 2 = l \alpha / 2$, hence $\alpha = 2 x / l$.

For horizontal equation of motion, we can neglect the gravity force, which is of the order of $m g \alpha \ll \alpha k / l$; the right-hand side here happens to be the elastic force. So, $m \ddot { x } = - k \alpha / l = - 2 k x / l ^ { 2 }$, hence $\omega = \sqrt { 2 k / m } / l$; the period $T = 2 \pi / \omega = \pi l \sqrt { 2 m / k }$.
2) Elastic energy of the rod depends apparently only on its shape, i.e. on the curvature radius $R$, or, equivalently, on the binding angle $\alpha$. First, we derive the expression for that energy: $\Pi _ { r } = \int _ { 0 } ^ { x } F d x =$ $\int \left( 2 k x / l ^ { 2 } \right) d x = k x ^ { 2 } / l ^ { 2 } = k \alpha ^ { 2 } / 4$. This is to be compared with the change of the gravitational potential energy $\Pi _ { g } = - m g ( l - R \sin \alpha ) =$ $- m g l ( 1 - \sin \alpha / \alpha ) \approx - m g l \alpha ^ { 2 } / 6$. So, the vertical position is stable, if $k \alpha ^ { 2 } / 4 - m g l \alpha ^ { 2 } / 6 > 0$, i.e. $3 k > 2 m g l$.

Remark: a simple-minded force balance of the ball to the direction, perpendicular to the rod leads to another result $k > m g l$. This is not correct, because if we bind the rod with a force applied to its tip, small displacements of the tip are not perpendicular to the rod (as one might think). In particular, this means that if there are both perpendicular force $F$ and tangential tension $T$ in the rod, the curvature radius $R$ will depend also on the tension $T$. In our solution, we avoided such kind of complications by noting that the elastic energy depends only on the shape of the rod (if we bind the rod with some force $F$ while keeping $T = 0$, we don't need to bother about this effect).

## 3. Temporal focusing (10 pts)

1) Apparently, $t _ { 0 } = ( a + b ) / v _ { 0 } = ( a + b ) \sqrt { m / 2 U _ { 0 } e }$.
2) Apparently, $t = a / v _ { a } + b / v _ { b } \approx t _ { 0 } - \left[ a \left( v _ { a } - v _ { 0 } \right) + b \left( v _ { b } - v _ { 0 } \right) \right] / v _ { 0 } ^ { 2 }$. On the other hand, for constant voltage $U ( t ) , v _ { b } = v _ { 0 }$. For the interval between $B$ and $C$, we have $\Delta \left( m v ^ { 2 } / 2 \right) \approx m v _ { 0 } \left( v _ { a } - v _ { 0 } \right) = - U e$. So,

$$
t = t _ { 0 } + U e a / m v _ { 0 } ^ { 3 } = t _ { 0 } + \frac { U } { U _ { 0 } } \frac { a } { 2 } \sqrt { \frac { m } { 2 U _ { 0 } e } } .
$$

3) For the changing voltage, we can use the result of the previous question, but the voltage value should be taken at the moment of electron passing the gap. Also, the terminal velocity is changed, $v _ { 1 } - v _ { 0 }$ is related to the change of the kinetic energy $e \left[ U \left( t + t _ { a } \right) - U ( t ) \right]$. The travel time of the later electrons passing $B$ at a certain moment of time $t > 0$ should as much shorter as it was delayed, i.e.

$$
t _ { 1 } - t _ { 2 } = \sqrt { \frac { m } { 8 U _ { 0 } ^ { 3 } e } } \left\{ a [ U ( 0 ) - U ( t ) ] + b \left[ U \left( t + t _ { a } \right) - U ( t ) \right] \right\} = t ,
$$

where the flight time $t _ { a } \approx a / v _ { 0 }$ [since $U \ll U _ { 0 }$ ]. Using the suggested approximation, we obtain

$$
\left. \sqrt { \frac { m } { 8 U _ { 0 } ^ { 3 } e } } b \left[ U \left( t + a / v _ { 0 } \right) - U ( t ) \right] \right\} = t .
$$

If we seek a quadratic solution $U ( t ) = A t ^ { 2 } + B t$, we get

$$
2 A t _ { a } \left( t + t _ { a } / 2 \right) + B t _ { a } = \frac { t } { b } \sqrt { \frac { 8 U _ { 0 } ^ { 3 } e } { m } } .
$$

So,

$$
A = \sqrt { \frac { 8 U _ { 0 } ^ { 3 } e } { m } } / 2 t _ { a } b = \sqrt { \frac { 8 U _ { 0 } ^ { 3 } e } { m } } \frac { \sqrt { 2 e U _ { 0 } / m } } { a b } = \frac { 4 U _ { 0 } ^ { 2 } e } { m a b } ,
$$

and $B = - A t _ { a }$. Finally we obtain

$$
U ( t ) = \frac { 4 U _ { 0 } ^ { 2 } e } { m a b } t \left( t - a \sqrt { m / 2 U _ { 0 } e } \right) .
$$

4) Lost are those electrons, which are in the interval between $B$ and $C$, when the voltage drops to 0. The duration of the time interval, when these were emitted, is $\tau = a / v _ { 0 }$. So, the asked fraction is given by $\tau / T = \frac { a } { T } \sqrt { m / 2 U _ { 0 } e }$.

## 4. Coefficient of friction (12 pts)

1) This is a straightforward question: we measure the tangent of the slope of the board, when the brick starts sliding, $\mu _ { 1 } = \tan \alpha _ { 1 }$, for the given setup, $\mu _ { 1 } \approx 0.24$.
2) We put the ball and brick together on the slope, the ball touching both the brick and board and being upwards on the slope. So, the ball pushes the brick down and the sliding is expected to take place for somewhat smaller sloping angles. For the given setup, that critical angle turns out to give $\tan \beta \approx 0.12$.

Now we need to express $\mu$ knowing $\mu _ { 2 } \approx 0.24$ and $\beta =$ arctan 0.12. First we write the torque balance for the ball with respect to the touching pint with the board: $m g R \sin \beta = \mu N R + N R$, where $N$ is the pressure force between the ball and the brick. Hence, $N = \frac { m g } { \mu + 1 } \sin \beta$.

Now, we use the normal (to the board) force balance for the brick, to find the pressure force between the board and the brick: $N _ { 2 } =$ $M g \cos \beta + \frac { \mu m g } { \mu + 1 } \sin \beta$. Finally, we have the tangential force balance for the brick:

$$
\frac { m g } { \mu + 1 } \sin \beta + M g \sin \beta = \mu _ { 2 } g \left( M \cos \beta + \frac { \mu m } { \mu + 1 } \sin \beta \right) .
$$

This equation can be simplified to

$$
\frac { m } { M } + \mu + 1 = \mu _ { 2 } \left[ ( \mu + 1 ) \cot \beta + \mu \frac { m } { M } \right] ,
$$

from where

$$
\mu = \frac { \frac { m } { M } + 1 - \mu _ { 2 } \cot \beta } { \mu _ { 2 } \left( \cot \beta + \frac { m } { M } \right) - 1 }
$$

Using the measured values we get $\mu \approx 0.2$.

## 5. Rotating disk (7 pts)

1) We notice that there is no image of the orange pulse, hence it must have taken place immediately before the shutter release. So the blue pulse is first, red - the second etc. The exposure time must have been triple and quadruple flash interval, $300 \mathrm {~ms} < t < 500 \mathrm {~ms}$.
2) The displacement of the lamp between two subsequent pulses can be represented as the sum of two components: $\vec { r } _ { i } = \vec { v } \tau + 2 R \sin ( \omega \tau / 2 ) \vec { e } _ { i }$, where each next unit vector $\vec { e } _ { i + 1 }$ is rotated with respect to the previous one $\left( \vec { e } _ { i } \right)$ by angle $\omega \tau$. So, if the starting points of the displacement vectors $\vec { r } _ { i }$ coincide, then the end-points must be on a circle, at equal angular distances $\omega \tau$ from each other, see figure.

In our case we redraw the displacement vectors 1,2 and 3 as vectors with common origin, $\overrightarrow { P A } , \overrightarrow { P B }$, and $\overrightarrow { P C }$. Since the starting points of the vectors $2 R \sin ( \omega \tau / 2 ) \vec { e } _ { i }$ are brought together to the point $O$, their endpoints lay on the circle, the center of which can be found as the center of the circle drawn around the triangle $A B C$.
![](../../../figures/solution-ocr/973cc85a79735f857958adb3.jpg)

The velocity of center of the disk is found as the ratio of the length $P O$ and the interval $\tau : v \approx 65 \mathrm {~cm} / \mathrm { s }$. The angular velocity is found as the ratio of the angle $\angle A O B = \angle B O C$ and the interval $\tau : \omega \approx 23 \mathrm { rad } / \mathrm { s }$. Radius of the disk is found from the length $| O A | = 2 R \sin ( \omega \tau / 2 ) = 2 R \sin \angle B O C \approx 1.5 R$; using the scale of the figure, $1.5 R \approx 8 \mathrm {~cm}$ and $R \approx 5 \mathrm {~cm}$.


## 6. Truck (7 pts)

1) First, since $l$ is small, $T _ { 1 } \approx T$. From the radial force balance, $N \approx$ $T \alpha = T l / R$, where $\alpha$ is the angle, by which the direction of the rope is changed. From the tangential balance, $T _ { 1 } = T - \mu N = T ( 1 - \mu \alpha )$.
2) If the angle is not small, we divide the touching segment into $M$ small segments and use the previous result: $T _ { i + 1 } = T _ { i } ( 1 - \mu \alpha / M )$. So, $T _ { M } = T ( 1 - \mu \alpha / M ) ^ { M } \rightarrow T e ^ { - \mu \alpha }$ (as $M \rightarrow \infty$ ). So, $T ^ { \prime } = T e ^ { - \mu l / R }$.
3) Using the previous formula and the provided numerical values ( $\alpha =$ $2 \pi$ ), we obtain

$$
T = M g \sin \phi e ^ { - \mu \alpha } \approx 800 \mathrm {~N} .
$$

4) If we re-examine the solution to the second question, we notice that we haven't used the assumption of cylindrical shape. What matters, is just the rotation angle of the tangent to the rope. So, the answer does not change for egg-like cross-section.

## 7. To the Mars (10 pts)

1) Apparently $v _ { 1 } ^ { 2 } = v _ { 0 } ^ { 2 } - 2 g R _ { 0 }$.
2) The trajectory is ellipse touching Earth orbit at its perihelion and Mars orbit at its apohelion..
3) According to the Kepler's third law, the time $T = \frac { 1 } { 2 } T _ { 0 } \left( a / R _ { e } \right) ^ { 3 / 2 }$, where $T _ { 0 } = 1$ year is the period of Earth and $a = \left( R _ { e } + R _ { m } \right) / 2$ is the longer semi-axes of the trajectory. Numerically, $T = 0,70$ years.
4) The full energy (kinetic plus potential) of the space ship is $E =$ $- G m / 2 a = - G m / \left( R _ { e } + R _ { m } \right) = - G m / R _ { e } + \frac { m } { 2 } \left( v _ { 1 } + v _ { e } \right) ^ { 2 }$. So, $\frac { 1 } { 2 } \left( v _ { 1 } + v _ { e } \right) ^ { 2 } = G \frac { R _ { m } } { R _ { e } \left( R _ { e } + R _ { m } \right) } = v _ { e } ^ { 2 } \frac { R _ { m } } { R _ { e } + R _ { m } }$ and

$$
v _ { 1 } = v _ { e } \left( \sqrt { \frac { 2 R _ { m } } { R _ { e } + R _ { m } } } - 1 \right) \approx 0.095 v _ { e } \approx 2.86 \mathrm {~km} / \mathrm { s } .
$$

Hence, $v _ { 0 } = \sqrt { 11.2 ^ { 2 } + 2.86 ^ { 2 } } = 11.6 \mathrm {~km} / \mathrm { s }$.
The relative speed near the Mars can be written using the appropriate change of indices in the expression for $v _ { 1 }$ (alternatively, it can be found analogously to $v _ { 1 }$ ):
we first find the speed with respect to Sun from the expression of the total energy: $v _ { 3 } =$

$$
v _ { 3 } = v _ { m } \left( \sqrt { \frac { 2 R _ { e } } { R _ { e } + R _ { m } } } - 1 \right) \approx - 0.106 v _ { e } \sqrt { \frac { R _ { e } } { R _ { m } } } \approx - 2.59 \mathrm {~km} / \mathrm { s } .
$$

5) Apparently $M _ { i } = m e ^ { v _ { i } / u }$, so that $M _ { a } / M _ { b } = e ^ { \left( v _ { a } - v _ { b } \right) / u } = e ^ { 0.4 } \approx$ 1.5.

## 8. Laser (12 pts)

1) These are concentric circles reflected back towards the laser. They can be seen, if laser light is directed through the hole in the paper and the paper is used as the screen. The position and size of the circles is independent of the incidence angle (for large incidence angles, the circles will be somewhat elongated along the direction of slanting).
2) The exact calculation of the diffraction pattern on such microspheres is very difficult task, evidently beyond the possibilities of an olympiad problem. So, we have to work as a detective, drawing conclusions from the observed data. First, the diffraction pattern is not where the reflection form the stripe would be; so, it doesn't work as a reflecting diffraction grating. If the packing were regular, and the optical path difference (required for the diffraction) were gathered due to scattering on neighboring spheres, there would be a pattern, characteristic to diffraction on crystal lattices (regularly positioned spots). If the optical path difference were gathered due to scattering on neighboring spheres, with irregular packing, the path difference would be random, and hence, the diffraction pattern would be also random. This would not explain the regular circular pattern.

On the other hand, if the optical path difference were gathered on a single sphere, the pattern would be axially symmetric, as is the sphere itself. So, this fits well with all the experimental observations (except for slight elongation of the circles for large incidence angles, which may, perhaps, be explained by the refraction in the coating layer).

On a single sphere, the light is reflected partially back on the front surface, and partially refracts into the sphere, reflects internally and refracts back into the air (in our rough analysis, we neglect multiple partial reflections). For beams falling close to the axes of the sphere, the outgoing beams are reflected almost in the opposite direction. So, in its central part, the sphere acts almost like a reflecting disk.

In our very rough model, we substitute the spheres by disks of approximately the same diameter as the spheres, oriented perpendicularly to the incident beam. Then, all the microspheres provide maxima and minima in the same directions.
3) We measure the diameter of the first dark ring $d \approx 1.1 \mathrm {~cm}$, and the distance between the laser and the strip $l \approx 80 \mathrm {~cm}$. Then, the diameter of the spheres can be estimated as the diameter of the effective lightreflecting disk, $D \approx \lambda l / d \approx 50 \mu \mathrm {~m}$.
