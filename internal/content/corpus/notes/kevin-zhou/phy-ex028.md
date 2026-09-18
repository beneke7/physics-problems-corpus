---
id: kevin-zhou-notes-phy-ex028
source: kevin-zhou-notes
native_id: "phy Example 028"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex028
topic: [electromagnetism]
subtopic: [relativistic-electromagnetism, radiation]
math_tools: [lorentz-transformations, four-vectors, fourier-transforms, green-functions]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1991-2686"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. A boosted point charge. Ignoring constants, the field is
                                                            
                                                            x
                                  r            1
                            E∼ 3 = 2                       y  .
                                 r     (x + y 2 + z 2 )3/2
                                                            z

Now consider a frame moving with velocity v = v î. Then the boosted field is
                                                          
                                                           x
                                 ′           1
                                E ∼ 2                    γy 
                                     (x + y 2 + z 2 )3/2
                                                           γz


using the coordinates in the original field. Switching the coordinates to the boosted ones,
                                                                    ′
                                                                    x + vt′
                                                                            
                                               γ
                           E′ ∼ 2 ′                                 y′ 
                                 (γ (x + vt′ )2 + y ′2 + z ′2 )3/2
                                                                       z′

where we used x = γ(x′ + vt′ ). Interestingly, the field remains radial. However, the x′ coordinate
in the denominator is effectively γx′ , so it’s as if electric field lines have been length contracted.
By charge invariance and Gauss’s law, the total flux remains constant, so the field is stronger than
usual along the perpendicular direction and weaker than usual along the parallel direction.

We conclude by rewriting Maxwell’s equations and the Lorentz force law relativistically.

  • Maxwell’s equations are
                                      ∂µ F µν = µ0 J ν ,   ∂µ Feµν = 0.
    Note that this automatically implies current conservation. Also note that the second one holds
    automatically given F = dA.

  • The relativistic generalization of the Lorentz force law is
                                              dpµ
                                                  = qF µν uν
                                              dτ
    where u is velocity. The spatial part is the usual Lorentz force, while the temporal part is
                                              dE
                                                 = qγE · u.
                                              dτ
    This simply says that electric fields do work, while magnetic fields don’t.

  • This can also be rewritten in terms of the canonical momentum pµ + qAµ ,
                                        d µ
                                          (p + qAµ ) = quν ∂ µ Aν .
                                       dτ
    As we mentioned above, in Hamiltonian mechanics this is the more relevant quantity. In the
    nonrelativistic limit, the components of this equation are

                d 1       2          ∂                 d
                       mv + qϕ = q(ϕ − v · A),            (mv + qA) = −∇q(ϕ − v · A).
                dt 2                ∂t                 dt

  • One neat trick is that whenever E · B = 0, we can boost to get either zero electric or zero
    magnetic field. For example, a particle in crossed fields either goes a cycloid-like motion, or
    falls arbitrarily far; the sign of E 2 − B 2 separates the two cases.

Note. What is the physical meaning of the vector potential? A common reply is that it’s physically
meaningless because it’s gauge-dependent, but this is too restrictive: under that standard, the
scalar potential and the Hamiltonian itself are also physically meaningless! The common meaning
of the scalar potential, that of the potential energy per charge, only makes sense for certain gauges.
Similarly, the vector potential is the potential momentum per charge, again in certain gauges.
    This was how Maxwell thought about the vector potential, which he actually called the “electro-
magnetic momentum”, but this interpretation of it tends to be less useful. The reason is that the


time component of pµ + qAµ is conserved whenever Aµ is time-independent, which can easily be
arranged with a proper gauge choice in static problems, but it is much harder for the spatial part
to be conserved. It can be arranged when Aµ is space-independent, but this renders everything
trivial. However, if the problem has translational symmetry in one direction, we can choose a gauge
where a component of p + qA is conserved, while if the problem has rotational symmetry, then a
component of the canonical angular momentum r × (p + qA) can be made to be conserved. For
instance, this yields the conserved quantities of a particle in a magnetic field, which we previously
derived using the adiabatic theorem.
    We can also understand the idea of potential momentum by considering the particle and field
