---
id: solution-document-izho-2022-e-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2022_E_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2022_E_S.pdf."
---

XVIII International Zhautykov Olympiad/Experimental Competition                                        Page 1/12

                                            SOLUTION
                                            Dry friction
                                     Experiment 1: Sliding friction
                                              Theoretical part
1.1 The formulas for the accelerations of the cylinder axis can be obtained in various ways, but they are all
based on the use of Newton's second law. When a cylinder rolls down an inclined plate, it is subject to the
                                                                            
following forces: mg – gravity due to the Earth, N – normal reaction force, F – friction force.




         A) In this case, the friction force does not perform any work, so we can write down the equations of
the law for the conservation of mechanical energy as follows
                  3
                    mR 2Vc2 = mgS sin  ,                                                                    (1)
                  4
which takes into account the energy of rotation of the cylinder around its own axis.
         To determine the acceleration, we calculate the time derivative of this equation to obtain
                  3
                    mR 2  2VC a = mg sin   VC .                                                           (2)
                  4
              dS                                                       dV
Here VC =         stands for the speed of the cylinder axis, and a = C refers to its acceleration.
               dt                                                       dt
         It follows from equation (2) that when rolling without slipping, the acceleration of the cylinder axis
is described by the formula
                       2
                  a1 = g sin  .                                                                             (3)
                       3
An alternative way to derive this formula is to use the equation for the rotational motion of the cylinder.
         B) If the cylinder slips during its downward motion, then the friction force is determined by the
formula
                  F =  s N =  s mg cos  ,                                                                 (4)
then the equation of Newton's second law in projection onto an inclined plane has the form
                  ma = mg sin  −  s mg cos  ,                                                             (5)
         It follows from this equation that the acceleration of the cylinder in this case is equal to
                  a2 = g (sin  −  s cos  ) ,                                                              (6)
1.2 It is obvious that the motion without slipping occur at angles of inclination of the plate that are less than
some critical value  cr , whose magnitude can be found in various ways. For example, it can be found by
equating the accelerations described by formulas (3) and (6).
         Here is another method for obtaining the critical angle. From equation (2) of Newton's law, we
obtain
                  ma = mg sin  − F .
         Let us express the value of the static friction force, taking into account the found acceleration, as


XVIII International Zhautykov Olympiad/Experimental Competition                                    Page 2/12

                                         1
                  F = mg sin  − ma = mg sin 
                                         3
 and assume that this force does not exceed the force of sliding friction
                  F   s N =  s mg cos  .
       It is derived from the last inequality that
                  1
                    mg sin   s mg cos   tg   3s .                                          (7)
                  3
       Thus, the value of the critical angle is determined by the formula
                 cr = arctg (3 s ) .                                                             (8)
                                          Processing of measurement data
1.3 To calculate accelerations according to the measurement results given in the problem formulation, we
write expressions for the distances traveled by the balls
                               at12
                 1
                   S  = V  t
                          0 1 +
                                              − = (t2 − t1 ) .
                                 2          S2 S1 a
                                   2
                                                                                                  (9)
                 S = V t + at2             t2 t1 2
                  2     0 2
                                 2
        The formula for calculating accelerations is then found as:
                     S S 
                    2 2 − 1 
               a=  2
                       t      t1 
                                   .                                                                  (10)
                       t2 − t1
        The results of acceleration calculations according to formula (10) are shown in Table 1.

Table 1. Calculation of accelerations.

                                            m
                                         a, 2
             t1 , s      t2 , s           s
   20        0.4546       0.7187         2.208
   25        0.3936       0.6290         2.715
   30        0.3462       0.5589         3.244
   35        0.3229       0.5211         3.739
   40        0.3358       0.5283         4.196
   45        0.3084       0.4911         4.543
   50        0.2682       0.4347         5.239
   55        0.2816       0.4432         5.950
   60        0.2600       0.4113         6.718
   65        0.2461       0.3908         7.286
   70        0.2308       0.3675         8.116
   75        0.2218       0.3542         8.595

        Based on these data, Graph 1 of the dependence of acceleration on the angle of inclination of the
plate is drawn.


XVIII International Zhautykov Olympiad/Experimental Competition                                       Page 3/12




         It is clearly seen in the graph that it consists of two different branches: at small angles, the motion
