---
id: solution-ocr-kevin-zhou-e6sol-p016
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e6-p016]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[5] Problem 16. An alternating voltage $V _ { 0 } \cos \omega t$ is applied to the terminals at A. The terminals at B are connected to an audio amplifier of very high input impedance. (That is, current flow into the amplifier is negligible.)
![](../../../figures/solution-ocr/0510dbd802aa251204b5c7c4.jpg)
This circuit is the most primitive of "low-pass" filters.
    (a) Calculate the "gain" ratio $\left| \tilde { V } _ { 1 } \right| / V _ { 0 }$ in this filter. Show that for sufficiently high frequencies, the signal power is reduced by a factor of 4 for every doubling of the frequency.
    (b) Design a low-pass filter without using a capacitor.
    (c) Design a high-pass filter.

(d) Design a stronger low-pass filter, i.e. one which reduces the signal power by a greater factor for every doubling of the frequency.
(e) Design a band-pass filter, which suppresses both low and high frequencies, but has a constant gain for a wide range of medium frequencies. (It's okay if the constant gain is less than 1 , as we can just pass the output through an amplifier.)
(f) Design a notch filter, which suppresses a very small range of frequencies, while letting all other frequencies through.

Solution. (a) Letting the bottom be $V = 0$, we have $\left| V _ { 1 } \right| = I \left| X _ { C } \right|$ and $I = V _ { 0 } / \left| X _ { C } + R \right|$. Then

$$
g = \frac { \left| V _ { 1 } \right| } { V _ { 0 } } = \frac { \left| X _ { C } \right| } { \left| X _ { C } + R \right| } = \frac { 1 } { \sqrt { \omega ^ { 2 } R ^ { 2 } C ^ { 2 } + 1 } } .
$$

For high frequencies, $V _ { 1 } \approx V _ { 0 } / \omega R C$, so the signal power $V _ { 1 } ^ { 2 } / Z _ { 1 } \propto 1 / \omega ^ { 2 }$, so doubling the frequency will reduce the power by a factor of 4.

(b)
![](../../../figures/solution-ocr/662b489f75624f659a40a375.jpg)

(c) Here's one possible answer. You could also take the low-pass filter in part (a) and switch the locations of the capacitor and resistor.
![](../../../figures/solution-ocr/b5943872d0a1a46e776c9857.jpg)
(d) This is the simplest answer, requiring only two circuit elements. Note that it works at $\omega \gg 1 / \sqrt { L C }$, while at $\omega = 1 / \sqrt { L C }$ there is a resonant peak instead of a suppression.
![](../../../figures/solution-ocr/7345c1a85e629023202996de.jpg)
You can also chain two low pass filters, but that requires more circuit elements. Also, in order for that to work properly, you will need the resistance of the second low pass filter to be much higher than the first, for the reason discussed in the solution to part (e).
(e) Attach a low pass filter to the output of a high pass filter to get a band-pass filter. There will then be a region in the middle with constant gain. For this to work straightforwardly, it is essential that the addition of the low pass filter doesn't affect the voltage output of the high pass filter, so that we can just multiply the gains. This occurs if the low pass filter draws negligible current from the output. (In terms of the example filters above, we need the resistance in the low pass filter to be much higher than the resistance in the high pass filter.)

Another option would be to attach the output to the resistor in a series RLC circuit, but then the "band" region would be too narrow.
    (f) To suppress a certain frequency, make a circuit that looks like this:
![](../../../figures/solution-ocr/083a189b5ec3d01d47b4eb73.jpg)
[4] Problem 17. IPhO 1984, problem 3. A nice, short problem on filters.
