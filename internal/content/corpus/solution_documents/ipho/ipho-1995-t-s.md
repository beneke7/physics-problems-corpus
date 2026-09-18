---
id: solution-document-ipho-1995-t-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1995_T_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-1995-t-q1, ipho-1995-t-q2, ipho-1995-t-q3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/1995_T_S.pdf."
---

Solutions to Theoretical Question 1
Gravitational Red Shift and the Measurement of Stellar Mass
 (a)
                                                                                                      hf
       If a photon has an eﬀective inertial mass m determined by its energy then mc2 = hf or m =         .
                                                                                                      c2
       Now, assume that gravitational mass = inertial mass, and consider a photon of energy hf (mass
            hf
       m = 2 ) emitted upwards at a distance r from the centre of the star. It will lose energy on escape
            c
       from the gravitational field of the star.
       Apply the principle of conservation of energy:
       Change in photon energy (hfi − hff ) = change in gravitational energy, where subscript i →
       initial state and subscript f → final state.
                                                                    !         "
                                                      GM mf             GM mi
                                     hfi − hff = −               − −
                                                          ∞               r
                                                           GM mi
                                           hff = hfi −
                                                               r
                                                           GM hf  c2
                                                                    i

                                           hff = hfi −
                                                        !      r "
                                                               GM
                                           hff = hfi 1 −
                                                               rc2
                                                    !           "
                                            ff            GM
                                                 =   1−
                                            fi             rc2
                                           ∆f       ff − fi         GM
                                                 =           =− 2
                                            f          fi            rc
       The negative sign shows red-shift, i.e. a decrease in f , and an increase in wavelength.
       Thus, for a photon emitted from the surface of a star of radius R, we have


                                                      ∆f   GM
                                                         =
                                                       f   Rc2

       Since the change in photon energy is small, (δf ≪ f ),
                                                                 hfi
                                                    mf ≃ m i =       .
                                                                 c2

 (b)
       The change in photon energy in ascending from ri to rf is given by
                                                         GM mf       GM mi
                                      hfi − hff       = −        +
                                                            rf         ri
                                                               !           "
                                                        GM hfi 1        1
                                                      ≃              −
                                                          c2     ri    rf
                                                                !           "
                                               ff          GM 1          1
                                           ∴          = 1− 2         −
                                               fi            c    ri    rf

       In the experiment, R is the radius of the star, d is the distance from the surface of the star to the
       spacecraft and the above equation becomes:
                                                          !            "
                                          ff        GM 1            1
                                              =1− 2           −                                          (1)
                                          fi          c     R R+d
       The frequency of the photon must be doppler shifted back from ff to fi in order to cause resonance
       excitation of the He+ ions in the spacecraft.
       Thus apply the relativistic Doppler principle to obtain:
                                                        #
                                                  f′      1+β
                                                     =
                                                  ff      1−β


where f ′ is the frequency as received by He+ ions in the spacecraft, and β = v/c.
That is, the gravitationally reduced frequency ff has been increased to f ′ because of the velocity
of the ions on the spacecraft towards the star. Since β ≪ 1,
                                   ff           1          1
                                      = (1 − β) 2 (1 + β)− 2 ≃ 1 − β
                                   f′
Alternatively, since β ≪ 1, use the classical Doppler eﬀect directly.
Thus
                                                    ff
                                              f′ =
                                                   1−β
or
                                              ff
                                                 =1−β
                                              f′
Since f ′ must be equal to fi for resonance absorption, we have
                                              ff
                                                 =1−β                                             (2)
                                              fi
Substitution of 2 into 1 gives                      $                 %
                                             GM         1   1
                                        β=                −                                       (3)
                                              c2        R R+d
Given the experimental data, we look for an eﬀective graphical solution. That is, we require a linear
equation linking the experimental data in β and d.
Rewrite equation 3:                            !            "
                                          GM R\ + d − R\
                                     β= 2
                                            c    (R + d)R
Inverting the equation gives:
                                                  Rc2
                                              $           %!          "
                                        1                      R
                                          =                      +1
                                        β         GM           d
