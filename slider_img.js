const content=document.querySelector('.wrap__app');

class SliderImages{
    constructor({
        nodo
    }){
        this.currentImage=1;
        this.nodo=nodo;
        this.images=[
            {
                id:1,
                img:'./images/image-product-1.jpg',
                img_thb:'./images/image-product-1-thumbnail.jpg'
            },
            {
                id:2,
                img:'./images/image-product-2.jpg',
                img_thb:'./images/image-product-2-thumbnail.jpg'
            },
            {
                id:3,
                img:'./images/image-product-3.jpg',
                img_thb:'./images/image-product-3-thumbnail.jpg'
            },
            {
                id:4,
                img:'./images/image-product-4.jpg',
                img_thb:'./images/image-product-4-thumbnail.jpg'
            }
        ];
    }

    ChangeImageByArrow(type){
        if(type==='plus'){
            if(this.currentImage===4){
                return
            }
            this.currentImage=this.currentImage+1  
        }else{
            if(this.currentImage===1){
                return
            }
            this.currentImage=this.currentImage-1
        }
        this.ChangeImage()
    }
    ChangeImageByImage(number){
        this.currentImage=number;
        this.ChangeImage()
    }

    loadContent(){
        const wrap=document.createElement('div');
        wrap.classList.add('slideImagees')

        /* Slide */
        const slide=document.createElement('slide')
        slide.classList.add('slide')

        const prevBtn=document.createElement('button')
        prevBtn.onclick=()=>this.ChangeImageByArrow('minus')

        prevBtn.classList.add('btnSlide')
        prevBtn.classList.add('prev')
        const prevImg=document.createElement('img')
        prevImg.setAttribute('src','./images/icon-previous.svg')
        prevBtn.appendChild(prevImg)

        const mainCtn=document.createElement('div')
        mainCtn.classList.add('ctnImg')
        const mainImg=document.createElement('img')
        mainImg.setAttribute('id','mainImg')
        mainCtn.appendChild(mainImg)

        const nextBtn=document.createElement('button')
        nextBtn.onclick=()=>this.ChangeImageByArrow('plus')

        nextBtn.classList.add('btnSlide')
        nextBtn.classList.add('next')
        const nextImg=document.createElement('img')
        nextImg.setAttribute('src','./images/icon-next.svg')
        nextBtn.appendChild(nextImg)

        slide.append(prevBtn,mainCtn,nextBtn)

        /* list little images */
        const listImg=document.createElement('div')
        listImg.classList.add('listSlide')
        this.images.forEach((img,index)=>{
            const id=index+1
            const image=document.createElement('img')
            image.onclick=()=>this.ChangeImageByImage(id)
            image.setAttribute('src',`${img.img_thb}`)
            listImg.append(image)
        })

        wrap.append(slide,listImg)
        this.nodo.appendChild(wrap)
        this.ChangeImage()
    }

    ChangeImage(){
        const ctnImg=document.getElementById('mainImg');
        const imgToSelect=this.images.find(img=>img.id===this.currentImage);
        ctnImg.setAttribute('src',`${imgToSelect.img}`)
    }

    
}

const Slider=new SliderImages({nodo:content})
Slider.loadContent()