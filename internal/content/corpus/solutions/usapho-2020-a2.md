---
id: usapho-2020-a2
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2020-a2
solution_type: official
source_document: solution-document-usapho-2020-s
source_pdf: cache/phoxiv/usapho/2020_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2020_S.pdf."
---

Question A2
Swoosh!
In 1851, Léon Foucault built a pendulum 67 metres tall with a 28-kg weight. He connected it to the
top of the Panthéon in Paris with a bearing that enabled it to freely change its plane of oscillation.
Because of the Earth’s rotation, the plane of oscillation slowly moved over time: if we imagine
a large horizontal clock under the pendulum, if initially the oscillations went from “12” to “6”,
later on they would move to the “3-9” plane, for example, as shown in the figure below. Perhaps
surprisingly, the time it took the oscillations to go back to their original plane is longer than 12
hours. In this problem we will investigate why this is the case, and what the shape the pendulum
traces out.
Figure 1: Left: A schematic of Foucault’s pendulum. Right: The pendulum motion projected on a
horizontal plane in the rotating lab frame.
First, consider the case of a Foucault pendulum installed precisely at the North Pole, with
length l. We denote
p
g/l = ω. The angular velocity of the Earth is Ω.
John is an observer looking at the pendulum from a fixed point in space. At t = 0, he sees the
pendulum at position (A,0) and with velocity (0,V ) in the x-y (horizontal) plane.
a. For John, what are the approximate equations describing the motion of the pendulum in the
x-y plane? You may assume that the amplitude of the oscillations is small. We define the
coordinates of the pendulum at rest as (0,0).
Solution
John’s reference frame is inertial and the point of attachment stationary, so this is a free-
moving pendulum obeying simple harmonic motion in each axis:
ax + ω2
x = 0;ay + ω2
y = 0, (A2-1)
b. What will the coordinates x,y in Jonh’s frame be at a later time t?
Solution
The solution to Eq.(A2-1) is the familiar simple harmonic motion. In general, if the dis-
placement is r = Acosωt, then the velocity is v = −Aω sinωt. Using the inital conditions
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part A 5
provided, we have:
x(t) = Acos(ωt);y(t) =
V
ω
sin(ωt). (A2-2)
Note that this corresponds to an ellipse.
c. Ella, an observer resides at the North Pole, is also looking at the pendulum. What are the
coordinates, x̃(t) and ỹ(t), as observed by Ella? Assume that at time t = 0, the coordinate
systems of John’s and Ella’s overlap.
Solution
In the rotating frame, we have x̃ = xcos(Ωt) + y sin(Ωt), ỹ = −xsin(Ωt) + y cos(Ωt) (with
2π/Ω = 24 hrs). Plugging in the form of x(t) and y(t) we find:
x̃ = Acos(ωt)cos(Ωt) +
V
ω
sin(ωt)sin(Ωt), (A2-3)
and:
ỹ = −Acos(ωt)sin(Ωt) +
V
ω
sin(ωt)cos(Ωt). (A2-4)
d. What is the speed of the pendulum bob observed by Ella at t = 0?
Solution
In John’s frame, the velocity at this time is (0,V ). To get the velocity in Ella’s frame, we
can either take the derivative of the result of part (c) directly, or transform the velocity
obtained in John’s frame to Ella’s frame, not forgetting to add the term −ΩA to the initial
velocity in the y axis. This gives
ṽx ≈ (V − ΩA)sin(Ωt);ṽy = (V − ΩA)cos(Ωt). (A2-5)
At t = 0, ṽx = 0 and ṽy = V − ΩA.
e. Find the initial conditions for A,V , such that as measured in Ella’s frame:
i. the pendulum passes precisely through its resting position.
Solution
Considering the motion in John’s frame, clearly the pendulum will pass through the
resting position if and only if V = 0.
ii. it has a “spike” at the points of maximal amplitude (see figure below) instead of a “rounded”
trajectory.
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part A 6
Figure 2: Two possible trajectories with “spike”(left) and more “rounded” (right).
Solution
To have a spike, we need the velocity to vanish at the extremal points in Ella’s frame.
This gives the condition:
V = ΩA. (A2-6)
Note that in Ella’s frame, this implies releasing the pendulum from rest at some ampli-
tude.
In a rotating frame, a fictitious force known as the Coriolis force acts on the particles. For
Foucault’s pendulum, the Coriolis force acts primarily in the horizontal plane, in a direction
perpendicular to the velocity of the mass in the Earth’s frame with magnitude:
F = 2mΩv · sinθ, (A2-7)
where m and v are the pendulum’s mass and its velocity, and θ the latitude (90◦ for the North
Pole). Note that when the velocity changes sign, so does the Coriolis force.
f. How long would it take for the plane of oscillation of Foucault’s pendulum to return to its initial
value in Paris, which has a latitude of about 49◦.
Solution
Since the expression for the Coriolis force only depends on the combination Ωsin(θ), and
since the solution at the North Pole must be π/Ω = 12hours, the time at a general latitude
must be:
T =
π
Ωsin(θ)
. (A2-8)
For Paris, the time is about 16 hours.
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part A 7
