---
id: "kevin-zhou-p1-p031"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-P1-P031"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-p1-p031"
topic: [mechanics, relativity]
subtopic: [oscillations, periodic-motion, special-relativity]
math_tools: [calculus, differential-equations]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/P1.txt"
source_url: "sources/kevin_zhou/site/handouts/P1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

[5] Problem 31. A particle in a potential well.

     (a) Consider a particle of mass m and energy E with potential energy V (x), which performs
         periodic motion. Write the period of the motion in terms of a single integral over x.

     (b) Suppose the potential well has the form V (x) = V0 (x/a)n for even n > 0. If the period of
         the motion is T0 when it has amplitude A0 , find the period when the amplitude is A, by
         considering how the integral you found in part (a) scales with A.

        (c) Find a special case where you can check your answer to part (b). (In fact, there are two more
            special cases you can check, one which requires negative n and negative V0 , and one which
            requires V (x) to be replaced with its absolute value.)

     (d) Using a similar method to part (a), write down an integral over θ giving the period of a
         pendulum with length L in gravity g, without the small angle approximation. Using this,
         compute the period of the pendulum with amplitude θ0 , up to order θ02 . (This result was first
         published by Bernoulli, in 1749.)

        (e) ⋆ Part (d) is the kind of involved computation you might see in a graduate mechanics course.
            But if you think you’re really tough, you can go one step further. Consider a mass m oscillating
            on a spring of spring constant k with amplitude A. Calculate its period of oscillation up to
            order A2 , accounting for special relativity. (Concretely, assume that the spring force doesn’t
            change the rest mass m, and has a potential U = kx2 /2. In relativity, the
                                                                                     p force F = −dU/dx
            still obeys F = dp/dt, but now E = γmc2 and p = γmv, where γ = 1/ 1 − v 2 /c2 .)


    6      Multiple Integrals
    It’s also useful to know how to set up multiple integrals. This is fairly straightforward, though
    technically an “advanced” topic, so we’ll demonstrate it by example. For further examples, see
    chapter 2 of Wang and Ricardo, volume 1, or MIT OCW 18.02, lectures 16, 17, 25, and 26.

         Idea 9
         In most Olympiad problems, multiple integrals can be reduced to single integrals by symmetry.


  Example 17

  Calculate the area of a circle of radius R.
