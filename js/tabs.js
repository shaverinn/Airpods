const producta = document.querySelector(".products");

const cardInfoList = [
  {
    card_title: "безпроводные наушники №1",
    reviews: "100",
    price: 32,
  },
  {
    card_title: "безпроводные наушники №2",
    reviews: "130",
    price: 95,
  },
  {
    card_title: "безпроводные наушники №3",
    reviews: "80",
    price: 123,
  },
];

function getCards(cardInfoList, elem) {
  const arr = cardInfoList.forEach(cardInfo => {
    const tab = `<div class="product">
        <div class="product_info green">
        <div class="product_info_img">
            <img src="./svg/image 12.svg" alt="img12" />
            <div class="save">
            <p>Save</p>
            <p>60%</p>
            </div>
        </div>
        <div class="product_info_text">
            <p class="product_title">${cardInfo.card_title}</p>
            <div class="product_info_rating">
            <div class="Star">
                <img src="./svg/Star 3.svg" alt="Star" />
                <img src="./svg/Star 3.svg" alt="Star" />
                <img src="./svg/Star 3.svg" alt="Star" />
                <img src="./svg/Star 3.svg" alt="Star" />
                <img src="./svg/Star 3.svg" alt="Star" />
            </div>
            <p class="product_rating">${cardInfo.reviews}</p>
            </div>
            <p class="dollar">${cardInfo.price}</p>
        </div>
        </div>
        <button class="add_to_cart">Add to cart</button>
        </div>`
        elem.insertAdjacentHTML("afterbegin",tab)
  })

}

getCards(cardInfoList,producta)


// producta.insertAdjacentHTML("afterbegin", getCards(cardInfoList));


sellersTabBtnWrapper.addEventListener("click", (event) => {
    const target = event.target
    
    console.log(target.innerText == "Top Picks")
    const ovalButtons = sellersTabBtnWrapper.querySelectorAll("button")
    ovalButtons.forEach(button => {
        btn.classList.remove("active")
    })
    target.classList.add("active")
    // sellersTabBtnWrapper.replaceWith("")
    if (target.innerText == "Top Picks") {
        getCards(cardInfoTopPicksList,sellersTabCardWrapper)
    } else {
        getCards(cardInfoTopPicksList,sellersTabCardWrapper)
    }
})

getCards(cardInfoTopPicksList,sellersTabCardWrapper)
getCards(cardInfoList,earphonesTabCardWrapper)