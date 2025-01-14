# Mscene

A Python library for programming animation scenes with Manim in Google Colab to create science videos directly in the browser.

Manim is an animation engine designed to program precise animations for science videos.<br>Google Colab (Colaboratory) is a hosted Jupyter Notebook service that requires no setup and provides free access to computing resources, including GPUs and TPUs.

>The Manim Community Developers. *Manim &mdash; Mathematical Animation Framework* [Computer software].<br>[www.manim.community](https://www.manim.community)

<a href="https://colab.research.google.com/github/curiouswalk/mscene/blob/main/scenes/colab/mscene.ipynb"><img align="center" src="https://colab.research.google.com/assets/colab-badge.svg"></a>&ensp;[mscene.curiouswalk.com/colab](https://colab.research.google.com/github/curiouswalk/mscene/blob/main/scenes/colab/mscene.ipynb)

## Manim in Colab

### Program Animnations Onilne

#### Open Google Colab
[colab.research.google.com#create=true](http://colab.research.google.com#create=true)

#### Install Mscene
  ```
  %pip install mscene
  ```
#### Import Mscene
```
import mscene
```
#### View Commands
```
%mscene -h
```
#### Setup Manim
```
%mscene -l manim
```

#### Example Scene

View Manim [Gallery](https://docs.manim.community/en/stable/examples.html)

```python
%%manim -qm ExampleScene
class ExampleScene(Scene):
    def construct(self):
        banner = ManimBanner()
        self.play(banner.create())
        self.play(banner.expand())
        self.wait(1.5)
```


#### Add Plugin

View Mscene [Plugins](https://docs.manim.community/en/stable/examples.html)
```
%mscene plugin
```

#### Import Plugin
```
from mscene.fractal import *
```
#### Plugin Scene
```python
%%manim -qm PluginScene
class PluginScene(Scene):
    def construct(self):
        ks = KochSnowflake(2)
        self.add(ks)
        self.play(ks.animate.next_level())
        self.wait(1)
        self.play(ks.animate.prev_level())
        self.wait(1)
```
---
