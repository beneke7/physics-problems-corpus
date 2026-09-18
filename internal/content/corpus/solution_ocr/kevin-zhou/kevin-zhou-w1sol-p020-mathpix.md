---
id: solution-ocr-kevin-zhou-w1sol-p020
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w1-p020]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 20. [A] The general, turn-the-crank method to find the time evolution of an arbitrary wave on a string of length $L$ is Fourier series. In this method, we write the initial shape $y _ { 0 } ( x )$ of the wave as a combination of standing waves,

$$
y _ { 0 } ( x ) = \sum _ { n } c _ { n } \sin \frac { \pi n x } { L } , \quad 0 \leq x \leq L .
$$

We know how each standing wave oscillates in time, so by linearity, the entire wave evolves as

$$
y ( x , t ) = \sum _ { n } c _ { n } \sin \frac { \pi n x } { L } \cos \left( \omega _ { n } t \right)
$$

where $\omega _ { n }$ is the angular frequency of the $n ^ { \text {th } }$ harmonic.

(a) The coefficients $c _ { n }$ can be extracted by integrating $y _ { 0 } ( x )$ against another sine,
$$
c _ { n } \propto \int _ { 0 } ^ { L } d x y _ { 0 } ( x ) \sin \frac { \pi n x } { L }
$$
Explain why this works, and find the constant of proportionality.

(b) Now let's consider the plucked string considered in part (a) of problem 19. If the pluck is centered at the middle of the string and has height $h$, find the coefficients $c _ { n }$. (If you're so inclined, you can use a computer to see how the resulting $y ( x , t )$ approaches the answer to problem 19 as more terms are included.)
(c) Argue that in general, we have
$$
\int _ { 0 } ^ { L } y _ { 0 } ^ { 2 } ( x ) d x = \frac { L } { 2 } \sum _ { n } \left| c _ { n } \right| ^ { 2 }
$$
By applying this result to the plucked string, show that the Riemann zeta function has value
$$
\zeta ( 4 ) = \sum _ { n = 1 } ^ { \infty } \frac { 1 } { n ^ { 4 } } = \frac { \pi ^ { 4 } } { 90 } .
$$
In fact, this is one of the simplest ways to compute $\zeta ( 4 )$.

We'll use the idea of Fourier series to illustrate some conceptual points in W2.
Solution. (a) This works because all the other terms in $y _ { 0 } ( x )$ will cancel out, as seen here:

$$
\int _ { 0 } ^ { L } d x \sin \frac { \pi n x } { L } \sin \frac { \pi m x } { L } = \frac { 1 } { 2 } \int _ { 0 } ^ { L } d x \left( \cos \frac { \pi x } { L } ( m - n ) - \cos \frac { \pi x } { L } ( m + n ) \right)
$$

which will always equal to 0 when $m \neq n$, since the arguments of sine (the anti-derivative of cosine) will always be an integer multiple of $\pi$. To find the constant of proportionality, we only need to look at the $n ^ { \text {th } }$ term of the expansion of $y _ { 0 } ( x )$ :

$$
\int _ { 0 } ^ { L } d x y _ { 0 } ( x ) \sin \frac { \pi n x } { L } = c _ { n } \int _ { 0 } ^ { L } d x \sin ^ { 2 } \frac { \pi n x } { L } = c _ { n } L / 2
$$

Thus the constant of proportionality is $2 / L$.

