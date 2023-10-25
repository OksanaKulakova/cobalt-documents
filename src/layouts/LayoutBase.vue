<template>
  <div class="container">
    <div class="content">
      <slot name="document" />
      <div class="sidebar">
        <slot name="sidebar" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    height: calc(100vh);
    overflow-y: scroll;
    scrollbar-gutter: stable;
    background-color: var(--neutral-light-gray);
    padding-left: 16px;
  }

  .content {
    position: relative;
    max-width: 1920px;
    height: 100%;
    margin: auto;
    padding-top: 56px;
    display: flex;
    gap: 32px;
    justify-content: center;
    background-color: var(--neutral-light-gray);
  }

  .sidebar {
    width: 350px;
    padding: 32px;
    background-color: var(--neutral-light);
    border: 1px solid var(--color-base);
  }
</style>