together. The total field is a superposition of the background field and the particle’s field,

                                    E = E0 + Ep ,      B = B0 + Bp ,

where the equations of motion above only involve the background field. The total energy and
momentum are always conserved, but since they are quadratic in the fields, there are contributions
specific to each, plus a cross term. For example, for a static particle, the field energy is
                                                                 !
                    E2 B2               E02 B02              Ep2
                 Z                  Z
            U=          +     dV =          +    + E0 Ep +         dV = U00 + U0p + Upp .
                     2     2             2    2               2

When the fields is static and we work in a static gauge, where Aµ is constant, then

                                        Upp = p0 ,     U0p = qA0 .

Conservation of p0 + qA0 thus follows from conservation of U00 . Similarly, the field momentum is
                              Z              Z
                         P = E × B dV = E0 × B0 + Ep × B0 dV

and the cross term, representing the interaction between the particle and field, is precisely qA. To
see this, we note that in a static gauge,
               Z                    Z                Z                   Z
                  Ep × B0 dV = − ∇ϕp × B0 dV = ϕp ∇ × B0 dV = ϕp J0 dV

where we discarded a boundary term. Further restricting to Coulomb gauge, we have
        Z             Z              Z                   Z
                           2              2
           ϕp J0 dV = ϕp ∇ A0 dV = (∇ ϕp )A0 dV = qA0 δ(r − rp ) dV = qA0 (rp )

as desired.

2.5     Radiation
In this section, we show how radiation is produced by accelerating charges.

  • Expanding the equation of motion, we have

                                ∂ν F νµ = µ0 J µ ,   ∂ 2 Aµ − ∂ µ ∂ν Aν = µ0 J µ .

      To simplify, we work on Lorenz gauge ∂µ Aµ = 0, so

                                                ∂ 2 Aµ = µ 0 J µ .

      That is, the potential solves the wave equation, and its source is the current.


 • Lorenz gauge exists if we can always pick a gauge transformation χ so that ∂ 2 χ = −∂µ Aµ .
   Thus solving the wave equation will also show us how to get to Lorenz gauge in the first place.

 • The equation of motion in nonrelativistic notation is
                                                   ∂              ρ
                                         ∇2 ϕ +       (∇ · A) = −
                                                   ∂t             ϵ0
    and
                                 1 ∂2A

                             2               1 ∂ϕ
                            ∇ A− 2 2 −∇ ∇·A+ 2      = −µ0 J.
                                c ∂t        c ∂t
    This form is useful for gauge that break Lorentz invariance, such as Coulomb gauge, ∇ · A = 0.

 • In Coulomb gauge, the expression for ϕ in terms of ρ is the same as in electrostatics, with no
   retardation, which appears to violate causality. This is physically acceptable because ϕ is not
   directly measurable, but it makes the analysis more confusing. However, Coulomb gauge is
   useful for certain calculation, as we will see for the Darwin Lagrangian.

 • In Coulomb gauge, it is useful to break the current into transverse and longitudinal components,

                                 J = Jℓ + Jt ,     ∇ × Jℓ = 0,    ∇ · Jt = 0.

    These can be computed explicitly from J by
                                  ∇′ · J(x′ ) ′                                    J(x′ )
                               Z                                              Z
                           1                                     1
                Jt (x) = − ∇                 dx ,        Jt =      ∇×∇×                     dx′ .
                          4π       |x − x′ |                    4π                |x − x′ |

 • Then the first equation of motion gives
                                                 1 ∂Φ
                                                   ∇   = µ 0 Jt
                                                 c2 ∂t
    which means that in the second equation of motion, only the transverse current sources A,

                                                    1 ∂2A
                                         ∇2 A −            = −µ0 Jt
                                                    c2 ∂t2
    which makes sense because A has no longitudinal component.

