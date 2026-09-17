---
id: nbpho-2006-electric-experiment
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2006-electric-experiment
solution_type: official
source_document: solution-document-nbpho-2006-s
source_pdf: cache/phoxiv/nbpho/2006_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2006_S.pdf."
---

4. Electrical experiment
We start with charging the capacitor (waiting long
enough,toallowequalizing thevoltagesofthesource
and the capacitor, of the order of the discharge time
below). The capacitor will be discharge on the diode
and two resistances (the unknown one r is parallel
to the diode), using the scheme in the figure. We
perform two experiments using for the sequentially
connectedresistorRthebothsuppliedresistorswith
known resistance, R = R1 and R = R2.
r
R
Initial voltage of the capacitor U0 = E; the voltage
droponthediodeisconstant(whileemittinglight)—
exactly as on a voltage source. Therefore, the voltage
on the capacitor approaches that value exponential-
ly:
U − Uc = (E − Uc)e−t/RC
.
Diode stops burning, when all the current I = (U −
Uc)/R goes through the unknown resistor, I =
Uc/r. Thus, at the fading moment (t = τ):
r(E − Uc)e−τ/RC
= RUc.
Rewriting the latter equality for the both experi-
ments,
r(E − Uc)e−τ1/R1C
= R1Uc.
r(E − Uc)e−τ2/R2C
= R2Uc.
Dividing these and taking the logarithm results in
C = (
τ2
R2
−
τ1
R1
)/ln
R1
R2
.
Performing for both cases 3–5 measurements
and finding the average (τ1 ≈ 37s, τ2 ≈ 32,4s), we
find C ≈ 13µF.
