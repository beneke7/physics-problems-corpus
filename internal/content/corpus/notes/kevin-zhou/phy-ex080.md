---
id: kevin-zhou-notes-phy-ex080
source: kevin-zhou-notes
native_id: "phy Example 080"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex080
topic: [quantum-mechanics]
subtopic: [angular-momentum]
math_tools: [linear-algebra, group-theory, spherical-coordinates]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "9256-9659"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. In the case j = 1, we have
                                                                   √       
                                 1                                        2 √
                        J3 = ℏ                   ,      J+ = ℏ            2 .
                                            −1

Evaluating e−2πiJ3 /ℏ , we find that a rotation by 2π is the identity. In general, for integer j, we end
up with a normal representation of SO(3), rather than a projective one.
Note. Reading a table of rotation matrices. The operator U (n̂, θ) has matrix elements
                                        j               ′
                                       Dm ′ m (U ) = ⟨jm |U |jm⟩.


Note that U must be diagonal in j-space, so we aren’t missing any information here. We think of
     j
the Dm ′ m as a set of matrices indexed by j. Parametrizing a rotation by Euler angles as above,

                          j                      −iαJz /ℏ −iβJy /ℏ −iγJz /ℏ
                         Dmm ′ (α, β, γ) = ⟨jm|e         e        e         |jm′ ⟩.
It is straightforward to expand this since Jz is diagonal, giving
                j                  −iαm−iγm j ′
               Dmm ′ (α, β, γ) = e         dmm′ (β),             djmm′ (β) = ⟨jm|e−iβJy /ℏ |jm⟩.

Here, djmm′ (β) is the reduced rotation matrix. Using tables of djmm′ values, we may construct
rotation matrices for arbitrary spin.
   The Dj matrices have numerous properties which aid calculation. We can view them as a
representation of the U operators; the distinction is that while the U operators act on a physical
Hilbert space, the Dj matrices are just numbers acting on vectors of numbers. Since U is unitary,
and we are using the orthonormal basis |jm⟩, the Dj are also unitary. These two properties imply
                                        j       −1      j∗
                                       Dmm ′ (U    ) = Dm ′ m (U ).


This is one of several symmetries of the D matrices.
Note. Multiple copies of the same irrep. If we have just one copy of an irrep, we construct an
orthonormal basis for it by starting with |jm⟩ for m = j and acting with J− . Similarly, if there
are many copies, we may pick an orthonormal basis for the m = j subspace, labeling the vectors
by γ, and carry them down with J− . We write the resulting basis vectors as |γjm⟩, and all matrix
                                                                                         j
elements defined above are identical except for a factor of δγ ′ γ . In particular, the Dmm ′ matrices

still suffice to calculate everything we need.
Note. The adjoint formula carries over, becoming
                                             U JU † = R−1 J.
Here, J = Jˆi ei is a vector of operators; the U operates on the Jˆi and the R operates on the ei .
The formula can be proven by considering infinitesimal rotations and building them up; for an
infinitesimal rotation U (n̂, θ) with θ ≪ 1, the left-hand side is
                                                      iθ
                                             J−          [n̂ · J, J].
                                                      ℏ
The commutator is equal to
                               [ni Ji , Jj eˆj ] = iℏϵijk ni eˆj Jk = −iℏn̂ × J.
Therefore, the left-hand side is J − θn̂ × J, which is simply the infinitesimal spatial rotation R−1 .


Note. For higher spin, we can define a spin state to be “pointing” in the n̂ direction if it is an
eigenket of J · n̂ with maximum eigenvalue. As for spin 1/2, if Rn̂ = n̂′ , then by the adjoint formula,
U (R) maps the spin state pointing in the n̂ direction to the spin state pointing in the n̂′ direction.
    But what’s different is that for higher spin, most states are not “pointing” in any direction at all.
