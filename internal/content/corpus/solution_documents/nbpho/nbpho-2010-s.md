---
id: solution-document-nbpho-2010-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2010_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [nbpho-2010-ball-on-wall, nbpho-2010-black-box, nbpho-2010-charges-in-b-field, nbpho-2010-charges-in-e-field, nbpho-2010-elastic-thread, nbpho-2010-ice-rally, nbpho-2010-power-supply, nbpho-2010-sprinkler, nbpho-2010-thermos-bottle]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2010_S.pdf."
---

Estonian-Finnish Olympiad - 2010                                      the outer wall as an outwards ﬂux. Upon substituting Qo from
                                                                      the second equation into the ﬁrst one, we obtain
Problem 1. Charges in E (8 points) i. (2.5 pts) The
initial and ﬁnal momentum of the dumbbell diﬀer by 4mv. The                  Q = Qi [1 − (1 − κε)(1 − ε)] = Qi ε(1 + κ − κε),
only external force acting on the dumbbell is the electrostatic
force Eq, applied to the blue particle. So, the duration of that      hence Qi = Q/ε(1 + κ − ε). From that inwards ﬂux, the part
force must satisfy condition Eqτ = 4mv, hence τ = 4mv/Eq.             which hits the inner wall is κ; in order to get the dissipated
ii. (3 pts) Once the blue particle enters the electric ﬁeld, the      part, we need further to multiply the result by ε. So, the dis-
dumbbell’s center of mass C obtains acceleration a = Eq/2m.           sipated ﬂux is
Let us consider the motion in the system, where C is at rest.
Red and blue particles move symmetrically in that system; let                          Qdi = εσS2 T24 κ/(1 + κ − κε).
us consider the red particle. Due to the inertial force Fi =
ma = Eq/2, the equilibrium position of the red particle is shif-         In order to obtain the ﬂux Qdo , which is radiated from the
ted (the half-spring is to be deformed by x = Fi /2k = Eq/4k          inner wall and is dissipated in the outer wall, we proceed in the
to achieve the equilibrium); the particle starts from rest, apart     same way. Now, let Q = εσS1 T14 ; then,
from the equilibrium. So, it starts
                                  √      oscillations, the circular
                                                                                           Qo = Q + Qi (1 − κε),
frequency being given by ω = 2k/m (the factor 2 accounts
for the fact that oscillations take place around the center of        and
the spring and half-spring has twice larger stiﬀness). For the                                Qi = Qo (1 − ε),
dumbbell to return with the same velocity as it approached,
the residual oscillations must be absent (otherwise, some part        so that Qo = Q/[ε(1 + κ − κε)] and
of the initial kinetic energy would be turned into the oscillations
                                                                                       Qdo = εσS1 T14 /(1 + κ − κε).
energy, so that the center of mass velocity would be decreased).
So, the oscillations phase needs to be ωτ = 2nπ, where n is an    Now, let us consider (an imaginary) situation, when T1 = T2 .
integer. Since the spring’s length achieves minimum only once,    This is thermal equilibrium, when the heat ﬂux Qdo given by
n = 1. So, ωτ = 2π, and the equality can be written as            the inner wall to the outer one must be equal to the ﬂux Qdi ,
                           √                                      which is given by the outer wall to the inner one. Using our
                             2k 4mv
                                     = π.                         expressions we see that κS2 = S1 , i.e. κ = S1 /S2 . Now we can
                             m Eq
                                                                  ﬁnally write down the expression for the net ﬂux given to the
iii. (2.5 pts) There is a requirement that the red particle never nitrogen,
enters the region x > 0. The most critical moment is t = τ /2
                                                                                            εσ4πR12 (T24 − T14 )
(t = 0 corresponds to the blue particle enetring the electric             P = Qdi − Qdo =                        ≈ 1.78 W.
                                                                                            1 + (1 − ε)R12 /R22
ﬁeld), when the spring is maximally compressed. The center of
mass has displaced by s = at2 /2 = (Eq/2m) · τ 2 /8 = mv 2 /Eq, ii. (2.5 pts) The net heat received by the inner wall is spent
and the spring half-length has decreased by 2x (x is the diﬀer- on evaporating the nitrogen, i.e. τ P = λm, where m = 4 πρR3 .
                                                                                                                           3
ence between lengths of the initial and equlibrium states; we So,
need the diﬀerece between the lengths of the initial, i.e max-                            4
                                                                                     τ = πρR3 λµ/P ≈ 36 h.
imally stretched state, and maximally compressed state). So,                              3
                L                                                     Problem 3. Tyrannosaur (T. Rex) (6 points)
                  > s + 2x = mv 2 /Eq + Eq/2k.
                2                                                     i. (3 pts) Knowing that mass m is proportional to volume, the
                                                                      relationship between mass and length scale is L = l(M/m)1/3 .
