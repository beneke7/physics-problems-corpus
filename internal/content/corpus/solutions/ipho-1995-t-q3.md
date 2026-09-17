---
id: ipho-1995-t-q3
source: ipho
language: en
solution_language: en
translated: false
problem: ipho-1995-t-q3
solution_type: official
source_document: solution-document-ipho-1995-t-s
source_pdf: cache/phoxiv/ipho/1995_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/ipho/1995_T_S.pdf."
---

Solutions to Theoretical Question 3
(a)
The mass of the rod is given equal to the mass of the cylinder M which itself is πa2
ld. Thus the
total mass equals 2M = 2πa2
ld. The mass of the displaced water is surely less than πa2
lρ (when
the buoy is on the verge of sinking). Using Archimedes’ principle, we may at the very least expect
that
2πa2
ld < πa2
lρ or d < ρ/2
In fact, with the floating angle α(< π) as drawn, the volume of displaced water is obtained by
geometry:
α α
a a
2a
V = la2
α − la2
sinαcosα .
By Archimedes’ principle, the mass of the buoy equals the mass of displaced water. Therefore,
2πa2
ld = la2
ρ(α − sinαcosα), i.e. α is determined by the relation
α − sinαcosα = 2dπ/ρ .
(b)
If the cylinder is depressed a small distance z vertically from equilibrium, the nett upward restoring
force is the weight of the extra water displaced or gρ.2asinα.lz, directed oppositely to z. This is
characteristic of simple harmonic motion and hence the Newtonian equation of motion of the buoy
is (upon taking account of the extra factor 1/3)
z
a 2 sinα
8Mz̈/3 = −2ρglzasinα or z̈ +
3ρg sinα
4πda
z = 0 ,
and this is the standard sinusoidal oscillator equation (like a simple pendulum). The solution is of
the type z = sin(ωzt), with the angular frequency
ωz =
*
3ρg sinα
4πda
=
#
3g sinα
2a(α − cosαsinα)
,
where we have used the relation worked out at the end of the first part.
(c)
Without regard to the torque and only paying heed to vertical forces, if the buoy is swung by some
angle so that its weight is supported by the nett pressure of the water outside, the volume of water
displaced is the same as in equilibrium. Thus the centre of buoyancy remains at the same distance
from the centre of the cylinder. Consequently we deduce that the buoyancy arc is an arc of a circle
centred at the middle of the cylinder. In other words, the metacentre M of the swinging motion is
just the centre of the cylinder. In fact the question assumes this.
We should also notice that the centre of mass G of the buoy is at the point where the rod touches the
cylinder, since the masses of rod and cylinder each equal M. Of course the cylinder will experience
a nett torque when the rod is inclined to the vertical. To find the period of swing, we first need to
determine the moment of inertia of the solid cylinder about the central axis; this is just like a disc
about the centre. Thus if M is the cylinder mass
2Mg
2Mg
θ
G
M
$$
I_{0}=\frac{Ma^{2}}{2}=\int_{0}^{a}r^{2}\,\mathrm{d}m
=\int_{0}^{a}r^{2}\frac{2Mr}{a^{2}}\,\mathrm{d}r
=\frac{Ma^{2}}{2}.
$$

The moment of inertia of the rod about its middle is

$$
I_{\mathrm{rod}}=\int_{-a}^{a}\frac{M}{2a}x^{2}\,\mathrm{d}x
=\frac{Ma^{2}}{3}.
$$

Using the parallel-axis theorem, the moment of inertia of the buoy (cylinder plus rod) about the metacentre is

