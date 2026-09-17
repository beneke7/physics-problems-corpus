---
id: kevin-zhou-e6-p016
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e6-p016
solution_type: author
source_document: solution-document-kevin-zhou-e6sol
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E6Sol.pdf."
---

[5] Problem 16. An alternating voltage V0 cosωt is applied to the terminals at A. The terminals at
B are connected to an audio amplifier of very high input impedance. (That is, current flow into the
amplifier is negligible.)
V0 V1
A B
R
C
This circuit is the most primitive of “low-pass” filters.
(a) Calculate the “gain” ratio |Ṽ1|/V0 in this filter. Show that for sufficiently high frequencies,
the signal power is reduced by a factor of 4 for every doubling of the frequency.
(b) Design a low-pass filter without using a capacitor.
(c) Design a high-pass filter.
17
Kevin Zhou Physics Olympiad Handouts
(d) Design a stronger low-pass filter, i.e. one which reduces the signal power by a greater factor
for every doubling of the frequency.
(e) Design a band-pass filter, which suppresses both low and high frequencies, but has a constant
gain for a wide range of medium frequencies. (It’s okay if the constant gain is less than 1, as
we can just pass the output through an amplifier.)
(f) Design a notch filter, which suppresses a very small range of frequencies, while letting all other
frequencies through.
Solution. (a) Letting the bottom be V = 0, we have |V1| = I|XC| and I = V0/|XC + R|. Then
g =
|V1|
V0
=
|XC|
|XC + R|
=
1
√
ω2R2C2 + 1
.
For high frequencies, V1 ≈ V0/ωRC, so the signal power V 2
1 /Z1 ∝ 1/ω2, so doubling the
frequency will reduce the power by a factor of 4.
(b)
V0 V1
A B L
R
(c) Here’s one possible answer. You could also take the low-pass filter in part (a) and switch the
locations of the capacitor and resistor.
V0 V1
A B R
L
(d) This is the simplest answer, requiring only two circuit elements. Note that it works at
ω ≫ 1/
√
LC, while at ω = 1/
√
LC there is a resonant peak instead of a suppression.
V0 V1
A B L
C
You can also chain two low pass filters, but that requires more circuit elements. Also, in order
for that to work properly, you will need the resistance of the second low pass filter to be much
higher than the first, for the reason discussed in the solution to part (e).
(e) Attach a low pass filter to the output of a high pass filter to get a band-pass filter. There
will then be a region in the middle with constant gain. For this to work straightforwardly,
it is essential that the addition of the low pass filter doesn’t affect the voltage output of the
high pass filter, so that we can just multiply the gains. This occurs if the low pass filter
draws negligible current from the output. (In terms of the example filters above, we need the
resistance in the low pass filter to be much higher than the resistance in the high pass filter.)
18
Kevin Zhou Physics Olympiad Handouts
Another option would be to attach the output to the resistor in a series RLC circuit, but then
the “band” region would be too narrow.
(f) To suppress a certain frequency, make a circuit that looks like this:
V0 V1
A B R
L
C
[4] Problem 17. @ 1 0IPhO 1984, problem 3. A nice, short problem on filters.
