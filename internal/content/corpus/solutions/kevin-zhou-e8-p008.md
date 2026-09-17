---
id: kevin-zhou-e8-p008
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e8-p008
solution_type: author
source_document: solution-document-kevin-zhou-e8sol
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E8Sol.pdf."
---

[2] Problem 8. A sphere of magnetic susceptibility χm is placed in a uniform field B0, and as a result
develops a uniform magnetization M. Find M and the field B inside the sphere. Then check the
limiting cases of a superconductor and a soft ferromagnet. Do they make sense?
Solution. In this case, by the result of example 4, we have
B = B0 +
2
3
µ0M = B0 +
2
3
χm
1 + χm
B
inside the sphere. Solving for B and then for M gives
B =
1 + χm
1 + χm/3
B0, M =
χm
1 + χm/3
B0
µ0
.
For a superconductor, χm = −1, we have
B = 0, M = −
3B0
2µ0
which makes sense. For a soft ferromagnet, χm → ∞, we have
B = 3B0, M =
3B0
µ0
.
This is a bit puzzling, because for an infinite solenoid the magnetic field inside was very large, but
for a sphere it can apparently only be enhanced by a factor of 3.
As will be explained in example 6, the reason is that a sphere has a significant demagnetizing
field. The magnetization tries to align with B0, but by the time it reaches M = 3B0/µ0, the H
field inside the sphere is already completely cancelled, so no further alignment can occur.
Idea 7: The H Field
Historically, magnetism was formulated in terms of the field
H =
1
µ0
B − M.
The magnetic susceptibility was originally defined to be simple in terms of H, with
M = χmH, B = µH.
The reason H is useful is that it gives a close analogy to electrostatics. Note that
∇ × H = J − Jb
10
Kevin Zhou Physics Olympiad Handouts
so that H has no curl if there are no currents around besides the bound current. (This extra
current is sometimes called “free” current Jf.) In addition,
∇ · H = −∇ · M
which is analogous to how a polarization yields a charge density, ∇·E = −∇·P/ϵ0. Therefore,
any magnetostatic problem without free current can be mapped to an electrostatic one via
(ϵ0E,P,ρb,χe) ↔ (H,M,ρm,χm)
where ρm = −∇ · M is the “magnetic charge density”.
This is the mathematical formalization of the idea of Gilbert dipoles, introduced in E3, which
replace a true magnetic dipole with a pair of fictitious magnetic charges. At the time, we
remarked that this gives you the correct magnetic field outside of a magnet, but not inside.
The underlying reason is this analogy is actually computing H, not B. To get the correct B
within a magnetized material, we have to compute B = µ0(H + M). Heuristically, µ0M is
the magnetic field due to dipole moments right at that location, while µ0H is the magnetic
field due to all other currents and magnetic dipole moments. Finally, we note that a soft
ferromagnet can be thought of as a material within which H is approximately zero.
Remark: The History of H
If you learned physics in the United States, you might have found the preceding idea
unfamiliar, because it has been systematically removed from the introductory curriculum.
The reason comes down to history. First, it’s worth noting that the choice between covering
B and H isn’t obvious. Today we would say the B field is more fundamental, because it is
what determines the Lorentz force on a charge, and the force, torque, and interaction energy
of a dipole moment, and thereby the reading on a magnetometer. But for most of history,
one could just as well argue that it is µ0H that determines these things. After all, we can’t
embed a measuring device within a magnet. Doing so would require hollowing out a hole,
which would remove M there, which would render B just equal to µ0H.
Therefore, choosing between B and µ0H requires measuring some interaction where particles
pass through a magnet. In the 1930s, this became possible with neutron scattering, since
neutrons are electrically neutral but carry a magnetic dipole moment m. As discussed
here, the Nobel laureates Bloch and Schwinger disagreed on whether the interaction energy
was −m · B or −m · (µ0H), which corresponds to treating m as Amperian or Gilbertian,
respectively. The controversy remained open for decades, but was eventually settled by data.
At the same time, there was a growing consensus in the United States that magnetic poles
were a “useless concept” which should be banished from teaching entirely. So, when the
modern American physics curriculum was set in the 1960s, that’s exactly what happened.
For example, Halliday, Resnick, and Krane spends only a few pages covering magnetization,
and half of them are spent admonishing the reader that magnetic poles don’t exist. If
11
Kevin Zhou Physics Olympiad Handouts
you were educated in America, you probably only heard about them for a day in middle school.
Unfortunately, removing magnetic poles from the curriculum has some real costs. Experimen-
talists still think in terms of poles and H, because it’s harder to visualize how complicated
currents source B. Moreover, it’s harder to do anything with B without vector calculus
background. That’s why some other countries’ introductory physics courses put poles first.
(But some teachers don’t clearly explain how B and µ0H differ, leading to confusion later.)
In this problem set, I’ll tell you only what you need to know about H to solve theoretical
problems. If you try to dive deeper into how experimentalists use it, you’ll run into a lot more
historical cruft. For instance, they tend to prefer the “Gaussian” system, where annoying
factors of 4π are inserted into Maxwell’s equations to make the Coulomb and Biot–Savart
laws slightly simpler. Also, they use “cgs” (centimeter-gram-second) units, so all units need
to be rescaled by some number of powers of 10 and 4π. Worst of all, they have totally different
units for B (Gauss), H (Oersted), and M (emu/cm3), which are tricky to relate. I wouldn’t
recommend learning any of this unless you have to for your job.