(b) The equation of the plucked string is
$$
y _ { 0 } ( x ) = h - 2 h | x - L / 2 | / L , \quad 0 < x < L .
$$
By symmetry, if $n$ is even, $c _ { n } = 0$ since $y _ { 0 } ( x )$ is even about $x = L / 2$ and $\sin ( \pi n x / L )$ is odd about $x = L / 2$, so the integral will be 0. Thus we will consider the case where $n$ is odd,
$$
c _ { n } = \frac { 2 } { L } \int _ { 0 } ^ { L / 2 } \frac { 2 h x } { L } \sin \left( \frac { \pi n x } { L } \right) d x + \frac { 2 } { L } \int _ { L / 2 } ^ { L } ( 2 h - 2 h x / L ) \sin \left( \frac { \pi n x } { L } \right) d x
$$
Using symmetry again, the two integrals above are equal, so we only need to evaluate the first. We have
$$
c _ { n } = \frac { 4 h } { L ^ { 2 } } \left( - \left. \frac { L } { \pi n } x \cos \left( \frac { \pi n x } { L } \right) \right| _ { 0 } ^ { L / 2 } + \frac { L } { \pi n } \int _ { 0 } ^ { L / 2 } \cos \left( \frac { \pi n x } { L } \right) d x \right) + \frac { 4 h } { L } \int _ { L / 2 } ^ { L } \left( 1 - \frac { x } { L } \right) \sin \left( \frac { \pi n x } { L } \right) d x
$$
Considering only odd $n$, the first term will vanish since $\cos ( \pi n / 2 ) = 0$ for odd $n$. Also, by symmetry the integral that goes from $L / 2$ to $L$ should be equal to the one that goes from 0 to $L / 2$. Thus, for odd $n$,
$$
c _ { n } = \frac { 8 h } { \pi ^ { 2 } n ^ { 2 } } \sin \left( \frac { \pi n } { 2 } \right)
$$
while $c _ { n } = 0$ for even $n$.

(c) Again, integrating sinusoids with different values of $n$ will get 0, and the same value will get $L / 2$. Thus when representing $y _ { 0 } ( x )$ as a sum of sinusoids and having the integral of all the cross terms go to 0, we get that
$$
\int _ { 0 } ^ { L } y _ { 0 } ^ { 2 } ( x ) d x = \int _ { 0 } ^ { L } d x \sum _ { n } c _ { n } ^ { 2 } \sin ^ { 2 } \frac { \pi n x } { L } = \sum _ { n } c _ { n } ^ { 2 } \int _ { 0 } ^ { L } d x \sin ^ { 2 } \frac { \pi n x } { L } = \frac { L } { 2 } \sum _ { n } c _ { n } ^ { 2 }
$$
Using $y _ { 0 } ( x ) = h - 2 h | x - L / 2 | / L$, and symmetry about $x = L / 2$, we get
$$
\int _ { 0 } ^ { L } y _ { 0 } ^ { 2 } ( x ) d x = 2 \int _ { 0 } ^ { L / 2 } y _ { 0 } ^ { 2 } ( x ) d x = 2 \int _ { 0 } ^ { L / 2 } \frac { 4 h ^ { 2 } x ^ { 2 } } { L ^ { 2 } } d x = \frac { 1 } { 3 } h ^ { 2 } L
$$
To find the sum of $c _ { n }$, we use our answer above and consider the nonzero odd terms:
$$
\frac { L } { 2 } \sum _ { n } \left| c _ { n } \right| ^ { 2 } = \frac { L } { 2 } \sum _ { n } \frac { 64 h ^ { 2 } } { \pi ^ { 4 } ( 2 n + 1 ) ^ { 4 } } = \frac { 32 h ^ { 2 } L } { \pi ^ { 4 } } \sum _ { n } \frac { 1 } { ( 2 n + 1 ) ^ { 4 } }
$$
To relate that sum to $\zeta ( 4 )$, define the sums for the even and odd numbers as $E$ and $O$ so that
$$
\zeta ( 4 ) = E + O , \quad E = \sum _ { n } \frac { 1 } { ( 2 n ) ^ { 4 } } = \frac { 1 } { 16 } \zeta ( 4 ) , \quad O = \zeta ( 4 ) - E = \frac { 15 } { 16 } \zeta ( 4 )
$$
Now equating our expressions will get
$$
\frac { 1 } { 3 } h ^ { 2 } L = \frac { 32 h ^ { 2 } L } { \pi ^ { 4 } } \frac { 15 } { 16 } \zeta ( 4 )
$$
from which we conclude
$$
\zeta ( 4 ) = \frac { \pi ^ { 4 } } { 90 } .
$$

