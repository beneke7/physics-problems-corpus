---
id: kevin-zhou-notes-phy-ex047
source: kevin-zhou-notes
native_id: "phy Example 047"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex047
topic: [statistical-mechanics]
subtopic: [diamagnetism, landau-levels]
math_tools: [euler-summation, grand-canonical-ensemble]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "4584-5160"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. An explicit calculation of Landau diamagnetism. When the electrons are constrained
to the xy plane, they occupy Landau levels with
                                             
                                            1              eB
                                E = n+          ℏωc , ωc =
                                            2              m

with degeneracy
                                          Φ                          2πℏc
                                    N=       ,    Φ = L2 B,   Φ0 =        .
                                          Φ0                           e
Allowing the electrons to move in the third dimension gives an energy contribution ℏ2 kz2 /2m. Then
the grand partition function is
                                    ∞
                                      2L2 B                      βℏ2 kz2
                          Z                                                            
                     L              X
             log Z =          dkz                log 1 + z exp −         − βℏωc (n + 1/2)
                     2π                   Φ0                      2m
                                    n=0

where we added a factor of 2 to account for the spin sum, and converted the kz momentum sum
into an integral. Now we apply the Euler summation formula with the choice

                                                       βℏ2 kz2
                                 Z                               
                         h(x) = dkz log 1 + exp −              + βx .
                                                        2m

Then our grand partition function becomes
                     ∞                                     Z ∞                                 
               VB X                        VB                                       ℏωc dh
       log Z =      h(µ − ℏωc (n + 1/2)) =                        h(µ − ℏωc x) dx −        + ... .
               πΦ0                         πΦ0                0                      24 dµ
                    n=0

The first term is independent of B, and the second term gives

                                            1 ∂(log Z)    µ2
                                     M=                = − B g(Ef )B
                                            β ∂B           3

where we have µB = |e|ℏ/2mc as usual. Since the paramagnetic effect is three times larger, one
might expect that every solid is paramagnetic. The subtlety is that when the crystal lattice is
accounted for, the mass m used above becomes the effective mass m∗ . But the paramagnetic effect
is not changed at all, because it only depends on the intrinsic magnetic moments of the electrons,
which are independent of their motion. Another, independent factor is that core electrons still
contribute via Larmor diamagnetism but have no paramagnetic effects.

Note. Consider the hydrogen atom, with energy levels En = −E0 /n2 . The partition function
diverges, so formally the probability of occupancy of any state is zero! The situation only gets worse
when we consider unbound states as well.
   The resolution is that we are missing a spatial cutoff; the sum over n includes states that
are extremely large. Any reasonable cutoff gives a reasonable result. For infinite volume, a zero
probability of occupancy really is the correct answer, because once the electron moves a significant
distance from the atom, it has little chance of ever coming back: a random walk in three dimensions
will likely never return to its starting point.
87 3. Statistical Mechanics


3.7     Kinetic Theory
So far, we’ve only considered systems in thermal equilibrium. Kinetic theory is the study of the
microscopic dynamics of macroscopically many particles, and we will use it to study the approach
to equilibrium. We begin with a heuristic introduction.

 • We will need the fact that in equilibrium, the velocities of the particles in a gas obey the
   Maxwell–Boltzmann distribution
                                                3/2
                                            m              2
                                f (v) =               e−mv /2kB T .
                                          2πkB T

 • Now suppose we model the gas particles as hard spheres of diameter d. This is equivalent to
   modeling the particles as points, with an interaction potential that turns on at a distance d, so
   the interaction cross section is πd2 . Hence the mean free path is
                                                           1
                                                    ℓ=         .
                                                          nπd2
      We assume the gas is dilute, so ℓ ≫ d.

 • The typical time between collisions is called the scattering time or relaxation time,
                                                              ℓ
                                                    τ=              .
                                                          ⟨vrel ⟩
      To estimate ⟨vrel ⟩, note that
                                                                                6kB T
                                   2
                                 ⟨vrel ⟩ = ⟨(v − v′ )2 ⟩ = ⟨v 2 ⟩ + ⟨v ′2 ⟩ =
                                                                                  m
      since the Maxwell–Boltzmann distribution is isotropic, and we used equipartition of energy in
      the last step.

 • Zooming out, we can roughly think of each gas molecule as performing a random walk with
   step size ℓ and time interval τ . For motion in one dimension starting at x = 0, the probability
   of being at position x = mℓ after time t = N τ is
                                              r                   r
                                        N              2    2          2τ −x2 τ /2ℓ2 t
                   P (x, t) = 2−N                ≈       e−m /2N =        e
                                    (N − m)/2         πN               πt
      where we used Stirling’s approximation to expand the combination, and expanded to leading
      order in m/N . The probability distribution is hence a Gaussian with variance

                                                              ℓ2
                                                    ⟨x2 ⟩ =      t.
                                                              τ
      This makes sense, as each of the t/τ steps is independent with variance ℓ2 .

 • Similarly, in three dimensions, we have

                                                              ℓ2
                                                    ⟨r2 ⟩ =      t.
                                                              τ
      This can also be computed concretely by considering a random walk on a cubic lattice.
