---
id: solution-document-nbpho-2007-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2007_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [nbpho-2007-coefficient-friction, nbpho-2007-laser, nbpho-2007-mars, nbpho-2007-pendulum, nbpho-2007-temporal-focusing, nbpho-2007-truck, nbpho-2007-wire]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2007_S.pdf."
---

1. Wire (7 pts)                                                                3) For the changing voltage, we can use the result of the previous ques-     from where
1) Using the Ohm’s law in differential form, E = ρj , and noting that the      tion, but the voltage value should be taken at the moment of electron                                       m
                                                                                                                                                                                              + 1 − µ2 cot β
                                                                                                                                                                                           M
                                                                               passing the gap. Also, the terminal velocity is changed, v1 − v0 is rela-                             µ=               m      .
electric field must be the same both in the core and in the coating, we                                                                                                                   µ2 (cot β + M )−1
conclude jc ρc = ja ρa ⇒ jc = æa ρa /ρc . On the other hand, the net           ted to the change of the kinetic energy e[U (t + ta ) − U (t)]. The travel
current I = π4 [a2 jc + (b2 − a2 )ja ] = π4 ja (b2 − a2 + a2 ρa /ρc ), hence   time of the later electrons passing B at a certain moment of time t > 0      Using the measured values we get µ ≈ 0.2.
          4           I                                                        should as much shorter as it was delayed, i.e.
   ja =                            ≈ 0.15A/mm2 ; jc ≈ 0.25A/mm2 .
                                                                                             r
          π b2 + a2 (ρa − ρc )/ρc                                                                 m
                                                                                  t1 − t2 =            {a[U (0) − U (t)] + b[U (t + ta ) − U (t)]} = t,
2) Writing down the circulation theorem for a circular concentric loop                          8U03 e
of radius c around the straight wire, 2πcB1 = µ0 I , we obtain B1 =            where the flight time ta ≈ a/v0 [since U  U0 ]. Using the suggested         5. Rotating disk (7 pts)
µ0 I/2πc = 2 Ic · 10−7 H·m−1 = 4.8 · 10−5 T .                                  approximation, we obtain
                                                                                                r
3) Using the technique as before, but noting that the current flowing                                 m                                                     1) We notice that there is no image of the orange pulse, hence it must
                                                                                                           b[U (t + a/v0 ) − U (t)]} = t.
through the smaller loop of radius a/2 is Ic = jc π4 a2 , we obtain                                 8U03 e                                                  have taken place immediately before the shutter release. So the blue
B2 = µ0 Ic /πa = µ0 jc a/4 = πjc a · 10−7 H·m−1 = 2.0 · 10−4 T .               If we seek a quadratic solution U (t) = At2 + Bt, we get                     pulse is first, red — the second etc. The exposure time must have been
                                                                                                                                                            triple and quadruple flash interval, 300 ms < t < 500 ms.
                                                                                                                             r
2. Pendulum (7 pts)                                                                                                      t       8U03 e
                                                                                                2Ata (t + ta /2) + Bta =                .
1) The smallness of the oscillations means that the angle of the arc for-                                                b        m                         2) The displacement of the lamp between two subsequent pulses can be
med by the rod is small, α = l/R  1. Therefore, the force returning           So,          r                  r         p                                  represented as the sum of two components: ~ri = ~v τ +2R sin(ωτ /2)~ei ,
the ball is almost horizontal, F = k/R = kα/l, and the horizontal                               8U03 e              8U03 e 2eU0 /m       4U02 e             where each next unit vector ~ei+1 is rotated with respect to the previous
                                                                                       A=              /2ta b =                        =        ,
displacement of the ball is x = R(1 − cos α) ≈ Rα2 /2 = lα/2, hence                               m                  m        ab          mab               one (~ei ) by angle ωτ . So, if the starting points of the displacement vec-
α = 2x/l.                                                                      and B = −Ata . Finally we obtain                                             tors ~ri coincide, then the end-points must be on a circle, at equal angu-
                                                                                                          4U02 e
                                                                                                                                   
    For horizontal equation of motion, we can neglect the gravity force,                                                                                    lar distances ωτ from each other, see figure.
                                                                                                                          p
                                                                                                U (t) =          t t − a m/2U0 e .
which is of the order of mgα  αk/l; the right-hand side here hap-                                        mab
      to be the elastic force. So, mẍ = −kα/l                   2             4) Lost are those electrons, which are in the interval between B and C ,          In our case we redraw the displacement vectors 1, 2 and 3 as vectors
