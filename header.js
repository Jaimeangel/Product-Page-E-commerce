const ctnHeader=document.querySelector('.wrap__nav');
const menuList=['Collections','Men','Women','About','Contact'];

function LoadContentHeader(){   

    
    const ctnMenu=document.createElement('div')
    ctnMenu.classList.add('menu')
    const menu=document.createElement('img');
    menu.setAttribute('src','./images/icon-menu.svg')
    ctnMenu.append(menu)
    menu.onclick=()=>show(ctnList)
    
    
    const ctnLogo=document.createElement('div')
    ctnLogo.classList.add('logo')
    const logo=document.createElement('img')
    logo.setAttribute('src','./images/logo.svg')
    ctnLogo.append(logo)
    
    const carProducts=document.createElement('div')
    carProducts.classList.add('carProducts')
    const car=document.createElement('img')
    car.classList.add('car')
    car.setAttribute('src','./images/icon-cart.svg')
    const countProductos=document.createElement('span')
    countProductos.classList.add('count')
    carProducts.append(car,countProductos)
    
    const ctnUser=document.createElement('div')
    ctnUser.classList.add('user')
    const user=document.createElement('img')
    user.setAttribute('src','./images/image-avatar.png')
    ctnUser.append(user)
    
    const ctnList=document.createElement('div')
    ctnList.classList.add('list')
    const ulList=document.createElement('ul')
    const close=document.createElement('img')
    close.onclick=()=>show(ctnList)
    close.setAttribute('src','./images/icon-close.svg')
    ulList.append(close)
    menuList.forEach(itm=>{
        const item=document.createElement('li')
        item.textContent=`${itm}`
        ulList.append(item)
    })
    ctnList.append(ulList)

    ctnHeader.append(ctnMenu,ctnLogo,carProducts,ctnUser,ctnList)
}
LoadContentHeader()

function show(ctn){
    ctn.classList.toggle('show')
}   