# Roulette

A plugin for drawing roulette curves like cycloids, epicycloids, and hypocycloids by rolling a circle with markers plotting the curves. This allows for the simulation of a circle rolling along a straight line or another circle with markers tracing cycloidal curves, offering dynamic visuals to explore the geometry of roulette curves.

> [!NOTE]  
> **This guide is specific to Google Colab.**<br>If Manim is already installed on your computer, run `pip install mscene` and `mscene-plugins` from the terminal to add the plugins.<br>Then, import them with `from mscene.plugins import *` in your script.

<a href="https://colab.research.google.com/github/curiouswalk/mscene/blob/main/scenes/colab/mscene.ipynb"><img align="center" src="https://colab.research.google.com/assets/colab-badge.svg"></a>&ensp;[mscene.curiouswalk.com/colab](https://colab.research.google.com/github/curiouswalk/mscene/blob/main/scenes/colab/mscene.ipynb)

## Setup

Open Google [Colab](http://colab.research.google.com#create=true) and run these cells to begin.
```python
%pip install mscene
```
```python
import mscene
%mscene -l manim
```
```python
%mscene plugins
from mscene.roullete import *
```

## Walkthrough

Walkthrough examples to illustrate the functions (methods) of `Wheel` class defined in this plugin.

### Markers

![markers_image](https://github.com/user-attachments/assets/2035eb46-dfca-4c2e-aede-4fefddc7378c)

```python
%%manim -qm MarkersImage

class MarkersImage(Scene):
    def construct(self):

        distance = 1  # distance set to '1' x radius of RollingCircle

        angle = PI / 2  # angle set to 'PI/2' around RollingCircle

        color = RED  # color of marker

        markers_one = [(distance, angle, color)]

        rc_one = RollingCircle(markers=markers_one)

        markers_two = [(3 / 2, PI / 2, RED), (3 / 2, PI * 3 / 2, YELLOW)]

        rc_two = RollingCircle(markers=markers_two)

        markers_three = [
            (2 / 3, PI / 2, RED),
            (2 / 3, PI * 3 / 2, YELLOW, WHITE),  # white line segment
            (2 / 3, 0, ORANGE, None),  # no line segment
        ]

        rc_three = RollingCircle(markers=markers_three)

        rolling_circles = VGroup(rc_one, rc_two, rc_three).arrange(RIGHT, buff=2)

        self.add(rolling_circles)

```

https://github.com/user-attachments/assets/244d1694-cc88-4b61-b23c-1f4f44cba772

```python
%%manim -qm MarkersScene

class MarkersScene(Scene):
    def construct(self):

        rc = RollingCircle(radius=1.5)

        markers = [(1.5, PI / 2, RED), (0.5, -PI / 2, GREEN)]

        self.add(rc)
        self.wait(0.5)

        # draws markers
        self.play(rc.draw_markers(markers))
        self.wait(1.5)

        # undraws the last marker (green)
        self.play(rc.undraw_markers([-1]))
        self.wait(1.5)

        markers_one = [(1, PI / 2, PURPLE), (0.5, PI / 2, GREEN)]

        # draws markers_one
        self.play(rc.draw_markers(markers_one))
        self.wait(1.5)

        colors = (RED, PURPLE, GREEN)

        markers_two = [(2 / 3, PI * (1 / 2 + i * 2 / 3), colors[i]) for i in range(3)]

        # transforms rc.markers to markers_two
        self.play(rc.transform_markers(markers_two))
        self.wait(1.5)

        # undraws all markers
        self.play(rc.undraw_markers())
        self.wait(1)

```
### Circle Roll

https://github.com/user-attachments/assets/2b6379f0-1319-4e0d-a2b5-469f1ba1c6c5

```python
%%manim -qm CircleRollScene

class CircleRollScene(Scene):
    def construct(self):

        circle_one = Circle(radius=1).rotate(PI / 2)

        circle_two = Circle(radius=3).rotate(PI / 2)

        line_end = circle_two.get_bottom()
        line_start = line_end + 5 * LEFT

        line = Line(line_start, line_end)

        rc = RollingCircle()

        self.add(rc)
        self.wait(0.5)
        
        self.play(Create(line), rc.animate.move(line_start, UP))
        self.bring_to_front(rc)
        self.wait()

        # rolls along the line
        self.play(rc.roll(5 * RIGHT))
        self.wait()

        self.play(ReplacementTransform(line, circle_one))
        self.wait()

        # rolls along the outer edge of circle_one
        self.play(rc.roll(PI, about=circle_one, run_time=2.5))
        self.wait()

        self.play(ReplacementTransform(circle_one, circle_two))
        self.wait()

        # rolls along the inner edge of circle_two
        self.play(rc.roll(PI, about=circle_two, run_time=3))
        self.wait()

        self.play(Uncreate(circle_two), rc.animate.move(ORIGIN))
        self.wait(0.5)

```
### Path Trace

https://github.com/user-attachments/assets/68f57ffe-f84e-45bc-aadb-9e25bb54faf6

```python
%%manim -qm PathTraceScene

class PathTraceScene(Scene):
    def construct(self):

        markers = [(2 / 3, PI / 2, RED), (2 / 3, -PI / 2, GREEN)]

        radius = 5 / 6
        length = TAU * radius

        rc = RollingCircle(radius=radius, markers=markers)

        self.add(rc)

        # traced path of red marker
        path_red = rc.trace_paths([0])
        self.add(path_red)
        self.wait(0.5)

        self.play(rc.roll(length * LEFT))
        self.wait()

        self.play(FadeOut(path_red))
        self.wait()

        # traced paths of both markers
        paths = rc.trace_paths(dissipating_time=4 / 3)
        self.add(paths)

        self.play(rc.roll(2 * length * RIGHT, run_time=4))
        self.wait(2)

        paths.clear_updaters()
        self.remove(paths)

        # traced path of green marker
        path_green = rc.trace_paths([1])
        self.add(path_green)

        self.play(rc.roll(length * LEFT))
        self.wait()

        self.play(FadeOut(path_green))
        self.wait(0.5)

````