For example, for a spin 1 particle, the state (0, 1, 0) has ⟨J⟩ = 0. That means that since the state
(1, 0, 0) points “up”, there is no rotation U (R) that maps (1, 0, 0) to (0, 1, 0) at all. This is generic
for spin higher than 1/2, i.e. the action of the U (R) on the spin states can’t be transitive, since the
dimension of SU (2) is less than the (real) dimension of the state space. (This is compatible with
the spin representations being irreps, as that only requires that the span of the entire orbit of each
vector is the whole representation.)

7.3     Spin and Orbital Angular Momentum
Next, we turn to physical realizations of angular momentum in quantum mechanics. We first
consider the case of spins in a magnetic field.

  • The Hamiltonian of a magnetic moment µ in a magnetic field B is H = −µ · B(x), both
    classically and in quantum mechanics. Magnetic moments obey

                                   F = −∇U = ∇(µ · B),          τ = µ × B.

  • Experimentally, we find that for nuclei and elementary particles, µ ∝ J, and the relevant state
    space is just a single copy of a single irrep of su(2).

  • For a classical current loop with total mass m and charge q, we can show that
                                                        q
                                                 µ=        L.
                                                       2mc
      The coefficient is called the gyromagnetic ratio γ. For general configurations, µ and L need
      not be proportional, since the former depends only on the current distribution while the latter
      depends only on the mass distribution. However, the relation does hold for orbital angular
      momentum in quantum mechanics, as we’ll justify below.

  • For spin, the relation above holds with a modified gyromagnetic ratio,
                                                        q
                                                µ=g        S.
                                                       2mc
      For electrons, µB = e/2mc is called the Bohr magneton, and g ≈ 2.

  • For nuclei, the magnetic moment must be determined experimentally. Since many nuclei are
    neutral but still have magnetic moments, it is useful to define the g-factors in terms of the
    nuclear magneton,
                                                           q
                                     µ = gµN S, µN =
                                                         2mp c
      where q is the elementary charge and mp is the proton mass. For the proton and neutron,

                                          gp ≈ 5.56,    gn ≈ −3.83.

      Note the factors of 2. When we take magnitudes, µN gives a 1/2, S gives a 1/2, and for electrons
      only, g gives a 2.


 • The magnetic moment of the proton comes from a mix of the spin and orbital motion of the
   quarks and gluons. Similarly, the magnetic moment of the deuteron (one proton and one
   neutron) comes from a combination of the magnetic moments of the proton and neutron, and
   the orbital motion of the proton. For spin zero particles, like the α particle, S = 0, so µ = 0.

We now show why the experimental facts above make sense.

 • Assuming rotational invariance, [H, J] = 0, the spectrum of the Hamiltonian is split into irreps
   each containing 2j + 1 degenerate states. Now, since accidental degeneracies are very unlikely,
   the irreps won’t be degenerate; instead, they will be separated by energies on the nuclear
   energy scale. This energy scale is much larger than the splitting within each irrep induced
   by an external field; therefore, if the nucleus starts in the ground state, it suffices to only
   consider the lowest-energy irrep. (While additional symmetries can cause more degeneracies,
   such symmetries are not generic.)

 • The above argument explains the situation for nuclei. For fundamental particles, the reason
   there isn’t degeneracy of different j is that no symmetries besides supersymmetry can relate
   particles of different j. This is the Coleman–Mandula theorem, and its proof requires relativistic
   quantum field theory.

 • Supposing that a single irrep is relevant, we will show below that every vector operator (i.e. triplet
   of operators transforming as a vector) is a multiple of J. Since µ is a vector, µ ∝ J.

 • In the case of atoms, the irreps are much closer together, as the atomic energy scale is much
   smaller than the nuclear energy scale. In this case we do see mixing of irreps for sufficiently
   strong fields, such as in the strong field Zeeman effect. Each irrep has its own g-factor, so that
   the total µ is no longer proportional to the total angular momentum, recovering the classical
   behavior.

