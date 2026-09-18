---
id: solution-ocr-kevin-zhou-m1sol-p003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m1-p003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 3. A projectile of mass $m$ is dropped from a height $h$ above the ground. It falls and bounces elastically, experiencing the same quadratic drag as in problem 2. Find the maximum height to which it subsequently rises. (Hint: don't try to use your results from problem 2.)

Solution. The reason you shouldn't try to use the results from problem 2 is that they are in terms of time. Given how complicated the implicit expressions for $v ( t )$ are, the expressions for $x ( t )$ would be extremely clunky. And they're not necessary, because in this problem we don't care about the time-dependence at all; we just want to know the final height.

Another way to say this is that we aren't interested in $v ( t )$, we're interested in $v ( x )$. While the projectile is moving downward, we can integrate $d v / d x$ to find the speed $v _ { 0 }$ at the moment it hits the ground. Then, when it's moving upward, we integrate $d v / d x$ until it has zero speed again, which is its final height. This will be a lot simpler than integrating $d v / d t$.

For the upward and downward trajectories, Newton's second law says

$$
\frac { d v } { d t } = - g \pm \alpha v ^ { 2 }
$$

and multiplying both sides by $d t / d x$ gives

$$
\frac { d v } { d x } = - \frac { g } { v } \pm \alpha v .
$$

Separating and integrating, on the way down we have

$$
\int _ { h } ^ { 0 } d x = \int _ { 0 } ^ { - v _ { 0 } } \frac { d v } { \alpha v - g / v } = \frac { 1 } { \alpha } \int _ { 0 } ^ { - v _ { 0 } } \frac { v d v } { v ^ { 2 } - g / \alpha } .
$$

Carrying out the integral and simplifying,

$$
h = - \frac { 1 } { 2 \alpha } \log \left( 1 - \alpha v _ { 0 } ^ { 2 } / g \right) .
$$

Now, on the way up, we have

$$
\int _ { 0 } ^ { h ^ { \prime } } d x = \int _ { v _ { 0 } } ^ { 0 } \frac { d v } { - g / v - \alpha v } = \frac { 1 } { \alpha } \int _ { 0 } ^ { v _ { 0 } } \frac { v d v } { v ^ { 2 } + g / \alpha }
$$

and carrying out the integral gives

$$
h ^ { \prime } = \frac { 1 } { 2 \alpha } \log \left( 1 + \alpha v _ { 0 } ^ { 2 } / g \right) .
$$

Combining the two equations gives

$$
h ^ { \prime } = \frac { 1 } { 2 \alpha } \log \left( 2 - e ^ { - 2 \alpha h } \right)
$$

which you can check has the right limits. Note that $g$ drops out, as required by dimensional analysis.
Remark
How does the top speed $v$ of a rowboat depend on the number $N$ of rowers? A light, fastmoving rowboat experiences quadratic friction, so that the drag force on it is proportional to $v ^ { 2 } A$, where $A$ is the submerged cross-sectional area of the boat. A boat designed for $N$ rowers will have a submerged volume $V \propto N$, and a streamlined shape so that $A \propto V ^ { 2 / 3 }$. Thus, the required power input is

$$
P = F v \propto v ^ { 3 } N ^ { 2 / 3 } .
$$


The power output by the rowers scales as $N$, and combining these results gives the amazingly weak dependence $v \propto N ^ { 1 / 9 }$, which agrees decently with Olympic rowing times. This estimate is from the fun book 100 Essential Things You Didn't Know About Sport by Barrow.

## Idea 1

An ordinary differential equation is any equation involving a quantity $x ( t )$ and its derivatives. In physics, we are usually concerned with differential equations which are at most secondorder, meaning it can contain $x$, its first derivative $\dot { x } = v$, and its second derivative $\ddot { x } = a$, but no higher derivatives. This implies the solution can be determined by an initial position and initial velocity. (First-order differential equations require only an initial position, and can often be solved by separation and integration.)

Here we will also focus on the case where the differential equation is also linear and homogeneous, meaning that each term is directly proportional to $x , \dot { x }$, or $\ddot { x }$. For example, a damped driven harmonic oscillator is described by

$$
m \ddot { x } = - b \dot { x } - k x .
$$

Solutions to such differential equations obey the superposition principle: if $x _ { 1 } ( t )$ and $x _ { 2 } ( t )$ are both solutions, so is $c _ { 1 } x _ { 1 } ( t ) + c _ { 2 } x _ { 2 } ( t )$. The superposition principle still applies if the coefficients $m , b$, and $k$ depend on time, but we'll focus on the time-translation invariant case.

If we added a driving force $f ( t )$ to the above equation, the differential equation would no longer be homogeneous. We'll discuss this case further in M4.

## Idea 2

Linear, homogeneous, time-translation invariant differential equations can all be solved by one method. First, note that we can promote $x ( t )$ to a complex variable $\tilde { x } ( t )$ and solve the differential equation over the complex numbers. As long as we have a complex solution, we can recover a real solution by taking the real part. We then guess a complex exponential

$$
\tilde { x } ( t ) = e ^ { i \omega t } .
$$

Plugging this into the differential equation will yield the allowed values of $\omega$, and the general solution can be found by superposing the complex exponentials. This works for almost all such equations; you'll handle the rest in problem 7.

## Example 2

Solve the simple harmonic oscillator, $m \ddot { x } + k x = 0$, using the above principles.

## Solution

First, we pass to a complex differential equation,

$$
m \ddot { \tilde { x } } + k \tilde { x } = 0 .
$$


We guess $\tilde { x } ( t ) = e ^ { i \omega t }$. Plugging this in and using the chain rule gives

$$
m ( i \omega ) ^ { 2 } e ^ { i \omega t } + k e ^ { i \omega t } = 0
$$

and canceling $e ^ { i \omega t }$ and solving gives two solutions,

$$
\omega = \pm \omega _ { 0 } , \quad \omega _ { 0 } = \sqrt { k / m } .
$$

Since this is a second-order linear differential equation, the general solution is given by the superposition of these two complex exponentials,

$$
\tilde { x } ( t ) = A e ^ { i \omega _ { 0 } t } + B e ^ { - i \omega _ { 0 } t }
$$

where $A$ and $B$ are general complex numbers. The real part of $\tilde { x } ( t )$ satisfies the original real differential equation $m a + k x = 0$, and is

$$
\operatorname { Re } \tilde { x } ( t ) = C \cos \left( \omega _ { 0 } t \right) + D \sin \left( \omega _ { 0 } t \right)
$$

where $C$ and $D$ are real numbers, i.e. a general sinusoid with angular frequency $\omega _ { 0 }$.
[1] Problem 4. Find $C$ and $D$ in terms of $A$ and $B$.
Solution. Let $A = a _ { A } + i b _ { A }$ and $B = a _ { B } + i b _ { B }$ where $a _ { i } , b _ { i }$ are real. Applying Euler's formula,

$$
\operatorname { Re } \tilde { x } ( t ) = \left( a _ { A } + a _ { B } \right) \cos \left( \omega _ { 0 } t \right) + \left( - b _ { A } + b _ { B } \right) \sin \left( \omega _ { 0 } t \right)
$$

from which we read off

$$
C = \operatorname { Re } ( A + B ) , \quad D = \operatorname { Im } ( B - A ) .
$$

[2] Problem 5. Now introduce a damping force and solve the differential equation for the damped harmonic oscillator, $m \ddot { x } + b \dot { x } + k x = 0$, using the same procedure, assuming $b$ is small. (See section 4.3 of Morin if you have trouble with this. We'll consider this system in more detail in M4.)

Solution. Guessing an exponential, every time derivative yields a factor of $i \omega$, so

$$
m ( i \omega ) ^ { 2 } + b ( i \omega ) + k = 0 .
$$

Using the quadratic formula,

$$
\omega = \frac { - i b \pm \sqrt { 4 k m - b ^ { 2 } } } { - 2 m } .
$$

In other words, we have

$$
\omega = \pm \omega _ { d } + \frac { i b } { 2 m } , \quad \omega _ { d } = \sqrt { \frac { k } { m } - \frac { b ^ { 2 } } { 4 m ^ { 2 } } } .
$$

The oscillation is slightly slowed down, and the frequency has an imaginary part, corresponding to exponential decay. The general solution is

$$
x ( t ) = e ^ { - b t / ( 2 m ) } \left( C \cos \left( \omega _ { d } t \right) + D \sin \left( \omega _ { d } t \right) \right) .
$$

[3] Problem 6. USAPhO 2012, problem B1.
