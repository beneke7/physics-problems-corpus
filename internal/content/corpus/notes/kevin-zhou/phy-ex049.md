---
id: kevin-zhou-notes-phy-ex049
source: kevin-zhou-notes
native_id: "phy Example 049"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex049
topic: [continuum-mechanics]
subtopic: [fluid-statics, buoyancy]
math_tools: [hydrostatics, stability-analysis]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "5178-5711"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Buoyant stability. Consider an object with density ρb in a uniform gravitational field g
and fluid of density ρf . The moments of gravity and buoyancy are
                                Z                       I
                           MG =    x × ρb g dV, MB =      x × (−p dS).
                                   V                           S
97 4. Continuum Mechanics


If the body were replaced by fluid, the fluid would be in equilibrium. This implies that MB is the
opposite of what MG would be if there were fluid,
                                               Z
                                      MB = −      x × ρf g dV.
                                                  V

We will assume that the body is always in buoyant equilibrium, meaning that the body displaces
its own weight in fluid, and thus the buoyant and gravitational forces cancel. Now, for the purposes
of torque balance, the gravitational and buoyant forces can be taken as acting at the center of mass
(CM) and center of buoyancy (CB) respectively,
                                       Z                     Z
                                    1                     1
                              xG =        xρb dV, xB =          xρf dV.
                                    M V                   M V

The torques can only balance if the CM and CB lie on a vertical line. For a fully submerged object,
the stable equilibrium is when the CM is below the CB. For objects partially submerged in water,
such as sailboats or ducks, it is clear that the CM is usually above the CB, which is the centroid of
the part of the object below the waterline. Despite this, the equilibrium remains stable.
    To understand why, we consider a longitudinally symmetric ship for simplicity, and consider an
infinitesimal rotation dθ about the x-axis. Let A be the waterline area, i.e. the intersection of the
ship with the waterline, at z = 0. In order to maintain buoyant equilibrium, the rotation axis must
pass through the centroid of A, as this keeps the submerged volume of the ship the same to first
order in dθ. This point is called the center of roll, and we take it as the origin. Upon this rotation,
the center of gravity shifts horizontally by

                                            dyG = −zG dθ.

However, the horizontal motion of the center of buoyancy has two components,
                                                        Z
                                              I
                            dyB = − zB +          dθ, I =     y 2 dA
                                             V             A

The first term results from directly rotating the initially submerged part of the ship; the second
arises because the shape of the submerged part of the ship changes upon rotation. Therefore,
the horizontal motion of the center of buoyancy is the same as if it were actually situated at an
imaginary, higher point called the metacenter, with
                                                         I
                                            zM = zB +      .
                                                         V
In order for buoyancy to give a restoring torque, we need |dyB | > |dyG |, which means the ship if
stable if the CM is below the metacenter. (The metacenter’s height depends on the axis of rotation.
Since we want stability against rotations about any axis, the metacenter is defined using the axis
for which I is the smallest. Since ships are long and narrow, this is typically the longitudinal axis.)

Note. For general angles, stability is quantified by the “righting arm”, which is simply |yG (θ)−yB (θ)|.
The above analysis applies only to small angles, where the righting arm is linear in θ. When the
righting arm goes to zero, the ship becomes unstable, and flips over.

