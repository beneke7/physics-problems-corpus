---
id: solution-ocr-kevin-zhou-e1sol-ex007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e1-ex007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 7
At a point on a surface, there is charge density $\sigma$, and electric fields $\mathbf { E } _ { 1 }$ and $\mathbf { E } _ { 2 }$ on the two sides of the surface. Show that the surface experiences a force $\sigma \left( \mathbf { E } _ { 1 } + \mathbf { E } _ { 2 } \right) / 2$ per unit area.

Solution
These electric fields are the sum of an external electric field $\mathbf { E } _ { 0 }$, made by charges elsewhere, and a field due to the charges on this local patch of the surface. The latter is $\sigma \hat { \mathbf { n } } / 2 \epsilon _ { 0 }$, which flips sign across the surface and explains why $\mathbf { E } _ { 1 }$ and $\mathbf { E } _ { 2 }$ are different. The external field $\mathbf { E } _ { 0 }$ does not change discontinuously, and only $\mathbf { E } _ { 0 }$ contributes to the net force on the surface patch, since an object can't exert a force on itself.

Since the contributions from the surface patch to $\mathbf { E } _ { 1 }$ and $\mathbf { E } _ { 2 }$ have opposite signs, we have $\mathbf { E } _ { 0 } = \left( \mathbf { E } _ { 1 } + \mathbf { E } _ { 2 } \right) / 2$, immediately giving the result.

[4] Problem 11 (Griffiths 2.47, PPP 113, MPPP 140). Consider a uniformly charged spherical shell of radius $R$ and total charge $Q$.
    (a) Find the net force that the southern hemisphere exerts on the northern hemisphere.
    (b) Generalize part (a) to the case where the sphere is split into two parts by a plane whose minimum distance to the sphere's center is $h$.
    (c) Generalize part (a) to the case where the two hemispherical shells have uniform charge density, opposite orientation, and the same center, but have different total charges $q$ and $Q$, and different radii $r$ and $R$, where $r < R$.

Solution. (a) The northern hemisphere exerts no net force on itself, so it is equivalent to find the force on the northern hemisphere due to the entire sphere. The surface charge density is $\sigma = Q / \left( 4 \pi R ^ { 2 } \right)$. By the result of example 7, the outward pressure on the northern hemisphere is $\sigma ^ { 2 } / 2 \epsilon _ { 0 }$. Therefore, the total force is

$$
F = \left| \frac { \sigma ^ { 2 } } { 2 \epsilon _ { 0 } } \int _ { N } d \mathbf { S } \right| = \frac { \sigma ^ { 2 } } { 2 \epsilon _ { 0 } } \left( \pi R ^ { 2 } \right) = \frac { Q ^ { 2 } } { 32 \pi \epsilon _ { 0 } R ^ { 2 } }
$$

where $N$ refers to the northern hemisphere, and the surface integral was done as in problem 9.


(b) This is exactly the same as in part (a), except that now the integral over the piece is
$$
\left| \int d \mathbf { S } \right| = \pi \left( R ^ { 2 } - h ^ { 2 } \right)
$$
which gives the result
$$
F = \left( \sigma ^ { 2 } / 2 \epsilon _ { 0 } \right) \pi \left( R ^ { 2 } - h ^ { 2 } \right) = \frac { Q ^ { 2 } } { 32 \pi \epsilon _ { 0 } R ^ { 2 } } \left( 1 - h ^ { 2 } / R ^ { 2 } \right) .
$$

(c) This can be solved using an ingenious superposition and symmetry argument.
![](../../../figures/solution-ocr/c615a8297c4c160bbcf3ae99.jpg)
![](../../../figures/solution-ocr/b9c773992ce6ce58957bbec6.jpg)
The force we want to compute is shown in (a). Now consider superposing a uniformly negatively charged sphere with radius just larger than $R$, as shown in (b). By the shell theorem, this doesn't change the force on the hemisphere of radius $r$. The result of the superposition is (c). Flipping the charge of one of the hemispheres in (c) flips the force, leading to (d). Finally, reflecting (d) gives (e).
This has all been preamble to the ingenious step: superpose (a) and (e) to get (f), which involves the force on a complete sphere of radius $r$. Using Newton's third law, $2 F$ can now be computed by finding the force on the hemisphere. But that is easy because of the shell theorem, which tells us that $F$ is the net force on the hemisphere shown in (g). Using the method of problem 9 again, we conclude
$$
F = \frac { q } { 4 \pi \epsilon _ { 0 } R ^ { 2 } } \left( \pi R ^ { 2 } \right) \frac { Q } { 2 \pi R ^ { 2 } } = \frac { Q q } { 8 \pi \epsilon _ { 0 } R ^ { 2 } }
$$
which is independent of $r !$ (Setting $r = 0$ and $r = R$ recovers the answers to two previous problems.)

