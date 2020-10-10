const style = /*html*/  `
    <style>
        .content-container {
            padding: 0px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 15px;
            row-gap: 20px;
            justify-items: center;
            align-items: center;
            box-sizing: border-box;
        }
        .content-container img {
            padding: 0px;
            margin: 0px;
            overflow: hidden;
        }
        .wrap-cover {
            width: 100%;
            height: 190px;
            position: relative;
        }
        .cover {
            width: 100%;
            height: 100%;
            border-radius: 4px;
            box-shadow: 0.2px 2px 2px 0.4px rgba(0,0,0,0.3);
            cursor: pointer;
        }
        .img-cover {
            transition: .5s ease;
            border-radius: 3px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .wrap-title {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 21px;
        }
        .wrap-cover .title {
            color: #333;
            margin: 0px;
            padding: 0px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: clip; 
            position: absolute;
            bottom: 0;
            left: 0;
            font-size: 20px;
            outline: none;
            text-indent: -999px;
            opacity: 0;
            transition: .5s ease;
        }
        .wrap-cover:hover .img-cover{
            opacity: 0.6;
        }
        .wrap-cover:hover .wrap-title {
            background-color: rgba(255, 255, 255, 0.95); 
            -webkit-backdrop-filter: blur(15px);
            backdrop-filter: blur(10px);
            background-color: rgba(255, 255, 255, 0.5); 
        }
        .wrap-cover:hover .title {
            text-indent: 0;
            opacity: 1;
        }
        .info {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .info p {
            margin: 0;
            padding: 0;
        }
        .owner-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width: 80px;
        }
        .avatar {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid;
        }
        .notice{display: none;}

        @media(max-width: 720px) {
            .content-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 20px;
            }
        }
        @media(max-width: 540px) {
            .content-container{display:none;}
            .notice{display: flex; justify-content: center;}
        }
    </style>
`;

export {style};