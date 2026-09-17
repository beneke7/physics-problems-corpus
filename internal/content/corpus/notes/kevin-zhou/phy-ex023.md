---
id: kevin-zhou-notes-phy-ex023
source: kevin-zhou-notes
native_id: "phy Example 023"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex023
topic: [electromagnetism]
subtopic: [boundary value problems, magnetostatics, magnetic dipoles]
math_tools: [vector calculus, partial differential equations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1519-1687"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. Boundary value problems. Consider a volume bounded by surfaces Si , which could
include a surface at infinity. Then Laplace’s equation ∇2 ϕ = 0 has a unique solution (up to
constants) if we fix ϕ or ∇ϕ · n̂ ∝ E⊥ on each surface. These are called Dirichlet and Neumann
boundary conditions respectively. To see this, let f be the difference of two solutions. Then
                          Z              Z                   Z
                                     2
                             dV (∇f ) = dV ∇ · (f ∇f ) = f ∇f · dS

where we used ∇2 f = 0 in the first equality. However, boundary conditions force the right-hand
side to be zero, so the left-hand side is zero, which requires f to be constant.
   In the case where the surfaces are conductors, it also suffices to specify the charge on each surface.
To see this, note that potential is constant on a surface, so
                                   Z                 Z
                                      f ∇f · dS = f ∇f · dS = 0

because the total charge on a surface is zero if we subtract two solutions. Then ∇f = 0 as before,
giving the same conclusion.

2.2   Magnetostatics
  • The fundamental equations of magnetostatics are

                                        ∇ × B = µ0 J,    ∇ · B = 0.
31 2. Electromagnetism


 • Since the divergence of a curl is zero, we must have ∇ · J = 0. This is simply a consequence of
   the continuity equation
                                            ∂ρ
                                                +∇·J=0
                                             ∂t
   and the fact that we’re doing statics.

 • Integrating Ampere’s law yields             I
                                                   B · ds = µ0 I.

    This shows that the magnetic field of an infinite wire is Bθ = µ0 I/2πr.

 • A uniform surface current K produces discontinuities in the field,

                                       ∆B∥ = µ0 K,         ∆B⊥ = 0.

    This is similar to the case of a surface charge, except there E⊥ is discontinuous instead.

 • Consider an infinite cylindrical solenoid. Then B = B(r)ẑ by symmetry. Both inside and
   outside the solenoid, we have ∇ × B = 0 which implies ∂B/∂r = 0. Since fields vanish at
   infinity, the field outside must be zero, and by Ampere’s law, the field inside is

                                                    B = µ0 K

    where K is the surface current density, equal to nI where n is the number of turns per length.

 • Define the vector potential as
                                                   B = ∇ × A.
    The vector potential is ambiguous up to the addition of a gradient ∇χ.

 • By adding such a gradient, the divergence of A is changed by ∇2 χ. Then by the existence
   theorem for Poisson’s equation, we can choose any desired ∇ · A by gauge transformations.

 • One useful choice is Coulomb gauge ∇ · A = 0. As a result, Ampere’s law becomes

                                               ∇2 A = −µ0 J

    where we used the curl-of-curl identity,

                                    ∇2 A = ∇(∇ · A) − ∇ × (∇ × A).

Note. What is the vector Laplacian? Formally, the Laplacian of any tensor is defined as

                                         ∇2 T = ∇ · (∇T ).

In a general manifold with metric, the operations on the right-hand side are defined through covariant
derivatives, and depend on a connection. Going to the other extreme of generality, it can be defined
in Cartesian components in Rn as the tensor whose components are the scalar Laplacians of those
of T ; we can then generalize to, e.g. spherical coordinates by a change of coordinates.
    In the case of the vector Laplacian, the most practical definition for curvilinear coordinates on
  n
R is to use the curl-of-curl identity in reverse, then plug in the known expressions for divergence,
gradient, and curl. This route doesn’t require any tensor operations.
32 2. Electromagnetism


We now use our mathematical tools to derive the Biot–Savart law.
 • By analogy with the solution to Poisson’s equation by Green’s functions,
                                                       J(x′ )
                                                Z
                                             µ0
                                    A(x) =        dx′           .
                                             4π       |x − x′ |
    We can explicitly prove this by working in components in Cartesian coordinates. This equation
    also shows a shortcoming of vector notation: read literally, it is ambiguous what the indices on
    the vectors should be.
 • To check whether the Coulomb gauge condition is satisfied, note that
                             J(x′ )
                Z                    Z                               Z
                      ′                     ′     ′          1                              1
      ∇ · A(x) ∝ dx ∇ ·            ′
                                      =  dx   J(x   ) · ∇       ′
                                                                   = −   dx′ J(x′ ) · ∇′           .
                            |x − x |                      |x − x |                       |x − x′ |
   The vector notation has some problems: it’s ambiguous what index the divergence acts on (so
   we try to keep it linked to J with dots), and it’s ambiguous what coordinate it differentiates
   (so we mark this with primes). In the final step, we used antisymmetry to turn ∇ into −∇′ .
    This expression can be integrated by parts (clearer in index notation) to yield a surface term
    and a term proportional to ∇ · J = 0, giving ∇ · A = 0 as desired.
 • Taking the curl and using the product rule,
                           J(x′ )                                                      ′          ′
                                                           
                                                                                  ′ J(x ) × (x − x )
              Z                         Z                                    Z
           µ0       ′                µ0      ′       1              ′     µ0
   B(x) =        dx ∇ ×            =      dx    ∇             × J(x   ) =      dx
           4π            |x − x′ |   4π           |x − x′ |               4π           |x − x′ |3
    which is the Biot–Savart law.
Next, we investigate magnetic dipoles and multipoles.
 • A current loop tracing out the curve C has vector potential
                                                       dr′
                                                   I
                                              µ0 I
                                      A(r) =
                                              4π C |r − r′ |
    by the Biot–Savart law.
 • Just as for electric dipoles, we can expand
                                            1        1 r · r′
                                                   =   + 3 + ···
                                         |r − r′ |   r   r
    for small r′ . The first term always integrates to zero about a closed loop, as there are no
    magnetic monopoles, while the next term gives
                                                         r · r′
                                                    I
                                               µ0 I
                                       A(r) ≈         dr′ 3 .
                                               4π C        r

 • To simplify, pull the 1/r3 out of the integral, then dot the integral with g for
                I                  Z                           Z                     Z
                           ′   ′           ′         ′     ′
                    gi rj rj dri =   ϵijk ∂i (gj rℓ rℓ ) dSk =   ϵijk ri gj dSk = g · dS′ × r
                                                                              ′
                   C                S                        S
    by Stokes’ theorem. Since both g and r are constants, we conclude
                                     µ0 m × r
                                                                Z
                             A(r) =           , m = IS, S =         dS.
                                    4π r3                         S
    Here, S is the vector area, and m is the magnetic dipole moment.
33 2. Electromagnetism


  • Taking the curl straightforwardly gives the magnetic field,

                                                    µ0 3(m · r̂)r̂ − m
                                          B(r) =
                                                    4π       r3
    which is the same as the far-field of an electric dipole.

  • Near the dipoles, the fields differ because the electric and magnetic fields are curlless and
    divergenceless, respectively. For instance, the field inside an electric dipole is opposite the
    dipole moment, while the field inside a magnetic dipole is in the same direction.

  • One can show that, in the limit of small dipoles, the fields are

                     1 3(p · r̂)r̂ − p    1                           µ0 3(m · r̂)r̂ − m 2µ0
           E(r) =              3
                                       −     p δ(r),       B(r) =                       +    m δ(r).
                    4πϵ0     r           3ϵ0                          4π       r3         3
    These are the fields of so-called “physical” dipoles. These expressions can both be derived by
    considering dipoles of finite size, such as uniformly polarized/magnetized spheres, and taking
    the radius to zero.

