---
id: solution-document-ipho-2003-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2003/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2003-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2003/T2_S.pdf."
---

Solution to Theoretical Question 2

             A Piezoelectric Crystal Resonator under an Alternating Voltage
Part A
(a) Refer to Figure A1. The left face of the rod moves a distance v∆t while the pressure wave
    travels a distance u∆t with u = Y / ρ . The strain at the left face is
                                                          ∆A       − v∆t − v
                                                    S=         =        =                                                (A1a)
                                                           A        u∆t   u
   From Hooke’s law, the pressure at the left face is
                                                                        v
                                                    p = −YS = Y           = ρ uv                                         (A1b)
                                                                        u
                                                    u∆t

                                 p
                                                                                                t=0

                                   p                       p
             Figure A1                                                                          ∆t/2

                                     p                                    p                     ∆t


                                          v∆t

(b) The velocity v is related to the displacement ξ as in a simple harmonic motion (or a
    uniform circular motion, as shown in Figure A2) of angular frequency ω = ku . Therefore,
    if ξ ( x, t ) = ξ 0 sin k ( x − u t ) , then
                                      v( x, t ) = −kuξ 0 cos k ( x − u t ) .          (A2)
   The strain and pressure are related to velocity as in Problem (a). Hence,
                                         S ( x, t ) = −v( x, t ) / u = kξ 0 cos k ( x − u t )                             (A3)

                                         p ( x, t ) = ρ uv( x, t ) = −kρ u 2ξ 0 cos k ( x − u t )
                                                                                                                          (A4)
                                                  = −YS ( x, t ) = −kYξ 0 cos k ( x − u t )

   ---------------------------------------------------------------------------
   Alternatively, the answers may be obtained by differentiations:                                         x
                   ∆ξ
   v ( x, t ) =       = −kuξ 0 cos k ( x − u t ) ,                                                             ξ0
                   ∆t
                   ∆ξ                                                         Figure A2
    S ( x, t ) =      = kξ 0 cos k ( x − u t ) ,                                                                kx−ω t
                   ∆x                                                                                  ξ
                       ∆ξ
    p ( x, t ) = −Y       = −kYξ 0 cos k ( x − u t ) .
                       ∆x                                                                              v
------------------------------------------------------------------------------

                                                                   21


Part B
(c) Since the angular frequency ω and speed of propagation u are given, the wavelength is
    given by λ = 2π / k with k = ω / u. The spatial variation of the displacement ξ is therefore
    described by
                                                       b                 b
                            g ( x ) = B1 sin k x −        + B2 cos k x −                    (B1)
                                                       2                 2
   Since the centers of the electrodes are assumed to be stationary, g(b/2) = 0. This leads to
   B 2 = 0. Given that the maximum of g(x) is 1, we have B 1 = ±1 and
                                                        ω      b
                                        g ( x ) = ± sin     x−                              (B2)
                                                        u      2
   Thus, the displacement is
                                                          ω      b
                                   ξ ( x, t ) = ±2ξ 0 sin    x − cos ω t                    (B3)
                                                          u      2

