---
id: solution-document-nbpho-2020-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2020_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [nbpho-2020-conical-room, nbpho-2020-drone, nbpho-2020-phases-of-water, nbpho-2020-tunnel-diode]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2020_S.pdf."
---

That is, the vapor pressure rises by 21 %.          Using slope of melting curve — 0.5 pts;            for correct numerical value for V (from 19 to
                                                  (This means that the water cycle will be en-        Accurately measuring the slope of the melt-        20 mV) — 0.2 pts (for V from 18 to 22 mV —
1. PHASES OF WATER (6 points) — Solution          hanced, so that we can on average expect            ing curve near atmospheric pressure — 0.5          0.1 pts). If the pair of values is not consistent
by Johan Runeson, grading schemes by Johan        more humid weather after global warming.            pts;                                               with the KVL (voltage mismatch is ≥ 1 mV),
Runeson and Adam Warnerbring.                     On the other hand, the Earth is not homogen-        Correct result within 50% — 0.5 pts;               subtract 0.1 from the voltage value subscore
i) (1.5 points) We approximate the volume         eous, and in reality it is expected that wet loc-   Correct result within 10% — 0.5 pts;               (if it was positive). No marks for the numer-
difference by the volume of the gas and use       ations become more wet while dry locations          Wrong sign — -0.5 pts;                             ical values if obtained in a wrong way.
the ideal gas law: Vg − Vl ≈ Vg = nRT   RT        become more dry.)                                                                         ii) (1 point) After setting r = 0, the KVL takes
                                  mp = µ p .
Then it follows from the law of Clausius–       Grading:   Found  ∆   H  lg by measuring in 2.  TUNNEL   DIODE (10  points)  —  Solution by the form
Clapeyron that                               graph —  0.4 pts;                              Taavet  Kalda, grading  schemes by Jaan  Kalda,
                                             Numerical value for |∆H l g | correct within Axel Boeltzig, Bastian Hacker, and Fedor Tsy-                                  dI i
               d p µ|∆ H l g |                                                                                                                                E = Vi + L      .           (3)
                  =            dT            10% — 0.3  pts;                                brov.                                                                        dt
                p     RT 2
                                             Correct formula for p 2 / p 1 — 0.3 pts;       i) (1 point) Kirchhoffʼs voltage law (KVL) on
which after integration gives                Correct percentage ±2% — 0.5 pts;              the circuit:                                    Rearranging and integrating,
                       µ              ¶                                                                                E = I i r + Vi .
                          µ|∆ H l g |
            p = p 0 exp −               ,               Grading for alternative solution: Extrapola-
                            RT                                                                       Rearranging,                                                      Z I1                          Z t1
                                                    tion via derivative — 0.5 pts;                                                                                                    dI i
                                                                                                                                                                   L                               =      dt .
where p 0 is a reference pressure. We also ac- Correct expression for final result — 0.5 pts;                       E − Vi            1                                    0       E − Vi ( I i ))    0
                                                                                                               Ii =        = 25 mA −     Vi .   (2)
cept introducing a reference temperature T0         Correct   percentage  ±2%   — 0.5 pts;                            r              2 Ω
so that                                                                                              Vi and I i also have to obey the diodeʼs V − I      Looking at the idealised V − I dependence,
                  ·                µ       ¶¸       iii) (3 points) First, look at the solid–gas curve. We can find a solution graphically by
                     µ | ∆ H l g |   1   1                                                                                                               itʼs clear that Vi ( I i ) = 0 all throughout the
       p = p00 exp −                   −      , (1) transition line and assume also here that
                          R          T T0                                                            plotting (2) on the V − I curve. This yields        increase of current from I i = 0 to I i = I 1 =
                                                    Vg − Vs ≈ Vg . This gives a similar curve as Vi = 20 mV, I i = 15.3 mA.                              20 mA. This simplifies the expression for t 1 :
where p00 is another reference pressure.            for the liquid-gas transition but with a dif-
    Grading: Using ideal gas law — 0.5 pts;         ferent transition enthalpy. From T5 = 0 ◦C,
                                                                               ◦
                                                                                                                                                                           Z I1
Writing correct differential equation — 0.2 p 5 = 610 Pa, T6 = −10 C and p 6 = 260 Pa,                                                                          t1 =
                                                                                                                                                                       L
                                                                                                                                                                                    dI i =
                                                                                                                                                                                             LI 1
                                                                                                                                                                                                  = 4 × 10−8 s.
