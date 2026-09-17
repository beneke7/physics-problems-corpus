---
id: kevin-zhou-notes-phy-ex087
source: kevin-zhou-notes
native_id: "phy Example 087"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex087
topic: [quantum-mechanics]
subtopic: [atomic-and-molecular-physics]
math_tools: [dimensional-analysis, differential-equations, perturbation-theory]
format: explanation
kind: reference_example
has_solution: false
has_figure: true
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "11092-12017"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. In the H2+ molecule, the protons can be treated as roughly fixed. Then there is rotational
symmetry along the axis connecting them, causing two-fold degeneracy for m ̸= 0 states as above.
However, in reality the protons are free to move, causing a small splitting known as “Λ-doubling”,
where Λ is the standard name for the magnetic quantum number of the electrons about the axis of
a diatomic molecule.
We now continue discussing the Stark effect in hydrogen.

 • In the absence of an external field, the 2p level of hydrogen decays quickly to 1s, with a lifetime
   on the order of 10−9 seconds. But the 2s state has a much longer lifetime of 10−1 seconds,
   because it decays to 1s by emitting two photons. This makes it easy to prepare a population
   of 2s and 1s states.
 • However, by turning on an electric field, the 2s and 2p states rapidly evolve into each other.
   When such a field is applied to a population of 2s hydrogen atoms, the result is a rapid burst
   of photons.
 • Now we return to the ground state and consider the first order wavefunction shift. The result is
                                           X            ⟨nℓm|eF z|100⟩
                           |ψ⟩ = |100⟩ +        |nℓm⟩                  .
                                                            E1 − En
                                             nℓm̸=100

    This state has an induced dipole moment.
 • If we define the polarizability α by the first-order response to the field,
                                           ⟨d⟩ = αF + O(F 2 )
    then we have
                                           X        ⟨100|z|nℓm⟩⟨nℓm|z|100⟩
                              α = −2e2                                     .
                                                            E1 − En
                                         nℓm̸=100

    More generally, the polarizability could be a tensor, ⟨di ⟩ = αij Fj + O(F 2 ). We can convert the
    polarizability of an atom to a dielectric constant of a gas using the Clausius-Mossotti formula.
207 9. Time Independent Perturbation Theory


 • Next, we can compute the energy shift of the ground state to second order, i.e. the quadratic
   Stark effect. The result is
                          X ⟨100|eF z|nℓm⟩⟨nℓm|eF z|100⟩         1         1
               ∆Eg(2) =                                     = − αF 2 = − ⟨d⟩ · F.
                                        E1 − En                  2         2
                          nℓm̸=100

      This factor of 1/2 is exactly as expected, because the dipole moment is induced, rather than
      permanent; it grows linearly with F as F is turned on.

 • Calculating α is a little tricky, because we must sum over an infinite number of intermediate
   states, including the ionized continuum states. However, a crude estimate can be done using
                                                                  3 e2
                                          En − E1 > E2 − E1 =
                                                                  8 a0
      which implies
                                          2e2 X
                                α<              ⟨100|z|nℓm⟩⟨nℓm|z|100⟩
                                        E2 − E1
                                                 nℓm
      where we have removed the restriction on the sum since the additional term doesn’t contribute
      anyway. Recognizing a resolution of the identity,
                                       2e2                      2e2        16
                             α<              ⟨100|z 2 |100⟩ =         a20 = a30 .
                                     E2 − E1                  E2 − E1      3
      Of course, we could have guessed that α ∼ a30 from a classical model, thinking of the electron
      as a mass on a spring. The exact answer turns out to be α = (9/2)a30 .

 • Above, we have discussed a stark difference between a system with degeneracy and a system
   without: a lack of degeneracy guarantees no linear Stark effect. But in real life, degeneracy
   is never perfect. More precisely, if the degeneracy is weakly broken by some other physics,
   then the Stark effect will be quadratic in the regime where that other physics dominates, and
   linear when the Stark effect dominates. This is just the case for hydrogen, where the 2s and 2p
   degeneracy is already broken by the Lamb shift.

 • A more formal way to say this is that the full Hamiltonian can be written as H0 plus a
   possibly large number of small perturbations. To get the right answer, we should account for
   the most important perturbation first, then treat the next-most important perturbation as a
   perturbation on the result, and so on. Of course the physical answer doesn’t depend on how
   we do the ordering, but if we choose it wrong, then our resulting series won’t be good.

 • In chemistry, one often speaks of molecules with permanent electric dipole moments. This
   doesn’t violate parity; it simply means that two energy levels of opposite parity are close
   enough that even a small electric field takes the Stark effect into the linear regime; however,
   as long as the energy levels are not exactly degenerate (which will always be the case) there is
   also a quadratic regime at low fields.

