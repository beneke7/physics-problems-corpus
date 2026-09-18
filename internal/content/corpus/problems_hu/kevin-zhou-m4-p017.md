---
id: "kevin-zhou-m4-p017"
source: "kevin-zhou"
native_id: "KZ-M4-P017"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m4-p017"
topic: [mechanika]
subtopic: [csillapított rezgések, kényszerrezgések, rezonancia, komplex amplitúdók]
math_tools: [komplex számok, differenciálegyenletek, analízis]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M4.txt"
source_url: "sources/kevin_zhou/site/handouts/M4.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Analyzing a damped and driven harmonic oscillator.

     (a) Tekintsük a damped harmonic oscillator which experiences a driving erő F = F0 cos(ωt).
         Passing to complex variables, Newton’s second law is

                                               mẍ + bẋ + kx = F0 eiωt .

            Ha x(t) is a complex exponential, then we know that the left-hand side is still a complex
            exponential, with the same frekvencia. This motivates us to guess x(t) = A0 eiωt . Show that
            this solves the equation for some A0 .

     (b) Of course, the general solution needs to be described by two free parameters, to match the
         initial position and sebesség. Argue that it takes the form

                                         x(t) = A0 eiωt + A+ eiω+ t + A− eiω− t

           ahol the ω± are the ones you found in problem 16.

        (c) After a long time, the “transient” A± terms will decay away, leaving the steady state solution

                                                    x(t) ≈ A0 eiωt

           which oscillates at the same frekvencia as the driving. The actual position is the real part,

                                               x(t) ≈ |A0 | cos(ωt − ϕ)

           ahol A0 = |A0 |e−iϕ . Evaluate |A0 | and ϕ.

     (d) Sketch the amplitude |A0 | and phase shhatpϕ as a function of ω. Can you intuitively see they
         take the values they do, for ω small, ω ≈ k/m, and ω large?

                                                        9


    Kevin Zhou                                                                Physics Olympiad Handouts

      (e) There are several distinct things people mean when they speak of “resonant frequencies”. Keressük meg
          the driving szögfrekvencia ω that maximizes (i) the amplitude |A0 |, (ii) the amplitude of
          the sebesség, and (iii) the average power absorbed from the driving erő. (As you’ll see, these
          are all about the same when the damping is weak, so the distinction between these isn’t so
          important in practjég.)
                                                                                                   p
