---
id: solution-document-apho-2004-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2004/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2004-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2004/T2_S.pdf."
---

Solutions of Problem No. 1
                                             Optical fiber

1.a. At both sides of the point O (outside and inside the fiber), according to Snell law, we
have:
    n0 sinθ i = n1 sinθ1                                                        (1)
where θ1 is the value of angle θ at point O inside the fiber.
    The light trajectory lays in the xOz plane. Because the refraction index n varies along x
direction, we divide Ox axis into small elements dx, so that in each of these elements n can be
considered as constant. We have, then:
    n sin i = ( n + dn ) .sin ( i + di )                                           (2)

where i is the angle between the light trajectory and x direction. Because θ + i =
                                                                                     π , then
                                                                                     2
   n cos θ = ( n + dn ) .cos( θ + dθ )                                               (3)
Thus, at each point of coordinate x on the light trajectory, we have:
    n cos θ = n1 1 − α 2 x 2 cos θ = n1 cos θ1                                       (4)
Because
                                 sin 2 θi
    cos θ1 = 1 − sin2 θ1 = 1 −                                                       (5)
                                   n12
we have
                                 sin 2 θ i
    n cos θ = n1 cos θ1 = n1 1 −     2
                                           = n12 − sin 2 θ i
                                    n1
Then
        n cos θ = C = n12 − sin2 θi                                                  (6)
               dx
1.2. Because      = x' = tanθ , from (6) we have:
               dz
                                                             1

                                         (           )
                                                         −
    n1 1 − α x cos θ = n1 1 − α x 1 + tan θ
             2 2                   2 2           2           2 =C                    (7)
Squaring the two sides, we obtain:
                                C2
    (         )(          )
                             −1
    1 − α x 1 + tan θ = 2
          2 2           2
                                n1
and
                            n2
   1 + x' 2 = (1 − α 2 x 2 ) 12                                                      (8)
                            C

   After derivating the two sides of (8) versus z, we get:
            α 2 n2
       x'' + 21 x = 0                                                                (9)
             C
   Because n = n1 1 − α 2 x 2 and



                                                                                                1

   • n = n1 at x=0
   • n = n2 at x=a
we get
              n12 − n22
       α=
               a .n1
Finally, we get the equation for x''
                   n 2 − n22
        x'' + 2 21               ⋅x=0                                            (10)
             a ( n1 − sin 2 θi )

1.c. The equation for the light trajectory is obtained by solving (10). This is an equation
similar to that for an harmonic oscillation, which solution can be written right away
            x = x0 sin ( pz + q )                                                  (11)
with
                  1    n12 − n22
             p=
                  a n12 − sin2 θi

The parameters p and q are determined from the boundary conditions:
   •at z=0, x=0, hence q=0
                                  dx
   •at z=0 inside the fiber, x' =    = tanθ1 , then
                                  dz
             tan θ1    a .sin θi
       x0 =         =                                                            (12)
               p        n2 − n2
                           1    2
The equation for the trajectory of the light inside the fiber is:
        a sin θi            n12 − n22   z 
   x=              .sin               .                                         (13)
         n12 − n22       n12 − sin2 θi a 
                                           


1.d. Here is a sketch of the trajectories of two rays entering the fiber at O, under different
incident angles.



                                                                                    a
         O
                                                                                a




                                                                                            2

2.a. The condition for the light to propagate along the fiber is that x0 ≤ a . This means that:
         a sin θi
                    ≤a
           2      2
          n1 − n2
or:
           sin θi ≤ n12 − n22                                                             (14)
Thus the incident angle θi must not exceed θi M , with
           sinθiM = n12 − n22 = 0.344                                                     (14a)
or:
           θ i ≤ θ i M = Arc sin     ( n − n ) = Arc sin 0.344 = 0.351rad = 20.13
                                         2
                                         1
                                                 2
                                                 2
                                                                                o