Returning to Lorenz gauge, we are thus motivated to find the Green’s function for ∂ 2 .

 • Our first approach is to perform a Fourier transform in time only, for

                                         (∇2 + ω 2 )Aµ = −µ0 Jµ .

    This is called the Helmholtz equation; the Poisson equation is the limit ω → 0. The function
    Jµ (x, ω) is the time Fourier transform of Jµ (x, t) at every point x.

 • Define the Green’s function for the Helmholtz equation as

                                    (∇2 + ω 2 )Gω (x, x′ ) = δ 3 (x − x′ ).

    Translational and rotational symmetry mean Gω (x, x′ ) = Gω (r) where r = |x − x′ |. We can
    think of Gω (r) as the spatial response to a sinusoidal source of frequency ω at the origin.


 • In spherical coordinates,
                                       1 d              dGω
                                                   r2               + ω 2 Gω = δ(r).
                                       r2 dr             dr
    This equation has solutions
                                                    1 e±iωr
                                               Gω (r) = −   .
                                                   4π r
    One can arrive at this result by guessing that amplitudes fall as 1/r, and hence working in
    terms of rG instead of G. The constant is found by integrating in a ball around r = 0.

 • Plugging this result in, we have

                                              µ0
                                                        Z                 ±iω|x−x′ |
                                                                    ′ e
                                  Aµ (x, ω) =               dx                         Jµ (x′ , ω).
                                              4π                      |x − x′ |
    Therefore, taking the inverse Fourier transform,
                                       −iω(t∓|x−x′ |)                               ′            ′
                                                                             ′ Jµ (x , t ∓ |x − x |)
                         Z     Z                                        Z
                      µ0            ′ e                     ′        µ0
          Aµ (x, t) =       d̄ω dx                    Jµ (x   , ω) =      dx                         .
                      4π                |x − x′ |                    4π               |x − x′ |

 • The result is like the solution to the Poisson equation, except that the current must be evaluated
   at the retarded or advanced time; we take the retarded time as physical, defining

                                                tret = t − |x − x′ |.

    We see that the Helmholtz equation contains the correct speed of light travel delay.

 • Note that while the potentials just depend on the current in the usual way, but evaluated at the
   retarded time, the same is not true of the fields! When we differentiate the potentials, we pick
   up extra terms from differentiating tret . These extra terms are crucial because they provide the
   radiation fields which fall off as 1/r, rather than 1/r2 .

We can also take the Fourier transform in both time and space.

 • The Green’s function for the wave equation satisfies

                                     ∂ 2 G(x, t, x′ , t′ ) = δ(x − x′ )δ(t − t′ ).

    By translational symmetry in both space and time, G = G(r, t).

 • Taking a Fourier transform and solving, we have
                                                          1
                                            G(k, ω) = − 2          .
                                                       k − ω 2 /c2

 • Inverting the Fourier transform gives

                                                                            ei(k·r−ωt)
                                                            Z
                                        G(r, t) = −             d̄4 k                    .
                                                                           k 2 − ω 2 /c2
    Switching to spherical coordinates with ẑ ∥ k and doing the angular integration,
                                    Z ∞                Z ∞
                                 1          2 2 sin kr               e−iωt
                     G(r, t) = 3        dk c k             dω                   .
                                4π 0              kr    −∞     (ω − ck)(ω + ck)


  • In order to perform the dω integration, we need to deal with the poles. By adding an infinitesimal
    damping forward in time, we can push the poles below the real axis. Now, when t < 0, the
    integration contour can be closed in the upper-half plane, giving zero. When t > 0, we close in
    the lower-half plane, picking up both poles, so
                                           e−iωt
                              Z
                                                            2π
                                  dω                   = − θ(t) sin(ckt).
                                C    (ω − ck)(ω  + ck)      ck
    Finally, doing the dk integral gives some delta functions, for
                                                           θ(t)
                                         Gret (r, t) = −        δ(tret ).
                                                           4πr
    This is the retarded Green’s function; plugging it into the wave equation gives us the same
    expression for the retarded potential as derived earlier.

  • We can also apply antidamping, getting the advanced Green’s function
                                                          θ(−t)
                                        Gadv (r, t) = −         δ(tadv ).
                                                           4πr
  • Both of these conventions can be visualized by pushing the integration contour above or below
    the real axis. If we instead tilt it about the origin, we get the Feynman propagator.

