---
id: inpho-2024-a6
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2024-a6
solution_type: official
source_document: solution-document-inpho-2024-s
source_pdf: cache/phoxiv/inpho/2024_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2024_S.pdf."
---

6. Sonic Sleuth
During her summer vacation, Dheera decides to carry out a smartphone based experiment. She
utilizes a smartphone’s frequency sensor that can measure the frequency of the audio signal it
receives. She takes a long cylindrical tube closed at one end. This tube has a length of L = 30.0cm
and an inner diameter of d = 2.45cm. Dheera starts ﬁlling the tube with water, which is dripping
from a tap at a constant rate Q (measured in milliliters per second (mL/s)).
Dheera positions her smartphone near the open end of the tube to measure the frequency of the
sound emitted as water ﬁlls the tube. An app on the phone captures a range of frequencies in the
recorded audio at any given time. At randomly chosen values of time t, one of the frequencies at
that time is shown in the following table.
Time t (s) Frequency f (Hz) Time t (s) Frequency f (Hz)
5.0 915 36.0 434
7.6 320 39.6 481
16.2 345 41.9 500
16.7 1008 42.5 1454
20.9 360 51.1 1618
25.7 1148 51.6 574
28.9 1196 56.1 1782
31.5 410 60.2 680
33.3 1290 66.3 820
Help her to analyse the experiment.
(a) [3 marks] Derive the expression for the velocity of sound cs in terms of f,t, and constants.
Solution: The frequency of the sound in the tube is determined by the formula:
f =
ncs
4(h + 0.3d)
(6.1)
Here, h and d represent the length of the air column and the diameter of the tube,
respectively. The variable n is an odd integer representing the fundamental, third, ﬁfth
harmonics, and so on. The speed of sound is denoted by cs, and the term 0.3d in the
denominator accounts for the end correction in the tube.
When water falls at a constant rate (Q), it creates the disturbances in the air column of
the tube. These disturbances travel as sound waves through the air column, which we
detect and analyze. If the length of the tube is L, the equation (6.1) can be modiﬁed as:
cs =
f4(L − (Q
A)t) + 0.3d)
n
(6.2)
Here, A = πd2/4 represents the area of the base, and n is an odd integer representing the
fundamental, third, ﬁfth harmonics, and so on.
H B C S E
Page 21 INPhO 2024 Questions
(b) [8 marks] Choose a pair of suitable variables and plot a linear graph. Specify the axis labels.
Obtain the speed of sound cs and the rate Q from this plot.
Solution: Since the height of the water level varies linearly with time, we expect the
frequency of the sound to increase with time. By linearizing the equation (6.1), we get:
f =
ncs
4(L − (Q
A)t) + 0.3d)
(6.3)
1
f
= −
4(Q
A)t
ncs
+
4(L + 0.3d)
ncs
(6.4)
Plotting the relationship between 1/f and t will yield a linear graph. The values for the
plot are as follows.
Fundamental 3rd Harmonic
Time(s) Frequency(Hz) 1/f (s) Time(s) Frequency(Hz) 1/f (s)
7.6 320 0.00313 5 915 0.00109
16.2 345 0.00290 16.7 1008 0.00099
20.9 360 0.00278 25.7 1148 0.00087
31.5 410 0.00244 28.9 1196 0.00084
36 434 0.00230 33.3 1290 0.00078
39.6 481 0.00208 42.5 1454 0.00069
41.9 500 0.00200 51.1 1618 0.00062
51.6 574 0.00174 56.1 1782 0.00056
60.2 680 0.00147
66.3 820 0.00122
The presence of two distinct straight lines in the graph indicates the existence of two
harmonic frequencies in the dataset. Upon examining the ratio of these frequencies, it
becomes evident that these two lines correspond to n = 1 and n = 3. The intercept and
slope of the graph can be used to determine the speed of sound and the rate of water
ﬁlling, respectively.
H B C S E
Page 22 INPhO 2024 Questions Last four digits of Roll No.:
Fundamental 3rd Harmonic
Slope −2.84 × 10−5 −1.12 × 10−5
Intercept 3.42 × 10−3 1.12 × 10−3
Cs 359 m/s 366 m/s
Q 1.20 mL/s 1.24 mL/s
**** END OF THE QUESTION PAPER ****
H B C S E
Page 23 INPhO 2024 Questions
Space for rough work — will NOT be submitted for evaluation
