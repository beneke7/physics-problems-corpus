---
id: nbpho-2021-rotating-space-station
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2021-rotating-space-station
solution_type: official
source_document: solution-document-nbpho-2021-s
source_pdf: cache/phoxiv/nbpho/2021_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2021_S.pdf."
---

3. ROTATıNG ſPACE ſTATıON (13 points) —
Solution by Kaarel Hänni, grading schemes by
Adam Warnerbring, Kaur Aare Saar, Maksim
Pokrovskiy and ....
i) (0.5 points) Letting ω be the angular velo‐
city, the acceleration experienced by people
on the “ground” is ω2
R =
¡2π
τ
¢2
R. Setting this
equal to g gives
µ
2π
τ
¶2
R = g =⇒ τ=2π
s
R
g
≈63.437s.
Grading:
• Finding the acceleration at the ”ground”
0.2pts
• Correct expression for the period 0.2pts
• Correct numerical answer 0.1pts.
ii) (2 points) Let us consider the motion of
theballinthenon‐rotating(inertial)frameof
the center of mass of the spaceship. As the
travel time is t = τ/2, the throwing point on
the ground will rotate by exactly half a circle
between the ball being thrown and the ball
being caught. In our inertial frame, the tra‐
jectory of the ball will just be a straight line
between these two diametrically opposed
points; this has length 2R. In this inertial
frame, the ball thus travels with a constant
velocity vinertial = 2R
τ/2 = 4R
τ
(in the radial dir‐
ection). The initial velocity vector in the ro‐
tating frame is the difference of the velocity
vector in the inertial frame and the velocity
vector of the throwing point in the rotating
frame compared to the inertial frame. So the
initial velocity vector in the rotating frame
has a radial component of 4R
τ
and a tangen‐
tial component of 2πR
τ
. The throwing speed s
is the magnitude of this vector, which is
s=
s
µ
4R
τ
¶2
+
µ
2πR
τ
¶2
=
2R
τ
p
4+π2 ≈117 m/s.
Grading:
• Finding the trajectory in an inertial frame
8
15 pts
• Finding the radial velocity 8
15 pts
• Finding the tangential velocity 8
15 pts
• Correct velocity addition 4
15 pts
• Correct numerical answer 2
15 pts.
iii) (2 points) When the balloon comes to a
stop,itisinequilibriumintherotatingframe.
An object at radius R0
of mass m1 has a ficti‐
tious radial (downward) force of m1ω2
R0
act‐
ing on it in this frame. This force on the
mass m is mω2
(R−H+l). The upward force
on the balloon is the difference between this
force for the balloon and the buoyant force
in the rotating frame, which is 4
3πr3
(M −
M0
) n
V ω2
(R−H)= 4
3πr3
(M−M0
) P
RGT ω2
(R−H).
Putting all this together, we can write down
theconditionthattheradialforceis0inequi‐
librium
mω2
(R−H+l)=
4
3
πr3
(M−M0
)
P
RGT
ω2
(R−H)
=⇒ m=
4
3πr3
(M−M0
)P(R−H)
RGT(R−H+l)
≈110.8 kg.
Grading: If l is neglected, i.e. the mass
and balloon are considered to be at equal
heights, this problem is marked out of 1.0
pts maximum. Idea: balance of fictitious ra‐
dial force and buoyant force 0.8 pts. Correct
expression for force on balloon 0.5 pts and
mass 0.2 pts. Force balance correct 0.2 pts.
Expression for m correct 0.2 pts. Numerical
answer correct 0.1 pts.
iv) (1.5 points)In the rotating frame, letting r
be the distance from the axis of the cylinder,
there is an effective radial potential of
φ(r)=
Z r
0
(−ω2
x) dx=−
ω2
r2
2
,
where we have chosen the potential zero
level to be at r = 0. In other words, in
this frame, there is a fictitious radial force
of m1ω2
r = −m1
dφ
dr acting on an object of
mass m1. The rope takes a shape that minim‐
izes this potential energy. For this part and
the next, we will just be figuring out prop‐
erties of a rope that minimizes this poten‐
tial energy (and other than that, we can for‐
get about the rotation). Consider cutting off
a tiny piece of rope of length ℓ from point
C, then pulling the rope tight at C and glu‐
ing it back together (doing work ℓTC), then
cutting the rope open at A, letting it slip by
length ℓ (doing work −ℓTA), and finally mov‐
ingthetinypiecefrompoint C topoint A (do‐
ing work ℓλ(φ(R)−φ(R −h)) = −ℓλω2h(2R−h)
2 ),
filling the gap of length ℓ. The state of the
rope is now the same as initially, so the total
work done should be 0:
ℓTC −ℓTA −
ℓλω2
h(2R−h)
2
=0,
from where
TA −TC =−
λ2π2
h(2R−h)
τ2
.
See 200 More Puzzling Physics Problems,
problem 78 (and its hint and solution) for a
longer explanation of this idea.
Grading: Idea: move piece of rope from
C to A/B 0.2 pts. Idea: work done by tension
0.1 pts and correct expression 0.3 pts. Idea:
change in radial potential in rotating frame
OR kinetic energy in lab frame 0.1 pts and
correct expression 0.3 pts. Total work done
iszero0.2pts. Correctanswerfortensiondif‐
ference 0.3 pts.
v) (1.5 points)Let’s use the equilibrium condi‐
tion that torque around the center of the cyl‐
inder is 0 (in the rotating frame) for the left
half of the rope. Note that the fictitious force
is radial, so that contributes nothing to the
force. So the only contributions are from the
tension in the rope on the two sides, so
RTA cosα=(R−h)TC =⇒
TA
TC
=
R−h
Rcosα
.
Grading: Idea: rope in equilibrium 0.2
pts. Using zero total torque as condition 0.2
pts. Eliminating radial force by choice of
point 0.4 pts. Some correct torque expres‐
sion containing both tensions 0.2 pts. Cor‐
rect ratio 0.5 pts.
vi) (1.5 points)Let the x‐axis be the diameter
AB, with coordinates chosen to be in meters,
and with the coordinates of A being (−R,0).
(So the coordinates of B are (R,0) and the co‐
ordinates of C are (0,−(R −h)). The unique
parabola y = ax2
+ bx + c that goes through
these three points has b = 0 from symmetry
across the y axis, c = −(R −h) from condsid‐
ering the point C, and then a = −R−h
R2 from
considering the point A. The derivative at A
is dy
dx |x=−R =2a·R =−2(R−h)
R , from which
cosα=
−dy
p
(dy)2 +(dx)2
=
1
r
1+
³
dx
dy
´2
=
1
q
1+ R2
4(R−h)2
≈0.7106.
Using the equations from parts (iv) and
(v), wenowhaveasystemofequationsintwo
unknowns:
(
TA −TC =−λ2π2h(2R−h)
τ2
RTA ·0.7106=(R−h)TC
.
It remains to solve this system of equa‐
tions. The second equation gives TA =
TC
R−h
R·0.7106 ≈ TC ·0.7107. Plugging this into
the first equation then gives
TC =
λ2π2
h(2R−h)
τ2(1−0.7107)
≈12631 N.
Grading: Some correct parabola given
some choice of axes 0.3 pts. Correct expres‐
sion for cosα 0.2 pts and correct numerical
value 0.2 pts. System of equations using ex‐
pressions found in iv) and v), even if they
are incorrect, 0.2 pts. Correct expression
for tension 0.4 pts. Solved only for TA: full
marks with penalty ‐0.1 pts. Correct numer‐
ical value for TC 0.2 pts.
vii)(2points)Therotatingchargeonthewalls
is making the spaceship into a solenoid car‐
rying current I =
Q
τ
. Inside of the spaceship,
this creates a constant axial magnetic field of
magnitude
B =µ0
I
L
=µ0
Q
τL
.
The force this creates on the charged ball
is −qvB = −q2πR
τ
µ0
Q
τL in the radial upward
direction. For the ball to hover above the
“ground” motionlessly, the acceleration cre‐
atedbythisradialforcehastobeequaltothe
centripetal acceleration ω2
R = (2π)2R
τ2 :
−
q
m
2πR
τ
µ0
Q
τL
=
(2π)2
R
τ2
=⇒
q
m
=−
2πL
µ0Q
.
Grading:
Method 1:
• Finding the current 4
15 pts
• Finding the magnetic field 0.4pts
• Finding the upward force on the charged
ball 2
3 pts
• Writing out the centripetal acceleration of
the ball 4
30 pts
• Correct relation between force and acceler‐
ation 4
15 pts
• Correct final expression 4
15 pts
• Wrong sign of the charge − 4
15 pts
Method 2:
• Finding the current 4
15 pts
• Finding the magnetic field 0.4pts
• Finding the upward force on the charged
ball 2
3 pts
• Writing out the force balance in the rotat‐
ing frame (with the correct expression of
the upward force) 0.4pts
• Correct final expression 4
15 pts
• Wrong sign of the charge − 4
15 pts
viii) (2 points) Consider a charge q1 at rest
at radius r in the rotating frame. The
electromagnetic force applied to it is frame‐
independently q1
2πr
τ
µ0
Q
τL. This charge is not
moving in the rotating frame, so in its frame,
the force applied to it by the magnetic field
must be 0, and so the electric field measured
in its frame must satisfy q1E = q1
2πr
τ
µ0
Q
τL,
from where
⃗ E =
2πµ0Q
τ2L
⃗ r.
We now have an expression for E at each
point in the rotating frame; what remains is
to evaluate
H
⃗ E ·d⃗ A. For the sake of variety,
wewilldemonstratetwowaystoevaluatethis
integral.
For the first option, note that our ⃗ E =
const·⃗ r is exactly the electric field of a uni‐
formly charged cylinder (with the correctly
chosenchargedensity),andsowecouldequi‐
valently find the same integral around such
a uniformly charged cylinder, which Gauss’
theorem gives as Vρ/ϵ0 = V · c1. We can find
anexpressionfortheconstant c1 byconsider‐
ing the simple case where the surface we are
dealing with is a cylinder of width 1 m itself,
in which case the integral is
I
⃗ E·d⃗ A =1 m·2πr
2πµ0Q
τ2L
r =V
4πµ0Q
τ2L
.
Hence, c1 =
4πµ0Q
τ2L
, and so
I
⃗ E·d⃗ A =V
4πµ0Q
τ2L
.
To briefly describe a second option for
evaluating this integral, note that by parti‐
tioning a 3D body into volume slices, with
each slice bounded by an area element d⃗ A
andwithcylindricalradiusvector⃗ r,andwith
the volume of each slice being ⃗ r ·d⃗ A/2, we
get that the volume of the body is the sum of
volumes of all such slices,
V =
I
1
2
⃗ r·d⃗ A.
This lets us evaluate the main integral as
I
⃗ E·d⃗ A =
I
2πµ0Q
τ2L
⃗ r·d⃗ A
=
4πµ0Q
τ2L
I
1
2
⃗ r·d⃗ A =
4πµ0Q
τ2L
V.
Grading:
• Arguing that in the rotating frame there is
only an electric field 0.4pts
• Finding the electric field strength 0.4pts
• Choosing a suitable Gauss surface 0.4pts
• Evaluating the surface integral and obtain‐
ing the correct answer 0.8pts.