2.b. The crossing points of the light beam with Oz axis must satisfy the condition pz = kπ ,
with k - an integer. The z coordinates of these points are:
                   kπ        n 2 − sin2 θi
           z=         = kπ a 1 2                                                          (15)
                    p           n1 − n22
except for θi =0.

3.a. The rays entering the fiber at different incident angles have different trajectories. As a
consequence, the propagation speeds of the rays along the fiber should be different.
    The light trajectories are sinusoidal as given in (13). Let us calculate the time τ it takes the
light to propagate from point O to its first crossing point with Oz axis. This is twice the time it
takes the light to propagate from point O to its position most distant from Oz axis.
    The time required for the light to travel a small segment ds along its trajectory is
                   n      n               n    dz 2
           dt =      ds =   dx 2 + dz 2 =   1 + 2 .dx
                   c      c               c    dx                                   dx        ds
                                                     2
                    n       1            n dx                                          dz
                         =
                        1+         .dx =
                    c       tan θ        c sin θ
      From (6), we have

           dt =
                             (
                         n12 1 − α 2 x 2     )       .dx
                              2
                    c . sin       θi − n12α 2 x 2
and
              x0   x                          x0                  
       τ       n12  0         dx                     x 2 dx       
       2 ∫0     c  ∫0 sin2 θ − n 2α 2 x 2
        = dt =                             −α ∫
                                             2
                                                                                          (16)
                                                    2        2 2 2 
                            i    1            0 sin θi − n1 α x 

                         n12 
                     =         I1 − α 2 I 2 
                          c                



                                                                                                   3

where
                                            x
                   1         nαx 0         πa
             I1 =     Arc sin 1       =                                                               (17)
                  n1α        sin θi 0   2 n2 − n2     1       2
                                                                           x0
                                                              n1α x
                                  x0       sin2 θi .Arc sin
       − x sin2 θi − n12α 2 x 2                               sin θi                π sin2 θi
I2 =                                   +                                        =                     (18)
               2n12α 2                            2n13α 3                             4n13α 3
                                  0
                                                                           0
Using (16), (17), (18), we obtain
              π a .n12  sin2 θi 
       τ=               1 −                                                                         (19)
                            2n12 
           c n12 − n22 
                                                                       z
   The propagation speed along the fiber is v =                            , where z is the coordinate of the first
                                                                       τ
crossing point, which is determined by (15) for k = 1. Because z and τ depend on the incident
angle θi , v also depends on θi .
   For θi = θi M , from (14a), we get
                                                                  −1
                      π an2    2c n12 − n22  n22                             2cn2
             vM =            .              1 + 2                    =                              (20)
                      2    2     π an 2      n                           n12 + n22
                     n1 − n2          1         1 


and
                    2 × 2.998 × 108 × 1.460
             vM =             2             2
                                                  = 1.998 × 108 m/s            (20a)
                    1.500 + 1.460
    The propagation speed of the light along the Oz axis is
             c
        v=                                                                     (21)
            n1
because the refraction index is n1 on the axis of the fiber.
    The numerical value is
                 2.998 × 108
            v0 =             = 1.999 × 108 m/s                                 (21a)
                     1.5
3.b. If the beam of the light pulses is formed by rays converging at O, then the rays with
different incident angles has different propagation speeds. The two rays of incident angles
θi = 0 and θi = θi M arrive to the plane z with a time delay

                            z (n − n )
                                                 2
                   z    z
           ∆t =      −    = . 1 2                                                 (22)
                 vM v0 c          2n2
    This means that a very short light pulse becomes a pulse of finite width ∆t given by (22)
at the plane z. If two consecutive pulses enter the fiber with a delay greater than ∆t , then at
the plane z, they are separated. Hence the repetition frequency of the pulses must not exceed
the maximal value:


                                                                                                                 4

                          −1          2.c .n2
           f M = ( ∆t )        =                                 (23)
                                   z .( n1 − n2 )
                                                    2

If z = 1000 m , then
              2 × 2.998 × 108 × 1.460
       fM =                                         = 547.1MHz
              1000 × (1.500 − 1.460 )
                                                2




                                                                        5
