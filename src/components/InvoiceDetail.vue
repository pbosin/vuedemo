<template>
<div class="accounts">
  <h1> Account Manager </h1>
  <h4> Account {{account.name}} Invoices </h4>
  <div class="container">

    <div class="form-group">
      <label class="control-label">Invoice Name:</label>
      <input type="text" v-model="invoice.name">
    </div>
    <div class="form-group">
      <label class="control-label">Invoice Amount:</label>
      <input type="text" v-model="invoice.amount">
    </div>
    <div class="form-group">
      <label class="control-label">Amount Due:</label>
      <input type="text" v-model="invoice.due">
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
  props: ['id','invid'],
  data: ()  => ({
    account: {},
    invoice: {}
  }),
  computed: {
    accountId: function () {
      return parseInt(this.id.replace(':',''));
    },
    invoiceId: function () {
      return parseInt(this.invid.replace(':',''));
    }
  },
  mounted: function () {
    AccountService.getAccount(this.accountId).then(response => {
      this.account = response;
      if (this.invoiceId) {
        this.invoice = this.account.invoices.filter(invoice => invoice.id === this.invoiceId)[0];
      } else {
        this.invoice = {
          accountId: this.accountId,
          name: '',
          amount: 0,
          due: 0
        }
      }
    });
  },
  methods: {
    save () {
      AccountService.saveInvoice(this.invoice).then(() => {
        this.$router.push(`/accounts/${this.accountId}/invoices`)
      });
    },
    cancel () {
      this.$router.push(`/accounts/${account.id}/invoices`)
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
