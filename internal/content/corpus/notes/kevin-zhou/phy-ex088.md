---
id: kevin-zhou-notes-phy-ex088
source: kevin-zhou-notes
native_id: "phy Example 088"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex088
topic: [quantum-mechanics]
subtopic: [time-independent-perturbation-theory]
math_tools: [differential-equations, perturbation-theory]
format: explanation
kind: reference_example
has_solution: false
has_figure: true
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "12018-13166"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. A quartic potential. In certain convenient units, we let

                                                       d2
                                              H=−         + x4 .
                                                      dx2
The ground state energy can be shown numerically to be E0 ≈ 1.06. To get a variational estimate,
we can try normalized Gaussians, since these roughly have the right behavior and symmetry,
                                                       α  1/4            2
                                       ψ(x, α) =                e−αx /2 .
                                                      π
The expected energy is
                               r       Z
                                   α                                         2   α   3
                      E(α) =               dx (α − α2 x2 + x4 )e−αx =              + 2.
                                   π                                             2  4α
                           √
The minimum occurs at α∗ = 3 3, giving

                                               E(α∗ ) = 1.08

which is a fairly good estimate. Now, the first excited state has E1 ≈ 3.80. We can estimate this
with an odd trial wavefunction, such as
                                                            1/4
                                                     4α3

                                                                             2
                                   ψ(x, α) =                      xe−αx /2
                                                      π

which gives an estimate E(α∗ ) = 3.85.


Note. Bound states in various dimensions. To prove that bound states exist, it suffices by the
variational principle to exhibit any state for which ⟨H⟩ < 0.
   In one dimension, any overall attractive potential (i.e. one whose average potential is negative)
which falls off at infinity has a bound state. To see this, consider a Gaussian centered at the origin
with width λ. Then for large λ, the kinetic energy falls as 1/λ2 while the potential energy falls as
1/λ, since this is the fraction of the probability over the region of significant potential. Then for
sufficiently large λ, the energy is negative.
   This argument does not work in more than one dimension. In fact, the statement remains
true in d = 2, as can be proven using a more sophisticated ansatz, as shown here. In d = 3 the
statement is not true; for instance, a sufficiently weak delta function well doesn’t have any bound
states. Incidentally, for central potentials in d = 3, if there exist bound states, then the ground
state must be an s-wave. This is because, given any bound state that is not an s-wave, one can get
a variational wavefunction with lower ⟨H⟩ by converting it to an s-wave.

 Note. In second order nondegenerate perturbation theory, we saw that energy levels generally
“repel” each other, which means that the ground state is pushed downward at second order. This
 might lead us to guess that the first order result is always an overestimate of the ground state
 energy. That can’t be justified rigorously with perturbation theory alone, but it follows rigorously
 from the variational principle, because the first order result is just the energy expectation of the
 unperturbed ground state |0⟩.


10     Atomic Physics
10.1    Identical Particles
In this section, we will finally consider quantum mechanical systems with multiple, interacting
particles. To begin, we discuss some bookkeeping rules for identical particles.

 • We start by considering a system of two identical particles in an attractive central potential,

                                           p21   p2
                                     H=        + 2 + V (|x2 − x1 |).
                                           2m 2m
     Examples of such system include homonuclear diatomic molecules such as H2 and N2 or Cl2 .
     The statements we will make below only apply to these molecules, and not to heteronuclear
     diatomic such as HCl.

 • One might protest that diatomic molecules contain more than two particles; for instance,
   H2 contains two electrons and two protons. Here we’re really using the Born–Oppenheimer
   approximation. We are keeping track of the locations of the nuclei, assuming they move slowly
   relative to the electrons. The electrons only affect the potential, causing an attraction.

 • If the electronic state is 1 Σ, using standard notation for diatomic molecules, then the spin and
   orbital angular momentum of the electrons can be ignored. In fact, the ground electronic state
   of most diatomic molecules is 1 Σ, though O2 is an exception, with ground state 3 Σ.

 • The exchange operator switches the identities of the two particles. For instance, if each particle
   can be described with basis |α⟩, then

                                             E12 |αβ⟩ = |βα⟩.

     For instance, for particles with position and spin,

                                     E12 |x1 x2 m1 m2 ⟩ = |x2 x1 m2 m1 ⟩.

 • The exchange operator is unitary and squares to one, which means it is Hermitian. Furthermore,
                                       †
                                      E12 HE12 = H,        [E12 , H] = 0

     which indicates the Hamiltonian is symmetric under exchange.

 • There is no reasonable way to define an exchange operator for non-identical particles; everything
   we will say here makes sense only for identical particles.

 • Just like parity, the Hilbert space splits into subspaces that are even or odd under exchange,
   which are not mixed by time evolution. However, unlike parity, it turns out that only one of
   these subspaces actually exists for physical systems. If the particles have half-integer spin, only
   the odd subspace is ever observed; if the particles have integer spin, only the even subspace is
   observed. This stays true no matter how the system is perturbed or prepared.

 • This is the symmetrization postulate. In the context of nonrelativistic quantum mechanics, it
   is simply an experimental result, as we’ll see below. In the context of relativistic quantum field
   theory, it follows from simple physical assumptions by the spin-statistics theorem.


 • In the second quantized formalism of field theory, there is no need to (anti)symmetrize at all;
   the Fock space already contains only the physical states. The symmetrization postulate is a
   consequence of working with first quantized notation, where we give the particles unphysical
   labels and must subsequently take them away.

 • This also means that we must be careful to avoid using “unphysical” operators, which are not
   invariant under exchange. For example, the operator x1 has no physical meaning, not does the
   spin S1 , though S1 + S2 does.

