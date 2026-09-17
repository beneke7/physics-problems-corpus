---
id: inpho-2023-a1
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2023-a1
solution_type: official
source_document: solution-document-inpho-2023-s
source_pdf: cache/phoxiv/inpho/2023_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2023_S.pdf."
---

1. [6 marks] Dancing on the floor
There are various apps that record the intensity of an audio signal. An app (WaveEditorTM here)
displays the audio signal as a wave, whose amplitude is proportional to the audio signal’s loudness.
A smartphone with this app recording the sound signal is kept on a uniformly built flat floor of a
classroom.
10.260
11.409
12.244
12.848
13.284
13.602
13.832
14.000
A perfectly small spherical steel ball is thrown up such that it almost touches the ceiling and comes
back without hitting. The ball hits the floor and thereafter it keeps bouncing. The app records the
sound signal produced when the ball hits the floor on every bounce. A screenshot of the recording
is shown. The timestamps (in seconds) of the first eight consecutive bounces are also shown next
to the peak. For example, the app records a peak at 10.260s when the first time the ball hits the
floor.
Make reasonable assumptions, when the ball hits the floor and calculate the height of the classroom
from the given data. State your assumptions clearly.
Solution: The initial height of the peaks seems to be random. This might happen when the
ball hits the floor near the phone and some time away from the phone. The time interval
between the peaks is reducing, indicating that the ball is colliding inelastically with the floor.
It is also not given when the app started recording the sound. If we take the timestamp of first
peak (10.26 s) to be the true time taken for the first bounce, that will give the height of the
room to be 131m which is a nonphysical number for a classroom’s height.
Since the ball and the floor both are uniformly shaped objects, we can consider that in each
bounce, the ball loses the same amount of energy. Let the height of the room be h0. The ball
attains the height h1, and h2 after the first and the second bounce respectively.
E0
E1
=
E1
E2
=
E2
E3
= .... (1.1)
⇒
h0
h1
=
h1
h2
(1.2)
Let the time interval between the first and the second bounce be ∆t1 and the time interval
between second and the third bounce be and ∆t2. This yields
h0 =
h2
1
h2
(1.3)
where
h1 =
1
2
g

∆t1
2
2
(1.4)
h2 =
1
2
g

∆t2
2
2
(1.5)
H B C 2 3
Page 3 INPhO 2023 Questions
Substituting Eqs. (1.4) and (1.5) in Eq.(1.3), we get
h0 =
g
8
∆t4
1
∆t2
2
= 3.06m (1.6)
Alternate ways of solving exist. The accepted range of h0 is 2.80m − 3.12m.
