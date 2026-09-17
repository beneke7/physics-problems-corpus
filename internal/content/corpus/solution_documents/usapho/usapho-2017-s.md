---
id: solution-document-usapho-2017-s
source: usapho
kind: official_examiner_report
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2017_S.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/usapho/2017_S.pdf."
---

2017 USA Physics Olympiad Exam 1
AAPT
AIP 2017
UNITED STATES PHYSICS TEAM
USA Physics Olympiad Exam
DO NOT DISTRIBUTE THIS PAGE
Important Instructions for the Exam Supervisor
• This examination consists of two parts: Part A has four questions and is allowed 90 minutes;
Part B has two questions and is allowed 90 minutes.
• The first page that follows is a cover sheet. Examinees may keep the cover sheet for both
parts of the exam.
• The parts are then identified by the center header on each page. Examinees are only allowed
to do one part at a time, and may not work on other parts, even if they have time remaining.
• Allow 90 minutes to complete Part A. Do not let students look at Part B. Collect the answers
to Part A before allowing the examinee to begin Part B. Examinees are allowed a 10 to 15
minutes break between parts A and B.
• Allow 90 minutes to complete Part B. Do not let students go back to Part A.
• Ideally the test supervisor will divide the question paper into 3 parts: the cover sheet (page 2),
Part A (pages 3-13), Part B (pages 15-23). Examinees should be provided parts A and B
individually, although they may keep the cover sheet. The answer sheets should be printed
single sided!
• The supervisor must collect all examination questions, including the cover sheet, at the end
of the exam, as well as any scratch paper used by the examinees. Examinees may not take
the exam questions. The examination questions may be returned to the students after April
15, 2017.
• Examinees are allowed calculators, but they may not use symbolic math, programming, or
graphic features of these calculators. Calculators may not be shared and their memory must
be cleared of data and programs. Cell phones, PDA’s or cameras may not be used during
the exam or while the exam papers are present. Examinees may not use any tables, books,
or collections of formulas.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Cover Sheet 2
AAPT
AIP 2017
UNITED STATES PHYSICS TEAM
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
• Start each question on a new sheet of paper. Put your proctor’s AAPT ID, your AAPT ID,
your name, the question number and the page number/total pages for this problem, in the
upper right hand corner of each page. For example,
Doe, Jamie
student AAPT ID #
proctor AAPT ID #
A1 - 1/3
• A hand-held calculator may be used. Its memory must be cleared of data and programs. You
may use only the basic functions found on a simple scientific calculator. Calculators may not
be shared. Cell phones, PDA’s or cameras may not be used during the exam or while the
exam papers are present. You may not use any tables, books, or collections of formulas.
• Questions with the same point value are not necessarily of the same difficulty.
• In order to maintain exam security, do not communicate any information about
the questions (or their answers/solutions) on this contest until after April 8, 2017.
Possibly Useful Information. You may use this sheet for both parts of the exam.
g = 9.8 N/kg G = 6.67 × 10−11 N · m2/kg2
k = 1/4π0 = 8.99 × 109 N · m2/C2 km = µ0/4π = 10−7 T · m/A
c = 3.00 × 108 m/s kB = 1.38 × 10−23 J/K
NA = 6.02 × 1023 (mol)−1 R = NAkB = 8.31 J/(mol · K)
σ = 5.67 × 10−8 J/(s · m2 · K4) e = 1.602 × 10−19 C
1 eV = 1.602 × 10−19 J h = 6.63 × 10−34 J · s = 4.14 × 10−15 eV · s
me = 9.109 × 10−31 kg = 0.511 MeV/c2 (1 + x)n ≈ 1 + nx for |x|  1
mp = 1.673 × 10−27 kg = 938 MeV/c2 ln(1 + x) ≈ x for |x|  1
sinθ ≈ θ − 1
6θ3 for |θ|  1 cosθ ≈ 1 − 1
2θ2 for |θ|  1
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part A 3
Part A
Question A1
A pair of wedges are located on a horizontal surface. The coefficient of friction (both sliding and
static) between the wedges is µ, the coefficient of friction between the bottom wedge B and the
horizontal surface is µ, and the angle of the wedge is θ. The mass of the top wedge A is m, and
the mass of the bottom wedge B is M = 2m. A horizontal force F directed to the left is applied to
the bottom wedge as shown in the figure.
B
A F
θ
Determine the range of values for F so that the the top wedge does not slip on the bottom
wedge. Express your answer(s) in terms of any or all of m, g, θ, and µ.
Solution
Solution 1. Assume the block does not slip. Considering the horizontal forces on the entire
system gives
F − 3µmg = 3ma ⇒ a =
F
3m
− µg.
When F is small, the top wedge wants to slide downward, so static friction points up the ramp.
Considering the horizontal and vertical forces on the block gives
N cosθ + f sinθ = mg, N sinθ − f cosθ = ma.
When the minimal force is applied, the friction is maximal, f = µN. Eliminating N gives
ma = mg
sinθ − µcosθ
cosθ + µsinθ
and plugging in our first equation gives
Fmin = 3mg

