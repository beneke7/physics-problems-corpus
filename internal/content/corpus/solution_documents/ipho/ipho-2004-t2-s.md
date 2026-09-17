---
id: solution-document-ipho-2004-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2004/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2004-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2004/T2_S.pdf."
---

Theoretical Question 2 / Solutions               Page 1/6


Theoretical Question 2: Rising Balloon


1. Answers


                       P
(a) FB = M A ng
                     P + ∆P


           ρ0 z0 g
(b) γ =               = 5.5
             P0


             4κRT 1 1
(c) ∆P =           −
               r0 λ λ7
                           0.6

                           0.5

                           0.4

                           0.3

                           0.2

                           0.1


                                          2            3   4   5


(d) a =0.110


(e) z f =11 km,       λ f =2.1.
                 Theoretical Question 2 / Solutions                                      Page 2/6


2. Solutions


[Part A]
(a) [1.5 points]
Using the ideal gas equation of state, the volume of the helium gas of n moles at
pressure P + ∆P and temperature T is
                           V = nRT /( P + ∆P )                                                (a1)
while the volume of n' moles of air gas at pressure P and temperature T is
                                V = n' RT / P .                                               (a2)
                                    P
Thus the balloon displaces n' = n          moles of air whose weight is          M A n' g .
                                  P + ∆P
This displaced air weight is the buoyant force, i.e.,
                                              P
                               FB = M A ng          .                                         (a3)
                                           P + ∆P
(Partial credits for subtracting the gas weight.)


(b) [2 points]
The pressure difference arising from a height difference of z is − ρgz when the air
density ρ is a constant. When it varies as a function of the height, we have
                          dP             ρT P
                             = − ρg = − 0 0 g                                                 (b1)
                          dz               P0 T
where the ideal gas law ρT / P = constant is used. Inserting Eq. (2.1) and
T / T0 = 1 − z / z 0 on both sides of Eq. (b1), and comparing the two, one gets
                               ρ 0 z0 g       1.16 × 4.9 × 10 4 × 9.8
                          γ=              =                           = 5.52 .                (b2)
                                 P0                1.01× 10 5
The required numerical value is 5.5.


[Part B]
(c) [2 points]
The work needed to increase the radius from r to r + dr under the pressure
difference ∆P is
                                      dW = 4πr 2 ∆Pdr ,                                       (c1)
while the increase of the elastic energy for the same change of r is
               Theoretical Question 2 / Solutions                                Page 3/6

                                                             6
                        dU                   r
                   dW =    dr = 4πκRT (4r − 4 05 )dr .                              (c2)
                        dr                    r
Equating the two expressions of dW , one gets

                                         4κRT 1 1
                                          6
                               1 r
                   ∆P = 4κ RT ( − 07 ) =       −   .                                (c3)
                               r r         r0 λ λ7

This is the required answer.
The graph as a function of λ (>1) increases sharply initially, has a maximum at λ =71/6

=1.38, and decreases as λ−1 for large λ . The plot of ∆P /(4κRT / r0 ) is given below.


                   0.6

                   0.5

                   0.4

                   0.3

                   0.2

                   0.1


                                    2               3              4     5



(d) [1.5 points]
From the ideal gas law,
                                     P0V0 = n0 RT0                                  (d1)
where V0 is the unstretched volume.

At volume V = λ3V0 containing n moles, the ideal gas law applied to the gas inside

at T = T0 gives the inside pressure Pin as
                                                     n
                               Pin = nRT0 / V =             P0 .                    (d2)
                                                    n0 λ3
On the other hand, the result of (c) at T = T0 gives


                                          4κRT0 1 1              1 1
                   Pin = P0 + ∆P = P0 +        ( − 7 ) = (1 + a ( − 7 )) P0 .       (d3)
                                            r0  λ λ              λ λ
