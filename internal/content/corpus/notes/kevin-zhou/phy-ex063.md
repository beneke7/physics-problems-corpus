---
id: kevin-zhou-notes-phy-ex063
source: kevin-zhou-notes
native_id: "phy Example 063"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex063
topic: [quantum-physics]
subtopic: [bound-states, wave-mechanics]
math_tools: [differential-equations, calculus]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7010-7172"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Suppose a particle is in an attractive, short-ranged potential gV (x). What happens
to the bound state energies as the potential gets very weak, g → 0? In general, as an attractive
potential gets weaker, the number of bound states decreases, but one bound state always remains,
as we will prove later with the variational principle.
   Now let’s suppose we only have one bound state left, of energy −E0 . What is confusing here is
that E0 and gV should both decrease as g → 0, so what could it mean for the potential to be weak?
To understand this, note that when the potential is strong, it dominates the Schrodinger equation.
The bound state wavefunctions have to follow the potential’s wiggles in detail, oscillating rapidly
when it goes above E0 , and growing or shrinking rapidly when it goes below E0 . Therefore, the
opposite limit g → 0 means the wavefunction changes slowly over the range of the potential, which
means the potential can be approximated as a delta function,
                                               Z ∞
                               gV (x) → gδ(x)       V (x) dx = g ′ δ(x).
                                                −∞

