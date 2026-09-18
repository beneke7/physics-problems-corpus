---
id: solution-document-inpho-2023-s
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2023_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [inpho-2023-a1, inpho-2023-a2, inpho-2023-a3, inpho-2023-a4, inpho-2023-a5]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/inpho/2023_S.pdf."
---

Indian National Physics Olympiad (INPhO)-2023
               HOMI BHABHA CENTRE FOR SCIENCE EDUCATION
                      Tata Institute of Fundamental Research
                  V. N. Purav Marg, Mankhurd, Mumbai, 400 088

                                           Solutions

Date: 29 January 2023
Time: 09:00-12:00 (3 hours)                                                     Maximum Marks: 60
Instructions                                               Roll No.:




  1. This booklet consists of 19 pages and total of 5 questions. Write roll number at the top wherever
     asked.

  2. Booklet to write the answers is provided separately. Instructions to write the answers are on the
     Answer Booklet.




               HB
  3. Non-programmable scientific calculators are allowed. Mobile phones cannot be used as calcula-
     tors.

  4. Please submit the Answer Sheet at the end of the examination. You may retain the
     Question Paper.




                 C2     Table of Constants
 Speed of light in vacuum
 Planck’s constant
                                   c
                                   h
                                   –
                                   h
                                         3.00 × 108 m·s−1
                                         6.63 × 10−34 J·s
                                         h/2π
                                         6.67 × 10−11 N·m2 ·kg
                                                               −2




                   3
 Universal constant of Gravitation G
 Magnitude of electron charge
 Rest mass of electron
 Value of 1/4π 0
 Avogadro’s number
 Acceleration due to gravity
 Universal Gas Constant
                                   e
                                   me
                                         1.60 × 10−19 C
                                         9.11 × 10−31 kg
                                         9.00 × 109 N·m2 ·C−2
                                   NA 6.022 ×1023 mol−1
                                   g
                                   R
                                   R
                                         9.81 m·s−2
                                         8.31 J· K−1 ·mol−1
                                         0.0821 l·atm·mol−1 ·K−1
 Boltzmann constant                KB 1.3806 × 10−23 J·K−1
 Permeability constant             µ0    4π × 10−7 H·m−1
 1 Angstrom unit                   1Å    1 × 10−10 m
 1 micro unit                      1µ    1 × 10−6 units
 1 electron volt                   1 eV 1.6 × 10−19 J



                                Q No          1   2   3    4    5    Total

                          Maximum Marks       6   6   16   16   16     60


Please note that alternate/equivalent methods and different way of expressing final
solutions may exist. A correct method will be suitably awarded.


Page 2      INPhO 2023                    Questions                    Last four digits of Roll No.:

1. [6 marks] Dancing on the floor
  There are various apps that record the intensity of an audio signal. An app (WaveEditorTM here)
  displays the audio signal as a wave, whose amplitude is proportional to the audio signal’s loudness.
  A smartphone with this app recording the sound signal is kept on a uniformly built flat floor of a
  classroom.

                                                         13.832
                                               12.848

                                                               14.000




                                     11.409
                                                  13.284
                              10.260    12.244
                                                        13.602

  A perfectly small spherical steel ball is thrown up such that it almost touches the ceiling and comes
  back without hitting. The ball hits the floor and thereafter it keeps bouncing. The app records the
  sound signal produced when the ball hits the floor on every bounce. A screenshot of the recording




                   HB
  is shown. The timestamps (in seconds) of the first eight consecutive bounces are also shown next
  to the peak. For example, the app records a peak at 10.260 s when the first time the ball hits the
  floor.
  Make reasonable assumptions, when the ball hits the floor and calculate the height of the classroom
  from the given data. State your assumptions clearly.




                     C2
    Solution: The initial height of the peaks seems to be random. This might happen when the
    ball hits the floor near the phone and some time away from the phone. The time interval
    between the peaks is reducing, indicating that the ball is colliding inelastically with the floor.
    It is also not given when the app started recording the sound. If we take the timestamp of first



                       3
    peak (10.26 s) to be the true time taken for the first bounce, that will give the height of the
    room to be 131 m which is a nonphysical number for a classroom’s height.
    Since the ball and the floor both are uniformly shaped objects, we can consider that in each
    bounce, the ball loses the same amount of energy. Let the height of the room be h0 . The ball
    attains the height h1 , and h2 after the first and the second bounce respectively.


                                         E0    E1    E2
                                            =     =     = ....                                         (1.1)
                                         E1    E2    E3
                                            h0    h1
                                         ⇒     =                                                       (1.2)
                                            h1    h2
    Let the time interval between the first and the second bounce be ∆t1 and the time interval
    between second and the third bounce be and ∆t2 . This yields
                                                         h21
                                                 h0 =                                                  (1.3)
                                                         h2
    where
                                                                   2
                                                  1         ∆t1
                                              h1 = g                                                   (1.4)
                                                  2          2
                                                                   2
                                                  1         ∆t2
                                              h2 = g                                                   (1.5)
                                                  2          2