88 3. Statistical Mechanics


 • For many particles diffusing independently, their density is described by the diffusion equation,
                                                 ∂n
                                                    = D∇2 n.
                                                 ∂t
    Since this equation is linear, it suffices to establish this for an initial condition n(x, t = 0) = δ(x),
    where it should match the result of the random walk above. In one dimension, the solution is
                                                     r
                                                          1 −x2 /4Dt
                                           n(x, t) =          e
                                                        4πDt

    from which we conclude D = ℓ2 /2τ . Similarly, in three dimensions we also find a spreading
    Gaussian with D = ℓ2 /6τ .

Using this basic setup, we can talk about transport properties.

 • Consider two plates at z = 0 and z = d. If the top plate is moved a constant speed u in the
   x direction, there will be a velocity gradient ux (z) within the fluid. The upper plate then
   experiences a resistive force
                                                dux        u
                                        F = ηA       ≈ ηA
                                                 dz        d
   where the latter holds when d is small. The coefficient η is the dynamic viscosity.

 • Microscopically, viscosity can be thought of in terms of the transport of px through the fluid.
   The plates are “sticky”, so that molecules pick up an average nonzero px when colliding the top
   plate and lose it when colliding with the bottom plate. In the steady state, collisions between
   particles in the body of the fluid continually transport px from the top plate to the bottom.

 • As a simple approximation, we’ll suppose the local velocity distribution in the fluid is just the
   Maxwell–Boltzmann distribution shifted by ux (z), which is assumed to be small.

 • We now compute the momentum flowing through a surface of constant z. The number of
   particles passing through it per unit time per unit area is
                                             Z
                                            n dv vz f (v).

    A particle that came from a distance ∆z has an expected x-momentum of
                                                          dux
                                              ∆px = m         ∆z.
                                                           dz
    If the particle came in at an angle θ to the vertical, then we expect

                                                 ∆z = ℓ cos θ.

    Putting it all together, the momentum transferred per unit time per unit area is
                      Z                               Z                    3/2
               F                               dux                   m                   2
                 =n       dv vz f (v)∆px = mnℓ            dv                       ve−mv /2kB T cos2 θ.
               A                                dz                 2πkB T
89 3. Statistical Mechanics


 • Now, the integral is essentially computing ⟨v⟩ up to the factor of cos2 θ. Working in spherical
   coordinates, the only difference would be the θ integral,
                            Z π                        Z π
                                                    2
                                dθ cos2 θ sin θ dθ = ,     dθ sin θ dθ = 2.
                             0                      3   0

    Hence the cos2 θ factor contributes a factor of 1/3, giving
                                         F     dux         1
                                           =η      , η = mnℓ⟨v⟩.
                                         A      dz         3
    Since ℓ ∼ 1/n, the viscosity is independent of the density of the gas; a denser gas has more
    particles, but each carries less px . This surprising conclusion was first found by Maxwell, who
    confirmed it experimentally.
 • We can use a similar computation for the transport of kinetic energy, i.e. thermal conduction.
   Empirically, we find the flow of heat is proportional to the temperature gradient,
                                              q = −κ∇T
    where κ is the thermal conductivity.
 • We use the same reasoning as above, assuming that the local velocity distribution is just
   Maxwell–Boltzmann with a z-dependent T . Then E(z) = (3/2)kB T (z), so
                                                 3 dT
                                          ∆E = kB       ∆z.
                                                 2   dz
    The form of the integral is exactly the same, and we find
                                          1              3
                                     κ = cv ℓ⟨v⟩, cV = nkB .
                                          3              2
    As before, the conductivity doesn’t depend on the density.
