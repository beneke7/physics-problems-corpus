---
id: solution-document-ipho-2019-e1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2019/E1_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2019-e1-c, ipho-2019-e1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2019/E1_S.pdf."
---

Experiment IPhO 2019 Q1-1
S1-1
Optical Measurements – Solution
Part A: The refractive index of a disk
A.1: A sketch of the experimental setup for 𝑁 = 3
A.1: table of measured and calculated values
α(∘) Δ𝛼(∘) 𝛿/2(∘) Δ𝛿/2(∘) 𝛿(∘) Δ𝛿(∘) 𝛽(∘) sin𝛼 sin𝛽
15 0.25 174.5 0.25 349 0.5 10.25 0.259 0.178
20 0.25 173 0.25 346 0.5 13.5 0.342 0.233
25 0.25 172 0.25 344 0.5 16.5 0.423 0.284
30 0.25 171 0.25 342 0.5 19.5 0.500 0.334
35 0.5 170 0.25 340 0.5 22.5 0.574 0.383
40 1 169.5 0.25 339 0.5 25.25 0.643 0.427
45 1 169 0.25 338 0.5 28 0.707 0.469
50 1 169 0.25 338 0.5 30.5 0.766 0.508
55 1 169 0.25 338 0.5 33 0.819 0.545
60 1.5 170 0.25 340 0.5 35 0.866 0.574
65 1.5 171 0.5 342 1 37 0.906 0.602
70 1.5 173.5 1 347 2 38.25 0.940 0.619
75 2 176.5 1.5 353 3 39.25 0.966 0.633
LaserExperiment IPhO 2019 Q1-1
S1-2
A.2:Experiment IPhO 2019 Q1-1
S1-3
A.3:
By observing the remote screen, it is possible to identify the point in which 𝛿 is minimal at the
highest accuracy.
The values we find are
    25 . 0 49  and     5 . 0 338 
