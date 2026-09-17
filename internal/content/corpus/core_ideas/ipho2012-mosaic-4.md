---
id: ipho2012-mosaic-4
source: ipho2012-mosaic
handout: "Physics Solver's Mosaic"
section: "4. Are Trojans stable?"
kind: essay
author: Jaan Kalda
meta_technique: [stability-analysis, choose-reference-frame]
example_problems: []
figure_files: [ipho2012-mosaic-4-1.jpg]
url: https://web.archive.org/web/20120326155251/http://www.ipho2012.ee/physicscup/physics-solvers-mosaic/4-are-trojans-stable/
status: stable
---

# 4. Are Trojans stable?

To begin with, what are Trojans? These are small celestial bodies which move together with two heavy bodies (typically the sun and a planet) in such a way that (a) the relative position of the three bodies does not change (they rotate as if forming a solid body); (b) the motion of these small bodies is stable: small fluctuations in the relative position will not be amplified. It appears that for a two-body system, eg, the Sun and the Jupiter, there are five points, where a small (third) body could move so that the condition (a) will be satisfied – the so called Lagrangian points, denoted by L1, L2, L3, L4 and L5. The first three of these lay at the same line with the Sun and Jupiter. In addition, as was shown in  IPhO problem 1989-2, the condition (a) will be also satisfied, if the three bodies form an equilateral triangle; the respective points are denoted by L4 and L5. It appears that the Lagrangian points L1, L2 and L3 are always unstable, but the points L4 and L5 can be stable. In particular, for the Sun-Jupiter system, L4 and L5 are stable, and there are actually a considerable number of asteroids "trapped" into the vicinity of these points. These asteroids are named after the figures of the Trojan war, which is why the satellites in Lagrangian points L4 and L5 are called the Trojans (the term is not limited to the Sun-Jupiter system).

And so, the Trojans are stable by definition, and the title here is somewhat inaccurate; the actual question is, are the Lagrangian points L4 and L5 always stable? The question is motivated by the Problem 1 (subquestion iii) of IPhO 2010 which made an attempt of studying the stability of L4 for a system  consisting of two equal point masses (actually, small oscillations of a small body moving around L4). The official solution, concluded that the small body will oscillate, ie. the position is stable. However, a careful analysis shows that the stability of L4 and L5 is achieved only if the ratio of the two large masses is large enough – larger than $25 \left(\frac 12 +\sqrt{\frac 14 - \frac 1{625}}\right)$ , ie. for two equal masses the equilibrium is unstable! So, what went wrong in the IPhO Problem 2010-1-iii?

To begin with, let us mention that stability for such a system is actually quite a surprising thing. Indeed, according to the Earnshaw's theorem, there are no stable equilibrium configurations for particles with Coulomb potential (gravitational potential is identical to the Coulomb one). Indeed, if there were a point P which is a stable equilibrium for positive charges, in the immediate vicinity of P, all the field lines need to be directed towards P, because otherwise, a positive charge would escape from P along the outgoing field lines. This, however, would be in contradiction with the Gauss law for a small spherical neighbourhood of P: the flux of the force field needs to be negative (there are only incoming field lines), but equals strictly to zero for Coulomb potentials. Here we hope that L4 will be a stable equilibrium in the system of reference co-rotating with the two heavy masses; in that system, there is also the force field of the centrifugal force. Unfortunately, centrifugal force is of no help, because it leads to the creation of field lines in vacuum, making the flux around P strictly positive (recall that stability requires a negative flux). Now, let us recall that besides the gravitational and centrifugal forces, we have also the Coriolis force, which acts, however, only on moving bodies. Hence, the stability can be created only by the Coriolis force!