Note. The diffusion equation is useful because it describes the transport of any locally conserved
quantity. For example, local conservation of energy means that
                                         dE
                                            +∇·q=0
                                         dt
where E = cV T is the energy density. Combining this with the above gives the heat equation
                                           dT     κ
                                              = − ∇2 T
                                           dt    cV
which is simply a diffusion equation for energy. Similarly, local conservation of momentum means
                                     dP i ∂P ji
                                          +       =0
                                      dt     ∂xj
where P is the momentum density. But we established earlier that
                                                      dux
                                            Pzx = η       .
                                                       dz
Hence combining these equations, we have
                             dP x     d2 ux                 η 2 x
                                  = −η 2 = −η∇2 ux = −        ∇ P
                               dt      dz                  mn
which is a diffusion equation for momentum. We first introduced diffusion for number density, but
diffusion smooths away inhomogeneities in any conserved quantity.
90 3. Statistical Mechanics


Now we will consider kinetic theory proper, by deriving the Boltzmann equation.

 • We consider N identical point particles in a potential, interacting pairwise, with Hamiltonian
                                     1 X 2 X           X
                              H=        pi + V (ri ) +   U (ri − rj ).
                                    2m
                                          i          i             i<j

   The phase space is 6N -dimensional, and we describe the configuration of the system as a
   probability distribution f on phase space, normalized as
                               Z                              Y
                                 dV f (ri , pi , t) = 1, dV =   dri dpi .
                                                                         i

    Liouville’s theorem states that df /dt = 0, where the derivative is to be interpreted as a convective
    derivative, following the phase space flow.

 • We define the Poisson bracket as usual,
                                               X ∂A           ∂B   ∂A ∂B
                                   {A, B} =               ·      −   ·    .
                                                    ∂ri       ∂pi ∂pi ∂ri
                                                i

   Then for any function A(ri , pi , t), we have

                                              dA   ∂A
                                                 =    + {A, H}
                                              dt   ∂t
   where the derivative on the left is again a convective derivative.

 • Applying Liouville’s theorem, we have Liouville’s equation
                                                ∂f
                                                   = {H, f }.
                                                ∂t
    For an equilibrium distribution, ∂f /∂t = 0, or equivalently {H, f } = 0. This holds when f is
    a function of H, as in the Boltzmann distribution f ∼ e−βH , but f can be more general. For
    instance, it can depend on the values of any conserved quantities.

 • We define the expectation value of A(ri , pi ) by
                                        Z
                                 ⟨A⟩ = dV A(ri , pi )f (ri , pi , t).

    Differentiating both sides gives
                           Z           Z             Z
                   d⟨A⟩            ∂f
                        = dV A        = dV A{H, f } = dV {A, H}f = ⟨{A, H}⟩
                    dt             ∂t
   where we integrated by parts in the third step. This looks superficially similar to what we had
   above, but it’s not the same result; for instance the derivative on the left here is an ordinary
   derivative rather than a convective derivative.

