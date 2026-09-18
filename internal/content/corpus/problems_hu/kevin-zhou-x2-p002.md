---
id: "kevin-zhou-x2-p002"
source: "kevin-zhou"
native_id: "KZ-X2-P002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-x2-p002"
topic: [kvantumfizika]
subtopic: [alagúteffektus, WKB-közelítés, alfa-bomlás]
math_tools: [integrálás, differenciálegyenletek]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/X2.txt"
source_url: "sources/kevin_zhou/site/handouts/X2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

## Feladat szövege

[4] Problem 2. In Gamow’s theory of alpha decay, alpha particles can escape from nuclei by quantum
    tunneling. The alpha particle is bound to the nucleus by a nuclear force, which we model as a finite
    square well, V (r) = −V0 for r < r1 , and repelled by the Coulomb force, V (r) = k(Ze)(2e)/r = α/r.
    The combination of the two creates a potential barrier the alpha particle must tunnel though. Let
    the alpha particle have mass m and energy E.

      (a) Using classical mechanics, calculate the time between collisions with the wall. This is also
          correct in quantum mechanics; one can take the wavefunction to be a wavepacket, which really
          does collide with the walls with the same frequency.

     (b) In quantum mechanics, each collision has an associated amplitude to escape by quantum
         tunneling. To compute this, recall from X1 that the WKB approximation states that the
         wavefunction picks up a phase eiθ , where
                                                     Z
                                                   1
                                                θ=     p dx.
                                                   ℏ
         Calculate θ by integrating from r1 to r2 , assuming that r1 ≪ r2 for simplicity. You should find
         that θ is a complex number, indicating the wavefunction exponentially decays in the barrier.
         (Hint: you will find a tricky integral, for which you should use a trigonometric substitution.)

      (c) Each time the particle hits the well, the amplitude that it escapes is proportional to eiθ , and
          the probability that it escapes is equal to the square of the amplitdue. Using this fact, write
          down an approximate expression for the timescale τ for decay to occur.

    This model is very rough, so the numeric and slowly varying prefactors should not be expected to
    be accurate. But the exponential dependence of the timescale
                                                            √     on the energy, which you should have
                                                           − Eg /E
    found is due to the tunneling probability scaling as e         for some constant Eg , is by far the
    most important piece, and it fits experimental results.

     (d) In nuclear fusion reactions in the Sun, the process above occurs in reverse: an incoming alpha
         particle (i.e. helium nucleus) needs to tunnel through the Coulomb barrier to fuse with another
         nucleus. The initial energy is Boltzmann distributed as e−E/kB T , so the fusion rate is
                                                Z        √
                                           Γ ∼ dE e− Eg /E e−E/kB T .

          The integrand is the product of a rapidly rising exponential and a rapidly falling exponential.
          Estimate the exponential part of the dependence of Γ on T .

                                                      3


    Kevin Zhou                                                               Physics Olympiad Handouts
