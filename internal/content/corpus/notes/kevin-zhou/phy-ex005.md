---
id: kevin-zhou-notes-phy-ex005
source: kevin-zhou-notes
native_id: "phy Example 005"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex005
topic: [classical mechanics, special relativity]
subtopic: [relativistic particle, action principle]
math_tools: [calculus, special relativity]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "364-580"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. A free relativistic particle. Setting c = 1, it’s straightforward to check that
                                                 p
                                        L = −m 1 − v 2

yields the correct momenta p = γmv, and the Euler–Lagrange equations say that p is constant.
Furthermore, expanding the square root at leading order gives L = −m + mv 2 /2 + O(v 4 ), which is
the usual free particle Lagrangian up to a constant.
   The deeper reason that this is the correct Lagrangian is that it makes the action Lorentz invariant,
                                            Z            Z
                                       S = L dt = −m dτ.


Thus, the principle of least action corresponds to the maximization of proper time. In relativity, it’s
really the action that’s fundamental; the Lagrangian follows from choosing a particular parametriza-
tion of the action integral. Thus, we can derive the equations of motion in a more covariant way by
choosing a general parametrization xµ (λ) of the particle’s path, and defining
                                           Z
                                      S = L(xµ (λ), ẋµ (λ)) dλ

where a dot denotes a derivative with respect to λ. Since the action is reparametrization invariant,
the Lagrangian must be a homogeneous function of degree 1 with respect to ẋµ (λ). Thus, Euler’s
theorem on homogeneous functions implies the restriction
                                                 ∂L
                                           ẋµ         − L = 0.
                                                 ∂ ẋµ
There are four Euler–Lagrange equations,
                                          ∂L     d ∂L
                                            µ
                                              −          = 0.
                                          ∂x    dλ ∂ ẋµ
However, only three are independent, because for any path xµ (λ),

                                                                           dẋµ ∂L

                      µ   ∂L   d ∂L           µ ∂L     d        µ ∂L
                   ẋ        −           = ẋ      −         ẋ          +
                          ∂xµ dλ ∂ ẋµ         ∂xµ dλ            ∂ ẋµ     dλ ∂ ẋµ

                                            d            ∂L
                                         =       L − ẋµ µ
                                           dλ            ∂ ẋ

by the restriction above. In the case of the free particle, we have
                                                 p
                                        L = −m −ηµν ẋµ ẋν

and the corresponding conserved momenta are mẋµ / −ηµν ẋµ ẋν . As expected, one of the equations
                                                     p

is redundant since the four-momentum has fixed norm. We recover our earlier Lagrangian by setting
λ = t. Of course, given that this example is somewhat trivial, there are many other ways of setting
it up. For example, one can specialize to parametrizing by proper time, or introduce an einbein
(discussed in the notes on String Theory), which has the benefit of removing the square root.

Note. How can we describe interacting relativistic particles? The first point to make is that, even
for two particles, you can’t simply add some potential term V (r1 , r2 ). To see the problem, consider
two identical charged particles approaching each other, with equal and opposite momenta. The
particles repel by the Coulomb force, momentarily come to rest, and then move apart. Now, if
you consider the same situation in a moving frame, the loss of simultaneity effect implies that one
particle will decelerate before the other, so that four-momentum is not conserved during the process!
   Elementary treatments of special relativity don’t run into this problem because they only apply
four-momentum conservation long before and after the process, neglecting what happens during
the collision. For our purposes, it means we cannot have particles interacting at a distance in
special relativity, a fact sometimes called the van Dam–Wigner no interaction theorem. We can
only have contact interactions between particles, or local interactions between particles and fields.
(Though, to be fair, even though there are various no-go theorems, you can still construct relativistic
multiparticle dynamics if you give up some cherished properties, as described here.)


  Here we will focus on the simpler task of coupling a particle to a background field. An obvious
way is to just add on a potential energy term,
                                             p
                                     L = −m 1 − v 2 − V (r).

This is good enough for simple problems, like treating a relativistic particle in a weak gravitational
or electric field, but it’s not very satisfying because it’s not Lorentz invariant; it only makes sense
in the rest frame of whatever is sourcing the field. There are essentially three ways to modify this
to get a Lorentz invariant action. First, for a scalar field, we can set
                                                 Z
                                          S0 = − dτ (m + gϕ).

Second, we can extend the potential to a vector field, giving
                                            Z         Z
                                 S1 = −m dτ + e Aµ dxµ

and yielding the theory of electromagnetism; parametrizing by time recovers the action given above.
Finally, we can note that it would have been equivalent, at leading order, to pull the potential term
inside the square root, giving
                                         Z s
                                                    2V
                                 S = −m        1+         dt2 − dr2 .
                                                    m

The simplest covariant generalization of this action is to promote V to a tensor field, giving
                                              Z
                                                 p
                                    S2 = −m        −gµν dxµ dxν

for a general metric gµν . This yields geodesic motion in general relativity! In the nonrelativistic
limit, gµν = ηµν + hµν for small hµν , and h00 /2 becomes the gravitational potential. In addition,
the fact that the metric is inside the square root implies that there’s no room to include a separate
coupling constant for each kind of particle, which leads to the equivalence principle.

Note. Why couldn’t gravity have been described by a vector field Aµ , like electromagnetism is?
The fundamental reason is that electromagnetic fields are sourced by the current four-vector j µ ,
which couples to the field as Aµ jµ . By contrast, gravitational fields are sourced by stress-energy
T µν , which is rank 2 rather than rank 1.
    In the nonrelativistic limit, most of the elements of the stress-energy tensor are negligible; all
