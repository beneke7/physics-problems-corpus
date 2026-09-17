---
id: "kevin-zhou-m7-ex014"
source: "kevin-zhou"
native_id: "KZ-M7-EX014"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m7-ex014"
topic: [fluid-mechanics]
subtopic: [viscosity, pipe-flow, bernoulli-principle, head-loss]
math_tools: [algebra]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M7.txt"
source_url: "sources/kevin_zhou/site/handouts/M7.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 14

  If you’ve used a standard garden hose, you might have noticed that the water shoots higher
  if you partially block the outlet with your finger. Why does this happen?

  Solution
  The water company provides water to your house at a fixed pressure Patm + ∆P . Thus,
  naively the water
               p should always shoot equally far, because Bernoulli’s principle says the exit
  speed is v = 2∆P/ρ, corresponding to a peak height ∆P/ρg, independent of the area of
  the hole. (There is a vena contracta effect, as mentioned in problem 19, but this also doesn’t
  depend on the area.)

  The resolution is that for a typical long, thin garden hose, viscous losses dominate. As you’ll
  see in problem 26, a higher mass flow rate leads to a higher drop in pressure. When you
  partially block the outlet, you’re simply decreasing the flow rate, so that viscosity has a
  smaller effect, allowing the water to get closer to the maximum possible height ∆P/ρg.

  In plumbing, the quantity ∆P/ρg is called the “pressure head”, and effects like viscosity
  give rise to “head loss”. Unfortunately, for most realistic pipes it is intractable to calculate
  the head loss, because the water flow is turbulent. Instead, the amount of head loss is
  parametrized by the so-called Darcy friction factor, whose values are tabulated in references.
