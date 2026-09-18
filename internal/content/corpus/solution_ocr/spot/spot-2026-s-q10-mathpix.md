---
id: solution-ocr-spot-2026-s-q10
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2026_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2026-q10]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
10. We know that for all solutions to the linear wave equation, the principle of superposition applies. Examples include electromagnetic waves and waves on a string.
Dispersion relations describe the relation between angular velocity $\omega ( k )$ and wavenumber $k$, where phase velocity can be obtained as $v _ { p } = \frac { \omega } { k }$. Each wave component has its own phase velocity, propagating independently of each other.

However, in nonlinear dynamics, this is no longer the case. Interfering wave packets interact,


leading to nontrivial behaviour; in dispersive media, nonlinear interactions can even preserve wave packets and oppose dispersion. These wave packets are called solitons.

To investigate solitons, we will look at a simple mechanical system. Consider a long taut horizontal string, to which at equal intervals $b$, identical spokes arranged vertically are attached. These spokes can be considered as pendulums swinging in the plane perpendicular to the string axis. The weight of each spoke is $m$, the distance from the center of mass of the spoke to the string is $d$, and the moment of inertia relative to the axis passing through the string is $I$. When one spoke deviates from the neighboring one by an angle $\Delta \phi$, the string creates a restoring torsional torque $\tau = - K \Delta \phi$.
It can be assumed that the characteristic size of the soliton $\lambda \gg b$. Hence, consider that the angular coordinate at some point $x$ along the string is given by a continuous function $\phi ( x , t ) ; \phi = 0$ is defined at the position where the pendulum points vertically downwards, and increases as the pendulum rotates anticlockwise.

Take the level of a line passing through the lowest possible positions of the center of mass of the spokes as zero of the potential energy in the gravitational field.
![](../../../figures/solution-ocr/e9fdb9baf43807530a92d6d3.jpg)

(a) Assuming the absence of gravity first: obtain a differential equation for $\phi ( x , t )$ of the following form
$$
\frac { \partial ^ { 2 } \phi ( x , t ) } { \partial t ^ { 2 } } = \alpha \frac { \partial ^ { 2 } \phi ( x , t ) } { \partial x ^ { 2 } }
$$
where $\alpha$ is some constant.

Solution: Consider the torque acting upon the i-th spoke. We have

$$
\tau = - K \left( \phi _ { i } - \phi _ { i - 1 } \right) - K \left( \phi _ { i } - \phi _ { i + 1 } \right) = K \left( \phi _ { i - 1 } + \phi _ { i + 1 } - 2 \phi _ { i } \right)
$$

Using the continuous assumption, we simplify to

$$
\tau = K b ^ { 2 } \frac { \partial ^ { 2 } \phi ( x , t ) } { \partial x ^ { 2 } }
$$

Relating to angular acceleration, we hence obtain

$$
I \frac { \partial ^ { 2 } \phi ( x , t ) } { \partial t ^ { 2 } } = K b ^ { 2 } \frac { \partial ^ { 2 } \phi ( x , t ) } { \partial x ^ { 2 } }
$$

(b) Using the substitution $\phi ( x , t ) = f ( x \pm v t )$, find the speed of linear wave propagation $v _ { 0 }$ for the scenario in (a). Show your substitution clearly.

Solution: What we obtained in part a is the standard linear wave equation. By making the required substitution given in the problem statement, we can easily obtain

$$
I v ^ { 2 } f ^ { \prime \prime } ( x \pm v t ) = K b ^ { 2 } f ^ { \prime \prime } ( x \pm v t )
$$

where $f ^ { \prime \prime } ( x \pm v t )$ is equivalent to $\frac { d ^ { 2 } f \left( x ^ { \prime } \right) } { d x ^ { \prime 2 } } , x ^ { \prime } = x \pm v t$. Hence, the speed of wave propagation is

$$
v = b \sqrt { \frac { K } { I } }
$$

