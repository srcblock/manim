function parallaxHeight() {
    var scroll_top = $(this).scrollTop();
    var sample_section_top = $(".body-section").offset().top;
    var header_height = $(".banner-section").outerHeight();
    $(".body-section").css({
        "margin-top": header_height
    });
    $(".header-section").css({
        height: header_height - scroll_top
    });
}

function headerSection() {
    document.getElementById('header').innerHTML = `
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
}

headerSection();

function aboutSection() {
    document.getElementById('about').innerHTML = `
<div class="scene" style="display: block;">

    <strong>Manim</strong> is an animation engine designed to program precise animations for explanatory math videos.

    <blockquote>
        The Manim Community Developers. <cite>Manim — Mathematical Animation Framework [Computer software].</cite><br><a href="https://https://www.manim.community/">www.manim.community</a>
    </blockquote>

    <p>The animation scenes are scripted in <a href="https://www.python.org/">Python</a> and rendered with <a href="https://www.manim.community/">Manim</a> in <a href="https://jupyter.org/">Jupyter Notebook</a> on <a href="https://colab.google/">Google Colab</a>.</p>

    <a href="https://colab.curiouswalk.com/manim">
        <img src="https://img.shields.io/badge/Manim_in_Colab-link?style=flat&logo=googlecolab&labelColor=grey&color=blue" height="24px">
    </a><br><a href="https://colab.curiouswalk.com/manim">colab.curiouswalk.com/manim</a>

</div>
`;
}

aboutSection();

function footerSection() {
  const year = new Date().getFullYear()
    document.getElementById('footer').innerHTML = `
 <footer style="margin: 0;">
  <p style="color: slategray; text-align: center; margin: 25px auto;">
      Copyright &copy; ${year} CuriousWalk<br>
      <a href="https://www.curiouswalk.com">curiouswalk.com</a>
  </p>
</footer>
`;
}

footerSection();



let vid = '';

    var v = document.getElementsByClassName("vid");

    for (var n = 0; n < v.length; n++) {

    let id = v[n].getAttribute("id");

    let imageHtml = '<a href="javascript:void(0)" onclick=playYT("'+id+'")><img class="yt" src="images/'+id+'.jpg"/></a>';
    document.getElementById(id).innerHTML=imageHtml;
    }
    
    
    function playYT(id) {

        if (vid!= ''){
            let imageHtml = '<a href="javascript:void(0)" onclick=playYT("'+vid+'")><img class="yt" src="images/'+vid+'.jpg"/></a>';
        document.getElementById(vid).innerHTML=imageHtml;
    }

        vid = id;
   
     let html='<iframe class="yt" src="https://www.youtube.com/embed/'+vid+'?autoplay=1" allow="autoplay" frameborder="0"></iframe>';
        document.getElementById(vid).innerHTML=html;

    }





// let vid = '';
//     function playYt(id) {
//         if (vid!= ''){

//         let imageHtml = '<a href="javascript:void(0)" onclick=playYt("'+vid+'")><img class="yt" src="https://img.youtube.com/vi/'+vid+'/hqdefault.jpg"/></a>';
//         document.getElementById(vid).innerHTML=imageHtml;
//     }

//         vid = id;
   

//      let html='<iframe class="yt" src="https://www.youtube.com/embed/'+vid+'?autoplay=1" allow="autoplay" frameborder="0"></iframe>';
//         document.getElementById(vid).innerHTML=html;

//     }

// playYt(id);

parallaxHeight();

$(window).scroll(function() {
    parallaxHeight();
});

$(window).resize(function() {
    parallaxHeight();
});