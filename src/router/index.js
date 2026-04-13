import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import Blog from '../views/Blog.vue'
import BlogPost from '../views/BlogPost.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/',                    component: Home },
  { path: '/sobre-mi',            component: About },
  { path: '/habilidades',         component: Skills },
  { path: '/proyectos',           component: Projects },
  { path: '/proyectos/:id',       component: ProjectDetail },
  { path: '/blog',                component: Blog },
  { path: '/blog/:id',            component: BlogPost },
  { path: '/contacto',            component: Contact },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})