<template>
  <div class="each-table" v-for="(info, idx) in order" :key="info.orderId">
    <table>
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
          <td>{{ orderTotalAmount[idx] }}</td>
          <td>{{ orderTotalPrice[idx] }}</td>
          <td>{{ info.pay }}</td>
        </tr>
      </tbody>
    </table>
    <base-button :link="false" @click="showStatus(idx)" class="member-tab-btn">
      Check Status
    </base-button>
    <transition name="status" mode="out-in">
      <div v-if="this.toggleIndex === idx && info.orderState === 'Order established'" class="status-para">
        <div class="status-content">
          <h3>Order Status</h3>
          <h4>{{ info.orderState }}</h4>
          <div class="progress-bar">
            <div class="progress-label order-style">33%</div>
          </div>
        </div>
      </div>
      <div v-else-if="this.toggleIndex === idx && info.orderState === 'Shipping status'" class="status-para">
        <div class="status-content">
          <h3>Order Status</h3>
          <h4>{{ info.orderState }}</h4>
          <div class="progress-bar">
            <div class="progress-label shipping-style">67%</div>
          </div>
        </div>
      </div>
      <div v-else-if="this.toggleIndex === idx && info.orderState === 'Already delivery'" class="status-para">
        <div class="status-content">
          <h3>Order Status</h3>
          <h4>{{ info.orderState }}</h4>
          <div class="progress-bar">
            <div class="progress-label delivery-style">100%</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      toggleIndex: "",
      orderTotalAmount: [],
      orderTotalPrice: []
    };
  },
  beforeMount() {
    // 計算第一個 member 的每張訂單的商品內容總數
    for(let i = 0; i < this.order.length; i++) {
      let amount = 0;
      for( let j = 0 ; j < this.order[i].orderItems.length; j++){
        amount += this.order[i].orderItems[j].prodQuantity;
      }
      this.orderTotalAmount.push(amount);
    }

    //計算第一個 member 的每張訂單的總價
    for(let i = 0 ; i < this.order.length; i++){
      let sum = 0;
      for(let j = 0; j < this.order[i].orderItems.length; j ++) {
        sum += this.order[i].orderItems[j].prodEachPrice * this.order[i].orderItems[j].prodQuantity;
      }
      this.orderTotalPrice.push(sum);
    }
  },
  computed: {
    ...mapGetters(['members']),
    order() {
      //示範第一個會員的所有訂單
      return this.members[0].orders;
    },
    // orderTotalPrice() {
    //   var sum = 0;
    //   for (let i = 0; i < this.order[0].orderItems.length; i++) {
    //     sum +=
    //       this.order[0].orderItems[i].prodQuantity *
    //       this.order[0].orderItems[i].prodEachPrice;
    //   }
    //   return sum;
    // },
    orderState() {
      return this.order[0].orderState;
    },
  },
  methods: {
    showStatus(idx) {
      if (this.toggleIndex === idx) {
        this.toggleIndex = "";
      } else {
        this.toggleIndex = idx;
      }
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
  border: 1px solid $white !important;
  text-align: center;
  padding: 0.5rem 0.3rem;
}

th {
  background-color: $base-button-bck;
  padding: 0.5rem 0.5rem;
  color: $white;
}

.member-tab-btn {
  margin: 1rem 0;
  cursor: pointer;
}

.status-para {
  > p {
    background-color: $price-red;
    color: $white;
  }
}

.status-enter-from,
.status-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.status-enter-active,
.status-leave-active {
  transition: all 0.5s ease;
}

.status-enter-to,
.status-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.status-content {
  text-align:center;
  border: 1px solid $black;
  margin-bottom: 1rem;
    > h3 {
      margin: 0;
      padding: 0.5rem;
      color: $white;
      background-color: $base-button-bck;
    }
}

.order-style {
  background-color: $price-red;
  width: 33%;
}
.shipping-style {
  background-color: $star-color;
  width: 67%;
}  

.delivery-style {
  background-color: $base-button-bck;
  width: 100%;
}

.progress-bar {
  width: 350px;
  background-color: #ccc;
  border: 1px solid $black;
  border-radius: 8px;
  margin: 1rem auto;
  overflow: hidden;
    .progress-label {
      text-align: center;
      color: $white;
    }
}
</style>
