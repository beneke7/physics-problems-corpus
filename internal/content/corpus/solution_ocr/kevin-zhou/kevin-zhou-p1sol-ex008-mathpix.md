---
id: solution-ocr-kevin-zhou-p1sol-ex008
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-ex008]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 8

Cutting-edge paleontological research has found that the famed T. Rex was essentially a gigantic chicken. Suppose a T. Rex is about $N = 20$ times larger in scale than a chicken. How much larger is its weight, cross-sectional area of bone, and walking speed?


Solution
These kinds of biological scaling arguments are fun to think about, though the reliability of the results is somewhat questionable - the data is extremely noisy, and if any given scaling law doesn't quite match it, you can always think a bit more, and come up with a new argument yielding a different scaling. But here are a few simple examples:

- Since the densities should match, the weight should scale with the volume, so as $N ^ { 3 }$.
- Since the maximum compressive pressure that bone can take should be the same, the bone area should scale with the weight, so also as $N ^ { 3 }$. That is, the width of the bones scales as $N ^ { 3 / 2 }$, while their length $L$ scales only as $N$. This is the reason small animals are strong relative to their weight, while large ones need to be very bony to even stand. The largest animals today are whales, as they don't need to support their own weight.
- As a very crude model of walking, we can think of the legs as swinging like a free pendulum. The length of one step is proportional to $L$, while the period of the steps is proportional to $\sqrt { L }$. Thus, the walking speed scales as $\sqrt { L } \propto \sqrt { N }$.

There's an entire literature on these arguments. For instance, this delightful paper discusses how furry mammals shake to dry themselves off. This is an increasingly severe problem for smaller mammals, since a relatively larger amount of water will cling to them after getting wet, which can cause hypothermia. Using elementary fluid mechanics, the paper argues that the optimal frequency the mammal will shake to dry itself off scales as $f \propto m ^ { - 3 / 16 }$.
