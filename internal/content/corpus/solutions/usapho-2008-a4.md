---
id: usapho-2008-a4
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2008-a4
solution_type: official
source_document: solution-document-usapho-2008-s
source_pdf: cache/phoxiv/usapho/2008_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2008_S.pdf."
---

Question A4
A tape recorder playing a single tone of frequency f0 is dropped from rest at a height h. You stand directly
underneath the tape recorder and measure the frequency observed as a function of time. Here t = 0 s is the
time at which the tape recorder was dropped.
t (s) f (Hz)
2.0 581
4.0 619
6.0 665
8.0 723
10.0 801
The acceleration due to gravity is g = 9.80 m/s2
and the speed of sound in air is vsnd = 340 m/s. Ignore
air resistance. You might need to use the Doppler shift formula for co-linear motion of sources and observers
in still air,
f = f0
vsnd ± vobs
vsnd ± vsrc
where f0 is the emitted frequency as determined by the source, f is the frequency as detected by the observer,
and vsnd, vsrc, and vobs are the speed of sound in air, the speed of the source, and the speed of the observer.
The positive and negative signs are dependent upon the relative directions of the motions of the source and
the observer.
a. Determine the frequency measured on the ground at time t, in terms of f0, g, h, and vsnd. Consider
only the case where the falling tape recorder doesn’t exceed the speed of sound vsnd.
b. Verify graphically that your result is consistent with the provided data.
c. What (numerically) is the frequency played by the tape recorder?
d. From what height h was the tape recorder dropped?
Solution
a. The position of the tape recorder above the ground at a time t is given by
y = h −
1
2
gt2
and the speed of the tape recorder is given by
vsrc = −gt
Copyright ©2008 American Association of Physics Teachers
2008 Semifinal Exam Part A 8
The observer “hears” the sound emitted from the tape recorder a time δt earlier, since it takes time
for the sound to travel to the listener. In this case,
y = vsndδt
So at time t the listener is hearing the tape recorder when it had emitted at time t0
= t − δt, or
t0
= t −
h
vsnd
+
g
2vsnd
(t0
)2
Solve this for t0
, first by rearranging,
g
2
(t0
)2
− vsndt0
+ (vsndt − h) = 0
and the by applying the quadratic formula
t0
=
vsnd ±
p
vsnd
2 + 2gh − 2gvsndt
g
.
In the limit of small h and large vsnd, this reduces to the expected t0
= t if one keeps the negative
result. Consequently,
vsrc =
p
vsnd
2 + 2gh − 2gvsndt − vsnd
gives the velocity of that source had when it emitted the sound heard at time t. This result is negative,
indicating motion down, and toward the observer, so one must use the positive sign in the denominator
of the Doppler shift formula. Applying the Doppler shift formula,
f = f0
vsnd
p
vsnd
2 + 2gh − 2gvsndt
.
b. First, note that in the limit of large vsnd and small h, f reduces to
f = f0

1 +
g
vsnd
t

.
However, this is too inaccurate an approximation to get a reasonable answer. Keeping to the exact
expression, we can rearrange it as
1
f2
=
1
f0
2

1 +
2gh
vsnd
2
−
2g
vsnd
t

which would graph as a straight line by plotting t horizontally and 1/f2
vertically. The slope and
intercept are
−
2g
vsndf0
2
,
1
f0
2

1 +
2gh
vsnd
2

respectively. Now we may plot the following data:
t (s) f (Hz) 1/f2
(×10−6
s2
)
2.0 581 2.96
4.0 619 2.61
6.0 665 2.26
8.0 723 1.91
10.0 801 1.56
When graphed, this indeed produces a line.
Copyright ©2008 American Association of Physics Teachers
2008 Semifinal Exam Part A 9
c. The slope is −1.75 × 10−7
s. Then
f0 =
s
2(9.8)
(1.75 × 10−7)(340)
Hz = 574Hz.
d. The intercept is 3.31 × 10−6
s2
. This yields a height
h = (340)
(3.31)
(0.175)
−
(340)2
2(9.8)
= 533m.
Clearly, an impressive building, and a more impressive tape recorder, that it could be heard from such
a distance!
Copyright ©2008 American Association of Physics Teachers
2008 Semifinal Exam Part A 10
STOP: Do Not Continue to Part B
If there is still time remaining for Part A, you should review your work for
Part A, but do not continue to Part B until instructed by your exam
supervisor.
Copyright ©2008 American Association of Physics Teachers
2008 Semifinal Exam Part B 11
Part B
