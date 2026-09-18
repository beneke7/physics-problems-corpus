---
id: komal-P4915
source: komal
language: hu
translated: false
problem: komal-P4915
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a kisbolygó sugarát $R$-rel, tömegét pedig $M$-mel; ezek nagyságát nem ismerjük. Tudjuk viszont, hogy a titán sűrűsége
 $\varrho=\frac{M}{\tfrac43\pi R^3}=4510~\rm kg/m^3.$
 A lövedék mozgása két különböző jellegű mozgásra bontható. A kisbolygó belsejében minden helyzetben csak akkora vonzóerő hat rá, amekkorát a pillanatnyi helyzetének megfelelő kisebb titángömb fejt ki rá. Az alagutat elhagyva a lövedék mozgását a kisbolygó egészének gravitációs vonzóereje irányítja. A lövedék mozgásának teljes $T$ ideje az alagútban töltött $T_1$ idő és a szabadban történő mozgás $T_2$ idejének összege.
 A kisbolygó belsejében (az alagútban) a kisbolygó középpontjától $x$ távolságban lévő $m$ tömegű lövedékre
 $F(x)=-\gamma \frac{mM }{x^2}\,\frac{x^3}{R^3}=-D\cdot x$
 nagyságú erő hat, éppen akkora, mintha egy
 $D=\gamma \frac{Mm}{R^3}$
 rugóállandójú rugó húzná a középpont felé. Ennek hatására olyan harmonikus rezgőmozgást végez a lövedék az alagútban, amelynek periódusideje
 $T_0=
\frac{2\pi}{\omega}=2\pi\sqrt{\frac{m}{D}}=2\pi\sqrt{\frac{R^3}{\gamma M}}=\sqrt{\frac{3\pi}{\gamma \varrho}}\approx 5600~{\rm s}=1{,}55~\text{óra}.
$
 A lövedék azonban a teljes periódusidőnek csak egy részét tölti az alagútban. Ha az időt a kisbolygó középpontján való áthaladástól mérjük, a lövedék elmozdulását és sebességét az
 $x(t)=A\sin\omega t,\qquad
 v(t)=A\omega\cos\omega t $
 összefüggésekkel adhatjuk meg. Tudjuk, hogy az alagút elhagyásának $t_1=T_1/2$ pillanatában
 $x(t_1)=A\sin(\omega t_1)=R,$
 valamint
 $v(t_1)=A\omega\cos(\omega t_1)=v_1 .$
 A $v_1$ sebesség nagyságát onnan tudjuk, hogy ismerjük a lövedék emelkedési magasságát. Az energiamegmaradás tételét alkalmazva ugyanis felírhatjuk:
 $-\gamma\frac{mM}{R}+\frac{1}{2}mv_1^2= -\gamma\frac{mM}{2R},$
 ahonnan
 $v_1=\sqrt{\frac{\gamma M}{R}},$
 ami $\omega=\sqrt{\gamma M/R^3}$ segítségével $v_1=R\omega$ alakban is felírható. Eszerint
 $\frac{x(t_1)}{v(t_1)}= \frac{A\sin(\omega t_1)}{A\omega\cos(\omega t_1)}=\frac{1}{\omega}\tan(\omega t_1)=
\frac{R}{R\omega},
$
 vagyis $\tan(\omega t_1)=1,$ azaz $t_1=\pi/(4\omega).$ A lövedék tehát
 $T_1=2t_1= \frac{\pi}{2\omega}=\frac{T_0}{4}=1400~{\rm s}=0{,}39~\text{óra}
$
 idő alatt repül keresztül a titán kisbolygón.
 A mozgás második szakaszának pályája egy olyan elfajult ellipszis negyedrészének tekinthető, amelynek nagytengelye $2R$, a kistengelye pedig $b\approx 0$. Ezen ellipszisen – Kepler III. törvénye szerint – a teljes keringési idő
 $T_0= 2\pi\sqrt{\frac{R^3}{\gamma M}}=1{,}55~\text{óra}$
 lenne, éppen annyi, mint az alagút belsejében a harmonikus rezgőmozgás teljes periódusideje. Mivel azonban a lövedék az ellipszis kerületének csak negyedét teszi meg, az ehhez szükséges idő (Kepler II. törvényét felhasználva):
 $T_2=T_0\frac{\tfrac14ab\pi+\tfrac12ab }{ ab\pi }=\left(\frac{1}{4}+\frac{1}{2\pi}\right)T_0=0{,}63~\text{óra}.$
 A lövedék mozgásának teljes ideje
 $T=T_1+T_2= \frac{1+\pi}{2\pi}\sqrt{\frac{3\pi}{\gamma\varrho}}\approx 1{,}0~\text{óra}. $
