---
id: solution-ocr-aupho-2010-s-q14
source: aupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/aupho/2010_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [aupho-2010-q14]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question 14 Suggested time: 40 minutes
A rare waist-necked giraffe has a mild gastric upset, and it is necessary that it be treated with some giant medicine balls. The balls are spherical lozenges, and work best when they are big. The giraffe's insides are at temperature $T _ { G }$ and the surrounding air is at temperature $T _ { A }$. As the lozenge changes temperature as it slides down the giraffe's long, beamy neck, it will expand. The volume $V$ of the lozenge at some temperature $T$ is related to its volume $V _ { A }$ at $T _ { A }$ by

$$
V = V _ { A } \left( 1 + \beta \left( T - T _ { A } \right) \right) ,
$$

where $\beta > 0$ is a constant.
The temperature does not change linearly down the giraffe's neck, but accurate measurements have been taken many times and it is known that the temperature varies with position $h$ from the giraffe's body as

$$
T = T _ { G } - \left( T _ { G } - T _ { A } \right) \frac { h ^ { 2 } } { N ^ { 2 } }
$$

(a) Show that the diameter of the ball at some height $h$ away from the giraffe's body is given by
$$
d = d _ { A } \left[ 1 + \gamma \left( N ^ { 2 } - h ^ { 2 } \right) \right] ^ { 1 / 3 } ,
$$
where $d _ { A }$ is the initial diameter in the air and $N$ is the length of the neck, and find the constant $\gamma$.

Solution: (1 mark) We have

$$
V = V _ { A } \left( 1 + \beta \left( T - T _ { A } \right) \right)
$$

and

$$
T = T _ { G } - \left( T _ { G } - T _ { A } \right) \frac { h ^ { 2 } } { N ^ { 2 } } .
$$

Substituting the second equation into the first gives

$$
\begin{aligned}
V & = V _ { A } \left[ 1 + \beta \left( T _ { G } - T _ { A } - \left( T _ { G } - T _ { A } \right) \frac { h ^ { 2 } } { N ^ { 2 } } \right) \right] \\
& = V _ { A } \left[ 1 + \beta \left( T _ { G } - T _ { A } \right) \left( 1 - \frac { h ^ { 2 } } { N ^ { 2 } } \right) \right] \\
& = V _ { A } \left[ 1 + \frac { \beta \left( T _ { G } - T _ { A } \right) } { N ^ { 2 } } \left( N ^ { 2 } - h ^ { 2 } \right) \right] .
\end{aligned}
$$

Now, $V = 4 \pi r ^ { 3 } / 3 = \pi d ^ { 3 } / 6$, so

$$
\begin{aligned}
\frac { 1 } { 6 } \pi d ^ { 3 } & = \frac { 1 } { 6 } \pi d _ { A } ^ { 3 } \left[ 1 + \frac { \beta \left( T _ { G } - T _ { A } \right) } { N ^ { 2 } } \left( N ^ { 2 } - h ^ { 2 } \right) \right] \\
d & = d _ { A } \left[ 1 + \frac { \beta \left( T _ { G } - T _ { A } \right) } { N ^ { 2 } } \left( N ^ { 2 } - h ^ { 2 } \right) \right] ^ { 1 / 3 } .
\end{aligned}
$$

This is in the required form, with $\gamma = \beta \left( T _ { G } - T _ { A } \right) / N ^ { 2 }$.

It is physically reasonable to assume that $\gamma$ is a small quantity. The binomial approximation states that for small $n x , ( 1 + x ) ^ { n } \simeq 1 + n x$.


