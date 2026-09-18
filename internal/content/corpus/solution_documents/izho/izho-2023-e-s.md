---
id: solution-document-izho-2023-e-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2023_E_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2023_E_S.pdf."
---

XIX International Zhautykov Olympiad/Experimental Competition                                        Page 1/7

           SOLUTIONS TO THE PROBLEMS OF THE EXPERIMENTAL
                             COMPETITION
                                                      1. Theoretical part
1.1 With the interference of two waves of the same intensity, the resulting intensity is determined by the
formula
                                                       
                 I = 2 I 0 (1 + cos  ) = 4 I 0 cos 2     .                                           (1)
                                                         2
1.2 When the mirror is displaced from the initial position by a value x , the path difference changes by 2 x .
In this case, a phase difference arisen between the two waves is equal to
                        4
                  =         x,                                                                       (2)
                       
therefore, the dependence of the intensity on the coordinate has the form
                                2
                I = 2 I 0 cos 2    x.                                                                   (3)
                            
1.3 The intensity maximum is observed if the path difference is equal to an integer number of wavelengths,
i.e.
                                         
               2 xm = m       xm = m     ,                                                     (4)
                                         2
and intensity minima arise under the following condition
                           1                  1 
               2 x m =  m +   x m =  m +  .                                                (5)
                           2                  2 2
1.4 The intensity changes from maximum to minimum (and vice versa) when the mirror is shifted by a
quarter wavelength. Therefore, the sought coordinates of the mirror are described by the formula
                        
               xm = m       .                                                                          (6)
                          4
            2. Monochromatic radiation of a known wavelength as an instrument calibration
2.1 It follows from the given figure that the extreme positions of the mirror correspond to the values of the
times
                t min = 67; t max = 901 .                                                              (7)
        This shift occurs in half the period of the mirror oscillation, so
                T = 2(t max − t min ) = 1668 .                                                         (8)
        On the other hand, the oscillation period can be expressed in terms of a given mirror oscillation
frequency  = 20 Hz :
                      1
                T = = 5.0 10−2 s = 50 ms .                                                            (9)
                   
        Equating expressions (8) and (9), we find that the division value of the time scale is equal to
                           50
                t =              = 0.030 ms .                                                          (10)
                      2(901 − 67)
2.2 Приведенный график зависимости интенсивности от времени симметричен относительно
«центрального» максимума, номер которого равен The given figure of the intensity dependence on time
is symmetrical with respect to the "central" maximum, whose number is equal to
                      0 + 54
                m0 =          = 27                                                                      (11)
                         2
and this maximum corresponds to the time
                t0 = 486 .                                                                              (12)
        For further calculations, we choose 13 extrema (to round it off), approximately symmetrical with
respect to the central maximum, see Table 1.

Table 1.


XIX International Zhautykov Olympiad/Experimental Competition                                         Page 2/7

                                                      2
                                                 sin     (t − t0 )
     m          tm   m − m0          t − t0           T                 x m , мкм
       1       118           -26        -368                -0,983            -4,16
       5       224           -22        -262                -0,834            -3,52
      10       302           -17        -184                -0,639            -2,72
      15       361           -12        -125                -0,454            -1,92
      20       414            -7         -72                -0,268            -1,12
      25       465            -2         -21                -0,079            -0,32
      27       486             0           0                 0,000             0,00
      30       515             3          29                 0,109             0,48
      35       567             8          81                 0,300             1,28
      40       623            13         137                 0,493             2,08
      45       684            18         198                 0,679             2,88
      50       766            23         280                 0,870             3,68
      53       855            26         369                 0,984             4,16

Let us carry out the following calculations:
Extremum number relative to the center m = m − m0 ;
Temporal shift from the center t  = t − t0 ;
                                                              0
The mirror coordinates at intensity extrema xm = m                 .
                                                               4
       To test the applicability of the law of motion
                                2
                x (t ) = A sin     (t − t0 )                                                          (13)
                                T            
                                                        2
we plot the dependence of coordinates x m on S = sin       (t − t0 ) . It should be noted that when choosing
                                                        T            
points for plotting, you should:
- select points with the maximum range of coordinates change;
- do not include utmost extremes, since they may not satisfy condition (6).
        Below is a graph of this relation.
                                                             5,00
                                                             4,00
                                                             3,00
                                                             2,00
                                                             1,00

                        Xm                                   0,00
                              -1,5        -1,0       -0,5   -1,00 0,0         0,5     1,0   1,5

                                                            -2,00
                                                            -3,00
                                                            -4,00
                                                            -5,00
                                                                    sin


      The linearity of this graph confirms the applicability of formula (13) for describing the law of mirror
motion. The parameters of this dependence calculated by the least squares method have the following
numerical values:


XIX International Zhautykov Olympiad/Experimental Competition                                                 Page 3/7

               A = ( 4.23  0.01)  m
                                                     .
               b = ( 0.04  0.06 )  m
               (14)
       The slope coefficient A is the amplitude of the mirror oscillation. When this numerical value of the
shift parameter b is less than its error, therefore, it can be assumed that b = 0 , and the analyzed
dependence is directly proportional.
                          3. Monochromatic radiation with unknown wavelength
3.1 From the table of extrema, we select symmetrical points (according to the formulated criteria)
Table 2.
 m         tm         xm                 5,0
       1       138      -4,088                4,0
       5       240      -3,382
                                              3,0
      10       320      -2,476
      15       384      -1,586                2,0
      20       442      -0,698                1,0
      24       486       0,000
      28       529       0,682           Xm   0,0
      33       586       1,556                           0   5   10   15   20   25   30   35   40   45   50
                                              -1,0
      38       653       2,489
                                              -2,0
      43       730       3,363
      47       830       4,071                -3,0
                                              -4,0
                                              -5,0

                                                                                m


3.2 For each extremum, using formula (13), we calculate the value of the mirror coordinate x m , after which
we plot the dependence of the mirror coordinate on the extremum number m . This dependence is described
by the formula
                        
               xm = m        .                                                                          (15)
                          4
        The resulting graph confirms this dependence (shift along the number axis m in this case does not
play a role and is due to a different numbering of extrema). The coefficient of the slope of the graph
calculated by the least squares is equal to
                 a = ( 0,1771  0, 0008 )  m .
        It follows from the form of function (15) that the radiation wavelength is equal to
                  = 4a = ( 0, 709  0, 003)  m .                                                      (16)
                                            4. Two monochromatic waves
