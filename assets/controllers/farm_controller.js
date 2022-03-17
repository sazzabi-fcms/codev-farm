import {Controller} from '@hotwired/stimulus';

export default class extends Controller {
    connect() {
        const barnEl = document.getElementById('barn');
        const growBarnButton = document.querySelector('.js-grow-barn');
        growBarnButton.addEventListener('click', (event) => {
            event.preventDefault();

            barnEl.innerHTML = barnEl.innerHTML + barnEl.dataset.animal;
        });
    }
}
