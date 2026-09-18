---
id: solution-ocr-ipho-2024-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2024/T1_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2024-t1]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## A. Earth as a blackbody

A-1. All the energy emitted from the surface of the Sun, will reach a sphere of radius $d$, therefore:

$$
\begin{aligned}
& \sigma T _ { \mathrm { S } } ^ { 4 } \cdot \left( 4 \pi R _ { \mathrm { S } } ^ { 2 } \right) = \left( 4 \pi d ^ { 2 } \right) . S _ { 0 } \\
& S _ { 0 } = \sigma T _ { \mathrm { S } } ^ { 4 } \cdot \left( \frac { R _ { \mathrm { S } } } { d } \right) ^ { 2 } = 5.67 \times 10 ^ { - 8 } \frac { \mathrm {~W} } { \mathrm {~m} ^ { 2 } \mathrm {~K} ^ { 4 } } \times \left( 5.77 \times 10 ^ { 3 } \mathrm {~K} \right) ^ { 4 } \times \left( \frac { 6.96 \times 10 ^ { 8 } \mathrm {~m} } { 1.5 \times 10 ^ { 11 } \mathrm {~m} } \right) ^ { 2 } = 1.35 \times 10 ^ { 3 } \frac { \mathrm {~W} } { \mathrm {~m} ^ { 2 } } \\
& \begin{array} { l l }
\text { A-1 } ( 0.6 \mathrm { pt } ) & , \text { Numerical value of } S _ { 0 } = 1.35 \times 10 ^ { 3 } \mathrm {~W} / \mathrm { m } ^ { 2 }
\end{array} \\
& S _ { 0 } = \sigma T _ { \mathrm { S } } ^ { 4 } \cdot \left( \frac { R _ { \mathrm { S } } } { d } \right) ^ { 2 } \quad
\end{aligned}
$$

A-2. It is assumed that the Earth is in thermal equilibrium. Therefore, the energy it receives per unit time should be equal to the energy it radiates per unit time. The Earth's cross-section intercepting the solar radiation at this distance has an area of $\pi R _ { \mathrm { E } } ^ { 2 }$, but the Earth radiates heat from all points on its surface with an area of $4 \pi R _ { \mathrm { E } } ^ { 2 }$, so:
$$
\pi R _ { \mathrm { E } } ^ { 2 } \cdot S _ { 0 } = 4 \pi R _ { \mathrm { E } } ^ { 2 } \sigma T _ { \mathrm { E } } ^ { 4 } \rightarrow T _ { \mathrm { E } } = \left( \frac { S _ { 0 } } { 4 \sigma } \right) ^ { \frac { 1 } { 4 } } = 278 \mathrm {~K}
$$
A-2 (0.6 pt)
$$
T _ { \mathrm { E } } = \left( \frac { S _ { 0 } } { 4 \sigma } \right) ^ { \frac { 1 } { 4 } } = \sqrt { \frac { R _ { \mathrm { S } } } { 2 d } } T _ { \mathrm { S } } \quad , \text { Numerical value of } T _ { \mathrm { E } } = 278 \mathrm {~K}
$$
A-3. The radiation is maximum at the wavelength for which the derivative of $u$ with respect to $\lambda$ is zero:
$$
\begin{gathered}
\frac { d u } { d \lambda } = \frac { 2 \pi h c ^ { 2 } } { \lambda ^ { 6 } } \cdot \frac { 1 } { \exp \left( \frac { h c } { \lambda k _ { \mathrm { B } } T } \right) - 1 } \cdot \left[ - 5 + \frac { h c } { \lambda k _ { \mathrm { B } } T } \frac { \exp \left( \frac { h c } { \lambda k _ { \mathrm { B } } T } \right) } { \exp \left( \frac { h c } { \lambda k _ { \mathrm { B } } T } \right) - 1 } \right] \\
\left. \frac { d u } { d \lambda } \right| _ { \lambda = \lambda _ { \mathrm { m } } } = 0 \quad \Rightarrow \quad \frac { h c } { \lambda _ { \mathrm { m } } k _ { B } T } \frac { \exp \left( \frac { h c } { \lambda _ { \mathrm { m } } k _ { \mathrm { B } } T } \right) } { \exp \left( \frac { h c } { \lambda _ { \mathrm { m } } K _ { \mathrm { B } } T } \right) - 1 } = 5
\end{gathered}
$$
Defining $x _ { \mathrm { m } } \equiv \frac { h c } { \lambda _ { \mathrm { m } } k _ { \mathrm { B } } T }$ we obtain the following transcendental equation:
$$
5 \left( 1 - e ^ { - x _ { \mathrm { m } } } \right) - x _ { \mathrm { m } } = 0
$$

