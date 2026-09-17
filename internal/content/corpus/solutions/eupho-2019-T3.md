---
id: eupho-2019-T3
problem: eupho-2019-T3
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2019
verification_status: unverified
figure_files: [eupho-2019-T3-sol-1.png]
---

## Solution

**Key geometric fact.** The envelope of the family of projectile trajectories launched from the origin with speed $v$ at all angles is a parabola, and the focus of that parabola is the launching point (the origin).

*Derivation.* The trajectory of a parcel launched at angle $\alpha$ is
$$y = x\tan\alpha - \frac{g}{2v^2}x^2(1 + \tan^2\alpha).$$
Treated as a quadratic in $\tan\alpha$:
$$gx^2\tan^2\alpha - 2v^2 x\tan\alpha + (2v^2 y + gx^2) = 0.$$
Points on the envelope satisfy the discriminant equals zero:
$$v^4x^2 = gx^2(2v^2 y + gx^2) \implies y = \frac{v^2}{2g} - \frac{gx^2}{2v^2}.$$
This is a parabola with vertex at $(0,\, v^2/2g)$ and focus at $(0, 0)$ (the origin), confirming the focus is the launching point.

**Structure of the water stream.** At any instant, each water parcel in the air is traveling on its own parabolic trajectory. Every such parabolic arc is tangent to the envelope at exactly one point, and that tangency point is where the parcel's trajectory "touches" the envelope.

Since the nozzle angle is never less than $45°$, all touching points lie at $y \geq 0$. (A parcel launched at exactly $45°$ touches the envelope at $y = 0$; increasing the launch angle raises the touching point.)

**Finding point P.** Among all points on the water curve visible in the figure, the point $P$ that lies exactly on the envelope is the one with the largest value of
$$y + \sqrt{x^2 + y^2},$$
because for any point $Q = (x, y)$ on the envelope, the parabola property gives $y + \sqrt{x^2 + y^2} = 2H_P$ (constant), while for any point strictly inside the envelope, $y + \sqrt{x^2+y^2} < 2H_P$.

The solution figure below shows the water stream with point $P$ identified, together with the line $OP$ from the focus (origin) and a vertical through $P$ making equal angles with the stream tangent at $P$ — the optical reflection condition for a parabolic mirror.

![Figure: Water stream at the given instant, with point P on the envelope identified (P ≈ (10.7, 3.3) m), and the red line OP drawn from the origin through P.](../../sources/eupho/figures/eupho-2019-T3-sol-1.png)

**Computing $v$.** Once $P$ is found, the topmost point of the envelope has $x = 0$ so:
$$y_\text{top} + \sqrt{0 + y_\text{top}^2} = 2H_P \implies y_\text{top} = H_P.$$
The topmost point is reached by a parcel launched vertically, so $v^2 = 2g H_P$.

From the figure, reading off the coordinates of $P \approx (10.7,\ 3.3)\ \text{m}$:
$$2H_P = y_P + \sqrt{x_P^2 + y_P^2} = 3.3 + \sqrt{10.7^2 + 3.3^2}\ \text{m} \approx 3.3 + 11.2\ \text{m} \approx 14.5\ \text{m}.$$
Thus $H_P \approx 7.25\ \text{m}$ and
$$\boxed{v = \sqrt{2gH_P} \approx \sqrt{2 \times 9.8 \times 7.25}\ \text{m/s} \approx 12\ \text{m/s}.}$$

*(The official solution quotes $2H_P \approx 14.6\ \text{m}$, giving $v \approx 12\ \text{m/s}$.)*
