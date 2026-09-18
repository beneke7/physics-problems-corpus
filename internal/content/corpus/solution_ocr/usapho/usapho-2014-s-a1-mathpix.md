---
id: solution-ocr-usapho-2014-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2014_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2014-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A1
Inspired by: http://www.wired.com/wiredscience/2012/04/a-leaning-motorcycle-on-a-vertical-wall/
A unicyclist of total height $h$ goes around a circular track of radius $R$ while leaning inward at an angle $\theta$ to the vertical. The acceleration due to gravity is $g$.

a. Suppose $h \ll R$. What angular velocity $\omega$ must the unicyclist sustain?

## Solution

We work in a frame rotating with angular velocity $\omega$, where the unicyclist is static. Four forces act on the unicyclist: a normal and frictional force at the point of contact, gravity downwards at the center of mass, and a fictitious centrifugal force.
If $h \ll R$, all parts of the unicyclist are at a distance of approximately $R$ from the center of the circle, so the centripetal acceleration of every part of the unicyclist is $\omega ^ { 2 } R$. The centrifugal force can then be taken to act at the center of mass for purposes of computing the torque. If the center of mass is a distance $l$ from the point of contact, the torque about the point of contact is

$$
\tau = m \omega ^ { 2 } R l \cos \theta - m g l \sin \theta
$$

Since the unicyclist is stationary in this frame, $\tau = 0$, and solving for $\omega$ gives

$$
\omega = \sqrt { \frac { g } { R } \tan \theta } .
$$

b. Now model the unicyclist as a uniform rod of length $h$, where $h$ is less than $R$ but not negligible. This refined model introduces a correction to the previous result. What is the new expression for the angular velocity $\omega$ ? Assume that the rod remains in the plane formed by the vertical and radial directions, and that $R$ is measured from the center of the circle to the point of contact at the ground.

## Solution

The centripetal acceleration now varies along the length of the unicyclist. In the rotating frame, the torque about the point of contact is given by

$$
\tau _ { c } = \int \omega ^ { 2 } r z d m
$$

where $r$ is the distance from the center of the circle, $z$ is the height above the ground, and $d m$ is a mass element. Because the mass of the unicyclist is uniformly distributed along a length $h$,

$$
d m = \frac { m } { h } d s
$$


where $s$ is the length along the unicyclist. Then

$$
\tau _ { c } = \int _ { 0 } ^ { h } \omega ^ { 2 } ( R - s \sin \theta ) ( s \cos \theta ) \frac { m } { h } d s = m \omega ^ { 2 } h \cos \theta \left( \frac { R } { 2 } - \frac { h } { 3 } \sin \theta \right) .
$$

Gravity continues to act at the center of mass, a distance $h / 2$ from the point of contact, and in the opposite direction,

$$
\tau _ { g } = - m g \frac { h } { 2 } \sin \theta .
$$

Again, the total torque is zero, so $\tau _ { c } + \tau _ { g } = 0$. Solving for $\omega$ gives

$$
\omega = \sqrt { \left( \frac { g } { R } \tan \theta \right) \left( 1 - \frac { 2 } { 3 } \frac { h } { R } \sin \theta \right) ^ { - 1 } } .
$$
