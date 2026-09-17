---
id: nbpho-2016-glass-plate
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2016-glass-plate
solution_type: official
source_document: solution-document-nbpho-2016-s
source_pdf: cache/phoxiv/nbpho/2016_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2016_S.pdf."
---

2. Glass plate
i) The energy and impulse of a photon are re-
lated by E = pc. Because the incident side is
black,itwillabsorbthephotonsandfeeltheforce
due to their momentum: Fa = dp
dt , where dp
dt =
1
c
dE
dt = P
c is the impulse of the photons gener-
ated per unit time. Fa = P
c .
ii) A fraction r of the photons will be reflected,
sotheywillexerttwicetheforce,becausethemo-
mentum change is twice as much as compared to
absorbingthem. Afraction1−rwillbeabsorbed
andwillgiveaforcesimilartothepreviousexpres-
sion.
Fb = 2r
P
c
+ (1 − r)
P
c
= (1 + r)
P
c
.
iii) The light will be reflected many times and
we will have to consider interference. Since en-
ergy is proportional to the square of the amp-
litude of the electric field, if a fraction r of the
photons and therefore of the energy is reflected,
theamplitudeofthereflectedwave’selectricfield
is
√
r of the incident electric field. Let’s calculate
the total electric field amplitude of the wave that
goes through. Denote by Ei the electric field of
the incident wave and by Et the electric field of
the wave that has gone through the other side of
the glass. On the incident side the proportion of
the electric field amplitude that goes through is √
1 − r, of which a part
√
1 − r will go through
and part
√
r will bounce pack. So a wave with
amplitudeE0 = (1−r)Ei wentstraightthrough
andawavewithamplitude
√
(1 − r)rEi isboun-
cingbackthroughtheglass. Nowitwillgobackto
thefirstside,reflectbackfromthereandofthata
proportion
√
1 − rwillgothroughandaddtoEt.
However the wave has traveled an optical path
2nd = 200.5λ, so it will be 180 degrees out of
phase and we get E1 = −(1 − r)rEi. Repeat-
ing the procedure E2 = (1 − r)r2
Ei and so on
En = (1−r)(−r)n
Ei. Summingalltheelectric
fields that go through the other side of the glass
we get:
Et =
∞ ∑
n=0
En = (1−r)Ei
∞ ∑
n=0
(−r)n
=
1 − r
1 + r
Ei.
Powerisproportionaltothesquareoftheelectric
field:
Pt
P
=
(
Et
Ei
)2
=
(
1 − r
1 + r
)2
.
Sincepowerisalsoproportionaltothenumberof
photons, this fraction of the photons have gone
through and haven’t given their momentum to
the glass. By energy conservation the rest have
been reflected back toward the laser and since
their momentum has been reversed:
Fc = 2
(
P − Pt
c
)
=
2P
c
(
1 −
(
1 − r
1 + r
)2
)
=
8Pr
c(1 + r)2
.
Note: if we would calculate directly the total
electricfieldof thereflected light,wewouldneed
to take into account that on the first reflection
of the laser light from the glass there is a phase
shift of 180 degrees due to reflection from a sur-
facewithahigherrefractiveindex(airtoglasssur-
face).
Alternative solution: The light is bouncing
back and forth. Inside the glass there is some
sum of waves with the same frequency, which we
can represent as a single wave moving forward
and a single wave moving backwards. Denote
by E the wave amplitude of the forward moving
wave right under the surface in the glass. The
wave amplitude is constant at that point and it
is made of the transmitted part of the incoming
light
√
1 − rEi and from the 180 degrees out of
phasepartofEitselfasitbouncestwiceinsidethe
glasstoarriveatthesamepointbackagain: −rE.
We get the relation:
E =
√
1 − rEi −rE → E =
√
1 − r
1 + r
Ei.
The wave that has gone all the way through the
plate is
Et =
√
1 − rE =
1 − r
1 + r
Ei.
The rest follows as in the previous solution.
