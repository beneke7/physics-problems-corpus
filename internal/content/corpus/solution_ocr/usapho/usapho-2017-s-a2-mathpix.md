---
id: solution-ocr-usapho-2017-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2017-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A2

Consider two objects with equal heat capacities $C$ and initial temperatures $T _ { 1 }$ and $T _ { 2 }$. A Carnot engine is run using these objects as its hot and cold reservoirs until they are at equal temperatures. Assume that the temperature changes of both the hot and cold reservoirs is very small compared to the temperature during any one cycle of the Carnot engine.

a. Find the final temperature $T _ { f }$ of the two objects, and the total work $W$ done by the engine.

## Solution

Since a Carnot engine is reversible, it produces no entropy,

$$
d S _ { 1 } + d S _ { 2 } = \frac { d Q _ { 1 } } { T _ { 1 } } + \frac { d Q _ { 2 } } { T _ { 2 } } = 0
$$


By the definition of heat capacity, $d Q _ { i } = C d T _ { i }$, so

$$
\frac { d T _ { 1 } } { T _ { 1 } } = - \frac { d T _ { 2 } } { T _ { 2 } } .
$$

Integrating this equation shows that $T _ { 1 } T _ { 2 }$ is constant, so the final temperature is

$$
T _ { f } = \sqrt { T _ { 1 } T _ { 2 } } .
$$

The change in thermal energy of the objects is

$$
C \left( T _ { f } - T _ { 1 } \right) + C \left( T _ { f } - T _ { 2 } \right) = C \left[ 2 \sqrt { T _ { 1 } T _ { 2 } } - T _ { 1 } - T _ { 2 } \right] .
$$

By the First Law of Thermodynamics, the missing energy has been used to do work, so

$$
W = C \left[ T _ { 1 } + T _ { 2 } - 2 \sqrt { T _ { 1 } T _ { 2 } } \right] .
$$

Now consider three objects with equal and constant heat capacity at initial temperatures $T _ { 1 } = 100 \mathrm {~K} , T _ { 2 } = 300 \mathrm {~K}$, and $T _ { 3 } = 300 \mathrm {~K}$. Suppose we wish to raise the temperature of the third object.

To do this, we could run a Carnot engine between the first and second objects, extracting work $W$. This work can then be dissipated as heat to raise the temperature of the third object. Even better, it can be stored and used to run a Carnot engine between the first and third object in reverse, which pumps heat into the third object.

Assume that all work produced by running engines can be stored and used without dissipation.

b. Find the minimum temperature $T _ { L }$ to which the first object can be lowered.

## Solution

By the Second Law of Thermodynamics, we must have $T _ { L } = 100 \mathrm {~K}$. Otherwise, we would have a process whose sole effect was a net transfer of heat from a cold body to a warm one.

c. Find the maximum temperature $T _ { H }$ to which the third object can be raised.

## Solution

The entropy of an object with constant heat capacity is

$$
S = \int \frac { d Q } { T } = C \int \frac { d T } { T } = C \ln T
$$


Since the total entropy remains constant, $T _ { 1 } T _ { 2 } T _ { 3 }$ is constant; this is a direct generalization of the result for $T _ { f }$ found in part (a). Energy is also conserved, as it makes no sense to leave stored energy unused, so $T _ { 1 } + T _ { 2 } + T _ { 3 }$ is constant.

When one object is at temperature $T _ { H }$, the other two must be at the same lower temperature $T _ { 0 }$, or else further work could be extracted from their temperature difference, so

$$
T _ { 1 } + T _ { 2 } + T _ { 3 } = T _ { H } + 2 T _ { 0 } , \quad T _ { 1 } T _ { 2 } T _ { 3 } = T _ { H } T _ { 0 } ^ { 2 } .
$$

Plugging in temperatures with values divided by 100 for convenience, and eliminating $T _ { 0 }$ gives

$$
T _ { H } \left( 7 - T _ { H } \right) ^ { 2 } = 36 .
$$

We know that $T _ { H } = 1$ is one (spurious) solution, since this is the minimum possible final temperature as found in part (b). The other roots are $T _ { H } = 4$ and $T _ { H } = 9$ by the quadratic formula. The solution $T _ { H } = 9$ is impossible by energy conservation, so

$$
T _ { H } = 400 \mathrm {~K} .
$$

It is also possible to solve the problem more explicitly. For example, one can run a Carnot cycle between the first two objects until they are at the same temperature, then run a Carnot cycle in reverse between the last two objects using the stored work. At this point, the first two objects will no longer be at the same temperature, so we can repeat the procedure; this yields an infinite series for $T _ { H }$. Some students did this, and took only the first term of the series. This yields a fairly good approximation of $T _ { H } \approx 395 \mathrm {~K}$.
Another explicit method is to continuously switch between running one Carnot engine forward and another Carnot engine in reverse; this yields three differential equations for $T _ { 1 } , T _ { 2 }$, and $T _ { 3 }$. Solving the equations and setting $T _ { 1 } = T _ { 2 }$ yields $T _ { 3 } = T _ { H }$.