or

                                                  R2 c2           Rc2
                                              $           %
                                        1                     1
                                          =                     +
                                        β         GM          d GM

           1     1
Graph of     vs.
           β     d


               1
               β
                                                                                  2 2
                                                                          slope = R c = R α
                                                                                 GM




                     intercept = Rc = α
                                    2
                                GM

                                                                                        1
                                                                                        d



                                                 Rc2
                                                    $%
                                   The slope is        R = αR                                    (A)
                                                 GM
                                                   $ 2%
                                     1               Rc
                                 The -intercept is        =α                                     (B)
                                     β              GM
                                             1              1
                                    and the -intercept is −                                      (C)
                                             d              R


      R and M can be conveniently determined from (A) and (B). Equation (C) is redundant. However,
      it may be used as an (inaccurate) check if needed.
      From the given data:

                                                R = 1.11 × 108 m
                                               M = 5.2 × 103 0 kg



                                From the graph, the slope αR = 3.2 × 1012 m                         (A)
                                          1                Rc2
                                     The -intercept α =        = 0.29 × 105                         (B)
                                          β                GM
      Dividing (A) by (B)
                                          3.2 × 1012 m
                                        R=              ≃ 1.104 × 108 m
                                            0.29 × 105
      Substituting this value of R back into (B) gives:

                                            Rc2   (1.104 × 108 ) × (3.0 × 108 )2
                                      M=        =
                                            gα    (6.7 × 10−11 ) × (0.29 ×1 05 )

      or M = 5.11 × 1030 kg
