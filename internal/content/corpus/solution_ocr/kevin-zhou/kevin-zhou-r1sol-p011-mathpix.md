---
id: solution-ocr-kevin-zhou-r1sol-p011
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r1-p011]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 11. In his original 1905 paper on relativity, Einstein considered how light reflected from a moving mirror is Doppler shifted.
    (a) Find the frequency of light reflected directly back from a mirror which is approaching the observer with speed $v$, if the light originally had frequency $f$.
    (b) Show that this is the same as if the light were sourced with frequency $f$ by an object moving at speed $2 v / \left( 1 + v ^ { 2 } / c ^ { 2 } \right)$ towards the observer. Can you find an intuitive reason for this?
    (c) Confirm that the energy gained by the light is equal to the loss of the kinetic energy of the mirror. For simplicity, assume the mirror is very heavy. You'll have to use the fact that the energy carried by a pulse of light is related to its momentum by $E = p c$.
    (d) What happens if the mirror is moving along its own length? Concretely, suppose the mirror lies at $x = 0$, light hits it traveling in the $\hat { \mathbf { x } }$ direction, and the mirror has a velocity $v \hat { \mathbf { y } }$. After reflection, which way does the light travel, and what is its new frequency?

Solution. (a) Consider the frame of the mirror. In this frame, the light comes in with frequency

$$
f _ { 1 } = \sqrt { \frac { 1 + v / c } { 1 - v / c } } f
$$

by the Doppler shift, and it bounces off with the same frequency $f _ { 1 }$. Now go back to the frame of the observer. By using the Doppler shift formula again, the observer sees a frequency

$$
f _ { 2 } = \frac { 1 + v / c } { 1 - v / c } f .
$$

That is, a moving mirror causes a double Doppler shift.


(b) Let $u = 2 v / \left( 1 + v ^ { 2 } / c ^ { 2 } \right)$. Then verifying the claim boils down to showing that
$$
f _ { 2 } = \sqrt { \frac { 1 + u / c } { 1 - u / c } } f
$$
which is equivalent to (setting $c = 1$ ),
$$
\frac { ( 1 + v ) ^ { 2 } } { ( 1 - v ) ^ { 2 } } = \frac { 1 + u } { 1 - u } .
$$
This holds because
$$
\frac { 1 + u } { 1 - u } = \frac { 1 + \frac { 2 v } { 1 + v ^ { 2 } } } { 1 - \frac { 2 v } { 1 + v ^ { 2 } } } = \frac { 1 + v ^ { 2 } + 2 v } { 1 + v ^ { 2 } - 2 v } .
$$
The intuition is that we can think of the reflected wave as being sourced by an image. Both the source and the image have speed $v$ relative to the mirror, so by relativistic velocity addition, the image has speed $2 v / \left( 1 + v ^ { 2 } \right)$ relative to the source.

(c) Let $\Delta p$ be the momentum transferred to the mirror, and let $p _ { 0 }$ be the momentum of the initial pulse of light. Then the change in the mirror's kinetic energy is
$$
\Delta K = v \Delta p = - p _ { 0 } v \left( 1 + \frac { 1 + v / c } { 1 - v / c } \right) = - p _ { 0 } \frac { 2 v } { 1 - v / c } .
$$
On the other hand, the change in the light's energy is
$$
\Delta E = p _ { 0 } c \left( \frac { 1 + v / c } { 1 - v / c } - 1 \right) = p _ { 0 } \frac { 2 v } { 1 - v / c } .
$$
These are precisely opposite, so energy is conserved.
(d) Nothing nontrivial happens. To see this, consider boosting into the mirror's frame, then computing the reflection as usual, and then boosting back into the original frame. Initially, the light has velocity $( c , 0 )$. After boosting to the mirror's frame, it has some velocity $\left( u _ { x } , u _ { y } \right)$. Reflection simply flips the sign of $u _ { x }$. But then boosting back to the original frame will just yield a velocity $( - c , 0 )$. In other words, the light ray bounces back the way it came, with no modification to its direction, and no modification to its frequency. There's no Doppler shift from a mirror moving along its own length.
We can also understand this fact from the standpoint of energy conservation. The reflection process does no work on the mirror, because the change in momentum is perpendicular to the mirror's velocity, so the light's energy remains the same as well.
On the other hand, if the mirror is moving perpendicular to its plane, then the frequency of the photon can change, and its angle of reflection will generally be different from its angle of incidence. If you're interested, it's straightforward (albeit a bit messy) to work this out.

[3] Problem 12. USAPhO 2021, problem A2. A simple, elegant problem with a useful punchline.
