---
id: physicscup-2025-p4
problem: physicscup-2025-p4
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Joshua Wang
solution_source_url: https://physicscup.ee/wp-content/uploads/2025/09/P4-Joshua-Wang.pdf
selection_note: "Selected as the most elegant and machine-readable of the published solutions (LaTeX-compiled, 2 pp, single construction figure). Far shorter than the prize-sharing top candidate (Qirui He, 4 pp) while giving a clean projective/homothety argument: the lens axis is the perpendicular through O to a line MN constructed parallel (by a homothety centred at O) to the focal line."
verification_status: unverified
rederivation_check: consistent
figure_files: [physicscup-2025-p4-sol-1.png]
---

## Solution
*Student solution by Joshua Wang, transcribed faithfully from the LaTeX source. The competition published no official solution. The figure is the author's GeoGebra construction (green line "Axis" is the result); points $F,G,I,K,L,M,N$ and the auxiliary circle through $K,L$ are construction objects defined in the text below.*

First, we note that a point and its image are collinear with $O$, so a line through $O$ is its own image. Thus, the two tangents to the ellipse through $O$ are also tangent to the image circle. Construct the bisector of these tangents, which contains the center of the image circle.

Let the bisector intersect the ellipse at $F$ and $G$, and let $I$ be the intersection of the tangents to the ellipse at $F$ and $G$. For the moment, assume that we know where the image circle is located; let the bisector intersect the circle at $L$ and $K$. Let $M$ be the intersection of the tangent to the circle at $K$ and the focal line on the circle's side, and define $N$ similarly.

Note that lines $KM$ and $IG$ are images, and $LN$ and $IF$ are images. Because $M$ lies on the focal line, it maps to the point at infinity on ray $IG$, so $OM \parallel IG$. Similarly, $ON \parallel IF$.

Now, we can work backwards. Construct an arbitrary circle tangent to the ellipse's tangents. Define $K$ and $L$ be the intersections of the circle with the bisector. Define $M$ to be the intersection of the tangent at $K$ with the parallel to $IG$ through $O$, and define $N$ similarly. Then, we know that $MN$ is parallel to the focal line through a homothety centered at $O$, letting us construct the lens axis as the perpendicular to $MN$ through $O$.

![Construction. The two tangents to the ellipse from the lens center $O$ are also tangent to the (unknown) image circle; their bisector is the magenta line through $O$, meeting the ellipse at $F,G$, and an auxiliary circle (centre $H$) tangent to both tangents at $K,L$. Tangents to that circle at $K,L$ meet the lines $OM\parallel IG$ and $ON\parallel IF$ at $M,N$. The line $MN$ is parallel to the focal line, and the lens axis (green, "Axis") is the perpendicular to $MN$ through $O$.](../../../../../sources/physicscup/figures/physicscup-2025-p4-sol-1.png)

---
*Re-derivation check (consistent): the construction is self-consistent under the thin-lens mapping. (1) A ray through the lens centre $O$ is undeviated, so $O$, any object point, and its image are collinear and a line through $O$ maps to itself; hence the two object-tangents through $O$ coincide with the two image-tangents, and the ellipse's two tangents from $O$ are tangent to the image circle. (2) For the image circle, $IF$ and $IG$ are the object lines whose images are the tangents at the corresponding circle points; a point on the focal line images to infinity, so $M$ (on the focal line) has image at infinity along $IG$, forcing $OM\parallel IG$, and likewise $ON\parallel IF$ — this fixes the directions $OM,ON$ independently of which concentric image circle is chosen. (3) Replacing the unknown image circle by an arbitrary circle tangent to the same two tangents is a homothety centred at $O$ (both circles are inscribed in the same angle at $O$); a homothety centred at $O$ preserves the directions $OM,ON$ and maps the true $MN$ to the constructed $MN$ by a parallel translation along the homothety, so the constructed $MN$ is parallel to the true focal line. (4) The optical axis is perpendicular to the focal line and passes through $O$, hence it is the perpendicular to $MN$ through $O$. Every step is a ruler-and-compass operation with no trial-and-error, as required. Numerically reproducing the author's reported axis slope to 8 digits would require running the GeoGebra construction and is not performed here; the construction logic is the author's.*
