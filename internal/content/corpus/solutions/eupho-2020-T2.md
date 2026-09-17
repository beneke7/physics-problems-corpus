---
id: eupho-2020-T2
problem: eupho-2020-T2
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2020
verification_status: unverified
figure_files: []
---

## Solution

### Part 1: Thread in contact with the cylinder

**Solution I**

Decompose the velocity of $P$ into a longitudinal component $v_l$ along the thread and a transverse component $v_\perp$ perpendicular to it:

$$\vec{v} = v_l \hat{e}_1 + v_\perp \hat{e}_2.$$

Since the thread is inextensible, the longitudinal component is fixed: $v_l = -u$.

The coordinate frame $(\hat{e}_1, \hat{e}_2)$ rotates with angular velocity $\omega = d\phi/dt$. Computing the acceleration of $P$ and noting that the tension is along $\hat{e}_1$ (so $a_\perp = 0$):

$$-u\frac{d\phi}{dt} + \frac{dv_\perp}{dt} = 0 \implies \frac{dv_\perp}{dt} = u\frac{d\phi}{dt}.$$

Integrating: $v_\perp = u\phi$. The thread end turns through a total angle of $2\pi N$ before fully unwinding, so at the moment of detachment:

$$v_\perp = 2\pi N u.$$

The speed at detachment (while still in contact) is

$$v = \sqrt{v_l^2 + v_\perp^2} = u\sqrt{1 + (2\pi N)^2}.$$

**Solution II (rotating frame)**

In the system of reference rotating with angular velocity $\omega = u/R$ (where $R$ is the cylinder radius), the wound part of the thread is at rest. The point $Q$ on the pulled end rotates with $\omega_Q = -\omega$. Energy of $P$ is conserved in this frame; equating loss in centrifugal potential to kinetic energy, and noting that the two straight parts unwind symmetrically (so $l_P = l_Q$ always), at detachment $l_P = \pi N R$ and:

$$v_P = \omega l_P = \frac{u}{R} \cdot \pi N R = \pi N u.$$

In the Earth frame the transverse velocity of $P$ is $v_\perp = v_P + \omega l_P = 2\pi N u$, confirming Solution I.

### Part 2: Thread detached from the cylinder

After detachment, in the reference frame of the free end of the thread (which moves at velocity $u$ along $X$), mass $P$ continues rotating. The speed of $P$ relative to Earth reaches its maximum when the free thread is perpendicular to $X$, i.e., when $v_\perp$ aligns with $u$:

$$\boxed{v_{\max} = u(2\pi N + 1).}$$
