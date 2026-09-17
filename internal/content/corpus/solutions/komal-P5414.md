---
id: komal-P5414
source: komal
language: hu
translated: false
problem: komal-P5414
figure_files: [komal-P5414-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Legyen az $AB$ és az $AC$ ívek hossza $xR$, vagyis a kör sugarának $x$-szerese. Az egyes drótdarabok ellenállása a hosszukkal arányos. Válasszunk olyan mértékegységrendszert, amelyben az $AD$ átmérő menti drót ellenállása 2 egység, és ennek megfelelően az $AB$ és $AC$ drótívek ellenállása $x$, a $BD$ és $CD$ ívek ellenállása pedig $\pi-x$ lesz, ahogy azt az ábra mutatja. (Az ábrán látható számok nem hosszúságokat, hanem a megfelelő drótdarab ellenállását jelölik.) Az $AB$ és a $BC$ pontok között mérhető ellenállások aránya nem függ az ellenállás önkényesen választott mértékegységétől, tehát ezek az új egységekkel számolva is egyenlő nagyságúak maradnak. 

 Ha a $B$ és a $C$ pont között mérünk ellenállást, a szimmetria miatt az $A$ és a $D$ pontok ekvipotenciálisak lesznek, és emiatt a közöttük lévő egyenes drótdarabot kiiktathatjuk. A mért ellenállás egy $2x$ nagyságú és egy $2(\pi-x)$ nagyságú, párhuzamosan kapcsolt ellenállás eredője lesz: 
 $R_{BC}=\left(\frac{1}{2x}+\frac{1}{2(\pi-x)}\right)^{-1}.$ 
 Bonyolultabb a helyzet az $A$ és $B$ pontok közötti ellenállás kiszámításánál. Az $A$ és a $D$ pont közötti egyenes, illetve félkör alakú vezeték párhuzamos eredője: 
 $\left(\frac{1}{2}+\frac{1}{\pi}\right)^{-1}=\frac{2\pi}{2+\pi}.$ 
 Ehhez csatlakozik sorosan kapcsolva a $BD$ ív $\pi-x$ nagyságú ellenállása, majd párhuzamosan az $AB$ ív $x$ nagyságú ellenállása. Így tehát 
 $R_{AB}= \left(\frac{1}{\pi-x+\frac{2\pi}{2+\pi}}+\frac{1}{x}\right)^{-1}.$ 
 Az $R_{BC}=R_{AB}$ feltétel szerint fennáll az 
 $\frac{1}{2x}+\frac{1}{2(\pi-x)}=\frac{1}{\pi-x+\frac{2\pi}{2+\pi}}+\frac{1}{x}$ 
 összefüggés, amiből algebrai átalakítások után a 
 $(6+\pi)x=\pi(4+\pi)$ 
 lineáris egyenletet kapjuk. Ennek megoldása: 
 $x=\frac{4+\pi}{6+\pi}\pi \approx 2{,}45.$ 
 Ezek szerint az $AB$ és az $AC$ ívek hossza 
 $\frac{\pi(4+\pi)}{6+\pi}R \approx 2{,}45\,R.$

![solution figure](../../raw_html/komal_figures/komal-P5414-sol-fig1.gif)
