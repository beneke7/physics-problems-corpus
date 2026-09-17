---
id: solution-document-ipho-2012-t-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2012_T_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2012-t-qt1, ipho-2012-t-qt2, ipho-2012-t-qt3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2012_T_S.pdf."
---

Problem T1. Focus on sketches (13 points)                               Note that the interior of the building needs to lie inside the
Part A. Ballistics (4.5 points)                                     region where the targets can be hit with a stone thrown from
i. (0.8 pts) When the stone is thrown vertically upwards, it        the top with initial speed vmin . Indeed, if we can throw over
can reach the point x = 0, z = v02 /2g (as it follows from the      the building, we can hit anything inside by lowering the throw-
energy conservation law). Comparing this with the inequality        ing angle. On the other hand, the boundary of the targetable
z ≤ z0 − kx2 we conclude that                                       region needs to touch the building. Indeed, if there were a
                                                                    gap, it would be possible to hit a target just above the point
                          z0 = v02 /2g.                 [0.3 pts]   where the optimal trajectory touches the building; the traject-
                                                                    ory through that target wouldn’t touch the building anywhere,
     Let us consider the asymptotics z → −∞; the trajectory of
                                                                    hence we arrive at a contradiction.
the stone is a parabola, and at this limit, the horizontal dis-
                                                                        So, with v0 corresponding to the optimal trajectory, the tar-
placement (for the given z) is very sensitive with respect to the
                                                                    getable region touches the building; due to symmetry, overall
curvature of the parabola: the flatter the parabola, the larger
                                                                    there are two touching points (for smaller speeds, there would
the displacement. The parabola has the flattest shape when
                                                                    be four, and for larger speeds, there would be none). With the
the stone is thrown horizontally, x = v0 t and z = −gt2 /2, i.e.
                                                                    origin at the top of the building, the intersection points are
its trajectory is given by z = −gx2 /2v02 . Now, let us recall
                                                                    defined by the following system of equations:
that z ≤ z0 − kx2 , i.e. −gx2 /2v02 ≤ z0 − kx2 ⇒ k ≤ g/2v02 .
Note that k < g/2v02 would imply that there is a gap between                                                 v2    gx2
                                                                                   x2 + z 2 + 2zR = 0, z = 0 − 2 .
the parabolic region z ≤ z0 − kx2 and the given trajectory                                                   2g    2v0
z = −gx /2v0 . This trajectory is supposed to be optimal for Upon eliminating z, this becomes a biquadratic equation for x:
          2     2

hitting targets far below (z → −∞), so there should be no such                !
                                                                                 g
                                                                                     "2       !
                                                                                                1 gR
                                                                                                        " ! 2
                                                                                                             v0
                                                                                                                      " 2
                                                                                                                       v0
                                                                            4               2
                                                           2
a gap, and hence, we can exclude the option k < g/2v0 . This               x       2    + x       −   2    +    +  R      = 0.
                                                                                2v0             2    v0      4g         g
leaves us with
                                                                    Hence the speed by which the real-valued solutions disappear
                            k = g/2v02 .                  [0.5 pts]
                                                                    can be found from the condition that the discriminant vanishes:
ii. (1.2 pts) Let us note that the                                               !
                                                                                    1 gR
                                                                                            "2
                                                                                                   1 gR         gR
stone trajectory is reversible and due                                                − 2       = + 2 =⇒ 2 = 2.
                                                                                    2    v0        4    v0      v0
to the energy conservation law, one
                                                                    Bearing in mind that due to the energy conservation law, at
can equivalently ask, what is the min-
                                                                    the ground level the squared speed is increased by 4gR. Thus
imal initial speed needed for a stone
                                                                    we finally obtain
to be thrown from the topmost point                                                                           $
                                                                                                                gR
                                                                                               #
of the spherical building down to the
                                                                                      vmin = v02 + 4gR = 3          .
