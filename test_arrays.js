// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const data = {
    id: 564,
    uuid: "5e7eb5d3-65aa-4741-9869-7d3cb33ad938",
    name: "Super Store",
    products: [
        {
            name: "Product 1",
            labels: [
                "afdf220c-6f95-45f0-ab05-13d82835e16c", 
                "6deb267a-dd9d-4e92-b9e9-a0c95cefbcd1", 
                "7fcd138b-623b-4faf-81d7-1bb926975f1a"
            ]
        },
        {
            name: "Product 2",
            labels: [
                "6deb267a-dd9d-4e92-b9e9-a0c95cefbcd1",
                "f709fd4e-4cde-4a92-9f4a-7e8476d0dc2e", 
            ]
        },
        {
            name: "Product 3",
            labels: [
                "47a15f97-080c-4582-b351-8792f3e191e7", 
                "7fcd138b-623b-4faf-81d7-1bb926975f1a", 
                "7fcd138b-623b-4faf-81d7-1bb926975f1a",
                "f709fd4e-4cde-4a92-9f4a-7e8476d0dc2e"
            ]
        },
        {
            name: "Product 4",
            labels: [
                "ac362642-a4a8-42c7-84af-a38c90bd9b32"
            ]
        }
    ]
};

//Total number of products:
const numberOfProducts=data.products.length;

//Total number of labels:
let numberOflabels=0;
data.products.forEach((item)=>{
    numberOflabels=numberOflabels+item.labels.length;
});
//Total number of Unique Labels:
let all_labels=[];
data.products.forEach((item)=>{
    all_labels.push(...item.labels);
})

function countUnique(iterable) {
  return new Set(iterable).size;
}

let uniquecount=countUnique(all_labels)

//Products having f709fd4e-4cde-4a92-9f4a-7e8476d0dc2e label
let specific_products= data.products.filter((item)=>{
 if(item.labels.includes('f709fd4e-4cde-4a92-9f4a-7e8476d0dc2e'))
 {
    return item;
 }
});








