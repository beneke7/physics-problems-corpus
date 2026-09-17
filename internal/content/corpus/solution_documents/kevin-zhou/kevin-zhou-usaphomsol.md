---
id: solution-document-kevin-zhou-usaphomsol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/USAPhOMSol.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/USAPhOMSol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Practice USAPhO M
INSTRUCTIONS
DO NOT OPEN THIS TEST UNTIL YOU ARE TOLD TO BEGIN
• Work Part A first. You have 90 minutes to complete all problems. Each problem is worth an
equal number of points, with a total point value of 75. Do not look at Part B during this time.
• After you have completed Part A you may take a break.
• Then work Part B. You have 90 minutes to complete all problems. Each problem is worth an
equal number of points, with a total point value of 75. Do not look at Part A during this time.
• Show all your work. Partial credit will be given. Do not write on the back of any page. Do not
write anything that you wish graded on the question sheets.
• Start each question on a new sheet of paper. Put your AAPT ID number, your proctor’s AAPT
ID number, the question number, and the page number/total pages for this problem, in the
upper right hand corner of each page. For example,
Student AAPT ID #
Proctor AAPT ID #
A1 – 1/3
• A hand-held calculator may be used. Its memory must be cleared of data and programs. You
may use only the basic functions found on a simple scientific calculator. Calculators may not
be shared. Cell phones, PDA’s or cameras may not be used during the exam or while the exam
papers are present. You may not use any tables, books, or collections of formulas.
• Questions with the same point value are not necessarily of the same difficulty.
• In order to maintain exam security, do not communicate any information about the questions
(or their answers/solutions) on this contest.
Possibly Useful Information. You may use this sheet for both parts of the exam.
1Kevin Zhou Physics Olympiad Handouts
Part A
Question A1
Two masses, m1 and m2, attached to equal length massless strings, are hanging side-by-side just in
contact with each other. Mass m1 is swung out to the side to a point having a vertical displacement
20cm above mass m2. It is released from rest and collides elastically with the stationary hanging
mass m2. Each of the masses is observed to rise to the same height following the collision. Neglect
the volumes of the masses.
1. Find the numerical value of this height.
2. The masses swing back down and undergo a second elastic collision. After this collision, how
high do the masses rise?
3. Suppose that the collisions are instead slightly inelastic. After a long time, how high does
each mass rise in its motion, and qualitatively what is their relative position?
Solution. This is USAPhO Quarterfinal 1999, problem 3. Here’s an outline of the official solution:
1. (10) If they rose to the same height, they must have had the same speeds after the collision.
This happens when m2 = 3m1. If v0 is the speed of mass m1 right before the first collision,
then after the collision both masses have speed v0/2, so the height is 5cm.
2. (5) The reverse of the first collision happens, so m2 stops and m1 rises back to height 20cm.
3. (10) Suppose that after the first collision (which occurs at the lowest point for both masses),
the masses have velocities v1 and v2. No matter what these velocities are, the masses will
then take time π
p
L/g to swing back up, stop, and then swing back down. So the second
collision will also occur at the lowest point, and so on for future collisions. Furthermore, the
initial velocities in the second collision are −v1 and −v2, i.e. the same as the final velocities
in the first collision up to a sign.
All collisions preserve the velocity of the center of mass, m1v1 +m2v2, while an elastic collision
also preserves the relative speed |v1 − v2|. A slightly inelastic collision simply slightly lowers
the relative speed. Thus, across many collisions, m1v1 + m2v2 stays the same (up to a sign)
while v1 −v2 goes to zero. After a long time, the masses thus swing together, always touching.
At the bottom we have v1 = v2 = v, so
(m1 + m2)v = m1v0.
Thus, v = v0/4, which means both masses rise up to a height 1.25cm.
Question A2
A U-tube has vertical arms of radii r and 2r, connected by a horizontal tube of length l whose
radius increases linearly from r to 2r. The U-tube contains liquid up to height h in each arm. The
liquid is set oscillating, and at a given instant the liquid in the narrower arm is at a distance y
above the equilibrium level.
2Kevin Zhou Physics Olympiad Handouts
h
y
dx
x
ℓ
1. Show that, to second order in y, the change in potential energy of the liquid is
U =
5
8
gρπr2
y2
.
2. Show that, to second order in y, the kinetic energy of the liquid is
K =
1
4
ρπr2

ℓ +
5
2
h