(c) Now, considering gravity, obtain a differential equation for $\phi ( x , t )$ of the following form
$$
\beta \frac { \partial ^ { 2 } \phi ( x , t ) } { \partial t ^ { 2 } } - \gamma \frac { \partial ^ { 2 } \phi ( x , t ) } { \partial x ^ { 2 } } + \delta \sin \phi ( x , t ) = 0
$$
where $\beta , \gamma$, and $\delta$ are constants to determined. DO NOT use the small angle approximation.
Solution: By including torque due to gravity into the equation obtained in part a, we obtain
$$
I \frac { \partial ^ { 2 } \phi ( x , t ) } { \partial t ^ { 2 } } = - m g d \sin \phi ( x , t ) + K b ^ { 2 } \frac { \partial ^ { 2 } \phi ( x , t ) } { \partial x ^ { 2 } }
$$
(d) Deduce the maximum speed of wave propagation $v _ { \text {max } }$ for the scenario in (c). Justify your answer.
Solution: The speed of any propagating wave entity is strictly less than the maximum speed of linear wave propagation; this is a physical limit defined by the coupling strength between successive spokes.
$$
v _ { \max } = b \sqrt { \frac { K } { I } }
$$

The equation given in (c), ignoring coefficients, is called the Sine-Gordon equation; it is a generalisation of the Klein-Gordon equation

$$
\frac { \partial ^ { 2 } \phi ( x , t ) } { \partial t ^ { 2 } } - \frac { \partial ^ { 2 } \phi ( x , t ) } { \partial x ^ { 2 } } + \phi ( x , t ) = 0
$$

