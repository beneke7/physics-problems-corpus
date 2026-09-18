---
id: komal-P5613
source: komal
language: hu
translated: false
problem: komal-P5613
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Azt a közelítést alkalmazzuk, hogy a korong alsó és felső lapján egyenletes töltéseloszlás jön létre, a korong palástja viszont semleges marad. A korong felső lapja pozitív, alsó lapja pedig negatív töltésű lesz, vagyis a felső lapról elektronok vándorolnak az alsó lapra. A szétvált töltések nagysága legyen $\Delta q$, a korong magassága legyen $h$, alap-, illetve fedőlapjának sugara pedig $R=10h$. A korongban kialakuló indukált térerősséget a Gauss-tételből határozhatjuk meg:
 $E=4\pi k\frac{\Delta q}{\pi R^2}=\frac{1}{\varepsilon_0}\frac{\Delta q}{\pi R^2}.$
 Az ebből a térerősségből származó elektromos erő tart egyensúlyt a mágneses Lorentz-erővel:
 $qE=qvB\qquad\rightarrow\qquad\frac{1}{\varepsilon_0}\frac{\Delta q}{\pi R^2}=vB\qquad\rightarrow\qquad\Delta q=\varepsilon_0\pi R^2vB.$
 Ezután már csak a rézkorong méretét kell meghatározni. Egy mól réz tömege $M=63{,}5\,\mathrm{g}$, a réz sűrűsége $\varrho=8{,}96\,\mathrm{\tfrac{g}{cm^3}}$, tehát a térfogata: $V=\tfrac{M}{\varrho}=7{,}09\,\mathrm{cm^3}$. Másrészt a korong geometriai adataiból a térfogata $V=\pi R^2h=\tfrac{\pi R^3}{10}$, a kettőt összevetve $R=2{,}83\,\mathrm{cm}$. Behelyettesítés után megkapjuk a szétvált töltés nagyságát: $\Delta q=2{,}22\cdot 10^{-14}\,\mathrm{C}$, amit az elemi töltés nagyságával kell elosztanunk, hogy választ kapjunk a kérdéses elektronszámra:
 $N=\frac{\Delta q}{e}=138\,600.$

 Megjegyzés. Mivel a feladatban a sebesség is, a mágneses indukció is SI mértékrendszerben egységnyi, így az indukált térerősség is egységnyi: $E=vB=1\,\mathrm{\tfrac{V}{m}}$. Ez a térerősség a korong összes belső pontjában egzaktul ennyi, más szóval a nagyjából száznegyvenezer elektron úgy oszlik el a felületen, hogy a korong belsejében minden pontban ugyanolyan legyen $E$ nagysága és iránya. A széleffektusok miatt valamennyi töltés jut a korong palástjára is, de ennek mennyisége kicsiny a korong lapossága miatt.
