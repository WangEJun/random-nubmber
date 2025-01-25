<template>
  <var-card class="randomCard">
    <div class="space" v-for="item in arrItem">
      <var-row :gutter="10">
        <var-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <var-input v-if="item.isInput" placeholder="已固定" disabled variant="outlined" />
          <var-input
            v-else
            variant="outlined"
            placeholder="请输入最小值"
            type="number"
            v-model="item.minNumber"
          />
        </var-col>
        <var-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <var-input v-if="item.isInput" placeholder="已固定" disabled variant="outlined" />
          <var-input
            v-else
            variant="outlined"
            placeholder="请输入最大值"
            type="number"
            v-model="item.maxNumber"
          />
        </var-col>
        <var-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <var-input
            v-if="item.isInput"
            variant="outlined"
            placeholder="请输入数字"
            type="number"
            v-model="item.inNumber"
          />
          <var-input
            v-else
            variant="outlined"
            placeholder="随机数"
            disabled
            type="number"
            v-model="item.inNumber"
          />
        </var-col>
        <var-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <var-space size="large">
            <var-switch variant @click="turnOn(item.isInput)" v-model="item.isInput" />
            <p style="font-size: 18px">是否固定值</p>
          </var-space>
        </var-col>
      </var-row>
    </div>
    <var-row :gutter="10" class="space">
      <var-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <var-button
          type="primary"
          block
          color="linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)"
          text-color="#fff"
          @click="addItem"
          >添加</var-button
        >
      </var-col>
      <var-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <var-button
          type="primary"
          block
          color="linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)"
          text-color="#fff"
          @click="delItem"
          >删除</var-button
        >
      </var-col>
    </var-row>
    <var-style-provider :style-vars="styleVars">
      <var-paper block ripple @click="startRandon">
        <var-row :gutter="10" class="space">
          <var-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <var-image
              width="85px"
              height="85px"
              fit="cover"
              :radius="10"
              src="../../src/assets/images/1678322956140.gif"
            />
          </var-col>
          <var-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="showNumber">
              <p>{{ `${total === 0 ? '总数' : total}` }}</p>
            </div>
          </var-col>
        </var-row>
      </var-paper>
    </var-style-provider>
  </var-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const styleVars = {
  '--paper-background': 'linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)',
}

const arrItem = ref([
  {
    inNumber: '',
    minNumber: '',
    maxNumber: '',
    isInput: false,
  },
  {
    inNumber: '',
    minNumber: '',
    maxNumber: '',
    isInput: false,
  },
])

const total = ref(0)
const turnOn = (b: boolean) => {
  b = !b
}

const addItem = () => {
  arrItem.value.push({
    inNumber: '',
    minNumber: '',
    maxNumber: '',
    isInput: false,
  })
  console.log(arrItem.value)
}

const delItem = () => {
  arrItem.value.shift()
}

const startRandon = () => {
  total.value = 0
  for (let i = 0; i < arrItem.value.length; i++) {
    let obj = arrItem.value[i]
    if ((obj.minNumber === '' || obj.maxNumber === '') && !obj.isInput) {
      return
    }
    if (obj.isInput) {
      total.value = total.value + parseInt(obj.inNumber)
    } else {
      let max = parseInt(obj.maxNumber)
      let min = parseInt(obj.minNumber)
      let range = max - min + 1
      let random = Math.random()
      obj.inNumber = `${min + Math.floor(range * random)}`
      total.value = total.value + min + Math.floor(range * random)
    }
  }
}
</script>

<style scoped>
.space {
  margin-bottom: 10px !important;
}
.showNumber {
  margin: auto;
  font-size: 24px;
  color: #fff;
  margin-top: 30px;
}
</style>