Problem 2. Thermos bottle (6 points)                                  The force F on animal bones is proportional to its mass and
i. (3.5 pts) Remark: this problem techically rather challenging.      to the cross-sectional area of the bone; hence, the area is pro-
Therefore, reasonable estimates like P ≈ σεS1 (T24 − T14 ) ≈          potional to the mass. So, M  m = N , from which L = lN
                                                                                                                                1/3
                                                                                                                                    ≈
2.6 W or P ≈ 12 σεS1 (T24 − T14 ) ≈ 1.3 W will be graded by 2–2.5     3.23 m. The step length is half of the distance between two
pts.                                                                  traces of the same leg, i.e. 2 m. This corrsponds to the angle
    The heat ﬂux radiated from one wall is partially reﬂected         between the legs α = 2 arcsin 3.21
                                                                                                         ≈ 36◦ , which seems reason-
back by other wall, which is also partially reﬂected back, etc.       able.
Besides, the ﬂux from the outer wall can hit itself, if it misses     ii. (3 pts) Let us model the leg with a physical pendulum.
the inner wall. So, near the surface of the outer wall, we can        The leg can be approximated as a uniform rod attached from
split the heat ﬂux into inwards ﬂux Qi and outwards ﬂux Qo .          its upper end (the hip joint). Then its moment of inertia is
Then, upon designating the ﬂux radiated by the outer wall by          I = 13 ML2 , where M is the leg mass.
Q = εσS2 T24 , we have equalities                                         For small-angle swings of the pendulum, the only force act-
                                                                      ing on the leg is from the mass of the leg. Thus, the torque
                      Qi = Q + Qo (1 − ε),                            equation will be
i.e. the inward ﬂux consists of (a) inital radiation, and of (b)                          1                L
                                                                                            ML2 · φ̈ = −Mgφ ;
the back-reﬂected part of the outwards ﬂux. Similarly we have                             3                2

          Qo = Qi κ(1 − ε) + Qi (1 − κ) = Qi (1 − κε),           here, φ is the angle of the leg, so that the gravity force’s lever
                                                                 arm is equal to φ L2 . Hence, the circular frequency of the leg
                                                                         √
i.e. the outward ﬂux consists of (a) the part κ of itself, which is ω =      3g
                                                                            2L . The displacement A corresponds to the whole
hits the inner wall and is reﬂected back, and of (b) the part                                                              √
1 − κ of itself, which misses the inner wall hence reaches again period, i.e. the walking speed v = A/T = Aω/2π = 2π 2L ≈
                                                                                                                         A    3g
1.2 m/s ≈ 5 km/h. So, the walking speed is comparable to that i. (1.5 pts) In the magnetic ﬁeld, the particle moves along a
of a human.                                                             circle of radius R, such that the Lorentz force qvB = mv 2 /R,
                                                                        hence R = mv/qB. Outside the magnetic ﬁeld, the trajectory
Problem 4. Ball (6 points)
                                                                        is a straight line, see Fig. For the period of circular motion,
                                                                        y = R − R cos(ωt), for the rest of the time, y = 0 or y = 2R.
                                                                        ii. (3.5 pts) The second particle follows the ﬁrst one by being
                                                                        delayed along the trajectory by the same distance as it was
                                                                        originally. Once the ﬁrst particle enters the magnetic ﬁeld,
                                                                        the geometrical distance starts decreasing and achieves a min-
                                                                        imum, when the distance changing rate swaps sign, i.e. reaches
                                                                        zero (at least for a single moment). In that state, they move as
                                                                        if being a part of a rigid body, i.e. the distance to the instant-
                                                                        aneous rotation center (which would be the intersection point
                                                                        of the perpendiculars to the velocity vectors) must be equal for
                                                                        both particles (because the velocities are equal). It is easy to
The friction force Ff cannot exceed µN , where N is the nor- see that this equality of distances is achieved precisely when
mal force. Hence, the resultant vector T⃗ of those two forces the second particle also enters the ﬁeld and remains satisﬁed
must point to some point Q on the segment AB, the length of as long as both particles stay there. When the ﬁrst particle
which is 2µR, and R stands for the radius of the ball (so that exits the ﬁeld, the distance starts increasing symmetrically to
AC = µR, where C is the ball’s center).                                 how it decreased before. The resulting graph is sketched in
    The ball has three forces applied: the force applied by the Fig; note that the curve is smooth; indeed, non-smooth joints