4.1 Waves with different wavelengths do not interfere, in this case the recorded signal is the sum of the
intensities of these waves. Using formula (3), we write an explicit expression for the dependence of the total
intensity on the mirror coordinate and transform it (using the trigonometric formula for the sum of cosines):
                                   4               4
                 U ( x) = 2 I1 cos    x + 2 I 2 cos    x=
                                   1               2
                            4          4                        4
               = 2 I 0  cos     x + cos   x  + 2 ( I 2 − I1 ) cos    x=                 .                     (17)
                             1         2                        2
                            1 1               1 1                            4
               = 4 I1 cos  2  −  x  cos  2  +  x  + 2 ( I 2 − I1 ) cos    x
                             1 2             1 2                         2


XIX International Zhautykov Olympiad/Experimental Competition                                           Page 4/7

       The resulting function describes the modulated signal obtained experimentally. The formula is too
complicated to get explicit expressions for the extrema of this function. Therefore, the only way to obtain
the required characteristics is to analyze the envelope of the fast-changing signal. Up to a constant term, this
envelope is described by the function
                                1 1                   2 
               U ( x) = U1 cos  2  −  x  = U1 cos     x,                                         (18)
                                  1 2                
where we denote
                1 1         1
                   −     = .                                                                              (19)
                1 2 
Here  – spatial period of signal modulation (see figure below).




        The envelope function (18) is extremal under the condition
                 2       
                    xM = M ,                                                                              (20)
                         2
where M = 0,  1,  2... – extremum number of the envelope.
        In the above signal, 5 such extrema can be distinguished, they are also shown in the figure. It follows
from formula (20) that the corresponding coordinate of the mirror is determined by the formula
                      
                x M = (M − M 0 ) .                                                                        (21)
                      4
Here M 0 is the “initial” number, which is insignificant for further analysis and determines the start of
counting the numbers.
        Using the table of extrema, we
                                                        4,0
determine the times t M at which extrema are
observed, then, using formula (14), we calculate        3,0

the values of the mirror coordinates x M and            2,0
plot the dependence xM (M ) . These values are
                                                        1,0
shown in Table 3 and on the graph.
Table 3.                                              Xm0,0
                                                                  0   1     2       3       4       5        6
                                                           -1,0
  M          tM         x M , мкм
                                                           -2,0
         1        292        -2,823
         2        397        -1,392                        -3,0
         3        486         0,000                        -4,0
         4        577         1,422                                                 M
         5        679         2,811


XIX International Zhautykov Olympiad/Experimental Competition                                              Page 5/7

        The slope coefficient of this graph, calculated by the least squares, is equal to
               a = (1, 41  0, 01)  m ,
and as follows from formula (21), the spatial period is equal to
                = ( 5, 64  0, 04 )  m .                                                                   (22)
        Finally, from formula (19) we calculate two possible values of the wavelength : 2 :
                                    −1
                         1 1
                   21 =  −  = 0, 722  m
                          1  
                                         −2
                                                                             .                               (23)
                           1 1    1 
                                                    2

                   21 =  −         =    = 0, 001  m
                           1        
                                     2



                                    −1
                         1 1
                   22 =  +  = 0,575  m
                          1                                                                              (24)
                        
                                2

               22 =  2   = 0, 001  m
                       
4.2 To estimate the ration of intensities of the two waves, you can use the maximum and minimum values of
the modulating function. From formula (17) it follows that
              U max  2(I 0 + I 1 )
                                    .                                                              (25)
              U max  2 I 0 − I 1
        The values U max ,U min can be taken approximately from the graph (or from the table) U max  170 ,
                               U
U min  40 . Their ratio is  = max  4,25 . On the other hand, formulas (25) one gets
                               U min
                     I +I           I 1− 
                = 1 2  1=                   0, 62 .                                               (26)
                     I1 − I 2      I0 1 + 
That is I 21 / I1  0, 62 .
                                                   I 22
        The second option is also possible.:             1, 62 .
                                                    I1
                                                                                       For the
                                                                                                  points
             №                                   Content                                part
          1. Theoretical part
                                                                                            1,0
          (incorrect coefficients - the formula is not graded)
                                                                             
             1.1      formula (1) I = 2 I 0 (1 + cos  ) = 4 I 0 cos 2                            0,2
                                                                              2
                                                                    4
             1.2      formula for the phase shift (2)  =               x                         0,2
                                                                    
                                                                         2
                      formula for the intensity (3) I = 4 I 0 cos 2              x                 0,2
                                                                             
                                              
             1.3      formula (4) xm = m                                                           0,1
                                              2
                                           1 
                      formula (5) xm =  m +                                                      0,1
                                           2 2
                                              
             1.4      formula (6) xm = m                                                           0,2
                                     4
          2. Monochromatic radiation of a known wavelength as an                            8,0