µ +
sinθ − µcosθ
cosθ + µsinθ

= 3mg
(1 + µ2)tanθ
1 + µtanθ
.
When F is large, the top wedge wants to slide upward, so static friction points down the ramp, and
N cosθ − f sinθ = mg, N sinθ + f cosθ = ma.
Now setting f = µN gives
Fmax = 3mg

µ +
sinθ + µcosθ
cosθ − µsinθ

= 3mg
2µ + (1 − µ2)tanθ
1 − µtanθ
.
Therefore, naively the range of forces so that the block will not slip is
F ∈ [Fmin,Fmax].
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part A 4
However, to get full credit, students must account for two edge cases. First, when µ > tanθ, no
force is required at all to keep the block in place, so the minimum force is zero. Second, when
µ > cotθ, the block will not slip up under any circumstances, so there is no maximal force.
Solution 2. The problem can also be solved geometrically. In general, the no slip condition is
µ > tanφ
where φ is the angle between the vertical and the normal to the plane. Working in the noninertial
reference frame of the plane, the fictitious force due to the acceleration is equivalent to a tilting of
the gravity vector by an angle
tanβ =
a
g
where, as in solution 1,
a =
F
3m
− µg.
Then the top block will not slip as long as |θ−β| ≤ φ. At the minimum acceleration amin, β = θ−φ,
and taking the tangent of both sides gives
amin
g
=
tanθ − µ
1 + µtanθ
.
This is only meaningful for tanθ > µ, otherwise the answer is simply amin = 0. At the maximum
acceleration amax, β = θ + φ, which gives
amax
g
=
tanθ + µ
1 − µtanθ
.
This is only meaningful for cotθ > µ, otherwise the answer is simply amax = ∞.
Question A2
Consider two objects with equal heat capacities C and initial temperatures T1 and T2. A Carnot
engine is run using these objects as its hot and cold reservoirs until they are at equal temperatures.
Assume that the temperature changes of both the hot and cold reservoirs is very small compared
to the temperature during any one cycle of the Carnot engine.
a. Find the final temperature Tf of the two objects, and the total work W done by the engine.
Solution
Since a Carnot engine is reversible, it produces no entropy,
dS1 + dS2 =
dQ1
T1
+
dQ2
T2
= 0.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part A 5
By the definition of heat capacity, dQi = CdTi, so
dT1
T1
= −
dT2
T2
.
Integrating this equation shows that T1T2 is constant, so the final temperature is
Tf =
p
T1T2.
The change in thermal energy of the objects is
C(Tf − T1) + C(Tf − T2) = C
h
2
p
T1T2 − T1 − T2
i
.
By the First Law of Thermodynamics, the missing energy has been used to do work, so
W = C
h
T1 + T2 − 2
p
T1T2
i
.
Now consider three objects with equal and constant heat capacity at initial temperatures
T1 = 100 K, T2 = 300 K, and T3 = 300 K. Suppose we wish to raise the temperature of the
third object.
To do this, we could run a Carnot engine between the first and second objects, extracting work
W. This work can then be dissipated as heat to raise the temperature of the third object. Even
better, it can be stored and used to run a Carnot engine between the first and third object in
reverse, which pumps heat into the third object.
Assume that all work produced by running engines can be stored and used without dissipation.
b. Find the minimum temperature TL to which the first object can be lowered.
Solution
By the Second Law of Thermodynamics, we must have TL = 100K. Otherwise, we would
have a process whose sole effect was a net transfer of heat from a cold body to a warm one.
c. Find the maximum temperature TH to which the third object can be raised.
Solution
The entropy of an object with constant heat capacity is
S =
Z
dQ
T
= C
Z
dT
T
= C lnT.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part A 6
Since the total entropy remains constant, T1T2T3 is constant; this is a direct generalization
of the result for Tf found in part (a). Energy is also conserved, as it makes no sense to leave
stored energy unused, so T1 + T2 + T3 is constant.
When one object is at temperature TH, the other two must be at the same lower temperature
T0, or else further work could be extracted from their temperature difference, so
T1 + T2 + T3 = TH + 2T0, T1T2T3 = THT2
0 .
Plugging in temperatures with values divided by 100 for convenience, and eliminating T0 gives
TH(7 − TH)2
= 36.
We know that TH = 1 is one (spurious) solution, since this is the minimum possible final
temperature as found in part (b). The other roots are TH = 4 and TH = 9 by the quadratic
formula. The solution TH = 9 is impossible by energy conservation, so
TH = 400K.
It is also possible to solve the problem more explicitly. For example, one can run a Carnot
cycle between the first two objects until they are at the same temperature, then run a Carnot
cycle in reverse between the last two objects using the stored work. At this point, the first
two objects will no longer be at the same temperature, so we can repeat the procedure; this
yields an infinite series for TH. Some students did this, and took only the first term of the
series. This yields a fairly good approximation of TH ≈ 395K.
Another explicit method is to continuously switch between running one Carnot engine forward
and another Carnot engine in reverse; this yields three differential equations for T1, T2, and
T3. Solving the equations and setting T1 = T2 yields T3 = TH.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part A 7
Question A3
A ship can be thought of as a symmetric arrangement of soft iron. In the presence of an external
magnetic field, the soft iron will become magnetized, creating a second, weaker magnetic field. We
want to examine the effect of the ship’s field on the ship’s compass, which will be located in the
middle of the ship.
Let the strength of the Earth’s magnetic field near the ship be Be, and the orientation of the
field be horizontal, pointing directly toward true north.
The Earth’s magnetic field Be will magnetize the ship, which will then create a second magnetic
field Bs in the vicinity of the ship’s compass given by
~ Bs = Be

