---
id: kevin-zhou-r1-p025
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r1-p025
solution_type: author
source_document: solution-document-kevin-zhou-r1sol
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R1Sol.pdf."
---

[4] Problem 25. A rocket starts from rest in the lab frame at the origin, then accelerates with uniform
proper acceleration a0 (i.e. as measured by an accelerometer on the ship).
(a) Show that the acceleration measured in the lab frame is a0/γ3. (We already proved this more
generally in problem 23, but try to do this more explicitly by working in the comoving frame,
then going back to the lab frame.)
(b) Find the speed of the rocket ship in the lab frame as a function of time t in the lab frame,
and as a function of the proper time τ elapsed on the rocket.
(c) Find t(τ), x(t), and x(τ), and comment on their limits.
(d) If a light beam starts a distance d > d0 behind the rocket at time t = 0, it will never catch
up to the rocket. Find the value of d0.
Solution. (a) Suppose the rocket has speed v in the lab frame, and now consider the momentarily
comoving frame S′ moving with speed v. In that frame, in time dt′, the rocket accelerates from
zero speed to speed a0 dt′. Then the new speed in the lab frame is the result of relativistically
adding velocities v and a0 dt′,
v + a0 dt′
1 + va0 dt′
= v + a0 dt′
− v2
a0 dt′
+ O(dt2
).
Therefore, we have
dv
dt
= a0(1 − v2
)
dt′
dt
= a0(1 − v2
)3/2
=
a0
γ3
as desired.
27
Kevin Zhou Physics Olympiad Handouts
(b) Separating and integrating, we have
a0t =
Z v
0
dv
(1 − v2)3/2
=
v
√
1 − v2
by a trigonometric substitution. (Here and below, we’re using an abuse of notation mentioned
in M1, where the integration variable is denoted by the same letter as its upper bound.) Then
v(t) =
a0t
p
1 + (a0t)2
.
Next, note that the increment of proper time measured by the rocket is dτ = dt′, because dt′
is always defined in the frame momentarily moving with the rocket. Therefore
dv
dτ
= a0(1 − v2
), a0τ =
Z v
0
dv
1 − v2
.
Using hyperbolic trig substitution, we have
v(τ) = tanh(a0τ)
which we could also have concluded immediately, since the rapidity changes at rate a0.
(c) It’s easy to crank these out given the above results. First, note that
dt = γ dτ =
dτ
q
1 − tanh2
(a0τ)
= cosh(a0τ)dτ.
Integrating both sides gives
t(τ) =
sinh(a0τ)
a0
.
Next, we integrate the answer to part (b),
x(t) =
Z t
0
a0t
p
1 + (a0t)2
dt =
p
1 + (a0t)2 − 1
a0
.
Finally, plugging in our expression for t(τ) gives
x(τ) =
q
1 + sinh2
(a0τ) − 1
a0
=
cosh(a0τ) − 1
a0
.
These results make sense. At small t and τ, they just reduce to the familiar results t = τ and
x = a0t2/2. At large t, x(t) increases linearly, since the speed of the rocket approaches the
speed of light. What is perhaps most interesting is that at large τ, x(τ) increases exponentially,
because of how quickly the time dilation effect increases. If it’s possible to make it to another
star in a human lifetime, it’s actually not that much harder to cross the whole galaxy! This is
a neat result, recently highlighted in the 2022 IPhO and the popular book Project Hail Mary.
(d) In the limit t → ∞, we have x(t) ≈ t − 1/a0, which implies d0 = 1/a0. This is the so-called
Rindler horizon. Since it has some features in common with the event horizon of a black hole,
this setup is this problem is often used as a toy model in theoretical physics.
28
Kevin Zhou Physics Olympiad Handouts
[3] Problem 26.   ^ 1 0USAPhO 2020, problem A3. An unusual problem that tests your understanding
of momentarily comoving frames, and higher-dimensional Lorentz transformations. As a warning,
this question requires you to make an unstated assumption. The fact that uniformly moving clocks
have their time dilated by a factor of γ follows directly from the postulates of special relativity.
But here you’ll have to assume this also holds for accelerating clocks, even though clocks can tell
if they’re accelerating, and may tick differently. This is called the clock hypothesis. For example,
on a roller coaster, a pendulum clock doesn’t obey the clock hypothesis, but a quartz watch does.
Also, the solution is a bit misleading, so don’t worry if you thought about the problem differently
as long as you got the same final answers.
[3] Problem 27 (Morin 11.26). The following problem is called Bell’s spaceship paradox. It caused a
stir at CERN when many particle physicists could not agree on the answer.
Two identical spaceships float in space and are at rest relative to each other. They are connected
by a string, which cannot withstand an arbitrary amount of stretching.
At a given instant, the spaceships simultaneously (with respect to their initial inertial frame) start
accelerating in the same direction along the line between them, with the same constant proper
acceleration. Will the string eventually break?
Solution. On one hand, the distance between the rockets is always L in the lab frame, so applying
length contraction in reverse, the distance between the two rockets is γL in the co-moving frame,
indicating that the string stretches and breaks. On the other hand, in the rocket’s frame the two
rockets have the same proper acceleration, which suggests their relative velocity is always zero.
The first argument is correct; the string will break. The second argument fails because of the
relativity of simultaneity. We can consider, at each moment, the inertial frame comoving with the
rear rocket, whose axes are as shown.
x
ct
x′
ct′
rear front
Over time, the x′ axis of this set of inertial frames tilts upward, so the rear rocket sees the front
rocket accelerating faster, and hence moving away.
To see this another way, consider discretizing the acceleration, i.e. converting it into a series
of rocket pulses. Since the clocks of the rockets are initially synchronized, the first pulses are
29
Kevin Zhou Physics Olympiad Handouts
simultaneous according to both rockets. But because of the relativity of simultaneity, within the
frame moving with the rear rocket after the first pulse, the front rocket does the second pulse earlier,
and hence starts to move away. (For a neat visual explanation, see this video.)
[5] Problem 28.   h 1 0APhO 2013, problem 2. This is a challenging question that ties together
everything you’ve learned about kinematics.
30