Unfortunately, the Coriolis force is not included into the Syllabus of IPhO. Quite often, the usage of Coriolis force can be avoided, most typically by using non-rotating systems of reference (the origin can move along a circle, though), or studying only potential energies (Coriolis force does not perform work). Here, however, neither of these tricks can be used: the system of reference needs to rotate (because the net gravitational field is stationary only in such a system), and as we saw, we cannot work with the potentials only, because the Coriolis force is needed to achieve the stability. The authors of the problem believed to have been found a work-around: assume that there is an approximate conservation of the angular momentum (with respect to the centre of mass O of the whole system, cf. Figure) of the small body, and apply the method of generalized coordinates: if the radial displacement $y$ from the equilibrium point L4 (or L5; marked in Figure as P)  is used as the coordinate, the tangential velocity $\frac{dx}{dt}\equiv v_t$ can be expressed via the radial one $dy/dt$ , allowing us to write down the energy balance equation (recall that the Coriolis force cancels out from that equation as it does not create any work). From that equation, one could immediately obtain the circular frequency of small oscillations. However, we have made two mistakes here. First, the angular momentum ${\cal L}$ is not conserved, even not approximately. Indeed, angular momentum is conserved if the force field is rotationally symmetric. However, a superposition of the gravitational fields of two point masses has no such symmetry. Approximate conservation of ${\cal L}$ would require that such a symmetry is local: near L4, the curvature radius of the equipotential surface needs to be equal to the distance $y$ from the origin O; regrettably, this is also not the case. Second, the gravitational energy depends not only on the radial coordinate $y$ , but also on the tangential displacement $x$ from  L4; note that there is no way of expressing $x$ via $y$ , even the (non)conservation of the angular momentum is useless.

![figure](../../sources/physicscup/figures/ipho2012-mosaic-4-1.jpg)

So, how to obtain a correct solution to this problem – what is the frequency of small oscillations around the Lagrangian point L4, assuming that the two heavy masses are equal? Well, we just need to follow the standard way of doing such things: first, we write down the equations of motion for both coordinates, $x$ and $y$ , and second, use linear approximation (which is valid for small displacements), ie. neglect the terms which involve second and higher powers of $x$ and $y$ ; when working with the gravitational potential, this corresponds to neglecting the terms with third and higher powers. In such a way, we obtain linear equations of motion. The third step is to find the eigenfrequencies of that system of equations, ie. such values of $\omega$ that with a proper choice of $y_0$ , the equations will be satisfied with $x=e^{-i\omega t}$ and $y=y_0e^{-i\omega t}$ . If there is at least one eigenfrequency with a positive imaginary part $[\Im (\omega) >0]$ then the system is unstable. On the other hand, if for all the eigenfrequencies $\Im (\omega) \le 0$ , the system is stable (unless there is an eigenfrequency $\omega=0$ , in which case the linear analysis is not sufficient for proving stability). As a fourth useful idea, let us note that with more than one point mass, it is much more convenient to calculate the gravitational potential, rather than the resultant gravitational force.

According to what has been said, we need an expression for the Coriolis force. Of course, we could just take a ready formula, but it would be better to understand how it can be obtained (if you are not interested, please skip this part). And so, consider a system of reference, which rotates around the origin $O$ with an angular  velocity $\vec\Omega$ (the vector defines the rotation axis according to the corkscrew rule). Consider a point $P$ , which is motionless in the rotating system, and let us denote $\vec r =\vec{OP}$ . In the lab system of reference, the point $P$ moves with velocity $v=r\Omega$ , and when studying the direction of the velocity $\vec v=\frac {d\vec r}{dt}$ , one can see that $\vec v = \vec \Omega \times \vec r$ . Now, if the point $P$ moves in the rotating system of reference with velocity $\vec u =\frac{d\vec r}{d\tau}$ (let us use $\tau$ to measure the time in the rotating system), then this additional velocity needs to be added to what would have been for a motionless point:

$\displaystyle \frac{d \vec r}{dt}=\frac{d \vec r}{d\tau} + \vec \Omega \times \vec r.$

So, we can conclude that the time-derivatives of vectors in rotating and lab systems of reference are related via equality

$\displaystyle \frac{d }{dt}=\frac{d }{d\tau} + \vec \Omega \times .$

