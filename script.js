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
let tr1 = document.createElement("tr");
tr.setAttribute("id","ans");
tr1.setAttribute("id","ans");
const getSum = () => {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
		tr.innerText = sum+10;
		tr1.innerText = sum - 67;
	}	
};
table.appendChild(tr);
table.appendChild(tr1);
getSumBtn.addEventListener("click", getSum);

