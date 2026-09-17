---
id: kevin-zhou-notes-phy-ex011
source: kevin-zhou-notes
native_id: "phy Example 011"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex011
topic: [classical mechanics, electromagnetism]
subtopic: [Hamiltonian mechanics, Poisson brackets]
math_tools: [calculus, linear algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "783-911"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. The Hamiltonian for a nonrelativistic particle in an electromagnetic field is

                                               (p − eA)2
                                          H=             − eϕ
                                                  2m
where p = mṙ + eA is the canonical momentum. We see that the Hamiltonian is numerically
unchanged by the addition of a magnetic field, reflecting the fact that magnetic fields do no work,
but the time evolution is affected, since the canonical momentum is different.
17 1. Classical Mechanics


   For a relativistic particle, we may carry out the same procedure for S1 , where the Lagrangian is
parametrized by proper time. The result is
                                        p
                                   H = m2 c2 + c2 (p − eA)2 + eϕ.

We can also try to treat the problem in a more covariant way, by regarding the four xµ (λ) as inde-
pendent and λ as the “time” parameter, and Legendre transforming the Lagrangian corresponding
to an arbitrary parametrization. However, the result is the trivial H = 0, which generally occurs
for reparametrization-invariant actions, and stems from the fact that the xµ (λ) only represent three
independent physical degrees of freedom. The Hamiltonian can be treated this way, but it requires
a more careful treatment of the constraints involved, as described in the notes on String Theory.

Note. Both of the Hamiltonians above could also be guessed by the minimal coupling prescription:
to incorporate an interaction with the electromagnetic field, we replace

                                          pµ → pµ − eAµ

which corresponds, in nonrelativistic notation, to

                                   E → E − eϕ,          p → p − eA.

In general, minimal coupling is a good first guess,
                                               R because it is the simplest Lorentz invariant option.
In field theory, it translates to adding a term dx J Aµ where J µ is the matter 4-current. However,
                                                    µ

we would need a non-minimal coupling to account for, e.g. the dipole moments of the particle.

Hamiltonian mechanics leads to some nice theoretical results.

  • Liouville’s theorem states that volumes of regions of phase space are constant. To see this,
    consider the infinitesimal time evolution
                                              ∂H                     ∂H
                                  qi → qi +       dt,    pi → pi −       dt.
                                              ∂pi                    ∂qi
    Then the Jacobian matrix is
                               I + (∂ 2 H/∂pi ∂qj )dt (∂ 2 H/∂pi ∂pj )dt
                                                                         
                       J=                                                   .
                                −(∂ 2 H/∂qi ∂qj )dt I − (∂ 2 H/∂qi ∂pj )dt

    Using the identity det(I + ϵM ) = 1 + ϵ tr M , we have det J = 1 by equality of mixed partials.

  • In statistical mechanics, we might have a phase space probability distribution ρ(q, p, t). The
    convective derivative dρ/dt is the rate of change while comoving with the phase space flow,

                                        ∂ρ   ∂ρ ∂H     ∂ρ ∂H
                                           =         −
                                        ∂t   ∂pi ∂qi   ∂qi ∂pi

    and Liouville’s theorem implies that dρ/dt = 0.

  • Liouville’s theorem holds even if energy isn’t conserved, as in the case of an external field. It
    fails in the presence of dissipation, where there isn’t a Hamiltonian description at all.
18 1. Classical Mechanics


 • Poincare recurrence states that for a system with bounded phase space, given an initial point
   p, every neighborhood D0 of p contains a point that will return to D0 in finite time.
      Proof: consider the neighborhoods Dk formed by evolving D0 with time kT for an arbitrary
      time T . Since the phase space volume is finite, and the Dk all have the same volume, we
      must have some overlap between two of them, say Dk and Dk′ . Since Hamiltonian evolution is
      reversible, we may evolve backwards, yielding an overlap between D0 and Dk−k′ .

 • As a corollary, it can be shown that Hamiltonian evolution is generically either periodic or
   fills some submanifold of phase space densely. We will revisit this below in the context of
   action-angle variables.

1.4     Poisson Brackets
The formalism of Poisson brackets is closely analogous to quantum mechanics.

 • The Poisson bracket of two functions f and g on phase space is defined as
                                                   X ∂f ∂g             ∂f ∂g
                                        {f, g} =                   −           .
                                                         ∂qi ∂pi       ∂pi ∂qi
                                                   i

      Geometrically, it is possible to associate g with a vector field Xg on phase space, and {f, g} is
      the rate of change of f along the flow of Xg .

 • The Poisson bracket is antisymmetric, linear, and obeys the product rule

                                         {f g, h} = f {g, h} + {f, h}g.

      It also obeys a chain rule: if f = f (hi ), then
                                                       X ∂f
                                            {f, g} =               {hi , g}.
                                                             ∂hi
                                                         i


 • Applying Hamilton’s equations, for any function f (p, q, t),
                                               df            ∂f
                                                  = {f, H} +
                                               dt            ∂t
      where the total derivative is a convective derivative, following the point (q(t), p(t)) as it time
      evolves. This result states that the flow associated with H is time translation.

 • If f (p, q) satisfies {H, f } = 0, then it corresponds to a symmetry of the system, because it yields
   a flow along which the Hamiltonian is invariant. And {H, f } vanishes if and only if {f, H}
   vanishes, which indicates that f is conserved under time evolution. This is the analogue of
   Noether’s theorem in Hamiltonian mechanics, linking symmetries and conservation laws.

 • The Poisson bracket satisfies the Jacobi identity,

                                  {f, {g, h}} + {g, {h, f }} + {h, {f, g}} = 0

      so the space of functions with the Poisson bracket is a Lie algebra. As a result, Lie brackets of
      conserved quantities are also conserved, so conserved quantities form a Lie subalgebra.
19 1. Classical Mechanics


  • The Poisson brackets of position and momentum are always

                                   {qi , qj } = 0,    {qi , pj } = δij ,   {pi , pj } = 0.

    The flow generated by momentum is translation along its direction, and vice versa for position.

