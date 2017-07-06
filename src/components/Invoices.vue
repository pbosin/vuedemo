<template>
  <div class="accounts">
    <h1> Account Manager </h1>
    <h4> Account {{account.name}} Invoices </h4>
    <a class="btn btn-default btn-xs" @click="back()">Back To Account List</a>
    <table>
      <thead>
        <tr>
          <th>Invoice ID</th>
          <th>Invoice Name</th>
          <th>Invoice Amount</th>
          <th>Amount Due</th>
          <th><a class="btn btn-default btn-xs" @click="addNew()">Add New Invoice</a></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in invoices">
          <td>{{invoice.id}}</td>
          <td>{{invoice.name}}</td>
          <td>{{invoice.amount}}</td>
          <td>{{invoice.due}}</td>
          <td>
            <button class="btn btn-default btn-xs" @click="edit(invoice.id)">
              <span class="glyphicon glyphicon-pencil" title="Edit"></span>
            </button>
            <button class="btn btn-default btn-xs" @click="remove(invoice.id)">
              <span class="glyphicon glyphicon-trash" title="Remove"></span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AccountService from '../api/accounts'

export default {
  name: 'invoiceList',
  props: ['id'],
  data: ()  => ({
    account: {name:'ttt'},
  }),
  computed: {
    accountId: function () {
      return parseInt(this.id.replace(':',''));
    },
    invoices: function () {
      return this.account.invoices;
    }
  },
  mounted: function () {
    AccountService.getAccount(this.accountId).then(response => {
      this.account = response;
    });
  },
  methods: {
    addNew () {
      this.$router.push(`/accounts/:${this.accountId}/invoices/:0`);
    },
    edit (id) {
      this.$router.push(`/accounts/:${this.accountId}/invoices/:${id}`);
    },
    remove (id) {
      AccountService.deleteInvoice(this.accountId, id).then(() => {
        AccountService.getAccount(this.accountId).then(response => {
            this.account = response;
        });
      });
    },
    back () {
      this.$router.push('/accounts');
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
