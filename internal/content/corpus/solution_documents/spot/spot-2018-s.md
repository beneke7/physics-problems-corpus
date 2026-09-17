---
id: solution-document-spot-2018-s
source: spot
kind: official_examiner_report
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2018_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/spot/2018_S.pdf."
---

Singapore Physics Olympiad Training (SPOT) - Examiner’s report
for 2018 selection test
Zhiming Darren TAN
Garett Tok

March 26, 2018


1     Chain
1(a)(i) As d decreases, T0 decreases. The intuition is that the chain becomes more slack because the points
of attachment at the two ends, which hold up the entire chain, are more vertical.
1(a)(ii)                                               s                  2
                                             d2 y
                                                                 
                                                                     dy
                                           T0 2 = λg        1+
                                             dx                      dx
There are some tricks involved to do the derivation – look it up online if you’re having trouble.
1(a)(iii) Align the lowest point of the chain such that it lies on the y-axis (i.e. x = 0).
                                                            T0
                                                    a=
                                                            λg
and b is the result of subtracting a from the y-coordinate of the lowest point of the chain.
You just need to differentiate and then plug in this solution to the differential equation obtained in the
previous part. There is no need to solve the differential equation yourself.
1(b)(i)(α)
                                                   TC = λv 2
Some students ended up with an erroneous factor of half because of carelessness in thinking of the infinitesimal
angle as dθ or 2dθ.
1(b)(i)(β) The “turn” at the top is sharp, such that the centripetal acceleration is much greater than the
acceleration of free fall. Some students missed the point by saying v is large or r is small. Rather, the
interpretation lies in comparing accelerations or comparing forces (tension much larger than weight).
1(b)(ii) Rising branch
                                                λh2 g + TT = TC

Falling branch
                                            λ(h1 + h2 )g + TF = TC

Some students tried to include r in the expressions, despite how the figure was presented, which causes
unnecessary complications.
1(b)(iii)
                                                   TT = λv 2


                                                        1
Students who attempted to apply conservation of energy would have obtained an erroneous factor of half.
This situation is inherently dissipative, similar to sand falling on a conveyor belt, which is actually discussed
explicitly in the original journal article (see Biggins and Warner, 2014). Considering momentum change is
the way to go.
Some students also were confused and not neglecting infinitesimals appropriately or considering finite chain
lengths.
                                                     √
1(b)(iv) h2 = 0 (no chain fountain produced) and v = gh1 .
1(c)(i) With R = αTC , we have a modification of part (b)(iii) such that TT = (1 − α)λv 2 . We have

                                                 h2     α
                                                    =
                                                 h1   1−α−β
and
                                                 v2     1
                                                    =
                                                gh1   1−α−β

1(c)(ii) See that for h2 /h1 to be significant, we need α > 0 and β has less of an influence. We can say that
β ≈ 0 and then use the gradient of the graph plotted to solve for α ≈ 0.12.
1(d)(i) Generally not a problem for students because the equation is given, even if their analysis of dT and
dθ were not detailed and correct enough to proceed with the next part.
1(d)(ii)
                                               dθ                   dθ
                                           T      + λg sin θ = λv 2
                                               ds                   ds

1(d)(iii) For the equation in part (d)(ii), suppose we have a solution {T0 (s), θ0 (s)} for the case v = 0.
Then keeping the expression θ(s) = θ0 (s) unchanged and adding a constant throughout such that T (s) =
T0 (s) + λv 2 will be a solution for constant v 6= 0.
The shape of the curve is determined by θ(s) and so we expect this to be a hyperbolic cosine function, as
with the chain hanging in gravity. [We actually get an inverted curve because we can also invert the shape
and put θ(s) = −θ0 (s), since all terms in the equation of part (d)(ii) are odd functions of θ.]


2     Prism
2(a) There is a minimum angle, such that

                                                          n2g − n2w
                                            cos2 θ <
                                                       1 + n2g − 2nw

Many students did not simplify expressions sufficiently. Some students incorrectly identified the initial angle
of incidence as θ instead of π/2 − θ. Mistakes were also made in calculating the angle of incidence on the
bottom surface, and very careless mistakes also with mixing up the refractive indices (e.g. citing Snell’s law
as n1 sin θ2 = n2 sin θ1 ).
2(b)(i) Replace nw with unity in the previous expression, simplify it and deduce that there is no constraint
on θ.
2(b)(ii) Inverted. Ray tracing will give the answer (some students apparently just made guesses for this part
and the next without any justification). Some students discussed lateral inversion – good.
2(b)(iii) Right-side up for φ = π/2, inverted for φ = π.


                                                         2
3     van der Waals gas
3(a) Differentiate original equation with respect to V , then set dp/dV = 0. Assume that V > bN when taking
the square root. Some students came up with assumptions that were not actually used in their derivation.
3(b) Interpret left-hand expressions and right-hand expressions as functions of V . Solutions are the intersec-
tions of a linear expression (left-hand) and a V 3/2 curve, which vary because the coefficient of V 3/2 varies
with temperature. The linear expression does not shift. Students are expected to show explicitly how to get
0 solutions, 1 solution, 2 solutions in different cases.
Some students attempted to consider this as the roots of an equation cubic in V 1/2 , which is a bit trickier
to argue convincingly.
                               8a
