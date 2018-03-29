import Vue from "vue"
import Vuex from "vuex"

/*
 * 引入模块的Vuex要素
 */
import moduleVuexConfig from "./moduleName/index"

Vue.use(Vuex);

/**
 * 是否调试模式
 * @type {boolean}
 */
const debug = process.env.NODE_ENV !== "production";


export default new Vuex.Store({
  modules: {
    moduleName: moduleVuexConfig
  },
  strict: debug
});

