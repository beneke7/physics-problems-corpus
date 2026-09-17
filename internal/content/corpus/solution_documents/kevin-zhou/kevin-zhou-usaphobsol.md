---
id: solution-document-kevin-zhou-usaphobsol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/USAPhOBSol.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/USAPhOBSol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Practice USAPhO B
INSTRUCTIONS
DO NOT OPEN THIS TEST UNTIL YOU ARE TOLD TO BEGIN
• Work Part A first. You have 90 minutes to complete all problems. Each problem is worth an
equal number of points, with a total point value of 100. Do not look at Part B during this time.
• After you have completed Part A you may take a break.
• Then work Part B. You have 90 minutes to complete all problems. Each problem is worth an
equal number of points, with a total point value of 100. Do not look at Part A during this time.
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
A mass, which is free to move on a horizontal frictionless plane, is attached to one end of a massless
string which wraps partially around a frictionless vertical pole of radius r, as shown (top view).
R
r
v0
hand
1. At time t = 0, the mass has speed v0 in the tangential direction along the dotted circle of
radius R shown. You pull on the string so that the mass keeps moving along the dotted circle,
so that the string remains in contact with the pole at all times. Find the speed of the mass
as a function of time.
2. Now suppose that, at time t = 0, the mass has speed v0 opposite the direction shown. You
hold the string, keeping your hand stationary. Using the approximation r ≪ R, find the time
when the mass hits the pole.
Solution. This is an extension of BAUPC 2002, problem 2. The answers are:
1. The centripetal acceleration is v2/R, so by similar triangles, the tangential acceleration is
v2 tanθ/R, where tanθ = r/
√
R2 − r2. We thus have
dv
dt
=
v2
R
tanθ
and separating and integrating gives
ttanθ
R
=
1
v0
−
1
v
.
Solving for v gives
v =

