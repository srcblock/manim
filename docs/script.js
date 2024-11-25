document.getElementById("header")
    .innerHTML = `
<div class="header-section">

    <div class="banner-section">

        <img src="images/cw.png" width="135px" style="float:left; margin-right: 25px;">

        <div style="margin-bottom:25px;">
            <a class="button" href="https://www.curiouswalk.com">
                <span>&nbsp;CuriousWalk&nbsp;</span>
                <span class="hover-text">&nbsp;CuriousWalk&nbsp;</span>
                <span class="link-text">curiouswalk.com</span>
            </a>
        </div>

        <div style="margin-bottom:25px;">
            <a class="button" href="https://github.com/curiouswalk/manimscene">
                <span>&nbsp;ManimScene&nbsp;</span>
                <span class="hover-text">&nbsp;ManimScene&nbsp;</span>
                <span class="link-text">Open&nbsp;in&nbsp;GitHub</span>
            </a>
        </div>

        <h1 style="font-weight: normal; margin-bottom:0px">Animation Scenes Scripted in Python</h1>
    
    </div>

</div>

</div>
`;

let vid = '';

let github_url = 'https://github.com/curiouswalk/manimscene/tree/main/source/';

let colab_url = 'https://colab.research.google.com/github/curiouswalk/manimscene/blob/main/source/';

let youtube_url = 'https://www.youtube.com/watch?v=';

const v = document.getElementsByClassName("scene");

for (var n = 0; n < v.length; n++) {

    let id = v[n].getAttribute("id");

    let file = v[n].getAttribute("file");

    let title = v[n].getAttribute("title");

    let html = '<div>';

    html += '<h2><a href="' + github_url + file + '">' + title + '</a></h2>';

    html += '<div id="vid_+' + id + '" ><a href="javascript:void(0)" onclick=playYT("' + id + '")><img class="yt" src="images/' + id + '.jpg"/></a></div>';

    html += '<div class="icon"> <a href="' + colab_url + file + '/' + file + '.ipynb"><img class="colab"></a>';

    html += '<a href="' + github_url + file + '"><img class="github"></a>';

    html += '<a href="' + youtube_url + id + '"><img class="youtube"></a></div>';

    html += v[n].innerHTML;

    html += '</div>';

    v[n].style.display = 'inline-block';

    v[n].innerHTML = html;

}

function playYT(id) {

    if (vid != '') {
        let imageHtml = '<div id="vid_+' + vid + '" ><a href="javascript:void(0)" onclick=playYT("' + vid + '")><img class="yt" src="images/' + vid + '.jpg"/></a></div>';
        document.getElementById('vid_+' + vid)
            .innerHTML = imageHtml;
    }

    vid = id;

    let videoHtml = '<div id="vid_+' + vid + '" ><iframe class="yt" src="https://www.youtube.com/embed/' + vid + '?autoplay=1" allow="autoplay" frameborder="0"></iframe></div>';
    document.getElementById('vid_+' + vid)
        .innerHTML = videoHtml;
}

let contentHtml = '<div class="body-section">';

// about section

contentHtml += `
<div class="scene" style="display: inline-block;">

<p>The animation scenes are scripted in <a href="https://www.python.org/">Python</a> and rendered with <a href="https://www.manim.community/">Manim</a> in <a href="https://jupyter.org/">Jupyter Notebook</a> on <a href="https://colab.google/">Google Colab</a>. <strong>Manim</strong> is an animation engine designed to program precise animations for explanatory math videos.</p>

    <blockquote>
        The Manim Community Developers. <cite>Manim — Mathematical Animation Framework [Computer software].</cite><br><a href="https://https://www.manim.community/">www.manim.community</a>
    </blockquote>

    <a href="https://colab.curiouswalk.com/manim">
        <img src="https://img.shields.io/badge/Manim_in_Colab-link?style=flat&logo=googlecolab&labelColor=grey&color=blue" height="24px">
    </a><br><a href="https://colab.curiouswalk.com/manim">colab.curiouswalk.com/manim</a>

</div>
`;

contentHtml += document.getElementById("content")
    .innerHTML;

contentHtml += '</div>';

document.getElementById("content")
    .innerHTML = contentHtml;

const year = new Date()
    .getFullYear()

document.getElementById("footer")
    .innerHTML = `
<footer style="margin: 0;">
<p style="color: slategray; text-align: center; margin: 25px auto;">
  Copyright &copy; ${year} CuriousWalk<br>
  <a href="https://www.curiouswalk.com">curiouswalk.com</a>
</p>
</footer>
`;

function parallaxHeight() {
    var scroll_top = $(this)
        .scrollTop();
    var sample_section_top = $(".body-section")
        .offset()
        .top;
    var header_height = $(".banner-section")
        .outerHeight();
    $(".body-section")
        .css({
            "margin-top": header_height
        });
    $(".header-section")
        .css({
            height: header_height - scroll_top
        });
}

parallaxHeight();

$(window)
    .scroll(function () {
        parallaxHeight();
    });

$(window)
    .resize(function () {
        parallaxHeight();
    });

