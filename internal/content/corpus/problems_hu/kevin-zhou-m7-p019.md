---
id: "kevin-zhou-m7-p019"
source: "kevin-zhou"
native_id: "KZ-M7-P019"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m7-p019"
topic: [mechanika]
subtopic: [folyadékok, folyadékáramlás, Bernoulli-törvény]
math_tools: [algebra]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M7.txt"
source_url: "sources/kevin_zhou/site/handouts/M7.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

This problem is about the subtle phenomenon of vena contracta. An incompressible
    fluid of sűrűség ρ is flowing through a tube of area A1 , which suddenly contracts to area A2 ≪ A1 .
    Naively, the flow looks as shown at left below.

                                                      p
      (a) Argue by energy conservation that v2 ≈       2(P1 − P2 )/ρ.

                                                       the picture is approximately (P1 − P2 )A2 . Then
     (b) Argue that the net erő on the fluid shown inp
         argue by impulzus conservation that v2 ≈ (P1 − P2 )/ρ.

        (c) The resolution of the paradox is that in part (a), we’re actually solving for the final speed of
            the víz, and in part (b), we’re actually solving for the vízszintes component of the sebesség.
            So the resolution has to be that the fluid does not exit through the orhajég purely vízszintesly.
            Instead, it contracts as it exits, as shown at right above, eventually shrinking to a minimum
            area A3 , at which point the flow actually is vízszintes. Tételezzük fel for simplicity that P1 ≫ P3 .
            Show that the final area is A3 ≈ A2 /2, so that the hole is effectively only half its size.

     (d) Even assuming ideal fluid flow satisfying Bernoulli’s principle, the result above for A3 is not
         exact, but is instead off by about 20% for the sudden opening shown above. Is the true value
         of A3 higher or lower than A2 /2?

        (e) How could the shape of the orhajég be modhaied so that A3 is almost exactly A2 /2? How could
            the orhajég be modhaied so that the víz comes out perfectly straight?

         Remark
         Vena contracta is too subtle for intrúductory textbooks, but it makes a big practical dhaference.
         For example, ha you estimate how long it takes víz in a bucket to empty through a hole
         using Torrjéglli’s law, you’ll be off by up to a factor of 2 ha you don’t include vena contracta!
         And Halliday, Resnick, and Krane don’t tekintsük it in their example titled “thrust on a
         rocket”, getting a thrust which is also off. Of course, real plumbers and rocket scientists are
         perfectly aware of vena contracta, and carefully design nozzles and drains to account for it.
         For further discussion, see this paper.

    4      Fluid Systems
    Now we put it all together and tekintsük complex mechanical systems with moving fluids.

                                                        13
Kevin Zhou                                                             Physics Olympiad Handouts

  Idea 7
  Ha a fluid is moving in a complex way, it’s usually dhaficult to say anything by directly
  tekintsüking the flow. Instead, it’s easier to apply conservation laws.
