---
id: solution-document-kevin-zhou-exptsol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/ExptSol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-expt-ex002, kevin-zhou-expt-p003, kevin-zhou-expt-p004, kevin-zhou-expt-p005, kevin-zhou-expt-p006, kevin-zhou-expt-p009]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/ExptSol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Preparing for the Experimental Exam
This problem set gives tips for preparing for the experimental exam at international-level Olympiads.
For dozens of ideas for at-home experiments, see Waves by Crawford.
0 Introduction
Students often feel lost when facing the experimental exam. While there are abundant free resources
for learning theory, it seems impossible to prepare for the experiment without access to lots of limited
or expensive equipment. However, while doing real experiments certainly is the best way to prepare,
many of the relevant skills can be trained without any equipment whatsoever.
Even for the parts that require equipment, students tend to vastly overestimate the time and
expense required. For reference, the United States physics team receives no monetary support from
the government, and so has a vastly lower budget than most other teams imagine. In a typical year
like 2024, the American traveling team only receives 2 days of dedicated experimental training. And
in 2021, the American team had no in-person experimental training at all, due to the pandemic;
students came up with their own experiments at home with simple equipment like stopwatches,
laser pointers, and kitchen tools. But in both years, the team won 5 gold medals.
The key skills required for the experimental exam come in several groups:
1. Fine motor skills.
2. Understanding the equipment and the underlying theory.
3. Designing an experimental procedure which can yield good results.
4. Analyzing the data and extracting good results, possibly with uncertainty analysis.
We’ll consider each of these in turn, and present some at-home and simulation labs to practice on.
1 Fine Motor Skills
This category includes any sort of controlled, precise motion. These skills are often required to
assemble the experiment, carefully tune the equipment, and accurately extract measurements.
Unfortunately, it seems these skills can’t be substantially improved in a short time, even with
the best equipment to practice on, and they can’t be improved at all with theoretical exercises.
However, in some years the equipment is almost entirely “digital” and requires no motor skills
beyond pushing buttons. As for other years, you can usually still achieve a decent result even with
poor motor skills, and a great result with only good motor skills.
In my experience, students with good motor skills have spent years developing them, in contexts
unrelated to physics. For example, they might play a musical instrument, or videogames which
require precise timing and quick reflexes. They often have practiced precisely making small objects,
such as by writing compactly and neatly, or assembling puzzles or circuits. Motor skills generalize
well between tasks, so if any of this describes you, you don’t need to worry. If you don’t have these
skills at all, you still don’t need to worry, as there’s little you can do about it!
[1] Problem 1. To gauge your timing skills, get a stopwatch and try to stop it at 5.00 seconds a few
times, as accurately as possible. Reliably staying within 100ms is decent, and 50ms is great.
1Kevin Zhou Physics Olympiad Handouts
Idea 1
For manual instruments like rulers, the expected accuracy of your measurement is half of the
minimum division of the scale. A typical ruler has centimeter marks with millimeter divisions,
so you’re expected in Olympiads to measure lengths with an error of at most 0.5mm. But
you aren’t expected to do better than this, because a more precise measurement would just
get thrown off by imperfections in the instrument. In general, you should take data as fast
as possible while maintaining this benchmark accuracy.
[1] Problem 2. Use a ruler to measure the dimensions of a piece of letter or A4 paper, reasonably
quickly and accurately. Then look up the true answer and compare. If desired, you can repeat this
exercise with other objects whose exact dimensions can be looked up, such as your phone.
2 Understanding the Setup
Before you begin an experiment, you have to understand the relevant theory. The selection of topics
is strongly biased because a good Olympiad experiment has to be reasonably precise and reproducible,
nontrivial to solve, compact, and relatively cheap. As such, almost all IPhO experiments fall into
one of the following categories:
1. Optics: reflection, refraction, lenses, interference and diffraction, and polarization. The theory
covered in W2 and W3 is sufficient.
2. Circuits. Usually nonlinear circuit elements, covered in E6, are involved.
3. Mechanical oscillations. The theory covered in M4 is sufficient. Also, these systems often
use magnets to exert nontrivial forces, so a bit of E4 and E8 is helpful. Statics and fluids
sometimes come up, but less often because it’s harder to make precise experiments with them.
Most of the few remaining experiments are about:
4. Solid state measurements, such as thermal conductivity.
5. Thermal radiation: the spectrum, angular distribution, and temperature dependence of light
produced by hot objects, and its absorption by other objects.
Both of these topics are covered in T2. Most of the time, the experimental equipment doesn’t
require any particular knowledge to use, but for circuits and optics, some experience is helpful.
[3] Problem 3. A multimeter is the most complicated piece of equipment that ever shows up on
Olympiad labs. Get a cheap multimeter; there are many suitable options for less than 20 dollars online.
By reading the manual and experimenting, teach yourself what every setting on the multimeter
does, and how to read the display. Test your knowledge by performing a variety of measurements
on cheap circuit components, such as batteries, resistors, capacitors, and diodes. Be careful not to
burn out the ammeter.
[3] Problem 4. Using a stopwatch, mass, and light string, carry out the classic experiment to measure
g with a pendulum, mentioned in the preliminary problem set. (Some common sources of error are
discussed in M4, and some additional advice is given in the following section.) The bare minimum
is 10% precision. If you do it well, you should be able to identify effects due to the finite size of the
mass, and the correction to the period due to finite amplitude, discussed in P1.
2Kevin Zhou Physics Olympiad Handouts
[5] Problem 5. Get a laser pointer, a double slit, a diffraction grating, some polarizers, and a small
block of clear plastic or glass. With this simple equipment, you can do a basic version of almost
every kind of measurement that appears in optics labs. (You’ll need a ruler and protractor, and
you’ll have to be creative about mounting the components, e.g. using household objects and tape.)
Here’s a series of increasingly difficult exercises you can try.
(a) Using the double slit, confirm that the laser light has its advertised wavelength.
(b) Measure the slit spacing of the diffraction grating.
(c) Measure the width of one of your hairs.
(d) Using a polarizer with known axis of polarization, check if your laser pointer produces polarized
light. If it does, find its axis of polarization. If it doesn’t, use the laser and polarizer together
to measure the axis of polarization of a different polarizer.
(e) Measure the index of refraction n of the block.
(f) ⋆ Using the block, find the axis of polarization of an unknown polarizer. (Hint: this requires
knowing n. See section 44.3 of Halliday and Resnick.)
(g) ⋆ Get a block of calcite, which is by far the cheapest strongly birefringent material. (You need
“optical” calcite, not the big, cloudy colored samples people like to use for “crystal healing”.
It should only cost a few dollars.) Birefringent materials have a higher and a lower index of
refraction, depending on the polarization of the light. Measure both of them.
See the next section for some tips on carrying these measurements out accurately.
3 Designing the Experiment
The next step is to actually perform the experiment well. This presents two layers of subtlety. First,
even when it’s obvious what you have to do, there are a lot of small factors that impact how good
your result will be. Second, sometimes the experiment presents theoretical subtleties, and you’ll
need a clever measurement strategy to get an answer at all. Let’s consider these two issues in turn.
Example 1
How can we accurately measure the period of a pendulum with a stopwatch?
Solution
We’ve already discussed this in P2 and M4, but now let’s revisit it with a practical focus.
• Of course, you want to measure N consecutive periods and divide the total by N,
because that reduces the error by a factor of N. To maximize N, you should wait until
the pendulum’s motion starts to die down, but stop before it becomes hard to see.
• To make sure N can be sufficiently high, you should release the pendulum with a
significant amplitude, but not so high that corrections to the small angle approximation
will matter, at the accuracy to which you’re working.
3Kevin Zhou Physics Olympiad Handouts
• To accurately time periods, you should start your stopwatch only once the pendulum is
stably swinging, not at the moment you release it.
• You should start and stop the stopwatch at the moment the pendulum passes by a fixed
point near the bottom, because it moves the fastest at the bottom, so a fixed position
accuracy yields a better timing accuracy. This is significantly more accurate than trying
to see when the pendulum is momentarily at rest.
Example 2
Using a laser pointer and a ruler, how can we accurately measure the spacing of a diffraction
grating or a double slit? How about the width of a single slit?
Solution
Again, the theory is straightforward, but the way the measurement is done matters.
• A diffraction grating and double slit produce bright, separated maxima, so you should
measure the locations of the maxima. But a single slit produces broad bands of light
separated by minima. It’s difficult to tell exactly which point in a band has the maximum
intensity, so you should instead measure the locations of the minima.
• The screen and the optical element have to be parallel, to avoid distorting the pattern. (At
the level of Olympiad experiments, this usually won’t be too hard, but for the extremely
precise optics experiments done in research labs, alignment can take hours or even days.)
• The laser pointer should be relatively close to the optical element. Placing it further
away doesn’t help, and actually slightly hurts because the laser’s beam will spread out
more, making the final measurement less precise.
• The screen should be relatively far from the optical element, so that the things you’re
measuring get further apart. The limiting factor is either the length of your desk/room,
or when the laser beam gets too dim to easily see.
• Of course, the room’s light should be off, and your eyes adjusted to dim light.
• If the spacing is such that you can see many maxima, you should precisely measure the
distance between two maxima at the edges of your screen, and divide by the number of
intervals in between. This reduces the error by a factor of N, like timing multiple periods
of a pendulum. (Measuring all of the maxima in between and plotting a line takes a lot
longer, and won’t make the result substantially more accurate.)
[2] Problem 6. You are given a small light bulb, a filter which lets only red light pass through, and
a light meter which measures the total light intensity on it. How can you accurately measure the
intensity of the red light given off by the bulb in a given direction, at a given distance?
Solution. Obviously, you have to fix the locations of the bulb and light meter, put the filter between
them, and point the light meter directly at the bulb. But some other things impact the accuracy of
the result.
4Kevin Zhou Physics Olympiad Handouts
• Of course, you should first turn off all of the other lights that you can, and keep them off.
• You should ensure the result isn’t affected by reflections. The best way to do this would be to
put the bulb and light meter underneath a black box. If one isn’t available, the next best thing
is to remove highly reflective objects, such as pieces of paper lying on your desk.
• You should also measure what the meter reads when the light bulb is turned off. Your answer
is the difference of what you measure with the light bulb on, and this background value.
• For all measurements, you should place the filter next to the light meter, not next to the bulb. If
the filter is next to the bulb, it might partially scatter the bulb’s light, throwing off the angular
distribution. Also, if the filter is covering the light meter, then it will also filter out non-red
background light. This significantly lowers the background, allowing a more precise result.
[2] Problem 7.  ^ 1 0AuPhO 2012, problem 14. Another question about practical measurements.
Now for some brief advice for more subtle experiments.
Idea 2
In trickier experiments, it might not be obvious how to perform a measurement. Sometimes,
it’s because the experiment contains strong noise sources, so that an accurate result can only
be extracted by a clever choice of procedure. Other times, it’s because the experimental
apparatus itself might behave in an unpredictable way; for instance, it might contain a
nonlinear circuit element whose general behavior you won’t be told. (As an extreme case,
some experiments are “black boxes” where you have to figure out what’s inside.) Finally,
in some cases there are several adjustable input variables which are related to the output
variables in a complicated way, so that you won’t be able to solve for the parameter if you
just take arbitrary data points.
Doing these experiments requires two stages. The first is exploration. Before settling on
a strategy, you should figure out everything the experiment can do. Figure out all the
ways that the pieces of the experimental apparatus can be combined. For every adjustable
parameter, quickly sweep over its full range, and observe what happens to the outputs. (For
example, the output might just change linearly, or it might not change at all, or peak, or
qualitatively change at some point.) Figure out why each part of the experiment kit is included.
Second, you have to settle on a strategy. Usually, this involves setting up the experiment in a
particular configuration, varying one parameter over a well-chosen range, and fixing all other
parameters to appropriate values (e.g. minimum, maximum, or intermediate ones, depending
on what works best). It’s hard to say more about this process without getting into specific
examples, but doing simulation labs is a fantastic way to practice it, since it’s essentially
those labs’ only source of difficulty. A variety of good simulation labs are listed at the end of
this problem set.
5Kevin Zhou Physics Olympiad Handouts
4 Analyzing Data
Idea 3
The zeroth step of data analysis is to neatly organize your work.
• Always make an organized data table, with a row for each data point. For each column,
specify the physical quantity calculated, and give its units. If your data points have
uncertainties, indicate them on the table.
• Draw neat graphs using a ruler and graph paper. Always label the axes with the corre-
sponding quantities, and their units.
• Set the axis scale so that the graphed data points cover almost the entire page. To
achieve this, it can help to start the x and/or y axes at a nonzero value, though you
should let the x-axis include x = 0 if you need to find a y-intercept.
• It’s usually not allowed to use a calculator to find best-fit slopes and intercepts. Instead,
you should eyeball the best-fit line, draw it with a ruler, compute the slope using two
distant points on it, and show this computation explicitly.
• Sometimes, you’ll need to extract both the slope and intercept. Anothercommon situation
is that the slope matters, while the intercept absorbs some background quantity you
don’t care about, such as a constant shift. In other situations, you will be guaranteed
that the intercept vanishes to great precision. In those cases, you can be slightly more
efficient, but slightly less robust to systematics, by forcing the best fit line to pass through
the origin. (Unfortunately, opinions differ on when you should do this; I’ve seen people
penalized for either doing it or not doing it.)
• Often, you’ll have to transform your data points before plotting, e.g. by raising them to a
power, or applying a trigonometric function. You should learn how to do this as quickly
and efficiently as possible with your calculator. It also helps to avoid keeping too many
insignificant figures; your data points should never have more than 2 uncertain digits.
These are all small things, but they really do help get reliable results, and many rubrics
include explicit penalties if they aren’t done.
Idea 4
How much data is required for full credit on a given task? It’s tempting to give a rule of
thumb, like “always take X data points for a line”, but the real answer is that it depends on
the context. Generally, rubrics expect the student to spend the entire 5 hours making their
results as accurate as possible. This means that you should stop taking data once the result
won’t get much better, or when it’s not reasonable in the time given.
To gauge how much time is reasonable, note that a 5 hour experimental exam contains 20
points, so 1 point should take 15 minutes. Usually, you’ll spend a bit less than half your time
collecting data. (But in some experiments, you’ll have to collect data “passively”, waiting
6Kevin Zhou Physics Olympiad Handouts
several minutes for each data point. In these cases, you should collect data for most of the
time, doing your thinking and data analysis while waiting.)
To plot a completely generic line, it’s reasonable to take 5 to 8 data points. But there are
plenty of exceptions, depending on the context.
• Sometimes, it takes an extremely long time to get each data point, or the equipment
might only support a limited number of types of measurement. In these cases, fewer than
5 data points might be acceptable.
• Sometimes, the data has a lot of noise, and/or is very fast to collect. (For example, you
might be trying to measure a very small displacement or voltage, or the lab might be a
simulation that instantly gives results.) In this case, you should take more measurements,
to reduce the uncertainty. This can be done by repeating the same measurement several
times and averaging the results, which helps save time making adjustments.
• Sometimes, the trend isn’t a single line, but has features like peaks or transitions between
different regimes. In these cases, you should take enough data to cleanly identify each
feature, e.g. at least a few around each peak or transition region. In fact, this is the
fundamental reason that an ordinary linear relation usually needs 5 to 8 data points:
that’s how you show it’s linear in the first place.
Idea 5
If you’re plotting a line to extract a slope and intercept, there are a few important rules of
thumb for collecting the data.
• Ensure your data encompasses the widest possible valid range of parameters. The wider
the range, the longer your “lever” is for getting an accurate result.
• If you’re plotting a transformed quantity (such as T2, where you measure T), then you
should arrange your measurements so that the plotted data points are relatively evenly
spaced. Otherwise, they may pile up in one end of the graph, making them less useful.
• If the measurements in the experiment are tricky to make, then it’s quite likely that
you’ll make a few mistakes, leading to data points that are far, far off the best fit line.
So, when you see such an outlier, you should measure it again to see if it’s a real feature,
or if you simply made a mistake.
It should be noted that not all data analysis requires drawing lines. Sometimes it suffices to
take the same data point several times and average the results. In addition, sometimes you
may have to sketch more general curves through data points, such as resonance curves, and
eyeball minima, maxima, or transition points.
7Kevin Zhou Physics Olympiad Handouts
Remark
If you’re unusually scrupulous, you might object to the point about outliers above:
isn’t throwing out data a kind of scientific fraud? Well, in social science it’s a huge
problem, because it’s one of the methods used for “p-hacking”, endlessly tweaking
the data analysis to argue that a nonexistent effect is “significant”. That’s why there’s
a movement in social science to preregister data analyses, fixing all the procedures in advance.
By contrast, physics is inherently reproducible. In an Olympiad experiment, a measure-
ment will give the same result (within uncertainty) every time you perform it correctly.
And the relevant physical laws are quantitatively true, making reliable and concrete
predictions. As a result, there’s just no way you can fake a result by retaking and replac-
ing mistaken data points. Doing this will get you closer to the truth, rather than further away.
Now, if you’re unusually unscrupulous, you might be wondering if you can just make up a
bunch of data points. Students try this occasionally, but it’s an awful idea for many reasons.
First, this actually is scientific fraud, because it can be used to justify false results as well as
true ones. Second, it’s against the rules, often easily detectable, and grounds for immediate
disqualification. Third, it doesn’t actually help you get good results. As mentioned above,
rubrics generally demand you take the number of data points that gets you the most accurate
result in the time available. Real data points make your answer more accurate, while fake
data points don’t. So if the rubric wants at least 7, and you take 2 and fake 10 more, then
the most likely result is that your final answer will be outside the window that gets credit.
[2] Problem 8.  Y 1 0AuPhO 2016, problem 14. A simple question about plotting data. You’ll also
need the accompanying answer sheets.
Idea 6
Generally, students do too much formal error analysis, and not enough informal error analysis.
Formal error analysis refers to applying the formulas in P2 for error propagation. If you’re
spending a lot of time on it, then you’re probably doing something wrong, because:
• About half of IPhO experiments don’t ask for any error analysis at all!
• Even when you have to do error analysis, one source of error will often dominate, so that
you can neglect the rest. If you’re unlucky and two are comparable in importance, you
should add them in quadrature, but adding them “directly” is also acceptable. I’ve never
seen a case where three sources of error are simultaneously significant.
• Error bars are rarely expected when graphing lines. To perform error analysis for best
fit lines, you should just plot the points directly, then draw the steepest and shallowest
allowed lines by eyeballing the data points. (For example, the steepest line should pass
above most of the points on the right, and below most of the points on the left.) The
resulting range of slopes and intercepts gives the uncertainty on those parameters.
• Most errors can be assigned by rules of thumb. As discussed above, for a ruler you should
take ∆x = 0.5mm. If a voltmeter stably shows 16.2V, you should take ∆V = 0.05V. If
a voltmeter is fluctuating between 0.73V and 0.77V, you should take ∆V = 0.02V.
8Kevin Zhou Physics Olympiad Handouts
The reason the requirements are so loose is that there’s not a widespread agreement on
what an error bar even means, at the high school level. To a statistician, it should mean
a standard deviation. But at the introductory level, it often is construed to mean “the
range which almost certainly encompasses the true value”, which is more like two standard
deviations, and motivates “direct” addition of uncertainty. Because of this mismatch, error
analysis at Olympiads is always ambiguous by roughly a factor of 2, and the exact result
you arrive at doesn’t matter too much, as long as it’s reasonable.
What is important is that you figure out how to get accurate experimental results, and
that requires constantly performing informal error analysis, whether the question asked for
it or not. If your experimental method depends on extracting a parameter by finding a
small difference between two large measurements, your result probably isn’t going to be very
accurate. If you think you need to do extremely precise measurements, of lengths smaller
than 0.5mm or of voltages on the mV scale, or it’s hard to see the physical effect because of
an enormous spread in your data points, then there’s probably a better way.
5 Simulation Labs
[5] Problem 9.  @ 1 0USA Experiment Team Selection Test 2022. This was designed to be a warmup
for the other simulation labs, and should be done first. It’s very clean and simple, illustrates many
of the principles discussed above, and comes with detailed solutions worth reading.
[5] Problem 10.  @ 1 0EuPhO 2020. (If you’re using a Mac, you’ll have to run “chmod +x” in the
terminal to get these files to work.)
[5] Problem 11.  @ 1 0EuPhO 2021.
[5] Problem 12.  @ 1 0IPhO 2022.
If you want more practice, there are a few more simulation labs from the COVID era. If you want
to try any of them, I recommend APhO 2022. As for the others, IPhO 2020 was designed to be a
physical lab, and switched over to a simulation lab at the last minute. APhO 2021 is also awkwardly
trying to mimic a physical lab, and it only works on Windows.
9