Page 3      INPhO 2023                    Questions


    Substituting Eqs. (1.4) and (1.5) in Eq.(1.3), we get

                                                 g ∆t41
                                          h0 =          = 3.06 m                                  (1.6)
                                                 8 ∆t22

    Alternate ways of solving exist. The accepted range of h0 is 2.80m − 3.12m.


2. Knock it off!
  Consider a 100 W small isotropic source of blue light of wavelength 4500Å. A metallic surface of
  1.00 cm2 and work function 2.20 eV is kept at a distance of 1.00 m from the source and oriented to
  receive normal radiation.
   (a) [2 marks] Assume that all the energy is uniformly absorbed by atoms on the top layer of the
       surface. Also, all the energy absorbed by an atom on the surface is taken up by one electron.
       The radius of the atom is 1.00Å. Estimate the time τe needed by the electron to receive 1.00
       eV of energy.

         Solution:
                                              P
                                                  π × r2 ∆t = 1eV                                 (2.1)
                                             4πR2
                                                ∆t = τ = 0.64 sec                                 (2.2)



             HB
         Time calculated using 4r2 instead of πr2 is also credited fully.

   (b) [1 marks] According to the above classical model, how many electrons are emitted by the
       metallic surface in time τe ?




               C2
         Solution: None, since the work function is 2.2eV. The electron needs another 1.41sec.

   (c) [2 marks] In quantum theory, photons are emitted and absorbed as quanta. Assuming




                 3
       photoelectric efficiency of 1%, calculate the rate of emission of electrons (Ne ) from the surface.

         Solution: Ne = 1.8 × 1013 s−1

   (d) [1 marks] Assuming further that all the emitted photoelectrons move normal to the surface
       what would be the maximum current density (Jmax ) one may expect?

         Solution:
                                                                   Ne e
                                          Current density J =
                                                                    A
         where A is the area of metallic surface.

                                         Jmax = 2.88 × 10−2 Amp/m2                                (2.3)


Page 4      INPhO 2023                   Questions             Last four digits of Roll No.:

3. [16 marks] Work in progress

   One mole of an ideal monoatomic gas goes through a linear process from P
   A to B as shown in the pressure-volume (P -V ) diagram. The temperature            A
   at A is TA = 227◦ C. The process is such that, the temperature decreases
   and the heat is continuously supplied to the gas. The ratio of the
   specific heat at the constant pressure to that at the constant volume is
                                                                                               B
   5/3. Obtain the expression for the maximum work (Wmax ) the gas can
   perform in such a process. Calculate Wmax .
                                                                                                     V


 Solution: The variation of P is linear with respect to V , hence it can be written as

                                            P = −aV + b                                             (3.1)

 where a and b are positive constants. At A,

                                               PA VA = RTA                                          (3.2)
                                     (−aVA + b)VA = R × 500                                         (3.3)

 where TA = 500 K. Using the ideal gas equation P V = RT
                                          PV   −aV 2 + bV
                                      T =    =                                                      (3.4)
                                           R       R



                   HB                dT
                                     dV
                                        =
                                          −2aV + b
                                             R
 In this process, V is increasing but the temperature is decreasing, hence
                                                dT
                                                dV
                                                   ≤0
                                                                                                    (3.5)



                                                                                                    (3.6)

 Using Eq. (3.5)


                     C2                   −2aV + b
                                             R
                                                   ≤0
                                                     b
                                                                                                    (3.7)




                       3                     =⇒ V ≥
                                                    2a
 This is the lower bound on the volume. This means if we want work done to be maximum

                                         Vmin = VA =

 Using the first law of thermodynamics dQ = dU + P dV ,

                                      dQ =
                                                R
                                                         b
                                                        2a



                                                   dT + P dV
                                                                                                    (3.8)



                                                                                                    (3.9)



                                                                                                   (3.10)
                                               γ−1
 where we use dU = CV dT and Eq.(3.2), Eq. (3.5), and γ = 5/3 in the above equation yields
                                 3R(−2aV + b)dV
                             dQ =               + (−aV + b)dV                                      (3.11)
                                      2R
                             dQ          5b
                                = −4aV +                                                           (3.12)
                             dV          2
 In the process, heat is taken and volume is also increasing. hence
                                               dQ
                                                   ≥0                                              (3.13)
                                               dV
                                                5b
                                         −4aV +    ≥0                                              (3.14)
                                                2
                                                    5b
                                             =⇒ V ≤                                                (3.15)
                                                    8a


