---
id: kevin-zhou-t2-p015
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-p015
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

[5] Problem 15. This long problem illustrates some important features of free energy. A rubber
molecule can be modeled in one dimension as a chain consisting of a series of N = N+ + N− ≫ 1
links of length a, where N+ point in the +z direction and N− point in the −z direction. The
orientations of each of the links are independent, and it costs no energy to rotate a link. Thus
all configurations are equally likely at any temperature. Define L = (N− − N+)a to be the total
downward extension of the chain.
(a) Using the approximation mentioned in problem 14 and assuming L ≪ Na, show that
S = NkB

log2 −
L2
2N2a2

and hence show that the entropy decreases as L increases. This model is very basic; for
instance, it tells us nothing about the tension in the chain, but the sign here is correct. (Hint:
notice that the changes in entropy are of order L2/N, and hence are very small. You will have
to be careful with your approximations to avoid dropping an important contribution.)
(b) Note that the entropy doesn’t depend on temperature, because all configurations have the
same energy. In a more realistic model, the total entropy of the molecule would be the sum
of the entropy computed above, plus the entropy due to additional thermal motions, such as
vibrations of the links. Given this, if a rubber band is quickly stretched, does it feel warm or
cold to the touch? (You can check your answer experimentally!)
(c) Now suppose a mass m is hung from the bottom of the chain. Find the average length of the
chain at temperature T, using the Boltzmann distribution. Do not assume L ≪ Na. (The
force that raises this mass is another example of an entropic force.)
(d) It turns out that you can also arrive at this answer by maximizing the entropy of the entire
universe Suniv. Argue in general that Suniv is maximized when the Helmholtz free energy
F = U − TS
is minimized, where U is the total energy of the rubber band and mass, and T is the tem-
perature of the system and its surroundings. (Hint: use the expression for dSuniv, along with
conservation of energy.)
(e) Show that in the limit L ≪ Na, F is indeed minimized at the equilibrium length.
Solution. For convenience, we’ll set kB = a = 1 for now.
(a) We have
S = log
N!
N+!N−!
.
Applying the approximation logN! ≈ N logN − N, the linear terms cancel out, giving
S = N logN − N+ logN+ − N− logN−
= N logN −
1
2
(N + L)log((N + L)/2) −
1
2
(N − L)log((N − L)/2)
= N log2 + N logN −
1
2
(N + L)log(N + L) −
1
2
(N − L)log(N − L).
18
Kevin Zhou Physics Olympiad Handouts
To simplify further, we write the logarithms as
log(N ± L) = logN + log

1 ±
L
N

.
Plugging this in and defining x = L/N gives
S = N log2 −
N
2
((1 + x)log(1 + x) + (1 − x)log(1 − x)).
Expanding the quantity in parentheses is a little tricky, because it vanishes at first order in
x. So since the answer is second order, we need to expand the logarithms to second order to
make sure we have everything. We have
log(1 ± x) = ±x −
x2
2
.
and plugging this in gives
((1 + x)log(1 + x) + (1 − x)log(1 − x)) = x2
+ ....
If we hadn’t included the second-order term in the logarithm, we would have gotten 2x2
instead, leading to an erroneous result.
Putting everything together and restoring the units, we have
S = N log2 −
Nx2
2
= NkB

log2 −
L2
2N2a2

as desired.
(b) Since the process is fast, it is adiabatic, so the entropy of the entire rubber band stays the
same. But we have shown the entropy of the chain configuration degrees of freedom (i.e. ones
which determine the length L) goes down, so the entropy of the other degrees of freedom must
go up. Hence these other degrees of freedom receive heat, and the rubber band feels hot.
By the way, this fact provides a new perspective on a classic puzzle. If you take an ordinary
metal spring, stretch it with a clamp, and put the whole thing in a bath of acid, then when
the acid dissolves the spring, where does the elastic potential energy go? For a metal spring,
the answer is that when you stretch it, you’re pulling the chemical bonds inside of it longer,
so that they’re displaced from the minimum of potential energy. The spring’s constituent
atoms thus start out in a less deep potential well, so when they are dissolved they emerge
with higher energy, which ultimately heats up the bath.
However, for a rubber band the answer is different, because the elastic force is entropic.
Specifically, though you can describe the force from a rubber band macroscopically with a
potential energy, at the microscopic level it doesn’t correspond to any actual potential energy;
we have been assuming throughout this problem that it costs no energy to rotate any of the
links! Accordingly, when you stretch a rubber band, the work you put in is not actually stored
within it as potential energy. It instead warms up the rubber band, and therefore quickly
turns into thermal energy in the room. When the rubber band’s temperature returns to its
original value, its total energy is the same as before you stretched it. If you put this rubber
band in an acid bath, the acid’s final temperature will be the same regardless of how the band
was stretched, because the energy you put in has already left.
19
Kevin Zhou Physics Olympiad Handouts
(c) It’s easiest to look at each link individually. The energy of the +z configuration now is 2mga
greater than the −z configuration, so the ratio of their probabilities is α = e−2mga/kBT . Then
the probability of ±z is
p− =
1
1 + α
, p+ =
α
1 + α
so the expected contribution to the length is
1
1 + α
−
α
1 + α
= tanh(mga/kBT).
By summing over all links, the expected length is
⟨L⟩ = Natanh
mga
kBT
.
Since N is large, thermal fluctuations fall as 1/
√
N by the logic of P2, so this is also approxi-
mately the observed length at all times.
As mentioned in the problem, this raising of the mass is due to an entropic force. Here’s the
fascinating thing: we haven’t specified anything about the dynamics of the molecule in this
problem. For example, it could be made of rigid rods connected with pivots, designed to snap
to the upward or downward position, and immersed inside an ideal gas of temperature T which
occasionally flip them in a collision. Or maybe the rods could be made of iron, and immersed
inside a box of permanent magnets flying around with temperature T, which occasionally flip
them with the magnetic force. The point is that it doesn’t matter! As long as the whole
system is at equilibrium at temperature T, and the expressions above correctly describe the
rod’s entropy, we’ll get the same result for the length ⟨L⟩. We don’t need to talk about where
the entropic force comes from, because the result doesn’t depend on that.
(d) The entropy of the universe is, up to a constant, −F/T, because
−
F
T
= S −
U
T
.
The first term is the rubber band’s entropy, while −U/T accounts for the change of entropy
of the environment by ∆Senv = ∆Uenv/Tenv = −∆U/T. For several steps in this argument,
it’s essential that everything is at temperature T.
(e) In this case the argument of the hyperbolic tangent is small, so
L ≈
mgNa2
kBT
.
On the other hand, we have
F = −mgL − NkBT