We now consider the example of a spinless particle in three-dimensional space. We again assume
rotational symmetry, which in this case means V = V (r).

 • We can define angular momentum as x×p, but instead we define it as the generator of rotations,
   which is more fundamental. Let
                                      U (R)|x⟩ = |Rx⟩.
    Then it’s straightforward to check the U (R) are a unitary representation of SO(3).

 • Wavefunctions transform as

                                ψ ′ (x) = ψ(R−1 x) where |ψ ′ ⟩ = U (R)|ψ⟩.

    One way of remembering this rule is to note that if the rotation takes x to x′ , then we must
    have ψ ′ (x′ ) = ψ(x). This rule is necessary in the active point of view, which we take throughout
    these notes.

 • To find the form of the L operators, we substitute infinitesimal rotations
                                                                      i
                             R(n̂, θ) = 1 + θn̂ · J,   U (n̂, θ) = 1 − θn̂ · L
                                                                      ℏ


   into the above relation, where J contains the generators of the fundamental representation of
   so(3), as defined earlier. Equating first-order terms in θ, we have

                                     i
                                   − θn̂ · L ψ(x) = −θ(n̂ × x) · ∇ψ
                                     ℏ
   where we used the property (a · J)u = a × u. Simplifying,

                                (n̂ · L)ψ = (n̂ × x) · pψ = n̂ · (x × p)

   which implies L = x × p as expected.

 • Note that in this context, x and p don’t have ordering issues. For example, we have

                                 x × p = −p × x,         x · L = p · L = 0.

   The reason is that there are only nonzero commutators between xi and the same component of
   momentum pi , and the cross products prevent components from matching.

 • We now find the standard angular momentum basis |lm⟩ in the position basis. That is, we are
   looking for wavefunctions ψlm (x) such that

                             L2 ψlm = ℏ2 l(l + 1)ψlm ,       Lz ψlm = ℏmψlm .

   The easiest way to start is with the stretched state m = l, satisfying

                                      Lz ψll = lℏψll ,     L+ ψll = 0.

 • We know the Li in Cartesian coordinates; switching to spherical coordinates, we find

                            Lz = −iℏ∂ϕ ,        L± = −iℏe±iϕ (±i∂θ − cot θ∂ϕ )

   and
                                2      2         1                     1    2
                              L = −ℏ                 ∂θ (sin θ∂θ ) +       ∂ .
                                               sin θ                 sin2 θ ϕ
   That is, L2 is just the spherical Laplacian, up to a constant factor.

 • We notice that ∂r appears nowhere above, which makes sense since angular momentum generates
   rotations, which keep r constant. Therefore, it suffices to find wavefunctions on the unit sphere,
   f (θ, ϕ) = f (r̂). We define their inner product by
                                      Z
                             ⟨f |g⟩ = dΩ f (θ, ϕ)∗ g(θ, ϕ), dΩ = sin θ dθdϕ.

   As an example, the state |r⟩ has angular wavefunction δ(θ − θ0 )δ(ϕ − ϕ0 )/ sin θ, where the sine
   cancels the Jacobian factor in dΩ.

 • The solutions for the ψlm on the sphere are the spherical harmonics Ylm . Using the definition
   of Lz , we have Ylm ∝ eimϕ . After solving for Yll , we apply the lowering operator to find
                                     s                                    l−m
                               (−1)l 2l + 1 (l + m)! eimϕ

                                                                    d
                   Ylm (θ, ϕ) = l                                              sin2l θ.
                                2 l!     4π (l − m)! sinm θ d(cos θ)

   Here, the choice of phase factor (−1)l is conventional and makes Yl0 real and positive at the
   North pole. The (l + m)!/(l − m)! normalization factor comes from the application of L− .


 • We may also write the θ dependence in terms of the Legendre polynomials, which can be given
   by the Rodriguez formula
                                            (−1)l dl
                                   Pl (x) = l         (1 − x2 )l ,
                                             2 l! dxl
   and the associated Legendre functions

                                                               dm Pl (x)
                                    Plm (x) = (1 − x2 )m/2               .
                                                                dxm
   This yields                            s
                                              2l + 1 (l + m)! imϕ
                     Ylm (θ, ϕ) = (−1)m                      e Plm (cos θ),   m≥0
                                                4π (l − m)!
   where the m < 0 spherical harmonics are related by
                                                          ∗
                                          Yl,−m = (−1)m Ylm .

 • In the above analysis, we have found that precisely one copy of each integer irrep appears, since
   the solution to L+ ψll = 0 is unique for each l. For a particle in three-dimensional space, the Ylm
   will be multiplied by a function u(r). Then multiple copies of each irrep may appear, depending
   on how many solutions there are for u(r), and we must index the states by a third quantum
   number (e.g. n for the hydrogen atom).

 • The spherical harmonics are then our standard angular momentum basis |lm⟩. We can find
   an identity by computing ⟨r̂|U (R)|lm⟩ in two different ways. Acting on the right, we have
   Ylm (R−1 r̂). Alternatively, we may insert an identity for
                           X                               X
                                ⟨r̂|lm′ ⟩⟨lm′ |U (R)|lm⟩ =             l
                                                             Ylm′ (r̂)Dm ′ m (R).

                            m′                            m′

   Here, we only needed to insert states with the same l since they form an irrep. Then
                                               X
                                Ylm (R−1 r̂) =              l
                                                  Ylm′ (r̂)Dm ′ m (R).

                                                     m′


 • One useful special case of the above is to choose r̂ = ẑ and replace R with R−1 , for
                                              X
                                                          l         −1
                                   Ylm (r̂) =   Ylm′ (ẑ)Dm  ′ m (R    )
                                                m′

   where R is the rotation that maps ẑ to r̂, i.e. the one with Euler angles α = ϕ and β = θ.
   Moreover, only the m = 0 spherical harmonic is nonzero at ẑ (because of the centrifugal force),
   and plugging it in gives                   r
                                                2l + 1 l∗
                                 Ylm (θ, ϕ) =          Dm0 (ϕ, θ, 0)
                                                  4π
   where we applied the unitarity of the D matrices.

 • For a multiparticle system, with state space |x1 , . . . , xn ⟩, the angular momentum operator
          P
   is L =    xi × pi . To construct the angular momentum basis, we use addition of angular
   momentum techniques, as discussed later.


