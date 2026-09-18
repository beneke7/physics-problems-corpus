---
id: solution-ocr-kevin-zhou-e2sol-p026
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e2-p026]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 26. Consider a cube of side length $L$ whose edges are resistors of resistance $R$.
    (a) Compute the resistance between two vertices a distance $\sqrt { 3 } L$ apart.
    (b) Compute the resistance between two vertices a distance $\sqrt { 2 } L$ apart.
    (c) Compute the resistance between two vertices a distance $L$ apart.
    (d) Generalize to vertices $\sqrt { n } L$ apart on an $n$-dimensional cube. (One edge is $n = 1$, a square is $n = 2$, and an ordinary cube is $n = 3$. Give your answer in the form of a summation.)

Solution. (a) Let the two vertices be $A$ and $B$. Let the vertices distance 1 from $A$ be labeled $a$ and distance two labeled $b$. Note that all the vertices labeled $a$ have the same potential by symmetry, and same for $b$. Thus, we can treat all the vertices labeled the same thing as one vertex.

We have 3 connections from $A$ to $a$, 6 from $a$ to $b$, and 3 from $b$ to $B$. Thus, our resistance is $R / 3 + R / 6 + R / 3 = 5 R / 6$.


(b) Apply potential $V$ and $- V$ to the vertices, and label the rest of the vertices as shown.
![](../../../figures/solution-ocr/0e0eac9ba2eff11ecbeb24f2.jpg)
We claim that all the vertices labeled $c$ have potential 0 . The idea is then that negating the potentials $V$ and $- V$ must negate the potentials at all vertices. But negating is equivalent to a simple reflection that preserves the locations of the vertices labeled $c$. Thus the only option is that their potential is zero. Therefore, all the $c$ s can be treated as one vertex, and we have the drawn equivalent circuit. This is a combination of parallel and series, and we compute the answer to be
![](../../../figures/solution-ocr/16dccab9b8ad686f8d368312.jpg)
(c) In a similar fashion, the points labeled the same below have the same potential, and on the right is the equivalent circuit.
![](../../../figures/solution-ocr/99f3e194f2cb542e498dc4e0.jpg)
This is again just a series/parallel problem, and we compute the answer to be
![](../../../figures/solution-ocr/1474304a880b4449dddaef33.jpg)
(d) The coordinates take the form $\left( x _ { 1 } , x _ { 2 } , \ldots , x _ { n } \right)$ where $x _ { i }$ is zero or one. We consider the vertices $( 0,0 , \ldots , 0 )$ and $( 1,1 , \ldots , 1 )$. The first vertex is connected to all the vertices with one 1 , of which there are $n$. By symmetry, these are all at the same voltage. Next, these vertices are connected to all the vertices with two 1's, of which there are $\binom { n } { 2 }$, and so on.

We hence have $n + 1$ effective vertices of different voltages. Consider the vertex representing points with $k 1$ 's. The number of connections to points with $k + 11$ 's is $\binom { n } { k } ( n - k )$. Then by adding series and parallel resistances,

$$
R _ { \mathrm { eq } } = R \sum _ { k = 0 } ^ { n - 1 } \left( \binom { n } { k } ( n - k ) \right) ^ { - 1 } .
$$

For example, this recovers the result of part (a) for $n = 3$.
[2] Problem 27 (PPP 158). Consider the circuit below, where every resistor is $1 \Omega$.
![](../../../figures/solution-ocr/60a45bd25bad981cbeb79500.jpg)

(a) Find the equivalence resistance between the input terminals.
(b) Do the same in the case where the chain is infinitely long.

Solution. (a) Suppose the rightmost resistor has unit current flowing down, and let $V$ be the potential difference across $A$ and $B$.

Number the resistors, starting from the back, and going to the left. Let $I _ { k }$ be the current in $R _ { k }$. We claim that

$$
I _ { k } = F _ { k }
$$

where the $F _ { k }$ are the Fibonacci numbers $F _ { 1 } = F _ { 2 } = 1$ and $F _ { n } = F _ { n - 1 } + F _ { n - 2 }$. This is true by induction. Note that

$$
I _ { 2 k } = I _ { 2 k - 1 } + I _ { 2 k - 2 }
$$

by junction law. By the loop law,

$$
I _ { 2 k + 1 } = I _ { 2 k } + I _ { 2 k - 1 } .
$$

Note that all currents are either to the right or down. Let the number of vertical resistors be $n$. Then, the potential difference is

$$
V = I _ { 2 n - 1 } + I _ { 2 n } = I _ { 2 n + 1 } = F _ { 2 n + 1 } .
$$

The equivalent resistance is

