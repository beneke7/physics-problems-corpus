---
id: solution-ocr-aupho-2010-s-q12
source: aupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/aupho/2010_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [aupho-2010-q12]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question 12 Suggested time: 30 minutes
Charlotte and Ben have lots of old 100 W incandescent light bulbs that they don't like to see going to waste, but they also don't like to waste electricity so they want to find out how to run them most efficiently. They decide to compare the efficiencies of running a bulb at different input powers by comparing what they call the output ratio. Their definition of the output ratio is the ratio of the intensity of visible light at some fixed distance from the bulb to the electric power dissipated in the bulb.
To measure the visible light intensity they borrow a visible light meter a friend found in a collection of old photographic gear. This meter produces a voltage between its two output terminals that depends on the intensity of visible light incident on the detector. Its instruction booklet is long lost but a previous owner left brief hand-written instructions and the following graph.
![](../../../figures/solution-ocr/7e38c6c67115a2b944cb7bda.jpg)
After doing some research Charlotte finds that the intensity of light passing through two polarising filters is given by $I = I _ { 0 } \cos ^ { 2 } \theta$, where $I _ { 0 }$ is the intensity that passes through the filters when they are aligned and $\theta$ is the angle between the polarisation axes of the two filters. To make best use of the graph they decide to set up the visible light meter at a distance from the bulb such that at maximum power the light meter voltage reading $V _ { 1 }$ is just below the maximum given in the graph.
As the bulbs run on dangerous mains voltages, Ben asks his grandfather, a qualified electrician, for some help with adjusting the power of the bulb. Ben's grandfather provides them with a large variable transformer that plugs into the wall at one end and has a mains socket on the other, so that they can use a regular lamp to hold the bulb. To measure the power, he finds a plug-in power meter that can be connected between a mains plug and a mains socket and measures the power consumed by whatever is plugged into it.
Ben connects the power meter to the wall, plugs in the transformer and then plugs the lamp into the transformer output. Ben's grandfather checks it for electrical safety and then turns on the wall switch.


They choose a single bulb to use for all of their measurements. They don't have to worry about damaging it as the maximum output voltage of the transformer is the mains voltage, on which the bulb is designed to run.
Unfortunately, it is a sunny day and the voltage across the light meter is non-zero even when the bulb is off. Ben thinks that if he measures the voltage with the bulb off, he will be able to subtract this from his later measurements to find the voltage he would read if there were no sun. He does this and records 73 mV. He then takes the measurements, with the bulb on, that appear in the table below. Charlotte thinks that it would be better to close the blinds and make the room as dark as possible. She does this and takes her measurements. The following tables contain Ben's and Charlotte's data.

Ben
| $P _ { \text {bulb } } ( \mathrm { W } )$ | $V _ { 1 } ( \mathrm { mV } )$ |
| :--- | :--- |
| 9 | 87 |
| 20 | 102 |
| 42 | 139 |
| 62 | 166 |
| 79 | 198 |
| 100 | 248 |


Charlotte
| $P _ { \text {bulb } } ( \mathrm { W } )$ | $V _ { 1 } ( \mathrm { mV } )$ |
| :--- | :--- |
| 10 | 55 |
| 21 | 88 |
| 40 | 124 |
| 61 | 163 |
| 78 | 192 |
| 100 | 235 |


(a) Whose method would you use and why?
Solution: (2 marks) Charlotte's method is better. Although both attempt to account for the background light, Ben's method requires that the voltage output be directly proportional to the intensity, which it is not. Charlotte's method reduces the amount of stray light directly and will improve the experiment.
(b)Using the data acquired by the person with the better method, calculate the output ratio for each data point. The intensities you use to calculate the output ratio should be in units of $I _ { 0 }$, i.e. express them as some number times $I _ { 0 }$, and then just treat the $I _ { 0 }$ as a unit.
Solution: (5 marks) Charlotte's data:

| P(W) | V (mV) | $\theta$ | Intensity | Output ratio( $I _ { 0 } W ^ { - 1 }$ ) |
| :--- | :--- | :--- | :--- | :--- |
| 10 | 55 | 84 | $0.011 I _ { 0 }$ | 0.0011 |
| 21 | 88 | 77 | $0.051 I _ { 0 }$ | 0.0024 |
| 40 | 124 | 68 | $0.14 I _ { 0 }$ | 0.0035 |
| 61 | 163 | 56 | $0.31 I _ { 0 }$ | 0.0052 |
| 78 | 192 | 44 | $0.52 I _ { 0 }$ | 0.0066 |
| 100 | 235 | 14 | $0.94 I _ { 0 }$ | 0.0094 |

The required output ratios are the numbers in the final column.
(c) Given the values of the output ratio you calculated, at what power should they run their bulbs?
Solution: (2 marks) Since the highest output ratio occurs at 100 W, they should run their bulbs at 100 W for maximum efficiency.

(d) Briefly suggest things that Charlotte and Ben could have done with the equipment they had to improve their results.
Solution: (3 marks) There are many possible modifications to the method, and marks were awarded here based on demonstrated thought. Simply saying 'repeat the experiment', for example, did not score highly if it was not clear why this would help. Some ideas (but by no means all) worth something are:
    - Take multiple measurements of each point to reduce the uncertainty
    - Test more than one lamp and compare optimal power to identify whether all lamps were the same
    - Place the power meter between transformer and lamp to eliminate the transformer losses from the measured power
    - Choose a distance such that the light meter response is not flat, i.e. use a section of the calibration curve that varies more to improve precision

Marker's comments:

- This question was generally well done.
- Students needed to use the information provided.
- Students needed to take care to read points from the graph accurately.
- Some students needed to read the question more carfeully, e. g. part (d) asks about improvements using the equipment that they had, not about improvements possible with new equipment.
