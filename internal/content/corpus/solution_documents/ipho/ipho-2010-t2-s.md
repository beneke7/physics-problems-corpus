---
id: solution-document-ipho-2010-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2010/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2010-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2010/T2_S.pdf."
---

41st International Physics Olympiad, Croatia – Theoretical competition, July 19th, 2010   1/4



Solution - Chimney physics
This problem was inspired and posed by using the following two references:

         W.W. Christie, Chimney design and theory, D. Van Nostrand Company, New York, 1902.
         J. Schlaich, R. Bergermann, W. Schiel, G. Weinrebe, Design of Commercial Solar Updraft
          Tower Systems — Utilization of Solar Induced Convective Flows for Power Generation, Journal
          of Solar Energy Engineering 127, 117 (2005).


Solution of Task 1
    a) What is the minimal height of the chimney needed in order that the chimney functions
       efficiently, so that it can release all of the produced gas in the atmosphere?

Let p(z ) denote the pressure of air at height z; then, according to one of the assumptions
p( z )  p(0)   Air gz , where p(0) is the atmospheric pressure at zero altitude.

Throughout the chimney the Bernoulli law applies, that is, we can write

1                                                       (1)
   Smoke ( z ) 2   Smokegz  pSmoke( z )  const. ,
2
where pSmoke(z ) is the pressure of smoke at height z,  Smoke is its density, and v(z ) denotes the
velocity of smoke; here we have used the assumption that the density of smoke does not vary
throughout the chimney. Now we apply this equation at two points, (i) in the furnace, that is at point
 z   , where  is a negligibly small positive number, and (ii) at the top of the chimney where z  h
to obtain:

1                                                          (2)
   Smoke (h) 2   Smokegh  pSmoke(h)  pSmoke( )
2
On the right hand side we have used the assumption that the velocity of gases in the furnace is
negligible (and also   Smokeg  0 ).

We are interested in the minimal height at which the chimney will operate. The pressure of smoke at
the top of the chimney has to be equal or larger than the pressure of air at altitude h ; for minimal
height of the chimney we have pSmoke(h)  p(h) . In the furnace we can use pSmoke( )  p(0) . The
Bernoulli law applied in the furnace and at the top of the chimney [Eq. (2)] now reads

1                                                        (3)
   Smoke (h) 2   Smoke gh  p(h)  p(0) .
2
From this we get

                  Air                                 (4)
 (h)  2 gh            1 .
                  Smoke 
The chimney will be efficient if all of its products are released in the atmosphere, i.e.,
      41st International Physics Olympiad, Croatia – Theoretical competition, July 19th, 2010          2/4


           B                                                  (5)
 ( h)      ,
           A
from which we have

     B2 1      1                                              (6)
h                              .
     A 2 g  Air
      2
                           1
                  Smoke
We can treat the smoke in the furnace as an ideal gas (which is at atmospheric pressure p(0) and
temperature TSmoke ). If the air was at the same temperature and pressure it would have the same
density according to our assumptions. We can use this to relate the ratio  Air /  Smoke to TSmoke / TAir
that is,

  Air   T                                                    (7)
         Smoke , and finally
 Smoke   TAir
  B2 1      TAir       B 2 1 TAir                             (8)
h 2                             .
  A 2 g TSmoke  TAir A 2 2 g T
For minimal height of the chimney we use the equality sign.

     b) How high should the chimney in warm regions be?

             T (30)                                           (9)
 h(30)   T       T (30)
        Smoke           ; h(30)  145m .
h(30)      T (30)
        TSmoke  T (30)


     c) How does the velocity of the gases vary along the height of the chimney?

The velocity is constant,

                         T                                                  (10)
                                                 T
  2 gh Air  1  2 gh Smoke  1  2 gh      .
           Smoke          TAir              TAir
This can be seen from the equation of continuity Av  const. (  Smoke is constant). It has a sudden
jump from approximately zero velocity to this constant value when the gases enter the chimney from
the furnace. In fact, since the chimney operates at minimal height this constant is equal to B , that is
v  B/ A.

     d) At some height z, from the Bernoulli equation one gets

psmoke ( z )  p(0)  (  Air   Smoke ) gh   Smoke gz .                      (11)
Thus the pressure of smoke suddenly changes as it enters the chimney from the furnace and acquires
velocity.
      41st International Physics Olympiad, Croatia – Theoretical competition, July 19th, 2010   3/4


Solution of Task 2
    a) The kinetic energy of the hot air released in a time interval t is

          1                                 T       (12)
E kin      ( Avt Hot )v 2  Avt Hot gh      ,
          2                                 TAtm
Where the index “Hot” refer to the hot air heated by the Sun. If we denote the mass of the air that
exits the chimney in unit time with w  Av Hot , then the power which corresponds to kinetic
energy above is

              T                                     (13)
Pkin  wgh         .
              TAir
This is the maximal power that can be obtained from the kinetic energy of the gas flow.

The Sun power used to heat the air is

PSun  GS  wcT .                                   (14)
The efficiency is evidently

     Pkin   gh                                       (15)
              .
     PSun cT Atm

    b) The change is apparently linear.

Solution of Task 3
    a) The efficiency is

      gh                                             (16)
           0.0064  0.64% .
     cT Atm
    b) The power is

P  GS  G( D / 2) 2   45 kW.                    (17)
    c) If there are 8 sunny hours per day we get 360kWh.

Solution of Task 4
The result can be obtained by expressing the mass flow of air w as

                           T                        (18)
w  Av Hot  A 2 gh             Hot
                           TAir
     GS                                              (19)
w
     cT
which yields

       G 2 S 2TAtm 1 / 3                             (20)
T  ( 2 2 2         )  9.1 K.
      A c  Hot 2 gh
     41st International Physics Olympiad, Croatia – Theoretical competition, July 19th, 2010   4/4


From this we get

w  760 kg/s.                                      (21)
