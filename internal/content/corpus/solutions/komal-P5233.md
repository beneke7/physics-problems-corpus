---
id: komal-P5233
source: komal
language: hu
translated: false
problem: komal-P5233
figure_files: [komal-P5233-sol-fig1.gif, komal-P5233-sol-fig2.gif, komal-P5233-sol-fig3.gif, komal-P5233-sol-fig4.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Jelöljük a levelibéka kezdősebességét $v_0$-lal. A béka mozgási energiája $E=mv_0^2/2$, ennek legkisebb értékét akarjuk meghatározni. 
 Írjuk le a béka mozgását, vagyis a ferde hajítás folyamatát az 1. ábrán látható derékszögű koordináta-rendszerben! 

 1. ábra 

 A vízszintes ($x$ tengely irányú) mozgás egyenletes: 
 $(1)
$ $x(t)=v_{0}\cdot \cos\alpha\cdot t,
$ 
 ahol $\alpha$ az elugrás irányának a vízszintessel bezárt szöge. 
 A függőleges, egyenletesen gyorsuló mozgást leíró összefüggés: 
 $(2)
$ $y(t)=-\frac{g}{2}t^2+v_{0}\cdot \sin\alpha\cdot t.
$ 
 Az (1) egyenletből kifejezhetjük az időt: 
 $t=\frac{x}{v_{0}\cos\alpha},
$ 
 majd ezt (2)-be helyettesítve megkapjuk a pályagörbe egyenletét: 
 $y=-\frac{g}{2v_{0}^2\cos^2\alpha}\; x^2+x \mathop{\rm tg} \alpha.$ 
 A béka akkor éri el a levelet, ha $x=s$ esetén $y=h$, vagyis 
 $(3)
$ $-\frac{g}{2v_{0}^2\cos^2\alpha}\; s^2+s \mathop{\rm tg} \alpha=h,$ 
 ami $v_0^2$-t az $E$ energiával kifejezve és az $1/\cos^2\alpha=1+\tan^2\alpha$ azonosságot felhasználva így is felírható: 
 $(4)$ $\tan^2\alpha-\frac{4E}{mgs}\, \tan\alpha+\left(1+\frac{4Eh}{mgs^2}\right)=0.$ 
 Tekintsük úgy, mintha $E$-t ismernénk, és $\alpha$-t szeretnénk meghatározni. A fenti, $\tan\alpha$-ra nézve másodfokú egyenletnek akkor van (valós) megoldása, ha a diszkrimináns nem negatív: 
 $\left(\frac{4E}{mgs}\right)^2-4\left(1+\frac{4Eh}{mgs^2}\right)\ge 0,$ 
 vagyis 
 $(5)$ $E^2 -mgh\,E-\left(\frac{mgs}{2}\right)^2\ge0.$ 
 Ez az egyenlőtlenség akkor teljesül, ha 
 $E\ge \frac{mg}{2}\left(h+\sqrt{h^2+s^2}\right) \qquad\text{vagy}
\qquad E\le \frac{mg}{2}\left(h-\sqrt{h^2+s^2}\right).$ 
 A második eset (ami nullánál kisebb $E$-t adna) számunkra érdektelen, mivel a mozgási energia pozitív. Így megállapíthatjuk, hogy a levelibéka elugrásakor végzett munka 
 $(6)$ $W\ge \frac{mg}{2}\left(h+\sqrt{h^2+s^2}\right).$ 
 Az elugrás $v_0$ sebességének megkisebb értéke: $v_0=\sqrt{\frac{2E}m}=\sqrt{g(\sqrt{s^2+h^2}+h)}$. 
 A legkisebb $W$ munkának megfelelő elugrási szögre a (6) egyenlőtlenség határesetének megfelelő $E=W$ energiát (4)-be helyettesítve a 
 $(7)$ $\tan\alpha=\frac{h+ \sqrt{h^2+s^2}}{s}$ 
 összefüggés adódik. 

**II. megoldás.**
 Az I. megoldás (3) egyenletéből kiindulva (és $v_0^2=2E/m$-et kihasználva) kapjuk, hogy 
 $(8)$ $\frac{mgs^2}{2E}+h= s\sin(2\alpha)-h\cos(2\alpha).$ 
 Az $E$ energia legkisebb értékét (8) jobb oldalának maximuma határozza meg. Ez háromféle módszerrel is megkapható: 
 $(i)$ Trigonometrikus és algebrai átalakításokkal : 
 $(9)$ $s\sin(2\alpha)-h\cos(2\alpha)=\sqrt{ h^2+ s^2}\sin(2\alpha-\beta),$ 
 ahol $\tan\beta=\frac{h}{s}.$ (8) jobb oldala nyilván akkor maximális, ha 
 $(10)$ $\sin(2\alpha-\beta)=1, \qquad \text{azaz}\qquad
 \alpha=45^\circ +\frac{\beta}{2}.$ 
 Ekkor 
 $E_\text{min}=\frac{mg}{2}\frac{s^2}{\sqrt{h^2+s^2}-h}=\frac{mg}{2}(h+\sqrt{h^2+s^2}).$ 
 (Az elugrás szögére kapott (10) összefüggés egyenértékű az I. megoldás (7) képletével.) 

 $(ii)$ Geometriai módszerrel : Tekintsünk egy $h$ és $s$ oldalélű téglalapot, amelynek egyik csúcspontja egy adott $e$ egyenesre illeszkedik, és az $s$ hosszúságú oldal $2\alpha$ szöget zár be $e$-vel ( 2. ábra ). 

 2. ábra 

 A $B$ pont távolsága az $e$ egyenestől: 
 $BM=s\sin(180^\circ-2\alpha)+h \cos(180^\circ-2\alpha)=s\sin(2\alpha)-h\cos(2\alpha),$ 
 vagyis éppen az a kifejezés, aminek a maximumát keressük. A maximumhelynél $BO$ merőleges az $e$ egyenesre, vagyis 
 $180^\circ-2\alpha+\beta=90^\circ, \qquad\text{azaz}\qquad \alpha=45^\circ+\frac{\beta}{2}.$ 
 $BM$ maximális nagysága $\sqrt{h^2+s^2}$, és a béka elugrásához szükséges legkisebb munka: 
 $E_\text{min}=\frac{mg}{2}(h+\sqrt{h^2+s^2}).$ 

 $(iii)$ Differenciálszámítással : (7) jobb oldalának deriváltja a szélsőérték (lokális maximum) $\alpha=\alpha_0$ helyén eltűnik: 
 $2s\cos(2\alpha_0)+2h\sin(2\alpha_0)=0,$ 
 vagyis 
 $\tan(2\alpha_0)=-\frac{s}{h} \qquad (0\leq2\alpha_0\leq 180^\circ),
$ 
 és 
 $s\sin(2\alpha)-h\cos(2\alpha)\le s\sin(2\alpha_0)-h\cos(2\alpha_0)=\sqrt{h^2+s^2},$ 
 ennek megfelelően 
 $W\ge E_\text{min}=\frac{mg}{2}(h+\sqrt{h^2+s^2}).$ 

**III. megoldás.**
 Jelöljük a levelibéka kezdősebességének vektorát $\boldsymbol{v}_{0}$-lal, a levélhez érkező béka sebességét $\boldsymbol{v}_{1}$-gyel, a teljes mozgáshoz tartozó elmozdulásvektort $\boldsymbol{r}$-rel, a nehézségi gyorsulást (mint vektort) pedig $\boldsymbol{g}$-vel ( 3. ábra )! Tudjuk, hogy az $\boldsymbol{r}$ vektor vízszintes komponense $s$, a függőleges pedig $h$ nagyságú, továbbá az energiamegmaradás tétele szerint 
 $\frac{m}{2}v_0^2=\frac{m}{2}v_1^2+mgh,\qquad\text{azaz}\qquad v_1=\sqrt{v_0^2-2gh}.$ 

 3. ábra 

 Newton II. törvénye szerint 
 $(11)
$ $\frac{\boldsymbol{v}_{1}-\boldsymbol{v}_{0}}{t}=\boldsymbol{g},
$ 
 ahol $t$ a mozgás időtartama. 
 Másrészt igaz, hogy 
 $(12)
$ $\frac{\boldsymbol{v}_{1}+\boldsymbol{v}_{0}}{2}\cdot t=\boldsymbol{r},
$ 
 itt kihasználtuk, hogy a sebesség időben egyenletesen változik, tehát az átlagsebesség megegyezik a kezdeti- és végsebesség számtani közepével. 

 4. ábra 

 Tekintsük a kezdeti sebesség és a végsebesség vektora által kifeszített $OBCA$ paralelogrammát ( 4. ábra ), és számítsuk ki a paralelogramma $T$ területét kétféle módon. Egyrészt $T=
|\boldsymbol{v}_{0}|\, |\boldsymbol{v}_{1}|\,\sin\gamma$, másrészt 
 $T= AB\cdot OM=gt\cdot\frac{s}{t}=gs.
$ 
 Kihasználtuk, hogy az $AB$ szakasz függőleges és (11) szerint $gt$ hosszúságú, valamint (12) alapján $OD$ hossza $r/t$, tehát $OD$ vízszintes ($AB$-re merőleges) vetülete $OM=s/t$. A kétféle számítás eredményét összehasonlítva kapjuk, hogy 
 $gs =|\boldsymbol{v}_{0}|\, |\boldsymbol{v}_{1}|\,\sin\gamma\le
v_{0}\sqrt{v_{0}^2-2gh}.
$ 
 Ez megegyezik az (5) feltétellel, ha $v_0$-t $E$-vel fejezzük ki. 
 Az egyenlőség akkor teljesül, amikor a kezdeti sebesség és a végsebesség merőleges egymásra. Az elhajítás $\alpha$ szögére ilyenkor (az $OMA$ és $BOA$ derékszögű háromszögek hasonlósága miatt) fennáll: 
 $\mathop{\rm tg} \alpha=\frac{AM}{OM}=\frac{AO}{OB}=\frac{v_{0}}{v_{1}}=\frac{v_{0}}{\sqrt{v_{0}^2-2gh}}.
$ 
 Ez ekvivalens a (6) kifejezéssel, ahogy erről a $v_0$-t az $E_\text{min}$-nel kifejezve meggyőződhetünk. 

 Megjegyzés. Ez a feladat szoros ,,rokona'' a következőnek: 

 Egy $h$ magas toronyból adott $v_{0}$ nagyságú kezdősebességgel különböző irányokba hajíthatunk el pontszerű testeket. Legfeljebb mekkora (vízszintesen mért) távolságra juthatnak el a testek, ha a légellenállás nem számottevő? 

 Ennek a problémának többféle megoldását is bemutatja a KöMaL 2004. decemberben megjelent Egy fizika feladat megoldása ,,a Könyvből'' című cikk (lásd http://db.komal.hu/KomalHU/ , illetve a honlapon ).

![solution figure](../../raw_html/komal_figures/komal-P5233-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5233-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5233-sol-fig3.gif)

![solution figure](../../raw_html/komal_figures/komal-P5233-sol-fig4.gif)
