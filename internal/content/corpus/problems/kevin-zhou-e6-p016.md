---
id: "kevin-zhou-e6-p016"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-E6-P016"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e6-p016"
topic: [electromagnetism]
subtopic: [ac-circuits, rc-filters, frequency-response, signal-processing]
math_tools: [complex-numbers, algebra]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E6.txt"
source_url: "sources/kevin_zhou/site/handouts/E6.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

An alternating voltage V0 cos ωt is applied to the terminals at A. The terminals at
    B are connected to an audio amplifier of very high input impedance. (That is, current flow into the
    amplifier is negligible.)
                                       A                        B
                                             R

                                        V0            C     V1




    This circuit is the most primitive of “low-pass” filters.
      (a) Calculate the “gain” ratio |Ṽ1 |/V0 in this filter. Show that for sufficiently high frequencies,
          the signal power is reduced by a factor of 4 for every doubling of the frequency.
     (b) Design a low-pass filter without using a capacitor.
      (c) Design a high-pass filter.
     (d) Design a stronger low-pass filter, i.e. one which reduces the signal power by a greater factor
         for every doubling of the frequency.
      (e) Design a band-pass filter, which suppresses both low and high frequencies, but has a constant
          gain for a wide range of medium frequencies. (It’s okay if the constant gain is less than 1, as
          we can just pass the output through an amplifier.)
      (f) Design a notch filter, which suppresses a very small range of frequencies, while letting all other


                    01@
          frequencies through.