which is a relativistic quantum wave equation for spin-0 particles. (But don't worry - we are not doing quantum field theory here). In this equation, $\phi ( x , t )$ is a field variable; which we gave a physical interpretation as the angular displacement in our mechanical model. Fields possess energy and momenta, not unlike electromagnetic fields. However, the exact nature of these conserved quantities may differ. Note that you do not have to worry about what appears to be inconsistent units - the equation is non-dimensionalised.
Continue to make reference to the pendulum model whenever necessary.

(e) Work with the Klein-Gordon equation. Using the ansatz $\phi ( x , t ) = A e ^ { i ( k x \pm \omega t ) }$, obtain the dispersion relation $\omega ( k )$.

Solution: Substituting and differentiating, it should be fairly straightforward to obtain

$$
\omega ^ { 2 } = 1 + k ^ { 2 }
$$

These are still linear waves with a well-defined dispersion relation. The waves propagate independently and at different speeds; hence wavepackets spread out over time. To better understand nonlinear waves, let us study the soliton solutions of the Sine-Gordon equation.

(f) Show that $\phi _ { s } ( x ) = 4 \arctan e ^ { \pm x }$ is a solution to the Sine-Gordon equation for a static soliton in equilibrium. To simplify things, proving for just the plus case $\phi _ { s } ( x ) =$ $4 \arctan e ^ { x }$ is sufficient. Sketch a graph of $\phi _ { s } ( x )$ for both cases on the same graph and label the asymptotes.
Hint: $\frac { d } { d x } \arctan x = \frac { 1 } { 1 + x ^ { 2 } }$

Solution: The equation reduces to

$$
\frac { \partial ^ { 2 } \phi ( x ) } { \partial x ^ { 2 } } = \sin \phi ( x )
$$

for static solitons. Substituting in the proposed solution,

$$
\frac { \partial ^ { 2 } \phi ( x ) } { \partial x ^ { 2 } } = \frac { d } { d x } \frac { 4 e ^ { x } } { 1 + e ^ { 2 x } } = \frac { 4 \left( e ^ { x } - e ^ { 3 x } \right) } { \left( 1 + e ^ { 2 x } \right) ^ { 2 } }
$$

Furthermore,

$$
\sin \phi ( x ) = \sin \left( 4 \arctan e ^ { x } \right)
$$

Let $\theta = \arctan e ^ { x }$ :

$$
\sin \phi ( x ) = \sin 4 \theta = 2 \sin 2 \theta \cos 2 \theta = 4 \sin \theta \cos \theta \left( 1 - 2 \sin ^ { 2 } \theta \right)
$$

Given $\theta = \arctan e ^ { x }$ we can also obtain $\sin \theta = \frac { e ^ { x } } { \sqrt { 1 + e ^ { 2 x } } }$ and $\cos \theta = \frac { 1 } { \sqrt { 1 + e ^ { 2 x } } }$ :

$$
\sin \phi ( x ) = 4 \frac { e ^ { x } } { \sqrt { 1 + e ^ { 2 x } } } \frac { 1 } { \sqrt { 1 + e ^ { 2 x } } } \left( 1 - \frac { 2 e ^ { 2 x } } { 1 + e ^ { 2 x } } \right) = \frac { 4 e ^ { x } \left( 1 - e ^ { 2 x } \right) } { \left( 1 + e ^ { 2 x } \right) ^ { 2 } }
$$

Hence $\frac { \partial ^ { 2 } \phi ( x ) } { \partial x ^ { 2 } } = \sin \phi ( x )$, and we conclude our proof.
![](../../../figures/solution-ocr/7832b9f2510a2aeb65b3440f.jpg)
From here on, we will use kink and anti-kink to describe the plus and minus soliton solutions in (f) respectively.

(g) Find the energy $E _ { 0 }$ of a static kink. Hint: Energy is also non-dimensionalised; do not use constants from the mechanical model such as $m$ and $I$ in your answers.

Solution: To get a hint of what the energy should look like, we need to refer back to our mechanical model. (Of course, for those familiar with field theory you are free to directly quote the Hamiltonian - you will be given full credit too)

In the mechanical model we have three sources of energy:

a. Kinetic energy, $\frac { 1 } { 2 } I { \frac { \partial \phi _ { i } } { \partial t } } ^ { 2 }$
b. Torsion energy, $\frac { 1 } { 2 } K \left( \theta _ { i } - \theta _ { i - 1 } \right) ^ { 2 }$
c. Gravitational potential energy, $m g d \left( 1 - \cos \phi _ { i } \right)$

And if we make the continuous assumption, we can define an energy density

$$
\epsilon = \frac { 1 } { 2 } \frac { I } { b } \frac { \partial \phi ( x , t ) ^ { 2 } } { \partial t } + \frac { 1 } { 2 } K b \frac { \partial \phi ( x , t ) ^ { 2 } } { \partial x } + \frac { m g d } { b } ( 1 - \cos \phi ( x , t ) )
$$

It is neater when we work with the nondimensionalised Sine-Gordon equation:

$$
\epsilon ( x , t ) = \frac { 1 } { 2 } \frac { \partial \phi ( x , t ) ^ { 2 } } { \partial t } + \frac { 1 } { 2 } \frac { \partial \phi ( x , t ) ^ { 2 } } { \partial x } + ( 1 - \cos \phi ( x , t ) )
$$

Hence, we find the energy by integrating;

$$
E = \int _ { 0 } ^ { \infty } \frac { 1 } { 2 } \frac { \partial \phi ( x , t ) ^ { 2 } } { \partial t } + \frac { 1 } { 2 } \frac { \partial \phi ( x , t ) ^ { 2 } } { \partial x } + ( 1 - \cos \phi ( x , t ) ) d x
$$

Since we are working with a static kink, there is no kinetic energy. Differentiating $\phi$ by $x$ and manipulating, we get

$$
E = \int _ { 0 } ^ { \infty } \frac { 1 } { 2 } \left( \frac { 4 e ^ { x } } { 1 + e ^ { 2 x } } \right) ^ { 2 } + 2 \left( 2 \sin \frac { \phi _ { s } ( x ) } { 4 } \cos \frac { \phi _ { s } ( x ) } { 4 } \right) ^ { 2 } d x = \int _ { 0 } ^ { \infty } 16 \frac { e ^ { 2 x } } { \left( 1 + e ^ { 2 x } \right) ^ { 2 } } d x
$$

Integrating, we get

$$
E = \left[ - \frac { 8 } { 1 + e ^ { 2 x } } \right] _ { - \infty } ^ { \infty } = 8
$$

(h) i. Let $x ^ { \prime }$ and $t ^ { \prime }$ be the coordinates in a frame moving at relativistic speed $v$ in the positive $x$-direction. Express $x ^ { \prime }$ and $t ^ { \prime }$ in terms of $x$ and $t$.

Solution:

$$
t ^ { \prime } = \gamma ( t - v x ) , \quad x ^ { \prime } = \gamma ( x - v t )
$$


ii. In terms of $\phi ( x , t )$, the field expressed in the moving frame $\phi ^ { \prime } \left( x ^ { \prime } , t ^ { \prime } \right) = \phi ( x , t )$, and the respective coordinates, state an equation which shows that the Sine-Gordan equation is invariant under a Lorentz transformation.

Solution: Since $\sin \phi ^ { \prime } = \sin \phi$, we just need to have

$$
\frac { \partial ^ { 2 } \phi ^ { \prime } \left( x ^ { \prime } , t ^ { \prime } \right) } { \partial t ^ { \prime 2 } } - \frac { \partial ^ { 2 } \phi \left( x ^ { \prime } , t ^ { \prime } \right) } { \partial x ^ { \prime 2 } } = \frac { \partial ^ { 2 } \phi ( x , t ) } { \partial t ^ { 2 } } - \frac { \partial ^ { 2 } \phi ( x , t ) } { \partial x ^ { 2 } }
$$


or written more elegantly,

$$
\partial _ { t ^ { \prime } } ^ { 2 } - \partial _ { x ^ { \prime } } ^ { 2 } = \partial _ { t } ^ { 2 } - \partial _ { x } ^ { 2 }
$$

This is called the d'Alembertian operator.
To prove that it is Lorentz invariant, however, is much more involved. This was the original question but was nerfed as it was too mathematical. But we present the solution below for interested readers.
Using chain rule, the partial derivative operators transform as

$$
\begin{aligned}
& \frac { \partial } { \partial x } = \frac { \partial x ^ { \prime } } { \partial x } \frac { \partial } { \partial x ^ { \prime } } + \frac { \partial t ^ { \prime } } { \partial x } \frac { \partial } { \partial t ^ { \prime } } = \gamma \frac { \partial } { \partial x ^ { \prime } } - \gamma \beta \frac { \partial } { \partial t ^ { \prime } } \\
& \frac { \partial } { \partial t } = \frac { \partial x ^ { \prime } } { \partial t } \frac { \partial } { \partial x ^ { \prime } } + \frac { \partial t ^ { \prime } } { \partial t } \frac { \partial } { \partial t ^ { \prime } } = - \gamma \beta \frac { \partial } { \partial x ^ { \prime } } + \gamma \frac { \partial } { \partial t ^ { \prime } }
\end{aligned}
$$

We now calculate the operator □ in terms of the primed coordinates

$$
\square = \left( \gamma \frac { \partial } { \partial t ^ { \prime } } - \gamma \beta \frac { \partial } { \partial x ^ { \prime } } \right) ^ { 2 } - \left( \gamma \frac { \partial } { \partial x ^ { \prime } } - \gamma \beta \frac { \partial } { \partial t ^ { \prime } } \right) ^ { 2 }
$$

Expanding the squares, we get

$$
\square = \gamma ^ { 2 } \left( \frac { \partial ^ { 2 } } { \partial t ^ { \prime 2 } } - 2 \beta \frac { \partial ^ { 2 } } { \partial t ^ { \prime } \partial x ^ { \prime } } + \beta ^ { 2 } \frac { \partial ^ { 2 } } { \partial x ^ { \prime 2 } } \right) - \gamma ^ { 2 } \left( \frac { \partial ^ { 2 } } { \partial x ^ { \prime 2 } } - 2 \beta \frac { \partial ^ { 2 } } { \partial x ^ { \prime } \partial t ^ { \prime } } + \beta ^ { 2 } \frac { \partial ^ { 2 } } { \partial t ^ { \prime 2 } } \right)
$$

The mixed partial derivative terms cancel out. Collecting the remaining terms gives us

$$
\square = \gamma ^ { 2 } \left( 1 - \beta ^ { 2 } \right) \frac { \partial ^ { 2 } } { \partial t ^ { \prime 2 } } - \gamma ^ { 2 } \left( 1 - \beta ^ { 2 } \right) \frac { \partial ^ { 2 } } { \partial x ^ { \prime 2 } }
$$

Since $\gamma ^ { 2 } = \frac { 1 } { 1 - \beta ^ { 2 } }$, the coefficients become unity:

$$
\square = \frac { \partial ^ { 2 } } { \partial t ^ { \prime 2 } } - \frac { \partial ^ { 2 } } { \partial x ^ { \prime 2 } } = \square ^ { \prime }
$$

Because $\phi$ is a Lorentz scalar $\left( \phi = \phi ^ { \prime } \right)$, and the operator □ is invariant $( \square =$ □'), the equation transforms as:

$$
\square ^ { \prime } \phi ^ { \prime } + \sin \phi ^ { \prime } = 0
$$

The equation holds the same form in all inertial frames, proving it is indeed Lorentz invariant.

From here on, you may assume the Sine-Gordan equation to be Lorentz invariant.

(i) Using your results in (f) and (h), find the solution $\phi _ { k } ( x , t )$ to a solitary kink propagating at speed $v$ in the positive $x$-direction.

Solution: Having shown Lorentz invariance, it is a simple matter of applying our results. We can think of a kink propagating at speed $v$ as a Lorentz boost applied upon a static kink $\phi _ { s }$ ! Hence

$$
\phi _ { s } = 4 \arctan e ^ { x } \rightarrow \phi _ { k } = 4 \arctan e ^ { \frac { x - v t } { \sqrt { 1 - v ^ { 2 } } } }
$$


This is in fact simply length contraction; the factor of $\gamma = \frac { 1 } { \sqrt { 1 - v ^ { 2 } } }$ compresses the graph of $\phi _ { k } ( x )$ at any snapshot of time along the x-axis.
(j) What is the energy $E _ { v }$ of a kink propagating at speed $v$ ? Express your answer in terms of $E _ { 0 }$ and $v$.
Solution: Similarly we use relativistic analogy; we can simply infer that
$$
E _ { v } = \frac { E _ { 0 } } { \sqrt { 1 - v ^ { 2 } } }
$$
This is doable without relativistic methods - repeat the procedure in part g, and include kinetic terms. But given that the question is only allocated one mark, students should not be looking to do too much math.
(k) Now, consider two static kinks separated by a very large distance $D$. By considering the energy density or otherwise, deduce and justify a scaling relation between the interaction energy $\Delta E$ and the distance of separation $D$.
Solution: Near both static kinks, the influence from the other static kink is extremely small; hence the change in energy density at points near the kinks is very small. We want to consider what happens at the midpoint of the kinks, since that is where the energy density is most sensitive to changes in $D$.
Referring back to our results in part g, we can say that the energy density for each kink is:
$$
\epsilon ( x ) = 16 \frac { e ^ { 2 x } } { \left( 1 + e ^ { 2 x } \right) ^ { 2 } }
$$
Hence, the energy density at the midpoint of the two kinks is:
$$
\epsilon ( 0 ) = 16 \frac { e ^ { D } } { \left( 1 + e ^ { D } \right) ^ { 2 } } + 16 \frac { e ^ { - D } } { \left( 1 + e ^ { - D } \right) ^ { 2 } } \approx \frac { 16 } { e ^ { D } } + 16 e ^ { - D } = 32 e ^ { - D }
$$
We hence conclude that $\Delta E \propto e ^ { - D }$.
(l) Using your results in (k), deduce whether the interaction force of each pair below are attractive or repulsive.
    a. kink - kink
    b. kink - antikink
    c. antikink - antikink
Solution: For a kink-anti-kink pair, the $\frac { d E } { d D } < 0$, so the interaction force is attractive since $F = - \frac { d E } { d D }$. The same logic applies to the other pairs.
The answer is therefore a. repulsive, b. attractive, c. repulsive. In literature, kinks and antikinks are assigned something called topological charge - kinks have +1 charge, and antikinks have -1 charge.
