---
id: solution-document-nbpho-2009-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2009_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [nbpho-2009-boat, nbpho-2009-magnetic-pulse, nbpho-2009-nanoclock, nbpho-2009-pencil, nbpho-2009-soap-film, nbpho-2009-spring]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2009_S.pdf."
---

Estonian-Finnish Olympiad - 2009                                         field E =≈ kQz/R3 ). Hence there must be field lines entering            triangular connection,
1. Boat (9 points)                                                       the cylinder through its side surface. This implies a radial repelling                               R3     V12
                                                                         force for an electron situated at that surface, i.e. instability.                                        =      ,
i) From the Newton II law, m dv    dt
                                       + α dx
                                            dt
                                               = 0. Multiplying this                                                                                                          R1     V23
equation by dt, we obtain dv + m        α
                                           dx = 0. Integrating (i.e.          Remark: In the same way, one can prove a theorem,                   where Ri denotes the resistor farthest away from the i-th outlet;
summing over all the small increments dx and dv ) this equation          electrostatic equlibria are always unstable.                             for a triangular connection,
leads us to                                                              3. Ball (8 points) A straightforward way to solve parts i), ii),             In such a way we find
                               α                                         and iii) is to use conservation of angular momentum with respect
                         v + x = Const,                                                                                                                        R3           R3              R2
                               m                                         to any axis laying on the surface (there is no torque with respect                        ≈ 4,7,       ≈ 3,3, and      ≈ 1,4,
i.e. k = m α
             .                                                                                                                                                 R1           R2              R1
                                                                         to these axes). Angular momentum at the beginning: L0 =                  implying R1 = 100 Ω, R2 = 140 Ω and R3 = 470 Ω; or
ii) We proceed in the same way as before, but we need to add the
                                                                         mvr . Rolling ball is always rotating around the touching point
interaction force between the boat and the boy: m dv        + α dx  =                                                                                          R1           R2              R1
     du
                                                         dt      dt      with the ground (although the location of that point is constantly                        ≈ 4,7,       ≈ 3,3, and      ≈ 1,4,
M dt . [Note that since the right-hand-side of this equation is          changing). From Steiner’s theorem we know that for a rotation                         R3           R3              R2
the interaction force, it goes to zero, if the boy leaves the boat.      axis that is located at the distance r form the center of mass, the      R3 = 100 Ω, R2 = 330 Ω and R1 = 470 Ω. So, we can
Therefore, if we want to keep this equation correct even after the       moment of inertia is I ′ = I + mr 2 . Therefore the angular              conclude that the largest resistance is 470 Ω, and the middle-
boy leaves the boat at the moment of time t = t∗ , we must assume        momentum for rotating ball is L′ = I ′ ω and clearly L0 = L′ ,           valued resistance is either 330 Ω or 140 Ω.
u(t) ≡ u(t∗ ) for t > t∗ .] Similarly to the previous section, we        therefore mvr = (I + mr 2 )ω, ω = I+mr        mvr
                                                                                                                             2.
obtain
                        M              α                                 i) The torque with respect to center of mass: M = mgµr . Since
                    v+      u(t) + x = Const.                            M ∆t = I∆ω , and the sliding stops when angular speed has
                         m            m                                                                                                    Iω
iii) We use the conservation law of the previous section, and            reached value ω , we obtain the corresponding time: t = mgµr         =
compare the value of the left-hand-side immediately before the                Iv
                                                                                      .
                                                                         gµ(I+mr 2 )
boy lands into the boat with its value after a very long time.                                  mvr
Bearing in mind that we need to substitute u(t → ∞) = −u2                ii) Clearly, ω∗ =     I+mr 2
                                                                                                       and E∗ = 12 (mv∗2 + Iω∗2 ) =
                                                                                                   2 2 2
                                                                         1                       m v r
(see above), we obtain                                                   2
                                                                           (mr 2 ω∗2 + Iω∗2 ) = 2(I+mr 2 ) . If I increases then E∗ decreases.

                     M                     M        α                    iii) Since we didn’t make any assumptions about the functional
                 0+     u1 + 0 = 0 −          u2 + s.
                      m                    m        m                    form of µ while deriving w∗ , the results w∗ and E∗ of ii) are still
So,                                                                      valid.
                               M
                         s=        (u1 + u2 ),                           iv) The net force F = Fµ +Fr causes the decrease of translational
                                α                                        velocity: m∆v = F ∆t, v ′ (t) = v − (µ + µr )gt. The sliding
