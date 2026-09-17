---
id: solution-document-nbpho-2012-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2012_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [nbpho-2012-asteroid, nbpho-2012-bars-and-rod, nbpho-2012-elastic-collision, nbpho-2012-power-lines, nbpho-2012-rlc-circuit, nbpho-2012-thermodynamic-cycle, nbpho-2012-uranium-decay]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2012_S.pdf."
---

Estonian-Finnish Olympiad - 2012                                     distance from the Sun, so the force due to photons can be, in-
                                                                     deed, considered as a correction to the gravity constant. κ is
Problem 1. Asteroid (14 points)
                                                                     the relative change of that constant and can be calculated for
Part A. Collision with Earth (5 points)
                                                                     the Sun’s surface as
i. (2 pts) The longer axis of the asteroid 2a = Rmax + Rmin =
2Re equals to that of Earth, so the full energies, when reduced                   κ = ∆F/gS ma = πra2 σTs4 /cgS ma ≈ 2.8 × 10−8 .
to the unit mass, are equal. Immediately before the collision,
the Earth and the asteroid are at the same distance from the         iv. (1 pt) We need to have ∆T = 27 s, hence κ = 15 ∆T    T0 ≈
Sun, so the gravitational potentials are equal, too. Hence, the               −7
                                                                     1.7 × 10 . This exceeds by an order of magnitude the effect
speeds are also equal. The distance between the Sun and the          provided by the coating. κ provided by the coating is inversely
asteroid equals to the longer semiaxis, hence it is situated at      proportional to the diameter of the asteroid; the required κ is
the shorter semiaxis of the orbit. The velocity of the asteroid      inversely proportional to N . So, it would be possible to avert
is perpendicular to the shorter semiaxis, and the velocity of the    collision for ra = 2 m, or for ra = 10 m with N = 60. In the
Earth — to the radius vector drawn from the Sun. So, the angle       first case, the asteroid may not be large enough to warrant at-
between those two vectors is the angle between the radius vec-       tention; in the second case, 60 years is too long time. So, the
tor and the shorter semiaxis, sin α = 12 (Rmax − Rmin )/Re = 12 ,    answer is “no”.
hence α = 30◦ . The relative velocity of the asteroid is the
                                                                     Problem 2. Thermodynamic cycle (5 points)
vector difference of the two vectors, so its modulus equals to
va = 2v0 sin 15◦ ≈ 15.5 km/s. When accelerated further by the
Earth’s gravity field, the respective
                                 p gravitational energy will be
added to the kinetic one, vb = va2 + 2gre = 19.1 km/s.
ii. (2 pts) At the limit case of impact, the trajectory of the
asteroid is tangent to the surface of the Earth. So, we can
apply the conservation of angular momentum for the point
where the trajectory touches the Earth, va b = vb re , hence
b = re vb /va = 7900 km.
iii. (1 pt) Suppose that the asteroid is delayed by τ ; at that
moment when the asteroid is at the Earth’s orbit, the Earth
is at the distance l = v0 τ from the asteroid. The relative ve-
locity of the asteroid forms with this displacement vector an
angle equal to 90◦ − 15◦ = 75◦ , hence the impact parameter
b = v0 τ sin 75◦ , from where τ = b/v0 sin 75◦ ≈ 270 s. Since this   It is possible to realise the described process as a reversible
time delay is accumulated over 10 periods, the delay need for        cycle between two reservoirs at T1 and T2 (in this case it is
a single period is τ /10 = 27 s.                                     called the Stirling cycle). A thermodynamic process is revers-
Part B. Changing the solar pull (9 points)                           ible if and only if there is never any heat flux between re-
i. (2 pts) When γ changes, the kinetic energy remains con-           gions having non-infinitesimally different temperatures. Dur-
stant:                                                               ing either isotherm we may keep the system in contact with
                     γ0    γ0         γ1      γ1                     a reservoir. The isochores can be connected with a heat ex-
                   − +           =− ′ +
                     2a 0.5Re        2a     0.5Re                    changer in such a way that the heat emitted at any specific
where a = Re and 2a′ = 0.5Re + Rmax
                                 ′
                                    . So,                            temperature on one isochore is later reused at the same tem-
                                                                   perature on the other isochore. A corollary of Carnot’s theorem
      γ1     γ0    γ1
          =      4    − 3   ⇒ (1 − κ)Re = a′ (1 − 4κ),               (which says that the Carnot cycle is the most efficient one pos-
      2a′   2Re    γ0
                                                                     sible between to reservoirs) is that any reversible cycle between
                       1−κ             Re 3                          two reservoirs has the same efficiency as Carnot’s. Assuming
             a′ = Re             ′
                              , Rmax =          .                    T1 > T2 , the efficiency is (T1 − T2 )/T1 .
                       1 − 4κ          2 1 − 4κ
                                                                           Alternatively: for an isotherm, p ∝ T /V , therefore the work done