This is written in the form of an operator, which means that we can write any vector (eg $\vec r$ or $\vec v$ ) rightwards of all the three terms. In particular, we can apply this formula to the right- and left-hand-sides of the equality $\vec v=\vec u + \vec \Omega \times \vec r$ :

$\displaystyle \frac{d \vec v}{dt}=\left(\frac{d }{d\tau} + \vec \Omega \times \right)\left(\vec u + \vec \Omega \times \vec r\right) = \frac{d \vec u}{d\tau} + \vec \Omega \times \vec u +\frac{d( \Omega \times \vec r)}{d\tau} + \vec \Omega \times \left(\vec \Omega \times \vec r\right).$

Here we need to bear in mind that when taking derivatives of vectors and products of vectors, all the well-known rules can be applied; in particular, $\frac d{dt} (\vec a \times \vec b) = \frac {d\vec a}{dt}\times \vec b+\vec a\times \frac{d\vec b}{dt}$ and  $\frac d{dt} (\vec a \cdot \vec b) = \frac {d\vec a}{dt}\cdot \vec b+\vec a\cdot \frac{d\vec b}{dt}$ . We also need the rule for the double cross product, $\vec a\times (\vec b\times \vec c)=\vec b (\vec a\cdot \vec c)-\vec c (\vec a\cdot \vec b)$ ; you can memorize this equality by keeping in mind that the double product is a linear combination of the vectors from the inner braces, and that the sign '+' comes with the vector from the middle position. And so, bearing in mind that $\frac{d\vec\Omega}{d\tau}=0$ and $\frac{d\vec r}{d\tau}=\vec u$ , and assuming that $\vec r \perp \vec \Omega \Rightarrow \vec r\cdot \vec\Omega =0$ , we obtain

$\displaystyle \frac{d \vec v}{dt}=\frac{d \vec u}{d\tau}+2\vec\Omega\times\vec u - \Omega ^2 \vec r.$

Let us recall that $\frac{d \vec v}{dt}$ is the acceleration of the point $P$ as seen in the lab system of reference, and $\frac{d \vec u}{d\tau}$ is the same as seen in the rotating system of reference. Now, if $P$ is a point mass $m$ , and there is an external force $\vec F$ acting on $P$ , then $\vec F = m\frac{d\vec v}{dt}$ and hence,

$m\frac{d \vec u}{d\tau}=\vec F -2\vec\Omega\times\vec um + \Omega ^2 \vec rm,$

ie. in the rotating system of reference, the body behaves as if there were additional forces: the Coriolis force $-2\vec\Omega\times\vec um$ , and the centrifugal force $\Omega ^2 \vec rm$ .

Now we are finally ready to tackle the IPhO Problem 2010-1-iii. As mentioned above, the first step is writing down the potential energy in the rotating system of reference (see Figure above):

$\displaystyle \Pi = -GMm\left(\frac 1{\sqrt{\left(\rho + y\right)^2+\left(\frac L2-x\right)^2}}+\frac 1{\sqrt{\left(\rho + y\right)^2+\left(\frac L2+x\right)^2}}\right)-\frac m2\Omega ^2\left[(\rho+y)^2+x^2\right];$

note that the last term corresponds to the potential energy of the centrifugal force. When working with this potential energy, we can forget about the constant part of it; additionally, we can also forget about the linear part, because it gives  us the force, which is exactly zero: our point L4 has been chosen so as to provide an equilibrium. Owing to that equilibrium, we have also equality $2GM=L^3\Omega^2$ . We approximate the potential using the formula $\frac 1{\sqrt{1+\epsilon}}\approx 1- \frac 12\epsilon +\frac 38 \epsilon^2$ (which includes the first two terms of the Taylor expansion); keeping in mind that $\frac 14 L^2+\rho^2=L^2$ we obtain

$\displaystyle \Pi = \mbox {Const}-\frac {GMm}L \left[\frac 34 \left(\frac {2y\rho}{L^2}\right)^2+\frac 34 \left(\frac x{L}\right)^2-\frac{x^2+y^2}{L^2}\right]-\frac m2\Omega ^2\left(y^2+x^2\right).$

