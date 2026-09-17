---
id: kevin-zhou-e7-p027
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e7-p027
solution_type: author
source_document: solution-document-kevin-zhou-e7sol
source_pdf: sources/kevin_zhou/site/handouts/E7Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E7Sol.pdf."
---

[4] Problem 27. In this problem, we treat electromagnetic wave propagation through a transmission
line using a “lumped element” approach, where the line is replaced with discrete capacitors and
inductors, as shown. (This is an example of a network synthesis, mentioned in E6.)
(a) Calculate the characteristic impedance Z0(ω) of the entire network, as shown below.
L/2 L/2 L/2 L/2
C C V0 ··· = Z0 V0
24
Kevin Zhou Physics Olympiad Handouts
(b) The diagram below shows two adjacent sections of the ladder.
··· ···
In In+1
Vn Vn+1
Find the ratio of the complex voltage amplitudes Vn+1/Vn.
(c) The AC driving attempts to create electromagnetic waves which travel through the network,
to the right. It turns out that above a certain critical angular frequency ωc, waves will not
travel through the ladder network. Find ωc. (Hint: this can be done using either the result of
part (a) or part (b).)
(d) For angular frequencies ω ≪ ωc, waves travel through the ladder with a constant speed. Find
this speed, assuming each segment of the ladder has physical length ℓ. (Hint: the speed of a
wave obeys v = dω/dk.)
(e) You should have found in one of the earlier parts that the impedance of this infinite network
can be a real number, even though it’s made of parts which all have imaginary impedance.
That sounds strange, but what’s even stranger is that we should be able to handle this infinite
circuit by taking the limit of progressively larger finite circuits, just as we did for a similar
network of resistors in E2. But for any finite LC network, the impedance will be imaginary,
so the limit must be imaginary too! On one hand, we should trust the finite result because
all real circuits are finite. On the other hand, the real impedance we get for the infinite result
certainly can be measured in real life. So what’s going on?
Solution. (a) The impedance of the infinite ladder doesn’t change if we add another unit onto
the left. Let the inductor have impedance Z1/2 and let the capacitor have impedance Z2.
Then
Z1
2
+
1
1
Z2
+ 1
Z1/2+Z0
= Z0
which can be solved to give
Z0 =
p
(Z1/2)2 + Z1Z2.
Since we have Z1 = iωL and Z2 = 1/iωC, we have
Z0 =
r
L
C
−
ω2L2
4
.
(b) Each segment sees an impedance Z0 to its right, so
Vn = InZ0, Vn+1 = In+1Z0.
On the other hand, we also have
Vn − Vn+1 =
InZ1
2
+
In+1Z1
2
and solving these equations yields
Vn+1
Vn
=
Z0 − Z1/2
Z0 + Z1/2
=
p
L/C − ω2L2/4 − iωL/2
p
L/C − ω2L2/4 + iωL/2
=
p
4/ω2LC − 1 − i
p
4/ω2LC − 1 + i
.
25
Kevin Zhou Physics Olympiad Handouts
(c) First we’ll find the critical angular frequency using part (b). When the square root is a real
number, the numerator and denominator have equal magnitudes, so |Vn+1| = |Vn|, indicating
wave propagation. When the square root is imaginary, the wave instead exponentially decays.
The cutoff is when
4/ω2
LC − 1 = 0
which gives
ωc =
2
√
LC
.
To derive the same conclusion using the result of part (a), note that the impedance Z0 becomes
real when ω < 2/
√
LC. How could one get a real impedance, which signals energy loss, if
there are no resistors anywhere in the circuit? It can only happen if the driver can create
electromagnetic waves, which then propagate through the network; since the network is infinite,
this energy never returns to the driver. Because waves can appear for ω < 2/
√
LC, we again
conclude that ωc = 2/
√
LC.
(d) In this limit, we have
Vn+1
Vn
≈
2/ω
√
LC − i
2/ω
√
LC + i
and so across each unit, there is a phase shift of
δ = ω
√
LC.
Since wavenumber is phase shift per distance, k = δ/ℓ = ω
√
LC/ℓ, which means
v =
dω
dk
=
ℓ
√
LC
.
That is, waves in a transmission line travel with a constant speed, as we already found in
problem 26. If we further plug in the L and C found in that problem, we would recover the
speed of light.
(e) For an ideal, finite LC network, the finite result is perfectly correct: the impedance is pure
imaginary. The network can’t absorb net energy, because in the steady state energy propagates
through the network, bounces off the other end, and comes back to the voltage source. However,
when we’re using transmission lines in practice, we put a load on the other end (i.e. a resistance)
that absorbs the incoming wave. This introduces a real impedance to the finite circuit, and
the limiting procedure works just fine, recovering a real impedance in the infinite limit.
But mathematically, in the infinite network analysis, we never needed to use the fact that a
real impedance was at the end, because there was no end. You get the infinite network either
by taking the limit of finite LC circuits, or by taking the limit of finite LC circuits terminated
by a resistor, so how do we mathematically choose which limit gives the right answer?
The resolution is that the former limit does not even exist: as the size of the LC network is
increased, the impedance keeps bouncing around, never settling down to a limit. Physically,
this is because the total length of the network is changing, which changes the phase shift
of the wave once it gets back to the voltage source. It’s analogous to trying to compute
lima→∞
Ra
0 eix dx.
26
Kevin Zhou Physics Olympiad Handouts
To make the limit well-defined, we must introduce resistances. For example, we could add
a small resistance ∆r to every inductor, which is also perfectly realistic. Now the waves
gradually decay away, and in the infinite limit we get some impedance Z(∆r,ω). Finally,
taking the limit ∆r → 0 recovers the infinite result we derived earlier. It’s precisely the same
result as taking the infinite limit of LC networks terminated by resistors. We could also get
the same result by giving the capacitors the small resistance.
The general lesson is that in physics, the real world supplies “regulators” that make the
seemingly undefined limits well-defined. The miracle is that quite often, after we compute the
answer, we can remove the regulator to get a result that doesn’t depend on the regulator at all!
This is surprising to the mathematician, but natural to the physicist: it means the observable
behavior of real objects, which always come with many imperfections, doesn’t depend on the
fine details of how we choose to model them.
27
