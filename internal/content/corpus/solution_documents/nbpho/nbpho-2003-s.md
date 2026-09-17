---
id: solution-document-nbpho-2003-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2003_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [nbpho-2003-charged-particle, nbpho-2003-gravitation, nbpho-2003-heat-flux, nbpho-2003-telescope, nbpho-2003-tunnel-diode, nbpho-2003-vibration, nbpho-2003-volleyball]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2003_S.pdf."
---

Solutions                                          h(2R−h) < 4R2 . This condition is always satis-      4.        Tunnel diode (8 pts)                     2) F = 0, when |v| < u; F = µmg, when
                                                      fied, no additional constraint is needed. Notice     1) For voltages below 0.08V, the graph is almost a |v| > u.
1. Volleyball (8 pts)                                 that we considered only the worst case requiring     straight line corresponding to a constant resis- 3) The x-component of the frictional force
1) F = ∆pS, where S = πr2 is the segment ba-          the largest compensating force when the force of     tance RD = 0.05 V/6.5 mA ≈ 7.7 Ω. Hence cancels in average         out, the y-component is left:
                                                                                                                                                                        √
se surface. It is easy to see that r2 = (2R − h)h,    inertia is normal to the surface. Remark: The ca-    I = (Uin + E)/(R + RD ) ≈ 4.5 mA.                  F = µmgv/ v + u2 .
                                                                                                                                                                           2

hence F = ∆pπh(2R − h) ≈ 120 N.                       se of stretchable envelope is completely diﬀerent,   2) The output voltage can be found graphically: 4) F = [µ(v + u) + µ(v − u)]mg, if v > u and
2) During the collision the ball is deformed as       sphericity disappears over all the surface (try to   the diode voltage U (I) = E − IR, hence, the F = [µ(u + v) − µ(u − v)]mg, if v < u (F > 0
shown in Figure: the envelope is not stretchable,     press a balloon against a glass!).                   intersection point of the graph and the straight means that F and v are opposite to each other).
hence it retains the spherical shape (except whe-                                                          line U = E − IR, gives us the diode current It is easy to see that by small values of v, the force
re in touch with the wall). Using the approxima-      2.   Heat flux (4 pts)                               6 mA; then, the output voltage IR = 60 mV starts linearly decreasing [with F (v = 0) = 0]
tion h  R we can neglect the term h2 in the                                                               (see the graph).                                   (F < 0 implies that force and velocity are in
                                                      1) The heat flux P = ∆T s/ρd, hence ∆T =
expression for the force. Then, the force is pro-                                                                                                                 the same direction). At u = v, the graph exerts
                                                      P ρd/s ≈ 12 K.
portional to h, ie. the ball behaves as a spring of                                                                   I(mA)                                       a jump, F becomes positive, and starts dec-
                                                      2) By a constant heat flux P , the temperature
stiﬀness k = 2πR∆p. According to the ener-                                                                                                                        reasing. The attached graph presents a sketch
                                                      change along the wire ∆T = P ρ∆x/S, whe-
gy conservation
                   law mv 2 = 2πR∆ph2 , hence                                                                                                                    of the eﬀective friction coeﬃcient; the const-
                                                      re ∆x is a displacement along the wire. Hence
h = v m/2πR∆p ≈ 11 mm.                                                                                          10                                                ruction has been based on the lengths µk1 =
                                                      the temperature drop t1 − t2 = P S/S, where
                                                                                                                                                                  µ(w0 /2) − µ(w0 ), µk2 = µ(w0 /4) − µ(5w0 /4),
                                                      S is the surface under the graph. Thus, P =
                                                                                                                                                                  and µk3 = µ(0) − µ(3w0 /2).
                                                      (t1 − t2 )S/S. Using the graph we find S ≈
                                                                                                                 5
                                                      50 Kcm2 /W and P ≈ 20 mW.

                                                                                                                                                       U(V)             µ
                                                      3.   Gravitation (6 pts)
                                                                                                                 0            0,1    0,2      0,3       0,4        µ1
                                                      1) g0 = γM/R2 , where R can be found from the                                                                                                        µk3
                                                                                                                                                                                                   µk2
                                                      relationship 43 πR3 ρ = M . Hence,                   3) One millivolt input shifts the line intersec-        µ0
                                                                                                           ting the graph a little-bit sideward, but the shift                               µk1
                                                                                 4πρ 2/3
                                                                      g0 = γM (       ) .                  is so small that the graph can be approximated
                                                                                 3M
                                                                                                           by a straight line. The cotangent of the slope of
                                                      2) Taking a piece of ground from a certain point                                                                                                             w
                                                                                                           that line gives us the diﬀerential resistance of the
                                                      of the planet surface and carrying it into another                                                                       µef                     _
                                                                                                           diode, Rd = −16 Ω. Then, a small change in                                                  
                                                      point, the free fall acceleration can be changed                                                                               ekt    w0         w0
                                                                                                           the input voltage ∆U will lead to a current chan-
                                                      (the sign of the change depends on the direction
                                                                                                           ge ∆I given by the relationship (R + Rd )∆I =
                                                      of the transport).
                                                                                                           ∆U ; hence, ∆I = ∆U/(Rd + R). The output