A.4:
When 𝛿 is minimal,
𝑑𝛿
𝑑𝛼
= 0.
Differentiating the relation 𝛿 = 2𝛼 + (𝑁 − 1)(180° − 2𝛽) by 𝛼 we get:
0 ) 1 ( 2 2   


d
d
N and therefore
1
1


N d
d


.Experiment IPhO 2019 Q1-1
S1-4
By differentiating Snell’s law   sin sin n  we get
1
cos
cos cos

  
N
n
d
d
n



 
Squaring this result, as well as Snell’s law and summing the expressions we get:
2
2 2
2 2 2 2
) 1 (
cos
sin cos sin 1

   
N
n
n

  
Hence: 2
2
2
2
) 1 (
cos
sin
1

 
N n


We got an explicit relation between the refraction angle 𝛽 and the refraction index of the
material. Due to the multiple reflections inside the disk it is possible, by following all the point
in which the beam hits the disk-air interface, to measure the angle 𝛽 at very high accuracy.
A.5: a sketch showing all the measured quantities:
Define the angle 𝛾 = 180° − 2𝛽, as shown in the sketch. In fact, after two reflections inside the
disk the beam exits at a point very close to the entering point. We will measure the angular
location of the points where the beam hits the interface after 𝑘 reflection, for as many values of
𝑘 as we can:
𝑘 𝛼 + 𝑘𝛾
0 49
1 168.5
2 288.5
3 409
Note: for the case of 𝑁 = 3 it is not possible to measure for 𝑘 > 3 as in this case, starting from
𝑘 = 3 the impact points co-inside with previous points.
Next we draw a graph of 𝑦 = 𝛼 + 𝑘𝛾 vs. 𝑘 and find the linear regression slope, 𝛾:
Laser


   
  2 
  3 Experiment IPhO 2019 Q1-1
S1-5
From 𝛾 = 120° we get 𝛽 = 30°, and using the equation we derived in A.4 we get:
𝑛 =
1
√(sin𝛽)2 + (cos𝛽)2/(𝑁 − 1)2
= 1.512
A.6: We will identify the beam exiting the disk after 4 refractions/reflections (𝑁 = 4) and we
will change the incident angle until we get 𝛿𝑚𝑖𝑛 for 𝑁 = 4. We will measure 𝛼 + 𝑘𝛾 as a
function of the number of times the beams hits the disk-air interface, 𝑘:
𝑘 𝛼 + 𝑘𝛾
0 67
1 172
2 278
3 383
4 488
5 593
6 698.5
y = 120x + 48.75
R² = 1
0
100
200
300
400
500
600
700
800
900
0 1 2 3 4 5 6 7Experiment IPhO 2019 Q1-1
S1-6
𝑛 =
1
√(sin𝛽)2 + (cos𝛽)2/(𝑁 − 1)2
= 1.511
We’ll repeat this process for 𝑁 = 5:
We will identify the beam exiting the disk after hitting the disk-air interface 5 times (𝑁 = 5)
and measure 𝛼 + 𝑘𝛾 as a function of the number of hits, 𝑘:
𝑘 𝛼 + 𝑘𝛾
0 72.5
1 174.5
2 276.5
3 379.5
4 480.5
5 582.5
6 685
y = 105.23x + 67.089
R² = 1
0
100
200
300
400
500
600
700
800
0 1 2 3 4 5 6 7Experiment IPhO 2019 Q1-1
S1-7
𝑛 =
1
√(sin𝛽)2 + (cos𝛽)2/(𝑁 − 1)2
= 1.519
Averaging the three results we get: 004 . 0 514 . 1
3
512 . 1 511 . 1 519 . 1
 
 
 n
Section B – parameters of a diffraction grating
B.1: We will mark on the table a point Q, at a distance of about 𝐻 = 70𝑐𝑚 from the screen –
the wall of the experimental chamber - and at an equal distance from the chamber’s side walls.
Using the given measuring tape we will mark on the
screen two points 𝑃1 and 𝑃2, at an equal distance of about
100cm from the left and form the right of the marked
point Q. On the screen, we will mark a point 𝑃, placed in
the middle of the interval 𝑃1𝑃2. Then, we will aim a laser
to go through the points QP. This beam will be
perpendicular to the wall that will be used as a screen.
y = 102.05x + 72.554
R² = 1
0
100
200
300
400
500
600
700
800
0 1 2 3 4 5 6 7
2  m
2   m
1  m 1   m
Laser
grating
H
1 L 2 LExperiment IPhO 2019 Q1-1
S1-8
Standard method:
We will place the grating such that the beam passes through it. By gently rotating the grating
we will make sure that diffraction ordered 1 and −1 as well as 2 and −2 will appear in
symmetrically around the zero order point. Note that the position of the zero order on the
screen does not depend on the angle 𝛼. In this situation it ok to assume that the incident angle
of the beam on the grating is 𝛼 = 0.
As in the sketch, we will measure 𝐻,𝐿1 and 𝐿2 and use the relation 𝑑 sin𝜃𝑚 = 𝑚𝜆.
The measured values are 1 2 53.3cm L  , 2 2 163.5cm L  and cm 8 . 60  H .
For the first order we get 4015 . 0 
d

. For the second order we get 4012 . 0 
d

.
B.2: A second method
Getting higher orders is not possible at an incident angle of 𝛼 = 0. Thus we will change 𝛼 and
as a result the angle 𝜃𝑚 will change. There is an angle in which 𝜃𝑚 is minimal. By differentiating
the relation   sin sin( ) m d m        by 𝛼 we get that at the minimum ( 0 


d
d m
) one
gets
2
0 ) cos( cos m
m

         . From this we get 

m d m
 )
