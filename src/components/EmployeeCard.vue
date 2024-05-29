<template>
  <v-card class="mx-auto my-2 employee-card">
    <v-card-title>
      <v-avatar size="50" class="mr-3">
        <v-img
          :src="employee.avatar"
          alt="profile image"
          class="profile-pic"
        ></v-img>
      </v-avatar>
      <div>{{ employee.first_name }} {{ employee.last_name }}</div>
    </v-card-title>
    <v-card-actions>
      <v-btn text :href="`mailto:${employee.email}`" class="contact-btn"
        >Contact</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "EmployeeCard",
  props: {
    employee: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.employee-card {
  max-width: 500px;
}

.profile-pic {
  border-radius: 50%;
}
.contact-btn {
  color: rgb(106, 106, 222);
}
.contact-btn:hover {
  background-color: rgb(227, 222, 246);
}
</style>