3) This is the half of the harmonic                                                                                                                              5) The rest position is unstable, if u < w0 : the
                                 oscillations        3) Let use the polar coordinates with the origin voltage change ∆Uout = IR = R∆U/(Rd +
period, τ = π m/2πR∆p = πm/2R∆p ≈                     at the point where the free fall acceleration is to R), and the amplification factor ∆Uout /∆U =            particle obtains the (stable) velocity u. If u > w0 ,
18 ms.                                                be maximized. Let the axis φ = 0 be given by the R/(Rd + R) ≈ 1.7. Consequently, the output                 the rest position is stable, and the particle ve-
4) Let us use the ball’s system of reference. The     direction of the acceleration. Carrying a small voltage is 1.7 mV, and . . .                                locity remains 0.
envelope surface element dS is exerted by the         piece of ground from a point (r1 , φ1 ) to anot- 4) the output graph is exactly the same as the in-
force of inertia dFi = amdS/4πR2 , where a =          her point (r2 , φ2 ) must keep the modulus of the put graph, except that it is vertically stretched by      6.    Charged particle (12 pts)
∆pπh(2R − h)/m. Thus, dFi = ∆ph(2R −                  acceleration vector g constant, i.e. the vector of a factor of -1.7.
h)dS/4R2 . In order to keep the spherical sha-        the small change must be perpendicular to the                                                               1) The particle acquires the velocity v = Eqτ /m
pe, this force has to be compensated by the force     vector g. Consequently, cos φ1 /l12 = cos φ2 /l22 , 5. Vibration (10 pts)                                  and starts moving along a circle of radius R, with
                                                                    √
due to the excess pressure dFr = ∆pdS, hence          hence l = l0 cos φ.                                  1) µmgτ  v.                                           mv 2 /R = Bvq, hence R = Eτ /B.
                   px                             endpoint of the particles momentum lies on that        tance. The image of this piece of paper has            le, the accuracy of the results can be enhanced by
                   4                              circle. Thus, averaged over the moments of time        size s = SF 2 /L2 ; thus, w3 = P3 /s =                 subtracting this weight from N : F = Fd /µ−Fp .
     py 3                                         2n∆t, the average velocity is vx = −Eqτ /2m.           w1 α( π4 D2 /F 2 ) = w0 απ(φD/4F )2 .                  3) We use a similar set-up, except that smaller
                        1                             For odd number of impulses, one has to add         4) The angular distance of the first diﬀraction        number of paper stripes is used (totaling up to
                                                  the lastly given momentum P = (Eqτ, 0);               minimum (using the single slit approximation           around 2 mm), and a steep slope of the plate.
               2                                  hence, a similar circle is formed, except that the     — circle is actually not a slit) is λ/D. Hence,        We let the brick slide down the slope and hit
2)                                                center is shifted by P : the center coordinates are   the bright circle radius can be estimated as           on the magnet. We keep the falling height and
          px
                                                  mvx = Eqτ /2, mvy = 0. Correspondingly,                δ = F λ/D. Consequently, w2 = P2 /πδ 2 =               plate slope constant, and measure the sliding
                                                  averaged over the moments of time 2n∆t, the            w0 (φD2 /4qF λ)2 .                                     path, which is covered by the papers and the
     py                                           average velocity is vx = +Eqτ /2m. Averaged            5) k = (w2 +w3 )/w3 = 1+(απ)−1 (D/λq)2 ≈               magnet after having been hit by the brick. This
                                                  over all the moments of time, the final result is      4 (assuming λ ≈ 500 nm).                               path is inversely proportional to the attraction
                                                  vx = vy = 0.                                           6) k − 1 ∼ 1 (or k − 1 > 1) means that the star        force N . If this path turns out to be too short
                                                                                                         can be easily seen (as is the case for the telesco-    for an accurate measurement (for very small
3)
                                                                                                         pe); k − 1  1 means that the star cannot be           distances between the magnet and the plate),
