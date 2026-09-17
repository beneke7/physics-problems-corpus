---
id: solution-document-nbpho-2005-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2005_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [nbpho-2005-anemometer, nbpho-2005-ballistic-rocket, nbpho-2005-heat-exchange, nbpho-2005-magnetic-break, nbpho-2005-mechano-electrical-oscillator, nbpho-2005-rock-climber, nbpho-2005-water-pump]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2005_S.pdf."
---

1. Rock Climber                                                             Notice also that we can take account symmetry and connect points                                                                  B
1) In the case of falling, the acceleration should not exceed 5g , which    with equal potential; this allows us later to simplify cyclic railway to                                                        O’
                                                                            previously solved infinite (actually, very long) railway. We can also see
              m − g < 5g . Maximum strain is the solution of the fol-
means that σ(ε)
                                                                            that there is no current between the two sleepers residing in the mag-                                                      C
lowing equation σ(ε) = 6gm = 6×9.8 sm2 ×80kg = 4.7kN . According
                                                                            netic field (there is no potential diﬀerence), hence we can disconnect
to the graph, ε = 0.315; hence, l < 0.315(L + H) + L
                                                                            them. So, we can obtain two indipendent (almost) infinite railways and
2) In the case of falling, the climber reaches the lowest point, when its
                                                                            both have their own source of elecromotive force.                                                             O
velocity become zero. This means that the energy absorbed by the rope
                                                                                              αR
becomes equal to the change of the potential energy:                                                                                                                                  A
                             E = mg(2L + x),
where x = l − L. Energy absorbed by the rope is given by                                  R
                                                       
    E=       σ(ε)dx =       σ(ε)(L + H)dε = (L + H)          σ(ε)dε.
                                                                                                                                                        2) The ellipse has a property that the sum of lengths from each point on
We know that the maximal value is ε = 0.315, which makes it possible                                                                                    the orbit to the both foci of the orbit is constant (equals to 2a). Hence,
to calculate the integral numerically, as the area under the graph.         4) Electromotive force in the sleeper is E = Bvh. Energy is dissipated      the other focus (i.e. which is not the centre of Earth) is at the distance R
                             0.31                                                           E2
                                                                            into heat P = Rcircuit . where Rcircuit = 12 (RR + 2αR + R),                from both the launching point and landing point, see Fig. So, the√height
                   S(ε) =            σ(ε)dε ≈ 564.8N
                                                                                                                                                        h = |CB| = |OB| − R; since |OB| = R + 12 |OO | = R(1 + 22 ), we
                             0                                                                                1 
Thus,                                                                                            Rcircuit =     R( α(2 + α) + α + 1).                   finally obtain h = √R2 .
                                                                                                              2
        (L + H)S(ε) = mg(2L + x) = mg(2L + ε(L + H)),                                                                                                   3) The ratio of the flight time to the period along the elliptic orbit
                                                                            Consequently                                                                equals to the ratio of two surface areas: the one painted dark grey
hence
                        H(mgε − S(ε))                                                                              2B 2 ω 2 r2 h2                       in Fig, and the overall area of the ellipse. The rotation period is the
                  L=                     ≈ 5.08m.                                                   P =        
                       S(ε) − mg(ε + 2)                                                                   R(    α(2 + α) + α + 1)                       same as in the case of   near-Earth orbit (due to Kepler’s third law),
So, the new carabiner must be anchored within next L = 5.08 m.              Eventually,                                                                 T = 2πR/v = 2π R/g . The dark gray surface area is calcula-
                                                                                                                                                        ted as the sum of half of the ellipse area, and a       triangle area. So,
2. Magnetic brake                                                                                     2r2 h2                                                                                              √
                                                                                              k=                  ≈ 2.12 × 10−6 .                      τ = T · ( π2 R · √R2 + R2 /2)/πR · √R2 = (π + 2) R/g.
