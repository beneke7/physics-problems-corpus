---
id: kevin-zhou-w3-p001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w3-p001
solution_type: author
source_document: solution-document-kevin-zhou-w3sol
source_pdf: sources/kevin_zhou/site/handouts/W3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W3Sol.pdf."
---

[3] Problem 1. In this problem, you’ll work through Newton’s slick derivation of the speed of sound.
Instead of considering how parcels of gas move, we consider the force the gas exerts when squeezed.
(a) In M4, we showed that the speed v of longitudinal waves in a spring of length L, mass M,
and spring constant obeys v2 = kL2/M. For a cylinder of gas of length L and area A, show
that the effective spring constant is
k = −A2 dp
dV
.
(b) Assuming the sound waves are adiabatic, use this to conclude that
v2
=
γp
ρ
.
If each gas molecule has mass m, rewrite the result in terms of γ, T, and m.
Next, we consider some limitations of this result.
(c) In an ideal gas, we assume the particles are noninteracting: they pass right through each
other. But for sound waves to propagate, adjacent packets of ideal gas must exert pressure
on each other. How is this possible? Use this observation to estimate the maximum possible
angular frequency of sound in a gas in terms of the number density n = N/V = p/kBT, the
radius r of a gas molecule, and the speed of sound v.
(d) Our analysis also breaks down if the pressure variations are no longer adiabatic. The rate of
heat conduction in a gas with thermal conductivity kt across a surface of area A is
dQ
dt
= −Akt
dT
dx
For a sound wave with angular frequency ω, show that the adiabatic approximation holds
when ω ≪ pkB/mkt. Does this hold for audible sound in air, where kt ≈ 25mW/(m · K)?
Solution. (a) By definition, we have k = −dF/dx, where F is the force experienced by a piston
at the end of the cylinder as it moves a distance x. But we also have F = Ap and dV = Adx,
and combining these gives the result.
1
Kevin Zhou Physics Olympiad Handouts
(b) Plugging the result of part (a) in, we have
v2
= −A2 dp
dV
L2
M
= −V
dp
dV
V
M
.
For adiabatic sound waves, V dp/dV = −ρdp/dρ = −γp, so that v2 = γp/ρ.
Alternatively, using the ideal gas law p = ρkBT/m, we can rewrite this as v2 = γkBT/m.
(c) There have to be enough gas molecules so that each individual gas molecule undergoes many
collisions per wave period, or else the wave will simply fall apart. We saw in part (b) that the
typical thermal speed of the air molecules is comparable to the speed of sound, so the mean
time between collisions is ∼ 1/(nr2v). Then we must have
ω ≪ nr2
v.
One easy trick to evaluate this is to note that air molecules are separated by roughly 10 times
their radius, n ∼ 1/(10r)3, and r ∼ 10−10 m. Then we have f ≪ 10−3v/r ∼ GHz.
(d) A sound wave consists of regions of higher and lower temperature. For the adiabatic approxi-
mation to be valid, the heat transfer rate has to be negligible compared to the rate at which
a parcel’s energy changes due to the propagation of the sound wave.
Let the sound wave have temperature amplitude ∆T, wavelength λ, and period τ ∼ λ/v.
Then a half-wavelength of warm air loses heat to its surroundings at rate
dQ
dt
∼
Akt ∆T
λ
∼ Akt ∆T
ω
v
.
On the other hand, its internal energy varies as the sound wave passes by, at the typical rate
dE
dt
∼ nAλkB
∆T
τ
∼ nAkB ∆T v.
Comparing these expressions, we must have
ω ≪
nkBv2
kt
∼
nk2
BT/m
kt
∼
pkB
mkt
∼ GHz.
Based on the intuition that adiabatic processes are “fast”, you might have guessed that sound
is adiabatic for high frequencies. Instead, it’s the opposite. The reason is that heat transfer
is enhanced at higher frequencies because λ gets shorter, so dT/dx gets higher.
Interestingly, the frequency cutoff is GHz, just like in the answer in part (c)! This isn’t a
coincidence: one can compute kt in terms of properties of the gas molecules (as was done in
T1), and plugging this in gives precisely the same expression as part (c). We conclude that
sound waves in air are adiabatic for all the frequencies they can even exist, and certainly at
audible frequencies.
Remark
Phase shifts upon reflection for sound waves can be a bit tricky. Recall from W1 that a hard
boundary for a transverse string wave y(x,t) sets y to zero. As a result, upon reflection, y
flips sign, but vy = ∂y/∂t stays the same.
2
Kevin Zhou Physics Olympiad Handouts
When a sound wave hits a hard wall, the wall sets the displacement ξ(x,t) to zero. Then
upon reflection, the displacement flips sign, while the pressure variation δP(x,t) ∝ ∂ξ/∂x
stays the same. In standing waves, a hard wall is thus a node for ξ and an antinode for δP.
Similarly, when sound waves in a tube reflect off an open end, the end sets δP to zero (since
everything outside the tube has atmospheric pressure), so it flips sign. An open end is thus
a node for δP and an antinode for ξ.
The rule is always the same: whatever quantity gets fixed to zero by the boundary gets
flipped in sign upon reflection, and for a standing wave, that quantity has a node at the
boundary. But it’s confusing enough that several common high school textbooks get it wrong.
Some even state, in their confusion, that “hard boundaries flip transverse waves but not
longitudinal ones”, which is definitely not true in general.
[2] Problem 2 (HRK). Some conceptual questions about sound waves.
(a) What is larger for a sound wave, the relative density variations ∆ρ/ρ or the relative pressure
variations ∆P/P? Or does it depend on the situation?
(b) What is larger, the velocity of a sound wave v or the amplitude of the velocity variations ∆u
of the underlying particles? Or does it depend on the situation?
(c) A speaker periodically switches between emitting frequency f1 and f2, with a frequency f′. If
you start moving, the f1 and f2 you hear will be Doppler shifted. Is f′ also Doppler shifted?
Solution. (a) For an adiabatic sound wave, P ∝ ργ, which implies ∆P/P = γ ∆ρ/ρ. Then
∆P/P is larger.
(b) For a sound wave of wavelength λ, during a time t ∼ λ/v the particles will move a distance
∆x ∼ ∆uλ/v. Then the maximum relative compression will be ∆x/λ ∼ ∆u/v. So as long
as the density variations are small, which would be true for a typical sound wave, we have
∆u ≪ v. (If we had ∆u ∼ v, then we would instead have a strong shock wave, which can’t be
described by the results above.)
(c) Yes. The Doppler shift is due to your relative velocity to the sound wave, so you pass through
the waveform (and thereby experience all of its properties) faster or slower by the same factor.
