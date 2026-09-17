---
id: kevin-zhou-notes-phy-ex041
source: kevin-zhou-notes
native_id: "phy Example 041"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex041
topic: [statistical-mechanics]
subtopic: [classical-gases, partition-function]
math_tools: [trace, phase-space-integrals]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3696-3778"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. For each particle, we have the Hamiltonian Ĥ = p̂2 /2m + V (q̂), where the potential
confines the particle to a box. The partition function is defined as Z = tr e−β Ĥ . In the classical
limit, we neglect commutators,
                                                    2
                                     e−β Ĥ = e−β p̂ /2m e−βV (q̂) + O(ℏ).

Taking the trace over the position degrees of freedom,
              Z                                   Z
                     −βV (q)      −β p̂2 /2m                                        2
         Z ≈ dq e            ⟨q|e            |q⟩ = dq dp dp′ e−βV (q) ⟨q|p⟩⟨p|e−β p̂ /2m |p′ ⟩⟨p′ |q⟩.
                                                      √
Evaluating the p′ integral, and using ⟨q|p⟩ = eipq/ℏ / 2πℏ, we find
                                             Z
                                           1
                                      Z=        dq dp e−βH(p,q)
                                           h

in the classical limit. Generically, we get integrals of e−βH over phase space, where h is the unit of
phase space volume. The value of h won’t affect our classical calculation, as it only affects Z by a
multiplicative constant.
71 3. Statistical Mechanics


Next, we recover the properties of the classical ideal gas.

 • For a particle in an ideal gas, the position integral gives a volume factor V . Performing the
   Gaussian momentum integrals,
                                                      s
                                            V             2πℏ2
                                      Z = 3, λ =                .
                                           λ             mkB T

    The thermal de Broglie wavelength λ is the typical de Broglie wavelength of a particle. Then
    our expression for Z makes sense if we think of Z as the ‘number of thermally accessible states’,
    each of which could be a wavepacket of volume λ3 .

 • For N particles, we have
                                                   1 VN
                                                Z=         .
                                                   N ! λ3N
    The factor of N ! is known as the Gibbs correction. It must be included to avoid overcounting
    configurations of indistinguishable particles; without it, the entropy is not extensive. For a
    wonderful discussion of the Gibbs correction, which also touches on conceptual issues about
    entropy, see The Gibbs Paradox .

 • The entropy of the ideal gas is
                                                                     
                              ∂F    ∂                          V    5
                          S=−    =    (kB T log Z) = N kB log     +
                              ∂T   ∂T                         N λ3 2
    where we used Stirling’s approximation and dropped sub-extensive terms. This is the Sackur–
    Tetrode equation. Note that while the entropy depends explicitly on h, the value of h is not
    detectable since only entropy differences can be measured classically. Using this, we can recover
    the ideal gas law and the internal energy, which obeys equipartition.

 • In the grand canonical ensemble, we have
                                                               βµ 
                                        X
                                            βµN                e V
                                   Z=       e     Z(N ) = exp        .
                                                                λ3
                                        N

    Then the expected particle number is
                                   1 ∂          eβµ V                      λ3 N
                              N=        log Z =       ,     µ = kB T log        .
                                   β ∂µ          λ3                         V
    The chemical potential is thus negative, as the classical limit is valid for λ3 ≪ V /N .

 • We can easily derive the velocity distribution F and speed distribution f ,
                                            2                          2
                              F (v) ∝ e−mv /2kB T      f (v) ∝ v 2 e−mv /2kB T .

    One common, slick derivation of this is to assume the velocity components are independent and
    identically distributed, and F can only depend on the speed by rotational symmetry. Then

                                        F (v) = ϕ(vx )ϕ(vy )ϕ(vz )
                                                   2
    which has only one solution, F (v) ∝ e−Av . However, this derivation is wrong, because in
    general the velocity components are not independent.
72 3. Statistical Mechanics


