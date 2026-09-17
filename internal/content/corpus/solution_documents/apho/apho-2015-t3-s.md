---
id: solution-document-apho-2015-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2015/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2015-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2015/T3_S.pdf."
---

Solution for Question 3


     Figure 1 shows a Fabry-Perot (F-P) etalon, in which air pressure is tunable. The F-P etalon
consists of two glass plates with high-reflectivity inner surfaces. The two plates form a cavity in
which light can be reflected back and forth. The outer surfaces of the plates are generally not
parallel to the inner ones and do not affect the back-and-forth reflection. The air density in the
etalon can be controlled. Light from a Sodium lamp is collimated by the lens L1 and then passes

through the F-P etalon. The transmitivity of the etalon is given by T                      1           , where
                                                                                   1  F sin 2 (G / 2)

      4 R , R is the reflectivity of the inner surfaces,             4Snt cosT
F                                                        G                            is the phase shift of two
     1 R
          2
                                                                           O

neighboring rays, n is the refractive index of the gas, t is the spacing of inner surfaces, T is the
incident angle, and O is the light wavelength.

                                                           Gas in
                                             Pin valve

                                                                    t o vacuum pump


                                                   n
                                                                                           Microscope


               N

           B

               S
                                                                                 Fringes
                                                       T
                                                                      L2
                                                   t

            Na Lamp         L1     F1         F-P Etalon


                                               Figure 1

     The Sodium lamp emits D1 ( O 589.6nm ) and D2 ( 589nm ) spectral lines and is located
in a tunable uniform magnetic field. For simplicity, an optical filter F1 is assumed to only allow
the D1 line to pass through. The D1 line is then collimated to the F-P etalon by the lens L1.
Circular interference fringes will be present on the focal plane of the lens L2 with a focal length
f=30cm. Different fringes have the different incident angle T . A microscope is used to observe
the fringes. We take the reflectivity R= 90% and the inner-surface spacing t=1cm.

Some useful constants : h   6.626 u 1034 J  s , e 1.6 u 1019 C , me     9.1 u 10 31 kg , c   3.0 u 108 ms 1 .




                                                                                                        Page 1 of 10
                                                Solution for Question 3
（a） （3points） The D1 line ( O                    589.6nm ) is collimated to the F-P etalon. For the vacuum

case (n=1.0), please calculate (i) interference orders mi , (ii) incidence angle T i and (iii)

diameter Di for the first three（i=1，2，3）fringes from the center of the ring patterns on the focal

plane.

   Solution：
   The transmittivity of the F-P etalon is given by：
                                1
                     T
                                        G
                          1  F sin 2
                                        2
   For bright fringes, we have
                                            G
                     T    1 i.e. sin 2          0
                                            2
                     G
                          mS
                     2
                     2nt cosT
                      mO
   For n=1.0，t=1cm， O 589.6nm ，thus:

                     mi          mi
     cos T i                                                  (a1)（1 point if Eqs. (a2-a3) are not correct.）
                    2nt O      33921.3
   Because of cosT d 1 ，so the orders of the first three fringes are:

               m1    33921, m2          33920, m3     33919          (a2)（1 point）

   The incident angles of the first three fringes are：

                         T1 0.2410 ,T 2         0.5020 ,T3    0.6670      (a3)（1 point）

   The fringe diameter is given by：

                         Di    2 f tan T i | 2 fT i                (a4)（0.5 point if Eq(a5) is not correct.）

   For the focal length f=30cm，thus:

                          D1    2.52mm, D2          5.26mm, D3       6.99mm (a5)（1 point）




                                                                                                Page 2 of 10
                                             Solution for Question 3
（b）（3 points） As shown in Fig. 2, the width H of the spectral line is defined as the full width
of half maximum (FWHM) of light transmitivity T regarding the phase shift G . The resolution of
the F-P etalon is defined as follows: for two wavelengths O and O  'O , when the central
phase difference 'G of both spectral lines is larger than H , they are thought to be resolvable;
then the etalon resolution is O / 'O when 'G H . For the vacuum case, the D1 line
( O 589.6nm ), and because of the incident angle T | 0 , take cosT | 1.0 , please calculate：
（i）the width H of the spectral line.

