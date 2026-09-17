---
id: komal-P5732
source: komal
language: hu
translated: false
problem: komal-P5732
figure_files: [komal-P5732-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Úgy tekintjük, hogy a két kötél közötti középvonal függőleges és végig mozdulatlan, továbbá a két kötélre nézve teljes szimmetriát feltételezünk. A hágcsó fokait föntről lefelé számozzuk, az egyes fokoknak a nyugalmi helyzetükhöz viszonyított elfordulását $\varphi_n$-nel jelöljük. A hágcsó egy darabját az ábra mutatja. Ezen bejelöltük a hágcsó képzeletbeli tengelyét, és azokat a köröket is, amiken a fokok végei mozoghatnak. 

 Az egyes létrafokokra ható forgatónyomatékot az alábbiak szerint határozhatjuk meg. Legyen az $n$-edik és $n+1$-edik fok közötti kötéldarabokban ható erő nagysága $K_{n,n+1}$. Ennek a vízszintes vetülete (feltételezve, hogy a szomszédos fokok relatív elfordulása olyan kicsi, hogy a $(\varphi_{n+1}-\varphi_n)\approx\sin(\varphi_{n+1}-\varphi_n)\approx\tg (\varphi_{n+1}-\varphi_n)$ és a $\cos(\varphi_{n+1}-\varphi_n)\approx 1$ közelítések alkalmazhatók) a 
 $K_{n,n+1}\frac{\ell}{2h}(\varphi_{n+1}-\varphi_n).$ 
 alakban adható meg. Ez a komponens ugyan nem pontosan merőleges a létrafokra (az $\frac{\ell}{2}(\varphi_{n+1}-\varphi_n)$ ívhez tartozó húr irányába mutat, bár az ábra felbontása ezt nem adja vissza), de az adott közelítésben elegendő pontossággal merőlegesként kezelhető, így a két kötél közötti szimmetriát is figyelembe véve az $n+1$-edik fok miatt az $n$-edikre ható erőpár forgatónyomatéka: 
 $M_{n,n+1}=K_{n,n+1}\frac{\ell^2}{2h}\left(\varphi_{n+1}-\varphi_n\right).$ 
 ($M_{n,n+1}$ relatív hibája $(\varphi_{n+1}-\varphi_n)^2$ nagyságrendű, ez ugyanakkora hiba, mint pl. az inga mozgás szokásos leírásáé.) Hasonló módon megadhatjuk az $n$-edik fokra az $n-1$-edik miatt ható forgatónyomatékot: 
 $M_{n,n-1}=K_{n-1,n}\frac{\ell^2}{2h}\left(\varphi_{n-1}-\varphi_n\right).$ 
 Mivel a létra összes tömege elhanyagolható a hágcsón függő emberéhez képest, és a kötélszakaszok csak kismértékben térnek el a függőlegestől, a kötelekben ható $K_{x,x+1}$ erő vezető rendben mindenhol $Mg/2$-nek vehető, így az $n$-edik fokra ható forgatónyomaték 
 $M_{n}=\frac{Mg}{2}\frac{\ell^2}{2h}\left(\varphi_{n+1}+\varphi_{n-1}-2\varphi_n\right).$ 
 Az egyes fokok középpontra vett tehetetlenségi nyomatéka $\frac{1}{12}m\ell^2$, tehát a mozgásegyenletük, $\beta_n$-nel jelölve a torziós mozgás szöggyorsulását, 
 $\frac{1}{12}m\ell^2\beta_n=\frac{Mg}{2}\frac{\ell^2}{2h}\left(\varphi_{n+1}+\varphi_{n-1}-2\varphi_n\right),$ 
 azaz 
 $\beta_n=\frac{3Mg}{mh}\left(\varphi_{n+1}+\varphi_{n-1}-2\varphi_n\right).$ 
 Ez egy tipikus, diszkrét láncon értelmezett hullámegyenlet, aminek a megoldásai lefelé vagy felfelé haladó hullámok 
 $\varphi_n=\phi\sin\left(\omega t\mp\frac{2\pi}{\lambda}nh+\theta\right).$ 
 A $\lambda$ hullámhossz és a hozzá tartozó $\omega$ körfrekvencia közötti összefüggést behelyettesítéssel kapjuk meg. Egy ilyen megoldásban minden fok harmonikus mozgást végez, ennek megfelelően $\beta_n=-\omega^2\varphi_n$, tehát 
$$\begin{gather*}
-\omega^2\phi\sin\left(\omega t\mp\frac{2\pi}{\lambda}nh+\theta\right)=\\
=\frac{3Mg}{mh}\left(\phi\sin\left(\omega t\mp\frac{2\pi}{\lambda}(n+1)h+\theta\right)+\phi\sin\left(\omega t\mp\frac{2\pi}{\lambda}(n-1)h+\theta\right)-2\phi\sin\left(\omega t\mp \frac{2\pi}{\lambda}nh+\theta\right)\right).
\end{gather*}$$
 Ez, kis átalakítás után a $\varphi_n$ kifejezésével egyszerűsíthető, és az 
 $\omega^2=\frac{6Mg}{mh}\left(1-\cos{\frac{2\pi}{\lambda}h}\right),$ 
 illetve 
 $\omega=\sqrt{\frac{12Mg}{mh}}\left\vert\sin{\frac{\pi}{\lambda}h}\right\vert$ 
 relációra vezet. Végül felhasználva, hogy $\omega=\tfrac{2\pi}{T}$, és ha $\lambda\gg h$, akkor 
 $\sin{\frac{\pi}{\lambda}h\simeq\frac{\pi}{\lambda}h},$ 
 a hosszú hullámhosszú torziós lengések terjedési sebességére 
 $c=\frac{\lambda}{T}=\sqrt{3\left(\frac{M}{m}\right)gh}$ 
 adódik. 

 Megjegyzések. 1. Gondolatmenetünk fontos eleme, hogy a szomszédos létrafokok egymáshoz viszonyított elfordulása kicsi. Ez nyilván teljesül, ha a $\phi$ amplitúdó kicsi, de az is elég ha 
 $\phi\frac{2\pi h}{\lambda}\ll 1,$ 
 ami akár nagy $\phi$-ket is megenged, ha $\lambda$ elég nagy a $h$-hoz viszonyítva. 
 2. Az $\omega(\lambda)$ összefüggés periodikus volta egy érdekes dologra hívja fel a figyelmünket: mindazok a különböző $\lambda$-k, amelyek ugyanakkora $\omega$-t adnak, ugyanolyan hullámhosszú (legfeljebb ellentétes irányba haladó) hullámokat írnak le. Ez könnyen belátható, figyelembe véve, hogy ha 
 $\omega(\lambda_1)=\omega(\lambda_2),$ 
 akkor 
 $\frac{h}{\lambda_1}=\frac{h}{\lambda_2}+j,\qquad\textrm{vagy}\qquad\frac{h}{\lambda_1}=-\frac{h}{\lambda_2}+j,$ 
 ahol $j$ egy egész szám. Ennek alapján minden lehetséges hullám leírható a $\lambda\geq 2h$ hullámhosszakkal. Ez egyértelműen annak köszönhető, hogy a hágcsó mozgását megadó függvény csak diszkrét pontokban van értelmezve. 
 3. A 
 $k=\frac{2\pi}{\lambda}$ 
 mennyiséget hullámszámnak nevezzük. Több dimenzióban vektornak definiálják úgy, hogy az iránya a hullám terjedésének az irányát adja meg. Ezzel analógiában egy dimenzióban is érdemes a haladás irányát megadó előjelet adni neki. Így a hullámegyenletünk általános megoldása 
 $\varphi_n=\phi\sin\left(\omega t-knh+\theta\right),\qquad\left(-\frac{\pi}{h}<k\leq\frac{\pi}{h}\right)$ 
 alakú hullámokból tevődik össze.

![solution figure](../../raw_html/komal_figures/komal-P5732-sol-fig1.gif)
