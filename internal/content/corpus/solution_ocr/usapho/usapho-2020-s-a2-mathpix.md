---
id: solution-ocr-usapho-2020-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2020_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2020-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A2

## Swoosh!

In 1851, Léon Foucault built a pendulum 67 metres tall with a 28-kg weight. He connected it to the top of the Panthéon in Paris with a bearing that enabled it to freely change its plane of oscillation. Because of the Earth's rotation, the plane of oscillation slowly moved over time: if we imagine a large horizontal clock under the pendulum, if initially the oscillations went from " 12 " to " 6 ", later on they would move to the "3-9" plane, for example, as shown in the figure below. Perhaps surprisingly, the time it took the oscillations to go back to their original plane is longer than 12 hours. In this problem we will investigate why this is the case, and what the shape the pendulum traces out.

![](../../../figures/solution-ocr/7906c7ffb12c3de9df878e3e.jpg)
Figure 1: Left: A schematic of Foucault's pendulum. Right: The pendulum motion projected on a horizontal plane in the rotating lab frame.

First, consider the case of a Foucault pendulum installed precisely at the North Pole, with length $l$. We denote $\sqrt { g / l } = \omega$. The angular velocity of the Earth is $\Omega$.

John is an observer looking at the pendulum from a fixed point in space. At $t = 0$, he sees the pendulum at position $( A , 0 )$ and with velocity $( 0 , V )$ in the $x - y$ (horizontal) plane.

a. For John, what are the approximate equations describing the motion of the pendulum in the $x - y$ plane? You may assume that the amplitude of the oscillations is small. We define the coordinates of the pendulum at rest as $( 0,0 )$.

## Solution

John's reference frame is inertial and the point of attachment stationary, so this is a freemoving pendulum obeying simple harmonic motion in each axis:

$$
\begin{equation*}
a _ { x } + \omega ^ { 2 } x = 0 ; a _ { y } + \omega ^ { 2 } y = 0 , \tag{A2-1}
\end{equation*}
$$

b. What will the coordinates $x , y$ in Jonh's frame be at a later time $t$ ?

## Solution

The solution to Eq.(A2-1) is the familiar simple harmonic motion. In general, if the displacement is $r = A \cos \omega t$, then the velocity is $v = - A \omega \sin \omega t$. Using the inital conditions


provided, we have:
$$
\begin{equation*}
x ( t ) = A \cos ( \omega t ) ; y ( t ) = \frac { V } { \omega } \sin ( \omega t ) . \tag{A2-2}
\end{equation*}
$$
Note that this corresponds to an ellipse.
c. Ella, an observer resides at the North Pole, is also looking at the pendulum. What are the coordinates, $\tilde { x } ( t )$ and $\tilde { y } ( t )$, as observed by Ella? Assume that at time $t = 0$, the coordinate systems of John's and Ella's overlap.

## Solution

In the rotating frame, we have $\tilde { x } = x \cos ( \Omega t ) + y \sin ( \Omega t ) , \tilde { y } = - x \sin ( \Omega t ) + y \cos ( \Omega t )$ (with $2 \pi / \Omega = 24 \mathrm { hrs } )$. Plugging in the form of $x ( t )$ and $y ( t )$ we find:

$$
\begin{equation*}
\tilde { x } = A \cos ( \omega t ) \cos ( \Omega t ) + \frac { V } { \omega } \sin ( \omega t ) \sin ( \Omega t ) , \tag{A2-3}
\end{equation*}
$$

and:

$$
\begin{equation*}
\tilde { y } = - A \cos ( \omega t ) \sin ( \Omega t ) + \frac { V } { \omega } \sin ( \omega t ) \cos ( \Omega t ) . \tag{A2-4}
\end{equation*}
$$

d. What is the speed of the pendulum bob observed by Ella at $t = 0$ ?

## Solution

In John's frame, the velocity at this time is $( 0 , V )$. To get the velocity in Ella's frame, we can either take the derivative of the result of part (c) directly, or transform the velocity obtained in John's frame to Ella's frame, not forgetting to add the term $- \Omega A$ to the initial velocity in the $y$ axis. This gives

$$
\begin{equation*}
\tilde { v } _ { x } \approx ( V - \Omega A ) \sin ( \Omega t ) ; \tilde { v } _ { y } = ( V - \Omega A ) \cos ( \Omega t ) . \tag{A2-5}
\end{equation*}
$$

At $t = 0 , \tilde { v } _ { x } = 0$ and $\tilde { v } _ { y } = V - \Omega A$.

e. Find the initial conditions for $A , V$, such that as measured in Ella's frame:
    i. the pendulum passes precisely through its resting position.

## Solution

Considering the motion in John's frame, clearly the pendulum will pass through the resting position if and only if $V = 0$.

ii. it has a "spike" at the points of maximal amplitude (see figure below) instead of a "rounded" trajectory.

![](../../../figures/solution-ocr/f5a801eaddf790e3e8bbf22e.jpg)
Figure 2: Two possible trajectories with "spike" (left) and more "rounded" (right).

## Solution

To have a spike, we need the velocity to vanish at the extremal points in Ella's frame. This gives the condition:

$$
\begin{equation*}
V = \Omega A . \tag{A2-6}
\end{equation*}
$$

Note that in Ella's frame, this implies releasing the pendulum from rest at some amplitude.

In a rotating frame, a fictitious force known as the Coriolis force acts on the particles. For Foucault's pendulum, the Coriolis force acts primarily in the horizontal plane, in a direction perpendicular to the velocity of the mass in the Earth's frame with magnitude:

$$
\begin{equation*}
F = 2 m \Omega v \cdot \sin \theta , \tag{A2-7}
\end{equation*}
$$

where $m$ and $v$ are the pendulum's mass and its velocity, and $\theta$ the latitude ( $90 ^ { \circ }$ for the North Pole). Note that when the velocity changes sign, so does the Coriolis force.

f. How long would it take for the plane of oscillation of Foucault's pendulum to return to its initial value in Paris, which has a latitude of about 49°.

## Solution

Since the expression for the Coriolis force only depends on the combination $\Omega \sin ( \theta )$, and since the solution at the North Pole must be $\pi / \Omega = 12$ hours, the time at a general latitude must be:

$$
\begin{equation*}
T = \frac { \pi } { \Omega \sin ( \theta ) } . \tag{A2-8}
\end{equation*}
$$

For Paris, the time is about 16 hours.
