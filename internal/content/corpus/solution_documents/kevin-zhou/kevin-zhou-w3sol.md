---
id: solution-document-kevin-zhou-w3sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/W3Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-w3-ex001, kevin-zhou-w3-ex002, kevin-zhou-w3-ex003, kevin-zhou-w3-ex004, kevin-zhou-w3-ex005, kevin-zhou-w3-p001, kevin-zhou-w3-p003, kevin-zhou-w3-p006, kevin-zhou-w3-p007, kevin-zhou-w3-p012, kevin-zhou-w3-p014, kevin-zhou-w3-p015, kevin-zhou-w3-p016, kevin-zhou-w3-p029, kevin-zhou-w3-p032]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/W3Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Waves III: Specific Waves
Sound waves are covered in chapter 19 of Halliday and Resnick, while light waves are covered in
chapters 39 and 44. For more about light waves, see chapter 9 of Purcell. For water waves, and many
other neat wave phenomena, see chapter I-51 of the Feynman lectures and chapter 7 of Crawford’s
Waves. For more about polarization, see chapter I-33 of the Feynman lectures, or for more detail,
chapter 8 of Hecht’s Optics. Basic geometric optics is covered in chapter 40 of Halliday and Resnick,
and chapter 1 of Wang and Ricardo, volume 2. There is a total of 82 points.
1 Sound and Longitudinal Waves
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
1Kevin Zhou Physics Olympiad Handouts
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
2Kevin Zhou Physics Olympiad Handouts
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
[2] Problem 3. A rubber rope with unstretched length L0 is stretched to length L > L0.
(a) Find the ratio of the speeds of transverse and longitudinal waves.
(b) Experimentally, it is found that the longitudinal waves are much more strongly damped. (You
can check this at home, by making such a rope by tying together cut rubber bands.) Can you
explain why, by considering the molecular structure of rubber?
Solution. (a) Using the result of problem 1, the longitudinal wave speed is
vl =
r
kL2
m
3Kevin Zhou Physics Olympiad Handouts
where k and m are the spring constant and mass. The transverse wave speed is
vt =
s
T
m/L
=
r
k(L − L0)L
m
from which we conclude that
vt
vl
=
r
L − L0
L
.
Note that they become approximately equal in the limit where the rope is highly stretched.
(b) As was discussed in T2, the molecules of rubber are long chains, which are curled up in
the rubber’s unstretched state, and get straightened as it stretches. Longitudinal waves
thus involve crumpling and straightening the chains, which dissipates a lot of energy, while
transverse waves only involve the chains bending from side to side.
Idea 1: Doppler Effect
Working in one dimension with speed of sound c, if a source of sound at frequency f0 travels
at velocity vs while an observer to their right travels at velocity vo, the observed frequency is
f =
c − vo
c − vs
f0.
Example 1
A speaker is between two perfectly reflective walls and emits a sound of frequency f0. If you
carry the speaker and walk with small speed v towards one of the walls, what do you hear?
Solution
Walking is slow, so we work to lowest order in v/c. The wall you’re walking toward
experiences a sound of frequency f0(1 + v/c) by the Doppler effect, and this is the frequency
it reflects. Since you’re walking towards the wall, a second Doppler effect occurs, caus-
ing you to hear frequency f0(1+2v/c). (We also saw this “double Doppler shift” back in R1.)
By similar reasoning, you hear sound of frequency f0(1 − 2v/c) from the wall behind you.
And of course, you also hear f0 from the speaker itself. Thus, in total you hear beats of
frequency 2vf0/c, as well as a weaker beat of frequency 4vf0/c from the two reflected waves.
Example 2
In my former college at Oxford, there is a long staircase that is said to “quack” when one
claps at it. What is the explanation of this phenomenon?
Solution
A diagram of the staircase is given below, courtesy of Felix Flicker, fellow of New College.
4Kevin Zhou Physics Olympiad Handouts
The key is that each clap reflects off a stair individually. When the echoes arrive back at the
listener, they arrive quickly enough to be heard as a pitch.
The width and height of the steps are w = 30cm and h = 16cm. Suppose one claps at a
distance L ≫ w,h. The path length differences for reflections off the bottom few steps are
approximately 2w, giving the frequency
f =
v
2w
= 570Hz
where we used v = 343m/s. The quack then continues, due to reflections off higher and
higher stairs. Once the stairs are much further away than L, path length differences for
subsequent reflections are approximately 2
√
w2 + h2, giving frequency
f =
v
2
√
w2 + h2
= 500Hz.
Hence the quack consists of a pitch that starts high and then falls slightly lower as it fades
away. For further discussion, see the article How the Mound got its Quack.
[3] Problem 4.  m 1 0USAPhO 1998, problem B1. (The official solution has a qualitatively incorrect
answer for the final part of the problem; see Stefan Ivanov’s errata for the correct answer.)
[3] Problem 5.  W 1 0USAPhO 2016, problem A1.
[2] Problem 6. Some problems about sound waves in everyday life.
(a) Get a coffee cup with a handle and tap on the rim with a spoon. You will hear two distinct
pitches, e.g. if you tap directly above the handle, or 45◦ away from this point. Investigate
what happens for different angles. Can you explain why this happens?
(b) According to introductory textbooks, the fundamental mode for a pipe of length L and radius
r ≪ L, closed at one end and open at the other, has wavelength 4L. In reality, it’s a little bit
different because the radius is nonzero. Is the wavelength actually longer or shorter than 4L?
(c) Find a way to produce beats in real life.
Solution. (a) You should find that the pitch can be slightly lower or higher, and that it’s lower
if you tap directly above the handle, or 90◦, 180◦, or 270◦ away from it. See this nice video
for the explanation.
5Kevin Zhou Physics Olympiad Handouts
The basic idea is that the dominant vibrational mode deforms the circular rim into an ellipse,
whose major and minor axes swap places during the oscillation. There are two possible
“polarizations” for this deformation. In one of them, the handle is on a major/minor axis, so
it moves; in the other, it is 45◦ away from these axes, so it doesn’t move. In the former case,
there is more inertia, so the frequency is lower.
(b) It’s a little bit longer. In the introductory textbook, we model the end of the pipe as an ideal
pressure node, fixed to atmospheric pressure. But in reality, the sound wave propagates a bit
out of the pipe and spreads out radially. (It won’t even “know” the pipe ended until it’s done
this.) This effect is known as the end correction, and the added length is of order r.
(c) There are a lot of ways of doing this. You could pluck strings, or use your own voice. It’s
even possible with some kinds of dinner fork.
2 Polarization
Now we’ll introduce polarization for light waves, putting the results of E7 to work.
Idea 2
The polarization of a light wave refers to the direction of its electric field; the light waves
we saw in E7 were linearly polarized. For example, a light wave traveling along ẑ with its
polarization an angle θ from the x-axis has electric field
Ex(z,t) = (E0 cosθ)cos(kz − ωt), Ey(z,t) = (E0 sinθ)cos(kz − ωt).
A polarizer lets only light of a certain linear polarization through; if light with a linear
polarization an angle θ from this axis passes through it, then a fraction cos2 θ of the energy is
transmitted. Just as light can be incoherent, it can be unpolarized; unpolarized light hitting
a polarizer loses half its energy.
[3] Problem 7. A simple polarizer contains many very thin, closely spaced wires. If the wires are
vertical, they block vertical electric fields, allowing only horizontally polarized light to go through;
this is a horizontal polarizer. One can similarly make diagonal and vertical polarizers.
(a) Suppose that perfectly monochromatic, but unpolarized light is incident on a double slit. (In
this case, assume “unpolarized” means that at each instant in time, the polarization of the
light passing through each slit is the same, but over longer timescales that polarization can
vary.) What does the intensity pattern on the screen look like?
(b) Next, suppose a vertical polarizer is placed in front of one slit, and a horizontal polarizer is
placed in front of the other slit. Now what does the intensity pattern look like?
(c) Finally, we further modify the setup of part (b) by placing many diagonal polarizers, at 45◦
to the vertical and horizontal, right in front of the screen. What does the intensity pattern
on the screen look like now?
(d) On an unrelated note, suppose we wish to rotate the polarization of linearly polarized light by
using N ≫ 1 intermediate polarizers. What’s the best way to do this, and what’s the fraction
of light that passes through the stack?
6Kevin Zhou Physics Olympiad Handouts
Solution. (a) It’s just an ordinary double slit interference pattern. Since the light goes through
the slits with the same polarization at each moment, it shows up at the screen with the same
polarization at each moment. Then the amplitudes directly add, yielding interference effects.
(b) Let’s let the horizontal and vertical directions be x and y. Then at a given point on the
screen, the light from one slit gives Ex and the light from the other slit gives Ey. The intensity
is proportional to E2
x + E2
y, so the intensities just add, with no interference term. So the
interference pattern is completely destroyed. The general point is that stable interference
patterns can only exist when the things you’re interfering have all the same properties.
(c) The amplitude of the diagonal light is now (Ex/
√
2)+(Ey/
√
2), so the intensity at the screen
is now proportional to (Ex + Ey)2, so it’s now possible to see some interference effects again.
However, it’s not perfect. For example, if the light entering the slits was horizontal at some
moment, then it would get totally blocked at one slit, so the result shows no interference
pattern. The same is true if the light entering the slits is vertical. However, if the light entered
the slits polarized at 45◦ to the vertical, then its amplitude would get penalized by the same
factor of 1/
√
2 at each slit, and at the screen we would get a perfect interference pattern. In
practice, the incoming polarization of “unpolarized” light rapidly changes over time, so on
average we get a partially visible interference pattern, i.e. there are still minima and maxima
but the minima don’t have zero intensity.
This is an interesting result because you might think, based on the result of part (b), that
polarizers can only destroy interference patterns; however, adding more of them at the screen
can actually bring them back!
Exactly the same logic can be used to explain the famous “delayed choice quantum eraser”. In
popular science articles, people often say this experiment proves that quantum mechanics can
“rewrite the past”. But it’s really just a tricky interference effect that also shows up classically.
(d) For a small misalignment, the fraction of intensity lost goes up quadratically with the mismatch
in angle, so we should have the polarizers uniformly spaced by angle θ/N. Then each filter
multiplies the intensity by cos2(θ/N) ≈ 1 − θ2/N2, so the overall intensity is multiplied by

