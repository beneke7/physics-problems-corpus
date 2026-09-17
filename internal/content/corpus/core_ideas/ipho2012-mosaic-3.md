---
id: ipho2012-mosaic-3
source: ipho2012-mosaic
handout: "Physics Solver's Mosaic"
section: "3. Force diagrams or generalized coordinates?"
kind: essay
author: Jaan Kalda
meta_technique: [model-reduction, smart-coordinates]
example_problems: [physicscup-2012-p4]
figure_files: [ipho2012-mosaic-3-1.jpg, ipho2012-mosaic-3-2.jpg, ipho2012-mosaic-3-3.jpg]
url: https://web.archive.org/web/20120326164829/http://www.ipho2012.ee/physicscup/physics-solvers-mosaic/3-force-diagrams-or-generalized-coordinates/
status: stable
---

# 3. Force diagrams or generalized coordinates?

Typically you are taught in high school that in order to solve problems with interacting bodies you need to draw force diagrams, and write down the force balance equations (based on Newton II law) for x and y components (for three-dimensional problems, also the z-component). However, for problems which are more difficult than the elementary ones, this is typically far from being the simplest approach. Meanwhile, there is a very powerful method based on generalized coordinates, which provides in most cases the easiest route to the solution. The basic idea of the method is as follows.

Suppose the state of a system can be described by a single parameter $\xi$ , which we call the generalized coordinate (the method can be also applied with two or more parameters, but this will complicate things, and in most cases, one parameter is perfectly enough). Then, what you need to do is to express the potential energy $\Pi$ of the system in terms of $\xi$ , $\Pi=\Pi(\xi)$ , and the kinetic energy in terms of $\dot\xi$ , the time-derivative of $x$ : $K=K(\dot\xi)$ . Then, if there is no dissipation and external forces, the net energy is conserved: $K(\dot\xi) + \Pi(\xi) = \mbox{Const}$ . Upon taking time-derivative of this equality, we obtain $K^\prime(\dot\xi)\ddot \xi + \Pi^\prime(\xi)\dot\xi =0$ , from where we can express the acceleration of the generalized coordinate:

$\displaystyle \ddot\xi = -\frac{\dot\xi }{ K^\prime (\dot\xi )} \Pi^\prime (\xi ).$

Note that most often, $K^\prime (\dot\xi )/\dot \xi$ is constant, because the kinetic energy is proportional to $\dot \xi ^2$ , and plays the role of an effective mass ${\cal M}$ . In some cases, it may happen that $K$ depends also on $\xi$ and/or $\Pi$ depends also on $\dot\xi$ ; then, the above formula will not work, but the technique itself remains still applicable (cf. the example of rotating spring below).

In order to illustrate this method, let us start with a simple wedge problem. Consider a system where a  ball of mass $m$ lays on a wedge of mass $M$ , and is attached with a weightless rope and pully to a wall as depicted in Figure; you are asked to find the acceleration of the wedge, assuming that all the surfaces are frictionless, and there is a homogeneous gravity field $g$ .

![figure](../../sources/physicscup/figures/ipho2012-mosaic-3-1.jpg)

When using the force diagram method, it would be a good idea to use the (non-inertial) reference frame associated with the wedge (introducing thereby the inertial forces $-ma$ and $-Ma$ ), because otherwise, it would be difficult to write down equation describing the fact that the ball will remain on the inclined surface of the wedge. Here, however, we leave this for the reader as an exercise, and describe the state of the system via the displacement $\xi$ of the wedge. Then, the velocity of the wedge is $\dot\xi$ ; the velocity of the ball with respect to the wedge is also $\dot\xi$ , implying that the vertical component of the ball's velocity is $\dot\xi \sin\alpha $ , and the horizontal component is $\dot\xi (1-\cos\alpha )$ . Hence, we find that

$\displaystyle K+\Pi=\frac {\dot\xi^2}2 \left\{M + m \left[\sin^2\alpha + \left(1-\cos\alpha\right)^2 \right]\right\} - mg\xi\sin\alpha .$

Upon taking time derivative of this equation and cancelling out $\dot\xi$ , we obtain an expression for the wedge acceleration:

$\displaystyle \ddot\xi=\frac {mg\sin\alpha}{M + 2m \left(1 - \cos\alpha\right)}.$

