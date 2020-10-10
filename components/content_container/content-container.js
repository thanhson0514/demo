import { BaseComponent } from "./base-component.js";
import {style} from './content-container.style.js';

class ContentContainer extends BaseComponent {
    constructor() {
        super();
        this.props = {
            data: ['O2j7gALId6i2jFwc86oz','YCtZRA0beLjjPsDddsaC','ffs8fwnSeox8pZhFYakB','jfPjIotM3fbkEuLaNRoq','xjWyjdXb9oUvjTu8ibwK']
        }
        this.state = {
            topics: [],
            loading: true
        }
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <div class="notice">
                <h1>Download App on CHPlay or App-store</h1>
            </div>
            <div class="content-container"></div>
        `;

        if(this.state.loading) {
            let getData = async () => {
                for (let data of this.props.data) {
                    let content = await firebase.firestore().collection('post').doc(data).get();
                    let topic = {
                        title: content.data().title,
                        owner: content.data().owner,
                        ownerName: content.data().ownerName,
                        cover: content.data().cover,
                        totalRespect: content.data().totalRespect
                    }
                    this.state.topics.push(topic);
                }

                this.state.loading = false;
                this.setState(this.state);
            }
            getData();
        } else {
            let contentContainer = this._shadowRoot.querySelector('.content-container');
            let stringCover = '';
        
            this.state.topics.forEach(topic => {
                stringCover += `
                    <div class="cover">
                        <div class="wrap-cover">
                            <img class="img-cover" src="${topic.cover}" />
                            <div class="wrap-title">
                                <h4 class="title">${topic.title}</h4>
                            </div>
                        </div>
                        <div class="info">
                            <div class="owner-info">
                                <img class="avatar" src="${topic.owner}" />
                                <p class="owner-name">${topic.ownerName}</p>
                            </div>
                            <p>${topic.totalRespect}</p>
                        </div>
                    </div>
                `;
            })
            contentContainer.innerHTML += stringCover;
        }

    }
}

window.customElements.define('content-container', ContentContainer);