XIX International Zhautykov Olympiad/Experimental Competition                                   Page 6/7

        instrument calibration
                Determination of the division value:
                - maxima 0 and 54 – utmost positions of the mirror – 0,4;
                - the motion time – half the oscillation period – 0,2;
          2.1   - period calculation in relative units T = 1668 - 0,1;                    1,0
                - calculation of the period in seconds T = 50 ms - 0,1;
                - calculation of the division value t = 0, 030 ms - 0,2
          2.2   Determination of the law of motion
                Using the found oscillation period;                                       0,5
                determination of the center point:
                                                      0 + 54
                - the number of the maximum m0 =             = 27 - 0,3;                  0,5
                                                         2
                - time when passing the center point t0 = 486 - 0,2;
                Choice of points:
                - 10 or more points are used 0,3 (5 or more -0,1);
                - outmost points not included - 0,2;                                      1,0
                - maximum range used - 0,3;
                - points are roughly symmetrical - 0,2;
                coordinate determination method:
                                                          
                  - distance between adjacent extrema -     - 0,5;
                                                          4
                                                                                          1,0
                  - перенумерация максимумов от среднего – 0,2;
                                                                  0
                  - formula for calculating coordinates xm = m        - 0,3;
                                                                  4
                coordinate calculation
                (the correct calculation are carried out for all selected points;         1,0
                the allowable calculation error is 10%)
                dependence linearization:
                                          2
                - dependence x on sin        (t − t0 ) - 0,4;                          1,0
                                          T            
                - sines are calculated 0,6;
                graph plotting:
                (graded if calculations are graded);
                - axes signed and ticked – 0,1;
                                                                                          0,7
                - all points are plotted in accordance with the table – 0,2;
                - linear dependence is obtained -0.2;
                - smoothing straight line drawn – 0,2;
                calculation of the amplitude of the mirror oscillations:
                LSM used – 0,3 (graphically, or averaging over all points –
                0,2; using 2 points 0,1);
                (calculation carried out according to the number of extrema               0,8
                – 0,1);
                numerical value obtained in the range 4,2 – 4,3 μm – 0,5 (in
                the range of 4,0 – 4,5 μm – 0,3; out of the range - 0);
                amplitude error calculation:
                 - LSM used -0,3 (other methos -0,2);                                     0,5
                - numerical value of the order 10−2  m - 0,3;
        3. Monochromatic radiation with unknown wavelength                          5,0
                Choice of points:
           3.1  - 10 or more points used 0,3 (5 or more -0,1);                            1,0
                - utmost points excluded - 0,2;


XIX International Zhautykov Olympiad/Experimental Competition                                   Page 7/7

                - maximum range used - 0,3;
                - points are roughly symmetrical - 0,2;
                extrema coordinates calculation:
                - using the correct formula for coordinates – 0,5;
                                                                                          1,5
                - the coordinates of extrema calculated with an error of no
                more than 10% - 1,0 ;
                graph plotting:
                (graded if calculations are graded);
                - axes signed and ticked – 0,1;
                                                                                          0,7
                - all points are plotted in accordance with the table 0,2;
                - linear dependence is obtained -0.2;
                - smoothing straight line drawn – 0,2;
                wavelength calculation:
                - LSM used – 0,5 (averaging over all point – 0,3 ; 1-2 points
           3.2  used – 0,2);                                                              1,3
                - numerical value in the range 0,70 – 0,72 μm – 0,8 (in the
                range of 0,68 -0,74 μm - 0,4, out of range – 0);
                wavelength error calculation:
                - LSM used – 0,2 (other reasonable method – 0,1);                         0,5
                - value of the order 10−2  m - 0,3;
        4. Two monochromatic waves                                                 6,0
           4.1  Formula for the resulting intensity (17)                                  0,5
                Envelope analysis (calculations based on the position of
                                                                                          0,5
                extrema are not graded);
                choice of extremum points of the envelope:
                                                                                          1,0
                - 0,2 for each extremum;
                                                   1    1     1
                wavelength calculation formula       −     =                              0,3
                                                   0 1 
                 two solutions for the wavelength:
                 LSM used (averaging over all points) – 0,4 (by using 2 points
                 – 0,2);
                 Numerical values in the ranges
                                                                                          1,6
                 0,70 – 0,74 μm; 0,56 -0,59 μm – 2х0,6;
                 In the ranges
                 (0, 67-0,77 μm; 0,53 – 0,62 μm – 2х0,3;)
                 Out of range – 0;
                 error estimation:
                 formula for error of indirect measurements
                         
                              2
                                                                                          0,5
                  1 =  1   - 0,3;
                        
                 Numerical values – 2х0,1;
                                                                I2 1 − 
          4.2    Formula for calculating ratio of intensities:     =                      0,3
                                                                I1 1 + 
                 two solutions for intensities ration (reference to two values);          0,3
                 calculating ratio of intensities, numerical values:
                 in the ranges 0,5 – 0,7; 1,5-1,7 – 2х0,5;
                                                                                          1,0
                 (in the ranges 0,4 – 0,8; 1,4 – 1,8 - 2х0,2)
                 out of ranges - 0
                 TOTAL                                                             20,0


XIX Международная Жаутыковская Олимпиада/Экспериментальный тур                             с. 1/7

                  РЕШЕНИЕ ЗАДАЧ ЭКСПЕРИМЕНТАЛЬНОГО ТУРА
                              Фурье-спектрометр
                                                1. Теоретическая часть
1.1 При интерференции двух волн одинаковой интенсивности, результирующая интенсивность
определяется формулой
                                                     
               I = 2 I 0 (1 + cos  ) = 4 I 0 cos 2    .                            (1)
                                                      2
1.2 При смещении зеркала из начального положения на величину x разность хода изменяется на
величину 2 x . При этом между двумя волнами разность возникает фаз
                      4
                =         x,                                                       (2)
                      
поэтому зависимость интенсивности от координаты имеет вид
                             2
             I = 2 I 0 cos 2    x.                                                         (3)
                               
1.3 Максимум интенсивности наблюдается, если разность хода равна целому числу длин волн, т.е.
                                             
             2 xm = m             xm = m
                                    ,                                                (4)
                                  2
а минимумы интенсивности возникают при выполнении условия
                         1              1 
             2 x m =  m +   x m =  m +  .                                      (5)
                         2              2 2
1.4 Интенсивность изменяется от максимума до минимума (и наоборот) при смещении зеркала на
четверть длины волны. Поэтому искомые координаты зеркала описываются формулой
                       
             xm = m       .                                                          (6)
                        4
       2. Монохроматическое излучение известной длины волны – градуировка прибора
2.1 Из приведенного графика следует, что крайним положениям зеркала соответствуют значения
времен
              t min = 67; t max = 901 .                                              (7)
      Это смещение происходит за половину периода колебаний зеркала, поэтому
              T = 2(t max − t min ) = 1668 .                                         (8)
      С другой стороны, период колебаний можно выразить через заданную частоту колебаний
зеркала  = 20 Гц :
                    1
             T = = 5.0 10−2 c = 50 мс .                                             (9)
                  
      Приравнивая выражения (8) и (9), находим, что цена деления временной шкалы равна
                        50
             t =              = 0.030 мс .                                            (10)
                   2(901 − 67)
