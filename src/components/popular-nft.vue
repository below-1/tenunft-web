<template>
  <div style="padding: 6rem 0px;">
    <h4 class="text-center text-weight-bold q-my-lg">Popular NFTs</h4>
    <div class="row q-col-gutter-md">
      <div 
        v-for="item in items"
        :key="item.id"
        class="col-6 col-md-3"
      >
        <q-card dark @click="onDetail">
          <img :src="item.avatar" style="height: 350px;" />
          <q-card-section>
            <div>{{item.name.title}}</div>
            <div class="row items-center">
              <q-icon name="img:/ethereum-gold.svg" size="xs"/> 
              <span class="text-subtitle2">{{item.price.toFixed(2)}}</span>
              <q-btn 
                :to="`/items/${item.id}/bid`"
                label="place a bid" 
                class="q-px-xs q-ml-sm q-my-none"></q-btn>
              <q-icon name="favorite" color="pink" class="q-ml-md" />
              <small>{{item.likeCount}}</small>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { usePopularNFTS } from '@compose/nft'

const {
  items,
  status,
  loadPopularNFTS
} = usePopularNFTS({
  limit: 12
})

onMounted(loadPopularNFTS)

function onDetail() {

}
</script>