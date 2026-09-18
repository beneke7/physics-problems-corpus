---
id: solution-ocr-rupho-y-2022-t1-s
source: rupho-y
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-y/2022/T1_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Подсказка: согласно распределению Больцмана, концентрация $n$ частиц с энергией $E$ пропорциональна $\exp \left( - \frac { E } { k T } \right)$, где $T$ - абсолютная температура среды.

Рассмотрим участок раствора снаружи мембраны, имеющий единичную площадь и заключённый между координатами $x$ и $x + \mathrm { d } x$. Для него по теореме Гаусса

$$
E ( x + \mathrm { d } x ) - E ( x ) = \frac { 1 } { \varepsilon \varepsilon _ { 0 } } e n ( x ) \mathrm { d } x .
$$

Поскольку

$$
E ( x ) = - \frac { \mathrm { d } \varphi } { \mathrm {~d} x }
$$

получаем

$$
\frac { \mathrm { d } ^ { 2 } \varphi } { \mathrm {~d} x ^ { 2 } } = - \frac { e } { \varepsilon \varepsilon _ { 0 } } n ( x ) .
$$

Потенциальная энергия положительного иона в этом поле равна $e \varphi ( x )$, поэтому для концентрации ионов из распределения Больцмана получим

$$
n ( x ) = n _ { 0 } e ^ { - \frac { e \varphi ( x ) } { k T } } .
$$

Наконец,

$$
\frac { \mathrm { d } ^ { 2 } \varphi } { \mathrm {~d} x ^ { 2 } } = - \frac { e n _ { 0 } } { \varepsilon \varepsilon _ { 0 } } \exp \left( - \frac { e \varphi } { k T } \right) .
$$

Ответ:

$$
\frac { \mathrm { d } ^ { 2 } \varphi } { \mathrm {~d} x ^ { 2 } } = - \frac { e n _ { 0 } } { \varepsilon \varepsilon _ { 0 } } \exp \left( - \frac { e \varphi } { k T } \right)
$$

A2 ${ } ^ { 0.30 }$ Запишите граничные условия, которым удовлетворяет потенциал $\varphi$ на поверхности мембраны, т.е найдите $\varphi ( 0 ) , \frac { d \varphi } { d x } ( 0 )$.

По условию $\varphi ( 0 ) = 0$. Поскольку клеточная мембрана представляет собой равномерно заряженную сферу, поле снаружи у её поверхности равно

$$
E ( 0 ) = \frac { - \sigma } { \varepsilon \varepsilon _ { 0 } } ,
$$

откуда

$$
\frac { \mathrm { d } \varphi } { \mathrm {~d} x } ( 0 ) = - E ( 0 ) = \frac { \sigma } { \varepsilon \varepsilon _ { 0 } } .
$$

Ответ:

$$
\varphi ( 0 ) = 0 , \quad \frac { \mathrm {~d} \varphi } { \mathrm {~d} x } ( 0 ) = \frac { \sigma } { \varepsilon \varepsilon _ { 0 } }
$$

А3 ${ } ^ { 0.80 }$ Определите $n _ { 0 } , A _ { 1 }$ и $B _ { 1 }$. Выразите $\varphi ( x )$ и $n ( x )$ (концентрацию положительных ионов в точке $x$ ) через $\sigma , \varepsilon , \varepsilon _ { 0 } , T$, $e$ и $k$.

Подставим функцию $\varphi ( x ) = A _ { 1 } \ln \left( 1 + B _ { 1 } x \right)$ в уравнение, полученное в $\mathbf { A 1 }$ :

$$
- \frac { A _ { 1 } B _ { 1 } ^ { 2 } } { \left( 1 + B _ { 1 } x \right) ^ { 2 } } = - \frac { e n _ { 0 } } { \varepsilon \varepsilon _ { 0 } } \left( 1 + B _ { 1 } x \right) ^ { - \frac { e A _ { 1 } } { k T } }
$$

Отсюда получаем

$$
A _ { 1 } = \frac { 2 k T } { e } , \quad B _ { 1 } = \sqrt { \frac { n _ { 0 } e ^ { 2 } } { 2 \varepsilon \varepsilon _ { 0 } k T } } .
$$

Подставив $\varphi ( x ) = A _ { 1 } \ln \left( 1 + B _ { 1 } x \right)$ с найденными $A _ { 1 }$ и $B _ { 1 }$ в уравнение $\frac { \mathrm { d } \varphi } { \mathrm { d } x } ( 0 ) = \frac { \sigma } { \varepsilon \varepsilon _ { 0 } }$, полученное в пункте A2, имеем

