---
id: solution-document-nbpho-2005-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2005_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2005-anemometer, nbpho-2005-ballistic-rocket, nbpho-2005-balloon, nbpho-2005-heat-exchange, nbpho-2005-magnetic-break, nbpho-2005-mechanical-black-box, nbpho-2005-mechano-electrical-oscillator, nbpho-2005-rock-climber, nbpho-2005-water-pump]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2005_S.pdf."
---

1. Rock Climber
1) In the case of falling, the acceleration should not exceed 5g, which
means that σ(ε)
m
− g < 5g. Maximum strain is the solution of the fol-
lowingequationσ(ε) = 6gm = 6×9.8m
s2 ×80kg = 4.7kN. According
to the graph, ε = 0.315; hence, l < 0.315(L + H) + L
2) In the case of falling, the climber reaches the lowest point, when its
velocity become zero. This means that the energy absorbed by the rope
becomesequal to the change of the potential energy:
E = mg(2L + x),
where x = l − L. Energy absorbed by the rope is given by
E =

σ(ε)dx =

σ(ε)(L + H)dε = (L + H)

σ(ε)dε.
We know that the maximal value is ε = 0.315, which makes it possible
to calculate the integral numerically, as the area under the graph.
S(ε) =
 0.31
0
σ(ε)dε ≈ 564.8N
Thus,
(L + H)S(ε) = mg(2L + x) = mg(2L + ε(L + H)),
hence
L =
H(mgε − S(ε))
S(ε) − mg(ε + 2)
≈ 5.08m.
So, the new carabiner mustbe anchored within next L = 5.08m.
2. Magnetic brake
1) Sleeper is a simple cylindrical conductor:
R =
ρh
(δ
2
)2π
≈ 5.59mΩ.
2) Length of the railway element is αR, hence the resistance is R2 =
αR. Main ideas: first - we can imagine that railway is infinite; second
— the resistance (RR) of this infinit array remain same even if we cut
of one periodic element. Hence,
RR =
R(2R2 + RR)
2R2 + RR + R
.
Aftersolving the equation
RR = −R2 ±

R2
2 + 2R2R =

R2
2 + 2R2R − R2
andnoting that the negativesolution ofthe equation hastobe dropped
(it doesnot have physical meaning), we arrive at
RR = R(

α(α + 2) − α).
3) Importantideas:
• electromotive force is generatedwhen conductorsmove in mag-
netic field;
• There is always two sleepers moving between magnets (in mag-
netic field);
• Those sleepersactasasources of electromotiveforce (like abat-
tery);
• those sleepers also have internal resistance R.
Notice also that we can take account symmetry and connect points
with equal potential; this allows us later to simplify cyclic railway to
previously solved infinite (actually, very long) railway. We can also see
that there is no current between the two sleepers residing in the mag-
netic field (there is no potential diﬀerence), hence we can disconnect
them. So, we can obtain two indipendent (almost) infinite railways and
both have their own source of elecromotive force.
R
αR
4) Electromotive force in the sleeper is E = Bvh. Energy is dissipated
into heat P = E2
Rcircuit
. where Rcircuit = 1
2
(RR + 2αR + R),
Rcircuit =
1
2
R(

α(2 + α) + α + 1).
Consequently
P =
2B2
ω2
r2
h2
R(

α(2 + α) + α + 1)
Eventually,
k =
2r2
h2

α(2 + α) + α + 1
≈ 2.12 × 10−6
.
5) Since the power equls to Mω = P, the torqe can be found as
M =
P
ω
=
2B2
ωr2
h2
R(

α(2 + α) + α + 1)
≈ 0.39mNm.
6) Disc has a momentum of inertia eual to I = 1
2
mr2
; the angular
acceleration ε = M
I
= dω
dt
. Consequently (using decelerating M),
kB2
ω
IR
= −
dω
dt
.
If we group the variables I and t into diﬀerent side of the equation, we
obtain
kB2
IR
dt =
dω
ω
.
Integrating the both sides of the equation yields
 t
0
kB2
IR
dt = −
 ω
