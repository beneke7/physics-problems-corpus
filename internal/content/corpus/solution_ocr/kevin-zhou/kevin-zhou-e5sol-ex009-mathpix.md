---
id: solution-ocr-kevin-zhou-e5sol-ex009
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E5Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e5-ex009]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 9

A long, thin cylinder of radius $R$ is placed in a magnetic field $B _ { 0 }$ parallel to its axis. The cylinder originally carries no current on its surface, and it is cooled until it reaches the superconducting state. Find the resulting distribution of current on its surface. Now suppose the external magnetic field is turned off; what is the new current distribution?

## Solution

Solving this question requires using both properties. The Meissner effect tells us there is no magnetic field within the body of the cylinder itself (i.e. the region from $r = R$ to $r = R + d r )$. The ideal conducting property tells us that the flux through a cross-section of the cylinder (i.e. the region from $r = 0$ to $r = R$ ) is constant, and hence equal to $\pi R ^ { 2 } B _ { 0 }$.

When the cylinder becomes superconducting, the Meissner effect kicks in, and the field within the body of the cylinder can be cancelled by a uniform surface current on the outer surface. By the same logic as we used to compute the field of a cylindrical solenoid, it is

$$
K _ { \text {out } } = - B _ { 0 } / \mu _ { 0 } .
$$

To keep the flux constant, a compensating opposite current must appear on the inner surface,

$$
K _ { \text {in } } = B _ { 0 } / \mu _ { 0 } .
$$

When we turn off the external magnetic field, the two properties imply

$$
K _ { \text {out } } = 0 , \quad K _ { \text {in } } = B _ { 0 } / \mu _ { 0 }
$$

which you should check if you're not sure.
[3] Problem 24 (MPPP 182). Two identical superconducting rings are initially very far from each other. The current in the first is $I _ { 0 }$, but there is no current in the other. The rings are now slowly


brought closer together. Find the current in the first ring when the current in the second is $I _ { 1 }$.
Solution. Since the rings are ideal conductors, the flux through each ring is conserved. Now let the mutual inductance be $M$ and the self-inductance be $L$, and let the final current through the first ring be $I _ { f }$. The flux through the second ring is still zero, so

$$
0 = I _ { f } M + I _ { 1 } L .
$$

Similarly, conservation of flux through the first ring gives

$$
I _ { 0 } L = I _ { f } L + I _ { 1 } M .
$$

Solving for $I _ { f }$ gives a quadratic equation, with solution

$$
I _ { f } = \frac { I _ { 0 } + \sqrt { I _ { 0 } ^ { 2 } + 4 I _ { 1 } ^ { 2 } } } { 2 } .
$$

[4] Problem 25 (PPP 182, Russia 2006). A thin superconducting ring of radius $r$, mass $m$, and self-inductance $L$ is supported by a piece of plastic just above the top of a long, cylindrical solenoid of radius $R \gg r$ and $n$ turns per unit length. The ring and solenoid are coaxial. When the current in the solenoid is $I _ { s }$, the magnetic field near the end of the solenoid is
$$
B _ { z } = B _ { 0 } ( 1 - \alpha z ) , \quad B _ { r } = B _ { 0 } \beta r
$$
where we put the origin at the very top of the solenoid.
![](../../../figures/solution-ocr/5ccbb9c700744a07cc3dc1e6.jpg)
    (a) Find an expression for $B _ { 0 }$. (Keep your answers below in terms of $B _ { 0 }$ to avoid clutter.)
    (b) Find $\beta$ in terms of $\alpha$. What are their signs?
    (c) Let $I$ be the current through the ring. Suppose that initially $I _ { s } = I = 0$. Find the value $I _ { c }$ of $I _ { s }$ when the ring lifts off the plastic.
    (d) Now the piece of plastic is removed and the ring is return to the same position. Initial conditions are set up so that $I _ { s } = I _ { c }$ and $I = 0$. The ring is released from rest. Find its subsequent motion, assuming for simplicity that the expressions for $B _ { z }$ and $B _ { r }$ above always hold. Express your final answers in terms of only $\alpha$ and $g$.
    (e) In reality, the expressions for $B _ { z }$ and $B _ { r }$ break down if the ring moves too far. Consider part (d) again, but now suppose the exact expressions for $B _ { z }$ and $B _ { r }$ are used. Without solving any differential equations, will the resulting motion be qualitatively similar or not?

