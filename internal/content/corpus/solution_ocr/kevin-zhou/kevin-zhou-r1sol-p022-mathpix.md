---
id: solution-ocr-kevin-zhou-r1sol-p022
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r1-p022]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 22. Four-vectors provide a quick derivation of the relativistic Doppler effect. Given a plane wave, define $k ^ { \mu } = ( \omega , \mathbf { k } )$. Then the plane wave is proportional to $e ^ { i \phi }$, where the phase is
$$
\phi = \omega t - \mathbf { k } \cdot \mathbf { x } = k \cdot x .
$$
Since the phase $\phi$ is Lorentz invariant, and we know $x ^ { \mu }$ is a four-vector, $k ^ { \mu }$ is a four-vector as well.
(a) Show that for light, $k ^ { \mu } k _ { \mu } = 0$.
(b) Consider a light ray with angular frequency $\omega$ traveling along the $x$ axis, and an observer moving with speed $v$ along the $x$-axis. Use an explicit Lorentz transformation to find the angular frequency $\omega ^ { \prime }$ the observer sees, thus rederiving the longitudinal Doppler shift for light.
(c) Now it's easy to go further. Repeat the previous part for a light ray traveling at an arbitrary angle $\theta$ to the $x$ axis. You can do this using either an explicit Lorentz transformation, or just properties of four-vectors.
(d) The angle $\theta$ has different values in the source's frame and the observer's frame. In part (c), we defined it in the source's frame, but the most common form of the result defines $\theta$ in the observer's frame. To get this formula, repeat part (c), but now suppose we're already in the observer's frame, where the source moves with velocity $- v \hat { \mathbf { x } }$, and the light ray is traveling at an angle $\theta$ to the $x$-axis. Find the relationship between $\omega ^ { \prime }$ and $\omega$.

The answer to part (d) is also the final result of USAPhO 2021, problem A2. For more on the relativistic Doppler effect, see section 11.8.2 of Morin. (By the way, now that we have the four-vector formalism set up, it's not that much harder to compute the Doppler effect for waves that travel at general speeds. You probably won't need that result, but it's an example of something that's fairly annoying to derive without four-vectors.)

Solution. (a) For plane waves $\omega = v k$, where $v = c$ for light. Thus the norm is $\omega ^ { 2 } - k ^ { 2 } = 0$.

(b) Setting $c = 1$ now, a light ray traveling along the $x$ axis has $k ^ { \mu } = ( \omega , \omega , 0,0 )$. Applying a boost along the $x$ axis, the new angular frequency is
$$
\omega ^ { \prime } = \left( k ^ { \prime } \right) ^ { 0 } = \gamma ( \omega - v \omega ) = \sqrt { \frac { 1 - v } { 1 + v } } \omega
$$
which is precisely the longitudinal Doppler effect. The $v \omega$ term above is just what we would expect from Galilean physics, while the relativistic factor of $\gamma$ modifies the effect to second order in $v$.
(c) For variety, we'll do this part with four-vectors. We have
$$
k ^ { \mu } = ( \omega , \omega \cos \theta , \omega \sin \theta , 0 ) , \quad v ^ { \mu } = ( \gamma , \gamma v , 0,0 )
$$
and by slightly modifying part (a) of problem 20, we have
$$
\omega ^ { \prime } = k \cdot v = \gamma \omega - \gamma \omega v \cos \theta = \frac { 1 - v \cos \theta } { \sqrt { 1 - v ^ { 2 } } } \omega .
$$
(d) In this case, let $v ^ { \mu }$ be the four-velocity of the source. In the observer's frame,
$$
k ^ { \mu } = \left( \omega ^ { \prime } , \omega ^ { \prime } \cos \theta , \omega ^ { \prime } \sin \theta , 0 \right) , \quad v ^ { \mu } = ( \gamma , - \gamma v , 0,0 )
$$
and the angular frequency measured in the source's frame is
$$
\omega = k \cdot v = \gamma \omega ^ { \prime } + \gamma \omega ^ { \prime } v \cos \theta = \frac { 1 + v \cos \theta } { \sqrt { 1 - v ^ { 2 } } } \omega ^ { \prime } .
$$
Rearranging, we conclude that
$$
\omega ^ { \prime } = \frac { \sqrt { 1 - v ^ { 2 } } } { 1 + v \cos \theta } \omega
$$
which differs from the result of part (c) by second-order terms.

Example 6: Woodhouse 6.6
Four distant stars $S _ { i }$ are observed. Let $\theta _ { i j }$ denote the observed angle between the directions to $S _ { i }$ and $S _ { j }$. Show that the ratio