1 −
θ2
N2
N
≈ exp

−
θ2
N

.
In the limit N → ∞, no intensity is lost. So in principle you can rotate polarization this way,
though it’s better to just use a half-wave plate, which will be described below.
Idea 3
For a plane wave propagating along the z-axis with general polarization, it’s useful to write
E(z,t) = Re

E0 ei(kz−ωt)

where E0 is a complex two-component vector, describing both its amplitude and polarization.
For example, if E0 = E0 x̂, the light wave is horizontally polarized, if E0 = iE0 x̂, it’s
horizontally polarized with a phase shifted by π/2, if E0 = E0 ŷ it’s vertically polarized, and
if E0 = E0 (x̂ + ŷ)/
√
2 it’s diagonally polarized.
7Kevin Zhou Physics Olympiad Handouts
When linear polarizations are combined with a relative phase, the result is circular (or more
generally, elliptical) polarization. For example, when E0 = E0(x̂ + iŷ)/
√
2, we have
Ex(z,t) =
E0
√
2
cos(kz − ωt), Ey(z,t) = −
E0
√
2
sin(kz − ωt)
which is a circularly polarized light wave; the electric field at a fixed point rotates in a circle
over time, and if one draws the electric field vectors in a line along k̂, they trace out a spiral.
Birefringent materials, which have different indices of refraction in different directions, cause
such phase shifts, and thus can convert linear polarizations into other polarizations.
Example 3
A plane wave with amplitude E0 = E0 x̂ enters a linear optical device, which does not absorb
or reflect any energy. When the plane wave exits the device, it has circular polarization,
E0 = E0 (x̂ + iŷ)/
√
2. What does the device do to light with vertical polarization?
Solution
Vertical polarized light has to exit with circular polarization of the other handedness, i.e. with
E0 = E0eiθ(x̂ − iŷ)/
√
2 for some unknown phase θ, because this is the only possibility
consistent with energy conservation.
To see this, note that the energy of a light wave is proportional to the time-averaged value
of |E|2, which is turn proportional to |E0|2. Since horizontal and vertical polarizations are
orthogonal, they don’t interfere, so sending in both a horizontal and vertical light wave of
amplitude E0 at the same time just doubles the input energy. This must also double the
output energy, and indeed, under the above ansatz we have
x̂ + ŷ →
x̂ + iŷ
√
2
+
x̂ − iŷ
√
2
=
√
2x̂
which indeed has double the energy of one wave by itself.
The more general principle here is that, since x̂ and ŷ were orthogonal to each other, they
must be mapped to two other unit vectors which are still orthogonal, as complex vectors.
That is indeed true, because
(x̂ + iŷ)†
(x̂ − iŷ) = x̂ · x̂ + i2
ŷ · ŷ = 0.
Once we know what the device does to horizontally and vertically polarized light, we can
find what it does to any polarization of light by superposition.
[2] Problem 8 (MPPP 127). A birefringent material is placed between two orthogonal polarizers. The
material has thickness d, and has an index of refraction of n1 for light linearly polarized along the
axis e, and n2 for light polarized about an orthogonal axis.
8Kevin Zhou Physics Olympiad Handouts
If the system is illuminated with light of wavelength λ, give a value for d and orientation of e that
maximizes the transmitted light.
Solution. We want to turn vertical polarization into horizontal polarization. Note that the hori-
zontal polarization x̂ and vertical polarization ŷ can both be viewed as equal superpositions of the
diagonal polarizations (x̂ ± iŷ)/
√
2, but with opposite relative sign, i.e. a relative phase shift of π.
Thus, we want ê to point diagonally, φ = 45◦, and set d so that it flips the relative sign between
these diagonal polarizations. This occurs if d = (k + 1/2)λ/(|n1 − n2|) for a whole number k. This
system is called a half-wave plate.
[2] Problem 9 (MPPP 128). In the first 3D movies, spectators would wear glasses with one eye tinted
blue and the other tinted red. This was quickly abandoned in favor of a system that used the
polarization of light.
(a) If you wear an old pair of 3D movie glasses, close one eye, and look in the mirror, then
you can only see the open eye. Explain how these glasses employ light polarization. What
disadvantages might this system have?
(b) If you wear a new pair of 3D movie glasses and do the same, then you can only see the closed
eye. Explain why.
Solution. (a) One eye only lets vertically polarized light through, and the other only lets hor-
izontally polarized light through, so that you can see different images with each eye. The
disadvantage is that if you tilt your head, the images for each eye will get mixed together.
(b) One eye only lets clockwise polarized light through, and the other only lets counterclockwise
polarized light through; the mirror flips the direction of circular polarization.
[2] Problem 10 (HRK). A quarter-wave plate is a birefringent plate that causes a π/2 phase shift
between light polarized along e and perpendicular to e. Similarly, a half-wave plate causes a π
phase shift. Suppose you are given an object, which may be a quarter-wave plate, a half-wave plate,
a linear polarizer, or just a semi-opaque disk of glass. How can you identify the object? You can use
an unpolarized light source, and any number of polarizers and quarter-wave and half-wave plates.
Solution. There are many ways to approach this, but here’s a way that just uses an unpolarized
light source and up to two polarizers. First, a quarter-wave plate and a half-wave plate don’t change
the intensity of light, so if the intensity is reduced, it’s either a polarizer or a semi-opaque disk. To
distinguish between the latter two, you can check if the output is linearly polarized, by applying a
polarizer. (For example, there should be an orientation of the polarizer where the output light is
blocked entirely.)
9Kevin Zhou Physics Olympiad Handouts
To distinguish between a quarter-wave and half-wave plate, one could use a polarizer to send in
linearly polarized light. A half-wave plate transforms linearly polarized light into linearly polarized
light, with possibly a different polarization axis. That means that the output must be linearly
polarized, which you can check by seeing if it can be totally blocked by a polarizer.
On the other hand, a quarter-wave plate can transform linearly polarized light into an arbitrary
elliptical polarization, and if you orient it correctly, the output will be circularly polarized. When
circular polarized light enters a polarizer of any orientation, exactly half of the intensity is blocked.
So if the object is a quarter-wave plate, there will exist an orientation of the object so that when
you put a polarizer after it, the output intensity is independent of that polarizer’s orientation.
[2] Problem 11 (HRK). A polarizer and a quarter-wave plate are glued together so that, if the
combination is placed with face A against a shiny coin, the face of the coin can be seen when
illuminated by light of appropriate wavelength. When the combination is placed with face A away
from the coin, the coin cannot be seen. Which component is on face A and what is the relative
orientation of the components?
Solution. Let the components of the object be A and B. One simple way to think about it is to
“unfold” the reflection, i.e. to replace the coin with a inverted version of this system behind it. Then
the problem tells us that some light can pass through BAAB, but none can pass through ABBA.
This is only possible if A is the polarizer and B is the quarter wave plate. Some fraction of the
light will always pass through BAAB. As for ABBA, suppose we let A be a vertical polarizer, and
let the optical axis of B be at 45◦ to the vertical. Then two copies of B is effectively a half-wave
plate, which converts vertically polarized light to horizontally polarized light, which gets blocked
by the second copy of A. So no light goes through ABBA.
[2] Problem 12. Most optical elements are time-reversal symmetric, but the “Faraday rotator” is not.
(It contains magnetic fields, and the direction of a magnetic field flips under time reversal.) When
viewed from the top, linearly polarized light passing down through it will have its polarization rotated
clockwise by θ, but light passing up through it will also have its polarization rotated clockwise by
θ. In other words, if linearly polarized light goes through a Faraday rotator, bounces off a mirror,
and returns through it, it doesn’t return with the same polarization, but rather is rotated by 2θ.
(a) Explain how to use a Faraday rotator, in combination with other optical elements mentioned
above, to construct an optical isolator: a system which allows some light to pass through in
one direction, but none to pass through in the other direction.
(b) In T2, we argued that a “one-way” light filter would violate the second law of thermodynamics.
So why is the setup in part (a) allowed?
Solution. (a) The simplest setup involves a horizontal polarizing filter, a Faraday rotator with
θ = 45◦, and then a diagonal polarizing filter. When light passes from left to right, it hits
the horizontal polarizing filter, gets rotated to the diagonal polarization, then leaves. When
light passes from right to left, it hits the diagonal polarizing filter, gets rotated to the vertical
polarization, then gets blocked by the horizontal polarizing filter.
(b) Unlike the ideal reflection and transmission considered in T2, the isolator here necessarily
absorbs energy, which increases its entropy. The entropy gained by the isolator, ∆S = ∆Q/T,
overwhelms the decrease in entropy from organizing photons only on one side of the isolator.
(Then you might ask, what about the limit T → ∞? But in that case, we must also account
10Kevin Zhou Physics Olympiad Handouts
for the blackbody radiation emitted by both sides of the isolator, so we don’t really have a
functional isolator at all.)
[4] Problem 13.  T 1 0IZhO 2021, problem 3. A problem on the propagation of light through a
waveguide, unifying material from E7 and W1.
3 Water Waves
Water waves are the most familiar examples of waves in everyday life, but you won’t find them
mentioned often in introductory textbooks, because they’re far more complicated than any other
kind of wave we’ll consider. In all the problems below, we will completely neglect viscosity, surface
tension, and compressibility of the water. Despite this, our results will still only be approximate.
[4] Problem 14. Consider water with depth D and density ρ. A shallow water wave (i.e. one with
wavelength much greater than D) travels along the x-direction with height h(x,t) ≪ D relative to
the water level. It turns out that the water has a horizontal velocity v(x,t) which is approximately
independent of height, and negligible vertical velocity. Even though the water is moving, the
hydrostatic pressure formula still works because the water’s vertical acceleration is negligible.
(a) Find a relation between the derivatives of h(x,t) and v(x,t) using conservation of mass. Using
this result, show that the phase velocity vw of the water waves obeys v ≪ vw.
(b) Find a relation between the derivatives of h(x,t) and v(x,t) using force and momentum.
(c) Combining these results, find the phase velocity vw of shallow water waves.
Now let’s consider what happens when a shallow water wave created at sea approaches the shore,
and the depth D slowly decreases.
(d) Explain why waves always arrive at the shore moving perpendicular to the shoreline.
(e) If the depth is gradually halved, by what factor is the height of the wave multiplied? This
phenomenon is known as shoaling.
Solution. (a) Consider the region between x and x + dx. The rate that water flows into this
region must equal the rate of change of its volume due to the change in height. Then
AD(v(x) − v(x + dx)) = A
dh
dt
dx.
That is, we have
−D
∂v
∂x
=
∂h
∂t
.
For a sinusoidal wave, a derivative with respect to x gives a factor of k and a derivative
with respect to t gives a factor of ω. So we have Dkv ∼ ωh, and since vw = ω/k, we have
v ∼ vwh/D ≪ vw.
11Kevin Zhou Physics Olympiad Handouts
(b) Consider the horizontal forces on the fixed piece of water that, at some moment, is between
x and x+dx. This water has atmospheric pressure at its upper surface, so the net horizontal
force on it due to hydrostatic pressure is
F =
1
2
ρgℓ (D + h(x))2
− (D + h(x + dx))2

