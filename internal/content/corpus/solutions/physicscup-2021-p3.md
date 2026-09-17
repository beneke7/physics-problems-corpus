---
id: physicscup-2021-p3
problem: physicscup-2021-p3
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Zhening Li
solution_source_url: https://physicscup.ee/wp-content/uploads/PC2021/P3/1.-Physics_Cup_Problem_3__Zhening_Li.pdf
selection_note: "Selected as the most elegant of the published solutions (LaTeX-compiled, 6 pp). Builds the modes from the physical analogy 'a regular octagon is a coarse circular hoop', then proves completeness with a degrees-of-freedom count. Co-credited on the results page with Nikita Semenin and Eddie Chen."
verification_status: unverified
rederivation_check: consistent
figure_files: [physicscup-2021-p3-sol-1.png, physicscup-2021-p3-sol-2.png, physicscup-2021-p3-sol-3.png]
---

## Solution
*Student solution by Zhening Li, transcribed faithfully from the LaTeX source. The competition published no official solution. Figures are the author's TikZ drawings; throughout, dashed = equilibrium octagon, solid = displaced configuration, and the arrows mark the corner displacements $x$.*

A regular octagon looks like a coarse drawing of a circle, so the modes resemble the standing waves of a circular hoop, with wavelengths $\lambda_n = C/n$ ($C$ = circumference):

- $n=1$: translation (2 modes) and rotation (1 mode), all with the trivial frequency $0$.
- $n=2$: a roughly elliptical deformation (2 modes, Figure 1).
- $n=3$: a roughly triangular deformation (2 modes, Figure 2).
- $n=4$: a roughly square deformation (1 mode, Figure 3).
- $n\ge 5$ is impossible: the corner displacements can alternate in/out at most 4 times around the octagon.

The non-trivial frequencies are those of $n=2,3,4$, computed below by energy method; Section 4 justifies the mode counts rigorously.

### 1 — $n=2$

All bars translate: each **blue** bar moves by $x\ll l$ perpendicular to itself, each **green** bar by $x/\sqrt2$ parallel to itself, and each green bar additionally rotates by $\theta = \sqrt2\,x/l$ (Figure 1). The potential energy (8 joints) is
$$ V = 8\cdot\tfrac12 k\theta^2 = 4k\left(\frac{\sqrt2 x}{l}\right)^2 = 8\frac{k}{l^2}x^2, $$
and the kinetic energy
$$ T = 4\cdot\tfrac12 m\dot x^2 + 4\cdot\tfrac12 m\left(\frac{\dot x}{\sqrt2}\right)^2 + 4\cdot\tfrac12\cdot\tfrac1{12}ml^2\dot\theta^2 = 2m\dot x^2 + m\dot x^2 + \tfrac16 ml^2\frac{2\dot x^2}{l^2} = \tfrac{10}{3}m\dot x^2. $$

![Figure 1: n = 2, the elliptical deformation. Blue bars translate by x perpendicular to themselves, green bars by x/√2 parallel to themselves.](../../sources/physicscup/figures/physicscup-2021-p3-sol-1.png)

The frequency is therefore
$$ f = \frac{1}{2\pi}\sqrt{\frac{8\,k/l^2}{\tfrac{10}{3}m}} = \frac{1}{2\pi}\sqrt{\frac{12}{5}\frac{k}{ml^2}}. $$
Since the octagon may be compressed along any direction, there are **two** independent modes (e.g. Figure 1 and its $45^\circ$ rotation; any other is a linear combination).

### 2 — $n=3$

The purple bars translate downward while the corners on the two sides swing up. After half a period the configuration is the horizontal reflection of the start, so by symmetry the two purple bars have equal amplitude; take their common displacement to be $x\ll l$ (Figure 2). Since the centre of mass stays at rest, in the rest frame of the purple bars (the "purple frame") it is displaced upward by $x$. It suffices to rotate the four green bars by $\theta = 2\sqrt2\,x/l$; the two blue bars then shift upward by $2x$ in the purple frame, and the green-bar COMs move up by $x$, so the whole-octagon COM rises by $(2m\cdot 2x + 4m\cdot x)/(8m) = x$ in the purple frame, as required.

![Figure 2: n = 3, the triangular deformation. Green bars rotate, blue bars are displaced by 2√2 x, the purple (top/bottom) bars set the working frame.](../../sources/physicscup/figures/physicscup-2021-p3-sol-2.png)

