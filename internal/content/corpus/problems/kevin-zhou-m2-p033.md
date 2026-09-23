---
id: "kevin-zhou-m2-p033"
difficulty_level: 3
source: "kevin-zhou"
native_id: "KZ-M2-P033"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m2-p033"
topic: [mechanics]
subtopic: [elasticity, bending, scaling]
math_tools: [dimensional-analysis]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M2.txt"
source_url: "sources/kevin_zhou/site/handouts/M2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 16: IPhO 2022 3A

       A thin piece of spaghetti of diameter d is balanced horizontally from its middle.




       It can have a length ℓ ≫ d before it snaps under its own weight. How does ℓ scale with d?

       Solution
       Let the spaghetti rod have density ρ, and consider its right half. There must be a vertical
       normal force F ∼ ρd2 ℓ to balance the weight. This vertical force is transmitted through
       the rod by a shear stress (i.e. an internal force per area, perpendicular to the rod) of order
       σs ∼ F/A ∼ ρℓ. Each piece of the rod exerts such a shear stress on its neighbors, just like
       how pieces of a string exert tensions on their neighbors.

       Now consider torques on the right half of the rod, about the pivot point. The torque
       τ ∼ ρd2 ℓ2 of the rod’s weight has to be balanced by forces from the other half of the rod.
       Vertical forces don’t work, since they don’t provide any torque about the pivot. Instead, the
       torque is supplied by a horizontal compression force at the bottom, and a horizontal tension
       force at the top, which cancel out to maintain horizontal force balance. This combination of
       forces, which produces no net force but does produce a net torque, is a bending moment.

       Let the associated normal stresses be of order ±σn . Then the net compression and tension
       forces are of order ±d2 σn , and the lever arm is of order d, so balancing torques gives

                                               ρd2 ℓ2 ∼ σn d3

       which implies σn ∼ ρℓ2 /d. This is much greater than σs , because of the very small lever arm,
       which is why thin rods usually break by snapping, not by shearing or√pulling apart. Given a
       fixed maximum σn , we conclude the maximum length scales as ℓ ∼ d.
