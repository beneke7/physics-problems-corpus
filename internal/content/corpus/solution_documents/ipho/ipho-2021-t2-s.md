---
id: solution-document-ipho-2021-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2021/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2021-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2021/T2_S.pdf."
---

S2-1
                              Theoretical Question 2 – Solution                            ENGLISH


Electrostatic lens (10 points)
Part A.     Electrostatic potential on the axis of the ring (1 point)

A.1 (0.3 points)
The
√ linear charge density of the ring is 𝜆 = 𝑞/(2𝜋𝑅). All the points of the ring are situated a distance
 𝑅 2 + 𝑧 2 away from point A. Integrating over the whole ring we readily obtain:
                                                      𝑞       1
                                         Φ (𝑧) =          √          .
                                                     4𝜋𝜀 0 𝑅 2 + 𝑧 2

A.2 (0.4 points)
Using an expansion in powers of 𝑧 we obtain:

                                                                         𝑧2
                                                                           
                           𝑞       1        𝑞        1         𝑞
                   Φ(𝑧) =      √         =                 ≈          1− 2 .
                          4𝜋𝜀 0 𝑅 2 + 𝑧 2 4𝜋𝜀 0𝑅             4𝜋𝜀 0𝑅     2𝑅
                                                 √︃
                                                       𝑧 2
                                                        
                                                   1+ 𝑅

A.3 (0.2 points)
The potential energy of the electron is 𝑉 (𝑧) = −𝑒Φ(𝑧). The force acting on the electron is

                                             d𝑉 (𝑧)      dΦ      𝑞𝑒
                                 𝐹 (𝑧) = −          = +𝑒    =−          𝑧.
                                               d𝑧        d𝑧    4𝜋𝜀 0𝑅 3
If this is a restoring force, it should be negative for positive 𝑧. Thus, 𝑞 > 0.

A.4 (0.1 points)
The equation of motion for an electron is
                                                       𝑞𝑒
                                             𝑚𝑧¥ +            𝑧=0
                                                     4𝜋𝜀 0𝑅 3
(here dots denote time derivatives). We therefore get
                                             √︂
                                                   𝑞𝑒
                                         𝜔=               .
                                                4𝜋𝑚𝜀 0𝑅 3
                                                                                          S2-2
                              Theoretical Question 2 – Solution                           ENGLISH


Part B.     Electrostatic potential in the plane of the ring (1.7 points)

B.1 (1.5 points)
There are two different ways to solve this problem: (i) using direct integration; (ii) using Gauss’s
law and the result of part A.




 Figure 1: Calculating electrostatic potential in the plane of the ring through direct integration.

    (i) Direct integration. We will follow the notations of Figure 1. Since the potential has cylin-
drical symmetry, let the point B, where we calculate the potential, be on the 𝑥-axis. Let

                                          |OB| = 𝑟 ; |OC| = 𝑅.

Thus:
                                      |BC| 2 = 𝑅 2 + 𝑟 2 − 2𝑅𝑟 cos 𝜙 .
Electrostatic potential created by ring element d𝜙 at the point B:

                            1           𝜆𝑅 d𝜙           1              𝜆 d𝜙
                    dΦ =                              =                              .
                           4𝜋𝜀 0 𝑅 2 + 𝑟 2 − 2𝑅𝑟 cos 𝜙 4𝜋𝜀 0
                                √︁                           √︃
                                                                      2
                                                               1 + 𝑅𝑟 2 − 2 𝑅𝑟 cos 𝜙

Using the expansion given in the formulation of the problem for 𝜀 = −1/2 we have:
                               "                                         2#
                                    1 𝑟2                3 𝑟2
                                                        
                         𝜆 d𝜙                𝑟                    𝑟
                   dΦ ≈          1−       − 2 cos 𝜙 +         − 2 cos 𝜙      .
                         4𝜋𝜀 0      2 𝑅2     𝑅          8 𝑅2      𝑅

Ignoring the terms of the order 𝑟 3 and 𝑟 4 we get:

                                                    𝑟2 3
                                                                 
                                 𝜆 d𝜙        𝑟              2    1
                          dΦ ≈           1 + cos 𝜙 + 2   cos 𝜙 −      .
                                 4𝜋𝜀 0       𝑅      𝑅 2          2

Integrating over all angles we finally obtain:
                                   ˆ 2𝜋 
                                                     𝑟2 3
                                                                   
                                𝜆              𝑟                  1
                      Φ(𝑟 ) =             1 + cos 𝜙 + 2      2
                                                          cos 𝜙 −      d𝜙 .
                              4𝜋𝜀 0 0         𝑅      𝑅 2          2
                                                                                            S2-3
                             Theoretical Question 2 – Solution                             ENGLISH


                                                             𝑟2
                                                               
                                                   𝑞
                                         Φ(𝑟 ) =          1+ 2 .
                                                 4𝜋𝜀 0𝑅     4𝑅
