let home = document.querySelector('.home')




let dash = document.querySelector('.dash')
let use = document.querySelector('.us')
let withd = document.querySelector('.wid')
let cryp = document.querySelector('.cry')
let fun = document.querySelector('.fun')
let addInf = document.querySelector('.inf')
let btc = document.querySelector('.btc')
let ethereum = document.querySelector('.ethe')
let binCoin = document.querySelector('.bnc')
let liteC = document.querySelector('.ltc')
let zel = document.querySelector('.zel')
let payp = document.querySelector('.payp')
let cash = document.querySelector('.cap')
let apple = document.querySelector('.app')





let user = document.querySelector('.user')
let transaction = document.querySelector('.transaction')
let withdraw = document.querySelector('.withdraw')
let crypto = document.querySelector('.crypto')
let giftCard = document.querySelector('.gift-card')
let funds = document.querySelector('.funds')
let fund = document.querySelector('.fund')
let dashboard = document.querySelector('.details')
let withdrawa = document.querySelector('.WITHDRAWA')
let cryptocurrencies = document.querySelector('.cryptocurrencies')
let userDetails = document.querySelector('.user-details')
let cryptoDetails = document.querySelector('.crypto-details')
let userInfo = document.querySelector('.user-info')
let coinType = document.querySelector('.coin-type')
let selectCoin = document.querySelector('.select-coin')
let fundsss = document.querySelector('.fundsss')
let fundForm = document.querySelector('.fund-form')
let fundButton = document.querySelector('.fund-select')
let bit = document.querySelector('.bit')
let eth = document.querySelector('.eth')
let binance = document.querySelector('.binance')
let lite = document.querySelector('.lite')
let bitCoin = document.querySelector('.bit-coin')
let ethCoin = document.querySelector('.eth-coin')
let binanceCoin = document.querySelector('.binance-coin')
let liteCoin = document.querySelector('.lite-coin')
let barBitImage = document.querySelector('.bitcoin-icon')
let barBinanceImage = document.querySelector('.binance-icon')
let barEthImage = document.querySelector('.eth-icon')
let barLiteImage = document.querySelector('.lite-icon')
let barZelleImage = document.querySelector('.zelle-icon')
let barPaypalImage = document.querySelector('.pay-icon')
let barcashappImage = document.querySelector('.cashapp-icon')
let barappleImage = document.querySelector('.apple-icon')
let zelleName = document.querySelector('.zell')
let paypalName = document.querySelector('.paypall')
let cashappName = document.querySelector('.cashap')
let applepayName = document.querySelector('.apple-payy')
let addCrypto = document.getElementById('add-crypto')
let addInfo = document.querySelector('.add-info')
let title = document.querySelector('.title')
let zelleOpt = document.querySelector('.zelle')
let payOpt = document.querySelector('.paypal')
let cashOpt = document.querySelector('.cashapp')
let appleOpt = document.querySelector('.apple-pay')
let searchResult = document.querySelector('.keywords')
let keywords = document.getElementsByClassName('keyword')
let input = document.getElementById('home-search')



input.addEventListener('keyup', function(){
    for(i = 0; i < keywords.length; i++){

        let key = keywords[i].innerHTML.toUpperCase()
        if(key.includes(input.value.toUpperCase()) && input.value != ''){
            keywords[i].style.display = 'block'
            searchResult.style.display = 'block'
        }else{
            keywords[i].style.display = 'none'
        }
    }
})
searchResult.addEventListener('click', function(){
    searchResult.style.display = 'none'
})


