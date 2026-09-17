---
id: cpho-f-2020-q3
source: cpho-f
language: zh
solution_language: zh
translated: false
problem: cpho-f-2020-q3
solution_type: official
source_document: solution-document-cpho-f-2020-s
source_pdf: cache/phoxiv/cpho-f/2020_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/cpho-f/2020_S.pdf."
---

三、（1）二能级系统处于能量为 1 E 的概率满足玻尔兹曼分布 B E k T
p e−
 ，有
1
B
1 0
E
k T
p p e
−
= ①
原子处于不同能级的总概率为 1，即
10
1 0 1 p p + = ②
由①②式得
1
B
0
1
=
1+
E
k T
p
e
−
③
1
B
1
B
1=
1
E
k T
E
k T
e
p
e
−
−
+
④
（2）量子奥托循环示意图如解题图 3a 所示。下面计算量子
奥托热机循环过程中的各个物理量的增量。
A→B（量子等容）过程：
不做功，即 A B E E = ，吸热全部用来增加内能，因此吸收热
量为
( ) 1 1 B B A E Q E p p    = = − ⑤
B→C（量子绝热）过程：
不吸收或者放出热，故 B C p p = ，内能增量为
( ) 2 C B B E E E p    = − ⑥
对外做功为
( ) ( ) 2 2 C B B B C B W E E E p E E p = −   = − − = − ⑦
C→D（量子等容）过程：
不做功，即 C D E E = ，放出的热来自内能减少，内能的增量为
( ) 3 D A B E E p p    = − ⑧
放出热量为
( ) 2 3 C B A Q E E p p = −   = − ⑨
D→A（量子绝热）过程：
不吸收或者放出热，内能增量为
( ) 4 A D A E E E p    = − ⑩
对外做功为
( ) ( ) 4 4 A D A D A A W E E E p E E p = −   = − − = − ⑪
（3）对量子奥托热机，设循环过程中吸热为 1 Q 和放热为 2 Q ，效率为
解题图 3a
11
1 2 2
1 1
1
Q Q Q
Q Q

−
= = − 奥 ⑫
将⑤和⑨式代入⑫式得
C 2
1 B
1 1
E Q
Q E
 = − = − 奥 ⑬
由于 B→C 过程中， B C p p = ，有
C B
B C B B
B C
B B B C
1 1
E E
k T k T
E E
k T k T
e e
e e
− −
− −
=
+ +
⑭
化简后，再根据 B h T T = 有
C B
C h
E E
T T
= ⑮
由⑬⑮式得
C
1 1 l
h h
E T
E T
 = − = − 奥 ⑯
量子卡诺循环示意图如解题图 3b 所示。 下面计算量子卡诺
热机循环过程中的各个物理量的增量。
A→B 过程：
1
B
1
B
1 1 1 1
1
B B B B
B
1 1
B B
1 1 1 1
1
B B
1 1 1 2 2
đ d d
1+
1 1
1+
d d
1+ 1+
h
h
h h h h
h
h h
E
k T
E
k T
E E E E E
k T k T k T k T k T
h h B h
E E
k T k T
e
Q E p E
e
E e e e e e
k T k T k T
E E E
e e
−
−
− − − − −
− −
 
 
= =  
 
 
   
− − −     −    
    = =
   
   
   
   
此过程中吸热为
解题图 3b
12
1
B
1
B B B
B
1
A A A 1 1
B
B B
1
B
B
A B 1 A B
A
B B B B B
1
B 1
1 1 1 2 2
B A B A B
1
1
d d d
1+ 1+ 1+
d 1
d
1+ 1+ 1+ 1+ 1+ 1+
h
h
h
h h
h
h h h h h
E
k T
E
E E E
k T h
E E E E E E
k T k T k T
E
k T
E
h
E E E E E E
k T k T k T k T k T
E
e
k T E
Q E e E
e e e
k T e E E E E
E
e e e e e e
−
−
− − −
− − − − −
−  
  = = = −
     
     
   
   
= − + = − +
  

B
1
A
B
B
B
A B A
B B B
A B
B
1+
ln
1+ 1+ 1+
h
h
h h h
E
E E
k T
E
k T
h E E E
k T k T k T
E E e
k T
e e e
− −
= − +
 ⑰
内能增量为
B A
B B
B A
B B
1 B A
1+ 1+
h h
h h
E E
k T k T
E E
k T k T
e e
E E E
e e
− −
− −
 = − ⑱
对外做功为
B
B
A
B
1 1 A B B
1
ln
1
h
h
E
k T
h E
k T
e
W Q E E E k T
e
+
= − = − +
+
⑲
B→C 过程：
在这个过程中，概率分布始终不变， B C = p p ，过程中无传热，有
C B
B B
B C
B B
1+ 1+
h l
h l
E E
k T k T
E E
k T k T
e e
e e
− −
− −
=
化简后得
C B
l
h
T
E E
T
= ⑳
同理， D A p p = ，故 D→A 过程中无吸热或放热发生，有
A D
B B
A D
B B
1+ 1+
h l
h l
E E
k T k T
E E
k T k T
e e
e e
− −
− −
=
化简后得
D A
l
h
T
E E
T
= ㉑
吸热为
2 0 Q = ㉒
对外做功等于内能减少
13
C B
B B C
B C
B B
2 2 B C
1+ 1+
h
h h
E E
k T k T
E E
k T k T
e e
W E E E
e e
− −
− −
= − = − ㉓
C→D 过程：
过程 C→D 与 A→B 类似， 均为等温过程， 放热的计算可以类比⑰式， 并代入⑳和㉑式后得，
放热为
C B
B B
D C D A B A
B B B B B B
A B
C D
3 B B
1+ 1+
ln ln
1+ 1+ 1+ 1+ 1+ 1+
l h
l l h h h l
E E l l
k T k T
h h
l l E E E E E E
k T k T k T k T k T k T
T T
E E
E T T E e e
Q k T k T
e e e e e e
− − − −
= − + = − + ㉔
内能增量为
C D
B B
D C
B B
3 D C
1+ 1+
l l
l l
E E
k T k T
E E
k T k T
e e
E E E
e e
− −
− −
 = − ㉕
对外做功为
B
B
A
B
3 3 3 C D B
1+
ln
1+
h
h
E
k T
l E
k T
e
W Q E E E k T
e
= − = − + ㉖
D→A 过程：
吸热为
4 0 Q = ㉗
对外做功等于内能减少
D A
B B
D A
B B
4 4 D A
1+ 1+
l h
l h
E E
k T k T
E E
k T k T
e e
W E E E
e e
− −
− −
= − = − ㉘
对量子卡诺热机，循环过程中吸热 1 Q ，放热 3 Q ，将⑰和㉔式代入效率计算公式得
1 4 4
1 1
1 1 l
h
T Q Q Q
Q Q T

−
 = − = − 卡
㉙
这与经典卡诺热机的效率一致。然而 C l h T T T   ，故由⑯㉙式知
   奥 卡 ㉚
因此，量子奥托热机的效率低于量子卡诺热机的效率。