$$
A _ { 1 } B _ { 1 } = \frac { \sigma } { \varepsilon \varepsilon _ { 0 } }
$$

откуда непосредственно получается

$$
B _ { 1 } = \frac { \sigma e } { 2 \varepsilon \varepsilon _ { 0 } k T } , \quad n _ { 0 } = \frac { \sigma ^ { 2 } } { 2 \varepsilon \varepsilon _ { 0 } k T } .
$$

Тогда выражение для потенциала принимает вид


$$
\varphi ( x ) = \frac { 2 k T } { e } \ln \left( 1 + \frac { \sigma e x } { 2 \varepsilon \varepsilon _ { 0 } k T } \right) .
$$

Из уравнения

$$
n ( x ) = n _ { 0 } e ^ { - \frac { e \varphi ( x ) } { k T } }
$$

получим, наконец,

$$
n ( x ) = \frac { \sigma ^ { 2 } } { 2 \varepsilon \varepsilon _ { 0 } k T } \frac { 1 } { \left( 1 + \frac { \sigma e x } { 2 \varepsilon \varepsilon _ { 0 } k T } \right) ^ { 2 } } .
$$

Ответ:

$$
\begin{gathered}
A _ { 1 } = \frac { 2 k T } { e } , \quad B _ { 1 } = \frac { \sigma e } { 2 \varepsilon \varepsilon _ { 0 } k T } , \quad n _ { 0 } = \frac { \sigma ^ { 2 } } { 2 \varepsilon \varepsilon _ { 0 } k T } , \\
\varphi ( x ) = \frac { 2 k T } { e } \ln \left( 1 + \frac { \sigma e x } { 2 \varepsilon \varepsilon _ { 0 } k T } \right) , \\
n ( x ) = \frac { \sigma ^ { 2 } } { 2 \varepsilon \varepsilon _ { 0 } k T } \frac { 1 } { \left( 1 + \frac { \sigma e x } { 2 \varepsilon \varepsilon _ { 0 } k T } \right) ^ { 2 } }
\end{gathered}
$$

A4 ${ } ^ { 0.40 }$ Покажите, что полученное $n ( x )$ гарантирует электрическую нейтральность системы.

Ответ: Действительно, заряд положительных ионов, приходящийся на единицу площади мембраны, равен:

$$
e \int _ { 0 } ^ { + \infty } n ( x ) \mathrm { d } x = \frac { \sigma ^ { 2 } e } { 2 \varepsilon \varepsilon _ { 0 } k T } \int _ { 0 } ^ { + \infty } \frac { 1 } { \left( 1 + \frac { \sigma e x } { 2 \varepsilon \varepsilon _ { 0 } k T } \right) ^ { 2 } } \mathrm {~d} x = \sigma \int _ { 0 } ^ { + \infty } \frac { 1 } { ( 1 + y ) ^ { 2 } } \mathrm {~d} y = \sigma
$$

A5 ${ } ^ { 1.50 }$ В расчете на единицу площади мембраны найдите энергию электрического поля $U _ { f }$ и сумму потенциальных энергий положительных ионов $U _ { e }$ в этом поле.

Плотность энергии электрического поля

$$
u _ { f } = \frac { 1 } { 2 } \varepsilon \varepsilon _ { 0 } E ^ { 2 } = \frac { 1 } { 2 } \varepsilon \varepsilon _ { 0 } \left( \frac { \mathrm {~d} \varphi } { \mathrm {~d} x } \right) ^ { 2 } .
$$

Из полученных в предыдущих пунктах формул имеем

$$
\frac { \mathrm { d } \varphi } { \mathrm {~d} x } = \frac { 2 k T } { e } \frac { \frac { \sigma e } { 2 \varepsilon \varepsilon _ { 0 } k T } } { 1 + \frac { \sigma e } { 2 \varepsilon \varepsilon _ { 0 } k T } x } .
$$

Отсюда находим энергию поля:

$$
\begin{gathered}
U _ { f } = \frac { 1 } { 2 } \varepsilon \varepsilon _ { 0 } \int _ { 0 } ^ { \infty } \left( \frac { \mathrm { d } \varphi } { \mathrm {~d} x } \right) ^ { 2 } \mathrm {~d} x = \frac { \sigma k T } { e } \int _ { 0 } ^ { \infty } \frac { \frac { \sigma e } { 2 \varepsilon \varepsilon _ { 0 } k T } } { \left[ 1 + \frac { \sigma e } { 2 \varepsilon \varepsilon _ { 0 } k T } x \right] ^ { 2 } } \mathrm {~d} x = \\
= \frac { \sigma k T } { e } \int _ { 0 } ^ { \infty } \frac { 1 } { ( 1 + y ) ^ { 2 } } \mathrm {~d} y = \frac { \sigma k T } { e }
\end{gathered}
$$

