---
id: kevin-zhou-notes-phy-ex051
source: kevin-zhou-notes
native_id: "phy Example 051"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex051
topic: [continuum-mechanics]
subtopic: [potential-flow, fluid-dynamics]
math_tools: [laplace-equation, bernoulli-theorem]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "5962-6181"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Potential flow past a sphere. Consider an asymptotically uniform flow with velocity U ẑ
which encounters a sphere of radius r at the origin. Using standard techniques for solving Laplace’s
equation, the solution is
                                                          a3

                                     Ψ = U r cos θ 1 + 3
                                                         2r
where θ is the angle from ẑ. By Bernoulli’s theorem, the change in pressure is ∆p = ρ0 v 2 /2, and a
straightforward computation gives

                                          1       9 cos2 θ − 5
                                      ∆p = ρ0 U 2
                                          2            4
on the surface of the sphere. The net force on the sphere vanishes; there is no drag force.


Note. D’Alembert’s paradox is the fact that the drag force generally vanishes in steady potential
flow. We saw this above, and we can prove it in general. Note that the drag force on the body is
                                     I                I
                                                  1
                                 F=      p dS = − ρ0 v 2 dS
                                       S          2     S

where we used Bernoulli’s
               H           theorem, and S is the surface of the body. Here, the uniform pressure
contribution p0 dS vanishes, and we have neglected the gravitational potential term, since it just
yields the buoyant force. To evaluate this integral, we use the divergence theorem in the form
                                     Z                 I
                                        (∇T ) dV = − T dS
                                           V                  S

where V is the volume outside of S. Switching to index notation,
                                     I                 Z
                                  1                1
                          Fi = − ρ0 vj vj dSi = ρ0        ∂i (vj vj ) dV.
                                  2                2    V

Now we use the fact that the divergence and curl of v vanish to write

                              ∂i (vj vj ) = 2vj ∂i vj = 2vj ∂j vi = 2∂j (vj vi ).

Then using the divergence theorem again in reverse gives
                                  Z                     I
                          Fi = ρ0   ∂j (vj vi ) dV = −ρ0 vj vi dSj = 0
                                       V                          S

since v · dS vanishes everywhere on the surface. One might worry that we pick up a term in the
divergence theorem from the boundary at infinity, but in general the velocity field falls off at least
as fast as 1/r3 , so it does not contribute.
   The paradox is that for an object with cross-sectional area A moving with velocity v through
stationary fluid, the drag force does not actually vanish in the limit of zero viscosity, but rather
approaches a constant of order ρ0 Av 2 . There are a few ways of thinking about why this effect is
missing in the potential flow solution. In terms of forces, a boundary layer will be formed for any
nonzero viscosity, and this produces a trailing wake behind the body in which the pressure is lower
than in front, causing a drag force. In terms of conserved quantities, drag occurs because the object
gives momentum to the initially stationary fluid to get it out of the way. In the potential flow
solution, this does not happen because the fluid is already moving with the object appropriately,
but the total momentum of the fluid is infinite, making such a situation unphysical.
Note. The convective derivative coincides with the Lie derivative for scalars,
                                               D    ∂
                                                  =    + Lv ,
                                               Dt   ∂t
and a scalar u that simply flows along with the velocity field has Du/dt = 0. Similarly, we can
define a modified convective derivative for general tensors,

                                               D̃    ∂
                                                   =    + Lv
                                               D̃t   ∂t
which vanishes if the tensor is Lie transported along the velocity field. For a vector field,

                                   D̃u   ∂u
                                       =    + (v · ∇)u − (u · ∇)v.
                                   D̃t   ∂t


Starting from the equation of motion for the vorticity and using the product rule for the curl, we can
show that D̃ω/D̃t = 0, which means concretely that vortex lines are carried by the flow. Intuitively,
this is because vorticity is a local measure of angular momentum, and the angular momentum of
a parcel of fluid can’t change in the absence of viscosity. Furthermore, we know that vortex lines
cannot intersect each other, and form closed loops, as can be seen in the motion of smoke rings.
   Remarkably, in the late 19th century these results were taken as a basis for a “vortex theory of
everything”. In this theory, which was popular among the greatest physicists of the United Kingdom,
the different kinds of atoms are topologically distinct knots formed by vortex lines in the ether,
which is taken to be an ideal fluid. Though the theory didn’t succeed in explaining much about
chemistry, it has an important historical legacy. For example, in the theoretical physics department
at Cambridge, more people work on fluid dynamics then high energy physics or relativity.

