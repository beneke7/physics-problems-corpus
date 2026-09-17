---
id: kevin-zhou-notes-phy-ex010
source: kevin-zhou-notes
native_id: "phy Example 010"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex010
topic: [classical mechanics]
subtopic: [asymmetric top, Hamiltonian formalism]
math_tools: [differential equations, linear algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: true
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "710-782"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. The asymmetric top. If all of the Ii are unequal, the Euler equations are much more
difficult to solve. Instead, we can consider the effect of small perturbations. Suppose that
                                     ω1 = Ω + η1 ,      ω2 = η2 ,     ω3 = η3 .
To first order in η, the Euler equations become
                       I1 η̇1 = 0,    I2 η̇2 = Ωη3 (I3 − I1 ),      I3 η̇3 = Ωη2 (I1 − I2 ).
Combining the last two equations, we have
                                                  Ω2
                                       I2 η̈2 =      (I3 − I1 )(I1 − I2 )η2 .
                                                  I3
Therefore, we see that rotation about e1 is unstable iff I1 is in between I2 and I3 . An asymmetric
top rotates stably only about the principal axes with largest and smallest moment of inertia.
Note. We can visualize the Euler equations with the Poinsot construction. In the body frame, we
have conserved quantities
                        2T = I1 ω12 + I2 ω22 + I3 ω32 ,     L2 = I12 ω12 + I22 ω22 + I32 ω32
defining two ellipsoids. The first ellipsoid is called the inertia ellipsoid, and its intersection with the
L2 ellipsoid gives the polhode curve, which contains possible values of ω.




An inertia ellipsoid with some polhode curves is shown above. Since polhode curves are closed, the
motion is periodic in the body frame. This figure also gives an intuitive proof of the intermediate axis
theorem: polhodes are small loops near minima and maxima of L2 , but not near the intermediate
axis, which corresponds to a saddle point.
Note. The space frame is more complicated, as our nice results for the symmetric top no longer
apply. The only constraint we have is that L · ω is constant, which means that ω must lie on a
plane perpendicular to L called the invariable plane. We imagine the inertial ellipsoid as an abstract
object embedded inside the top.
16 1. Classical Mechanics


Since L = ∂T /∂ ω, L is perpendicular to the inertial ellipsoid, which implies that the invariable
plane is tangent to the inertial ellipsoid. We can thus imagine this ellipsoid as rolling without
slipping on the invariable plane, as shown above. The angular velocity traces a path on this plane
called the herpolhode curve, which is not necessarily closed.

1.3     Hamiltonian Formalism
 • Hamiltonian mechanics takes place in phase space, and we switch from (q, q̇) to (q, p) by
   Legendre transformation. Specifically, letting F be the generalized force, we have

                                              dL = F dq + p dq̇

      and so taking H = pq̇ − L switches this to

                                             dH = q̇ dp − F dq.

      In the language of thermodynamics, the Lagrangian and Hamiltonian have “natural” arguments
      L = L(q, q̇) and H = H(q, p), because their total differentials are very simple in these variables.
      (However, note that in order to write H in terms of q and p, we must be able to eliminate q̇ in
      favor of p, which is generally only possible if L is convex in q̇.)

 • From this, we read off Hamilton’s equations,
                                                     ∂H              ∂H
                                           ṗi = −       ,   q̇i =       .
                                                     ∂qi             ∂pi
      The explicit time dependence just comes along for the ride, giving
                                             dH    ∂H    ∂L
                                                 =    =−
                                              dt   ∂t    ∂t
      where the first equality follows from Hamilton’s equations and the chain rule.

 • We may also derive Hamilton’s equations by minimizing the action
                                          Z
                                      S = (pi q̇i − H) dt.

                                                                                                 ˙
      In this context, the variations in pi and qi are independent. However, as before, δ q̇ = (δq).
      Plugging in the variation, we see that δq must vanish at the endpoints to integrate by parts,
      while δp doesn’t have to, so our formulation isn’t totally symmetric.

 • When L is time-independent with L = T − V , and L is a quadratic homogeneous function in q̇,
   we have pq̇ = 2T , so H = T + V . Then the value of the Hamiltonian is the total energy.

