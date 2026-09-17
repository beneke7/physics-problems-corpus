---
id: nbpho-2009-magnetic-pulse
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2009-magnetic-pulse
solution_type: official
source_document: solution-document-nbpho-2009-s
source_pdf: cache/phoxiv/nbpho/2009_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2009_S.pdf."
---

8. Magneticpulse(7points)Sincewecanneglecttheinductance
of the coil, it performes as a voltage source, which outputs U =
NSB/τ = 1V during the time period between t = 0ms and
10ms, and 0V otherwise. The characteristic time scales of the
RC andLC cirquitsareτ1 = R1C = 0.6sandτ2 = L/R2 ≈
0.3s. So, for both cirquits, the processes are very fast, i.e. the
capacitor is effectively short-circuited, and almost all the voltage
fallson the inductance.
i) According to the considerations given above, I1 = U/R1 ≈
0.33A. As for I2, it starts growing from 0A at t = 0 at a rate,
given by LdI
dt
= U,i.e.I2 = Ut1/L = 5mA.
ii) When the voltage U is switched off (at t = τ = 10ms),
the capacitor will (almost completely, because t2 − τ ≪ R1C)
retain the charge it has accumulated, Q = I1τ. All the voltage
of the capacitor (Q/C) will fall on the resistor R1, so that I′
1 =
Q/R1C = Uτ/R2
1C ≈ 5.6mA. As forthe inductance, it will
retain(almostcompletely,becauset2 −τ ≪ L/R2)thecurrent
it has acquiredduring the first 10ms,I′
2 = Uτ/L = 10mA.
iii) Since the current in R2 will decay very slowly, as compared
to its growth during the first 10ms, we can neglect the charge
passing thorugh it during t < τ. Then we can write the Kirhoff’s
lawintheformLdI
dt
+R2
dq
dt
= 0,fromwhereLdI+R2dq = 0,
and L∆I = −R2∆q. Since ∆I = −I′
2, we obtain ∆q =
LI′
2/R2 = 3.3mC.
