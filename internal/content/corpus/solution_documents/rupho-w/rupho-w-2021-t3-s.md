---
id: solution-document-rupho-w-2021-t3-s
source: rupho-w
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-w/2021/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [rupho-w-2021-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/rupho-w/2021/T3_S.pdf."
---

A1 3.00   Определите зависимость давления газа p от температуры T в левой части сосуда.


Запишем уравнения Менделеева-Клапейрона для обеих частей сосуда
                                                                             pVл = νRT




                                                                             pVп = νRT0




Учтём неизменность объёма сосуда
                                                                            Vл + Vп = 2V0




Из данных соотношений вытекает следующее
                                                                                 νR (T + T0 )
                                                                         p =
                                                                                       2V0




В начальный момент
                                                                                       νRT0
                                                                             p0 =
                                                                                        V0




откуда


   Ответ:
                                                                                 p0
                                                                         p =           (T + T0 )
                                                                                 2T0




 A2 7.00   Для этого процесса определите, как теплоёмкость газа в левой части сосуда зависит его объёма V .


Из первого начала термодинамики

                                                                        ΔQ = ΔU + pΔV




Откуда

                                                                                          pΔV
                                                                         C = CV +
                                                                                             ΔT




Выражая давление из уравнения Менделеева-Клапейрона
                                                                                       νRT     ΔV
                                                                    C = CV +
                                                                                         V     ΔT




При небольших изменений параметров газа справедливо соотношение

                                                                        Δp        ΔV           ΔT
                                                                             +           =
                                                                         p         V           T




Учитывая выражение для давления, полученное в первом пункте
                                                                    ΔV           ΔT            ΔT
                                                                             =          −
                                                                     V            T          T + T0




откуда
                                                                    T    ΔV                    T
                                                                                 = 1 −
                                                                    V    ΔT                  T + T0




Выразим объём из уравнения менделеева-Клапейрона
                                                                                       2V0 T
                                                                             V =
                                                                                      T + T0




Комбинируя последние два уравнения
                                                                        T    ΔV                V
                                                                                   = 1 −
                                                                        V    ΔT                2V0




Окончательно получим
Ответ:
                    2νRV       p0 V 0          V
         C = CP −          =            (5 −        )
                     V0        2T0             V0