pts;                                                we get the sublimation enthalpy |∆H sg | =                                                                         E       0              E
Solution has exponential dependence of 1/T 2828 kJ/kg. This allows us to compute the
— 0.6 pts;                                          melting enthalpy as
Correct solution overall — 0.2 pts;                                                                                                                         Grading:
                                                          |∆ H | = |∆ H | − |∆ H | = 325 kJ/kg.
                                                            sl       sg       lg                                                                         Writing down correct KVL — 0.3 pts;
                                                  To measure the slope of the melting curve we                                                           Integrate equation — 0.2 pts;
ii) (1.5 points) For any two points on the                                                                                                               Note that Vi ( I i ) = 0 — 0.2 pts;
                                                  draw a tangent in the origin and measure (for
liquid–gas transision curve it holds that                                                                                                                Correct result for t1 — 0.2 pts;
                                                  example) ∆T = 5 K and ∆ p = −0.65 × 108 Pa.
               µ              ·       ¸¶
       p2         µ |∆ H l g | 1    1             With T = 273.15 K, the law of Clausius–
          = exp −                 −      ,        Claperyron finally gives
       p1             R         T2 T1                                                                    Grading: Writing down correct KVL —             iii) (1 point) Equation (3) must hold no mat-
                                                                  ∆T |∆ H sl |                       0.3 pts;                                            ter what the characteristic curve for the di-
assuming that ∆H l g is constant. Using for ex-       Vl − Vs =                = −9.2 × 10−5 m3 /kg. drawing   a correct line on V-I curve or explain-   ode looks like. This means that the current
ample T1 = 0 ◦C, p 1 = 610 Pa, T2 = 10 ◦C and                     ∆p T
                                                                                                     ing  this procedure   clearly in text — 0.3 pts     will continue to rise without any discontinu-
p 2 = 1230 Pa (with temperatures converted (The experimental value is −9.1 × 10−5 m3 /kg.)
                                                                                                     (attempts of substituting the diode with equi-      ities, even if it means the voltage on the diode
to kelvin), we get |∆H l g | = 2503 kJ/kg. Using Note that ice has a larger volume than liquid
                                                                                                     valent resistance, only if numerically reason-      will jump (the inductance keeps the current
this together with T3 = 15 ◦C = 283.15 K and water, which is an exception from most other
                                                                                                     able equivalent resistance — 0.1 pts;               from changing too fast but there is no such
T4 = T3 + 3 K gives                                 substances.                                      obtaining correct numerical value for I (from       constraint on the voltage). The expected be-
              µ              ·        ¸¶
 p4 − p3         µ |∆ H l g | 1    1                   Grading: Found ∆H sg — 0.5 pts;               15 to 15.5 mA) — 0.2 pts (for I from 14 to 16       haviour of V − I is given in the following fig-
         = exp −                 −       −1 = 0.21. Found ∆ H — 0.5 pts;                             mA — 0.1 pts);                                      ure:
   p3                R         T4 T3                           sl


                                                                                                        1. Applied voltage is smaller than the first      From the V − I curve, the first peak has a
                                                                                                           peak in the V − I curve. In that case,         voltage of V3 = 50 mV, second a voltage of
                                                                                                           the current will increase from 0 to I =        V4 = 400 mV. The four scenarios can be sum-
                                                                                                           21 mA and reach the equilibrium posi-          marised in the following plot:
                                                                                                           tion at V = E . Indeed, itʼs an equilib-
                                                                                                           rium because it satisfies KVL given by
                                                                                                           (3):
                                                                                                                         dI     E −V
                                                                                                                            =0=      .
                                                                                                                         dt       L
                                                                                                           Hence, the ammeter measures a con-
    In leg 2 of the journey, the current in-                                                               stant 21 mA.
                                                         The time taken in legs 3 and 5 are ef-
creases from I i = 0 to I i = I 2 = 21 mA (meas-   fectively 0 and because the deviation of the
                                                                                                        2. Applied voltage is between the two
ured from the figure). The time taken is           voltage from E in legs 2 and 4 is the same,
                                                                                                           peaks in the V − I curve. The sys-
t 2 = LI 2 /E = 4.2 × 10−8 s. Since in leg 3,      alongside with the change in current, the
                                                                                                           tem will follow a similar trajectory to
the change in current is 0, the time taken         time duration for 2 and 4 must also be the
                                                                                                           the one exhibited in iv) since the same
