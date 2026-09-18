---
id: solution-ocr-aupho-2015-s-q13
source: aupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/aupho/2015_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [aupho-2015-q13]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question 13
Suggested Time: 25 min
One evening a house was heated by burning 10 kg of hardwood in a slow combustion heater. The fire went out at 7:30 pm. The efficiency of the heater is 68\% and hardwood releases 1.9 MJ/kg of energy when it is burnt. The temperature both inside and outside the house was recorded and is shown in Figure 3.

![](../../../figures/solution-ocr/6e8d8984fba581a60a81ff5a.jpg)
Figure 3: The temperature inside and outside the house on this evening.

a) (i) How much energy was released by burning the hardwood?
Solution:
$$
\begin{aligned}
\text { energy released } & = \text { mass } \text { × } \text { energy per unit mass } \text { × } \text { efficiency } \\
& = 10 \mathrm {~kg} \times 1.9 \mathrm { MJ } \mathrm {~kg} ^ { - 1 } \times 68 \% \\
& = 13 \mathrm { MJ }
\end{aligned}
$$
    (ii) The total heat capacity is the amount of heat required to increase the temperature of an object by 1°C. Estimate the total heat capacity of the house.
Solution:
$$
\begin{aligned}
\text { heat capacity } & = \frac { \text { energy released } } { \text { temperature change } } \\
& = \frac { 12.92 \mathrm { MJ } } { ( 19.7 - 16.4 ) ^ { \circ } \mathrm { C } } \\
& = 3.9 \mathrm { MJ } ^ { \circ } \mathrm { C } ^ { - 1 }
\end{aligned}
$$
b) After the fire went out the house began to cool.
    (i) Draw a straight line of best fit to the linear region of the graph on p. 6 of the Answer Booklet.
Solution:

Logarithm base 10 of increase in inside temperature
![](../../../figures/solution-ocr/064d26fd4ab90ef8ed7f3ed4.jpg)

(ii) Write down an equation which describes the relationship of the line of best fit.
Solution:
Quite generally, we can represent a straight line in the form
$$
\left( y - y _ { 1 } \right) = m \left( x - x _ { 1 } \right) ,
$$
where $\left( x _ { 1 } , y _ { 1 } \right)$ is the coordinate pair of an arbitrary points on the line, and $m$ is the line's gradient. In our case, one of the coordinates on the line is given by (10 pm, 0.32), and the gradient is given by
$$
\begin{aligned}
m & = \frac { \Delta y } { \Delta x } \\
& = \frac { - 0.24 - 0.32 } { 4.0 \mathrm {~h} } \\
& = - 0.14 \mathrm {~h} ^ { - 1 } ,
\end{aligned}
$$
which uses the black markers on the plot from the previous section. This gives the final expression as
$$
\log _ { 10 } \left( T - 16.4 ^ { \circ } \mathrm { C } \right) = 0.32 - 0.14 \times ( t - 10 \mathrm {~h} ) ,
$$
where with $( t - 10 \mathrm {~h} )$ we are referring to the number of hours elapsed since 10 pm. This may be equivalently represented as
$$
T = 16.4 ^ { \circ } \mathrm { C } + \left( 2.1 ^ { \circ } \mathrm { C } \right) \times 10 ^ { - 0.14 \mathrm {~h} ^ { - 1 } \times ( t - 10 \mathrm {~h} ) } .
$$
(iii) When does this relationship apply to this house?
Solution:
This relationship is valid between approximately 10 pm and 1 am.
(iv) Does the relationship you found using the data match your expectations about how the house would cool? Explain your answer, including what your expectations are and physical reasons for them.
Solution:
Yes, this relationship makes sense physically. We would expect that a large difference between the inside and outside temperatures would result in the house cooling quickly,

while heat would flow out of the house more slowly if the temperatures were closer to one another.
c) Use your answer to 13b to make a better estimate of the total heat capacity of the house. Justify your estimate.
Solution:
The aim of this question is to estimate heat loss through the house walls, so that we can better estimate the temperature the house would have reached without this loss mechanism. A few approaches are possible here, including the following.
We can use our model to estimate the heat loss during the heating stage. The average temperature during heating is about 18 °C, so we can determine the average temperature decrease rate from the data near 11 pm. This average is then
$$
\begin{aligned}
\frac { T ( 11 : 30 ) - T ( 10 : 30 ) } { 1 \mathrm {~h} } & = 2.1 ^ { \circ } \mathrm { C } \times \left( 10 ^ { - 0.14 \times 1.5 } - 10 ^ { - 0.14 \times 0.5 } \right) \mathrm { h } ^ { - 1 } \\
& = - 0.49 ^ { \circ } \mathrm { C } \mathrm {~h} ^ { - 1 } ,
\end{aligned}
$$
and so over the 3 h heating between 4:30 and 7:30 pm, the house would have lost heat corresponding to a temperature change of 1.5 °C.
The new heat capacity would then be
$$
\begin{aligned}
\text { heat capacity } & = \frac { \text { energy released } } { \text { temperature change } } \\
& = \frac { 12.92 \mathrm { MJ } } { ( 19.7 + 1.5 - 16.4 ) ^ { \circ } \mathrm { C } } \\
& = 2.7 \mathrm { MJ } ^ { \circ } \mathrm { C } ^ { - 1 } .
\end{aligned}
$$
You could also take an alternative approach, such as extrapolating back the line you've constructed to the start of the heating time (~ 4:30 pm). This would also give an estimate of the temperature the house would have reached without the heat loss through the walls/windows.