From here, comparing with the expression Φ(𝑟 ) = 𝑞(𝛼 + 𝛽𝑟 2 ), we obtain
                                                         1
                                                𝛽=              .
                                                      16𝜋𝜀 0𝑅 3
    (ii) Gauss’s law.




        Figure 2: Calculating electrostatic potential in the plane of the ring via Gauss’s law.

    Let us analyze a small cylinder of radius 𝑟 . The center of the cylinder coincides with the center
of the ring. In part A we analyzed the potential along the 𝑧-axis, while in this part we analyze the
potential along the radius 𝑟 . For any 𝑧 ≪ 𝑅 and 𝑟 ≪ 𝑅 the potential has an expression:

                                                          𝑧2
                                                            
                                               𝑞
                                  Φ(𝑧, 𝑟 ) =          1 − 2 + 𝑞𝛽𝑟 2 .
                                             4𝜋𝜀 0𝑅      2𝑅
The lowest order terms are quadratic in 𝑟 and 𝑧. Due to reflection symmetry the potential does
not contain terms of the type 𝑟𝑧. This, for example, immediately gives us 𝛼 = 1/(4𝜋𝜀 0𝑅). Thus, for
small 𝑟 and 𝑧 electric fields in the radial and axial directions are:
                                               𝑞
                              E𝑧 (𝑧, 𝑟 ) = +          𝑧,  E𝑟 (𝑧, 𝑟 ) = −2𝑞𝛽𝑟 .
                                             4𝜋𝜀 0𝑅 3
Applying Gauss’s law to the cylinder we obtain:
                      ˛                         ˆ            ˆ
                         E® · d𝑆® = 0   ⇒         E® · d𝑆® +   E® · d𝑆® = 0.
                                                        side           base

The second integral is:             ˆ
                                                                      𝑞𝑧𝑟   2
                                        E® · d𝑆® = 2𝜋𝑟 2 E𝑧 (𝑧, 𝑟 ) =         .
                                                                      2𝜀 0𝑅 3
                                 base
The first integral is:          ˆ
                                      E® · d𝑆® = 4𝜋𝑟𝑧E𝑟 (𝑧, 𝑟 ) = −8𝜋𝑞𝛽𝑟 2𝑧.
                               side
                                                                                             S2-4
                              Theoretical Question 2 – Solution                             ENGLISH


Gauss’s theorem thus gives:
                                            𝑞𝑧𝑟 2
                                                    − 8𝜋𝑞𝛽𝑟 2𝑧 = 0.
                                            2𝜀 0𝑅 3
This immediately yields
                                                   1
                                                𝛽=       ,
                                               16𝜋𝜀 0𝑅 3
which agrees with the result obtained via direct integration.

B.2 (0.2 points)
The potential of the electron is 𝑉 (𝑟 ) = −𝑒Φ(𝑟 ). Force acting on the electron in the 𝑥𝑦 plane is
                                            d𝑉 (𝑟 )      dΦ(𝑟 )     𝑞𝑒
                               𝐹 (𝑟 ) = −           = +𝑒        =          𝑟.
                                              d𝑟          d𝑟      8𝜋𝜀 0𝑅 3
To have oscilations we need the force to be negative for 𝑟 > 0. Thus, 𝑞 < 0.



Part C.     The focal length of the idealized electrostatic lens (2.3 points)

C.1 (1.3 points)
                                                     √︁
Let us consider an electron with the velocity 𝑣 = 2𝐸/𝑚 at a distance 𝑟 from the “optical” axis
(Figure 2 of the problem). The electron crosses the “active region” of the lens in time
                                                        𝑑
                                                   𝑡=     .
                                                        𝑣
The equation of motion in the 𝑟 direction:
                                                𝑚𝑟¥ = 2𝑒𝑞𝛽𝑟 .
During the time the electron crosses the active region of the lens, the electron acquires radial ve-
locity:
                                                2𝑒𝑞𝛽𝑟 𝑑
                                          𝑣𝑟 =            < 0.
                                                    𝑚 𝑣
The lens will be focusing if 𝑞 < 0. The time it takes for an electron to reach the “optical” axis is:
                                               𝑟         𝑚𝑣
                                         𝑡′ =        =−        .
                                              |𝑣𝑟 |     2𝑒𝑞𝛽𝑑