occurs without slipping (acceleration is described by formula (3)), whereas at large angles, the cylinder slips,
so the acceleration is described by formula (6). The abscissa of the intersection point of these graphs is the
critical angle, which is seen to be approximately equal to
                   cr  46 .
Note: In principle, it is not needed to specify the free fall acceleration, which can be determined from the
behavior of the acceleration at small angles. However, this is not required in this problem.
         The linearization of the obtained dependence can be carried out in two alternative ways, which are
approximately equivalent. Let us consider these methods in detail.

                                                    Solution 1
1.4 As a variable Y we take the combination
                       a
                Y=           ,                                                                            (11)
                    g cos 
then it follows from the formulas for accelerations:
                                                 a1         2
                     2                                   = tg 
                a1 = g sin                     g cos  3
                     3                                               ,
                a2 = g (sin  −  s cos  )
                                                   a 2
                                                           = tg  −  s
                                                
                                                 g cos 
i.e. the new variable Y is a linear function of X = tg  , such that
                       2
                  Y = X ,    cr
                       3                  .                                                       (12)
                  Y = X −  s ,    cr
       Calculations of the chosen variables are provided in Table 2. In the table the highlighted values
correspond to the motion without slipping.


XVIII International Zhautykov Olympiad/Experimental Competition                                  Page 4/12

Table 2. Linearization 1.
               m        X = tg              a
             a, 2                    Y=
             s                          g cos 
     20        2.208      0.3640           0.2395
     25        2.715      0.4663           0.3053
     30        3.244      0.5774           0.3818
     35        3.739      0.7002           0.4653
     40        4.196      0.8391           0.5584
     45        4.543      1.0000           0.6549
     50        5.239      1.1918           0.8308
     55        5.950      1.4281           1.0574
     60        6.718      1.7321           1.3697
     65        7.286      2.1445           1.7575
     70        8.116      2.7475           2.4188
     75        8.595      3.7321           3.3851

       Graph 2 shows the linearized dependencies.




1.5 Indeed, both dependences turn out to be linear. We represent these dependencies in the form
                Y = cX + b .                                                                          (13)
         The calculation of the coefficients of these dependencies by the least squares gives the following
results:
At the motion
                    c1 = 0.659  0.008
without slipping:                       ,
                    b1 = 0.0004  0.005


XVIII International Zhautykov Olympiad/Experimental Competition                                   Page 5/12

                     c2 = 1.011  0.009
with slipping:                          .
                    b2 = −0.38  0.02
       It follows from formula (12) that the coefficient of sliding friction is equal to
                s = −b2 = 0.38  0.02 .                                                              (14)
       Note that the calculated random error (of the order of 10%) significantly exceeds the relative errors
of direct measurements of both distances between sensors and motion times. Therefore, the latter can be
ignored.
1.6 The value of the critical angle can be found by equating the two linear relations above:
                   2
                     X = X − s  X cr = tg  cr = 3s ,                                              (15)
                   3
or
                cr = arctg ( 3s ) = 0.855 = 49
       The error of this value is equal to
                         3S
              acr =              = 0.03 ,
                      ( 3S ) + 1
                             2


and we finally get
                  cr = 0.86  0.03 = 49  2 .                                                      (16)
                                                   Solution 2
1.4 As a variable Y we take the combination
                       a
                Y=           ,                                                                        (17)
                    g sin 
then it follows from the formulas for accelerations:
                                                 a1        2
                     2                                  =
                a1 = g sin                     g sin  3
                     3                                                 ,
                a2 = g (sin  −  s cos  )
                                                   a2
                                                          = 1 −  s ctg 
                                                
                                                 g sin 
i.e. the new variable Y is a linear function of X = ctg  , such that
                       2
                  Y = ,    cr
                       3                    .                                                     (18)
                  Y = 1 −  s X ,    cr
       Calculations of the chosen variables are provided in Table 3. In the table the highlighted values
correspond to the motion without slipping.

Table 3. Linearization 2.
               m       X = ctg                   a
             a, 2                         Y=
             s                               g sin 
     20        2.208      2.7475                0.6580
     25        2.715      2.1445                0.6548
     30        3.244      1.7321                0.6613
     35        3.739      1.4281                0.6645
     40        4.196      1.1918                0.6655
     45        4.543      1.0000                0.6549
     50        5.239      0.8391                0.6972
     55        5.950      0.7002                0.7404
     60        6.718      0.5774                0.7908
     65        7.286      0.4663                0.8195
     70        8.116      0.3640                0.8804
     75        8.595      0.2679                0.9070