For smaller pieces of fluid, surface tension is important.
98 4. Continuum Mechanics


 • Surface tension arises from the energy cost of having an interface between two materials,

                                                dU = α dA.

   If one divides a surface by a curve, then the differential force between the two parts of the
   surface is
                                          dF = α ds × n̂
   where n̂ is the normal vector to the surface.

 • The quantity α depends on the energy of interaction between neighboring particles in both
   materials with themselves, and with each other. Since the interface has microscopic thickness,
   its macroscopic curvature does not affect α. For simple materials, it does not depend on how
   much the surface has already been stretched, though soap films are a notable exception.

 • In general, for liquid-gas interfaces we have α > 0, because particles in the liquid attract
   each other (otherwise it would not remain a liquid), but the gas is too sparse to cause much
   interaction. For liquid-liquid interfaces α can be positive or negative; if it is negative, the liquids
   rapidly mix. For liquid-solid interfaces α can again be positive or negative, and this determines
   the propensity of the liquid to wet the surface.

 • Above, we stated the force acts “between the two parts of the surface”, but this is vague. For
   liquid-gas and liquid-solid interfaces, the force acts between the two parts of the liquid at the
   surface, since the gases are sparse and the solids are not free to move. (improve)

 • For a liquid in a gravitational field g with density ρ, surface tension dominates below the
   capillary length                              r
                                                    α
                                             L=
                                                    ρg
   by dimensional analysis. For room temperature water, this is a few millimeters. More generally,
   for an interface between two fluids, the density in the denominator should be the difference of
   the two densities, since that determines the changes in gravitational potential energy.

 • Near the origin, a general surface with n̂ = ẑ can be parametrized as
                                            1     1
                                         z = ax2 + by 2 + cxy.
                                            2     2

   In polar coordinates, the radius of curvature in the ϕ̂ direction is

         1    ∂2z                                             a+b a−b
             = 2     = a cos2 ϕ + b sin2 ϕ + 2c sin ϕ cos ϕ =    +    cos 2ϕ + c sin 2ϕ.
        R(ϕ)  ∂r r=0                                           2   2

   The minimum and maximum values of R(ϕ) are attained for two orthogonal ϕ̂, and are called
   the principal radii of curvature R1 and R2 . For example, for c = 0 they are simply a and b.

 • By considering force balance on a small rectangle, one can show that the pressure discontinuity
   across a surface is                                    
                                                  1     1
                                       ∆p = α        +       .
                                                  R1 R2
   The quantity in parentheses is also called twice the mean curvature.
99 4. Continuum Mechanics


Note. The case of a liquid in air (pure cohesion) is relatively straightforward, but things become
more subtle when one has interfaces of air, liquid, and solid. Many introductory textbooks give
incorrect derivations of basic results such as Jurin’s law and Young’s law. For an example of the
subtleties swept under the rug, see the paper Derivation of Jurin’s law revisited .

4.2     Solid Statics
Next, we consider solid statics, which is slightly more mathematically involved.

 • In response to shear stresses, liquids flow and solids deform, so solids can support them in static
   equilibrium. A familiar example of a shear stress at the boundary between two solids is static
   friction, though shear stresses also exist in the interiors of solids.

 • As a result, we have a general stress tensor, which acts on an infinitesimal surface element as

                                                   dF = σ · dS.

      By considering the forces acting on a small closed volume, we find the total force is
                              Z          I           Z
                          F=      f dV +    σ · dS =    f ∗ dV, f ∗ = f + ∇ · σT
                                  V            S          V

      where f is the external force density, f ∗ is the total force density, and the final term is ∇j σij .

 • The diagonal elements of σ are the negatives of the pressures in each direction, while the
   off-diagonal elements represent shear stresses. Therefore, in general there is no unique way to
   define “the” pressure, though a decent option is to use the “mechanical pressure”,
                                                         1
                                                    p = − σii
                                                         3
      which is a scalar that reduces to the pressure for an isotropic stress tensor. It can be interpreted as
      the negative of the normal component of the stress averaged over all possible surface orientations,
      which follows since ⟨ni nj ⟩ = δij /3 for normal vectors n̂.

 • A solid under tension will begin to plastically deform above the yield stress, and fail entirely
   when the stress equals the tensile strength. For typical metals, the tensile strength is several
   hundred MPa, modern composite carbon fibers have tensile strengths of a few GPa, and carbon
   nanotubes have tensile strengths of about 50 GPa.

 • In mechanical equilibrium, f ∗ = 0, which is known as Cauchy’s equilibrium equation. They are
   a set of coupled PDEs, which must be supplemented with constitutive relations which give the
   stress in terms of the other properties of the material.

 • The total moment acting on a body is
                   Z              I                Z            Z
                                                          ∗
               M=     x × f dV +    x × (σ · dS) =   x × f dV −   ϵijk êi σjk dV
                           V               S                  V                V

      as is most conveniently shown in index notation. Since f ∗ vanishes in equilibrium, this calculation
      is usually taken to show that the stress tensor is symmetric, σT = σ.
