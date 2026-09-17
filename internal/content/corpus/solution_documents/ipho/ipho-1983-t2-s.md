---
id: solution-document-ipho-1983-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1983/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/1983/T2_S.pdf."
---

IPhO 1983                                                      Theoretical Question II




2.Electricity – Problem II (8 points)

 Different kind of oscillation
 Let’s consider the electric circuit in the figure, for which L1 = 10 mH ,
  L2 = 20 mH , C 1 = 10 nF , C 2 = 5 nF and R = 100 kΩ . The switch K
 being closed the circuit is coupled with a source of alternating current. The
 current furnished by the source has constant intensity while the frequency of
 the current may be varied.
      a. Find the ratio of frequency f m for which the active power in circuit
          has the maximum value Pm and the frequency difference
          ∆f = f + − f − of the frequencies f + and f − for which the active
          power in the circuit is half of the maximum power Pm .


 The switch K is now open. In the moment t 0 immediately after the
 switch is open the intensities of the currents in the coils L1 and
  i 01 = 0,1 A and i 02 = 0,2 A L1 (the currents flow as in the figure); at
 the same moment, the potential difference on the capacitor with
 capacity C 1 is u 0 = 40V :
       b. Calculate the frequency of electromagnetic oscillation in
            L1C 1C 2 L 2 circuit;
       c. Determine the intensity of the electric current in the AB
            conductor;
       d. Calculate the amplitude of the oscillation of the intensity of
            electric current in the coil L1 .

 Neglect the mutual induction of the coils, and the electric resistance of
 the conductors. Neglect the fast transition phenomena occurring when
 the switch is closed or opened.



 Problem II - Solution
 a. As is very well known in the study of AC circuits using the formalism of complex numbers, a complex
 inductive reactance X L = L ⋅ ω ⋅ j , ( j = − 1 ) is attached to the inductance L - part of a circuit
 supplied with an alternative current having the pulsation ω .
                                                       j
 Similar, a complex capacitive reactance X C = −           is attached to the capacity C .
                                                    C ⋅ω
 A parallel circuit will be characterized by his complex admittance Y .
 The admittance of the AC circuit represented in the figure is



  Electricity – Problem II - Solution                                                     Page 1 from 12
IPhO 1983                                                       Theoretical Question II



        1     1           1       C ⋅ω C ⋅ω
 Y=       +         +            − 1 − 2
        R L1 ⋅ ω ⋅ j L 2 ⋅ ω ⋅ j    j    j
                                                                                      ( 2.1)
    1                     1 1
 Y = + j ⋅ (C 1 + C 2 ) −   +
    R                     L1 L 2

The circuit behave as if has a parallel equivalent capacity C
C = C1 + C 2                                                                          ( 2.2)
and a parallel equivalent inductance L
  1 1 1
   = +
  L L1 L2
                                                                                      ( 2.3)
    LL
 L= 1 2
   L1 + L2
The complex admittance of the circuit may be written as
      1                1
Y=      + j ⋅ C ⋅ω −                                                                  ( 2.4)
      R              L ⋅ω
and the complex impedance of the circuit will be
        1
 Z=
       Y
            1        1
              + j⋅      − C ⋅ω                                                        ( 2.5)
            R      L ⋅ω
 Z=
                 2                   2
            1                   1
                     + C ⋅ω −
            R                 L ⋅ω
The impedance Z of the circuit, the inverse of the admittance of the circuit Y is the modulus of the
complex impedance Z
                                 1                1
Z= Z =                                        =                                       ( 2.6)
                 1
                      2
                                     1
                                          2       Y
                          + C ⋅ω −
                 R                 L ⋅ω
The constant current source supplying the circuit furnish a current having a momentary value i (t )

i (t ) = I ⋅ 2 ⋅ sin(ω ⋅ t ) ,                                                        ( 2.7)
where I is the effective intensity (constant), of the current and ω is the current pulsation (that can
vary) . The potential difference at the jacks of the circuit has the momentary value u (t )

u (t ) = U ⋅ 2 ⋅ sin(ω ⋅ t + ϕ )                                                      ( 2.8)
where U is the effective value of the tension and ϕ is the phase difference between tension and
current.
The effective values of the current and tension obey the relation



 Electricity – Problem II - Solution                                                       Page 2 from 12
