---
id: solution-ocr-kevin-zhou-p1sol-ex009
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-ex009]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 9
How does the maximum jump height of an animal depend on its length scale $L$ ? How about the gravitational acceleration $g$ ?

Solution
The maximum jump height $h$ satisfies $E = m g h$ where $E$ is the energy supplied by the muscles. But both the total mass $m$ and the animal's muscle mass (which determines $E$ ) scale as $L ^ { 3 }$, so we have $h \propto L ^ { 0 }$. So the jump height doesn't scale with size: a dinosaur can't jump much higher than a human - and indeed, we can't jump much higher than fleas can!

The other half of the problem seems very simple: we must have $h \propto 1 / g$ because neither $E$ or $m$ depend on $g$. But this is completely wrong! In gravity $10 g$, a person wouldn't be able to jump at all; they'd be so crushed by their own weight that they wouldn't even be able to stand. Mathematically, the dimensional analysis argument fails here because the answer depends on the detailed biomechanics of muscle and bone, which involve many more dimensionful quantities. By contrast, the result $h \propto L ^ { 0 }$ works well because the animals we were comparing all evolved so that their muscles would work reasonably well in Earth's gravity, releasing a decent fraction of their stored energy in the short time required for a jump. So, as remarked above, you can't solve every problem by just listing a few quantities and doing dimensional analysis - you really have to understand the system each time.


## 2 Approximations

Idea 4: Taylor Series
For small $x$, a function $f ( x )$ may be approximated as

$$
f ( x ) = f ( 0 ) + x f ^ { \prime } ( 0 ) + \frac { x ^ { 2 } } { 2 } f ^ { \prime \prime } ( 0 ) + \ldots + \frac { x ^ { n } } { n ! } f ^ { ( n ) } ( 0 ) + \mathcal { O } \left( x ^ { n + 1 } \right)
$$

