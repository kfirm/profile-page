document.addEventListener('DOMContentLoaded',function(){
   let wrapper = document.getElementById('wrapper');
   let topLayer = wrapper.querySelector('.top');
   let handle = wrapper.querySelector('.handle');
   let skew = 0;
   let delta = 0;

    if (wrapper.className.indexOf('skewed') !== -1){
        skew = 1000;
    }

    wrapper.addEventListener('mousemove',function (event) {
        delta = (event.clientX - window.innerWidth / 2) * 0.5;
        // console.log('delta',delta);

        handle.style.left = event.clientX + delta + 'px';
        if (event.clientX + delta > 1200){
            handle.style.left = 1200 + 'px';
        } else if (event.clientX + delta < 500) {
            handle.style.left = 500 + 'px';
        }

        // console.log('handel left',handle.style.left);

        topLayer.style.width = event.clientX + skew + delta + 'px';

        if (event.clientX + skew + delta > 2200){
            topLayer.style.width = 2200 + 'px';
        } else if (event.clientX + skew + delta < 1500) {
            topLayer.style.width = 1500 + 'px';
        }

        // console.log('top width',event.clientX + skew + delta);
    });

});