Page 5      INPhO 2023                       Questions


 This is the upper bound on the volume. This means if we want work done to be maximum
                                                              5b
                                             Vmax = VB =                                 (3.16)
                                                              8a
 To get maximum work, The gas must expand from VA to VB
                                        Z VB               Z VB
                              Wmax =              P dV =          (−aV + b)dV            (3.17)
                                            VA              VA
                                                            5b/8a
                                            −aV 2

                                    =             + bV                                   (3.18)
                                             2              b/2a

 Substituting the limits, we get,

                                                            7 b2
                                                 Wmax =                                  (3.19)
                                                           128 a
                                            2
 Solving (−aVA + b)VA = 500R, we get ba = 500 × 4R. Substituting this in the above equation, we
 get,

                                                 Wmax ≈ 909 J                            (3.20)




              HB
                C2
                  3


Page 6       INPhO 2023                       Questions           Last four digits of Roll No.:

4. Electrostatic TikTok
   Consider a fixed infinite vertical thin rod (shown by the red color in the figure below) of linear
   charge density λ along the z-axis at the origin (see figure below). A uniformly charged ring of total
   charge Q, mass M , and radius a is placed with its center at the origin in the x-y plane. Point P
   is an arbitrary point on the ring. The projection of point P on x-y plane makes an angle θ with
   respect to the x-axis in the anticlockwise direction as seen from the top.
   The ring is now given an initial angular velocity ω0 about the x-axis. We define the angle α which
   the plane of the ring makes with the x-y plane. This is illustrated by drawing line segment AB in
   the plane of the ring. Initially α = 0. Ignore gravity.
                                                   z



                                                            P            B
                                                                  α
                                                                             y
                                                   θ
                                    A

                                        x




                    HB
   You may find the following differentiation useful

                            D=
                                  d
                                  dθ
                                     [tan−1 (q tan θ)] =
                                                               1
                                                         1 + (q tan θ)2
                                                                        [q(sec2 θ)]                 (4.1)

                                                          ~ 0 ) due to the infinite rod at a point on the
