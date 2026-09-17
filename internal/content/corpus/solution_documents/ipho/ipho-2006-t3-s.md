---
id: solution-document-ipho-2006-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2006/T3_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2006-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2006/T3_S.pdf."
---

SOLUTIONS to Theory Question 3
Digital Camera Two factors limit the resolution of the camera as a pho-
tographic tool: the diffraction by the aperture and the pixel size. For diffrac-
tion, the inherent angular resolution θR is the ratio of the wavelength λ of
the light and the aperture D of the camera,
θR = 1.22
λ
D
,
where the standard factor of 1.22 reflects the circular shape of the aperture.
When taking a picture, the object is generally sufficiently far away from the
photographer for the image to form in the focal plane of the camera where
the CCD chip should thus be placed. The Rayleigh diffraction criterion then
states that two image points can be resolved if they are separated by more
than
3.1
∆x = fθR = 1.22λF],
which gives
∆x = 1.22 µm
if we choose the largest possible aperture (or smallest value F] = 2) and
assume λ = 500nm for the typical wavelength of daylight
The digital resolution is given by the distance ` between the center of two
neighboring pixels. For our 5Mpix camera this distance is roughly
` =
L
q
Np
= 15.65µm.
Ideally we should match the optical and the digital resolution so that neither
aspect is overspecified. Taking the given optical resolution in the expression
for the digital resolution, we obtain
3.2 N =

L
∆x
2
≈ 823 Mpix.
Now looking for the unknown optimal aperture, we note that we should
have ` ≥ ∆x, that is: F] ≤ F0 with
F0 =
L
1.22λ
√
N0
= 2
s
N
N0
= 14.34.
1Since this F] value is not available, we choose the nearest value that has a
higher optical resolution,
3.3 F0 = 11.
When looking at a picture at distance z from the eye, the (small) sub-
tended angle between two neighboring dots is φ = `/z where, as above, ` is
the distance between neighboring dots. Accordingly,
3.4 z =
`
φ
=
2.54 × 10−2
/300dpi
5.82 × 10−4 rad
= 14.55cm ≈ 15cm.
Hard-boiled egg All of the egg has to reach coagulation temperature.
This means that the increase in temperature is
∆T = Tc − T0 = 65◦
C − 4◦
C = 61◦
C.
Thus the minimum amount of energy that we need to get into the egg such
that all of it has coagulated is given by U = µV C∆T where V = 4πR3
/3 is
the egg volume. We thus find
3.5 U = µ
4πR3
3
C(Tc − T0) = 16768 J.
The simplified equation for heat flow then allows us to calculate how much
energy has flown into the egg through the surface per unit time. To get an
approximate value for the time we assume that the center of the egg is at the
initial temperature T = 4◦
C. The typical length scale is ∆r = R, and the
temperature difference associated with it is ∆T = T1 −T0 where T1 = 100◦
C
(boiling water). We thus get
3.6 J = κ(T1 − T0)/R = 2458Wm−2
.
Heat is transferred from the boiling water to the egg through the surface of
the egg. This gives
23.7 P = 4πR2
J = 4πκR(T1 − T0) ≈ 19.3W
for the amount of energy transferred to the egg per unit time. From this we
get an estimate for the time τ required for the necessary amount of heat to
flow into the egg all the way to the center:
3.8 τ =
U
P
=
µCR2
3κ
Tc − T0
T1 − T0
=
16768
19.3
= 869 s ≈ 14.5min.
Lightning The total charge Q is just the area under the curve of the
figure. Because of the triangular shape, we immediately get
3.9 Q =
I0τ
2
= 5C.
The average current is
3.10 I = Q/τ =
I0
2
= 50kA,
simply half the maximal value.
Since the bottom of the cloud gets negatively charged and the ground
positively charged, the situation is essentially that of a giant parallel-plate ca-
pacitor. The amount of energy stored just before lightning occurs is QE0h/2
where E0h is the voltage difference between the bottom of the cloud and the
ground, and lightning releases this energy. Altogether we thus get for one
lightning the energy QE0h/2 = 7.5 × 108
J. It follows that you could light
up the 100W bulb for the duration
3.11 t =
32 × 106
6.5 × 109
×
7.5 × 108
J
100W
≈ 10h.
Capillary Vessels Considering all capillaries, one has
Rall =
∆p
D
= 107
Pam−3
s.
3All capillaries are assumed to be connected in parallel. The analogy between
Poiseuille’s and Ohm’s laws then gives the hydraulic resistance R of one
capillary as
1
Rall
=
N
R
.
We thus get
N =
R
Rall
for the number of capillary vessels in the human body. Now calculate R using
Poiseuille’s law,
R =
8ηL
πr4
≈ 4.5 × 1016
kgm−4
s−1
,
and arrive at
3.12 N ≈
4.5 × 1016
107
= 4.5 × 109
.
The volume flow is D = Sallv where Sall = Nπr2
is the total cross-sectional
area associated with all capillary vessels. We then get
3.13 v =
D
Nπr2
=
r2
∆p
8ηL
= 0.44mms−1
,
where the second expression is found by alternatively considering one capil-
lary vessel by itself.
Skyscraper When the slab is at height z above the ground, the air in
the slab has pressure p(z) and temperature T(z) and the slab has volume
V (z) = Ah(z) where A is the cross-sectional area and h(z) is the thickness
of the slab. At any given height z, we combine the ideal gas law
pV = NkT (N is the number of molecules in the slab)
with the adiabatic law
pV γ
= const or (pV )γ
∝ pγ−1
to conclude that pγ−1
∝ Tγ
. Upon differentiation this gives (γ−1)
dp
p
= γ
dT
T
,
so that
43.14
dT
T
= (1 − 1/γ)
dp
p
.
Since the slab is not accelerated, the weight must be balanced by the force
that results from the difference in pressure at the top and bottom of the slab.
Taking downward forces as positive, we have the net force
0 = Nmg + A[p(z + h) − p(z)] =
pV
kT
mg +
V
h
dp
dz
h,
so that
dp
dz
= −
mg
k
p
T
or
3.15 dp = −
mg
k
p
T
dz .
Taken together, the two expressions say that
dT = −(1 − 1/γ)
mg
k
dz
and therefore we have
Ttop = Tbot − (1 − 1/γ)
mgH
k
for a building of height H, which gives
3.16 Ttop = 20.6◦
C
for H = 1km and Tbot = 30◦
C.
5
