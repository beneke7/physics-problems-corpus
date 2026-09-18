---
id: solution-document-ipho-2015-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2015/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2015-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2015/T3_S.pdf."
---

Theoretical Task 3 (T-3) : Solutions                                        1 of 9

                          The Design of a Nuclear Reactor1

Uranium occurs in nature as UO2 with only 0.720% of the uranium atoms being 235 U. Neutron
induced fission occurs readily in 235 U with the emission of 2-3 fission neutrons having high
kinetic energy. This fission probability will increase if the neutrons inducing fission have low
kinetic energy. So by reducing the kinetic energy of the fission neutrons, one can induce a chain
of fissions in other 235 U nuclei. This forms the basis of the power generating nuclear reactor
(NR).

A typical NR consists of a cylindrical tank of height H and radius R filled with a material called
moderator. Cylindrical tubes, called fuel channels, each containing a cluster of cylindrical fuel
pins of natural UO2 in solid form of height H, are kept axially in a square array. Fission
neutrons, coming outward from a fuel channel, collide with the moderator, losing energy, and
reach the surrounding fuel channels with low enough energy to cause fission (Figs I-III). Heat
generated from fission in the pin is transmitted to a coolant fluid flowing along its length. In
the current problem we shall study some of the physics behind the (A) Fuel Pin, (B) Moderator
and (C) NR of cylindrical geometry.


      Fig-I               Fig-II                       Fig-III
                                                                            Schematic sketch of the
                                                                             Nuclear Reactor (NR)
                                                                          Fig-I: Enlarged view of a
                                                                          fuel channel (1-Fuel Pins)
                                                                          Fig-II: A view of the NR
                                                                          (2-Fuel Channels)
                                                                          Fig-III: Top view of NR
                                                                          (3-Square Arrangement of
                                                                          Fuel     Channels      and
                                                                          4-Typical Neutron Paths).
                                                                          Only components relevant
                                                                          to the problem are shown
                                                                          (e.g. control rods and
                                                                          coolant are not shown).




A. Fuel Pin
                                                Data for UO2
                                              −1
1. Molecular weight Mw =0.270 kg mol                                2. Density ρ=1.060×104 kg m−3
3. Melting point Tm =3.138×103 K                        4. Thermal conductivity λ=3.280 W m−1 K−1

A1 Consider the following fission reaction of a stationary 235 U after it absorbs a neutron of
   negligible kinetic energy.
                                   235
                                         U +1 n −→94 Zr +140 Ce + 2 1 n + ∆E
  1
    Joseph Amal Nathan (BARC) and Vijay A. Singh (ex-National Coordinator, Science Olympiads) were the
principal authors of this problem. The contributions of the Academic Committee, Academic Development Group
and the International Board are gratefully acknowledged.


                    Theoretical Task 3 (T-3) : Solutions                                  2 of 9

    Estimate ∆E (in MeV) the total fission energy released. The nuclear masses are: m(235 U)
    = 235.044 u; m(94 Zr) = 93.9063 u; m(140 Ce) = 139.905 u; m(1 n) = 1.00867 u and 1 u =
    931.502 MeV c−2 . Ignore charge imbalance.                                                     [0.8]

     Solution: ∆E = 208.684 MeV

     Detailed solution: The energy released during the transformation is

                   ∆E = [m(235 U) + m(1 n) − m(94 Zr) − m(140 Ce) − 2m(1 n)]c2

     Since the data is supplied in terms of unified atomic masses (u), we have

                        ∆E = [m(235 U) − m(94 Zr) − m(140 Ce) − m(1 n)]c2



                            = 208.684 MeV [Acceptable Range (208.000 to 209.000)]
     from the given data.


