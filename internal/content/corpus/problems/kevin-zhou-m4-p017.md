---
id: "kevin-zhou-m4-p017"
source: "kevin-zhou"
native_id: "KZ-M4-P017"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m4-p017"
topic: [mechanics]
subtopic: [damped-oscillations, driven-oscillations, resonance, complex-amplitudes]
math_tools: [complex-numbers, differential-equations, calculus]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M4.txt"
source_url: "sources/kevin_zhou/site/handouts/M4.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Analyzing a damped and driven harmonic oscillator.

     (a) Consider a damped harmonic oscillator which experiences a driving force F = F0 cos(ωt).
         Passing to complex variables, Newton’s second law is

                                               mẍ + bẋ + kx = F0 eiωt .

            If x(t) is a complex exponential, then we know that the left-hand side is still a complex
            exponential, with the same frequency. This motivates us to guess x(t) = A0 eiωt . Show that
            this solves the equation for some A0 .

     (b) Of course, the general solution needs to be described by two free parameters, to match the
         initial position and velocity. Argue that it takes the form

                                         x(t) = A0 eiωt + A+ eiω+ t + A− eiω− t

           where the ω± are the ones you found in problem 16.

        (c) After a long time, the “transient” A± terms will decay away, leaving the steady state solution

                                                    x(t) ≈ A0 eiωt

           which oscillates at the same frequency as the driving. The actual position is the real part,

                                               x(t) ≈ |A0 | cos(ωt − ϕ)

           where A0 = |A0 |e−iϕ . Evaluate |A0 | and ϕ.

     (d) Sketch the amplitude |A0 | and phase shiftpϕ as a function of ω. Can you intuitively see they
         take the values they do, for ω small, ω ≈ k/m, and ω large?

                                                        9


    Kevin Zhou                                                                Physics Olympiad Handouts

      (e) There are several distinct things people mean when they speak of “resonant frequencies”. Find
          the driving angular frequency ω that maximizes (i) the amplitude |A0 |, (ii) the amplitude of
          the velocity, and (iii) the average power absorbed from the driving force. (As you’ll see, these
          are all about the same when the damping is weak, so the distinction between these isn’t so
          important in practice.)
                                                                                                   p
