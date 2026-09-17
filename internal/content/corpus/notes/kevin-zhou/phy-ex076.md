---
id: kevin-zhou-notes-phy-ex076
source: kevin-zhou-notes
native_id: "phy Example 076"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex076
topic: [quantum-physics]
subtopic: [path-integrals, operator-ordering]
math_tools: [linear-algebra, calculus]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "8923-9010"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Operator ordering in the path integral. At the quantum level, operators generally do not
commute, and their ordering affects the physics. But all the variables in the path integral appear
to commute. It turns out that the operator ordering is determined by the discretization procedure.
For example, for a particle in an electromagnetic field, the correct phase factor is
                                                                                         
                     N −1                 2                                           
                  iϵ X      m(x j+1 − x j )    q x j+1 − x j      x j+1 + x j
           exp                              +               ·A                 − V (xj ) 
                  ℏ              2ϵ2           c      ϵ                2
                     j=0

where V is evaluated as usual at the initial point, but A is evaluated at the midpoint. One can
show this is the right choice by expanding order by order in ϵ as we did before. While the evaluation
point of V doesn’t matter, the evaluation point of A ensures that the path integral describes a
Hamiltonian with term p · A + A · p.
    Naively, the evaluation point can’t matter because it makes no difference in the continuum limit.
The issue is that the path integral paths are not differentiable, as we saw earlier, with ξ = O(ϵ1/2 )
instead of ξ = O(ϵ). The midpoint evaluation makes a difference at order O(ξ 2 ) = O(ϵ), which
is exactly the term that matters. This subtlety is swept under the rug in the casual, continuum
notation for path integrals.
    In general there are various prescriptions for operator ordering, including normal ordering (used
in quantum field theory) and Weyl ordering, which heuristically averages over all possible orders.
However, we won’t encounter any other Hamiltonians below for which this subtlety arises.

 Note. If we take the path integral as primary, we can even use it to define the Hilbert space, by
“cutting it open”. Note that by the product property of the path integral,
                                       Z            Z x(t′ )=x′               Z x(t)=xf
                                                ′                        iS
                    K(xf , x0 , t) =       dx                     Dx(τ ) e                 Dx(τ ) eiS .
                                                     x(0)=x0                   x(t′ )=x′

The extra dx′ integral produced is an integral over the Hilbert space of the theory. In a more
           R

general setting, such as string theory, we can “cut open” the path integral in different ways, giving
different Hilbert space representations of a given amplitude. This is known as world-sheet duality.
166 7. Angular Momentum


7      Angular Momentum
7.1     Classical Rotations
First, we consider rotations classically.

    • Physical rotations are operators R that take spatial points to spatial points in an inertial
      coordinate system, preserving lengths and the origin.
    • By taking coordinates, r = xi êi , we can identify every spatial point with a 3-vector. As a result,
      we can identify rotation operators R with 3 × 3 rotation matrices Rij . Under a rotation r′ = Rr,
      we have x′i = Rij xj .
    • We distinguish the physical rotations R and the rotation matrices R. The latter provide a
      representation of the former.
    • It’s also important to distinguish active/passive transformations. We prefer the active viewpoint;
      the passive viewpoint is tied to coordinate systems, so we can’t abstract out to the geometric
      rotations R.
    • Using the length-preserving property shows Rt = R−1 , so the group of rotations is isomorphic
      to O(3). From now on we specialize to proper rotations, with group SO(3). The matrices R
      acting on R3 form the fundamental representation of SO(3).
    • Every proper rotation can be written as a rotation of an angle θ about an axis n̂, R(n̂, θ).
                                                           Q
      Proof: every rotation has a unit eigenvalue because λi = 1 and |λi | = 1. The corresponding
      eigenvalue is the axis. (Note that this argument fails in higher dimensions.)
    • Working in the fundamental representation, we consider the infinitesimal elements R = I + ϵA.
      Then we require A + At = 0, so the (fundamental representation of the) Lie algebra so(3)
      contains antisymmetric matrices. One convenient basis is
                                                     (Ji )jk = −ϵijk
      and we write an algebra element as A = a · J.
    • Using the above definition, we immediately find
                                              (Ji Jj )jk = δil δkj − δij δkl
      which gives the commutation relations
                                 [Ji , Jj ] = ϵijk Jk ,     [a · J, b · J] = (a × b) · J.

    • We also immediately find that for an arbitrary vector u,
                                                          Au = a × u
      Physically, we can picture a as specifying an angular velocity and Au as the resulting velocity
      of u. This also shows that an infinitesimal axis-angle rotation is
                                          R(n̂, θ) = I + θn̂ · J,        θ ≪ 1.
      Exponentiating gives the result
                                                R(n̂, θ) = exp(θn̂ · J).
167 7. Angular Momentum


  • More generally, the set of infinitesimal elements of a Lie group is a Lie algebra, and we go
    between the two by taking exponentials, or differentiating paths through the origin (to get
    tangent vectors).

   A group acts on itself by conjugation; this is called the adjoint action. The Lie algebra is closed
under this operation, giving an action of the group on the algebra. Viewing the algebra as a vector
space, this gives a representation of the Lie group on V = g called the adjoint representation.

