---
id: solution-ocr-kevin-zhou-m4sol-p019
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m4-p019]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 19. Consider a pendulum which can perform small-angle oscillations in a plane with natural frequency $f$. The pendulum bob is attached to a string, and you hold the other end of the string in your hand. There are three simple ways to drive the pendulum:

(a) Move the end of the string horizontally with sinusoidal frequency $f ^ { \prime }$.
(b) Move the end of the string vertically with sinusoidal frequency $f ^ { \prime }$.
(c) Apply a quick rightward impulse to the bob with frequency $f ^ { \prime }$.

In each case, for what value(s) of $f ^ { \prime }$ can the amplitude become large? (This question should be done purely conceptually; don't write any equations, just visualize it!)

Solution. (a) In the frame of the string, this is a sinusoidal horizontal (fictitious) force, so it's just the same kind of sinusoidal driving we saw above. Resonance happens when $f ^ { \prime } \approx f$.

(b) In this case, there is a sinusoidal vertical force by the same reasoning. Resonance can happen when $f ^ { \prime } \approx 2 f$, in which case gravity is weaker whenever the bob is moving up and stronger whenever it is moving down.
(c) This works as long as the impulse always comes when the object is moving to the right, i.e. in the same phase of the object's oscillation. This happens as long as the impulse's period is an integer multiple of the object's period, so $f ^ { \prime } \approx f / n$.

[5] Problem 20. GPhO 2016, problem 1. Note that this problem requires using the official answer sheet.

## 4 Normal Modes

Idea 4: Normal Modes
A system with $N$ degrees of freedom has $N$ normal modes when displaced from equilibrium. In a normal mode, the positions of the particles are of the form $x _ { i } ( t ) = A _ { i } \cos \left( \omega t + \phi _ { i } \right)$. That is, all particles oscillate with the same frequency. Normal modes can be either guessed physically, or found using linear algebra as explained in section 4.5 of Morin.

The general motion of the system is a superposition of these normal modes. So to compute the time evolution of the system, it's useful to decompose the initial conditions into normal modes, because they all evolve independently by linearity.