is essentially instantaneous compared to t2 .      same. The change in current is I 2 − I 3 =                                                                Grading: For each of the four modes,
                                                                                                           argumentation holds. Following the
Hence t3 = 0 for our considerations. The           20 mA = I 1 . Hence t 2 = t 4 = t 1 and the dura-                                                      Identification — 0.2 pts;
                                                                                                           same notation as in iv), the average
total time taken is then                           tion of one full period is T = t2 + t3 + t4 + t5 =                                                     Determination of constant value — 0.3 pts;
                                                                                                           current in leg 2 is the arithmetic aver-
                                                   2 t 1 = 8 × 10−8 s. A sketch of I as a function of
             t 2 + t 3 = 4.2 × 10−8 s.                                                                     age between 1 mA and 21 mA (because
                                                   time is shown in the following figure. t0 has
                                                                                                           the current is increasing at a constant        vi) (1 point)
                                                   the moment when the current is at its min-
                                                                                                           rate). Leg 2 thus has an average cur-
   Grading:                                        imum at t0 = 0.                                                                                           First, weʼll find the operational mode us-
                                                                                                           rent of 11 mA. Leg 4 similarly has the         ing the same graphical method as in part i).
Description / understanding of the processes
                                                                                                           same average current. Leg 3 and 5 donʼt        The graphed line has an equation of
— 0.5 pts;
                                                                                                           contribute to the average current be-
Calculation t2 — 0.2 pts;
                                                                                                           cause they happen effectively instant-                          E − Vi            1
Result t2 + t3 — 0.3 pts;                                                                                                                                           Ii =          = 75 mA −    Vi ,
                                                                                                           aneously. The total average current is                            r              2Ω
                                                                                                           then 11 mA.
iv) (2 points) We can use similar logic as be-                                                                                                    shown in red in the figure. The steady voltage
fore to deduce how the voltage and current                                                              3. Applied voltage is bigger than the and current are measured to be V0 = 125 mV
behave as a function of time. Since the equi-                                                              second peak in the V − I curve but and I 0 = 11.9 mA. For small perturbations
librium voltage E = 250 mV lies between the                                                                smaller than 500 mV. In the beginning, from the steady state, we can use Taylor
two peaks in the V − I curve, the current will                                                             the current will increase to 21 mA and series while neglecting higher orders:
perform a horizontal jump as before. At V2 =                                                               make a horizontal jump, just as expec-                                                        ¯
                                                                                                                                                                                                     dV ¯¯
500 mV, equation (3) takes the form                                                                        ted. Then the current will decrease to V0 + δV ( t) = V ( I 0 + δ I ( t)) ≃ V0 + δ I ( t) d I ¯ .
                                                    Grading:                                                                                                                                               I0
                                                                                                           1 mA and the voltage takes the value
                           dI i                  Writing down correct KVL at V2 — 0.3 pts;
                E = V2 + L      ,                                                                          of the battery and reaches an equi- Therefore
                           dt                    Argument that ∆ t3 and ∆ t5 = 0 — 0.3 pts;
                                                                                                           librium without performing any addi-                             ¯
                                                 Calculation ∆ t4 — 0.3 pts;                                                                                            dV ¯¯
so                                                                                                         tional jumps. The average current is                δV =              δ I = R d δ I.
                 d I E − V2                      Period of oscillation — 0.3 pts;
                                                                                                           thus 1 mA.                                                   d I ¯I0
                    =        < 0.
                 dt    L                         Amplitude of oscillation — 0.3 pts;                                                                                              ¯
                                                                                                                                                                                  ¯
Hence, I i will continue to decrease from I 2 to Offset of oscillation — 0.2 pts;                       4. If the applied voltage is bigger than          We can express ddVI ¯            graphically by draw-
                                                                                                                                                                                      I0
I 3 = 1 mA. Like before, the voltage will then Correct plot, starting from I = 0 — 0.3 pts;                500 mV, then the current will blow up          ing a line tangent to the V − I curve going
instantaneously jump from V2 to 0 and the                                                                  to infinity (in our ideal model) and           through the steady state. The derivative is
cycle starts again. A sketch of a single cycle v) (2 points) The system operates in 4 distinct             thatʼs not physical. Hence, the current        then found by dividing the horizontal projec-
is shown in the following figure.                modes as the battery voltage is varied:                   is undefined.                                  tion with the vertical, while keeping track of