(b) Write down the approximate expression for $d$.
Solution: (1 mark) Assuming that
$$
\frac { \beta \left( T _ { G } - T _ { A } \right) } { 3 N ^ { 2 } } \left( N ^ { 2 } - h ^ { 2 } \right)
$$
is small, we get
$$
\left[ 1 + \frac { \beta \left( T _ { G } - T _ { A } \right) } { N ^ { 2 } } \left( N ^ { 2 } - h ^ { 2 } \right) \right] ^ { 1 / 3 } \approx 1 + \frac { \beta \left( T _ { G } - T _ { A } \right) } { 3 N ^ { 2 } } \left( N ^ { 2 } - h ^ { 2 } \right)
$$
so
$$
d \approx d _ { A } \left[ 1 + \frac { \beta \left( T _ { G } - T _ { A } \right) } { 3 N ^ { 2 } } \left( N ^ { 2 } - h ^ { 2 } \right) \right] = d _ { A } \left[ 1 + \frac { \gamma } { 3 } \left( N ^ { 2 } - h ^ { 2 } \right) \right] .
$$
The width of the neck of a waist-necked giraffe is given by
$$
w = M + \zeta \left( h - \frac { N } { 2 } \right) ^ { 2 } ,
$$
where $M$ is the minimum width of the neck (at the 'waist'), and $h$ as before is the height away from the giraffe's body, so that $h = N$ is at the very top of the neck. $\zeta > 0$ is a constant.
It is of paramount importance not to choke the waist-necked giraffe with the medicinal lozenges, as this would do more harm than good, and retrieving a stuck lozenge is not anyone's idea of a fun way to spend an afternoon. You may assume that the difference between the lozenge's width at the top of the neck $d _ { A }$ differs from the width at the neck-waist $M$ only by a very small amount $\chi$.
(c) Write down the condition for the lozenge not to get stuck in the giraffe's neck. Replace $d _ { A }$ with $M - \chi$, and since $\gamma$ and $\chi$ are small you may neglect terms that contain a product of these two. Express your condition as an inequality with 0 on one side.
Solution: (2 marks) We have
$$
w = M + \zeta \left( h - \frac { N } { 2 } \right) ^ { 2 }
$$
and
$$
d _ { A } = M - \chi .
$$
We want $d < w$ at all times, lest the giraffe choke.
Substituting our expressions for each of these, we want
$$
\begin{aligned}
( M - \chi ) \left[ 1 + \frac { \gamma } { 3 } \left( N ^ { 2 } - h ^ { 2 } \right) \right] & < M + \zeta \left( h - \frac { N } { 2 } \right) ^ { 2 } \\
M + \frac { M \gamma } { 3 } \left( N ^ { 2 } - h ^ { 2 } \right) - \chi - \frac { \chi \gamma } { 3 } \left( N ^ { 2 } - h ^ { 2 } \right) - M - \zeta \left( h - \frac { N } { 2 } \right) ^ { 2 } & < 0 \\
\frac { M \gamma } { 3 } \left( N ^ { 2 } - h ^ { 2 } \right) - \chi - \zeta \left( h - \frac { N } { 2 } \right) ^ { 2 } & < 0 .
\end{aligned}
$$

(d) In order that the lozenge not get stuck, the inequality you wrote must hold for all $h$ between $N$ and 0 . If you solve the equation produced by making your inequality into an equality, you may or may not find a solution for $h$ in that range. Explain why if there is not a solution for $h$ somewhere in the neck, the lozenge will not get stuck.
Solution: (1.5 marks) The lozenge is not stuck initially, as $d _ { A } < M$. For the lozenge to get stuck, its diameter must at some point be equal to that of the giraffe's neck, as it cannot attain a greater diameter without at some point having an equal diameter. Taking the above inequality and solving it as an equality would yield solutions for points where the diameter of the lozenge is equal to the diameter of the giraffe's neck. If there were no solutions, there would be no points where the diameters were equal, and hence the lozenge would not stick.
(e) Find the maximum size of the lozenge such that it is guaranteed not to get stuck by that criterion.
Solution: (4 marks) The equation
$$
\delta ( h ) = - \frac { M \gamma } { 3 } \left( N ^ { 2 } - h ^ { 2 } \right) + \chi + \zeta \left( h - \frac { N } { 2 } \right) ^ { 2 }
$$
describes the amount by which the diameters of throat and lozenge differ as a function of $h$. We want to find the value of $\chi$ such that the parabola described by $\delta ( h )$ has exactly one root (i.e. takes the value of zero exactly once, and is never negative). We will call this value $\chi _ { \text {crit } }$, and this corresponds to the minimum value of $\chi$ (and hence the maximum value of $d _ { A }$ ) that the lozenge can take - any greater and it will stick.
Rewriting $\delta ( h )$ in canonical form, we get
$$
\delta ( h ) = \left( \frac { M \gamma } { 3 } + \zeta \right) h ^ { 2 } - \zeta N h + \left( - \frac { M \gamma N ^ { 2 } } { 3 } + \chi + \frac { \zeta N ^ { 2 } } { 4 } \right)
$$
Taking this as $\delta ( h ) = a h ^ { 2 } + b h + c$, we recall that a parabola has exactly one root when $b ^ { 2 } - 4 a c = 0$. Hence our condition gives that
$$
\begin{aligned}
\zeta ^ { 2 } N ^ { 2 } - 4 \left( \frac { M \gamma } { 3 } + \zeta \right) \left( - \frac { M \gamma N ^ { 2 } } { 3 } + \chi _ { \text {crit } } + \frac { \zeta N ^ { 2 } } { 4 } \right) & = 0 \\
\zeta ^ { 2 } N ^ { 2 } - 4 N ^ { 2 } \left( \frac { M \gamma } { 3 } + \zeta \right) \left( \frac { \zeta } { 4 } - \frac { M \gamma } { 3 } \right) & = 4 \left( \frac { M \gamma } { 3 } + \zeta \right) \chi _ { \text {crit } } \\
\chi _ { \text {crit } } & = \frac { 3 \zeta ^ { 2 } N ^ { 2 } } { 4 M \gamma + 12 \zeta } - N ^ { 2 } \left( \frac { \zeta } { 4 } - \frac { M \gamma } { 3 } \right)
\end{aligned}
$$
so
$$
d _ { A , \max } = M - \chi _ { \mathrm { crit } } = M - \frac { 3 \zeta ^ { 2 } N ^ { 2 } } { 4 M \gamma + 12 \zeta } + N ^ { 2 } \left( \frac { \zeta } { 4 } - \frac { M \gamma } { 3 } \right) .
$$

