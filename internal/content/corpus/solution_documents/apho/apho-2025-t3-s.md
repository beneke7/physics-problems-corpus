---
id: solution-document-apho-2025-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2025/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2025-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2025/T3_S.pdf."
---

T3. Physics of the Atmosphere (10 pts)                         Part B. The absorption spectrum of atmo-
                                                               spheric gases (1.8 points)
Part A. Surface temperature of the Earth (1.2
points)                                                        B.1: Let the natural (unstretched) length of the
A.1: The cross-section area receiving the solar radi-          spring be l0 and let xA , xB be the positions of par-
                                      2
ation (falling as parallel rays) is πRE , so taking into       ticles A and B, respectively. The equation of motion
account the absorbed portion is a fraction 1 − a of the        of each particle due to the spring force can be written
total incident radiation, we find                              as:
                               2
                 P0 = (1 − a)πRE Fs .
                                                                              d2          k
                                                                                  xA = +    (ℓ − ℓ0 ),
                                                                              dt2        mA
 Grading scheme for Task A.1.                   Pts
                                                                              d2          k
 Correct effective cross section area A =       0.1                               xB = −    (ℓ − ℓ0 ),
   2
 πRE                                                                          dt2        mB
 Correct final answer                           0.1
 Total                                          0.2            where ℓ = xB − xA is the instantaneous length of
                                                               the spring. Taking the difference of the two equations
Grading note: If the student uses a different cross sec-       gives
tional area, only 0.1 is given, provided it is the only
mistake.
                                                                         d2
                                                                                                    
                                                                                            1    1
A.2: A black body radiates according to the Stefan-                          ℓ = −k           +          (ℓ − ℓ0 ).
                                                                         dt2               mB   mB
Boltzmann law, Pbd = σAT 4 , where σ is the Stefan-
Boltzmann constant and A is the total surface area of
                                                               This is the equation of motion of a single effective
the black body. At steady state
                                                               particle attached to a spring with a spring constant k
                        2   4             2
     Pbd = P0 ⇒ σ(4πRE    )Tg0 = (1 − a)πRE Fs                 and an effective mass or reduced mass µ, given by:
                      1/4
                    Fs
    ⇒ Tg0 = (1 − a)          ≈ 255 K ≈ −18 ◦ C.                                        1           mA mB
                    4σ                                                     µ=                 =           .
                                                                                 1    1           mA + mB
                                                                                mA + mB
 Grading scheme for Task A.2.                   Pts
 Energy balance                                 0.1
 Correct explicit blackbody radiation for-      0.1            Thus, the system undergoes a simple harmonic mo-
 mula, using the surface area of a sphere                      tion with an angular frequency:
 Correct numerical value                        0.1                                s
 Total                                          0.3
                                                                                             r
                                                                                       k        mA + mB
                                                                            ωd =         =    k         .
                                                                                       µ         mA mB
A.3: In the presence of the atmospheric layer, we
write down the energy transfer balance in two regions:
between the Earth’s surface and the atmosphere, and             Grading scheme for Task B.1.                          Pts
between the atmosphere and outer space. Let the                 Writing down correct equations of motion              0.2
power radiated from Earth be PE and the power radi-             for A and B (0.1 each)
ated from each side of the atmosphere be Patmo , then           Studying the equation of motion for xA -              0.1
                       PE = Patmo + tsw P0 ,                    xB
                                                                Correct answer                                        0.2
           tlw PE + Patmo = P0 .
                                                                Total                                                 0.5
Solving this system of equations and using PE =
      2