100 4. Continuum Mechanics


  • However, this is actually an oversimplification, because we have ignored the possibility of
    external moments. For example, consider an electrically polarized material. If the material is
    placed in a uniform electric field, there is no force density, but there is a moment density.

  • What happens next depends on whether the solid can support asymmetric stress. If it doesn’t,
    we concluded that it cannot be in equilibrium until the polarization aligns with the external
    field; if it does, then an internal asymmetric stress appears to cancel the torque. This happens
    in liquid crystals, as they have long-range orientational order. However, for simplicity we’ll take
    the stress tensor to be symmetric from this point on, as it holds for most materials.

  • Symmetric stress tensors can be diagonalized, i.e. for every point in a body there exists a
    principal basis in which the stress tensor is diagonal.

  • By balancing forces on a surface between two bodies, we have

                                    σ · n̂ is continuous across surfaces.

    For example, for a horizontal surface, σxz , σyz , and σzz must be continuous. Note that the
    mechanical pressure can change discontinuously; the continuity of the pressure in fluid statics
    (ignoring surface tension) only held because the pressure was isotropic.

Note. There’s a minor subtlety involving the definition of the stress tensor. The basic definition
relevant for fluid mechanics is the one above, in terms of forces acting on surface elements. However,
since force is the rate of change of momentum, you can also define σij as the rate of flow of
momentum Pi across a unit j-area. For typical fluids, these definitions coincide, but they differ in
general, and the latter is more fundamental.
    For example, consider a gas of photons in a reflective box. Here the first definition of stress tensor
becomes ambiguous: photons don’t interact with each other classically, so they don’t experience any
force at all. We can still define a stress tensor by talking about the force that a physical small, flat
object would experience if it were placed inside the photon gas, but that requires changing the setup.
The definition is no longer intrinsic to the fluid itself, and worse, it depends on the kind of object
placed inside, e.g. the result for a reflective element is twice that for an absorbing element. On the
other hand, the second definition still works perfectly well, which is why it is almost universally
used in relativistic contexts.
    The choice of definition makes a difference in how one develops the theory. For example, consider
the statement that the stress tensor is symmetric, for a fluid experiencing no external forces or
moments. We proved this above in the case of statics, but for ordinary fluids where the stress tensor
is defined the first way, there’s a simple proof that holds for fluid dynamics too. The antisymmetric
part of the stress tensor contributes a torque to an infinitesimal fluid element of size ∆L scaling as
(∆L)3 . The moment of inertia of the element scales as (∆L)5 , which implies an unphysical infinite
angular acceleration as ∆L → 0, implying that the stress tensor must be symmetric.
    In the relativistic context, where we use the second definition, we can define the stress(-energy)
tensor using Noether’s theorem, as discussed in the notes on Quantum Field Theory. It turns
out that even for an isolated system, the stress tensor can come out antisymmetric! The physical
interpretation of the antisymmetric part is that it transfers orbital angular momentum to spin,
which evades the above argument because the amount of spin a volume element can suppose scales
as (∆L)3 . (This subtlety doesn’t occur for ordinary fluids, which aren’t spin polarized.) However,
it’s possible to redefine the stress-energy tensor to include the bound momentum carried by the
spin, in which case it is symmetric again.
101 4. Continuum Mechanics