ground without hitting the roof, and what is the respective tra-                                                 2
jectory. It is easy to understand that the trajectory either needs Part B. Mist (4 points)
to touch the roof, or start horizontally from the topmost point i. (0.8 pts) In the plane’s reference frame, along the channel
with the curvature radius equal to R. Indeed, if neither were between two streamlines the volume flux of air (volume flow
the case, it would be possible to keep the same throwing angle rate) is constant due to continuity. The volume flux is the
and just reduce the speed a little bit — the stone would still product of speed and channel’s cross-section area, which, due
reach the ground without hitting the roof. Further, if it were to the two-dimensional geometry, is proportional to the channel
tangent at the topmost point, the trajectory wouldn’t touch width and can be measured from the Fig. Due to the absence of
nor intersect the roof anywhere else, because the curvature of wind, the unperturbed air’s speed in the plane’s frame is just v0 .
the parabola has maximum at its topmost point. Then, it So, upon measuring the dimensions a = 10 mm and b = 13 mm
would be possible to keep the initial speed constant, and in- (see Fig), we can write v0 a = ub and hence u = v0 ab . Since at
crease slightly the throwing angle (from horizontal to slightly point P , the streamlines are horizontal where all the velocities
upwards): the new trajectory wouldn’t be neither tangent at are parallel, the vector addition is reduced to the scalar addi-
the top nor touch the roof at any other point; now we can re- tion: the air’s ground speed vP = v0 − u = v0 (1 − ab ) = 23 m/s.
duce the initial speed as we argued previously. So we conclude ii. (1.2 pts) Although the dynamic pressure 21 ρv 2 is relatively
that the optimal trajectory needs to touch the roof somewhere, small, it gives rise to some adiabatic expansion and compres-
as shown in Fig.                                                    sion. In expanding regions the temperature will drop and hence,
iii. (2.5 pts) The brute force approach would be writing down the pressure of saturated vapours will also drop. If the dew
the condition that the optimal trajectory intersects with the point is reached, a stream of droplets will appear. This process
building at two points and touches at one. This would be de- will start in a point where the adiabatic expansion is maximal,
scribed by a fourth order algebraic equation and therefore, it is i.e. where the hydrostatic pressure is minimal and consequently,
not realistic to accomplish such a solution within a reasonable as it follows from the Bernoulli’s law p + 12 ρv 2 = const, the dy-
time frame.                                                         namic pressure is maximal: in the place where the air speed in
                                                         — page 1 of 5 —
wing’s frame is maximal and the streamline distance minimal. Part C. Magnetic straws (4.5 points)
Such a point Q is marked in Fig.                                  i. (0.8 pts) Due to the superconduct-
                                                                  ing walls, the magnetic field lines cannot
                                                                  cross the walls, so the flux is constant
                                                                  along the tube. For a closed contour in-
                                                                  side the tube, there should be no circu-
                                                                  lation of the magnetic field, hence the
                                                                  field lines cannot be curved, and the field
                                                                  needs to be homogeneous. The field lines
                                                                  close from outside the tube, similarly to a solenoid.
                                                                  ii. (1.2 pts) Let us consider the change of the magnetic energy
iii. (2 pts) First we need to calculate the dew point for the air when    the tube is stretched (virtually) by a small amount ∆l.
of given water content (since the relative pressure change will Note that the magnetic flux trough the tube is conserved: any      dΦ
be small, we can ignore the dependence of the dew point on change of flux would imply a non-zero electromotive force dt ,
pressure). The water vapour pressure is pw = psa r = 2.08 kPa. and for a zero  Φ
                                                                                      resistivity, an infinite current. So, the induc-
                                                                                                                                   B2
The relative change of the pressure of the saturated vapour is    tion  B  =  πr 2 . The  energy density of the magnetic field is 2µ0
                                                                                                                                      .
small, so we can linearize its temperature dependence:            Thus, the change of the magnetic energy is calculated as
                                                                                                B2 2          Φ2
  psa − pw   psb − psa                        (1 − r)psa                               ∆W =         πr ∆l =         ∆l.
           =           =⇒ Ta − T = (Tb − Ta )            ;                                      2µ0         2µ0 πr2
   Ta − T     Tb − Ta                          psb − psa
                                                                       This energy increase is achieved owing to the work done by the
numerically T ≈ 291.5 K. Further we need to relate the air             stretching force, ∆W = T ∆l. Hence, the force
speed to the temperature. To this end we need to use the en-
ergy conservation law. A convenient ready-to-use form of it is                                            Φ2
                                                                                                  T =           .