dy
dt
2
.
You may find it useful to integrate over slices dx, as shown in the figure. Ignore any nastiness
at the corners, and assume ℓ ≫ r.
3. Assuming ℓ = 5h/2, compute the period of oscillations.
4. Explain why the assumption ℓ ≫ r is necessary to get an accurate result.
Solution. This is problem 3.17 of Vibrations and Waves by French.
1. (5) We can think of moving a chunk of liquid from one side to the other. If a volume V = πr2y
is added to the narrow arm, then a volume V will be removed from the other, so the water
level will sink a distance of y2 = V/(4πr2) = y/4. The center of mass of the chunk of water
will go from a height of −y2/2 to y/2, going a distance of ∆y = y/2 + y/8 = 5y/8. Then the
potential energy change is
U = ∆mg∆y =
5
8
ρπr2
gy2
.
2. (10) Consider points along the vertical arms first. The left arm’s fluid will have kinetic energy
KL = 1
2ρπr2hẏ2 and the right KR = 1
2ρπ(2r)2h(ẏ/4)2, so the kinetic energy of the arms is
KA = 1
2ρπr2ẏ2(h + h/4) = 5
8ρπr2hẏ2. In the horizontal part, a slice dx with radius r + rx/ℓ
will have area A and kinetic energy dK = 1
2ρAdxv2, and v can be found with the fact that
the fluid is incompressible: Av = πr2ẏ = A0ẏ.
dKh =
1
2
ρA
A2
0ẏ2
A2
dx =
1
2
ρA2
0ẏ2 dx
π(r + rx/ℓ)2
Kh =
1
2
ρA2
0ẏ2
Z ℓ
0
dx
π(r + rx/ℓ)2
=
1
2
ρπr4
ẏ2 ℓ
r

1
r
−
1
2r

=
1
4
ρẏ2
πr2
ℓ
K =
1
4
ρπr2

ℓ +
5
2
h

ẏ2
.
3Kevin Zhou Physics Olympiad Handouts
3. (5) The energy equation is
E =
5
4
ρπr2
hẏ2
+
5
8
gρπr2
y2
=
1
2
meffẏ2
+
1
2
keffy2
so using the standard method in M4, we have
T = 2π
r
meff
keff
= 2π
s
2h
g
.
4. (5) This ensures that our estimate of the kinetic energy above is good. There are additional
contributions to the kinetic energy due to the complicated turnaround at the corners, and
also the radial velocity in the horizontal part, but these are small by assumption.
Question A3
Two stars of masses M1 and M2 are initially orbiting each other in a circular orbit, with relative
velocity v and separation r. The first star begins slowly transferring matter to the second.
1. Show that during this process, the quantities M1M2var and vbr are conserved, for some values
of a and b, and find these values.
2. If the mass transfer rate is µ, what is dr/dt, in terms of r, M1, M2, and µ?
Solution. This is from the 2001 NBPhO. Here’s an outline of the official solution:
1. (15) The stars orbit in circles of radii r1 and r2, where
r1 =
M2
M1 + M2
r, r2 =
M1
M1 + M2
r
and have speeds v1 and v2, where v = v1 + v2. Note that the transfer does not necessarily
conserve energy, but it does conserve angular momentum. The angular momentum about the
center of mass is
L = M1v1r1 + M2v2r2 =
M1M2 r
M1 + M2
(v1 + v2) =
M1M2 vr
M1 + M2
.
Since the total mass M1 + M2 is conserved, and L is conserved, M1M2vr is conserved. Next,
we note that since the process is slow, the orbits remain circular. (This is an example of the
adiabatic theorem reasoning from M4.) Then force balance gives
M1v2
1
r1
=
GM1M2
r2
which simplifies to give
rv2
1 =
G
M1 + M2
M2
2 .
By identical reasoning, we have
rv2
2 =
G
M1 + M2
M2
1
4Kevin Zhou Physics Olympiad Handouts
which means that by combining the equations,
rv2
=
G
M1 + M2
(M1 + M2)2
= G(M1 + M2)
and the right-hand side is conserved, so v2r is conserved. Therefore, the answers are
a = 1, b = 2.
2. (10) By combining the conserved quantities, we see that M1M2
√
r is conserved. Thus, setting
its time derivative to zero gives the answer. This is most conveniently done by taking the
logarithm first,
d
dt

logM1 + logM2 +
1
2
logr

