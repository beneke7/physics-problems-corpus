---
id: solution-document-apho-2002-t-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2002_T_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2002-t-q1, apho-2002-t-q2, apho-2002-t-q3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2002_T_S.pdf."
---

.
                                                                           Solution 1
(a) mX&& n= S ( X n+1 − X n ) − S ( X n − X n−1 ).                                                                  0.7
(b) Let Xn = A sin nka cos (ω t + α), which has a harmonic time dependence.
By analogy with the spring, the acceleration is X&& = - ω2Xn.                    n

Substitute into (a):                    -mAω2 sin nka = AS {sin (n + 1)ka – 2 sin nka + sin (n – 1)ka}
                                                         = - 4SA sin nka sin2 _ka.                                  0.6
           2                        2
Hence ω = (4S/m) sin _ka.                                                                                           0.2
To determine the allowed values of k, use the boundary condition sin (N + 1) ka = sin kL = 0.                       0.7
The allowed wave numbers are given by kL = π, 2π, 3π,…, Nπ (N in all),                                              0.3
and their corresponding frequencies can be computed from ω = ω0 sin _ka,
in which ωmax = ω0 = 2(S/m)_ is the maximum allowed frequency.                                                      0.4
                 ∞

                ∑ ph ω P (ω )
                 p =0
                                        p

(c) E (ω ) =            ∞

                     ∑ P (ω )
                     p =0
                                p

                                             ∞
                                                          − nh ω / k B T
                                            ∑ nh ω e                                   ∂    ∞
First method:                               n =0
                                                   ∞
                                                                           = k BT 2      ln ∑ e − nh ω / k BT
                                                                                      ∂T n = 0
                                                                                                                    1.5
                                                 ∑ e −nh ω / kBT
                                                 n =0

The sum is a geometric series and is {1 – e − hω / k BT }-1                                                         0.5
                                    hω
We find E (ω ) =                hω / k BT
                                                   .
                            e               −1


                                                                                                                    (0.5)
Alternatively: denominator is a geometric series = {1 – e − hω / k BT }-1


Numerator is kBT 2(d/dT) (denominator) = e − hω / k BT {1 – e − hω / k BT }-2 and result follows.                   (1.5)




                                                                                                                1
A non-calculus method:
Let D = 1 + e-x + e-2x + e-3x +…, where x = hω/kBT. This is a geometric series and equals D =
1/(1 – e-x). Let N = e-x +2 e-2x + 3e-3x +…. The result we want is N/D. Observe
                                                                                                     (2.0)
                      D – 1= e-x + e-2x + e-3x + e-4x + e-5x +….….
                  (D - 1)e-x =    e-2x + e-3x + e-4x + e-5x +….….
                         -2x
                 (D - 1)e =              e-3x + e-4x + e-5x +….

                                              e−x        1
Hence N = (D - 1)D or N/D = D – 1 =               −x
                                                     = x   .
                                             1− e     e −1


(d) From part (b), the allowed k values are π/L, 2π/L, …, Nπ/L.
Hence the spacing between allowed k values is π/L, so there are (L/π)∆k allowed modes in the         1.0
wave-number interval ∆k (assuming ∆k >> π/L).


    (e) Since the allowed k are π/L,…, Nπ/L, there are N modes.                                      0.5
Follow the problem:                                                                                  0.5
dω/dk = _aω0 cos _ka from part (a) & (b)
       = 12 a ω 2max − ω 2 , ωmax = ω0. This second form is more convenient for integration.
The number of modes dn in the interval dω is
                                dn      = (L/π)∆k = (L/π) (dk/dω) dω                                 0.5 for eith
                                     = (L /π){_ aω0 cos _ ka}-1 dω
                                                                                                     This part is
                                                 L 2     1                                           necessary fo
                                             =                   dω
                                                 π a ω max − ω 2
                                                       2                                             ET below,

                                                 2( N + 1)      1                                    but not for
                                             =                            dω                         number of
                                                               2
                                                     π       ω max −ω 2
                                                                                                     modes
                                                                                                     (0.5)
                                     ω max
                                         2( N + 1)     dω
