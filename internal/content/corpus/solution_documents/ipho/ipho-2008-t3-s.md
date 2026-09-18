---
id: solution-document-ipho-2008-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2008/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2008-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2008/T3_S.pdf."
---

39th International Physics Olympiad - Hanoi - Vietnam - 2008
                                            Theoretical Problem No. 3 / Solution


                                                          Solution

1. For an altitude change dz , the atmospheric pressure change is :
                 dp = − ρ gdz                                            (1)
where g is the acceleration of gravity, considered constant, ρ is the specific mass of
air, which is considered as an ideal gas:
                                                    m pμ
                                             ρ=      =
                                                    V RT
Put this expression in (1) :
                                             dp    μg
                                                =−    dz
                                              p    RT

    1.1. If the air temperature is uniform and equals T0 , then

                                             dp    μg
                                                =−     dz
                                              p    RT0

After integration, we have :
                                          μg
                                      −       z
                p ( z ) = p ( 0) e        RT0
                                                                                            (2)
    1.2. If

                 T ( z ) = T ( 0 ) − Λz                                                     (3)

then

       dp           μg
          =−                     dz                                                         (4)
        p    R ⎡⎣T ( 0 ) − Λz ⎤⎦

          1.2.1. Knowing that :

                                1 d ⎡⎣T ( 0 ) − Λz ⎤⎦
              ∫ T ( 0 ) − Λz Λ ∫ T ( 0 ) − Λz = − Λ ln (T ( 0 ) − Λz )
                     dz                               1
                            = −

by integrating both members of (4), we obtain :


                     p( z)       μg         T ( 0 ) − Λz        μg   ⎛    Λz ⎞
                ln           =        ln                    =     ln ⎜1 −     ⎟
                     p (0)       RΛ               T (0)         RΛ ⎜⎝ T ( 0 ) ⎟⎠
                                                      μg
                                  ⎛    Λz ⎞ R Λ
                p ( z ) = p ( 0 ) ⎜1 −
                                  ⎜ T ( 0 ) ⎟⎟
                                                                                            (5)
                                  ⎝          ⎠


                                                                                                  1


                             39th International Physics Olympiad - Hanoi - Vietnam - 2008
                                        Theoretical Problem No. 3 / Solution


       1.2.2. The free convection occurs if:


                        ρ ( z)
                               >1
                        ρ (0)

       The ratio of specific masses can be expressed as follows:

                                                          μg
                                                               −1
            ρ ( z ) p ( z ) T ( 0) ⎛      Λz ⎞ R Λ
                   =               = ⎜1 −       ⎟
            ρ ( 0 ) p ( 0 ) T ( z ) ⎜⎝ T ( 0 ) ⎟⎠

       The last term is larger than unity if its exponent is negative:

             μg
                   −1 < 0
             RΛ

 Then :
                   μg           0.029 × 9.81         K
             Λ>             =                = 0.034
                   R               8.31              m

2. In vertical motion, the pressure of the parcel always equals that of the surrounding air,

the latter depends on the altitude. The parcel temperature Tparcel depends on the

pressure.

   2.1. We can write:

            dTparcel         dTparcel dp
                        =
              dz                dp    dz
p is simultaneously the pressure of air in the parcel and that of the surrounding air.

                   dTparcel
Expression for
                         dp

   By using the equation for adiabatic processes pV γ = const and equation of state,

we can deduce the equation giving the change of pressure and temperature in a
quasi-equilibrium adiabatic process of an air parcel:
                       1−γ
            Tparcel p γ = const                                                             (6)


                                                                                                  2


                               39th International Physics Olympiad - Hanoi - Vietnam - 2008
                                           Theoretical Problem No. 3 / Solution



                  cp
where        γ=             is the ratio of isobaric and isochoric thermal capacities of air. By
                  cV

logarithmic differentiation of the two members of (6), we have:
                dTparcel          1 − γ dp
                             +             =0
                 Tparcel            γ p

Or

                dTparcel          Tparcel γ − 1
                              =                                                               (7)
                   dp               p      γ
Note: we can use the first law of thermodynamic to calculate the heat received by the
                                                      m
parcel in an elementary process: dQ =                     c dTparcel + pdV , this heat equals zero in an
                                                      μ V
adiabatic process. Furthermore, using the equation of state for air in the parcel
        m
pV =          RTparcel we can derive (6)
        μ
                        dp
Expression for
                        dz
     From (1) we can deduce:
                       dp            pg μ
                          = −ρ g = −
                       dz            RT
where T is the temperature of the surrounding air.

     On the basis of these two expressions, we derive the expression for dTparcel / dz :


                  dTparcel           γ − 1 μ g Tparcel
                               =−                      = −G                                   (8)
                       dz              γ R T
