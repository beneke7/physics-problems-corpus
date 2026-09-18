---
id: solution-ocr-kevin-zhou-t2sol-p017
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-p017]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 17. Consider two adjacent blackbodies with similar temperatures, exchanging energy by radiation. Show that the rate of change of the temperature difference is approximately proportional to the temperature difference itself. This is an example of Newton's law of cooling, which implies the temperature difference decays exponentially. How does the time scale for cooling depend on the average temperature of the blackbodies?

Solution. By the Stefan-Boltzmann law, the net energy transfer rate is proportional to $T _ { 1 } ^ { 4 } - T _ { 0 } ^ { 4 }$. Letting $\Delta T = T _ { 1 } - T _ { 0 } \ll T _ { 0 }$, we have

$$
T _ { 1 } ^ { 4 } - T _ { 0 } ^ { 4 } = T _ { 0 } ^ { 4 } \left( \left( 1 + ( \Delta T ) / T _ { 0 } \right) ^ { 4 } - 1 \right) \approx 4 T _ { 0 } ^ { 3 } \Delta T
$$

by the binomial theorem. This is proportional to $\Delta T$ as desired. Therefore, $d \Delta T / d t = - k \Delta T$ for a constant $k$, so $\Delta T \sim e ^ { - k t }$, as desired. The timescale for cooling is $1 / k \propto 1 / T ^ { 3 }$.
[3] Problem 18 (IPhO 1992). A satellite is a sphere of diameter $D$ orbiting about the Earth.

(a) First suppose the satellite is perfectly black. Ignoring the effect of the Earth, find its temperature $T$ in terms of the temperature $T _ { \odot }$ of the Sun, the radius $R _ { \odot }$ of the Sun, and the radius $R$ of Earth's orbit.
(b) How does the answer change if the satellite has a uniform emissivity $e ( f ) = e _ { 0 } < 1$ ?
(c) If an engineer wishes to make $T$ as small as possible using a special paint, which can have an arbitrary $e ( f )$, sketch how the function $e ( f )$ should look.

Solution. (a) The power going into the satellite is
$$
P = \frac { \sigma \left( 4 \pi R _ { \odot } ^ { 2 } \right) T _ { \odot } ^ { 4 } } { 4 \pi R ^ { 2 } } \frac { 1 } { 4 } \pi D ^ { 2 } .
$$
At equilibrium, this should equal to the power that the satellite emits.
$$
P = \sigma \pi D ^ { 2 } T ^ { 4 } .
$$
Equating the two yields
$$
T = T _ { \odot } \sqrt { \frac { R _ { \odot } } { 2 R } }
$$
    (b) The power that the satellite absorbs will be reduced by a factor of $e _ { 0 }$, and the power emitted will also be reduced by a factor of $e _ { 0 }$. When equating the powers as in part (a), the $e _ { 0 }$ will cancel out, giving the same answer.
    (c) Since the satellite has lower temperature than the Sun, at high frequencies the emission from the satellite rapidly falls off. Thus, it is better to have $e ( f )$ smaller at these high frequencies, because energy comes in at these frequencies but doesn't substantially come out.
![](../../../figures/solution-ocr/a1db2f0d83adb3a57570b5da.jpg)
[3] Problem 19 (IPhO 1996). Two perfectly black surfaces of temperatures $T _ { h }$ and $T _ { \ell }$ are parallel to each other in vacuum, and the net heat flux from the hotter surface to the colder one is $P$.
![](../../../figures/solution-ocr/318039042450c86c01b3e264.jpg)
Now suppose that $N$ parallel, thermally insulating, perfectly black plates are placed in between them. This shielding reduces the heat flux to $P ^ { \prime }$. Find $P ^ { \prime } / P$.
Solution. The answer is $1 / ( N + 1 )$. The official solution to IPhO 1996, problem 1(d) does the $N = 2$ case, and the same method works for general $N$.

Example 10
In problem 19 you considered some ideally black surfaces, but things get more complicated when the surfaces have general emissivity. For simplicity, consider two walls facing each other, with emissivities $e _ { 1 }$ and $e _ { 2 }$. Verify that when both walls have temperature $T$, there is no net energy flow from one to the other.

Solution
Let $I _ { 0 } = \sigma T ^ { 4 }$. The second wall emits radiation of intensity $e _ { 2 } I _ { 0 }$, so in equilibrium it must absorb this amount as well. Verifying this takes a little work.

The first wall emits radiation of intensity $e _ { 1 } I _ { 0 }$, and a fraction $e _ { 2 }$ of it gets absorbed by the second wall. The rest bounces back to the first wall, and if it doesn't get absorbed by the first wall, then it comes back to the second wall again for another chance to get absorbed. The total intensity transferred from the first wall to the second is the sum of an infinite series,

$$
I _ { 1 \rightarrow 2 } = \left( e _ { 1 } I _ { 0 } \right) \left( e _ { 2 } + \left( 1 - e _ { 2 } \right) \left( 1 - e _ { 1 } \right) e _ { 2 } + \ldots \right) = \frac { e _ { 1 } e _ { 2 } I _ { 0 } } { e _ { 1 } + e _ { 2 } - e _ { 1 } e _ { 2 } } .
$$

This isn't the expected result, because there's another contribution. When the second wall emits radiation, it can reflect off the first wall and then get reabsorbed by the second wall. So the second wall absorbs a total radiation intensity due to its own emission, of

$$
I _ { 2 \rightarrow 2 } = \left( e _ { 2 } I _ { 0 } \right) \left( \left( 1 - e _ { 1 } \right) e _ { 2 } + \left( 1 - e _ { 1 } \right) \left( 1 - e _ { 2 } \right) \left( 1 - e _ { 1 } \right) e _ { 2 } + \ldots \right) = \frac { \left( 1 - e _ { 1 } \right) e _ { 2 } ^ { 2 } I _ { 0 } } { e _ { 1 } + e _ { 2 } - e _ { 1 } e _ { 2 } } .
$$

When you sum these contributions, you get $e _ { 2 } I _ { 0 }$ as expected. This is a typical example of the power of thermodynamics: it is often easy to tell what the answer has to be, but the way that answer comes about can be a bit complicated.
