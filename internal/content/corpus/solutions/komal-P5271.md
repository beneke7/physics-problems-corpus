---
id: komal-P5271
source: komal
language: hu
translated: false
problem: komal-P5271
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Az $a)$ esetben a mozgás egyenletes, az időtartama nyilván 1 s. 
 A $b)$ esetben a test hosszabb utat tesz meg, de (a nehézségi erő gyorsító hatása miatt) az átlagsebessége is nagyobb, így a mozgás idejének kiszámítása további megfontolásokat igényel. 
 A geometriai adatokból kiszámíthatjuk, hogy a körpálya sugara 
 $R=\frac{h}{2}+\frac{\ell^2}{8h}=5{,}012~\rm m.$ 
 A test legnagyobb sebessége (ezt a pálya legmélyebb pontjánál éri el) a munkatétel szerint 
 $v_\text{max}=\sqrt{v_0^2+2gh}=1{,}22~\frac{\rm m}{\rm s},$ 
 a legnagyobb szögsebessége pedig 
 $\omega_\text{max}=\frac{v_\text{max}}{R}=0{,}24~\frac{1}{\rm
s}.$ 
 A test mozgása a körív mentén éppen olyan, mint egy $R$ hosszúságú fonálinga nehezékének mozgása. Ha az időmérés kezdőpontjának azt a pillanatot választjuk, amikor a test sebessége maximális, akkor a fonálinga pillanatnyi szögkitérése 
 $\varphi(t)=\frac{\omega_\text{max}}{\Omega}\sin\Omega t$ 
 alakban adható meg, ahol 
 $\Omega=\sqrt{\frac{g}{R}}=1{,}40~\frac{1}{\rm s}$ 
 a rezgőmozgás körfrekvenciája (nem tévesztendő össze a pillanatnyi szögsebesség $\omega(t)$ értékével). Ezek szerint 
 $\varphi(t)=0{,}174~\sin\left(1{,}4 \frac{t}{1~\rm s}\right).$ 
 A pálya végpontjában (vagyis a $B$ pontban) a $\varphi_0$ szögkitérésre fennáll: 
 $\sin\varphi_0=\frac{\ell}{2R},\qquad \text{ahonnan}\qquad \varphi_0=0{,}10~\text{radián}.$ 
 A mozgás keresett $T$ idejének felére, $t_0=T/2$-re teljesül, hogy 
 $0{,}10=0{,}174~\sin\left(1{,}4 \frac{t_0}{1~\rm s}\right),$ 
 vagyis 
 $\sin\left(1{,}4 \frac{t_0}{1~\rm s}\right)=0{,}57,$ 
 tehát 
 $T=2t_0=0{,}87~\rm s.$ 
 Ezek szerint a köríven történő mozgás (azonos kezdősebességek esetén) rövidebb ideig tart, mint az egyenes út mentén. 

**II. megoldás.**
 A körív menti mozgásnál a legnagyobb sebesség (a munkatétel szerint) 
 $v_\text{max}=\sqrt{v_0^2+2gh}=1{,}22~\frac{\rm m}{\rm s},$ 
 az ,,átlagsebesség'' pedig – a legkisebb és a legnagyobb sebesség számtani közepével számolva – $1{,}11~\frac{\rm m}{\rm s}$. 
 A geometriai adatokból kiszámítható, hogy a körív hossza 1,0025 m, így tehát a mozgás ideje 
 $T\approx \frac{1{,}0025~\rm m}{1{,}1~\rm m/s}\approx 0{,}9~\rm
s.$ 
 Tehát az egyenes pályán történő mozgás tart hosszabb ideig. 

 Megjegyzés. A számításban használandó ,,átlagsebesség'' nem időbeli átlagot jelent, hanem azt, hogy a sebesség reciprokát az út szerinti átlagoljuk, majd ennek reciprokát képezzük. Ennek az átlagnak jó közelítését kapjuk, ha a legnagyobb és a legkisebb sebességhez tartozó értékek $2:1$ arányú súlyozott közepét képezzük, amivel számolva még inkább teljesül a bizonyítandó egyenlőtlenság, miszerint a köríven történő mozgás tart rövidebb ideig.