−Kb cosθ b̂ + Ks sinθ ŝ

where Kb and Ks are positive constants, θ is the angle between the heading of the ship and magnetic
north, measured clockwise, b̂ and ŝ are unit vectors pointing in the forward direction of the ship
(bow) and directly right of the forward direction (starboard), respectively.
Because of the ship’s magnetic field, the ship’s compass will no longer necessarily point North.
a. Derive an expression for the deviation of the compass, δθ, from north as a function of Kb,
Ks, and θ.
Solution
We add the fields to get the local field. The northward component is
Bnorth = Be − BeKb cosθcosθ − BeKs sinθsinθ
while the eastward component is
Beast = −BeKb sinθcosθ + BeKs cosθsinθ
The deviation is given by
tanδθ = (Ks − Kb)
sinθcosθ
1 − Kb cos2 θ − Ks sin2
θ
.
This form is particularly nice, because as we’ll see below, Kb and Ks are small enough to
ignore in the denominator.
b. Assuming that Kb and Ks are both much smaller than one, at what heading(s) θ will the
deviation δθ be largest?
Solution
By inspection, θ = 45◦ will yield the largest deviation. It’s also acceptable to list 45◦, 135◦,
225◦, and 315◦.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part A 8
A pair of iron balls placed in the same horizontal plane as the compass but a distance d away
can be used to help correct for the error caused by the induced magnetism of the ship.
A binnacle, protecting the ship’s compass in the center, with two soft iron spheres to help correct for errors in the
compass heading. The use of the spheres was suggested by Lord Kelvin.
Just like the ship, the iron balls will become magnetic because of the Earth’s field Be. As
spheres, the balls will individually act like dipoles. A dipole can be thought of as the field produced
by two magnetic monopoles of strength ±m at two different points.
The magnetic field of a single pole is
~ B = ±m
r̂
r2
where the positive sign is for a north pole and the negative for a south pole. The dipole magnetic
field is the sum of the two fields: a north pole at y = +a/2 and a south pole at y = −a/2, where
the y axis is horizontal and pointing north. a is a small distance much smaller than the radius of
the iron balls; in general a = KiBe where Ki is a constant that depends on the size of the iron
sphere.
φ
North
~ Bi
iron ball
a
c. Derive an expression for the magnetic field ~ Bi from the iron a distance d  a from the center
of the ball. Note that there will be a component directed radially away from the ball and a
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part A 9
component directed tangent to a circle of radius d around the ball, so using polar coordinates
is recommended.
Solution
This problem is not nearly as difficult as it looks.
φ
North
a
Consider the colored triangle above. The black side has length a. The angle between the
green and black sides is φ, so the length of the red side is asinφ and the length of the green
side is acosφ.
The magnetic field strength from one magnetic pole a distance d away is given by
B = ±m
1
d2
The sum of the two fields has two components. The angular component is a measure of the
“opening” of the triangle formed by the two vectors, and since the two vectors basically have
the same length, we can use similar triangles to conclude
asinφ
d
≈
Bφ
B
⇒ Bφ = m
a
d3
sinφ = Be
mKi
d3
sinφ.
As expected, this component vanishes for φ = 0.
The radial component is given by the difference in the lengths of the two field vectors, or
Br = m

