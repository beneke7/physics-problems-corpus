---
id: solution-ocr-kevin-zhou-e8sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
mapped_problems: []
verification_status: promoted
canonical_solution: false
provenance_note: "Mathpix PDF API Markdown conversion; promoted without manual proofreading."
---
## Electromagnetism VIII: Materials

Electromagnetism in matter is covered in chapters 10 and 11 of Purcell. For more on dielectrics, see chapters II-10 and II-11 of the Feynman lectures. Electromagnetism in matter is covered in greater detail in chapters 4, 6, and 9 of Griffiths, and chapters I-31 and II-32 through II-37 of the Feynman lectures. For an enlightening overview of the history of magnetism, see chapter 1 of Magnetism and Magnetic Materials by Coey. There is a total of 93 points.

## 1 Polarization

In E2, we introduced the basics of dielectrics. To review: when a dielectric is placed in an electric field, dipoles inside align with the field, reducing the field value. In very symmetrical situations, the field is simply reduced by a factor of the dielectric constant $\kappa = \epsilon / \epsilon _ { 0 }$. The total energy density within a dielectric is $\epsilon E ^ { 2 } / 2$. This section is about problems which require more than these few facts. To answer them, we need to think about the charge bound to the dielectric itself.

Idea 1: Bound Charge
The polarization P of a material is its electric dipole moment per unit volume. It corresponds to a "bound" charge density

$$
\rho _ { b } = - \nabla \cdot \mathbf { P }
$$

within the dielectric, and a bound surface charge density

$$
\sigma _ { b } = \mathbf { P } \cdot \hat { \mathbf { n } }
$$

on its surface.

Example 1
Find the electric field of a sphere with uniform polarization $\mathbf { P }$ and radius $R$.

Solution
There is no bound charge density inside the sphere, but a bound surface charge density

$$
\sigma _ { b } = \mathbf { P } \cdot \hat { \mathbf { r } } = P \cos \theta
$$

on its surface. We could apply Coulomb's law to this charge density, but an easier method is to recall that polarization just means an internal displacement of charge. This surface charge density precisely corresponds to having two uniformly charged balls of total charge $\pm Q$ displaced by a tiny amount d so that $Q \mathbf { d } = \left( 4 \pi R ^ { 3 } / 3 \right) \mathbf { P }$.

By the shell theorem, the resulting field inside is uniform, and points against $\mathbf { P }$,

$$
\mathbf { E } = - \frac { \mathbf { P } } { 3 \epsilon _ { 0 } } ,
$$

and the field outside is exactly a dipole field, with dipole moment $\mathbf { p } = \left( 4 \pi R ^ { 3 } / 3 \right) \mathbf { P }$.


[1] Problem 1. An infinite cylindrical rod of radius $R$ has a uniform polarization P.

(a) If $\mathbf { P }$ is perpendicular to the rod's axis, describe $\mathbf { E }$ outside, and find the value of $\mathbf { E }$ inside.
(b) If $\mathbf { P }$ is parallel to the rod's axis, find the electric field everywhere.

Solution. (a) The resulting bound charge is equivalent to having two uniform cylinders of total linear charge density $\lambda$ separated by $\mathbf { d }$ where $\lambda \mathbf { d } = \left( \pi R ^ { 2 } \right) \mathbf { P }$.
Outside the rod, this is equivalent to two lines of charge density $\pm \lambda$ separated by $d$. As for inside, note that for a single cylinder with charge density $\rho$, Gauss's law tells us that the field is $\mathbf { E } = \rho \mathbf { r } / \left( 2 \epsilon _ { 0 } \right)$. Thus, superposing the positive and negative cylinders, the field inside the rod is

$$
\mathbf { E } = - \frac { \rho \mathbf { d } } { 2 \epsilon _ { 0 } } = - \frac { \mathbf { P } } { 2 \epsilon _ { 0 } }
$$

which is uniform. (There's a little paradox here: why doesn't the limit $R \rightarrow \infty$ of this answer coincide with the $R \rightarrow \infty$ limit of the result of example 1? As was discussed in a related context in E1, the issue is that when a charge configuration is infinite, the answer is ambiguous and depends on boundary conditions. In this problem, we are implicitly adopting boundary conditions that yield a field with cylindrical symmetry.)

(b) In this case there's no bound charge anywhere. (You can imagine charge displaced a bit from infinity in one direction to infinity in the other direction.) So there is no electric field at all.

Now let's think about how polarization arises in the first place.
Idea 2: Electric Susceptibility
A small number of insulators are "ferroelectrics", whose crystal structure lets them maintain a preferred polarization P in the absence of external electric fields. (You can suppose that the preceding example and problem were implicitly about ferroelectrics.) But the vast majority of insulators are dielectrics, whose polarization is related to the total electric field by

$$
\mathbf { P } = \epsilon _ { 0 } \chi _ { e } \mathbf { E } , \quad \epsilon = \epsilon _ { 0 } \left( 1 + \chi _ { e } \right) = \epsilon _ { 0 } \kappa
$$

where $\chi _ { e }$ is the electric susceptibility and $\kappa$ is the dielectric constant. The susceptibility is nonnegative, except in some very exotic materials. The key difficulty is that above, E is the total electric field, including that due to the bound charge, which in turn depends on P.

Example 2
A point charge $q$ is inside a dielectric sphere of radius $R$ with dielectric constant $\kappa$. Find the electric field and charge density everywhere.

Solution
This is one of the simple symmetric cases where the electric field in the dielectric is simply reduced by a factor of $\kappa$,

