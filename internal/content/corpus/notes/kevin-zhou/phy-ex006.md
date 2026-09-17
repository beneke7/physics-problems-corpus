---
id: kevin-zhou-notes-phy-ex006
source: kevin-zhou-notes
native_id: "phy Example 006"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex006
topic: [classical mechanics, rigid-body motion]
subtopic: [rotation matrices, inertia tensor]
math_tools: [linear algebra, vector calculus]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "581-679"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. To get an explicit formula for R(t), note that Ṙ = ωR. The naive solution is the
exponential, but since ω doesn’t commute with itself at different times, we must use the path
ordered exponential,                        Z                  t
                                      R(t) = P exp                   ω(t′ )dt′ .
                                                             0
For example, the second-order term here is
                                  Z t′′ Z t                         
                                                        ′′   ′′
                                                     ω(t ) dt            ω(t′ ) dt′
                                        0       t′
where the ω’s are ordered from later to earlier. Then when we differentiate with respect to t, it
only affects the dt′′ integral, which pops out a factor of ω on the left as desired. This exponential
operation relates rotations R in SO(3) with infinitesimal rotations ω in so(3).
13 1. Classical Mechanics


We now turn from kinematics to dynamics.

 • Using v = ω × r, the kinetic energy is
                        1X         1X                 1X
                           mi v2 =    mi ∥ω × ri ∥2 =    mi ω 2 ri2 − (ri · ω)2 .
                                                                               
                  T =
                        2          2                  2
    This implies that
                                                   1
                                                T = ωa Iab ωb
                                                   2
    where Iab is the symmetric tensor
                                            X
                                                mi ri2 δab − (ri )a (ri )b
                                                                             
                                    Iab =
                                            i

    called the inertia tensor. Note that since the components of ω are in the body frame, so are
    the components of I and ri that appear above; hence the Iab are constant.

 • Explicitly, for a continuous rigid body with mass density ρ(r), we have
                                            2
                                             y + z2
                                                                      
                                 Z                     −xy      −xz
                            I = d3 r ρ(r)  −xy      x2 + z 2   −yz  .
                                              −xz      −yz     x + y2
                                                                2


 • Since I is symmetric, we can rotate the body frame to diagonalize it. The eigenvectors are
   called the principal axes and the eigenvalues Ia are the principal moments of inertia. Since T
   is nonnegative, I is positive semidefinite, so Ia ≥ 0.

 • Parallel axis theorem states that if I0 is the inertia tensor about the center of mass, the inertia
   tensor about the point c is

                                   (Ic )ab = (I0 )ab + M (c2 δab − ca cb ).

    The proof is similar to the two-dimensional parallel axis theorem, with contributions proportional
       P
    to   mi ri vanishing. The extra contribution the inertia tensor we would get if the object’s
    mass was entirely at the center of mass.

 • Similarly, the translational and rotational motion of a free spinning body ‘factorize’. If the
   center of mass position is R(t), then
                                           1       1
                                        T = M Ṙ2 + ωa Iab ωb .
                                           2       2
    This means we can indeed ignore the center of mass motion for dynamics.

 • The angular momentum is
                  X                  X                     X
               L=     m i r i × vi =   mi ri × (ω × ri ) =   mi (ri2 ω − (ω · ri )ri ).

   We thus recognize
                                                    1
                                               T = ω · L.
                                         L = I ω,
                                                    2
    For general I, the angular momentum and angular velocity are not parallel.
14 1. Classical Mechanics


  • To find the equation of motion, we use dL/dt in the center of mass frame, for

                                      dLa         dea   dLa
                                0=        ea + La     =     ea + La ω × ea .
                                       dt          dt    dt

    Dotting both sides by eb gives 0 = L̇a + ϵaij ωI Lj . In the case of principle axes (L1 = I1 ω1 ),

                                           I1 ω̇1 + ω2 ω3 (I3 − I2 ) = 0

    along with cyclic permutations thereof. These are Euler’s equations. In the case of a torque,
    the components of the torque (in the principle axis frame) appear on the right.

We now analyze the motion of free tops. We consider the time evolution of the vectors L, ω, and
e3 . In the body frame, e3 is constant and points upward; in the space frame, L is constant, and for
convenience we take it to point upward. In general, we know that L and 2T = ω · L are constant.