We now illustrate this with some molecular examples.

 • We first consider 12 C2 , a homonuclear diatomic molecule where both nuclei have spin 0. It does
   not form a gas because it is chemically reactive, but it avoids the complication of spin.

 • As usual, we can transform to center of mass and relative coordinates,
                                          x1 + x2
                                     R=           ,   r = x2 − x1
                                             2
    which reduces the Hamiltonian to
                                             P2   p2
                                        H=      +    + V (r)
                                             2M   2µ

    where M = 2m and µ = m/2 is the reduced mass.

 • The two coordinates are completely decoupled, so energy eigenstates can be chosen to have the
   form Ψ(R, r) = Φ(R)ψ(r). The center of mass degree of freedom has no potential, so Φ(R) can
   be taken to be a plane wave,
                                       Φ(R) = exp(iP · R).
    The relative term ψ(r) is the solution to a central force problem, and hence has the form

                                       ψnℓm (r) = fnℓ (r)Yℓm (Ω).

    The energy is
                                                P2
                                           E=      + Enℓ .
                                                2M
 • For many molecules, the low-lying energy levels have the approximate form

                                        ℓ(ℓ + 1)ℏ2

                                                           1
                                 Enℓ =             + n+        ℏω
                                            2I             2

    where the first term comes from approximating the rotational levels using a rigid rotor, and
    the second term comes from approximating the vibrational levels with a harmonic oscillator,
    and I and ω depend on the molecule.

 • The exchange operator flips the sign of r, which multiplies the state by (−1)ℓ . This is like
   parity, but with the crucial difference that this selection rule is never observed to be broken.
   Spectroscopy tells us that all of the states of odd ℓ in 12 C2 are missing, a conclusion which is
   confirmed by thermodynamic measurements.


 • Furthermore, levels are not missing if the nuclei are different isotopes, even though, without
   the notion of identical particles, the difference in the masses of the nuclei should be too small
   to affect anything. Results like this are the experimental basis of the symmetrization postulate.

 • Next we consider the hydrogen molecule H2 , where the nuclei (protons) have spin 1/2. Naively,
   the interaction of the nuclear spins has a negligible effect on the energy levels. But the spins
   actually have a dramatic effect due to the symmetrization postulate.

 • We can separate the wavefunction as above, now introducing spin degrees of freedom |m1 m2 ⟩.
   The total spin is in the representation 0 ⊕ 1, where the singlet 0 is odd under exchanging the
   spins, and the triplet 1 is even.

 • The protons are fermions, so the total wavefunction must be odd under exchange. Therefore,
   when the nuclear spins are in the singlet state, ℓ must be even, and we call this system
   parahydrogen. When the nuclear spins are in the triplet state, ℓ must be odd, and we call this
   system orthohydrogen. In general, “para” refers to a symmetric spatial wavefunction.

 • These differences have a dramatic effect on the thermodynamic properties of H2 gas. Since
   every orthohydrogen state is three-fold degenerate, at high temperature (where many ℓ values
   can be occupied), H2 gas is 25% parahydrogen and 75% orthohydrogen. At low temperatures,
   H2 gas is 100% parahydrogen.

 • Experimental measurements of the rotational spectrum of H2 at low temperatures played a
   crucial role in the discovery of spin, in the late 1920s. However, since it can take days for
   the nuclear spins to come to equilibrium, there was initially experimental confusion since
   experimentalists used samples of cooled H2 that were actually 75% orthohydrogen.

 • Note that we have taken the wavefunction to be the product of a spin and spatial part. Of
   course, this is only valid because we ignored spin interactions; more formally, it is because the
   Hamiltonian commutes with both exchanges of spin state and exchanges of orbital state alone.

Note. The singlet being antisymmetric and the triplet being symmetric under exchange is a special
case of a general rule. Suppose we add two identical spins j ⊕ j. The spin 2j irrep is symmetric,
because its top component is |m1 m2 ⟩ = |jj⟩, and applying L− preserves symmetry.
   Now consider the subspace with total Sz = 2j − 1, spanned by |j − 1, j⟩ and |j, j − 1⟩. This has
one symmetric and one antisymmetric state; the symmetric one is part of the spin 2j irrep, so the
antisymmetric one must be part of the spin 2j − 1 irrep, which is hence completely antisymmetric.
Then the next subspace has two symmetric and one antisymmetric state, so the spin 2j − 2 irrep is
symmetric. Continuing this logic shows that the irreps alternate in symmetry.

Note. A quick estimate of the equilibration time, in SI units. The scattering cross section for
hydrogen molecules is σ ∼ a20 , so the collision frequency at standard temperature and pressure is

                                        f ∼ va20 n ∼ 108 Hz.

During the collision, the nuclei don’t get closer than about distance a0 . The magnetic field experi-
enced by a proton is hence
                                               µ0 qv
                                         B ∼ 2 ∼ 0.1 T.
                                                a0


The collision takes time τ ∼ a0 /v. The resulting classical spin precession is

                                              µN B a0
                                       ∆θ ∼           ∼ 10−7
                                               ℏ v
and what this means at the quantum level is that the opposite spin component picks up an amplitude
of order ∆θ. The spin performs a random walk with frequency f and step sizes ∆θ, so it flips over
in a characteristic time
                                             1 1
                                      T ∼            ∼ 106 s
                                            f (∆θ)2
which is on the order of days.

10.2    Helium
We now investigate helium and helium-like atoms.

  • We consider systems with a single nucleus of atomic number Z, and two electrons. This includes
    helium when Z = 2, but also ions such as Li+ and H− . One nontrivial fact we will show below
    is that H− has a bound state, the H− ion.

  • We work in atomic units and place the nucleus at the origin. The basic Hamiltonian is

                                           p21 p22   Z   Z   1
                                     H=       +    −   −   +
                                           2    2    r1 r2 r12
    where r12 = |x2 −x1 |. This ignores fine structure, the Lamb shift, or hyperfine structure (though
    there is no hyperfine structure for ordinary helium, since alpha particles have zero spin). Also
    note that the fine structure now has additional terms, corresponding to the interaction of each
    electron’s spin with the spin or orbital angular momentum of the other. Interactions between
    the electrons also must account for retardation effects.

  • There is another effect we are ignoring, known as “mass polarization”, which arises because
    the nucleus recoils when the electrons move. To see this, suppose we instead put the center
    of mass at the origin and let the nucleus move. Its kinetic energy contributes a term P 2 /2M
    where P = −p1 − p2 .

  • The terms proportional to p21 and p22 simply cause the electron mass to be replaced with the
    electron-proton reduced mass, as in hydrogen. But there is also a cross-term (p1 · p2 )/2M ,
    which is a new effective interaction between the electrons. We ignore this here because it is
    suppressed by a power of m/M .

  • Under the approximations above, the Hamiltonian does not depend on the spin of the electrons
    at all; hence the energy eigenstates can be taken to have definite exchange symmetry under
    both orbital and spin exchanges alone, as we saw for H2 .

  • Thus, by the same reasoning as for H2 , there is parahelium (spin singlet, even under orbital
    exchange) and orthohelium (spin triplet, odd under orbital exchange). Parahelium and orthohe-
    lium behave so differently and interconvert so slowly that they were once thought to be separate
    species.


 • The main difference versus H2 is that it will be much harder to find the spatial wavefunction,
   since this is not a central force problem: the electrons interact both with the nucleus and
   with each other. In particular, since the nucleus can absorb momentum, we can’t separate the
   electron wavefunction into a relative and center-of-mass part. We must treat it directly as a
   function of all 6 variables, ψ(x1 , x2 ).

 • We define the total orbital and spin angular momentum

                                      L = L1 + L2 ,    S = S1 + S2 .

   We may then label the energy eigenstates by simultaneously diagonalizing L2 , Lz , S 2 , and Sz ,

                                H|N LML SMS ⟩ = EN LS |N LML SMS ⟩.

   The standard spectroscopic notation for EN LS is N 2S+1 L, where L = S, P, D, F, . . . as usual.
   Here, S = 0 for parahelium and S = 1 for orthohelium, and this determines the exchange
   symmetry of the orbital state, and hence affects the energy.

 • In fact, we will see that S has a very large impact on the energy, on the order of the Coulomb
   energy itself. This is because the exchange symmetry of the orbital wavefunction has a strong
   influence on how the electrons are distributed in space. Reasoning in reverse, this means there
   is a large effective “exchange interaction” between spins, favoring either the singlet or the triplet
   spin state, which is responsible in other contexts for ferromagnetism.