9.3     Fine Structure
Next we consider fine structure, which concerns the effects of relativity and spin. These appear at
the same order, namely (v/c)2 , so they must be treated together. They may also be derived in a
unified way from the Dirac equation, though we do not do this here.
208 9. Time Independent Perturbation Theory


 • There are three new terms: the relativistic kinetic energy correction, the Darwin term, and the
   spin-order term,
                                    HFS = HRKE + HD + HSO .

 • The first correction comes from the relativistic kinetic energy,
                               p                      p2   p4
                          E=    m2 c4 + p2 c2 = mc2 +    −      + ....
                                                      2m 8m3 c2
 • The spin-orbit coupling term is
                                                    1
                                         HSO = − µ · B′
                                                    2
   where B′ is the magnetic field as seen in the electron’s momentary rest frame. The factor of
   1/2 is because the electron’s frame is not inertial, and half of the effect is cancelled out by
   Thomas precession. This is a tricky calculation; in any case the result can also be extracted
   straightforwardly from the Dirac equation.

 • In the lab frame, we have
                                       1       1 1 dV
                                   E = ∇V =           x, B = 0.
                                       e       e r dr
   The leading order field transformations when the electric field dominates are
                                                       v
                                      E′ = E, B′ = − × E.
                                                       c
 • Since we are interested in the leading effect, we plug in p = mv to find
                                                   1 1 dV
                                           B′ =            L
                                                  emc r dr
   where L = x × p is the orbital angular momentum of the electron. Finally, using µ = −(e/mc)S
   with the leading order result g = 2, we have
                                                 1 1 dV
                                       HSO =               L · S.
                                               2m2 c2 r dr
 • Finally, the Darwin term arises because the electron’s location is smeared on the order of
   the Compton wavelength λ = ℏ/mc. This means the electron really feels the average of the
   electrostatic potential over a region of radius λ. By the harmonic property of the Laplacian,
   this gives a correction proportional to λ2 ∇2 V .

 • A genuine derivation using the Dirac equation gives the coefficient,
                                                  1 ℏ2
                                          HD =            ∇2 V.
                                                  8 m2 c2
   At the level of the Dirac equation, the Darwin term comes from interference between positive
   and negative frequency components. These cause rapid oscillations at the Compton frequency,
   known as Zitterbewegung, that smooth out the location of the electron.

 • We now specialize to atomic units ℏ = m = e = 1, where α = 1/c ≈ 1/137. In this case,
                                 α2 4             α2 2                α2 1 dV
                      HRKE = −     p ,    HD =      ∇ V,     HSO =            L·S
                                 8                8                   2 r dr
   and it is clear the terms are all of the same order.
209 9. Time Independent Perturbation Theory


 • We can specialize further to one-electron atoms, where
                                      Z        1 dV   Z
                             V (r) = − ,            = 3,        ∇2 V = 4πZδ(x)
                                      r        r dr  r
    and the last two terms become
                                       π                          Zα2 1
                               HD = Zα2 δ(x),             HSO =         L · S.
                                       2                           2 r3
    Note that a factor of Z has appeared in HD because Zδ(x) is the charge density of the nucleus.

 • As we will see below, the energy shifts will all be proportional to (Zα)2 . In fact, the full
   expansion from the Dirac equation is a series in (Zα)2 , and hence is good when Zα ≪ 1. For
   heavy atoms such as uranium, it is better to use a fully relativistic treatment.

Next, we discuss the choice of basis.

 • Since we are now dealing with spin, we include the spin magnetic quantum number, giving the
   unperturbed basis |nℓmℓ ms ⟩ which simultaneously diagonalizes L, L2 , S, and S 2 . The energy
   levels are En = −Z 2 /2n2 .

 • In general, it is useful to choose a basis which diagonalizes observables that commute with the
   full Hamiltonian. If we choose the basis naively, we will have to diagonalize a 2n2 × 2n2 matrix,
   while if we choose it well, we get selection rules which break the matrix into smaller pieces.

 • As such, it may be useful to consider the total angular momentum J = L + S. Since HRKE is a
   scalar, it commutes with L. Since it only depends on the orbital motion, it commutes with S,
   and hence with J. Similarly, HD commutes with all of these operators. But we have

                                        [L, HSO ] ̸= 0,    [S, HSO ] ̸= 0

    but [J, HSO ] = 0, since J rotates the entire system. Furthermore, HSO commutes with L2 and
    S 2 because, for example, [L2 , L · S] = [L2 , L] · S = 0.

 • Hence we are motivated to work in the “coupled basis” |nℓjmj ⟩ which simultaneously diagonal-
   izes L2 , S 2 , J 2 , and Jz . This is related to the original basis by Clebsch–Gordan coefficients,
                                                 X
                                    |nℓjmj ⟩ =        |nℓmℓ ms ⟩⟨ℓsmℓ ms |jmj ⟩
                                             mℓ ,ms

    and we will suppress s below. Since all three fine structure terms are diagonal in the coupled
    basis, there is no need to do degenerate perturbation theory; we just have to compute their
    diagonal matrix elements. (There is no point in going to second order perturbation theory,
    since there are other effects that are more important at first order.)

Now we proceed to computing the energy shifts.

 • It’s easier to think about HRKE in the uncoupled basis, then transform to the coupled basis.
   This term is purely orbital and commutes with L2 , so

                      ⟨nℓmℓ ms |HRKE |nℓ′ m′ℓ m′s ⟩ = δℓℓ′ δms m′s ⟨nℓmℓ |HRKE |nℓm′ℓ ⟩.

    Since HRKE is a scalar operator, by the Wigner–Eckart theorem we have

                             ⟨nℓmℓ |HRKE |nℓm′ℓ ⟩ = δmℓ m′ℓ ⟨nℓ0|HRKE |nℓ0⟩.