A2 Estimate N the number of 235 U atoms per unit volume in natural UO2 .                           [0.5]

     Solution: N = 1.702 × 1026 m−3

     Detailed solution: The number of UO2 molecules per m3 of the fuel N1 is given
     in the terms of its density ρ, the Avogadro number NA and the average molecular
     weight Mw as
           ρNA
     N1 =
           Mw
           10600 × 6.022 × 1023
         =                       = 2.364 × 1028 m−3
                  0.270
     Each molecule of UO2 contains one uranium atom. Since only 0.72% of these are
     235
       U,
     N = 0.0072× N1
       = 1.702 × 1026 m−3 [Acceptable Range (1.650 to 1.750)]


A3 Assume that the neutron flux φ = 2.000 × 1018 m−2 s−1 on the fuel is uniform. The fission
   cross-section (effective area of the target nucleus) of a 235 U nucleus is σf = 5.400 ×10−26
   m2 . If 80.00% of the fission energy is available as heat, estimate Q (in W m−3 ) the rate of
   heat production in the pin per unit volume. 1MeV = 1.602 ×10−13 J.                              [1.2]

     Solution: Q = 4.917 × 108 W/m3

     Detailed solution: It is given that 80% of the fission energy is available as heat
     thus the heat energy available per fission Ef is from a-(i)
     Ef = 0.8 × 208.7 MeV
        = 166.96 MeV
        = 2.675 × 10−11 J
     The total cross-section per unit volume is N × σf . Thus the heat produced per unit


                    Theoretical Task 3 (T-3) : Solutions                                  3 of 9


     volume per unit time Q is
     Q = N × σf × φ × Ef
       = (1.702 × 1026 ) × (5.4 × 10−26 ) × (2 × 1018 ) × (2.675 × 10−11 ) W/m3
       = 4.917 × 108 W/m3 [Acceptable Range (4.800 to 5.000)]


A4 The steady-state temperature difference between the center (Tc ) and the surface (Ts ) of the
   pin can be expressed as Tc − Ts = kF (Q, a, λ) where k = 1/4 is a dimensionless constant
   and a is the radius of the pin. Obtain F (Q, a, λ) by dimensional analysis.                     [0.5]

                            Qa2
     Solution: Tc − Ts =        .
                            4λ
     Detailed solution: The dimensions of Tc − Ts is temperature. We write this as
     Tc − Ts = [K]. Once can similarly write down the dimensions of Q, a and λ. Equating
     the temperature to powers of Q, a and λ, one could state the following dimensional
     equation:
     K = Qα aβ λγ
     = [M L−1 T −3 ] α [L] β [M L1 T −3 K −1 ] γ
     This yields the following algebraic equations
     γ = -1 equating powers of temperature
     α + γ = 0 equating powers of mass or time. From the previous equation we get α = 1
     Next −α + β + γ = 0 equating powers of length. This yields β = 2.
                                   Qa2
     Thus we obtain Tc − Ts =            where we insert the dimensionless factor 1/4 as sug-
                                    4λ
     gested in the problem. No penalty if the factor 1/4 is not written.

     Note: Same credit for alternate ways of obtaining α, β, γ.


A5 The desired temperature of the coolant is 5.770 ×102 K. Estimate the upper limit au on
   the radius a of the pin.                                                                        [1.0]

     Solution: au = 8.267 × 10−3 m.

     Detailed solution: The melting point of UO2 is 3138 K and the maximum tempera-
     ture of the coolant is 577 K. This sets a limit on the maximum permissible temperature
     (Tc − Ts ) to be less than (3138 - 577 = 2561 K) to avoid “meltdown”. Thus one may
     take a maximum of (Tc − Ts ) = 2561 K.
     Noting that λ = 3.28 W/m - K, we have
                                               2561 × 4 × 3.28
                                       a2u =
                                                 4.917 × 108
     Where we have used the value of Q from A2. This yields au w 8.267 × 10−3 m. So
     au = 8.267 × 10−3 m constitutes an upper limit on the radius of the fuel pin.

     Note: The Tarapur 3 & 4 NR in Western India has a fuel pin radius of 6.090 × 10−3
     m.


                        Theoretical Task 3 (T-3) : Solutions                                            4 of 9

