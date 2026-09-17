---
id: solution-document-nbpho-2011-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2011_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [nbpho-2011-capacitor, nbpho-2011-charged-cylinder, nbpho-2011-plutonium-decay, nbpho-2011-spool, nbpho-2011-violin-string]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2011_S.pdf."
---

Estonian-Finnish Olympiad - 2011: solutions                               Using the result of the previous task, we can use this equation dir-       iii) Let us push away part of the water from the inter-plate space
1. Spool (12 points) i) First solution. The momentary rotation            ectly to obtain an expression for the minimal allowed value of the         so that there will be a small region of plate area dA, where there is
centre of the spool is the contact point P with the floor (since          coefficient of friction:                                                   no water between the plates (here, ∆p is the pressure difference
                                                                                                        r        J
this point is at rest). So, the velocity of the spool is u′ = Rω ,                                      R
                                                                                                          − MR     2 cos α                           between the inter-plate space and the outside regions). By doing
                                                                                          µmin =                                                     so, we perform work d · δA · ∆p, and increase the capacitor’s en-
where ω is the angular velocity. Consider triangle P OA, where A                                          J        Mg
                                                                                                               
                                                                                                    1 + MR   2     F
                                                                                                                      − sin α                        ergy:
is defined as the point where the loose end of the rope meets the
inner part of the spool at the current moment of time, but which is iv) The angular moment of the spool with respect to the edge of                                                 Q2 d 1                   1
                                                                                                                                                                                                                       
                                                                                                                                                                        2
                                                                                                                                                         δW = δ(Q /2C) =                         −                        .
actually a point of the spool, i.e. it rolls together with the spool); the threshold conserves during the impact (since the impact force                                             2ε0 εA ε(A − δA) + δA
O is the centre of the spool. Let us denote 6 P AO = β ; it is easy has zero arm):                        u                        v                So,
to see that 6 AOP = π − α. The velocity ~vA of the point A                         M u(R − H) + J = J + M R2                           ⇒                                Q2 d(ε − 1) · δA       1
is perpendicular to P A and, hence, forms angle β with the loose                                          R                         R                       δW =                           = ε0 E 2 d(ε − 1) · δA;
                                                                                                                 H/R
                                                                                                                             !                                              2ε0 ε A
                                                                                                                                                                                 2   2         2
end of the rope. Its projection to the rope equals to u, therefore
                                                                                               v =u 1−                 J                             comparing this with the pressure work d · δA · ∆p we conclude
vA = u/ cos β . Further, ω = vA /l,√where l = |AP | can be                                                     1 + MR
                                                2     2
                                                                                                                          2
                                                                                                                                                     that
found from the cosine theorem: l = R + r + 2Rr cos α. v) From the energy conservation law we obtain immediately                                                       1                               1
The angle β can be found using the sine theorem for the triangle                                 2                         2                               ∆p = ε0 E 2 (ε − 1) ⇒ p = p0 + ε0 E 2 (ε − 1).
                                                                                            2 v                     2 w                                               2                               2
AOP : sin β = R sin       α
                            . Combining   everything  together  we end       (J    +  M  R   )      =  (J  +  M   R   )       + 2M gH ⇒
                                                                                                                                                     3. Charged cylinder (8 points)
up with
                       l                                                                       R2 s                     R2
                                                                                                                  2gH                                i) Moving surface charge creates a solenoidal surface current with
                            uR                           uR                                    w = v2 −
    u′ = √ 2                                    =                  .                                                    J .                          the surface density j = σv = σωr . From the circulation the-
             R cos2 α + r 2 + 2Rr cos α             |R cos α + r|                                               1 + MR     2
                                                                                                                                                     orem for a rectangular loop embracing a segment of surface cur-
Second solution. Let us decompose the velocity ~vA into two            vi) The   spool is  the  most  prone  to jumping      immediately after the   rent we obtain Bl     = jl, where l is the length of the surface current
                                                                                                                                                                        µ0
components: the tangential component (parallel to the rope)            impact;    the gravity   force  needs  to  be  large   enough to bind the
                                                                                                                                                     segment (so that jl gives the current flowing through the loop).
equals (by modulus) to u; let us denote the radial component as        centre  of  mass   to the   rotational motion     around    the edge of the
                                                                                                                                                     Hence, B = µ0 j = µ0 σωr .
                                                                       threshold:
ur . Since the distance between O and A is constant, the projec-                                                                                     ii) Using formula E = dΦ          = B dS  , where S is the area covered
tion of the velocities of O and A to the line OA are equal:                        M v2         R−H                    g                                                          dt        dt
                                                                                          ≤g              ⇒ v2 ≤           (R − H) ⇒                 by the wire, we obtain E = Bωr 2 /2. Indeed, during a small time
      ur = v sin α ⇒ v = ur / sin α ⇒ ω = ur /R sin α.                              R               R                 M                              interval dt, the wire covers a equilateral triangle of side lengths r ,
                                                                                                                              J
                                                                                                   g                 1 + MR
                                                                                              r
The vertical component of the velocity of the point A remains un-                     u0 =            (R − H)
                                                                                                                                2                    r , and rωdt; its area is apparently r 2 ωdt/2. By using the earlier
                                                                                                                          J        H .
changed if we switch the laboratory system of reference with the                                  M              1 +    MR2
                                                                                                                               −   R
                                                                                                                                                     obtained expression for B we end up with
system associated with point O ; hence,                                2. Capacitor (6 points)                                                                                   E = µ0 σω 2 r 3 /2.
          u sin α − ur cos α = ωr sin α = ur r/R ⇒                     i) The energy is W = CU 2 /2 = 12 ε0 Ad E 2 d2 = 12 ε0 AdE 2 ;                iii) We need to show that from the previous task, dS       is independ-
                                                                                                                                                                                                             dt
                              ur          uR                           hence, the energy density w = W/Ad = 12 ε0 E 2 .                              ent of the wire shape. First we note that due to rotational sym-
                    v=            =                 .                  ii) There are two ways to calculate the force. First, we notice that          metry, dS   , it cannot depend on the rotation angle, i.e. dS    ≡ Ṡ =
                           sin α     R cos α + r                       the innermost charges q at the capacitor plates are affected by the                    dt                                                  dt
ii) (2 pts) The easiest way to solve this part is to use the energy                                                                                  Const. Further we note that regardless of the wire shape, during
                                                                       electric field E, therefore there is a force qE acting upon these. The        the entire rotation period 2π/ω , the whole circle area is covered;
balance for infinitesimal displacement of the cylinder and apply
                                                                       outermost charges, however, have no electric field around them                Ṡ · 2π/ω = πr 2 ⇒ Ṡ = r 2 ω/2.
the answer to the previous question:
                                                                      (because outside the inter-plate space, there is no electric field).
                 M 2              J                             J                                                                                    4. Black box (10 points) There are several ways to perform this
                                                  
F u · dt = d        v 1+                   = M vdv 1 +                ⇒Due to the Gauss law, the electric field decreases linearly with the          task. First one can notice that if two capacitors discharge at the
                 2               M R2                        M R2      net charge left below the level of the current point (i.e. towards            same resistor, starting with equal voltages and ending also with
              dv               Fu             F cos α + Rr             the inter-plate space). Therefore, the electric field averaged over
        a=        =                      =       ·            .                                                                                     equal voltages, the ratio of the discharge times equals to the ratio
              dt     M v 1 + MR     J
                                              M     1 +   J            the charges is just half of the maximal value E : hEi = 12 E , and
                                      2                 MR2                                                                                          of the capacitances (because for each given voltage, the discharge
iii) Let us write the force balance projection to the horizontal axis the  net force acting on the plate is F = Q hEi = CEd hEi =
                                                                       1         2                                                                   currents are the same, but larger capacitor has more charge — pro-
assuming that the spool is at the edge of slipping, i.e. the friction 2 0 AE .
                                                                         ε                                                                           portionally to the capacitance). Therefore we can first charge the
force Ff = µmin N , where N = mg − F sin α is the normal                   The second way includes writing the energy balance for a small            known capacitor (using the battery), and let it discharge on the
                                                                                                                                         2
force:                                                                 displacement of a plate: F · δd = δ(Q2 /2C) = 2εQ0 A δd =                     voltmeter (which has some finite resistance), measuring the time
M a = F cos α + µmin N = F cos α + µmin (M g − F sin α). 12 C 2 E 2 d · δd ⇒ F = 12 ε0 AE 2 .                                                        t1 required for it to reach a pre-defined final voltage. Then we need
to repeat the procedure with the other capacitor and measure the           straight line is tangent to the sinusoid. The length of a straight seg-   iii) Due to adiabatic law, pV γ = Const; when combined with
time t2 and calculate
                      C2 = C1 t2 /t1; the uncertainty is estimated       ment can be calculated as                                                 the gas law pV ∝ T we obtain pγ−1 ∝ T γ . During the last
