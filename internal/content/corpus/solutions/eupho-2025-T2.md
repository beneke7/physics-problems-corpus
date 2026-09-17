---
id: eupho-2025-T2
problem: eupho-2025-T2
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2025
verification_status: unverified
figure_files: []
---
## Solution

By "table" we understand the rigid body formed by the plate and the frame attached to it. Points A, B, C belong to the rigid table; distances between them do not change. Since the motion is limited to the side view, the pair of short chains always has the same position when viewed from the side — we treat them as a single chain (chain 1) with tension doubled. The same applies to the pair of long chains (chain 2).

### Equilibrium (forces)

There are three forces acting on the table: plate weight $m\vec{g}$ at the centre of mass C, tension $\vec{F}_1$ at point A (chain 1, length $4a$), and tension $\vec{F}_2$ at point B (chain 2, length $6a$). The horizontal components of all forces vanish. The vertical balance:

$$-mg + F_1 - F_2 = 0 \tag{8}$$

Torque balance around point B (with AB = $2a$, BC = $4a$):

$$mg \cdot 4a - F_1 \cdot 2a = 0 \tag{9}$$

Solving (8)–(9): $F_1 = 2mg$, $F_2 = mg$. Both positive, so the chains are tensioned and the system is in equilibrium.

### Stability — qualitative argument

Since the chains are inextensible and tensioned, point B can only travel along circle $c_b$ (radius $6a$, centred on the upper anchor of chain 2) and point A along circle $c_a$ (radius $4a$, centred on the upper anchor of chain 1).

When the table is displaced horizontally by $x$, it can be shown geometrically that in both directions of displacement the table rotates clockwise, so $\varphi(x) \sim x^2$ (no linear term). For small horizontal displacements we may neglect the rotation. The horizontal force components in both chains then point opposite to the displacement, confirming stability.

### Solution with forces — equation of motion

For small horizontal displacement $x$, with small angles $\theta_1 \approx x/(4a)$ (chain 1) and $\theta_2 \approx x/(6a)$ (chain 2):

$$m\ddot{x} = -F_1\sin\theta_1 - F_2\sin\theta_2 \approx -2mg\frac{x}{4a} - mg\frac{x}{6a} = -\frac{2mg}{3a}x$$

This gives simple harmonic oscillation with:

$$\ddot{x} + \frac{2g}{3a}x = 0, \qquad \omega = \sqrt{\frac{2g}{3a}} \approx 8.09\ \text{s}^{-1}$$

$$\nu = 1.29\ \text{Hz}, \qquad \boxed{T = 777\ \text{ms}}$$

### Solution with energies

Let the small displacement of the centre of mass from equilibrium C to C$'$ be $(x,y)$ with $x, y \ll a$, and the small tilt be $\varphi$.

The displacements of points A and B from their equilibrium positions are, to leading order:

$$\Delta A_x = x - 5a\varphi, \quad \Delta A_y = y - 2a\varphi, \quad \Delta B_x = x, \quad \Delta B_y = y - 4a\varphi$$

Requiring the squared length of chain 1 to remain $(4a)^2$ and expanding, keeping only leading-order terms:

$$x^2 - 8a(y - 2a\varphi) = 0 \quad\Rightarrow\quad y - 2a\varphi = \frac{x^2}{8a} \tag{10}$$

Similarly for chain 2 (length $6a$):

$$x^2 + 12a(y - 4a\varphi) = 0 \quad\Rightarrow\quad y - 4a\varphi = -\frac{x^2}{12a} \tag{11}$$

Solving (10) and (11) as linear equations in $y$ and $\varphi$:

$$y = \frac{x^2}{3a}, \qquad \varphi = \frac{5x^2}{48a^2}$$

The potential energy:

$$U = mgy = \frac{mg}{3a}x^2 = \frac{mg}{3a}\cdot\frac{x^2}{2}\cdot 2 \tag{12}$$

No linear term in $x$ confirms equilibrium; positive coefficient of $x^2$ confirms stability.

The kinetic energy: since $y$ and $\varphi$ both depend on $x^2$, their squared time-derivatives are proportional to $x^2\dot{x}^2$ and are negligible:

$$E \approx m\frac{\dot{x}^2}{2} \tag{13}$$

From the ratio of coefficients of (13) and (12):

$$T = 2\pi\sqrt{\frac{m}{\,2mg/(3a)\,}} = 2\pi\sqrt{\frac{3a}{2g}} = 0.777\ \text{s}$$

### Solution with the curvature of the trajectory

At the initial position, points A and B both move horizontally, so the instantaneous centre of rotation is at infinity — there is no immediate rotation. Consequently, no rotational kinetic energy is involved and the motion of the table can be treated as a point mass at C.

For a rigid body with no rotation, the curvature $\vec{c} = \hat{n}/R$ of the trajectory of any point P is a linear function of the coordinates of P. The curvature of point B (at $x = 4a$ from the chain-2 anchor along the table) is $c_B = -1/(6a)$ (downward). The curvature of point A (at $x = 2a$ from the chain-1 anchor) is $c_A = 1/(4a)$. By linearity, the curvature of C is:

$$c_C = c_B + (c_A - c_B)\frac{4a - 0}{4a - 2a}\cdot\frac{1}{2} = \frac{1}{4a} + \left(\frac{1}{4a}+\frac{1}{6a}\right) = \frac{2}{3a}$$

Hence $R = 3a/2$ and $T = 2\pi\sqrt{R/g} = 777\ \text{ms}$.

Positive curvature means the equilibrium is stable. An interactive visualisation is available at https://www.geogebra.org/m/wbqwp3tf.

*European Physics Olympiad 2025, Theory Problem 2 — Official Solution. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from Unicode to LaTeX. Marking scheme omitted.*
