import { ref, unref } from 'vue'
import { range } from 'lodash'
import { randProduct, randNumber, randWord, randParagraph } from '@ngneat/falso'

const MOCK_NFT = [
  
]

export function useListNFT(options) {
  const limit = options.limit ? options.limit : 5
}

export function usePopularNFTS(options) {
  const items = ref([])
  const status = ref('idle')
  
  async function loadPopularNFTS() {
    status.value = 'loading'
    const limit = options.limit ? unref(options.limit) : 12
    setTimeout(() => {
      items.value = range(limit).map(i => {
        const avatarId = (i % 6) + 1
        return {
          id: i + 1,
          name: randProduct(),
          price: randNumber({ min: 10, max: 100 }) / 100,
          likeCount: randNumber({ min: 0, max: 50 }),
          avatar: `/tenun/${avatarId}.jpg`
        }
      })
      status.value = 'success'
    }, 2000)
  }

  return { 
    items,
    status,
    loadPopularNFTS
  }
}

export function useGetNFT(options) {
  const item = ref(null)
  const status = ref('idle')

  async function loadNFT() {
    status.value = 'loading'
    const id = unref(options.id)
    setTimeout(() => {
      const tags = range(20).map(i => randWord())
      const avatarId = (id % 6) + 1
      const _item = {
        id,
        name: randProduct(),
        price: randNumber({ min: 10, max: 100 }) / 100,
        likeCount: randNumber({ min: 0, max: 50 }),
        avatar: `/tenun/${avatarId}.jpg`,
        tags,
        description: randParagraph()
      }
      console.log(_item)
      item.value = _item
      status.value = 'success'
    }, 2000)
  }

  return {
    item,
    status,
    loadNFT
  }
}