dash.addEventListener('click', function(){
    home.classList.add('selected')
    user.classList.remove('selected')
    // transaction.classList.remove('selected')
    withdraw.classList.remove('selected')
    crypto.classList.remove('selected')
    funds.classList.remove('selected')
    // giftCard.classList.remove('selected')
    dashboard.classList.remove('hide')
    cryptoDetails.classList.add('hide')
    cryptocurrencies.classList.add('hide')
    withdrawa.classList.add('hide')
    userDetails.classList.add('hide')
    fundsss.classList.add('hide')
    userInfo.classList.add('hide')
    title.textContent = 'xixcurrency - Dashboard' 
})
home.addEventListener('click', function(){
    home.classList.add('selected')
    user.classList.remove('selected')
    // transaction.classList.remove('selected')
    withdraw.classList.remove('selected')
    crypto.classList.remove('selected')
    funds.classList.remove('selected')
    // giftCard.classList.remove('selected')
    dashboard.classList.remove('hide')
    cryptoDetails.classList.add('hide')
    cryptocurrencies.classList.add('hide')
    withdrawa.classList.add('hide')
    userDetails.classList.add('hide')
    fundsss.classList.add('hide')
    userInfo.classList.add('hide')
    title.textContent = 'xixcurrency - Dashboard' 
})
use.addEventListener('click', function(){
    user.classList.add('selected')
    home.classList.remove('selected')
    withdraw.classList.remove('selected')
    crypto.classList.remove('selected')
    funds.classList.remove('selected')
    dashboard.classList.add('hide')
    withdrawa.classList.add('hide')
    userDetails.classList.remove('hide')
    cryptoDetails.classList.add('hide')
    cryptocurrencies.classList.add('hide')
    fundsss.classList.add('hide')
    userInfo.classList.add('hide')
    title.textContent = 'xixcurrency - User' 
    
})
user.addEventListener('click', function(){
    user.classList.add('selected')
    home.classList.remove('selected')
    withdraw.classList.remove('selected')
    crypto.classList.remove('selected')
    funds.classList.remove('selected')
    dashboard.classList.add('hide')
    withdrawa.classList.add('hide')
    userDetails.classList.remove('hide')
    cryptoDetails.classList.add('hide')
    cryptocurrencies.classList.add('hide')
    fundsss.classList.add('hide')
    userInfo.classList.add('hide')
    title.textContent = 'xixcurrency - User' 
    
})

addInf.addEventListener('click', function(){
    userDetails.classList.add('hide')
    userInfo.classList.remove('hide')
    
})
addInfo.addEventListener('click', function(){
    userDetails.classList.add('hide')
    userInfo.classList.remove('hide')
    
})

withd.addEventListener('click', function(){
    user.classList.remove('selected')
    home.classList.remove('selected')
    withdraw.classList.add('selected')
    crypto.classList.remove('selected')
    funds.classList.remove('selected')
    dashboard.classList.add('hide')
    withdrawa.classList.remove('hide')
    userDetails.classList.add('hide')
    fundsss.classList.add('hide')
    cryptoDetails.classList.add('hide')
    cryptocurrencies.classList.add('hide')
    userInfo.classList.add('hide')
    title.textContent = 'xixcurrency - Withdraw' 
})
withdraw.addEventListener('click', function(){
    user.classList.remove('selected')
    home.classList.remove('selected')
    withdraw.classList.add('selected')
    crypto.classList.remove('selected')
    funds.classList.remove('selected')
    dashboard.classList.add('hide')
    withdrawa.classList.remove('hide')
    userDetails.classList.add('hide')
    fundsss.classList.add('hide')
    cryptoDetails.classList.add('hide')
    cryptocurrencies.classList.add('hide')
    userInfo.classList.add('hide')
    title.textContent = 'xixcurrency - Withdraw' 
})
cryp.addEventListener('click', function(){
    home.classList.remove('selected')
    user.classList.remove('selected')
    withdraw.classList.remove('selected')
    crypto.classList.add('selected')
    funds.classList.remove('selected')
    dashboard.classList.add('hide')
    withdrawa.classList.add('hide')
    userDetails.classList.add('hide')
    cryptoDetails.classList.remove('hide')
    cryptocurrencies.classList.remove('hide')
    fundsss.classList.add('hide')
    userInfo.classList.add('hide')
    coinType.classList.remove('hide')
    selectCoin.classList.add('hide')
    title.textContent = 'xixcurrency - Crypto'
    bitCoin.classList.add('hide')
    ethCoin.classList.add('hide')
    binanceCoin.classList.add('hide')
    liteCoin.classList.add('hide')
    barBitImage.classList.add('hide')
    barEthImage.classList.add('hide')
    barBinanceImage.classList.add('hide')
    barLiteImage.classList.add('hide')
    eth.classList.remove('bit-design')
    bit.classList.remove('bit-design')
    binance.classList.remove('bit-design')
    lite.classList.remove('bit-design')
    
})
crypto.addEventListener('click', function(){
    home.classList.remove('selected')
    user.classList.remove('selected')
    withdraw.classList.remove('selected')
    crypto.classList.add('selected')
    funds.classList.remove('selected')
    dashboard.classList.add('hide')
    withdrawa.classList.add('hide')
    userDetails.classList.add('hide')
    cryptoDetails.classList.remove('hide')
    cryptocurrencies.classList.remove('hide')
    fundsss.classList.add('hide')
    userInfo.classList.add('hide')
    coinType.classList.remove('hide')
    selectCoin.classList.add('hide')
    title.textContent = 'xixcurrency - Crypto'
    bitCoin.classList.add('hide')
    ethCoin.classList.add('hide')
    binanceCoin.classList.add('hide')
    liteCoin.classList.add('hide')
    barBitImage.classList.add('hide')
    barEthImage.classList.add('hide')
    barBinanceImage.classList.add('hide')
    barLiteImage.classList.add('hide')
    eth.classList.remove('bit-design')
    bit.classList.remove('bit-design')
    binance.classList.remove('bit-design')
    lite.classList.remove('bit-design')
    
})
coinType.addEventListener('click', function(){
    dashboard.classList.add('hide')
    withdrawa.classList.add('hide')
    selectCoin.classList.remove('hide')
    cryptoDetails.classList.add('hide')
    userDetails.classList.add('hide')
    fundsss.classList.add('hide')
    userInfo.classList.add('hide')
    
})


