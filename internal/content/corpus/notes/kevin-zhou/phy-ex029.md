---
id: kevin-zhou-notes-phy-ex029
source: kevin-zhou-notes
native_id: "phy Example 029"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex029
topic: [electromagnetism]
subtopic: [dielectrics, polarization]
math_tools: [electrostatics, superposition]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "2687-3101"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Consider a sphere of radius R with uniform polarization P. This is equivalent to having
two uniformly charged balls of total charge ±Q displaced by d so that Qd = (4πR3 /3)P. By the
shell theorem, the field inside is
                                                   P
                                           Ep = −
                                                  3ϵ0
and the field outside is exactly a dipole field. Now suppose such a dielectric sphere is in a uniform
field. The total field is
                                             E = E0 + Ep
where E0 is the applied external field, and we know that

                                                P = χe ϵ0 E.

Solving the system, we find
                               3                   κ−1            χe
                         E=       E0 ,    P=3          ϵ0 E0 =           ϵ0 E0 .
                              κ+2                  κ+2         1 + χe /3

For small χe this is about equal to the naive result P = χe ϵ0 E0 , but it is smaller because the sphere
itself shields the field that it sees. This is important for relating χe to atomic measurements. The
polarizability of an atom is defined as
                                                 p = αE0
where we only count the applied field E0 , because the field produced by the atom itself is negligible.
Then naively for a medium with a number density n of atoms, χe = nα/ϵ0 . But instead we have
                                                   3ϵ0 κ − 1
                                            α=
                                                    n κ+2
which is called the Clausius–Mossotti formula, or the Lorentz–Lorenz equation in optics. One might
worry that this result only applies for a spherical sample, but we need only imagine a spherical
surface around each atom, much larger than the atomic size, for the argument to work.

Next, we turn to the analogous statements for magnetic fields. From the beginning, there is an
additional subtlety.

  • As discussed earlier, the “mechanical” potential energy of a magnetic dipole is

                                                Umech = −µ · B.

    It does not account for the energy required to maintain the magnetic dipole m or the field B,
    which could be supplied by an electromagnet, but its derivative yields the correct mechanical
    forces on the dipole.

  • The total field energy density is B 2 /2µ0 , so the interaction energy between two current distri-
    butions, the first of which is a dipole, is
                                       Z                Z
                                    1
                            U12 =        dr B1 · B2 = dr J1 · A2 = µ1 · B2 .
                                    µ0
    This is precisely the opposite of Umech .
52 2. Electromagnetism


 • To see the two results are consistent, one can show the work required to maintain the dipole’s
   current is U1 = µ1 · B2 . Then U1 + Umech = 0, reflecting the fact that magnetic fields do no
   work. Similarly the work required to maintain the external field is U2 = µ2 · B1 = µ1 · B2 by
   reciprocity. Therefore, we have
                                       U12 = Umech + U1 + U2
   which means the energy U12 is correctly accounted for, once we include all contributions.

 • In summary, U12 is the total interaction energy, but Umech is the energy one should use when
   computing forces on dipoles. The subtleties here have nothing to do with the ones we encoun-
   tered for dielectrics. They instead arise from using the wrong variables to describe the situation.
   In electrostatics, one can describe the interaction of two conductors by fixing their voltages or
   fixing their charges; in the former case we pick up an extra sign because batteries must do work
   to maintain the voltages. Similarly, in magnetostatics we can describe the interaction of two
   current distributions by fixing their currents or fixing their fluxes. Fluxes can be fixed for free,
   assuming perfect conductors, but currents must be fixed using batteries.

 • Conceptually, the opposite sign in the total energy compared to the electric dipole case is
   because electric and magnetic dipoles have opposite internal fields. A magnetic dipole aligned
   with a magnetic field increases the total field energy, while an electric dipole decreases it.

