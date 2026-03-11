//VIEW
updateView()
function updateView() {

    let html = "";

    for (let i = 0; i < model.items.length; i++) {
        html += `
        <li>
            ${model.items[i].name}
            <button onclick="removeItem(${i})">X</button>
            </li>
            `;
    }
            document.getElementById("shoppingList").innerHTML = html;
}