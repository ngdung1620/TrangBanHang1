var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://dienthoaihay.vn/images/products/2020/06/25/large/iphone-7-plus-bac_1593097981.jpg',
        description: 'Sản phẩn là do apple sản xuất',
        price: 50,
        inventory: 34,
        rating: 4,
    },
    {
        id:2,
        name: 'Oppo s9 Pro',
        image: 'https://images.priceoye.pk/oppo-f9-pakistan-priceoye-a1oc5.jpg',
        description: 'Sản phẩn là do Việt Nam sản xuất',
        price: 5000,
        inventory: 3,
        rating: 5
    },
    {
        id: 3,
        name: 'Samsung galaxy S9 Plus',
        image: 'https://didongviet.vn/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/s/a/samsung-galaxy-s9-plus-den-didongviet.png',
        description: 'Sản phẩn là do samsung sản xuất',
        price: 56,
        inventory: 67,
        rating: 3
    }
 ];
 const products=(state=initialState, action) => {
     switch (action.type) {
        default: return [...state];
     }
 }
 export default products;