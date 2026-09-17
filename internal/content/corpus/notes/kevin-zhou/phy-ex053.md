---
id: kevin-zhou-notes-phy-ex053
source: kevin-zhou-notes
native_id: "phy Example 053"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex053
topic: [mechanics]
subtopic: [fluids, viscosity]
math_tools: [calculus, differential-equations, conservation-shortcuts, scaling-arguments]
format: explanation
kind: reference_example
has_solution: false
has_figure: true
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "6224-6474"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. A blunt object moving at supersonic speeds produces a “bow shock” in front of it, as
shown. (For an object with a sharp tip, we would instead get a conical shock wave attached to the
object, called a Mach cone.)
117 4. Continuum Mechanics


Across this shock, the properties of the fluid change discontinuously. For simplicity, we focus on
a “normal” shock, where the shock wave is perpendicular to the fluid velocity; this applies at the
forward tip of the bow shock shown. In the steady state and in the frame of the object, we can
apply conservation of mass, momentum, and energy across the shock, to give
                                                                    1 2           1
                    ρ1 v1 = ρ2 v2 ,   ρ1 v12 + p1 = ρ2 v22 + p2 ,     v1 + cp T1 = v22 + cp T2 .
                                                                    2             2
Using the ideal gas law, the energy conservation condition can be rewritten as
                                       1 2      γ p1    1        γ p2
                                         v1 +          = v22 +          .
                                       2      γ − 1 ρ1  2      γ − 1 ρ2
These equations are called the Rankine–Hugoniot conditions. It is convenient
                                                                        p to write their solutions
in terms of the Mach number before the shock, M = v1 /c1 where c1 = γp1 /ρ1 . Then

                            p2   2γM 2 − (γ − 1)          ρ2   v1     (γ + 1)M 2
                               =                 ,           =    =                .
                            p1       γ+1                  ρ1   v2   2 + (γ − 1)M 2

The ratio of temperatures is given by the ideal gas law,
                                                    T2   p2 ρ 1
                                                       =        .
                                                    T1   p1 ρ 2
In the limit M → ∞, these results simplify to

                           p2    2γ              ρ2   γ+1           T2   2γ(γ − 1) 2
                              =     M 2,            =     ,            =           M .
                           p1   γ+1              ρ1   γ−1           T1    (γ + 1)2

These results can also be applied to shock waves in a Laval nozzle. For an oblique shock, as occur
elsewhere on the bow shock shown, the results are identical except that the vi should be interpreted
as the component of the velocity normal to the shock; the tangential velocity is unchanged.

Note. The Rankine–Hugoniot conditions treat both sides of the shock symmetrically, but in reality
we must have T2 > T1 by the second law of thermodynamics, as kinetic energy is converted to
thermal energy. Note that our previous result for the stagnation point temperature is perfectly
correct whether or not a shock wave exists, since it just used Bernoulli’s theorem, which is one of
the Rankine–Hugoniot conditions. It’s only the isentropic assumption p ∝ ργ that breaks down.

4.5     Viscosity
Finally, we arrive at the full Navier–Stokes equations by including viscosity. We begin with some
examples for intuition, always assuming incompressible flow.

  • Viscosity is a shear stress opposing a velocity gradient. In a Newtonian fluid we assume the
    two are proportional, so that for a flow vx (y),

                                                                dvx
                                                      σxy = η
                                                                dy

      where η is called the (dynamic) viscosity. The units of viscosity have various names, 1 Pa s =
      1 Poiseuille = 0.1 poise.
