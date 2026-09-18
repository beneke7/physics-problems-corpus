---
id: kevin-zhou-erev-p001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-erev-p001
solution_type: author
source_document: solution-document-kevin-zhou-erevsol
source_pdf: sources/kevin_zhou/site/handouts/ERevSol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/ERevSol.pdf."
---

[3] Problem 1. One of the important achievements of the 19th century was the laying of undersea
cables, which permitted the transmission of telegraph messages. In 1871, the 21 year old electrician
Oliver Heaviside was tasked with locating a leak in the cable connecting England and Denmark.
(Heaviside had been trained by his uncle-in-law Charles Wheatstone, who found many uses for the
Wheatstone bridge. Heaviside later recast Maxwell’s equations in the vector form we use today.)
The cable can be modeled as a uniform cylinder of known resistance R0. That is, when the cable
is operating properly, then grounding one end and applying a voltage V to the other leads to a
steady state current of V/R0. The leak is located a fraction α of the way from the English side. Let
the resistance between the leak point and the Earth, due to the current having to travel through
the water, be Rd. The precise value of Rd is also unknown. Your task, as was Heaviside’s, is to find
a way to measure α without having to dig the whole cable up.
Solution. There are various ways to solve this problem; here’s what Heaviside did.
England leak Denmark
αR0 (1 − α)R0
Rd
First, don’t attach the Danish side to anything, and apply a voltage at the English side. By
measuring the resulting current, we can measure the resistance, which in this case is
R1 = αR0 + Rd.
Next, attach the Danish side to ground and repeat the procedure to measure the new resistance,
R2 = αR0 +
RdR0(1 − α)
Rd + R0(1 − α)
.
We don’t know Rd, but we can plug the first equation into the second to eliminate it. Defining the
rescaled variables r1 = R1/R0 and r2 = R2/R0, the second equation becomes
r2 = α +
(r1 − α)(1 − α)
r1 + 1 − 2α
.
Clearing denominators and simplifying gives the quadratic
α2
− 2αr2 + r2 + r1r2 − r1 = 0
and since we know α < r2, the physical solution is
α = r2 −
p
(r1 − r2)(1 − r2).
Incidentally, this result was first derived by a French telegrapher, and is called Blavier’s method.
Variations of this method are still used to locate breaks in cables today!
1
Kevin Zhou Physics Olympiad Handouts
[3] Problem 2.   W 1 0USAPhO 2006, problem A2.
[2] Problem 3 (Kalda). Not all circuits are made of only series and parallel combinations. The Y-∆
transform is the next simplest tool you can use. Consider the two sets of resistors shown below.
The two are equivalent provided that
RA =
RABRAC
RAB + RAC + RBC
,
1
RBC
=
1/RBRC
1/RA + 1/RB + 1/RC
along with cyclic permutations. As an application, consider the circuit below.
Find the current through the battery using a Y-∆ transform.
Solution. It’s most convenient to apply the Y-∆ transform to the top vertex, turning it from a Y
into a ∆ of three 9Ω resistors. At this point the circuit can be simplified using the usual series and
parallel rules, giving Req = 19/7Ω and thus I = 21/19A.
