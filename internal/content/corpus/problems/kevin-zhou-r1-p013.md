---
id: "kevin-zhou-r1-p013"
source: "kevin-zhou"
native_id: "KZ-R1-P013"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-r1-p013"
topic: [relativity]
subtopic: [wigner-rotation, thomas-precession, lorentz-transformations]
math_tools: [algebra]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/R1.txt"
source_url: "sources/kevin_zhou/site/handouts/R1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

5
Kevin Zhou                                                                  Physics Olympiad Handouts


doesn’t rotate it, but does change its velocity in that direction by u ≪ v. To keep things simple,
you should set c = 1, and throw away terms smaller than either v 2 or uv. Under this approximation,
the final velocity of the object in the lab frame is just (v, u).

 (a) Starting in the lab frame, with coordinates (t, x, y), go into the object’s frame by performing
     a Lorentz boost of v along x̂, and then of u along ŷ. That is, express the object’s coordinates
     (to , xo , yo ) in terms of t, x, and y.

 (b) To compare the orientation of this frame to that of the lab frame, start again in the lab frame
     and go into the object’s frame using a single Lorentz boost of v = (v, u). You’ll need the
     formula for a Lorentz transformation in an arbitrary direction, which is

                              t′ = γ(t − v · r),   r′ = r − γvt + (γ − 1)(v̂ · r)v̂.

    (c) Your two frames will differ in orientation by a small angle ∆θ. What is ∆θ? More generally,
        if the object performs uniform circular motion with angular velocity ω and speed v in the lab
        frame, what spin rotation rate ωs is induced by this effect?

 (d) Suppose the object accelerated by momentarily firing an array of rockets on its back. How
     would an observer in the lab frame explain why the object rotated?

This subtle phenomenon goes by several names. When we think about it kinematically, as the
result of composing Lorentz transformations, it’s usually called Wigner rotation, while when we
think about it dynamically, e.g. by tracking the orientation of an orbiting particle, it’s usually called
Thomas precession. In this problem, we considered a very concrete, straightforward derivation of
this effect. For a beautifully geometric but more advanced derivation, see this article. For a rather
messy application of Wigner rotation, see Physics Cup 2023, problem 4.


3      Paradoxes
Now you’re prepared to confront some classic relativistic paradoxes. They won’t appear in compe-
titions, but your understanding of relativity will be deeper if you grapple with them. (Also, now
that we’ve got the basics out of the way, we’ll start setting c = 1 for most problems.)
