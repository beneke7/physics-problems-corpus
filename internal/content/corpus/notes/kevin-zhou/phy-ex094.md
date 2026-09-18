---
id: kevin-zhou-notes-phy-ex094
source: kevin-zhou-notes
native_id: "phy Example 094"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex094
topic: [quantum-mechanics]
subtopic: [scattering]
math_tools: [calculus, differential-equations, perturbation-theory]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "13653-13882"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. We consider scattering off the Yukawa potential
                                          e−κr                  2A       1
                              U (r) = A        ,    U
                                                    e (q) =
                                           r                  (2π)1/2 κ2 + q 2
which arises in nuclear physics because it is the Green’s function for the Klein-Gordan equation.
Applying our scattering formula, q = k − ki and hence q 2 = 4k 2 sin2 (θ/2), giving
                                 dσ   4A2 m2           1
                                    =                               .
                                 dΩ     ℏ4 (4k 2 sin2 (θ/2) + κ2 )2
In particular, in the case of Coulomb scattering, κ → 0 and A = Z1 Z2 e2 , giving
                                     dσ  Z 2 Z 2 e4 m2      1
                                        = 1 24 4          4      .
                                     dΩ     4ℏ k       sin (θ/2)
This is the Rutherford cross section, the exact result for classical nonrelativistic Coulomb scattering.
It is also the exact result in nonrelativistic quantum mechanics if the particles are distinguishable,
though we couldn’t have known this as we only computed the first term in a perturbation series.
    However, the scattering amplitude for the Coulomb potential turns out to be incorrect by phase
factors, because the Coulomb potential doesn’t fall off quickly enough. This doesn’t matter for
distinguishable particles, but for identical particles it renders our answer incorrect because we must
combine distinct scattering amplitudes with phases intact. The correct answer for two electrons is
called the Mott cross section.

