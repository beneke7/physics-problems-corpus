---
id: solution-document-ipho-2021-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2021/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2021-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2021/T1_S.pdf."
---

S1-1
                               Theoretical Question 1 – Solution                                 ENGLISH


Planetary Physics (10 points)
Part A.      Mid-ocean ridge (5.0 points)

A.1 (0.8 points)




                                                 Figure 1

Let ℎ0 be the height of the column of oil (see Fig. 1). Then pressure at depth ℎ below the water surface
must be 𝑝ℎ = 𝜌 0𝑔ℎ = 𝜌 oil𝑔ℎ0, from where ℎ0 = 𝜌 oil0 ℎ. Horizontal force on the plate 𝐹𝑥 = 𝐹 1 − 𝐹 0, where
                                                  𝜌

                                     𝜌 𝑔ℎ 0
the force due to new fluid is 𝐹 1 = oil2 · ℎ0𝑤 and the force due to water is 𝐹 0 =
                                                                                       𝜌 0𝑔ℎ
                                                                                          2 · ℎ𝑤 .
    Combining all the equation above, we get
                                                          𝜌 0𝑔ℎ 2𝑤
                                                       
                                               𝜌0
                                        𝐹𝑥 =         −1            .
                                               𝜌 oil          2
This force acts on the right plate to the right.

A.2 (0.6 points)
Consider a rectangular mass element of the crust. Since relation 𝑙 (𝑇 ) = 𝑙 1 [1 − 𝑘𝑙 (𝑇1 − 𝑇 ) /(𝑇1 − 𝑇0 )]
holds for all three dimensions of the solid, its volume 𝑉 satisfies
                                                             3
                                                      𝑇1 − 𝑇
                                      𝑉 = 𝑉1 1 − 𝑘𝑙              ,
                                                      𝑇1 − 𝑇0
where 𝑉1 is the volume at 𝑇 = 𝑇1 . If the mass of the element is 𝑚, density is then
                                                        −3                      −3
                              𝑚 𝑚               𝑇1 − 𝑇                    𝑇1 − 𝑇
                     𝜌 (𝑇 ) =  =         1 − 𝑘𝑙              = 𝜌 1 1 − 𝑘𝑙              .
                              𝑉 𝑉1              𝑇1 − 𝑇0                   𝑇1 − 𝑇0
Since 𝑘𝑙  1, this can be approximated as
                                                                  
                                                           𝑇1 − 𝑇
                                      𝜌 (𝑇 ) ≈ 𝜌 1 1 + 3𝑘𝑙           ,
                                                           𝑇1 − 𝑇0
so that 𝑘 = 3𝑘𝑙 .
                                                                                                   S1-2
                               Theoretical Question 1 – Solution                                   ENGLISH


A.3 (1.1 points)
Since mantle behaves like a fluid in hydrostatic equilibrium, pressure 𝑝 (𝑥, 𝑧) at 𝑧 = ℎ + 𝐷 must be
the same for all 𝑥. Therefore,
                                    𝑝 (0, ℎ + 𝐷) = 𝑝 (∞, ℎ + 𝐷) .
Similarly, we must have
                                           𝑝 (0, 0) = 𝑝 (∞, 0) .
Hence, the change in pressure between 𝑧 = 0 and 𝑧 = ∞ must be the same at both 𝑥 = 0 and 𝑥 = ∞.
At the ridge axis
                               𝑝 (0, ℎ + 𝐷) − 𝑝 (0, 0) = 𝜌 1𝑔 (ℎ + 𝐷) ,
while far away
                                                             ∫ ℎ+𝐷
                      𝑝 (∞, ℎ + 𝐷) − 𝑝 (∞, 0) = 𝜌 0𝑔ℎ +                       𝜌 (𝑇 (∞, 𝑧)) 𝑔 d𝑧.
                                                              ℎ
