---
id: solution-ocr-kevin-zhou-w1sol-p012
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w1-p012]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 12. Some questions about musical instruments.


(a) A piano makes sound by quickly striking a string with a hammer. The seventh harmonic doesn't fit in with the rest that well. If you want to eliminate the seventh harmonic, at what point(s) can you put the hammer?
(b) A violinist can make the note from an open string sound an octave higher by lightly touching it at a point while bowing it somewhere else. Which point(s) should be touched?
(c) Suppose a string has its ends attached to walls. A person can set up a standing wave by holding the string at some point and moving it side to side, sinusoidally with fixed amplitude. At which point(s) should the string be driven to maximize the amplitude of a given standing wave? Assume the string experiences very little damping.

Solution. (a) In order to avoid exciting a given standing wave, we should strike the piano at a node of that wave, so that there is zero "overlap" between the wave and the strike. So we can place it 1/7,2/7,...,6/7 of the way down the string.


(b) The midpoint of the string should be touched. This removes all harmonics that don't have a node at the midpoint, i.e. all odd harmonics. The remaining frequencies are even multiples of the fundamental $f _ { 0 }$, and since these are all multiples of $2 f _ { 0 }$, we perceive $2 f _ { 0 }$ as the pitch.
(c) Suppose a standing wave has a spatial profile $f ( x )$ and frequency $f$, and to excite it we drive at frequency $f$ and amplitude $A$ at a point $x _ { 0 }$. Assuming the damping is small, then in the steady state the spatial profile will be $f ( x ) \left( A / f \left( x _ { 0 } \right) \right)$, which is largest if we drive near a node of the harmonic, not an antinode!
This may be somewhat unintuitive. The point is that driving at an antinode maximizes the rate at which you initially put energy into the harmonic; this is what we cared about in part (a). But driving at the node maximizes the eventual steady state amplitude, which is what matters here. A real-world example of this is playing jump rope: your hands driving the rope are near at the nodes, because they need to move much less than the middle of the rope does.
[5] Problem 13. EuPhO 2017, problem 1. (Hint: don't try to use fancy math here. EuPhO problems are designed to be solved with only elementary math and graph reading.)
Idea 5
Standing wave solutions also exist for waves in more than one spatial dimension. In the special case where the wave medium is uniform, and shaped like a rectangle (in two dimensions) or a rectangular prism (in three dimensions), all the standing wave solutions can be found by separation of variables. That is, they can all be written as
$$
\psi ( x , y , z , t ) = f ( x ) g ( y ) h ( z ) \cos ( \omega t )
$$
where $f , g$, and $h$ are sinusoids.

[3] Problem 14. The top of a drum is like a string, in that it has a uniform surface mass density $\sigma$ and surface tension $\gamma$.
    (a) Waves on the drum can be described by its height $z ( x , y , t )$. Find the wave equation for a drum. What is the speed of traveling waves?
    (b) Consider a square drum of side length $L$, where the boundaries are fixed to $z = 0$. Find the standing wave solutions and the corresponding $\omega$. What's the lowest standing wave angular frequency?
The frequencies will not be multiples of a fundamental frequency, so they are called overtones, rather than harmonics; that's why drums don't sound like they're playing notes. (Special examples, such as the timpani, are designed to mostly excite the harmonic frequencies.)
    (c) Why does a drum sound different if you hit it near the edge, versus at the center?

Solution. (a) A piece of mass $d m = \sigma d x d y$ will experience a net force from differing forces from the sides. Consider the force on the $d y$ side, where the force from surface tension is $\gamma d y$, and the vertical component for small displacements is $\gamma d y \frac { \partial z } { \partial x }$ (since we are going perpendicularly away from the $d y$ side). To find the change in this vertical force across $d x$, we will take the differential again to get $d F _ { x } = \gamma d y d x \frac { \partial ^ { 2 } z } { \partial x ^ { 2 } }$. Adding the force from the $y$ direction gets

$$
d F _ { x } + d F _ { y } = \sigma d x d y \frac { \partial ^ { 2 } z } { \partial t ^ { 2 } }
$$

which gives the wave equation

$$
\frac { \partial ^ { 2 } z } { \partial t ^ { 2 } } = \frac { \gamma } { \sigma } \left( \frac { \partial ^ { 2 } z } { \partial x ^ { 2 } } + \frac { \partial ^ { 2 } z } { \partial y ^ { 2 } } \right)
$$

and hence a wave speed of

$$
v = \sqrt { \frac { \gamma } { \sigma } } .
$$


(b) Let $z ( x , y , t ) = \sin \left( k _ { x } x \right) \sin \left( k _ { y } y \right) \cos ( \omega t )$. The boundary conditions give $k _ { x } = \pi n / L$ and $k _ { y } = \pi m / L$ by the same logic as in problem 9. Plugging this into the wave equation the simplifying gives
$$
\omega ^ { 2 } = \frac { \gamma } { \sigma } \left( k _ { x } ^ { 2 } + k _ { y } ^ { 2 } \right) , \quad \omega _ { n , m } = \sqrt { n ^ { 2 } + m ^ { 2 } } \frac { \pi v } { L } .
$$
Note that neither $n$ or $m$ can be zero, because then the standing wave solution just becomes zero. So the lowest frequency corresponds to $n = m = 1$, where $\omega = \sqrt { 2 } \pi v / L$.
(c) When a drum is hit at the center, it primarily excites the fundamental and some of the lower modes. When it's hit near the edge, it doesn't excite these modes, because it's close to a node for them. Higher modes are excited instead, leading to a "higher", "thinner" sound.