as ∆C1 = C1 t1 + ∆t∆t1        2
                                + ∆C 1
                                        .                                                   T1 = 2ξ0 /u = 2(µ1 − µ2 )N/ku;                           downwards motion of the piston, the pressure inside the cylinder
                            t2     C1                                                                                                                                                                    1

     It is recommended to check the negligibility of the leak current      the sinusoidal segment p  corresponds to a half-period and therefore      is increased by a factor of 1/β ; thus, T = T0 β γ −1 .
across the plates of the capacitor. To this end, one can charge a ca-      has a length of T2 = π m/k .                                              iv) According to the modified pumping scheme, the work/energy
pacitor, measure the voltage, remove the voltmeter and wait for                                                                                      loss is only due to the release of the hot air. Note that if we had
some time (of the order t1 and t2 ), and check again the voltage.                                                                                    a cylinder of volume V , we could be able to create vacuum inside
     Another way is to discharge completely one capacitor by                                                                                         there using only one pumping motion, i.e. by performing work
short-circuiting its terminals and charge the other capacitor up to                                                                                  A = p0 V and without any energy loss. Now, we perform an ex-
                                                                                                                                                     cess work, which is converted into internal energy of the released
the voltage of the battery. Further, we connect the terminals A            iii) The speed v(t) = dx  is the derivative of x(t); therefore, the
and B so that the capacitors re-distribute the charge Q = EC1
                                                                                                  dt                                                 hot air, which needs to be calculated. Let ξ = pp0 be an inter-
                                                                           sinusoidal segment of x(t) will correspond to a sinusoidal seg-
and take the same voltage: Q1 /C1 = (Q − Q1 )/C2 ⇒ Q1 =                    ment of v(t), and a straight segment of x(t) — to a horizontal            mediate rarefaction factor; then, we can apply the previous result
QC1 /(C1 + C2 ) = EC12 /(C1 + C2 ). Consequently, the new                  segment of v(t). The resulting graph is depicted below.                   to calculate the internal energy of released air, if its quantity is dν
                                                                                                                                                                             1
voltage (which we measure) is U = Q1 /C1 = EC1 /(C1 +C2 ),                                                                                           moles: dU = T0 (ξ γ −1 − 1)cV dν . Let us note that the num-
from where C2 = ( UE − 1)C1 .                                                                                                                        ber of moles inside the bulb is ν = pRT  0 ξV
                                                                                                                                                                                                 0
                                                                                                                                                                                                    ⇒ dν = RT   p0 V
                                                                                                                                                                                                                    0
                                                                                                                                                                                                                      dξ . So,
5. Plutonium decay (3 points)                                                                                                                                     cV
                                                                                                                                                                     R 1   1
                                                                                                                                                                             −1
                                                                                                                                                     U = p0 V R 0 (ξ γ − 1)dξ = (γ − 1)p0 V R . Now, recall c V

Let the number of Pu239 -atoms be reduced during time interval                                                                                       that γ = cp /cV = 1 + cRV , hence cRV = γ−1       1
                                                                                                                                                                                                           and U = p0 V .
t = 1 s by a factor of 1 − λ (with λ ≪ 1). Then, during the
                                                                                                                                                     This gives us the energy loss due to heating the released air; an-
time period of τ1/2 , it is reduced by a factor of (1 − λ)τ1/2 /t ≈
                                                                                                                                                     other p0 V is required for loss-free creation of the vacuum. Hence,
e−λτ1/2 /t = 12 ⇒ λ = t ln 2/τ1/2 . Therefore, the number of                                                                                         the total required work is A = 2p0 V .
atom decay events is Nd = N t ln 2/τ1/2 , where N = ρdS/m0                                                                                           8. Heat sink (6 points)
is the number of atoms, i.e. the α-particle flux is Φ = Nd /2St            iv) Let the amplitude of the oscillations be A, i.e. the sinusoidal
                                                                                                                                      p              i) When the average temperature is stable at T0 , all the power dis-
(where the factor 2 accounts for the fact that the particles are emit-     segments follow the law ξ(t) = A cos(ωt), where ω = k/m.
                                                                                                                                                     sipated at the electronic component is eventually given to the air:
ted towards the both sides of the plate). Upon bringing all the ex-        Correspondingly, v(t) = Aω sin(ωt) ⇒ A sin(ωt) =
                                                                                                                                                     the air is being heated with power P . As the heat flux depends lin-