Next, we describe the deformations within solids in terms of strain.

 • The tricky thing about deformations is that they can’t be inferred from the current state of
   the solid alone; we also need to know how it relates to the original state. We suppose a solid is
   deformed so that the material particle at X moves to x. The displacement field is

                                                 u = x − X.

    In the Euler representation, we think of everything as a function of x, while in the Lagrange
    representation we think of everything as a function of X. We will use the Euler representation,
    so all derivatives will be with respect to x.

 • Note that there is no analogue of the active/passive transformation distinction here, because
   there is no natural way to view a general deformation passively.

 • When the displacements are large, we need the general machinery of differential geometry, so
   we will mostly restrict to the case of small displacements, in which case there is no fundamental
   difference between the Euler and Lagrange representations.

 • Displacements can also include rigid transformations of the solid, such as translations and
   rotations, which do not count as deformations. Thus, we are motivated to extract the part of
   u that refers to deformations only.

 • Consider an infinitesimal “needle” that originally pointed from X to X + a0 , but now points
   from x to x + a. To compute a, note that

                            a0 = X(x + a) − X(x) = a − u(x + a) − u(x).

    Therefore, expanding to first order in a,

                                 δa = a − a0 = (a · ∇)u(x) = a · (∇u).

    The tensor (∇u)ij = ∇i uj contains the so-called displacement gradients.

 • A displacement field is slowly varying when the displacement gradients are small, which means
   the fractional changes in lengths are small. We will work almost exclusively in this limit.

 • Similarly, scalar products between two needles based at the same point change,
                                                       X
                          δ(a · b) = a · b − a0 · b0 =   (∇i uj + ∇j ui )ai bj .
                                                         ij

    We can write this in terms of Cauchy’s (infinitesimal) strain tensor,
                                                      1
                        δ(a · b) = 2a · u · b,   uij = (∇i uj + ∇j ui ) = ∇(i uj) .
                                                      2
    This can also be written in index-free notation as
                                             1
                                          u = (∇u + (∇u)T )
                                             2
    where the bar is used to avoid notational confusion.
102 4. Continuum Mechanics


 • The antisymmetric part of ∇u contains infinitesimal rotations, which don’t contribute to u.
   Since u is symmetric, it can be diagonalized at each point; the eigenvectors are the principal
   strain axes.

 • This result coincides with a more general result from differential geometry. We can think of u
   as quantifying the difference of the metrics in the x and X coordinates, as we flow from X to x
   under the vector field u. Therefore, u should be the Lie derivative of the metric with respect
   to u, which it indeed is.

 • The diagonal elements of uij reflect the fractional change in length along the corresponding axis,
   while the off-diagonal elements reflect the change in angle between the corresponding initially
   orthogonal coordinate axes. Specifically, if a and b are initially orthogonal, then

                                                                        δ|a|
                                  δϕ = −2uab ≡ −2â · u · b̂,                = uaa .
                                                                        |a|

   In addition, note that
                                             1
                                       δa = (∇ × u) × a + u · a
                                             2
   which separates the effects of infinitesimal rotations and deformations.

 • By straightforwardly applying derivatives, Cauchy’s strain tensor satisfies

                                ∇i ∇j ukl + ∇k ∇l uij = ∇i ∇l ukj + ∇k ∇j uil .

   Conversely, it can be shown that any symmetric tensor satisfying this is the strain tensor
   corresponding to some displacement field. This is a symmetric version of the Poincare lemma.

 • In order to do vector calculus, we need to compute the variations of infinitesimal line elements,
   surface elements, and volume elements. We have already treated line elements as our first
   example; note that in the line integral of a vector field F · ds, the vector field, the line element,
   and the endpoints all need to be transformed.

 • To handle volume elements, note that we can build them out of three infinitesimal vectors,

                                                 dV = ϵijk ai bj ck .

   Expanding the infinitesimal changes out in index notation gives

                    δ(dV ) = ϵijk ((∇l ui )(al bj ck ) + (∇l uj )(ai bl ck ) + (∇l uk )(ai bj cl )).

   On the other hand, we also have
                                               (∇l u[l )(ai bj ck] ) = 0
   since antisymmetrizing over four spatial indices gives zero. Since the ϵijk already antisymmetrizes
   over i, j, and k, this identity relates the three terms above to a fourth, giving the result

                                  δ(dV ) = ϵijk (∇l ul )(ai bj ck ) = (∇ · u) dV

   which makes intuitive sense. As an application, volumes transform like

                                                  δρ = −ρ ∇ · u.