Total number of modes = ∫ dn = ∫                               = N + 1 ≈ N for large N.
                                       0
                                             π     ω max − ω 2
                                                     2




Total crystal energy from (c) and dn of part (e) is given by
                                                                                                     0.7
                                       ω
                                   2 N max     hω              dω
                              ET =       ∫  hω / k B T
                                                                       .
                                    π 0 e              − 1 ω max − ω 2
                                                             2




(f) Observe first from the last formula that ET increases monotonically with temperature since

                                                                                                 2
{e hω/kT - 1}-1 is increasing with T.                                                                   0.2
When T → 0, the term – 1 in the last result may be neglected in the denominator so                      0.2
                               ET ≈ T → 0
                                                2N
                                                    hω e − hω / k BT
                                                                                1
                                                                                       dω               0.3
                                                π ∫                      2
                                                                       ω max −ω 2

                               =
                                     2N
                                           (k BT ) 2 ∫
                                                          ∞
                                                                 xe − x
                                                                                   dx                   0.2
                                   hπω max           0 1 − ( k B Tx  / h ω max ) 2


which is quadratic in T (denominator in integral is effectively unity) hence CV is linear in T          0.2
near absolute zero.

Alternatively, if the summation is retained, we have
      2N          hω            ∆ω             2N                                      ∆ω
ET =      ∑    hω / k BT
                                        → T →0    ∑ hωe − hω / k BT
       π ω e             − 1 ω max
                               2
                                   −ω 2         π ω
                                                                                      2
                                                                                    ω max −ω2
       2 N (k B T ) 2
                                                                                                        (0.5)
     =                ∑ e − y y∆y
        π    hω y

When T→ ∞, use ex ≈ 1 + x in the denominator,                                                           0.2
                                                                                                        0.1
                                         ω max
                                    2N               hω            1                   2N     π
                     E T ≈ T →∞             ∫ hω / k T ω                        dω =      k BT ,
                                    π       0             B
                                                                 2
                                                                 max   −ω   2           π     2
which is linear; hence CV → NkB = R, the universal gas constant. This is the Dulong-Petit rule.
                                                                                                        (0.2)
                                                                   hω / k T
Alternatively, if the summation is retained, write denominator as e B − 1 ≈ hω / k B T and
             2N           ∆ω
ET → T → ∞      k BT ∑            which is linear in T, so CV is constant.
                         2
              π      ω ω max −ω 2

Sketch of CV versus T:                                                                                  0.5
                     CV


                                                                        approaches constant
                 R                                                      value




                          linear in T                                                           T




                                                                                                    3
Answer sheet: Question 1

   (a) Equation of motion of the nth mass is:

                            mX&& n= S ( X n+1 − X n ) − S ( X n − X n−1 ).

   (b) Angular frequencies ω of the chain’s vibration modes are given by the equation:

                                   ω2 = (4S/m) sin2 _ka.

      Maximum value of ω is: ωmax = ω0 = 2(S/m)_

      The allowed values of the wave number k are given by:

                                    π/L, 2π/L, …, Nπ/L.

      How many such values of k are there? N

                                                                                         4
    (f) The average energy per frequency mode ω of the crystal is given by:

                                                                  hω
                                       E (ω ) =                hω / k BT
                                                           e               −1

    (g) There are how many allowed modes in a wave number interval ∆k?

                                                (L/π)∆k.

    (e) The total number of modes in the lattice is: N

    Total energy ET of crystal is given by the formula:
                                      ω max
                                 2N               hω                        dω
                            ET =       ∫ e    hω / k B T
                                                                                        .
                                  π     0                  −1 ω            2
                                                                           max   −ω 2

    (h) A sketch (graph) of CV versus absolute temperature T is shown below.
                           CV


                       R




                            Linear in T                                                     T

    For T << 1, CV displays the following behaviour: CV is linear in T.

