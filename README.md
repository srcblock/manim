![Mscene](https://janfeb.curiouswalk.com/assets/github_banner.png)

# Mscene

A Python library for programming animation scenes with Manim in Google Colab to create science videos directly in the browser.<br>&#10024; [mscene.curiouswalk.com](mscene.curiouswalk.com)

Manim is an animation engine designed to program precise animations for science videos.<br>Google Colab (Colaboratory) is a hosted Jupyter Notebook service that requires no setup and provides free access to computing resources, including GPUs and TPUs.

> [!NOTE] 
>The Manim Community Developers. *Manim &mdash; Mathematical Animation Framework* [Computer software].<br>[www.manim.community](https://www.manim.community)

<a href="https://colab.research.google.com/github/curiouswalk/mscene/blob/main/scenes/colab/mscene.ipynb"><img align="center" src="https://img.shields.io/badge/Open_in_Colab-blue?logo=googlecolab&labelColor=grey"></a>&ensp;[mscene.curiouswalk.com/colab](https://colab.research.google.com/github/curiouswalk/mscene/blob/main/scenes/colab/mscene.ipynb)

<a href="https://mscene.curiouswalk.com/setup"><img align="center" src="https://img.shields.io/badge/Setup_Guide-blue"></a>&ensp;[mscene.curiouswalk.com/setup](https://mscene.curiouswalk.com/setup)
 
## Manim in Colab

**Open Google [Colab](http://colab.research.google.com)**

Create a new notebook: [*colab.new*](http://colab.new) and run the cells below to begin.

**Install and Import Mscene**
```python
%pip install mscene
import mscene
```
**View Commands**
```python
%mscene -h
```
**Install and Import Manim**
```python
%mscene -l manim
```

**View Manim [Gallery](https://docs.manim.community/en/stable/examples.html)**

```python
%%manim -qm ExampleScene
class ExampleScene(Scene):
    def construct(self):
        banner = ManimBanner()
        self.play(banner.create())
        self.play(banner.expand())
        self.wait(1.5)
```

## Mscene Plugins

**Add and Import Plugins**

```python
%mscene plugins
```

**View Mscene [Plugins](https://mscene.curiouswalk.com/plugins)**

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