σ(4πRE  )Tg we find
                                                               Grading note: A maximum of 0.2 points are given if
                      1/4
                                                               the correct result is cited without justification.
            
              1 + tsw
      Tg =                 Tg0 ≈ 286 K ≈ 13 ◦ C.
              1 + tlw
                                                               B.2: The difference in energy between two consecu-
                                                               tive levels in a quantum harmonic oscillator is given
 Grading scheme for Task A.3.                   Pts            by ℏω. So the energy of the photon is given by
 Statement on radiation balance in the re-      0.1
 gion outside the atmosphere
                                                                                       E = ℏωd .
 Statement on radiation balance in the re-      0.2
 gion between the atmosphere and Earth
 Using tsw correctly                            0.1             Grading scheme for Task B.2.                          Pts
 Using tlw correctly                            0.1             Correct result (Give 0.1 if h is used in-             0.2
 Correct numerical result (if only analyti-     0.2             stead of ℏ. No other numerical factors re-
 cal, then only 0.1)                                            ceive credit.)
 Total                                          0.7             Total                                                 0.2

                                                           1
B.3: The observed shift in the spectral line from f0 is             B.6: The probability distribution p(f ) follows a Gaus-
due to the Doppler effect. When the source is moving                sian profile in the frequency shift f − f0 . The center
towards the observer with velocity v the frequency is               of the profile is 0 and it drops to 1/e of its maximum
shifted according to                                                value when the argument of the exponential is −1.
                                                                    This happens when
                   f = f0 (1 + v/c) .                                                              r
                                                                                       ∗             2kB T
Thus, the shift in frequency is given by:                                             f − f0 = f0          .
                                                                                                      mc2
                                v                                   The shape of the distribution can be seen in the figure
                    f − f0 =      f0 .
                                c                                   below.

 Grading scheme for Task B.3.                             Pts
 Writing down an expression for Doppler ef-               0.1
 fect (even if incorrect)
 Correct answer                                           0.1
 Total                                                    0.2

B.4: To find the normalization constant C, we require
that the total probability is equal to 1. This leads to:
         Z∞                      Z∞            2
                                             mv
                                          − 2k
              p(v) dv = 1 ⇒ C         e       B T
                                                    dv.
        −∞                      −∞
                                                                     Grading scheme for Task B.6.                     Pts
Using the integration formula provided, with x = v                   The distribution is has a single peak at         0.1
and a = kBmT we obtain:                                              zero
                         r                                           The distribution is symmetric                    0.1
                               m                                     The distribution decays to zero on both          0.1
                   C=               .
                             2πkB T                                  ends
                                                                     f ⋆ − f0 is correct                              0.1
 Grading scheme for Task B.4.                             Pts        Total                                            0.4
 Normalization condition (even if done in-                0.1
 correctly from 0 to ∞)
 Correct result                                           0.1
 Total                                                    0.2       Part C. Stability of air in the atmosphere (2.7
                                                                    points)
B.5: Using the result of B.4, we obtain the following
expression for the speed of a molecule in terms of the              C.1: Consider a thin horizontal layer of thickness dz
frequencies f and f0 :                                              and surface area S. Since the air is in hydrostatic equi-
                                                                    librium, it’s weight must be balanced by the difference
                          f − f0                                    in pressure forces. This results in the following rela-
                     v=          c.                                 tion:
                            f0
                                                                                p(z)S = p(z + dz)S + ρ(z)gSdz.
We plug this back into the probability distribution
                                                                    Simplifying and rearranging terms gives:
formula to obtain:
                    "                 2 #                                               dp
                        mc2
                             
                               f − f0                                                       = −ρ(z)g
         p(f ) ∝ exp −                     .                                             dz
                       2kB T     f0
                                                                    The negative sign indicates a decrease in pressure with
                                                                    hight as expected.
This gives the probability distribution for observing a
molecule whose spectral line is Doppler shifted from
                                                                     Grading scheme for Task C.1.                     Pts
f0 to f .
                                                                     Sum of forces equals zero                        0.1
                                                                     Correct pressure force above and below           0.1
 Grading scheme for Task B.5.                             Pts        Correct final answer                             0.1
 Replacing v by the Doppler effect result                 0.1        Total                                            0.3
 Correct exponential dependence                           0.2
 Total                                                    0.3       C.2: Assuming we can treat air as an ideal gas, we
                                                                    can use the ideal gas law to express the density of air
