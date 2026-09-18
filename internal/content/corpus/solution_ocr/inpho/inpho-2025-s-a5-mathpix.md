---
id: solution-ocr-inpho-2025-s-a5
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [inpho-2025-a5]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
5. Metalens

A metasurface is a two-dimensional, ultra-thin optical structure consisting of an array of nanospaced optical nano-elements (also known as meta-atoms) on a flat surface (typically an ultra-thin glass plate). The primary function of the nano-elements is to locally introduce a phase shift $\phi ( \overrightarrow { \mathbf { r } } )$ to the wave, incident at position $\overrightarrow { \mathbf { r } }$. This function, $\phi ( \overrightarrow { \mathbf { r } } )$, is called the phase profile of the metasurface.
Metalens has a circular metasurface with a circularly symmetric phase profile function, $\phi ( r )$, which depends on the distance $r$ of the point from the center of the metalens (see figure below). This type of metalens can be used for focusing incoming parallel rays to a point. Unlike normal lenses, the metalens will look just like an ultrathin circular disc.
![](../../../figures/solution-ocr/0cff2793432d9559ba77a438.jpg)
Consider two homogeneous media of refractive indices $n _ { 1 }$ and $n _ { 2 }$ separated by a metalens as shown in the figure below. Suppose a beam of plane wave is incident at point $Q$ (at distance $r$ from the pole $P$ ) on the metasurface at an angle of $\theta _ { 1 }$ from medium 1. Assume that the rays falling at $Q$ are in the plane containing $P Q$ and the axis of the lens ( $x - z$ plane). These rays will be refracted at an angle $\theta _ { 2 }$ in the medium 2. The angle of refraction $\theta _ { 2 }$ depends on $r$. Thus, the modified law of refraction for the metasurface can be written as

$$
n _ { 1 } \sin \theta _ { 1 } - n _ { 2 } \sin \theta _ { 2 } = f ( r )
$$

Similarly, the rays falling at $Q ^ { \prime }$, at a distance $r ^ { \prime }$, will be refracted by an angle $\theta _ { 2 } ^ { \prime }$.
![](../../../figures/solution-ocr/dd61b6a23bf9aba0632c8eca.jpg)

(a) [8 marks] Find $f ( r )$ in terms of $\phi ( r )$ and $k _ { o }$, the wave number of the incoming wave in a vacuum. To determine $f ( r )$, assume two rays in $x - z$ plane incident at an angle $\theta _ { 1 }$ at two infinitesimally close points, $r$ and $r + \Delta r$, are refracted by the same angle $\theta _ { 2 }$. You don't need to derive the exact functional form of $\phi ( r )$ for this part.

Solution:


![](../../../figures/solution-ocr/3e76658ab28c06f326226da2.jpg)
Consider two rays, which are close to each other, incident locally on metalens. The ray $O A$ is incident at an angle $\theta _ { 1 }$ at $r$ and exits in medium 2 at an angle $\theta _ { 2 }$. Similarly the ray $B B ^ { \prime }$ exits in medium 2 at an angle of $\theta _ { 2 }$ from $r + \Delta r$. The rays being very close to each other have a plane wavefront. Let wavefront AB propagate to A'B' in time $t$. Let $\psi _ { A } , \psi _ { B } , \psi _ { A ^ { \prime } }$ and $\psi _ { B ^ { \prime } }$ be phases at points $A , B , A ^ { \prime }$ and $B ^ { \prime }$ respectively. Then

$$
\begin{aligned}
& \psi _ { A ^ { \prime } } - \psi _ { A } = k _ { 2 } \Delta r \sin \theta _ { 2 } - \omega t + \phi ( r ) \\
& \psi _ { B ^ { \prime } } - \psi _ { B } = k _ { 1 } \Delta r \sin \theta _ { 1 } - \omega t + \phi ( r + \Delta r )
\end{aligned}
$$

Since these two phase differences must be equal, we get

$$
\begin{aligned}
k _ { 2 } \Delta r \sin \theta _ { 2 } - k _ { 1 } \Delta r \sin \theta _ { 1 } & = \phi ( r + \Delta r ) - \phi ( r ) \\
n _ { 2 } \sin \theta _ { 2 } - n _ { 1 } \sin \theta _ { 1 } & = \frac { 1 } { k _ { 0 } } \frac { \phi ( r + \Delta r ) - \phi ( r ) } { \Delta r } \rightarrow \frac { 1 } { k _ { 0 } } \frac { d \phi ( r ) } { d r }
\end{aligned}
$$

Alternate solution:
Time interval for the wavefront to travel from $A$ to $A ^ { \prime }$ is equal to the time taken by the wavefront to travel from $B$ to $B ^ { \prime }$.

$$
\begin{equation*}
\tau _ { A A ^ { \prime } } + \tau _ { A ^ { \prime } } = \tau _ { B B ^ { \prime } } + \tau _ { B ^ { \prime } } \tag{5.1}
\end{equation*}
$$

