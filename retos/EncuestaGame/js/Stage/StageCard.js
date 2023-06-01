import styles from '../../sass/components/_StageCard.scss'


class StageCard extends HTMLElement {
    constructor() {
        super();
        this.stageId = "";
        this.name = "";
        this.info = "";
        this.level = "";
        this.imgBackground = "";
    }

    static get observedAttributes() {
        return ["stageId", "name", "info", "level", "imgBackground"];
    }

    attributeChangedCallback(attribute, oldValue, newValue) {
        // console.log(JSON.parse(newValue));
        switch (attribute) {
            case "stageId":
                this.stageId = newValue;
                break;
            case "name":
                this.name = newValue;
                break;
            case "info":
                this.info = newValue;
                break;
            case "level":
                this.level = newValue;
                break;
            case "imgBackground":
                this.imgBackground = newValue;
                break;
        }
    }

    connectedCallback() {
        const style = document.createElement("style");
        style.textContent = styles;
        // const container = document.createElement("div");

        let shadowRoot = this.attachShadow({ mode: "open" });
        // console.log(this.stageId);
        shadowRoot.innerHTML = `
        <div class="StageCard">
            <h3 class="title">${this.name}</h3>
            <p>${this.info}</p>
        </div>
        `;

        shadowRoot.appendChild(style);
        // shadowRoot.appendChild(container);
        // container.before(style);
    }
}

window.customElements.define("stage-card", StageCard);