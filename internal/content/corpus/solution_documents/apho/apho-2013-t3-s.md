---
id: solution-document-apho-2013-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2013/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2013-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2013/T3_S.pdf."
---

Theoretical 3: Solution
                                  Physics of Spin

   Part A. Larmor Precession
 1. From the two equations given in the text, we obtain the relation
                                          dµ
                                              =    µ ⇥ B.                                      (1)
                                           dt
    Taking the dot product of eq (1). with µ, we can prove that
                                         dµ
                                     µ·      =    µ · (µ ⇥ B) ,
                                          dt
                                      d |µ|2
                                             = 0,
                                        dt
                                     µ = |µ| = const.                                          (2)
    Taking the dot product of eq. (1) with B, we also prove that
                                        dµ
                                     B·     =    B · (µ ⇥ B) ,
                                        dt
                                        dµ
                                     B·     = 0,
                                        dt
                                      B · µ = const.                                           (3)
    An acute reader will notice that our master equation in (1) is identical to the equation of
    motion for a charged particle in a magnetic field
                                         dv     q
                                             = v ⇥ B.                                          (4)
                                          dt    m
    Hence, the same argument for a charged particle in magnetic field can be applied in this case.
 2. For a magnetic moment making an angle of          with B,
                                            dµ
                                                  =       µ ⇥ B,
                                            dt
                                            d✓
                                    |µ| sin       =      |µ| B0 sin ,
                                             dt
                                            d✓
                                      !0 =        =     B0 .                                   (5)
                                             dt
   Part B. Rotating frame
 1. Using the relation given in the text, it is easily shown that
                                  ✓ ◆              ✓ ◆
                                    dµ                dµ
                                               =               !⇥µ
                                     dt rot           dt lab
                                               =       µ ⇥ B !k0 ⇥ µ
                                                           ✓         ◆
                                                                 ! 0
                                               =       µ⇥ B       k

                                             =        µ ⇥ Be↵ .                                (6)
    Note that k is equal to k0 as observed in the rotating frame.


Physics of Spin                                                                       Page 1 of 5
                                     Theoretical 3: Solution
                                    Physics of Spin

 2. The new precession frequency as viewed on the rotating frame S 0 is
                                              ~   = (!0            !) k0 ,
                                                  =         B0     !.                                              (7)

 3. Since the magnetic field as viewed in the rotating frame is B = B0 k0 + bi0 ,
                                                    ✓        ◆
                                                           !
                                Be↵ = B !/ k0 = B0              k0 + bi0 ,

    and

                                        ⌦ =        |Be↵ | ,
                                                   s✓                  ◆2
                                                                   !
                                             =        B0                    + b2 .                                 (8)


 4. In this case, the e↵ective magnetic field becomes

                             Be↵ = B !/ k0
                                   ✓      ◆
                                        !
                                 =   B0     k0 + b(cos 2!ti0                         sin 2!tj0 )                   (9)

                                     ⇣                  ⌘
                                                    !
    which has a time average of Be↵ = B0                    k0 .

   Part C. Rabi oscillation

 1. The oscillating field can be considered as a superposition of two oppositely rotating field:

                       2b cos !0 ti = b (cos !0 ti + sin !0 tj) + b (cos !0 ti             sin !0 tj) ,

    which gives an e↵ective field of (with ! = !0 = B0 ):
                                 ✓        ◆
                                        !
                        Be↵ = B0            k0 + bi0 + b(cos 2!0 ti0                  sin 2!0 tj0 ).

    Since !0     b, the rotation of the term b(cos 2!0 ti0 sin 2!0 tj0 ) is so fast compared to the
    frequency b. This means that we can take the approximation
                                          ✓        ◆
                                                 !
                                   Be↵ ⇡ B0          k0 + bi0 = bi0 ,                          (10)

    where the magnetic moment precesses with frequency ⌦ = b.
    As ⌦ = b ⌧ !0 , the magnetic moment does not “feel” the rotating term b (cos 2!0 ti0                    sin 2!0 tj0 )
    which averaged to zero.