Note. Checking Lorenz gauge. Our retarded potential solution has the form
                                       Z
                              Aµ (x) ∼ d4 x′ G(x, x′ )Jµ (x′ ).

Now consider computing ∂µ Aµ . Since the Green’s function only depends on x − x′ , we have
                       Z                             Z
                ∂µ A ∼ d x ∂µ G(x, x )Jµ (x ) = − d4 x′ (∂µ′ G(x, x′ ))Jµ (x′ ).
                    µ      4 ′          ′     ′


We can then integrate by parts; since ∂µ J µ = 0, Lorenz gauge holds.
We now use our results to analyze radiation from small objects.

  • Consider an object centered on the origin with lengthscale d, with potential
                                                        Jµ (x′ , tret )
                                                 Z
                                              µ0
                                  Aµ (x, t) =       dx′                 .
                                              4π         |x − x′ |
    We would like to compute the field at a distance r = |x| ≫ d. Taylor expanding,
                 1        1 x · x′
                        =   + 3 + ...,         Jµ (x′ , tret ) = Jµ (x′ , t − r/c + x · x′ /rc + . . .).
              |x − x′ |   r   r

  • Going to leading order in d/r gives the electric dipole approximation,
                                                 Z
                                             µ0
                                Aµ (x, t) ≈         dx′ Jµ (x′ , t − r/c).
                                            4πr
    This approximation only makes sense if the motion is nonrelativistic: the next correction term
    to tret is of order d/c, which is only small if the characteristic timescale of changes in the current
    is much greater than d/c.


  • It’s easiest to compute the field starting with the vector potential. We use the identity
                                                           Z
                                ∂j (Jj xi ) = −ρ̇xi + Ji ,   dx′ J(x′ ) = ṗ

    which is like our results in magnetostatics, but allowing for a varying dipole moment p. Evalu-
    ating this at the time t − r/c,
                                                    µ0
                                       A(x, t) ≈       ṗ(t − r/c).
                                                   4πr
  • Applying the product rule, we have

                                µ0     x̂ × ṗ(t − r/c) x̂ × p̈(t − r/c)
                          B≈        −                  −                   .
                                4π             r2               rc

    The former is just the usual magnetic field but time-delayed, and the latter is the 1/r radiation
    field. If the dipole has characteristic frequency ω, then the latter dominates if r ≫ λ = c/ω,
    the far-field/radiation zone.

  • In the radiation zone, the fields look like plane waves, with E = −cx̂ × B. Then
                                   1        c 2        µ0
                              S=      E×B=    B x̂ =            |x̂ × p̈|2 x̂
                                   µ0      µ0        16π 2 r2 c
    where we used the triple cross product rule.

  • The total instantaneous power is thus
                                                 Z
                                        µ0                          µ0
                                    P=               sin2 θ dΩ =       |p̈|2 .
                                       16π 2 c                     6πc

  • Consider a particle of charge Q oscillating in the ẑ direction with frequency ω and amplitude
    d, and hence dipole moment p = Qz. Expanding and time averaging,

                                                 µ0 p 2 ω 4    Q2 a2
                                        Pav =               =          .
                                                  12πc        12πϵ0 c3
    This is the Larmor formula; note that it is quadratic in charge and acceleration (the field is
    linear, but energy is bilinear). Since we used the electric dipole approximation, it only applies
    for nonrelativistic motion.

  • Note that the radiation fields are zero along the ẑ axis. This is related to the hairy ball theorem:
    since the radiation fields are everywhere tangent to spheres about the charge, they must vanish
    somewhere.

  • By taking higher-order terms in our Taylor series, we can get magnetic dipole and electric
    quadrupole terms, and so on. The magnetic dipole term is dominant in situations where there
    is no electric dipole moment (e.g. a current loop), but for moving charges its power is suppressed
    by v 2 /c2 and hence is much smaller in the nonrelativistic limit.

