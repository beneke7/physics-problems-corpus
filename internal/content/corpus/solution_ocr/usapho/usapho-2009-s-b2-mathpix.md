---
id: solution-ocr-usapho-2009-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2009_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2009-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B2

An electric dipole consists of two charges of equal magnitude $q$ and opposite sign, held rigidly apart by a distance $d$. The dipole moment is defined by $p = q d$.

Now consider two identical, oppositely oriented electric dipoles, separated by a distance $r$, as shown in the diagram.
![](../../../figures/solution-ocr/02f39170624b79a8627e9d06.jpg)

a. It is convenient when considering the interaction between the dipoles to choose the zero of potential energy such that the potential energy is zero when the dipoles are very far apart from each other. Using this convention, write an exact expression for the potential energy of this arrangement in terms of $q , d , r$, and fundamental constants.
b. Assume that $d \ll r$. Give an approximation of your expression for the potential energy to lowest order in $d$. Rewrite this approximation in terms of only $p , r$, and fundamental constants.
c. What is the force (magnitude and direction) exerted on one dipole by the other? Continue to make the assumption that $d \ll r$, and again express your result in terms of only $p , r$, and fundamental constants.
d. What is the electric field near dipole B produced by dipole A? Continue to make the assumption that $d \ll r$ and express your result in terms of only $p , r$, and fundamental constants.

## Solution

a. There are two $+ q / - q$ pairs separated by a distance $d$, each having potential energy
$$
- \frac { q ^ { 2 } } { 4 \pi \epsilon _ { 0 } d }
$$
There are two $+ q / - q$ pairs separated by a distance $r$, each having potential energy
$$
- \frac { q ^ { 2 } } { 4 \pi \epsilon _ { 0 } r }
$$
There are a $+ q / + q$ pair and a $- q / - q$ pair separated by a distance $\sqrt { r ^ { 2 } + d ^ { 2 } }$, each having potential energy
$$
\frac { q ^ { 2 } } { 4 \pi \epsilon _ { 0 } \sqrt { r ^ { 2 } + d ^ { 2 } } }
$$

Note that the latter two terms go to zero as $r$ becomes large, whereas the first term is not dependent on $r$. Thus the given zero convention will include only the latter two terms,
$$
U = \frac { q ^ { 2 } } { 4 \pi \epsilon _ { 0 } } \left( - \frac { 2 } { r } + \frac { 2 } { \sqrt { r ^ { 2 } + d ^ { 2 } } } \right) .
$$
b. Rearranging the result above, we have
$$
U = \frac { 2 q ^ { 2 } } { 4 \pi \epsilon _ { 0 } r } \left( \frac { 1 } { \sqrt { 1 + \left( \frac { d } { r } \right) ^ { 2 } } } - 1 \right)
$$
Using the binomial approximation $( 1 + x ) ^ { n } \approx 1 + n x$,
$$
U \approx \frac { 2 q ^ { 2 } } { 4 \pi \epsilon _ { 0 } r } \left( 1 - \frac { 1 } { 2 } \left( \frac { d } { r } \right) ^ { 2 } - 1 \right) = - \frac { q ^ { 2 } d ^ { 2 } } { 4 \pi \epsilon _ { 0 } r ^ { 3 } } = - \frac { p ^ { 2 } } { 4 \pi \epsilon _ { 0 } r ^ { 3 } } .
$$
c. We can infer by symmetry that the force must point along the line separating the dipoles. Since the potential energy decreases with decreasing distance, the force is attractive. Its magnitude can be determined by taking the derivative of the potential energy:
$$
F = - \frac { d U } { d r } = - 3 \frac { p ^ { 2 } } { 4 \pi \epsilon _ { 0 } r ^ { 4 } }
$$
with the negative sign confirming that the force is attractive.
One can also use an approach analogous to the previous one, i.e. write down the force exactly and use a binomial approximation as above. One must take care to account for the fact that the force between like-signed charges is not exactly in the same direction as that between opposite-signed charges.
d. The electric field near dipole B produced by dipole A is directed approximately downward. Its magnitude is exactly
$$
E = \frac { q } { 4 \pi \epsilon _ { 0 } } \frac { 2 } { r ^ { 2 } + ( d / 2 ) ^ { 2 } } \sin \left( \frac { d } { 2 r } \right) .
$$
Using $d \ll r$ and the small angle approximation $\sin \theta \approx \theta$, we have
$$
E \approx \frac { p } { 4 \pi \epsilon _ { 0 } r ^ { 3 } }
$$
where we neglected all higher-order terms in $d / r$.
Note that at this level of accuracy, the force on dipole B would be exactly zero. In order to extend this calculation to get the answer to part c, we would have to account for the fact that the electric fields at the two charges in dipole B do not point exactly downward. This is a smaller effect than what we've found in this part, which is why the answer to part (c) falls off as $1 / r ^ { 4 }$ while the answer here falls off as $1 / r ^ { 3 }$.