Physics of Spin                                                                                           Page 2 of 5
                                 Theoretical 3: Solution
                                 Physics of Spin

 2. Since the angle ↵ that µ makes with Be↵ stays constant and µ is initially oriented along the z
    axis, ↵ is also the angle between Be↵ and the z axis which is
                                                             b
                                              tan ↵ =            !.                           (11)
                                                        B0




    From the geometry of the system, we can show that (cos ✓ = µz /µ):

                                      ✓                      ⌦t
                                2µ sin        = 2µ sin ↵ sin     ,
                                      2                       2
                                      ✓                     ⌦t
                                 sin2         = sin2 ↵ sin2    ,
                                      2                      2
                               1 cos ✓                 1 cos ⌦t
                                              = sin2 ↵             ,
                                  2                         2
                                   cos ✓      = 1 sin2 ↵ + sin2 ↵ cos ⌦t,
                                   cos ✓ = cos2 ↵ + sin2 ↵ cos ⌦t.

    So, the projected magnetic moment along the z axis is µz (t) = µ cos ✓ and the magnetization
    is
                              M = N µz = N µ cos2 ↵ + sin2 ↵ cos ⌦t .                       (12)
    Note that the magnetization does not depend on the reference frame S or S 0 (µz has the same
    value viewed in both frames).
    Taking ! = !0 = B0 , the angle ↵ is 900 and M = N µ cos ⌦t.

 3. From the relations
                                                     µz
                                         P"    P# =     = cos ✓,
                                                      µ
                                         P" + P#   = 1,




Physics of Spin                                                                       Page 3 of 5
                                  Theoretical 3: Solution
                                  Physics of Spin

    we obtain the results (! = !0 )
                                             1    cos ✓
                                  P# =
                                                  2
                                             1    cos2 ↵ sin2 ↵ cos ⌦t
                                        =
                                                        2
                                                 1    cos ⌦t
                                        = sin2 ↵
                                                      2
                                                   b2             ⌦t
                                        = ⇣          ⌘2      sin2
                                                                   2
                                            B 0 ! + b2
                                                  ⌦t
                                        = sin2       ,                                          (13)
                                                  2
    and
                                             b2                     ⌦t        ⌦t
                               P" = ⇣          ⌘2          cos2        = cos2    .              (14)
                                             !                      2         2
                                        B0          + b2




   Part D. Measurement incompatibility
 1. In the x direction, the uncertainty in position due to the screen opening is     x. According to
    the uncertainty principle, the atom momentum uncertainty px is given by
                                                             ~
                                                  px ⇡          ,
                                                              x
    which translates into an uncertainty in the x velocity of the atom,
                                                          ~
                                                 vx ⇡        .
                                                         m x
    Consequently, during the time of flight t of the atoms through the device, the uncertainty in
    the width of the beam will grow by an amount x given by
                                                              ~
                                             x=     vx t ⇡       t.
                                                             m x


Physics of Spin                                                                          Page 4 of 5
                                  Theoretical 3: Solution
                                  Physics of Spin

    So, the width of the beams is growing linearly in time. Meanwhile, the two beams are separating
    at a rate determined by the force Fx and the separation between the beams after a time t
    becomes
                                               1 Fx 2     1
                                     dx = 2 ⇥       t =     |µx | Ct2 .
                                               2m        m
    In order to be able to distinguish which beam a particle belongs to, the separation of the two
    beams must be greater than the widths of the beams; otherwise the two beams will overlap and
    it will be impossible to know what the x component of the atom spin is. Thus, the condition
    must be satisfied is

                                                 dx           x,
                                        1                      ~
                                          |µx | Ct2               t,
                                        m                     m x
                                       1
                                         |µx |   xCt          1.                                    (15)
                                       ~

 2. As the atoms pass through the screen, the variation of magnetic field strength across the beam
    width experienced by the atoms is
                                                       dB
                                           B=     x       = C x.
                                                       dx
    This means the atoms will precess at rates covering a range of values       ! given by

                                                   µz              |µx |
                                    !=       B=          B=              C x,
                                                   ~                ~
    and, if previous condition in measuring µx is satisfied,

                                                  !t     1.                                         (16)

    In other words, the spread in the angle !t through which the magnetic moments precess
    is so large that the z component of the spin is completely randomized or the measurement
    uncertainty is very large.




Physics of Spin                                                                              Page 5 of 5