1
v0
−
tr
R
√
R2 − r2
−1
.
Of course, this expression eventually blows up, which indicates that it’ll break down before
that point, e.g. because the string will snap.
2. This is a new part. Here energy is conserved, so the speed remains v0. Every time the string
wraps around the pole, the length r′ of the free string decreases by 2πr. In addition, each
wrapping takes an approximate time 2πr′/v0, where we approximated the trajectory for one
revolution as circular. Therefore, we have
dr′
dt
≈ −
r
r′
v0.
Separating and integrating gives tf = R2/(2v0r).
2Kevin Zhou Physics Olympiad Handouts
Question A2
A point source S emits coherent light of wavelength λ isotropically in all directions; thus, the
wavefronts are concentric spheres. The waves reflect from a mirror placed at a distance ℓ = Nλ
(where N is a large integer) from the point source, and the interference pattern is observed on a
screen, parallel to the mirror, which is placed a distance L ≫ ℓ from the point source. The mirror
lies in the yz plane, as shown.
1. At which values of y are the interference maxima on the screen? You may assume y ≪ L.
2. Sketch the shape of the few smallest-sized interference maxima on the screen.
3. Now the flat screen is replaced with a spherical screen of radius L, centered on the point
source. How many interference maxima can be observed?
Solution. This is NBPhO 2014, problem 8. The answers are:
1. y = L
p
(n + 1/2)/N
2. The maxima form concentric circles on the screen, which get closer together for higher n.
3. 2N
Question A3
A long wire of radius a along the y-axis carries current I. A particle of charge q and mass m is
ejected perpendicular to the surface of the wire, with speed v0. Find the maximum distance the
particle attains from the y-axis.
Solution. This is INPhO 2011, problem 1, with subparts removed. Let r be the distance to the
wire. The charge’s speed v0 is constant, and its acceleration is
a =
qv0B
m
=
µ0Iqv0
2πm
1
r
.
Since this acceleration is always perpendicular to the velocity, a = v0 dθ/dt, so
dθ
dt
=
µ0Iq
2πm
1
r
.
We also know that dr/dt = v0 cosθ, where θ is the angle of the velocity to the radial direction.
Multiplying both sides of the above equation by dt/dr thus gives
dθ
dr
=
µ0Iq
2πv0m
1
rcosθ
.
3Kevin Zhou Physics Olympiad Handouts
Separating and integrating gives
Z π/2
0
cosθdθ =
µ0Iq
2πv0m
Z rmax
a
dr
r
from which we conclude
rmax = aexp(2πv0m/µ0Iq).
More generally, if the particle starts with a velocity in an arbitrary direction, the trajectories are
quite intricate, exhibiting “double helix” structures; you can find plots of them in this paper.
Question A4
Two identical long cylindrical conductors, of diameter d and negligible resistance, are placed parallel
to each other with their axes separated by distance D = 50d.
A battery of voltage V is connected between the ends of the wires, and a resistor R is connected
across the other ends. Numerically compute the resistance R that makes the electric and magnetic
forces between the conductors equal.
Solution. This is problem 172 from 200 More Puzzling Physics Problems. By Gauss’s law, a single
cylinder has electric field E = λ/(2πrϵ0), so potential V = λ logr/(2πϵ0). Since D ≫ d, we can
neglect the influence of the cylinders on each other, so they can be treated as two isolated cylinders,
giving a voltage difference
V = 2
λ
2πϵ0
log
D
d/2
=
λ
πϵ0
log(100).
We also have V = IR where B = µ0I/(2πD), so the magnetic force is
FB = ILB =
µ0V 2L
2πR2D
.
The electric force is
FE = λLE =
λ2L
2πDϵ0
.
Setting these equal and solving gives
R =
log(100)
π
r
µ0
ϵ0
= 552Ω.
This is an interesting result, because you’ve probably heard that µ0 can be determined by measuring
the force between current-carrying wires. Yet for a completely reasonable value of the resistance,
the electric force between the wires, due to the surface charges they have to carry (discussed briefly
in E2), can be just as big! To avoid this effect, we need R to be as low as possible.
4Kevin Zhou Physics Olympiad Handouts
Part B
Question B1
A pencil is placed vertically on a table with its point downward. It is then released and begins
falling over to the right. Model the pencil as a uniform rod, and the pencil tip as an ideal point
with coefficient of friction µ with the floor.
1. Assuming the pencil tip has not yet slipped, compute the normal force N as a function of θ,
the angle through which the pencil has rotated.
2. Assuming the pencil tip has not yet slipped, compute f/N as a function of angle θ, where f
is the friction force acting on the tip of the pencil.
3. If µ can be arbitrarily large, find the largest possible angle θ at which the pencil tip can first
begin to slip, and indicate the direction it slips.
4. Now suppose that µ = 0.1. Numerically compute the angle at which the pencil tip slips to
within one significant digit, and indicate the direction it slips.
Solution. This is problem 61 from 200 Puzzling Physics Problems. The answers are:
1. Using energy conservation and considering the vertical acceleration of the center of mass,
N =

