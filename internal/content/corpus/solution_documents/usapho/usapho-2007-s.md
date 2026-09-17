---
id: solution-document-usapho-2007-s
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2007_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [usapho-2007-a1, usapho-2007-a2, usapho-2007-a3, usapho-2007-a4, usapho-2007-b1, usapho-2007-b2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/usapho/2007_S.pdf."
---

2007 Semifinal Exam Solutions                                                                      1




           AAPT               UNITED STATES PHYSICS TEAM
            AIP               2007


Solutions to Problems

Part A
Question 1
  a. There is a high degree of symmetry present. Points b, c, and e are at the same potential;
     similarly, points d, f , and g are at the same potential. The circuit then reduces to a series
     connection of three parallel resistor clusters.
     The three parallel clusters have effective resistances of 1 Ω, 8/5 Ω, and 1/3 Ω. The effective
     resistance of the circuit is then 44/15 Ω.

  b. After a long time no current will flow through the branches of the circuits containing capaci-
     tors. The circuit then reduces to a parallel connection of three series resistor clusters.
     The effective resistance of the circuit is 4 Ω, the current through the circuit is then

                                          (12 V)/(4 Ω) = 3 A.                                  (A1-1)

     The three branches are identical; each then carries 1 A.
     The potential drop across each capacitor is the same as the potential drop across the 8 Ω
     resistors, so
                                      VC = (1 A)(8 Ω) = 8 V.                            (A1-2)
     Finally, the charge on each capacitor is

                                       Q = (15 µF)(8 V) = 120 µC.                              (A1-3)

Question 2
  a. Two parts, solved individually.

       i. Isochoric compression:
                                                  Pf   Tf
                                                     =    ,                                    (A2-1)
                                                  Pi   Ti
          so
                                                        Pcr
                                                  T =       T0 .                               (A2-2)
                                                        P0




                  Copyright c 2007 American Association of Physics Teachers
2007 Semifinal Exam Solutions                                                                     2


       ii. Adiabatic compression:
                                                  P V γ = const,                             (A2-3)
          where γ = CP /CV = (CV + 1)/CV = 5/3 for a monatomic gas. Consequently

                                                  P0 Lγ0 = Pcr Lγ ,                          (A2-4)

          and then                                                  5/3
                                                              P0
                                                          
                                                 L = L0                    .                 (A2-5)
                                                              Pcr
  b. The normal pressure on the bullet comes from
                                                        δr
                                                  P =      E.                                (A2-6)
                                                        rc
     Therefore, the normal force on the bullet is
                                                  δr
                                          FN =       E × (2πrc h),                           (A2-7)
                                                  rc
     and finally the force of friction is µFN . The force due to the pressure difference between the
     inside of the barrel and the outside must equal the normal force, so

                                      (πrc2 )(Pcr − P0 ) = 2πhµ δr E,                        (A2-8)

     and then
                                                          2µEh
                                           Pcr = P0 +          δr.                           (A2-9)
                                                           rc2

Question 3
  a. If the sphere has radius r, it has charge
                                                     4
                                                  q = πρr3                                   (A3-1)
                                                     3
     and thus its surface is at electrostatic potential

                                                     q      ρr2
                                            V =           =                                  (A3-2)
                                                   4π0 r   30

     To increase the radius by dr, an additional charge dq = 4πr2 dr must be brought in from
     infinity, requiring work
                                                    4πr4 ρ2
                                      dU = V dq =           dr                        (A3-3)
                                                      30
     Thus to grow the sphere from r = 0 to r = R requires

                                                 4πr4 ρ2      4πR5 ρ2
                                           Z R
                                      U=                 dr =                                (A3-4)
                                            0      30         150




                  Copyright c 2007 American Association of Physics Teachers
2007 Semifinal Exam Solutions                                                                     3


  b. Each drop has volume Vd = 43 πR3 , so the number of drops is

                                                     Vf     Vf
                                               n=       = 4 3                                (A3-5)
                                                     Vd   3 πR

     Since we are ignoring inter-drop forces, the total energy of the drops is simply the sum of the
     energies of each individual drop:

                                                      Vf 4πR5 ρ2   R 2 ρ2
                                   Ue,tot = nU = 4       3 15
                                                                 =        Vf                 (A3-6)
                                                    3 πR      0     50

  c. Each drop has surface area 4πR2 and thus surface tension energy 4πR2 γ. As before, the total
     energy due to surface tension is just the sum of the energies of the individual drops:
                                                                    Vf     3γ
                                   Us,tot = 4πR2 γn = 4πR2 γ 4         3
                                                                         =    Vf             (A3-7)
                                                                  3 πR     R

  d. The total potential energy from both sources is
                                                                      !
                                                     R2 ρ2 3γ
                                          Utot =          +               Vf                 (A3-8)
                                                      50   R

     Equilibrium is reached when the total energy is a minimum; since U → ∞ at both R → 0
     and R → ∞, it must have an interior minimum.
                                                                          !
                                          d           2Rρ2  3γ
                                            Utot =         − 2                Vf             (A3-9)
                                         dR            50  R

     Setting this equal to zero,
                                                   2Rρ2    3γ
                                                        = 2                                 (A3-10)
                                                    50   R
                                                        15γ0
                                                   R3 =                                     (A3-11)
                                                         2ρ2
                                                                 1
                                                         15γ0
                                                     
                                                                  3
                                               R=                                           (A3-12)
                                                          2ρ2

Question 4
  a. The electric field between the plates is given by E = V /d. The force on the charged ball is
     then F = Eq = V q/d. The acceleration of the ball is a = V q/md.
     Kinematics gives us d = at2 /2 for the time of flight. So
                                               q          q
                                          t=    2d/a =      2md2 /qV .                       (A4-1)

  b. The kinetic energy collected by a ball will be K = qV as it moves between the plates. That’s
     what will be dissipated.


                  Copyright c 2007 American Association of Physics Teachers
2007 Semifinal Exam Solutions                                                                    4


  c. The current is given by I = ∆Q/∆t. The total number of balls is N = n0 A, where A is the
     surface area of a plate. The charge ∆Q is then ∆Q = n0 qA, so the current is
                                               ∆Q     n0 qA
                                         I=       =p          .                              (A4-2)
                                               ∆t    2md2 /qV

     We can’t stop here, since this is not in terms of the allowed variables. The problem is A and
     d, but since C = 0 A/d, we have

                                                             n0 qA
                                           I =          p            ,                       (A4-3)
                                                            2md2 /qV
                                                                 s
                                                        A             qV
                                               =          n0 q           ,                   (A4-4)
                                                        d             2m
                                                                  s
                                                        C             qV
                                               =           n0 q          .                   (A4-5)
                                                        0            2m

  d. R = V /I, so                                                  s
                                             V   0 V                   2m
                                          R=   =                           .                 (A4-6)
                                             I   Cn0 q                  qV
     We can simplify, slightly, with                          s
                                                0                2mV
                                            R=                        .                      (A4-7)
                                               Cn0 q               q

  e. P = V I, so                                   s           s
                                         C             qV          0 2 n0 2 C 2 q 3 V 3
                                P =V        n0 q          =                              .   (A4-8)
                                         0            2m                  2m

Part B
Question 1
  a. To not slip, from a free-body diagram, we must have

                                           µmg cos θ ≥ mg sin θ                              (B1-1)

     so
                                                   µ ≥ tan θ.                                (B1-2)
     Therefore µc = tan θ and hence
                                                            tan θ
                                                   µ=             .                          (B1-3)
                                                              2
  b. In one cycle the energy input into the system is

                                                   M gL sin θ,                               (B1-4)

     the energy of the block dropping.



                    Copyright c 2007 American Association of Physics Teachers
2007 Semifinal Exam Solutions                                                                     5


     The energy loss on the way up is
                                               Lµmg cos θ                                    (B1-5)
     and the energy loss on the way down is

                                           Lµ(m + M )g cos θ                                 (B1-6)

     Thus
                              M gL sin θ = Lµmg cos θ + Lµ(m + M )g cos θ                    (B1-7)
     and since 2µ cos θ = sin θ,
                                                 m m+M
                                        M      =    +   ,                                    (B1-8)
                                                  2   2
                                               = 2m,                                         (B1-9)
                                         R = M/m = 2.                                       (B1-10)

  c. The period of a mass m oscillating on a spring of spring constant k is
                                                        r
                                                            m
                                               T = 2π         .                             (B1-11)
                                                            k
     In this case, the friction force is constant on both the up and down trips, and so each trip is
     simple harmonic (with different equilibrium points). Hence
                                                   r              r
                                                     m                3m
                                         T0    = π      +π               ,                  (B1-12)
                                                     k                 k
                                                    r
                                                      m
                                         T0    = 2π     ,                                   (B1-13)
                                                      k
                                                     √
                                                 1+ 3
                                     T0 /T 0   =         .                                  (B1-14)
                                                    2

  d. As mentioned in part (c), both the up and down trips are simple harmonic, this time with
     a mass of m both ways. The equilibrium points for the two trips are different, however. On
     the up trip, the equilibrium point is clearly at a distance L/2 from B, since the plate stops
     at both B and A and hence those are the endpoints of the oscillation and the equilibrium is
     halfway between. For the trip down, the equilibrium point will shift by a distance y such that

                                      ky = 2µmg cos θ = mg sin θ                            (B1-15)

     because 2µmg cos θ is the difference between the friction forces on the trip up and the trip
     down.
     The place where the plate finally comes to a stop is the first place that is at the end of an
     oscillation (either up or down) and where the total force being exerted by gravity and the
     spring is less than the maximal force of friction. For that to happen, the plate needs to not
     have gone past the other equilibrium point during that oscillation.
     So we start by determining where the endpoints of the oscillations are. For the first trip up
     these are B and A. For the following trip down, the plate stops at a distance of (2mg sin θ)/k
     from B (because the equilibrium shifts up by (mg sin θ)/k. For the following trip up, the

                  Copyright c 2007 American Association of Physics Teachers
2007 Semifinal Exam Solutions                                                                  6


     plate stops a distance L − (2mg sin θ)/k from B, since the equilibrium point is again in the
     middle of the incline. And so forth.
     Thus the stopping points are located at
                                   n(2mg sin θ)/k and L − n(2mg sin θ)/k                 (B1-16)
     for integer n. The plate will stop permanently once either
                                            n(2mgsin)/k > L/2                            (B1-17)
     or
                                  L − n(2mg sin θ)/k < L/2 + (mg sin θ)/k,               (B1-18)
     whichever happens first. (The first condition corresponds to going down and ending up above
     the midpoint at the end of the down trip, the second condition corresponds to going up and
     stopping below the upper equilibrium.) The second condition can be rewritten as
                                                1
                                                
                                           n+     (2mg sin θ)/k > L/2.                   (B1-19)
                                                2

Question 2
  a. Magnetic Moments
          i. From Coulomb’s Law,
                                                               e2
                                                      F =                                 (B2-1)
                                                             4π0 R2
       ii. For circular motion,
                                                me v 2
                                                F =    = me Rω02 ,                        (B2-2)
                                                  R
            The force is provided by the Coulomb force, so
                                                                  e2
                                            me Rω02 =                   ,                 (B2-3)
                                                                4π0 R2
                                                                s
                                                                        e2
                                                     ω0 =                                 (B2-4)
                                                                    4π0 me R3
      iii. From the law of Biot and Savart,
                                                      µ0 i d~s × ~r
                                                            I
                                           ~e =
                                           B                        ,                     (B2-5)
                                                      4π        r3
                                                      µ0 i          R
                                           Be =            2πR 2            ,             (B2-6)
                                                      4π       (z + r2 )3/2
                                                      µ0 iR2
                                                 ≈           .                            (B2-7)
                                                       2z 3
            For the current, i, we can write
                                                            q   eω0
                                                      i=      =     .                     (B2-8)
                                                            t   2π
            Then
                                                            µ0 eω0 R2
                                                     Be =             .                   (B2-9)
                                                              4πz 3

                    Copyright c 2007 American Association of Physics Teachers
2007 Semifinal Exam Solutions                                                                 7


      iv. By substitution,
                                                         eω0 R
                                                m=             .                        (B2-10)
                                                           2
  b. Diamagnetism

       i. If half go one way and half go the other, M = 0.
       ii. Additional force from magnetism,

                                           FB = qvB0 = eRωB0                            (B2-11)

          modifies previous central force problem to give

                                                    e2
                                      me Rω 2 =           ± eRω0 B0 ,                   (B2-12)
                                                  4π0 R2
          where the positive sign corresponds to anticlockwise motion, the negative to clockwise
          motion.
          A little math,

                                         me R(ω 2 − ω02 ) = ±eRωB0 ,                    (B2-13)
                                   me (ω − ω0 )(ω + ω0 ) = ±eωB0 ,                      (B2-14)
                                          me (∆ω)(2ω0 ) = ±eω0 B0 ,                     (B2-15)

          where in the last line we have used the approximation ω ≈ ω0 . Then
                                                             eB0
                                                ∆ω = ±           .                      (B2-16)
                                                             2me

      iii. The emf is given by
                                                ∆Φ     ∆n
                                              E =n   =     Φ,                          (B2-17)
                                                 ∆t    ∆t
          but ∆n/∆t is a measure of the number of turns made by the electron in a time interval
          ∆t, so
                                          ∆n      ω0 R    ω0
                                               =       =     .                         (B2-18)
                                           ∆t     2πR     2π
          Then
                                           ω0           1
                                      E=      B0 πR2 = ω0 b0 R2 .                      (B2-19)
                                           2π           2
      iv. The change in kinetic energy is given by
                                                    1
                                                                    
                                       ∆K = ∆         me ω 2 R 2 ,                      (B2-20)
                                                    2
                                              = me R2 ω ∆ω,                             (B2-21)
                                                         2
                                              ≈ me R ω0 ∆ω,                             (B2-22)
                                                            eB0
                                                               
                                                        2
                                              = me ω 0 R ±        ,                     (B2-23)
                                                            2me
                                              = eE.                                     (B2-24)


                  Copyright c 2007 American Association of Physics Teachers
2007 Semifinal Exam Solutions                                                          8


       v. ∆M = N δm, where N is the number of atoms, and ∆m the change in magnetic moment
          in each. The change is
                                                 eω0 R
                                                           
                                        ∆m = ∆          .                         (B2-25)
                                                    2
                                             eR
                                           =     ∆ω,                              (B2-26)
                                              2
                                             e2 R2 B0
                                           =          ,                           (B2-27)
                                               4me
          so
                                                   e2 R2 B0
                                         ∆M = N             .                     (B2-28)
                                                     4me
      vi. Repelled, by Lenz’s law.




                 Copyright c 2007 American Association of Physics Teachers