IPhO 1983                                                      Theoretical Question II


U = I ⋅Z                                                                              ( 2.9)
The active power in the circuit is
       U 2 Z2 ⋅I2
P=        =                                                                           ( 2.10)
       R     R
Because as in the enounce,
 I = constant
                                                                                      ( 2.11)
 R = constant
the maximal active power is realized for the maximum value of the impedance that is the minimal value
of the admittance .
The admittance
               2                   2
          1                   1
Y=                 + C ⋅ω −                                                           ( 2.12)
          R                 L ⋅ω
has– as function of the pulsation ω - an „the smallest value”
          1
Ymin =                                                                                ( 2.13)
          R
for the pulsation
            1
ωm =                                                                                  ( 2.14)
           L ⋅C
In this case
                1
 C ⋅ω −            = 0.                                                               ( 2.15)
              L ⋅ω
So, the minimal active power in the circuit has the value
Pm = R ⋅ I 2                                                                          ( 2.16)
and occurs in the situation of alternative current furnished by the source at the frequency f m
        1          1
fm =      ωm =                                                                        ( 2.17)
       2π      2π ⋅ C ⋅ L
To ensure that the active power is half of the maximum power it is necessary that
      1
 P = Pm
      2
 Z ⋅I2 1
   2
         = R ⋅I2                                                                      ( 2.18)
    R      2
  2      1
   2
      = 2 =Y2
 R      Z
That is




 Electricity – Problem II - Solution                                                       Page 3 from 12
IPhO 1983                                                                       Theoretical Question II


                                            2
  2     1            1
      = 2 + C ⋅ω −
 R 2
       R           L ⋅ω                                                                                ( 2.19)
    1          1
 ± = C ⋅ω −
   R         L ⋅ω
The pulsation of the current ensuring an active power at half of the maximum power must satisfy one of
the equations
         1        1
ω2 ±         ω−      =0                                                                                ( 2.20)
        R ⋅C    L ⋅C
The two second degree equation may furnish the four solutions
                                        2
          1     1               1                  4
ω=±           ±                             +                                                          ( 2.21)
        2R ⋅ C 2               R ⋅C              L ⋅C
Because the pulsation is every time positive, and because
            2
    1                 4   1
                +       >                                                                              ( 2.22)
   R ⋅C             L ⋅C R ⋅C
the only two valid solutions are
                       2
        1        1               4     1
ω± =                       +        ±                                                                  ( 2.23)
        2       R ⋅C           L ⋅ C 2R ⋅ C
                                                 1
It exist two frequencies f ± =                     ω ± allowing to obtain in the circuit an active power representing half of
                                                2π
the maximum power.
                                2
       1 1              1                 4     1
 f+ =                               +        +
      2π 2             R ⋅C             L ⋅ C 2R ⋅ C
                                                                                                       ( 2.24)
                                2
         1 1            1                 4     1
 f− =                               +        −
        2π 2           R ⋅C             L ⋅ C 2R ⋅ C

The difference of these frequencies is
                     1 1
∆f = f + − f − =                                                                                       ( 2.25)
                    2π R ⋅ C
the bandwidth of the circuit – the frequency interval around the resonance frequency having at the ends
a signal representing 1 2 from the resonance signal. At the ends of the bandwidth the active power
reduces at the half of his value at the resonance.
The asked ratio is




 Electricity – Problem II - Solution                                                                       Page 4 from 12
IPhO 1983                                                     Theoretical Question II



  fm   R ⋅C     C
     =       =R
  ∆f    L ⋅C    L
                                                                                     ( 2.26)*
  fm
     =R
             (C1 + C 2 ) ⋅ (L1 + L2 )
  ∆f                 L1 ⋅ L2

Because
   C = 15 nF
       20
   L=       mH
        3
it results that
 ωm = 10 5 rad ⋅ s −1
and

fm    C                3 ⋅ 15 × 10 −9
   =R   = 100 × 10 3 ⋅                = 150                                          ( 2.27)
∆f    L                 20 × 10 −3
The (2.26) relation is the answer at the question a.

b. The fact that immediately after the source is detached it is a current in the coils, allow as to admit
that currents dependents on time will continue to flow through the coils.




                                                Figure 2.1
