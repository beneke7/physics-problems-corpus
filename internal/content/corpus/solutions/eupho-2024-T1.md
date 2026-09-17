---
id: eupho-2024-T1
problem: eupho-2024-T1
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2024
verification_status: unverified
figure_files: []
---
## Solution

When the puck moves along the wall, two forces (in addition to gravity and the normal force of the horizontal ground, which cancel each other out) act on it: the normal force of the wall (which changes the direction of motion of the puck) and the friction between the puck and the wall (which changes the speed of the puck and also causes the puck to start rotating).

So as the puck moves along the circular wall, the speed of the puck decreases and the angular velocity of the puck's rotation around its vertical axis increases. The motion of the puck is rolling with sliding along the wall. At a certain point in time $t_1$, the contact point of the puck may have zero velocity and kinetic friction becomes static. From this point onwards, the puck will be rolling without sliding along the wall.

From the zero velocity of the contact point, we find the relationship $\omega = v/r$.

### Solution 1

Let's focus on rolling with sliding first. The normal force $\vec N$ of the wall on the puck is perpendicular to the velocity of the puck at any instantaneous position of the puck. Force $\vec N$ changes the direction of the velocity $\vec v$. From Newton's law in the normal direction, we find $N = m v^2/R$, where $m$ is the mass of the puck. Thus, the magnitude of the frictional force is $F_f = \mu N = \mu m v^2/R$.

The equation for the translational motion of the puck is

$$m\frac{dv}{dt} = -\mu m \frac{v^2}{R}$$

and in the integral form including the initial conditions

$$\int_{v_0}^{v} \frac{dv}{v^2} = -\frac{\mu}{R}\int_0^t dt$$

where the time $t = 0$ is the time at which the puck meets the semicircular wall and has the initial velocity $v_0$. Solving the integrals gives

$$-\frac{1}{v} + \frac{1}{v_0} = -\frac{\mu}{R}t \tag{1}$$

which leads to

$$v(t) = \frac{v_0}{1 + t/\tau} \tag{2}$$

where $\tau = R/(v_0\mu)$.

The rotation of the puck around its axis of symmetry is caused by the torque of the frictional force acting on the puck at the point of contact between the puck and the wall, $M_f = r F_f = r\mu m v^2/R$, where the radius of the puck $r$ is the arm. The equation for the rotational motion of the puck, which results from Newton's second law $I\,d\omega/dt = M_f$, can be written as

$$r\frac{d\omega}{dt} = \frac{\mu m r^2}{RI}v^2 = \frac{2\mu}{R}\cdot\frac{v_0^2}{(1 + t/\tau)^2}$$

where $I = m r^2/2$ is the moment of inertia of the puck for rotations around its axis of symmetry and $\omega$ is the angular velocity of this rotation. The product $r\omega$ gives the relative speed of the point of contact between the puck and the wall with respect to the puck's center of mass. The integral form of this equation, including the initial conditions, is

$$r\int_0^{\omega} d\omega = \frac{2v_0}{\tau}\int_0^t \frac{dt}{(1 + t/\tau)^2}$$

and the solution is

$$r\omega = v_0\,\frac{2t/\tau}{1 + t/\tau}. \tag{3}$$

The two solutions (2) and (3) are only valid up to the time $t_1$ at which the functions $v(t)$ and $r\omega(t)$ intersect, $v(t_1) = r\omega(t_1)$. At this moment, the points on the puck that touch the wall no longer move in relation to the wall and the puck no longer slides along the wall. There is no more friction. From this moment on, the motion of the puck is a frictionless translation and rotation with $v = v(t_1) = v_1$ and $\omega = v_1/r$. For $t_1$ we get $t_1 = \tau/2$. At $t_1$, the translational speed is $v_1 = 2v_0/3$.

There are two possible scenarios for the motion of the puck along the semicircular wall: it rolls with sliding along the entire wall, or it starts rolling somewhere along this path without sliding. To see what happens, and also to get the exit velocity $v_e$, we need to calculate how the path of the puck increases with time, which is defined by equation (2), $dl/dt = v(t)$. We integrate in time from $t = 0$ to $t$ and in distance from $0$ to $l$ and get

$$t = \tau\left[\exp\!\left(\frac{l}{v_0\tau}\right) - 1\right]. \tag{4}$$

