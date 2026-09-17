---
id: kevin-zhou-notes-phy-ex025
source: kevin-zhou-notes
native_id: "phy Example 025"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex025
topic: [electromagnetism, special relativity]
subtopic: [magnetic dipole force, electrodynamics, field energy]
math_tools: [vector calculus, calculus]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1727-1912"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. The force on a magnetic dipole. The force on a general current distribution is
                                       Z
                                  F = dr J(r) × B(r).

For small distributions localized about r = R, we can Taylor expand for

                                 B(r) = B(R) + (r · ∇′ )B(r′ )
                                                                 r′ =R
where a prime denotes a derivative with respect to r′ . The first term contributes nothing, by the
same logic as the previous example. In indices, the second term gives
                       Z                             Z
                  F = dr J(r) × (r · ∇ )B(r ) = dr ϵijk Ji rℓ ∂ℓ′ Bj (r′ ) êk .
                                         ′     ′
                                                                          


Now we focus on the terms in parentheses. We assume the curl of B vanishes, which holds in almost
all relevant situations (though see the caveats here). Since the curl is just the exterior derivative,
                                          ∂i Bj − ∂j Bi = 0.
This looks different from the usual (3D) expression for vanishing curl, which contains ϵijk , because
there we additionally take the Hodge dual. This means that we can swap the indices for
                      Z                                    Z
                        dr ϵijk Ji rℓ ∂j Bℓ (r ) êk = −∇ × dr (r · B(r′ ))J(r).
                                       ′      ′          ′
                                                


Now the integral is identical to our magnetic dipole integral from above, with a constant vector of
B(r′ ) instead. Therefore
                                   F = ∇ × (B × m) = (m · ∇)B.
where we used a product rule and the vanishing of the curl yet again.
   If we assume m is constant, then we can rewrite the force as F = ∇(B · m), again because
the curl of B vanishes. Integrating that force yields the potential energy U = −m · B, which is
commonly given in introductory textbooks. However, this expression is tricky to interpret. When
a magnetic dipole is moved through a field, generally emfs will be induced that can change the
current. Therefore, treating m as a constant neglects the energy required to keep the magnetic
dipole moment the same. (If we count backreaction on the field, it also neglects the energy required
to keep the external magnetic field the same.) The potential energy here is only useful in the sense
that its derivative gives the mechanical force on the dipole. Similarly, differentiating with respect
to angle and assuming m stays the same gives the torque on a dipole, τ = m × B.

2.3   Electrodynamics
The first fundamental equation of electrodynamics is Faraday’s law,
                                                   ∂B
                                         ∇×E+         = 0.
                                                   ∂t
In particular, defining the emf as              Z
                                              1
                                         E=       F · dr
                                              q C
where F is the Lorentz force on a charge q, we have
                                                 dΦ
                                             E =−
                                                  dt
where Φ is the flux through a surface with boundary C.
35 2. Electromagnetism


  • For conducting loops, the resulting emf will create a current that creates a field that opposes
    the change in flux; this is Lenz’s law. This is simply a consequence of energy conservation; if
    the sign were flipped, we would get runaway positive feedback.
  • The integrated form of Faraday’s law still holds for moving wires. Consider a loop C with
    surface S whose points have velocity v(r) in a static field. After a small time dt, the surface
    becomes S ′ . Since the flux through any closed surface is zero,
                                     Z           Z              Z
                               dΦ =     B · dS −    B · dS = −       B · dS
                                      S′           S              Sc

    where Sc  is the surface with boundary C and C ′ .    Choosing this surface to be straight gives
    dS = (dr × v) dt, so            Z                   Z
                            dΦ
                                =−      B · (dr × v) = − (v × B) · dr.
                            dt        C                   C
    Then Faraday’s law holds as before, though the emf is now supplied by a magnetic force.
  • Define the self-inductance of a curve C with surface S to be
                                                     Φ
                                                L=
                                                     I
    where Φ is the flux through S when current I flows through C. Then
                                          dI         1       1
                                    E = −L   , U = LI 2 = IΦ.
                                          dt         2       2
    Inductors thus store energy when a current flows through them.
  • As an example, a solenoid has B = µ0 nI with total flux Φ = BAnℓ where ℓ is the total length.
    Therefore L = µ0 n2 V where V = Aℓ is the total volume.
  • We can use our inductor energy expression to get the magnetic field energy density,
                                 Z               Z             Z
                               1              1              1
                         U= I       B · dS = I      A · dr =     dx J · A
                               2 S            2 C            2
    where we turned the line integral into a volume integral.
  • Using ∇ × B = µ0 J and integrating by parts gives
                                                Z
                                             1
                                       U=          dx B · B.
                                           2µ0
    This does not prove the total energy density of an electromagnetic field is u ∼ E 2 + B 2 because
    there can be E · B terms, and we’ve only worked with static fields. Later, we’ll derive the energy
    density properly by starting from a Lagrangian.

