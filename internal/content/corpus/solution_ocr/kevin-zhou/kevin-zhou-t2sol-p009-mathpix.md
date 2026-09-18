---
id: solution-ocr-kevin-zhou-t2sol-p009
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-p009]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 9. We can find an expression for entropy of an ideal gas using pure thermodynamics. Consider $n$ moles of an ideal gas with adiabatic index $\gamma$, initially at pressure $P$ and volume $V$.
    (a) Suppose the gas is heated at constant volume to pressure $P ^ { \prime }$. Compute the change in entropy.
    (b) Suppose the gas is instead expanded at constant pressure to volume $V ^ { \prime }$. Compute the change in entropy.
    (c) By combining your two results, show that the entropy $S ( P , V )$ of the ideal gas is
$$
S = n C _ { V } \log \left( P V ^ { \gamma } \right) + \text { constant }
$$
when $n$ is constant. The constant can't be found using classical thermodynamics alone, since it only can determine changes in entropy.
    (d) Now consider the case where the ideal gas is allowed to freely expand into a vacuum, reaching a final volume $V ^ { \prime }$. This is an example of a nonequilibrium process that changes the entropy, despite no work or heat transfer. Find the resulting change in entropy.

(e) So far, we don't know anything about how $S$ depends on $n$, because we only considered processes that kept $n$ constant. However, the entropy should be extensive, meaning that if the pressure and temperature are kept the same, then $S$ is proportional to $n$. Thus, if in general
$$
S / n = C _ { V } \log \left( P V ^ { \gamma } f ( n ) \right) + \mathrm { constant }
$$
then the right-hand side must be independent of $n$. Using this, find $f ( n )$.

Solution. (a) For heating at constant volume, we have

$$
\Delta S = \int \frac { d Q } { T } = n C _ { V } \log \frac { T ^ { \prime } } { T } = n C _ { V } \log \frac { P ^ { \prime } } { P } .
$$

(b) For heating at constant pressure, we have
$$
\Delta S = \int \frac { d Q } { T } = n C _ { P } \log \frac { T ^ { \prime } } { T } = n C _ { P } \log \frac { V ^ { \prime } } { V } .
$$
(c) Suppose we start at some fixed pressure and volume $P _ { 0 }$ and $V _ { 0 }$, and use the above two steps to get to pressure and volume $P$ and $V$. Then
$$
S ( P , V ) = S \left( P _ { 0 } , V _ { 0 } \right) + n C _ { V } \log \frac { P ^ { \prime } } { P } + n C _ { P } \log \frac { V ^ { \prime } } { V } = S \left( P _ { 0 } , V _ { 0 } \right) + n C _ { V } \log \frac { P ^ { \prime } } { P } + n C _ { V } \log \frac { V ^ { \prime \gamma } } { V ^ { \gamma } } .
$$
Since $P _ { 0 }$ and $V _ { 0 }$ and $S \left( P _ { 0 } , V _ { 0 } \right)$ are all fixed constants, we hence have
$$
S ( P , V ) = n C _ { V } \log \left( P V ^ { \gamma } \right) + \text { constant }
$$
as desired.
(d) Since no work or heat transfer occurred, the internal energy must stay the same. Thus the temperature stayed the same. Using our previously obtained result, we get
$$
\Delta S = n C _ { V } \log \left( \frac { T V ^ { \prime \gamma - 1 } } { T V ^ { \gamma - 1 } } \right) = n R \log \left( \frac { V ^ { \prime } } { V } \right) .
$$
This can also be found by considering an isothermal process to get to the final state and finding the entropy change using $d S = d Q / T$. Since entropy is a state function, the final changes in entropy are equivalent.
(e) Use the ideal gas law to substitute $V = n R T / P$, giving
$$
S / n = C _ { V } \log \left( P \frac { n ^ { \gamma } R ^ { \gamma } T ^ { \gamma } } { P ^ { \gamma } } f ( n ) \right) + \text { constant } .
$$
For constant $P$ and $T$, the argument of the logarithm is independent of $n$ when
$$
f ( n ) = n ^ { - \gamma } .
$$
The resulting general expression for the entropy of an ideal gas, up to the remaining constant (which can't be found without using quantum statistical mechanics) is called the Sackur-Tetrode equation.
[3] Problem 10. USAPhO 2014, problem A2.
[3] Problem 11. USAPhO 2017, problem A2. A simple but tricky problem. (For a more involved problem based on the same fundamental idea, see Physics Cup 2019, problem 2.)
[3] Problem 12. USAPhO 2020, problem B3. An advanced problem which shows you how to compute corrections for a slightly nonideal gas. (Note that you can use the quantity $T$ in any of the parts, not just (e) and (f).)


## 3 Quantum Statistical Mechanics and the Third Law

So far, everything we have discussed only tells us about changes in entropy, while the absolute value is undetermined. This is fixed by the following fact.

Idea 7: Third Law
The entropy of any thermodynamic system approaches zero as the temperature goes to zero.
The third law of thermodynamics is a bit of a black sheep. Unlike the other laws, it is inherently quantum mechanical, and comes from the statistical definition of entropy, as described below.