i.e. the result is independent of how long time did the boy spend
in the boat.                                                             stops when ω(t) = v ′ (t)/r . Note that the torque with respect to
2. Nanoclock (10 points)                                                 center of mass is only caused by kinetic frictional force, therefore
i) All the√charges of the ring are at the same distance from the point   ω(t) = mgµrI
                                                                                        t. We get an equation for the time of the termination
                                                                                          2

P , l = R2 + z 2 . So, according to the superposition principle,         of sliding: mgµr
                                                                                       I
                                                                                          t = v − (µ + µr )gt, t = gµ(I+mrIv2 )+gµr I .
                                                                                                                   mvr
the potential is the sum of potential of all the charges,                The corresponding angular speed ω∗′′ = I+mr 2 + µr I , and energy
                                    √                                                                                         µ

                        ϕ = kQ/ R2 + z 2 .                               E∗ ′′ = 12 (I + mr 2 )ω∗2 . Clearly, E∗ ′′ < E∗ .
ii) E = − dϕ   dz
                  = kQz/(R2 + z 2 )3/2 .                                 4. Black box (9 points) Independetly of whether there is a
iii) For |z| ≪ R we may approximate (R2 + z 2 )3/2 ≈ R3 , so             triangular or a star connection, one can measure the ratio of the
that E =≈ kQz/R3 .                                                       resistances a pair of resistors by connecting the battery to two
                                                         3       2       outlets — let these be the outlets 1 and 3, and measuring the
iv) From the Newton II law,  q mz̈ = −ekQz/R , i.e. ω =                  voltages between the outlets 1 and 2, and between the outlets 2
                        1     ekQ
ekQ/mR3 and f = 2πR           mR
                                  ≈ 5.6 × 1012 Hz.                       and 3. For a star connection,
v) At the origin, there are no charges; hence, the electric field
                                                                                                      R3      V23
lines cannot neither start nor end there. Consider a tiny coaxial                                         =        ,
cylinder embracing the origin. The field lines exit the cylinder                                      R1      V12
through its bottom and top surfaces (because there is an electric        where Ri denotes the resistor closest to the i-th outlet; for a


                                                                                                                                                                                                      m
5. Pencil (6 points) We put the pencil with its graphite end against      RC and LC cirquits are τ1 = R1 C = 0.6 s and τ2 = L/R2 ≈                 horisontal velocity v ′ = vh + u = vh (1 + M          ). Since the
a horizontal sheet of paper, and push the other end with a fingertip      0.3 s. So, for both cirquits, the processes are very fast, i.e. the      block is sliding down the wedge, the vertical component of the
(without holding between the fingers and thereby possibly giving          capacitor is effectively short-circuited, and almost all the voltage     block has to be v↓ = v ′ tan α. The total kinetic energy in the lab
a torque to it). Then, there will be a purely longitudinal stress         falls on the inductance.                                                 frame EK = 12 (M u2 + mvh2 + mv↓2 ). Substituting the relevant
inside the pencil (there is no bending of the pencil). If we push         i) According to the considerations given above, I1 = U/R1 ≈              quantities and simplifying, we obtain
strongly enough, we may neglect the weight of the pancil in the           0.33 A. As for I2 , it starts growing from 0 A at t = 0 at a rate,                      m                       M
balance of torque with respect to the fingertip. So, equilibrium          given by L dI    = U , i.e. I2 = U t1 /L = 5 mA.                                 Ek = v↓2 β, where β ≡                  cot2 α + 1.
                                                                                       dt                                                                         2                     M +m
implies that the resultant force of the friction and reaction forces at   ii) When the voltage U is switched off (at t = τ = 10 ms),                   The kinetic energy equals to the change in potential energy:
the graphite end are along the axis of the pencil. This is possible, if   the capacitor will (almost completely, because t2 − τ ≪ R1 C )           m
                                                                                                                                                      βv 2                          ′
                                                                                                                                                    2    ↓ = ∆EP = mg(h − h ). By differentiating and noting
tan α ≤ µ, where α is the angle between the pencil and a vertical         retain the charge it has accumulated, Q = I1 τ . All the voltage         that dh = dt · v↓ , we get βdv↓ = gdt, t = βg v↓max . From the
line. So, we increase α wile pushing the pencil, and determine            of the capacitor (Q/C ) will fall on the resistor R1 , so that I1′ =                                                              q
the position α0 , when the√pencil starts sliding; tan α0 can be           Q/R1 C = U τ /R12 C ≈ 5.6 mA. As for the inductance, it will             above written energy conservation law we get v↓max = 2gh     β
                                                                                                                                                                                                                  ; so