During this time the electron travels in the 𝑧-direction a distance
                                                      𝑚𝑣 2      𝐸
                                    Δ𝑧 = 𝑡 ′𝑣 = −          =−      .
                                                     2𝑒𝑞𝛽𝑑    𝑒𝑞𝑑𝛽
Δ𝑧 does not depend on the radial distance 𝑟 , therefore all electron will cross the “optical” axis (will
be focused) in the same spot. Thus,
                                                    𝐸
                                           𝑓 =−        .
                                                  𝑒𝑞𝑑𝛽
                                                                                              S2-5
                              Theoretical Question 2 – Solution                              ENGLISH


C.2 (0.8 points)




                                    Figure 3: Focusing of electrons.

Let us consider an electron emitted an an angle 𝛾 to the optical axis (Figure 3). Its initial velocity in
the radial direction is:
                                                               𝑟
                                       𝑣𝑟 ;0 = 𝑣 sin 𝛾 ≈ 𝑣𝛾 ≈ 𝑣 ,
                                                               𝑏
where 𝑟 is the radial distance of the electron when it reaches the plane of the ring. The velocity in
the 𝑧-direction is
                                             𝑣𝑧 = 𝑣 cos 𝛾 ≈ 𝑣.
For small angles 𝛾 the additional velocity in the 𝑟 -direction acquired in the “active region” is the
same as in part C.1. Thus, the radial velocity after crossing the active region is
                                                 𝑟 2𝑒𝑞𝛽𝑟 𝑑
                                           𝑣𝑟 = 𝑣 +        ,
                                                 𝑏   𝑚 𝑣
where the first term is positive and the second term is negative, since 𝑞 < 0. If the electrons are
focused, then 𝑣𝑟 < 0 (this can be verified after obtaining the final result). The electron will reach
the optical axis in time
                                     𝑟              𝑟              1
                               𝑡′ =       = − 2𝑒𝑞𝛽𝑟       = − 2𝑒𝑞𝛽      .
                                    |𝑣𝑟 |           𝑑
                                                      +𝑣𝑟          𝑑
                                                                     +𝑣
                                                𝑚     𝑣   𝑏         𝑚 𝑣              𝑏
During this time it will travel a distance
                                                      1               1
                                  𝑐 = 𝑡 ′𝑣 = − 2𝑒𝑞𝛽           = − 𝑒𝑞𝛽𝑑           .
                                                       1
                                                  𝑑
                                                𝑚 𝑣2 + 𝑏           𝐸      + 𝑏1

C.3 (0.2 pt)
From the previous answer we obtain:

                                             1 1   𝑒𝑞𝛽𝑑
                                              + =−      .
                                             𝑏 𝑐     𝐸
                                                                                             S2-6
                               Theoretical Question 2 – Solution                            ENGLISH


Comparing with the answer of C.1 we immediately obtain
                                               1 1 1
                                                + = ,
                                               𝑏 𝑐 𝑓
i.e. the equation of a thin optical lens is valid for an electrostatic lens as well.



Part D.      The ring as a capacitor (3 points)

D.1 (2.0 points)




                         Figure 4: Calculation of the capacitance of the ring.

Let us sub-divide the entire ring into two parts: a part corresponding to the angle 2𝛼 ≪ 1, and the
rest of the ring, as shown in Figure 4. While the angle is small in comparison to 1, let us assume
that the length of the first part, 𝛼𝑅, is still large compared to 𝑎 (𝛼𝑅 ≫ 𝑎). Let us calculate the
electrostatic potential Φ at point K. It it a sum of two terms: the first one produced by the cut-out
part with an angle 2𝛼 (contribution Φ1 ) and the second one originating from the rest of the ring
(contribution Φ2 ).
    Contribution Φ1 . Since 𝛼 ≪ 1, we can neglect the curvature of the cylinder that is cut out from
                                                        𝑞
the ring. The linear charge density on the ring is 𝜆 = 2𝜋𝑅 . The potential at the center of the cylinder
is then given by an integral:
                         ˆ 𝛼𝑅                      ˆ 𝛼𝑅                         ˆ 𝛼𝑅/𝑎
                 1 𝑞              d𝑥           𝑞           d(𝑥/𝑎)          𝑞               d𝑦
        Φ1 = 2                √          = 2                          = 2                        .
               4𝜋𝜀 0 2𝜋𝑅 0      𝑥 2 + 𝑎 2 4𝜋 𝜀 0𝑅 0       1 + (𝑥/𝑎) 2 4𝜋 𝜀 0𝑅 0
                                                        √︁                             √︁
                                                                                          1 + 𝑦2