As another example, let us consider an old IPhO problem (5th IPhO in Sofia, 1971, Problem No 1). The set-up is quite similar to the previous problem, but there is no wall, there are two bricks instead of one ball, and the wedge has two inclined surfaces (see Figure); we ask again, what is the acceleration of the wedge.

![figure](../../sources/physicscup/figures/ipho2012-mosaic-3-2.jpg)

You might think that the method does not work here, because there are two degrees of freedom: the wedge can slide on the table, and the bricks can slide with respect to the wedge. However, if we make use of the conservation of the centre of mass (there are no external horizontal forces), we can express the displacement of the bricks $\eta$ (with respect to the wedge) via the displacement of the wedge $\xi$ : $(M+m_1+m_2)\xi=(m_1\cos\alpha _1 + m_2\cos\alpha _2)\eta \Rightarrow$

$\displaystyle \eta =\xi \frac{M+m_1+m_2}{m_1\cos\alpha _1 + m_2\cos\alpha _2}.$

What is left to do, is to write

$\displaystyle \Pi =\eta g(m_2\sin\alpha _2 - m_1\sin\alpha _1),$

$\displaystyle K =\frac 12 \left\{ M\dot\xi ^2+ m_1\left[( \dot\xi-\dot\eta\cos\alpha _1)^2+\dot\eta ^2\sin^2\alpha _1\right] + m_2\left[ (\dot\xi-\dot\eta\cos\alpha _2)^2+\dot\eta ^2\sin^2\alpha _2\right]\right\},$

substitute $\eta$ by $\xi$ , take time derivative of the full energy, and express $\ddot \xi$ . Well, there is some math do be done, but that is actually just an algebra. If you do it correctly, you obtain

$\displaystyle \ddot \xi = g\frac{(m_1\sin\alpha_1-m_2\sin\alpha_2)(m_1\cos\alpha_1+m_2\cos\alpha_2)}{(m_1+m_2+M)(m_1+m_2)-(m_1\cos\alpha_1+m_2\cos\alpha_2)^2}$ .

A really simple example is provided by water level oscillations in U-tube. Let the water occupy length $L$ of the U-tube, and let us use the water level height (with respect to the equilibrium level) $\xi$ as the generalized coordinate. For a state with $\xi >0$ , a water column of height $\xi$ from one arm has been lifted by an height difference $\xi$ and moved into the other arm of the U-tube, which corresponds to the potential energy $\Pi = \rho gS \xi^2$ ; meanwhile, $K=\frac 12 SL\rho \dot\xi^2$ . So, upon applying our technique we obtain $\ddot\xi=-\frac{2g}L\xi$ , which describes an harmonic oscillator of circular frequency $\omega =\sqrt{2g/L}$ .

Actually, when in hurry and oscillation frequency is needed, two steps of the scheme (taking time derivative and writing the equation of motion) can be skipped. Indeed, for an harmonic oscillator, both $K$ and $\Pi$ need to be quadratic in $\dot\xi$ and $\xi$ , respectively, ie. should have form $K=A\dot\xi^2$ and $\Pi =B\xi^2$ , where $A$ and $B$ are constants; then, $\omega = \sqrt{B/A}$ .

Next, the technique can be used to analyse oscillations in simple rotating systems, such as, for instance, a system of two balls of mass $m$ , connected with a spring of length $a$ and stiffness $k$ , rotating with angular momentum $\vec L$ (which is perpendicular to the spring). Here, again, an additional (to the energy) conservation law (of angular momentum) reduces the effective number of degrees of freedom down to one. Let us use the deformation $x$ of the spring as the generalized coordinate. Then,

$\displaystyle K =\frac 12 \left[\frac{m\dot x^2}2 + \frac{2L^2}{m(a+x)^2} \right],\;\;\;\Pi=\frac 12 kx^2.$

This case is different in that the kinetic energy depends  not only on $\dot x$ , but also on $x$ ; in effect, the second term of the kinetic energy behaves as a potential one, and can be combined into an effective potential energy in the expression for the full energy. Following our technique,

$\displaystyle \frac 12 m\ddot x \dot x - \frac{2L^2}{m(a+x)^3}\dot x+kx\dot x=0 \Rightarrow \ddot x = \frac{4L^2}{m^2(a+x)^3}-2\frac kmx.$

