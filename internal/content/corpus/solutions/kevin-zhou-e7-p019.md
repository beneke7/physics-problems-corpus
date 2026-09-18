---
id: kevin-zhou-e7-p019
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e7-p019
solution_type: author
source_document: solution-document-kevin-zhou-e7sol
source_pdf: sources/kevin_zhou/site/handouts/E7Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E7Sol.pdf."
---

[3] Problem 19. The intensity of sunlight at noon is approximately 1kW/m2.
(a) Compute the rms magnetic field strength.
(b) Compute the radiation pressure acting on a mirror lying on the ground.
(c) In terms of the Lorentz force, how is this pressure exerted on the particles in the mirror?
Solution. (a) Note that the intensity is the Poynting vector. We have ⟨S⟩ = c
µ0
B2
rms, so
Brms ≈ 2 × 10−6
T.
(b) We get a factor of 2 because the radiation bounces off the mirror, giving
P =
2S
c
= 7 × 10−6
Pa.
(c) The basic idea is that the particles are accelerated in the direction of E, and thus feel a force
in the direction (v × B) ∥ (E × B) ∥ S.
However, making this more quantitative is more subtle. For an ideal free particle, a is in
phase with E, which means v is 90◦ out of phase with E. Since B is in phase with E, the
magnetic force v×B has time dependence of the form cos(ωt)sin(ωt), which averages to zero.
On the other hand, suppose the particle is attached to a damped harmonic oscillator, and ω
is at the resonant angular frequency. Then from M4 results, v is instead in phase with E,
which means the magnetic force has time dependence cos2(ωt), which doesn’t average to zero.
The point is, you need some kind of other force at play to produce a phase shift between a and
E, or else the force averages to zero. And this makes perfect sense from an energy conservation
standpoint: a nonzero average force means momentum is taken out of the radiation, which
means part of it is absorbed. This is only possible if the absorbed energy goes somewhere
else, e.g. in the damped harmonic oscillator case it is dissipated by the damping force.
This raises yet another question: how it is possible for an isolated charge to scatter radiation,
in Thomson or Compton scattering? The reason is that there is another force at play, namely
the radiation reaction force acting on the particle. You can read more about this subtle force
in section 11.2 of Griffiths.
[3] Problem 20 (Purcell 9.7). Consider the sum of two oppositely-traveling electromagnetic waves,
with electric fields
E1 = E0 cos(kz − ωt)x̂, E2 = E0 cos(kz + ωt)x̂.
17
Kevin Zhou Physics Olympiad Handouts
(a) Write down the magnetic field.
(b) Draw plots of the energy density U(z,t) for ωt ∈ {0,π/4,π/2,3π/4,π}.
(c) Plot the Poynting vector for the same values of ωt, and convince yourself that it describes
how the energy sloshes back and forth.
Solution. (a) The answer is
B =
E0
c
(cos(kz − ωt) − cos(kz + ωt))ŷ =
2E0
c
sin(kz)sin(ωt)ŷ.
(b) For the purposes of the following plots and calculations, we set k = ω = E0 = B0 = c = µ0 =
ϵ0 = 1. In these units, we have E = cos(z − t) + cos(z + t) = 2cos(z)cos(t) and therefore
U = (E2 + B2)/2 = 2(sin2
(z)sin2
(t) + cos2(z)cos2(t)). Plotting this gives
−π π
1
2
ωt = 0
z
−π π
ωt = π/4
−π π
ωt = π/2
−π π
ωt = 3π/4 U
for 0, π/4, π/2, and 3π/4 respectively, while the result for π is the same as for 0.
(c) The Poynting vector is proportional to sin(z)cos(z)sin(t)cos(t)ẑ, which is in turn proportional
to sin(2z)sin(2t)ẑ. The plot of this at the same times as above is:
−π π
−1
1
ωt = 0
z
−π
ωt = π/4
π
−π π
ωt = π/2
π
ωt = 3π/4
−π
Sz
Idea 9: Larmor Formula
An accelerating charge produces electromagnetic radiation, with power
P =
q2a2
6πϵ0c3
.
We’ll derive it properly in R3, but a lot of it can be motivated with the techniques of P1.
The power could only depend on q, ϵ0, µ0, and properties of the particle’s motion. The
only combinations of the first three parameters that get rid of the electromagnetic units
are q2/ϵ0 and 1/
√
ϵ0µ0 = c. Since energy is proportional to the electric and magnetic
fields squared, and these fields are proportional to q, the answer must be proportional to q2/ϵ0.
Radiation can’t result from uniform velocity, by Lorentz invariance; another way to see this
is that with only v and c, there is no way to write down an expression for power with the
right units! The next simplest option is radiation from acceleration, from which the most
general result is P = (q2a2/ϵ0c3)f(v/c). The fact that acceleration is squared is also natural,
18
Kevin Zhou Physics Olympiad Handouts
because acceleration is a vector, so this is the simplest way to get a rotationally invariant
result. The proper derivation shows that f(0) = 1/6π. When v/c is substantial, there are
relativistic corrections, which we will consider in R3.
[2] Problem 21 (Purcell H.2). A common classical model of an electron in an atom is to imagine
it is a mass on a spring, where the spring force is due to the atomic nucleus. Suppose that such
an electron, with charge e, is vibrating in simple harmonic motion with angular frequency ω and
amplitude A.
(a) Find the average rate of energy loss by radiation.
(b) If no energy is supplied to make up the loss, how long will it take the oscillator’s energy to
fall to 1/e of its initial value?
Numerically, this is an extremely small time, so classical models of the atom are not realistic. We
will see in X1 that in quantum mechanics this problem is solved because in the ground state the
electron does not move around the atom, but rather occupies a standing wave.
Solution. (a) The average value of a2 is A2ω4/2, giving
⟨P⟩ =
e2A2ω4
12πϵ0c3
.
(b) If m is the mass of the electron, then the energy of the system is E = 1
2mω2A2. We see that
Ė = −
e2ω4
12πϵ0c3
2
mω2
E = −
e2ω2
6mπϵ0c3
E.
This is an exponential decay, with characteristic time
t =
6mπϵ0c3
e2ω2
.
[3] Problem 22 (Purcell H.3). A plane electromagnetic wave with angular frequency ω and electric
field amplitude E0 is incident on an atom. As in problem 21, we model the electron as a simple
harmonic oscillator, with mass m and natural angular frequency ω0.
(a) First suppose that ω ≫ ω0. Argue that in this case, the “spring” force on the electron can be
neglected. Find the average power radiated by the electron, and show that it is equal to the
power incident on a disc of area
σ =
8π
3