Idea 7
More generally, the relation between the incoming and reflected waves may depend on the exact form of the incoming wave. In this case, it's useful to consider sinusoidal solution. Let

$$
y _ { \text {in } } ( x , t ) = e ^ { i ( k x - \omega t ) } .
$$

Almost all boundary conditions will state that something at the boundary is constant in time, which is only possible if the reflected wave has the same frequency. So in general we have

$$
y _ { r } ( x , t ) = r e ^ { i ( - k x - \omega t ) }
$$

where $r$ is the reflection coefficient. If the medium exists for $x > 0$, there is also a transmitted wave there, of the form

$$
y _ { t } ( x , t ) = t e ^ { i \left( k ^ { \prime } x - \omega t \right) }
$$

where $k ^ { \prime }$ might differ from $k$, and $t$ is the transmission coefficient. In general, both $r$ and $t$ may depend on $k$ as well as the boundary conditions. Note that the phases of $r$ and $t$ depend on the conventions we used to define $y _ { r } ( x , t )$ and $y _ { t } ( x , t )$, though the magnitudes don't.


[4] Problem 21. Suppose the string at $x < 0$ has a tension $T _ { 1 }$ and mass density $\mu _ { 1 }$, while the string at $x > 0$ has a tension $T _ { 2 }$ and mass density $\mu _ { 2 }$. (If you were doing this at home, it would be difficult to have $T _ { 1 } \neq T _ { 2 }$ since the whole setup would accelerate longitudinally. But for the sake of the problem, suppose the two strings are attached at $x = 0$ by a massless ring which slides on a vertical frictionless pole, so that the normal force from the pole balances the longitudinal force $T _ { 2 } - T _ { 1 }$.) As above, let $y _ { \text {in } } ( x , t ) = e ^ { i ( k x - \omega t ) }$.
    (a) Write down $k ^ { \prime }$ and the boundary conditions at $x = 0$.
    (b) Show that the reflection and transmission coefficients are