≈ −ρgDℓ
∂h
∂x
dx
where we used h ≪ D, and let ℓ be the length of the water in the transverse direction.
This must be equal to the rate of change of momentum of this piece of water, which is
dp
dt
= ρℓDdx
dv
dt
= ρℓDdx

∂v
∂t
+ v
∂v
∂x

.
In the second step, we used the idea of the “convective derivative”. That is, the chunk of
water originally at x at time t will move to x′ = x + v(x,t)dt after a time dt, at which point
its velocity will be v(x′,t + dt) = v(x,t) + ((∂v/∂t) + v(∂v/∂x))dt, so the acceleration of the
water has two terms.
Now, the rough sizes of these two terms are ωv and kv2, so the second term is smaller by a
factor of v/vw. We thus neglect it, and conclude that
−g
∂h
∂x
=
∂v
∂t
.
(c) Combining the results of the last two parts, we have
∂2h
∂t2
= −D
∂2v
∂x∂t
= gD
∂2h
∂x2
which is just the ideal wave equation with wave velocity vw =
√
gD. (This is both the phase
velocity and the group velocity.)
(d) The wave speed is proportional to
√
D, so the waves slow down as they approach the shore.
So by Snell’s law, they refract towards the normal direction.
(e) Note that nothing is adding or subtracting energy from the wave, and that the number of
periods of the wave stays the same. Thus, the amount of energy in each period of the wave
stays the same. (We could get the same result by identifying an adiabatic invariant, as
discussed in M4. In this case, it is called the wave action.)
The gravitational and kinetic energy are equal on average, so for simplicity we’ll consider the
former. For a wave of wavelength λ, height h, and width ℓ, the gravitational potential energy
of one period is
E ∼ ρgλℓh2
.
The frequency of the wave stays the same, so λ is proportional to the wave speed,
E ∝ vh2
∝
√
Dh2
.
Thus, when D is halved, h increases by a factor of 21/4. This is known as Green’s law.
Eventually, h becomes comparable to D and our expressions break down.
12Kevin Zhou Physics Olympiad Handouts
Remark
Textbooks commonly say that liquids can’t support transverse waves, because they don’t
support shear stresses. But the waves considered in problem 14 are clearly transverse. This
is possible because the textbook statement only applies to the internal forces of water alone.
At the surface of the water, gravity provides the transverse restoring force; that’s why these
waves are also commonly called “gravity waves”.
[2] Problem 15 (Japan). In the above problem, we considered shallow water waves, D ≪ λ, in which
case the motion of the water is approximately horizontal. But in general, it turns out that the
motion of the water will depend on height, and also that the individual water molecules move in
ellipses. (This happens even when the wave has small amplitude, which we will always assume; the
motion for large amplitude is even more complicated.) In the limit of deep water waves, D ≫ λ,
the water molecules move in circles. Using this fact, we can quickly derive the wave speed.
Assume the water molecules at the surface of the wave move in uniform circular motion with
radius a and angular velocity ω, as shown.
(a) Consider the frame of reference moving to the right with velocity v. In this frame, the surface
of the water is completely stationary, while molecules travel along the surface. Consider a
small parcel of water which travels from a valley to a peak. By applying conservation of
energy, derive a relationship between v, ω, and g.
(b) Find the phase and group velocity of the wave, in terms of g and the wavenumber k. In
addition, find the condition on a and k for this derivation to make sense.
Showing that circularmotion actually occurs takes more work, and involves solving partial differential
equations; you can find a complete derivation here or in the first chapter here.
Solution. (a) At the bottom of the circle, the speed is v+aω, and at the top the speed is v−aω.
However, since the parcel just moves along the surface of the water, no work is done on it
(the water effectively just provides a normal force to keep the parcel on its surface), so this
change in speed is balanced by a change in gravitational potential energy. That is,
1
2
(v + aω)2
− (v − aω)2

