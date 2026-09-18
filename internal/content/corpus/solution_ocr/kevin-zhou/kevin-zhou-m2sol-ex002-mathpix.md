---
id: solution-ocr-kevin-zhou-m2sol-ex002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m2-ex002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 2
Show that the tension in a completely flexible static rope, massive or massless, points along the rope everywhere in the rope.

Solution
Consider a tiny segment $d \ell$ of the rope. Since the rope is static, the tension forces on both ends balance, so they are opposite. Let them both be at an angle $\theta$ to the rope direction. Then the net torque on the segment is $( T d \ell ) \sin \theta$. Since this must vanish for static equilibrium, we must have $\theta = 0$ and hence the tension is along the rope. In other words, flexible ropes can transmit force, but they can't transmit torque.


![](../../../figures/solution-ocr/bc56fc96bbf990d904152955.jpg)

It's important to note that the argument above doesn't work for a rigid rod, because the internal forces in a rigid object can look like the picture above. In other words, there can be extra shear forces from the adjacent pieces of the rod that provide the compensating torque. If one tried to set up forces like this in a rope, it would flex instead.

In general, the force distribution within a massless rigid rod can be quite complicated, but if we zoom out, we can replace it with a single tension which does not necessarily point along the rod. This transmits both a force and a torque through the rod, in the sense that a torque is eventually exerted by whatever holds the end of the rod in place. Note that if the rod's supports are free to rotate, then they can't absorb torque, so the rod acts just like a rope, with tension always along it.

## Remark

Sometimes, problem writers will intentionally not introduce any variables that are irrelevant to the answer. This can occur in two ways. First, the variables might just cancel out, as one can often see by dimensional analysis. Second, the specific values of the variables might not matter in the limit when they are very large or small. For instance, if a problem simply states a mass is "very heavy" but doesn't give it a name like $m$, it is asking for the answer in the limit $m \rightarrow \infty$.

## Idea 7

To handle problems where an object is just about to tip over, note that at this moment, the entire normal force will often be concentrated at a point. (For example, when you're about to fall forward, all your weight goes on your toes.) That often means it's a good idea to take torques about this point.

## Example 3: Povey 5.6

In problem 2, we treated the car as a point particle, but in reality it can also tip over. Suppose that on level ground, a car has a distance $d$ between its left and right tires, which are both thin, and its center of mass is a height $h$ above the ground. Now suppose the car turns as in problem 2 on a vertical wall $\left( \theta = 90 ^ { \circ } \right)$ with speed $v$. For what $v$ is this possible?

## Solution

Again working in the noninertial frame of the car, force balance gives

$$
f _ { \text {fric } } = m g , \quad N = \frac { m v ^ { 2 } } { R }
$$

where $f _ { \text {fric } }$ and $N$ are the total friction and normal forces on the four tires. Since $f _ { \text {fric } } / N \leq \mu$,

$$
v \geq \sqrt { g R / \mu }
$$


which matches the general solution to problem 2. But in that problem, we only considered force balance. In this extreme situation, we also have to consider torque balance, i.e. the possibility that the car might topple over. When the car is about to topple over, all the normal and friction force is on the bottom tires. About this point, we have only torques from gravity and the centrifugal force, giving

$$
m g h = \frac { m v ^ { 2 } } { R } \frac { d } { 2 }
$$

and solving for $v$ gives $v = \sqrt { 2 g R h / d }$. Toppling is less likely the higher $v$ is, so the answer is

$$
v \geq \sqrt { g R } \max ( 1 / \sqrt { \mu } , \sqrt { 2 h / d } ) .
$$

Now here's a puzzle for you. A motorcycle only has one set of wheels, so it is like a car with $d \rightarrow 0$. But motorcyclists can perform the motion described here, in the Globe of Death, without toppling over. In fact, it is possible for them to do this when $d = 0$ exactly. How?
