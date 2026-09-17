---
id: "kevin-zhou-t2-ex008"
source: "kevin-zhou"
native_id: "KZ-T2-EX008"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-ex008"
topic: [thermodynamics, electromagnetism]
subtopic: [blackbody-radiation, kirchhoff-law, second-law, emissivity]
math_tools: [algebra]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T2.txt"
source_url: "sources/kevin_zhou/site/handouts/T2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T2-EX008

  Example 8

  A nonideal blackbody absorbs a fraction a(f ) of incident radiation of frequency f . (For an
  ideal blackbody, a(f ) = 1.) Show that the second law implies Kirchhoff’s law, e(f ) = a(f ).

  Solution
  First let’s consider the case where a(f ) and e(f ) are constants, which don’t depend on f . If
  we place two blackbodies of temperature T right next to each other, then the rate at which
  the first heats the second is proportional to e1 a2 , while the rate the second heats the first is
  proportional to e2 a1 . By the second law, these must be equal, which implies e1 /a1 = e2 /a2 .
  Hence the ratio is constant. But for a perfect blackbody, e = a, so the two are equal.

  More generally, suppose we place in between the two blackbodies a filter that only lets
  light of frequency f through, and blocks everything else. Then the same reasoning gives
  e1 (f )/a1 (f ) = e2 (f )/a2 (f ), so e(f ) = a(f ). Thermodynamics forces good absorbers to
  also be good emitters. It’s possible to derive this microscopically, by considering how
  individual atoms behave; in that context Kirchhoff’s law follows from time reversal symmetry.

  You might wonder what would happen if we placed a “one-way” filter which only let light
  through in one direction. Such a filter would act like Maxwell’s demons for photons: if you used
  one to divide a room full of photons, it would start directing photons of certain frequencies to
  one side or the other, decreasing the entropy. So thermodynamics also forbids the existence
  of one-way filters; again, microscopically this is a result of time reversal symmetry.
