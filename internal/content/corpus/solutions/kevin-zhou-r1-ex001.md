---
id: kevin-zhou-r1-ex001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r1-ex001
solution_type: author
source_document: solution-document-kevin-zhou-r1sol
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R1Sol.pdf."
---

Example 1
A reference frame is a formal object made of rulers and synchronized clocks. The length of
an object in a given reference frame isn’t necessarily the same thing as how long the object
looks, to somebody at rest in the frame using their own eyes. That is different, because one
has to account for the time the light needs to travel to the eyes.
Consider a train of rest length L moving with speed v to the right in the ground frame. How
long does the train look to somebody standing on the ground directly to the right of it?
Solution
Both ends of the train continually emit light. Suppose two pulses of light, one from each
end, hit an observer’s eyes simultaneously. Then the apparent length of the train Lapp is the
distance between the points where the light pulses were originally launched.
For somebody to the right of the train, the pulse from the left end of the train had to travel
an extra distance Lapp, so it must have been emitted a time Lapp/c earlier. When the left
pulse was emitted, the left end of the train was vLapp/c behind where it was when the right
pulse was emitted. So the apparent length is
Lapp =
L
γ
+
v
c
Lapp.
Solving this for Lapp gives
Lapp = L
s
1 + v/c
1 − v/c
.
Unlike the abstract lab frame length L/γ, this directly observable length is larger than L. (But
if the person had been to the left of the train, then instead Lapp = L
p
(1 − v/c)/(1 + v/c).)
Remark
In most of the problems here, we’ll focus on how objects are measured in inertial reference
frames, not on how they physically appear to an observer’s eyes. This is a complicated but
fascinating subject. For instance, it turns out that once one accounts for the light travel
time delay, moving objects appear to be rotated. For an interactive simulation, check out
the game A Slower Speed of Light (3D) and Velocity Raptor (2D only).
[3] Problem 4.   W 1 0USAPhO 2016, problem A3. Print out the custom answer sheet before starting.
[5] Problem 5.   T 1 0IPhO 2006, problem 2. A nice problem about relativistic visual effects.
3
Kevin Zhou Physics Olympiad Handouts
2 Velocity Addition
Idea 2: Velocity Addition
Again, let frame S′ move with velocity vx̂ with respect to frame S. If an object has velocity
(u′
x,u′
y) in frame S′, then the velocity in S is
ux =
u′
x + v
1 + u′
xv/c2
, uy =
u′
y
γ(1 + u′
xv/c2)
where γ = 1/
p
1 − v2/c2 as usual.
[1] Problem 6 (KK 12.6). A rod of proper length ℓ0 oriented parallel to the x axis moves with velocity
ux̂ in frame S. What is the length measured by an observer in frame S′, which, as usual, moves
with velocity vx̂ with respect to S?
Solution. The speed of the rod measured by an observer in S′ is
u′
=
u − v
1 − uv/c2
.
The length contraction will result in an observed length of
ℓ′
= ℓ0
s
1 −

u − v
c − uv/c
 2
.
[2] Problem 7 (Morin 11.16). In frame S′, a particle moves with velocity (0,u′) as shown at left.
Frame S moves to the left with speed v, so the situation in S is as shown at right, with the y speed
now u. Consider a series of equally spaced dotted lines, as shown. By considering the rate at which
the particle crosses the dotted lines in each frame, find u in terms of u′ and v, and confirm the
result agrees with the velocity addition formula.
Solution. Before starting, let’s recall how the time dilation formula works. Suppose we have two
events with the same x coordinate (such as the ticking of a clock at rest in frame S), separated
by time ∆t. Then applying the Lorentz transformation yields ∆t′ = γ∆t for the time separation
in the primed frame. Conversely, if we had two events with the same x′ coordinate (such as the
ticking of a clock at rest in frame S′), then ∆t = γ∆t′.
In this problem, the particle isn’t at rest in either frame S or S′. But the Lorentz transformations
don’t do anything to the y coordinate, so the motion in the y-direction doesn’t matter for the
purposes of the above argument. Suppose that in frames S and S′, there is an interval ∆t and ∆t′
between crossing adjacent dotted lines, respectively. Since these occur at the same x′ coordinate in
frame S′, we have
∆t = γ∆t′
.
4
Kevin Zhou Physics Olympiad Handouts
Moreover, length in the y-direction isn’t contracted at all, so
γ =
∆t
∆t′
=
u′
u
.
Thus, we have
uy =
u′
y
γ
which agrees with the velocity addition formula, when we plug in u′
x = 0.
[3] Problem 8 (Morin 11.58). A person walks very slowly at speed u from the back of a train of proper
length L to the front. The total time dilation effect in the train frame can be made arbitrarily small
by picking u to be sufficiently small, so that if a person’s watch agrees with a clock at the back of
the train when he starts, then it also agrees with a clock at the front when he finishes, to arbitrary
accuracy.
Now consider this setup in the ground frame, where the train moves at speed v. The rear clock
reads Lv/c2 more than the front, so in view of the preceding paragraph, the time gained by the
person’s watch during the process must be Lv/c2 less than the time gained by the front clock. By
working in the ground frame, explain why this is the case. Assume u ≪ v.
Solution. This is a tricky issue: even though the extra time dilation effect can be made arbitrarily
small by making u smaller, doing so would make the effect last for a longer time. In this particular
situation, that means the effect doesn’t go away even as u → 0! In this respect, it has something in
common with the more subtle approximation problems in P1.
Setting c = 1, the person in the ground frame has speed and Lorentz factor
w =
u + v
1 + uv
, γw = γuγv(1 + uv)
so that the time it takes for them to walk across the train is
∆t =
L
γv
1
w − v
.
The difference in time dilation factors, on the person’s clock versus the train’s clocks, leads to a
relative change in time reading of
∆τ =

