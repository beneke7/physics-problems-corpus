---
id: physicscup-2022-p4
problem: physicscup-2022-p4
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Vlad-Ștefan Oros
solution_source_url: https://physicscup.ee/wp-content/uploads/2022/P4solutions/oros-PhysCup__22___Problem_4.pdf
selection_note: "Selected as the top-ranked published solution (LaTeX-compiled, 3 pp). Kalda awarded it 20% of the bonus (a 19-step ruler-only construction). The most elegant approach: it reduces the construction to two harmonic-range conjugations, both built from almost the same set of auxiliary objects."
verification_status: unverified
rederivation_check: consistent
figure_files: [physicscup-2022-p4-sol-1.png]
---

## Solution
*Student solution by Vlad-Ștefan Oros (Romania), transcribed faithfully from the LaTeX source. The competition published no official solution. The figure is the author's GeoGebra construction. Throughout, $A'B'$ etc. denote signed/lengths along the image line; $LA$ denotes the line through $L$ and $A$.*

The outline is: first prove two general results (one optical, one projective-geometric), then apply them.

### General considerations

**Theorem (Newton's form of the lens equation).** Let $x_1$ be the distance between the object and the object focal plane of a lens, and let $x_2$ be the distance between the image and the image focal plane. If $f$ is the focal length of the lens, then
$$ x_1 x_2 = f^2. \tag{1} $$

*Proof.* According to the thin lens equation,
$$ \frac{1}{f+x_1} + \frac{1}{f+x_2} = \frac{1}{f} \implies 2f^2 + f(x_1+x_2) = f^2 + f(x_1+x_2) + x_1 x_2 \implies x_1 x_2 = f^2. \tag{2} $$
$\qquad\square$

**Definition (harmonic range).** Let $A$, $B$, $C$, and $D$ be four collinear points, in this order. The points are said to form a *harmonic range* if and only if
$$ AD \cdot BC = AB \cdot CD. \tag{3} $$
In this case $D$ is said to be the *harmonic conjugate* of $B$ with respect to $A$ and $C$; $C$ is the harmonic conjugate of $A$ with respect to $B$ and $D$; and so on.

**Theorem (ruler construction of the harmonic conjugate).** Let there be three collinear points $A$, $B$ and $C$. To construct the harmonic conjugate $D$ of $B$ with respect to $A$ and $C$, the following construction can be used:

- Pick any arbitrary point $L$ that is non-collinear with $A$, $B$ and $C$;
- Pick a line $l$ that passes through $D$ and that intersects $LA$ in $M$ and $LC$ in $N$;
- Let $K \in AN \cap CM$;
- Construct $D$ as the intersection of the line $AB$ with $LK$.

### The actual problem

- The image of any line is a line, and the original line and its image meet at the plane of the lens. As expected, $A'$, $B'$ and $C'$ are collinear — and $D'$ will lie on this same line.

- Let the intersection of the image focal plane of the lens and this line be $E$. (We do not yet know where $E$ is.) Let $x_{A'}$ be the distance between the image focal plane and the point $A'$, and the same for the other image points too. Then, these distances will be proportional to the distances between the respective points and $E$ (the only difference is a factor that relates to the orientation of the focal plane with respect to the line):
$$ \frac{x_{A'}}{EA'} = \frac{x_{B'}}{EB'} = \frac{x_{C'}}{EC'} = \frac{x_{D'}}{ED'}. \tag{4} $$

- Let us denote the distances between the object focal plane and the points $A$, $B$, $C$ and $D$ by $x_A$, $x_B$, $x_C$ and $x_D$, respectively. According to the theorem proved in Section 1, we know that
$$ x_A x_{A'} = f^2 \implies x_{A'} = \frac{f^2}{x_A}, \tag{5} $$
and the same for the other three points.

- $B$ is the midpoint of $AC$ — hence,
$$ x_B = \frac{x_A + x_C}{2}. \tag{6} $$
Using Eq. (5) and its equivalents for the other points and simplifying, this means that
$$ \frac{2}{x_{B'}} = \frac{1}{x_{A'}} + \frac{1}{x_{C'}} \implies \frac{x_{A'} - x_{B'}}{x_{B'} - x_{C'}} = \frac{x_{A'}}{x_{C'}}; \tag{7} $$
using the above-shown proportionality, we can write this as
$$ \frac{EA'}{EB' - EC'} = \frac{EA'}{EC'} \implies \frac{EA'}{B'C'} = \frac{EA' - EB'}{EC'} \implies A'B' \cdot EC' = B'C' \cdot EA'. \tag{8} $$
This proves that $A'$, $B'$, $C'$ and $E$, in this order, form a harmonic range — and, hence, we can construct $E$ as the harmonic conjugate of $B'$ with respect to $A'$ and $C'$.

- Similarly, $C$ is the midpoint of $BD$; hence, according to an analogous reasoning, we find that
$$ B'C' \cdot ED' = C'D' \cdot EB', \tag{9} $$
so that $B'$, $C'$, $D'$ and $E$, in this order, form a harmonic range, and we can construct $D'$ as the harmonic conjugate of $B'$ with respect to $C'$ and $E$.

Hence, to construct $D'$, we must first construct $E$. However, as a simplification, both constructions can be done using almost the same set of objects.

To do this, let $L$ be an arbitrary point and $l$ a line through $B'$ — in the GeoGebra file, this line is colored blue. Let the intersection points of $LA'$ and $LC'$ with $l$ be $M$ and $N$, respectively, and let the intersection of $A'N$ and $C'M$ be $K$. Then, $E$ will lie at the intersection between $A'B'$ and $LK$.

Further, let the intersection of $LE$ with $l$ be $P$, and let the intersection of $EN$ and $C'P$ be $Q$. Then, $D'$ will lie at the intersection between $A'B'$ and $LQ$. The coordinates of $D'$ are
$$ \boxed{\,D' = (7.115,\ 2.898).\,} $$

![The full GeoGebra construction: from the auxiliary point L and the blue line l through B′, points M, N, K give the harmonic conjugate E of B′ w.r.t. A′,C′; then P, Q reuse the same scaffold to give D′ as the harmonic conjugate of B′ w.r.t. C′ and E.](../../../../../sources/physicscup/figures/physicscup-2022-p4-sol-1.png)

---
*Re-derivation check (consistent): The two key relations are verified algebraically. From Newton's relation (1), $x_{A'}=f^2/x_A$ etc., so the arithmetic-mean condition $x_B=(x_A+x_C)/2$ on the object side becomes the harmonic-mean condition $2/x_{B'}=1/x_{A'}+1/x_{C'}$ on the image side; cross-multiplying gives $2x_{A'}x_{C'}=x_{B'}(x_{A'}+x_{C'})$, i.e. $x_{A'}-x_{B'}=(x_{B'}-x_{C'})\,x_{A'}/x_{C'}$, reproducing (7). With $x_{P'}\propto EP'$ (4), the proportional differences turn (7) into $A'B'\cdot EC' = B'C'\cdot EA'$, the harmonic-range condition (3) for $(A',B',C',E)$ — and identically for $(B',C',D',E)$ via $C$ being the midpoint of $BD$. The construction in the Theorem is the standard complete-quadrilateral (ruler-only) harmonic-conjugate construction, so the geometric steps are valid. The numeric endpoint $D'=(7.115,2.898)$ depends on the supplied GeoGebra coordinates of $A',B',C'$, which are not reproduced here; the construction logic that yields it is consistent.*
