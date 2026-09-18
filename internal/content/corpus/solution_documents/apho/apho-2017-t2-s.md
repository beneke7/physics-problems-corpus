---
id: solution-document-apho-2017-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2017/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2017-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2017/T2_S.pdf."
---

Evolution of Supermassive Bla k Holes Binary
                                Solution
                                  A. Dynami al Fri tion

A1. The de e tion angle is de ned from: tan α ≈ α = ppxy , assuming that α ≪ 1. One an  nd
py = Fy dt, and a ording to Newton's gravity law
    R

                                                GMm
                                       Fy =         cos3 ϕ
                                                 b2

The geometry: x = b tan ϕ, so we hange the variable dt = dxv = vb cosdϕ2 ϕ and we have
                                             Z π/2
                                  GMm                                2GMm
                             py =                      cos ϕ dϕ =         .
                                   bv         −π/2                     bv
Here we assume that the body moves along the stright line, due to α ≪ 1, see Fig 1. So α = ppy
and
                                      2GM     2b1
                                 α=         =     ,                 k=2
                                       bv 2    b


                                                   y

                                         v
                                  m
                                                   φ                 b


                                               M                          x

A2. During the transit of a massive body, star's energy remains onstant: p2x + p2y = onst.
Hen e
                                      (p + ∆px )2 + p2y = p2 .
                                                                                         p2
We know that py ≪ p, so the SBH momentum hange along the x-axis ∆px = − 2py = − α2 p, so
                                                                                              2




                                                       2G2 M 2 m
                                       ∆px = −                   .
                                                         b2 v 3


A3.  To al ulate net for e we might integrate over stars with di erent impa t parameters. The
number of stars' transits during the time ∆t equals ∆N = 2πbvn db ∆t, so for e, de elerating
the obje t along the x-axis,
                                                           Z bmax
                  1                         nm                       db             ρ
                       Z
(1)         FDF =          ∆px dN = −4πG M 2 2 2
                                                                        = −4πG2 M 2 2 log Λ
                  ∆t                        v                bmin     b            v
                                                       1

2


                                                  Δb

                                              b

                                                  v




                                              x
The above formulas are true only for b > b1 , so the lower integration limit is bmin = b1 , and the
upper limit is determined by the galaxy size bmax = R. So we have
                                                    ρ
(2)                                 FDF = −4πG2 M 2 2 log Λ
                                                   v
where Λ = R/b1 .

A4.   We al ulate: b1 = GM
                         v2
                            = 10.7 p , log Λ = 7.5.


                                B. Gravitational slingshot

B1.   From the se ond Newton's law
                                         Mv 2   GM 2
                                              =       ,
                                          a      4a2
                                            r
                                              GM
and we have for the orbital velo ity vbin =        . The system energy is
                                               4a
                                                       Mv 2 GM 2
                               E = Ekin + U = 2 ·          −     .
                                                        2    2a
The answer is
                                                      GM 2
(3)                                        E=−
                                                       4a


B2.   From angular momentum onservation law
                                           bσ = rm v0 ,
express v0 . Write down the energy onservation law
                                        σ2  v 2 GM2
                                           = 0−
                                        2    2   rm

                                                                                              3

and derive                                     r
                                                        2GM2
                                      b = rm       1+           .
                                                         σ 2 rm


B3. To estimate the time between ollisions let us use an analogy with the gas. As known
from the mole ular kineti theory, given that mole ules have radii r, thermal velo ities v , and
the mole ular on entration n, the time ∆t between ollisions of one mole ule with the others
 an be estimated from the relation πr2 vn∆t = 1. In our problem bmax stands in pla e of the
mole ule radius, therefore for estimation it an be written
                                       (∆t)−1 = πσb2max n.
   Estimate the maximal impa t parameter bmax , orresponding to the star ollision with the
binary system. The star should rea h the distan e of a to the binary system to ollide. The
star at large distan es from the SBH binary intera ts with it as with a point
                                                                         q obje t of mass
M2 = 2M . From the results of B.2, assuming rm = a, we obtain bmax = a 1 + 4GM σ2 a
                                                                                    . Taking
into a ount that σ ≪ a , simplify:
                    2    GM


                                                   2√
                                        bmax =        GMa,
                                                   σ
so we have
                                                   mσ
                                         ∆t =
                                                 4πGMρa


B4.   During the one a t of gravitational slingshot, star energy in reases at average by
                                              2
                                            mvbin   mσ 2
                                    ∆Estar =      −      .
                                             2       2
So the binary energy de reases by the same magnitude ∆Ebin = −∆Estar . Taking into a ount
that σ ≪ vbin , we derive
                                           m 2      GmM
                                 ∆Ebin = − vbin   =        .
                                           2         8a
Average binary system energy loss rate equals
                                    dE   ∆E    πG2 M 2 ρ
(4)                                    =    =−
                                    dt   ∆t      2σ
Taking the time derivative of (3), we have
                                             GM 2     GM 2 da

                                dE   d
(5)                                =       −        =         ,
                                dt   dt       4a       4a2 dt
From (4) and (5) the orbit radius variation rate an be estimated as
                                         da    2πGρa2
(6)                                         =−
                                         dt      σ

4

B5.    Equation (6) an be easily integrated
                                           da    2πGρ