We can apply our results to scattering.


 • As a warmup, we consider Thomson scattering. Consider a free particle in light, and assume
   that it never moves far compared to the wavelength of the light. Equivalently, we assume it
   never moves relativistically fast. Then
                                                                         qE0
                            mẍ(t) ≈ qE(x = 0, t),      x(t) = −              sin(ωt).
                                                                         mω 2
   Applying the Larmor formula,
                                                     µ0 q 4 E02
                                             Pav =              .
                                                     12πm2 c
 • The averaged Poynting vector for the light is

                                                       cE02
                                               Sav =        .
                                                       2µ0
   Therefore, Thomson scattering has a cross section of

                                        Pav   8π 2           q2
                                   σ=       =   r ,                = mc2 .
                                        Sav    3 q         4πϵ0 rq

   Here, rq is called the classical electron radius. Note that it is independent of frequency.

 • Thomson scattering is elastic, but if the particle moves relativistically fast, the scattered light
   can be redshifted by radiation recoil effects.

 • Experimentally, it was found that the scattered light had a shifted wavelength for high frequencies
   and arbitrarily low intensities (Compton scattering), which provided support for the particle
   nature of light.

 • Rayleigh scattering describes the scattering of light off a neutral but polarizable atom or molecule.
   We effectively add a spring and damping to the model of Thomson scattering, so

                                                     qE(t)/m
                                        x(t) = −                          .
                                                   ω 2 − ω02 + iγω

 • In the limit ω ≪ ω0 , which is a good approximation for visible light and molecules in the
   atmosphere, the amplitude is constant (rather than the 1/ω 2 for Thomson scattering), giving
                                                                 4
                                              8πrq2

                                                           ω
                                           σ=                        .
                                               3           ω0

   The fact that σ ∝ ω 4 explains why the sky is blue. Intuitively, scattering of low frequency light
   is suppressed because the ‘molecular springs’ limit how far the electrons can go.

 • Rayleigh scattering holds when the size of the molecules involved is much smaller than the
   wavelength of the light. In the case where they are comparable, we get Mie scattering, which
   preferentially scatters longer wavelengths. The reason is that nearby molecules oscillate in
   phase, so their amplitudes superpose, giving a quadratic increase in power. Mie scattering
   applies for water droplets in the atmosphere, explaining why clouds are visible, and white. In
   the case where the scattering particles are much larger, we simply use geometric optics.


Note. As a final note, we can generalize our results to a relativistically moving charge. Suppose a
point charge has position r(t). Then its retarded potential is
                                                  δ(x′ − r(tret ))
                                            Z
                                  ϕ(x, t) ∝ dx′                    .
                                                     |x − x′ |
The tricky part is that tret depends on x′ nontrivially. Instead, it’s easier to switch the delta function
to be over time,
                                  δ(x′ − r(t))δ(t − tret )                ′            ′
                                                                 ′ δ(t − t − |x − r(t )|/c)
                        Z                                    Z
                              ′
             ϕ(x, t) ∝ dx dt                               =   dt                           .
                                         |x − x′ |                        |x − r(t′ )|
The argument of the delta function changes both because of the t′ and because of the velocity of
the particle towards the point x, giving an extra contribution akin to a Doppler shift. Then
             q                1                                   qµ0           v(t′ )
ϕ(x, t) =                                       ,   A(x, t) =                                       ,   t′ +R(t′ )/c = t
            4πϵ0 R(t′ )(1 − R̂(t′ ) · v(t′ )/c)                   4π R(t′ )(1 − R̂(t′ ) · v(t′ )/c)
