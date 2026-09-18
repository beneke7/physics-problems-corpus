---
id: solution-ocr-usapho-2025-s-b3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2025-qb3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem B3: Locked and Moded

a. Consider two mirrors facing each other separated by a distance $L$ (a Fabry-Pérot resonator). The cavity (the space between the two mirrors) is in vacuum (index of refraction $n = 1$, no dispersion), and the mirrors have high reflectivities so that the main resonance condition is that an integer multiple of half-wavelengths fit into the cavity. A light pulse containing multiple different frequencies travels between the mirrors and interferes with itself.
    i. State the condition for resonance in terms of $L$ and wavelength $\lambda$.
    ii. Write down an expression for the resonant angular frequencies $\omega _ { m }$, with $m$ counting each of the possible resonances.
    iii. What is the angular frequency spacing $\Delta \omega \equiv \omega _ { m + 1 } - \omega _ { m }$ between adjacent angular frequencies?

## Solution

For a Fabry-Pérot resonator of length $L$ in vacuum, an integer number of half-wavelengths must fit into the cavity. Mathematically, we express this resonance condition as:

$$
m \frac { \lambda } { 2 } = L ,
$$

where $m$ is a positive integer. Rearranging gives

$$
\frac { \lambda } { 2 } = \frac { L } { m } \quad \Longrightarrow \quad \lambda = \frac { 2 L } { m }
$$

Now for the resonant angular frequencies:
The angular frequency $\omega$ of light in vacuum is related to its wavelength by

$$
\omega = \frac { 2 \pi c } { \lambda } ,
$$

where $c$ is the speed of light in vacuum. Substituting $\lambda _ { m }$ into this relation gives

$$
\omega _ { m } = \frac { 2 \pi c } { \lambda _ { m } } = \frac { 2 \pi c } { 2 L / m } = \frac { m \pi c } { L } .
$$

The spacing between adjacent modes, e.g. for mode $m$ and $m + 1$, is

$$
\Delta \omega = \omega _ { m + 1 } - \omega _ { m } = \frac { ( m + 1 ) \pi c } { L } - \frac { m \pi c } { L } = \frac { \pi c } { L }
$$

b. The electric field at the antinodes of the standing waves in the resonator is a superposition of oscillations at the resonant angular frequencies and is given by:
$$
E _ { \text {before } } ( t ) = \sum _ { k = - \infty } ^ { + \infty } E _ { k } \cos [ ( k \Delta \omega ) t ] .
$$

Now suppose we introduce a gain medium (such as a doped crystal) into the laser cavity. The gain medium completely absorbs incoming light and re-emits it over a finite range of $N$ angular frequencies centered around some angular frequency $\omega _ { 0 }$, which coincides with one of the $\omega _ { m }$ values determined above. Within this bandwidth, the gain medium amplifies and supports oscillations at all $\omega _ { m }$ that fall within the range. (Assume $N$ is an odd number.)

Assume that each of these $N$ angular frequencies-also referred to as modes-has the same amplitude $E _ { 0 }$, and that their phases are locked such that there is zero relative phase between them at $t = 0$. This condition is known as mode locking. Set their common phase so that all electric fields are expressed as cosine functions, consistent with the form of $E _ { \text {before } } ( t )$.

i. Write an expression for the total electric field $E _ { \text {after } } ( t )$ as the sum of these $N$ equally spaced angular frequencies (with zero relative phase).

## Solution

We assume $N$ frequencies equally spaced by $\Delta \omega$ around a central frequency $\omega _ { 0 }$, all having amplitude $E _ { 0 }$ and zero phase difference. One convenient way to index these frequencies is by letting $k$ run symmetrically about 0 :

$$
\omega _ { k } = \omega _ { 0 } + k \Delta \omega , \quad k = - \frac { N - 1 } { 2 } , - \frac { N - 3 } { 2 } , \ldots , \frac { N - 3 } { 2 } , \frac { N - 1 } { 2 } .
$$

(If $N$ is even, a similar indexing can be used, but the main idea remains the same.) Because all modes are in phase (zero relative phase), a real representation can be written by summing cosines:

$$
E _ { \mathrm { after } } ( t ) = E _ { 0 } \sum _ { k = - \frac { N - 1 } { 2 } } ^ { + \frac { N - 1 } { 2 } } \cos \left[ \left( \omega _ { 0 } + k \Delta \omega \right) t \right]
$$

ii. Show that in the limit of many angular frequencies $\left( \Delta \omega \ll \omega _ { 0 } , N \gg 1 \right)$, the time-dependent electric field approximately takes the following form:
$$
E _ { \mathrm { after } } ( t ) \approx E _ { 0 } f \left( \omega _ { 0 } , t \right) \frac { \sin \left( \frac { N ( \Delta \omega ) t } { 2 } \right) } { \sin \left( \frac { ( \Delta \omega ) t } { 2 } \right) }
$$
and determine the function $f \left( \omega _ { 0 } , t \right)$.

## Solution

$$
E _ { \mathrm { after } } ( t ) = E _ { 0 } \sum _ { k = - \frac { N - 1 } { 2 } } ^ { + \frac { N - 1 } { 2 } } \cos \left[ \left( \omega _ { 0 } + k \Delta \omega \right) t \right] = E _ { 0 } \sum _ { k = 0 } ^ { N } \cos \left[ \left( \omega _ { 0 } - \frac { N - 1 } { 2 } \Delta \omega + k \Delta \omega \right) t \right] =
$$


$$
\begin{gathered}
E _ { 0 } \cos \left( \omega _ { 0 } t + \frac { 1 } { 2 } \Delta \omega t \right) \frac { \sin \left( \frac { ( N + 1 ) \Delta \omega t } { 2 } \right) } { \sin \left( \frac { \Delta \omega t } { 2 } \right) } \approx E _ { 0 } \cos \left( \omega _ { 0 } t \right) \frac { \sin \left( \frac { N ( \Delta \omega ) t } { 2 } \right) } { \sin \left( \frac { ( \Delta \omega ) t } { 2 } \right) } \\
f \left( \omega _ { 0 } , t \right) = \cos \left( \omega _ { 0 } t \right)
\end{gathered}
$$

c. To answer the next part of the problem, assume $N$ is odd and find the following limit when $a = \pi m$, where $m$ is an integer:
$$
\lim _ { x \rightarrow a } \frac { \sin ( N x ) } { \sin x }
$$

## Solution

For indicated values of $a$, both numerator and denominator are approaching to 0 . Using L'Hôpital's rule, we get

$$
\lim _ { x \rightarrow \pi m } \frac { \sin ( N x ) } { \sin x } = \lim _ { x \rightarrow \pi m } \frac { N \cos ( N x ) } { \cos x } = \frac { N \cos ( \pi N m ) } { \cos ( \pi m ) } = N .
$$

The answer is positive, because for odd values of $N , N m$ and $m$ are both odd or both even.

d. Mode locking can dramatically increase the peak intensity $I$ of the laser output. Use the expression $I = \gamma E ^ { 2 }$, where $\gamma$ is a known constant, to answer the following questions.
    i. Determine to the total instantaneous intensity $I _ { \text {after } } ( t )$ of the electric field.

## Solution

$$
E _ { \mathrm { after } } ( t ) = E _ { 0 } \cos \left( \omega _ { 0 } t \right) \frac { \sin \left( \frac { N ( \Delta \omega ) t } { 2 } \right) } { \sin \left( \frac { ( \Delta \omega ) t } { 2 } \right) }
$$

Total instantaneous intensity $I _ { \text {after } } ( t )$ : we're given

$$
I _ { \mathrm { after } } ( t ) = \gamma \left[ E _ { \mathrm { after } } ( t ) \right] ^ { 2 } ,
$$

Substituting $E _ { \text {after } } ( t )$ gives

$$
I _ { \mathrm { after } } ( t ) = \gamma \left[ E _ { 0 } \cos \left( \omega _ { 0 } t \right) \frac { \sin \left( \frac { N ( \Delta \omega ) t } { 2 } \right) } { \sin \left( \frac { ( \Delta \omega ) t } { 2 } \right) } \right] ^ { 2 }
$$


ii. What is the maximum possible intensity of the total field, and at what time(s) is this achieved?