Solution. (a) The magnetic field in the center of the solenoid is $\mu _ { 0 } n I _ { s }$. By symmetry and superposition, at the ends of the solenoid, the field at the axis is $\frac { 1 } { 2 } \mu _ { 0 } n I _ { s }$ since the two ends can be put together to make a field of $\mu _ { 0 } n I _ { s }$. (We previously saw this argument in E3.) Thus at the top of the solenoid, the field is $B _ { 0 } = \frac { 1 } { 2 } \mu _ { 0 } n I _ { s }$.

(b) From Gauss's law, we know that $\oint \mathbf { B } \cdot d \mathbf { S } = 0$. Consider a cylinder of radius $r$ and height $z$ coaxial with the solenoid. The differences between the flux of the circular faces is $- \pi r ^ { 2 } \left( B _ { 0 } - \right.$ $\left. B _ { 0 } ( 1 - \alpha z ) \right) = - \alpha z B _ { 0 } \pi r ^ { 2 }$. Since the flux that enters the cylinder must all leave through the side of the cylinder of area $2 \pi r z$, we get
$$
\alpha z B _ { 0 } \pi r ^ { 2 } = 2 \pi r z B _ { r } = 2 \pi r ^ { 2 } z \beta B _ { 0 }
$$
from which we conclude
$$
\beta = \alpha / 2 .
$$
Since flux spreads out to the side, $\beta > 0$. Thus, we also have $\alpha > 0$, which makes sense since the axial field should weaken as we get further from the solenoid.
Equivalently, we could have used the differential form $\nabla \cdot \mathbf { B } = 0$, where $B _ { x } = B _ { 0 } \beta x$ and $B _ { y } = B _ { 0 } \beta y$. Using the form of the divergence in cylindrical coordinates gives $- \alpha B _ { 0 } + 2 B _ { 0 } \beta = 0$, which leads to the same result.
(c) The applied flux through the ring will be $\Phi _ { B } = B _ { z } \pi r ^ { 2 }$, and since the ring is an ideal conductor, the induced flux must cancel out the applied flux, since the initial flux was zero. By the definition of inductance, there is a current $I = \Phi _ { B } / L$ in the ring.
The Lorentz force on the ring is $F = 2 \pi r I B _ { r }$, and the ring lifts off when it balances gravity,
$$
2 \pi r B _ { 0 } \beta r \frac { B _ { 0 } ( 1 - \alpha z ) \pi r ^ { 2 } } { L } = m g .
$$
Now setting $z = 0$ and using the result $\beta = \alpha / 2$, we get
$$
I _ { c } = \frac { 2 } { \mu _ { 0 } n \pi r ^ { 2 } } \sqrt { \frac { m g L } { \alpha } } .
$$
You could also get the same result by thinking in terms of energy, and using a "virtual work" argument, as in example 8. But that's not necessary; in that case, thinking about force was subtle (since there is an entire spring contracting at once) and thinking about energy was simple, while in this case, the energy is subtle (since there are two sources of magnetic field in the problem) and the force is simple.
(d) Now, the flux through the ring stays at $B _ { 0 } \pi r ^ { 2 }$, which means the induced current only balances the change in flux due to the change in $B _ { z }$. By reasoning similar to the previous part, we have a force on the ring of
$$
F = 2 \pi r B _ { 0 } \beta r \frac { B _ { 0 } ( - \alpha z ) \pi r ^ { 2 } } { L } - m g .
$$
Combining the results of parts (a) and (c) to eliminate $B _ { 0 }$ gives the simple result
$$
F = m g ( 1 - \alpha z )
$$

