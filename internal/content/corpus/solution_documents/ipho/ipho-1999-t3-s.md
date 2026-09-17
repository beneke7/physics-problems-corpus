---
id: solution-document-ipho-1999-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1999/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-1999-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/1999/T3_S.pdf."
---

Problem 3 – Solution                                                                           Page 1

     Solution

1A. Assuming – as outlined in the text – that the orbit is circular, and relating the radial acceleration
    V2                               GM S
        to the gravitational field         (where MS is the solar mass) we obtain Jupiter's orbital
     R                                R2
               GM S
    speed V =         ≈ 1.306 ⋅ 10 4 m/s .
                 R


     The following alternative solution is also acceptable:
                                                                                  2πR
1B. Since we treat Jupiter’s motion as circular and uniform, V = ωR =                 , where yJ is the
                                                                                   yJ
     revolution period of Jupiter, which is given in the list of the general physical constants.


2.   The two gravitational forces on the space probe are equal when

                                            GMm          GM S m
                                                   =                               (2)
                                              ρ2       (R − ρ ) 2
     (where ρ is the distance from Jupiter and M is Jupiter’s mass), whence

                                              M (R − ρ ) = ρ M S                   (3)
     and
                                       M
                             ρ=                R = 0.02997 R = 2.333 ⋅ 1010 m      (4)
                                   MS + M


     and therefore the two gravitational attractions are equal at a distance of about 23.3 million
     kilometers from Jupiter (about 334 Jupiter radii).

3.   With a simple Galilean transformation we find that the velocity components of the probe in
     Jupiter's reference frame are

                                                       v' x = V


                                                    v' y = v0


                                                                                                   v0
     and therefore - in Jupiter's reference frame – the probe travels with an angle θ 0 = arc tan     with
                                                                                                   V
                                                                                               V        V
     respect to the x axis and its speed is v' = v02 + V 2 (we also note that cosθ 0 =                =
                                                                                             v0 + V
                                                                                              2     2   v'
     Problem 3 – Solution                                                                              Page 2
                       v0            v0
     and sin θ 0 =               =      ).
                     v02 + V 2       v'
             Using the given values we obtain θ0 = 0.653 rad ≈ 37.4° and v'=1.65·104 m/s .

4.   Since the probe trajectory can be described only approximately as the result of a two-body
     gravitational interaction (we should also take into account the interaction with the Sun and other
     planets) we assume a large but not infinite distance from Jupiter and we approximate the total
     energy in Jupiter's reference frame as the probe's kinetic energy at that distance:

                                              1
                                                   E≈
                                                mv' 2                                          (5)
                                              2
     The corresponding numerical value is E = 112 GJ.


5.   Equation (1) shows that the radial distance becomes infinite, and its reciprocal equals zero, when


                                                    2 Ev'2 b 2
                                             1 + 1 + 2 2 cosθ = 0                              (7)
                                                    G M m
     namely when
                                                                   1
                                             cosθ = −                                          (8)
                                                                2 Ev'2 b 2
                                                              1+ 2 2
                                                                G M m


     We should also note that the radial distance can't be negative, and therefore its acceptable values
     are those satisfying the equation


                                                     2 Ev'2 b 2
                                             1+ 1+              cosθ ≥ 0                       (9)
                                                     G 2 M 2m
     or
                                                                  1
                                             cosθ ≥ −                                          (10)
                                                            2 Ev'2 b 2
                                                          1+ 2 2
                                                            G M m


             The solutions for the limiting case of eq. (10) (i.e. when the equal sign applies) are:


                                                     −1 / 2
                                 2 Ev'2 b 2                                          1
             θ ± = ± arccos − 1 + 2 2                          = ± π − arccos                         (11)
                                 G M m                                            2 Ev'2 b 2
                                                                                1+ 2 2
                                                                                  G M m
     Problem 3 – Solution                                                                           Page 3


     and therefore the angle ∆θ (shown in figure 2) between the two hyperbola asymptotes is given by:

                                    ∆θ = (θ + − θ − ) − π

                                                                            1
                                        = π − 2 arccos                                  (12)
                                                                  2 Ev'2 b 2
                                                                1+ 2 2
                                                                  G M m

                                                                        1
                                        = π − 2 arccos
                                                                        v′ 4 b 2
                                                                1+
                                                                       G 2M 2


     In the last line, we used the value of the total energy as computed in the previous section.

