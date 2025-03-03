const routes = [
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: "program", component: () => import("pages/ProgramPage.vue") },
    ]
  },
  {
    path: "/register",
    component: () => import("components/auth/RegisterForm.vue"),
  },
  {
    path: "/",
    component: () => import("components/auth/LoginForm.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
