import { defineNuxtPlugin } from '#app'
import axios from 'axios'


export default defineNuxtPlugin(() => {
  const axiosInstance = axios.create( {
    baseURL: `${new Date()}`
  })
  return {
    provide: {
      axios:  axiosInstance 
    } 
  }
})
