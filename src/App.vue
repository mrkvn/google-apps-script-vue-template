<template>
  <h1 class="text-9xl">
    Hello Vue Apps Script World!
  </h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav class="mb-4">
    <div>
      <RouterLink to="/">Home</RouterLink>
    </div>
    <div>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>

</template>