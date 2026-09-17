---
id: solution-document-gpho-2022-theory-solutions
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2022_theory_solutions.pdf
extraction_method: pdftotext-layout
mapped_problems: [gpho-2022-t1, gpho-2022-t2, gpho-2022-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/gpho/2022_theory_solutions.pdf."
---

COVER
                                                  GPhO
                                                  Dammam 2022


The 4th Gulf Physics Olympiad — Theoretical Competition Solutions
               Dammam, Saudi Arabia — March 14th 2022




                            — page 1 of 8 —
                        PROBLEM 1
                                                                                          GPhO
                                                                                          Dammam 2022


Problem T1. Dark Matter (10 points)                            The potential energy in the cloud can be found from its integral
Part A. Rotation curves (5.5 points)                           definition
                                                                                       ∫ r         ∫ r0         ∫ r
1. (1 pt) If Sun’s orbital speed is v⊙ , then it must cover a
                                                                          φ(r ≤ r0 ) =     gdr =         gdr +       gdr
distance of 2πr⊙ = v⊙ T⊙ in one full period. Here, r⊙ is Sun’s                           ∞          ∞             r0
                                                                                       ∫ r0              ∫ r
distance from the galactic centre. Hence,                                                    Gm0               Gm0 r
                                                                                     =             dr +              dr
                                v⊙ T⊙                                                    ∞    r 2
                                                                                                           r0   r03
                          r⊙ =        .              (0.5 pts)                            Gm0      Gm0 r2       Gm0
                                 2π                                                  =−         +             −
                                                                                           r0        2r03       2r0
The Sun can be in one of the regions, either r⊙ ≤ r1 or
                                                                                        Gm0 ( 2          )
r⊙ > r1 . If r⊙ ≤ r1 , then v⊙ = v0 r⊙ /r1 and so we get                             =         r − 3r02 .                (0.4 pts)
                                                                                         2r0
1 = v0 T⊙ /(2πr1 ) which, after plugging in the values, gives
a contradiction.                                     (0.3 pts)
Hence, r⊙ > r1 and v⊙ = v0 . Therefore,                        4. (1.5 pts) The speed profile in the region r ≤ r1 is linearly
                                                               increasing, which is also the case for the uniform density cloud
              v0 T⊙
        r⊙ =        = 2.5 × 1020 m = 8.1 kpc.        (0.2 pts) in part 3. Hence, in region A, when r ≤ r1 , ρ is constant
               2π
                                                                                                                         (0.2 pts)
Indeed, r⊙ > r1 .                                              and can be found from
2. (1 pt) The orbiting test particle of mass mtest ≪ m experi-                      √             √
ences gravitational acceleration                                                       Gm0          4πρG           r
                                                                               v=r       3   =r             = v0
                                                                                        r0            3           r1
                              Gmmtest
                       Fg =             ,            (0.4 pts) to be
                                 r2
                                                                                3v02
which acts as the centripetal force                               ρ(r ≤ r1 ) =         = ρ1 = 2.20 × 10−20 kg/m3 . (0.3 pts)
                                                                               4πGr12
                                mtest v 2                         In region B, when r > r1 , we have v(r) = v0 . This doesn’t dir-
                         Fc =                         (0.4 pts)
                                  r                               ectly agree with any of the previously investigated scenarios.
due to it orbiting on a circular trajectory. Equating the two, We can still express the total enclosed mass as
we find                        √                                                                    rv 2
                                  Gm                                                          m = 0.                     (0.3 pts)
                           v=         .                (0.2 pts)                                     G
                                    r
                                                                  The differential of the mass can be related to the density at r
    If the student writes the final answer directly, they receive via dm = 4πr2 ρ(r)dr = drv 2 /G. Thus,
                                                                                               0
full marks.
3. (1.5 pts) Solving this part requires the use of Gauss’ law for                                        v02
                                                                                         ρ(r > r1 ) =        .           (0.7 pts)
gravity. Applying it gives that the gravitational acceleration                                        4πr2 G
at a given point is only dictated by the mass that’s within an                       If the student calculates the average density
imaginary sphere of radius r.                           (0.3 pts)   ρ avg = m(r)/V  (r), then they lose up to (0.5 pts) in the last
                                                                                                                             point.
   Outside of the cloud, when r > r0 , via Gauss’ law, the gas 5. (0.5 pts) From the previous part, We calculate the matter
acts as a point mass of mass m0 = 4πr03 ρ0 /3 and the speed is density at r = r⊙ to be
                       √
therefore given by v = Gm0 /r.                       (0.2 pts)
                                                                                       v02              −21
                                                                 ρ⊙ = ρ(r = r⊙ ) =
                                                                                    4πr⊙ 2 G = 1.01 × 10    kg/m3 . (0.1 pts)
   Inside the cloud, when r ≤ r0 , the mass within r is
given by m(r) = 4πr3 ρ0 /3 = m0 r3 /r03 and so the speed is The visible density around the Sun can be estimated as the
      √
                                                     (0.3 pts) product of the number density of stars n ≈ 1/d and the mass
                                                                                                               3
v = r Gm0 /r03 .
                                                               of a typical star. This gives
   The gravitational acceleration inside and outside the cloud              ρvis ≈ M/d3 = 4.2 × 10−21 kg/m3 .           (0.2 pts)
are given by
                                                                We see that ρvis > ρ⊙ . The reason for this is that when cal-
                             Gm(r)   Gm0 r                      culating total matter density, we assumed spherical symmetry,
                g(r ≤ r0 ) =       =       ,
                               r 2    r03                       while visible mass is concentrated on the galactic disc, which
                             Gm0
                g(r > r0 ) = 2                        (0.3 pts) is highly non-spherical. As a result, ρ⊙ underestimates the
                              r                                 density around the solar neighbourhood.              (0.2 pts)


                                                         — page 2 of 8 —
                        PROBLEM 1
                                                                                          GPhO
                                                                                          Dammam 2022


Part B. Self-interacting dark matter (4.5 points)                 −mv02 /(kB T ) = −2 and C = ρ1 r12 . Hence region B is the
1. (1.5 pts)                                                      only region that agrees with the SIDM model.     (0.3 pts)
    In region A, when r ≤ r1 , we have ρ(r) = ρ1 and φ(r) =
Gm0 (r2 − 3r02 )/(2r0 ). However, Boltzmann statistics would      2. (1 pt) In region B, when r > r1 , we found that mv02 /2 =
predict the density to be                                         kB T . In an isothermal gas, the thermal speed satisfies
                                   m(r 2 −3r 2 )                                              2
                               −            0                                              mvth   3kB T
                      ρ = Ce         kB T
                                                   ,                                            =                        (0.7 pts)
                                                                                            2       2
                                                                             √
where C is a constant. This can’t agree with the actual con- so vth = 3v0 = 400 km/s.                                     (0.3 pts)
stant density, no matter the value of m/T . Hence, r ≤ r1
doesn’t agree with the SIDM model. This is not surprising, as 3. (1 pt) When travelling a radial distance of dr, a dark matter
visible matter dominates in the centre of the galaxy. (0.5 pts) particle encounters around drσn(r) other particles. (0.4 pts)
                                                                     Here σ is the cross-sectional area of a dark matter particle,
    In region B, when r > r1 , we have ρ(r) = ρ1 r12 /r2 . The and n(r) = ρ(r)/m is the number density of dark matter. The
potential can be found by integrating. First,                        thermalization condition in region r > r1 is then
                              Gm(r)       v02                             ∫ ∞           ∫ ∞
                                                          (0.2 pts)            ρ             dr ρ1 r12 σ     ρ1 r1 σ
                        g=
                                 r2
                                       =
                                           r                                     σdr =         2
                                                                                                          =          ≫ 1. (0.4 pts)
                                                                           r1 m           r1 r       m         m
and so
                                                                     Hence,
                       ∫ r 2                                                            σ        1
                            v0                                                              ≫          = 0.7 m2 /kg.      (0.2 pts)
          φ(r > r1 ) =         dr = v02 ln r + C.         (0.3 pts)                     m      ρ 1 r1
                         ∞ r
                                                                     4. (1 pt) We use n = ρ/m and mv02 = 2kB T to get
ln r doesn’t converge at infinity, instead we substituted the in-
finite limit by a constant, as in reality the constant speed profile                   ( 2 2 ) 13
                                                                                  ρ       m v0           m3 v03
can’t be sustained indefinitely (that would lead to infinite mass                   ≪                 =           .       (0.5 pts)
                                                                                 m        4πℏ2          8ℏ3 π 3/2
galaxy) and must decay at some point. Boltzmann statistics
would then predict the density to be                                 Hence,
                (                       )         mv 2
                                                                                  ( 3 3/2 ) 14
                     m                          −k T 0                              8ℏ π ρ
     ρ = B exp −           2
                         (v ln r + C) = Cr         B   .  (0.2 pts)         m≫                      = 7.5 × 10−35 kg.     (0.5 pts)
                    kB T 0                                                             v03

C stands as a proxy for a constant.        This must agree This is significantly smaller than any other elementary particle.
with ρ = ρ1 r12 /r2 and indeed, it’s satisfied when we set For example electron’s mass is me = 9.1 × 10−31 kg.




                                                         — page 3 of 8 —
                        PROBLEM 2
                                                                                         GPhO
                                                                                         Dammam 2022


Problem T2. Global warming (10 points)                           from the Sun                                           (0.5 pts)
1. (2 pts) The total radiated power of the Sun is given by       , and the other is the flux produced by Mankind Ih =
                                                                             2
Stefan-Boltzmann’s law:                                          A/(∆t4πR⊙     ) = 0.0547 W.                            (0.5 pts)
                                                                 The total absorbed and released flux are therefore Itot =
                               2
                       L⊙ = 4πR⊙ σT⊙4 .                          I1 α + Ih .                                            (0.5 pts)
                                                                 Humanity’s contribution to the total flux is small, but we keep
Here we used that the emissivity of the sun is 1.00.
                                                                 track of this for the sake of the next subtask. The ideal black
   Using Stefan-Boltzmann’s law correctly for the Sun with its   body flux from the surface is σT04 (note that we’re missing ε0
      values for radius, emissivity, and temperature (0.5 pts)   because calculating the effective emissivity requires comparing
                                                                 the actual flux with ideal black body radiation) so the effective
    As the radiation reaches Earth, it assumes an intensity      emissivity is given by
given by the ratio of L⊙ and the area of a sphere of radius
                                                                                            I1 α + Ih
D:                                                                                   εeﬀ =            = 0.635.          (0.5 pts)
                      L⊙         2
                               R⊙ σT⊙4                                                         σT04
               I0 =         =           = 1419 W.
                     4πD2         D2                              4. (2 pts) If we remove humanity’s contribution, then us-
Arriving at the solar intensity or flux at Earth’s distance from ing similar thermodynamic equilibrium arguments, the total
  the Sun using the surface area, and getting the correct value released flux must be equal to I1 α. If Earth’s new temperature
            within 25% with units (0.2 + 0.2 + 0.1) (0.5 pts) is T1 , then I1 α = σεeﬀ T14 .                             (0.5 pts)
                                              2                   (0.5 pts)
    The cross-sectional area of Earth is πR⊙    , hence the total
                                                                  0.5 for LHS and RHS each
solar power reaching Earth’s surface before being absorbed is
                                                                  Plugging in εeﬀ from the previous part, we get
                            2    4
                         R    σT
        P0 = I0 πR⊙ 2
                      = ⊙ 2 ⊙ R02 π = 1.81 × 1017 W.                                            Ih    T4
                             D                                                            1+        = 04
                                                                                               I1 α   T1
Obtaining the solar power at Earth while using I0 and Earth’s
                                                                                                                         (0.5 pts)
  cross sectional area with correct value within 25% and units
                                                                  so the change in Earth’s temperature is
                                    (0.2 + 0.2 + 0.1) (0.5 pts)
                                                                                          (      (          )−1/4 )
                                                                                                        Ih
    The absorbed amount is P0 α. The duration of a year is            ∆T1 = T0 − T1 = T0 1 − 1 +                    = 0.016 K.
                                                                                                       I1 α
∆t = 365.24 · 24 · 60 · 60 s = 3.15 × 107 s. Hence, the ratio of
mankind’s power consumption and the solar radiation is                                                                   (0.5 pts)
                       A                                         Full mark for correct values within 25%
                           = 2.20 × 10−4 .
                    P0 α∆t
                                                                 5. (1.5 pts) Our system consists of Earth’s surface and the
      Combining P0 correctly with α = 0.7 for 1 year in correct
                                                                 atmospheric layers with greenhouse gases. Both must be in
      units with A to get the ratio (0.2 + 0.3). Full mark for a
                                                                 thermodynamic equilibrium. This is in contrast with the pre-
                                      value within 25% (0.5 pts)
                                                                 vious part where we could look at the total resulting system
2. (1 pt) The average amount of solar radiation arriving on a and its aggregated properties. If we denote the black body ra-
unit area of Earth before being absorbed is I1 = P0 /(4πR⊙ 2
                                                             ) = diation being released from the surface with Is , then a fraction
I0 /4 = 355 W.                                         (0.3 pts) of Is k is absorbed in the greenhouse gases and Is k/2 (0.5 pts)
Solar panels convert to power an intensity of I1 η. Thus, the is being directed back to the surface of the Earth (and the
total area needed for the solar panels is                        other Is k/2 to space).                                (0.5 pts)
                                                                 Hence, the heat flux balance of the surface reads I1 α + Is k/2 =
                           A                  2                  Is                                                     (0.5 pts)
                  AS =          = 393 000 km ,
                         ∆tI1 η                                  (we have neglected humanity’s thermal contribution, as that
which is around 1.5 times bigger than the surface area of the leads to a negligible change in temperature ∆T1 ≪ ∆T ).
Persian Gulf.                                                    Therefore, k = 2(1 − I1 α/Is ).                        (0.5 pts)

  Combining I1 with the eﬀiciency, A, and time (0.3 + 0.2 +
                                                                    Additionally, we know that the emissivity of Earth’s sur-
           0.2). Full mark for a value within 25% (0.7 pts)
                                                                face is ε0 so Is = ε0 σT 4 , where T is Earth’s temperature. This
3. (2 pts) Because the Earth is in thermal equilibrium, it must gives us an analytic expression for k:
release the same amount of heat as it absorbs. The absorbed                                   (             )
                                                                                                     I1 α
heat flux has two contributions, one is the absorbed flux I1 α                         k =2 1−                .
                                                                                                    ε0 σT 4
                                                        — page 4 of 8 —
                        PROBLEM 2
                                                                                           GPhO
                                                                                           Dammam 2022


For T = T0 we calculate k0 = 0.5886 and for T = T0 − ∆T ,                                                                   (0.2 pts)
k1 = 0.5708. Therefore, the absorption factor of the greenhouse If the power going into the cycle is Pin , then from conser-
gases has changed by                                              vation of energy we have Pin = Pwork + Pout , where Pwork
                                                                  is the amount of wind energy produced on Earth. Further,
                    ∆k = k0 − k1 = 0.0178,
                                                                  Pwork = Pin η = (Pwork + Pout )η so
                                                        (0.5 pts)
                                                                                                        Th −Tc
which on a global scale is very significant!                                             η                Th
                                                                        Pwork = Pout          ≤ Pout
    Full mark for correct values within 25%                                            1−η           1 − ThT−T  c

                                                                                       (         )            h
                                                                                                                      (        )
                                                                                         Th                             Th
6. (1.5 pts) The Hadley circulation forms a big heat engine.                  =  P out        − 1  ≤ ε 0 σT 4
                                                                                                              k
                                                                                                            0 0 2πR 2
                                                                                                                    0      − 1
                                                                                         Tc                             Tc
The circulating air receives heat from Earth’s surface at tem-
                                                                              = 2.8 × 10 W.16
                                                                                                                            (0.3 pts)
perature Th = T0 = 15 °C,                               (0.2 pts)
and releases heat in the form of radiation in the upper at-
mospheric layers at an effective temperature Tc ≈ Th − This is P
                                                                           work ∆t/A = 1000 times bigger than humanity’s total
10 km/(1 °C/100m) = 188 K.                              (0.3 pts) production.                                               (0.2 pts)
The released heat amount is constrained by the total heat radi-
ated into space by the atmospheric gases found in the previous Full mark for correct values within 25%
subtask, i.e. Pout ≤ Is k0 2πR02 = ε0 σT 4 k0 2πR02 . . (0.3 pts)
On the other hand, the maximal eﬀiciency of the heat engine
corresponds to a Carnot cycle
                               Th − Tc
                           η≤           .
                                  Th




                                                          — page 5 of 8 —
                        PROBLEM 3
                                                                                         GPhO
                                                                                         Dammam 2022


Problem T3. Sports (10 points)                                   has minimal impact on the velocities and falling positions of
Part A. Hammer throw (4 points)                                  the hammer. As such, we can take the hammer’s trajectory to
1. (0.5 pts) We can neglect air drag in this part. The hammer be parabolic in the first order, and calculate the second order
is launched at an angle θ = 45° and travels a distance of s. If corrections drag force would have based on the average drag
the starting speed is v0 , the airtime can be expressed as       air imparts on the hammer.
                                        √                             One critical thing to note is that we calculated v0 ignor-
                           2v0 sin θ       2v0
                     t=              =         .       (0.2 pts) ing air drag. In reality, the starting speed is a bit bigger to
                               g           g
                                                                 account for drag, but the effect of this on the quantities that
The horizontal component of the velocity is constant and equal this and the following sub-task ask for is negligible. Hence, we
to                                                               still consider the parabolic trajectory starting with speed v0
                                           v0
                      vx = v0 cos θ = √ .              (0.1 pts) and spanning a horizontal distance of s (this doesn’t need to
                                            2
                                                                 be explicitly mentioned to get full marks).
The travelled distance is thus
                                                                 Approach 1. Energy considerations:
                                       v02                            From conservation of energy, the work done by air drag
                           d = vx t =                  (0.1 pts)
                                       g                         corresponds to change in the kinetic energy between starting
and so                                                           and final positions.                                   (0.1 pts)
                            √
                     v0 = gd = 28.0 m/s.               (0.1 pts)
                                                                 Hence, if we can estimate the performed work, we get an es-
2. (1 pt) Before being released, the hammer moves on a cir-
                                                                 timate for the change in speed. In general, the work done
cular trajectory of radius r = L + l = 2.22 m.         (0.1 pts)
                                                                 in a segment of length ∆l is ∆W = FD ∆l. The total work
                                                                 done can therefore be approximated as the product of the av-
This means that the hammer experiences a centripetal acceler-
                                                                 erage drag force and the total length of the parabola. (0.1 pts)
ation of v02 /r.                                       (0.3 pts)

                                                                     The speed of the hammer starts off at v0 , then decreases
   This is provided by the tension force Ft .         (0.1 pts)         √
                                                                 to v0 / 2 at the top of the parabola, and then increases back
                                                                 to v0 when it lands. This means the drag force goes from FD0
The tension force is compensated by the athlete pulling from
                                                                 to FD0 /2 and back to FD0 . The average can be estimated as
the grip. Note that the gravitational force mg is pointing
                                                                 3FD0 /4.                                               (0.2 pts)
downwards and hence, is perpendicular to the steel wire which
is horizontal at the moment when the hammer is released. So
                                                                     The length of the parabola can be estimated by noting that
the gravitational force cancels out from the force balance pro-                                           √
                                                                 the actual length of a small segment is 2 times bigger per its
jected to the direction of the wire. Hence, the force exerted by
                                                                 horizontal projection at the sides of the parabola, and equal to
the athlete is equal to the centripetal force.         (0.1 pts)
                                                                 the projection at the peak. The length of the parabola is then
                                                                              √
                                                                 roughly (1+ 2)/2 times the horizontal projection, s. (0.2 pts)
So, we obtain                         ( )
                           mv02          d
                     Ft =       = mg                   (0.3 pts)     Putting all this together,
                             r           r
which yields numerically 2.57 kN.                      (0.1 pts)                    3      √
                                                                            ∆W ≈ (1 + 2)FD0 d = 191 J.                 (0.1 pts)
                                                                                    8
3. (0.5 pts) We can calculate the drag force from the formula The conservation of energy reads mv 2 /2 = mv 2 /2+∆W , where
                                                                                                 0          1
FD = 0.24Aρa v02 . The radius of the hammer R can be found v is the final speed.                                  (0.2 pts)
                                                               1
from the expression for its mass m = 4πR3 ρv /3. Hence,       Therefore,
                   (      )1                                                          √
                      3m 3                                                                    2∆W
             R=              = 6.03 cm              (0.2 pts)    ∆v ≈ v0 − v1 = v0 − v02 −           = 0.96 m/s. (0.1 pts)
                     4πρv                                                                      m
and so A = πR2 = 0.0114 m2 and                        (0.2 pts)
                                                             Approach 2. Momentum considerations:
                                                                                                     √
                             2
                                                                 The airtime of the hammer is t ≈      2v0 /g = 4.04 s.
             FD0 = 0.24Aρa v0 = 2.64 N.            (0.1 pts)
                                                             (0.2 pts)
4. (1 pt) There are two main approaches. The more reli-
able one is using energy arguments, the second one using mo- To a decent approximations, we can decompose the air drag’s
mentum. Both approaches start by noting that the air drag action into separate horizontal and vertical components. As
                                                        — page 6 of 8 —
                        PROBLEM 3
                                                                                          GPhO
                                                                                          Dammam 2022


such, the horizontal drag at the beginning and at the end of          Even though air drag is stronger during headwind, the wind
                              √        √
the flight is 0.24Aρa (v0 )2 / 2 = FD / 2, and at the middle      serves to provide a lift force to the disc, giving it prolonged air
                              √          √
of the flight — 0.24Aρa (v0 / 2)2 = FD / 2. We can estimate       time and allowing it to fly farther.                      (0.5 pts)
the average horizontal drag either as the arithmetic average
of these two magnitudes, or just take the value FD /2 from        (If additionally to the lift force, other arguments are mentioned,
the middle of the flight, because the hammer spends near the      e.g. propelling by rotation, subtract 0.2)
maximum height relatively more time than near the ground               A qualitative force diagram is shown below. The diagram
level.                                              (0.2 pts)     should highlight a tilted discus being pushed against by a head-
                                                                  wind.                                                    (0.2 pts)
   The drag in the vertical directions is smaller as it starts
                            √
with the same value FD / 2, but at the middle of the flight It should also show gravity, drag and lift force acting on the
                             √           √
vanishes (vy goes from v0 / 2 to −v0 / 2, passing through 0). disc (or instead of the drag and lift, the resultant drag force
We can estimate its average value as the arithmetic average of which is pointed at a more vertical angle than usual). (0.3 pts)
the initial/final value and the value at the middle of the flight,
so FD /4.                                              (0.2 pts) (If any force in the direction of motion is shown, subtract 0.1)

    As such, the changes in the horizontal and vertical velo-
city components can be estimated as ∆vx = −FD t/(2m) =
−0.73 m/s and ∆vy = −FD t/(4m) = −0.37 m/s.        (0.2 pts)

   The total change in speed is then
             √(            )2 (        )2
                 v                 v
  ∆v ≈ v0 −      √0 − ∆vx + √0 − ∆vy      = 0.77 m/s
                   2                 2
                                             (0.2 pts)
                                                                  Part C. Pole vault (5 points)
Exact answer: ∆v = 0.814 m/s.
                                                                  1. (0.5 pts) The pole stores its elastic energy in bending de-
5. (1 pt)                                                         formation, i.e. the more it bends, the more elastic energy is
    One might naturally extend the two approaches in the pre-     stored.                                              (0.3 pts)
vious subtask. However, there’s a crucial diﬀiculty with using
the average horizontal deceleration and that is that the flight   From the figure, we see that positions 6 and 7 have the most
duration changes slightly, providing a comparable contribution    deformed pole. In 7, it’s slightly more bent, as can be seen
to the change in length as the horizontal deceleration. This      from how the end points of the poles are closer together. Hence,
usually results in an error that’s bigger than 30 %. A more ac-   the answer is 7.                                       (0.2 pts)
curate approach is to think in terms of the spans of parabolas
with different starting speeds, outlined below.                   2. (2 pts) We can determine the time interval from the fact
    As mentioned in the previous subtask, we’re approximat-       that in-between positions 9 and 20, the man is in free-fall.
ing the change in throwing length as the distance between the     Specifically, the y−coordinate of the centre of mass follows a
landing positions of when the hammer is thrown with speed         quadratic y = y0 + vy0 t − gt2 /2.                   (0.5 pts)
v0 with and without drag. Without drag, it flies a distance s,
but with drag it falls somewhere in-between two points defined    We measure the y−coordinates at positions 16, 18, and 20 to
by where the hammer falls without drag if the starting speeds     be y16 = 593.0 cm, y18 = 441.4 cm, y20 = 183.7 cm. (0.6 pts)
were v0 and v1 . We can roughly take this to be in-between the
two positions. Hence, with drag the hammer flies a distance of
                                                                     The time difference between two consecutive recorded
d′ ≈ (v02 /g + v12 /g)/2                              (0.8 pts)
                                                                  points is ∆t = 2τ .                            (0.1 pts)

and so                                                               Subtracting y16 , we get
                          v02 − v12
          ∆x = d − d′ ≈               = 2.68 m.      (0.2 pts)                                      g∆t2
                             2g                                                y18 − y16 = vy0 ∆t −      ,
                                                                                                      2
                                                                               y20 − y16 = 2vy0 ∆t − 2g∆t2 .              (0.4 pts)
Exact answer: ∆x = 2.39 m.
Part B. Discus throw (1 points)
                                                        — page 7 of 8 —
                        PROBLEM 3
                                                                                         GPhO
                                                                                         Dammam 2022


We can solve this by plugging vy0 from one equation to the       From part ii., we calculate vy0 = vy16 = (y18 − y16 +
other. Solving the resulting equation gives us                   g∆t2 /2)/∆t = −3.00 m/s.                     (0.2 pts)
                   √
          ∆t     1 2y18 − y20 − y16
      τ=      =                       = 0.165 s. (0.4 pts)     We also approximate the horizontal component of the velo-
           2     2           g
                                                           city at 16 as vx16 ≈ (x18 − x16 )/(2τ ) = 1.37 m/s and v3 ≈ v2 .
3. (0.5 pts) We can estimate the speed of the man as the (0.2 pts)
distance covered between positions 1 and 3 divided by 2τ .
(0.3 pts)                                                  We can finally manipulate the conservation of energy to
                                                                                   2
From the figure, we measure l13 = 295.3 cm and so v2 ≈                         mv16             mv32
                                                                          W =         + mgy16 −      − mgy3
l13 /(2τ ) = 8.9 m/s = 32.2 km/h.              (0.2 pts)                         2               2
                                                                                   2       2
                                                                               mvx16  + mvy16           mv22
                                                                             ≈                + mgy16 −      − mgy3
4. (1 pt) We can find this from conservation of energy. For one,                       2                  2
there is no work being done by the pole as it starts and ends                = 1.0 kJ                             (0.2 pts)
completely straight (and has negligible kinetic energy). Fur-
ther, the energy at position 12 is the same as in 16 (because
                                                                 5. (1 pt) The maximal height of the centre of mass can be
the man is in free-fall). The conservation of energy then reads
                                                                 found following the measurements from part ii.     (0.2 pts)
         mv32                  mv162
              + mgy3 + W =           + mgy16 .        (0.2 pts)
          2                      2                                  From there we found that y16 = 5.930 m, vy16 = −3.00 m/s.
From the figure, we measure y3 = 113.9 cm, x16 = 21.1 cm Hence, the peak took place ∆t1 = −vy16 /g in the past and it
(with respect to some arbitrary reference point), x18 = 66.3 cm. has coordinates yp = y16 −vy16 ∆t1 +g∆t21 /2 = y16 +vy16
                                                                                                                      2
                                                                                                                          /(2g) =
(0.2 pts)                                                        6.39 m.                                                (0.8 pts)




                                                        — page 8 of 8 —