Since the temperature of the crust at 𝑥 = ∞ depends linearly on height, after applying the relevant
temperature boundary conditions,
                                                                          𝑧 −ℎ
                                   𝑇 (∞, 𝑧) = 𝑇0 + (𝑇1 − 𝑇0 )                  .
                                                                            𝐷
From all the equations above and by using the density formula given in the problem text,
                                                                               !
                                                      𝑇1 − 𝑇0 − (𝑇1 − 𝑇0 ) 𝑧−ℎ
                                       ∫ ℎ+𝐷
                                                                            𝐷
                𝜌 1𝑔 (ℎ + 𝐷) = 𝜌 0𝑔ℎ +       𝜌1 1 + 𝑘                            𝑔 d𝑧,
                                        ℎ                     𝑇1 − 𝑇0

from where we straightforwardly obtain
                                                        
                                               2      𝜌0
                                            𝐷=     1−      ℎ.
                                               𝑘      𝜌1

A.4 (1.6 points)
The net horizontal force on the half of the ridge is the difference between the pressure forces acting
at 𝑥 = 0 and 𝑥 = ∞:                 ∫                       ∫
                                          ℎ+𝐷                             ℎ
                               𝐹 =𝐿             𝑝 (0, 𝑧) d𝑧 − 𝐿               𝑝 (∞, 𝑧) .
                                      0                               0
From considerations of the previous question, pressure at 𝑥 = 0 is

                                      𝑝 (0, 𝑧) = 𝑝 (0, 0) + 𝜌 1𝑔𝑧,

while very far away
                                      𝑝 (∞, 𝑧) = 𝑝 (∞, 0) + 𝜌 0𝑔𝑧
The equations above can be combined into
                       ∫ ℎ+𝐷                           ∫ ℎ
                 𝐹 =𝐿        (𝑝 (0, 0) + 𝜌 1𝑔𝑧) d𝑧 − 𝐿     (𝑝 (∞, 0) + 𝜌 0𝑔𝑧) d𝑧.
                           0                                      0
                                                                                             S1-3
                              Theoretical Question 1 – Solution                             ENGLISH


After a straightforward integration and using 𝑝 (0, 0) = 𝑝 (∞, 0),

                                                      (ℎ + 𝐷) 2        ℎ2
                              𝐹 = 𝐿𝑝 (0, 0) 𝐷 + 𝐿𝜌 1𝑔           − 𝐿𝜌 0𝑔 .
                                                          2            2
Since 𝑘  1, and 𝐷 ∝ 𝑘 −1 , the term with 𝐷 2 ∝ 𝑘 −2 is of the leading order, hence, after substituting
the result of A.3, the required answer is

                                              2𝑔𝐿ℎ 2 (𝜌 1 − 𝜌 0 ) 2
                                        𝐹≈                          .
                                                    𝑘 2𝜌1

A.5 (0.9 points)
Method 1: dimensional analysis. The timescale 𝜏 is expected to depend only on density of the
crust 𝜌 1 , its specific heat 𝑐, thermal conductivity 𝜅 and thickness 𝐷. Hence, we can write

                                           𝜏 = 𝐴𝜌 1𝛼 𝑐 𝛽 𝜅𝛾 𝐷 𝛿 ,

where 𝐴 is a dimensionless constant. We will obtain the powers 𝛼–𝛿 via dimensional analysis.
    Define the symbols for different dimensions: L for length, M for mass, T for time and Θ for tem-
perature. Then 𝜏, 𝜌 1 , 𝑐, 𝜅 and 𝐷 have dimensions T, ML−3 , L2 T−2 Θ−1 , MLT−3 Θ−1 and L, respectively.
The resulting set of linear equations to balance the powers of length, mass, time and temperature,
respectively, is
                                        
                                        
                                         0 = −3𝛼 + 2𝛽 + 𝛾 + 𝛿,
                                        
                                         0 = 𝛼 + 𝛾,
                                        
                                        
                                        
                                        
                                         1 = −2𝛽 − 3𝛾,
                                        
                                         0 = −𝛽 − 𝛾 .
                                        
