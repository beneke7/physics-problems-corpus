---
id: eupho-2023-T2
problem: eupho-2023-T2
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2023
verification_status: unverified
figure_files: []
---
## Solution

### (a)

The brick is squeezed between the plates and constrained between the plates, so the normal force on the top and bottom surfaces of the brick must be equal.

Since the brick is moving relative to each plate, the kinetic friction vector on each surface must also be equal in magnitude, but in a direction given by the relative velocity of each plate with respect to the brick. Note that this statement is true whether the plates are moving at the same speed, or different speeds.

A simple vector diagram can illustrate the velocity vectors, the frictional force vectors, and the net force vector.

Let $\vec{a} = \vec{F}/m$, and after a time $\Delta t$ the new relative velocity vectors will be given by the construction. By symmetry, this continues so that the acceleration of the brick is always at 45 degrees, until eventually the velocity diagram closes (see Figure 1 of the source).

As such,

$$v = u_1/\sqrt{2}.$$

### (b)

Though the initial vector diagram for velocities looks different, the force components are still equal in magnitude, directed along the relative velocity vectors.

Let $\vec{a} = \vec{F}/m$, and after a time $\Delta t$ the new relative velocity vectors will be given by the construction. The process is repeated, where the direction of the net force is the angle bisector of the relative velocity vectors $\vec{u}_1'$ and $\vec{u}_2'$.

As the quantity $a\Delta t$ is a small quantity compared to the magnitude of the velocity vectors, we can conclude that an equal amount is removed from each of the velocity vectors, so that magnitude comparison

$$u_1 - u_2 = u_1' - u_2' \tag{29}$$

is a conserved quantity.

For the next step, the net force vector is still the angle bisector for $u_1$ and $u_2$. The above arguments will hold true for the conserved quantity, and then the final velocity can be found by the following.

At steady state, $\vec{u}_1'$ and $\vec{u}_2'$ are in opposite directions, and the net force $\vec{a}$ is always an angle bisector. Then

$$(u_1' + u_2')^2 = u_1^2 + u_2^2 = D^2 \tag{30}$$

and

$$u_1' - u_2' = u_1 - u_2 = \delta \tag{31}$$

can be solved for $u_1'$ and $u_2'$, with

$$u_2' = \frac{1}{2}(D - \delta)$$

and

$$u_1' = \frac{1}{2}(D + \delta)$$

This gives the components of $v$ as

$$v_x = \frac{u_2'}{D}u_1 = \frac{u_1}{2}\left(1 - \frac{\delta}{D}\right) \tag{32}$$

and

$$v_y = \frac{u_1'}{D}u_2 = \frac{u_2}{2}\left(1 + \frac{\delta}{D}\right) \tag{33}$$

and the magnitude is

$$v = \frac{1}{2}\sqrt{D^2 + \delta^2 - 2\frac{\delta}{D}\left(u_1^2 - u_2^2\right)} \tag{34}$$

Writing this in terms of $u_1$ and $u_2$ is left as an exercise for the reader:

$$v = \sqrt{\frac{1}{2}\left(u_1^2 + u_2^2 - u_1 u_2 - \frac{(u_1 - u_2)^2(u_1 + u_2)}{\sqrt{u_1^2 + u_2^2}}\right)} = \frac{1}{\sqrt{2}}\sqrt{u_1 u_2 - (u_1 - u_2)^2\left(\frac{u_1 + u_2}{\sqrt{u_1^2 + u_2^2}} - 1\right)}$$

Here $D = \sqrt{u_1^2 + u_2^2}$ and $\delta = u_1 - u_2$.

### Alternative Approaches

**Non-Cartesian Differential Equations.** Effectively a graphical approach without graphics, one can focus on the relative velocity vectors as coordinate axis. Then the important equations of motion are

$$\frac{\mathrm{d}u_{1r}}{\mathrm{d}t} = -\frac{F}{m} \qquad \frac{\mathrm{d}u_{2r}}{\mathrm{d}t} = -\frac{F}{m} \tag{35}$$

where the force magnitude $F$ is a function of the relative directions of the coordinate axes $\hat{u}_{1r}$ and $\hat{u}_{2r}$.

The student can quickly realize that the difference of these two expressions is zero, so that $\delta$ is a constant of the motion. At steady state, where $F = 0$, and this happens when $\hat{u}_{1r}$ and $\hat{u}_{2r}$ point in opposite directions.

**Cartesian Differential Equations.** Attempting to set up equations of motion in a Cartesian system requires finding the direction of velocity of each surface. Assuming that $u_x$ is in the $x$ direction and $u_y$ is in the $y$ direction, and if the velocity components of the block are $v_x$ and $v_y$, the relative velocities of the planes are

$$u_{1rx} = u_1 - v_x \text{ and } u_{1ry} = -v_y$$

and

$$u_{2rx} = -v_x \text{ and } u_{2ry} = u_2 - v_y$$

The forces of friction from each plate are equal in magnitude and directed along the relative velocity vectors, so a steady state solution is when these two relative vectors are anti-parallel with each component being equal in magnitude. The force from each plate has components

$$F_{1x} = F\frac{u_{1rx}}{u_{1r}} \text{ and } F_{1y} = F\frac{u_{1ry}}{u_{1r}}$$

and

$$F_{2x} = F\frac{u_{2rx}}{u_{2r}} \text{ and } F_{2y} = F\frac{u_{2ry}}{u_{2r}}$$

This gives the following equations of motion for the block:

$$\frac{\mathrm{d}v_x}{\mathrm{d}t} = a_x = \frac{F}{m}\left(\frac{u_{1rx}}{u_{1r}} + \frac{u_{2rx}}{u_{2r}}\right)$$

and

$$\frac{\mathrm{d}v_y}{\mathrm{d}t} = a_y = \frac{F}{m}\left(\frac{u_{1ry}}{u_{1r}} + \frac{u_{2ry}}{u_{2r}}\right)$$

The conserved quantity $\delta$ and the steady-state anti-parallel condition then lead to the same final result (34).

*Note: The source additionally documents several "Possible Error Scenarios" (e.g. assuming the friction direction is the vector sum of the relative velocities, or assuming the final velocity is the vector sum of the velocities of the plates) together with their partial-credit grading schemes; these are marking-scheme material and are not reproduced here.*