calculated as tan α0 = x/ l2 − x2 , where l is the length of the          retain (almost completely, because t2 − τ ≪ L/R2 ) the current                                q        r
pencil, and x is the length of the projection of the pencil onto a        it has acquired during the first 10 ms, I2′ = U τ /L = 10 mA.            we finally have t = 2βh  g
                                                                                                                                                                               = 2h   g
                                                                                                                                                                                          M
                                                                                                                                                                                         M+m
                                                                                                                                                                                                cot2 α + 1 .
horizontal plane.                                                         iii) Since the current in R2 will decay very slowly, as compared
6. Spring (7 points) First, we measure the lengthening of the             to its growth during the first 10 ms, we can neglect the charge
spring under its own weight. The relative lengthening of each loop        passing thorugh it during t < τ . Then we can write the Kirhoff ’s
is propotional to the order number of the loop. So, the average           law in the form L dI  +R2 dq     = 0, from where LdI +R2 dq = 0,
                                                                                             dt         dt
value of those legth increments is half of the largest increment (for     and L∆I = −R2 ∆q . Since ∆I = −I2′ , we obtain ∆q =
the topmost loop). The topmost loop is deformed by the weight             LI2′ /R2 = 3.3 mC.
of the whole spring, hence the average deformation corresponds            9. Stratostat (5 points)
to the half-weight of the spring,
                                                                          i) Consider the pressure difference at heights z + dz and z : dp =
                           kx1 = mg/2.                                    −ρgdz (the difference is simply due to the weight of the layer
Now we add a load to the lower end of the spring and measure              dz ). The density can be found using the state equation of ideal
the new deformation x2 . Since the additional weight of the load          gas: pV = m       RT, ρ = m        = RT µp
                                                                                                                     . Therefore p1 dp      µg
                                                                                                                                       = − RT  .
                                                                                          µ                V                        dz
increases the stress of all the loops by the same value M g , each
loop is deformed additionally by the same length increment. The           Note that we have a derivative of a logarithm: p1 dp
                                                                                                                             dz
                                                                                                                                 = d lndzp(z) .
                                                                                                                                       µg
sum of those additional increments is x2 − x1 ; according to the          Therefore ln(p/p0 ) = −αz, p = p0 e−αz , where α = RT            .
Hook’s law, k(x2 − x1 ) = M g . So, xx12 − 1 = 2M      m
                                                         , and                 Alternatively, we can derive this law from the Boltzmann
                             m x2 − x1                                    distribution for the particle density n = n0 e−U/kT , where U
                     M=                    ≈ 6 g.                         is the potential energy of a molecule. Bearing in mind that for a
                             2     x1
7. Soap film (6 points) Suppose the area of a broken part of the          constant temperature, the pressure is propotional to the density,
soap film is S . The corresponding surface energy is ES = 2σS .           we obtain p = p0 e−U/kT . Substituting U = mgz = NµA gz and
The mass of the soap water that was previously located at the             R = kNA , we obtain the same result as above.
broken part is m = Shρ, where ρ = 103 kg/m3 . Assuming                    ii) Clearly, the pressures inside and outside of the stratostat are
that the surface energy is transformed to the kinetic energy of           equal and depending on the height as p = p0 e−αz , where
the moving front, we get an equation for the speed of the                 α = µRT   ag
                                                                                       . For helium inside the sack pV = const. Let the
                                                              q front:
                                                                          volume of the stratostat be VS , therefore p0 βVS = pVS , where
2σS = 12 mv 2 , 4σS = Shρv 2 . Therefore v =                    4σ
                                                                hρ
                                                                     =
                                                                          p is the pressure at the height, where helium has filled the entire
    4 · 0.025
q
   10−6 · 103
              m/s = 10m/s and we can estimate the time of                 volume. Since p = βp0 , we obtain µRT    ag
                                                                                                                      h = − ln β, h =
                                                                           RT      1
breakup of the soap film to be t = D/v = 100      1
                                                    s.                    µa g
                                                                               ln β , h = 17 km.
8. Magnetic pulse (7 points) Since we can neglect the inductance          10. Wedge (5 points) The center of mass of the system doesn’t
of the coil, it performes as a voltage source, which outputs U =          move, therefore M u = mvh , where u and vh are the horisontal
N SB/τ = 1 V during the time period between t = 0 ms and                  components of the velocities of the wedge and block in the lab
10 ms, and 0 V otherwise. The characteristic time scales of the           frame at some instant of time. In the wedge’s frame, the block has
