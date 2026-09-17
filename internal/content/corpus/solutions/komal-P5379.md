---
id: komal-P5379
source: komal
language: hu
translated: false
problem: komal-P5379
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A rövidség kedvéért nevezzük egy ideális polárszűrő irányának a szűrőn áthaladó fény polarizációjának irányát. Ha egy lineárisan polarizált fény polarizációs irányával $\alpha$ szöget bezáró irányú szűrőt helyezünk el, és a fényhullám $\boldsymbol E$ elektromos térerősségvektorát felbontjuk a polárszűrő irányával párhuzamos és arra merőleges összetevőkre, akkor a szűrő csak az $\boldsymbol E\cdot \cos\alpha$ nagyságú komponenst engedi át. A polárszűrő tehát az elektromos térerősség nagyságát $\cos\alpha$ arányban, az intenzitást $\cos^2\alpha$ arányban csökkenti, és a fény polarizáció irányát $\alpha$ szöggel elforgatja. 
 Ha $n$ darab polárszűrőt helyezünk el egymáshoz képest ugyanakkora, $\alpha= {45^\circ}/{n}$ szögben, akkor az együttes hatásukra a fény intenzitása $\cos^{2n}(45^\circ/n)$ arányban csökken. Különböző $n$ értékeket behelyettesítve ,,próbálgatással'' kapjuk, hogy a monoton növekvő arányszám-sorozat $n=5$-re még 0,88, $n=6$-ra viszont 0,902, tehát $90\%$-nál nagyobb. Megállapíthatjuk, hogy legalább 6 db polárszűrőre van szükségünk, amelyeket egymással 7,5$^\circ$-os szögben kell elhelyezzünk. 
 Be kell még látnunk, hogy ha a $45^\circ$-os szöget nem egyenlő arányban osztjuk fel $n$ részre, akkor az intenzitáscsökkenés nagyobb, tehát a helyzet kedvezőtlenebb lesz, mint az egyenközű felosztásnál volt. Tekintsünk egy olyan elrendezést, amelynél a szomszédos polárszűrők közötti szögek közül a legnagyobb $\alpha$, a legkisebb pedig $\beta$ (ahol $\alpha$, $\beta$ és $\alpha+\beta$ is hegyesszög.) 
 Megmutatjuk, hogy ezen két szűrő által okozott intenzitáscsökkenés adott $\alpha+\beta=\varphi$ mellett akkor a legkisebb, vagyis $\cos^2\alpha\cdot \cos^2\beta$ akkor a legnagyobb, amikor $\alpha=\beta=\frac12\varphi$. Valóben, az amplitúdók változási arányszámára fennáll: 
 $\cos\alpha\cdot \cos\beta=\frac12 \cos(\alpha+\beta)+\frac12 \cos(\alpha-\beta)\le \frac12(\cos\varphi+1)=\cos^2(\varphi/2),$ 
 és ugyanilyen irányú egyenlőtlenség érvényes az intenzitásokra is. Az egyenlőség akkor teljesül, ha $\alpha=\beta=\varphi/2$. 
 Ezek szerint ha a polárszűrők közötti legnagyobb és a legkisebb szöget azok átlagával helyettesítjük, az átengedett fény intenzitása megnő. Ezt az eljárást (véges vagy végtelen) sokszor megismételve eljutunk a legkedvezőbb helyzetig, amelyben a szomszédos polárszűrők mind ugyanakkora ($45^\circ/n$) szöget zárnak be egymással.
