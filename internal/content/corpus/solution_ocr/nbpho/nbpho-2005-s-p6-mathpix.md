---
id: solution-ocr-nbpho-2005-s-p6
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2005_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2005-mechano-electrical-oscillator]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 6. Mechano-electrical oscillator

1) From the Newton's second law, $m \ddot { x } = - k x$, hence $\ddot { x } = - \frac { k } { m } x$, hence $\omega = \sqrt { k / m }$.
2) From the Gauss' law, the charge on the plate $Q = S \varepsilon _ { 0 } E =$ $S \varepsilon _ { 0 } U / X _ { 1 }$. The force acting on it $F _ { e } = k \left( X _ { 0 } - X _ { 1 } \right) = Q \langle E \rangle$, where $\langle E \rangle$ is the average electric field (averaged over the charges). Let us look at the charge layer (at the surface of the plate) with a high magnification: the electric field there depends linearly on the net charge inwards (in the plate) from the current point. Therefore, the average field is just the arithmetic average of the fields on both sides of the layer: $\langle E \rangle = E / 2$. Finally, $F _ { e } = k \left( X _ { 0 } - X _ { 1 } \right) = Q E / 2$ (this result could have been obtained from energetic considerations, using infinitesimal virtual displacement of the plate and the energy conservation law). So, $F _ { e } = \frac { S } { 2 } \varepsilon _ { 0 } \left( U / X _ { 1 } \right) ^ { 2 }$, hence $U = X _ { 1 } \sqrt { 2 k \left( X _ { 0 } - X _ { 1 } \right) / S \varepsilon _ { 0 } }$.
3) If the plates move by $x$, the change of the force due to electric field is $\delta F _ { e } = x \left| \frac { d } { d X _ { 1 } } \frac { S } { 2 } \varepsilon _ { 0 } \left( U / X _ { 1 } \right) ^ { 2 } \right| = \frac { x } { X _ { 1 } } S \varepsilon _ { 0 } \left( U / X _ { 1 } \right) ^ { 2 }$; bearing in mind that $\frac { S } { 2 } \varepsilon _ { 0 } \left( U / X _ { 1 } \right) ^ { 2 } = k \left( X _ { 0 } - X _ { 1 } \right)$, we obtain $\delta F _ { e } = 2 \frac { x } { X _ { 1 } } k \left( X _ { 0 } - X _ { 1 } \right)$. There is also force cahnge due to elasticity: $\delta F _ { k } = - k x$; the two forces have opposite sign (while approaching the discs, $\delta F _ { k }$ tries to push back, and $\delta F _ { e }$ tries to pull disks even closer). So, $\delta F = - k x \left[ 1 - 2 \left( \frac { X _ { 0 } } { X _ { 1 } } - \right. \right.$ $1 ) ] = - k x \left( 3 - 2 \frac { X _ { 0 } } { X _ { 1 } } \right)$. Finally, $\ddot { x } = \delta F / m = - x \frac { k } { m } \left( 3 - 2 \frac { X _ { 0 } } { X _ { 1 } } \right)$, and $\omega = \sqrt { \frac { k } { m } \left( 3 - 2 \frac { X _ { 0 } } { X _ { 1 } } \right) }$
4) Now we have two oscillating variables, $x$ and $q$. First, we write down the equation due to Kirchoff's laws: $L \ddot { q } = - \frac { q } { C } - x Q \frac { d } { d X _ { 1 } } C ^ { - 1 }$. Here, the second term describes the voltage change on the capacitor due to the change of the capacitance (we approximate the real change by differential, valid for small shifts $x$ ). Note that $C ^ { - 1 } = X _ { 1 } / S \varepsilon _ { 0 }$ and

$$
\begin{aligned}
& Q = S \varepsilon _ { 0 } U / X _ { 1 } ; \text { hence } \frac { d } { d X _ { 1 } } C ^ { - 1 } = 1 / S \varepsilon _ { 0 } , \text { and } \\
& L \ddot { q } = - \frac { q } { C } - U \frac { x } { X _ { 1 } } .
\end{aligned}
$$

Here, the sign of the second term assumes that the $x$-axes is directed upwards (there is no current in the inductance and $L \ddot { q } = 0$, if the voltage on the capacitor keeps constant; for increasing charge $q > 0$, this assumes increasing capacitance, i.e. $x < 0$; in a full agreement with the signs of the above expression).

The second equation describes the Newton second law. First we note that the expression for $F _ { e }$ can be rewritten as $F _ { e } = Q ^ { 2 } / 2 S \varepsilon _ { 0 }$. So, if the charge on the plate does not change $( q = 0 )$, neither does change $F _ { e }$. So, $\delta F _ { e } = q \frac { d } { d Q } Q ^ { 2 } / 2 S \varepsilon _ { 0 } = q Q / S \varepsilon _ { 0 }$. The infinitesimal force changes ( $\delta F _ { k }$ and $\delta F _ { e }$ ) can be simply added:

$$
m \ddot { x } = - k x - q Q / S \varepsilon _ { 0 } .
$$

Now, let us look for a sinusoidal solution of circular frequency $\omega$. Then, $\ddot { x } = - \omega ^ { 2 } x$ and $\ddot { q } = - \omega ^ { 2 } q$. Substituting this into the two above obtained equations, we find

$$
\left\{ \begin{array} { l }
\left( L \omega ^ { 2 } - C ^ { - 1 } \right) q = x U / X _ { 1 } \\
\left( \omega ^ { 2 } m - k \right) x = q Q / S \varepsilon _ { 0 }
\end{array} . \right.
$$

This has a non-zero solution for $x$ and $q$ only if

$$
\left( L \omega ^ { 2 } - C ^ { - 1 } \right) \left( \omega ^ { 2 } m - k \right) = U Q / X _ { 1 } S \varepsilon _ { 0 } .
$$

Bearing in mind that $U Q / X _ { 1 } = 2 k \left( X _ { 0 } - X _ { 1 } \right)$ and $C = \varepsilon _ { 0 } S / X _ { 1 }$, we can rewrite the equation as

$$
\left( \varepsilon _ { 0 } S L \omega ^ { 2 } - X _ { 1 } \right) \left( \omega ^ { 2 } m - k \right) = 2 k \left( X _ { 0 } - X _ { 1 } \right) .
$$

Introducing $\omega _ { 0 } ^ { 2 } = k / m$ and $\omega _ { 1 } ^ { 2 } = X _ { 1 } / \varepsilon _ { 0 } S L$ we can further rewrite as

$$
\omega ^ { 4 } - \omega ^ { 2 } \left( \omega _ { 1 } ^ { 2 } + \omega _ { 0 } ^ { 2 } \right) + \omega _ { 0 } ^ { 2 } \omega _ { 1 } ^ { 2 } \left( 3 - 2 \frac { X _ { 0 } } { X _ { 1 } } \right) = 0 .
$$

Therefore,

$$
2 \omega ^ { 2 } = \omega _ { 1 } ^ { 2 } + \omega _ { 0 } ^ { 2 } \pm \sqrt { \omega _ { 1 } ^ { 4 } + \omega _ { 0 } ^ { 4 } + 2 \omega _ { 1 } ^ { 2 } \omega _ { 0 } ^ { 2 } \left( X _ { 0 } X _ { 1 } ^ { - 1 } - 5 \right) } ,
$$

i.e. this system has two eigenfrequencies, if $\frac { X _ { 0 } } { X _ { 1 } } < \frac { 3 } { 2 }$ (and becomes unstable, otherwise).