103 4. Continuum Mechanics


  • For a surface element, we note that we can write dS = a × b and dV = c · dS. Then using the
    previous result gives

                       c · δ(dS) = δ(dV ) − δc · dS = (∇ · u)(c · dS) − c · ∇u · dS.

    Since c is arbitrary, we can conclude that

                                    δ(dS) = (∇ · u) dS − (∇u) · dS.

  • As an example, suppose that an external force does work on the body, causing it to slowly
    deform. The work done against the internal forces in the body is
                                               Z
                                      δW = −       f ∗ · δu dV.
                                                     V

    For simplicity, we suppose the surface of the body does not move. Then
                                        Z               Z
                               δW = −       f · δu dV +   σ : (∇δu) dV
                                           V                 V

    where we integrated by parts, and A : B = Aij Bji .

  • The first term represents the work done against long-range forces, e.g. it contains the change
    in gravitational potential energy. The second term represents the work done against internal
    forces by deforming the body. For a symmetric stress tensor, it can be written as
                                                  Z
                                       δWdeform =    σ : δu dV.
                                                         V

    As a simple check on this result, note that for an isotropic stress tensor σij = −pδij ,
                                           Z                     Z
                           δWdeform = −       p ∇ · (δu) dV = −      p δ(dV )
                                               V                   V

    as expected.

Note. When the deformations are large, it’s better to use ideas from differential geometry rather
than vector calculus. The positions of the material particles define a coordinate system, whose
metric is δij when the material is not deformed. By viewing the map x → X as a diffeomorphism,
this metric is pushed forward to
                                                  ∂Xk ∂Xk
                                        gij (x) =         .
                                                  ∂xi ∂xj
The general definition of the strain tensor is in terms of the change in the metric,

                                           gij = δij − 2uij .

Finally, by substituting X = x − u, we arrive at the so-called Euler–Almansi stress tensor,
                                                                 
                                        1 ∂uj      ∂ui    ∂uk ∂uk
                              uij (x) =         +      −
                                        2 ∂xi      ∂xj    ∂xi ∂xj
which differs from our infinitesimal expression by a quadratic term. For example, for a uniform
scaling x = κX, we have
                                              1
                                       uij = (1 − κ−1/2 )δij
                                              2
which makes sense for all κ, while our infinitesimal expression only made sense for κ ≈ 1.
104 4. Continuum Mechanics


Note. The Lagrange representation. In this case, we work in terms of the variable X. We define
the Lagrangian displacement field to satisfy

                                         U(X) = u(x(X)).

In other words, while u(x) represents how much the material particle now at x was displaced, U(X)
represents how much the material particle that was originally at X was displaced. Starting with
the ambient Euclidean metric, we can pull it back from x to X to define the metric
                                                     ∂xk ∂xk
                                         Gij (X) =
                                                     ∂Xi ∂Xj
where Gij is the Lagrangian deformation tensor. We define the Lagrange–Green stress tensor by

                                             Gij = δij + 2Uij

which implies that                                                
                                     1       ∂Uj   ∂Ui   ∂Uk ∂Uk
                               Uij =             +     +               .
                                     2       ∂Xi ∂Xj     ∂Xi ∂Xj
For infinitesimal deformations, this coincides with our other stress tensors.
Note. Numeric computations can be done by discretizing either the Euler or Lagrange representation.
As mentioned above, for small displacements the two are essentially equivalent. More generally, the
Lagrange representation tends to be a bit easier to think about, so traditional 1D hydrodynamic
codes are almost all Lagrangian. For more than one dimension, turbulence tends to “tangle up” the
Lagrange representation’s computation grid, making the Euler representation a better choice, as
the Eulerian grid is fixed in space. On the other hand, that also means that matter can leave the
computational domain.
Finally, we relate stress and strain with Hooke’s law.

 • For sufficiently small deformations, many materials have a linear relationship between stress
   and strain. For an isotropic material, we define the Young’s modulus by
                                                       σxx
                                                  E=       .
                                                       uxx
    Thus, a rod of length L and cross-sectional area A has a spring constant of
                                               F    σxx A   EA
                                         k=       =       =    .
                                               ∆x   uxx L    L
    Young’s modulus has dimensions of pressure, and typical values for metals are about 100 GPa.
    Since the strain must be small, Hooke’s law applies only for stresses much less than E. For
    instance, the yield stress is roughly a thousand times smaller. Hooke’s law breaks down at the
    proportionality limit, which is usually well below the yield stress. Corrections to linearity are
    accounted for in “hyperelasticity”, which is useful for describing rubber.

 • Normal materials will also contract in the transverse direction when they are stretched. If a
   force is applied along the x direction, then both uxx and uyy will be proportional to it, so their
   ratio is independent of it. We hence define Poisson’s ratio as
                                                        uyy
                                                 ν=−        .
                                                        uxx
