---
id: solution-ocr-ipho-2014-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2014/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2014-t3]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## Problem 3. Simplest model of gas discharge Solution <br> Part A. Non-self-sustained gas discharge

A1.Let us derive an equation describing the change of the electron number density with time. It is determined by the two processes; the generation of ion pairs by external ionizer and the recombination of electrons with ions. At ionization process electrons and ions are generated in pairs, and at recombination processthey disappear in pairs as well.Thus, their concentrations are alwaysequal at any given time, i.e.

$$
\begin{equation*}
n ( t ) = n _ { e } ( t ) = n _ { i } ( t ) \tag{A1.1}
\end{equation*}
$$

Then the equation describing the numberdensityevolution of electrons and ions in time can be written as

$$
\begin{equation*}
\frac { d n ( t ) } { d t } = Z _ { e x t } - r n ( t ) ^ { 2 } \tag{A1.2}
\end{equation*}
$$

It is easy to show that at $t \rightarrow 0$ the function $\tanh b t \rightarrow 0$, therefore, by virtue of the initial condition $n ( 0 ) = 0$,one finds

$$
\begin{equation*}
n _ { 0 } = 0 \tag{A1.3}
\end{equation*}
$$

Substituting $n _ { e } ( t ) = a \tanh b t$ in (A1.2) and separating it in the independent functions (hyperbolic, or 1 and $e ^ { x }$ ), one gets

$$
\begin{align*}
& a = \sqrt { \frac { Z _ { e x t } } { r } }  \tag{A1.4}\\
& b = \sqrt { r Z _ { e x t } } \tag{A1.5}
\end{align*}
$$

A2.According to equation (A1.4) the number density of electronsat steady-state is expressed in terms of the external ionizer activity as

$$
\begin{align*}
& n _ { e 1 } = \sqrt { \frac { Z _ { \text {ext } 1 } } { r } }  \tag{A2.1}\\
& n _ { e 2 } = \sqrt { \frac { Z _ { \text {ext } 2 } } { r } }  \tag{A2.2}\\
& n _ { e } = \sqrt { \frac { Z _ { \text {ext } 1 } + Z _ { \text {ext } 2 } } { r } } \tag{A2.3}
\end{align*}
$$

Thus,the following analogue of the Pythagorean theorem is obtained as

$$
\begin{equation*}
n _ { e } = \sqrt { n _ { e 1 } ^ { 2 } + n _ { e 2 } ^ { 2 } } = 20.0 \cdot 10 ^ { 10 } \mathrm {~cm} ^ { - 3 } . \tag{A2.4}
\end{equation*}
$$

A3.In the steady state, the balance equations of electrons and ions in the tube volume take the form

$$
\begin{align*}
& Z _ { \text {ext } } S L = r n _ { e } n _ { i } S L + \frac { I _ { e } } { e }  \tag{A3.1}\\
& Z _ { \text {ext } } S L = r n _ { e } n _ { i } S L + \frac { I _ { i } } { e } \tag{A3.2}
\end{align*}
$$

It follows from equations (A3.1) and (A3.2) that the ion and electron currents are equal, i.e.

$$
\begin{equation*}
I _ { e } = I _ { i } \tag{A3.3}
\end{equation*}
$$

At the same time the total current in each tube section is the sum of the electron and ion currents

$$
\begin{equation*}
I = I _ { e } + I _ { i } \tag{A3.4}
\end{equation*}
$$

By definition ofthe current density the following relations hold

$$
\begin{align*}
& I _ { e } = \frac { I } { 2 } = e n _ { e } v S = e \beta n _ { e } E S  \tag{A3.5}\\
& I _ { i } = \frac { I } { 2 } = e n _ { i } v S = e \beta n _ { i } E S \tag{A3.6}
\end{align*}
$$

Substituting (A3.5) and (A3.6) into (A3.1) and (A3.2), the following quadratic equation for the current is derived

$$
\begin{equation*}
Z _ { \text {ext } } S L = r S L \left( \frac { I } { 2 e \beta E S } \right) ^ { 2 } + \frac { I } { 2 e } \tag{A3.7}
\end{equation*}
$$

The electric field strength in the gas is equal to

$$
\begin{equation*}
E = \frac { U } { L } \tag{A3.8}
\end{equation*}
$$

and solution to the quadratic equation (A3.7) takes the form

$$
\begin{equation*}
I = \frac { e \beta ^ { 2 } U ^ { 2 } S } { r L ^ { 3 } } \left( - 1 \pm \sqrt { 1 + \frac { 4 r Z _ { e x t } L ^ { 4 } } { \beta ^ { 2 } U ^ { 2 } } } \right) \tag{A3.9}
\end{equation*}
$$


It is obvious that only positive root does make sense, i.e.

$$
\begin{equation*}
I = \frac { e \beta ^ { 2 } U ^ { 2 } S } { r L ^ { 3 } } \left( \sqrt { 1 + \frac { 4 r Z _ { e x t } L ^ { 4 } } { \beta ^ { 2 } U ^ { 2 } } } - 1 \right) \tag{A3.10}
\end{equation*}
$$

A4.At low voltages (A3.10) simplifies and gives the following expression

$$
\begin{equation*}
I = 2 U e \beta \sqrt { \frac { Z _ { e x t } } { r } } \frac { S } { L } . \tag{A4.1}
\end{equation*}
$$

which is actually the Ohm law.
Using the well-known relation

$$
\begin{equation*}
R = \frac { U } { I } \tag{A4.2}
\end{equation*}
$$

together with

$$
\begin{equation*}
R = \rho \frac { L } { S } \tag{A4.3}
\end{equation*}
$$

one gets