(d) Since the pressure p (or stress T ) must vanish at the end faces of the quartz slab (i.e., x = 0
    and x = b), the answer to this problem can be obtained, by analogy, from the resonant
    frequencies of sound waves in an open pipe of length b. However, given that the centers
    of the electrodes are stationary, all even harmonics of the fundamental tone must be
    excluded because they have antinodes, rather than nodes, of displacement at the bisection
    plane of the slab.
      Since the fundamental tone has a wavelength λ = 2b, the fundamental frequency is
   given by f1 = u /(2b) . The speed of propagation u is given by
                                       Y        7.87 × 1010
                                u=         =                  = 5.45 × 10 3 m/s                             (B4)
                                        ρ        2.65 × 10 3

   and, given that b =1.00×10-2 m, the two lowest standing wave frequencies are
                                      u                                  3u
                                f1 =      = 273 (kHz) , f 3 = 3 f1 =         = 818 (kHz)                    (B5)
                                      2b                                 2b
   --------------------------------------------------------------------------------------------------------------
   [Alternative solution to Problems (c) and (d)]:
       A longitudinal standing wave in the quartz slab has a displacement node at x = b/2. It
   may be regarded as consisting of two waves traveling in opposite directions. Thus, its
   displacement and velocity must have the following form
                                               b               b
                    ξ ( x, t ) = ξ m sin k x − − ut + sin k x − + ut
                                               2               2
                                                                                       (B6)
                                               b
                               = 2ξ m sin k x − cos ω t
                                               2
                                                          b                 b
                         v ( x, t ) = − kuξ m cos k x −     − ut − cos k x − + ut
                                                          2                 2
                                                                                                           (B7)
                                                   b
                                 = −2ωξ m sin k x − sin ω t
                                                   2
   where ω = k u and the first and second factors in the square brackets represent waves

                                                       22


  traveling along the +x and –x directions, respectively. Note that Eq. (B6) is identical to Eq.
  (B3) if we set ξ m = ±ξ 0 .
       For a wave traveling along the –x direction, the velocity v must be replaced by –v in
  Eqs. (A1a) and (A1b) so that we have
                                  −v
                             S=         and p = ρ uv     (waves traveling along +x)         (B8)
                                   u
                                   v
                              S=        and p = − ρ uv   (waves traveling along –x)         (B9)
                                  u
  As in Problem (b), the strain and pressure are therefore given by
                                                    b                 b
                    S ( x, t ) = − kξ m − cos k x − − ut − cos k x − + ut
                                                    2                 2
                                                                                          (B10)
                                                 b
                               = 2kξ m cos k x − cos ω t
                                                 2
                                                           b                 b
                        p( x, t ) = − ρ uωξ m cos k x −      − ut + cos k x − + ut
                                                           2                 2
                                                                                                         (B11)
                                                      b
                                = −2 ρ uωξ m cos k x − cos ω t
                                                      2
  Note that v, S, and p may also be obtained by differentiating ξ as in Problem (b).
       The stress T or pressure p must be zero at both ends (x = 0 and x = b) of the slab at all
  times because they are free. From Eq. (B11), this is possible only if cos(kb / 2) = 0 or
                                       ω      2πf
                                  kb = b =        b = nπ ,       n = 1, 3, 5, "            (B12)
                                        u     λf
  In terms of wavelength λ, Eq. (B12) may be written as
                                        2b
                                   λ= ,         n = 1, 3, 5, " .                           (B13)
                                         n
  The frequency is given by
                                       u nu       n Y
                                   f = =       =          ,      n = 1, 3, 5, " .          (B14)
                                       λ 2b 2b ρ
  This is identical with the results given in Eqs. (B4) and (B5).
  --------------------------------------------------------------------------------------------------------------

(e) From Eqs. (5a) and (5b) in the Question, the piezoelectric effect leads to the equations
                                    T = Y (S − d p E )                                     (B15)
                                                                   d p2
                                         σ = Yd p S + ε T 1 − Y           E                              (B16)
                                                                   εT
  Because x = b/2 must be a node of displacement for any longitudinal standing wave in the
  slab, the displacement ξ and strain S must have the form given in Eqs. (B6) and (B10), i.e.,
  with ω = ku ,
                                                     b
                           ξ ( x, t ) = ξ m sin k x − cos(ω t + φ )                   (B17)
                                                     2


                                                      23


                                                         b
                           S ( x, t ) = kξ m cos k x −     cos(ω t + φ )                      (B18)
                                                         2
  where a phase constant φ is now included in the time-dependent factors.
       By assumption, the electric field E between the electrodes is uniform and depends only
  on time:
                                               V (t ) Vm cos ω t
                                  E ( x, t ) =       =                                 (B19)
                                                h         h
  Substituting Eqs. (B18) and (B19) into Eq. (B15), we have
                                                b                dp
                      T = Y kξ m cos k x − cos(ω t + φ ) −          Vm cos ω t         (B20)
                                                2                h
  The stress T must be zero at both ends (x = 0 and x = b) of the slab at all times because they
  are free. This is possible only if φ = 0 and
                                                kb        V
                                       kξ m cos     = dp m                           (B21)
                                                 2         h
  Since φ = 0, Eqs. (B16), (B18), and (B19) imply that the surface charge density must have
  the same dependence on time t and may be expressed as
                                    σ ( x, t ) = σ ( x) cos ω t                      (B22)
  with the dependence on x given by
                                                   b            d p2 Vm
                      σ ( x ) = Yd p kξ m cos k x − + ε T 1 − Y
                                                   2            εT h
                                                                                              (B23)
                                  d p2             b            d p2              Vm
                            = Y          cos k x −   + εT 1 − Y
                                cos
                                     kb            2            εT                 h
                                       2

