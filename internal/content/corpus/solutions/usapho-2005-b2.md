---
id: usapho-2005-b2
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2005-b2
solution_type: official
source_document: solution-document-usapho-2005-s
source_pdf: cache/phoxiv/usapho/2005_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2005_S.pdf."
---

B2. (a) (1) The frictional force acting on the block depends on the normal force on the portion of the block that is on the rough surface. Therefore,

$$
F_{l m s}=\frac{\mu x m g}{L}
$$

As the leading edge travels a distance $L$ on the rough surface, friction does work:

$$
W_{m}=\int F_{f m} d x=\int_{0}^{i} \frac{\mu x m g}{L} d x=\frac{\mu L m g}{2}
$$

Since the block stops after traveling a distance $L$, the work done by friction must equal the mitial potential energy of the block.

$$
m g H_{c h}=W_{t m}
$$

Using (B2-2), we obtain

$$
m g H_{t m}=\frac{\mu L m g}{2}
$$

Therefore.

$$
H_{1 \cdots 1}=\frac{\mu L}{2}
$$

(ii) Substituting (B2-1) into Newton's Second Law yields:

$$
\frac{-\mu x m g}{L}=m \frac{d^{2} x}{d t^{2}}
$$

Dividing both sides by $m$ :

$$
\frac{d^{2} x}{d t^{2}}=\frac{-\mu g x}{L}
$$

We recognize that the differential equation

$$
\frac{d^{2} x}{d t^{2}}=-\omega^{2} x
$$

is simple harmonic motion.

By comparison with (B2-7), we find that

$$
\omega=\left(\frac{\mu g}{l}\right)^{1 / 2}
$$

The period of SHM is $\frac{2 \pi}{\omega}$. The motion of the block coming to rest is $1 / 4$ of a cycle, so

$$
t=\frac{T}{4}=\frac{\pi}{2}\left(\frac{L}{\mu g}\right)^{12}
$$

(b) (i) In this case, the leading enge travels a distance $d$ on the rough surface, so friction does work:

$$
W_{t m c}^{y}=\int F_{t m c} d x=\int_{0}^{d} \frac{\mu x m g}{L} d x=\frac{\mu d^{\prime} m g}{2 L}
$$

Since the block stops after traveling a distance $x$, the work done by friction must equal the initial potential energy of the block.

$$
m g H=W_{l e c}=\frac{\mu d^{2} m g}{2 L}
$$

Solving for $d$,

$$
d=\sqrt{\frac{2 H L}{\mu}}
$$

(11) As the block slides on the rough surface, (B2-6) will hold as before. Thus, the motion will be $1 / 4$ of a cycle of simple harmonic motion as before. Although the amplitude will be $d$ (given by B2-13) instead of $L$, the period of SHM is independent of the amplitude. Therefore, the time for the block to stop will be the same as (B2-10).
(c) (i) Until the block is entirely on the rough surface, the force of friction acting on the block is given by (B2-1). Once the block is entirely on the surface, the force of friction is constant:

$$
F_{i m c}=\mu m g
$$

Let $\Delta x=$ the distance that the block travels on the surface with friction after the entire block is on the surface.

We set the initial gravitational potential energy of the block equal to the total work done by friction as the block comes to a stop.

$$
\begin{aligned}
& m g H=\int_{0}^{i} \frac{\mu c m g}{I} d x+\mu m \cdot \tau x \\
& m g H=\frac{\mu m g L}{2}+\mu m g \Delta x
\end{aligned}
$$

Solving for $\Delta x$,

$$
\Delta x=\frac{H}{\mu}-\frac{L}{2}
$$

The total distance traveled by the leading edge across the surface with friction is

$$
\Delta x+L=\frac{H}{\mu}+\frac{L}{2}
$$

(ii) While the block is only partially on the surface with friction, we have SHM as in equation (B2.7). However, since the block does not come to a stop until after the entire block is on the surface, we do not complete one-quarter of the cycle of SHM this time. The solution for SHM is given by

$$
x(t)=A \sin \sqrt{\omega t}=A \sin \sqrt{\frac{\mu g t}{L}}
$$

where we have used (B2-9).
Take the derivative of (B2-19) to find velocity.

$$
v(t)=A \sqrt{\frac{\mu g}{L}} \cos \sqrt{\frac{\mu g t}{L}}
$$

We can find the velocity of the block just before the leading edge hits the surface with friction using conservation of mechanical energy:

$$
\begin{aligned}
& m g H=\frac{m v^{2}}{2} \\
& v=\sqrt{2 g H}
\end{aligned}
$$

We can evaluate the amplitude $A$ by substituting (B2-22) for $v$ when $t=0$ into (B2-10):

$$
\begin{aligned}
& \sqrt{2 g H}=A \sqrt{\frac{\mu g}{L}} \\
& A=\sqrt{\frac{2 H L}{\mu}}
\end{aligned}
$$

Let $t_{i}$ be the time that it takes the leading edge of the block to travel a distance $L$ across the surface with friction. To find $t_{i}$, we substitute (B2-24) into (B2-19) and solve for $t$.

$$
\begin{aligned}
& I=\sqrt{\frac{2 H L}{\mu}} \sin \sqrt{\frac{\mu g t}{L}} \\
& t_{1}=\sqrt{\frac{L}{\mu g}} \sin ^{-1} \sqrt{\frac{\mu L}{2 H}}
\end{aligned}
$$

Now, that the entire block is on the surface with friction, we need to find the additional time that it will take to stop it. Now that the entire block is on the surface, the force, and therefore the acceleration, are constant. We need to find out how fast the block is going at the instant that the leading edge has traveled a distance L . We shall use the generalized work-energy theorem where the work done by friction is given by (B2-2)

$$
m g H=\frac{\mu m g L}{2}+\frac{m v^{2}}{2}
$$

Solving for v,

$$
v=\sqrt{2 g H-\mu g L}
$$

From (B2-14), we see that the acceleration of the block is given by

$$
a=-\mu g
$$

Let $\mathrm{t}_{2}=$ the time that it takes the block to come to rest after the entire block is on the surface with friction. Using the definition of acceleration and (B2-29) and (B2-28) we have

$$
t_{2}=\frac{0-v}{a}=\frac{-\sqrt{2 g H-\mu g L}}{-\mu g}=\sqrt{\frac{2 H}{g \mu^{2}}-\frac{L}{\mu g}}
$$

The total time that it takes to stop is then given by adding (B2-26) and (B2-30).

$$
t=t_{1}+t_{2}=\sqrt{\frac{L}{\mu g}} \sin ^{-1} \sqrt{\frac{\mu L}{2 H}}+\sqrt{\frac{2 H}{g \mu^{2}}-\frac{L}{\mu g}}
$$