bit.addEventListener('click', function(){
    bit.classList.toggle('bit-design')
    eth.classList.remove('bit-design')
    binance.classList.remove('bit-design')
    lite.classList.remove('bit-design')

    
        
      
})

eth.addEventListener('click', function(){
     eth.classList.toggle('bit-design')
     bit.classList.remove('bit-design')
     binance.classList.remove('bit-design')
     lite.classList.remove('bit-design')
    
 })

 binance.addEventListener('click', function(){
    eth.classList.remove('bit-design')
    bit.classList.remove('bit-design')
    binance.classList.toggle('bit-design')
    lite.classList.remove('bit-design')
 })

 lite.addEventListener('click', function(){
    eth.classList.remove('bit-design')
    bit.classList.remove('bit-design')
    binance.classList.remove('bit-design')
    lite.classList.toggle('bit-design')
 })



funds.addEventListener('click', function(){
    home.classList.remove('selected')
    user.classList.remove('selected')
    withdraw.classList.remove('selected')
    crypto.classList.remove('selected')
    funds.classList.add('selected')
    dashboard.classList.add('hide')
    withdrawa.classList.add('hide')
    userDetails.classList.add('hide')
    cryptoDetails.classList.remove('hide')
    fundsss.classList.remove('hide')
    cryptocurrencies.classList.add('hide')
    userInfo.classList.add('hide')
    title.textContent = 'xixcurrency - Funds'
    fund.classList.remove('hide')
    fundForm.classList.add('hide') 

    payOpt.classList.remove('bit-design')
        zelleOpt.classList.remove('bit-design')
        appleOpt.classList.remove('bit-design')
        cashOpt.classList.remove('bit-design')
    
})



