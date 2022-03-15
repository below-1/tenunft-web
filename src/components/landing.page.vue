<template>
  <q-page class="bg-grey-10 text-white">
    <div class="container q-mx-auto q-pa-md">
      <div class="row items-center" style="padding: 4rem 0;">
        <div class="col-md-6">
          <h3>Create and sell your own unique NFT</h3>
          <div class="text-body1">Buy and sell NFTs' and AR NFTs'.</div>
          <div class="text-body1">Sign up and get started today</div>
          <div class="q-my-md">
            <q-btn
              color="teal-8"
              label="explore"
              dark
              class="q-mr-sm"
              unelevated
            />
            <q-btn
              color="white"
              label="create"
              unelevated
              text-color="dark"
            />
          </div>
        </div>
        <div class="col-md-6"></div>
      </div>
      <popular-nft />
    </div>
  </q-page>
</template>

<script setup>
import PopularNft from './popular-nft.vue'
</script>