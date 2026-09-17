---
id: solution-document-usapho-2014-s
source: usapho
kind: official_examiner_report
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2014_S.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/usapho/2014_S.pdf."
---

2014 USA Physics Olympiad Exam 1
AAPT UNITED STATES PHYSICS TEAM
AIP 2014
USA Physics Olympiad Exam
DO NOT DISTRIBUTE THIS PAGE
Important Instructions for the Exam Supervisor
• This examination consists of two parts.
• Part A has four questions and is allowed 90 minutes.
• Part B has two questions and is allowed 90 minutes.
• The first page that follows is a cover sheet. Examinees may keep the cover sheet for both
parts of the exam.
• The parts are then identified by the center header on each page. Examinees are only allowed
to do one part at a time, and may not work on other parts, even if they have time remaining.
• Allow 90 minutes to complete Part A. Do not let students look at Part B. Collect the answers
to Part A before allowing the examinee to begin Part B. Examinees are allowed a 10 to 15
minutes break between parts A and B.
• Allow 90 minutes to complete Part B. Do not let students go back to Part A.
• Ideally the test supervisor will divide the question paper into 4 parts: the cover sheet (page 2),
Part A (pages 3-15), Part B (pages 17-23), and several answer sheets for two of the questions
in part A (pages 25-28). Examinees should be provided parts A and B individually, although
they may keep the cover sheet. The answer sheets should be printed single sided!
• The supervisor must collect all examination questions, including the cover sheet, at the end
of the exam, as well as any scratch paper used by the examinees. Examinees may not take
the exam questions. The examination questions may be returned to the students after April
15, 2014.
• Examinees are allowed calculators, but they may not use symbolic math, programming, or
graphic features of these calculators. Calculators may not be shared and their memory must
be cleared of data and programs. Cell phones, PDA’s or cameras may not be used during
the exam or while the exam papers are present. Examinees may not use any tables, books,
or collections of formulas.
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Cover Sheet 2
AAPT UNITED STATES PHYSICS TEAM
AIP 2014
USA Physics Olympiad Exam
INSTRUCTIONS
DO NOT OPEN THIS TEST UNTIL YOU ARE TOLD TO BEGIN
• Work Part A first. You have 90 minutes to complete all four problems. Each question is
worth 25 points. Do not look at Part B during this time.
• After you have completed Part A you may take a break.
• Then work Part B. You have 90 minutes to complete both problems. Each question is worth
50 points. Do not look at Part A during this time.
• Show all your work. Partial credit will be given. Do not write on the back of any page. Do
not write anything that you wish graded on the question sheets.
• Start each question on a new sheet of paper. Put your AAPT ID number, your name, the
question number and the page number/total pages for this problem, in the upper right hand
corner of each page. For example,
AAPT ID #
Doe, Jamie
A1 - 1/3
• A hand-held calculator may be used. Its memory must be cleared of data and programs. You
may use only the basic functions found on a simple scientific calculator. Calculators may not
be shared. Cell phones, PDA’s or cameras may not be used during the exam or while the
exam papers are present. You may not use any tables, books, or collections of formulas.
• Questions with the same point value are not necessarily of the same difficulty.
• In order to maintain exam security, do not communicate any information about
the questions (or their answers/solutions) on this contest until after April 15,
2014.
Possibly Useful Information. You may use this sheet for both parts of the exam.
g = 9.8 N/kg G = 6.67 × 10−11 N · m2/kg2
k = 1/4π0 = 8.99 × 109 N · m2/C2 km = µ0/4π = 10−7 T · m/A
c = 3.00 × 108 m/s kB = 1.38 × 10−23 J/K
NA = 6.02 × 1023 (mol)−1 R = NAkB = 8.31 J/(mol · K)
σ = 5.67 × 10−8 J/(s · m2 · K4) e = 1.602 × 10−19 C
1eV = 1.602 × 10−19 J h = 6.63 × 10−34 J · s = 4.14 × 10−15 eV · s
me = 9.109 × 10−31 kg = 0.511 MeV/c2 (1 + x)n ≈ 1 + nx for |x|  1
sinθ ≈ θ − 1
6θ3 for |θ|  1 cosθ ≈ 1 − 1
2θ2 for |θ|  1
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part A 3
Part A
Question A1
Inspired by: http://www.wired.com/wiredscience/2012/04/a-leaning-motorcycle-on-a-vertical-wall/
A unicyclist of total height h goes around a circular track of radius R while leaning inward at
an angle θ to the vertical. The acceleration due to gravity is g.
a. Suppose h  R. What angular velocity ω must the unicyclist sustain?
Solution
We work in a frame rotating with angular velocity ω, where the unicyclist is static. Four
forces act on the unicyclist: a normal and frictional force at the point of contact, gravity
downwards at the center of mass, and a fictitious centrifugal force.
If h  R, all parts of the unicyclist are at a distance of approximately R from the center of the
circle, so the centripetal acceleration of every part of the unicyclist is ω2R. The centrifugal
force can then be taken to act at the center of mass for purposes of computing the torque.
If the center of mass is a distance l from the point of contact, the torque about the point of
contact is
τ = mω2
Rlcosθ − mglsinθ
Since the unicyclist is stationary in this frame, τ = 0, and solving for ω gives
ω =
r
g
R
tanθ.
b. Now model the unicyclist as a uniform rod of length h, where h is less than R but not
negligible. This refined model introduces a correction to the previous result. What is the new
expression for the angular velocity ω? Assume that the rod remains in the plane formed by
the vertical and radial directions, and that R is measured from the center of the circle to the
point of contact at the ground.
Solution
The centripetal acceleration now varies along the length of the unicyclist. In the rotating
frame, the torque about the point of contact is given by
τc =
Z
ω2
rz dm
where r is the distance from the center of the circle, z is the height above the ground, and
dm is a mass element. Because the mass of the unicyclist is uniformly distributed along a
length h,
dm =
m
h
ds
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part A 4
where s is the length along the unicyclist. Then
τc =
Z h
0
ω2
(R − ssinθ)(scosθ)
m
h
ds = mω2
hcosθ

