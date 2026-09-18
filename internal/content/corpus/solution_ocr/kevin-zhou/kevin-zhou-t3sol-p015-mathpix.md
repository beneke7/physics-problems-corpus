---
id: solution-ocr-kevin-zhou-t3sol-p015
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t3-p015]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 15. [A] Here we'll introduce a simple model for a ferromagnetic phase transition. Consider $N$ electrons, which may have spins $s _ { i } = \pm 1$. The energy of a configuration is

$$
E = - B \sum _ { i } s _ { i } - \frac { J } { 2 N } \sum _ { i \neq j } s _ { i } s _ { j } .
$$

The first term represents the effect of an external magnetic field $B$, while the second term represents an interaction, with strength described by the constant $J$, which tries to make the spins parallel. (In this simple model, we suppose all distinct pairs of spins interact equally. We could also make spins only interact with their neighbors, but this would complicate the analysis.)

(a) Define the average magnetization as $m = \sum _ { i } s _ { i } / N$. Find $E ( m )$, the energy in terms of $m$ and the other constants in the problem.
(b) For a fixed value of $m$, write down the number of states $\Omega ( m )$ with that magnetization.
(c) The probability of having a given value of $m$ is proportional to $e ^ { - \beta E ( m ) } \Omega ( m )$. Argue that this probability is maximized for the value of $m$ that minimizes the free energy
$$
F = E - T S .
$$
Hence the equilibrium configuration minimizes the free energy. This is the statistical mechanical way to argue that $F$ is minimized; the thermodynamic way was covered in T2.
(d) Assuming that $N \gg 1$ and using the approximation for $\log N$ ! mentioned in T2, show that the free energy $F ( m )$ is minimized when
$$
m = \tanh ( \beta B + \beta J m ) , \quad \beta = \frac { 1 } { k _ { B } T } .
$$
For a fixed $B > 0$, plot $m ( T )$. This should match with Curie's law, which you proved in T1.
(e) For $B = 0$, show there exists a critical temperature $T _ { c }$, above which $m ( T )$ is zero and below which it is nonzero. Also, find an approximate expression for the magnetization just below $T _ { c }$.
(f) For $T = T _ { c }$, find an approximate expression for $m$ for small $B$.

This is a phase transition where the material spontaneously becomes magnetized, and the simplest example of a phase transition which can be understood analytically. Though the results in (e) and (f) depend on the detailed parameters, the scalings found in these parts are universal, in the sense that they also apply to a wide variety of similar models.


Solution. (a) The first term is easy,

$$
- B \sum _ { i } s _ { i } = - N m B .
$$

To do the second term, we note that

$$
\sum _ { i \neq j } s _ { i } s _ { j } = \sum _ { i } \sum _ { j } s _ { i } s _ { j } - \sum _ { i } s _ { i } s _ { i } = \left( \sum _ { i } s _ { i } \right) ^ { 2 } - \sum _ { i } s _ { i } ^ { 2 } = N ^ { 2 } m ^ { 2 } - N .
$$

We hence have

$$
E = - N m B - \frac { 1 } { 2 } J N m ^ { 2 } + \frac { 1 } { 2 } J .
$$

