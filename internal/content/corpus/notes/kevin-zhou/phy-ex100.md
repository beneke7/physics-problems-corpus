---
id: kevin-zhou-notes-phy-ex100
source: kevin-zhou-notes
native_id: "phy Example 100"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex100
topic: [quantum-mechanics]
subtopic: [scattering]
math_tools: [complex-analysis, differential-equations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "14439-14588"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Resonances. Intuitively, a resonance is a short-lived excitation that is formed in a
scattering process. To understand them, we apply the WKB approximation to a potential

                                                          ℓ(ℓ + 1)ℏ2
                                     Vtot (r) = V (r) +
                                                            2mr2
which has a well between the turning points r = r0 and r = r1 , and a classically forbidden region
between r = r1 and the turning point r = r2 . We define

                                               2 r1                 1 r2
                     p                           Z                    Z
             p(r) = 2m(E − Vtot (r)), Φ =             p(r) dr, κ =         |p(r)| dr.
                                               ℏ r0                 ℏ r1

Note that Φ is the action for an oscillation inside the well, so the bound state energies satisfy

                                          Φ(En ) = 2π(n + 1/2).

Starting with an exponentially decaying solution for r < r0 , the connection formulas give
                                                                                Z r
                  1       K     Φ    i −K      Φ iS(r)/ℏ−iπ/4
        u(r) = p        2e cos + e         sin     e            + c.c., S(r) =      p(r) dr
                  p(r)          2    2         2                                 r2

in the region r > r2 , where cos(Φ/2) = 0 for a bound state. Suppose the forbidden region is large,
so eK ≫ 1. Then away from bound states, the e−K term does not contribute; we get the same
solution we would get if there were no potential well at all. In particular, assuming V (r) is negligible
for r > r2 , the particle doesn’t feel its effect at all, so δℓ = 0.
   Now suppose we are near a bound state, E = En + δE. Then
                                                                δE
                                     Φ(E) = 2π(n + 1/2) +
                                                                ℏωc
according to the theory of action-angle variables, and expanding to lowest order in δE gives

                                          −δE + iΓ/2
                                e2iδℓ =              ,     Γ = ℏωc e−2K .
                                          −δE − iΓ/2

That is, across a resonance, the phase shift rapidly changes by π. Then we have a Lorentzian
resonance in the cross-section,
                                                  Γ2 /4
                                  sin2 δℓ =                    .
                                            (E − En )2 + Γ2 /4
Since we have assumed K is large, the width Γ is much less than the spacing between energy
levels ℏωc , so the cross-section has sharp spikes as a function of E. Such spikes are common in
neutron-nucleus scattering. Physically, we imagine that the incoming particle tunnels through the
barrier, gets ‘stuck inside’ bouncing back and forth for a timescale 1/Γ, then exits. This is the
physical model for the production of decaying particles in quantum field theory.

12.3    Green’s Functions
In this section we make some formal definitions, which will be put to use in the next section. We
begin with a heuristic example from electromagnetism.


 • Schematically, Maxwell’s equation read □A = J. The corresponding homogeneous equation is
   □Ah = 0, and the general solution of the inhomogeneous equation is
                                   Z
                   A(x) = Ah (x) + dx′ G(x, x′ )J(x′ ), □G(x, x′ ) = δ(x − x′ )

    where □ acts on the x coordinate.

 • In general, we see that solutions to inhomogeneous equations are ambiguous up to adding a
   homogeneous solution. In particular, the Green’s function is defined by an inhomogeneous
   equation, so it is ambiguous too; we often specify it with boundary conditions.

 • Now we consider the case where the source is determined by A itself, J = σA. Then Maxwell’s
   equations read
                                   □A = σA, (□ − σ)A = 0.
    We have arrived at a homogeneous equation, but now A must be determined self-consistently;
    it will generally be the sum of an incident and scattered term, both sourcing current.

 • As a specific example, consider reflection of an incident wave off a mirror, which is a region
   of high σ. The usual approach is to search for a solution of □A = 0 containing an incoming
   wave, satisfying a boundary condition at the mirror. But as shown above, we can also solve
   self-consistently, letting A = Ainc + Ascat where □A = σA. We would then find that Ascat
   cancels Ainc inside the mirror and also contains a reflected wave.

 • Similarly, defining H0 = p2 /2m, the time-independent Schrodinger equation for potential
   scattering is
                             (H0 + V )ψ = Eψ, (E − E0 )ψ = V ψ.
    The latter equation is formally like the equation □A = σA. We can think of solving for
    ψ = ψinc + ψscat where both terms collectively produce the ‘source’ term V (x)ψ(x).

 • Given a Green’s function for ψ, we will not have a closed form for ψ. Instead, we’ll get a
   self-consistent expression for ψ in terms of itself, which we can expand to get a series solution.

We now define time-dependent Green’s functions for the Schrodinger equation.

 • The inhomogeneous time-dependent Schrodinger equation is

                                  ∂
                                iℏ − H(t) ψ(x, t) = S(x, t).
                                  ∂t

    We define a Green’s function to satisfy this equation for the source iℏδ(t − t′ )δ 3 (x − x′ ), where
    the iℏ is by convention. We always indicate sources by primed coordinates.

 • Earlier, we defined the propagator as

                                       K(x, t, x′ , t′ ) = ⟨x|U (t, t′ )|x⟩.

    It is not a Green’s function, as it satisfies the homogeneous Schrodinger equation; it instead
    propagates effects forward and backward in time.


  • The outgoing (or retarded) time-dependent Green’s function is

                                    K+ (x, t, x′ , t′ ) = Θ(t − t′ )K(x, t, x′ , t′ ).

    The additional step function gives the desired δ-function when differentiated. This Green’s
    function is zero for all t < t′ . In terms of a water wave analogy, it describes the surface of a
    lake which is previously still, which we poke at (x′ , t′ ).

  • Using the outgoing Green’s function gives the solution
                                            Z ∞      Z
                                                   ′
                      ψ(x, t) = ψh (x, t) +     dt     dx′ K+ (x, t, x′ , t′ )S(x′ , t′ ).
                                                    −∞

    If we want a causal solution, then ψh (x, t) must also vanish before the driving starts, but this
    implies it must vanish for all times. Therefore
                                        Z t      Z
                                               ′
                             ψ(x, t) =      dt     dx′ K(x, t, x′ , t′ )S(x′ , t′ )
                                              −∞

    is the unique causal solution.

  • Similarly, we have the incoming (or advanced) Green’s function

                                   K− (x, t, x′ , t′ ) = −Θ(t′ − t)K(x, t, x′ , t′ ).

    For t → 0− , it approaches −δ 3 (x − x′ ). In terms of water waves, it describes waves in a lake
    forming for t < t′ , then finally coalescing into a spike at t = t′ which is absorbed by our finger.
    For practical problems, we thus prefer the outgoing Green’s function.

  • We define the Green’s operators K̂± to satisfy

                                        K± (x, t, x′ , t′ ) = ⟨x|K̂± (t, t′ )|x′ ⟩

    which satisfy

                  K± (t, t′ ) = ±Θ(±(t − t′ ))U (t, t′ ),     (iℏ − H(t)) K̂± (t, t′ ) = iℏδ(t − t′ ).

    This form is often more useful it does not privilege the position basis. In particular, Green’s
    operators can be defined for systems with a much broader range of Hilbert spaces, such as spin
    systems or field theories.

