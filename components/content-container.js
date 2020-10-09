import { BaseComponent } from "./base-component.js";
const style = /*html*/  `
    <style>
        .content-container {
            padding: 0px;
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
        }
        .content-container img {
            padding: 0px;
            margin: 0px;
            overflow: hidden;
        }
        .cover {
            width: 260px;
            height: 250px;
            margin: 4px 14px 4px 0px;
            border-radius: 4px;
            box-shadow: 0.2px 2px 2px 0.4px rgba(0,0,0,0.3);
            cursor: pointer;
        }
        .img-cover {
            border-radius: 3px;
            width: 250px;
            height: 165px;
        }
        .title {
            margin: 0px;
            padding: 0px;
        }
        .info {
            display: flex;
            justify-content: space-between;
        }
        .owner-info {
            display: flex;
            flex-direction: column;
        }
        .avatar {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid;
        }
    </style>
`;
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
                        <img class="img-cover" src="${topic.cover}" />
                        <h4 class="title">${topic.title}</h4>
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