This can be further simplified:

$\displaystyle \Pi = \mbox {Const}-\frac {m\Omega^2}8 \left(9y^2+3x^2\right);$

hence, the resultant force of the gravitational and centrifugal forces can be written as $F_x=-\frac {\partial \Pi}{\partial x}=\frac 34 mx\Omega^2$ and $F_y=-\frac {\partial \Pi}{\partial y}=\frac 94my\Omega^2$ . Component-wise, the Coriolis force can be written as $F_{Cx}=-2\Omega m \frac {dy}{dt}$ , $F_{Cy}=2\Omega m \frac{dx}{dt}$ . Finally, the equations of motion can be written as

$\displaystyle \frac {d^2 x}{dt^2} =\frac 34{\Omega ^2}x - 2\Omega \frac{dy}{dt}, \; \; \frac{d^2 y}{dt^2} =\frac 94{\Omega ^2}x + 2\Omega \frac{dx}{dt}.$

Now we can proceed with the final step, finding the eigenfrequencies. We look for the solutions in the form $x=x_0e^{-i\omega t}$ , $y=y_0e^{-i\omega t}$ , upon substituting these expressions we obtain

$\displaystyle -\omega^2 x_0 =\frac 34{\Omega ^2}x_0 + 2i\Omega\omega y_0, \; \; -\omega^2y_0 =\frac 94{\Omega ^2}x_0 - 2i\Omega\omega x_0\Rightarrow$

$\displaystyle \left(\omega^2 + \frac 34{\Omega ^2}\right)\left(\omega^2+\frac 94{\Omega ^2}\right) =4\Omega ^2\omega ^2 \Rightarrow \omega ^4-\omega ^2\Omega ^2+ \frac{27}{16}\Omega ^4=0.$

This is a quadratic equation for $\omega ^2$ , which results in $\omega ^2=\frac \Omega 4\left(2 \pm i\sqrt{23}\right).$ This can be brought to the form

$\omega =\frac \Omega 4\left(\pm\sqrt {6\sqrt 3+4}\pm i\sqrt{6\sqrt 3-4}\right).$

So, we can conclude that due to the presence of an unstable solution

$x=x_0 \sin\left(\frac {\Omega t} 4\sqrt {6\sqrt 3+4}+\phi_0\right)\exp\left(\frac {\Omega t} 4\sqrt{6\sqrt 3-4}\right)$ ,

the equilibrium point L4 (and L5) is not stable in the case of a binary gravitational system with two equal masses.

Final notes. This mosaic tile is different from the others in that it is not motivated by a (more or less) universal problem solving technique or an important physical concept; instead, it is mainly aimed to clarify a single IPhO problem. The assumptions of physics contest problems don't need to be entirely correct. However, for physicists, it is very important to be aware, how firm or loose are the assumptions of their study, and to which degree can the the conclusions of their study be affected by the mismatch between the assumptions and the real life. Studies based on wrong assumptions can be useful, but the fact that the assumptions are not valid needs to be emphasized. The contest problems serve mostly educational purposes and are no different – if an invalid assumption is made, it should be clearly pointed out, and, if possible, explained why an incorrect assumption was made. Of course, no-one is secured against accidental mistakes; in particular, the more interesting your newly invented problem is,  the higher are the chances that there are some mistakes. Meanwhile, the IPhO problems serve as a well-tested pool of exercises, tested by the contestants and leaders of many countries, and it is better to make sure that there are no unresolved issues in these problems. This is the reasoning which led to the current mosaic tile. Although we are not able to close here the list of all such problems (for instance, there are problems 1988-2-iv and 2000-3-iv,v; you can let me know if you found out what is wrong there), more recent problems get typically more attention.

—

Jaan Kalda, Academic Committee of IPhO-2012

---
*From Jaan Kalda's "Physics Solver's Mosaic", Academic Committee of IPhO-2012. Transcribed faithfully from the born-digital WordPress source (Wayback snapshot); inline math recovered from WP-LaTeX `alt` attributes.*