(b) Of all $N$ electrons, $N _ { + }$have $s _ { i } = + 1$ and $N _ { - }$have $s _ { i } = - 1$, where $N _ { + } + N _ { - } = N$ and $m N = N _ { + } - N _ { - }$. Thus $N _ { + } = N / 2 + m N / 2$ and $N _ { - } = N / 2 - m N / 2$. The number of states is $N$ choose $N _ { + }$.
$$
\Omega ( m ) = \frac { N ! } { \left( \frac { N } { 2 } ( 1 + m ) \right) ! \left( \frac { N } { 2 } ( 1 - m ) \right) ! } .
$$
(c) The probability $P ( m ) = e ^ { - \beta E ( m ) } \Omega ( m )$ is found with Boltzmann's theorem, where each state has a probability of $e ^ { - E / k _ { B } T }$, so $\beta = 1 / k _ { B } T$. Maximizing $P ( m )$ is the same as maximizing $\log ( P ( m ) )$, which gives
$$
\log ( P ( m ) ) = - \frac { E } { k _ { B } T } + \log ( \Omega ( m ) ) .
$$
Since we're optimizing with respect to $m$, we can multiply both sides by $- k _ { B } T$ and maximize $P ( m )$ by minimizing $- k _ { B } T \log ( P ( m ) )$.
$$
- k _ { B } T \log ( P ( m ) ) = E - T k _ { B } \log ( \Omega ( m ) ) = E - T S .
$$
This is just the expression for free energy, thus minimizing free energy for a given value of $m$ will maximize the probability.
(d) Using $\log N ! \approx N \log N - N$ gives
$$
\log \left( \frac { N ! } { \left( \frac { N } { 2 } ( 1 + m ) \right) ! \left( \frac { N } { 2 } ( 1 - m ) \right) ! } \right) \approx N \log N - \frac { N } { 2 } ( 1 + m ) \log \frac { N ( 1 + m ) } { 2 } - \frac { N } { 2 } ( 1 - m ) \log \frac { N ( 1 - m ) } { 2 } .
$$
To simplify this, we can expand the logarithms to get
$$
N \left( \log N - \frac { 1 + m } { 2 } \left( \log N + \log \frac { 1 + m } { 2 } \right) - \frac { 1 - m } { 2 } \left( \log N + \log \frac { 1 - m } { 2 } \right) \right)
$$
and various factors cancel to give
$$
- N \left( \frac { 1 + m } { 2 } \log \frac { 1 + m } { 2 } + \frac { 1 - m } { 2 } \log \frac { 1 - m } { 2 } \right) .
$$
Setting $d F / d m$ to zero gives
$$
0 = - N B - N J m - T \frac { \partial S } { \partial m }
$$

which is equivalent to
$$
N ( B + J m ) = - k _ { B } T \frac { \partial \log \Omega } { \partial m } = N k _ { B } T \left( \frac { 1 } { 2 } \log \frac { 1 + m } { 2 } - \frac { 1 } { 2 } \log \frac { 1 - m } { 2 } \right) .
$$
Then we have
$$
\beta B + \beta J m = \frac { 1 } { 2 } \log \frac { 1 + m } { 1 - m } = \tanh ^ { - 1 } m .
$$
This matches Curie's law at high temperature, and when plotted looks like this:
![](../../../figures/solution-ocr/569777839c3b9ee3e3ff2661.jpg)
(e) With $B = 0$, for the magnetization to be nonzero, we need a non-zero solution to
$$
m = \tanh \left( \frac { J m } { k _ { B } T } \right) .
$$
Since the second derivative of $\tanh ( a x ) , - 2 a ^ { 2 } \operatorname { sech } ^ { 2 } ( a x ) \tanh ( a x )$ is always negative for $x > 0$, that means that the slope of $\tanh ( a x )$ will always be decreasing for $x > 0$. In order for the graphs of $x$ and $\tanh ( a x )$ to intersect again after $x = 0$, the slope of $\tanh ( a x )$ must be greater than the slope of $x$, which is 1 . Thus the critical value is where $a = 1$, so
$$
T _ { c } = \frac { J } { k _ { B } } .
$$
To find what happens just below $T _ { c }$, we Taylor expand the hyperbolic tangent about zero, which is useful because $m$ will be small,
$$
\tanh ( x ) = x - \frac { x ^ { 3 } } { 3 } + \mathcal { O } \left( x ^ { 5 } \right) .
$$
Letting $T = ( 1 - \epsilon ) T _ { c }$, we have $J m / k _ { B } T = m / ( 1 - \epsilon )$, giving
$$
m \approx \frac { m } { 1 - \epsilon } - \frac { 1 } { 3 } \frac { m ^ { 3 } } { ( 1 - \epsilon ) ^ { 3 } }
$$
which means that at lowest order in epsilon,
$$
m \approx \sqrt { 3 \epsilon } = \left( \frac { 3 \left( T _ { c } - T \right) } { T _ { c } } \right) ^ { 1 / 2 } .
$$
(f) In this case we have $m = \tanh ( m + B / J )$, and using the same series expansion as above, neglecting higher-order terms in $B$, we find $m \approx ( 3 B / J ) ^ { 1 / 3 }$.

[5] Problem 16. APhO 2011, problem 3. A nice problem on a real-world mechanical phase transition. Some of the intuition you gained studying the van der Waals gas will be useful.


