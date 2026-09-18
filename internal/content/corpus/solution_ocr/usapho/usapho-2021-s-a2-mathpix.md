---
id: solution-ocr-usapho-2021-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2021_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2021-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A2
Flashlight
Alice the Mad Scientist, travelling in her flying car at height $h$ above the ground, shoots a beam of muons at the ground. Bob, observing from the ground at distance $R \gg h$ from Alice's car, decides to check some facts about special relativity. Assume the muons travel extremely close to the speed of light in Alice's frame.
![](../../../figures/solution-ocr/4a7fe999d02877311dce5e89.jpg)

a. Alice's car flies at horizontal speed $v = \beta c$. Alice shoots her muon beam straight down, in her reference frame. Express your answers in terms of $\beta , h , R$ and fundamental constants.
    i. What is the horizontal velocity of the muons in Bob's reference frame?

Solution
The muons were fired straight down in Alice's frame, so in Bob's frame their horizontal velocity is the same as Alice's, $v = \beta c$.
One way to see this is to imagine Alice was carrying a vertical pole with her. In her reference frame, the muons travel along the length of the pole. This must remain true in any frame, so in Bob's frame the muons must have the same horizontal velocity as Alice.

ii. What is the vertical velocity of the muons in Bob's reference frame?

Solution
The muons have speed $c$ and horizontal velocity $v = \beta c$, so they have vertical velocity $c \sqrt { 1 - \beta ^ { 2 } }$ by the Pythagorean theorem.

iii. How long does it take the muons to reach the ground in Bob's reference frame?

Solution
The time is the height divided by the vertical velocity of the muons,

$$
\Delta t = \frac { h } { c \sqrt { 1 - \beta ^ { 2 } } } .
$$

Alice's velocity $v$ is directed an angle $\theta$ away from Bob. For the rest of the problem, you may additionally express your answers in terms of $\theta$.

Copyright ©2021 American Association of Physics Teachers


![](../../../figures/solution-ocr/b43e630e09b0dc2851baf79a.jpg)

b. In Bob's reference frame, how much time is there between when he sees Alice first fire the beam, and when he sees the beam first hit the ground? (Hint: remember to account for the travel time of light to Bob's eyes.)

## Solution

In Bob's frame, during the time the muons take to reach the ground, Alice's car moves a distance $\Delta r = ( v \Delta t ) \cos \theta$ away from Bob, which means the light from the muons hitting the ground takes an extra time $( \Delta r ) / c$ to reach Bob. Thus, the time interval Bob sees, with his eyes, is

$$
\Delta t + \frac { v \cos \theta } { c } \Delta t = \frac { h } { c } \frac { 1 + \beta \cos \theta } { \sqrt { 1 - \beta ^ { 2 } } } .
$$

c. In this part, suppose that $\beta = 1 / 2$. Does there exist a value of $\theta$ so that the time it takes the muons to hit the ground in Alice's frame is equal to the time taken according to Bob's eyes, in Bob's frame? If so, find the value of $\theta$ in degrees. If not, briefly explain why not.

## Solution

This will be true if

$$
\frac { h } { c \sqrt { 1 - \beta ^ { 2 } } } ( 1 + \beta \cos \theta ) = \frac { h } { c } .
$$

Solving for $\theta$, we find

$$
\theta = \cos ^ { - 1 } \left( \sqrt { \beta ^ { - 2 } - 1 } - \beta ^ { - 1 } \right) .
$$

This has a solution as long as the argument of the inverse cosine is less than 1. In the case $\beta = 0.5$, it is, and the result is

$$
\theta = 105.5 ^ { \circ } .
$$

That is, this value of $\beta$ is low enough so that the motion of Alice towards Bob can make up for the time dilation effect.

d. Suppose Alice is carrying a radio transmitter set to frequency $f$. To what frequency would Bob have to set his radio receiver in order to receive Alice's transmission?

## Solution

The key point is that all the logic in part (b) still works, if we replace Bob's eyes with the radio receiver. Since the frequency of a wave is the inverse of the time between maxima,

$$
f ^ { \prime } = \frac { \sqrt { 1 - \beta ^ { 2 } } } { 1 + \beta \cos \theta } f
$$


This is the two-dimensional relativistic Doppler shift, and the secret point of this problem was to derive it in a simple way.