The capacitors will be charged with charges variable in time. The variation of the charges of the
capacitors will results in currents flowing through the conductors linking the capacitors in the circuit.
The momentary tension on the jacks of the coils and capacitors – identical for all elements in circuit – is
also dependent on time. Let’s admit that the electrical potential of the points C and D is u (t ) and the


  Electricity – Problem II - Solution                                                     Page 5 from 12
IPhO 1983                                                      Theoretical Question II


potential of the points A and B is zero. If through the inductance L1 passes the variable current having
the momentary value i1 (t ) , the relation between the current and potentials is
              di 1
u (t ) − L1        =0                                                                 ( 2.28)
              dt
The current passing through the second inductance i 2 (t ) has the expression,
              di 2
u (t ) − L2        =0                                                                 ( 2.29)
              dt
If on the positive plate of the capacitor having the capacity C1 is stocked the charge q1 (t ) , then at the
jacks of the capacitor the electrical tension is u (t ) and
q 1 = C1 ⋅ u                                                                          ( 2.30)
Deriving this relation it results
dq1        du
    = C1 ⋅                                                                            ( 2.31)
 dt        dt
But
dq1
    = −i 3                                                                            ( 2.32)
 dt
because the electrical current appears because of the diminishing of the electrical charge on capacitor
plate. Consequently
               du
i 3 = −C1 ⋅                                                                           ( 2.33)
               dt
Analogous, for the other capacitor,
               du
i 4 = −C 4 ⋅                                                                          ( 2.34)
               dt
Considering all obtained results
  di 1 u
      =
  dt L1
                                                                                      ( 2.35)
  di 2 u
      =
  dt L2
respectively
  di 3      d 2u
       = −C1 2
  dt         dt
                                                                                      ( 2.36)
  di 4     d 2u
       = C2 2
  dt       dt
Denoting i 5 (t ) the momentary intensity of the current flowing from point B to the point A , then the
same momentary intensity has the current through the points C and D . For the point A the Kirchhoff
rule of the currents gives



  Electricity – Problem II - Solution                                                     Page 6 from 12
IPhO 1983                                                              Theoretical Question II


i1 + i 5 = i 3                                                                               ( 2.37)
For B point the same rule produces
i4 + i5 = i2                                                                                 ( 2.38)
Considering (2.37) and (2.38) results
i1 − i 3 = i 4 − i 2                                                                         ( 2.39)
and deriving
di1 di 3 di 4 di 2
   −    =    −                                                                               ( 2.40)
dt dt     dt dt
that is
      u u     d 2u    d 2u
  −     − = C1 2 + C 2 2
      L1 L2   dt      dt
                                                                                             ( 2.41)
       1 1    d 2u
  −u ⋅   +   = 2 ⋅ (C1 + C 2 )
       L1 L2  dt

Using the symbols defined above
     u d 2u
  −    =    ⋅C
     L dt 2                                                                                  ( 2.42)
        1
 u +    u=0
       LC
Because the tension obeys the relation above, it must have a harmonic dependence on time
u (t ) = A ⋅ sin(ω ⋅ t + δ )                                                   ( 2.43)
The pulsation of the tension is
           1
ω=                                                                                           ( 2.44)
          L ⋅C
Taking into account the relations (2.43) and (2.36) it results that
            d
  i 3 = −C1    (A ⋅ sin(ω ⋅ t + δ )) = −C1 ⋅ A ⋅ ω ⋅ cos(ω ⋅ t + δ )
            dt
                                                                                             ( 2.45)
            d
  i 4 = −C 2 (A ⋅ sin(ω ⋅ t + δ )) = −C 2 ⋅ A ⋅ ω ⋅ cos(ω ⋅ t + δ )
            dt
and
  di 1 u 1
      = = ⋅ A ⋅ sin(ω ⋅ t + δ )
  dt L1 L1
                                                                                             ( 2.46)
  di 2 u 1
      = = ⋅ A ⋅ sin(ω ⋅ t + δ )
  dt L2 L2
It results that




  Electricity – Problem II - Solution                                                            Page 7 from 12
IPhO 1983                                                      Theoretical Question II



          1
 i1 =          ⋅ A ⋅ cos(ω ⋅ t + δ ) + M
        L1 ⋅ ω
                                                                                     ( 2.47)
        1
 i2 =        ⋅ A ⋅ cos(ω ⋅ t + δ ) + N
      L2 ⋅ ω

