// Unique path for import can ensure inline import.
import { scss, html, htmlString } from '../api/index.js?exhibition'

export default class Exhibition extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({
      mode: 'open'
    })

    this.shadowRoot.appendChild(
      scss(`
        .class {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: #fff;
          font-family: sans-serif;
          line-height: 1.8;
          padding: 0 80px;
          .cover {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-size: cover;
          }
          .title {
            font-size: 50px;
            font-weight: bold;
            position: relative;
          }
          .desc {
            font-size: 18px;
            margin-bottom: 40px;
            position: relative;
          }
          .author {
            font-size: 12px;
            position: absolute;
            left: 0;
            bottom: 20px;
            right: 0;
            text-align: center;
          }
          .share {
            display: inline-block;
            line-height: 1;
            vertical-align: middle;
            cursor: pointer;
          }
        }
        .list {
          display: flex;
          flex-wrap: wrap;
          margin-top: 30px;
          font-family: sans-serif;
        }
        .item {
          width: 12.5vw;
          text-align: center;
          color: #000;
          margin-bottom: 30px;
          text-decoration: none;
          transition: all 0.3s;
          &:hover {
            transform: scale(1.1);
          }
          .cover {
            width: 8vw;
            height: 8vw;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            margin: 0 auto;
          }
          .title {
            margin: 0;
            padding: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 12px;
          }
        }
      `)
    )

    Promise.all([
      window.iconlakeAPI.class.getInfo(window.iconlakeAPI.class.id),
      window.iconlakeAPI.class.getNfts(window.iconlakeAPI.class.id)
    ]).then(([info, data]) => {
      this.renderClass(info)
      this.renderNfts(data, info)
      window.iconlakeAPI.loading.isShow = false
    })
  }

  renderClass (info) {
    const dom = html(`
      <div class="class">
        <div class="cover" style="background-image: url(${info.uri})"></div>
        <div class="title">${info.name}</div>
        <div class="desc">${info.description}</div>
        <div class="author">Created by ${info.data.author} <span class="share"></span></div>
      </div>
    `)
    const classDom = dom.querySelector('.class')
    classDom.addEventListener('click', () => {
      window.scrollTo({
        top: classDom.offsetHeight - 100,
        behavior: 'smooth'
      })
    })
    this.shadowRoot.appendChild(dom)
    window.iconlakeAPI.share.load(this.shadowRoot.querySelector('.share'), {
      classId: info.id
    })
  }

  renderNfts (data, info) {
    const getItem = (nft) => htmlString(`
      <a class="item" href="/exhibition/${info.id}/${nft.id}">
        <div class="cover" style="background-image: url(${nft.uri})"></div>
        <p class="title">${nft.data.name}</p>
      </a>
    `)
    const dom = html(`
      <div class="list">
        ${data.nfts.map(getItem).join('')}
      </div>
    `)
    this.shadowRoot.appendChild(dom)
  }
}