1) Sleeper is a simple cylindrical conductor:                                                     α(2 + α) + α + 1
                                ρh                                                                                                                      4. Water pump
                        R = δ 2 ≈ 5.59mΩ.                                   5) Since the power equls to M ω = P , the torqe can be found as
                              (2) π                                                                                                                     1) Let us consider the process in the system, rotating together with the
2) Length of the railway element is αR, hence the resistance is R2 =                             P       2B 2 ωr2 h2                                    tank. Then, there is a potential energy related to the centrifugal force:
αR. Main ideas: first - we can imagine that railway is infinite; second              M=            =                     ≈ 0.39 mNm.                            r
                                                                                                                                                        Uc = 0 ω 2 rdr = 12 ω 2 r2 . So, the pressure p2 = p0 − ρgh + 12 ω 2 r2 .
                                                                                                 ω   R( α(2 + α) + α + 1)
— the resistance (RR ) of this infinit array remain same even if we cut                                                                                 2) From the Bernoulli formula, 12 ρu2 = p2 − p0 = 12 ω 2 r2 − ρgh, hence
of one periodic element. Hence,                                             6) Disc has a momentum of inertia eual to I = 12 mr2 ; the angular          the squared velocity in the rotating reference system u2 = ω 2 r2 − 2gh.
                                                                                                                                                         laboratory speed v2 = u + ω r = 2(ω r − gh), i.e. v2 =
                                 R(2R2 + RR )                                                                                                                                            2       2 2            2 2
                                                                            acceleration ε = M   dω
                                                                                             I = dt . Consequently (using decelerating M),
                                                                                                                                                        The
                         RR =                   .
                                2R2 + RR + R                                                                                                               2(ω r − gh).
                                                                                                                                                               2   2
After solving the equation                                                                              kB 2 ω       dω
                                                                                                              =− .                                    3) The point of lowest pressure pm inside the pump is the upmost point
                                                                                                          IR         dt                                 of the tube. Using the Bernoulli formula, p0 = pm + ρgh + 12 ρv12 ,
         RR = −R2 ± R22 + 2R2 R = R22 + 2R2 R − R2
and noting that the negative solution of the equation has to be dropped     If we group the variables I and t into diﬀerent side of the equation, we    where the velocity in the tube can be found from the continuity condi-
(it does not have physical meaning), we arrive at                           obtain                                                                      tion: S1 v1 = S2 u = S2 ω 2 r2 − 2gh. Therefore, pm = p0 − ρgh −
                                                                                                        kB 2       dω                                  1
                                                                                                                                                          ρ(ω 2 r2 − 2gh)( S 2 2
                                                                                                                                                                              ) . Notice that the “boiling” starts when pm = pk .
                      RR = R(        α(α + 2) − α).                                                           dt =     .                                2                  S1
                                                                                                          IR         ω
3) Important ideas:                                                                                                                                     So, ωm r = 2gh + ( p0 −p
                                                                                                                                                              2 2                   k
                                                                                                                                                                                      − gh)( SS21 )2 ; finally we obtain
                                                                            Integrating the both sides of the equation yields                                                    ρ
                                                                                                                                                                                                           
                                                                                           t                  ω                                                                                                      2
    • electromotive force is generated when conductors move in mag-                              kB2
                                                                                                                  dω   kB        ω  2                                        −1                   p0 − pk         S1
                                                                                                    dt = −           ⇒    t = −ln ,                                 ωm = r        2gh +                   − gh              .
      netic field;                                                                               IR               ω    IR        ω0                                                                  ρ            S2
                                                                                            0                  ω0
                                                                                                                                                        4) The maximal productivity is apparently achieved for the highest ef-
    • There is always two sleepers moving between magnets (in mag-                        kB 2
                                                                            ω = ω0 e− IR t, and finally τ = kB
                                                                                                             IR
                                                                                                               2 ≈ 2.9s.                                ficiency. The eﬃciency is highest, when the residual velocity is lowest:
      netic field);
                                                                                                                                                        u → 0, and ω → √    ωmin . According to the results of the second ques-
    • Those sleepers act as a sources of electromotive force (like a bat-   3. Ballistic rocket                                                         tion, ωmin = r−1 2gh. So, the √      minimal residual velocity of the wa-
      tery);                                                                                                                                            ter streams is vmin = ωmin r = 2gh. The associated lost power is
                                                                                                                                                        1    2
                                                                            1) The net energy depends only on the longer semi-axes. Hence, the          2
                                                                                                                                                          µvmin   = µgh. The useful power is associated with the potential ener-
    • those sleepers also have internal resistance R.                       longer semi-axes is the same as in the case of near-Earth orbit: a = R.     gy increase (by gh),i.e. the total power P = 2µgh. Hence, µ = P/2gh.
