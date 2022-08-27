function findMissingScore(arr){
    let diffArray = []
    if(arr.length<6){
        return 'sample size does not meet the size requirement'
    }
    for(let i = arr.length-4;i<arr.length-1;i++){
    
       let t = arr[i+1]-arr[i]
       //console.log(`${arr[i+1]} ${arr[i]}`)
       diffArray.push(t)
      
        
    }
    let z =  Math.max(...diffArray)
    let u =diffArray.indexOf(z)
    //console.log(u)
    if(u==0){
        var score = z/2 + arr[arr.length-4]
        var position= arr.length-3
    }else if(u===1){
        var score =  z/2 + arr[arr.length-3]
        var position = arr.length-2
    }else if(u===2){
      var score = z/2 + arr[arr.length-2]
       var position = arr.length-1
    }
    // console.log(score)
    // console.log(position)
    return `The missing score is ${score} found at position ${position}`
}

let j = [10,20,30,40,60,70]
console.log(findMissingScore(j))