210 9. Time Independent Perturbation Theory


 • Now, applying Clebsch–Gordan coefficients, and the above results,
                             X X
     ⟨nℓjmj |HRKE |nℓjmj ⟩ =            ⟨jmj |ℓmℓ ms ⟩⟨nℓmℓ ms |HRKE |nℓm′ℓ m′s ⟩⟨ℓm′ℓ m′s |jmj ⟩
                                 mℓ ,ms m′ ,m′s
                                          ℓ
                                                     X
                              = ⟨nℓ0|HRKE |nℓ0⟩              ⟨jmj |ℓmℓ ms ⟩⟨ℓmℓ ms |jmj ⟩
                                                    mℓ ,ms

                              = ⟨nℓ0|HRKE |nℓ0⟩

   so the coefficients have dropped out completely.

 • It remains to calculate the expectation value. This is easiest if we note that

                                                  α2 2   α2
                                   HRKE = −         T = − (H0 − V )2
                                                  2      2
   since we know how to calculate the expectation values of H0 and V ,

                                                                Z2
                                                       
                                                        1
                              ⟨H0 ⟩ = En , ⟨V ⟩ = −Z        =− 2
                                                        r       n

   where the latter result follows from the virial theorem.

 • The difficult part is calculating ⟨V 2 ⟩, which requires special function techniques, giving

                                                          Z2
                                            
                                              1
                                                  =
                                             r2      n3 (ℓ + 1/2)

   which gives a total energy shift of
                                                                                       
                                                                   1        3    n
                        ⟨nℓjmj |HRKE |nℓjmj ⟩ = (Zα)2 (−En )                  −             .
                                                                   n2       4 ℓ + 1/2

 • By the same reasoning, the Darwin term reduces to
                                                                 π
                        ⟨nℓjmj |HD |nℓjmj ⟩ = ⟨nℓ0|HD |nℓ0⟩ = Zα2  |ψnℓ0 (0)|2 .
                                                                 2
                                                                           √
   The shift is only nonzero for ℓ = 0, where we get a factor of Y00 = 1/ 4π. Using the result
   Rn0 (0) = 2(Z/n)3/2 , we have
                                                                  1
                                ⟨nℓjmj |HD |nℓjmj ⟩ = (Zα)2 (−En ) δℓ0 .
                                                                  n

 • The spin-orbit term is best handled by writing
                                                1
                                         L · S = (J 2 − L2 − S 2 ).
                                                2
   As promised above, this is easy to evaluate in the coupled basis,

                                     Zα2                                          1
            ⟨nℓjmj |HSO |nℓjmj ⟩ =       (j(j + 1) − ℓ(ℓ + 1) − s(s + 1))⟨nℓjmj | 3 |nℓjmj ⟩
                                      4                                          r
   where j = ℓ ± 1/2.
211 9. Time Independent Perturbation Theory


 • By the same reasoning as above, the final factor can be written as
                                           1                  1
                                  ⟨nℓjmj | 3 |nℓjmj ⟩ = ⟨nℓ0| 3 |nℓ0⟩
                                          r                  r
   and special function techniques give

                                                   Z3
                                    
                                      1
                                        =                      .
                                     r3   n3 ℓ(ℓ + 1/2)(ℓ + 1)

 • In the case ℓ = 0, the prefactor is zero, but ⟨1/r3 ⟩ diverges, so the result is indeterminate. The
   proper way to handle this is to regulate the Coulomb singularity, which causes ⟨1/r3 ⟩ not to
   diverge, giving a result of zero.

 • The spin-orbit and Darwin terms both have special cases for ℓ = 0, contributing or not con-
   tributing respectively, but combine into something simple. The total result is
                                                                  
                                            2      1 3         n
                               ∆EFS = (Zα) (−En ) 2      −           .
                                                   n    4 j + 1/2

   Remarkably, the answer only depends directly on n and j, so the energy levels are

                                   Z2        (Zα)2 3
                                                               
                                                             n
                          Enj = − 2 1 −                −             .
                                   2n          n2    4 j + 1/2

   The energy levels are shifted downward, and the total energy increases with j. Some degeneracy
   remains, indicating a residual symmetry of the system.

We now make some comments about this result.

 • As shown here, the Dirac equation gives an exact result for the hydrogen energy levels,

                                                      mc2
                      Enj =                                               !2 1/2
                             1 +                  Zα                         
                                                  p
                                     n − j − 1/2 + (j + 1/2)2 − (Zα)2

   which recovers mc2 , the ordinary energy levels, and the fine structure when expanded. However,
   at the next order additional effects appear which are not captured by the Dirac equation, such
   as hyperfine structure and the Lamb shift.

 • Some energy levels are shown below, with the fine structure exaggerated for clarity. This
   diagram uses spectroscopic notation nℓj , where ℓ = s, p, d, f, . . ..
212 9. Time Independent Perturbation Theory




  • The arrows above also show the allowed electric dipole transitions. These are determined by
    the matrix elements ⟨nℓjmj |x|n′ ℓ′ j ′ m′j ⟩. Note that the operator x is a tensor operator of spin
    1 with respect to both purely spatial rotations, generated by L, and rotations of the whole
    system, generated by J. Applying the Wigner–Eckart theorem gives the constraints

                                   |∆ℓ| ≤ 1,    |∆j| ≤ 1,   |∆mj | ≤ 1.

                                              ̸ 0, since the parity of the coupled states is (−1)ℓ ,
    Parity gives the additional constraint ∆ℓ =
    but it places no constraint on ∆j.

  • The Lamb shift is due to the interaction of the electron with the quantized electromagnetic field.
    Its most historically important effect is splitting the degeneracy between 2s1/2 and 2p1/2 , so
    that 2s1/2 is about 1 GHz higher than 2p1/2 . For comparison, fine structure places 2p3/2 about
    10 GHz higher. Parametrically, the Lamb shift scales as En α3 log(1/α).

  • Since 2s1/2 cannot participate in electric dipole transitions, the Lamb shift means that its
    dominant decay mode is to 2p1/2 , upon which the atom quickly decays to 1s1/2 .

  • In alkali atoms, much of the above reasoning also goes through, except that here the degeneracy
    in ℓ is already strongly split by the non-Coulomb nature of the potential. In this case, the most
    important effect is the spin-orbit coupling, because this is the only term that breaks degeneracy
    in j. By a similar analysis,

                                       α2
                                                                            
                                                                        1 dV
                             ∆ESO =       (j(j + 1) − ℓ(ℓ + 1) − 3/4)          .
                                        4                               r dr

    For example, this term splits the 3p level of sodium to 3p1/2 and 3p3/2 . When these levels decay
    to 3s, one observes the sodium doublet.