wall (T⃗ ), the gravity force m⃗g , and the external force F⃗ . All the of segments would imply inﬁnite second time-derivative of the
lines deﬁned by these vectors must intersect in a single point. distance, i.e. inﬁnite acceleration and force.
Indeed, suppose that the line deﬁned by the force F⃗ intersects
the vertical axis of the ball in a point, diﬀerent from Q. Then
it would have a non-zero torque with respect to the point Q —
unlike the other two forces, causing imbalance of torques.
    Now let us consider the torque balance with respect to O.
The torque of the gravity force mgR is balanced by the torque               Once both particles are in the ﬁeld, they are on a end-
of F ; so, in order to have as small as possible force F , its lever    points  of circle segment of arclength L0 . So, the distance
arm must be as long as possible. Hence, Q must be as far                L min =  2R sin α2 , where the angle in radians α = L0 /R. So,
away as possible from O, i.e. coincide with A, and P A must                                            2mv     L0 qB
be perpendicular to OA (this                                                                  Lmin =       sin       .
                            √ answers the question ii). Finally,                                        qB      2mv
Fmin = mgR/OA = mg/ 1 + µ2 ≈ 800 N.
Problem 5. Elastic thread (10 points) i. (5 pts)                      Problem 7. Satellite (5 points)
Using the tape, we ﬁx one end of the thread to one end of the         i. (3 pts) Before the collisions, the balls achieve the velocity
                                                                            √
wooden rod (let it be point A), and press another end (or a           u = 2gh. The ﬁrst collison is between the large ball and
point in the middle of the thread) to some point on the rod by        ground; the velocity of the large ball reverses direction. Let
ﬁnger (or also by using the tape; let it be the point B). Then        us consider the second collision in the system of the center of
we hang the load to the middle of that part of the thread,            mass, which is approximately the same as the large ball’s sys-
which is between the points A and B; this will be reﬀerred to         tem of reference. In that system, the small ball approaches
as the point C. Further we measure the ﬁnal length of the             with velocity u + u = 2u, and after the collisions, departs with
thread l, together with the non-stretched length l0 , and calcu-      the same velocity. In the laboratory system, the velocity is
                                             AC                                        √
late the tension T in the thread: T = 12 mg CD   , where D is the     2u + u = 3u = 3 2gh.
middle of the segment AB. By changing the length AB and               ii. (2 pts) We use the same method as previously. Let des-
the used thread length (the thread can be already stretched           ignate the velocity of the i-th ball before the i + 1-st collision
before hanging the load), we can cover the range from l ≈ 1.1l0       by vi . Then, in the system of the i-th ball, the i + 1-st ball
to l ≈ 4.5l0 .                                                        approaches and departs (after the collision) with the velocity
ii. (5 pts) Note that εS = l−ll0 S = l0 − S, i.e. V = (ε + 1)S =
                                0     V
                                                                      vi + u; in the laboratory system, the departing vleocity is
 T             T     −1
Eε (ε + 1) = E (1 + ε   ). Since we are interested in the relative
                                                                                       vi+1 = (vi + u) + vi = 2vi + u.
change of V , it suﬃces to plot T (1+ε−1 ) (which is V /E) versus
ε.                                                                    Bearing in mind that v1 = u, we ﬁnd that v2 = 3u, v3 = 7u,
                                                                                                                     √
Problem 6. Charges in B (5 points)                                    v4 = 15u etc, vN = (2N − 1)u. So, vN = (2N − 1) 2gh, hence
                                                                                                (        )
                                                                                                      vN
                                                                                      N = ⌈log2 1 +        ⌉ = 11.
                                                                                                     2gh
                                                                      Here, ⌈. . .⌉ denotes the ceiling function, i.e. rounding up.
                                                                         Each next ball is 10 times less massive than the previ-
                                                                      ous one, so that the lowest ball must have a mass equal to
                                                                      MN · 10N −1 = 1 × 1010 kg.
                                                                      Problem 8. Sprinkler (3 points) It is known that for a
                                                                      body thrown at some angle α to the horizon with a vleocity v,
                                                                      the maximal ﬂight length is achieved with α = 45◦ (this result
can be also easily
              √ derived). That maximal ﬂight length is found         cause the situation is exactly the same as it was, except that
