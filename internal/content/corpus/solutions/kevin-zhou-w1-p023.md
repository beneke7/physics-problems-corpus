---
id: kevin-zhou-w1-p023
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w1-p023
solution_type: author
source_document: solution-document-kevin-zhou-w1sol
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W1Sol.pdf."
---

[4] Problem 23. Consider two identical, thin, symmetric mirrors, with reflection and transmission
coefficients r and t, placed a distance L apart, with air in between them and outside them. This
system is called a Fabry–Perot interferometer. A wave with wavenumber k hits the apparatus; we
want to find the reflection and transmission coefficients rnet and tnet of the entire system.
31
Kevin Zhou Physics Olympiad Handouts
(a) Draw all paths that the light could take to be reflected, and to be transmitted.
(b) By applying the principle of superposition and summing a geometric series, show that
rnet = r +
rt2e2ikL
1 − r2e2ikL
, tnet =
t2eikL
1 − r2e2ikL
.
Note that your answers may differ by phases, depending on your conventions for rnet and tnet.
(c) Show that all the light is transmitted for some special values of L, even if r ≈ 1. That is,
nearly ideal mirrors can become perfectly transparent! This is called resonant transmission,
and it occurs because the reflected waves perfectly destructively interfere.
For the rest of the problem, assume that L takes one of the special values found in part (c).
(d) Using energy conservation, recover the result of problem 22(b).
(e) Suppose that a laser with power P has been fired at the interferometer for a long time. Then,
at a certain moment, the laser is suddenly switched off. Find the total energy of the light
that travels from the interferometer back towards the laser after the laser is switched off. For
simplicity, suppose that |t| ≪ 1, and give your answer in terms of P, L, |t|, and c.
(f) Estimate the duration of the light pulse that travels back towards the laser.
Solution. Parts (a) to (d) are textbook standards; (e) and (f) were in EuPhO 2024, problem 3.
(a) Light can be immediately reflected from the first mirror. It can also go in between the mirrors
and be reflected any number of times before leaving through either mirror.
(b) For a wave to be transmitted, it must be transmitted through one mirror, reflected 2n times,
then travel a distance of L and get transmitted out the other mirror. For each intermediate
reflection, its amplitude gets a factor of α = reikL. Then we have
tnet = t2
eikL
1 + α2
+ α4
+ ...

=
t2eikL
1 − r2e2ikL
as desired. As for reflection, we have
rnet = r + t2
eikL
α + α3
+ α5
+ ...

= r +
rt2e2ikL
1 − r2e2ikL
(c) The fraction of the energy transmitted is
T = |tnet|2
=
|t|4
|1 − r2e2ikL|2
.
This is maximized when r2e2ikL is real and positive, so that it is equal to |r|2, giving
T =
|t|4
(1 − |r|2)2
= 1.
This is a striking result: you can put two nearly perfect mirrors next to each other, and light
of the right color will still go right through. This is because the light that goes go through the
first can bounce around inside many times, eventually completely canceling the zeroth order
reflected wave. This phenomenon is called resonant transmission.
32
Kevin Zhou Physics Olympiad Handouts
(d) In this case, we have |tnet|2 = 1, so energy conservation implies rnet = 0, which means
0 = r +
(t2/r)r2e2ikL
1 − r2e2ikL
= r +
t2|r|2/r
1 − |r|2
= r +
t2|r|2/r
|t|2
.
This is equivalent to
r2
|r|2
= −
t2
|t|2
so that the phases of r2 and t2 differ by π, so the phases of r and t differ by π/2.
(e) We’ve established that, in the steady state, the total reflected wave has zero amplitude. Let
∆t = 2L/c be the time for one round trip within the interferometer. For the first ∆t, the total
reflected wave is “missing” the direct reflected wave, so it has an amplitude of magnitude r.
For the next ∆t, it is missing both the direct reflected wave and the one involving one trip
within the interferometer, and so on.
To make this more quantitative, note that |r| = reikL, so that
rnet = r + t2
eikL
(|r| + |r|3
+ |r|5
+ ...) = e−ikL
|r| + (|r|3
− |r|) + (|r|5
− |r|3
) + ...