Note. The Lamb shift is just an additional smearing like the Darwin term, which is due to interaction
with vacuum fluctuations. Consider an atom in a large cubical box of side length L. The modes of
213 9. Time Independent Perturbation Theory


the quantum electromagnetic field perpetually have vacuum energy ℏωk , where ωk is their frequency.
These quantum fluctuations can be heuristically treated as a randomly varying classical electric
field Ek , where
                                         |Ek |2 L3 ∼ ℏωk
since both sides measure the total field energy in that mode. The random fluctuations change over
a characteristic time τ ∼ 1/ωk , over which the displacement of the particle is

                                                  e|Ek |τ 2   e|Ek |
                                           δr ∼             ∼        .
                                                     m        mωk2

Since the fluctuations of these modes are independent, the mean square fluctuation is
                  X e2 |Ek |2                                        3
                                 e2 ℏ X           e2 ℏ                                e2
                                                             Z                              Z
            2                             1                          L     1                  dk
        ⟨δr ⟩ ∼                 ∼ 2             ∼                dk               ∼
                       m2 ωk4    m      (Lωk )3   m2                 ℏ   (Lωk ) 3    2  2
                                                                                    m ℏ c 3   k3
                   k                   k

where we used the fact that states are spaced in momentum space by ∆k ∼ ℏ/L. This integral is
logarithmically divergent, but we should put in cutoffs. Modes with wavelengths larger than the
atom don’t affect the electron much, just pushing on it adiabatically, while modes with wavelengths
smaller than the electron’s Compton wavelength will instead cause new particles to spontaneously
pop out of the vacuum. The ratio between these two scales is α, so

                                                        e2        1
                                           ⟨δr2 ⟩ ∼            log .
                                                      m2 ℏ2 c3    α
Following the same reasoning for the Darwin term, this gives an energy shift of
                                              ∆E          1
                                                 ∼ α3 log
                                              En          α
for ℓ = 0 states. One can use a similar story to justify the Darwin term within quantum field
theory. Instead of interacting with virtual photons, an electron-positron pair suddenly, spontaneously
appears out of the vacuum. The positron annihilates the old electron and the new electron continues
on in its place, effectively allowing the electron’s position to teleport.
   This is a neat derivation, but one should keep in mind that “quantum fluctuations” don’t generally
behave like classical stochastic ones. Injecting stochastic fluctuations is sufficient to recover some of
the predictions of quantum field theory, just like how adding fluctuations to a classical point particle
can recover part of the flavor of ordinary quantum mechanics, but it doesn’t work in general. (It if
actually did, there would be no point in using quantum mechanics at all!)

Note. A quick and dirty derivation of Thomas precession. Consider an electron moving at speed
v ≪ c, which is following a straight track, which suddenly turns by an angle θ ≪ 1. In the electron’s
frame, the track is length contracted in the longitudinal direction, so it has a larger turn angle,

                                       θ′ = tan−1 (γ tan θ) ≈ γθ.

That is, the electron thinks it turns by a larger amount than it does in the lab frame, by

                                           θ′ − θ          v2
                                                  ≈ γ − 1 ≈ 2.
                                              θ            2c
214 9. Time Independent Perturbation Theory


If the electron moves uniformly in the lab frame, then the “extra” precession is
                                                    ωv 2  av
                                             ωT =        = 2
                                                    2c2   2c
and thinking a bit about the directions gives
                                                      v×a
                                              ωT =         .
                                                       2c2
This is the result for Thomas precession in the nonrelativistic limit. Plugging in a = r̂(dV /dr)
shows that half of the naive spin-orbit contribution is cancelled, as claimed above. The exact result,
which can be derived by integrating infinitesimal Lorentz transformations, is
                                                     γ2 v × a
                                           ωT =               .
                                                    γ + 1 2c2

9.4     The Zeeman Effect
Next, we consider the Zeeman effect, involving atoms in magnetic fields.

  • We continue to use atomic units, where c = 1/α ≈ 137. This means the Bohr magneton is
                                                  eℏ    1   α
                                             µB =    =     = .
                                                 2mc    2c  2
      Taking the electron g factor to be 2, we hence have
                                                      S
                                              µ = gµB    = −αS
                                                      ℏ
      so the energy of interaction of an electron spin in a magnetic field is
                                              −µ · B = αB · S.

  • Typical magnetic fields in an atom are, by dimensional analysis in Gaussian units,
                                             e     m2 e5
                                      B0 =       =       = 1.72 × 103 T
                                             a20    ℏ4
      This is equal to the electric field at the Bohr radius, which in Gaussian units has the same units
      as the magnetic field.
  • However, the most important quantity for perturbation theory is the magnitude of the force;
    magnetic forces are suppressed by a factor of v/c = α relative to electric ones. Hence a magnetic
    field perturbation to be comparable in effect to the electrostatic field, we need field strength
    B0 /α = 2.35 × 105 T, which is much higher than anything that can be made in the lab. As
    such, we will always treat the magnetic fields as weak.
  • Accounting for fine structure, the Hamiltonian is
                                       1
                                  H = (p + αA)2 + V (r) + HFS + αB · S.
                                       2
      This differs from our earlier expression because we are using Gaussian and atomic units, where
      q = −1. In Gaussian units, since magnetic fields have the same units as electric ones, one can
      get them from the SI result by “dividing by c”, accounting for the factor of α in the orbital
      piece. This also makes it clear that the spin and orbital pieces both contribute at O(α).
