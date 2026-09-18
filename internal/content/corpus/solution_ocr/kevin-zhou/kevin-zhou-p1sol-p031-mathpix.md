---
id: solution-ocr-kevin-zhou-p1sol-p031
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p031]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[5] Problem 31. A particle in a potential well.
    (a) Consider a particle of mass $m$ and energy $E$ with potential energy $V ( x )$, which performs periodic motion. Write the period of the motion in terms of a single integral over $x$.
    (b) Suppose the potential well has the form $V ( x ) = V _ { 0 } ( x / a ) ^ { n }$ for even $n > 0$. If the period of the motion is $T _ { 0 }$ when it has amplitude $A _ { 0 }$, find the period when the amplitude is $A$, by considering how the integral you found in part (a) scales with $A$.
    (c) Find a special case where you can check your answer to part (b). (In fact, there are two more special cases you can check, one which requires negative $n$ and negative $V _ { 0 }$, and one which requires $V ( x )$ to be replaced with its absolute value.)
    (d) Using a similar method to part (a), write down an integral over $\theta$ giving the period of a pendulum with length $L$ in gravity $g$, without the small angle approximation. Using this, compute the period of the pendulum with amplitude $\theta _ { 0 }$, up to order $\theta _ { 0 } ^ { 2 }$. (This result was first published by Bernoulli, in 1749.)
    (e) ★ Part (d) is the kind of involved computation you might see in a graduate mechanics course. But if you think you're really tough, you can go one step further. Consider a mass $m$ oscillating on a spring of spring constant $k$ with amplitude $A$. Calculate its period of oscillation up to order $A ^ { 2 }$, accounting for special relativity. (Concretely, assume that the spring force doesn't change the rest mass $m$, and has a potential $U = k x ^ { 2 } / 2$. In relativity, the force $F = - d U / d x$ still obeys $F = d p / d t$, but now $E = \gamma m c ^ { 2 }$ and $p = \gamma m v$, where $\gamma = 1 / \sqrt { 1 - v ^ { 2 } / c ^ { 2 } }$.)

Solution. (a) The statement of conservation of energy is

$$
E = \frac { 1 } { 2 } m v ^ { 2 } + V ( x ) , \quad v = \sqrt { \frac { 2 ( E - V ( x ) ) } { m } } .
$$

Therefore, the period is

$$
T = \int d t = \int \frac { d t } { d x } d x = \int \frac { d x } { \sqrt { 2 ( E - V ( x ) ) / m } }
$$