Now we consider the magnetization and magnetizing field.

 • Define the magnetization M as the dipole moment density. In a linear medium, we define
                                                 1 χm
                                           M=              B.
                                                 µ0 1 + χm
   This is not fully analogous to the definition of χe , and we’ll see why later.

     – Diamagnetic materials have −1 < χm < 0.
     – Superconductors, or permanent diamagnets have χm = −1 and hence B = 0. Superconduc-
       tivity should not be confused with perfect conductivity, which ensures E = 0 inside a solid.
       This makes B constant, but the constant need not be zero.
     – Paramagnets have χm > 0.
     – Ferromagnets can have M ̸= 0 even when B = 0.

    Diamagnets are repelled by regions of higher B field while paramagnets are attracted.

 • Note that a dielectric has χe > 0 but is attracted to regions of higher E. These sign flips are
   again because of the differences in the internal fields. Both dielectrics and diamagnets reduce
   the field in the bulk.

 • By similar manipulations to the electric case, we see that magnetization leads to the surface
   and volume currents
                              Kbound = M × n̂, Jbound = ∇ × M.

 • The magnetic field in Ampere’s law in sourced by all current,

                                      ∇ × B = µ0 (Jfree + Jbound ).
53 2. Electromagnetism


    We define the magnetizing field H so it is sourced only by free current,
                                           1
                                     H=       B − M,      ∇ × H = Jfree .
                                           µ0

 • In a linear medium, we then have

                                M = χm H,       µ = µ0 (1 + χm ),     B = µH

    where µ is called the permeability of the material. Note that the definition of χm is different
    from that of χe , which instead related D and E.

 • The asymmetry is because Jfree and hence H is easy to measure, by using an ammeter outside
   of the material. But a voltmeter indirectly measures E, which depends on the total charge ρ,
   not ρfree . The definitions of χm and χe are hence made so they are easy to measure.

 • In general, H is a much more useful quantity than D, though both are used for historical
   reasons. In fact, some sources regard H as the fundamental quantity and call it the magnetic
   field, referring to B to the magnetic induction.

 • As before, we may think of H as the magnetic field sourced by Jfree alone, but this is deceptive
   because ∇ · H ̸= 0. The boundary conditions are

                 ∆B∥ = µ0 (K × n̂),      ∆B⊥ = 0,      ∆H∥ = Kf × n̂,          ∆H⊥ = −∆M⊥ .

 • Just as for dielectrics, we may define the internal energy as
                                        Z                Z
                                      1                1
                                 U=        dr H · B =      dr A · Jfree .
                                      2                2
    This is subject to the same disclaimers as for dielectrics.

Note. Earnshaw’s theorem for magnets. We know that in free space, ∇2 V = 0, so one cannot
stably confine charges by an electrostatic field. Similarly, one might ask if it is possible to confine
magnetic materials using a magnetostatic field.
   The effective potential experienced by the material is proportional to |B|, and we know ∇ · B = 0
and ∇ × B = 0. Then the Laplacian of a field component vanishes,

                              ∂ 2 Bi = ∂j ∂j Bi = ∂j ∂i Bj = ∂i (∂j Bj ) = 0

where the second step uses the curl-free condition. We thus have

                          ∂ 2 (B 2 ) = 2Bi ∂ 2 Bi + 2∂j Bi ∂j Bi = 2(∂j Bi )2 ≥ 0.

Therefore, B 2 and hence |B| can have local minima but not local maxima. Since diamagnets
are attracted to regions with low |B|, we can have stable equilibrium for diamagnets but not
paramagnets.
   Examples of the former include superconducting levitation (since superconductors are perfect
diamagnets) and magnetic traps for atomic gases (when the atoms are chosen to be diamagnetic).
There’s also a cute toy called the levitron, which achieves stable levitation of a permanent magnet
spinning like a top. A permanent magnet behaves like a paramagnet, in the sense that it tends to
54 2. Electromagnetism


flip over to align with the magnetic field, but the spin of the top keeps the magnet anti-aligned with
the field, and thus behaving like a diamagnet.
    Similarly, a polarizable material experiences force

                                       F = −∇(−p · E) = α∇E 2