International Physics Olympiad
Isfahan Iran 2024
A-3 (0.4 pt)

$$
f ( x ) = 5 \left( 1 - e ^ { - x } \right) - x
$$

A-4. The first guess is $x _ { \mathrm { m } } ^ { ( 1 ) } = 5$. Substituting repeatedly for $x _ { \mathrm { m } }$ we can continue as follows:
$$
\begin{gathered}
x _ { \mathrm { m } } ^ { ( 2 ) } = 5 \left( 1 - e ^ { - 5 } \right) = 4.97 \\
x _ { \mathrm { m } } ^ { ( 3 ) } = 5 \left( 1 - e ^ { - 4.97 } \right) = 4.97
\end{gathered}
$$

Further iterations do not change the value of $x _ { \mathrm { m } }$ to three significant figures, so:

$$
\lambda _ { \mathrm { m } } T = \frac { h c } { x _ { \mathrm { m } } k _ { \mathrm { B } } } = b = 1240 \mathrm { eV } \cdot \mathrm {~nm} \times \frac { 1 } { 4.97 \times 8.62 \times 10 ^ { - 5 } \mathrm { eVK } ^ { - 1 } } = 2.89 \times 10 ^ { 6 } \mathrm {~nm} \cdot \mathrm {~K}
$$

A-4 (0.4 pt)

$$
x _ { \mathrm { m } } = \{ 4.96,4.97 \} \quad , \text { Numerical value of } b = [ 2.89,2.90 ] \times 10 ^ { 6 } \mathrm {~nm} \cdot \mathrm {~K}
$$

A-5. Using Wien's displacement law and the constant $b$ obtained in the previous part, we can calculate the wavelength at which the radiation from the Sun and the Earth reaches its maximum:
$$
\begin{gathered}
\lambda _ { \max } ^ { \operatorname { Sun } } = \frac { b } { T _ { \mathrm { S } } } = \frac { 2.89 \times 10 ^ { 6 } \mathrm {~nm} \cdot \mathrm {~K} } { 5.77 \times 10 ^ { 3 } \mathrm {~K} } = [ 5.01,5.02 ] \times 10 ^ { 2 } \mathrm {~nm} \\
\lambda _ { \max } ^ { \operatorname { Earth } } = \frac { b } { T _ { \mathrm { E } } } = \frac { 2.89 \times 10 ^ { 6 } \mathrm {~nm} \cdot \mathrm {~K} } { 278 \mathrm {~K} } = 1.04 \times 10 ^ { 4 } \mathrm {~nm}
\end{gathered}
$$
A-5 (0.2 pt)
$$
\lambda _ { \max } ^ { \operatorname { Sun } } = [ 5.01,5.02 ] \times 10 ^ { 2 } \mathrm {~nm} \quad , \lambda _ { \max } ^ { \operatorname { Earth } } = 1.04 \times 10 ^ { 4 } \mathrm {~nm}
$$
A-6. From the diagram, it can clearly be seen that $\gamma \tilde { u } _ { \mathrm { S } } \left( \lambda _ { \text {max } } ^ { \mathrm { S } } \right) = u \left( \lambda _ { \text {max } } ^ { \text {Earth } } , T _ { \mathrm { E } } \right)$, so we have:
$$
\begin{gathered}
\tilde { u } _ { \mathrm { S } } \left( \lambda _ { \max } ^ { \mathrm { Sun } } \right) = \left( \frac { R _ { \mathrm { S } } } { d } \right) ^ { 2 } \frac { 2 \pi h c ^ { 2 } } { \left( \lambda _ { \max } ^ { \mathrm { Sun } } \right) ^ { 5 } } \frac { 1 } { \exp \left( \frac { h c } { \lambda _ { \max } ^ { \mathrm { Sun } } k _ { \mathrm { B } } T _ { \mathrm { S } } } \right) - 1 } = \left( \frac { R _ { \mathrm { S } } } { d } \right) ^ { 2 } \frac { 2 \pi h c ^ { 2 } } { \left( \lambda _ { \max } ^ { \mathrm { Sun } } \right) ^ { 5 } } \frac { 1 } { \exp \left( \frac { h c } { k _ { \mathrm { B } } b } \right) - 1 } \\
u \left( \lambda _ { \max } ^ { \mathrm { Earth } } , T _ { \mathrm { E } } \right) = \frac { 2 \pi h c ^ { 2 } } { \left( \lambda _ { \max } ^ { \mathrm { Earth } } \right) ^ { 5 } } \frac { 1 } { \exp \left( \frac { h c } { \lambda _ { \max } ^ { \mathrm { Earth } } k _ { \mathrm { B } } T _ { \mathrm { E } } } \right) - 1 } = \frac { 2 \pi h c ^ { 2 } } { \left( \lambda _ { \max } ^ { \mathrm { Earth } } \right) ^ { 5 } } \frac { 1 } { \exp \left( \frac { h c } { k _ { \mathrm { B } } b } \right) - 1 }
\end{gathered}
$$
Dividing these two quantities we'll find:

$$
\gamma = \left( \frac { d } { R _ { \mathrm { S } } } \right) ^ { 2 } \times \left( \frac { T _ { \mathrm { E } } } { T _ { \mathrm { S } } } \right) ^ { 5 } = [ 1.20,1.21 ] \times 10 ^ { - 2 }
$$

A-6 (0.8 pt)

$$
\gamma = \left( \frac { d } { R _ { \mathrm { S } } } \right) ^ { 2 } \times \left( \frac { T _ { \mathrm { E } } } { T _ { \mathrm { S } } } \right) ^ { 5 } = \left( \frac { d } { R _ { \mathrm { S } } } \right) ^ { 2 } \times \left( \frac { \lambda _ { \max } ^ { \operatorname { Sun } } } { \lambda _ { \max } ^ { \operatorname { Earth } } } \right) ^ { 5 } \quad , \text { Numerical value of } \gamma = [ 1.20,1.21 ] \times 10 ^ { - 2 }
$$

## B. The Greenhouse Effect

B-1. Both the Earth and its atmosphere are in thermal equilibrium, so one can write an equation that balances the input and output powers. For the Earth we have:
$$
\left( \pi R _ { \mathrm { E } } ^ { 2 } \right) \left( 1 - r _ { \mathrm { A } } \right) S _ { 0 } + \left( 4 \pi R _ { \mathrm { E } } ^ { 2 } \right) \sigma T _ { \mathrm { A } } ^ { 4 } = \left( 4 \pi R _ { \mathrm { E } } ^ { 2 } \right) \sigma T _ { \mathrm { E } } ^ { 4 } ,
$$
and for the atmosphere:
$$
\left( 4 \pi R _ { \mathrm { E } } ^ { 2 } \right) \sigma T _ { \mathrm { E } } ^ { 4 } = 2 \left( 4 \pi R _ { \mathrm { E } } ^ { 2 } \right) \sigma T _ { \mathrm { A } } ^ { 4 } .
$$
Note that the coefficient 2 on the right-hand side of the equation is due to the atmosphere radiating heat on both sides (above and below). Eliminating $T _ { E }$ from the two relations we obtain:
$$
T _ { \mathrm { A } } = \left( \frac { \left( 1 - r _ { \mathrm { A } } \right) \frac { S _ { 0 } } { 4 } } { \sigma } \right) ^ { \frac { 1 } { 4 } } = 2.58 \times 10 ^ { 2 } \mathrm {~K} \quad \Rightarrow \quad T _ { \mathrm { E } } = \left( 2 T _ { \mathrm { A } } ^ { 4 } \right) ^ { \frac { 1 } { 4 } } = 3.07 \times 10 ^ { 2 } \mathrm {~K}
$$
B-1 (1.0 pt)
$$
\begin{array} { l l }
T _ { \mathrm { A } } = \left( \frac { \left( 1 - r _ { \mathrm { A } } \right) \frac { s _ { 0 } } { 4 } } { \sigma } \right) ^ { \frac { 1 } { 4 } } & , \text { Numerical value of } T _ { A } = 2.58 \times 10 ^ { 2 } \mathrm {~K} \\
T _ { \mathrm { E } } = \left( \frac { \left( 1 - r _ { \mathrm { A } } \right) \frac { s _ { 0 } } { 2 } } { \sigma } \right) ^ { \frac { 1 } { 4 } } & , \text { Numerical value of } T _ { \mathrm { E } } = 3.07 \times 10 ^ { 2 } \mathrm {~K}
\end{array}
$$
B-2. As can be seen in the figure, a fraction $\left( 1 - r _ { \mathrm { A } } \right)$ of the solar radiation reaches the Earth's surface after traversing the atmosphere. A fraction $r _ { \mathrm { E } }$ of this light is reflected back and reaches the atmosphere, where a fraction $r _ { \mathrm { A } }$ is reflected and returns to the Earth's surface. This process repeats ad infinitum and the sum of the powers transmitted at all these instances, determines the albedo. Denoting the power returned to space after $n$ reflections by $\tilde { S } _ { n }$, we'll have $\tilde { S } _ { 0 } = r _ { \mathrm { A } } S _ { 0 }$ and