5. Anemometer                                                                    Q = Sε0 U/X1 ; hence dX      d
                                                                                                                 1
                                                                                                                   C −1 = 1/Sε0 , and                           8. Balloon
                                                                                                                         q       x
1) First we need to find the angle after the refraction β : For small inci-                                    Lq̈ = − − U          .                           We can measure the lift of the ball by attaching a weight M = 100 g to it
dence angles we find approximately β = α/n. In the liquid, the wa-                                                      C        X1                             and taking the reading of the scales F/g = m+M −ρV = 73.4 g, whe-
                                                                                 Here, the sign of the second term assumes that the x-axes is directed
velength is decreased n times: λ = λ/n. The requested wavelength                upwards (there is no current in the inductance and Lq̈ = 0, if the vol-        re ρ = µp0 /RT ≈ 1.2 g/l. Hence, ρV −M = 27.6 g. So, we need to de-
can be found as the distance between the lines connecting the intersec-          tage on the capacitor keeps constant; for increasing charge q > 0, this        termine the volume of the ball. To that end, we tighten the rope around
tion points of the equal phase lines of the two beams. Alternatively (and        assumes increasing capacitance, i.e. x < 0; in a full agreement with the       the ball as tightly as the fasteners can hold (note that smaller tension
in a simpler way), it is found as the diﬀerence of the two wavevectors:          signs of the above expression).                                                values would results in a too small volume decrease, and hence, in a lar-
k = kβ , where k = 2π/λ = 2πn/λ is the wavevector of the incident                    The second equation describes the Newton second law. First we no-        ge uncertainty of the final answer). We weight the ball with rope (93.3
beams. So, ∆ = 2π/k = λ/α ≈ 7,4 µm.                                             te that the expression for Fe can be rewritten as Fe = Q2 /2Sε0 . So,          g) and subtract the mass of the rope (19.1 g) to find ρV  − M = 28.4 g,
2) The scattered light fluctuates due to the motion of the scattering            if the charge on the plate does not change (q = 0), neither does chan-         where V  is the ball volume, when the rope is tightened. Hence, the
particles; the frequency is ν = v/∆ = vα/λ. There is no way to de-               ge Fe . So, δFe = q dQ    d
                                                                                                             Q2 /2Sε0 = qQ/Sε0 . The infinitesimal force        volume decrease ∆V = V − V  = (28.4 − 27.6)/1.2 l≈ .67 l. La-
termine the direction of the flow, but the modulus is obtained easily:                                                                                          ter, we determine the maximal tension in rope (which can be hold by
                                                                                 changes (δFk and δFe ) can be simply added:
v = νλ/α ≈ 0.37 m/s.                                                                                         mẍ = −kx − qQ/Sε0 .                               fasteners) with dynamometer, T ≈ 30 N. We also estimate the average
3) The spatial structure of the interference pattern remains essentially               Now, let us look for a sinusoidal solution of circular frequency ω .     angle tan α ≈ 1.4. The radius of the loop is calculated from the measu-
unchanged (the wavelength diﬀerence is negligible). However, the pat-            Then, ẍ = −ω 2 x and q̈ = −ω 2 q . Substituting this into the two above       rement of the perimeter, R ≈ 15 cm. According to the given formula,
tern obtains temporal frequency δω = δ(c/λ) ≈ cδλ/λ2 . The velocity              obtained equations, we find                                                    these data correspond to ∆p ≈ 1900 Pa. Due to gas law, ∆p     p0
                                                                                                                                                                                                                                   ≈ ∆V
                                                                                                                                                                                                                                     V
                                                                                                                                                                                                                                        ,
