---
id: inpho-2023-a4
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2023-a4
solution_type: official
source_document: solution-document-inpho-2023-s
source_pdf: cache/phoxiv/inpho/2023_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2023_S.pdf."
---

4. Electrostatic TikTok
Consider a fixed infinite vertical thin rod (shown by the red color in the figure below) of linear
charge density λ along the z-axis at the origin (see figure below). A uniformly charged ring of total
charge Q, mass M, and radius a is placed with its center at the origin in the x-y plane. Point P
is an arbitrary point on the ring. The projection of point P on x-y plane makes an angle θ with
respect to the x-axis in the anticlockwise direction as seen from the top.
The ring is now given an initial angular velocity ω0 about the x-axis. We define the angle α which
the plane of the ring makes with the x-y plane. This is illustrated by drawing line segment AB in
the plane of the ring. Initially α = 0. Ignore gravity.
P
α
θ
A
B
z
x
y
You may find the following differentiation useful
D =
d
dθ
[tan−1
(q tanθ)] =
1
1 + (q tanθ)2
[q(sec2
θ)] (4.1)
(a) [1 marks] State an expression for the electric field (~ E0) due to the infinite rod at a point on the
ring when α=0 in terms of x,y and θ, and related quantities.
Solution: The electric field on the ring due to the infinite rod is given by
~ E0 =
λ(xx̂ + yŷ)
2π 0(x2 + y2)
(4.2)
Since the rod is infinite, the electric field will not depend on z.
~ E0 =
λ(acosθx̂ + asinθŷ)
2π 0(a2 cos2 θ + a2 sin2
θ)
(4.3)
The above expression simplifies to
~ E0 =
λ(cosθx̂ + sinθŷ)
2π 0a
(4.4)
(b) [2 marks] At some instant the ring makes an angle α. Derive an expression for the electric field
~ E due to the infinite rod at a point on the ring in terms of θ, and α.
Solution: The new coordinates of the ring are
x =
acosθ
p
1 + sin2
θtan2 α
, y =
asinθ
p
1 + sin2
θtan2 α
and z =
asinθtanα
p
1 + sin2
θtan2 α
.
~ E =
λ(xx̂ + yŷ)
2π 0(x2 + y2)
(4.5)
=
λ
2π 0a
q
(1 + sin2
θtan2 α)(cosθx̂ + sinθŷ) (4.6)
H B C 2 3
Page 7 INPhO 2023 Questions
(c) [1 marks] Find the net force ~ F acting on the ring.
Solution: Charge dQ in elementary length is
Q
2π cosα
1
(1 + sin2
θtan2 α)
dθ. Force on small
element ds is
d~ F = ~ EdQ =
λ
2π 0a
q
(1 + sin2
θtan2 α)(cosθx̂ + sinθŷ)
Q
2π cosα
1
(1 + sin2
θtan2 α)
dθ (4.7)
which simplifies to
d~ F =
λQ
4π2 0acosα
cosθx̂ + sinθŷ
p
(1 + sin2
θtan2 α)
(4.8)
where C = λQ/4π2 oa. Consider
dFx =
C
cosα
cosθ
p
(1 + sin2
θtan2 α)
dθ (4.9)
Fx =
C
cosα
Z π
−π
cosθ
p
(1 + sin2
θtan2 α)
dθ (4.10)
(4.11)
The integrand is an even function, hence
Fx =
2C
cosα
Z π
0
cosθ
p
(1 + sin2
θtan2 α)
dθ (4.12)
(4.13)
using
R2a
0 f(x)dx =
Ra
0 f(x)dx +
Ra
0 f(2a − x)dx
Fx =
2C
cosα
"Z π/2
0
cosθ
(1 + sin2
θtan2 α)
+
Z π/2
0
cos(π − θ)
(1 + sin2
(π − θ)tan2 α)
#
= 0 (4.14)
Similarly
Fy = 0 (4.15)
The total force acting on the ring is zero. Answers based on symmetric arguments will be also
given credit.
(d) [5 marks] Find the net torque ~ τ acting on the ring in terms of α and the constants only.
Qualitatively plot torque as a function of α.
Solution:
dτ = ~ r × d~ F(θ) (4.16)
Consider
dτz = xdFy − ydFx (4.17)
= 0 (4.18)
=⇒ τz = 0 (4.19)
τy =
Z π
−π
zdFxτy =
aC tanα
2cosα
Z π
−π
sin2θ
(1 + sin2
θtan2 α)
(4.20)
Integrand is odd function, hence
τy = 0 (4.21)
H B C 2 3
Page 8 INPhO 2023 Questions Last four digits of Roll No.:
τx =
Z π
−π
−zdFy (4.22)
τx = −
Z π
−π
asinθtanα
p
1 + sin2
θtan2 α
C sinθ
cosα(1 + sin2
θtan2 θ)
(4.23)
which simplifies to
τx = − aC
Z π
−π
tan2 θsinα
(cos2 α + tan2 θ)
dθ (4.24)
The integrand is an even function, hence
τx = −2aC sinα
Z π
0
tan2 θ
(cos2 α + tan2 θ)
dθ (4.25)
using
R2a
0 f(x)dx =
Ra
0 f(x)dx +
Ra
0 f(2a − x)dx
τx = −4aC sinα
Z π/2
0
tan2 θ
(cos2 α + tan2 θ)
dθ (4.26)
τx = −4aC sinαsec2
α
Z π/2
0
tan2 θ
(1 + sec2 αtan2 θ)
dθ (4.27)
Substituting secα = u, in above equation, we get
τx = −4aC sinαu2
Z π/2
0
tan2 θ
(1 + u2 tan2 θ)
dθ (4.28)
It is given that
D =
d
dθ
(tan−1
(utanθ)) =
usec2 θ
1 + u2 tan2 θ
(4.29)
=
u(1 + tan2 θ)
1 + u2 tan2 θ
(4.30)
D =
u
1 + u2 tan2 θ
+
utan2 θ
1 + u2 tan2 θ
+ u − u
1 + u2 tan2 θ
1 + u2 tan2 θ
(4.31)
Solving above equation, we get
tan2 θ
1 + u2 tan2 θ
=
D
u − u3
−
1
1 − u2
(4.32)
Hence Substituting above equation in Eq.(4.28) , we get
τx = −4Casinαu2
Z π/2
0

