---
id: solution-ocr-kevin-zhou-m4sol-ex007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m4-ex007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 7
Two blocks of mass $m$ are connected with a spring of spring constant $k$ and relaxed length $L$. Initially, the blocks are at rest at positions $x _ { 1 } ( 0 ) = 0$ and $x _ { 2 } ( 0 ) = L$. At time $t = 0$, the block on the right is hit, giving it a velocity $v _ { 0 }$. Find $x _ { 1 } ( t )$ and $x _ { 2 } ( t )$.

Solution
The equations of motion are

$$
\begin{aligned}
& m \ddot { x _ { 1 } } = k \left( x _ { 2 } - x _ { 1 } - L \right) \\
& m \ddot { x _ { 2 } } = k \left( x _ { 1 } + L - x _ { 2 } \right) .
\end{aligned}
$$

The system must have two normal modes. The obvious one is when the two masses oscillate


oppositely, $x _ { 1 } = - x _ { 2 }$. The other one is when the two masses move parallel to each other, $x _ { 1 } = x _ { 2 }$, and this normal mode formally has zero frequency. The initial condition is the superposition of these two modes.

We can show this a bit more formally. Define the normal mode amplitudes $u$ and $v$ as

$$
x _ { 1 } = \frac { u - v } { 2 } , \quad x _ { 2 } = \frac { u + v } { 2 } .
$$

Solving for $u$ and $v$, we find

$$
u = x _ { 1 } + x _ { 2 } , \quad v = x _ { 2 } - x _ { 1 } .
$$

Using the equations of motion for $x _ { 1 }$ and $x _ { 2 }$, we have the equations of motion

$$
\ddot { u } = 0 , \quad m \ddot { v } = - 2 k ( v - L )
$$

which just verifies that the normal modes are independent, with angular frequency zero and $\omega = \sqrt { 2 k / m }$ respectively. We can fit the initial condition if

$$
u ( 0 ) = L , \quad v ( 0 ) = L , \quad \dot { u } ( 0 ) = v _ { 0 } , \quad \dot { v } ( 0 ) = v _ { 0 } .
$$

The normal mode amplitudes are then

$$
u ( t ) = L + v _ { 0 } t , \quad v ( t ) = L + \frac { v _ { 0 } } { \omega } \sin \omega t .
$$

Plugging this back in gives

$$
x _ { 1 } ( t ) = \frac { v _ { 0 } t } { 2 } - \frac { v _ { 0 } } { 2 \omega } \sin \omega t , \quad x _ { 2 } ( t ) = L + \frac { v _ { 0 } t } { 2 } + \frac { v _ { 0 } } { 2 \omega } \sin \omega t .
$$

Each mass is momentarily stationary at time intervals of $2 \pi / \omega$, though neither mass ever moves backwards. If you didn't know about normal modes, you could also arrive at this conclusion by playing around with the equations; you could see that they decouple when you add and subtract them, for instance.
[3] Problem 21 (Morin 4.10). Three springs and two equal masses lie between two walls, as shown.
![](../../../figures/solution-ocr/131f5d9493bcf49381985468.jpg)
The spring constant $k$ of the two outside springs is much larger than the spring constant $\kappa \ll k$ of the middle spring. Let $x _ { 1 }$ and $x _ { 2 }$ be the positions of the left and right masses, respectively, relative to their equilibrium positions. If the initial positions are given by $x _ { 1 } ( 0 ) = a$ and $x _ { 2 } ( 0 ) = 0$, and if both masses are released from rest, show that

$$
x _ { 1 } ( t ) \approx a \cos ( ( \omega + \epsilon ) t ) \cos ( \epsilon t ) , \quad x _ { 2 } ( t ) \approx a \sin ( ( \omega + \epsilon ) t ) \sin ( \epsilon t )
$$

where $\omega = \sqrt { k / m }$ and $\epsilon = ( \kappa / 2 k ) \omega$. Explain qualitatively what the motion looks like. This is an


example of beats, which result from the superposition of two oscillations of nearly equal frequencies; we will see more about them in W3.

Solution. The equations of motion are

$$
\begin{aligned}
& m \ddot { x } _ { 1 } = - k x _ { 1 } - \kappa \left( x _ { 1 } - x _ { 2 } \right) \\
& m \ddot { x } _ { 2 } = - k x _ { 2 } - \kappa \left( x _ { 2 } - x _ { 1 } \right) .
\end{aligned}
$$

Again define $y _ { 1 } = x _ { 1 } + x _ { 2 }$ and $y _ { 2 } = x _ { 1 } - x _ { 2 }$. Adding and subtracting the two EOMs tells us that

$$
\begin{aligned}
& m \ddot { y } _ { 1 } = - k y _ { 1 } \\
& m \ddot { y } _ { 2 } = - ( k + 2 \kappa ) y _ { 2 } .
\end{aligned}
$$

