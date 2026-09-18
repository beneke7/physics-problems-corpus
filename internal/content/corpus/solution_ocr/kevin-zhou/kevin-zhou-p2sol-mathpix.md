---
id: solution-ocr-kevin-zhou-p2sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
mapped_problems: []
verification_status: promoted
canonical_solution: false
provenance_note: "Mathpix PDF API Markdown conversion; promoted without manual proofreading."
---
## Problem Solving II: Data and Uncertainty

For some entertaining general discussion, see chapters I-5 and I-6 of the Feynman lectures. There is a total of 74 points.

## 1 Basic Probability

Idea 1
If a quantity $X$ has the probability distribution $p ( x )$, that means

$$
\text { the probability that } a \leq X \leq b \text { is } \int _ { a } ^ { b } p ( x ) d x \text {. }
$$

In particular, the total probability has to sum to one, so

$$
\int _ { - \infty } ^ { \infty } p ( x ) d x = 1
$$

Using the probability distribution, we can calculate expectation values, i.e. averages. For example, the expectation value of $X$, also called the mean, is

$$
\langle X \rangle = \int _ { - \infty } ^ { \infty } x p ( x ) d x
$$

while the expectation value of an arbitrary function of $X$ is

$$
\langle f ( X ) \rangle = \int _ { - \infty } ^ { \infty } f ( x ) p ( x ) d x
$$

One especially important quantity is the variance of $X$, defined as

$$
\operatorname { var } X = \left\langle X ^ { 2 } \right\rangle - \langle X \rangle ^ { 2 } .
$$

The standard deviation is defined by $\sigma _ { X } = \sqrt { \operatorname { var } X }$. It describes how "spread out" the distribution of $X$ is, and it will play an important role in uncertainty analysis.
[1] Problem 1. Suppose that $x$ is a length. What are the dimensions of $p ( x ) , \langle X \rangle$, var $X$, and $\sigma _ { X }$ ?
Solution. Since $p ( x ) d x$ is dimensionless, we have

$$
[ p ( x ) ] = L ^ { - 1 }
$$

where $L$ denotes length. Similarly,

$$
[ \langle X \rangle ] = L , \quad [ \operatorname { var } X ] = L ^ { 2 } , \quad \left[ \sigma _ { X } \right] = L .
$$

Example 1
Trains arrive at a train station every 10 minutes. If I arrive at a random time, and $X$ is the number of minutes I have to wait, what is the standard deviation of $X$ ?


Solution
We see that $X$ can be anywhere between 0 and 10, with all possibilities equally likely, so

$$
p ( x ) = \begin{cases} 1 / 10 & 0 \leq x \leq 10 \\ 0 & \text { otherwise } \end{cases}
$$

where the denominator guarantees the total probability is 1 . We have

$$
\langle X \rangle = \int _ { - \infty } ^ { \infty } x p ( x ) d x = \int _ { 0 } ^ { 10 } \frac { x } { 10 } d x = 5
$$

which makes sense, as I should have to wait half the maximum time on average, and

$$
\left\langle X ^ { 2 } \right\rangle = \int _ { - \infty } ^ { \infty } x ^ { 2 } p ( x ) d x = \int _ { 0 } ^ { 10 } \frac { x ^ { 2 } } { 10 } d x = \frac { 100 } { 3 } .
$$

Then the standard deviation is

$$
\sigma _ { X } = \sqrt { \left\langle X ^ { 2 } \right\rangle - \langle X \rangle ^ { 2 } } = \frac { 5 } { \sqrt { 3 } } \min .
$$

[3] Problem 2. Consider an exponentially distributed quantity,
$$
p ( x ) = \begin{cases} a e ^ { - a x } & x \geq 0 \\ 0 & \text { otherwise } \end{cases}
$$
for some $a > 0$. Verify that the total probability is 1 , and compute the mean and standard deviation.

Solution. First, to check normalization,

$$
\int _ { - \infty } ^ { \infty } p ( x ) d x = \int _ { 0 } ^ { \infty } a e ^ { - a x } d x = \int _ { 0 } ^ { \infty } e ^ { - u } d u = 1 - 0 = 1
$$

Now, the mean can be evaluated using integration by parts,

$$
\langle x \rangle = \int _ { 0 } ^ { \infty } x a e ^ { - a x } d x = - \left. x e ^ { - a x } \right| _ { 0 } ^ { \infty } + \int _ { 0 } ^ { \infty } e ^ { - a x } d x = 0 - \left. \frac { 1 } { a } e ^ { - a x } \right| _ { 0 } ^ { \infty } = \frac { 1 } { a } .
$$

To calculate the standard deviation, we must evaluate

$$
\left\langle x ^ { 2 } \right\rangle = \int _ { 0 } ^ { \infty } x ^ { 2 } a e ^ { - a x } d x = 0 + \int _ { 0 } ^ { \infty } ( 2 x ) e ^ { - a x } d x = \frac { 2 } { a } \langle x \rangle = \frac { 2 } { a ^ { 2 } }
$$

We thus conclude

$$
\sigma _ { X } = \sqrt { \left\langle X ^ { 2 } \right\rangle - \langle X \rangle ^ { 2 } } = \sqrt { \frac { 2 } { a ^ { 2 } } - \frac { 1 } { a ^ { 2 } } } = \frac { 1 } { a } .
$$

[2] Problem 3. The purpose of subtracting $\langle X \rangle ^ { 2 }$ in the variance is to make sure it doesn't change when a constant is added to $x$, since shifting something left or right on the number line shouldn't change its spread. Verify that for any constant $c$, $\operatorname { var } X = \operatorname { var } ( X + c )$.

Solution. We have

$$
\operatorname { var } ( X + c ) = \left\langle ( X + c ) ^ { 2 } \right\rangle - \langle X + c \rangle ^ { 2 } .
$$

By the definition of the expectation value, we have

$$
\langle A + B \rangle = \langle A \rangle + \langle B \rangle , \quad \langle c A \rangle = c \langle A \rangle
$$

for any quantities $A$ and $B$ and any constant $c$. Thus,

$$
\operatorname { var } ( X + c ) = \left\langle X ^ { 2 } \right\rangle + \langle 2 X c \rangle + \left\langle c ^ { 2 } \right\rangle - \langle X \rangle ^ { 2 } - 2 \langle X \rangle \langle c \rangle - \langle c \rangle ^ { 2 } = \operatorname { var } X
$$

as desired.
[3] Problem 4. We say $X$ is normally distributed if

$$
p ( x ) \propto e ^ { - a ( x - b ) ^ { 2 } }
$$

for some $a > 0$. For simplicity, let's shift $X$ so that it's centered about $x = 0$, so

$$
p ( x ) \propto e ^ { - a x ^ { 2 } } .
$$

You may use the result given in P1,

$$
\int _ { - \infty } ^ { \infty } e ^ { - x ^ { 2 } } d x = \sqrt { \pi } .
$$

Find the constant of proportionality in $p ( x )$, the mean, and the standard deviation.
Solution. Let $p ( x ) = k e ^ { - a x ^ { 2 } }$. We fix the constant $k$ by demanding normalization,

$$
\int _ { - \infty } ^ { \infty } k e ^ { - a x ^ { 2 } } d x = \int _ { - \infty } ^ { \infty } \frac { k } { \sqrt { a } } e ^ { - u ^ { 2 } } d u = 1
$$

Using the provided integral, we conclude

$$
k = \sqrt { \frac { a } { \pi } } .
$$

The mean is clearly zero, since the distribution is symmetric about that point. Thus, we have

$$
\operatorname { var } X = \left\langle X ^ { 2 } \right\rangle = \sqrt { \frac { a } { \pi } } \int _ { - \infty } ^ { \infty } x ^ { 2 } e ^ { - a x ^ { 2 } } d x = \frac { 1 } { a \sqrt { \pi } } \int _ { - \infty } ^ { \infty } u ^ { 2 } e ^ { - u ^ { 2 } } d u
$$

This remaining integral can be evaluated using integration by parts,

$$
\int _ { - \infty } ^ { \infty } u ^ { 2 } e ^ { - u ^ { 2 } } d u = - \left. \frac { 1 } { 2 } u e ^ { - u ^ { 2 } } \right| _ { - \infty } ^ { \infty } + \frac { 1 } { 2 } \int _ { - \infty } ^ { \infty } e ^ { - u ^ { 2 } } d u = 0 + \frac { \sqrt { \pi } } { 2 }
$$

from which we conclude

$$
\operatorname { var } X = \frac { 1 } { a \sqrt { \pi } } \frac { \sqrt { \pi } } { 2 } , \quad \sigma = \frac { 1 } { \sqrt { 2 a } } .
$$


Remark
As you saw in problem 4, normal distributions are characterized entirely by their mean and standard deviation. Moreover, the central limit theorem roughly states that the sum of many independent random variables is approximately normally distributed. As a result, final experimental results are often approximately normally distributed, which means we can describe them with only the mean and standard deviation. That is the reason why the next part of this problem set will focus on calculating standard deviations (i.e. uncertainties).
[2] Problem 5. If two random variables $X _ { 1 }$ and $X _ { 2 }$ are independent, then

$$
\left\langle X _ { 1 } X _ { 2 } \right\rangle = \left\langle X _ { 1 } \right\rangle \left\langle X _ { 2 } \right\rangle .
$$

Use this result to show that

$$
\operatorname { var } \left( X _ { 1 } + X _ { 2 } \right) = \operatorname { var } \left( X _ { 1 } \right) + \operatorname { var } \left( X _ { 2 } \right)
$$

which implies that the standard deviation "adds in quadrature",

$$
\sigma _ { X _ { 1 } + X _ { 2 } } = \sqrt { \sigma _ { X _ { 1 } } ^ { 2 } + \sigma _ { X _ { 2 } } ^ { 2 } } .
$$

This is an important result we'll use many times below.
Solution. By definition, we have

$$
\operatorname { var } \left( X _ { 1 } + X _ { 2 } \right) = \left\langle \left( X _ { 1 } + X _ { 2 } \right) ^ { 2 } \right\rangle - \left\langle X _ { 1 } + X _ { 2 } \right\rangle ^ { 2 }
$$

Using the properties listed in problem 3,

$$
\begin{aligned}
\operatorname { var } \left( X _ { 1 } + X _ { 2 } \right) & = \left\langle X _ { 1 } ^ { 2 } \right\rangle + 2 \left\langle X _ { 1 } X _ { 2 } \right\rangle + \left\langle X _ { 2 } ^ { 2 } \right\rangle - \left\langle X _ { 1 } \right\rangle ^ { 2 } - 2 \left\langle X _ { 1 } \right\rangle \left\langle X _ { 2 } \right\rangle - \left\langle X _ { 2 } \right\rangle ^ { 2 } \\
& = \operatorname { var } \left( X _ { 1 } \right) + \operatorname { var } \left( X _ { 2 } \right) + 2 \left( \left\langle X _ { 1 } X _ { 2 } \right\rangle - \left\langle X _ { 1 } \right\rangle \left\langle X _ { 2 } \right\rangle \right)
\end{aligned}
$$

When $X _ { 1 }$ and $X _ { 2 }$ are independent, the last term vanishes, giving

$$
\operatorname { var } \left( X _ { 1 } + X _ { 2 } \right) = \operatorname { var } \left( X _ { 1 } \right) + \operatorname { var } \left( X _ { 2 } \right) .
$$

## 2 Uncertainty Propagation

Idea 2
When a physical quantity is measured in an experiment and reported as $x \pm \Delta x$, it is uncertain what the true value of the quantity is. If the quantity has a probability distribution $p ( x )$, then the reported uncertainty $\Delta x$ is essentially the standard deviation of $p ( x )$.

Remark
You can use intuition and experience to assign uncertainties to real measurements. For example, if you're using a clock that times only to the nearest second, you might take $\Delta t = 0.5 \mathrm {~s}$. If you're using a good ruler, which has millimeter markings, you might take


$\Delta x = 0.5 \mathrm {~mm}$. Of course, the ultimate test is the results: if you assigned the uncertainties right, your final uncertainty should encompass the true result most (but not all) of the time.