where α ≥ 0. By the same logic as above, an electrostatic field cannot have a local maximum for
E 2 , so it can’t trap polarizable particles. However, trapping is possible for time-varying fields, and
this is the principle behind laser tweezers.
Now we consider Maxwell’s equations in matter.

  • The main difference is that a time-dependent electric polarization yields a current,
                                                          ∂P
                                                   Jp =
                                                          ∂t
    in addition to the bound current Jb . Hence Ampere’s law takes the complicated form
                                                           
                                                        ∂P            ∂E
                           ∇ × B = µ0 J f + ∇ × M +           + µ0 ϵ0    .
                                                         ∂t           ∂t

  • Ampere’s law is significantly simplified by switching to H and D, giving
                                                               ∂D
                                            ∇ × H = Jf +          .
                                                               ∂t
    The other Maxwell equations are
                                                               ∂B
                                 ∇ · D = ρf ,    ∇×E=−            ,   ∇·B=0
                                                               ∂t
    and this formulation has the advantage of depending only on free charge and free current, which
    is why it often appears on electrical engineers’ t-shirts.

  • In a situation without free charge or free current, such as in a neutral insulator, we have
                                                   ∂B                            ∂D
                       ∇ · D = 0,     ∇×E=−           ,   ∇ · B = 0,     ∇×H=       .
                                                   ∂t                            ∂t
    Assuming the medium is linear, switching back to electric and magnetic fields gives
                                                   ∂B                                ∂E
                      ∇ · E = 0,     ∇×E=−            ,   ∇ · B = 0,    ∇ × B = µϵ
                                                   ∂t                                ∂t
    which are just the original Maxwell’s equations with a general µ and ϵ. Thus, for example, there
                                                           √
    are plane wave solutions propagating at speed v = 1/ µϵ ≡ c/n, with E0 = vB0 .

  • In other situations, we cannot ignore free charge and free current. For a conductor, we have
    Jf = σE, and assuming it is a linear medium, Maxwell’s equations become
                          ρf                    ∂B                                        ∂E
                 ∇·E=        ,    ∇×E=−            ,   ∇ · B = 0,     ∇ × B = µσE + µϵ       .
                           ϵ                    ∂t                                        ∂t
    However, the free charge exponentially decays,
                                    ∂ρf                          σ
                                        = −∇ · Jf = −σ(∇ · E) = − ρf
                                     ∂t                          ϵ
    which reflects the fact that the charge goes to the boundaries of a conductor.
55 2. Electromagnetism


 • In the limit that all the free charge has decayed away, the only new term is the µσE term in
   Ampere’s law. If we try to derive the wave equation as usual, by taking the curl of Ampere’s
   and Faraday’s laws, we find

                                     ∂2E      ∂E                 ∂2B      ∂B
                         ∇2 E = µϵ       + µσ    ,   ∇2 B = µϵ       + µσ    .
                                     ∂t2      ∂t                 ∂t2      ∂t
   The new term implies several effects. First, a plane wave with real k has complex ω, causing it
   to dissipate over time. A plane wave with real ω has complex k, which physically means that
   waves are reflected from the surface of a conductor, over a length scale called the skin depth.
   Finally, in the quasistatic limit where the ∂ 2 B/∂t2 term is negligible, the wave equation reduces
   to a diffusion equation for B, implying that an induced magnetic field spreads out.
56 3. Statistical Mechanics