pens p                                       p = −2kx/l , hence                when the voltage drops to 0. The duration of the time interval, when         with common origin, P~A, P~B , and P~C . Since the starting points of the
ω = 2k/m/l; the period T = 2π/ω = πl 2m/k .
                                                                               these werepemitted, is τ = a/v0 . So, the asked fraction is given by         vectors 2R sin(ωτ /2)~ei are brought together to the point O, their end-
2) Elastic energy of the rod depends apparently only on its shape, i.e.
                                                                               τ /T = Ta m/2U0 e.                                                           points lay on the circle, the center of which can be found as the center
on the curvature radius R, or, equivalently, on the binding  R x angle α.                                                                                   of the circle drawn around the triangle ABC .
First, we derive the expression for that energy: Πr = 0 F dx =                 4. Coefficient of friction (12 pts)                                                                                             B
  (2kx/l2 )dx = kx2 /l2 = kα2 /4. This is to be compared with the
R
                                                                               1) This is a straightforward question: we measure the tangent of the
change of the gravitational potential energy Πg = −mg(l − R sin α) =                                                                                                                                   2
                                                                               slope of the board, when the brick starts sliding, µ1 = tan α1 , for the
−mgl(1 − sin α/α) ≈ −mglα2 /6. So, the vertical position is stable, if         given setup, µ1 ≈ 0.24.
kα2 /4 − mglα2 /6 > 0, i.e. 3k > 2mgl.                                         2) We put the ball and brick together on the slope, the ball touching                                                    3
    Remark: a simple-minded force balance of the ball to the direction,        both the brick and board and being upwards on the slope. So, the ball
perpendicular to the rod leads to another result k > mgl. This is not          pushes the brick down and the sliding is expected to take place for so-
correct, because if we bind the rod with a force applied to its tip, small                                                                                            2
                                                                               mewhat smaller sloping angles. For the given setup, that critical angle
displacements of the tip are not perpendicular to the rod (as one might        turns out to give tan β ≈ 0.12.                                                                                             O
think). In particular, this means that if there are both perpendicular              Now we need to express µ knowing µ2 ≈ 0.24 and β =                                               P
force F and tangential tension T in the rod, the curvature radius R will                                                                                     1
                                                                               arctan 0.12. First we write the torque balance for the ball with res-                             1
depend also on the tension T . In our solution, we avoided such kind           pect to the touching pint with the board: mgR sin β = µNR + NR,
of complications by noting that the elastic energy depends only on the                                                                                                          A
                                                                               where N is the pressure force between the ball and the brick. Hence,                                                            3
shape of the rod (if we bind the rod with some force F while keeping                  mg                                                                                  L
                                                                               N = µ+1     sin β .
T = 0, we don’t need to bother about this effect).                                  Now, we use the normal (to the board) force balance for the brick,                                                                 C
3. Temporal focusing (10 pts)                                                  to find the pressure force between the board and the brick: N2 =
                                             p                                 M g cos β + µmg µ+1 sin β . Finally, we have the tangential force balance
1) Apparently, t0 = (a + b)/v0 = (a + b) m/2U0 e.                                                                                                                The velocity of center of the disk is found as the ratio of the
                                                                               for the brick:
2) Apparently, t = a/va + b/vb ≈ t0 − [a(va − v0 ) + b(vb − v0 )]/v02 .                                                                                   length P O and the interval τ : v ≈ 65 cm/s. The angular velocity
                                                                                      mg                                             µm
On the other hand, for constant voltage U (t), vb = v0 . For the interval                    sin β + M g sin β = µ2 g M cos β +             sin β .         is found as the ratio of the angle 6 AOB = 6 BOC and the inter-
                                                                                     µ+1                                            µ+1
between B and C , we have ∆(mv 2 /2) ≈ mv0 (va − v0 ) = −U e. So,                                                                                           val τ : ω ≈ 23 rad/s. Radius of the disk is found from the length
                                                r                              This equation can be simplified to
                                           U a      m                                          m                                     m                      |OA| = 2R sin(ωτ /2) = 2R sin 6 BOC ≈ 1.5R; using the scale of
             t = t0 + U ea/mv03 = t0 +
                                                                                                                  h                     i
                                                          .                                        + µ + 1 = µ2 (µ + 1) cot β + µ         ,
                                          U0 2 2U0 e                                           M                                     M                      the figure, 1.5R ≈ 8 cm and R ≈ 5 cm.
