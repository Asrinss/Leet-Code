function lemonadeChange(bills) {
    let change = {
        5: 0,
        10: 0,
        20: 0
    }
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {  // burada bills[1] yerine bills[i] kullanılmalı
            change[5] += 1
        }
        else if (bills[i] === 10) {
            change[10] += 1 
            if (change[5] >= 1) {
                change[5] -= 1
            } else {
                return false 
            }
        }
        else if (bills[i] === 20) {
            change[20] += 1
            if (change[5] >= 1 && change[10] >= 1) {
                change[5] -= 1
                change[10] -= 1 
            } else if (change[5] >= 3) {  // burada change[5] >= 3 olmalı
                change[5] -= 3
            } else {
                return false; 
            }
        }
    }
    return true;
}

console.log(lemonadeChange([5, 5, 10])); // doğru şekilde çalışacaktır.