We now introduce the BBGKY hierarchy.
91 3. Statistical Mechanics


 • We define the one-particle distribution function by integrating over all but one particle,
                                               Z                                  N
                                                                                  Y
                        f1 (r1 , p1 , t) = N       dV1 f (ri , pi , t),   dV =           dri dpi .
                                                                                 i=k+1

   This doesn’t treat the first particle as special, because the particles are all identical, so f may be
   taken symmetric. The one-particle distribution function allows us to compute most quantities
   of interest, such as the density and average velocity,
                                  Z                             Z
                                                                       p
                        n(r, t) = dp f1 (r, p, t), u(r, t) = dp f1 (r, p, t).
                                                                      m

 • To see how f1 evolves in time, note that
                                        Z         Z
                               ∂f1          ∂f
                                   = N dV1     = N dV1 {H, f }.
                               ∂t           ∂t
    Using our explicit form of the Hamiltonian, this is
                                                                                  
           ∂f1
                    Z           X pj ∂f       X ∂V ∂f       X X ∂U (rk − rl ) ∂f
               = N dV1 −             ·    +            · +                  ·     .
           ∂t                       m ∂rj         ∂rj ∂pj           ∂rj        ∂pj
                                   j                     j                  j    k<l


 • Now, by the same logic as when we were computing d⟨A⟩/dt, we can integrate by parts for
   j ̸= 1, throwing away boundary terms and getting zero. Hence we only have to worry about
   j = 1. Relabeling (r1 , p1 ) to (r, p), we have
                                                                N
                                                                                !
                                                   ∂V (r) ∂f X ∂U (r − rk ) ∂f
                           Z
                 ∂f1                    p ∂f
                     = N dV1 − ·                +        ·    +            ·      .
                  ∂t                    m ∂r        ∂r     ∂p      ∂r        ∂p
                                                                           k=2


 • The first two terms simply reflect the dynamics of free “streaming” particles, while the final
   term includes collisions. Hence we can write this result as
                                                               p2
                                                  
                          ∂f1                  ∂f1
                              = {H1 , f1 } +           , H1 =     + V (r).
                           ∂t                  ∂t coll         2m

   The second term is called the collision integral.

 • The collision integral cannot be written in terms of f1 alone, which is not surprising, as it
   represents collisions between two particles. We introduce the n-particle distribution functions
                                                                       Z
                                                                       N
                         fn (r1 , . . . , rn , p1 , . . . , pn , t) =      dVn f (ri , pi , t).
                                                                       n

    Next, we note that all N − 1 terms in the collision integral are identical, so
                           Z
                                        ∂U (r − r2 ) ∂f                ∂U (r − r2 ) ∂f2
                                                            Z
                ∂f1          N
                         =          dV1              ·    = dr2 dp2                ·    .
                ∂t coll      2              ∂r         ∂p                   ∂r       ∂p
92 3. Statistical Mechanics


 • The same logic may be repeated recursively to find the time evolution of fn . We find
                                                 n
                                                                           ∂U (ri − rn+1 ) ∂fn+1
                                                         Z
                         ∂fn                X
                             = {Hn , fn } +                  drn+1 dpn+1                  ·
                          ∂t                                                     ∂ri        ∂pi
                                                i=1

    where the n-body Hamiltonian is
                                         n  2                    
                                         X  p        i
                                                                         X
                                  Hn =                   + V (ri ) +            U (ri − rj ).
                                                2m
                                          i=1                           i<j≤n

    That is, the n-particle distribution evolves by considering the interactions between n particles
    alone, plus a correction term involving collisions with an outside particle. This is the BBGKY
    hierarchy, converting Hamilton’s equations into N coupled PDEs.

The utility of the BBGKY hierarchy is that it isolates the physically most relevant information in
the lower fn , allowing us to apply approximations.

 • The Boltzmann equation is an approximate equation describing the evolution of f1 in terms
   of itself, i.e. it neglects two-body correlations. To derive it, we assume that the time between
   collisions, τ , also called the scattering time or relaxation time, is much greater than the time
   τcoll it takes for a collision to occur, called the collision time.

 • We further assume that collisions occur locally in space. Then if there are two particles at a
   point r with momenta p and p2 , the rate at which they scatter to p′1 and p′2 is

                                     ω(p, p2 |p′1 , p′2 )f2 (r, r, p, p2 ) dp2 dp′1 dp′2

    where ω describes the dynamics of the collision, and depends on the interaction potential.

 • As a result, the collision integral can be written as
                 Z
       ∂f1
                 = dp2 dp′1 dp′2 ω(p′1 , p′2 |p, p2 )f2 (r, r, p′1 , p′2 ) − ω(p, p2 |p′1 , p′2 )f2 (r, r, p, p2 )
                                                                                                                   
        ∂t coll

    where the two terms account for scattering into and out of momentum p. In a proper derivation
    of the Boltzmann equation, we would have arrived here by explicitly applying approximations
    to the BBGKY hierarchy.

 • Symmetries yield several constraints on the function ω.

     – We’ve tacitly assumed the scattering is the same at all points, so ω doesn’t depend on r.
     – Assuming that the external potential only varies appreciably on macroscopic distance scales,
       energy and momentum are conserved in collisions, so

                                       p + p2 = p′1 + p′2 ,           p2 + p22 = p′2   ′2
                                                                                  1 + p2 .


     – Time reversal symmetry implies that

                                      ω(p, p2 |p′1 , p′2 ) = ω(−p′1 , −p′2 | − p, −p2 ).