4.4     Compressible Flow
Now we consider the compressible flow of ideal fluids. In this case, the speed of sound becomes
finite, so we must begin with a treatment of sound waves.

  • Neglecting gravity, the Euler equations are now
                              ∂v                ∇p         ∂ρ
                                 + (v · ∇)v = −    ,          + ∇ · (ρv) = 0.
                              ∂t                ρ          ∂t

  • For a small amplitude sound wave, we let ρ = ρ0 + ∆ρ and p = p0 + ∆p. In this case v/c is
    similarly small, and we can neglect the advective term. At lowest order, we have

                                 ∂v    1                 ∂(∆ρ)
                                    = − ∇(∆p),                 = −ρ0 ∇ · v
                                 ∂t    ρ0                  ∂t
      which combine to give
                                            ∂ 2 (∆ρ)
                                                     = ∇2 (∆p).
                                               ∂t2
  • For a fluid with a barotropic equation of state, p = p(ρ), we have

                                                          ∆ρ
                                                ∆p = K0
                                                          ρ0
      which yields the wave equation,
                                                                s          s
                               ∂ 2 (∆ρ)                             ∆p         K0
                                        = c20 ∇2 (δρ),   c0 =          =          .
                                  ∂t2                               ∆ρ         ρ0

  • For the special case of an isentropic ideal gas, K0 = γp0 and
                                              r         s
                                                 γp0      γRT0
                                         c0 =         =
                                                  ρ0        µ

      where µ is the molar mass. The isothermal sound velocity is recovered for γ = 1.


 • If we let the density variation be

                                         ∆ρ = ρ1 sin(kx − ωt),

    then the velocity field is
                                                                           ρ1
                                   vx = v1 sin(kx − ωt),      v1 = c0         .
                                                                           ρ0
    This confirms our earlier statement that v/c is the same order as ∆ρ/ρ. Also, note that

                                         |(v · ∇)v|  kv 2 v1
                                                    ∼ 1 =
                                          |∂v/∂t|    ωv1  c0
    so the advective term does not contribute at lowest order, justifying our neglect of it above. We
    have also neglected gravity, which is a good approximation when g ≪ ωc.

Next, we consider steady compressible flow.

 • In this case, the Euler equations reduce to
                                                    ∇p
                                   (v · ∇)v = −        ,   ∇ · (ρv) = 0.
                                                    ρ
   We assume a barotropic equation of state, for simplicity. The local Mach number is M = |v|/c.

 • We can combine the Euler equations to get an equation solely in terms of the velocity. The
   continuity equation states
                                          1             1
                                 ∇ · v = − (v · ∇)ρ = − 2 (v · ∇)p
                                          ρ            ρc
    where we used the definition of the speed of sound. Then, using the Euler equation gives
                                                     v · (v · ∇)v
                                          ∇·v =                   .
                                                          c2

 • Applying the Cauchy–Schwartz inequality to the numerator gives
                                                      sX
                                     2
                          |∇ · v| ≤ M |∇v|, |∇v| =         (∇i vj )2 .
                                                                      ij

    This demonstrates that when M ≪ 1, the divergence ∇ · v is small, and the flow can be treated
    as incompressible. In practice, this is a reasonable assumption for M ≲ 0.3.

 • By an analogous derivation to the incompressible case, the Bernoulli field is
                                            1
                                         H = v 2 + Φ + w(p)
                                            2
                                                                                    R
    where we include the gravitational potential Φ for completeness, and w(p) =         dp/ρ(p) is the
    pressure potential. For an isentropic ideal gas,
                                                              γ R
                                        w = cp T,     cp =
                                                             γ−1 µ
    where µ is the molar mass.


  • In general, an object moving through an ideal fluid has a stagnation point in front of it, where
    the fluid is at rest with respect to the object. There is also at least one behind it, but in practice
    the flow is not steady behind the object because of vortex formation and turbulence, making
    Bernoulli’s theorem inapplicable.

  • Bernoulli’s theorem lets us compute the temperature at the forward stagnation point,
                                             1 2
                                               v + cp T = cp T0 .
                                             2
    For an isentropic ideal gas, this gives the result
                                             T0     γ−1 2
                                                =1+    M
                                             T       2
    where M is the Mach number of the flow at the initial point. Assuming the flow is isentropic,
    p ∝ ργ , which implies
                                   γ/(γ−1)                 1/(γ−1)
                           p       T              ρ        T
                              =               ,      =               .
                           p0     T0              ρ0      T0
    For high speeds, the temperature rise is substantial. In practice, it can cause the gas to dissociate
    into a plasma, changing the molar mass µ and hence the result.

  • A sonic point is a point where M = 1. Applying Bernoulli’s theorem between a sonic point and
    a stagnation point gives
                                            T1      2
                                               =
                                            T0    γ−1
    which can be combined with our previous result to yield the local temperature in terms of the
    sonic point temperature,
                                                              −1
                                 T           γ−1      2
                                    = 1+           (M − 1)        .
                                 T1          γ+1

