---
id: kevin-zhou-p1-ex008
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-ex008
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

Example 8
Cutting-edge paleontological research has found that the famed T. Rex was essentially a
gigantic chicken. Suppose a T. Rex is about N = 20 times larger in scale than a chicken.
How much larger is its weight, cross-sectional area of bone, and walking speed?
15
Kevin Zhou Physics Olympiad Handouts
Solution
These kinds of biological scaling arguments are fun to think about, though the reliability of
the results is somewhat questionable – the data is extremely noisy, and if any given scaling law
doesn’t quite match it, you can always think a bit more, and come up with a new argument
yielding a different scaling. But here are a few simple examples:
• Since the densities should match, the weight should scale with the volume, so as N3.
• Since the maximum compressive pressure that bone can take should be the same, the
bone area should scale with the weight, so also as N3. That is, the width of the bones
scales as N3/2, while their length L scales only as N. This is the reason small animals
are strong relative to their weight, while large ones need to be very bony to even stand.
The largest animals today are whales, as they don’t need to support their own weight.
• As a very crude model of walking, we can think of the legs as swinging like a free
pendulum. The length of one step is proportional to L, while the period of the steps is
proportional to
√
L. Thus, the walking speed scales as
√
L ∝
√
N.
There’s an entire literature on these arguments. For instance, this delightful paper discusses
how furry mammals shake to dry themselves off. This is an increasingly severe problem for
smaller mammals, since a relatively larger amount of water will cling to them after getting
wet, which can cause hypothermia. Using elementary fluid mechanics, the paper argues that
the optimal frequency the mammal will shake to dry itself off scales as f ∝ m−3/16.
