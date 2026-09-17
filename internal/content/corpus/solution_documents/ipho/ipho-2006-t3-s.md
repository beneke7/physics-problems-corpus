---
id: solution-document-ipho-2006-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2006/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2006-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2006/T3_S.pdf."
---

SOLUTIONS to Theory Question 3
Digital Camera Two factors limit the resolution of the camera as a pho-
tographic tool: the diffraction by the aperture and the pixel size. For diffrac-
tion, the inherent angular resolution θR is the ratio of the wavelength λ of
the light and the aperture D of the camera,
                                           λ
                                 θR = 1.22   ,
                                          D
where the standard factor of 1.22 reflects the circular shape of the aperture.
When taking a picture, the object is generally sufficiently far away from the
photographer for the image to form in the focal plane of the camera where
the CCD chip should thus be placed. The Rayleigh diffraction criterion then
states that two image points can be resolved if they are separated by more
than


                               ∆x = f θR = 1.22λ F ] ,
3.1
       which gives
                                   ∆x = 1.22 µm

if we choose the largest possible aperture (or smallest value F ] = 2) and
assume λ = 500 nm for the typical wavelength of daylight
    The digital resolution is given by the distance ` between the center of two
neighboring pixels. For our 5 Mpix camera this distance is roughly
                                L
                            `= q    = 15.65 µm .
                                 Np
Ideally we should match the optical and the digital resolution so that neither
aspect is overspecified. Taking the given optical resolution in the expression
for the digital resolution, we obtain

                                        2
                                L
                                  
3.2                          N=              ≈ 823 Mpix .
                                ∆x

   Now looking for the unknown optimal aperture, we note that we should
have ` ≥ ∆x, that is: F ] ≤ F0 with
                                             s
                              L       N
                     F0 =      √   =2    = 14.34 .
                          1.22λ N0    N0

                                       1
Since this F ] value is not available, we choose the nearest value that has a
higher optical resolution,


3.3                                  F0 = 11 .

   When looking at a picture at distance z from the eye, the (small) sub-
tended angle between two neighboring dots is φ = `/z where, as above, ` is
the distance between neighboring dots. Accordingly,


                    `   2.54 × 10−2 /300 dpi
3.4            z=     =                      = 14.55 cm ≈ 15 cm .
                    φ     5.82 × 10−4 rad


Hard-boiled egg All of the egg has to reach coagulation temperature.
This means that the increase in temperature is

                  ∆T = Tc − T0 = 65 ◦ C − 4 ◦ C = 61 ◦ C .

Thus the minimum amount of energy that we need to get into the egg such
that all of it has coagulated is given by U = µV C∆T where V = 4πR3 /3 is
the egg volume. We thus find


3.5                           4πR3
                       U =µ        C(Tc − T0 ) = 16768 J .
                                3

The simplified equation for heat flow then allows us to calculate how much
energy has flown into the egg through the surface per unit time. To get an
approximate value for the time we assume that the center of the egg is at the
initial temperature T = 4 ◦ C. The typical length scale is ∆r = R, and the
temperature difference associated with it is ∆T = T1 − T0 where T1 = 100 ◦ C
(boiling water). We thus get


3.6                     J = κ(T1 − T0 )/R = 2458 W m−2 .

Heat is transferred from the boiling water to the egg through the surface of
the egg. This gives



                                     2
3.7                    P = 4πR2 J = 4πκR(T1 − T0 ) ≈ 19.3 W

for the amount of energy transferred to the egg per unit time. From this we
get an estimate for the time τ required for the necessary amount of heat to
flow into the egg all the way to the center:

                    U   µCR2 Tc − T0   16768
3.8            τ=     =              =       = 869 s ≈ 14.5 min .
                    P    3κ T1 − T0     19.3


Lightning The total charge Q is just the area under the curve of the
figure. Because of the triangular shape, we immediately get

                                          I0 τ
3.9                                  Q=        = 5C.
                                           2

The average current is

                                              I0
3.10                           I = Q/τ =         = 50 kA ,
                                              2

simply half the maximal value.
    Since the bottom of the cloud gets negatively charged and the ground
positively charged, the situation is essentially that of a giant parallel-plate ca-
pacitor. The amount of energy stored just before lightning occurs is QE0 h/2
where E0 h is the voltage difference between the bottom of the cloud and the
ground, and lightning releases this energy. Altogether we thus get for one
lightning the energy QE0 h/2 = 7.5 × 108 J. It follows that you could light
up the 100 W bulb for the duration

                              32 × 106    7.5 × 108 J
3.11                     t=             ×             ≈ 10 h .
                              6.5 × 109     100 W


Capillary Vessels        Considering all capillaries, one has
                                    ∆p
                           Rall =      = 107 Pa m−3 s .
                                    D
                                          3
All capillaries are assumed to be connected in parallel. The analogy between
Poiseuille’s and Ohm’s laws then gives the hydraulic resistance R of one
capillary as
                                    1      N
                                        =     .
                                  Rall     R
We thus get
                                          R
                                   N=
                                         Rall
for the number of capillary vessels in the human body. Now calculate R using
Poiseuille’s law,
                           8ηL
                       R=       ≈ 4.5 × 1016 kg m−4 s−1 ,
                           πr4
and arrive at


3.12                          4.5 × 1016
                           N≈       7
                                         = 4.5 × 109 .
                                  10

The volume flow is D = Sall v where Sall = N πr2 is the total cross-sectional
area associated with all capillary vessels. We then get


                               D       r2 ∆p
3.13                     v=        2
                                     =       = 0.44 mm s−1 ,
                              N πr      8ηL

where the second expression is found by alternatively considering one capil-
lary vessel by itself.

Skyscraper When the slab is at height z above the ground, the air in
the slab has pressure p(z) and temperature T (z) and the slab has volume
V (z) = Ah(z) where A is the cross-sectional area and h(z) is the thickness
of the slab. At any given height z, we combine the ideal gas law

          pV = N kT      (N is the number of molecules in the slab)

with the adiabatic law

                      pV γ = const or (pV )γ ∝ pγ−1

                                                                       dp   dT
to conclude that pγ−1 ∝ T γ . Upon differentiation this gives (γ −1)      =γ ,
                                                                       p    T
so that

                                       4
                                dT            dp
3.14                               = (1 − 1/γ) .
                                T             p

Since the slab is not accelerated, the weight must be balanced by the force
that results from the difference in pressure at the top and bottom of the slab.
Taking downward forces as positive, we have the net force
                                                 pV      V dp
             0 = N mg + A[p(z + h) − p(z)] =        mg +      h,
                                                 kT      h dz
          dp    mg p
so that      =−      or
          dz    k T

                                           mg p
3.15                              dp = −        dz .
                                           k T

Taken together, the two expressions say that
                                              mg
                           dT = −(1 − 1/γ)       dz
                                              k
and therefore we have
                                                  mgH
                        Ttop = Tbot − (1 − 1/γ)
                                                   k
for a building of height H, which gives


3.16                               Ttop = 20.6 ◦ C

for H = 1 km and Tbot = 30 ◦ C.




                                      5