3(c) V0 = 3bN and T0 = 27k       Bb
                                    . This is obtained after equating the gradients of the linear and V 3/2
expressions in the earlier part, as well as using the original van der Waals equation.
3(d) See Fig. 1 (slightly different definitions for a and b are at play, just modify the labels accordingly).
Note the number of times that dp/dV = 0 for the various temperatures. Be sure to label important points
whenever you are asked to make a sketch.
This part was successfully done only by a small number of students. Some students drew “isothermals” that
were extremely unphysical.




                            Figure 1: Sketch of isotherms for van der Waals gas


4     Charged sphere
4(a)(i)
                                                      2πr3 σ 2
                                                 U=
                                                        0

Students could either consider the work done in assembling the charged sphere, or integrating the energy of
the electric field over all space.
4(a)(ii)
                                                        σ2
                                                   p=
                                                        20



                                                      3
Some students made the mistake of assuming that σ is constant when differentiating F = −dU/dr. There
were even mistakes made in the definition of p as well, as the 4π factors seemed too temptingly nice to cancel.
4(b)(i) Some explanations involved too many leaps. The idea is to take a small square patch, pull it on all
four sides with the same force, then resolve the radial component and relate it to pressure.
4(b)(ii) 9.96 × 106 Nm−2
4(b)(iii) With N identical spheres of radius r, from part (a)(i) the energy stored goes as

                                                  U ∝ N r3 σ2

and the amount of metal used goes as N r2 .
Consider electrostatic breakdown and mechanical rupture scenarios separately.
We note that the electric field at the surface goes as E ∝ σ, so if electrostatic breakdown is the limiting
factor, we cap the allowed value of σ and see that increasing r at the expense of N gives us greater gain in
U relative to the amount of metal used. (Better to use a large sphere.)
If mechanical rupture is the limiting factor, from the working for part (b)(ii) we see that we must cap the
allowed value of σ 2 r, so the amount of energy stored scales in the same way as the amount of metal used.
(No difference in using a large sphere or several smaller spheres.)
Some students failed to structure their approach such that the comparison was fair – there was a need to
either keep the amount of metal used constant, or keep the amount of energy stored constant. There are a
lot of inter-related variables like σ and r at play here, so only by considering their combined effect would a
reasonable conclusion be reached.


5    Blackbody radiation
5(a)(i) Stationary waves in cavity, and use ε = hc/λ.
5(a)(ii) The 3d wave-vector is ~k = (kx , ky , kz ) and the energy of the photon is ε = ~ω, with ω = c|~k|. Get

                                                 hc
                                                      q
                                            ε=            n21 + n22 + n23
                                                 2L

5(b)(i) Note that expectation values are defined as
                                                         X
                                                 hri =         rP (r)

Several students wrote this as integrals even though r is a discrete variable, not a continuous variable. The
simplest approach is to differentiate the natural logarithm of the partition function (using the partition
function as a sum of terms as defined) with respect to the inverse temperature, and compare the expression
given with the expectation value of r.
5(b)(ii) Use the result of part (b)(i) and the expression for the partition function as an infinite geometric
sum.
5(c)(i) Use the substitution
                                                    ni hc
                                                   i =
                                                     2L
to convert the sum to an integral, which becomes exact in the limit of L → ∞.




                                                           4
The 3d integral over the octant where i > 0 can be conveniently performed in spherical coordinates due to
the symmetry of the integrand. Make the replacement
                                 Z ∞Z ∞Z ∞
                                                             1 ∞
                                                              Z
                                              d1 d2 d3 −→       4π2 d
                                  0   0    0                 8 0

and then substitute ν = /~ to get the expression

                                                  8πhν 3  1
                                           uν =
                                                    c3 eβhν − 1

5(c)(ii) Obtain the leading approximations in the small ν and large ν regimes respectively.


6    Bistable logic
                                                            1
6(a) Show that X normal and Y superconducting is stable if 12 < B0 /µ0 nV0 < 21 , but not for X and Y both
normal or both superconducting.
Some students discussed varying the voltages independently, which is not the setup drawn.
6(b) V0 between 1.59 V and 9.55 V.


7    Relativistic exam
7)                                                    s
                                                          1 − vc
                                                  T
                                                          1 + vc

Some students forgot that the light signal needed to travel back to Earth, or were not explicit enough and
ended up confused with the frames in which distances or times were measured.
A simple space-time diagram would have helped in visualising the sequence of events. Using notation
consistently would also help in organising the symbols used.




                                                          5
References
J. S. Biggins and M. Warner. Understanding the chain fountain. Proceedings of the Royal Society A:
  Mathematical Physical and Engineering Sciences, 470(2163):20130689–20130689, jan 2014. doi: 10.1098/
  rspa.2013.0689. URL https://doi.org/10.1098%2Frspa.2013.0689.




                                                  6
