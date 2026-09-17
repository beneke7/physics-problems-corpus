---
id: kevin-zhou-m7-ex010
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m7-ex010
solution_type: author
source_document: solution-document-kevin-zhou-m7sol
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M7Sol.pdf."
---

Example 10
A big fan produces a stream of air with speed v. If the atmospheric pressure in the room is
Patm, what’s the pressure P in the middle of the fan’s air stream?
Solution
This question frequently appears in middle school physics lessons. Obviously, if we apply
Bernoulli’s principle to the air before and after it goes through the fan, we get
P +
1
2
ρv2
= Patm
so that the pressure is lower than atmospheric pressure. Easy, right? But it’s wrong!
The air in the stream is traveling forward with constant velocity, exposed to the rest
of the air in the room, which has atmospheric pressure. If there actually was such a
pressure difference, the fan’s air stream would be compressed by the air in the room, until
it reached atmospheric pressure again. If you look back carefully at the above examples,
you’ll see this is always the case: air can only be at a different pressure if it’s confined
away from the atmosphere at large (e.g. in a train tunnel or a whirly tube), or if it’s
actively being accelerated (e.g. when it flies into or over a barn, in which case the pressure
difference is precisely what causes the force). The other case where you can maintain
a pressure difference is when the air is moving extremely quickly, which will be discussed in T3.
So the correct answer is that P = Patm. But why doesn’t Bernoulli’s principle work? Because
it’s a statement of energy conservation, and the fan itself is doing work on the air to get it
moving. The correct statement would be
Patm +
1
2
ρv2
= Patm + w
where w is the work done by the fan per unit volume of air.
[2] Problem 15 (HRK). A siphon is a device for removing liquid from a container that cannot be
tipped. An example of a siphon, with constant cross-section, is shown below.
14
Kevin Zhou Physics Olympiad Handouts
The tube must initially be filled, but once this has been done the liquid will flow until its level drops
below the tube opening at A. The liquid has density ρ and negligible viscosity.
(a) With what speed does the liquid emerge from the tube at C?
(b) What is the pressure of the liquid at the topmost point B?
(c) What is the maximum possible h1 so that the siphon can operate?
(d) Would the siphon still work if h2 were slightly negative? How negative can it be, for the
siphon to keep on working?
Solution. (a) Applying Bernoulli’s principle between the surface of the water and point C gives
1
2
ρv2
= ρg(h2 + d)
which implies
v =
p
2g(h2 + d).
(b) By continuity the speed v in the tube is constant. Applying Bernoulli’s principle between
points B and C gives
Patm = PB + ρg(h1 + h2 + d)
which gives
PB = Patm − ρg(h1 + h2 + d).
(c) For the siphon to just barely work, the flow speed v should be tiny, so h2 + d ≈ 0. The
highest value of h1 is when the pressure is zero at point B, since pressure can’t be negative, so
h1 ≤ Patm/ρg. (If we start with this maximum possible value of h1 but then increase h2 + d
above zero, then the siphon will stop working, because the water flow will break up along the
exit tube.)
(d) Yes. It is still energetically favorable for water to flow through the siphon as long as point C is
below the surface of the water. As mentioned above, the siphon works as long as h2 + d > 0.
15
Kevin Zhou Physics Olympiad Handouts
[2] Problem 16 (HRK). Consider a uniform U-tube with a diaphragm shown below.
(a) Suppose the diaphragm is opened and the liquid begins to flow from left to right. Show that
applying Bernoulli’s principle yields a contradiction.
(b) Explain why Bernoulli’s principle doesn’t apply if the diaphragm has a very wide opening.
(c) Explain why Bernoulli’s principle doesn’t apply if the diaphragm has a tiny opening.
Solution. (a) Since the pressures and velocities at points 1 and 3 are the same, Bernoulli’s
principle would imply the heights are also the same, which is false.
(b) Bernoulli’s principle is just energy conservation, applied to water moving along a streamline.
In this case, the liquid just oscillates back and forth, with point 1 and point 3 alternating
periodically in height. Bernoulli’s principle can’t be applied between points 1 and 3 because
water never moves all the way from point 1 to point 3; it just wiggles back and forth.
(c) In this case, viscous effects are not negligible. Energy is dissipated to heat, so Bernoulli’s
principle doesn’t apply.
But what if we used a very nonviscous fluid? In that case, you would still lose energy, but
to turbulence; the flow pattern after the diaphragm’s opening would look like the setup of
problem 17. Energy in turbulent eddies eventually dissipates to heat, so we again lose energy
and Bernoulli’s principle doesn’t apply.
But what if the diaphragm is also shaped like a smooth curve, to prevent turbulence? In that
case, you don’t lose energy, but the flow isn’t steady. The fluid continually accelerates as it
goes through the diaphragm; in the long run the heights of points 1 and 3 alternate, as in
part (b). Fluid does go all the way from point 1 to point 3, but Bernoulli’s principle can’t be
applied because the flow isn’t steady.
[2] Problem 17 (HRK). A stream of fluid of density ρ with speed v1 passes abruptly from a cylindrical
pipe of cross-sectional area a1 into a wider cylindrical pipe of cross-sectional area a2 as shown.
16
Kevin Zhou Physics Olympiad Handouts
The jet will mix with the surrounding fluid, forming a turbulent region where the pressure is
approximately P1. Further to the right, the flow becomes almost uniform again, with average speed
v2 and pressure P2.
(a) By considering force and momentum, show that
P2 − P1 = ρv2(v1 − v2).
(b) Show from Bernoulli’s principle that in a gradually widening pipe we would instead get
P2 − P1 =
1
2
ρ(v2
1 − v2
2).
(c) Find the loss of pressure due to the abrupt enlargement of the pipe. Can you draw an analogy
with elastic and inelastic collisions in particle mechanics?
Solution. (a) Let’s consider the fluid in the region bounded by the two shaded circles. After a
small time dt, this fluid moves to the right, and some of the fluid originally traveling at v1
ends up traveling at v2. The rate of change in momentum is
∆p
∆t
= (v2 − v1)
∆m
∆t
= ρv2a2(v2 − v1).
This must be equal to the net force on the fluid, which has three contributions:
• A leftward force P2a2 from the fluid on its right side.
• A rightward force P1a1 from the fluid on its left side.
• A rightward force P1(a2 − a1) from the vertical part of the wall.
This is a net rightward force of (P1 − P2)a2. Equating these expressions and dividing by a2
gives the desired result.
(b) This is simply a direct application of Bernoulli’s principle.
(c) The extra loss of pressure is the difference,
∆P =
1
2
ρ(v1 − v2)2
.
As in an inelastic collision, the loss of energy (reflected in the loss of pressure, which is
essentially like elastic potential energy) goes as the square of the relative speed.
17
Kevin Zhou Physics Olympiad Handouts
[2] Problem 18 (PPP 49). A bucket with a hole in the bottom is held below a faucet. When the
bucket is empty, the hole is plugged, and the faucet is turned on, the bucket fills with water in time
T1. When the bucket is full, the faucet is turned off, and the hole is opened, the bucket empties in
time T2. If both the hole and faucet are open, what ratio of T1/T2 can cause the bucket to overflow?
Solution. Let water come out of the faucet at a volumetric flow rate of V̇ , so that the bucket with
area A and height h0 will be filled in time T1 = Ah0/V̇ .
When the hole at the bottom with effective area a is open, water will flow out at a speed of
v =
√
2gh, giving a volumetric flow rate of −a
√
2gh, where h is the water depth. Then
d
dt
(Ah) = A
dh
dt
= −a
p
2gh,
−
Z 0
h0
dh
√
2gh
=
Z T2
0
a
A
dt,
s
2h0
g
=
a
A
T2.
To overflow the water bucket, the faucet needs to add water faster than the plug drains water when
the bucket is almost full. The overflow condition is then
V̇ =
Ah0
T1
> a
p
2gh0.
Plugging in our result for T2 gives
T1
T2
<
1
2
.
This differs from the naive answer T1/T2 = 1 because the rate of emptying depends on the current
water height. This also implies that all those elementary school questions about filling and emptying
a bucket simultaneously are wrong. For example, you might have once been asked, “if a bucket can
be filled in 2 minutes and drains in 3 minutes, how long does it take to fill if the drain is open?” If
we were working with sand, then the correct answer would be 6 minutes (for reasons noted in P1),
but for real water, the true answer is that it never fills up all the way.