3cosθ − 1
2
2
mg
2. By considering the horizontal acceleration of the center of mass,
f =
3
4
sinθ(3cosθ − 2)mg
from which we conclude
f
N
=
3sinθ(3cosθ − 2)
(3cosθ − 1)2
.
3. Slipping occurs when µ < |f/N|, and f/N diverges when cosθ = 1/3. Thus, slipping must
occur by θ = cos−1(1/3) = 70.5◦. The slipping is to the right.
4. We need to solve the equation f/N = 0.1 numerically. This equation has multiple solutions;
we want the one with smallest θ. There are several ways to do this, but one way is to notice
that µ is quite small, so slipping will occur at a small θ. If we expand f/N at small θ, we get
f
N
≈
3θ(3 − 2)
(3 − 1)2
=
3
4
θ.
Therefore, a good first estimate for the answer is θ = (4/3)(0.1). Plugging this in, you’ll find
that this actually corresponds to f/N = 0.099, which is certainly close enough to get the
answer within one significant digit. Therefore, we conclude that
θ ≈ 0.133 = 7.6◦
.
The slipping is to the left.
This is a classic problem which has been studied in several papers (e.g. see here). For general
coefficients of friction and initial angles, you can get rather complicated behavior. For example, it
is possible for the pencil tip to start sliding one way, stop, and then start sliding the other way.
5Kevin Zhou Physics Olympiad Handouts
Question B2
For a fairly simple system of charges proposed by W. Shockley and R. P. James in 1967, understand-
ing the conservation of linear momentum requires careful relativistic analysis. If a point charge is
located near a magnet of changing magnetization, there is an induced electric force on the charge,
but no apparent reaction on the magnet. The process may be slow enough that any electromagnetic
radiation (and any momentum carried away by it) is negligible. Thus, we apparently get a cannon
without recoil.
In this problem, you will demonstrate that in relativistic mechanics, a composite body may hold
a nonzero mechanical momentum while remaining stationary. First, consider a circular current loop
of radius r carrying a current I1, and a second, larger current loop of radius R ≫ r, concentric with
the first and lying in the same plane.
1. A current I2 passing through loop 2 (the larger loop) generates a magnetic flux ΦB1 through
loop 1. Find the ratio M21 = ΦB1/I2. It is called the mutual inductance coefficient.
2. Given that M12 = ΦB2/I1 = M21, find the total induced EMF E2 in the larger loop as a result
of a variation dI1/dt of the current in the smaller loop. Neglect the current in the larger loop.
3. The EMF you found above is due to the tangential component of an induced electric field.
Obtain an expression for the tangential electric field E at radius R as a function of dI1/dt.
4. We now remove the larger current loop, and put a massive point charge Q at radius R.
R r Q
It may be assumed that the charge moves very little during the relevant time periods.
Find the total tangential impulse ∆p received by the point charge as the current in the small
loop changes from an initial value I1 = I to the final value I1 = 0.
We will now understand the origin of the recoil of the loop, using a loop of different geometry.
5. Consider a hollow tube with walls made of a neutral insulating material of length ℓ and
cross-sectional area A carrying an electric current I. The current is due to charged particles
of rest mass m and charge q distributed homogeneously inside the tube with number density
n. Assume that the charged particles are all moving along the tube with the same velocity.
Find the total momentum p of the charged particles in the tube, taking special relativistic
effects into account.
6. Now consider a square current loop with side length ℓ. At a distance R ≫ ℓ from the loop,
there is a point charge Q, as shown.
R
ℓ
Q
6Kevin Zhou Physics Olympiad Handouts
The loop carries current I. We will model the current loop as a neutral tube, as in part 5.
The charge carrierss can move freely along the loop, colliding elastically with the walls and
making elastic right turns at the corners. Neglect all interactions among the charge carrierss.
Assume also that all the charge carriers at a given section along the tube always move with
the same velocity. Assume that the loop is heavy and that its motion can be neglected.
Calculate the total linear momentum phid of the charge carrierss in the loop. It is called
“hidden momentum”.
When the current stops, this linear momentum is transferred to the loop, and it gets an impulse
equal to minus the impulse received by the point charge. This is the missing recoil that we were
looking for (note that in the initial state there is also momentum in the electromagnetic field; this
is important for conservation of the total momentum of the entire system).
Solution. This is the first 2/3 of APhO 2011, problem 1. The answers are:
1. M21 = πµ0r2/(2R)
2. E2 = πµ0r2 ˙ I1/(2R)
3. E = µ0r2 ˙ I1/(4R2)
4. ∆p = µ0r2IQ/(4R2)
5.
p =
mIℓ
q
1 −

I
nAqc
2
!−1/2
6. The momenta of the top and bottom sides cancel by symmetry. The left and right sides have
a potential difference ∆U = kQqℓ/R2, and carry the same current I = qλ1v1 = qλ2v2. Energy
conservation gives (γ2 − γ1)mc2 = ∆U. The total momentum is
phid = mℓ(γ2λ2v2 − γ1λ1v1) =
mℓI
q
(γ2 − γ1) =
kQIℓ2
R2c2
.
7
