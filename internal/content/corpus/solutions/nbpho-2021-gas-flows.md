---
id: nbpho-2021-gas-flows
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2021-gas-flows
solution_type: official
source_document: solution-document-nbpho-2021-s
source_pdf: cache/phoxiv/nbpho/2021_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2021_S.pdf."
---

2. GAſ AND FLUıD FLOWſ (10 points) — Solu­
tionbyTaavetKalda,gradingschemesbyJoonas
Kalda, Mihkel Kree, Andres Põldaru, Oleg Košik.
i) (1 point) As the plate falls, it will rotate
around the bump without slipping and push
the air out from beneath it, at ever faster
speeds, the closer it gets to the bottom plate.
As such, part of the rotational energy of the
plate is transferred over to the escaping air
molecules. Further, the pressure and tem‐
peratureofthegasisuniform,becauseofthe
incompressibility condition.
Since the problem is 2‐dimensional, the
mass, volumes, moment of inertia and other
quantities are per unit length of the system
(on the figure, into the page). Let x mark the
distance from the bump and v denote the ho‐
rizontalspeedofairat x. Thereisavolumeof
airequaltoV(x)= xhx/(2L)between x=0and
x. As the plate falls down, V(x) gets smaller
and as a result, air is pushed out. Consider a
smalltimeintervaldt. Inthattimeinterval, h
changes by ḣdt=−ωLdt. From the conserva‐
tion of air particles, 0=dV(x)+v(x)hx/L with
dV(x)=−x2
ω/2. Hence,
v(x)=
xLω
2h
.
Evaluated at x= L, this yields
v(x= L)=
L2
ω
2h
.
Grading:
• Stating the idea of using conservation of
mass (or implicitly using it) to find the ve‐
locity 0.4pts.
• Equation for the conservation of mass
0.4pts.
• Correct final expression 0.2pts.
ii) (2.5 points) Since the air flow is laminar
and there is no diffusion, all of the lost ro‐
tational energy from the falling glass plate
will be converted into kinetic energy of air
particles. As such, we have Krot+Kair =const.
Wefoundfromthepreviouspartsthattheair
is pushed out at ever faster speeds (between
the plates, v(x) À Lω) from between the two
plates. However, outside of the two plates,
the flow will diffuse fast in all directions,
such that the vast majority of kinetic energy
will be concentrated between the two plates.
The kinetic energy of the air between the
two plates is
Kin =
Z L
0
dx
hx
L
ρa
1
2
v(x)2
=
ρaLω2
8h
Z L
0
x3
dx
=
ρaL5
ω2
32h
,
and the rotational energy of the glass plate is
Krot =
Iω2
2
=
mglassL2
3
ω2
2
=
L3
tρgω2
6
.
Energy conservation then reads as
ρaL5
ω2
32h
+
L3
tρgω2
6
=const
=
ρaL5
ω2
0
32h0
+
L3
tρgω2
0
6
,
and hence,
ω=ω0
v
u
u
u
u
t
1+
3ρaL2
16ρgt
1
h0
1+
3ρaL2
16ρgt
1
h
.
We can see that limh→0 ω = 0, i.e. the air acts
as a cushion and stops the glass plate before
it hits the stationary plate.
Grading:
• Noticing from the laminarity of the flow
that the kinetic energy of the glass plate
and its surrounding air is conserved. If the
flow is assumed to be dissipative, and the
problem is otherwise solved correctly, the
maximum score is reduced by 0.3 pts from
this part. 0.6pts.
• Calculating the kinetic energy of the air, of
which: 1.2pts,
– Noting that the majority of the air’s kin‐
etic energy is between the two glass
plates (no formal proof required) 0.6pts.
– Finding the air velocity at a distance x
from the pivot 0.2pts.
– Correct setup for the integral for the kin‐
etic energy 0.3pts.
– Correct final expression for the kinetic
energy of air 0.1pts.
• Calculating the kinetic energy of the glass
slab, of which: 0.4pts,
– Correct expression for the moment of in‐
ertia 0.2pts.
• Final expression for angular speed as a
function of h 0.3pts.
iii)(3points)Theincomingwaterfrom‘2’will
spread out axisymmetrically along the space
between the stone disk and the ceiling. After
that, it will spread into the basin and eventu‐
ally leave through the outgoing pipe ‘3’. The
stone disk is kept up by the pressure differ‐
encesbetweenthetopandbottomofthedisc,
arising from the flow speed of the water dif‐
fering on either sides. The fact that pres‐
sures differ on boths sides can be seen dir‐
ectly by the application of the Bernoulli Prin‐
ciple p+ρwv2
/2=const along a streamline or
by noting that the flow speed gradients are
driven by pressure gradients.
The flow speed outside the gap is negli‐
gible due to t ¿ R, hence we can take the
pressure at the bottom side to be uniformly
p0. The flow speed in the gap at a distance
x from the axis of symmetry can be found
from the conservation of mass applied on a
concentric cylinder of radius x and height t,
giving 2πxtρwv(x)=µ. Hence,
v(x)=
µ
2πxtρw
.
Applying Bernoulli’s principle, we get p(x)+
ρwv2
/2= p0 and so
∆p = p0 − p(x)=
ρwv2
2
=
1
2ρw
³ µ
2πxt
´2
.
We can hence find the force due to the pres‐
sure differences in the gap by integrating
from x = r to x = R. First note that the res‐
ulting force will be pointing vertically up, be‐
cause p(x)< p0. Integrating,
F1 =
Z x=R
x=r
2πxdx∆p
=
µ2
4πt2ρw
Z x=R
x=r
dx
x
=
µ2
4πt2ρw
ln
µ
R
r
¶
.
Note that the water entering through the
pipe will slow down, pushing the disk fur‐
ther down. The net force from this, however,
turns out to be negligible due to the condi‐
tion r À t. To see this, one can argue that
the said force is of order µvpipe ∼ µµ/(ρwr2
) ∼
µ2
/(ρwr2
)¿ F1.
Further, we have the gravitational force
Fg =−mg =−πR2
hρsg pulling the disk down
and buoyancy force Fb = πR2
hρwg pushing
disk up. The force balance then reads Fg +
Fb +F1 =0. Solving the equation, we find
µ=2πRt
s
hρw(ρs −ρw)
ln(R/r)
g.
Grading:
• Speed dependence v(x) from continuity
condition 0.5pts.
• DynamicpressurefromBernoulliequation
0.5pts.
• Express force by integrating dynamic pres‐
sure over disk area. 0.5pts.
• Explanation why the jet’s impact force can
be ignored (or equivalently, an expression
for the impact force that is carried along in
the solution) 0.5pts.
• Disk’s weight and buoyancy force 0.5pts.
• Express answer from force balance 0.5pts.
iv) (0.5 points) In the context of thermody‐
namics, entropy is defined in terms of its dif‐
ferential, such that the change in entropy of
a system is given by dS = dQ/T, where dQ is
the heat entering the system, and T its tem‐
perature. Further, entropy in reversible ther‐
modynamic processes is a state function, i.e.
it only depends on the current (equilibrium)
thermodynamical state of the system. This
means that when calculating the entropy dif‐
ferenceofonemoleofvapourandliquid, the
temperature at which the phase transition
took place does not affect the final result.
As such, it’s most convenient to consider
the two final states as only differing by the li‐
quid undergoing condensation at t0 = 100°C.
The final temperature is t0 = 100°C because
that’s when water vapour pressure is equal to
p0 (i.e. boiling temperature at atmospheric
pressure). Thiscorrespondstoaheatof∆Q =
mL = 1mol·ML entering the vapour system,
compared to the liquid one. Hence, the en‐
tropy difference between one mole of vapour
and liquid is given by
∆S =
∆Q
T0
=
1mol·ML
T0
=110J/K.
Grading:
• ∆S =
∆Q
T 0.1pts.
• ∆Q = LM 0.1pts.
• Understanding that T = T0 0.2pts.
• Correct numerical answer 0.1pts.
v)(3points)Becausetheexpansionofwateris
reversible, entropy is conserved. This means
that the change in entropy due to the expan‐
sion of the vapour is balanced by the entropy
change due to condensation. As discussed
before, becauseentropyisafunctionofstate,
it’s most convenient to calculate the entropy
change by imagining n moles of water (n will
latercancelout)coolingandexpandingfrom
Tt, pt to T0, p0 and condensing rn moles of
water at the end. r is found by demanding
that ∆S =0 in this process.
The entropy change of the vapour is
found by applying the first law of thermody‐
namics over a small temperature and pres‐
sure increment dT, dp:
dSvapour =
dQ
T
=
dU +dW
T
,
where dU = ncvdT is the change in internal
energy of the vapour and dW = pdV is the
work done by the vapour. Importantly, we
neglect the volume of water compared to the
vapour, as that allows using the ideal gas
to simplify the work differential. Using the
ideal gas law, we then have
pdV = pd
µ
nRT
p
¶
= nRdT −nRT
dp
p
.
Hence,
dSvapour = n(cv +R)
dT
T
−nR
dp
p
and we can integrate to get
∆Svapour = ncp ln
µ
T0
T1
¶
−nRln
µ
p0