$$
\begin{equation*}
\rho = \frac { 1 } { 2 e \beta } \sqrt { \frac { r } { Z _ { e x t } } } \tag{A4.4}
\end{equation*}
$$

## Part B. Self-sustained gas discharge

B1.Consider a gas layer located between $x$ and $x + d x$.The rate of change in the electron number inside the layer due to the electric current is givenfor a small time interval $d t$ by

$$
\begin{equation*}
d N _ { e } ^ { I } = \frac { I _ { e } ( x + d x ) - I _ { e } ( x ) } { e } d t = \frac { 1 } { e } \frac { d I _ { e } ( x ) } { d x } d x d t . \tag{B1.1}
\end{equation*}
$$

This change is due to the effect of the external ionization and the electron avalanche formation.
The external ionizer creates the following number of electrons in the volume $S d x$

$$
\begin{equation*}
d N _ { e } ^ { e x t } = Z _ { e x t } S d x d t \tag{B1.2}
\end{equation*}
$$

whereas the electron avalanche produces the number of electrons found as

$$
\begin{equation*}
d N _ { e } ^ { a } = \alpha N _ { e } d l = n _ { e } S d x v d t = \alpha \frac { I _ { e } ( x ) } { e } d x d t \tag{B1.3}
\end{equation*}
$$

The balance equationfor the number of electrons is written as

$$
\begin{equation*}
d N _ { e } ^ { I } = d N _ { e } ^ { e x t } + d N _ { e } ^ { a } \tag{B1.4}
\end{equation*}
$$

whichresults in the following differential equation for the electron current

$$
\begin{equation*}
\frac { d I _ { e } ( x ) } { d x } = e Z _ { e x t } S + \alpha I _ { e } ( x ) \tag{B1.5}
\end{equation*}
$$

On substituting $I _ { e } ( x ) = C _ { 1 } e ^ { A _ { 1 } x } + A _ { 2 }$, one derives

$$
\begin{align*}
& A _ { 1 } = \alpha  \tag{B1.6}\\
& A _ { 2 } = - \frac { e Z _ { e x t } S } { \alpha } \tag{B1.7}
\end{align*}
$$

B2.Given the fact that the ions flow in the direction opposite to the electron motion,the balance equationfor the number of ionsis written as

$$
\begin{equation*}
d N _ { i } ^ { I } = d N _ { i } ^ { e x t } + d N _ { i } ^ { a } \tag{B2.1}
\end{equation*}
$$

where

$$
\begin{align*}
& d N _ { i } ^ { I } = \frac { I _ { i } ( x ) - I _ { i } ( x + d x ) } { e } d t = - \frac { 1 } { e } \frac { d I _ { i } ( x ) } { d x } d x d t  \tag{B2.2}\\
& d N _ { i } ^ { e x t } = Z _ { e x t } S d x d t  \tag{B2.3}\\
& d N _ { i } ^ { a } = \alpha \frac { I _ { e } ( x ) } { e } d x d t \tag{B2.4}
\end{align*}
$$

Hence, the following differential equation for the ion current is obtained

$$
\begin{equation*}
- \frac { d I _ { i } ( x ) } { d x } = e Z _ { e x t } S + \alpha I _ { e } ( x ) . \tag{B2.5}
\end{equation*}
$$

Onsubstituting the previouslyfound electron current together with the ion current, $I _ { i } ( x ) = C _ { 2 } +$ $B _ { 1 } e ^ { B _ { 2 } x }$, yields

$$
\begin{align*}
& B _ { 1 } = - C _ { 1 }  \tag{B2.6}\\
& B _ { 2 } = \alpha \tag{B2.7}
\end{align*}
$$

B3.Sincetheionsstartstomovefrom the anode located at $x = L$, the following condition holds

$$
\begin{equation*}
I _ { i } ( L ) = 0 \tag{B3.1}
\end{equation*}
$$

B4.By definition of secondary electron emission coefficient the following condition should be imposed

$$
\begin{equation*}
I _ { e } ( 0 ) = \gamma I _ { i } ( 0 ) \tag{B4.1}
\end{equation*}
$$


B5.Total current in each tube section is the sum of the electron and ion currents:

$$
\begin{equation*}
I = I _ { e } + I _ { i } = C _ { 2 } - \frac { e Z _ { e x t } S } { \alpha } \tag{B5.1}
\end{equation*}
$$

Aftersubstituting the boundary conditions (B3.1) and (B4.1):

$$
\begin{equation*}
C _ { 2 } - C _ { 1 } e ^ { \alpha L } = 0 \tag{B5.2}
\end{equation*}
$$

and

$$
\begin{equation*}
C _ { 1 } - \frac { e Z _ { e x t } S } { \alpha } = \gamma \left( C _ { 2 } - C _ { 1 } \right) \tag{B5.3}
\end{equation*}
$$

Solving (B5.2) and (B5.3) one can obtain:

$$
\begin{equation*}
C _ { 2 } = \frac { e Z _ { e x t } S } { \alpha } \left( \frac { 1 } { e ^ { - \alpha L } ( 1 + \gamma ) - \gamma } \right) \tag{B5.4}
\end{equation*}
$$

So the total current:

$$
\begin{equation*}
I = \frac { e Z _ { e x t } S } { \alpha } \left( \frac { 1 } { e ^ { - \alpha L } ( 1 + \gamma ) - \gamma } - 1 \right) \tag{B5.5}
\end{equation*}
$$

B6.When the discharge gap length is increased, the denominator in formula (B5.1) decreases. At that moment, when it turns zero, the electric current in the gas becomes self-sustaining and external ionizer can be turned off. Thus,

$$
\begin{equation*}
L _ { c r } = \frac { 1 } { \alpha } \ln \left( 1 + \frac { 1 } { \gamma } \right) \tag{B6.1}
\end{equation*}
$$
