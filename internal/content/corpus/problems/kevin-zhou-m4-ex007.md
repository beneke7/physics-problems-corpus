---
id: "kevin-zhou-m4-ex007"
source: "kevin-zhou"
native_id: "KZ-M4-EX007"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m4-ex007"
topic: [mechanics]
subtopic: [normal-modes, coupled-oscillators, harmonic-motion]
math_tools: [calculus, differential-equations]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M4.txt"
source_url: "sources/kevin_zhou/site/handouts/M4.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 7

  Two blocks of mass m are connected with a spring of spring constant k and relaxed length
  L. Initially, the blocks are at rest at positions x1 (0) = 0 and x2 (0) = L. At time t = 0, the
  block on the right is hit, giving it a velocity v0 . Find x1 (t) and x2 (t).

  Solution
  The equations of motion are
                                       mx¨1 = k(x2 − x1 − L)
                                       mx¨2 = k(x1 + L − x2 ).
  The system must have two normal modes. The obvious one is when the two masses oscillate
  oppositely, x1 = −x2 . The other one is when the two masses move parallel to each other,
  x1 = x2 , and this normal mode formally has zero frequency. The initial condition is the
  superposition of these two modes.

  We can show this a bit more formally. Define the normal mode amplitudes u and v as
                                       u−v           u+v
                                 x1 =        , x2 =       .
                                         2             2
  Solving for u and v, we find
                                     u = x1 + x2 ,        v = x2 − x1 .
  Using the equations of motion for x1 and x2 , we have the equations of motion
                                     ü = 0,   mv̈ = −2k(v − L)
  whichpjust verifies that the normal modes are independent, with angular frequency zero and
  ω = 2k/m respectively. We can fit the initial condition if
                         u(0) = L,     v(0) = L,      u̇(0) = v0 ,    v̇(0) = v0 .
  The normal mode amplitudes are then
                                                                   v0
                             u(t) = L + v0 t,      v(t) = L +         sin ωt.
                                                                   ω
  Plugging this back in gives
                             v0 t   v0                      v0 t   v0
                    x1 (t) =      −    sin ωt, x2 (t) = L +      +    sin ωt.
                              2     2ω                       2     2ω
  Each mass is momentarily stationary at time intervals of 2π/ω, though neither mass ever
  moves backwards. If you didn’t know about normal modes, you could also arrive at this
  conclusion by playing around with the equations; you could see that they decouple when you
  add and subtract them, for instance.

                                                     11
    Kevin Zhou                                                                  Physics Olympiad Handouts