To be more precise, we should put the bounds of integration back in. If the lowest and highest values of $x$ are $x _ { \text {min } }$ and $x _ { \text {max } }$, then
$$
T = 2 \int _ { x _ { \min } } ^ { x _ { \max } } \frac { d x } { \sqrt { 2 ( E - V ( x ) ) / m } }
$$
where the factor of two is because this is just half of the oscillation.
(b) The particle can perform periodic motion if at $x = \pm A , v = 0$ so $V _ { 0 } ( A / a ) ^ { n } = E$. Thus
$$
T = 2 \int _ { - A } ^ { A } \frac { d x } { \sqrt { 2 \left( V _ { 0 } ( A / a ) ^ { n } - V _ { 0 } ( x / a ) ^ { n } \right) / m } } \propto \int _ { - A } ^ { A } \frac { d x } { \sqrt { A ^ { n } - x ^ { n } } }
$$
By dimensional analysis, the integral (a function of A) is proportional to $A ^ { 1 - n / 2 }$, so
$$
T = T _ { 0 } \left( \frac { A } { A _ { 0 } } \right) ^ { 1 - n / 2 }
$$
Incidentally, you can also do this problem by dimensional analysis directly on the parameters. At first glance, this is impossible because there are too many dimensionful quantities: $E , m , a$, $V _ { 0 }$, and $T$, which permit $5 - 3 = 2$ dimensionless groups. (Recall from an earlier problem that one can usually get a scaling relation only if there's only 1 dimensionless group.) However, $V _ { 0 }$ and $a$ only appear in the combination $V _ { 0 } / a ^ { n }$. So there are only 4 independent dimensionful parameters, and a standard dimensional analysis yields the same result.
(c) The three analytically tractable examples are:
    - For $n = 2$ we have simple harmonic motion, and indeed here the period is independent of amplitude. (Incidentally, can you think of any potentials that aren't simple harmonic, but also have this property?)
    - For $n = - 1$ we have an inverse square force and $T \propto A ^ { 3 / 2 }$. This makes sense, because it matches the form of Kepler's third law, which gives the general scaling of orbits in inverse square forces. (Here we're considering the degenerate case of a straight-line orbit.)
    - For $n = 1$ we have a constant force, which doesn't yield oscillations. But the scaling argument of part (b) would still work if we used the potential $V ( x ) = V _ { 0 } | x / a |$, which does have oscillations. In this case we predict $T \propto \sqrt { A }$, which makes sense; it corresponds to the usual time-dependence $\Delta x = g t ^ { 2 } / 2 \propto t ^ { 2 }$ of uniformly accelerated motion.

That's as far as you can go with the functions you learn in high school and college. There are analytic solutions for other $n$ involving exotic "special functions". For instance, for $n = 4$ the solutions can be written in terms of Jacobi elliptic functions, as you can see here. These days most people encounter such functions by solving integrals with computer programs.

(d) Conservation of energy states
$$
\frac { 1 } { 2 } I \omega ^ { 2 } = m g L \left( \cos \theta - \cos \theta _ { 0 } \right) , \quad I = m L ^ { 2 }
$$
which means
$$
T = 4 \int _ { 0 } ^ { \theta _ { 0 } } \frac { d \theta } { \omega } = 4 \int _ { 0 } ^ { \theta _ { 0 } } \frac { d \theta } { \sqrt { ( 2 g / L ) \left( \cos \theta - \cos \theta _ { 0 } \right) } } .
$$

This form is a bit annoying, because the cosines are both extremely close to 1 . To fix this issue, we use the half-angle formula $( 1 - \cos \theta ) / 2 = \sin ^ { 2 } ( \theta / 2 )$, to get

$$
T = 2 \sqrt { \frac { L } { g } } \int _ { 0 } ^ { \theta _ { 0 } } \frac { d \theta } { \sqrt { \sin ^ { 2 } \left( \theta _ { 0 } / 2 \right) - \sin ^ { 2 } ( \theta / 2 ) } }
$$

This newer form still has the problem that as $\theta _ { 0 }$ goes to zero, the integration range goes to zero while the integrand can get large, making it hard to see how big the result is. To fix this, change variables from $\theta$ to $\phi$, where $\sin \phi = \sin ( \theta / 2 ) / \sin \left( \theta _ { 0 } / 2 \right)$, which gives

$$
T = 4 \sqrt { \frac { L } { g } } \int _ { 0 } ^ { \pi / 2 } \frac { d \phi } { \sqrt { 1 - \sin ^ { 2 } \phi \sin ^ { 2 } \left( \theta _ { 0 } / 2 \right) } } .
$$

This is the easiest form to handle, because it makes the $\theta _ { 0 } \rightarrow 0$ limit obvious, and it makes it manifest that the first correction is of order $\theta _ { 0 } ^ { 2 }$. To extract that term, we expand the sine to first order, giving

$$
T = 4 \sqrt { \frac { L } { g } } \int _ { 0 } ^ { \pi / 2 } d \phi \left( 1 + \frac { \theta _ { 0 } ^ { 2 } } { 8 } \sin ^ { 2 } \phi \right) = 2 \pi \sqrt { \frac { L } { g } } \left( 1 + \frac { \theta _ { 0 } ^ { 2 } } { 16 } \right) .
$$

There are many other ways to get this, but our route is probably the best if you're interested in even higher-order terms. For instance, the coefficient of the $\theta _ { 0 } ^ { 4 }$ term is 11/3072.

(e) This is a taste of the kind of problem you'll see in R2. It can get quite messy, but it's not too bad if you work in the right variables. First, note that since $F = - d U / d x$, we still have energy conservation, but with the relativistic energy expression,
$$
\gamma m c ^ { 2 } + \frac { 1 } { 2 } m \omega _ { 0 } ^ { 2 } x ^ { 2 } = m c ^ { 2 } + \frac { 1 } { 2 } m \omega _ { 0 } ^ { 2 } A ^ { 2 }
$$
where $\omega _ { 0 } ^ { 2 } = k / m$ as usual. Solving for $\gamma$, we find
$$
\gamma = 1 + \frac { \omega _ { 0 } ^ { 2 } } { 2 c ^ { 2 } } \left( A ^ { 2 } - x ^ { 2 } \right) .
$$
Next, using the definition of $\gamma$, we have
$$
T = 4 \int _ { 0 } ^ { A } \frac { d x } { v } = \frac { 4 } { c } \int _ { 0 } ^ { A } \frac { \gamma } { \sqrt { \gamma ^ { 2 } - 1 } } d x
$$
At this point we can perform a quick check to make sure we're on the right track. Note that in the ultrarelativistic limit, where the spring is so strong that the mass is always moving at nearly the speed of light, we have $\gamma \rightarrow \infty$, so that the integrand just reduces to 1 . Then $T \approx 4 A / c$, which is exactly as expected.
Anyway, in this problem we're considering small relativistic corrections, $\gamma - 1 \ll 1$. The easiest way to make this manifest is to eliminate $\gamma$ in favor of $A$, using our result above. There we found that $\gamma - 1 = \mathcal { O } \left( \left( \omega _ { 0 } A / c \right) ^ { 2 } \right)$, so we can expand in the small quantity $\omega _ { 0 } A / c$, giving
$$
T = \frac { 4 } { c } \int _ { 0 } ^ { A } \frac { c } { \omega _ { 0 } } \frac { 1 } { \sqrt { A ^ { 2 } - x ^ { 2 } } } + \frac { 3 } { 8 } \frac { \omega _ { 0 } } { c } \sqrt { A ^ { 2 } - x ^ { 2 } } + \mathcal { O } \left( \left( \omega _ { 0 } A / c \right) ^ { 4 } \right) d x
$$

The first term simply recovers the nonrelativistic result $T = 2 \pi / \omega _ { 0 }$, and the second term is straightforward to integrate, yielding

$$
T = \frac { 2 \pi } { \omega _ { 0 } } \left( 1 + \frac { 3 } { 16 } \frac { \omega _ { 0 } ^ { 2 } A ^ { 2 } } { c ^ { 2 } } + \mathcal { O } \left( \left( \omega _ { 0 } A / c \right) ^ { 4 } \right) \right) .
$$

Since the peak speed $v _ { 0 }$ is approximately $\omega _ { 0 } A$ in the nonrelativistic limit, this result is therefore accurate up to corrections of order $\left( v _ { 0 } / c \right) ^ { 4 }$.

## 6 Multiple Integrals

It's also useful to know how to set up multiple integrals. This is fairly straightforward, though technically an "advanced" topic, so we'll demonstrate it by example. For further examples, see chapter 2 of Wang and Ricardo, volume 1, or MIT OCW 18.02, lectures 16, 17, 25, and 26.

Idea 9
In most Olympiad problems, multiple integrals can be reduced to single integrals by symmetry.

Example 17
Calculate the area of a circle of radius $R$.

Solution
The area $A$ is the integral of $d A$, i.e. the sum of the infinitesimal areas of pieces we break the circle into. As a first example, let's consider using Cartesian coordinates. Then the pieces will be the rectangular regions centered at $( x , y )$ with sides $( d x , d y )$, which have area $d x d y$. The area is thus

$$
A = \int d A = \int d x \int d y
$$

The only tricky thing about setting up the integral is writing down the bounds. The inner integral is done first, so its bounds depend on the value of $x$. Since the boundary of the circle is $x ^ { 2 } + y ^ { 2 } = R ^ { 2 }$, the bounds are $y = \pm \sqrt { R ^ { 2 } - x ^ { 2 } }$. Thus we have

$$
A = \int _ { - R } ^ { R } d x \int _ { - \sqrt { R ^ { 2 } - x ^ { 2 } } } ^ { \sqrt { R ^ { 2 } - x ^ { 2 } } } d y
$$

We then just do the integrals one at a time, from the inside out, like regular integrals,

$$
A = \int _ { - R } ^ { R } 2 \sqrt { R ^ { 2 } - x ^ { 2 } } d x = 2 R ^ { 2 } \int _ { - 1 } ^ { 1 } \sqrt { 1 - u ^ { 2 } } d u = 2 R ^ { 2 } \int _ { - \pi / 2 } ^ { \pi / 2 } \cos ^ { 2 } \theta d \theta = \pi R ^ { 2 }
$$

where we nondimensionalized the integral by letting $u = x / R$, and then did the trigonometric substitution $u = \sin \theta$. (To do the final integral trivially, notice that the average value of $\cos ^ { 2 } \theta$ along any of its periods is 1/2.)

We can also use polar coordinates. We break the circle into regions bounded by radii $r$ and $r + d r$, and angles $\theta$ and $\theta + d \theta$. These regions are rectangular, with side lengths of $d r$ and


$r d \theta$, so the area element is $d A = r d r d \theta$. Then we have

$$
A = \int _ { 0 } ^ { R } r d r \int _ { 0 } ^ { 2 \pi } d \theta = 2 \pi \int _ { 0 } ^ { R } r d r = \pi R ^ { 2 }
$$

which is quite a bit easier. In fact, it's so much easier that we didn't even need to use double integrals at all. We could have decomposed the circle into a bunch of thin circular shells, argued that each shell contributed area $( 2 \pi r ) d r$, then integrated over them,

$$
A = \int _ { 0 } ^ { R } 2 \pi r d r = \pi R ^ { 2 }
$$

In Olympiad physics, there's usually a method like this, that allows you to get the answer without explicitly writing down any multiple integrals.