the remaining power i.e. $\left( 1 - r _ { \mathrm { A } } \right) S _ { 0 }$, reaches the Earth's surface. From this power, $\left( 1 - r _ { \mathrm { A } } \right) r _ { \mathrm { E } } S _ { 0 }$ is reflected, and a fraction $1 - r _ { \mathrm { A } }$ of it is transmitted through the atmosphere to the space, hence:

$$
\tilde { S } _ { 1 } = \left( 1 - r _ { \mathrm { A } } \right) ^ { 2 } r _ { \mathrm { E } } S _ { 0 } = \frac { \left( 1 - r _ { \mathrm { A } } \right) ^ { 2 } } { r _ { \mathrm { A } } } r _ { \mathrm { E } } \tilde { S } _ { 0 }
$$

The power that is reflected back to the Earth by the atmosphere after ( $n - 1$ ) reflections is $\tilde { S } _ { n - 1 } \left( \frac { r _ { \mathrm { A } } } { 1 - \mathrm { r } _ { \mathrm { A } } } \right)$, of which a fraction $r _ { \mathrm { E } }$ is again sent back towards the atmosphere on the $n$ 'th reflection, and the atmosphere allows a fraction $1 - r _ { \mathrm { A } }$ of this reflected power to escape into the space, thus:

$$
\tilde { S } _ { n } = \frac { \tilde { S } _ { n - 1 } } { 1 - r _ { \mathrm { A } } } r _ { \mathrm { A } } r _ { \mathrm { E } } \times \left( 1 - r _ { \mathrm { A } } \right) = r _ { \mathrm { A } } r _ { \mathrm { E } } \tilde { S } _ { n - 1 } = \left( r _ { \mathrm { A } } r _ { \mathrm { E } } \right) ^ { n - 1 } \tilde { S } _ { 1 }
$$

By adding all these terms, one obtains the power returned per unit area from the Earth-atmosphere system:

$$
\begin{gathered}
\tilde { S } = \sum _ { n = 0 } ^ { \infty } \tilde { S } _ { n } = \tilde { S } _ { 0 } + \tilde { S } _ { 1 } \sum _ { n = 1 } ^ { \infty } \left( r _ { \mathrm { A } } r _ { \mathrm { E } } \right) ^ { n - 1 } = r _ { \mathrm { A } } S _ { 0 } + \left( 1 - r _ { \mathrm { A } } \right) ^ { 2 } r _ { \mathrm { E } } S _ { 0 } \times \frac { 1 } { 1 - r _ { \mathrm { A } } r _ { \mathrm { E } } } \\
= \left[ r _ { \mathrm { A } } + \frac { \left( 1 - r _ { \mathrm { A } } \right) ^ { 2 } r _ { \mathrm { E } } } { 1 - r _ { \mathrm { A } } r _ { \mathrm { E } } } \right] \times S _ { 0 }
\end{gathered}
$$

Dividing by the solar constant we get the value for albedo:

$$
\alpha = \frac { \tilde { S } } { S _ { 0 } } = r _ { \mathrm { A } } + \frac { \left( 1 - r _ { \mathrm { A } } \right) ^ { 2 } r _ { \mathrm { E } } } { 1 - r _ { \mathrm { A } } r _ { \mathrm { E } } } = 3.13 \times 10 ^ { - 1 }
$$

B-2 (1.6 pt)

$$
\alpha = r _ { \mathrm { A } } + \frac { \left( 1 - r _ { \mathrm { A } } \right) ^ { 2 } r _ { \mathrm { E } } } { 1 - r _ { \mathrm { A } } r _ { \mathrm { E } } } \quad , \text { Numerical value of } \alpha = 3.13 \times 10 ^ { - 1 }
$$