This equation of motion can be linearised around the state of equilibrium $x_0$ (such that for $x=x_0$ ,  the right-hand-side turns to zero), by introducing $\xi=x-x_0$ . Linearisation means approximating a non-linear function with a linear one, and is typically done by neglecting in the Taylor expansion quadratic and higher terms, ie. by substituting $f(z)$ with $f^\prime(z_0)\cdot (z-z_0)$ ; this is legitimate if the argument varies in a narrow range, in this case for $\xi/(a+x_0) \ll 1$ . As a result, we obtain

$\displaystyle \ddot \xi = -2\xi \left[\frac{6L^2}{m^2(a+x_0)^4}+\frac km\right] = -\xi \frac {2k}m\left(1+\frac{3x_0}{a+x_0}\right),$

which gives us immedieately the circular frequency of small oscillations, $\omega =\sqrt{\frac {2k}m\left(1+\frac{3x_0}{a+x_0}\right)}$ .

What we did here can be also called a linear stability analysis (which is a very popular technique in physics). Indeed, it is easy to see that regardless of the parameter values, the circular frequency is always a real number, ie. the circular trajectories of the balls are always stable (meanwhile, imaginary circular frequency would mean that the solution includes a component which grows exponentially in time, ie. the regular motion along the circular trajectory would be unstable).

Note that almost exactly the same analysis which was done here for the rotating spring, was used in the "official" solution of the Problem 1 (subquestion 3) of IPhO-2011. However, it appears that for the mentioned problem, this technique cannot be applied as easily: there is one mistake in the solution, and another one among the assumptions of the problem; for more details, see the mosaic tile "Are trojans stable?".

Up til now we have dealt with problems where the task was to find an acceleration. What to do, if you are asked to find a force? For instance, a sphere and a wedge are placed on two facing ramps as shown in Figure; all the surfaces are frictionless. Find the normal force between the wedge and the sphere.

![figure](../../sources/physicscup/figures/ipho2012-mosaic-3-3.jpg)

Well, it would be very easy to find the acceleration of the ball (or that of the wedge) using the method of generalized coordinates (ball displacement can be used as the coordinate). But once we know the acceleration, it is also easy to find the normal force $N$ between the wedge and the ball from the Newton II law! (The answer is $\frac{2mM}{M+m} g\tan \alpha$ .)

The method of generalized coordinates is designed to work for dissipation-less systems.. However, in some cases it is also possible to take into account the friction. To illustrate this, let us modify the previous problem so that the right ramp remains frictionless, but the left ramp has high friction, so that the ball will rotate along it, and the friction between the wedge and the ball is described by kinetic friction coefficient $\mu$ .

The idea here is to "fix" the energy conservation law by adding the work performed by the friction force. Initally, such an equation will involve the normal force as a parameter, but it can be determined later: we express the normal force in the same ways as for the previous problem, and this will be the equation for finding $N$ . So, $K=\frac12\dot\xi^2\left(M+\frac 75m\right)$ and $\Pi = (m-M)g\xi\sin\alpha$ ; the contact point leaves "traces" both on the wedge (of length $2\xi\sin\alpha$ ) and on the ball (of length $\xi$ ), corresponding to the net work of $A=\xi(1+2\sin\alpha)N\mu$ . So, the energy conservation law is written as

$\frac12\dot\xi^2\left(M+\frac 75m\right) + (m-M)g\xi\sin\alpha + \xi(1+2\sin\alpha)N\mu= 0,$

from where

$\displaystyle \ddot \xi = \frac{(M-m)g\sin\alpha - (1+2\sin\alpha)N\mu}{M+\frac 75m}$ .

Now, assuming that we have heavy wedge, and the system moves leftwards, the Newton II law for the wedge can be written as

$\displaystyle M\frac{(M-m)g\sin\alpha - (1+2\sin\alpha)N\mu}{M+\frac 75m}=Mg\sin\alpha-N\mu\sin\alpha-N\cos\alpha$ ,

and hence,

$\displaystyle N= \frac{2.4Mmg\sin\alpha}{(M+1.4m)(\cos\alpha - \mu\sin\alpha -\mu)}$ .

