---
id: kevin-zhou-notes-phy-ex067
source: kevin-zhou-notes
native_id: "phy Example 067"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex067
topic: [quantum-physics]
subtopic: [semiclassical-approximation, turning-points]
math_tools: [differential-equations, calculus, taylor-expansion, small-parameter-approximation]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7420-7571"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. A particle with spin s in a magnetic field of fixed magnitude. The parameter space S 2
is in magnetic field space. We may define states in this space as

                                |θ, ϕ, m⟩ = eiϕm e−iϕSz e−iθSy |0, 0, m⟩.

This is potentially singular at θ = 0 and θ = π, and the extra phase factor ensures there is no
singularity at θ = 0. The Berry connection is

                                       A(m) = m(cos θ − 1) dϕ

by direct differentiation, which gives a field strength
                                                      Z
                                    (m)
                                   Fϕθ = m sin θ,              F = 4πm.
                                                          S2

Hence we have a magnetic monopole in B-space of strength proportional to m, and the singularity
in the states and in A(m) is due to the Dirac string.
Next, we consider the Born–Oppenheimer approximation, an important application.

 • In the theory of molecules, the basic Hamiltonian includes the kinetic energies of the nuclei
   and electrons, as well as Coulomb interactions between them. We have a small parameter
   κ ∼ (m/M )1/4 where m is the electron mass and M is the mass of the nuclei.

 • In a precise treatment, we would expand in orders of κ. For example, for diatomic molecules
   we can directly show that electronic excitations have energies of order E0 = e2 /a0 , where a0
   is the Bohr radius, vibrational modes have energies of order κ2 E0 , and rotational modes have
   energies of order κ4 E0 . These features generalize to all molecules.

 • A simpler approximation is to simply note that if the electrons and nuclei have about the same
   kinetic energy, the nuclei move much slower. Moreover, the uncertainty principle places weaker
   constraints on their positions and momenta. Hence we could treat the positions R of the nuclei
   as classical, giving a Hamiltonian Helec (r, p; R) for the electrons,
                                                                                
                                X p2        2
                                          e      X       1        X      Zα
                                    i
                        Helec =       +                          −               .
                                   2m 4πϵ0            |ri − rj |      |ri − Rα |
                                 i                 i̸=j                  iα

    The total Hamiltonian is
                                                    X P2                e2 X Zα Zβ
                                                               α
                     H = Hnuc + Helec ,    Hnuc =                  +                   .
                                                     α
                                                          2Mα          4πϵ0 |Rα − Rβ |
                                                                              α̸=β

 • Applying the adiabatic theorem to variations of R in Helec , we find eigenfunctions and energies

                                            ϕn (r; R),     En (R)

    for the electrons alone. We can hence write the wavefunction of the full system as
                                                X
                                         |Ψ⟩ =     |Φn ⟩|ϕn ⟩
                                                     n

    where |Φn ⟩ is a nuclear wavefunction. The Schrodinger equation is

                                        (Hnuc + Helec )|Ψ⟩ = E|Ψ⟩.


 • To reduce this to an effective Schrodinger equation for the nuclei, we act with ⟨ϕm |, giving
                             X
                                ⟨ϕm |Hnuc |ϕn Φn ⟩ + Em (R)|ϕm ⟩ = E|ϕm ⟩.
                                 n

      Then naively, Hnuc is diagonal in the electron space and the effective Schrodinger equation
      for the nuclei is just the ordinary Schrodinger equation with an extra contribution to the
      energy, Em (R). This shows quantitatively how nuclei are attracted to each other by changes
      in electronic energy levels, in a chemical bond.

 • A bit more accurately, we note that Hnuc contains ∇2α , which also acts on the electronic
   wavefunctions. Applying the product rule and inserting the identity,
                                 X
             ⟨ϕm |∇2α |ϕn Φn ⟩ =   (δmk ∇α + ⟨ϕm |∇α |ϕk ⟩) (δkn ∇α + ⟨ϕk |∇α |ϕn ⟩) |Φn ⟩.
                                     k

      Off-diagonal elements are suppressed by differences of electronic energies, which we assume are
      large. However, differentiating the electronic wavefunction has converted ordinary derivatives
      to covariant derivatives, giving
                               X ℏ2                  e 2 X Zα Zβ
                       eff
                      Hnuc =         (∇α − iAα )2 +                  + En (R).
                               α
                                 2Mα                4πϵ0  |Rα − Rβ |
                                                             α̸=β

      The electron motion provides an effective magnetic field for the nuclei.

5.4     Particles in Electromagnetic Fields
Next, we set up the quantum mechanics of a particle in an electromagnetic field.

 • The Hamiltonian for a particle in an electromagnetic field is

                                                  (p − qA)2
                                             H=             + qϕ
                                                     2m
      as in classical mechanics. Here, p is the canonical momentum, so it corresponds to −iℏ∇.

 • There is an ordering ambiguity, since A and p do not commute at the quantum level. We
   will set the term linear in A to p · A + A · p, as this is the only combination that makes H
   Hermitian, as one can check by demanding ⟨ψ|H|ψ⟩ to be real. Another way out is to just stick
   with Coulomb gauge, ∇ · A = 0, since in this case p · A = A · p.

 • The kinetic momentum is π = p − qA and the velocity operator is v = π/m. The velocity
   operator is the operator that should appear in the continuity equation for probability, as it
   corresponds to the classical velocity.

 • Under a gauge transformation specified by an arbitrary function α, called the gauge scalar,

                                         ϕ → ϕ − ∂t α,   A → A + ∇α.

      As a result, the Hamiltonian is not gauge invariant.


  • In order to make the Schrodinger equation gauge invariant, we need to allow the wavefunction
    to transform as well, by
                                           ψ → eiqα/ℏ ψ.
    If the Schrodinger equation holds for the old potential and wavefunction, then it also holds for
    the gauge-transformed potential and wavefunction. Roughly speaking, the extra eiqα/ℏ factor
    can be ‘pulled through’ the time and space derivatives, leaving behind extra ∂µ α factors that
    exactly cancel the additional terms from the gauge transformation.

  • In the context of gauge theories, the reasoning goes the other way. Given that we want to
    make ψ → eiqα/ℏ ψ a symmetry of the theory, we conclude that the derivative (here, p) must
    be converted into a covariant derivative (here, π).

  • The phase of the wavefunction has no direct physical meaning, since it isn’t gauge invariant.
    Similarly, the canonical momentum isn’t gauge invariant, but the kinetic momentum π is. The
    particle satisfies the Lorentz force law in Heisenberg picture if we work in terms of π.

  • The fact that the components of velocity v don’t commute can be understood directly from
    our intuition for Poisson brackets; in the presence of a magnetic field parallel to ẑ, a particle
    moving in the x̂ direction is deflected in the ŷ direction.

Note. As mentioned above, we can think of qA as “potential momentum”. For example, suppose a
particle is near a solenoid, which is very rapidly turned on. According to the Schrodinger equation,
p does not change during this process if it is sufficiently fast. On the other hand, the particle
receives a finite impulse since
                                                     ∂A
                                              E=−        .
                                                      ∂t
This changes the kinetic and potential momenta by opposite amounts, keeping the canonical mo-
mentum the same. Another place this picture works is in the interaction of charges and monopoles,
since we have translational invariance, giving significant insight into the equations of motion.

Electromagnetic fields lead to some interesting topological phenomena.

