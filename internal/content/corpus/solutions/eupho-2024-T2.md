---
id: eupho-2024-T2
problem: eupho-2024-T2
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2024
verification_status: unverified
figure_files: []
---
## Solution

Let us denote the reference frames of Alice, Bob and gift by $A$, $B$, $G$, respectively. We use the notation $\gamma_v = \dfrac{1}{\sqrt{1 - v^2/c^2}}$.

### Part a) (i)

**Solution 1.** Let $l_x$ be the distance between two gifts in frame $x$. Since $G$ is the rest frame of the gifts, we have $l_A = l_G/\gamma_v$, $l_B = l_G/\gamma_{v_B}$, where $v_B$ is the relative velocity of frames $B$ and $G$. According to the formula for relativistic addition of velocities, the relative velocity $v_B$ is given by

$$v_B = \frac{u + v}{1 + uv/c^2} = \frac{35}{37}\,c, \tag{8}$$

where we used the values $u = \tfrac35 c$, $v = \tfrac45 c$. Together with $l_A = v\Delta t_0$ this gives

$$l_B = v\Delta t_0\,\frac{\gamma_v}{\gamma_{v_B}} = \frac{16}{37}\Delta t_0\, c.$$

**Solution 2.** Consider the two events that gift 1 is sent and the consecutive gift 2 is sent. According to the Lorentz transformation, if an event has coordinates $t, x$ in a certain reference frame, the same event has coordinates $t' = (t - ux/c^2)\gamma_u$, $x' = (x - ut)\gamma_u$, where $u$ is the relative velocity of the reference frames. In $A$, these events have coordinates $(t_{1,A}, x_{1,A}) = (0,0)$ and $(t_{2,A}, x_{2,A}) = (\Delta t_0, 0)$. The relative velocity of $A$ and $B$ is $-u$. Therefore, in $B$ these events have coordinates $(t_{1,B}, x_{1,B}) = (0,0)$ and $(t_{2,B}, x_{2,B}) = (\Delta t_0\gamma_u, u\Delta t_0\gamma_u)$.

We need to determine the position of gift 1 at time $t_{2,B}$ in frame $B$. If $v_B$ is the relative velocity of the gift and $B$ given by (8), the position of gift 1 is $x_{1,B}(t_{2,B}) = v_B t_{2,B}$. Hence, in frame $B$ the distance between the two gifts is

$$l_B = x_{1,B}(t_{2,B}) - x_{2,B}(t_{2,B}) = (v_B - u)\Delta t_0\gamma_u = \frac{16}{37}\Delta t_0\, c.$$

**Solution 3.** The time interval $\Delta t_0 = \Delta t_{0,A}$ is the proper time of events in Alice's frame (Alice sending gifts, which happen at the same location in Alice's frame), which is moving with $u$ in Bob's frame. The time interval between these events in Bob's frame is $\Delta t_{0,B} = \gamma_u\Delta t_{0,A}$. The speed of the gift Alice sent in Alice's frame is $v_A = v = \tfrac45 c$ and in Bob's frame the speed of the gift is $v_B$ as found in (8). In Bob's frame, in the time interval $\Delta t_{0,B}$ two gifts are sent. During this time Alice's ship has moved $u\Delta t_{0,B}$, the previously sent gift moved $v_B\Delta t_{0,B}$, and the distance between both gifts in Bob's frame is

$$l_B = (v_B - u)\Delta t_{0,B} = \frac{16}{37}\,c\Delta t_0.$$

### Part a) (ii)

Assuming Part (i) is solved first, the time interval at which the gifts arrive at Bob is

$$\Delta t_1 = \frac{l_B}{v_B} = \frac{16}{35}\Delta t_0.$$

### Part b)

**Solution 1.** Suppose that at $t_{0,A} = 0$ Alice sees Bob's spaceship at distance $d_B$. The time the light travelled from Bob to Alice is $t_l = d_B/c$. (In Alice's frame, the actual distance from Alice to Bob's spaceship is $L = d_B - u d_B/c$.)

First compute the number of visible **outgoing** gifts. Alice sees all gifts she sent until she sees them reach the spaceship. Consider the gift Alice just sees arriving at Bob, the oldest visible gift. If this gift flew past Bob's ship, it would be located at distance $d_B + v t_l$. Therefore the number of gifts between the oldest visible gift and Alice is

$$N_\mathrm{out} = \frac{d_B + v t_l}{l_A} = \frac{d_B(1 + v/c)}{v\Delta t_0}.$$

