---
id: kevin-zhou-notes-phy-ex082
source: kevin-zhou-notes
native_id: "phy Example 082"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex082
topic: [quantum-mechanics]
subtopic: [atomic-and-molecular-physics]
math_tools: [dimensional-analysis, differential-equations, spherical-coordinates]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "9691-10053"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. The rigid rotor. Consider two masses m1 and m2 connected with a massless, rigid rod
of length r0 . The Hamiltonian is
                                               L2
                                          H=      , I = µr02 .
                                               2I
Since the length r0 is fixed, there is no radial dependence; the solution is just

                                    l(l + 1)ℏ2
                             El =              ,   ψlm (θ, ϕ) = Ylm (θ, ϕ).
                                       2µr02
This can also be viewed as a special case of the central force problem, with a singular potential.


Note. Another, more mundane example of hidden symmetry is in the two-dimensional infinite
square well. The energy eigenstates are parametrized by integers |n1 , n2 ⟩, and the energy is pro-
portional to n21 + n22 , so most energy levels are two-fold degenerate. The system obviously has
the geometric symmetry of the square, and the corresponding discrete symmetry group C4v does
have two-dimensional irreps. But most degenerate pairs of states |n1 , n2 ⟩ ± |n2 , n1 ⟩ lie in separate
one-dimensional irreps, so more symmetry is needed to explain the degeneracy.
    The additional symmetry we need is “dynamical”, in the sense that it is not obvious from the
geometry but just happens to be conserved in the dynamics. We note that when a particle hits
the walls, it flips the sign of px or py . (Here we are glossing over some difficulties with rigorously
defining these operators.) Therefore, p2x and p2y are conserved separately. Their sum is just the
Hamiltonian, but the difference p2x − p2y is an independent symmetry generator, giving a symmetry
group U (1) ⋊ C4v . Because this new operator links |n1 , n2 ⟩ + |n2 , n1 ⟩ and |n1 , n2 ⟩ − |n2 , n1 ⟩, it
explains the remaining degeneracy.
    Another example is the n-dimensional harmonic oscillator, which is a central force problem
with a huge degeneracy of states. This degeneracy is explained by the symmetry generator Fij =
pi pj /(2m) + mω 2 xi xj /2, also known as the Fradkin tensor.
    We could consider more complex examples, but eventually this becomes an empty mathematical
game. For example, suppose that in any problem whatsoever, |n⟩ and |m⟩ are “accidentally”
degenerate energy eigenstates. Then we can always explain it by defining two “dynamical” symmetry
generators which act as

                    Q1 |n⟩ = |m⟩,    Q1 |m⟩ = |n⟩,   Q2 |n⟩ = |n⟩,    Q2 |m⟩ = −|m⟩

and trivially on other states. These operators commute with the Hamiltonian by construction, and
{|n⟩, |m⟩} form a two-dimensional irrep of the corresponding symmetry group. But we’ve gained
no new insight into the problem unless Q1 and Q2 are operators we care about for other reasons.

Next, we consider diatomic molecules.

  • For a typical diatomic molecule, such as CO, the reduced mass is on the order of several
    times the atomic mass, so the rotational energy levels are much more closely spaced than
    the atomic levels. (Here, we treat the two atoms as point particles; this is justified by the
    Bohr-Oppenheimer approximation, which works because the atomic degrees of freedom are
    faster, i.e. higher energy.) There are also vibrational degrees of freedom due to oscillations in
    the separation distance between the atoms.

  • To estimate the energy levels of the vibrational motion, we use dimensional analysis on the
    parameters m, e, and ℏ, where m and e are the mass and charge of the electron; this is
    reasonable because valence electrons are responsible for bonding. We don’t use c, as the
    situation is nonrelativistic.

  • We find the following units:

      – If we include relativistic corrections, a dimensionless parameter appears: the fine structure
        constant. In SI units, it is
                                                     e2       1
                                              α=           ≈     .
                                                   4πϵ0 ℏc   137
         In Gaussian units, this simplifies to e2 /ℏc. In atomic units, it just becomes 1/c.


     – Distance: a0 = ℏ2 /me2 ≈ 0.5 Å, the Bohr radius.
     – Energy: K0 = e2 /a0 = me4 /ℏ2 ≈ 27 eV, twice the Rydberg constant.
     – Velocity: v0 = e2 /ℏ = αc, which confirms the motion is nonrelativistic.

    In atomic units, we set e = m = ℏ = 1, setting all of these quantities to unity, so c = 1/α ≈ 137.

 • Now, we estimate the diatomic bond as a harmonic oscillator near its minimum. Assuming that
   the ‘spring constant’ of the bond is about the same as the ‘spring constant’ of the bond between
   the valence electrons and their own atoms (which makes sense since the bond is covalent), and
                 √
   using ω ∝ 1/ m, we have                  r
                                               m
                                     ωvib =       ω0 , ω0 = K0 /ℏ
                                               M
    where M is the reduced mass, on the order of 104 m. Therefore the vibrational energy level
    spacing is about 100 times closer than the electronic energy level spacing, or equivalently the
    bond dissociation energy.

 • The rotational energy levels have a different dependence, as

                                         ℏ2    ℏ2     m
                               ∆Erot =      ∼     2 =   K0 ∼ 10−4 K0 .
                                         2I   M a0    M

    The rotational levels are another factor of 100 times closer spaced than the vibrational ones.

 • At room temperature, the rotational levels are active, and the vibrational levels are partially
   or completely frozen out, depending on the mass of the atoms involved.

