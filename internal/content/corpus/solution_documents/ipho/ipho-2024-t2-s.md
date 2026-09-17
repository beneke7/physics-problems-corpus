---
id: solution-document-ipho-2024-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2024/T2_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2024-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2024/T2_S.pdf."
---

S2-1
A: Paul Trap
A-1. Due to the symmetry, on the 𝑧-axis the only non-zero component of electric field is in
the 𝑧-direction. So:
𝐸 ሬԦሺ0,0,𝑧ሻ = 𝐸𝑧ሺ0,0,𝑧ሻ 𝑧Ƹ = 𝑧Ƹ න
𝑑𝑞
4𝜋𝜖0
1
ሺ𝑅2 + 𝑧2ሻ
×
𝑧
ሺ𝑅2 + 𝑧2ሻ
1
2
The element 𝑑𝑞 is equal to 𝜆𝑅𝑑𝜙 where 𝜙 is the angle with the 𝑥-axis. Thus:
𝐸ሺ0,0,𝑧ሻ = 𝑧Ƹ න
𝜆𝑅𝑑𝜙
4𝜋𝜖0
𝑧
ሺ𝑧2 + 𝑅2ሻ
3
2
= 𝑧Ƹ
𝜆𝑅
2𝜖0
𝑧
ሺ𝑧2 + 𝑅2ሻ
3
2
For 𝑧 ≪ 𝑅 this can be written as:
𝐸𝑧ሺ0,0,𝑧ሻ =
𝜆𝑅
2𝜖0
𝑧
𝑅3
=
𝜆𝑧
2𝜖0𝑅2
Very close to the 𝑧-axis, we can write:
𝐸𝑧ሺ𝑥,𝑦,𝑧ሻ = 𝐸𝑧ሺ0,0,𝑧ሻ + 𝑥
𝜕𝐸𝑧
𝜕𝑥
ȁሺ0,0,𝑧ሻ + 𝑦
𝜕𝐸𝑧
𝜕𝑦
ȁሺ0,0,𝑧ሻ + 𝑂ሺ𝑥2
,𝑦2
,𝑧2ሻ
Since, there is no difference between 𝑥 and −𝑥 or 𝑦 and −𝑦, it turns out that
𝜕𝐸𝑧
𝜕𝑥
=
𝜕𝐸𝑧
𝜕𝑦
= 0.
Thus, to the first order in 𝑥,𝑦, and 𝑧 we have:
𝐸𝑧ሺ𝑥,𝑦,𝑧ሻ =
𝜆𝑧
2𝜖0𝑅2
Consider a Gaussian surface in the shape of a symmetric cylinder around the 𝑧-axis whose
bases are parallel with the 𝑥𝑦-plane. The cylinder’s radius is 𝜌 and its height is 2𝑧 both of
which are small quantities. By Gauss’s law we have:
𝑆1
𝑆3
𝑆2S2-2
0 =
𝑄𝑖𝑛
𝜖0
= ර𝐸 ሬԦ.𝑑𝑆 Ԧ = න 𝐸 ሬԦ.𝑑𝑆 Ԧ
𝑆1
+ න 𝐸 ሬԦ.𝑑𝑆 Ԧ
𝑆2
+ න 𝐸 ሬԦ.𝑑𝑆 Ԧ
𝑆3
Integration over 𝑆1 and 𝑆2 gives:
න 𝐸 ሬԦ.𝑑𝑆 Ԧ
𝑆1
= න 𝐸 ሬԦ.𝑑𝑆 Ԧ
𝑆2
= 𝜋𝜌2
×
𝜆𝑧
2𝜖0𝑅2
.
Integration over 𝑆3 involves the 𝜌-component for which we can write the following expansion:
𝐸𝜌ሺ𝑧,𝜌,𝜙ሻ = 𝐸𝜌ሺ0,𝜌,𝜙ሻ + 𝑧
𝜕𝐸𝜌
𝜕𝑧
ȁሺ0,𝜌,𝜙ሻ + 𝑂ሺ𝑧2ሻ
We have 0 =
𝜕𝐸𝜌
𝜕𝑧
ȁሺ0,𝜌,𝜙ሻ due to symmetry between 𝑧 and −𝑧, hence, 𝐸𝜌ሺ𝑧,𝜌,𝜙ሻ = 𝐸𝜌ሺ0,𝜌,𝜙ሻ
up to the first order. Axial symmetry also implies
𝑑𝐸𝜌
𝑑𝜙
= 0. Consequently:
න 𝐸 ሬԦ.𝑑𝑆 Ԧ
𝑆3
= 𝐸𝜌ሺ0,𝜌,0ሻ × 2𝑧 × 2𝜋𝜌
So, Gauss’s law implies:
0 = 𝐸𝜌 × 4𝜋𝑧𝜌 + 2𝜋𝜌2
𝜆𝑧
2𝜖0𝑅2
Therefore, 𝐸𝜌 will be:
𝐸𝜌 = −
𝜆𝜌
4𝜖0𝑅2
In the cylindrical coordinate we will have:
𝐸 ሬԦሺ𝜌,𝜙,𝑧ሻ = −
𝜆𝜌
4𝜖0𝑅2
𝜌 ො +
𝜆𝑧
2𝜖0𝑅2
𝑧Ƹ
In cartesian coordinates we will have:
𝐸 ሬԦሺ𝑥,𝑦,𝑧ሻ =
𝜆
4𝜖0𝑅2
ሺ−𝑥,−𝑦,2𝑧ሻ
Since the ring is positively charged, the equilibrium in the 𝑥 and 𝑦 directions are stable, while
the equilibrium in the 𝑧-direction is unstable. The equations of motion in the 𝑥 and 𝑦 directions
read:
𝑚𝑥ሷ = 𝑞𝐸𝑥 = −
𝑞𝜆
4𝜖0𝑅2
𝑥
𝑚𝑦ሷ = 𝑞𝐸𝑦 = −
𝑞𝜆
4𝜖0𝑅2
𝑦S2-3 Therefore, the frequencies of small oscillations are:
𝜔𝑥
2
= 𝜔𝑦
2
=
𝑞𝜆
4𝜖0𝑅2𝑚
A-1 (1.5 pt)
(a) 𝐸 ሬԦሺ𝑥,𝑦,𝑧ሻ =
−𝜆𝑥
4𝜖0𝑅2
𝑥 ො +
−𝜆𝑦
4𝜖0𝑅2
𝑦 ො +
𝜆𝑧
2𝜖0𝑅2
𝑧Ƹ
(b) 𝜔𝑥 = 𝜔𝑦 = √
𝑄𝜆
4𝜖0𝑅2𝑚
A-2.
The force in the 𝑧-direction is:
𝐹𝑧 = 𝑞𝐸𝑧 =
𝑄𝜆𝑧
2𝜖0𝑅2
=
𝑄
2𝜖0𝑅2
𝜆0𝑧 +
𝑄𝑢
2𝜖0𝑅2
cosΩ𝑡𝑧
the equation of motion can thus be written as:
𝑧ሷ = ൬
𝑄𝜆0
2𝜖0𝑅2𝑚
+
𝑄𝑢
2𝜖0𝑅2𝑚
cosΩ𝑡൰𝑧
Therefore:
𝑘 = ඨ
𝑄𝜆0
2𝜖0𝑅2𝑚
, 𝑎 =
𝑄𝑢
2𝜖0𝑅2𝑚Ω2
A-2 (0.4 pt)
𝑘 = √
𝑄𝜆0
2𝜖0𝑅2𝑚
, 𝑎 =
𝑄𝑢
2𝜖0𝑅2𝑚Ω2
A.3.
𝑧 = 𝑝ሺ𝑡ሻ + 𝑞ሺ𝑡ሻ → 𝑝ሷ + 𝑞ሷ = ሺ𝑘2
+ 𝑎Ω2
cosΩ𝑡ሻሺ𝑝 + 𝑞ሻ
1. We are assuming that 𝑝 is almost constant, 𝑝ሷ ≃ 0.
2. According to the assumptions 𝑘2
≪ 𝑎Ω2
and 𝑞 ≪ 𝑝 we can ignore 𝑘2
in the first term
on the right-hand side of the equation and 𝑞 in the second term.
hence, the equation of motion can be simplified as follows:
𝑞ሷ = 𝑝𝑎Ω2
cosΩ𝑡.S2-4 As we have assumed that 𝑝 is a constant, the second derivative of 𝑞 is just proportional to
cosΩ𝑡 which gives:
𝑞 = −𝑝𝑎cosΩ𝑡 + 𝑐1𝑡 + 𝑐2.
Since 𝑞 is supposed to remain small, 𝑐1 must vanish. Also 𝑐2 = 0 because the mean value
of 𝑞 is supposed to remain zero. Therefore:
𝑞 = −𝑝𝑎cosΩ𝑡
A-3 (1.8 pt)
(a) 𝑞ሷሺ𝑡ሻ = 𝑝𝑎Ω2
cosΩ𝑡
(b) 𝑞ሺ𝑡ሻ = −𝑝𝑎cosΩ𝑡
A-4. Using the final result for 𝑞 the equation of motion for 𝑝 reads:
𝑝ሷ + 𝑝𝑎Ω2
cosΩ𝑡 = ሺ𝑘2
+ 𝑎Ω2
cosΩ𝑡ሻሺ𝑝 − 𝑎𝑝cosΩ𝑡ሻ
Which gives:
𝑝ሷ = 𝑘2
𝑝 − 𝑎𝑘2
𝑝cosΩ𝑡 − 𝑎2
Ω2
𝑝cos2
Ω𝑡
Averaging over one period, we’ll have:
‫ۃ‬cosΩ𝑡‫ۄ‬ = 0 , ‫ۃ‬cos2
Ω𝑡‫ۄ‬ =
1
2
and:
𝑝ሷ = ቆ𝑘2
−
𝑎2
Ω2
2
ቇ𝑝.
In order for the motion to be stable, the expression inside the parentheses should be negative,
i.e.
𝑎2
Ω2
2
> 𝑘2
→ Ω > ξ2
𝑘
𝑎
A-4 (1.5 pt)
(a) 𝑝ሷሺ𝑡ሻ = (𝑘2
−
𝑎2Ω2
2
)𝑝
(b) Ω > ξ2
𝑘
𝑎
A.5. With the given data we have:S2-5
𝑘 = ඨ
𝑄𝜆0
2𝜖0𝑅2𝑚
= 2 × 105
rad/s
𝑎 = 0.04 → Ωmin = 7 × 106
rad/s
which is in the range of radio waves.
A-5 (0.4 pt)
𝑘 = 2 × 105
rad/s
Ωmin = 7 × 106
rad/s
B: Doppler Cooling
B-1. From the uncertainty principle we know:
Δ𝐸 × Δ𝑡 ≃ ℏ
Here Δ𝑡 is the time 𝜏 and Δ𝐸 = ℏΔ𝜔. So:
ℏΔ𝜔 × 𝜏 ≃ ℏ → Δ𝜔 ≃
1
𝜏
= Γ
B-1 (0.5 pt)
Γ =
1
𝜏
B-2. We denote the forward and backward collision rates by 𝑠+ and 𝑠− respectively. Let us
proceed in the atom’s frame of reference. Ignoring the terms of the order
𝑣2
𝑐2
, the Doppler
effect can be written in the following form:
𝜔′
= 𝜔(1 +
𝑣
𝑐
)
Taking the atom’s velocity in the positive 𝑥-direction, we have:S2-6
𝜔+ = 𝜔L (1 +
𝑣
𝑐
)
𝜔− = 𝜔L (1 −
𝑣
𝑐
)
So:
𝑠+ = 𝑠L + 𝛼(𝜔L (1 +
𝑣
𝑐
) − 𝜔L) = 𝑠L + 𝛼𝜔L
𝑣
𝑐
𝑠− = 𝑠𝐿 + 𝛼(𝜔L (1 −
𝑣
𝑐
) − 𝜔L) = 𝑠L − 𝛼𝜔L
𝑣
𝑐
The momentum transfer per unit time from the oncoming photons to the atom is equal to:
𝜋+ = 𝑠+ × ሺ−ℏ𝑘+ሻ
For the backward photons we have:
𝜋− = 𝑠− × ሺ+ℏ𝑘−ሻ
Where 𝑘± =
ℏ𝜔±
𝑐
.
The total momentum transferred to the atom per unit time is equal to:
𝜋+ + 𝜋− = −2ℏ𝑘L
𝑣
𝑐
𝜔L𝛼൬1 +
𝑠L
𝛼𝜔L
൰
Where with the approximation 𝑠L ≪ 𝛼𝜔L, we will arrive at:
𝜋+ + 𝜋− = −2ℏ𝑘L
𝑣
𝑐
𝜔L𝛼
Note that as the atom is heavy, its velocity almost doesn’t change after the absorption of the
photon. Therefore, there will be almost no Doppler shifting in the re-emitted photon and hence,
on average there will be no momentum transfer to the atom during the re-emission process.
The above expression is, in fact, the force. Since 𝑣 > 0, we have:
𝐹 = −ሺ2𝛼ℏ𝑘L
2ሻ𝑣
The same result holds for 𝑣 < 0. This is in the atom’s reference frame. However, as we have
kept only up to the first order in 𝑣/𝑐, the same result holds in the lab frame:
𝐹 = −ሺ2𝛼ℏ𝑘L
2ሻ𝑣S2-7 B-2 (1.7 pt)
𝑠+ = 𝑠𝐿 + 𝛼𝜔L
𝑣
𝑐
𝑠− = 𝑠𝐿 − 𝛼𝜔L
𝑣
𝑐
𝜋+ = 𝑠+ × ሺ−ℏ𝑘+ሻ
𝜋− = 𝑠− × ሺ+ℏ𝑘−ሻ
𝐹 = −ሺ2𝛼ℏ𝑘L
2ሻ𝑣
B-3. The atom’s momentum before the collision is zero.After the collision it will be
(assuming the photon’s momentum is in the 𝑥-direction):
𝑃1 = ℏ𝑘L
After re-emitting the photon, we may have two equally likely outcomes for the final
momentum:
1. The photon is emitted in the positive 𝑥-direction which causes the atom’s momentum
to become zero
2. The photon is emitted in the negative 𝑥-direction which causes the atom’s momentum
to become: 𝑃f = +2ℏ𝑘L
Thus, the mean final energy is equal to:
‫𝐸ۃ‬f‫ۄ‬ = ‫ۃ‬
𝑃f
2
2𝑚
‫ۄ‬ =
1
2
× 0 +
1
2
×
4ℏ2
𝑘L
2
2𝑚
=
ℏ2
𝑘L
2
𝑚
This process occurs during the time 𝜏. So, the input power (the power gained by the atom as a
result of this process) is equal to:
𝑃in =
ℏ2
𝑘L
2
𝑚𝜏
B-3 (1.0 pt)
𝑃in =
ℏ2
𝑘L
2
𝑚𝜏
B.4. The output power (the power lost by the atom through collision with laser photons) can
be written as:S2-8 𝑃out = 𝐹 ∙ 𝑣 = −2𝛼ℏ𝑘L
2
𝑣2
At equilibrium we should have:
𝑃out + 𝑃in = 0 →
ℏ2
𝑘L
2
𝑚𝜏
= 2𝛼ℏ𝑘L
2
𝑣2 തതത → 𝑣2 തതത =
ℏΓ
2𝛼𝑚
And the temperature of this system is equal to:
1
2
𝑚𝑣2 തതത =
1
2
𝑘B𝑇 → 𝑇 =
ℏΓ
2𝛼𝑘B
B-4 (0.8 pt)
𝑃out = −2𝛼ℏ𝑘L
2
𝑣2
𝑣2 തതത =
ℏΓ
2𝛼𝑚
𝑇 =
ℏΓ
2𝛼𝑘B
B-5. Considering the given data:
𝑇 =
1 055 × 10 34
J.s
2 × 4 × 1 381 × 10 23 J/K ×5 × 10 9 s
= 2 × 10−4
K
B-5 (0.4 pt)
𝑇 = 2 × 10−4
K