Equivalently, $d_B/l_A$ gifts were between the considered gift and Alice at time $-t_l$, and during time $t_l$ Alice sent out an additional $t_l/\Delta t_0$ gifts, giving $N_\mathrm{out} = \dfrac{d_B}{v\Delta t_0} + \dfrac{d_B}{c\Delta t_0}$.

Now compute the number of visible **incoming** gifts. Alice sees the newest visible gift just leave Bob's ship. In Alice's frame, the actual distance from her to the newest visible gift is $d_B - v_B t_l = d(1 - v_B/c)$. The distance between incoming gifts is $l_B$, computed in part a). Hence the number of visible incoming gifts is

$$N_\mathrm{in} = \frac{d_B(1 - v_B/c)}{l_B} = \frac{d_B(1 - v_B/c)}{\Delta t_0\, c}\cdot\frac{37}{16}.$$

In total,

$$\frac{N_\mathrm{out}}{N_\mathrm{in}} = \frac{(1 + v/c)\,c}{(1 - v_B/c)\,v}\cdot\frac{16}{37} = 18.$$

**Solution 2 (symmetry).** Since both Alice and Bob send the gifts in exactly the same way and their relative speed to each other is the same, there is symmetry between them: Bob sees exactly the same number of gifts he will receive as Alice, and the same is true for the gifts sent. So we can continue in Bob's frame.

First, the gifts Bob **receives**. Between Bob and Alice at any moment there are finitely many gifts already sent by Alice and not yet received by Bob, but Bob does not see them all because the light of the most distant gift has not yet reached him. The furthest gift Bob can see was sent to him at time $t = 0$ (in Bob's frame) and Bob sees it for the first time at time $t_1$, when it has travelled distance $v_B t_1$ and the light emitted at $t = 0$ has travelled $c t_1$ and just reached him. The distance between two consecutive gifts moving towards Bob is $v_B\Delta t_1$. The number of gifts Bob sees moving towards him is

$$N_{A\to B} = \frac{(c - v_B)t_1}{v_B\Delta t_1}. \tag{9}$$

Now the gifts Bob **sends** to Alice. Let $t = 0$ be the moment the gift sent by Bob reaches Alice; the light carrying the receipt information reaches Bob at $t_1$. Between $t = 0$ and $t_1$ Bob keeps sending gifts, so there appear to be more gifts on the way to Alice than there actually are (it is practically as if the received gift moves further beyond Alice an additional distance $v t_1$ before Bob realizes it is received). The number of gifts Bob sees moving away from him is

$$N_{B\to A} = \frac{(c + v)t_1}{v\Delta t_0}. \tag{10}$$

The ratio of the number of gifts moving away from him to those moving towards him is

$$\frac{N_{B\to A}}{N_{A\to B}} = \frac{(c + v)t_1}{v\Delta t_0}\cdot\frac{v_B\Delta t_1}{(c - v_B)t_1} = \frac{(c + v)v_B\Delta t_1}{v\Delta t_0(c - v_B)} = 18, \tag{11}$$

using $\Delta t_1 = \tfrac{16}{35}\Delta t_0$, $v_B = \tfrac{35}{37}c$ and $v = \tfrac45 c$.

### Graphical solution (part a)

Throughout the graphical solution, set $c = 1$ and $\Delta t_0 = 1$. Working in Alice's frame, draw the world line of Bob with slope $-5/3$ and the $x$-axis of Bob with slope $-3/5$. The launch of one gift from Alice (red) and another launch at the origin (black) are marked on Alice's world line.

**a)i** We want the separation between two events that happen at the same time in Bob's frame. The first launched gift has slope $5/4$; its intersection with Bob's $x$-axis in Alice's frame is the point $(x, t) = \left(\tfrac{20}{37}, -\tfrac{12}{37}\right)$. Applying the Lorentz transform into Bob's frame,

$$\Delta t_1 = \frac{5}{4}\cdot\frac{20}{37} - \frac{3}{5}\cdot\frac{-12}{37} = \frac{16}{37}.$$

[Note: this is the spatial separation $l_B = \tfrac{16}{37}c\Delta t_0$; in Bob's coordinates the point maps to $(\tfrac{16}{37}, 0)$.] Alternatively, use the Lorentz-invariant interval $(t_a)^2 - (x_a)^2 = (t_b)^2 - (x_b)^2$ with $t_b = 0$.

**a)ii** Most students obtain an answer that depends on the result of a)i, with the technique outlined in the analytical section. By symmetry, the time interval between arrivals of Bob's gift in Alice's frame equals the time interval between arrivals of Alice's gift in Bob's frame.
