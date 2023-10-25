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
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
		tr.innerText = sum+10;
	}	
};
table.appendChild(tr);
getSumBtn.addEventListener("click", getSum);

