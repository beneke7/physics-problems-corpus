---
id: "kevin-zhou-e4-ex002"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-E4-EX002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e4-ex002"
topic: [electromagnetism]
subtopic: [capacitance, energy-conservation, electromechanical-energy]
math_tools: [calculus]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E4.txt"
source_url: "sources/kevin_zhou/site/handouts/E4.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 2

       A parallel plate capacitor with separation d and area A is attached to a battery of voltage V .
       One plate moves towards the other with uniform speed v. Verify that energy is conserved.

        Solution
       The capacitance is C = Aϵ0 /d. The power supplied by the battery is

                                                           dQ     dC
                                        Pbatt = IV = V        =V2    .
                                                           dt     dt
        On the other hand, the rate of change of the energy stored in the capacitor is

                                             d 1       2    1 dC
                                     Pcap =        CV      = V2     .
                                            dt 2            2    dt

       At first glance, there seems to be a problem. But then we remember that there is an attractive
       force between the plates, so the plates do work on whatever is moving them together,
                                            QE    QV    1    v 1 dC
                            Pmech = F v =      v=    v = CV 2 = V 2    .
                                             2    2d    2    d 2    dt
       where E is the electric field inside the capacitor. Thus, Pbatt = Pcap + Pmech as required.

       Technically there’s energy in the magnetic field too, but it’s smaller than the electric field
       energy by v 2 /c2 , and thus negligible unless you’re moving the plates so fast that relativity
       comes into play. Most problems in this problem set ignore such relativistic effects.
