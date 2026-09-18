---
id: kevin-zhou-notes-phy-ex045
source: kevin-zhou-notes
native_id: "phy Example 045"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex045
topic: [statistical-mechanics]
subtopic: [phonons, quantum-statistics]
math_tools: [density-of-states, thermodynamic-limit]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "4079-4514"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Phonons. The exact same logic applies for phonons in a solid, except that there are
three polarization states, and the speed of light c is replaced with the speed of sound cs . (That is,
we are assuming the dispersion relation remains linear.) There is also a high-frequency cutoff ωD
imposed by the lattice.
   To get a reasonable number for ωD , note that the number of normal modes is equal to the number
of degrees of freedom, so               Z      ωD
                                                    dω g(ω) = 3N
                                           0
where N is the number of lattice ions. The partition function is very similar to the blackbody case.
At low temperatures, the cutoff ωD doesn’t matter, so the integral is identical, and

                                          E ∝ T4        C ∝ T 3.

At high temperatures, one can show that with the choice of ωD above, we simply reproduce the
Dulong-Petit law. The only problem with the Debye model is that the phonon dispersion relation
isn’t actually linear. This doesn’t matter at very high or low temperatures, but yields slight
deviations at intermediate ones.

Now we formally introduce the Bose–Einstein distribution. For convenience, we work in the grand
canonical ensemble.

  • Consider a configuration of particles where ni particles are in state i, and i ni = N . In the
                                                                                P

    Maxwell–Boltzmann distribution, we treat the particles as distinguishable, then divide by 1/N !
    at the end, so the probability of this configuration is proportional to

                                    1 N        N − n1          Y 1
                                                        ··· =          .
                                    N ! n1       n2               ni !
                                                                   i

    In the Bose–Einstein distribution, we instead treat each configuration as one state of the
    quantum field, so all states have weight 1.

  • As long as all of the ni are zero or one (the classical limit), the two methods agree. How-
    ever, once we introduce discrete quantum states, simply dividing by 1/N ! no longer “takes us
    from distinguishable to indistinguishable”. States in which some energy levels have multiple
    occupancy aren’t weighted enough.

  • Similarly, the Fermi–Dirac distribution also agrees with the classical result, as long as ⟨ni ⟩ ≪ 1.


 • Another way of saying this is that in the classical case, we’re imagining we can paint labels
   on all the particles; at the end we divide by 1/N ! because the labels are arbitrary. This is an
   imperfect approximation to true indistinguishability, because when two particles get into the
   same state, we must lose track of the labels!

 • For one single-particle quantum state |r⟩, the Bose–Einstein partition function is
                                       X                              1
                                Zr =        e−βnr (Er −µ) =                      .
                                       nr
                                                                1 − e−β(Er −µ)

    Note that in the classical case, we would have also multiplied by 1/nr !. Without this factor,
    the sum might not converge, so we also demand Er > µ for all Er . Setting the ground state
    energy E0 to zero, we require µ < 0.

 • The expected occupancy can be found by summing an arithmetic-geometric series, or noting
                                            1 ∂                1
                                  ⟨nr ⟩ =        log Zr = β(E −µ)    .
                                            β ∂µ         e   r    −1
    This result is called the Bose–Einstein distribution.

 • Taking the product, the grand partition function is
                                                 Y          1
                                            Z=
                                                 r
                                                     1 − eβ(Er −µ)

    where the product ranges over all single-particle states.

 • Using the Bose–Einstein distribution, we can compute properties of the Bose gas,
                              Z                        Z
                                        g(E)                   Eg(E)
                        N = dE −1 βE            , E = dE −1 βE
                                     z e −1                 z e −1

    where z = eβµ is the fugacity. The stability requirement µ < 0 means z < 1.

 • To compute the pressure, note that
                                                     Z
                                1          1
                            pV = log Z = −               dE g(E) log(1 − ze−βE ).
                                β          β

    In the nonrelativistic case, g(E) ∼ E 1/2 . Integrating by parts then shows
                                                     2
                                                 pV = E
                                                     3
    which matches that of a classical monatomic gas. For comparison, we saw above that in the
    ultrarelativistic case we get 1/3 instead.

 • At high temperatures, we can compute the corrections to the ideal gas law by expanding in
   z ≪ 1, finding
                                  N    z         z
                                    = 3 1 + √ + ···
                                  V    λ        2 2


    To see why z ≪ 1 is a high-temperature expansion, note that z ∼ λ3 ∼ T −3/2 here. Next, we
    can similarly expand the energy for

                                   E     3z        z
                                      = 3      1 + √ + ··· .
                                   V    2λ β      4 2
    Combining these equations, we find the first correction to the ideal gas law,

                                                      λ3 N

                                pV = N kB T 1 − √           + ... .
                                                     4 2V
    The pressure is less; the physical intuition is that bosons ‘like to clump up’, since they’re missing
    the 1/nr ! weights that a classical gas has.