the sign:                                              Let the deviation of the charge on the              words, the real part of λ has to always be neg-correct differential equation — 0.3 pts;
                ¯                                   capacitor from steady state be δ q. Then,              ative, otherwise the current will start grow-  quadratic equation — 0.2 pts;
            dV ¯¯      178 mV                       from KVL, δ IR d = δ q/C . Hence, the current          ing exponentially. With careful analysis, itʼs analyze of quadratic equation according to
       Rd =          =        = −7.1 Ω.
            d I ¯ I 0 −25 mA                        through the resistor r and inductor is δ I + δ˙q,      possible to determine necessary conditions     the problem — 0.6 pts;
                                                    where δ˙q = δ˙IR d C . KVL for the whole circuit       for b and c for this to be the case.           expression for inductance: L < |R d | rC — 0.3
                                                    takes the form                                             Vietaʼs second formula states that λ1 λ2 = pts;
                                                                            d¡          ¢                  c. If λ is real, then this means that c has to numerical answer: L < 0.43 nH — 0.1 pts;
                                                       0 = (δ I + δ˙q) r + L   δ I + δ˙q + δ IR d          be positive, because otherwise either λ1 or λ2
                                                                           dt
                                                         = R d LC δ¨I + (L + R d rC )δ˙I + (R d + r )δ I   is negative. If λ is complex, then λ2 and λ1 3. CONICAL ROOM (3 points) — Solution by
                                                                 µ          ¶                              are each-otherʼs complex conjugates and so Taavet Kalda, grading schemes by Maurice Zeu-
                                                                    1      r ˙      r + Rd
                                                         = δ¨I +         +    δI +                         their product must be positive. Hence, c > 0 ner, Eugen Dizer, and Titus Bornträger. If the
                                                                   Rd C L           R d LC
                                                                                                           regardless of whether λ is real or complex.    distance from the base to the apex is H , then
                                                         = δ¨I + bδ˙I + c,
                                                                                                               According to Vietaʼs first formula, λ + from energy conservation
                                                                                                                                                          1
                                                                  ³              ´
                                                                       1     r             λ2 = − b. If λ is real, then their sum has to
                                                                                         r +R d                                                                   v2
                                                where b =           , c =
                                                                      Rd C + L           R d LC .
                                                                                   This is
                                                                                           be negative, otherwise at least one of λ1 and                     gH = 0 .
                                                a second order differential equation. De-                                                                          2
   Grading: Writing down correct KVL — 0.1 pending on the values for b and c, the solu- λ2 is positive. Hence, b > 0. If λ is complex,
pts;                                                                                       then their sum is purely real (because theyʼre Let the shortest distance from the base to the
                                                tion might grow exponentially. The stand-                                                 wall be h and the sought minimal speed v1 .
drawing a correct line on V-I curve or explain- ard method for solving this type of equa- each-otherʼs complex conjugates) and hence
ing this procedure clearly in text — 0.2 pts;                                              again, the sum has to be negative for the real From geometry, h = H sin α. Letʼs consider
                                                    tion involves making an educated guess and
obtaining correct numerical value for I (from                                                              parts to be negative. Hence, b > 0 must al- a new system of coordinates where the two
                                                    plugging it into the equation. In this case,
                                                                                                           ways hold.                                   axis x0 and y0 are parallel and perpendicu-
11 to 13 mA) — 0.1 pts;                             an exponential solution of the form δ I =                                                           lar to the wall respectively. Gravitational ac-
for correct numerical value for V (from 115         δ I 0 exp(λ t) will work. Note that this is all            The b > 0 and c > 0 are necessary and
                                                                                                                                                        celeration has components g x0 = g cos α and
to 135 mV) — 0.1 pts;                               equivalent to operating with complex imped-            sufficient conditions for the solution to be
                                                                                                                                                        g y0 = g sin α. It is clear that the motion along
for drawing tangent line to the curve through       ances but with λ = iω. substituting the an-            stable. Condition b > 0 implies
                                                                                                                                                        the x0 axis doesnʼt affect whether the pro-
the intersection point — 0.2 pts;                   satz into the differential equation and redu-                         µ           ¶
                                                                                                                             1      r                   jectile hits the wall. Because the motions in
