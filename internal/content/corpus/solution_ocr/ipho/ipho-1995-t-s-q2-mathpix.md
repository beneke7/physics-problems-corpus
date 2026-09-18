---
id: solution-ocr-ipho-1995-t-s-q2
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1995_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-1995-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Solutions to Theoretical Question 2

(a) Snell's Law may be expressed as
$$
\begin{equation*}
\frac { \sin \theta } { \sin \theta _ { 0 } } = \frac { c } { c _ { 0 } } , \tag{1}
\end{equation*}
$$
where $c$ is the speed of sound.
Consider some element of ray path $d s$ and treat this as, locally, an arc of a circle of radius $R$. Note that $R$ may take up any value between 0 and $\infty$. Consider a ray component which is initially directed upward from $S$.
![](../../../figures/solution-ocr/23a34d827aee55e9aa5a9dc6.jpg)
In the diagram, $d s = R d \theta$, or $\frac { d s } { d \theta } = R$.
From equation (1), for a small change in speed $d c$,
$$
\cos \theta d \theta = \frac { \sin \theta _ { 0 } } { c _ { 0 } } d c
$$
For the upwardly directed ray $c = c _ { 0 } + b z$ so $d c = b d z$ and
$$
\frac { \sin \theta _ { 0 } } { c _ { 0 } } b d z = \cos \theta d \theta , \text { hence } d z = \frac { c _ { 0 } } { \sin \theta _ { 0 } } \frac { 1 } { b } \cos \theta d \theta
$$
We may also write (here treating $d s$ as straight) $d z = d s \cos \theta$. So
$$
d s = \frac { c _ { 0 } } { \sin \theta _ { 0 } } \frac { 1 } { b } d \theta
$$
Hence
$$
\frac { d s } { d \theta } = R = \frac { c _ { 0 } } { \sin \theta _ { 0 } } \frac { 1 } { b } .
$$
This result strictly applies to the small arc segments $d s$. Note that from equation (1), however, it also applies for all $\theta$, i.e. for all points along the trajectory, which therefore forms an arc of a circle with radius $R$ until the ray enters the region $z < 0$.
(b) ![](../../../figures/solution-ocr/4e98c4f54ad1a01e1ca37f30.jpg)

Here

$$
\begin{aligned}
z _ { s } & = R - R \sin \theta _ { 0 } \\
& = R \left( 1 - \sin \theta _ { 0 } \right) \\
& = \frac { c _ { 0 } } { b \sin \theta _ { 0 } } \left( 1 - \sin \theta _ { 0 } \right) ,
\end{aligned}
$$

from which

$$
\theta _ { 0 } = \sin ^ { - 1 } \left[ \frac { c _ { 0 } } { b z _ { s } + c _ { 0 } } \right] .
$$

(c)
![](../../../figures/solution-ocr/501a9e192f549b87e0a10b8a.jpg)
The simplest pathway between $S$ and $H$ is a single arc of a circle passing through $S$ and $H$. For this pathway:

$$
X = 2 R \cos \theta _ { 0 } = \frac { 2 c _ { 0 } \cos \theta _ { 0 } } { b \sin \theta _ { 0 } } = \frac { 2 c _ { 0 } } { b } \cot \theta _ { 0 } .
$$

Hence

$$
\cot \theta _ { 0 } = \frac { b X } { 2 c _ { 0 } } .
$$

The next possibility consists of two circular arcs linked as shown.
![](../../../figures/solution-ocr/9e6f23b9fec31997610677a0.jpg)
For this pathway:

$$
\frac { X } { 2 } = 2 R \cos \theta _ { 0 } = \frac { 2 c _ { 0 } } { b } \cot \theta _ { 0 } .
$$

i.e.

$$
\cot \theta _ { 0 } = \frac { b X } { 4 c _ { 0 } } .
$$

In general, for values of $\theta _ { 0 } < \frac { \pi } { 2 }$, rays emerging from $S$ will reach $H$ in $n$ arcs for launch angles given by

$$
\theta _ { 0 } = \cot ^ { - 1 } \left[ \frac { b X } { 2 n c _ { 0 } } \right] = \tan ^ { - 1 } \left[ \frac { 2 n c _ { 0 } } { b X } \right]
$$

where $n = 1,2,3,4 , \ldots$
Note that when $n = \infty , \theta _ { 0 } = \frac { \pi } { 2 }$ as expected for the axial ray.
(d)
With the values cited, the four smallest values of launch angle are

| $n$ | $\theta _ { 0 }$ (degrees) |
| :--- | :--- |
| 1 | 86.19 |
| 2 | 88.09 |
| 3 | 88.73 |
| 4 | 89.04 |


(e) The ray path associated with the smallest launch angle consists of a single arc as shown:
![](../../../figures/solution-ocr/1247273bc1ef541d300b9486.jpg)
We seek
$$
\int _ { 1 } ^ { 3 } d t = \int _ { 1 } ^ { 3 } \frac { d s } { c }
$$
Try first:
$$
t _ { 12 } = \int _ { 1 } ^ { 2 } \frac { d s } { c } = \int _ { \theta _ { 0 } } ^ { \pi / 2 } \frac { R d \theta } { c }
$$
Using
$$
R = \frac { c } { b \sin \theta }
$$
gives
$$
t _ { 12 } = \frac { 1 } { b } \int _ { \theta _ { 0 } } ^ { \pi / 2 } \frac { d \theta } { \sin \theta }
$$
so that
$$
t _ { 12 } = \frac { 1 } { b } \left[ \ln \tan \frac { \theta } { 2 } \right] _ { \theta _ { 0 } } ^ { \pi / 2 } = - \frac { 1 } { b } \ln \tan \frac { \theta _ { 0 } } { 2 }
$$
Noting that $t _ { 13 } = 2 t _ { 12 }$ gives
$$
t _ { 13 } = - \frac { 2 } { b } \ln \tan \frac { \theta _ { 0 } } { 2 } .
$$
For the specified $b$, this gives a transit time for the smallest value of launch angle cited in the answer to part (d), of
$$
t _ { 13 } = 6.6546 \mathrm {~s}
$$
The axial ray will have travel time given by
$$
t = \frac { X } { c _ { 0 } }
$$
For the conditions given,
$$
t _ { 13 } = 6.6666 \mathrm {~s}
$$
thus this axial ray travels slower than the example cited for $n = 1$, thus the $n = 1$ ray will arrive first.