2
sin( 2 .
Note that there is no need to measure the angle 𝛼, but rather to identify, by changing 𝛼, the
minimum of 𝜃𝑚.
Using this method it is possible to measure also ordered 𝑚 = 1 and 𝑚 = 2. For 𝑚 = 2 and
𝑚 = −2 we can verify that the beam is perpendicular to the screen by making sure the distance
of these two ordered from the zero order is identical.
For 𝑚 = 3, we will change 𝛼 to get 𝜃3𝑚𝑖𝑛 and measure the distances 𝐿 and ℎ3.Experiment IPhO 2019 Q1-1
S1-9
The measured values, as shown in the sketch below, are cm 0 . 67  H , cm 2 . 100  L ,
cm 8 . 37 3  h .
We get 432 . 3
8 . 37 0 . 67
2 . 100
3
tan min 3 




h H
L
 and hence   75 . 73 min 3 
Therefore: 400 . 0
2
75 . 73
sin
3
2
2
sin
3
2 min 3


 
 
d
For 𝑚 = 4 we will change 𝛼 to get min 4  and measure the distance 4 h .
The measured values are cm 0 . 67  H , cm 2 . 100  L , cm 3 . 96 4  h .
From the sketch we get 2924 . 0
2 . 100
0 . 67 3 . 96
) 90 tan( 4
min 4 



  
L
H h

Hence   3 . 106 min 4  , therefore 400 . 0
2
3 . 106
sin
2
1
2
sin
4
2 min 4


 
 
d
Laser
grating
H
3  m
Laser
grating
H
4  m
3 h
4 h
L LExperiment IPhO 2019 Q1-1
S1-10
Section C – the refraction index of a triangular prism
C.1: From the sketch showing the path of the laser beam and from
the principle the beam path reversal we get that the deflection
angle 𝛿 from the direction of in the incoming beam will not change
if we switch the angles 𝛼1 and 𝛼2. Thus we get that 𝛿 achieves an
extremum value (in fact, a minimal value) when the situation is
perfectly symmetric, that is when 𝛼1 = 𝛼2. In this case,
2
2 1

    .
For the symmetric case, the incident angle 𝛼 holds the relation
2 2
 
   and from Snell’s
law we get
2
sin
2 2
sin
  
n  





 .
If the prism is not exactly equilateral, we will mark the angles of the prism by i i   2 60    .
From the sum of angles in a triangle we get 0   i  . Additionally i i     30 . In this case
i    2 0 min   where 0  is the minimal  when  60  .
From Snell’s law we get ) 30 sin( 30
2
sin 0
i i i n  

   





     . Making the small angle
approximation:   i i i n n  
 
       





   





  30 cos 30 sin 30
2
cos 30
2
sin 0 0
From the equation that holds for  60 prism we get   i i i n  

     





  30 cos 30
2
cos 0
Averaging for all three angles we get 0  i , and therefore  


 


   30
2
sin 2 min 
n
1 
2 
2  1 

Experiment IPhO 2019 Q1-1
S1-11
C.2. We will use the full length of the table to magnify the distances as much as possible. We
will build the setup, as described in the sketch, so that in the absence of the prism, the laser
beam will hit the screen (the chamber’s
wall) perpendicularly. We will attach the
prism holder base to the table using the
adhesive tape. On it we will place the
prism holder and the prism itself. We will
rotate the prism to find the minimal
deflection angle 𝛿𝑚𝑖𝑛. We will then repeat
the measurement of 𝛿𝑚𝑖𝑛 for each corner
of the prism.
The measured values are given in the
table:
min  h L Corner No.
51.05 0.1   175.2 0.3 cm  141.6 0.2 cm  1
49.84 0.1   167.1 0.3cm  141.0 0.2cm  2
50.62 0.1   171.4 0.3cm  140.7 0.2cm  3
Calculation of the error in min  :
2 2
min min 2 2
min
1
tan
cos
h h h L
L L L
 

     
        
   
Therefore,
2 2
2
min min 2
cos
h h L
L L
 
     
      
   
Substituting the measured values we get
2 2
2
min 2
0.3 175.2 0.2
cos 51.05 0.0017 0.1
141.6 141.6
rad 
    
          
   
The error in the average value of the two angles is
3
min
0.1
0.06 1 10
3
rad   
     
Laser
prism
L
h
min Experiment IPhO 2019 Q1-1
S1-12
From the table we get that the average value of min  is   50 . 50 min 
Therefore the refraction index of the prism is
min 50.50
2sin 30 2sin 30 2sin55.25 1.6433
2 2
n
     
            
   
And the error in n : 3 4
min 2cos55.25 0.5 cos55.25 1 10 6 10 n   
        
Thus: 1.6433 0.0006 n  
As the laser wavelength may vary between lasers up to a standard deviation of 10nm  , the
value found in the literature is ( ) 1.6425 0.0007 n      .
