---
id: nbpho-2025-evaporation
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2025-evaporation
solution_type: official
source_document: solution-document-nbpho-2025-s
source_pdf: cache/phoxiv/nbpho/2025_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2025_S.pdf."
---

2. EVAPORATıON (7points) —SolutionbyJaan
Kalda, grading schemes by Mattias Bjerklöv,
Marko Tsengov, Eppu Leinonen.
i) (2 points) Water is in a good approxima‐
tion incompressible; hence, when the piston
starts moving, the growing volume must be
filled by gas which can be only the water va‐
pours. Thus, the water starts boiling: these
vapours must be in equilibrium with water,
hence the vapour pressure must be equal to
the pressure inside the piston. We can read
from the graph that at T0, the vapour dens‐
ity is ρ = 420gm−3
; this corresponds to the
pressure p1 = ρRT/µ = 70kPa. With at‐
mospheric pressure p0 = 100kPa, the force
needed to pull the piston is S(p0 − p1) =
300N.
• Realize that the pressure inside the the cyl‐
inder equals the saturated vapour pressure
of water at temperature T0. 0.8pts
• Read the density ρ from the graph, in the
range [400,440]gm−3
. 0.2pts
• Use the ideal gas law to find an expression
for the pressure p1 at temperature T0.
0.4pts
• Correctexpressionfortheforce: S(p0−p1).
0.4pts
• Correct numerical answer. 0.2pts
ii) (2points)When the piston is pulled by dis‐
placement a, creating new volume Vnew =
S × a, the water partially evaporates to fill
this volume with vapour and the remaining
liquidwatercoolsfromtemperatureT0 toT1.
Themassofvapourmv neededtofillthenew
volume can be calculated using the vapour
density ρ1 = 405gm−3
as mv = Saρ1. For
theheatbalance,theenergyneededforevap‐
oration must come from the cooling of the
remaining liquid water:
mvL = (m − mv) · c · (T0 − T1); (1)
here we have neglected the dependence of L
on temperature, and heat capacity of water
vapours, because µL ≫ 4R(T1 − T0) (but we
have not neglected the work done by piston,
because L is actually the enthalpy of evapor‐
ationalreadyincludesp∆V ). Similarly, since
L ≫ c(T1 − T0), we can neglect mv in the
right‐hand‐side and express
m =
mvL
c(T0 − T1)
=
ρ1SaL
c(T0 − T1)
= 650g. (2)
• Read the vapour density ρ1 from the graph
(ρ1 ∈ [390,420]gm−3
). 0.2pts
• Correct expression for mass of water va‐
pour. 0.3pts
• Correct expression for the latent heat
(mvL). 0.3pts
• Correct expression for heat lost by water
((m − mv) · c · (T0 − T1).) 0.3pts
• Expression for energy conservation.
0.4pts
• Correct expression for mass of water m.
0.3pts
• Correct numerical answer m ∈ [630,680]g
(with correct dimension). 0.2pts
iii) (3 points) At the thermal equilibrium,
there is as much heat flux to the skin as there
is heat loss due to evaporation. The former
(per area) equals to κdT
dx and the latter (per
area) — to −LJm where m is the mass of one
molecule, which we find to be m = µ/NA
to get JµL/NA. Note that the minus sign
comes from the fact that the particles dif‐
fusefromhigherdensityareastolowerdens‐
ity areas. Now from the ideal gas law n =
P/TkB = PNA/TR to get J = −D d
dx
rp
TkB
=
−D d
dx
PNA
RT . Now the pressure of the water
vapour is related to r through P = rp, where
p denotes the saturation pressure of vapour.
So,
κ
dT
dx
= −
DLµ
R
d
dx
rp
T
,
wherep = p(T)denotesthewatervapoursat‐
urationpressureatthelocalairtemperature;
hence by integrating over x we obtain
κ(T − Ts) =
DLµ
R
[
p(Ts)
Ts
−
rp(T)
T
]
,
where the index s denotes quantities evalu‐
ated at the skin surface. Also, we have used
the fact that rs = 1, because at the skin sur‐
face, the air is in direct contact with water
(due to sweating, skin is wet), so that prs =
p(Ts). Substituting ρ = pµ
RT we obtain
ρ(Ts) = rρ(T) +
κ
DL
(T − Ts).
Here we evaluate from the graph rρ(T) =
24.3gm−3
and κ
DL = 0.51gm−3
K−1
. Now
we can draw this straight line onto the graph
provided to find the intersection point at
Ts = 41.5°C.
800
700
600
500
400
300
200
100
0
ρ
g/m3
40 45 55 65 75 70 60 50 80 90 100 105 95 85
T ℃
Grading: (preliminary)
NB! the ρ = pµ/RT substitution can be
done earlier so the schemes below represent
only the relevant observations which can be
done with ρ already. Also equivalent forms
will give points (i.e. if using k and Na instead
of R in the middle steps)
• heat going away from skin (up) = heat
going to skin (down) at the equilibrium
0.4pts
• Heat flux down κdT
dx 0.2pts
• Heat flux up magnitude DLµ
R
d
dx
P
T (partial
points available for the equivalents to the
steps below) 0.5pts
– Magnitude of heat flux up is LJm 0.3pts
– m = µ/NA 0.1pts
– n = P/TkB 0.1pts
• Deducingthatthedirectionoftheheatflow
is opposite to dn
dx (explicitly mentioned or
with the existence of the minus sign in the
equations) 0.1pts
• P = rp 0.1pts
• κ(T −Ts) = DLµ
R
[
p(Ts)
Ts
− rp(T)
T
]
(i.e. integ‐
rating correctly) 0.4pts
– Or doing a change from d → ∆ in the
derivatives has to be motivated properly
(i.e. for heat conductivity no need for
any explicit explanation but for Fick’s
lawonemuststatethatJ isconstant(due
to the amount of particles is conserved)).
• ρ = pµ/RT 0.1pts
• Reading ρ correctly (ρ1 ∈ [800,815]gm−3
))
0.2ppts
• Graphical method 0.8pts
– Noticingthatρ(Ts) = rρ(T)+ κ
DL(T−Ts)
defines a straight line in (T,ρ) 0.8pts
– Any other valid numerical method that
is explained is accepted
• Correct final result T ∈ [36,47]°C 0.2pts
If working with ρ earlier on one can show
that that the heat flux up magnitude is
Solution 2 by Eppu Leinonen: One can also
work directly with ρ through the fact that
n = N/V = MNA/µV = ρNA/µ. Then
the heat flux magnitude will directly become
LJm = LmDdn
dx = LmDNA
µ
dρ
dx = LDdρv
dx ,
where ρv is the density of the water vapour.
Then with correct signs we get
κ
dT
dx
= −LD
dρv
dx
from which by integrating and using ρv = rρ
we get
ρ(Ts) = rρ(T) +
κ
DL
(T − Ts)
andthesolutionproceedsthesamewayasin
solution 1.
The following grading scheme is given
to provide exact correspondences to the
scheme of solution 1. Grading:
• heat going away from skin (up) = heat
going to skin (down) at the equilibrium
0.4pts
• Heat flux down κdT
dx 0.2pts
• Heat flux up magnitude LDdρv
dx (partial
points available for the equivalents to the
steps below) 0.6pts
– Working with ρ directly 0.1pts
– Magnitude of heat flux up is LJm 0.3pts
– n = ρNA/µ 0.1pts
– µ = mNA 0.1pts
• Deducingthatthedirectionoftheheatflow
is opposite to dn
dx (explicitly mentioned or
with the existence of the minus sign in the
equations) 0.1pts
• ρv = rρv 0.1pts
• κ(T − Ts) = LD(ρ(Ts) − rρ(T)) (i.e. integ‐
rating correctly) 0.4pts
– Or doing a change from d → ∆ in the
derivatives has to be motivated properly
(i.e. for heat conductivity no need for
any explicit explanation but for Fick’s
lawonemuststatethatJ isconstant(due
to the amount of particles is conserved)).
• Reading ρ correctly (ρ1 ∈ [800,815]gm−3
))
0.2ppts
• Graphical method 0.8pts
– Noticingthatρ(Ts) = rρ(T)+ κ
DL(T−Ts)
defines a straight line in (T,ρ) 0.8pts
– Any other valid numerical method that
is explained is accepted
• Correct final result T ∈ [36,47]°C 0.2pts
