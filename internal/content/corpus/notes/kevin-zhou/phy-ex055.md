---
id: kevin-zhou-notes-phy-ex055
source: kevin-zhou-notes
native_id: "phy Example 055"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex055
topic: [mechanics]
subtopic: [fluids, viscosity]
math_tools: [scaling-arguments]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "6496-6543"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Flow past a sphere, as a function of Re, shows many qualitatively different behaviors.
For Re ≲ 1, we have a “creeping” flow that is superficially similar to potential flow; like potential
flow, it can be solved for analytically. At Re ∼ 10, a steady circulation forms behind the sphere. At
Re ∼ 100, this circulation periodically detaches from the sphere, forming a “Karman vortex street”.
(Physically, we can think of Re as describing the rate at which vorticity is created at the surface of
the sphere. The vortices separate when this production is too fast to be simply diffused away.) At
Re ∼ 104 , the flow because chaotic, with a turbulent wake formed behind the sphere. At Re ∼ 105 ,
a “drag crisis” occurs where the coefficient of drag suddenly drops and the turbulent flow reattaches
to the sphere.


5      Fundamentals of Quantum Mechanics
5.1     Physical Postulates
We postulate the state of a system at a given time is given by a ray in a Hilbert space H.

    • A Hilbert space is a complex vector space with a positive-definite sesquilinear form ⟨α|β⟩.
      Elements of H are called kets, while elements of the dual space H∗ are called bras. Using the
      form, we can canonically identify |α⟩ with the bra ⟨α|, analogously to raising and lowering
      indices. This is an antilinear map, c|α⟩ ↔ c⟨α|, since the form is sesquilinear.

    • A ray is a nonzero ket up to the equivalence relation |ψ⟩ ∼ c|ψ⟩ for any nonzero complex number
      c, indicating that global phases in quantum mechanics at not important.

    • Hilbert spaces are also complete, i.e. every Cauchy sequence of kets converges in H.

    • A Hilbert space V is separable if it has a countable subset D so that D = V , which turns out
      to be equivalent to having a countable orthonormal basis. Hilbert spaces that aren’t separable
      are mathematically problematic, so we’ll usually assume this separability.

    • If {|ϕi ⟩} is an orthonormal basis, then we have the completeness relation
                                               X
                                                  |ϕi ⟩⟨ϕi | = 1.
                                                      i

      We also have the Schwartz equality,

                                               ⟨α|α⟩⟨β|β⟩ ≥ |⟨α|β⟩|2 .

      The trick to the proof is to use ⟨γ|γ⟩ ≥ 0 for |γ⟩ = |α⟩ + λ|β⟩, with λ = −⟨β|α⟩/⟨β|β⟩.

Note. The fact that quantum mechanics involves complex vector spaces is a nontrivial physical
fact, not an arbitrarily chosen definition. As discussed here, Schrodinger himself asserted that only
the real part of the wavefunction was physically meaningful, based on intuition from classical wave
mechanics. He tried to eliminate complex numbers in his namesake equation, e.g. by rewriting it as
−ℏ2 ∂t2 ψ = H 2 ψ, or by separating it into real and imaginary parts. It took a year of back-and-forth
to realize the complex values were actually meaningful, and that probabilities should follow |ψ|2 .

