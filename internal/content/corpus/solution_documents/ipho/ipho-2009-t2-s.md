---
id: solution-document-ipho-2009-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2009/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2009-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2009/T2_S.pdf."
---

THEORETICAL PROBLEM 2

                                          SOLUTION

                DOPPLER LASER COOLING AND OPTICAL MOLASSES

  The key to this problem is the Doppler effect (to be precise, the longitudinal Doppler
  effect): The frequency of a monochromatic beam of light detected by an observer
  depends on its state of motion relative to the emitter, i.e. the observed frequency is

                                    1 v / c      v
                                           1  
                                    1 v / c      c

 where v is the relative speed of emitter and observer and  the frequency of the
 emitter. The upper-lower signs correspond, respectively, when source and observer
 move towards or away from each other. The second equality holds in the limit of low
 velocities (non-relativistic limit).
                                                
  The frequency of the laser in the lab is  L ;  0 is the transition frequency of the atom;
  the atom moves with speed v towards the incident direction of the laser:

  It is important to point out that the results must be given to first significant order in v /c
  or q / mv .                     
                     
  PART I: BASICS OF LASER COOLING                                                
  1. Absorption.

  1a   Write down the resonance condition for the absorption of the photon.              0.2
                v
       0  L 1  
                c

  1b Write down the momentum pat of the atom after absorption, as seen in the 0.2
     laboratory
                         
      pat  p  q  mv  L
                          c
                       
  1c   Write down the energy at of the atom after absorption, as seen in the            0.2
       laboratory

                pat2         mv2
        at          
                         0       L
                2m            2
     2. Spontaneous emission in the x direction.


     First, one calculates the energy of the emitted photon, as seen in the lab reference frame.
     One must be careful to keep the correct order; this is because the velocity of the atom
     changes after the absorption, however, this is second order correction for the emitted
     frequency:

                     v                     q
      ph  0 1           with v  v 
                     c                      m
     thus,
                     v      q 
      ph  0 1             
                     c      mc 
                 v  v q 
           L 1  1   
                 c  c mc 
                    q 
            L 1     
                 mc 
                  q  v  
           L 1     
                  mv  c  
           L

     2a      Write down the energy of the emitted photon,  ph , after the emission      0.2
             process in the x direction, as seen in the laboratory.
              ph  L
                                             
     2b Write down the momentum of the emitted photon p ph , after the emission        0.2
        process in the x direction, as seen in the laboratory.
         p ph  L / c
                                                      
     Use     
         conservation of momentum (see 1b):

     pat  p ph  p  q

     2c      Write down the momentum of the atom pat , after the emission process in     0.2
             the x direction, as seen in the laboratory.
              pat  p  mv

                                      
   
    2d Write down the energy of the atom at , after the emission process in the         0.2

       x direction, as seen in the laboratory.

                   p 2 mv 2
             at                      
                 2m   2




3. Spontaneous emission in the x direction.

The same as in the previous questions, keeping the right order
                       
3a   Write down the energy of the emitted photon,  ph , after the emission      0.2
     process in the  x direction, as seen in the laboratory.
                 v          v  v                  v
      ph  0 1    L 1  1    L 1  2 
                 c          c  c                c

3b Write down the momentum of the emitted photon p ph , after the emission       0.2
   process in the  x direction, as seen in the laboratory.
           L      v
    p ph      1  2 
            c       c                      


3c   Write down the momentum of the atom pat , after the emission process in     0.2
     the  x direction, as seen in the laboratory.
                                             v      
      pat  p  q  p ph  p  q  L 1  2   mv  2 L
                                      c 
                                              c       c


3d Write down the energy of the atom at , after the emission process in the     0.2
    x direction, as seen in the laboratory.
         p 2 mv2          q 
    at  at       1  2    
         2m     2            
                           mv


4. Average emission after absorption.

The spontaneous emission processes occur with equal probabilities in both directions.

4a   Write down the average energy of an emitted photon,  ph , after the        0.2
     emission process.
           1  1              v
      ph   ph   ph  L 1  
           2      2            c             

4b Write down the average momentum of an emitted photon p ph , after the         0.2
   emission process.
          1       1        L v      q v 
    p ph  p ph  p ph         mv        0 second order
          2       2         c c       mv c      


