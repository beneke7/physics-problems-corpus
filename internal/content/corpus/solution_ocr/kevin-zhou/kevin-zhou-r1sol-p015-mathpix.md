---
id: solution-ocr-kevin-zhou-r1sol-p015
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r1-p015]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 15. A scientist is trying to drill through a piece of wood of thickness $2 L$, but the longest drill bit they own has a length $L$. The scientist decides to move the wood relativistically fast, so that it length contracts to a thickness less than $L$. Then the drill can be held in the path of the wood, and pulled out once it goes through. Can this really be done without harming the drill bit or ruining the wood? If not, what's wrong? If yes, then what does it look like in the rest frame of the wood?
Solution. This is a harder version of the ladder, or barn-pole paradox. The answer is that it's not possible to pull the drill bit out in time without destroying it. The point is that, as you saw in problem 3, length contraction happens to fast-moving objects because of loss of simultaneity. In other words, if we pull the drill out without changing the proper length of any piece of it, then the tip of the drill bit has to start moving backwards first. The backward velocity propagates back through the drill bit, but it can't get to the back of the drill bit before it collides with the wood.
Here's an extreme example: suppose we try to pull the drill bit out at the speed of light. This means it has to length contract to zero, which means the tip of the drill bit and the motion both propagate backward at speed $c$. Suppose for concreteness that $\gamma = 4$, so that the piece of wood has thickness $L / 2$ and speed $v = ( \sqrt { 15 } / 4 ) c$. At the moment the tip of the drill bit goes through the wood, we start moving the tip backwards. It takes a time $L / c$ for this backwards motion to propagate to the back of the drill bit. During this time, the piece of wood has moved backwards a distance $v L / c > L / 2$, which means it has already smashed into the back of the drill bit, ruining the wood.
For a more detailed discussion, with many nice diagrams, see section 6.3 of Understanding Relativity by Sartori.