6.   The angular deviation is a monotonically decreasing function of the impact parameter, whence
     the deviation has a maximum when the impact parameter has a minimum. From the discussion in
     the previous section we easily see that the point of nearest approach is when θ = 0, and in this
     case the minimum distance between probe and planet center is easily obtained from eq. (1):

                                                                                   −1
                                             v '2 b 2                v '4 b 2
                                    rmin =               1+ 1+                          (13)
                                             GM                      G 2M 2


            By inverting equation (13) we obtain the impact parameter

                                                        2GM
                                    b = rmin
                                         2
                                             +                rmin                      (14)
                                                         v' 2


            We may note that this result can alternatively be obtained by considering that, due to the
     conservation of angular momentum, we have

                                               L = mv' b = mv' min rmin


     where we introduced the speed corresponding to the nearest approach. In addition, the
     conservation of energy gives

                                                1        1           GMm
                                        E=        mv' 2 = mv' 2min −
                                                2        2            rmin
     Problem 3 – Solution                                                                                                    Page 4

     and by combining these two equations we obtain equation (14) again.
             The impact parameter is an increasing function of the distance of nearest approach;
     therefore, if the probe cannot approach Jupiter's surface by less than two radii (and thus rmin =
     3RB, where RB is Jupiter’s body radius), the minimum acceptable value of the impact parameter
     is

                                                            6GM
                                    bmin = 9 RB2 +                RB                                               (15)
                                                             v' 2


     From this equation we finally obtain the maximum possible deviation:

                                        1                                                      1
           ∆θ max = π − 2 arccos                    = π − 2 arccos                                                        (16)
                                            4 2
                                        v' b  min                                v'   4
                                                                                                        6GM
                                   1+       2   2                       1+                    9 RB2 +         RB
                                        G M                                  G M 2        2
                                                                                                         v '2


     and by using the numerical values we computed before we obtain:


     bmin = 4.90·108 m ≈ 7.0 RB and             ∆θ max = 1.526 rad ≈ 87.4°

7.   The final direction of motion with respect to the x axis in Jupiter’s reference frame is given by
     the initial angle plus the deviation angle, thus θ0+ ∆θ if the probe passes behind the planet. The
     final velocity components in Jupiter's reference frame are therefore:

                                                    v' x = v' cos(θ 0 + ∆θ )


                                                    v' y = v' sin(θ 0 + ∆θ )


     whereas in the Sun reference frame they are

                                                v ′x′ = v ′ cos(θ 0 + ∆θ ) − V


                                                    v ′y′ = v' sin (θ 0 + ∆θ )


     Therefore the final probe speed in the Sun reference frame is
     Problem 3 – Solution                                                                     Page 5

                     v" = (v' cos(θ 0 + ∆θ ) − V ) 2 + (v' sin(θ 0 + ∆θ )) 2

                       = v02 + 2V 2 − 2v'V cos(θ 0 + ∆θ )

                       = v02 + 2V 2 − 2v'V (cosθ 0 cos ∆θ − sin θ 0 sin ∆θ )          (17)

                       = v02 + 2V 2 − 2V (V cos ∆θ − v0 sin ∆θ )

                       = v0 (v0 + 2V sin ∆θ ) + 2V 2 (1 − cos ∆θ )


8.   Using the value of the maximum possible angular deviation, the numerical result is v” = 2.62·104
     m/s.
Problem 3 – Solution                                                                           Page 6


Grading guidelines

1.     0.4        Law of gravitation, or law of circular uniform motion
       0.4        Correct approach
       0.4+0.3    Correct results for velocity of Jupiter


2.     0.3        Correct approach
       0.4+0.3    Correct results for distance from Jupiter


3.     1          Correct transformation between reference frames
       0.3+0.2    Correct results for probe speed in Jupiter reference frame
       0.3+0.2    Correct results for probe angle


4.     0.8        Understanding how to handle the potential energy at infinity
       0.2        Numerical result for kinetic energy


5.     0.6        Correct approach
       0.6        Equation for the orientation of the asymptotes
       0.8        Equation for the probe deflection angle


6.     0.3+0.2    Correct results for minimum impact parameter
       0.3+0.2    Correct results for maximum deflection angle


7.     0.5        Equation for velocity components in the Sun reference frame
       0.5        Equation for speed as a function of angular deflection


8.     0.5        Numerical result for final speed



For “correct results” two possible marks are given: the first one is for the analytical equation and
the second one for the numerical value.
For the numerical values a full score cannot be given if the number of digits is incorrect (more than
one digit more or less than those given in the solution) or if the units are incorrect or missing.
