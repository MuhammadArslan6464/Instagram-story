var arr = [
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvg5x-CHfgyx9v94ctKtF_xO0z4rhNzt8cUg&usqp=CAU", story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIx4WVRuwa5uC7Zicqrc8lHNeFootsabNhjw&usqp=CAU"},

    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZ_q0PgMmDNFBfjT_gX0f4S8w86kh1gJ7Z5n_tV2BC6vs-NkOs9ZgTl14QgH4DyIXVx4&usqp=CAU", story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDaxPPVviznnyBeB-4Cep1GXIqTZURn9-xot1D-jSCAaT0UHmEgF1HGfFOKKh0vId5ik&usqp=CAU"},

    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfO4UJoKtXHKs5uHwFRQqUz_TbzbMS-BaOg&usqp=CAU", story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGp5a35h8c6vATZztE-OWLYnsgCyKy7-4-g&usqp=CAU"},

    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-32lv9ku3nAC0HvzrVwztgY18fJ9jJD2oXQ&usqp=CAU", story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Zo0tCVHP0sHkDt66Vr4aSe_AqixHHXm8hw&usqp=CAU"},

    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6E2z-xIEIpQIvzOU5L3ksIl6g8MhYPIP8HQ&usqp=CAU", story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlraRvJ-pAzQgVmZggbr1J1bkkCTtsmCs0_w&usqp=CAU"},

    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUfb6PjkaanV4wse8c6nHBSy0oC7e1cHCmvIrKBh2bn8-mh0FD-To1GZabsw_eGOrN_JA&usqp=CAU", story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8i0PuXIg6sCb1s03ZBhNMl7Zh0fJrVeP-pAgJ2akQlpJdzMIUB528spZ3Rv-XFdYIt_8&usqp=CAU"},
]

var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idex){
    clutter += `<div class="story">
    <img id="${idex}" src="${elem.dp}" alt="">
</div>`
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets){
    // console.log(arr[dets.target.id].story);
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";
    },3000)
});