In the expression above, A , M , N and δ are constants that must be determined using initially
conditions. It is remarkable that the currents through capacitors are sinusoidal but the currents through
the coils are the sum of sinusoidal and constant currents.
In the first moment
 u (0) = u 0 = 40V
 i 1 (0) = i 01 = 0,1 A                                                              ( 2.48)
 i 2 (0) = i 02 = 0,2 A
Because the values of the inductances and capacities are
 L1 = 0,01H
 L2 = 0,02 H
                                                                                     ( 2.49)
 C1 = 10 nF
 C 2 = 5 nF
the equivalent inductance and capacity is
  1 1 1
   = +
  L L1 L2
        L1 ⋅ L2
 L=                                                                                  ( 2.50)
        L1 + L2
    2 × 10 −4     1
 L=           H=     H
    3 × 10 −2
                 150
respectively
 C = C1 + C 2
                      .                                                              ( 2.51)
 C = 15 nF
From (2.44) results
                  1
ω=                          = 10 5 rad ⋅ s −1                                        ( 2.52)*
          1
             ⋅ 15 × 10 −9
         150
The value of the pulsation allows calculating the value of the requested frequency b. This frequency
has the value f
   ω 10 5
f=   =    Hz                                                                         ( 2.53) *
   2π 2π

c. If the momentary tension on circuit is like in (2.43), one may write



 Electricity – Problem II - Solution                                                      Page 8 from 12
IPhO 1983                                                                               Theoretical Question II



 u (0) = A ⋅ sin(δ ) = u 0
               u0                                                                                             ( 2.54)
 sin(δ ) =
               A
From the currents (2.47) is possible to write
            1
 i 01 =          ⋅ A ⋅ cos(δ ) + M
          L1 ⋅ ω
                                                                                                              ( 2.55)
          1
 i 02 =        ⋅ A ⋅ cos(δ ) + N
        L2 ⋅ ω
On the other side is possible to express (2.39) as


  i1 − i 3 = i 4 − i 2
    1
         ⋅ A ⋅ cos(ω ⋅ t + δ ) + M + C1 ⋅ A ⋅ ω ⋅ cos(ω ⋅ t + δ ) =                                           ( 2.56)
  L1 ⋅ ω
                                                       1
  − C 2 ⋅ A ⋅ ω ⋅ cos(ω ⋅ t + δ ) −                         ⋅ A ⋅ cos(ω ⋅ t + δ ) − N
                                                     L2 ⋅ ω
An identity as
A ⋅ cosα + B ≡ C ⋅ cosα + D                                                                                   ( 2.57)
is valuable for any value of the argument α only if
  A =C
                                                                                                              ( 2.58)
 B =D
Considering (2.58), from (2.56) it results
 M +N = 0
                                       A           1 1                                                        ( 2.59)
  A ⋅ ω ⋅ (C1 + C 2 ) = −                  ⋅         +
                                    ω              L1 L2

For the last equation it results that the circuit oscillate with the pulsation in the relation (2.44)
Adding relations (2.55) and considering (2.54) and (2.59) results that

                                       1           1 1
 i 01 + i 02 = A ⋅ cos(δ ) ⋅                   ⋅     +
                                       ω           L1 L1
                     i 01 + i 02
  A=
                         1         1 1
          cos(δ ) ⋅           ⋅      +
                      ω            L1 L1
                                                                                                              ( 2.60)
                         i 01 + i 02
 cos δ =
                     1            1 1
              A⋅          ⋅         +
                     ω            L1 L1

 cos δ =
              (i + i ) ⋅ L ⋅ ω
                01         02

                              A


 Electricity – Problem II - Solution                                                                              Page 9 from 12
IPhO 1983                                                       Theoretical Question II



The numerical value of the amplitude of the electrical tension results by summing the last relations from
(2.54) and (2.60)

           u0
 sin(δ ) =
            A
          (i + i ) ⋅ L ⋅ ω
 cos δ = 01 02
                A
 (cos(δ )) + (sin(δ ))2 = 1
          2
                                                                                      ( 2.61)
   u0
        2

            +
                   (i + i ) ⋅ L ⋅ ω
                       01   02
                                          2

                                              =1
   A                         A
  A=        (u ) + ((i + i ) ⋅ L ⋅ ω )
              0
                   2
                            01       02
                                               2




