---
id: solution-document-izho-2015-e-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2015_E_S.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2015_E_S.pdf."
---

X International Zhautykov Olimpiad/Experimental Competition Page 1/7
SOLUTION FOR THE EXPERIMENTAL COMPETITION
Resistance of graphite (15 points)
Part 1. The current-voltage characteristic of a graphite rod
1.1 Using the ohmmeter it is easy determine that the the sliding lead is b.
1.2.1 To measure the current-voltage characteristics of
the graphite rod, the traditional circuit, shown in the
figure, can be used. When the voltmeter is thrown into
position 1 the voltage across the graphite rod is
measured, whereas in position 2 the measured voltage is
the one across the resistor 0 1,0 R Ohm  . If the voltage is
measured in volts, then the voltage across the resistor is
numerically equal to the current strength in the circuit in
amps.
It is possible to connect the variable resistor as a
potentiometer, although in this case the maximum
current in the circuit will be slightly less.
1.2.2 The results of measurements of the current-voltage characteristic of the graphite rod are
presented in Table 1. This table also shows the power values calculated via
UI P  (1)
as well as the resistance of the graphite rod
I
U
R  . (2)
Table 1. Measurements made in the air
U, V I, А P, W R, Ohm
0,150 0,040 0,0060 3,750
0,188 0,050 0,0094 3,760
0,202 0,054 0,0109 3,741
0,261 0,070 0,0183 3,729
0,304 0,081 0,0246 3,753
0,411 0,109 0,0448 3,771
0,470 0,124 0,0583 3,790
0,742 0,199 0,1477 3,729
0,907 0,243 0,2204 3,733
1,155 0,312 0,3604 3,702
1,486 0,406 0,6033 3,660
1,570 0,430 0,6751 3,651
2,280 0,640 1,4592 3,563X International Zhautykov Olimpiad/Experimental Competition Page 2/7
1.2.3 The current-voltage characteristic of the graphite rod is shown in the figure below.
It can be seen that the curve deviates somewhat up from the linear proportionality which is
prescribed to decrease in the resistance of the grathite when the temperature increases.
Derivation of the theoretical formula.
In the steady state the condition of thermal equilibrium is writte as:
 
T
T R
U
 
 

 1 0
2
. (3)
Solving the quadratic equation for the temperature difference gives rise to
   

  
   
2
4
0 1
0
2
2
0
2
2
0
2
R
U
T
R
U
T T T T
R
U
  
 
         
. (4)
From the data obtained it follows that the temperature coefficient of graphite resistance is
negative. In addition, it can be shown that from the two roots of equation (3) the smaller one should
be chosen (with + sign), since it corresponds to a stable thermal equilibrium. Therefore, the
theoretical dependence has the form
   


 


 
 


 


















  


 






  
 0
2
0
0
2
0
0
2
2
0
0
1
1
2
4
1
1 R
U
R
U
R
U
R
U
R
U
R
U
T R
U
I
. (5)
The last two expressions are approximations valid for small  .X International Zhautykov Olimpiad/Experimental Competition Page 3/7
1.2.3 For a more accurate calculation of the resistance of the graphite rod at room temperature, only
several data points at low voltages (less than 0.5V) should be taken at which the rod remains
practically unheated. Then, the method of least squares must be employed to evaluate the slope,
which is equal to the rod resistance.
Calculation of the obtained experimental data leads to the following result
  0 3,78 0,03 R Ohm   .
To calculate the resistivity of use is the following formula
2 3 2
5
2 2
4 (1,0 10 )
3,78 5,93 10
4 4 5,0 10
l d
R R Onm m
d l
 
 




 
      
 
Here (5,0 0,2) l sm   is the length of the rod between the leads.
The calculation of experimental error is given by the formula
2 2 2 2 2 2
5 6 0,03 0,05 0,2
2 5,93 10 2 6 10
3,78 1 5
R d l
Ohm m
R d l
                  
                      
           
The final result is written as
5
(5,9 0,6) 10 Ohm m  
    (6)
1.2.4 In the steady state the power, released when the current flows, is equal to the power of the heat
losses:


P
T T P      ,
Therefore, the dependence of the resistance on the power takes the form
) 1 ( ) 1 ( 0 0 P R T R Rg


      ). (7)
1.2.5 The dependence of the resistance on the dissipated power is shown in the figure.
1.2.6 The linearity of this dependence is observed at powers larger than 0,2W .
The coefficients of this dependence b aP R   , calculated using the least square method, are
found as 0,13 ,
Ohm
a
W
 3,75 b Ohm  , consequently, the coefficient in formula (3) is evaluated as
1
0,035
a
W
b
 
  .X International Zhautykov Olimpiad/Experimental Competition Page 4/7
