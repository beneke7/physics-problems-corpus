---
id: physicscup-2021-p2
problem: physicscup-2021-p2
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Ricards Kristers Knipsis
solution_source_url: https://physicscup.ee/wp-content/uploads/PC2021/P2/pc2021_2-knipsis.pdf
selection_note: "Selected as the most elegant of the published solutions (LaTeX-compiled, 5 pp, the hodograph/velocity-circle approach). Kalda's comment: a nicely written solution based on the fact that the hodograph is a circle (which has been used in many solutions)."
verification_status: unverified
rederivation_check: consistent
figure_files: [physicscup-2021-p2-sol-1.png, physicscup-2021-p2-sol-2.png, physicscup-2021-p2-sol-3.png, physicscup-2021-p2-sol-4.png, physicscup-2021-p2-sol-5.png, physicscup-2021-p2-sol-6.png]
---

## Solution
*Student solution by Ricards Kristers Knipsis, transcribed faithfully from the LaTeX source. The competition published no official solution. The figures are the author's hand drawings.*

Two results, proven in the appendices, are used:

- **(I)** The velocities of the comet, placed with their bases at a common point, form a circle (the *hodograph*; Appendix A).
- **(II)** The ellipse formed by rotating the velocity vectors by $90^\circ$ about their midpoints is similar to the trajectory ellipse (Appendix B).

### Finding the minimum eccentricity

Consider the velocity circle (Figure 1) and draw, from the common base $P$ of the velocity vectors, two perpendicular lines $PM$ and $PN$ depicting two orthogonal velocities $\vec v_1$ and $\vec v_2$. We seek the orientation that maximizes $PM/PN$, equivalently that minimizes $PN/PM = \tan\beta$ (with $\beta$ the angle at $M$). This ratio is smallest when the arc $NTS$ is smallest. That occurs in the symmetric case $\angle NPT = \angle SPT = 45^\circ$: rotating the lines from this state (say anti-clockwise) increases one arc ($TS$) more than it decreases the other ($TN$), because the point on that side ($S$) is then farther from $P$, and a given angle subtends a larger arc when the distance is larger. Symmetry also gives $NP = PS$ here.

![Figure 1: The construction of the maximum ratio between perpendicular velocity vectors (lines PN and PM). O is the centre of the circle, H the foot of the perpendicular from O to chord MS.](../../../../../sources/physicscup/figures/physicscup-2021-p2-sol-1.png)

Now decrease the distance $OP$. The arc $NTS$ grows, so the (maximal) ratio of the two velocities decreases. At the smallest possible eccentricity the required ratio $2$ is just attained, i.e. $\tan\beta = \tfrac12$, so $PM = 2PN = 2PS$. Since $M$, $P$, $S$ are collinear, $MS = PM + PS = 3\,PS$, hence $PS = \tfrac13 MS$.

Let $H$ be the foot of the perpendicular from the centre $O$ to the chord $MS$; then $H$ is the midpoint of $MS$ and $HP = OP\cos 45^\circ$. Thus
$$ \tfrac12 MS = MH = HS = PS + OP\cos 45^\circ = \tfrac13 MS + \tfrac{\sqrt2}{2}OP, $$
which gives $\tfrac16 MS = \tfrac{\sqrt2}{2}OP$, i.e.
$$ MS = 3\sqrt2\,OP. $$
On the other hand, with $R$ the radius of the circle,
$$ MS^2 = 2^2\!\left(OS^2 - (OP\sin 45^\circ)^2\right) = 4\!\left(R^2 - \tfrac{OP^2}{2}\right) = 4R^2 - 2OP^2. $$
Combining the two,
$$ 18\,OP^2 = 4R^2 - 2OP^2 \;\Rightarrow\; 20\,OP^2 = 4R^2 \;\Rightarrow\; OP = \sqrt{\tfrac15}\,R. $$

By result (II) the semi-major axis of this ellipse satisfies $2a = R$ (Appendix B), and the focal separation is $d = 2ae = OP$ (the foci are $O$ and $P$). Hence
$$ \boxed{\; e = \frac{d}{2a} = \frac{OP}{R} = \sqrt{\frac15} \approx 0.447. \;} $$
This is the smallest eccentricity for which conditions (i)–(ii) can hold.

