---
id: solution-document-apho-2009-e2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2009/E2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2009/E2_S.pdf."
---

Experimental competition                                                                        Solution Problem 2

28 April 2009                                                                                              Page 1 of 3
-------------------------------------------------------------------------------------------------------------------------

                             Problem2: Oscillation of Water-Filled Vessel


Section I

i) m1 = ρπ ⎡ R 2 − ( R − t ) ⎤ L = ρπ ( 2 Rt − t 2 ) L
                                  2
                                                                                          ………………….. (i)
           ⎣                 ⎦
ii) m2 = ρπ ( 0.6 cm ) R 2                                                                ………………….. (ii)

iii) m3 = π ( R − t ) L
                         2
                                                                                          ………………….. (iii)

iv) M     = m1 + 2m2 + m3                                                                 ………………….. (iv)

v) Water, as an ideal fluid, does not take part in the oscillatory motion of the water-filled vessel.
We therefore shall not include contribution of water in the expressions for the moments of inertia.
                              1 ⎡ 2                    ⎡1       ⎤
                        =       m1 R + ( R − t ) ⎤ + 2 ⎢ m2 R 2 ⎥
                                                2
                  Iy                                                                      ………………….. (v)
                              2   ⎣               ⎦    ⎣2       ⎦
A = 35.6 cm, g = 978 cm s −2 , a = R = 2.5 cm,

ρ = 2.70 g cm −3 , h = 9.2 cm, L = 9.2 − 1.2 = 8.0 cm
         m1 = 339.3t − 67.86t 2 g,

         m2 = 31.8 g,

         m3 = 157.1 − 125.7t + 25.13t 2 g,

         M     = 220.7 + 213.6t − 42.73t 2 g

         I y = 198.8 + 2121t − 1273t 2 + 339.3t 3 − 33.93t 4


Section II
a)

                                           A Iy
                             Ty   = 2π      ⋅                                             ………………….. (vi)
                                           g Ma 2
Time for 50 oscillations is 43.3 s, hence
                  Ty = 0.866 s ± 0.004 s

Substituting these values into equation (vi), we get
                  t 4 −10t 3 + 33.42t 2 − 41.97t + 15.36 = 0                              ………………….. (vii)
Experimental competition                                                                        Solution Problem 2

28 April 2009                                                                                              Page 2 of 3
-------------------------------------------------------------------------------------------------------------------------
The solution of (vii), by numerical iteration, is t = 0.62 cm ± 0.02 cm
(The error can be estimated from a repeat of the procedure or a differential equation for dT and dt )
Hence, we get
         m1 = 184 ± 5 g,

         m2 = 31.8 ± 0.2 g,

         m3 = 89 ± 2 g,

         M = 337 ± 6 g .


b)
                                           A Ix
                           Tx    = 2π       ⋅                                             ………………….. (viii)
                                           g Ma 2
                     h 9.2
A = 33.6 cm, a =       =   = 4.6 cm
                     2   2
Time for 50 oscillations is 38.0 s ± 0.2 s, hence
         Tx   = 0.760 s ± 0.004 s

                             A Ix                         h 9.2
And from Tx       = 2π        ⋅   2
                                    where A = 33.6 cm, a = =    = 4.6 cm ,
                             g Ma                         2  2

g = 978 cm s −2 , M = 337 g , we get

         I xExp = 3036 g cm 2 ± 94 g cm 2

Also     I xTheo = 3261 g cm 2 ± 68 g cm 2




c)
         ΔI x = I xTheo − I xExp = 225 g cm 2

The experimental value I xExp is smaller than I xTheo by 225 g cm2.
This difference is probably significant and it is due to low viscosity of water. The mass of water in
the middle section does not take part in the oscillatory motion of the vessel.
Experimental competition                                                                        Solution Problem 2

28 April 2009                                                                                              Page 3 of 3
-------------------------------------------------------------------------------------------------------------------------
ΔI x can be estimated to be due to a stationary cylindrical portion of water in the middle.

                                      ⎛ L 2 ( R − t )2 ⎞
         ΔI x = π ( R − t ) 2 Lwater ⎜⎜ water +        ⎟
                                                       ⎟
                                      ⎝  12     4      ⎠
         Lwater ≈ 5.7 cm

         This corresponds to the water mass of ≈ 63.8 g
         The percentage of the water that takes part in the oscillation is ≈ 28.5%




                                            *********************
