let total = 0;
let totalDiscount = 0;

function cardBtn(target){
    const productTitle = target.childNodes[3].childNodes[3].innerText;
    const productListDiv = document.getElementById('products-list');
    const li = document.createElement('li');
    li.style.listStyle = "decimal inside";
    li.style.fontWeight = '600';
    li.innerText = productTitle;
    productListDiv.appendChild(li)

    const productPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0];

    total = (parseFloat(total) + parseFloat(productPrice)).toFixed(2);
    // get total price element and set total price
    const totalPrice = target.parentNode.parentNode.parentNode.nextSibling.nextSibling.childNodes[3].childNodes[3].childNodes[1].childNodes[2];
    totalPrice.innerText = total;
    const couponBtn = document.getElementById('coupon-btn');
    
    // Condition for Coupon button 
        if(total > 200){
            couponBtn.removeAttribute('disabled');
        }else{
            couponBtn.setAttribute('disabled', true);
        }

    // condition for Purchase button
    const purchaseBtn = document.getElementById('purchase-btn');
        if(total > 0){
            purchaseBtn.removeAttribute('disabled')
        }else{
            purchaseBtn.setAttribute('disabled', true)
        }

    // coupon apply condition
    
}

const couponBtn = document.getElementById('coupon-btn').addEventListener('click', function(){
    const couponField = document.getElementById('coupon-field').value; 
        if(couponField === 'SELL200'){
            const discount = total * 0.2;
            total = (total - discount).toFixed(2);
            const discountPrice = total / 0.8;
            totalDiscount = Math.abs(total - discountPrice).toFixed(2);
            
        }
        document.getElementById('grand-total').innerText = total;
        document.getElementById('discount').innerText = totalDiscount;
})