= 2ga
13Kevin Zhou Physics Olympiad Handouts
which implies v = g/ω. (Note that this argument only works for sufficiently small wave
amplitudes, a < v/ω.)
(b) The thought experiment in this problem considers an ideal plane wave, so it’s computing the
phase velocity. Thus, using vp = ω/k and vp = g/ω, we have
vp =
p
g/k.
In addition, we can solve for the dispersion relation to find
ω(k) =
p
gk
from which we find the group velocity,
vg =
dω
dk
=
1
2
p
g/k.
Referring back to part (a), this derivation only makes sense if vp > aω, which is equivalent to
ka < 1. That makes sense, as when ka ≳ 1, the amplitude is large compared to the wavelength,
indicating a nonlinear wave. (If we were doing a more rigorous derivation, we would find that
the parcels of water only travel in circles in the small amplitude limit ka ≪ 1.)
As you can see, water waves are quite complex. A diagram of the speeds of nine different limiting
cases of water waves can be found in section 8.4 of The Art of Insight.
4 Reflection and Refraction
Now we’ll introduce reflection and refraction with some real-world applications.
Idea 4
If a wave hits an interface, while traveling at an angle θ1 to the normal to the interface, then
it will generically both reflect and refract. The angle of the reflected ray is also θ1, and the
angle θ2 of the refracted ray obeys n1 sinθ1 = n2 sinθ2. If there is no solution for θ2 in the
latter equation, then only reflection occurs.
These results follow directly from Huygens’ principle, so they are very general, applying to
light waves, sound waves, water waves, and so on, as long as the index of refraction ni is
always defined to be inversely proportional to the wave speed in each medium.
[1] Problem 16. Some conceptual questions about reflection and refraction.
(a) Does the index of refraction determine the phase velocity or the group velocity?
(b) Does a light beam of finite width get wider or narrower upon passing from air to water?
Assume the light enters at an angle to the normal.
Solution. (a) It’s the phase velocity. Recall from E8 that Snell’s law is derived by considering a
plane wave incident on an interface, and demanding that the wave is appropriately continuous.
This only depends on the plane wave’s ω and k, which are related by the phase velocity.
(b) It gets wider because the beam bends towards the normal, as you check by drawing a sketch.
14Kevin Zhou Physics Olympiad Handouts
Example 4
Let the index of refraction at height h above the Earth’s surface be n(h). In terms of n(0)
and the Earth’s radius R, what should dn/dh be at the surface so that light rays orbit in
circles around the Earth, with constant height?
Solution
First, let’s ignore the curvature of the Earth. Consider a light ray moving slightly upward,
at a small angle θ to the horizontal, experiencing index of refraction n. Over a horizontal
distance L, it goes up by a height Lθ. At this point, it will have a different angle θ′ to the
horizontal, and experience index of refraction n + Lθdn/dh. Snell’s law says
ncosθ =