4) Let us consider the vectorial sum of the mo-                                                          seen (for the eye, k − 1 ≈ 1 · 10−4 ).                 several brick hits can be used. In that case,
menta given to the particle in diﬀerent mo-                   P r’es                                                                                            the single-hit path can be found as the measu-
ments of time. During the time interval ∆t, all                                       P1                 8.   Experiment (12 pts)                               red path, divided by the number of hits. The
the component-vectors are rotated by the angle                P2
                                                                                                         1) We incline the plate until sheet starts sli-        constant of proportionality can be found by
2π∆t/TB = τ Bq/m. Thus, with each impulse,                                      res                                                                             comparing the results of this and previous ques-
                                                                         P2n                                 √ the static coeﬃcient is found as µstatic =
                                                                                                         ding:
                                                                               P
a vector P with modulus P = Eqτ is added; the                                                           h/ l2 − h2 , where h is height of the plate end-       tion, for those distances, which are covered by
angle between the lastly added vector, and the                                                           point, and l — the plate length. Now we push           both measuring techniques. Reasonable measu-
previously added vector is α = ∆tBq/m.                                                                   the sheet laying on the plate slightly, and find       rement results are given in the attached graph.
5) All these vectors, when added according The figure represents the net moment Pres after               the inclination angle, for which the sheet will sli-          F /N/
                                                                                                                                                               30
to the triangle rule, form a circle of radius 2n-th impulse, and also the net impulse Pres  for          de down with a constant velocity;    we use again
                                                                                                                                     √
R = P/ sin α → P/α = Ek m/B. another time moment 2n ∆t. For an odd num-                                 the formula µkinetic = h/ l2 − h2 . The reaso-         25
    px
                                              ber of impulses, the pattern is exactly the same,          nable numerical values are µstatic ≈ 0.37 and          20
                                              except that all the vectors have opposite direc-           µkinetic ≈ 0.29.
 py                                                                                                                                                             15
                                              tion (because the lastly added component, the              2) We put several paper stripes on the plate, and
                                                                                                                                                                10
                                              vertical vector, has opposite direction).                  the magnet on the top of them. We make a
                                                                                                         loop of cord, put it around the magnet, and pull        5                                      d /mm/
                                                  7.   Telescope (12 pts)                                it using the dynamometer sideward (sliding the          0
    Hence, the average velocity vy = −R/m = 1) The light flux density decreases inversely pro-           whole system of paper and magnet). The attrac-              0    1      2       3      4      5       6
Ek /B, vx = 0.                                      portionally to the square of the distance, the-      tion force F ≈ N (where N is the reaction force)
6) Two subsequent momenta along x-axes result refore w1 = w0 Rp2 /L2p , where Rp is the solar            is found as the ratio of the reading of the dyna-      4) The same technique as in the case of previous
in net moment along y-axes Py = P α. The radius, and Lp — the solar distance. Due to                     mometer Fd and the appropriate friction coef-          question is applied, except that a larger number
sequence of such moment pairs form a (near- φ = 2Rp /Lp , we obtain w1 = w0 φ2 /4.                       ficient (depends, which reading is taken: either       of hits has to be used (≈ 10 − −20). Reaso-
ly) circle (actually, regular equilateral polygon), 2) The previous result can be applied to the         the maximal one, or the one corresponding to sli-      nable result for d = 0.2 mm (one paper stripe)
composed of vectors (with modulus Py ), the star flux density, which is q −2 w1 ; hence P2 =             ding), F ≈ Fd /µ. The distance d is measured           is F ≈ 270 N. Note that the result is much lar-
angle between of which is 2α (see Fig.). The ra- 14 πD2 w1 q −2 = w0 π(φD/4q)2 .                         in the number of paper stripes (one stripe had         ger than the double result in the case of a single
dius of the circle is Py /2α = P/2 = 12 Eqτ , 3) The paper surface area S radiates towards               a thickness of ≈ 0.2 mm). For large distances          magnet; this is due to closing the ferromagnetic
and its center coordinates are mvx = −Eqτ /2, the lens of the telescope the power P3 =                   (approximately d > 4 mm), the weight of the pa-        loop of magnetic field lines.
mvy = 0. After an even number of impulses, the w1 αS( π4 D2 /L2 ), where L is the telescope dis-         per Fp stripes and magnet is no longer negligib-
