// assets/controllers/farm_controller.js
import {Controller} from '@hotwired/stimulus';

export default class extends Controller {
    static values = {
        animal: String
    }
    static targets = ['barn'];

    grow(event) {
        event.preventDefault();
        this.barnTarget.innerHTML = this.barnTarget.innerHTML
            + this.animalValue;
    }
}
