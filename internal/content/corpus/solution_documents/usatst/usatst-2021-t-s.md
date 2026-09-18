---
id: solution-document-usatst-2021-t-s
source: usatst
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usatst/2021_T_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/usatst/2021_T_S.pdf."
---

2021 USAPhO+                                                                                               1




            AAPT UNITED STATES PHYSICS TEAM
             AIP 2021

                            Traveling Team Selection Exam

                    Information About The 2021 USAPhO+
   • The 2021 USAPhO+ is a 5-hour exam taking place on Saturday, May 8 from noon to 5 PM,
     Eastern time.

   • The exam is hosted by AAPT on the platform provided by Art of Problem Solving. It will
     be proctored by the US Physics Team coaches via Zoom.

   • Before you start the exam, make sure you are provided with blank paper, both for your
     answers and scratch work, writing utensils, graph paper and a ruler, a hand-held scien-
     tific calculator with memory and programs erased, and a computer for you to log into the
     USAPhO+ testing page.

   • At the end of the exam, you have 20 minutes to upload solutions to all of the problems for
     that part. For each problem, scan or photograph each page of your solution, combine them
     into a single PDF file, and upload them on the testing platform.

   • USAPhO+ graders are not responsible for missing pages or illegible handwriting. No late
     submissions will be accepted.

Congratulations again on your qualification for the USAPhO+. We wish you the best of luck on
the challenging problems to follow.




We acknowledge the following people for their contributions to this year’s exam (in alphabetical order):

JiaJia Dong, Mark Eichenlaub, Abijith Krishnan, Kye W. Shi, Brian Skinner, Mike Winer, and Kevin Zhou.




                    Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                             2



Question 1
The Jet Stream
The jet stream is an eastward wind current that moves over the continental United States at an
altitude of 23, 000 to 35, 000 feet (the range of typical cruising altitudes of commercial airlines).
This strong current affects flight times significantly: flights traveling eastward fly significantly faster
than flights traveling westward.
    This problem consists of two independent parts. In the first part, you will consider a simple
model for airplane flight. In the second part, you will determine the jet stream speed on a fictitious
planet called Orb.

1. The power that a plane expends is used both to combat drag and to generate lift. Throughout
   this part of the problem, you may assume that the plane travels with horizontal velocity vrel
   relative to the air, the density of air is ρair , the mass of the plane is m, and the cross-sectional
   area of the plane is Acs .

  (a) The drag force on an airplane is given by
                                                 1
                                        Fdrag = − cd ρair Acs |vrel |vrel ,
                                                 2
      where cd is the drag coefficient (which depends on the shape of the plane). Write an expression
      for the power expended by the airplane to combat the drag force from the air.

                                                  Solution
         We have that P = F · v, so
                                                   1             3
                                            Pdrag = cd ρair Acs vrel .
                                                   2

  (b) Airplanes generate lift by deflecting air downward.
       i. Estimate the air mass per unit time which is deflected by the wings of the plain.

                                                   Solution
            The mass flux is given by ρvrel , so the rate is

                                                     ρair vrel Acs .

      ii. Estimate the power expended by the plane for lift.

                                                   Solution
            Suppose the deflected air has velocity u downward. Then the lift force is given by

                                                  mg = ρvrel Au.

            The power is given by
                                                               m2 g 2
                                              P = Fu =                    .
                                                            ρair vrel Acs


                    Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                             3



            This is the power that goes into accelerating the air downward, so by energy conser-
            vation it must have come from the plane’s engine.

  (c) Estimate the speed at which an airplane flies relative to the air by minimizing the power
      expended by the plane. To get a numeric answer, you may use the following parameters:
                   mplane ∼ 8 × 104 kg,     ρair ∼ 1 kg/m3 ,        cd ∼ 10−2 ,   Acs ∼ 100 m2 .



                                                   Solution
        The total power is given by

                                                  m2 g 2     1         3
                                        P ∼                 + cd ρAcs vrel .
                                               ρair vrel Acs 2
        The minimum power occurs when the derivative vanishes, which roughly gives
                                                            !1/4
                                                  m2 g 2
                                      vrel ∼                       ∼ 300 m/s.
                                                 cd ρ2 A2


    Next, we estimate the jet stream speed using flight times. Because the jet stream speed on