R
2
−
h
3
sinθ

.
Gravity continues to act at the center of mass, a distance h/2 from the point of contact, and
in the opposite direction,
τg = −mg
h
2
sinθ.
Again, the total torque is zero, so τc + τg = 0. Solving for ω gives
ω =
s
 g
R
tanθ

1 −
2
3
h
R
sinθ
−1
.
Question A2
A room air conditioner is modeled as a heat engine run in reverse: an amount of heat QL is
absorbed from the room at a temperature TL into cooling coils containing a working gas; this gas is
compressed adiabatically to a temperature TH; the gas is compressed isothermally in a coil outside
the house, giving off an amount of heat QH; the gas expands adiabatically back to a temperature
TL; and the cycle repeats. An amount of energy W is input into the system every cycle through
an electric pump. This model describes the air conditioner with the best possible efficiency.
room
cooling coil
pump
valve
heating coil
Assume that the outside air temperature is TH and the inside air temperature is TL. The
air-conditioner unit consumes electric power P. Assume that the air is sufficiently dry so that no
condensation of water occurs in the cooling coils of the air conditioner. Water boils at 373 K and
freezes at 273 K at normal atmospheric pressure.
a. Derive an expression for the maximum rate at which heat is removed from the room in terms
of the air temperatures TH, TL, and the power consumed by the air conditioner P. Your
derivation must refer to the entropy changes that occur in a Carnot cycle in order to receive
full marks for this part.
Solution
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part A 5
The optimal performance is attained by a Carnot cycle running in reverse. Since a Carnot
cycle is reversible, it keeps the total entropy of the heat reservoirs constant. The change in
entropy for a reservoir of temperature T absorbing heat Q is ∆S = Q/T, so
QH
TH
=
QL
TL
.
Energy conservation states QH = QL + W. Eliminating QH and solving for QL,
QL = W

TL
TH − TL

.
Finally, the rate of heat removal is QL/t, so dividing both sides by t,
QL
t
= P

TL
TH − TL