As T → ∞, CV displays the following behaviour: CV → NkB = R, the universal gas
constant.




                                                                                                5
                              Solution to Question 2: The Rail Gun

Proper Solution (taking induced emf into consideration):
(a)
Let I be the current supplied by the battery in the absence of back emf.
Let i be the induced current by back emf ε b .

Since ε b = dφ / dt = d(BLx)/dt = BLv , ∴ i = Blv / R.
                                                                                          1
Net current, I N = I − i = I − BLv / R.                                                   0.5

Forces parallel to rail are:
Force on rod due to current is Fc = BLI N = BL( I − BLv / R ) = BLI − B 2 L2 v / R .      0.5
Net force on rod and young man combined is FN = Fc − mg sin θ .            (1)

Newton’s law:           FN = ma = mdv / dt .                                 (2)          0.5

Equating (1) and (2), & substituting for Fc & dividing by m, we obtain the acceleration

dv / dt = α − v / τ ,    where α = BIL / m − g sin θ and τ = mR / B 2 L2 .                0.5
                                                                                                    3




                                                                                                6
(b)(i)
Since initial velocity of rod = 0, and let velocity of rod at time t be v(t),
we have

                                        (           )
                            v (t ) = v∞ 1 − e − t / τ ,                (3)                       0.5

                                                IR     mg       
                  where     v ∞ (θ ) = ατ =        1 −    sin θ  .
                                                BL  BLI         


Let ts be the total time he spent moving along the rail, and vs be his velocity when he leaves
the rail, i.e.                                                                                   0.5
                                                (         )
                            v s = v(t s ) = v ∞ 1 − e − t s / τ .  (4)

                           ∴ t s = −τ ln(1 − v s / v∞ )                (5)                       0.5       1.5




                                                                                                       7
(b) (ii)
Let tf be the time in flight:
                                             2v s sin è
                                      tf =                                    (6)                        0.5
                                                  g

He must travel a horizontal distance w during tf .

                                      w = (v s cos è )t f                      (7)
                                             w     2v sin θ
                                  tf =            = s                         (8) (from (6) & (7))
                                         v s cosθ     g                                                  0.5

From (8), vs is fixed by the angle θ and the width of the strait w
                                               gw
                                   vs =             .                   (9)
                                             sin 2θ

                                              1            gw 
                            ∴ t s = −τ ln1 −                      ,          (Substitute (9) in (5))
                                           v∞            sin 2θ                                                 1.5
                                  2 sin θ      gw           2w tan θ
And                        tf =                     =                         (Substitute (9) in (8))    0.5
                                     g       sin 2θ            g




                                                                                                               8
(c)
                                                          1     gw     2w tan θ
Therefore, total time is:       T = t s + t f = −τ ln1 −             +
                                                       v∞     sin 2θ       g

The values of the parameters are: B=10.0 T, I= 2424 A, L=2.00 m, R=1.0 Ω,
g=10 m/s2, m=80 kg, and w=1000 m.

              mR       (80)(1.0)
Then τ =      2 2
                  =                   = 0.20 s.
             B L    (10.0) 2 (2.00) 2
                 2424            (80)(10)             
 v∞ (θ ) =                 1 −                sin θ 
             (10.0)( 2.00)  (10.0)(2.00)(2424)        
        = 121(1 − 0.0165 sin θ )
So,
                                           100      1                               Labeling:
                 T = t s + t f = −0.20 ln1 −             + 14.14 tan θ
                                              v ∞ sin 2θ                            0.1 each axis