$$
R = \left( F _ { 2 n + 1 } / F _ { 2 n } \right) \Omega .
$$

(b) By taking the limit $n \rightarrow \infty$ above, we get the golden ratio,
$$
R = \frac { 1 + \sqrt { 5 } } { 2 } \Omega .
$$
There's another, slicker way to do this. In the infinite case, if we let the answer be $R$, then
$$
R = 1 + \frac { 1 } { 1 + \frac { 1 } { R } }
$$

which is equivalent to the quadratic
$$
R ^ { 2 } - R - 1 = 0 , \quad R = \frac { 1 \pm \sqrt { 5 } } { 2 } .
$$
Then taking the positive root gives the answer.
We can dismiss the negative root here because all the components have positive resistance, so combining them can only yield a positive resistance. On the other hand, there do exist circuit elements with negative resistance, as you'll see in E6, though they need an active source of power to maintain. So is there any situation where the negative root is meaningful?
Suppose you start out with something on the right end, with (possibly negative) equivalent resistance $R _ { 0 }$. If we attach two $1 \Omega$ resistors on the left, as in the diagram, then we get some new resistance $R _ { 1 }$, and attaching two more gives $R _ { 2 }$, and so on. The two roots for $R$ found above are the two fixed points for this iteration. So mathematically, it is possible to end up at the negative root. However, in practice this won't happen because the positive root is a stable fixed point, while the negative root is unstable. If $R _ { 0 }$ is anything besides $( 1 - \sqrt { 5 } ) / 2$, then the $R _ { i }$ will get further away from $( 1 - \sqrt { 5 } ) / 2$ and eventually converge to $( 1 + \sqrt { 5 } ) / 2$. Indeed, that's precisely what we showed in part (a) for the special case $R _ { 0 } = 1 \Omega$.
Therefore, even though a mathematically infinite network doesn't have anything "on the right end" (since it has no end at all), it's still meaningful to say that "the" resistance is $( 1 + \sqrt { 5 } ) / 2$. When we introduce infinite objects in physics, we usually do so just to get a mathematically tractable approximation for a real, finite object. And for almost any long, but finite chain, you'll get an answer near $( 1 + \sqrt { 5 } ) / 2$, so that's the useful answer in the infinite case.
[3] Problem 28 (PPP 159-161). The principle of superposition is useful whenever equations are linear, which includes resistor networks. Specifically, if there are two arrangements of currents and voltages which each satisfy Kirchhoff's circuit laws, then their sum does as well. This can be used to build up more complicated current configurations.
    (a) Consider an infinite two-dimensional grid of identical resistors $R$.
![](../../../figures/solution-ocr/32bfd2a47460b465323ac8eb.jpg)
Find the equivalent resistance between two neighboring points by considering the superposition of a current $I$ flowing into one point, and an equal current $I$ flowing out the other.
    (b) What would the equivalent resistance be if the resistor directly connecting the two neighboring points was removed?
    (c) Now consider an icosahedron of identical resistors $R$. By superposing appropriate current distributions, find the equivalent resistance between two neighboring vertices.

Solution. (a) Suppose we had only a current $I$ flowing into the first point. Then by symmetry, a current $I / 4$ flows out along each of the resistors connected to that point. (This current eventually flows out to infinity.)
Now, suppose we had only a current $I$ flowing out of the second point. Then a current $I / 4$ flows in along each of the resistors connected to that point.
By superposing the two configurations, we get the desired current configuration of the problem, and the current in the resistor between the points is $I / 2$. So the voltage difference between the points is $\Delta V = I R / 2$, and the equivalent resistance is $R _ { \mathrm { eq } } = \Delta V / I = R / 2$.

(b) Suppose the answer is $R ^ { \prime }$. From part (a), $R ^ { \prime }$ and $R$ attached in parallel give $R / 2$. Thus,
$$
\frac { 1 } { R ^ { \prime } } + \frac { 1 } { R } = \frac { 2 } { R } ,
$$
so $R ^ { \prime } = R$.
(c) In this case, the very first step in the solution to part (a) breaks. You can't just put current $I$ into some point, because then the current has nowhere to go. But if we superpose a current $I$ going into one point and coming out of another, this current configuration breaks the symmetry of the icosahedron, so we can't easily get the answer from it. (If this is hard to visualize, try it explicitly for the case of a triangle of resistors.)
So we need to consider a current distribution with zero net current going in, but which preserves the icosahedron's symmetry. The trick is to put current $I$ flowing into one vertex, and $I / 11$ leaving from every other vertex. Then by symmetry, the current in each edge coming out from the source vertex is $I / 5$. Next, by superposing a similar current distribution for an adjacent vertex, but with signs flipped, we see that $( 12 / 11 ) I R _ { \text {eff } } = 2 R I / 5$, so $R _ { \text {eff } } = 11 R / 30$.

