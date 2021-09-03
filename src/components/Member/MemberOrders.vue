<template>
  <div class="each-table">
    <table v-for="info in order" :key="info.orderId">
      <thead>
        <tr>
          <th>Shipping Way</th>
          <th>Order Date</th>
          <th>Order Number</th>
          <th>Quantities</th>
          <th>Total Price</th>
          <th>Pay By</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ info.shippingWay }}</td>
          <td>{{ info.orderDate }}</td>
          <td>{{ info.orderId }}</td>
          <td>{{ orderTotalAmount }}</td>
          <td>{{ orderTotalPrice }}</td>
          <td>{{ info.pay }}</td>
        </tr>
      </tbody>
    </table>
    <base-button :link='false'>Check Detail</base-button>
  </div>
</template>
<script>
export default {
  computed: {
    order() {
      return this.$store.state.member.theFinalMembers[0].orders;
    },
    orderTotalAmount() {
      var amount = 0;
      for (let i = 0; i < this.order[0].orderItems.length; i++) {
        amount += this.order[0].orderItems[i].productQuantity;
      }
      return amount;
    },
    orderTotalPrice() {
      var sum = 0;
      for (let i = 0; i < this.order[0].orderItems.length; i++) {
        sum +=
          this.order[0].orderItems[i].productQuantity *
          this.order[0].orderItems[i].productEachPrice;
      }
      return sum;
    },
  },
};
</script>
<style lang="scss">
.each-table {
  width: 750px;
  margin: auto;
  border-top: 1px dashed black;
  border-bottom: 1px dashed black;
  padding-top: 1rem;
}
table {
  border-collapse: collapse;
  width: 100%;
}

table,
th,
td {
  border: 1px solid black;
  text-align: center;
  padding: 0.5rem 0.3rem;
}

th {
  background-color: $base-button-bck;
  padding: 0.5rem 0.5rem;
  color: $white;
}

button {
  margin: 1rem 0;
}
</style>
