---
id: eupho-2017-T1
problem: eupho-2017-T1
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2017
verification_status: unverified
figure_files: [eupho-2017-T1-sol-1.png]
---

## Solution

### Part A

It is evident from the figure that the curvature of the rope in the fundamental vibration is very small. It infers for a possibility to model the fundamental vibration as a swinging of a rigid uniform rod of length $L$ about a pivot point at its end. The moment of inertia of the rod is:

$$I = mL^2/3$$

and the distance from the center-of-mass to the pivot point is:

$$b = L/2$$

Therefore, the frequency of the fundamental vibration is approximated as:

$$f_1 = \frac{1}{2\pi}\sqrt{mgb/I} = \frac{1}{2\pi}\sqrt{3g/2L} \approx 0.61\ \text{Hz}$$

Correspondingly, the period of the fundamental vibration is:

$$T_1 = 2\pi\sqrt{I/mgb} = 2\pi\sqrt{2L/3g} \approx 1.6\ \text{s}$$

### Part B

Whatever model for estimating $f_1$ is being used, one may deduce on the basis of dimensionality arguments that the $k$-th natural frequency of the rope is:

$$f_k = c_k\sqrt{g/L}$$

where $c_k$ is a dimensionless numeric coefficient depending on the consecutive mode number $k$ only. Let $A$ and $B$ be the suspension point and the free end of the rope respectively, and $N$ be the node on the rope for the second natural vibration (see figure).

![Figure: Rope vibration shapes with nodes A, B, N, N₁, N₂ labelled](../../sources/eupho/figures/eupho-2017-T1-sol-1.png)

Since the node point is at rest (in the small-amplitude approximation), the vibration of the part $NB$ could be considered as a fundamental vibration of a rope of length $LNA$ about a suspension point $N$. Therefore:

$$f_2(L) \equiv f_1(L - NA)$$

Hence one may write:

$$\frac{f_2(L)}{f_1(L)} = \frac{f_1(L - NA)}{f_1(L)} = \sqrt{\frac{L}{L - NA}}$$

Since the absolute displacement is much smaller than the length of the rope, the distances could be measured in a vertical direction, to the ceiling, instead along the rope. Therefore, by taking $L = 1\ \text{m}$, and $NA \approx 0.8\ \text{m}$, we obtain:

$$\frac{f_2}{f_1} \approx 2.2$$

Similarly, the vibration of the part $N_1B$ in the third eigenmode is equivalent to the second natural vibration of a rope of length $L - N_1A \approx 0.4\ \text{m}$. In analogy to the first case:

$$f_3(L) \equiv f_2(L - N_1A)$$

and

$$\frac{f_2(L)}{f_1(L)} = \frac{f_2(L - N_1A)}{f_2(L)} = \sqrt{\frac{L}{L - N_1A}} \approx 1.6$$

Therefore:

$$f_3/f_1 = f_2/f_1 \times f_3/f_2 \approx 3.5$$

Finally:

$$f_1 : f_2 : f_3 \approx 1 : 2.2 : 3.5$$
