const products = [
    {
        id: '1',
        name: "Reaven",
        price: 500,
        category: "gaming",
        img: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/452ad6ce-a440-4540-b511-9f4b6a8cadbe.3a6cdd79b401afc038e43e1ae2820f0d.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        stock: 20,
        description: "Descricion de Reaven"
    },
    {
        id: '2',
        name: "Phonex",
        price: 600,
        category:"oficina",
        img: "https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/5/U/5U0S2LT-1_T1679650396.png",
        stock: 20,
        description: "Descricion de Phonex"

    },
    
    {

        id: '3',
        name: "Killjoy",
        price: 750,
        category:"accesorio",
        img:"https://cdn.shopify.com/s/files/1/0549/2681/products/glorious_model_o_minus_black_matte_5.webp?v=1676048814",
        stock: 20,
        description: "Descricion de Killjoy"

    }

  

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
 