1
d2
−
1
(d + x)2

=
m
d2

1 −
1
(1 + x/d)2

≈
m
d2
2x
d
,
where x = acosφ is the length of the green side, so
Br = 2Be
mKi
d3
cosφ.
That wasn’t so bad, was it?
d. If placed directly to the right and left of the ship compass, the iron balls can be located at a
distance d to cancel out the error in the magnetic heading for any angle(s) where δθ is largest.
Assuming that this is done, find the resulting expression for the combined deviation δθ due
to the ship and the balls for the magnetic heading for all angles θ.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part A 10
Solution
Note that the two iron balls create a magnetic field near the compass that behaves like that
of the ship as a whole. There is a component directed toward the bow given by
Bb = −2Bθ ∝ sinφ ∝ cosθ
and a component directed toward the starboard given by
Bs = 2Br ∝ cosφ ∝ sinθ
where the factors of 2 are because there are two balls. Note that θ is the ship heading while φ
is the angle between North and the location of the compass relative to one of the balls. Thus,
if the field is corrected for the maximum angles it will necessarily cancel out the induced ship
field for all of the angles, so that
δθ = 0
for all θ. Effectively, this means placing the balls to make Kb = Ks.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part A 11
Question A4
Relativistic particles obey the mass energy relation
E2
= (pc)2
+ (mc2
)2
where E is the relativistic energy of the particle, p is the relativistic momentum, m is the mass,
and c is the speed of light.
A proton with mass mp and energy Ep collides head on with a photon which is massless and
has energy Eb. The two combine and form a new particle with mass m∆ called ∆, or “delta”. It
is a one dimensional collision that conserves both relativistic energy and relativistic momentum.
a. Determine Ep in terms of mp, m∆, and Eb. You may assume that Eb is small.
Solution
Solution 1. We can solve the problem exactly, approximating only in the last step. This
certainly isn’t necessary; we do this to illustrate a useful technique. We set c = 1 throughout,
and transform to an inertial frame where the proton is initially at rest. Before the collision,
Ep = mp, Eγ = |pγ|.
For the ∆ particle, we have the usual relativistic relation
E2
∆ = p2
∆ + m2
∆.
By energy-momentum conservation,
Ep + Eγ = E∆, pγ = p∆.
Combining these results gives
(mp + Eγ)2
= E2
γ + m2
∆ ⇒ Eγ =
m2
∆ − m2
p
2mp
.
Now we need to transform back to the original frame, where the energy of the photon is Eb.
We can use the Lorentz transformation for this, but it’s a little easier to realize that E = hf
for photons, and apply the Doppler shift. Then
α ≡
Eb
Eγ
=
s
1 − β
1 + β
where β is the velocity parameter of the proton in the inertial frame where the photon has
energy Eb. Solving for β in terms of the energy ratio α,
β =
1 − α2
1 + α2
.
To calculate the proton energy, we need the Lorentz factor,
γ =
1
p
1 − β2
=
1 + α2
2α
.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part A 12
Then the proton energy in the original frame is
Ep = γmp =
mp
2

α +
1
α