Earth varies greatly with location, time of year, and climate effects (such as El Niño and La Niña),
you will instead consider the fictitious planet Orb, where the jet stream is eastward and uniform
in the region of interest. At the end of the problem is a map of the region, whose area is much
smaller than the surface area of Orb (i.e., you can neglect the curvature of Orb).
2. At cruising altitude, we asume all airplanes travel at a fixed speed vrel relative to the air. (This is
   not necessarily the same as your answer to 1(c), which was just a rough estimate.) Additionally,
   we assume that flights occur in three stages – (1) taxi and takeoff, (2) flight at cruising altitude,
   (3) landing and taxi – and that stages (1) and (3) take a fixed total time t0 for every flight.
  (a) Suppose a plane, at cruising altitude, is traveling at an angle θ away from due east relative
      to the ground. What is the speed of the plane relative to the ground? Give your answer in
      terms of vrel , θ, and vw , the speed of the jet stream relative to the Earth’s surface.

                                                   Solution
        The velocity of the plane relative to the ground, v, the velocity of the plane relative to
        the air, vrel , and the jet stream velocity, vw , all form a triangle under tip-tail addition.
        Then, from law of cosines,
                                           2
                                          vrel = v 2 + vw
                                                        2
                                                          − 2vvw cos θ.

        Solving gives us                                 q
                                       v = vw cos θ +      2 − v 2 sin2 θ.
                                                          vrel  w

        Of course, we assumed vw < vrel , as otherwise flying westward would not even be possible.

 (b) If the plane travels a distance D, what is the total travel time t, including taxi, takeoff, and
     landing?

                    Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                    4




                                             Solution
       The answer is given by
                                                D
                                             t=    + t0 ,
                                                 v
       where v is our answer to the previous part.


 (c) Below, we present some data on airplane flights on Planet Orb. Each of the flight times shown
     below has an independent uncertainty of ∆t = 5 min. From the data and the map, determine
     vw and vrel , giving your answers in km per hour with uncertainties. Indicate clearly what
     two quantities you are plotting against each other on each graph that you plot.

                            Departure City      Arrival City       t (min)
                              Noethersville       Rubinstead          185
                               Rubinstead        Noethersville        286
                                Curieton         Franklinport         107
                              Franklinport         Curieton           244
                              Planck Town        Maxwellbury          143
                              Maxwellbury        Planck Town          256
                               Rubinstead       Boltzmannburg         92
                             Boltzmannburg        Rubinstead          190
                             Einsteinopolis      Maxwellbury          160
                              Maxwellbury       Einsteinopolis        384
                              Planck Town        Franklinport         128
                              Franklinport       Planck Town          266
                             Einsteinopolis      Franklinport         188
                              Franklinport      Einsteinopolis        431
                             Boltzmannburg       Maxwellbury          135
                              Maxwellbury       Boltzmannburg         150

                            Departure City        Arrival City     t (min)
                             Noethersville        Einsteinopolis      68
                             Einsteinopolis       Noethersville       74
                             Franklinport         Newton City         144
                             Newton City          Franklinport        129
                               Curieton            Rubinstead         186
                              Rubinstead            Curieton          175
                             Planck Town            Curieton          95
                               Curieton           Planck Town         102
                             Planck Town           Rubinstead         249
                              Rubinstead          Planck Town         250




                 Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                       5




                                              Solution
      Note that the pairs of cities given in the second table are directly north/south of each
      other. For such cities, we expect the times in either direction to be equal, up to the
      timing uncertainty, and the expression for the time simplifies to
                                                  D
                                        tN S = q        + t0 .
                                                 2 − v2
                                                vrel  w

      We can read tN S off the second table, and calculate D from the figure. The unknown
      quantity t0 goes into the intercept, while the slope is
                                     1
                                 q        = 0.0768 ± 0.0048 min/km.
                                   2 − v2
                                  vrel  w

      Next, consider the pairs of cities given in the second table. We can cancel out the effect
      of t0 by considering the difference in flight times in the two directions,
                                        D                               D
             t12 − t21 = −             q                +              q                  .
                                         2 − v 2 sin2 θ
                             vw cos θ + vrel              −v   cos θ +   v 2 − v 2 sin2 θ
                                              w              w             rel  w

      After some simplification, we find
                                                       2Dvw cos θ
                                         t12 − t21 =     2 − v2 .
                                                        vrel  w

      Therefore, plotting the time difference versus D cos θ, where θ can also be measured from
      the graph, gives
                                    2vw
                                  2      2
                                           = 0.0722 ± 0.0003 min/km.
                                 vrel − vw
      Combining these results gives the answers,

                             vrel = 860 ± 50 km/h,      vw = 370 ± 30 km/h.

      Uncertainty on the times should be propagated through the calculation using the usual
      rules, while the uncertainties on the slopes are found by drawing the steepest and shal-
      lowest fit lines.




                Copyright ©2021 American Association of Physics Teachers


                                                                     N
                                                                                                                          2021 USAPhO+

                                                                                    Rubinstead    Boltzmannburg

                                                           W                    E


                                                                                                           Newton City
                                                                     S




                                                               Einsteinopolis                        Maxwellbury




                                                               Noethersville         Curieton              Franklinport