(c)


       (i)


                      Atom before the decay          Atom and photon after the decay


                                                                  + hf
                                   m0                    m ’0

                                                     hf
             For the photon, photon momentum is p =      and photon energy is E = hf .
                                                      c
                                                    2
             Use the mass-energy equivalence, E = mc , to relate the internal energy change of the atom
             to the rest-mass change. Thus:
                                                ∆E = (m0 = m′0 ) c2                                  (1)
             In the laboratory frame of reference the energy before emission is

                                                        E = m0 c2                                    (2)

             Recalling the relativistic relation
                                                    E 2 = p2 c2 + m20 c4
             The energy after emission of a photon is
                                                   &
                                              E = p2 c2 + m′0 2 c4 + hf                              (3)

             where also p = hf /c by conservation of momentum.
             Conservation of energy requires that (2) = (3), so that:
                                                       (2
                                            m0 c2 − hf = (hf )2 + m20 c4
                                          '
                                                    (2
                                               m0 c2 − 2hf m0 c2 = m20 c4
                                             '

             Carrying out the algebra and using equation (1):

                                        hf (2m0 c2 ) = (m20 − m′0 2 )c4
                                                     = (m0 − m′0 )c2 (m0 + m′0 )c2
                                                     = ∆E[2m0 − (m0 − m′0 )]c2
                                                     = ∆E[2m0 c2 − ∆E]


                                                        !           "
                                                         ∆E
                                            hf = ∆E 1 −
                                                        2m0 c2

(ii)
       For the emitted photon,                    !           "
                                                        ∆E
                                           hf = ∆E 1 −          .
                                                       2m0 c2
       If relativistic eﬀects are ignored, then

                                                    hf0 = ∆E .
                                                  ∆f
       Hence the relativistic frequency shift        is given by
                                                  f0
                                                    ∆f    ∆E
                                                       =
                                                    f0   2m0 c2

       For He+ transition (n = 2 → 1), applying Bohr theory to the hydrogen-like helium ion gives:
                                                  !         "
                                                    1     1
                                 ∆E = 13.6 × 22 × 2 − 2 = 40.8 ev
                                                    1    2

       Also, m0 c2 = 3.752 × 106 eV. Therefore the frequency shift due to the recoil gives
                                                ∆f
                                                   ≃ 5.44 × 10−12
                                                f0
                                                                        ∆f
       This is very small compared to the gravitational red-shift of       ∼ 10−5 , and may be ignored
                                                                         f
       in the gravitational red-shift experiment.


Solutions to Theoretical Question 2
 (a)
       Snell’s Law may be expressed as
                                                       sin θ    c
                                                             =    ,                                          (1)
                                                      sin θ0   c0
       where c is the speed of sound.
       Consider some element of ray path ds and treat this as, locally, an arc of a circle of radius R.
       Note that R may take up any value between 0 and ∞. Consider a ray component which is initially
       directed upward from S.

                                            θ
                                       dz                      R
                                                  ds

                                                                dθ
                                                       R


                                       ds
       In the diagram, ds = Rdθ, or       = R.
                                       dθ

       From equation (1), for a small change in speed dc,

                                                              sin θ0
                                                  cos θdθ =          dc
                                                                c0
       For the upwardly directed ray c = c0 + bz so dc = bdz and
                               sin θ0                               c0 1
                                      b dz = cos θdθ , hence dz =          cos θ dθ .
                                 c0                               sin θ0 b

       We may also write (here treating ds as straight) dz = ds cos θ. So
                                                             c0 1
                                                   ds =             dθ
                                                           sin θ0 b
       Hence
                                                 ds       c0 1
                                                    =R=          .
                                                 dθ     sin θ0 b
       This result strictly applies to the small arc segments ds. Note that from equation (1), however, it
       also applies for all θ, i.e. for all points along the trajectory, which therefore forms an arc of a circle
       with radius R until the ray enters the region z < 0.

(b)


                                   z = zS

                                            θ0
                                    z= 0
                                                 θ0
                                                   R                  R sin θ0


      Here

                                          zs     = R − R sin θ0
                                                 = R(1 − sin θ0 )
                                                      c0
                                                 =          (1 − sin θ0 ) ,
                                                   b sin θ0
      from which                                               !              "
                                                          −1          c0
                                               θ0 = sin                           .
                                                                   bzs + c0

(c)



                                   θ0

                               S                                                      H
                                                                                      x= X
                                        R                               R
                              x= 0

      The simplest pathway between S and H is a single arc of a circle passing through S and H. For
      this pathway:
                                                2c0 cos θ0    2c0
                                X = 2R cos θ0 =            =      cot θ0 .
                                                 b sin θ0      b
      Hence
                                                                    bX
                                                    cot θ0 =            .
                                                                    2c0
      The next possibility consists of two circular arcs linked as shown.


                              S                                                          H
                              x= 0                                                    x= X

      For this pathway:
                                          X               2c0
                                            = 2R cos θ0 =     cot θ0 .
                                          2                b
      i.e.
                                                                    bX
                                                    cot θ0 =            .
                                                                    4c0
      In general, for values of θ0 < π2 , rays emerging from S will reach H in n arcs for launch angles given
      by                                              !      "         !     "
                                                   −1    bX          −1 2nc0
                                          θ0 = cot             = tan
                                                        2nc0             bX
      where n = 1, 2, 3, 4, . . .
      Note that when n = ∞, θ0 = π2 as expected for the axial ray.

(d)
      With the values cited, the four smallest values of launch angle are

                                                   n      θ0 (degrees)
                                                   1          86.19
                                                   2          88.09
                                                   3          88.73
                                                   4          89.04


(e)
      The ray path associated with the smallest launch angle consists of a single arc as shown:

                                                             2
                                1                                                      3
                                  S                                                    H

      We seek                                          ) 3          ) 3
                                                                            ds
                                                             dt =
                                                        1              1     c

      Try first:
                                                       ) 2             ) π/2
                                                             ds                  Rdθ
                                               t12 =            =
                                                        1     c            θ0     c

      Using
                                                                    c
                                                        R=
                                                                 b sin θ
      gives
                                                                 ) π/2
                                                        1                    dθ
                                                  t12 =
                                                        b         θ0        sin θ
      so that                                    !         "π/2
                                               1         θ         1       θ0
                                       t12 =      ln tan        = − ln tan
                                               b         2 θ0      b       2
      Noting that t13 = 2t12 gives
                                                          2       θ0
                                                 t13 = − ln tan       .
                                                          b       2
      For the specified b, this gives a transit time for the smallest value of launch angle cited in the answer
      to part (d), of
                                                     t13 = 6.6546 s
      The axial ray will have travel time given by
                                                                    X
                                                             t=
                                                                    c0
      For the conditions given,
                                                       t13 = 6.6666 s
      thus this axial ray travels slower than the example cited for n = 1, thus the n = 1 ray will arrive
      first.