Next, we consider the classic example of hydrogen.

 • We consider a spinless, electrostatic, nonrelativistic model. For generality, we consider general
   one-electron atoms with atomic number Z, and hence potential

                                                          Ze2
                                              V (r) = −       .
                                                           r
    Note that we are using Gaussian units; to switch to SI, we substitute e2 → e2 /4πϵ0 .

 • The radial Schrodinger equation is

                                  ℏ2 d2 f         l(l + 1)ℏ2 Ze2

                                −         +                 −          f = Ef
                                  2µ dr2             2µr2     r

    where µ is the reduced mass. In this potential, the atomic units above are modified.

     – The characteristic distance is a = ℏ2 /meel enuc = a0 /Z, so the electrons orbit closer for
       higher Z.
     – The characteristic energy is K = eel enuc /a = Z 2 K0 , so the energies are higher for higher Z.
     – The characteristic velocity is v = eel enuc /ℏ = Zv0 = (Zα)c, so for heavy nuclei, the
       nonrelativistic approximation breaks down.


 • Taking distance and energy in units of a and K, we have

                               d2 f

                                          l(l + 1) 2
                                    +   −         +   + 2E   f = 0.
                               dr2           r2     r

   There are both bound states and free states in the spectrum. Searching for bound states, we
   change radial variable to
                                          2r            1
                                     ρ= , ν= √
                                           ν           −2E
   which reduces the equation to

                                   d2 f

                                            l(l + 1) ν  1
                                        + −         + −     f = 0.
                                   dρ2         ρ2    ρ 4

 • We can now solve the equation by standard methods. As an overview, we first take the high ρ
   limit to find the asymptotic behavior for normalizable solutions, f ∝ e−ρ/2 . We also know that
   at small ρ, R(r) ∝ rl , so f (r) ∝ rl+1 . Peeling off these two factors, we let

                                          f (ρ) = ρl+1 e−ρ/2 g(ρ)

   and get a simple equation for g,

                                  d2 g               dg
                              ρ      2
                                       + (2l + 2 − ρ) + (ν − l − 1)g = 0.
                                  dρ                 dρ

 • To solve this, we use the standard “method of Frobenius”, which is to expand g(ρ) in a power
   series, obtaining a recursion relation for the coefficients. If the series does not terminate, this
   series sums up to a growing exponential eρ that causes f (ρ) to diverge. It turns out the series
   terminates if
                                          ν = n ∈ Z, l < n.
   We call n the principal quantum number.

 • If one is interested in the non-normalizable solutions, one way to find them is to peel off
   f (ρ) = ρ−l e−ρ/2 h(ρ) and expand h(ρ) in a power series. This is motivated by the fact that the
   non-normalizable solutions to the Laplace equation look like ρ−l−1 at small ρ.

 • The solutions for f are polynomials of degree n times the exponential e−ρ/2 , with energies

                                              En = −1/2n2

   independent of l. Therefore we have n2 degeneracy for each value of n, or 2n2 if we count the
   spin. Restoring ordinary units, the energies are

                                                     Z 2 e4 m 1
                                            En = −
                                                       2ℏ2 n2
   where m is really the reduced mass, which is within 0.1% of the electron mass.


  • Explicitly, the radial wavefunctions have the form
                                           1                            1
                      R10 = 2e−r ,   R20 = √ (2 − r)e−r/2 ,       R21 = √ re−r/2
                                          2 2                          2 6
    and

          2               2 2 −r/3                2              2 2 −r/3                4
    R30 = √       3 − 2r + r e     ,       R31 = √           4r − r e     ,    R32 =     √ r2 e−r/3 .
         9 3              9                     27 6             3                     81 30
    Here, we have set a = 1. To restore a, we replace r with r/a and add a prefactor of 1/a3/2 .

  • One result that will be useful in several places below is
                                                         3/2
                                                        Z
                                          Rn0 (0) = 2
                                                        n
    in atomic units. This quantity is zero for ℓ ̸= 0 because of the angular momentum barrier.

  • The bound l < n can be understood classically. For a planet orbiting a star with a fixed energy
    (and hence fixed semimajor axis), there is a highest possible angular momentum corresponding
    to l ≈ n (in some units), corresponding to a circular orbit. The analogous quantum states have
    f (ρ) peaked around a single value. The low angular momentum states correspond to long, thin
    ellipses, and indeed the corresponding f (ρ) extend further out with multiple nodes.