（ii）the resolution O 'O of the etalon.

                               T


                                                    O       O+'O
                          1




                                                        H
                         0.5




                                                                                 G
                                                    2mS

                                                        Figure 2


   Solution：
   The half maximum occurs at：
                                   H
               G     2mS r             (b1)（0.2 point if Eq.(b3) is wrong.）
                                   2
   Given that T        0.5 ，thus：
                           G
                   F sin 2   1 (b2)（0.2 point if Eq.(b3) is wrong.）
                           2
           4       2(1  R)            2(1  0.9)
    H                                                   0.21 rad (or 12.03degree) (b3)（1 point）
           F           R                   0 .9
   The phase shift G is given by:
                         4Snt cosT
                G
                               O
   For a small 'O , thus：
                               4Snt cosT
                    'G       'O （b4） (1 point if Eq. (b5) is wrong.）
                        O2
   For 'G      H and O 589.6nm ，we get：
    O      Snt F cosT              3.14 u 1.0 u 1.0 u 10 2 u 360 u 1.0
                                                                          1.01u106 (b5) (2 points）
    'O         O                               589.6 u 10 9
        （1.5 point if the final value of Eq. (b5) is wrong.）                               Page 3 of 10
                                       Solution for Question 3
（c）（1 point） As shown in Fig. 1, the initial air pressure is zero. By slowly tuning the pin valve,
air is gradually injected into the F-P etalon and finally the air pressure reaches the standard
atmospheric pressure. On the same time, ten new fringes are observed to produce from the center
of the ring patterns on the focal plane. Based on this phenomenon, calculate the refractive index of

air nair at the standard atmospheric pressure.


   Solution：
   From Question (a), we know that the order of the 1st fringe near the center of ring patterns is m=33921
   at the vacuum case (n=1.0). When the air pressure reaches the standard atmospheric pressure, the order
   of the 1st fringe becomes m+10, so we have:

           m  10    33931
    nair                   1.00029 . (c1)（1 point）
           2t O      33921
   （0.2 point for appearing the term of (m+10) when the final value of Eq.(c1) is wrong.
     Or
     0.8 point for the correct final expression (including other correct forms) without the correct
   value.）




                                                                                        Page 4 of 10
                                                 Solution for Question 3
（d） (2 points) Energy levels splitting of Sodium atoms occurs when they are placed in a

magnetic field. This is called as the Zeeman effect. The energy shift given by 'E                m j gk PB B ，
where the quantum number mj can be J，J-1，…，-J+1，-J，J is the total angular quantum number,

                                he
gk is the Landé factor, P B         is Bohr magneton，h is the Plank constant，e is the electron
                               4Sme

charge，me is the electron mass, B is the magnetic field. As shown in Fig. 3, the D1 spectral line is

                                                                                                       1
emitted when Sodium atoms jump from the energy level 2P1/2 down to 2S1/2. We have J                      for
                                                                                                       2
both 2P1/2 and 2S1/2 . Therefore, in the magnetic field, each energy level will be split into two levels.
We define the energy gap of two splitting levels as 'E1 for 2P1/2 and 'E2 for 2S1/2 respectively ('E1
<'E2). As a result, the D1 line is split into 4 spectral lines (a, b, c, and d), as showed in Fig. 3.
Please write down the expression of the frequency (Q ) of four lines a, b, c, and d.

                                                                             mj
                               2
                                P 1 /2                                       1/2
                                                                            -1 /2   'E 1




                                     58 9.6 nm




                                                                             1/2
                                                               a b
                               2
                                S 1 /2                                              'E 2
                                                                            -1/2
                                                                     c d

                                                         Figure 3


Solution：

The frequency of D1 line (2P1/2 to 2S1/2) is given by：Q 0             c/O O           589.6nm

When magnetic field B is applied，the frequency of the line a,b,c,d are expressed as:
                                                                                      1
1) 2P1/2 (mj=-1/2) → 2S1/2 (mj =1/2): frequency of (a）)：Q a                 Q0          'E1  'E2 ；（0.5 point）
                                                                                      2h
                                                                                1
                                                  ：Q b
2) 2P1/2 (mj=1/2) → 2S1/2 (mj=1/2): frequency of（b）                        Q0      'E2  'E1 ；（0.5 point）
                                                                               2h
                                                                                  1
3) 2P1/2 (mj=-1/2) → 2S1/2 (mj=-1/2): frequency of（c）：Q c                  Q0       'E2  'E1 ；（0.5 point）
                                                                                 2h
                                                                                 1
                                                   ：Q d
4) 2P1/2 (mj=1/2) → 2S1/2 (mj=-1/2): frequency of（d）                       Q0       'E1  'E2 ；（0.5 point）
                                                                                2h