$$
I_{M}=\frac{Ma^{2}}{2}+\left[\frac{Ma^{2}}{3}+M(2a)^{2}\right]
=\frac{29Ma^{2}}{6}.
$$
Finally, use the parallel axis theorem to find the moment of inertia of the buoy (cylinder + rod)
about the metacentre M,
IM = Ma2
/2 + [Ma2
/3 + M(2a)2
] = 29Ma2
/6 .
(In this part we are neglecting the small horizontal motion of the bentre of mass; the water is the
only agent which can supply this force!) When the buoy swings by an angle θ about equilibrium the
restoring torque is 2Mgasinθ ≃ 2Mgaθ for small angles, which represents simple harmonic motion
(like simple pendulum). Therefore the Newtonian rotational equation of motion is
IMθ̈ ≃ −2Mgaθ , or θ̈ +
12g
29a
= 0 .
The solution is a sinusoidal function, θ ∝ sin(ωθt), with angular frequency
ωθ =
&
12g/29a .
(d)
The accelerometer measurements give
Tθ/Tz ≃ 1.5 or (ωz/ωθ)2
≃ 9/4 ≃ 2.25 . Hence
2.25 =
3g sinα
2a(α − sinαcosα)
29a
12g
,
producing the (transcendental) equation
α − sinαcosα ≃ 1.61sinα .
Since 1.61 is not far from 1.57 we have discovered that a physically acceptable solution is α ≃ π/2,
which was to be shown. (In fact a more accurate solution to the above transcendental equation
can be found numerically to be α = 1.591.) Setting alpha = π/2 hereafter, to simplify the algebra,
ω2
z = 3g/πa and 4d/ρ = 1 to a good approximation. Since the vertical period is 1.0 sec,
1.0 = (2π/ωz)2
= 4π3
a/3g ,
giving the radius a = 3 × 9.8/4π3
= .237 m.
We can now work out the mass of the buoy (in SI units),
2M = 2πa2
ld = 2πa2
.a.ρ/4 = πa3
ρ/2 = π × 500 × (.237)3
≃ 20.9 kg .
Solutions to Original Theoretical Question 3
(a)
Choose a frame where z is along the normal to the mirror and the light rays define the x–z plane.
For convenience, recording the energy-momentum in the four-vector form, (px,py,pz,E/c), the
initial photon has
Pi = (psinθi,0,pcosθi,p)
where p = Ei/c = hfi/c.
u
f f
θ θi r
i r
By the given Lorentz transformation rules, in the moving mirror frame the energy-momentum of
the incident photon reads
Pmirror =
+
psinθi,0,
pcosθi − up/c
&
1 − u2/c2
,
p − upcosθi/c
&
1 − u2/c2
,
.
Assuming the collision is elastic in that frame, the reflected photon has energy-momentum,
P′
mirror =
+
psinθi,0,
−pcosθi + up/c
&
1 − u2/c2
,
p − upcosθi/c
&
1 − u2/c2
,
.
Tansforming back to the original frame, we find that the reflected photon has
pxr = psinθi , pyr = 0
pzr =
(−pcosθi + up/c) + u(p − upcosθi/c)/c
1 − u2/c2
Er/c =
(p − upcosθi/c) + u(−pcosθi + up/c)/c
1 − u2/c2
Simplifying these expressions, the energy-momentum of the reflected photon in the original frame is

$$
\mathbf{P}_{r}=\left(
p\sin\theta_{i},\,0,\,
\frac{p\left(-\cos\theta_{i}+2u/c-u^{2}\cos\theta_{i}/c^{2}\right)}{1-u^{2}/c^{2}},\,
\frac{p\left(1-2u\cos\theta_{i}/c+u^{2}/c^{2}\right)}{1-u^{2}/c^{2}}
\right).
$$
Hence the angle of reflection θr is given by
tanθr = −
pxr
pzr
=
sinθi(1 − u2
/c2
)
cosθi − 2u/c + u2 cosθi/c2
=
tanθi(1 − u2
/c2
)
1 + u2/c2 − 2usecθi/c2
,
while the ratio of reflected frequency fr to incident frequency fi is simply the energy ratio,
fr
fi
=
Er
Ei
=
1 − 2ucosθi/c + u2
/c2
1 − u2/c2
.
[For future use we may record the changes to first order in u/c:
tanθr ≃ tanθi(1 + 2usecθi/c) so
tan(θr − θi) =
tanθr − tanθi
1 + tanθr tanθi
≃
2utanθi secθi/c
1 + tan2
θi
≃
2usinθi
c
Thus, θr ≃ θi + 2usinθi/c and fr = fi(1 − 2ucosθi/c).]
(b)
a
b
b secθ
θ
θ
Hereafter define θi = θ. Provided that b/cosθ < a the laser light will reflect oﬀ the mirror, so
cosθ > b/a is needed for photon energy-momentum to be imparted to the mirror. Let us then
define a critical angle α via cosα = b/a.
The change in the normal component $\Delta p_{\parallel}$ of the momentum of a single photon is