$$
\mathbf { E } = \frac { q \hat { \mathbf { r } } } { 4 \pi \epsilon _ { 0 } r ^ { 2 } } \times \left\{ \begin{array} { l l }
1 / \kappa & r < R \\
1 & r > R
\end{array} . \right.
$$


Inside the sphere, this corresponds to an electric polarization

$$
\mathbf { P } = \frac { q } { 4 \pi r ^ { 2 } } \frac { \chi _ { e } } { \kappa } \hat { \mathbf { r } } .
$$

To check that this solution is actually right, we need to ensure the original point charge $q$, plus the bound charge, indeed generates the claimed electric field.

The divergence of P is zero everywhere besides the origin, where negative bound charge piles up to cancel some of the charge $q$. The charge at the origin is thus

$$
q - q _ { b } = q \left( 1 - \frac { \chi _ { e } } { \kappa } \right) = q \left( 1 - \frac { \kappa - 1 } { \kappa } \right) = \frac { q } { \kappa }
$$

which is consistent with Gauss's law for E there. At the surface of the sphere, there is a positive bound surface charge density

$$
\sigma _ { b } = \frac { q } { 4 \pi R ^ { 2 } } \frac { \chi _ { e } } { \kappa }
$$

which cancels the negative bound charge at the origin. Thus, by the shell theorem, the electric field outside the sphere is indeed that of the point charge $q$ alone.

Example 3
A dielectric sphere of radius $R$ and dielectric constant $\kappa$ is placed in a uniform field $\mathbf { E } _ { 0 }$, and as a result develops a uniform polarization $\mathbf { P }$. Find $\mathbf { P }$ and the field inside the sphere.

Solution
In example 1, we found the electric field due to the polarized sphere itself, which we'll call $\mathbf { E } _ { p }$. Here, we must remember that the polarization is produced in response to the total electric field inside the sphere,

$$
\mathbf { P } = \chi _ { e } \epsilon _ { 0 } \mathbf { E } , \quad \mathbf { E } = \mathbf { E } _ { 0 } + \mathbf { E } _ { p } .
$$

Using our previous result for $\mathbf { E } _ { p }$ and solving the system, we find

$$
\mathbf { E } = \frac { 3 } { \kappa + 2 } \mathbf { E } _ { 0 } , \quad \mathbf { P } = 3 \frac { \kappa - 1 } { \kappa + 2 } \epsilon _ { 0 } \mathbf { E } _ { 0 } .
$$

The polarizability $\alpha$ of each atom is defined as the dipole moment per applied field,

$$
\mathbf { p } = \alpha \mathbf { E } _ { 0 }
$$

so we have shown above that

$$
\alpha = \frac { 3 \epsilon _ { 0 } } { n } \frac { \kappa - 1 } { \kappa + 2 }
$$

where $n$ is the number density of atoms. This is the Clausius-Mossotti formula; it relates the macroscopically measurable parameter $\kappa$ to the microscopic parameter $\alpha$.
[2] Problem 2 (Purcell 10.10). Assume that the uniform field $\mathbf { E } _ { 0 }$ that causes the electric field in example 3 is produced by large capacitor plates very far away. The field lines tangent to the sphere


hit each of the distant capacitor plates in a circle of radius $r$. Find $r$ in terms of $R$ and $\kappa$.
Solution. The field lines are tangent at the widest part of the sphere. Consider a Gaussian surface which is bounded by a distant capacitor plate, a horizontal slice through the middle of the sphere, and all of these field lines. Using the results of example 3, the charge contained inside is

$$
Q = \pi R ^ { 2 } \frac { 3 ( \kappa - 1 ) } { \kappa + 2 } \epsilon _ { 0 } E _ { 0 } - \pi r ^ { 2 } \epsilon E _ { 0 }
$$

where the first term is from cutting the polarized sphere. The flux through this surface is

$$
\Phi = - \frac { 3 } { \kappa + 2 } \pi R ^ { 2 } E _ { 0 } .
$$

Applying Gauss's law, we have

$$
r = \sqrt { \frac { 3 \kappa } { \kappa + 2 } } R .
$$

Idea 3
The "free" charge density $\rho _ { f }$ is the part of the charge density that isn't bound, so that

$$
\rho = \rho _ { b } + \rho _ { f } .
$$

If we take the divergence of $\mathbf { P } = \epsilon _ { 0 } \chi _ { e } \mathbf { E }$, we get $\rho _ { b } = - \chi _ { e } \rho$ inside a uniform dielectric, so

$$
\rho = \rho _ { f } / \kappa .
$$

That is, a uniform dielectric "screens" charges embedded within it, reducing it by a factor of $\kappa$. That's exactly what we saw in example 2, and it also tells us that a conductor can be viewed as a dielectric with $\kappa \rightarrow \infty$, because conductors completely expel electric fields.

The difficulty in dealing with dielectrics is when $\kappa$ changes in space, such as at the boundary of a dielectric, where a bound surface charge density $\sigma _ { b }$ can appear. If all the free charges in a problem are outside of uniform dielectrics, bound charges only appear on their surfaces.

[3] Problem 3. A version of the method of images, introduced in E2, works for dielectrics. Let's suppose there is vacuum at $z > 0$, a dielectric $\kappa$ at $z < 0$, and a point charge $q$ a distance $d$ above the plane $z = 0$. We need to find the surface bound charge density $\sigma _ { b }$ that appears on the plane.
    (a) Let $E _ { 0 } ^ { z }$ be the $z$-component of the electric field due to the point charge alone. At a given point just below the plane $z = 0$, find $E ^ { z }$ in terms of $E _ { 0 } ^ { z }$ and $\sigma _ { b }$.
    (b) Use this result to solve for $\sigma _ { b }$ in terms of $E _ { 0 } ^ { z }$ and $\kappa$.
    (c) Your answer will be exactly the same as what one gets for a conductor at $z < 0$, multiplied by a $\kappa$-dependent constant. Using this information, characterize the image charge and find the force on the real charge.

Solution. (a) By an elementary application of Gauss's law, the result is

$$
E ^ { z } = E _ { 0 } ^ { z } - \frac { \sigma _ { b } } { 2 \epsilon _ { 0 } } .
$$


(b) By the definition of $\chi _ { e }$, we know that just under the plane,
$$
\sigma _ { b } = P ^ { z } = \epsilon _ { 0 } \chi _ { e } E ^ { z } .
$$
Combining this with the result of part (a) and solving for $\sigma _ { b }$ gives
$$
\sigma _ { b } = \frac { \chi _ { e } } { \chi _ { e } + 2 } \left( 2 \epsilon _ { 0 } E _ { 0 } ^ { z } \right) = \frac { \kappa - 1 } { \kappa + 1 } \left( 2 \epsilon _ { 0 } E _ { 0 } ^ { z } \right) .
$$
(c) A conductor corresponds to the limit $\kappa \rightarrow \infty$, where we simply have $\sigma _ { b } = 2 \epsilon _ { 0 } E _ { 0 } ^ { z }$, and the electric field inside the conductor vanishes. Evidently, for a general dielectric this result is multiplied by $( \kappa - 1 ) / ( \kappa + 1 )$. We therefore conclude that the image charge is $- q ( \kappa - 1 ) / ( \kappa + 1 )$, a distance $d$ below the plane. The force on the real charge is given by Coulomb's law,
$$
F = \frac { q ^ { 2 } } { 16 \pi \epsilon _ { 0 } d ^ { 2 } } \frac { \kappa - 1 } { \kappa + 1 }
$$
and is directed towards the dielectric.
[3] Problem 4 (Purcell 10.2). A rectangular capacitor with side lengths $a$ and $b$ has separation $s \ll a , b$. It is partially filled with a dielectric with dielectric constant $\kappa$. The overlap distance is $x$.
![](../../../figures/solution-ocr/590fee81018c31c96b3a3962.jpg)
The capacitor is isolated and has constant charge $Q$.
(a) What is the energy stored in the system?
(b) Using the result of part (a), what is the force on the dielectric? Which direction does it point?
(c) Is your answer to part (b) affected by the presence of fringe fields near the interface?

Solution. (a) The system consists of two capacitors in parallel, with capacitances $C _ { 1 } = \epsilon _ { 0 } ( b -$ $x ) a / s$ and $C _ { 2 } = \kappa \epsilon _ { 0 } x a / s$. Thus,

$$
C = \epsilon _ { 0 } ( a / s ) ( ( \kappa - 1 ) x + b )
$$

which gives

$$
U = \frac { Q ^ { 2 } } { 2 C } = \frac { Q ^ { 2 } s } { 2 \epsilon _ { 0 } a ( b + ( \kappa - 1 ) x ) } .
$$

(b) Note that
$$
F = - \frac { d U } { d x } = \frac { Q ^ { 2 } s ( \kappa - 1 ) } { 2 \epsilon _ { 0 } a ( b + ( \kappa - 1 ) x ) ^ { 2 } } .
$$
The sign is positive, so it points in direction of increasing $x$, so the slab is pulled in.
(c) Fringe fields don't change the result of part (b). The presence of fringe fields does change the energy found in part (a), but this has essentially no effect on the derivative of the energy, because shifting the dielectric just shifts the fringe field over essentially unchanged.

Of course, from a force perspective, all of the force is due to the fringe fields, because those are the only fields with a horizontal component; this paper gives such a calculation. The fact that you can get the same answer, by using an energy-based derivation that doesn't depend on the fringe fields, or by a force-based derivation that relies entirely on the fringe fields, is just another example of conservation of energy giving us nontrivial information.
[3] Problem 5 (Griffiths 4.28). Two long coaxial cylindrical metal tubes of inner radius $a$ and outer radius $b$ stand vertically in a tank of dielectric oil, with susceptibility $\chi _ { e }$ and mass density $\rho$. The inner one is maintained at potential $V$, and the outer one is grounded. To what height $h$ does the oil rise in the space between the tubes?
Solution. The field in the region with no oil is $E = \frac { \lambda } { 2 \pi \epsilon _ { 0 } r }$, and with the oil is $E ^ { \prime } = \frac { \lambda ^ { \prime } } { 2 \pi \epsilon r }$ where $\lambda ^ { \prime }$ is the free charge density. Thus,

$$
V = \frac { \lambda } { 2 \pi \epsilon _ { 0 } } \log ( b / a ) ,
$$

and equating with the oil part, we get that $\lambda ^ { \prime } = \kappa \lambda$, as expected. Now, the total charge on this effective capacitor is

$$
Q = \lambda ^ { \prime } h + \lambda ( \ell - h ) = \lambda \left( \chi _ { e } h + \ell \right) ,
$$

so

$$
C = \frac { Q } { V } = 2 \pi \epsilon _ { 0 } \frac { \chi _ { e } h + \ell } { \log ( b / a ) } .
$$

We know the net force is $\frac { 1 } { 2 } V ^ { 2 } ( d C / d h )$ (note that there is not a minus sign here because of the work done by the battery, as explained in a problem in E2). The gravitational force is $\rho \pi g h \left( b ^ { 2 } - a ^ { 2 } \right)$, so equating and solving for $h$ gives

$$
h = \frac { \epsilon _ { 0 } \chi _ { e } V ^ { 2 } } { \rho \left( b ^ { 2 } - a ^ { 2 } \right) g \log ( b / a ) } .
$$

## 2 Magnetization

Idea 4
As discussed in E5, materials contain two kinds of magnetic dipole moments: the "orbital" part, due to moving electrons, and the "spin" part, due to the electrons' intrinsic magnetic moments. For most materials, in the absence of external magnetic fields, these dipole moments point in random directions, and thus sum to zero on average.

When such a material is placed in a magnetic field, two things happen at once:

- The spins partially align with the field, producing a net dipole moment along B.
- The orbits are affected by the changing field in accordance with Lenz's law, and thus produce a net dipole moment against B.

The first effect tends to be somewhat stronger, and tends to make the material paramagnetic, but it's only present in materials with unpaired electron spins. The second effect is always present, and tends to make the material diamagnetic.

This can be a bit tricky to remember, because it seems opposite to the definition of a dielectric, where the internal electric dipoles try to align with the external field. The reason it makes


sense is that inside an electric dipole, the electric field points against the dipole moment, while inside a magnetic dipole, the magnetic field points with the dipole moment, as discussed in E3. So, both dielectrics and diamagnets try to reduce the applied field within them.

Idea 5: Bound Currents
The magnetization M of a material is its magnetic dipole moment per unit volume. It corresponds to a bound current density

$$
\mathbf { J } _ { b } = \nabla \times \mathbf { M }
$$

as well as a surface bound current density

$$
\mathbf { K } _ { b } = \mathbf { M } \times \hat { \mathbf { n } }
$$

on its surface.

Example 4
Find the magnetic field of a sphere with uniform magnetization $\mathbf { M }$ and radius $R$.

Solution
In this case $\mathbf { J } _ { b }$ is zero in the sphere, while at the sphere's surface,

$$
\mathbf { K } _ { b } = \mathbf { M } \times \hat { \mathbf { r } } = M \sin \theta \hat { \boldsymbol { \phi } }
$$

where we worked in spherical coordinates and aligned M with the $z$-axis. However, this is precisely the current density of a rotating, uniformly charged sphere, as we discussed in E3. Scaling the constants appropriately, we find that inside,

$$
\mathbf { B } = \frac { 2 } { 3 } \mu _ { 0 } \mathbf { M }
$$

which should be compared with example 1. Outside, the field is exactly a magnetic dipole field, with $\mathbf { m } = \left( 4 \pi R ^ { 3 } / 3 \right) \mathbf { M }$.
[1] Problem 6. An infinite cylindrical rod of radius $R$ has a fixed, uniform magnetization M.

(a) If $\mathbf { M }$ is parallel to the rod's axis, find the magnetic field everywhere.
(b) If $\mathbf { M }$ is perpendicular to the rod's axis, describe B outside, and find the value of B inside.

Solution. Let $\hat { \mathbf { z } }$ point along the axis of the rods.

(a) The surface bound current density is $\mathbf { K } _ { b } = M \hat { \boldsymbol { \theta } }$, which is simply that of an infinite solenoid. So the magnetic field is $\mu _ { 0 } \mathbf { M }$ inside the rod, and zero outside.
(b) Let's say that $\mathbf { M }$ is parallel to $\hat { \mathbf { x } }$. Then in cylindrical coordinates, we have $\mathbf { K } _ { b } = M \sin \theta \hat { \mathbf { z } }$. This current density is equivalent to superposing two cylinders carrying uniform current density $\pm J \hat { \mathbf { z } }$, separated by $d$ along the $\hat { \mathbf { y } }$ direction, where $J d = M$.

Outside the rod, the cylinders can be replaced with wires carrying current $I = \pi R ^ { 2 } J$, and the corresponding magnetic field was found in a problem in E3. Inside the rod, superposing the magnetic fields of the cylinders yields $\mathbf { B } = \mu _ { 0 } \mathbf { M } / 2$.
[1] Problem 7. Consider two extremely long cylindrical rods of radius $r$, carrying uniform magnetization $M$ along their axis. The rods are placed so that they have the same axis of symmetry, their magnetizations are parallel, and there is a narrow gap $2 a \ll r$ between them. Find the magnetic field at the center of the gap, accounting for corrections of order $a / r$.

Solution. If there was no gap, we would only have a single rod, and its uniform magnetization M corresponds to a tangential bound surface current density $\mathbf { K } _ { b }$ of magnitude $M$ everywhere along its surface. This is the current of a solenoid, and it produces a field $\mathbf { B } = \mu _ { 0 } \mathbf { M }$ inside the rod.

Now let's account for the gap. In the limit $a \ll r$, the "missing" part of the magnetization corresponds to the current of a circular current loop, with $I = 2 M a$. By the Biot-Savart law, this loop contributes a field of $\mu _ { 0 } I / ( 2 r )$. Taking this piece out, we have

$$
B = \mu _ { 0 } M \left( 1 - \frac { a } { r } + \mathcal { O } \left( a ^ { 2 } / r ^ { 2 } \right) \right) .
$$

## Idea 6: Magnetic Susceptibility

Permanent magnets, such as the ones on your refrigerator, or the strong neodymium magnets popular in science toys, are made of "hard" ferromagnets. These are materials whose crystal structure lets them maintain a fixed magnetization M in the absence of external magnetic fields. (The preceding example and problems were implicitly about hard ferromagnets.)

In most other materials, the magnetization is related to the magnetic field in the material by

$$
\mathbf { M } = \frac { 1 } { \mu _ { 0 } } \frac { \chi _ { m } } { 1 + \chi _ { m } } \mathbf { B } , \quad \mu = \mu _ { 0 } \left( 1 + \chi _ { m } \right) = \mu _ { 0 } \mu _ { r }
$$

where $\chi _ { m }$ is the magnetic susceptibility, $\mu$ is called the permeability, and $\mu _ { r }$ is called the relative permeability. We'll explain later why $\chi _ { m }$ isn't defined the same way as $\chi _ { e }$.

- Diamagnets have $- 1 < \chi _ { m } < 0$ and paramagnets have $\chi _ { m } > 0$.
- Most materials are weakly diamagnetic $\left( \left| \chi _ { m } \right| \ll 1 \right)$, but some are weakly paramagnetic.
- As discussed in E5, a superconductor totally expels magnetic fields, and thus can be viewed as a "perfect diamagnet" with $\chi _ { m } = - 1$ and hence $\mu = 0$.
- A "soft" ferromagnet (such as iron) has $\chi _ { m } \gg 1$ for weak external fields. (Though it is typically accompanied by other phenomena, such as saturation and hysteresis.)
- It is impossible to have $\chi _ { m } < - 1$, as then the energy density $B ^ { 2 } / 2 \mu$ would be negative. The material would spontaneously develop arbitrarily large $B$, and blow itself up.

Because magnetization can arise from freely moving electrons, bound electrons orbiting, or the spin of electrons, these ideas can be applied to both conductors and insulators. As always, we must be careful to remember that B is the total magnetic field, due to both whatever is outside the material, and the magnetization of the material itself.


Remark: Estimating Susceptibility
Why is it that many common solids have $\left| \chi _ { m } \right| \ll 1$, but $\chi _ { e }$ of order 1? Atoms contain a few valence electrons of charge $q$ orbiting with radius of order $a _ { 0 }$, the Bohr radius. To very roughly estimate electric and magnetic susceptibility, it's easiest to consider the extreme case where the field is so strong that the atom is about to fall apart.

The electrons are bound by an electric field $E _ { \text {max } } \sim q / \epsilon _ { 0 } a _ { 0 } ^ { 2 }$, so the atom will fall apart if the external field is much larger than this. And when the electron orbits are completely deformed, they will provide an electric dipole moment $p _ { \text {max } } \sim q a _ { 0 }$. So the polarizability is of order

$$
\alpha \sim \frac { p _ { \max } } { E _ { \max } } \sim \epsilon _ { 0 } a _ { 0 } ^ { 3 } .
$$

Then the electric susceptibility is

$$
\chi _ { e } = \frac { P } { \epsilon _ { 0 } E } \sim \frac { n \alpha } { \epsilon _ { 0 } } \sim 1
$$

because the number density of atoms is $n \sim a _ { 0 } ^ { - 3 }$. So, in a completely typical insulator, $\chi _ { e }$ is of order 1, which is indeed what we observe!

If you don't know this, it can seem like a magical fact. Electrical engineers are often amazed that the permittivity of free space $\epsilon _ { 0 }$ is comparable to that of common materials. For instance, it's around half the permittivity $\epsilon$ of teflon, so does that mean "vacuum" is like a material half as strong as teflon? But this is thinking backwards. The properties of electromagnetism in vacuum are fundamental and have nothing to do with materials, but they determine the structure of materials. We start with $\epsilon _ { 0 }$ and use it to derive $\epsilon \sim \epsilon _ { 0 }$.

Now, magnetic susceptibility is penalized by the fact that magnetic forces are suppressed by a factor of the electron speed $v$. The field strength at which the magnetic force is as strong as that of the binding electric field is $B _ { \text {max } } \sim E _ { \text {max } } / v$. At this point, the electrons provide the maximum possible magnetic moment by all orbiting in the same direction, so

$$
\mu _ { \max } \sim I A \sim \left( q v / a _ { 0 } \right) \left( a _ { 0 } ^ { 2 } \right) \sim q v a _ { 0 } .
$$

To leading order in $\chi _ { m }$, the magnetic susceptibility is

$$
\chi _ { m } \approx \frac { \mu _ { 0 } M } { B } \sim \frac { \mu _ { 0 } \mu _ { \max } n } { B _ { \max } } \sim \epsilon _ { 0 } \mu _ { 0 } v ^ { 2 } = \frac { v ^ { 2 } } { c ^ { 2 } } \sim \alpha ^ { 2 } \sim 10 ^ { - 4 }
$$

where $\alpha$ is the fine structure constant, introduced in P1. Thus magnetic susceptibility is typically small because relativistic effects for valence electrons are weak.

Example 5
An infinite solenoid with $n$ turns per length and current $I$ is filled with material with magnetic susceptibility $\chi _ { m }$. Find the magnetic field inside.


Solution
The magnetic field inside has contributions from the solenoid wire and the magnetization,

$$
B = \mu _ { 0 } ( n I + M ) = \mu _ { 0 } n I + \frac { \chi _ { m } } { 1 + \chi _ { m } } B
$$

Solving for $B$ yields

$$
B = \left( 1 + \chi _ { m } \right) \mu _ { 0 } n I = \mu n I
$$

which can be a significant enhancement if the material is a soft ferromagnet.
[2] Problem 8. A sphere of magnetic susceptibility $\chi _ { m }$ is placed in a uniform field $\mathbf { B } _ { 0 }$, and as a result develops a uniform magnetization $\mathbf { M }$. Find $\mathbf { M }$ and the field $\mathbf { B }$ inside the sphere. Then check the limiting cases of a superconductor and a soft ferromagnet. Do they make sense?

Solution. In this case, by the result of example 4, we have

$$
\mathbf { B } = \mathbf { B } _ { 0 } + \frac { 2 } { 3 } \mu _ { 0 } \mathbf { M } = \mathbf { B } _ { 0 } + \frac { 2 } { 3 } \frac { \chi _ { m } } { 1 + \chi _ { m } } \mathbf { B }
$$

inside the sphere. Solving for B and then for M gives

$$
\mathbf { B } = \frac { 1 + \chi _ { m } } { 1 + \chi _ { m } / 3 } \mathbf { B } _ { 0 } , \quad \mathbf { M } = \frac { \chi _ { m } } { 1 + \chi _ { m } / 3 } \frac { \mathbf { B } _ { 0 } } { \mu _ { 0 } } .
$$

For a superconductor, $\chi _ { m } = - 1$, we have

$$
\mathbf { B } = 0 , \quad \mathbf { M } = - \frac { 3 \mathbf { B } _ { 0 } } { 2 \mu _ { 0 } }
$$

which makes sense. For a soft ferromagnet, $\chi _ { m } \rightarrow \infty$, we have

$$
\mathbf { B } = 3 \mathbf { B } _ { 0 } , \quad \mathbf { M } = \frac { 3 \mathbf { B } _ { 0 } } { \mu _ { 0 } } .
$$

This is a bit puzzling, because for an infinite solenoid the magnetic field inside was very large, but for a sphere it can apparently only be enhanced by a factor of 3.

As will be explained in example 6, the reason is that a sphere has a significant demagnetizing field. The magnetization tries to align with $\mathbf { B } _ { 0 }$, but by the time it reaches $\mathbf { M } = 3 \mathbf { B } _ { 0 } / \mu _ { 0 }$, the H field inside the sphere is already completely cancelled, so no further alignment can occur.

Idea 7: The $H$ Field
Historically, magnetism was formulated in terms of the field

$$
\mathbf { H } = \frac { 1 } { \mu _ { 0 } } \mathbf { B } - \mathbf { M } .
$$

The magnetic susceptibility was originally defined to be simple in terms of $\mathbf { H }$, with

$$
\mathbf { M } = \chi _ { m } \mathbf { H } , \quad \mathbf { B } = \mu \mathbf { H } .
$$

The reason $\mathbf { H }$ is useful is that it gives a close analogy to electrostatics. Note that

$$
\nabla \times \mathbf { H } = \mathbf { J } - \mathbf { J } _ { b }
$$


so that H has no curl if there are no currents around besides the bound current. (This extra current is sometimes called "free" current $\mathbf { J } _ { f }$.) In addition,

$$
\nabla \cdot \mathbf { H } = - \nabla \cdot \mathbf { M }
$$

which is analogous to how a polarization yields a charge density, $\nabla \cdot \mathbf { E } = - \nabla \cdot \mathbf { P } / \epsilon _ { 0 }$. Therefore, any magnetostatic problem without free current can be mapped to an electrostatic one via

$$
\left( \epsilon _ { 0 } \mathbf { E } , \mathbf { P } , \rho _ { b } , \chi _ { e } \right) \leftrightarrow \left( \mathbf { H } , \mathbf { M } , \rho _ { m } , \chi _ { m } \right)
$$

where $\rho _ { m } = - \nabla \cdot \mathbf { M }$ is the "magnetic charge density".
This is the mathematical formalization of the idea of Gilbert dipoles, introduced in E3, which replace a true magnetic dipole with a pair of fictitious magnetic charges. At the time, we remarked that this gives you the correct magnetic field outside of a magnet, but not inside. The underlying reason is this analogy is actually computing $\mathbf { H }$, not $\mathbf { B }$. To get the correct $\mathbf { B }$ within a magnetized material, we have to compute $\mathbf { B } = \mu _ { 0 } ( \mathbf { H } + \mathbf { M } )$. Heuristically, $\mu _ { 0 } \mathbf { M }$ is the magnetic field due to dipole moments right at that location, while $\mu _ { 0 } \mathbf { H }$ is the magnetic field due to all other currents and magnetic dipole moments. Finally, we note that a soft ferromagnet can be thought of as a material within which H is approximately zero.

## Remark: The History of $H$

If you learned physics in the United States, you might have found the preceding idea unfamiliar, because it has been systematically removed from the introductory curriculum.

The reason comes down to history. First, it's worth noting that the choice between covering B and H isn't obvious. Today we would say the B field is more fundamental, because it is what determines the Lorentz force on a charge, and the force, torque, and interaction energy of a dipole moment, and thereby the reading on a magnetometer. But for most of history, one could just as well argue that it is $\mu _ { 0 } \mathbf { H }$ that determines these things. After all, we can't embed a measuring device within a magnet. Doing so would require hollowing out a hole, which would remove $\mathbf { M }$ there, which would render B just equal to $\mu _ { 0 } \mathbf { H }$.

Therefore, choosing between B and $\mu _ { 0 } \mathbf { H }$ requires measuring some interaction where particles pass through a magnet. In the 1930s, this became possible with neutron scattering, since neutrons are electrically neutral but carry a magnetic dipole moment m. As discussed here, the Nobel laureates Bloch and Schwinger disagreed on whether the interaction energy was $- \mathbf { m } \cdot \mathbf { B }$ or $- \mathbf { m } \cdot \left( \mu _ { 0 } \mathbf { H } \right)$, which corresponds to treating m as Amperian or Gilbertian, respectively. The controversy remained open for decades, but was eventually settled by data.

At the same time, there was a growing consensus in the United States that magnetic poles were a "useless concept" which should be banished from teaching entirely. So, when the modern American physics curriculum was set in the 1960s, that's exactly what happened. For example, Halliday, Resnick, and Krane spends only a few pages covering magnetization, and half of them are spent admonishing the reader that magnetic poles don't exist. If


you were educated in America, you probably only heard about them for a day in middle school.
Unfortunately, removing magnetic poles from the curriculum has some real costs. Experimentalists still think in terms of poles and H, because it's harder to visualize how complicated currents source B. Moreover, it's harder to do anything with B without vector calculus background. That's why some other countries' introductory physics courses put poles first. (But some teachers don't clearly explain how B and $\mu _ { 0 } \mathbf { H }$ differ, leading to confusion later.)

In this problem set, I'll tell you only what you need to know about $\mathbf { H }$ to solve theoretical problems. If you try to dive deeper into how experimentalists use it, you'll run into a lot more historical cruft. For instance, they tend to prefer the "Gaussian" system, where annoying factors of $4 \pi$ are inserted into Maxwell's equations to make the Coulomb and Biot-Savart laws slightly simpler. Also, they use "cgs" (centimeter-gram-second) units, so all units need to be rescaled by some number of powers of 10 and $4 \pi$. Worst of all, they have totally different units for B (Gauss), H (Oersted), and M (emu/cm ${ } ^ { 3 }$ ), which are tricky to relate. I wouldn't recommend learning any of this unless you have to for your job.

## Example 6

Using the H field, recompute the magnetic fields inside a uniformly magnetized sphere, and a rod magnetized parallel to and perpendicular to its axis.

## Solution

In the first section, we found that inside these objects,

$$
\mathbf { E } = \begin{cases} - \mathbf { P } / 3 \epsilon _ { 0 } & \text { sphere, } \\ - \mathbf { P } / 2 \epsilon _ { 0 } & \text { cylinder, perpendicular } \\ 0 & \text { cylinder, parallel } \end{cases}
$$

Using the analogy above, we immediately conclude

$$
\mathbf { H } = \begin{cases} - \mathbf { M } / 3 & \text { sphere } \\ - \mathbf { M } / 2 & \text { cylinder, perpendicular } \\ 0 & \text { cylinder, parallel } \end{cases}
$$

The minus signs make sense because the "magnetic charge" accumulates on the side that M points to, and produces an H field in the opposite direction. Converting back to B yields

$$
\mathbf { B } = \begin{cases} 2 \mu _ { 0 } \mathbf { M } / 3 & \text { sphere } \\ \mu _ { 0 } \mathbf { M } / 2 & \text { cylinder, perpendicular } \\ \mu _ { 0 } \mathbf { M } & \text { cylinder, parallel } \end{cases}
$$

which precisely matches what we found in example 4 and problem 6, with much less effort.
[1] Problem 9. Repeat problem 7 using the $\mathbf { H }$ field.


Solution. In the gap, the magnetization vanishes and we have $\mathbf { B } = \mu _ { 0 } \mathbf { H }$, so we can use the idea of magnetic charge to compute the field. The magnetic charge is the same as that of a parallel plate capacitor, with circular plates of radius $r$ and separation $2 a$, carrying uniform magnetic charge density $\pm M$. Using Coulomb's law, we can integrate the vertical component of the field from each plate. If $s$ is the distance of a point on the plate from the axis of symmetry, then

$$
B = 2 \int _ { 0 } ^ { r } ( 2 \pi s d s ) \frac { \mu _ { 0 } M } { 4 \pi } \frac { a } { \left( s ^ { 2 } + a ^ { 2 } \right) ^ { 3 / 2 } } = \left. \mu _ { 0 } M \left( - \frac { a } { \sqrt { s ^ { 2 } + a ^ { 2 } } } \right) \right| _ { 0 } ^ { r } = \mu _ { 0 } M \left( 1 - \frac { a } { \sqrt { r ^ { 2 } + a ^ { 2 } } } \right) .
$$

In the limit $a \ll r$, this recovers the answer to problem 7.
Remark: Demagnetizing Fields
At a given point in an isolated magnet, $\mu _ { 0 } \mathbf { H }$ is the part of $\mathbf { B }$ due to the rest of the magnet. However, the above example shows that $\mathbf { H }$ always points against the direction of $\mathbf { M }$, so a permanent magnet is always trying to demagnetize itself! Similarly, electrically polarized materials carry an internal "depolarization" field. This is why, in the absence of external fields, the vast majority of materials have zero polarization and magnetization.

Before the advent of very effective "hard" ferromagnets, like neodymium magnets, magnets had to be shaped to avoid this effect, e.g. by making them into long bars or horseshoes. Even so, the demagnetization effect would make the field produced by the magnet a little less than you would expect. For an average-shaped bar magnet made in the 1950s, the magnetic poles are effectively not at the ends, but rather 10\% to 20\% closer together.

This bit of historical trivia is irrelevant today, but it has stuck around in the Indian physics curriculum. Every Indian introductory physics textbook demands its students memorize the ratio of the "magnetic length" and "geometric length" of a bar magnet, as if it were a fundamental constant of nature rather than an obsolete rule of thumb. But different ones don't even agree on what the ratio is, with HC Verma giving 84\%, various JEE prep sources stating 4/5, 5/6, or 7/8, and none whatsoever explaining where the number comes from. Such "magic formulas" are depressingly common in Indian books.

Idea 8: Magnetic Energy, Force, and Torque
The appropriate magnetic energy density depends on the material.

- If the magnetization is permanent, as in a hard ferromagnet, we should use the same potential energy introduced in E4. Specifically, the potential energy density is $- \mathbf { M } \cdot \mathbf { B }$.
- For all other materials, where the magnetization is induced by the presence of other fields, the total energy density is $B ^ { 2 } / 2 \mu$.

If you use one of these formulas where the other applies, you'll typically be off by a factor of 2.
Regardless of how the magnetization arises, the resulting force and torque in an external field B are given by the formulas introduced in E4. Specifically, the torque density is $\mathbf { M } \times \mathbf { B }$, and the force density is $\nabla ( \mathbf { M } \cdot \mathbf { B } )$, where the ∇ only acts on B. Alternatively, if you're using the magnetic pole trick, a magnetic charge $q _ { m }$ feels a force $q _ { m } \mathbf { B }$.


[3] Problem 10. A version of the method of images works for magnetic materials. Let's suppose there is vacuum at $z > 0$, and a material of relative permeability $\mu _ { r }$ at $z < 0$. When using the method of images, we only care about the field at $z > 0$, where $\mathbf { B }$ and $\mathbf { H }$ are proportional. So we can directly use the analogy between $\mathbf { H }$ and $\mathbf { E }$.
    (a) Suppose a magnetic charge $q _ { m }$ is a distance $d$ above the plane. By recycling your answer to problem 3, find the magnetic charge $q _ { m } ^ { \prime }$ of the image. What does it become if the material is a superconductor, or a soft ferromagnet?
    (b) Of course, magnetic charges don't actually exist, so let's instead suppose a permanent magnetic dipole moment m was a distance $d$ above the plane, with m pointing towards the plane. Characterize the image dipole, and find the force on the real dipole.
    (c) To be even more concrete, consider a very long permanent magnet of cross-sectional area $A$ and uniform magnetization $M$ along its length. When one end of the magnet is placed flat against an iron plate, what is the force between them?

Solution. (a) When we apply the analogy described in idea 7, this problem becomes exactly the same as that problem, with $\chi _ { m }$ corresponding to $\chi _ { e }$, and thus $\mu _ { r }$ corresponding to $\kappa$. We conclude that the image magnetic charge is

$$
q _ { m } ^ { \prime } = - q _ { m } \frac { \mu _ { r } - 1 } { \mu _ { r } + 1 }
$$

a distance $d$ below the plane. Note that unlike the electric case, $q _ { m } ^ { \prime }$ can have the same sign as $q _ { m }$ (for $\mu _ { r } < 1$ ), or the opposite sign (for $\mu _ { r } > 1$ ).
For a superconductor, $\mu _ { r } = 0$, we have $q _ { m } ^ { \prime } = q _ { m }$, which you might have already seen in a problem in E5. For a soft ferromagnet, $\mu _ { r } \rightarrow \infty$, we have $q _ { m } ^ { \prime } = - q _ { m }$. Both of these results are compatible with what we'd expect from example 7.


(b) In this case, there's an image dipole of magnitude
$$
m ^ { \prime } = m \frac { \left| \mu _ { r } - 1 \right| } { \mu _ { r } + 1 } .
$$
For $\mu _ { r } < 1$, it points in the opposite direction as the real dipole, while for $\mu _ { r } > 1$, it points in the same direction.
Using the formula for the force on a dipole from E4, in the presence of the dipole field of the image, we find a force towards the plane of magnitude
$$
F = \frac { 3 \mu _ { 0 } } { 2 \pi } \frac { m m ^ { \prime } } { ( 2 d ) ^ { 4 } } = \frac { 3 \mu _ { 0 } } { 32 \pi } \frac { m ^ { 2 } } { d ^ { 4 } } \frac { \mu _ { r } - 1 } { \mu _ { r } + 1 } .
$$
For $\mu _ { r } < 1$, the force is instead repulsive.
(c) Here it's easiest to use the idea of magnetic charge. We can ignore the distant end of the magnet, because it's very far away. The end of the magnet touching the fridge has a magnetic charge density $\sigma _ { m } = M$. For iron, which has $\mu _ { r } \rightarrow \infty$, the resulting image has magnetic charge density $\sigma _ { m } ^ { \prime } = - M$, so it produces a magnetic field of magnitude $B ^ { \prime } = \mu _ { 0 } \sigma _ { m } ^ { \prime } / 2$ on each side of it. Thus, the interaction force is
$$
F = B ^ { \prime } \sigma _ { m } A = \frac { \mu _ { 0 } M ^ { 2 } A } { 2 }
$$

[2] Problem 11. AuPhO 2019, problem 13. A neat explanation of how a fridge magnet works. You'll also need the accompanying answer sheets.
[5] Problem 12. Physics Cup 2024, problem 3. This relatively straightforward problem reviews almost everything we've covered so far.
Solution. See the official solutions here.

Example 7: Griffiths 6.27
How does a magnetic field line bend when it passes from one medium to another?
![](../../../figures/solution-ocr/8b0996ec4a67dc74b10de920.jpg)

Solution
We say the field lines "bend" because of Gauss's law for magnetism: they can't start or end, so each one has to keep on going. Let's suppose the figure above is drawn in the $x z$ plane. Applying Gauss's law for magnetism in a small pillbox spanning the interface gives

$$
B _ { 1 } ^ { z } = B _ { 2 } ^ { z } .
$$

On the other hand, since $\nabla \times \mathbf { H }$ is zero (assuming no additional, "free" current is around), considering an Amperian loop spanning the interface gives

$$
H _ { 1 } ^ { x } = H _ { 2 } ^ { x } .
$$

Combining these results gives

$$
\frac { \tan \theta _ { 2 } } { \tan \theta _ { 1 } } = \frac { \mu _ { 2 } } { \mu _ { 1 } } .
$$

In other words, when a field line enters a medium with higher $\mu$, it bends away from the normal, and when it enters a medium with lower $\mu$, it bends towards the normal.

This statement has two limiting cases which will be important later.

- A magnetic field line can't enter a superconductor $\left( \mu _ { 2 } = 0 \right)$ at all, so field lines approaching a superconductor bend away, to become tangent to them ( $\theta _ { 1 } \rightarrow 90 ^ { \circ }$ ).


- A magnetic field line entering a soft ferromagnet $\left( \mu _ { 2 } \rightarrow \infty \right)$ bends towards it to enter along the normal direction $\left( \theta _ { 1 } \rightarrow 0 ^ { \circ } \right)$, similar to how electric field lines approach conductors. It's also possible for $\theta _ { 1 }$ to be nonzero if $\theta _ { 2 } \rightarrow 90 ^ { \circ }$, but we won't see any examples of this.
You can see both of these behaviors in the limiting cases of problem 10. In general, we conclude that magnetic field lines are "attracted" to regions of higher $\mu$, which makes sense because it helps minimize the energy. Soft ferromagnets tend to keep magnetic field lines within themselves, which is why they're used in transformers.
[2] Problem 13 (IPhO 2012 Experiment). Water is a diamagnetic substance. A powerful cylindrical magnet with field $B$ is placed below the water surface.
    (a) Which of the following shows the resulting shape of the water surface?
![](../../../figures/solution-ocr/ea22317dc1e2bf1e6e008c33.jpg)
The magnet is roughly 2/3 as wide as each of these sketches.
    (b) Let $\rho$ be the density of the water. If the maximum change in height of the water surface has magnitude $h$, find an approximate expression for the magnetic susceptibility $\chi _ { m }$ of water.

For a very closely related, but more extreme problem, see EuPhO 2018, problem 2.
Solution. (a) For a diamagnetic substance, $\mu < \mu _ { 0 }$, so the magnetic field energy is higher when water is present. The water surface is an equipotential, so a higher magnetic field energy at some points must be compensated by a lower gravitational potential energy. Thus, the answer is option D.


(b) Equating the change in gravitational potential energy with the change in field energy, both per volume, gives
$$
\rho g h = \frac { B ^ { 2 } } { 2 \mu } - \frac { B ^ { 2 } } { 2 \mu _ { 0 } } = \frac { B ^ { 2 } } { 2 \mu \mu _ { 0 } } \left( \mu _ { 0 } - \mu \right) \approx \frac { B ^ { 2 } } { 2 \mu _ { 0 } ^ { 2 } } \left( \mu _ { 0 } - \mu \right)
$$
where the last step follows because $\mu \approx \mu _ { 0 }$. We thus have
$$
\chi _ { m } = \frac { \mu - \mu _ { 0 } } { \mu _ { 0 } } = - \frac { 2 \mu _ { 0 } \rho g h } { B ^ { 2 } } .
$$
With a strong magnet, and a measurement of $h$ accurate to about 0.1 mm, one can indeed detect this effect. Note that if you treated the dipole moment as permanent, and used a potential energy density $- \mathbf { M } \cdot \mathbf { B }$, your answer here would be off by a factor of 2 .
[3] Problem 14. NBPhO 2004, problem 6. A cute exercise with permanent magnets.
[5] Problem 15. IPhO 2022, problem 1. A series of exercises on spherical magnets, which uses almost everything covered in this section.

[4] Problem 16. Physics Cup 2012, problem 2. If you only know what's taught in American introductory courses, this problem is basically impossible. If you only know what's stated explicitly in Griffiths, it's very hard. But if you've internalized the intuition of the above examples, and the relevant section of E5 on superconductors, it should be relatively approachable.
Solution. See the solutions here.
[5] Problem 17. Physics Cup 2018, problem 3. A substantially tougher problem which requires solving some differential equations. I recommend starting from the fifth hint.

## 3 Multipoles

In this section, we explore some of the physics of dipoles and higher multipoles.
[3] Problem 18 (Purcell 10.27). Two monopoles of opposite sign form a dipole, two dipoles of opposite sign for a quadrupole, and so on. Hence we can construct arbitrarily high multipoles using the rows of Pascal's triangle.
![](../../../figures/solution-ocr/ce9d17f0ba3a0056548dfd8c.jpg)
The field of a dipole falls as $1 / r ^ { 3 }$, a quadrupole as $1 / r ^ { 4 }$, and an octupole as $1 / r ^ { 5 }$.


(a) To warm up, verify explicitly that the quadrupole field along the axis of the quadrupole starts at $1 / r ^ { 4 }$, i.e. that all lower terms cancel.
(b) [A] Prove that this cancellation occurs for general multipoles along their axis.
(c) [A] The magnitude and orientation of a dipole is specified by a vector, with three components. How many numbers are necessary to specify the magnitude and orientation of a quadrupole? (The linear quadrupoles here are just a special case of a general quadrupole.) Try to generalize to arbitrary multipoles.

Section 3.4 of Griffiths explains how to decompose an arbitrary charge distribution into multipoles.
Solution. For simplicity, we set the Coulomb constant $k$, the unit of charge, and the charge spacing all to 1.


(a) This can be done by brute force; for the general case, see the next part.
(b) A simple way to do this is to reason inductively. For example, an octupole field is nothing more than two quadrupoles whose leading terms cancel, so the leading field of an octupole has to be at least one power lower in $r$.

However, we will give an explicit proof. A $2 ^ { N }$-pole can be constructed from $N + 1$ charges, with charge $j$ placed at $x = - j$ with charge $( - 1 ) ^ { j } \binom { N } { j }$. Then the field at point $x$ is

$$
E ( x ) = \sum _ { j = 0 } ^ { N } ( - 1 ) ^ { j } \binom { N } { j } \frac { 1 } { ( x + j ) ^ { 2 } } = x ^ { - 2 } \sum _ { j = 0 } ^ { N } ( - 1 ) ^ { j } \binom { N } { j } \sum _ { k = 0 } ^ { \infty } \binom { - 2 } { k } ( j / x ) ^ { k } .
$$

We see that this can be split into sums of the form $f ( k ) = \sum _ { j = 0 } ^ { N } ( - 1 ) ^ { j } \binom { N } { j } j ^ { k }$, and the coefficient of $x ^ { - 2 - k }$ is some nonzero multiple times $f ( k )$. So it suffices to show that $f ( k ) = 0$ for all $k < N$, and $f ( N ) \neq 0$. This is an exercise in algebraic sums. The key idea is to define

$$
g ( k ) = \sum _ { j = 0 } ^ { N } ( - 1 ) ^ { j } \binom { N } { j } \binom { j } { k } = \sum _ { j = k } ^ { N } ( - 1 ) ^ { j } \binom { N } { j } \binom { j } { k } .
$$

We see that $j ^ { k }$ can be written as a linear combination of $\binom { j } { 0 } , \ldots , \binom { j } { k }$, so it suffices to show that $g ( k ) = 0$ for all $k < N$, and that $g ( N ) \neq 0$. We see that

$$
\begin{aligned}
g ( k ) & = \sum _ { j = k } ^ { N } ( - 1 ) ^ { j } \binom { N } { j } \binom { j } { k } \\
& = \sum _ { j = k } ^ { N } ( - 1 ) ^ { j } \binom { N } { k } \binom { N - k } { j - k } \\
& = \binom { N } { k } \sum _ { j = k } ^ { N } ( - 1 ) ^ { j } \binom { N - k } { j - k } \\
& = \binom { N } { k } ( - 1 ) ^ { k } \cdot \mathbf { 1 } _ { k = N }
\end{aligned}
$$

where we used the fact that $\sum _ { \ell = 0 } ^ { M } ( - 1 ) ^ { \ell } \binom { M } { \ell } = \mathbf { 1 } _ { M = 0 }$ (here $\mathbf { 1 } _ { S }$ is 1 if and only if $S$ is true, and is 0 otherwise), which follows from the binomial theorem. This completes the proof.

(c) Let's think of a general quadrupole as a superposition of two dipoles in opposite directions. Then there are three things that determine a quadrupole: the strength of the quadrupole moment (i.e. the prefactor of the $1 / r ^ { 4 }$ field), the orientation of the first dipole, and the direction the second dipole is displaced from it. This is $1 + 2 + 2 = 5$ total parameters.
Similarly, to specify an octupole, we do the same above, then specify the direction the second quadrupole is displaced, giving $5 + 2 = 7$ parameters. In general, a $2 ^ { N }$-pole has $2 N + 1$ parameters.
[3] Problem 19 (Purcell 11.23). Consider two magnetic dipoles with coplanar dipole moments.

![](../../../figures/solution-ocr/3e7de3cb11c93b5e7bd4ca67.jpg)
Show that the associated potential energy is

$$
U = \frac { \mu _ { 0 } m _ { 1 } m _ { 2 } } { 4 \pi r ^ { 3 } } \left( \sin \theta _ { 1 } \sin \theta _ { 2 } - 2 \cos \theta _ { 1 } \cos \theta _ { 2 } \right) .
$$

For what orientations is this potential energy maximized or minimized?
Solution. The magnetic field from a dipole pointing in the z direction is:

$$
\mathbf { B } = \frac { \mu _ { 0 } m } { 4 \pi r ^ { 3 } } ( 2 \cos \theta \hat { \mathbf { r } } + \sin \theta \hat { \boldsymbol { \theta } } ) .
$$

Let $\hat { \mathbf { n } }$ be the unit vector perpendicular to $\hat { \mathbf { r } } ( \theta = - \pi / 2 )$. Then the field of $\mathbf { m } _ { 1 }$ is

$$
\mathbf { B } _ { 12 } = \frac { \mu _ { 0 } m _ { 1 } } { 4 \pi r ^ { 3 } } \left( 2 \cos \theta _ { 1 } \hat { \mathbf { r } } + \sin \theta _ { 1 } \hat { \mathbf { n } } \right)
$$

The potential of a dipole in a field is $U = - \mathbf { m } \cdot \mathbf { B }$. Note that $\mathbf { m } _ { 2 } = m _ { 2 } \cos \theta _ { 2 } \hat { \mathbf { r } } - m _ { 2 } \sin \theta _ { 2 } \hat { \mathbf { n } }$.

$$
U = - \mathbf { m } _ { 2 } \cdot \mathbf { B } _ { 12 } = \frac { \mu _ { 0 } m _ { 1 } m _ { 2 } } { 4 \pi r ^ { 3 } } \left( \sin \theta _ { 1 } \sin \theta _ { 2 } - 2 \cos \theta _ { 1 } \cos \theta _ { 2 } \right)
$$

as desired. To extremize this expression, we set the partial derivatives with respect to $\theta _ { 1 }$ and $\theta _ { 2 }$ equal to zero. The results are

$$
\cos \theta _ { 1 } \sin \theta _ { 2 } = - 2 \sin \theta _ { 1 } \cos \theta _ { 2 } , \quad \sin \theta _ { 1 } \cos \theta _ { 2 } = - 2 \cos \theta _ { 1 } \sin \theta _ { 2 }
$$

which implies that

$$
\cos \theta _ { 1 } \sin \theta _ { 2 } = \sin \theta _ { 1 } \cos \theta _ { 2 } = 0 .
$$

This can only hold if

$$
\cos \theta _ { 1 } = \cos \theta _ { 2 } = 0 \text { or } \sin \theta _ { 1 } = \sin \theta _ { 2 } = 0 .
$$

The first option implies both the angles are $\pm \pi / 2$, which yields a saddle point of the energy. The second option yields the global energy minimum when $\left( \theta _ { 1 } , \theta _ { 2 } \right) = ( 0,0 )$ or $( \pi , \pi )$, corresponding to aligned dipoles, and the global energy maximum when $\left( \theta _ { 1 } , \theta _ { 2 } \right) = ( 0 , \pi )$ or $( \pi , 0 )$, corresponding to anti-aligned dipoles.

[2] Problem 20 (Purcell 11.36). Three magnetic compasses are placed at the corners of a horizontal equilateral triangle. As in any ordinary compass, each compass needle is a magnetic dipole constrained to rotate in a horizontal plane. The Earth's magnetic field has been shielded. What orientation will the compass needles eventually assume? Does your result also hold for regular $N$-gons?

Solution. We claim they point in the direction of the tangents to the circumcircle of the triangle. In this case, the field at any one corner due to the compasses at the other corners points in the tangential direction, so the compasses are all aligned with the local fields.

We can show this claim by symmetry. Consider the field at a given corner of the triangle. Flipping about the axis that passes through this corner and the midpoint of the opposite side negates the dipole moments at the other two corners, so it must negate the field. But physically, the reflection operation negates the tangential component of the field. So there must only be a tangential component, i.e. the field at this corner is purely tangential. This argument holds unchanged for regular $N$-gons.
[3] Problem 21. Some questions about forces between dipoles and other multipoles.

(a) Above, you've shown that the force between permanent magnetic dipoles falls off as $1 / r ^ { 4 }$. How about two permanent electric dipoles?
(b) How about a permanent dipole and a permanent quadrupole?
(c) How about two permanent quadrupoles?
(d) Now consider an ion and a neutral atom. The electric field of the ion polarizes the atom; the field of that induced dipole then reacts on the ion. Show that the resulting force is attractive and falls as $1 / r ^ { 5 }$.

Solution. (a) The basic form of the fields and forces is identical, so the answer is the same.

(b) The field of a quadrupole goes like $1 / r ^ { 4 }$, so energy of the dipole goes like $U \sim m B \sim 1 / r ^ { 4 }$. Thus, the interaction energy in this case goes like $1 / r ^ { 4 }$, for a force of $1 / r ^ { 5 }$.
(c) A single quadrupole is two dipoles with moments $\mathbf { m }$ and $- \mathbf { m }$ separated by $d \mathbf { r }$ where the magnitude of the quadrupole moment is $\sim | \mathbf { m } \| d \mathbf { r } |$. (Technically, the quadrupole moment is a tensor, and the sizes of its individual components depends on the relative orientation of m and $d \mathbf { r }$, but we won't worry about that detail here, since we're only looking for the scaling of the force with $r$.) The energy of the quadrupole is
$$
\mathbf { m } \cdot \mathbf { B } ( \mathbf { r } + d \mathbf { r } ) - \mathbf { m } \cdot \mathbf { B } = \mathbf { m } \cdot ( ( \text { some sort of derivative of } \mathbf { B } ) \cdot d \mathbf { r } ) .
$$
The field of one quadrupole is $1 / r ^ { 4 }$, so its derivative is $1 / r ^ { 5 }$. Thus the energy of interaction goes like $1 / r ^ { 5 }$, for a force of $1 / r ^ { 6 }$.
(d) The field of the ion falls as $1 / r ^ { 2 }$, so the dipole moment induced is $p \sim 1 / r ^ { 2 }$. Furthermore, the dipole moment points along the field and hence the displacement between the ion and atom, indicating the force is attractive. The electric field from the dipole (and hence the force) goes as $p / r ^ { 3 } \sim 1 / r ^ { 5 }$. (You might wonder if the induced dipole then gives the ion itself a dipole moment. It does, but the resulting force is much weaker than the one we found here, between the induced dipole and the ion's overall charge.)

## 4 Electromagnetic Waves in Matter

In this section, you will work out some of the theory of electromagnetic waves in matter.


Idea 9
In the absence of any free charge or current, Maxwell's equations in matter are identical to Maxwell's equations in vacuum, except that $\epsilon _ { 0 }$ and $\mu _ { 0 }$ are replaced by $\epsilon$ and $\mu$, so the waves propagate with speed $1 / \sqrt { \epsilon \mu } = c / n$, with $E = ( c / n ) B$.

[5] Problem 22. Suppose the regions $x < 0$ and $x > 0$ are filled with material with permittivities $\epsilon _ { 1 }$ and $\epsilon _ { 2 }$, both with permeability $\mu _ { 0 }$. (As mentioned above, this is typical for most materials.) We send in an incident wave from the left with electric field $\mathbf { E } _ { i } e ^ { i \left( \mathbf { k } _ { i } \cdot \mathbf { r } - \omega _ { i } t \right) }$. The wave will be both transmitted and reflected at the interface, so the total electric field is
$$
\mathbf { E } = \begin{cases} \mathbf { E } _ { i } e ^ { i \left( \mathbf { k } _ { i } \cdot \mathbf { r } - \omega _ { i } t \right) } + \mathbf { E } _ { r } e ^ { i \left( \mathbf { k } _ { r } \cdot \mathbf { r } - \omega _ { r } t \right) } & x < 0 , \\ \mathbf { E } _ { t } e ^ { i \left( \mathbf { k } _ { t } \cdot \mathbf { r } - \omega _ { t } t \right) } & x > 0 . \end{cases}
$$
The angles with the normal are $\theta _ { i } , \theta _ { r }$, and $\theta _ { t }$ as shown. Note that since light is a transverse wave, all three electric field amplitudes above are perpendicular to their corresponding wavevector.
![](../../../figures/solution-ocr/b09de9f0d34f8491d5dc0285.jpg)
    (a) We can decompose every field into a part perpendicular to the interface (i.e. containing just the $x$-component), and a part parallel to the interface (containing the other components). Using Maxwell's equations, argue that at the interface, $\mathbf { E } ^ { \| }$and $B ^ { \perp }$ must be continuous. Also show that for this setup, $\mathbf { B } ^ { \| }$is also continuous.
    (b) Argue that by continuity of $\mathbf { E } ^ { \| }$at the interface, we must have
$$
\omega _ { i } = \omega _ { r } = \omega _ { i } .
$$
    (c) Further argue that $\mathbf { k } _ { i } ^ { \| } = \mathbf { k } _ { r } ^ { \| } = \mathbf { k } _ { t } ^ { \| }$, and thereby derive the laws of reflection and refraction,
$$
\theta _ { i } = \theta _ { r } , \quad n _ { 1 } \sin \theta _ { i } = n _ { 2 } \sin \theta _ { t } .
$$
This result is very general, and holds for all kinds of waves as long as we define $n _ { i } \propto 1 / v _ { i }$.
    (d) Now suppose the electric fields $\mathbf { E } _ { i } , \mathbf { E } _ { r }$, and $\mathbf { E } _ { t }$ are polarized perpendicular to the page. Then continuity of $\mathbf { E } ^ { \| }$gives
$$
E _ { i } + E _ { r } = E _ { t } .
$$

Using continuity of $\mathbf { B } ^ { \| }$, show that
$$
\frac { E _ { r } } { E _ { i } } = \frac { n _ { 1 } \cos \theta _ { i } - n _ { 2 } \cos \theta _ { t } } { n _ { 1 } \cos \theta _ { i } + n _ { 2 } \cos \theta _ { t } } , \quad \frac { E _ { t } } { E _ { i } } = \frac { 2 n _ { 1 } \cos \theta _ { i } } { n _ { 1 } \cos \theta _ { i } + n _ { 2 } \cos \theta _ { t } } .
$$
These are the Fresnel equations for light polarized perpendicular to the plane, also called " $s$-polarized" light.
(e) If $n _ { 1 } > n _ { 2 }$, then total internal reflection occurs when
$$
\sin \theta _ { i } > \frac { n _ { 2 } } { n _ { 1 } }
$$
and the wave is totally reflected. Nonetheless, $E _ { t }$ is nonzero in this regime. To make sense of this, show that the $x$-component of $\mathbf { k } _ { t }$ is imaginary in this regime, indicating that the "transmitted" wave does not propagate in the region $x > 0$, but rather exponentially decays.

Solution. (a) For $B ^ { \perp }$, consider a thin Gaussian pillbox that straddles the interface. By Gauss's law for magnetism, the magnetic flux through it must be zero. In the limit of a very thin pillbox, this ensures the continuity of $B ^ { \perp }$.
For $\mathbf { E } ^ { \| }$, consider a thin Amperian loop that straddles the interface, and consider $\oint \mathbf { E } \cdot d \mathbf { s }$. As the width of the loop goes to zero, the magnetic flux through it goes to zero, so this integral must be zero. Taking loops of various orientations, this ensures the continuity of $\mathbf { E } ^ { \| }$.
In general, $E ^ { \perp }$ and $\mathbf { B } ^ { \| }$need not be continuous, because we can have surface charges and currents at the interface. But in this case, both sides have the same $\mu _ { 0 }$, so there are no bound surface currents, so $\mathbf { B } ^ { \| }$is continuous.

(b) At the origin, $x = y = z = 0$, continuity of $\mathbf { E } ^ { \| }$gives
$$
\mathbf { E } _ { i } ^ { \| } e ^ { - i \omega _ { i } t } + \mathbf { E } _ { r } ^ { \| } e ^ { - i \omega _ { r } t } = \mathbf { E } _ { t } ^ { \| } e ^ { - i \omega _ { t } t } .
$$
Since the waves all hit the interface at an angle, none of the parallel amplitudes here vanish. Then the equation can only be satisfied if $\omega _ { i } = \omega _ { r } = \omega _ { t }$, so that all three exponentials have the same time dependence.
The deeper reason behind was mentioned in M4 and W1. The differential equation the field obeys is linear, and has no explicit time dependence. Thus, it has solutions with uniform frequency everywhere.
(c) At the interface, $x = 0$, continuity of $\mathbf { E } ^ { \| }$at time $t = 0$ gives
$$
\mathbf { E } _ { i } ^ { \| } e ^ { i \mathbf { k } _ { i } ^ { \| } \cdot \mathbf { x } } + \mathbf { E } _ { r } ^ { \| } e ^ { i \mathbf { k } _ { r } ^ { \| } \cdot \mathbf { x } } = \mathbf { E } _ { t } ^ { \| } e ^ { i \mathbf { k } _ { t } ^ { \| } \cdot \mathbf { x } } .
$$
As in part (b), this can only be true in general if $\mathbf { k } _ { i } ^ { \| } = \mathbf { k } _ { r } ^ { \| } = \mathbf { k } _ { t } ^ { \| }$.
For concreteness, let the $y$-axis point out the page, so that $\mathbf { k } _ { i } \cdot \hat { \mathbf { y } } = 0$. Then we also have $\mathbf { k } _ { r } \cdot \hat { \mathbf { y } } = \mathbf { k } _ { t } \cdot \hat { \mathbf { y } } = 0$, which implies that all three wavevectors lie in the same plane, which was implicitly assumed in the diagram above. Then equality of the $z$-components gives $k _ { i } \sin \theta _ { i } = k _ { r } \sin \theta _ { r } = k _ { t } \sin \theta _ { t }$.
In general, for an electromagnetic wave we have $\omega / k = v = c / n$, so $k = n \omega / c$. In this case, all the $\omega$ 's are the same, so plugging this in gives
$$
n _ { 1 } \sin \theta _ { i } = n _ { 1 } \sin \theta _ { r } = n _ { 2 } \sin \theta _ { t } ,
$$
which is exactly what we want.

(d) The continuity of $\mathbf { B } ^ { \| }$gives
$$
B _ { i } \cos \theta _ { i } - B _ { r } \cos \theta _ { r } = B _ { t } \cos \theta _ { t } .
$$
Since $B = E n / c$, this means
$$
E _ { i } n _ { 1 } \cos \theta _ { i } - E _ { r } n _ { 1 } \cos \theta _ { r } = E _ { t } n _ { 2 } \cos \theta _ { t } .
$$
Now with the continuity of $\mathbf { E } ^ { \| } \left( E _ { i } + E _ { r } = E _ { t } \right)$, and $\theta _ { i } = \theta _ { r }$, we have
$$
E _ { i } n _ { 1 } \cos \theta _ { i } - E _ { r } n _ { 1 } \cos \theta _ { i } = E _ { i } n _ { 2 } \cos \theta _ { t } + E _ { r } n _ { 2 } \cos \theta _ { t }
$$
which yields
$$
\frac { E _ { r } } { E _ { i } } = \frac { n _ { 1 } \cos \theta _ { i } - n _ { 2 } \cos \theta _ { t } } { n _ { 1 } \cos \theta _ { i } + n _ { 2 } \cos \theta _ { t } } , \quad \frac { E _ { t } } { E _ { i } } = \frac { 2 n _ { 1 } \cos \theta _ { i } } { n _ { 1 } \cos \theta _ { i } + n _ { 2 } \cos \theta _ { t } }
$$
as desired.
(e) In part (c) we showed that $\left( k _ { i } \right) _ { y } = \left( k _ { t } \right) _ { y }$ and $\left( k _ { i } \right) _ { z } = \left( k _ { t } \right) _ { z }$, but we also know that the magnitudes of the wavevectors obey
$$
k _ { t } = \frac { \omega } { c } n _ { 2 } , \quad k _ { i } = \frac { \omega } { c } n _ { 1 }
$$
so that $k _ { t } = \left( n _ { 2 } / n _ { 1 } \right) k _ { i }$. Solving for $\left( k _ { t } \right) _ { x }$, we have
$$
\left( k _ { t } \right) _ { x } ^ { 2 } = k _ { t } ^ { 2 } - \left( k _ { t } \right) _ { y } ^ { 2 } - \left( k _ { t } \right) _ { z } ^ { 2 } = \left( k _ { i } \frac { n _ { 2 } } { n _ { 1 } } \right) ^ { 2 } - k _ { i } ^ { 2 } \sin ^ { 2 } \theta _ { i } .
$$
Therefore, if $\sin \theta _ { i } > n _ { 2 } / n _ { 1 }$, then $\left( k _ { t } \right) _ { x } ^ { 2 }$ is negative, so that $\left( k _ { t } \right) _ { x }$ is imaginary. This kind of solution is called an evanescent wave.

Remark: Snell's Law for Particles
Above, we found the angle of refraction using the conservation of $k _ { z }$ at an interface. To relate this to the wave speed, we used that fact that $\omega$ is conserved when a wave passes an interface, so that $| \mathbf { k } | = \omega / | \mathbf { v } | \propto 1 / | \mathbf { v } |$.

However, we could also model light as a stream of nonrelativistic bullets, and the interface as dividing two regions, each with constant potential energy. In that case, the analogue of $k _ { z }$ is $p _ { z }$, which is still conserved by translational symmetry. However, now the mass $m$ is conserved when the particles pass the interface, and we have $| \mathbf { p } | = m | \mathbf { v } | \propto | \mathbf { v } |$. This gives the opposite dependence on wave velocity, so that now $n / \sin \theta$ stays the same! Hundreds of years ago, nobody could directly measure |v|, so both models were considered.

[5] Problem 23. In most common materials, $\mu \approx \mu _ { 0 }$ while $\epsilon$ depends on frequency. We'll investigate the origin of this frequency dependence below.
    (a) Model an electron in an atom as a mass $m$ with charge $q$ attached to a spring, with natural angular frequency $\omega _ { 0 }$ and a damping force $- m \gamma \mathbf { v }$, in an electric field $\mathbf { E } _ { 0 } e ^ { - i \omega t }$. Write down the equation of motion for the electron.

(b) The atomic polarizability $\alpha$ is defined by $\mathbf { p } = \alpha \mathbf { E }$. Show that
$$
\alpha = \frac { q ^ { 2 } / m } { \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } - i \gamma \omega } .
$$
Now we restrict to a gas with small number density $n$, so that $n \alpha \ll \epsilon _ { 0 }$. For simplicity, you may also assume that the damping is weak, $\gamma \ll \omega _ { 0 }$. Now, the Clausius-Mossotti formula reduces to
$$
\epsilon = \epsilon _ { 0 } + n \alpha
$$
and $\alpha$ is a complex number, so we learn that $\epsilon$ is also complex.
(c) The wavevector and angular frequency are related by $k ^ { 2 } = \mu \epsilon \omega ^ { 2 }$. Explain why the fact that $\epsilon$ is complex indicates that waves can be absorbed.
(d) What value of $\omega$ maximizes the absorption rate of the electromagnetic waves? Roughly how many wavelengths does such a wave propagate before being mostly absorbed?
(e) What value of $\omega$ maximizes the speed of the electromagnetic waves, and what is that speed?
(f) Transparent objects such as glass can be modeled as having a very high resonant frequency, much higher than that of visible light. Does blue light or red light refract more when passing from air to glass?

The intuitive reason that these electrons can affect the propagation speed of light is because they emit secondary electromagnetic waves that are out of phase with the original wave; this "pushes" the phase of the composite wave forward or backward, affecting the phase velocity. A nice explanation of this can be found in chapter I. 31 of the Feynman lectures.

Solution. (a) We have

$$
m \ddot { \mathbf { r } } = - m \omega _ { 0 } ^ { 2 } \mathbf { r } - m \gamma \mathbf { v } + q \mathbf { E } _ { 0 } e ^ { - i \omega t } .
$$

(b) Suppose $\mathbf { r } = \mathbf { r } _ { 0 } e ^ { - i \omega t }$ where $\mathbf { r } _ { 0 }$ is potentially complex. Then, we see that $\mathbf { E } _ { 0 } \| \mathbf { r } _ { 0 }$ and
$$
- m \omega ^ { 2 } \mathbf { r } = - m \omega _ { 0 } ^ { 2 } \mathbf { r } + m \gamma i \omega \mathbf { r } + q \left( E _ { 0 } / r _ { 0 } \right) \mathbf { r } .
$$
Thus,
$$
\frac { E _ { 0 } } { r _ { 0 } } = \frac { m \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } - i \gamma \omega \right) } { q } .
$$
Using $\mathbf { p } = q \mathbf { r }$ yields the result.
(c) If $\epsilon$ is complex, then with $\mu \approx \mu _ { 0 }$ and $\omega ^ { 2 }$ being real, then $k ^ { 2 } = \mu \epsilon \omega ^ { 2 }$ will also be complex. Thus with a complex wavevector k, the field of $\mathbf { E } _ { 0 } e ^ { i ( \mathbf { k } \cdot \mathbf { x } - \omega t ) }$ will exponentially decay.
(d) The absorption arises from the imaginary part of of $k x$. With $k = \omega \sqrt { \mu \epsilon } \approx \omega \sqrt { \mu _ { 0 } \epsilon _ { 0 } } \left( 1 + \frac { n \alpha } { 2 \epsilon _ { 0 } } \right)$, the absorption rate is maximized when the imaginary part of $k$ is maximized, and
$$
\begin{gathered}
\beta \equiv \operatorname { Im } ( k ) = \operatorname { Im } \left( \frac { \omega n } { 2 c \epsilon _ { 0 } } \alpha \right) = \frac { \omega n } { 2 c \epsilon _ { 0 } } \frac { q ^ { 2 } / m } { \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } \right) ^ { 2 } + ( \omega \gamma ) ^ { 2 } } ( \gamma \omega ) \\
= \frac { q ^ { 2 } \gamma n } { 2 m c \epsilon _ { 0 } } \frac { \omega ^ { 2 } } { \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } \right) ^ { 2 } + \gamma ^ { 2 } \omega ^ { 2 } }
\end{gathered}
$$

