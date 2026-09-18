---
id: usapho-2020-b1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2020-b1
solution_type: official
source_document: solution-document-usapho-2020-s
source_pdf: cache/phoxiv/usapho/2020_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2020_S.pdf."
---

Question B1
String Cheese
a. When a faucet is turned on, a stream of water flows down with initial speed v0 at the spout.
For this problem, we define y to be the vertical coordinate with its positive direction pointing
up.
Assuming the water speed is only affected by gravity as the water falls, find the speed of water
v(y) at height y. Define the zero of y such that the equation for v2 has only one term and find
y0, the height of the spout.
Solution
We can use energy conservation to answer this question. For a bit of water with mass m,
the total energy E is the sum of the kinetic and gravitational potential energies,
E =
1
2
mv2
+ mgy. (B1-1)
(With this sign convention, g ≈ 10 m/s2 is positive. As y decreases, so does the potential
energy.)
As the bit of water falls, its energy remains constant, and is equal to the initial value of
E =
1
2
mv2
0 + mgy0. (B1-2)
Equating eliminating E from equations B1-1 and B1-2, we have
1
2
mv2
+ mgy =
1
2
mv2
0 + mgy0,
and solving for v, we get
v =
q
v2
0 + 2g(y0 − y)
The equation for v2 has three terms, but we were asked to choose the zero of y such that
there is only one. Evidently, two of the terms must cancel, and these must be the two
constant terms, since the final term varies with y.
That means we need
v2
0 + 2gy0 = 0.
Solving for y0, the vertical position of the spout is
y0 =
−v2
0
2g
.
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part B 10
With this choice of the zero of y, the equation for v simplifies to
v =
p
−2gy . (B1-3)
We note that the result of this equation is real because y < 0 at the spout, and decreases
as the water falls, so this equation shows that v is real and increases as the water falls.
b. Assume that the stream of water falling from the faucet is cylindrically symmetric about a
vertical axis through the center of the stream. Also assume that the volume of water per unit
time exiting the spout is constant, and that the shape of the stream of water is constant over
time.
In this case, the radius r of the stream of water is a function of vertical position y. Let the
radius at the faucet be r0. Using your result from part (a), find r(y).
If r(y) is not constant, it implies that the water has some radial velocity during its fall, in
contradiction to our assumptions in part (a) that the motion is purely vertical. You may assume
throughout the problem that any such radial velocity is negligibly small.
Solution
The same volume of water must fall through any horizontal cross-section of the stream each
second because water doesn’t disappear during its fall, and its density if constant. That
volume per unit time Q is the cross-sectional area of the stream multiplied by the speed of
the water in the vertical direction. As an equation,
Q = vπr2
. (B1-4)
Q is the same at all y, and is equal to its initial value of
Q = v0πr2
0. (B1-5)
Eliminating Q from B1-4 and B1-5 and solving for r gives
r = r0
r
v0
v
.
Plugging in our equation B1-3 for v,
r = r0
4
s
v2
0
−2gy
.
c. The water-air interface has some surface tension, σ. The effect of surface tension is to change
the pressure in the stream according to the Young-Laplace equation,
∆P = σ

1
r
+
1
R

,
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part B 11
where ∆P is the difference in pressure between the stream and the atmosphere and R is the
radius of curvature of the vertical profile of the stream, visualized below. (R < 0 for the stream
of water; the radius of curvature would be positive only if the stream profile curved inwards.)
|R|
For this part of the problem, we assume that |R|
 |r|, so that the curvature of the vertical
profile of the stream can be ignored. Also assume that water is incompressible.
Accounting for the pressure in the stream, find a new equation relating for r(y) in terms of
σ,r0,v0, and ρ, the density of water. You do not need to solve the equation for r.
Solution
Our conservation of energy approach from part (b) needs to be modified to account for the
work done against pressure. As we look further down in the stream, the radius is smaller.
This means the pressure is higher there, and the water is slowed compared to when we
assumed only gravity acted on the water.
The result of accounting for changes in pressure in a flow where no energy is dissipated is
the Bernoulli equation,
1
2
ρv2
+ ρgy + P =
1
2
ρv2
0 + ρgy0 + P0
where P0 is the pressure in the stream at the spout.
Using the Young-Laplace equation to replace P and P0, we have
1
2
ρv2
+ ρgy +
σ
r
=
1
2
ρv2
0 + ρgy0 +
σ
r0
.
If we substitute in y0 = −
v2
0
2g
and v = v0
r2
0
r2
, this becomes
1
2
ρv2
0
r4
0
r4
+ ρgy +
σ
r
=
1
2
ρv2
0 − ρg
v2
0
2g
+
σ
r0
.
This may be simplified to
1
2
ρv2
0
r4
0
r4
+ ρgy = σ

