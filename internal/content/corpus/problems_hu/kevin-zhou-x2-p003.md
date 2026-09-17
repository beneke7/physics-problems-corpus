---
id: "kevin-zhou-x2-p003"
source: "kevin-zhou"
native_id: "KZ-X2-P003"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-x2-p003"
topic: [kvantumfizika, relativitáselmélet]
subtopic: [fotonok kibocsátása és elnyelése, energia-impulzus megmaradása, atomi átmenetek, gamma-bomlás]
math_tools: [algebra]
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

[3] Problem 3. Consider the process by which an electron absorbs a single photon, e− + γ → e− .

      (a) Show that this process is forbidden by energy-momentum conservation. By time reversal,
          emission of a single photon should be forbidden as well. This is quite puzzling, since we already
          know of many processes where something like absorption or emission seems to happen.

     (b) Can an electron in an isolated atom absorb a single photon? If so, why doesn’t the reasoning
         in part (a) work? If not, how can atoms absorb photons at all, as described in X1?

      (c) Can an isolated nucleus emit single photons? If so, why doesn’t the reasoning in part (a)
          work? If not, how can gamma decay occur?

     (d) Can an isolated electron absorb or emit classical electromagnetic radiation? If so, why doesn’t
         the reasoning in part (a) work? If not, how can Thomson scattering (covered in E7) happen?

       Idea 4
       Radioactive decay is a memoryless process: in an infinitesimal time interval dt, any nucleus has
       a probability λ dt of decaying, regardless of its previous history. As a result, the probability
       that a nucleus remains undecayed, provided that it hadn’t decayed at t = 0, falls exponentially,

                                                  p(t) = e−λt .

       The mean lifetime of the nucleus is τ = 1/λ.

       If we have N0 ≫ 1 undecayed nuclei at time t = 0, the number of nuclei left is approximately

                                          N (t) ≈ N0 p(t) = N0 e−λt .

       The activity A(t) is the rate of decay events, and also falls exponentially,

                                                  dN (t)
                                         A(t) =          = λN0 e−λt .
                                                   dt
