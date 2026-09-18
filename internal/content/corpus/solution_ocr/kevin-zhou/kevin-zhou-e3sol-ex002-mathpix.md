---
id: solution-ocr-kevin-zhou-e3sol-ex002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e3-ex002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 2
Consider some batteries connected in parallel, with emfs $\mathcal { E } _ { i }$ and internal resistances $R _ { i }$. What is the Thevenin equivalent of this circuit?

Solution
The equivalent resistance is simply

$$
R _ { \mathrm { eq } } = \left( \sum _ { i } \frac { 1 } { R _ { i } } \right) ^ { - 1 } .
$$

To infer $V _ { \text {eq } }$, we just need one more $V ( I )$ value. The most convenient is to set $V = 0$, shorting all of the batteries. Each battery alone would produce a current of $\mathcal { E } _ { i } / R _ { i }$, so

$$
0 = V _ { \mathrm { eq } } - \left( \sum _ { i } \frac { \mathcal { E } _ { i } } { R _ { i } } \right) R _ { \mathrm { eq } } .
$$

Thus, we have

$$
V _ { \mathrm { eq } } = \left( \sum _ { i } \frac { \mathcal { E } _ { i } } { R _ { i } } \right) \left( \sum _ { j } \frac { 1 } { R _ { j } } \right) ^ { - 1 } .
$$

Remark
With ideal batteries, it's easy to set up circuits that don't make any sense.
![](../../../figures/solution-ocr/f64f5bade1a044fad46b6b30.jpg)
For example, in the above circuit, Kirchhoff's rules don't determine the currents; they only say that $i _ { 1 } + i _ { 2 } = 1 \mathrm {~A}$. If the emfs of the batteries were different, the situation would be even worse: the equations would be contradictory, with no solution at all! In real life, this is avoided because all batteries have some internal resistance. Adding such a resistance to each battery, no matter how small, resolves the problem and gives a unique solution.
[2] Problem 1 (Purcell 4.12). Consider the circuit below.


![](../../../figures/solution-ocr/5379e00f51139a2a9b072f83.jpg)

(a) Find the potential difference between points $a$ and $b$.
(b) Find the equivalent Thevenin resistance and emf between points $a$ and $b$.

Solution. (a) We'll use loop currents, with positive being clockwise. Let the loop currents be $I _ { 1 } , I _ { 2 } , I _ { 3 }$, from top to bottom. We see that

$$
\begin{aligned}
\mathcal { E } - \mathcal { E } - 2 R I _ { 1 } + R I _ { 2 } & = 0 \\
\mathcal { E } - 3 R I _ { 2 } + R I _ { 3 } + R I _ { 1 } & = 0 \\
- \mathcal { E } - 2 R I _ { 3 } + R I _ { 2 } & = 0 ,
\end{aligned}
$$

or

$$
\begin{aligned}
I _ { 2 } & = 2 I _ { 1 } \\
3 I _ { 2 } - I _ { 3 } - I _ { 1 } & = \mathcal { E } / R \\
I _ { 2 } - 2 I _ { 3 } & = \mathcal { E } / R .
\end{aligned}
$$

This can be solved to give $I _ { 1 } = \mathcal { E } / 8 R , I _ { 2 } = \mathcal { E } / 4 R$, and $I _ { 3 } = - 3 \mathcal { E } / 8 R$. We see that $V _ { b } - V _ { a } =$ $\left( I _ { 2 } - I _ { 3 } \right) R = 5 \mathcal { E } / 8$.

(b) We'll do this in two ways for variety. First, note that we already found the voltage between $a$ and $b$ in part (a), and this is precisely the Thevenin emf, $V _ { \text {eff } } = 5 \mathcal { E } / 8$. The Thevenin resistance is simply the equivalent resistance between $a$ and $b$. By a straightforward application of the series and parallel rules, this is $R _ { \text {eff } } = 3 R / 8$.
Second, suppose we short points $a$ and $b$ with a wire. Then by Thevenin's theorem, the current flowing through that wire should be $I = V _ { \text {eff } } / R _ { \text {eff } }$. We already know $V _ { \text {eff } }$ from part (a). To compute the current, we just use Kirchhoff's loop rules again; these are now as follows.
$$
\begin{array} { r }
\mathcal { E } - \mathcal { E } - 2 R I _ { 1 } + R I _ { 2 } = 0 \\
\mathcal { E } - 2 R I _ { 2 } + R I _ { 1 } = 0 \\
- \mathcal { E } - R I _ { 3 } = 0
\end{array}
$$
Solving these equations gives $I _ { 1 } = \mathcal { E } / 3 R , I _ { 2 } = 2 \mathcal { E } / 3 R$, and $I _ { 3 } = - \mathcal { E } / R$. The current through the wire is now $I _ { 2 } - I _ { 3 } = 5 \mathcal { E } / 3 R$. Thus, $R _ { \text {eff } } = ( 5 \mathcal { E } / 8 ) / ( 5 \mathcal { E } / 3 R ) = 3 R / 8$.

[2] Problem 2 (Wang). A circuit containing batteries and resistors has two terminals. When an ideal ammeter is connected between them, the reading is $I _ { 1 }$. When a resistor $R$ is connected between them, the current through the resistor is $I _ { 2 }$, in the same direction. What would be the reading $V$ of an ideal voltmeter connected between them?
Solution. We consider the Thevenin equivalent, i.e. the function $V ( I )$. The first piece of information tells us that when $V = 0 , I = I _ { 1 }$. The second tells us that when $V = - I _ { 2 } R$, then $I = I _ { 2 }$. Thus,
$$
0 = V _ { \mathrm { eq } } + I _ { 1 } R _ { \mathrm { eq } } , \quad - I _ { 2 } R = V _ { \mathrm { eq } } + I _ { 2 } R _ { \mathrm { eq } } .
$$
Solving this system of equations gives
$$
V _ { \mathrm { eq } } = \frac { I _ { 1 } I _ { 2 } R } { I _ { 2 } - I _ { 1 } } , \quad R _ { \mathrm { eq } } = \frac { I _ { 2 } R } { I _ { 1 } - I _ { 2 } } .
$$
When an ideal voltmeter is connected, we have $I = 0$, so
$$
V = V _ { \mathrm { eq } } = \frac { I _ { 1 } I _ { 2 } R } { I _ { 2 } - I _ { 1 } } .
$$
Note that your answer may differ by a harmless sign, which ultimately depends on your sign conventions for $I _ { 1 }$ and $I _ { 2 }$ (i.e. which terminal is $A$ and which terminal is $B$ ).
[3] Problem 3. USAPhO 2015, problem A2.
Now we give a few problems on current flow through continuous objects. Fundamentally, all one needs for these problems is the definition $\mathbf { J } = \sigma \mathbf { E }$, and superposition.
