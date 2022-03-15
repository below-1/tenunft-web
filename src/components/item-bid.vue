<template>
  <q-page class="bg-dark">
    <div 
      v-if="status == 'success'" 
      class="container q-mx-auto q-px-md q-py-lg"
    >
      <div class="row q-col-gutter-lg">

        <div class="col-12 col-md-6">
          <img :src="item.avatar" style="width: 100%; height: auto;" />
        </div>

        <div class="col-12 col-md-6 text-white">
          <q-list dark>
            <q-expansion-item
              icon="list"
              label="Properties"
              caption="Properties of NFT"
            >
              <q-card dark>
                <q-card-section>
                  <div style="padding: 24px; border: 1px solid #eee;">
                    <div>Foobar</div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-expansion-item
              icon="sell"
              label="Tags"
            >
              <q-card dark>
                <q-card-section class="q-gutter-md">
                  <q-btn
                    v-for="tag in item.tags"
                    :key="tag"
                    :label="tag"
                    style="text-transform: none !important;"
                    outline
                  ></q-btn>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-expansion-item
              icon="info"
              label="Detail"
            >
              <q-card dark>
                <q-card-section class="q-gutter-md">
                  <q-list separator>
                    <q-item>
                      <q-item-section>
                        <q-item-label>Contact Address</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label to="/nowhere">
                          <router-link to="/nowhere">
                            0xosdsidusiudi
                          </router-link>
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label>Token ID</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label>
                          {{ item.id }}
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label>Token Standard</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label>
                          ERC721
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label>Blockchain</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label>
                          BEP-20
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>

          <h5 class="text-weight-bold q-mb-sm">{{ item.name.title }}</h5>
          <q-badge outline color="indigo-4">
            <div class="text-subtitle1">{{item.likeCount}} Favorite</div>
            <q-icon size="md" name="favorite" color="red" />
          </q-badge>
          <p class="q-my-md">
            {{item.description}}
          </p>
          <div class="q-my-md">
            <q-icon size="md" class="q-mr-sm" name="img:/ethereum-gold.svg" />
            <span class="text-subtitle1">{{ item.price.toFixed(2) }}</span>
          </div>
          <div>
            <q-btn
              label="Buy NFT"
              icon="shopping_cart"
              color="primary"
              class="q-px-xl"
            />
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useGetNFT } from '@compose/nft'

const props = defineProps({
  id: String
})

const nftParams = computed(() => {
  return {
    id: props.id
  }
})
const {
  item,
  status,
  loadNFT
} = useGetNFT(nftParams)

onMounted(loadNFT)
</script>