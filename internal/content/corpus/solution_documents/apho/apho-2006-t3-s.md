---
id: solution-document-apho-2006-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2006/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2006-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2006/T3_S.pdf."
---

7th Asian Physics Olympiad                                                    Theoretical Question 3 /Solutions   Page 1/6




                                     Theoretical Question 3
                                                     Solutions

                                                    A
    The change of the pressure is related to the change in the density via

                                                        ∆V    ∆ρ
                                           ∆P = − K        =K    ,                                                (1)
                                                        V     ρ0

where ρ 0 is the density of water at the surface.

                                                        ⎛       ∆ρ ⎞              ∆P ⎞
                                 ρ = ρ 0 + ∆ρ = ρ 0 ⎜⎜1 +          ⎟⎟ = ρ 0 ⎛⎜1 +    ⎟,                           (2)
                                                        ⎝       ρ0 ⎠         ⎝    K ⎠

where ∆P ≈ P (we neglect the atmospheric pressure). Then

                                                            ⎛     P( x) ⎞
(A1)                                         ρ ( x ) = ρ 0 ⎜1 +         ⎟.                                        (3)
                                                            ⎝      K ⎠

    The change of the hydrostatic pressure with the depth equals

                                                      dP                          P ( x)
                             dP = g ⋅ ρ ( x ) dx ,       = gρ ( x ) = gρ 0 + gρ 0        ,                        (4)
                                                      dx                           K

                                           dP ( x) gρ 0
                                                  −     P ( x ) = gρ 0 .                                          (5)
                                            dx      K

    The solution of this differential equation with boundary condition P (0) = 0 is

                                                       ⎛    gρ      ⎞
                                             P( x) = K ⎜ exp 0 x − 1⎟.                                            (6)
                                                       ⎝     K      ⎠

            gρ 0
    Since        H << 1 , we can use the expansion
             K
                                                                  z2
                                             exp z ≈ 1 + z +         + ...,                                       (7)
                                                                  2!
    thus
                                                                 1
                                           P ( x ) ≅ gρ 0 x +      (gρ 0 x )2                                     (8)
                                                                2K

    The last formula can be simply derived using the method of successive iterations. First, the
pressure can be estimated without compressibility taken into account:

                                                      P0 ( x) = gρ 0 x.                                           (9)

7th Asian Physics Olympiad                                                                Theoretical Question 3 /Solutions   Page 2/6

    Correction to the density in the first approximation can be obtained using P0 ( x ) :

                                                                                  gρ 0 x
                                                           ρ1 ( x) = ρ o (1 +            ).                                   (10)
                                                                                   K

    Now, correction to pressure can be obtained using ρ1 ( x) :

                                                      H
                                                                                         1
                                          P1 ( H ) = ∫ ρ1 ( x) gdx = gρ 0 x +              (gρ 0 x )2 ,                       (11)
                                                      0
                                                                                        2K
as obtained earlier.
    Putting in the numerical values, we get

(A2)                                  P( H ) = (1098 ⋅10 5 + 28,7 ⋅10 5 ) Па ≈ 1,13 ⋅108 Па.                                  (12)



                                                                     B
    The total work done by the gases is zero. Thus at any moment the total internal energy equals the
original value:

                                      m1              m2                 m1               m2
                                            CV T1 +        CV T2 =             CV T10 +        CV T20,                        (13)
                                      µ1              µ2                 µ1               µ2

where µ1 = 2 g / mole and µ 2 = 32 g / mole are molar masses of hydrogen and oxygen, and СV=5R/2
is the molar heat capacity of diatomic gas. The final temperature of the system is

                                                      m1            m2
                                                           T10 +         T20
                                                      µ1            µ2
(B1)                                          T=                               = 325 K .                                      (14)
                                                           m1       m2
                                                                +
                                                           µ1       µ2

   The temperature of oxygen decreases, and the amount of heat Q is transferred to hydrogen by heat
conduction. The piston will move in the direction of the oxygen, thus the hydrogen does a positive
work А>0, and the change of the internal energy of oxygen is ∆U = A − Q . On the other hand,

                                                           m2 5
                                                ∆U =            R (T − T20 ) = −779 J .                                       (15)
                                                           µ2 2

    To find А, let us prove that the pressure P doesn’t change. Differentiating the equations of the state
for each gas, we get

                                     µ1                                            µ2
                             ∆T1 =          (P∆V + V1∆P ) ,              ∆T2 =            (− P∆V + V2 ∆P ).                   (16)
                                     m1 R                                         m2 R

where Vi are the gas volumes, and ∆V = ∆V1 = −∆V2 is the change of the volume of the hydrogen.
Differentiating (1), we get

7th Asian Physics Olympiad                                                 Theoretical Question 3 /Solutions   Page 3/6



                                          m1           m2
                                               ∆T1 +        ∆T2 = 0.                                           (17)
                                          µ1           µ2

Substituting (2) into (3), we obtain (V1+V2)·∆P = 0, thus

(B2)                                           Pf /Pi= 1.                                                      (18)

Then the work done by the hydrogen is

                                               m2               m2
                              A = P ⋅ ∆V = −        R ⋅ ∆T2 =          R (T20 − T ) = 312 J .                  (19)
                                               µ2                µ2