The maximum value of this occurs when

$$
\frac { d \beta } { d \omega ^ { 2 } } \propto \left( \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } \right) ^ { 2 } + \gamma ^ { 2 } \omega ^ { 2 } - \omega ^ { 2 } \left( 2 \left( \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } \right) + \gamma ^ { 2 } \right) \right) = 0
$$

which simplifies to yield

$$
\omega _ { 0 } ^ { 4 } - \omega ^ { 4 } = 0 .
$$

So an electromagnetic wave with angular frequency $\omega = \omega _ { 0 }$ has the maximum absorption rate. The electric field will have a factor of $e ^ { - \beta x }$, and at $\omega = \omega _ { 0 } , \beta = \frac { q ^ { 2 } n } { 2 \gamma m c \epsilon _ { 0 } }$. The value of the real wavevector $\operatorname { Re } k$ will be close to (note that $\operatorname { Re } ( \alpha ) = 0$ at $\omega = \omega _ { 0 }$ ):

$$
\operatorname { Re } ( k ) = \frac { \omega _ { 0 } } { c } \left( 1 + \operatorname { Re } \left( \frac { n \alpha } { 2 \epsilon _ { 0 } } \right) \right) = \frac { \omega _ { 0 } } { c }
$$

Then for the wave to fall off by a factor of $e$, the wave will need to travel a distance of $\frac { 1 } { \beta }$, which is $\frac { 1 } { \beta \lambda } = \frac { k } { 2 \pi \beta }$ wavelengths. Thus,

