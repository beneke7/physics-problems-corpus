---
id: solution-ocr-usapho-2014-s-a4
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2014_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2014-a4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A4

A positive point charge $q$ is located inside a neutral hollow spherical conducting shell. The shell has inner radius $a$ and outer radius $b ; b - a$ is not negligible. The shell is centered on the origin.
![](../../../figures/solution-ocr/f95f0e92ccbf802d8dd68bc2.jpg)

a. Assume that the point charge $q$ is located at the origin in the very center of the shell.
    i. Determine the magnitude of the electric field outside the conducting shell at $x = b$.

## Solution

We apply Gauss's law for a sphere with radius $r > b$ centered about the origin. Since the shell is neutral, the enclosed charge is $q$, so by spherical symmetry

$$
E ( r ) = \frac { q } { 4 \pi \epsilon _ { 0 } r ^ { 2 } }
$$

outside the shell. Just outside the shell, the field is $q / 4 \pi \epsilon _ { 0 } b ^ { 2 }$.

ii. Sketch a graph for the magnitude of the electric field along the $x$ axis on the answer sheet provided.

## Solution

Since the shell is conducting, the electrostatic field is zero inside it. By Gauss's law, this is achieved by having a charge of $- q$ on the inner surface $r = a$ and a charge of $q$ on the outer surface $r = b$, both uniformly distributed.
For $r < a$, we can apply Gauss's law again to conclude $E ( r ) = \frac { q } { 4 \pi \epsilon _ { 0 } r ^ { 2 } }$, just as it is outside the shell.


![](../../../figures/solution-ocr/c23e9e343279563bf0835e21.jpg)
iii. Determine the electric potential at $x = a$.

## Solution

The shell is a conductor, so it is an equipotential surface. Then the potential at $r = a$ is same as the potential at $r = b$. However, outside the shell the field looks just like that of a point charge $q$ at the origin, so

$$
V ( a ) = V ( b ) = \frac { q } { 4 \pi \epsilon _ { 0 } b } .
$$

iv. Sketch a graph for the electric potential along the $x$ axis on the answer sheet provided.

## Solution

As we've shown above, the potential is proportional to $1 / r$ outside $r = b$, and is constant between $r = a$ and $r = b$. Then the potential for $r < a$ is not proportional to $1 / r$. Instead, it is a $1 / r$ curve shifted by a constant, so that the potential is continuous at $r = a$.
![](../../../figures/solution-ocr/bad7a9dcb3d0f44156b441ec.jpg)


b. Assume that the point charge $q$ is now located on the $x$ axis at a point $x = 2 a / 3$.
    i. Determine the magnitude of the electric field outside the conducting shell at $x = b$.

## Solution

The conducting shell acts like a Faraday cage. As in the previous part, by Gauss's law, we must have a charge of $- q$ on the inner surface, so a charge of $q$ on the outer surface. The charge on the inner surface is distributed non-uniformly to perfectly cancel out the asymmetric field of the point charge; these two contributions sum to exactly zero everywhere outside $r = a$. Then by spherical symmetry, the charges on the outer surface are uniformly distributed.
One might wonder why the charges on the outer and inner surfaces can't both be nonuniformly distributed. A more rigorous argument would appeal to the uniqueness theorems for electrostatics: given the setup we've given, there is only one way to satisfy all the boundary conditions, so the configuration we gave above must be it. The general principle in that in electrostatics, the only information that can be seen across a shielding conducting shell is the total charge.
In any case, by the same logic as in part (a),

$$
E ( r ) = \frac { q } { 4 \pi \epsilon _ { 0 } r ^ { 2 } }
$$

outside the shell. Just outside the shell, the field is $q / 4 \pi \epsilon _ { 0 } b ^ { 2 }$.

ii. Sketch a graph for the magnitude of the electric field along the $x$ axis on the answer sheet provided.

## Solution

For $r < b$, the field is just that of a point charge at the origin, by the shell theorem. The field inside is more complicated because it depends on the distribution of charge on the inner surface; all that is required is that it diverges at $x = 2 a / 3$ and is higher at $x = a$ than $x = - a$.
![](../../../figures/solution-ocr/6b48c387e8316610706a0465.jpg)


Incidentally, one can find the field for $r < a$ exactly using the method of image charges: for $r < a$, the shielding charges on the inner surface produce the exact same field as a single point charge would. The location of this "image" charge can be found by inverting the original point charge about the circle $r = a$.
iii. Determine the electric potential at $x = a$.

\section*{Solution}
By the same logic as in part (a),
$$
V ( a ) = \frac { q } { 4 \pi \epsilon _ { 0 } b } .
$$
iv. Sketch a graph for the electric potential along the $x$ axis on the answer sheet provided.

\section*{Solution}
Again, the potential is proportional to $1 / r$ outside $r = b$, and is constant between $r = a$ and $r = b$. The potential inside is more complicated, diverging at $x = 2 a / 3$.
![](../../../figures/solution-ocr/4d2c5ca0d6b5628c2b9e8d4e.jpg)
v. Sketch a figure showing the electric field lines (if any) inside, within, and outside the conducting shell on the answer sheet provided. You should show at least eight field lines in any distinct region that has a non-zero field.

\section*{Solution}
The field should be spherically symmetric outside the shell, zero within the shell, and nonuniform inside. The field lines should terminate perpendicular to the conductor.

![](../../../figures/solution-ocr/523f8cad8d3f9f74adb4be13.jpg)


## STOP: Do Not Continue to Part B

If there is still time remaining for Part A, you should review your work for Part A, but do not continue to Part B until instructed by your exam supervisor.


## Part B