## 4 Thermodynamic Systems

Now that we know all about the different methods of heat transfer, as well as phase transitions, we consider some questions involving a mix of these concepts as well as mechanics.

Example 6: IPhO 1967.3
Consider two identical homogeneous balls with the same initial temperatures. One of them is at rest on a horizontal plane, while the other hangs on a thread.
![](../../../figures/solution-ocr/b63e6012baec5906ac20e14c.jpg)
![](../../../figures/solution-ocr/e37e235e98c9900c353a69bc.jpg)
The same quantity of heat is supplied to both balls. Which has the higher final temperature?

Solution
This infamous problem, which appeared on the first IPhO, was the original "troll" Olympiad question. The balls are different because the one on the plane thermally expands upward, while the one on a thread thermally expands downward. This tiny change in gravitational potential energy means that the ball on the thread ends up hotter.

This is an incredible solution - in the sense that it is not credible. About fifty years after it was written, physicists at Oxford showed that it is wrong! Suppose the logic above were actually right. Then a heat engine can be constructed with these four steps:

1. Heat the ball on the plane, therefore raising its center of mass.
2. Attach the ball to a thread and remove the plane.
3. Cool the ball on the thread, therefore raising its center of mass.
4. Put a plane just under the ball's new position and remove the thread.

This is a heat engine, where the work goes into raising the ball. If the ball is only heated and cooled a tiny amount $d T$, then the heat supplied is proportional to $d T$, but the distance through which the ball rises is also proportional to $d T$. Therefore, the efficiency of the cycle becomes a constant as $d T$ goes to zero, which exceeds the Carnot efficiency (which instead goes to zero) and hence violates the second law of thermodynamics.

A real ball doesn't violate the second law, because it also stretches while hanging on the thread, and squashes while on the plane. The slick solution neglects these effects and considers only thermal expansion, but the above argument shows that this assumption is inconsistent: you can't have the latter without the former. This is an example of how thermodynamic considerations alone can, perhaps surprisingly, yield information about mechanical properties.


The paper linked above performs a careful analysis and shows that, for most materials, the ball on the thread instead ends up colder.

Example 7
Why does a breeze cool you down, and why do clothes make you warmer?

Solution
Like most gases, air has a very small thermal conductivity, and enough viscosity so that you carry around a thin layer of warm air with you wherever you go. (The main reason you cool down is because this warm air rises away from you, by convection.) When a breeze is blowing, it strips off this cushion of warm air, which is why you feel colder.

When you're sweaty, the same logic applies. The layer of air you carry around is also moist, saturated with water vapor from your sweat. Again, a breeze removes this layer, allowing more evaporation to happen, cooling you down.