where $\tau _ { B B ^ { \prime } }$ is the time it takes for point B on the wavefront (traveling at speed $v _ { 1 }$ ) to reach point $\mathrm { B } ^ { \prime }$, and $\tau _ { A A ^ { \prime } }$ is the time it takes the transmitted portion of that same wavefront (traveling a speed $v _ { 2 }$ ) to reach point A' from point A. The time delays due to the metasurface at points A and B' are $\tau _ { A }$ and $\tau _ { B }$, respectively. From figure

$$
\begin{gathered}
\tau _ { A A ^ { \prime } } = \frac { 1 } { c } \Delta r n _ { 2 } \sin \theta _ { 2 } \\
\tau _ { B B ^ { \prime } } = \frac { 1 } { c } \Delta r n _ { 1 } \sin \theta _ { 1 } \\
\tau _ { A } = \frac { \phi _ { A } } { c k _ { o } } = \frac { \phi ( r ) } { c k _ { o } } \\
\tau _ { B } ^ { \prime } = \frac { \phi _ { A } } { c k _ { o } } = \frac { \phi ( r + \Delta r ) } { c k _ { o } }
\end{gathered}
$$

Substituting above terms in Eq.5.1, we get

$$
\Delta r \sin \theta _ { 2 } + \frac { \Phi ( r ) } { k _ { o } } = \Delta r \sin \theta _ { 1 } + \frac { \Phi ( r + \Delta r ) } { k _ { 0 } }
$$


Simplifying:
$$
\frac { \Phi ( r + \Delta r ) - \Phi ( r ) } { \Delta r } = \frac { 1 } { k _ { 0 } } \frac { d \Phi } { d r }
$$
This gives the relation:
$$
\frac { 1 } { k _ { 0 } } \frac { d \Phi } { d r } = n _ { 2 } \sin \theta _ { 2 } - n _ { 1 } \sin \theta _ { 1 }
$$
(b) [4 marks] Derive an expression for the phase profile $\phi ( r )$, to convert a plane wavefront to spherical wavefront, with light being focused to a point $F$ on the axis (see figure below), which is at a distance $f$ from the pole P.
![](../../../figures/solution-ocr/fb695067b7ed31771a1f7008.jpg)

Solution: From the previous part

$$
n _ { 2 } \sin \theta _ { 2 } - n _ { 1 } \sin \theta _ { 1 } = \frac { 1 } { k _ { o } } \frac { d \phi } { d r }
$$

From the above figure, the ray arriving at $r$ (with $\theta _ { 1 } = 0$ ) must bend by an angle $\theta _ { 2 } = \sin ^ { - 1 } \left( \frac { r } { \sqrt { f ^ { 2 } + r ^ { 2 } } } \right)$. Thus,

$$
\frac { n _ { 2 } r } { \sqrt { \left( f ^ { 2 } + r ^ { 2 } \right) } } - 0 = \frac { 1 } { k _ { o } } \frac { d \phi } { d r }
$$

Simplifying above equation, we get

$$
\phi ( r ) = \pm k _ { 2 } \left( \sqrt { \left( r ^ { 2 } + f ^ { 2 } \right) } - f \right)
$$

where $k _ { 2 } = k _ { o } n _ { 2 }$

(c) [3 marks] Consider a metalens whose phase profile is obtained in part (b). For the paraxial approximation, derive an expression for the lens equation, having object distance $u$ and image distance being $v$, with focal length $f$ (see figure below).

Solution: We know that

$$
n _ { 2 } \sin \theta _ { 2 } - n _ { 1 } \sin \theta _ { 1 } = \frac { 1 } { k _ { o } } \frac { d \phi } { d r }
$$

For paraxial rays, we can use small angle approximation, $\sin \theta _ { 1 } = r / u$ and then above


![](../../../figures/solution-ocr/03d3bef8ad7c6b62dc2fe684.jpg)
equation becomes

$$
n _ { 2 } \theta _ { 2 } - n _ { 1 } \theta _ { 1 } = \frac { 1 } { k _ { o } } \frac { d \phi } { d r }
$$

We know that

$$
\frac { 1 } { k _ { 0 } } \frac { d \phi } { d r } = \frac { n _ { 2 } r } { \sqrt { \left( r ^ { 2 } + f ^ { 2 } \right) } }
$$

For paraxial approximation, we get

$$
\frac { 1 } { k _ { 0 } } \frac { d \phi } { d r } = \frac { n _ { 2 } r } { \sqrt { \left( r ^ { 2 } + f ^ { 2 } \right) } } \approx n _ { 2 } \frac { r } { f }
$$

Using these approximations, we get

$$
\frac { n _ { 1 } } { u } + \frac { n _ { 2 } } { v } = \frac { n _ { 2 } } { f }
$$

If $n _ { 1 } = n _ { 2 }$, then the above equation becomes

$$
\begin{equation*}
\frac { 1 } { u } + \frac { 1 } { v } = \frac { 1 } { f } \tag{5.2}
\end{equation*}
$$
