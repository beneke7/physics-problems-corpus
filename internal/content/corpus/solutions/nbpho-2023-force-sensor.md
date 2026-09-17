---
id: nbpho-2023-force-sensor
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2023-force-sensor
solution_type: official
source_document: solution-document-nbpho-2023-s
source_pdf: cache/phoxiv/nbpho/2023_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2023_S.pdf."
---

5. FORCE ſENſOR (5 points) — Solution by            the center of the beam (0.6 pts)                  • Assumes that the resistance of the Volt‐
Päivo Simson, grading schemes by ....            • Correct geometric relations for l±∆l based           meter is infinite (0.5 pts)
                                                                                                                                                   Grading:
                                                    on ∆s = r∆ϕ (0.6 pts)                             • Correctly calculating the potential differ‐
i) (2 points) To find the elongation ∆l, we                                                                                                        • Equation for a cylinder surface (0.4 pts)
                                                                                                        ence V as a function of the change in the
need to know the curvature radius r of the • correctly solving for ∆l (0.6 pts)                                                                    • Equation for a sphere surface (0.4 pts)
                                                                                                        resistance (0.5 pts)
beam at x = L/2. The torque created by the • correctly expressing the final answer                                                                 • Both surface equations correct and co‐
                                                                                                      • Expressing the final answer in the form
force F at an arbitrary point x is F · (L − x).     (0.2 pts)
                                                                                                                                                     ordinates consistent (0.2 pts)
                                                                                                        given in the solution (0.5 pts)
This must be balanced by the bending mo‐ ii) (1 point) Let ρ and S be the resistivity and
ment M (x) of the beam. In the middle of the the cross‐sectional area of the wires, respect‐          6. STRıNG‐COUPLED MAſſEſ (5 points) —        • Realising x2 ‐ and z 2 ‐terms are negligible,
beam we have                                                                                          Solution by Aleksi Kononen and Jaan Kalda,     and not discarding y 2 (0.2 pts)
                                                 ively. The initial resistance R0 of all the wires                                                 • Solving z in terms of y (0.5 pts)
                                                 is                                                   grading schemes by Aleksi Kononen.
               EI       L           2EI                                                                                                            • Energy conservation between z and ẏ
        M=         =F       =⇒ r =       .                               ρl   ρl2                     i) (2 points) For in‐phase oscillations, the
                r       2            FL                           R0 =      =     ,                                                                  (0.3 pts)
                                                                         S     lS                     string connecting the masses always remains  • Solving relation between ÿ and y (0.6 pts)
It is easy to see that if the upper wires elong‐                                                      parallel to the x‐axis. In that case, the motion
                                                                                                                                                   • Correct expression for ω2 (0.3 pts)
ate by ∆l, the lower ones shorten by the where lS is the volume of the wire that re‐                  is confined to the yz‐plane and is identical to
                                                                                                                                                   • ω2 correctly in terms of ω1 (0.1 pts)
same amount. Now we need to relate the mains constant during the deformation. As‐                     a pendulum with length r sin θ hung from the
curvature radius r with the elongation ∆l. suming ∆l << l we have                                     axis of rotation:                                Alternative solution: Let one of the
                                                         ρ(l + ∆l)2    ρl(1 + 2∆l/l)                                         √                     masses (mass A) be displaced by y and the
                                                 R1 =                ≈                = R0 +∆R,                        ω1 =
                                                                                                                                   g               other by −y. Let T ′ be the tension in the
                                                             lS               S                                                 r sin θ            two outermost strings (equal magnitudes by
                                                    ρ(l − ∆l) 2
                                                                    ρl(1 − 2∆l/l)                                                                  symmetry) and T in the connecting string.
                                            R2 =                ≈                  = R0 −∆R,      Grading:                                         Newton’s law along the y‐axis for mass A then
                                                        lS                S                                ∑                                       yields
                                            where                                             • Stating      F  x =  0,  or stating  that the con‐                       y      y
                                                                                                necting string remains parallel to the x‐axis                      −T ′ − T = mÿ,
                                                           2ρ∆l          ∆l        F Lh         (0.6 pts)                                                                r       r
                                                   ∆R =           = 2R0       = R0       .
                                                             S            l        2EI        • Realising the effective pendulum length is i.e.
                                                                                                r sin θ, i.e. the axis of rotation is the line                                T′ + T
                                            Grading:                                                                                                                 ÿ = −            y.
                                                                                                connecting the wall points (0.8 pts)                                            mr
                                            • R = ρl/S (0.3 pts)                              • Correct expression for ω1 (0.6 pts)                Without oscillations, T0′ = mg/ sin θ and
                                            • Correct approximations (0.3 pts)                                                                     T0 = T ′ cos θ. Let us write T ′ = T0′ + ∆T ′
                                            • Correctly calculating the resistances and ii) (3 points) Now suppose one of the balls and T =0 T + ∆T , i.e.
                                               the change in resistance using the above re‐ moves along the y axis to a distance ym and
                                                                                                                                                               0

                                               lations (0.4 pts)                              the  other   ball —  by −y.   The  length of the ho‐
                                                                                                                                                                         1 + cos θ
                                                                                              rizontal string remains constant, hence y 2 +             T ′ + T = mg                  + ∆T ′ + ∆T.
                                            iii) (2 points)The total resistance R of the cir‐ (r − x)2 = r2 , where x denotes the displace‐                                 sin θ
                                            cuit is                                           ment of the ball in x‐direction. For small Let us make some estimates. Clearly, |∆T | ∼
