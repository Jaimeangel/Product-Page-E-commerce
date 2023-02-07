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
    ChangeImageByArrow(type,id){
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
        this.ChangeImage(id)
    }
    ChangeImageByImage(number,id){
        this.currentImage=number;
        this.ChangeImage(id)
    }
    loadContent(nodoWrap){
        const wrap=document.createElement('div');
        wrap.classList.add('slideImagees')

        /* Slide */
        const slide=document.createElement('slide')
        slide.classList.add('slide')

        /* prev btn */
        const prevBtn=document.createElement('button')
        prevBtn.onclick=()=>this.ChangeImageByArrow('minus','mainImg')

        prevBtn.classList.add('btnSlide')
        prevBtn.classList.add('prev')
        const prevImg=document.createElement('img')
        prevImg.setAttribute('src','./images/icon-previous.svg')
        prevBtn.appendChild(prevImg)
        
        /* Image Slide */
        const mainCtn=document.createElement('div')
        mainCtn.classList.add('ctnImg')
        const mainImg=document.createElement('img')
        mainImg.setAttribute('id','mainImg')
        mainCtn.appendChild(mainImg)

        /* next btn */
        const nextBtn=document.createElement('button')
        nextBtn.onclick=()=>this.ChangeImageByArrow('plus','mainImg')

        nextBtn.classList.add('btnSlide')
        nextBtn.classList.add('next')
        const nextImg=document.createElement('img')
        nextImg.setAttribute('src','./images/icon-next.svg')
        nextBtn.appendChild(nextImg)

        /* Button Max */
        const btnMax=document.createElement('button')
        btnMax.onclick=()=>this.Modal()

        btnMax.classList.add('btnMax')
        const icon=document.createElement('i')
        icon.classList.add('fa-solid')
        icon.classList.add('fa-maximize')
        btnMax.append(icon)

        slide.append(prevBtn,mainCtn,nextBtn,btnMax)

        /* list little images */
        const listImg=document.createElement('div')
        listImg.classList.add('listSlide')
        this.images.forEach((img,index)=>{
            const id=index+1
            const image=document.createElement('img')
            image.onclick=()=>this.ChangeImageByImage(id,'mainImg')
            image.setAttribute('src',`${img.img_thb}`)
            listImg.append(image)
        })

        wrap.append(slide,listImg)
        nodoWrap.appendChild(wrap)
        this.ChangeImage('mainImg')
    }
    ChangeImage(id){
        const ctnImg=document.getElementById(`${id}`);
        const imgToSelect=this.images.find(img=>img.id===this.currentImage);
        ctnImg.setAttribute('src',`${imgToSelect.img}`)
    }
    CloseModal(nodo){
        nodo.close()
        nodo.remove()
    }
    Modal(){
        const wrapModal=document.createElement('div')
        wrapModal.classList.add('wrapModal')

        const modal=document.createElement('dialog')
        const btnClose=document.createElement('button')
        btnClose.classList.add('btnClose')
        btnClose.onclick=()=>this.CloseModal(modal)
        const iconClose=document.createElement('i')
        iconClose.classList.add('fa-solid')
        iconClose.classList.add('fa-xmark')
        btnClose.append(iconClose)

        const wrap=document.createElement('div');
        wrap.classList.add('slideImagees')

        /* Slide */
        const slide=document.createElement('slide')
        slide.classList.add('slide')
        slide.classList.add('slideModal')

        /* prev btn */
        const prevBtn=document.createElement('button')
        prevBtn.onclick=()=>this.ChangeImageByArrow('minus','mainImgModal')

        prevBtn.classList.add('btnSlideModal')
        prevBtn.classList.add('prevModal')
        const prevImg=document.createElement('img')
        prevImg.setAttribute('src','./images/icon-previous.svg')
        prevBtn.appendChild(prevImg)
        
        /* Image Slide */
        const mainCtn=document.createElement('div')
        mainCtn.classList.add('ctnImg')
        const mainImg=document.createElement('img')
        mainImg.setAttribute('id','mainImgModal')
        mainCtn.appendChild(mainImg)

        /* next btn */
        const nextBtn=document.createElement('button')
        nextBtn.onclick=()=>this.ChangeImageByArrow('plus','mainImgModal')

        nextBtn.classList.add('btnSlideModal')
        nextBtn.classList.add('nextModal')
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
            image.onclick=()=>this.ChangeImageByImage(id,'mainImgModal')
            image.setAttribute('src',`${img.img_thb}`)
            listImg.append(image)
        })

        wrap.append(slide,listImg)

        wrapModal.append(btnClose,wrap)
        modal.append(wrapModal)

        window.document.body.appendChild(modal)
        modal.showModal()
        this.ChangeImage('mainImgModal')
    }
    Start(){
        this.loadContent(this.nodo)
    }
}

const Slider=new SliderImages({nodo:content})
Slider.Start()