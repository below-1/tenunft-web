<template>
  <q-layout  view="hHh Lpr fff">
    <q-header dark class="bg-dark" elevated>

      <div class="container q-mx-auto">
        <div class="row q-py-md q-px-md">
          <q-btn to="/" size="sm" 
            flat 
            class="q-pa-none flex items-center justify-center">
            <img
              src="/logo.png"
              style="height: 2rem; width: 2rem;"
            />
            <span 
              class="q-ml-xs text-weight-bold" 
              style="font-size: 1.4rem; text-transform: none;"
            >TenuNFT</span>
          </q-btn>
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
            class="lt-md q-px-sm"
            @click="onToggleMenu"
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

    <q-drawer dark v-model="leftDrawer">
      <q-list>
        <q-item 
          v-for="menu in menus"
          :key="menu.path"
          :to="menu.path"
        >
          <q-item-section>
            <q-item-label style="text-transform: uppercase;">
              {{ menu.label }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

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
import { ref } from 'vue'

const leftDrawer = ref(false)
const menus = [
  { label: 'home', path: '/' },
  { label: 'explore', path: '/explore' }
]

function onToggleMenu() {
  leftDrawer.value = !leftDrawer.value
}
</script>