Using the integral provided in the description of the problem we get:
                                                                      √︄   2
                        𝑞          √︁        𝛼𝑅/𝑎     𝑞         𝛼𝑅       𝛼𝑅 ª
               Φ1 = 2        ln 𝑦 + 1 + 𝑦  2        = 2      ln ­    + 1+
                                                                ©
                                                                               ®.
                     4𝜋 𝜀 0𝑅                   0     4𝜋 𝜀 0𝑅       𝑎        𝑎
                                                                «              ¬
As 𝛼𝑅 ≫ 𝑎,                                                  
                                              𝑞          2𝛼𝑅
                                        Φ1 ≈ 2      ln         .
                                            4𝜋 𝜀 0𝑅       𝑎
                                                                                                       S2-7
                                 Theoretical Question 2 – Solution                                     ENGLISH




                            Figure 5: Calculation of the capacitance of the ring

    Contribution Φ2 . In this case we can neglect the thickness 𝑎. Using the cosine theorem we can
derive the distance between points K and L of Figure 5:

                                                              𝜙
                                                 |KL| = 2𝑅 sin .
                                                              2
The contribution Φ2 can then be written as an integral:

                      ˆ 𝜋                        ˆ 𝜋                     ˆ 𝜋d 𝜙                ˆ 𝜋/2
                                                                              
            𝑞 1               d𝜙         𝑞              d𝜙       𝑞             2       𝑞                d𝜒
    Φ2 = 2                           =   2
                                                             =   2
                                                                                   =   2
                                                                                                             .
           2𝜋 4𝜋𝜀 0    𝛼    2𝑅 sin
                                   𝜙   8𝜋 𝜀 0𝑅    𝛼    sin
                                                           𝜙   4𝜋 𝜀 0𝑅   𝛼   sin
                                                                                 𝜙   4𝜋 𝜀 0𝑅    𝛼/2    sin 𝜒
                                   2                         2                     2

Using the integral from the formulation of the problem, we calculate:
                  ˆ 𝜋/2
                                           cos 𝜒 + 1 𝜋/2
                                                                                 
                             d𝜒                                  cos 𝛼/2 + 1         4
                                  = − ln                  = ln                 ≈ ln
                      𝛼/2   sin 𝜒            sin 𝜒    𝛼/2          sin 𝛼/2           𝛼

for 𝛼 ≪ 1. Therefore                                       
                                                 𝑞         4
                                           Φ2 ≈ 2      ln     .
                                               4𝜋 𝜀 0𝑅     𝛼
   The total potential and capacitance. The total potential is the sum of Φ1 and Φ2 :
                                                                            
                                𝑞          2𝛼𝑅      𝑞         4       𝑞         8𝑅
               Φ = Φ1 + Φ2 = 2        ln         + 2      ln     = 2        ln     .
                              4𝜋 𝜀 0𝑅       𝑎     4𝜋 𝜀 0𝑅     𝛼     4𝜋 𝜀 0𝑅      𝑎
𝛼 drops out from the expression. From here we obtain the capacitance 𝐶 = 𝑞/Φ :

                                                        4𝜋 2𝜀 0𝑅
                                                  𝐶=           .
                                                        ln 8𝑅𝑎

𝐶 → 0 as 𝑎 → 0.
                                                                                                             S2-8
                                Theoretical Question 2 – Solution                                            ENGLISH


D.2 (1.0 point)
Let 𝑞(𝑡) be the charge on the ring at a time 𝑡. Potential of the disk is thus 𝑞(𝑡)/𝐶. Voltage drop of
the resistor is 𝑅0𝐼 (𝑡) = 𝑅0 d𝑞/d𝑡 . Therefore for time − 2𝑣𝑑 < 𝑡 < 2𝑣𝑑 :

                                                     𝑞(𝑡)      d𝑞
                                                          + 𝑅0    = 𝑉0 .
                                                      𝐶        d𝑡
Integrating this equation and keeping in mind that 𝑞(𝑡) = 0 at 𝑡 = −𝑑/(2𝑣), we get:
                                                             
                                                  − 𝑑    − 𝑡
                                 𝑞(𝑡) = 𝐶𝑉0 1 − e 2𝑣𝑅0𝐶 e 𝑅0𝐶 .

The charge attains the largest absolute value at 𝑡 = 𝑑/(2𝑣). The value of the charge at this time is:
                                                             
                                                      − 𝑣𝑅𝑑 𝐶
                                      𝑞 0 = 𝐶𝑉0 1 − e     0     .

   When 𝑡 > 2𝑣𝑑 , we get:
                                                      𝑞(𝑡)      d𝑞
                                                           + 𝑅0    = 0.
                                                       𝐶        d𝑡
