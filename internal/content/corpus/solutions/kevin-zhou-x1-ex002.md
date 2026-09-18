---
id: kevin-zhou-x1-ex002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x1-ex002
solution_type: author
source_document: solution-document-kevin-zhou-x1sol
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X1Sol.pdf."
---

Example 2
A nonrelativistic particle of mass m is in a cubical box with side length L and hard walls.
Find the approximate number of quantum states with energy at most E0, where E0 is large.
11
Kevin Zhou Physics Olympiad Handouts
Solution
Using the same reasoning as in previous problems, we apply “hard wall” boundary conditions,
requiring the wavefunction to go to zero at the boundary. Thus, the wavefunction is
ψ ∝ sin(kxx)sin(kyy)sin(kzz)
where
ki =
π
L
ni, ni positive integer
and the energy is
E =
p2
2m
=
ℏ2k2
2m
.
The simplest way to proceed is to think in terms of “momentum space”, an abstract space
whose axes are px, py, and pz. The allowed states form a grid in the first octant of momentum
space, with a volume of (πℏ/L)3 for each state. The surface E = E0 corresponds to a sphere
of radius
√
2mE0. Therefore the number of states with energy at most E0 is approximately
N =
1
8

4
3
π(2mE0)3/2

πℏ
L
 −3
.
Now let’s solve the problem a slightly different way: suppose the box has periodic boundary
conditions, so that the right side is identified with the left side, and so on. In this case, the
wavefunctions can all be written in the form
ψ ∝ exp(i(kxx + kyy + kzz))
but now the allowed values of the wavenumbers are
ki =
2π
L
ni, ni integer.
The allowed states form a grid in all of momentum space, not just the first octant, with a
volume of (2πℏ/L)3 for each state. That is, while the volume around each state is eight times
as large, the states now occupy eight octants instead of one. Then the overall density of
states is still the same, and the number of states with energy at most E0 is approximately
N =

4
3
π(2mE0)3/2

2πℏ
L
 −3
which matches the result for hard walls. The point of this computation is to show that
when we care about the statistical properties of many states, the boundary conditions won’t
matter. In practice, you’ll see both kinds of boundary conditions quite often.
If you find the differences between the two boundary conditions confusing, you’re not alone.
In his original derivation of blackbody radiation, Lord Rayleigh used “hard wall” boundary
conditions but also allowed negative ni, leading to a factor of 8 error. Jeans corrected it,
which is why the result is now called the Rayleigh–Jeans law.
[4] Problem 16. @ 1 0Do the following JPhO problem. This pedagogical problem introduces the WKB
12
Kevin Zhou Physics Olympiad Handouts
approximation and phase space, reviewing everything covered above, and applies it to “clusters” of
atoms. You can skip sections I and III, which are covered elsewhere on this problem set.
Solution. See the official solutions here.
Remark
Because matter has wave properties, particles such as electrons can exhibit interference effects,
like those covered in W2. For example, you can run a double-slit experiment firing individual
electrons at a time and seeing where they hit the screen, which will gradually build up an
interference pattern. You’ll see an example of this in the next problem.
[4] Problem 17. @ 1 0IPhO 1993, problem 3. (Hint: to do the final part of this problem, you should
not try to compare the total path lengths traversed by the electrons. That would be very hard, and
worse, it won’t give the right answer, because the potential from the wire also affects the electrons’
phases. Instead, you should use the facts about wavefronts mentioned in W2. That is, waves always
propagate perpendicular to wavefronts, and all points on a wavefront have the same phase.)
3 The Uncertainty Principle
Idea 5: Heisenberg Uncertainty
So far we have treated a quantum particle as having a well-defined position and momentum,
but in reality the uncertainties in the position and momentum obey
∆x∆p ≥
ℏ
2
where, as in P2, the uncertainties may be interpreted as standard deviations. The “semi-
classical limit” used in the rest of this problem set simply corresponds to the case where the
required uncertainty is relatively small, which is reached for energy levels n ≫ 1. Occasionally,
Olympiad questions will ask you to use the Heisenberg uncertainty principle to make a very
rough estimate. In these cases, the constant factors will not matter.
Idea 6: Energy-Time Uncertainty
There are two commonly used versions of the energy-time uncertainty principle. If the energy
of a system is only measured for a finite time ∆t, it must have a finite uncertainty ∆E in
its energy. In addition, if a system significantly changes its state in time ∆t, then its energy
must have been uncertain by a finite amount ∆E. In both cases, we have
∆E ∆t ≥
ℏ
2
.
A third common statement of the energy-time uncertainty principle is “for a short time ∆t, a
system can violate energy conservation by an amount ∆E”. This is wrong, because quantum
systems always conserve energy; systems that naively seem to violate energy conservation
simply didn’t have a well-defined energy in their initial state to begin with. However, thinking
this way will usually get you the right answers, essentially because of dimensional analysis.
13
Kevin Zhou Physics Olympiad Handouts
