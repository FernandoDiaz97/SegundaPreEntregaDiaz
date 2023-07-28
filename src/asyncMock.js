const products = [
    {
        id: '1',
        name: "Reaven",
        price: 800,
        category: "gaming",
        img: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/452ad6ce-a440-4540-b511-9f4b6a8cadbe.3a6cdd79b401afc038e43e1ae2820f0d.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        stock: 20,
        description: "Procesador intel core I5 13thGen, RTX 3080, 32Gb RAM DDR4, 1Tb SSD M.2"
    },
    {
        id: '2',
        name: "Phonex",
        price: 600,
        category:"oficina",
        img: "https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/5/U/5U0S2LT-1_T1679650396.png",
        stock: 20,
        description: "Razen 5600, 16Gb RAM DDR4, 2Tb HDD"

    },
    
    {

        id: '3',
        name: "Killjoy",
        price: 750,
        category:"accesorio",
        img:"https://cdn.shopify.com/s/files/1/0549/2681/products/glorious_model_o_minus_black_matte_5.webp?v=1676048814",
        stock: 20,
        description: "Mouse con teclas programable, luces RGB, sensor optico"

    },
    {
        id: '4',
        name: "Sova",
        price: 1000,
        category: "gaming",
        img: "https://media.mipc.com.mx/catalog/product/cache/7290563697b2fb024a6e1f3ba6ae4586/g/m/gm-26654-m51_gabinete_1.png",
        stock: 20,
        description: "Razen 5600X, RTX 4090, 32Gb RAM DDR5, 2Tb SSD M.2"
    },
    {
        id: '5',
        name: "Omen",
        price: 500,
        category: "gaming",
        img: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/4526f970-a9c6-48e7-b80a-9cb2c24ea423.cb1c58a4caa51b6fe2cde58cfbccd67c.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        stock: 20,
        description: "Intel core I5 11th Gen, RTX 2060 Super, 16GB RAM DDR4, 500GB SSD, 1Tb HDD"
    },
    {
        id: '6',
        name: "Breach",
        price: 500,
        category: "oficina",
        img: "https://www.nicepng.com/png/full/408-4085610_imagenes-de-computadoras-png-computadoras-de-escritorio-windows.png",
        stock: 20,
        description: "Intel Core I3 10th Gen, 8Gb RAM DDR4, 1Tb HDD"
    },
    {
        id: '7',
        name: "Brimston",
        price: 500,
        category: "oficina",
        img: "https://www.pngmart.com/files/7/Desktop-Computer-PNG-Pic.png",
        stock: 20,
        description: "Razen Atlhon, 8GB RAM DDR4, 1TB HDD"
    },
    {
        id: '8',
        name: "Reyna",
        price: 500,
        category: "accesorio",
        img: "https://m.media-amazon.com/images/I/71UyJKGFb3L._AC_SL1200_.jpg",
        stock: 20,
        description: "Teclado mecanico iluminado RGB, switches azules,almohadilla para descanso"
    },
    {
        id: '9',
        name: "Neon",
        price: 500,
        category: "accesorio",
        img: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/2fbb902f-107d-444f-a3fd-31459837a3d4.8347c08c24ab8bc595d2942eec9d0f9d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        stock: 20,
        description: "Audifonos Logitech, inalambricos, Iluminacion RGB, Recargables"
    },
    {
        id: '10',
        name: "Jett",
        price: 500,
        category: "accesorio",
        img: "https://m.media-amazon.com/images/I/610z8Fj9wXL._AC_SL1200_.jpg",
        stock: 20,
        description: "MousePad, 3M x 1M, Anti grip, Iluminacion RGB"
    },

  

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    } )
}

export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise ((resolve)=>{
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === productCategory))
        },500)
    })
}
 