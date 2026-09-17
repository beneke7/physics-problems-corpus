---
id: nbpho-2024-cones
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2024-cones
solution_type: official
source_document: solution-document-nbpho-2024-s
source_pdf: cache/phoxiv/nbpho/2024_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2024_S.pdf."
---

6. CONEſ (8 points) — Solution by Tudor
Plopeanu, grading schemes by Eppu Leinonen
and Aleksi Kononen.
i) (2 points) We will consider any extreme
point on the red heart and its reflection.
This may be easiest and most precise for the
points furthest from the center of the pic‐
ture, but any edge point of the red heart
would suffice. Let θ be the cone’s half apex
angle. Let r be the measured ratio of the
(angular) distance from the perceived im‐
age to the mirror and the perceived im‐
age to the original point. Then, tanθ
tan2θ =
r, so θ = arccos 1 √
2(1−r)
, or alternatively
arctan
√
1 − 2r. Of course, the apex angle is
2θ, which is double the above.
For measured r = 0.25, we have the an‐
swer 2θ ≈ 1.22 radians, or 71 degrees.
Grading: (preliminary)
• Stating that the image is formed by vertical
rays as the camera is far away (0.5pts)
• Correct explicit expression of θ with re‐
spect to r (or some other measurable vari‐
able) (1pts) (if not found, partial points
can be earned as below)
– Correct geometrical figure (0.2pts)
– r = tanθ/tan2θ or equivalent or a cor‐
rect implicit equation for θ (0.5pts)
• Correct numerical answer 2θ ∈ [65◦
,76◦
]
(0.5pts) (only if approach is correct)
– If only θ is given and not 2θ (‐0.2pts)
ii) (1 point)The contribution of gravity along
thesideoftheconehastobeequaltothecon‐
tribution of the centrifugal force. As such,
mg cosθ = mv2
R sinθ, so v =
√
Rg cotθ.
Grading: (preliminary)
• Correct force balance (0.5pts)
• Correct expression for v (0.5pts)
• Mistakes in trigonometry (‐0.1pts)
iii) (2.5 points) The puck’s energy is the
sum of its gravitational potential energy and
its kinetic energy, so for a maximal ver‐
tical displacement hf, and the speed vf at
that moment, we have E = v2
8 + ghf =
v2
f
2 . From the conservation of angular mo‐
mentumbetweentheinitialmomentandthe
minimal distance to axis moment, when the
velocity is horizontal, we can deduce that
v
2R = vfRf, where Rf is the minimal dis‐
tance to the cone’s axis. We can relate hf and
Rf through
R−Rf
hf
= tanθ. Then, hf = (R −
Rf)cotθ. Replacing hf and vf in the energy
conservation, v2
8 = v2
R2
8R2
f
− g(R − Rf)cotθ.
Replacing v2
= Rg cotθ and solving the third
degreepolynomialinRf,8R3
f −9RR2
f +R3
=
0, yields the roots R, 1+
√
33
16 R, and some neg‐
ative value. Our minimal radius is, as such,
1+
√
33
16 R ≈ 0.42R.
Grading: (preliminary)
• Idea of using energy and angular mo‐
mentum conservation (0.2pts) (0.1 pts for
each)
• Correct energy conservation (0.5pts)
• Correct angular momentum conservation
(0.5pts)
• Correct relation between hf and Rf
(0.1pts)
• Correct third degree polynomial (0.5pts)
• Picking the physically relevant solution
(0.5pts)
• Correct final answer (0.2pts)
Puck at t=0
Puck trajectory
Asymptotic direction relative to vertex
φ = πsin(θ)
φ φ
φ
Cone vertex
iv) (2.5 points)Let us unfold the cone and re‐
peat its pattern, as in the figure above. We
notethattherelationbetweentheapexangle
and the angle of the unfolded cone are re‐
¹Weighing the string on a scale, we found the true value to be 0.135 g.
lated through the area of a cone πL2
sinθ =
φL2
and as such φ = π sinθ. The puck’s
trajectory is a straight line starting perpen‐
dicular to the edge of our unfolded cone.
The radius vector will rotate, in our draw‐
ing, by 90◦
= π/2 over an infinite period
of time. To match the rotation on our rep‐
resentation of the cone with the rotation of
the radius vector, we remind ourselves that
a 360 = 2π degree rotation of the radius vec‐
tor matches a 2φ rotation on our drawing. As
such, the number of radians of rotation will
be π
2
2π
2π sinθ = π
2sinθ .
Grading: (preliminary)
• Idea of folding out the cone (0.2pts)
• Stating that the trajectory is a straight line
in the folded plane (1pts)
• Correct90degreerotationinthefoldedpic‐
ture or a correct figure (0.6pts)
• Correctrelationbetweenrotationinthefol‐
dedplaneandtherotationoftheradialvec‐
tor (0.7pts)
– Using θ instead of 2θ as the apex angle
(‐0.3pts)
Solution 2 by Eppu Leinonen
Let ϕ be the total rotation angle of the
radius vector and r its length. The speed
related to ϕ̇ is rϕ̇ and the speed related to
ṙ is ṙcscϕ, the projection of which to the
radial axis is ṙ. Thus energy conservation
states that r2
ϕ̇2
+ ṙcscθ = v2
. Also the pro‐
jection of the angular momentum onto the
symmetry axis is also conserved and as such
r2
ϕ̇ = Rv. From this we solve ϕ̇ and substi‐
tute to the energy conservation equation to
get ṙ = v
p
1 − (R/r)2 sinθ. Integrating both
sides from time t = 0 to t = t (r(0) = R
and r(t) = r) yields r2
=
p
R2 + v2t2 sin2
θ.
Then ϕ̇ = Rv
R2+v2t2 sin2 θ which we can integ‐
rate from t = 0 to t = ∞ by noticing that
arctan′
x = 1/(1 + x2
) which gives ϕ∞ =
π
2sinθ .
Grading: (preliminary)
• Idea of using energy and angular mo‐
mentum (projection) (0.1pts) (both re‐
quired for points)
• Correct energy conservation with respect
to ϕ and r velocity components (can be
named freely e.g. vr and vϕ) (0.4pts)
• Correct angular momentum (projection)
conservation (0.4pts)
• Equivalent form ṙ = v
p
1 − (R/r)2
(0.5pts)
• Solving r(t) (partials below) (0.5pts)
– Correct integration boundaries (0.1pts)
• Solving ϕ∞ (partials below) (0.6pts)
– Setting up integral of the form ϕ∞ = R
Rv/r2
(t)dt (0.1pts)
– Correct integration boundaries (0.1pts)
– 1/sinθ dependence (0.3pts)
Solution 3 by Eppu Leinonen
Split the velocity into two components:
the velocity from changing angle of the ra‐
dius vector ϕ, v⊥, and the velocity up along
theconev∥.Incylindricalcoordinatesthera‐
dial force law now states N cosθ = mv⊥ϕ̇ −
mv̇∥ sinθ and the vertical force law now
states N sinθ = mv∥ cosθ. From this we can
solve for ϕ̇ = v̇∥/(v⊥ sinθ). From conserva‐
tion of energy v⊥ =
p
v2 − v∥ and thus ϕ∞ =
1
sinθ
Rv
0
dv∥
√
v2−v2
∥
= π
2sinθ . The integral can be
calculated easily by recoginising that it rep‐
resents a quarter of the area of a unit circle.
Grading: (preliminary)
• Correctradialandverticalequationsofmo‐
tion (0.4pts) (0.2 for each)
• Representingtheminϕ,v∥,v⊥ (0.4pts)(0.2
for each)
• Correct relation between ϕ̇ and v⊥, v̇∥
(0.5pts)
– For wrong trigonometric dependence (‐
0.2pts)
• Usingtheenergy conservationlawto relate
ϕ̇ to only v⊥ or v∥ and derivatives (0.7pts)
• Solvingtheintegral(0.5pts)(partialpoints
below)
– Correct integration boundaries (0.1pts)
– Noticing the area of a circle (0.2pts)
Solution4byAleksiKononenandEppuLeinonen
Split the velocity into two components:
the velocity from changing angle of the ra‐
dius vector ϕ, v⊥, and the velocity up along
the cone v∥. Go to the frame corotating with
puck. In this frame, there will be three iner‐
tial forces on the puck: centrifugal, Coriolis,
and Euler. Both the Coriolis and Euler forces
point perpendicularly to v∥ and tangentially
to the cone. However, as the frame is coro‐
tating v̇′
⊥ = 0 in the frame, and thus the
Coriolis and Euler forces must cancel. This
means that the radial component of the nor‐
mal force is Nr = mv2
⊥/r. Thus back in the
inertial frame we get v̇∥ =
v2
⊥
r sinθ. On the
other hand ϕ̇ = v⊥/r = 1
sinθ v̇∥/v⊥. From en‐
ergy conservation v⊥ =
q
v2 − v2
∥ and thus
ϕ∞ = 1
sinθ
Rv
0
dv∥
√
v2−v2
∥
= π
2sinθ . The integral
can be calculated easily by recoginising that
it represents a quarter of the area of a unit
circle.
Grading: (preliminary)
• Argument for why the radial compon‐
ent of the normal force is equal mv2
⊥/r
(0.7pts) (partials below for non‐inertial
frame method)
– Noting that in the inertial frame there
are three inertial forces (0.1pts)
– Noting that Coriolis and Euler forces are
parallel to v⊥ (0.3pts)
– Noting that Coriolis and Euler forces
must be equal as v̇′
⊥ = 0 (0.3pts)
• Noting that the radial component normal
force is equal to mv2
⊥/r (0.1pts)
• Correct relation between ϕ̇ and v⊥, v̇∥
(0.5pts)
– For wrong trigonometric dependence (‐
0.2pts)
• Usingtheenergy conservationlawto relate
ϕ̇ to only v⊥ or v∥ and derivatives (0.7pts)
• Solvingtheintegral(0.5pts)(partialpoints
below)
– Correct integration boundaries (0.1pts)
– Noticing the area of a circle (0.2pts)