which is a simple harmonic motion equation with a shift, so that the equilibrium point is at $z = - 1 / \alpha$. Since the initial velocity is zero, we conclude
$$
z ( t ) = \frac { 1 } { \alpha } ( \cos ( \sqrt { \alpha g } t ) - 1 ) .
$$
(e) We have $\alpha \sim 1 / R$ on dimensional grounds, so the above analysis shows that the ring drops by an amount of order $R$, i.e. by an amount comparable to the solenoid's width. That makes our assumptions about the forms of $B _ { z }$ and $B _ { r }$ dubious, because they only hold on scales small compared to $R$. The key question is: when we use the exact forms of $B _ { z }$, do we still get some kind of oscillation (though not a simple harmonic one), or does the ring not oscillate at all?
To answer this question, consider the highest upward force that can be exerted on the ring. Once the ring is well inside the solenoid, $B _ { z }$ reaches its maximum value of $2 B _ { 0 } = \mu _ { 0 } n I _ { c }$. At this point, if we still had $B _ { r } = B _ { 0 } \beta r$, then the upward magnetic force would be $m g$, which is just enough to balance gravity. But as the ring goes further inside, the magnetic field spreads out less radially, so $B _ { r }$ is actually lower. Therefore, the upward magnetic force is always less than $m g$ ! The ring doesn't actually oscillate; it just falls faster and faster downward.
[4] Problem 26. IPhO 2012, problem 1C. A neat and clean problem about superconductors.
[4] Problem 27. EuPhO 2017, problem 3.
Solution. See the official solutions as usual. In retrospect, the basic idea behind this problem was introduced back in E2.
[4] Problem 28 (Physics Cup 2013). A rectangular superconducting plate of mass $m$ has four identical circular holes, one near each corner, a distance $\Delta$ from the plate's edges. Each hole carries a magnetic flux $\Phi$. The plate is put on a horizontal superconducting surface. The magnetic repulsion between the plate and the surface balances the weight of the plate when the width of the air gap beneath the plate is $d \ll \Delta$, and $d$ is much smaller than the radii of the holes. The frequency of small vertical oscillations is $f _ { 0 }$.
![](../../../figures/solution-ocr/c0f5750b2ff3f4b2595daf94.jpg)
Next, a load of mass $M$ is put on the plate, so that the load lays on the plate, and the plate levitates above the support. What is the new frequency of small oscillations?
Solution. We think about the magnetic field energy present in between the plate and the superconducting surface. Since the field cannot penetrate the superconductor, it simply spreads out, so that it has magnitude $B ( r ) \sim \Phi / r d$ a distance $r$ from the hole. The field energy is
$$
U \sim \int B ^ { 2 } d V \sim \int \frac { d V } { r ^ { 2 } d ^ { 2 } } \sim \frac { 1 } { d } \int \frac { r d r } { r ^ { 2 } }
$$

The latter integral looks like it diverges, but we recall it is cut off by $\Lambda$ on the upper end and the radii of the holes on the lower end. The value of the integral doesn't matter, because it's just some constant, and we're only interested in the dependence on $d$, which is

$$
U \sim \frac { 1 } { d } .
$$

This potential provides a restoring force against vertical displacements,

$$
F \sim \frac { 1 } { d ^ { 2 } } .
$$

If the total mass is $m$, that means that $d \sim 1 / \sqrt { m }$ at equilibrium. About this equilibrium point, the effective spring constant is given by the derivative of $F$,

$$
k \sim \frac { 1 } { d ^ { 3 } } \sim m ^ { 3 / 2 } .
$$

Therefore, the oscillation frequency is

$$
f \sim \sqrt { k / m } \sim m ^ { 1 / 4 } .
$$

Therefore the new frequency is $f _ { 0 } ( 1 + M / m ) ^ { 1 / 4 }$. The fact that we didn't need to know any of the constants involved to get this scaling is a nice property of power-law potentials.
[5] Problem 29. IPhO 1994, problem 2. This problem tests your intuition for induction, and is good preparation for E6.

