---
id: kevin-zhou-notes-phy-ex098
source: kevin-zhou-notes
native_id: "phy Example 098"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex098
topic: [quantum-mechanics]
subtopic: [scattering]
math_tools: [perturbation-theory, differential-equations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "14065-14357"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. A more nontrivial example is a trapped ion in a laser field. We let the ion have an
optical transition with creation operator σ+ . It experiences a harmonic potential in the trap, which
we can quantize to yield phonons, with annihilation operator b. The interaction Hamiltonian is
                                                                                      r
                  ℏΩ     i∆t −ikz(t)                        −iωm t   † iωm t              ℏ
        HI (t) =     σ− e e          + h.c., z(t) = zzp (be        +b e      ), zzp =        .
                   2                                                                    2mωm
For a typical trap, ωm ∼ MHz and zzp ∼ 10 nm for low-lying energy levels, which means we can
expand the exponential in the Lamb–Dicke parameter η = kzzp . At lowest order,

                                 ℏΩ
                      HI (t) =      σ− (ei∆t + ηbei(∆−ωm )t + ηb† ei(∆+ωm )t ) + h.c.
                                  2
and applying the same method as above gives the modified AC Stark shift

                                    ℏΩ2        η 2 ∆2

                                                          †
                       Heff (t) = −      1+2 2        2
                                                        (b b + 1/2) σz .
                                    4∆       ∆ − ωm

The new, O(η 2 ) term can dominate if ∆ ≈ ωm .


12     Scattering
12.1    Introduction
In the previous section, we considered scattering from a time-dependent point of view. In this
section, we instead solve the time-independent Schrodinger equation.

 • We consider scattering off a potential V (x) which goes to zero outside a cutoff radius r > rco .
   Outside this radius, energy eigenstates obey the free Schrodinger equation.

 • As argued earlier, if we feed in an incident plane wave, the wavefunction will approach a steady
   state after a long time, with constant probability density and current; hence it approach an
   energy eigenstate. Thus we can also compute scattering rates by directly looking at energy
   eigenstates; such eigenstates are all nonnormalizable.

 • We look for energy eigenstates ψ(x) which contain an incoming plane wave, i.e.

                               ψ(x) = ψinc (x) + ψscat (x),     ψinc (x) = eik·x .

     For large r, the scattered wave must be a spherical wave with the same energy as the original
     wave (i.e. same magnitude of momentum),
                                                        eikr
                                          ψscat (x) ∼        f (θ, ϕ).
                                                         r
     The function f (θ, ϕ) is called the scattering amplitude.

 • Now, if we wanted ψscat to be an exact eigenstate for r > rco , then f would have to be constant,
   yielding an isotropic spherical wave. However, the correction terms for arbitrary f are subleading
   in r, and we only care about the large r behavior.
     Similarly, the incoming plane wave eik·x isn’t an eigenstate; the correction terms are included
     in ψinc (x) and are subleading.

 • Next, we convert the scattering amplitude to a cross section. The probability current is
                                                 ℏ
                                            J=     Im(ψ ∗ ∇ψ).
                                                 m
     For the incident wave, Jinc = ℏk/m. For the outgoing wave,
                                                    ℏk |f (θ, ϕ)|2
                                          Jscat ∼                  r̂.
                                                    m      r2
     The area of a cone of solid angle ∆Ω at radius r is r2 ∆Ω, and hence
                                       dσ   r2 Jscat (Ω)
                                          =              = |f (θ, ϕ)|2
                                       dΩ       Jinc
     which is a very simple result.

 • We’ve ignored a subtlety above: the currents for the incident and scattered waves should interfere
   because J is bilinear. We ignore this because the incident wave has a finite area in reality, so it
   is zero for all angles except the forward direction. In the forward direction, the incident and
   scattered waves interfere destructively, as required by conservation of probability. Applying
   this quantitatively yields the optical theorem.


 • If a classical force never falls exactly to zero, then the total classical cross section essentially
   always diverges. This occurs because the total cross section is a bit of a pathological quantity;
   it counts any particle scattered through an arbitrarily small angle. A more physical view,
   advocated in this paper, is that such potentials form a “shadow” behind them containing no
   particles, and the shadow’s area gets arbitrarily large as we move away from the scatterer.
 • By contrast, in quantum mechanics these cross sections can become finite; for instance, Coulomb
   potential’s cross section remains infinite, but the Yukawa potential’s becomes finite. We can
   think about this in a few ways. Mathematically, it’s possible because an arbitrarily small
   classical push translates to an arbitrarily small scattering amplitude, plus a high amplitude
   for continuing exactly in the forward direction. In terms of the “shadow” picture, it’s because
   waves can tunnel/diffract into the shadow, so that it doesn’t have to grow infinitely large.
Note. Typical length scales for electrons.
 • The typical wavelength of light emitted from hydrogen transitions is
                                    
                                        −7
                                    10 m
                                                          SI,
                                λ ∼ 1/α                    atomic
                                    
                                          2
                                      4π/α m ∼ (3 eV) −1   natural.

 • The Bohr radius quantifies the size of an atom, and is
                                     
                                              −11 m
                                     5 × 10
                                                               SI,
                               a0 ∼ 1                           atomic,
                                     
                                       1/αm ∼ (4 keV)−1         natural.
                                     

 • The electron Compton wavelength is the scale where pair production can occur, and is
                                  
                                           −13 m
                            λc    4 × 10
                                                          SI,
                                ∼ α                        atomic,
                            2π   
                                    1/m ∼ (0.5 MeV)   −1   natural.

 • The classical electron radius is the size of an electron where the electrostatic potential energy
   matches the mass, i.e. the scale where QED renormalization effects become important. It is
                                      
                                               −15 m
                                      3 × 10
                                                             SI,
                                re ∼ α    2                   atomic,
                                      
                                      
                                        α/m ∼ (60 MeV)    −1  natural.
    It is also the length scale for Thomson scattering.
Note. Examples of the scattering of radiation.
 • Low-frequency elastic scattering is known as Rayleigh scattering.
 • High-frequency elastic scattering, or elastic scattering off a nonrelativistic free electron, is known
   as Thomson scattering. If the frequency is high enough to require relativistic corrections, it
   becomes Compton scattering, which is described by the Klein–Nishina formula.
 • Raman scattering is the inelastic scattering of photons by matter, which typically is associated
   with inducing vibrational excitation or deexcitation in molecules.


12.2    Partial Waves
We now focus on the case of a central force potential.

  • Solutions to the Schrodinger equation separate,

                                           ψkℓm (x) = Rkℓ (r)Yℓm (θ, ϕ).

    The quantum number k parametrizes the energy by E = ℏ2 k 2 /2m. It is the wavenumber of the
    incident and scattered waves far from the potential, i.e. Rkl (r) ∝ eikr .

  • Defining ukℓ (r) = rRkℓ (r), the radial Schrodinger equation is

             1 d       2 dRkℓ
                     r          + k 2 Rkℓ (r) = W (r)Rkℓ (r), u′′kℓ (r) + k 2 ukℓ (r) = W (r)ukℓ (r)
            r2 dr         dr

    where
                                                     ℓ(ℓ + 1) 2m
                                          W (r) =            + 2 V (r).
                                                        r2    ℏ
  • Therefore, the general solution of energy E is
                                            X
                                    ψ(x) =     Aℓm Rkℓ (r)Yℓm (θ, ϕ).
                                                   ℓm

    Our next task is to find the expansion coefficients Aℓm to get a scattering solution.

  • In the case of the free particle, the solutions for the radial wavefunction Rkℓ are the spherical
    Bessel functions jℓ (kr) and yℓ (kr), where
                                      1                              1
                           jℓ (ρ) ≈     sin (ρ − ℓπ/2) ,   yℓ (ρ) ≈ − cos(ρ − ℓπ/2)
                                      ρ                              ρ
    for ρ ≫ ℓ, and the y-type Bessel functions are singular at ρ = 0.

  • Since the incident wave eik·x describes a free particle, it must be possible to write in terms of
    the j-type Bessel functions. One can show
                                             X
                                                            ∗
                                  eik·x = 4π    iℓ jℓ (kr)Yℓm (k̂)Yℓm (r̂).
                                                   ℓm

    Next, using the addition theorem for spherical harmonics,
                                                       4π X ∗
                                      Pℓ (cos γ) =           Y (k̂)Yℓm (r̂)
                                                     2ℓ + 1 m ℓm

    where γ is the angle between k and r, we have
                                        X
                                eik·x =    iℓ (2ℓ + 1)jℓ (kr)Pℓ (cos γ).
                                               ℓ


  • Next, we find the asymptotic behavior of the radial wavefunction Rkℓ (r) for large r. If the
    potential V (r) cuts off at a finite radius r0 , then the solutions are Bessel functions of both the
    j and y-type, since we don’t care about the region r < r0 , giving ukℓ (r) ∼ e±ikr .


 • If there is no sharp cutoff, parametrize the error as ukℓ (r) = eg(r)±ikr , giving

                                           g ′′ + g ′2 ± 2ikg ′ = W (r).

    We already know the centrifugal term alone gives Bessel functions, so we consider the case
    where the potential dominates for long distances, V (r) ∼ 1/rp where 0 < p < 2. Taking the
    leading term on both sides gives g(r) ∼ 1/rp−1 , so the correction factor g goes to zero for large
    r only if p > 1. In particular, the Coulomb potential is ruled out, as it gives logarithmic phase
    shifts ei log(kr) . This can also be shown using the first-order WKB approximation.

 • Assuming that V (r) does fall faster than 1/r, we may write
                                                     sin(kr − lπ/2 + δℓ )
                                          Rkℓ ∼
                                                             kr
    for large r. To interpret the phase shift δℓ , note that we would have δℓ = 0 in the case of
    a free particle, by the expansion of jℓ (kr). Thus the phase shift tells us how the potential
    asymptotically modifies radial phases.

Finally, we combine these ingredients to get our desired incident-plus-scattering states.

 • We write the general solution as
                                                     X
                                      ψ(x) = 4π           iℓ Aℓm Rkℓ (r)Yℓm (r̂).
                                                     ℓm

    Subtracting off a plane wave, we have
                                       X h                              i
                                                                  ∗
                        ψscat (x) = 4π  iℓ Aℓm Rkℓ (r) − jℓ (kr)Yℓm (k̂) Yℓm (r̂).
                                         ℓm

 • For large r, the quantity in square brackets can be expanded as the sum of incoming and
   outgoing waves e−ikr /r and eikr /r, and we only want an outgoing component, which gives
                                                             ∗
                                                Aℓm = eiδℓ Yℓm (k̂).

    Substituting this in and simplifying, we have

                           eikr X iδℓ        ∗                eikr X
          ψscat (x) ∼ 4π         e sin(δℓ )Yℓm (k̂)Yℓm (r̂) =       (2ℓ + 1)eiδℓ sin(δℓ )Pℓ (cos θ)
                            kr                                 kr
                               ℓm                                           ℓ

    where we used the addition theorem for spherical harmonics and set k̂ = ẑ.

 • The above result is known as the partial wave expansion. It gives the scattering amplitude
                                              1X
                                 f (θ, ϕ) =     (2ℓ + 1)eiδℓ sin(δℓ )Pℓ (cos θ).
                                              k
                                                 ℓ

    There is no dependence on ϕ and hence no angular momentum in the z-direction because the
    problem is symmetric about rotations about ẑ. Instead the scattered waves are parametrized
    by their total angular momentum ℓ. The individual terms are m = 0 spherical harmonics, and
    are called the s-wave, the p-wave, and so on. Each of these contributions are present in the
    initial plane wave and scatter independently, since L2 is conserved.


 • The differential cross section has interference terms, but the total cross section does not due to
   the orthogonality of the Legendre polynomials, giving
                                             4π X
                                       σ=         (2ℓ + 1) sin2 δℓ .
                                             k2
                                                  ℓ

    This is the partial wave expansion of the total cross section.

 • For any localized potential with lengthscale a, then when ka ≲ 1, s-wave scattering (ℓ = 0)
   dominates and the scattered particles are spherically symmetric. To see this, note that the
   centrifugal potential is equal to the energy when

                                         ℓ(ℓ + 1)ℏ2       ℏ2 k 2
                                                    = E =
                                           2ma2            2m
    which has solution ℓ ≈ ka. Then for ka ≲ 1 the particle cannot classically reach the potential
    at all, so it has the same phase as a free particle and hence no phase shift.

 • In reality, the phase shift will be small but nonzero for ka > 1 because of quantum tunneling,
   but drops off exponentially to zero. In the case where the potential is a power law (long-ranged),
   the phase shifts instead drop off as powers.

 • In many experimental situations, s-wave scattering dominates (e.g. neutron scattering off nuclei
   in reactors). In this case we can replace the potential V (r) with any potential with the same
   δ0 . A common and convenient choice is a δ-function potential.

 • We can also import some heuristic results from our knowledge of Fourier transforms, though
   the partial wave expansions is in Legendre polynomials instead. If the scattering amplitude
   is dominated by terms up to ℓcutoff , the maximum angular size of a feature is about 1/ℓcutoff .
   Moreover, if the phase shifts fall off exponentially, then the scattering amplitude will be analytic.
   Otherwise, we generally get singularities in the forward direction.

 • Each scattering term σℓ is bounded by (4π/k 2 )(2ℓ + 1). This is called the unitarity bound; it
   simply says we can’t scatter out more than we put in.

