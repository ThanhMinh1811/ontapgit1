let arr=[4,2,3,1,9]
for(let i=0; i<arr.length-1;i++){
    for(let j=0; j<arr.length;j++){
        if (arr[i]<arr[j]){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log(arr)


let tong=0
for(let i=0; i<arr.length;i++){
    tong = tong+ arr[i]
};

console.log('Tong cac phan tu trong mang la: ', tong)