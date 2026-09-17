---
id: kevin-zhou/MRev
source: Kevin Zhou Physics Olympiad Handouts
kind: handout
language: en
translated: false
bidirectional_links:
  hu: corpus/notes_hu/kevin-zhou/MRev.md
source_file: sources/kevin_zhou/text/handouts/MRev.txt
source_url: https://knzhou.github.io/handouts/MRev.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
verification_status: pending
includes_solution_pdf: false
provenance_note: Complete extracted English Kevin Zhou Physics Olympiad Handouts MRev; PDF headers and footers removed where present; solution PDFs excluded from this corpus note.
---

# Mechanics Review

For some nice mechanical puzzles, see [this talk](https://www.youtube.com/watch?v=jSx4BvJuHvU) and [this talk](https://www.youtube.com/watch?v=jSx4BvJuHvU). There is a total of 89 points.

## 1. Approximations

**[2] Problem 1.** At some point in your life, you might have to buy a very expensive item of price $P$ financed by a loan. If the loan has a monthly interest rate $r \ll 1$ (e.g. $r = 1\%$ means your debt grows by 1% per month), then it turns out you can pay it all off in $N$ months if you pay

$$C = \frac{r(1 + r)^N}{(1 + r)^N - 1} P$$

per month. For example, if $r = 0$ then $C = P/N$.

**(a)** Find an approximation for $C$ valid for small $rN$.

**(b)** Find an approximation for $C$ valid for large $rN$.

## 2. Statics and Linear Dynamics

**[3] Problem 2** (FYKOS 34.1). We model a person's head as a sphere of radius $R$, and a beanie as a circular, massless rubber band of radius $r_0$ and spring constant $k$, where $r_0 < R$. The coefficient of friction between the band and head is $\mu$. When is it possible for the person to put the beanie on with one hand?

That is, find the conditions for which it is possible to stretch the band so that it lies along the equator of the sphere, by applying forces only at one point at the band, as shown above. Assume for simplicity that the band is always planar.

**[3] Problem 3.** In M2, we considered many problems with ideal strings, which have a fixed length and can exert tension forces along themselves but no bending moment. The next simplest case is an elastic strip, such as a long, thin piece of plastic. An elastic strip is just like an ideal string, except that it also contains a bending moment (i.e. an internal torque) of $\tau$, related to its local radius of curvature $R$ by $\tau = \kappa/R$, for a constant $\kappa$.

Suppose the ends of an elastic strip of total length $L + \Delta x$ are connected by an ideal string of length $L$, where $\Delta x \ll L$, so that the strip bends away from the string near its middle. Find the tension $T$ in the string, and the maximal distance between the strip and the string.

**[3] Problem 4** (MPPP 19). A small pearl moving in deep water experiences a viscous retarding force that is proportional to its speed, by Stokes' law. If a pearl is released from rest under the water, then it reaches a terminal velocity $v_1$.

**(a)** Suppose the pearl is instead released horizontally with initial speed $v_2$. Find the minimum speed of the pearl during the subsequent motion.

**(b)** If $v_2 < v_1$, for what range of angles can the pearl be released, so that its speed monotonically increases?

**[3] Problem 5** (PPP 42). A uniform rod of mass $m$ and length $\ell$ is supported horizontally at its ends by two fingers. As the fingers are slowly brought together, the rod alternates between sliding on each finger. The coefficients of friction are $\mu_k < \mu_s$.

**(a)** Explain why the fingers meet under the center of mass of the rod. (Try it in real life!)

**(b)** Find the total work done by the fingers during this process.

**[3] Problem 6.** A long rope with linear mass density $\lambda$ rests on a horizontal table with a small bend.

You pull the end of the rope that is near the bend with force $F$.

**(a)** Suppose that the bend is very small, so that all of the rope touching the ground is perfectly slack (zero tension). What $F$ is needed to pull the end of the rope with constant velocity $v$?

**(b)** Now suppose that the bend is smooth, so that pieces of the rope are gradually accelerated from rest as they pass the bend. What force $F$ is needed to pull the end of the rope with constant velocity $v$?

**(c)** In both cases, what force $F(t)$ is needed to pull the rope with constant acceleration $a$, if we assume the rope starts flat and at rest at time $t = 0$?

**[2] Problem 7.** INPhO 2012, problem 1.

**[3] Problem 8.** INPhO 2018, problem 4.

**[4] Problem 9.** USA Theory Team Selection Test 2022, problem 2. A set of nice exercises.

## 3. Oscillations

**[3] Problem 10** (NBPhO 2007). Consider a light elastic rod with fixed length $\ell$. If one end of the rod is firmly fixed, and a force $F$ is applied to the other end of the rod, perpendicular to the rod at the point of application, then it can be shown that the rod takes a form of a circular arc with radius of curvature $R = k/F$, for a constant $k$. (We previously considered such objects in problem 3.)

Let the rod be fixed vertically, at its bottom end, and a mass $m$ be attached to its upper end. The rod is initially standing up straight.

**(a)** Find the period of small oscillations, assuming $mg\ell \ll k$.

**(b)** What is the maximum mass $m$ for the configuration to be stable?

**[3] Problem 11.** INPhO 2019, problem 7. A nice data analysis problem; bring graph paper.

**[5] Problem 12.** APhO 2011, problem 2. A neat problem on "stick-slip", which appears in many real-world contexts; you can see it in action on a violin string [here](https://www.youtube.com/watch?v=6F3wICJlArI). (For some other calculations on a similar stick-slip setup, see USAPhO 2021, problem A1.)

## 4. Rotation

**[2] Problem 13.** NBPhO 2015, problem 3.

**[3] Problem 14.** USAPhO 2021, problem B1. An elegant rotation problem.

**[3] Problem 15** (Morin 8.24). A spherically symmetric ball of radius $R$ initially slides without rotating on a horizontal surface with friction. The initial speed is $v_0$, and the moment of inertia about the center is $I = \beta m R^2$.

**(a)** Assuming that the normal force is always applied upward at the bottom of the ball, and that the friction force is always applied horizontally at the bottom of the ball (but assuming nothing about how the friction force varies), find the speed of the ball when it begins to roll without slipping. Also, find the kinetic energy lost while sliding.

**(b)** Now consider the case where the friction force is standard uniform kinetic friction, $f = -\mu_k N$. Verify that the work done by friction equals the energy loss calculated in part (a).

**(c)** In reality, the conclusions above can be modified by "rolling resistance". Any real material will slightly deform when the ball rolls on it. We can crudely account for this by thinking of the normal force as applied not at the bottom of the ball, but at a point slightly forward from the bottom. The horizontal component of this normal force is defined to be $f_r = -\mu_r N_y$ where $N_y$ is the vertical normal force, and $\mu_r \ll 1$. In addition, kinetic friction is still present, as in part (b). Under these assumptions, find the velocity of the ball once it stops slipping. Is more or less energy lost than in part (b)?

**Remark.** In the early 1800s, some said it was impossible for a train engine to pull anything heavier than the engine itself. As the argument went, the force that moves the train forward is friction between the engine car's wheels and the track. If the engine car has mass $M$, the maximum friction force is $\mu M g$. If the rest of the train has mass $M'$, however, then it requires a force $\mu M' g$ to get it started moving, so the train can't start if $M' > M$.

Problem 15 explains why this reasoning is wrong. The maximum forward frictional force on the engine car wheels is determined by the coefficient of static friction $\mu_s$, while the force needed to get the rest of the train moving is determined by the coefficient of rolling friction $\mu_r$. So we only need $\mu_s M > \mu_r M'$, which is possible since $\mu_r$ can be very small. For steel train wheels on steel rail, we might have $\mu_s \sim 0.5$ but $\mu_r \lesssim 10^{-3}$.

On the other hand, early trains could have trouble going up inclines. This led to several innovative concepts, such as trains propelled by atmospheric pressure or pushed by mechanical legs. All the mechanical systems we're familiar with today, whose design might seem obvious at first glance, actually gradually evolved through many intermediate forms. For instance, most people think they know how a bicycle works, but actually don't, because it's really quite tricky. Accordingly, it took over a century for the modern bicycle design to evolve.

**[4] Problem 16** (IPhO 1998). A hexagonal pencil with mass $M$ and side length $R$ is pushed and rolls down a ramp of inclination $\theta$. For some values of $\theta$, the pencil will roll down the plane with some terminal speed, never losing contact with the ramp. In order to avoid a complicated moment of inertia calculation, we will assume the cross section looks like a wheel with six equally spaced massless spokes and no rim, with all the mass on the axle.

**(a)** The pencil does not speed up indefinitely, but rather reaches a steady state. Explain why, and compute the speed the pencil's axis has immediately after each collision, in the steady state.

**(b)** Find the minimum $\theta$ so that rolling spontaneously starts, without needing a push.

**(c)** Find the minimum $\theta$ so that, once the pencil has been pushed to start rolling, it never stops.

**(d)** Find the maximum $\theta$ so that a rolling pencil always remains in contact with the plane.

**[4] Problem 17.** USAPhO 2017, problem B1. A tough rotation problem.

**[3] Problem 18.** USAPhO 2021, problem B3. A cute setup with many nice lessons.

The next two questions are about three-dimensional rotation, covered in M8.

**[3] Problem 19** (BAUPC). A frictionless fixed cone stands on its tip.

**(a)** A particle slides on the inside surface of the cone at height $h$ above the tip, as shown at left above. Find the angular frequency of the circular motion.

**(b)** Now suppose the cone has friction, and a small ring of negligible radius rolls on the surface without slipping at the same height. Also assume that the plane of the ring is at all times perpendicular to the line joining the point of contact and the tip of the cone, as shown at right above. Find the angular frequency of the circular motion.

**(c)** How general were our assumptions in part (b)? Specifically, would the described motion had been possible if the plane of the ring were at a different angle? Is a slightly smaller or larger angle to the horizontal possible? Would it be possible if the ring were exactly horizontal?

**[3] Problem 20.** Richard Feynman used to tell the following story, here reproduced verbatim.

> I was in the cafeteria and some guy, fooling around, throws a plate in the air. As the plate went up in the air I saw it wobble, and I noticed the red medallion of Cornell on the plate going around. It was pretty obvious to me that the medallion went around faster than the wobbling.
>
> I had nothing to do, so I start figuring out the motion of the rotating plate. I discover that when the angle is very slight, the medallion rotates twice as fast as the wobble rate – two to one. It came out of a complicated equation!
>
> I went on to work out equations for wobbles. Then I thought about how the electron orbits start to move in relativity. Then there's the Dirac equation in electrodynamics. And then quantum electrodynamics. And before I knew it... the whole business that I got the Nobel prize for came from that piddling around with the wobbling plate.

Feynman was right about quantum electrodynamics, but was he right about the plate?

## 5. Gravity

**[3] Problem 21** (Morin 5.65). Let the Earth's radius be $R$, its average density be $\rho$, and its angular frequency of rotation be $\omega$. Consider a long rope with uniform mass density extending radially from just above the surface of the Earth out to a radius $\eta R$. Show that if the rope is to remain above the same point on the equator at all times, then we must have

$$\eta^2 + \eta = \frac{8\pi G \rho}{3\omega^2}.$$

What is the numerical value of $\eta$, and where does the tension in the rope achieve its maximum value? This would be a "space elevator", allowing objects to be cheaply lifted to space. But we currently can't build anything that could withstand the enormous tension.

**[2] Problem 22** (Morin 10.7). A puck slides with a small speed $v$ on frictionless ice. The surface is "level" in the sense that it is orthogonal to $g_{\text{eff}}$ at all points, where $g_{\text{eff}}$ includes the centrifugal acceleration. Show that the puck moves in a circle, as seen in the Earth's rotating frame. Find its radius and the angular frequency and direction of the motion, in terms of the Earth's angular velocity $\omega_0$ and the latitude $\phi$ of the puck.

**[2] Problem 23.** A narrow tube is formed in the shape of ring of radius $R$. Initially, it is stationary and horizontal in the lab frame. Then, it is quickly spun by $180°$ about its east-west diameter.

**(a)** Suppose the tube contains water, and the Earth's rotational velocity $\omega$ makes an angle $\phi$ to the vertical in the lab frame. What is the speed of the water afterward?

**(b)** Suppose the tube is a conductor with self-inductance $L$, and the Earth's magnetic field $B$ makes an angle $\phi$ to the vertical in the lab frame. What is the current in the tube afterward?

**[3] Problem 24.** Consider a potential of the form $V(r) = -a/r^n$.

**(a)** For what $n$ is it possible for a particle to orbit in a circle passing through the origin?

**(b)** For what $n$ is it possible for a particle to spiral inward, $r(\theta) \propto e^{-c\theta}$ for some $c$?

**[3] Problem 25.** In this problem, you will explore yet another slick derivation of Kepler's first law. As usual, suppose the orbit lies in the $xy$ plane. This derivation resolves around writing $r(t) = r(t)\hat{r}(\theta)$ where $\hat{r} = \cos\theta\,\hat{x} + \sin\theta\,\hat{y}$, and solving a differential equation for $v(\theta)$.

**(a)** Show that $dv/d\theta$ is proportional to $\hat{r}$, times constants and conserved quantities.

**(b)** Integrate this result to find $v(\theta)$. What nice geometric property does it have?

**(c)** Plug this result into $L = r \times p$ to show that $r(\theta)$ is a conic section.

## 6. Fluids

**[2] Problem 26** (BAUPC). Two cylindrical containers, A and B, have the same shape and contain equal volumes of water. In addition to the water, B contains an immersed balloon, attached to the bottom with a string. Consider the following reasoning.

> The total upward force exerted by the bottom of container A is equal to the weight of the water in A, likewise for B. Since the areas of the bottoms are the same, and the weights of the water are the same, the pressures at the bottoms are the same.

Is this reasoning correct or incorrect? Explain your answer.

**[4] Problem 27.** IPhO 1997, problem 3. A simple, neat question about how a plane works.

**Remark.** As you saw in the above problem, a plane works by having a wing angled so that air passing next to it gets pushed downward; momentum conservation then implies there is an upward force on the wing. Concretely, this upward force occurs because there is a higher pressure on the bottom of the wing, which by Bernoulli's principle means there must be a higher air velocity on the top of the wing.

This is all standard knowledge among engineers. However, in outdated or poor physics textbooks, an incorrect explanation is sometimes given. The story is that because the top side of the wing is curved, the air at the top of the wing must be moving faster, so that it can "catch up" to the air at the bottom. Then by Bernoulli's principle there is a higher pressure on the bottom of the wing, causing lift.

The second step of this argument is right, but the first step doesn't make sense: there is no reason air should want to "catch up" with the air it used to be next to. For example, airplanes can fly upside down as long as the wing is angled the right way. In this case, the air at the top of the wing still moves faster, but now it's the bottom side that's curved.

There's much more to say about flight, which is a whole field of study. For some nice further discussion, see section 4.6 of *The Art of Insight*, or [this paper](https://arxiv.org/abs/1001.0621) and [this paper](https://arxiv.org/abs/1001.0621) by the same author. And for a perspective from a cantankerous old aerodynamicist, see [this talk](https://www.youtube.com/watch?v=yCsgoLSxHEE).

**[5] Problem 28.** Physics Cup 2023, problem 1.

**[3] Problem 29.** [A] The Navier–Stokes equation, governing the velocity $v(\mathbf{x}, t)$ of an incompressible fluid of density $\rho$ and dynamic viscosity $\mu$, are

$$\frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla)\mathbf{v} = -\frac{1}{\rho}\nabla P + \frac{\mu}{\rho}\nabla^2\mathbf{v}.$$

Let's consider a fixed fluid, with a given $\rho$ and $\mu$, and see how potential solutions to this equation behave under symmetry transformations.

**(a)** Given a velocity $\mathbf{v}(\mathbf{x}, t)$, we can define a time-reversed velocity profile $\mathbf{v}'(\mathbf{x}, t) = -\mathbf{v}(\mathbf{x}, -t)$. If we replace $\mathbf{v}$ with $\mathbf{v}'$ in the above equation, then the $\partial\mathbf{v}/\partial t$ term stays the same, because both the sign of the velocity and the sign of the time derivative get flipped. Show that among the other three terms, two of them stay the same and one flips sign, and interpret your result.

**(b)** We can schematically describe the above transformation as "$t \to -t$ and $\mathbf{v} \to -\mathbf{v}$". Next, we'll consider a scaling, which simultaneously takes $\mathbf{x} \to \lambda\mathbf{x}$ and $t \to \lambda^2 t$. Find how this scaling affects $\mathbf{v}$, $P$, time derivatives, and space derivatives.

**(c)** Show that under this scaling, all the terms in the Navier–Stokes equation scale as $\lambda^{-n}$, for some integer $n$. This shows that the Navier–Stokes equation has scale symmetry: if something can happen in a fluid, then it can also happen at a scale 2 times larger and 4 times slower.

**Remarkably, part (c)** explains why there aren't many additional terms in the Navier–Stokes equation! In principle there must be terms with more time or space derivatives, since the microscopic dynamics of a fluid are very complex. However, all such terms would be suppressed by more than $\lambda^{-n}$ as we scale a solution up, which means that they wouldn't have any significant effect on macroscopic scales. The Navier–Stokes equation contains precisely the terms that remain relevant.
