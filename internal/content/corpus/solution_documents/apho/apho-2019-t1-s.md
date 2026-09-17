---
id: solution-document-apho-2019-t1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2019/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2019-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2019/T1_S.pdf."
---

Theory Q1: Solutions
RF Reflectometry
                 Version 1.32.


                   A.   LUMPED ELEMENT MODEL OF A CO-AXIAL TRANSMISSION LINE

                                                                                 √
A.1 The speed of wave propagation in free space (c0 = 299 792 458 m/s) is c0 = 1/ ε0 µ0 . The speed in the dielectric
    & diamagnetic medium is
                                                                 c0
                                                             v=√                                                 (A.1)
                                                                εr µr

A.2 Gauss law for the flux through a cylindrical surface with radius r co-axial with the the core, a < r < b:
                                                             ∆q             ∆q    1
                                           ∆x 2πr E(r) =           ⇒ E(r) =                                      (A.2)
                                                             εr ε0          ∆x 2πεr ε0 r

A.3 The capacitance
                                                                       ∆q
                                                             Cx ∆x =                                             (A.3)
                                                                       φ
      where the potential φ of the core with respect to the shield is
                                                 ∫ b
                                                                      ∆q 1            b
                                       0−φ=−         E(r) dr ⇒ φ =                 ln                            (A.4)
                                                   a                  ∆x 2πε r ε 0    a
                                                                    2πεr ε0
                                                             Cx =                                                (A.5)
                                                                     ln ab

A.4 The magnetic flux through a rectangular contour paralel to the axis equal inductance times the current:
                                                ∫ b
                                             ∆x     B(r) dr = Lx ∆x I                                       (A.6)
                                                         a

      Biot-Savart law B(r) = µ2π
                              r µ0 I
                                   r gives

                                                                 µr µ0    b
                                                         Lx =          ln                                        (A.7)
                                                                  2π      a

A.5     i. Adding δx length of the cable should not change its impedance. Hence the impedance Z of the following
           circuit must be equal to Z0 :
                                                    1       1        1  1
                                                      =           + 1 =                                          (A.8)
                                                    Z   Z0 + jωδL  jωδC
                                                                        Z0

                                                     Z02 + j ω δL Z0 − δL/δC = 0                                 (A.9)

              (here engineering notation for j 2 = −1 is used.) δL/δC = Lx /Cx and δL → 0 for δx → 0, hence
                                                                     √
                                                              Z0 =    Lx /Cx                                    (A.10)

        ii.
                                             √                √                 √
                                                       ln(b/a) µr µ0              µr
                                      Z0 =    Lx /Cx =                = ln(b/a)      × 59.96 Ω                  (A.11)
                                                         2π     εr ε0             εr

              For Z0 = 50 Ω, εr = 4.0 and µr = 1.0 this gives b = 5.30 a .
                                                                                                                      2

  B.     HYPOTHETICAL TRANSMISSION LINE WITH RETURN ALONG A GROUNDED PLANE

B.1 The high-conductance ground plate can be replaced by an image of the wire with opposite direction of the
    current at distance 2d from the real wire. The magnetic fields from the real and the imaginary wires add up
    and need to be integrated to get the magnetic flux between the wire and the plate:
                                                         ∫ d(            )
                                                 µµ0          1     1
                                       Lx ∆x I =       I        +           dr ∆x                          (B.1)
                                                  2π          r   2d − r
                                                       (a       )
                                               µµ0        2d        µµ0 2d
                                         Lx =       ln       −1 ≈        ln                                (B.2)
                                                2π        a          2π      a

      The potential diﬀerence between the wire and the plate can be obtained similarly by integrating the combined
      field for the wire and its image:
                                                    ∫ d(              )
                                         ∆q 1              1     1           ∆q ln(2d/a)
                                     φ=                      +          dr =                                 (B.3)
                                         ∆x 2πεr ε0 a      r   2d − r        ∆x 2πεr ε0
                                         ∆q 1      2πεr ε0
                                    Cx =      ≈                                                              (B.4)
                                         ∆x φ     ln(2d/a)
                                              √
      Hence the characterstic impedance Z0 = Lx /Cx of the wire-plate system is
                                                                     √
                                                          ln(2d/a)       µr µ0
                                                   Z0 =                                                           (B.5)
                                                             2π          εr ε0


                                      C.   BASICS OF RF REFLECTOMETRY

