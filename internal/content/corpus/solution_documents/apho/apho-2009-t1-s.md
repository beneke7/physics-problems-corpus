---
id: solution-document-apho-2009-t1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2009/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2009/T1_S.pdf."
---

Theoretical competition                                                                                Solution: Question 1

26 April 2009                                                                                              Page 1 of 7
-------------------------------------------------------------------------------------------------------------------------

                                       SOLUTION: Rolling Cylinders

                                                             Y


                                                                      M
                                                     g

                                                                          R                       X
                                                             O
                                                                 θ φ
                                                                              C
                                                                                          P
                                                                          ψ
                                                                     m            φ


1.1) The point P which is fixed on the surface of M was at the position directly below O at time
                                                                              φ R −θ R
       t = 0 . Hence m must have rolled through an angle                                      radians relative to surface of M
                                                                                      r
       in time t during which the line OC has also turned anti-clockwise through an angle θ .
       Therefore the total angular displacement of m about its centre of mass relative to any fixed
       reference line in time t is
                           φ R −θ R                 R    ⎛ R−r ⎞
                 ψ    =               +θ    =         φ −⎜     ⎟θ                             ………..(i)
                               r                    r    ⎝ r ⎠


1.2) By differentiating the equation (i) twice with respect to time, we get
                  d2            R d2       ⎛ R−r ⎞ d
                                                     2
                       ψ   =           φ − ⎜     ⎟ 2θ                                         ………..(ii)
                  dt 2          r dt 2     ⎝ r ⎠ dt
1.3)
                                                         Y
                                                                 M
                                                g

                                                                      R                       X
                                                         O
                                                             θ            m
                                                                      C
                                                                                  f

                                                                                  N
                                                                 mg
Theoretical competition                                                                      Solution: Question 1

26 April 2009                                                                                              Page 2 of 7
-------------------------------------------------------------------------------------------------------------------------
     The equations of motion of centre of mass of m are:
                             d2
                  m(R − r)        θ    =     f − mg sin θ                 …………..(iii)
                             dt 2
                            2
                    ⎛d ⎞
                  m ⎜ θ ⎟ ( R − r ) = N − mg cos θ                        …………..(iv)
                    ⎝ dt ⎠
     The equation for the rotation of m about its centre of mass is:

               d2               ⎡R d2       ⎛ R−r ⎞ d
                                                      2
                                                        ⎤
           I CM 2 ψ      = I CM ⎢      2
                                         φ −⎜     ⎟ 2θ ⎥ =               fr      ………..(v)
               dt               ⎣ r dt      ⎝ r ⎠ dt ⎦
                     1 2
     where I CM =      mr .
                     2
     Equations (iii) and (v) yield:
         ⎛     I CM ⎞         d2                       I R d2
         ⎜ m +      ⎟( R − r ) 2θ        = − mg sin θ + CM2    φ                 ………..(vi)
         ⎝      r2 ⎠          dt                        r dt 2


               d2                                    1
1.4) Here,        2
                    φ = 0 , sin θ ≈ θ and also I CM = mr 2 , the equation (vi) is reduced to:
               dt                                    2
                         d2                   2g
                              θ   = −                 θ                          ………..(vii)
                         dt 2              3( R − r )

                                                      3( R − r )
     This gives a period              T = 2π                                     ………..(viii)
                                                         2g


1.5) The equilibrium position of m in question 1.4) is θ = 0 .


1.6) But the equilibrium position for the case where M is rotating with a constant angular
       acceleration α is by considering the equation (vi), namely,


                           3        d2                             R
                             (R − r) 2 θ         = − g sin θ +       α           ………..(ix)
                           2        dt                             2
     Let θ eq be the equilibrium position; this implies that m remains stationary at this position if it

                                      d2
     does not oscillate. Hence             θ eq = 0 , and
                                      dt 2
Theoretical competition                                                                      Solution: Question 1

26 April 2009                                                                                              Page 3 of 7
-------------------------------------------------------------------------------------------------------------------------
                                               ⎛ Rα ⎞
                             θ eq = arcsin ⎜         ⎟                    …………..(x)
                                               ⎝ 2g ⎠
1.7)                                       Y
                                                                    showing forces acting on m
                                                   M
                                      g

                                                        R               X
                                           O                        φ
                                               θ            m
                                                        ψ
                                                                f

                                                                N
                                                   mg
       From the equation (i) we get, after changing the directions of ψ and φ ,

                   d           R d     ⎛ R−r ⎞ d
                      ψ    =        φ +⎜     ⎟ θ                         …………..(xi)
                   dt          r dt    ⎝ r ⎠ dt
       The equations of motion of m and M are:
                   1 2 d2
                     mr      ψ       = − fr                              …………..(xii)
                   2    dt 2
                          d2
                   MR 2        φ = + fR                                  …………..(xiii)
                          dt 2
