---
id: solution-ocr-rupho-x-2026-t5-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2026/T5_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Из закона сохранения массы поток $\vec { j }$ через сферу радиусом $r$ вокруг капли, не зависит от $r$ и определяется только скоростью испарения капли.

$$
j \left( r _ { 0 } \right) \cdot 4 \pi r _ { 0 } ^ { 2 } = j ( r ) \cdot 4 \pi r ^ { 2 } .
$$

Ответ:

$$
j ( r ) = \frac { j \left( r _ { 0 } \right) r _ { 0 } ^ { 2 } } { r ^ { 2 } }
$$

А2 ${ } ^ { 0.30 }$ Найдите зависимость $n ( r )$ концентрации пара от расстояния до центра капли. Ответ выразите через $n _ { 0 } , \eta , r _ { 0 } , r$.

Запишем поток пара, используя концентрацию:

$$
j ( r ) = - D \frac { \mathrm {~d} n } { \mathrm {~d} r } = \frac { j \left( r _ { 0 } \right) r _ { 0 } ^ { 2 } } { r ^ { 2 } } .
$$

Интегрируя по расстоянию от $r$ до $\infty$, получаем:

$$
\begin{gathered}
D \left( n ( r ) - \eta n _ { 0 } \right) = \frac { j \left( r _ { 0 } \right) r _ { 0 } ^ { 2 } } { r } \\
n ( r ) = \eta n _ { 0 } + \frac { A } { r }
\end{gathered}
$$

где $A$ - константа определяемая из граничного условия на поверхности капли:

$$
n \left( r _ { 0 } \right) = n _ { 0 } = \eta n _ { 0 } + \frac { A } { r _ { 0 } } \Rightarrow A = ( 1 - \eta ) n _ { 0 } r _ { 0 } .
$$

Ответ:

$$
n ( r ) = n _ { 0 } \left( \eta + ( 1 - \eta ) \frac { r _ { 0 } } { r } \right)
$$

А3 ${ } ^ { 0.30 }$ Найдите начальную скорость изменения массы капли $I _ { 1 }$. Ответ выразите через $D , n _ { 0 } , \eta , r _ { 0 } , m _ { \mathrm { w } }$. Здесь и далее скоростью изменения массы капли называется $I = - \frac { d m } { d t }$, где $m$ - масса капли.

Воспользуемся выражением для $A$ :

$$
\begin{gathered}
A = \frac { j \left( r _ { 0 } \right) r _ { 0 } ^ { 2 } } { D } = ( 1 - \eta ) n _ { 0 } r _ { 0 } . \\
I _ { 1 } = m _ { \mathrm { w } } j \left( r _ { 0 } \right) \cdot 4 \pi r _ { 0 } ^ { 2 } = 4 \pi m _ { \mathrm { w } } D A = 4 \pi m _ { \mathrm { w } } D ( 1 - \eta ) n _ { 0 } r _ { 0 } .
\end{gathered}
$$

Ответ:

$$
I _ { 1 } = 4 \pi m _ { \mathrm { w } } D ( 1 - \eta ) n _ { 0 } r _ { 0 }
$$

A4 ${ } ^ { 0.30 }$ Найдите время полного испарения капли. Считайте, что капля испаряется достаточно медленно, так что в каждый момент времени поток можно считать установившимся. Ответ выразите через $D , n _ { 0 } , \eta , r _ { 0 } , \rho _ { \mathrm { w } } , m _ { \mathrm { w } }$.

Воспользуемся результатом прошлого пункта ( $r _ { к }$ - радиус капли в некоторый момент времени):

$$
\begin{aligned}
I _ { 1 } = - & \rho _ { \mathrm { w } } \cdot 4 \pi r _ { \mathrm { K } } ^ { 2 } \frac { \mathrm {~d} r _ { \mathrm { K } } } { \mathrm {~d} t } = 4 \pi m _ { \mathrm { w } } D ( 1 - \eta ) n _ { 0 } r _ { \mathrm { K } } . \\
& - \rho _ { \mathrm { w } } \cdot r _ { \mathrm { K } } \frac { \mathrm {~d} r _ { \mathrm { K } } } { \mathrm {~d} t } = m _ { \mathrm { w } } D ( 1 - \eta ) n _ { 0 }
\end{aligned}
$$

Проинтегрируем по времени от 0 до искомого $t _ { 0 }$ :

