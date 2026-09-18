---
id: usapho-2013-a2
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2013-a2
solution_type: official
source_document: solution-document-usapho-2013-s
source_pdf: cache/phoxiv/usapho/2013_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2013_S.pdf."
---

Question A2
A solid round object of radius R can roll down an incline that makes an angle θ with the horizontal.
Assume that the rotational inertia about an axis through the center of mass is given by I = βmR2.
The coefficient of kinetic and static friction between the object and the incline is µ. The object
moves from rest through a vertical distance h.
a. If the angle of the incline is sufficiently large, then the object will slip and roll; if the angle
of the incline is sufficiently small, then the object with roll without slipping. Determine the
angle θc that separates the two types of motion.
b. Derive expressions for the linear acceleration of the object down the ramp in the case of
i. Rolling without slipping, and
ii. Rolling and slipping.
Solution
a. Answering this question essentially requires answering part (b) first. As the object rolls down
the incline, the torque about the center of mass is
τ = Rf
where f is the friction force. Then the angular acceleration is
α =
τ
I
=
f
βmR
.
The linear acceleration of the object satisfies
ma = mg sinθ − f.
Now suppose the object is rolling without slipping. Then a = αR = f/βm, and combining
our equations gives
ma = mg sinθ − βma ⇒ a =
g sinθ
1 + β
.
Then the friction force is
f = βma =
βmg sinθ
1 + β
.
The critical angle for slipping is the angle where f is equal to the maximum possible static
friction force, f = µmg cosθ. Combining and solving gives
tanθc = µ

1 +
1
β

.
b. i. As found above, the acceleration is
a =
g sinθ
1 + β
.
ii. In this case, the friction force is equal to the kinetic friction, f = µmg cosθ. Then
ma = mg sinθ − µmg cosθ ⇒ a = g(sinθ − µcosθ).
Note that a, as a function of θ, is continuous at the angle θc. This is because we took
the coefficients of kinetic and static friction to be equal.
Copyright c 2013 American Association of Physics Teachers
2013 Semifinal Exam Part A 6
