---
id: nbpho-2016-black-box
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2016-black-box
solution_type: official
source_document: solution-document-nbpho-2016-s
source_pdf: cache/phoxiv/nbpho/2016_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2016_S.pdf."
---

10. Black box
i) There are a few ways to get an initial idea,
whatcouldbeintheblackbox. Onewayistoput
theammeterinserieswiththevoltagesourceand
measure the current through each combination.
Ubat = 1581 ± 14mV
Iblack→white = 4.33 ± 0.09mA
Iblack→blue = 2.21 ± 0.07mA
Iblue→white = 1.80 ± 0.06mA
Iblue→black = 2.20 ± 0.07mA
Iwhite→blue = 90.9 ± 2.8µA
Iwhite→black = 81.2 ± 2.8µA
Wecanseethattheotherterminalsareconnected
to white through the diode. That leaves us three
options.
Wecandeducethecorrectschematicsoftheblack
boxfromthesemeasurements,buttherearemore
straightforward ways to test these options. One
is to measure the voltage U1 between “black”
and “blue” , while connecting the battery between
“black” and “white” . Secondly measure the voltage
U2 between “blue” and “black” , while connecting
the battery between “blue” and “white” .
U1 = 857 ± 9mV,U2 = 884 ± 9mV
Since neither is 0 we can eliminate options B and
C.
ii) From voltages U1 and U2 and currents
Iblack→white and Iblue→white we can calculate R1
and R2.
R1 = U1/Iblack→white = 196 ± 7Ω
R2 = U2/Iblue→white = 491 ± 22Ω
Uncertainties are calculated by summing the re-
lative errors of the current and voltage measure-
ments.
iii) From the current measurements we can
already calculate 4 datapoints for the current
voltage curve of the diode. We obtain additional
two datapoints by measuring the current while
the resistors inside the black box are connected
in parallel.
Iblueandblack→white = 5.86 ± 0.10mA
Iwhite→blueandblack = 85.3 ± 2.8µA
The calculated datapoints:
I0 = 0,U0 = 0
I1 = 1.80mA,U1 = 697mV
I2 = 4.33mA,U2 = 732mV
I3 = 5.86mA,U3 = 760mV
I4 = 90.9µA,U4 = 1536mV
I5 = 81.2µA,U5 = 1541mV
I6 = 85.3µA,U6 = 1569mV
