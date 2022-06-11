var searchBtn = document.querySelector('#searchBtn');
var searchItem = document.querySelector('#searchItem');
var mainCon = document.querySelector('#mainCon');

var selections = ["all","name","capital","currency","lang","region","subregion"];
var type=`all`;
var search='india';
selections.forEach(ele => {
    document.querySelector(`#${ele}`).addEventListener('click',()=>{
        searchItem.value="";
        document.querySelector('#searchCon').classList.remove('hidden');
        selections.forEach(e=>{
            document.querySelector(`#${e}`).classList.remove('okactive');
        })
        document.querySelector(`#${ele}`).classList.add('okactive');
        type = ele;
        if(ele==="all")
        document.querySelector('#searchCon').classList.add('hidden');
        searchItem.placeholder = `Search ${ele}`
    });
});

searchBtn.addEventListener('click',()=>{
    search = searchItem.value;
    FetchAPI();
})


 var apiData="";

 const apiUrl=`https://restcountries.com/v3.1/`;

 async function FetchAPI() {
	try {
        console.log(`${apiUrl}${type}/${search}`);
		const response = await fetch(`${apiUrl}${type}/${search}`);
		const apiData = await response.json();
        mainCon.innerHTML= JSON.stringify(apiData);
        console.log(apiData);
        console.log("Api Working Successfully");
	} catch 
    {
		console.log("Api Fetching failed");
	}
}

