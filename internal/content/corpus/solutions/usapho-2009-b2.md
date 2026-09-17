---
id: usapho-2009-b2
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2009-b2
solution_type: official
source_document: solution-document-usapho-2009-s
source_pdf: cache/phoxiv/usapho/2009_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2009_S.pdf."
---

Question B2
An electric dipole consists of two charges of equal magnitude q and opposite sign, held rigidly apart
by a distance d. The dipole moment is defined by p = qd.
Now consider two identical, oppositely oriented electric dipoles, separated by a distance r, as
shown in the diagram.
r
A B
d d
a. It is convenient when considering the interaction between the dipoles to choose the zero of
potential energy such that the potential energy is zero when the dipoles are very far apart
from each other. Using this convention, write an exact expression for the potential energy of
this arrangement in terms of q, d, r, and fundamental constants.
b. Assume that d 
 r. Give an approximation of your expression for the potential energy
to lowest order in d. Rewrite this approximation in terms of only p, r, and fundamental
constants.
c. What is the force (magnitude and direction) exerted on one dipole by the other? Continue
to make the assumption that d 
 r, and again express your result in terms of only p, r, and
fundamental constants.
d. What is the electric field near dipole B produced by dipole A? Continue to make the assump-
tion that d 
 r and express your result in terms of only p, r, and fundamental constants.
Solution
a. There are two +q/−q pairs separated by a distance d, each having potential energy
−
q2
4π0d
There are two +q/−q pairs separated by a distance r, each having potential energy
−
q2
4π0r
There are a +q/+q pair and a −q/−q pair separated by a distance
√
r2 + d2, each having
potential energy
q2
4π0
√
r2 + d2
Copyright ©2009 American Association of Physics Teachers
2009 Semifinal Exam Part B 13
Note that the latter two terms go to zero as r becomes large, whereas the first term is not
dependent on r. Thus the given zero convention will include only the latter two terms,
U =
q2
4π0

−
2
r
+
2
√
r2 + d2

.
b. Rearranging the result above, we have
U =
2q2
4π0r

 1
q
1 + d
r
2
− 1

.
Using the binomial approximation (1 + x)n
≈ 1 + nx,
U ≈
2q2
4π0r
1 −
1
2

d
r
2
− 1
!
= −
q2d2
4π0r3
= −
p2
4π0r3
.
c. We can infer by symmetry that the force must point along the line separating the dipoles.
Since the potential energy decreases with decreasing distance, the force is attractive. Its
magnitude can be determined by taking the derivative of the potential energy:
F = −
dU
dr
= −3
p2
4π0r4
with the negative sign confirming that the force is attractive.
One can also use an approach analogous to the previous one, i.e. write down the force exactly
and use a binomial approximation as above. One must take care to account for the fact that
the force between like-signed charges is not exactly in the same direction as that between
opposite-signed charges.
d. The electric field near dipole B produced by dipole A is directed approximately downward.
Its magnitude is exactly
E =
q
4π0
2
r2 + (d/2)2
sin

d
2r

.
Using d 
 r and the small angle approximation sinθ ≈ θ, we have
E ≈
p
4π0r3
where we neglected all higher-order terms in d/r.
Note that at this level of accuracy, the force on dipole B would be exactly zero. In order to
extend this calculation to get the answer to part c, we would have to account for the fact
that the electric fields at the two charges in dipole B do not point exactly downward. This is
a smaller effect than what we’ve found in this part, which is why the answer to part (c) falls
off as 1/r4 while the answer here falls off as 1/r3.
Copyright ©2009 American Association of Physics Teachers
