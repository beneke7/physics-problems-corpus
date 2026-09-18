---
id: kevin-zhou-notes-phy-ex059
source: kevin-zhou-notes
native_id: "phy Example 059"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex059
topic: [quantum-physics]
subtopic: [uncertainty, quantum-foundations]
math_tools: [linear-algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "6751-6849"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. The uncertainty principle. For an observable A and state |α⟩, define ∆A = A − ⟨A⟩.
Then the variance of A is
                                  ⟨∆A2 ⟩ = ⟨A2 ⟩ − ⟨A⟩2 .
Now note that for observables A and B,

                                ⟨α|∆A2 |α⟩⟨α|∆B 2 |α⟩ ≥ |⟨α|∆A∆B|α⟩|2

by the Schwartz inequality. Note that we can write
                                                1
                                  ∆A∆B =          ([∆A, ∆B], {∆A, ∆B}) .
                                                2
These two terms are skew-Hermitian and Hermitian, so their expectation values are imaginary and
real, respectively. Then we have
                                               1
                          ⟨∆A2 ⟩⟨∆B 2 ⟩ ≥        |⟨[A, B]⟩|2 + |⟨{∆A, ∆B}⟩|2 .

                                               4
Ignoring the second term gives
                                                1
                                      σA σB ≥ |⟨[A, B]⟩|
                                                2
where σX is the standard deviation. This is the uncertainty principle.


5.2     Wave Mechanics
We now review position and momentum operators for particles on a line.

 • The state of a particle on a line is an element of the Hilbert space H = L2 (R), the set of square
   integrable functions on R. This space is separable, and hence has a countable basis.

 • Typical observables in this space include the projections,

                              (P[a,b] f )(x) = f (x) for a ≤ x ≤ b, 0 otherwise.

      However, this approach is physically inconvenient because most operators of interest (e.g. x̂,
      p̂ = −iℏ∂x ) cannot be diagonalized in H, as their eigenfunctions would not be normalizable.

 • We will treat all of these operators as acceptable, and formally include their eigenvectors, even
   if they are not in H. This severely enlarges the space under consideration, because x and p have
   uncountable eigenbases while the original space had a countable basis. Physically, this is not be
   a problem because all physical measurements of x are “smeared out” and not infinitely precise.
   Thus the observables we actually measure do live in H, and x is just a convenient formal tool.

 • To begin, let |x⟩ with x ∈ R be a complete orthonormal eigenbasis for x, with
                                                          Z
                                         ′         ′
                         x̂|x⟩ = x|x⟩, ⟨x |x⟩ = δ(x − x),    dx|x⟩⟨x| = 1.

      Using completeness,                 Z                   Z
                                  |ψ⟩ =       dx |x⟩⟨x|ψ⟩ =        dx ψ(x)|x⟩.

      The quantity ψ(x) = ⟨x|ψ⟩ is called the wavefunction.

 • In many cases, a quantum theory can be obtained by “canonical quantization”, replacing Poisson
   brackets of classical observables with commutators of quantum operators, times a factor of iℏ.
   When applied to position and momentum, this gives [x̂, p̂] = iℏ.

 • Note that for a finite-dimensional Hilbert space, the trace of the left-hand side vanishes by the
   cyclic property of the trace, while the trace of the right-hand side doesn’t. The cyclic property
   doesn’t hold in infinite-dimensional Hilbert spaces, which are hence required to describe position
   and momentum. Heuristically this is because tr(x̂p̂) and tr(p̂x̂) are both infinite, so subtracting
   them isn’t meaningful.

 • If x̂ is realized by multiplying a wavefunction by x, then the Stone–von Neumann theorem
   states that p̂ is uniquely specified by the commutation relation, up to isomorphisms, as
                                                            ∂
                                                 p̂ = −iℏ      .
                                                            ∂x

 • Now let |p⟩ be an orthonormal basis for p̂,

                                                 p̂|p⟩ = p|p⟩.

      Hence we may define a momentum space wavefunction, and the commutation relation immedi-
      ately yields the Heisenberg uncertainty principle σx σp ≥ ℏ2 .


  • We can relate the |x⟩ and |p⟩ bases by noting that

                                       −iℏ∂x ⟨x|p⟩ = p⟨x|p⟩,               ⟨x|p⟩ = N eipx/ℏ .

    Here, we acted with p to the left on ⟨x|. To normalize, note that
                         Z                       Z
                                                          ′
                ⟨p|p′ ⟩ = dx ⟨p|x⟩⟨x|p′ ⟩ = |N |2 dx eix(p −p)/ℏ = |N |2 (2πℏ)δ(p − p′ ).

    Therefore, we conclude
                                                                        1
                                                      ⟨x|p⟩ = √             eipx/ℏ
                                                                        2πℏ
    where we set an arbitrary phase to one.

  • Formally, states like |x⟩ and |p⟩ live in a “rigged Hilbert space”. Such a space consists of a
    genuine Hilbert space, and a set of vectors that don’t have well-defined inner products with
    each other, but do have them with all elements of the genuine Hilbert space. In other words,
    the mathematical formalism is simply defined so that the heuristic rules we’ve been using work.