4c   Write down the average energy of the atom at , after the emission process. 0.2
           1       1        mv2  q 
      at   at   at      1  
           2       2         2  mv 
                                       
     4d Write down the average momentum of the atom pat , after the emission        0.2
        process.
              1      1          
         pat  pat  pat  p  L
              2      2           c
                                          



     5. Energy and momentum transfer.

     Assuming a complete one-photon absorption-emission process only, as described
     above, there is a net average momentum and energy transfer between the laser and the
     atom.

     5a   Write down the average energy change  of the atom after a complete      0.2
          one-photon absorption-emission process.
                                         1       1    v
             atafter   atbefore   qv   L
                                         2     2    c


     5b Write down the average momentum change p of the atom after a               0.2
        complete one-photon absorption-emission process.
                                           
        p  patafter  patbefore  q   L
                                            c 

     6. Energy and momentum transfer by a laser beam along the x direction.


     6a   Write down the average energy change  of the atom after a complete      0.3
          one-photon absorption-emission process.
                                                          
                                         1       1     v
             atafter   atbefore   qv   L
                                         2     2     c


     6b Write down the average momentum change p of the atom after a               0.3
        complete one-photon absorption-emission process.
                                           
        p  patafter  patbefore  q   L
                                            c 


     PART II: DISSIPATION AND THE FUNDAMENTALS OF OPTICAL
     MOLASSES


     Two counterpropagating laser beams with the same but arbitrary frequency  L are
     incident on a beam of N atoms that move in the x direction with (average) velocity
     v.
                                                                       
                                        

       7. Force on the atomic beam by the lasers.

       On the average, the fraction of atoms found in the excited state is given by,

                                         N exc               2R
                                Pexc          
                                          N                         2
                                                    0   L  
                                                             2
                                                                        22R
                                                                    4

       where  0 is the resonance frequency of the atoms and R is the so-called Rabi
       frequency; 2R is proportional to the intensity of the laser beam. The lifetime of the
                   
       excited energy level of the atom is 1 .
                                                     
      The force is calculated as the number of absorption-emission cycles, times the
        
      momentum   exchange in each event, divided by the time of each event. CAREFUL!
                              the Doppler shift of each laser, as seen by the atoms:
      One must take into account


       7a   With the information found so far, find the force that the lasers exert on     1.5
            the atomic beam. You must assume that mv  q .
             F  Np  Pexc
                         
                              Np  Pexc
                                        
                                           
                                                                                 
                                                                                 
                               2R                             2R               
                                                                                Nq
                                                                     
                                    2                               2
                                                               
                                        2                               2
                               v
               0   L   L                              v
                                          2 R  0  L  L  
                                               2
                                                                           2 R 
                                                                               2

                             c     4                       c     4           

       8. Low velocity limit.

       Assume now the velocity to be small enough in order to expand the force to first order
       in v .

       8a   Find an expression for the force found in Question (7a), in this limit.        1.5
                         4 Nq 22R 
            F                                 2
                                                  (0  L ) v
                                 2       2 
                   0  L  
                               2
                                       2 R 
                                 4           


       8b Write down the condition to obtain a positive force (speeding up the             0.25
          atom). 0  L



       8c 
           Write down the condition to obtain a zero force.                                0.25
           0  L



 
     8d Write down the condition to obtain a negative force (slowing down the              0.25
        atom).
        0  L … this is the famous rule “tune below resonance for cooling
        down”


 8e     Consider now that the atoms are moving with a velocity  v (in the  x           0.25
          direction). Write down the condition to obtain a slowing down force on
          the atoms.
          0  L … i.e. independent of the direction motion of the atom.


     9. Optical molasses

     In the case of a negative force, one obtains a frictional dissipative force. Assume that
     initially, t  0 , the gas of atoms has velocity v 0 .

     9a   In the limit of low velocities, find the velocity of the atoms after the laser   1.5
          beams have been on for a time  .
                              dv
           F  v  m            v
                              dt         can be read from (8a)
                      t / m
           v  v 0e

                            
 9b Assume now that the gas of atoms is in thermal equilibrium at a                      0.5
      temperature T0 . Find the temperature T after the laser beams have been
      on for a time  .

                          1       1
          Recalling that mv 2  kT
                                     in 1 dimension, and using v as the average
                        2       2
          thermal velocity in the equation of (9a), we can write down
          T  T0e2t / m
                                                        
              


