<template>
  <q-layout  view="hHh Lpr fff">
    <q-header dark class="bg-dark" elevated>

      <div class="container q-mx-auto">
        <div class="row q-py-md q-px-md">
          <div class="flex items-center justify-center">
            <img
              src="/logo.png"
              style="height: 2rem; width: 2rem;"
            />
            <span class="q-ml-md text-weight-bold" style="font-size: 1.4rem;">TenuNFT</span>
          </div>
          <q-space class="gt-sm" />
          <q-input
            standout
            dark
            placeholder="keyword..."
            class="q-ml-md gt-sm"
          />
          <q-btn
            label="Home"
            flat
            class="gt-sm"
          />
          <q-btn
            label="Explore"
            flat
            class="gt-sm"
          />
          <q-space class="lt-md" />
          <q-btn
            color="teal-8"
            dark
            size="sm"
            label="Connect Wallet"
            unelevated
          />
          <q-btn
            flat
            icon="menu"
            class="lt-md"
          />
        </div>
        <div class="lt-md row q-px-md">
          <q-input
            standout
            dark
            size="xs"
            dense
            placeholder="search item here..."
            class="col-12"
          />
        </div>
      </div>

    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer dark class="bg-black">
      <div class="container q-mx-auto q-px-md">
        <div class="row q-py-md">
          <div class="row items-center justify-center">
            <div class="col-12 row items-center justify-center">
              <img
                src="/logo.png"
                style="height: 2rem; width: 2rem;"
              />
              <span class="q-ml-md text-weight-bold" style="font-size: 1.4rem;">TenuNFT</span>
            </div>
            <span class="col-12 text-center">© Copyright 2022 - TenuNFT</span>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
</script>