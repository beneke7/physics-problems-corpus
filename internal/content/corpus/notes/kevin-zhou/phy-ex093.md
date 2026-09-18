---
id: kevin-zhou-notes-phy-ex093
source: kevin-zhou-notes
native_id: "phy Example 093"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex093
topic: [quantum-mechanics]
subtopic: [time-dependent-perturbation-theory]
math_tools: [differential-equations, perturbation-theory]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "13280-13652"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. The harmonic oscillator. Setting all constants to one,
                                                       p2S + x2S
                                              HS =               .
                                                           2
Since the Hamiltonian is time-independent, HS = HH . To check this, note that
                                   p2H + x2H  (p2 + x2S )(cos2 t + sin2 t)
                          HH =               = S                           = HS
                                       2                   2
where we plugged in the known time dependence of pH and xH .


Now we turn to the interaction picture. We leave S subscripts implicit.

 • Let U0 (t) be the time evolution due to just H0 , so
                                                   ∂U0 (t)
                                              iℏ           = H0 U0 (t)
                                                     ∂t
    In the interaction picture, we “cancel out” the state evolution due to H0 , defining

                             |ψI (t)⟩ = U0† (t)|ψS (t)⟩,    AI (t) = U0† (t)AS (t)U0 (t)

    with the operator evolution chosen to preserve expectation values.

 • Define the time evolution operator in the interaction picture as

                                             |ψI (t)⟩ = W (t)|ψI (0)⟩.

    Combining the above results, we find

                                                 W (t) = U0 (t)† U (t).

    That is, we evolve forward in time according to the exact Hamiltonian, then evolve backward
    under the unperturbed Hamiltonian.

 • Differentiating and simplifying gives
                                                 ∂W (t)
                                            iℏ          = H1I (t)W (t)
                                                  ∂t
    where H1I (t) is the perturbation term in the interaction picture. Integrating this gives

                                                1 t ′
                                                 Z
                                   W (t) = 1 +       dt H1I (t′ )W (t′ )
                                               iℏ 0
    and plugging this equation into itself gives a series solution for W (t), the Dyson series.

 • A succinct way to write the full result is by a time-ordered exponential,
                                                  Z t
                                                   1      ′      ′
                                W (t) = T exp           dt H1I (t ) .
                                                  iℏ 0
    This is the generic solution to a Schrodinger equation with time-dependent Hamiltonian.

 • In general, we can always split the Hamiltonian so that one piece contributes to the time
   evolution of the operators (by the Heisenberg equation) and the other contributes to the time
   evolution of the states (by the Schrodinger equation). Interaction picture is just the particular
   splitting into H0 and H1 (t).