3      Statistical Mechanics
3.1     Ensembles
First, we define the microcanonical ensemble.

    • The fundamental postulate of statistical mechanics is that, for an isolated system in equilibrium,
      all accessible microstate are equally likely. Here, accessible means ‘reachable due to small
      fluctuations’. For example, such fluctuations cannot modify conserved quantities.

    • For simplicity, we suppose that energy is the only conserved quantity. Then the probability of
      occupying state |n⟩ is
                                                        1
                                                pn =
                                                     Ω(E)
      where Ω(E) is the number of states with energy E.

    • We know that for a quantum system the energy levels can be discrete, but for a thermodynam-
      ically large system they form a continuum. Then what we really mean by Ω(E) is the number
      of states with energy in [E, E + δE] where δE specifies how well we know the energy.

    • We define the entropy of the system to be

                                            S(E) = kB log Ω(E).

      For two non-interacting systems, Ω multiplies, so S adds. That is, entropy is extensive.

    • Often, we consider systems in the classical limit. In this case, the many-particle equivalent of
      the WKB approximation applies, which states that for a system of N particles, there is one
      quantum state per hN of phase space volume. The entropy in this case can then be defined in
      terms of the logarithm of the volume of available phase space.

    • Now suppose we allow two systems to weakly interact, so they can exchange energy, but the
      energy levels of the states aren’t significantly shifted. Then the number of states is
                                                                                                
                            Y                              X        S1 (Ei ) + S2 (Etotal − Ei )
               Ω(Etotal ) =    Ω1 (Ei )Ω2 (Etotal − Ei ) =    exp                                  .
                                                                                kB
                            Ei                           Ei

      After allowing the systems to come to equilibrium, so that the new system is described by a
      microcanonical ensemble, we find the entropy has increased. This is an example of the Second
      Law of Thermodynamics.

    • Since S is extensive, the argument of the exponential above is huge in the thermodynamic limit,
      so we can approximate the sum by its maximum summand. (This is just the discrete saddle
      point method.) Then the final entropy is approximately Stotal = S1 (E∗ ) + S2 (Etotal − E∗ ) where
      E∗ is chosen to maximize Stotal .

Note. Motivating the fundamental postulate. In a generic dynamical system, we would expect
a generic initial distribution of states to settle into an “attractor”, thereby justifying equilibrium
ensembles. But the situation in Hamiltonian mechanics is subtler, because Liouville’s theorem tells
us that phase space attractors don’t exist. Instead, what happens is that any initial distribution
57 3. Statistical Mechanics


gets distorted and folded all throughout the phase space, so that after any coarse-graining, the
result looks like the microcanonical ensemble.
    To make this a little bit more rigorous, we note that in practice, we usually use statistical
mechanics to predict the time averages of single systems; the microcanonical ensemble is valid if
the time average equals the ensemble average. Let us consider a reduced phase space S which has
constant energy. We define an ergodic component of S to be a subset that remains invariant under
time evolution, and an ergodic system to be one whose ergodic components are measure zero, or
the same measure as S.
    By Liouville’s theorem, the microcanonical ensemble over S is time-independent, so its ensemble
average equals its time average. However, long time averages are constant along trajectories, so for
an ergodic system, time averages are the same starting from almost all of S. Therefore, the time
average starting from almost any point equals the microcanonical ensemble average.
    There are many different definitions of ergodicity, and it is generally hard to establish any.
(Ergodicity is also sometimes used as a synonym for chaos. Though they often appear together,
chaos is specifically about the exponential divergence of nearby trajectories, while ergodicity is
about what happens in the long run. There is another distinct criterion called “mixing”, which has
to do with the decay of autocorrelation functions.)
    This entire discussion gets far more complex when one moves to quantum statistical mechanics.
In quantum mechanics, the idea of a phase space distribution is blurred, and there is a huge variety
of time-independent ensembles, since energy eigenstates don’t evolve in time. However, many-body
energy eigenstates are generally extremely fragile superpositions, which are not observed in practice;
instead, such states quickly decohere into a mixture of non-eigenstates.

Note. Not every nontrivial, realistic system is ergodic. For example, if the solar system were
ergodic, then one would expect catastrophic results, such as Earth and Venus swapping places, or
Jupiter ejecting every planet from the solar system, as these are permitted by conservation laws.
   In the case where the planets don’t interact, the motion takes place on invariant tori. The KAM
theorem states that in the three-body problem, for sufficiently weak interplanetary interactions,
and for planetary orbit periods that were not resonant (i.e. close to simple rational numbers), the
tori are distorted but survive. Numerically, we find that stronger interactions completely destroy
the tori. This was the culmination of much work in the 19th century, which attempted to find
convergent series to describe the evolution.
   Ergodicity can also fail due to kinetic barriers. For example, a cold magnet with spontaneous
symmetry breaking will in practice never fluctuate to have its bulk magnetization point the opposite
direction, so to match with observation we must fix the magnetization, even though there is no
corresponding conservation law. Similarly, as glasses are cooled, they become trapped in one of
many metastable states.

