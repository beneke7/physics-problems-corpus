---
id: solution-ocr-kevin-zhou-t2sol-ex008
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-ex008]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 8
A nonideal blackbody absorbs a fraction $a ( f )$ of incident radiation of frequency $f$. (For an ideal blackbody, $a ( f ) = 1$.) Show that the second law implies Kirchhoff's law, $e ( f ) = a ( f )$.

Solution
First let's consider the case where $a ( f )$ and $e ( f )$ are constants, which don't depend on $f$. If we place two blackbodies of temperature $T$ right next to each other, then the rate at which the first heats the second is proportional to $e _ { 1 } a _ { 2 }$, while the rate the second heats the first is proportional to $e _ { 2 } a _ { 1 }$. By the second law, these must be equal, which implies $e _ { 1 } / a _ { 1 } = e _ { 2 } / a _ { 2 }$. Hence the ratio is constant. But for a perfect blackbody, $e = a$, so the two are equal.

More generally, suppose we place in between the two blackbodies a filter that only lets light of frequency $f$ through, and blocks everything else. Then the same reasoning gives $e _ { 1 } ( f ) / a _ { 1 } ( f ) = e _ { 2 } ( f ) / a _ { 2 } ( f )$, so $e ( f ) = a ( f )$. Thermodynamics forces good absorbers to also be good emitters. It's possible to derive this microscopically, by considering how individual atoms behave; in that context Kirchhoff's law follows from time reversal symmetry.

You might wonder what would happen if we placed a "one-way" filter which only let light through in one direction. Such a filter would act like Maxwell's demons for photons: if you used one to divide a room full of photons, it would start directing photons of certain frequencies to one side or the other, decreasing the entropy. So thermodynamics also forbids the existence of one-way filters; again, microscopically this is a result of time reversal symmetry.