where we will write $\mathcal { O } \left( x ^ { n } \right)$ for an error term that shrinks as $x \rightarrow 0$ at least as fast as $x ^ { n }$. (This will be convenient, though it's the opposite of the usage in computer science, where "big- $O$ " notation denotes how fast terms can grow as $x \rightarrow \infty$.)

There are a few Taylor series that are essential to know. The most important are

$$
\exp ( x ) = 1 + x + \frac { x ^ { 2 } } { 2 } + \frac { x ^ { 3 } } { 6 } + \mathcal { O } \left( x ^ { 4 } \right) , \quad \log ( 1 + x ) = x - \frac { x ^ { 2 } } { 2 } + \frac { x ^ { 3 } } { 3 } - \mathcal { O } \left( x ^ { 4 } \right)
$$

and the small angle approximations

$$
\sin x = x - \frac { x ^ { 3 } } { 6 } + \mathcal { O } \left( x ^ { 5 } \right) , \quad \cos x = 1 - \frac { x ^ { 2 } } { 2 } + \mathcal { O } \left( x ^ { 4 } \right) .
$$

Another Taylor series you learned long before calculus class is

$$
\frac { 1 } { 1 - x } = 1 + x + x ^ { 2 } + x ^ { 3 } + \mathcal { O } \left( x ^ { 4 } \right) .
$$

Usually you'll only need the first one or two terms, but for practice we'll do examples with more. If any of these results aren't familiar, you should rederive them!

Example 10
Find the Taylor series for $\tan x$ up to, and including the fourth order term.

Solution
By the fourth order term, we mean the term proportional to $x ^ { 4 }$. (Not the fourth nonzero term, which would be $\mathcal { O } \left( x ^ { 7 } \right)$.) Of course, $\tan x$ is an odd function, so the $\mathcal { O } \left( x ^ { 4 } \right)$ term is zero, which means we only need to expand up to $\mathcal { O } \left( x ^ { 3 } \right)$. That means we can neglect $\mathcal { O } \left( x ^ { 4 } \right)$ terms and higher everywhere in the computation, subject to some caveats we'll point out later.

By definition, we have

$$
\tan x = \frac { \sin x } { \cos x } = \frac { x - x ^ { 3 } / 6 + \mathcal { O } \left( x ^ { 5 } \right) } { 1 - x ^ { 2 } / 2 + \mathcal { O } \left( x ^ { 4 } \right) } .
$$

However, it's a little tricky because we have a Taylor series in a denominator. There are two ways to deal with this. We could multiply both sides by $\cos x$, and expand $\tan x$ in a Taylor series with unknown coefficients. Then we would get a system of equations that will allow us to solve for the coefficients recursively, a technique known as "reversion of series".


A faster method is to use the Taylor series for $1 / ( 1 - x )$. We have

$$
\frac { 1 } { 1 - u } = 1 + u + \mathcal { O } \left( u ^ { 2 } \right)
$$

and substituting $u = x ^ { 2 } / 2 - \mathcal { O } \left( x ^ { 4 } \right)$ gives

$$
\frac { 1 } { \cos x } = 1 + \frac { x ^ { 2 } } { 2 } + \mathcal { O } \left( x ^ { 4 } \right) .
$$

Therefore, we conclude

$$
\tan x = \left( x - x ^ { 3 } / 6 + \mathcal { O } \left( x ^ { 5 } \right) \right) \left( 1 + x ^ { 2 } / 2 + \mathcal { O } \left( x ^ { 4 } \right) \right) = x + x ^ { 3 } / 3 + \mathcal { O } \left( x ^ { 5 } \right) .
$$

Here I was fairly careful with writing out all the error terms and intermediate steps, but as you get better at this process, you'll be able to do it faster. (Of course, one could also have done this example by just directly computing the Taylor series of $\tan x$ from its derivatives. This is possible, but for more complicated situations it's generally not a good idea, because computing high derivatives of a complex expression tends to get very messy. It's better to just Taylor expand the individual pieces and combine the results, as we did here.)

## Remark

Finding series up to a given order can be subtle. For example, if you want to compute an $\mathcal { O } \left( x ^ { 4 } \right)$ term, it is not always enough to expand everything up to $\mathcal { O } \left( x ^ { 4 } \right)$, because powers of $x$ might cancel. To illustrate this, the last step here is wrong:

$$
\tan x = \frac { x ^ { 3 } \sin x } { x ^ { 3 } \cos x } = \frac { x ^ { 4 } + \mathcal { O } \left( x ^ { 6 } \right) } { x ^ { 3 } + \mathcal { O } \left( x ^ { 5 } \right) } \neq x + \mathcal { O } \left( x ^ { 5 } \right) .
$$

[2] Problem 13. Find the Taylor series for $1 / \cos x$ up to and including the fourth order $\left( \mathcal { O } \left( x ^ { 4 } \right) \right)$ term.
Solution. The derivatives of $\cos ( x )$ at $x = 0$ are 0, -1, 0, 1, so

$$
\cos x = 1 - \frac { x ^ { 2 } } { 2 } + \frac { x ^ { 4 } } { 4 ! } + \mathcal { O } \left( x ^ { 6 } \right) .
$$

To expand the inverse, note that

$$
\frac { 1 } { 1 - u } = 1 + u + u ^ { 2 } + \mathcal { O } \left( u ^ { 3 } \right)
$$

where in our case, $u = x ^ { 2 } / 2 - x ^ { 4 } / 24$. Plugging this in gives

$$
\frac { 1 } { \cos x } = 1 + \left( x ^ { 2 } / 2 - x ^ { 4 } / 24 \right) + \left( x ^ { 2 } / 2 - x ^ { 4 } / 24 \right) ^ { 2 } + \mathcal { O } \left( x ^ { 6 } \right) = 1 + \frac { x ^ { 2 } } { 2 } + \frac { 5 x ^ { 4 } } { 24 } + \mathcal { O } \left( x ^ { 6 } \right) .
$$

[2] Problem 14. Extend the computation above to get the $x ^ { 5 }$ term in the Taylor series for $\tan x$.
Solution. From this point on we will start omitting the explicit $\mathcal { O } \left( x ^ { n } \right)$ error terms. We have

$$
\left( x - x ^ { 3 } / 6 + x ^ { 5 } / 120 \right) \left( 1 + x ^ { 2 } / 2 + 5 x ^ { 4 } / 24 \right) = x + x ^ { 3 } / 2 + 5 x ^ { 5 } / 24 - x ^ { 3 } / 6 - x ^ { 5 } / 12 + x ^ { 5 } / 120
$$

giving the answer,

$$
\tan ( x ) = x + \frac { x ^ { 3 } } { 3 } + \frac { 2 x ^ { 5 } } { 15 } .
$$