determining correctly R d as the slope of the                                                                                    +      >0
                                                    cing the prefactors, one gets the character-
                                                                                                                            Rd C L                      the x0 and y0 direction are independent, one
tangent (from -6.5 to −7.6 ) — 0.3 pts; if the      istic equation:                                                                                     has to set the component of ⃗v1 parallel to x0
result is from -6 to −8 — 0.2 pts, if it is from                                                           so                                           to 0 in order to minimize the total speed.
from -5 to −9 — 0.1 pts. Zero marks if the                             λ2 + bλ + c = 0.
minus sign is missing.                                                                                         L < |R d | rC = 4.3 × 10−10 H = 0.43 nH.           Then the problem reduces to hitting a pro-
If final result is correct, but the values of I 0   This is a quadratic equation with two solu-                                                               jectile into a conventional ceiling of height h
and V0 not shown, no penalty is applied.            tions                  s                    Inequality c > 0 implies                                      in effective gravity g sin α. Thus, from energy
                                                                                b    2b                                                                       conservation,
vii) (2 points)In order to find the stability con-                 λ12 = − ±                − c.                            r + Rd
dition, one could operate with complex im-                                      2      4                                            > 0,                                                       v2
                                                                                                                            R d LC                                   g sin α h = gH sin2 α = 1 .
pedances and write down the resonance con- λ12 can be either both real or both complex,                                                                                                          2
dition                                             depending on the sign of the discriminant. If hence                                                    And so
                             Rd                                                                                             r + R d < 0.                                                  p
              r + iω L +              = 0,         λ j = m j + n j i, where m, and n are both real,                                                                                        3
                         iω R d C + 1              then                                                                                                                 v 1 = v 0 sin α =    v0 .
                                                                                                           As can be seen, the value for L canʼt exceed                                   2
hence, denoting λ = iω,                                                                                    0.43 nH.
                                                             X 2                ¡ ¡       ¢       ¡     ¢¢                                                    Grading: We expect to see mostly two dif-
                                                        δI =      δ I 0 j em j t cos n j t + i sin n j t .
           ( r + λL)(λR d C + 1) + R d = 0.                  j =1
                                                                                                              Grading:  consideration    of current small ferent solution schemes. The first one is the
                                                                                                           deviation — 0.1 pts;                           given sample solution using the coordinate
A more tedious but perhaps clearer way It can be seen that for the solution to be relationship between capacitor charge δ q transformation. The second one is by math-
would be to write down the KVL and solve the stable, m < 0 is needed as that leads to an and diod current δ I — 0.1 pts;                                  ematically deriving the intersection points of
resulting differential equation.                   exponential decay in the current. In other initial KVL for whole circuit — 0.3 pts;                    the trajectory with the walls.


   Grading for sample solution:               one can reconstruct the position of O and                                                               cuboid is linear, get 0 for precision for both
Deriving the relation gH = v02 /2. — 0.5 pts; ⃗ f . Because µ = tan α, one can conveniently
                                              F                                                                                                       parts i) and ii), but there are no deductions
Using the relation h = H sin α. — 0.5 pts;    measure µ as the ratio of the horizontal and                                                            for deriving µ and M .
Change of coordinate system and splitting vertical projection of F   ⃗ f : µ ≈ 0.659.
                                                                                                                                                          Solutions that use point O in i):
the gravitational force — 1.0 pts;                                                                                                                    Correctly identifying all forces acting on
Further calculation — 0.5 pts;                                                                                                                        cuboid – 0.2 pts;
Correct result for v1 — 0.5 pts.                                                                                                                      Use fact that vectorial extensions intersect at
    Grading for alternative methods:                                                                                                                  one point or another way to take into account
Deriving the relation gH = v02 /2. — 0.5 pts;                                                                                                         torque balance for point O – 0.8 pts;
                                                                                                                                                                                 F
Equations of motion and derivation of the tra-                                                                                                        Use that µ = tan α or µ = Nf , where F f is fric-
jectory y( x) of the projectile — 0.5 pts;                                                                                                            tion force and N is normal force — 0.2 pts;
Mathematical description of wall — 0.3 pts;                                                                                                           Deriving µ – 0.4 pts;
Solving for intersection points and choosing                                                                                                          Numerical result with high enough precision
the physical solution — 0.7 pts;                                                                                                                      — 0.4 pts.
Finding the optimal angle for minimum velo-
                                                                                                                                                         Solutions that use point O’ in ii):
