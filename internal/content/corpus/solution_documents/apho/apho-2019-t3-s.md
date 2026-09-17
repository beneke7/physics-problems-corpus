---
id: solution-document-apho-2019-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2019/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2019-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2019/T3_S.pdf."
---

Theory
Question 3: Tippe Top
Solutions

Reference sheet for markers

Note: some results below were used for the previous version of part A.10, and are no longer needed.

Coordinate systems for convenience (note: use of matrices not needed) xyz from XY Z
                                                                         
                                       x̂      cos φ sin φ                0   X̂
                                      ŷ = − sin φ cos φ               0 Ŷ
                                       ẑ        0      0                 1   Ẑ

123 from xyz
                                                                           
                                       1̂     cos θ             0    − sin θ   x̂
                                      2̂ =  0                1       0  ŷ
                                       3̂     sin θ             0     cos θ    ẑ

Position of point A from centre of mass, in xyz and 123 frames:

                                      a = αR3̂ − Rẑ                                                  (1)
                                        = αR sin θx̂ + R(α cos θ − 1)ẑ
                                        = R sin θ1̂ + R(α − cos θ)3̂

Useful products:

                                                    ẑ × 3̂ = sin θŷ                                 (2)
                                                                                                      (3)

Note (given in question):
                                                                  
                                           ∂A                   ∂A
                                                        =                 +ω×A                        (4)
                                           ∂t       K           ∂t    e
                                                                      K

Time derivatives:

                                                        3̂˙ = ω × 3̂                                  (5)
                                                        x̂˙ = φ̇ŷ                                    (6)
                                                        ŷ˙ = −φ̇x̂                                   (7)




                                                                1
Solutions: Tippe Top

1. (1.0 marks)

  Free body diagrams:




  z
                                                                     y
        x
                                                                             x

                                                                                           Ffr

                                                                                                 N
                                                                                  mg
                 mg
                                 N
                                                                                                                  vA
                           Ffr

  Note: the direction of Ff must be opposite to the direction of vA , but is otherwise unimportant. Sum of
  forces:

                              Fext = (N − mg)ẑ + Ff (sufficient for full marks)                            (8)
                                                  µk N
                                   = (N − mg)ẑ −       vA
                                                  |vA |


  Sketched vA must be in opposite direction to Ff on xy diagram.


2. (0.8 marks)

  Sum of torques:

         τ ext = a × (N ẑ + Ff )                                                                           (9)
              = (αR3̂ − Rẑ) × (N ẑ + Ff,x x̂ + Ff,y ŷ)
              = αRN 3̂ × ẑ + αR(sin θx̂ + cos θẑ) × (Ff,x x̂ + Ff,y ŷ) − Rẑ × (Ff,x x̂ + Ff,y ŷ)
              = −αRN sin θŷ + αR sin θFf,y ẑ + αR cos θFf,x ŷ − αR cos θFf,y x̂ − RFf,x ŷ + RFf,x x̂
              = RFf,y (1 − α cos θ)x̂ + [RFf,x (α cos θ − 1) − αRN sin θ] ŷ + αR sin θFf,y ẑ             (10)



3. (0.4 marks)

  Motion at A satisfies

                                                  vA = ṡ + ω × a                                          (11)

  where ω is the total angular velocity of the top in the centre of mass frame (this is deteremined in the
  next part). Want to show that vA · ẑ = 0.

  To show this, take time derivative of contact condition in XY Z or xyz frame (note: either is suitable, as

                                                       2
  we only need the ẑ component, and ẑ = Ẑ).

  Contact condition:

                                            (s + a) · ẑ = 0        at all times               (12)
                                         d
                                       ⇒    (s + a) · ẑ = 0        at all times
                                         dt

  Note we only care about the z-component, and (ω × ẑ) · ẑ = 0. Then, using 11, 1, and 5,

                                           vA · ẑ = (ṡ + ω × a) · ẑ
                                                                      
                                                   = ṡ + αRω × 3̂ · ẑ
                                                                   !
                                                               d3̂
                                                   = ṡ + αR           · ẑ
                                                               dt
                                                   = (ṡ + ȧ) · ẑ = 0                        (13)

4. (0.8 marks)

  Total angular velocity ω of top is the sum of three distinct rotations:

                                                ω = θ̇ 2̂ + φ̇ẑ + ψ̇ 3̂

  Use transformations shown in figure 3 or otherwise to transform into xyz or 123 frame:

                                      ω = ψ̇ sin θx̂ + θ̇ŷ + (ψ̇ cos θ + φ̇)ẑ                (14)
                                      ω = −φ̇ sin θ1̂ + θ̇ 2̂ + (ψ̇ + φ̇ cos θ)3̂              (15)