[1] Problem 6. Suppose $x$ has uncertainty $\Delta x$ and $y$ has uncertainty $\Delta y$, where $x$ and $y$ are independent. Explain why the uncertainty of $x + y$ is
$$
\Delta ( x + y ) = \sqrt { ( \Delta x ) ^ { 2 } + ( \Delta y ) ^ { 2 } } .
$$
This is called "addition in quadrature". What is the uncertainty of $x - y$ ? How about $x + x$ ?
Solution. For independent variables, $\operatorname { var } \left( X _ { 1 } + X _ { 2 } \right) = \operatorname { var } \left( X _ { 1 } \right) + \operatorname { var } \left( X _ { 2 } \right)$. Since our uncertainties represent the standard deviation, $\sigma _ { X } = \sqrt { \operatorname { var } ( X ) }$, we have
$$
\Delta ( x + y ) = \sqrt { ( \Delta x ) ^ { 2 } + ( \Delta y ) ^ { 2 } } .
$$
Since $x - y = x + ( - y )$ and $\Delta ( - y ) = \Delta y$, we get that $\Delta ( x - y ) = \Delta ( x + y )$. Finally, by linearity we clearly have $\Delta ( x + x ) = 2 \Delta x$. (The formula above doesn't apply, because $x$ isn't independent of $x$.)

Remark
Note how this differs from "high school" uncertainty analysis. In school, you might be told to show uncertainty using significant figures, and when adding two things, to keep only the figures that are significant in both of them. That corresponds to

$$
\Delta ( x + y ) = \max ( \Delta x , \Delta y )
$$

which is an underestimate. Or, you might be told that the uncertainty needs to encapsulate all the possible values, which implies that

$$
\Delta ( x + y ) = \Delta x + \Delta y
$$

which is an overestimate, since the errors could cancel.

Example 2: $F = m a 201625$
Three students make measurements of the length of a 1.50 m rod. Each reports an uncertainty estimate representing an independent random error applicable to the measurement.

- Alice performs a single measurement using a 2.0 m tape measure, to within 2 mm.
- Bob performs two measurements using a wooden meter stick, each to within 2 mm, which he adds together.
- Christina performs two measurements using a machinist's meter rule, each to within 1 mm, which she adds together.

Rank the measurements in order of their uncertainty.


Solution
The uncertainty in Alice's measurement is 2 mm. The uncertainty in Bob's is $2 \sqrt { 2 } \mathrm {~mm}$ by quadrature, while the uncertainty in Christina's is $\sqrt { 2 } \mathrm {~mm}$ by quadrature. So the lowest uncertainty is Christina's, followed by Alice's, followed by Bob's.

[1] Problem 7. Given $N$ independent measurements of the same quantity with the same uncertainty, $x _ { i } \pm \Delta x$, find the uncertainty of their sum. Hence show the uncertainty of their average is $\Delta x / \sqrt { N }$.
This result is extremely important, since repeating trials is one of the main ways to reduce uncertainty. But it's important to remember that the results derived above hold only for independent measurements. For example, taking a single measurement, then averaging that single number with itself 100 times certainly wouldn't reduce the uncertainty at all!
Solution. The uncertainty of their sum $\Delta X$ can be found by adding in quadrature,
$$
\Delta X = \sqrt { \sum _ { i = 1 } ^ { N } \left( \Delta x _ { i } \right) ^ { 2 } } = \sqrt { N } \Delta x .
$$
Therefore, the uncertainty of the average is
$$
\frac { \Delta X } { N } = \frac { \Delta x } { \sqrt { N } } .
$$

Idea 3: Tangent Line Approximation
If $x$ has uncertainty $\Delta x$, and $f ( x )$ can be approximated by its tangent line,

$$
f \left( x ^ { \prime } \right) \approx f ( x ) + \left( x ^ { \prime } - x \right) f ^ { \prime } ( x ) ,
$$

within the region $x \pm \Delta x$, then the distribution of $f ( x )$ is just a shifted and stretched version of the distribution of $x$. Moreover, $f ( x )$ has approximate uncertainty $\left| f ^ { \prime } ( x ) \right| \Delta x$.

[1] Problem 8. If $x$ is positive and has uncertainty $\Delta x$, find the uncertainties of $x ^ { 2 } , \sqrt { x } , 1 / x , \log x$, and $e ^ { x }$ using the tangent line approximation.
Solution. Using idea 3, we simply read off the answers,
$$
\begin{gathered}
\Delta \left( x ^ { 2 } \right) = 2 x \Delta x \quad \Delta ( \sqrt { x } ) = \frac { \Delta x } { 2 \sqrt { x } } \quad \Delta ( 1 / x ) = \frac { \Delta x } { x ^ { 2 } } \\
\Delta ( \log ( x ) ) = \frac { \Delta x } { x } \quad \Delta \left( e ^ { x } \right) = e ^ { x } \Delta x
\end{gathered}
$$
[1] Problem 9. The tangent line approximation doesn't always make sense. Suppose $x$ is measured as $0 \pm \Delta x$. Show that the results of problem 8 for the uncertainties of $x ^ { 2 }$ and $\sqrt { x }$ give nonsensical results. In each case, what would be a more reasonable uncertainty to report?
Solution. Naively applying the formulas above would give uncertainties of zero and infinity, which are clearly unphysical. In these cases, reasonable guesses for the uncertainty would be $( \Delta x ) ^ { 2 }$ and $\sqrt { \Delta x }$, since by dimensional analysis, they give the typical spread of the distributions of $x ^ { 2 }$ and $\sqrt { x }$.

Still, there is something more subtle going on here. In cases like these, applying the transformation distorts the probability distribution, beyond just a shifting and stretching, so it doesn't stay normally distributed. In Olympiads, this doesn't matter since we only want rough estimates, but the proper way to handle this would be to describe the full probability distribution. However, this often can't be done analytically.

When professional physicists run into situations like these, they often use Monte Carlo: they numerically compute many values, starting with randomly drawn inputs, and use that to infer the probability distribution. On Olympiads, you should just fall back to something reasonable.

[2] Problem 10. Consider two independent, positive quantities with values and uncertainties $x \pm \Delta x$ and $y \pm \Delta y$.
    (a) By writing $x y$ as $\exp ( \log x + \log y )$, show that the uncertainty of $x y$ is
$$
\Delta ( x y ) = x y \sqrt { \left( \frac { \Delta x } { x } \right) ^ { 2 } + \left( \frac { \Delta y } { y } \right) ^ { 2 } } .
$$
    (b) If we set $x = y$, then we find
$$
\Delta \left( x ^ { 2 } \right) = x ^ { 2 } \sqrt { 2 \left( \frac { \Delta x } { x } \right) ^ { 2 } } = \sqrt { 2 } x \Delta x .
$$
On the other hand, in problem 8 we found $\Delta \left( x ^ { 2 } \right) = 2 x \Delta x$. Which result is correct?
    (c) Find the uncertainty of $x / y$.
Solution. (a) We can write
$$
x y = \exp ( \log x + \log y )
$$
which implies
$$
\Delta ( x y ) = \exp ( \log x + \log y ) \Delta ( \log x + \log y ) = x y \sqrt { \left( \frac { \Delta x } { x } \right) ^ { 2 } + \left( \frac { \Delta y } { y } \right) ^ { 2 } } .
$$
    (b) The result $\Delta \left( x ^ { 2 } \right) = 2 x \Delta x$ is correct, since the formula for $\Delta ( x y )$ assumes $x$ and $y$ are independent, which fails when we set $y = x$.
    (c) We have
$$
\frac { x } { y } = \exp ( \log x - \log y )
$$
and by a very similar calculation to part (a), we conclude
$$
\Delta ( x / y ) = \frac { x } { y } \sqrt { \left( \frac { \Delta x } { x } \right) ^ { 2 } + \left( \frac { \Delta y } { y } \right) ^ { 2 } } .
$$
[2] Problem 11. A student launches a projectile with speed $v = 5 \pm 0.1 \mathrm {~m} / \mathrm { s }$ in gravitational acceleration $g = 9.81 \pm 0.01 \mathrm {~m} / \mathrm { s } ^ { 2 }$. The resulting range is $d = 1.5 \pm 0.02 \mathrm {~m}$. Given that the launch angle was less than $45 ^ { \circ }$, find the launch angle, with uncertainty, assuming all uncertainties are independent.

Solution. From the projectile range equation $d = v ^ { 2 } \sin ( 2 \theta ) / g$, we get

$$
\theta = \frac { 1 } { 2 } \arcsin \left( \frac { d g } { v ^ { 2 } } \right) = 18.03 ^ { \circ } .
$$

Now write $\sin ( 2 \theta ) = g d / v ^ { 2 }$. By the results of problem 10, the uncertainty of the right-hand side is

$$
\frac { d g } { v ^ { 2 } } \sqrt { \left( \frac { \Delta d } { d } \right) ^ { 2 } + \left( \frac { \Delta g } { g } \right) ^ { 2 } + \left( \frac { 2 \Delta v } { v } \right) ^ { 2 } } = 0.0248
$$

The uncertainty of the left-hand side is $2 \cos ( 2 \theta ) \Delta \theta$ by the tangent line approximation, so we have $\Delta \theta = 0.015 \mathrm { rad } = 0.9 ^ { \circ }$. Thus, the final result should be written as

$$
\theta = 18.0 ^ { \circ } \pm 0.9 ^ { \circ }
$$

where we removed a superfluous significant figure.
[2] Problem 12. Two physical quantities are related by $y = x e ^ { x }$.

(a) If $x$ is measured to be $1.0 \pm 0.1$, find the resulting value of $y$, with uncertainty.
(b) If $y$ is measured to be $2.0 \pm 0.1$, find the resulting value of $x$, with uncertainty.

Solution. (a) To find the central value of $y$, we plug in to get $y = e = 2.7183$. To find the error, we use the tangent line approximation,

$$
\frac { d y } { d x } = e ^ { x } ( x + 1 )
$$

which gives us

$$
\Delta y \approx e ^ { x } ( x + 1 ) \Delta x = 0.54 .
$$

Thus, rounding to a reasonable number of significant figures, we have

$$
y = 2.7 \pm 0.5 .
$$

Note that it would be incorrect to apply the "addition in quadrature" rule for products,

$$
\Delta y = x e ^ { x } \sqrt { \left( \frac { \Delta x } { x } \right) ^ { 2 } + \left( \frac { \Delta \left( e ^ { x } \right) } { e ^ { x } } \right) ^ { 2 } }
$$

because $x$ and $e ^ { x }$ aren't independent.

(b) To find the central value of $x$, we solve the equation $2 = x e ^ { x }$ numerically. This can be done using the method of iteration introduced in P1. That is, we have $x = 2 e ^ { - x }$, so by repeatedly plugging $2 e ^ { - \text {Ans } }$ into the calculator, we get $x = 0.8526$.
Under the tangent line approximation,
$$
\Delta x \approx \frac { \Delta y } { e ^ { x } ( x + 1 ) } = 0.023 .
$$
Rounding to a reasonable number of significant figures, we conclude
$$
x = 0.85 \pm 0.02 .
$$

Idea 4
For practical computations, it is often useful to use relative uncertainties. The relative uncertainty of $x$ is $\Delta x / x$, and can be expressed as a percentage.
[1] Problem 13. Some basic relative uncertainty results.

(a) Show that the relative uncertainty of the product or quotient of two independent quantities is the square root of the sum of the squares of their relative uncertainties.
(b) Show that averaging the results of $N$ independent trials as in problem 7 reduces the relative uncertainty by a factor of $\sqrt { N }$.

Solution. (a) Above we found that

$$
\Delta ( x y ) = x y \sqrt { \left( \frac { \Delta x } { x } \right) ^ { 2 } + \left( \frac { \Delta y } { y } \right) ^ { 2 } }
$$

Dividing both sides by $x y$ gives

$$
\frac { \Delta ( x y ) } { x y } = \sqrt { \left( \frac { \Delta x } { x } \right) ^ { 2 } + \left( \frac { \Delta y } { y } \right) ^ { 2 } }
$$