where R is the separation vector R(t) = x − r(t). These are the Lienard–Wiechert potentials.
Carrying through the analysis, we can find the fields of a relativistic particle and the relativistic
analogue of the Larmor formula. The result is that the radiation rate is greatly enhanced, and
concentrated along the direction of motion of the particle.
Note. A cheap, very heuristic estimate of radiation power. Consider sound waves emitted by a
speaker. The relevant field is the velocity field v, and sources correspond to adding mass Ṁ (which
the speaker simulates by pushing mass outward). The “coupling” is the inverse of the air density,
1/ρ, in the sense that the static field and energy density are
                                                     Ṁ           1
                                             v=           ,    u = ρv 2 .
                                                    4πρr2         2
Now we consider the power radiated by a spherically symmetric speaker, which has amplitude Ṁ
and angular frequency ω. A simple estimate would be to take the energy density at some radius,
and multiply it by 4πr2 c, where c is the speed of sound. However, at small radii, the 1/r radiation
field is overwhelmed by a 1/r2 quasistatic field, which does not count as radiation.
    By dimensional analysis, the two types of fields must be equally important at the intermediate
field distance r ∼ c/ω. Evaluating the field there, we have
                                                   !2 
                                        1      Ṁ                 1 Ṁ 2 ω 2
                        P ∼ (4πr2 c)  ρ                      =             .
                                        2    4πρr2       r=c/ω   8π ρc

This is a correct estimate of the radiation power; evaluating the static field at r = c/ω has saved us
from having to think about how to compute the radiation field at all.
   To convert this to electromagnetism, we convert Ṁ to q and the coupling 1/ρ to 1/ϵ0 , giving
                                                           1 q2ω2
                                                    P ∼           .
                                                          8π ϵ0 c
However, this is incorrect, because monopole radiation does not exist in electromagnetism, because
of charge conservation. Instead, we need to use the static dipole field, which is smaller by a factor
of ℓ/r where ℓ is the separation between the charges. This gives
                                                           1 q 2 ℓ2 ω 4
                                                    P ∼
                                                          8π ϵ0 c3


which is the Larmor formula up to an O(1) factor. (We can recast this in a more familiar form
using a ∼ ℓω 2 .) A similar argument can be used to estimate (electric) quadrupole radiation power,

                                                   1 q 2 ℓ4 ω 6
                                           P ∼                  .
                                                  8π ϵ0 c5
This is especially relevant for gravitational waves, where the quadrupole is the leading contribution,
due to energy and momentum conservation. The charge is M and the coupling is 4πG, giving
                                                  G M 2 ℓ4 ω 6
                                          P ∼                  .
                                                  2    c5
For a binary system of separation ℓ and masses M , we have
                                                      GM
                                              ω2 =
                                                       ℓ3
which gives
                                               1 G4 M 5
                                            P ∼         .
                                               2 ℓ5 c5
Up to a numeric factor, this is the quadrupole formula, derived in the notes on General Relativity.
Note. Two slowly moving charges can be approximately described by the Lagrangian
                                       X1            q1 q2
                                  L0 =      mi vi2 −       .
                                          2            r
                                              i

It is difficult to account for radiation effects without having to think about the dynamics of the
entire electromagnetic field, drastically increasing the number of degrees of freedom. A typical
procedure is to compute the power radiated using the formulas above, then introduce it here as an
ad hoc energy loss. Radiation can also be accounted for more directly through a “self-force” on
each charge, but this is infamously tricky.
    However, it is more straightforward to account for relativistic effects at lowest order. At order
(v/c)2 , the two effects are the retardation of propagation of the Coulomb field, and the magnetic
forces between the charges. We set c = 1 and work in Coulomb gauge. In this gauge, the scalar
potential has no retardation at all, instead propagating instantaneously, so the desired effect is
absorbed entirely into the vector potential. The new terms we want are

                                L1 = q1 v1 · A2 (r1 ) + q2 v2 · A1 (r2 ).

