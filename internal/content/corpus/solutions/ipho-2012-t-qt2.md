---
id: ipho-2012-t-qt2
source: ipho
language: en
solution_language: en
translated: false
problem: ipho-2012-t-qt2
solution_type: official
source_document: solution-document-ipho-2012-t-s
source_pdf: cache/phoxiv/ipho/2012_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/ipho/2012_T_S.pdf."
---

Problem T2. Kelvin water dropper (8 points)
Part A. Single pipe (4 points)
i. (1.2 pts) Let us write the force balance for the droplet.
Since d ≪ r, we can neglect the force π
4 ∆pd2
due to the excess
pressure ∆p inside the tube. So, the gravity force 4
3πr3
maxρg
is balanced by the capillary force. When the droplet separates
from the tube, the water surface forms in the vicinity of the
nozzle a “neck”, which has vertical tangent. In the horizontal
cross-section of that “neck”, the capillary force is vertical and
can be calculated as πσd. So,
rmax = 3
%
3σd
4ρg
.
ii. (1.2 pts) Since d ≪ r, we can neglect the change of the
droplet’s capacitance due to the tube. On the one hand, the
droplet’s potential is ϕ; on the other hand, it is 1
4πε0
Q
r . So,
Q = 4πε0ϕr.
iii. (1.6 pts) Excess pressure inside the droplet is caused by
the capillary pressure 2σ/r (increases the inside pressure), and
by the electrostatic pressure 1
2ε0E2
= 1
2ε0ϕ2
/r2
(decreases the
pressure). So, the sign of the excess pressure will change, if
1
2ε0ϕ2
max/r2
= 2σ/r, hence
ϕmax = 2
&
σr/ε0.
The expression for the electrostatic pressure used above can
be derived as follows. The electrostatic force acting on a surface
charge of density σ and surface area S is given by F = σS ·Ē,
where Ē is the field at the site without the field created by the
surface charge element itself. Note that this force is perpen-
dicular to the surface, so F/S can be interpreted as a pressure.
The surface charge gives rise to a field drop on the surface equal
to ∆E = σ/ε0 (which follows from the Gauss law); inside the
droplet, there is no field due to the conductivity of the droplet:
Ē− 1
2∆E = 0; outside the droplet, there is field E = Ē+ 1
2∆E,
therefore Ē = 1
2E = 1
2∆E. Bringing everything together, we
obtain the expression used above.
Note that alternatively, this expression can be derived by
considering a virtual displacement of a capacitor’s surface and
comparing the pressure work p∆V with the change of the elec-
trostatic field energy 1
2ε0E2
∆V .
Finally, the answer to the question can be also derived from
the requirement that the mechanical work dA done for an in-
finitesimal droplet inflation needs to be zero. From the en-
ergy conservation law, dW + dWel
= σ d(4πr2
) + 1
2ϕ2
max dCd,
where the droplet’s capacitance Cd = 4πε0r; the electrical work
dWel
= ϕmaxdq = 4πε0ϕ2
maxdr. Putting dW = 0 we obtain an
equation for ϕmax, which recovers the earlier result.
Part B. Two pipes (4 points)
i. (1.2 pts) This is basically the same as Part A-ii, except
that the surroundings’ potential is that of the surrounding
electrode, −U/2 (where U = q/C is the capacitor’s voltage)
and droplet has the ground potential (0). As it is not defined
which electrode is the positive one, opposite sign of the po-
tential may be chosen, if done consistently. Note that since
the cylindrical electrode is long, it shields eﬀectively the en-
vironment’s (ground, wall, etc) potential. So, relative to its
surroundings, the droplet’s potential is U/2. Using the result
of Part A we obtain
Q = 2πε0Urmax = 2πε0qrmax/C.
ii. (1.5 pts) The sign of the droplet’s charge is the same as
that of the capacitor’s opposite plate (which is connected to
the farther electrode). So, when the droplet falls into the bowl,
it will increase the capacitor’s charge by Q:
dq = 2πε0UrmaxdN = 2πε0rmaxndt
q
C
,
where dN = ndt is the number of droplets which fall during
the time dt This is a simple linear diﬀerential equation which
is solved easily to obtain
q = q0eγt
, γ =
2πε0rmaxn
C
=
πε0n
C
3
%
6σd
ρg
.
iii. (1.3 pts) The droplets can reach the bowls if their mech-
anical energy mgH (where m is the droplet’s mass) is large
enough to overcome the electrostatic push: The droplet starts
at the point where the electric potential is 0, which is the sum of
the potential U/2, due to the electrode, and of its self-generated
potential −U/2. Its motion is not aﬀected by the self-generated
field, so it needs to fall from the potential U/2 down to the po-
tential −U/2, resulting in the change of the electrostatic energy
equal to UQ ≤ mgH, where Q = 2πε0Urmax (see above). So,
Umax =
mgH
2πε0Umaxrmax
,
∴ Umax =
$
Hσd
2ε0rmax
= 6
%
H3gσ2ρd2
6ε3
0
.
— page 4 of 5 —