city (first derivative of velocity with respect to
                                                                                                                                                     Correctly identifying all forces acting on sys-
initial angle must be zero) — 0.5 pts;
                                                                                                                                                     tem – 0.2 pts;
Correct result for v1 — 0.5 pts.
                                                                                                                                                     Use fact that vectorial extensions intersect at
4. DRONE (9 points) — Solution by Taavet                                                                                                             one point or another way to take into account
Kalda, grading schemes by Oleg Košik, Jānis                                                                                                          torque balance for point O 0 – 0.8 pts;
Cimurs, and Joonas Kalda.                          ii) (2 points) Consider the system made up                                                        Use torque balance for gravitational forces —
                                                                                                       Grading for i) and ii)
i) (2 points) Let the mass of the cuboid be of the cuboid and the drone. Once again,                                                                 0.4 pts;
                                                                                                   Solutions that use force balance and torque bal-
M . There are three forces acting on the there are three forces acting on this system:                                                               Express formula for mass M — 0.2 pts;
                                                                                          ⃗ f , andance in i) and force balance in ii):
drone: the resultant of friction and the nor- gravitational force ( M + m)⃗g, friction F           i) correctly identifying all forces acting on
                                                                                                                                                     Numerical result with high enough precision
mal force F⃗ f , rope tension T⃗ directed along the force F   ⃗ keeping drone afloat. The thrust                                                     — 0.4 pts.
                                                                                                   cuboid – 0.2 pts;
the rope, and gravitational acceleration M⃗g       for the drone  is directed along the symmetry
                                                                                                   use that µ = Nf , where F f is friction force and iii) (2 points) Imagine a pocket of air with
                                                                                                                F
directed vertically down from the centre of axis of the drone. Since the forces are in equi-                                                         fixed mass moving around in the atmosphere.
                                                                                                   N is normal force — 0.2 pts;
the cuboid. Since the cuboid is sliding with librium, their extensions must intersect in
                                                                                                   writing force balance equations using angles Let the pocketʼs volume beγ V = V ( z). In an
constant speed, the three forces must bal- one point O 0 . Owing to the last part, O 0 can                                                           adiabatic atmosphere, pV = const, where
                                                                                                   – 0.4 pts;
ance each other out. The only way for this be found by intersecting the frictional force                                                             γ = c p / c v = 1.39. Now, pV ∝ T and ρ ∝ V −1 ,
                                                                                                   writing torque balance equation – 0.4 pts;
to be possible is if the vectorial extensions of and the thrusting force. Since gravitational                                                        so
                                                                                                   deriving µ – 0.4 pts;
the forces intersect in one point, O .             force is vertical, we can find the horizontal                                                                pV γ ∝ V γ−1 T ∝ ρ 1−γ T = const.
                                                                                                   numerical result with high enough precision
                                                   projection of the centre of mass. If x1 and
    One can prove this by contradiction. If                                                        — 0.4 pts; (error within 5% – 0.4pts, error
                                                   x are the horizontal distances from O 0 to the                                                    Hence,
the forces donʼt intersect in a single point, 2                                                    within 10% – 0.2pts)
                                                   centres of the cuboid and drone respectively,
one needs only consider the torque around                                                                                                                                µ            ¶ 1        µ           ¶ 1
                                                   then                                                 ii) correctly identifying all forces acting                          T ( z)    γ−1              gz γ−1
one of the intersection points to see that                                                                                                                ρ ( z) = ρ 0                       = ρ0 1 −            .
                                                                                                    on drone – 0.2 pts;                                                      T (0)                    c p T0
there is non-zero torque and that the forces
                                                                        x1 M                        writing force balance equations using angles
arenʼt in equilibrium.                                                    = .
                                                                        x2 m                        – 0.6 pts;                                            Grading: There are two expected solu-
    If the normal force is N , then the fric-                                                       combining with equations form part i) and
                                      ⃗ f = N ŷ −                                                                                                    tions. One of them is given by the sample
tional force is N µ so the resultant F                                                              deriving M – 0.8 pts;                             solution while the other involves integrating
N µ x̂. Therefore, F⃗ f is always directed at an From the figure we measure x1 / x2 = 0.796 and numerical result with high enough precision
                                                                                                                                                      dρ from z = 0 to z.
