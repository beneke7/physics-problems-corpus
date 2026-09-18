---
id: solution-ocr-kevin-zhou-t2sol-ex006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-ex006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 6: Osmotic Pressure
A water-filled tube is divided by a membrane which only allows water molecules through. When a substance is dissolved in one half of the tube, forming $N$ ions, the water level on that side is observed to go up, as shown.
![](../../../figures/solution-ocr/5e3e560d3d72de95fc75389f.jpg)
Explain why, and calculate the height difference, neglecting interactions between different ions, and between the ions and the water.


Solution
Osmotic pressure is an example of an entropic force. Suppose the water level on one side of the tube goes up. The water is otherwise unchanged, since it's just translated along the tube, so its entropy has not changed. But its energy is higher, and this energy must have come via heat transfer from the environment. Hence the entropy of the environment has decreased.

If there were no dissolved ions, this would show why water levels don't spontaneously go up: it is forbidden by the second law. But here, increasing the water in the section with the ions increases the ions' entropy, since they now have more positions they could be in. Since the number of available quantum states is proportional to the available volume, we have

$$
S _ { \mathrm { ion } } = N k _ { B } \log V
$$

up to an additive constant, which means that

$$
d S _ { \text {ion } } = \frac { N k _ { B } } { V } d V .
$$

In equilibrium, let there be an osmotic pressure difference $P$ across the membrane. Then moving a volume $d V$ of water across it costs energy $P d V$, so

$$
d S _ { \mathrm { env } } = - \frac { đ Q } { T } = - \frac { P } { T } d V .
$$

In thermodynamic equilibrium the total entropy is maximized, giving

$$
d S _ { \mathrm { ion } } + d S _ { \mathrm { env } } = 0
$$

Solving for the osmotic pressure gives

$$
P V = N k _ { B } T .
$$

The height difference is simply found using hydrostatic pressure,

$$
h = \frac { P } { \rho g } = \frac { N k _ { B } T } { \rho V g } .
$$

The appearance of a pressure here in response to an opportunity for decreasing entropy is generally called an "entropic force". In fact, you might have already seen this result in chemistry class, but in rather different notation. In chemistry textbooks, you'll typically see

$$
\Pi = i M R T
$$

where $\Pi$ is the osmotic pressure, $M$ is the molarity of solute, and the van 't Hoff factor $i$ is the number of moles of ions per mole of solute. This is perfectly equivalent to what we found.


Remark
Why does the expression for osmotic pressure bear a suspicious resemblance to the ideal gas law? The reason is that, by completely neglecting interactions between the solute and solvent, we have effectively treated the solute ions like an ideal gas, from the standpoint of entropy. This gives an additional contribution to the pressure, which can be derived just like the pressure of an ideal gas is in T1. (Using this reasoning backwards, one can conclude that the pressure of an ideal gas can also be described as an entropic force, using the same reasoning as above.)

The reason that this kinetic theory connection to the ideal gas law is not emphasized in chemistry classes is that the solute particles don't actually behave like an ideal gas at all. They are part of a liquid, and hence are constantly bumping into the solvent particles. The thermodynamic reasoning we used above is more general, because it only requires that the interaction between the solvent and solute doesn't significantly change the solute's entropy.

Entropic forces can sound mysterious, but they're simply ordinary forces, whose value we can calculate most easily using the tool of entropy. In the end, there are no forces at play except for the ordinary forces you're familiar with. Here the specific force at play is the interaction between the membrane and the ions. Since the membrane makes the ions bounce off, rather than pass through, it exerts a repulsive force on them which is transmitted to the water.
