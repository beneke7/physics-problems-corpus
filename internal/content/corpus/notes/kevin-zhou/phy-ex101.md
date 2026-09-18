---
id: kevin-zhou-notes-phy-ex101
source: kevin-zhou-notes
native_id: "phy Example 101"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex101
topic: [quantum-mechanics]
subtopic: [Green-functions]
math_tools: [complex-analysis, differential-equations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "14589-14780"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. In the case of a time-independent Hamiltonian, we will replace the arguments t and t′
with one argument, t for the time difference. For example, for a free particle in three dimensions,

                                                          i m(x − x′ )2
                                            m  3/2
                                  ′
                          K0 (x, x , t) =           exp
                                           2πiℏt          ℏ     2t

as we found in the section on path integrals.

Next, we turn to energy-dependent Green’s functions, which are essentially the Fourier transforms
of time-dependent ones.


 • We consider the inhomogeneous time-dependent Schrodinger equation,

                                           (E − H)ψ(x) = S(x)

    where H is a time-independent Hamiltonian. An energy-dependent Green’s function G(x, x′ , E)
    satisfies this equation with energy E and source δ(x − x′ ).

 • Given an energy-dependent Green’s function, the general solution is
                                            Z
                            ψ(x) = ψh (x) + dx G(x, x′ , E)S(x′ ).

    Note that the homogeneous solution ψh (x) is simply a stationary state with energy E.

 • We imagine the energy-dependent Green’s functions as follows. We consider a lake with finite
   area which is quiet for t < 0. At t = 0, we begin driving a point x′ sinusoidally with frequency
   E. After a long time, the initial transients die out by dissipation and the surface approaches a
   sinusoidally oscillating steady state; this is G(x, x′ , E).

 • If we drive exactly at an eigenfrequency of a lake, the corresponding eigenmode has a high
   amplitude which goes to infinity as the dissipation ϵ → 0, so the Green’s function does not exist
   without dissipation.

 • Finally, we can consider driving at an eigenfrequency in a continuous spectrum. This is only
   realizable in an infinite lake, as the corresponding eigenmodes are unbounded. We find a wave
   field with size 1/ϵ, where energy continually radiates out from the driving point x′ . In the limit
   ϵ → 0 the wave field becomes infinite, and we see that energy is transported out to infinity.
   However, this wave pattern is not an eigenfunction because eigenfunctions have zero net energy
   flux through any closed boundary.

 • We can recast the energy-dependent Green’s function as an operator,

                           G(x, x′ , E) = ⟨x|Ĝ(E)|x′ ⟩,          (E − H)Ĝ(E) = 1.

    Then naively we have the solution Ĝ(E) = 1/(E − H), but this is generally not well defined.
    As usual, the ambiguity that exists comes from freedom in the boundary conditions.

 • Note that we are not explicitly distinguishing the operator H, which acts on the Hilbert space,
   and the coordinate form of H, which is a differential operator that acts on wavefunctions.

Next, we carefully define energy-dependent Green’s operators.

 • As a first attempt, we try to define
                                                     Z ∞
                                                1
                                     Ĝ+ (E) =              dt eiEt/ℏ K̂+ (t).
                                               iℏ      −∞

    then we have
                                                                                      ei(E−H)t/ℏ ∞
                              Z ∞                           Z ∞
                          1            iEt/ℏ            1
               Ĝ+ (E) =            dt e       U (t) =            dt ei(E−H)t/ℏ = −
                         iℏ   0                        iℏ   0                           E−H 0

    where all functions of operators are defined by power series. Then Ĝ+ (E) would be a Green’s
    operator if we could neglect the upper limit of integration.


 • The problem above is due to the fact that the Schrodinger equation has no damping, so
   initial transients never die out. Instead we replace H → H − iϵ, giving exponential decay, or
   equivalently E → E + iϵ. Then generally we may define
                                            1 ∞ izt/ℏ
                                             Z
                                                                1
                                 Ĝ+ (z) =        e    U (t) =
                                           iℏ 0                z−H
   for any z = E + iϵ with ϵ > 0.

 • For Im z > 0, the Green’s operator has a complete set of eigenfunctions (since H does), though
   it is not Hermitian. Moreover, none of the eigenvalues are vanishing because they all have
   nonzero imaginary part. Thus the inverse of z − H exists and is unique. (We ignore subtle
   mathematical issues, such as nonnormalizable eigenfunctions.)

 • Suppose that H has a discrete spectrum with negative energies En and a continuous spectrum
   with positive energies E, as is typical for scattering problems,

                                H|nα⟩ = En |nα⟩,         H|Eα⟩ = E|Eα⟩.

   Using standard normalization, the resolution of the identity is
                                X               Z ∞      X
                            1=      |nα⟩⟨nα| +       dE     |Eα⟩⟨Eα|.
                                    nα               0        α

   Therefore the Green’s operator can be written as
                                         X |nα⟩⟨nα|       Z ∞      X |E ′ α⟩⟨E ′ α|
                                 1
             Ĝ+ (E + iϵ) =            =                +     dE ′                  .
                            E + iϵ − H   nα
                                            E + iϵ − En    0       α
                                                                     E + iϵ − E ′

 • From the above expression we conclude that Ĝ+ (E + iϵ) is well-defined in the upper-half plane,
   but may become singular in the limit ϵ → 0. We define

                                         Ĝ+ (E) = lim Ĝ+ (E + iϵ)
                                                   ϵ→0

   where the right-hand side is often written as Ĝ+ (E + i0). When E is not an eigenvalue, then the
   limit exists by the decomposition above. When E is a discrete eigenvalue, the limit is singular
   and the Green’s function fails to exist. Finally, when E > 0 the integrand above diverges,
   though it turns out the limit of the integral exists, as we’ll show in an example later. All these
   results are perfectly analogous to the water waves above.

 • When Ĝ+ (E) is well-defined, it is a Green’s operator, because
                                                          1
          (E − H)Ĝ+ (E) = lim (E + iϵ − H − iϵ)                = lim (1 − iϵĜ(E + iϵ)) = 1.
                             ϵ→0                     E + iϵ − H   ϵ→0

 • We similarly define the incoming energy-dependent Green’s operator

                                            1 0 izt/ℏ
                                             Z
                                                               1
                               Ĝ− (z) = −       e    U (t) =
                                           iℏ −∞              z−H

   where now z = E − iϵ. It is defined in the lower-half plane and limits to Ĝ− (E) for ϵ → 0,
   where the limit is well defined if E is not equal to any of the En .


 • In the water wave analogy, we have ‘antidamping’, and energy is continually absorbed by the
   drive. In the case E < 0, this makes no difference in the limit ϵ → 0, where the drive absorbs
   zero energy. But in the case of a continuous eigenfrequency E > 0, the drive will continuously
   absorb energy even for ϵ → 0 because it ‘comes in from infinity’, just as it continuously radiates
   energy out in the outgoing case.

 • Note that since everything in the definitions of Ĝ± is real except for the iϵ, the Ĝ± are Hermitian
   conjugates.

With the above water wave intuition, we can understand the Green’s operators analytically.

 • Define the difference of the Green’s operators by

              ˆ
                        h                           i                        1            1
              ∆(E) = lim Ĝ+ (E + iϵ) − Ĝ− (E − iϵ) = lim                         −                     .
                      ϵ→0                                         ϵ→0   E + iϵ − H   E − iϵ − H

 • This limit is easier to understand in terms of ordinary numbers,

                          1             1                  −2iϵ
               lim               −               = lim                 = −2πiδ(x − x0 ).
               ϵ→0 x − x0 + iϵ     x − x0 − iϵ     ϵ→0 (x − x0 )2 + ϵ2

    Therefore we have
                                               ˆ
                                               ∆(E) = −2πiδ(E − H).
    The operator on the right-hand side is defined by each eigenvector, i.e. an eigenvector of H
    with eigenvalue E0 becomes an eigenvector with eigenvalue δ(E − E0 ). Explicitly,
                           X                        Z ∞      X
               δ(E − H) =     |nα⟩⟨nα|δ(E − En ) +      dE ′   |E ′ α⟩⟨E ′ α|δ(E − E ′ ).
                                 nα                           0          α

                ˆ
    We see that ∆(E) is zero when E is not an eigenvalue, diverges when E = En , and is finite
                    ˆ
    when E > 0 with ∆(E)
                                 P
                          = −2πi α |Eα⟩⟨Eα|.

 • Therefore Ĝ− (z) is the analytic continuation of Ĝ+ (z) through the gaps between the discrete
   eigenvalues, so they are both part of the same analytic function called the resolvent,
                                                              1
                                                   Ĝ(z) =
                                                             z−H
    which is defined for all z that are not eigenvalues of H. The resolvent has poles at every discrete
    eigenvalue, and a branch cut along the continuous eigenvalues.

 • We can analytically continuous Ĝ+ (z) across the positive real axis, ‘pushing aside’ the branch cut
   to reach the second Riemann sheet of the resolvent. In this case we can encounter additional
   singularities in the lower-half plane, which correspond to resonances (e.g. long-lived bound
   states). (need a good example for this!)