.
b. The room is insulated, but heat still passes into the room at a rate R = k∆T, where ∆T is
the temperature difference between the inside and the outside of the room and k is a constant.
Find the coldest possible temperature of the room in terms of TH, k, and P.
Solution
We equate k∆T with the cooling rate QL/t found in the previous section. Writing the
equation in terms of TH and ∆T = TH − TL,
k∆T = P
TL
∆T
= P
TH − ∆T
∆T
.
Rearranging, we have
(∆T)2
=
P
k
(TH − ∆T)
which is a quadratic in ∆T. Letting x = P/k, we have
∆T =
x
2

−1 ±
p
1 + 4TH/x

but only the positive root has physical significance. Therefore,
TL = TH −
x
2
p
1 + 4TH/x − 1

.
c. A typical room has a value of k = 173 W/◦C. If the outside temperature is 40◦C, what
minimum power should the air conditioner have to get the inside temperature down to 25◦C?
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part A 6
Solution
From our work above,
P =
k(∆T)2
TL
= 130 W.
A common mistake is to forget to convert Celsius to Kelvin.
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part A 7
Question A3
When studying problems in special relativity it is often the invariant distance ∆s between two
events that is most important, where ∆s is defined by
(∆s)2
= (c∆t)2
−

(∆x)2
+ (∆y)2
+ (∆z)2

where c = 3 × 108 m/s is the speed of light.1
a. Consider the motion of a projectile launched with initial speed v0 at angle of θ0 above the
horizontal. Assume that g, the acceleration of free fall, is constant for the motion of the
projectile.
i. Derive an expression for the invariant distance of the projectile as a function of time t as
measured from the launch, assuming that it is launched at t = 0. Express your answer
as a function of any or all of θ0, v0, c, g, and t.
Solution
Let the particle start at the origin. Then its path satisfies
x = v0tcosθ0, z = v0tsinθ0 −
1
2
gt2
by ordinary kinematics. Then
s2
= (ct)2
− (v0tcosθ0)2
− (v0tsinθ0 −
1
2
gt2
)2
which can be simplified to
s2
= (c2
− v2
0)t2
+
1
2
gv0 sinθ0 t3
−
1
4
g2
t4
.
ii. The radius of curvature of an object’s trajectory can be estimated by assuming that
the trajectory is part of a circle, determining the distance between the end points, and
measuring the maximum height above the straight line that connects the endpoints. As-
suming that we mean “invariant distance” as defined above, find the radius of curvature
of the projectile’s trajectory as a function of any or all of θ0, v0, c, and g. Assume that
the projectile lands at the same level from which it was launched, and assume that the
motion is not relativistic, so v0  c, and you can neglect terms with v/c compared to
terms without.
Solution
Plugging in
tf =
2v0 sinθ
g
1
We are using the convention used by Einstein
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part A 8
the invariant distance between the endpoints is approximately
s2
≈ (ctf)2
⇒ s ≈ 2c
v0 sinθ
g
.
The maximum height above the ground is
zmax =
(v0 sinθ)2
2g
.
Suppose this path subtends an angle θ of a circle of radius R in spacetime. Then
s ≈ Rθ, zmax ≈ R

1 − cos
θ
2

≈
Rθ2
8
and eliminating θ yields
R ≈
1
8
s2
zmax
=
c2
g
.
Indeed, if we solved the problem exactly in relativity, we would find that the path of the
projectile is a hyperbola in spacetime with semimajor axis c2/g. Here we just computed
the radius of curvature near the vertex.
b. A rocket ship far from any gravitational mass is accelerating in the positive x direction at a
constant rate g, as measured by someone inside the ship. Spaceman Fred at the right end
of the rocket aims a laser pointer toward an alien at the left end of the rocket. The two are
separated by a distance d such that dg  c2; you can safely ignore terms of the form (dg/c2)2.
i. Sketch a graph of the motion of both Fred and the alien on the space-time diagram
provided in the answer sheet. The graph is not meant to be drawn to scale. Note that t
and x are reversed from a traditional graph. Assume that the rocket has velocity v = 0
at time t = 0 and is located at position x = 0. Clearly indicate any asymptotes, and the
slopes of these asymptotes.
Solution
Since the rocket is constantly accelerating but cannot exceed the speed of light, the
curves must asymptote with a slope of one; in an exact analysis we would find they
are hyperbolas. However, there is a slight challenge to consider: do Fred and the alien
approach the same asymptote, or two different asymptotes?
Since the rocket ship is solid, it maintains the same proper length. Since moving objects
are length contracted, it must length contract in our diagram, approaching a length of
zero. Indeed, if there were no length contraction, then in the instantaneous rest frame
of the ship, the ship would be getting longer and longer, eventually breaking apart.
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part A 9
ii. If the frequency of the laser pointer as measured by Fred is f1, determine the frequency
of the laser pointer as observed by the alien. It is reasonable to assume that f1  c/d.
Solution
To solve this problem, we replace the light with a series of discrete flashes, then find how
the frequencies of these flashes are seen by Fred and the alien. Let Fred emit a flash of
light at time t = 0 and a second flash of light at time t = τ, where τ is very small. Let
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part A 10
the alien see the flashes at times t1 and t2. Then by ordinary kinematics,
ct1 = d −
1
2
gt2
1, c(t2 − τ) =
1
2
gτ2
+ d −
1
2
gt2
2.
Note that we are ignoring time dilation effects because they are second order in the
velocity, and hence second order in g.
Now subtracting these equations, we have
c(t2 − t1 − τ) =
g
2
(τ2
+ t2
1 − t2
2).
Defining ∆t = t2 − t1 and simplifying, we have
∆t

