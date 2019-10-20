<template>
  <div>
    <div class="container section">
      <div class="row">
        <div class="col s4" v-for="article in displayArticles" :key="article.id">
          <div class="card">
            <div class="card-image">
              <img class="responsive-img" :src="article.imgURL">
              <span class="card-title">{{article.title}}</span>
            </div>
            <div class="card-content flow-text" >
              <p>{{article.description | slice}}</p>
            </div>
            <div class="card-action">
              <a :href="article.imgURL">image link</a>
            </div>
          </div>
        </div>


      </div>
      <div class="center">
        <ul class="pagination">
          <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
          <li class="active"><a href="#!">1</a></li>
          <li class="waves-effect"><a href="#!">2</a></li>
          <li class="waves-effect"><a href="#!">3</a></li>
          <li class="waves-effect"><a href="#!">4</a></li>
          <li class="waves-effect"><a href="#!">5</a></li>
          <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
        </ul>     
      </div>       
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

interface Pagina{
    articles: object[];
    baseURL: string;
    page: number;
    perPage: number;
    pages: [];
}

export default Vue.extend({
  data(): Pagina{
    return {
      articles: [],
      baseURL: 'http://localhost:3000',
      page: 1,
      perPage: 10,
      pages: []
    }
  },
  async created (): Promise<void> {
    const res = await this.axios.get(`${this.baseURL}/articles`);
      this.articles = [...res.data];
  },
  methods: {
    pagination(entries: object[]) {
      let page: number = this.page,
          perPage: number = this.perPage,
          from: number = (page * perPage) - perPage,
          to: number = page * perPage;

      return entries.slice(from, to);
    }
  },
  computed: {
    displayArticles(): object[]{
      return this.pagination(this.articles) 
    }
  },
  filters: {
    slice: function(value: string): string {
      return value.slice(0, 30).trim() + '...';
    }
  }
})
</script>

