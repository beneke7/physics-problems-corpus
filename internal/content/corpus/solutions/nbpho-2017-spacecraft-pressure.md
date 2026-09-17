---
id: nbpho-2017-spacecraft-pressure
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2017-spacecraft-pressure
solution_type: official
source_document: solution-document-nbpho-2017-s
source_pdf: cache/phoxiv/nbpho/2017_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2017_S.pdf."
---

9. SPACECRAFT PRESSURE
i) Consider an air slice between r and r + dr
with area A and mass m. In a rotating frame of
reference, force balance gives
A(p(r+dr)− p(r))= mω2
r.
The mass is related to the density with m =
Aρ(r)dr. Using the ideal gas law,
pV = nRT =⇒
ρ(r)=
m
V
=
m
nRT
p(r)=
µ
RT
p(r),
so that when we combine the two equations, we
get the following equation for pressure:
p(r+dr)− p(r)
dr
= p′
(r)=
µω2
RT
rp(r).
This can be solved using separation of variables,
giving
∫
dρ
ρ
=
∫
µω2
RT
rdr,
lnρ−lnρ0 =
µω2
2RT
r2
.
From this we ﬁnd
p(r)= p0 exp
(
µω2
2RT
r2
)
.
ii) This time the force balance is
A(p(h+dh)− p(h))=−mg
The corresponding pressure equation is
p′
(h)=−
µg
RT
p(h)
with the solution
p(h)= p0 exp
(
−
µg
RT
h
)
.