1 +
g
2c
(t1 + t2)

= τ

1 +
gτ
2c

≈ τ
since τ is extremely small, so
τ
∆t
= 1 +
g
2c
(t1 + t2).
Since we are working to first order in g, we may use t1 ≈ t2 ≈ h/c on the right-hand
side, so
fAlien
fFred
=
τ
∆t
≈ 1 +
gh
c2
.
By the equivalence principle, this is a derivation of gravitational redshift.
The problem can also be solved by thinking in terms of the ordinary Doppler effect.
Consider Fred’s frame at time t = 0. In this frame, the alien is also stationary. The light
takes a time h/c to reach the alien; at this point the alien has picked up a velocity of
gh/c. Then using the ordinary Doppler shift formula gives a frequency shift of 1+gh/c2
as seen above. This is valid, as all the effects we implicitly ignored were higher order in
g, but it harder to see this.
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part A 11
Question A4
A positive point charge q is located inside a neutral hollow spherical conducting shell. The shell
has inner radius a and outer radius b; b − a is not negligible. The shell is centered on the origin.
b
a
x
y
a. Assume that the point charge q is located at the origin in the very center of the shell.
i. Determine the magnitude of the electric field outside the conducting shell at x = b.
Solution
We apply Gauss’s law for a sphere with radius r > b centered about the origin. Since
the shell is neutral, the enclosed charge is q, so by spherical symmetry
E(r) =
q
4π0r2
outside the shell. Just outside the shell, the field is q/4π0b2.
ii. Sketch a graph for the magnitude of the electric field along the x axis on the answer
sheet provided.
Solution
Since the shell is conducting, the electrostatic field is zero inside it. By Gauss’s law, this
is achieved by having a charge of −q on the inner surface r = a and a charge of q on the
outer surface r = b, both uniformly distributed.
For r < a, we can apply Gauss’s law again to conclude E(r) = q
4π0r2 , just as it is outside
the shell.
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part A 12
iii. Determine the electric potential at x = a.
Solution
The shell is a conductor, so it is an equipotential surface. Then the potential at r = a is
same as the potential at r = b. However, outside the shell the field looks just like that
of a point charge q at the origin, so
V (a) = V (b) =
q
4π0b
.
iv. Sketch a graph for the electric potential along the x axis on the answer sheet provided.
Solution
As we’ve shown above, the potential is proportional to 1/r outside r = b, and is constant
between r = a and r = b. Then the potential for r < a is not proportional to 1/r.
Instead, it is a 1/r curve shifted by a constant, so that the potential is continuous at
r = a.
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part A 13
b. Assume that the point charge q is now located on the x axis at a point x = 2a/3.
i. Determine the magnitude of the electric field outside the conducting shell at x = b.
Solution
The conducting shell acts like a Faraday cage. As in the previous part, by Gauss’s law,
we must have a charge of −q on the inner surface, so a charge of q on the outer surface.
The charge on the inner surface is distributed non-uniformly to perfectly cancel out
the asymmetric field of the point charge; these two contributions sum to exactly zero
everywhere outside r = a. Then by spherical symmetry, the charges on the outer surface
are uniformly distributed.
One might wonder why the charges on the outer and inner surfaces can’t both be non-
uniformly distributed. A more rigorous argument would appeal to the uniqueness the-
orems for electrostatics: given the setup we’ve given, there is only one way to satisfy
all the boundary conditions, so the configuration we gave above must be it. The gen-
eral principle in that in electrostatics, the only information that can be seen across a
shielding conducting shell is the total charge.
In any case, by the same logic as in part (a),
E(r) =
q
4π0r2
outside the shell. Just outside the shell, the field is q/4π0b2.
ii. Sketch a graph for the magnitude of the electric field along the x axis on the answer
sheet provided.
Solution
For r < b, the field is just that of a point charge at the origin, by the shell theorem. The
field inside is more complicated because it depends on the distribution of charge on the
inner surface; all that is required is that it diverges at x = 2a/3 and is higher at x = a
than x = −a.
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part A 14
Incidentally, one can find the field for r < a exactly using the method of image charges:
for r < a, the shielding charges on the inner surface produce the exact same field as a
single point charge would. The location of this “image” charge can be found by inverting
the original point charge about the circle r = a.
iii. Determine the electric potential at x = a.
Solution
By the same logic as in part (a),
V (a) =
q
4π0b
.
iv. Sketch a graph for the electric potential along the x axis on the answer sheet provided.
Solution
Again, the potential is proportional to 1/r outside r = b, and is constant between r = a
and r = b. The potential inside is more complicated, diverging at x = 2a/3.
v. Sketch a figure showing the electric field lines (if any) inside, within, and outside the
conducting shell on the answer sheet provided. You should show at least eight field lines
in any distinct region that has a non-zero field.
Solution
The field should be spherically symmetric outside the shell, zero within the shell, and
nonuniform inside. The field lines should terminate perpendicular to the conductor.
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part A 15
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part A 16
STOP: Do Not Continue to Part B
If there is still time remaining for Part A, you should review your work for
Part A, but do not continue to Part B until instructed by your exam
supervisor.
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part B 17
Part B
Question B1
A block of mass M has a hole drilled through it so that a ball of mass m can enter horizontally
and then pass through the block and exit vertically upward. The ball and block are located on a
frictionless surface; the block is originally at rest.
m
M
v
frictionless horizontal surface
a. Consider the scenario where the ball is traveling horizontally with a speed v0. The ball enters
the block and is ejected out the top of the block. Assume there are no frictional losses as the
ball passes through the block, and the ball rises to a height much higher than the dimensions
of the block. The ball then returns to the level of the block, where it enters the top hole
and then is ejected from the side hole. Determine the time t for the ball to return to the
position where the original collision occurs in terms of the mass ratio β = M/m, speed v0,
and acceleration of free fall g.
Solution
After the collision, the ball and block have the same horizontal velocity v1. Since the horizontal
momentum is conserved,
v1 =
m
m + M
v0.
Let v2 be the vertical component of the velocity of the ball immediately after the collision.
Since there are no frictional losses, conservation of energy yields
1
2
mv2
0 =
1
2
Mv2
1 +
1
2
m(v2
1 + v2
2).
Since the ball rises to a height much higher than the height of the block, the gravitational
potential energy is negligible, so we have ignored it. This assumption also means we can
ignore the duration of the collision itself in our calculations below.
Plugging in our result for v1,
mv2
0 − (M + m)

