---
id: solution-ocr-usapho-2008-s-a4
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2008_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2008-a4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A4

A tape recorder playing a single tone of frequency $f _ { 0 }$ is dropped from rest at a height $h$. You stand directly underneath the tape recorder and measure the frequency observed as a function of time. Here $t = 0 \mathrm {~s}$ is the time at which the tape recorder was dropped.

| $t ( \mathrm {~s} )$ | $f ( \mathrm {~Hz} )$ |
| :--- | :--- |
| 2.0 | 581 |
| 4.0 | 619 |
| 6.0 | 665 |
| 8.0 | 723 |
| 10.0 | 801 |

The acceleration due to gravity is $g = 9.80 \mathrm {~m} / \mathrm { s } ^ { 2 }$ and the speed of sound in air is $v _ { \text {snd } } = 340 \mathrm {~m} / \mathrm { s }$. Ignore air resistance. You might need to use the Doppler shift formula for co-linear motion of sources and observers in still air,

$$
f = f _ { 0 } \frac { v _ { \mathrm { snd } } \pm v _ { \mathrm { obs } } } { v _ { \mathrm { snd } } \pm v _ { \mathrm { src } } }
$$

where $f _ { 0 }$ is the emitted frequency as determined by the source, $f$ is the frequency as detected by the observer, and $v _ { \text {snd } } , v _ { \text {src } }$, and $v _ { \text {obs } }$ are the speed of sound in air, the speed of the source, and the speed of the observer. The positive and negative signs are dependent upon the relative directions of the motions of the source and the observer.

a. Determine the frequency measured on the ground at time $t$, in terms of $f _ { 0 } , g , h$, and $v _ { \text {snd } }$. Consider only the case where the falling tape recorder doesn't exceed the speed of sound $v _ { \text {snd } }$.
b. Verify graphically that your result is consistent with the provided data.
c. What (numerically) is the frequency played by the tape recorder?
d. From what height $h$ was the tape recorder dropped?

## Solution

a. The position of the tape recorder above the ground at a time $t$ is given by
$$
y = h - \frac { 1 } { 2 } g t ^ { 2 }
$$
and the speed of the tape recorder is given by
$$
v _ { \mathrm { src } } = - g t
$$

The observer "hears" the sound emitted from the tape recorder a time $\delta t$ earlier, since it takes time for the sound to travel to the listener. In this case,

$$
y = v _ { \mathrm { snd } } \delta t
$$

So at time $t$ the listener is hearing the tape recorder when it had emitted at time $t ^ { \prime } = t - \delta t$, or

$$
t ^ { \prime } = t - \frac { h } { v _ { \mathrm { snd } } } + \frac { g } { 2 v _ { \mathrm { snd } } } \left( t ^ { \prime } \right) ^ { 2 }
$$

Solve this for $t ^ { \prime }$, first by rearranging,

$$
\frac { g } { 2 } \left( t ^ { \prime } \right) ^ { 2 } - v _ { \mathrm { snd } } t ^ { \prime } + \left( v _ { \mathrm { snd } } t - h \right) = 0
$$

and the by applying the quadratic formula

$$
t ^ { \prime } = \frac { v _ { \mathrm { snd } } \pm \sqrt { v _ { \mathrm { snd } } { } ^ { 2 } + 2 g h - 2 g v _ { \mathrm { snd } } t } } { g } .
$$

In the limit of small $h$ and large $v _ { \text {snd } }$, this reduces to the expected $t ^ { \prime } = t$ if one keeps the negative result. Consequently,

$$
v _ { \mathrm { src } } = \sqrt { v _ { \mathrm { snd } } { } ^ { 2 } + 2 g h - 2 g v _ { \mathrm { snd } } t } - v _ { \mathrm { snd } }
$$

gives the velocity of that source had when it emitted the sound heard at time $t$. This result is negative, indicating motion down, and toward the observer, so one must use the positive sign in the denominator of the Doppler shift formula. Applying the Doppler shift formula,

$$
f = f _ { 0 } \frac { v _ { \mathrm { snd } } } { \sqrt { v _ { \mathrm { snd } } 2 + 2 g h - 2 g v _ { \mathrm { snd } } t } } .
$$

b.First, note that in the limit of large $v _ { \text {snd } }$ and small $h , f$ reduces to

$$
f = f _ { 0 } \left( 1 + \frac { g } { v _ { \mathrm { snd } } } t \right) .
$$

However, this is too inaccurate an approximation to get a reasonable answer. Keeping to the exact expression, we can rearrange it as

$$
\frac { 1 } { f ^ { 2 } } = \frac { 1 } { f _ { 0 } { } ^ { 2 } } \left( 1 + \frac { 2 g h } { v _ { \mathrm { snd } } { } ^ { 2 } } - \frac { 2 g } { v _ { \mathrm { snd } } } t \right)
$$

which would graph as a straight line by plotting $t$ horizontally and $1 / f ^ { 2 }$ vertically. The slope and intercept are

$$
- \frac { 2 g } { v _ { \mathrm { snd } } f _ { 0 } ^ { 2 } } , \quad \frac { 1 } { f _ { 0 } ^ { 2 } } \left( 1 + \frac { 2 g h } { v _ { \mathrm { snd } } ^ { 2 } } \right)
$$

respectively. Now we may plot the following data:

| $t ( \mathrm {~s} )$ | $f ( \mathrm {~Hz} )$ | $1 / f ^ { 2 } \left( \times 10 ^ { - 6 } \mathrm {~s} ^ { 2 } \right)$ |
| :--- | :--- | :--- |
| 2.0 | 581 | 2.96 |
| 4.0 | 619 | 2.61 |
| 6.0 | 665 | 2.26 |
| 8.0 | 723 | 1.91 |
| 10.0 | 801 | 1.56 |

When graphed, this indeed produces a line.

c. The slope is $- 1.75 \times 10 ^ { - 7 } \mathrm {~s}$. Then
$$
f _ { 0 } = \sqrt { \frac { 2 ( 9.8 ) } { \left( 1.75 \times 10 ^ { - 7 } \right) ( 340 ) } } \mathrm { Hz } = 574 \mathrm {~Hz} .
$$
d. The intercept is $3.31 \times 10 ^ { - 6 } \mathrm {~s} ^ { 2 }$. This yields a height
$$
h = ( 340 ) \frac { ( 3.31 ) } { ( 0.175 ) } - \frac { ( 340 ) ^ { 2 } } { 2 ( 9.8 ) } = 533 \mathrm {~m} .
$$
Clearly, an impressive building, and a more impressive tape recorder, that it could be heard from such a distance!


## STOP: Do Not Continue to Part B

If there is still time remaining for Part A, you should review your work for Part A, but do not continue to Part B until instructed by your exam supervisor.


## Part B
