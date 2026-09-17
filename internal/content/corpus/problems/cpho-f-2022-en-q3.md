---
id: cpho-f-2022-en-q3
source: cpho-f
native_id: "Rolling Disk - CPhO 2022"
year: 2022
language: en
translated: false
topic: [mechanics]
subtopic: [rolling, rotational-dynamics, rigid-body, non-inertial-frames]
difficulty: null
difficulty_norm: 5
math_tools: [vector-calculus, differential-equations]
format: open-ended
core_ideas: []
estimated_time_min: 90
points: null
has_solution: false
has_figure: true
figure_files: [cpho-f-2022-en-q3-fig01.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/cpho-f/2022_EN.mmd; figures require local harvest"
verification_status: pending
---

## Rolling Disk - CPhO 2022

A thin homogeneous rigid wheel with radius $R$ and mass $M$ rolls without slipping along the horizontal plane $x y$, forming an angle $\theta(t)$ with the vertical. As shown in the figure, the plane of the wheel intersects xy along a straight line forming an angle $\phi(t)$ with the $x$ axis. We denote the coordinates of the point of contact of the wheel with the surface as $(x(t), y(t), 0)$. The free fall acceleration is $g$.

The functions $x(t), y(t), \theta(t)$ and $\phi(t)$, with which we will describe the movement of the wheel, are not completely independent.
![](cpho-f-2022-en-q3-fig01.png)

1. Find a kinematic relationship between these functions. The answer can include both the functions themselves and their time derivatives.

Consider a special case of uniform circular motion of the wheel, i.e. when the point of contact with the surface moves at a constant speed, describing a circle of radius $r$ around the vertical axis $z$. In this case, $\theta(t)=\theta=$ const., and $\phi(t)$ is a linear function of time. In the laboratory reference frame $\Sigma$, without loss of generality, we can say:

$$
\binom{x(t)}{y(t)}=r\binom{-\sin \omega t}{\cos \omega t},
$$

where $\omega$ is the angular velocity, which is yet to be found. In the reference frame $\Sigma^{\prime}$, which rotates with an angular velocity $\omega$ around the $z$-axis, the angles $\theta$ and $\phi$ are constant, and the wheel rotates around the axis of symmetry that preserves the orientation. In this frame of reference, centrifugal force and the Coriolis force will also act on each section of the wheel.

2. Find the centrifugal force $\vec{F}_{\mu}$ and Coriolis force $\vec{F}_{K}$ acting on the wheel, as well as the resulting moments of these forces $\vec{\tau}_{\mu}$ and $\vec{\tau}_{K}$, respectively.
3. Find the angular velocity $\omega$ and the force $\vec{f}$ acting on the wheel from the side of the surface ( $\omega$ should not be included in the answer).

If the wheel rolls at a sufficiently high speed, the vertical position $\theta=0$ may be stable. In this case, the center of mass of the wheel can be considered to move at an almost constant speed $V$ in the positive direction of the $x$ axis. Then, in the first approximation, we can write $x(t)=V t+\delta x(t)$, where $\delta x(t)$ is a small quantity that changes harmonically with some angular velocity $\Omega$ (as do $y(t), \theta(t)$ and $\phi(t)$ ).

4. Derive in the first non-trivial approximation the equations of motion of the wheel. Find from this the angular velocity $\Omega$ and the

minimum value $V_{\text {min }}$ of the wheel speed at which the vertical position will be stable.