(a) [1 marks] State an expression for the electric field (E
    ring when α=0 in terms of x, y and θ, and related quantities.



                      C2
      Solution: The electric field on the ring due to the infinite rod is given by

                                              E~0 =
                                                     λ(xx̂ + y ŷ)
                                                    2π 0 (x2 + y 2 )
                                                                                                  (4.2)




                        3
      Since the rod is infinite, the electric field will not depend on z.

                                      E~0 =

      The above expression simplifies to
                                                λ(a cos θx̂ + a sin θŷ)
                                              2π 0 (a2 cos2 θ + a2 sin2 θ)



                                                  λ(cos θx̂ + sin θŷ)
                                                                                                  (4.3)




                                            E~0 =                                                 (4.4)
                                                        2π 0 a


(b) [2 marks] At some instant the ring makes an angle α. Derive an expression for the electric field
    ~ due to the infinite rod at a point on the ring in terms of θ, and α.
    E

      Solution: The new coordinates of the ring are
               a cos θ                a sin θ                 a sin θ tan α
      x= p                  ,y=p                    and z = p                  .
                   2                      2
                         2
            1 + sin θ tan α                     2
                                  1 + sin θ tan α            1 + sin2 θ tan2 α

                              ~ = λ(xx̂ + y ŷ)
                              E                                                                   (4.5)
                                  2π 0 (x2 + y 2 )
                                    λ
                                         q
                                =          (1 + sin2 θ tan2 α)(cos θx̂ + sin θŷ)                 (4.6)
                                  2π 0 a


Page 7       INPhO 2023                        Questions

(c) [1 marks] Find the net force F~ acting on the ring.

                                                               Q              1
     Solution: Charge dQ in elementary length is                             2          dθ. Force on small
                                                            2π cos α (1 + sin θ tan2 α)
     element ds is
                         λ                                                   Q              1
                                q
         dF~ = EdQ
               ~   =             (1 + sin2 θ tan2 α)(cos θx̂ + sin θŷ)                    2          dθ (4.7)
                       2π 0 a                                             2π cos α (1 + sin θ tan2 α)

     which simplifies to
                                                   λQ         cos θx̂ + sin θŷ
                                     dF~ =                                                               (4.8)
                                             4π 2  0 a cos α (1 + sin2 θ tan2 α)
                                                            p


     where C = λQ/4π 2  o a. Consider

                                            C          cos θ
                                    dFx =       p                    dθ                                  (4.9)
                                           cos α (1 + sin2 θ tan2 α)
                                                Z π
                                            C                cos θ
                                      Fx =          p                   dθ                             (4.10)
                                           cos α −π (1 + sin2 θ tan2 α)
                                                                                                       (4.11)

     The integrand is an even function, hence




     using
               HB
             R 2a        Ra
                                Fx =
                                      2C
                                           Z π

                                     cos α 0


                                       Ra
                                               p
                                                      cos θ
                                                (1 + sin2 θ tan2 α)


                f (x)dx = 0 f (x)dx + 0 f (2a − x)dx
                                                                    dθ                                 (4.12)

                                                                                                       (4.13)

              0


           Fx =


     Similarly
                 C2
                  2C
                      "Z

                cos α 0
                         π/2
                                    cos θ
                             (1 + sin2 θ tan2 α)
                                                 +
                                                   Z π/2

                                                    0
                                                                cos (π − θ)
                                                         (1 + sin2 (π − θ) tan2 α)
                                                                                   #
                                                                                               =0      (4.14)




                   3                                   Fy = 0

     The total force acting on the ring is zero. Answers based on symmetric arguments will be also
     given credit.

(d) [5 marks] Find the net torque τ~ acting on the ring in terms of α and the constants only.
    Qualitatively plot torque as a function of α.
                                                                                                       (4.15)




     Solution:
                                                  dτ = ~r × dF~ (θ)                                    (4.16)
     Consider
                                             dτz = xdFy − ydFx                                         (4.17)
                                                 =0                                                    (4.18)
                                    =⇒ τz = 0                                                          (4.19)
                                    Z π
                                              aC tan α π
                                                       Z
                                                                 sin 2θ
                            τy =    zdFx τy =                                                          (4.20)
                                 −π            2 cos α −π (1 + sin2 θ tan2 α)
     Integrand is odd function, hence
                                                       τy = 0                                          (4.21)


Page 8       INPhO 2023                              Questions                          Last four digits of Roll No.:


                                       Z π
                                τx =         −zdFy                                                                      (4.22)
                                        −π
                                         Z π
                                                  a sin θ tan α            C sin θ
                                τx = −          p                               2     2
                                                                                                                        (4.23)
                                             −π  1 + sin2 θ tan2 α cos α(1 + sin θ tan θ)
     which simplifies to
                                                           Z π
                                                                     tan2 θ sin α
                                             τx = − aC                2          2 dθ                                   (4.24)
                                                               −π (cos α + tan θ)

     The integrand is an even function, hence
                                                                   Z π
                                                                                      tan2 θ
                                        τx = −2aC sin α                                           dθ                    (4.25)
                                                                        0       (cos2 α + tan2 θ)
             R 2a               Ra          Ra
     using    0     f (x)dx =    0 f (x)dx + 0 f (2a − x)dx
                                                          Z π/2
                                                             tan2 θ
                                 τx = −4aC sin α                         dθ                                             (4.26)
                                                  0    (cos2 α + tan2 θ)
                                                       Z π/2
                                                    2               tan2 θ
                                 τx = −4aC sin α sec α                            dθ                                    (4.27)
                                                         0    (1 + sec2 α tan2 θ)
     Substituting sec α = u, in above equation, we get




     It is given that
                       HB      τx = −4aC sin αu



                               d
                                                2
                                                  Z π/2




                                                          u sec2 θ
                                                                            0
                                                                                       tan2 θ
                                                                                   (1 + u2 tan2 θ)
                                                                                                   dθ                   (4.28)




                         C2 D=

                             =

                            D=
                               dθ
                                  (tan−1 (u tan θ)) =
                                         2
                               u(1 + tan θ)
                               1 + u2 tan2 θ
                                     u
                                              +
                                                       1 + u2 tan2 θ


                                                   u tan2 θ
                                                               +u−u
                                                                     1 + u2 tan2 θ
                                                                                                                        (4.29)

                                                                                                                        (4.30)

                                                                                                                        (4.31)



                           3         2    2
                               1 + u tan θ 1 + u tan θ
     Solving above equation, we get




                                              Z π/2
                                                      2




                                                 tan2 θ
                                                   2    2
                                              1 + u tan θ


                                                        D
                                                          =

     Hence Substituting above equation in Eq.(4.28) , we get
                                                            2




                                                             D
                                                            u−u3




                                                                1
                                                                 −
                                                                     1 + u2 tan2 θ


                                                                      1
                                                                   1 − u2



                                                                                                                        (4.32)



                                            2
                           τx = −4Ca sin αu                 −         dθ                                                (4.33)
                                               0      u − u3 1 − u2

                                                                   Z π/2
                                                               2                    D       1
                                     τx = −4Ca sin αu                                   −         dθ                    (4.34)
                                                                    0             u − u3 1 − u2
     Substituting value of D, we get
                                                     Z π/2 " d             −1 (u tan θ))
                                                                                                  #
                                                                       (tan                   1
                           τx = −4Ca sin αu2                        dθ
                                                                                         −          dθ                  (4.35)
                                                      0                   u − u3           1 − u2

                                                                                            π/2
                                                                   tan−1 (u tan θ)

                                                           2                            θ
                                  τx = −4Ca sin αu                                 −                                    (4.36)
                                                                      u − u3         1 − u2 0
                                                                                                                        (4.37)


Page 9         INPhO 2023                   Questions


     Applying limits and solving further, we get
                                                      λQ
                                            τx = −        tan (α/2)                           (4.38)
                                                     2π 0
     Working of τy , τz is not required.
           1




         τ 0




          -1
           − π2   − π3   − π6   0      π
                                       6
                                                π
                                                3
                                                           π
                                                           2
                                α




                  HB
(e) [2 marks] Let the ring is in equilibrium with respect to α = 0. Derive an expression for the time
    period T of small oscillations of the ring in terms of λ, and Q. Take λ = 0.1µ C/m, Q = 2.0 µC,
    M = 50.0g, radius a = 5.0 cm, and ω0 = 1.0 rad/s. Calculate T .




                    C2
     Solution: Under small angle approximation of α, τx becomes
                                                      −λQα
                                                    τx =
                                                       4π 0
                                                                                              (4.39)




                      3                         2
                                               d α
                                             I 2 =
                                             2
                                               dt
                                           Ma d α
                                            2 dt
                                                2



                                               d2 α
                                               dt
     This is a differential equation of SHM, hence
                                                  2


                                                  2
                                                    =

                                                    =−
                                                      −λQα
                                                       4π 0
                                                      −λQα
                                                       4π 0
                                                          2λQ
                                                        4M a2 π 0
                                                                  α
                                                                                              (4.40)

                                                                                              (4.41)

                                                                                              (4.42)



                                                           4π 2
                                               T2 =      2λQ
                                                                                              (4.43)
                                                       4M a2 π 0
                                                               s
                                                                   2M π 0
                                            =⇒ T = 2πa                                        (4.44)
                                                                    Qλ
                                                T = 1.17s                                     (4.45)

     This can be used as an electrostatic clock!



(f) [2.5 marks] Find an expression for the potential energy U of the ring in terms of α. Qualitatively
    plot U as a function of α. Take the zero of potential energy to be at α = 0.


Page 10         INPhO 2023                    Questions            Last four digits of Roll No.:


                                         dU
     Solution: We know that τ = −
                                         dα
                                                    Z
                                       =⇒ U = −    τ dα                                            (4.46)
                                                    Z
                                               λQ
                                            =          tan (α/2)dα                                 (4.47)
                                              2π 0
                                                 λQ
                                          U =−        2 log (cos (α/2)) + c                        (4.48)
                                                2π 0
     where c is the constant of integration. At α = 0, U = 0, which implies that c = 0.
                                                        λQ
                                       =⇒ U (α) = −         log (cos (α/2))                        (4.49)
                                                        π 0




      U (α)




              − π2
                      HB
                     − π6   − π3   0      π     π       π




                        C2         α
                                          6     3       2



(g) [2.5 marks] Obtain the expression of maximum value of α (αmax ) in terms of ω0 . Calculate
    αmax .

     Solution: Consider


                          3
     Multiplying both sides by dα
                               dt
                                          M a2 d2 α
                                           2 dt2
                                                    =
                                                      −λQ
                                                      2π 0
                                                            I
                                                                d2 α
                                                                dt2
                                                           tan (α/2)
                                                                     = τx                          (4.50)

                                                                                                   (4.51)



                                       M a2 d2 α dα   −λQ            dα
                                               2
                                                    =      tan (α/2)                               (4.52)
                                        2 dt dt       2π 0           dt
     Integrating on both sides
                                   M a2 dα 2

                                                λQ
                                             =       log(cos (α/2)) + c0                           (4.53)
                                    4    dt     π 0
                                         2
                                       dα     32π 2
                                            =       log (cos (α/2)) + c0                           (4.54)
                                       dt      T2
     where c0 is the constant of integration. At t = 0, dα                                  2
                                                          dt = ω0 , which implies that c = ω0 .
                                      2
                                     dα       32π 2
                                           =        log (cos (α/2)) + ω02                       (4.55)
                                     dt        T2
                                           r
                                     dα       32π 2
                                         =          log (cos (α/2)) + ω02                       (4.56)
                                      dt       T2


Page 11     INPhO 2023                  Questions


     For α = αmax , dα
                    at = 0, hence solving above equation, we get

                                                             ω02 T 2

                                                −1
                                 αmax = 2 cos         exp (−         )     (4.57)
                                                             32π 2
                                 αmax = 10.66◦                             (4.58)




            HB
              C2
                3


Page 12      INPhO 2023                                     Questions        Last four digits of Roll No.:

5. If Prof. Snell had a smartphone
   A typical smartphone screen is made up of mainly two
   components: a sheet of touch-sensitive glass (where you                                                   air
   move your finger to operate the phone) of thickness t at                                   .
                                                                                      t       touch-sensitive glass
   the top and a LCD screen below it consisting of a regular
   array of “RGB elements” that emit light. These elements                           h        d              air
   have a separation of d between them. There is a thin air
   gap of depth h between the touch-sensitive glass and the                                  LCD RGB elements
   LCD screen (see Fig. (1)for a cross sectional view). We                                  Figure 1
   estimate the value of h from the following experiment.
  We use two smartphones (S-I and S-II) in this exercise – S-I is the target instrument in which we
  want to estimate h, and S-II is the measuring instrument that can capture photos of the screen of
  S-I which we then analyse using a image-processing software.
  A digital image captured by the camera of a smartphone (S-II here) consists of discrete picture
  elements called pixels. The image captured by S-II is processed through a software. A red color
  reference line is drawn on the image (see Fig. 3(a)). The software plots the “brightness value” at
  every point of the reference line as a function of the number of pixels from the left end of the line.
  Thus, pixel number is a marker for distance here. First, we need to calibrate distance in terms of
  pixel number.
  The phone S-I is kept horizontal and the display is kept ON. A ruler is placed on its screen. S-II is
  fixed above S-I to capture images. The image of the screen captured is shown in Fig (2).



                   HB
                     C2
                       3                                       Figure 2


  Figure 3(a) shows a part of the image of the ruler and its brightness value profile along the red
  reference line in Fig. 3(b).

                                              150




                           Brightness value
                                              100


                                              50

                                                    0   32 64 96 128 160 192 224 256 288 320 352 384 416 448 480
                                                                           Pixel number
           (a)                                                            (b)
                                                              Figure 3


Page 13       INPhO 2023                   Questions

(a) [2 marks] State the number of pixels used by the camera of S-II to capture one centimeter of
    the screen of S-I.

      Solution:
      Wherever there is a black color comes into the picture, the brightness value profile will show a
      dip. There is a dip at pixel number 12 that refers to the 4 cm marker of the ruler. Similarly,
      the brightness value dip at pixel number 452 is for the 5 cm marker of the scale. Hence the
      number of pixels present in 1cm of the image is 440. We denote the value θ = 1/440 to be the
      scaling factor to convert the measurements obtained in pixels to the centimeter scale.

      Accepted answer range : 432 − 448 pixels.

(b) [5 marks] We keep the setup the same as the last part. Next, a few small water drops are
    placed on the glass screen of S-I beside the ruler (see Figs. 4(a) and 4(b) for a top and side view,
    respectively). We model every drop as a hemispherical lens of radius R that magnifies the array
    of RGB elements of the LCD screen of S-I (see Fig. 4(c); the figure is not to scale).




              HB                                                         t
                                                                                (b)



                                                                                 .
                                                                                  R          air
                                                                                 touch-sensitive glass




                C2                                                       h       d            air

                                                                                 LCD RGB elements
                                                                                (c)




                  3
                         (a)                                                    (d)
                                               Figure 4

    Figure 4(d) shows the magnified image of the array of the RGB elements of the screen as viewed
    from the top through one of the drops. This image is captured by S-II keeping the camera settings
    and distance same as in the previous part. The brightness value profiles of the images of the five
    chosen drops along the reference lines are shown in Fig. (5) on the next page.
    Using the profile plots, write the radius of the water drop (R in mm) and the corresponding
    magnification (M ) of the separation d between the array of RGB elements of S-I for each waterdrop
    lens. Use the table in the Summary Answer sheet to report your data. Describe the method you
    have used and the calculations in the Detailed Answer sheet.


Page 14      INPhO 2023                                Questions              Last four digits of Roll No.:
                                                                                                           Water drop 1




                   Brightness value
                                      200

                                      150

                                      100
  Water drop 1

                                            0   20    40        60     80    100 120 140            160     180       200    220
                                                                            Pixel number
                                                                                                           Water drop 2




                   Brightness value
                                      200

                                      150

                                      100
  Water drop 2
                                            0   20    40        60     80     100 120 140           160     180       200    220
                                                                            Pixel number)
                                      200                                                                  Water drop 3




                   Brightness value
                                      150




  Water drop 3
                   HB                 100


                                            0    40         80        120      160
                                                                            Pixel number
                                                                                        200         240         280         320




                     C2
                   Brightness value
                                      200

                                      150
                                                                                                           Water drop 4




  Water drop 4
                       3              100

                                      50




                                      200
                                            0    40        80        120     160    200
                                                                            Pixel number
                                                                                              240         280     320


                                                                                                           Water drop 5
                                                                                                                             360




                   Brightness value
                                      150

                                      100

                                      50

  Water drop 5                              0              40                80               120                 160
                                                                            Pixel number

                                                 Figure 5: Question of part (b)



     Solution: The red line is drawn beyond the waterdrops’ diameters. In each brightness value
     profile, there are three distinct regions present. Reading from the left, a closely packed peaks,


Page 15    INPhO 2023                                       Questions



                                                                                                                Water drop 1




                 Brightness value
                                    200

                                    150                ⊗                                                        ⊗

                                    100
  Water drop 1

                                          0   20           40        60     80    100 120 140            160     180       200    220
                                                                                 Pixel number
                                                                                                                Water drop 2




                 Brightness value
                                    200

                                    150           ⊗                                                                  ⊗

                                    100
  Water drop 2
                                          0   20           40        60     80     100 120 140           160     180       200    220
                                                                                 Pixel number)
                                    200



           HB    Brightness value
                                    150


                                    100
                                              ⊗
                                                                                                                Water drop 3


                                                                                                                      ⊗




             C2
  Water drop 3                            0       40             80        120      160
                                                                                 Pixel number
                                                                                             200         240         280


                                                                                                                Water drop 4
                                                                                                                                 320




  Water drop 4
               3 Brightness value
                                    200

                                    150

                                    100

                                     50
                                          0
                                              ⊗




                                                  40            80        120     160    200       240         280
                                                                                                                         ⊗




                                                                                                                         320      360
                                                                                 Pixel number

                                    200                                                                         Water drop 5




                 Brightness value
                                    150
                                                       ⊗                                                        ⊗
                                    100

                                     50

  Water drop 5                            0                     40                80               120                   160
                                                                                 Pixel number
                                                  Figure 6: Solution of part (b)