n + Lθ
dn
dh

cosθ′
and expanding to lowest order in the small angles θ and θ′ gives
n
2
(θ′2
− θ2
) = Lθ
dn
dh
.
Approximating again to lowest order gives
θ − θ′
≈ −
L
n
dn
dh
.
Thus, the light ray turns through an angle of (1/n)dn/dh per unit horizontal distance. For
the light ray to stay at a constant height over the curved Earth, this must equal 1/R, giving
dn
dh
= −
n(0)
R
.
More generally, this calculation shows that light bends towards the direction with higher n.
In the case of air, where n − 1 ≪ 1, we can rewrite this as
d(n − 1)
dh
≈ −
1
R
which can plausibly occur on Earth, due to the nice coincidence that n − 1 and H/R (where
H is the typical scale height of the atmosphere) are both of order 10−3.
Remark: Mirages
There are two classes of mirages.
• When dn/dh < 0, light rays bend down. If there is a distant object at the horizon, its
image will appear above the horizon. This is called a “superior” mirage.
• When dn/dh > 0, light rays bend up. Then a distant object at the horizon will appear
below the horizon, forming an “inferior” mirage. This also applies to the sky near the
horizon, producing the illusion of water on the ground sometimes seen in deserts.
15Kevin Zhou Physics Olympiad Handouts
In air, the refractive index is close to 1, and n − 1 ∝ ρ ∝ P/T, where ρ is the air density
and the second step used the ideal gas law. Usually we have dρ/dh < 0, since dP/dh < 0 in
hydrostatic equilibrium, but it depends on the value of dT/dh.
• In normal conditions, the Sun warms the ground and the hot air rises and adiabatically
mixes the atmosphere (as discussed in T1), so that dT/dh < 0. This partially cancels the
effect of the pressure variation, so that dn/dh is still negative but has small magnitude,
so that mirage effects aren’t apparent.
• In rare “thermal inversion” conditions, we have dT/dh > 0, so that dn/dh is negative
with large magnitude, leading to strong superior mirage effects. If dn/dh is negative
enough, it can match the value computed in example 4, allowing an observer to see
arbitrarily far along the horizon despite the curvature of the Earth. This was the reason
the famous Bedford Level experiment concluded the Earth was flat.
• In hot deserts, the air near the ground is very hot, so that dT/dh < 0 with a large
magnitude. (A strongly negative dT/dh also occurs in cold days above water, since the
water stays warmer than the air above it.) Here the temperature gradient overpowers
the pressure gradient, so that dn/dh > 0 and inferior mirages can occur.
Proponents of the flat Earth hypothesis claim that the Earth only seems curved due to
atmospheric refraction. But they have it backwards: in almost all conditions dn/dh < 0,
which makes the Earth look less curved than it actually is.
[4] Problem 17.  T 1 0IPhO 1995, problem 2. Refraction in the presence of a linearly varying wave
speed. (This is a classic setup with a neat solution, also featured in IPhO 1974, problem 2.)
[3] Problem 18. INPhO 2019, problem 1. Another exercise on refraction, with an uglier solution.
[3] Problem 19.  ^ 1 0USAPhO 2025, problem B2. A problem on shock wave wavefronts.
[3] Problem 20.  h 1 0IPhO 2003, problem 3B. An exercise on refraction and radiation pressure.
[4] Problem 21.  T 1 0IPhO 1993, problem 2. Another exercise on the same theme.
5 Ray Tracing
Idea 5
A pointlike object emits light rays in all directions. When those light rays subsequently
converge at some other point, that point is the object’s real image. If they don’t actually
converge, but all propagate outward with a common center, that point is the object’s virtual
image. In general, if we’re given that an image exists, we can find its location by following
the paths of selected rays from the object and looking for intersections.
[2] Problem 22. A pinhole camera is a simplified camera with no lens. It simply consists of a box
with a small hole (the “aperture”). An image of the outside appears on the inside of the box (the
“screen”), opposite the hole.
16Kevin Zhou Physics Olympiad Handouts
(a) Explain how the pinhole camera works by ray tracing.
(b) What are the disadvantages of having a larger or smaller aperture?
(c) Assuming the object being photographed is very bright, estimate the optimal aperture size
for taking a clear picture with a pinhole camera, for a box of side length L.
Solution. (a) Consider a point P on an object outside. Light is emitted from P in every direction.
If the front of the box was just open, then light rays from P could hit the whole back of the
box, brightening the whole screen. But if there’s a pointlike hole, then only one ray from P
can go through the hole, and that ray hits only one point on the back of the box, making a
sharp image of P there.
This is very different from how images are formed by lenses. A lens tries to redirect the light
rays from a source so that many of them hit the same point on the screen. A pinhole just
removes the unwanted rays.
(b) Using a larger aperture would make the image blurrier, since more rays can get through.
Using a smaller aperture would make the image dimmer; also, for very small holes, diffraction
becomes more important, and makes the image blurrier again.
(c) If the aperture size is a, then two rays can enter the aperture and end up at the same point
on the screen even if their directions are different by ∆θ ∼ a/L. This is the “geometric optics”
blurring effect, which is minimized by having a smaller hole. At the same time, diffraction
causes light passing through the hole to spread out by ∆θ ∼ λ/a, which is minimized by
having a larger hole. The optimum occurs when the two are comparable, so a ∼
√
λL. For
visible light and a camera-sized box, this is a fraction of a millimeter, which you can achieve
with a needle or mechanical pencil.
Pinhole cameras are extremely common in everyday life. They can form in the gaps between leaves;
the resulting dappled light on the ground is just many images of the disk of the sun.
The next three problems will exercise your intuition with real-world examples.
[2] Problem 23. AuPhO 2020, section C.
[2] Problem 24. AuPhO 2013, problem 11. You’ll also need the accompanying answer sheets.
[3] Problem 25. AuPhO 2019, problem 12. You’ll also need the accompanying answer sheets.
[2] Problem 26 (NBPhO 2024). This photo shows the reflection of a red heart in a conical mirror.
The photo was taken from far above the mirror. In degrees, what is the mirror’s apex angle?
17Kevin Zhou Physics Olympiad Handouts
Solution. See the official solution to problem 6(i). The answer is 70◦, and any answer within 5◦ is
acceptable.
[3] Problem 27.  ^ 1 0IZhO 2020, problem 1.3. A test of your intuition for 3D ray tracing.
Solution. You can check the official solutions as usual. But note that, as pointed out by Stefan
Ivanov here, the official solution gets the thicknesses of the borders wrong. In the first part, the
thickness of the border of the triangle should be 2r1 = 2mm. In the second part, the thickness of
the border of the star should be 3r2 = 0.3mm.
By the way, this isn’t some random question cooked up for an Olympiad; it’s a real effect in
pinhole cameras that puzzled physicists of the past. As you can read here, this effect distorts the
apparent sizes of the Sun and Moon, which puzzled Brahe. The problem was solved by Kepler in
1600, who developed essentially the same ideas you did when solving this problem.
Also, there’s an analogous phenomenon with shadows which you’ve seen many times in real life:
the shadow of an object lit by an extended light source contains an umbra and penumbra.
Idea 6
Conic sections have some simple properties under reflection.
• Light rays emitted from one focus of an ellipse will all be reflected to its other focus.
• Light rays emitted from one focus on a hyperbola will all be reflected so that the resulting
rays all travel radially outward from the other focus.
• Parallel light rays entering a parabola along its symmetry axis (i.e. the axis perpendicular
to the directrix) will all be reflected to its focus.
In the language of idea 5, if the foci of an ellipse/hyperbola are called F1 and F2, then
an object at F1 produces a real/virtual image at F2. Note that a parabola is simply an
ellipse in the limit where F1 becomes very far away, so that rays coming in from F1 become
approximately parallel.
[2] Problem 28 (Povey). The mirascope is a toy consisting of two parabolic mirrors, pointing toward
each other, so that the focus of each one is at the vertex of the other.
(a) When an object is placed at the bottom vertex, a real image appears at the top vertex. Why?
(b) How is the image oriented relative to the object?
18Kevin Zhou Physics Olympiad Handouts
The real image made by this setup is very convincing. There’s a Michelin starred restaurant that
uses it in a course: when you reach for what looks like the food, your hand just passes through air.
Solution. (a) Rays departing from the bottom vertex reflect off the top mirror and end up going
vertically downward. They then reflect off the bottom mirror and end up focused at the top
vertex, which is where the image appears.
(b) To figure this out, you need to trace some rays starting from points near the bottom vertex.
The result is that the image is flipped in the horizontal directions but not the vertical directions.
For example, if the object is a little pig standing up and facing to the right, the image is a
little pig standing up and facing to the left.
Idea 7: Paraxial Approximation
If a light ray hits a thin lens of focal length f at a shallow angle, and at a distance y ≪ f
above the lens’s center, then it will exit the lens deflected by an angle ±y/f, where the sign
depends on whether the lens is converging or diverging. (For example, any light ray going
straight through the lens’s center isn’t bent at all.)
This is the paraxial approximation, which only holds for light rays incident at shallow angles
near the center of the lens. The quantity P = 1/f is also called the optical power.
Conversely, if you don’t know the focal length of a system, you can use this idea to find it.
For example, the lensmaker’s equation, giving the focal length of a lens of radii of curvature
R1 and R2 and thickness d, is
1
f
= (n − 1)