The blue bars rotate by $\varphi = 4x/l$, so
$$ V = 4\cdot\tfrac12 k\theta^2 + 4\cdot\tfrac12 k(\theta+\varphi)^2 = 2k\left(\frac{2\sqrt2 x}{l}\right)^2 + 2k\left(\frac{(4+2\sqrt2)x}{l}\right)^2 = 32\left(2+\sqrt2\right)\frac{k}{l^2}x^2. $$
The kinetic energy in the purple frame is
$$ T' = 4\cdot\tfrac12\cdot\tfrac13 ml^2\dot\theta^2 + 2\cdot\tfrac12 m(2\dot x)^2 + 2\cdot\tfrac12\cdot\tfrac1{12}ml^2\dot\varphi^2 = \tfrac23 ml^2\frac{8\dot x^2}{l^2} + 4m\dot x^2 + \tfrac1{12}ml^2\frac{16\dot x^2}{l^2} = \tfrac{32}{3}m\dot x^2, $$
so in the rest (COM) frame
$$ T = T' - \tfrac12(8m)\dot x^2 = \tfrac{32}{3}m\dot x^2 - 4m\dot x^2 = \tfrac{20}{3}m\dot x^2. $$
Hence
$$ f = \frac{1}{2\pi}\sqrt{\frac{32\left(2+\sqrt2\right)k/l^2}{\tfrac{20}{3}m}} = \frac{1}{2\pi}\sqrt{\frac{24}{5}\left(2+\sqrt2\right)\frac{k}{ml^2}}. $$
As with $n=2$, there are **two** independent modes (Figure 2 and its $45^\circ$ rotation).

### 3 — $n=4$

Every corner is displaced by $x\ll l$ perpendicular to the (un-displaced) octagon, so each bar rotates by $\theta = 2x\cos(\tfrac\pi8)/l$ and translates by $x\sin(\tfrac\pi8)$ parallel to itself (Figure 3). Then
$$ V = 8\cdot\tfrac12 k(2\theta)^2 = 4k\left(\frac{4x\cos(\pi/8)}{l}\right)^2 = 64\cos^2\!\left(\tfrac\pi8\right)\frac{k}{l^2}x^2 = 16\left(2+\sqrt2\right)\frac{k}{l^2}x^2, $$
$$ T = 8\left[\tfrac12 m\left(\dot x\sin\tfrac\pi8\right)^2 + \tfrac12\cdot\tfrac1{12}ml^2\dot\theta^2\right] = \left[4\sin^2\!\tfrac\pi8 + \tfrac43\cos^2\!\tfrac\pi8\right]m\dot x^2 = \left(2-\sqrt2 + \frac{2+\sqrt2}{3}\right)m\dot x^2 = \frac{8-2\sqrt2}{3}m\dot x^2. $$

![Figure 3: n = 4, the square deformation. All eight corners move in/out together with alternating sign — a single independent mode.](../../sources/physicscup/figures/physicscup-2021-p3-sol-3.png)

The frequency is
$$ f = \frac{1}{2\pi}\sqrt{\frac{16\left(2+\sqrt2\right)k/l^2}{\tfrac{8-2\sqrt2}{3}m}} = \frac{1}{2\pi}\sqrt{\frac{24}{7}\left(5+3\sqrt2\right)\frac{k}{ml^2}}. $$
There can be only **one** $n=4$ mode (the in/out pattern must alternate exactly four times); no rotation of it is independent (a $45^\circ$ rotation maps it to its negative). [The overall factor $x$ is omitted throughout as it cancels — it is irrelevant.]

### 4 — Completeness of the mode list

The octagon has 8 degrees of freedom: 16 coordinates locate the 8 corners, minus 8 constraints fixing each bar length. Linearizing about equilibrium $\mathbf q=\mathbf 0$, the dynamics read $\ddot{\mathbf q} = -A\mathbf q$ with $A$ an $8\times8$ matrix; for a mode of angular frequency $\omega$, $\ddot{\mathbf q} = -\omega^2\mathbf q$, giving the eigenvalue problem
$$ \omega^2\mathbf q = A\mathbf q. $$
There are at most 8 independent eigenvectors, hence at most 8 independent modes. We have already exhibited exactly 8:

- 3 modes for $n=1$ (2 translational + 1 rotational, frequency $0$);
- 2 modes for $n=2$ ($0^\circ$ and $45^\circ$ rotations of Figure 1);
- 2 modes for $n=3$ ($0^\circ$ and $45^\circ$ rotations of Figure 2);
- 1 mode for $n=4$ (Figure 3).

So nothing has been missed: these are all the planar oscillation modes. The three **non-trivial** natural frequencies are $f_2$, $f_3$, $f_4$ above, with degeneracies $2$, $2$, $1$ respectively.

---
*Re-derivation check (consistent): trig identities $\cos^2(\pi/8)=(2+\sqrt2)/4$, $\sin^2(\pi/8)=(2-\sqrt2)/4$ reproduce $V_4=16(2+\sqrt2)k x^2/l^2$ and $T_4=\tfrac{8-2\sqrt2}{3}m\dot x^2$; rationalizing $16/\tfrac{8-2\sqrt2}{3}\cdot(2+\sqrt2)=\tfrac{24}{7}(5+3\sqrt2)$ confirms $f_4$. The $n=2,3$ ratios $8/\tfrac{10}{3}=12/5$ and $32/\tfrac{20}{3}=24/5$ check out. Mode total $3+2+2+1=8$ matches the 8 DOF, so the count is internally complete.*