Note. A few examples of spherical harmonics.
                                 r                               r                       r
                 1                    3                             3                         3
         Y00 = √ , Y11 = −               sin θ eiϕ , Y10 =              cos θ, Y1,−1 =          sin θ e−iϕ ,
                 4π                 8π                             4π                        8π
               r                                 r                                  r
                   15     2   2iϕ                   15                 iϕ              5
         Y22 =         sin θ e , Y21 = −                  sin θ cos θ e , Y20 =           (3 cos2 θ − 1),
                  32π                               8π                                16π
                              r                                          r
                                  15                −iϕ                     15
                      Y2,−1 =          sin θ cos θ e , Y2,−2 =                 sin2 θ e−2iϕ .
                                  8π                                       32π
It is sometimes useful to write the spherical harmonics in Cartesian coordinates. Note that our
explicit expression for Ylm gives
                                                          r
                                                 (−1)   l    (2l + 1)!
                                rl Yll (θ, ϕ) = l                       (x + iy)l .
                                                   2 l!          4π
The right-hand side is a homogeneous polynomial of degree l. The other spherical harmonics can
be found by applying the operator operator, which in Cartesian coordinates is

                           L− = Lx − iLy = −iℏ ((y∂z − z∂y ) − i(z∂x − x∂z ))

which implies that rl Ylm is a homogeneous polynomial of degree l. In this representation, it is also
easy to see that the parity of Ylm is (−1)l .

