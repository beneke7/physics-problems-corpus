---
id: kevin-zhou-m8-p025
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m8-p025
solution_type: author
source_document: solution-document-kevin-zhou-m8sol
source_pdf: sources/kevin_zhou/site/handouts/M8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M8Sol.pdf."
---

[3] Problem 25. In P1, you found a general expression for the period of a pendulum oscillating with
amplitude θ0 in terms of an integral, then approximated the integral for θ0 ≪ 1 to find
ω = ω0

1 −
θ2
0
16
+ O(θ4
0)

where ω0 =
p
g/L. In this problem, we will show a different way to get the same answer, by solving
the equation of motion approximately. We write the solution θ(t) as a series in θ0. The overall
solution is of order θ0, and the corrections only depend on θ2
0, so we can write
θ(t) = θ0f0(t) + θ3
0f1(t) + θ5
0f2(t) + ...
where all the functions fi(t) are of order 1. Then we plug this expansion into Newton’s second law,
θ̈ + ω2
0 sinθ = 0, and expand it out order by order in θ0.
(a) A naive first guess is to set f0(t) so that it cancels precisely the order θ0 terms in this equation,
then set f1(t) to cancel the order θ3
0 terms, and so on. Using this guess, show that
¨ f0 + ω2
0f0 = 0, ¨ f1 + ω2
0f1 =
ω2
0f3
0
6
where the first equation has solution f0(t) = cos(ω0t).
Unfortunately, this decomposition is not very useful. The problem is that two things are going on
at once: the oscillations are not quite sinusoidal, and they have an angular frequency lower than
ω0. The expansion we’ve done would be useful if we only had the first effect, because then f1(t)
would just capture the small, non-sinusoidal corrections to f0(t). But our method can’t account
for the frequency shift; by construction, f0(t) always oscillates at angular frequency ω0. Over time,
the real oscillation θ(t) gets out of phase with f0(t). This manifests itself as a “secular growth” in
f1(t), i.e. it increases in magnitude every cycle until it has a huge value, of order 1/θ2
0, and our
perturbative expansion breaks down.
(b) Write the right-hand side of the differential equation for f1(t) as a sum of sinusoids, and show
that it contains a term proportional to cos(ω0t). This resonantly drives f1(t), causing the
secular growth.
(c) We can salvage our perturbative expansion using the method of “renormalized” frequencies.
We impose by fiat that f0(t) oscillates at the true angular frequency, letting
¨ f0 + ω2
f0 = 0, ω = ω0(1 − cθ2
0 + O(θ4
0))
for a constant c. Because of this choice, the differential equation for f1(t), which contains all
terms at order θ3
0, will be altered. The correct choice of ω is precisely the one for which this
eliminates the secular growth of f1(t). Using this idea, show that c = 1/16.
31
Kevin Zhou Physics Olympiad Handouts
If you keep going, you’ll find the next term f2(t) still has secular growth. We can remove it by
having both f0(t) and f1(t) oscillate at angular frequency ω0(1−θ2
0/16+c′θ4
0), where c′ is chosen to
cancel the secular growth of f2(t). In this way, the frequency can be found to any order in θ2
0. (This
technique is called the method of strained coordinates. It’s an example of multiple-scale analysis.)
Solution. (a) Plugging everything in and using sinθ = θ − θ3/6 + O(θ5), we have
θ0
¨ f0 + θ3
0
¨ f1 + ω2
0

θ0f0 + θ3
0f1 −
1
6
θ3
0f3
0 + O(θ5
0)

= 0.
Collecting the order θ0 and θ3
0 terms gives the desired result.
(b) The easiest way to do this is to use the definition of cos(ω0t) in terms of complex exponentials,
cos3
(ω0t) =

eiω0t + e−iω0t
2
3
=
e3iω0t + 3eiω0t + 3e−iω0t + e−3iω0t
8
=
1
4
cos(3ω0t)+
3
4
cos(ω0t).
Another way is to remember the cosine triple angle identity, but who knows that?
(c) Adjusting ω0 to the renormalized angular frequency for f0 moves terms between the two
differential equations, so that now we have
¨ f0 + ω2
f0 = 0, ¨ f1 + ω2
0f1 = ω2
0

f3
0
6
− 2cf0 + O(θ2
0)

.
The part of the right-hand side that oscillates at angular frequency ω0 is
ω2
0

1
6
3
4
cos(ω0t) − 2ccos(ω0t)

from which we conclude c = 1/16.