Note. To get more explicit results, it’s useful to define the functions
                                                Z ∞
                                            1              xn−1
                                gn (z) =             dx −1 x      .
                                          Γ(n) 0        z e −1
To simplify this, expand the denominator as a geometric series for
                         ∞                                   ∞            Z ∞                   ∞
                                                         1 X zm                                   zm
                             Z
                     1 X                                                                        X
         gn (z) =                dx xn−1 e−mx z m =                             du un−1 e−u =              .
                    Γ(n)                                Γ(n) mn           0                           mn
                       m=1                                  m=1                                 m=1

The gn (z) are monotonic in z, and we have

                                   N   g3/2 (z)         E   3 kB T
                                     =          ,         =        g (z)
                                   V     λ3             V   2 λ3 5/2
for the ideal Bose gas. Finally, for photon gases where µ = 0 we use

                                              gn (1) = ζ(n).

Useful particular values of the zeta function include

                                                 π2                π4
                                        ζ(2) =      ,     ζ(4) =      .
                                                 6                 90
These results may be derived by evaluating
                                         Z π
                                                    dx |f (x)|2
                                               −π

for f (x) = x and f (x) = x2 , respectively, using direct integration and Fourier series.

Note. We may also derive the Bose–Einstein distribution starting from the microcanonical ensemble.
Indexing energy levels by s, let there be Ns bosons in an energy level with degeneracy Ms . The
number of states is
                                          Y (Ns + Ms − 1)!
                                     Ω=                     .
                                           s
                                              Ns !(Ms − 1)!
Using Stirling’s approximation, the entropy is
                                X
             S = kB log Ω = kB     (Ns + Ms ) log(Ns + Ms ) − Ns log Ns − Ms log Ms .
                                    s


On the other hand, we know that dS = dU/T − (µ/T )dN , where
                                   X                 X
                             dU =     Es dNs , dN =      dNs .
                                        s                          s

Plugging this in and setting the coefficient of dNs to zero gives

                              log(Ns + Ms ) − log Ns − βEs + βµ = 0.

An equivalent way to phrase this step is that we are maximizing entropy subject to fixed N and
U , and the last two terms come from Lagrange multipliers. Rearranging immediately gives the
Bose–Einstein distribution, where ⟨ns ⟩ = Ns /Ms . Similar arguments work for the Fermi–Dirac and
Boltzmann distributions.

Note. This idea of thinking of thermodynamic quantities as Lagrange multipliers is quite general.
We get a Lagrange multiplier every time there is a conserved quantity. For particle number we
get the chemical potential. As another example, for electric charge the corresponding Lagrange
multiplier would be the electric potential. This is rather different from our usual interpretation of
these quantities, which is in terms of the energy cost to pull some of the corresponding conserved
quantity from the environment. But just as for temperature, we can recover that picture by just
partitioning our original system into a subsystem and “environment” and analyzing the subsystem.