118 4. Continuum Mechanics


 • For example, for an ideal gas we can show by kinetic theory that
                                            √
                                              kB T m
                                        η∼           ∼ ρλv
                                               σ
   where σ is the collision cross section, m is the√mass per molecule, and λ is the mean free path.
   Possibly surprisingly, the viscosity scales as T , and at constant temperature is independent
   of the density. In liquids, the viscosity usually falls with temperature.

 • Often, it is useful to work in terms of the kinematic viscosity
                                                            η
                                                       ν=
                                                            ρ

   since this directly determines the acceleration of the fluid. In an ideal gas, ν ∝ T 3/2 /p.

 • As a first example, consider a planar incompressible flow, where the velocity is vx (y, t). In this
   case there is no advective acceleration, so in the absence of body forces,
                                                  ∂vx    ∂ 2 vx
                                                      =ν
                                                   ∂t    ∂y 2
   which has the form of a diffusion equation with diffusion constant ν.

 • As an example, suppose we drive a plate transversely, imposing the boundary condition

                                           vx (0, t) = u0 cos(ωt).

   Then the steady state solution is
                                                                             r
                                                 −ky                             ω
                              vx (y, t) = u0 e         cos(ky − ωt),    k=
                                                                                 2ν
   so a shear wave propagates a distance 1/k into the fluid.

 • As another example, suppose we start with a “Gaussian river” of
                                                                2   2
                                           vx (y, 0) = u0 e−y /a .

   Then the solution at later times is
                                                              y2
                                                                  
                                              u0 a
                                vx (y, t) = √         exp − 2
                                             a2 + 4νt      a + 4νt
   causing the river to spread out over time.
                                           √ Assuming the initial width is small, the momentum
   diffuses over time over the width δ ∼ 2 νt. When viscosity is weak, this is the typical width
   of the boundary layers that form.

 • As a final example, suppose a plate is instantaneously kicked,

                                             vx (0, t) = u0 θ(t).

   This is known as Stokes’ first problem. Since there are no length scales in the problem besides
   δ, the solution must depend on it alone,
                                                            √
                                        vx (y, t) = u0 f (y/ νt).
119 4. Continuum Mechanics


    Plugging in this ansatz gives
                                                                 Z ∞
                                  1                         1             2
                           f (s) + sf ′ (s) = 0,
                            ′′
                                                   f (s) = √           e−u /4 du.
                                  2                          π   s

    Sometimes, one defines the boundary layer √ thickness to be the distance where the velocity drops
    to u0 /100, which in this case is δ99 = 3.64 νt.

 • Note that viscosity within the fluid merely transports vorticity through it, which is in accordance
   with the conservation of angular momentum. The vorticity in this example arises purely from
   the external torque applied from the plate when it is kicked. Also, in all examples, the changes in
   velocity propagate instantaneously, which is again a consequence of assuming incompressibility.

Next, we write down the Navier–Stokes equations for incompressible flow.

 • We assume the fluid is isotropic and incompressible and the stress tensor is symmetric. Then
   the most general possible stress tensor for a Newtonian fluid, where the shear stresses depend
   only on the gradient of velocity, is

                                    σij = −p δij + η(∇i vj + ∇j vi ).

   Assuming the fluid is homogeneous, so that η is uniform, the resulting force density is
                                  X
                                       ∇j σij = −∇i p + η∇2 vi .
                                       j

   The stress tensor can’t contain terms directly dependent on the velocity by Galilean invariance.

 • By comparison, for an elastic solid we assumed the shear stress was proportional to the strain;
   for a Newtonian fluid we instead assume it is proportional to the time derivative of strain, also
   called the strain rate. There are also fluids where the shear stress has a more complicated
   dependence on the velocity gradients, such as ketchup, jelly, and putty, and viscoelastic materials
   that are both elastic and viscous.

 • Inserting the above force density into Cauchy’s equation of motion gives
                            ∂v              f    ∇p
                               + (v · ∇)v =    −    + ν∇2 v,           ∇·v =0
                            ∂t              ρ0   ρ0
   which are the Navier–Stokes equations for incompressible isotropic homogeneous Newtonian
   fluids. The complex dynamics of such fluids result from the interplay of inertia, represented by
   the advective term (v · ∇)v, and viscosity, represented by ν∇2 v.

 • These equations must be supplemented with appropriate boundary conditions. At the interface
   between two fluids, or a fluid and a solid, the normal component of velocity must clearly be
   continuous. More subtly, the tangential component of velocity must be continuous; it is initially
   is not, a boundary layer quickly forms to make it so. As argued earlier, σ · n̂ is also continuous.

 • These facts can be combined to show that the pressure is continuous at a solid wall, which was
   not true for solids. Suppose this wall is at z = 0. At the origin, ∇x v = ∇y v = 0 since the
   velocity vanishes at the wall. By incompressibility, ∇z vz = 0 at the wall as well, so the shear
   stress vanishes at the wall, and thus σ · n̂ = −pn̂ is continuous, so p is.