In general, G is not a constant.


     2.2.

            2.2.1. If at any altitude, T = Tparcel , then instead of G in (8), we have :

                   γ −1 μ g
              Γ=            = const                                                           (9)
                     γ R
or




                                                                                                      3


                           39th International Physics Olympiad - Hanoi - Vietnam - 2008
                                                Theoretical Problem No. 3 / Solution



                   μg
            Γ=                                                                                (9’)
                   cp

        2.2.2. Numerical value:
                    1.4 − 1 0.029 × 9.81          K       K
             Γ=                          = 0.00978 ≈ 10−2
                     1.4       8.31               m       m
      2.2.3. Thus, the expression for the temperature at the altitude z in this special
atmosphere (called adiabatic atmosphere) is :

             T ( z ) = T ( 0 ) − Γz                                                           (10)

   2.3. Search for the expression of Tparcel ( z )

Substitute T in (7) by its expression given in (3), we have:
              dTparcel            γ −1 μ g   dz
                         =−
              Tparcel               γ R T ( 0 ) − Λz

Integration gives:

                  Tparcel ( z )           γ − 1 μ g ⎛ 1 ⎞ T ( 0 ) − Λz
                                  =−                 −
                                            γ R ⎜⎝ Λ ⎟⎠
             ln                                          ln
                  Tparcel ( 0 )                              T ( 0)

Finally, we obtain:
                                                                   Γ
                                         ⎛ T (0)            − Λz ⎞ Λ
           Tparcel ( z ) = Tparcel ( 0 ) ⎜                        ⎟⎟                          (11)
                                         ⎜ T ( 0)
                                         ⎝                         ⎠
   2.4.
   From (11) we obtain
                                                       Γ
                                  ⎛    Λz ⎞ Λ
    Tparcel ( z ) = Tparcel ( 0 ) ⎜1 −
                                  ⎜ T ( 0 ) ⎟⎟
                                  ⎝          ⎠
                                                           −T ( 0 )
If Λz << T ( 0 ) , then by putting x =                              , we obtain
                                                            Λz
                                                           Γz
                                                      −
                                  ⎛ ⎛ 1 ⎞ x ⎞ T ( 0)
    Tparcel ( z ) = Tparcel ( 0 ) ⎜ ⎜1 + ⎟ ⎟
                                  ⎜⎝ x ⎠ ⎟
                                  ⎝         ⎠
                                         Γz
                                    −
                                        T (0)                   ⎛    Γz ⎞
                ≈ Tparcel ( 0 ) e               ≈ Tparcel ( 0 ) ⎜1 −
                                                                ⎜ T ( 0 ) ⎟⎟ parcel ( )
                                                                             ≈T      0 − Γz
                                                                ⎝          ⎠



                                                                                                     4


                         39th International Physics Olympiad - Hanoi - Vietnam - 2008
                                     Theoretical Problem No. 3 / Solution


hence,

     Tparcel ( z ) ≈ Tparcel ( 0 ) − Γz                                                  (12)


3. Atmospheric stability
    In order to know the stability of atmosphere, we can study the stability of the
equilibrium of an air parcel in this atmosphere.

    At the altitude z0 , where Tparcel ( z0 ) = T ( z0 ) , the air parcel is in equilibrium.

Indeed, in this case the specific mass ρ of air in the parcel equals ρ ' - that of the
surrounding air in the atmosphere. Therefore, the buoyant force of the surrounding air on
the parcel equals the weight of the parcel. The resultant of these two forces is zero.

    Remember that the temperature of the air parcel Tparcel ( z ) is given by (7), in which


we can assume approximately G = Γ at any altitude z near z = z0 .

    Now, consider the stability of the air parcel equilibrium:

    Suppose that the air parcel is lifted into a higher position, at the altitude z0 + d

(with d>0),     Tparcel ( z0 + d ) = Tparcel ( z0 ) − Γd and T ( z0 + d ) = T ( z0 ) − Λd .

    • In the case the atmosphere has temperature lapse rate Λ > Γ , we have

Tparcel ( z0 + d ) > T ( z0 + d ) , then    ρ < ρ ' . The buoyant force is then larger than the

air parcel weight, their resultant is oriented upward and tends to push the parcel away
from the equilibrium position.

    Conversely, if the air parcel is lowered to the altitude                            z0 − d   (d>0),

Tparcel ( z0 − d ) < T ( z0 − d ) and then ρ > ρ ' .

   The buoyant force is then smaller than the air parcel weight; their resultant is oriented