(7)                                           =−      dt.
                                           a2      σ
To redu e the radius twi e it takes time
                                            σ
                                 TSS =           = 7.3 × 10−4 Gy
                                          2πGρa1

                            C. Emission of gravitational waves
                          r
                   vbin     GM
Ñ1. Using that ω =      =        and formulas from the problem text one an obtain:
                    a       4a3
                        dE      1024 × 4 GM 2 vbin 6
                                                       64 G4 M 5
(8)                         =−          ×            =    · 5 5 .
                         dt        5         c5 a2      5   ca
Combining (5) and (8) we get the desirable result:
                                          da    256 G3 M 3
(9)                                          =−    · 5 3
                                          dt     5   c a


Ñ2.    Integrating the equation (9) one an obtain:
                      256 G3 M 3                 a42 − rg4 256 G3 M 3
(10)            3
             a da = −     ·      dt     =⇒                =     ·     · TGW ;
                       5    c5                       4        5    c5
And taking into a ount a2 ≫ rg we derive the  nal result for TGW :
                                                   5    a4 c5
(11)                                      TGW =       · 32 3
                                                  1024 G M
Ñ3.    From the previous equation and TGW = tH :
                                      s
                                          1024 G3 M 3 tH
(12)                                                     = 0.098 p
                                      4
                               aH =           ·
                                           5      c5

                                      D. Full evolution

D1.    The galaxy is spheri ally symmetri , so mass en losed within a sphere of radius r equals
                                           Z r
                                                        σ2r
(13)                             m(r) =             2
                                          4πx ρ(x) dx =     .
                                        0                G
Thus the free fall a eleration of the body equals in the gravitational  eld of stars is
                                             Gm(r)  σ2
(14)                                  g(r) =       = .
                                              r2    r
Therefore the body velo ity is determined by relation
                                            v2    σ2
                                               =g= ,
                                            r     r
whi h means
(15)                                              v=σ

                                                                                             5

So the velo ity is onstant.

D2.    The energy of SBH in this gravitational  eld is
                                              Mσ 2
                                           E=      +U
                                               2
So the kineti energy is onstant and
                                         dE   dU   dU da
                                            =    =
                                         dt   dt   da dt
From the de nition of potential energy we have
                                      dU           Mσ 2
                                         = g(a)M =
                                      da            a
Using the result of A3 we have
                      dE                      ρ(a)           GM 2 σ log Λ
                         = −FDf v = −4πG2 M 2      log Λ = −              .
                      dt                       σ                 a2
Combining this equations we get the answer
                                         da    GM log Λ
(16)                                        =−
                                         dt      aσ
D3.  To estimate one an assume that SBHs form a binary when the mass of stars inside the
sphere of radius a equals to M :
                                                  σ2 a
                                         m(a) =        = M,
                                                   G
so
                                                GM
                                         a1 =       = 10.8p
                                                 σ2
Alternative variant: the for e from another SBH is equal to for e from all stars:
                                           Gm(a)   GM
                                                 =
                                            a2     4a2
so the answer is
                                                GM
                                         a1 =        = 2.7p
                                                4σ 2


D4.    Integrating the equation (16) we have
                                     a20 − a21   GM log Λ
                                               =          T1
                                         2         σ
and using that a1 ≪ a0 we have
                                           a20 σ
                                  T1 =             = 0.121 Gy.
                                         2GM log Λ
D5. Total energy losses are aused by gravitational slingshot and gravitational waves emission,
so ombining equations (4) and (8):
                                 dE    πG2 M 2 ρ1 64 G4 M 5
(17)                                =−           −   · 5 5
                                 dt      2σ        5   ca

6

where
ρ1 = ρ(a1 ) = ρ(10.8p ) = 6.3 × 103 Ms /pc3 ,       alternative: ρ1 = ρ(2.7p ) = 1.0 × 105 Ms /p 3
Energy losses due to GW dominates when πG 2σ             i.e. a < a2 where
                                          M ρ1  2   2       4   5
                                                      M
                                               < 64G
                                                  5c5 a5
                                     128 G2 M 3 σ   512 G3 M 3 a21
                             a52 =      · 5       =    ·
                                     5π   c ρ1       5    c5 σ
Numeri al answer is a2 = 0.018 p (alternative: a2 = 0.010 p ).

D6.  For rough approximation it an be onsidered that at the slingshot stage (a > a2 ) energy
losses are aused only by slingshot, so T2 is al ulated analogiously to B5: da
                                                                           a2
                                                                              = − 2πGρ
                                                                                    σ
                                                                                       dt and
                           σ
                     T2 ≈        = 0.063 Gy           (T2 ≈ 0.0068 Gy)
                        2πGρ1 a2
And at the GW emission stage (a < a2 ) energy losses are aused only by GW emission, so T3
is al ulated dire tly from C2:
                    5   a4 c5   1   σ
           T3 ≈       · 32 3 =    ·      = 0.016 Gy                  (T3 ≈ 0.0017 Gy)
                  1024 G M     8π Gρ1 a2
D7. Total time of SBH binary evolution from the moment of galaxies merging to SBH merging
equals
       Tev = T1 + T2 + TGW = 0.12 + 0.06 + 0.02 Gy = 0.20 Gy        (Tev = 0.13 Gy)