If we use $l_e = \pi R$, equation (4) gives the time $t_e = t(l_e) = \tau(\exp\pi\mu - 1)$.

- If $t_e > t_1 = \tau/2$, i.e. $\pi\mu > \ln\tfrac32$, then the puck starts to roll somewhere on its semicircular path along the wall without sliding and its speed when leaving the wall is $v_e = v_1 = 2v_0/3$.
- If $t_e \le t_1 = \tau/2$, i.e. $\pi\mu \le \ln\tfrac32$, then the puck still rolls with sliding when it leaves the wall, since its translational speed $v_e$ is still greater than $2v_0/3$. The exit speed is obtained from (4) by inserting $t = t_e$,

$$v_e = v(t = t_e) = v_0\exp(-\pi\mu). \tag{5}$$

### Solution 2

The equation for the translational motion of the puck is

$$m\frac{dv}{dt} = -\mu m \frac{v^2}{R}$$

which can be rewritten with $dl = v\,dt = R\,d\varphi$ as

$$\frac{dv}{v} = -\frac{\mu}{R}dl = -\mu\,d\varphi.$$

We recognize the dependence of $v$ on $\varphi$:

$$v = v_0\exp(-\mu\varphi), \tag{6}$$

where $\varphi = 0$ at the beginning of the semicircular wall and $\varphi = \pi$ at its end. It describes the dependence of $v$ on $\varphi$ under the condition that the puck rolls and slides at the same time.

Due to the torque of the frictional force the puck also starts to roll along the wall and its instantaneous angular velocity is $\omega$. Let us introduce the speed $v_0 = r\omega$ [contact-point speed]: when $r\omega$ reaches the instantaneous speed $v$, it no longer changes. The equation for the rotational motion of the puck is

$$r\frac{d\omega}{dt} = \frac{d(r\omega)}{dt} = \frac{\mu m r^2}{RI}v^2.$$

Writing $r\omega$ as a function of $\varphi$ starting from

$$\frac{d(r\omega)}{dt} = \frac{d(r\omega)}{d\varphi}\frac{d\varphi}{dt}$$

and using $d\varphi/dt = v/R$ we get

$$d(r\omega) = 2\mu v_0\exp(-\mu\varphi)\,d\varphi$$

and solving the simple integral $\int_0^{r\omega} d(r\omega) = 2\mu v_0\int_0^{\varphi}\exp(-\mu\varphi)\,d\varphi$ we get

$$r\omega(\varphi) = 2v_0\left(1 - \exp(-\mu\varphi)\right). \tag{7}$$

If we equate $v$ and $r\omega$, we get a critical angle $\varphi_c$ at which rolling with sliding changes to rolling without sliding,

$$\mu\varphi_c = \ln\frac32.$$

At the critical angle, the final velocity is $v_f = v_0\exp(-\mu\varphi_c) = 2v_0/3$.

- If $\varphi_c > \pi$, i.e. $\mu\pi < \ln\tfrac32$, the puck still slides at the exit with the exit speed $v_e = v_0\exp(-\mu\pi)$.
- If $\varphi_c \le \pi$, i.e. $\mu\pi \ge \ln\tfrac32$, the puck rolls at the exit without sliding with the final speed $v_e = v_f = v(\varphi_c) = 2v_0/3$.

From the way the problem is solved in the second solution, it can be seen that the exit speed of the puck does not depend on the particular shape of the wall; the speed and the angular velocity depend only on $\varphi$ (and the friction coefficient $\mu$). For example, the wall could be elliptical instead of a semicircle (or have a different shape).

### Part b) — graph $v_e(\mu)$

The critical coefficient of friction separating the two regimes is

$$\mu_c = \frac{\ln(3/2)}{\pi}.$$

For $\mu < \mu_c$ the puck slides the whole way and $v_e = v_0\exp(-\pi\mu)$, an exponential decrease from $v_0$ (at $\mu = 0$). For $\mu \ge \mu_c$ the puck stops sliding before leaving and $v_e = \tfrac23 v_0$, constant. The graph therefore starts at $v_0$, decreases exponentially, and at $\mu = \mu_c$ kinks (not smooth) to a constant value $\tfrac23 v_0$.