Clothing material itself actually has a higher thermal conductivity than air. Its real purpose is to trap the layer of warm, moist air around you, preventing it from being blown away by breezes or rising from convection. (That's also how greenhouses keep plants warm: the sun warms air near the ground, and the glass room prevents that air from rising away. Confusingly, this has nothing to do with the atmospheric "greenhouse effect.")

Example 8
Can you boil water in a pot by putting it into a bigger pot of boiling water?

Solution
No, because boiling is a phase transition that requires latent heat. The water in the small pot can get heated up to boiling temperature, but it can't start boiling, because at that point it'll be at the same temperature as the bigger pot, and no more heat can flow.
[1] Problem 17 (IPhO 1996). A thermally insulated piece of metal is heated under atmospheric pressure by an electric current so that it receives a constant power $P$. The temperature is

$$
T ( t ) = T _ { 0 } \left( 1 + a \left( t - t _ { 0 } \right) \right) ^ { 1 / 4 }
$$

where $T _ { 0 } , t _ { 0 }$, and $a$ are constants. Find the heat capacity $C ( T )$.
Solution. By definition, $C ( T ) = d Q / d T$. With constant power $P , d Q = P d t$, and

$$
\frac { d T } { d t } = \frac { P } { C ( T ) } = \frac { 1 } { 4 } T _ { 0 } \left( 1 + a \left( t - t _ { 0 } \right) \right) ^ { - 3 / 4 } a = \frac { a T _ { 0 } ^ { 4 } } { 4 T ^ { 3 } } .
$$

This gives the answer,

$$
C ( T ) = \frac { 4 T ^ { 3 } P } { a T _ { 0 } ^ { 4 } } .
$$


[3] Problem 18. NBPhO 2011, problem 8. A tricky data analysis problem.
[3] Problem 19. NBPhO 2014, problem 9. A nice problem reviewing radiation and kinetic theory.
[4] Problem 20. EuPhO 2019, problem 1.

## 5 Thermodynamic Fluids

In this section, we focus on problems combining thermodynamics with fluids, as covered in M7. We begin with some questions which only require fluid statics.

[5] Problem 21. IPhO 1998, problem 2. A very nice real-world fluids/thermodynamics question.
[5] Problem 22. APhO 2009, problem 3. Another nice, simple model of a real-world phenomenon.
Idea 6
In M7 we considered Bernoulli's principle for incompressible liquids with no temperature. However, in general fluids are compressible and carry internal energy. To derive Bernoulli's principle in this more general context, we apply conservation of energy to a tube of streamlines, as one mole of ideal gas flows through it. We neglect gravity, since it typically is unimportant for such rapid flows. The energy of a mole of gas at the entry of the tube is
$$
\frac { 1 } { 2 } \mu v _ { 1 } ^ { 2 } + c _ { V } T _ { 1 }
$$
where $\mu$ is the molar mass, and $c _ { V }$ is the heat capacity per mole. Similarly, the energy of a mole of gas at the other end is
$$
\frac { 1 } { 2 } \mu v _ { 2 } ^ { 2 } + c _ { V } T _ { 2 } .
$$
Assuming there's no heat transfer, the difference must be the work done on the tube of fluid as a mole of gas flows through,
$$
p _ { 1 } \delta V _ { 1 } - p _ { 2 } \delta V _ { 2 } = R \left( T _ { 1 } - T _ { 2 } \right)
$$
where the $\delta V _ { i }$ are the volumes of a mole of gas at the entry and exit, and we used the ideal gas law. Combining and using $c _ { p } = c _ { V } + R$ gives
$$
\frac { 1 } { 2 } \mu v ^ { 2 } + c _ { p } T = \mathrm { const }
$$
along a streamline in steady flow.

Remark
You might also see Bernoulli's principle in the form

$$
\frac { 1 } { 2 } v ^ { 2 } + g h + c _ { p } T = \mathrm { const }
$$

where we've added on the contribution of gravitational potential energy. In this case, $c _ { p }$ is the heat capacity at constant pressure per unit mass, not per mole. Unfortunately, people


use the letter $c$ or $C$ to denote many different kinds of (specific) heat capacities. Whenever doing a problem where a heat capacity is given, check the dimensions!

## Example 9: Wang and Ricardo

A rocket propels itself by burning fuel to release diatomic gas of temperature $T _ { 1 }$ in its combustion chamber, which has cross-sectional area $A _ { 1 }$. The gas then flows adiabatically and is expelled out of the nozzle, which has a cross-sectional area $A _ { 2 }$, at a speed $v _ { 2 }$ relative to the rocket, pressure $p _ { 2 }$ (which is equal to the ambient pressure), and temperature $T _ { 2 } < T _ { 1 }$. In the limit of steady flow, determine the thrust experienced by the rocket.

## Solution

Since the flow is adiabatic and the gas is diatomic,

$$
p _ { 1 } = p _ { 2 } \left( \frac { T _ { 1 } } { T _ { 2 } } \right) ^ { 7 / 2 } .
$$

As discussed in M7, mass conservation in steady flow means $\rho A v$ must be the same on both sides of the nozzle. The ideal gas law tells us that $\rho \propto p / T$, so

$$
\frac { p _ { 1 } A _ { 1 } v _ { 1 } } { T _ { 1 } } = \frac { p _ { 2 } A _ { 2 } v _ { 2 } } { T _ { 2 } } .
$$

Combining these two gives a relation between the velocities,

$$
v _ { 1 } = v _ { 2 } \frac { A _ { 2 } } { A _ { 1 } } \left( \frac { T _ { 2 } } { T _ { 1 } } \right) ^ { 5 / 2 } .
$$

Bernoulli's principle gives

$$
\frac { 1 } { 2 } \mu v _ { 1 } ^ { 2 } + \frac { 7 } { 2 } R T _ { 1 } = \frac { 1 } { 2 } \mu v _ { 2 } ^ { 2 } + \frac { 7 } { 2 } R T _ { 2 }
$$

where we neglected the gravitational energy. Combining with our previous relation gives

$$
v _ { 2 } ^ { 2 } = \frac { 7 R \left( T _ { 1 } - T _ { 2 } \right) } { \mu \left( 1 - \left( A _ { 2 } / A _ { 1 } \right) ^ { 2 } \left( T _ { 2 } / T _ { 1 } \right) ^ { 5 } \right) } .
$$

Finally, the thrust is

$$
F = \frac { d p } { d t } = \rho _ { 2 } A _ { 2 } v _ { 2 } ^ { 2 } = \frac { \mu p _ { 2 } A _ { 2 } v _ { 2 } ^ { 2 } } { R T _ { 2 } } = \frac { 7 p _ { 2 } A _ { 2 } \left( T _ { 1 } - T _ { 2 } \right) } { T _ { 2 } \left( 1 - \left( A _ { 2 } / A _ { 1 } \right) ^ { 2 } \left( T _ { 2 } / T _ { 1 } \right) ^ { 5 } \right) } .
$$

## Example 10

How does the Bernoulli's principle above reduce to the incompressible one used in M7?


Solution
This is trickier than it seems. For simplicity, let's neglect the gravitational contribution. Then by the ideal gas law, the compressible Bernoulli's principle derived above is

$$
\frac { 1 } { 2 } v ^ { 2 } + \frac { \gamma } { \gamma - 1 } \frac { P } { \rho } = \text { const. }
$$

When the flow is incompressible, $\rho$ is constant, but if we just multiply by $\rho$ we get

$$
\frac { 1 } { 2 } \rho v ^ { 2 } + \frac { \gamma } { \gamma - 1 } P = \mathrm { const }
$$

which is not the expected result!
In fact, there's something more troubling under the surface. The Bernoulli's principle derived in M7 applies to water flow, since water is incompressible. And the compressible version derived above applies to ideal gas flow, since gas is compressible. But in M7, we applied the incompressible Bernoulli's principle to gas flow! How does that even make sense?

The resolution to the two questions is the same: the key assumption needed to get to the original form of Bernoulli's principle is not that an ideal gas is incompressible, because that's simply not true. Instead, the key assumption is that the gas flow is much slower than the speed of sound, $v ^ { 2 } \ll c _ { s } ^ { 2 } \sim P / \rho$. In this limit, the kinetic energy term in the generalized Bernoulli's principle is much smaller than the internal energy term. Thus, in the course of subsonic flow, the temperature, pressure, and density of the gas can only change by a small relative amount. For example, the pressure is $P ( x ) = P _ { 0 } + \Delta P ( x )$ where $\Delta P \ll P _ { 0 }$. (To avoid some confusion, remember that Bernoulli's principle always assumes steady flow. The air in my bike tires has $\Delta P \approx 6 P _ { 0 }$, but that's because the process of pumping a tire is not a steady flow.)

But if that's true, then what went wrong with just multiplying our result above by $\rho$ ? The point is that for very subsonic flows, the $v ^ { 2 }$ term is much smaller than the $P / \rho$ term, so we need to evaluate the $P / \rho$ term to a very good relative precision to get correct results. (If my bank was careless and randomly misplaced 0.1\% of its money, then that might mean losing 100\% of my savings, since my account's value is small compared to its total.)