$$
\rho _ { \mathrm { w } } \frac { r _ { 0 } ^ { 2 } } { 2 } = m _ { \mathrm { w } } D ( 1 - \eta ) n _ { 0 } t _ { 0 } .
$$


Ответ:

$$
t _ { 0 } = \frac { \rho _ { \mathrm { w } } r _ { 0 } ^ { 2 } } { 2 m _ { \mathrm { w } } D ( 1 - \eta ) n _ { 0 } }
$$

А5 ${ } ^ { 0.30 }$ Рассчитайте время испарения капли радиусом $r _ { 0 } = 0.5$ мм.
Температура $T _ { 0 } = 293$ К, коэффициент диффузии $D = 0.25 \mathrm {~cm} ^ { 2 } /$ с, давление насыщенного пара при этой температуре $p _ { 0 } = 2.34$ кПа, влажность воздуха вдали от капли $\eta = 0.5$.

Для использования полученной выше формулы выразим $n _ { 0 }$ :

$$
\begin{gathered}
n _ { 0 } = \frac { p _ { 0 } } { k _ { \mathrm { B } } T _ { 0 } } \\
t _ { 0 } = \frac { \rho _ { \mathrm { w } } r _ { 0 } ^ { 2 } k _ { \mathrm { B } } T _ { 0 } } { 2 m _ { \mathrm { w } } D ( 1 - \eta ) p _ { 0 } }
\end{gathered}
$$

Ответ:

$$
t _ { 0 } = 576 \mathrm { c }
$$

А6 ${ } ^ { 0.20 }$ Выразите производную $N ^ { \prime } ( r )$ через $n ^ { \prime } ( r )$.
Здесь и далее $n ^ { \prime } ( r ) = \frac { d n ( r ) } { d r } , N ^ { \prime } ( r ) = \frac { d N ( r ) } { d r }$.

Суммарное давление определяется суммарной концентрацией газа:

$$
P = \text { const } = ( N ( r ) + n ( r ) ) k _ { \mathrm { B } } T _ { 0 } .
$$

Дифференцируя, получаем соотношение:

$$
N ^ { \prime } ( r ) + n ^ { \prime } ( r ) = 0 .
$$

Ответ:

$$
N ^ { \prime } ( r ) = - n ^ { \prime } ( r )
$$

А7 ${ } ^ { 0.50 }$ Выразите $v ( r )$ через $D , N ( r ) , N ^ { \prime } ( r ) , r$.

Суммарный поток воздуха должен быть равен нулю:

$$
N ( r ) v ( r ) - D N ^ { \prime } ( r ) = 0
$$

Ответ:

$$
v ( r ) = \frac { D N ^ { \prime } ( r ) } { N ( r ) }
$$

А8 ${ } ^ { 0.50 }$ Выразите полный (с учётом диффузии и гидродинамического течения) поток пара от капли $j _ { \text {sum } } ( r )$ через $D , n ( r ) , n ^ { \prime } ( r ) , n _ { s ^ { \prime } } r$.

Заметим, что из постоянства давления имеем:

$$
N ( r ) + n ( r ) = n _ { s } .
$$

Выразим $v ( r )$ через $n ( r )$ :

$$
v ( r ) = - \frac { D n ^ { \prime } ( r ) } { n _ { s } - n ( r ) } .
$$

Тогда искомая величина:

$$
j _ { \mathrm { sum } } ( r ) = - D n ^ { \prime } ( r ) + v ( r ) n ( r ) = - D n ^ { \prime } ( r ) \left( 1 + \frac { n ( r ) } { n _ { s } - n ( r ) } \right) .
$$


Ответ:

$$
j _ { \mathrm { sum } } ( r ) = - \frac { D n _ { s } n ^ { \prime } ( r ) } { n _ { s } - n ( r ) }
$$

А9 ${ } ^ { 0.50 }$ Найдите зависимость $n ( r )$ концентрации пара от расстояния до центра капли. Ответ выразите через $n _ { 0 } , n _ { s } , \eta , r _ { 0 } , r$.

Вновь воспользуемся законом сохранения массы:

$$
\begin{gathered}
j _ { \text {sum } } ( r ) r ^ { 2 } = \text { const } = B = - \frac { D n _ { s } n ^ { \prime } ( r ) r ^ { 2 } } { n _ { s } - n ( r ) } \\
\frac { B \mathrm {~d} r } { D n _ { s } r ^ { 2 } } = - \frac { \mathrm { d } n } { n _ { s } - n } \\
\frac { B } { D n _ { s } r } = - \ln \left( \frac { n _ { s } - n ( r ) } { n _ { s } - \eta n _ { 0 } } \right)
\end{gathered}
$$

Из граничного условия на поверхности капли:

$$
\begin{gathered}
\frac { B } { D n _ { s } r _ { 0 } } = - \ln \left( \frac { n _ { s } - n _ { 0 } } { n _ { s } - \eta n _ { 0 } } \right) \Rightarrow B = - D n _ { s } r _ { 0 } \ln \left( \frac { n _ { s } - n _ { 0 } } { n _ { s } - \eta n _ { 0 } } \right) \\
\frac { r _ { 0 } } { r } \ln \left( \frac { n _ { s } - n _ { 0 } } { n _ { s } - \eta n _ { 0 } } \right) = \ln \left( \frac { n _ { s } - n ( r ) } { n _ { s } - \eta n _ { 0 } } \right)
\end{gathered}
$$

Выразим $n ( r )$.

$$
\frac { n _ { s } - n ( r ) } { n _ { s } - \eta n _ { 0 } } = \left( \frac { n _ { s } - n _ { 0 } } { n _ { s } - \eta n _ { 0 } } \right) ^ { \frac { r _ { 0 } } { r } } .
$$

Ответ:

$$
n ( r ) = n _ { s } - \left( n _ { s } - \eta n _ { 0 } \right) \left( \frac { n _ { s } - n _ { 0 } } { n _ { s } - \eta n _ { 0 } } \right) ^ { \frac { r _ { 0 } } { r } }
$$

А10 ${ } ^ { 0.30 }$ Найдите начальную скорость изменения массы капли $I _ { 2 }$. Ответ выразите через $D , n _ { 0 } , n _ { s } , \eta , r _ { 0 } , m _ { \mathrm { w } }$.

Выразим $I _ { 2 }$ через $j _ { \text {sum } } ( r )$ :

$$
I _ { 2 } = m _ { \mathrm { w } } j _ { \mathrm { sum } } ( r ) \cdot 4 \pi r ^ { 2 } = 4 \pi m _ { \mathrm { w } } B .
$$

Ответ:

$$
I _ { 2 } = 4 \pi m _ { \mathrm { w } } D n _ { s } r _ { 0 } \ln \left( \frac { n _ { s } - \eta n _ { 0 } } { n _ { s } - n _ { 0 } } \right)
$$

А11 ${ } ^ { 0.30 }$ Вычислите значение $\frac { I _ { 2 } - I _ { 1 } } { I _ { 1 } }$, где $I _ { 1 } , I _ { 2 }$ - величины из пунктов А3, А10. Температура среды $T _ { 0 } = 293$ К, суммарное давление воздуха и водяного пара $P = 101.3$ кПа, остальные необходимые численные величины возьмите из пункта А5.

Подставим полученные раннее выражения:

$$
\frac { I _ { 2 } } { I _ { 1 } } = \frac { 4 \pi m _ { \mathrm { w } } D n _ { s } r _ { 0 } \ln \left( \frac { n _ { s } - \eta n _ { 0 } } { n _ { s } - n _ { 0 } } \right) } { 4 \pi m _ { \mathrm { w } } D ( 1 - \eta ) n _ { 0 } r _ { 0 } } = \frac { n _ { s } \ln \left( \frac { n _ { s } - \eta n _ { 0 } } { n _ { s } - n _ { 0 } } \right) } { ( 1 - \eta ) n _ { 0 } } .
$$

Выражая концентрации через давления, получим:

$$
\frac { I _ { 2 } - I _ { 1 } } { I _ { 1 } } = \frac { P \ln \left( \frac { P - \eta p _ { 0 } } { P - p _ { 0 } } \right) } { ( 1 - \eta ) p _ { 0 } } - 1 .
$$

Ответ:

$$
\frac { I _ { 2 } - I _ { 1 } } { I _ { 1 } } \approx 0.0176
$$


В1 ${ } ^ { 0.30 }$ Найдите установившееся распределение температуры в пространстве $T ( r )$ в зависимости от расстояния $r$ до центра капли. Ответ выразите через $T _ { 0 }$, $T _ { \infty } , r _ { 0 } , r$.

Режим установившийся, поэтому через сферу любого радиуса $r$ проходит одинаковый поток тепла в единицу времени:

$$
q ( r ) \cdot 4 \pi r ^ { 2 } = q _ { 0 } \cdot 4 \pi r _ { 0 } ^ { 2 } .
$$

По определению:

$$
q = - \varkappa \frac { \mathrm { d } T } { \mathrm {~d} r } .
$$

Подставим $q$ в выражение для равенство потоков тепла, разделим переменные и проинтегрируем:

$$
\begin{gathered}
\frac { \mathrm { d } r } { r ^ { 2 } } = - \varkappa \cdot \frac { 1 } { q _ { 0 } r _ { 0 } ^ { 2 } } \mathrm {~d} T . \\
\frac { 1 } { r _ { 0 } } - \frac { 1 } { r } = - \frac { \varkappa } { q _ { 0 } r _ { 0 } ^ { 2 } } \left( T - T _ { 0 } \right) .
\end{gathered}
$$

Воспользуемся граничным условием на $T _ { \infty }$ :

$$
q _ { 0 } = \frac { \varkappa } { r _ { 0 } } \left( T _ { 0 } - T _ { \infty } \right) .
$$

Подставим $q _ { 0 }$ в выражение $T ( r )$ и преобразуем, получим итоговый ответ:

$$
T = T _ { \infty } + \left( T _ { 0 } - T _ { \infty } \right) \cdot \frac { r _ { 0 } } { r } .
$$

Ответ:

$$
T = T _ { \infty } + \left( T _ { 0 } - T _ { \infty } \right) \cdot \frac { r _ { 0 } } { r }
$$

В2 ${ } ^ { 0.20 }$ Определите мощность $J$, подводимую к капле в начальный момент времени за счёт теплопроводности воздуха. Ответ выразите через $\varkappa , T _ { 0 } , T _ { \infty } , r _ { 0 }$.

Подставим $q _ { 0 }$ из прошлого пункта в тепловой поток $J$.

$$
J = q _ { 0 } \cdot 4 \pi r _ { 0 } ^ { 2 } = 4 \pi r _ { 0 } \varkappa \left( T _ { \infty } - T _ { 0 } \right) .
$$

Ответ:

$$
J = 4 \pi r _ { 0 } \varkappa \left( T _ { \infty } - T _ { 0 } \right)
$$

Вз ${ } ^ { 1.50 }$ Определите начальную скорость изменения массы капли. Ответ выразите $T _ { 0 } , T _ { \infty } , D _ { \infty } , m _ { \mathrm { w } } , k _ { \mathrm { B } } , p \left( T _ { 0 } \right) , p \left( T _ { \infty } \right) , r _ { 0 } , \eta , \alpha$.

Примечание. В интегралах вида

$$
\int f \left( \frac { 1 } { x } \right) \frac { d x } { x ^ { 2 } }
$$

может быть полезна замена переменной $y = 1 / x$.

По условию $D ( T ) = D _ { \infty } \left( \frac { T } { T _ { \infty } } \right) ^ { \alpha }$. Запишем диффузионный поток пара:

$$
\Phi = j \left( r _ { 0 } \right) \cdot 4 \pi r _ { 0 } ^ { 2 } = - 4 \pi \cdot r ^ { 2 } \cdot D _ { \infty } \left( \frac { T } { T _ { \infty } } \right) ^ { \alpha } \cdot \frac { \mathrm { d } n } { \mathrm {~d} r } .
$$

Разделим переменные:

$$
\frac { \mathrm { d } r } { r ^ { 2 } \left( 1 - \left( 1 - \frac { T _ { 0 } } { T _ { \infty } } \right) \cdot \frac { r _ { 0 } } { r } \right) ^ { \alpha } } = - \frac { 4 \pi D _ { \infty } \mathrm { d } n } { \Phi } .
$$

Обратим внимание, что в данной задаче, как и в решении задач гравитации, нам поможет замена Бине, ведь

$$
\mathrm { d } \left( \frac { 1 } { r } \right) = - \frac { 1 } { r ^ { 2 } } \mathrm {~d} r .
$$

Преобразуем выражение, после чего проинтегрируем:

$$
\frac { \mathrm { d } \left( 1 - \left( 1 - \frac { T _ { 0 } } { T _ { \infty } } \right) \cdot \frac { r _ { 0 } } { r } \right) } { \left( 1 - \left( 1 - \frac { T _ { 0 } } { T _ { \infty } } \right) \cdot \frac { r _ { 0 } } { r } \right) ^ { \alpha } \cdot r _ { 0 } \left( 1 - \frac { T _ { 0 } } { T _ { \infty } } \right) } = - \frac { 4 \pi D _ { \infty } \mathrm { d } n } { \Phi } .
$$


$$
\frac { 1 } { \left( 1 - \left( 1 - \frac { T _ { 0 } } { T _ { \infty } } \right) \right) ^ { \alpha - 1 } } - \frac { 1 } { \left( 1 - \left( 1 - \frac { T _ { 0 } } { T _ { \infty } } \right) \cdot \frac { r _ { 0 } } { r } \right) ^ { \alpha - 1 } } = - \frac { 4 \pi D _ { \infty } \left( 1 - \left( 1 - \frac { T _ { 0 } } { T _ { \infty } } \right) \right) r _ { 0 } ( \alpha - 1 ) \left( n - n _ { 0 } \right) } { \Phi } .
$$

Учтём, что на большом расстоянии $r$ :

$$
n ( \infty ) = \frac { \eta \cdot p \left( T _ { \infty } \right) } { k _ { \mathrm { B } } T _ { \infty } } ,
$$

Возле капли:

$$
n \left( r _ { 0 } \right) = \frac { p \left( T _ { 0 } \right) } { k _ { \mathrm { B } } T _ { 0 } } .
$$

Теперь подставив в интеграл граничное условие на большое расстояние $r$, получим выражение для диффузионного потока $\Phi$ :

$$
\Phi = \frac { 4 \pi D _ { \infty } r _ { 0 } \left( 1 - \frac { T _ { 0 } } { T _ { \infty } } \right) \left( \frac { p \left( T _ { 0 } \right) } { k _ { \mathrm { B } } T _ { 0 } } - \eta \cdot \frac { p \left( T _ { \infty } \right) } { k _ { \mathrm { B } } T _ { \infty } } \right) ( \alpha - 1 ) } { \left( \frac { T _ { \infty } } { T _ { 0 } } \right) ^ { \alpha - 1 } - 1 } .
$$

Свяжем поток $\Phi$ со скоростью изменения массы $I$ :

$$
I = \Phi \cdot m _ { \mathrm { w } } .
$$

Подставим сюда $\Phi$ и получим итоговый ответ:

$$
I = \frac { 4 \pi D _ { \infty } r _ { 0 } m _ { \mathrm { w } } \left( 1 - \frac { T _ { 0 } } { T _ { \infty } } \right) \left( \frac { p \left( T _ { 0 } \right) } { k _ { \mathrm { B } } T _ { 0 } } - \eta \cdot \frac { p \left( T _ { \infty } \right) } { k _ { \mathrm { B } } T _ { \infty } } \right) ( \alpha - 1 ) } { \left( \frac { T _ { \infty } } { T _ { 0 } } \right) ^ { \alpha - 1 } - 1 } .
$$

Ответ:

$$
I = \frac { 4 \pi D _ { \infty } r _ { 0 } m _ { \mathrm { w } } \left( 1 - \frac { T _ { 0 } } { T _ { \infty } } \right) \left( \frac { p \left( T _ { 0 } \right) } { k _ { \mathrm { B } } T _ { 0 } } - \eta \cdot \frac { p \left( T _ { \infty } \right) } { k _ { \mathrm { B } } T _ { \infty } } \right) ( \alpha - 1 ) } { \left( \frac { T _ { \infty } } { T _ { 0 } } \right) ^ { \alpha - 1 } - 1 }
$$

B4 ${ } ^ { 0.30 }$ Из условия теплового баланса капли получите уравнение, связывающее $T _ { 0 } , T _ { \infty } , \varkappa , D _ { \infty } , L , m _ { \mathrm { w } } , k _ { \mathrm { B } } , p \left( T _ { 0 } \right) , p \left( T _ { \infty } \right) , r _ { 0 } , \eta , \alpha$.

Запишем уравнение теплового баланса:

$$
- L \mathrm {~d} m = \mathrm { d } Q = 4 \pi r _ { 0 } \varkappa \left( T _ { \infty } - T _ { 0 } \right) \mathrm { d } t .
$$

Подставив сюда выражение для $\Phi$, получаем итоговый ответ:

$$
\frac { \varkappa T _ { \infty } k _ { \mathrm { B } } } { L D _ { \infty } m _ { \mathrm { w } } ( \alpha - 1 ) } = \frac { \frac { p \left( T _ { 0 } \right) } { T _ { 0 } } - \frac { \eta \cdot p \left( T _ { \infty } \right) } { T _ { \infty } } } { \left( \frac { T _ { \infty } } { T _ { 0 } } \right) ^ { \alpha - 1 } - 1 } .
$$

Ответ:

$$
\frac { \varkappa T _ { \infty } k _ { \mathrm { B } } } { L D _ { \infty } m _ { \mathrm { w } } ( \alpha - 1 ) } = \frac { \frac { p \left( T _ { 0 } \right) } { T _ { 0 } } - \frac { \eta \cdot p \left( T _ { \infty } \right) } { T _ { \infty } } } { \left( \frac { T _ { \infty } } { T _ { 0 } } \right) ^ { \alpha - 1 } - 1 }
$$

Рассчитайте температуру капли $T _ { 0 }$ с точностью до десятых долей кельвина. Используйте следующие численные значения:

- $T _ { \infty } = 293.0 \mathrm {~K}$
- $p \left( T _ { \infty } \right) = 2.34$ кПа
- $\varkappa = 26.0 \mathrm { mBt } / ( \mathrm { m } \cdot К )$
- $D _ { \infty } = 0.25 \mathrm {~cm} ^ { 2 } / \mathrm { c }$
- $r _ { 0 } = 0.5 \mathrm {~mm}$

- $\eta = 0.5$
- $\alpha = 1.8$ (хорошее приближение для водяного пара)

Решить такое уравнение аналитически не представляется возможным, поэтому обратимся к численным методам (метод простых итераций, таблицы в калькуляторе или любой другой рабочий метод):
Подставим $p \left( T _ { 0 } \right)$ через $p \left( T _ { \infty } \right)$ из закона Клапейрона-Клаузиуса в последнее уравнение, подставим все известные численные значения величин, получим такое уравнение на $T _ { 0 }$ :

$$
77.5283 = \frac { \frac { 2340 \mathrm {~K} } { T _ { 0 } } \cdot \exp \left( 4895.31 \mathrm {~K} \cdot \left( \frac { 1 } { 293 \mathrm {~K} } - \frac { 1 } { T _ { 0 } } \right) \right) - 3.99317 } { \left( \frac { 293 \mathrm {~K} } { T _ { 0 } } \right) ^ { 0.8 } - 1 } .
$$

Численный ответ легко получить при помощи калькулятора:

$$
T _ { 0 } = 286.1 \mathrm { К } .
$$

Ответ:

$$
T _ { 0 } = 286.1 \mathrm {~K}
$$

С1 ${ } ^ { 0.50 }$ Найдите время полного испарения капли. Ответ выразите через $r _ { 0 } , \rho _ { w } , D , n _ { 0 } , r _ { \sigma }$.

С учётом того, что температура везде одинакова и равна $T _ { 0 }$, выходит:

$$
n _ { r } = n _ { 0 } \left( 1 + \frac { r _ { \sigma } } { r } \right) .
$$

Выражение для диффузионного потока выглядит всё ещё так:

$$
j = - D \frac { \mathrm {~d} n } { \mathrm {~d} r } .
$$

Поток частиц $\Phi =$ const $= j ( r ) \cdot 4 \pi r ^ { 2 } = j \left( r _ { 0 } \right) \cdot 4 \pi r _ { 0 } ^ { 2 }$. Разделим переменные:

$$
\frac { \Phi } { 4 \pi D } \cdot \frac { \mathrm {~d} r } { r ^ { 2 } } = \mathrm { d } n .
$$

Проинтегрируем от $r _ { 0 }$ до бесконечности:

$$
\frac { \Phi } { 4 \pi D \cdot r _ { 0 } } = n _ { 0 } \cdot \frac { r _ { \sigma } } { r _ { 0 } } .
$$

Итак,

$$
\begin{gathered}
\Phi = 4 \pi D r _ { \sigma } n _ { 0 } \\
\frac { \mathrm {~d} m } { \mathrm {~d} t } = - m _ { \mathrm { w } } \cdot \Phi = - 4 \pi D r _ { \sigma } n _ { 0 } m _ { \mathrm { w } }
\end{gathered}
$$

то есть производная массы капли по времени не зависит от радиуса капли $r$, поэтому:

$$
\tau = \frac { \rho _ { \mathrm { w } } r _ { 0 } ^ { 3 } } { 3 D r _ { \sigma } n _ { 0 } m _ { \mathrm { w } } } .
$$

Ответ:

$$
\tau = \frac { \rho _ { \mathrm { w } } r _ { 0 } ^ { 3 } } { 3 D r _ { \sigma } n _ { 0 } m _ { \mathrm { w } } }
$$

с2 ${ } ^ { 0.30 }$ Рассчитайте время испарения капли тумана радиусом $r _ { 0 } = 10 ^ { - 5 }$ м. Температура $T _ { 0 } = 293$ К, давление насыщенного пара при этой температуре $p _ { 0 } = 2.34$ кПа, коэффициент диффузии $D = 0.25 \mathrm {~cm} ^ { 2 } / \mathrm { c } , r _ { \sigma } = 1.08 \cdot 10 ^ { - 9 }$ м.

Из уравнения состояния идеального газа:

$$
n _ { 0 } = \frac { p _ { 0 } } { k _ { \mathrm { B } } T } ,
$$

откуда:

$$
\tau = \frac { \rho _ { \mathrm { w } } r _ { 0 } ^ { 3 } k _ { B } T } { 3 D r _ { \sigma } p _ { 0 } m _ { \mathrm { w } } } = 711 \mathrm { c }
$$


Ответ:

$$
\tau = \frac { \rho _ { \mathrm { w } } r _ { 0 } ^ { 3 } k _ { \mathrm { B } } T } { 3 D r _ { \sigma } p _ { 0 } m _ { \mathrm { w } } } = 711 \mathrm { c }
$$

D1 ${ } ^ { 0,40 }$ Покажите, что скорость изменения массы $I$ капли в таком случае пропорциональна заряду проводника $q$ в эквивалентной электрической системе. Определите отношение $I / q$. Ответ выразите через $\varepsilon _ { 0 } , \gamma , D , m _ { \mathrm { w } }$.

Воспользуемся аналогией диффузии и электростатики с учётом теоремы Гаусса:

$$
I = - \frac { \mathrm { d } m } { \mathrm {~d} t } = m _ { \mathrm { w } } \cdot \int ( \vec { j } ( r ) \cdot \mathrm { d } \vec { S } ) = m _ { \mathrm { w } } \cdot \gamma \cdot D \cdot \int ( \vec { E } \cdot \mathrm {~d} \vec { S } ) = \frac { m _ { \mathrm { w } } \cdot \gamma \cdot D } { \varepsilon _ { 0 } } \cdot q ,
$$

откуда:

$$
q = I \cdot \frac { \varepsilon _ { 0 } } { m _ { \mathrm { w } } \gamma D }
$$

коэффициент пропорциональности $\frac { I } { q }$ равен:

$$
\frac { I } { q } = \frac { m _ { \mathrm { w } } \gamma D } { \varepsilon _ { 0 } } .
$$

Ответ:

$$
\frac { I } { q } = \frac { m _ { \mathrm { w } } \gamma D } { \varepsilon _ { 0 } }
$$

D2 ${ } ^ { 0.60 }$ Найдите скорость изменения массы капли произвольной формы, если проводник такой же формы имеет электрическую ёмкость $C$. Капля имеет температуру $T _ { 0 }$, концентрация насыщенного пара при этой температуре равна $n _ { 0 }$, вдали от капли относительная влажность воздуха $\eta$. Также в ответе используйте $m _ { \mathrm { w } } , D , \varepsilon _ { 0 }$.

По определению ёмкости $C$ уединённого проводника:

$$
C = \frac { q } { \varphi _ { \text {пров } } - \varphi _ { \infty } } .
$$

В электростатике обычно выбирают $\varphi _ { \infty } = 0$, однако в нашей аналогии $n _ { \infty } \neq 0 \Rightarrow$ и $\varphi _ { \infty } \neq 0$. Подставим в данное соотношение $q$ через $I$, полученное в пункте $D 1$ :

$$
I \cdot \frac { \varepsilon _ { 0 } } { m _ { \mathrm { w } } \gamma D } = C \cdot \frac { n - n _ { \infty } } { \gamma } = C \cdot \frac { ( 1 - \eta ) \cdot n _ { 0 } } { \gamma } ,
$$

