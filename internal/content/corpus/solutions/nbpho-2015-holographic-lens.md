---
id: nbpho-2015-holographic-lens
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2015-holographic-lens
solution_type: official
source_document: solution-document-nbpho-2015-s
source_pdf: cache/phoxiv/nbpho/2015_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2015_S.pdf."
---

2. HOLOGRAPHIC LENS
i) Let N = 0,1,... number the zones (both
opaque and transparent). The optical path
difference between two neighbouring zones
must be λ/2 (opposite phase is demanded).
The path difference between the Nth
zone
and the 0th
zone, on the other hand, is ∆N = q
r2
N
+ f2 − f. Therefore, Nλ
2 =
q
r2
N
+ f2 −
f and rN =
q¡Nλ
2
¢2
+Nλf. Only odd-
numbered zones are transparent, thus we
need r2m+1 =
q¡
m+ 1
2
¢2
λ2 +(2m+1)λf.
ii) A perfectly focussing glass lens is such
that all the possible light rays that go to
the focus have an equal optical path length.
The optical path length inside a refracting
medium is n times longer than the corres-
ponding geometric length (the phase velo-
city is slowed down by a factor of n). De-
note the sought-after thickness by x. Equate
the optical path lengths of a ray through
the edge of the lens and of a ray through
its centre:
r³
d
2
´2
+ f2 = f − x+nx =⇒ x =
1
n−1
"r³
d
2
´2
+ f2 − f
#
≈2.4cm.
iii) Firstly, note that the given pulse is short
enough that the whole lens never illuminates
the focus — the pulse is only τc
λ
= 18 peri-
ods long, but r2×18 ≈ 1.3mm ¿ 5cm. This
implies that only a thin strip of the lens is
illuminating the focus at a time. The intens-
ity, when the Nth
period is being observed, is
proportional to the area of the Nth
zone. This
is AN =π
¡
r2
N+1
−r2
N
¢
=π
³
Nλ2
2 + λ2
4 +λf
´
.
As N is proportional to time (the period
of the wave is constant), the intensity will
also grow linearly in time. The linear part
starts at N = 1 with a jump and ends at
Nmax
λ
2 =
r³
d
2
´2
+ f2 − f with a jump back
into darkness, when the light from the edge
of the lens arrives. The total duration of illu-
mination is (approximately) τhol = Nmax
λ
c =
2
c
"r³
d
2
´2
+ f2 − f
#
≈7.9×10−9
s.
iv) The pulse is localized into a region of
space with a width ∆x = cτ. Because of
the Heisenberg’s uncertainty principle, the
pulse is composed of photons with a range
of momenta (if we take the picture that the
properties of the individual photons are clas-
sical) or, from a different viewpoint, is a
single photon with a somewhat uncertain mo-
mentum; either way, the characteristic width
in the momentum space is ∆p = ×
∆x = ×
cτ
. The
wavelength of a photon, whose momentum p
is known, is λ = h
p (this is the de Broglie re-
lation: the photon’s energy is pc and also
hν = hc
λ
). Thus, ∆λ ≈
¯
¯
¯ d
dp
h
p
¯
¯
¯∆p =
h∆p
p2 =
h ×
cτ
³
h
λ
´2 = λ2
2πcτ
≈4.4×10−9
m.
v) The spread of the arrival times of waves
with different wavelengths is the largest for
the waves that spend the longest time in-
side the lens. Therefore it is enough to con-
sider only the waves that go through the
thickest part of the lens — its centre. The
spread in the arrival times is ∆t = ∆ x
vg
=
x∆vg
v2
g
= x∆λ
v2
g
dvg
dλ
. To find the group velocity
vg itself, we can use the hint (given during
the examination) that in this question we
may assume the group velocity and the phase
velocity to be equal (in reality it would be
an unusual coincidence): vg = vp and the
phase velocity vp = c/n. Therefore, ∆t =
x∆λ
v2
g
×0.02
vg
λ
= 0.02xn∆λ
cλ
≈ 2.1×10−14
s. The
total observed pulse length behind the glass
lens is τgl =τ+∆t=5.1×10−14
s.