Note. Many perturbations break the degeneracy in l. For example, consider an alkali atom, i.e. a
neutral atom with one valence electron. The potential interpolates between −e2 /r at long distances
and −Ze2 /r at short distances, because of the shielding effect of the other electrons. Orbits which
approach the core are lowered in energy, and this happens more for low values of l. In sodium, this
effect makes the 3s state significantly lower in energy than the 3p state. In general atoms, this
causes the strange ordering of orbital filling in the aufbau principle.
    In practice, these energy level shifts can be empirically parametrized as
                                                Z 2 e4 m 1
                                      Enℓ = −
                                                  2ℏ (n − δℓ )2
                                                     2

where δℓ is called the quantum defect, which rapidly falls as ℓ increases and does not depend on n.
For example, the electron energies in sodium can be fit fairly well by taking δs = 1.35, δp = 0.86, and
all others zero. The reason this works is that, for each fixed ℓ and in the Hartree–Fock approximation,
the energies Enℓ are the energy eigenvalues associated with a fixed radial potential, which has a
1/r tail. A correspondence principle argument, just like that used to derive the Bohr model, shows
that Enℓ ∝ 1/(n − δℓ )2 for integers n when n ≫ 1. Thus the quantum defect is an excellent way
to parametrize the energy levels of a Rydberg atom, i.e. an atom with an electron in a state with
n ≫ 1. It turns out, just as for the Bohr model, that it still works decently for n ∼ 1.
For reference, we summarize facts about special functions and the contexts in which they appear.

  • The most general equation we consider is the time-independent Schrodinger equation,

                                           −∇2 ψ + V ψ = Eψ

    which comes from separating the ordinary Schrodinger equation. We only consider the rota-
    tionally symmetric case V = V (r).


 • If we separate the wave equation, the spatial part is the Helmholtz equation, which is the special
   case V = 0 above. If we further set E = 0 above, we get Laplace’s equation, whose solutions
   are harmonic functions. These represent static solutions of the wave equation.

 • It only makes sense to add source terms to full PDEs, not separated ones, so we shouldn’t add
   sources to the time-independent Schrodinger equation or the Helmholtz equation. By contrast,
   Laplace’s equation is purely spatial, and adding a source term gives Poisson’s equation.

 • By rotational symmetry, the time-independent Schrodinger equation separates into a radial
   and angular part. The angular solutions are the eigenfunctions of L2 , the angular part of the
   Laplacian, and are called spherical harmonics.

     – The spherical harmonics Yℓm (θ, ϕ) form a complete basis for functions on the sphere. The
       quantity ℓ can take on nonnegative integer values.
     – They are proportional to eimϕ times an associated Legendre function Pℓm (cos θ).
     – Setting m = 0 gives the Legendre polynomials, which are orthonormal on [−1, 1].
     – More generally, the associated Legendre functions satisfy orthogonality relations which,
       combined with those for eimϕ , ensure that the spherical harmonics are orthogonal.
     – Spherical harmonics are not harmonic functions on the sphere. Harmonic functions on the
       sphere have zero L2 eigenvalue, and the only such function is the constant function Y00 .
     – If we were working in two dimensions, we’d just get eimθ .

 • The radial equation depends on the potential V (r) and the total angular momentum ℓ, which
   contributes a centrifugal force term.

     – For V = 0, the solutions are spherical Bessel functions, jℓ (r) and yℓ (r). They are called
       Bessel functions of the first and second kind; the latter are singular at r = 0.
     – For high r, the Bessel functions asymptote to sinusoids with amplitude 1/r. (As a special
       case, setting ℓ = 0 gives j0 (r) = sin(r)/r, y0 (r) = cos(r)/r, recovering the familiar form of
       an isotropic spherical wave.)
     – If we were working in two dimensions, we would instead get the ordinary, or cylindrical
       Bessel functions.
     – We define the (spherical) Hankel functions in terms of linear combinations of Bessel functions
       to correspond to incoming and outgoing waves at infinity.
     – For a Coulomb field, the solutions are exponentials times associated Laguerre polynomials.
       Again, there are two solutions, with exponential growth and decay, but only the decaying
       solution is relevant for bound states.

 • Our results also apply to Laplace’s equation, in which case the radial equation yields solutions
   rℓ and 1/rℓ+1 . These are the small-r limits of the spherical Bessel functions, because near the
   origin the energy term Eψ is negligible compared to the centrifugal term.

 • As an application, applying this decomposition to the potential created by a charge distribution
   near the origin yields the multipole expansion, with ℓ = 0 giving the monopole contribution,
   and so on.


