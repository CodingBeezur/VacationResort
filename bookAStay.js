window.onload = function() {
    // gathering personal details 
    const form = document.getElementById('form');
    form.onsubmit = getForm;
}


function getForm(event) {
    event.preventDefault();

    // console.log(event); testing to submit is working
    // console.log("formSubmitted")

    // get details and event details
    let firstName = document.getElementById('firstName');
    let customerEmail = document.getElementById('customerEmail');
    let phoneNumber = document.getElementById('phoneNumber');
    let checkInDate = document.getElementById('checkInDates')
    let numberOfNights = document.getElementById('numberOfNights'); 


    // get discount details 
    const militaryDiscountRadio = document.getElementById('militaryDiscount')
    const seniorDiscountRadio = docment.getElementById('seniorDiscount')
    const noDiscountRadio = document.getElementById('noDiscount');

    // get bedSize details
    let queenSize = document.getElementById('queenSizedBed');
    let kingSize = document.getElementById('kingSizedBed');
    let suiteSize = document.getElementById('suitSizeBed');
}

let 

function  discountDetails() {

    if (militaryDiscountRadio.checked) {
        let militaryDiscountPrice = .20 //20% discount 
    }
}