215 9. Time Independent Perturbation Theory


 • We take the magnetic field and vector potential to be
                                                       1
                                        B = Bẑ,    A = B × r.
                                                       2
    Since this vector potential is in Coulomb gauge, p · A = A · p, so

                          1            p2            α2 2
                       T = (p + αA)2 =    + αp · A +   A = T1 + T2 + T3 .
                          2            2             2

 • We can simplify T2 by noting that
                                      α              α
                               T2 =     p · (B × r) = B · L,      L=r×p
                                      2              2
    where we used the scalar triple product rule, and there are no ordering issues since ∇ · B = 0.

 • The term T3 can be expanded as

                                                 α2 2 2
                                          T3 =     B (x + y 2 )
                                                 8
    and hence behaves like a potential. However, it is suppressed by another power of α, and hence
    can be dropped.

 • The last term is the spin term αB · S. Combining this with T2 gives the total perturbation
                                        α               α
                                HZ =      B · (L + 2S) = B(Lz + 2Sz ).
                                        2               2
    The reason we can’t drop the fine structure contributions is that they scale as α2 , while the
    Zeeman perturbation scales as αB. As a crude estimate, the two are equally important for field
    strengths αB0 ∼ 10 T, which is quite high, though the threshold is actually about a factor of
    10 smaller due to suppression by dimensionless quantum numbers.

 • On the scale of materials, the spin and T2 terms are responsible for Pauli paramagnetism, while
   the T3 term is responsible for Landau diamagnetism; we’ve seen both when covering statistical
   mechanics. The Zeeman effect is also used to measure magnetic fields via spectral lines.

First, we consider the strong field case, where HZ dominates. This strong-field Zeeman effect is also
called the Paschen–Back effect. Note that we can’t take the field strength to be too high, or else
the term T3 will become important.

 • The first task is to choose a good basis. Since the magnetic field is in the ẑ direction, HZ
   commutes with Lz , Sz , and Jz . Furthermore, it commutes with L2 and S 2 . However, we have

                                              [J 2 , HZ ] ̸= 0

    because J 2 contains L · S, which in turn contains Lx Sx + Ly Sy . Thus, the Zeeman effect prefers
    the uncoupled basis.
216 9. Time Independent Perturbation Theory


 • In the uncoupled basis, the perturbation is already diagonal, so we just read off
                     α                                 α
             ∆E =      B⟨nℓmℓ ms |Lz + 2Sz |nℓmℓ ms ⟩ = B(mℓ + 2ms ) = µB B(mℓ + 2ms ).
                     2                                 2
   Note that if one didn’t know about spin, one would expect that a spectral line always splits into
   an odd number of lines, since ∆E = µB Bmℓ . Violations of this rule were called the anomalous
   Zeeman effect, and were one of the original pieces of evidence for spin. (In fact, a classical model
   of the atom can account for three lines, one of the most common cases. The lines correspond
   to the electron oscillating along the field, and rotating clockwise and anticlockwise about it.)

 • As an example, the n = 2 states of hydrogen behave as shown.




   The 2p states |mℓ ms ⟩ = |−1, 12 ⟩ and |1, − 12 ⟩ are degenerate. This degeneracy is broken by QED
   corrections to the electron g factor, though this is suppressed by another factor of α. This
   result holds identically for alkali atoms.

 • For one-electron atoms, some of the 2s states are also degenerate with the 2p states, as |ℓmℓ ms ⟩ =
   |00 12 ⟩ is degenerate with |10 12 ⟩, and |00, − 12 ⟩ with |10, − 21 ⟩. In total, the eight n = 2 states are
   split into five energy levels, three of which have two-fold degeneracy.

 • We now consider the impact of fine structure, treating HZ as part of the unperturbed Hamilto-
   nian. For simplicity, we only consider the spin-orbit contribution,

                                                                     α2 1 dV
                                    HSO = f (r)L · S,      f (r) =           .
                                                                     2 r dr
   This is the conceptually trickiest one, since it prefers the coupled basis, while we must work in
   the uncoupled basis |nℓmℓ ms ⟩, where there are two-fold degeneracies.

 • Using this basis is tricky because HSO can modify mℓ and ms values (though not ℓ values, since
   [L2 , HSO ] = 0). However, it can only modify mℓ and ms by at most one unit at a time, since
                                             1
                                      L · S = (L+ S− + L− S+ ) + Lz Sz
                                             2
   or by applying the Wigner–Eckart theorem. The 2p degenerate states differ in ms by multiples
   of 2, so HSO can’t mix the degenerate states. Hence to calculate the first order shift, it suffices
   to look at its diagonal matrix elements.

 • Thus, the energy shifts are

                      ∆E = ⟨nℓmℓ ms |f (r)L · S|nℓmℓ ms ⟩ = mℓ ms ⟨nℓmℓ |f (r)|nℓmℓ ⟩
217 9. Time Independent Perturbation Theory


   and for hydrogen we have
                                        α2       1        α2       mℓ ms
                           ∆E = mℓ ms      ⟨nℓ0| 3 |nℓ0⟩ = 3                   .
                                        2       r         2n ℓ(ℓ + 1/2)(ℓ + 1)
   In the case ℓ = 0, the form above is indeterminate, but the energy shift is zero by similar
   reasoning to before.