Solutions to Theoretical Question 3
 (a)
       The mass of the rod is given equal to the mass of the cylinder M which itself is πa 2 ld. Thus the
       total mass equals 2M = 2πa2 ld. The mass of the displaced water is surely less than πa2 lρ (when
       the buoy is on the verge of sinking). Using Archimedes’ principle, we may at the very least expect
       that
                                           2πa2 ld < πa2 lρ or d < ρ/2
       In fact, with the floating angle α (< π) as drawn, the volume of displaced water is obtained by
       geometry:




                                                a              a
                                                     α   α




                                                    2a




                                            V = la2 α − la2 sin α cos α .
       By Archimedes’ principle, the mass of the buoy equals the mass of displaced water. Therefore,
       2πa2 ld = la2 ρ(α − sin α cos α), i.e. α is determined by the relation
                                             α − sin α cos α = 2dπ/ρ .

(b)
       If the cylinder is depressed a small distance z vertically from equilibrium, the nett upward restoring
       force is the weight of the extra water displaced or gρ.2a sin α.lz, directed oppositely to z. This is
       characteristic of simple harmonic motion and hence the Newtonian equation of motion of the buoy
       is (upon taking account of the extra factor 1/3)




                                                    2a sin α
                                                         z




                                                                   3ρg sin α
                                8M z̈/3 = −2ρglza sin α or z̈ +              z=0 ,
                                                                     4πda
       and this is the standard sinusoidal oscillator equation (like a simple pendulum). The solution is of
       the type z = sin(ωz t), with the angular frequency
                                         *               #
                                            3ρg sin α            3g sin α
                                    ωz =               =                       ,
                                              4πda         2a(α − cos α sin α)

       where we have used the relation worked out at the end of the first part.


(c)

      Without regard to the torque and only paying heed to vertical forces, if the buoy is swung by some
      angle so that its weight is supported by the nett pressure of the water outside, the volume of water
      displaced is the same as in equilibrium. Thus the centre of buoyancy remains at the same distance
      from the centre of the cylinder. Consequently we deduce that the buoyancy arc is an arc of a circle
      centred at the middle of the cylinder. In other words, the metacentre M of the swinging motion is
      just the centre of the cylinder. In fact the question assumes this.
      We should also notice that the centre of mass G of the buoy is at the point where the rod touches the
      cylinder, since the masses of rod and cylinder each equal M . Of course the cylinder will experience
      a nett torque when the rod is inclined to the vertical. To find the period of swing, we first need to
      determine the moment of inertia of the solid cylinder about the central axis; this is just like a disc
      about the centre. Thus if M is the cylinder mass

                                                            2Mg



                                                            M



                                                   G


                                                           2Mg
                                                     θ



                                            $ ) a         ) a               %
                                I0 = M a2 /2 =    r2 dm =     r2 .2M r dr/a
                                                       0          0

      The next step is to find the moment of inertia of the rod about its middle,
                                       ) a
                              Irod =         (M dx/2a).x2 = [M x3 /6a]a−a = M a2 /3 .
                                        −a

      Finally, use the parallel axis theorem to find the moment of inertia of the buoy (cylinder + rod)
      about the metacentre M ,

                                IM = M a2 /2 + [M a2 /3 + M (2a)2 ] = 29M a2 /6 .

      (In this part we are neglecting the small horizontal motion of the bentre of mass; the water is the
      only agent which can supply this force!) When the buoy swings by an angle θ about equilibrium the
      restoring torque is 2M ga sin θ ≃ 2M gaθ for small angles, which represents simple harmonic motion
      (like simple pendulum). Therefore the Newtonian rotational equation of motion is
                                                                      12g
                                       IM θ̈ ≃ −2M gaθ , or θ̈ +          =0.
                                                                      29a

      The solution is a sinusoidal function, θ ∝ sin(ωθ t), with angular frequency
                                                     &
                                                ωθ = 12g/29a .