B-3. Again, thermal equilibrium requires the input and output powers to be equal both for the Earth and for the atmosphere, the only difference being that the Earth absorbs now a fraction $1 - \alpha$ of the Sun's radiation. Thus, for Earth we have:
$$
\left( 4 \pi R _ { \mathrm { E } } ^ { 2 } \right) \epsilon \sigma T _ { \mathrm { A } } ^ { 4 } + \left( \pi R _ { \mathrm { E } } ^ { 2 } \right) ( 1 - \alpha ) S _ { 0 } = \left( 4 \pi R _ { \mathrm { E } } ^ { 2 } \right) \sigma T _ { \mathrm { E } } ^ { 4 } ,
$$
and for the atmosphere:
$$
\begin{gathered}
\left( 4 \pi R _ { \mathrm { E } } ^ { 2 } \right) \epsilon \sigma T _ { \mathrm { E } } ^ { 4 } = 2 \left( 4 \pi R _ { \mathrm { E } } ^ { 2 } \right) \epsilon \sigma T _ { \mathrm { A } } ^ { 4 } \\
T _ { \mathrm { E } } = \left[ \frac { ( 1 - \alpha ) } { 2 \sigma ( 2 - \epsilon ) } S _ { 0 } \right] ^ { \frac { 1 } { 4 } } , \quad T _ { \mathrm { A } } = \left( \frac { T _ { \mathrm { E } } ^ { 4 } } { 2 } \right) ^ { \frac { 1 } { 4 } }
\end{gathered}
$$

$$
\epsilon = \frac { \left[ \sigma T _ { \mathrm { E } } ^ { 4 } - \frac { ( 1 - \alpha ) } { 4 } S _ { 0 } \right] } { \sigma T _ { \mathrm { A } } ^ { 4 } } = 2 \frac { \left[ \sigma T _ { \mathrm { E } } ^ { 4 } - \frac { ( 1 - \alpha ) } { 4 } S _ { 0 } \right] } { \sigma T _ { \mathrm { E } } ^ { 4 } } = [ 8.07,8.11 ] \times 10 ^ { - 1 }
$$

B-3 (1.0 pt)

$$
T _ { \mathrm { E } } = \left[ \frac { ( 1 - \alpha ) } { 2 \sigma ( 2 - \epsilon ) } S _ { 0 } \right] ^ { \frac { 1 } { 4 } } \quad , \text { Numerical value of } \epsilon = [ 8.07,8.11 ] \times 10 ^ { - 1 }
$$

B-4.

$$
\begin{gathered}
\frac { d T _ { \mathrm { E } } } { d \epsilon } = \frac { 1 } { 4 } \left[ \frac { ( 1 - \alpha ) S _ { 0 } } { 2 \sigma ( 2 - \epsilon ) } \right] ^ { \frac { 1 } { 4 } } \frac { 1 } { ( 2 - \epsilon ) } \\
d T _ { \mathrm { E } } = \frac { d T _ { \mathrm { E } } } { d \epsilon } \epsilon \frac { d \epsilon } { \epsilon } = \left[ \frac { 4 \sigma T _ { \mathrm { E } } ^ { 4 } } { ( 1 - \alpha ) S _ { 0 } } - 1 \right] \frac { T _ { \mathrm { E } } } { 4 } \times 0.01 = [ 4.87,4.92 ] \times 10 ^ { - 1 }
\end{gathered}
$$

B-4 (0.8pt)

$$
\frac { d T _ { \mathrm { E } } } { d \epsilon } = \frac { 1 } { 4 } \left[ \frac { ( 1 - \alpha ) S _ { 0 } } { 2 \sigma ( 2 - \epsilon ) } \right] ^ { \frac { 1 } { 4 } } \frac { 1 } { ( 2 - \epsilon ) } \quad , \text { Numerical value of } \delta T _ { \mathrm { E } } = [ 4.87,4.92 ] \times 10 ^ { - 1 } \mathrm {~K}
$$

B-5. The equations for thermal equilibrium are similar to those for Part B.3, only a non-radiative thermal current needs to be added. For the Earth:

$$
\left( \pi R _ { \mathrm { E } } ^ { 2 } \right) ( 1 - \alpha ) S _ { 0 } + \left( 4 \pi R _ { \mathrm { E } } ^ { 2 } \right) \epsilon \sigma T _ { \mathrm { A } } ^ { 4 } = \left( 4 \pi R _ { \mathrm { E } } ^ { 2 } \right) \sigma T _ { \mathrm { E } } ^ { 4 } + \left( 4 \pi R _ { \mathrm { E } } ^ { 2 } \right) k \left( T _ { \mathrm { E } } - T _ { \mathrm { A } } \right) ,
$$

