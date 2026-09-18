---
id: solution-document-gpho-2016-theory-solutions
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2016_theory_solutions.pdf
extraction_method: pdftotext-layout
mapped_problems: [gpho-2016-t1, gpho-2016-t2, gpho-2016-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/gpho/2016_theory_solutions.pdf."
---

Problem T1.              Stabilizing unstable states (11 iv. (1 pt) The cyclist is able to balance himself by turning
points)                                                                     the handlebar so that the line connecting the wheels will move
Part A. Stabilization via feedback (3.5 points)                             to the desire direction. For that line to move, the bike must
i. (1.5 pts) The moment of inertia of the rod is                            move forward to a distance which is of the order of inter-wheel
       2
I = ml3 . The torque is mg φl
                            2 .                                 (0.4 pts)   separation. So we can require vm τ ≈ d, where τ is bike’s char-
so that the Newton’s 2nd law is written as                                  acteristic falling time.                            (0.5 pts)
                                               φl                           Note that with this equation we neglect the cyclists’ reaction
                                I φ̈ = mg
                                               2                          time (which makes balancing more diﬃcult) but on the other
                                       3g                                 hand the line connecting the wheels moves slightly already at
                                φ̈ =      φ.                          (1)
                                       2l                                 a twice smaller forward-displacement of the bike (which makes
                                                                (0.4 pts) balancing easier). Anyway, we are only making an estimate, so
If we take φ = Ae τ + Be− τ , then
                     t           t
                                                                            a mistake by a factor of 2 is perfectly OK.
φ̈ = τA2 e τ + τB2 e− τ = τφ2 .
         t           t
                                                     (0.3 pts)                 Then we get                         √
Substituting this into the equation of motion (1) we get                                                               2L
                                                                                                 d = vm τ = vm
                                φ     3g                                                                               3g
                                  2
                                    =    φ
                                τ     2l                                                                                         (0.2 pts)
                                     √
                                       2l                                                               √
                                τ=        .                                                                 3g
                                       3g                                                       vm = d         = 2.7 m/s
                                                                                                            2L
                                                                (0.4 pts)                                                        (0.3 pts)
                            t
                                        − τt
This means that φ = Ae + Be τ                  is the solution for the equa- Part B. Tightrope walker (3.5 points)
tion of motion.                                                             i. (1 pt) From the conservation of angular momentum
ii. (0.5 pts) The boy has to react before the rod falls over the
                                                                                                      dα1        dα2
angle π2 . Boy notices that the rod is falling, and tries to react.                        m(1.4H)2       + mH 2     = Const.
                                                                                                       dt         dt
If the rod falls faster than his reaction time, he cannot keep it
                                                                                                                         (0.3 pts)
in balance. In the expression φ = Ae τ + Be− τ , the dominat-
                                        t       t

                                                                  Partial credit 0.2 pts if the conservation is mentioned without
ing term is the first one (the second one decays in time), so we
                  t                                               writing equation. This process is instantaneous, i.e. dα dt and
                                                                                                                             1
can put φ = Ae τ , where A is the angle at t = 0. Hence, the dα
                                                                    1
                                                                       are very large, much large than that constant at the right-
falling time t = τ ln(π/2A) depends on the initial angle A, but dt
                                                                  hand-side (which is defined by the initial falling speed), hence
logarithmic dependence is very slow — the logarithm remains
                                                                  we can put Const= 0.
always of the order of unity. So we can estimate the falling time
                                                                                                                         (0.2 pts)
just as the characteristic time of the rod. This means that
                                 √                                This simplifies into
                                   2 lr
                            τr ≈                                                          1.96∆α1 = −∆α2                       (2)
                                   3g

                                                                (0.3 pts)                                                        (0.1 pts)
                                                                            We also have
                                     3g
                         lr = τr2       = 0.59 m
                                      2                                      β = α1 − α2 = (α0 + ∆α1 ) − (α0 + ∆α2 ) = ∆α1 − ∆α2 (3)
                                                     (0.2 pts)
                                                                                                                                 (0.2 pts)
iii. (0.5 pts) The bird won’t be able to rebalance itself when
                                                                            Solving the equations (1) and (2) we get
it has fallen over π2 . Similarly to the previous question, we can
say that the bird’s reaction time must be equal to the charac-                                                     β
                                                                                                      α1 = α0 +
teristic time τb .                                              (0.3 pts)                                         2.96
Then we get                                                                                                                      (0.1 pts)
                                √                                                                                 1.96
                                     2 lb                                                         α2 = α0 −            β
                         τb ≈             = 0.065 s                                                               2.96
                                     3g                                                                                       (0.1 pts)
                                                                (0.2 pts)   ii. (0.5 pts) In order to be able to straighten himself, the
                                                                            walker’s centre of mass has to move leftwards, by a negative
                                                                   — page 1 of 7 —


angle.                                               (0.1 pts)                              1.96      1.96
                                                                                  α2 = α0 −      β0 ≈      β0
                                                                                            2.96      2.96
                                                                 The torque can be expressed as
   By changing the upper body’s angle by ∆α1 , the lower
body’s angle will change by ∆α2 = −1.96∆α1 . The centre                           M = 1.4mgHα1 + mgHα2 =
of mass will then move by
                                                               1.4          1.96            0.56
                                                                   β0 mgH −      β0 mgH = −      β0 mgH
 1.4H∆α1 + H∆α2 = 1.4H∆α1 − 1.96H∆α1 = −0.56H∆α1              2.96          2.96            2.96
                                                                                                       (0.3 pts)
                                           (0.3 pts) Writing out ∆L = M Tb we get

                                                                                           α0      0.56
   Because the centre of mass will have to move by a negative                   −5.92mH 2      =−       β0 mgHTb
                                                                                            τ      2.96
angle, ∆α1 needs to be positive, which means that the walker                                       √                    √
has to bow clockwise.                              (0.1 pts)                   α0 H           α0 H    2.4 g          α0 H
                                                                    Tb = 31.29        = 31.29                = 28.18
                                                                               β0 τ g         β0 g 2.96 H            β0   g
iii. (1 pt) We can write the equation of motion                                                                        (0.1 pts)
                                                                 Part C. Kapitza’s pendulum (4 points)
                      2.96α¨1 H = 2.4gα1
                                                                     Throughout the entire problem, we use the system of refer-
                                                        this dif- ence of the suspension point.
Similarly to the question i. in part A, the solution for√
ferential equation is α1 (t) = Ae τ + Be− τ , where τ = 2.96
                                  t       t                   H
                                                          2.4 g .
                                                                  i. (1.5 pts) During these periods of time when the suspension
(0.2 pts)                                                         point accelerates upwards (and force of inertia is downwards),
Because the time it takes to get to the vertical position is the equation of motion of the pendulum can be written as
                                 t
infinite, the component Ae τ needs to be 0, meaning that                                       d2 φ    a0
α1 (t) = Be− τ .
              t
                                                         (0.3 pts)                                  = φ,
                                                                                               dt2      l
By taking time derivative, we obtain
                                                                   where a0 = 2v0 /T is the frame’s acceleration.      (0.4 pts)
α̇1 = − τ1 Be− τ .
                t
                                                         (0.3 pts)
                                                                   Incomplete attempts at writing Newton second law will be par-
For the instance when the boy straightened himself, t = 0, the
                                                                   tially credited (0.2 pts).
equations take form α1 = B and α̇1 = − B       τ . So, α̇1 = − τ , The relative change of φ is assumed to be small, so we can
                                                               α1

which can be rewritten as
                                     √                             approximate φ ≈ φ0 to obtain
                      α̇1      1        2.4 g
                          =− =−                                                               d2 φ    2v0
                      α1       τ        2.96 H                                                   2
                                                                                                   =      φ0 .
                                                                                              dt      Tl
                                                         (0.2 pts)
                                                                                                                       (0.2 pts)
iv. (1 pt) After the walker has straightened himself, the angle
                                                                   During the rest of the time, the same equation can be used if
which he is at is still α0 , because during stage where he is bow-
                                                                   a0 is changed to −a0 .                              (0.2 pts)
ing, the torque is much larger than when he is straightened,
                                                                   Therefore, the graph consists of parabolic segments, as depic-
meaning that the change in angular speed is much larger than
                                                                   ted in the Figure.                                  (0.4 pts)
the change in the angle.                                 (0.1 pts)
                                                                   The amplitude is found as
As found in the previous subquestion, the speed before and
after the bowing are ατ0 and − ατ0 respectively. Then the change                                    1 v0 T
                                                                                            ∆φ =           φ0 .
                                                                                                    4 l
in the angular momentum is
                                           α0                                                                          (0.3 pts)
                        ∆L = −5.92mH 2
                                           τ
                                                    (0.3 pts)
Because during the falling stage the change in angle is minus-
cule, we can express the change in angular momentum as
∆L = M Tb , where M is the torque during bowing stage.
                                                                 ii. (1.5 pts)
                                                   (0.2 pts)
                                                                     The average torque ⟨M ⟩ = ⟨mla(t)φ(t)⟩ .          (0.3 pts)
During the bowing stage, the angles of the body segments are
                                                                 Let us note that ⟨a(t) ⟨φ⟩⟩ = ⟨a(t)⟩ ⟨φ⟩ = 0.         (0.3 pts)
                                β0     β0
                   α1 = α0 +        ≈                            Therefore we can rewrite the average torque as
                               2.96   2.96
                                                        — page 2 of 7 —


                                        2v0                                                                             (0.2 pts)
    ⟨M ⟩ = ⟨mla(t)[φ(t) − ⟨φ⟩]⟩ = −ml       ⟨|φ(t) − ⟨φ⟩ |⟩
                                         T

                             (0.3 pts; if wrong sign 0.2 pts) iii. (1 pt) Gravity field does not aﬀect the expression for the
It is easy to see that the average of |φ − ⟨φ⟩ | over the entire average torque of the force of inertia. So, we can use the result
period equals to the average over the time interval 0 < t < τ . of the previous question. However, it gives rise to an additional
Straightforward integration yields                                contribution to the average torque, equal to glmφ0 . (0.4 pts)
                   ∫        (         )                           Therefore, the equation of motion can be written as
                 2 T /2           4t2        2        1 v0 T                                    (          )
 ⟨|φ − ⟨φ⟩ |⟩ =          ∆φ 1 − 2 dt = ∆φ =                  φ0 .                      d2 φ0         1
                T 0               T          3        6 l                            l2 2 = gl − v02 T 2 φ0 .
                                                                                        dt           3
                                                       (0.4 pts)
                                                                                                                        (0.4 pts)
Upon substituting this result into the previous expression we
                                                                  The stability is ensured if the factor at the right-hand-side is
obtain
                                                                  negative, i.e. if 3gl < v02 .                         (0.2 pts)
                                1
                       ⟨M ⟩ = − mv0 φ0 .
                                     2
                                3




                                                        — page 3 of 7 —


Problem T2. Gravitational waves (10 points)                                  ii. (0.8 pts) The dimensions for A need to be
Part A. Dipole radiation (2.4 points)                                                           1          kgm2 1          1
                                                   1
   For the sake of convenience, let us denote k = 4πϵ                                     W            =              = 3 2
                                                      0                                       kg2 m4        s3 kg2 m4   s m kg
i. (1.4 pts) The total dipole moment can be expressed as
                                                                                                                                  (0.2 pts)
d⃗ = −⃗r1 e + ⃗r2 Ze,                          (0.2 pts)
                                                                    A can only consist of the gravitational constant G, speed of
where ⃗r1 and ⃗r2 are the position vectors of the electron and
                            ¨                         ⃗      ⃗
                                                                    light c and angular velocity ω.                        (0.2 pts)
nucleus respectively. Then d⃗ = −r⃗¨1 e + r⃗¨2 Ze = − m
                                                      F
                                                        e − mF1 Ze,
                                                                    We can write a system of equations for every unit, m, s and kg.
                                                          (0.1 pts)
                                                                    If we take the power of G, c and ω to be a, b and c respectively,
but because the mass of the nucleus m1 is much larger than m,
                                                                    we can write out for metres
we can neglect the second term. Then
                                                                                             3a + b = −2,
                       ¨      F⃗       kZe3
                      d⃗ = − e =
                              m         mr2                                                                                (0.1 pts)
                                                          (0.3 pts) for seconds
                                                                                                    −2a − b − c = −3,
                           ¨2         (           )2
                          d⃗              kZe 3
                                                         1                                                                        (0.1 pts)
              Ped =               =
                      4πϵ0 c3             mr2          6πϵ0 c3               and finally for kilograms
                                                        (0.2 pts)
We can express λ as λ = fc = 2πrc                                                                          −a = −1.
                              v .                    √
                                                        (0.2 pts)
                              2         2
We get v from the relation mv        Ze
                             r = k r 2 , then v = e
                                                         kZ
                                                         mr .
                                                                                                                               (0.1 pts)
                                                        (0.3 pts)            Solving the equations we get a = 1, b = −5 and c = 6, which
Finally                               √                                      means that
                        2πrc    2πrc mr                                                                      ω6
                  λ=          =                                                                       A=G 5
                         v       e        kZ                                                                 c
                                                                                                                               (0.1 pts)
                                                        (0.1 pts)
                          ⃗    ∑
ii. (1 pt) We know that dg =      ⃗ri mi . Let us recall that the
                                          i
                                                                             iii. (0.8 pts) The solution for this subquestion is the same as
distance to centre of mass is ∑
                                 ⃗ri mi                                      for the previous one. The units for K are
                       ⃗rcm = ∑i        .
                                 i mi                                                                      W   kg
                                                                                                              = 3
Then                                                             (0.3 pts)                                 m2   s
                          ∑                       ∑                                                                              (0.2 pts)
                  d⃗g =         ⃗ri mi = ⃗rcm          mi
                           i                       i
                                                                             K can only depend on G, c and ω,                    (0.2 pts)
                                                  (0.2 pts)                  if we take their powers to be a, b and c respectively, we can
                                  ⃗˙   ∑
(Equivalently one can notice that dg =    vi mi the net mo- write out for metres
                                         i⃗
mentum.) ⃗rcm is constant because there aren’t any external                                                3a + b = 0
forces acting on the system.                      (0.3 pts)                                                                       (0.1 pts)
                  ¨
                  ⃗
This means that dg = 0 and Pgd = 0.               (0.2 pts) for seconds
                                                                                                       −2a − b − c = −3
Part B. Quadrupole radiation (7.6 points)
                                                                                                                                  (0.1 pts)
i. (1 pt) The force acting on one of the stars is
                            M2      M v2                                     and finally for kilograms
                     F =G 2 =
                            4R       R                                                                      −a = 1
                                                  (0.6 pts)
From here we can express the star’s speed v. We can express                                                                    (0.1 pts)
                                               v
the star’s angular speed from the relation ω = R .               (0.2 pts)   Solving the equations we get a = −1, b = 3 and c = 2, which
                                          √                                  means that
                          v   1               GM                                                            c3 ω 2
                       ω=   =                                                                         K=
                          R   2               R3                                                             G
                                                                 (0.2 pts)                                                     (0.1 pts)


                                                                   — page 4 of 7 —


                                              P
                                                                                                   √
                                            qg
iv. (1 pt) The flux at distance L is S = 4πL  2,    (0.4 pts)                                 1        GM
                                                 2                                         ω=              ;
on the other hand we can express flux as S = Kh0 . This means                                 2        Rs3
that
                                 Pqg   AM 2 R4                                                                         (0.2 pts)
                       Kh20 =        =
                                4πL2    4πL2                       substituting Rs we obtain
                                                       (0.4 pts)                        √
                                                                                      1        c6         c3
and finally                                                                      ω=      GM          =  √
                                                                                      2      8G3 M 3   2 2GM
       √               √
           AM 2 R4         Gω 6 G M 2 R4 Gω 2 M R2      G2 M 2                                                         (0.2 pts)
h0 =               =                       =  √      =  √
           K4πL2            c5 c3 ω 2 4πL2   2 πc4 L   8 πc4 LR    The mass of a black hole is

                                                       (0.2 pts)                  c3
                                                                              M= √    = 1.45 × 1032 kg = 72 M⊙
                                                                                2 2ωG
v. (1 pt) At distance Rs from the black hole, it takes all                                                         (0.2 pts)
the energy mc2 for an object to overcome the potential energy In reality the masses of the black holes were 36 M⊙ and 29 M⊙ ,
−G MRms
        . This means that                                     where M⊙ is the mass of Sun.
                                                                   vii. (1.5 pts) As mentioned previously the maximal strain is
                                2   Mm
                             mc = G    .                           when the black hole’s orbital radius is Rs , reading from the
                                    Rs
                                                                   graph we get that the strain is h0 ≈ 0.9 × 10−21 .   (0.4 pts)
                                                       (0.7 pts) Then, using the result of question iv,
                                    2
(If non-relativistic energy mc /2 is used, deduct 0.3 pts.) From
                                                                                                G2 M 2
here we can express Rs                                                                 h0 = √ 4         ;
                                                                                             8 πc LRs
                                 GM
                            Rs = 2
                                   c                                                                                   (0.4 pts)
                                                                 Substituting Rs we obtain
                                                       (0.1 pts)
This answer is 2 times smaller than the correct one, which                            G2 M 2 c2    GM
                                                                                 h0 = √ 4       = √ 2
means that                   2GM                                                     8 πc L 2GM  16 πc L
                       Rs =
                               c2                                                                                      (0.3 pts)
                                                       (0.2 pts) The distance to the black hole is

                                                                                                   GM
vi. (1.5 pts) We can estimate the mass of the black holes by                              L=       √       ;
                                                                                                 16 πc2 h0
finding the orbital frequency and then using the expression we
                                                                                                                       (0.2 pts)
found in the first subquestion (Kepler’s III law). (0.3 pts)
                                                             numerically
The strain is maximal when the orbital radius for the black
                                                                                        L = 4.21 × 1024 m.
holes is Rs .                                      (0.3 pts)
Reading from the graph, we get that the orbital period is                                                   (0.2 pts)
T ≈ 0.006 s                                     (0.3 pts) This can be also expressed in megaparsecs, L = 136 Mpc. In
and frequency ω = 2π
                  T = 1000 rad/s. Then                             reality, the distance was L = 410 Mpc ± 170 Mpc.




                                                         — page 5 of 7 —


Problem T3. Magnetars (11 points)                             iii. (1 pt) During the collapse there is no torque on the
i. (1.5 pts) If we change the frog’s height by ∆h, the change star, this means that the angular momentum remains constant.
in potential energy needs to be smaller than the change in mag- Thus
netic energy.                                         (0.2 pts)                                    2           2
                                                                                                     M Rs2 ωs = M Rn2 ωn
                                                                                                   5           5
Note that for every point in frog, the change in magnetic energy
is the same, thus we can express it as                                                                                                 (0.6 pts)
                                                                                                                          1/3
                                                                             Recall that Rs is inversely proportional to ρs .          (0.2 pts)
                           ∆(B 2 )χ   B 2 χ∆h
                ∆E = −V             =V 0                                     Now we can express ωn
                            2µ0        2h0 µ0                                                                         (        ) 23
                                                                                                           Rs2            ρn
                                                                 (0.6 pts)                       ωn = ωs       = ωs
The change in potential energy is                                                                          Rn2            ρs

                         ∆Π = V ρg∆h                                                                                                   (0.2 pts)
                                                                             iv. (1.5 pts) After time t, the neutron star has turned by an
                                                                 (0.3 pts)   angle β = ωn t.                                      (0.2 pts)
Then
                         ∆E + ∆Π < 0
                                                                             The magnetic fields pass any radial line from the centre of the
                     B 2 χ∆h                                                                              β
                    V 0      + V ρg∆h < 0                                    neutron star on average N = 2π  = ω2π
                                                                                                                 nt
                                                                                                                    times.       (0.3 pts)
                      2h0 µ0
                                                                             The total magnetic flux entering the outer shell remains con-
                                                                 (0.2 pts)
                                                                             stant, and thus is always equal to Φ = 2πR0 B0 ,     (0.3 pts)
This means that               √                                              where R0 is the radius of the outer shell. This means that the
                                       2h0 µ0 ρg
                       B0 >        −                                         flux through any radial line is ΦN .                 (0.4 pts)
                                          χ
                                                                             Then
                                                                 (0.1 pts)                    BR0 = 2πR0 B0 N = R0 B0 ωn t
and numerically
                                                                                                                                       (0.2 pts)
                          B0 = 5.32 T.
                                                                             And finally
                                                                 (0.1 pts)                               B = B0 ωn t

                                                                                                                                       (0.1 pts)
ii. (1 pt) Let us observe a piece of the star with a volume V0
before the collapse and volume V1 after the collapse. The mass v. (1 pt) We can find the gravitational energy by integrating:
before and after are same. This means that                      we imagine removing the material layers of thickness dx one by
                                                                one, starting from the outermost one. The potential energy for
                         V0 ρs = V1 ρn
                                                                a hollow sphere with a thickness dx in the gravity field of the
                                                      (0.1 pts) matter inside it is
The radius of the star scales as V 1/3 ,                         (0.1 pts)                     (4πx2 dxρn ) 34 πx3 ρn    16π 2 2 4
and the cross-sectional area as V 2/3 .                          (0.1 pts)           dΠ = −G                          =−      Gρn x dx
                                                                                                        x                  3
The total magnetic field through the volume is also the same
                                                                                                                                       (0.2 pts)
before and after the collapse:
                                                                             Integrating from x = 0 to x = Rn we get
                               2             2
                         Bs V0 = Bn V1
                               3             3
                                                                                                     16π 2 2 5       3 GMn2
                                                                                              Π=−         Gρn Rn = −
                                                                 (0.4 pts)                            15             5 Rn
Now we can express Bn                                                                                                                  (0.3 pts)
                          (        ) 23          (        ) 23               A partial credit of 0.2 pts is given is if integration is substituted
                              V0                     ρn
                Bn = Bs                   = Bs                               by a simplifying product.
                              V1                     ρs
                                                                             This potential energy is equal to the magnetic energy
                                                                 (0.2 pts)
and numerically                                                                                      4 3 2 1       3 GMn2
                                                                                               Π=      πR Bn     =
                        Bn = 5.0 × 105 T                                                             3       2µ0   5 Rn

                                                                 (0.1 pts)                                                             (0.3 pts)


                                                                   — page 6 of 7 —


Solving for Bn we get               √                             tainty principle. The uncertainty of the momentum is
                              M         µ0 G
                        Bn = 3 2
                              R         10π                                                  ∆p = 2me v
                                                     (0.1 pts)
and numerically                                                                                                             (0.3 pts)
                       Bn = 1.18 × 10       14
                                                 T                and uncertainty of the coordinate

                                                     (0.1 pts)                                ∆x = 2R1

vi. (1 pt) The electron orbit will get distorted when the                                                                   (0.2 pts)
Lorentz force becomes in the same order of magnitude as Cou- So we have
lomb force.                                        (0.1 pts)                                 4me vR1 ≈ ~
The Coulomb force is
                                                                                                                            (0.2 pts)
                               1 e2                                                    ~
                         F1 =       2                             Substituting me v = 4R     to the first equation we get
                              4πϵ0 RH                                                    1


                                                     (0.2 pts)                                ~
                                                                                                  = 4eBn
On the other hand,                                                                            R12
                                   me v 2
                            F1 =                                                                                            (0.1 pts)
                                   RH
                                                     (0.2 pts) Then                                 √
                                                                                                          ~
We can express the velocity of electron                                                      R1 =
                          √                                                                             4eBn
                                   1                                                                                        (0.1 pts)
                    v=e
                             4πϵ0 RH me
                                                                  The length of the cylinder will still remain in the order of mag-
                                                     (0.1 pts)
                                                                  nitude of RH because the Lorentz force doesn’t act on the
Then the Lorentz force is
                                                                  electron in that axis (parallel to the magnetic field). (0.5 pts)
                            F2 ≈ evB                           Then the ratio of the length and diameter is approximately
                                                                                                  √
                                                     (0.2 pts)                          RH          eBn
                                                                                   κ=       = 2RH
Upon substituting v we obtain                                                           R1           ~
                            √
                                   1
                   F 2 = e2                                                                                      (0.1 pts)
                              4πϵ0 RH me
                                                             and numerically
From the condition F1 ≈ F2 we can express the magnetic field
                                                                                     κ = 39 ≈ 40 .
strength                    √
                                me                                                                               (0.1 pts)
                       B=            3
                              4πϵ0 RH                        Note that if we were to make calculations for magnetars with
                                                 (0.1 pts) B = 1 × 1011 T, the orbital electrons would be ultrarelativistic.
and numerically
                        B = 2.56 × 105 T
                                                     (0.1 pts)

vii. (2 pts) Perpendicularly to the magnetic field, the Lorentz
force is much larger than the Coulomb force since the magnetic
field Bn is much larger than the magnetic field found in the
previous question. This means that in the perpendicular plane,
the electrons move along a circular cyclotron orbit. (0.2 pts)
Then we can write
                        me v 2
                               = evBn ,
                         R1
                                                     (0.2 pts)
where R1 = d/2 is the orbit’s radius. Now we apply the uncer-

                                                        — page 7 of 7 —