Now we set up time-dependent perturbation theory. For simplicity, we begin with the case where
H0 has a discrete spectrum, H0 |n⟩ = En |n⟩, with initial state |i⟩.

 • Applying the Dyson series, the interaction picture state at a later time is
                                                              Z t′
                           1 t ′
                            Z                        Z t
                                        ′         1         ′
         |ψI (t)⟩ = |i⟩ +      dt H1I (t )|i⟩ +          dt        dt′′ H1I (t′ )H1I (t′′ )|i⟩ + · · · .
                          iℏ 0                  (iℏ)2 0        0


 • Our goal is to calculate the coefficients
                                                                     X
                                                       |ψI (t)⟩ =            cn (t)|n⟩.
                                                                         n

   The cn (t) differ from the transition amplitudes mentioned earlier because they lack the rapidly
   oscillating phase factors eiEn t/ℏ ; such factors don’t affect transition probabilities. (Note that
   the eigenstates |n⟩ are the same in all pictures; states evolve in time but eigenstates don’t.)

 • Using the Dyson series, we can expand each coefficient in a power series

                                           cn (t) = δni + c(1)      (2)
                                                           n (t) + cn (t) + . . . .

   The first term is
                            Z t                                     Z t
                        1         ′                ′1                               ′                             En − Ei
           c(1)
            n (t) =            dt ⟨n|H1I (t )|i⟩ =                        dt′ eiωni t ⟨n|H1 (t′ )|i⟩,     ωni =
                       iℏ    0                     iℏ                0                                               ℏ

   where we converted H1 back to Schrodinger picture.

 • Similarly, the second order term is
                                      Z t         Z t′
                               1              ′
                                                                X             ′      ′′
                c(2)
                 n (t) =                    dt           dt′′       eiωnk t +iωki t ⟨n|H1 (t′ )|k⟩⟨k|H1 (t′′ )|i⟩.
                             (iℏ)2     0           0            k

   Here, we added a resolution of the identity; the second order term evidently accounts for
   transitions through one intermediate state.

 • To make further progress, we need to specify more about the perturbation H1 . For example,
   for a constant perturbation, the phase factors come out of the integral, giving

                                                          2 iωni t/2 sin ωni t/2
                                       c(1)
                                        n (t) =             e                    ⟨n|H1 |i⟩.
                                                         iℏ              ωni
   The corresponding transition frequency, to first order, is

                                                          4 sin2 ωni t/2
                                            Pn (t) =              2      |⟨n|H1 |i⟩|2 .
                                                          ℏ2    ωni

   We see the probability oscillates sinusoidally in time, to first order in H1 . For small ωni , this can
   become larger than one, indicating that we need to go to higher order in perturbation theory.

 • The next simplest example is sinusoidal driving. The most general example is

                                                  H1 (t) = Ke−iω0 t + K † eiω0 t
                                                                                                        (1)
   where K need not be Hermitian. As a result, the expression for cn has two terms, with
   denominators of ωni ± ω0 . Therefore, the effect of a sinusoidal driving can be very large when
   it is on resonance with a transition.


 • When ωni ≈ ω0 , the K term dominates, so we may make the “rotating wave approximation”
   and drop K † . We then have

                                           4 sin2 (ωni − ω0 )t/2
                                Pn (t) =                         |⟨n|K|i⟩|2 .
                                           ℏ2   (ωni − ω0 )2

    Physically, this could translate to absorption of light, where a sinusoidal electromagnetic field
    is the driving; the response is a Lorentzian in frequency. Since the K † term must be there as
    well, we also get resonance for ωni ≈ −ω0 , which corresponds to stimulated emission. Generally,
    the probability is proportional to 1/(∆ω)2 and initially grows as t2 . Again, the probability can
    exceed unity if we are too close to resonance, signaling that we need to go to higher order.

Next, we consider a continuum of final states, which yields Fermi’s golden rule at first order.

 • In this case, it doesn’t matter if the perturbation is constant or sinusoidal, but we’ll continue to
   work with K for continuity. (The logic still works if we set the sinusoidal frequency to zero to
   recover the constant case, but we pick up a factor of 2.) Shifting the frequency variable ω to be
   zero on resonance, the total transition probability to all states near resonance, at first order, is
                                          Z ∞
                                        4         sin2 ωt/2
                              P (t) ≈ 2        dω           g(ω)|⟨fω |H1 |i⟩|2
                                       ℏ −∞          ω2

    where g(ω) is the density of states.

 • The function sin2 (ωt/2)/ω 2 is peaked around |ω| ≲ 1/t to a height of t2 /4, so area of the
   central lobe is O(t). Away from the lobe, for |ω| ≳ 1/t, we have oscillations of amplitude 1/ω 2 .
   Integrating, the total area of the side lobes also grows as t. We thus expect the total area to
   grow as t, and contour integrating shows
                                        Z ∞
                                                sin2 ωt/2   πt
                                             dω      2
                                                          = .
                                         −∞        ω         2

 • As t → ∞, the integral’s contribution becomes concentrated about ω = 0, so

                                           1 sin2 ωt/2  π
                                          lim     2
                                                       = δ(ω).
                                       t→∞ t    ω       2
    More generally, for arbitrary t, we can define

                                           1 sin2 ωt/2  π
                                                  2
                                                       = ∆t (ω).
                                           t    ω       2
    Plugging this into our integral and taking the long time limit gives
                                           2πt
                                P (t) ≈        g(ωni )|M|2 ,   M = ⟨f |K|i⟩
                                           ℏ2
    where f is a representative final state. This is called Fermi’s golden rule.

 • The transition probability grows linearly in time, which fits with our classical intuition (i.e. for
   absorption of light), as the system has a constant ‘cross section’. For long times, the probability
   exceeds unity, again signaling that first order perturbation theory breaks down.


  • For very early times, the rule also fails, and we recover the t2 dependence. To do this, note
    that limt→0 ∆t (ω) = t2 /4. Therefore, we can pull ∆t (ω) out of the integral to get
                                             Z
                                           2
                                  P (t) ∝ t    dω g(ω)|⟨fω |K|i⟩|2 ∝ t2 .

    Fermi’s golden rule becomes valid once the variation of g(ω)|⟨fω |K|i⟩|2 is slow compared to the
    variation of ∆t (ω), and we can pull the former out of the integral instead.

  • At the level of amplitudes, what’s going on is that initially, all the possible final states have
    amplitudes going up as t, and thus a total transition probability going up as t2 . As time goes on,
    the amplitudes of the final states off resonance start oscillating instead of growing. The number
    of states where the amplitude keeps growing scales as 1/t, so the total transition probability
    grows as t. (add Wigner–Weisskopf )