provided by the Bernoulli’s law. Applying this law will give                                            2µ0 πr2
a good approximation of the reality, but strictly speaking, it         iii. (2.5 pts) Let us analyse, what would be the change of
needs to be modified to take into account the compressibility          the magnetic energy when one of the straws is displaced to a
of air and the associated expansion/contraction work. Con-             small distance. The magnetic field inside the tubes will remain
sider one mole of air, which has the mass µ and the volume             constant due to the conservation of magnetic flux, but outside,
V = RT /p. Apparently the process is fast and the air par-             the magnetic field will be changed. The magnetic field out-
cels are large, so that heat transfer across the air parcels is        side the straws is defined by the following condition: there is
negligible. Additionally, the process is subsonic; all together        no circulation of B ⃗ (because there are no currents outside the
we can conclude that the process is adiabatic. Consider a seg-         straws); there are no sources of the field lines, other than the
ment of a tube formed by the streamlines. Let us denote the            endpoints of the straws; each of the endpoints of the straws is
physical quantities at its one end by index 1, and at the other        a source of streamlines with a fixed magnetic flux ±Φ. These
end — by index 2. Then, while one mole of gas flows into               are exactly the same condition as those which define the elec-
the tube at one end, as much flows out at the other end. The           tric field of four charges ±Q. We know that if the distance
inflow carries in kinetic energy 21 µv12 , and the outflow carries     between charges is much larger than the geometrical size of
out 12 µv22 . The inflowing gas receives work due to the pushing       a charge, the charges can be considered as point charges (the
gas equal to p1 V1 = RT1 , the outflowing gas performs work            electric field near the charges remains almost constant, so that
p2 V2 = RT2 . Let’s define molar heat capacities CV = µcV and          the respective contribution to the change of the overall electric
Cp = µcp . The inflow carries in heat energy CV RT1 , and the          field energy is negligible). Therefore we can conclude that the
outflow carries out CV RT2 . All together, the energy balance          endpoints of the straws can be considered as magnetic point
can be written as 12 µv 2 + Cp T = const. From this we can             charges. In order to calculate the force between two magnetic
                     2               2
easily express ∆ v2 = C1 vcrit2
                                 ( ac2 − 1) = cp ∆T , where c is the   charges (magnetic monopoles), we need to establish the corres-
streamline distance at the point Q, and further                        pondence between magnetic and electric quantities.
                             $                                             For two electric charges Q separated by a distance a, the
                                2cp ∆T                                 force is F = 4πε1 Q
                                                                                            2
                    vcrit = c             ≈ 23 m/s,                                         2 , and at the position of one charge, the elec-
                                                                                        0 a
                                a2 − c2                                                                                                  2
                                                                       tric field of the other charge has energy density w = 32π12 ε0 Q
                                                                                                                                      a4 ;
                                                                                                       2
where we have used c ≈ 4.5 mm and ∆T = 1.5 K. Note that                hence we can write F = 8πwa . This is a universal expression
in reality, the required speed is probably somewhat higher, be-        for the force (for the case when the field lines have the same
cause for a fast condensation, a considerable over-saturation is       shape as in the case of two opposite and equal by modulus elec-
needed. However, within an order of magnitude, this estimate           tric charges) relying only on the energy density, and not related
remains valid.                                                         to the nature of the field; so we can apply it to the magnetic
                                                            — page 2 of 5 —
field. Indeed, the force can be calculated as a derivative of        For the two straws, we have four magnetic charges. The lon-
the full field energy with respect to a virtual displacement of      gitudinal (along a straw axis) forces cancel out (the diagonally
a field line source (electric or magnetic charge); if the energy     positioned pairs of same-sign-charges push in opposite direc-
densities of two fields are respectively equal at one point, they    tions). The normal force is a superposition of the attraction
                                                                                                                          1 Φ2
are equal everywhere, and so are equal the full field energies.      due to the two pairs of opposite charges, F1 = 4πµ         2 , and
                                                                                                                     √      0 l
As it follows from the Gauss law, for a point source of a fixed      the repulsive forces of diagonal pairs, F2 = 8πµ20 2l
                                                                                                                        Φ 2
                                                                                                                           2 . The net
                                                        1 Φ
magnetic flux Φ at a distance a, the induction B = 4π     a2 . So,   attractive force will be
                          B2       1    Φ2
the energy density w = 2µ0 = 32π2 µ0 a4 , hence
                                                                                                          √
                               1 Φ2                                                                    4 − 2 Φ2
                         F =         .                                               F = 2(F1 − F2 ) =          .
                             4πµ0 a2                                                                    8πµ0 l2




                                                          — page 3 of 5 —
