---
id: eupho-2020-T3
problem: eupho-2020-T3
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2020
verification_status: unverified
figure_files: []
---

## Solution

### Identifying the regions on the graph

Four brightness regions are visible in the graph:

- **Brightest plateau** ($\log_{10} I \approx 4.4$, $x \approx 140$–$230$): the magnified image of a blur spot on the paper sheet, formed by the lens. The blur spot exists because the paper is at distance $d_0$ slightly greater than $f$.
- **Second-brightest level** ($\log_{10} I \approx 3.4$, $x \lesssim 120$ and $x \approx 240$–$420$): scattered light from glass surfaces of the lens. Through the lens, this shows the region of the paper next to the bright blur spot.
- **Dark minimum** ($\log_{10} I \approx 1.3$–$1.5$, $x \approx 280$–$420$): interior black paint of the lens barrel.
- **Dark level on the right** ($\log_{10} I \approx 1.95$, $x \gtrsim 420$): unobscured paper sheet illuminated by the lamp.

### Finding $d_0$

Since $L \gg f$, the illuminance at the paper from the lamp is approximately the same as near the lens. By the luminance-preservation property of an ideal lens (Explanation 2), the light intensity at the sensor pixels corresponding to the blur spot image is $I_{\rm bright} = I_{\rm sheet}/k$, where $k$ is the ratio of the blur-spot area to the lens aperture area.

From the graph:
$$\frac{I_{\rm bright}}{I_{\rm sheet}} = 10^{4.4 - 1.95} \approx 282 = \frac{1}{k},$$
so $k \approx 1/282$ and $\sqrt{k} \approx 1/16.8$.

The blur-spot diameter is $D_{\rm BS} \approx D(d_0/f - 1 - f/L) \approx D(d_0/f - 1)$ (for $f/L \ll 1$). The image of the blur spot through the lens has diameter $D_I \approx D(L - d_S)/L$, which equals the lens aperture $D$ as seen from the camera. Thus $\sqrt{k} = D_{\rm BS}/D = d_0/f - 1 - f/L$, giving two solutions. Since the paper is beyond the focal plane ($d_0 > f$):

$$\frac{d_0}{f} \approx 1 + \sqrt{k} + \frac{f}{L} \approx 1.07,$$

so $d_0 \approx 1.07f \approx 58.8\ \mathrm{mm}$ and $d_S = d_0 f/(d_0 - f) \approx 15.0f \approx 83\ \mathrm{cm}$.

### Finding $h$

**Key observation:** as seen from the camera, the angular diameter of the image of the blur spot $\theta_{\rm BS} = D_I/(L - d_S)$ equals the angular diameter of the lens aperture $\theta_L = D/L$. This means the crescent-shaped second-brightest region has an angular half-width equal to the angular distance between the centre of the lens and the centre of the blur-spot image.

The centre of the blur-spot image is displaced by $h' = h\,d_S/L$ from the optical axis (by similar triangles). The angular distance between the centres is $\theta = h'/(L - d_S)$. Measuring from the graph: the crescent width is $d_{\rm cr} \approx 90$ pixels (left edge of the lens aperture at $x \approx 30$, midpoint of the blurry edge at $x \approx 120$), and the full aperture diameter is $D' \approx 210$ pixels (right aperture edge at $x \approx 240$). Then $\theta/\theta_L = d_{\rm cr}/D'$, and:

$$h = \frac{d_{\rm cr}}{D'} \cdot \frac{D(L - d_S)}{d_S} \approx \frac{90}{210} \cdot \frac{39\ \mathrm{mm} \cdot (4800 - 830)\ \mathrm{mm}}{830\ \mathrm{mm}} \approx \boxed{80\ \mathrm{mm}}.$$

**Explanation 1 (luminance $\to$ sensor illuminance independence of distance):** For a small source of luminance $\mathcal{L}$ at distance $\ell$, the total flux received by the sensor scales as $\ell^{-2}$, but is focused onto an image area also $\propto \ell^{-2}$, so the pixel illuminance is independent of $\ell$.

**Explanation 2 (luminance conservation through ideal lens):** A cone of solid angle $\omega$ from a small area $S$ at the blur spot carries flux $\Phi$. After the lens, it forms a cone of solid angle $\omega'$ onto image area $S' = S(d_S/d_0)^2$. By similar triangles, $\omega/\omega' = (d_S/d_0)^2$. Thus luminance $\mathcal{L}_I = \Phi/(S'\omega') = \Phi/(S\omega) = \mathcal{L}_{\rm BS}$: the image luminance equals the blur-spot luminance.
