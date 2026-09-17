---
id: solution-document-ipho-2013-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2013/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2013-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2013/T2_S.pdf."
---

Plasmonic Steam Generator                                                          T2

                                                 Solutions

A single spherical silver nanoparticle
      Volume of the nanoparticle:                                          .
      Mass of the nanoparticle:                                        .
      Number of ions in the nanoparticle:                                      .
2.1 Charge density                                      , charge density           .                     0.7

      Electrons’ concentration                                 .
      Total charge of free electrons                               .
      Total mass of free electrons                                         .

The electric field in a charge-neutral region inside a charged sphere
      For a sphere with radius and constant charge density , for any point inside the sphere
      designated by radius-vector                 ) Gauss's law yields directly
                , where     is the unit radial vector pointing away from the center of the
      sphere. Thus,              .
    Likewise, inside another sphere of radius    and charge density       the field is
2.2       , where is the radius-vector of the point in the coordinate system with the origin 1.2
    in the center of this sphere.
    Superposition of the two charge configurations gives the setup we want with
       . So
     inside the charge-free region |         |        the field is
                      or             with pre-factor


The restoring force on the displaced electron cloud
      With               and             we have from above that approximately the field induced
      inside the particle is                . The number of electrons on the particle’s border that
      produced         is negligibly smaller than the number of electrons inside the particle, so
2.3                                                        (note the antiparallel attractive force       1.0
      is proportional to the displacement that it is similar to Hooke’s law).
      The     work        done     on    the       electron      cloud    to           shift   it   is
               ∫                     (             )


The spherical silver nanoparticle in an external constant electric field
    Inside the metallic particle in the steady state the electric field must be equal to 0. The
2.4 induced field (from 2.2 or 2.3) compensates the external field:                         , so 0.6



                                                 Page 1 of 3
                             Plasmonic Steam Generator                                                          T2

                             .
       Charge displaced through the       -plane is the total charge of electrons in the cylinder of
       radius and height :                                           .

The equivalent capacitance and inductance of the silver nanoparticle
       The electric energy       of a capacitor with capacitance        holding charges         is
2.5a              . The energy of such capacitor is equal to the work (see 2.3) done to separate          0.7
       the charges (see 2.4), thus                                            .

       Equivalent scheme for a capacitor reads:                   . Combining charge from (2.4) and
2.5b                                                                                                      0.4
       capacitance from (2.5a) gives                          .


     The kinetic energy of the electron cloud is defined as the kinetic energy of one electron
     multiplied      by      the     number       of      electrons       in     the     cloud
2.6a                             (        ).                                                   0.7
     The current is the charge of electrons in the cylinder of area            and height
     divided by time    (or simply the time derivative of charge       ), thus               .
     The energy carried by current in the equivalent circuit with inductance is
2.6b is, in fact, the kinetic energy of electrons    . Taking the energy and current from 0.5
     (2.6a) gives                                 .


The plasmon resonance of the silver nanoparticle
     From the LC-circuit analogy we can directly derive                        √             .
2.7a Alternatively it is possible to use the harmonic law of motion in (2.3) and get the same 0.5
     result for the frequency.
                             rad/s, for light with angular frequency                the wavelength is
2.7b                                                                                                      0.4
                                   .

The silver nanoparticle illuminated with light at the plasmon frequency
       The velocity of an electron                                                . The time-averaged

       kinetic energy on the electron 〈      〉        〈   〉        〈   〉. During time     each electron
       hits an ion one time. So the energy lost in the whole nanoparticle during time                is
2.8a                                                                                                      1.0
                   〈    〉             〈    〉. Time-averaged Joule heating power

                                 〈   〉(          ).
       The expression for current is taken from (2.6a), squared and averaged




                                                  Page 2 of 3
                              Plasmonic Steam Generator                                                               T2

     〈 〉                  〈   〉   ( ) 〈       〉.

     The average time between the collisions is            , so each electron oscillates many
     times before it collides with an ion. The oscillating current
2.8b                   produces the heat in the resistance        equal to                〈 〉, 1.0
     that together with results from (2.8a) leads to         〈 〉
                                                                                     .


     For equivalent scattering resistance                  〈 〉
                                                                   and for harmonic oscillations we can
2.9 average the velocity squared over one period of oscillations, so 〈                        〉            . 1.0
     Together it yields                        〈   〉
                                                                            .


      Ohm’s law for a LCR serious circuit is                                            . At the resonance
                                                           √                    (   )

      frequency time-averaged voltage squared is 〈                   〉      〈 〉                         〈 〉.

2.10a And from (2.5b) 〈       〉                        , so Ohm’s law results in 〈 〉                       .
                                                                                                               1.2
      The time-averaged power losses are                           〈 〉                            and

                                          〈         〉.


2.10b Starting with the electric field amplitude               √                            , we calculate 0.3
                        and                   .

Steam generation by light
      Total number of nanoparticles in the vessel:                               Then the
      total time-averaged Joule heating power:                         kW. This power goes
2.11a into the steam generation:              , with                                                           0.6
                                           . Thus the mass of steam produced in one second
      is:                                .

      The power of light incident on the vessel
2.11b          , and the power directed for steam production by nanoparticles is given in                      0.2
      2.11a. Efficiency of the process is                  = 0.498.


     Total                                                                                                     12.0




                                                   Page 3 of 3
