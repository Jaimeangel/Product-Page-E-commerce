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

    const priceProduct=document.createElement('h4')
    priceProduct.textContent=`${product.discountPrice}`
    const discountProduct=document.createElement('span')
    discountProduct.textContent=`${product.discount}`
    const priceDiscount=document.createElement('span')
    priceDiscount.textContent=`${product.priceProduct}`
    infoPrice.append(priceProduct,discountProduct,priceDiscount)

    /* Actions by add product and button add to cart */
    const payActions=document.createElement('div')

    const btnCount=document.createElement('div')

    const btnPlus=document.createElement('button')
    const iconPlus=document.createElement('i')
    iconPlus.classList.add('fa-solid')
    iconPlus.classList.add('fa-plus')
    btnPlus.append(iconPlus)

    const amountProduct=document.createElement('span')
    amountProduct.textContent=0

    const btnMinus=document.createElement('button')
    const iconMinus=document.createElement('i')
    iconMinus.classList.add('fa-solid')
    iconMinus.classList.add('fa-minus')
    btnMinus.append(iconMinus)

    btnCount.append(btnPlus,amountProduct,btnMinus)

    const btnPayment=document.createElement('button')
    btnPayment.textContent=`Add to cart`
    payActions.append(btnCount,btnPayment)

    wrapInfoProduct.append(infoTitles,infoPrice,payActions)
    content.append(wrapInfoProduct)
}

LoadInfoProduct()