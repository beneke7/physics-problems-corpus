---
id: komal-P5026
source: komal
language: hu
translated: false
problem: komal-P5026
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A tű hegye körül elforduló gyűrű egy fizikai inga, amelynek lengésideje (kis kitérések esetén) 
 $T_1=2\pi\sqrt{\frac{ mR^2+m(R-r)^2}{mg(R-r)}}=2\pi\sqrt{\frac{ 2R^2+r^2-2rR}{ g(R-r)}}.$ 
 A hengeren csúszásmentesen gördülő gyűrű mozgása bonyolultabb, hiszen a pillanatnyi forgástengely (a karika és a henger $A$ érintkezési pontja) pillanatról pillanatra változó helyen található. Jelöljük a gyűrű $A$ körüli szögsebességét $\Omega_A$-val! A gyűrű mozgási energiája ekkor 
 $E_\text{mozgási}=\frac{1}{2}I_A\Omega_A^2,$ 
 ahol a Steiner-tétel szerint $I_A=2mR^2$. 
 Fejezzük ki a mozgási energiát a henger (időben állandó helyzetű) $P$ ,,középpontja'' körüli elfordulás $\Omega_P$ szögsebessége segítségével! Mivel a gyűrű $K$ középpontjának sebessége kétféle módon is felírható: 
 $v_K=R\Omega_A=(R-r)\Omega_P,$ 
 tehát 
 $\Omega_A=\frac{R-r}{R}\Omega_P,$ 
 és így a mozgási energia 
 $E_\text{mozgási}=m(R-r)^2\Omega_P^2.$ 
 Ha az $AK$ egyenes $\varphi$ szöget zár be a függőlegessel, akkor a karika gravitációs helyzeti energiája 
 $E_\text{helyzeti}=mg(R-r)(1-\cos\varphi)=mg(R-r)\cdot 2\sin^2\frac{\varphi}{2}\approx mg(R-r)\frac{\varphi^2}{2}.$ 
 Tudjuk továbbá, hogy 
 $\Omega_P=\frac{\Delta\varphi}{\Delta t},$ 
 vagyis $\Omega_P$ az időben változó $\varphi(t)$ változási sebessége (deriváltja). 
 A harmonikus rezgőmozgás képleteit használva felírhatjuk: 
 $\varphi(t)=\varphi_\text{max} \sin\omega t,$ 
 $\Omega_P(t)=\varphi_\text{max} \omega \cos\omega t,$ 
 ahol $\omega=2\pi/T$ ($T$ a rezgés periódusideje). 
 Ezek ismeretében megadhatjuk a helyzeti és a mozgási energia időbeli változásának képleteit: 
 $E_\text{helyzeti}(t)= \frac{1}{2}mg(R-r) \varphi_\text{max}^2\sin^2(\omega t), $ 
 $E_\text{mozgási}(t)= m(R-r)^2\omega^2 \varphi_\text{max}^2\cos^2(\omega t). $ 
 A gyűrű teljes energiája időben állandó mennyiség: 
 $E=E_\text{helyzeti}(t)+E_\text{mozgási}(t)=\text{állandó}+\frac{1}{2}mg(R-r) \varphi_\text{max}^2\cos^2(\omega t)\left[\frac{2\omega^2(R-r)}{g}-1\right]. $ 
 Ez az energia akkor nem függ az időtől, ha a szögletes zárójelben álló kifejezés nulla , vagyis 
 $\omega=\sqrt{\frac{g}{2(R-r)}},$ 
 és így a ,,gördüléses rezgőmozgás'' periódusideje 
 $T_2=2\pi\frac{2(R-r)}{g}.$ 
 Megmutatjuk, hogy $T_1>T_2$, tehát a tű csúcsán billegő gyűrű lengésideje nagyobb, mint a gördülő gyűrűé. Valóban (a fizikailag megvalósítható $0<r<R$ tartományban) 
 $\left(\frac{T_1}{T_2}\right)^2=\frac{2R^2+r^2-2Rr}{2(R-r)^2 } = 1+\frac{r(2R-r)}{2(R-r)^2}>1. $
