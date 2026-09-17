---
id: komal-P5138
source: komal
language: hu
translated: false
problem: komal-P5138
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük $\Delta T$-vel azt a (Celsius-fok egységekben mért) hőmérséklet-különbséget, amennyivel melegebb egy bizonyos test a környezeténél. A Newton-féle lehűlési törvény szerint a $\Delta T(0)$ kezdeti hőmérséklet-különbséggel jellemezhető test hőmérsékletének a környezetétől való eltérése időben így változik: 
 $\Delta T(t)=\Delta T(0)\,{\rm e}^{-\lambda t},$ 
 ahol $\lambda$ a test hőkapacitásától, a felületének nagyságától és az ún. hőátadási tényezőtől függő állandó. Esetünkben $\lambda$ mindegyik folyamatnál ugyanakkora. 
 A megadott négy esetben a következő egyenleteket írhatjuk fel: 
 $(i)$ 
 $50\,{\rm e}^{-\lambda t_0}=10,$ 
 vagyis $\lambda t_0=\ln (50/10)=1{,}609$. 
 $(ii)$ 
 $50\,{\rm e}^{-\lambda t_1}=20,$ 
 vagyis $\lambda t_1=\ln (50/20)=0{,}916$. 
 $(iii)$ Az 1-1 liternyi 80 és 30 fokos víz összeöntésekor 2 liter 55 fokos vizet kapunk. Ennek hűlését a 
 $25\,{\rm e}^{-\lambda t_2}=10$ 
 egyenlet írja le, ahonnan $\lambda t_2=\ln ({25}/{10})=0{,}916$. 
 $(iv)$ Legyen az első hűlés ideje $t^*$, a második pedig $t_3-t^*$. Mivel a kétféle hőmérsékletű víz összeöntése után 45 fokos vizet kapunk, ami 15 fokkal melegebb a környezeténél, fennáll, hogy 
 $50\,{\rm e}^{-\lambda t^*}=30, \quad\text{valamint}\quad 15\,{\rm e}^{-\lambda \left(t_3-t^*\right)}=10.$ 
 Innen kapjuk, hogy 
 $\lambda t^*=\ln \frac{50}{30}, \qquad \lambda \left(t_3-t^*\right)=\ln \frac{15}{10},$ 
 ezek összegéből pedig 
 $\lambda t_3=\ln \frac{50}{30}+\ln \frac{15}{10}=0{,}916.$ 
 Látható, hogy 
 $t_1=t_2=t_3=\frac{0{,}916}{1{,}609}\,t_0=0{,}57\, t_0.$ 
 Azt az érdekes eredményt kaptuk, hogy a lehűlés ideje nem függ attól, hogy mikor keverjük össze a már részben kihűlt folyadék felét ugyanannyi, a környezet hőmérsékletével megegyező hőfokú vízzel; a célértéket ugyanolyan gyorsan érjük el.
