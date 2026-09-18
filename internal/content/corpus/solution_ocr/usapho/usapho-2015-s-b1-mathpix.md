---
id: solution-ocr-usapho-2015-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2015_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2015-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B1

This problem is divided into two parts. It is possible to solve these two parts independently, but they are not equally weighted.

a. An ideal rocket when empty of fuel has a mass $m _ { r }$ and will carry a mass of fuel $m _ { f }$. The fuel burns and is ejected with an exhaust speed of $v _ { e }$ relative to the rocket. The fuel burns at a constant mass rate for a total time $T _ { b }$. Ignore gravity; assume the rocket is far from any other body.
    i. Determine an equation for the acceleration of the rocket as a function of time $t$ in terms of any or all of $t , m _ { f } , m _ { r } , v _ { e } , T _ { b }$, and any relevant fundamental constants.

## Solution

Since there are no external forces on the system,

$$
0 = \frac { d p } { d t } = \frac { d m } { d t } v + m \frac { d v } { d t }
$$

which means

$$
a = - \frac { 1 } { m ( t ) } v _ { e } \frac { d m } { d t } = \frac { v _ { e } } { m _ { r } + m _ { f } ( 1 - t / T ) } \frac { m _ { f } } { T } .
$$

ii. Assuming that the rocket starts from rest, determine the final speed of the rocket in terms of any or all of $m _ { r } , m _ { f } , v _ { e } , T _ { b }$, and any relevant fundamental constants.

## Solution

Rearrange the previous result for

$$
\frac { 1 } { v _ { e } } d v = - \frac { 1 } { m } d m
$$

Integrating both sides gives

$$
\frac { 1 } { v _ { e } } v = \ln \left( \frac { m _ { r } + m _ { f } } { m _ { r } } \right) \Rightarrow v = v _ { e } \ln \left( \frac { m _ { r } + m _ { f } } { m _ { r } } \right) .
$$

This result is called the ideal rocket equation.

b. The ship starts out in a circular orbit around the sun very near the Earth and has a goal of moving to a circular orbit around the Sun that is very close to Mars. It will make this transfer in an elliptical orbit as shown in bold in the diagram below. This is accomplished with an initial velocity boost near the Earth $\Delta v _ { 1 }$ and then a second velocity boost near Mars $\Delta v _ { 2 }$. Assume that both of these boosts are from instantaneous impulses, and ignore mass changes in the rocket as well as gravitational attraction to either Earth or Mars. Don't ignore the

Sun! Assume that the Earth and Mars are both in circular orbits around the Sun of radii $R _ { E }$ and $R _ { M } = R _ { E } / \alpha$ respectively. The orbital speeds are $v _ { E }$ and $v _ { M }$ respectively.
![](../../../figures/solution-ocr/cb842294d0681dedd6152773.jpg)

i. Derive an expression for the velocity boost $\Delta v _ { 1 }$ to change the orbit from circular to elliptical. Express your answer in terms of $v _ { E }$ and $\alpha$.

## Solution

First off, for a circular orbit of radius $R _ { c }$, we have

$$
\frac { G M _ { S } } { R _ { c } { } ^ { 2 } } = \frac { v _ { c } { } ^ { 2 } } { R _ { c } }
$$

where $M _ { S }$ is the mass of the sun, so

$$
v _ { E } = \sqrt { \frac { G M _ { S } } { R _ { E } } } , \quad v _ { M } = \sqrt { \frac { G M _ { S } } { R _ { M } } } .
$$

Now consider an elliptical orbit with minimum radius $R _ { 1 }$ and maximum radius $R _ { 2 }$. Energy and angular momentum give

$$
\frac { 1 } { 2 } v ^ { 2 } - \frac { G M _ { S } } { r } = E , \quad v _ { 1 } R _ { 1 } = v _ { 2 } R _ { 2 } .
$$

Combining and eliminating $v _ { 2 }$,

$$
\frac { 1 } { 2 } v _ { 1 } ^ { 2 } - \frac { G M _ { S } } { R _ { 1 } } = \frac { 1 } { 2 } v _ { 1 } ^ { 2 } \left( \frac { R _ { 1 } } { R _ { 2 } } \right) ^ { 2 } - \frac { G M _ { S } } { R _ { 2 } }
$$

which can be solved for $v _ { 1 }$,

$$
\frac { 1 } { 2 } v _ { 1 } ^ { 2 } \left( 1 - \left( \frac { R _ { 1 } } { R _ { 2 } } \right) ^ { 2 } \right) = G M _ { S } \frac { R _ { 2 } - R _ { 1 } } { R _ { 1 } R _ { 2 } } .
$$

Setting $R _ { 1 } = R _ { E }$ and $R _ { 2 } = R _ { M }$, we have $\alpha = R _ { 1 } / R _ { 2 }$, so

$$
\frac { 1 } { 2 } v _ { 1 } ^ { 2 } \left( 1 - \alpha ^ { 2 } \right) = \frac { G M _ { S } } { R _ { 1 } } ( 1 - \alpha ) \quad \Rightarrow \quad v _ { 1 } = v _ { E } \sqrt { \frac { 2 } { 1 + \alpha } } .
$$


As expected, this is greater than $v _ { E }$, and the boost is
$$
\Delta v _ { 1 } = v _ { E } \left( \sqrt { \frac { 2 } { 1 + \alpha } } - 1 \right)
$$
ii. Derive an expression for the velocity boost $\Delta v _ { 2 }$ to change the orbit from elliptical to circular. Express your answer in terms of $v _ { E }$ and $\alpha$.

## Solution

This is similar to the previous part, except we now eliminate $v _ { 1 }$,

$$
\frac { 1 } { 2 } v _ { 2 } ^ { 2 } \left( 1 - ( 1 / \alpha ) ^ { 2 } \right) = \frac { G M _ { S } } { R _ { 2 } } ( 1 - ( 1 / \alpha ) ) \quad \Rightarrow \quad v _ { 2 } = v _ { M } \sqrt { \frac { 2 } { 1 + 1 / \alpha } } .
$$

This is less than $v _ { M }$, so the rocket must receive a second positive boost,

$$
\Delta v _ { 2 } = v _ { M } \left( 1 - \sqrt { \frac { 2 } { 1 + 1 / \alpha } } \right) = v _ { E } \sqrt { \alpha } \left( 1 - \sqrt { \frac { 2 } { 1 + 1 / \alpha } } \right) .
$$

where we used $v _ { M } = v _ { E } \sqrt { \alpha }$.

iii. What is the angular separation between Earth and Mars, as measured from the Sun, at the time of launch so that the rocket will start from Earth and arrive at Mars when it reaches the orbit of Mars? Express your answer in terms of $\alpha$.

## Solution

Kepler's third law gives the time for the orbital transfer,

$$
\frac { T } { T _ { M } } = \frac { 1 } { 2 } \left( \frac { \left( R _ { E } + R _ { M } \right) / 2 } { R _ { M } } \right) ^ { 3 / 2 } = \frac { 1 } { 2 } \left( \frac { \alpha + 1 } { 2 } \right) ^ { 3 / 2 } .
$$

During this time Mars moves through an angle of

$$
2 \pi \frac { T } { T _ { M } } = \pi \left( \frac { \alpha + 1 } { 2 } \right) ^ { 3 / 2 }
$$

while the rocket moves through an angle of $\pi$, so the angular separation from Earth will be

$$
\theta = \pi \left( 1 - \left( \frac { \alpha + 1 } { 2 } \right) ^ { 3 / 2 } \right) .
$$