pressions together, we obtain                                              v(t)/ω ; hence, for any point at a sinusoidal segment, ξ 2 +
                                                                                                                                                     early on the temperature difference between a point on the plate
                    ρd ln 2                                                v 2 /ω 2 = A2 . At a point, where a sinusoid and a straight line
              Φ=               ≈ 2.36 × 1013 m−2 · s−1 .                                                                                             and the air, the average heat flux and therefore the net power dis-
                                                                           meet, the straight line and sinusoid have equal values for ξ =
                   2τ1/2 m0                                                ξ0 = (µ1 − µ2 )N/k and v = u. Consequently,                               sipated into the air depends linearly on the average temperature of
6. Violin string (9 points)                                                                                                                          the plate. The average temperature determines the radiated power.
                                                                                        (µ1 − µ2 )2 N 2 /k2 + u2 /ω 2 = A2 ⇒
i) When the plate slides, there is a constant friction force µ2 N                               1q                                                        Now consider the situation after the heating has ended. The
acting upon the block, which means that the equilibrium deform-                           A=         (µ1 − µ2 )2 N 2 + u2 mk.                        average temperature is initially the same, so the radiated heat
                                                                                                k                                                    power is initially still P . By the definition of heat capacity, an
ation of the spring is x0 = µ2 N/k ; the net force acting upon the         v) The oscillations will be almost harmonic when the straight seg-
                                                                                                                                                     infinitesimal heat amount given to the surroundings is dQ =
block (due to spring and friction) is given by F = −kξ , where             ments are very short,√i.e. when u/ω ≫ (µ1 − µ2 )N/k ⇒                     −C dTavg with the minus sign encoding the direction of the heat
we have defined ξ = x − x0 . Therefore, while sliding, the block           u ≫ (µ1 − µ2 )N/ mk.
oscillates harmonically around the point ξ = 0. Slipping starts            7. Vacuum bulb (8 points)                                                 flow. Thus, at the first moment, P = dQ    dt
                                                                                                                                                                                                    = −C dTdtavg . Assum-
when the static friction will be unable to keep equilibrium, i.e.          i) Each pumping cycle reduces the number of molecules inside              ing that during τ the average temperature depends approximately
at kx = µ1 N , which corresponds to ξ0 = (µ1 − µ2 )N/k .                   the bulb by a factor of (1 − α); therefore, after N cycles, the           linearly on time (because T0 − T1 = 1 ◦ C is much less than the
                                                                                                                                                                                    dT
If the plate moves slowly, the block is released with essentially          number of molecules (and hence, the pressure) by a factor of              usual ambient temperature), dtavg ≈ T1 −T    τ
                                                                                                                                                                                                    0
                                                                                                                                                                                                      and C ≈ T0P−T    τ
                                                                                                                                                                                                                          1
                                                                                                                                                                                                                            =
missing kinetic energy, and the energy       conservation law yields       β = (1 − α)N ≈ e−N α ⇒                                                             ◦
                                                                                                                                                     350 J/ C. Actually the graph of Tavg (t) is slightly curved down-
1          1
     2           2
                                       p
2
  kξ 0 =   2
             mv  max  ⇒  vmax   =  ξ 0  k/m  .                                                                 ln β                                  wards (as it is an exponential eventually stabilizing at the ambient
ii) As mentioned, when the plate slides, the motion of the block is                                   N =−          .                                temperature) and initially somewhat steeper, so C is a bit smaller.
                                                                                                                α
harmonic, i.e. the graph of x(t) is a segment of a sinusoid; when          ii) Majority of the pumping cycles are done when the pressure in-         ii) The average temperature of the heat sink falls off exponentially,
there is no sliding, the block moves together with the plate, i.e. the     side the bulb is negligible as compared to the outside pressure.          therefore, if the “tail” of the given graph turns out to be expo-
graph of x(t) is a straight line. At the moment when slipping starts       During such a cycle, a work equal to p0 V α is done. Therefore,           nential, we can presume the “tail” depicts the situation where the
or stops, the oscillatory speed is equal to the speed of plate, i.e. the   A ≈ N p0 V α = p0 V | ln β|.                                              sensor is sensing the average temperature and the initial “bump”
in the temperature distribution has evened out. Extrapolating the     but not too much: Tc is exponentially sensitive to the T -intercept
exponential to t = 0 we get the initial average temperature Tavg,0    of the straight line fitted to the “tail” (its crossing point with the
(immediately after the Q has been dissipated into the sink) and,      T -axis) on the logarithmic plot. The bump has still not yet disap-
by Q = C(Tavg,0 − Tamb ), the heat Q. The ambient temper-             peared completely enough.
ature Tamb can be read off from the beginning of the given graph      9. Coefficient of refraction (10 points)
where the sensor’s surroundings have not yet heated up. This is       i) We direct the laser beam radially into the semi-cylinder: per-
furthermore a check for the assumption T0 − T1 ≪ Tamb made            pendicularly through its cylindrical surface. The beam enters the
in the first part of the solution. From the table, Tamb = 20.0 ◦ C.   plate without refraction and reaches the opposing flat face at the
    Let us analyse the (yet hypothetical) exponential Tavg −Tamb      axis of the cylinder. Depending on the angle between that face and