$$
\frac { k } { 2 \pi \beta } = \frac { \omega _ { 0 } \gamma m \epsilon _ { 0 } } { \pi q ^ { 2 } n }
$$

is the number of wavelengths it will travel before the amplitude gets reduced by a factor of $e$.

(e) The phase velocity is maximized when $\frac { \omega } { \operatorname { Re } k }$, or $\operatorname { Re } \frac { 1 } { \sqrt { \mu \epsilon } }$ is maximized.
$$
v _ { p } = \operatorname { Re } \frac { 1 } { \sqrt { \mu \epsilon } } \approx c \left( 1 - \operatorname { Re } \frac { 1 } { 2 } \frac { n \alpha } { \epsilon _ { 0 } } \right) = c + \frac { c q ^ { 2 } n } { 2 m \epsilon _ { 0 } } \frac { \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } } { \left( \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } \right) ^ { 2 } + ( \gamma \omega ) ^ { 2 } }
$$
Differentiating with respect to $\omega ^ { 2 }$ and finding where it's zero yields
$$
\begin{gathered}
\left( \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } \right) ^ { 2 } + \gamma ^ { 2 } \omega ^ { 2 } - \left( \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } \right) \left( 2 \left( \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } \right) + \gamma ^ { 2 } \right) = 0 \\
\left( \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } \right) ^ { 2 } = \omega _ { 0 } ^ { 2 } \gamma ^ { 2 } \\
\omega ^ { 2 } = \omega _ { 0 } ^ { 2 } \pm \omega _ { 0 } \gamma
\end{gathered}
$$
Looking at the original, the smaller solution yields the minimum velocity, and the larger solution yields the maximum velocity (which happens to be greater than $c$ ). The maximum phase velocity is
$$
v _ { \max } = c + \frac { c q ^ { 2 } n } { 2 m \epsilon _ { 0 } } \frac { \omega _ { 0 } \gamma } { \left( \omega _ { 0 } \gamma \right) ^ { 2 } + \gamma ^ { 2 } \left( \omega _ { 0 } ^ { 2 } + \omega _ { 0 } \gamma \right) }
$$
(f) From the previous part, we have
$$
v _ { p } = c - \frac { c q ^ { 2 } n } { 2 m \epsilon _ { 0 } } \frac { \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } } { \left( \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } \right) ^ { 2 } + ( \gamma \omega ) ^ { 2 } }
$$
and now we know that $\omega _ { 0 } \gg \omega$, so
$$
\frac { v _ { p } } { c } \approx 1 - \frac { q ^ { 2 } n } { 2 m \epsilon _ { 0 } } \frac { \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } } { \omega _ { 0 } ^ { 4 } - 2 \omega _ { 0 } ^ { 2 } \omega ^ { 2 } + ( \gamma \omega ) ^ { 2 } } \approx 1 - \frac { q ^ { 2 } n } { 2 m \epsilon _ { 0 } \omega _ { 0 } ^ { 2 } } \left( 1 + \omega ^ { 2 } / \omega _ { 0 } ^ { 2 } \right) .
$$
Thus, increasing the frequency would decrease $v _ { p }$ and increase the index of refraction, so blue light would refract more.
[5] Problem 24. IPhO 2002, problem 1. A neat application of electromagnetic waves in matter.
[5] Problem 25. APhO 2007, problem 2. A problem on an exotic negative index of refraction.