.
So for the first ∆t, the reflected amplitude has magnitude |r|, and for the next ∆t, it has
magnitude |r|3, and so on. Then we have
Er = (P ∆t)(|r|2
+ |r|6
+ |r|10
+ ...) =
2PL
c
|r|2
1 − |r|4
≈
PL
|t|2c
where we used |t| ≪ 1.
(f) Every time ∆t, the reflected pulse weakens by a factor of |r|4, where 1 − |r|4 ≈ 2|t|2. Then
the timescale of decay is roughly T ∼ ∆t/|t|2 ∼ L/(|t|2c).
[3] Problem 24.  W 1 0USAPhO 2004, problem A3.
[3] Problem 25 (Kalda). In fiber optics, devices called equal ratio splitters are often used; these are
devices where two optical fibers are brought into such a contact so that if an electromagnetic wave
is propagating in one fiber, it splits into two equal amplitude waves traveling in each of the fibers.
Assume that all waves propagate with the same polarization, i.e. that all electric fields are parallel.
(a) Show that whenever a wave enters the splitter, from either fiber, one of the outgoing waves is
advanced in phase by π/4, while the other is retarded by π/4.
(b) From part (a) alone, it’s ambiguous which wave is advanced and which wave is retarded. Let’s
suppose that the fibers are set up so that, when a wave enters along fiber 1, the wave that
exits along fiber 1 is advanced. If a wave enters along fiber 2, is the wave that exits along
fiber 1 advanced or retarded?
33
Kevin Zhou Physics Olympiad Handouts
(c) Now consider two sequentially positioned, identical equal ratio splitters, as shown.
This is called a Mach–Zehnder interferometer. The optical path difference between the inter-
splitter segments of the two fibers is 30µm. Assuming the wavelength of the incoming
monochromatic light varies from 610nm to 660nm, for what wavelengths is all the light
energy directed into fiber 2?
Solution. (a) This is a case where the heuristic argument of problem 22(c) works, because there’s
nothing but vacuum at the splitting point. Let the ingoing electric field amplitude be Ein,
and let the outgoing field amplitudes be E1 and E2. Then
Ein = E1 + E2, |Ein|2
= |E1|2
+ |E2|2
from continuity of the electric field, and energy conservation. Thus, by the Pythagorean
theorem, E1 and E2 must differ in phase by π/2. For the equal ratio splitter relevant to this
problem, one of them is advanced in phase by π/4, while the other is delayed in phase by π/4.
(b) Consider sending in waves with the same phase and equal amplitude E0 along both fibers 1
and 2 simultaneously. If the wave that exits along fiber 1 is always advanced, then the final
amplitudes are
E1 = (eiπ/4
+ eiπ/4
)
E0
√
2
=
√
2eiπ/4
E0, E2 = (e−iπ/4
+ e−iπ/4
)
E0
√
2
=
√
2e−iπ/4
E0.
On the other hand, if a wave that enters along fiber 2 exits along fiber 1 retarded instead, the
final amplitudes are
E1 = (eiπ/4
+ e−iπ/4
)
E0
√
2
= E0, E2 = (e−iπ/4
+ eiπ/4
)
E0
√
2
= E0.
Only the second option respects energy conservation, |E1|2 +|E2|2 = 2|E0|2, so that one must
occur. In other words, we have:
1 → 1,2 → 2 : advanced, 1 → 2,2 → 1 : retarded
(c) Let’s consider the two components of the waves that eventually exit along fiber 1.
• Part of the incident wave stays in fiber 1 at the first splitter, getting advanced by π/4. It
picks up some phase between the two splitters, then gets advanced by π/4 again at the
second splitter.
• Part of the incident wave goes into fiber 2 at the first splitter, getting retarded by π/4.
It picks up some phase between the two splitters, then (by the result of part (b)) gets
retarded by π/4 again at the second splitter.
34
Kevin Zhou Physics Olympiad Handouts
For all the light to come out along fiber 2, these two components that come out along fiber 1
have to cancel out. That means they need opposite phases, which implies
π/4 + kℓ + π/4 − (−π/4 + k(ℓ + ∆ℓ) − π/4) = (2n + 1)π.
This simplifies to k∆ℓ = 2πn, or nλ = ∆ℓ = 30µm, from which we conclude
n ∈ {46,47,48,49}, λ ∈ {612,625,638,652}nm.
Remark
Above, we’ve focused on cases where light can only exit a given optical element in two
ways. But in general, you could have n “ports”, in which case you would need an
entire n × n matrix of coefficients S to relate the n input amplitudes to the n output
amplitudes. Generalizing problem 22 to this case shows that S is a unitary matrix, S† = S−1.
All of the optical elements we’ve seen so far obey optical reciprocity, i.e. the principle that
“if I can see you, then you can see me”, related to time reversal symmetry. However, we can
violate reciprocity by using special materials, such as permanent magnets. For example, a
circulator is an optical element with 3 ports, so that all light entering port 1 exits from port
2, light in port 2 exits from port 3, and light in port 3 exits from port 1. Though it’s exotic,
there’s no way to use it to violate the second law of thermodynamics.
