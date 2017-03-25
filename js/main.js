Vue.component('vmm-message',{
  props: ['title', 'body'],

  data(){
    return {
      isVisible:true
    };
  },
  methods:{
    hideModal: function(){
      this.isVisible=false;
    }
  },

  template:
          `<article class="message" v-show="isVisible">
            <div class="message-header">
              <p>{{title}}</p>
              <button @click="hideModal" class="delete"></button>
            </div>
            <div class="message-body">
              {{body}}
            </div>
          </article>`


});

Vue.component('vmm-modal', {

  template:
    `<div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-content">
              <div class="box">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Victor Moreno Maya</strong> <small>@vmorenma</small> <small>31m</small>
                        <br>
                          <slot></slot>
                      </p>
                    </div>
                    <nav class="level is-mobile">
                      <div class="level-left">
                        <a class="level-item">
                          <span class="icon is-small"><i class="fa fa-reply"></i></span>
                        </a>
                        <a class="level-item">
                          <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                        </a>
                        <a class="level-item">
                          <span class="icon is-small"><i class="fa fa-heart"></i></span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>
          </div>
          <button class="modal-close" @click="$emit('close')"></button>
        </div>`
});

Vue.component('vmm-tabs',{
  data(){
    return{
      tabs:[]

    };
  },
  created(){
    this.tabs = this.$children;
  },
  methods:{
    selectTab: function(selectedTab){
      this.tabs.forEach(tab=>{
        tab.isActive= (tab.name ==selectedTab.name);
      });
    }
  },
  template:
    `<div>
      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
            <a href="#" @click="selectTab(tab)">{{tab.name}}</a>
          </li>
        </ul>
      </div>
      <div class="tabs-details">
        <slot></slot>
      </div>
    </div>
    `
});

Vue.component('vmm-tab',{
  props:{
    name:{
      required: true
    },
    selected: {
      default:false
    }
  },
  data(){
    return{
      isActive:false,
    };
  },
  mounted(){
    this.isActive= this.selected;

  },
  template:
    `<div v-show="isActive">
      <slot></slot>
    </div>
    `
});

new Vue({
  el:'#root',
  data:{
    showModal: false,
  },
});