Equating (d2) and (d3) to solve for a ,
                Theoretical Question 2 / Solutions                             Page 4/6


                      n /(n0 λ3 ) − 1
                  a=                  .                                           (d5)
                         λ−1 − λ−7
Inserting n / n0 =3.6 and λ =1.5 here, a =0.110.




[Part C]
(e) [3 points]
The buoyant force derived in problem (a) should balance the total mass of M T =1.12 kg.
Thus, from Eq. (a3), at the weight balance,
                               P      M
                                    = T .                                          (e1)
                            P + ∆P M A n
On the other hand, applying again the ideal gas law to the helium gas inside of volume
    4         4 3
V = πr 3 = λ3 πr0 = λ3V0 , for arbitrary ambient P and T , one has
    3         3
                                   nRT        T n
                     ( P + ∆P)λ3 =       = P0                                      (e2)
                                    V0        T0 n0
for n moles of helium. Eqs. (c3), (e1), and (e2) determine the three unknowns P ,
∆P , and λ as a function of T and other parameters. Using Eq. (e2) in Eq. (e1), one
has an alternative condition for the weight balance as
                               P T0 3     MT
                                    λ =          .                                 (e3)
                              P0 T       M A n0
Next using (c3) for ∆P in (e2), one has
                           4κRT 2                  T n
                     Pλ3 +       λ (1 − λ−6 ) = P0
                             r0                    T0 n0
or, rearranging it,
                            P T0 3 n
                                 λ = − aλ2 (1 − λ−6 ) ,                            (e4)
                            P0 T    n0
where the definition of a has been used again.
Equating the right hand sides of Eqs. (e3) and (e4), one has the equation for λ as
                                        1      M
                       λ2 (1 − λ−6 ) =     (n − T ) =4.54.                         (e5)
                                       an0     MA
The solution for λ can be obtained by
                 λ2 ≈ 4.54 /(1 − 4.54 −3 ) ≈ 4.54 : λ f ≅ 2.13.                    (e6)
                Theoretical Question 2 / Solutions                               Page 5/6


To find the height, replace ( P / P0 ) /(T / T0 ) on the left hand side of Eq. (e3) as a
function of the height given in (b) as
                       P T0 3                                MT
                            λ = (1 − z f / z 0 ) γ −1 λ3f =        =3.10 .          (e7)
                      P0 T                                  M A n0

 Solution of Eq. (e7) for z f with λ f =2.13 and γ − 1 =4.5 is


                                      (                       )
                            z f = 49 × 1 − (3.10 / 2.133 )1 / 4.5 = 10.9 (km).      (e8)

The required answers are λ f = 2.1, and z f = 11 km.
                Theoretical Question 2 / Solutions                                              Page 6/6


3. Mark Distribution

        Total     Partial
 No.                                                          Contents
         Pt.       Pt.
 (a)    1.5         0.5     Archimedes’ principle
                    0.5     Ideal gas law applied correctly
                    0.5     Correct answer (partial credits 0.3 for subtracting He weight)
 (b)    2.0         0.8     Relation of pressure difference to air density
                    0.5     Application of ideal gas law to convert the density into pressure
                    0.5     Correct formula for γ
                    0.2     Correct number in answer
 (c)    2.0         0.7     Relation of mechanical work to elastic energy change
                    0.3     Relation of pressure to force
                    0.5     Correct answer in formula
                    0.5     Correct sketch of the curve
 (d)    1.5         0.3     Use of ideal gas law for the increased pressure inside
                    0.4     Expression of inside pressure in terms of a at the given conditions
                    0.5     Formula or correct expression for a
                    0.3     Correct answer
 (e)    3.0         0.3     Use of force balance as one condition to determine unknowns
                    0.3     Ideal gas law applied to the gas as an independent condition to determine
                            unknowns

                    0.5     The condition to determine λ f numerically


                    0.7     Correct answer for λ f


                    0.5     The relation of z f versus λ f


                    0.7     Correct answer for z f

Total    10