XVIII International Zhautykov Olympiad/Experimental Competition                                  Page 6/12


       Graph 3 shows the linearized dependencies.




1.5 Indeed, both dependences turn out to be linear. We represent these dependencies in the form
                  Y = cX + b .                                                                        (19)
         The calculation of the coefficients of these dependencies by the least squares gives the following
results:
At the motion
                       c1 = −0.002  0.003
without slipping:                            ,
                       b1 = 0.663  0.006
                    c2 = −0.38  0.02
with slipping:                          .
                    b2 = 1.01  0.01
         It follows from formula (18) that the coefficient of sliding friction is equal to
                  s = −c2 = 0.38  0.02 .                                                            (20)
         In this case, the errors of direct measurements can also be ignored.
1.6 The calculation of the critical angle is carried out similarly and we obtain
                   cr = arctg ( 3s ) = 0.84 = 48
       The error of this value is equal to
                         3S
              acr =              = 0.02 ,
                      ( 3S ) + 1
                             2


and we finally get
               cr = 0,84  0, 01 = 48  1 .                                                       (21)


XVIII International Zhautykov Olympiad/Experimental Competition                                          Page 7/12

                                      Experiment 2: Rolling friction
                                                  Theoretical part
2.1 When the axis of the cylinder is displaced by the distance x , the axis of the rod deviates by the angle
                    x
               = .                                                                                       (22)
                    R
       To calculate the period of small oscillations, we write the equation for the law of conservation of
energy
                  MV 2 + mgl (1 − cos  ) = mgl (1 − cos  0 ) .
                3
                                                                                                          (23)
                4
       Hereinafter, we neglect the kinetic energy of the rod motion, since its
mass is small.
       On the other hand, the potential energy of the massive cylinder remains
constant, so the change in the potential energy of the system is the change in the
potential energy of the rod. For small oscillations, the approximate formula for
                                               2
the cosine of a small angle cos   1 −           should be used, which leads to a
                                                2
simplification of equation (23) to:
                3             2           02
                  MV + mgl
                      2
                                  = mgl         .
                4              2           2
       Using relation (22), we obtain the equation
                3        mgl x 2 mgl x02
                  MV 2 + 2        = 2          ,                                                          (24)
                4         R 2       R 2
which is the equation of harmonic oscillations with the period of
                         3MR 2
               T = 2             .                                                                   (25)
                         2mgl
2.2 At the stoppage points, the kinetic energy of the cylinder with the rod is zero, so the change in the
potential energy when moving from one stoppage point to the next is equal to the work of the friction force.
Therefore, the following relation is valid:
               mgl (1 − cos  k ) = mgl (1 − cos  k −1 ) − r Mg xk − xk −1 .                        (26)
       Applying relation (22) between the angle of rotation and the displacement of the cylinder, we obtain
the required relation
                       x            x            M
                1 − cos k  = 1 − cos k −1  −  r    xk − xk −1 .                                      (27)
                        R            R           ml
2.3 Let us sum up relations, similar to (27), for all intervals of motion from the initial position to the k ‘th
stoppage point, which finally yields
                       x            x         M
                1 − cos k  = 1 − cos 0  −  r     Sk ,                                                (28)
                        R           R         ml
where S k is the path the cylinder passes to the k ’th stoppage point
                                                             k
               Sk = x0 − x1 + x2 − x1 + ... + xk − xk −1 =  x j − x j −1 .                                 (29)
                                                            j =1

       In the initial position, the rod is directed vertically, i.e. 0 =  , therefore x0 = R , and one can write
down
                    x0
               R=     .                                                                                     (30)
                   
       From the formula for the oscillation period, one can also express:
              M      T 2 2g      T 2g     T 2g
                  =           =         =      .
              ml 4 2 3R 2 6 2 R 2 6 x02
       We substitute these values into equation (28), which yields


XVIII International Zhautykov Olympiad/Experimental Competition                                       Page 8/12

                       x                T 2g
               1 − cos  k  = 2 −  r 2 S k .                                                  (31)
                        x0              6 x0
                                          x 
        Thus, the value Yk = 1 − cos  k  linearly depends on the path S k . The slope of dependence
                                          x0 
