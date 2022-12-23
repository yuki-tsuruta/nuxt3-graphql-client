<script lang="ts" setup>
const { users } = await GqlGetUsers()

users!.map((u) => {
  u.name
})

const { createUser } = await GqlCreateUser()

</script>

<template>
  <div>
    <p>{{ users }}</p>
    <p>{{ createUser }}</p>
  </div>
</template>