(f) At time t, the total surface charge Q(t) on the lower electrode is obtained by integrating
    σ ( x, t ) in Eq. (B22) over the surface of the electrode. The result is
                         Q (t )    1 b                       1 b
                         V (t ) V (t ) ∫0                   Vm ∫0
                                =         σ ( x , t ) wdx =       σ ( x ) w dx

                            w b     d p2              b               d p2
                           = ∫ [Y          cos k ( x − ) + ε T (1 − Y      )] dx
                            h 0   cos
                                       kb             2               ε T
                                         2                                                    (B24)
                                              2                               2
                                  bw   d           2     kb       d
                           = εT      Y
                                              p
                                                     tan    + 1−Y
                                                                              p

                                   h   εT         kb      2       εT
                                       2     kb
                           = C0 α 2      tan    + (1 − α 2 )
                                      kb      2
  where
                              bw                  d p2       (2.25) 2 × 10−2
                     C0 = ε T    ,      α =Y
                                          2
                                                         =                   = 9.82 × 10− 3   (B25)
                               h                  εT          1.27 × 4.06
  (The constant α is called the electromechanical coupling coefficient.)
                                                  24


   Note: The result C 0 = ε T bw / h can readily be seen by considering the static limit k = 0
of Eq. (5) in the Question. Since tan x ≈ x when x << 1, we have
                           lim Q(t ) / V (t ) ≈ C 0 [α 2 + (1 − α 2 )] = C 0            (B26)
                           k→ 0

Evidently, the constant C 0 is the capacitance of the parallel-plate capacitor formed by the
electrodes (of area bw) with the quartz slab (of thickness h and permittivity ε T ) serving as
the dielectric medium. It is therefore given by ε T bw / h.




                                               25


                                     Marking Scheme

                               Theoretical Question 2
           A Piezoelectric Crystal Resonator under an Alternating Voltage
 Total      Sub
                                   Marking Scheme for Answers to the Problem
Scores     Scores
Part A       (a)    The strain S and pressure p on the left face.
                    ¾ 0.4 for |∆ℓ| = v∆t and ℓ = u∆t.
4.0 pts.     1.6    ¾ 0.4 for S = -v/u.                               (0.1 for sign)
                    ¾ 0.4 for relating p to S as p = −YS.             (0.1 for sign)
                    ¾ 0.4 for p = ρ u v .                              (0.1 for sign)
             (b)    The velocity v(x, t), strain S(x, t), and pressure p(x, t).
                    ¾ 0.3×3 sinusoidal variation with correct phase constant. (0.2 for phase
             2.4             constant.)
                    ¾ 0.3×3 for amplitude.
                    ¾ 0.2×3 for dependence on x and t as (kx- ku t).
Part B       (c)    The function g(x) for a standing wave of angular frequency ω.
                    ¾ 0.4 for g(b/2) = 0.
6.0 pts      1.2    ¾ 0.3+0.1 for B1=±1 (0.1 for both signs)
                    ¾ 0.4 for B2 = 0
             (d)    The two lowest standing wave frequencies.
                    ¾ 0.2 for wavelength of fundamental tone λ = 2b.
             1.2    ¾ 0.2 for excluding even harmonics.
                    ¾ (0.3+0.1) for f1 = u/2b = 273 kHz.                (0.1 for value)
                    ¾ (0.3+0.1) for f3 = 3u/2b = 818 kHz.               (0.1 for value)
             (e)    The surface charge density σ as a function of x and t.
                    ¾ 0.1×2 for ξ and S, each a separable function of x and t.
             2.2    ¾ 0.1×2 for ξ and S, each depends on time as cos ω t with φ = 0.
                    ¾ 0.3 for spatial part ξ ( x) = ξ m sin k ( x − b / 2) .
                    ¾ 0.3 for spatial part S ( x) = kξ m cos k ( x − b / 2) .
                    ¾ 0.3 for T ( x) = [kξ m cos k ( x − b / 2) − d pVm / h]Y .
                    ¾ 0.3 for kξ m cos(kb / 2) = d pVm / h .
                    ¾ 0.6 for D1 (0.3) and D2 (0.3) in σ (x) .
             (f)    The constants C0 and α 2 .
                    ¾ 0.2 for relation between σ and Q as
             1.4                        b
                             Q(t) = ( ∫ 0 σ ( x) w dx ) cos ω t.
                    ¾ 0.3 for noting Q(t)/V(t) ≈ C0 as k → 0.
                    ¾ 0.4 for C0 = ε T bw / h.
                    ¾ 0.4+0.1 for α 2 = Yd p2 / ε T = 9.82 × 10−3 . (0.1 for value)




                                                 26
