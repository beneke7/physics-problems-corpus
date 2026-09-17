---
id: "kevin-zhou-erev-p028"
source: "kevin-zhou"
native_id: "KZ-ERev-P028"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-erev-p028"
topic: [electromagnetism]
subtopic: [charge-conjugation, parity, time-reversal, poynting-vector, theta-term]
math_tools: [vector-algebra]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/ERev.txt"
source_url: "sources/kevin_zhou/site/handouts/ERev.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

[A] Electromagnetism is symmetric under charge conjugation C, parity P , and time
    reversal T . Explicitly, this means the following: suppose there are charge and current densities
    ρ(r, t) and J(r, t), which then produce fields E(r, t) and B(r, t). A test charge q is acted on by
    these fields, taking a path x(t). Under one of these symmetry transformation, all of these quantities
    can be changed, but the new fields should still obey Maxwell’s equations, and the path of the test
    charge should still obey Newton’s second law, ma = q(E + v × B).

      (a) Under charge conjugation, the signs of all charges are flipped. What are the new charge and
          current densities ρ′ (r, t) and J′ (r, t)? What are the new fields E′ (r, t) and B′ (r, t)? The path
          of the test charge is still x′ (t) = x(t). Verify it still obeys Newton’s second law.

      (b) Under time reversal, everything at time t now occurs at time −t. For example, ρ′ (r, t) =
          ρ(r, −t). Verify the test charge’s new path still obeys Newton’s second law.

      (c) Under parity, everything at position x is mapped to −x. For example, the new path of the
          test charge is x′ (t) = −x(t). Verify its new path still obeys Newton’s second law.

      (d) The Poynting vector S = (E × B)/µ0 describes the energy flow in the electromagnetic field.
          How does it transform under C, P , and T ?

      (e) In quantum field theory, one important but subtle quantity is the “theta term”,
                                          Z    Z
                                             dt dr E(r, t) · B(r, t)

          where the integrals are over all time and all space. Does the theta term stay the same under
          C, or P , or T ? How about the combined transformations CP and CP T ?
