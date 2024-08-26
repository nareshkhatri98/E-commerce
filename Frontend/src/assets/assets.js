import logo from './logo.png'
import add_icon from './add_icon.png'
import order_icon from './order_icon.png'
import upload_area from './upload_area.png'
import parcel_icon from './parcel_icon.svg'
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import cart_icon from  './cart_icon.png'
import menu_icon from './menu_icon.png'
import dropdown_icon from './dropdown_icon.png'
import hero_img from './hero_img.png'

// import image
import p_img1 from './p_img1.png'
import p_img2 from './p_img2.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img52 from './p_img52.png'

export const assets = {
    logo,
    add_icon,
    order_icon,
    upload_area,
    parcel_icon,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    dropdown_icon,
    hero_img
}

export const products = [
    {
        _id: 'aaa',
        name: 'Women Round Neck Cotton Top',
        description: 'demo demo demo demo demo demo',
        price: 100,
        images: [p_img1],
        category: "Women",
        subCategory: "Topwear",
        size: ["S", "M", "L"],
        date: 176657764,
        bestseller: true
    },
    {
        _id: 'bbb',
        name: 'Men Casual Slim Fit Shirt',
        description: 'High-quality fabric, comfortable to wear',
        price: 150,
        images: [p_img2],
        category: "Men",
        subCategory: "Shirts",
        size: ["M", "L", "XL"],
        date: 176659000,
        bestseller: false
    },
    // Adding additional products up to 52
    {
        _id: 'ccc',
        name: 'Women Floral Summer Dress',
        description: 'Lightweight and perfect for summer',
        price: 200,
        images: [p_img3],
        category: "Women",
        subCategory: "Dresses",
        size: ["S", "M", "L", "XL"],
        date: 176660000,
        bestseller: true
    },
    {
        _id: 'ddd',
        name: 'Men Regular Fit Jeans',
        description: 'Comfortable denim jeans with a classic fit',
        price: 120,
        images: [p_img4],
        category: "Men",
        subCategory: "Bottomwear",
        size: ["M", "L", "XL", "XXL"],
        date: 176661000,
        bestseller: false
    },
    // Repeat the pattern to create a total of 52 items
    {
        _id: 'eee',
        name: 'Unisex Sports Cap',
        description: 'Stylish cap for all seasons',
        price: 50,
        images: [p_img5],
        category: "Accessories",
        subCategory: "Caps",
        size: ["One Size"],
        date: 176662000,
        bestseller: true
    },
    {
        _id: 'fff',
        name: 'Women High Heel Sandals',
        description: 'Elegant heels for special occasions',
        price: 180,
        images: [p_img6],
        category: "Women",
        subCategory: "Footwear",
        size: ["6", "7", "8"],
        date: 176663000,
        bestseller: true
    },
    // Add more products following the above format
    {
        _id: 'ggg',
        name: 'Men Leather Wallet',
        description: 'Genuine leather wallet with multiple compartments',
        price: 75,
        images: [p_img7],
        category: "Men",
        subCategory: "Accessories",
        size: ["One Size"],
        date: 176664000,
        bestseller: false
    },
    // Continue until you reach 52 products
    {
        _id: 'zzz',
        name: 'Women Vintage Sunglasses',
        description: 'Retro sunglasses with UV protection',
        price: 90,
        images: [p_img52],
        category: "Accessories",
        subCategory: "Sunglasses",
        size: ["One Size"],
        date: 176699999,
        bestseller: true
    }
];