Method 1: (Angular Momentum)
       The effect of gravity on the system as a whole is to change its angular momentum:
       d ⎡      d   1    d                2 d   ⎤
          ⎢ MR 2 φ + mr 2 ψ − m ( R − r )     θ ⎥ = + mg ( R − r ) sin θ ……..(xiv.1)
       dt ⎣     dt  2    dt                 dt ⎦

                   d2           m(R − r) d2
       Hence            φ = −                   θ                           …………..(xv.1)
                   dt 2       ( 2M + m ) R dt 2
               ⎛      1 ⎞ d2                  ⎛     3 ⎞ d2
       and     ⎜ MR +  mr ⎟ R  φ − m ( R − r )⎜ R −  r⎟      θ = mg ( R − r ) sin θ                ……..(xvi.1)
               ⎝      2 ⎠ dt 2                ⎝     2 ⎠ dt 2
       Combining the last two equations:
                            d2                 g ( 2M + m )
                                 θ   = −                        sin θ               ………..(xvii.1)
                            dt 2           ( R − r ) ( 3M + m )
       For a small-amplitude oscillation we put sin θ ≈ θ and equation (xvii) is reduced to:
Theoretical competition                                                                      Solution: Question 1

26 April 2009                                                                                              Page 4 of 7
-------------------------------------------------------------------------------------------------------------------------
                            d2                 g ( 2M + m )
                                 θ = −                          θ                   ………..(xviii.1)
                            dt 2
                                           ( R − r ) ( 3M + m )
     The period of this oscillation is, therefore,

                                    ⎛ R − r ⎞ ⎛ 3M + m ⎞
                          T    = 2π ⎜       ⎟⎜         ⎟
                                    ⎝ g ⎠ ⎝ 2M + m ⎠
Method 2: (Newton’s law)
     From Newton’s law:                      mg sin θ − f = ma

                                                                    d 2θ
                                    mg sin θ − f = − m ( R − r )                   ……..(xiv.2)
                                                                    dt 2
                                              d 2φ
     From equation (xiii):          f = MR
                                              dt 2
     By substituting this into equation (xiv.2) we have
                                                       d 2φ               d 2θ
                                    mg sin θ = MR           − m ( R − r )          ……..(xv.2)
                                                       dt 2               dt 2
     From equations (xi) (xii) and (xiii), we then have
                                    d 2φ        m ⎛ R − r ⎞ d 2θ
                                         = −         ⎜    ⎟                        ……..(xvi.2)
                                    dt 2     2 M + m ⎝ R ⎠ dt 2

                                                      Mm           d 2θ         d 2θ
     Then (xv.2) becomes            mg sin θ = −            (R − r) 2 − m(R − r) 2
                                                     2M + m        dt           dt
                                    d 2θ       g 2M + m
                                         =−                  sin θ                 ……..(xvii.2)
                                    dt 2
                                            ( R − r ) 3M + m
     For a small-amplitude oscillation we put sin θ ≈ θ and equation (xvii) is reduced to:
                           d2                 g ( 2M + m )
                                θ   = −                         θ                   ……..(xviii.2)
                           dt 2            ( R − r ) ( 3M + m )
     The period of this oscillation is, therefore,

                                    ⎛ R − r ⎞ ⎛ 3M + m ⎞
                          T    = 2π ⎜       ⎟⎜         ⎟
                                    ⎝ g ⎠ ⎝ 2M + m ⎠


Method 3: (Conservation of Energy)
     The total mechanical energy of the system is given by
Theoretical competition                                                                      Solution: Question 1

26 April 2009                                                                                              Page 5 of 7
-------------------------------------------------------------------------------------------------------------------------
                               2                        2               2
               1      ⎛ dφ ⎞ 1 ⎛ 1 2 ⎞ ⎛ dψ ⎞ 1 ⎛ dθ ⎞
                                                     ⎟ ( R − r ) + mg ( R − r )(1 − cos θ ) .
                                                                2
          E=     MR 2 ⎜    ⎟ + ⎜ mr ⎟ ⎜     ⎟ + m⎜
               2      ⎝ dt ⎠ 2 ⎝ 2   ⎠ ⎝ dt ⎠ 2 ⎝ dt ⎠
                                                                                                         ……..(xiv.3)
     We now use conservation of mechanical energy,

       2 ⎛ dφ ⎞ ⎛ d φ ⎞ ⎛ 1 2 ⎞ ⎛ dψ ⎞ ⎛ d ψ ⎞ ⎛ dθ ⎞ ⎛ d θ ⎞                        ⎛ dθ ⎞
                   2                      2              2
dE
                                                    ⎟ ⎜ 2 ⎟ ( R − r ) + mg ( R − r ) ⎜
                                                                     2
   = MR ⎜     ⎟ ⎜ 2 ⎟ + ⎜ mr ⎟ ⎜     ⎟⎜ 2 ⎟ + m⎜                                          ⎟ sin θ = 0
