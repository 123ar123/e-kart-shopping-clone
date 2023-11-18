let bagItems;

onLoad();
function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems')
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}


function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems))
    displayBagIcon();

}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    bagItemCountElement.innerText = bagItems.length;
    if(bagItems.length>0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}
function displayItemsOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');
     if(!itemsContainerElement){
        return;
     }
    let innerHtml = '';
    
    items.forEach(item => {
        innerHtml += ` <div class="item-container">
        <img class="item-image" src="${item.item_image}" alt="item first">
           <div class="rating">
              ${item.rating.stars}⭐ | ${item.rating.noOfreview}
           </div>
           <div class="company-name">
             ${item.company_name}
           </div>
           <div class="item-name">
              ${item.item_name}
           </div>
        
           <div class="price">
        
              <span class="current-price">
                 ${item.current_price}
              </span>
              <span class="original-price">${item.original_price}</span>
              <span class="discount">${item.discount}</span>
        
           </div>
        
           <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`
    });
    
    itemsContainerElement.innerHTML = innerHtml;
}