1
R1
−
1
R2
+
(n − 1)d
nR1R2

and can be derived by computing the bending of the light ray at each interface.
Example 5
An object is placed a distance o behind a thin converging lens with focal length f.
An image is formed a distance i in front of the lens. How are o, i, and f related?
Solution
The horizontal light ray goes straight through, so let’s consider another light ray which
emerges at a small angle θ1 to the horizontal. Then we read off
θ1 ≈
y
o
, θ2 ≈
y
i
19Kevin Zhou Physics Olympiad Handouts
but their sum is the deflection y/f, from which we conclude
1
o
+
1
i
=
1
f
.
This is the familiar thin lens equation.
[2] Problem 29. Some basic questions about ray tracing.
(a) If two thin converging lenses of focal length f1 and f2 are placed right next to each other,
what is the effective focal length f of their combination?
(b) Show that if you have height h, you can see your entire body in a vertical mirror of length
h/2 whose top is at eye level, no matter how close or far you stand from it. Nonetheless, when
people want to look at their whole body in the mirror, they typically stand back. Why?
(c) A candle is placed behind a converging lens. An image is formed on a screen on the other side
of the lens. Now suppose that the top half of the lens is covered with a black cloth. Describe
how the image changes.
Solution. (a) For an incoming ray at height y, the first deflects the light by an angle y/f1, and
the second by an angle y/f2. So the optical powers of the lenses add, and f = f1f2/(f1 + f2).
(b) This is clear from placing your image an equal distance behind the mirror and drawing
similar triangles. It is a popular “gotcha” question in the physics education literature, which
supposedly proves that many people don’t know how their own eyes work. But there are good
reasons to stand back. If you’re right next to the mirror, the image of your head will be right
next to you, while the image of your feet will be several feet away, so you won’t be able to
focus the light from both at once. Also, your sharpest vision only occupies a small part of the
center of your field of view. So to look at yourself, your eyes have to constantly dart all the
way up and down while adjusting their focus. This is fixed by standing back.
(c) It is tempting to say that half of the candle’s image disappears, but that’s not right. Ray
tracing shows that you can get a complete image of the candle, since there are always rays
that pass through the bottom half of the lens. Instead, by blocking half the lens, the image
gets half as bright.
[3] Problem 30.  ^ 1 0USAPhO 2024, problem A3. A series of optics exercises relevant for real cameras.
[3] Problem 31.  ^ 1 0USAPhO 2026, problem A1. This question is straightforward, but assumes you
know the definition P = 1/f of optical power (expressed in “diopters”, which just means m−1).
Idea 8: Fermat’s Principle
For fixed starting and ending points, light always takes the path of least time. This implies
that if light from point P is all focused at point P′, then all the relevant paths from P to
P′ take the same time. This principle is completely equivalent to the laws of reflection and
refraction above, but may be more useful in certain situations.
20Kevin Zhou Physics Olympiad Handouts
[2] Problem 32. Parallel light rays coming in along the +x̂ direction enter a lens of index of refraction
n, whose left edge is at x = 0 and whose right edge is described by the function x(y). If all the light
beams are to be focused at x = f, as shown at left below, what kind of curve does x(y) have to be?
You should find that x(y) is not an arc of a circle, which implies that a spherical lens will fail to
focus all incoming horizontal light to a point. Instead, we will get spherical aberration, as shown at
right above. However, most lenses are spherical because it’s easier to make them that way.
Solution. The easiest method is to directly use Fermat’s principle. For the ray coming in at height
y, the total travel time is independent of y, so that
nx(y) +
p
y2 + (f − x(y))2 = a
for a constant a. Solving for y shows that this is part of a hyperbola with eccentricity n.
The above questions only cover the most basic features of geometrical optics. For more practice on
geometric optics in general, I strongly recommend Stefan Ivanov’s collection of Russian problems.
If you’ve taken a standard American high school physics class, you’ve probably already had some
experience with lens systems, but if you want more, I recommend chapter 40 of Halliday and Resnick.
21