=
mp
2
2mpEb
m2
∆ − m2
p
+
m2
∆ − m2
p
2mpEb
!
which is the exact answer.
At this point, we can approximate. The second term is much larger than the first, so
Ep ≈
m2
∆ − m2
p
4Eb
which was the required answer for this problem.
Solution 2. We now show another method that approximates throughout. We’ll do every-
thing in the lab frame, so the symbols in this solution don’t mean the same things they did
in solution 1. In the lab frame, energy-momentum conservation gives
pp − pb = p∆, Ep + Eb = E∆.
Squaring both expressions and dropping E2
b terms, since Eb is small,
p2
p − 2pppb ≈ p2
∆, E2
p + 2EpEb ≈ E2
∆.
Subtracting these equations gives
m2
p + 2EpEb + 2ppEb = m2
∆ ⇒ Ep + pp =
m2
∆ − m2
p
2Eb
.
Since Eb is small, this quantity must be large. But this means the protons are ultrarelativistic,
so Ep ≈ pp, giving
Ep ≈
m2
∆ − m2
p
4Eb
as desired.
b. In this case, the photon energy Eb is that of the cosmic background radiation, which is an EM
wave with wavelength 1.06 mm. Determine the energy of the photons, writing your answer
in electron volts.
Solution
Plugging in the numbers gives
E =
hc
λ
= 0.00112 eV.
c. Assuming this value for Eb, what is the energy of the proton, in electron volts, that will allow
the above reaction? This sets an upper limit on the energy of cosmic rays. The mass of the
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part A 13
proton is given by mpc2 = 938 MeV and the mass of the ∆ is given by m∆c2 = 1232 MeV.
Solution
Restoring the factors of c and plugging in the numbers gives
Ep = 1.4 × 1020
eV.
This is known as the GZK bound for cosmic rays.
The following relationships may be useful in solving this problem:
velocity parameter β = v
c
Lorentz factor γ = 1 √
1−β2
relativistic momentum p = γβmc
relativistic energy E = γmc2
relativistic doppler shift f
f0
=
q
1−β
1+β
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part A 14
STOP: Do Not Continue to Part B
If there is still time remaining for Part A, you should review your work for
Part A, but do not continue to Part B until instructed by your exam
supervisor.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part B 15
Part B
Question B1
Suppose a domino stands upright on a table. It has height h, thickness t, width w (as shown below),
and mass m. The domino is free to rotate about its edges, but will not slide across the table.
l
t
w
h
h
t
table surface
p
a. Suppose we give the domino a sharp, horizontal impulsive push with total momentum p.
i. At what height H above the table is the impulse p required to topple the domino smallest?
ii. What is the minimum value of p to topple the domino?
Solution
First we’ll look for the height H at which we should push to topple the domino with the least
momentum. A convenient method is to look at the angular momentum in the domino because
this is easy to calculate and describes rotational motion. Because the push is horizontal, the
moment arm of the push (about the domino’s rotational axis) is purely vertical. That means
the angular momentum of the push is pH, where p is the momentum imparted and H is the
height of the push. There is some minimum angular momentum Lmin to topple the domino,
so we set Lmin = pH. The bigger H, the smaller p, so we should choose the largest possible
H. In other words, we should push at the very top of the domino, H = h. While we’re on this
part, note that if the push weren’t constrained to be horizontal, the push could be a little bit
smaller since the moment arm could be the entire diagonal of the thin edge of the domino.
Next we calculate the minimum p using energy. As the domino rotates, it converts kinetic
energy to potential energy, so we’ll calculate both. The domino’s potential energy is greatest
when its center of mass is directly over the contact point of the domino and the table. That
height is half the diagonal of the domino, so the distance from the contact point to the center
of the domino is 1
2
√
t2 + h2. From the push until it reaches this point, the domino’s potential
energy increases by
∆U =
1
2
mg
p
t2 + h2 − h

.
Then the domino topples. By conservation of energy, ∆U is how much rotational kinetic
energy the domino must have begun with.
Next we find the kinetic energy using the rotational kinetic energy formula, T = L2/2I. The
moment of inertia of the domino about its contact point with the table is I = 1
3m(h2 + t2).
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part B 16
You can find this with an integral, or if you know the moment of inertia about the center
( 1
12m(h2 + t2)), you can use the parallel axis theorem. We know the momentum L = ph, so
the kinetic energy is
T =
1
2
L2
I
=
1
2
(ph)2
(1/3)m(h2 + t2)
=
3
2
p2h2
m(h2 + t2)
.
Setting the initial kinetic energy equal to the gain in potential energy and solving for p,
pmin =
1
√
3
m
h
r
g
p
t2 + h2 − h

