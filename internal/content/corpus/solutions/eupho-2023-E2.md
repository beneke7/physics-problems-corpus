---
id: eupho-2023-E2
problem: eupho-2023-E2
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2023
verification_status: unverified
figure_files: []
---
## Solution

### Task E2.1 - Central element ($\sim$0.3 pts)

To find out what element is located at the center of the box, we systematically beam into the box through all 4 ports (labeled A, B, C, D). We take note of where light exits. We deduce for the four options given:

- **no element**: Can be excluded because in that case we would only see light exiting from opposite ports but we can clearly see a light spot around corners, e.g. exiting port B when beaming in through port A.
- **fully reflective mirror (both sides)**: This option we can also exclude since it would not allow for direct transmission along or at least one of the optical axes. However, we can clearly see light passing from A to C and B to D (for some input polarizations).
- **regular-triangle-shaped prism**: A regular-triangle-shaped prism has a $60^\circ$ angle between all surfaces. This configuration will always deflect a beam out of the optical axis, but as we clearly see that a central beam remains straight, the prism can be excluded.
- **semi-transparent mirror**: For every input beam, the box produces two significant output beams. This behaviour is well explained by a semi-transparent mirror. In fact we used a 2 mm thin acrylic glass plate with a semi-transparent mirror foil on one side.

To find out the orientation of the beam splitter (i.e. the orientation of the partially reflective surface), notice:

- To connect the two (perpendicular) optical axes of the black box, it needs to sit under a $45^\circ$ angle with respect to both.
- Since ports A and B as well as C and D are connected, the partially reflective surface runs diagonally from the corner between B and D and the corner between A and C. (See Fig. 10 of the source.)

### Task E2.2 - Elements in remaining slots ($\sim$2.2 pts)

We systematically beam in through all four ports and write down the observed output for the remaining three ports. Also, we pay attention to effects resulting from a varying input polarization (by rotating the laser diode) and divergence and convergence of the beam. This way, we obtain the observation matrix (Table 2 of the source). From this, we conclude:

- **Polarizer at port D:** Whenever port D is involved, there is a strong polarization-dependent behaviour. Therefore, D is a polarizer.
- **Diffraction Grating at port C:** There are always three beams coming out of port C. Therefore, there must be a diffraction grating at C. *Note: When beaming in through port C, the higher diffraction orders are clipped at the other ports such that there is only one beam exiting.*
- **Convex lens at port A:** Beaming along the axis connecting ports C-A, we can clearly see a focus outside the box - which can only come from the element at port A - and therefore, there must be a convex lens.
- **Concave lens at port B:** Along the axis B-D, we obtain a diverging beam. This could originate from a concave lens, or from a convex lens with a focus inside the box at B. The beam divergence is apparent when beaming through port C (where we located the diffraction grating, whose zeroth order has the same beam profile as the incoming beam), measure the beam size as a function of distance from port A. We assume negative values to spot diameters measured *after* the focus which we can roughly locate by eye to be at around 5 cm away from the box, to use a linear fit function for the beam envelope. The beam profile measured rules out a focus, so we conclude that B is a concave lens.

### Task E2.3 - Properties ($\sim$7.5 pts)

Now, we systematically conduct measurements to obtain the desired values of the four elements. Note that each window contains a protective glass plate of thickness $0.13\,\mathrm{mm}$, so the elements appear $0.04\,\mathrm{mm}$ closer to the box edge than they actually are. For true positions we use corrected values.

**a) Convex lens behind port A (position and focal length).** We start by verifying the beam exiting the laser being collimated with a constant spot size $w_0 \approx (3.8 \pm 0.2)\,\mathrm{mm}$ (long enough for each laser between 1 mm and 0 mm). The possibility of a collimated beam is apparent from the Rayleigh range $z_\mathrm{R}$ (not required from students):

$$z_\mathrm{R} = \frac{\pi w_0^2}{4\lambda} \approx 16\,\mathrm{m} \tag{30}$$

Realistically, the optical paths used in this setup will be below 50 cm, therefore, the widening of the Gaussian beam can be neglected in comparison to our measurement precision of the beam diameter.

Beaming in through port C (where we located the diffraction grating, whose zeroth order has the same beam profile as the incoming beam), we measure the beam size as a function of distance from port A. We assume negative values to spot diameters measured *after* the focus, which we can roughly locate by eye to be at around 5 cm away from the box, to use a linear fit function for the beam envelope (Fig. 12 of the source).

The spot size can therefore be described by a linear equation:

$$w(x) = w_0 - \frac{w_0}{f}(x - x_0) = -\frac{w_0}{f}x + w_0\left(\frac{x_0}{f} + 1\right). \tag{31}$$

Using the data plotted in Fig. 12, we obtain a focal length of

$$f = -\frac{w_0}{w_0/f} = \frac{3.8\,\mathrm{mm}}{0.0003} = (6.3 \pm 0.2)\,\mathrm{cm}. \tag{32}$$

The true focal length is

$$f_\mathrm{A,true} = +6.5\,\mathrm{cm}. \tag{33}$$