Now we're ready to do the derivation properly. We start from the first equation above, but we don't multiply by $\rho$. Instead, we note that $P / \rho ^ { \gamma }$ is constant because the gas is compressed adiabatically, since we neglected heat transfer, so we multiply by $\rho _ { 0 } = \rho \left( P _ { 0 } / P \right) ^ { 1 / \gamma }$, giving

$$
\left( \frac { P _ { 0 } } { P } \right) ^ { 1 / \gamma } \frac { 1 } { 2 } \rho v ^ { 2 } + \frac { \gamma } { \gamma - 1 } \left( \frac { P } { P _ { 0 } } \right) ^ { ( \gamma - 1 ) / \gamma } P _ { 0 } = \text { const. }
$$

Since the first term is the small one, we can approximate $P _ { 0 } \approx P$ there without much error. As for the second term, we expand $\left( P / P _ { 0 } \right) ^ { ( \gamma - 1 ) / \gamma }$ with the binomial theorem to get

$$
\frac { 1 } { 2 } \rho v ^ { 2 } + \frac { \gamma } { \gamma - 1 } P _ { 0 } + \Delta P = \mathrm { const }
$$

and subtracting the constant $P _ { 0 } / ( \gamma - 1 )$ recovers the "incompressible" Bernoulli's principle.


