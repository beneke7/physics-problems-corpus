---
id: physicscup-2023-p5
problem: physicscup-2023-p5
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Anindya Guria
solution_source_url: https://physicscup.ee/wp-content/uploads/PC2023/PC5/Anindya.pdf
selection_note: "Selected as the shortest and most elegant of the published LaTeX-compiled solutions (3 pp). It reduces the whole problem to one observation — the conjugate axis (the n=0 fringe) of each hyperbola family is itself among the given maxima — which makes the GeoGebra construction of the transverse axes immediate, and adds the bonus observation that the three sources are concyclic. (Lukas Schicht's top-ranked solution reaches the identical source coordinates over 7 pp; this one is the same physics, compact.)"
verification_status: unverified
rederivation_check: consistent
figure_files: [physicscup-2023-p5-sol-1.png, physicscup-2023-p5-sol-2.png]
---

## Solution
*Student solution by Anindya Guria, transcribed faithfully from the LaTeX source. The competition published no official solution. The figures are the author's GeoGebra screenshots (graphics view cropped from the full application window). The author labels the three reconstructed sources $D$, $E$, $F$; Lukas Schicht's independent solution finds the same three points (with labels $G,H,I$).*

### Setup: each maximum lies on three hyperbolas

We are told to assume the intensity of a single source's wave does not depend on distance. For any pair of identical point sources, constructive interference occurs where the path difference between the two waves is an integer multiple of the wavelength,
$$ |PB| - |PA| = n\lambda, \qquad n \in \mathbb{Z}. $$
For fixed $n$ this is the locus of points whose distances to two fixed points $A$, $B$ differ by a constant — a branch of a **hyperbola** with foci $A$ and $B$. So two sources produce a *family* of confocal hyperbolas, one branch per value of $n$.

**Claim.** For three sources, each intensity-maximum point must lie on *three* hyperbolas (one from each pair of sources).

For a point $P$ to be a local maximum of the three-source intensity, the light from all three sources must arrive in phase, i.e. each pairwise path difference must be an integer multiple of $\lambda$. If the path differences for pairs $(A,B)$ and $(A,C)$ are $n_1\lambda$ and $n_3\lambda$, then the difference for $(B,C)$ is $(n_3-n_1)\lambda$ — also an integer multiple. Hence every maximum lies simultaneously on one hyperbola from the $(A,B)$ family, one from the $(A,C)$ family, and one from the $(B,C)$ family. Equivalently, the three families share their maxima at the points where three branches cross. Reading the given chart, three distinct families of hyperbolas are indeed identifiable by inspection.

### Finding the three sources

![Figure 1: one family of confocal hyperbolic fringes identified among the given maxima. The conjugate axis (the n = 0 fringe, a straight line) lies among the points; a tangent drawn parallel to it touches a hyperbola branch at its vertex, and the perpendicular to the conjugate axis through that vertex is the transverse axis carrying the two foci.](../../../../../sources/physicscup/figures/physicscup-2023-p5-sol-1.png)

Very conveniently, each family of hyperbolas has its **conjugate axis** among the set of given points. The conjugate axis is the special case where the difference of distances from the two foci is zero ($n=0$), i.e. the perpendicular bisector of the segment joining the two foci.

To locate the foci of a family:

1. Construct a tangent to one of the hyperbola branches that is **parallel to the conjugate axis**. Because the conjugate axis is the line of symmetry "between" the branches, this tangent touches the branch at its vertex.
2. From that tangent point, draw the line **perpendicular to the conjugate axis**. This is precisely the **transverse axis** of the family — the straight line through both foci (sources).

Repeating for all three families gives three transverse axes. The three sources are the vertices of the triangle formed by these three transverse axes (each source lies on the two transverse axes of the two families that contain it).

To verify, pick any two of the found points (e.g. $D$ and $E$) as foci, draw a hyperbola through one of the maxima, and check that many other maxima lie on it — they do.

![Figure 2: verification. The three sources D, E, F sit at the vertices of the triangle formed by the three transverse axes (black). The three conjugate axes (red) — perpendicular bisectors of the source pairs — meet at the single point I3, which is equidistant from all three sources; the circle centred at I3 passes through D, E and F.](../../../../../sources/physicscup/figures/physicscup-2023-p5-sol-2.png)

### Coordinates of the sources

$$ D \equiv (-0.0415,\; 3.3382) $$
$$ E \equiv (-6,\; -2) $$
$$ F \equiv (1.4971,\; -8.6175) $$

### Appendix: a concyclic observation

Each conjugate axis is the locus of points equidistant from one pair of sources (the perpendicular bisector of that pair). The point where all three conjugate axes intersect — marked $I_3$ in Figure 2 — is therefore equidistant from all three sources. In other words, the three sources all lie on a single **circle** centred at $I_3$ (the circumcircle of the source triangle), as verified in the figure (black lines = conjugate axes, red lines = transverse axes).

---
*Re-derivation check (consistent): The reduction is standard wave optics and checks out. Two identical coherent sources give intensity $I \propto |1 + e^{i\Delta\varphi}|^2 \propto 1 + \cos\Delta\varphi$ with $\Delta\varphi = k(|PB|-|PA|) + \alpha$; maxima at $\Delta\varphi = 2\pi n$ are the confocal hyperbolas $|PB|-|PA| = (2\pi n - \alpha)/k$, the $n=0$ branch degenerating to the perpendicular bisector (for in-phase $\alpha = 0$). A three-source maximum requires all three pairwise phases to be multiples of $2\pi$, and $n_3 = n_1 + n_2$ follows by adding phases — so each maximum is a triple intersection, matching the author's claim. The construction "tangent parallel to conjugate axis $\to$ vertex $\to$ perpendicular = transverse axis through the foci" is geometrically valid for a hyperbola. The three perpendicular bisectors of the source pairs concur at the circumcentre, confirming the concyclic appendix. The author's three coordinates agree (up to relabelling and rounding) with Lukas Schicht's independent reconstruction $G=(-6,-2)$, $H=(-0.0415,3.338)$, $I=(1.497,-8.6176)$, providing a cross-check. The numerical coordinates themselves are GeoGebra read-offs, not re-derived here.*