Copyright ©2021 American Association of Physics Teachers




                                                                  200 km            Planck Town



                                                                                                                          6


2021 USAPhO+                                                                                         7



Question 2
The Dark Forest
Dark matter could be made of hypothetical, extremely light particles called axions. Because in-
dividual axions are so light, experiments do not search for individual axions, but rather for the
classical axion field formed by a large collection of axions, which oscillates as

                                          a(t) = a0 sin(ωt).

This is analogous to how a large collection of photons can form a classical electromagnetic field. In
the presence of a magnetic field B and an axion field a, the axion field produces an effective current

                                                 J = g ȧB

where we define ȧ = da/dt. The effective current produces electromagnetic fields in exactly the same
way as ordinary current, though it does not come from the motion of actual charges. Experiments
can search for axion dark matter using systems which are resonantly driven by this current.
   You may use fundamental constants in your answers, such as

      c = 3.00 × 108 m/s                   ~ = 1.055 × 10−34 J · s         e = 1.602 × 10−19 C
      G = 6.67 × 10−11 N · m2 /kg2        µ0 = 4π × 10−7 N/A2             kB = 1.38 × 10−23 J/K.

You do not have to provide numeric answers unless asked. When asked to “estimate”, you may drop
constants of order one. The numeric values provided below are from standard references where ~,
c, µ0 , and  0 are set to one; to get correct numeric results, you must restore these factors yourself.