coefficient contains the rolling friction coefficient sought as well as other known values. The unity in
expression (31), of course, can be omitted. But the value Y , up to a constant factor, is equal to the potential
energy, therefore, in the accepted definition, the dependence Y (S ) is more preferable.
                                       Processing of measurement data
2.4 The oscillation period is calculated in the traditional way.
We calculate the average value of the time of 5 oscillations: t5 = 7.354 s ;

                                                             (t − t )
                                                                             2
                                                                    i
We also calculate the random error of this value: t5 = 2     i
                                                                                 = 0.11 s .
                                                                  n(n − 1)
Then the oscillation period is obtained as
               T = (1.47  0.02 ) s .                                                                     (32)
2.5 The results of calculations of the quantities, appearing in formula (31), are shown in Table 4.

Table 4. Linearization.

                                                                    x 
                                                       Yk = 1 − cos  k 
    k       xk , cm    S k = xk − xk −1 ,m   Sk , m                 x0 
    0       15.8                                0             2.000
    1       -11.6            0.274            0.274           1.671
    2       10.1             0.217            0.491           1.424
    3        -9.0            0.191            0.682           1.217
    4        7.7             0.167            0.849           0.960
    5        -7.0            0.147            0.996           0.822
    6        5.7             0.127            1.123           0.576
    7        -5.3            0.110            1.233           0.506
    8        4.7             0.100            1.333           0.406
    9        -3.9            0.086            1.419           0.286
   10        2.8             0.067            1.486           0.151

        The dependence Y (S ) is shown in the following figure.


XVIII International Zhautykov Olympiad/Experimental Competition                                  Page 9/12




2.6 The resulting dependence is linear, which confirms the theoretical model used. The slope coefficient of
this graph, calculated by the least squares, is equal to
                С = (1.23  0.02 ) m −1 .
        The theoretical formula for this coefficient makes it possible to express the value of the rolling
friction coefficient:
                      T 2g              6x2
                C = r 2  r = C 2 0 = 8.69 10−3 .                                                (33)
                       6 x0             T g
        To calculate the error of this value, we make use of the formula for the error of indirect
measurements:
                               2           2           2
                          C   T   x0 
              r = r       +  2  +  2  =
                           C   T   x0                             .                            (34)
                                   2           2           2
                              0.02   0.02   0.2 
              = 8.69 10−3           +2    +2     = 3.8 10
                                                                  −4

                              1.23   1.47   15.8 
       The final result is written as
              r = ( 8.7  0.4 ) 10−3 .                                                             (35)


   Part                                      Content                                 Points      Total
                            Experiment 1: Sliding friction                                       10.0
                                   Theoretical part                                               1.5
           Motion without slipping:
           equation of motion;                                                         0.2
           formula (3);                                                                0.3
    1.1                                                                                           1.0
           Motion with slipping:
           equation of motion;                                                         0.2
           formula (6);                                                                0.3
           Critical angle value:
    1.2    the condition for the start of slippinge: the boundary value of the                    0.5
                                                                                       0.2
           static friction force; equality of accelerations (3) and (6);