B. The Moderator
Consider the two dimensional elastic collision between a neutron of mass 1 u and a moderator
atom of mass A u. Before collision all the moderator atoms are considered at rest in the
laboratory frame (LF). Let −→
                            vb and −
                                   →
                                   va be the velocities of the neutron before and after collision
                            −
                            →
respectively in the LF. Let vm be the velocity of the center of mass (CM) frame relative to LF
and θ be the neutron scattering angle in the CM frame. All the particles involved in collisions
are moving at non-relativistic speeds

B1 The collision in LF is shown schematically with θL as the scattering angle (Fig-IV). Sketch
   the collision schematically in CM frame. Label the particle velocities for 1, 2 and 3 in
   terms of −→
             vb , −
                  →
                  va and −
                         v→
                          m . Indicate the scattering angle θ.                                                   [1.0]
                                                             
                                Fig-IV                       va
                                                             2      Collision in the Laboratory Frame
                                                                   1-Neutron before collision
                       
                       vb                          L              2-Neutron after collision
                                                                   3-Moderator Atom before collision
                        1                 3                        4-Moderator Atom after collision
                                                              4




      Solution:


                            Laboratory Frame                          Center of Mass Frame
                                                                                        
                                                        va                              va  vm
                                                        2
                                                                  
                  vb                          L                  vb  vm           

                   1                  3                                                      
                                                                                            vm
                                                         4




B2 Obtain v and V , the speeds of the neutron and the moderator atom in the CM frame after
   the collision, in terms of A and vb .                                                                         [1.0]

      Solution: Detailed solution: Before the collision in the CM frame (vb − vm ) and
      vm will be magnitude of the velocities of the neutron and moderator atom respectively.
                                                                                   vb
      From momentum conservation in the CM frame, vb − vm = Avm gives vm = A+1        .

      After the collision, let v and V be magnitude of the velocities of neutron and moderator
      atom respectively in the CM frame. From conservation laws,
                                               1              1 2   1     1
          v = AV                and              (vb − vm )2 + Avm = v 2 + AV 2 .(→ [0.2 + 0.2])
                                               2              2     2     2


                    Theoretical Task 3 (T-3) : Solutions                                         5 of 9




                         Avb              vb
     Solving gives v = A+1    and V = A+1    . (OR) From definition of center of mass frame
             vb                                                      Avb
     vm = A+1 . Before the collision in the CM frame vb − vm = A+1       and vm will be mag-
     nitude of the velocities of the neutron and moderator atom respectively. In elastic
     collision the particles are scattered in the opposite direction in the CM frame and so
                                    Avb            vb
     the speeds remain same v = A+1      and V = A+1  (→ [0.2 + 0.1]).

     Note: Alternative solutions are worked out in the end and will get appropriate weigh-
     tage.


B3 Derive an expression for G(α, θ) = Ea /Eb , where Eb and Ea are the kinetic energies of the
   neutron, in the LF, before and after the collision respectively, and α ≡ [(A − 1)/(A + 1)]2 ,          [1.0]

     Solution:
                             Ea   A2 + 2A cos θ + 1  1
                 G(α, θ) =      =             2
                                                    = [(1 + α) + (1 − α) cos θ] .
                             Eb       (A + 1)        2

     Detailed solution: Since −  →
                                 va = − →v +−v→      2     2    2
                                                m , va = v + vm + 2vvm cos θ (→ [0.3]). Substi-
                                              2
                                            A v  2       2
                                                        vb        2Avb2
     tuting the values of v and vm , va2 = (A+1)b 2 + (A+1)  2 + (A+1)2 cos θ (→ [0.2]), so


                                   va2   Ea   A2 + 2A cos θ + 1
                                       =    =                   .
                                   vb2   Eb       (A + 1)2

                                   A2 + 1       2A             1
                    G(α, θ) =             2
                                            +         2
                                                        cos θ = [(1 + α) + (1 − α) cos θ] .
                                  (A + 1)     (A + 1)          2
         Alternate form
                                      (1 − α)(1 − cos θ)
                              = 1−                       .
                                              2

     Note: Alternative solutions are worked out in the end and will get appropriate weigh-
     tage.


