---
id: komal-P5536
source: komal
language: hu
translated: false
problem: komal-P5536
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**

 Az eredeti feladat adataival olyan eredmény adódott volna, amely ütközött a foci szabályaival (a szabadrúgást a tizenhatoson belülről rúgták volna). Emiatt az adatokat megváltoztattuk, és ekkor – tévedésből – olyan időadatok kerültek be, amelyekkel a feladat fizikai szempontból ugyan megoldható, de irreális eredményeket ad. A hibáért elnézést kérünk! 

 A labda mozgására a következő egyenleteket írhatjuk fel: 
 $(1)$ $v_1t_1\cos\alpha=d,$ 
 $(2)$ $v_1t_1\sin\alpha-\frac{g}{2}t_1^2=0,$ 
 $(3)$ $v_2t_2\cos2\alpha=d,$ 
 $(4)$ $v_2t_2\sin2\alpha-\frac{g}{2}t_2^2=d\tan\alpha.$ 
 Ezekből az ismeretlen mennyiségek ($d,\alpha, v_1$ és $v_2$) kifejezhetők. 
 $a)$ (1)-ből kifejezve $v_1$-et és azt (2)-be helyettesítve 
 $(5)$ $\frac{g}{2d}=\frac{\tan\alpha}{t_1^2}$ 
 adódik. Hasonló módon a (3)-ból kifejezett $v_2$-t (4)-be írva kapjuk, hogy 
 $(6)$ $\frac{g}{2d}=\frac{\tan 2\alpha-\tan\alpha}{t_2^2}.$ 
 (5) és (6) összevetéséből 
 $\frac{t_2^2}{t_1^2}=\frac{\tan 2\alpha-\tan\alpha}{\tan\alpha}=\frac{2}{1-\tan^2\alpha}-1=\frac{1+\tan^2\alpha}{1-\tan^2\alpha},$ 
 ahonnan 
 $(7)$ $\alpha=\arctan \sqrt{\frac{t_2^2-t_1^2}{t_2^2+t_1^2}}\approx 7{,}13^\circ.$ 
 $b)$ (5) és (7) felhasználásával a keresett távolság: 
 $d=\frac{g t_1^2}{2}\sqrt{\frac{t_2^2+t_1^2}{t_2^2-t_1^2}}\approx 141\,\mathrm{m}.$ 
 $c)$ Az elrúgott labdák kezdősebessége (1) és (3)-ból számítható ki: 
 $v_1=\frac{gt_1t_2}{\sqrt{2(t_2^2-t_1^2)}}\approx 75{,}0\,\frac{\mathrm{m}}{\mathrm{s}},$ 
 illetve 
 $v_2=\frac{gt_2}{2}\sqrt{\frac{t_2^2+t_1^2}{t_2^2-t_1^2}}\approx 75{,}6\,\frac{\mathrm{m}}{\mathrm{s}}.$ 

 Megjegyzések: 1. A számszerű eredmények nyilvánvalóan nem összeegyeztethetők egy valóságos focipályával, hiszen a kapu magasságára (amelynek értékét ugyan a feladat nem kérdezte) $17{,}7\,\mathrm{m}$ adódik. A szabadrúgás távolsága és a sebességek is túl nagynak adódnak. 

 2. Észrevehetjük, hogy a numerikus eredmények rendkívül érzékenyek a kiinduló adatokra (és a számítások közbeni esetleges kerekítésekre). Ennek az az oka, hogy a kifejezésekben két, egymástól csak nagyon kicsit eltérő mennyiség különbsége szerepel. (Ugyanakkor az időadatokat kettőnél több tizedes pontossággal megadni a labda kiterjedt mérete miatt értelmetlen.) 

 3. Az irreális numerikus eredmények miatt a hibátlan paraméteres megoldásért is maximális pontszám jár.