We now use these results to investigate Bose–Einstein condensation.

  • Consider low temperatures, which correspond to high z, and fix N . Since we have

                                               N   g3/2 (z)
                                                 =
                                               V     λ3
    the quantity g3/2 (z) must increase as λ3 increases. However, we know that the maximum value
    of g3/2 (z) is g3/2 (1) = ζ(3/2), so this is impossible below the critical temperature
                                                                    2/3
                                               2πℏ2

                                                            n
                                        Tc =
                                               kB m       ζ(3/2)

  • The problem is that, early on, we took the continuum limit and turned sums over states into
    integrals; this is a good approximation whenever the occupancy of any state is small. But for
    T < Tc , the occupancy of the ground state becomes macroscopically large!

  • The ground state isn’t counted in the integral because g(0) = 0, so we manually add it, for

                                  N   g3/2 (z)                             1
                                    =          + n0 ,       n0 =                .
                                  V     λ3                             z −1 − 1
    Then for T < Tc , z becomes extremely close to one (z ∼ 1 − 1/N ), and the second term makes
    up for the first. In the limit T → 0, all particles sit in the ground state.

  • We say that for T < Tc , the system forms a Bose–Einstein condensate (BEC). Since the number
    of uncondensed particles in a BEC at fixed temperature is independent of the density, the
    equation of state of a BEC doesn’t depend on the density.


  • To explicitly see the phase transition behavior, note that for z → 1, one can show
                                                        √
                                   g3/2 (z) ≈ ζ(3/2) + A 1 − z + . . . .

    Applying the definition of Tc , we have
                                     3/2
                                     T          √     1 1
                                            −1∼A 1−z−       .
                                    Tc                N 1−z
    Dropping all constants, switching to reduced temperature t, and letting x = 1 − z,
                                                    √         1
                                             t∼         x−      .
                                                             Nx
    Since x is never zero, the function t(x) (and hence x(t)) is perfectly analytic, and there is no
    phase transition. However, in the thermodynamic limit, we instead have
                                                    (
                                                     t2 t > 0
                                         lim x(t) =
                                        N →∞         0 t<0

    which is nonanalytic, as it has a discontinuous second derivative.

  • Differentiating the energy, we find the heat capacity is
                                         dE   g5/2 (z)   1 dg5/2 dz
                                  CV =      ∼     3
                                                       + 3          .
                                         dT     λ       λ dz dT
    Then the derivative of the heat capacity depends on d2 z/dT 2 , and is discontinuous at t = 0.

  • Another way of characterizing the BEC transition is that it occurs when the chemical potential
    increases to the ground state energy, creating a formally divergent number of particles in it.

Note. In a gas where the particle number N is not conserved, particles are created or destroyed freely
to maximize the entropy, setting the chemical potential µ to zero. For such a gas, Bose–Einstein
condensation cannot occur. Instead, as the temperature is lowered, N goes to zero.
   Note that if N is almost conserved, with N changing on a timescale T much greater than the
thermalization time, then for times much less than T we can see a quasiequilibrium with nonzero µ.
Also note that setting µ = 0 formally makes N diverge if there are zero energy states. This infrared
divergence is actually correct; for instance, a formally infinite number of photons are created in
every single scattering event. This is physically acceptable since these photons cannot be detected.
Note. Bose–Einstein condensation was first predicted in 1925. In 1938, superfluidity was discovered
in 4 He. However, superfluids are far from ideal BECs, as they cannot be understood without
interactions. The first true BECs were produced in 1995 from dilute atomic gases in a magnetic
trap, with Tc ∼ 100 nK. This temperature was achieved using Doppler laser cooling and evaporative
cooling. Further details are given in the notes on Optics.
Note. How can bosonic atoms condensate into the same state, if they’re made of fermions (electrons
and nucleons), which can’t be in the same state? For concreteness, suppose hydrogen atoms all in
the 1s state condense into the K = 0 mode. Neglecting spin for simplicity, the creation operator
for a hydrogen atom in that mode in a box of volume V is
                                           1 X
                                      c† ∼      φ(k) a†k b†−k
                                           V
                                                k


where φ(k) is the 1s state’s momentum-space wavefunction, and a†k and b†k create a proton and
electron with momentum k. By the exclusion principle, both a†k and b†k square to zero, but c†
doesn’t. Instead, upon adding one atom into the state, we have

                                                              |φ(0)|2  a3
                                    ⟨a†k ak ⟩ ∼ ⟨b†k bk ⟩ ∼           ∼ 0
                                                                V       V
where a0 is the Bohr radius. So we can add up to ∼ V /a30 atoms into this state before Pauli exclusion
starts to matter. Sometimes, this is casually but confusingly described by saying that “the atoms
are in the same state but their wavefunctions don’t overlap”.
   The more general point is that condensation never allows one to evade the Pauli exclusion
principle. For example, in the microscopic theory of superconductivity, we can work directly with
the electron operators b†k,± , and in that case b†k,± still squares to zero. But we can also define a
superconducting order parameter field, analogous to c, whose modes can have large occupancy.

3.6     Fermi–Dirac Statistics
Now we turn to fermions, which obey Fermi–Dirac statistics.

  • Each single-particle quantum state |r⟩ can be occupied by one or two particles, so
                                                                               1
                                Zr = 1 + e−β(Er −µ)           ⟨nr ⟩ =                   .
                                                                        eβ(Er −µ) + 1
      Our expression for nr is called the Fermi–Dirac distribution; it differs from the Bose–Einstein
      distribution by only a sign. Since there are no convergence issues, µ can be positive.

  • Our expression for N , E, and pV are almost identical to the Bose gas case, again differing by
    a few signs. As before, we have pV = (2/3)E. The extra minus signs result in a first-order
    increase in pressure over that of a classical gas at high temperatures.

  • In the low-temperature limit, the Fermi–Dirac distribution becomes

                                               n(E) = θ(µ − E).

      All states with energies up to the Fermi energy EF are filled, where in this case EF is just
      equal to the chemical potential. These filled states form the ‘Fermi sea’ or ‘Fermi sphere’, and
      its boundary is the Fermi surface. The quantity EF can be quite high, with the corresponding
      temperature TF = EF /kB at around 104 K for metals and 107 K for white dwarfs.

  • The total energy is                      Z Ef
                                                              3
                                       E=           dE Eg(E) = N EF
                                               0              5
      and the pressure is
                               Z                                         Z Ef
                1        1                             −β(E−µ)                                     2
            pV = log Z =           dE g(E) log(1 + e               )=              dE (µ − E)g(E) = N EF .
                β        β                                                 0                       5

      This zero-temperature pressure is called the degeneracy pressure.


  • Next, consider the particle number and energy density near zero temperature,
                              Z ∞                       Z ∞
                                        g(E)                       Eg(E)
                        N=        dE −1 βE      , E=        dE −1 βE
                                0    z e +1              0      z e +1

    where g(E) is the density of states. We look at how E and µ depend on T , holding N fixed.

  • First we claim that dµ/dT = 0 at T = 0. We know that if µ is fixed, ∆N ∼ T 2 , as the
    Fermi–Dirac distribution spreads out symmetrically about E = EF . But if dµ/dT ̸= 0, then
    ∆N ∼ T as the Fermi surface shifts outward, so we cannot have ∆N = 0.

  • For higher temperatures, µ should decrease, as we know it becomes negative as we approach
    the ideal gas. In d = 2, µ is exponentially rather than quadratically suppressed because the
    density of states is constant.

  • Next, consider the change in energy. Since dN/dT = 0, the only effect is that kB T /EF of the
    particles are excited by energy on the order of kB T . Then ∆E ∼ T 2 , so CV ∼ T .

  • Therefore, the low-temperature specific heat of a metal goes as

                                              CV = γT + αT 3

    where the second term is from phonons. We can test this by plotting CV /T against T 2 . The
    linear contribution is only visible at very low temperatures.

Note. The classical limit. Formally, both the Fermi–Dirac and Bose–Einstein distributions approach
the Maxwell–Boltzmann distribution in the limit of low occupancy numbers,
                                               E−µ
                                                   ≪ 1.
                                                T
 Since this is equivalent to T ≫ E − µ, it is sometimes called the low temperature limit, but this is
 deceptive; it would be better to call it the ‘high energy limit’. Specifically, the high energy tail of a
 Bose or Fermi gas always behaves classically. But at low temperature Bose and Fermi gases look
‘more quantum’ as a whole.

Note. The chemical potential is a bit trickier when the energy levels are discrete, since it can’t
be defined by a derivative; it is instead defined by fixing N . It can be shown that in the zero
temperature limit, the chemical potential is the average of the energies of the highest occupied
state and the lowest unoccupied state. This ensures that N is fixed upon turning in a small T . In
particular, it holds even if these two states have different degeneracies, because the adjustment in
µ needed to cancel this effect is exponentially small.

Note. We can establish the above results quantitatively with the Sommerfeld expansion. Define
                                             Z ∞
                                          1             xn−1
                               fn (z) =           dx −1 x
                                        Γ(n) 0       z e +1

which are the fermionic equivalent of the gn functions. Then
                                N  gs               E   3 gs
                                  = 3 f3/2 (z),       =      kB T f5/2 (z)
                                V  λ                V   2 λ3


where we plugged in the form of g(E), and gs is the number of spin states. We want to expand the
fn (z) at high z. At infinite z, the integrands are just xn−1 θ(βµ − x), so the integral is (βµ)n /n.
    For high z, the integrands still contain an approximate step function. Then it’s convenient to
peel off the difference from the step function by splitting the integral into two pieces,
                                 Z βµ                          Z ∞
                                                                             xn−1

                                          n−1           1
                   Γ(n)fn (z) =       dx x      1−              +     dx              .
                                  0                 1 + ze−x       βµ     z −1 ex + 1

The first term simply reproduces the infinite temperature result. Now, the deviations above and
below βµ tend to cancel each other, as we saw for dN/dT above. Then it’s useful to subtract them
against each other; defining η = βµ − x and η = x − βµ respectively, we get
                                            Z ∞
                                 (log z)n          (βµ + η)n−1 − (βµ − η)n−1
                    Γ(n)fn (z) =          +     dη
                                    n        0               1 + eη

where we extended a limit of integration from βµ to ∞, incurring an exponentially small O(z −1 )
error. Taylor expanding to lowest order in βµ gives
                                                                Z ∞
                                  (log z)n                               η
                    Γ(n)fn (z) =           + 2(n − 1)(log z)n−2     dη η   .
                                     n                           0    e +1

This integral can be done by expanding the denominator as a geometric series in e−η . Termwise
integration gives the series (−1)m+1 /m2 = (1/2) 1/m2 = π 2 /12, giving the final result
                            P                     P

                                     (log z)n     π 2 n(n − 1)

                            fn (z) =           1+              + ··· .
                                     Γ(n + 1)     6 (log z)2

By keeping more terms in the Taylor expansion, we get a systematic expansion in 1/ log z = 1/βµ.
  Applying the expansion to N/V , we immediately find
                                                               2
                                                       kB T
                                          ∆N ∼
                                                        µ

which shows that, to keep N constant,
                                                               2
                                                       kB T
                                           ∆µ ∼
                                                        EF

as expected earlier. Similarly, the first term in ∆E goes as T 2 , giving a linear heat capacity.