B4 Assume that the above expression holds for D2 O molecule. Calculate the maximum pos-
   sible fractional energy loss fl ≡ EbE−E
                                         b
                                           a
                                             of the neutron for the D2 O (20 u) moderator.                [0.5]

     Solution: fl = 0.181

     Detailed solution: The maximum energy loss will be when the collision is head
     on ie., Ea will be minimum for the scattering angle θ = π.

     So Ea = Emin = αEb .

                                                                 Eb −Emin
     For D2 O, α = 0.819 and maximum fractional loss                 Eb
                                                                                = 1 − α = 0.181. [Ac-
     ceptable Range (0.170 to 0.190)]


                      Theoretical Task 3 (T-3) : Solutions                                    6 of 9

C. The Nuclear Reactor
To operate the NR at any constant neutron flux Ψ (steady state), the leakage of neutrons has to
be compensated by an excess production
                               h          of neutrons
                                                   i    in the reactor. For a reactor in cylindrical
                                       2         2
geometry the leakage rate is k1 2.405    + Hπ

                                  R
                                                     Ψ and the excess production rate is k2 Ψ. The
constants k1 and k2 depend on the material properties of the NR.

C1 Consider a NR with k1 = 1.021×10−2 m and k2 = 8.787×10−3 m−1 . Noting that for a
   fixed volume the leakage rate is to be minimized for efficient fuel utilisation obtain the
   dimensions of the NR in the steady state.                                                           [1.5]

       Solution: R = 3.175 m, H = 5.866 m.

       Detailed solution: For constant volume V = πR2 H,
                                    "         2     #
                                 d     2.405      π 2
                                               +       = 0,
                                dH       R        H

                              d 2.4052 πH  π2   2.4052 π    π2

                                          + 2 =          − 2 3 = 0,
                             dH     V      H       V        H


               2.405 2      π 2

       gives     R
                       =2   H
                                .

       For steady state,
                                     "             2                #
                                          2.405              π  2
                      1.021 × 10−2                     +                Ψ = 8.787 × 10−3 Ψ.
                                            R               H



       Hence H = 5.866 m [Acceptable Range (5.870 to 5.890)]
       R = 3.175 m [Acceptable Range (3.170 to 3.180)].



       Alternative Non-Calculus Method        to Optimize
                                                     2
                                             2.405          π 2
       Minimisation of the expression                  +        , for a fixed volume V =
                                               R           H
       πR2 H:
                                                    2.4052 πH     π2
       Substituting for R2 in terms of V, H we get             + 2,
                                                        V         H
                                      2           2          2
                                 2.405 πH 2.405 πH         π
       which can be written as,            +            + 2.
                                    2V          2V         H
       Since all the terms are positive applying AMGM inequality for three positive terms we
       get
             2.4052 πH   2.4052 πH   π2
                                           r                              r
                 2V
                       +    2V
                                   + H 2   3 2.4052 πH   2.4052 πH  π 2           4 4
                                                                           3 2.405 π
                                         ≥             ×           × 2 =              .
                          3                     2V          2V      H          4V 2


                    Theoretical Task 3 (T-3) : Solutions                                     7 of 9


     The RHS is a constant. The LHS is always greater or equal to this constant im-
     plies that this is the minimum value the LHS can achieve. The minimum is achieved
                                                                            2.4052 πH
     when all the three positive terms are equal, which gives the condition           =
                                                                               2V
                       2
     π2

               2.405           π  2
          ⇒              = 2        .
     H2          R            H
     For steady state,
                                    "             2                #
                                         2.405              π  2
                     1.021 × 10−2                     +                Ψ = 8.787 × 10−3 Ψ.
                                           R               H



     Hence H = 5.866 m [Acceptable Range (5.870 to 5.890)]
     R = 3.175 m [Acceptable Range (3.170 to 3.180)].


                                                                π2
     Note: Putting the condition in the RHS gives the minimum as 2 . From the condi-
                                         r                      H
                π3    2.4052 π 2   π2    3 2.4054 4
                                                  π
     tion we get 3 =             ⇒ 2 =              .
                H        2V        H         4V 2
     Note: The radius and height of the Tarapur 3 & 4 NR in Western India is 3.192 m and
     5.940 m respectively.