1
r0
−
1
r

.
d. After falling for some distance, the water stream usually breaks into smaller droplets. This
occurs because small random perturbations to the shape of the stream grow over time, eventually
breaking the stream into apart.
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part B 12
For the rest of this problem we ignore the change in the radius of the stream due to changing
speed of the water, as considered earlier. Instead, we examine small random variations in the
radius of the stream.
Random variations can be broken down into a sum of sinusoidal variations in stream radius,
each with a different wavenumber k. We can analyze these different sinusoidal variations inde-
pendently.
Consider a stream of water whose radius obeys
r(y) = r0 + Acos(ky),
where A
 r0 is the perturbation amplitude. To analyze such a stream, it is sufficient to consider
only the thickest and thinnest parts of the stream.
Accounting for both sources of curvature, find a condition on r0 and k such that the size of
perturbations increases with time.
r(y) |R(y)|
Solution
If the size of the perturbation increases with time, water must be flowing from the thin parts
of the stream to the thick parts. For that to happen, the pressure needs to be higher in the
thin parts of the stream than in the thick parts of the stream so that the pressure gradient
will force water towards the thick parts, eventually breaking the stream into droplets.
We consider a small patch with side lengths h on the surface of the stream at the thinnest
part of the stream. The pressure is
∆Pthin = σ

1
rthin
+
1
Rthin

.
And at the thickest part of the stream,
∆Pthick = σ

1
rthick
+
1
Rthick

.
We are looking for the wavenumbers such that
∆Pthin > ∆Pthick.
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part B 13
Using the Young-Laplace equation, this becomes
σ

1
rthin
+
1
Rthin

> σ

1
rthick
+
1
Rthick

.
Dropping the common factor σ,

1
rthin
+
1
Rthin

>

1
rthick
+
1
Rthick

.
To simplify this further, we will need to find r and R in terms of A and k, the variables
given in the problem statement.
r is the thickness of the stream, which from the equation given, varies sinusoidally. So
rthin = r0 − A.
rthick = r0 + A.
We are going to need
1
r
to use in the Young Laplace equation, so we make the approximations
1
rthin
≈
1
r0
+
A
r2
0
.
1
rthick
≈
1
r0
−
A
r2
0
.
(To find these, recall
1
1 −
≈ 1 +   for small  .)
The inequality now becomes
1
r0
+
A
r2
0
+
1
Rthin
>
1
r0
−
A
r2
0
+
1
Rthick
.
This simplifies to
2A
r2
0
>
1
Rthick
−
1
Rthin
.
Next we need to determine the radius of curvature R of the sinusoidal as a function of k
and A.
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part B 14
To do this, we compare the sinusoidal function and a circle at small deviations from the
thickest part of the stream.
Recall that, for small θ,
cosθ ≈ 1 −
1
2
θ2
,
which means that for small x,
ysinusoidal = Acos(kx) ≈ A

1 −
1
2
k2
x2

.
Next we consider a circle of radius R. If a particle moves along such a circle at speed v, its
acceleration is v2/R. This means that if the particle moves forward for a short time t, it
moves forward a distance vt and falls a distance
1
2
v2
R
t2. If we set vt = x, then the y position
of the particle is given by
ycircle ≈ y0 −
1
2
x2
R
.
Comparing ycircle and ysinusoidal, they give the same motion if Ak2 =
1
R
.
Then
1
Rthin
= −Ak2
.
1
Rthick
= Ak2
.
Putting these into the inequality,
2A
r2
0
> 2Ak2
.
This simplifies to
k <
1
r0
.
So the perturbations will grow as long as they have a wavenumber greater than one over
the radius, or equivalently when the wavelength of the perturbation is longer than the
circumference of the stream.
This result was discovered experimentally by Plateau and derived theoretically by Rayleigh.
The breaking up of a stream into droplets is called the Plateau-Rayleigh instability.
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part B 15
