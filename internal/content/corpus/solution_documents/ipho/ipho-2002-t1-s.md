---
id: solution-document-ipho-2002-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2002/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2002-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2002/T1_S.pdf."
---

IPhO2002




                     THEORETICAL COMPETITION
                         Tuesday, July 23rd, 2002


Solution I: Ground-Penetrating Radar

1. Speed of radar signal in the material v m :
                         ωt − β z = constant → β z = -constant + ωt (0.2 pts)
                               ω
                         vm =
                                β
                                               1
                         vm =                              1/ 2
                                                                    (0.4 pts)
                                  µε         σ 2 1/ 2  
                               ω (1 + 2 2 ) + 1 
                                 2         εω         

                                  1                  1
                      vm =             1/ 2
                                               =                   (0.4 pts)
                              µε                   µε
                              (1 + 1) 
                              2       




                                              I- 1


IPhO2002


2. The maximum depth of detection (skin depth, δ) of an object in the ground is
inversely proportional to the attenuation constant:
       (0.5 pts)                                          (0.3 pts)                      (0.2 pts)

         1                          1                           1                             1
    δ=     =                             1/2
                                               =                             1/2
                                                                                   =                 1/2
         a        µε         1/2
                                                  µε  1 σ 2                   µε 1 σ 2 
                             σ2                                                       ω .
               ω   1 + 2 2  − 1              ω      1 + 2 2 
                                                                       − 1                   2 2
                                                     2  2 ε ω                    2 2ε ω 
                   2   ε ω      
                     1/ 2
         2  ε 
    δ =               .
         σ  µ 



Numerically δ =
                   (5.31 ε ) m, where σ is in mS/m.
                                r
                                                                (0.5 pts)
                    σ
For a medium with conductivity of 1.0 mS/m and relative permittivity of 9, the skin depth


δ=
     ( 5.31 9 ) = 15.93 m                                           (0.3 pts) + (0.2 pts)
         1.0




                                               I- 2


IPhO2002


3. Lateral resolution:
            Antenna
                                                                        λ
                                                        r 2 + d 2 = (d + )2
                                                                        4
              d                        λ
                                d+
                                       4                                1
                                                            λd λ2  2
                                                        r =   + 
                                                            2 16 

                         r
              rod                          rod
                                                         (1.0 pts)
                                           1
                   1  4λ λ2  2
r =0.5 m, d =4 m:    =       +         , λ2 + 32λ − 4 = 0                                 (0.5 pts)
                   2  2 16 
       The wavelength is λ=0.125 m.                                           (0.3 pts) + (0.2 pts)
The propagation speed of the signal in medium is

                                  1          1           1      1
                          vm =        =               =
                                  µε      µo µr εo εr   µo εo µr εr
                                    c      0.3                       1
                             vm =        =       m/ns , where c =         and µr = 1
                                   µr εr     εr                     µo εo
                             vm = 0.1 m/ns = 108 m/s                                 (0.5 pts)

      The minimum frequency need to distinguish the two rods as two separate objects is

                                       v
                             f min =                                                 (0.5 pts)
                                       λ
                             0.3
                               9 x10 9 Hz = 800 MHz
                    f min =                                          (0.3 pts) + (0.20 pts)
                            0.125




                                                 I- 3


IPhO2002


4. Path of EM waves for some positions on the ground surface
                                                  Antenna Positions
                                       x                                         Scanning direction
                           TR                        TR              TR
                                                                       ε1 , σ1

       d                                            2
                                   1                         3


                                                         Buried rod(ε2 , σ2 )


The traveltime as function of x is

                       2
                 t v  = d 2 + x2 ,
                 2                                                                   (1.0 pts)
                     
                                   4d 2 + 4 x 2
                     t ( x) =                                                          (1.0 pts)
                                        v

                           2 ε1r
                t ( x) =               d 2 + x2
                            0.3




                      Graph of traveltime, t(x)
                              Antenna Positions                  x




                                                    t


               For x =0                                                                (1.0 pts)

               100 = 2×(3/0.3) d

               d=5m                                                                    (0.5 pts)




                                                  I- 4