C2 The fuel channels are in a square arrangement (Fig-III) with nearest neighbour distance
   0.286 m. The effective radius of a fuel channel (if it were solid) is 3.617×10−2 m. Estimate
   the number of fuel channels Fn in the reactor and the mass M of UO2 required to operate
   the NR in steady state.                                                                            [1.0]

     Solution: Fn = 387 and M = 9.892 × 104 kg.

     Detailed solution: Since the fuel channels are in square pitch of 0.286 m, the ef-
     fective area per channel is 0.2862 m2 = 8.180 × 10−2 m2 .

     The cross-sectional area of the core is πR2 = 3.142 × (3.175)2 = 31.67 m2 , so the
     maximum number of fuel channels that can be accommodated in the cylinder is the
                     31.67
     integer part of 0.0818 = 387.

     Mass of the fuel=387×Volume of the rod×density
                     = 387 × (π × 0.036172 × 5.866) × 10600 = 9.892 × 104 kg.
     Fn = 387 [Acceptable Range (380 to 394)]
     M = 9.892 × 104 kg [Acceptable Range (9.000 to 10.00)]



     Note 1: (Not part of grading) The total volume of the fuel is 387 × (π × 0.036172 ×
     5.866) = 9.332 m3 . If the reactor works at 12.5 % efficieny then using the result of
     a-(iii) we have that the power output of the reactor is 9.332 × 4.917 × 108 × 0.125 =


                     Theoretical Task 3 (T-3) : Solutions                                  8 of 9


       573 MW.
       Note 2: The Tarapur 3 & 4 NR in Western India has 392 channels and the mass of the
       fuel in it is 10.15 ×104 kg. It produces 540 MW of power.


Alternative Solutions to sub-parts B2 and B3: Let σ be the scattering angle of the
Moderator atom in the LF, taken clockwise with respect to the initial direction of the neutron
before collision. Let U be the speed of the Moderator atom, in the LF, after collision. From
momentum and kinetic conservation in LF we have
                                   vb = va cos θL + AU cos σ,                                 (1)
                                    0 = va sin θL − AU sin σ,                                 (2)
                                 1 2    1         1
                                   vb =   AU 2 + va2 .                                        (3)
                                 2      2         2
Squaring and adding eq(1) and (2) to eliminate σ and from eq(3) we get
                               A2 U 2 = va2 + vb2 − 2va vb cos θL ,
                               A2 U 2 = Avb2 − Ava2 ,                                         (4)
which gives
                             2va vb cos θL = (A + 1)va2 − (A − 1)vb2 .                        (5)
(ii) Let v be the speed of the neutron after collision in the COMF. From definition of center
                      vb
of mass frame vm =         .
                     A+1
va sin θL and va cos θL are the perpendicular and parallel components of va , in the LF, resolved
along the initial direction of the neutron before collision. Transforming these to the COMF
gives va sin θL and va cos θL − vm as the perpendicular
                                                    p and parallel components of v. Substitut-
ing for vm and for 2va vb cos θL from eq(5) in v = va2 sin2 θL + va2 cos2 θL + vm2 − 2v v cos θ
                                                                                       a m      L
                               Avb                                                            2
