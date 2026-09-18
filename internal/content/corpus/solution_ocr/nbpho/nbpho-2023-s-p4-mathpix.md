---
id: solution-ocr-nbpho-2023-s-p4
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2023-black-box]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
4. BLACK BOX (12 points) - Solution by Jaan Kalda, grading schemes by ....

Since there can be elements causing inertia $- L R$ chains or $R C$ chains, one has to be patient when making measurements and wait for a long enough time to let the system relax towards an equilibrium. There are two types of measurements which can be done.

1) After keeping the terminals short-circuited for a long enough time, release the shortcircuting wire and measure the voltage $V$ as a function of time:

| $V ( \mathrm { mV } )$ | $t ( \mathrm {~s} )$ | $V ( \mathrm { mV } )$ | $t ( \mathrm {~s} )$ |
| :--- | :--- | :--- | :--- |
| 0 | 1073 | 90 | 2977 |
| 5 | 1317 | 100 | 3049 |
| 10 | 1564 | 110 | 3073 |
| 15 | 1765 | 120 | 3091 |
| 20 | 1950 | 130 | 3116 |
| 25 | 2109 | 149 | 3124 |
| 30 | 2248 | 159 | 3131 |
| 40 | 2465 | 160 | 3124 |
| 50 | 2629 | 170 | 3131 |
| 60 | 2751 | 180 | 3135 |
| 70 | 2850 | 210 | 3145 |
| 80 | 2921 | 400 | 3155 |

These data are plotted as $\ln [ ( 3155 \mathrm { mV } -$ $V ) / \mathrm { mV } ]$ versus time. One can see a fairly nice linear plot which means that voltage is approaching exponentially the limit value 3155 mV. The characteristic time can be found as the reciprocal of the trend line (we discard the rightmost data points as there, the voltage changes are small, so the relative errors are big), As a result we obtain $\tau _ { 1 } =$
34.5 s.
![](../../../figures/solution-ocr/f0045855c199638a7a2d0380.jpg)
2) After keeping the terminals open for a long enough time, release the short-circuting wire and measure the current $I$ as a function of time:

| $I ( \mu \mathrm {~A} )$ | $t ( \mathrm {~s} )$ | $I ( 12.3 \mu \mathrm {~A} )$ | $t ( \mathrm {~s} )$ |
| :--- | :--- | :--- | :--- |
| 0 | 978 | 50 | 351 |
| 5 | 794 | 60 | 345 |
| 10 | 636 | 70 | 341 |
| 15 | 535 | 80 | 340 |
| 20 | 468 | 90 | 339 |
| 25 | 425 | 100 | 339 |
| 30 | 397 | 110 | 339 |
| 40 | 365 | 120 | 339 |

These data are plotted as $\ln [ ( I - 339 \mu \mathrm {~A} ) / \mu \mathrm { A } ]$ versus time. One can see a fairly nice linear plot which means that voltage is approaching exponentially the limit value $339 \mu \mathrm {~A}$. The characteristic time can be found as the reciprocal of the trend line (we discard the rightmost data points as there, the voltage changes are small, so the relative errors are big), As a result we obtain $\tau _ { 1 } = \mathrm { s }$.
![](../../../figures/solution-ocr/a3f6aedc61a3e63b426a1889.jpg)

These data mean that inside, there should be a battery to maintain a voltage, a capacitor to provide inertia - exponential decay towards an equilibrium, and resistors. In principle, one should consider also an option where there is an inductor instead of the capacitor; however, it can be excluded by various ways. First, it is not realistic to obtain long enough relaxation times with an inductor. Indeed, already the internal resistance of the ammeter is around a hundred of ohms, and characteristic time of about 20 seconds would mean that the inductance should be around kilohenry - even if such inductor exists, it would not fit into the box. Second, if there were a big inductor inside, it cannot be a lone element connected to one of the terminals. Indeed, when the ammeter is connected to the terminals, a non-zero current appears immediately, instead of starting from zero (what would be the case if there were an inductor). So, it must form a closed loop with a resistor and a battery. However, in that case, if we keep the terminals shortcircuited for a while and then disconnect, the voltage at the terminals would jump discontinuosly as the current through one of the resistors would need to jump (to keep the inductor current continuous).

The first consideration is that there need to be two resistors because there are two different characteristic times (one resistor with two capacitors can produce still only one characteristic time, because the capacitors, either in parallel or in series, would combine effectively into one single capacitor). Next, the restriction (I): the battery and the capacitor cannot be in series, because they would combine effectively into a single capacitor. Second, the restriction (II): the battery and the capacitor cannot be in parallel, either, because they would combine effectively into a single battery. Then, restriction (III): neither capacitor nor battery can be connected directly to the output terminals as in one case, the ammeter current would asymptotically approach zero when connected to the output, and in the other case, the output voltage would be always constant. This excludes automatically many possibilities, see below. Also, (IV): there should not be a direct path from one terminal to the other going only through the capacitor and the battery as in that case, ammeter current would be very big, and the corresponding characteristic time would be very short. Finally, (V): the capacitor can be only in a parallel connection with something, because otherwise, there would be no capacitor current when a voltmeter is connected to the output, hence, the voltage would remain constant.

Topologically, there are options (a) all in parallel - excluded by (I); (b) all in series - excluded by (II); (c) three elements in parallel, all together in series with the fourth element - excluded by (I) and (IV); (d) 3+1 parallel chains (i.e. 3 elements in one chain, and 1 element in the other chain) - excluded by (III) and (I); (d) one parallel pair in series with another parallel pair - excluded by (IV) and (II); (e) 2+2 parallel chains; (f) 1+2 parallel chains, all together in series with the fourth element; (g) a pair in parallel, all together in series with the third and fourth element.

With the option (e), battery and capacitor need to be in different chains, due to (I), this is the circuit A.

With the option (g), capacitor must be in the parallel pair with a resistor, due to (V) and (II), this is the circuit B.

With the option (f), due to (V), the capacitor needs to be in the parallel section, either (f1) as a single element, or (f2) paired in series with a resistor, because of (I). In the case of (f1), (III) tells us that battery must be in the other parallel section (in series with a resistor), this is the circuit C. In the case of (f2), combinatorics tells us that there are two positions for the battery - either as the single element in series which is the circuit (D), or in parallel with the capacitor-resistor series connection. The latter option, however, means that the battery would always maintain the same voltage on the capacitorresistor series connection, i.e. the output voltage and current would remain always constant.

![](../../../figures/solution-ocr/a02c4091c383357b4235535d.jpg)
Circuit (B):


![](../../../figures/solution-ocr/3b0942a52ac3df443089bef2.jpg)
remains unchanged, $U _ { i } = \mathcal { E } R _ { 1 } / \left( R _ { 1 } + R _ { 2 } \right)$, so we can again check if everything fits: we obtained $R _ { 1 } / \left( R _ { 1 } + R _ { 2 } \right) = 0.347$, and $U _ { i } / \mathcal { E } =$ 0.340 ; this is a fit within the uncertainties.

Now, $\tau _ { 1 } = R _ { 2 } C$ so that $C = \tau _ { 1 } / R _ { 2 } =$ 5.67 mF . Alternatively we can calculate the same thing using $\tau _ { 2 } = R _ { 1 } R _ { 2 } C / \left( R _ { 1 } + R _ { 2 } \right)$, hence $C = \tau _ { 2 } \left( R _ { 1 } + R _ { 2 } \right) / \left( R _ { 1 } R _ { 2 } \right) = 5.84 \mathrm { mF }$. Again, there is a match of results within the uncertainties.