of the interference pattern u = ∆δω = αc δλ      λ . If the fluid speed is                                  (Lω 2 − C −1 )q = xU/X1                             hence V ≈ p0 ∆V     ≈  33 l. Therefore, M  = ρV   − 27.6 g ≈ 12 g.
                                                                                                                                                                                ∆p
v ≈ 0.37 m/s, then the relative speed of the pattern and the fluid is                                       (ω 2 m − k)x = qQ/Sε0
                                                                                                                                          .
ν  = αc δλ  ± v , depending on the direction of the flow (in both cases,                                                                                       9. Mechanical black box
          λ                                                                      This has a non-zero solution for x and q only if
ν  ≈ 740 kHz). So, the output frequency allows us to determine the                               (Lω 2 − C −1 )(ω 2 m − k) = U Q/X1 Sε0 .                      First we determine the coeﬃcient of friction as follows. We make sure
flow direction as long as we can be sure that the interference pattern           Bearing in mind that U Q/X1 = 2k(X0 − X1 ) and C = ε0 S/X1 , we                that the object is at the bottom of the box. We put the box on the plank
velocity is larger than the flow velocity.                                       can rewrite the equation as                                                    so that the axes of the cylinder is parallel to the axes of the plank. We
                                                                                                (ε0 SLω 2 − X1 )(ω 2 m − k) = 2k(X0 − X1 ).                     start inclining the plank so that the bottom of the cylindrical box gets
6. Mechano-electrical oscillator                                                                                                                                higher. We determine the angle of the plank α, when the object starts
                                                                                 Introducing ω02 = k/m and ω12 = X1 /ε0SL we canfurther rewrite as
1) From the Newton’s second law, mẍ = −kx, hence ẍ = − m        k
                                                                     x, hence                                                          X0                       sliding: it hits the cover of the box. It is convenient to put the cover
                                                                                               ω 4 − ω 2 (ω12 + ω02 ) + ω02 ω12 3 − 2      = 0.
ω = k/m.                                                                                                                               X1                       (and the rim of the cover) of the box hanging slightly over an end of the
2) From the Gauss’ law, the charge on the plate Q = Sε0 E =                      Therefore,                                                                    plank. In that case, object hiting the cover of the box results in box fal-
Sε0 U/X1 . The force acting on it Fe = k(X0 − X1 ) = Q E, whe-                           2ω 2 = ω12 + ω02 ± ω14 + ω04 + 2ω12 ω02 (X0 X1−1 − 5),               ling down from the plank. We measure the tangent of the plank at that
re E is the average electric field (averaged over the charges). Let us         i.e. this system has two eigenfrequencies, if X        3
                                                                                                                                  X1 < 2 (and becomes uns-
                                                                                                                                    0
                                                                                                                                                                moment: µ = tan α = 0.17 ± 0.2.
look at the charge layer (at the surface of the plate) with a high mag-          table, otherwise).                                                                  Now we turn the axes of the cylinder perpendicular to the axes of
nification: the electric field there depends linearly on the net charge                                                                                         the plank, but keep lying on its side. We start again inclining the plank
                                                                                 7. Heat exchange
