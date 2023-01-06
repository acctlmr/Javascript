class MedEntry{

    constructor(MedName, MedCode, MedQty) {
        this.MedName = MedName;
        this.MedCode = MedCode;
        this.MedQty= MedQty;
    }
}

class MedList{

    addMed(entry) {
        const listData = document.querySelector(".Med-list-data");
        const listContainer = document.createElement("ul");
        listContainer.setAttribute("id", "list");

        listContainer.innerHTML += `
        <li>${entry.MedName}</li>
        <li>${entry.MedCode}</li>
        <li>${entry.MedQty}</li>
        <i class="fas fa-trash"></i>
        `;
        listData.appendChild(listContainer);
    }

    //Validation Error function
    ValidationError() {
        document.querySelector(".validate-error").classList.add("show-validation");

        setTimeout(() => {
            document.querySelector(".validate-error").classList.remove("show-validation");
        },2500)

        
    }

    clearMedInputs()
    {
      //  document.querySelector("#name").value = "";
       // document.querySelector("#code").value = "";
      //  document.querySelector("#qty").value = "";
        [
            document.querySelector("#name").value,
            document.querySelector("#code").value,
            document.querySelector("#qty").value
        ] = ["", "", ""];
    }

    ValidationSuccess() {
        
        document.querySelector(".validate-success").classList.add("show-validation");

        setTimeout(() => {
            document.querySelector(".validate-success").classList.remove("show-validation")
        }, 1500);
    }

}

class StoreMed
{
    //Get Meds from localStorage
    static getMed() {

        let Meds;

        if (localStorage.getItem("Meds") === null)
        {
            Meds = [];
        } else {
            Meds=JSON.parse(localStorage.getItem("Meds"));
        }
        return Meds;

    }

    //Adds Meds
    static addMed(entry)
    {
        const MedsList = StoreMed.getMed();
        
        MedsList.push(entry);

        localStorage.setItem("Meds",JSON.stringify(MedsList));
    }

    //Display Meds from local Storage
    static displayMed() {
        
        const MedsList = StoreMed.getMed();
        
        MedsList.forEach((Med) => {
           
            //Instantiating the MedList class
            const list = new MedList();
            list.addMed(Med);
            
        });
    }

    //Removeing Meds from the local localStorage
    static removeMed(clickedMed) {
        
        const MedsList = StoreMed.getMed();

        MedsList.forEach((Med, index) => {
           
            if (Med.MedName === clickedMed) {
                MedsList.splice(index, 1);
            }
        });

        localStorage.setItem("Meds",JSON.stringify(MedsList));

    }
}



//Events

document.addEventListener("DOMContentLoaded", StoreMed.displayMed);

const form = document.querySelector(".Med-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // let MedName = document.querySelector("#name").value;
    // let MedCode = document.querySelector("#code").value;
    // let MedQty = document.querySelector("#qty").value;
    
    let [MedName, MedCode, MedQty] = [
        document.querySelector("#name").value,
        document.querySelector("#code").value,
        document.querySelector("#qty").value
    ];
    // console.log(MedName + " " + MedCode + " " + MedQty);
    
    //Instantiating the MedList class 
    const list = new MedList();

    //Instantiating the MedEntry class
    const entry = new MedEntry(MedName, MedCode, MedQty);

    //Validate the form if one or more of the input fields are empty
    if (MedName === "" || MedCode === "" | MedQty === "") {
        list.ValidationError();
    } else {
        list.addMed(entry);
        list.clearMedInputs();
        list.ValidationSuccess();

        StoreMed.addMed(entry);
    }
    
});


//Deleting listed Meds

const listData = document.querySelector(".Med-list-data");

listData.addEventListener("click", function (e) {
   
    if (e.target.className === "fas fa-trash")
    {
        const trash = e.target.parentNode;//<ul id="list">
        
        //console.log(e.target.previousElementSibling.previousElementSibling.//previousElementSibling.textContent);

        const clickedMed = e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

        StoreMed.removeMed(clickedMed);
        trash.remove();
    }

});