(f) Check your solution for the limiting cases of $\zeta \rightarrow 0$ and $\zeta \rightarrow \infty$. Do your values make sense in these limits (they should)? Explain why or why not.
Solution: (4.5 marks) When $\zeta \rightarrow 0$, the giraffe's neck has constant width $M$. The lozenge attains its maximum diameter at the base of the giraffe's neck $( h = 0 )$, and this size is
$$
d _ { \max } = d _ { A } \left[ 1 + \frac { \gamma N ^ { 2 } } { 3 } \right] .
$$
Taking our above expression for $d _ { A , \text { max } }$, we get in the limit as $\zeta \rightarrow 0$,
$$
d _ { A , \max } \rightarrow M \left[ 1 - \frac { \gamma N ^ { 2 } } { 3 } \right]
$$
so we have
$$
\begin{aligned}
d _ { \max } & \rightarrow M \left[ 1 - \frac { \gamma N ^ { 2 } } { 3 } \right] \left[ 1 + \gamma \frac { N ^ { 2 } } { 3 } \right] \\
& = M \left[ 1 - \frac { \gamma ^ { 2 } N ^ { 4 } } { 9 } \right] \\
& \approx M
\end{aligned}
$$
where we make this last approximation by recalling our earlier assumption that
$$
\frac { \beta \left( T _ { G } - T _ { A } \right) } { 3 N ^ { 2 } } \left( N ^ { 2 } - h ^ { 2 } \right) = \frac { \gamma \left( N ^ { 2 } - h ^ { 2 } \right) } { 3 }
$$
was small for all values of $h$. Hence we have that our result is sensible in the limit as $\zeta \rightarrow 0$, as we get that the lozenge only just passes through without sticking.
When $\zeta \rightarrow \infty$, the giraffe's neck is very wide at every point except at $h = N / 2$, where it has width $M$. At this height, the lozenge has diameter
$$
d _ { N / 2 } = d _ { A } \left[ 1 + \frac { \gamma } { 3 } \frac { 3 N ^ { 2 } } { 4 } \right] = d _ { A } \left[ 1 + \frac { \gamma N ^ { 2 } } { 4 } \right] .
$$
In the limit as $\zeta \rightarrow \infty$, we have
$$
\begin{aligned}
d _ { A , \max } & \rightarrow M - \frac { 3 N ^ { 2 } \zeta } { 12 } \left( 1 + \frac { 4 M \gamma } { 12 \zeta } \right) ^ { - 1 } + \frac { N ^ { 2 } \zeta } { 4 } - \frac { N ^ { 2 } M \gamma } { 3 } \\
& \approx M - \frac { N ^ { 2 } \zeta } { 4 } \left( 1 - \frac { M \gamma } { 3 \zeta } \right) + \frac { N ^ { 2 } \zeta } { 4 } - \frac { N ^ { 2 } M \gamma } { 3 } \\
& = M \left( 1 - \frac { \gamma N ^ { 2 } } { 4 } \right)
\end{aligned}
$$
Thus the lozenge's width at the narrow point of the neck goes to
$$
\begin{aligned}
d _ { N / 2 } & \rightarrow M \left[ 1 - \frac { \gamma N ^ { 2 } } { 4 } \right] \left[ 1 + \frac { \gamma N ^ { 2 } } { 4 } \right] \\
& = M \left[ 1 - \frac { \gamma ^ { 2 } N ^ { 4 } } { 16 } \right] \\
& \approx M
\end{aligned}
$$
by the same approximation as we made earlier. Thus the result is sensible in this limit also, as the lozenge only just makes it through.

Marker's comments:

- Many students made transcription errors that moved subscripts into multiplicative factors or vice versa, e.g. $d _ { A } = d A$.
- Students also often forgot to close parantheses and thereby introduced errors.