Remark
Above, we considered the response of a medium composed of atoms, obeying $p = \alpha E$. However, this relation is just an approximation, like Hooke's law. For larger electric fields, higher order terms are necessary,

$$
p = \alpha E + \alpha ^ { \prime } E ^ { 2 } + \ldots
$$

which lead to strange effects, studied in the field of nonlinear optics. For example, suppose we send in light of angular frequency $\omega$. Then

$$
E ^ { 2 } \propto \cos ^ { 2 } ( \omega t ) = \frac { 1 + \cos ( 2 \omega t ) } { 2 } .
$$

That means that a nonlinear medium can respond to light at angular frequency $\omega$ by oscillating, and hence emitting light, at angular frequency $2 \omega$. This phenomenon is called frequency doubling, or second-harmonic generation, and converts red light to ultraviolet. Similarly, for a cubic nonlinearity, you can use trigonometric identities to show that frequency tripling can occur.

## 5 Electromagnetic Systems

In this section we'll consider problems that use everything we've covered, with a focus on technological applications and systems with multiple moving parts.

[3] Problem 26. This is a rewrite of NBPhO 2007 problem 3, which has some typos and ambiguities. Suppose particles of mass $m$, charge $e > 0$, and kinetic energy $e U _ { 0 }$ are produced at point $A$, all traveling to the right. The particles are not produced at exactly the same time, but we would like them to arrive at point $D$ at the same time. This is known as temporal focusing.
![](../../../figures/solution-ocr/6edbe15dcf427a7397497b6b.jpg)
To do this, we place a pair of parallel plates along the path, with width $a$. The plates have the same time-dependent voltage $U ( t )$, while the voltage outside the plates is held at zero. Thus, the electric field is only nonzero near point $B$, where the particles enter the plates, and point $C$, where the particles exit the plates. The particles then travel a distance $b \gg a$ to point $D$.
    (a) Suppose the first particle reaches point $B$ at time $t = 0$, and that $U ( 0 ) = U ^ { \prime } ( 0 ) = 0$. Find the $U ( t )$ such that all the next particles reach point $D$ at the same time. Assume that $| U ( t ) | \ll U _ { 0 }$.
    (b) The voltage cannot become arbitrarily high, so every time $T$ it resets to zero and the process begins again. As a result, particles are periodically focused into clumps. On average, what fraction of the particles do not make it into a clump? Assume that $T$ is much larger than the time it takes a particle to cross the plates.

