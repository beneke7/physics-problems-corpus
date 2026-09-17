---
id: "kevin-zhou-e1-ex005"
source: "kevin-zhou"
native_id: "KZ-E1-EX005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e1-ex005"
topic: [electrostatics]
subtopic: [coulomb-force, shell-theorem]
math_tools: []
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E1.txt"
source_url: "sources/kevin_zhou/site/handouts/E1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 5

        Consider two uniformly charged spherical balls with radii ai , both with charge q, and their
        centers separated by a distance r > a1 + a2 . What is the net force of the first on the second?

        Solution

        It might seem obvious that the answer is q 2 /4πϵ0 r2 , with no dependence on a1 and a2 . In
        fact, if you’ve done any orbital mechanics, you’ve almost certainly assumed that the force
        between two spherical bodies (such as the Earth and Sun) is Gm1 m2 /r2 , which is equivalent.

        This has a simple but slightly tricky proof. By the shell theorem, we can set a1 = 0, replacing
        the first ball with a point charge, because this produces the same field at the second ball.
        But the force on the second ball depends on the electric field at every point on it, which
        seems to require doing an integral. To avoid this, we use Newton’s third law, which tells us
        it’s equivalent to compute the force on the first ball. To compute that, we may set a2 = 0 by
        the shell theorem again. This reduces us to the case of two point charges, giving the answer.

        Example 6: Purcell 1.28

        Consider a point charge q. Draw any imaginary sphere of radius R around the charge. Show
        that the average of the electric field over the surface of the sphere is zero.

        Solution
        Imagine placing a uniform surface charge σ on the sphere. Then the average of the point
        charge’s electric field over the sphere times 4πR2 σ is the total force of the point charge on
        the charged sphere. But this is equal in magnitude to the force of the charged sphere on
        the point charge, which must be zero by the shell theorem. Thus the average field over the


                                                       5
    Kevin Zhou                                                                 Physics Olympiad Handouts



       sphere has to vanish.
