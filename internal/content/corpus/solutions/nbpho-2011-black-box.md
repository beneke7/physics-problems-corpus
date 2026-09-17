---
id: nbpho-2011-black-box
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2011-black-box
solution_type: official
source_document: solution-document-nbpho-2011-s
source_pdf: cache/phoxiv/nbpho/2011_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2011_S.pdf."
---

4. Black box (10 points) There are several ways to perform this
task. First one can notice that if two capacitors discharge at the
same resistor, starting with equal voltages and ending also with
equal voltages, the ratio of the discharge times equals to the ratio
ofthe capacitances(because foreach given voltage,the discharge
currentsarethesame,butlargercapacitorhasmorecharge—pro-
portionally to the capacitance). Therefore we can first charge the
known capacitor (using the battery), and let it discharge on the
voltmeter (which has some finite resistance), measuring the time
t1 requiredforittoreachapre-definedfinalvoltage. Thenweneed
to repeat the procedurewith the other capacitor and measure the
timet2 andcalculateC2 = C1t2/t1;theuncertaintyisestimated
as∆C1 = C1

∆t1
t1
+ ∆t2
t2
+ ∆C1
C1

.
Itisrecommendedtocheckthenegligibilityoftheleakcurrent
acrosstheplatesofthecapacitor. Tothisend,onecanchargeaca-
pacitor, measure the voltage, remove the voltmeter and wait for
sometime(ofthe ordert1 andt2), and checkagain the voltage.
Another way is to discharge completely one capacitor by
short-circuiting its terminalsand chargetheother capacitor upto
the voltage of the battery. Further, we connect the terminals A
and B so that the capacitors re-distribute the charge Q = EC1
and take the same voltage: Q1/C1 = (Q − Q1)/C2 ⇒ Q1 =
QC1/(C1 + C2) = EC2
1/(C1 + C2). Consequently, the new
voltage(whichwemeasure)isU = Q1/C1 = EC1/(C1 +C2),
fromwhere C2 = (E
U
− 1)C1.