Next, we look at some experimental data.

 • The ionization potential of an atom is the energy needed to remove one electron from the atom,
   assumed to be in its ground state, to infinity. One can define a second ionization potential by
   the energy required to remove the second electron, and so on. These quantities are useful since
   they are close to directly measurable.

 • For helium, the ionization potentials are 0.904 and 2 in atomic units. (For comparison, for
   hydrogen-like atoms it is Z 2 /2, so 1/2 for hydrogen.) In fact, helium has the highest first
   ionization potential of any neutral atom.

 • The first ionization potential tells us that continuum states exist at energies 0.904 above the
   ground state, so bound states can only exist in between; any purported bound states above the
   first ionization potential would mix with continuum states and become delocalized.

 • For H− , the ionization potentials are 0.028 and 0.5. The small relative size of the first gives
   rise to the intuition that H− is just an electron weakly bound to a hydrogen atom. There is
   only a single bound state, the 11 S.

 • The bound states for parahelium and orthohelium are shown below.




    These values are obtained by numerically solving our simplified Hamiltonian, and do not include
    fine structure or other effects. In principle, the values of L range from zero to infinity, while for
    each L, the values of N range up to infinity. The starting value of each N is fixed by convention,
    so that energy levels with similar N line up; this is why there is no 13 S state. Looking more
    closely, one can see that energy increases with L for fixed N (the “staircase effect”), and the
    energy levels are lower for orthohelium.

We now investigate the spectrum perturbatively.

 • We focus on the orbital part, and take the perturbation to be 1/r12 . This means the perturbation
   parameter is 1/Z, which is not very good for helium, and especially bad for H− . However, the
   results will be roughly correct, and an improved analysis is significantly harder.

 • The two electrons will each occupy hydrogen-like states labeled by nℓm, which we refer to as
   orbitals. Thus the two-particle eigenfunctions of the unperturbed Hamiltonian are

                                                                                Z2 1

                                         (0)                          (0)              1
              H0 |n1 ℓ1 m1 n2 ℓ2 m2 ⟩ = En1 n2 |n1 ℓ1 m1 n2 ℓ2 m2 ⟩, En1 n2 = −      +
                                                                                2 n21 n22

    if we neglect identical particle effects. Note that we use lowercase to refer to individual electrons,
    and uppercase to refer to the atom as a whole.

 • In order to account for identical particle effects, we just symmetrize or antisymmetrize the
   orbitals, giving
                              1
                             √ (|n1 ℓ1 m1 n2 ℓ2 m2 ⟩ ± |n2 ℓ2 m2 n1 ℓ1 m1 ⟩) .
                               2
    This has no consequence on the energy levels, except that states of the form |nℓmnℓm⟩ anti-
    symmetrize to zero, and hence don’t appear for orthohelium.

 • The energy levels are lower than the true ones, because the electrons repel each other. We also
   note that the “double excited” states with n1 , n2 ̸= 1 lie in the continuum. Upon including the
   perturbation, they mix with the continuum states, and are hence no longer bound states.


 • However, the doubly excited states can be interpreted as resonances. A resonance is a state
   that is approximately an energy eigenstate, but whose amplitude “leaks away” over time into
   continuum states. For example, when He in the ground state is bombarded with photons, there
   is a peak in absorption at energies corresponding to resonances.

 • We can get some intuition by semiclassical thinking. We imagine that a photon excites both
   electrons to higher orbits. It is then energetically possible for one electron to hit the other,
   causing it to be ejected and falling into the n = 1 state in the process. Depending on the
   quantum numbers involved, this could take a long time. There is hence an absorption peak at
   the resonance, because at short timescales it behaves just like a bound state.

 • A similar classical situation occurs in the solar system. It is energetically possible for Jupiter
   to eject all of the other planets, at the cost of moving slightly closer to the Sun. In fact,
   considerations from chaos theory suggest that over a long enough timescale, this will almost
   certainly occur. This timescale, however, is long enough that we can ignore this process and
   think of the solar system as a bound object.

 • As another example, in Auger spectroscopy, one removes an inner electron by an atom by
   collision with a high-speed electron. When an outer shell electron falls into the now empty
   state, a photon could be emitted. An alternative possibility is that a different outer electron is
   simultaneously ejected; this is the Auger process.

 • Now we focus on the true bound states, which are at most singly excited. These are characterized
   by a single number n,
                                                Z2

                                        (0)               1
                                      E1n = −        1+ 2
                                                 2       n
    and can be written as
                                          1
                               |N LM ±⟩ = √ (|100nℓm⟩ ± |nℓm100⟩)
                                           2
    where N = n, L = ℓ, and M = m. We see there is no N = 1 state for orthohelium.

 • The unperturbed energy levels are rather far off. For helium, the unperturbed ground state has
   energy −4, while the real answer is about −2.9. For H− , we get −1, while the real answer is
   about −0.53.

