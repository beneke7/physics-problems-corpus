---
id: solution-document-nbpho-2006-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2006_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2006-car, nbpho-2006-drying, nbpho-2006-electric-experiment, nbpho-2006-empty-bag, nbpho-2006-mass-spectrometer, nbpho-2006-optics-experiment, nbpho-2006-photography, nbpho-2006-sucking]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2006_S.pdf."
---

1. Drying
1) Let the number of moles of cold and warm air be
ν1 and ν2; letCV designate the molar heat capaci-
tance at a fixed volume. Then the total change of in-
ternal energy is ∆U = CV [ν1(T − T1) + ν2(T −
T2) = (CV p0/R)(V − V1 − V2) (using the ideal
gaslaw). Internal energychangemustbeequal tothe
work of the external pressure: (CV p0/R)(V − V1 −
V2) = p0(V − V1 − V2), hence V − V1 − V2 (since
CV /R 6= 1).
2) The molar amount of gas (p0/R)(V1/T1 +
V2/T2) = (p0/R)(V1 + V2)/T∗, hence T∗ = (V1 +
V2)/(V1T−1
1 + V2T−1
2 ), i.e. t∗ ≈ 16,5◦
C.
3) The vapor mass ma = ρa(t1)V1 + ρa(t2)V2,
the mass of saturating vapor at the given tempera-
ture mak = ρa(t∗)(V1 + V2). Relative humidity
r = ma/mak, because at the fixed temperatu-
re, the pressure is proportional to the density. So,
r = ρ̃a/ρa(t∗), where the weighted average of the
vapor ρ̃a = [ρa(t1)V1 + ρa(t2)]/(V1 + V2) — this
value can be found from the graph as the coordinate
of the point C: we draw the line at + b, connecting
points A andB,andtakethereading forthe point C
lyingonthelineat∗∗+b ≈ 1,68g/m3
att∗∗ = 17◦
C
(this value divides the interval [t2;t1] in the propor-
tions V1 : V2). The saturating vapor pressure at the
given temperature is found as the coordinate of the
point D: pa(t∗) ≈ 1,38g/m3
. Finally we obtain
r ≈ 1,22 = 122%.
1,0
1,5
2,0
0 5 10 15 20 25
t (0
C)
ρ (g/m3)
A
B
C
D
E
C’
4) In order to find the condensating mass, we write
down heat balance: cpρ0∆t = q[ρ̃a − ρa(t∗ + ∆t)],
where ∆t is the temperature change due to the con-
densation. By designating t∗ + ∆t = τ we can rew-
rite the balance as ρa(τ) = ρ̃a − cpρ0(τ − t∗)/q.
So, we need to find the intersection point E of the
curve ρa(τ) with the line ρ̃a − cpρ0(τ − t∗)/q =
ρ̃a − 0,478g·m−3
K−1
· (τ − t∗) (line C0
E in Fig.).
Using the graph we find ∆ρ ≈ 0,25g/m3
— this is
the length of the line with arrows. So, the condensa-
ting mass∆m = ∆ρ(V1 + V2) ≈ 7,5g.
Thus, when meteorologists tell us that at the
meeting point of cold and hot air, there are heavy
rains, the phenomenon can be explained by this
problem.
2. Photographing
Let us notice that at the lower part of the photo,the-
rearefewbrighter spotsofregular circular shape and
clear edges — unlike all the rest at the smudged(out
of focus) part of the image. This can be only due to
the point sources in that far area. Let the distance
of the linear from the lens be l, and the distance be-
tweenthesensorandthefocus—x. Then,according
totheNewtonformula,x(l−f) = f2
,wheref isthe
focal distance; hence l−f
f
= f
x
. Let the spot diame-
terbeδ. Thenthelensdiameterd = δf
x
= δl−f
f
. Let
the size of the image of the linear be a, and the size
of the linear itself — A. Then A = a l
x+f
. From the
lens formula, 1
x+f
= l−f
fl
, hence A = al−f
f
. Com-
paring with the previous result we obtain d = δA/a,
i.e. the lens diameter equals to the spot diameter,
using the scale of the linear. From the figure, we find
d = 17mm.
3. Sucking
1) Let x be the horizontal axes, and y — the ver-
tical axes. At the liquid surface, the potential energy
of a unit volume is constant (so that the liquid will
not flow towards the lower potential energy). So, the
formula for the height χ(x) of the liquid surface is
given by Πvp = ρmgχ − 1
4πε0
ρeq/r = 0, where
r =
p
x2 + (χ − H)2 is the distance of the given
point from the charge. Let us designate χ0 ≡ χ(0).
From the previous formula we obtain (bearing in
mind that for x = 0 we have r = H − χ0) the result
χ0(χ0 −H)+ 1
4πε0
ρeq
ρmg
= 0. Using thedesignation
1
4πε0
ρeq
ρmg
= A, the result can be writtenas
χ0 =
1
2
(H −
p
H2 − 4A).
2) It is clear that flowing starts at the point x =
0, where the fluid surface is the highest. When
the flowing starts, this surface point [with coordina-
tes (0,χ0)] realizes the potential energy maximum,
when moving along the y-axes towards the charge.
So, the function Π(y) = ρmgy − 1
4πε0
ρeq/(h − y)
has a maximum at y = H0. This gives us two equa-
tions:
ρmgχ0 − 1
4πε0
ρeq/(h − χ0) = 0,
ρmg − 1
4πε0
ρeq/(h − χ0)2
= 0.
Comparing these, we find h = 2χ0 and χ2
0 =
1
4πε0
ρeq/ρmg,hence
h =
p
ρeq/πε0ρmg.
4. Electrical experiment
We start with charging the capacitor (waiting long
enough,toallowequalizing thevoltagesofthesource
and the capacitor, of the order of the discharge time
below). The capacitor will be discharge on the diode
and two resistances (the unknown one r is parallel
to the diode), using the scheme in the figure. We
perform two experiments using for the sequentially
connectedresistorRthebothsuppliedresistorswith
known resistance, R = R1 and R = R2.
r
R
Initial voltage of the capacitor U0 = E; the voltage
droponthediodeisconstant(whileemittinglight)—
exactly as on a voltage source. Therefore, the voltage
on the capacitor approaches that value exponential-
ly:
U − Uc = (E − Uc)e−t/RC
.
Diode stops burning, when all the current I = (U −
Uc)/R goes through the unknown resistor, I =
Uc/r. Thus, at the fading moment (t = τ):
r(E − Uc)e−τ/RC
= RUc.
Rewriting the latter equality for the both experi-
ments,
r(E − Uc)e−τ1/R1C
= R1Uc.
r(E − Uc)e−τ2/R2C
= R2Uc.
Dividing these and taking the logarithm results in
C = (
τ2
R2
−
τ1
R1
)/ln
R1
R2
.
Performing for both cases 3–5 measurements
and finding the average (τ1 ≈ 37s, τ2 ≈ 32,4s), we
find C ≈ 13µF.5. Empty sack
1) The pressure at the floor P = p + σg, hence
σLg = (p + σg)c, from which c = L/( p
σg
+ 1).
2) Here we provide a solution departing from the
recommendations (finding the other solution is left
for the reader). Let the tension of the material at
some contact point with floor P0 be T0. Consider
theenergybalance ofapiece ofmaterial betweenthe
points P and P0 for a tiny virtual displacement δ,
tangential everywhere to the material (thus, the sha-
peofthe materialis preserved). The potentialenergy
change(perunitlength ofthesack)isσδgx(because
thepieceofmaterialoflengthδ willgetfromthefloor
to the height x); the work done equals to (T − T0)δ.
The energy balance yields T = σgx + T0, hence
α = σg.
3)Theforcebalancebetweentheleftandrighthalves
of the sack can be written as T1 + T0 = pa. Bearing
inmindthatT0 = T1−σga,wefindT1 = (p+σg)a
2 .
4) The force balance between the lower and upper
halves of the sack: 2T2 + L1σg = pb, where T2 is
the tension at the widest point, and L1 ≈ L/2 —
is the length of the upper half. The tension T grows
linearly with the height, and the widest point is app-
roximatelyatthehalfheight;hence2T2 ≈ T1+T0 =
pa. Substituting it into the first equation, we obtain
p(b − a) = Lσg/2. Taking into account that the
sack is almost of a circular cross-section, we write
π(b + a) ≈ 2L; hence, we finally obtain ε ≈ πgσ
4p .
6. Car
1) Let us consider the force balance projected to the
horizontal axes. The only force, which could create
a non-zero projection, is the resultant of the friction
and reaction force, applied by the corner of the de-
limiter. Due to the balance, this must be also zero,
i.e. this resultant force is directed vertically, hence
H = d
4
(2 −
√
2) ≈ 15cm.
2) Consider the torque balance with respect to the
point O — the intersection point of the lines of the
resultant force applied to the rear wheel by ground,
and of the gravity force (vertical line through C). At
the equilibrium, the line of the reaction force applied
to the front wheel by the delimiter must go through
the same point. Thus, the intersection point of the
line OP with the wheel gives us the corner of the de-
limiter (P is the center ofthe front wheel). Using the
scale of the figure yields H ≈ 10cm.
3) Consider the torque balance with respect to the
point Q — intersection point of the lines of the
resultant forces applied to the touching points of
the front- and rear wheels with the wall and floor,
respectively. Only the gravity force can contribute to
the net torque; since Q lies leftwards to the center of
mass, this torque rotates car rising its front. So, the
front will start rising.
C
O
P
Q
R
7. Mass-spectrometer
1) The trajectory of a charged particle in the magne-
tic field is circle of radius R = l/
√
2. Lorenz force
is responsible for the acceleration, Bev = Mv2
/R,
hence BeR = p. Substituting p2
= 2MUe =
B2
e2
R2
, we obtain
M = B2
l2
e/4U.
2)Now, the radius can be R±r. Approximate calcu-
lus yields ∆R/R = r
√
2/l ≈ ∆M/2M, hence
∆M ≈ Mr2
√
2/l, i.e.
∆M = B2
lre/
√
2U.
3) Ion leaves the magnetic field at the distance r be-
fore (or after) performing a quarter of the circle. So,
∆ϕ ≈ r/R = r
√
2/l.
4)CertaininitialenergykT implies thattheterminal
energyUe+kT = e(U+kT/e);this isequivalent to
the change of the voltageby δU = kT/e. Using app-
roximate calculus and the result of the first question,
we obtain: δM = dM
dU
kT/e,i.e.
δM = B2
l2
kT/4U2
.
8. Optical experiment
1) Looking at the bottle from a distance reveals that
thecentralpartofthescaleisnotreversed,unlikethe
image at the extreme edge of the bottle. The turning
point corresponds toanone endofthe visible part of
the glued scale (the other end-point is symmetrical-
ly situated). Looking from smaller distances results
in large visible part (Gray line c in Fig.), than in the
case of very large distance (black line d). In the lat-
tercase,theray(in Fig, a) is refractedattheentrance
tothebottlebyacertainangle;whenobserving from
smallerdistances,oneray(binFig)isrefractedbythe
sameangle. Thesetworayscoincideafterrotationby
an angle β around the center of the bottle. So, the
part of the scale, given by the gray line in Fig, is lon-
ger than the black line at least by 2Rβ. We should
perform the measurements with as large L as pos-
sible; the result of the measurement is to be adjusted
by subtracting 2Rβ, where β = arcsin(l/2L).
a
b
L l
β
β
c d
Alternatively, wecan measurec bydifferent values of
L, and present the results on graph. It makes sense
to use 1/L as the scale forthe horizontalaxes. Then,
L = ∞ represents the origin, towhich the curve can
be easily extrapolated).
The measurements yield d ≈ 22mm (by R =
31mm).
2) Comparing the ray geometry for the previous
problem (in connection to the piece scale c), and the
raygeometryintherainbow,itturnsoutthatthegeo-
metryis actually identical, with d
2
= Rα
2
,seeFig. So,
α = d/R. Using the data from the previous part,
α ≈ 41◦
.
d
α/2 α/2
