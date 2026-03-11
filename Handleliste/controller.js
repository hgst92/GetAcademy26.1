//CONTROLLER
function addItem() {

    const input = document.getElementById("itemInput");
    let value = input.value.trim(); 

    if (value === "") return;

    model.items.push({
        name: value
    });

    input.value = "";

    updateView();
}

function removeItem(index) {

    model.items.splice(index, 1);

    updateView();

}