We now compute the effect of the perturbation.

 • The energy shift of the ground state is

                                                                    |ψ100 (x1 )|2 |ψ100 (x2 )|2
                                                   Z
                    ∆E = ⟨100100|H1 |100100⟩ =          dx1 dx2
                                                                               r12
    and is equal to the expected energy due to electrostatic repulsion between two 1s electrons.

 • The hydrogen-like orbital for the ground state is
                                                             1/2
                                                       Z3

                                      ψ100 (x) =                   e−Zr .
                                                       π


    The 1/r12 factor can be expanded as

                                                             X rℓ       ∞
                                           1        1           <
                                              =            =      P (cos γ)
                                                               ℓ+1 ℓ
                                          r12   |x1 − x2 |    r>        ℓ=0

    where r< and r> are the lesser and greater of r1 and r2 , and γ is the angle between x1 and x2 .
    We expand the Legendre polynomial in terms of spherical harmonics with the addition theorem,
                                                              4π X              ∗
                                      Pℓ (cos γ) =                   Yℓm (Ω1 )Yℓm (Ω2 ).
                                                            2ℓ + 1 m

  • Plugging everything in and working in spherical coordinates, we have
                                                                                  ∞
          Z6                                                                        rℓ
                 Z              Z         Z             Z
                                                                  −2Z(r1 +r2 )
                                                                                  X
                                                                                        <    4π  X
                                                                                                                 ∗
      ∆E = 2          r12 dr1       dΩ1       r22 dr2       dΩ2 e                      ℓ+1 2ℓ + 1
                                                                                                      Yℓm (Ω1 )Yℓm (Ω2 ).
          π                                                                          r
                                                                                  ℓ=0 >           m

    This has the benefit that the angular integrals can be done with the orthonormality of spherical
    harmonics. We have
                        Z               √ Z                  ∗
                                                                    √
                           dΩ Yℓm (Ω) = 4π dΩ Yℓm (Ω)Y00       (Ω) = 4π δℓ0 δm0 .

    This leaves nothing but the radial integrals,
                                                Z ∞               Z ∞
                                                                                  e−2Z(r1 +r2 )  5
                                ∆E = 16Z 6              r12 dr1         r22 dr2                 = Z
                                                  0                 0                 r>         8

    after some tedious algebra. This is one factor of Z down from the unperturbed result −Z 2 , so
    as expected the series is in Z.

  • The negatives of the ground state energies for H− and He are hence

                     zeroth order : 1, 4,          first order : 0.375, 2.75,          exact : 0.528, 2.904

    which are a significant improvement, though the first order correction overshoots. Indeed, as
    mentioned earlier, the first order result always overestimates the ground state energy by the
    variational principle, and hence sets an upper bound. It is trickier to set a lower bound, though
    at the very least the zeroth order result serves as one, since it omits a repulsive interaction.

  • To show H− has a bound state, we must show that the ground state energy is below the
    continuum threshold of −0.5. Unfortunately, our result of −0.375 is not quite strong enough.

We now compute the first-order energy shift for the excited states.

  • As stated earlier, we only need to consider singly excited states, namely the states |N LM ±⟩
    defined above for N > 1. The energy shift is

                                              ∆EN L± = ⟨N LM ±|H1 |N LM ±⟩

    where there is no dependence on M because H1 is a scalar operator.


 • Expanding the definition of |N LM ±⟩, we have four terms,
                 1
      ∆EN L± =     ⟨100 nℓm|H1 |100 nℓm⟩ + ⟨nℓm 100|H1 |nℓm 100⟩
                 2
                                         ± (⟨100 nℓm|H1 |nℓm 100⟩ + |nℓm 100⟩H1 |100 nℓm⟩) .
    The first two terms are equal, as are the last two, so
                                                     1                                  1
       ∆EN L± = Jnℓ ± Knℓ ,     Jnℓ = ⟨100 nℓm|         |100 nℓm⟩,   Knℓ = ⟨100 nℓm|       |nℓm 100⟩.
                                                    r12                                r12
    The corresponding two integrals are called the direct and exchange integrals, respectively.

 • The direct integral has the simple interpretation of the mutual electrostatic energy of the two
   electron clouds,
                                               |ψ100 (x1 )|2 |ψnℓm (x2 )|2
                                      Z
                                 Jnℓ = dx1 dx2                             .
                                                       |x1 − x2 |
   It is clearly real and positive.

 • The exchange integral is
                                Z              ∗ (x )ψ ∗
                                              ψ100 1 nℓm (x2 )ψnℓm (x1 )ψ100 (x2 )
                        Knℓ =       dx1 dx2                                        .
                                                         |x1 − x2 |
   This is real, as swapping the variables of integration conjugates it, but also keeps it the same.
   It can be shown, with some effort, that the exchange integrals are positive; this is intuitive,
   since the denominator goes to zero when x1 ≈ x2 , and in such regions the numerator is positive
   (i.e. has a small phase).

 • The fact that Knℓ is positive means that the ortho states are lower in energy than the para
   states. Intuitively this is because the ortho wavefunctions vanish when x1 = x2 , while the para
   wavefunctions have maxima/nodes at x1 = x2 . Hence the ortho states have less electrostatic
   repulsion.

 • Another important qualitative features is that the direct integrals Jnℓ increase with ℓ, leading
   to the “staircase effect” mentioned earlier. As for the alkali atoms, this is intuitively because as
   the angular momentum of one electron is increased, it can move further away from the nucleus,
   and the nuclear charge is more effectively screened by the other electron(s).