（The results maybe have other correct forms.
But, 0.4 point for each result without the coefficient of 1 / 2 .）
                                                                                                   Page 5 of 10
                                                 Solution for Question 3
(e) (3 points) As shown in Fig. 4, when the magnetic field is turned on, each fringe of the D1 line
will split into four sub-fringes (1, 2, 3, and 4). The diameter of the four sub-fringes near the center

is measured as D1 ，D2 ，D3 ，and D4 . Please give the expression of the splitting energy gap 'E1

of 2P1/2 and 'E2 of 2S1/2.
                                          m-1              m                      m     m-1

                                                                                                  B=0




                                                                     D4
                                                                     D2
                                                           3 1                1    3

                                                                                                  Bz0

                                                       4       2                  2 4
                                                                      D1
                                                                      D3

                                                                   Figure 4


                                                T m2
  Solution： T m  1, cosT m              1           ，                            (e1)（0.2point if Eq. (e4) is wrong.）
                                                 2

                                                       T m2          mO
                  2nt cos T m          mO ， 1                           ， (e2)（0.2point if Eq. (e4) is wrong.）
                                                           2         2nt

           O o O  'O ,T m o T m' ，

                T m'2      m O  'O
          1                        ，
                 2            2nt

           T m2  T m'2      m'O
                                                                                  (e3)（0.2point if Eq. (e4) is wrong.）
                2            2nt

                                  Dm2  Dm' 2          m'O             'O
           2 fT m         Dm ，
                                    8f 2               2nt                O

                          Dm2  Dm'2
           'O        O                                                            (e4)（1 point）
                            8f 2

  The lines a, b, c, and d correspond to sub-fringe 1, 2, 3, and 4. From Question (d), we have.

  The wavelength difference of the spectral line a and b is given by:

              D22  D12
   'O1    O
                8f 2                                                                                             Page 6 of 10
                                               Solution for Question 3


'E1     h(Q b Q a ) , 'E2            h(Q d Q b )

or 'E1       h Q d  Q c , 'E2            h Q c Q a          (e5)

（0.5 point for each subequation in Eq (e5) if Eqs. (e6) and (e7) are totally wrong.）

The wavelength difference of the spectral line a and b is given by:

            D22  D12
'O1    O
              8f 2

Then we obtain

                        hc       D22  D12     hc        D22  D12
'E1     h'Q 1               x                       x
                        O          8f 2         O          8f 2

                                 D42  D32
                                 hc                      hc  D42  D32
（or 'E1         h'Q 1         x                           x           ） (e6)（1 point）
                              O    8f 2                  O     8f 2

Similarly, for 'E2，we get

            D42  D22
'O2     O
              8f 2

                            D42  D22
                             hc                          hc   D42  D22
'E2        h'Q 2         x                                 x
                         O    8f 2                        O     8f 2

                                 D32  D12
                                 hc                      hc  D32  D12
（or 'E1         h'Q 1         x                           x           ） (e7)（1 point）
                              O    8f 2                  O     8f 2

(Eqs (e6 and e7) have other correct forms which should be in terms of D1 ， D2 ， D3 ，and D4 )

(2.5 points for the final expressions only with the incorrect coefficients. )




                                                                                         Page 7 of 10
                                                Solution for Question 3
