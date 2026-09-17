---
id: eupho-2018-T1
problem: eupho-2018-T1
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2018
verification_status: unverified
figure_files: []
---

## Solution

Let the ball $A$ be given an initial velocity $v$ along the axis $Y$, which is perpendicular to the rod. The total momentum of the system conserves, therefore the center-of-mass (CM) of the system moves with a constant velocity:
$$v_\text{CM} = \frac{mv}{3m} = \frac{v}{3}$$
along $Y$.

In the CM frame (an inertial reference frame), the initial velocities of the three balls along $Y$ are:
$$v_A = \frac{2v}{3}, \qquad v_B = v_C = -\frac{v}{3}.$$

The total kinetic energy of the balls is:
$$E = \frac{m}{2}\left(\frac{4}{9} + \frac{1}{9} + \frac{1}{9}\right)v^2 = \frac{mv^2}{3}.$$

The total angular momentum with respect to the CM is:
$$L = m \cdot \frac{2v}{3} \cdot \ell - m \cdot \left(-\frac{v}{3}\right) \cdot (-\ell) = mv\ell.$$

At any moment the three balls form an isosceles triangle with angle $2\varphi$ at the top vertex. The distance between $A$ and $C$ is minimal when either $\varphi = 0$ or $\dot\varphi = 0$. The case $\varphi = 0$ is inconsistent with the rigidity of the rods. Therefore at the minimum distance $\dot\varphi = 0$, and the system instantaneously behaves as a rigid body whose moment of inertia $I$ with respect to the CM satisfies:

$$I = \frac{L^2}{2E} = \frac{(mv\ell)^2}{2 \cdot mv^2/3} = \frac{3}{2}m\ell^2. \tag{1}$$

On the other hand, using the formula for the moment of inertia of a collection of point masses:
$$I = \frac{\sum_{i,j} m_i m_j (r_i - r_j)^2}{\sum_i m_i} = \frac{m}{3}\left(2\ell^2 + d^2\right), \tag{2}$$
where $d$ is the distance $AC$.

Equating (1) and (2):
$$\frac{m}{3}\left(2\ell^2 + d^2\right) = \frac{3}{2}m\ell^2$$
$$d^2 = \frac{5}{2}\ell^2$$
$$\boxed{d = \ell\sqrt{\frac{5}{2}} \approx 1.58\,\ell.}$$