Grading note: If the student uses an incorrect Doppler              in terms of its pressure and temperature
effect formula, but one that matches their attempt in                                                   m
B.3, they get the 0.1 points.                                                pV = nRT ⇒ p(z)V =             RT (z).
                                                                                                       µair

                                                                2
Rewriting this in terms of the density gives:                 We now substitute the hydrostatic pressure gradient
                                                              obtained in C.3 to get:
                             p(z)µair
                    ρ(z) =            .                         dT      1 − γ T (z)
                                                                                    
                                                                                       p(z)µair
                                                                                                 
                                                                                                    1 − γ µair
                              RT (z)                                =−               −          g =            g.
                                                                dz        γ p(z)        RT (z)        γ    R
Now we substitute the density expression into the ex-
pression obtained in C.1. This gives:                         But γ = cp /cV , so
                    dp    µair p(z)                                     dT   1 − cp /cV µair     µair
                       =−           g                                      =                 g=−      g,
                    dz     RT (z)                                       dz     cp /cV    R        cp
                                                              where we used cp − cV = R.
 Grading scheme for Task C.2.                    Pts             This expression for the adiabatic lapse rate shows
 Ideal gas law                                   0.1          that the temperature drops linearly with height in an
 Correct final answer                            0.1          adiabatic atmosphere.
 Total                                           0.2
                                                               Grading scheme for Task C.4.                    Pts
                                                               Writing the adiabatic relation in any form      0.1
C.3: Assuming an isothermal atmosphere (i.e., con-
                                                               Relating dT /dz to dp/dz                        0.3
stant temperature with altitude), T (z) = T , the equa-
                                                               Correct final result                            0.2
tion simplifies to:
                                                               Total                                           0.6
                    dp    µair
                       =−      gdz.
                     p    RT                                  C.4: To find the angular frequency of small oscilla-
                                                              tions of the air parcel, we begin by applying New-
    Integrating both sides and assuming the pressure
                                                              ton’s second law, where the primary forces acting on
at height 0 is p0 leads to:
                                                              the parcel are buoyancy and gravity.
                          
                      p(z)      µair                                            d2 z
                 ln          =−      gz.                                   δm        = ρa (z)gδV − δmg,
                       p0       RT                                              dt2
In a different form:                                          where δm is the mass of the air parcel, δV is its vol-
                            µ
                               air
                                                             ume and ρa is the density of the surrounding air. We
              p(z) = p0 exp −      gz .                       can express the mass of the parcel in terms of its den-
                              RT
                                                              sity ρp as δm = ρp δV . Substituting and simplifying
                                                              gives:
 Grading scheme for Task C.3.                    Pts                     d2 z   ρa (z + δz) − ρp (z + δz)
 Recognizing a separable differential equa-      0.1                          =                           g.
                                                                         dt2           ρp (z + δz)
 tion
 Correct final answer                            0.1          Assuming the parcel is at the same pressure as the
 Total                                           0.2          atmosphere at z + δz, the density can be expressed in
                                                              terms of temperature using the ideal gas law ρ ∝ 1/T .
                                                              This allows us to rewrite the last expression as:
C.4: Since the small mass of air is displaced adiabat-
ically, it must satisfy the adiabatic condition for an                  d2 z   Tp (z + δz) − Ta (z + δz)
ideal gas:                                                                   =                           g.
                                                                        dt2           Ta (z + δz)
                       pV γ = const.,                         We can now express the temperature at z+δz in terms
                                                              of the lapse rates and the temperature at z using the
where γ = cp /cV is the adiabatic index, and cp , cV          definition T (z + δz) = T (z) + Γδz. Therefore:
are the molar specific heats at constant pressure and
volume respectively. Writing the volume in terms tem-                  d2 z   T (z) + Γδz − T (z) − Γa δz
                                                                          2
                                                                            =                             g.