ii. (2 pts) At the limit of small κ, we can simplify the previous                                                        R V2              R V2 dV
                                                                     during compression from V1 to V2 is Q12 (T ) =             p dV ∝ T             =
result,                                                                  R V2                                             V1                V1   V
                           a′                                        T          d ln V = T ln V
                                                                                              V
                                                                                               2
                                                                                                 . During isochores there is no displacement and
                              ≈ 1 + 3κ.                                   V1                  1
                          Re                                         thus no work done. The efficiency η =
                                                                                                               Q12 (T2 )−Q12 (T1 )
                                                                                                                    Q12 (T2 )
                                                                                                                                   = T2T−T1 .
                                                                                                                                         2
                                                   p
From the Kepler’s third law, T /T0 = (a′ /a)3/2 γ0 /γ1 , from
              3 a′ −a  κ
where ∆TT0 ≈ 2 a + 2 = 5κ. So, ∆T = 5T0 κ.
iii. (4 pts) For photons, the energy-to-mass ratio is c. There-
fore, at the Sun’s surface, the momentum carried by photons
per unit time across a surface area S is given by dp/dt =
SσTs4 /c. As the result of the coating, the photons are re-
flected back by the asteroid, instead of being absorbed. So,
before coating, each photon gave to the asteroid a momentum
equal to its own; no it will double. Hence, the change in the
force due to photons is given by ∆F = πra2 σTs4 /c (assuming
that the asteroid is at the Sun’s surface). Both the pressure
of photons and gravity force are inversely proportional to the
Problem 3. Bars and rod (5 points)                                     from R2 ) are C2 E 2 /2 + L2 E 2 /(2R22 ) and CE 2 /2 + LE 2 /(2R2 ).
     With µ = 12 , the result-                                         Problem 5. Diffraction grating (7 points)
ant force of the normal force                                              The experiment is rather straightforward, except that the
and friction force forms an angle                                      grating pitch is smaller than the wavelength. Therefore, for a
arctan 12 with the surface nor-                                        perpendicularly falling laser beam, first main maximum cannot
mal (assuming that the rod is as                                       be observed. In order to observe that maximum, the laser beam
short as possible and hence, at                                        needs to be inclined. The easiest way is to determine angle by
the threshold of slipping). There                                      which the first main maximum is observed at the direction,
are three forces applied to the                                        directly opposite to the laser beam. Then the optical path
rod — the gravity force mg ap-                                         difference between the rays originating from two neighbouring
plied to the centre of mass C, and                                     stripes is found as ∆l = 2d sin α = λ, so that d = 12 sinλ α , where
the two forces due to the bars.                                        α is such an angle between the laser beam and grating sur-
At equilibrium, the three lines                                        face normal for which the first main maximum is observed at
s1 , s2 , and s3 , defined by these                                    the direction, directly opposite to the laser beam. sin α = a/c
three forces need to intersect at                                      can be calculated from geometrical measurements of the sides
a single point Q (otherwise, with                                      a and c of a right triangle. For the uncertainty, ∆λ       ∆a    ∆c
                                                                                                                          λ = a + c .
respect to the intersection point of two lines, the torque of the      Measurements yield d ≈ (320 ± 4)nm.
third force would cause a rotation of the rod). This configura-
tion is depicted in Figure.
                                                                       Problem 6. Uranium decay (7 points)
                                                                       i. (2 pts) It can be seen from the table that the fist half-life
     Since the friction force forms angle arctan 12 with the sur-
                                                                       is much longer than all the others. This means that as soon
face normal, hence ∠DP Q = ∠DRQ = arctan 2, hence AP =
                                                                       as something is produced by the decay of U238 , all the other
RS = 41 d (see√Figure). From the geometry of the √      blue tri-
angle, AS = 2 3d; due to AP = RS, P R = AS = 2 3d and                  decay steps in the chain take place almost immediately, and
          √                                                            for the other isotopes, a quasi-stationary concentration level is
P D = 3d. Now, let us recall that tan ∠DP Q = 2, hence
                  √                                                    achieved — such that the number of decays per unit time of
DQ = P R = 2 3d. From the geometry of the blue triangle,
                                                                       the isotope equals to that of U238 . Let us apply this to U234 .
∠DCQ = 30◦ , so that DC = DQ/ tan 30◦ = 6d. Now we can
                                                                       If the number of U238 atoms is N238 then the number of de-
