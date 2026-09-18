---
id: kevin-zhou-notes-phy-ex099
source: kevin-zhou-notes
native_id: "phy Example 099"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex099
topic: [quantum-mechanics]
subtopic: [scattering]
math_tools: [calculus, differential-equations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "14358-14438"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Hard sphere scattering. We let
                                                  (
                                                   ∞ r<a
                                        V (r) =
                                                      0   r > a.

The radial wavefunction takes the form

                               Rkℓ (r) = cos(δℓ )jℓ (kr) − sin(δℓ )yℓ (kr)

for r > a, where δℓ is the phase shift, as can be seen by taking the r → ∞ limit. The boundary
condition Rkℓ (a) = 0 gives
                                                    jℓ (ka)
                                         tan(δℓ ) =         .
                                                    yℓ (ka)
First we consider the case ka ≪ 1. Applying the asymptotic forms of the Bessel functions,

                                                         (ka)2ℓ+1
                                sin(δℓ ) ≈ δℓ ≈ −                        .
                                                    (2ℓ − 1)!!(2ℓ + 1)!!


In particular this means the scattering is dominated by the s-wave, giving
                                                 4π
                                           σ = 2 (ka)2 = 4πa2
                                                 k
which is several times larger than the classical result σ = πa2 . Next we consider the case ka ≫ 1.
For terms with ℓ ≪ ka, using the asymptotic forms of the Bessel functions (this time for large
argument) gives
                                                           ℓπ
                                              δℓ = −ka + .
                                                            2
As ℓ approaches ka, the phase shifts go to zero, cutting off the partial wave expansion. Intuitively,
this is because when ka ≫ 1 the scattering is essentially classical, with the incoming wave acting
like a discrete particle. If a particle is scattered off a sphere of radius a, its angular momentum is
                                         L = pa sin θ ≤ ℏka.
The total cross section is
                                           ka
                                    4π X
                                  σ≈ 2   (2ℓ + 1)(1/2) ≈ 2πa2
                                    k
                                          ℓ=0
where we replaced the rapidly oscillating factor sin2 (δℓ ) with its average, 1/2. It is puzzling that
we get twice the classical cross section. Physically, the extra πa2 comes from diffraction around the
edge of the sphere which ‘fills in’ the shadow. This gives a sharp scattering peak in the forward
diffraction, formally the same as the central peak in light diffraction with a circular aperture.
Note. The optical theorem relates the total cross section to the forward scattering amplitude. For
central force potentials, we simply note that
                                          1X
                                  f (0) =     (2ℓ + 1)eiδℓ sin(δℓ ).
                                          k
                                                ℓ
Comparing this with the total cross section immediately gives
                                               4π
                                          σ=      Im(f (0)).
                                                k
If we expand f in a series, the optical theorem relates terms of different orders, since dσ/dΩ ∼ |f |2
but σ ∼ f . This makes an appearance in quantum field theory through ‘cut’ diagrams.
   The optical theorem can also be derived more generally by looking at the probability flux. By
conversation of probability, we must have
                                            Z
                                               J · dS = 0

over a large sphere. The flux J splits into three terms: the incident wave (which contributes zero
flux), the scattered wave (which contributes vσ), and the interference term,
               ℏ
                      ∗             ∗
        Jint = Im (ψscat ∇ψinc + ψinc ∇ψscat ) = vrRe f (θ, ϕ)∗ eik(x−r) x̂ + f (θ, ϕ)eik(r−x) r̂ .
               m
Integrating over a sphere of radius r, we must have
                                Z      Z
                                                  ikr(1−cos θ)
                      σ = r Re     dϕ sin θdθ e                f (θ, ϕ)(1 + cos θ)

in the limit r → ∞. Then the phase factor is rapidly oscillating, so the only contribution comes
from the endpoints θ = 0, π since there are no points of stationary phase. The contribution at θ = π
is zero due to the (1 + cos θ) factor, while the θ = 0 peak gives the desired result.


