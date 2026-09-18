---
id: solution-ocr-kevin-zhou-x2sol-p004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x2-p004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 4. Some nuclei have extremely long lifetimes $\tau$, so that we can measure $\tau$ by continuously watching a very large sample of $N _ { 0 }$ nuclei, and looking for decay events. However, it turns out that the way we do it can yield different results. Let's consider the following procedures.
    (a) We start a stopwatch at noon and stop it when the next decay happens, giving $t _ { 1 }$.
    (b) We have an intern watch the sample continuously, then at noon, ask them how long it was since the last decay, giving $t _ { 2 }$.
    (c) We have an intern watch the sample continuously, then at noon, ask them how long it was since the last decay. We then set our stopwatch so that $t = 0$ when that decay happened, and stop the stopwatch when the next decay happens, giving $t _ { 3 }$.
    (d) We continuously watch the sample, start a stopwatch when the first decay happens, then stop it when the next decay happens, giving $t _ { 4 }$.

We repeat procedure $i$ many times, so the average of $t _ { i }$ is $\bar { t } _ { i }$. Find the $\bar { t } _ { i }$ in terms of $N _ { 0 }$ and $\tau$.
Solution. (a) The probability of any decay in a time interval $d t$ is $N _ { 0 } d t / \tau$, so the probability of having no decay in that interval is $\left( 1 - N _ { 0 } d t / \tau \right)$. After $N = t / d t$ such time intervals, the probability that a single decay still hasn't occurred is $\left( 1 - N _ { 0 } d t / \tau \right) ^ { N }$. As shown in P1, this becomes $e ^ { - N _ { 0 } t / \tau }$ in the limit $d t \rightarrow 0$. Thus, the probability of the first decay occurring after time $t$ in an interval $d t$ is

$$
P ( t ) d t = \frac { N _ { 0 } } { \tau } e ^ { - N _ { 0 } t / \tau } d t .
$$

The value of $\bar { t } _ { 1 }$ is the average of this time, so

$$
\bar { t } _ { 1 } = \frac { N _ { 0 } } { \tau } \int _ { 0 } ^ { \infty } e ^ { - N _ { 0 } t / \tau } t d t = \int _ { 0 } ^ { \infty } e ^ { - N _ { 0 } t / \tau } d t = \frac { \tau } { N _ { 0 } } .
$$

(b) "Waiting" forward or backwards in time are symmetric, so $\bar { t } _ { 2 } = \bar { t } _ { 1 } = \tau / N _ { 0 }$. (Technically, there's a tiny difference because the previous decay occured when there were $N _ { 0 } + 1$ nuclei instead, but this is negligible in a typical sample containing billions of billions of nuclei.)
(c) By definition, $t _ { 3 } = t _ { 1 } + t _ { 2 }$, and taking expectation values gives $\bar { t } _ { 3 } = \bar { t } _ { 1 } + \bar { t } _ { 2 }$. Thus, $\bar { t } _ { 3 } = 2 \tau / N _ { 0 }$.

(d) We know that the mean time between decays is $\tau / N _ { 0 }$, so $\bar { t } _ { 4 } = \tau / N _ { 0 }$.
Of course, the tricky part of the problem is the following: why is $\bar { t } _ { 3 } \neq \bar { t } _ { 4 }$, even though they seem to be measuring the exact same thing, namely the time between two decays? The difference is in the way we select the decay we look at. For $\bar { t } _ { 4 }$, we look at a random decay event (i.e. if there are a thousand decay events, each one has an equal chance of being the one we look at). But for $\bar { t } _ { 3 }$, we look at the decay happening during a random time, which means that longer time intervals have a larger chance of being randomly picked, so $\bar { t } _ { 3 } > \bar { t } _ { 4 }$.
To show this explicitly, note that the probability distribution of decay times is $\left( N _ { 0 } / \tau \right) e ^ { - N _ { 0 } t / \tau }$, as derived in part (a). The probability distribution of decay times weighted by decay length, as used in part (c), is $\left( N _ { 0 } / \tau \right) ^ { 2 } t e ^ { - N _ { 0 } t / \tau }$. So the expected decay time in part (c) is
$$
\bar { t } _ { 3 } = \frac { N _ { 0 } ^ { 2 } } { \tau ^ { 2 } } \int _ { 0 } ^ { \infty } t ^ { 2 } e ^ { - N _ { 0 } t / \tau } d t = 2 \frac { \tau } { N _ { 0 } }
$$
just as argued more intuitively above.
This is quite a tricky factor of 2. Drude got it wrong when formulating the Drude model, which is the simplest classical model of electrical conduction in a metal. It turns out that the Drude model is totally wrong, due to quantum mechanics, but this mistake, plus two other more conceptual issues, made it look like it agreed with experiment.
Another example of a memoryless process is the collisions of a given gas molecule in an ideal gas, according to kinetic theory. For example, all of the subparts above could have been rephrased in terms of observing the distance a gas molecule moves between collisions, with the same conclusions.
[2] Problem 5 (Krane 12.37). A radioactive sample contains $N _ { 0 }$ atoms at time $t = 0$. It is observed that $N _ { 1 }$ radioactive atoms remain at time $t _ { 1 }$ and then decay by time $t _ { 2 } , N _ { 2 }$ remain at $t _ { 2 }$ and then decay by time $t _ { 3 }$, and so on. Show that if many observations are made, then $\tau$ can be measured as
$$
\tau = \frac { 1 } { N _ { 0 } } \sum _ { i } N _ { i } t _ { i } .
$$
Solution. $N ( t )$ should follow $N ( t ) = N _ { 0 } e ^ { - t / \tau }$, so $d N ( t ) / d t = - N ( t ) / \tau$. Thus the number of atoms that decay between time $t _ { i }$ and $t _ { i + 1 } , N _ { i }$, will be about $N _ { i } = \left( t _ { i + 1 } - t _ { i } \right) d N \left( t _ { i } \right) / d t = \left( t _ { i + 1 } - t _ { i } \right) N ( t ) / \tau$ as the number of measurements are large. With smaller time intervals, this can be seen as $N _ { i } =$ $N ( t ) d t / \tau$. Thus looking at the expression $\frac { 1 } { N _ { 0 } } \sum _ { i } N _ { i } t _ { i }$ gives
$$
\frac { 1 } { N _ { 0 } } \sum _ { i } N _ { i } t _ { i } \approx \frac { 1 } { N _ { 0 } } \int _ { 0 } ^ { \infty } \left( N ( t ) \frac { d t } { \tau } \right) t = \frac { 1 } { \tau } \int _ { 0 } ^ { \infty } e ^ { - t / \tau } t d t
$$
This integral can be evaluated with parts (differentiating $t$ and integrating $e ^ { - t / \tau } d t$ ),
$$
\frac { 1 } { \tau } \int _ { 0 } ^ { \infty } e ^ { - t / \tau } t d t = \int _ { 0 } ^ { \infty } e ^ { - t / \tau } d t = \tau ,
$$
which shows that, as desired,
$$
\tau = \frac { 1 } { N _ { 0 } } \sum _ { i } N _ { i } t _ { i } .
$$