93 3. Statistical Mechanics


     – Parity symmetry flips the momenta without swapping incoming and outgoing, so

                                     ω(p, p2 |p′1 , p′2 ) = ω(−p, −p2 | − p′1 , −p′2 ).

     – Combining these two, we have symmetry between incoming and outgoing momenta,

                                          ω(p, p2 |p′1 , p′2 ) = ω(p′1 , p′2 |p, p2 ).

 • Applying this final property simplifies the collision integral to
                        Z
             ∂f1
                        = dp2 dp′1 dp′2 ω(p′1 , p′2 |p, p2 ) f2 (r, r, p′1 , p′2 ) − f2 (r, r, p, p2 ) .
                                                                                                      
              ∂t coll

    At this point, we use the assumption of molecular chaos,

                                        f2 (r, r, p, p2 ) = f1 (r, p)f1 (r, p2 )

    which assumes the momenta are uncorrelated. This is intuitive because collisions are rare, and
    each successive collision a molecule experiences is with a completely different molecule.

 • The assumption of molecular chaos is the key assumption that converts the BBGKY hierarchy
   into a closed system. It introduces an arrow of time, as the momenta are correlated after a
   collision. Since the dynamics are microscopically time-reversible, the momenta must actually
   have been correlated before the collision as well. However, generically these initial correlations
   are extremely subtle and destroyed by any coarse-graining.

 • Using the assumption of molecular chaos gives the Boltzmann equation,
                         Z
       ∂f1
           = {H1 , f1 } + dp2 dp′1 dp′2 ω(p′1 , p′2 |p, p2 ) f1 (r, p′1 )f1 (r, p′2 ) − f1 (r, p)f1 (r, p2 ) .
                                                                                                            
       ∂t
    It is quite difficult to solve, being a nonlinear integro-differential equation.

Next, we investigate equilibrium distributions for the Boltzmann equation.

 • The collision integral will clearly vanish if we satisfy the detailed balance condition,

                                      f1 (r, p′1 )f1 (r, p′2 ) = f1 (r, p)f1 (r, p2 )

    so that at every point, scattering into p is instantaneously balanced by scattering out of p.

 • Taking the logarithm of both sides, it is equivalent to say that the sum of log f1 (r, pi ) is
   conserved during a collision. Since we know energy and momentum are conserved during a
   collision, detailed balance can be achieved if

                                       log f1 (r, p) = β(µ − E(p) + u · p)

    where µ sets the local particle density. Exponentiating both sides, we see f1 is simply a
    Maxwell–Boltzmann distribution with temperature 1/β and drift velocity u.

 • Note that β, µ, and u can all be functions of position. Such a solution is said to be in local
   equilibrium, and we used them in our heuristic calculations in the previous section.
94 3. Statistical Mechanics


 • For simplicity, set V (r) = 0. Then the streaming term also vanishes if β, µ, and u are all
   constants. When u is zero, we have a standard gas at equilibrium; the freedom to have u
   nonzero is a result of momentum conservation. Similarly, the streaming term also vanishes if
   u ∝ r × p because of angular momentum conservation, giving a rotating equilibrium solution.

 • We can easily accommodate quantum statistics by converting the collision rate to

                 ω(p, p2 |p′1 , p′2 )f2 (r, r, p, p2 )(1 ± f1 (r, p′1 ))(1 ± f1 (r, p′2 )) dp2 dp′1 dp′2

   with a plus sign for bosons and a minus sign for fermions. In the fermionic case, the extra factors
                                                                                √
   simply enforce Pauli exclusion; in the bosonic case, they account for the n enhancement for
   the amplitude for n bosons to be together.

 • All the reasoning then goes through as before, and the detailed balance condition becomes
                                  X            f1 (p)
                                       log              conserved in collisions.
                                             1 ± f1 (p)

   When we set this to β(µ−E +u·p), we recover the Bose–Einstein and Fermi–Dirac distributions
   with chemical potential µ, temperature 1/β, and drift velocity u.
