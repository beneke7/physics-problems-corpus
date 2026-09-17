---
id: komal-P4897
source: komal
language: hu
translated: false
problem: komal-P4897
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A csapból kiáramló víz sebessége a Torricelli-féle kiömlési törvény szerint a vízszint $h$ magasságának négyzetgyökével arányos: $v_\text{csap}=\sqrt{2gh}$. A folyadék felszínének süllyedési sebessége a kifolyási sebességgel arányos (az arányossági tényező a csap keresztmetszetének és az edény keresztmetszetének hányadosa). Tehát a vízszint $h$ magassága és annak csökkenési sebessége közötti kapcsolat így írható fel: 
 $v(h)=-\sqrt{2ah},$ 
 ahol $a$ egy (a nehézségi gyorsulástól és a geometriai adatoktól függő) állandó. (A negatív előjel azt fejezi ki, hogy $h$ csökken .) Ez az összefüggés megegyezik egy állandó $a$ gyorsulással mozgó test sebesség-út képletével, tehát az út-idő összefüggés is az egyenletesen gyorsuló mozgás képletével adható meg: 
 $h(t)=H-v_0 t+\frac{a}{2}t^2,
$ 
 ahol $H$ a kezdeti vízmagasság, $v_0=\sqrt{2aH}$ pedig a vízszint kezdeti süllyedési sebessége. Eszerint 
 $h(t)=H-\sqrt{2aH}t+\frac{a}{2}t^2\equiv\frac{a}{2}\left(\sqrt{\frac{2H}{a}}-t\right)^2.$ 
 Mivel $T$ idő alatt a vízmennyiség fele folyik ki: 
 $\frac{H}{2}=\frac{a}{2}\left(\sqrt{\frac{2H}{a}}-T\right)^2,$ 
 ahonnan 
 $\sqrt{\frac{H}{a}}=\frac{T}{ \sqrt{2}-1}.$ 
 A teljes kiürülés idejét a $h=0$ feltétel határozza meg: 
 $T_\text{kiürül}=\sqrt{\frac{2H}{a}}=\sqrt{2}\frac{T}{ \sqrt{2}-1}=\left(2+\sqrt{2}\right)\,T\approx 3{,}41\, T.$
