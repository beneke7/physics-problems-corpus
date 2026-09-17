---
id: nbpho-2017-resistors-capacitors
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2017-resistors-capacitors
solution_type: official
source_document: solution-document-nbpho-2017-s
source_pdf: cache/phoxiv/nbpho/2017_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2017_S.pdf."
---

3. RESISTORS AND CAPACITORS
i) Once the potentials have stabilized, there is
no current through any capacitor, therefore we
can then analyze the resistor network by eﬀect-
ively cutting away all the capacitors. We get the
following equivalent circuit.
A
B
C
X
We can analyze it using the laws of series
and parallel connections. The resistance of the
three resistors between the points X and C is
RXC = 1
R−1+(2R)−1 = 2
3R. The resistance of
the network between X and B is then RXB =
1
(RXC+R)−1+R−1 = 5
8R. Therefore the poten-
tials φB = R
RXB+RU = 8
13U and φC = φB +
R
RXC+R (U −φB)= 11
13U.
ii) The stabilized potentials inside a capacitor
network are entirely deﬁned by the potentials at
itsboundary. Thereforewemaynowanalyzethe
capacitor network in isolation (pretending that
the resistors have all been cut, but there are ex-
ternal voltage sources). It is equivalent to the
following circuit.
A D
B
C
Using the laws of parallel and series connection
of capacitors, this simpliﬁes even further.
1
2C
C
3
2C
ϕA ϕD
ϕB
ϕC
The dotted area contains no charge, hence
(as q =CU and φA =0)
1
2
C(φD −φA)+
3
2
C(φD −φC)+C(φD −φB)=0,
φD =
1
6
(φA +2φB +3φC)=
1
6
(2φB +3φC),
φD =
49
78
U.
