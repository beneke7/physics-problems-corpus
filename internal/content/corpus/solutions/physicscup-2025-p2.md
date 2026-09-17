---
id: physicscup-2025-p2
problem: physicscup-2025-p2
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Robertas Juknevičius
solution_source_url: https://physicscup.ee/wp-content/uploads/2025/P2-sols/0-xh-Robertas_Juknevicius.pdf
selection_note: "Selected as the top-ranked candidate: LaTeX-compiled, compact (3 pp), and the most elegant of the published approaches — it reduces the 3-D pursuit to a planar separation-of-variables problem. Kalda's comment: a nice induction-based proof that the birds will remain forming a cuboid."
verification_status: unverified
rederivation_check: consistent
figure_files: []
---

## Solution
*Student solution by Robertas Juknevičius, transcribed faithfully from the LaTeX source. The competition published no official solution. The solution carries no figures. Notation: $l(0)$ and $r(0)$ denote initial values of $l$ and $r$; $t_f$ is the meeting time; $v$ is the (common) bird speed.*

### Introduction

To begin with, note that we can imagine a tetrahedron as four vertices of a cube, and choose them so no two lie on the same edge, so then the distance between any two points becomes the length of the face diagonal. Now, there are actually only two ways to label the tetrahedron vertices so that you cannot reach one position from another only using rotations, and they're actually reflections of one another (this can be seen by first labeling any vertex as $A$, and then noticing that the only way to get different configurations is to label the three other in counter-clockwise or clockwise order). The velocities of the birds will lie on the diagonals of the faces of the cube, and there will be two faces that do not have a velocity that lies on them, and those faces are opposite of each other. Now label the plane that goes through the origin and is parallel to the mentioned two faces as the $xy$-plane, and the axis perpendicular to this plane as the $z$-axis.

I will prove that at any moment in time the birds' positions lie on the vertices of a rectangular cuboid that has two opposite faces be squares parallel to $xy$-plane (say you took a cube with edges parallel to the axes of the space and chose the 4 edges parallel to the $z$-axis, and changed all of their lengths to some other value (the same for all 4 of them), and could also rotate the cube around it's axis that's parallel to the $z$-axis) in such a way that no two birds lie on the same edge of the rectangular cuboid with an induction-like argument.

Notice that the initial configuration satisfies this condition. Say that after some time has passed, the positions of the birds satisfy the condition. If we say the magnitude of the angle between any velocity vector and the $xy$-plane is $\alpha$, and the speed of any bird is $v$, then, after a time $dt$ passes, the distance between projections of the birds to the $xy$ plane changes by $-v\cos\alpha\,dt$, and it stays a square, while the $z$ component for any bird changes by magnitude $v\sin\alpha\,dt$, but it changes in one direction for two birds that had the same $z$-component, and in the other direction for the other two, so that the $z$-distance between any two points that had different $z$ components decreases (they move towards each other) so we have four points that project as a square on the $xy$-plane and when we take their projections to the axis perpendicular to the plane we get one value for some two points, and another value for the other points. So, after this time passed the positions actually satisfy the condition, and because the initial situation satisfied it, it is proved by induction.

Now, take two points with different $z$ coordinates. At any moment in time we will label the absolute value of the difference between the coordinates as $2r(t) = 2r$. Now take the same two points, and label the distance between projections to $xy$-plane as $l(t) = l$, the magnitude of the angle between the diagonal of the face on which lies any one of the velocities and the $xy$-plane as $\alpha(t) = \alpha$, and finally the velocity of the birds $v$ (which we don't know but also don't need).

### Solution

We can write two equations:
$$ \frac{dl}{dt} = -v\cos\alpha \tag{1} $$
which is visible easily if we project the speeds on the $xy$-plane, and
$$ \frac{dr}{dt} = -v\sin\alpha \tag{2} $$

For now, it does not seem to be doing a lot, but if we divide (2) by (1), we get:
$$ \frac{dr}{dl} = \tan\alpha = \frac{2r}{l} \tag{3} $$

Now, we are able to use separation of variables to solve this equation. Noting that $r(0) = \frac{a}{2\sqrt2}$ and $l(0) = \frac{a}{\sqrt2}$, we find:
$$ 2\int_{l(0)}^{l}\frac{dl}{l} = \int_{r(0)}^{r}\frac{dr}{r} $$
$$ \frac{l^2}{l(0)^2} = \frac{r}{r(0)} $$
$$ \frac{2l^2}{a^2} = \frac{r\,2\sqrt2}{a} $$
$$ a r \sqrt2 = l^2 \tag{4} $$

Now we can easily get $\tan\alpha = \frac{l\sqrt2}{a}$, and then $\cos\alpha = \frac{1}{\sqrt{\frac{2l^2}{a^2}+1}}$. Now, looking back at (1), we can substitute the expression for $\cos\alpha$ and get a differential equation which we can try to integrate ($t_f$ marks the time when the birds meet):
$$ \int_{l(0)}^{0}\sqrt{\frac{2l^2}{a^2}+1}\,dl = -v t_f $$

Note that $v t_f$ is actually the distance $d$ we are trying to find. Substituting $\tan u = \frac{l\sqrt2}{a}$ we get:
$$ \frac{a}{\sqrt2}\int_{\frac{\pi}{4}}^{0}\sec^3 u\,du = -v t_f $$

the integral of $\sec^3 u\,du$ is quite well known, it is $\frac12(\sec u\tan u + \ln(\sec u + \tan u)) + c$, so, we find:
$$ -\frac{a}{2\sqrt2}\left(\sqrt2 + \ln(\sqrt2 + 1)\right) = -v t_f $$

So the distance is:
$$ \boxed{\; d = v t_f = \left(\frac12 + \frac{\sqrt2\,\ln(\sqrt2 + 1)}{4}\right)a \approx 0.81161262\,a. \;} $$

---
*Re-derivation check (consistent): with $r(0)=a/(2\sqrt2)$, $l(0)=a/\sqrt2$, the separated ODE (3) gives $l^2/l(0)^2=r/r(0)$, i.e. $ar\sqrt2=l^2$ (4), so $\tan\alpha=2r/l=l\sqrt2/a$ and $\cos\alpha=(2l^2/a^2+1)^{-1/2}$, exactly as written. The arc length follows from $d=v t_f=\int_0^{l(0)}\!\sqrt{2l^2/a^2+1}\,dl$ (the sign flip from the $l(0)\to0$ limits absorbing the minus). The substitution $\tan u=l\sqrt2/a$ maps the limits to $u:\pi/4\to0$ and turns the integrand into $(a/\sqrt2)\sec^3u$; with $\int\sec^3=\tfrac12(\sec u\tan u+\ln|\sec u+\tan u|)$ evaluated between $0$ and $\pi/4$ ($\sec\tfrac\pi4=\sqrt2$, $\tan\tfrac\pi4=1$) one gets $d=(a/2\sqrt2)(\sqrt2+\ln(\sqrt2+1))=(\tfrac12+\tfrac{\sqrt2}{4}\ln(\sqrt2+1))a$. Numerical integration of $\int_0^{a/\sqrt2}\sqrt{2l^2/a^2+1}\,dl$ gives $0.8116126\,a$, matching the author's boxed value. The geometric/induction setup (cuboid invariance) is the author's.*
