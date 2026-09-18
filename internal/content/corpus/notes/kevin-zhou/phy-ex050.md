---
id: kevin-zhou-notes-phy-ex050
source: kevin-zhou-notes
native_id: "phy Example 050"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex050
topic: [continuum-mechanics]
subtopic: [elasticity, stress]
math_tools: [tensor-calculus, differential-equations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "5712-5961"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Consider a static homogeneous cube of isotropic material of side length L, subject to a
uniform shear stress P along the ŷ direction on the faces perpendicular to x̂. As a result of this
external stress, force balance ensures that a uniform shear stress σxy = P is set up throughout the
entire material. However, torque balance tells us that this situation is actually impossible: the
stress tensor is not symmetric, so torque balance can’t be satisfied; in reality the cube will begin
rotating about the ẑ axis.
   One way to prevent this is to put another external uniform shear stress P along the x̂ direction
on the faces perpendicular to ŷ, in which case σxy = σyx = P throughout the material, and

                                           P   1
                                   uxy =      = (∇x uy + ∇y ux ).
                                           2µ  2
There are multiple solutions for the displacement field u, which is generally not determined uniquely.
For example, the cube may shear along the x̂ direction, the ŷ direction, or some combination of
both. Which one occurs in practice depends on how the external forces are applied.


4.3     Ideal Fluid Flow
We begin with the mathematical description of fluid flow.

 • We describe the fluid’s motion with a velocity field v(x, t). As mentioned previously, this
   corresponds not to the motion of individual molecules, but to that of “material particles”, i.e. it
   is the center of mass velocity of a small packet of fluid. The momentum of such a packet is
                                                 dP = ρv dV.

 • The motion can be visualized using streamlines, which are the field lines of v(x, t) at a fixed
   time t. If the flow is not steady, this will differ from the trajectories of the material particles
   themselves. For example, the shape of the smoke that has come out of a chimney at time t is
   generally not a streamline, but rather is a “streakline”, meaning a set of trajectories evaluated
   at time t released from the chimney at different initial times t0 .
 • Conservation of mass implies the continuity equation
                                             ∂ρ
                                                + ∇ · (ρv) = 0.
                                             ∂t
      For incompressible flow, this reduces to ∇ · v = 0.
 • The rate of change of a property of the fluid experienced by a material particle is quantified by
   the material/comoving time derivative,
                                              D      ∂
                                                  =     + v · ∇.
                                              Dt     ∂t
      The first term accounts for the local rate of change, while the “advective” term corresponds to
      the effect of following the motion of the fluid. For example, for the time-independent vector
      field x, the rate of change of x for a material particle is just the velocity,
                                             Dx
                                                = (v · ∇)x = v.
                                             Dt
 • The continuity equation can be equivalently written as
                                               Dρ
                                                   = −ρ ∇ · v
                                               Dt
      which is intuitively clear. Also, note that in a small time interval, all points of the fluid are
      displaced by δu = v δt. Therefore, using our earlier result for volume transformation under
      strain, the volume of the material particle changes as
                                             D(dV )
                                                    = (∇ · v) dV
                                              Dt
      where here the convective derivative is only formal. Combining these results gives D(dM )/Dt =
      0, the obvious fact that the mass of a material particle does not change as it moves.
 • By applying Newton’s second law to a material particle, we have Cauchy’s equation,
                                                     Dv
                                                 ρ      = f∗
                                                     Dt
      where f ∗ is the effective force density. The field Dv/dt is called the material acceleration; note
      that it can be nonzero even for a steady flow.


 • This result can also be written as a continuity equation for momentum,

                                        ∂(ρv)
                                              + ∇ · (ρvv) = f ∗ .
                                         ∂t
    The quantity ρv is called the current density of mass, or the momentum density, or the mass
    flux, or the mass flux density.

 • To solve this equation, we generally need constitutive relations which give f ∗ in terms of the
   material parameters. If f ∗ only depends on x and the density, then our equations for Dρ/Dt
   and Dv/Dt close by themselves.

 • The formalism above also applies to solids, but now f ∗ depends on the displacement field

                                         u(x, t) = x − X(x, t)

    which we must keep track of. The easiest way to do this is to note that X(x, t) simply means
    the location the material particle at x originally came from. This is time-independent, so
                                                DX
                                                   = 0.
                                                Dt
    Plugging in the definitions gives
                                                  Du
                                                v=
                                                  Dt
    which must be solved along with the other three equations.

Next, we consider the case of incompressible and inviscid/ideal/perfect flow.

 • Taking the only forces to be gravity and pressure, f ∗ = ρg − ∇p, we have the Euler equations
                                ∂v                  ∇p
                                   + (v · ∇)v = g −    ,      ∇ · v = 0.
                                ∂t                  ρ0
    The first Euler equation is also called the Euler equation.

 • The Euler equations determine the time evolution of v. They also fix the pressure; taking the
   divergence of the Euler equation gives

                                   ∇2 p = ρ0 ∇ · g − ρ0 ∇ · ((v · ∇)v).

    Thus, the pressure everywhere at some instant is determined by the velocity at that instant.

 • This seems puzzling, because distant changes in the velocity affects the pressure instantaneously,
   seemingly in a nonlocal way. This is because changes in the pressure propagate at the speed
   of sound, and for an incompressible fluid the speed of sound is infinite. This is a decent
   approximation for many real-world situations involving water and air, where the speed of sound
   is much higher than the flow speed.

 • At interfaces between two fluids, we additionally need the boundary conditions that p and v · n
   are continuous, where n is the normal vector. For a solid boundary, this means the normal
   component of velocity must vanish.


  • As we’ll see below, the degree to which viscosity can be neglected is quantified by the Reynolds
    number, which is high for many real-world applications. However, even a small amount of
    viscosity can have qualitative effects. For instance, at solid boundaries there is always a
    boundary layer where the tangential velocity of the fluid approaches zero.

  • In steady flow, the Euler equation reduces to
                                                             ∇p
                                            (v · ∇)v = g −      .
                                                             ρ0
    As we’ll see later, when a compressible fluid performs steady flow, it behaves as if it is incom-
    pressible, as long as the flow speed is much lower than the speed of sound. Intuitively, this is
    a local increase in pressure will tend to drive fluid out of the way rather than compressing it.
    This makes incompressibility often a reasonable assumption even when applied to air.

  • Bernoulli’s theorem states that for steady flow, the Bernoulli field
                                               1         p
                                            H = v2 + Φ +
                                               2         ρ0
    is constant along streamlines, where Φ is the gravitational potential. To see this, note that
                                 DH     Dv           1
                                    =v·    + v · ∇Φ + v · ∇p = 0
                                 Dt     Dt           ρ0
    where we used the assumption of steady flow, and the Euler equation.

  • The first two terms in the Bernoulli field make up the total mechanical energy per unit mass,
    and the change in pressure quantifies the work done on particles as they flow, so Bernoulli’s
    theorem can be thought of as a statement of conservation of energy.

  • In hydrodynamics, the quantity ρ0 v 2 /2 is also called the “dynamic pressure”, since it is converted
    to pressure when a flow is stopped. For a constant gravitational field g0 , the quantity H/g0 is
    also called the “total head”, since it quantifies how high the fluid can be raised.

Note. In steady flow through a constriction, there is an asymmetry between the inlet and outlet:
the water converges in the inlet to the constriction, then leaves through the outlet in a narrow jet.
(One can also see a boundary layer in the constriction.)


However, this asymmetry is not encoded in the Euler equations for steady flow, which are symmetric
under time reversal. Time reversal symmetry is broken by viscosity (as a result of the usual
thermodynamic arrow of time), but if we don’t account for it, we must impose boundary conditions
to get the appropriate physical solution, just as we do for, e.g. the advanced and retarded solutions
in electromagnetism.

Next, we study the vorticity of the flow.

 • Suppose that a steady flow originates from a asymptotically uniform flow at infinity. In this
   case, it is intuitive that H should be constant between all streamlines, and hence constant
   everywhere. However, this intuition can fail if streamlines form closed loops.

 • To make this intuition precise, note that

                                                           p
                             ∂i H = vj ∂i vj + ∂i       Φ+          = vj ∂i vj − vj ∂j vi
                                                           ρ0

    where we used the Euler equation. Therefore, exiting index notation,

                                        ∇H = v × ω,         ω=∇×v

    where ω is the vorticity field. Thus, H is constant if the vorticity vanishes.

 • Visually, the field lines of ω are called vortex lines. Since the vorticity field is a curl, ∇ · ω = 0,
   so vortex lines generically close. One can think of the fluid as locally circulating around such
   lines. Since ∇H is perpendicular to both v and ω, H is constant on the surfaces made from
   vortex lines and streamlines, also called Lamb surfaces.

 • Accounting for the time-dependent term in the Euler equation, we have
                                            ∂v
                                               = v × ω − ∇H
                                            ∂t
    and taking the curl of both sides gives
                                            ∂ω
                                               = ∇ × (v × ω).
                                            ∂t
    Therefore, if an ideal fluid initially has no vorticity, then it never can gain any.

 • This can be physically unintuitive. For example, if one moves a ball through initially still water,
   vortices will form in its wake. They are created by the “shedding” of boundary layers at the
   surface of the ball, which exist due to viscosity.

 • By Stokes’ theorem, the circulation of the fluid along a curve C is
                                            I              Z
                                 Γ(C, t) =     v(t) · dℓ =   ω · dS
                                                    C                  S

    where we used Stokes’ theorem.


  • In the absence of vorticity, the curl of the velocity vanishes, so we may write it as

                                                 v = ∇Ψ

    where Ψ is called the velocity potential. Since the divergence of the velocity vanishes,

                                                ∇2 Ψ = 0.

    This case of “potential flow” is simple because it reduces the problem to linear differential
    equations, and much is known about Laplace’s equation. If the flow is two-dimensional, complex
    analysis techniques can also be used.

  • This approach is useful whether flow is steady or not. If the flow is not steady, we can solve for
    the pressure, and then use that to determine the time evolution from the Euler equation,

                                          ∇(H + ∂Ψ/∂t) = 0.

    This determines Ψ(x, t) up to an arbitrary function of time, which is irrelevant, so we can take
                                                ∂Ψ
                                                   = −H.
                                                ∂t

  • Since the divergence of the velocity vanishes, we can also take it to be the curl of some other
    function. In practice, this is useful in two-dimensional flows, where the curl effectively maps
    scalar fields to vector fields. In this case we can define the stream function ψ(x, y), where
                                                ∂ψ              ∂ψ
                                         vx =      ,   vy = −
                                                ∂y              ∂x
    in which case the divergence vanishes by the equality of mixed partial derivatives. In addition,
                                                 ∂ψ ∂ψ ∂ψ ∂ψ
                                    v · ∇ψ = −         +       =0
                                                 ∂y ∂x   ∂x ∂y
    which implies that the stream function is constant along streamlines. The vorticity is
                                              ∂vy   ∂vx
                                       ωz =       −     = −∇2 ψ
                                              ∂vx   ∂y
    so for irrotational flow one can find ψ by solving Laplace’s equation.

