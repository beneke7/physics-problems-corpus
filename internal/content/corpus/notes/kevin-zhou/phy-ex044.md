---
id: kevin-zhou-notes-phy-ex044
source: kevin-zhou-notes
native_id: "phy Example 044"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex044
topic: [statistical-mechanics]
subtopic: [interacting-gases, virial-expansion]
math_tools: [cluster-expansion, partition-functions]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3951-4078"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Consider an ideal gas with N particles, where the particles have a general dispersion
relation H = H(|p|), such as relativistic particles. Remarkably, the ideal gas law still holds! To see
this, note that by the usual kinetic theory argument, the pressure of each particle is

                          dp e−H(p)/kB T px (∂H/∂px )     dp px ∂px (−kB T e−H(p)/kB T )
                        R                               R
       P V = ⟨px vx ⟩ =       R                       =        R                         = kB T.
                                dp e−H(p)/kB T                   dp e−H(p)/kB T

This result isn’t often mentioned in textbooks, though, because in the relativistic case we usually
consider a fixed chemical potential, not a fixed particle number. (Another way to see this is to note
that ∂F/∂V |T doesn’t depend on the dispersion relation, as the spatial integral in Z is trivial.)


3.5     Bose–Einstein Statistics
We now turn to bosonic quantum gases, with some motivational examples before the general theory.

Note. Calculating the density of states. For independent particles in a box with periodic boundary
conditions, the states are plane waves, leading to the usual 1/h3 density of states in phase space.
Integrating out position and momentum angle, we have
                                                     4πV 2
                                           g(k) =         k .
                                                    (2π)3

Changing variables to energy using dk = (dk/dE)dE, for a nonrelativistic particle we find
                                                            3/2
                                            V         2m
                                     g(E) = 2                      E 1/2 .
                                           4π         ℏ2

For a relativistic particle, the same procedure gives
                                               VE p 2
                                    g(E) =              E − m2 c4 .
                                             2π 2 ℏ3 c3
In particular, for massless particles, we get

                                                     V E2
                                           g(E) =              .
                                                    2π 2 ℏ3 c3
In general, we should also multiply by the number of spin states/polarizations.

Now we consider photons in blackbody radiation.

 • Using E = ℏω and the fact that photons are bosons with two polarizations, the partition
   function for photons in a mode of frequency ω is, neglecting vacuum energy,
                                                                              1
                               Zω = 1 + e−βℏω + e−2βℏω + . . . =                    .
                                                                          1 − e−βℏω
      Note that the number of photons is not fixed. We can imagine we’re working in the canonical
      ensemble, but summing over states of the quantum field. Alternatively, we can imagine we’re
      working in the grand canonical ensemble, where µ = 0 since photon number is not conserved;
      instead the photon number sits at a minimum of the Gibbs free energy. There are no extra
      combinatoric factors, involving which photons sit in which modes, because photons are identical.

 • In either case, the entire partition function is
                             Z ∞                        Z ∞
                                                     V
                    log Z =      dω g(ω) log Zω = − 2 3     dω ω 2 log(1 − e−βℏω ).
                              0                     π c 0

      The energy is                                         Z ∞
                                      ∂         Vℏ                           ω3
                                 E=−    log Z = 2 3                  dω
                                     ∂β        π c            0           eβℏω − 1
      where the integrand is the Planck distribution. Taking the high T limit then recovers the
      Rayleigh–Jeans law, from equipartition.


  • Now, to evaluate the integral, note that it has dimensions ω 4 , so it must produce 1/(βℏ)4 . Then
                                             E ∝ V (kB T )4
    which recovers the Stefan–Boltzmann law.
  • To get other quantities, we differentiate the free energy. One particularly important result is
                                                    E
                                                 p=
                                                   3V
    which is useful in cosmology. One way to derive the constant is to note that the pressure from
    kinetic theory depends on pv, and pv is twice the kinetic energy for a nonrelativistic gas, but
    equal to the kinetic energy for a photon gas. Thus pV = (1/2)(2E/3) for a photon gas.
  • By considering an isochoric change,
                                        dE
                                    dS =   ∝ V T 2 dT, S ∝ V T 3
                                         T
    where the constant is zero by the Third Law. Thus pV γ is invariant in adiabatic (entropy
    conserving) processes, where γ = 4/3.
  • Note that adiabatically expanding or contracting a photon gas must keep it in equilibrium, just
    like any other gas. This is simply because a photon gas can be used in a Carnot cycle, and if the
    gas were not in equilibrium at the end of each adiabat, we could extract more work, violating
    the second law.
  • Microscopically, the number of photons is conserved during adiabatic processes, and every
    photon redshifts by the same factor. This is because every photon has the same speed and
    hence bounces off the walls equally as often, picking up the same redshift factor every time.
    Since adiabatic processes preserve equilibrium, scaling the energies/frequencies in Planck’s law
    is exactly the same as scaling the temperature.

Note. There’s a key difference between a photon gas and a classical ideal gas in the ultrarelativistic
limit. Photons can be freely created and destroyed, corresponding to zero chemical potential. On
the other hand, when we talk about ideal gases, we usually imagine there’s a conserved particle
number N . An ultrarelativistic ideal gas obeys pV = N kB T by a generalization of the usual kinetic
theory argument, and E = 3N kB T by the equipartition theorem. Neither of these make sense for a
photon gas, where N is generally infinite, but the result pV = E/3 holds in both cases. Furthermore,
adiabatic processes work the same in both cases, since the relativistic Doppler shift is the same,
and photons are not created or destroyed in adiabatic expansion, so we have γ = 4/3 in both cases.
However, more detailed results will differ. For example, a photon gas doesn’t have a classical limit:
most of the energy comes from modes with frequency ∼ kB T , so that the typical mode occupancies
are of order 1, and the discreteness of the occupancy number is always apparent.
Note. Above, we’ve thought of every photon mode as a harmonic oscillator. To see this microscop-
ically, note that A is the conjugate momentum to E and the energy is
                                    1              1
                                H ∼ (E 2 + B 2 ) ∼ (E 2 + ω 2 A2 )
                                    2              2
where we worked in Coulomb gauge. This is then formally identical to a harmonic oscillator. The
reason that E and B are in phase, rather than the usual 90◦ out of phase, is that B is a derivative
of the true canonical variable A.


Note. Historically, Planck was the first to suggest that energy could be transferred between matter
and radiation only in integer multiples of ℏω. It was Einstein who made the further suggestion
that energy in radiation itself should always come in integer multiples of ℏω, in particles called
photons. This seems strange to us today because we used the idea of photons to derive Planck’s
law. However, Planck himself did not use equilibrium statistical mechanics. Instead, he attempted
to solve a kinetic equation and find equilibrium in the long-time limit, e.g. by formulating an
H-theorem. This was a much harder task, which required an explicit theory of the interaction of
matter and radiation. Incidentally, Boltzmann derived the Stefan–Boltzmann law in the 1870s by
using blackbody radiation as the working fluid in a Carnot cycle.