The total amount of heat transferred to hydrogen is

(B3)                                      Q = A − ∆U = 1091J .                                                 (20)



                                                        C

The electric field acting on the plate γ before the collision is

                                                            Q−q
(C1)                                                E1 =           .                                           (21)
                                                            2ε 0 S

The force acting on the plate is

                                             F1 = E1Q =
                                                             (Q − q )Q .                                       (22)
                                                               2ε 0 S

The work done by the electric field before the collision is

                                             A1 = F1d =
                                                            (Q − q )Qd .                                       (23)
                                                               2ε 0 S

The charge will get redistributed between two touching conducting plates during the collision. The
values of the charges can be obtained from the condition that the electric field between the touching
plates vanishes. If one assumes that the plate γ is on the right side, the left surface of the combined
plate will have the charge

(С2a)                                            Qβ = Q + q / 2,                                               (24)

and the right surface will have the charge

(C2b)                                                  Qγ = q / 2 .                                            (25)

7th Asian Physics Olympiad                                                Theoretical Question 3 /Solutions   Page 4/6

These charges remain on the plates after the collision is over. Now the force acting on the plate γ
equals F2 = E2 q / 2 , where E2 = (q / 2) / (2ε 0 S ) . The work done by field E2 is

                                                              q2d
                                                A2 = F2 d =          .                                        (26)
                                                              8ε 0 S

The total work done by the electric fields is

                                                                            2
                                                           d ⎛       q⎞
                                        A = A1 + A2 =            ⎜Q − ⎟ .                                     (27)
                                                          2ε 0 S ⎝   2⎠

Velocity at the distance d can be calculated using the following relation:

                                                      mυ 2
                                                           = A.                                               (28)
                                                       2

Substituting (5) into (6), we finally get

                                                  ⎛      q⎞   d
(С3)                                         υ = ⎜Q − ⎟             .                                         (29)
                                                  ⎝      2 ⎠ mε 0 S




                                                         D
    First one has to determine the types of the lenses. If both lenses are negative, one always obtains a
direct imaginary image. If one lens is positive and the other is negative, three variants are possible: an
inversed real image, a direct imaginary image or an inversed imaginary image, all contradicting the
conditions of the problem. Only the last variant is left – two positive lenses. The first lens creates an
inversed real image, and the second one inverts in once more, creating the direct real image. Using the
lens equations, the magnifications of the lenses can be written as

                                                F1                     F2
                                      Γ1 =           ;       Γ2 =            ,                                  (30)
                                             d1 − F1                d 2 − F2

where d1 is the distance from the object to the first lens, d 2 = L − f1 is the distance from the image of
the first lens to the second lens, and f1 is the distance from the first lens to the first image. The total
magnification of the system is Γ′ = Γ1 ⋅ Γ 2 . Using the expression for d2, inverted magnification
coefficient can be written as

                                      1 d1 [L − ( F1 + F2 )] L
                                         =                  −    + 1.                                           (31)
                                      Γ'       F1 F2          F2

One notices from this expression that if two lenses are exchanged, the first term stays invariant, and
only the second term changes. Thus the expression for the inverted magnification in the second case is:

7th Asian Physics Olympiad                                       Theoretical Question 3 /Solutions   Page 5/6

                                        1 d1 [L − ( F1 + F2 )] L
                                             =                − + 1.                                 (32)
                                        Γ' '     F1 F2         F1

Subtracting these two formulas, we get:

                                      1 1     ⎛1 1 ⎞
                                        − = L ⎜ − ⎟ = L( D1 − D2 );                                  (33)
                                      Γ′ Γ′′  ⎝ F1 F2 ⎠

                                    1⎛ 1 1 ⎞       1 ⎛ 1⎞     1 3
                        D1 − D2 =     ⎜ ′ − ′′ ⎟ =   ⎜1 − ⎟ =   ⋅ = 3 diopters.                      (34)
                                    L ⎝ Γ Γ ⎠ 0, 25 ⎝ 4 ⎠ 0, 25 4

7th Asian Physics Olympiad                                     Theoretical Question 3 /Solutions   Page 6/6



                                         Mark Distribution

           Total       Partial
 No                                                            Contents
            Pt           Pt
  A         2.5         0.5                                    Equation
                        1.5        Differential   1.0              Equation (4) or (5)
                                    equation
                                                  0.5                    Equation (6)
                                     method
                                    Iterative     0.5                         P0 ( x )
                                     method       0.5                         ρ1 ( x)
                                                  0.5                         P1 ( H )
                             0.5                        Numerical value of P(H)
  B         2.5              0.5                         Numerical value of T
                             1.0                          Constant pressure
                             0.3                        Numerical value of ∆U
                             0.3                         Numerical value of A
                             0.4                         Numerical value of Q
  C         2.5              0.5                                   E1
                             0.5                                   Qβ
                             0.5                                  Qγ
                             0.5                  Total work by electric fields
                             0.5                    Answer for final velocity
  D         2.5              1.0                         Signs of lenses
                             0.5           Expression for the magnification coefficient
                             1.0                    Final answer for D1 − D2