angle α = arctan µ with respect to the vertical. so                                                 — 0.4 pts; (error within 5% – 0.4pts, error       Grading for sample solution:
    Since the starting point and direction of                                                       within 10% – 0.2pts)                              Using or deriving the adiabatic relation
the forces of gravity and tension are known,                 M = 0.796 m = 0.796 kg.                   Remark.     Solutions that assume that         pV γ = const — 0.6 pts;


Using or deriving an expression for γ = c p / c v   output power of the motor is proportional to          Grading: The measurement data give evid-           cross-section area of the neck. The process
— 0.2 pts;                                          the product of F and v and so P ∝ ρ v3 . In           ence that volumes have been measured cor-          is fast, characteristic time is around few mil-
Deriving an exact expression for ρ , or ob-         our considerations, the output power of the           rectly: 0.2 pts (for instance, if a portion of     liseconds, so we can consider it to be adia-
taining its dependence on V and/or on p, T          drone is fixed so v ∝ ρ −1/3 and F ∝ ρ (ρ −1/3 )2 =   water was added without making a notice of         batic (characteristic time of thermalization is
— 0.6 pts;                                          ρ 1/3 . From force balance, F = m tot g. Hence,       it, all the subsequent volumes are offset by a     on the order of a second). From pW γ = const
Obtaining the correct expression for ρ — 0.6        m tot ∝ ρ 1/3 . Evaluating the ratio at z = 0 and     certain amount, and in that case, this 0.2 pts     (where W = V0 − V denotes the air volume in-
pts;                                                z = zmax , one gets                                   is not awarded)                                    side the bottle) we obtain ln p + γ ln W = const,
                                                                                                                                                                       ∆p      ∆W
Grading for alternative solution:
                                                        1.5 m
                                                                  µ
                                                                      ρ (0)
                                                                               ¶1/3 µ            ¶− 1
                                                                                         gzmax 3(γ−1)        There is at least one measurement with hence p + γ W = 0, i.e.
Using or deriving the relation for the pres-                   =                   = 1−               , empty bottle (V = 0) 0.2 pts.
sure change d p( z) = −ρ ( z) gd z — 0.1 pts;             m         ρ ( zmax )            c p T0                                                                                        ∆W        Ax
                                                                                                        There is at least one measurement with less                        ∆ p = −γ p       = γp      .
Using the relation c p − c v = R /µ — 0.2 pts;      and so                                              than 10% of the bottleʼs volume being empty                                      W         W
Using ideal gas law or equivalent to get                           c p T0 ³               ´
                                                                                                        0.2 pts.                                             Now we can write the equation of motion for
another differential — 0.3 pts;                           zmax =            1 − 1.5−3(γ−1) = 11.3 km.
                                                                      g                                 There is at least one measurement in each the air inside the neck as
Obtaining an expression for ρ in terms of                                                               of the volume ranges: 0 < V /V0 ≤ 20%;
other quantities of interest — 0.6 pts;                  Grading: Writing down the force balance 20 < V /V ≤ 40%; 40 < V /V ≤ 60%;                                                                  A2
                                                                                                                      0                         0                         ρ a v ẍ = −∆ pA = − xγ p     ,
Correctly setting up the integral for ρ and z       equation — 0.4 pts;                                 60 < V /V0 ≤ 70%; 70 < V /V0 ≤ 80%;                                                         W
or equivalent quantities — 0.2 pts;                 Deriving a relation between the thrust and 80 < V /V ≤ 90%; 0.2 pts.
                                                                                                                   0                                         hence the frequency
Obtaining the correct expression for ρ — 0.6        the air density and speed by either consid-
pts;                                                ering momentum conservation over a small                                                                              s                 s
                                                    time interval or using the expression for                Quality of measurements: in f −2 versus                   1         pA 2     1     RT        A2
                                                                                                                                                                  f=        γ          =      γ               .
                                                    dynamical pressure — 0.8 pts;                       V  graph,    the data should  lie on  a strait line.          2π       ρ a vW 2π         µ v(V0 − V )
iv) (3 points) The drone stays afloat by using
the motor to push air through its propellers.       Tying the motor power with air density and Every point (up to 10th point) which is “good”,
                                                    speed — 0.6 pts;                                    i.e. lies on a line — 0.2 pts. If an outlier point Grading:
