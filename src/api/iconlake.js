window.iconlakeAPI = {
  version: 1,
  isProduction: false,
  config: {
    lcd: ''
  },
  loading: {
    dom: document.querySelector('.loading'),
    isShow: false
  },
  class: {
    id: '6541026cca1c4915ba6ef2d0',
    getNfts: async (id) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000)
      })
      return {
        nfts: new Array(24).fill(0).map(() => ({
          classId: '6541026cca1c4915ba6ef2d0',
          id: 'p:cf99b862b98cc463',
          uri: '/imgs/laugh.svg',
          uriHash: '6a253ab9f7f6ddd715531dfd51225f96db9bdd990e72fac56a89233f3dc66543',
          data: {
            author: 'iconlake1dcfdcgkql69xg40cs0ckfkne0zu55d2xlwzmcu',
            name: 'laugh',
            description: 'This is a laugh icon.',
            createTime: '1698765074355'
          }
        })),
        pagination: {
          nextKey: null,
          total: '1'
        }
      }
    },
    getInfo: async (id) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000)
      })
      return {
        id: '6541026cca1c4915ba6ef2d0',
        name: 'A Project About Some My Works',
        symbol: 'iconlake',
        description: 'This is a project about some my works. The style is so good. Wish you like it.',
        uri: '/imgs/cover-project.jpeg',
        uriHash: '6b55bcb20de06eb6794f4c8c80888fb166b9793fe1c5ba146a30a4bf759d05ba',
        data: {
          author: 'iconlake1dcfdcgkql69xg40cs0ckfkne0zu55d2xlwzmcu',
          createTime: '1698765074355'
        }
      }
    }
  },
  nft: {
    id: 'p:cf99b862b98cc463',
    getInfo: async (id) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000)
      })
      return {
        classId: '6541026cca1c4915ba6ef2d0',
        id: 'p:cf99b862b98cc463',
        uri: '/imgs/laugh.svg',
        uriHash: '6a253ab9f7f6ddd715531dfd51225f96db9bdd990e72fac56a89233f3dc66543',
        data: {
          author: 'iconlake1dcfdcgkql69xg40cs0ckfkne0zu55d2xlwzmcu',
          name: 'laugh',
          description: 'This is a laugh icon.',
          createTime: '1698765074355'
        }
      }
    }
  },
  verifyHash: async (uri, uriHash) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    return 1
  },
  share: {
    config: {
      alignment: 'center',
      background_color: '#B581A3',
      color: 'social',
      enabled: true,
      font_size: 12,
      has_spacing: true,
      is_ssb: false,
      labels: 'none',
      language: 'en',
      min_count: 0,
      networks: ['sharethis'],
      num_networks: 5,
      num_ssb_networks: 3,
      padding: 10,
      radius: 10,
      show_total: false,
      size: 32,
      size_label: 'small',
      spacing: 8,
      text_color: '#fff',
      use_native_counts: true
    },
    /**
     * Load share dom
     * @param {HTMLElement} container
     * @param {{nftId?: string, classId?: string}} options
     */
    async load (container, options) {
      await new Promise((resolve) => {
        if (window.__sharethis__) {
          return resolve()
        }
        const timer = setInterval(() => {
          if (window.__sharethis__) {
            clearInterval(timer)
            return resolve()
          }
        }, 50)
      })
      const shareInfo = {}
      if (options) {
        if (options.nftId) {
          const nft = await window.iconlakeAPI.nft.getInfo(options.nftId)
          shareInfo.url = window.location.href
          shareInfo.image = nft.uri
          shareInfo.title = nft.data.name
          shareInfo.description = nft.data.description
        } else if (options.classId) {
          const classInfo = await window.iconlakeAPI.class.getInfo(options.classId)
          shareInfo.url = window.location.href
          shareInfo.image = classInfo.uri
          shareInfo.title = classInfo.name
          shareInfo.description = classInfo.description
        }
      }
      window.__sharethis__.load('inline-share-buttons', {
        container,
        ...this.config,
        ...shareInfo
      })
    }
  }
}

Object.defineProperties(window.iconlakeAPI.loading, {
  isShow: {
    get () {
      return window.iconlakeAPI.loading.dom.classList.contains('show')
    },
    set (value) {
      if (value) {
        window.iconlakeAPI.loading.dom.classList.add('show')
      } else {
        window.iconlakeAPI.loading.dom.classList.remove('show')
      }
    }
  }
})
