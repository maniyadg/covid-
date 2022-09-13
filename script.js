let container = document.createElement("div");
container.setAttribute("class","container");
container.style.marginTop="50px";
container.style.textAlign="center";

let input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","input");
input.classList.add("form","mr-sm-2")

let search = document.createElement("button");
search.setAttribute("type","button");
search.classList.add("btn","btn-outline-success","my-2","my-sm-0");
search.innerHTML="Search";
search.addEventListener("click",foo);

let main=document.createElement("div")
main.setAttribute("id","main")
main.style.textAlign="center"
main.style.marginLeft="100px"

let active=document.createElement("div")
active.setAttribute("id","active")

let Recovered=document.createElement("div")
Recovered.setAttribute("id","Recovered")

let Deaths=document.createElement("div")
Deaths.setAttribute("id","Deaths")

document.body.append(container,main)
container.append(input,search,active,Recovered,Deaths)

async function foo(){
    let countryname = document.getElementById("input").value;
    let url = `https://api.covid19api.com/dayone/country/${countryname}`;
    let res = await fetch(url)
    let res1 = await res.json()
    let index = res1.length-1;
    main.innerHTML=`<div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header"></div>
    <div class="card-body text-dark">
      <h5 class="card-title">Total Active Case :${res1[index].Active}</h5>
      <h5 class="card-title">Total Active Case :${res1[index].Recovered}</h5>
      <h5 class="card-title">Total Active Case :${res1[index].Deaths}</h5>
    </div>
  </div>`
}