## Example 8: IPhO 2020.1A

A point charge of mass $m$ and charge $- q$ is placed at the center of a cube with side length $a$, whose volume has uniform charge density $\rho$. The point charge is allowed to slide along a straight line, which has an arbitrary orientation, so that the distance along the line from the center to one of the cube's faces is $L$.


![](../../../figures/solution-ocr/0e3184f34338edcf17880cd1.jpg)
Find the angular frequency of small oscillations.

## Solution

The official solution goes as follows: consider displacing the point charge away from the origin by some small amount r. The cube of charge can then be decomposed into (1) a slightly smaller cube of charge centered around the point charge's new position, and (2) three thin plates of charge on the faces opposite to the charge's motion. By symmetry, (1) contributes nothing, and we know what (2) contributes from the answer to problem 10. The result is a restoring force proportional to -r, whose magnitude has no dependence on the orientation of r, so the oscillation frequency doesn't depend on $L$. Once you know this, you can orient the line any way you want, so the problem is simple to finish.

Personally, I don't like this problem because the intended solution requires knowing the answer to problem 10, which itself is pretty tricky. That is, the difficulty of the problem depends mostly on whether you've seen that tough, but standard problem elsewhere. However, I'm including it as an example because there's another way to solve it, which is a bit more advanced, but quite illustrative.

Since this is a question about small oscillations, it suffices to expand the potential energy to second order about the center of the cube. The most general possible expression is

$$
V ( x , y , z ) = V _ { 0 } + b _ { 1 } x + b _ { 2 } y + b _ { 3 } z + c _ { 1 } x ^ { 2 } + c _ { 2 } y ^ { 2 } + c _ { 3 } z ^ { 2 } + c _ { 4 } x y + c _ { 5 } y z + c _ { 6 } x z + \mathcal { O } \left( r ^ { 3 } \right) .
$$

The constant $V _ { 0 }$ doesn't matter, so we can just ignore it. And since $\mathbf { E }$ vanishes at the center, the linear terms $b _ { i }$ are all zero as well. Because the $x , y$, and $z$ axes are all equivalent by cubical symmetry (e.g. we can rotate them into each other, while keeping the cube the same),

$$
c = c _ { 1 } = c _ { 2 } = c _ { 3 } , \quad c ^ { \prime } = c _ { 4 } = c _ { 5 } = c _ { 6 } .
$$

Thus, our complicated original expression reduces to

$$
V ( x , y , z ) = c \left( x ^ { 2 } + y ^ { 2 } + z ^ { 2 } \right) + c ^ { \prime } ( x y + y z + x z ) + \mathcal { O } \left( r ^ { 3 } \right) .
$$

Finally, note that the cube is symmetric under reflections $x \rightarrow - x , y \rightarrow - y$, or $z \rightarrow - z$. These reflections keep the $c$ term the same, but flip the $c ^ { \prime }$ term. Then we must have $c ^ { \prime } = 0$, giving the remarkably simple result

$$
V ( r ) = c r ^ { 2 } + \mathcal { O } \left( r ^ { 3 } \right) .
$$


The potential near the origin is spherically symmetric (to second order), even though the setup as a whole isn't! (It would also hold at the center of, e.g. a tetrahedron or octahedron, but not a rectangular prism. The math to figure out when this happens is called group theory.)

So now we only need to find the coefficient $c$. I'll do this in a way that introduces some useful facts. Consider the divergence of the gradient of $V$, also called the Laplacian. It satisfies

$$
\nabla \cdot ( \nabla V ) = \nabla ^ { 2 } V = \frac { \partial ^ { 2 } V } { \partial x ^ { 2 } } + \frac { \partial ^ { 2 } V } { \partial y ^ { 2 } } + \frac { \partial ^ { 2 } V } { \partial z ^ { 2 } } .
$$

By Gauss's law, we have Poisson's equation

$$
\nabla ^ { 2 } V = - \nabla \cdot \mathbf { E } = - \frac { \rho } { \epsilon _ { 0 } } .
$$

Using this, we can easily compute the value of $c$, giving

$$
V ( \mathbf { r } ) = - \frac { \rho r ^ { 2 } } { 6 \epsilon _ { 0 } } + \mathcal { O } \left( r ^ { 3 } \right) .
$$