ω0
dω
ω
⇒
kB2
IR
t = −ln
ω
ω0
,
ω = ω0e−kB2
IR t, and finally τ = IR
kB2 ≈ 2.9s.
3. Ballistic rocket
1) The net energy depends only on the longer semi-axes. Hence, the
longer semi-axes is the sameas in the case of near-Earth orbit: a = R.
O
O’
A
B
C
2)Theellipse hasaproperty thatthesumoflengths fromeachpoint on
the orbit to the both foci of the orbit is constant (equals to 2a). Hence,
theotherfocus(i.e. which isnotthecentre ofEarth)isatthedistanceR
fromboth the launching point andlanding point, see Fig. So, theheight
h = |CB| = |OB| − R; since |OB| = R + 1
2
|OO
| = R(1 +
√
2
2
), we
finally obtain h = R √
2
.
3) The ratio of the flight time to the period along the elliptic orbit
equals to the ratio of two surface areas: the one painted dark grey
in Fig, and the overall area of the ellipse. The rotation period is the
same as in the case of near-Earth orbit (due to Kepler’s third law),
T = 2πR/v = 2π

R/g. The dark gray surface area is calcula-
ted as the sum of half of the ellipse area, and a triangle area. So,
τ = T · (π
2
R · R √
2
+ R2
/2)/πR · R √
2
= (π +
√
2)

R/g.
4. Water pump
1) Let us consider the process in the system, rotating together with the
tank. Then, there is a potential energy related to the centrifugal force:
Uc =
r
0
ω2
rdr = 1
2
ω2
r2
. So, the pressure p2 = p0 − ρgh + 1
2
ω2
r2
.
2)FromtheBernoulli formula, 1
2
ρu2
= p2 −p0 = 1
2
ω2
r2
−ρgh,hence
the squaredvelocity in therotating reference systemu2
= ω2
r2
−2gh.
The laboratory speed v2 = u2
+ ω2
r2
= 2(ω2
r2
− gh), i.e. v2 = 
2(ω2r2 − gh).
3)Thepoint oflowestpressure pm insidethepump istheupmostpoint
of the tube. Using the Bernoulli formula, p0 = pm + ρgh + 1
2
ρv2
1,
where the velocity in the tube can be found from the continuity condi-
tion: S1v1 = S2u = S2

ω2r2 − 2gh. Therefore, pm = p0 − ρgh −
1
2
ρ(ω2
r2
−2gh)(S2
S1
)2
. Notice that the “boiling” startswhen pm = pk.
So, ω2
mr2
= 2gh + (p0−pk
ρ
− gh)(S1
S2
)2
; finally we obtain
ωm = r−1

2gh +

p0 − pk
ρ
− gh

S1
S2
2
.
4) The maximal productivity is apparently achieved for the highest ef-
ficiency. The eﬃciency is highest, when the residual velocity is lowest:
u → 0, and ω → ωmin. According to the results of the second ques-
tion, ωmin = r−1
√
2gh. So, the minimal residual velocity of the wa-
ter streams is vmin = ωminr =
√
2gh. The associated lost power is
1
2
µv2
min = µgh. Theusefulpowerisassociatedwith thepotentialener-
gy increase (by gh),i.e. the total power P = 2µgh. Hence, µ = P/2gh.5. Anemometer
1) First we need to find the angle after the refraction β: For small inci-
dence angles we find approximately β = α/n. In the liquid, the wa-
velength is decreased n times: λ
= λ/n. The requested wavelength
canbefoundasthe distancebetweenthelines connecting theintersec-
tionpointsoftheequal phaselinesofthetwobeams. Alternatively(and
in a simpler way), it is found as the diﬀerence of the two wavevectors:
k
= kβ, where k = 2π/λ
= 2πn/λ is the wavevectorof the incident
beams. So, ∆ = 2π/k
= λ/α ≈ 7,4µm.
2) The scattered light fluctuates due to the motion of the scattering
particles; the frequency is ν = v/∆ = vα/λ. There is no way to de-
termine the direction of the flow, but the modulus is obtained easily:
v = νλ/α ≈ 0.37m/s.
3) The spatial structure of the interference pattern remains essentially
unchanged (the wavelength diﬀerence is negligible). However, the pat-
tern obtains temporal frequency δω = δ(c/λ) ≈ cδλ/λ2
. The velocity
of the interference pattern u = ∆δω = c
α
δλ
λ
. If the fluid speed is
v ≈ 0.37m/s, then the relative speed of the pattern and the fluid is
ν
= c
α
δλ
λ
± v, depending on the direction of the flow (in both cases,
ν
≈ 740kHz). So, the output frequency allows us to determine the
flow direction as long as we can be sure that the interference pattern
velocity is larger than the flow velocity.
6. Mechano-electrical oscillator
1) From the Newton’ssecondlaw, mẍ = −kx, hence ẍ = − k
m
x, hence
ω =