## Solution

All $N$ modes add constructively when their phases align. In the ideal phase-locked case, there is a moment in time (and corresponding phase) at which every mode's cosine term is at its maximum (i.e. $\cos \left( \omega _ { m } t \right) = 1$ for each $m$ ). At that instant, the field amplitudes sum linearly:

$$
E _ { \mathrm { total } } = \sum _ { m = 1 } ^ { N } E _ { 0 } = N E _ { 0 } .
$$

Since $I _ { \text {total } } ( t ) \propto \left[ E _ { \text {after } } ( t ) \right] ^ { 2 }$, the maximum intensity occurs when $\left| E _ { \text {after } } \right|$ is largest, i.e. $E _ { \text {after } } = N E _ { 0 }$. Consequently,

$$
I _ { \max } = \gamma \left( N E _ { 0 } \right) ^ { 2 } .
$$

This perfect alignment occurs when

$$
\omega _ { 0 } t + k \Delta \omega t \approx 2 \pi \times ( \text { integer } )
$$

for each $k$ in the range $- \frac { N - 1 } { 2 } \ldots \frac { N - 1 } { 2 }$, which means $( \Delta \omega ) t = 2 \pi m$ for some integer $m$.
You can also obtain this result by looking at the $\sin ( N a ) / \sin ( a )$ term in the expression for the total field: the alignment occurs at zeros of the denominator, i.e. $\frac { ( \Delta \omega ) t } { 2 } = \pi \cdot m$, i.e.

$$
t = \frac { 2 \pi m } { \Delta \omega } .
$$

In theory, we should be worried about the value of the cosine term at that time; however, the constraint that $\omega _ { 0 }$ as well as $\omega _ { 0 } + k ( \Delta \omega )$ are all modes of the resonator ensures that $\left| \cos \left( \omega _ { 0 } t \right) \right| = 1$ at those times.

e. The uncertainty principle states $\Delta x \Delta p \geq \frac { \hbar } { 2 }$. In optics, we are more commonly interested in the duration of the pulse rather than its spatial extent; the two are related via $\Delta x = c \Delta t$.Consider the problem of setting up a very short laser pulse. Use the uncertainty principle to estimate the required bandwidth (range of frequencies). Compare that to the relationship between pulse duration and gain bandwidth that we're achieving in this problem.

## Solution

From uncertainty principle: since $p = \frac { \hbar \omega } { c }$, the uncertainty principle can be stated as $\Delta t \Delta \omega \geq 1$, or "bandwidth $\geq 1 / ($ pulse duration $)$ ".
In our set-up, the bandwidth is $N \Delta \omega$ (not just $\Delta \omega !$ ), but we need to estimate the pulse duration. This is the time scale over which the intensity falls to a constant fraction of its original value. The intensity is dominated by the term $\frac { \sin ( N ( \Delta \omega ) t / 2 ) } { \sin ( ( \Delta \omega ) t / 2 ) }$. If we Taylor-expand this around $t = 0$, we write

$$
\frac { ( N ( \Delta \omega ) t / 2 ) - \frac { 1 } { 3 } ( N ( \Delta \omega ) t / 2 ) ^ { 3 } } { ( ( \Delta \omega ) t / 2 ) - \frac { 1 } { 3 } ( ( \Delta \omega ) t / 2 ) ^ { 3 } } .
$$


Cancelling out the linear term, we get

$$
N \left( 1 - \frac { 1 } { 3 } N ^ { 2 } ( ( \Delta \omega ) t / 2 ) ^ { 2 } \right) \left( 1 + \frac { 1 } { 3 } ( ( \Delta \omega ) t / 2 ) ^ { 2 } \right) = N \left( 1 - \frac { 1 } { 3 } \left( N ^ { 2 } - 1 \right) ( ( \Delta \omega ) t / 2 ) ^ { 2 } \right)
$$

This will become small when $\left( N ^ { 2 } - 1 \right) \left( \frac { ( \Delta \omega ) t } { 2 } \right) ^ { 2 } \sim 1$, or $t \sim \frac { 1 } { N ( \Delta \omega ) }$, so the relationship is exactly as in the uncertainty principle.
