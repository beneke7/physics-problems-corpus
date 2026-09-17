---
id: solution-document-ipho-2002-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2002/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2002-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2002/T2_S.pdf."
---

THEORETICAL COMPETITION
                             Tuesday, July 23rd , 2002


Solution II: Sensing Electrical Signals

1.      When a point current source Is is in infinite isotropic medium, the current
density vector at a distance r from the point is

r   I r
j = s3 r
   4πr

[+1.5 pts] (without vector notation, -0.5 pts)

2.                                                    Assuming that the resistivities of the
                                                      prey body and that of the surrounding
                                                      seawater are the same, implying the
                           P                          elimination of the boundary surrounding
                                                      the prey, the two spheres seem to be in
                                                      infinite isotropic medium with the
                                                      resistivity of ρ. When a small sphere
                           y                          produces current at a rate Is, the current
                                     prey             flux density at a distance r from the
                 −               +                    sphere's center is also

           x = −l 2
                  s
                         x=0    x = +l 2
                                       s
                                                      r   I r
                                                      j = s3 r
                                                         4πr


The seawater resistivity is ρ, therefore the field strength at r is

rr        r ρI s r
E (r ) = ρ j =       r         [+0.2 pts]
               4πr 3

In the model, we have two small spheres. One is at positive voltage relative to the
other therefore current Is flows from the positively charged sphere to the negatively
charged sphere. They are separated by ls. The field strength at P(0,y) is:



                                            II-   1
r     r    r
E p = E+ + E−            [+0.8 pts]
                                                                                
                                                                                
                                                                                
       ρI s               1       ls                     1        ls       
     =                             − i + yj  +                     − i − yj 
       4π                      3
                                    2       
                                                                  3
                                                                       2       
               l s 
                         2
                              
                             2
                                2                  ls  2
                                                                 
                                                                  2
                                                                                 
              + y                             + y    2
                                                                                 
                                                               
               2                            2                          
                                 
                                 
                                 
     ρI            l s (− i )
    = s                          
                                3 
     4π              2
             ls            2
                              2 
                   +   y
                                
             2             
r    ρI l
E p ≈ s 3s (− i ) for ls << y              [+1.0 pts]
     4πy


3.        The field strength along the axis between the two source spheres is:

                                       
                                       
r        ρI s     1             1      
E (x ) =                2
                           +          2 
                                          (− i )        [+0.5 pts]
         4π       ls          ls  
              x − 2       x +  
                                  2 
                          

The voltage difference to produce the given current Is is

                             ls  
                                                                            
                             −rs                                          
                             r
                            2    
                                   r     ρI s       1              1        
Vs = ∆V = V + − V − = − ∫ E (x ).d x = −     ∫             2
                                                              +            2 
                                                                               (− i .)(idx) [+0.5 pts]
                        l              4π         l s          l s    
                                                x − 2        x +  
                              s
                        − +r    s
                        2    
                                                                  2 
                                                                                           
                                                                                           
      ρI     1          1               1          + 1           1               1          
     = s                       −                                        −
      4π  − 2 + 1  l s     l   l          l      − 2 + 1  ls      l   l          l  
                   − rs − s   − s + rs − s            − rs + s   − s + rs + s  
                   2       2  2           2             2       2  2           2  
         ρI s  2    2  2 ρI s  l s − rs − rs  ρI s  l s − 2 rs 
     =         −         =                     =                 
         4π  rs l s − rs   4π  (l s − rs )rs  2πrs  l s − rs 
                ρI s
Vs = ∆V ≈                for l s >> rs .     [+ 0.5 pts]
               2π rs




                                            II-    2
    The resistance between the two source spheres is:

           Vs   ρ
    Rs =      =
           I s 2πrs

    [+0.5 pts]

    The power produced by the source is:

                 ρI s 2
    P = I s Vs =
                 2πrs

    [+0.5 pts]

4.                                                          V is the voltage difference between the
                                                            detector’s spheres due to the electric
                              Rm
                                                            field induced by the prey, Rm is the inner
                                                            resistance due to the surrounding sea
                         id                                 water. V d and Rd are respectively the
                 +                   Rd
         V                                       Vd         voltage difference between the detecting
                 −                                          spheres and the resistance of the
                                                            detecting element within the predator
                                                            and id is the current flowing in the closed
                                                            circuit.

.                                                           Analog to the resistance between the two
                                                            source spheres, the resistance of the
                               Rd         predator          medium with resistivity ρ between the
                                                            detector spheres, each having a radius of
                                                            rd is:
                                ld
                                                                    ρ
                                                            Rm =
                                                                   2πrd
                                y

                                          prey              [+0.5 pts]
                     −                +
                                                            Since ld is much smaller than y, the
                              x=0
                                                            electric field strength between the
                               ls                           detector spheres can be assumed to be
                                                            constant, that is:

                                                         ρI s l s
                                                            E=       [+0.2 pts]
                                                         4π y 3
    Therefore, the voltage difference present in the medium between the detector spheres
    is:
                ρI l l
    V = El d = s s 3 d        [+0.3 pts]
                 4πy



                                                  II-   3
The voltage difference across the detector spheres is:

            Rd     ρI l l                 Rd
Vd = V            = s s3 d
         R d + Rm   4πy                       ρ
                                      Rd +
                                             2πrd
[+0.5 pts]

The power transferred from the source to the detector is:

                                                    2
                  V            ρI l l           Rd
 Pd = i d Vd =          Vd =  s s 3 d                  2
               Rd + R m        4πy                ρ 
                                            Rd +       
                                                  2πrd 
[+0.5 pts]


5.       Pd is maximum when

               Rd                    Rd
Rt =                         =                      is maximum           [+0.5 pts]
               ρ 
                         2
                                 (R d + Rm )2
        Rd +       
              2πrd 

Therefore,

                         2
dRt 1(R d + Rm ) − R d 2 (Rd + Rm )
    =                               =0                      [+0.5 pts]
dRd          (Rd + R m )4
(R d + Rm ) − 2R d = 0
                      ρ
Rdoptimum = Rm =                      [+0.5 pts]
                     2π rd


The maximum power is:

                             2                          2
  max imum       ρ I l l  πrd ρ (I s l s l d ) rd
Pd           =  s s 3 d    =
                 4πy  2 ρ        32π y 6

[+0.5 pts]




                                                    II-     4