2.2 Приведенный график зависимости интенсивности от времени симметричен относительно
«центрального» максимума, номер которого равен
                   0 + 54
             m0 =          = 27                                                        (11)
                      2
и этому максимуму соответствует момент времени
             t0 = 486 .                                                                (12)
      Для дальнейших расчетов выберем 13 экстремумов (для ровного счета), примерно
симметричных относительно центрального максимума. Таблица 1.

Таблица 1.
                                                      2
                                                 sin     (t − t0 )
     m       tm       m − m0       t − t0             T               x m , мкм


XIX Международная Жаутыковская Олимпиада/Экспериментальный тур                                  с. 2/7

      1      118           -26     -368           -0,983        -4,16
      5      224           -22     -262           -0,834        -3,52
     10      302           -17     -184           -0,639        -2,72
     15      361           -12     -125           -0,454        -1,92
     20      414            -7      -72           -0,268        -1,12
     25      465            -2      -21           -0,079        -0,32
     27      486             0        0            0,000         0,00
     30      515             3       29            0,109         0,48
     35      567             8       81            0,300         1,28
     40      623            13      137            0,493         2,08
     45      684            18      198            0,679         2,88
     50      766            23      280            0,870         3,68
     53      855            26      369            0,984         4,16

Проведем следующие расчеты:
Номер экстремума относительно центра m = m − m0 ;
Временной сдвиг относительно центра t  = t − t0 ;
                                                                      0
Координаты зеркала при экстремумах интенсивности xm = m                   .
                                                                      4
      Для проверки применимости закона движения
                            2
            x (t ) = A sin     (t − t0 )                                                    (13)
                            T            
                                                          2
построим график зависимости координат x m от S = sin         (t − t0 ) . Следует отметить, что при
                                                          T            
выборе точек для построения графика следует:
- выбирать точки с максимальным диапазоном изменения координат;
- не включать крайние экстремумы, так как они могут не удовлетворять условию (6).
       Ниже приведен график этой зависимости.
                                                  5,00
                                                  4,00
                                                  3,00
                                                  2,00
                                                  1,00

                      Xm                          0,00
                            -1,5    -1,0   -0,5   -1,00 0,0     0,5            1,0   1,5

                                                  -2,00
                                                  -3,00
                                                  -4,00
                                                  -5,00
                                                          sin


      Линейность этого графика подтверждает применимость формулы (13) для описания закона
движения зеркала. Рассчитанные по методу наименьших квадратов параметры этой зависимости
имеют следующие численные значения:
            A = ( 4.23  0.01) мкм
                                    .                                               (14)
            b = ( 0.04  0.06 ) мкм
      Коэффициент наклона A является амплитудой колебаний зеркала. При это численное
значение параметра сдвига меньше его погрешности, поэтому можно принять, что b = 0 , а
анализируемая зависимость является прямо пропорциональной.


XIX Международная Жаутыковская Олимпиада/Экспериментальный тур                                  с. 3/7

                3. Монохроматическое излучение с неизвестной длиной волны
3.1 Из таблицы максимумов выберем симметричные точки (по сформулированным критериям)
Таблица 2.
 m         tm      xm              5,0
      1      138      -4,088        4,0
      5      240      -3,382
                                    3,0
     10      320      -2,476
     15      384      -1,586        2,0
     20      442      -0,698        1,0
     24      486       0,000
     28      529       0,682   Xm   0,0
     33      586       1,556               0   5   10   15   20   25   30   35   40   45   50
                                    -1,0
     38      653       2,489
                                    -2,0
     43      730       3,363
     47      830       4,071        -3,0
                                    -4,0
                                    -5,0

                                                                  m


3.2 Для каждого экстремума по формуле (13) рассчитаем значение координаты зеркала x m , после
чего построим график зависимости координаты зеркала от номера экстремума m . Эта зависимость
описывается функцией
                      
             xm = m       .                                                            (15)
                       4
      Полученный график подтверждает эту зависимость (сдвиг по оси номеров m в данном случае
роли не играет и обусловлен другой нумерацией экстремумов). Рассчитанный по МНК коэффициент
наклона графика равен
             a = ( 0,1771  0, 0008 ) мкм .
      Из вида функции (15) следует, что длина волны излучения равна
              = 4a = ( 0, 709  0, 003) мкм .                                         (16)
                                     4. Две монохроматические волны
4.1 Волны с разными длинами не интерферируют, в данном случае зарегистрированный сигнал
является суммой интенсивностей этих волн. Запишем с помощью формулы (3) явное выражение
зависимости суммарной интенсивности от координаты зеркала и преобразуем его (с помощью
тригонометрической формулы для суммы косинусов):
                                4               4
              U ( x) = 2 I1 cos    x + 2 I 2 cos    x=
                                1               2
                          4          4                        4
             = 2 I 0  cos     x + cos   x  + 2 ( I 2 − I1 ) cos    x=                 . (17)
                           1         2                        2
                          1 1               1 1                            4
             = 4 I1 cos  2  −  x  cos  2  +  x  + 2 ( I 2 − I1 ) cos    x
                           1 2             1 2                         2
      Полученная функция описывает модулированный сигнал, полученный экспериментально.
Формула слишком сложна, чтобы получить явные выражения для экстремумов данной функции.
Поэтому единственной возможностью для получения требуемых характеристик является анализ
огибающей быстропеременного сигнала. С точностью до постоянного слагаемого эта огибающая
описывается функцией


XIX Международная Жаутыковская Олимпиада/Экспериментальный тур                          с. 4/7

                              1 1                   2 
             U ( x) = U1 cos  2  −  x  = U1 cos    x,                          (18)
                               1 2                 
где обозначено
              1 1         1
                 −     = .                                                              (19)
              1 2 
Здесь  – пространственный период модуляции сигнала (см. рис. ниже).




      Огибающая функция (18) экстремальна при выполнении условия
                2        
                    xM = M ,                                                             (20)
                          2
где M = 0,  1,  2... – номер экстремума огибающей.
      В приведенном сигнале можно выделить 5 таких экстремумов, они также показаны на
рисунке. Из формулы (20) следует, что соответствующая координата зеркала определяется по
формуле
                       
               x M = (M − M 0 ) .                                                        (21)
                       4
