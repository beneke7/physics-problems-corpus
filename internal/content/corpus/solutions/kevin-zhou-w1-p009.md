---
id: kevin-zhou-w1-p009
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w1-p009
solution_type: author
source_document: solution-document-kevin-zhou-w1sol
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W1Sol.pdf."
---

[2] Problem 9. Consider a string of length L and wave speed v.
(a) Suppose the ends of the string are fixed, i.e. y(x,t) = 0 at x = 0 and x = L. Find the standing
wave angular frequencies and sketch the configurations.
(b) Do the same if the ends of the string are free, i.e. ∂y/∂x = 0 at x = 0 and x = L.
(c) Do the same if one end is fixed and one end is free.
Solution. (a) The standing wave equations are y(x,t) = Asin(kx)cos(ωt) and y(0,t) = y(L,t) =
0. Thus kL = πn, giving the angular frequencies
ωn =
πvn
L
for n ≥ 1. The waves will look like this:
n = 1
n = 2
n = 3
n = 4
n = 5
(b) We can replace the sine with a cosine in the above solution (so integrating or differentiating
the above solution with respect to x gets the solutions to this problem). Thus the angular
frequencies are the same, ωn = πvn/L, and the waves look like this:
n = 1
n = 2
n = 3
n = 4
n = 5
12
Kevin Zhou Physics Olympiad Handouts
Technically, while the boundary conditions in part (a) required n ≥ 1, here we can actually
take n ≥ 0. The n = 0 solution just corresponds to the whole string being moved up or
down and staying there, with zero frequency. But this trivial solution is not typically called a
“standing wave”, so it’s conventional to say the lowest frequency is at n = 1.
(c) Let x = 0 be fixed and x = L be free. Then for y(x,t) = Asin(kx)cos(ωt), we have
kL = π(n + 1/2), so
ωn =
πv
L
(n + 1/2)
for n ≥ 0. The first five standing wave solutions, including the fundamental n = 0 mode, are
shown below.
n = 0
n = 1
n = 2
n = 3
n = 4
[2] Problem 10.   W 1 0USAPhO 1997, problem A1.
Idea 4
When a musical instrument plays a note, typically multiple standing waves are excited, so
the resulting sound is composed of multiple frequencies. As you saw in problem 9, often the
standing wave frequencies are all multiples of a single, lowest frequency. This frequency f0 is
called the fundamental, or first harmonic, while the multiple nf0 is called the nth harmonic.
The fundamental frequency determines the pitch we perceive, while the distribution of energy
among the harmonics determines the timbre, or tonal quality, of the instrument.