downward and tends to push the parcel away from the equilibrium position (see
Figure 1)
 So the equilibrium of the parcel is unstable, and we found that: An atmosphere with a
temperature lapse rate Λ > Γ is unstable.
    • In an atmosphere with temperature lapse rate Λ < Γ , if the air parcel is lifted to a

higher position, at altitude z0 + d (with d>0),                 Tparcel ( z0 + d ) < T ( z0 + d ) , then


                                                                                                      5


                           39th International Physics Olympiad - Hanoi - Vietnam - 2008
                                          Theoretical Problem No. 3 / Solution


ρ > ρ ' . The buoyant force is then smaller than the air parcel weight, their resultant is
oriented downward and tends to push the parcel back to the equilibrium position.

  Conversely,       if    the       air    parcel      is       lowered     to   altitude    z0 − d (d > 0),

Tparcel ( z0 − d ) > T ( z0 − d ) and then ρ < ρ ' . The buoyant force is then larger than the

air parcel weight, their resultant is oriented upward and tends to push the parcel also back
to the equilibrium position (see Figure 2).
    So the equilibrium of the parcel is stable, and we found that: An atmosphere with a
temperature lapse rate Λ < Γ is stable.


                    T Tparcel                      Λ>Γ
           z


       z0+d                                                               Tparcel > T ⇒ ρ parcel < ρ    up↑
       z0
        z0-d                                                              Tparcel < T ⇒ ρ parcel > ρ   down↓


                                               Γ            Λ                               unstable

                0        T ( z0 )                               T


                                                       Figure 1


                    Tparcel T                      Λ<Γ
           z


       z0+d                                                               Tparcel < T ⇒ ρ parcel > ρ down ↓
       z0
        z0-d                                                              Tparcel > T ⇒ ρ parcel < ρ   up↑


                                           Λ       Γ                                         stable

                0            T ( z0 )                               T

                                                       Figure 2




                                                                                                               6


                       39th International Physics Olympiad - Hanoi - Vietnam - 2008
                                           Theoretical Problem No. 3 / Solution


   • In an atmosphere with lapse rate Λ = Γ , if the parcel is brought from equilibrium
position and put in any other position, it will stay there, the equilibrium is indifferent. An
atmosphere with a temperature lapse rate Λ = Γ is neutral

     3.2. In a stable atmosphere, with Λ < Γ , a parcel, which on ground has temperature

Tparcel ( 0 ) > T ( 0 ) and pressure p ( 0 ) equal to that of the atmosphere, can rise and

reach a maximal altitude h , where Tparcel ( h ) = T ( h ) .

    In vertical motion from the ground to the altitude h , the air parcel realizes an

adiabatic quasi-static process, in which its temperature changes from Tparcel ( 0 ) to


Tparcel ( h ) = T ( h ) . Using (11), we can write:
                               Γ
                           −
            ⎛      Λh ⎞        Λ       Tparcel ( 0 )               Tparcel ( 0 )
            ⎜⎜ 1 −    ⎟⎟           =                   =
             ⎝ T ( 0) ⎠                    T ( h)                      ⎛      Λh ⎞
                                                               T ( 0 ) ⎜⎜ 1 −    ⎟⎟
                                                                        ⎝ T ( 0) ⎠
                               Γ
                          1−
            ⎛      Λh ⎞ Λ
                      ⎟⎟ = Tparcel ( 0 ) × T ( 0 )
                                            −1
            ⎜⎜ 1 −
             ⎝ T ( 0) ⎠

                                   Λ                   Λ
                  Λh                  −
            1−          = Tparcel ( )      ( )
                            Λ -Γ 0 × T Λ -Γ 0
                 T ( 0)

               1        ⎡       Λ
                                              −
                                                 Λ
                                                        ⎤
            h = T ( 0 ) ⎢1 − Tparcel ( 0 ) × T -Γ ( 0 ) ⎥
                               Λ -Γ             Λ
               Λ        ⎢⎣                              ⎥⎦
                1⎡                                  ⎤
                                 Λ           Γ
                              −
               = ⎢T ( 0 ) − Tparcel ( 0 ) T
                                Λ−Γ         Γ−Λ
                                                ( 0)⎥
                Λ ⎢⎣                                ⎥⎦
So that the maximal altitude h has the following expression:

                ⎡                             1 ⎤
                         ⎛                 ⎞
                             ( T ( 0))
                ⎢                      Γ     Γ−Λ ⎥
            h=
               1⎢
                 T (0) − ⎜                 ⎟     ⎥                                    (13)
                         ⎜⎜              Λ ⎟
               Λ⎢
                ⎢                      (
                          ⎝ parcel ( ) ⎠
                            T        0     ⎟     ⎥
                                                 ⎥         )
                ⎣                                ⎦




                                                                                             7


                                39th International Physics Olympiad - Hanoi - Vietnam - 2008
                                           Theoretical Problem No. 3 / Solution