Therefore, for a displacement r in any direction, the restoring force is $\rho q r / 3 \epsilon _ { 0 }$, so

$$
\omega = \sqrt { \frac { \rho q } { 3 \epsilon _ { 0 } m } }
$$

independent of the orientation of the line.

## Remark

In the previous example, we saw that cubical symmetry and the simplicity of Taylor series combine to yield an "accidental" spherical symmetry. Accidental symmetry is an important concept in modern physics. For example, protons are stable because of an accidental symmetry in the Standard Model, which ensures that baryon number is perturbatively conserved. That explains why we often expect proton decay to occur in extensions of the Standard Model, such as grand unified theories. For more discussion, see this article.

## 3 Continuous Charge Distributions

Idea 6
In almost all cases in Olympiad physics, there will be sufficient symmetry to reduce any multiple integral to a single integral. Remember that when using Gauss's law, the Gaussian surface may be freely deformed as long as it doesn't pass through any charges.
[2] Problem 12 (Purcell 1.15). A point charge $q$ is located at the origin. Compute the electric flux that passes through a circle a distance $\ell$ from $q$, subtending an angle $2 \theta$ as shown below.


![](../../../figures/solution-ocr/1dab101db6caafc4640d1ad9.jpg)

Solution. Let $\ell = R \cos \theta$, and deform the disk into a spherical cap with radius $R$. Then the answer is then just $q / \epsilon _ { 0 }$ times the ratio of the area of the cap to the total area of the sphere. In spherical coordinates, this is

$$
\frac { q } { 4 \pi \epsilon _ { 0 } } \int _ { 0 } ^ { \theta } 2 \pi \sin \theta ^ { \prime } d \theta ^ { \prime } = \frac { q } { \epsilon _ { 0 } } \frac { 1 - \cos \theta } { 2 }
$$

You can also show this using the original flat Gaussian surface, though that takes more work.

[3] Problem 13 (Purcell 1.8). A ring with radius $R$ has uniform positive charge density $\lambda$. A particle with positive charge $q$ and mass $m$ is initially located in the center of the ring and given a tiny kick. If the particle is constrained to move in the plane of the ring, show that it exhibits simple harmonic motion and find the angular frequency.
Solution. Suppose it is moved by $r \ll R$ in the $x$ direction. Set up polar coordinates with $\theta = 0$ being the positive $x$ axis. By the law of cosines, we have
$$
\begin{aligned}
U ( r ) & = 2 \int _ { 0 } ^ { \pi } \frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { q ( \lambda R d \theta ) } { \sqrt { R ^ { 2 } + r ^ { 2 } - 2 R r \cos \theta } } \\
& = \frac { q \lambda } { 2 \pi \epsilon _ { 0 } } \int _ { 0 } ^ { \pi } \frac { d \theta } { \sqrt { 1 + \left( r ^ { 2 } / R ^ { 2 } \right) - 2 ( r / R ) \cos \theta } }
\end{aligned}
$$
Next, we can expand the square root using a Taylor series. We know the force at the center of the ring vanishes, and force is the first derivative of potential. Thus, the first nonzero term has to be proportional to $r ^ { 2 }$, so we need to expand to second order in $r / R$ to find it. The result is
$$
\begin{aligned}
U ( r ) & = \frac { q \lambda } { 2 \pi \epsilon _ { 0 } } \int _ { 0 } ^ { \pi } \left[ 1 + \frac { r } { R } \cos \theta - \frac { 1 } { 2 } \frac { r ^ { 2 } } { R ^ { 2 } } + \frac { 3 } { 8 } \left( - \frac { 2 r } { R } \cos \theta \right) ^ { 2 } \right] d \theta \\
& = \frac { q \lambda } { 2 \pi \epsilon _ { 0 } } \int _ { 0 } ^ { \pi } \frac { r ^ { 2 } } { 2 R ^ { 2 } } \left( 3 \cos ^ { 2 } \theta - 1 \right) d \theta + \mathrm { const } \\
& = \frac { q \lambda r ^ { 2 } } { 8 \epsilon _ { 0 } R ^ { 2 } } + \mathrm { const }
\end{aligned}
$$
where the term proportional to $r$ integrates to zero, as expected. This is essentially the same calculation as an example in M6. Thus, the effective spring constant is $k = q \lambda / 4 \epsilon _ { 0 } R ^ { 2 }$, so
$$
\omega = \sqrt { \frac { q \lambda } { 4 m \epsilon _ { 0 } R ^ { 2 } } } .
$$
You could also do this problem directly with Coulomb's law, but one advantage of using potential energy is that you don't have to think about the directions of any vectors.
[3] Problem 14 (Purcell 1.12). Consider the setup of problem 9. If the hemisphere is centered at the origin and lies entirely above the $x y$ plane, find the electric field at an arbitrary point on the $z$-axis. (This is a bit complicated, and is representative of the most difficult kinds of integrals you might have to set up in an Olympiad. For a useful table of integrals, see Appendix K of Purcell.)

