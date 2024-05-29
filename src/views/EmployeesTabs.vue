<template>
  <v-card>
    <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
      <v-tab value="1">Sidan 1</v-tab>
      <v-tab value="2">Sidan 2</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="1">
        <v-container fluid>
          <v-row>
            <v-col
              v-for="employee in employeesPage1"
              :key="employee.id"
              cols="12"
              md="4"
            >
              <EmployeeCard :employee="employee" />
            </v-col>
          </v-row>
        </v-container>
      </v-tabs-window-item>

      <v-tabs-window-item value="2">
        <v-container fluid>
          <v-row>
            <v-col
              v-for="employee in employeesPage2"
              :key="employee.id"
              cols="12"
              md="4"
            >
              <EmployeeCard :employee="employee" />
            </v-col>
          </v-row>
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>

<script>
import { fetchEmployeesPage1, fetchEmployeesPage2 } from "../services/api";
import EmployeeCard from "../components/EmployeeCard.vue";

export default {
  name: "EmployeesTabs",
  components: {
    EmployeeCard,
  },
  data() {
    return {
      tab: 1,
      employeesPage1: [],
      employeesPage2: [],
      loading: true,
      error: false,
    };
  },
  async created() {
    try {
      const [page1, page2] = await Promise.all([
        fetchEmployeesPage1(),
        fetchEmployeesPage2(),
      ]);
      this.employeesPage1 = page1;
      this.employeesPage2 = page2;
    } catch (e) {
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
};
</script>