(d)

      The accelerometer measurements give

                               Tθ /Tz ≃ 1.5 or (ωz /ωθ )2 ≃ 9/4 ≃ 2.25 . Hence


                                                3g sin α       29a
                                  2.25 =                           ,
                                           2a(α − sin α cos α) 12g

producing the (transcendental) equation

                                   α − sin α cos α ≃ 1.61 sin α .

Since 1.61 is not far from 1.57 we have discovered that a physically acceptable solution is α ≃ π/2,
which was to be shown. (In fact a more accurate solution to the above transcendental equation
can be found numerically to be α = 1.591.) Setting alpha = π/2 hereafter, to simplify the algebra,
ωz2 = 3g/πa and 4d/ρ = 1 to a good approximation. Since the vertical period is 1.0 sec,

                                   1.0 = (2π/ωz )2 = 4π 3 a/3g ,

giving the radius a = 3 × 9.8/4π 3 = .237 m.
We can now work out the mass of the buoy (in SI units),

               2M = 2πa2 ld = 2πa2.a.ρ/4 = πa3 ρ/2 = π × 500 × (.237)3 ≃ 20.9 kg .


Solutions to Original Theoretical Question 3
 (a)
       Choose a frame where z is along the normal to the mirror and the light rays define the x–z plane.
       For convenience, recording the energy-momentum in the four-vector form, (px , py , pz , E/c), the
       initial photon has
                                          Pi = (p sin θi , 0, p cos θi , p)
       where p = Ei /c = hfi /c.

                                                            u

                                                     θi θr


                                          fi                           fr
       By the given Lorentz transformation rules, in the moving mirror frame the energy-momentum of
       the incident photon reads
                                     +                                              ,
                                                   p cos θi − up/c p − up cos θi /c
                            Pmirror = p sin θi , 0, &             , &                 .
                                                       1 − u2 /c2     1 − u2 /c2
       Assuming the collision is elastic in that frame, the reflected photon has energy-momentum,
                                      +                                              ,
                             ′                     −p cos θi + up/c p − up cos θi /c
                           Pmirror = p sin θi , 0, &                , &                .
                                                       1 − u2 /c2       1 − u2 /c2
       Tansforming back to the original frame, we find that the reflected photon has
                                   pxr = p sin θi , pyr = 0
                                         (−p cos θi + up/c) + u(p − up cos θi /c)/c
                                  pzr =
                                                          1 − u2 /c2
                                         (p − up cos θi /c) + u(−p cos θi + up/c)/c
                                 Er /c =
                                                          1 − u2 /c2

       Simplifying these expressions, the energy-momentum of the reflected photon in the original frame
       is
                                   p(− cos θi + 2u/c − u2 cos θi /c2 ) p(1 − 2u cos θi /c + u2 /c2 )
                     $                                                                               %
                Pr = p sin θi , 0,                                    ,                                .
                                               1 − u2 /c2                      1 − u2 /c2
       Hence the angle of reflection θr is given by

                                 pxr          sin θi (1 − u2 /c2 )         tan θi (1 − u2 /c2 )
                    tan θr = −        =                               =                            ,
                                 pz r   cos θi − 2u/c + u2 cos θi /c2   1 + u2 /c2 − 2u sec θi /c2
       while the ratio of reflected frequency fr to incident frequency fi is simply the energy ratio,

                                         fr   Er   1 − 2u cos θi /c + u2 /c2
                                            =    =                           .
                                         fi   Ei         1 − u2 /c2
       [For future use we may record the changes to first order in u/c:
                                                     tan θr ≃ tan θi (1 + 2u sec θi /c) so
                                         tan θr − tan θi    2u tan θi sec θi /c   2u sin θi
                        tan(θr − θi ) =                   ≃             2       ≃
                                        1 + tan θr tan θi      1 + tan θi              c

       Thus, θr ≃ θi + 2u sin θi /c and fr = fi (1 − 2u cos θi /c).]


