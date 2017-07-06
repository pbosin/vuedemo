<template>
  <div class="accounts">
    <h1> Account Manager </h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th><a class="btn btn-default btn-xs" @click="addNew()">Add New Account</a></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="account in accounts">
          <td>{{account.name}}</td>
          <td>
            <button class="btn btn-default btn-xs" @click="edit(account.id)">
              <span class="glyphicon glyphicon-pencil" title="Edit"></span>
            </button>
            <button class="btn btn-default btn-xs" @click="remove(account.id)">
              <span class="glyphicon glyphicon-trash" title="Remove"></span>
            </button>
            <button class="btn btn-default btn-xs" @click="invoices(account.id)">Invoices</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AccountService from '../api/accounts'

export default {
  name: 'accountList',
  data: ()  => ({
      accounts: []
  }),
  mounted: function () {
      AccountService.getAccounts().then(response => {
          this.accounts = response;
      });
  },
  methods: {
    addNew () {
      this.$router.push('/accounts/:0')
    },
    edit (id) {
      this.$router.push(`/accounts/:${id}`)
    },
    remove (id) {
      AccountService.deleteAccount(id).then(() => {
        AccountService.getAccounts().then(response => {
            this.accounts = response;
        });
      });
    },
    invoices (id) {
      this.$router.push(`accounts/:${id}/invoices`)
    }
  }

}
</script>

<style scoped>
th,td {
  padding: 5px;
}
.accounts {
  margin-left: 100px;
}
</style>