addCrypto.addEventListener('click', function(){
    if(bit.classList.contains('bit-design')){
        selectCoin.classList.add('hide')
        cryptoDetails.classList.remove('hide')
        coinType.classList.add('hide')
        bitCoin.classList.remove('hide')
        barBitImage.classList.remove('hide')
        ethCoin.classList.add('hide')
        barEthImage.classList.add('hide')
        binanceCoin.classList.add('hide')
        barBinanceImage.classList.add('hide')
        liteCoin.classList.add('hide')
        barLiteImage.classList.add('hide')
    }

    if(eth.classList.contains('bit-design')){
        selectCoin.classList.add('hide')
        cryptoDetails.classList.remove('hide')
        coinType.classList.add('hide')
        bitCoin.classList.add('hide')
        barBitImage.classList.add('hide')
        ethCoin.classList.remove('hide')
        barEthImage.classList.remove('hide')
        binanceCoin.classList.add('hide')
        barBinanceImage.classList.add('hide')
        liteCoin.classList.add('hide')
        barLiteImage.classList.add('hide')
    }
    if(binance.classList.contains('bit-design')){
        selectCoin.classList.add('hide')
        cryptoDetails.classList.remove('hide')
        coinType.classList.add('hide')
        bitCoin.classList.add('hide')
        barBitImage.classList.add('hide')
        ethCoin.classList.add('hide')
        barEthImage.classList.add('hide')
        binanceCoin.classList.remove('hide')
        barBinanceImage.classList.remove('hide')
        liteCoin.classList.add('hide')
        barLiteImage.classList.add('hide')
    }
    if(lite.classList.contains('bit-design')){
        selectCoin.classList.add('hide')
        cryptoDetails.classList.remove('hide')
        coinType.classList.add('hide')
        bitCoin.classList.add('hide')
        barBitImage.classList.add('hide')
        ethCoin.classList.add('hide')
        barEthImage.classList.add('hide')
        binanceCoin.classList.add('hide')
        barBinanceImage.classList.add('hide')
        liteCoin.classList.remove('hide')
        barLiteImage.classList.remove('hide')
    }

})




zelleOpt.addEventListener('click', function(){
        zelleOpt.classList.toggle('bit-design')
        payOpt.classList.remove('bit-design')
        appleOpt.classList.remove('bit-design')
        cashOpt.classList.remove('bit-design')
})

payOpt.addEventListener('click', function(){
    
        payOpt.classList.toggle('bit-design')
        zelleOpt.classList.remove('bit-design')
        appleOpt.classList.remove('bit-design')
        cashOpt.classList.remove('bit-design')
        
    })
    appleOpt.addEventListener('click', function(){
    
        appleOpt.classList.toggle('bit-design')
        payOpt.classList.remove('bit-design')
        zelleOpt.classList.remove('bit-design')
        cashOpt.classList.remove('bit-design')
        
    })
    cashOpt.addEventListener('click', function(){
        
        appleOpt.classList.remove('bit-design')
        cashOpt.classList.toggle('bit-design')
        payOpt.classList.remove('bit-design')
        zelleOpt.classList.remove('bit-design')

})


fundButton.addEventListener('click', function(){
    if(  payOpt.classList.contains('bit-design') || zelleOpt.classList.contains('bit-design')|| appleOpt.classList.contains('bit-design') || cashOpt.classList.contains('bit-design')) { 
    fund.classList.add('hide')
    fundForm.classList.remove('hide')}

    if(payOpt.classList.contains('bit-design')){
        paypalName.classList.remove('hide')
        barPaypalImage.classList.remove('hide')
        barZelleImage.classList.add('hide')
        zelleName.classList.add('hide')
        barappleImage.classList.add('hide')
        applepayName.classList.add('hide')
        cashappName.classList.add('hide')
        barcashappImage.classList.add('hide')
    }
    
    if(zelleOpt.classList.contains('bit-design')){
        zelleName.classList.remove('hide')
        barZelleImage.classList.remove('hide')
        barPaypalImage.classList.add('hide')
        paypalName.classList.add('hide')
        barappleImage.classList.add('hide')
        applepayName.classList.add('hide')
        cashappName.classList.add('hide')
        barcashappImage.classList.add('hide')
    }
    if(cashOpt.classList.contains('bit-design')){
        zelleName.classList.add('hide')
        barZelleImage.classList.add('hide')
        barPaypalImage.classList.add('hide')
        paypalName.classList.add('hide')
        cashappName.classList.remove('hide')
        barcashappImage.classList.remove('hide')
        barappleImage.classList.add('hide')
        applepayName.classList.add('hide')
    }
    if(appleOpt.classList.contains('bit-design')){
        zelleName.classList.add('hide')
        barZelleImage.classList.add('hide')
        barPaypalImage.classList.add('hide')
        paypalName.classList.add('hide')
        cashappName.classList.add('hide')
        barcashappImage.classList.add('hide')
        applepayName.classList.remove('hide')
        barappleImage.classList.remove('hide')
    }
})