Now we consider the weak field case, where HFS dominates.

 • For hydrogen, we should properly consider the Lamb shift, which is only 10 times smaller than
   the fine structure shifts on the n = 2 energy levels. However, we will ignore it for simplicity.

 • In this case, we need to use the coupled basis |nℓjmj ⟩. The difficulty is that [J 2 , HZ ] ̸= 0.
   Luckily, the fine-structure energy levels depend directly on j, in the sense that energy levels
   with different j are not degenerate. Hence to calculate the first-order shift, we again do not
   have to diagonalize any matrices, and can focus on the diagonal elements,

                                ∆E = ⟨nℓjmj |µB B(Lz + 2Sz )|nℓjmj ⟩.

   Writing Lz + 2Sz = Jz + Sz , this becomes

                                ∆E = µB B (mj + ⟨nℓjmj |Sz |nℓjmj ⟩) .

 • The remaining factor can be calculated with the projection theorem,
                                                    1
                       ⟨nℓjmj |Sz |nℓjmj ⟩ =             ⟨nℓjmj |(S · J)Jz |nℓjmj ⟩
                                                j(j + 1)
   and using
                                                1 2
                                                  J + S 2 − L2 .
                                                              
                                        S·J=
                                                2
   This gives the result
                                                        j(j + 1) + s(s + 1) − ℓ(ℓ + 1)
                    ∆E = gL (µB B)mj ,       gL = 1 +
                                                                  2j(j + 1)
   where gL is called the Lande g-factor.

 • The fundamental reason we can write the shift as linear in mj , even when it depends on mℓ and
   ms separately, is again the Wigner–Eckart theorem: there is only one possible vector operator
   on the relevant subspace.

 • The naive classical result would be gL = 1 + 1/2 = 3/2, and the result here is different because
   J, L and S are not classical vectors, but rather noncommuting quantum operators. (A naive
   intuition here is that, due to the spin-orbit coupling, L and S are rapidly changing; we need to
   use the projection theorem to calculate their component along J, which changes more slowly
   because the magnetic field is weak.) Note that gL satisfies the expected limits: when ℓ = 0 we
   have gL = 2, while for ℓ → ∞ we have gL → 1.

 • For stronger magnetic fields, we would have to calculate the second-order effect, which does
   involve mixing between subspaces of different ℓ. For the n = 2 energy levels this isn’t too
   difficult, as only pairs of states are mixed, so one can easily calculate the exact answer.
218 9. Time Independent Perturbation Theory


9.5     Hyperfine Structure
Hyperfine structure comes from the multipole moments of the atomic nucleus, in particular the
magnetic dipole and electric quadrupole fields.

 • Hyperfine effects couple the nucleus and electrons together, thereby enlarging the Hilbert space.
   They have many useful applications. For example, the hyperfine splitting of the ground state
   of hydrogen produces the 21 cm line, which is useful in radio astronomy. Most atomic clocks
   use the frequency of a hyperfine transition in a heavy alkali atom, such as rubidium or cesium,
   the latter of which defines the second.

 • We will denote the spin of the nucleus by I, and as usual assume the nucleus is described by a
   single irrep, of I 2 eigenvalue i(i + 1)ℏ2 . The nucleus Hilbert space is spanned by |imi ⟩.

 • For stable nuclei, i ranges from 0 to 15/2. For example, the proton has i = 1/2, the deuteron
   has i = 1, and 133 Cs, used in atomic clocks, has i = 7/2.

 • We restrict to nuclei with i = 1/2, in which case the only possible multipole moment, besides
   the electric monopole, is the magnetic dipole.

Next, we expand the Hamiltonian.

 • We take the field and vector potential to be those of a physical dipole,
                                                                             
                                   4π         1                    8π         T
                  A(r) = (µ × r)      δ(r) + 3 , B(r) = µ ·           δ(r)I + 5 .
                                    3         r                     3        r

      Here we’re mixing vector and tensor notation; I is the identity tensor, T is the quadrupole
      tensor, and dotting with µ on the left indicates contraction with the first index. The delta
      function terms, present for all physical dipoles, will be important for the final result.

 • The Hamiltonian is similar to that of the Zeeman effect,

                                      A 2
                                       
                              1                                  1
                           H=      p+     + V (r) + HFS + HLamb + S · B.
                              2       c                          c

      The magnetic moment of the nucleus is

                                                µ = gN µN I

      where µN is the nuclear magneton. The states in the Hilbert space can be written as |nℓjmj mi ⟩,
      which we refer to as the “uncoupled” basis since J and I are uncoupled.

 • As in our analysis of the Zeeman effect, the vector potential is in Coulomb gauge and the A2
   term is negligible, so by the same logic we have
                                              1
                                          H1 = (p · A + S · B).
                                              c
      However, it will be more difficult to evaluate these orbital and spin terms.