95 4. Continuum Mechanics


4      Continuum Mechanics
4.1     Fluid Statics
Continuum mechanics is the continuum limit of kinetic theory.

    • In solids and dense liquids, the distances between atoms are a fraction of a nanometer, while
      for gases at atmospheric pressure the distance is about ten times this. In continuum mechanics,
      we deal with much larger distance scales, and neglect the discreteness of atoms entirely.

    • In this limit, the details of the atoms and their interactions determine, e.g. transport coefficients.
      We’ll just take these quantities as given, rather than trying to calculate them.

    • A continuum description only works over sufficiently large distance scales. For example, if the
      atomic separation is ℓ and we work
                                     √    on distance scales of at least L, then the density fluctuations
      on such scales as ∆ρ/ρ ∼ 1/ N ∼ (L/ℓ)3/2 . Therefore, if we want ρ to be defined up to a
      fractional precision ϵ, we require L ≳ ℓ/ϵ2/3 .

    • As another example, suppose the typical molecular velocity
                                                          √      is vmol . Then the typical fluctuation
      in the center of mass speed of N molecules is vmol / N . If we are considering a bulk flow of
      average velocity v, and we want v to be defined up to fractional precision ϵ, then
                                                    v 2/3
                                                      mol
                                            L≳ℓ
                                                      ϵv
      which is somewhat more stringent.

    • Another requirement to have v be well-defined, specifically for gases, is that

                                                     L≫λ

      where λ is the mean free path. For air, λ ≲ 100 nm.

    • More generally, we demand that our continuous matter always be in local thermal equilibrium.
      For example, if the equation of state P = P (ρ, T ) holds in global thermal equilibrium, then we
      will assume p(x) = p(ρ(x), T (x)).

    • In general, we require L ≫ ℓ to apply continuum mechanics. Interfaces between different types
      of continuous matter have length scale ℓ, so they will be treated as discontinuities.

    • Below, we will refer to “material particles”, meaning packets of material containing a fixed set
      of atoms. These packets are much smaller than the dimensions of our setup, so they may be
      treated as infinitesimal, but larger than L, so they may be treated as continuous matter.

We begin with basic fluid statics.

    • The forces inside continuous matter are parametrized by the stress tensor σij , which means
      that the force dF on an infinitesimal surface element dS is

                                                 dFi = σij dSj

      where summation notation is used. Below, we will predominantly use index-free notation, so
      that the above equation would be written as dF = σ · dS.
96 4. Continuum Mechanics


 • In a static fluid, there are no shear stresses, so σij is diagonal. Furthermore, σij must be diagonal
   in all reference frames, which is only possible if it is proportional to the identity. Therefore, for
   static fluids we simply have isotropic pressure,

                                               dF = −p dS.

    In particular, the total pressure force on a material particle is

                                              dF = −∇p dV.

 • As an example, in hydrostatic equilibrium, ∇p = ρg. Supposing that the fluid has a barotropic
   equation of state, meaning that p = p(ρ), then we may define the pressure potential
                                                  Z
                                                     dp
                                           w(p) =
                                                    ρ(p)
    in which case Φ∗ = Φ + w(p) is constant, where Φ is the gravitational potential.

 • For a barotropic fluid, we define the bulk modulus
                                                          dp
                                                   K=ρ
                                                          dρ
    which quantifies the incompressibility. If p also depended on temperature, we would have to use
    a partial derivative. The isothermal bulk modulus KT corresponds to a derivative at constant
    T , and the isentropic bulk modulus is a derivative at constant S.

 • In hydrostatic equilibrium, ∇p = −ρ∇Φ, which means that gravitational equipotentials and
   isobars must coincide. Taking the curl of both sides yields (∇ρ) × (∇Φ) = 0, which tells us
   that gravitational equipotentials and constant density surfaces also coincide.