ought to obey, so that eventually we expect T ∼ Tavg =                the beam, there may or may not be a refracting beam, but there is
                 t
Tamb + Tc e− tc where Tc and tc are, respectively, a characteristic   always a reflecting (from the flat face) beam . We rotate the semi-
                                                                      cylinder around its axis to find the position, when the refracting
temperature and a characteristic time. (The “∼” means “is asymp-
                                                                      beam appears/disappears; the angle α between the flat face and
totical to” or “approaches”.) We plot ln(T − Tamb ) using the data
                                                                      the incident beam correspond to the angle of complete internal
from the table. Then approximate the “tail” linearly (valuing the
                                                                      reflection, i.e. n = 1/ cos α. We can measure cos α using the
end of it most) to get ln[(T − Tamb )/◦ C] ∼ 4.89 − 300t s .
                                                                      graph paper: we draw the beam as a segment AO and the flat face
Therefore Tc ≈ e4.89 ◦ C ≈ 133 ◦ C. On the other hand,
                                                                      of the semi-cylinder as a line BO so that 6 ABO = π/2; then,
plugging t = 0 into our exponential function shows that
                                                                      n = |AO|/|BO|. The uncertainty can be found using the for-
Tavg,0 − Tamb = Tc and, finally, Q = CTc ≈ 46 700 J.
                                                                      mula ∆n = n( ∆|AO|  |AO|
                                                                                                 + ∆|BO|
                                                                                                      |BO|
                                                                                                            ) and by estimating the uncer-
                                                                      tainties of the direct length measurements ∆|AO| and ∆|BO|.
                                                                      ii) We drop the liquid on the prism and press it against the flat face
                                                                      of the semi-cylindrical plate. Further we study the complete in-
                                                                      ternal reflection at the boundary between the semi-cylinder and
                                                                      prism (which is filled with the liquid) by repeating the above
                                                                      described experiment. Thereby we measure new lengths A′ O
                                                                      and B ′ O ; the condition of complete internal reflection is now
                                                                      n/nl = |A′ O|/|B ′ O| ⇒ nl = n|B ′ O|/|A′ O|, where nl
                                                                      stands for the coefficient of refraction of the liquid. The uncer-
                                                                                                                      ′           ′
                                                                                                                        O|          O|
                                                                      tainty is now calculated as ∆nl = nl ( ∆|A  |A′ O|
                                                                                                                           + ∆|B
                                                                                                                             |B ′ O|
                                                                                                                                       + ∆n
                                                                                                                                          n
                                                                                                                                            ).



     Actually, quite a good result can be obtained without re-
plotting anything, by just considering the last three datapoints
of the table. Denote ∆Ti ≡ Ti − Tamb . If the times t3 −
t2 = t2 − t1 , then with an exponential we should observe
that ∆T3 /∆T2 = ∆T2 /∆T1 . The last three timepoints are
good indeed, so we check ∆T1 = 4.4 ◦ C, ∆T2 = 2.3 ◦ C
and ∆T3 = 1.2 ◦ C. Their ratios are ∆T3 /∆T2 ≈ 0.522 and
∆T2 /∆T1 ≈ 0.523, a splendid match. This confirms the ex-
ponential “tail”. As in every equal time interval the ∆T is mul-
tiplied by the same number (that is the essence of exponentials),
                                   t t−t
                                        3

Tc = ∆Tavg,0 = ∆T3 × ∆T          2
                               ∆T3
                                      3   2
                                            ≈ 114 ◦ C. From this,
Q ≈ 39 900 J. This is discrepant from our previous calculation,
