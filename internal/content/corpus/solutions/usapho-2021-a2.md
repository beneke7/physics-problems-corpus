---
id: usapho-2021-a2
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2021-a2
solution_type: official
source_document: solution-document-usapho-2021-s
source_pdf: cache/phoxiv/usapho/2021_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2021_S.pdf."
---

Question A2
Flashlight
Alice the Mad Scientist, travelling in her flying car at height h above the ground, shoots a beam of
muons at the ground. Bob, observing from the ground at distance R 
 h from Alice’s car, decides
to check some facts about special relativity. Assume the muons travel extremely close to the speed
of light in Alice’s frame.
Bob
Alice
muon beam h
R
(side view)
a. Alice’s car flies at horizontal speed v = βc. Alice shoots her muon beam straight down, in her
reference frame. Express your answers in terms of β,h,R and fundamental constants.
i. What is the horizontal velocity of the muons in Bob’s reference frame?
Solution
The muons were fired straight down in Alice’s frame, so in Bob’s frame their horizontal
velocity is the same as Alice’s, v = βc.
One way to see this is to imagine Alice was carrying a vertical pole with her. In her
reference frame, the muons travel along the length of the pole. This must remain true
in any frame, so in Bob’s frame the muons must have the same horizontal velocity as
Alice.
ii. What is the vertical velocity of the muons in Bob’s reference frame?
Solution
The muons have speed c and horizontal velocity v = βc, so they have vertical velocity
c
p
1 − β2 by the Pythagorean theorem.
iii. How long does it take the muons to reach the ground in Bob’s reference frame?
Solution
The time is the height divided by the vertical velocity of the muons,
∆t =
h
c
p
1 − β2
.
Alice’s velocity v is directed an angle θ away from Bob. For the rest of the problem, you may
additionally express your answers in terms of θ.
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part A 6
Bob
Alice
v θ
(view from above)
b. In Bob’s reference frame, how much time is there between when he sees Alice first fire the beam,
and when he sees the beam first hit the ground? (Hint: remember to account for the travel time
of light to Bob’s eyes.)
Solution
In Bob’s frame, during the time the muons take to reach the ground, Alice’s car moves a
distance ∆r = (v∆t) cosθ away from Bob, which means the light from the muons hitting
the ground takes an extra time (∆r)/c to reach Bob. Thus, the time interval Bob sees, with
his eyes, is
∆t +
v cosθ
c
∆t =
h
c
1 + β cosθ
p
1 − β2
.
c. In this part, suppose that β = 1/2. Does there exist a value of θ so that the time it takes the
muons to hit the ground in Alice’s frame is equal to the time taken according to Bob’s eyes, in
Bob’s frame? If so, find the value of θ in degrees. If not, briefly explain why not.
Solution
This will be true if
h
c
p
1 − β2
(1 + β cosθ) =
h
c
.
Solving for θ, we find
θ = cos−1
(
p
β−2 − 1 − β−1
).
This has a solution as long as the argument of the inverse cosine is less than 1. In the case
β = 0.5, it is, and the result is
θ = 105.5◦
.
That is, this value of β is low enough so that the motion of Alice towards Bob can make
up for the time dilation effect.
d. Suppose Alice is carrying a radio transmitter set to frequency f. To what frequency would Bob
have to set his radio receiver in order to receive Alice’s transmission?
Solution
The key point is that all the logic in part (b) still works, if we replace Bob’s eyes with the
radio receiver. Since the frequency of a wave is the inverse of the time between maxima,
f0
=
p
1 − β2
1 + β cosθ
f.
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part A 7
This is the two-dimensional relativistic Doppler shift, and the secret point of this problem
was to derive it in a simple way.
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part A 8
