var arr[
    {dp:"unspash se link uthalo", img:"dusri img ki link lgado"}
    {dp:"img lgado koi bhi", img:"img lgado koi bhi"}
    {dp:"img lgado koi bhi", img:"img lgado koi bhi"}                // ek array bnaya with objects 
]

var clutter                                  // variable ko declare to kr diya pr ye memory me abhi undefined hoke betha h to isko initialize krna jruri h tbhi defined hoga 
var clutter = ""
arr.forEach(function(elem, idx){               // foreach arr isliye chlaya h taki hme nhi pta kbhi bhi kitni bhi story ho skti h lgi usko arr dekhega 
    clutter += '<div class="story">
    // <img src="unsplash se uthalo link" alt="">
    // ${} iska mtlb h ki aap js ka code likh skte ho isme kuch bhi or elem.dp ka mtlb jb dusri baar loop chlega to dusri photo load hogi
    <img id="${idx}" src="${elem.dp}" alt="">             
</div>                         // hum add on kr rhe h jb bhi loop dusri baar chle to add ho
})                               // elem ka mtlb h jitna bda array h utni baar loop chlega
// console.log(clutter)
document.querySelector("#storiyan").innerHTML = clutter // storiyan ko dal diya clutter me

var grow = 0

document.querySelector("#storiyan").addEventListener("click", function(dets){      // function ke ander parameters dete h jese ki dets h iska mtlb h ki jb bhi kisi element pe click kr rhe h to uske sath kya kya ghtnaye ho rhi h dets ke sath target or lga doge to jis bhi image pe click kroge wo dikha dega console sec me
    document.querySelector("#full-scr").style.display= 'block'
    document.querySelector("#full-scr").style.backgroundImage= `url(${arr[dets.target.id].img})`

    setTimeout(function(){
        document.querySelector("#full-scr").style.display = 'none'
    },3000)                       // setTime fun use hota h delay dene ke liye 3000 mili sec mtlb 3 sec

    if(grow<100){
        setInterval(function(){
            document.querySelector("#growth").style.width = ${grow}%
            grow++              // grow = grow + 1
        },30)
    }else{
        grow = 0                // if-else condition
    }
})
//  other way :- console.log(arr[dets.target.id].img)

// other way :- console.log(dets.target.id)

setInterval(function(){
    console.log("Hello")
},2000)               // setInterval fun ka use h kihr 2 sec baad chlta rhega loop ki trh

`` // back tag ye only JS me use hota h pr tino hote h JS likhne ke liye hi
''  // single quote
""  // double quotes
"sachin"+abc
`sachin${abc}`     // in dono ka ek hi mtlb h chahe koi sa bhi use krlo pr more priority niche wala


