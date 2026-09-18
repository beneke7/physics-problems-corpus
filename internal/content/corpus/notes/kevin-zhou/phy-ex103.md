---
id: kevin-zhou-notes-phy-ex103
source: kevin-zhou-notes
native_id: "phy Example 103"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex103
topic: [quantum-mechanics]
subtopic: [scattering]
math_tools: [complex-analysis, Green-functions]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "14949-15068"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. We show the scattering states |ψk ⟩ are orthonormal using Green’s functions. We have
                                                                                   1
           ⟨ψk′ |ψk ⟩ = ⟨ψk′ |k⟩ + ⟨ψk′ |G+ (E)V |k⟩ = ⟨ψk′ |k⟩ + lim                    ⟨ψk′ |V |k⟩
                                                                      ϵ→0 E + iϵ − E ′

where E ′ = ℏ2 k ′2 /2m. Next, using the Lippmann–Schwinger equation on the first factor,
                                                                               1
            ⟨ψk′ |k⟩ = ⟨k′ |k⟩ + ⟨ψk′ |V G0− (E ′ )|k⟩ = ⟨k′ |k⟩ + lim                 ⟨ψk′ |V |k⟩.
                                                                    ϵ→0 E ′ − iϵ − E

Then the extra terms cancel, giving ⟨ψk′ |ψk ⟩ = ⟨k′ |k⟩ = δ(k − k′ ). The completeness relation is
                                X               Z
                                   |nα⟩⟨nα| + dk |ψk ⟩⟨ψk | = 1
                                   nα

where the first term includes bound states, which are orthogonal to all scattering states.


12.5   The S-Matrix
We introduce the S-matrix using the simple example of one-dimensional potential scattering.

 • With an incoming right-moving wave, we may write the scattered wave as
                                       (
                                        eikx + re−ikx x → −∞,
                              ψR (x) ∼
                                        teikx         x → +∞.

    Then R = |r|2 and T = |t|2 give the probability of reflection and transmission, as can be seen
    by computing the probability fluxes. Conservation of probability requires R + T = 1.

 • Similarly, we can use left-moving waves, and define
                                         (
                                          t′ e−ikx                     x → −∞,
                                ψL (x) ∼
                                          e−ikx + r′ eikx              x → +∞.

 • Since the potential is real, if ψ is a solution, then ψ ∗ is as well. This gives the identities
                                                                    r∗ t
                                                 t′ = t,   r′ = −
                                                                    t∗
    so that |r| = |r′ |. These results also appear in classical scattering as a result of time-reversal
    symmetry. The same symmetry is acting here, as time reversal is complex conjugation.

 • As an explicit example, the finite well potential V (x) = −V0 θ(x − a/2)θ(x + a/2) has

               (k 2 − q 2 ) sin(qa)e−ika                              2iqke−ika                        2mV0
    r=                                       ,    t=                                       ,    q2 =        + k2 .
         (q 2 + k 2 ) sin(qa) + 2iqk cos(qa)           (q 2 + k 2 ) sin(qa) + 2iqk cos(qa)              ℏ2
    We note that there is perfect reflection for low k, no reflection for high k, and also perfect
    transmission for k so that sin(qa) = 0, i.e. resonant transmission. We also note that r = r′ .
    This follows from parity symmetry, as we’ll see below.

 • We summarize our data in terms of the S-matrix,

                            ψR       IR        OR                           t r
                                =         +S       ,                   S=
                            ψL       IL        OL                           r ′ t′

    where IR is an incoming right-moving wave, OL is an outgoing left-moving wave, and so on.
    Applying our identities above shows that S is unitary.

Next, we consider a general parity-symmetric potential V (x) = V (−x).

 • It is useful to switch to a parity basis,

         I+ (x) = e−ik|x| ,   I− (x) = sign(x)e−ik|x| ,      O+ (x) = eik|x| ,   O− (x) = − sign(x)eik|x|

    which is related by the change of basis

                       I+         IR        O+     OR                                 1 1
                            =M         ,       =M     ,                     M=              .
                       I−         IL        O−     OL                                −1 1

    Applying this transformation, the S-matrix in the parity basis is S P = M SM −1 .


 • For a parity-symmetric potential, r = r′ because ψR (x) = ψL (−x). Then S P simplifies to

                         P     S++
                       S =                   , S++ = t + r, S−− = t − r.
                                      S−−

   The off-diagonal elements are zero because parity is conserved.

 • Combining our identities shows that S++ and S−− are phases,

                                  S++ = e2iδ+ (k) ,   S−− = e2iδ− (k) .

   This is analogous to how we distilled three-dimensional central force scattering into a set of
   phases in the partial wave decomposition.

 • The S-matrix can also detect bound states. Since the algebra used to derive r(k) and t(k) never
   assumed that k was real, the same expressions hold for general complex k. Consider a pure
   imaginary wavenumber k = iλ with even parity,

                 lim ψ+ (x) = I+ (x) + S++ O+ (x),      I+ (x) = eλ|x| ,   O+ (x) = e−λ|x| .
               |x|→∞

   It looks like there can’t be a bound state solution here, since the I+ component diverges at
   infinity. The trick is to rewrite this as
                                                −1
                                  lim ψ+ (x) = S++ I+ (x) + O+ (x)
                                 |x|→∞

                                                 −1
   which gives a valid bound state as long as S++    = 0, which corresponds to a pole in S++ . That
   is, we can identify bound states from poles in S-matrix elements! (The same reasoning works
   in the original left/right basis, though there are more terms.)

 • Some careful algebra shows that

                                                      q tan(qa/2) − ik
                                 S++ (k) = −e−ika
                                                      q tan(qa/2) + ik

   which shows that bound states of even parity occur when λ = q tan(qa/2), a familiar result. We
   can recover the bound state energy from E = −ℏ2 λ2 /2m.
