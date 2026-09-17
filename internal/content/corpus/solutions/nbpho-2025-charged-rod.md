---
id: nbpho-2025-charged-rod
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2025-charged-rod
solution_type: official
source_document: solution-document-nbpho-2025-s
source_pdf: cache/phoxiv/nbpho/2025_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2025_S.pdf."
---

7. CHARGEDROD(6points) —SolutionbyJaan
Kalda, grading schemes by....
i) (2 points) Notice that all particles with the
same charge‐to‐mass ratio orbit in a homo‐
geneous magnetic field B with the same fre‐
quency ωB = Bq
m ; the orbit is a circle of ra‐
dius r = v
ωB
. Indeed, the Lorentz force must
provide the centripetal acceleration, hence
Bqv = mvωB ⇒ ωB = Bq
m .
Sincethemass‐to‐chargeratioisthesame
for all the fictitious pieces of the rod, if the
rod rotates with angular speed ω = Bq
m , then
theLorentzforceprovidesexactlytheneeded
acceleration to all these pieces, and the ten‐
sion force is zero everywhere.
On the other hand, if the angular speed
were smaller or larger, we would have either
Bqv < mvω or Bqv > mvω for all the pieces,
resulting in either stretching or compressive
tensionforceatthecentreoftherod,respect‐
ively. Therefore, the answer is ω = Bq
m .
Grading: (preliminary)
• Considersforcesonaninfinitesimalpartof
the rod 0.4pts
• Equates, with justification, Lorentz and
centrifugal forces dqvB = dmω2
r 0.4pts
• Uses ω = v
r 0.4pts
• Uses dq
dm = q
m 0.4pts
• Expresses ω = qB
m 0.4pts
ii)(4points)Tobeginwith,letusnoticethatif
a system of charges with the same charge‐to‐
massratioα = q/mmovesinahomogeneous
magnetic field, the centre of mass will move
along a circle with cyclotron frequency ωB.
Indeed, the total Lorentz force acting on the
system is
∑
i
qi
d⃗ ri
dt
× ⃗ B = α
∑
i
mi
d⃗ ri
dt
× ⃗ B
= α
d⃗ rC
dt
× ⃗ B
∑
i
mi.
So, Newton’s second law reads
d2
⃗ rC
dt2
∑
i
mi =
q
m
d⃗ rC
dt
× ⃗ B
∑
i
mi.
The total mass of the system cancels out
from this equation, and we can see that the
centre of mass ⃗ rC moves in the same way as
a point charge q with mass m.
Alternatively, the same can be achieved
through integration. From Newton’s second
law m⃗ aC =
∫
dq⃗ v × ⃗ B, where ⃗ v is the ve‐
locity of the charge element dq. But since
the mass and charge distributions are ho‐
mogenous, dq = q
m dm and ⃗ B is constant
so it can be taken out from the integral to
achieve m⃗ aC = q
m
(∫
⃗ v dm
)
× ⃗ B. But now
the integral is just m⃗ vC (can be seen directly
or through the definition of centre of mass ∫ d⃗ r
dt dm = d
dt
∫
⃗ rdm = m⃗ rC. Thus we get
m⃗ aC = q⃗ vC × ⃗ B.
Additionally, the rod can (and will) rotate
with a constant speed. The fact that the an‐
gular speed must be constant follows from
theconservationofkineticenergyoftherod,
which is the sum of the kinetic energy of
its centre of mass and the rotational energy
around the centre of mass. The former is
constant, so the latter must be as well.
The centre of mass moves with speed v/2
and draws a circle of radius R = mv
2Bq that
passes through the point (l
2,0) and for which
the x‐axis is a symmetry axis. The red end
can reach the origin only when the centre
of mass is at a distance l
2 from the origin.
This can happen either after a full cyclotron
periodT = 2π/ωB, oratanymomentassum‐
ing R = l
2 and the circle is centred around
the origin.
To determine if this can happen earlier
than after time T, let us assume that R =
mv
2Bq = l
2. In that case, the angular speed
of the rod’s rotation is Ω = v
l , and we get
v = Bql
m . This means Ω = Bq
m = ωB, i.e., the
rod’s rotational angular speed is the same as
the centre of mass’ angular speed in its orbit,
which would cause the blue end to remain at
the origin.
Next,weexamineiftheredendcanreach
the origin after time T. For this to happen,
the condition is that ΩT = (2πn + π), where
n is an integer. Since Ω = v/l and we need
to minimize v, we take n = 0 to obtain v =
πl/T = lBq
2m .
Grading: (preliminary)
• Deduces, with justification, that the net
force on the rod ⃗ F = q⃗ vC × ⃗ B 0.5pts
• Uses vC = v/2 0.2pts
• Justifies that the COM moves on a circular
path 0.3pts
• Expresses the radius of the path traced by
the COM R = mv
2qB 0.3pts
• Concludes that the angular velocity of the
COM is ω = qB
m 0.2pts
• Expresses the angular velocity of the rota‐
tion around the COM Ω = v
l 0.2pts
• Justifies that Ω is conserved 0.3pts
• Argues that t < 2π
ω is possible only if R =
l/2 0.5pts
• Justifies that in this case, the red end will
never end up at the origin 0.5pts
• Justifies that Ωt = π + 2πk with k ∈ Z⩾0
0.4pts
• Expresses v = qBl
m (1
2 + k) 0.6pts
