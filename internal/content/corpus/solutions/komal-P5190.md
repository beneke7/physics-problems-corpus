---
id: komal-P5190
source: komal
language: hu
translated: false
problem: komal-P5190
figure_files: [komal-P5190-sol-fig1.gif, komal-P5190-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 A fényforrás éles, fényes képét elsősorban a tengelyhez közel haladó (ún. paraxiális) fénysugarak hozzák létre. Ezen sugaraknak az optikai tengellyel bezárt szöge elegendően kicsiny ahhoz, hogy a szög szinuszát és a tangensét magával a szöggel (annak ívmértékben mért értékével) közelítsük. A továbbiakban csak a paraxiális fénysugarakkal fogunk foglalkozni. 

 1. ábra 

 Tekintsünk két különböző ($n_1$ és $n_2$) törésmutatójú közeget, amelyet $r$ sugarú gömbfelület választ el egymástól. Az $n_1$ törésmutatójú közegben a határfelülettől $t$ távolságra egy kicsiny tárgy (fényforrás) található, amelyből kiinduló fénysugarak az $n_2$ törésmutatójú közegben $k$ távolságban alkotnak képet. Az 1. ábrán látható jelölésekkel a törési törvényt alkalmazva megkaphatjuk, hogy 
 $\frac{n_1}{n_2}\left(\frac{t}{r}-1\right)\varepsilon=\frac{t}{k}\varepsilon+\frac{t}{r}\varepsilon,$ 
 ahonnan némi átalakítás után adódik az 
 $(1)$ $\frac{n_1}{t} +\frac{n_2}{k}=\frac{n_1-n_2}{r}$ 
 összefüggés. (Ez akkor igaz, ha a határfelület gömbjének középpontja az $n_1$-nek megfelelő oldalon helyezkedik el. Ellenkező esetben $r$ helyébe $-r$ írandó. Amennyiben a határfelület sík, ami felfogható $r\rightarrow \infty$ sugarú gömbnek, akkor az $1/r$-es tag helyébe nulla kerül.) 
 A 2. ábra jelöléseivel a törési törvényt alkalmazva kiszámíthatjuk, hogy 
 $k \left(\frac{n_1}{n_2}-1\right)\frac{T}{r}=T+K,$ 
 ahonnan algebrai átalakítások után és (1)-et is felhasználva adódik, hogy a nagyítás: 
 $(2)$ $\frac{K}{T}=\frac{n_1}{n_2}\,\frac{k}{t}.$ 

 2. ábra 

 Alkalmazzuk az (1) és (2) összefüggéseket az üvegcsőben lévő vízre először a felső, sík határon, majd a félgömbből kilépő fénysugarakra az üvegcső aljánál. Az első fénytörésnél 
 $n_1=1, \quad n_2=n=\frac{4}{3}\qquad \text{és}\qquad t_1=30~{\rm cm},$ 
 így a fényforrás első képtávolsága (1) alapján: 
 $k_1=-n\,t=-40~{\rm cm}.$ 
 A nagyítás: 
 $N_1=\frac{1}{n}\,\frac{k_1}{t}=-1.$ 
 A kép a vízfelszín felett 40 cm-re jön létre, egyenes állású és látszólagos (virtuális). 
 A második képalkotásnál 
 $t_1=20~{\rm cm}-k_1=60~{\rm cm},\quad n_1=n=\frac{4}{3}, \quad n_2=1 \qquad \text{és}\qquad r=5~{\rm cm}.$ 
 Ezeket (1) és (2)-be behelyettesítve adódik, hogy 
 $k_2=22{,}5~{\rm cm}\qquad \text{és}\qquad N_2=\frac{1}{2}.$ 
 Az ernyőt tehát az üvegcső alja alá, attól 22,5 cm távolságra kell elhelyeznünk, és az ott létrejövő valódi, fordított állású kép nagyítása: $\vert N_1N_2\vert = 0{,}5$. 

**II. megoldás.**
 $a)$ Ismert jelenség, hogy a vízben $h$ mélységben lévő tárgyak fentről, a levegőből (majdnem függőlegesen) nézve felemelkedve látszanak: $h$ helyett $h/n$ mélységben lévőnek látjuk ezeket. (Sokat emlegetett példa az úszómedence alja, vagy egy vizesfazék feneke.) Mindez a tárgyon átmenő függőleges egyeneshez közeli fénysugarakra, paraxiális közelítésben igaz, amikor a fénytörés törvénye közelítőleg a $\sin\alpha\approx \alpha=n\sin\beta\approx n\beta$ alakot ölti. ($\alpha$ a beesési szög, $\beta$ pedig a törési szög.) 
 Ennek megfelelően egy, a víz felett 30 cm-re lévő fényforrásról jövő fénysugarak a víz felületén megtörve úgy haladnak tovább, mintha $n$-szer magasabbról indultak volna ki, tehát jelen esetben a 30 cm-nek 4/3-szorosáról. Úgy érik el a leképező eszközt a cső alján, mintha 40+20=60 cm-ről jöttek volna, végig vízben. 
 Vágjuk el – gondolatban – az üvegcsövet és a benne lévő vizet az aljának közvetlen közelében egy vízszintes síkkal, és juttassunk a vágásba egy nagyon vékony levegőréteget. Ha nem gömb-, hanem síkfelület lenne az üvegcső alja, úgy lépnének ki a fénysugarak, mintha 
 $t=\frac{h}{n} =
\frac{60}{(4/3)} = 45~\rm cm$ 
 távolságból indultak volna el a levegőben. 
 Így találkoznak egy vékony sík-domború lencsével, amelynek 
 $\frac{R}{n-1}=
15~\rm cm$ 
 a fókusztávolsága. A lencsetörvény szerint 
 $\frac{1}{k}= \frac{1}{f}-\frac{1}{t}=\frac{1}{15~\rm cm}- \frac{1}{45~\rm cm}=\frac{2}{45~\rm cm},$ 
 vagyis a fényforrás a valódi kép $k=22{,}5$ cm-re keletkezik a cső gömbölyű alja alatt. 

 $b)$ A levegő-víz és a víz-levegő határon áthaladó fénysugarak nem változtatják meg a tárgy vízszintes méretét, a vízlencse viszont igen: 
 $N=\frac{k}{t}=\frac{22{,}5~\rm cm}{45~\rm cm}=\frac{1}{2}\text{-szeres}$ 
 nagyítású (vagyis felére kicsinyített) képet állít elő.

![solution figure](../../raw_html/komal_figures/komal-P5190-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5190-sol-fig2.gif)
