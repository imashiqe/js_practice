const phones = [
        {name: 'samsung',
        camera: 12,
        Storage: '32gb',
        price: 36000,
        color: 'silver'
        },
        {name: 'wallton',
        camera: 10,
        Storage: '68gb',
        price: 42000,
        color: 'gray'
        },
        {name: 'iphone',
        camera: 12,
        Storage: '32gb',
        price: 110000,
        color: 'silver'
        },
        {name: 'nokia',
        camera: 10,
        Storage: '68gb',
        price: 37000,
        color: 'gray'
        },
        {name: 'motorola',
        camera: 12,
        Storage: '32gb',
        price: 12000,
        color: 'silver'
        },
        {name: 'microsoft',
        camera: 10,
        Storage: '68gb',
        price: 56000,
        color: 'gray'
        },
        {name: 'huawei',
        camera: 12,
        Storage: '32gb',
        price: 46000,
        color: 'silver'
        },
        {name: 'Xiomi',
        camera: 10,
        Storage: '68gb',
        price: 16000,
        color: 'gray'
        },
        {name: 'lenovo',
        camera: 12,
        Storage: '32gb',
        price: 8000,
        color: 'silver'
        },
        {name: 'soony',
        camera: 41,
        Storage: '512gb',
        price: 86000,
        color: 'black'
        }
];

function cheapestPhone(phones){
    let cheapest = phones[0]
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            console.log(phone);
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