5. (1.0 marks)


  Where I is the inertia tensor
                                                                     
                                                   I1       0     0
                                                  0        I1    0
                                                    0       0    I3 ,

  we have

                                   ET = KT + KR + UG
                                        1       1
                                      = ω · Iω + mṡ2 + mgR(1 − α cos θ)
                                        2       2


  From 11,

                    ṡ = vA − ω × a
                       = vA − (θ̇ 2̂ + φ̇ẑ + ψ̇ 3̂) × (αR3̂ − Rẑ)
                                                                                 
                       = vx x̂ + vy ŷ − θ̇αR1̂ − θ̇Rẑ + φ̇αRẑ × 3̂ − ψ̇R3̂ × ẑ
                                                                            
                       = vx + θ̇R(1 − α cos θ) x̂ + vy − R sin θ(αφ̇ + ψ̇) ŷ + θ̇αR sin θẑ

  using 2. Thus
           1h                                             i
     ET =    I1 (φ̇2 sin2 θ + θ̇2 ) + I3 (ψ̇ + φ̇ cos θ)2
           2                                                                
           m                             2                 2
                                                                   2 2 2   2
         +      vx + θ̇R(1 − α cos θ) + vy − R sin θ(αφ̇ + ψ̇) + θ̇ α R sin θ + mgR(1 − α cos θ)
           2




                                                        3
6. (0.4 marks)

  From 10,
                                         dL        X
                                            · ẑ =   τ · ẑ = αR sin θFf,y                                                  (16)
                                         dt
7. (1.4 marks)

  Changes in energy: h = s · ẑ increases, so U˙G > 0.

  At start and end (phases I and V) there is little translation so KT ∼ 0 at I and V. Thus, energy
  transfer is from KR to UG .


  Normal force does no work. Frictional force does work at point A. Direction is −vA :
                                                   Z
                                              W = Ff · vA dt < 0
                                                 d
                                          ⇒         ET = −µk N |vA |
                                                 dt


  Thus Ff decreases the total energy monotonically.

  16 implies only the Ff .ŷ acts to decrease L · ẑ. Energy transfer from KR to UG , caused by compo-
  nent of frictional force in ŷ direction, so component of resultant torque is in the a × ŷ direction.


8. (2.0 marks)

                                                                                monotonically decreasing
                                                            ET


                                                                                                           constant, =UG



                                                                                                                        t
                                                                 (I)            (II) (III) (IV)         (V)

                                                                                                              on stem
                                                            UG
  Expectation (see figure):                                            rising

     • ET : monotonically decreasing
                                                      non-zero
     • KR : monotonically decreasing;
       zero at V                                                                                                        t
                                                                 (I)            (II) (III) (IV)         (V)
     • KT : zero at I and V; higher be-
       tween; close to zero at IV                           KT

     • UG : flat at start and finish; higher
       at end; increases from I to IV then
       flat; increase roughly at same
       time that Krot decreases
                                                                                                                        t
                                               spinning upright, (I)            (II) (III) (IV)         (V)
                                               so KT is small
                                                            KR
                                                                                                              at rest
                                                                                       spinning slows




                                                                                                                        t
                                                                 (I)            (II)    (III) (IV)      (V)


                                                             4
 9. (0.5 marks)

   From 15,
                                                               
                                 L = Iω = I1 −φ̇ sin θ1̂ + θ̇ 2̂ + I3 (ψ̇ + φ̇ cos θ)3̂   (17)

   Taking cross product with 3̂:
                                                                          
                                             L × 3̂ = I1 φ̇ sin θ2̂ + θ̇1̂
                                                    = I1 (ω × 3̂)                         (18)

10. (1.7 marks)

   About any axis through the centre of mass,
                                                  dL
                                                     6= 0 ⇔ τext 6= 0
                                                  dt

   External torque given by 9,

                                                τ ext = a × (N ẑ + Ff )
                                                    ⇒ τext · a = 0
                                                    dL
                                                       ·a =0
                                                    dt
   Thus, angular momentum in the direction of a must be constant, so v = a.

   To demonstrate this mathematically, 5, 10, 18 allow

                                            dL             d3̂
                                    −λ̇ =      · a + αRL ·
                                            dt             dt
                                                                     αR
                                        = (a × (N ẑ + Ff )) · a +      L · (ω × L)
                                                                     I1
                                        =0




                                                        5
