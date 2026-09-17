---
id: nbpho-2021-photon-rocket
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2021-photon-rocket
solution_type: official
source_document: solution-document-nbpho-2021-s
source_pdf: cache/phoxiv/nbpho/2021_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2021_S.pdf."
---

p1
¶
where cp = cv +R = R(i +2)/2 = Rγ/(γ−1) is
the heat capacity at constant pressure. The
net change in entropy is then
∆Stot =0=∆Svapour +∆Scondens
=∆Svapour −rn
ML
T0
= ncp ln
µ
T0
T1
¶
−nRln
µ
p0
p1
¶
−rn
ML
T0
.
Thus,
r =
RT0
ML
µ
ln
µ
p1
p0
¶
−
γ
γ−1
ln
µ
T1
T0
¶¶
=0.114.
To find the mass flow rate, we start by
finding the flow speed v of the outgoing li‐
quid/vapour. Since we know r, we can ap‐
plyenergyconservation(necessaryforthere‐
versibility to hold) on a flowing water packet.
This is most conveniently done by demand‐
ing energy conservation on the system as a
whole. Suppose that in some time interval n
moles of water vapour with a volume of Vt
are created at the boiler. Then at the out‐
let, in the steady state, due to conservation
of particles, (1− r)n moles of water vapour
at a volume of V0, alongside rn moles of li‐
quid water, are removed. The outflowing wa‐
terhasanadditionalkineticenergyof nµv2
/2.
The energy change of the whole system due
to both steps must cancel each‐other out due
to energy conservation. We can write this as
0=Win −Wout +Uin −Uout −nMv2
/2=0,
where Win = ptVt = nRTt and Wout = p0V0 =
(1 − r)nRT0 are the works done by the in‐
coming and outgoing packet and similarly,
Uin = cvnTt andUout = cvnT0−rnML+rnRT0
aretheinternalenergiesoftheincomingand
outgoing packet. Notice that for the outgo‐
ing internal energy, we have an extra term of
rp0V0 = rnRT0. This is because when talk‐
ingaboutthelatentheatofvaporisation,itin‐
cludes the work done in order to expand the
vapour into the volume it’s supposed to oc‐
cupy. Therefore, we should subtract the said
work from the latent heat of vaporisation, in
order for it to capture the actual change in
the internal energy of the water. Combining
everything, we get
0= nRTt −(1−r)nRT0 +cvnTt
−cvnT0 +rnML−rnRT0 −nMv2
/2
=(cv +R)n(Tt −T0)+rnML−nMv2
/2,
and hence,
v=
s
2
µ
cp∆T
M
+rL
¶
=906m/s.
The density of air at the outlet is found from
ideal gas law ρ = p0M/(RT0). The mass flow
rate of water vapour is then
µvapour = Aρv=
Ap0Mv
RT0
,
but we also have liquid water flowing out,
such that the total flow rate is given by
µ=
1
1−r
µvapour =
Ap0Mv
(1−r)RT0
=59g/s.
Grading:
Finding r 1.5pts
• Idea that entropy is conserved. 0.2pts
• Idea to calculate entropy change of the
whole gas from Tt, Pt to T0, P0. 0.2pts
• Equation dS = dU+dW
T 0.1pts, and
dS =
cdT+pdV
T 0.1pts.
• Using the ideal gas law to calculate dS us‐
ing two of the variables T, V, P. 0.1pts
• Integrating 0.2pts and expressing entropy
difference in terms of P and T 0.2pts.
• Using or deriving cv =3R. 0.1pts
• Correct entropy change due to the phase
change 0.2pts
• Express the correct result for r 0.1pts
Finding µ 1.5pts
• Idea to use energy conservation along the
flow. 0.2pts
• Correct expression for work in the energy
conservation. 0.2pts
• Correct internal energy change. 0.5pts
• Correct energy change due to kinetic en‐
ergy. 0.1pts
• Express correct v 0.1pts.
• Equation forgasflowrate µ= vρgA. 0.1pts
• The ideal gas law with density 0.1pts
• Correction factor 1
1−r for the whole mass
flow. 0.2pts
Note: using simple Bernoulli’s equation, which
does not consider phase changes, gave 0pts
sincetheproblemisaboutderivingwhathappens
in that case.
