---
id: komal-P5188
source: komal
language: hu
translated: false
problem: komal-P5188
figure_files: [komal-P5188-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A grafikonról leolvasható, hogy a hasáb gyorsulása: $a=\mu g=-2~\frac{\rm m}{\rm s^2}\approx 0{,}2\,g$, tehát a csúszási súrlódási együttható közelítőleg 0,2. (A pontosabb érték: 0,204.) A hasábra a vízszintes felület olyan erőt fejt ki, amely a függőlegessel (a hasáb haladási irányához képest ,,hátrafelé'') $\varphi=\arctan \mu=11{,}31^\circ\text{-os}$ szöget zár be. 
 A pillanatszerűnek tekintett (valójában csak nagyon rövid ideig tartó) kilövés során a lövedék hirtelen felgyorsul, tehát igen rövid $\Delta t$ ideig nagyon nagy $\boldsymbol F$ erő hat rá. A hasábra ugyancsak egy nagy erőlökés hat (amit a vízszintes felület fejt ki), ez akadályozza meg, hogy a hasáb függőleges irányban elmozduljon. A hasábra ható erőlökés iránya a függőlegessel ugyancsak $\varphi$ szöget zár be, hiszen azt az $\boldsymbol N$ nyomóerő és az $\boldsymbol S$ súrlódási erő eredője hozza létre. A lendületmegmaradás törvénye szerint 
 $(1)$ $\boldsymbol F \Delta t=m{ \boldsymbol v}_\text{lövedék}+M\Delta{ \boldsymbol v}_\text{hasáb}.$ 
 $a)$ Amennyiben a kilövés nincs hatással a hasáb mozgására (vagyis nem változik meg hirtelen a hasáb sebessége), akkor $\Delta{ \boldsymbol v}_\text{hasáb}=0$, és így $\boldsymbol F$ és $\boldsymbol v_\text{lövedék}$ azonos irányú vektorok. Az előbbi a függőlegessel $\varphi$ szöget zár be, a lövedék sebességét pedig az ágyúcső függőlegessel bezárt $\gamma$ szöge határozza meg. Az (1) egyenlet csak akkor teljesülhet, ha $\gamma=\varphi$, vagyis az ágyúcső a vízszintessel $90^\circ-\varphi=78{,}47^\circ$-os szöget zár be. 

 Megjegyzés. A kilőtt lövedék sebességének benne kell lennie a hasáb sebessége és a függőleges által meghatározott síkban. Ha az ágyúcső ,,ferdén'' állna, akkor a lövedék ,,oldalirányú'' lendülete megváltoztatná a hasáb mozgásának irányát. 

 $b)$ Változtassuk meg most az ágyúcsőnek a vízszintessel bezárt szögét az előző esetbeli szög felére, $39{,}23^\circ$-ra, vagyis legyen az ágyúcső és a függőleges szöge $\gamma'=50{,}77^\circ$. 
 A kilövés pillanatában ($t=2~\rm s$-nál az $M+m$ tömegű rendszer $v_1=6$ m/s sebességgel mozog, tehát a lendülete $(M+m)v_1$. A kilövés hatására a hasáb sebessége hirtelen megváltozik, nagysága $v_2$ lesz. Az $m$ tömegű lövedék a hasábhoz képest $v_0\cos\gamma'$ függőleges irányú és $-v_0\sin\gamma'$ vízszintes irányú sebességre tesz szert. A lövedék vízszintes sebességkomponense a talajhoz képest $v_2-v_0\sin\gamma'$ nagyságú. A függőleges irányú lendületváltozást az 
 $N\Delta t=mv_y$ 
 erőlökés hozta létre. A vízszintes irányú erőlökés: 
 $S\Delta t=-\mu N \Delta t= -\mu m v_y.$ 
 A vízszintes irányú lendületváltozást leíró egyenlet: 
 $(Mv_2+m(v_2-v_0\sin\gamma')-(M+m)v_1= -\mu m v_0\cos\gamma',$ 
 ahonnan a hasáb sebességváltozása: 
 $v_2-v_1=\frac{m}{M+m}v_0\cos\gamma'(\tan\gamma'-\mu).$ 
 (Látható, hogy ha $\tan\gamma'=\mu$ teljesülne, akkor nem változna meg a hasáb sebessége a kilövés következtében, ahogy ezt már korábban beláttuk.) A leeresztett csövű ágyúnál viszont $v_2-v_1=0{,}294~{\rm m/s}\approx 0{,}3~{\rm m/s}$, tehát a hasáb sebessége a kilövés hatására 6,3 m/s-ra nő. A hasáb a további mozgása során ugyanolyan ütemben lassul, mint korábban (hiszen a súrlódás miatti fékeződés üteme nem függ a mozgó test tömegétől).

![solution figure](../../raw_html/komal_figures/komal-P5188-sol-fig1.gif)