log2 −
L2
2N2a2

and we have
∂F
∂L
= −mg +
kBTL
Na2
which implies that
L =
mgNa2
kBT
as expected.
20
Kevin Zhou Physics Olympiad Handouts
Remark: Heat vs. Work
What is the difference between work and heat? If we have a gas in a cylinder with a piston,
moving the piston counts as work. Clearly, if we split the piston into two halves and moved
them independently, this would still be work. But we can keep splitting the piston until
we are down to individual atoms of the piston. These can transfer energy to gas particles
because they can slam into them as the gas particles are bouncing off, like a batter hitting a
baseball. But as mentioned in T1, this is precisely how a hot wall transfers energy to a gas!
So when did we transition from doing work to supplying heat?
The point is that there is no sharp distinction. There’s just energy transfer; work is the
subset of energy transfers that we keep track of in detail, and heat is the subset we don’t.
Entropy quantifies our ignorance of the precise state a system is in. That’s why supplying
heat changes the entropy and doing work doesn’t.
Remark: Is Entropy Subjective?
Our definition of entropy involved the number of states the system “could” be in, but of
course in reality the system is actually in just one state. We really mean the number of
states the system could be in given the information you know. For example, for an ideal gas
we usually know the temperature, pressure, and volume.
You might find this disturbing because it implies the entropy is subjective, depending on
what each person personally knows. But the entropy determines things like F, and hence
the amount of work that can be extracted from the system, so how could it differ?
In fact, there is no contradiction between these two things. For example, suppose that
besides the usual properties, particles in an ideal gas can be slightly bigger or smaller. If
you happen to somehow know that all of the big particles are on the left side of a box and
all the small particles are on the right side, then the entropy you assign to the box is lower
than somebody who doesn’t know about this, and accordingly you can extract more work
from the box. For instance, you can put a filter that only allows small particles through in
the middle, then collect energy as small particles move from right to left.
On the other hand, if you are hit on the head and forget that the particles are sorted by size,
your entropy for the gas goes up. And accordingly, you can now extract less work, because
you wouldn’t know it made sense to put in such a filter in the first place!
While this example may seem contrived, it’s actually exactly the same as our earlier mixing
entropy example! If you don’t have any equipment that can distinguish between oxygen and
nitrogen molecules, then the “unmixed” state already has just as much entropy as the mixed
state. In this case, the entropy doesn’t change at all when you allow the gases to mix.
What this example shows is that you don’t have to know everything about a system to use
thermodynamics. Even if you are wrong about how the system behaves microscopically, you
can still use the theory to describe what you can do with the system, using your knowledge.
21
Kevin Zhou Physics Olympiad Handouts
That’s the core reason for the longevity of thermodynamics. As a recent paper put it:
If physical theories were people, thermodynamics would be the village witch. Over
the course of three centuries, she smiled quietly as other theories rose and withered,
surviving major revolutions in physics, like the advent of general relativity and
quantum mechanics. The other theories find her somewhat odd, somehow different
in nature from the rest, yet everyone comes to her for advice, and no one dares
to contradict her.
For more about this perspective, see the insightful articles by E.T. Jaynes, The Gibbs Paradox
and Information Theory and Statistical Mechanics. (But don’t read too much of his later
work, since he got pretty cranky with age.)
4 Blackbody Radiation
Idea 9: Planck’s Law
As we will show in X1, the radiation power per unit area from an object at temperature T
at frequency f, per unit frequency, is given by Planck’s law,
I(f) =
2πhf3
c2
1
ehf/kBT − 1
e(f)
where e(f) is called the emissivity. For an ideal blackbody, e(f) = 1. By integrating over all
frequencies, one finds that the total power per unit area from an ideal blackbody is
J =
Z ∞
0
I(f)df = σT4
, σ =
2π5k4
B
15c2h3
.
This is the Stefan–Boltzmann law, which can also be derived with dimensional analysis. It’s
a compact and useful result, which means it comes up quite often in Olympiads.
