---
id: cpho-f-2020-q1
source: cpho-f
language: zh
solution_language: zh
translated: false
problem: cpho-f-2020-q1
solution_type: official
source_document: solution-document-cpho-f-2020-s
source_pdf: cache/phoxiv/cpho-f/2020_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/cpho-f/2020_S.pdf."
---

一、 （1）中子以初速度与静止的靶核发生碰撞，碰撞前瞬间初速度方向与两球球心连线之间
的夹角为 。在两球心连线和中子初速度方向所决定的平面上，令x轴沿两球心连线，中子
初速度垂直于连线的方向为 y 轴。 设碰撞后中子的速率为v， 沿着x轴方向的速度分量为 x v ，
y 轴方向的速度分量为 y v ，碰撞后靶核速率为 1 v ，碰撞前后沿x轴和 y 轴方向的动量分别守
恒
0 1 1
0
cos ,
sin .
x
y
m m m
m m


= + 

= 
v v v
v v
①
式中
2 2 2
x y + = v v v
［
解法（二）
由碰撞前后动量守恒，碰前中子的动量 0 mv 、碰后中子的动量
mv和碰后原子核的动量 1 1 m v 构成一闭合的矢量三角形，如解
题图 1a 所示。据余弦定理有
2 2 2 2 2 2
0 1 1 1 0 1 2 cos m m mm m  + − = v v v v v ①
式中， 是碰前中子的动量与碰后原子核的动量之间的夹角。
］
能量守恒给出
2 2 2
0 1 1
1 1 1
2 2 2
m m = + v v m v ②
由①②式得
2
2 2 1
1 1 1 1 0 1 2 cos 0,
m
m m
m
 + − = v v v v
由此得
1 0
1
2 cos
,
m
m m

=
+
v v ③
将③式代入②式得
2 2 2 2
1 1 1 1
0 0
1 1
( ) 4 cos 2 cos2 m m m m m m
m m m m
  + − + −
= =
+ +
m m
v v v ④
解题图 1a
2
由③式知，当 0  = 时 1 v 达到最大，
1max 0
1
2
,
m
m m
=
+
v v
所以氢核的最大速率是
H 0
H
2
,
m
m m
=
+
v v
氮核的最大速率是
N 0
H
2
,
14
m
m m
=
+
v v
由以上两式得
6 7
N H
H H H 7 6
H N
14 14 4.7 10 3.3 10
1.16 ,
3.3 10 4.7 10
m m m m
−   − 
= = =
−  − 
v v
v v
⑤
7 H
0 H 3.07 10 m/s.
2
m m
m
+
= =  v v ⑥
（2）速度为 i V 的氮 14 核继续与速度为 0 v 的第 i 个中子碰撞，在每次碰撞后获得最大速率
增量条件下，氮 14 核的速度变为 1 i+ V ，中子的末速度为 0  v ，由动量守恒和能量守恒有
0 N 0 N 1
2 2 2 2
0 N 0 N 1
,
1 1 1 1
2 2 2 2
i i
i i
m m m m
m m m m
+
+
 + = + 


 + = +  
v V v V
v V v V
⑦
由⑦式得
1
0 0
1 i i
a a −
= − +
V V
v v
⑧
式中
N
N
0.847
m m
a
m m
−
= =
+
⑨
按⑧式逐次迭代得
2 2 1 2 2
0 0 0 0
3 3 3 0
0 0
1 1 (1 ) 1
1 1 1
n n n n
n n n n
V
a a a a a a a a
a a a a a
− − −
−
= − + = − + − + = − +
= − + = = − + = −
V V V
v v v v
V V
v v
⑩
这里，应用了题给条件
0 0 V =
3
所求的次数n 满足
2 2
N H 0
1 1
1.16
2 2
n m m =  V v
即是
2 2 2
H 0 H 0
1 1
14 (1 ) 1.16 ,
2 2
n
m a m − =  v v ⑪
由⑨⑪式得，满足方程的最接近的值是
2. n = ⑫
（3）根据麦克斯韦速率分布
2
B
3/2
2 2
( ) 4 e
2
m
k T m
f
kT


−
 
=  
 
v
v v
速率取极大值的条件是
d ( )
0,
d
f
=
v
v
可知最概然速率为
B
p
2k T
m
= v ⑬
最概然速率对应的动能为
2
p P B
1
.
2
E m k T = = v ⑭
设总粒子数为 N，由动能分布函数定义可知为
k
k
d
( )
d
N
f E
N E
= ⑮
由速率分布函数的定义可知
d
( )
d
N
f
N
= v
v
而
k
k
d
d
2
E
mE
= v
所以
k
k
k k
2 d 1
( ) ( )
d 2
E N
f E f
N E m mE
= =
联立上述各式得
k
B 1/2
k k 3/2
B
2π
( ) e
(π )
E
k T
f E E
k T
−
= ⑯
4
动能取极大值的条件为 k
k
d ( )
0
d
f E
E
= ，由此可知最概然动能为
kp B p
1 1
.
2 2
E k T E = = ⑰