Note. Suppose we expose an atom to coherent light of frequency ω for a finite time ∆t. During
this time interval, the results above apply. But ∆t (ω) has support for ω ̸= 0 when t is finite, which
means that after the driving is over, we could have a situation where the atom has absorbed a
photon of energy ℏω, but transitioned to a state whose energy is higher by more or less than ℏω.
This seems to be a clear violation of energy conservation, which leads many people to say that
energy conservation can be violated in quantum mechanics, just as the energy-tine uncertainty
principle says.
    But this logic is completely wrong. The total energy of the electromagnetic field and atom is
exactly conserved, because their joint Hamiltonian is time translation invariant. What’s really
going on is that, if the field came in a finite wavepacket, then the photons did not have well-defined
wavelength to begin with, which means they didn’t have well-defined energy. That is, the energy-
time uncertainty principle does not say the atom can violate energy conservation by ∆E ∼ ℏ/∆t.
It instead says that the photons already arrived with an energy uncertainty of ∆E ∼ ℏ/∆t. This
preexisting uncertainty is simply transferred to the atom.
As we’ll see below, Fermi’s golden rule is very useful for treating the absorption or emission of
light, but many processes require us to go to higher order in perturbation theory. For instance,
two-photon absorption or emission, and photon scattering are second order.
                                                                                                 (2)
  • We assume the perturbation is time-independent and integrate our previous expression for cn (t)
    to find
                                Z t                          ′
                                                                  !
                  (2)       1          ′
                                         X
                                            iωnk t′   eiωki t − 1
                cn (t) =            dt     e                        ⟨n|H1 |k⟩⟨k|H1 |i⟩
                         (iℏ)2 0                         iωki
                                         k
                                            iωni t
                                                    − 1 eiωnk t − 1

                            1 X 1          e
                       =                                −               ⟨n|H1 |k⟩⟨k|H1 |i⟩.
                         (iℏ)2      iωki      iωni             iωnk
                                   k

  • There are now a few things we could do with this expression. If we’re interested in scattering,
    then we have a continuum of final states and we want to know the final state after the scattering
    happens, so we take t → ∞. As in Fermi’s golden rule, the first term in parentheses ends
    up giving a delta function conserving energy and a probability linearly increasing in time; the
    second term is just an irrelevant transient. (It is a consequence of abruptly turning on the
    perturbation at t = 0 starting from an unperturbed state; the proper way to do the calculation
    is to start at t = −∞ with an incoming wavepacket.)


  • Specifically, the result ends up being the same as Fermi’s golden rule, except that the relevant
    matrix element becomes
                                                   X ⟨n|H1 |k⟩⟨k|H1 |i⟩
                                 M = ⟨n|H1 |i⟩ +                            .
                                                             Ei − Ek
                                                    k

    The appearance of the energy denominator is similar to what we found in time-independent
    perturbation theory, and makes sense because the Hamiltonian is time-independent.

  • On the other hand, if the state space is discrete, or the perturbation is time-dependent in a
    nontrivial way, such as a laser pulse we turn on and off, then we need to go back to the original
                    (2)
    expression for cn (t). It can be simplified, but the simplification we do depends on the context;
    we’ll give examples in a later section.