$$
\Delta L=\frac{b}{\cos\theta}\left[p\cos\theta
-p\frac{-\cos\theta+2u/c-u^{2}\cos\theta/c^{2}}{1+u^{2}/c^{2}}\right]
=\frac{bp(2\cos\theta-2u/c)}{\cos\theta(1+u^{2}/c^{2})}
\simeq 2bp\left(1-\frac{u\sec\theta}{c}\right).
$$

Since $u\cos\theta=\omega b$, this becomes

$$
\Delta L\simeq 2bp\left(1-\frac{\omega b\sec^{2}\theta}{c}\right).
$$

per photon. Suppose $N$ photons strike every second, with $|\theta|$ less than the critical angle $\alpha$. During a time $\mathrm{d}t=\mathrm{d}\theta/\omega$,

$$
\mathrm{d}L=N\frac{\mathrm{d}\theta}{\omega}\,2bp\left(1-\frac{\omega b\sec^{2}\theta}{c}\right).
$$

The change in $\Delta L$ per revolution is therefore

$$
\frac{\mathrm{d}L}{\mathrm{d}n}
=2\frac{2bpN}{\omega}\int_{-\alpha}^{\alpha}
\left(1-\frac{\omega b\sec^{2}\theta}{c}\right)\,\mathrm{d}\theta
$$

and hence

$$
\frac{\mathrm{d}L}{\mathrm{d}n}\simeq
\frac{8bpN}{\omega}\left(\alpha-\frac{\omega b}{c}\tan\alpha\right)
=\frac{8bP}{\omega c}\left(\alpha-\frac{\omega b}{c}\tan\alpha\right),
$$

where $n$ is the number of revolutions, each photon has energy $pc$, and the laser power is $P=Npc$.
Since $\omega b\ll c$,

$$
\frac{\mathrm{d}L}{\mathrm{d}n}\simeq\frac{8bP\alpha}{\omega c},
\qquad
\frac{\mathrm{d}L}{\mathrm{d}t}=\frac{\omega}{2\pi}\frac{\mathrm{d}L}{\mathrm{d}n}
=\frac{4bP\alpha}{\pi c}.
$$
(c)
Therefore if I is the moment of inertia of the mirror about its axis of rotation,
I
dω
dt
≃
4bPα
πc
, or ω(t) ≃
4bPαt
πcI
.
[Some students may derive the rate of change of angular velocity using energy conservation, rather
than considering the increase of angular momentum of the mirror: To first order in v/c, Er =
E(1 − 2ucosθ/c), therefore the energy imparted to the mirror is
∆E = E − Er ≃
2uE cosθ
c
=
2ωbE
c
In one revolution, the number of photons intersected is
4α
2π
× n
2π
ω
=
4αn
ω
.
Therefore the rate of increase of rotational energy (Erot = Iω2
/2) is
dErot
dt
=
4αN
ω
2ωbE
c
dn
dt
=
8αbP
c
ω
2π
=
4αbPω
πc
Thus Iω.dω/dt = 4αbP/πc, leading to ω(t) ≃ 4αbPt/πcI, again.]
(d)
To estimate the deflection of the beam, one first needs to work out the moment of inertia of a
rectangle of mass m and side 2a about the central axis. This is just like a rod. From basic
principles,
I =
) a
−a
mdx
2a
x2
=
!
mx3
6a
"a
−a
=
ma2
3
=
mb2
sec2
α
3
.
With the stated geometry, a = b
√
2, or α = 45◦
, so
ω ≃
12αPtcos2
α
πmcb
→
3Pt
mca
√
2
.
At the edge, u = ωa = 3Pt/mc
√
2, and the angle of deviation is
δ =
2usinα
c
=
3Pt
mc2
[Interestingly, it is determined by the ratio of the energy produced by the laser to the rest-mass
energy of the mirror.]
Using the given numbers, and in SI units, the deviation is
ξ ≃ 104
δ =
104
× 3 × 100 × 24 × 3600
10−3 × (3 × 108)2
≃ 2.9 mm .
ξ
mirror
laser
screen δ
4
π/4
10 m