(h2 + t2).
b. Next, imagine a long row of dominoes with equal spacing l between the nearest sides of any
pair of adjacent dominos, as shown above. When a domino topples, it collides with the next
domino in the row. Imagine this collision to be completely inelastic. What fraction of the
total kinetic energy is lost in the collision of the first domino with the second domino?
Solution
Right after the collision, the dominoes touch at a height
√
h2 − l2 above the table. The second
domino is vertical, while the first is rotated so that the angle between its leading edge and
the table is θ = arccos(l/h). Let the dominoes’ angular velocities be ω1 and ω2 respectively.
After the dominoes collide, they stick together. If we take the two parts of the dominoes
that are in contact, they must have the same horizontal velocity component in order for the
dominoes to stay in contact. For the first domino, this velocity is ω1hsinθ = ω1
√
h2 − l2.
For the second domino it is ω2 times the height of the impact point, so ω2
√
h2 − l2. Because
these velocity components must be equal, ω1 = ω2.
This means the dominoes have the same angular momentum as each other, measured relative
to their respective rotation axes. If we look at the collision, the forces between the dominoes
are purely horizontal because the dominoes’ faces are frictionless, so they only exert normal
forces. The second domino is vertical, so all its normal forces are purely horizontal. These
horizontal normal forces exchange angular momentum between the two dominoes. They have
the same moment arm (i.e. the height of the collision), so the amount of angular momentum
transferred out of the first domino is equal to the amount gained by the second domino,
both measured relative to the dominoes’ respective rotation axes. Because the dominoes
are identical and have the same angular velocity, they have the same angular momentum.
This means each domino has half as much angular momentum about its rotation axis as the
first domino had just before the collision. (Note that forces from the table cannot change
the angular momentum of the dominoes about their respective rotational axes because such
forces have zero moment arm, so only the inter-domino forces need to be examined here.)
Kinetic energy scales with the square of angular momentum, so each domino has a quarter
as much kinetic energy after the collision as the first domino had before it. That means the
total kinetic energy after the collision is half what it was before the collision. The fraction of
kinetic energy lost is one half.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part B 17
c. After the collision, the dominoes rotate in such a way so that they always remain in contact.
Assume that there is no friction between the dominoes and the first domino was given the
smallest possible push such that it toppled. What is the minimum l such that the second
domino will topple?
You may work to lowest nontrivial order in the angles through which the dominoes have
rotated. Equivalently, you may approximate t, l  h.
Solution
As in part (a), we will find the highest potential energy of the system and make sure the
initial kinetic energy is high enough to get the system to that point.
At any time after the collision, let us call the angle that the first domino has rotated past its
point of highest potential energy α, and the angle that the second domino has rotated past
its point of highest potential energy β. Also, let’s call the angle a domino rotates from its
standing position up to its point of highest potential energy φ, so the dominoes have rotated
φ + α and φ + β respectively.
The dominoes need to be in contact. The top right corner of the first domino has moved
horizontally a distance hsin(φ + α) which we will approximate as h(φ + α) using the small
angle approximation. The top left corner of the second domino moves horizontally forward
by hsin(φ+β)+t(1−cos(φ+β)). We ignore the cosine term as second order in the rotation
angle and approximate this as h(φ + β).
The y-coordinate of the upper right corner of the first domino is h(1 − cos(φ + α)) ≈ h. The
y-coordinate of the upper left corner of the second domino is h(1−cos(φ+β))+tsin(φ+β) ≈
h + t(φ + β) There is a first-order difference in y-coordinates of the two corners, but this
means the difference in x coordinate between the top left corner of the second domino and
the top right corner of the first domino is second-order in the rotation angles. We conclude
that to first order
h(φ + α) = l + h(φ + β) ⇒ α =
l
h
+ β
because this condition puts the top right corner of the first domino at the same position as
the top left of the second domino.
The potential energy of the first domino, setting zero potential energy to be when the domino
is upright, is U1 = ∆U(1 − (α/φ)2) to second order in α, and for the second domino, U2 =
∆U(1 − (β/φ)2). These figures come from fitting a quadratic whose peak is when the center
of mass is above the rotation point and which is zero when the domino is upright. The total
potential energy is U1 + U2, and using the relation between α and β, it is minimized for
βmax = −
l
2h
.
In other words, the second domino is as far away from rotating to the top of arc as the first
domino has rotated past the top of its arc. This gives a maximum potential energy
Umax = 2∆U