finally express
                                                                       cays per unit time is dN
                                                                                             dt = N0 ln 2/τ238 = N234 ln 2/τ234 , hence
                                   3    √                              N234 /N238 = τ234 /τ238 The total number of uranium atoms
           AC = CD + DP − P A = 5 d + 3d ⇒
                                   4                                   equals to N = N238 /0.993, so
                                √
            L = 2AC = (11, 5 + 2 3)d ≈ 14.96d.                                         N234       τ234
                                                                                            =            ≈ 5.53 × 10−5 .
                                                                                        N     0, 993τ238
Problem 4. RLC-circuit (5 points)                                      ii. (2 pts) Since the uranium ore has reached a quasi-
i. (1 pt) In the stationary regime, the capacitors can be ef-          stationary composition of isotopes, per each decay of U238 ,
fectively disconnected (they conduct no direct current) and the        there is one decay event for each of the isotopes. So we need to
inductors can be substituted by wires. If the voltmeter is ideal,      sum up all the decay energies in the second row of the table,
there is therefore no current through R1 and the voltmeter             this gives us Edec = 52.1 MeV. Then the heat production rate
shows the voltage on R2 equalling E.                                   is given by w = NA µρ Edec τln2382 ≈ 2.0 W/m3 .
ii. (2 pts) Capacitors cannot immediately change their voltage         iii. (3 pts) The heat released will escape owing to the thermal
and inductors cannot instantaneously change their current. L1          conductance. Inside a sphere of radius r, the heat released
and L2 had both been carrying all the current that had been            equals to 43 πwr3 = 4πr2 κ dT   dr (the right-hand-side gives the
flowing through the circuit, hence, after opening the switch,          thermal flux due to conductance). From this equation we ob-
they still carry a current of E/R2 and act as such current             tain rdr = 3 wκ
                                                                                       dT , which yields after integration
