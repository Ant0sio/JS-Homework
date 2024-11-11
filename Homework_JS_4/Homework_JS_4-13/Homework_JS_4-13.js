


function exchange(sumUAH,currencyValues,exchangeCurrency)
{let choosenCurrency;
    for (const item of currencyValues) {
        if (item.currency===exchangeCurrency){
            choosenCurrency=item
        }

    }
let result=sumUAH/choosenCurrency.value
return result


}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));