Since there is already a prefactor linear in v, the vector potential can be taken to first order in v.
This is the lowest order, so it can be found from the magnetostatic expression,
                                                         Jt (r′ )
                                                  Z
                                              µ0
                                      A(r) =        dr′           .
                                              4π        |r − r′ |
The transverse part of the current can be calculated by starting from the current of a point charge
and taking the transverse part as described above. This leads to the Darwin Lagrangian,

                                    q1 q2            (v1 · r)(v2 · r)
                              L1 =         v1 · v2 +                    .
                                     2r                     r2

This is as far as we can go. At order (v/c)3 , radiation reaction forces appear, so the Lagrangian
has to contain the field degrees of freedom.


2.6     Electromagnetism in Matter
In this section, we review basic, classical results involving electromagnetic fields in matter. We
begin by considering insulators, which in this context are called dielectrics, in electric fields.
 • For small, static electric fields, each atom of the material gains an average electric dipole moment
   p = αE. The field may induce dipole moments, or simply align existing ones.
 • To see where linearity breaks down, note that the only other electric fields in the problem are
   the fields in the atoms and molecules themselves. On dimensional grounds, we expect a linear
   result as long as the external field is much weaker than the internal fields, i.e. as long as the
   external field is far from being able to rip electrons off.
 • As a result, the material gains a dipole moment density P = np where n is the atomic number
   density. Note that we are implicitly coarse-graining so that n(x) is well-defined and p is averaged
   over atomic scales. This avoids rapid microscopic variations in P.
 • Though polarized materials are electrically neutral, there can still be accumulations of bound
   charge since P need not be uniform. To see this, note that
                                                  P(r′ ) · (r − r′ )
                                          Z
                                   ϕ(r) =     dr′
                                            V        |r − r′ |3
      where we set 4πϵ0 = 1 and used the dipole potential. Then
                                                                 P(r′ )              ′       ′
                                                       Z
                                                                                 ′ ∇ · P(r )
                       Z                                                    Z
                            ′    ′     ′      1
                ϕ(r) =    dr P(r ) · ∇                =    dS ·           −    dr
                        V                  |r − r′ |    ∂V      |r − r′ |    V      |r − r′ |
      where we integrated by parts, which implies
                                     σbound = P · n̂,     ρbound = −∇ · P
      at surfaces and in the bulk respectively. This latter result shows that polarization P creates an
      electric field −P/ϵ0 .
 • In a linear isotropic dielectric, we have
                                                  P = ϵ0 χe E
      where χe is the electric susceptibility. Generally, χe is positive. Materials with P ̸= 0 even
      in zero external electric field are called ferroelectric. For strong fields we must account for
      higher-order terms, and if the dielectric is a crystalline solid we must account for the anisotropy,
      promoting χe to a tensor.
 • In the previous equation, E is the total average field in the dielectric, counting both external
   fields and the fields sourced by the dielectric itself. For example, consider a parallel plate
   capacitor, whose plates alone produce field Eext . Then
                                       P = ϵ0 χe E,     E = Eext − P/ϵ0 .
      Solving for P and eliminating it, we find
                                                         Eext
                                                  E=
                                                        1 + χe
      so we may identify the dielectric constant as κ = 1 + χe . Since generally χe > 0, the field is
      shielded by charge screening.


 • To generalize this analysis, define free charge to be all charge besides bound charge, so that

                                            ρ = ρbound + ρfree .

    The electric field in Gauss’s law is sourced by all charge,
                                                          ρ
                                               ∇·E=          .
                                                          ϵ0
    We define the electric displacement so that it is sourced only by free charge,

                                     D = ϵ0 E + P,       ∇ · D = ρfree .

    This implies that at boundaries, D⊥ is continuous. The name “electric displacement” is due to
    Maxwell, who thought of it as a literal displacement of the ether.

 • For linear dielectrics, we then have

                                        D = ϵE,       ϵ = ϵ0 (1 + χe )

    where ϵ is called the permittivity of the material. For example, a point charge in a dielectric
    medium would result in the electric field
                                                    q
                                              E=        r̂.
                                                  4πϵr2
    The dielectric constant κ = ϵ/ϵ0 is also called the relative permittivity ϵr .

 • We may heuristically think of D as the “external field” ϵ0 Eext alone. However, this analogy isn’t
   perfect, because the above equation does not determine ∇ × D. We know that in electrostatics
   ∇ × E = 0, but the relation D = ϵE means that at boundaries ∇ × D is generically nonzero.

 • Moreover, at a boundary we have
                                               σ
                         ∆E∥ = 0,     ∆E⊥ =       ,   ∆D∥ = ∆P∥ ,          ∆D⊥ = σf .
                                               ϵ0

