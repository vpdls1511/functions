function priceComma (money) {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

console.log(priceComma(124124523512341))
