<template>
  <table v-for="info in order" :key="info.orderId">
    <thead>
      <tr>
        <td>Shipping Way</td>
        <td>Order Date</td>
        <td>Order Number</td>
        <td>Quantities</td>
        <td>Total Price</td>
        <td>Pay By</td>
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
</template>
<script>
export default {
  computed:{
    order() {
      return this.$store.state.member.theFinalMembers[0].orders
    },
    orderTotalAmount() {
      var amount = 0;
      for(let i = 0; i < this.order[0].orderItems.length; i++) {
        amount += this.order[0].orderItems[i].productQuantity;
      }
      return amount;
    },
    orderTotalPrice() {
      var sum = 0;
      for(let i = 0; i < this.order[0].orderItems.length; i++) {
          sum += ( this.order[0].orderItems[i].productQuantity ) * ( this.order[0].orderItems[i].productEachPrice );
      }
      return sum;
    }
  }
}
</script>
<style lang="scss">
  table {
    border-collapse: collapse;
  }
  table,
  tr,
  td {
    border: 1px solid black;
    text-align: center;
  }
</style>