and for the atmosphere:

$$
\left( 4 \pi R _ { \mathrm { E } } ^ { 2 } \right) \epsilon \sigma T _ { \mathrm { E } } ^ { 4 } + \left( 4 \pi R _ { \mathrm { E } } ^ { 2 } \right) k \left( T _ { \mathrm { E } } - T _ { \mathrm { A } } \right) = 2 \left( 4 \pi R _ { \mathrm { E } } ^ { 2 } \right) \epsilon \sigma T _ { \mathrm { A } } ^ { 4 } .
$$

After completing the calculations, we will have:

$$
\epsilon = \frac { \sigma T _ { \mathrm { E } } ^ { 4 } - ( 1 - \alpha ) \frac { S _ { 0 } } { 4 } } { \sigma \left( T _ { \mathrm { E } } ^ { 4 } - T _ { \mathrm { A } } ^ { 4 } \right) } = [ 8.47,8.52 ] \times 10 ^ { - 1 }
$$

$$
k = \frac { \epsilon \sigma \left( 2 T _ { \mathrm { A } } ^ { 4 } - T _ { \mathrm { E } } ^ { 4 } \right) } { T _ { \mathrm { E } } - T _ { \mathrm { A } } } = \frac { \left( 2 T _ { \mathrm { A } } ^ { 4 } - T _ { \mathrm { E } } ^ { 4 } \right) \times \left[ \sigma T _ { \mathrm { E } } ^ { 4 } - ( 1 - \alpha ) \frac { S _ { 0 } } { 4 } \right] } { \left( T _ { \mathrm { E } } ^ { 4 } - T _ { \mathrm { A } } ^ { 4 } \right) \times \left( T _ { \mathrm { E } } - T _ { \mathrm { A } } \right) } = [ 3.57,3.66 ] \times 10 ^ { - 1 } \mathrm {~W} / \mathrm { m } ^ { 2 } \mathrm {~K}
$$


B-5 (1.6pt)

$$
\begin{array} { l l }
\epsilon = \frac { \sigma T _ { \mathrm { E } } ^ { 4 } - ( 1 - \alpha ) \frac { S _ { 0 } } { 4 } } { \sigma \left( T _ { \mathrm { E } } ^ { 4 } - T _ { \mathrm { A } } ^ { 4 } \right) } & , \text { Numerical value of } \epsilon = [ 8.47,8.52 ] \times 10 ^ { - 1 } \\
& \\
k = \frac { \left( 2 T _ { \mathrm { A } } ^ { 4 } - T _ { \mathrm { E } } ^ { 4 } \right) \times \left[ \sigma T _ { \mathrm { E } } ^ { 4 } - ( 1 - \alpha ) \frac { S _ { 0 } } { 4 } \right] } { \left( T _ { \mathrm { E } } ^ { 4 } - T _ { \mathrm { A } } ^ { 4 } \right) \times \left( T _ { \mathrm { E } } - T _ { \mathrm { A } } \right) } & , \text { Numerical value of } k = [ 3.57,3.66 ] \times 10 ^ { - 1 } \mathrm {~W} / \mathrm { m } ^ { 2 } \mathrm {~K}
\end{array}
$$

B-6. In order to find the change in the temperatures of the Earth and the atmosphere in terms of $\epsilon$ and $k$, we take the logarithm of both sides of the relations before taking the derivative:

$$
\begin{gathered}
\ln \epsilon = \ln \left[ \sigma T _ { \mathrm { E } } ^ { 4 } - ( 1 - \alpha ) \frac { S _ { 0 } } { 4 } \right] - \ln \sigma - \ln \left( T _ { \mathrm { E } } ^ { 4 } - T _ { \mathrm { A } } ^ { 4 } \right) \\
\ln k = \ln \epsilon + \ln \sigma + \ln \left( 2 T _ { \mathrm { A } } ^ { 4 } - T _ { \mathrm { E } } ^ { 4 } \right) - \ln \left( T _ { \mathrm { E } } - T _ { \mathrm { A } } \right) \\
\frac { 1 } { \epsilon } = \frac { 4 \sigma T _ { \mathrm { E } } ^ { 3 } \frac { d T _ { \mathrm { E } } } { d \epsilon } } { \sigma T _ { \mathrm { E } } ^ { 4 } - ( 1 - \alpha ) \frac { S _ { 0 } } { 4 } } - \frac { 4 T _ { \mathrm { E } } ^ { 3 } \frac { d T _ { \mathrm { E } } } { d \epsilon } - 4 T _ { \mathrm { A } } ^ { 3 } \frac { d T _ { \mathrm { A } } } { d \epsilon } } { T _ { \mathrm { E } } ^ { 4 } - T _ { \mathrm { A } } ^ { 4 } } \\
0 = \frac { 1 } { \epsilon } + \frac { 8 T _ { \mathrm { A } } ^ { 3 } \frac { d T _ { \mathrm { A } } } { d \epsilon } - 4 T _ { \mathrm { E } } ^ { 3 } \frac { d T _ { \mathrm { E } } } { d \epsilon } } { 2 T _ { \mathrm { A } } ^ { 4 } - T _ { \mathrm { E } } ^ { 4 } } - \frac { \frac { d T _ { \mathrm { E } } } { d \epsilon } - \frac { d T _ { \mathrm { A } } } { d \epsilon } } { T _ { \mathrm { E } } - T _ { \mathrm { A } } } \\
\epsilon \left[ \frac { 1 } { T _ { \mathrm { E } } - T _ { \mathrm { A } } } + \frac { 4 T _ { \mathrm { E } } ^ { 3 } } { 2 T _ { \mathrm { A } } ^ { 4 } - T _ { \mathrm { E } } ^ { 4 } } \right] \frac { d T _ { \mathrm { E } } } { d \epsilon } = 1 + \epsilon \left[ \frac { 8 T _ { \mathrm { A } } ^ { 3 } } { 2 T _ { \mathrm { A } } ^ { 4 } - T _ { \mathrm { E } } ^ { 4 } } + \frac { 1 } { T _ { \mathrm { E } } - T _ { \mathrm { A } } } \right] \frac { d T _ { \mathrm { A } } } { d \epsilon } \\
1 + \epsilon \left[ \frac { 4 T _ { \mathrm { E } } ^ { 3 } } { T _ { \mathrm { E } } ^ { 4 } - T _ { \mathrm { A } } ^ { 4 } } - \frac { \sigma T _ { \mathrm { E } } ^ { 4 } - ( 1 - \alpha ) \frac { S _ { 0 } } { 4 } } { 4 \sigma T _ { \mathrm { E } } ^ { 3 } } \right] \frac { d T _ { \mathrm { E } } } { d \epsilon } = \frac { 4 T _ { \mathrm { A } } ^ { 3 } } { T _ { \mathrm { E } } ^ { 4 } - T _ { \mathrm { A } } ^ { 4 } } \epsilon \frac { d T _ { \mathrm { A } } } { d \epsilon }
\end{gathered}
$$

Solving this set of linear equations and substituting $\epsilon$ in B-5, we find:


International Physics Olympiad
Isfahan Iran 2024