m
m + M
2
v2
0 = mv2
2 ⇒ v2 =
r
M
m + M
v0.
The time spent by the ball in the air is
t1 = 2v2/g.
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part B 18
The distance traveled horizontally by the ball while it is in the air is
x = v1t1 =
2v1v2
g
=
2v2
0
g
s
m2M
(m + M)3
.
The ball then falls back into the block and is ejected horizontally.
Since energy and momentum are conserved from before the first collision and after the second,
the final horizontal velocity v3 of the ball is given by the result for a perfectly elastic collision,
v3 = v0
m − M
m + M
as can be derived from the conservation laws. Note that v3 is positive for m > M. Thus if
β ≤ 1, the time t is infinite; the ball never returns to its starting position.
Assuming that β > 1, the ball must move a distance x towards its original collision point,
where we have neglected the time taken for the collisions themselves. Thus the time for the
ball to return to its original position horizontally is
t2 = −
x
v3
=
2v0
g
s
m2M
(M + m)(M − m)2
.
The total time since the first collision is
t = t1 + t2 =
2v0
g
r
M
m + M

M
M − m

=
2v0
g
s
β
1 + β

β
β − 1

where β > 1.
b. Now consider friction. The ball has moment of inertia I = 2
5mr2 and is originally not rotating.
When it enters the hole in the block it rubs against one surface so that when it is ejected
upwards the ball is rolling without slipping. To what height does the ball rise above the
block?
Solution
As before, we have
v1 =
m
m + M
v0.
Let v4 be the vertical velocity of the ball after the collision; it is less than v2 due to the friction
force f. Friction slows the ball down with an impulse given by
∆p = f∆t = m(v2 − v4)
while increasing the angular momentum by
∆L = τ∆t = rf∆t = r∆p.
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part B 19
We also know that ∆L = Iω = Iv4/r, so
Iv4/r = mr(v2 − v4) ⇒ v4 =
v2
1 + 2/5
.
The vertical velocity of the ball will take it to a height
h =
v2
4
2g
=
v2
0
2g
1
(1 + 2/5)2
M
m + M
=
v2
0
2g
25
49
β
1 + β
.
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part B 20
Question B2
In parts a and b of this problem assume that velocities v are much less than the speed of light c,
and therefore ignore relativistic contraction of lengths or time dilation.
a. An infinite uniform sheet has a surface charge density σ and has an infinitesimal thickness.
The sheet lies in the xy plane.
i. Assuming the sheet is at rest, determine the electric field Ẽ (magnitude and direction)
above and below the sheet.
Solution
By symmetry, the fields above and below the sheet are equal in magnitude and directed
away from the sheet. By Gauss’s Law, using a cylinder of base area A,
2EA =
σA
0
⇒ E =
σ
20
pointing directly away from the sheet in the z direction, or
E =
σ
2
×
(
ẑ above the sheet,
−ẑ below the sheet.
ii. Assuming the sheet is moving with velocity ṽ = vx̂ (parallel to the sheet), determine
the electric field Ẽ (magnitude and direction) above and below the sheet.
Solution
The motion does not affect the electric field, so the answer is the same as that of part
(i).
iii. Assuming the sheet is moving with velocity ṽ = vx̂, determine the magnetic field B̃
(magnitude and direction) above and below the sheet.
Solution
Assuming v > 0, the right-hand rule indicates there is a magnetic field in the −ỹ direction
for z > 0 and in the +ỹ direction for z < 0. From Ampere’s law applied to a loop of
length l normal to the x̃ direction,
2Bl = µ0σvl.
To get the right-hand side, note that in time t, an area vtl moves through the loop, so
a charge σvtl moves through. Then the current through the loop is σvl.
Applying symmetry, we have
B =
µ0σv
2
×
(
−ŷ above the sheet,
ŷ below the sheet.
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part B 21
iv. Assuming the sheet is moving with velocity ṽ = vẑ (perpendicular to the sheet), deter-
mine the electric field Ẽ (magnitude and direction) above and below the sheet.
Solution
Again the motion does not affect the electric field, so the answer is the same as that of
part (i).
v. Assuming the sheet is moving with velocity ṽ = vẑ, determine the magnetic field B̃
(magnitude and direction) above and below the sheet.
Solution
Applying Ampere’s law and symmetry, there is no magnetic field above and below the
sheet.
Interestingly, there’s no magnetic field at the sheet either. Consider an Amperian loop
of area A in the xy plane as the sheet passes through. The loop experiences a current
of the form
Aσδ(t).
But the loop also experiences an oppositely directed change in flux of the form
A
σ
0
δ(t),
so the right-hand side of Ampere’s law, including the displacement current term, remains
zero.
b. In a certain region there exists only an electric field Ẽ = Exx̂+Eyŷ+Ezẑ (and no magnetic
field) as measured by an observer at rest. The electric and magnetic fields Ẽ0 and B̃0 as mea-
sured by observers in motion can be determined entirely from the local value of Ẽ, regardless
of the charge configuration that may have produced it.
i. What would be the observed electric field Ẽ0 as measured by an observer moving with
velocity ṽ = vẑ?
Solution
In part (a), we showed that if the electric field was produced by a sheet of charge, then
it was unaffected by the motion of an observer. Thus, in general,
E0
= E.
ii. What would be the observed magnetic field B̃0 as measured by an observer moving with
velocity ṽ = vẑ?
Solution
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part B 22
No magnetic field was created by the motion of the sheet of charge in the direction of
the electric field, so the magnetic field in the frame of reference of the moving observer
should likewise not depend on the component of the electric field in the direction of
motion. When the sheet of charge was moving in the +x̂ direction, a magnetic field
was created in the −ŷ direction; the observer moving in the +x̂ direction is equivalent
to the sheet of charge moving in the −x̂ direction, creating a magnetic field in the +ŷ
direction. That is, an electric field in the ẑ direction causes an observer moving in the
x̂ direction to observe a magnetic field in the ŷ = ẑ × x̂ direction.
Furthermore, the magnitudes of the fields satisfied
B = µ00vE =
1
c2
vE.
Combining this with the previous equation,
B0
= −
1
c2
v × E =
v
c2
(Eyx̂ − Exŷ).
c. An infinitely long wire wire on the z axis is composed of positive charges with linear charge
density λ which are at rest, and negative charges with linear charge density −λ moving with
speed v in the z direction.
i. Determine the electric field Ẽ (magnitude and direction) at points outside the wire.
Solution
The wire as a whole is neutral, so there is no electric field outside the wire.
ii. Determine the magnetic field B̃ (magnitude and direction) at points outside the wire.
Solution
The current in the wire is λv, so Ampere’s law yields
B = µ0
λv
2πr
in the tangential direction. The current is in the −ẑ direction, so by the right-hand rule,
the circular B field lines would point clockwise looking in that direction.
iii. Now consider an observer moving with speed v parallel to the z axis so that the negative
charges appear to be at rest. There is a symmetry between the electric and magnetic
fields such that a variation to your answer to part b can be applied to the magnetic
field in this part. You will need to change the multiplicative constant to something
dimensionally correct and reverse the sign. Use this fact to find and describe the electric
field measured by the moving observer, and comment on your result. (Some familiarity
with special relativity can help you verify the direction of your result, but is not necessary
to obtain the correct answer.)
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Part B 23
Solution
The result of part (b) was
B0
= −
1
c2
v × E.
Exchanging the electric and magnetic fields, reversing the sign, and fixing the dimensions,
E0
= v × B.
Taking the cross product yields an electric field vector that points outward, with mag-
nitude
E0
= vµ0
λv
2πr
=
λ
2π0r
v2
c2
.
Physically, this can be explained by length contraction of the positive charges and inverse
length contraction of the negative charges, which are now stationary. That is, we have
derived a relativistic effect, second-order in v/c, from the first-order field transformations!
Why wasn’t this derivation used to discover relativity the moment Maxwell’s equations
were written down? We have implicitly assumed that Maxwell’s equations are the same
in all reference frames, but historically it was thought they were only valid in one frame,
the reference frame of the ether. Assuming that Maxwell’s equations are indeed the
same in all frames yields an invariant speed, the speed of light, leaving inevitably to all
of special relativity. Here we’ve taken one of many possible paths.
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Answer Sheets 24
Answer Sheets
Following are answer sheets for some of the graphical portions of the test.
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Answer Sheets 25
Answer for Part A, Question 3
x
ct
Space-time graph for accelerated rocket. The positions of Fred and the Alien at t = 0 are shown.
t = 0
Alien
Fred
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Answer Sheets 26
Answer for Part A, Question 4
a b −b −a x 0
E
Answer for Part A, Question 4
a b −b −a x
V
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Answer Sheets 27
Answer for Part A, Question 4
a b −b −a x 0
E
Answer for Part A, Question 4
a b −b −a x
V
Copyright c 2014 American Association of Physics Teachers2014 USA Physics Olympiad Exam Answer Sheets 28
Answer for Part A, Question 4
Copyright c 2014 American Association of Physics Teachers