e2
4πϵ0mc2
 2
.
This is the Thomson scattering cross section. To an electromagnetic wave, each electron looks
like it has this area.
(b) Now suppose ω ≪ ω0, yielding Rayleigh scattering, which describes the scattering of visible
light by air. In this case, show that σ ∝ ω4. This sharp frequency dependence explains why
the sky is blue.
19
Kevin Zhou Physics Olympiad Handouts
(c) Explain the meaning of the common phrase “red sky at night, sailor’s delight; red sky in
morning, sailor’s warning”. (Hint: in the cultures where this saying is used, weather patterns
usually move from west to east.)
For some further discussion of Rayleigh scattering, see section 9.4 of The Art of Insight. For more
about colors in the atmosphere, see this nice video.
Solution. (a) As seen in M4, the amplitude of a driven harmonic oscillator is
A =
F0/m
p
(ω2
0 − ω2)2 + (bω/m)2
.
Here, b = 0 and since ω ≫ ω0, we have A = eE0/mω2. Putting this into our answer in part
(a) of the previous problem gets
⟨P⟩ =
e2ω4
12πϵ0c3
e2E2
0
m2ω4
=
e4E2
0
12πϵ0m2c3
.
Since for electromagnetic radiation, ⟨S⟩ = 1
2ϵ0cE2
0 so ⟨P⟩ = σ⟨S⟩, we can put this in the above
expression to get
σ =
e4E2
0
12πϵ0m2c3
2
ϵ0cE2
0
=
8π
3

e2
4πϵ0mc2
 2
.
(b) Now, our expression for A will be eE0/mω2
0, which modifies the answer to
σ =
8π
3

e2
4πϵ0mc2
 2