inwards (in the plate) from the current point. Therefore, the average                                                                                           and determine the angle β , at which the box starts rolling down. As-
field is just the arithmetic average of the fields on both sides of the layer:   1) It is easy to see that the temperature profile along the plate is linear,   suming that the object is small (as compared to the radius of the box),
E = E/2. Finally, Fe = k(X0 − X1 ) = QE/2 (this result could
                                                                                 and the temperature diﬀerence ∆T between the two plates is constant,           the following relationship can be derived: M sin β = m(sin α − sin β),
                                                                                 ∆T ≡ T0 − T2 . Indeed, then the heat exchange rate q (per unit plate           where m is the mass of the object and M — the mass of the empty box.
have been obtained from energetic considerations, using infinitesimal
                                                                                 area) is also constant, which in its turn corresponds to a linear tempe-       Using sin α = 60±5                   25±3
virtual displacement of the plate andthe energy conservation law). So,                                                                                                            350 and sin β = 350 we obtain M/m = 35/25 =
                                                                                 rature profile. Let us use a reference frame moving together with the          1.4 ± 0.2. From the measurement of the net weight M + m = 10.4 g
Fe = S2 ε0 (U/X1 )2 , hence U = X1 2k(X0 − X1 )/Sε0 .                            incoming air. Then, the temperature increase rate at a given point is
3) If the plates move by x, the change of the force due to electric field                                                                                       we find m = 10.4 g/2.4 = (4.3 ± 0.4) g. Note that the actual mass was
                                                                                 Ṫ = v(T2 − T1 )/x. Then, the heat balance for a air element of volume         4.5 g.
is δFe = x| dX    d S
                   1 2
                       ε0 (U/X1 )2 | = Xx1 Sε0 (U/X1 )2 ; bearing in mind        V = s × h is written as ρshcp Ṫ = q = sσ∆T /d = sσ(T0 − T2 )/d.                    The mass ratio can be, in principle, determined from the period of
that S2 ε0 (U/X1 )2 = k(X0 − X1 ), we obtain δFe = 2 Xx1 k(X0 − X1 ).            So, ρshcp v(T2 − T1 )/x = sσ(T0 − T2 )/d, hence                                small oscillations, T ≈ 0.4 s. Then, if we estimate the moment of iner-
There is also force cahnge due to elasticity: δFk = −kx; the two forces                                          xσT0 + ρhcp vdT1                               tia of the system box+object as (M + m)r2 , where r is the radius of the
                                                                                                          T2 =                      .
have opposite sign (while approaching the discs, δFk tries to push back,                                           xσ + ρhcp vd                                 cylinder, then I ϕ̈ = −mrgϕ, i.e. ω 2 = m+M    m g
                                                                                                                                                                                                                    r . Using r = 16 mm
and δFe tries to pull disks even closer). So, δF = −kx[1 − 2( X         X1 −
                                                                          0
                                                                                 2) Rewriting the heat balance equation P                 =     −C dT     as                 M+m        g 2     2
                                                                                                     −1
                                                                                                                                                     dt         we obtain m = r T /4π = 3.9. This result, however, is rather
1)] = −kx(3 − 2 X1 ). Finally, ẍ = δF/m = −x m (3 − 2 X1 ), and
                       X0                                k          X0
                                                                                 dt      =     −CP dT we conclude that time can be found                        approximate, because it is diﬃcult to measure such a short oscillation
                                                                                 via the area S under the graph, where P −1 is plotted                          period (at the high dissipation rate). Furthermore, the period is taken
        m (3 − 2 X1 )
        k        X0
ω=                                                                               versus the temperature as t             =    SC .      The graph data:         to the second power, this explains the unrealistic result (so,it does not
4) Now we have two oscillating variables, x and q . First, we write down           T (K)        100 200 300 400 500 600 700 800                                 make sense to try to improve the approach by taking account the geo-
the equation due to Kirchoﬀ ’s laws: Lq̈ = − Cq − xQ dX     d
                                                              1
                                                                C −1 . He-         P (W)        13      30     55    83    122 177 258 395                      metric factors for the calculation of the moent of inertia of the box etc).
re, the second term describes the voltage change on the capacitor due              100P −1 7.7          3.3    1.8   1.2   .82     .57    .39    .25
to the change of the capacitance (we approximate the real change by              Substituting the region with smooth boundaries with a superposition
diﬀerential, valid for small shifts x). Note that C −1 = X1 /Sε0 and             of trapezoids we find S ≈ 12 K/W. Consequently, t = 120 s.