1. First, we will describe some physical properties of the axion field.

  (a) Consider a single axion at rest, with mass m. Find its associated angular frequency ω. This
      will be the angular frequency of the corresponding classical field, when there are many axions.

                                                  Solution
        The axion is a quantum particle and satisfies the de Broglie relation E = ~ω, and its
        energy comes from its rest mass, E = mc2 . Thus,

                                                         mc2
                                                   ω=        .
                                                          ~

 (b) Suppose dark matter is distributed spherically symmetrically in the galaxy with uniform
     density ρ. The solar system is a distance r from the center of the galaxy and orbits around
     it with period T . Neglecting everything besides dark matter, find the dark matter density ρ.

                                                  Solution
        Setting the centripetal acceleration equal to the gravitational acceleration,
                                                 GM          4
                                        rω 2 =       ,    M = πr3 ρ.
                                                  r2         3


                   Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                         8



       Solving for ρ, we find
                                                       3π
                                                 ρ=        .
                                                      GT 2

 (c) The energy density of the axion field is m2 a20 /(2~3 c). Find the axion field amplitude a0 .

                                                Solution
       The dark matter density comes from the mass-energy of the axion field, so
                                                      r
                                        m 2 a2          2ρ~3 c3
                                  ρc2 =      0
                                               , a0 =           .
                                        2~3 c             m2

 (d) The radius and period of the Sun’s orbit, as well as a typical axion mass, are
                      r = 2.5 × 1020 m,    T = 7.1 × 1015 s,    m = 1.0 × 10−9 eV.
     Numerically compute the axion field amplitude a0 .

                                                Solution
       Plugging in numbers and noting that the provided value of the axion mass is really its
       energy (and hence dividing it by c2 ) gives the value

                                       a0 = 2.36 × 10−4 kg m3 /s3 .

 (e) In this problem, we treat the axion field as spatially uniform within a terrestrial laboratory.
     To verify that this assumption is reasonable, numerically estimate the axion field’s wavelength
     λ, assuming the axions have the same galactic speed as the Sun.

                                                Solution
       The axion speed is
                                               2πr
                                          v=       = 2 × 105 m/s.
                                                T
       Using the de Broglie relation again,
                                               h   h
                                          λ=     =    ∼ 106 m.
                                               p   mv

       As expected, this is much larger than the apparatus considered below. (Note: a common
       mistake was to write v = f λ, but this is only true for waves which travel at a constant
       speed, such as light. To see the problem, note that if you apply the de Broglie relations,
       this equation becomes v = E/p. That’s true for photons, where E = pc, but certainly not
       true for massive particles. Some students also tried the Compton wavelength λ = h/mc,
       but this is a different quantity, namely the wavelength of a photon if it had the same
       energy as an axion at rest.)

 (f) In part (a), you found ω by neglecting the axion’s speed. In reality, the axion’s finite speed
     changes the frequency to ω + ∆ω, in a frame at rest with respect to the galactic center.
     Numerically estimate ∆ω/ω to show that it is reasonable to neglect this effect.

                  Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                               9




                                                    Solution
           Because E = ~ω, we need to see how the energy is changed. We have

                                               ∆E   mv 2 /2   v2
                                                  ≈         =
                                               E     mc2      2c2
           where we used the fact that v, computed above, is nonrelativistic. We thus find
                                                  ∆ω
                                                     ∼ 3 × 10−7
                                                  ω
           which is small as expected. (Note that the usual Doppler shift formula would not work
           here, and trying to use it would get the wrong answer. The Doppler shift formula applies
           to particles with constant speed, which satisfy ω = vk. The axion is massive; when at
           rest, it has ω 6= 0 and k = 0. However, you could also get the answer by Lorentz
           transforming the four-vector (ω, k).)




    The ABRACADABRA1 experiment, currently taking data at MIT, is a toroidal solenoid with
inner and outer radius Rin and Rout and height h. You may assume h   Rout for simplicity. A
superconducting wire carrying current I wraps N times around the toroid, where N is high enough
to neglect the discreteness of the wires. A circular pickup loop with radius slightly less than Rin is
placed at the center of the toroid.