D
u − u3
−
1
1 − u2

dθ (4.33)
τx = −4Casinαu2
Z π/2
0

D
u − u3
−
1
1 − u2

dθ (4.34)
Substituting value of D, we get
τx = −4Casinαu2
Z π/2
0
"
d
dθ(tan−1(utanθ))
u − u3
−
1
1 − u2
#
dθ (4.35)
τx = −4Casinαu2

tan−1(utanθ)
u − u3
−
θ
1 − u2
 π/2
0
(4.36)
(4.37)
H B C 2 3
Page 9 INPhO 2023 Questions
Applying limits and solving further, we get
τx = −
λQ
2π 0
tan(α/2) (4.38)
Working of τy,τz is not required.
−π
2 −π
3 −π
6
0 π
6
π
3
π
2
α
τ
-1
0
1
(e) [2 marks] Let the ring is in equilibrium with respect to α = 0. Derive an expression for the time
period T of small oscillations of the ring in terms of λ, and Q. Take λ = 0.1µC/m, Q = 2.0µC,
M = 50.0g, radius a = 5.0cm, and ω0 = 1.0rad/s. Calculate T.
Solution: Under small angle approximation of α, τx becomes
τx =
−λQα
4π 0
(4.39)
I
d2α
dt2
=
−λQα
4π 0
(4.40)
Ma2
2
d2α
dt2
=
−λQα
4π 0
(4.41)
d2α
dt2
= −
2λQ
4Ma2π 0
α (4.42)
This is a differential equation of SHM, hence
T2
=
4π2
2λQ
4Ma2π 0
(4.43)
=⇒ T = 2πa
s
2Mπ 0
Qλ
(4.44)
T = 1.17s (4.45)
This can be used as an electrostatic clock!
(f) [2.5 marks] Find an expression for the potential energy U of the ring in terms of α. Qualitatively
plot U as a function of α. Take the zero of potential energy to be at α = 0.
H B C 2 3
Page 10 INPhO 2023 Questions Last four digits of Roll No.:
Solution: We know that τ = −
dU
dα
=⇒ U = −
Z
τdα (4.46)
=
λQ
2π 0
Z
tan(α/2)dα (4.47)
U = −
λQ
2π 0
2log(cos(α/2)) + c (4.48)
where c is the constant of integration. At α = 0, U = 0, which implies that c = 0.
=⇒ U(α) = −
λQ
π 0
log(cos(α/2)) (4.49)
−π
2 −π
6 −π
3
0 π
6
π
3
π
2
α
U(α)
(g) [2.5 marks] Obtain the expression of maximum value of α (αmax) in terms of ω0. Calculate
αmax.
Solution: Consider
I
d2α
dt2
= τx (4.50)
Ma2
2
d2α
dt2
=
−λQ
2π 0
tan(α/2) (4.51)
Multiplying both sides by dα
dt
Ma2
2
d2α
dt2
dα
dt
=
−λQ
2π 0
tan(α/2)
dα
dt
(4.52)
Integrating on both sides
Ma2
4

dα
dt
 2
=
λQ
π 0
log(cos(α/2)) + c0
(4.53)

dα
dt
 2
=
32π2
T2
log(cos(α/2)) + c0
(4.54)
where c0 is the constant of integration. At t = 0, dα
dt = ω0, which implies that c = ω2
0.

dα
dt
 2
=
32π2
T2
log(cos(α/2)) + ω2
0 (4.55)
dα
dt
=
r
32π2
T2
log(cos(α/2)) + ω2
0 (4.56)
H B C 2 3
Page 11 INPhO 2023 Questions
For α = αmax, dα
at = 0, hence solving above equation, we get
αmax = 2

cos−1

exp(−
ω2
0T2
32π2
)

(4.57)
αmax = 10.66◦
(4.58)
H B C 2 3
Page 12 INPhO 2023 Questions Last four digits of Roll No.:
