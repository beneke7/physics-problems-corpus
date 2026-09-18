---
id: solution-ocr-rupho-x-2026-t6-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2026/T6_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Ответ:

$$
\Phi _ { 1 } = \Phi \cdot N _ { 1 } , \quad \Phi _ { 2 } = - \Phi \cdot N _ { 2 }
$$

А2 ${ } ^ { 0.20 }$ С помощью теоремы о циркуляции для вектора напряжённости магнитного поля $\vec { H }$ найдите поток магнитного поля $\Phi$ в сердечнике. Ответ выразите через $S , \ell , \mu , I _ { 1 } , I _ { 2 } , N _ { 1 }$ и $N _ { 2 }$.

Запишем теорему о циркуляции для всего трансформатора:

$$
H \cdot l = N _ { 1 } I _ { 1 } - N _ { 2 } I _ { 2 } ,
$$

Выразим поток магнитного поля:

Ответ:

$$
\Phi = B S = \mu \mu _ { 0 } H S = \frac { \mu \mu _ { 0 } S } { l } \left( N _ { 1 } I _ { 1 } - N _ { 2 } I _ { 2 } \right)
$$

A3 ${ } ^ { 0.30 }$
Получите выражения для индуктивностей обмоток $L _ { 1 } , L _ { 2 }$ и их коэффициента взаимной индукции $M$. Ответ выразите через $S , \ell , \mu , I _ { 1 } , I _ { 2 } , N _ { 1 }$ и $N _ { 2 }$.

Ответ:

$$
\begin{aligned}
L _ { 1 } & = \frac { \partial \Phi _ { 1 } } { \partial I _ { 1 } } = \frac { \mu \mu _ { 0 } S N _ { 1 } ^ { 2 } } { l } \\
L _ { 2 } & = \frac { \partial \Phi _ { 2 } } { \partial I _ { 2 } } = \frac { \mu \mu _ { 0 } S N _ { 2 } ^ { 2 } } { l } \\
M & = \frac { \partial \Phi _ { 1 } } { \partial I _ { 2 } } = \frac { \partial \Phi _ { 2 } } { \partial I _ { 1 } } = - \frac { \mu \mu _ { 0 } S N _ { 1 } N _ { 2 } } { l }
\end{aligned}
$$

A4 ${ } ^ { 0.40 }$
Найдите ЭДС магнитной индукции $\mathcal { E } _ { 1 }$ и $\mathcal { E } _ { 2 }$, возникающие в первичной и вторичной обмотках соответственно. Ответ выразите через $\dot { I } _ { 1 } , \dot { I } _ { 2 } , L _ { 1 } , L _ { 2 }$ и $M$.
Примечания:

- ЭДС $\mathcal { E } _ { 1 }$ считается положительной, если электростатический потенциал в верхней точке а1 больше, чем в нижней a2.
- ЭДС $\mathcal { E } _ { 2 }$ считается положительной, если электростатический потенциал в верхней точке b1 больше, чем в нижней b2.

Ответ:

$$
\begin{aligned}
& \mathcal { E } _ { 1 } = \dot { \Phi } _ { 1 } = N _ { 1 } \dot { \Phi } = L _ { 1 } \dot { I } _ { 1 } + M \dot { I } _ { 2 } \\
& \mathcal { E } _ { 2 } = - \dot { \Phi } _ { 2 } = N _ { 2 } \dot { \Phi } = - L _ { 2 } \dot { I } _ { 2 } - M \dot { I } _ { 1 }
\end{aligned}
$$

A5 ${ } ^ { 0.50 }$
Получите выражение для коэффициента трансформации тока $k _ { I } \equiv \left| \tilde { I } _ { 1 } \right| / \left| \tilde { I } _ { 2 } \right|$. В ответ могут входить $L _ { 1 } , L _ { 2 } , \omega$ и $Z$.

Используя уравнения из А4 и следующие соотношения :

$$
\begin{gathered}
U _ { 2 } = I _ { 2 } Z \\
M ^ { 2 } = L _ { 1 } L _ { 2 } \\
I _ { 2 } Z = \mathcal { E } _ { 2 } = - L _ { 2 } \dot { I } _ { 2 } - M \dot { I } _ { 1 } \\
I _ { 2 } \left( Z - i \omega L _ { 2 } \right) = i \omega M I _ { 1 }
\end{gathered}
$$

получаем

Ответ:


$$
k _ { I } = \left| \frac { \tilde { I } _ { 1 } } { \tilde { I } _ { 2 } } \right| = \left| \frac { Z - i \omega L _ { 2 } } { i \omega M } \right| = \frac { \sqrt { ( \operatorname { Re } Z ) ^ { 2 } + \left( \operatorname { Im } Z - \omega L _ { 2 } \right) ^ { 2 } } } { \omega \sqrt { L _ { 1 } L _ { 2 } } }
$$

А6 ${ } ^ { 0.50 }$ Чему равен коэффициент трансформации напряжения $k _ { U } = \left| \tilde { U } _ { 2 } \right| / \left| \tilde { U } _ { 1 } \right|$ ? В ответ могут входить $L _ { 1 } , L _ { 2 } , \omega$ и $Z$.

Записывая уравнения из прошлых пунктов:

$$
\begin{gathered}
U _ { 2 } = - L _ { 2 } \dot { I } _ { 2 } - M \dot { I } _ { 1 } \\
U _ { 2 } = I _ { 2 } \cdot Z \\
U _ { 1 } = L _ { 1 } \dot { I } _ { 1 } + M \dot { I } _ { 2 }
\end{gathered}
$$

выражаем $U _ { 2 }$ через $U _ { 1 }$ :

$$
\begin{gathered}
U _ { 2 } = i \omega L _ { 2 } \frac { U _ { 2 } } { Z } + i \omega M I _ { 1 } \\
U _ { 1 } = - i \omega L _ { 1 } I _ { 1 } - i \omega M \frac { U _ { 2 } } { Z } \\
U _ { 2 } \left( 1 - \frac { i \omega L _ { 2 } } { Z } \right) = \frac { M } { L _ { 1 } } \left( U _ { 1 } - \frac { i \omega M } { Z } U _ { 2 } \right) \\
\frac { U _ { 2 } } { U _ { 1 } } = \frac { \frac { M } { L _ { 1 } } } { 1 - \frac { i \omega L _ { 2 } } { Z } + \frac { i \omega M ^ { 2 } } { Z L _ { 1 } } } = \frac { M } { L _ { 1 } } = - \frac { N _ { 2 } } { N _ { 1 } }
\end{gathered}
$$

получаем:

Ответ:

$$
k _ { U } = \left| - \frac { N _ { 2 } } { N _ { 1 } } \right| = \sqrt { \frac { L _ { 2 } } { L _ { 1 } } }
$$

A7 ${ } ^ { 0.30 }$ Запишите условие на количество витков в обмотках $N _ { 1 }$ и $N _ { 2 }$, при котором выражение (1) выполняется.

Ответ:

$$
N _ { 2 } \gg N _ { 1 }
$$

А8 ${ } ^ { 0.60 }$ Определите разность фаз $\Delta \varphi$, на которую напряжение $U _ { 1 }$ опережает ток $I _ { 1 }$. В ответ могут входить $L _ { 1 } , L _ { 2 } , \omega$ и $Z$.

$$
\begin{aligned}
& U _ { 1 } + \frac { i \omega M } { Z } \cdot U _ { 2 } = - i \omega L _ { 1 } I _ { 1 } \\
& U _ { 1 } \left( 1 - \frac { i \omega M N _ { 2 } } { Z N _ { 1 } } \right) = - i \omega L _ { 1 } I _ { 1 } \\
& U _ { 1 } = \frac { - i \omega L _ { 1 } Z N _ { 1 } } { Z N _ { 1 } - i \omega M N _ { 2 } } I _ { 1 }
\end{aligned}
$$

после преобразований:

Ответ:

$$
\operatorname { tg } \Delta \varphi = \frac { | Z | ^ { 2 } - \omega L _ { 2 } \cdot \operatorname { Im } Z } { \omega L _ { 2 } \operatorname { Re } Z }
$$

Либо, что удобно для дальнейших вычислений,

$$
\cos \Delta \varphi = \frac { \omega L _ { 2 } \operatorname { Re } Z } { | Z | \sqrt { ( \operatorname { Re } Z ) ^ { 2 } + \left( \omega L _ { 2 } - \operatorname { Im } Z \right) ^ { 2 } } }
$$

д9 ${ } ^ { 0.60 }$ Определите усредненную по времени мощность $P$ источника $U _ { 1 }$. В ответ могут входить $U _ { 0 } , Z , N _ { 1 }$ и $N _ { 2 }$.

Средняя мощность находится как:

$$
P = \frac { 1 } { 2 } \left| I _ { 1 } \right| \left| U _ { 1 } \right| \cos \Delta \varphi
$$


Подставляя получаем:

Ответ:

$$
P = \frac { U _ { 1 } ^ { 2 } \operatorname { Re } Z } { 2 | Z | ^ { 2 } } \cdot \frac { N _ { 2 } ^ { 2 } } { N _ { 1 } ^ { 2 } }
$$

Вычисления можно было существенно сократить используя следующую формулу для мощности:

$$
P = \operatorname { Re } \left( \frac { 1 } { 2 } I _ { 1 } U _ { 1 } ^ { * } \right)
$$

В1 ${ } ^ { 0.50 }$ Найдите отношение $I / I _ { A }$.

Используя формулу для $k _ { I }$ получаем ответ:

Ответ:

$$
\frac { I } { I _ { A } } = \sqrt { \frac { L _ { 1 } } { L _ { 2 } } } = N
$$

С1 ${ } ^ { 0.20 }$ Получите выражение для средней мощности $P _ { 0 }$, которая выделяется на нагрузке, если сопротивлением обмоток можно пренебречь. Ответ выразите через амплитуду входного напряжения $U _ { 0 }$ и сопротивление нагрузки $R$. Вычислите её для трансформатора, параметры которого даны в задаче ранее.

Применяя формулу для средней мощности:

Ответ:

$$
P _ { 0 } = \frac { U _ { 0 } ^ { 2 } } { 2 R } = \frac { U _ { \mathrm { rms } } ^ { 2 } } { R } = 303 \mathrm { BT }
$$

с2 ${ } ^ { 0.30 }$ По аналогии с частью А запишите уравнения, связывающие комплексные амплитуды $\tilde { U } _ { 1 } , \tilde { U } _ { 2 } , \tilde { I } _ { 1 }$ и $\tilde { I } _ { 2 }$. В ответ также могут входить $R , r$, индуктивность одной обмотки $L$ и циклическая частота $\omega$.

Ответ:

$$
\begin{gathered}
\tilde { U } _ { 1 } = - i \omega L \tilde { I } _ { 1 } + i \omega L \tilde { I } _ { 2 } + r \tilde { I } _ { 1 } \\
\tilde { U } _ { 2 } = ( R + r ) \tilde { I } _ { 2 } \\
\tilde { U } _ { 2 } = i \omega L \tilde { I } _ { 2 } - i \omega L \tilde { I } _ { 1 }
\end{gathered}
$$

с3 ${ } ^ { 0.40 }$ Выразите $\tilde { I } _ { 1 }$ и $\tilde { I } _ { 2 }$ через $\tilde { U } _ { 1 }$ и другие необходимые вам величины, в которые могут входить $R , r , L$ и $\omega$.

Выражаем:

$$
\begin{gathered}
\tilde { I } _ { 2 } ( R + r - i \omega L ) = - i \omega L \tilde { I } _ { 1 } \\
\tilde { U } _ { 1 } = \left( - i \omega L + r + \frac { \omega ^ { 2 } L ^ { 2 } } { R + r - i \omega L } \right) \tilde { I } _ { 1 } \\
\tilde { I } _ { 1 } = \frac { ( R + r - i \omega L ) \tilde { U } _ { 1 } } { ( r - i \omega L ) ( R + r - i \omega L ) + \omega ^ { 2 } L ^ { 2 } }
\end{gathered}
$$

получаем:

Ответ:

$$
\tilde { I } _ { 1 } = \frac { R + r - i \omega L } { r ( R + r ) - i \omega L ( R + 2 r ) } \tilde { U } _ { 1 }
$$


$$
\tilde { I } _ { 2 } = \frac { - i \omega L } { r ( R + r ) - i \omega L ( R + 2 r ) } \tilde { U } _ { 1 }
$$

C4 ${ } ^ { 1.10 }$ Здесь и далее работайте в пределе $r \ll R , \omega L$.
Получите выражения для мощности Джоулевых потерь $P _ { r 1 }$ и $P _ { r 2 }$, выделяющихся в первичной и вторичной обмотках. Ответ выразите через амплитуду входного напряжения $U _ { 0 }$, а также $r , \omega$ и $L$.

Вычислите суммарную мощность Джоулевых потерь на обмотках $P _ { r } = P _ { r 1 } + P _ { r 2 }$ для трансформатора, параметры которого даны ранее в задаче. Приведите в листах решений подробные выкладки для ваших расчётов.

Запишем мощность выделяющуюся на первой и второй обмотке:

$$
\begin{aligned}
& P _ { r 1 } = \frac { \left| \tilde { I } _ { 1 } \right| ^ { 2 } r } { 2 } = \frac { U _ { 0 } ^ { 2 } r } { 2 } \cdot \left| \frac { R + r - i \omega L } { r ( R + r ) - i \omega L ( R + 2 r ) } \right| ^ { 2 } \\
& P _ { r 2 } = \frac { \left| \tilde { I } _ { 2 } \right| ^ { 2 } r } { 2 } = \frac { U _ { 0 } ^ { 2 } r } { 2 } \cdot \left| \frac { - i \omega L } { r ( R + r ) - i \omega L ( R + 2 r ) } \right| ^ { 2 }
\end{aligned}
$$

Считая, что $r \ll R , \omega L$ получаем:

Ответ:

$$
P _ { r 1 } = \frac { U _ { 0 } ^ { 2 } r } { 2 } \cdot \frac { R ^ { 2 } + \omega ^ { 2 } L ^ { 2 } } { \omega ^ { 2 } L ^ { 2 } R ^ { 2 } } , \quad P _ { r 2 } = \frac { U _ { 0 } ^ { 2 } r } { 2 R ^ { 2 } }
$$

Тогда суммарная мощность потерь:

$$
P _ { r } = \frac { U _ { 0 } ^ { 2 } r } { 2 } \cdot \frac { R ^ { 2 } + 2 \omega ^ { 2 } L ^ { 2 } } { \omega ^ { 2 } L ^ { 2 } R ^ { 2 } }
$$

Проведем расчеты:

$$
\begin{gathered}
U _ { 0 } = U _ { \text {rms } } \cdot \sqrt { 2 } = 311 \mathrm { В } \\
\omega = 2 \pi f = 314 \frac { \text { рад } } { \mathrm { c } } \\
L = \frac { \mu \mu _ { 0 } S N ^ { 2 } } { l } = 0.503 \text { Гн }
\end{gathered}
$$

длина одного витка:

$$
c = 2 \pi \cdot \sqrt { \frac { S } { \pi } } = 35.4 \mathrm {~cm}
$$

Сопротивление обмотки:

$$
r = \frac { 1 } { \sigma _ { \mathrm { w } } } \cdot \frac { N c } { \frac { \pi d ^ { 2 } } { 4 } } = 2.16 \mathrm { OM }
$$

тогда

Ответ:

$$
P _ { r } = 12.4 \mathrm { Вт }
$$

D1 ${ } ^ { 0.30 }$ Запишите выражение для тангенциального электрического поля $E ( r , t )$.

Запишем поток магнитного поля через круг радиусом $r$ :

$$
\Phi = B \pi r ^ { 2 }
$$

Закон электромагнитной индукции для круга радиусом $r$ :

$$
\begin{aligned}
\mathcal { E } & = - \dot { \Phi } \\
2 \pi r E ( r , t ) & = i \omega \pi r ^ { 2 } B _ { 0 } e ^ { - i \omega t }
\end{aligned}
$$

Ответ:

$$
E ( r , t ) = \operatorname { Re } \left( \frac { B _ { 0 } \omega r } { 2 } e ^ { \frac { i \pi } { 2 } - i \omega t } \right) = \frac { B _ { 0 } \omega r } { 2 } \sin \omega t
$$


D2 ${ } ^ { 0.70 }$ Получите выражение для средней мощности Джоулевых потерь $P _ { \text {eddy } }$, выделяющихся в сердечнике. Выразите ответ через проводимость материала сердечника $\sigma _ { \mathrm { c } }$, площадь его поперечного сечения $S$, длину $\ell$, а также $B _ { 0 }$ и $f$.

Запишем мощность Джоулевых потерь в расчете на единицу объема:

$$
p _ { \text {eddy } } ( r , t ) = \sigma _ { c } E ^ { 2 } = \frac { \sigma _ { c } B _ { 0 } ^ { 2 } \omega ^ { 2 } r ^ { 2 } } { 4 } \sin ^ { 2 } \omega t
$$

усредняя по времени получим:

$$
\overline { p _ { \text {eddy } } } = \frac { \sigma _ { c } B _ { 0 } ^ { 2 } \omega ^ { 2 } r ^ { 2 } } { 8 }
$$

Тогда средняя мощность выделяющаяся на всем сердечнике:

$$
P _ { \text {eddy } } = \frac { \sigma _ { c } B _ { 0 } ^ { 2 } \omega ^ { 2 } l } { 8 } \cdot \int _ { 0 } ^ { \sqrt { \frac { S } { \pi } } } 2 \pi r ^ { 3 } d r
$$

вычисляя

Ответ:

$$
P _ { \text {eddy } } = \frac { \pi } { 4 } \cdot \sigma _ { c } B _ { 0 } ^ { 2 } f ^ { 2 } S ^ { 2 } l
$$

D3 ${ } ^ { 0.30 }$ Найдите множитель $A$.

Запишем закон электромагнитной индукции для прямоугольника с размерами $2 z \times 2 x$ :

$$
\begin{gathered}
E _ { x } ( z , t ) \cdot 4 x = - \dot { \Phi } = 2 x \cdot 2 z \cdot \operatorname { Re } \left( i \omega B _ { 0 } e ^ { - i \omega t } \right) \\
E _ { x } ( z , t ) = \operatorname { Re } \left( i \omega B _ { 0 } z e ^ { - i \omega t } \right)
\end{gathered}
$$

Ответ:

$$
A = i \omega B _ { 0 }
$$

D4 ${ } ^ { 1.40 }$ Запишите выражение для мощности $\mathrm { d } P / \mathrm { d } V$, выделяющейся в такой пластинке в расчёте на единицу объёма, усреднённой по всей высоте пластинки, а также по времени. В ответ могут входить $S , \ell , B _ { 0 } , h , \sigma _ { \mathrm { c } }$ и $f$.

Пусть теперь сердечник собран из пластин с параметрами, указанными выше в задаче. Ко вторичной обмотке всё ещё подключена нагрузка $R$. Выразите мощность $P _ { \text {eddy } } ^ { \prime }$ которая выделялась бы в сердечнике вследствие токов Фуко, через параметры, данные в задаче. Вычислите эту мощность.

Запишем выражение для мгновенной мощности в определенной точке в расчете на единицу площади:

$$
\frac { \mathrm { d } P } { \mathrm {~d} V } ( z , t ) = \sigma _ { c } E ^ { 2 } ( z , t ) = \sigma _ { c } \omega ^ { 2 } B _ { 0 } ^ { 2 } z ^ { 2 } \sin ^ { 2 } \omega t
$$

усредняя по времени получим:

$$
\frac { \mathrm { d } P } { \mathrm {~d} V } ( z ) = \frac { 1 } { 2 } \sigma _ { c } \omega ^ { 2 } B _ { 0 } ^ { 2 } z ^ { 2 }
$$

