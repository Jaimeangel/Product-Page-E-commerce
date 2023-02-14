
class Cart{
    constructor({
        nodoCart
    }){
        this.nodoCart=nodoCart;
        this.amountProducts=0;
        this.productsCart=[];
    }
    saveDataProducts(data){
        const dataProduct={...data}
        const product=this.productsCart.find(product=>product.id===dataProduct.id)
        if(!product){
            this.productsCart.push(dataProduct);
            this.ProductCart(dataProduct);
        }else{
            product.amount+=dataProduct.amount;
            this.ModifyProductCart(product)
        }
    }
    ChangeCounterCart(data){
        const nodoCounter=document.querySelector('.btnCount .count');
        const counter=parseInt(nodoCounter.textContent);
        this.amountProducts+=counter
        nodoCounter.textContent=0

        this.CounterCartProducts()
        this.saveDataProducts(data)
    }
    CounterCartProducts(){
        const counterProducts=document.querySelector('.carProducts .count')
        if(this.amountProducts>0){
            counterProducts.textContent=`${this.amountProducts}`
            counterProducts.classList.add('showCount')
        }else if(this.amountProducts===0){
            counterProducts.classList.remove('showCount')
        }
    }
    ModifyProductCart(data){
        const products=Array.from(document.querySelectorAll('.wrapProductCart'));
        for (let i = 0; i < products.length; i++) {
            const element = products[i];
            if(parseInt(element.dataset.id)===data.id){
                const infoPrice=element.querySelector('.infoProductCart .priceProduct')
                const total=data.price* data.amount
                infoPrice.textContent=`$${data.price}.00 x ${data.amount} - $${total}.00`
                break
            }
        }
    }
    RemoveProductCart(nodoRemove,id){
        nodoRemove.remove()

        for (let i = 0; i < this.productsCart.length; i++) {
            const element = this.productsCart[i];
            if(element.id===id){
                this.amountProducts-=parseInt(element.amount)
                this.productsCart.splice(i,1)
                this.CounterCartProducts()
                break
            }
        }
        if(!this.productsCart.length){
            const nodoProducts=document.querySelector('.cartContent__content')
            this.LoadUICartContent(nodoProducts)
        }

    }
    ProductCart(data){
        const nodoProducts=document.querySelector('.cartContent__content')
        if(nodoProducts.firstChild.classList.contains('noContentCart')){
            nodoProducts.firstChild.remove()
        }
        this.LoadUICartContent(nodoProducts)
        
        const contentProducts=document.querySelector('.productContentCart')

        const wrapProduct=document.createElement('div')
        wrapProduct.classList.add('wrapProductCart')
        wrapProduct.setAttribute('data-id',`${data.id}`)

        const imgProduct=document.createElement('img')
        imgProduct.setAttribute('src',data.img)

        const infoProduct=document.createElement('div')
        infoProduct.classList.add('infoProductCart')

        const nameProduct=document.createElement('p')
        nameProduct.textContent=`${data.nameProduct}`
        nameProduct.classList.add('nameProduct')

        const total=data.price*data.amount;

        const priceInfo=document.createElement('p')
        priceInfo.classList.add('priceProduct')
        priceInfo.textContent=`$${data.price}.00 x ${data.amount} - $${total}.00`

        infoProduct.append(nameProduct,priceInfo)

        const btnDeleteProduct=document.createElement('button')
        btnDeleteProduct.onclick=()=>this.RemoveProductCart(wrapProduct,data.id)
        btnDeleteProduct.classList.add('btnDelete')
        btnDeleteProduct.textContent=`X`
/*         const iconDelete=document.createElement('i')
        iconDelete.classList.add('fa-solid')
        iconDelete.classList.add('fa-trash-can')
        btnDeleteProduct.append(iconDelete) */

        wrapProduct.append(imgProduct,infoProduct,btnDeleteProduct)
        contentProducts.append(wrapProduct)

    }
    LoadUICartContent(nodoInsert){
        nodoInsert.innerHTML=""
        if(!this.productsCart.length){
            const noContent=document.createElement('h3')
            noContent.classList.add('noContentCart')
            noContent.textContent=`Your cart is empty`
            nodoInsert.append(noContent)
        }else{
    
            const productBox=document.createElement('div')
            productBox.classList.add('productContentCart')
    
            const btnCheckout=document.createElement('button')
            btnCheckout.classList.add('btnCheckout')
            btnCheckout.textContent=`Checkout`
            nodoInsert.append(productBox,btnCheckout)
    
        }
    }
    loadUICart(){
        const cartContent=document.createElement('div')
        cartContent.classList.add('cartContent')

        const title=document.createElement('div')
        title.classList.add('cartContent__title')
        const titleContent=document.createElement('h3')
        titleContent.textContent=`Cart`
        title.append(titleContent)
        

        const productsContent=document.createElement('div')
        productsContent.classList.add('cartContent__content')

        this.LoadUICartContent(productsContent)

        cartContent.append(title,productsContent)

        this.nodoCart.append(cartContent)
        document.querySelector('.car').addEventListener('click',()=>{
            cartContent.classList.toggle('show')
        })
        
    }
}

const cart=document.querySelector('.carProducts')

const CartProducts= new Cart({
    nodoCart:cart
})
CartProducts.loadUICart()