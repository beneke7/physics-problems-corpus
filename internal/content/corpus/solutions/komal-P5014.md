---
id: komal-P5014
source: komal
language: hu
translated: false
problem: komal-P5014
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A Hold felszínén a nehézségi gyorsulás 
 $g_0=\frac{\gamma M_\text{Hold}}{R^2}\approx 1{,}62~\frac{\rm m}{\rm s^2},$ 
 ahol $R\approx 1738~\rm km$ a Hold (átlagos) sugara. 
 Ha a lövedék emelkedési magassága $h=0{,}01R$, a nehézségi gyorsulás (2 értékes jegyre történő számolásnál) állandónak tekinthető, így a kezdősebesség $v_0=\sqrt{2g_0h}=0{,}24~$km/s. 
 Ha az emelkedési magasság $\tfrac{p}{100}R$, és $p=10$, illetve $p=100$, figyelembe kell vegyük, hogy a nehézségi gyorsulás a Hold középpontjától mért $r$ távolságban 
 $g(r)= g_0\frac{R^2}{r^2},$ 
 és ennek megfelelően egy $m$ tömegű lövedék gravitációs helyzeti energiája 
 $E(r)=-\frac{\gamma M_\text{Hold}}{r}=-mg_0\frac{R^2}{r}.$ 
 Az energiamegmaradás tétele szerint 
 $\frac1{2}mv_0^2=E\left(R+\tfrac{p}{100}R\right)-E(R),$ 
 azaz 
 $v_0=\sqrt{2g_0R} \sqrt{\tfrac{p}{p+100}}= \sqrt{\tfrac{p}{p+100}}\cdot 2{,}37 ~\frac{\rm km}{\rm s}.$ 
 Ez az érték $p=1$ esetén $0{,}24~$km/s, tehát megegyezik a korábbi (homogén gravitációs teret feltételező) számolás eredményével, viszont $p=10$-nél $0{,}72~$km/s, $p=100$-nál pedig $1{,}7~$km/s. Ez utóbbi két sebesség már eltér a naiv számolás $0{,}75~$km/s és $2{,}4~$km/s értékeitől.