Next, we define temperature.

  • Keeping V implicitly fixed for the partial derivatives below, we define the temperature T as
                                                1   ∂S
                                                  =    .
                                                T   ∂E
    Comparing this with our previous result, we find that in thermal equilibrium, the temperatures
    of the two systems are equal. Moreover, in the approach to equilibrium, energy flows from the
    hotter system to the colder one.
58 3. Statistical Mechanics


 • The heat capacity is defined as
                                                          Z
                                         ∂E                    C(T )
                                      C=    ,      ∆S =              dT.
                                         ∂T                     T
    Hence measuring the heat capacity allows us to measure the entropy.

 • Above, we are only guaranteed that E∗ maximizes Stotal if, for each of the two systems,

                                                 ∂ 2 Si
                                                        < 0.
                                                 ∂E 2
    If a system does not satisfy this condition, it is thermodynamically unstable. Placed in contact
    with a reservoir, it would never reach thermal equilibrium, instead emitting or absorbing as
    much energy as possible. In terms of the heat capacity, stability requires C > 0.

 • For example, black holes are hotter than the CMB, and so emit energy by Hawking radiation.
   Since they get hotter as they lose energy, they continue emitting energy until they disappear.

 • Another exotic option is for a system to have negative temperature. Such a system gets more
   ordered as it absorbs energy. From the purposes of entropy maximization, negative temperature
   is always “hotter” than any positive temperature. This weird behavior is just because the
   natural variable is 1/T . The simple general rule is that heat always flows to higher 1/T .

We now add pressure and volume as thermodynamic variables.

 • We now let Ω, and hence S, depend on volume. Define the pressure p as

                                                 ∂S      ∂E
                                          p=T         =−
                                                 ∂V E    ∂V S

    where we used the triple product rule. Then by similar arguments as above, the pressures of
    systems are equal in thermal equilibrium.

 • This might sound strange, because we are used to pressure balancing because of mechanical
   equilibrium. The point is that both mechanical and thermal equilibrium ensure pressure balance
   independently, even though in many cases the former might take effect much faster, e.g. when
   two gases are separated by a movable heat conducting piston.

 • Rearranging the total differential of entropy, we find

                                            dE = T dS − p dV.

   We call ‘work’ the energy transferred by exchange of volume; the rest is ‘heat’. More generally,
                                    P
   we can write the work as a sum      Ji dxi where the xi are generalized displacements and the Ji
   are their conjugate generalized forces, adding yet more terms.

 • In general, the (xi , Ji ) behave similarly to (S, T ). In equilibrium, the Ji are equal. For stability,
   we must have ∂ 2 E/∂x2 > 0, which implies that the matrix ∂Ji /∂xj is positive definite. For
   example, a gas with (∂p/∂V )|T > 0 is unstable to expansion or collapse.

Next, we define the canonical ensemble.
59 3. Statistical Mechanics


 • Consider a system S in thermal equilibrium with a large reservoir R. Then the number of
   microstates associated with a state where the system has energy En is
                                                                                          
                                       SR (Etotal − En )           SR (Etotal )    ∂SR En
         Ω = ΩR (Etotal − En ) = exp                       ≈ exp                −
                                             kB                        kB         ∂Etotal kB
    where the approximation holds because the reservoir is very large. Here we have summed over
    reservoir states, which one could call “integrating out” or “tracing out” the reservoir.

 • We conclude Ω ∝ e−En /kB T , so the probability of occupancy of a state n with energy En is

                                        e−En /kB T            X
                                 pn =              ,   Z=         e−En /kB T .
                                           Z                  n

    For convenience, we define β = 1/kB T . The partition function Z just normalizes the distribution.
    If one takes the ground state energy to be zero, it heuristically measures the number of available
    states.

 • One might protest that the only reason we get an exponential in the final result is because we
   chose to Taylor expand the logarithm of Ω, i.e. the entropy, and take just the leading term. More
   precisely, the derivation above holds only when the subleading terms really can be neglected in
   the thermodynamic limit. For a wide variety of systems, this is true of log Ω, but not Ω itself
   or other functions thereof, as we will see in the next example.