Здесь M 0 – несущественный для дальнейшего анализа «начальный» номер, определяющий начало
отсчета номеров.
      По таблице экстремумов определим значения времен t M , при которых наблюдаются
экстремумы, затем по формуле (14) рассчитаем значения координат зеркала x M и построим график
зависимости xM (M ) . Эти значения приведены в таблице 3 и на графике.
Таблица 3.
                                              4,0
  M         tM         x M , мкм
                                              3,0
        1        292        -2,823
        2        397        -1,392            2,0
        3        486         0,000
                                              1,0
        4        577         1,422
        5        679         2,811       Xm   0,0
                                                     0   1       2   3   4   5   6
                                              -1,0

                                              -2,0

                                              -3,0

                                              -4,0
                                                                     M


XIX Международная Жаутыковская Олимпиада/Экспериментальный тур                                 с. 5/7

        Коэффициент наклона этого графика, рассчитанный по МНК, равен
             a = (1, 41  0, 01) мкм ,
а как следует из формулы (21) , пространственный период равен
               = ( 5, 64  0, 04 ) мкм .                                                      (22)
        Наконец, из формулы (19) рассчитаем два возможных значения длины волны 2 :
                                  −1
                        1 1
                  21 =  −  = 0, 722 мкм
                         1  
                                       −2
                                                                  .                            (23)
                          1 1    1 
                                                   2

                  21 =  −         =    = 0, 001 мкм
                          1        
                                    2



                                  −1
                        1 1
                  22 =  +  = 0,575 мкм
                         1                                                                 (24)
                     
                              2

             22 =  2   = 0, 001 мкм
                    
4.2 Для оценки интенсивности второй волны можно воспользоваться максимальным и минимальным
значениями модулирующей функции. Из формулы (17) следует, что
             U max  2(I 0 + I 1 )
                                   .                                                  (25)
             U max  2 I 0 − I 1
        Значения U max ,U min можно приближенно снять с графика (или из таблицы) U max  170 ,
                               U
U min  40 . Их отношение  = max  4,25 . С другой стороны, из формул (25) следует
                               U min
                    I +I         I 1− 
                = 1 2  1=               0, 62 .                                      (26)
                    I1 − I 2    I0 1 + 
То есть I 21 / I1  0, 62 .
                                            I 22
        Возможен и второй вариант:                1, 62 .
                                             I1
                                                                                За
                                                                                       баллы
             №                               Содержание                        часть
          1. Теоретическая часть
                                                                                1,0
          (не верные коэффициенты – формула не оценивается)
                                                                     
             1.1   формула (1) I = 2 I 0 (1 + cos  ) = 4 I 0 cos 2                    0,2
                                                                      2
                                                          4
             1.2   формула для сдвига фаз (2)  =             x                        0,2
                                                             
                                                                      2
                     формула для интенсивности (3) I = 4 I 0 cos 2         x            0,2
                                                                      
                                             
            1.3      формула (4) xm = m                                                 0,1
                                             2
                                          1 
                     формула (5) xm =  m +                                            0,1
                                          2 2
                                             
            1.4      формула (6) xm = m                                                 0,2
                                   4
          2. Монохроматическое излучение известной длины волны –
                                                                                8,0
          градуировка прибора


XIX Международная Жаутыковская Олимпиада/Экспериментальный тур                          с. 6/7

                Определение цены деления:
                - максимумы 0 и 54 – крайние положения зеркала – 0,4;
                - время движения – половина периода колебаний – 0,2;
         2.1    - расчет периода в отн. единицах T = 1668 - 0,1;                  1,0
                - расчет периода в секундах T = 50 мс - 0,1;
                - расчет цены деления t = 0,030 мс - 0,2
         2.2    Определение закона движения
                Использование найденного периода колебаний;                       0,5
                определение центральной точки:
                                         0 + 54
                - номер максимума m0 =          = 27 - 0,3;                       0,5
                                            2
                - время прохождения центральной точки t0 = 486 - 0,2;
                выбор точек:
                - использовано 10 и более точек 0,3 (5 и более -0,1);
                - не включены крайние - 0,2;                                      1,0
                - использован максимальный диапазон - 0,3;
                - точки примерно симметричны - 0,2;
                метод определения координат:
                                                                 
                - расстояние между соседними экстремумами -        - 0,5;
                                                                 4
                                                                                  1,0
                - перенумерация максимумов от среднего – 0,2;
                                                           0
                - формула для расчета координаты xm = m        - 0,3;
                                                            4
               расчет координат
               (проведен правильный расчет по всем выбранным                      1,0
               точкам допустимая погрешность расчета 10%)
               линеаризация зависимости:
                                         2
               - зависимость x от sin       (t − t0 ) - 0,4;                   1,0
                                         T            
               - проведен расчет синусов 0,6;
               построение графика:
               (оценивается, если оценены расчеты);
               - оси подписаны и оцифрованы – 0,1;
                                                                                  0,7
               - нанесены все точки в соответствии с таблицей 0,2;
               - получена линейная зависимость -0.2;
               - проведена сглаживающая прямая линия – 0,2;
               расчет амплитуды колебаний зеркала:
               использован МНК – 0,3 (графически, или усреднение по
               всем точкам – 0,2; по 2 точкам 0,1);
                                                                                  0,8
               (расчет проведен по числу экстремумов – 0,1);
               получено численное значение в диапазоне 4,2 – 4,3 мкм –
               0,5 (в диапазоне 4,0 – 4,5 мкм – 0,3; вне диапазона - 0);
               расчет погрешности амплитуды:
                - проведен по МНК -0,3 (иным разумным способом -0,2);             0,5
               - численное значение порядка 10 −2 мкм - 0,3;
       3. Монохроматическое излучение с неизвестной длиной волны            5,0
               Выбор точек:
               - использовано 10 и более точек 0,3 (5 и более -0,1);
          3.1  - не включены крайние - 0,2;                                       1,0
               - использован максимальный диапазон - 0,3;
               - точки примерно симметричны - 0,2;
               расчет координат экстремумов:                                      1,5


