---
id: "kevin-zhou-e1-ex003"
source: "kevin-zhou"
native_id: "KZ-E1-EX003"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e1-ex003"
topic: [electrostatics]
subtopic: [gauss-law, continuous-charge-distributions, symmetry]
math_tools: [integral-calculus, vector-calculus]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E1.txt"
source_url: "sources/kevin_zhou/site/handouts/E1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Example 3

  Suppose the region 0 < x < d has charge density −ρ, and the region −d < x < 0 has charge
  density ρ. Find the electric field everywhere.

  Solution
  By translational symmetry, the field always points along x̂ and only depends on x, E(r) =
  E(x) x̂. By applying the integral form of Gauss’s law to a rectangular prism, with one side
  at xl and another at xr , we have
                                   1 xr                     1 x
                                     Z                        Z
                E(xr ) − E(xl ) =        ρ(x) dx, E(x) =          ρ(x) dx + E0 .
                                  ϵ0 xl                    ϵ0 0
  Since the divergence of E(r) is just ∂E(x)/∂x, this clearly satisfies the differential form of


                                                      3


    Kevin Zhou                                                                Physics Olympiad Handouts



       Gauss’s law. To fix the undetermined constant E0 , we could demand the field be zero on
       both sides of the charge distribution, motivated by symmetry. Then we have
                                                 
                                                 d − x 0 < x < d,
                                             ρ 
                                    E(x) =     × d + x −d < x < 0,
                                            ϵ0 
                                                   0      elsewhere.
                                                 


       Example 4

       Find the electric field of a spherically symmetric charge density ρ(r).

       Solution
       By spherical symmetry, the field always points radially and only depends on r, E(r) = E(r) r̂.
       By applying the integral form of Gauss’s law to a sphere of radius r,

                                  1 r ′                           1 1 r ′ ′2 ′
                                     Z                                 Z
                         2                     ′2   ′
                      4πr E(r) =         dr 4πr ρ(r ), E(r) =             dr r ρ(r ).
                                  ϵ0 0                           ϵ0 r2 0

       Let’s check that this indeed satisfies the differential form of Gauss’s law, using the divergence
       in spherical coordinates. For any vector field F = Fr r̂ + Fθ θ̂ + Fφ φ̂, the divergence is

                                    1 ∂(r2 Fr )      1 ∂                     1 ∂Fφ
                           ∇·F=                 +            (Fθ sin θ) +            .
                                    r2 ∂r         r sin θ ∂θ              r sin θ ∂φ

       Since E only has a radial component, Er = E(r), we quickly recover the desired result,
                                                   Z r
                             1 ∂(r2 E(r))    1 ∂                       r2 ρ(r)   ρ(r)
                    ∇·E= 2                = 2          dr′ r′2 ρ(r′ ) = 2      =      .
                             r     ∂r       r ϵ0 ∂r 0                   r ϵ0      ϵ0