Page 16      INPhO 2023                    Questions              Last four digits of Roll No.:


     then the central region where the peaks are dispersed and the right side to the central region
     is again a closely packed peaks. The right and left regions are the plots of the smartphone
     S-I’s screen without the waterdrop lens. The distance d between each peak in these regions
     refers to the distance between the RGB elements of S-I. Note that d for each picture will be
     the same since all the images are extracted from one single image Fig. (4a).
     The magnified distance D will be different for the drops, depending on the radius R. The
     central region is the magnified plot of the smartphone S-I screen seen through the waterdrop.
     The distance D between the two peaks in the central region is the magnified distance between
     S-I’s RGB elements. The magnfication is D/d. For accuracy, we will count the n number of
     peaks for a distance and then divide the distance by n. The exact locations we have used on
     the plots to calculate D are indicated by a red color arrow ↓ (see Fig. (6)).
     For each drop, we identify the pixel number which separates the waterdrop region. The
     distance along this region will be the diameter of the drop. Alternatively, you can also measure
     the length of the region with a physical ruler and then convert it into a pixel number. The
     boundary points of the waterdrop regions which we have used on the plots to calculate R are
     indicated by a red color symbol ⊗ (see Fig. (6)).
     Every time we obtain the distance from the graph in terms of the pixel number, we multiply
     it by the scaling factor θ (obtained in part (a)) to convert it to the centimeter scale.

            Drop region                              Magnified distance
                                         ∗ R (cm)
      No.



      1

      2
            Start pixel


            36

            24
                    HB    End pixel


                          172

                          184
                                         0.155

                                         0.182
                                                     n


                                                     4

                                                     5
                                                          Distance

                                                          Start pixel

                                                          80

                                                          88
                                                                         End pixel

                                                                         132

                                                                         136
                                                                                      ∗∗ D(cm)




                                                                                      0.030

                                                                                      0.022

      3

      4
            31.11

            31.11     C2  280

                          315.56
                                         0.283

                                         0.323
                                                     22

                                                     19
                                                          80

                                                          120
                                                                         231.11

                                                                         240
                                                                                      0.016

                                                                                      0.014

      5
     Here
            26.67



                        3 142.22

                                   ∗


                                    ∗∗
                                         0.131


                                       R(cm) =

                                       D(cm) =
                                                     1    71.11

                                                End pixel − Start pixel
                                                           2
                                                End pixel − Start pixel

     and n is the number of peaks (or dips) counted.
                                                            n
                                                                        θ
                                                                         88.89




                                                                         θ
                                                                                      0.040




     The original distance d (unmagnified) between the RGB elements can be obtained by counting
     the dips in the left or right regions of any of the graphs. See the right side region of the water
     drop 1 graph, there are six peaks in 20 pixel numbers of the image, i.e. total of five RGB
     elements in 20 pixel numbers. Thus
                                                      20
                                                 d=      θ                                        (5.1)
                                                      5
                                                       1
                                                    =      cm                                     (5.2)
                                                      110
     Interesting fact for the readers: RGB elements are nothing but the "pixels" inside S-I
     which you use to define the quality of a screen. When you refer to PPI (pixel per inch) of a
     phone, you are indicating the number of RGB elements in an inch of the screen display. We
     used ipad 8th generation as the S-I. Apple website gives PPI (pixel per inch) for the iPad to
     be 264 (https://support.apple.com/kb/SP822). The value of d obtained gives the PPI value
     to be ∼279 PPI. Not a bad answer for an amateur setup!


Page 17       INPhO 2023                   Questions


     Data table for the Summary answer sheet:

       Water drop    R (cm)    M = D/d

       1             0.155     3.25

       2             0.182     2.40

       3             0.283     1.72

       4             0.328     1.58

       5             0.131     4.44
     Final values within five percent of the official answers will be credited fully.

(c) [9 marks] For the given smartphone, t = 0.50 mm, the refractive indices of the touch-sensitive
    glass, water drop, and the air to be 3/2, 4/3, and 1 respectively. Using the data table of the
    previous part, plot a suitable linear graph to obtain the distance (h) of the RGB elements from
    the touch-sensitive glass. Use the table given in the summary answer sheet to enter the data used
    to plot the graph. Show your detailed theoretical calculation in the Detailed Answer sheet.

       Solution: We use the standard results for the reflection formula from a spherical surface.




              HB                 O
                                          µ1




                                               u
                                                        P
                                                                  v
                                                                           I
                                                                               µ2




                C2
                  3                             µ2 µ1
                                                 v
                                                   −
                                                     u
                                      Magnification M =
                                                        =


                                                        O
                                                         I
                                                           µ2 − µ1


                                                            =
                                                              R
                                                              µ1 v
                                                              µ2 u
     Here the symbols have their usual meanings. The sign will be adjusted accordingly.
     There is refraction occurring at the three surfaces.
                                                                                              (5.3)

                                                                                              (5.4)




                                                   µg
                                      µa                              µa

                                                   v2        µw

          I                   v1 O                                    P
                                      h            t
                                                             R




     The first refraction is at the air-glass interface. Using µ1 = µa , µ2 = µg , R = ∞ in the
     Eq.(5.3)
                                                   µg    µa
                                                       −    =0                                (5.5)
                                                   v1    −h
                                                      v1 = −µg h                              (5.6)


Page 18      INPhO 2023                  Questions           Last four digits of Roll No.:


     The second refraction is at the glass-water interface. Now u2 = |v1 | + t. This gives
                                              µw     µg
                                                  −       =0                                  (5.7)
                                               v2   −u2
                                                           µw
                                          v2 = −(µg h + t)                                    (5.8)
                                                           µg

     The third refraction is at the water-air interface. Now u3 = |v2 | + R gives
                                         µa   µw    µa − µw
                                            −     =                                           (5.9)
                                         v3   −u3     −R
     Magnification will only be from the third interface.
                                                    µw v 3
                                              M=                                             (5.10)
                                                    µa u3

     Using µg = 3/2, µw = 4/3, and µa = 1 in the Eqs. (5.9 and 5.10) yields

                                      1    3    1        2t
                                        = −         h+                                       (5.11)
                                     M     4 3R          3

     A graph of 1/M vs 1/3R will be linear. The graph is plotted on the next page. For the
     obtained data set




                   HB
     Slope = 2.67mm which gives h = 2.34 mm.
     Accepted answer range: (2.34±5%)mm.




                     C2
                       3


Page 19   INPhO 2023       Questions




          HB
            C2
              3

                **** END OF THE QUESTION PAPER ****
