---
id: solution-ocr-kevin-zhou-e4sol-p014
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e4-p014]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 14. Consider a current loop $I$ in the $x y$ plane in a constant magnetic field B.
    (a) Show that the net force on the loop is zero.
    (b) Show that the torque is
$$
\boldsymbol { \tau } = \mathbf { m } \times \mathbf { B }
$$
where the magnetic moment is
$$
\mathbf { m } = I A \hat { \mathbf { z } }
$$
where $A$ is the area of the loop. For simplicity, you can show this in the case where the current loop is a square of side length $L$, whose sides are aligned with the $x$ and $y$ axes. (The proof for a general loop shape requires some vector calculus, but you can attempt it for a challenge. You'll need the double cross product identity, $\mathbf { a } \times ( \mathbf { b } \times \mathbf { c } ) + \mathbf { b } \times ( \mathbf { c } \times \mathbf { a } ) + \mathbf { c } \times ( \mathbf { a } \times \mathbf { b } ) = 0$.)

Solution. (a) We see that

$$
\mathbf { F } = I \oint d \mathbf { s } \times \mathbf { B } = I ( \oint d \mathbf { s } ) \times \mathbf { B } = 0
$$

as desired.


(b) The magnetic moment of the square is
$$
\mathbf { m } = I L ^ { 2 } \hat { \mathbf { z } } .
$$
The torque on a side of the square is
$$
\boldsymbol { \tau } = \int \mathbf { r } \times d \mathbf { F } = I \int \mathbf { s } \times ( d \mathbf { s } \times \mathbf { B } )
$$
In particular, it's useful to pair the two sides parallel to the $x$ axis. These have opposite currents and differ only by a translation $\Delta \mathbf { r } = L \hat { \mathbf { y } }$, so adding their contributions gives a torque
$$
\tau = - I \int _ { 0 } ^ { L } ( L \hat { \mathbf { y } } ) \times ( \hat { \mathbf { x } } d x \times \mathbf { B } ) = - I L ( \hat { \mathbf { y } } \times ( \hat { \mathbf { x } } \times \mathbf { B } ) ) \int _ { 0 } ^ { L } d x = - I L ^ { 2 } ( \hat { \mathbf { y } } \times ( \hat { \mathbf { x } } \times \mathbf { B } ) ) .
$$
Similarly, the torques due to the other two sides add up to
$$
\boldsymbol { \tau } = I L ^ { 2 } ( \hat { \mathbf { x } } \times ( \hat { \mathbf { y } } \times \mathbf { B } ) ) .
$$

Manually performing the cross products, we have

$$
- \hat { \mathbf { y } } \times ( \hat { \mathbf { x } } \times \mathbf { B } ) = - B _ { y } \hat { \mathbf { x } } , \quad \hat { \mathbf { x } } \times ( \hat { \mathbf { y } } \times \mathbf { B } ) = B _ { x } \hat { \mathbf { y } } .
$$

Adding these together gives exactly the desired result, $\boldsymbol { \tau } = \mathbf { m } \times \mathbf { B }$.
For completeness, we display a fully general, vector calculus solution, valid for any loop shape. We note that along the full, closed loop, the fundamental theorem of calculus implies

$$
\oint d ( \mathbf { s } \times ( \mathbf { s } \times \mathbf { B } ) ) = 0
$$

simply because the closed loop integral of $d$ (anything) is the net change in (anything) along the loop, which is zero. Expanding with the product rule gives

$$
\oint d \mathbf { s } \times ( \mathbf { s } \times \mathbf { B } ) + \mathbf { s } \times ( d \mathbf { s } \times \mathbf { B } ) = 0 .
$$

Using these results and the double cross product identity, the torque is

$$
\begin{aligned}
\boldsymbol { \tau } & = I \oint \mathbf { s } \times ( d \mathbf { s } \times \mathbf { B } ) \\
& = - I \oint d \mathbf { s } \times ( \mathbf { B } \times \mathbf { s } ) - I \oint \mathbf { B } \times ( \mathbf { s } \times d \mathbf { s } ) \\
& = - \boldsymbol { \tau } - I \mathbf { B } \times ( \oint \mathbf { s } \times d \mathbf { s } )
\end{aligned}
$$

Now, $\mathbf { s } \times d \mathbf { s } = 2 d \mathbf { A }$, because as s moves a little along the loop it sweeps out a small triangle of area. Thus we have $2 \boldsymbol { \tau } = 2 I \mathbf { A } \times \mathbf { B }$, giving the result.

## Idea 3

The force on a small magnetic dipole m in a static magnetic field B is

$$
\mathbf { F } = \nabla ( \mathbf { m } \cdot \mathbf { B } )
$$

where the gradient acts only on B. As in problem 14, this can be shown relatively easily for a square loop, and requires some tricky vector calculus for a general current distribution.

From this, we can see that both the force and torque on a magnetic dipole can be found by differentiating the potential energy

$$
U = - \mathbf { m } \cdot \mathbf { B } .
$$

In addition, by a vector calculus identity, the force is equivalent to

$$
\mathbf { F } = ( \mathbf { m } \cdot \nabla ) \mathbf { B } + \mathbf { m } \times ( \nabla \times \mathbf { B } ) .
$$

The second term vanishes if the situation is magnetostatic, and there are no currents right on top of the dipole itself. This leaves the first term, which is relatively easy to evaluate.

All of these results also hold for electric dipoles in an electrostatic field, if we replace m with p and B with E. In more general situations, things get much more subtle; we have to account for the "hidden" momentum, to be discussed in R3.


## Remark

The expression for the potential energy above is notoriously subtle. Here's the problem: we know the Lorentz force on a charge is $q \mathbf { v } \times \mathbf { B }$, which means magnetic fields never do work. So how can they be associated with a nonzero potential energy?

There are two levels of explanation. First, suppose the magnetic dipole is made of charges moving in a loop. When such a current loop is placed in a magnetic field, and moved or rotated, mechanical work can be done on the loop. But at the same time, there will be an induced emf in the loop, which speeds up or slows down the current. The work done by these two effects perfectly cancels, so that the energy of the loop stays constant. For this kind of dipole, the expression for $U$ doesn't indicate the total energy, but only the "mechanical" potential energy, in the sense that differentiating it gives the right forces and torques. (Some further discussion of this point is in chapter II-15 of the Feynman lectures.)

On the other hand, the magnetic dipole moment of a common bar magnet doesn't come from charges moving in a loop! Instead, it comes from the intrinsic magnetic dipole moments of the unpaired electrons in the magnet. These kinds of dipole moments aren't composed of any moving subcomponents; they are an elementary and immutable property of the electron, like its mass or charge. In these cases, $U = - \mathbf { m } \cdot \mathbf { B }$ really is the total energy, and the magnetic field can do work. You won't hear much about these elementary dipole moments in introductory books, because they can only be properly understood by combining relativity and quantum mechanics, but they're responsible for most magnetic phenomena.