2. Now, we will find the axion signal generated in the ABRACADABRA apparatus.

  (a) Find the magnetic field B(r) inside the toroid due to the superconducting current.




  1
      aka, A Broadband/Resonant Approach to Cosmic Axion Detection with an Amplifying B-field Ring Apparatus.

                      Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                        10




                                                 Solution
       Using Ampere’s law,
                                                         µ0 N I
                                                B=              θ̂.
                                                          2πr

 (b) The superconducting wires lose their superconductivity when exposed to a magnetic field
     greater than Bmax . Find the maximum possible current Imax that can be used, and assume
     this current is used in later parts.

                                                 Solution
       The maximum field is at r = Rin , so
                                           µ0 N Imax                  2πRin Bmax
                                  Bmax =             ,     Imax =                .
                                            2πRin                       µ0 N


 (c) Assuming that ω is small, find the magnetic flux ΦB (t) through the pickup loop due to the
     axion field in terms of a0 , g, ω, Bmax , and the dimensions of the apparatus. (You may ignore
     any currents induced on the surfaces of the superconducting wires. Accounting for them
     makes the problem much harder, but does not substantially affect the final result.)

                                                 Solution
       The effective current is
                                                              Rin
                                    J = g ȧB = ga0 Bmax          ω cos(ωt)θ̂.
                                                               r
       The resulting field is like that of an array of concentric solenoids, where we may neglect
       fringe fields because h   Rout . Therefore, the axion-produced field Bax inside the pickup
       loop is uniform. For simplicity, we define

                                               J0 = ga0 Bmax ω.

       Then using Ampere’s law, we have
                                      Z
                                        Rin
                  Bax = µ0 J0 cos(ωt)       dr = µ0 J0 Rin log Rout /Rin cos(ωt).
                                         r
       The magnetic flux is then
                                  2                3

                           ΦB = πRin Bax = πµ0 J0 Rin log Rout /Rin cos(ωt).


 (d) If ω is too large, the result above breaks down due to radiation effects. Estimate the frequency
     ωc where this happens.

                                                 Solution
       In the calculations above, we have assumed that the fields are quasistatic, neglecting the


                  Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                    11



       radiation propagation time. This approximation breaks down when
                                                        c
                                                ωc ∼
                                                       Rin
       past which the flux will be diminished. Since this calculation is approximate, the answers
       c/Rout or c/h are also acceptable.


 (e) Using the design values

                               Rin = 0.5 m,    Rout = 1.0 m,    h = 2.0 m

    estimate the numerical value of ω/ωc .

                                              Solution
       Plugging numbers in, we find

                               ωc ∼ 6.0 × 108 s−1 ,    ω ∼ 1.5 × 106 s−1 .

       Then we have
                                              ω/ωc ∼ 0.0025
       which is small as expected. Any answer within an order of magnitude is acceptable.


 (f) Let Φ0 be the amplitude of the time-varying axion flux. Using the typical values

                               Bmax = 5.0 T,     g = 1.0 × 10−16 GeV−1

    and your previous results, compute the numerical value of Φ0 .

                                              Solution
       First, we have to restore the dimensions of g. Notice that since current g ȧB has the
       same units as displacement current  0 Ė, the quantities ga and (E/B) 0 must have the
       same dimensions, and furthermore E/B has dimensions of speed.
       Now, in 1(c) we found that a has dimensions of energy times velocity, while the value
       of g given here has dimensions of inverse energy. Thus, the combination ga only has
       dimensions of speed, which means a factor of  0 was left out. In other words, if we
       denote the value given above as g 0 , the true value of g is  0 g 0 .
       To avoid mistakes, it’s best to group terms in the long expression for Φ0 , so that each
       piece has simple units and a reasonable magnitude. We have

                                                     Rout
                                        2
                              Φ0 = (πRin B0 ) log            Rin µ0  0 g 0 a0 ω
                                                      Rin




                 Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                          12



        and using c2 = 1/µ0  0 gives

                                                                    ωRin g 0 a0

                                       2                 Rout
                               Φ0 = (πRin B0 ) log
                                                         Rin         c      c
                                   = (3.9 Wb)(0.693)(0.0025)(4.91 × 10−19 )
                                   = 3.3 × 10−21 Wb.

    The pickup loop has inductance L and is attached to a capacitor, forming a circuit with resonant