XVIII International Zhautykov Olympiad/Experimental Competition                                Page 10/12

           relation between the critical angle and the friction coefficient: formula
                                                                                         0.3
           (7) or (8);
                         Processing of measurement data                                         8.5
           Calculation of accelerations:
           formula (10) for acceleration;                                                0.2
           all accelerations are calculated (graded if the formula for calculating
           acceleration is graded);
                                                                                         1.2
           0.1 for each point, acceptable error of acceleration calculation is
            0.01 ;
           Plotting a graph (graded if the results of acceleration calculations are
           graded):
    1.3                                                                                         2.5
           the axes are named and ticked;                                                0.1
           all points are drawn;                                                         0.1
           two smoothing curved lines are drawn;                                         0.2
           two dependences are obtained: two different intersecting curves are           0.3
           visible in the graph;
           Critical angle value;
           determination method: the point of intersection of two curves;                0.2
           numerical value: acceptable error 1 ;                                       0.2
           Linearization of the dependence:
           New variables:
                              a              a           
           any reasonable:          , ctg ,       , tg , and equivalent, leading   1.0
                              sin           cos        
           to linear dependencies;
           Numerical calculations:
           graded if the choice of new variables X , Y is graded;                        1.2
    1.4                                                                                         2.8
           0.1 for each correctly calculated point, acceptable error 0.02 ;
           Plotting a graph (graded if the results of the calculations of the
           variables X , Y are graded):
           the axes are named and ticked;                                                0.1
           all points are drawn;                                                         0.1
           two straight lines are visible;                                               0.2
           two straight lines are drawn;                                                 0.2
           Calculation of the coefficient of sliding friction:
           coefficients of the linear dependences are calculated:
           0.2 for each coefficient (graphically for all points, LSM); 0.1 – by two
                                                                                         0.8
           points;
           the use of theoretical values is not graded;
           formula for the coefficient of friction through the coefficients of
                                                                                         0.2
           linear dependencies;
    1.5                                                                                         1.9
           numerical value of the coefficient of sliding friction:
           graded if the formula for the coefficient of friction is graded, the          0.4
           acceptable error 0.05 ;
           formula for the error: only through the coefficients of the linear
                                                                                         0.2
           dependencies;
           numerical value of the error: graded if the formula is graded;                0.2
           correct rounding;                                                             0.1
           Critical angle value:
           calculation method: analytical calculation of the intersection point of
    1.6                                                                                         1.3
           two lines, the use of numerical theoretical values of the coefficients is     0.5
           acceptable;


XVIII International Zhautykov Olympiad/Experimental Competition                             Page 11/12

           numerical value of the critical angle: graded if the method of             0.2
           determination is graded;
           formula for the error: through the errors of the coefficients of the       0.3
           straight lines;
           numerical value of the error: graded if the formula is graded;             0.2
           correct rounding;                                                          0.1
                           Experiment 2: Rolling friction                                    10.0
                                  Theoretical part                                            2.5
           Derivation of the formula for the period of small oscillations:
           initial equation: either dynamic or energetic;                             0.2
    2.1                                                                                      0.5
           approximation of small oscillations;                                       0.1
           formula (25) for the period: incorrect numerical factor (-0.1);            0.2
           Recursive relation:
           use of the law of conservation of energy;                                  0.3
    2.2    expression for the potential energy in terms of deflection angle;          0.2    1.0
           relation between the angle and coordinate;                                 0.1
           final form of the recursive relation: formula (27) or equivalent;          0.4
           Expression for the stoppage point coordinates:
           expression for the energy change through the path traveled;                0.2
    2.3    determination of the disk radius through the initial coordinate;           0.2    1.0
           use of the formula for the period of small oscillations;                   0.2
           final relation: formula (31) or equivalent;                                0.4
                         Processing of measurement data                                      7.5
           Calculation of the period:
           Formula for the period;                                                    0.2
           numerical value of the period, acceptable error  0,01 ;                   0.2
    2.4    formula for the error;                                                     0.2    1.0
           numerical value of the error;                                              0.2
           the dimension is indicated;                                                0.1
           correct rounding;                                                          0.1
           Linearization:
           choice of variables (equivalent variables are acceptable if expressed      1.6
           in terms of the measured known values);
           calculated for all points (graded if the choice of variables is graded);   1.1
    2.5    0.1 for each point, acceptable error 0.02 ;                                      3.2
           Plotting a graph (graded if the calculation of points is graded):
           the axes are named and ticked;                                             0.1
           all points are drawn;                                                      0.2
           smoothing straight line is drawn;                                          0.2
           Calculation of rolling friction coefficient:
           Calculation method of the friction coefficient:
           according to the slope coefficient – 0.6;                                  0.6
           by 1-2 points – 0.3;
           slope coefficient found:
           according to LSM – 0.5;
    2.6    graphically – 0.4;                                                                3.3
                                                                                      0.5
           by two points – 0.2;
           acceptable error  0,05 ;
           error calculation method;                                                  0.2
           numerical value of the error;                                              0.2
           formula for calculating the rolling friction (only through the slope       0.3


XVIII International Zhautykov Olympiad/Experimental Competition                        Page 12/12

           factor);
           numerical value of the rolling friction coefficient (graded if the
           formula is graded); the error propagation rule does not apply to      0.5
           numerical values!
           formula for the error, the errors of all quantities included in the
                                                                                 0.6
           formula are taken into account;
           numerical value of the error;                                         0.2
           correct rounding;                                                     0.2
           TOTAL                                                                        20.0
