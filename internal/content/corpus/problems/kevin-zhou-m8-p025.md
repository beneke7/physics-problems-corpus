---
id: "kevin-zhou-m8-p025"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-M8-P025"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m8-p025"
topic: [mechanics]
subtopic: [oscillations, nonlinear-oscillations, perturbation]
math_tools: [calculus, differential-equations]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M8.txt"
source_url: "sources/kevin_zhou/site/handouts/M8.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

[3] Problem 25. In P1, you found a general expression for the period of a pendulum oscillating with
    amplitude θ0 in terms of an integral, then approximated the integral for θ0 ≪ 1 to find

                                                        θ02


                                           ω = ω0 1 −       + O(θ0 )

                 p
    where ω0 = g/L. In this problem, we will show a different way to get the same answer, by solving
    the equation of motion approximately. We write the solution θ(t) as a series in θ0 . The overall
    solution is of order θ0 , and the corrections only depend on θ02 , so we can write

                                   θ(t) = θ0 f0 (t) + θ03 f1 (t) + θ05 f2 (t) + . . .

    where all the functions fi (t) are of order 1. Then we plug this expansion into Newton’s second law,
    θ̈ + ω02 sin θ = 0, and expand it out order by order in θ0 .

     (a) A naive first guess is to set f0 (t) so that it cancels precisely the order θ0 terms in this equation,
         then set f1 (t) to cancel the order θ03 terms, and so on. Using this guess, show that

                                                                             ω f 2 3
                                        f¨0 + ω02 f0 = 0,      f¨1 + ω02 f1 = 0 0

         where the first equation has solution f0 (t) = cos(ω0 t).

    Unfortunately, this decomposition is not very useful. The problem is that two things are going on
    at once: the oscillations are not quite sinusoidal, and they have an angular frequency lower than
    ω0 . The expansion we’ve done would be useful if we only had the first effect, because then f1 (t)
    would just capture the small, non-sinusoidal corrections to f0 (t). But our method can’t account


    for the frequency shift; by construction, f0 (t) always oscillates at angular frequency ω0 . Over time,
    the real oscillation θ(t) gets out of phase with f0 (t). This manifests itself as a “secular growth” in
    f1 (t), i.e. it increases in magnitude every cycle until it has a huge value, of order 1/θ02 , and our
    perturbative expansion breaks down.

      (b) Write the right-hand side of the differential equation for f1 (t) as a sum of sinusoids, and show
          that it contains a term proportional to cos(ω0 t). This resonantly drives f1 (t), causing the
          secular growth.

      (c) We can salvage our perturbative expansion using the method of “renormalized” frequencies.
          We impose by fiat that f0 (t) oscillates at the true angular frequency, letting

                                      f¨0 + ω 2 f0 = 0,   ω = ω0 (1 − c θ02 + O(θ04 ))

          for a constant c. Because of this choice, the differential equation for f1 (t), which contains all
          terms at order θ03 , will be altered. The correct choice of ω is precisely the one for which this
          eliminates the secular growth of f1 (t). Using this idea, show that c = 1/16.

    If you keep going, you’ll find the next term f2 (t) still has secular growth. We can remove it by
    having both f0 (t) and f1 (t) oscillate at angular frequency ω0 (1 − θ02 /16 + c′ θ04 ), where c′ is chosen to
    cancel the secular growth of f2 (t). In this way, the frequency can be found to any order in θ02 . (This
    technique is called the method of strained coordinates. It’s an example of multiple-scale analysis.)
