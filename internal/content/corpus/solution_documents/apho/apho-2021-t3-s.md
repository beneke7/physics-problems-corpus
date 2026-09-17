---
id: solution-document-apho-2021-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2021/T3_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [apho-2021-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2021/T3_S.pdf."
---

1
Theory 3 Magnetic Levitation: Solution
Part A. Sudden appearance of a magnetic monopole: initial response and subsequent
time evolution of the response in the thin film
Initial response
A.1 In the 𝑧 ≥ 0 region, excluding the point occupied by the monopole, the magnetic field
𝐵 ⃗ = 𝐵 ⃗ ′
+ 𝐵 ⃗mp at 𝑡 = 𝑡0 = 0 is given by
𝐵 ⃗mp =
𝜇0𝑞m
4𝜋
(𝑧−ℎ)𝑧̂+𝜌 ⃗⃗
[(𝑧−ℎ)2+𝜌2]3 2 ⁄ , (A-1)
𝐵 ⃗ ′
=
𝜇0𝑞m
4𝜋
(𝑧+ℎ)𝑧̂+𝜌 ⃗⃗
[(𝑧+ℎ)2+𝜌2]3 2 ⁄ , (A-2)
𝐵 ⃗ =
𝜇0𝑞m
4𝜋
[
(𝑧−ℎ)𝑧̂+𝜌 ⃗⃗
[(𝑧−ℎ)2+𝜌2]3 2 ⁄ +
(𝑧+ℎ)𝑧̂+𝜌 ⃗⃗
[(𝑧+ℎ)2+𝜌2]3 2 ⁄ ] . (A-3)
A.2 In the 𝑧 ≤ −𝑑 region, the magnetic field 𝐵 ⃗ = 𝐵 ⃗ ′
+ 𝐵 ⃗mp at 𝑡 = 𝑡0 = 0 is given by
𝐵 ⃗ = 0. (A-4)
A.3 From Eq. (A-3), 𝐵𝑧
′
= 0 at 𝑧 = 0 for all 𝜌.
Therefore, the total magnetic flux ΦB = 0 at 𝑧 = 0. (A-5)
From Eq. (A-4), 𝐵𝑧
′
= 0 at 𝑧 = −𝑑.
Therefore, the total magnetic flux ΦB = 0 at 𝑧 = −𝑑. (A-6)
A.4 Applying Ampere’s law along the path shown in the figure below, and using the
approximation 𝑑 ≪ ℎ, we have
𝐵𝜌(𝜌, 𝑧 = 0)𝑑𝜌 = 𝜇0 𝑗(𝜌) 𝑑𝜌 ∙ 𝑑, (A-7)
where the contributions from the 𝐵𝑧𝑑 terms are smaller by a factor 𝑑 ℎ ⁄ and neglected.
The induced current density is given by
𝑗(𝜌) =
1
𝜇0𝑑
𝑧̂ × 𝐵 ⃗ (𝜌,𝑧 = 0) =
𝑞m
2𝜋𝑑
𝑧̂×𝜌 ⃗ ⃗
(ℎ2+𝜌2)3 2 ⁄ . (A-8)
Subsequent response
A.5 Consider the form of an integral of Eq.(2), in the Question sheet, over the film thickness, we
get, for 𝑧 ≈ 0 inside the film (that is 𝑧 < 0 and |𝑧| ≪ 𝑑), that
𝜕𝐵𝑧
′
𝜕𝑧
|
𝑧
−
𝜕𝐵𝑧
′
𝜕𝑧
|
−𝑑−𝑧
= 𝜇0𝜎(𝑑 + 2𝑧)
𝜕𝐵𝑧
′
𝜕𝑡
≈ 𝜇0𝜎𝑑
𝜕𝐵𝑧
′
𝜕𝑡
. (A-9)2
Since 𝐵𝑧
′
is an even function of 𝑧′
= 𝑧 + 𝑑 2 ⁄ , therefore we have
𝜕𝐵𝑧
′
𝜕𝑧
|
𝑧
= −
𝜕𝐵𝑧
′
𝜕𝑧
|
−𝑑−𝑧
so that
the left-hand side of Eq.(A-9) becomes 2
𝜕
𝜕𝑧
𝐵𝑧
′
(𝜌,𝑧;𝑡). The right-hand side is approximated by
the 𝑧-independent term of 𝐵𝑧
′
inside the film thickness. On the other hand, the 𝑧-dependent term
of 𝐵𝑧
′
is even in 𝑧′ and is of order ~𝑧′2
𝑑 ℎ ⁄ so that it can be neglected based on the ℎ ≫ 𝑑
condition. As such the right-hand side is represented by 𝐵𝑧
′
(𝜌,𝑧;𝑡). Putting these results together,
we get
2
𝜕
𝜕𝑧
𝐵𝑧
′
(𝜌,𝑧;𝑡) = 𝜇0𝜎𝑑
𝜕
𝜕𝑡
𝐵𝑧
′
(𝜌,𝑧;𝑡)
⇒
𝜕
𝜕𝑡
𝐵𝑧
′(𝜌,𝑧;𝑡) = 𝑣0
𝜕
𝜕𝑧
𝐵𝑧
′(𝜌,𝑧;𝑡). (A-10)
Here 𝑧 ≈ 0, and 𝑣0 = 2 (𝜇0𝜎𝑑) ⁄ .
A.6 The equation in A.5, namely, Eq.(A-10) supports a solution of the form
𝐵′
𝑧(𝜌,𝑧;𝑡) = 𝑓(𝜌,𝑧 + 𝑣0𝑡), (A-11)
and at 𝑧 ≈ 0.
A.7 At 𝑡 = 0, 𝐵𝑧
′
(𝜌,𝑧 ≥ 0) =
𝜇0𝑞m
4𝜋
(𝑧+ℎ)
[(𝑧+ℎ)2+𝜌2]3 2 ⁄ , which is of the form
𝐵𝑧
′
(𝜌,𝑧 ≥ 0) = 𝐹(𝜌,𝑧 + ℎ). (A-12)
For 𝑡 > 0, we have according to Eq.(A-11), the replacement
𝑧 → 𝑧 + 𝑣0𝑡, to the 𝐵𝑧
′
(𝜌,𝑧;𝑡 = 0). (A-13)
In other words, 𝐵𝑧
′
(𝜌,𝑧 ≈ 0;𝑡) = 𝐹(𝜌,𝑧 + 𝑣0𝑡 + ℎ).
This corresponds to a physical picture of a moving image monopole, with its position
𝑧mp = −ℎ − 𝑣0𝑡. (A-14)
Finally, 𝑣0 = 2 (𝜇0𝜎𝑑) ⁄ . (A-15)
Part B. Magnetic force acting on a point-like magnetic dipole moving at a constant 𝒉 with
a constant velocity
A moving monopole
B.1 The present locations of all the image magnetic monopoles of type 𝑞m are at
(𝑥,𝑧) = [−𝑛𝑣𝜏,−ℎ − 𝑛𝑣0𝜏], for 𝑛 ≥ 0. (B-1)3
The locations of all the image magnetic monopoles −𝑞m are at
(𝑥,𝑧) = [−(𝑛 + 1)𝑣𝜏,−ℎ − 𝑛𝑣0𝜏 ], for 𝑛 ≥ 0. (B-2)
B.2 The magnetic potential Φ+(𝑥,𝑧) due to all the image magnetic monopoles at 𝑡 = 0 is given
by, in summation form
Φ+(𝑥,𝑧) =
𝜇0𝑞𝑚
4𝜋
∑
1
√(𝑥+𝑛𝑣𝜏)2+(𝑧+ℎ+𝑛𝑣0𝜏)2
−
𝜇0𝑞𝑚
4𝜋
∑
1
√(𝑥+(𝑛+1)𝑣𝜏)2+(𝑧+ℎ+𝑛𝑣0𝜏)2
∞
𝑛=0
∞
𝑛=0 ,
⇒ Φ+(𝑥,𝑧) =
𝜇0𝑞𝑚
4𝜋
∑ [
1
√(𝑥+𝑛𝑣𝜏)2+(𝑧+ℎ+𝑛𝑣0𝜏)2
−
1
√(𝑥+(𝑛+1)𝑣𝜏)2+(𝑧+ℎ+𝑛𝑣0𝜏)2
] ∞
𝑛=0 . (B-3)
In integral form
Φ+(𝑥,𝑧) =
𝜇0𝑞𝑚
4𝜋𝜏
∫ 𝑑𝑡′ ∞
0
[
1
√(𝑥+𝑣𝑡′)2+(𝑧+ℎ+𝑣0𝑡′)2
−
1
√(𝑥+𝑣𝑡′+𝑣𝜏)2+(𝑧+ℎ+𝑣0𝑡′)2
], (B-4)
=
𝜇0𝑞𝑚
4𝜋𝜏
∫ 𝑑𝑡′ ∞
0
(𝑥+𝑣𝑡′)𝑣𝜏
[(𝑥+𝑣𝑡′)2+(𝑧+ℎ+𝑣0𝜏)2]3 2 ⁄ , (B-5)
⇒ Φ+(𝑥,𝑧) =
𝜇0𝑞𝑚𝑣
4𝜋
1
(𝑧+ℎ)𝑣−𝑣0𝑥
[
𝑧+ℎ
√𝑥2+(𝑧+ℎ)
2
− 𝑣0
√𝑣2+𝑣0
2
]. (B-6)
A moving dipole
B.3
The total magnetic potential
ΦT(𝑥,𝑧) = Φ+(𝑥,𝑧) + Φ−(𝑥,𝑧), (B-7)
where Φ−(𝑥,𝑧) = −Φ+(𝑥,𝑧 − 𝛿m).
ΦT(𝑥,𝑧) = Φ+(𝑥,𝑧) − Φ+(𝑥,𝑧 − 𝛿m)
= 𝛿m × 𝜕Φ+(𝑥,𝑧) 𝜕𝑧 ⁄ . (B-8)4
ΦT(𝑥,𝑧) = −
𝜇0𝑚𝑣
4𝜋
[
𝑣
[(𝑧+ℎ)𝑣−𝑣0𝑥]2
(
𝑧+ℎ
√𝑥2+(𝑧+ℎ)2
−
𝑣0
√𝑣2+𝑣0
2
) −
𝑥2
[(𝑧+ℎ)𝑣−𝑣0𝑥][𝑥2+(𝑧+ℎ)2]3/2
]. (B-9)
Force acting on the point-like magnetic dipole:
𝐹 𝑧 = −𝑞𝑚
𝑑
𝑑𝑧
ΦT(0,𝑧)|
𝑧=ℎ
+ 𝑞𝑚
𝑑
𝑑𝑧
ΦT(0,𝑧)|
𝑧=ℎ−𝛿m
. (B-10)
𝐹 𝑧 = −
𝜇0𝑚𝑞m
2𝜋
(1 −
𝑣0
√𝑣2+𝑣0
2
)[
1
(2ℎ)3
−
1
(2ℎ−𝛿m)3
]. (B-11)
⇒ 𝐹 𝑧 =
3𝜇0𝑚2
32𝜋ℎ4
[1 −
𝑣0
√𝑣2+𝑣0
2
]. (B-12)
𝐹 𝑥 = −𝑞𝑚
𝑑
𝑑𝑥
ΦT(𝑥,ℎ)|
𝑥=0
+ 𝑞𝑚
𝑑
𝑑𝑥
ΦT(𝑥,ℎ − 𝛿m)|
𝑥=0
, (B-13)
⇒ 𝐹 𝑥 = −
3𝜇0𝑚2
32𝜋ℎ4
𝑣0
𝑣
[1 −
𝑣0
√𝑣2+𝑣0
2
]. (B-14)
Relation between 𝒗𝟎 and 𝒗 and their relation
B.4 𝑣0 =
2
𝜇0𝜎𝑑
=
2
4𝜋×10−7×5.9×107×0.5×10−2 = 5.4 m s ⁄ . (B-15)
B.5 In the small 𝑣 regime, meaning that 𝑣 is smaller than a certain typical velocity of the
system (or a critical velocity 𝑣c to be considered in the next task B.6) we have the characteristics
basically akin to that of 𝑣 ≈ 0. For 𝑣 = 0, the frequency 𝜔 is associated with 𝑣0 ℎ ⁄ . Making use
of the parameters given in B.4, the skin depth (Eq.(3) in the question sheet) 𝛿 is given by
𝛿 = √
2
𝜔𝜇0𝜎
= √
2ℎ
𝑣0𝜇0𝜎
= 1.58 c.m., which is more than three times greater than 𝑑.
Thus we have, in the small 𝑣 regime,
𝑣0(𝑣) = 𝑣0. (B-16)5
In the large 𝑣 regime, we have the skin depth 𝛿 < 𝑑 so that the effect thin film thickness
𝑑eff = 𝛿, (B-17)
within which the field is more or less uniform (i.e. 𝑧 independent).
In this case, 𝜔 = 𝑣 ℎ ⁄ , (B-18)
so the
𝑣0(𝑣) =
2
𝜇0𝜎𝛿
=
2
𝜇0𝜎
√
𝜔𝜇0𝜎
2
= √
2
𝜇0𝜎
𝑣
ℎ
= √
𝑑
ℎ
𝑣 𝑣0, or
𝑣0(𝑣) = 𝑣0√
𝑑
ℎ
√
𝑣
𝑣0
. (B-19)
B.6 The critical velocity 𝑣c is determined from the condition 𝛿 = 𝑑 :
𝑑 = √
2
𝜇0𝜎𝑣c ℎ ⁄
⇒ 𝑣c =
2ℎ
𝑑2𝜇0𝜎
= 𝑣0
ℎ
𝑑
. (B-20)
Part C Motion of the magnetic dipole when the conducting thin film is superconducting
When the electrical conductivity 𝜎 → ∞, the receding velocity 𝑣0 → 0 so that there will not be
a whole series of image magnetic monopoles. Instead, the image is simply one image magnetic
dipole mirroring the instantaneous position of the magnetic dipole. In this case, the image
magnetic dipole is 𝑚 ⃗⃗ = 𝑚𝑥 ̂ located at the location (𝑥,𝑦,𝑧) = (0,0,−ℎ). It is then clear, from the
symmetry of the image configuration, that the force on the magnetic dipole from the image
aligns only along 𝑧̂. For our convenience, we take the magnetic monopole −𝑞m to locate at 𝑥 =
0, and for the magnetic monopole 𝑞m the location 𝑥 = 𝛿m.
C.1
The total magnetic potential ΦT(𝑥,𝑧) from the image magnetic dipole is
ΦT(𝑥,𝑧) = −
𝜇0𝑞m
4𝜋
1
√𝑥2+(𝑧+ℎ)2
+
𝜇0𝑞m
4𝜋
1
√(𝑥−𝛿m)2+(𝑧+ℎ)2
. (C-1)
Approach 1:
The total vertical force 𝐹 𝑧
′
acting on the magnetic dipole from the image magnetic dipole is given
by
𝐹 𝑧
′
= (−𝑞m)[−
𝜕
𝜕𝑧
ΦT]|𝑥=0,
𝑧=ℎ
+ 𝑞m [−
𝜕
𝜕𝑧
ΦT]|𝑥=𝛿,
𝑧=ℎ
(C-2)6
𝐹 𝑧
′
=
𝜇0𝑞m
2
4𝜋
𝑧 + ℎ
[𝑥2 + (𝑧 + ℎ)2]3 2 ⁄
|
𝑥=0,
𝑧=ℎ
−
𝜇0𝑞m
2
4𝜋
𝑧 + ℎ
[(𝑥 − 𝛿m)2 + (𝑧 + ℎ)2]3 2 ⁄
|
𝑥=0,
𝑧=ℎ
−
𝜇0𝑞m
2
4𝜋
𝑧+ℎ
[𝑥2+(𝑧+ℎ)2]3 2 ⁄ |𝑥=𝛿m,
𝑧=ℎ
+
𝜇0𝑞m
2
4𝜋
𝑧+ℎ
[(𝑥−𝛿m)2+(𝑧+ℎ)2]3 2 ⁄ |𝑥=𝛿m,
𝑧=ℎ
,
𝐹 𝑧
′
= 2
𝜇0𝑞m
2
4𝜋
(
1
2ℎ
)
2
[1 −
1
(1+(
𝛿
2ℎ
)
2
)
3 2 ⁄ ] . (C-3)
𝐹 𝑧
′
=
3𝜇0𝑚2
64𝜋ℎ4
. (C-4)
Equilibrium condition:
𝐹 𝑧
′
− 𝑀0𝑔 = 0, (C-5)
⇒
3𝜇0𝑚2
64𝜋ℎ0
4 = 𝑀0𝑔,
⇒ ℎ0 = [
3𝜇0𝑚2
64𝜋𝑀0𝑔
]
1
4
. (C-6)
Approach 2:
We can use the direct force calculation.
𝐹 𝑧
′
= 2
𝜇0𝑞m
2
4𝜋
[(
1
2ℎ
)
2
−
2ℎ
(𝛿𝑚
2 +(2ℎ)2)
3 2 ⁄ ] (C-7)
=
𝜇0𝑞m
2
2𝜋
(
1
2ℎ
)
2
[1 −
1
(1+(
𝛿
2ℎ
)
2
)
3 2 ⁄ ] (C-8)
=
3𝜇0𝑚2
64𝜋ℎ4
.
The equilibrium condition 𝐹 𝑧
′
− 𝑀0𝑔 = 0 gives the same equilibrium position ℎ0 as in Eq. (C-6),
⇒ ℎ0 = [
3𝜇0𝑚2
64𝜋𝑀0𝑔
]
1
4
.
C.2
The oscillation frequency about the equilibrium is obtained from7
𝐹 𝑧
′
≈ 𝑀0 +
𝑑𝐹𝑧
′
𝑑𝑧
∆𝑧, (C-9)
where ∆𝑧 = 𝑧 − ℎ0.
And from
𝑑𝐹𝑧
′
𝑑𝑧
= −𝑘 = −𝑀0Ω2
(C-10)
we have
𝑘 = −
𝑑
𝑑𝑧
3𝜇0𝑚2
64𝜋ℎ4
=
3𝜇0𝑚2
16𝜋ℎ0
5 =
4
ℎ0
3𝜇0𝑚2
64𝜋ℎ0
4 =
4𝑀0𝑔
ℎ0
= 𝑀0Ω2
(C-11)
The angular oscillation frequency
Ω = √
4𝑔
ℎ0
. (C-12)
C.3
ℎ0 = [
3𝜇0(
4
3
𝜋𝑅3𝑀)
2
64𝜋(
4
3
𝜋𝑅3𝜌0𝑔)
]
1 4 ⁄
= [
𝑅3𝑀2𝜇0
16𝜌0𝑔
]
1 4 ⁄
(C-13)
ℎ0 = [
10−18×752×10−4
16×7400×9.8×𝜇0
]
1 4 ⁄
m = 25.μm. (C-14)
C.4 Ω = √
4𝑔
ℎ0
= √
4×9.8
30×10−6
s−1
= 1.3 kHz. (C-15)