frequency equal to the axion frequency ω. The circuit also has a small internal resistance R in series,
and is at temperature T . The axion signal can be detected by monitoring the current in the circuit.
The main source of noise is thermal noise, which causes fluctuations in the current.
3. We will now estimate the sensitivity of ABRACADABRA to axions.
  (a) The axion produces a current which oscillates sinusoidally. Find the signal current amplitude
      Is in terms of ω, Φ0 , and the circuit parameters.

                                                Solution
        Since the axion is at the resonant frequency, the impedance of the circuit is approximately
        R. Therefore the current is
                                                 E       1 dΦB
                                             I=     =−         .
                                                 R      R dt
        The amplitude is
                                                       ωΦ0
                                                 Is =      .
                                                        R

 (b) Find the average value of the current squared hI 2 i in the circuit due to thermal noise.

                                                Solution
        The energy stored in the inductor is LI 2 /2. By the equipartition theorem, the average
        energy stored in any such quadratic degree of freedom is kB T /2, so

                                                           kB T
                                                hI 2 i =        .
                                                            L
        This effect is also called Johnson noise.

  (c) At anypmoment in time, the noise current is oscillating sinusoidally with typical amplitude
      In = hI 2 i, which is much larger than Is . However, the phase of the noise current also
      fluctuates randomly, so that after a typical time tc , its phase will be roughly independent of
      the phase it had before. Find an estimate for tc in terms of ω and the circuit parameters.
      (Hint: at any given moment, the thermal noise current is simultaneously being produced by
      the random motion of electrons in the circuit, and damped by the resistor.)

                                                Solution
        The noise current that exists in the circuit at any given moment, by definition, came
        from the thermal motion of electrons in the circuit up to a time tc ago. Therefore, tc is
        roughly the characteristic time for decay of current in the circuit. There are many ways


                   Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                         13



       to calculate this, but a simple way is to note that
                                                   Q              ωL
                                            tc ∼     ,     Q=
                                                   ω              R
       where Q is the quality factor. Thus,
                                                           L
                                                    tc ∼     .
                                                           R

 (d) Suppose the experiment runs for a total time te   tc . Roughly estimate the average amplitude
     of the noise current over this period of time.

                                               Solution
                                     √
       Uncertainty goes down by          n when averaging n independent trials. Here we have
       n = te /tc , so                                     r
                                                               tc
                                               I¯n = In           .
                                                               te


 (e) The axion is detectable if the signal current amplitude is larger than the averaged noise
     current amplitude, and the circuit parameters are

                                 L = 1 mH,     R = 10 mΩ,             T = 0.1 K.

     Roughly numerically estimate the time needed to potentially detect the axion. (Hint: if your
     answer seems strange, note that in reality, the axion’s phase also fluctuates over time, because
     of the effect of part 1(f). In addition, we don’t know ω ahead of time, so the experiment
     needs to be run many times. We ignored these effects here to keep things simple.)

                                               Solution
       By setting Is = I¯n and solving for te , we find
                                                   kB T R
                                            te ∼           = 550 s.
                                                   ω 2 Φ20

       In reality, you would need to repeat this experiment millions of times to scan a sufficient
       range of ω, and the time in each step would be longer, because after some point the
                                                         √
       average axion signal also starts going down as 1/ n.




                  Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                     14



Question 3
Great Hall
The classical Hall effect was first measured by Edwin Hall in 1879, shortly after the publication of
Maxwell’s equations. In all parts of this problem, materials contain nV electrons per unit volume,
and each electron has charge qe < 0 and mass me . You may use these quantities in all of your
answers. We will begin by investigating the implications of the classical Hall effect.