As a final example illustrating this method, let us consider a somewhat more difficult problem, posed by W.H. Besant in 1859, and solved by Lord Rayleigh in 1917: in an infinite space filled with an incompressible liquid of density $\rho$ at pressure $p$ , there is a spherical "bubble" of radius $R$ , which has vacuum inside. Due to the pressure (far away, it is kept equal to $p$ ), the "bubble" starts collapsing; find the collaps time of the "bubble". Here we use the radius $r$ of the "bubble" as the generalized coordinate; there is no potential energy, but there is work done by the pressure, $A=\frac 43 \pi(R^3-r^3)p$ . What is left to do, is to express the kinetic energy of the fluid in terms of $\dot r$ . Due to the incompressibility of the fluid, the volume flux of liquid through any spherical surface of radius $x>r$ around the centre of the  "bubble" is independent of $x$ : $4\pi r^2 \dot r=4\pi x^2v(x)$ $\Rightarrow v(x)= \dot r r^2/x^2$ . So, the kinetic energy can be found as

$\displaystyle K=\int_r^\infty \frac 12 \rho \left(\dot r \frac{r^2}{x^2}\right)^2\cdot 4\pi x^2dx=2\pi\dot r^2\rho r^3.$

So, the energy balance can be written as

$\displaystyle \left(\frac Rr\right)^3-1=\frac{3\rho}{2p}\dot r^2.$

This equation could be used to find the acceleration $\ddot r$ ; however, we need to know the collapse time; so we put $\dot r =\frac {dr}{dt}$ , and express $dt$ in terms of $dr$ and $r$ :

$\displaystyle dt = \sqrt{\frac{3\rho}{2p}} \frac{dr}{\sqrt{\left(\frac Rr\right)^3-1}} \Rightarrow$ $\displaystyle t=\sqrt{\frac{3\rho}{2p}} \int_0^R\frac{dr}{\sqrt{\left(\frac Rr\right)^3-1}}=R\sqrt{\frac{3\rho}{2p}} \int_0^R\frac{d\zeta}{\sqrt{\zeta^{-3}-1}}.$

Thus, we were able to obtain an answer, which contains a dimensionless integral: substituting $\zeta=r/R$ allowed us to get rid of the dimensional quantities under the integral (if possible, always use this technique to convert integrals into dimensionless numbers). This result could be left as is, since finding an integral is a task for mathematicians. The mathematicians, however, have been up to the task: $\int_0^R\frac{d\xi}{\sqrt{\xi^{-3}-1}} =\Gamma(\frac 56)/\Gamma(\frac 13),$ where $\Gamma$ denotes the gamma function. So, we can write

$\displaystyle t=R\sqrt{\frac{3\rho}{2p}} \frac{\Gamma(5/6)}{\Gamma(1/3)}\approx 0.915R\sqrt{\frac{\rho}{p}}.$

Finally, to close the topic of the generalized coordinates, it should be mentioned that this technique can be developed into generic theories – Lagrangian and Hamiltonian formalisms, which are typically taught as a main component of the course of theoretical mechanics. In particular, the Hamiltonian formalism makes it possible to prove the conservation of adiabatic invariant, as well as the KAM (Kolmogorov-Arnold-Mozer) theorem, as well as to derive conservation laws from the symmetry properties of the Hamiltonian (or Lagrangian) using the Noether's theorem. The Hamiltonian approach differs from what is described here by using the generalized momentum $p$ , instead of the generalized velocity $\dot \xi$ . For the most typical cases when the kinetic energy is proportional to the square of the generalized velocity, one can just use the effective mass ${\cal M}$ (defined above): $p={\cal M}\dot \xi,\; K=p^2/2{\cal M}$ . Then, the expression for the full energy $H=K+\Pi$ is considered as a function of $\xi$ and $p$ , $H=H(p,\xi)$ , and is called the Hamiltonian; the equation of motion is written in the form of  a system of equations, $\dot p=-\partial H/\partial \xi$ ,  $\dot \xi=\partial H/\partial p$ . However, for the practical application of problem solving, the simplified approach to the generalized coordinates provided above is just enough!

—

Jaan Kalda, Academic Committee of IPhO-2012

---
*From Jaan Kalda's "Physics Solver's Mosaic", Academic Committee of IPhO-2012. Transcribed faithfully from the born-digital WordPress source (Wayback snapshot); inline math recovered from WP-LaTeX `alt` attributes.*