11.3    Atoms in Fields
To begin, we consider the photoelectric effect as an extended example.

  • We consider photons of energy E0 = ℏω0 and momentum p0 = ℏk0 incident on a single-electron
    atom in the ground state |g⟩ with energy Eg , and compute the rate at which the electron is
    ejected into a plane-wave final state |k⟩.
  • By conservation of energy, we must have ℏω0 > |Eg |, and we further assume that
                                                   ℏω0 ≫ |Eg |.
    This is necessary because of the long-range Coulomb field of the nucleus; by assuming this, we
    can ignore the field and consider the ejected electron to be approximately free.
  • We also require that the electron be nonrelativistic, with final energy
                                            E = ℏω0 + Eg ≪ mc2 .
    For hydrogen, these constraints imply 100 eV ≲ ℏω0 ≲ 100 keV, which contains the far UV and
    X-ray ranges.
  • We model the light wave classically, with potentials
                                    ϕ = 0,     A(x, t) = A0 ϵei(k0 ·x−ωt) .
    This is a common choice for treating plane waves in a nonrelativistic context. Using the
    transversality condition ϵ·k0 = 0 shows that the vector potential is in Coulomb gauge, ∇·A = 0,
    and hence as operators, p · A = A · p. (Note that at the quantum level, k0 is not an operator
    but x and p above both are.)


 • We use the standard replacement p → p + eA/c, which gives perturbing Hamiltonian
                                                       e
                                               H1 =       p · A.
                                                       mc
   Since we are working to first order, we neglect the A2 term.

 • In particular, this is of a sinusoidal form with
                                                   eA0
                                           K=          (ϵ · p)eik0 ·x .
                                                   mc
   Hence the transition rate is, by Fermi’s golden rule,
                      dw     2π X                                         E − ℏω0 − Eg
                         ∆Ω = 2   |⟨k|K|g⟩|2 ∆t (ω),                 ω=                ,
                      dΩ     ℏ                                                 ℏ
                                     k∈cone

   where we take the sum over final states in a cone of solid angle ∆Ω.

 • We next convert from dw/dΩ to a cross-section dσ/dΩ using
                                                  dw         dσ
                                                     = ni vi    .
                                                  dΩ         dΩ
   Now, the velocity is simply vi = c, while the number density can be found by computing the
   energy in two different ways,

                                                          E2 + B2  ω 2 A2
                                   u = ni ℏω0 ,     u=            = 0 20
                                                            8π      2πc
   which tells us that
                                                          k0 A20
                                                   ni =          .
                                                          2πℏc
 • Next, we compute the matrix element. We have

                                 ⟨k|(ϵ · p)eik0 ·x |g⟩ = ℏ(ϵ · k)⟨k|eik0 ·x |g⟩.

   The remaining factor is proportional to ψeg (q) where q = k − k0 by logic we’ve seen before. Note
   that for typical optics applications, where k0 is in the visible range and hence eik0 ·x varies slowly,
   we often expand the exponential instead, yielding a multipole expansion. We will describe this
   in more detail in the notes on Optics.

 • Putting everything together, taking ∆t (ω) → δ(ω), and simplifying gives

                                   dσ        e2 kf
                                      = (2π)2 2 (ϵ · kf )2 |ψeg (q)|2
                                   dΩ        mc k0
   where the magnitude of the final momentum kf is set by energy conservation. We can then
   proceed further with an explicit form for |g⟩, which would show that harder (higher energy)
   X-rays penetrate further, and that larger atoms are more effective at stopping them.

 • Why isn’t momentum conserved here, if energy is? Momentum is absorbed by the nucleus,
   which we have implicitly assumed to be infinitely heavy by taking the potential as static; a
   proper treatment of the nucleus would be able to compute its recoil.


 • Without the nucleus present, the reaction γ + e → e would be forbidden. The same effect is
   observed in Bremsstrahlung, e → e + γ, which only occurs when matter is nearby to absorb
   the momentum. (However, note that gamma decay in isolated nuclei is allowed, as is photon
   emission from isolated atoms. This is because the initial and final nuclei/atoms have different
   rest masses.)

 • Note that this derivation has treated the electromagnetic field as completely classical. Contrary
   to what is usually taught, the photoelectric effect is not direct evidence for photons: quantizing
   the matter alone is sufficient to make its energy transfer with the field discrete, even if the field
   is treated classically! However, the photoelectric effect did play an important historical role in
   the advent of quantum mechanics.

 • Of course, we could also have treated this entirely within quantum mechanics. We quantize
   the electromagnetic field, and put it in a coherent state. The coupling between the atom and
   field is still H1 ∝ p · A, but now this perturbation is time-independent. The logic is still the
   same, though, and our time-dependent perturbation theory results can be applied and give the
   same answer. In general, time-dependence in perturbations only arises from objects “outside
   the system”, whose dynamics we aren’t modeling quantum mechanically.

We now make some remarks about treating the electromagnetic field.

 • In our study of atomic physics, we neglected the dynamics of the electromagnetic field entirely,
   just assuming an instantaneous Coulomb attraction between charges. However, this isn’t right
   even classically: one must account for magnetic fields, retardation, and radiation.

 • If the velocities are low, and the retardation effects are negligible, one can account for magnetic
   fields by adding velocity-dependent terms to the Lagrangian, resulting in the Darwin Lagrangian.
   While we don’t do this explicitly, the spin-orbit coupling was very much in this spirit.

 • To account for retardation and radiation, we are forced to consider the dynamics of the field itself.
   In fact, for multi-electron atoms, retardation effects are of the same order as the fine structure.
   Radiation is also important, since it plays a role whenever an atom decays by spontaneous
   emission of a photon, but we’ve managed to get by treating this implicitly.

 • Now suppose we do include the full dynamics of the field. Classically, there are two categories
   of “easy” electromagnetism problems: those in which the field is given, and those in which the
   charges and currents are given. Cases where we need to solve for both, as they affect each other,
   are very difficult.

 • In the semiclassical theory of radiation, one treats the charges with quantum mechanics but the
   field as a fixed, classical background, neglecting the backreaction of the charges. As we have
   seen above, this approach can be used to compute the rate of absorption of radiation.

 • It is more difficult to compute the rate of spontaneous emission, since the classical background is
   simply zero in this case, but it can be done indirectly with thermodynamics, using the Einstein
   coefficients. (In quantum field theory, one can compute the spontaneous emission rate directly,
   or heuristically describe it as stimulated emission due to “vacuum fluctuations”, i.e. the residual
   dispersion of the field in the ground state.)


 • Any attempt to incorporate backreaction while keeping the field classical is ultimately incon-
   sistent. For example, one can measure a classical field perfectly, leading to a violation of the
   uncertainty principle.

 • The semiclassical theory also leads to violation of conservation of energy. For instance, if an
   atom has a 50% chance of dropping in energy by ℏω, then the energy of the classical field must
   be ℏω/2 to preserve the expectation value of energy. But the whole point is that energy is
   transfered to the field in only multiples of ℏω. Any option for the field’s energy violates energy
   conservation, and fundamentally arises because quantum systems can have indefinite energy,
   while classical systems can’t.

 • The same problems occur in semiclassical theories of gravity. Instead, a proper description must
   involve the quantization of the electromagnetic field itself, carried out in the notes on Quantum
   Field Theory. For some examples where such a description is required, within the context of
   atomic physics, see The Concept of the Photon—Revisited. A fuller account of the interaction
   of atoms with quantized light is given in the notes on Optics.