7.4     Central Force Motion
We now apply the results of the previous section to central force motion.

  • Consider a spinless particle moving in a central potential. Since L2 and Lz commute with H,
    the eigenstates are of the form

                                         ψ(r, θ, ϕ) = R(r)Ylm (θ, ϕ).

      Substituting this into the Schrodinger equation, and noting that L2 is −ℏ2 /r2 times the angular
      part of the Laplacian, we have

                           ℏ2 1                                                l(l + 1)ℏ2
                       −         ∂r (r2 ∂r R) + U R = ER,    U (r) = V (r) +
                           2m r2                                                  2mr2
      where the extra contribution to the effective potential U (r) is equal to L2 /2mr2 . As in the
      classical case, this is the angular part of the kinetic energy.

  • Next, we let f (r) = rR(r). This is reasonable, because then |f |2 gives the radial probability
    density, so we expect this should simplify the radial kinetic energy term. Indeed we have
                                                             Z ∞
                          ℏ2 d2 f (r)
                        −             + U (r)f (r) = Ef (r),       dr |f (r)|2 = 1.
                          2m dr2                               0

      The resulting equation looks just like the regular 1D Schrodinger equation, but on (0, ∞).


 • We could also have arrived at this conclusion using separation of variables. Generally, this
   technique works when there is a continuous symmetry. Then the (differential) operator that
   generates this symmetry commutes with the Hamiltonian, and we can take the eigenfunctions
   to be eigenfunctions of that operator. In an appropriate coordinate system (i.e. when fixing
   some of the coordinates gives an orbit of the symmetry) this automatically gives separation
   of variables; for example, Lz generates rotations which change only ϕ, so diagonalizing Lz
   separates out the coordinate ϕ.

 • As another example, the free particle separates in Cartesian coordinates by conservation of
   linear momentum. The hydrogen atom has a hidden SO(4) symmetry, so it can be separated
   in confocal parabolic coordinates, in addition to spherical coordinates.

 • We index the radial solutions for a given l by n, giving

                                      ψnlm (r, θ, ϕ) = Rnl (l)Ylm (θ, ϕ).

   These account for the bound states; there also may be unbound states with a continuous
   spectrum. Focusing on just the bound states, the irreps are indexed by n and l and each contain
   2l + 1 states.

 • There generally is no degeneracy in l unless there is additional symmetry; this occurs for the
   hydrogen atom (hidden SO(4) symmetry, generated by L and the Laplace–Runge–Lenz vector
   A) and the 3D harmonic oscillator (SU (3) symmetry, where the eight generators are a†i aj , and
   the trace i a†i ai is not included because it is the Hamiltonian itself).
            P

 • The hydrogen atom’s energy levels are also degenerate in ms . This is simply because nothing
   in the Hamiltonian depends on the spin, but in terms of symmetries, it is because there are
   two independent SU (2) rotational symmetries, which act on the orbital or spin parts alone.

 • Next, we consider degeneracy in n, i.e. degenerate eigenfunctions f (r) of the same effective
   potential. These eigenfunctions satisfy the same Schrodinger equation (with the same energy E
   and effective potential U (r)), so there can be at most two of them, as the Schrodinger equation
   is second-order. However, as we’ll show below, we must have f (0) = 0, which effectively
   removes one degree of freedom – eigenfunctions are solely determined by f ′ (0). Therefore there
   is only one independent solution for each energy, bound or not, so different values of n are
   nondegenerate. (In the bound case, we can also appeal to the fact that f vanishes at infinity.)
   Therefore we conclude that irreps are generically nondegenerate.

 • We now consider the behavior of R(r) for small r. If R(r) ∼ ark for small r, then the terms in
   the reduced (1D) Schrodinger equation scale as:

     – Radial kinetic energy: −a(ℏ2 /2m)k(k + 1)rk−2 .
     – Centrifugal potential: a(ℏ2 /2m)l(l + 1)rk−2 .
     – Potential energy: aV (r)rk .
     – Right-hand side: aErk .

   If we suppose the potential is regular at the origin and diverges no faster than 1/r, then the
   last two terms are negligible. Then for the equation to remain true, the first two terms must
   cancel, so
                             k(k + 1) = l(l + 1), k = l or k = −l − 1.


    The second solution is nonnormalizable for l ≥ 1, so we ignore it. For l = 0, it gives R(r) ∝ 1/r,
    which is the solution for the delta function potential, which we have ruled out by regularity.
    (However, this kind of solution could be relevant in problems with very short-range potentials.)
    Therefore the first solution is physical,

                                           R(r) ∼ rl for small r

    and hence f (0) = 0 in general.

Now we consider some important examples of central force motion.

