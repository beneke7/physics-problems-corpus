---
id: "kevin-zhou-w3-p001"
source: "kevin-zhou"
native_id: "KZ-W3-P001"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-w3-p001"
topic: [Rezgések és hullámok, termodinamika]
subtopic: [hanghullámok, adiabatikus-folyamat, hullámsebesség]
math_tools: [differenciálszámítás, differenciálegyenletek]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/W3.txt"
source_url: "sources/kevin_zhou/site/handouts/W3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

## Feladat szövege

[3] Problem 1. In this problem, you’ll work through Newton’s slick derivation of the speed of sound.
    Instead of considering how parcels of gas move, we consider the force the gas exerts when squeezed.

      (a) In M4, we showed that the speed v of longitudinal waves in a spring of length L, mass M ,
          and spring constant obeys v 2 = kL2 /M . For a cylinder of gas of length L and area A, show
          that the effective spring constant is
                                                             dp
                                                   k = −A2      .
                                                             dV

     (b) Assuming the sound waves are adiabatic, use this to conclude that
                                                            γp
                                                     v2 =      .
                                                            ρ
           If each gas molecule has mass m, rewrite the result in terms of γ, T , and m.

    Next, we consider some limitations of this result.

        (c) In an ideal gas, we assume the particles are noninteracting: they pass right through each
            other. But for sound waves to propagate, adjacent packets of ideal gas must exert pressure
            on each other. How is this possible? Use this observation to estimate the maximum possible
            angular frequency of sound in a gas in terms of the number density n = N/V = p/kB T , the
            radius r of a gas molecule, and the speed of sound v.

     (d) Our analysis also breaks down if the pressure variations are no longer adiabatic. The rate of
         heat conduction in a gas with thermal conductivity kt across a surface of area A is
                                                  dQ        dT
                                                     = −Akt
                                                  dt        dx
           For a sound wave with angular frequency ω, show that the adiabatic approximation holds
           when ω ≪ pkB /mkt . Does this hold for audible sound in air, where kt ≈ 25 mW/(m · K)?

         Remark
         Phase shifts upon reflection for sound waves can be a bit tricky. Recall from W1 that a hard
         boundary for a transverse string wave y(x, t) sets y to zero. As a result, upon reflection, y
         flips sign, but vy = ∂y/∂t stays the same.

                                                      1
    Kevin Zhou                                                                Physics Olympiad Handouts

       When a sound wave hits a hard wall, the wall sets the displacement ξ(x, t) to zero. Then
       upon reflection, the displacement flips sign, while the pressure variation δP (x, t) ∝ ∂ξ/∂x
       stays the same. In standing waves, a hard wall is thus a node for ξ and an antinode for δP .
       Similarly, when sound waves in a tube reflect off an open end, the end sets δP to zero (since
       everything outside the tube has atmospheric pressure), so it flips sign. An open end is thus
       a node for δP and an antinode for ξ.

       The rule is always the same: whatever quantity gets fixed to zero by the boundary gets
       flipped in sign upon reflection, and for a standing wave, that quantity has a node at the
       boundary. But it’s confusing enough that several common high school textbooks get it wrong.
       Some even state, in their confusion, that “hard boundaries flip transverse waves but not
       longitudinal ones”, which is definitely not true in general.