which is the desired result.

(b) Adding up the trials makes the absolute uncertainties add in quadrature, giving a factor of $\sqrt { N }$, while the total goes up by a factor of $N$, so the relative uncertain goes down by a factor of $\sqrt { N }$. Dividing by $N$ to form the average doesn't affect the relative uncertainty.

Remark
There are many situations where the rules above can't be used. For example, consider the uncertainty of $x + y ^ { 2 } / x$, where $x$ and $y$ are independent. You can calculate the uncertainty of either term with the standard rules, but you can't calculate the uncertainty of their sum, because the terms are not independent (both contain $x$ ).

In these cases, you can use the multivariable equivalent of the tangent line approximation,

$$
f \left( x ^ { \prime } , y ^ { \prime } \right) \approx f ( x , y ) + \left( x ^ { \prime } - x \right) \frac { \partial f } { \partial x } + \left( y ^ { \prime } - y \right) \frac { \partial f } { \partial y } .
$$

For independent $x$ and $y$, adding the two contributions to the uncertainty in quadrature gives

$$
\Delta f = \sqrt { \left( \frac { \partial f } { \partial x } \Delta x \right) ^ { 2 } + \left( \frac { \partial f } { \partial y } \Delta y \right) ^ { 2 } } .
$$

This general rule can also be used to quickly rederive the results of problem 10. However, it shouldn't be necessary in Olympiad problems. If you run into such situations in an experiment, often one of the uncertainties is much smaller, and can be neglected entirely.

## 3 Using Uncertainties


Example 3: $F = m a 2022$ B21
Alice and Bob are given a long, thin rectangle of sheet metal. (It has been machined very precisely, so they can assume it is perfectly rectangular.) Using calipers, Alice measures the width of the rectangle as 1 cm with 1\% uncertainty. Using a tape measure, Bob independently measures its length as 100 cm with 0.1\% uncertainty. What are the relative uncertainties they should report for the area and the perimeter of the rectangle?

Solution
To compute the area, we multiply the two measurements, which means we add the relative uncertainties in quadrature,

$$
\frac { \Delta A } { A } = \sqrt { ( 1 \% ) ^ { 2 } + ( 0.1 \% ) ^ { 2 } } \approx 1 \% .
$$

Note that in this case, the relative uncertainty of Bob's measurement is negligible; the relative uncertainty of the area is approximately the relative uncertainty of Alice's measurement.

Computing the perimeter involves adding the measurements, which means the absolute uncertainties are added in quadrature instead. These are 0.01 cm and 0.1 cm for Alice and Bob's measurements, respectively, so the absolute uncertainty of Alice's measurement is negligible. Thus, the relative uncertainty of the perimeter is approximately the relative uncertainty of Bob's measurement, 0.1\%.

In simple Olympiad experiments, often only one uncertainty will really matter. This can dramatically simplify calculations, but it might take a little thought to tell which one.

[3] Problem 14. (1) As a speed test, solve $F = m a 2018$ problems A12, A25, B19, and B25, and $F = m a 2019$ problems A16, B18, and B25. Don't bother writing solutions.
[2] Problem 15. Suppose the goal of an experiment is to measure the ratio $T _ { 1 } / T _ { 2 }$ of the durations of two processes, where $T _ { 1 }$ is about 15 seconds, and $T _ { 2 }$ is about 3 seconds. Also suppose your stopwatch is only accurate to the nearest second. You have two minutes to perform measurements. Assume each measurement is independent.
    (a) Do you think it's better to spend more total time measuring $T _ { 1 }$, more total time measuring $T _ { 2 }$, or an equal amount of time on both?
    (b) To confirm this, find the fraction of time $x$ spent measuring $T _ { 1 }$ which minimizes the final uncertainty.

Calculations of this sort are common when doing Olympiad experimental physics. We will discuss these issues in more detail in the handout on experimental physics.

Solution. (a) Since $T _ { 2 }$ is smaller, it takes less time to measure, and a single measurement of $T _ { 2 }$ has a much higher relative uncertainty. So we definitely want more distinct measurements of $T _ { 2 }$ than of $T _ { 1 }$.
As for the total measurement time, note that if we split it equally, the uncertainty due to $T _ { 2 }$ will still dominate, because $1 / ( 3 \sqrt { 5 } ) > 1 / 15$. So we should spend more time measuring $T _ { 2 }$.


