---
id: solution-ocr-rupho-x-2021-t2-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2021/T2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Введём систему координат $Y O X$, начало которой совпадает с центром первой линзы, ось $O X$ направлена вдоль главной оптической оси, а ось $O Y$ перпендикулярно ей.
Пусть после преломления в $i$ - ой линзе луч направлен под углом $\alpha _ { i }$ к главной оптической оси, а координата $y$ при преломлении в ней - $y _ { i }$. Тогда после построения хода луча в $i$ - ой линзе получим

$$
F \left( \alpha _ { i } - \alpha _ { i + 1 } \right) = y _ { i }
$$

Поскольку линзы находятся очень близко, изменение угла можно считать непрерывным, а отсюда

$$
\alpha _ { i + 1 } - \alpha _ { i } = \frac { d \alpha } { d x } \cdot d
$$

Комбинируя последние два выражения

$$
\frac { d \alpha } { d x } = - \frac { y } { F d }
$$

С другой стороны

$$
\alpha = \frac { d y } { d x }
$$

Дифференцируя последнее соотношение по $x$, получаем уравнение гармонических колебаний

$$
\frac { d ^ { 2 } y } { d x ^ { 2 } } = - \frac { y } { F d }
$$

решением которого с учётом начальных условий

$$
y ( 0 ) = 0
$$

является

$$
y = A \sin \left( \frac { x } { \sqrt { F d } } \right)
$$

Решениями уравнения $y ( L ) = 0$ являются

$$
L = \pi N \sqrt { F d }
$$

Минимум достигается при $N = 1$, и окончательно

$$
L _ { \min } = \pi \sqrt { F d }
$$