The amount of thrust is clearly a function of
the density of the air and the speed v at which     Finding a relation between the maximum corresponds to the second harmonic, 0.1 pts                                                p
                                                                                                        is given instead of 0.2 pts.                               • 1.5p: If f ∝ 1/ V0 − V [or f ∝ (V0 −V )−n
air goes through the propellers.                    lift power and air density — 0.4 pts;
                                                                                                                                                                     with n ≈ 0.5] either based on data ana-
                                                    Evaluating the two conditions for maximum                Volume of the bottle measured: 0.2 pts.
    Force balance can be written down as F −        lift power of the drone at z = 0 and z = zmax — If volume is not measured but read from the
                                                                                                                                                                     lysis or adiabatic oscillation approach.
m tot g = 0, where F is the vertical thrust and     0.2 pts;                                            label — 0.1 pts.
m tot the total mass of the drone. If A is the
                                                                                                                                                                   • 0.5p: Data analysis leading to unphys-
                                                    Obtaining the correct expression for zmax —              If instead of the volume of water, the                  ical (linear, quadratic, exponential,...)
effective area of the propellers, itʼs possible     0.4 pts;
to write down the expression for F by either                                                            volume of air is used, the total score for task              dependence.
                                                    Obtaining the correct numerical value for i is multiplied by 0.8 and rounded up to the
using the dynamical pressure ρ v2 or by con-        zmax — 0.2 pts;                                                                                                • 1p: Standing wave approach or data
sidering the conservation of momentum. In                                                               first decimal digit. The same applies if fre-
                                                                                                                                                                     analysis leading to 1/V dependence.
a time interval ∆ t, a volume of ∆V = Av∆ t                                                             quency is not recorded in Herz, but musical
of air passes through the propellers. The air       5. BOTTLEʼS SOUND (8 points) — Solution by notes.
                                                    Jaan Kalda, marking schemes by Eero Uustalu                                                              iii) (3 points)Based on our previous result, we
volume carries momentum ∆ p = ∆V ρ v, so                                                                     If only a graph is built with no tabulated can see that the squared period
the thrust is given by F = ∆ p/∆ t = A ρ v2 .       (task i), Topi Löytäinen, and Miha Marttinen data, subtract 10% from the final result of
                                                    (tasks ii, iii).                                    this subtask.                                                                    µ v(V0 − V )
   Secondly, itʼs possible to tie the power out-                                                                                                                         T 2 = 4π2          2
put P of the motor with outside air density         i) (4 points) The following frequencies can           ii) (1.5 points) We can consider the air in the                    RT     A
and speed. Notably, the air is pushing the          be obtained for 1-litre bottle, measured fre-         region of the bottleʼs neck of volume v ¿ V0 = is a linear function of the volume of water.
propellers vertically up with a force F . In or-    quency of sound is tabulated versus the               1 l as a mass m = ρ a v (ρ a denotes the dens- Using the measurement data we calculate the
der to function, the propeller blades need to       volume of water in the bottle.                        ity of air) which can move back and forth squared period (ms2 ).
be slanted. This amounts to a torque thatʼs         V (ml) 0        100    200    310    400              while the air inside the bulk of the bottle
proportional to F . Further, itʼs clear that the                                                          serves as a spring. If the air inside the neck   V (ml)   0    100   200   310  400
                                                    f (Hz) 144      151    163    175    185                                                                2   2
rotational speed of the propeller blades is         V (ml) 500      600    700    800    880    930       moves by distance x, the volume inside the T (ms ) 48.2 43.9 37.6 32.7 29.2
                                                                                                                                                           V (ml) 500    600   700   800  880  930
also proportional to v. This means that the         f (Hz) 205      230    260    325    420    520       bottle is changed by Ax, where A denotes the T2 (ms2 ) 23.8 18.9 14.8 9.5       5.7  3.7


                                60
These data are plotted below.                                                                       The linear fit of these data yields           • 1p: Linearization or comparison to
                                50                                                                                                                  model prediction.
                                                                                                                T 2 = 48 ms2 − V · 48 ms2 /l,
                                40                                                                                                                • 1p: For parameterization consider-
                                30                                                                  so that                                         ation either theoretical or physical
                                                                                                                 ¡                      ¢−1/2       (heuristic) justification
                                20
                                                                                                              f = 48 ms2 − V · 48 ms2 /l      .
                                10
                                                                                                    Grading:
                                0
                                     0   100   200   300   400   500   600   700   800   900 1000
                                                                                                        • 1p: For graph (labels, units)