that matters is the matter current j µ = T µ0 ≈ (ρ, ρv). In that case, one can build a theory of
gravity in terms of vector fields called gravitoelectromagnetism, which is formally very similar to
ordinary electromagnetism. It’s not Lorentz invariant because its j µ is not truly a four-vector, but
it’s a very useful approximation to general relativity in certain limits.

Note. More about the equations of motion. In the case of S1 , the simplest equations of motion follow
from parametrizing by proper time and writing things in terms of the four-velocity uµ = dxµ /dτ ,
giving four-force
                                            duµ
                                    fµ = m       = eF µν uν .
                                             dτ


If we wish to consider backreaction, i.e. the effect of the particle on the field, its current is
                                                    dxµ
                                             Z
                                   µ
                                  j (x) = e dτ          δ(x − x(τ ))
                                                     dτ
which goes into the right-hand side of Maxwell’s equations as usual. As for S2 , the equation of
motion is the geodesic equation shown above, though getting rid of the square root requires a trick
described in the notes on General Relativity. The odd one out is the scalar field action S0 , which
is less familiar than the other two. The Euler–Lagrange equations for general parametrization are
                                                  !
                              d   (m + gϕ)ẋµ
                                                    = −g(∂ µ ϕ) −ηνρ ẋν ẋρ .
                                                               p
                                  p
                             dλ             ν
                                     −ηνρ ẋ ẋ ρ


Again, the final result is simplest when parametrizing by proper time, giving
                                              g
                                fµ = −              (∂ µ ϕ + uµ uν ∂ν ϕ).
                                         1 + (g/m)ϕ

The function of ϕ in the denominator is not particularly important, Rbecause we could have made it
anything we wanted, by choosing a more general interaction term − dτ f (ϕ). The tensor structure
in parentheses ensures that uµ f µ = 0, so that the force doesn’t change the rest mass of the particle.
Historically, the first proposed relativistic theories of gravity were based on scalar fields, since they
are the simplest possibility, but they were soon discarded because general relativity fit the data
better. For more on this subject, see the notes on General Relativity.

Note. Consider a system with a generalized coordinate we call q, along with other unspecified
coordinates. The Lagrangian can depend on q and q̇ in several special ways.

   1. It depends on q but not q̇. In this case, there’s no “cost” to changing q in time, so at every
      moment, it’s set to whatever value yields ∂L/∂q = 0, which is a constraint on the other
      variables. If desired, we can eliminate q by plugging this constraint back into the action. In
      field theory, such a variable is called an auxiliary field. In optimization problems, we set up
      L ⊃ qf with no endpoint constraints on q, and q is called a Lagrange multiplier for f .

   2. It depends on q̇ but not q. In this case, the action is invariant under a constant shift of q,
      q → q + a, and ∂L/∂ q̇ is conserved when the equations of motion hold. Noether’s first theorem
      tells us that in general, these two things always occur together: global symmetries of the
      action correspond to on-shell conserved quantities.

   3. It doesn’t depend on q or q̇. In this case, the action is invariant under an arbitrary shift
      of q, q(t) → q(t) + a(t). And the Euler–Lagrange equation for q gives no information, so
      the solution for q(t) is completely arbitrary. The correct physical interpretation is that q is
      a gauge variable, i.e. a redundancy of description rather than a genuine physical quantity.
      Noether’s second theorem tells us that in general, these two things always occur together:
      gauge symmetries of the action correspond to redundant Euler–Lagrange equations, which
      underdetermine the evolution.

These are the simplest possible examples of Noether’s two theorems, though of course, the theorems
themselves were much deeper. Noether considered the case of an arbitrary number of spacetime
fields and an action depending on arbitrary numbers of derivatives.


1.2     Rigid Body Motion
We begin with the kinematics of rigid bodies.
  • A rigid body is a collection of masses constrained so that ∥ri − rj ∥ is constant for all i and j.
    Then a rigid body has six degrees of freedom, from translations and rotations.
  • If we fix a point to be the origin, we have only the rotational degrees of freedom. Define a fixed
    coordinate system {ea } as well as a moving body frame {ea (t)} which moves with the body.
    Both sets of axes are orthogonal and thus related by an orthogonal matrix,
                                     ea (t) = Rab (t)eb (t),             Rab = ea · e
                                                                                    eb .
      Since the body frame is specified by R(t), the configuration space C of orientations is SO(3).
  • Every point r in the body can be expanded in the space frame or the body frame as
                                            r(t) = rea (t)ea = ra ea (t).
      Note that the body frame changes over time as

                                      dea   dRab                     dR −1
                                          =      eb =
                                                 e                      R                  eb
                                       dt    dt                      dt               ab

      This prompts us to define the matrix ω = ṘR−1 , so that ėa = ωab eb .
  • The matrix ω is antisymmetric, so we take the Hodge dual to get the angular velocity vector
                                               1
                                        ωa = ϵabc ωbc , ω = ωa ea .
                                               2
      Inverting this relation, we have ωa ϵabc = ωbc . Substituting into the above,
                                            dea
                                                = −ϵabc ωb ec = ω × ea
                                             dt
      where we used (ea )d = δad .
  • The above is just a special case of the formula
                                                      v = ω×r
      which can be derived from simple vector geometry. Using that picture, the physical interpretation
      of ω is n̂ dϕ/dt, where n̂ is the instantaneous axis of rotation and dϕ/dt is the rate of rotation.
      Generally, both n̂ and dϕ/dt change with time.