as smax = vt/ 2, where√      the ﬂight time t is obtained from the   the output voltage will establish itself according to the value of
condition gt = 2v/ 2. So, smax = v 2 /g. This distance gives         average current J. Note that average current to the capacitor
the radius of the circular region, watered by the sprinkler; its     is 0 (because its upper plate is isolated from the lower one),
area is S = πs2max = πv 4 /g 2 .                                     therefore, all the current J goes to the resistor. (The capacitor
i. (1.5 pts) Let us plot the ﬂight distance s as a function of the   works as a buﬀer, redistributing the strongly ﬂuctuating cur-
angle α at the outlet of the sprinkler. This is a smooth curve       rent of the previous graph over time, so that the current to the
with one maximum. For a range of distances from s to s + ∆s,         resistor is almost constant.) So, the output voltage Uo = JR,
the amount of received water is (roughly speaking) proportional      where the expression for J can be found from the answer of the
to the corresponding width of the angle range ∆α. So, the wa-        question ii. It is convenient to designate Uo /Ui = κ. Then we
tering intensity is (roughly)propotional to Q ∝ ∆α             ∆s
                                                      ∆s = 1/ ∆α .   have                                       √
At the limit of small ∆α and ∆s, this transforms into a de-                                   τc R                     τc R
                                                                                  κ(κ − 1) =       ⇒ 2κ = 1 ± 1 +           .
rivative: Q ∝ 1/ dαds
                      , i.e. Q tends to inﬁnity at the maximum                                4L                        L
of s(α). In other words, the best position is at the distance        We need κ ≥ 2, so the “–” sign can be excluded, and we arrive
s = smax .                                                           at
Problem 9. Power supply (6 points)                                                                (    √           )
                                                                                              Ui              τc R
                                                                                        Uo =        1+ 1+            ,
                                                                                               2               L
                                                                     which is valid as long as τc R ≥ 8L. If this inequality is not sat-
                                                                     isﬁed, the assumption Uo ≥ 2Ui will not be satisﬁed, so that
                                                                     the expression for J will fail.
                                                                         If Uo < 2Ui , the ascending branch of the Ii (t)-graph is
                                                                     steeper than the descending one. So, the sawtooth proﬁle of
                                                                     that graph starts “climbing up”. The higher it goes, the larger
                                                                     will be J and hence the larger will be Uo . In its turn, larger Uo
i. (2 pts) When the key is closed, there is no current through       results in a steeper the descending branch of the Ii (t) graph;
the diode, because it has reverse voltage applied. Mean-             the process continues until reaching a state when the ascending
while, the voltage applied to the inductance is Ui = LI,       ˙     and descending branches are equally steep; this corresponds to
hence I = I0 + Ui t/L. Since there was initially no current,         U0 = 2Ui . So,
I0 = 0, and I = Ui t/L. So, the maximal current achieved is                              U0 = 2Ui , if τc R < 8L.
Imax = Ui τc /L. The current through an inductance cannot
change instananuously; so, when the key is opened, all the cur-
                                                                     Problem 10. Ice-rally (7 points)
                                                                     i. (2 pts) Since at the very beginning, the eﬀect of the air
rent is redirected to the diode. The diode receives a forward
                                                                     friction is negligible, the acceleration (i.e. the tangent of the
current, hence it has no voltage drop. Thus, the inductance
                                                                     graph) gives us the ratio of the friction force Ff and the mass
obtains the voltage LI˙ = Ui − Uo , (which is smaller than −Ui ).
                                                                     m, i.e. µg. From the graph, this tangent is µg = 1.0 m/s2 ,
Hence, I = I0 − (U0 − Ui )t/L, where I0 is such as to match
                                                                     hence µ = 0.1.
the current Imax at the moment when the key is opened. Once
the current reaches zero, the diode is closed and no further
current ﬂows in the system. These ﬁndings allow us to sketch
the Figure above.

ii. (2 pts) For the ﬁrst cycle, we can use the result of the ques-
tion i. We notice that at the beginning of the second cycle, the     ii. (2.5 pts) When the driving force stops, the acceleration
system is exactly at the same state as at the beginning of the       is reduced by Ff /m = µg, i.e. from the slope at the current
ﬁrst cycle. So, the process starts to behave periodically, see       point of the graph we need to subtract the slope of it at the
Fig.                                                                 origin. A close-up sketch of the graph around the period of
                                                                     gear change is given in Fig. After the gear change, the new
                                                                     graph follows the ideal graph, but is shifted rightwards by τ2 ,
                                                                     this shift is marked also in Fig. Since 2τ1 = τ2 , the ascend-
                                                                     ing and descending slopes in that close-up sketch must be of
                                                                     equal steepness, i.e. a = µg/2. So, the gear change takes place
                                                                     at that speed, when the acceleration is twice smaller than at
                                                                     zero-speed. From the graph we can ﬁnd that v0 ≈ 25 m/s.
                                                                     iii. (2.5 pts) The distance diﬀerence is the surface area S
                                                                     between the actual v(t) graph, and the ideal one. These graphs
                                                                     coincide for v < v0 and upon achieving the value v = vt . So,
     The average output current J is the surface area under the area S is enclosed into the range vt > v > v0 , where the
