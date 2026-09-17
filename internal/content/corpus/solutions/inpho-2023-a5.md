---
id: inpho-2023-a5
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2023-a5
solution_type: official
source_document: solution-document-inpho-2023-s
source_pdf: cache/phoxiv/inpho/2023_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2023_S.pdf."
---

5. If Prof. Snell had a smartphone
A typical smartphone screen is made up of mainly two
components: a sheet of touch-sensitive glass (where you
move your finger to operate the phone) of thickness t at
the top and a LCD screen below it consisting of a regular
array of “RGB elements” that emit light. These elements
have a separation of d between them. There is a thin air
gap of depth h between the touch-sensitive glass and the
LCD screen (see Fig. (1)for a cross sectional view). We
estimate the value of h from the following experiment.
touch-sensitive glass
.
air
air
t
h d
LCD RGB elements
Figure 1
We use two smartphones (S-I and S-II) in this exercise – S-I is the target instrument in which we
want to estimate h, and S-II is the measuring instrument that can capture photos of the screen of
S-I which we then analyse using a image-processing software.
A digital image captured by the camera of a smartphone (S-II here) consists of discrete picture
elements called pixels. The image captured by S-II is processed through a software. A red color
reference line is drawn on the image (see Fig. 3(a)). The software plots the “brightness value” at
every point of the reference line as a function of the number of pixels from the left end of the line.
Thus, pixel number is a marker for distance here. First, we need to calibrate distance in terms of
pixel number.
The phone S-I is kept horizontal and the display is kept ON. A ruler is placed on its screen. S-II is
fixed above S-I to capture images. The image of the screen captured is shown in Fig (2).
Figure 2
Figure 3(a) shows a part of the image of the ruler and its brightness value profile along the red
reference line in Fig. 3(b).
0 32 64 96 128 160 192 224 256 288 320 352 384 416 448 480
50
100
150
Pixel number
Brightness value
(a) (b)
Figure 3
H B C 2 3
Page 13 INPhO 2023 Questions
(a) [2 marks] State the number of pixels used by the camera of S-II to capture one centimeter of
the screen of S-I.
Solution:
Wherever there is a black color comes into the picture, the brightness value profile will show a
dip. There is a dip at pixel number 12 that refers to the 4 cm marker of the ruler. Similarly,
the brightness value dip at pixel number 452 is for the 5cm marker of the scale. Hence the
number of pixels present in 1cm of the image is 440. We denote the value θ = 1/440 to be the
scaling factor to convert the measurements obtained in pixels to the centimeter scale.
Accepted answer range : 432 − 448 pixels.
(b) [5 marks] We keep the setup the same as the last part. Next, a few small water drops are
placed on the glass screen of S-I beside the ruler (see Figs. 4(a) and 4(b) for a top and side view,
respectively). We model every drop as a hemispherical lens of radius R that magnifies the array
of RGB elements of the LCD screen of S-I (see Fig. 4(c); the figure is not to scale).
(a)
(b)
(c)
touch-sensitive glass
.
R air
air
t
h d
LCD RGB elements
(d)
Figure 4
Figure 4(d) shows the magnified image of the array of the RGB elements of the screen as viewed
from the top through one of the drops. This image is captured by S-II keeping the camera settings
and distance same as in the previous part. The brightness value profiles of the images of the five
chosen drops along the reference lines are shown in Fig. (5) on the next page.
Using the profile plots, write the radius of the water drop (R in mm) and the corresponding
magnification (M) of the separation d between the array of RGB elements of S-I for each waterdrop
lens. Use the table in the Summary Answer sheet to report your data. Describe the method you
have used and the calculations in the Detailed Answer sheet.
H B C 2 3
Page 14 INPhO 2023 Questions Last four digits of Roll No.:
Water drop 1
0 20 40 60 80 100 120 140 160 180 200 220
100
150
200
Pixel number Brightness value
Water drop 1
Water drop 2
0 20 40 60 80 100 120 140 160 180 200 220
100
150
200
Pixel number)
Brightness value
Water drop 2
Water drop 3 0 40 80 120 160 200 240 280 320
100
150
200
Pixel number
Brightness value
Water drop 3
Water drop 4 0 40 80 120 160 200 240 280 320 360
50
100
150
200
Pixel number
Brightness value
Water drop 4
Water drop 5 0 40 80 120 160
50
100
150
200
Pixel number
Brightness value
Water drop 5
Figure 5: Question of part (b)
Solution: The red line is drawn beyond the waterdrops’ diameters. In each brightness value
profile, there are three distinct regions present. Reading from the left, a closely packed peaks,
H B C 2 3
Page 15 INPhO 2023 Questions
Water drop 1
⊗ ⊗
0 20 40 60 80 100 120 140 160 180 200 220
100
150
200
Pixel number
Brightness value
Water drop 1
Water drop 2
⊗ ⊗
0 20 40 60 80 100 120 140 160 180 200 220
100
150
200
Pixel number)
Brightness value
Water drop 2
Water drop 3
⊗ ⊗
0 40 80 120 160 200 240 280 320
100
150
200
Pixel number
Brightness value
Water drop 3
Water drop 4
⊗ ⊗
0 40 80 120 160 200 240 280 320 360
50
100
150
200
Pixel number
Brightness value
Water drop 4
Water drop 5
⊗ ⊗
0 40 80 120 160
50
100
150
200
Pixel number
Brightness value
Water drop 5
Figure 6: Solution of part (b)
H B C 2 3
Page 16 INPhO 2023 Questions Last four digits of Roll No.:
then the central region where the peaks are dispersed and the right side to the central region
is again a closely packed peaks. The right and left regions are the plots of the smartphone
S-I’s screen without the waterdrop lens. The distance d between each peak in these regions
refers to the distance between the RGB elements of S-I. Note that d for each picture will be
the same since all the images are extracted from one single image Fig. (4a).
The magnified distance D will be different for the drops, depending on the radius R. The
central region is the magnified plot of the smartphone S-I screen seen through the waterdrop.
The distance D between the two peaks in the central region is the magnified distance between
S-I’s RGB elements. The magnfication is D/d. For accuracy, we will count the n number of
peaks for a distance and then divide the distance by n. The exact locations we have used on
the plots to calculate D are indicated by a red color arrow ↓ (see Fig. (6)).
For each drop, we identify the pixel number which separates the waterdrop region. The
distance along this region will be the diameter of the drop. Alternatively, you can also measure
the length of the region with a physical ruler and then convert it into a pixel number. The
boundary points of the waterdrop regions which we have used on the plots to calculate R are
indicated by a red color symbol ⊗ (see Fig. (6)).
Every time we obtain the distance from the graph in terms of the pixel number, we multiply
it by the scaling factor θ (obtained in part (a)) to convert it to the centimeter scale.
No.
Drop region
∗R (cm)
Magnified distance
Start pixel End pixel n
Distance
∗∗D(cm)
Start pixel End pixel
1 36 172 0.155 4 80 132 0.030
2 24 184 0.182 5 88 136 0.022
3 31.11 280 0.283 22 80 231.11 0.016
4 31.11 315.56 0.323 19 120 240 0.014
5 26.67 142.22 0.131 1 71.11 88.89 0.040
Here
∗
R(cm) =
End pixel − Start pixel
2
θ
∗∗
D(cm) =
End pixel − Start pixel
n
θ
and n is the number of peaks (or dips) counted.
The original distance d (unmagnified) between the RGB elements can be obtained by counting
the dips in the left or right regions of any of the graphs. See the right side region of the water
drop 1 graph, there are six peaks in 20 pixel numbers of the image, i.e. total of five RGB
elements in 20 pixel numbers. Thus
d =
20
5
θ (5.1)
=
1
110
cm (5.2)
Interesting fact for the readers: RGB elements are nothing but the "pixels" inside S-I
which you use to define the quality of a screen. When you refer to PPI (pixel per inch) of a
phone, you are indicating the number of RGB elements in an inch of the screen display. We
used ipad 8th generation as the S-I. Apple website gives PPI (pixel per inch) for the iPad to
be 264 (https://support.apple.com/kb/SP822). The value of d obtained gives the PPI value
to be ∼279 PPI. Not a bad answer for an amateur setup!
H B C 2 3
Page 17 INPhO 2023 Questions
Data table for the Summary answer sheet:
Water drop R (cm) M = D/d
1 0.155 3.25
2 0.182 2.40
3 0.283 1.72
4 0.328 1.58
5 0.131 4.44
Final values within five percent of the official answers will be credited fully.
(c) [9 marks] For the given smartphone, t = 0.50mm, the refractive indices of the touch-sensitive
glass, water drop, and the air to be 3/2,4/3, and 1 respectively. Using the data table of the
previous part, plot a suitable linear graph to obtain the distance (h) of the RGB elements from
the touch-sensitive glass. Use the table given in the summary answer sheet to enter the data used
to plot the graph. Show your detailed theoretical calculation in the Detailed Answer sheet.
Solution: We use the standard results for the reflection formula from a spherical surface.
u v
µ1 µ2
O I P
µ2
v
−
µ1
u
=
µ2 − µ1
R
(5.3)
Magnification M =
I
O
=
µ1
µ2
v
u
(5.4)
Here the symbols have their usual meanings. The sign will be adjusted accordingly.
There is refraction occurring at the three surfaces.
v2
O v1 I h t
R
µg
P
µw
µa µa
The first refraction is at the air-glass interface. Using µ1 = µa, µ2 = µg, R = ∞ in the
Eq.(5.3)
µg
v1
−
µa
−h
= 0 (5.5)
v1 = −µgh (5.6)
H B C 2 3
Page 18 INPhO 2023 Questions Last four digits of Roll No.:
The second refraction is at the glass-water interface. Now u2 = |v1| + t. This gives
µw
v2
−
µg
−u2
= 0 (5.7)
v2 = −(µgh + t)
µw
µg
(5.8)
The third refraction is at the water-air interface. Now u3 = |v2| + R gives
µa
v3
−
µw
−u3
=
µa − µw
−R
(5.9)
Magnification will only be from the third interface.
M =
µw
µa
v3
u3
(5.10)
Using µg = 3/2, µw = 4/3, and µa = 1 in the Eqs. (5.9 and 5.10) yields
1
M
=
3
4
−
1
3R

h +
2t
3

(5.11)
A graph of 1/M vs 1/3R will be linear. The graph is plotted on the next page. For the
obtained data set
Slope = 2.67mm which gives h = 2.34mm.
Accepted answer range: (2.34±5%)mm.
H B C 2 3
Page 19 INPhO 2023 Questions
**** END OF THE QUESTION PAPER ****