By plotting T as a function of θ, we obtain the following graph:                      Unit:
                                                                                      0.1 each axis

                                                                                      Proper Range in
                                                                                      θ:
                                                                                      0.3 lower limit
                                                                                        (more than 0.37,
                                                                                        less than 0.5),
                                                                                      0.2 upper limit
                                                                                        (more than 0.5
                                                                                       and less than 0.6)

                                                                                      Proper shape of
Note that the lower bound for the range of θ to plot may be determined by the         curve: 0.2
condition vs / v∞ <1 (or the argument of ln is positive), and since mg/BLI is small
                                                                                      Accurate
(0.0165), v∞ ≈ IR/BL (= 121 m/s), we have the condition sin(2θ) > 0.68, i.e.          intersection at
θ > 0.37. So one may start plotting from θ = 0.38.                                    θ = 0.5: 0.4          1.5

From the graph, for θ within the range (~0.38, 0.505 ) radian the time T is within
11 s.




                                                                                                        9
(d)
However, there is another constraint, i.e. the length of rail D. Let Ds be the
distance travelled during the time interval ts

        ts              ts                              ts
                             (      )        (         )        [       (        )]
Ds = ∫ v(t )dt =v ∞ ∫ 1 − e −t / τ dt =v ∞ t + τe − βt 0 = v ∞ t s − τ 1 − e − βt = v∞ t s − v(t s )τ
       0               0




i.e.
                                           1      gw       gw                                       0.5
                   Ds = −τ v ∞ (θ ) ln1 −             +
                                                                   
                                       v∞ (θ ) sin 2θ   sin 2θ 
                                                                                                        Labeling:
The graph below shows Ds as a function of θ.                                                            0.1 each axis

                                                                                                        Unit:
                                                                                                        0.1 each axis

                                                                                                        Proper Range in
                                                                                                        θ:
                                                                                                        0.3 lower limit
                                                                                                          (more than 0.4,
                                                                                                          less than 0.49),
                                                                                                        0.2 upper limit
                                                                                                          (more than 0.51
                                                                                                         and less than 1.1)
It is necessary that Ds ≤ D, which means θ must range between .5 and1.06
radians.                                                                                                Proper shape of
                                                                                                        curve: 0.2

                                                                                                        Accurate
                                                                                                        intersection at
                                                                                                        θ = 0.5: 0.4

In order to satisfy both conditions, θ must range between 0.5 & 0.505 radians.