$$
\frac { \left( 1 - \cos \theta _ { 12 } \right) \left( 1 - \cos \theta _ { 34 } \right) } { \left( 1 - \cos \theta _ { 13 } \right) \left( 1 - \cos \theta _ { 24 } \right) }
$$

is independent of the motion of the observer.


Solution
This Oxford undergraduate exam question is too technical to be relevant to Olympiads, but it shows how four-vectors can be essential. The $\theta _ { i j }$ depend on the motion of the observer because of the aberration effect in problem 10. That is, when you Lorentz transform to a moving observer's frame, it changes the direction of the incoming light. A direct attack on the question would thus require applying the full, four-dimensional Lorentz transformations to four vectors with arbitrary orientations, which would be a nightmare. Here's an alternative: let $k _ { i } ^ { \mu }$ be the wave vectors of an incoming photon from each star. Then

$$
k _ { i } \cdot k _ { j } = \omega _ { i } \omega _ { j } - \mathbf { k } _ { i } \cdot \mathbf { k } _ { j } = \omega _ { i } \omega _ { j } \left( 1 - \cos \theta _ { i j } \right)
$$

where we used $\omega _ { i } = \left| \mathbf { k } _ { i } \right|$. Therefore, the ratio is

$$
\frac { \left( k _ { 1 } \cdot k _ { 2 } \right) \left( k _ { 3 } \cdot k _ { 4 } \right) / \omega _ { 1 } \omega _ { 2 } \omega _ { 3 } \omega _ { 4 } } { \left( k _ { 1 } \cdot k _ { 3 } \right) \left( k _ { 2 } \cdot k _ { 4 } \right) / \omega _ { 1 } \omega _ { 2 } \omega _ { 3 } \omega _ { 4 } } = \frac { \left( k _ { 1 } \cdot k _ { 2 } \right) \left( k _ { 3 } \cdot k _ { 4 } \right) } { \left( k _ { 1 } \cdot k _ { 3 } \right) \left( k _ { 2 } \cdot k _ { 4 } \right) }
$$

which is manifestly independent of frame.
[4] Problem 23. In this problem we'll construct a four-vector $a ^ { \mu }$ for the acceleration of a particle, and use it to derive the Lorentz transformation of the ordinary three-vector acceleration $\mathbf { a } = d \mathbf { v } / d t$.

(a) Explain why $a ^ { \mu } = d u ^ { \mu } / d \tau$ is a four-vector, and why $u \cdot a$ is always zero.
(b) Show that when $\mathbf { v } = v \hat { \mathbf { x } }$, the components of $a ^ { \mu }$ are
$$
a ^ { \mu } = \left( \gamma ^ { 4 } v a _ { x } , \gamma ^ { 4 } a _ { x } , \gamma ^ { 2 } a _ { y } , \gamma ^ { 2 } a _ { z } \right)
$$
where $\gamma = 1 / \sqrt { 1 - v ^ { 2 } }$ as usual.
(c) Let the particle have three-acceleration $\mathbf { a } ^ { \prime }$ in its momentary rest frame $S ^ { \prime }$, i.e. the inertial frame that, at a given moment, has the same velocity as the particle. Show that $a \cdot a = - \left| \mathbf { a } ^ { \prime } \right| ^ { 2 }$.
(d) By Lorentz transforming to $S$ and using part (b), show that the acceleration in frame $S$ is
$$
\mathbf { a } = \left( a _ { x } ^ { \prime } / \gamma ^ { 3 } , a _ { y } ^ { \prime } / \gamma ^ { 2 } , a _ { z } ^ { \prime } / \gamma ^ { 2 } \right) .
$$
As you can see, transformations of three-vector quantities can get quite nasty!

Solution. (a) We know that $u ^ { \mu }$ is a four-vector, and $d \tau$ is Lorentz invariant, so $d u ^ { \mu } / d \tau = a ^ { \mu }$ is a four-vector. Next, we know from an example that $u \cdot u$ is constant, so

$$
\frac { d } { d \tau } ( u \cdot u ) = 2 u \cdot a = 0 .
$$