This gives 𝛼 = 𝛽 = 1, 𝛾 = −1, 𝛿 = 2. Hence,

                                                     𝑐𝜌 1 𝐷 2
                                              𝜏 =𝐴            .
                                                       𝜅

Method 2: scale analysis. Consider a piece of crust of area 𝑆. Heat flux that has to be trans-
mitted through the crust is of order 𝑄 ∼ 𝑐𝜌 1𝑆𝐷Δ𝑇 , where Δ𝑇 = 𝑇1 − 𝑇0 . On the other hand, the law
of thermal conductivity gives that 𝜅 Δ𝑇   𝑄
                                      𝐷 ∼ 𝑆𝜏 .
    From the two equations, 𝑐𝜌 1𝑆𝐷Δ𝑇 ∼ 𝑆𝜏𝜅 Δ𝑇  𝐷 , from where we get that 𝜏 is independent of Δ𝑇 and

                                                    𝑐𝜌 1 𝐷 2
                                              𝜏∼             .
                                                      𝜅
                                                                                                 S1-4
                                Theoretical Question 1 – Solution                               ENGLISH


Part B.      Seismic waves in a stratified medium (5.0 points)

B.1 (1.5 points)
Seismic waves in this problem can be treated by using ray theory. Namely, their propagation is
described by the Snell’s law of refraction

                                           𝑛 (0) sin 𝜃 0 = 𝑛 (𝑧) sin 𝜃,

where the refractive index is
                                                     𝑐      𝑐
                                       𝑛 (𝑧) =          =       
                                                   𝑣 (𝑧) 𝑣 1 + 𝑧
                                                               0          𝑧0

and 𝑐 denotes the seismic wave speed in a material with refractive index 𝑛 = 1. From the two
equations above we have                   
                                        𝑧
                                 𝑣0 1 +      sin 𝜃 0 = 𝑣 0 sin 𝜃 .
                                        𝑧0

Method 1.      Since this describes an arc of a circle, we have that at 𝜃 = 𝜋2 , 𝑧 = 𝑅 − 𝑅 sin 𝜃 0 (Fig. 2),
giving                                                    
                                             𝑅 − 𝑅 sin 𝜃 0
                                          1+                 sin 𝜃 0 = 1,
                                                 𝑧0
from where the circle radius 𝑅 = sin𝑧0𝜃 0 . From simple geometry we get

                                              𝑥 1 (𝜃 0 ) = 2𝑅 cos 𝜃 0,

leading to
                                             𝑥 1 (𝜃 0 ) = 2𝑧 0 cot 𝜃 0,
i.e. 𝐴 = 2𝑧 0 and 𝑏 = 1.




                                                    Figure 2
                                                                                                  S1-5
                               Theoretical Question 1 – Solution                                 ENGLISH

                                                    
Method 2.      Implicitly differentiating 𝑣 0 1 + 𝑧𝑧0 sin 𝜃 0 = 𝑣 0 sin 𝜃 gives

                                            d𝑧
                                               sin 𝜃 0 = cos 𝜃 d𝜃 .
                                            𝑧0
An infinitesimal ray path length d𝑙 is related to the change in the vertical coordinate via

                                                  d𝑧 = d𝑙 cos 𝜃,

giving
                                                         𝑧0
                                               d𝑙 =            d𝜃 .
                                                       sin 𝜃 0
This is an equation of an arc of a circle of radius 𝑅 = sin𝑧0𝜃 0
   Alternatively, instead of considering an infinitesimal ray path length d𝑙, one can obtain the
answer by writing
                                                  d𝑧 d𝑧 d𝜃
                                          cot 𝜃 =    =           .
                                                  d𝑥 d𝜃 d𝑥