perature and pressure using the ideal gas law gives:                   dt            T (z) + Γa δz

      p(T /p)γ = const.      ⇒    p1−γ T γ = const.           Simplifying the numerator and neglecting the in-
                                                              finitesimal term Γa δz in the denominator gives:
Taking the derivative of this expression with respect
to the height z, we obtain:                                                      d2 z   Γ − Γa
                                                                                    2
                                                                                      =        gδz.
                                                                                 dt       T
                    dp γ               dT
       (1 − γ)p−γ      T + γp1−γ T γ−1    = 0.                This is the equation of a simple harmonic oscillator,
                    dz                 dz
                                                              where the angular frequency is given by:
Simplifying and rearranging to have an expression for                       r             r
the adiabatic lapse rate gives:                                               Γa − Γ        µair g/cp − Γ
                                                                       ω=            g=                   g
                                                                                 T                T
                dT    1 − γ T (z) dp
                   =−                .                        The motion is stable whenever Γa = µair g/cp > Γ.
                dz      γ p(z) dz


                                                          3
 Grading scheme for Task C.5.                   Pts            D.3: Formation of liquid water happens when the par-
 Inclusion of gravitational force with parcel   0.2            tial pressure of water inside the parcel reaches the sat-
 density                                                       uration pressure at a given temperature. The partial
 inclusion of buoyancy force with air den-      0.3            pressure of water vapor pw can be related to the total
 sity                                                          pressure of the parcel p as
 Correct equation of motion                     0.2
 Relating density to inverse temperature        0.2                             nH2 O    mH2 O /µH2 O      µair
                                                                     pw =             p=              p=ϕ       p.
 Using appropriate approximation                0.2                              nair     mair /µair      µH2 O
 Correct stability requirements                 0.1
 Correct angular frequency of small oscilla-    0.2            Given that the air parcel is rising adiabatically,
 tion                                                          p1−γ T γ = const., so
 Total                                          1.4
                                                                                                              cp /R
                                                                                                          T
Part D. Moisture (2.7 points)                                                          p(T ) = pi                       .
                                                                                                          Ti
D.1: The change of entropy across a phase transition
(evaporation in this case) is related to the latent heat       Therefore, the transcendental equation that we need
of evaporation. If there was a mass m of liquid water,         to solve is
then Qevaporation = Lm, then                                                         cRp                            
                                                                  µair          Tl                      µH O L 1     1
                             Lm                                ϕ       pi                    = pso exp − 2         −       .
                      ∆S =      .                                µH2 O          Ti                        R     Tl   Ti
                              T
It is known that the volume of vapor is significantly          This can be rearranged to get
larger than the volume of liquid of the same mass,
therefore ∆V ≈ Vvapor , which can be found using the                                                      1
                                                                   Tl =                           "                              cp /R # .
ideal gas law
                                                                                                                        
                                                                            1      R           µair pi                      Tl
                            nRT                                                −         ln ϕ
                  Vvapor =          .                                       Ti   µH2 O L      µH2 O pso                     Ti
                            ps (T )
The mass can be related to the number of moles n via           Substituting the numerical values, we get
m = µH2 O n, then
                                                                                            1000 K
                   dps   µH2 O Lps                                    Tl =                                                      .
                       =           .                                                                               Tl
                   dT      RT 2                                                  3.481 − 0.4695 ln
                                                                                                                290.15 K

 Grading scheme for Task D.1.                   Pts            Solving this iteratively, we find T ≈ 286.8 K ≈
 Correct entropy change                         0.2            13.7 ◦ C.
 Vvapor ≫ Vliquid                               0.2
 Correct final answer                           0.1
 Total                                          0.5
                                                                Grading scheme for Task D.3.                                           Pts
