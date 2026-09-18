---
id: solution-ocr-kevin-zhou-m8sol-p025
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M8Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m8-p025]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 25. In P1, you found a general expression for the period of a pendulum oscillating with amplitude $\theta _ { 0 }$ in terms of an integral, then approximated the integral for $\theta _ { 0 } \ll 1$ to find
$$
\omega = \omega _ { 0 } \left( 1 - \frac { \theta _ { 0 } ^ { 2 } } { 16 } + \mathcal { O } \left( \theta _ { 0 } ^ { 4 } \right) \right)
$$
where $\omega _ { 0 } = \sqrt { g / L }$. In this problem, we will show a different way to get the same answer, by solving the equation of motion approximately. We write the solution $\theta ( t )$ as a series in $\theta _ { 0 }$. The overall solution is of order $\theta _ { 0 }$, and the corrections only depend on $\theta _ { 0 } ^ { 2 }$, so we can write
$$
\theta ( t ) = \theta _ { 0 } f _ { 0 } ( t ) + \theta _ { 0 } ^ { 3 } f _ { 1 } ( t ) + \theta _ { 0 } ^ { 5 } f _ { 2 } ( t ) + \ldots
$$
where all the functions $f _ { i } ( t )$ are of order 1. Then we plug this expansion into Newton's second law, $\ddot { \theta } + \omega _ { 0 } ^ { 2 } \sin \theta = 0$, and expand it out order by order in $\theta _ { 0 }$.
    (a) A naive first guess is to set $f _ { 0 } ( t )$ so that it cancels precisely the order $\theta _ { 0 }$ terms in this equation, then set $f _ { 1 } ( t )$ to cancel the order $\theta _ { 0 } ^ { 3 }$ terms, and so on. Using this guess, show that
$$
\ddot { f } _ { 0 } + \omega _ { 0 } ^ { 2 } f _ { 0 } = 0 , \quad \ddot { f } _ { 1 } + \omega _ { 0 } ^ { 2 } f _ { 1 } = \frac { \omega _ { 0 } ^ { 2 } f _ { 0 } ^ { 3 } } { 6 }
$$
where the first equation has solution $f _ { 0 } ( t ) = \cos \left( \omega _ { 0 } t \right)$.

Unfortunately, this decomposition is not very useful. The problem is that two things are going on at once: the oscillations are not quite sinusoidal, and they have an angular frequency lower than $\omega _ { 0 }$. The expansion we've done would be useful if we only had the first effect, because then $f _ { 1 } ( t )$ would just capture the small, non-sinusoidal corrections to $f _ { 0 } ( t )$. But our method can't account for the frequency shift; by construction, $f _ { 0 } ( t )$ always oscillates at angular frequency $\omega _ { 0 }$. Over time, the real oscillation $\theta ( t )$ gets out of phase with $f _ { 0 } ( t )$. This manifests itself as a "secular growth" in $f _ { 1 } ( t )$, i.e. it increases in magnitude every cycle until it has a huge value, of order $1 / \theta _ { 0 } ^ { 2 }$, and our perturbative expansion breaks down.


(b) Write the right-hand side of the differential equation for $f _ { 1 } ( t )$ as a sum of sinusoids, and show that it contains a term proportional to $\cos \left( \omega _ { 0 } t \right)$. This resonantly drives $f _ { 1 } ( t )$, causing the secular growth.
(c) We can salvage our perturbative expansion using the method of "renormalized" frequencies. We impose by fiat that $f _ { 0 } ( t )$ oscillates at the true angular frequency, letting
$$
\ddot { f } _ { 0 } + \omega ^ { 2 } f _ { 0 } = 0 , \quad \omega = \omega _ { 0 } \left( 1 - c \theta _ { 0 } ^ { 2 } + \mathcal { O } \left( \theta _ { 0 } ^ { 4 } \right) \right)
$$
for a constant $c$. Because of this choice, the differential equation for $f _ { 1 } ( t )$, which contains all terms at order $\theta _ { 0 } ^ { 3 }$, will be altered. The correct choice of $\omega$ is precisely the one for which this eliminates the secular growth of $f _ { 1 } ( t )$. Using this idea, show that $c = 1 / 16$.

If you keep going, you'll find the next term $f _ { 2 } ( t )$ still has secular growth. We can remove it by having both $f _ { 0 } ( t )$ and $f _ { 1 } ( t )$ oscillate at angular frequency $\omega _ { 0 } \left( 1 - \theta _ { 0 } ^ { 2 } / 16 + c ^ { \prime } \theta _ { 0 } ^ { 4 } \right)$, where $c ^ { \prime }$ is chosen to cancel the secular growth of $f _ { 2 } ( t )$. In this way, the frequency can be found to any order in $\theta _ { 0 } ^ { 2 }$. (This technique is called the method of strained coordinates. It's an example of multiple-scale analysis.)

Solution. (a) Plugging everything in and using $\sin \theta = \theta - \theta ^ { 3 } / 6 + \mathcal { O } \left( \theta ^ { 5 } \right)$, we have

$$
\theta _ { 0 } \ddot { f } _ { 0 } + \theta _ { 0 } ^ { 3 } \ddot { f } _ { 1 } + \omega _ { 0 } ^ { 2 } \left( \theta _ { 0 } f _ { 0 } + \theta _ { 0 } ^ { 3 } f _ { 1 } - \frac { 1 } { 6 } \theta _ { 0 } ^ { 3 } f _ { 0 } ^ { 3 } + \mathcal { O } \left( \theta _ { 0 } ^ { 5 } \right) \right) = 0 .
$$

Collecting the order $\theta _ { 0 }$ and $\theta _ { 0 } ^ { 3 }$ terms gives the desired result.

(b) The easiest way to do this is to use the definition of $\cos \left( \omega _ { 0 } t \right)$ in terms of complex exponentials,
$$
\cos ^ { 3 } \left( \omega _ { 0 } t \right) = \left( \frac { e ^ { i \omega _ { 0 } t } + e ^ { - i \omega _ { 0 } t } } { 2 } \right) ^ { 3 } = \frac { e ^ { 3 i \omega _ { 0 } t } + 3 e ^ { i \omega _ { 0 } t } + 3 e ^ { - i \omega _ { 0 } t } + e ^ { - 3 i \omega _ { 0 } t } } { 8 } = \frac { 1 } { 4 } \cos \left( 3 \omega _ { 0 } t \right) + \frac { 3 } { 4 } \cos \left( \omega _ { 0 } t \right) .
$$
Another way is to remember the cosine triple angle identity, but who knows that?
(c) Adjusting $\omega _ { 0 }$ to the renormalized angular frequency for $f _ { 0 }$ moves terms between the two differential equations, so that now we have
$$
\ddot { f } _ { 0 } + \omega ^ { 2 } f _ { 0 } = 0 , \quad \ddot { f } _ { 1 } + \omega _ { 0 } ^ { 2 } f _ { 1 } = \omega _ { 0 } ^ { 2 } \left( \frac { f _ { 0 } ^ { 3 } } { 6 } - 2 c f _ { 0 } + \mathcal { O } \left( \theta _ { 0 } ^ { 2 } \right) \right) .
$$
The part of the right-hand side that oscillates at angular frequency $\omega _ { 0 }$ is
$$
\omega _ { 0 } ^ { 2 } \left( \frac { 1 } { 6 } \frac { 3 } { 4 } \cos \left( \omega _ { 0 } t \right) - 2 c \cos \left( \omega _ { 0 } t \right) \right)
$$
from which we conclude $c = 1 / 16$.