(Remarks: Using the formula for tf , ts & D, we get

At θ = 0.507, tf =10.540, ts = 0.466, giving T = 11.01 s, & D = 34.3 m
At θ = 0.506, tf =10.527, ts = 0.467, giving T = 10.99 s, & D = 34.4 m
At θ = 0.502, tf =10.478, ts = 0.472, giving T = 10.95 s, & D =34.96 m
At θ = 0.50, tf =10.453, ts = 0.474, giving T = 10.93 s, & D =35.2 m,
So the more precise angle range is between 0.502 to 0.507, but students are not
expected to give such answers.                                                                          0.5
                                                                                                                              2.5
To 2 sig fig T = 11 s. Range is 0.50 to 0.51 (in degree: 28.60 to 29.20 or 290)

                                                                                                                        10
11
Alternate Solution (Not taking induced emf into consideration):

If induced emf is not taken into account, there is no induced current, so
the net force acting on the combined mass of the young man and rod is

                                 FN = BIL − mg sin θ .                        0.2 BIL
And we have instead                                                         0.2 mg sinθ
                                     dv / dt = α ,
where                            α = BIL / m − g sin θ .

                                        ∴ v(t ) = αt                            0.1

                                                                                0.2
and                                 ∴ v s = v (t s ) = α t s

                                    2v s sin è 2αt s sin è
                             tf =             =            .
                                         g          g
Therefore,

                                                           2
                                                    α 2 t s sin 2è
                           w = (v s cos è )t f =                   ,
                                                            g
giving

                                            1       gw
                                     ts =                                       0.5
                                            α     sin 2è

and
                                                2w tan θ
                                    tf =                 .
                                                   g                            0.5

Hence,
                                                          α        
                                                    1 + 2  sin θ 
                       1       gw     2w tan θ   wg       g        .
      T = ts + t f =                +          =
                       α     sin 2è      g       α         sin 2è

                            where α = BIL / m − g sin θ .

The values of the parameters are: B=10.0 T, I= 2424 A, L=2.00m,
R=1.0 Ω, g=10 m/s2, m=80 kg, and w=1000 m. Then,

                                  100 [1 + 0.20α sin θ ]
                              T=
                                   α         sin 2è                             0.3        2
                              where α = 606 − 10 sin θ .



                                                                                      12
                                                                        Labeling:
                                                                        0.1 each axis

                                                                        Unit:
                                                                        0.1 each axis

                                                                        Proper Range in
                                                                        θ:
                                                                        0.1 lower limit
                                                                          (more than 0,
                                                                          less than 0.5),
                                                                        0.2 upper limit
                                                                          (more than 0.52
For θ within the range (~0, 0.52 ) radian the time T is within 11 s.     and less than 0.8)

                                                                        Proper shape of
                                                                        curve: 0.2

                                                                        Accurate
                                                                        intersection at
                                                                        θ = 0.52: 0.4         1.3

However, there is another constraint, i.e. the length of rail D.
                                                                        Labeling:
Let Ds be the distance travelled during the time interval ts            0.1 each axis
                                   gw      5000                         Unit:
                         Ds =            =
                                2α sin 2θ α sin 2θ                      0.1 each axis
which is plotted below
                                                                        Proper Range in
                                                                        θ:
                                                                        0.1 lower limit
                                                                          (more than 0.08,
                                                                          less than 0.11),
                                                                        0.1 upper limit
                                                                          (more than 0.52
                                                                         and less than 1.5)

                                                                       Proper shape of
It is necessary that Ds ≤ D, which means θ must range between 0.11 and curve: 0.2
1.43 radians.                                                          Accurate
                                                                        intersection at
                                                                                              1.2
                                                                        θ = 0.11: 0.4
In order to satisfy both conditions, θ must range between 0.11 & 0.52
                                                                                              0.5
radians.




                                                                                        13
Question 3 - Marking Scheme

                                        3/ 2
                           M                                      2
(a)    Since W (v ) = 4π                     v 2 e − M v / ( 2 RT ) ,
                          2π RT 

                          ∞
                      v = ∫ v W (v) dv =
                          0



                           ∞                                 3/ 2
                                   M                                              2
                        = ∫ v 4π                                v 2 e − M v / ( 2 RT ) dv
                          0        2 π R T  

                           ∞                          3/ 2
                                 M                                          2
                        = ∫ 4π                            v 3 e − M v / ( 2 RT ) dv
                          0     2π RT 

                                                 3/ 2 ∞
                              M                               3       − M v 2 / ( 2 RT )
                       = 4π 
                              2 π R T
                                       
                                        
                                                       ∫ v e
                                                        0
                                                                                             dv


                                               3/ 2
                              M                      4 R2 T 2
                       = 4π       
                             2π RT                    2M2


                           8RT
                      =
                           π M

Marking Scheme:


Performing the integration correctly:                                                             1 mark
Simplifying                                                                                       0.5 marks
 Subtotal for the section                                                                                 1.5
                                               marks




                                                                                                              14
(b)      Assuming an ideal gas, P V = N k T , so that the concentration of the gas
         molecules, n, is given by

                                             N    P
                                       n =     =
                                             V   k T

the impingement rate is given by

                                        1
                                 J =      nv
                                        4

                                       1 P           8RT
                                   =
                                       4 k T         π M


                                                 8RT
                                   = P
                                             16 k 2 T 2π M


                                                N Ak
                                   = P           2
                                             2 k Tπ M


                                                 1
                                   = P
                                             2 k Tπ m


                                             P
                                   =
                                         2 π mk T
                                                      M
      where we have note that R = N A k and m =          ( N A being Avogadro number).
                                                      NA

Marking Scheme:

Using ideal gas formula to estimate concentration of gas molecules:               0.7
marks
Simplifying expression:                                                           0.4
marks
Using R = N k, and the formula for m;       (0.2 mark each)                       0.4
marks
 Subtotal for the section                                                            1.5
                                         marks



                                                                                         15
(c )   Assuming close packing, there are approximately 4 molecules in an area of 16 r 2
       m2. Thus, the number of molecules in 1 m2 is given by

                                     4
                       n1 =                     = 1.9 × 1018 m-2
                                  (
                              16 3.6 × 10     )
                                          −10 2




However at (273 + 300) K and 133 Pa, the impingement rate for oxygen is

                                 P
                     J =
                              2 π mk T
                                              133
                       =
                                  32 × 10 −3 
                              2π                (1.38 × 10 −23 ) 573
                                  6.02 × 10 23 
                                               
                       = 2.6 × 10 24 m −2 s −1
                                                n1
Therefore, the time needed for the deposition is    = 0.7 ms
                                                J
The calculated time is too short compared with the actual processing.

Marking Scheme:

Estimation of number of molecules in 1 m2 :                               0.4 marks
Calculation the impingement rate:                                         0.6 marks
Taking note of temperature in Kelvin                                      0.3 marks
Calculating the time                                                      0.4 marks
 Subtotal for the section                                                         1.7
                                         marks




                                                                                      16
(d)      With activation energy of 1 eV and letting the velocity of the oxygen molecule at
         this energy is v1, we have
                                   1
                                     m v12 = 1.6 × 10 −19 J
                                   2
                                  ⇒ v1 = 2453.57 ms −1
      At a temperature of 573 K, the distribution of the gas molecules is


         We can estimate the fraction of the molecules with speed greater than 2454 ms-1
         using the trapezium rule (or any numerical techniques) with ordinates at 2453,
         2453 + 500, 2453 +1000. The values are as follows:

         Velocity, v             Probability,
                                 W(v)

         2453                    1.373 x 10-10
         2953                    2.256 x 10-14
         3453                    6.518 x 10-19

         Using trapezium rule, the fraction of molecules with speed greater than 2453 ms-1
         is given by

                                    500
          fraction of molecules =
                                     2
                                        [(            )(                    ) (
                                        1.373 × 10 -10 + 2 × 2.256 ×10 −14 + 6.518 × 10 −19      )]
                           f = 3.43 × 10 −8
         Thus the time needed for the deposition is given by 0.7 µs/(3.43 x 10-8) that is
         20.4 s

Marking Scheme

Computing the value of the cut-off energy or velocity:                                0.6
marks
Estimating the fraction of molecules                                          1.2 marks
Correct method of final time                                                  0.4 marks
Correct value of final time                                                   0.6 marks
 Subtotal for the section                                                              2.8
                                             marks




                                                                                            17
                                                                          λ′
(e)     For destructive interference, optical path difference = 2 d =           where
                                                                          2
       λair
λ′ =        is the wavelength in the coating.
        n



                                                              n = 1.4


                   d     Coating
                         Silicon


The relation is given by:
                                              λ air
                                          d =
                                              4n
Plugging in the given values, one gets d = 105 or 105.2 nm.

Derive equation:

Finding the optical path length                                                0.2
marks
Knowing that there is a phase change at the reflection                         0.5
marks
Putting everything together to get the final expression                        0.6
marks
Subtotal:                                                               1.3 marks

Computation of d:                                                       0.6 marks
Getting the correct number of significant figures:                      0.6 marks
Subtotal:                                                               1.2 marks


Subtotal for Section                                                    2.5 marks

TOTAL                                                                   10 marks




                                                                                     18