1
γw
−
1
γv

∆t =

1
γu(1 + uv)
− 1

L
γ2
v
1
w − v

.
To simplify the second factor, note that
1
γ2
v(w − v)
=
1
γ2
v
1 + uv
u(1 − v2)
=
1 + uv
u
so that we have
∆τ =
L
u

1
γu
− 1 − uv

.
We need to be a bit careful in approximating this expression, since the 1/γu and 1 terms will almost
cancel out. So we instead write 1/γu = 1 + O(u2), giving
∆τ =
L
u
1 + O(u2
) − 1 − uv

= −L(v + O(u)) ≈ −Lv
since we are assuming u ≪ v. This is precisely the expected result.
5
Kevin Zhou Physics Olympiad Handouts
Idea 3: Relativistic Doppler Shift
If a light source with (proper) frequency f′ is moving directly towards you at speed v, then
in nonrelativistic physics, we would measure a frequency
fnr =
f′
1 − v/c
.
In relativity, we also need to account for the source being time dilated, so
f =
fnr
γ
=
s
1 + v/c
1 − v/c
f′
.
This additional, second-order correction was first measured by Ives and Stilwell, in the late
1930s. (The transverse Doppler effect is more subtle, and we’ll come back to it in problem 22.)
[3] Problem 9 (KK 12.9). A slab of glass moves to the right with speed v ≪ c. A flash of light is
emitted from A and passes through the glass to arrive at B, a distance L away.
In the rest frame of the glass, it has thickness D and the speed of light in the glass is c/n. Suppose
n is a constant independent of light frequency.
(a) If you were a 19th century physicist, who didn’t know relativity but did know about the index
of refraction and Galilean velocity addition, how long would you expect it to take the light to
go from A to B? Keep the lowest order term in v/c.
(b) How long does it actually take the light to go from A to B, again to lowest order in v/c?
This kind of setup could be part of an interference experiment, which would allow the tiny time
difference to be effectively measured. Before the advent of special relativity, experiments like these
which require relativistic velocity addition were very puzzling. They were interpreted by imagining
that materials that slowed down light also partially “dragged” the ether along with it.
Solution. (a) Naively, the light moves with speed c in free space, and speed vin = c/n+v inside
the slab, by Galilean velocity addition. So when the light is in the slab, the relative speed of
the light and slab is exactly
vrel =
c
n
.
Therefore, by routine kinematics, the time spent in the slab is
tin =
D
vrel
6
Kevin Zhou Physics Olympiad Handouts
during which the light moves forward by D + vtin. The rest of the time is
tout =
L − D − vtin
c
.
Adding these together gives a total time of
T =
L
c
+ D

1
vrel
−
1
c
−
v
cvrel

=
L
c
+
D
c

n − 1 −
vn
c

.
(b) The slab length contracts, but this is second order in v/c, while we’re just interested in the
first order effect. The key difference is that because of relativistic velocity addition, the light
in the slab moves with speed
vin =
c/n + v
1 + v/nc
=
c
n
+

1 −
1
n2

v + O(v2
/c).
Thus, to leading order in v/c, when the light is in the slab, the relative speed of the light and
slab is, in the lab frame,
vrel ≈
c
n
−
v
n2
.
The rest of the above derivation goes through unchanged, giving
T =
L
c
+ D

1
vrel
−
1
c
−
v
cvrel

≈
L
c
+
D
c

n − 1 −
v(n − 1)
c

again to first order in v/c. (Before the advent of relativity, this result was explained by an
“ether drag” coefficient of 1 − 1/n2.)