Problem T2. Kelvin water dropper (8 points)                     where the droplet’s capacitance Cd = 4πε0 r; the electrical work
Part A. Single pipe (4 points)                                  dWel = ϕmax dq = 4πε0 ϕ2max dr. Putting dW = 0 we obtain an
i. (1.2 pts) Let us write the force balance for the droplet.    equation for ϕmax , which recovers the earlier result.
Since d ≪ r, we can neglect the force π4 ∆pd2 due to the excess Part B. Two pipes (4 points)
pressure ∆p inside the tube. So, the gravity force 43 πrmax3
                                                               ρg
                                                                i. (1.2 pts) This is basically the same as Part A-ii, except
is balanced by the capillary force. When the droplet separates  that the surroundings’ potential is that of the surrounding
from the tube, the water surface forms in the vicinity of the   electrode, −U/2 (where U = q/C is the capacitor’s voltage)
nozzle a “neck”, which has vertical tangent. In the horizontal  and droplet has the ground potential (0). As it is not defined
cross-section of that “neck”, the capillary force is vertical and
                                                                which electrode is the positive one, opposite sign of the po-
can be calculated as πσd. So,                                   tential may be chosen, if done consistently. Note that since
                                %                               the cylindrical electrode is long, it shields eﬀectively the en-
                                   3σd
                        rmax = 3       .                        vironment’s (ground, wall, etc) potential. So, relative to its
                                   4ρg
                                                                surroundings, the droplet’s potential is U/2. Using the result
ii. (1.2 pts) Since d ≪ r, we can neglect the change of the of Part A we obtain
droplet’s capacitance due to the tube. On the one hand, the
                                                    1 Q
droplet’s potential is ϕ; on the other hand, it is 4πε    . So,                Q = 2πε0 U rmax = 2πε0 qrmax /C.
                                                      0 r

                          Q = 4πε0 ϕr.                                ii. (1.5 pts) The sign of the droplet’s charge is the same as
iii. (1.6 pts) Excess pressure inside the droplet is caused by that of the capacitor’s opposite plate (which is connected to
the capillary pressure 2σ/r (increases the inside pressure), and the farther electrode). So, when the droplet falls into the bowl,
by the electrostatic pressure 21 ε0 E 2 = 21 ε0 ϕ2 /r2 (decreases the it will increase the capacitor’s charge by Q:
pressure). So, the sign of the excess pressure will change, if                                                               q
1      2     2                                                                      dq = 2πε0 U rmax dN = 2πε0 rmax ndt ,
  ε  ϕ
2 0 max   /r   = 2σ/r, hence                                                                                                 C
                                    &
                         ϕmax = 2 σr/ε0 .                             where dN = ndt is the number of droplets which fall during
                                                                      the time dt This is a simple linear diﬀerential equation which
     The expression for the electrostatic pressure used above can
                                                                      is solved easily to obtain
be derived as follows. The electrostatic force acting on a surface
charge of density σ and surface area S is given by F = σS · Ē,
                                                                                                                          %
                                                                                          γt        2πε0 rmax n    πε0 n 3 6σd
where Ē is the field at the site without the field created by the                q = q0 e , γ =                =                .
                                                                                                         C           C        ρg
surface charge element itself. Note that this force is perpen-
dicular to the surface, so F/S can be interpreted as a pressure. iii. (1.3 pts) The droplets can reach the bowls if their mech-
The surface charge gives rise to a field drop on the surface equal anical energy mgH (where m is the droplet’s mass) is large
to ∆E = σ/ε0 (which follows from the Gauss law); inside the enough to overcome the electrostatic push: The droplet starts
droplet, there is no field due to the conductivity of the droplet: at the point where the electric potential is 0, which is the sum of
Ē − 21 ∆E = 0; outside the droplet, there is field E = Ē + 21 ∆E, the potential U/2, due to the electrode, and of its self-generated
therefore Ē = 12 E = 12 ∆E. Bringing everything together, we potential −U/2. Its motion is not aﬀected by the self-generated
obtain the expression used above.                                     field, so it needs to fall from the potential U/2 down to the po-
     Note that alternatively, this expression can be derived by tential −U/2, resulting in the change of the electrostatic energy
considering a virtual displacement of a capacitor’s surface and equal to U Q ≤ mgH, where Q = 2πε U r
                                                                                                                0   max (see above). So,
comparing the pressure work p∆V with the change of the elec-
trostatic field energy 12 ε0 E 2 ∆V .                                                                      mgH
                                                                                             Umax =                   ,
     Finally, the answer to the question can be also derived from                                     2πε0 Umax rmax