105 4. Continuum Mechanics


 • The most general linear relation between stress and strain is
                                              σij = Eijkl ukl
   where Eijkl is the elasticity tensor. For an isotropic material the most general option is
                                  Eijkl = λδij δkl + µ(δik δjl + δjk δil )
   where λ and µ are called the elastic moduli or Lame coefficients, and µ is called the shear
   modulus or modulus of rigidity. Explicitly, we have
                                         σij = 2µuij + λδij ukk
   so only µ contributes to shear stresses.

 • These two parameters are determined by E and ν, and vice versa. Specifically, for stretching
   along the x direction, the only nonzero components of stress and strain are
                                                  P                          νP
                              σxx = P,    uxx =     ,       uyy = uzz = −       .
                                                  E                          E
   Comparing this to the definition of the elastic moduli gives the relations
                                         3λ + 2µ                    λ
                                   E=            µ,         ν=
                                          λ+µ                    2(λ + µ)
   or conversely,
                                       Eν                   E
                                λ=                , µ=            .
                                 (1 − 2ν)(1 + ν)         2(1 + ν)
   The Young’s modulus and Poisson’s ratio are directly measurable, so they are found in tables.

 • Note that the mechanical pressure is
                                                      
                                         1           2
                                   ∆p = − σii = − λ + µ uii .
                                         3           3
   On the other hand, uii = −∆ρ/ρ, so the bulk modulus is
                                           2       E
                                      K =λ+ µ=           .
                                           3   3(1 − 2ν)
   Generically, K, E, λ, and µ are all of the same order of magnitude.

 • We can also solve for the strain in terms of the stress,
                                              1+ν      ν
                                      uij =       σij − δij σkk .
                                               E       E
 • In general, the work needed to deform a body is
                                                Z
                                     δWdeform =    σij δuij dV.
                                                        V

   However, since σ depends on u, this integral can be path-dependent. It is path-independent if
   the cross derivatives are equal,
                                           ∂σij    ∂σkl
                                                 =
                                           ∂ukl    ∂uij
   which is the tensorial analogue of the condition that the curl of a vector field vanish.
106 4. Continuum Mechanics


  • Assuming the stress is linear in the strain, this implies that

                                               Eijkl = Eklij .

    Furthermore, the elasticity tensor is symmetric in its first two and second two indices, since the
    stress and strain tensors are symmetric. Thus, each of these pairs of indices has 6 degrees of
    freedom, and symmetry under exchanging the two pairs gives a total of 21 degrees of freedom.
    Of these, 3 are redundant because they just describe the orientation of the material.

  • The number of degrees of freedom needed to describe a material depends on its degree of
    symmetry, with cubic crystals requiring 3, and triclinic crystals requiring all 18.

  • Assuming this symmetry condition is satisfied, we can imagine building up u linearly, giving
                                         1         1
                                      ε = σij uij = Eijkl uij ukl .
                                         2         2
    This must be positive definite for the solid to be stable, which leads to positivity conditions on
    the elasticity tensor. This can also be used to show that solutions to the equilibrium equation
    f ∗ = 0 are unique.

  • For the special case of isotropic materials, we have
                                                       1
                                        ε = µ uij uij + λ(uii )2 .
                                                       2
    It can be shown that for this to be positive definite, we require

                                           µ > 0,   3λ + 2µ > 0.

    These impose stability against shearing and compression, respectively. Equivalently,

                                   K > 0,     E > 0,     −1 < ν < 1/2.

    Most materials have ν > 0, but exotic “auxetic” materials can have negative ν.