From here:                                                                                    
                                           − 𝑅 𝑡 𝐶 + 2𝑣𝑅𝑑                𝑑
                                                                                    − 2𝑣𝑅𝑑 𝐶           𝑡
                            𝑞(𝑡) = 𝑞 0 e       0        0𝐶   = 𝐶𝑉0 e   2𝑣𝑅0𝐶   −e        0         e− 𝑅𝐶 .
Therefore, we obtain:
                              
                              
                               0                                              for 𝑡 < − 2𝑣𝑑 ;
                                                         
                              
                                         − 2𝑣𝑅𝑑 𝐶 − 𝑅 𝑡 𝐶
                        𝑞(𝑡) = 𝐶𝑉0 1 − e        0 e   0                        for − 2𝑣𝑑 < 𝑡 < 2𝑣𝑑 ;
                                  𝑑               𝑑
                                                            𝑡
                              𝐶𝑉0 e 2𝑣𝑅0𝐶 − e− 2𝑣𝑅0𝐶 e− 𝑅0𝐶
                              
                              
                                                                              for 𝑡 > 2𝑣𝑑 .

    For a lens to be focusing we require that charge is negative, therefore 𝑉0 < 0. The dependence
of charge on time is shown in Figure 6.




                          Figure 6: Charge on the ring as a function of time.
                                                                                                                 S2-9
                                   Theoretical Question 2 – Solution                                           ENGLISH


Part E.     Focal length of a more realistic lens (2 points)

E.1 (1.7 points)
Like in part C, the radial equation of motion of an electron is:

                                                           𝑚𝑟¥ = 2𝑒𝑞(𝑡)𝛽𝑟,

where in this case 𝑞(𝑡) depends on time. Using the notation 𝜂 = 2𝑒𝛽/𝑚, we obtain:

                                                            𝑟¥ − 𝜂𝑞(𝑡)𝑟 = 0.

As 𝑓 /𝑣 ≫ 𝑅0𝐶, then during charging–decharging the electron does not substantially change its ra-
dial position 𝑟 , and we can assume 𝑟 to be constant during the entire charging–decharging process.
In this case the acquired vertical velocity is
                                                ˆ ∞
                                        𝑣𝑟 = 𝜂𝑟       𝑞(𝑡) d𝑡 .
                                                                    −𝑑/(2𝑣)
                                                                                                      ´ 𝑑/(2𝑣)
We can use the derived equations for 𝑞(𝑡) and find the integrals. The integral                            −𝑑/(2𝑣) 𝑞(𝑡) d𝑡 is
(using the notation 𝑑/𝑣 = 𝑡 0 , 𝑅0𝐶 = 𝜏, 𝐶𝑉0 = 𝑄 0 ):
                ˆ 𝑡0 /2                    ˆ 𝑡0 /2                                    h           i
                                                                 𝑡0    𝑡
                            𝑞(𝑡) d𝑡 =                 𝑄 0 1 − e− 2𝜏 e− 𝜏 d𝑡 = 𝑄 0 𝑡 0 − 𝜏 1 − e−𝑡0 /𝜏 .
                  −𝑡 0 /2                   −𝑡 0 /2
            ´∞
The integral 𝑑/(2𝑣) 𝑞(𝑡) d𝑡 is
                                 ˆ ∞           𝑡0           𝑡           h           i
                                                         𝑡0
                                           𝑄 0 e 2𝜏 − e− 2𝜏 e− 𝜏 d𝑡 = 𝑄 0𝜏 1 − e−𝑡0 /𝜏 .
                                  𝑡 0 /2

Adding the two integrals we obtain for the final integral:
                                       ˆ ∞
                                             𝑞(𝑡)𝑑𝑡 = 𝑄 0𝑡 0 .
                                                          −𝑡 0 /2
Interestingly, it does not depend on 𝜏 = 𝑅0𝐶. Therefore, the acquired vertical velocity of the electron
is
                                              𝐶𝑉0𝑑 2𝑒𝛽𝐶𝑉0𝑑𝑟
                                      𝑣𝑟 = 𝜂𝑟      =            .
                                               𝑣         𝑚𝑣
Following the logic similar to part C, we derive the focal length
                                                                       𝐸
                                                            𝑓 =−            .
                                                                     𝑒𝐶𝑉0𝑑𝛽

E.2 (0.3 points).
Comparing 𝑓 = −𝐸/(𝑒𝐶𝑉0𝑑𝛽) with 𝑓 = −𝐸/(𝑒𝑞𝑑𝛽) from part C we immediataly obtain 𝑞 eff = 𝐶𝑉0 .