## Idea 8

In a circuit of resistors and batteries, Kirchhoff's loop rule states that the sum of the voltage drops around a loop is zero. Kirchhoff's junction rule states that the net current flowing into a vertex is zero. (This is technically nonzero, because of the effect of problem 22, but negligible because wires have tiny capacitance.)

## Remark

If the sum of the voltage drops around a loop is zero, then why would current ever want to flow? After all, if you had a circular tube of water, the water would never flow, because the net drop in height along the circle is zero. The reason current flows in circuits with batteries is that within the battery, charges are moved from lower to higher electric potential energy, just like how a pump could be used to move water upward to start a liquid circuit, by an "electromotive force".

But this immediately raises the question: what is this specific force? It can't be the electric force, because we just established that it's pointing the wrong way. It's not a magnetic effect. For some setups, it is literally a mechanical force like a pump: in the Van de Graaff generator, a motor drives the charges on a statically charged conveyor belt to higher potential. But that's not how batteries work.


In a battery, there is no specific force pushing charges from low to high electric potential. Instead, the charges just jiggle around randomly, and the result emerges from the effects of their many collisions. To understand this, consider a gravitational analogy.
![](../../../figures/solution-ocr/07dcb1cb5c84720d67516377.jpg)
Consider an ideal gas at temperature $T$ released in the trough shown above. The gas molecules will randomly collide, sometimes being propelled upward by chance. Sometimes, a gas molecule will climb the hill and fall into the deep hole, at which point it is unlikely to come out again. Thus, if the hole begins empty, it is energetically favorable for gas molecules to fill it. But there is no attractive force pulling molecules up along the slope! Gravity always points down; molecules go up the slope when they are randomly bounced that way.

This is essentially how the potential in an initially neutral battery is set up. The hole corresponds to the lower energy state an electron can reach inside the anode, but there is no long-range force pushing it there, just the average effect of random collisions.

[2] Problem 29 (Purcell 4.10). The basic ingredient in older voltmeters and ammeters is the galvanometer, a device to measure very small currents. (It works via magnetic effects, but the exact mechanism isn't important here.) Inherent in any galvanometer is some resistance $R _ { g }$, so a physical galvanometer can be represented by the system shown below.
![](../../../figures/solution-ocr/d727aebfbcc29bd07a7d0113.jpg)
Consider a circuit such as the one shown, with all quantities unknown. We want to measure the current flowing across point A and the voltage difference between points B and C . Given a galvanometer with known $R _ { g }$, and also a supply of known resistors (ranging from much smaller to much larger than $R _ { g }$ ), how can you accomplish these two tasks? Explain how to construct your

two devices (called an ammeter and voltmeter), and also how you should insert them in the given circuit. You will need to make sure that you (a) affect the given circuit as little as possible, and (b) don't destroy your galvanometer by passing more current through it than it can handle.

Solution. An ammeter is a resistor $R \ll R _ { g }$ in parallel with the galvanometer. The whole system is attached in series to the circuit. Then if a current $I$ passes through the whole ammeter, a current of roughly $I R / R _ { g }$ passes through the galvanometer. We simply multiply the galvanometer reading by $R _ { g } / R$ to infer $I$.

A voltmeter is a resistor $R \gg R _ { g }$ in series with the galvanometer, where $R$ is also much larger than any resistance in the circuit. The whole system is attached in parallel to the circuit. Then the current of roughly $V / R$ passes through the galvenometer, from which we can infer $V$.

## Remark

What if a voltmeter is connected in series? On common handheld digital multimeters, the voltmeter setting presents a resistance of about $10 \mathrm { M } \Omega$. Thus, one could heuristically treat the voltmeter like a high-resistance resistor.

But no professional would ever do this on purpose, because voltmeters aren't designed to be used this way. There is no guarantee that the resistance of the voltmeter is a constant. Instead, for most digital multimeters, there is a complex circuit inside that adjusts the internal resistance depending on the input and the configuration settings. You probably won't break the voltmeter when you put it in series, but you won't get reliable results either.

[2] Problem 30. USAPhO Quarterfinal 2009, problems 3 and 4.
[3] Problem 31. INPhO 2021, problem 1. A nice problem on practical circuit measurements. Note that the question statement is a bit vague. You are supposed to keep track of quantities of order $R _ { A } / R$ and $R / R _ { V }$, but you are allowed to neglect quantities as small as $R _ { A } / R _ { V }$.
