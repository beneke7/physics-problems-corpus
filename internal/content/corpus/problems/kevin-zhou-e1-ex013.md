---
id: "kevin-zhou-e1-ex013"
difficulty_level: 2
source: "kevin-zhou"
native_id: "KZ-E1-EX013"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e1-ex013"
topic: [electrostatics]
subtopic: [conductors, uniqueness-theorem, electrostatic-shielding]
math_tools: [vector-calculus]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E1.txt"
source_url: "sources/kevin_zhou/site/handouts/E1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Example 13

  Consider an isolated neutral spherical conducting shell of radius R with an arbitrary charge
  distribution inside, with total charge Q. Find the electric field outside the shell.

  Solution
  Let V be the volume outside the shell, and let ϕ = ϕ0 on the shell’s surface. For a given
  value of ϕ0 , one possible solution is that the potential is that of a point charge at the origin,
  ϕ(r) = ϕ0 R/r. So by the uniqueness theorem, this is the only solution. In this case, the
  value of ϕ0 is related to Q by ϕ0 = Q/(4πϵ0 R), which implies E(r) = Q r̂/(4πϵ0 r2 ).

  The preceding two examples illustrate the general principle that a layer of conductor “shields”
  information from the other side. When you’re inside, you can’t know anything about what’s
  going on outside, and when you’re outside, you can only know the total charge inside.



                                                  15


    Kevin Zhou                                                               Physics Olympiad Handouts



       Also, in this example, we weren’t initially given Dirichlet or Neumann boundary conditions.
       We were told that the shell is a conductor, which tells us that ϕ = ϕ0 without the specific
       value of ϕ0 , and the total charge inside, which tells us the surface integral of E · n̂ but not
       the value of E · n̂ at any particular point. However, this combination of information was still
       enough to fix a unique solution, and it turns out this is true in general: if all the surfaces in
       a problem are conductors, then specifying either the potential or total charge on each one
       fixes a unique solution. You’ll give a heuristic proof of this in problem 26.

       Finally, if you were reading very carefully, you might be wondering why we need to specify
       the shell is “isolated.” The reason is that whenever the volume V is infinite, we also need
       to specify what is happening at the surface “at infinity.” The default assumption is that the
       electric field and potential fall to zero at infinity. (As we’ve seen in problem 6, this becomes
       more subtle when the charge distribution itself is infinite.)