The arc length of a circle is ∆s = r∆ϕ.                (R1 + R2 )(R1 + R2 )      R1 + R2      displacements, we can neglect the smallest |∆T ′ |. The maximum of ∆T ′ occurs when
Knowing this, we have from the above figure      R=                            =
                                                             2R1 + 2R2               2        term x2 , hence x = y 2 /2r. The length of the the mass swings by its lowest point with ve‐
                    (        )                                                                slanted string remains also constant, hence locity ẏ, where its trajectory has a radius of
                           h
           l + ∆l = r +         ∆ϕ,         Since both sides of the circuit have the same (r sin θ − z)2 + (r cos θ + x)2 + y 2 = r2 , where curvature R ∼ r sin θ. Moreover, small nor‐
                           2                total resistance R1 + R2 , the current is also z denotes the vertical displacement. Neglect‐ mal mode oscillations imply y = A cos ω2 t for
                    (        )              the same. The voltmeter reading is therefore ing here the smallest terms z 2 and x2 , we ob‐ some amplitude A ≪ r sin θ, i.e. |ẏ| ≤ Aω2 .
                           h
           l − ∆l = r −         ∆ϕ.                                                           tain 2rz sin θ = 2rx cos θ + y 2 = y 2 (1 + cos θ), Finally, assume ω2 = kω1 holds for some
                           2                            I       I         U
                                                  V = R2 − R1 =              (R1 − R2 ) =     hence                                                k ∼ 1. We have
By dividing the above equations, we get an              2       2        2R                                          y 2 1 + cos θ                                                            (         )2
equation for ∆l that is easily solved:                   R1 − R2         ∆R       F Lh                          z=                 .                   ′     mẏ 2      mk 2 A2 g                  A
                                                    =U             =U          =U       .                            2r sin θ                      |∆T   | ∼        ∼               =  k 2
                                                                                                                                                                                           mg              ,
                                                         R   + R         R         2EI                                                                        R         r2 sin2 θ               r sin θ
      l + ∆l    2r + h               lh                    1     2         0                  Now we can write down energy conservation
              =          =⇒ ∆l = .                                                            law: 21 ẏ 2 + gz = const, where dot denotes i.e. quadratically smaller in (A/r sin θ) than
      l − ∆l    2r − h               2r     From this, we finally have
                                                                      2EIV                    the time derivative. Differentiating this over T0′ . Thus, T ′ + T ≈ mg 1+cos            θ
                                                                                                                                                                                  sin θ and
Combining this with the expression for r we                                                   time we obtain
have                                                            F  =         .                                                                                   √
                                                                       LhU                                                                                                            √
                       F Llh                                                                                          gy 1 + cos θ                                  T′ + T
                ∆l =         .              Grading:                                                           ÿ = −                                      ω2 =                = ω1 1 + cos θ.
                        4EI                                                                                             r sin θ                                         mr

                         √
(The result shows k ≤ 2, i.e. the assump‐                                                       Grading:                                             pass x′ = 0 at t = ∆t, and reach x′ = −L/2
tion holds.) Grading:                                                                           • switching to the reference frame of the            at t = 2∆t. Therefore, t1 = 2∆t and the min‐
• Force equation, either along y or full vector                                                    bottom‐most sheet (0.4 pts)                       imal distance between the paper pack and
  form (0.4 pts)                                                                                • Correct normal forces with bottom‐most             the edge has to be
• Solving relation between ÿ and y in terms                                                       sheet and table (0.6 pts)                                                       (    )
                                                                                                                                                                        2u           Lω
  of tension forces (0.4 pts)                                                                   • Correct net force on pack (0.2 pts)                     l = ut1 − L =    tanh−1         −L
• Unperturbed values for T ′ and T (0.4 pts)                                                    • Identifying the spring coefficient (0.3 pts)                          ω            2u
                                                                                                                                                                (           (     )    )
• Reasonable estimate of |∆T ′ | (0.6 pts)                                                      • Conservation of energy equation (0.5 pts)                       2u           Lω
• Showing |∆T ′ | is quadratically smaller                                                      • Identifying critical point x = 0 (0.6 pts)                =L       tanh−1         −1 .
                                                                                                                                                                  Lω           2u
  than T ′ (0.8 pts)                                                                            • Deriving umin (0.4 pts)
• Correct expression for ω2 (0.3 pts)                                                           iii) (1 point) As before, conservation of en‐        Grading:
                                            Grading:
• ω2 correctly in terms of ω1 (0.1 pts)                                                         ergy holds. This means that when the bottom
• Remark: Accept solution with assumption   • Correct initial accelerations (0.2 pts)                                                                 • Stating the formula l = ut1 − L (0.2 pts)
                                                                                                sheet is separated at x′ = −L/2, the potential        • Stating the equation of motion a′ = kx′
  ∆T ′ /T ′ ≪ 1 without estimates           • Correct final accelerations (0.2 pts)
                                                                                                energy is the same as when x′ = L/2 so the
                                            • Correct durations of acceleration (0.4 pts)                                                                (0.2 pts)