one period of the graph, divided by the period length. So, actual graph is, in fact, just the ideal graph, but shifted right-
J = 12 Imax τ1 /(2τc ), where τ = τc U0U−U
                                         i
                                           i
                                             is the length of a time wards by τ2 . This area has a shape of a narrow curved stripe,
segment when Io > 0. So,                                             the horizontal width of which is at every value of v equal to τ2 .
                                                                     One can divide this stripe into tiny horizontal layers of height
                          1 Ui            τc    Ui2
                J = Imax             =                .              δ and width τ2 . If we sum up the surface areas of these layers,
                          4 U0 − Ui      4L U0 − Ui                  we can bring τ2 before the braces; then, the sum of the layer
iii. (2 pts) Now, we can use the result of the question ii, be-
widths goes into the braces and yields vt − v0 . So, the surface        In case (a):
area S = τ2 (vt − v0 ) ≈ 15 m.
                                                                                    Ic0 = E/R2 ,     Ic∞ = E/(R1 + R2 ),
Problem 11. Black box (10 points) There are several
measurements, which can be made.                                           Id = ER1 /R2 (R1 + R2 ),          Ud = ER1 /(R1 + R2 ).
i. (2 pts) We can measure the voltage of the battery E ≈ 3.2 V.
                                                                     In case (b),
ii. (2 pts) Then, we can connect battery to the outlets of the
box via ammeter and measure the current. It appears that at                         Ic0 = E(R2−1 + R1−1 ),     Ic∞ = E/R1 ,
the ﬁrst moment, Ic0 ≈ 1.3 mA; however, the current starts to
decrease (decreasing twice during τ1 ≈ 12 s) and achieves at                        Id = E/R2 ,     Ud = ER1 /(R1 + R2 ).
the long-time limit the ﬁnal value Ic∞ ≈ 0.35 mA.
iii. (2 pts) Further, we can measure voltage at the outlet after     In both cases, we have two unknown quantities (R1 and R2 ),
disconnecting the battery. At the ﬁrst moment, Vd ≈ 2.35 V;          and four equations. It appears (follows from these equations)
it decreases twice per τ2 ≈ 25 s and vanishes at the long-time       that in both cases, two equalities should hold between the
limit.                                                               measured quantities: Ud = EIc∞ /Ic0 , and Ic0 = Ic∞ + Id .
iv. (4 pts) Finally, we can connect the ammeter to the outlet        So, the eﬀective (independent) number of equations is reduced
immediately after disconnecting the battery, and measure the         by two, which still leaves two — just suﬃcient for ﬁnding R1
current. Initially, it has value Id ≈ 1.0 mA, and vanishes at the    and R2 , but not enough to distinguish between the cases (a)
long-time limit.                                                     and (b). In fact, it can be shown that these two cases cannot be
     From iii and ii we can conclude that the box must contain a     distinguished even if we study the time-dependences of voltage
capacitor C (if there were an inductance , the current Ic would      and currents. So, we can say that we have either scheme (a)
increase in time). Because of self-discharge (voltage vanishes       with R2 = E/Ic0 ≈ 2.5 kΩ and R1 = E/Ic∞ − R2 ≈ 6.9 kΩ,
for iii), there must be a resistance R1 parallel to the capacitor.   or scheme (b) with R1 = E/Ic∞ ≈ 9.1 kΩ and R2 = E/Id ≈
Because of a prolonged charging (for ii, τ1 > 0), there must         3.2 kΩ.
be also a resistor R2 in serial connection to the capacitor. So,         The value of the capacitor can be estimated from charac-
there are two possible schemes, Fig (a) and Fig (b).                 teristic current decay times. For instance, using the charac-
                                                                     teristic time τ2 , in the case (a) we have τ2 = ln 2R1 C, hence
                                                                     C = τ2 / ln 2R1 ≈ 5.2 mF. In the case (b), τ2 = ln 2(R1 + R2 )C,
                                                                     hence C = τ2 / ln 2(R1 + R2 ) ≈ 2.9 mF.