11.2    The Born Approximation
We apply time-dependent perturbation theory to scattering, first reviewing classical scattering.

  • In classical scattering, we consider a collimated beam of particles with momentum p parametrized
    by impact parameter b which hits a localized potential U (x) centered at the origin. The particles
    are scattered in the asymptotic direction n̂(b).

  • We define the differential cross section dσ/dΩ by

                                                        dσ
                                               dσ =        dΩ
                                                        dΩ
    where the left-hand side is an area in impact-parameter space; it is a function of θ and ϕ.

  • To convert a cross section to a count rate, we let J be the flux of incident particles and w be
    the total count rate of scattered particles. Then
                                                       Z
                                                             dσ
                                        w = Jσ, σ = dΩ
                                                             dΩ
    where σ is the total cross section, and the integral omits the forward direction.

  • For example, for hard-sphere scattering off an obstacle of radius r, the cross section is σ = πr2 .
    However, classically the total cross section is often infinite, as we count particles that are
    scattered even a tiny amount.

  • In the case of two-body scattering, we switch to the center-of-mass frame, with variables
                                                          m1 p2 − m2 p1
                                   r = x1 − x2 ,   p=                   .
                                                            m1 + m2
    The momentum p is simply chosen to be the conjugate momentum to r. It is the momentum
    of one of the particles in the center-of-mass frame.

  • In the case of two beams scattering off each other, with number density n1 and n2 and relative
    velocity v,                                     Z
                                        dw      dσ
                                             =     v dx n1 n2 .
                                        dΩ     dΩ


We now set up the same situation in quantum mechanics.

 • We split the Hamiltonian as H0 = p2 /2m and H1 = V (x). The perturbation is not time-
   dependent, but the results above hold just as well.

 • We take periodic boundary conditions in a cube of volume V = L3 with plane wave states |k⟩
   with wavefunctions
                                                      eik·x
                                     ψk (x) = ⟨x|k⟩ = √ .
                                                         V
   These are the eigenstates of H0 . We take the initial state to be |ki ⟩.

 • The first order transition amplitude to |k⟩ is

                    (1)       2 iωt/2 sin(ωt/2)                            ℏ 2
                   ck (t) = e                     ⟨k|U (x)|ki ⟩,     ω=      (k − ki2 ).
                             iℏ           ω                               2m
   We consider the rate of scattering into a cone of solid angle ∆Ω,
                                dw      X 2π
                                   ∆Ω =      ∆t (ω)|⟨k|U (x)|ki ⟩|2 ,
                                dΩ        ℏ2
                                            k∈cone

   where w is now interpreted as probability per time, corresponding to a classical count rate. The
   incident flux is also interpreted as a probability flux, J = ni vi = ℏki /mV .

 • For sufficiently long times t, we have
                                                       m
                                     ∆t (ω) ≈ δ(ω) =       δ(k − ki ).
                                                       ℏki
    Moreover, in the limit V → ∞, we have
                                                          Z ∞
                                     X           V
                                             →       ∆Ω         k 2 dk.
                                               (2π)3        0
                                    k∈cone


 • Plugging everything in and using the symmetric convention for the Fourier transform,

                    2π m 2 ∞                                              2
                                Z
              dσ                                      e (k − ki )|2 = 2πm |U
                  = 2               dk k 2 δ(k − ki )|U                 4
                                                                            e (kf − ki )|2
              dΩ    ℏ     ℏki    0                                     ℏ

   where kf ∥ k, and we have kf = ki by energy conservation. This is the first Born approximation.

 • If the potential U (x) has lengthscale a, then U  e (k) has scale 1/a. Hence Fermi’s golden rule
   applies for times t ≫ a/v where v is the velocity. Physically, we can understand this by looking
   at the initial state |k⟩. This state is unphysical because it has uniform momentum everywhere,
   including within the potential itself. By thinking of the quantum state as an ensemble of
   particles, the time a/v can be interpreted as the time needed for these transient, “unphysical”
   particles to get out of the way.

 • After a time t ≫ a/v, the evolved wavefunction U (t)|k⟩ will look like an energy eigenstate in
   a region of radius about tv about the origin, as we have reached a “steady state” of particles
   coming in and being scattered out. This lends some intuition for why scattering rates can be
   computed using energy eigenstates alone.