Сумма потенциальных энергий положительных ионов в этом поле равна

$$
\begin{gathered}
U _ { e } = \int _ { 0 } ^ { \infty } e n ( x ) \varphi ( x ) \mathrm { d } x = \frac { \sigma ^ { 2 } } { 2 \varepsilon \varepsilon _ { 0 } k T } 2 k T \int _ { 0 } ^ { \infty } \frac { \ln \left( 1 + \frac { \sigma e } { 2 \varepsilon \varepsilon _ { 0 } k T } x \right) } { \left( 1 + \frac { \sigma e } { 2 \varepsilon \varepsilon _ { 0 } k T } x \right) ^ { 2 } } \mathrm {~d} x = \\
= \frac { 2 \sigma k T } { e } \int _ { 0 } ^ { \infty } \frac { \ln ( 1 + y ) } { ( 1 + y ) ^ { 2 } } \mathrm {~d} y = - \frac { 2 \sigma k T } { e } \int _ { 0 } ^ { \infty } \ln ( 1 + y ) \mathrm { d } \frac { 1 } { 1 + y } = \\
= \frac { 2 \sigma k T } { e } \int _ { 0 } ^ { \infty } \frac { 1 } { ( 1 + y ) ^ { 2 } } \mathrm {~d} y = \frac { 2 \sigma k T } { e }
\end{gathered}
$$

Ответ:

$$
U _ { f } = \frac { \sigma k T } { e } , \quad U _ { e } = \frac { 2 \sigma k T } { e }
$$


Аналогично А1, потенциал удовлетворяет дифференциальному уравнению

$$
\frac { \mathrm { d } ^ { 2 } \varphi } { \mathrm {~d} x ^ { 2 } } = - \frac { e n _ { 0 } } { \varepsilon \varepsilon _ { 0 } } \exp \left( - \frac { e \varphi } { k T } \right) \quad [ - D < x < D , \varphi ( 0 ) = 0 ] .
$$

Подставляя в него функцию $\varphi ( x ) = A _ { 2 } \ln \left[ \cos \left( B _ { 2 } x \right) \right]$, имеем

$$
\frac { A _ { 2 } B _ { 2 } ^ { 2 } } { \cos ^ { 2 } ( B x ) } = \frac { e n _ { 0 } } { \varepsilon \varepsilon _ { 0 } } [ \cos ( B x ) ] ^ { - \frac { e A } { k T } }
$$

Отсюда сразу же получаем

$$
A _ { 2 } = \frac { 2 k T } { e } , \quad B _ { 2 } = \sqrt { \frac { n _ { 0 } e ^ { 2 } } { 2 \varepsilon \varepsilon _ { 0 } k T } } .
$$

Ответ:

$$
A _ { 2 } = \frac { 2 k T } { e } , \quad B _ { 2 } = \sqrt { \frac { n _ { 0 } e ^ { 2 } } { 2 \varepsilon \varepsilon _ { 0 } k T } }
$$

В2 ${ } ^ { 0.50 }$ Введём величину $\theta = B _ { 2 } D$.
Из граничных условий на поверхности мембраны получите уравнение, связывающее $\theta$ и $e , \sigma , D , \varepsilon , \varepsilon _ { 0 } , k$ и $T$.

Аналогично А2, граничное условие имеет вид

$$
\frac { \mathrm { d } \varphi } { \mathrm {~d} x } ( - D ) = \frac { \sigma } { \varepsilon \varepsilon _ { 0 } } .
$$

Для функции $\varphi ( x ) = A _ { 2 } \ln \left[ \cos \left( B _ { 2 } x \right) \right]$ имеем

$$
\frac { \mathrm { d } \varphi } { \mathrm {~d} x } = - A _ { 2 } B _ { 2 } \operatorname { tg } \left( B _ { 2 } x \right) ,
$$

откуда

$$
A _ { 2 } B _ { 2 } \operatorname { tg } \left( B _ { 2 } D \right) = \frac { \sigma } { \varepsilon \varepsilon _ { 0 } } .
$$

Подставив выражение для $A _ { 2 }$ из $\mathbf { B 1 }$, получим

$$
B _ { 2 } D \operatorname { tg } \left( B _ { 2 } D \right) = \frac { \sigma e D } { 2 \varepsilon \varepsilon _ { 0 } k T }
$$

что можно переписать через $\theta \equiv B _ { 2 } D$ в виде

$$
\theta \operatorname { tg } \theta = \frac { \sigma e D } { 2 \varepsilon \varepsilon _ { 0 } k T } \quad \left[ 0 < \theta < \frac { \pi } { 2 } \right] .
$$

Ответ:

$$
\theta \operatorname { tg } \theta = \frac { e \sigma D } { 2 \varepsilon \varepsilon _ { 0 } k T } \quad \left[ 0 < \theta < \frac { \pi } { 2 } \right]
$$

Вз ${ } ^ { 0.40 }$ Выразите $n _ { 0 }$ через $D , \sigma , \varepsilon , \varepsilon _ { 0 } , T , e , k$ и $\theta$.

Поскольку $B _ { 2 } = \frac { \theta } { D }$, то

$$
n _ { 0 } = \frac { 2 \varepsilon \varepsilon _ { 0 } k T } { e ^ { 2 } } B _ { 2 } ^ { 2 } = \frac { 2 \varepsilon \varepsilon _ { 0 } k T \theta ^ { 2 } } { e ^ { 2 } D ^ { 2 } } .
$$

Ответ:

$$
n _ { 0 } = \frac { 2 \varepsilon \varepsilon _ { 0 } k T \theta ^ { 2 } } { e ^ { 2 } D ^ { 2 } }
$$

В4 ${ } ^ { 0.50 }$ Найдите разность $\Delta n \equiv n ( \pm D ) - n _ { 0 }$ между концентрациями положительных ионов у поверхности двух мембран и посередине между ними. Выразите ответ через $\sigma , \varepsilon , T$ и $k$.

Из распределения Больцмана при подстановке функции $\varphi ( x ) = A _ { 2 } \ln \left[ \cos \left( B _ { 2 } x \right) \right]$ получим выражение для концентрации в следующем виде:


$$
n ( x ) = n _ { 0 } e ^ { - \frac { e \varphi ( x ) } { k T } } = n _ { 0 } \left[ \cos \left( B _ { 2 } x \right) \right] ^ { - \frac { e A _ { 2 } } { k T } } = n _ { 0 } \frac { 1 } { \cos ^ { 2 } B _ { 2 } x }
$$

откуда

$$
n ( \pm D ) = n _ { 0 } \frac { 1 } { \cos ^ { 2 } \left( B _ { 2 } D \right) } = n _ { 0 } \left( 1 + \operatorname { tg } ^ { 2 } B _ { 2 } D \right) = n _ { 0 } + n _ { 0 } \operatorname { tg } ^ { 2 } \theta
$$

Заметим, что

$$
n _ { 0 } \operatorname { tg } ^ { 2 } \theta = \frac { 2 \varepsilon \varepsilon _ { 0 } k T } { D ^ { 2 } e ^ { 2 } } ( \theta \operatorname { tg } \theta ) ^ { 2 } = \frac { 2 \varepsilon \varepsilon _ { 0 } k T } { D ^ { 2 } e ^ { 2 } } \left( \frac { \sigma e D } { 2 \varepsilon \varepsilon _ { 0 } k T } \right) ^ { 2 } = \frac { \sigma ^ { 2 } } { 2 \varepsilon \varepsilon _ { 0 } k T } .
$$

Таким образом,

$$
\Delta n = n ( \pm D ) - n _ { 0 } = \frac { \sigma ^ { 2 } } { 2 \varepsilon \varepsilon _ { 0 } k T }
$$

Ответ:

$$
\Delta n = \frac { \sigma ^ { 2 } } { 2 \varepsilon \varepsilon _ { 0 } k T }
$$

В5 ${ } ^ { 0.50 }$ Покажите, что полученное $n ( x )$ гарантирует электрическую нейтральность системы.

Ответ: Аналогично А4, заряд положительных ионов, приходящийся на единицу площади системы, равен:

$$
\int _ { - D } ^ { D } e n ( x ) \mathrm { d } x = e n _ { 0 } \int _ { - D } ^ { D } \frac { \mathrm {~d} x } { \cos ^ { 2 } \left( B _ { 2 } x \right) } = \frac { 2 e } { B _ { 2 } } \frac { 2 \varepsilon \varepsilon _ { 0 } k T \theta ^ { 2 } } { e ^ { 2 } D ^ { 2 } } \tan \theta = \frac { 2 e } { B _ { 2 } } \frac { 2 \varepsilon \varepsilon _ { 0 } k T \theta } { e ^ { 2 } D ^ { 2 } } \frac { \sigma e D } { 2 \varepsilon \varepsilon _ { 0 } k T } = 2 \sigma
$$

В6 ${ } ^ { 1.50 }$ Найдите полную силу $f$, действующую на единицу площади мембраны. Гидростатическим давлением можно пренебречь. Ответ выразите через $e , D$, $\theta , \varepsilon , \varepsilon _ { 0 } , k$ и $T$

Подсказка: положительные ионы в воде ведут себя как идеальный газ и локально находятся в тепловом равновесии.

На каждую из мембран действуют заряды положительных ионов и другой мембраны. Поскольку система в целом электронейтральна, суммарный заряд ионов и одной из мембран равен заряду мембраны, взятому с противоположным знаком. Таким образом, система в некотором смысле эквивалентна плоскому конденсатору, для которого, как известно,

$$
f _ { e } = \frac { \sigma ^ { 2 } } { 2 \varepsilon \varepsilon _ { 0 } } ,
$$

причём $f _ { e }$ направлена от одной мембраны к другой. Давление, создаваемое положительными ионами как идеальным газом, равно

$$
f _ { h } = n ( \pm D ) k T = \left( n _ { 0 } + \frac { \sigma ^ { 2 } } { 2 \varepsilon \varepsilon _ { 0 } k T } \right) k T = \frac { 2 \varepsilon \varepsilon _ { 0 } k ^ { 2 } T ^ { 2 } \theta ^ { 2 } } { e ^ { 2 } D ^ { 2 } } + \frac { \sigma ^ { 2 } } { 2 \varepsilon \varepsilon _ { 0 } } .
$$

Результирующая сила будет расталкивать мембраны и равна

$$
f = f _ { h } - f _ { e } = n _ { 0 } k T = \frac { 2 \varepsilon \varepsilon _ { 0 } k ^ { 2 } T ^ { 2 } \theta ^ { 2 } } { e ^ { 2 } D ^ { 2 } } .
$$

## Второй способ

Плоскость $x = 0$ делит систему на две части. В силу симметрии и электронейтральности системы как целого, каждая из этих частей также будет электронейтральна, а потому эти части не будут взаимодействовать друг с другом электростатически. Таким образом, взаимодействие частей сводится только к давлению идеального газа положительных ионов, равного

$$
f _ { h 0 } = n _ { 0 } k T .
$$

Поскольку каждая из частей находится в равновесии, то

$$
f = f _ { h 0 } = n _ { 0 } k T = \frac { 2 \varepsilon \varepsilon _ { 0 } k ^ { 2 } T ^ { 2 } \theta ^ { 2 } } { e ^ { 2 } D ^ { 2 } } .
$$

Ответ:

$$
f = \frac { 2 \varepsilon \varepsilon _ { 0 } k ^ { 2 } T ^ { 2 } \theta ^ { 2 } } { e ^ { 2 } D ^ { 2 } }
$$


В7 ${ } ^ { 1.80 }$ Для сравнительно малых расстояний $D$ зависимость $f ( D )$ имеет вид: $f = k _ { 1 } D ^ { \alpha }$, а для больших: $f = k _ { 2 } D ^ { \beta }$. Найдите $\alpha$ и $\beta$.

Как было получено в B6,

$$
f \propto \left( \frac { \theta } { D } \right) ^ { 2 } ,
$$

где $\theta$, согласно В2, удовлетворяет уравнению

$$
\theta \operatorname { tg } \theta = \frac { e \sigma D } { 2 \varepsilon \varepsilon _ { 0 } k T }
$$

т.е. $\theta$ также зависит от $D$.

Рассмотрим случай $\frac { e \sigma D } { 2 \varepsilon \varepsilon _ { 0 } k T } \ll 1$. Для него $\operatorname { tg } \theta \approx \theta$, поэтому

$$
\theta \approx \sqrt { \frac { e \sigma D } { 2 \varepsilon \varepsilon _ { 0 } k T } } \propto \sqrt { D } ,
$$

потому

$$
f \propto \left( \frac { \sqrt { D } } { D } \right) ^ { 2 } = \frac { 1 } { D }
$$

т.е. $\alpha = - 1$.

Рассмотрим теперь случай $\frac { e \sigma D } { 2 \varepsilon \varepsilon _ { 0 } k T } \gg 1$. Для него $\theta \approx \frac { \pi } { 2 } =$ const, поэтому

$$
f \propto \frac { 1 } { D ^ { 2 } } ,
$$

т.е. $\beta = - 2$.

Ответ:

$$
\alpha = - 1 , \quad \beta = - 2
$$
