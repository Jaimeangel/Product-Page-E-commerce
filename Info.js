const product={
    partnerProduct:'Sneaker Company',
    nameProduct:'Fall Limited Edition Sneakers',
    descriptionProduct:'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they all withstand everything the weather can offer.',
    priceProduct:250.00,
    discountPrice:125.00,
    discount:50,
}
function LoadInfoProduct(){
    const wrapInfoProduct=document.createElement('div')
    wrapInfoProduct.classList.add('infoProduct')

    /* Title, descriptions of product */
    const infoTitles=document.createElement('div')
    infoTitles.classList.add('infoTitles')

    const companyName=document.createElement('span')
    companyName.textContent=`${product.partnerProduct}`
    const titleProduct=document.createElement('h3')
    titleProduct.textContent=`${product.nameProduct}`
    const descriptionProduct=document.createElement('p')
    descriptionProduct.textContent=`${product.descriptionProduct}`
    infoTitles.append(companyName,titleProduct,descriptionProduct)

    /* All info about price product */
    const infoPrice=document.createElement('div')
    infoPrice.classList.add('infoPrice')

    const priceProduct=document.createElement('h4')
    priceProduct.classList.add('priceProduct')
    priceProduct.textContent=`$${product.discountPrice}`

    const discountProduct=document.createElement('span')
    discountProduct.classList.add('discount')
    discountProduct.textContent=`${product.discount}%`

    const priceDiscount=document.createElement('span')
    priceDiscount.classList.add('priceDiscount')
    priceDiscount.textContent=`$${product.priceProduct}`

    infoPrice.append(priceProduct,discountProduct,priceDiscount)

    /* Actions by add product and button add to cart */
    const payActions=document.createElement('div')
    payActions.classList.add('payActions')

    const btnCount=document.createElement('div')
    btnCount.classList.add('btnCount')

    const btnPlus=document.createElement('button')
    btnPlus.classList.add('btnOperations')
    btnPlus.classList.add('plus')
    const iconPlus=document.createElement('i')
    iconPlus.classList.add('fa-solid')
    iconPlus.classList.add('fa-plus')
    btnPlus.append(iconPlus)
    
    const amountProduct=document.createElement('span')
    amountProduct.classList.add('count')
    amountProduct.textContent=0
    
    const btnMinus=document.createElement('button')
    btnMinus.classList.add('btnOperations')
    btnMinus.classList.add('minus')
    const iconMinus=document.createElement('i')
    iconMinus.classList.add('fa-solid')
    iconMinus.classList.add('fa-minus')
    btnMinus.append(iconMinus)
    /* Counter function */
    btnPlus.onclick=()=>CounterButton('plus')
    btnMinus.onclick=()=>CounterButton('minus')

    btnCount.append(btnPlus,amountProduct,btnMinus)

    const btnPayment=document.createElement('button')
    btnPayment.classList.add('btnPayment')
    const iconCart=document.createElement('i')
    iconCart.classList.add('fa-solid')
    iconCart.classList.add('fa-cart-plus')
    
    const spanText=document.createElement('span')
    spanText.textContent=`Add to cart`

    btnPayment.append(iconCart,spanText)

    payActions.append(btnCount,btnPayment)

    wrapInfoProduct.append(infoTitles,infoPrice,payActions)
    content.append(wrapInfoProduct)
}

LoadInfoProduct()

function CounterButton(type){
    const counter=document.querySelector('.btnCount span.count');
    const valueCounter=parseInt(counter.textContent);
    if(type==='plus'){
        if(valueCounter>20)return
        counter.textContent=`${valueCounter+1}`
    }else{
        if(valueCounter===0)return
        counter.textContent=`${valueCounter-1}`
    }
}