= −
µ
M1
+
µ
M2
+
1
2
ṙ
r
= 0
from which we conclude
ṙ = 2µr
M2 − M1
M1M2
.
5Kevin Zhou Physics Olympiad Handouts
Part B
Question B1
A man wishes to topple a very tall and thin obelisk, of height L. To do this, he wraps the end of a
rope of length L around the obelisk at height h, then stands on the ground and pulls the other end
as hard as he can. Assume that the rope does not slip on the obelisk, but the man can slip on the
ground, with coefficient of static friction µ.
1. Explain why the man is unlikely to succeed if he attaches the rope at h = 0 or h = L.
2. To topple the obelisk, the man should maximize the torque they can exert about the obelisk’s
base without slipping. What is the optimal value of h?
Solution. This is the “obelisk razer” problem from Professor Povey’s Perplexing Problems.
1. (5) At height h = 0, the man would just be pulling on the obelisk horizontally at its base,
which applies no torque about the base. At h = L the man would be pulling the rope almost
exactly down, which would, if anything, make the obelisk more secure.
2. (20) Let the man pull on the rope with a force F. By balancing horizontal forces on the man,
the maximum possible value of F before the man starts slipping satisfies
F cosθ = µ(mg − F sinθ)
where θ is the angle the rope makes with the horizontal, so
sinθ =
h
L
, cosθ =
√
L2 − h2
L
.
Then we have
F =
µmg
µsinθ + cosθ
.
The torque on the obelisk is then τ = Fhcosθ = FLsinθcosθ, so
τ =
sinθ cosθ
µsinθ + cosθ
µmgL.
Therefore, simplifying the fraction, we have
τ ∝
1
µ/cosθ + 1/sinθ
.
Therefore, we want to minimize the denominator. Setting its derivative to zero gives
cosθ
sin2
θ
=
µ sinθ
cos2 θ
which becomes tanθ = µ−1/3. Solving the triangle gives
h =
L
p
1 + µ2/3
.
6Kevin Zhou Physics Olympiad Handouts
Question B2
The bottom of the Marianas trench in the Pacific ocean is 10.9km below sea level.
1. Estimate the pressure at the bottom of the trench, assuming the water is incompressible. The
density of water at atmospheric pressure is 1025kg/m3.
2. In reality, water is not incompressible. Its compressibility is described by its bulk modulus,
B = ρ
dP
dρ
= 2.1 × 109
Pa.
The bulk modulus has the same dimensions as the Young’s modulus, defined as stress over
strain. They’re fundamentally very similar, but the bulk modulus quantifies the response to
uniform pressure, while the Young’s modulus quantifies the response to stress in one direction.
Find the pressure at the bottom of the trench, accounting for the compressibility of water, to
within 10% accuracy.
3. A bathyscaph is a spherical diving vessel designed to descend to great depths in the ocean.
Estimate the thickness of steel wall needed to withstand the pressure at the bottom of the
Mariana trench, to within 10% accuracy. Assume the initial radius is 1m, the Young’s modulus
of steel is 2 × 1011 Pa, and that steel breaks down at a strain (fractional length change) of
above 0.5%. (Hint: consider forces between two halves of the bathyscaph.)
Solution. This is problem 18.3 from Physics to a Degree.
1. (5) The pressure will be P0 + ρgh ≈ ρgh = 1.09 × 108 Pa.
2. (10) The fraction the water is compressed at the bottom is proportional to (ρgh)/B ≈ 5%, so
we expect the correction is small. Since the water gets compressed, there’s more of it than
accounted for in part (a), so the pressure should go up a bit. However, it’s such a small effect
that we can already tell, without doing any real calculation, that just repeating the same
answer as in part (a) is good enough to get within 10%.
For completeness, we can do this exactly, though you don’t have to do this for credit. The
pressure balance equation is dP = ρgdh, so using the definition of the bulk modulus gives
Z ρ
ρ0
dρ
ρ
=
Z P
P0
dP
B
, ρ(P) = ρ0e(P−P0)/B
.
Neglecting the atmospheric pressure, we have
dP = ρ0eP/B
gdh.
Integrating both sides,
Z P
0
e−P/B
dP =
Z h
0
ρgdh
which implies
B(1 − e−P/B
) = ρgh, P = B log

1
1 − ρgh/B