（f）（3 points）For the magnetic field B=0.1T，the diameter of four sub-fringes is measured as：

    D1     3.88mm ，D2             4.05mm ，D3           4.35mm ，and D4                 4.51mm . Please calculate the

   Landé factor gk1 of 2P1/2 and gk2 of 2S1/2.



 Solution：
  Given that B=0.1T，so we have:

              heB        6.626 u 1034 u 0.1
   PB B                                                5.79 u 10 6 eV (f1)（0.2point if Eq. (f4) is wrong.）
             4Sme       4 u 3.14 u 9.1 u 10 31

                        hc       D22  D12
  'E1      g k 1P b B        x             ； (f2)
                        O          8f 2

                                     hc        D42  D32
         （or, 'E1       g k 1P b B         x             ）（0.5point if Eq. (f4) is wrong.）
                                      O          8f 2
 For the D1 spectral line， O          589.6nm ，so we can get:

           hc       6.626 u 1034 u 3 u 108
                                                        2.11eV ， (f3)（0.2point if Eq. (f4) is wrong.）
            O      5.896 u 10 7 u 1.6 u 1019
          thus：
                                                                          2                     2
             2.11       D2  D2              2.11        4.05 u 10 3  3.88 u 10 3
  g k1              6
                       x 2 2 1                      6
                                                       x                                             0.68 ；
          5.79 u 10      8f               5.79 u 10              8 u 0.3 u 0.3
                                                                                                                  （1.5 points）
                                                                                  2                      2
                   2.11        D42  D32            2.11        4.51 u 10 3  4.35 u 10 3
 （or g k1                    x                                x                                               0.72 ）
                5.79 u 10 6     8f 2            5.79 u 10 6           8 u 0.3 u 0.3


 Similarly, we get:
                                                                      2                     2
             2.11       D2  D2           2.11        4.51 u 10 3  4.05 u 10 3
  gk 2              6
                       x 4 2 2                   6
                                                    x                                               1.99 （1.5 points）
          5.79 u 10      8f            5.79 u 10              8 u 0.3 u 0.3

                                                                              2                      2
                    2.11        D32  D12          2.11        4.35 u 10 3  3.88 u 10 3
 （or g k 2                    x                              x                                               1.95 ）
                 5.79 u 10 6     8f 2          5.79 u 10 6           8 u 0.3 u 0.3

            (2 points for the correct final expressions if the final values are wrong.)


            （*Comment：the theory value of g k 1 and g k 2 is 2/3 and 2）



                                                                                                                Page 8 of 10
                                                 Solution for Question 3
（g） (2 points) The magnetic field on the sun can be determined by measuring the Zeeman effect
of the Sodium D1 line on some special regions of the sun. One observes that, in the four split lines,
the wavelength difference between the shortest and longest wavelength is 0.012nm by a solar
spectrograph. What is the magnetic field B in this region of the sun?



 Solution：

 We have 'E1           g k1P B B and 'E2            gk 2 PB B ;

 The line a has the longest wavelength and the line d has the shortest wavelength line. The energy

 difference of the line a and d is

                 'E      'E1  'E2             g k1  g k 2 P B B . (g1)（0.5point if Eq. (g3) is wrong.））

                             c'O          c'O
                 'Q                                                 (g2)（0.5 point）
                             O    2
                                          O2
                          g k1  g k 2 P B B
                 'Q                                                 （g3）（0.5 point）
                                 h
                           he
                  PB
                          4Sme
 So the magnetic field B is given by:
                4Sme 'Oc
        B
              O2 g k1  g k 2 e
            4 u 3.14 u 9.1 u 10 31 u 0.012 u 10 9 u 3 u 108
                                      2
                                                                T
                  589.6 u 10 9 u 2.67 u 1.6 u 10 19
                                                                     (g4)（1 point）

            0.2772T
            2772.1Gauss
        （0.5 point if the first line in Eq (g4) is correct.）




                                                                                                  Page 9 of 10
                                             Solution for Question 3
(h)（3 points） A Light- Emitting Diode (LED) source with a central wavelength O 650nm
and spectral width 'O 20nm is normally incident ( T 0 ) into the F-P etalon shown in Fig. 1.
For the vacuum case, find (i) the number of lines in transmitted spectrum and (ii) the frequency
width 'Q of each line？


 Solution：
 The wavelength of transmitted spectral lines is given by:

          2nt     mOm          (h1)（0.5 point if Eq. (h2) is wrong.）

                  c
          Qm
                  Om
               mc
          Qm
               2nt
                  c
          'Q m                  1.5 u 1010 Hz     (h2)（1 point）
                2nt
 The frequency width of the input LED is：
                          c'O
          'Q s     
                          O2                                   (h3)
              3 u 10 u 20 u 10
                      8               9

                               2
                                           1.42 u 1013 Hz
                  650 u 10  9
      （0.5point if the first line in Eq. (h3) is correct.）

 So we have the number of transmitted spectral line：
                 'Q s
          N
                 'Q m                               (h4)（1 point）
              1.42 u 10   13

                                946
              1.5 u 1010
      （0.5point if the first line in Eq. (h4) is correct.）


                                                                      O2
 The spectral width of transmitted spectral line is 'O                     , then we have
                                                                Snt F

                  c
         'Q
              Snt F                                               (h5)（1 point）
                       3 u 108
                                                   5.0 u 108 Hz
           3.14 u 1.0 u 10 u 10  3 u 360
      （0.5point if the first line in Eq. (h5) is correct.）



                                                                                            Page 10 of 10