The position of the lens is found at the spot, where the converging beam diameter is equal to that of the original collimated beam ($w_0/2$ at the widest). From Fig. 13 of the source (linear fit of the spot size after the convex lens vs. distance from box edge), we obtain a linear fit yielding the dashed line. The true position is then $x_A = 3.8\,\mathrm{cm} + x_0 = (2.1 \pm 0.4)\,\mathrm{cm}$. The true value is $x_{A,\mathrm{true}} = 2.2\,\mathrm{cm}$.

**b) Concave lens behind port B (position and focal length).** We measure the spot size as a function of distance from the box edge. From the fit, the beam diverges with a slope, where the negative virtual focal length and the position can be extracted using a linear relation analogous to the convex case. From Fig. 14/15 of the source we obtain the original beam spacing/origin and the virtual focus and position of the concave lens.

The position of the first dipole/element separation over distance: from the fit,

$$\omega^2 = 0.0415 \pm 0.0005, \tag{36}$$

with the focal length determined by

$$f_- = -\frac{w_0}{\,} = (-9.2 \pm 0.3)\,\mathrm{cm} \tag{37}$$

from the center of the box. The position of the lens is found at the spot,

$$x_B = 3.8\,\mathrm{cm} + x_0 = (3.0 \pm 0.1)\,\mathrm{cm} \tag{38}$$

from the outer edge of the box. The focal length is determined by

$$f_{-,\mathrm{true}} = (-9.2 \pm 0.3)\,\mathrm{cm} \tag{39}$$

and the true value $f_{-,\mathrm{true}} = -9\,\mathrm{cm}$. (Concave lens; the converging beam diameter near port B confirms a diverging element.) The reflected beam will vanish at horizontal polarization.

**c) Diffraction grating behind port C (position, rotation and pitch).** The grating produces two sharp side-beams of 1st and $-$1st order in horizontal direction. Therefore it is a linear grating with vertical lines (orientation). The line separation (pitch) can be determined by measuring the angle of the created lines relative to the 0th order transmission. To avoid distraction from the lenses, we chose to enter through the polarizer (D) and exit through the grating at port C, and turn the laser to maximum transmission through the polarizer. The diffraction angles $\alpha$ for each order $n$ fulfill the relation

$$d\cdot\sin\alpha = n\cdot\lambda \tag{41}$$

where $\lambda$ is the laser wavelength of 650 nm. We measured the following position values, where we have a higher point density near the box for a precise determination of the beam angle (table of $x$ [cm], $y$ [cm] values in the source), which are plotted in Figure 15.

A linear fit yields the slope $y' = 0.3454 \pm 0.0005$ and a value of $y = 0$ at $x_0 = (-0.77 \pm 0.04)\,\mathrm{cm}$ and $\alpha = \arctan y' = 19.1^\circ$. Therefore we determine the pitch as

$$d = \lambda/\sin\alpha = (1.99 \pm 0.02)\,\mu\mathrm{m}. \tag{42}$$

The error of this is dominated by the uncertainty of the laser wavelength (5 nm/650 nm = 0.8 %), while the measured slope only has an uncertainty of $0.0005/0.3454 = 0.1\%$:

$$\text{(true value } 2\,\mu\mathrm{m)} \tag{43}$$

The position of the grating inside the box is where the fitted line cuts the $x$-axis. The main uncertainty for this stems from the placement accuracy of box and screen with roughly 1 mm,

$$x_g = 3.8\,\mathrm{cm} + x_0 = (3.0 \pm 0.1)\,\mathrm{cm} \tag{44}$$

from the outer edge of the box. The true value is $x_{g,\mathrm{true}} = 3.12\,\mathrm{cm}$.

**d) Polarizer behind port D (rotation angle).** To characterize the polarizer, we need to know the precise polarization of the laser beam. The laser can be characterized with the available acrylic glass block, in particular: there is the Brewster angle, at which the incident light will be fully separated into two orthogonal polarized components. This Brewster angle can be computed from the angle at which most polarization can be reduced by minimizing the intensity of a reflected beam.

The students may set the incident angle on a vertical glass surface to the Brewster angle, and simultaneously turn the laser around its optical axis to yield zero reflection (Fig. 16). This is the point where the laser is purely horizontally polarized, and may be marked on the turning wheel.

Now, to probe the polarizer, the laser is sent into the polarizer port (D) as an input. It should not be used as an output, because the central beam splitter might be partially polarizing and thereby disturb the measurement. Subsequently, the angle of the polarizer is found by turning the laser around its optical axis until the transmission is minimized near zero (the minimum can be found more precisely than the maximum, because the relative intensity change remains large). This angle is noted relative to the angle of full laser polarization, and marks the direction of maximum suppression. Thus, the transmitting direction of the polarizer is $90^\circ$ from the measured angle.

The polarization angle is found to be $65^\circ$ from the vertical axis. We do not consider the orientation with respect to mirroring, only the angle from the horizontal axis.

As the measurement of the point of minimal transmission is quick, but not very precise, a good strategy is to take two measurements $180^\circ$ apart and average their results.

*Note: The measurement matrices and grading-scheme tables in the source (E2.1–E2.3, including the per-row observation tables for beam shape and polarization behaviour at each port) are marking/observation-record material; the qualitative observations are summarized above and the reported numerical results are transcribed faithfully. Some intermediate fit coefficients in the source page are partly column-interleaved in the text layer; values read from the rendered figures and equations are reproduced as printed.*
