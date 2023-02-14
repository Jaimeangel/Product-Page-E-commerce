
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
        }else{
            product.amount+=dataProduct.amount;
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
        }
    }
}

const cart=document.querySelector('.carProducts')

const CartProducts= new Cart({
    nodoCart:cart
})