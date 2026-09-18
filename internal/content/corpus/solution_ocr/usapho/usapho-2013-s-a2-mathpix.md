---
id: solution-ocr-usapho-2013-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2013_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2013-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A2
A solid round object of radius $R$ can roll down an incline that makes an angle $\theta$ with the horizontal. Assume that the rotational inertia about an axis through the center of mass is given by $I = \beta m R ^ { 2 }$. The coefficient of kinetic and static friction between the object and the incline is $\mu$. The object moves from rest through a vertical distance $h$.

a. If the angle of the incline is sufficiently large, then the object will slip and roll; if the angle of the incline is sufficiently small, then the object with roll without slipping. Determine the angle $\theta _ { c }$ that separates the two types of motion.
b. Derive expressions for the linear acceleration of the object down the ramp in the case of
    i. Rolling without slipping, and
    ii. Rolling and slipping.

## Solution

a. Answering this question essentially requires answering part (b) first. As the object rolls down the incline, the torque about the center of mass is
$$
\tau = R f
$$
where $f$ is the friction force. Then the angular acceleration is
$$
\alpha = \frac { \tau } { I } = \frac { f } { \beta m R } .
$$
The linear acceleration of the object satisfies
$$
m a = m g \sin \theta - f .
$$
Now suppose the object is rolling without slipping. Then $a = \alpha R = f / \beta m$, and combining our equations gives
$$
m a = m g \sin \theta - \beta m a \quad \Rightarrow \quad a = \frac { g \sin \theta } { 1 + \beta } .
$$
Then the friction force is
$$
f = \beta m a = \frac { \beta m g \sin \theta } { 1 + \beta } .
$$
The critical angle for slipping is the angle where $f$ is equal to the maximum possible static friction force, $f = \mu m g \cos \theta$. Combining and solving gives
$$
\tan \theta _ { c } = \mu \left( 1 + \frac { 1 } { \beta } \right) .
$$
b. i. As found above, the acceleration is
$$
a = \frac { g \sin \theta } { 1 + \beta } .
$$
    ii. In this case, the friction force is equal to the kinetic friction, $f = \mu m g \cos \theta$. Then
$$
m a = m g \sin \theta - \mu m g \cos \theta \quad \Rightarrow \quad a = g ( \sin \theta - \mu \cos \theta ) .
$$
Note that $a$, as a function of $\theta$, is continuous at the angle $\theta _ { c }$. This is because we took the coefficients of kinetic and static friction to be equal.
