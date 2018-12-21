//var myHeading = document.querySelector('h1');
    $(document).ready(function() {
        var animationCont = 0;

        $('#fullpage').fullpage({
            sectionsColor: ['#36465d', '#55c598', '#a77dc2', 'whitesmoke', '#ccddff', '#ccc'],
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
            menu: '#menu',
            navigation: true,
            navigationPosition: 'left',
            easingcss3: 'cubic-bezier(.825,0,.5,1)',
            parallax: true,
            parallaxOptions: {
                type: 'reveal',
                percentage: 100,
                property: 'translate'
            }
        });
    });

onLeave: function(index, nextIndex, direction){
    if(nextIndex === 2){
        animationCont++;

        //forcing the gift to start again
        $('.section-2-animation')
            .css('background-image', 'url(animation3.gif?v='+animationCont+')');
    }
},
afterLoad: function(anchorLink, index){
    $('.blogs-graphic').toggleClass('active', (index === 3));
},
afterRender: function(){
    //forcing visual render of the element to we can apply the transition
    $('.section-1-whatIs')[0].clientHeight;
    $('.section-1-bg')[0].clientHeight;

    $('.section-1-bg, .section-1-whatIs, .section-1-content').addClass('active');
}