≈ 1.13 × 108
Pa.
7Kevin Zhou Physics Olympiad Handouts
In other words, the error in treating water as incompressible is only about 3%. (Note that
our final result diverges for sufficiently large h, say 100 times more than what we used in this
problem. This is just telling us that at that point, treating the water as some substance with
a constant bulk modulus breaks down. If you squeeze it enough, its bulk modulus actually
starts to increase. In fact, for sufficiently strong squeezing, ocean-temperature water will
crystallize into an exotic form of ice, and its bulk modulus will get even higher.)
3. (10) The vessel will be a spherical shell of thickness t and radius R, and the pressure differential
between the inside to the outside will be P − P0 ≈ P. Using the hemisphere trick introduced
in M2, the force between two hemispheres is πR2P.
The force is supported by a cross-sectional area of 2πRt, so the stress is
πR2P
2πRt
=
PR
2t
.
By the definition of Young’s modulus Y , the strain is
strain =
stress
Y
=
PR
2Y t
and the maximum strain is 0.005. Solving for t gives
t =
PR
0.01Y
= 6cm.
Question B3
A uniform ring of mass m and radius R has a point mass of mass M attached to it. The ring is
placed on the ground, with the point mass initially at its highest point, and is given an infinitesimal
sideways impulse in the plane of the ring. Assume the ring does not slip.
1. Assuming the ring never loses contact with the ground, find the angular velocity ω of the ring
as a function of the angle θ through which it has rotated.
2. Continuing to assume the ring never loses contact with the ground, find the vertical component
of the net force on the ring-mass system as a function of θ.
3. It turns out that for some range of values of m/M, the normal force from the ground vanishes
at some point. What are these values? (For partial credit, you can instead prove that there
exists a value of m/M so that this occurs.)
Solution. This is a classic problem, most recently popularized by Tadashi Tokieda’s paper The
Hopping Hoop and originally published in John Littlewood’s Miscellany.
1. (5) By a conservation of energy argument, and letting µ = m/M for simplicity,
ω =
s
1 − cosθ
1 + cosθ + µ
g
R
.
8Kevin Zhou Physics Olympiad Handouts
2. (10) By differentiating the angular velocity, we have
α =
(1 + µ/2)sinθ
(1 + cosθ + µ)2
g
R
.
Deriving this is a little messy, and maybe the easiest way to do it is to note that d(ω2)/dt = 2ωα,
since ω2 doesn’t have a square root.
The center of mass of the ring is always at y = R, so the vertical force is May where ay is the
acceleration of the mass. Using polar coordinates, the mass has
y = R(1 + cosθ)
which implies that
vy = −Rω sinθ, ay = −R(αsinθ + ω2
cosθ).
Plugging in our earlier results, we find the messy result
Fy = May = −Mg
sin(θ/2)2
(1 + µ + cosθ)2
(3 + µ + (4 + 3µ)cosθ + cos2θ).
3. (10) We need the normal force to vanish, Fy = −M(1 + µ)g, which is equivalent to
sin(θ/2)2
(1 + µ + cosθ)2
(3 + µ + (4 + 3µ)cosθ + cos2θ) = 1 + µ.
It’s a little easier to understand this by working entirely in terms of cosθ. Using half-angle
and double-angle identities gives
1 − cosθ
2
1
(1 + µ + cosθ)2
(2 + µ + (4 + 3µ)cosθ + 2cos2
θ) = 1 + µ.
This can indeed hold for small enough m/M. To see this, set m/M = 0 to get
1 − cosθ
2
1
(1 + cosθ)2
(2 + 4cosθ + 2cos2
θ) = 1
which greatly simplifies to 1 − cosθ = 1, which occur when θ = π/2.
Quantitatively, the normal force can vanish for m/M < 1/13. By clearing denominators and
using a series of trigonometric identities, we can show this occurs at the moment that
µ + 2cosθ +
µ(2 + µ)2
(1 + µ + cosθ)2
= 0.
To see if this condition is ever satisfied, we can minimize this with respect to θ and check
if the minimum is negative, as this implies the value would have crossed zero at some point.
Setting the derivative with respect to cosθ equal to zero gives
µ(2 + µ)2
= (1 + µ + cosθ)3
.
Plugging this result back in gives the condition
µ + 2((µ(2 + µ)2
)1/3
− µ − 1) + (µ(2 + µ)2
)1/3
≤ 0.
9Kevin Zhou Physics Olympiad Handouts
The threshold in µ occurs when this is equal to zero,
2 + µ = 3µ1/3
(2 + µ)2/3
.
Throwing away the extraneous solution µ = −2, this equation is equivalent to

µ + 2
µ
1/3
= 3
which has solution µ = 1/13, so the answer is m/M < 1/13.
Of course, it’s crazy that all this is worth just 10 points! In practice, some points are indeed
much harder to get than others. But the true purpose of this question is to test how you fare
under extreme time pressure. If you spent a lot of time working on this part, but lost some
much easier points on B1 or B2, you should reconsider your strategy for future mock exams.
Tough question, right? But it’s actually even trickier. You might think that when the normal
force vanishes, the ring jumps off the ground. But in fact, for the initial conditions assumed in this
problem, it turns out the vertical acceleration of the ring is downward at this moment. So the ring
slightly deforms into the ground, while exerting no normal force! In addition, the ring can start
slipping, no matter how high the coefficient of friction is, since the normal force vanishes. So it is
very nontrivial to determine what actually happens next; it depends on nonideal features of the
system. For a recent discussion, see this paper.
10