(b)


                                           b secθ
                                                                    a
                                    θ
                                                   θ
                                             b


      Hereafter define θi = θ. Provided that b/ cos θ < a the laser light will reflect oﬀ the mirror, so
      cos θ > b/a is needed for photon energy-momentum to be imparted to the mirror. Let us then
      define a critical angle α via cos α = b/a.
      The change in the normal component ∆p∥ of the momentum of a single photon is

                          ∆p∥ b                        p(− cos θ + 2u/c − u2 cos θ/c2 )
                                          !                                             "
                                      b
                    ∆L =         =          p cos θ −                                     ,
                          cos θ     cos θ                         1 + u2 /c2
                        bp(2 cos θ − 2u/c)      2bp(1 − u sec θ/c)
                   ∆L =                      =                      ≃ 2bp(1 − u sec θ/c) .
                         cos θ(1 + u2 /c2 )         (1 + u2 /c2 )

      Since u cos θ = ωb, ∆L ≃ 2bp(1 − ωb sec2 θ/c) per photon. Suppose N photons strike every second
      (and |θ| is less than the critical angle α). Then in time dt we have N dt photons. But dt = dθ/ω,
      so in this time we have,                              $           %
                                                   dθ         ωb
                                           dL = N     × 2bp      sec2 θ
                                                   ω          c

      Thus the change in ∆L per revolution is
                                                       ) a
                                    dL     2bpN
                                       =2×                   (1 − ωb sec2 θ/c) dθ
                                    dn       ω          −a

      where n refers to the number of revolutions. So
                                        $             %      $             %
                            dL   8bpN         ωb         8bP      ωb
                               ≃          α−     tan α =       α−    tan α   ,
                            dn     ω           c          ωc      c

      since each photon has energy pc and laser power equals P = N pc.
      Clearly ωb ≪ c always, so dL/dn ≃ 8bP α/ωc; thus

                                          dL   dL dn   ω dL    4bP α
                                             =       =       =       .
                                          dt   dn dt   2π dn    πc

(c)

      Therefore if I is the moment of inertia of the mirror about its axis of rotation,
                                          dω   4bP α             4bP αt
                                      I      ≃       , or ω(t) ≃        .
                                          dt    πc                πcI

      [Some students may derive the rate of change of angular velocity using energy conservation, rather
      than considering the increase of angular momentum of the mirror: To first order in v/c, E r =
      E(1 − 2u cos θ/c), therefore the energy imparted to the mirror is

                                                         2uE cos θ   2ωbE
                                      ∆E = E − Er ≃                =
                                                            c          c


      In one revolution, the number of photons intersected is
                                                4α    2π   4αn
                                                   ×n    =     .
                                                2π    ω     ω
      Therefore the rate of increase of rotational energy (Erot = Iω 2 /2) is

                                  dErot   4αN 2ωbE dn   8αbP ω   4αbP ω
                                        =             =        =
                                   dt      ω    c dt      c 2π     πc

      Thus Iω.dω/dt = 4αbP/πc, leading to ω(t) ≃ 4αbP t/πcI, again.]

(d)

      To estimate the deflection of the beam, one first needs to work out the moment of inertia of a
      rectangle of mass m and side 2a about the central axis. This is just like a rod. From basic
      principles,               ) a                  "a
                                                mx3         ma2    mb2 sec2 α
                                              !
                                     m dx 2
                            I=            x =            =       =            .
                                  −a 2a         6a −a        3         3
                                     √
      With the stated geometry, a = b 2, or α = 45◦ , so

                                                12αP t cos2 α    3P t
                                           ω≃                 →    √ .
                                                   πmcb         mca 2
                                   √
      At the edge, u = ωa = 3P t/mc 2, and the angle of deviation is

                                                       2u sin α   3P t
                                                δ=              =
                                                          c       mc2

      [Interestingly, it is determined by the ratio of the energy produced by the laser to the rest-mass
      energy of the mirror.]
      Using the given numbers, and in SI units, the deviation is

                                            104 × 3 × 100 × 24 × 3600
                              ξ ≃ 104 δ =                             ≃ 2.9 mm .
                                                10−3 × (3 × 108 )2




                              screen   ξ                      δ
                                                  4                            mirror
                                                10 m
                                                                         π/4


                                                                          laser
