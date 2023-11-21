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
  project: {
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