C.1 At the interface, values of the voltage on both transmission lines have to coincide:
                                                        Vi + Vr = Vt                                              (C.1)
      The current has to be conserved at the interface, however, the incident and the reflected waves carry the current
      in opposite directions:
                                                       Vi   Vr   Vt
                                                          −    =                                                  (C.2)
                                                       Z0   Z0   Z1
      It is clear from the equation above that Vt ̸= 0 if Z0 ̸= Z1 – impedance mismatch has to cause reflection. Solving
      the voltage and the current equations for Γ = Vr /Vi gives


                                                             Z1 − Z0
                                                        Γ=                                                        (C.3)
                                                             Z1 + Z0

C.2 A π-shift implies opposite signs of Vi and Vr and hence requires Γ < 0. This implies Z1 < Z0 .


                                 D.    THE SINGLE ELECTRON TRANSISTOR

D.1     i. Since any capacitance beyond Cg is neglected in our model, the quantum dot can be thought as a capacitor
           plate with the gate being the other plate of the same capacitor with capacitance Cg . The fixed number n of
           electrons trapped on the quantum dot sets a fixed-charge (q = −ne) boundary condition for the capacitor
           Cg on the QD, while the gate side is kept at a constant potential Vg . (We denote the elementary charge
           by e > 0). The implies that an excess charge of opposite sign, −q = ne will accumulate on the gate, to
           keep electric field confined between the QD and the gate. The potential jump across the capacitor from
           the gate to the QD will be equal to the capacitor q/Cg = −ne/Cg . Hence the potential on the QD is
                                                                         −ne
                                                          φn = Vg +                                               (D.1)
                                                                         Cg
                                                                                                                   3

        ii. Bringing an infinitesimal charge δq from potential 0 to potential φ(q) requires energy δE = φ(q)δq, and
            the dependence of potential φ(q) on the accumulated charge q is linear. For the single-electron transfer,
            the additional charge of the electron, −e, changes the potential from φn to φn+1 = φn − e/Cg . Hence the
            work necessary to accumulate an extra e on the QD is the integral of δE
                                                              φn + φn+1
                                                     ∆En = −e                                                  (D.2)
                                                                  2
                                                          2
                                                            (      )
                                                        e        1
                                                  ∆En =      n+      − eVg                                     (D.3)
                                                        Cg       2

          Alternatively, ∆En can be obtained from energy conservation, by computing the change of the energy of
          the capacitor the dork the work done against the electromotive force of the battery (=−“work done by the
          battery’) for a charge +e to be brought from the ground potential via the battery to the gate-side plate of
          the capacitor:
                                                       e2 (n + 1)2   e 2 n2
                                               ∆En =               −        − eVg                              (D.4)
                                                           2Cg       2Cg
                                                                          e2
                                                                               (      )
          Note that without Ct ≪ Cg approximation, the answer is ∆En = Cg +2 Ct n + 2 − eVg Cg /(2 Ct + Cg )
                                                                                    1

          (not required to receive full marks).
D.2 N is a minimal integer n for which ∆En ≥ 0. Consider the marginal case of ∆EN = 0 which is achieved at
    some Vg = V0 ,
                                                          (     )
                                                       e2     1
                                       ∆EN (V0 ) = 0 =     N+     − eV0                              (D.5)
                                                       Cg     2
      If Vg would go slightly larger than V0 , then ∆En would go negative and then minimal n that makes a positive
      ∆En would jump from N to N + 1. Hence Ec = ∆EN +1 (V0 ). This gives
                                                           (           )
                                                        e2           1             e2
                                    ∆EN +1 (V0 ) = Ec =      N +1+       − eV0 =                            (D.6)
                                                        Cg           2            Cg

D.3 In a metal, only electrons in an energy range ± ≈ kB T around the Fermi level take part in the thermal motion.
    (Here kB is the Boltzmann constant.) Typical energy of these electrons is kB T per particle and it may not
    exceed characteristic single-electron addition energy Ec , kB T < Ec .

D.4     i. τ = Rt Ct
        ii. Quantum uncertainty of energy (life-time broadening) h/τ must be less than the energy diﬀerence between
            the states with n and n + 1 electrons,
                                                                  h      e2
                                                    h/τ < Ec ⇒         <                                       (D.7)
                                                                 Rt Ct   Cg
                                                              h Cg   h
                                                       Rt >    2
                                                                   > 2                                         (D.8)
                                                              e Ct  e


                          E.   RF REFLECTOMETRY TO READ OUT SET STATE

