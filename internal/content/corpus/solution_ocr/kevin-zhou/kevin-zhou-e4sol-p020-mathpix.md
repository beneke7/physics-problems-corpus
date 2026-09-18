---
id: solution-ocr-kevin-zhou-e4sol-p020
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e4-p020]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 20. [A] Consider a point charge of mass $m$ and charge $q$ in the field of a magnetic monopole at the origin,
$$
\mathbf { B } = \frac { g } { r ^ { 2 } } \hat { \mathbf { r } } .
$$
In this problem we'll investigate the strange motion that results.
    (a) Argue that the speed $v$ is constant.
    (b) Show that the angular momentum $\mathbf { L }$ of the charge is not conserved, but that
$$
\mathbf { V } = \mathbf { L } - q g \hat { \mathbf { r } }
$$
is. The second term is the angular momentum stored in the fields of the charge and monopole.
    (c) Show that the charge moves on the surface of a cone.

Solution. (a) The force is $q \mathbf { v } \times \mathbf { B } \perp \mathbf { v }$, so no work is done on the particle, so its speed remains the same.


(b) Note that
$$
\dot { \hat { \mathbf { r } } } = \frac { d } { d t } \frac { \mathbf { r } } { r } = \frac { \dot { \mathbf { r } } r - \dot { r } \mathbf { r } } { r ^ { 2 } } = \frac { \dot { \mathbf { r } } r - \mathbf { r } \frac { \mathbf { r } \cdot \dot { \mathbf { r } } } { r } } { r ^ { 2 } } = ( \hat { \mathbf { r } } \cdot \hat { \mathbf { r } } ) \frac { \dot { \mathbf { r } } } { r } - \left( \hat { \mathbf { r } } \cdot \frac { \dot { \mathbf { r } } } { r } \right) \hat { \mathbf { r } } = \hat { \mathbf { r } } \times \left( \frac { \dot { \mathbf { r } } } { r } \times \hat { \mathbf { r } } \right) = \frac { 1 } { r ^ { 2 } } \mathbf { r } \times ( \dot { \mathbf { r } } \times \hat { \mathbf { r } } ) .
$$
We have $\dot { \mathbf { L } } = \boldsymbol { \tau } = \mathbf { r } \times \left( q \dot { \mathbf { r } } \times \left( g / r ^ { 2 } \right) \hat { \mathbf { r } } \right) = q g \dot { \hat { \mathbf { r } } }$, so $\mathbf { L } - q g \hat { \mathbf { r } }$ is conserved.
(c) Take coordinates so that V is directed along $\hat { \mathbf { z } }$ and the particle is instantaneously in the $x z$ plane. Now take the $y$-component of the above equation, to give $L _ { y } = 0$. In components, this tells us that $x p _ { z } - z p _ { x } = 0$, or in other words that $\dot { x } / \dot { z } = x / z$. By drawing similar triangles, this implies that the particle is momentarily moving so that $x / z$ is conserved. So in general $s / z$ is conserved, where $s$ is the distance to the $z$-axis. This defines a cone.
In a typical trajectory, the charge spirals in towards the monopole along this cone, reaches some minimum distance from it, then turns around and spirals out. In fact, if the cone is "cut and unfolded" and laid flat, the trajectory is a straight line! In other words, it is a geodesic on the cone. (Some aspects of this motion were covered in USAPhO 2026, problem A2.)

One can do problem 18 slickly using field transformations, an advanced subject we will cover in R3.
Idea 4: Field Transformations
If the electromagnetic field is $( \mathbf { E } , \mathbf { B } )$ in one reference frame, then in a reference frame moving with velocity v with respect to this frame, the components of the field parallel to v are

$$
E _ { \| } ^ { \prime } = E _ { \| } , \quad B _ { \| } ^ { \prime } = B _ { \| }
$$


while the components perpendicular are

$$
\mathbf { E } _ { \perp } ^ { \prime } = \gamma \left( \mathbf { E } _ { \perp } + \mathbf { v } \times \mathbf { B } \right) , \quad \mathbf { B } _ { \perp } ^ { \prime } = \gamma \left( \mathbf { B } _ { \perp } - \frac { \mathbf { v } } { c ^ { 2 } } \times \mathbf { E } \right) .
$$

Remark: Galilean Field Transformations
The nonrelativistic limit of the field transformation is useful, but one has to be careful in deriving it. You might think, what's the need for care? Can't we just send $c \rightarrow \infty$, Taylor expand the above expressions, and call it a day? The problem with this reasoning is that there's no such thing as setting $c \rightarrow \infty$. You can't change a fundamental constant, and moreover this statement isn't even dimensionally correct, as noted in P1. What we really mean by the nonrelativistic limit is restricting our attention to some subset of possible situations, within which relativistic effects don't matter.

For example, if we have a bunch of point charges with typical speed $v$, then the nonrelativistic limit is considering only situations where $v / c$ is small. In other words, we are taking $v / c \rightarrow 0$, not $c \rightarrow \infty$. Since the magnetic field of a point charge is $v / c ^ { 2 }$ times the electric field, the magnetic field ends up small. Now if we also consider boosts with small speeds $v$, then expanding the field transformations to lowest order in $v / c$ gives

$$
\mathbf { E } ^ { \prime } = \mathbf { E } , \quad \mathbf { B } ^ { \prime } = \mathbf { B } - \frac { \mathbf { v } } { c ^ { 2 } } \times \mathbf { E } .
$$

This is the nonrelativistic limit for situations where $E / B \gg c$, also called the electric limit.
However, there's another possibility. Suppose that we have a bunch of current carrying, approximately neutral wires. In this case, it's the electric fields that are small, $E / B \ll c$. Using this in the transformations above, we arrive at the distinct result

$$
\mathbf { B } ^ { \prime } = \mathbf { B } , \quad \mathbf { E } ^ { \prime } = \mathbf { E } + \mathbf { v } \times \mathbf { B }
$$

which apply for situations where $E / B \ll c$, also called the magnetic limit.
You might think we could improve the approximation by combining the two,

$$
\mathbf { E } ^ { \prime } = \mathbf { E } + \mathbf { v } \times \mathbf { B } , \quad \mathbf { B } ^ { \prime } = \mathbf { B } - \frac { \mathbf { v } } { c ^ { 2 } } \times \mathbf { E }
$$

but this isn't self-consistent. For example, if you apply a Galilean boost with speed $v$, and then a boost with speed $- v$, you don't get back the same fields you started with! A sensible Galilean limit is only possible if $E / B \gg c$ or $E / B \ll c$, which are called the electric and magnetic limits. It's only in relativity that $E$ and $B$ can be treated on an equal footing.

By the way, whenever relativity or similarly subtle physics is involved, internet sources will be generally poor. If you search for "Galilean electrodynamics", the first result will be a journal for papers that deny relativity. If you want to learn more, just read this classic paper.
