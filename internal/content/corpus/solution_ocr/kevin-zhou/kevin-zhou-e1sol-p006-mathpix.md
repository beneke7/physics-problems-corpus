---
id: solution-ocr-kevin-zhou-e1sol-p006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e1-p006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 6. This subtle problem will expose a hidden assumption we've made in the previous two examples. Suppose that all of space is filled with uniform charge density $\rho$.
    (a) Show that $\mathbf { E } = \left( \rho / \epsilon _ { 0 } \right) x \hat { \mathbf { x } }$ obeys the differential form of Gauss's law.
    (b) Show that $\mathbf { E } = \left( \rho / 3 \epsilon _ { 0 } \right) r \hat { \mathbf { r } }$ also obeys Gauss's law.
    (c) Argue that by symmetry, $\mathbf { E } = 0$. Show that this does not obey Gauss's law.
    (d) ★ What's going on? Which, if any, is the actual field? If you think there's more than one possible field, how could that be consistent with Coulomb's law, which gives the answer explicitly? For that matter, what does Coulomb's law say about this setup, anyway?

Solution. (a) We see that $\nabla \cdot \mathbf { E } = \partial _ { x } \left( \left( \rho / \epsilon _ { 0 } \right) x \right) = \rho / \epsilon _ { 0 }$, as desired.


(b) In Cartesian coordinates, this field is
$$
\mathbf { E } = \frac { \rho } { 3 \epsilon _ { 0 } } ( x \hat { \mathbf { x } } + y \hat { \mathbf { y } } + z \hat { \mathbf { z } } )
$$
whose divergence is $\rho / \epsilon _ { 0 }$, as desired.

(c) This has to hold by symmetry because the electric field can't point in any particular direction, by rotational symmetry. It also can't just point radially, because that breaks translational symmetry; the center is a special point. So the only option is $\mathbf { E } = 0$.
But then clearly $\nabla \cdot \mathbf { E } = 0$, so Gauss's law is not obeyed.
(d) The issue is boundary conditions. Just like any differential equation, the solution for the electric field is not defined without boundary conditions, just like how a solution for Newton's second law, $F = m a$, is not defined without specifying an initial position and velocity.
One common way to resolve the ambiguity, used in example 3, is to assume the field goes to zero at infinity. This is equivalent to assuming there's no "extra" field produced by other charges outside the ones we're considering. (Of course, in real experiments, that's not guaranteed, and we always have to worry about "shielding" external fields, such as from other pieces of equipment or static charges. Even the Earth makes a sizable vertical electric field, which is occasionally discharged by lightning.) However, we can't do this here because the charge density extends out to infinity too.
Another common way to resolve the ambiguity, used in example 4, is to assume that the field shares the same symmetries as the charge distribution. But in this case, that's not even possible, because the charge distribution has too much symmetry. (It is translationally symmetric, and rotationally symmetric about every point!) It is impossible to pick a set of boundary conditions that maintains all these symmetries. That's why there are many equally good answers, depending on which symmetries you break.
One might think that Coulomb's law could give us a unique answer. Coulomb's law for a point charge is itself derived by implicitly assuming that there are no "extra" fields flying around, just the spherically symmetric field of the point charge itself. This looks very reasonable, so what stops us from just saying that each charge in this problem has such a field, and then integrating over the charges? Well, if you write down the integral, you'll find that it's divergent, analogous to the integral $\int _ { - \infty } ^ { \infty } x d x$. By itself, the integral is not even well-defined.
To get an answer, you have to "regulate" the integral (i.e. change it in a way that makes it well-defined). One possible regulator, for example, is to just chop off the limits of integration at finite values, like $\int _ { - L } ^ { L } x d x$. But that particular regulator is equivalent to just replacing the charge distribution with a finite one centered at the origin! In other words, Coulomb's law also fails to give a unique answer, because it requires a regulator to give a well-defined answer, and there are many possible regulators. If you treat the charge distribution as a giant ball with center at the origin, you get the result of part (b). If you treat it as a thick, huge slab along the $y z$ plane centered at the origin, you get the result of part (a). The symmetry argument fails once again, because all the regulators break some symmetry. This is a simple example of "anomalous symmetry", an important idea in theoretical physics.
The exact same problem appears in Newtonian cosmology, where charge density is replaced with mass density, and this problem confused Newton himself, who incorrectly thought that $\mathbf { g } = 0$ by symmetry. In this context, all regulators/boundary conditions are unsatisfactory. Of course, we want a rotationally symmetric universe to match experiment, so we have to put that in by hand. But then every solution has a center towards which everything collapses, so to keep the solar system an inertial frame, we'd have to put it at the center of the universe! Surely, this would make Copernicus roll in his grave.

Some of these problems are fixed in general relativity. You still have to postulate rotational symmetry (again, on the basis of experimental data), but once you do that, there are no further problems. That's because in general relativity, acceleration is not absolute in the way it is in Newtonian mechanics. Instead, there is no center; everything just gets closer to everything else. For further discussion and references, see this paper.

## 2 Electrostatic Forces

Idea 3
If you follow an electric field line, the potential monotonically decreases along it.
