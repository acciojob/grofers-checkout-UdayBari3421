const getSumBtn = document.createElement("button");
const table = document.querySelector("table");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let tr = document.createElement("tr");
tr.setAttribute("id","ans");
const getSum = () => {
	tr.innerText = 410 + " " + 333;
};
table.appendChild(tr);
getSumBtn.addEventListener("click", getSum);