120 4. Continuum Mechanics


 • Taking the curl of this equation gives
                                         ∂ω
                                            = ∇ × (v × ω) + ν∇2 ω
                                         ∂t
    which confirms that viscosity makes vorticity diffuse, as we saw in examples above.

 • Suppose the velocity has a typical value u over an object with typical size L. Then we can
   quantify the ratio of the advective and viscous terms by the Reynolds number,
                                           |(v · ∇)v|   u2 /L   uL
                                    Re ∼         2
                                                      ∼       ∼    .
                                             |ν∇ v|     νu/L2    ν
    There are several different qualitative regimes depending on the value of Re.

     – For Re ≪ 1, the flow is “creeping”, and dominated by viscosity. Microorganisms live in
       this world. For an interesting description of it, see Life at Low Reynolds Number .
     – For Re ∼ 1, viscosity is still highly important; flies live in this world. In this regime, the
       fluid flow is still orderly and layered, which we call laminar.
     – For Re ≫ 1, turbulence sets in, with its accompanying erratic behavior. This regime is
       relevant for vehicles and human-sized objects in everyday life.

 • Another way to highlight the importance of the Reynolds number is to nondimensionalize the
   Navier–Stokes equations. For steady flow with no external forces, it simplifies to

                                                    ˜ + 1 ∇
                                               ˜ = −∇p̃
                                         (ṽ · ∇)ṽ        ˜ 2 ṽ
                                                        Re
    where we used the scales ρ0 , u, and L to define the dimensionless variables by
                                                                           1˜
                             v = U ṽ,    x = Lx̃,   p = ρ0 U 2 p̃,   ∇=     ∇.
                                                                           L
    This means the aerodynamic properties of an aircraft can be simulated with a model in a wind
    tunnel if ρ0 and u are scaled to keep the Reynolds number the same. For supersonic aircraft,
    compressibility is important, and we would also have to keep the Mach number the same.

Finally, we consider some of the complications of compressible flow.

 • In this case, the stress can also depend on ∇ · v, and it is conventional to define
                                                                  
                                                        2
                        σij = −p δij + η ∇i vj + ∇j vi − δij ∇ · v + ζδij ∇ · v
                                                        3
    where ζ is called the bulk viscosity or expansion viscosity, in contrast to η which is called the
    shear viscosity. The point of this definition is that it makes the middle term traceless, so η does
    not affect the mechanical pressure.

 • The resulting equations of motion are
                           
             ∂v                                                                   ∂ρ
         ρ       + (v · ∇)v) = f − ∇p + η∇2 v + (ζ + η/3)∇(∇ · v),                   + ∇ · (ρv) = 0
              ∂t                                                                  ∂t
    where we again assumed a uniform η and ζ. These equations close for a barotropic fluid. In the
    case where p = p(ρ, T ), we would also need a differential heat equation to describe the evolution
    of T . The viscosities η and ζ could also depend on T .
121 4. Continuum Mechanics


  • In this compressible case, velocity and σ · n̂ remain continuous at interfaces, but the pressure
    is no longer necessarily continuous. In addition, shock fronts may form. While our inclusion
    of viscosity allows us to describe shock fronts as continuous in principle, in practice they are
    often so thin that the continuum approximation breaks down. Thus, we must treat them as
    true discontinuities, and apply conservation laws across them.

  • Borrowing from our earlier results for solids, the rate of work against internal stresses is
                                                                                  
                     Z X                   Z                    X
                                                                    2
                Ẇ =        σij ∇j vi dV =     −p∇ · v + 2η       vij + ζ(∇ · v)2  dV.
                         V   ij                  V                          ij

    As expected, the viscous terms are always positive, since they dissipate energy.