In conclusion, the Bernoulli's principle derived in this problem set works for arbitrarily fast gas flows, while the incompressible form in M7 only works for very subsonic flows. But that doesn't mean you should never use the latter. When the flow is subsonic, the incompressible form is easy to use, while the more general form requires great care to get the correct result. You should only use the general form when it's actually necessary, i.e. for the very fast gas flows considered in the following problems.

[3] Problem 23 (Feynman). Air with density $\rho$, pressure $P$, and adiabatic index $\gamma$ flows at uniform speed $v$ through a smooth pipe of constant cross-sectional area $A$. It is heated as it passes a wire grid, which offers negligible resistance to the flow, with a power $\dot { Q }$. This is a simple model for a jet engine. For simplicity, suppose the output pressure is also $P$, though this would not be true in a practical engine.
    (a) Find the speed $v ^ { \prime }$ with which the air exits the tube, in terms of the given parameters.
    (b) Find the thrust produced, in terms of $v ^ { \prime }$ and the other parameters.
    (c) In the limit of small $\dot { Q }$, find the engine's efficiency.
Next to rockets and computing chips, jet engines are some of the most difficult technologies humans can build; see this article for a nice overview of the history.
Solution. (a) We will conserve mass and energy. Denote quantities that leave with a prime, and let $\mu$ be the molar mass. The rate of mass flow in must match the rate out,
$$
J = \rho A v = \rho ^ { \prime } A v ^ { \prime } .
$$
To apply energy conservation, we use a modified form of Bernoulli's principle, which accounts for the inflow of heat,
$$
\frac { \dot { Q } } { J } = \frac { 1 } { 2 } \left( v ^ { \prime 2 } - v ^ { 2 } \right) + \frac { c _ { P } } { \mu } \left( T ^ { \prime } - T \right) .
$$
The ideal gas law states
$$
\rho = \frac { \mu P } { R T }
$$
which we can use to eliminate $\mu$. Additionally using $c _ { p } = \gamma R / ( \gamma - 1 )$ gives
$$
\frac { \dot { Q } } { J } = \frac { 1 } { 2 } \left( v ^ { \prime 2 } - v ^ { 2 } \right) + \frac { P } { \rho T } \frac { \gamma } { \gamma - 1 } \left( T ^ { \prime } - T \right) .
$$
Since $P = P ^ { \prime }$, combining the ideal gas law with mass conservation gives
$$
\frac { v } { T } = \frac { v ^ { \prime } } { T ^ { \prime } } .
$$
Using this to eliminate $T ^ { \prime }$ will give a quadratic equation for $v ^ { \prime }$ in terms of known parameters,
$$
\frac { 1 } { 2 } v ^ { \prime 2 } + \frac { c _ { 0 } ^ { 2 } } { v } v ^ { \prime } - \left( \frac { 1 } { 2 } v ^ { 2 } + c _ { 0 } ^ { 2 } + \frac { \dot { Q } } { J } \right) = 0 , \quad c _ { 0 } ^ { 2 } = \frac { \gamma } { \gamma - 1 } \frac { P } { \rho } .
$$
Using the quadratic equation and taking the physical root,
$$
v ^ { \prime } = \sqrt { \left( v + c _ { 0 } ^ { 2 } / v \right) ^ { 2 } + 2 \dot { Q } / J } - c _ { 0 } ^ { 2 } / v .
$$
As a check, note that $v ^ { \prime } = v$ when $\dot { Q } = 0$.

(b) By conservation of momentum, the thrust must be
$$
F = J \Delta v = \rho A v \left( v ^ { \prime } - v \right) .
$$
(c) By applying the binomial theorem to the result of part (a), the efficiency is
$$
\frac { F v } { \dot { Q } } \approx \frac { 1 } { 1 + c _ { 0 } ^ { 2 } / v ^ { 2 } }
$$
which is small for low $v$, and approaches an efficiency of 1 as $v \rightarrow \infty$.