sources. As the current from L2 flows also through R2 , the                                   r
voltage on R2 is E (with the “+”-side at the centre of the cir-                                   κ
                                                                                         R = 6 (T0 − Ta ) ≈ 305 m.
cuit). The current through L1 flows also through R1 (it is the                                    w
current charging C1 ); therefore the voltage on R1 is ER1 /R2
(with the “+”-side at the centre). The reading of the voltmeter        Problem 7. Lifting by current (7 points)
has changed its sign and is E(1 − R1 /R2 ) or, plugging in the         i. (2 pts) The Ampère force pulls the wires to the side so that
data, −2E.                                                             the wires will take a curved shape. Since the Ampère force is
iii. (2 pts) Immediately after opening the switch, capacitor           perpendicular to the wire, the mechanical tension is constant
C1 was uncharged (it had been parallel to R1 that was carry-           along the wires. Let the tension be T and the curvature of the
ing no current) and C2 had a voltage of E (it had been dir-            wire at a certain point — R. Let us consider a short piece of
ectly parallel to the battery). L1 and L2 were both carrying           the wire, of length a ≪ R. Then the angle by which the tan-
a current of E/R2 . The voltmeter can be effectively discon-           gent of the wire rotates while the tangent point moves over an
nected (its resistance is huge), giving us two separate circuits,      arc of length a is given by α = a/R. Let us study the force bal-
R1 L1 C1 and R2 L2 C2 . Therefore (by the potential energy for-        ance in the perpendicular direction for that piece of wire: the
mulae CU 2 /2 and LI 2 /2) the energy stored in the left-hand cir-     Ampère’s force IaB is balanced by the tension T α = T a/R.
cuit was L1 E 2 /(2R22 ) or, with the given data, LE 2 /(2R2 ). This   So, R = T /IB which means that R is constant, and the wire
is the energy dissipated from R1 . The corresponding expres-           will take the form of a circle segment. To conclude, both halves
sions for the right-hand circuit (giving the energy dissipated         of the wire will take the form of a circle segment, the convex
                                                                       sides of which are turned outside.
ii. (2 pts) The maximal height is achieved when the circle               iii. (3 pts) For the natural oscillation modes, there will be
segments form a perfect circle, in which case the lifting height         standing waves with nodes at the fixing points; the lowest fre-
is ∆h = l(1 − π2 ).                                                      quency corresponds to
                                                                                             qthe longest wavelength, which is 2L, so
iii. (2 pts) If the central angle of the circle segments is 2α,                            1
                                                                         that f0 = v/2L = 2L     T
                                                                                                 σ.
the tangents to the wires at the point where the load is fixed
forms angle α with the vertical direction. So, the lifting force         Problem 10. Black box (8 points) We study what will
is mg = 2T cos α. From the other hand, R = l/2α = T /IB, ie.             happen, if we connect pair-wise all the leads of the black box.
                                                                             If we connect leads C and D, there will be permanently light
                              mg
                          α       = cos α,                               from the red lamp which sticks out from one of the small holes
                              lIB
                                                                         of the box. This indicates that there is a light emitting diode or
which is the equation from where one can determine the angle             a lamp connected in series with a battery between these leads.
α. Then, the lifting height                                                  If we connect leads A and C, there may or may not be light
                                                                         from the same lamp. Once the light disappears, it will appear
                                                    
                              2T               sin α
     ∆h = l − 2R sin α = l −     sin α = l 1 −         .
                             lIB                 α                       again only after D and A have been connected for a short time,
                                                                         or D and B for a longer time. In any case, the lamp light
iv. (1 pt) From the previous result it can be seen that we need
                                                                         vanishes during ca 10 seconds. This means that between these
to have sinα α = π3 , hence α = π6 and
                                                                         leads, there is (a) either a diode and a capacitor in sequence (in
                            mgα      mgπ                                 which case the capacitor needs to be charged for a light to ap-
                     I=            = √    .
                          lB cos α  3 3lB                                pear), or (b) diode, capacitor, and a battery (in which case the
Problem 8. Elastic collision (7 points)                                  capacitor needs to be discharged for a light to appear). When
i. (1 pt) The centre of mass moves with the velocity ~u =                comparing with the previous paragraph, we see that segments
  M
M+m ~ v , and that will be the speed of the small ball in new            CA and CD need to have a common segment; CA includes a
                                                             Mm
reference frame, hence its momentum p~ = −m~u = − M+m             ~v .   capacitor, which is missing from CD. So, CD and DA need to
Since in this frame, the centre of mass is at rest, the large ball       be connected in sequence. Thereby we exclude option (a).
needs to have equal by modulus and opposite momentum.                        If we connect leads A and D, there may or may not appear
ii. (3 pts) Let the balls change a momentum q~. The small                a spark, indicating that there is only a capacitor between these
ball will have momentum ~  p ′ = p~ + q~, and as the centre of mass      leads, or a capacitor and a battery. However, the battery is in
remains at rest, the large ball will have momentum −~      p ′ . The     segment CD, so there is no battery in this segment.
energy conservation law can be written now as follows:                       If we connect leads D and B, there may or may not be green
                                                                         light from another lamp. In any case, the lamp light vanishes
             ~p 2   p2
                    ~    p ′2
                         ~      p ′2
                                ~
                  +    =      +      ⇒ |~      p ′ |,
                                        p | = |~                         during ca 10 seconds. The light reappears after A and C have
             2m 2M       2m 2M
                                                                         been connected, and disappears after D and A have been con-
ie. the moduli of the momenta will remain unchanged.                     nected. This means that between these leads, there is either
iii. (3 pts) In the laboratory frame, the momentum of the                a diode and a capacitor in sequence, or a diode, a capacitor,
large ball will be                                                       and a battery. The capacitor is in segment DA, so DA needs
                       p~ ′′ = M ~u − ~
                                      p ′;                               to be included in DB, ie. DA and AB need to be in sequence.
       p ′ | remains constant, the angle α between p~ ′′ and ~u will
since |~                                                                 Since the battery is already in CD, there is no battery in this
be maximal when ~p ′′ ⊥ ~p ′ , with                                      segment.
                                                                             If we connect leads C and B, nothing happens. If we com-
                                 p ′|
                                |~            m
                  α = arcsin          = arcsin .                         pare this with what we have learnt earlier — there are two
                               |M ~u|         M
                                                                         lamps or diodes, a capacitor and a battery between these leads,
                                                                         we conclude that the light emitting components need to be di-
Problem 9. Power lines (7 points)                                        odes of opposite polarity.
i. (2 pts) Let us use a frame where the moving perturbations
                                                                             If we connect leads A and B, nothing happens; comparing
are at rest. There, the centripetal acceleration required for the
                                                                         with what has been found earlier we conclude that there is a
motion along a trajectory of curvature radius R is given by the
                                                                         diode between these leads.
mechanical tension of the rope, for a small piece of rope (of
                                                                             Finally, since the charge- and discharge time of the capa-
length l)                                r                               citor are relatively long (RC ≈ 5 s), except when discharging
                      l    v2              T
                    T = σl ⇒ v =              ,                          via the A-D lead pair, the resistors need to be included into
                      R    R                σ                            the segments CD and AB.
ie. k = 1.                                                                   Bringing everything together, the circuit needs to be as
ii. (2 pts) We consider the torque balance for one half of the           given in Figure (or the same circuit with swapped polarities
wire, with respect to the point where it is fixed to the pole.           of the diodes and the battery).
Then, the centre of mass lays approximately at the distance L4
(since the shape of the wire is not far from a straight line), and
the equation can be written as
                          L L        L2 σg
                   Td =     σg ⇒ T =       .
                          4   2       8d