6. Truck (7 pts)                                                               the observed data. First, the diffraction pattern is not where the reflec-
1) First, since l is small, T1 ≈ T . From the radial force balance, N ≈        tion form the stripe would be; so, it doesn’t work as a reflecting diffrac-
T α = T l/R, where α is the angle, by which the direction of the rope is       tion grating. If the packing were regular, and the optical path difference
changed. From the tangential balance, T1 = T − µN = T (1 − µα).                (required for the diffraction) were gathered due to scattering on neig-
2) If the angle is not small, we divide the touching segment into M            hboring spheres, there would be a pattern, characteristic to diffraction
small segments and use the previous result: Ti+1 = Ti (1 − µα/M ). So,         on crystal lattices (regularly positioned spots). If the optical path diffe-
TM = T (1 − µα/M )M → T e−µα (as M → ∞). So, T 0 = T e−µl/R .                  rence were gathered due to scattering on neighboring spheres, with ir-
3) Using the previous formula and the provided numerical values (α =           regular packing, the path difference would be random, and hence, the
2π ), we obtain                                                                diffraction pattern would be also random. This would not explain the
                       T = M g sin φe−µα ≈ 800 N.                              regular circular pattern.
4) If we re-examine the solution to the second question, we notice that             On the other hand, if the optical path difference were gathered on
we haven’t used the assumption of cylindrical shape. What matters, is          a single sphere, the pattern would be axially symmetric, as is the sphere
just the rotation angle of the tangent to the rope. So, the answer does        itself. So, this fits well with all the experimental observations (except
not change for egg-like cross-section.                                         for slight elongation of the circles for large incidence angles, which may,
                                                                               perhaps, be explained by the refraction in the coating layer).
7. To the Mars (10 pts)                                                             On a single sphere, the light is reflected partially back on the front
1) Apparently v12 = v02 − 2gR0 .                                               surface, and partially refracts into the sphere, reflects internally and ref-
2) The trajectory is ellipse touching Earth orbit at its perihelion and        racts back into the air (in our rough analysis, we neglect multiple partial
Mars orbit at its apohelion..                                                  reflections). For beams falling close to the axes of the sphere, the out-
3) According to the Kepler’s third law, the time T = 21 T0 (a/Re )3/2 ,        going beams are reflected almost in the opposite direction. So, in its
where T0 = 1 year is the period of Earth and a = (Re + Rm )/2 is the           central part, the sphere acts almost like a reflecting disk.
longer semi-axes of the trajectory. Numerically, T = 0, 70 years.                   In our very rough model, we substitute the spheres by disks of app-
4) The full energy (kinetic plus potential) of the space ship is E =           roximately the same diameter as the spheres, oriented perpendicularly
−Gm/2a = −Gm/(Re + Rm ) = −Gm/Re + m                  2
                                                        (v1 + ve )2 . So,      to the incident beam. Then, all the microspheres provide maxima and
 1           2         Rm           2  Rm                                      minima in the same directions.
 2 (v1 + ve ) = G Re (Re +Rm ) = ve Re +Rm and
                   r                  !                                        3) We measure the diameter of the first dark ring d ≈ 1.1 cm, and the
                         2Rm                                                   distance between the laser and the strip l ≈ 80 cm. Then, the diameter
       v1 = ve                 −1         ≈ 0.095ve ≈ 2.86 km/s.
                       Re + Rm                                                 of the spheres can be estimated as the diameter of the effective light-
               √                                                               reflecting disk, D ≈ λl/d ≈ 50 µm.
Hence, v0 = 11.22 + 2.862 = 11.6 km/s.
     The relative speed near the Mars can be written using the approp-
riate change of indices in the expression for v1 (alternatively, it can be
found analogously to v1 ):
     we first find the speed with respect to Sun from the expression of
the total energy: v3 =
             r                  !                r
                   2Re                               Re
 v3 = vm                 −1         ≈ −0.106ve          ≈ −2.59 km/s.
                 Re + Rm                             Rm
5) Apparently Mi = mevi /u , so that Ma /Mb = e(va −vb )/u = e0.4 ≈
1.5.
8. Laser (12 pts)
1) These are concentric circles reflected back towards the laser. They
can be seen, if laser light is directed through the hole in the paper and
the paper is used as the screen. The position and size of the circles is in-
dependent of the incidence angle (for large incidence angles, the circles
     will be somewhat elongated along the direction of slanting).
2) The exact calculation of the diffraction pattern on such microspheres
is very difficult task, evidently beyond the possibilities of an olympiad
problem. So, we have to work as a detective, drawing conclusions from