(b) The four-velocity will be $( \gamma , \gamma \mathbf { v } )$. Since $d \tau = d t / \gamma$, we have $a ^ { \mu } = d u ^ { \mu } / d \tau = \gamma d u ^ { \mu } / d t$, and
$$
\frac { d \gamma } { d t } = \left( 1 - v ^ { 2 } \right) ^ { - 3 / 2 } ( - 1 / 2 ) \left( - 2 v a _ { x } \right) = \gamma ^ { 3 } v a _ { x } .
$$
Here we used the fact that instantaneous acceleration in the $y$ and $z$ components doesn't change the magnitude of the speed, and thus won't change $\gamma$. Then we have
$$
a ^ { \mu } = \gamma \frac { d } { d t } ( \gamma , \gamma \mathbf { v } ) = \gamma \left( \gamma ^ { 3 } v a _ { x } , \gamma ^ { 3 } a _ { x } v ^ { 2 } + \gamma a _ { x } , \gamma a _ { y } , \gamma a _ { z } \right) = \left( \gamma ^ { 4 } v a _ { x } , \gamma ^ { 4 } a _ { x } , \gamma ^ { 2 } a _ { y } , \gamma ^ { 2 } a _ { z } \right) .
$$

(c) This follows immediately because $a ^ { \mu ^ { \prime } } = \left( 0 , a _ { x } ^ { \prime } , a _ { y } ^ { \prime } , a _ { z } ^ { \prime } \right)$ in this frame.
(d) Applying a Lorentz transformation to $a ^ { \mu ^ { \prime } }$, we have
$$
a ^ { \mu } = \left( \gamma \left( 0 + v a _ { x } ^ { \prime } \right) , \gamma \left( a _ { x } ^ { \prime } + 0 \right) , a _ { y } ^ { \prime } , a _ { z } ^ { \prime } \right) = \left( \gamma ^ { 4 } v a _ { x } , \gamma ^ { 4 } a _ { x } , \gamma ^ { 2 } a _ { y } , \gamma ^ { 2 } a _ { z } \right)
$$
We therefore read off the desired result,
$$
\mathbf { a } = \left( a _ { x } ^ { \prime } / \gamma ^ { 3 } , a _ { y } ^ { \prime } / \gamma ^ { 2 } , a _ { z } ^ { \prime } / \gamma ^ { 2 } \right) .
$$
Of course, in the low velocity limit we recover $a _ { i } ^ { \prime } = a _ { i }$, as expected from Galilean relativity.

Remark
We can rewrite a lot of our results in terms of three-vectors. First, the Lorentz transformations for general v are, using the same notation as in idea 1,

$$
t ^ { \prime } = \gamma ( t - \mathbf { v } \cdot \mathbf { r } ) , \quad \mathbf { r } ^ { \prime } = \mathbf { r } - \gamma \mathbf { v } t + ( \gamma - 1 ) ( \hat { \mathbf { v } } \cdot \mathbf { r } ) \hat { \mathbf { v } } .
$$

The velocity addition formula for general v and u' is, using the same notation as in idea 2,

$$
\mathbf { u } = \frac { 1 } { 1 + \mathbf { v } \cdot \mathbf { u } ^ { \prime } } \left( \mathbf { v } + \frac { \mathbf { u } ^ { \prime } } { \gamma } + \left( 1 - \frac { 1 } { \gamma } \right) \hat { \mathbf { v } } \left( \hat { \mathbf { v } } \cdot \mathbf { u } ^ { \prime } \right) \right) .
$$

The first result of problem 23 is

$$
a ^ { \mu } = \left( \gamma ^ { 4 } \mathbf { a } \cdot \mathbf { u } , \gamma ^ { 4 } ( \mathbf { a } + \mathbf { u } \times ( \mathbf { u } \times \mathbf { a } ) ) \right)
$$

and the second result, for the transformation of acceleration, is

$$
\mathbf { a } = \frac { \mathbf { a } ^ { \prime } } { \gamma ^ { 2 } } - \frac { \hat { \mathbf { v } } \left( \hat { \mathbf { v } } \cdot \mathbf { a } ^ { \prime } \right) ( \gamma - 1 ) } { \gamma ^ { 3 } } .
$$

As you can see, these aren't very enlightening, and they don't tend to be useful in solving problems. The reason is that in relativity, there's nothing special about three-vectors. For concrete problems, you'll typically either want to do everything in terms of four-vectors, or descend all the way down to individual components - in which case you would align your axes so that v points along one of them, rather than considering a completely general v.

On the other hand, you can get practice with three-vectors by staring at the above expressions until you see how they reduce to the component forms we had earlier. If you do this, you'll learn how to translate just about any component expression into three-vector notation.


## 5 Acceleration and Rapidity

Idea 5
The geometry of special relativity is much like ordinary geometry, except that the dot product is replaced with an inner product, which has some minus signs. Lorentz transformations can be thought of as "generalized rotations" which mix up time and space, just as ordinary rotations mix up different spatial axes. The generalized angle is the rapidity $\phi = \tanh ^ { - 1 } v$.
[3] Problem 24 (Morin 11.27). In this problem, we'll see the meaning of the rapidity more precisely.