откуда получаем итоговый ответ:

$$
I = \frac { C m _ { \mathrm { w } } D n _ { 0 } ( 1 - \eta ) } { \varepsilon _ { 0 } } .
$$

Ответ:

$$
I = \frac { C m _ { \mathrm { w } } D n _ { 0 } ( 1 - \eta ) } { \varepsilon _ { 0 } }
$$

D3 ${ } ^ { 1.00 }$ Найдите $\frac { I ^ { \prime } - I } { I }$. Ответ выразите через $r _ { 1 } , r _ { 2 } , l$.

Решать вновь будем при помощи аналогии с электростатикой. Обозначим величины зарядов шариков $r _ { 1 }$ и $r _ { 2 }$ за $q _ { 1 }$ и $q _ { 2 }$ соответственно. Теперь воспользуемся соотношением $\varphi ( \vec { r } ) = \gamma \cdot n ( \vec { r } )$ для обоих шариков, учитывая потенциалы, который создают шарики друг на друга:

$$
\begin{aligned}
& \varphi _ { 1 } - \varphi _ { \infty } = \frac { q _ { 1 } } { 4 \pi \varepsilon _ { 0 } \cdot r _ { 1 } } + \frac { q _ { 2 } } { 4 \pi \varepsilon _ { 0 } \cdot l } = \frac { n _ { 0 } \cdot ( 1 - \eta ) } { \gamma } \\
& \varphi _ { 2 } - \varphi _ { \infty } = \frac { q _ { 2 } } { 4 \pi \varepsilon _ { 0 } \cdot r _ { 2 } } + \frac { q _ { 1 } } { 4 \pi \varepsilon _ { 0 } \cdot l } = \frac { n _ { 0 } \cdot ( 1 - \eta ) } { \gamma } .
\end{aligned}
$$

Из второго уравнения выразим $q _ { 2 }$ и подставим его в первое уравнение:

$$
q _ { 2 } = \frac { n _ { 0 } \cdot ( 1 - \eta ) } { \gamma } \cdot 4 \pi \varepsilon _ { 0 } r _ { 2 } - q _ { 1 } \cdot \frac { r _ { 2 } } { l } ,
$$


$$
\frac { q _ { 1 } } { 4 \pi \varepsilon _ { 0 } \cdot r _ { 1 } } + \frac { n _ { 0 } \cdot \frac { 1 - \eta } { \gamma } \cdot 4 \pi \varepsilon _ { 0 } \cdot r _ { 2 } - \frac { q _ { 1 } \cdot r _ { 2 } } { l } } { 4 \pi \varepsilon _ { 0 } \cdot l } = \frac { n _ { 0 } \cdot ( 1 - \eta ) } { \gamma } .
$$

Выразим отсюда $q _ { 1 }$, после чего подставим его в связь $q _ { 1 }$ и $I _ { 1 }$, полученную в пункте $D 1$.

$$
\begin{gathered}
q _ { 1 } = \frac { \frac { n _ { 0 } \cdot ( 1 - \eta ) } { \gamma } \cdot \left( 1 - \frac { r _ { 2 } } { l } \right) } { 1 - \frac { r _ { 1 } r _ { 2 } } { l ^ { 2 } } } \cdot 4 \pi \varepsilon _ { 0 } r _ { 1 } , \\
I ^ { \prime } = 4 \pi m _ { \mathrm { w } } \cdot n _ { 0 } \cdot D \cdot r _ { 1 } \cdot \frac { ( 1 - \eta ) \left( 1 - \frac { r _ { 2 } } { l } \right) } { 1 - \frac { r _ { 1 } \cdot r _ { 2 } } { l ^ { 2 } } } \approx 4 \pi m _ { \mathrm { w } } \cdot n _ { 0 } \cdot D \cdot r _ { 1 } \cdot ( 1 - \eta ) \cdot \left( 1 - \frac { r _ { 2 } } { l } \right) .
\end{gathered}
$$

Чтобы получить выражение для $I$, нужно устремить $l \rightarrow \infty$ в последнем выражении. Получим итоговый ответ:

$$
\frac { I ^ { \prime } - I } { I } = - \frac { r _ { 2 } } { l } .
$$

Ответ:

$$
\frac { I ^ { \prime } - I } { I } = - \frac { r _ { 2 } } { l }
$$