[3] Problem 24 (Wang 2.17). Consider an ideal gas with pressure $p$, density $\rho$, and adiabatic index $\gamma$. A density pulse is set up in the gas, traveling along the $- x$ direction with speed $c$. Inside the pulse, the gas has local velocity $v \ll c$ in the lab frame, and a local density $\rho + \Delta \rho$, where $\Delta \rho \ll \rho$.

(a) Transform to the reference frame where the pulse is at rest, and find three constraints, using mass conservation, energy conservation, and the fact that the gas is compressed and expanded adiabatically when it enters and leaves the pulse (i.e. heat conduction is negligible).
(b) Combine these relations to find $c$. Work to lowest order in the small quantities $v / c$ and $\Delta \rho / \rho$.

The quantity $c$ is the adiabatic speed of sound in a gas, which we'll derive in a different way in W3. For more about sound waves, see chapter 31 of Blundell, or section 14.1 of Lautrup.

Solution. (a) We work in the reference frame moving to the left with speed $c$. In this frame, the gas has velocity $c$ everywhere, except at the pulse, where it has velocity $c + v$. The density away from the pulse is $\rho$ and the density at the pulse is $\rho + \Delta \rho$.

Mass conservation gives

$$
( c + v ) ( \rho + \Delta \rho ) = c \rho .
$$

Using $c _ { p } = ( \gamma / ( \gamma - 1 ) ) R$, Bernoulli's principle gives

$$
\frac { 1 } { 2 } \mu c ^ { 2 } + \frac { \gamma } { \gamma - 1 } R T = \frac { 1 } { 2 } \mu ( c + v ) ^ { 2 } + \frac { \gamma } { \gamma - 1 } R ( T + \Delta T ) .
$$

Finally, since the gas is compressed adiabatically we have

$$
T \propto \rho ^ { \gamma - 1 } .
$$

(b) Mass conservation gives the relation
$$
\frac { \Delta \rho } { \rho } \approx - \frac { v } { c }
$$
to lowest order. Bernoulli's principle gives
$$
\mu c v = - \frac { \gamma } { \gamma - 1 } R \Delta T
$$
to lowest order. Finally, the adiabatic condition to lowest order is
$$
\frac { \Delta T } { T } \approx ( \gamma - 1 ) \frac { \Delta \rho } { \rho } .
$$

Combining this with Bernoulli's principle to eliminate $\Delta T$ gives

$$
\mu c v \approx - \gamma R T \frac { \Delta \rho } { \rho } \approx \gamma R T \frac { v } { c } .
$$

Thus, solving for $c$, we conclude

$$
c ^ { 2 } = \frac { \gamma R T } { \mu } = \frac { \gamma p V } { \mu n } = \frac { \gamma p } { \rho }
$$

which is the adiabatic speed of sound.
Example 11
Show that the kinetic and potential energy of a sinusoidal, adiabatic sound wave are equal.

Solution
First, we explicitly define our notation. The sound wave profile is

$$
P = P _ { 0 } + \Delta P \cos ( k x - \omega t ) , \quad \rho = \rho _ { 0 } + \Delta \rho \cos ( k x - \omega t )
$$

and

$$
\frac { v } { c } = \frac { v _ { 0 } } { c } \cos ( k x - \omega t ) , \quad T = T _ { 0 } + \Delta T \cos ( k x - \omega t ) .
$$

In problem 24, you derived relations between the parameters $( \Delta P ) / P _ { 0 } , ( \Delta \rho ) / \rho _ { 0 } , v _ { 0 } / c$, and $( \Delta T ) / T _ { 0 }$, which are all assumed small, and of the same order of magnitude. The total energy density of the fluid, up to second order, is

$$
u = \frac { 1 } { 2 } \rho _ { 0 } v ^ { 2 } + c _ { v } \rho T
$$

where here $c _ { v }$ is the heat capacity per unit mass. The first term is the bulk kinetic energy density, while the change in the second term is the potential energy density, where we're using the usual meaning of potential energy as any energy which isn't kinetic.