219 9. Time Independent Perturbation Theory


 • The orbital term is proportional to

                                      p · (I × r) = I · (r × p) = I · L

    where one can check there are no ordering issues. Similarly, there are no ordering issues in the
    spin term, since S and I act on separate spaces. Hence we arrive at
                                                                                    
                                 4π        1                   8π               I·T ·S
             H1,orb = k(I · L)      δ(r) + 3 , H1,spin = k        δ(r)(I · S) +           .
                                  3       r                     3                 r5

    The delta function terms are called Fermi contact terms, and we have defined

                                      k = 2gN µB µN = ge gN µB µN .

    The term H1,spin is a spin-spin interaction, while H1,orb can be thought of as the interaction of
    the moving electron with the proton’s magnetic field.

 • It’s tempting to add in additional terms, representing the interaction of the proton’s magnetic
   moment with the magnetic field produced by the electron, due to its spin and orbital motion.
   These give additional copies of H1,spin and H1,orb respectively, but they shouldn’t be added
   since they would double count the interaction.

 • The terms I · L and I · S don’t commute with L, S, or I. So just as for fine structure, we are
   motivated to go to the coupled basis. We define F = J + I and diagonalize L2 , J 2 , F 2 , and Fz .
   The coupled basis is related to the uncoupled one as
                                          X
                             |nℓjf mf ⟩ =     |nℓjmj mi ⟩⟨jimj mi |f mf ⟩.
                                            mj ,mi

    To relate this coupled basis to the original uncoupled basis |nℓmℓ ms mf ⟩, we need to apply
    Clebsch–Gordan coefficients twice. Alternatively, we can use tools such as the Wigner 6j symbols
    or the Racah coefficients to do the addition in one step.

Now we calculate the energy shifts.

 • In the coupled basis, the perturbation is diagonal, so we again can avoid diagonalizing matrices.
   It suffices to compute diagonal matrix elements,

                                      ∆E = ⟨nℓjf mf |H1 |nℓjf mf ⟩.

 • First we consider the case ℓ ̸= 0, where the contact terms do not contribute. We can write the
   energy shift as

                                                          L    T ·S   L    3r(r · S) − r2 S
             ∆E = k⟨nℓjf mf |I · G|nℓjf mf ⟩,        G=      +      =    +                  .
                                                          r3    r5    r3          r5

 • The quantity G is a purely electronic vector operator, and we are taking matrix elements within
   a single irrep of electronic rotations (generated by J), so we may apply the projection theorem,

                                       k
                            ∆E =            ⟨nℓjf mf |(I · J)(J · G)|nℓjf mf ⟩.
                                   j(j + 1)
220 9. Time Independent Perturbation Theory


 • The first term may be simplified by noting that
                                              1
                                       I · J = (F 2 − J 2 − I 2 ).
                                              2
   This gives a factor similar to the Lande g-factor.

 • For the second term, direct substitution gives

                                              L2 − S 2 3(r · S)2
                                     J·G=             +
                                                 r3       r5
   where we used r · L = 0. Now, we have

                                    1             1                         r2
                          (r · S)2 = ri rj σi σj = ri rj (δij + iϵijk σk ) = .
                                    4             4                         4
   Plugging this in cancels the −S 2 /r3 term, leaving

                                                        L2
                                             J·G=          .
                                                        r3

 • Therefore, the energy shift becomes
                                                                                       
                               f (f + 1) − j(j + 1) − i(i + 1)                  1
                        ∆E = k                                 ℓ(ℓ + 1)                     .
                                          2j(j + 1)                             r3

   Specializing to hydrogen and evaluating ⟨1/r3 ⟩ as earlier, we get the final result

                                ge gN µB µN 1 f (f + 1) − j(j + 1) − i(i + 1)
                         ∆E =
                                     a30    n3       j(j + 1)(2ℓ + 1)

   where we restored the Bohr radius.

 • Now consider the case ℓ = 0. As we just saw, the non-contact terms get a factor of J·G = L2 /r3 ,
   so they vanish in this case. Only the contact term in H1,spin contributes, giving
                                               8π
                                        ∆E =      k⟨δ(r)(I · S)⟩.
                                                3
   Since F = I + S when L = 0, we have
                                                                               
                                  1                     1                   3
                           I · S = (F 2 − I 2 − S 2 ) =         f (f + 1) −         .
                                  2                     2                   2
   The delta function is evaluated as for the Darwin term. The end result is that the energy shift
   we found above for ℓ ̸= 0 also holds for ℓ = 0.

 • When the hyperfine splitting is included, the energy levels become Enℓjf . The states |nℓjf mf ⟩
   are (2f + 1)-fold degenerate.

 • For example, the ground state 1s1/2 of hydrogen splits into two levels, where f = 0 is the true
   ground state and f = 1 is three-fold degenerate; these correspond to antiparallel and parallel
   nuclear and electronic spins. The frequency difference is about 1.42 GHz, which corresponds to
   a 21 cm wavelength.
221 9. Time Independent Perturbation Theory


 • The 2s1/2 and 2p1/2 states each split similarly; the hyperfine splitting within these levels is
   smaller than, but comparable to, the Lamb shift between them. The fine structure level 2p3/2
   also splits, into f = 1 and f = 2.

 • Electric dipole transitions are governed by the matrix element

                                        ⟨nℓjf mf |xq |n′ ℓ′ j ′ f ′ m′f ⟩.

    The Wigner–Eckart theorem can be applied to rotations in J, F, and I separately, under each
    of which xq is a k = 1 irreducible tensor operator, giving the constraints

                           mf = m′f + q,     |∆f | ≤ 1,       |∆j| ≤ 1,      |∆ℓ| ≤ 1.

    As usual, parity gives the additional constraint ∆ℓ ̸= 0.

 • Finally, there is a special case for f ′ = 0, because this is the only representation that, upon
   multiplication by the spin 1 representation, does not contain itself: 0 ̸∈ 0 ⊗ 1. This means we
   cannot have a transition from f ′ = 0 to f = 0. The same goes for ℓ, but this case is already
   excluded by parity.

 • Note that the 21 cm line of hydrogen is forbidden by the rules above; it actually proceeds as a
   magnetic dipole transition. The splitting is small enough for it to be excited by even the cosmic
   microwave background radiation. The 21 cm line is especially useful because its wavelength is
   too large to be scattered effectively by dust. Measuring its intensity gives a map of the atomic
   hydrogen gas distribution, measuring its Doppler shift gives information about the gas velocity,
   and measuring its line width determines the temperature. Doppler shift measurements were
   used to map out the arms of the Milky Way. (These statements hold for atomic hydrogen;
   molecular hydrogen (H2 ) has a rather different hyperfine structure.)

 • It is occasionally useful to consider both the weak-field Zeeman effect and hyperfine structure.
   Consider a fine structure energy level with j = 1/2. For each value of mf there are two states,
   with f = i ± 1/2. The two perturbations don’t change mf , so they only mix pairs of states.
   Thus the energy level splits into pairs of levels, which are relatively easy to calculate; the result
   is the Breit–Rabi formula. The situation is just like how the Zeeman effect interacts with fine
   structure, but with (ℓ, s) replaced with (j, i). At lower fields the coupled basis is preferred,
   while at higher fields the uncoupled basis is preferred.

