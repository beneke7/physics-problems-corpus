---
id: nbpho-2005-mechano-electrical-oscillator
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2005-mechano-electrical-oscillator
solution_type: official
source_document: solution-document-nbpho-2005-s
source_pdf: cache/phoxiv/nbpho/2005_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2005_S.pdf."
---

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