k/m.
2) From the Gauss’ law, the charge on the plate Q = Sε0E =
Sε0U/X1. The force acting on it Fe = k(X0 − X1) = QE, whe-
re E is the average electric field (averaged over the charges). Let us
look at the charge layer (at the surface of the plate) with a high mag-
nification: the electric field there depends linearly on the net charge
inwards (in the plate) from the current point. Therefore, the average
fieldisjustthearithmeticaverageofthefieldsonbothsidesofthelayer:
E = E/2. Finally, Fe = k(X0 − X1) = QE/2 (this result could
have been obtained from energetic considerations, using infinitesimal
virtual displacement of the plate and the energy conservation law). So,
Fe = S
2
ε0(U/X1)2
, hence U = X1

2k(X0 − X1)/Sε0.
3) If the plates move by x, the change of the force due to electric field
is δFe = x| d
dX1
S
2
ε0(U/X1)2
| = x
X1
Sε0(U/X1)2
; bearing in mind
that S
2
ε0(U/X1)2
= k(X0 −X1), weobtain δFe = 2 x
X1
k(X0 −X1).
There is also force cahnge due to elasticity: δFk = −kx; the two forces
haveoppositesign(while approaching thediscs, δFk triestopush back,
and δFe tries to pull disks even closer). So, δF = −kx[1 − 2(X0
X1
−
1)] = −kx(3 − 2X0
X1
). Finally, ẍ = δF/m = −x k
m
(3 − 2X0
X1
), and
ω = k
m
(3 − 2X0
X1
)
4) Now we have two oscillating variables, x and q. First, we write down
the equation due to Kirchoﬀ’s laws: Lq̈ = − q
C
− xQ d
dX1
C−1
. He-
re, the second term describes the voltage change on the capacitor due
to the change of the capacitance (we approximate the real change by
diﬀerential, valid for small shifts x). Note that C−1
= X1/Sε0 and
Q = Sε0U/X1; hence d
dX1
C−1
= 1/Sε0, and
Lq̈ = −
q
C
− U
x
X1
.
Here, the sign of the second term assumes that the x-axes is directed
upwards (there is no current in the inductance and Lq̈ = 0, if the vol-
tage on the capacitor keeps constant; for increasing charge q > 0, this
assumesincreasing capacitance, i.e. x < 0; in a full agreement with the
signs of the above expression).
ThesecondequationdescribestheNewtonsecondlaw. Firstweno-
te that the expression for Fe can be rewritten as Fe = Q2
/2Sε0. So,
if the charge on the plate does not change (q = 0), neither does chan-
ge Fe. So, δFe = q d
dQ
Q2
/2Sε0 = qQ/Sε0. The infinitesimal force
changes (δFk and δFe) can be simply added:
mẍ = −kx − qQ/Sε0.
Now, let us look for a sinusoidal solution of circular frequency ω.
Then, ẍ = −ω2
x and q̈ = −ω2
q. Substituting this into the two above
obtained equations, we find
(Lω2
− C−1
)q = xU/X1
(ω2
m − k)x = qQ/Sε0
.
This has a non-zero solution for x and q only if
(Lω2
− C−1
)(ω2
m − k) = UQ/X1Sε0.
Bearing in mind that UQ/X1 = 2k(X0 − X1) and C = ε0S/X1, we
can rewrite the equation as
(ε0SLω2
− X1)(ω2
m − k) = 2k(X0 − X1).
Introducing ω2
0 = k/m and ω2
1 = X1/ε0SL wecan further rewrite as
ω4
− ω2
(ω2
1 + ω2
0) + ω2
0ω2
1

3 − 2
X0
X1

= 0.
Therefore,
2ω2
= ω2
1 + ω2
0 ±