E.1
                                                 ZSET − Z0
                                               Γ=                                                              (E.1)
                                                 ZSET + Z0
                                                 105 − 50       50
                                            ΓON = 5       ≈1−2 5                                               (E.2)
                                                 10 + 50        10
                                                       Z1 − Z0
                                           ΓOFF = lim          =1                                              (E.3)
                                                 Z1 →∞ Z1 + Z0

                                             ∆Γ = |ΓON − ΓOFF | ≈ 1.0 · 10−3                                   (E.4)
                                                                                                                     4

E.2 Large change in reflectance requires the impedance Z1 of the circuit to switch between Z1 < Z0 to Z1 > Z0 as
    the SET between ON (ZSET = 100kΩ) and OFF (ZSET = ∞).
                                                                                                             √
    In the OFF state of the SET, the circuit is an disspationless LC contour with resonance frequency ω0 = 1/ L0 C0
    and its impedance is 0. If we choose
                                                                   1
                                                          L0 =    2C                                             (E.5)
                                                                 ωrf 0

    then the imedance of the ω0 = ωrf .
    Since Ztot (the total impedance of the circuit) in the OFF state of the SET equals to 0, the reflectance i
    ΓOFF = −1. As we switch to the ON state with ZSET = RSET = 105 Ω, the change in reflectance will be large if
    |Ztot | in this ON state is on the order of Z0 or larger, which is indeed the case.
    For the ON state and ω0 = ωrf
                          (               )−1                                                   √
                               1       1                        RSET                    RSET + j L0 /C0
                   Ztot =      1   +            + j ωL0 =                   + j ω L0 =        2           (E.6)
                            j ω C0
                                     RSET                  1 + j ωC0 RSET                1 + RSET C0 /L0

    For C0 = 0.4 · 10−12 F, Z0 = 50 Ω and ωrf = 2π · 108 Hz, we have L0 = 6.33 µH , Ztot = (158 + 6.3 j)Ω,
    ΓON = 0.5198 + 0.0145 j, and ∆Γ = 1.52 .


                   F.   CHARGE SENSING WITH A SINGLE LEAD QUANTUM DOT

F.1 The SLQD readout circuit contains only reactive elements, so |Γ| = 1 will always be one. The OFF state of the
    SLQD corresponds to an inductor L0 and a capacitor C0 connected in parallel. We again choose
                                                          √
                                                  ωrf = 1/ L0 C0                                            (F.1)
    so that Ztot is the OFF state is infinite and ΓOFF = 1.
    The ON state corresponds to ZSET = −j ωrf1Cq and Ztot at ωrf = ω0 is just the impedance of the SLQD
                                                      1                           1       C0
                               Ztot =                                    = −j         = −j ZC                    (F.2)
                                        (jωrf L0 )−1 + jωrf (C0 + Cq )          ω0 Cq     Cq
    For the complex phase of ΓON = (Ztot −Z0 )/(Ztot +Z0 ) to be significantly diﬀerent from zero, we need |Ztot | ∼ Z0
    since Ztot is purely imaginary. Hence
                                                                 Cq
                                                          ZC ∼      Z0                                           (F.3)
                                                                 C0

F.2 If L0 is fixed, we can still operate the circuit at the frequency
                                                                √
                                                       ωrf = 1/ L0 C0                                            (F.4)

    that gives ΓOFF = 1. However, we need to deduce a way to increase |Ztot | even if ZC ≪ Cq Z0 /C0 is not
    suﬃcient. One of the ways to do that is to add an additional capacitance Cm is series with rest of the circuit.
    This will give (at ωrf = ω0 )
                                            (                 )
                                              C0           1            (           )
                                  Ztot = −j      ZC +           = −jω0−1 Cq−1 + Cm
                                                                                 −1
                                                                                                              (F.5)
                                              Cq        ω0 Cm
                                                                            √
    We can satisfy the condition |Ztot | = Z0 (and hence ΓON = j and ∆Γ = 2 ∼ 1) with
                                                                     √
                                                     Cq            Cq L0 C0
                                          Cm =                =        √                                      (F.6)
                                                Z0 Cq ωrf − 1   Z0 Cq − L0 C0
                                                    Cq ZC          ZC ≪Z0 Cq /C0     1
                                         Cm =                             ≈                                      (F.7)
                                                Z0 Cq /C0 − ZC                     Z0 ωrf
