---
id: solution-ocr-usapho-2019-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2019_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2019-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A2
Green Revolution ${ } ^ { 1 }$
In this problem, we will investigate a simple thermodynamic model for the conversion of solar energy into wind. Consider a planet of radius $R$, and assume that it rotates so that the same side always faces the Sun. The bright side facing the Sun has a constant uniform temperature $T _ { 1 }$, while the dark side has a constant uniform temperature $T _ { 2 }$. The orbit radius of the planet is $R _ { 0 }$, the Sun has temperature $T _ { s }$, and the radius of the Sun is $R _ { s }$. Assume that outer space has zero temperature, and treat all objects as ideal blackbodies.

a. Find the solar power $P$ received by the bright side of the planet. (Hint: the Stefan-Boltzmann law states that the power emitted by a blackbody with area $A$ is $\sigma A T ^ { 4 }$.)

Solution
The intensity of solar radiation at the surface of the sun is $\sigma T _ { s } ^ { 4 }$, so the intensity at the planet's orbit radius is

$$
I = \sigma T _ { s } ^ { 4 } \frac { R _ { s } ^ { 2 } } { R _ { 0 } ^ { 2 } } .
$$

The area subtended by the planet is $\pi R ^ { 2 }$, so

$$
P = \pi \sigma T _ { s } ^ { 4 } \frac { R ^ { 2 } R _ { s } ^ { 2 } } { R _ { 0 } ^ { 2 } } .
$$

In order to keep both $T _ { 1 }$ and $T _ { 2 }$ constant, heat must be continually transferred from the bright side to the dark side. By viewing the two hemispheres as the two reservoirs of a reversible heat engine, work can be performed from this temperature difference, which appears in the form of wind power. For simplicity, we assume all of this power is immediately captured and stored by windmills.

b. The equilibrium temperature ratio $T _ { 2 } / T _ { 1 }$ depends on the heat transfer rate between the hemispheres. Find the minimum and maximum possible values of $T _ { 2 } / T _ { 1 }$. In each case, what is the wind power $P _ { w }$ produced?

Solution
The minimum value is simply zero; in this case zero heat is transferred to the dark side of the planet. Since no heat is transferred, the heat engine can't run, so $P _ { w } = 0$. (To show this a bit more carefully, note that the entropy exhausted by the heat engine is $Q _ { 2 } / T _ { 2 } \propto T _ { 2 } ^ { 3 }$ by the Stefan-Boltzmann law. In the limit $T _ { 2 } \rightarrow 0$, the entropy out goes to zero, so the entropy in and hence the heat intake also goes to zero.)

The maximum value is $T _ { 2 } / T _ { 1 } = 1$. It cannot be any higher by the second law of thermodynamics. In this case, there is no temperature difference, so the heat engine has zero efficiency and $P _ { w } = 0$. Power $P / 2$ is simply transferred from the bright side to the dark side as heat.

c. Find the wind power $P _ { w }$ in terms of $P$ and the temperature ratio $T _ { 2 } / T _ { 1 }$.
[^0]

## Solution

Let heat be transferred from the bright side at a rate $Q _ { 1 }$ and transferred to the dark side at a rate $Q _ { 2 }$. Then by conservation of energy,

$$
Q _ { 1 } = P _ { w } + Q _ { 2 } .
$$

Since the two hemispheres have constant temperatures, energy balance for each gives

$$
P = Q _ { 1 } + \left( 2 \pi R ^ { 2 } \sigma \right) T _ { 1 } ^ { 4 } , \quad Q _ { 2 } = A T _ { 2 } ^ { 4 } .
$$

Finally, since the engine is reversible,

$$
\frac { Q _ { 1 } } { T _ { 1 } } = \frac { Q _ { 2 } } { T _ { 2 } } .
$$

By combining the first three equations, and defining $x = T _ { 2 } / T _ { 1 }$, we have

$$
P _ { w } = Q _ { 1 } - Q _ { 2 } = P - \left( 2 \pi R ^ { 2 } \sigma \right) \left( T _ { 1 } ^ { 4 } + T _ { 2 } ^ { 4 } \right) = P - \left( 2 \pi R ^ { 2 } \sigma \right) T _ { 1 } ^ { 4 } \left( 1 + x ^ { 4 } \right) .
$$

This is not yet in terms of $P$ and $x$, so now we use the reversibility condition,

$$
\frac { P - A T _ { 1 } ^ { 4 } } { T _ { 1 } } = \frac { A T _ { 2 } ^ { 4 } } { T _ { 2 } }
$$

which simplifies to

$$
P = \left( 2 \pi R ^ { 2 } \sigma \right) \left( T _ { 1 } ^ { 4 } + T _ { 1 } T _ { 2 } ^ { 3 } \right) = \left( 2 \pi R ^ { 2 } \sigma \right) T _ { 1 } ^ { 4 } \left( 1 + x ^ { 3 } \right) .
$$

Plugging this in above, we find

$$
P _ { w } = P - \frac { P } { 1 + x ^ { 3 } } \left( 1 + x ^ { 4 } \right) = \frac { x ^ { 3 } ( 1 - x ) } { 1 + x ^ { 3 } } P .
$$

d. Estimate the maximum possible value of $P _ { w }$ as a fraction of $P$, to one significant figure. Briefly explain how you obtained this estimate.

## Solution

There are many ways to get the required answer. For example, by sketching the function, one can see that there is a unique maximum at an intermediate value of $x$, and furthermore that this maximum is at $x > 0.5$, because of the rapid rise of the $x ^ { 3 }$ factor. One could then compute $P _ { w } / P$ with a calculator at a few trial values such as $x = 0.5,0.7,0.9$, which are already enough to get the desired accuracy.
The optimum value is $x = 0.69$, at which point

$$
P _ { w } ^ { \max } = 0.077 P .
$$


Hence in this model, at most 7.7\% of solar energy can be converted into wind energy. Any answer within 15\% of this value was accepted.