the requirement that the mechanical work dA done for an in-                                     $              %
finitesimal droplet inflation needs to be zero. From the en-                                         Hσd          H 3 gσ 2 ρd2
                                                     2    1 2                       ∴ Umax =                = 6                .
ergy conservation law, dW + dWel = σ d(4πr ) + 2 ϕmax dCd ,                                        2ε0 rmax           6ε30




                                                           — page 4 of 5 —
                                                                                                            #
Problem T3. Protostar formation (9 points)                          be sketched as follows. Substituting      2E + 2Gm
                                                                                                                    r  = ξ and
i. (0.8 pts)                                                        √
                                                                      2E = υ, one gets
                T = const =⇒ pV = const                               t∞
                                                                             ( ∞
                                                                                      dξ
                                                                           =
                        V ∝ r3                                       4Gm      0  (υ − ξ 2 )
                                                                                    2       2

                                 p(r1 )                                          ( ∞  )                                   *
                ∴ p ∝ r−3 =⇒            = 23 = 8.                             1            υ          υ         1      1
                                 p(r0 )                                    = 3                   +          +       +       dξ.
                                                                             4υ 0       (υ − ξ)2   (υ + ξ)2    υ−ξ    υ+ξ
ii. (1 pt) During the period considered the pressure is negli-
                                                                    Here (after shifting the variable) one can use dξ
                                                                                                                      '
                                                                                                                        ξ = ln ξ and
gible. Therefore the gas is in free fall. By Gauss’ theorem and     ' dξ      1
symmetry, the gravitational field at any point in the ball is         ξ 2 = − ξ , finally getting the same answer as by Kepler’s laws.
                                                                    iv. (1.7 pts) By Clapeyron–Mendeleyev law,
equivalent to the one generated when all the mass closer to the
center is compressed into the center. Moreover, while the ball                mRT0
has not yet shrunk much, the field strength on its surface does          p=        .
                                                                               µV
not change much either. The acceleration of the outermost
layer stays approximately constant. Thus,                          Work done by gravity to compress the ball is
                     %
                        2(r0 − r2 )                                                                      ( 34 πr33
                                                                                                 mRT0                dV   3mRT0 r0
                                                                                (
                  t≈                                                    W =−        p dV = −                            =      ln .
                             g                                                                    µ        4   3      V     µ    r3
                                                                                                           3 πr0
where
                   Gm                                              The temperature stays constant, so the internal energy does not
                 g≈    ,
                    r2                                             change; hence, according to the 1st law of thermodynamics, the
                   $0                  $                           compression work W is the heat radiated.
                     2r02 (r0 − r2 )     0.1r03
               ∴t≈                   =          .                  v. (1 pt) The collapse continues adiabatically.
                           Gm             Gm
iii. (2.5 pts) Gravitationally the outer layer of the ball is in-                     pV γ = const =⇒ T V γ−1 = const.
fluenced by the rest just as the rest were compressed into a                           ∴ T ∝ V 1−γ ∝ r3−3γ
point mass. Therefore we have Keplerian motion: the fall of                                     + r ,3γ−3
                                                                                                    3
any part of the outer layer consists in a halfperiod of an ultra-                      ∴ T = T0            .
                                                                                                   r
elliptical orbit. The ellipse is degenerate into a line; its foci are
at the ends of the line; one focus is at the center of the ball (by vi. (2 pts) During the collapse, the gravitational energy is con-
Kepler’s 1st law) and the other one is at r0 , see figure (instead verted into heat. Since r3 ≫ r4 , The released gravitational en-
                                                                                                              2 −1      −1        2
of a degenerate ellipse, a strongly elliptical ellipse is depicted). ergy can be estimated as ∆Π = −Gm (r4 − r3 ) ≈ −Gm /r4
                                                                                                                            3
The period of the orbit is determined by the longer semiaxis of (exact calculation by integration adds a prefactor 5 ); the ter-
                                                                                                                         m
the ellipse (by Kepler’s 3rd law). The longer semiaxis is r0 /2 minal heat energy is estimated as ∆Q = cV µ (T4 − T0 ) ≈
                                                                         m
and we are interested in half a period. Thus, the answer is cV µ T4 (the approximation T4 ≫ T0 follows from the result
equal to the halfperiod of a circular orbit of radius r0 /2:          of the previous question, when combined with r3 ≫ r4 ). So,
                                                                               R m         m
                 "2                                $                  ∆Q   = γ−1   µ T4 ≈ µ RT4 . For the temperature T4 , we can use
                                                         3
        !
             2π     r0       Gm                        r0                                                              + ,3γ−3
                                                                                                                         r3
                       =            =⇒   t r→0 = π          .         the  result  of the previous  question, T 4 = T 0 r4     . Since
           2tr→0    2      (r0 /2)2                   8Gm
                                                                      initial full energy was approximately zero, ∆Q + ∆Π ≈ 0, we
                                                                      obtain
                                                                                                 "3γ−3                                   1
                                                                        Gm2
                                                                                        !                               !            " 3γ−4
                                                                             m              r3                              RT0 r3
                                                                            ≈ RT0                        =⇒ r4 ≈ r3                           .
                                                                         r4  µ              r4                              µmG

Alternatively, one may write the energy conservation law Therefore,
 ṙ 2   Gm                                                                                         " 3γ−3
  2 − r    = E (that in turn is obtainable from Newton’s
                                                                                          !
                                                                                            RT0 r3 4−3γ
II law r̈ = − Gm                 Gm                                              T4 ≈ T0                  .
         #      r 2 ) with E = − r0 , separate the variables                                 µmG
( dr             2Gm                              √ dr 2Gm . Alternatively, one can obtain the result by approximately
                                                '
   dt = − 2E + r ) and write the integral t = −     2E+ r
                                                                                                      Gm
This integral is probably not calculable during the limitted equating the hydrostatic pressure ρr4 r42 to the gas pressure
time given during the Olympiad, but a possible approach can p4 = µρ RT4 ; the result will be exactly the same as given above.




                                                          — page 5 of 5 —
Problem T1. Focus on sketches (13 points)

Part A. Ballistics (4.5 points)
i. (0.8 pts)
          z0 = v02 /2g



          k = g/2v02




ii. (1.2 pts) The sketch of the trajectory:




iii. (2.5 pts)        !
                          gR
           vmin = 3
                           2




                                              — page 1 of 5 —
Part B. Air flow around a wing (4 points)
i. (0.8 pts)
           vP = 23 m/s




ii. (1.2 pts) Mark on this fig. the point Q. Use it also for taking measurements (questions i and iii).




Formulae motivating
the choice of point Q:              av = const
                                       1
                                    p + ρv 2 = const
                                       2
                                    p1−γ T γ = const


iii. (2.0 pts)       !
                         2cp ∆T
Formula: vcrit = c
                         a 2 − c2



Numerical: vcrit ≈ 23 m/s




                                                       — page 2 of 5 —
Part C. Magnetic straws (4.5 points)
i. (0.8 pts)
Sketch here five
magnetic field lines.




ii. (1.2 pts)
                   Φ2
          T =
                 2µ0 πr2




iii. (2.5 pts)   √
              4 − 2 Φ2
          F =
               8πµ0 l2




                                       — page 3 of 5 —
Problem T2. Kelvin water dropper (8 points)

Part A. Single pipe (4 points)
i. (1.2 pts)      "
                     3σd
          rmax = 3
                     4ρg




ii. (1.2 pts)
           Q = 4πε0 ϕr




iii. (1.6 pts)     #
           ϕmax = 2 σr/ε0




Part B. Two pipes (4 points)
i. (1.2 pts)
          Q0 = 2πε0 qrmax /C




ii. (1.5 pts)                        "
                              πε 0 n 3 6σd
          q(t) = q0 eγt , γ =              .
                               C        ρg




iii. (1.3 pts)     "
                       H 3 gσ 2 ρd2
          Umax = 6
                           6ε30




                                               — page 4 of 5 —
Problem T3. Protostar formation (9 points)
i. (0.8 pts)
          n=8




ii. (1 pt)          !
                        0.1r03
             t2 ≈
                         Gm




iii. (2.5 pts)           !
                               r03
             tr→0 = π
                              8Gm




iv. (1.7 pts)
                    3mRT0 r0
             Q=          ln
                      µ     r3




v. (1 pt)
                            $ r %3γ−3
                                 3
             T (r) = T0
                                 r




vi. (2 pts)
                        &                1
                                     ' 3γ−4
                            RT0 r3
             r4 ≈ r3
                            µmG




                        &              3γ−3
                                     ' 4−3γ
                            RT0 r3
            T4 ≈ T0
                            µmG




                                              — page 5 of 5 —
