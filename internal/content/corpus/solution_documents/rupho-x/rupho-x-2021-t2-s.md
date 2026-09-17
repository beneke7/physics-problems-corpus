---
id: solution-document-rupho-x-2021-t2-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2021/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [rupho-x-2021-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/rupho-x/2021/T2_S.pdf."
---

A1 5.00   Найдите минимально возможное расстояние L между крайними линзами.


Введём систему координат Y OX, начало которой совпадает с центром первой линзы, ось OX направлена вдоль главной оптической оси, а ось OY
перпендикулярно ей.
Пусть после преломления в i − ой линзе луч направлен под углом α к главной оптической оси, а координата y при преломлении в ней - y . Тогда после
                                                                 i                                                                  i


построения хода луча в i − ой линзе получим
                                                                     F (αi − αi+1 ) = yi




Поскольку линзы находятся очень близко, изменение угла можно считать непрерывным, а отсюда
                                                                                       dα
                                                                     αi+1 − αi =             ⋅ d
                                                                                        dx




Комбинируя последние два выражения
                                                                        dα              y
                                                                                 = −
                                                                        dx             Fd




С другой стороны
                                                                                   dy
                                                                          α =
                                                                                   dx




Дифференцируя последнее соотношение по x, получаем уравнение гармонических колебаний
                                                                         2
                                                                        d y             y
                                                                                 = −
                                                                             2
                                                                        dx             Fd




решением которого с учётом начальных условий
                                                                          y(0) = 0




является

                                                                                        x
                                                                     y = A sin(              )
                                                                                   √F d




Решениями уравнения y(L) = 0 являются

                                                                       L = πN √F d




Минимум достигается при N = 1, и окончательно

                                                                       Lmin = π√F d
