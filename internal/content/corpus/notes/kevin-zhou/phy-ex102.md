---
id: kevin-zhou-notes-phy-ex102
source: kevin-zhou-notes
native_id: "phy Example 102"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex102
topic: [quantum-mechanics]
subtopic: [Green-functions-and-scattering]
math_tools: [complex-analysis, differential-equations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "14781-14948"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. The free particle Green’s functions G0± (x, x′ , E) in three dimensions. Setting z = E +iϵ,
                                                                                                             ′
                                                                                              dp eip·(x−x )/ℏ
                                           Z                                            Z
          ′                  −1       ′              ′           1
 G0+ (x, x , z) = ⟨x|(z − H0 )    |x ⟩ =       dp dp ⟨x|p⟩⟨p|        |p′ ⟩⟨p′ |x′ ⟩ =                         .
                                                              z − H0                        (2πℏ)3 z − p2 /2m


To simplify, we set x′ = 0 for simplicity, by translational invariance, let p = ℏq, and let z = E + iϵ =
ℏ2 w2 /2m for a complex wavenumber w (so that w is the first quadrant), giving
                                                                              Z ∞
                                               eiq·x                                              qeiqx
                                      Z
                             1 2m                          1 2m i
            G0+ (x, z) = −                 dq 2        =                                dq
                           (2π)3 ℏ2          q −w    2   (2π)2 ℏ2 x                −∞        (q − w)(q + w)

where we performed the angular integration. To do the final integral, we close the contour in the
upper-half plane, picking up the q = w pole. Then

                                                         1 2m eiwx
                                      G0+ (x, z) = −               .
                                                        4π ℏ2 x
The incoming Green’s function is similar, but now we choose the branch of the square root so that
w lies in the fourth quadrant, so we pick up the q = −w pole instead, giving e−iwx . Converting
back to wavenumbers, we have
                                                  (
                                            1 2m e±ikx /x, E ≥ 0,
                            G0± (x, E) = −
                                           4π ℏ2 e−κx /x, E ≤ 0
                              √
where the quantities k, κ ∼ ±E are all real and positive. By taking this choice of branches, we
have ensured that G0± is continuous across the negative real axis, but as a result it is discontinuous
across the positive real axis, as expected.

12.4    The Lippmann–Schwinger Equation
Green’s functions provide a powerful general formalism for scattering problems. Below we focus on
potential scattering, though the same techniques work in many contexts, such as field theories.

  • We are interested in solutions to the driven time-independent Schrodinger equation

                                          (E − H0 )ψ(x) = V (x)ψ(x)

    where E > 0, and have shown that solutions can be written as
                                          Z
                           ψ(x) = ϕ(x) + dx′ G0 (x, x′ , E)V (x′ )ψ(x′ )

    where ϕ(x) solves the homogeneous equation (i.e. free particle with energy E).

  • Since we are interested in scattering solutions, we take the outgoing Green’s function G0+ and let
    the homogeneous solution be an incoming plane wave |ϕk ⟩ = |k⟩, which satisfies E = ℏ2 k 2 /2m.
    This yields the Lippmann–Schwinger equation. In terms of kets, it reads

                                          |ψk ⟩ = |ϕk ⟩ + Ĝ0+ (E)V |ψk ⟩

    We add the subscript k to emphasize that the solution depends on the choice of k, not just on
    E, as it tells us which direction the particles are launched in. In terms of wavefunctions,

                                             1 2m
                                                       Z              ik|x−x′ |
                                                                ′ e
                          ψk (x) = ϕk (x) −                dx                     V (x′ )ψk (x′ ).
                                            4π ℏ2                |x − x′ |


 • There are many variations on the Lippmann–Schwinger equation. For example, in proton-
   proton scattering V is the sum of a Coulomb potential and the nuclear potential. Then we
   might include the Coulomb term in H0 , so that the incoming wave would be a Coulomb solution
   of positive energy, and we would use Green’s functions for the Coulomb potential.

 • Now suppose that the potential cuts off after a finite radius, and we observe the scattering at a
   much larger radius r = |x|. Then x′ ≪ r in the integral above, and we may expand in a power
   series in x′ /r, throwing away all terms falling faster than 1/r, giving

                                           1 2m eikr
                                                                Z
                                                                              ′   ′
                        ψk (x) ≈ ϕk (x) −                           dx′ e−ik ·x V (x′ )ψk (x′ ).
                                          4π ℏ2 r
    In particular, this matches the ‘incident plus scattered’ form of the wavefunction postulated in
    the beginning of this section, with scattering amplitude

                                 (2π)3/2 2m                                           4π 2 m ′
                                              Z
                                                           ′    ′
                f (k, k′ ) = −                    dx′ e−ik ·x V (x′ )ψk (x′ ) = −           ⟨k |V |ψk ⟩.
                                   4π ℏ2                                               ℏ2
    Thus we have proven that the wavefunction must have such a form in general. We can also
    prove a similar statement for rapidly decaying potentials, but it fails for the Coulomb potential.

 • We can also use the incoming Green’s function; this describes a solution where waves come in
   from infinity and combine to come out as a plane wave. Since the outgoing solution is much
   more realistic, we focus on it and may leave the plus sign implicit.

 • Finally, when E < 0, we get an integral expression for bound states,
                                                                          ′
                                                                e−κ|x−x |
                                                      Z
                                               1 2m
                                 ψ(x) = −                 dx′              V (x′ )ψ(x′ )
                                              4π ℏ2              |x − x′ |

    where there is no homogeneous term, because free particle solutions do not decay at infinity.
    Solutions only exist for discrete values of E. There is also no choice in Green’s function as both
    agree on the negative real axis.

We can use the Lippmann–Schwinger equation to derive a perturbation series for scattering, called
the Born series.

 • We may rewrite the Lippmann–Schwinger equation in the form

                                          |k⟩ = (1 − G0+ (E)V )|ψk ⟩

    which has the formal solution

                            |ψk ⟩ = Ω+ (E)|k⟩,         Ω+ (E) = (1 − G0+ (E)V )−1

    where Ω+ (E) is called the Moller scattering operator. Similarly we may define an incoming
    form Ω− (E) and a general operator Ω(z) with complex energy and

                           Ω(z) = (1 − G0 (z)V )−1 ,            Ω± (E) = lim Ω(E ± iϵ).
                                                                              ϵ→0


  • Expanding in a series in V gives the Born series,

                                Ω(z) = 1 + G0 (z)V + G0 (z)V G0 (z)V + . . .

    which explicitly gives

                        |ψk ⟩ = |k⟩ + G0+ (E)V |k⟩ + G0+ (E)V G0+ (E)V |k⟩ + . . . .

    Substituting this into the expression for the scattering amplitude gives
                                         4π 2 m   ′
                        f (k, k′ ) = −           ⟨k |V |k⟩ + ⟨k′ |V G0+ (E)V |k⟩ + . . . .

                                          ℏ 2

    When we truncate these series at V n , we get the nth Born approximation. The Born series can
    also be derived by plugging the Lippmann–Schwinger equation into itself.

  • The first Born approximation recovers our first-order result from time-dependent perturbation
    theory: the scattering amplitude is proportional to the Fourier transform of the potential. In
    general, the Dyson series (from time-dependent perturbation theory) is very similar to the Born
    series. They both expand in powers of V , but in the time/energy domain respectively.

  • We can also phrase the results in terms of the exact Green’s operator
                                                            1
                                                 G(z) =        .
                                                           z−H
    Playing around and suppressing the z argument, we have

                                      G = G0 + G0 V G = G0 + GV G0

    which are Lippmann–Schwinger equations for G. This gives the exact Green’s function as a
    series in the number of scatterings off the potential.

  • By playing around some more, we find

                                    Ω = 1 + GV,        |ψk ⟩ = (1 + GV )|k⟩.

    In this picture, a scattering process occurs through an initial scattering, then propagation by
    the exact Green’s function.