The numerical value of the electrical tension on the jacks of the circuit is
                                                   2
                      1
  A = (40) + (0,3) ⋅
                   2
                         ⋅ 10 5
                     150                                                              ( 2.62)
  A=        (40) + (200) = 40 26 V
                   2             2



And consequently from (2.54) results
                  u0
 sin(δ ) =
                  A
                                                                                      ( 2.63)
             40    1
 sin(δ ) =       =
           40 26   26
and
                   5
cos(δ ) =                                                                             ( 2.64)
                   26
Also



         1
 tg (δ ) =
         5                                                                            ( 2.65)
 δ = arctg (1 5)
From (2.55)
                    1
 M = i 01 −              ⋅ A ⋅ cos(δ )
                  L1 ⋅ ω
                                                                                      ( 2.66)
              1
 N = i 02 −        ⋅ A ⋅ cos(δ )
            L2 ⋅ ω
the corresponding numerical values are


 Electricity – Problem II - Solution                                                      Page 10 from 12
IPhO 1983                                                        Theoretical Question II




                  1                5
 M = 0,1 −               ⋅ 40 26 ⋅    A = −0,1 A
              0,01⋅ 10 5
                                   26
                                                                                       ( 2.67) *
                  1                 5
 N = 0,2 −                ⋅ 40 26 ⋅    A = 0,1 A
              0,02 ⋅ 10 5
                                    26
The relations (2.47) becomes

        4 26                                         ~
 i1 =        ⋅ cos(10 5 ⋅ t + arctg (1 5)) − 0,1 A = i1 − I 0
         100
                                                                                       ( 2.68)
      2 26                                         ~
 i2 =      ⋅ cos(10 5 ⋅ t + arctg (1 5)) + 0,1 A = i 2 + I 0
       100

The currents through the coils are the superposition of sinusoidal currents having different amplitudes
and a direct current passing only through the coils. This direct current has the constant value
I 0 = 0,1 A                                                                            ( 2.69) *
as in the figure 2.2.




                                                    Figure 2.2
The alternative currents through the coils has the expressions

 ~    4 26
 i1 =      ⋅ cos(10 5 ⋅ t + arctg (1 5)) A
       100
                                                                                       ( 2.70)
 ~    2 26
 i2 =      ⋅ cos(10 5 ⋅ t + arctg (1 5)) A
       100



 Electricity – Problem II - Solution                                                       Page 11 from 12
IPhO 1983                                                       Theoretical Question II


The currents through the capacitors has the forms

       (
 i 3 = − 10 × 10 −4 ⋅ 40 26 ⋅ cos(10 5 ⋅ t + arctg (1 5 )) A)
            4 26
 i3 = −          cos(10 5 ⋅ t + arctg (1 5)) A
             100
                                                                                      ( 2.71)
       (                                                )
 i 4 = − 5 × 10 −4 ⋅ 40 26 ⋅ cos(10 5 ⋅ t + arctg (1 5)) A
            2 26
 i4 = −          cos(10 5 ⋅ t + arctg (1 5)) A
             100

The current i 5 has the expression

 i 5 = i 3 − i1
            8 26                                                                      ( 2.72)
 i5 = −          cos(10 5 ⋅ t + arctg (1 5)) + 0,1 A
             100

The value of the intensity of i 5 current is the answer from the question c.
The initial value of this current is



           8 26 5
i5 = −             + 0,1 A = −0,3 A                                                   ( 2.73) *
            100 26

d. The amplitude of the current through the inductance L1 is

    ~
     ()
max i1 = max
             4 26
              100
                  ⋅ cos(10 5 ⋅ t + arctg (1 5))A =
                                                   4 26
                                                    100
                                                        A ≈ 0,2 A                     ( 2.74) *

representing the answer at the question d.




Professor Delia DAVIDESCU, National Department of Evaluation and Examination–Ministry of Education and
                                                                              Research- Bucharest, Romania
Professor Adrian S.DAFINEI,PhD, Faculty of Physics – University of Bucharest, Romania




 Electricity – Problem II - Solution                                                      Page 12 from 12
