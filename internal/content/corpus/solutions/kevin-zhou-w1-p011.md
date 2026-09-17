---
id: kevin-zhou-w1-p011
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w1-p011
solution_type: author
source_document: solution-document-kevin-zhou-w1sol
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W1Sol.pdf."
---

[5] Problem 11. Some instruments, such as xylophones and marimbas, are made with rigid rods
instead of strings. The equation that describes transverse vibrations is instead
∂2y
∂t2
= −A
∂4y
∂x4
for a constant A that depends on the material and cross-sectional area.
(a) For a xylophone bar of length L, find the standing wave solutions and their angular frequencies.
For simplicity, pretend that the solutions are sinusoidal in space, and that the bar has free
ends just like a string, even though this is not true in reality.
(b) When the bar in part (a) is hit, a certain note is sounded. What is the length of the bar that
makes a note one octave higher?
13
Kevin Zhou Physics Olympiad Handouts
(c) [A] ⋆ The actual boundary conditions for a free bar are
∂2y
∂x2
=
∂3y
∂x3
= 0
at the endpoints, and the solutions aren’t purely sinusoidal in space. Numerically compute
the lowest few standing wave angular frequencies and compare them to those you found in
part (a).
(d) A guitar or piano string satisfies the wave equation with a small additional fourth-order term,
∂2y
∂t2
= v2 ∂2y
∂x2
− A
∂4y
∂x4
.
Show that the standing wave frequencies are not linearly spaced, as they would be for an ideal
string, but instead are slightly more spaced out. This effect is called inharmonicity. (Hint:
the spatial profiles of the standing waves are still sinusoidal.)
We perceived two notes to be “in tune” when the component frequencies in the notes line up
with each other. But since the frequencies are more spread out than ideal harmonics, a piano
feels more in tune when the fundamental frequencies are spread out a little bit more. This
“stretch tuning” is significant and adds up to about an entire semitone across the piano!
Solution. (a) If we assume that the solutions are y(x,t) = sin(kx)cos(ωt) where kL = πn, using
the differential equation will get
−ω2
= −Ak4
, ω =
√
A
π2n2
L2
.
(b) The fundamental frequency is proportional to 1/L2, and going up by an octave doubles this,
so we need a length of L/
√
2.
(c) The spatial solutions look like exponentials e±kx and e±ikx. It’s easiest to use even and odd
combinations. Letting y(x,t) = u(x)cos(ωt), we have
u(x) = A1 cosh(kx) + A2 sinh(kx) + A3 cos(kx) + A4 sin(kx).
For convenience, let’s place the left end of the bar at x = 0. Then the boundary conditions at
this point imply A3 = A1 and A4 = A2, so
u(x) = A1(cosh(kx) + cos(kx)) + A2(sinh(kx) + sin(kx)).
There are two more boundary conditions for the right side, and they both determine the ratio
A2/A1, so for a solution to exist, the boundary conditions must be redundant with each other.
In other words, we should have
(d2/dx2)(cosh(kx) + cos(kx))
(d2/dx2)(sinh(kx) + sin(kx))
=
(d3/dx3)(cosh(kx) + cos(kx))
(d3/dx3)(sinh(kx) + sin(kx))
.
Carrying out the derivatives, this condition is equivalent to (cosh(kx)−cos(kx))2 = sinh2
(kx)−
sin2
(kx), which further simplifies to
cosh(kL)cos(kL) = 1.
14
Kevin Zhou Physics Olympiad Handouts
At this point, we can numerically solve to find
kL = 4.73,7.85,11.00,14.14,17.28,...
which is quite different from the naive solutions kL = πn. From here we can straightforwardly
calculate ω =
√
Ak2.
(d) Plugging y(x,t) = sin(kx)cos(ωt) into the differential equation and setting kL = πn gives
−ω2
= −v2
k2
− Ak4
which gives solutions
ωn = kn
p
v2 + Ak2
n =
πn
L
r
v2 +
Aπ2n2
L2
where the extra spacing comes from the Aπ2n2/L2 term. Using an app on your phone, you
can check that this occurs for piano strings and guitar strings.
Remark: Beam Theory
Where does the strange fourth-order equation for transverse vibrations above come from?
Since force is the derivative of energy, it’s easier to think about how the energy stored in a
rigid rod differs from that of a string. When a string with tension T, mass per length λ, and
length ℓ is plucked, giving it a transverse displacement y, then
kinetic energy
length
∼ λẏ2
,
potential energy
length
∼
T∆ℓ
ℓ
∼
Ty2
ℓ2
where our expression for ∆ℓ comes from the Pythagorean theorem. As we know from M4,
the ratio of the coefficients gives ω2, so ωℓ ∼
p
T/λ. For a general wave with wavenumber k,
we would replace ℓ with 1/k above, giving ω ∝ k as expected.
Now, a rod is characterized by a Young’s modulus Y , mass density ρ, length ℓ, width w, and
vertical thickness h. If the transverse displacement is y, then
kinetic energy
volume
∼ ρẏ2
,
potential energy
volume
∼ Y (strain)2
.
The tricky part is understanding the strain. If you naively used the same logic as for the
string, then all parts of the rod would be stretched, with typical strain (y/ℓ)2. This is correct
in the limit of large displacements, y ≫ h, where the rod’s thickness is negligible. But for
small displacements, it’s an overestimate.
As the rod is displaced vertically, it slightly shrinks horizontally. As a result, there is a
“neutral line” in the middle of the rod that is neither stretched or compressed. Bonds above
the line are stretched, and bonds below the line are compressed.
15
Kevin Zhou Physics Olympiad Handouts
The neutral line has radius of curvature R ∼ ℓ2/y. Thus, the strain at the top and bottom
of the rod is of order h/R ∼ hy/ℓ2. Plugging this in gives
ω ∼
s
Y
ρ
h
ℓ2
.
Again, for a general wavenumber we would replace ℓ with 1/k, giving the ω ∝ k2 scaling. For
a derivation of this result by dimensional analysis, see section 9.2.3 of The Art of Insight.
There’s another neat bit of physics we can get here. Consider a horizontal rod with one end
fixed at a wall. What is the vertical deflection of the other end of the rod, due to its own
weight? The gravitational and internal potential energy densities both have “reasonable”,
power-law dependence on the deflection y. Thus, when their derivatives match, so that forces
balance, their absolute values should match within an order of magnitude,
elastic potential energy
volume
∼
gravitational potential energy
volume
∼ ρgy.
Solving for the deflection gives
y ∼
ρgℓ4
Y h2
which is the fundamental result of Euler–Bernoulli beam theory. (For a proper derivation in
terms of force and torque balance, see chapters 9 and 10 of Lautrup.)
Example 2
How are the sounds of a violin, a trumpet, and a person different in a room full of helium?
Solution
As we saw in T3, the speed of sound in air is
p
γp/ρ. When the air is replaced with helium,
ρ decreases, increasing the speed of sound.
The standing wave frequencies of a violin are determined by properties of the strings, which
aren’t affected by the helium. The only difference will be that the way the violin’s sound
reverberates will be subtly changed.
For the trumpet, the standing wave frequencies are proportional to v/L where L is the
length of the air column inside the trumpet. Thus, the standing wave frequencies go up, and
the trumpet makes higher-pitched notes.
The human voice is more subtle. A wind instrument works by exciting standing waves inside
it. But the source of the human voice is the vibrations of the vocal folds, whose fundamental
vibration frequency is directly controlled by your muscles. The entire rest of your vocal tract
does not affect what frequencies are present, but rather affects how energy is distributed
between those frequencies. (For instance, vowels are characterized by having extra energy
16
Kevin Zhou Physics Olympiad Handouts
near two particular frequencies, called formants.) Helium changes the resonant frequencies of
the vocal tract and thus changes which frequencies emitted by the vocal folds are emphasized.
It thus changes the timbre, but not the pitch.
