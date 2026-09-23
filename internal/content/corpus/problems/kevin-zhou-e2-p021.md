---
id: "kevin-zhou-e2-p021"
difficulty_level: 5
source: "kevin-zhou"
native_id: "KZ-E2-P021"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e2-p021"
topic: [electrostatics]
subtopic: [capacitance, conductors, method-of-images]
math_tools: [series]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E2.txt"
source_url: "sources/kevin_zhou/site/handouts/E2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Consider two conducting spheres of radius r separated by a distance a ≫ r, with
    total charges ±Q. The spheres can be thought of as the two plates of a capacitor.

      (a) Find a simple approximation for the capacitance C, valid when a ≫ r.

    In reality, the exact capacitance of this system can be written as an infinite series in r/a. Let’s
    consider two ways of finding the corrections to the capacitance.

      (b) By considering the energy U = Q2 /2C of the system, find the first nontrivial correction to C.

      (c) Alternatively, we can think about the charge distributions on the spheres. If we start with
          a “zeroth-order” uniform charge density on each sphere, it will induce a “first-order” image
          charge in the other sphere, which will in turn induce “second-order” image charges, and so
          on. We can then compute C = Q/∆V by summing up all the image charges, and the total
          voltage difference they produce. Using this approach, find the first nontrivial correction to C.

      (d) ⋆ It turns out that the quantity 1/C is a bit nicer than C. At what order in r/a does the
          second nontrivial correction to 1/C appear?

       Example 6

       Find the charge distribution on a thin conducting disc of radius R and total charge Q.




                                                      12


Kevin Zhou                                                                Physics Olympiad Handouts


    Solution
    In general, there are very few situations where the charge distribution on a conductor can
    be found explicitly. As you’ve seen, some of the simplest examples can be solved with image
    charges. Some more complex, two-dimensional examples can be solved with a mathematical
    technique called conformal mapping. And this special example can be solved with a neat trick.

    Consider a uniformly charged spherical shell centered on the origin, and consider a point P
    inside the shell, on the xy plane. The electric field at point P is zero, by the shell theorem.
    Recall that in the usual proof of the shell theorem, one draws two cones opening out of
    P in opposite directions. The charges contained in each cone produce canceling electric fields.

    Now imagine shrinking the spherical shell towards the xy plane, so it becomes elliptical. The
    crucial insight is that the shell theorem argument above still works, for points on the xy
    plane. When we squash the shell all the way down to the xy plane, it becomes a disc, with
    zero electric field on it. This is thus a valid charge distribution for a disc-shaped conductor,
    and by the uniqueness theorem, it’s the only one.

    By√keeping track of how much charge gets squashed to radius [r, r + dr], we find σ(r) ∝
    R/ R2 − r2 , and fixing the proportionality constant gives

                                                     Q
                                        σ(r) =      √        .
                                                 4πR R2 − r2
    You can also show this by taking the c, ϵ → 0 limit of the “third shell theorem” in M6. Note
    that this is the surface charge density on each side of the thin disc, so if you wanted the limit
    of an infinitely thin disc, you should double the answer.
