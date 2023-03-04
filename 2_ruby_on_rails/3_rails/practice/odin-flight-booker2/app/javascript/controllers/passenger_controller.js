import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["count", "count_header", "form_body", "details"]
    add() {
        let passenger_count = (this.countTarget.innerHTML);
        this.countTarget.innerHTML = (parseInt(passenger_count) + 1).toString();

        //Instantiate the form with the existing HTML 
        let form_body = document.querySelector("#form_body");
        let template = document.querySelector("#details")

        //Clone the new inputs and insert it into the table
        let clone = template.content.cloneNode(true);
        let ch = clone.querySelector("#count_header");
        ch.innerHTML = parseInt(this.countTarget.innerHTML);
        form_body.appendChild(clone);
    }
}