1. An infinite plate in the xy plane, with thickness d in the z direction, is placed in a uniform
   magnetic field B = B ẑ as shown. An electric field E = E x̂ is applied in the plane of the plate
   and the system is allowed to reach a steady state.


                                                                   y

                                                                          x
                                   B
                                                    E




  (a) If the electrons have velocity v at steady state, what is the current density J? Recall that J
      is defined as the total flow of charge through a unit cross-section area per unit time.

                                                 Solution
        The current density is given by nV qe v.


 (b) In the Drude model, electrons are subject to both the Lorentz force and a damping force
     −γv, where γ is a constant that depends on the material. In the above system, what is the
     current density in the steady state? Give both the magnitude and direction of J, e.g. in polar
     coordinates.

                                                 Solution
        The equation of motion for an electron is

                             qe Ex̂ − qe vx Bŷ + qe vy Bx̂ − γvx x̂ − γvy ŷ = 0.

        Solving the system of equations gives us

                                            γqe E                  −qe2 EB
                                  vx =               ,     vy =                 .
                                         γ + qe2 B 2
                                          2                       γ 2 + qe2 B 2

        Then,
                                          γnV qe2 E               −nV qe3 EB
                                  Jx =                 ,   Jy =                 .
                                         γ 2 + qe2 B 2            γ 2 + qe2 B 2




                   Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                             15



       As requested, we compute the magnitude and direction:

                                         qe2 nV E

                                                                                           Bqe
                                |J| = p              ,          θ = − arctan                         .
                                       γ 2 + B 2 qe2                                        γ


 (c) Compute the electrical resistivity,
                                                                E
                                                    ρ0 = lim
                                                           B→0 |Jx |

     and the transverse Hall resistivity
                                                                    E
                                                    ρH = lim               .
                                                               γ→0 |Jy |




                                                     Solution
       The two resistivities are
                                                     γ                        B
                                          ρ0 =             ,     ρH =              .
                                                    nV qe2                  n V qe


 (d) A Hall effect sensor detects the strength of magnetic fields. Consider the following circuit
     consisting of a square plate of side length L and thickness d in a perpendicular uniform
     magnetic field B.
                                                                                                 B
                                                                 − − − − − − − −
                           VH                   I
                            V                   A
                                                         + + + + + + + +
                                            d                                                    L

                                                                        L
                                                                        +          −

                                                                               E
     A longitudinal emf E is applied to the plate. At steady state, a Hall voltage VH is measured
     across the plate due to the buildup of charge on either side of the plate. If the electrical
     resistivity of the plate at zero magnetic field is ρ0 , what is the Hall voltage VH and the
     current I through the plate? Express your answer in terms of ρ0 , E, B, and the dimensions
     of the plate.

                                                     Solution
       The Hall voltage is such that the electric field from the external EMF and from the
       charge buildup causes the current to flow in the x direction. Our equation of motion is
       thus
                             qe E/Lx̂ + qe VH /Lŷ − qe vx Bŷ − γvx x̂ = 0.



                  Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                     16



        Then, we have the two equations
                                                                qe E
                                       VH = Lvx B.      Lvx =        .
                                                                 γ
        Substituting gives us
                                                qe EB    EB
                                         VH =         =          ,
                                                   γ    nV qe ρ0
                                                        nV qe2 Ed   Ed
                                    I = nV qe vx Lw =             =    .
                                                           γ        ρ0

Experiments in the 20th century revealed that in many materials, the Hall resistivity could only
take certain discrete values. We will now show how this follows from Bohr quantization. (These
next parts are independent of the first part of the problem.)