D.2: We can integrate the relationship found in D.1             Using Dalton’s law                                                     0.4
by separating variables to find                                 correctly relating the moles ratio to mass                             0.2
                                                            ratio
             ps (T )      µH2 O L 1    1                        Stating p(T ) for an adiabatic process                                 0.1
        ln             =−            −      .
              pso           R      T   To                       Understanding that partial pressure of wa-                             0.5
                                                                ter needs to reach saturation for conden-
Note that L is strictly a function of temperature, but          sation to start
we are assuming that L is a constant for the range of           Attempting to perform iterative search for                             0.4
temperatures we investigate. Rearranging, we find               the solution of the transcendental equation
                                                            (by isolating T on one side)
                           µH O L 1       1
      ps (T ) = pso exp − 2             −       .               Correct numerical solution                                             0.4
                             R       T    To
                                                                Total                                                                  2.0


 Grading scheme for Task D.2.                   Pts               Grading note: At most 0.4 pts can be given if the
 Recognizing a separable differential equa-     0.1            student does not use the partial pressure of water but
 tion                                                          uses the total pressure of air parcel.
 Correct final answer                           0.1
 Total                                          0.2

                                                           4
Part E. Sun halo (1.6 points)                                   E.2: Notice that the situation corresponds to the case
                                                                discussed in part E.1 with φ = 60◦ . Here is the data
                                                                table after substituting different values of α:
E.1: Using the notations of Figure E, the total an-
gle of deviation δ can be written as the sum of the
deviations in the two refractions:                                         α       δ              α       δ
                                                                             ◦         ◦            ◦
                                                                          20     27.5            50     22.5◦
                 δ = α − α′ + β − β ′ .                                   25◦    24.6◦           55◦    23.4◦
                                                                          30◦    23.0◦           60◦    24.7◦
                                                                          35◦    22.2◦           65◦    26.5◦
                                                                          40◦    21.8◦           70◦    28.7◦
                                                                          45◦    22.0◦            –       –




                       Figure E.

Consider the triangle of interior angles φ, 90◦ −α′ and
90◦ −β ′ . Since the sum of these angles add up to 180◦ ,
we get
                       φ = α′ + β ′ ,
so δ simplifies to

                     δ = α + β − φ.
                                                                 Grading scheme for Task E.2.                     Pts
The relationship between α and α′ (and similarly be-
                                                                 Substituting into the formula for δ cor-         0.2
tween β and β ′ ) is given by Snell’s law:
                                                                 rectly for all values of α (if at least 6 data
              sin α             sin β                            points are calculated, 0.1 p can be given)
                     = n,               = n.                     Data points are plotted in the correct           0.2
              sin α′            sin β ′
                                                                 graph
Expressing β in terms of α′ :                                    δ has a local minimum                            0.2
                            ′
           sin β = n sin β = n sin(φ − α ),′                     Total                                            0.6

From Snell’s law α′ can be written as                           E.3: The minimum value of δ is around 21.8◦ , so that
                            
                              sin α
                                                               is the angle with respect to the direction of Sun where
                α′ = arcsin           .                         the halo appears.
                                n
Thus, β in terms of α is given by                                Grading scheme for Task E.3.                     Pts
                                                           Reading the minimal value of δ                   0.1
                                    sin α
     β = arcsin n sin φ − arcsin              .                  Concluding that the angular size of halo         0.1
                                      n                          corresponds to the minimal value of δ
Finally, we get the result for δ:                                Total                                            0.2
                                       
                                    sin α
 δ = α + arcsin n sin φ − arcsin              − φ.
                                      n


 Grading scheme for Task E.1.                    Pts
 Writing Snell’s law for the two refractions     0.2
 (0.1 each)
 Equation for δ in terms of α, β and φ           0.2
 Using that α′ + β ′ = φ                         0.1
 Correct calculation leading to δ                0.2
 Final formula for δ (any other equivalent       0.1
 form is acceptable)
 Total                                           0.8

                                                            5