$$
\begin{gathered}
\frac { d T _ { \mathrm { E } } } { d \epsilon } = \frac { \left[ \frac { \sigma \left( T _ { \mathrm { E } } ^ { 4 } - T _ { \mathrm { A } } ^ { 4 } \right) } { \sigma T _ { \mathrm { E } } ^ { 4 } - ( 1 - \alpha ) \frac { S _ { 0 } } { 4 } } \right] \left[ 1 + \left( \frac { T _ { \mathrm { E } } ^ { 4 } - T _ { \mathrm { A } } ^ { 4 } } { 4 T _ { \mathrm { A } } ^ { 3 } } \right) \left[ \frac { 8 T _ { \mathrm { A } } ^ { 3 } } { 2 T _ { \mathrm { A } } ^ { 4 } - T _ { \mathrm { E } } ^ { 4 } } + \frac { 1 } { T _ { \mathrm { E } } - T _ { \mathrm { A } } } \right] \right] } { \left[ \frac { 1 } { T _ { \mathrm { E } } - T _ { \mathrm { A } } } + \frac { 4 T _ { \mathrm { E } } ^ { 3 } } { 2 T _ { \mathrm { A } } ^ { 4 } - T _ { \mathrm { E } } ^ { 4 } } \right] - \left( \frac { \sigma T _ { \mathrm { A } } ^ { 4 } - ( 1 - \alpha ) \frac { S _ { 0 } } { 4 } } { \sigma T _ { \mathrm { E } } ^ { 4 } - ( 1 - \alpha ) \frac { S _ { 0 } } { 4 } } \right) \left( \frac { T _ { \mathrm { E } } } { T _ { \mathrm { A } } } \right) ^ { 3 } \left[ \frac { 8 T _ { \mathrm { A } } ^ { 3 } } { 2 T _ { \mathrm { A } } ^ { 4 } - T _ { \mathrm { E } } ^ { 4 } } + \frac { 1 } { T _ { \mathrm { E } } - T _ { \mathrm { A } } } \right] } \\
\frac { d T _ { \mathrm { E } } } { d \epsilon } = \frac { 1 + \left( \frac { T _ { \mathrm { E } } ^ { 4 } - T _ { \mathrm { A } } ^ { 4 } } { 4 T _ { \mathrm { A } } ^ { 3 } } \right) \left[ \frac { 8 T _ { \mathrm { A } } ^ { 3 } } { 2 T _ { \mathrm { A } } ^ { 4 } - T _ { \mathrm { E } } ^ { 4 } } + \frac { 1 } { T _ { \mathrm { E } } - T _ { A } } \right] } { \left[ \frac { 1 } { T _ { \mathrm { E } } - T _ { \mathrm { A } } } + \frac { 4 T _ { \mathrm { E } } ^ { 3 } } { 2 T _ { \mathrm { A } } ^ { 4 } - T _ { \mathrm { E } } ^ { 4 } } \right] - \left( \frac { \sigma T _ { \mathrm { A } } ^ { 4 } - ( 1 - \alpha ) \frac { S _ { 0 } } { 4 } } { \sigma T _ { \mathrm { E } } ^ { 4 } - ( 1 - \alpha ) \frac { S _ { 0 } } { 4 } } \right) \left( \frac { T _ { \mathrm { E } } } { T _ { \mathrm { A } } } \right) ^ { 3 } \left[ \frac { 8 T _ { \mathrm { A } } ^ { 3 } } { 2 T _ { \mathrm { A } } ^ { 4 } - T _ { \mathrm { E } } ^ { 4 } } + \frac { 1 } { T _ { \mathrm { E } } - T _ { \mathrm { A } } } \right] } \\
d T _ { \mathrm { E } } = \epsilon \frac { d T _ { \mathrm { E } } } { d \epsilon } \frac { d \epsilon } { \epsilon } = [ 5.21,5.28 ] \times 10 ^ { - 1 } \mathrm {~K}
\end{gathered}
$$

B-6 (1.0pt)
(a) $\left\{ \begin{array} { c } \epsilon \left[ \frac { 1 } { T _ { \mathrm { E } } - T _ { \mathrm { A } } } + \frac { 4 T _ { \mathrm { E } } ^ { 3 } } { 2 T _ { \mathrm { A } } ^ { 4 } - T _ { \mathrm { E } } ^ { 4 } } \right] \frac { d T _ { \mathrm { E } } } { d \epsilon } = 1 + \epsilon \left[ \frac { 8 T _ { \mathrm { A } } ^ { 3 } } { 2 T _ { \mathrm { A } } ^ { 4 } - T _ { \mathrm { E } } ^ { 4 } } + \frac { 1 } { T _ { \mathrm { E } } - T _ { \mathrm { A } } } \right] \frac { d T _ { \mathrm { A } } } { d \epsilon } \\ 1 + \epsilon \left[ \frac { 4 T _ { \mathrm { E } } ^ { 3 } } { T _ { \mathrm { E } } ^ { 4 } - T _ { \mathrm { A } } ^ { 4 } } - \frac { 4 \sigma T _ { \mathrm { E } } ^ { 3 } } { \sigma T _ { \mathrm { E } } ^ { 4 } - ( 1 - \alpha ) \frac { S _ { 0 } } { 4 } } \right] \frac { d T _ { \mathrm { E } } } { d \epsilon } = \frac { 4 T _ { \mathrm { A } } ^ { 3 } } { T _ { \mathrm { E } } ^ { 4 } - T _ { \mathrm { A } } ^ { 4 } } \epsilon \frac { d T _ { \mathrm { A } } } { d \epsilon } \end{array} \right.$
(b) $\delta T _ { \mathrm { E } } = [ 5.21,5.28 ] \times 10 ^ { - 1 } \mathrm {~K}$