The initial conditions are $y _ { 1 } ( 0 ) = y _ { 2 } ( 0 ) = a$ and $\dot { y } _ { 1 } ( 0 ) = \dot { y } _ { 2 } ( 0 ) = 0$. The solution is

$$
\begin{aligned}
& y _ { 1 } ( t ) = a \cos ( \sqrt { k / m } t ) \\
& y _ { 2 } ( t ) = a \cos ( \sqrt { ( k + 2 \kappa ) / m } t ) .
\end{aligned}
$$

Solving for $x _ { 1 }$ and $x _ { 2 }$, we see that

$$
\begin{aligned}
& x _ { 1 } ( t ) = a \cos \left( \frac { \sqrt { k / m } + \sqrt { ( k + 2 \kappa ) / m } } { 2 } t \right) \cos \left( - \frac { \sqrt { k / m } + \sqrt { ( k + 2 \kappa ) / m } } { 2 } t \right) \\
& x _ { 2 } ( t ) = a \sin \left( \frac { \sqrt { k / m } + \sqrt { ( k + 2 \kappa ) / m } } { 2 } t \right) \sin \left( - \frac { \sqrt { k / m } + \sqrt { ( k + 2 \kappa ) / m } } { 2 } t \right) .
\end{aligned}
$$

The result follows from the binomial theorem, which tells us that

$$
\frac { \sqrt { k / m } + \sqrt { ( k + 2 \kappa ) / m } } { 2 } \approx \omega + \epsilon , \quad - \frac { \sqrt { k / m } + \sqrt { ( k + 2 \kappa ) / m } } { 2 } \approx \sqrt { k / m } \frac { \kappa / k } { 2 } = \epsilon .
$$

We have an envelope curve of $a \cos ( \epsilon t )$ and $a \sin ( \epsilon t )$, and a very high frequency oscillation that matches the envelope. What this looks like is energy gradually sloshing back and forth between the masses. If the second mass begins still, it will gradually pick up energy, until the first mass becomes still. Then the process repeats in reverse.

Note that without the weak spring in the middle, we would have two normal modes of equal frequency, while adding the spring causes the frequencies to split apart. This is a very common phenomenon in physics, known as "avoided crossing". For this reason, you will rarely see two acoustic modes of exactly equal frequency in a room, or two electromagnetic modes of equal frequency inside a conducting cavity, or two quantum states of the same energy, unless there's a symmetry at play.

[3] Problem 22 (KK 10.11). Two identical particles are hung between three identical springs.
![](../../../figures/solution-ocr/d9db0a38b1ddfa17e02450de.jpg)
Neglect gravity. The masses are connected as shown to a dashpot which exerts a force $b v$, where $v$ is the relative velocity of its two ends, which opposes the motion.

(a) Find the equations of motion for $x _ { 1 }$ and $x _ { 2 }$.
(b) Show that the equations of motion can be solved in terms of the variables $y _ { 1 } = x _ { 1 } + x _ { 2 }$ and $y _ { 2 } = x _ { 1 } - x _ { 2 }$.
(c) Show that if the masses are initially at rest and mass 1 is given an initial velocity $v _ { 0 }$, the motion of the masses after a sufficiently long time is
$$
x _ { 1 } ( t ) = x _ { 2 } ( t ) = \frac { v _ { 0 } } { 2 \omega } \sin \omega t
$$
and evaluate $\omega$.

Solution. (a) The equations of motion are

$$
\begin{aligned}
& M \ddot { x } _ { 1 } = - k x _ { 1 } - k \left( x _ { 1 } - x _ { 2 } \right) - b \left( \dot { x } _ { 1 } - \dot { x } _ { 2 } \right) , \\
& M \ddot { x } _ { 2 } = - k x _ { 2 } - k \left( x _ { 2 } - x _ { 1 } \right) - b \left( \dot { x } _ { 2 } - \dot { x } _ { 1 } \right) .
\end{aligned}
$$

(b) Adding the two tells us that
$$
M \ddot { y } _ { 1 } = - k y _ { 1 }
$$
and subtracting tells us that
$$
M \ddot { y } _ { 2 } = - 3 k y _ { 2 } - 2 b \dot { y } _ { 2 } .
$$
(c) Let us solve for $y _ { 1 }$. The initial condition is $y _ { 1 } ( 0 ) = 0$ and $\dot { y } _ { 1 } ( 0 ) = v _ { 0 }$. Thus,
$$
y _ { 1 } ( t ) = \frac { v _ { 0 } } { \omega _ { 0 } } \sin \left( \omega _ { 0 } t \right)
$$
where $\omega _ { 0 } = \sqrt { k / M }$. After a very long time, $y _ { 2 }$ goes to 0, since it is damped. Thus, after a long time we have $x _ { 1 } = x _ { 2 } = y _ { 1 } / 2$, giving
$$
x _ { 1 } = x _ { 2 } = \frac { v _ { 0 } } { 2 \omega _ { 0 } } \sin \left( \omega _ { 0 } t \right)
$$
for $\omega = \omega _ { 0 }$.
