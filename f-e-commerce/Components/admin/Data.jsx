
 export const Data={
  "categories": [
    {
      "value": 40,
      "heading": "Laptops"
    },

    {
      "value": 100,
      "heading": "Shoes"
    },
    {
      "value": 60,
      "heading": "Cameras"
    },
    {
      "value": 60,
      "heading": "Jeans"
    },
    {
      "value": 20,
      "heading": "J"
    },
  ],
  "infoo" : [
    {
      heading: "year 2020",
      amount: 78775,
      percent: "40",
    },
    {
      heading: "years 2021",
      amount: 784775,
      percent: "-10",
    },
    {
      heading: "year 2022",
      amount: 78775,
      percent: "60",
    },
    {
      heading: "year 2023",
      amount: 7775,
      percent: "-30",
    },
  ],
};
export const user = [
  {
    id: "sjs8i3",
    name: "rahul kumar",
    email: "rahul@gmail.com",
    phone: 93938937,
    address: "sameli katihar bihar 854101",
    transaction: [{ id: "ksdnfkjsdfx" }],
  },
  {
    id: "w04j3fj3",
    name: "vikas kumar",
    email: "vikas@gmail.com",
    phone: 93938937,
    address: "sameli katihar bihar 854101",
    transaction: [{ id: "kssdfx" }],
  },
  {
    id: "ywj3937g",
    name: "priyanshu kumar",
    email: "priyanshu@gmail.com",
    phone: 93938937,
    address: "sameli katihar bihar 854101",
    transaction: [{ id: "sdsdcvsssdsd" }],
  },
];
export const transaction = [
  {
    _id: "ksdnfkjsdfx",
    amount: " 4000",
    item:"2",
    discount: "300",
    status: "Processing",
    userId: "sjs8i3",
    productId: [{id:"sdfsdda",quantity: "4",},{id:"2we3",quantity: "4",}],
    action: "/admin/transaction/ksdnfkjsdfx",
  },
  {
    _id: "kssdfx",
    amount: "400",
    item:"2",
    discount: "300",
    status: "Delivered",
    userId: "w04j3fj3",
    productId: [{id:"sdfsd", quantity: "4"}, {id:"sdfsdda", quantity: "4"}],
    action: "/admin/transaction/kssdfx",
  },
  {
    _id: "sdsdcvsssdsd",
    amount: "1300",
    item:"3",
    discount: "100",
    status: "Shipped",
    userId: "ywj3937g",
    productId: [{id:"2we3",quantity: "2"}, {id:"sdfsdda",quantity: "2"} ,{id:"sdfsd",quantity:"5"}],
    action: "/admin/transaction/sdsdcvsssdsd",
  },
];
export const products =[  {
  image:
    "https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   productDescration:"(8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)",
    productname: "Apple 2020 Macbook Air Apple M1 - ",
    productprice: "322",
    productstock: "8",
  action: "/admin/product/manage/2we3",
  id:"2we3"
},
{
  image:
    "https://images.unsplash.com/photo-1612506001235-f0d0892aa11b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   productDescration:"this is beautifull",
    productname: "girl doll",
    productprice: "343",
    productstock: "8",
    action: "/admin/product/manage/sdfsd",
    id:"sdfsd"
},
{
  image:
    "https://images.unsplash.com/photo-1647719803189-a34eeedb1779?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   productDescration:"this is beautifull",
    productname: " chair",
    productprice: "1500",
    productstock: "5",
    action: "/admin/product/manage/sdfsdda",
    id:"sdf92b3da"
},
{
  image:
    "https://rukminim2.flixcart.com/image/612/612/xif0q/printer/x/l/e/-original-imagnuwegzdxxdmq.jpeg?q=70",
   productDescration:"this is beautifull",
    productname: "HP LaserJet Pro MFP M126nw Multi-function WiFi Monochro...",
    productprice: "1500",
    productstock: "5",
    action: "/admin/product/manage/sdfsdda",
    id:"sdf63da"
},
{
  image:
    "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/m/z/z/m-t599-tmbl-eyebogler-original-imagh42htubuygqy.jpeg?q=70&crop=false",
   productDescration:"Men Checkered Hooded Neck Cotton Blend Blue T-Shirt",
    productname: "EyeBogler ",
    productprice: "100",
    productstock: "5",
    action: "/admin/product/manage/sdfsdda",
    id:"sdfsd78"
},];