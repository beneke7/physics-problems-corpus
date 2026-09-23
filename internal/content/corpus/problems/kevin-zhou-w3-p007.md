---
id: "kevin-zhou-w3-p007"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-W3-P007"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-w3-p007"
topic: [optics]
subtopic: [polarization, interference, birefringence]
math_tools: [complex-numbers]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/W3.txt"
source_url: "sources/kevin_zhou/site/handouts/W3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

[3] Problem 7. A simple polarizer contains many very thin, closely spaced wires. If the wires are
    vertical, they block vertical electric fields, allowing only horizontally polarized light to go through;
    this is a horizontal polarizer. One can similarly make diagonal and vertical polarizers.

      (a) Suppose that perfectly monochromatic, but unpolarized light is incident on a double slit. (In
          this case, assume “unpolarized” means that at each instant in time, the polarization of the
          light passing through each slit is the same, but over longer timescales that polarization can
          vary.) What does the intensity pattern on the screen look like?

      (b) Next, suppose a vertical polarizer is placed in front of one slit, and a horizontal polarizer is
          placed in front of the other slit. Now what does the intensity pattern look like?

        (c) Finally, we further modify the setup of part (b) by placing many diagonal polarizers, at 45◦
            to the vertical and horizontal, right in front of the screen. What does the intensity pattern
            on the screen look like now?

      (d) On an unrelated note, suppose we wish to rotate the polarization of linearly polarized light by
          using N ≫ 1 intermediate polarizers. What’s the best way to do this, and what’s the fraction
          of light that passes through the stack?

                                                           4


Kevin Zhou                                                                Physics Olympiad Handouts

  Idea 3
  For a plane wave propagating along the z-axis with general polarization, it’s useful to write

                                 E(z, t) = Re E0 ei(kz−ωt)

  where E0 is a complex two-component vector, describing both its amplitude and polarization.
  For example, if E0 = E0 x̂, the light wave is horizontally polarized, if E0 = iE0 x̂, it’s
  horizontally polarized
                       √ with a phase shifted by π/2, if E0 = E0 ŷ it’s vertically polarized, and
  if E0 = E0 (x̂ + ŷ)/ 2 it’s diagonally polarized.

  When linear polarizations are combined with a relative phase, the result√is circular (or more
  generally, elliptical) polarization. For example, when E0 = E0 (x̂ + iŷ)/ 2, we have

                               E0                                    E0
                   Ex (z, t) = √ cos(kz − ωt),         Ey (z, t) = − √ sin(kz − ωt)
                                2                                     2
  which is a circularly polarized light wave; the electric field at a fixed point rotates in a circle
  over time, and if one draws the electric field vectors in a line along k̂, they trace out a spiral.
  Birefringent materials, which have different indices of refraction in different directions, cause
  such phase shifts, and thus can convert linear polarizations into other polarizations.

  Example 3

  A plane wave with amplitude E0 = E0 x̂ enters a linear optical device, which does not absorb
  or reflect any energy.
                     √ When the plane wave exits the device, it has circular polarization,
  E0 = E0 (x̂ + iŷ)/ 2. What does the device do to light with vertical polarization?

  Solution
  Vertical polarized light√has to exit with circular polarization of the other handedness, i.e. with
  E0 = E0 eiθ (x̂ − iŷ)/ 2 for some unknown phase θ, because this is the only possibility
  consistent with energy conservation.

  To see this, note that the energy of a light wave is proportional to the time-averaged value
  of |E|2 , which is turn proportional to |E0 |2 . Since horizontal and vertical polarizations are
  orthogonal, they don’t interfere, so sending in both a horizontal and vertical light wave of
  amplitude E0 at the same time just doubles the input energy. This must also double the
  output energy, and indeed, under the above ansatz we have
                                             x̂ + iŷ x̂ − iŷ √
                                 x̂ + ŷ →      √    + √      = 2 x̂
                                                  2       2
  which indeed has double the energy of one wave by itself.

  The more general principle here is that, since x̂ and ŷ were orthogonal to each other, they
  must be mapped to two other unit vectors which are still orthogonal, as complex vectors.

                                                   5


    Kevin Zhou                                                                          Physics Olympiad Handouts

       That is indeed true, because

                                   (x̂ + iŷ)† (x̂ − iŷ) = x̂ · x̂ + i2 ŷ · ŷ = 0.

       Once we know what the device does to horizontally and vertically polarized light, we can
       find what it does to any polarization of light by superposition.