and simplifying gives v =           . Squaring the components of v to eliminate θL gives va =
                              A+1
v 2 + vm
       2
         + 2vvm cos θ. Substituting for v and vm and simplifying gives,
                                 va2   Ea   A2 + 2A cos θ + 1
                                     =    =                   .
                                 vb2   Eb       (A + 1)2
                     Ea    A2 + 1       2A             1
           G(α, θ) =    =         2
                                    +         2
                                                cos θ = [(1 + α) + (1 − α) cos θ] .
                     Eb   (A + 1)     (A + 1)          2

(OR)
                                                   vb
(iii) From definition of center of mass frame vm =     . After the collision, let v and V
                                                 A+1
be magnitude of the velocities of neutron and moderator atom respectively in the COMF.
From conservation laws in the COMF,
                                            1              1 2   1     1
               v = AV          and            (vb − vm )2 + Avm = v 2 + AV 2 .
                                            2              2     2     2
                    Avb          vb
Solving gives v = A+1   and V = A+1 . We also have v cos θ = va cos θL − vm , substituting for vm
and for va cos θL from eq(5) and simplifying gives
                                 va2   Ea   A2 + 2A cos θ + 1
                                     =    =                   .
                                 vb2   Eb       (A + 1)2


                        Theoretical Task 3 (T-3) : Solutions                                     9 of 9

                        Ea    A2 + 1       2A             1
            G(α, θ) =      =         2
                                       +         2
                                                   cos θ = [(1 + α) + (1 − α) cos θ] .
                        Eb   (A + 1)     (A + 1)          2

(OR)
                                                     vb
(iv) From definition of center of mass frame vm =        . After the collision, let v and V
                                                   A+1
be magnitude of the velocities of neutron and moderator atom respectively in the CM frame.
From conservation laws in the CM frame,
                                             1              1 2   1     1
                v = AV           and           (vb − vm )2 + Avm = v 2 + AV 2 .
                                             2              2     2     2
                   Avb             vb
Solving gives v = A+1  and V = A+1    . U sin σ and U cos σ are the perpendicular and parallel
components of U , in the LF, resolved along the initial direction of the neutron before collision.
Transforming these to the COMF gives U sin σ and −U cos σ + vm as the perpendicular and
parallel components of V . So we get U 2 = V 2 sin2 θ +V 2 cos2 θ +vm
                                                                    2
                                                                      −2V vm cos θ. Since V = vm
          2    2
we get U = 2vm (1 − cos θ). Substituting for U from eq(4) and simplifying gives

                                  va2   Ea   A2 + 2A cos θ + 1
                                      =    =                   .
                                  vb2   Eb       (A + 1)2

                        Ea    A2 + 1       2A             1
            G(α, θ) =      =         2
                                       +         2
                                                   cos θ = [(1 + α) + (1 − α) cos θ] .
                        Eb   (A + 1)     (A + 1)          2


                      √
                        A2 + 2A cos θ + 1
Note: We have va =                        vb . Substituting for va , v, vm in v cos θ = va cos θL −vm
                            A+1
gives the relation between θL and θ,
                                                 A cos θ + 1
                                  cos θL = √                       .
                                               A2 + 2A cos θ + 1
Treating the above equation as quadratic in cos θ gives,
                                                    p
                                  − sin2 θL ± cos θL A2 − sin2 θL
                          cos θ =                                 .
                                                  A
For θL = 0◦ the root with the negative sign gives θ = 180◦ which is not correct so,
                                          p
                                    cos θL A2 − sin2 θL − sin2 θL
                            cos θ =                               .
                                                  A
                                                                       va2
Substituting the above expression for cos θ in the expression for          gives an expression in terms
                                                                       vb2
of cos θL                                       p
                        va2   Ea   A2 + 2 cos θL A2 − sin2 θL + cos 2θL
                            =    =                                      .
                        vb2   Eb                 (A + 1)2