(a) Show that a Lorentz transformation may be written as
$$
\binom { x } { t } = \left( \begin{array} { c c }
\cosh \phi & \sinh \phi \\
\sinh \phi & \cosh \phi
\end{array} \right) \binom { x ^ { \prime } } { t ^ { \prime } } .
$$
(b) Show that the composition of Lorentz transformations with rapidity $\phi _ { 1 }$ and $\phi _ { 2 }$ is a Lorentz transformation with rapidity $\phi _ { 1 } + \phi _ { 2 }$. This makes rapidity extremely useful in kinematics problems with multiple boosts, such as problems involving acceleration.
(c) An ordinary rotation of spatial axes has the form
$$
\binom { x } { y } = \left( \begin{array} { c c }
\cos \theta & - \sin \theta \\
\sin \theta & \cos \theta
\end{array} \right) \binom { x ^ { \prime } } { y ^ { \prime } } .
$$
Show that a Lorentz transformation is essentially an ordinary rotation between space and time, if we treat time as like "imaginary space" and the rotation as by an imaginary angle. This was one of the ways the founders of relativity thought about it.

Solution. (a) The rapidity $\phi$ is defined by $\tanh \phi = v$. Then using $\tanh \phi = \sinh \phi / \cosh \phi$ and $\cosh ^ { 2 } \phi - \sinh ^ { 2 } \phi = 1$, we have

$$
\sinh \phi = \gamma v , \quad \cosh \phi = \gamma .
$$

On the other hand, the Lorentz transformations are

$$
t = \gamma \left( t ^ { \prime } + v x ^ { \prime } \right) , \quad x = \gamma \left( x ^ { \prime } + v t ^ { \prime } \right)
$$

which are exactly of the desired form.

(b) Explicitly, we have
$$
\left( \begin{array} { c c }
\cosh \phi _ { 1 } & \sinh \phi _ { 1 } \\
\sinh \phi _ { 1 } & \cosh \phi _ { 1 }
\end{array} \right) \left( \begin{array} { c c }
\cosh \phi _ { 2 } & \sinh \phi _ { 2 } \\
\sinh \phi _ { 2 } & \cosh \phi _ { 2 }
\end{array} \right) = \left( \begin{array} { c c }
A & B \\
B & A
\end{array} \right)
$$
where
$$
A = \cosh \phi _ { 1 } \cosh \phi _ { 2 } + \sinh \phi _ { 1 } \sinh \phi _ { 2 } , \quad B = \cosh \phi _ { 1 } \sinh \phi _ { 2 } + \sinh \phi _ { 1 } \cosh \phi _ { 2 } .
$$
By using the hyperbolic trig sum rules, we have
$$
A = \cosh \left( \phi _ { 1 } + \phi _ { 2 } \right) , \quad B = \sinh \left( \phi _ { 1 } + \phi _ { 2 } \right)
$$
as desired.

(c) Substituting $\theta = i \phi$ and $y = i t$, the rotation becomes
$$
\binom { x } { i t } = \left( \begin{array} { c c }
\cos ( i \phi ) & - \sin ( i \phi ) \\
\sin ( i \phi ) & \cos ( i \phi )
\end{array} \right) \binom { x ^ { \prime } } { i t ^ { \prime } } .
$$
This can be converted to a transformation between $( x , t )$ and $\left( x ^ { \prime } , t ^ { \prime } \right)$,
$$
\binom { x } { t } = \left( \begin{array} { c c }
\cos ( i \phi ) & - i \sin ( i \phi ) \\
- i \sin ( i \phi ) & \cos ( i \phi )
\end{array} \right) \binom { x ^ { \prime } } { t ^ { \prime } } = \left( \begin{array} { c c }
\cosh \phi & \sinh \phi \\
\sinh \phi & \cosh \phi
\end{array} \right) \binom { x ^ { \prime } } { t ^ { \prime } } .
$$

Idea 6
The next few questions will deal with accelerating objects. In Newtonian mechanics, a common strategy is to work in the accelerating frame of the object, but that's not a good idea at this stage of your education. (There's nothing wrong with doing so, but it brings in complications that one usually needs a course in general relativity to fully appreciate.)

Instead, we will describe accelerating objects using inertial frames. In principle we could do everything in the lab frame, but it is also often useful to work in a momentarily comoving frame, i.e. the inertial frame that, at some time $t$, moves with the same velocity as the object.