11.4   Quantum Dynamics
In this section, we cover some useful examples of time evolution, which appear in atomic, molecular,
and optical physics. Further examples are give in the notes on Optics.

 • In general, we can define an alternative picture using any unitary operator,

                          |ψS (t)⟩ = UT (t)|ψT (t)⟩,   AT (t) = UT† (t)AS (t)UT (t).

    Focusing solely on the time evolution, |ψT (t)⟩ evolves according to the Schrodinger equation
    with Hamiltonian
                            HT (t) = UT† (t)H(t)UT (t) − iℏUT† (t)(∂t UT (t)).
    This includes our previous pictures as special cases. For example, if we pick UT (t) to be the exact
    time evolution operator, then HT (t) = 0, recovering Heisenberg picture. Or, if the Hamiltonian
    can be written as H(t) = H0 + V (t), then setting UT (t) = e−iH0 t/ℏ recovers interaction picture.

 • As an example, consider the driven harmonic oscillator,

                                        p2  1
                                  H=       + mω02 x2 + 2Fω cos(ωd t)x.
                                        2m 2
    This can be simply written in terms of creation and annihilation operators as
                                                                           r
                             †                †    iωd t   −iωd t              ℏ
                   H = ℏω0 a a + xzp Fω (a + a )(e       +e       ), xzp =        .
                                                                             2mω0

 • Now suppose that the drive is near resonance, |ωd − ω0 | ≪ ω0 . In this case, we know that in
   interaction picture, two of the four driving terms evolve slowly, while the other two oscillate
   rapidly. We drop them with the rotating wave approximation, giving

                                H = ℏω0 a† a + xzp Fω (eiωd t a + e−iωd t a† ).


  • If we went to interaction picture, we would get a Hamiltonian with only slowly varying terms.
    But often it’s more convenient to have a Hamiltonian with no time dependence at all. We
                                                                                      †
    can achieve this by going into “the frame of the drive”, setting UT (t) = e−iωd a at . This is still
    simple enough so that it’s trivial to go back to the Schrodinger picture states, but we now have

                                  HT = ℏ(ω0 − ωd )a† a + xzp Fω (a† + a).

    In this form, it’s clear that the only resonant frequency is ωd = ω0 . If the perturbation is far
    off resonance, then if we start in state |n⟩, all that happens is that the states |n ± 1⟩ get small
    coefficients, rapidly oscillating with amplitude xzp Fω /ℏ(ω0 − ωd ).

  • As another example, consider a parametrically driven harmonic oscillator,

                                p2  1
                           H=      + mω02 (1 + ϵ(t))x2 ,      ϵ(t) = ϵ0 cos(2ωd t).
                                2m 2
    Assuming that ωd ≈ ω0 and using the rotating wave approximation again gives
                                                    ϵ0 2iωd t 2             2
                               H = ℏω0 a† a + ℏω0     (e     a + e−2iωd t a† ).
                                                    8
    This can be made time-independent with the same transformation as in the previous example,
                                                               ϵ0 2     2
                                 HT = ℏ(ω0 − ωd )a† a + ℏω0      (a + a† ).
                                                               8