1 −
l2
4t2

where we have used the approximation φ ≈ t/h.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part B 18
At impact, Uimpact ≈ ∆U(−l2/t2 + 2l/t). Before impact, the kinetic energy is ∆U − Uimpact
because the maximum potential energy before impact was ∆U, and the kinetic energy was
zero there. The kinetic energy just after the collision is then (∆U − Uimpact)/2. Setting this
equal to the potential energy gain as the two dominoes rotate to their highest potential energy
Umax,
1
2
(∆U − Uimpact) = Umax − Uimpact
or
1
2
∆U = Umax −
1
2
Uimpact.
Plugging in the earlier expressions for all these gives
1
2
∆U = 2∆U

1 −
l2
4t2

− ∆U

l
t
−
l2
2t2

and solving this yields
l =
3
2
t
to first order in t.
d. A row of toppling dominoes can be considered to have a propagation speed of the length l+t
divided by the time between successive collisions. When the first domino is given a minimal
push just large enough to topple and start a chain reaction of toppling dominoes, the speed
increases with each domino, but approaches an asymptotic speed v.
Suppose there is a row of dominoes on another planet. These dominoes have the same density
as the dominoes previously considered, but are twice as tall, wide, and thick, and placed with
a spacing of 2l between them. If this row of dominoes topples with the same asymptotic
speed v previously found, what is the local gravitational acceleration on this planet?
Solution
This part is independent of the others and requires only dimensional analysis. The speed v
can depend on g, h, w, l. To get a quantity with dimensions [LT−1], we must take
v = c
p
gL
where L is some length made from h, w, and l. On the new planet, v is the same and L is
twice as much, so g must be half as great on the new planet.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part B 19
Question B2
Beloit College has a “homemade” 500 kV VanDeGraff proton accelerator, designed and constructed
by the students and faculty.
Accelerator dome (assume it is a sphere); accelerating column; bending electromagnet
The accelerator dome, an aluminum sphere of radius a = 0.50 meters, is charged by a rubber
belt with width w = 10 cm that moves with speed vb = 20 m/s. The accelerating column consists
of 20 metal rings separated by glass rings; the rings are connected in series with 500 MΩ resistors.
The proton beam has a current of 25 µA and is accelerated through 500 kV and then passes through
a tuning electromagnet. The electromagnet consists of wound copper pipe as a conductor. The
electromagnet effectively creates a uniform field B inside a circular region of radius b = 10 cm and
zero outside that region.
Dome
Metal rings of accelerating column
Glass separators
Electromagnet
Target
Resistor Chain
Only six of the 20 metals rings and resistors are shown in the figure. The fuzzy grey path is the path taken by the
protons as they are accelerated from the dome, through the electromagnet, into the target.
a. Assuming the dome is charged to 500 kV, determine the strength of the electric field at the
surface of the dome.
Solution
The electric potential is given by
V =
q
4π0a
and the electric field is given by
E =
q
4π0a2
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part B 20
so
E =
V
a
= 106
V/m.
b. Assuming the proton beam is off, determine the time constant for the accelerating dome (the
time it takes for the charge on the dome to decrease to 1/e ≈ 1/3 of the initial value.
Solution
The time constant is given by
τ = RC
where
C = Q/V = 4π0a = 5.56 × 10−11
F
and
R = 20r0 = 1010
Ω
so
τ = RC = 0.556 s.
c. Assuming the 25 µA proton beam is on, determine the surface charge density that must be
sprayed onto the charging belt in order to maintain a steady charge of 500 kV on the dome.
Solution
There are several ways the dome can discharge, two of which are along the resistors and the
proton beam. We will ignore any other path.
At 500kV, the current through the resistor chain is 50 µA, from V = IR. So the total current
I needed to be supplied to the dome is 75 µA. This is sprayed onto the belt, which moves at
a rate of
δA
∆t
= vbw
so the necessary surface charge density is
σ =
I
vbw
=
(75 µC/s)
(20 m/s)(0.10 m)
= 37.5 µC/m2
.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part B 21
d. The proton beam enters the electromagnet and is deflected by an angle θ = 10◦. Determine
the magnetic field strength.
θ
Electromagnet
Proton beam path
Solution
Start with F = qvB where F is the force on the protons, and v the velocity. The protons are
non-relativistic, so
1
2
mv2
= qV.
They move in a circle of radius r inside the field, given by
mv2
r
= qvB.
Combining these equations gives
r =
mv
qB
=
m
qB
r
2qV
m
=
1
B
s
2mV
q
.
Solving for the magnetic field strength,
B =
1
r
s
2mV
q
.
To relate this to the angle, we need to do some geometry. Sketch two circles, one of radius
b, the other of radius r, that intersect perpendicular to each other, as in the diagram above.
Then drawing a triangle gives
tan
θ
2
=
b
r
.
Combining our results, the answer is
B =
tanθ/2
b
s
2mV
q
= 0.0894 T.
e. The electromagnet is composed of layers of spiral wound copper pipe; the pipe has inner
diameter di = 0.40 cm and outer diameter do = 0.50 cm. The copper pipe is wound into this
flat spiral that has an inner diameter Di = 20 cm and outer diameter Do = 50 cm. Assuming
the pipe almost touches in the spiral winding, determine the length L in one spiral.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part B 22
Di
Do
Solution
Treat the problem as two dimensional. The area of the spiral is
A =
π
4
(D2
o − D2
i ).
The area of the pipe is
A = Ldo.
Equating and solving,
L =
π(D2
o − D2
i )
4do
= 33 m.
f. Hollow pipe is used instead of solid conductors in order to allow for cooling of the magnet.
If the resistivity of copper is ρ = 1.7 × 10−8Ω · m, determine the electrical resistance of one
spiral.
Solution
We have
rs =
ρL
A
where A is the cross sectional area of the pipe, or
A =
π
4
(d2
o − d2
i ) = 7.1 × 10−6
m2
Combining, we have
rs =
ρ
d
D2
o − D2
i
d2
o − d2
i
= 0.079 Ω.
g. There are N = 24 coils stacked on top of each other. Tap water with an initial temperature
of Tc = 18◦ C enters the spiral through the copper pipe to keep it from over heating; the
water exits at a temperature of Th = 31◦ C. The copper pipe carries a direct 45 Amp current
in order to generate the necessary magnetic field. At what rate must the cooling water flow
be provided to the electromagnet? Express your answer in liters per second with only one
significant digit. The specific heat capacity of water is 4200 J/◦C · kg; the density of water is
1000 kg/m3.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Part B 23
Solution
The rate of heat generation in the coils is given by
P = I2
R = I2
Nrs = 3850 W.
This must be dissipated via the increase in water temperature,
P = C∆TQ
where C is the specific heat capacity in liters, and Q is the flow rate in liters per second. But
since one liter of water is one kilogram, we can use either C. Combining, we have
Q =
I2Nr
C∆T
= 0.07 l/s.
h. The protons are fired at a target consisting of Fluorine atoms (Z = 9). What is the distance
of closest approach to the center of the Fluorine nuclei for the protons? You can assume that
the Fluorine does not move.
Solution
Conservation of energy gives
qV =
1
4π0
Zq2
r
where r is the radius of closest approach. Then
r =
1
4π0
Zq
V
= 2.59 × 10−14
m
Since this is about the size of a Fluorine nucleus, we can potentially get a nuclear reaction.
Actually, the important reaction occurs at about 380 kV.
Copyright c 2017 American Association of Physics Teachers2017 USA Physics Olympiad Exam Exam Statistics 24
Exam Statistics
Question A1 A2 A3 A4 B1 B2 Total
Mean 11 3 5 6 12 15 53
Standard Deviation 7 4 5 7 10 14 29
Maximum 25 21 25 25 42 50 163
Upper Quartile 18 4 9 8 18 26 73
Median 10 2 5 5 10 12 49
Lower Quartile 4 0 0 0 3 1 30
Minimum 0 0 0 0 0 0 5
Some Trivia:
• California had 121 test takers
• New Jersey had 42
• Texas had 38
• Florida, Illinois, Massachusetts, Maryland, New York, and Virginia each had between one
dozen and two dozen test takers
• Alabama, Alaska, Colorado, Idaho, Iowa, Louisiana, Montana, North Dakota, South Dakota,
and Wyoming did not have a test taker this year.
Copyright c 2017 American Association of Physics Teachers