7.5     Addition of Angular Momentum
We now discuss addition of angular momentum.

 • Consider two Hilbert spaces with angular momentum operators J1 and J2 . Then the tensor
   product space has angular momentum operator

                                      J = J1 ⊗ 1 + 1 ⊗ J2 = J1 + J2 .

      The goal is to relate the angular momentum basis of the joint system |jm⟩ in terms of the
      uncoupled angular momentum basis |j1 m1 ⟩ ⊗ |j2 m2 ⟩ = |j1 m1 j2 m2 ⟩.

 • It suffices to consider the tensor product of two irreps; for concreteness, we consider 52 ⊗ 1. The
   Jz eigenvalue is just m1 + m2 , so the m eigenvalues of the uncoupled basis states are:




 • To find the coupled angular momentum basis, we first consider the state | 52 52 ⟩ ⊗ |11⟩, which has
   m = 7/2. This state is a one-dimensional eigenspace of Jz . However, since Jz commutes with
   J 2 , it must also be a one-dimensional eigenspace of J 2 , so it has a definite j value. Since there
   are no states with higher m, we must have j = 7/2, so | 25 52 11⟩ = | 72 27 ⟩.

 • Next, we may apply the total lowering operator to give | 72 25 ⟩. There are two states with m = 5/2,
   and hence by similar reasoning, the orthogonal state with m = 5/2 must be an eigenstate of
   J 2 , so it is | 52 25 ⟩.

 • Continuing this process, lowering our basis vectors and finding new irreps by orthogonality, we
   conclude that 52 ⊗ 1 = 32 ⊕ 52 ⊕ 72 . By very similar reasoning, we generally have

                            j1 ⊗ j2 = |j1 − j2 | ⊕ |j1 − j2 | + 1 ⊕ · · · ⊕ j1 + j2 .

 • We define the Clebsch–Gordan coefficients as the overlaps ⟨j1 j2 m1 m2 |jm⟩. These coefficients
   satisfy the relations
                         X
                            ⟨jm|j1 j2 m1 m2 ⟩⟨j1 j2 m1 m2 |j ′ m′ ⟩ = δjj ′ δmm′ ,
                           m1 m2

                            X
                                  ⟨j1 j2 m1 m2 |jm⟩⟨jm|j1 j2 m′1 m′2 ⟩ = δm1 m′1 δm2 m′2
                             jm

    which simply follow from completeness of the coupled and uncoupled bases. In addition we
    have the selection rule
                                  ⟨jm|j1 j2 m1 m1 ⟩ ∝ δm,m1 +m2 .
    We may also obtain recurrence relations for the Clebsch–Gordan coefficients by applying J− in
    both the coupled and uncoupled bases.

  • Next, we consider the operation of rotations. Since J1 and J2 commute,

                                  U (n̂, θ) = e−iθn̂·(J1 +J2 )/ℏ = U1 (n̂, θ)U2 (n̂, θ)

    where the Ui are the individual rotation operators. Then
                                                         j
                                             XX
                          U |j1 j2 m1 m2 ⟩ =     |jm′ ⟩Dm                 ′  ′
                                                           ′ m ⟨jm|j1 j2 m1 m2 ⟩
                                                    jm m′

    in the coupled basis, and
                                                                                            j1      j2
                                                                  X
                  U |j1 j2 m1 m2 ⟩ = U1 |j1 m1 ⟩U2 |j2 m2 ⟩ =              |j1 j2 m′1 m′2 ⟩Dm  ′ m Dm′ m
                                                                                                  1      2
                                                                                             1        2
                                                                 m′1 m′2

    in the uncoupled basis. Combining these and relabeling indices, we have
                       j1        j2                          j
                                         X
                                                                     ′        ′  ′
                     Dm   1 m ′ Dm m ′ =
                                    2
                                           ⟨j1 j2 m1 m2 |jm⟩Dmm ′ ⟨jm |j1 j2 m1 m2 ⟩
                              1         2
                                             jmm′

    which allows products of D matrices to be reduced.

