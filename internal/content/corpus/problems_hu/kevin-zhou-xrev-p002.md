---
id: "kevin-zhou-xrev-p002"
source: "kevin-zhou"
native_id: "KZ-XRev-P002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-xrev-p002"
topic: [statisztikus-fizika, folyadékmechanika]
subtopic: [diffúzió, mozgékonyság, Einstein-reláció, termikus egyensúly]
math_tools: [vektoranalízis, differenciálegyenletek]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/XRev.txt"
source_url: "sources/kevin_zhou/site/handouts/XRev.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

## Feladat szövege

[3] Problem 2. Let n be the local density of a gas of particles. If this density is nonuniform, it will
    tend to be smoothed out by diffusion, which produces a particle current

                                                  J = −D ∇n

    with units of particles per second per unit area. This is a continuity equation, as explained in T2,
    and D is called the diffusion coefficient. In addition, we know from M7 and T1 that each particle
    in such a gas will experience a drag force from the others. As a result, when a constant force F is
    applied to one, its terminal velocity satisfies F = µv.

      (a) Suppose the particles are placed inside a potential V (r). Write down the contribution to the
          particle current due to the resulting force, neglecting diffusion.

     (b) In thermal equilibrium, the particle current produced by the force, which pulls the particles
         to lower potential, balances the particle current produced by diffusion, which spreads them
         out. Assuming the temperature is T , find a relation between D and µ.

         Remark
         The result of problem 2 is called the Einstein relation, and is one of the four major
         results Einstein derived in his “annus mirabilis” of 1905, the others being special rela-
         tivity and E = mc2 , and explaining the photoelectric effect with photons. So why is
         this result so important? It’s because at the time, it was not yet completely accepted
         that matter was made of atoms. As you saw in T1, the size of a single atom often
         drops out of kinetic theory calculations. At the time, many took this to mean that
         atoms were a fictitious calculational tool, like how one does integrals by summing over
         intervals of length ∆x, then gets a result independent of this fiducial length by taking ∆x → 0.

         But doesn’t the number of atoms N appear all the time in basic thermodynamics, like the
         ideal gas law? Yes, but always in the combination nR = N kB . Thus, information about
         the size of a single atom is equivalent to information about kB . Einstein’s relation is useful
         because it explicitly gives us kB in terms of the separately directly measurable quantities D,
         µ, and T . It was one of the first unique, quantitative predictions of kinetic theory.

                                                        1


    Kevin Zhou                                                                Physics Olympiad Handouts
