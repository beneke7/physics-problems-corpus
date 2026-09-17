---
id: nbpho-2016-deflection-on-falling
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2016-deflection-on-falling
solution_type: official
source_document: solution-document-nbpho-2016-s
source_pdf: cache/phoxiv/nbpho/2016_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2016_S.pdf."
---

9. Deflection on Falling
i) The Earth is rotating with angular velocity
ω = 2π
T , where T = 24h. The velocities at the
top and bottom of the shaft are vt = ωR and
vb = ω(R − h), where R is radius of Earth. The
differenceofthevelocitiesisthus∆v = vt−vb =
ωh ≈ 7.3mm/s.
ii) The time of free fall can be found from the re-
lation h = gt2
/2, giving t =
√
2h/g. Thus, the
horizontal displacement is simply ∆x = ∆vt =
ωht = ω
√
2h3/g ≈ 33mm.
iii) There are at least three different approaches
to this problem; one is using the angular mo-
mentum conservation law, second one is based
onKepler’slaws(givenlaterbelow),andthethird
one — which we don’t consider here — is based
on Coriolis force formula.
Consider the rotation speed ω′
of the radius
vector drwan from the falling body to the centre
of Earth, and let us compare this speed with
the rotation speed of Earth ω. The angular mo-
mentum of the falling body is conserved, hence
ω′
r2
= ωR2
. We can substitute r = R − y,
where y is the current depth, and approximate
ω′
= ω
(R
r
)2
≈ ω(1+2 y
R). Therefore,thehori-
zontaldisplacementspeedintheEarth’sframeof
referencevh = (ω′
−ω)r ≈ 2ωyR. Finally,hori-
zontal dipslacement is found as ∆x =
∫
vhdt = ∫
(2ωyR/vv)dy, where the vertical falling speed
vv =
√
2gy. So, we find ∆x = 2
3Rω
√
2h3/g ≈
22m.
Now, let obtain the same result using the
Kepler’s laws. Consider the trajectory of the steel
ball as seen in a non-rotating frame of reference.
Although it is a thin ellipse, we have drawn the
figure out of scale in order the facilitate the cal-
culation of areas. The steel ball is released from
point A and it hits the bottom of the shaft at
point D, at distance x from B, the location of bot-
tom at the start of fall. As the falling time is still
t =
√
2h/g, the location of the bottom travels
x′
= (v − ∆v)t = vt − ωht during the fall.
Thus, the horizontal displacement of the landing
point is simply ∆x = x − x′
.
Now, the distance x can be found using the
Kepler’s second law, stating that the area covered
byradiusvectorperunittime∆S/∆tisconstant,
which is a manifestation of conservation of angu-
lar momentum ∆S/∆t = L/2m = rv⊥/2.
(The latter relation could easily be obtained by
observing a circular orbit.) For our steel ball,
L/2m = Rv/2 = ωR2
/2. The area covered
by the steel ball can be calculated as the sum of
the segment OBD and the region ADB. Keeping
in mind that x ≪ R, the segment OBD is simply
atrianglewithareax(R−h)/2. Likewise,there-
gion ACDB is approximately a rectangle of area
xh and knowing that a parabola divides the area
ofitssurroundingrectangleintoproportions1/3
and2/3,weconcludethattheareaofregionADB
is 2xh/3. Thus, from the Kepler’s second law:
S =
1
2
x(R − h) +
2
3
xh =
1
2
vRt,
x =
vt
1 + 1
3
h
R
≈ vt −
1
3
ωht.
Finally, the horizontal displacement ∆x =
x − x′
= 2
3ωht ≈ 22mm. (Note that the naive
answer overestimated the correct one by 50%.)
