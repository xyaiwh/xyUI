export default {
    bind: function(el) {
        let oImgWap = el,
            magWap = el.querySelector('.mag-wap'),
            oImgCopy = el.querySelector('.img-copy'),
            imgWidth = window.getComputedStyle(oImgWap, null);
            console.log(imgWidth);
        


        el.addEventListener('mouseover', ()=>{
            magWap.className += ' show';
            el.addEventListener('mousemove', (e)=>{
                console.log(e.pageX);
            })
        },false)

        el.addEventListener('mouseout', ()=>{
            magWap.className = 'mag-wap'
        })

        console.log(magWap,oImgCopy);
        
    }
}