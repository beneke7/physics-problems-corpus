---
id: "kevin-zhou-w1-p011"
difficulty_level: 6
source: "kevin-zhou"
native_id: "KZ-W1-P011"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-w1-p011"
topic: [waves, mechanics]
subtopic: [bending-waves, standing-waves, beam-theory, dispersion]
math_tools: [differential-equations, numerical-methods]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/W1.txt"
source_url: "sources/kevin_zhou/site/handouts/W1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

[5] Problem 11. Some instruments, such as xylophones and marimbas, are made with rigid rods
    instead of strings. The equation that describes transverse vibrations is instead

                                              ∂2y      ∂4y
                                                  = −A
                                              ∂t2      ∂x4
   for a constant A that depends on the material and cross-sectional area.

     (a) For a xylophone bar of length L, find the standing wave solutions and their angular frequencies.
         For simplicity, pretend that the solutions are sinusoidal in space, and that the bar has free
         ends just like a string, even though this is not true in reality.

     (b) When the bar in part (a) is hit, a certain note is sounded. What is the length of the bar that
         makes a note one octave higher?

     (c) [A] ⋆ The actual boundary conditions for a free bar are

                                                 ∂2y   ∂3y
                                                     =     =0
                                                 ∂x2   ∂x3
         at the endpoints, and the solutions aren’t purely sinusoidal in space. Numerically compute
         the lowest few standing wave angular frequencies and compare them to those you found in
         part (a).

     (d) A guitar or piano string satisfies the wave equation with a small additional fourth-order term,

                                             ∂2y       2
                                                     2∂ y     ∂4y
                                                 = v      − A     .
                                             ∂t2      ∂x2     ∂x4
         Show that the standing wave frequencies are not linearly spaced, as they would be for an ideal
         string, but instead are slightly more spaced out. This effect is called inharmonicity. (Hint:
         the spatial profiles of the standing waves are still sinusoidal.)
        We perceived two notes to be “in tune” when the component frequencies in the notes line up
        with each other. But since the frequencies are more spread out than ideal harmonics, a piano
         feels more in tune when the fundamental frequencies are spread out a little bit more. This
        “stretch tuning” is significant and adds up to about an entire semitone across the piano!

                                                     6


Kevin Zhou                                                               Physics Olympiad Handouts

  Remark: Beam Theory

  Where does the strange fourth-order equation for transverse vibrations above come from?
  Since force is the derivative of energy, it’s easier to think about how the energy stored in a
  rigid rod differs from that of a string. When a string with tension T , mass per length λ, and
  length ℓ is plucked, giving it a transverse displacement y, then
                     kinetic energy             potential energy   T ∆ℓ  T y2
                                    ∼ λẏ 2 ,                    ∼      ∼ 2
                         length                      length          ℓ    ℓ
  where our expression for ∆ℓ comes from the p   Pythagorean theorem. As we know from M4,
                                       2
  the ratio of the coefficients gives ω , so ωℓ ∼ T /λ. For a general wave with wavenumber k,
  we would replace ℓ with 1/k above, giving ω ∝ k as expected.

  Now, a rod is characterized by a Young’s modulus Y , mass density ρ, length ℓ, width w, and
  vertical thickness h. If the transverse displacement is y, then
                      kinetic energy            potential energy
                                      ∼ ρẏ 2 ,                  ∼ Y (strain)2 .
                          volume                    volume
  The tricky part is understanding the strain. If you naively used the same logic as for the
  string, then all parts of the rod would be stretched, with typical strain (y/ℓ)2 . This is correct
  in the limit of large displacements, y ≫ h, where the rod’s thickness is negligible. But for
  small displacements, it’s an overestimate.

  As the rod is displaced vertically, it slightly shrinks horizontally. As a result, there is a
  “neutral line” in the middle of the rod that is neither stretched or compressed. Bonds above
   the line are stretched, and bonds below the line are compressed.

  The neutral line has radius of curvature R ∼ ℓ2 /y. Thus, the strain at the top and bottom
  of the rod is of order h/R ∼ hy/ℓ2 . Plugging this in gives
                                              s
                                                 Y h
                                          ω∼          .
                                                 ρ ℓ2

  Again, for a general wavenumber we would replace ℓ with 1/k, giving the ω ∝ k 2 scaling. For
  a derivation of this result by dimensional analysis, see section 9.2.3 of The Art of Insight.

  There’s another neat bit of physics we can get here. Consider a horizontal rod with one end
  fixed at a wall. What is the vertical deflection of the other end of the rod, due to its own
  weight? The gravitational and internal potential energy densities both have “reasonable”,
  power-law dependence on the deflection y. Thus, when their derivatives match, so that forces
  balance, their absolute values should match within an order of magnitude,
                elastic potential energy   gravitational potential energy
                                         ∼                                ∼ ρgy.
                         volume                       volume

                                                  7


   Kevin Zhou                                                             Physics Olympiad Handouts

      Solving for the deflection gives
                                                    ρgℓ4
                                                y∼
                                                    Y h2
      which is the fundamental result of Euler–Bernoulli beam theory. (For a proper derivation in