Finally, we return to Ampere’s law,
                                            ∇ × B = µ0 J.
As noted earlier, this forces ∇ · J = 0, so it must fail in general. The true equation is
                                                               
                                                             ∂E
                                      ∇ × B = µ0 J + ϵ0
                                                             ∂t
so that taking the divergence now gives the full continuity equation. We see a changing electric field
behaves like a current; it is called displacement current. This leads to propagating wave solutions.
36 2. Electromagnetism


  • In vacuum, we have
                                                                       ∂B                      ∂E
                      ∇ · E = 0,    ∇ · B = 0,       ∇×E=−                ,   ∇ × B = µ0 ϵ 0      .
                                                                       ∂t                      ∂t
      Combining these equations, we find

                                             ∂2E
                                     µ0 ϵ0       = −∇ × (∇ × E) = ∇2 E
                                             ∂t2
                                                                                       √
      with a similar equation for B, so electromagnetic waves propagate at speed c = 1/ µ0 ϵ0 .

  • Taking plane waves with amplitudes E0 and B0 , we read off from Maxwell’s equations

                                    k · E0 = k · B0 = 0,           k × E0 = ωB0

      using the correspondence ∇ ∼ ik. In particular, E0 = cB0 .

  • The rate of change of the field energy is
             Z                          Z                                        
                                1               1                       1
        U̇ = dx ϵ0 E · Ė + B · Ḃ = dx            E · (∇ × B) − E · J − B · (∇ × E) .
                               µ0               µ0                      µ0

      Using a product rule, we have
                                             Z                     Z
                                                              1
                                   U̇ = −        dx J · E −            (E × B) · dS.
                                                              µ0
      This is a continuity equation for field energy; the first term is the rate work is done on charges,
      while the second describes the flow of energy along the boundary. In particular, the energy flow
      at each point in space is given by the Poynting vector
                                                        1
                                                   S=      E × B.
                                                        µ0

  • In an electromagnetic wave, the average field energy density is u = ϵ0 E 2 /2, where we get a
    factor of 1/2 from averaging a square trigonometric function and a factor of 2 from the magnetic
    field. As expected, the Poynting vector obeys S = cu.

  • Electromagnetic waves can also be written in terms of potentials, though these have gauge
    freedom. A common choice for plane waves is to set the electric potential ϕ to zero.

2.4     Relativity
Next, we rewrite our results relativistically.

Note. Conservation of charge is specified by the continuity equation

                                        ∂µ J µ = 0,      J µ = (ρ, J).

For example, transforming an initially stationary charge distribution gives

                                         ρ′ = γρ0 ,     J′ = −γρv.
37 2. Electromagnetism


Though the charge density is not invariant, the total charge is. To see this, note that
                               Z                Z
                          Q = d x J (x) = d4 x J µ (x)nµ δ(n · x).
                                    3   0


Taking a Lorentz transform, we have
                                   Z
                              Q′ = d4 x Λµν J ν (Λ−1 x)nµ δ(n · x).

Now define n′ = Λ−1 n and x′ = Λ−1 x. Changing variables to x′ ,
                                      Z
                                Q′ = d4 x′ J ν (x′ )n′ν δ(n′ · x′ ).

This is identical to the expression for Q, except that n has been replaced with n′ . Said another
way, we can compute the total charge measured in another frame by doing an integral over a tilted
spacelike surface in our original frame. Then by the continuity equation, we must have Q = Q′ .
More formally, we can use nµ δ(n · x) = ∂µ θ(n · x) to show the difference is a total derivative.
