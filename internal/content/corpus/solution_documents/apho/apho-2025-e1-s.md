---
id: solution-document-apho-2025-e1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2025/E1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2025-e1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2025/E1_S.pdf."
---

SOLUTION


                  PHYSICS OF INDUCTION COOKING
                             Solution of the Experimental Problem
                      Asian Physics Olympiad, Dhahran Saudi Arabia 2025
                Oki Gunawan, Herry Kwee, Hendra Kwee, Yendi, M. Morteza Mudrick
                                          v.3.0 2025/5/9


1. EXP#1: CHARACTERIZATION OF THE INDUCTION COIL

1.1 Series RLC circuit

To determine L using resonance experiment we setup a series R-L-C circuit as shown below. We measure the
source voltage from the Function Generator (FG): VS and measure the current I by measuring the voltage across
“shunt resistance” R1=1 : I  V R 1 / R1 .

We use the digital oscilloscope to measure the voltage. For convenient and quick measurement, we
can fix one probe terminal (e.g.) on node #1 and repetitively measure voltage on node#2 and node#3 to
measure source voltage VS and VR1 repetitively.




                                      Figure 1. The series RLC circuit


The cables involved in the circuit are two pieces of banana-to-pins cable (item#6). Using ohmmeter
we obtain: RC = 0.09 .


1.2 Resonance series RLC circuit

Then we determine the resonant condition where the impedance Z  V S / I reaches minimum or conductance
G  I / V S reaches maximum. A smart student should quickly scan the frequency first to quickly find the
resonant condition and suitable frequency range before taking data, e.g. fix VS and scan I as a function of
frequency. We note that VS could vary due changing load impedance. The data is shown below:




                                                      1
SOLUTION




                     Table 1. RLC resonance data for C=470 nF and C=2200 F




    Figure 2. Resonance conductance plot of the RLC circuit with: (a) C = 470 nF, (b) C = 2200 F.




                       Table 2. Results of L determination from RLC resonance




                                                  2
SOLUTION


The results are shown in Table 2. The resonance frequency is given as:    1 / LC , thus
           
L  1 /  0 C . We note that the resonance data for C = 470 nF is nice and sharp and yields correct value
of L = 47.2 H, while the data for C = 2200 F shows broad and poor resonance thus yield inaccurate
value of L = 72 H. This happens because for a series RLC circuit the quality (Q) factor is given as:
Q  L / C / R , therefore smaller capacitance yields a higher quality factor or sharper resonance curve.

1.3 Alternative model to extract L and RL

We can formulate the impedance as:
                Z  RT  j ( L  1 /  C ) ,                                                          (1)
                   Z  R T  ( L  1 /  C )  R T   L  2 L / C  1 /  C ,
                     2       2                    2        2          2           2
                                                                                                       (2)
                   Z 2  1 /   C 2  ( RT 2  2 L / C )    L2                                     (3)
where the total resistance is:  RT  R1  RC  RL , with RL is the coil internal resistance. We can
linearize the last equation as: y  a  b x , where: y  Z 2  1/  C 2 , x   2 , b  L2 and
       2
 a  RT  2 L / C . Note that since the inductor impedance dominate at high frequency we can also
ignore the capacitance term:  C 2 in the analysis.

We can solve for L and RL as:
                                      L b                                                             (4)
                                      R L  a  2 L / C  R1  R C                                     (5)


1.4 RLC experiment to extract L and RL with C=470 uF and 1000 uF

We perform RLC experiments for C = 470 F and 1000 F:




                            Table 3. RLC measurements for C = 470 F and 1000 F




                                                               3
SOLUTION




              Figure 3. Extraction of RL and L with C = 470 nF, 470 F, 1000 F and 2200 F.



Here are the results:




                                Table 4. Results of L and RL determination


We have average: L = 48.7 H and average coil resistance: RL = 0.57 . This is consistent with the
original specification of the coil (Wurth Elektronik 760308101303): L = 47 H and RL = 0.46 .

Therefore this second technique is more accurate in determining L even in the case where the
resonance is poor. We obtain RL as a “bonus” from the analysis as it comes from the linear fit
“intercept” however they are less accurate.



                                                    4
SOLUTION

Measurement of RL directly with the multimeter for verification is also acceptable, we obtain:
R L  (0 .47  0.03)  .


2. EXP#2: MUTUAL INDUCTION AND SKIN DEPTH


2.A Mutual Induction




                                    Figure 4. Mutual inductance setup


2.2 Mutual inductance experiment

Here we perform the measurement twice where the primary is coil#1 and secondary is coil#2 and then
we swap them.

                                          di1     di      di                                          (6)
                                 V2   M      L2 2   M 1
                                          dt       dt     dt
                                              V2                                                      (7)
                                         Z'       j M
                                              I1

The self inductance contribution is negligible since the second coil is connected to voltmeter and i2 ~
0. Then we can tabulate the “impedance” Z =V2 / I1 as a function of frequency and extract M.




                                Table 5. Mutual inductance determination



                                                   5
SOLUTION




       Figure 5. Mutual inductance determination results: (a) Primary=Coil#1, Secondary=Coil#2 (b)
       Primary=Coil#2, Secondary=Coil#1.


2.3 Mutual inductance results

We fit the data to linear equation: y  a  b x . Here we obtain the mutual inductance: M  b / 2π , and
we obtain M reasonably close results between the two measurements: M1-2 = 5.67 H and M2-1 = 5.90
H with average: M = 5.79 H.


2.B Skin depth experiment

2.4 Skin depth equations model and experiments

Equation model to determine n:

We can perform two-step linear regressions to extract n and  as follows. For each metal we perform
measurement of the voltage in secondary coil (coil#1) which is proportional to B after it passes
through the metals:

                         V 2 ~ B ( z )  B 0 exp(  z /  )  B 0 exp(  N t 0 /   f  )            (8)

where t0 is the metal thickness and N is the number of metal. Therefore we expect the voltage in the
secondary voltage will drop more metal plates. Therefore we can extract the skin depth at frequency f
from:

                                  ln V 2   t 0 /   f   N  c 0                                  (9)

where c0 is a constant that we ignore. We can determine the skin depth at a frequency f using :

                                            f   t0 / b1                                         (10)


                                                         6
SOLUTION

where b1 is the slope of ln(V2) vs. N data.

Then we repeated this analyis at different frequencies, using Eq. 2 of the problem set:

                                            n        ln( m / π  )                                  (11)
                                   ln       ln f 
                                            2             2

Using linear model: y  a2  b2 x of ln  vs. ln f, we can obtain:

                                                   ln                                              (12)
                                            n2           2 b2
                                                   ln f

The conductivity (using m = -1 as determined in Q2.5 later) is given as:

                                                exp(  2 a 2 )                                       (13)
                                         
                                                     

Note: See Appendix A at the end for an alternative single regression analysis which is also valid but
less accurate.

Skin Depth Experiments:

We inject the oscillating current to coil#1 and measure the induced voltage at the coil#2 while keep
adding the metal pieces. The voltage in coil#2 is proportional to the magnetic field generated from
coil#1 after attenuated by the metal pieces.

The student is expected to test first range of appropriate frequencies before taking data. To obtain the
best results the student should perform the experiment with all 5 or 4 plates for each metal and repeat
that at minimum 5 frequencies. The results are shown below.

(1) Aluminum:




                                                          7
SOLUTION

                              (a)                                                       (b)
         Table 6. Skin depth experiment for Al: (a) Raw data, (b) Power factor n and  analysis.




     Figure 6. Skin depth analysis for Al: (a) Voltage at secondary coil vs. number of plate N at two extreme
     frequencies (b) Skin depth vs. frequency to determine power factor n and .


  (2) Copper:




                              (a)                                                     (b)
         Table 7. Skin depth experiment for Cu: (a) Raw data, (b) Power factor n and  analysis




                                                    8
SOLUTION




                                      Figure 7. Skin depth analysis for Cu


  (3) SS304:




                             (a)                                                   (b)
      Table 8. Skin depth experiment for SS304: (a) Raw data, (b) Power factor n and  analysis.




     Figure 8. Skin depth analysis for SS304: Skin depth vs. frequency to determine power factor n and .



                                                   9
SOLUTION



   (4) SS410:




                         (a)                                                    (b)
         Table 9. Skin depth experiment for SS410: (a) Raw data, (b) Power factor n and  analysis.




                                      Figure 9. Skin depth analysis for SS410


We note that SS410 behaves differently, the output signal V2 drops greatly upon insertion of the
metals. Upon final analysis it yields n = -0.5 which is not correct.

Apparently because SS410 is magnetic, its skin depth is too small and almost no magnetic field could
penetrate the metal and the fringing field around the metal becomes dominant thus the “skin depth”


                                                    10
SOLUTION

measurement becomes anomalous. Thus SS410 is the metal with “extreme skin depth” and is
excluded in the subsequent analysis.

The summary of the skin depth experiment is shown below:




       Table 10. Summary results of the skin depth experiment. “sigmaErr” is the percentage error of the
       measured conductivity vs. the reference literature values (“sigmaR”)


We observe from all three metals we obtain consistent frequency power factor with average n = -0.98,
and thus n = -1 (rounded to nearest integer).


2.5 Conductivity power factor m

Since we have obtained n = -1, from the Eq. 2 in the problem set:

                                         m     or                                                         (14)
                                  2                     [σ]   = [δ] [μ][𝑓]
                                         π f

Using dimensional or unit analysis: [] = 1/.m = A/V.m, [] = m, [] = H/m=V.s/A.m and [f] =1/s,
we have:
                                       [A/V.m]m = [m]2[V.s/A.m][1/s] = [V.m/A]                 (15)

Thus we get m = -1, and the final skin depth formula is:

                                                          1
                                                                                                         (16)
                                                       π f

2.6 Conductivity of the metals

The conductivity of the metals can be calculated using Eq. (13) and the results are shown in Table 10.
We observe that our measured conductivity is reasonably good to the reference literature values
(within +/- 30% error). The larger uncertainty is due to the results originating from a value that
depends exponentially on the intercepts [Eq. (13)].

Note: This method provides a very attractive approach to perform conductivity measurement in a
material because it is non-contact.



                                                     11
SOLUTION




3. EXP #3: COOKING, SPECIFIC HEAT CAPACITY AND EFFECTIVE LOAD
RESISTANCE


3.1 The induction cooking operating principle




                                       Figure 10. Principle of induction cooker


Operating principle:
Oscillating current drive to the coil  generate oscillating magnetic field  generate eddy current in
the plate  generate Joule heating in the plate


3.2 Specific Heat of the metal pan

We developed a model that allow us to extract the specific heat capacity of the metal pan. The heat
transfer energy balance can be modeled as total power input to the cooking pan is equal to the heating
rate of the pan and radiation. We ignore convection losses as indicated in the problem.

                                  PIN  m c dT / dt  e A  S (T 4  T0 4 )                           (17)

where m is the mass of the metal pan, c is the specific heat, T is the plate temperature, T0 is the
ambient temperature, e is the emissivity, A is the surface area of the radiating body and S is the Stefan
Boltzmann constant.

We need to warm up the cooker first and then turn off the power input to let it cool. The cooling
behavior is given as:


                                   m c dT               c t0 dT
                        T4                 T0 4              T0 4                               (18)
                                 e A  S dt            2e  S dt

We note that the factor of two comes from consideration that that the radiation area is twice the
surface area of the metal i.e. A  2 WL , where W and L is the width and the length of the “pan”, t0 is


                                                      12
SOLUTION

the metal thickness. We perform linear regression: y = a + b x, with x is dT/dt and y is T 4 and we can
ignore the effect of T0.

The specific heat can be calculated as:

                                                 2 e S b
                                          c                                                       (19)
                                                    t0

Note: It is possible to solve the differential equation in the Eq. (18), but the solution requires the
knowledge of starting temperature T0 which could vary with repeated experiments, thus such solution
is not practical.


3.3 Specific heat of the Aluminum pan

We then measure the thermistor resistor (RNTC) and calculate the pan temperature T using Eq. (4) in
the problem set. Specifically, we need to derive:
                                                                   1
                                              ln( R / R0 ) 1 
                                          T                                                     (20)
                                                   B       T0 

We record ambient temperature is T = 306.5 K = 33.35 C, for completeness but this does not impact
subsequent analysis. We can calculate the derivate dT/dt at point n numerically as:

                                          dTn Tn 1  Tn 1
                                                                                                   (21)
                                           dt   t n 1  tn 1

We heat up the “pan” approximately for 1 min until the temperature reaches 325.4 K (52.3 C) which
marks t = 0 s and record the NTC resistance as a function of time as the “pan” cools.




                                                        13
SOLUTION




                             Figure 11. Specific heat measurement for Al pan

Using Eq. (19), e = 0.65,  = 2700 kg/m3, t0 = 0.71 mm, we obtain slope b = -2.3171010 and specific
heat c = 890 J/kg.K. The literature value is cAl = 900 J/kg.K.

Note: In this Olympiad problem, the emissivity e value is chosen yield c close to the reference value.

3.4 Specific heat of the SS410 pan




                           Figure 12. Specific heat measurement for SS410 pan


                                                   14
SOLUTION



We note sometimes, like for SS410 here, the initial data do not form a straight line as the system has
not reached a steady state, thus we only perform the analysis on the linear segment as expected from
the model.

Using Eq. (19), e = 0.8,  = 7700 kg/m3, t0 = 0.75 mm, we obtain slope b = -2.5441010 and specific
heat c = 400 J/kg.K. The literature value is cSS410= 460 J/kg.K.


3.5 RLOAD for Aluminum pan

Now we model that the pan appears as “load resistance” to the primary circuit. The power input given
to the metal pan will increase the temperature of the “pan” and also radiate to the surrounding:

                                    PIN  I 2 RLOAD  m c dT / dt  e A  S (T 4  T0 )
                                                                                          4
                                                                                                       (22)

For later analysis, we can rearrange this to:

                                   m c dT / dt  eA  S T 4  I 2 RLOAD  eA  S T0                    (23)
                                                                                      4




                                    P 'TOT  PC  PRAD '  I 2 RLOAD  PRAD ,0                         (24)

where: PC  m c dT / dt , P 'RAD  eA S T 4 and PRAD ,0  eA S T 4

We can perform linear fit of the experimental data of PTOT’ vs. I2 following linear equation: y  a  b x ,
where: y  PTOT ' , x  I 2 , b  RLOAD and a  PRAD ,0 , which we assume to be constant and can be ignored.

Thus, we can obtain RLOAD from the linear fit of PTOT’ vs. I2. Note: the current I must be of RMS value
since it is an AC current.


Aluminum pan:

We now perform the “cooking” experiment on the Al “pan”. We will vary the current to the circuit and
monitor the heating behavior.




                                                          15
SOLUTION




             Table 11. Data for RLOAD determination of the Aluminum pan using various current.


For calculation convenience, we tabulate all the properties of the Al pan as follows:

   Quantity                     Symbol        Values
   Emissivity                   e             0.65
   Mass density                              2700 kg/m3
   Heat capacity                c             913.7 J/kg.K
   Heat capacity reference      cREF          900 J/kg.K
   Radiation area               A             2x2cmx2cm = 8x10-4 m2
   Volume                       V             2cmx2cmx0.71mm=2.84x10-7 m3
   Mass                         m             V=7.668x10-4 kg
   Ambient temperature          T0            303.66 K (RNTC0 = 7.864 k)
                                     Table 12. Properties of the Al pan




                                                    16
SOLUTION

                        Figure 13. “Effective load resistance” measurement of the aluminum pan.
We then plot Ptot’ave vs. Irms2 as shown above. The slope directly yields the load resistance RLOAD =
54.6 m.

3.6 RLOAD for the SS410 pan




                Table 13. Data for RLOAD determination of the SS410 pan using various currents.


The properties of the SS410 pan:

    Quantity                       Symbol       Values
    Emissivity                     e            0.8
    Mass density                               7700 kg/m3
    Heat capacity                  c            464.7 J/kg.K
    Heat capacity reference        cREF         460 J/kg.K
    Radiation area                 A            2x2cmx2cm = 8x10-4 m2
    Volume                         V            2cmx2cmx0.7mm=2.8x10-7 m3
    Mass                           m            V=2.16x10-3 kg
    Ambient temperature            T0           303.66 K (RNTC0 = 7.864 k)



                                                      17
SOLUTION

                                    Table 14. Properties of the SS410 pan




                       Figure 14. “Effective load resistance” measurement of the SS410 pan.


We then plot Ptot’ave vs. Irms2 as shown above. The slope directly yields the load resistance RLOAD =
137.7 m which is 2.5x than that of the Al pan.

3.7 Better cooking pan: (b) SS410.
SS410 has significantly larger RLOAD (2.5x) than that of Al, thus it is more efficient to be used as
induction cooking pan.


3.8 Dominant physical parameter: (b) Magnetic permeability
SS410 is a magnetic stainless steel with very high permeability r = 700, thus it has very small skin
depth according to Eq. (16). Therefore, its RLOAD is high and becomes more efficient for “cooking”.


3.9 Induction cooker efficiency:
                                                  2
                             PIND  COOK        I rms RLOAD          RLOAD
                                                                                                    (25)
                                                                    LOAD  R L
                                                2
                                PIN        I rms ( RLOAD  RL )   R

From Q1.5 we have RL = 0.48 , we obtain: Al = 10.2% and SS410 = 23.4%. Therefore the SS410
metal is more efficient to be used as induction cooking pan.

In summary for induction cooker, we want high conductivity to allow large eddy current to be
generated but very small skin-depth that could be obtained in magnetic (high permeability) material to
yield higher load resistance.




                                                        18
SOLUTION



Appendix:

A. Alternative Solution to skin depth analysis

For skin depth experiment we can also analyze the problem into a single linear regression analysis
instead of two as shown below:

                                     V         n      1
                                ln  ln  i     ln f  ln(π   t 0 )
                                                                       2
                                                                                                     (26)
                                     Vi 1     2      2

where i is the index of plate used in the experiment. The conductivity can be obtained from the linear
regression intercept a:

                                          exp(2 a ) / π  t 0 2                                    (27)

So essentially the student can perform the experiment with a single plate addition. An example of data
is shown below:




                         Figure 15. Single regression analysis for skin depth investigation.


   The student can perform just two measurements e.g. V2 with metal N=1 and N=2. We could also
   obtain n =-1.2 ~ -1, and  = 1.0107 S/m (-73% error from reference). We observe that this
   technique is less accurate as it utilize less data compared to double linear regression model that
   utilize e.g. N=5 x 5 frequencies data set.




                                                     19
