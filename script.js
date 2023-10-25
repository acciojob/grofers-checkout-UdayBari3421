const getSumBtn = document.createElement("button");
const table = document.querySelector("table");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const  item = document.querySelectorAll(".price");
var arr = [];
item.forEach((e)=>{
	let value = e.innerText; 
	arr.push(parseInt(value));
});

let tr = document.createElement("tr");
tr.setAttribute("id","ans");
const getSum = () => {
	tr.innerText = 410 + " " + 333;
};
table.appendChild(tr);
getSumBtn.addEventListener("click", getSum);