dt       ⎝ dt ⎠ ⎝ dt ⎠ ⎝ 2    ⎠ ⎝ dt ⎠ ⎝ dt ⎠  ⎝ dt ⎠ ⎝ dt ⎠                         ⎝ dt ⎠


                                                                                                          ……..(xv.3)
     By applying the equations (xi), (xii), and (xiii), we have
                     d 2φ     R−r   m    d 2θ                     d 2ψ R − r 2M d 2θ
                          = −                               and        =                .                ……..(xvi.3)
                     dt 2      R 2 M + m dt 2                     dt 2   r 2 M + m dt 2
     Without loss of generality, we can integrate both equations and obtain
                        dφ    R−r  m    dθ     dψ R − r 2 M dθ
                           =−              and     =                                                    ……..(xvii.3)
                        dt     R 2M + m dt      dt   r 2M + m dt
     by imposing the condition that all bodies have zero linear and angular velocities at the same
     particular instant. And by substituting these relations into the equation above from conservation
     of energy, we have
         ⎡ Mm           2M 2       ⎤ ⎛ dθ ⎞ ⎛ d 2θ ⎞                    ⎛ dθ ⎞
                      +         + 1⎥ ⎜    ⎟ ⎜ 2 ⎟ (R − r) = − g (R − r) ⎜    ⎟ sin θ .
                                                         2
         ⎢                                                                                             ……..(xviii.3)
         ⎣ (2 M + m) (2M + m)
                    2         2
                                   ⎦ ⎝ dt ⎠ ⎝ dt ⎠                      ⎝ dt ⎠
                                                                       dθ
    This equation must hold at all time, so we can divide                 on both sides. After some
                                                                       dt
simplifications, we have
                                             d2                 g ( 2M + m )
                                                  θ    = −                        sin θ                  ……..(xix.3)
                                             dt 2            ( R − r ) ( 3M + m )
     For a small-amplitude oscillation we put sin θ ≈ θ , and the above expression is reduced to:
                                              d2                 g ( 2M + m )
                                                   θ   = −                         θ                      ……..(xx.3)
                                              dt 2            ( R − r ) ( 3M + m )
     The period of this oscillation is, therefore,

                                                    ⎛ R − r ⎞ ⎛ 3M + m ⎞
                                         T     = 2π ⎜       ⎟⎜         ⎟
                                                    ⎝ g ⎠ ⎝ 2M + m ⎠
Theoretical competition                                                                      Solution: Question 1

26 April 2009                                                                                              Page 6 of 7
-------------------------------------------------------------------------------------------------------------------------
Note that, although it seems like we have more than one degree of freedom, there exists only one
mode of oscillations because the coupling to the potential energy is only through the angle θ .
                                                                                     dφ     dψ
However, we have a freedom to impose any constant angular velocity                      and     (and the
                                                                                     dt      dt
condition for rolling without slipping), and this will not alter the period of the oscillations. This
corresponds to a freedom in choosing different initial conditions of the motion of the system.


1.8) When M is made to rotate steadily at an angular velocity Ω the equation (vi) becomes
                              3        d2
                                (R − r) 2 θ        = − g sin θ                   …………..(xix)
                              2        dt
     which implies that m remains at θ = 0 if m does not oscillate.
     Hence the equation (i) is reduced to
                                          R
                          ψ       =         φ
                                          r
                           d                R dφ            R
     and                      ψ       =             =         Ω                  …………..(xx)
                           dt               r dt            r
                                                                                 R
     This means that m is rotating at a constant angular velocity                  Ω prior to the instant when M
                                                                                 r
     is stopped.


     After that instant m will accelerate itself by way of frictional impulse. This acceleration
     process lasts for only a short time due to the high value of frictional coefficient ( μ ) . To

     simplify the calculation we will take to lower surface of M to be flat.

                                                                  m is skidding forwards
                          g                                  m
                                            v
                                                        •
                                                    ω             fm = μmg


                                  d
                              m      v = + fm                                   …………..(xxi)
                                  dt
                                  d                      1
                           I CM      ω = − f m r , I CM = mr 2                  …………..(xxii)
                                  dt                     2
Theoretical competition                                                                     Solution: Question 1

26 April 2009                                                                                              Page 7 of 7
-------------------------------------------------------------------------------------------------------------------------
     By solving these last two equations for v ( t ) and ω ( t ) with initial conditions v ( 0 ) = 0 and

                R
     ω ( 0) =     Ω , and imposing the condition v′ ( t ) = ω ′ ( t ) r for the onset of pure rolling we get
                r
                                    1           1R
                           v′ =       RΩ, ω ′ =    Ω                         …………..(xxiii)
                                    3           3r
     From now on, the cylinder m will roll up the side of the cylindrical wall. And since frictional
     force does not do work in pure rolling we can use the principle of conservation of energy.
           1 2 1                            1       1
             mv + I CMω 2 + 2mg ( R − r ) =   mv′2 + I CMω ′2                 …………..(xxiv)
           2     2                          2       2
                                           v2
     We have also                   N = m     − mg                            …………..(xxv)
                                          R−r
                                                              2
                                        ⎛ m ⎞⎛ RΩ ⎞ 11
     ∴                              N = ⎜       ⎟⎜   ⎟ − mg                   …………..(xxvi)
                                        ⎝ R − r ⎠⎝ 3 ⎠ 3
     m will reach the top if N ≥ 0 .

                                                 ⎛ R−r ⎞
     Hence                         Ω ≥      33 g ⎜ 2 ⎟                        …………..(xxvii)
                                                 ⎝ R ⎠




                                            *********************
