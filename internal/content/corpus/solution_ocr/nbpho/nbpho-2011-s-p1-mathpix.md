---
id: solution-ocr-nbpho-2011-s-p1
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2011_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2011-spool]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. Spool (12 points) i) First solution. The momentary rotation centre of the spool is the contact point $P$ with the floor (since this point is at rest). So, the velocity of the spool is $u ^ { \prime } = R \omega$, where $\omega$ is the angular velocity. Consider triangle $P O A$, where $A$ is defined as the point where the loose end of the rope meets the inner part of the spool at the current moment of time, but which is actually a point of the spool, i.e. it rolls together with the spool); $O$ is the centre of the spool. Let us denote $\angle P A O = \beta$; it is easy to see that $\angle A O P = \pi - \alpha$. The velocity $\vec { v } _ { A }$ of the point $A$ is perpendicular to $P A$ and, hence, forms angle $\beta$ with the loose end of the rope. Its projection to the rope equals to $u$, therefore $v _ { A } = u / \cos \beta$. Further, $\omega = v _ { A } / l$, where $l = | A P |$ can be found from the cosine theorem: $l = \sqrt { R ^ { 2 } + r ^ { 2 } + 2 R r \cos \alpha }$. The angle $\beta$ can be found using the sine theorem for the triangle $A O P : \sin \beta = \frac { R \sin \alpha } { l }$. Combining everything together we end up with

$$
u ^ { \prime } = \frac { u R } { \sqrt { R ^ { 2 } \cos ^ { 2 } \alpha + r ^ { 2 } + 2 R r \cos \alpha } } = \frac { u R } { | R \cos \alpha + r | } .
$$

Second solution. Let us decompose the velocity $\vec { v } _ { A }$ into two components: the tangential component (parallel to the rope) equals (by modulus) to $u$; let us denote the radial component as $u _ { r }$. Since the distance between $O$ and $A$ is constant, the projection of the velocities of $O$ and $A$ to the line $O A$ are equal:

$$
u _ { r } = v \sin \alpha \Rightarrow v = u _ { r } / \sin \alpha \Rightarrow \omega = u _ { r } / R \sin \alpha .
$$

The vertical component of the velocity of the point $A$ remains unchanged if we switch the laboratory system of reference with the system associated with point $O$; hence,

$$
\begin{gathered}
u \sin \alpha - u _ { r } \cos \alpha = \omega r \sin \alpha = u _ { r } r / R \Rightarrow \\
v = \frac { u _ { r } } { \sin \alpha } = \frac { u R } { R \cos \alpha + r } .
\end{gathered}
$$

ii) (2 pts) The easiest way to solve this part is to use the energy balance for infinitesimal displacement of the cylinder and apply the answer to the previous question:

$$
\begin{aligned}
F u \cdot d t & = d \left[ \frac { M } { 2 } v ^ { 2 } \left( 1 + \frac { J } { M R ^ { 2 } } \right) \right] = M v d v \left( 1 + \frac { J } { M R ^ { 2 } } \right) \\
a & = \frac { d v } { d t } = \frac { F u } { M v \left( 1 + \frac { J } { M R ^ { 2 } } \right) } = \frac { F } { M } \cdot \frac { \cos \alpha + \frac { r } { R } } { 1 + \frac { J } { M R ^ { 2 } } }
\end{aligned}
$$

iii) Let us write the force balance projection to the horizontal axis assuming that the spool is at the edge of slipping, i.e. the friction force $F _ { f } = \mu _ { \min } N$, where $N = m g - F \sin \alpha$ is the normal force:
$M a = F \cos \alpha + \mu _ { \text {min } } N = F \cos \alpha + \mu _ { \text {min } } ( M g - F \sin \alpha )$. Using the result of the previous task, we can use this equation directly to obtain an expression for the minimal allowed value of the coefficient of friction:

$$
\mu _ { \min } = \frac { \left| \frac { r } { R } - \frac { J } { M R ^ { 2 } } \cos \alpha \right| } { \left( 1 + \frac { J } { M R ^ { 2 } } \right) \left| \frac { M g } { F } - \sin \alpha \right| }
$$

iv) The angular moment of the spool with respect to the edge of the threshold conserves during the impact (since the impact force has zero arm):

$$
\begin{gathered}
M u ( R - H ) + J \frac { u } { R } = \left( J + M R ^ { 2 } \right) \frac { v } { R } \Rightarrow \\
v = u \left( 1 - \frac { H / R } { 1 + \frac { J } { M R ^ { 2 } } } \right)
\end{gathered}
$$

v) From the energy conservation law we obtain immediately

$$
\begin{aligned}
\left( J + M R ^ { 2 } \right) \frac { v ^ { 2 } } { R ^ { 2 } } & = \left( J + M R ^ { 2 } \right) \frac { w ^ { 2 } } { R ^ { 2 } } + 2 M g H \Rightarrow \\
w & = \sqrt { v ^ { 2 } - \frac { 2 g H } { 1 + \frac { J } { M R ^ { 2 } } } } .
\end{aligned}
$$

vi) The spool is the most prone to jumping immediately after the impact; the gravity force needs to be large enough to bind the centre of mass to the rotational motion around the edge of the threshold:

$$
\begin{aligned}
\frac { M v ^ { 2 } } { R } & \leq g \frac { R - H } { R } \Rightarrow v ^ { 2 } \leq \frac { g } { M } ( R - H ) \Rightarrow \\
u _ { 0 } & = \sqrt { \frac { g } { M } ( R - H ) } \frac { 1 + \frac { J } { M R ^ { 2 } } } { 1 + \frac { J } { M R ^ { 2 } } - \frac { H } { R } } .
\end{aligned}
$$