Solution. Here's a solution adapted for this version of the problem.


(a) Note that the particle does not accelerate when it is between the plates, even when $U ( t )$ changes, since the electric field vanishes there. The situation is analogous to a ball rolling on a flat table while the entire table is being lifted up.
Now consider the particle that enters the plates at time $t$ and exits at time $t ^ { \prime }$. It loses a kinetic energy $e U ( t )$ when it enters, then gains a kinetic energy $e U \left( t ^ { \prime } \right)$ when it exits. Therefore, if $U ( t )$ is time-dependent, the particle can have a net change in speed, which allows later particles to move faster to $D$.
To make this concrete, let $t _ { a } = a / v _ { 0 }$ and $t _ { b } = b / v _ { 0 }$, where $e U _ { 0 } = m v _ { 0 } ^ { 2 } / 2$. The approximations of the problem allow us to neglect the particles' change in speed while between the plates, since it's penalized by factors of both $a / b$ and $U ( t ) / U _ { 0 }$. Then a particle that enters the plates at time $t$ exits at time $t ^ { \prime } \approx t + t _ { a }$. The extra energy imparted must shorten the time it takes to go from $C$ to $D$ by an amount $t + t _ { 0 }$, where $t _ { 0 }$ is an arbitrary constant. Then
$$
t + t _ { 0 } \approx t _ { b } \frac { \Delta v } { v } \approx \frac { t _ { b } } { 2 } \frac { \Delta K } { e U _ { 0 } } \approx \frac { t _ { b } } { 2 } \frac { U \left( t + t _ { a } \right) - U ( t ) } { U _ { 0 } } .
$$
In other words, the finite difference of $U ( t )$ is a linear function of $t$, which means that $U ( t )$ is a quadratic polynomial. The given conditions $U ( 0 ) = U ^ { \prime } ( 0 ) = 0$ fix $U ( t ) \propto t ^ { 2 }$, and matching the coefficients of $t$ on both sides gives
$$
U ( t ) = \frac { U _ { 0 } } { t _ { a } t _ { b } } t ^ { 2 } = \frac { 2 e U _ { 0 } ^ { 2 } } { a b m } t ^ { 2 } .
$$
(b) When the voltage resets to zero, all the particles that were between the plates won't get focused correctly. So the fraction that don't get focused is approximately
$$
\frac { t _ { a } } { T } = \frac { a } { T } \sqrt { \frac { m } { 2 e U _ { 0 } } } .
$$
Note that for this solution to make sense, we need $t _ { a } \ll T$, but we also need $T$ to be short enough so that $| U ( t ) | \ll U _ { 0 }$, which corresponds to $T \ll \sqrt { t _ { a } t _ { b } }$. Both conditions can be satisfied simultaneously, since $a \ll b$.

[4] Problem 27. IPhO 2004, problem 3. A practical problem which also reviews damped/driven oscillations.
[4] Problem 28. NBPhO 2014, problem 1. A challenging problem about a complex nonlinear circuit.
[5] Problem 29. Physics Cup 2020, problem 1. (It's not stated explicitly, but you should assume the rod is an insulator with zero electric susceptibility. Alternatively, you can suppose the rod has some electric susceptibility, but it's too thin to have an effect on the dynamics of the metal balls.)

Solution. See the official solutions here.
