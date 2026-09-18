---
id: solution-ocr-kevin-zhou-e3sol-ex006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e3-ex006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 6

Find the magnetic field of an infinite cylindrical solenoid, of radius $R$ and $n$ turns per unit length, carrying current $I$.

## Solution

Orient the solenoid along the vertical direction and use cylindrical coordinates. By symmetry, the field must be independent of $z$. Now consider the radial component of the magnetic field $B _ { r }$. Turning the solenoid upside-down is equivalent to reversing the current. But the former does not flip $B _ { r }$ while the latter does, so we must have $B _ { r } = 0$.

Now, by rotational symmetry, the tangential component $B _ { \phi }$ must be uniform. But then Ampere's law on any circular loop gives $B _ { \phi } ( 2 \pi r ) = 0$, so we must have $B _ { \phi } = 0$ as well.

The only thing left to consider is $B _ { z }$. By applying Ampere's law to small vertical rectangles, we


see that $B _ { z }$ is constant unless that rectangle crosses the surface of the solenoid. Furthermore, $B _ { z }$ must be zero far from the solenoid, so it must be zero everywhere outside the solenoid. Now, for a rectangle of height $h$ that does cross the surface, Ampere's law gives

$$
\oint \mathbf { B } \cdot d \mathbf { s } = B _ { z } ^ { \mathrm { in } } h = \mu _ { 0 } I _ { \mathrm { enc } } = \mu _ { 0 } n I h
$$

which tells us that $B _ { z } ^ { \mathrm { in } } = \mu _ { 0 } n I$.

Example 7
Now suppose the solenoid has finite length $L \gg R$. What do the fringe fields look like?

Solution
In principle we could solve for the exact fringe field by applying the Biot-Savart law to the solenoid wire, but that would be rather complicated. Instead, let's approximate the solenoid as a stack of $N = n L$ evenly spaced circular wire loops. Each one of these loops is a magnetic dipole $\mu = \pi R ^ { 2 } I$, so the field of each loop well outside of it is just a dipole field.

Summing up all of these dipole fields is still complicated, so let's use idea 7. We can replace each wire loop with a pair of magnetic charges $\pm q _ { m }$ separated by $d$, with the same magnetic dipole moment $\mu = q _ { m } d$. We can vary $q _ { m }$ and $d$ while keeping $\mu$ fixed, so for convenience let's set $d$ equal to the spacing $1 / n$ between loops. Then the charges of adjacent dipoles cancel, leaving only charges $q _ { m } = \pm n \mu = \pm \pi R ^ { 2 } n I$ on the ends.

Thus, the fringe field of a solenoid, at distances much greater than $R$, looks like the electric field of two point charges! This is confirmed by a numeric calculation shown at left below.
![](../../../figures/solution-ocr/3da4d3fdb20c096949acc402.jpg)
![](../../../figures/solution-ocr/81b8780cd02880f23cc969ff.jpg)
This may come as a surprise to you if you've read basic, algebra-based introductory physics textbooks. Many of them contain hand-drawn diagrams like the one shown at right above, where all the magnetic flux comes neatly out the ends of the solenoids, in straight lines. In reality, the field sprays out almost spherically symmetrically from the end, with only half the flux actually going out through the end face, while the rest exits downward through the sides. (You will show this more directly with a slick argument in problem 23.)


We can also be more quantitative. Suppose the solenoid is vertical and centered at $z = 0$. Then the field at a radius $r$ from the solenoid axis, at $z = 0$, is

$$
\mathbf { B } ( r ) = \mu _ { 0 } n I \hat { \mathbf { z } } \times \begin{cases} 1 & r < R \\ - 2 R ^ { 2 } / L ^ { 2 } & R \ll r \ll L \\ - R ^ { 2 } L / 4 r ^ { 3 } & L \ll r \end{cases}
$$

where the first line is the usual solenoid field, the second line is from applying Coulomb's law to our dipole analogy (which is only valid when $R \ll r$ ), and the third is from the dipole field of the two charges (only valid when $L \ll r$ ). As expected, in the limit $L \gg R$, the fringe field outside the solenoid is negligible. Another way of phrasing the result is that most of the upward flux through the solenoid returns through a downward field which mainly extends out to $r \sim L$. You can see all of these features in the accurate drawing above.

We can draw two lessons from this example. First, misleading diagrams are a common problem in introductory textbooks. A general rule is that the more basic a textbook is, the more pictures it'll have, but the less useful they'll be. Second, the analogy between Ampere and Gilbert dipoles is quite useful, and shows up frequently in tricky Olympiad problems.

## Remark: Real Solenoids

Real solenoids are even more complicated. First, we didn't account for the discreteness of the wires. We just treated them as forming a uniform current per length $K = n I$, which is how we wrote $I _ { \text {enc } } = n I h$. This is valid when you don't care about looking too closely, i.e. if your distance to any wire is much larger than the wire spacing $1 / n$.

Second, the fact that solenoids are made by winding real wires means there is another contribution to the current, even in the limit $n \rightarrow \infty$. The wires are wound with a small slope, since a net current $I$ still has to move along the solenoid. Another way of saying this is that the current per length along the solenoid surface is $\mathbf { K } = n I \hat { \boldsymbol { \theta } } + ( I / 2 \pi R ) \hat { \mathbf { z } }$. This causes a tangential magnetic field $B _ { \phi } = \mu _ { 0 } I / 2 \pi r$ outside the solenoid. Thus, in practice many solenoids are "counterwound": half the wires are wound evenly spaced going up the axis, and the other half are wound evenly spaced going back down the axis, which closes the loop and cancels this unwanted field.
