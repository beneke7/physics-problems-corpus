---
id: eupho-2021-E2
source: eupho
native_id: "EuPhO 2021 Experimental Problem 2"
name: "EuPhO 2021 – Experimental E2: Hot cylinder"
origin: European-Physics-Olympiad-2021
author: European Physics Olympiad
year: 2021
language: en
translated: false
url: https://phoxiv.org/olympiads/eupho/2021
figure_files: [eupho-2021-E2-1.png]
has_figure: true
provenance_note: "Legacy EuPhO import; retained without re-OCR in this pass."
topic: [thermodynamics, measurement]
subtopic: [heat-conduction, convection, blackbody-radiation, specific-heat, thermal-diffusion]
math_tools: [calculus, differential-equations, dimensional-analysis]
format: open-ended
difficulty_norm: 5
core_ideas: []
techniques: [graphical-reduction, conservation-laws]
has_solution: true
verification_status: pending
---

## Introduction

A uniform metal rod of length $L = 30\text{ cm}$ and radius $r = 1\text{ cm}$ is made of an unknown metal and is kept at room temperature $T_0 = 26.9\text{ °C} = 300\text{ K}$. The metal rod is weighed to be $m = 460\text{ g}$. Your task is to determine the thermal properties of the unknown metal. The metal rod can be heated at one of its ends, and temperature measurements can be performed on customizable locations along the rod. The heater is located between $x = 0$ and $x = L_h = 3\text{ cm}$ (see figure). The heater can be programmed by specifying a fixed power (in watts) and the duration (in seconds) for which the heater is turned on. Temperature measurements are made by specifying up to five locations for the sensors along the rod, alongside with the frequency, starting time and the ending time of the measurements. The simulation will show the temperature readings in accelerated "real time" (running around 10 times faster than in the real world).

![figure](../../sources/eupho/figures/eupho-2021-E2-1.png)

You may assume that all of the heating power goes into the rod, and that the rod loses heat to its surroundings via heat transfer with air and black body radiation. Heat transfer with air is linear in temperature of the rod, and can be described by a coefficient $\alpha$ such that the heat transfer per unit area per unit time is $\alpha(T - T_0)$. The air is well-ventilated such that $\alpha$ can be assumed to be constant throughout the surface of the rod and independent of the temperature of the surface. Heat loss via black body radiation can be described using the Stefan–Boltzmann law modified with emissivity $\beta$ such that the heat loss to radiation per unit area per unit time is $\beta\sigma(T^4 - T_0^4)$ where $\sigma = 5.67 \times 10^{-8}\text{ W/(m}^2\text{K}^4\text{)}$. Similar to $\alpha$, the emissivity can be assumed to be constant throughout the rod, and independent of temperature. The rod is further characterised by the thermal conductivity $k$ (such that the heat flux density along $x$ is $-k\,dT/dx$) and the specific heat capacity $c$.

## Task

The task is to determine the specific heat of the unknown metal, $c$ (units $\text{J/(K kg)}$), the thermal conductivity $k$ (units $\text{W/(m K)}$), and the heat loss coefficients $\alpha$ (units $\text{W/(m}^2\text{K)}$) and $\beta$ (dimensionless). You should aim to find the values within 10% of the true value. This is because there are various sources of errors, such as Gaussian fluctuations in both defining the locations of the sensors, and the taking of temperature measurements. The sizes of the errors can be found by observing the fluctuations in the output.

As with all experiments, you must provide clearly labelled tables of data, clearly labelled graphs, and sufficient formulae derivations to make it clear what you have measured and how you are deriving your results.

---

## Program interface

Running the simulation program, named `rod`, allows performing multiple experiments on the rod. The program will ask a sequence of prompts regarding the setup of the experiment. For each prompt, the corresponding value(s) should be entered, followed by pressing **return**. The prompts are as follows:

1. The heating power of the heater:
   `Enter P (W), between 0 and 300:`
2. The duration after the start of the experiment for which the heater is turned on (after this time, the heater will be turned off):
   `Enter heating duration (s), between 0 and 3600s:`
3. The starting and finishing times (after the start of the experiment) for the temperature measurements made on the rod:
   `Enter the starting and finishing time for the measurements (s), separated by a space. Must be between 0 and 3600s:`
4. The time interval between two consecutive measurements made with the temperature sensors:
   `Enter dt (s), between 5 and 3600s and a multiple of 5s:`
5. The locations of the temperature sensors along the rod (specified with respect to the end with the heater):
   `Enter up to 5 locations for the sensors (in cm), between L=0 and L=30cm, separated by spaces:`
   Note: not entering any numbers means not taking any measurements.
6. The output file name for the temperature readings.
   Note that all saved readings will also be displayed on the screen:
   `Enter the output file name:`
   You are advised to only use Latin letters and numbers for the name. Other characters may not be allowed in the filename, and in case of an invalid filename, the readings will not be saved. The readings will be saved in a `.txt` file with the given name in the same folder as the program.

If you enter an invalid input, a clarifying error message will be given and another opportunity for entering the input will follow.

The program will then prompt you to press **return** to start the experiment, or type `restart` and press **return** to re-enter all the experimental parameters. After continuing, the program will display a summary of the experimental setup, and then start printing out the time elapsed since the heater was turned on ($t$ (s)), and all the sensor readings in the same order they were entered in the prompt ($T_i$ (°C), where $i$ corresponds to the $i$-th sensor).

After the simulation ends, a new experiment can be started by typing `restart` and pressing **return**.

*European Physics Olympiad 2021, Experimental Problem 2. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from Unicode to LaTeX.*