Note. The perturbations we’ve considered, relative to the hydrogen energy levels, are of order:
                                                   1                                          me
            fine structure: α2 ,   Lamb: α3 log      ,    Zeeman: αB,         hyperfine: α2
                                                   α                                          mp

where α ∼ 10−2 , me /mp ∼ 10−3 , and the fine structure is suppressed by O(10) numeric factors.
The hydrogen energy levels themselves are of order α2 mc2 .
    It’s interesting to see how these scalings are modified in positronium. The fine structure is
still α2 , but the Lamb shift enters at the same order, since there is a tree-level diagram where
the electron and positron annihilate and reappear; the Lamb shift for hydrogen is loop-level. The
hyperfine splitting also enters at order α2 , so one must account for all of these effects at once.
222 9. Time Independent Perturbation Theory


9.6     The Variational Method
We now introduce the variational method.

 • The variational method is a rather different kind of approximation method, which does not
   require perturbing about a solvable Hamiltonian. It is best used for approximating the energies
   of ground states.

 • Let H be a Hamiltonian with at least some bound states, and energy eigenvalues E0 < E1 <
   E2 < . . .. Then for any normalizable state |ψ⟩, we have

                                                    ⟨ψ|H|ψ⟩
                                                            ≥ E0 .
                                                     ⟨ψ|ψ⟩

      The reason is simple: |ψ⟩ has some component along the true ground state and some component
      orthogonal to it. The first component has expected energy E0 , while the second has expected
      energy at least E0 .

 • If we can guess |ψ⟩ so that its overlap with the ground state is 1 − ϵ when normalized, then its
   expected energy will match the ground state energy up to O(ϵ2 ) corrections.

 • In practice, we use a family of trial wavefunctions |ψ(λ)⟩ and minimize the “Rayleigh–Ritz
   quotient”,
                                               ⟨ψ(λ)|H|ψ(λ)⟩
                                       F (λ) =
                                                ⟨ψ(λ)|ψ(λ)⟩
      to approximate the ground state energy. This family could either be linear (i.e. a subset of the
      Hilbert space) or nonlinear (e.g. the set of Gaussian wavefunctions).

 • It is convenient to enforce normalization with Lagrange multipliers, by minimizing

                              F (λ, β) = ⟨ψ(λ)|H|ψ(λ)⟩ − β(⟨ψ(λ)|ψ(λ)⟩ − 1).

      This is especially useful in the linear case. If we guess
                                                           N
                                                           X −1
                                                   |ψ⟩ =          cn |n⟩
                                                           n=0

      then the function to be minimized is
                                                                                       !
                                             X                             X
                            F ({cn }, β) =         c∗n ⟨n|H|m⟩cm − β           |cn |2 − 1 .
                                             m,n                           n


 • The minimization conditions are then
                        ∂F    X                                       ∂F   X
                          ∗
                            =   ⟨n|H|m⟩cm − βcn = 0,                     =   |cn |2 − 1 = 0.
                        ∂cn   m
                                                                      ∂β   n

      However, this just tells us that |ψ⟩ is an eigenvector of the Hamiltonian restricted to our
      variational subspace, with eigenvalue β. Our upper bound on the ground state energy is just
      the lowest eigenvalue of this restricted Hamiltonian, which is intuitive.
223 9. Time Independent Perturbation Theory


 • This sort of procedure is extremely common when computing ground state energies numerically,
   since a computer can’t work with an infinite-dimensional Hilbert space. The variational principle
   tells us that we always overestimate the ground state energy by truncating the Hilbert space,
   and that the estimates always go down as we add more states.
                                       (M )
 • In fact, we can say more. Let βm be the mth lowest energy eigenvalue for the Hamiltonian
   truncated to a subspace of dimension M . The Hylleraas–Undheim theorem states that if we
   expand to a subspace of dimension N > M ,
                                            (N )    (M )          (N )
                                           βm    ≤ βm    ≤ βN −M +m .

    In particular, if the Hilbert space has finite dimension N , then the variational estimate can
    become exact, giving
                                                (M )
                                        Em ≤ βm      ≤ EN −M +m .
    This means that we can extract both upper bounds and lower bounds on excited state energies,
    though still only an upper bound for the ground state energy.

 • Another way to derive information about excited states is to use symmetry properties. For
   example, for an even one-dimensional potential, the ground state is even, so we get a variational
   upper bound on the first excited state’s energy by using odd trial wavefunctions. More generally,
   we can upper bound the energy of the lowest excited state with any given symmetry.

