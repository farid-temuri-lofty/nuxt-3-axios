import { defineNuxtPlugin } from '#app'
import axios from 'axios'
//@ts-expect-error
import { axiosOptions } from '#build/axios-options'

export default defineNuxtPlugin(() => {
  const axiosInstance = axios.create(axiosOptions)
  console.log(axiosOptions);
  return {
    provide: {
      axios:  axiosInstance 
    } 
  }
})