XIX Международная Жаутыковская Олимпиада/Экспериментальный тур                            с. 7/7

                - использование правильной формулы для координат –
                0,5;
                - проведен расчет координат экстремумов с
                погрешностью не более 10% - 1,0 ;
                построение графика:
                (оценивается, если оценены расчеты);
                - оси подписаны и оцифрованы – 0,1;
                                                                                    0,7
                - нанесены все точки в соответствии с таблицей 0,2;
                - получена линейная зависимость -0.2;
                - проведена сглаживающая прямая линия – 0,2;
                расчет длины волны:
                - использован МНК – 0,5 (усреднение по всем точкам –
                0,3 ; по 1-2 точкам – 0,2);
          3.2                                                                       1,3
                - получено численное значение в диапазоне 0,70 – 0,72
                мкм – 0,8 (в диапазоне 0,68 -0,74 мкм - 0,4, вне диапазона
                – 0);
                расчет погрешности длины волны:
                - использован МНК – 0,2 (иной разумный способ – 0,1);               0,5
                - получено значение порядка 10 −2 мкм - 0,3;
       4. Две монохроматические волны                                        6,0
          4.1   формула для суммарной интенсивности (17)                            0,5
                Анализ огибающей (расчеты по положению
                                                                                    0,5
                экстремумов не оцениваются);
                выбор точек экстремумов огибающей:
                                                                                    1,0
                - по 0,2 за каждый экстремум;
                                                1    1    1
                расчет длины волны формула         −   =                            0,3
                                                0 1 
                два решения для длины волны:
                Метод расчета по МНК (усреднение по всем точкам) –
                0,4 (по двум точкам – 0,2);
                Численные значения в диапазонах
                                                                                    1,6
                0,70 – 0,74 мкм; 0,56 -0,59 мкм – 2х0,6;
                В диапазонах
                (0, 67-0,77 мкм; 0,53 – 0,62 мкм – 2х0,3;)
                Вне диапазонов – 0;
                оценка погрешностей:
                формула для погрешности косвенных измерений
                        
                           2
                                                                                    0,5
                1 =  1   - 0,3;
                       
                Численные значения – 2х0,1;
                Формула для расчета отношения интенсивностей:
         4.2     I2 1 −                                                            0,3
                    =
                 I1 1 + 
                два решения для отношения интенсивностей
                                                                                    0,3
                (есть указание на два значения);
                расчет отношения интенсивностей, численные значения:
                в диапазонах 0,5 – 0,7; 1,5-1,7 – 2х0,5;
                                                                                    1,0
                (в диапазонах 0,4 – 0,8; 1,4 – 1,8 - 2х0,2)
                Вне диапазонов - 0
                ВСЕГО                                                        20,0


XIX Халықаралық Жаутыков Олимпиадасы/Эксперименттік тур                        с. 1/9

         ЭКСПЕРИМЕНТТІК ТУРДЫҢ ТАПСЫРМАЛАРЫНЫҢ ШЕШІМІ
                         Фурье-спектрометр
                                    1. Теориялық бөлім
1.1 Қарқындылығы бірдей екі толқын интерференияланғанда қортқы қарқындылық мына өрнекпен
анықталады

                                            .                                  (1)
1.2 Айналарды бастапқы орнынан х өлшемге ауыстырған кезде қашықтық айырмашылығы 2х
өлшемге өзгереді. Сонымен қатар екі толқын арасында фазалық айырмашылық

                       ,                                                                   (2)
сондықтан интенсивтіліктің координатқа тəуелділігі мына түрде болады

                         .                                                        (3)
1.3 Қарқындылық максимумы егер жол айырмасы толқын ұзындығының бүтін санына тең болса
байқалады,яғни.

                                ,                                                          (4)
ал қарқындылықтың минимумдары мына шартта пайда болады


                                              .                                    (5)
1.4 Айна толқын ұзындығының төрттен біріне ауысқанда қарқындылық максимумнан минимумға
(жəне керісінше) өзгереді. Сондықтан айнаның қажетті координаталары мына формуламен
сипатталады

                      .                                                            (6)
     2. Белгілі толқын ұзындығының монохроматикалық сəулеленуі – аспапты калибрлеу
2.1 Жоғарыдағы графиктен айнаның шеткі жағдайларына мына уақыт мəндеріне сəйкес келетіні
шығады
                                .                                                          (7)
      Бұл ығысу айнаның тербеліс периодының жартысында орын алады, сондықтан
                                   .                                                       (8)
      Екінші жағынан, тербеліс периодын берілген айна тербеліс жиілігі                  арқылы
көрсетуге болады

                                       .                                                 (9)
        (8) жəне (9) өрнектерін теңестіре отырып, біз уақыт шкаласының бағасының мынаған тең
екенін табамыз.


                                       .
      (10)
2.2 Қарқындылықтың уақытқа тəуелділігінің жоғарыдағы графигі «орталық» максимумға қатысты
симметриялы, оның номері мынаған тең


XIX Халықаралық Жаутыков Олимпиадасы/Эксперименттік тур                         с. 2/9




      (11)
жəне бұл максимум мынадай уақытқа сəйкес келеді
                     .
      (12)
        Əрі қарай есептеулер үшін орталық максимумға қатысты шамамен симметриялы 13
экстремумды (жақсы өлшем үшін) таңдаймыз. 1-кесте.

1-кесте.


                                                        , мкм
        1     118        -26     -368          -0,983    -4,16
        5     224        -22     -262          -0,834    -3,52
       10     302        -17     -184          -0,639    -2,72
       15     361        -12     -125          -0,454    -1,92
       20     414         -7      -72          -0,268    -1,12
       25     465         -2      -21          -0,079    -0,32
       27     486          0        0           0,000     0,00
       30     515          3       29           0,109     0,48
       35     567          8       81           0,300     1,28
       40     623         13      137           0,493     2,08
       45     684         18      198           0,679     2,88
       50     766         23      280           0,870     3,68
       53     855         26      369           0,984     4,16

Келесі есептеулерді орындайық:
Орталыққа қатысты экстремум саны               ;
Орталықтан уақыт бойынша ауытқу            ;


Қарқындылықтың экстремумындағы айна координаттары                .
     Қозғалыс заңының



       (13)