1.3.1 The results of measurements of the current-voltage characteristic of the rod, placed in the snow,
are given in Table 2 and the corresponding graph is shown in the figure below.
Table 2
U, V I, А
0,144 0,037
0,177 0,045
0,248 0,064
0,292 0,076
0,354 0,091
0,504 0,130
0,721 0,188
0,895 0,232
1,205 0,312
1,554 0,409
In this case there is also a weak nonlinearity with increasing power. Therefore, to calculate the
resistance at zero temperature and only several initial points at low resistance should be used.
Calculation for the first five points leads to the following value
(3,88 0,03) . g R Ohm  
Since this value should obey the formula ) 1 ( 0 T R Rg     , the temperature coefficient of
the resistance can be calculated as
3 1
0
1 1 3,88
1) 1 1,3 10 .
20 3,78
g R
K
T R
      
                
The experimental error is mainly determined by the measurement error of resistance, thus it
can be evaluated via the formula
2 2
0 4 1
2
0 0
6 10 . g g R R R
K
T R T R
  
     
        
       
.
Part 2. Cooling of the graphite rod
2.1 The results of measurements of time time needed to achieve the specified voltage are shown in
Table 3 and the corresponding graph is shown n the figure below.
Table 3
U, mV t, s ) ln( U U 
44 0,00 3,045
42 2,22 2,944
40 4,45 2,833
38 7,03 2,708
36 9,99 2,565
34 13,50 2,398
32 18,42 2,197
30 25,38 1,946
28 38,14 1,609X International Zhautykov Olimpiad/Experimental Competition Page 5/7
Since the voltage is proportional to the measured voltage change and the resistance change is
proportional to the change in temperature, the dependence measured coincides, up to an unimportant
factor, with the temperature dependence on time.
The solution ot the equation
  T T
t
T
  



1
is the exponential function
    





   

t
T T T T exp 0 . (8)
To determine the characteristic cooling time, the resulting dependence should be drawn in a
semilogarithmic scale, ) ln( U U  against the time. For numerical calculations it is necessary to
measure the steady-state voltage value (achieved after waiting for a few minutes). In our
measurements. Table 3 shows the results of calculations of logarithms.
The following figure shows the graph on the semilogarithmic scale.
The slope coefficient of the obtained almost linear dependence is found as 1
0,044 a s
 
Consequently, the characteristic time of thermal equilibration is equal to
1
23s
a
    .X International Zhautykov Olimpiad/Experimental Competition Page 6/7
Marking scheme
№ Content points
1.1 Sliding laed is b 0,2
1.2.1 Circuit:
- the resistor anf the graphite rod are connected in series;
- voltages are measured on the resistor and the graphite rod;
- ability to vary the net electric current (the variable resistor
connected in series, or as a voltage diivider);
- the source is correctly connected;
0,5
0,2
0,1
0,1
0,1
1.2.2 marked only if the deviation from the table in the solution is less
than 50%
Measurements :
- 10 points or more (7-9 points; 5-6 points; less than 5 points)
- minimum voltage less than 0,2 V;
- maximum voltage larger than 2 V;
- deviation to the top from the linear dependence;
Graph:
- axes are anmed and ticked;
- points in the Table correspond to the points in the graph;
- smooth ine is drawn;
Theoretical formula (thermal equilibrium equation, quadratic
equation for temperature, smaller root is chosen, substitution into
Ohm’s law)
3,0
1,5(0,8; 0,5;0)
0,2
0,2
0,3
0,1
0,2
0,1
0,4
1.2.3 The resistance of the rod is calculated:
- voltages not larger than 0,3 V are only used;
- all points in the stated range are used for calcualtion (not less than
5);
(by 2points, by 1 point)
- the calculated value of the resistance is in the range 3,5-4,5 Ohm
(3,0 – 5,0 Ohm);
the length of the rod is measured (not larger than 5 sm);
Fromula for  ;
 is calculated:
in the range % 20  ( % 50  );
Error is estimated (any method)
1,1
0,2
0,2
(0,1; 0,05)
0,1 (0,05)
0,1
0,1
0,3 (0,1)
0,1
1.2.4
Equation for thermal equilibrium;
Formula for ) ( T R 
0,2
0,1
0,1
1.2.5
Formula for the power;
Formula for the resistance;
Calculations for all points;
Graph:
- axes are named and ticked;
- points in the Table correspond to the points in the graph;
- smooth ine is drawn;
0,7
0,05
0,05
0,2
0,1
0,2
0,1
1.2.6
The linear range is stated with the power larger than 0,2 W
The slope is calculated by all points (by 2 points)
Formula for calculation;
-numerical value is in the range 0,025-0,045 W-1
(0,01 – 0,06)
0,5
0,1
0,2 (0,1)
0,2 (0,1)X International Zhautykov Olimpiad/Experimental Competition Page 7/7
1.3.1 marked only if the deviation from the table in the solution is less
than 50%
Measurements :
- 10 points or more (7-9 points; 5-6 points; less than 5 points)
- minimum voltage is less than 0,2 V;
- maximum voltage is larger than 1,5 V;
- almost linear dependence is obtained;
- small deviation from the linear dependence to the top
Graph:
- axes are named and ticked;
- points in the Table correspond to the points in the graph;
- smooth ine is drawn;
2,6
1,5 (0,8; 0,5)
0,2
0,2
0,1
0,2
0,1
0,2
0,1
1.3.2 The resistance is calculated for the snow temperature:
- points with voltage less than 0,5 V are only used;
- calculation by all points (by 2 points, by 1 point);
- the numerical value is in the range 3,5-4,5 Ohm (3,0 – 5,0 Ohm);
- the resistance is larger than at room temperature;
- formula for the temperature coefficient of resistance;
- negative value;
- numerical value is in the range % 50  ( % 75  );
- error is estimated;
- error is larger than 50%
1,2
0,2
0,2 (0,1, 0,05)
0,1 (0,05)
0,1
0,1
0,1
0,2(0,1)
0,1
0,1
2.1
marked only if the deviation from the table in the solution is less
than 50%
Measurement:
- not less than 7 points (5-6 points; less than 5 points)
- decreasing dependence with convexity directed downward;
The range of voltages is 1,5 larger;
- there is a limiting value of the voltage;
3
2 (1,5; 1)
0,3
0,3
0,4
2.2 Graph:
- axes are named and ticked;
- points in the Table correspond to the points in the graph;
- smooth ine is drawn;
0,4
0,1
0,2
0,1
2.3 Evaluation of the time equilibration:
- by graph (the slope to the steady value);
- by 1-2 points;
- semilogarithmic linearization is applied;
- numerical value is in thew range 20-30s (15-40S, 10-45s)
1,6
0,5
0,2
1,0
0,6 (0,4; 0,2)