This all looks pretty straightforward, but there's a reason that most introductory textbooks never write down this expression. You can see the issue by applying the ideal gas law to the second term. Since $P \propto \rho T$, this term is proportional to $P$, but the average of $P$ is just $P _ { 0 }$. This suggests that sound waves have no potential energy density at all, which is wrong. For instance, if you instantly take out all the macroscopic kinetic energy, setting $v$ to zero, then there is still energy remaining that can be harvested because the pressure is nonuniform.

Here's the problem: energy is inherently a second order quantity. If $\rho$ and $T$ were both small quantities, then it would be good enough to multiply them to get the answer to second order. But instead, $\rho$ and $T$ are the quantities $\rho _ { 0 }$ and $T _ { 0 }$ shifted by small quantities $\Delta \rho$ and $\Delta T$. That means that to get the quantity $\rho T$ correct to second order, we need to get both $\rho$ and $T$ individually correct to second order, which is beyond the first order approximations we started with! This is a conceptual issue that occurs whenever you have a perturbation that shifts existing properties of a medium. (It doesn't happen for waves on a string, which we cover in W1, because those waves are parametrized by $y$, and $y = 0$ when there is no wave.)


It's possible to fix this issue, but we need to be careful. First, let's use the ideal gas law to change variables to pressure, so we only have one quantity to deal with,

$$
c _ { v } \rho T = \frac { R } { \mu } \frac { 1 } { \gamma - 1 } \rho T = \frac { P } { \gamma - 1 } .
$$

The key insight is that we can keep our expression for $\rho$ the same. The reason is that for the wave equation to continue to be satisfied at second order, we can only add second order terms that are constant, or also sinusoids. Adding a constant to the density is not allowed because we know the total number of particles is conserved, so the mass $\int \rho d V$ is, and adding a sinusoid can be absorbed by simply redefining $\Delta \rho$.

Now, we know that $P \propto \rho ^ { \gamma }$, and letting $\delta \rho = \Delta \rho \cos ( k x - \omega t )$ for convenience, we have

$$
\frac { P } { P _ { 0 } } = \left( \frac { \rho } { \rho _ { 0 } } \right) ^ { \gamma } = 1 + \frac { \gamma \delta \rho } { \rho _ { 0 } } + \frac { \gamma ( \gamma - 1 ) } { 2 } \left( \frac { \delta \rho } { \rho _ { 0 } } \right) ^ { 2 } .
$$

When we integrate the first term, we get the internal energy of the fluid at rest. The second term averages to zero, and so can be disregarded. The third term gives the desired result,

$$
u = \frac { 1 } { 2 } \rho _ { 0 } v ^ { 2 } + \frac { \gamma P _ { 0 } } { 2 } \left( \frac { \delta \rho } { \rho _ { 0 } } \right) ^ { 2 } .
$$

Now that the energy is in terms of small quantities squared, we can relax and use first order results. Using the results derived in problem 24, this can be simplified to

$$
u = \frac { 1 } { 2 } \rho _ { 0 } v ^ { 2 } + \frac { 1 } { 2 } \rho _ { 0 } c ^ { 2 } \left( \frac { \delta \rho } { \rho _ { 0 } } \right) ^ { 2 }
$$

and the two contributions are equal, because $v / c = \delta \rho / \rho _ { 0 }$.
As a check on this result, it is often true that the energy density is equal to the momentum density times the wave speed, $u = p c$. (For example, this corresponds to $E = p c$ for photons.) The momentum density is $p = \rho v = \left( \rho _ { 0 } + \delta \rho \right) v$. The first order term represents the overall momentum of all of the gas, not the momentum due to the sound wave itself, so it can be ignored. The second order term is

$$
p = \delta \rho v = \frac { \rho _ { 0 } v ^ { 2 } } { c }
$$

which is exactly the expected result.
Ironically, while we began this discussion by noting that the energy of a transverse wave on a string is more straightforward, the longitudinal momentum of a transverse wave on a string is far more confusing - how can there be any if the string moves only transversely? Does the above identity $u = p c$ break down for these waves, or do we just need to evaluate $p$ more carefully? (For one perspective in this ongoing debate, see this paper.) All of this is too subtle to be relevant to Olympiads; even string theorists get confused about it. It's just a reminder that there are always subtleties lurking in even basic physics.


[3] Problem 25. IPhO 2012, problem 1B. A tricky real-world problem on fluids and condensation.
