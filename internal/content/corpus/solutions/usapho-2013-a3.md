---
id: usapho-2013-a3
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2013-a3
solution_type: official
source_document: solution-document-usapho-2013-s
source_pdf: cache/phoxiv/usapho/2013_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2013_S.pdf."
---

Question A3
A beam of muons is maintained in a circular orbit by a uniform magnetic field. Neglect energy loss
due to electromagnetic radiation.
The mass of the muon is 1.88 × 10−28 kg, its charge is −1.602 × 10−19 C, and its half-life is
1.523 µs.
a. The speed of the muons is much less than the speed of light. It is found that half of the
muons decay during each full orbit. What is the magnitude of the magnetic field?
b. The experiment is repeated with the same magnetic field, but the speed of the muons is
increased; it is no longer much less than the speed of light. Does the fraction of muons which
decay during each full orbit increase, decrease, or stay the same?
The following facts about special relativity may be useful:
• The Lorentz factor for a particle moving at speed v is
γ =
1
p
1 − v2/c2
• The Lorentz factor gives the magnitude of time dilation; that is, a clock moving at speed
v in a given reference frame runs slow by a factor γ in that frame.
• The momentum of a particle is given by
~ p = γm~ v
where m does not depend on v.
• The Lorentz force law in the form
d~ p
dt
= q(~ E +~ v × ~ B)
continues to hold.
Solution
a. The muons perform uniform circular motion, so we have
a =
v2
r
, 2πr = vT
where T is the period of motion. Solving for T gives
T =
2πv
a
.
Newton’s second law is
dp
dt
= qv × B = ma
and taking magnitudes gives a = qvB/m. Then
T =
2πm
qB
⇒ B =
2πm
qT1/2
= 4.85mT
where we used T = T1/2, the half-life of the muon.
Copyright c 2013 American Association of Physics Teachers
2013 Semifinal Exam Part A 7
b. The first two lines above still hold, since they follow from ordinary geometry. Since the speed
is constant, γ is constant, and Newton’s second law is now
dp
dt
= qv × B = γma
so taking magnitudes gives a = qvB/γm. Then the period is a factor of γ larger,
T = γ
2πm
qB
= γT1/2.
However, the muons experience time dilation, so in the lab frame, half of them decay in time
γT1/2. Then the same fraction of muons decays per orbit, i.e. one half.