### Appendix A — the velocities lie on a circle

Take two points on the orbit separated by a small angle $d\theta$ as seen from the Sun (Figure 2). The swept area is $dA = \tfrac12 r^2\,d\theta$; by Kepler's second law the travel time is proportional to it, $dt \propto r^2\,d\theta$. The velocity change in this time is
$$ d\vec v = \frac{GMm}{r^2}\,\hat r\,\frac{dt}{m} \;\propto\; \frac{dt}{r^2} \;\propto\; d\theta, $$
so $|d\vec v|$ is the same for each equal-$d\theta$ sector. Moreover the force direction (hence the direction of $d\vec v$) rotates by $d\theta$ from one sector to the next. Placing all velocity vectors with a common base, the successive *change* vectors $d\vec v$ form a regular polygon (Figure 3); as $d\theta\to 0$ the polygon becomes a circle. $\qquad\blacksquare$

![Figure 2: splitting the trajectory into sectors of angle dθ as seen from the Sun; the velocity-change vector between neighbours has the same magnitude but is rotated by dθ.](../../../../../sources/physicscup/figures/physicscup-2021-p2-sol-2.png)

![Figure 3: with common bases, the velocity-change vectors are equal in magnitude and each rotated by dθ from its neighbour, so they form a regular polygon — a circle as dθ → 0.](../../../../../sources/physicscup/figures/physicscup-2021-p2-sol-3.png)

### Appendix B — similarity of the ellipses

Rotate the velocity vectors (and the whole circle) by $90^\circ$ anti-clockwise. Draw the radius $OA$ to the point where the un-rotated vector would have met the circle, and let $B$ be the intersection of that radius with the rotated vector (Figure 4). Triangles $PCB$ and $ACB$ are congruent ($CB$ shared, right angles at $C$, $PC = AC$ by construction), so $PB = AB$. Then
$$ OB + BP = OB + BA = OA = R, $$
constant for every such $B$. Hence all points $B$ lie on an ellipse with foci $O$ and $P$, and its semi-major axis obeys $2a = OB + PB = R$.

![Figure 4: each velocity vector defines a point B on an ellipse with foci O, P and semi-major axis 2a = R.](../../../../../sources/physicscup/figures/physicscup-2021-p2-sol-4.png)

To show this velocity-ellipse is similar to the trajectory ellipse, start where the shortest velocity vector touches it; after the $90^\circ$ rotation that vector is parallel to the trajectory velocity at the corresponding point (Figure 5). Call this direction $\theta = 0$. Advancing $\theta$ by $d\theta$ (Figure 6), the velocities again coincide: as in Appendix A, a sector $d\theta$ on the trajectory corresponds to an arc $d\theta$ on the velocity circle, and since $\theta$ is measured from the focus (= the circle's centre) the velocity turns by exactly that amount. Repeating around the orbit, the tangents of the two ellipses agree at every $\theta$, so they are the same up to a scale factor.

![Figure 5: the velocity vectors of the two ellipses coincide at the starting point (the circle's vector inverted to match orientation).](../../../../../sources/physicscup/figures/physicscup-2021-p2-sol-5.png)

![Figure 6: advancing dθ from the start, the velocities at corresponding points of the two ellipses remain equal.](../../../../../sources/physicscup/figures/physicscup-2021-p2-sol-6.png)

Finally, a scale factor does not change eccentricity: if $a = c\,a'$ relates the semi-major axes and $d' = 2a'e'$, $d = 2ae$ the focal separations, then $d = c\,d' = 2c a' e' = 2a e'$, forcing $e = e'$.

---
*Re-derivation check (consistent): with $\tan\beta=\tfrac12$ giving $PS=\tfrac13 MS$ and $HP=OP/\sqrt2$, the midpoint relation $\tfrac12 MS = \tfrac13 MS + OP/\sqrt2$ yields $MS=3\sqrt2\,OP$; substituting into $MS^2=4R^2-2OP^2$ gives $20\,OP^2=4R^2$, so $e=OP/R=1/\sqrt5\approx0.447$. Independent sanity check on the geometry only; the orbital-mechanics lemmas are the author's.*
