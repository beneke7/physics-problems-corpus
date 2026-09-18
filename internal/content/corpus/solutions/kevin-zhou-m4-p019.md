---
id: kevin-zhou-m4-p019
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m4-p019
solution_type: author
source_document: solution-document-kevin-zhou-m4sol
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

[2] Problem 19. Consider a pendulum which can perform small-angle oscillations in a plane with
natural frequency f. The pendulum bob is attached to a string, and you hold the other end of the
string in your hand. There are three simple ways to drive the pendulum:
19
Kevin Zhou Physics Olympiad Handouts
(a) Move the end of the string horizontally with sinusoidal frequency f′.
(b) Move the end of the string vertically with sinusoidal frequency f′.
(c) Apply a quick rightward impulse to the bob with frequency f′.
In each case, for what value(s) of f′ can the amplitude become large? (This question should be
done purely conceptually; don’t write any equations, just visualize it!)
Solution. (a) In the frame of the string, this is a sinusoidal horizontal (fictitious) force, so it’s
just the same kind of sinusoidal driving we saw above. Resonance happens when f′ ≈ f.
(b) In this case, there is a sinusoidal vertical force by the same reasoning. Resonance can happen
when f′ ≈ 2f, in which case gravity is weaker whenever the bob is moving up and stronger
whenever it is moving down.
(c) This works as long as the impulse always comes when the object is moving to the right, i.e. in
the same phase of the object’s oscillation. This happens as long as the impulse’s period is an
integer multiple of the object’s period, so f′ ≈ f/n.
[5] Problem 20.   r 1 0GPhO 2016, problem 1. Note that this problem requires using the official answer
sheet.
4 Normal Modes
Idea 4: Normal Modes
A system with N degrees of freedom has N normal modes when displaced from equilibrium.
In a normal mode, the positions of the particles are of the form xi(t) = Ai cos(ωt + ϕi).
That is, all particles oscillate with the same frequency. Normal modes can be either guessed
physically, or found using linear algebra as explained in section 4.5 of Morin.
The general motion of the system is a superposition of these normal modes. So to compute
the time evolution of the system, it’s useful to decompose the initial conditions into normal
modes, because they all evolve independently by linearity.