We have hence explained all the qualitative features of the spectrum, though perturbation theory
doesn’t do very well quantitatively. We can do a bit better using the variational principle.

 • We recall that the unperturbed ground state just consists of two 1s electrons, which we refer
   to as 1s2 , with wavefunction
                                                     Z 3 −Z(r1 +r2 )
                                      Ψ1s2 (x1 , x2 ) = e            .
                                                      π
    However, we also know that each electron partially screens the nucleus from the other, so each
    electron sees an effective nuclear charge Ze between Z − 1 and Z. This motivates the trial
    wavefunction
                                                   Z3
                                      Ψ(x1 , x2 ) = e e−Ze (r1 +r2 )
                                                    π
    where Ze is a variational parameter.


 • To evaluate the expectation value of H, we write it as
                          2           2
                          p1 Ze         p 2 Ze                  1   1      1
                   H=        −      +      −       + (Ze − Z)     +     +     .
                          2    r1        2    r2                r1 r2     r12

   This has the advantage that the first two terms are both clearly equal to −Ze2 /2.

 • The third term gives
                                                   Ze3 e−Ze r
                                          Z
                              2(Ze − Z)       dx              = 2(Ze − Z)Ze .
                                                   π r
    Finally, the last term is just one we computed above but with Z replaced with Ze , and is hence
    equal to (5/8)Ze .

 • Adding up the pieces, the variational energy is
                                                           5
                                      E(Ze ) = Ze2 − 2ZZe + Ze
                                                           8
   which is minimized for
                                                       5
                                              Ze = Z −   .
                                                      16
   That is, each electron screens 5/16 of a nuclear charge from the other electron.

 • The variational estimate for the ground state energy is hence
                                                        (
                                           5      25       −0.473 H−
                             E var = −Z 2 + Z −       =
                                           8      256      −2.848 He.

   This is closer than our result from first-order perturbation theory. However, since the estimate
   for H− is still not below −0.5, it isn’t enough to prove existence of the bound state. This can
   be done by using a more sophisticated ansatz; our was very crude, not even accounting for the
   fact that the electrons should preferentially be on opposite sides of the nucleus.

10.3   The Thomas–Fermi Model
In this section we introduce the Thomas–Fermi model, a crude model for multi-electron atoms.

 • The idea of the model is to represent the electron cloud surrounding the nucleus as a zero tem-
   perature, charged, degenerate Fermi–Dirac fluid, in hydrostatic equilibrium between degeneracy
   pressure and electrostatic forces.

 • The results we need from statistical mechanics are that for zero-temperature electrons in a
   rectangular box of volume V with number density n, the Fermi wavenumber is

                                              kF = (3π 2 n)1/3

    and the total energy is
                                         ℏ2 V kF5   ℏ2 (3π 2 N )5/3 −2/3
                                  E=              =                V     .
                                         10mπ 2         10mπ 2
    Deriving these results is straightforward, remembering to add a factor of 2 for electron spin.


 • As usual, the pressure is a derivative of energy,

                                           dE     ℏ2
                                    P =−      =        (3π 2 n)5/3 .
                                           dV   15mπ 2
   We note that P is written solely in terms of constants and n. The key to the Thomas–Fermi is
   to allow n to vary in space, and treat the electrons as a fluid with pressure P (n(x)). Of course,
   this is precisely valid only in the thermodynamic limit.

 • If Φ is the electrostatic potential, then in hydrostatic equilibrium,

                                             ∇P = en∇Φ

   where e > 0. Furthermore, Φ obeys Poisson’s equation,

                                  ∇2 Φ = −4πρ = 4πne − 4πZeδ(x)

   in Gaussian units, where we included the charge density for the nucleus explicitly. We will drop
   this term below and incorporate it in the boundary conditions at r = 0.

 • We take P , n, and Φ to depend only on r. Now, we have

                                              ℏ2
                                      ∇P =       (3π 2 )2/3 n2/3 ∇n
                                              3m
   and plugging this into the hydrostatic equilibrium equation gives

                                     ℏ2
                                        (3π 2 )2/3 n−1/3 ∇n = e∇Φ.
                                     3m
   We may integrate both sides to obtain

                                   ℏ2
                                      (3π 2 n)2/3 = e(Φ − Φ0 ) ≡ eΨ.
                                   2m

 • To get intuition for this equation, we note that it can be rewritten as

                                          p2F
                                              − eΦ = −eΦ0 .
                                          2m
   The left-hand side is the energy of an electron at the top of the local Fermi sea, so evidently
   this result tells us it is a constant, the chemical potential of the gas. This makes sense, as in
   equilibrium these electrons shouldn’t have an energetic preference for being in any one location
   over any other.

 • We know the potential must look like
                                                (
                                                 Ze/r    r → 0,
                                       Φ(r) ∼
                                                 0       r → ∞.

   It is intuitively clear that as we move outward, the potential energy goes up monotonically and
   the kinetic energy goes down.

 • The behavior of the potential is different depending on the number of electrons N .


     – If N > Z, we have a negative ion. Such atoms can’t be described by the Thomas–Fermi
       model, because ∇P always points outward, while at some radius the electrostatic force will
       start pointing outward as well, making the hydrostatic equilibrium equation impossible to
       satisfy. In this model, the extra negative charge just falls off.
     – If N = Z, we have a neutral atom. Then Φ(r) falls off faster than 1/r. Such a case is
       described by Φ0 = 0.
     – If N < Z, we have a positive ion, so Φ(r) falls off as (Z − N )e/r. Such a case is described
       by Φ0 > 0. At some radius r0 , the kinetic energy and hence n falls to zero. Negative values
       are not meaningful, so for all r > r0 the density is simply zero.
     – The case Φ0 < 0 also has physical meaning, and corresponds to a neutral atom under
       applied pressure.

We now solve the model more explicitly.

 • In terms of the variable Ψ, we have

                                  ℏ2
                                     (3π 2 n)2/3 = eΨ,     ∇2 Ψ = 4πne.
                                  2m
    We eliminate n to solve for Ψ. However, since we also know that Ψ ∼ Ze/r for small r, it is
    useful to define the dimensionless variable
                                                 rΨ(r)
                                       f (r) =         ,   f (0) = 1.
                                                  Ze

 • Doing a little algebra, we find the Thomas–Fermi equation

                               d2 f   f 3/2                     (3π)2/3 a0
                                    =       ,    r = bx,   b=
                               dx2    x1/2                        27/3 Z 1/3
    where x is a dimensionless radial variable.

 • Since f (0) is already set, the solutions to the equation are parametrized by f ′ (0). Some numeric
   solutions are shown below.




    The case f ′ (0) = −1.588 corresponds to a neutral atom. The density only approaches zero
    asymptotically. It is a universal function that is the same, up to scaling, for all neutral atoms
    in this model.

 • As the initial slope becomes more negative, the density reaches zero at finite radius, correspond-
   ing to a positive ion with a definite radius.


 • When the initial slope is less negative, the density never falls to zero. Instead, we can manually
   cut it off at some radius and just declare the density is zero outside this radius, which physically
   translates to imposing an external pressure. This is only useful for modeling neutral atoms
   (with neutrality determining where the cutoff radius is) since one cannot collect a bulk sample
   of charged ions.

 • The Thomas–Fermi model has obvious limitations. For example, by treating the electrons as
   a continuous fluid, we lose all shell structure. In general, the model is only reasonable for
   describing the electron density at intermediate radii, breaking down both near the nucleus and
   far from it.

 • It can be used to calculate average properties, such as the average binding energy of charge
   radius, which make it useful in experimental physics, e.g. for calculations of the slowing down
   of particles passing through matter.

10.4   The Hartree–Fock Method
The Hartree–Fock method is a variational method for approximating the solution of many-body
problems in atoms, molecules, solids, and even nuclei. We begin with the simpler Hartree method.

 • We consider an atom with N electrons and nuclear charge Z, and use the basic Hamiltonian
                                    N   2
                                    X  p   i   Z            X 1
                               H=            −          +               ≡ H1 + H2 .
                                           2   ri                 rij
                                    i=1                     i<j

    This neglects effects from the finite nuclear mass, fine and hyperfine structure, retardation,
    radiative corrections, and so on. In particular, fine structure becomes more important for
    heavier atoms, since it scales as (Zα)2 , and in these cases it is better to start from the Dirac
    equation. Also note that the electron spin plays no role in the Hamiltonian.

 • The Hamiltonian commutes with the total orbital angular momentum L, as well as each of
   the individual spin operators Si . It also commutes with parity π, as well as all the exchange
   operators Eij .

 • This is our first situation with more than 2 identical particles, so we note that exchanges generate
   all permutations. For each permutation P ∈ SN , there is a unitary permutation operator U (P )
   which commutes with the Hamiltonian, and which we hereafter just denote by P . We denote
   the sign of P by (−1)P .

 • In general, the symmetrization postulate states that allowed states satisfy
                                          (
                                            |Ψ⟩         bosons,
                                  P |Ψ⟩ =        P
                                            (−1) |Ψ⟩ fermions.

    All physically meaningful operators must commute with the U (P ). If one begins with a formal
    Hilbert space that doesn’t account for the symmetrization postulate, then one can project onto
    the fermionic subspace with
                                                1 X
                                         A=         (−1)P P.
                                               N!
                                                        P
    We will investigate such projectors in more detail in the notes on Group Theory.


We now describe Hartree’s trial wavefunction.

 • In Hartree’s basic ansatz, we simply ignore the symmetrization postulate. We take a trial
   wavefunction of the form
                                     |ΦH ⟩ = |1⟩(1) . . . |N ⟩(N )
    where the individual terms are single particle orbitals, describing the state of one electron. The
    notation is a bit ambiguous: here Latin indices in parentheses label the electrons while Greek
    indices in the kets label the orbitals.

 • The orbitals are assumed to be normalized, and the product of a spatial and spin part,

                                                 |λ⟩ = |uλ ⟩|msλ ⟩

    where |msλ ⟩ is assumed to be an eigenstate of Sz with eigenvalue msλ = ±1/2. This causes no
    loss of generality, because the Hamiltonian has no spin dependence.

 • The variational parameters are, in principle, the entire spatial wavefunctions of the orbitals
   uλ (r). It is straightforward to compute the expectation of H1 ,
                                                N
                                                X                                    p2i   Z
                            ⟨ΦH |H1 |ΦH ⟩ =          ⟨λ|(i) hi |λ⟩(i) ,    hi =          −
                                                                                     2     ri
                                                λ=i=1

    where the other bras and kets collapse by normalization. Explicitly, the expectation is
                                                  Z             2
                                     X                         p      Z
                     ⟨ΦH |H1 |ΦH ⟩ =     Iλ , Iλ = dr u∗λ (r)      −       uλ (r).
                                                                2     r
                                           λ

 • The expectation of H2 gives a sum over pairs,
                                           X                   1
                         ⟨ΦH |H2 |ΦH ⟩ =         ⟨λ|(i) ⟨µ|(j) |λ⟩(i) |µ⟩(j) .
                                                              rij
                                                λ=i<µ=j

    Explicitly, this is a sum of direct integrals,
                                                        Z
                                  X                                                       1
                ⟨ΦH |H2 |ΦH ⟩ =         Jλµ ,   Jλµ =       dri drj u∗λ (ri )u∗µ (rj )       uλ (ri )uµ (rj ).
                                                                                         rij
                                  λ<µ

    No exchange integrals have appeared, since we haven’t antisymmetrized. We are dropping the
    self-interaction term λ = µ since we dropped the i = j term in the original Hamiltonian. This
    term was dropped classically to avoid infinite self-energy for point charges, though note that in
    this quantum context, Jλλ actually need not be divergent.

 • Using the symmetry of the direct integrals, the energy functional is
                                                     X       1X
                           E[ΦH ] = ⟨ΦH |H|ΦH ⟩ =       Iλ +       Jλµ .
                                                             2
                                                                  λ           λ̸=µ

    However, we can’t just minimize this directly; as usual we need a Lagrange multiplier to enforce
    normalization, so we instead minimize
                                                     X
                                 F [ΦH ] = E[ΦH ] −      ϵλ (⟨λ|λ⟩ − 1).
                                                              λ


 • The vanishing of the functional derivative δF/δuλ (r) gives the Hartree equations

                                                                              |uµ (r)|2
                2                                                     XZ
                p     Z
                   −      uλ (r) + Vλ (r)uλ (r) = ϵλ uλ (r), Vλ (r) =     dr′            .
                2     r                                                        |r − r′ |
                                                                       µ̸=λ

    These equations have a simple interpretation. We see that each electron obeys a Schrodinger
    equation with energy ϵλ , and feels a potential sourced by the average field of the other charges,
    which makes the equations an example of a mean field theory.

 • This is a set of N coupled, nonlinear, integro-differential equations. Sometimes one speaks of
   the self-consistent field, since the field determines the orbitals and vice versa.

 • In practice, one solves the Hartree equations by iteration. For example, one can begin by
   computing the Thomas–Fermi potential, then setting the initial guess for the orbitals to be
   the eigenfunctions of this potential. Then the new potentials are computed, and the resulting
   Schrodinger equation is solved, and so on until convergence.

 • The computationally expensive part is solving the three-dimensional Schrodinger equations.
   Hartree suggested further replacing the potential with a central potential
                                                   Z
                                                 1
                                      V̂λ (r) =      dΩ Vλ (r).
                                                4π
    Then the Schrodinger equation reduces to a radial equation, which is much easier to solve. This
    is a reasonable step if we expect the atom to be nearly spherically symmetric overall.

 • Since the Hartree orbitals are eigenfunctions of different Schrodinger equations, there is no need
   for them to be orthogonal.

 • It is tempting to think of ϵλ as the “energy of each electron”, but this is misleading because
   each electron’s Hartree equation counts the interaction with every other electron. That is, if
   we just summed up all the ϵλ , we would not get the total energy because the interaction would
   be double counted.

 • More explicitly, if we multiply the Hartree equation by u∗λ (r) and integrate,
                                               X
                                          Iλ +    Jλµ = ϵλ
                                                 µ̸=λ

    and summing gives
                                                 X          1X
                                      E[ΦH ] =       ϵλ −      Jλµ .
                                                            2
                                                 λ           λ̸=µ

Next, we consider Fock’s refinement to Hartree’s wavefunction.

 • Fock’s trial wavefunction is just a fully antisymmetrized version of Hartree’s,

                                                |1⟩(1) |2⟩(1) . . . |N ⟩(1)
                            √              1    |1⟩(2) |2⟩(2) . . . |N ⟩(2)
                       |Φ⟩ = N ! A|ΦH ⟩ = √       ..      ..   ..       ..    .
                                            N!     .       .       .     .
                                               |1⟩(N ) |2⟩(N ) . . . |N ⟩(N )


   This second way of writing the wavefunction is known as a Slater determinant, and is expanded
   like a regular determinant with scalar multiplication replaced with tensor product. The rest of
   the idea is the same: we simply variationally minimize the energy.

 • Note that the Slater determinant vanishes if the N orbitals are not linearly independent. Mean-
   while, if they are linearly independent, then they span an N -dimensional subspace of the
   single-particle Hilbert space, and up to scaling the Slater determinant only depends on what
   this subspace is. Hence, unlike in Hartree’s wavefunction, we can always choose the orbitals to
   be orthonormal without loss of generality, in which case |Φ⟩ is automatically normalized.

 • We have to make a point about language. We often speak of a particle being “in” a single-
   particle state |λ⟩ (such as the Pauli exclusion principle’s “two particles can’t be in the same
   state”). But because of the antisymmetrization, what we actually mean is that the joint state
   is a Slater determinant over a subspace containing |λ⟩.

 • However, even though Slater determinants are very useful, they are not the most general valid
   states! For instance, the superposition of two such states is generally not a Slater determinant.
   Accordingly, the Hartree–Fock trial wavefunction doesn’t generally get the exact answer. In
   such cases it really is not valid to speak of any individual particle as being “in” a state. Even
   saying “the electrons fill the 1s and 2s orbitals” implicitly assumes a Slater determinant and is
   not generally valid, but we use such language anyway because of the great difficulty of going
   beyond Hartree–Fock theory.

 • To evaluate the energy functional, we note that A commutes with H, since the latter is a
   physical operator, so
                                                                        X
   ⟨Φ|H|Φ⟩ = N !⟨ΦH |A† HA|ΦH ⟩ = N !⟨ΦH |HA2 |ΦH ⟩ = N !⟨ΦH |HA|ΦH ⟩ =  (−1)P ⟨ΦH |HP |ΦH ⟩.
                                                                                          P

   Of course, the same reasoning holds for H1 and H2 individually.

 • Now consider the expectation of H1 = i hi . The expectation of each hi vanishes by orthogo-
                                              P

   nality unless P fixes all j ̸= i. But this means only the identity permutation contributes. Hence
   the sum over permutations does nothing, and the result is the same as in Hartree theory.

 • Next, consider the expectation of H2 = i<j 1/rij . By the same reasoning, the contribution of
                                              P

   the term 1/rij vanishes except for permutations that fix everything besides i and j, of which
   there are only the identity permutation and the exchange Eij .

 • The latter gives an exchange integral, so

                                                                              u∗λ (r)u∗µ (r′ )uλ (r′ )uµ (r)
                        X                                         Z
          ⟨Φ|H2 |Φ⟩ =         Jλµ − Kλµ ,   Kλµ = δ(msλ , msµ )       drdr′
                                                                                         |r − r′ |
                        λ<µ

   as we saw for helium. Note that the exchange integrals, unlike the direct integrals, depend
   on the spin. As for helium, one can show the exchange integrals are positive. Since they
   contribute with a minus sign, they lower the energy functional, confirming the expectation that
   Hartree–Fock theory gives a better estimate of the ground state energy than Hartree theory.


 • Again as we saw for helium, the lowering is only in effect for aligned spins, as this corresponds
   to antisymmetry in the spatial wavefunction. This leads to Hund’s first rule, which is that
   electrons try to align their spins. Half-filled electron shells are especially stable, since all the
   electrons are aligned, leading to, e.g. the high ionization energy of nitrogen. It also explains
   why chromium has configuration 3d5 4s instead of 3d4 4s2 as predicted by the aufbau principle.

 • Another way in which Hartree–Fock theory makes more sense is that the self-energy, if included,
   ultimately cancels out because Jλλ = Kλλ . Hence we can include it, giving
                                                         1X
                                        ⟨Φ|H2 |Φ⟩ =         Jλµ − Kλµ .
                                                         2
                                                            λµ

   As we’ll see, including the self-energy makes the final equations nicer as well.

Finally, we minimize the Hartree–Fock energy.

 • The functional to be minimized is
                               X      1X               X
                       F [Φ] =   Iλ +   (Jλµ − Kλµ ) −   ϵλ (⟨λ|λ⟩ − 1).
                                      2
                                    λ             λµ                      λ

   Note that we are only enforcing normalization with Lagrange multipliers; we will see below that
   we automatically get orthogonality.

 • Carrying out the functional derivative, we find the Hartree–Fock equations
                   2                                Z
                   p     Z
                      −      uλ (r) + Vd (r)uλ (r) − dr′ Vex (r, r′ )uλ (r′ ) = ϵλ uλ (r)
                    2    r

   where the direct and exchange potentials are
                        XZ       |uµ (r′ )|2                   X                uµ (r)u∗µ (r′ )
               Vd (r) =      dr′             , Vex (r, r ′
                                                           ) =   δ(m sλ , msµ )                 .
                        µ
                                  |r − r′ |                    µ
                                                                                  |r − r′ |

    Since we included the self-energy contributions, all electrons feel the same direct potential.

 • The exchange potential is a bit harder to interpret, as it is a nonlocal operator. However, we
   note that there are only two distinct exchange potentials because ms can only have two values,

                                   ±
                                                  X                    uµ (r)u∗µ (r′ )
                                 Vex (r, r′ ) =        δ(msµ , ±1/2)                   .
                                                  µ
                                                                         |r − r′ |

                                                          + and V − respectively.
    Hence all spin up and spin down orbitals experience Vex      ex

 • As such, the Hartree–Fock equations can be thought of as just two coupled Schrodinger-like
   equations, one for each spin. The solutions are automatically orthogonal, because orbitals of
   different spins are orthogonal, while orbitals of the same spin are eigenfunctions of the same
   Hamiltonian. This illustrates how Hartree–Fock theory is more elegant than Hartree theory.

 • The main disadvantage of Hartree–Fock theory is numerically handling the nonlocal potential,
   and there are many clever schemes to simplify dealing with it.


 • Integrating the Hartree–Fock equation against uλ (r)∗ gives
                                        X
                                   Iλ +     (Jλµ − Kλµ ) = ϵλ .
                                                     µ

    As before, the energies ϵλ double count the interaction,
                                   X             1X
                                       ϵλ = E +       (Jλµ − Kλµ ).
                                                 2
                                          λ                    λµ


 • On the other hand, note that if we remove the electron with the highest associated ϵλ , chosen
   to be ϵN , we can write the energy of the remaining electrons as
                                              N −1             N −1
                                      ′
                                              X            1   X
                                    E =              Iλ′ +              ′
                                                                      (Jλµ    ′
                                                                           − Kλµ ).
                                                           2
                                              λ=1              λ,µ=1

    If we assume the self-consistent fields have not been significantly changed, so that I ′ = I, J ′ = J
    and K ′ = K, then we have an expression for the ionization potential,

                                                     E − E ′ = ϵN .

    This is Koopman’s theorem.

 • To simplify calculations, we can average the potentials over angles just as in Hartree theory.
   This is a little trickier to write down explicitly for the nonlocal potential, but corresponds to
   replacing Vex± (r, r′ ) with an appropriately weighted average of U (R)V ± U (R)† for R ∈ SO(3),
                                                                                ex
   where the U (R) rotates space but not spin. The resulting averaged potential can only depend
   on the rotational invariants of two vectors, namely |r|2 , |r′ |2 , and r · r′ .

 • A further approximation is to average over spins, replacing the two exchange potentials Vex      ±

   with their average. In this case, we have reduced the problem to an ordinary central force
   problem, albeit with a self-consistent potential, and we can label its orbitals as |nℓmℓ ms ⟩. This
   is what people mean, for example, when they say that the ground state of sodium is 1s2 2s2 2p6 3s.
   However, this level of approximation also erases, e.g. the tendency of valence electrons to align
   their spins, which must be put in manually.

10.5   Atomic Structure
We now apply Hartree–Fock theory to atomic structure, assuming rotational averaging throughout.

 • The Hartree–Fock method gives a variational ansatz for the ground state of the basic Hamiltonian
                                       X   p2 Z   X 1
                                               i
                                  H=             −      +          .
                                              2    ri          rij
                                                 i                       i<j

    The resulting states in the Slater determinant are solutions of the Schrodinger-like equation
                                                                       p2 Z
                           huλ (r) = ϵλ uλ (r),          h(r, p) =       − + V d − V ex .
                                                                       2  r
    Note that numerically, everything about a Hartree–Fock solution can be specified by the Rnℓ (r)
    and ϵnℓ , since these can be used to infer the potentials.


 • Hartree–Fock theory gives us the exact ground state to the so-called central field approximation
   to the Hamiltonian,                        X
                                         H0 =     h(ri , pi ).
                                                      i
   Thus, we can treat this as the unperturbed Hamiltonian and the error as a perturbation,
                                              X 1      X
                        H = H0 + H1 , H1 =           −     V d,i − V ex,i .
                                                 rij
                                                      i<j            i

   The term H1 is called the residual Coulomb potential, and the benefit of using Hartree–Fock
                                                  P
   theory is that H1 may be much smaller than just i<j 1/rij alone.

 • The unperturbed Hamiltonian H0 is highly symmetrical; for example, it commutes with the
   individual Li and Si of the electrons. (Here and below, the potentials in H0 are regarded as
   fixed; they are always equal to whatever they were in the Hartree–Fock ground state.) Therefore,
   the useful quantum numbers depend on the most important perturbations.

 • If H1 is the dominant perturbation, then we recover the basic Hamiltonian H0 , for which L
   and S are good quantum numbers; as usual capital letters denote properties of the atom as a
   whole. This is known as LS or Russell–Saunders coupling.

 • Fine structure gives the additional perturbation
                                                X
                                           H2 ∼     Li · Si
                                                          i

   which instead favors the so-called jj-coupling. Fine structure is more important for heavier
   atoms, so for simplicity we will only consider lighter atoms, and hence only LS coupling.

 • Now we consider the degeneracies in H0 . The energy only depends on the nℓ values of the
   occupied states. In general, a state can be specified by a set of completely filled orbitals, plus a
   list of partly filled orbitals, along with the (mℓ , ms ) values of the states filled in these orbitals.
   We call this data an m-set, or electron configuration.

 • For the ground states of the lightest atoms, only at most one orbital will be partly filled. If it
   contains n electrons, then the degeneracy is

                                             2(2ℓ + 1)
                                                        .
                                                 n
   In the case of multiple partly filled orbitals, we would get a product of such factors.

 • Now, the relevant operators that commute with H are L2 , Lz , S 2 , Sz , and π. Hence in LS
   coupling we can write the states as |γLSML MS ⟩, where γ is an index for degenerate multiplets;
   these start appearing at Z = 23. The energy depends only on the L and S values.

 • The Slater determinants are eigenstates of some of these operators,
                                                                                           Y
           Lz |m-set⟩ = ML |m-set⟩,    Sz |m-set⟩ = MS |m-set⟩,               π|m-set⟩ =    (−1)ℓi |m-set⟩
                                                                                            i

   where                                     X                       X
                                      ML =        mℓi ,       MS =           msi .
                                              i                          i


    The sums range over all of the electrons, but can be taken to range over only unfilled orbitals
    since filled ones contribute nothing.

 • However, the Slater determinants are not eigenstates of L2 and S 2 . Computing the coefficients
   that link the |m-set⟩ and |LSML MS ⟩ bases is somewhat complicated, so we won’t do it in
   detail. (It is more than using Clebsch–Gordan coefficients, because there can be more than two
   electrons in the m-set, and we need to keep track of both orbital and spin angular momentum
   as well as the antisymmetrization.) Instead, we will simply determine which values of L and S
   appear, for a given electron configuration. Note that the parity does not come into play here,
   since all states for a given electron configuration have the same parity.

 • As for helium, we label these multiplets as 2S+1 L. The spin-orbit coupling splits the multiplets
   apart based on their J eigenvalue, so when we account for it, we write 2S+1 LJ . Also, for clarity
   we can also write which electron configuration a given multiplet comes from, 2S+1 L... .

 • Finally, once we account for the spin-orbit coupling, we can also account for the Zeeman effect,
   provided that it is weaker than even the spin-orbit coupling. In this case, the procedure runs
   exactly as for a hydrogen atom with fine structure, and Lande g-factors appear after applying
   the projection theorem.

We now give a few examples, focusing on the ground states of H0 for simplicity.