қолданылуын тексеру үшін координаттардың тəуелділігін сызу       от                  . Айта кету
керек, сызу үшін нүктелерді таңдаған кезде мыналар қажет:
- координаталарының максималды диапазоны бар нүктелерді таңдаңыз;
- шеткі экстремумдарды қоспаңыз, себебі олар (6) шартты қанағаттандырмауы мүмкін.
       Төменде осы қатынастың графигі берілген.


XIX Халықаралық Жаутыков Олимпиадасы/Эксперименттік тур                       с. 3/9




       Бұл графиктің сызықтылығы айна қозғалысы заңын сипаттау үшін (13) формуланың
қолданылуын растайды. Ең кіші квадраттар əдісімен есептелетін бұл тəуелділіктің параметрлері
келесі сандық мəндерге ие:


                                       .
      (14)
       Көлбеу коэффициенті А– айна тербеліс амплитудасы. Ығысу параметрінің сандық мəні оның
қателігінен аз болған кезде,        сондықтан талданатын тəуелділік тура пропорционалды деп
болжауға болады.
                    3. Толқын ұзындығы белгісіз монохроматикалық сəулелену
3.1 Максимумдар кестесінен біз симметриялы нүктелерді таңдаймыз (тұжырымдалған критерийлерге
сəйкес). 2-кесте.



       1      138     -4,088
       5      240     -3,382
      10      320     -2,476
      15      384     -1,586
      20      442     -0,698
      24      486      0,000
      28      529      0,682
      33      586      1,556
      38      653      2,489
      43      730      3,363
      47      830      4,071




3.2       Əрбір                                                              экстремум үшін
(13) формуланы                                                               қолданып, айна
координатының                                                                мəнін
есептейміз    , содан кейін айна координатының    экстремум санына тəуелділігін сызамыз. Бұл
тəуелділік мына функция арқылы сипатталады


XIX Халықаралық Жаутыков Олимпиадасы/Эксперименттік тур                          с. 4/9



                       .
      (15)
      Алынған график бұл тəуелділікті растайды (бұл жағдайда сандар осі бойынша жылжу рөл
атқармайды жəне ол экстремумдардың басқа нөмірленуіне байланысты). Ең кіші квадраттармен
есептелген графиктің көлбеу коэффициенті мынаған тең

                                     .
      Функцияның (15) түрінен сəулелену толқын ұзындығының мынаған тең болатыны шығады

                                        .
      (16)
                            4. Екі монохроматикалық толқындар
4.1 Əртүрлі ұзындықтағы толқындар кедергі жасамайды, бұл жағдайда жазылған сигнал осы
толқындардың қарқындылығының қосындысы болып табылады. (3) формуланы пайдаланып, толық
қарқындылықтың айна координатасына тəуелділігі үшін айқын өрнек жазамыз жəне оны
түрлендіреміз (косинустардың қосындысының тригонометриялық формуласын пайдалана отырып):




                                                                          .
      (17)
            Алынған функция тəжірибелік жолмен алынған модуляцияланған сигналды
      сипаттайды. Бұл функцияның экстремумдары үшін айқын өрнектерді алу үшін формула тым
      күрделі. Сондықтан қажетті сипаттамаларды алудың бірден-бір жолы - тез өзгеретін сигналды
      жуықтап сыза отырып талдау. Тұрақты мүшеге дейін бұл жуықтау мына функция арқылы
      сипатталады


                                                       ,
      (18)
мұндағы


                        .
      (19)
Ал    – сигнал модуляциясының кеңістіктік периоды (төмендегі суретті қараңыз).


XIX Халықаралық Жаутыков Олимпиадасы/Эксперименттік тур                         с. 5/9




      Жуық функция (18) мына шарт орындалғанда экстремальді

                           ,
      (20)
мұндағы                 –экстремума номері.
       Жоғарыдағы сигналда осындай 5 экстремалды ажыратуға болады, олар да суретте көрсетілген.
(20) формуладан айнаның сəйкес координатасы формула бойынша анықталатыны шығады

                                 .
      (21)
Мұндағы         – «бастапқы» сан, əрі қарай талдау үшін елеусіз, ол сандарды санаудың басталуын
анықтайды.
       Экстремумдар кестесін пайдалана отырып, экстремумдардың байқалатын уақыттарын
анықтаймыз, содан кейін (14) формуланы пайдаланып, айна координаттарының мəндерін есептеп,
тəуелділікті сызамыз. Бұл мəндер 3-кестеде жəне графикте көрсетілген.
3-кесте.



                        , мкм
        1      292      -2,823
        2      397      -1,392
        3      486       0,000
        4      577       1,422
        5      679       2,811




      Бұл графиктің ең кіші квадраттармен есептелген көлбеу коэффициенті тең


XIX Халықаралық Жаутыков Олимпиадасы/Эксперименттік тур                            с. 6/9


                                  ,
жəне (21) формуладан келесідей, кеңістіктік периодын аламыз
                                   .
       (22)
       Соңында (19) формуладан     толқын ұзындығының екі мүмкін мəнін есептейміз:




                                                         .
       (23)




       (24)
4.2 Екінші толқынның қарқындылығын бағалау үшін модуляциялау функциясының максималды жəне
минималды мəндерін пайдалануға болады. (17) формуладан былай шығады


                               .
       (25)
                 мəндерін жуықтап графиктен (болмаса кестеден) анықтауға болады              ,


          . Олардың қатынасы                   . Екінші жағынан (25) өрнектен мынау шығады


                                               .
       (26)
Яғни              .


       Мынадай нұсқа да мүмкін:            .
                                                                            За       балл
           №                       Содержание                              часть      ы
        1. Теориялық бөлім
                                                                            1,0
        (коэффициенттер дұрыс болмаса өрнекткер бағаланбайды)

          1.1                                                                         0,2
                Өрнек (1)

          1.2                                                                         0,2
                Фазалық ығысу өрнегі (2)

                                                                                      0,2
                Қарқындылық өрнегі (3)