2. A zero-resistance loop of wire of radius R and cross-sectional area Aw carries a counterclockwise
   current I. A solenoid through the middle of the loops carries magnetic flux Φ out of the page,
   which we define to be the positive ẑ direction.




                                                   Φ




 (a) If the electrons all have the same speed, what is the angular momentum of each electron?

                                              Solution
        The current is I = qe nV aAw , where v is the speed of each electron. Then the angular
        momentum is
                                                     Ime R
                                         me vRẑ =           ẑ.
                                                    qe nV Aw
        Note that the angular momentum points into the page, because the electrons have neg-
        ative charge.


 (b) If we allow the flux in the solenoid to change, the usual, “mechanical” angular momentum L
     of each electron is not conserved. Instead, a quantity called the canonical angular momentum,
     Lcan = L + Cqe Φ, for some constant C, is conserved. Find C.

                                              Solution
        We compute the change in angular momentum associated with a change in flux ∆Φ. By
        Faraday’s Law, there is an induced electric field resulting from the change in magnetic
        flux.
                                                        dΦ
                                           2πRE = − .
                                                         dt

                   Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                 17



       The electric field results in a force qe E on each electron, and thus we find that
                                                me dv   dΦ
                                          2πR         =− .
                                                qe dt   dt
       Then, the rate of change in angular momentum is
                                                 dv   qe dΦ
                                           Rme      =       .
                                                 dt   2π dt
       Therefore,
                                                       qe
                                            ∆L = −        ∆Φ.
                                                       2π
       Then, for L + Cqe Φ to be conserved,
                                                        1
                                                C=        .
                                                       2π

 (c) The Bohr quantization condition says that for a closed circular orbit, an integer number of
     de Broglie wavelengths must fit in its circumference. The de Broglie wavelength is
                                                       h
                                                λ=          ,
                                                     pcan
    where h is Planck’s constant, and pcan = Lcan /R is the canonical momentum. For a given
    solenoid flux Φ, what is the set of allowed mechanical angular momenta L?

                                               Solution
       The circumference of such an orbit is 2πR. A de Broglie wavelength is given by
                                                     hR
                                                λ=        .
                                                     Lcan
       Then,
                                          2πLcan    Lcan
                                          n=      =      ,
                                             h        ~
       or Lcan = n~ where ~ = h/2π. Then the allowed mechanical momenta satisfy

                                                           qe Φ
                                            L = n~ −            ,
                                                           2π
       where n is an integer.

 (d) What is the minimum possible change in the magnetic flux for which the same set of me-
     chanical angular momenta is allowed? This is known as the flux quantum.

                                               Solution
       We require |qe2π
                     |∆Φ
                           = ~ such that we get the same set of allowed mechanical angular
       momenta. Then,
                                                        h
                                                ∆Φ =         .
                                                       |qe |


                    Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                       18



        Note that for a superconducting ring, the flux quantum is h/2|qe | because the electrons
        come in Cooper pairs, but this wasn’t part of this problem.

3. Now, consider an annulus held perpendicular to a fixed, uniform external magnetic field B, and
   suppose an additional, tunable magnetic flux Φ threads the center of the annulus, with both
   pointing out of the page. The annulus has a transverse Hall resistance RH (i.e., an EMF of E
   around the annulus generates a perpendicular current E/RH via the Hall effect) and you may
   neglect its self-inductance.



                                                      Φ
                                           B


 (a) Suppose Φ begins to increase slowly and steadily in time. After a short time, the electrons
     will begin flowing steadily from one side of the annulus to the other. Do the electrons move
     inward or outward? Justify your answer.

                                                Solution
        The increasing flux induces a clockwise EMF. The Lorentz force on an electron is

                                               qe (E + v × B).

        Then, v × B must oppose E. Therefore, v must point radially inward by the right hand
        rule. Therefore, electrons must be flowing radially inward.


 (b) If the threaded flux increases by ∆Φ, how many electrons pass from one edge of the annulus
     to the other? You may use RH , among other variables, in your answer.

                                                Solution
        We have that
                                           1 dΦ          1
                                  |I| =         =⇒ ∆Q =    ∆Φ.
                                          RH dt         RH
        Therefore, the number of electrons that pass from one edge to another is
                                                   ∆Φ
                                                           .
                                                  RH |qe |


 (c) As we showed in 2(d), if the magnetic flux changes by the flux quantum Φq , the allowed orbits
     from Bohr quantization are unchanged. Quantum mechanics thus tells us that in conventional
     materials, if the magnetic flux changes by Φq , an integer number k of electrons must pass
     from one edge to another. What constraint does this place on the Hall resistance?




                  Copyright ©2021 American Association of Physics Teachers


2021 USAPhO+                                                                                    19




                                              Solution
      We set
                                               h              h
                                 |qe | ν =            =⇒ RH = 2 .
                                             RH |qe |        kqe
      This is known as the integer quantum Hall effect, and it applies to any material shape.




                Copyright ©2021 American Association of Physics Teachers