4.
              Using data from the Table, we obtain the plot of z versus T shown in Figure 3.



                      300




     Altitude [m]
                      200
                                                         o
                                                  D(20.6 C;142 m)
                                                            o
                                                     C(20.8 C; 119 m)
                                                               o
                      100                                B(21.0 C; 96 m)



                                                                                         o
                                                                                   A( 22 C; 0 m)
                          0
                          20.0          20.5        21.0          21.5            22.0         22.5
                                                                         o
                                               Temperature [ C]
                                                      Figure 3

    4.1. We can divide the atmosphere under 200m into three layers, corresponding to the
following altitudes:
                                                  21.5 − 20.1              K
1)                   0 < z < 96 m,         Λ1 =               = 15.4 × 10−3 .
                                                      91                   m
2)                  96 m < z < 119 m,     Λ 2 = 0 , isothermal layer.

                                                    22 − 20.1        K
3)                  119 m < z < 215 m, Λ 3 = −                = −0.02 .
                                                    215 − 119        m
          In the layer 1), the parcel temperature can be calculated by using (11)

                     Tparcel ( 96 m ) = 294.04 K ≈ 294.0 K that is 21.0oC

          In the layer 2), the parcel temperature can be calculated by using its expression in

                                                                  ⎡   Γz ⎤
isothermal atmosphere Tparcel ( z ) = Tparcel ( 0 ) exp ⎢ −                  ⎥.
                                                                  ⎢⎣ T ( 0 ) ⎥⎦



                                                                                                      8


                       39th International Physics Olympiad - Hanoi - Vietnam - 2008
                                  Theoretical Problem No. 3 / Solution


    The altitude 96 m is used as origin, corresponding to 0 m. The altitude 119 m
corresponds to 23 m. We obtain the following value for parcel temperature:

                 Tparcel (119 m ) = 293.81 K that is 20.8oC

     4.2. In the layer 3), starting from 119 m, by using (13) we find the maximal elevation
h = 23 m, and the corresponding temperature 293.6 K (or 20.6 oC).
   Finally, the mixing height is
             H = 119 + 23 = 142 m.
And

               Tparcel (142 m ) = 293.6 K       that is   20.6oC


     From this relation, we can find Tparcel (119 m ) ≈ 293.82 K and h = 23 m .


Note: By using approximate expression (12) we can easily find Tparcel ( z ) = 294 K and

293.8 K at elevations 96 m and 119 m, respectively. At 119 m elevation, the difference
between parcel and surrounding air temperatures is 0.7 K (= 293.8 – 293.1), so that the

maximal distance the parcel will travel in the third layer is 0.7/ ( Γ − Λ 3 ) = 0.7/0.03 = 23 m.


5.
     Consider a volume of atmosphere of Hanoi metropolitan area being a parallelepiped
with height H , base sides L and W. The emission rate of CO gas by motorbikes from
7:00 am to 8:00 am
                 M = 800 000 × 5 × 12 /3600 = 13 300 g/s
     The CO concentration in air is uniform at all points in the parallelepiped and denoted

by C ( t ) .

    5.1. After an elementary interval of time dt , due to the emission of the motorbikes,
the mass of CO gas in the box increases by Mdt . The wind blows parallel to the short

sides W, bringing away an amount of CO gas with mass LHC ( t ) udt . The remaining

part raises the CO concentration by a quantity dC in all over the box. Therefore:

        Mdt − LHC ( t ) udt = LWHdC

or




                                                                                               9


                       39th International Physics Olympiad - Hanoi - Vietnam - 2008
                                  Theoretical Problem No. 3 / Solution


        dC u          M
          + C (t ) =                                                                  (14)
        dt W         LWH
   5.2. The general solution of (14) is :

                       ⎛ ut ⎞ M
       C ( t ) = K exp ⎜ − ⎟ +                                                        (15)
                       ⎝ W ⎠ LHu

From the initial condition C ( 0 ) = 0 , we can deduce :


                     M ⎡          ⎛ ut ⎞ ⎤
         C (t ) =           −     ⎜ − W ⎟⎥
                    LHu ⎢⎣
                          1   exp                                                     (16)
                                  ⎝     ⎠⎦


    5.3. Taking as origin of time the moment 7:00 am, then 8:00 am corresponds to
t =3600 s. Putting the given data in (15), we obtain :

       C ( 3600 s ) = 6.35 × (1 − 0.64 ) = 2.3 mg/m3




                                                                                             10
