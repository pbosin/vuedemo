<template>
<div class="accounts">
  <h1> Account Manager </h1>
  <div class="container">
    <div class="form-group">
      <label class="control-label">Account Name</label>
      <input type="text" v-model="account.name" placeholder="name">
    </div>
    <div class="ml125 form-group">
      <button class="btn btn-primary btn-sm" @click="save()">Save</button>
      <a class="btn btn-default btn-sm" @click="cancel()">Cancel</a>
    </div>
  </div>
</div>
</template>

<script>
import AccountService from '../api/accounts'

export default {
  name: 'accountDetail',
  props: ['id'],
  data: ()  => ({
    account: {name:'ttt'},
  }),
  computed: {
    accountId: function () {
      return this.id.replace(':','');
    }
  },
  mounted: function () {
      if (this.accountId !== '0') {
        AccountService.getAccount(this.accountId).then(response => {
            this.account = response;
        });
      } else {
        this.account = {name: '', invoices: []};
      }
  },
  methods: {
    save () {
      let account = {id: parseInt(this.accountId), name: this.account.name, invoices: this.account.invoices};
      AccountService.saveAccount(account).then(() => {
        this.$router.push('/accounts')
      });
    },
    cancel () {
      this.$router.push('/accounts')
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
