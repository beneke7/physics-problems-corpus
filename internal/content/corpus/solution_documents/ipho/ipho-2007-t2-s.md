---
id: solution-document-ipho-2007-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2007/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2007-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2007/T2_S.pdf."
---

Question “Orange”
1.1)
First of all, we use the Gauss’s law for a single plate to obtain the electric field,
     σ
E=      .           (0.2)
     ε0
The density of surface charge for a plate with charge, Q and area, A is
     Q
σ= .               (0.2)
     A
Note that the electric field is resulted by two equivalent parallel plates. Hence the
                                                   1
contribution of each plate to the electric field is E . Force is defined by the electric filed
                                                   2
times the charge, then we have
         1          Q2
Force = E Q =               (0.2)+ (0.2) ( The ½ coefficient + the final result)
         2         2ε 0 A

1.2)
The Hook’s law for a spring is
 Fm = − k x . (0.2)
In 1.2 we derived the electric force between two plates is
       Q2
 Fe =        .
      2ε 0 A
The system is stable. The equilibrium condition yields
 Fm = Fe , (0.2)
                   Q2
⇒           x=              (0.2)
                 2ε 0 A k

1.3)
The electric field is constant thus the potential difference, V is given by
V = E ( d − x)                    (0.2)
(Other reasonable approaches are acceptable. For example one may use the definition of
capacity to obtain V .)
By substituting the electric field obtained from previous section to the above equation, we
            Qd          Q2 
get, V =          1 −                     (0.2)
            ε 0 A  2ε 0 A k d 

1.4)
C is defined by the ratio of charge to potential difference, then
     Q
C= .            (0.1)
     V


                                                      −1
                                C       Q2 
Using the answer to 1.3, we get     
                                  = 1−                       (0.2)
                                C0  2ε 0 A k d 

1.5)
Note that we have both the mechanical energy due to the spring
      1
U m = kx 2 ,        (0.2)
      2
and the electrical energy stored in the capacitor.
      Q2
UE =         .       (0.2)
      2C
Therefore the total energy stored in the system is
     Q2d          Q2 
U=          1 −               (0.2)
     2ε 0 A  4ε 0 A k d 

2.1)
For the given value of x , the amount of charge on each capacitor is

              ε 0 AV
Q1 = V C1 =     ,             (0.2)
           d−x
           ε AV
Q2 = V C2 = 0    .            (0.2)
            d+x

2.2)
Note that we have two capacitors. By using the answer to 1.1 for each capacitor, we get
         2
      Q
F1 = 1 ,
     2ε 0 A
         2
      Q
F2 = 2 .
     2ε 0 A
As these two forces are in the opposite directions, the net electric force is
                                       ε AV 2  1               1     
FE = F1 − F2 , (0.2) ⇒           FE = 0               2
                                                          −            (0.2)
                                                                    2 
                                          2  ( d − x)      ( d + x) 

2.3)
Ignoring terms of order x 2 in the answer to 2.2., we get
      2ε 0 AV 2
 FE =           x     (0.2)
         d3

2.4)
There are two springs placed in series with the same spring constant, k , then the
mechanical force is


Fm = −2 k x . (The coefficient (2) has (0.2))
Combining this result with the answer to 2.4 and noticing that these two forces are in the
opposite directions, we get
                                                    ε AV 2 
F = Fm + FE ,             ⇒            F = − 2  k − 0 3  x , (Opposite signs of the
                                                      d    
two forces have (0.3))
                ε AV 2 
⇒ keff = 2 k − 0 3  (0.2)
                  d    

2.5)
By using the Newtown’s second law,
F = ma        (0.2)
and the answer to 2.4, we get
      2     ε AV 2 
a = −  k − 0 3  x (0.2)
      m       d     




3.1)
Starting with Kirchhoff’s laws, for two electrical circuits, we have

 QS        Q2
 C +V − C = 0
 S          2


 QS         Q
−     +V − 1 = 0
 CS         C1    (Each has (0.3), Note: the sings may depend on the specific choice made)


 Q2 − Q1 + QS = 0




               QS
Noting that Vs =     one obtains
               CS
           2ε 0 A x
            2      2
⇒ VS = V d − x          . ((0.4) + (0.2): (0.4) for solving the above equations and (0.2)
              2ε 0 A d
        CS + 2
              d − x2
                                         for final result)


Note: Students may simplify the above relation using the approximation d 2 >> x 2 . It does
not matter in this section.

3.2)
Ignoring terms of order x 2 in the answer to 3.1., we get

            2ε 0 A x
VS = V    2
                          .    (0.2)
         d C S + 2ε 0 A d

4.1)
The ratio of the electrical force to the mechanical (spring) force is
 FE ε 0 AV 2
     =           ,
 Fm      k d3
Putting the numerical values:
 FE
     = 7.6 × 10 −9 .        ((0.2) + (0.2) + (0.2): (0.2) for order of magnitude, (0.2) for
 Fm
                           two significant digits and (0.2) for correct answer (7.6 or 7.5)).
As it is clear from this result, we can ignore the electrical forces compared to the electric
force.



4.2)
As seen in the previous section, one may assume that the only force acting on the moving
plate is due to springs:
F = 2k x . (The concept of equilibrium (0.2))
Hence in mechanical equilibrium, the displacement of the moving plate is
     ma
x=        .
     2k
The maximum displacement is twice this amount, like the mass spring system in a
gravitational force field, when the mass is let to fall.
xmax = 2 x (0.2)
        ma
xmax =         (0.2)
         k

4.3)
At the acceleration
a=g,            (0.2)
The maximum displacement is
       mg
xmax =     .
        k
Moreover, from the result obtained in 3.2, we have


          2ε 0 A xmax
VS = V     2
        d C S + 2ε 0 A d
This should be the same value given in the problem, 0.15 V .
                2ε 0 A  V xmax     
⇒        CS =                 − 1   (0.2)
                  d  VS d          
⇒        C S = 8.0 × 10 −11 F           (0.2)

4.4)
Let l be the distance between the driver’s head and the steering wheel. It can be
estimated to be about
l = 0 .4 m − 1 m .       (0.2)
Just at the time the acceleration begins, the relative velocity of the driver’s head with
respect to the automobile is zero.
  ∆v(t = 0) = 0 ,        (0.2)
then
     1                       2l
                ⇒
          2
 l = g t1             t1 =         (0.2)
     2                         g
t1 = 0.3 − 0.5 s       (0.2)

4.5)
The time t 2 is half of period of the harmonic oscillator, hence

      T
t2 =     ,       (0.3)
       2
The period of harmonic oscillator is simply given by
           m
T = 2π         , (0.2)
           2k
therefore,
t 2 = 0.013 s . (0.2)

As t1 > t 2 , the airbag activates in time.         (0.2)
