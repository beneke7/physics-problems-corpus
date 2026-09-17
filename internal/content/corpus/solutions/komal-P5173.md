---
id: komal-P5173
source: komal
language: hu
translated: false
problem: komal-P5173
figure_files: [komal-P5173-sol-fig1.gif, komal-P5173-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A kapcsoló zárása előtt a tekercs egyik részében sem folyik áram. A toroidtekercs magjában nulla a mágneses indukció, tehát mágneses fluxus sincs. 
 A kapcsoló zárását követően az $N_1$ menetes tekercsben $I_1(t)$, a toroidtekercs többi részében $I_2(t)$ áramerősség, a tekercs magjában pedig $B(t)$ mágneses indukció alakul ki az 1. ábrán látható irányítással. A mágneses fluxus a tekercs magjában $\Phi(t)=AB(t).$ 

 1. ábra 

 A gerjesztési törvény szerint (a tekercs magjában mindenhol) a mágneses indukció 
 $(1)$ $B(t)=\mu\frac{N_1I_1-(N-N_1)I_2}\ell$ 
 nagyságú, a mágneses fluxus pedig 
 $(2)$ $\Phi(t)=B(t)\cdot A=\mu\frac{A}{\ell}\left[N_1\left(I_1+I_2\right)-NI_2\right].$ 
 Mivel az egész tekercs önindukciója 
 $(3)$ $L=\mu\frac{N^2A}{\ell}$ 
 ($\mu=\mu_0\,\mu_{\rm rel}\gg \mu_0$), a mágneses fluxus így is felírható: 
 $(4)$ $\Phi(t)=\frac{L}{N^2}\left[N_1\left(I_1+I_2\right)-NI_2\right].$ 
 A Faraday-féle indukciótörvény szerint az időben változó mágneses fluxus a tekercsekben menetenként $U=-\frac{\Delta \Phi}{\Delta t}$ feszültséget indukál. Kirchhoff huroktörvénye szerint a kapcsoló bekapcsolása után: 
 $(5)$ $U_0-N_1\frac{\Delta \Phi}{\Delta t}=0,$ 
 $(6)$ $N\frac{\Delta \Phi}{\Delta t}-I_2R=0.$ 
 Az (5) egyenlet meghatározza a mágneses fluxus időbeli változását: 
 $\Phi(t)=\frac{U_0}{N_1}\cdot t=5~\frac{ \rm mH}{\rm s}\cdot t, \quad \text{ha}\quad t>0, $ 
 (6) pedig $I_2$-t: 
 $I_2(t)=\frac{N}{N_1}\frac{U_0}{R}= \text{állandó}, \quad \text{ha}\quad t >0.$ 
 Ezt (4)-be helyettesítve megkapjuk $I_1$ időbeli változását, ha $t>0$: 
 $I_1(t)=N\frac{N-N_1}{N_1^2}\,\frac{U_0}{R}+\frac{N^2}{N_1^2} \, \frac{U_0}{L}\,t=0{,}28~{\rm A}+13{,}3~\frac{\rm A}{\rm s}\cdot t.$ 
 A kérdéses $t_0=0{,}1~$s időpillanatban tehát a toroidtekercs két ágában 
 $I_1(t_0)=1{,}61~{\rm A}\quad \text{és}\quad I_2(t_0)=50~{\rm mA}$ 
 erősségű áram folyik. A mágneses fluxus és az áramerősségek időbeli változását a 2. ábra mutatja. 

 2. ábra 

 Megjegyzés. A feladatban szereplő összeállítás egy transzformátor, amelynek primér körére – a szokásostól eltérő módon – egyenfeszültséget kapcsoltunk. A mágneses fluxus kezdetben az idővel arányosan növekszik, de egy idő után a tekercs magjának mágnesezettsége ,,telítésbe megy'', $\mu_\text{rel}$ ekkor már nem tekinthető állandónak. A megoldás során feltételeztük, hogy $t<t_0$ időknél ez még nem következik be. 

 $b)$ Kirchhoff csomóponti törvénye szerint az áramforráson átfolyó áram erőssége $I_1(t)+I_2$, amelynek átlagos értéke a $0<t<t_0$ időintervallumban 
 $I_\text{átlag}=\frac{I_1(0)+I_1(t_0)}{2}+I_2=1{,}00~\rm A,$ 
 az akkumulátor által $t_0$ idő alatt leadott energia tehát 
 $W=I_\text{átlag}U_0\, t_0=0{,}15~\rm J.$ 
 Az ohmos ellenálláson fejlődő Joule-hő: 
 $Q=I_2^2R\,t_0=0{,}05~\rm J.$ 
 Láthatóan $W>Q$, a különbségük feltehetően a kialakuló mágneses tér energiájával egyezik meg. 
 A mágneses mező energiasűrűsége 
 $w_\text{mágn.}=\frac{B^2}{2\mu},$ 
 a tekercs $A\ell$ térfogatú magjának energiája: 
 $W_\text{mágn.}=A\ell w_\text{mágn.}=A\ell \frac{B^2}{2\mu}=\frac{\Phi^2(t_0)\ell}{2\mu A}=\frac{U_0^2}{2L}
 \left(\frac{N}{N_1}\right)^2 t_0^2=0{,}10~\rm J.$ 
 A ,,munkatétel'' teljesül: 
 $W=Q+ W_\text{mágn.}.$

![solution figure](../../raw_html/komal_figures/komal-P5173-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5173-sol-fig2.gif)