ω4
ω4
0
.
In other words, higher frequencies are scattered much more. The atmosphere scatters most
of the blue light from the Sun, and some of it hits your eyes, making the sky look blue.
You might wondering why the sky doesn’t look violet, because the spectrum of the sky actually
peaks in the violet range. It has to do with the physiology of human color vision. Your eyes
contain three types of “cones”, which are most sensitive to blue, green, and red. To detect
color, your brain looks at how much each cone is excited. Referring to the graphic here, pure
blue light excites the blue cone a lot, and the green and red cones a little. Pure violet light
excites the blue cone a moderate amount, doesn’t excite the green cone, and excites the red
cone a small amount, due to a quirk of physiology. (That’s why the color wheel wraps around,
so that violet ends up feeling similar to red, even though they’re as far apart in wavelength
as possible.) When you account for the total excitation of the cones, due to the full spectrum
of the sky, the net result is that the blue cone is excited a lot, and the green and red cones
are each excited a little, so the result looks blue.
(c) See this nice explanation for details.
[3] Problem 23.   m 1 0USAPhO 2016, problem B2.
20
Kevin Zhou Physics Olympiad Handouts
Remark
We noted in M7 that clouds are visible because the radiation scattered by a small droplet of
n water molecules grows as n2. To understand why, note that each of the molecules performs
independent Rayleigh scattering, as computed above. For separated molecules, the energy
scattered just adds. However, for nearby molecules the electromagnetic waves scattered
interfere constructively, so the amplitude grows as n and hence the energy scattered as n2.
This quadratic enhancement breaks down once the droplets exceed the wavelength λ of the
light. This means the maximum possible enhancement is larger for larger wavelengths, acting
against the ω4 dependence of Rayleigh scattering. This is why clouds are white, not blue.
Radiation pressure can also have mechanical effects.
Example 5: NBPhO 2018.6
A laser pointer of power P is directed at a glass cube, with refractive index n >
√
2. The
surface of the cube has an anti-reflective coating, so there is no partial reflection when light
enters or exits it; the laser pointer only refracts. What is the maximum force the laser pointer
can exert on the cube?
Solution
The force is due to a change in momentum of the light. The greatest possible force is attained
if the direction of the light is reversed, which can occur as shown, in the limit α → 90◦.
Assuming n >
√
2, we then have θr < 45◦, and then the laser internally reflects when it hits
the top surface of the cube. It exits in the opposite direction it came in.
If the laser pointer has power P, then the momentum of the laser beam per time is P/c. The
momentum is reversed, so the force is 2P/c.
[3] Problem 24 (IZhO 2022). In 2018, the Nobel Prize in physics was awarded to Arthur Ashkin
for the creation of the “laser tweezer”, a device that allows one to hold and move transparent
microscopic objects with the help of light. In one such device, a parallel beam of light from a laser
21
Kevin Zhou Physics Olympiad Handouts
passes through a converging lens L and hits a microparticle M, which can also be considered a
converging lens. Point F is the common focus of L and M.
The light intensity in the beam is I = 1.00µW/cm2, the beam radius is R = 1.00cm, and the focal
length of the lens L is F = 10.0cm. Ignore the absorption and reflection of light.
(a) Calculate the force acting on the microparticle, in the setup shown at left above.
(b) Next, the left half of the lens L is covered by a diaphragm, as shown at right above. Calculate
the force acting on the microparticle in the transverse direction of the beam.
Solution. See the official solutions of IZhO 2022.
[3] Problem 25 (Feynman). In one proposed means of space propulsion, a spaceship of mass 103 kg
carries a thin sheet of area 100m2. The sheet is made of highly reflective plastic film, and can be
used as a solar radiation pressure “sail”. The spaceship travels in a circular orbit of radius r, which
is initially equal to the Earth’s orbit radius, where the intensity of sunlight is 1400W/m2. Assume
the spaceship is moving nonrelativistically and the gravitational effect of the Earth is negligible.
(a) Find the angle at which the sail should be pointed to maximize dr/dt.
(b) Assuming the sail is pointed this way, find the numeric value of dr/dt.
(c) If this continues for a very long time, then r will grow as r ∝ tn. Find the value of n.
Solution. (a) Since E = −GMm/2r, increasing radius as fast as possible is the same as imparting
the most energy to the spaceship; in other words, we want to maximize F · v. The velocity
is almost purely tangential, so only the tangential component of the force contributes to the
power.
Let the normal vector of the sail be at an angle θ to the radial direction. To find the net
force on the sail, we can think of the reflection process in two steps: absorbing the light and
reemitting it. Absorbing the light yields an outward radial force F. Reemitting it yields a
force F of the same magnitude, directed at an angle 2θ to the radial direction.
Only the second force can contribute to the power, so
P = F · v = Fv sin2θ.
Finally, since the radial area covered by the sail is Acosθ, we have F = I(Acosθ)/c, so
P =
2IAv
c
sinθcos2
θ.
22
Kevin Zhou Physics Olympiad Handouts
Setting the derivative to zero, the maximum is at θ = sin−1
(1/
√
3) = 35.3◦, giving power
Pmax = β
IAv
c
, β =
4
3
√
3
≈ 0.77.
Strictly speaking, the answer is very slightly different, by corrections of order v/c, since the
spaceship is moving, but we’ll neglect this here.
(b) The power is
P =
dE
dt
=
GMm
2r2
dr
dt
.
We also know from force balance that
GMm
r2
=
mv2
r
since the radial force from the sail is negligible, and combining these results gives
dr
dt
=
βIA
c
2r
mv
=
2βIA
mωc
where ω = 2π/(1year) is the angular velocity of the Earth. Plugging in the numbers gives
dr/dt = 3.6m/s.
(c) We have
dr
dt
∝
Ir
v
∝
(1/r2)r
1/
√
r
=
1
√
r
.
Separating and integrating gives t ∝ r3/2 in the long run (i.e. when the contribution from the
initial condition is negligible), so n = 2/3.
Finally, we’ll consider electromagnetic wave propagation in transmission lines.
[4] Problem 26 (Griffiths 7.62, Crawford 4.8). A certain transmission line is constructed from two
thin metal ribbons, of width w, a very small distance h ≪ w apart. The current travels down one
strip and back along the other. In each case it spreads out uniformly over the surface of the ribbon.
(a) Find the capacitance per unit length C, and the inductance per unit length L.
(b) Argue that the speed of propagation of electromagnetic waves through this transmission line
is of order 1/
√
LC, and evaluate this quantity.
(c) Repeat the first two parts for a coaxial transmission line, consisting of two cylinders of radii
a < b with the same axis of symmetry.
(d) Repeat the first two parts for a parallel-wire transmission line, consisting of two wires of radius
r whose axes are a distance D ≫ r apart.
You should find that in all cases, 1/
√
LC is the same, yielding the same speed for electromagnetic
waves. This actually holds for transmission lines with conductors of any shape, though the general
proof requires some vector calculus.
Solution. Suppose the length is ℓ.
23
Kevin Zhou Physics Olympiad Handouts
(a) We have C = ϵ0wℓ/h, so C = ϵ0w/h. Similarly, L = µ0h
w ℓ, so L = µ0h/w.
(b) The timescale to propagate a unit length is 1/
√
LC, which means the typical speed is 1/
√
LC.
This also follows from dimensional analysis.
(c) The capacitance of two coaxial cylinders can be found by giving the inner cylinder a charge
Q and using C = Q/V , where
V =
Z
E ds =
Z b
a
(Q/ℓ)
2πϵ0r
dr =
Q/ℓ
2πϵ0
log(b/a)
and therefore
C =
2πϵ0
log(b/a)
.
To find the inductance for a transmission line setup, the current will flow parallel to the axis,
so by Ampere’s law the field inside the region is B = µ0I/2πr, and using L = Φ/I where Φ
will be the flux going around the inner cylinder will give
Φ =
Z b
a
ℓ
µ0I
2πr
dr =
µ0Iℓ
2π
log

b
a

and therefore
L =
µ0
2π
log

b
a

.
Thus we get 1/
√
LC = c.
(d) The capacitance can be foundsimilarly (factors of2 appearbecause the negative charge/opposing
current will contribute to the E and B fields too),
V =
Z D
r
2Q/ℓ
2πϵ0r
dr, C =
πϵ0
log(D/r)
.
ΦB =
Z D
r
2µ0I
2πr
dr, L =
µ0
π
log

D
r

.
This gives 1/
√
LC = c.