Remark
In E4, we spent a lot of time applying $F = m a$ to charges. But in this problem set, we were somehow able to find how systems of charges behave using only Maxwell's equations, without ever explicitly referring to the forces on charges. Certainly this information has to be used implicitly somewhere, so what's going on?

To investigate this, let's do a careful derivation of Kirchhoff's loop rule, for a series RLC circuit with a battery. By applying the work-kinetic energy theorem to a charge $q$ as it goes around the circuit, from one capacitor plate to the other, we have

$$
\int _ { C } \mathbf { E } \cdot d \mathbf { s } + \int _ { C } \mathbf { f } \cdot d \mathbf { s } = \frac { \Delta \mathrm { KE } } { q }
$$

where $\mathbf { f }$ is any non-electric force per charge, and the line integrals follow the path $C$ of the charge. By assumption, the battery and resistor contribute

$$
\int _ { C } \mathbf { f } \cdot d \mathbf { s } = \begin{cases} \mathcal { E } & \text { battery } \\ - I R & \text { resistor } \end{cases}
$$

where the forces are due to chemical reactions (as covered in E2) or collisions with the ions (as covered in E4). Meanwhile, Faraday's law states

$$
\oint \mathbf { E } \cdot d \mathbf { s } = \int _ { C } \mathbf { E } \cdot d \mathbf { s } + \frac { Q } { C } = - \frac { d \Phi _ { B } } { d t } = - \dot { I } L
$$


where we need to add on $Q / C$ to close the loop through the capacitor. Thus,

$$
\mathcal { E } = \dot { I } L + I R + \frac { Q } { C } + \frac { \Delta \mathrm { KE } } { q } .
$$

Now, the key point is that in a conductor, the charges are extremely light and extremely numerous; it only takes a tiny amount of kinetic energy to get an enormous current. Therefore, the energy in any circuit is dominated by the energies stored in the inductor and capacitor, while the kinetic energy of the charges is negligible. We thus set the $\Delta \mathrm { KE }$ term to zero to get the usual form of Kirchhoff's loop rule.

Most books gloss over the derivation of Kirchhoff's loop rule; for instance, Halliday, Resnick, and Krane merely prove it in the trivial case of an all-resistor circuit. Unfortunately, most purported "derivations" of it in other sources, or online, are simply wrong. For example, a common claim is that in the absence of inductors, Kirchhoff's loop rule is nothing more than the statement that $\oint \mathbf { E } \cdot d \mathbf { s } = 0$. But this doesn't explain how the term $Q / C$ can show up; since the electric field of a capacitor is conservative, its closed line integral always vanishes. The confusion only multiplies once inductors are in play.

As another note, if the work done on the charges is positive in some parts of the circuit, and negative in others, shouldn't the current wildly speed up and slow down as it goes through the wires? No, because as we saw in E2, charges strongly repel each other, so charge can't accumulate anywhere. More precisely it's because wires have negligible capacitance; in the fluid flow analogy, the fluid is incompressible.

To illustrate this point, consider a discharging $R L$ circuit, where the inductor has no resistance. As the current in the inductor decreases, it induces an electric field along the inductor wires. The charges in the circuit then redistribute themselves as they flow; as a result, the electric field in the inductor wire is almost completely cancelled, while the induced emf $\dot { I } L$ appears across the resistor. It's just like how it's possible to pull on a massless rope attached to a massive block, even though the net force on a massless object always has to be zero - an internal tension force appears to transfer the force to the block.

Above, I say "almost" because the kinetic energy of the charges does play a small role. In other situations, it's possible for it to have a big effect. For example, if you really had a completely ideal wire loop, with no resistance and no capacitance, and twisted on itself so that it had no inductance, attached to an ideal battery, then the limiting factor which stops the current from becoming infinite is this inertia. The kinetic energy of charges is proportional to $v ^ { 2 } \propto I ^ { 2 }$, so it acts like a very tiny inductance distributed throughout the wire (known as kinetic inductance), resisting changes in current. You'll see some examples in ERev where the motion of charges plays a direct role.