The first derivative can be eliminated via Snell’s law, leading to
                                                        𝑧 0 cos 𝜃 d𝜃
                                            cot 𝜃 =                  ,
                                                         sin 𝜃 0 d𝑥
which can be integrated to get
                                                  ∫ end
                                          𝑧0                          2𝑧 0 cos 𝜃 0
                                 𝑥1 = −                     dcos𝜃 =                ,
                                        sin 𝜃 0     start               sin 𝜃 0
where we used Snell’s law again to get that the ray has cos 𝜃 = − cos 𝜃 0 at the point where it reaches
the surface.

B.2 (1.5 points)
In two dimensions, 𝜋𝐸 d𝜃 0 is the energy carried by rays that are emitted within interval [𝜃 0, 𝜃 0 + d𝜃 0 ).
On the other hand, the energy carried by rays that arrive at [𝑥, 𝑥 + d𝑥) is 𝜀 d𝑥. Therefore,

                                                       𝐸 d𝜃 0
                                                  𝜀=          .
                                                       𝜋 d𝑥
Using the result of question B.1,

                                                                    𝑏 𝐴2 + 𝑥 2
                                                                               
                       d𝑥        𝐴𝑏                    2       
                            =− 2          = −𝐴𝑏 1 + cot (𝑏𝜃 0 ) = −              .
                       d𝜃 0   sin (𝑏𝜃 0 )                              𝐴
Hence,
                                                𝐸𝐴         2𝐸𝑧 0
                                  𝜀 (𝑥) =        2   2
                                                       =              .
                                            𝜋𝑏 (𝐴 + 𝑥 ) 𝜋 4𝑧 02 + 𝑥 2
This function is plotted in Fig. 3.
                                                                                                    S1-6
                                 Theoretical Question 1 – Solution                                 ENGLISH




                                     Figure 3. Plot of the function 𝜀 (𝑥).


B.3 (2.0 points)
                                                   
Define 𝑥 − = 𝑥 1 𝜃 0 − 𝛿𝜃2 0 and 𝑥 + = 𝑥 1 𝜃 0 + 𝛿𝜃2 0 . To the leading order in 𝛿𝜃 0 , 𝑥 − ≈ 𝑥 + ≈ 𝑥 1 (𝜃 0 ).
With each reflection of the signal, the horizontal distance between the points where the edges of
the signal reflect increases by |𝑥 + − 𝑥 − | = 𝑥 − − 𝑥 + . When moving along the positive 𝑥-axis, these
zones get wider until they overlap. If this happens after 𝑁 reflections, then

                                                         𝑥 1 (𝜃 0 )
                                                   𝑁 ≈              ,
                                                         𝑥− − 𝑥+
where the approximate sign tends to equality as 𝛿𝜃 0 → 0.
  The position where the zones start to overlap is at 𝑥 max = 𝑁 𝑥 1 (𝜃 0 ). Therefore,

                                                           𝑥 1 (𝜃 0 ) 2
                                    𝑥 max =                                  .
                                              𝑥 1 𝜃 0 − 𝛿𝜃2 0 − 𝑥 1 𝜃 0 + 𝛿𝜃2 0

Since 𝛿𝜃 0  𝜃 0 , we can approximate
                                                 
                             𝛿𝜃 0              𝛿𝜃 0      d𝑥 1 (𝜃 0 )           𝐴𝑏
                    𝑥1 𝜃 0 −        − 𝑥1 𝜃 0 +        ≈−             𝛿𝜃 0 =    2
                                                                                        𝛿𝜃 0 .
                              2                 2          d𝜃 0             sin (𝑏𝜃 0 )
Combining the last two equations and substituting the 𝑥 1 (𝜃 0 ) expression gives

                                                𝐴 cos2 (𝑏𝜃 0 ) 2𝑧 0 cos2 𝜃 0
                                      𝑥 max =                 =              .
                                                   𝑏 𝛿𝜃 0           𝛿𝜃 0