Solution. Set up spherical coordinates with the hemisphere being the equation of $r = R$ and $\theta \in [ 0 , \pi / 2 ]$. Suppose our location is $( 0,0 , z )$. The hemisphere has surface charge $\sigma$. We see that the field points in the $z$-direction by symmetry, so we'll only worry about that piece. The ring at angle $\theta$ with width $d \theta$ provides fields at an angle, and some geometry shows that we have to correct by a factor of $\frac { R \cos \theta - z } { r }$ where $r \equiv \sqrt { R ^ { 2 } + z ^ { 2 } - 2 R z \cos \theta }$. We then have

$$
d E _ { z } = - \frac { \sigma \left( 2 \pi R ^ { 2 } \sin \theta d \theta \right) } { 4 \pi \epsilon _ { 0 } r ^ { 2 } } \cdot \frac { R \cos \theta - z } { r } ,
$$

so

$$
E ( z ) = - \frac { \sigma R ^ { 2 } } { 2 \epsilon _ { 0 } } \int _ { 0 } ^ { \pi / 2 } \frac { ( R \cos \theta - z ) \sin \theta d \theta } { \left( R ^ { 2 } + z ^ { 2 } - 2 R z \cos \theta \right) ^ { 3 / 2 } } .
$$

Consulting Appendix K tells us that

$$
E ( z ) = \frac { \sigma R ^ { 2 } } { 2 \epsilon _ { 0 } z ^ { 2 } } \left( \frac { R } { \sqrt { R ^ { 2 } + z ^ { 2 } } } - \frac { R - z } { \sqrt { ( R - z ) ^ { 2 } } } \right) .
$$

Taking some care with the square root, we conclude

$$
E ( z ) = \frac { \sigma R ^ { 2 } } { 2 \epsilon _ { 0 } z ^ { 2 } } \times \left\{ \begin{array} { l l }
\frac { 1 } { \sqrt { 1 + z ^ { 2 } / R ^ { 2 } } } - 1 & z < R \\
\frac { 1 } { \sqrt { 1 + z ^ { 2 } / R ^ { 2 } } } + 1 & z > R
\end{array} . \right.
$$

[3] Problem 15. USAPhO 2018, problem B1.
Idea 7: Electric Dipoles
The dipole moment of two charges $q$ and $- q$ separated by $\mathbf { d }$ is $\mathbf { p } = q \mathbf { d }$. More generally, the dipole moment of a charge configuration is defined as

$$
\mathbf { p } = \int \rho ( \mathbf { r } ) \mathbf { r } d ^ { 3 } \mathbf { r }
$$

For an overall neutral charge configuration, the leading contribution to its electric potential far away is the dipole potential,

$$
\phi ( r , \theta ) = \frac { p \cos \theta } { 4 \pi \epsilon _ { 0 } r ^ { 2 } }
$$

where $\theta$ is the angle of r to p.

Remark: Remembering the Dipole Potential
Let $\phi _ { 0 } ( \mathbf { r } ) = k / r$ be the potential for a unit charge at the origin. A point dipole of dipole moment $p$ consists of charges $\pm p / d$ separated by $d$, in the limit $d \rightarrow 0$. So the potential is

$$
p \lim _ { \mathbf { d } \rightarrow 0 } \frac { \phi _ { 0 } ( \mathbf { r } ) - \phi _ { 0 } ( \mathbf { r } + \mathbf { d } ) } { d } .
$$

But this is precisely the (negative) derivative, so you can get the dipole potential by differentiating the ordinary potential! Indeed, for a dipole aligned along the $\hat { \mathbf { z } }$ axis,

$$
- \frac { \partial } { \partial z } \frac { k p } { r } = \frac { k p } { r ^ { 2 } } \frac { \partial r } { \partial z } = \frac { k p } { r ^ { 2 } } \frac { z } { r } = \frac { k p \cos \theta } { r ^ { 2 } }
$$


as above. Higher derivatives give potentials for quadrupoles and higher multipoles, which we'll see in E8.