Now we consider the confusing subject of dielectric energy.

 • In situations with free and bound charge, the total energy has four terms,

                               Utot = Ufree + Ufree/bound + Ubound + Uspring

    where the first three terms count electrostatic interactions, and Uspring is the non-electrostatic
    energy stored in the “springs” that hold each atom or molecule together.

 • The standard energy density ϵ0 E 2 /2 counts only the electrostatic energy, so it is missing Uspring .
   However, if we want to compute the work needed to bring free charges to a fixed dielectric, then
   we need the total energy Utot . If we consider doing this gradually, we have
                               Z               Z                   Z
                       dUtot = dr V dρf = dr V ∇ · (dD) = dr E · dD

    where we integrated by parts and threw away a boundary term. This implies that
                                                Z
                                      dUspring = dr E · dP.


 • For a linear dielectric, integrating gives
                                       Z                           Z
                                     1                         1
                              Utot =     dr E · D,   Uspring =         dr E · P.
                                     2                         2
    This implies that free charge is attracted to regions where ϵ is large.

 • In the thermodynamics of dielectrics, it is ambiguous what to count as the “internal” energy
   of the material. A standard choice is to exclude all of the field energy, because it extends well
   outside of the atoms and molecules, so that only Uspring is counted. For a point dipole,

                                            dUspring = E · dp.

 • On the other hand, when thinking about mechanics, we might want a completely different
   quantity. Suppose that a fixed background field E0 is created, by charges artificially held in
   place, so that Ufree is fixed. Then we might want to know the energy associated with bringing
   a dielectric into this field.

 • To understand this, it’s easier to start by thinking about bringing in a single point dipole.
   Assuming linear polarization for simplicity, the spring energy is quadratic,

                                                          p2
                                              Uspring =      .
                                                          2α
    Let’s suppose that the dipole moment p is artificially fixed, and then this fixed dipole is brought
    into the field. The resulting change in energy is

                                     Ufree/bound + Ubound = −p · E0 .

    This expression implies, for example, that a dipole with fixed dipole moment experiences a
    torque to align it with the external field. We could thus regard it as the “mechanical” energy.

 • If we no longer fix the dipole moment, then minimizing the total energy of the dipole gives
                                                                       1
                         p = αE0 ,   Ufree/bound + Ubound + Uspring = − E0 · p.
                                                                       2
    The analogous expression for a linear dielectric turns out to be
                                                                Z
                                                              1
                          Ufree/bound + Ubound + Uspring = −       dr E0 · P.
                                                              2
    This implies that dielectrics are attracted to regions with higher external field.

Note. In solids, there is no definite distinction between bound charge and free charge. For example,
consider the ionic lattice of NaCl. We might divide the crystal into unit cells and treat each one as
a molecule. Then the dipole moment of each unit cell due to “bound charge” depends on how the
cell is chosen. Similarly, the “free” charge due to atoms on the boundary not in full unit cells also
depends on the cell. Of course, the sum of these contributions must be independent of the cell.