ω4
1 + ω4
0 + 2ω2
1ω2
0(X0X−1
1 − 5),
i.e. this systemhas two eigenfrequencies, if X0
X1
< 3
2
(and becomesuns-
table, otherwise).
7. Heat exchange
1) It is easy to see that the temperature profile along the plate is linear,
andthe temperature diﬀerence ∆T between the twoplates is constant,
∆T ≡ T0 − T2. Indeed, then the heat exchange rate q (per unit plate
area) is also constant, which in its turn corresponds to a linear tempe-
rature profile. Let us use a reference frame moving together with the
incoming air. Then, the temperature increase rate at a given point is
Ṫ = v(T2 − T1)/x. Then, the heat balance for a air element of volume
V = s × h is written as ρshcpṪ = q = sσ∆T/d = sσ(T0 − T2)/d.
So, ρshcpv(T2 − T1)/x = sσ(T0 − T2)/d, hence
T2 =
xσT0 + ρhcpvdT1
xσ + ρhcpvd
.
2) Rewriting the heat balance equation P = −C dT
dt
as
dt = −CP−1
dT we conclude that time can be found
via the area S under the graph, where P−1
is plotted
versus the temperature as t = SC. The graph data:
T(K) 100 200 300 400 500 600 700 800
P(W) 13 30 55 83 122 177 258 395
100P−1
7.7 3.3 1.8 1.2 .82 .57 .39 .25
Substituting the region with smooth boundaries with a superposition
of trapezoidswe find S ≈ 12K/W. Consequently, t = 120s.
8. Balloon
WecanmeasuretheliftoftheballbyattachingaweightM = 100gtoit
andtakingthereadingofthescalesF/g = m+M−ρV = 73.4g,whe-
reρ = µp0/RT ≈ 1.2g/l. Hence,ρV −M = 27.6g. So,weneedtode-
termine the volume of the ball. Tothat end, we tighten the rope around
the ball as tightly as the fasteners can hold (note that smaller tension
values would resultsin atoosmallvolume decrease, andhence, in alar-
ge uncertainty of the final answer). We weight the ball with rope (93.3
g)and subtractthe massofthe rope (19.1 g)to find ρV 
−M = 28.4g,
where V 
is the ball volume, when the rope is tightened. Hence, the
volume decrease ∆V = V − V 
= (28.4 − 27.6)/1.2 l≈ .67l. La-
ter, we determine the maximal tension in rope (which can be hold by
fasteners) with dynamometer, T ≈ 30N. We also estimate the average
angle tanα ≈ 1.4. Theradiusoftheloopis calculatedfromthemeasu-
rement of the perimeter, R ≈ 15cm. According to the given formula,
these data correspond to ∆p ≈ 1900Pa. Due to gas law, ∆p
p0
≈ ∆V
V
,
hence V ≈ p0
∆V
∆p
≈ 33l. Therefore, M = ρV − 27.6g ≈ 12g.
9. Mechanical black box
First we determine the coeﬃcient of friction as follows. We make sure
that the object is at the bottomofthe box. We put the box on the plank
so that the axes of the cylinder is parallel to the axes of the plank. We
start inclining the plank so that the bottom of the cylindrical box gets
higher. We determine the angle of the plank α, when the object starts
sliding: it hits the cover of the box. It is convenient to put the cover
(and the rim of the cover) of the box hanging slightly over an end of the
plank. In that case, object hiting the cover of the box results in box fal-
ling down from the plank. We measure the tangent of the plank at that
moment: µ = tanα = 0.17 ± 0.2.
Now we turn the axes of the cylinder perpendicular to the axes of
the plank, but keep lying on its side. We start again inclining the plank
and determine the angle β, at which the box starts rolling down. As-
suming that the object is small (as compared to the radius of the box),
the following relationship can bederived: M sinβ = m(sinα−sinβ),
where m is the massofthe object and M —the massofthe empty box.
Using sinα = 60±5
350
and sinβ = 25±3
350
we obtain M/m = 35/25 =
1.4 ± 0.2. From the measurement of the net weight M + m = 10.4g
wefindm = 10.4g/2.4 = (4.3±0.4)g. Notethattheactualmasswas
4.5g.
The mass ratio can be, in principle, determined from the period of
small oscillations, T ≈ 0.4s. Then, if we estimate the moment of iner-
tia ofthesystembox+object as(M +m)r2
, where r is theradiusofthe
cylinder, then Iϕ̈ = −mrgϕ, i.e. ω2
= m
m+M
g
r
. Using r = 16mm
we obtain M+m
m
= g
r
T2
/4π2
= 3.9. This result, however, is rather
approximate, because it is diﬃcult to measure such a short oscillation
period (at the high dissipation rate). Furthermore, the period is taken
to the second power, this explains the unrealistic result (so,it does not
make sense to try to improve the approach by taking account the geo-
metric factorsfor thecalculation of themoent ofinertia ofthe boxetc).