(On the other hand, we shouldn't take a ratio as extreme as 5 to 1, because the benefit of additional measurements hits diminishing returns.)
(b) Explicitly, if $\Delta T$ is the absolute uncertainty on each measurement, then
$$
\Delta \left( T _ { 1 } / T _ { 2 } \right) = \frac { T _ { 1 } } { T _ { 2 } } \sqrt { \left( \frac { \Delta T } { T _ { 1 } \sqrt { N _ { 1 } } } \right) ^ { 2 } + \left( \frac { \Delta T } { T _ { 2 } \sqrt { N _ { 2 } } } \right) ^ { 2 } }
$$
The total time $T _ { t }$ is constant, $N _ { 1 } T _ { 1 } + N _ { 2 } T _ { 2 } = T _ { t }$ where $N _ { 1 } T _ { 1 } / T _ { t } = x$. We want to minimize
$$
f ( x ) = \frac { 1 } { T _ { 1 } x } + \frac { 1 } { ( 1 - x ) T _ { 2 } } .
$$
The derivative is
$$
f ^ { \prime } ( x ) = - \frac { 1 } { T _ { 1 } x ^ { 2 } } + \frac { 1 } { T _ { 2 } ( 1 - x ) ^ { 2 } }
$$
and setting this to zero gives
$$
x ^ { 2 } \left( 1 - T _ { 1 } / T _ { 2 } \right) - 2 x + 1 = 0 .
$$
The smaller root is the desired one since $x < 1$, giving
$$
x = \frac { 1 - \sqrt { T _ { 1 } / T _ { 2 } } } { 1 - T _ { 1 } / T _ { 2 } } = \frac { 1 } { 1 + \sqrt { T _ { 1 } / T _ { 2 } } } \approx 0.3 .
$$
As expected from the arguments in part (a), this is more than 1/6 but less than 1/2.
[3] Problem 16. You can estimate $g$ by finding the time needed for an object to roll down a ramp, with everything again made of household materials.
    (a) Before starting, think about what the dominant sources of uncertainty will be, and how you can design the experiment to minimize them. In particular, do you think the result will be more or less precise than your pendulum experiment?
    (b) Perform the experiment, taking at least ten independent measurements, and report the data and results with uncertainty.

Solution. Our formula for $g$ is

$$
g = \frac { 2 \ell ( 1 + \beta ) } { t ^ { 2 } \sin ( \theta ) }
$$

where $\beta = I / M R ^ { 2 }$ of the rolling object, and $\ell , t$ are the distance and time for the path. Let's assume you found a nice object, like a hollow can or a fully filled one, so that $\beta$ is known relatively precisely. Then the uncertainty is

$$
\Delta g = g \sqrt { \left( \frac { 2 \Delta t } { t } \right) ^ { 2 } + \left( \frac { \Delta \ell } { \ell } \right) ^ { 2 } + \left( \frac { \cos ( \theta ) \Delta \theta } { \sin ( \theta ) } \right) ^ { 2 } } .
$$

Given the above, you definitely want a ramp as long as possible, and there's a tradeoff with the angle: if the angle is very large, $t$ will be small so that the relative error on $t$ will be large, while if the angle is very small, the relative error on $\theta$ will be large. So in practice you want to choose a moderately small, but not too small value of $\theta$.


Some reasonable ballpark numbers are $\theta = ( 10 \pm 1 ) ^ { \circ }$, and $t = ( 3 \pm 0.3 ) \mathrm { s }$, so you probably can't easily get an uncertainty smaller than a few percent. The overall result will be less precise than the pendulum experiment, because for the pendulum there is no $\Delta \theta$ term, and you can measure $N \gg 1$ periods in a single trial so that the relative error on $t$ falls as $1 / N$. With the ramp, you can partially compensate by doing $N$ separate trials, so that the relative error at best falls as $1 / \sqrt { N }$, which isn't as good. It might not even be as good as $1 / \sqrt { N }$, because your uncertainties may not be independent: you might systematically overestimate or underestimate the time or angle.
[3] Problem 17. [A] Consider $N$ independent measurements of the same quantity, with results $x _ { i } \pm \Delta x _ { i }$. They can be combined into a single result by taking a weighted average. What is the optimal weighted average, which minimizes the uncertainty, and what is the corresponding uncertainty?

Solution. Let the weights be $w _ { i }$, so we report the value

$$
\bar { x } = \sum _ { i } w _ { i } x _ { i } .
$$

The uncertainty obeys

$$
( \Delta \bar { x } ) ^ { 2 } = \sum _ { i } w _ { i } ^ { 2 } \left( \Delta x _ { i } \right) ^ { 2 } .
$$

A tempting but incorrect way to minimize this quantity is to set the derivative with respect to $w _ { i }$ equal to zero. This doesn't work because the solution is just $w _ { 1 } = \ldots = w _ { N } = 0$, which isn't a weighted average at all. To actually have a weighted average, we need the weights to sum to one,

$$
\sum _ { i } w _ { i } = 1 .
$$

This is an optimization problem with a constraint, which can be solved with Lagrange multipliers.
However, for this particular problem, the constraint is simple enough to handle manually. Because of the constraint, if one increases some weight, then one must decrease others. At the minimum, the effect of increasing any weight infinitesimally and decreasing another the same amount must be zero, as if it weren't, we could just adjust those two weights to get a lower uncertainty. Setting the change in the uncertainty due to adjusting $w _ { i }$ and $w _ { j }$ in this way to zero gives

$$
0 = d \left( w _ { i } ^ { 2 } \right) \left( \Delta x _ { i } \right) ^ { 2 } + d \left( w _ { j } ^ { 2 } \right) \left( \Delta x _ { j } \right) ^ { 2 } = ( 2 d w ) \left( - w _ { i } \left( \Delta x _ { i } \right) ^ { 2 } + w _ { j } \left( \Delta x _ { j } \right) ^ { 2 } \right) .
$$

This tells us that $w _ { i } \propto 1 / \Delta x _ { i } ^ { 2 }$, which means

$$
w _ { i } = \frac { 1 / \left( \Delta x _ { i } \right) ^ { 2 } } { \sum _ { j } 1 / \left( \Delta x _ { j } \right) ^ { 2 } } .
$$

Note that all measurements are included in the optimal average, no matter how bad they may be. The corresponding uncertainty is

$$
\Delta x = \left( \sum _ { i } \frac { 1 } { \left( \Delta x _ { i } \right) ^ { 2 } } \right) ^ { - 1 / 2 } .
$$

All of the examples above involve combining continuous quantities, so we'll close this section with some applications to "counting" experiments, which work slightly differently.


Example 4
A fair coin is tossed 1000 times, and the number of heads is counted. If this process is repeated many times, what is the standard deviation of the number of heads?

Solution
Consider one trial of 1000 tosses. The number of heads is $X = X _ { 1 } + X _ { 2 } + \ldots + X _ { 1000 }$, where

$$
X _ { i } = \begin{cases} 1 & \text { heads on toss } i , \\ 0 & \text { tails on toss } i . \end{cases}
$$

Of course, the mean of each of these variables is $\left\langle X _ { i } \right\rangle = 0.5$, so that the mean of $X$ is 500. In addition, the $X _ { i }$ are independent of each other, so the variances add. The variance of each one of them is

$$
\operatorname { var } X _ { i } = \left\langle X _ { i } ^ { 2 } \right\rangle - \left\langle X _ { i } \right\rangle ^ { 2 } = \frac { 1 } { 2 } - \frac { 1 } { 4 } = \frac { 1 } { 4 } .
$$

Thus, the standard deviation of the number of heads is

$$
\sqrt { \operatorname { var } X } = \sqrt { 1000 / 4 } \approx 16 .
$$

So getting 520 heads would not be surprising, but if you got 550, you might be justified in suspecting the coin isn't fair. (Also, the number of heads is very close to normally distributed, by the central limit theorem mentioned above.) To check whether you understand this, you can redo it with a general probability $p$ of getting heads, where you should get $\sqrt { 1000 p ( 1 - p ) }$.

[3] Problem 18. At any moment, a Geiger counter can click, indicating that it has detected a particle of radiation. Suppose that there is an independent probability $\alpha d t$ of clicking at each infinitesimal time interval $d t$. Let the number of clicks observed in a total time $T$ be $X$.
    (a) Find the expected value and standard deviation of $X$, and thereby compute its relative uncertainty. (Hint: split the total time into many tiny time intervals, and let $X _ { i }$ be the number of clicks in interval $i$, so $X = \sum _ { i } X _ { i }$.)
    (b) Using a Geiger counter on a sample, you hear 197 clicks in 5 minutes of operation. Estimate the activity $\alpha$ of the sample (i.e. the expected clicks per second), with uncertainty. If you measure for longer, how does the uncertainty reduce over time?
    (c) Now suppose that for a different sample, $N = 0$ after 5 minutes. Estimate the activity $\alpha$ of the sample (i.e. the expected clicks per second), with a reasonable uncertainty. If you measure for longer, and continue to hear no clicks, how does the uncertainty reduce over time?

Solution. (a) There are $N = T / d t$ time intervals. Using the hint and applying linearity of expectation,

$$
\langle X \rangle = \sum _ { i } \left\langle X _ { i } \right\rangle = N ( \alpha d t ) = \alpha T
$$

Since the $X _ { i }$ are independent, their variances add. The variance of $X _ { i }$ is

$$
\left\langle X _ { i } ^ { 2 } \right\rangle - \left\langle X _ { i } \right\rangle ^ { 2 } = \alpha d t - ( \alpha d t ) ^ { 2 } \simeq \alpha d t .
$$


Thus, by adding the variances, we have
$$
\operatorname { var } X = \alpha T
$$
so the standard deviation is $\Delta X = \sqrt { \alpha T }$. The relative uncertainty is $\Delta X / \langle X \rangle = 1 / \sqrt { \alpha T }$.
(b) Applying the formulas above, we estimate
$$
\alpha = \frac { 197 } { T } = 0.66 \mathrm {~s} ^ { - 1 }
$$
with an uncertainty of
$$
\Delta \alpha = \frac { \alpha } { \sqrt { \alpha T } } = \sqrt { \frac { \alpha } { T } } = 0.05 \mathrm {~s} ^ { - 1 } .
$$
The uncertainty falls as $1 / \sqrt { T }$. Note that this is very similar to previous results we've found, where the uncertainty falls as $1 / \sqrt { n }$ where $n$ is the number of trials. In some sense, each instant of time we wait is another trial here.
(c) Of course, we estimate $\alpha = 0$, but then the formulas above imply $\Delta \alpha = 0$ and hence that we are absolutely certain $\alpha = 0$, which is absurd. (If you don't think that's absurd, note that the same result would have occurred if we had heard zero clicks in an arbitrarily short time interval, such as a nanosecond.)
This is a case where the basic rules of uncertainty propagation break down, and we need to think. The point of giving an uncertainty is to indicate the range of parameter values compatible with the data we observed. Now, the probability of having no clicks in time $T$ is $e ^ { - \alpha T }$. If $\alpha T \gg 1$, then it would be very unlikely to have no clicks, so we can rule out $\alpha \gg 1 / T$. But if $\alpha T \lesssim 1$, this isn't unlikely at all. Thus, your uncertainty window should be $\alpha \in [ 0 , c / T ]$ where $c$ is an order-one number, whose value depends on the specific statistical procedure you use. (Note that the upper bound falls as $1 / T$, not $1 / \sqrt { T }$.)
[4] Problem 19. [A] This problem extends problem 18 to derive some canonical results.
    (a) Let $\lambda = \alpha T$. Find the probability $p ( X = k )$ of hearing exactly $k$ clicks in terms of $\lambda$ and $k$.
    (b) To check your result, show that the sum of the $p ( X = k )$ is equal to one.
    (c) ★ In the limit $\lambda \gg 1$, show that the probabilities $p ( X = k )$ approach that of a normal distribution with the mean and standard deviation calculated in problem 18, thereby providing an example of the central limit theorem at work. This is a rather involved calculation, which will use many of the techniques from P1. It will also require Stirling's approximation,
$$
n ! \approx \sqrt { 2 \pi n } \left( \frac { n } { e } \right) ^ { n }
$$
for $n \gg 1$, which we mentioned in P1. (Hint: because the relative uncertainty falls as $\lambda$ increases, start by writing $k = \lambda ( 1 + \delta )$ for $| \delta | \ll 1$, and expand in powers of $\delta$. Be careful not to drop too many terms, as $\delta$ is small, but $\lambda \delta$ isn't.)

Solution. (a) Following the notation of problem 18, we have $X = \sum _ { i } X _ { i }$, and we get $k$ clicks if precisely $k$ of the $X _ { i }$ are equal to 1 . Thus,

$$
p ( X = k ) = \binom { N } { k } ( \alpha d t ) ^ { k } ( 1 - \alpha d t ) ^ { N - k } \approx \frac { N ^ { k } } { k ! } ( \alpha d t ) ^ { k } ( 1 - \alpha d t ) ^ { N } = \frac { \lambda ^ { k } } { k ! } e ^ { - \lambda } .
$$

This is known as the Poisson distribution.


(b) This follows from the Taylor series of the exponential,
$$
\sum _ { k = 0 } ^ { \infty } p ( X = k ) = e ^ { - \lambda } \sum _ { k = 0 } ^ { \infty } \frac { \lambda ^ { k } } { k ! } = 1 .
$$
(c) Using Stirling's approximation, we have
$$
\begin{aligned}
p ( X = k ) & = \frac { 1 } { \sqrt { 2 \pi k } } \left( \frac { \lambda e } { k } \right) ^ { k } e ^ { - \lambda } \\
& = \frac { 1 } { \sqrt { 2 \pi \lambda ( 1 + \delta ) } } \left( \frac { e } { 1 + \delta } \right) ^ { \lambda ( 1 + \delta ) } e ^ { - \lambda } \\
& \approx \frac { 1 } { \sqrt { 2 \pi \lambda } } e ^ { \delta \lambda } ( 1 + \delta ) ^ { - \lambda ( 1 + \delta ) }
\end{aligned}
$$
where we used the fact that $\delta \ll 1$.
Now we need to use a technique from P1. Letting the final term be equal to $1 / y$, we have
$$
\log y = \lambda ( 1 + \delta ) \log ( 1 + \delta ) = \lambda ( 1 + \delta ) \left( \delta - \frac { \delta ^ { 2 } } { 2 } + \mathcal { O } \left( \delta ^ { 3 } \right) \right) = \delta \lambda + \frac { \delta ^ { 2 } \lambda } { 2 } + \mathcal { O } \left( \delta ^ { 3 } \lambda \right) .
$$
In P1, we only expanded up to the first term, but here we need to keep the order $\delta ^ { 2 }$ term. The reason is we want an approximation that works for the whole peak of the probability distribution, and we know it has relative uncertainty $1 / \sqrt { \lambda }$, which means we need to take $\delta \sim 1 / \sqrt { \lambda }$. That implies that $\delta ^ { 2 } \lambda$ is of order one and cannot be dropped, but $\delta ^ { 3 } \lambda$ is small and can be dropped. Anyway, plugging this in, we find
$$
p ( X = k ) \approx \frac { 1 } { \sqrt { 2 \pi \lambda } } e ^ { - \delta ^ { 2 } \lambda / 2 } = \frac { 1 } { \sqrt { 2 \pi \lambda } } e ^ { - ( k - \lambda ) ^ { 2 } / 2 \lambda }
$$
which is precisely a normal distribution with the appropriate mean and standard deviation.
[3] Problem 20. IPhO 2023, problem 1, parts A, B, and D.3. A short derivation of the key features of Brownian motion. It requires only the ideas of this problem set, and some basic mechanics.

## 4 Data Analysis

Idea 5
All data analysis for the USAPhO and IPhO can be done using extremely basic methods. Sometimes, it suffices to just calculate a value based on a single data point, or by cleverly using a pair of data points. When this isn't enough, you'll have to do graphical data analysis, which will usually correspond to drawing a line and measuring its slope and intercept. This is quite limited compared to modern statistical tools, but also can be surprisingly powerful.


Example 5
The activity of a radioactive substance obeys $A ( t ) = A _ { 0 } e ^ { - t / \tau }$. Using measurements of $t$ and $A ( t )$, plot a line to find $A _ { 0 }$ and $\tau$.

Solution
To handle exponential relationships, take the logarithm of both sides for

$$
\log A ( t ) = \log A _ { 0 } - t / \tau .
$$

Then a plot of $\log A ( t )$ vs. $t$ has slope $- 1 / \tau$ and $y$-intercept $\log A _ { 0 }$.

[1] Problem 21. For a power law $y = \alpha x ^ { n }$ where $y$ and $x$ are measured, what line can be plotted to find $\alpha$ and $n$ ?
Solution. We have
$$
\log ( y ) = \log \left( \alpha x ^ { n } \right) = \log ( \alpha ) + n \log ( x ) .
$$
Thus, if we plot $\log y$ against $\log x$, the slope will be $n$ and the $y$-intercept will be $\log ( \alpha )$.
[2] Problem 22. The rate $R$ of electron emission from a solid in an electric field $E$ is
$$
R = \beta e ^ { - E _ { 0 } / E }
$$
for some constants $\beta$ and $E _ { 0 }$. The exponential form is because the effect is due to quantum tunneling, as will be discussed in X2.
    (a) If $E$ and $R$ are measured, what line can be plotted to find $\beta$ and $E _ { 0 }$ ? Make sure the dimensions of your equations make sense.
    (b) Suppose both $\beta$ and $E _ { 0 }$ have 1\% uncertainty. For small $E$, which is more important for the uncertainty of $R$ ? What about for large $E$ ? Around where is the crossover point?

Solution. (a) Naively, if we take the natural log of the equation, we get

$$
\log R = - \frac { E _ { 0 } } { E } + \log \beta .
$$

Plotting $1 / E$ on the $x$-axis and $\log R$ on the $y$-axis gives a line with slope $- E _ { 0 }$ and $y$-intercept $\log \beta$.

But the dimensions of this equation look wrong, because $R$ and $\beta$ are dimensionful quantities. Technically, we are really plotting dimensionless quantities, involving the ratios of $E$ and $R$ to a standard unit of energy and rate, respectively. For example, in SI units, we would have

$$
\log \frac { R } { 1 \mathrm {~Hz} } = - \frac { E _ { 0 } / ( 1 \mathrm {~J} ) } { E / ( 1 \mathrm {~J} ) } + \log \frac { \beta } { 1 \mathrm {~Hz} } .
$$

On the page, we literally plot $( 1 \mathrm {~J} ) / E$ versus $\log ( R / ( 1 \mathrm {~Hz} ) )$. This gives a line with dimensionless slope $- E _ { 0 } / ( 1 \mathrm {~J} )$ and intercept $\log ( \beta / ( 1 \mathrm {~Hz} ) )$. You don't have to keep this technicality in mind, but this sort of thing is always implicitly happening whenever one plots data.


(b) The uncertainty in $\beta$ alone always gives a 1\% uncertainty in $R$. But the uncertainty in $R$ due to the uncertainty in $E _ { 0 }$ depends on the value of $E$. For $E \ll E _ { 0 }$, we can expand the exponential as $\left( 1 - E / E _ { 0 } \right)$, and in this case the uncertainty in $E _ { 0 }$ does almost nothing at all, so the uncertainty in $\beta$ dominates. For $E \gg E _ { 0 }$, the reverse is true. By dimensional analysis, the crossover must be around $E \sim E _ { 0 }$.

Example 6
Suppose that $y$ and $x$ are related nonlinearly, as

$$
y = b x + a x ^ { 2 } .
$$

For example, this could model the force due to a non-Hookean spring. Using measurements of $x$ and $y$, plot a line to find $a$ and $b$.

Solution
If we divide by $x$, we find

$$
\frac { y } { x } = a x + b .
$$

Therefore, we can plot $y / x$ versus $x$, which gives a line with slope $a$ and intercept $b$. More generally, we can plot a line whenever we can rearrange a given relation into the form

$$
( \text { known } ) = ( \text { unknown } ) ( \text { known } ) + ( \text { unknown } )
$$

where all four terms can be arbitrarily complicated. In this way, it is possible to turn a lot of very nonlinear relations into lines.
[3] Problem 23. Some more examples of finding lines to plot.

(a) Suppose that you are given points $( x , y )$ that lie on a circle centered at $( a , 0 )$ with radius $r$. What line can be plotted to find $a$ and $r$ ?
(b) Consider an Atwood's machine with masses $m$ and $M > m$. The acceleration of the machine is measured as a function of $M$. However, since the pulley has mass, it slows the acceleration of the Atwood's machine, so that
$$
a = \frac { M - m } { M + m + \delta m } g .
$$
Find a line that can be plotted to find $g$ and $\delta m$, assuming $m , M$, and $a$ are known. This is an example of how plotting a line can separate out a systematic error, i.e. the value of $\delta m$, which would be impossible if only one value of $M$ were used.
(c) Suppose an object is undergoing simple harmonic motion with amplitude $A$ and angular frequency $\omega$. Given measurements of the position $x$ and velocity $v$, what line can be plotted to find $A$ and $\omega$ ?

Solution. (a) The equation of the circle is

$$
( x - a ) ^ { 2 } + y ^ { 2 } = r ^ { 2 } , \quad y ^ { 2 } + x ^ { 2 } = 2 a x + r ^ { 2 } - a ^ { 2 }
$$


Plotting $y ^ { 2 } + x ^ { 2 }$ vs. $x$ will give a slope of $2 a$ and a $y$-intercept of $r ^ { 2 } - a ^ { 2 }$. Combining the two pieces of information yields $a$ and $r$.
    (b) The equation can be slightly rearranged to give
$$
\frac { M - m } { a } = \frac { M + m } { g } + \frac { \delta m } { g } .
$$
Therefore, a plot of $( M - m ) / a$ vs. $M + m$ has slope $1 / g$ and $y$-intercept $\delta m / g$.
    (c) By conservation of energy, $A ^ { 2 } = x ^ { 2 } + v ^ { 2 } / \omega ^ { 2 }$, so
$$
x ^ { 2 } = A ^ { 2 } - v ^ { 2 } / \omega ^ { 2 } .
$$
Thus, a plot of $x ^ { 2 }$ vs. $v ^ { 2 }$ has $y$-intercept $A ^ { 2 }$ and slope $- 1 / \omega ^ { 2 }$.
[3] Problem 24. USAPhO 2012, problem A2. (This one requires basic thermodynamics.)
[3] Problem 25. USAPhO 2011, problem A2.
[3] Problem 26. INPhO 2018, problem 7. (This one requires basic fluid dynamics.)
[3] Problem 27 (USAPhO 2024). An experimentalist drives a series RLC circuit with a sinusoidal voltage $V ( t ) = V _ { 0 } \cos \omega t$. In E6, you will learn how to show that the voltage across the capacitor, in the steady state, oscillates with amplitude

$$
V _ { c } = \frac { V _ { 0 } } { \sqrt { \left( 1 - \omega ^ { 2 } / \omega _ { 0 } ^ { 2 } \right) ^ { 2 } + \left( \omega / \omega _ { 0 } Q \right) ^ { 2 } } }
$$

where $\omega _ { 0 }$ is the resonant angular frequency and $Q$ is the circuit's quality factor. The experimentalist takes the following data near the resonance, for a fixed value of $V _ { 0 }$ :

| $\omega ( \mathrm { rad } / \mathrm { s } )$ | 133.0 | 133.5 | 134.0 | 134.5 | 135.0 | 135.5 | 136.0 | 136.5 | 137.0 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $V _ { c }$ (Volts) | 3.64 | 4.76 | 6.52 | 8.53 | 8.18 | 6.06 | 4.44 | 3.42 | 2.75 |

Find the values of $\omega _ { 0 }$ and $Q$ as accurately as possible. Uncertainty analysis is not required. (Hint: you don't always have to draw a line. Carefully examine and approximate the given formula.)
Solution. See the official solutions to problem B3, part a.b.ii. A good answer for $\omega _ { 0 }$ is within the range (134.7 ± 0.1) rad/s, and a good answer for $Q$ is within $88 \pm 3$.

## 5 Estimation

Estimation is a useful skill for checking the answers to real-world problems.
Example 7
Estimate the circumference of the Earth.


Solution
If you know that the United States is 3,000 miles wide, and there is a time zone difference of three hours between California and New York, then a reasonable estimate is 24,000 miles. Or, if you know the factoid that light can go about seven times around the Earth in a second, then a reasonable estimate is $( 3 / 7 ) \times 10 ^ { 8 } \mathrm {~m} \approx 4 \times 10 ^ { 7 } \mathrm {~m}$.

Let's check these results are compatible. There are about 5 miles in 8 kilometers, a fact you can get by remembering how your car's speedometer looks, or by noting that 3 feet are about 1 meter. Then $4 \times 10 ^ { 4 } \mathrm {~km} \approx ( 5 / 8 ) \times 4 \times 10 ^ { 4 } \mathrm { mi } = 2.5 \times 10 ^ { 4 } \mathrm { mi }$, so the two results are compatible. There are probably at least a hundred more ways to perform this estimation.

Example 8
Estimate the density of air, and compare this to the density of water.

Solution
We can directly use the ideal gas law, $P V = n R T$. The density is $\rho = \mu n / V$ where $\mu$ is the mass of one mole of air, so

$$
\rho = \frac { \mu P } { R T } .
$$

Atmospheric pressure is about $10 ^ { 5 } \mathrm {~Pa}$, typical temperatures are about 300 K, and air is mostly $\mathrm { N } _ { 2 }$, which has a molar mass of $\mu = 28 \mathrm {~g} / \mathrm { mol }$, so

$$
\rho = \frac { ( 0.028 ) \left( 10 ^ { 5 } \right) } { ( 8.3 ) ( 300 ) } \frac { \mathrm { kg } } { \mathrm {~m} ^ { 3 } } \approx 1 \frac { \mathrm {~kg} } { \mathrm {~m} ^ { 3 } } .
$$

The density of water is, almost by definition,

$$
\rho _ { w } \approx 10 ^ { 3 } \frac { \mathrm {~kg} } { \mathrm {~m} ^ { 3 } } .
$$

Most liquids and solids have densities within an order of magnitude of this, since in all cases the atoms are packed close together. Evidently, air molecules are about a factor of $\left( 10 ^ { 3 } \right) ^ { 1 / 3 } = 10$ times further apart than typical water molecules.

Example 9
Estimate how much useful power you can produce in a short burst.

Solution
This is a bit tricky to test, because most exercises just burn energy against air resistance or friction, which is hard to estimate. However, a task that directly performs work is useful. I weigh about 75 kg and can run up a 3 m high staircase in around 3 s, so

$$
P = m g v = ( 75 ) ( 10 ) ( 3 / 3 ) \mathrm { W } \approx 750 \mathrm {~W} .
$$


This is a typical max power output, while typical steady state power outputs are several times smaller, and the corresponding numbers for elite athletes are several times larger.

Remark
It's important not to overthink estimation questions. If you already know what answer you're targeting, you can always add ad-hoc factors to get closer, but that's not a good instinct in novel situations, where you don't know the answer. Instead, it's best to keep things simple, and only try to get within one or two orders of magnitude. Accordingly, the solutions to the problems below will also use very simple estimates, accurate to only an order of magnitude.
[3] Problem 28. Some questions about light energy.

(a) Estimate the number of photons emitted per second by a standard light bulb. (The energy of a photon is $E = h f$, and the frequency of a photon is related to the wavelength by $c = f \lambda$.)
(b) The Sun supplies power of intensity $1400 \mathrm {~W} / \mathrm { m } ^ { 2 }$ to the Earth. The nearest star is about 4 light years away. Assuming this star is similar to the Sun, about how many of its photons enter your eye per second?

Solution. (a) A standard light bulb has around 50 W of power. The power $P = N E$ where $N$ is the number of photons emitted per second, and the wavelength of visible light is from $400 - 700 \mathrm {~nm}$. Using 500 nm , we have

$$
N = \frac { P \lambda } { h c } \sim 10 ^ { 20 } \text { photons } / \mathrm { s }
$$

(b) The distance to the Sun is $1 \mathrm { AU } \sim 1.5 \times 10 ^ { 11 } \mathrm {~m}$, which you can also reconstruct with Kepler's laws. 1 light year is $c ( 1$ year $) \sim 10 ^ { 16 } \mathrm {~m}$. Then the intensity from the star is reduced by a factor of (1 AU/4ly) ${ } ^ { 2 }$ due to the inverse square law, so $I \sim 10 ^ { - 8 } \mathrm {~W} / \mathrm { m } ^ { 2 }$.
The area of a human pupil depends on the light conditions, but is roughly $\pi r ^ { 2 } = \pi ( 5 \mathrm {~mm} ) ^ { 2 }$. Then the number of photons that enter it per second is $P \lambda / h c$, which gives $N \sim 10 ^ { 6 }$ photons $/ \mathrm { s }$. That's plenty, so it's very easy to see such a star at night, while it might be difficult during the day because of the background light from the Sun.

[2] Problem 29. Estimate the radius of the largest asteroid you could jump off of, and never return.
Solution. The escape velocity is $v = \sqrt { 2 G M / R }$, and we will assume a uniform spherical asteroid with density $\rho$. Rock is a few times denser than water, so $\rho \approx 3 \times 10 ^ { 3 } \mathrm {~kg} / \mathrm { m } ^ { 3 }$ and $M \approx \frac { 4 } { 3 } \pi \rho R ^ { 3 }$. Humans can jump around half a meter, which determines $v = \sqrt { 2 g h }$. Thus

$$
2 g h = \frac { 2 G } { R } \frac { 4 } { 3 } \pi \rho R ^ { 3 } .
$$

Plugging in numbers gives $R \approx 2 \mathrm {~km}$.
[4] Problem 30. Some questions about energy.

(a) Estimate the digestible energy content of a stick of butter. (A Calorie is about 4000 J , and is also the energy needed to raise the temperature of a kilogram of water by 1 K.)

(b) Estimate the rate at which your body burns energy when at rest.
(c) Estimate the rate at which a human being radiates energy. (The Stefan-Boltzmann law states that the radiation power per unit area from a blackbody is $\sigma T ^ { 4 }$, where $\sigma = 5.7 \times 10 ^ { - 8 } \mathrm {~W} / \mathrm { m } ^ { 2 } \mathrm {~K} ^ { 4 }$.) Is radiation a significant source of energy loss for a human being, or is it negligible?
(d) A human being develops mild hypothermia, with their core body temperature dropping by 5°F. Neglecting any heat transfer with the environment, estimate the number of calories required to raise their temperature back to normal.

Now let's verify the energy content of the butter microscopically. This will be a very rough estimate, so expect answers to be only within two orders of magnitude.

(e) A chemical bond typically involves two electrons, and a characteristic atomic separation distance of one angstrom, $r \sim 10 ^ { - 10 } \mathrm {~m}$. Estimate the binding energy of one chemical bond.
(f) The fats in butter are digested by inputting energy to break the bonds in the molecules, then harvesting energy by combining the atoms into $\mathrm { CO } _ { 2 }$ and $\mathrm { H } _ { 2 } \mathrm { O }$, which have somewhat more stable bonds.
<img class="imgSvg" id = "mu6ymxq3jtlgglvm5kc" src="data:image/svg+xml;base64,PHN2ZyBpZD0ic21pbGVzLW11NnlteHEzanRsZ2dsdm01a2MiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ2NiA1Ny43NTAyMzg3NDM3MDYwNiIgc3R5bGU9IndpZHRoOiA0NjUuOTE3MjAzMDY4ODUwOTRweDsgaGVpZ2h0OiA1Ny43NTAyMzg3NDM3MDYwNnB4OyBvdmVyZmxvdzogdmlzaWJsZTsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZS1tdTZ5bXhxM2p0bGdnbHZtNWtjLTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzk2LjYzNzQxMzQ1MjYyNzciIHkxPSIyMS4wMDAyMjAzNzg4MDg4NzYiIHgyPSI0MjMuOTE3MjAzMDY4ODUwOTQiIHkyPSIzNi43NTAyMzg3NDM3MDYwNiI+PHN0b3Agc3RvcC1jb2xvcj0iY3VycmVudENvbG9yIiBvZmZzZXQ9IjIwJSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9ImN1cnJlbnRDb2xvciIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmUtbXU2eW14cTNqdGxnZ2x2bTVrYy0zIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM2OS4zNTc2MDI2MzA0NDM2NCIgeTE9IjM2Ljc1MDIwMjAxMzkwNDU4NCIgeDI9IjM5Ni42Mzc0MTM0NTI2Mjc3IiB5Mj0iMjEuMDAwMjIwMzc4ODA4ODc2Ij48c3RvcCBzdG9wLWNvbG9yPSJjdXJyZW50Q29sb3IiIG9mZnNldD0iMjAlIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iY3VycmVudENvbG9yIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZS1tdTZ5bXhxM2p0bGdnbHZtNWtjLTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzQyLjA3NzgxMzAxNDIyMDQiIHkxPSIyMS4wMDAxODM2NDkwMDczOTciIHgyPSIzNjkuMzU3NjAyNjMwNDQzNjQiIHkyPSIzNi43NTAyMDIwMTM5MDQ1ODQiPjxzdG9wIHN0b3AtY29sb3I9ImN1cnJlbnRDb2xvciIgb2Zmc2V0PSIyMCUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSJjdXJyZW50Q29sb3IiIG9mZnNldD0iMTAwJSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lLW11NnlteHEzanRsZ2dsdm01a2MtNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzMTQuNzk4MDAyMTkyMDM2NCIgeTE9IjM2Ljc1MDE2NTI4NDEwMzEwNSIgeDI9IjM0Mi4wNzc4MTMwMTQyMjA0IiB5Mj0iMjEuMDAwMTgzNjQ5MDA3Mzk3Ij48c3RvcCBzdG9wLWNvbG9yPSJjdXJyZW50Q29sb3IiIG9mZnNldD0iMjAlIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iY3VycmVudENvbG9yIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZS1tdTZ5bXhxM2p0bGdnbHZtNWtjLTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjkzLjA4MTE5NDg0MzExNyIgeTE9IjE3LjY2NDc4NjYyNDc3NTQ0NSIgeDI9IjMxNC45MDUwMjY1MzYwOTU1MyIgeTI9IjMwLjI2NDgwMTMxNjY5MzE5NSI+PHN0b3Agc3RvcC1jb2xvcj0iY3VycmVudENvbG9yIiBvZmZzZXQ9IjIwJSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9ImN1cnJlbnRDb2xvciIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmUtbXU2eW14cTNqdGxnZ2x2bTVrYy0xMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyODcuNTE4MjEyNTc1ODEzMTUiIHkxPSIyMS4wMDAxNDY5MTkyMDU5MTgiIHgyPSIzMTQuNzk4MDAyMTkyMDM2NCIgeTI9IjM2Ljc1MDE2NTI4NDEwMzEwNSI+PHN0b3Agc3RvcC1jb2xvcj0iY3VycmVudENvbG9yIiBvZmZzZXQ9IjIwJSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9ImN1cnJlbnRDb2xvciIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmUtbXU2eW14cTNqdGxnZ2x2bTVrYy0xMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNjAuMjM4NDAxNzUzNjI5MSIgeTE9IjM2Ljc1MDEyODU1NDMwMTYyNSIgeDI9IjI4Ny41MTgyMTI1NzU4MTMxNSIgeTI9IjIxLjAwMDE0NjkxOTIwNTkxOCI+PHN0b3Agc3RvcC1jb2xvcj0iY3VycmVudENvbG9yIiBvZmZzZXQ9IjIwJSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9ImN1cnJlbnRDb2xvciIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmUtbXU2eW14cTNqdGxnZ2x2bTVrYy0xNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMzIuOTU4NjEyMTM3NDA1ODUiIHkxPSIyMS4wMDAxMTAxODk0MDQ0MzgiIHgyPSIyNjAuMjM4NDAxNzUzNjI5MSIgeTI9IjM2Ljc1MDEyODU1NDMwMTYyNSI+PHN0b3Agc3RvcC1jb2xvcj0iY3VycmVudENvbG9yIiBvZmZzZXQ9IjIwJSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9ImN1cnJlbnRDb2xvciIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmUtbXU2eW14cTNqdGxnZ2x2bTVrYy0xNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMDUuNjc4ODAxMzE1MjIxODIiIHkxPSIzNi43NTAwOTE4MjQ1MDAxNDYiIHgyPSIyMzIuOTU4NjEyMTM3NDA1ODUiIHkyPSIyMS4wMDAxMTAxODk0MDQ0MzgiPjxzdG9wIHN0b3AtY29sb3I9ImN1cnJlbnRDb2xvciIgb2Zmc2V0PSIyMCUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSJjdXJyZW50Q29sb3IiIG9mZnNldD0iMTAwJSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lLW11NnlteHEzanRsZ2dsdm01a2MtMTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTc4LjI5MTk4NzM1NDkzOTQiIHkxPSIyNy40ODU0Mzc0MjcwMTI4NyIgeDI9IjIwMC4xMTU4MTkwNDc5MTgwMiIgeTI9IjQwLjA4NTQ1MjExODkzMDYyIj48c3RvcCBzdG9wLWNvbG9yPSJjdXJyZW50Q29sb3IiIG9mZnNldD0iMjAlIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iY3VycmVudENvbG9yIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZS1tdTZ5bXhxM2p0bGdnbHZtNWtjLTIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE3OC4zOTkwMTE2OTg5OTg1OCIgeTE9IjIxLjAwMDA3MzQ1OTYwMjk2IiB4Mj0iMjA1LjY3ODgwMTMxNTIyMTgyIiB5Mj0iMzYuNzUwMDkxODI0NTAwMTQ2Ij48c3RvcCBzdG9wLWNvbG9yPSJjdXJyZW50Q29sb3IiIG9mZnNldD0iMjAlIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iY3VycmVudENvbG9yIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZS1tdTZ5bXhxM2p0bGdnbHZtNWtjLTIzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE1MS4xMTkyMDA4NzY4MTQ1NSIgeTE9IjM2Ljc1MDA1NTA5NDY5ODY2NiIgeDI9IjE3OC4zOTkwMTE2OTg5OTg1OCIgeTI9IjIxLjAwMDA3MzQ1OTYwMjk2Ij48c3RvcCBzdG9wLWNvbG9yPSJjdXJyZW50Q29sb3IiIG9mZnNldD0iMjAlIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iY3VycmVudENvbG9yIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZS1tdTZ5bXhxM2p0bGdnbHZtNWtjLTI1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjEyMy44Mzk0MTEyNjA1OTEzMyIgeTE9IjIxLjAwMDAzNjcyOTgwMTQ4IiB4Mj0iMTUxLjExOTIwMDg3NjgxNDU1IiB5Mj0iMzYuNzUwMDU1MDk0Njk4NjY2Ij48c3RvcCBzdG9wLWNvbG9yPSJjdXJyZW50Q29sb3IiIG9mZnNldD0iMjAlIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iY3VycmVudENvbG9yIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZS1tdTZ5bXhxM2p0bGdnbHZtNWtjLTI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ijk2LjU1OTYwMDQzODQwNzI3IiB5MT0iMzYuNzUwMDE4MzY0ODk3MTkiIHgyPSIxMjMuODM5NDExMjYwNTkxMzMiIHkyPSIyMS4wMDAwMzY3Mjk4MDE0OCI+PHN0b3Agc3RvcC1jb2xvcj0iY3VycmVudENvbG9yIiBvZmZzZXQ9IjIwJSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9ImN1cnJlbnRDb2xvciIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmUtbXU2eW14cTNqdGxnZ2x2bTVrYy0yOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2OS4yNzk4MTA4MjIxODQwNSIgeTE9IjIxIiB4Mj0iOTYuNTU5NjAwNDM4NDA3MjciIHkyPSIzNi43NTAwMTgzNjQ4OTcxOSI+PHN0b3Agc3RvcC1jb2xvcj0iY3VycmVudENvbG9yIiBvZmZzZXQ9IjIwJSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9ImN1cnJlbnRDb2xvciIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmUtbXU2eW14cTNqdGxnZ2x2bTVrYy0zMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MS44OTI5ODQzODc5MDExOSIgeTE9IjMwLjI2NDYxNzUyMzU5Mjk2IiB4Mj0iNjMuNzE2ODMzMDQ1NjQ4NDIiIHkyPSIxNy42NjQ2MzIyMTU1MTY0NjMiPjxzdG9wIHN0b3AtY29sb3I9ImN1cnJlbnRDb2xvciIgb2Zmc2V0PSIyMCUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSJjdXJyZW50Q29sb3IiIG9mZnNldD0iMTAwJSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lLW11NnlteHEzanRsZ2dsdm01a2MtMzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNDIiIHkxPSIzNi43NDk5ODE2MzUwOTU2NSIgeDI9IjY5LjI3OTgxMDgyMjE4NDA1IiB5Mj0iMjEiPjxzdG9wIHN0b3AtY29sb3I9ImN1cnJlbnRDb2xvciIgb2Zmc2V0PSIyMCUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSJjdXJyZW50Q29sb3IiIG9mZnNldD0iMTAwJSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxtYXNrIGlkPSJ0ZXh0LW1hc2stbXU2eW14cTNqdGxnZ2x2bTVrYyI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0id2hpdGUiPjwvcmVjdD48Y2lyY2xlIGN4PSI0MiIgY3k9IjM2Ljc0OTk4MTYzNTA5NTY1IiByPSI3Ljg3NSIgZmlsbD0iYmxhY2siPjwvY2lyY2xlPjwvbWFzaz48c3R5bGU+CiAgICAgICAgICAgICAgICAuZWxlbWVudC1tdTZ5bXhxM2p0bGdnbHZtNWtjIHsKICAgICAgICAgICAgICAgICAgICBmb250OiAxNHB4IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7CiAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50LWJhc2VsaW5lOiAnbWlkZGxlJzsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIC5zdWItbXU2eW14cTNqdGxnZ2x2bTVrYyB7CiAgICAgICAgICAgICAgICAgICAgZm9udDogOC40cHggSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9zdHlsZT48ZyBtYXNrPSJ1cmwoI3RleHQtbWFzay1tdTZ5bXhxM2p0bGdnbHZtNWtjKSI+PGxpbmUgeDE9IjM5Ni42Mzc0MTM0NTI2Mjc3IiB5MT0iMjEuMDAwMjIwMzc4ODA4ODc2IiB4Mj0iNDIzLjkxNzIwMzA2ODg1MDk0IiB5Mj0iMzYuNzUwMjM4NzQzNzA2MDYiIHN0eWxlPSJzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLXdpZHRoOjEuMjYiIHN0cm9rZT0idXJsKCcjbGluZS1tdTZ5bXhxM2p0bGdnbHZtNWtjLTEnKSI+PC9saW5lPjxsaW5lIHgxPSIzNjkuMzU3NjAyNjMwNDQzNjQiIHkxPSIzNi43NTAyMDIwMTM5MDQ1ODQiIHgyPSIzOTYuNjM3NDEzNDUyNjI3NyIgeTI9IjIxLjAwMDIyMDM3ODgwODg3NiIgc3R5bGU9InN0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utd2lkdGg6MS4yNiIgc3Ryb2tlPSJ1cmwoJyNsaW5lLW11NnlteHEzanRsZ2dsdm01a2MtMycpIj48L2xpbmU+PGxpbmUgeDE9IjM0Mi4wNzc4MTMwMTQyMjA0IiB5MT0iMjEuMDAwMTgzNjQ5MDA3Mzk3IiB4Mj0iMzY5LjM1NzYwMjYzMDQ0MzY0IiB5Mj0iMzYuNzUwMjAyMDEzOTA0NTg0IiBzdHlsZT0ic3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS13aWR0aDoxLjI2IiBzdHJva2U9InVybCgnI2xpbmUtbXU2eW14cTNqdGxnZ2x2bTVrYy01JykiPjwvbGluZT48bGluZSB4MT0iMzE0Ljc5ODAwMjE5MjAzNjQiIHkxPSIzNi43NTAxNjUyODQxMDMxMDUiIHgyPSIzNDIuMDc3ODEzMDE0MjIwNCIgeTI9IjIxLjAwMDE4MzY0OTAwNzM5NyIgc3R5bGU9InN0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utd2lkdGg6MS4yNiIgc3Ryb2tlPSJ1cmwoJyNsaW5lLW11NnlteHEzanRsZ2dsdm01a2MtNycpIj48L2xpbmU+PGxpbmUgeDE9IjI5My4wODExOTQ4NDMxMTciIHkxPSIxNy42NjQ3ODY2MjQ3NzU0NDUiIHgyPSIzMTQuOTA1MDI2NTM2MDk1NTMiIHkyPSIzMC4yNjQ4MDEzMTY2OTMxOTUiIHN0eWxlPSJzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLXdpZHRoOjEuMjYiIHN0cm9rZT0idXJsKCcjbGluZS1tdTZ5bXhxM2p0bGdnbHZtNWtjLTknKSI+PC9saW5lPjxsaW5lIHgxPSIyODcuNTE4MjEyNTc1ODEzMTUiIHkxPSIyMS4wMDAxNDY5MTkyMDU5MTgiIHgyPSIzMTQuNzk4MDAyMTkyMDM2NCIgeTI9IjM2Ljc1MDE2NTI4NDEwMzEwNSIgc3R5bGU9InN0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utd2lkdGg6MS4yNiIgc3Ryb2tlPSJ1cmwoJyNsaW5lLW11NnlteHEzanRsZ2dsdm01a2MtMTEnKSI+PC9saW5lPjxsaW5lIHgxPSIyNjAuMjM4NDAxNzUzNjI5MSIgeTE9IjM2Ljc1MDEyODU1NDMwMTYyNSIgeDI9IjI4Ny41MTgyMTI1NzU4MTMxNSIgeTI9IjIxLjAwMDE0NjkxOTIwNTkxOCIgc3R5bGU9InN0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utd2lkdGg6MS4yNiIgc3Ryb2tlPSJ1cmwoJyNsaW5lLW11NnlteHEzanRsZ2dsdm01a2MtMTMnKSI+PC9saW5lPjxsaW5lIHgxPSIyMzIuOTU4NjEyMTM3NDA1ODUiIHkxPSIyMS4wMDAxMTAxODk0MDQ0MzgiIHgyPSIyNjAuMjM4NDAxNzUzNjI5MSIgeTI9IjM2Ljc1MDEyODU1NDMwMTYyNSIgc3R5bGU9InN0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utd2lkdGg6MS4yNiIgc3Ryb2tlPSJ1cmwoJyNsaW5lLW11NnlteHEzanRsZ2dsdm01a2MtMTUnKSI+PC9saW5lPjxsaW5lIHgxPSIyMDUuNjc4ODAxMzE1MjIxODIiIHkxPSIzNi43NTAwOTE4MjQ1MDAxNDYiIHgyPSIyMzIuOTU4NjEyMTM3NDA1ODUiIHkyPSIyMS4wMDAxMTAxODk0MDQ0MzgiIHN0eWxlPSJzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLXdpZHRoOjEuMjYiIHN0cm9rZT0idXJsKCcjbGluZS1tdTZ5bXhxM2p0bGdnbHZtNWtjLTE3JykiPjwvbGluZT48bGluZSB4MT0iMTc4LjI5MTk4NzM1NDkzOTQiIHkxPSIyNy40ODU0Mzc0MjcwMTI4NyIgeDI9IjIwMC4xMTU4MTkwNDc5MTgwMiIgeTI9IjQwLjA4NTQ1MjExODkzMDYyIiBzdHlsZT0ic3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS13aWR0aDoxLjI2IiBzdHJva2U9InVybCgnI2xpbmUtbXU2eW14cTNqdGxnZ2x2bTVrYy0xOScpIj48L2xpbmU+PGxpbmUgeDE9IjE3OC4zOTkwMTE2OTg5OTg1OCIgeTE9IjIxLjAwMDA3MzQ1OTYwMjk2IiB4Mj0iMjA1LjY3ODgwMTMxNTIyMTgyIiB5Mj0iMzYuNzUwMDkxODI0NTAwMTQ2IiBzdHlsZT0ic3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS13aWR0aDoxLjI2IiBzdHJva2U9InVybCgnI2xpbmUtbXU2eW14cTNqdGxnZ2x2bTVrYy0yMScpIj48L2xpbmU+PGxpbmUgeDE9IjE1MS4xMTkyMDA4NzY4MTQ1NSIgeTE9IjM2Ljc1MDA1NTA5NDY5ODY2NiIgeDI9IjE3OC4zOTkwMTE2OTg5OTg1OCIgeTI9IjIxLjAwMDA3MzQ1OTYwMjk2IiBzdHlsZT0ic3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS13aWR0aDoxLjI2IiBzdHJva2U9InVybCgnI2xpbmUtbXU2eW14cTNqdGxnZ2x2bTVrYy0yMycpIj48L2xpbmU+PGxpbmUgeDE9IjEyMy44Mzk0MTEyNjA1OTEzMyIgeTE9IjIxLjAwMDAzNjcyOTgwMTQ4IiB4Mj0iMTUxLjExOTIwMDg3NjgxNDU1IiB5Mj0iMzYuNzUwMDU1MDk0Njk4NjY2IiBzdHlsZT0ic3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS13aWR0aDoxLjI2IiBzdHJva2U9InVybCgnI2xpbmUtbXU2eW14cTNqdGxnZ2x2bTVrYy0yNScpIj48L2xpbmU+PGxpbmUgeDE9Ijk2LjU1OTYwMDQzODQwNzI3IiB5MT0iMzYuNzUwMDE4MzY0ODk3MTkiIHgyPSIxMjMuODM5NDExMjYwNTkxMzMiIHkyPSIyMS4wMDAwMzY3Mjk4MDE0OCIgc3R5bGU9InN0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utd2lkdGg6MS4yNiIgc3Ryb2tlPSJ1cmwoJyNsaW5lLW11NnlteHEzanRsZ2dsdm01a2MtMjcnKSI+PC9saW5lPjxsaW5lIHgxPSI2OS4yNzk4MTA4MjIxODQwNSIgeTE9IjIxIiB4Mj0iOTYuNTU5NjAwNDM4NDA3MjciIHkyPSIzNi43NTAwMTgzNjQ4OTcxOSIgc3R5bGU9InN0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utd2lkdGg6MS4yNiIgc3Ryb2tlPSJ1cmwoJyNsaW5lLW11NnlteHEzanRsZ2dsdm01a2MtMjknKSI+PC9saW5lPjxsaW5lIHgxPSI0MS44OTI5ODQzODc5MDExOSIgeTE9IjMwLjI2NDYxNzUyMzU5Mjk2IiB4Mj0iNjMuNzE2ODMzMDQ1NjQ4NDIiIHkyPSIxNy42NjQ2MzIyMTU1MTY0NjMiIHN0eWxlPSJzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLXdpZHRoOjEuMjYiIHN0cm9rZT0idXJsKCcjbGluZS1tdTZ5bXhxM2p0bGdnbHZtNWtjLTMxJykiPjwvbGluZT48bGluZSB4MT0iNDIiIHkxPSIzNi43NDk5ODE2MzUwOTU2NSIgeDI9IjY5LjI3OTgxMDgyMjE4NDA1IiB5Mj0iMjEiIHN0eWxlPSJzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLXdpZHRoOjEuMjYiIHN0cm9rZT0idXJsKCcjbGluZS1tdTZ5bXhxM2p0bGdnbHZtNWtjLTMzJykiPjwvbGluZT48L2c+PGc+PHRleHQgeD0iNDIzLjkxNzIwMzA2ODg1MDk0IiB5PSIzNi43NTAyMzg3NDM3MDYwNiIgY2xhc3M9ImRlYnVnIiBmaWxsPSIjZmYwMDAwIiBzdHlsZT0iCiAgICAgICAgICAgICAgICBmb250OiA1cHggRHJvaWQgU2Fucywgc2Fucy1zZXJpZjsKICAgICAgICAgICAgIj48L3RleHQ+PHRleHQgeD0iMzk2LjYzNzQxMzQ1MjYyNzciIHk9IjIxLjAwMDIyMDM3ODgwODg3NiIgY2xhc3M9ImRlYnVnIiBmaWxsPSIjZmYwMDAwIiBzdHlsZT0iCiAgICAgICAgICAgICAgICBmb250OiA1cHggRHJvaWQgU2Fucywgc2Fucy1zZXJpZjsKICAgICAgICAgICAgIj48L3RleHQ+PHRleHQgeD0iMzY5LjM1NzYwMjYzMDQ0MzY0IiB5PSIzNi43NTAyMDIwMTM5MDQ1ODQiIGNsYXNzPSJkZWJ1ZyIgZmlsbD0iI2ZmMDAwMCIgc3R5bGU9IgogICAgICAgICAgICAgICAgZm9udDogNXB4IERyb2lkIFNhbnMsIHNhbnMtc2VyaWY7CiAgICAgICAgICAgICI+PC90ZXh0Pjx0ZXh0IHg9IjM0Mi4wNzc4MTMwMTQyMjA0IiB5PSIyMS4wMDAxODM2NDkwMDczOTciIGNsYXNzPSJkZWJ1ZyIgZmlsbD0iI2ZmMDAwMCIgc3R5bGU9IgogICAgICAgICAgICAgICAgZm9udDogNXB4IERyb2lkIFNhbnMsIHNhbnMtc2VyaWY7CiAgICAgICAgICAgICI+PC90ZXh0Pjx0ZXh0IHg9IjMxNC43OTgwMDIxOTIwMzY0IiB5PSIzNi43NTAxNjUyODQxMDMxMDUiIGNsYXNzPSJkZWJ1ZyIgZmlsbD0iI2ZmMDAwMCIgc3R5bGU9IgogICAgICAgICAgICAgICAgZm9udDogNXB4IERyb2lkIFNhbnMsIHNhbnMtc2VyaWY7CiAgICAgICAgICAgICI+PC90ZXh0Pjx0ZXh0IHg9IjI4Ny41MTgyMTI1NzU4MTMxNSIgeT0iMjEuMDAwMTQ2OTE5MjA1OTE4IiBjbGFzcz0iZGVidWciIGZpbGw9IiNmZjAwMDAiIHN0eWxlPSIKICAgICAgICAgICAgICAgIGZvbnQ6IDVweCBEcm9pZCBTYW5zLCBzYW5zLXNlcmlmOwogICAgICAgICAgICAiPjwvdGV4dD48dGV4dCB4PSIyNjAuMjM4NDAxNzUzNjI5MSIgeT0iMzYuNzUwMTI4NTU0MzAxNjI1IiBjbGFzcz0iZGVidWciIGZpbGw9IiNmZjAwMDAiIHN0eWxlPSIKICAgICAgICAgICAgICAgIGZvbnQ6IDVweCBEcm9pZCBTYW5zLCBzYW5zLXNlcmlmOwogICAgICAgICAgICAiPjwvdGV4dD48dGV4dCB4PSIyMzIuOTU4NjEyMTM3NDA1ODUiIHk9IjIxLjAwMDExMDE4OTQwNDQzOCIgY2xhc3M9ImRlYnVnIiBmaWxsPSIjZmYwMDAwIiBzdHlsZT0iCiAgICAgICAgICAgICAgICBmb250OiA1cHggRHJvaWQgU2Fucywgc2Fucy1zZXJpZjsKICAgICAgICAgICAgIj48L3RleHQ+PHRleHQgeD0iMjA1LjY3ODgwMTMxNTIyMTgyIiB5PSIzNi43NTAwOTE4MjQ1MDAxNDYiIGNsYXNzPSJkZWJ1ZyIgZmlsbD0iI2ZmMDAwMCIgc3R5bGU9IgogICAgICAgICAgICAgICAgZm9udDogNXB4IERyb2lkIFNhbnMsIHNhbnMtc2VyaWY7CiAgICAgICAgICAgICI+PC90ZXh0Pjx0ZXh0IHg9IjE3OC4zOTkwMTE2OTg5OTg1OCIgeT0iMjEuMDAwMDczNDU5NjAyOTYiIGNsYXNzPSJkZWJ1ZyIgZmlsbD0iI2ZmMDAwMCIgc3R5bGU9IgogICAgICAgICAgICAgICAgZm9udDogNXB4IERyb2lkIFNhbnMsIHNhbnMtc2VyaWY7CiAgICAgICAgICAgICI+PC90ZXh0Pjx0ZXh0IHg9IjE1MS4xMTkyMDA4NzY4MTQ1NSIgeT0iMzYuNzUwMDU1MDk0Njk4NjY2IiBjbGFzcz0iZGVidWciIGZpbGw9IiNmZjAwMDAiIHN0eWxlPSIKICAgICAgICAgICAgICAgIGZvbnQ6IDVweCBEcm9pZCBTYW5zLCBzYW5zLXNlcmlmOwogICAgICAgICAgICAiPjwvdGV4dD48dGV4dCB4PSIxMjMuODM5NDExMjYwNTkxMzMiIHk9IjIxLjAwMDAzNjcyOTgwMTQ4IiBjbGFzcz0iZGVidWciIGZpbGw9IiNmZjAwMDAiIHN0eWxlPSIKICAgICAgICAgICAgICAgIGZvbnQ6IDVweCBEcm9pZCBTYW5zLCBzYW5zLXNlcmlmOwogICAgICAgICAgICAiPjwvdGV4dD48dGV4dCB4PSI5Ni41NTk2MDA0Mzg0MDcyNyIgeT0iMzYuNzUwMDE4MzY0ODk3MTkiIGNsYXNzPSJkZWJ1ZyIgZmlsbD0iI2ZmMDAwMCIgc3R5bGU9IgogICAgICAgICAgICAgICAgZm9udDogNXB4IERyb2lkIFNhbnMsIHNhbnMtc2VyaWY7CiAgICAgICAgICAgICI+PC90ZXh0Pjx0ZXh0IHg9IjY5LjI3OTgxMDgyMjE4NDA1IiB5PSIyMSIgY2xhc3M9ImRlYnVnIiBmaWxsPSIjZmYwMDAwIiBzdHlsZT0iCiAgICAgICAgICAgICAgICBmb250OiA1cHggRHJvaWQgU2Fucywgc2Fucy1zZXJpZjsKICAgICAgICAgICAgIj48L3RleHQ+PHRleHQgeD0iNDcuMjUiIHk9IjQxLjk5OTk4MTYzNTA5NTY1IiBjbGFzcz0iZWxlbWVudC1tdTZ5bXhxM2p0bGdnbHZtNWtjIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0eWxlPSJ0ZXh0LWFuY2hvcjogc3RhcnQ7IHdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YjsgdGV4dC1vcmllbnRhdGlvbjogbWl4ZWQ7IGxldHRlci1zcGFjaW5nOiBub3JtYWw7IGRpcmVjdGlvbjogcnRsOyB1bmljb2RlLWJpZGk6IGJpZGktb3ZlcnJpZGU7Ij48dHNwYW4+TzwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHg9IjQyIiB5PSIzNi43NDk5ODE2MzUwOTU2NSIgY2xhc3M9ImRlYnVnIiBmaWxsPSIjZmYwMDAwIiBzdHlsZT0iCiAgICAgICAgICAgICAgICBmb250OiA1cHggRHJvaWQgU2Fucywgc2Fucy1zZXJpZjsKICAgICAgICAgICAgIj48L3RleHQ+PC9nPjwvc3ZnPg=="/>
Estimate the energy content of a kilogram of butter. How close is this to the true result?

Solution. (a) A typical diet is 2000 Calories per day, where the "Calorie" used to describe nutritional facts is actually a kilocalorie, which is about 4000 J. A stick of butter has about 800 Calories, giving an energy of $3 \times 10 ^ { 6 } \mathrm {~J}$.

(b) The power is
$$
\frac { ( 2000 \mathrm { Cal } ) ( 4000 \mathrm {~J} / \mathrm { Cal } ) } { 86400 \mathrm {~s} } \approx 100 \mathrm {~W} .
$$
This is used to maintain homeostasis in your body, and is eventually dissipated as heat.
(c) A rough estimate for the surface area of the human body is $A \approx 1 \mathrm {~m} ^ { 2 }$. Human skin is on the order of 300 K, so $P \sim A \sigma T ^ { 4 } \approx 500 \mathrm {~W}$.
This is wrong, because it can't be higher than (b). The point is that the radiation output by the human body is almost completely cancelled by the radiation input by the environment, which is at almost the same temperature (in absolute terms). For example, in typical indoor conditions, the environment is at 70° F and human skin is at 90° F, for a difference of about 10 K. So the power is smaller by a factor of $1 - ( 290 / 300 ) ^ { 4 } = 0.13$, giving a reasonable 65 W. It's still a significant contribution, but not unreasonably large. Of course, in practice it's further reduced by wearing clothes, which trap a layer of insulating air and cloth near you.
(d) 5°F is $5 \times 5 / 9 ^ { \circ } \mathrm { C } \approx 3 ^ { \circ } \mathrm { C }$. Now we use $Q = m c \Delta T$, and since humans are mostly water, we'll approximate the specific heat to be the same as water. We take a human mass of 70 kg. Since the "Calorie" used to describe food is actually a kilocalorie (amount of energy needed to raise 1 kg by 1° C), we just need ~ 200 Calories to raise our temperature back to normal.

A cute, related estimate is the caloric cost of drinking ice-cold water. If you drink eight cups of water a day, that's 2 kg of water. Warming it from 0° C to ~ 35° C takes ~ 70 Calories.
(e) A basic estimate for the binding energy is
$$
E \sim \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } r } \sim 2 \times 10 ^ { - 18 } \mathrm {~J} .
$$
As a check, this is about 10 eV, and the binding energy of hydrogen is about 13.6 eV (one of those classic numbers you should remember), so this is in the right ballpark. Of course, the energy is actually negative, even though electrons repel, because it's due to how the electrons are attracted to the nuclei. We can, however, very roughly estimate this negative energy using the positive energy of repulsion $e ^ { 2 } / 4 \pi \epsilon _ { 0 } r$ because all energy scales in the problem should be roughly similar.
Actually, in reality the answer should be about an order of magnitude lower, for two reasons. The first is simply that atomic separations are a bit bigger, but this is cancelled by the fact that the nuclei have charge $Z _ { i } > 1$. The main issue is that covalent bonds are a bit more subtle.
Naively, you could say that a covalent bond is attractive because the electrons in one atom are attracted to the nuclei of the other. But this is too naive, because at least parametrically, it's cancelled out by the repulsion of the nuclei with each other, and the repulsion of the electrons with each other, as all four of these terms are of order $\pm e ^ { 2 } / 4 \pi \epsilon _ { 0 } r$. Covalent bonds are stable because the electron orbitals can deform a bit, so that the negative contributions end up a bit bigger than the positive ones. So $e ^ { 2 } / 4 \pi \epsilon _ { 0 } r$ isn't really an estimate for the binding energy, but for the sizes of terms which mostly cancel out to give the binding energy, which is why the real answer is about 10 times smaller.
(f) Fats are mostly carbon. As a very rough estimate let's say that the carbon atoms end up in bonds that are twice as stable as before, so the energy released per carbon atom is on the order of magnitude of what we found in part (e). Then
$$
\frac { \text { energy } } { \text { kilogram } } = \frac { \text { energy } } { \text { C atom } } \frac { \mathrm { C } \text { atoms } } { \text { mole } } \left( \frac { \text { kilograms } } { \text { mole } } \right) ^ { - 1 } \sim \left( 2 \times 10 ^ { - 18 } \mathrm {~J} \right) N _ { A } \left( \frac { 12 \mathrm {~g} } { \text { mole } } \right) ^ { - 1 } = 10 ^ { 8 } \mathrm {~J} / \mathrm { kg } .
$$
For comparison, the energy of one gram of fat is 9 calories, so the true answer is
$$
( 9 ) ( 4000 ) ( 1000 ) \frac { \mathrm { J } } { \mathrm {~kg} } = 3.6 \times 10 ^ { 7 } \mathrm {~J} / \mathrm { kg }
$$
which is not too far off!
[2] Problem 31 (Povey). When human beings lose weight, most of it is by exhalation of carbon. About 20\% of the air in the atmosphere is oxygen. When we breathe in and then out, about 25\% of the oxygen is converted to carbon dioxide.
(a) Estimate the mass of air contained in a single breath.
(b) Estimate the amount of weight we lose every day by breathing alone.

Solution. (a) If you don't take a deep breath, you can barely blow up a crushed plastic water bottle with volume 0.5 L, so we can take this to be the volume of a breath.

From the ideal gas law $V / n = R T / P$, a mole of gas takes up 22.4 L of volume at atmospheric pressure and $T = 273 \mathrm {~K}$, and we round this up to 25 L since body temperature is a bit warmer.
Air is mostly nitrogen $\left( \mathrm { N } _ { 2 } \right)$ with molecular mass 28 g/mol. Then one breath should have a mass of $( 0.5 \mathrm {~L} ) / ( 25 \mathrm {~L} / \mathrm { mol } ) ( 28 \mathrm {~g} / \mathrm { mol } ) \approx 0.6 \mathrm {~g}$.

(b) Humans breathe around 10 to 15 times a minute, so let's use 12.5, giving around 20,000 breaths in a day, corresponding to 12 kg of air.
In each breath, 20\% of the air is oxygen, and 25\% of the oxygen is converted to carbon dioxide, for a net fraction of 5\%. Carbon dioxide ( $\mathrm { CO } _ { 2 }$ ) has a molecular mass of $44 \mathrm {~g} / \mathrm { mol }$, and oxygen is 32 g/mol. Thus we lose a proportion of $( 44 / 32 - 1 ) = 0.375$ of the mass of the air we breathe in every day, corresponding to $( 0.375 ) ( 0.05 ) ( 12 \mathrm {~kg} ) = 0.2 \mathrm {~kg}$. Most of the (non-water) mass of the food we eat leaves this way.

[2] Problem 32. How long a line can you write with a pencil?
Solution. Pencil lead is made of graphite, a form of carbon. The spacing between the carbon atoms is $d \sim 10 ^ { - 10 } \mathrm {~m}$, the length of the lead is $L \sim 10 \mathrm {~cm}$, and the radius of the lead is $r \sim 1 \mathrm {~mm}$. So if the pencil deposited a layer of carbon one atom thick, we would get a length

$$
\frac { r ^ { 2 } L } { r d } \sim 10 ^ { 6 } \mathrm {~m} .
$$

This is clearly an overestimate, but how should we estimate the thickness of the carbon layer?
One way is to note that graphene, a single layer of carbon atoms in a hexagonal lattice, can famously be made by peeling Scotch tape off graphite. So each layer of tape only contains a few layers of atoms. If you peel tape off a mark made by a pencil, it won't immediately remove it, but there will be noticeable progress after several rounds. So we can guess there is a layer of ~ 100 carbon atoms, leading to a total length $\sim 10 ^ { 4 } \mathrm {~m}$.