To say this another way, the potential is short ranged for our purposes precisely when this integral
exists. Solving the Schrodinger equation for a delta function is straightforward. We must have
exponentials decaying away on both sides,
                                           ( √
                                             e 2mE x/ℏ    x<0
                                  ψ(x) ∝      −
                                                √
                                                  2mE x/ℏ
                                                                .
                                             e            x>0

The delta function produces a change of slope at the origin, g ′ ψ(0) = (ℏ2 /2m)∆ψ ′ (0), which gives
                                               Z ∞            2
                                        g2m
                                   E0 =                V (x) dx .
                                        2ℏ2       −∞

Note. The probability density and current are
                                          1
                          ρ = |ψ|2 ,   J = (ψ ∗ vψ + ψvψ ∗ ) = Re(ψ ∗ vψ)
                                          2
where the velocity operator is defined in general by Hamilton’s equations,
                                                   ∂H
                                              v=      .
                                                   ∂p
132 5. Fundamentals of Quantum Mechanics


In simple cases where the kinetic term is p2 /2m, this implies

                                                 p    iℏ
                                            v=     = − ∇.
                                                 m    m
The probability density and current satisfy the continuity equation
                                            ∂ρ
                                               + ∇ · J = 0.
                                            ∂t
In particular, note that for an energy eigenfunction, J = 0 identically since it can be chosen real.
Also note that with a magnetic field, we would have v = (p − qA)/m instead.
   However, physically interpreting ρ and J is subtle. For example, consider multiplying by the
particle charge q, so we have formal charge densities and currents. It is not true that a particle
sources an electromagnetic field with charge density eρ and current density eJ. The electric field of
a particle at x is
                                                  q(r − x)
                                         Ex (r) =          .
                                                  |r − x|3
Hence a perfect measurement of E is a measurement of the particle position x. Thus for the
hydrogen atom, we would not measure an exponentially small electric field at large distances, but
a dipole field! The state of the system is not |ψ⟩ ⊗ Eρ , but rather an entangled state like
                                           Z
                                             dx |x⟩ ⊗ |Ex ⟩

where we consider only the electrostatic field. To avoid these errors, it’s better to think of the
wavefunction as describing an ensemble of particles, rather than a single “spread out” particle.
(However, note that if the measurement takes longer than the characteristic orbit time of the
electron, then we will only see the averaged field due to qJ.)

We now consider identities for expectation values, generally referred to as Ehrenfest relations.

  • As we’ll see in more detail later, in Heisenberg picture the operators evolve according to the
    Heisenberg equation of motion,
                                            dA                  ∂A
                                       iℏ      = [A, H(t)] + iℏ
                                            dt                  ∂t
    where ∂A/∂t describes the change of the operator in Schrodinger picture. This is the easiest
    way to link our quantum results to classical mechanics, since it looks like Hamilton’s equations.

  • Upon taking the expectation value of both sides, we get a result that is independent of picture,
                                                                
                                  d        i                 ∂A
                                     ⟨A⟩ = ⟨[H(t), A]⟩ +           .
                                  dt       ℏ                  ∂t

    For example, suppose that A is a constant operator which describes a symmetry of the system,
    [A, H(t)] = 0. Then its expectation value is constant. In the classical limit, the distribution
    of A can generally be chosen sharply peaked, turning this expectation value into a definite
    classical value, and recovering the classical notion of a conservation law.
133 5. Fundamentals of Quantum Mechanics


  • In general, a relation between quantum expectation values that parallels a classical result is
    called an Ehrenfest relation. For example, for a single particle with Hamiltonian p2 /2m + V (x),
    we have Heisenberg equations of motion
                                        i        p                  i
                                  ẋ = − [x, H] = ,           ṗ = − [p, H].
                                        ℏ        m                  ℏ
    Taking the expectation values gives the Ehrenfest relations

                           d⟨x⟩   ⟨p⟩       d⟨p⟩                        d2 ⟨x⟩
                                =     ,          = −⟨∇V ⟩,          m          = −⟨∇V ⟩
                            dt     m         dt                          dt2
    which holds exactly.

  • When the particle is well-localized, we can replace ⟨∇V ⟩ with ∇V (⟨x⟩, t), which implies that
    ⟨x⟩ obeys the classical equations of motion. In fact, this result holds more generally than just
    in the classical limit. Replacing ⟨∇V ⟩ with ∇V (⟨x⟩, t) is exact when ∇V is at most linear in
    x, and thus exact when V is at most quadratic in x.

  • Thus, ⟨x⟩ satisfies the classical equations of motion for a particle in a harmonic potential or
    gravitational field, a charged particle in a uniform electric field, and a neutral particle with a
    magnetic moment in a linearly changing magnetic field (as in the Stern–Gerlach experiment)
    It remains true when the Hamiltonian is at most quadratic in p and x jointly, which means it
    also holds for a charged particle in a uniform magnetic field.

  • Setting A = xp for a particle in potential V (x) and kinetic energy T = p2 /2m gives
                                          d
                                             ⟨xp⟩ = 2⟨T ⟩ − ⟨r · ∇V ⟩.
                                          dt
    In a stationary state, the left-hand side vanishes, giving the quantum virial theorem.

  • For a power law potential, V (x) ∝ rn , this reduces to
                                                          n
                                                 ⟨T ⟩ =     ⟨V ⟩.
                                                          2
    This gives reasonable and classically expected results for the harmonic oscillator, where n = 2,
    and the Coulomb potential, where n = −1.

Note. Just as in classical mechanics, applying the virial theorem comes with pitfalls, because we
need to make sure we’re in an appropriate stationary state. For instance, for a repulsive Coulomb
potential we find the nonsensical result that ⟨T ⟩ and ⟨V ⟩ have opposite sign, even though the
potential is everywhere positive. This is because that potential has no bound states, and for the
unbound states ⟨xp⟩ is not even defined. Another example is the attractive Coulomb potential in
one spatial dimension. Here, there is no angular momentum barrier, which means the particle can
fall “all the way in”, to infinite negative potential energy, making the expectation values singular.
The potential well has to be regularized in an appropriate way, which then renders the virial theorem
inapplicable. The precise nature of the bound states seems to depend sensitively on the way the
regularization is performed, leading to continued controversy in the literature, where this system is
called the “one-dimensional hydrogen atom”.
    For the potential −a/x2 potential in one dimension, the virial theorem gives ⟨T ⟩ + ⟨V ⟩ = 0,
which seems to suggest there are no bound states. However, for sufficiently large a, solutions to
134 5. Fundamentals of Quantum Mechanics


the time-independent Schrodinger equation with negative total energy do exist; it’s just that they
behave too wildly as x → 0, causing ⟨xp⟩ to not be defined. But as described in detail here, there
are far deeper pathologies at play: in such a potential, the Schrodinger equation has no parameters
with dimensions of length, or energy! This symmetry implies there is a continuous infinity of states
with negative energy, related to each other by scaling, and reaching arbitrarily low total energy.
There is no ground state, and each of these bound states has an infinite number of nodes.
   This pathology occurs in any dimension, as long as the potential is strong enough, because
for dimension d > 1 the angular momentum barrier is also proportional to 1/r2 , and adding it
thus only shifts the coefficient a. As with the Coulomb potential in one dimension, the potential
must be regularized to get reasonable results. Any regulator breaks the scaling symmetry and thus
sets a scale for the ground state energy (which is completely normal, with no nodes), providing a
simple example of an anomaly. Once the regularization is in place, we can compute observables
without problems. For instance, though we can’t predict the ground state energy, we can derive
a relationship between the ground state energy and the scattering phase shift, providing a simple
example of renormalization.
