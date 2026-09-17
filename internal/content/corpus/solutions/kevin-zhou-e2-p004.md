---
id: kevin-zhou-e2-p004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e2-p004
solution_type: author
source_document: solution-document-kevin-zhou-e2sol
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E2Sol.pdf."
---

[2] Problem 4. An infinite grounded conducting plane at z = 0 is deformed with a hemispherical
bump of radius R centered at the origin, as shown. A charge q is placed at z = a as shown.
Can the method of images be used to find the potential in the region with the charge? If so, specify
the image charges; if not, explain why not.
Solution. It can be done with three image charges, all on the z-axis:
• A charge −q at z = −a.
• A charge −qR/a at z = R2/a.
• A charge qR/a at z = −R2/a.
These ensure that the voltage vanishes on both the whole plane z = 0 and on the sphere r = R.
[2] Problem 5 (Purcell 3.50). A point charge q is located a distance b > r from the center of a
nongrounded conducting spherical shell of radius r, which also has charge q. When b is close to r,
the charge is attracted to the shell because it induces negative charge; when b is large the charge is
clearly repelled. Find the value of b so that the point charge is in equilibrium. (Hint: you should
have to solve a difficult polynomial equation. You can use a calculator, or use the fact that it
contains a factor of 1 − x − x2.)
Solution. The image charge −q′ = −qr/b is at radius r2/b. Since the sphere has total charge q,
there must also be an image charge q + q′ at its center. To balance forces, we must have
q′
(b − r2/b)2
=
q + q′
b2
.
Defining x = r/b, this simplifies to
x = (1 + x)3
(1 − x)2
.
Remarkably, this quintic equation factorizes as
(1 − x − x2
)(1 + x − x3
) = 0.
The only root with 0 < x < 1 is from the quadratic, x = (
√
5 − 1)/2, giving
b =
1 +
√
5
2
r.
If you didn’t find the factorization, you can also solve the quintic numerically.
