<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in simpleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h2>View More Recent blogs</h2>
        <div class="blog-cards">
          <BlogCard 
            :post="post"
            v-for="(post, index) in sampleBlogCards" 
            :key="index"
          />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Never miss a post. Register free</h2>
        <router-link class="router-button" to="#">
          Register for FireBlogs <Arrow class="arrow arrow-light"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
import BlogCard from "../components/BlogCard.vue"
import Arrow from "../assets/Icons/arrow-right-light.svg"

export default {
  name: "Home",
  components: {
    BlogPost, BlogCard, Arrow
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      simpleBlogPost: [
        {
          title: "This is a Filter Title!",
          blogHTML: "This is a Filter blog post title!",
          blogCoverPhoto: "beautiful-stories"
        },
         {
          title: "This is a Filter Title 2!",
          blogHTML: "This is a Filter blog post title!",
          blogCoverPhoto: "designed-for-everyone"
        }
      ],
    }
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 800px) {
      padding: 125px 25px;
      flex-direction: random($limit: 1);
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>