$$
r = \frac { Z _ { 1 } - Z _ { 2 } } { Z _ { 1 } + Z _ { 2 } } , \quad t = \frac { 2 Z _ { 1 } } { Z _ { 1 } + Z _ { 2 } } , \quad Z _ { i } = \sqrt { \mu _ { i } T _ { i } } .
$$
The quantity $Z _ { i }$ is called the impedance.
    (c) What limiting cases correspond to hard and soft boundary conditions? Verify that the reflection coefficients match the results above.
    (d) Suppose the incoming wave has the exponential form above, but only lasts for a long but finite time $\tau$. After a long time, the incoming wave is gone, and we have a reflected and transmitted wave. Verify that energy has been conserved. (Be careful: it's not simply $| r | ^ { 2 } + | t | ^ { 2 } = 1$.)

Solution. (a) By continuity of the frequency, we have

$$
k ^ { \prime } = \frac { v _ { 1 } } { v _ { 2 } } k = \frac { \sqrt { T _ { 1 } / \mu _ { 1 } } } { \sqrt { T _ { 2 } / \mu _ { 2 } } } k .
$$

The boundary conditions are continuity of the string, and continuity of the transverse component of the tension at $x = 0$, so that the forces on the ring balance.


(b) Continuity of the string requires
$$
1 + r = t .
$$
Continuity of the transverse component of tension requires
$$
T _ { 1 } ( k - r k ) = T _ { 2 } t k ^ { \prime } .
$$
Combining this with the result of part (a) gives
$$
1 - r = \frac { \sqrt { T _ { 2 } \mu _ { 2 } } } { \sqrt { T _ { 1 } \mu _ { 1 } } } t = \frac { Z _ { 2 } } { Z _ { 1 } } t .
$$
Combining this with the continuity condition and solving gives the desired results.
(c) A hard boundary can be modeled by setting $T _ { 1 } = T _ { 2 }$ and $\mu _ { 2 } \rightarrow \infty$, which is equivalent to $Z _ { 2 } / Z _ { 1 } \rightarrow \infty$. In this limit, $r = - 1$ and $t = 0$ as expected.
A soft boundary can be modeled by setting $T _ { 1 } = T _ { 2 }$ and $\mu _ { 2 } \rightarrow 0$, which sets $Z _ { 2 } / Z _ { 1 } \rightarrow 0$. In this case we have $r = 1$ as expected. Oddly we also have $t = 2$, but this isn't really physical because in a soft boundary, the string at $x > 0$ doesn't exist. (It makes no difference from the standpoint of the reflection coefficient whether or not the string at $x > 0$ exists, because the wave carries no energy in the limit $\mu _ { 2 } \rightarrow 0$.)

(d) First, we need to find the energy for a wave of given amplitude. The kinetic and potential energies in a wave are equal, so we can look at either. The potential energy per unit length is proportional to $T y ^ { \prime 2 } \propto T ( A k ) ^ { 2 }$ where $A$ is the amplitude and $k$ is the wavenumber. Since the waves in this problem have fixed frequency, and $v = \omega / k$, we have $k \propto 1 / v$. Finally, the total duration $\tau$ of the wave is fixed, meaning the total length is $L = v \tau \propto v$. Combining these results,
$$
U \propto L T A ^ { 2 } k ^ { 2 } \propto v T A ^ { 2 } / v ^ { 2 } = \frac { T } { v } A ^ { 2 } = Z A ^ { 2 } .
$$
In other words, the impedance determines the energy per unit time in a wave pulse of given amplitude. That gives some intuition for why the transmission of energy is perfect when $Z _ { 1 } = Z _ { 2 }$. If you want there to be no reflection, then the amplitudes of the transmitted and incoming waves have to match by continuity. This is only consistent with energy conservation if the impedances are matched too.
Therefore, the statement of energy conservation is
$$
Z _ { 1 } = Z _ { 1 } | r | ^ { 2 } + Z _ { 2 } | t | ^ { 2 } .
$$
Plugging in the expressions above and doing the algebra confirms this.

The great thing about the coefficients $r$ and $t$ is that they contain all the information about the reflection and transmission. For complicated problems with multiple interfaces, it's best to work purely in terms of $r$ and $t$, as solving the wave equation as a whole can get messy.

## Remark

In E7 you found that transmission lines have a characteristic impedance $Z$. When two transmission lines are attached, wave reflection occurs if the impedances mismatch. The point of the previous problem is that the same idea applies to many kinds of waves, as long as one generalizes the notion of impedance.

In all these cases, we can reduce unwanted reflection by inserting "impedance matching" devices which soften the discontinuity. This language is very commonly used by engineers. For example, they might say that a conical megaphone works because it helps impedance match the air column in your mouth and throat to the atmosphere.

## Remark

You can generalize the methodology of the previous problem to a large variety of similar problems. For example, suppose the ring at $x = 0$ wasn't massless. Then the boundary conditions would have been changed; instead of the transverse force on the ring vanishing, the transverse force would have had to be equal to its mass times its transverse acceleration. (You may recall that setup from the preliminary problem set.) You could even put the ring on a spring, or give it a damping force (in which case the wave energy is no longer conserved). In all cases, the technique is just to take exponential solutions on both sides and apply the relevant boundary conditions. I won't assign such problems, since they usually involve lots of messy algebra, but the idea is very important in physics.


## 4 Interference

Idea 8
The intensity of a wave is proportional to its amplitude squared, so if two waves with amplitudes $A _ { 1 }$ and $A _ { 2 }$ are superposed, the resultant intensity is

$$
I \propto \left( A _ { 1 } + A _ { 2 } \right) ^ { 2 } .
$$

This differs from the sum of the intensities by an interference term,

$$
I = I _ { 1 } + I _ { 2 } + 2 \sqrt { I _ { 1 } I _ { 2 } } \cos \theta
$$

where $\theta$ is the phase difference between the waves.