теперь усредним по высоте $z$ :

$$
\frac { \mathrm { d } P } { \mathrm {~d} V } = \frac { 1 } { 2 } \sigma _ { c } \omega ^ { 2 } B _ { 0 } ^ { 2 } \cdot \frac { 1 } { h } \int _ { - h / 2 } ^ { h / 2 } z ^ { 2 } d z = \frac { 1 } { 24 } \sigma _ { c } \omega ^ { 2 } B _ { 0 } ^ { 2 } h ^ { 2 }
$$

Ответ:

$$
\frac { \mathrm { d } P } { \mathrm {~d} V } = \frac { \pi ^ { 2 } } { 6 } \sigma _ { c } B _ { 0 } ^ { 2 } f ^ { 2 } h ^ { 2 }
$$

Найдем выражение для мощности выделяемой на всем трансформаторе:

$$
P _ { e d d y } ^ { \prime } = \frac { \mathrm { d } P } { \mathrm {~d} V } \cdot S l = \frac { \pi ^ { 2 } } { 6 } \sigma _ { c } B _ { 0 } ^ { 2 } f ^ { 2 } h ^ { 2 } S l
$$

можно заметить, что здесь мощность пропорциональна $S$, а не $S ^ { 2 }$, (как это было в случае цельного сердечника), а значит мощность потерь будет значительно ниже.

Теперь найдем амплитуду магнитного поля $B _ { 0 }$. Используем уравнение для связи потока магнитного поля через сердечник и напряжения на обмотке из части A :


$$
\begin{aligned}
U _ { 1 } & = N \dot { \Phi } = N S ( - i \omega B ) \\
B _ { 0 } & = \frac { U _ { 0 } } { 2 \pi f N S } = 0.99 \text { Тл }
\end{aligned}
$$

рассчитаем $P _ { \text {eddy } } ^ { \prime }$ :

Ответ:

$$
P _ { \mathrm { eddy } } ^ { \prime } = 0.048 \text { Вт }
$$

E1 ${ } ^ { 0.40 }$ Рассмотрим для простоты трансформатор без нагрузки. Запишите энергию, которую источник передаёт сердечнику, когда через первичную обмотку течёт ток $I$, а поток через сердечник меняется на $\mathrm { d } \Phi$. Затем выразите эту энергию через $H , \mathrm {~d} B$ и параметры сердечника.

Ответ:

$$
\mathrm { d } W = N \cdot I \mathrm {~d} \Phi = N \frac { H l } { N } S \mathrm {~d} B = S l \cdot H \mathrm {~d} B
$$

E2 ${ } ^ { 0.30 }$ Будем считать, что последнее выражение справедливо в произвольном случае. Запишите выражение для средней мощности $P _ { \text {hyst } }$ гистерезисных потерь. Ответ выразите через $H _ { \mathrm { c } } , B _ { \mathrm { s } }$ и величины, данные в начале части C. Также получите численное значение.

За один период на графике $B ( H )$ будет описана одна полная петля гистерезиса, а значит будет потеряно энергии

$$
\Delta W = S l \cdot \Delta H \Delta B = S l \cdot 2 H _ { c } \cdot 2 B _ { s } = 4 S l H _ { c } B _ { s }
$$

Тогда средняя мощность энергии в следствии гистерезиса будет равна:

$$
P _ { \mathrm { hyst } } = \frac { \Delta W } { T }
$$

Ответ:

$$
P _ { \mathrm { hyst } } = 4 S l H _ { c } B _ { s } f = 15 \text { Вт }
$$

E3 ${ } ^ { \mathbf { 0 . 5 0 } }$ Считая все вклады, посчитанные в частях C, D и E, малыми и независимыми, вычислите итоговый КПД трансформатора $\eta$.

$$
\eta = 1 - \frac { P _ { r } + P _ { \text {eddy } } + P _ { \text {hyst } } } { P _ { 0 } }
$$

Ответ:

$$
\eta = 91 \%
$$
