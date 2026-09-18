---
id: physicscup-2024-p2
problem: physicscup-2024-p2
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Lukas Schicht
solution_source_url: https://physicscup.ee/wp-content/uploads/2024/PC24-P2-sols/2.Lukas__.pdf
selection_note: "Selected as the most elegant + machine-readable of the LaTeX-compiled candidates (4 pp). The top-ranked Andrei Vila solution is 5 pp with a separate physics-motivation section; this one is shorter, has two clear explanatory sketches plus the GeoGebra construction, and lays the procedure out as a clean step table. Its answer O = (-1.12358, -0.58132) agrees exactly with the independent Aditya solution. The competition published no official solution."
verification_status: unverified
rederivation_check: consistent
figure_files: [physicscup-2024-p2-sol-1.png, physicscup-2024-p2-sol-2.png, physicscup-2024-p2-sol-3.png]
---

## Solution
*Student solution by Lukas Schicht, transcribed faithfully from the LaTeX source. The competition published no official solution. Figures 1 and 2 are the author's hand drawings; Figure 3 is the GeoGebra construction. Primed letters ($A'$, $B'$, $C'$, $D'$) denote object points on the circle; unprimed letters ($A$, $B$, $C$, $D$) denote their images on the ellipse.*

### Two lemmas about the imaging

Two facts about the thin-lens imaging are used (Figures 1 and 2):

- **(I)** Rays tangent to the circle are also tangent to the ellipse after refraction; equivalently, tangent lines to the circle are mapped to tangent lines to the ellipse.
- **(II)** Parallel incident rays converge to a single point in the focal plane.

![Figure 1: Rays tangent to the circle are also tangent to the ellipse after refraction. Moreover, tangent lines to the circle are mapped to tangents to the ellipse.](../../../../../sources/physicscup/figures/physicscup-2024-p2-sol-1.png)

![Figure 2: Parallel incident rays converge to a point in the focal plane.](../../../../../sources/physicscup/figures/physicscup-2024-p2-sol-2.png)

### Construction in GeoGebra

The following objects are drawn; the right column explains, with the help of the sketches, why the point $O$ found this way is the centre of the thin lens.

| Objects drawn in GeoGebra | Designation | Physical motivation |
|---|---|---|
| Both tangents to the ellipse that run through $F$; contact points of the tangent lines on the ellipse | $f$ and $g$ (orange); $A$ and $B$ | The two rays of light that originate tangentially from the circle at the points $A'$ and $B'$ and hit the lens perpendicularly run along the orange straight lines drawn in GeoGebra after refraction (see Figures 1 and 3). |
| Line through $A$ and $B$; straight line parallel to $h$ passing through $F$; perpendicular line passing through $F$ | $h$ (blue); $i$ (blue); $j$ (red) | Just as the line $A'B'$ is perpendicular to the optical axis, so is $h = AB$. This makes it possible to draw the focal plane ($i$) and the optical axis ($j$). |
| Tangent lines to the ellipse that run parallel to $h$; contact points of the tangents on the ellipse | $k$ and $l$ (green); $C$ and $D$ | The images of the two straight lines that run perpendicular to the optical axis and touch the circle at the points $C'$ and $D'$ are tangent lines to the ellipse that are also perpendicular to the optical axis (see Figure 1). |
| Lines through $A$ and $C$ as well as through $B$ and $D$; point of intersection (on $i$) | $m$ and $n$ (brown); $E$ | Parallel incident rays converge to a point in the focal plane. The two rays of light travelling through either $A'$ and $C'$ or $B'$ and $D'$ intersect at point $E$ after refraction. |
| Lines through $A$ and $D$ as well as through $B$ and $C$; point of intersection (on $i$) | $p$ and $q$ (brown); $G$ | The two rays that pass through $A'$ and $D'$ or $B'$ and $C'$ converge to the point $G$. As the images of the points lie on the refracted rays, it is possible to construct $E$ and $G$ from them (see Figure 2). |
| Circle with centre in $F$ running through $E$ and $G$ | $d$ (black) | The two parallel ray bundles that converge to $E$ or $G$ both hit the lens at an angle of $45^\circ$. As rays passing through the center of the lens are not refracted, $\angle GOE = 90^\circ$ (see Figure 2). Consequently, $O$ lies on the circle with diameter $\overline{EG}$. |
| Intersection of $d$ and $j$ (so that $i$ separates $O$ and the ellipse) | $O$ | $O$ is also located on the optical axis and can therefore be identified as the intersection of the optical axis ($j$) with the circle ($d$) lying to the left of the focal plane. |

![Figure 3: Constructions in GeoGebra.](../../../../../sources/physicscup/figures/physicscup-2024-p2-sol-3.png)

This gives

$$ \boxed{\; O = (-1.12358,\,-0.58132). \;} $$

---
*Re-derivation check (consistent): the construction is internally sound — the two axis-parallel tangent rays image to $A,B$ with $AB\perp$ axis, fixing the focal plane $i$ (through $F$) and the optical axis $j$ (through $F$, $\perp h$); two parallel ray bundles converge to $E$ and $G$ on the focal plane, and since each bundle makes $45^\circ$ with the axis while a ray through the centre is undeviated, $\angle GOE = 90^\circ$, placing $O$ on the circle $d$ of diameter $\overline{EG}$; the optical axis $j$ then selects $O$ as the intersection left of the focal plane. The final numeric coordinates are a GeoGebra output that cannot be recomputed without the .ggb data, but they agree to all five decimals with the independent Aditya solution, $O=(-1.12358,-0.58132)$.*
