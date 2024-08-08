function parallax_height() {
    var scroll_top = $(this).scrollTop();
    var sample_section_top = $(".body-section").offset().top;
    var header_height = $(".banner-section").outerHeight();
    $(".body-section").css({
        "margin-top": header_height
    });
    $(".banner").css({
        height: header_height - scroll_top
    });
}

function headerSection() {
    document.getElementById('header-section').innerHTML = `
<div class="banner">

    <div class="banner-section">

        <img src="cw.png" width="135px" style="float:left; margin-right: 25px;">

        <div style="margin-bottom:25px;">
            <a class="button1" href="https://github.com/curiouswalk/manim">
                <span>&nbsp;CuriousWalk&nbsp;</span>
                <span class="hover-text">&nbsp;CuriousWalk&nbsp;</span>
                <span class="link-text">www.curiouswalk.com</span>
            </a>
        </div>

        <div style="margin-bottom:25px;">
            <a class="button1" href="https://github.com/curiouswalk/manim">
                <span>&nbsp;Manim&nbsp;Animation&nbsp;</span>
                <span class="hover-text">&nbsp;Manim&nbsp;Animation&nbsp;</span>
                <span class="link-text">Open&nbsp;in&nbsp;GitHub</span>
            </a>
        </div>

        <h1 style="font-weight: normal; margin-bottom:0px">Animation Scenes scripted in Python</h2>
    
    </div>

</div>

</div>
`;
}

headerSection();

function firstSection() {
    document.getElementById('first-section').innerHTML = `
<div class="new-section" style="display: block;">

    <a href="https://www.manim.community/"><strong>Manim</strong></a> is an animation engine for creating precise programmatic animations.

    <blockquote>
        The Manim Community Developers. <cite>Manim — Mathematical Animation Framework [Computer software].</cite><br><a href="https://https://www.manim.community/">www.manim.community</a>
    </blockquote>

    <p>The animation scenes are rendered from Python scripts using Manim in Jupyter Notebook on Google Colab.</p>

    <a href="https://colab.curiouswalk.com/manim">
        <img src="https://img.shields.io/badge/Manim_in_Colab-link?style=flat&logo=googlecolab&labelColor=grey&color=blue" height="24px">
    </a><br><a href="https://colab.curiouswalk.com/manim">colab.curiouswalk.com/manim</a>

</div>
`;
}

firstSection();

function footerSection() {
  const year = new Date().getFullYear()
    document.getElementById('footer-section').innerHTML = `
 <footer style="margin: 0;">
  <p style="color: slategray; text-align: center; margin: 25px auto;">
    Copyright &copy; ${year} <a href="https://www.curiouswalk.com">CuriousWalk</a>
  </p>
</footer>
`;
}

footerSection();

parallax_height();
$(window).scroll(function() {
    parallax_height();
});

$(window).resize(function() {
    parallax_height();
});