XIX Халықаралық Жаутыков Олимпиадасы/Эксперименттік тур                      с. 7/9


         1.3                                                                    0,1
               Өрнек (4)

                                                                                0,1
               Өрнек (5)

         1.4                                                                    0,2
                Өрнек (6)
       2. Белгілі толқын ұзындығының монохроматикалық
                                                                       8,0
       сəулеленуі – аспапты калибрлеу
                Бөлік құнын анықтау:
                - максимумдар 0 жəне 54 – айнаның шеткі күйі – 0,4;
                - қозғалу уақыты – жарты период – 0,2;
          2.1   - периодты салыстр бірлікте өлшеу          - 0,1;               1,0
               - периодты секундпен өлшеу            - 0,1;
               - бөлік құнын есептеу             - 0,2
         2.2   Қозғалыс заңын анықтау
               Табылған тербеліс периодын пайдалану;                            0,5
               Орталық нүктені анықтау:

               - максимум номері                  - 0,3;                        0,5

               - орталық нүктені өту уақыты             - 0,2;
               Нүктелерді таңдау:
               - 10 жəне одан көп нүкте пайдаланылған 0,3 (5 и более
               -0,1);
                                                                                1,0
               - шеткілері ескерілмеген - 0,2;
               - максималь диапазон пайдаланылған - 0,3;
               - нүктелер шамамен симметриялы - 0,2;
               Координатты анықтау əдісі:

               - көрші экстремумдардың ара қашықтығы -      - 0,5;
                                                                                1,0
               - максимумдарды орталықтан қайта белгілеу – 0,2;

               - координатты есептейтін өрнек              - 0,3;
               Координатты есептеу
               (барлық таңдалған нүктелер үшін дұрыс есептеу                    1,0
               жүргізілді, рұқсат етілген есептеу қатесі 10%)
               Тəуелділікті линеаризациялау:

                                                                                1,0
               -    тің                -тан тəуелділігі - 0,4;
               - синустар есептелген 0,6;
               График тұрғызу:
               (есептеулер бағаланса, бағаланады);
               - осьтерге белгіленген жəне цифрланған – 0,1;
                                                                                0,7
               - барлық нүктелер кестеге сəйкес сызылады 0,2;
               - сызықтық тəуелділік алынады -0.2;
               - түзу сызықты тегістеу – 0,2;
               айна тербелістерінің амплитудасын есептеу:                       0,8


XIX Халықаралық Жаутыков Олимпиадасы/Эксперименттік тур                       с. 8/9

               Ең кіші квадраттар əдісі пайдаланылған – 0,3
               (графикалық түрде немесе барлық нүктелер бойынша
               орташалау – 0,2; 2 нүктелермен 0,1);
               (есептеу экстремумдар санына сəйкес жүргізілді – 0,1);
               диапазондағы сандық мəнді алды 4,2 – 4,3 мкм – 0,5 (
               диапазонда4,0 – 4,5 мкм – 0,3; диапазоннан тыс - 0);
               амплитуда қатесін есептеу:
                - МНК бойынша-0,3 (басқа əдіспен -0,2);                          0,5
               - сандық мəні шамамен            - 0,3;
       3. Толқын ұзындығы белгісіз монохроматикалық сəулелену           5,0
               Нүктелерді таңдау:
               - 10 жəне одан көп нүкте пайдаланылған 0,3 (5 жəне көп
               -0,1);
          3.1                                                                    1,0
               - шеткілері ескерілмеген - 0,2;
               - максималь диапазон пайдаланылған - 0,3;
               - нүктелер шамамен симметриялы - 0,2;
               Экстремумдар координатын анықтау:
               - координат үшін дұрыс формула – 0,5;
                                                                                 1,5
               - экстремумдар координатының қателігі 10% тан үлкен
               емес- 1,0 ;
               График тұрғызу:
               (есептеулер бағаланса, бағаланады);
               - осьтерге белгіленген жəне цифрланған – 0,1;
                                                                                 0,7
               - барлық нүктелер кестеге сəйкес сызылады 0,2;
               - сызықтық тəуелділік алынады -0.2;
               - түзу сызықты тегістеу – 0,2;
               Толқын ұзындығын есептеу:
               - МНК пайдаланылған – 0,5 (барлық нүктелер бойынша –
               0,3 ; 1-2 нүкелер – 0,2);
          3.2                                                                    1,3
               - сандық мəн мына диапозонда алынған 0,70 – 0,72 мкм –
               0,8 (мына диапозонда 0,68 -0,74 мкм - 0,4, диапазоннан
               тыс – 0);
               Толқын ұзындығының қателігін есептеу:
               - МНК пайдаланылған – 0,2 (басқа əдіс – 0,1);                     0,5
                - алынған мəн шамамен         - 0,3;
       4. Екі монохромат толқындар                                      6,0
          4.1   Қортынды қарқындылықтың өрнегі (17)                              0,5
                Жуықтауды талдау (экстремумдардың орнын анықтау
                                                                                 0,5
                бағаланбайды);
                Жуықтаудың экстремум нүктелерін таңдау:
                                                                                 1,0
                - əрбір экстремум үшін 0,2 ;

                                                                                 0,3
               Толқын ұзындығының өрнегі
               Толқын ұзындығы үшін екі шешім:
               МНК бойынша есептеу (барлық нүктелер ескерілген) –
               0,4 (екі нүкте – 0,2);
               Сандық мəні мына диапозонда
                                                                                 1,6
               0,70 – 0,74 мкм; 0,56 -0,59 мкм – 2х0,6;
               Мына диапозонда
               (0, 67-0,77 мкм; 0,53 – 0,62 мкм – 2х0,3;)
               Диапозоннан тыс – 0;


XIX Халықаралық Жаутыков Олимпиадасы/Эксперименттік тур                         с. 9/9

               Қателерді есептеу:

                                                                                   0,5
               Жанама өлшемдердің қателіктері                   - 0,3;
               Сандық мəн – 2х0,1;
               Қарқындылықтың қатынасын есептейтін өрнек:
         4.2                                                                       0,3

               Қарқындылық қатынасы үшін екі шешім
                                                                                   0,3
               (екі шешімге нұсқау бар);
               Қарқындылықтың қатынасының сандық мəні:
               Мына диапозонда 0,5 – 0,7; 1,5-1,7 – 2х0,5;
                                                                                   1,0
               (мына диапозонда 0,4 – 0,8; 1,4 – 1,8 - 2х0,2)
               Диапозоннан тыс - 0
               БАРЛЫҒЫ                                                   20,0
