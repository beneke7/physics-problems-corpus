---
id: solution-ocr-kevin-zhou-e2sol-p023
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e2-p023]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[1] Problem 23. Until the late 1900s, most light bulbs were incandescent. An incandescent light bulb is essentially just a resistor, which emits light when it gets hot. It is designed to be connected to a power supply of given voltage, in parallel with other bulbs. Now suppose a bulb marked "200 W" and a bulb marked " 50 W" are accidentally connected in series. Which bulb is brighter?


Solution. A standard bulb is designed to be hooked up in parallel with other bulbs, across some fixed voltage $V$. Since $P = V ^ { 2 } / R$, higher wattage bulbs have lower resistance. Since the bulbs are in series, then have the same current through them. Since $P = I ^ { 2 } R$, that means the bulb with the higher wattage rating draws less power. The 50 W bulb is brighter. (With modern LED lights, this classic problem doesn't really work. An LED driven at a lower voltage than expected often just won't light up at all.)

To warm up for DC circuits, we'll consider some resistor network problems.
Idea 7
If any two points in a resistor network are at the same potential, nothing will change if the two points are connected together and treated as one. More generally, the resistance of any resistor directly connecting the two points may be changed freely.
