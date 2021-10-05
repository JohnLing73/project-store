# **Store Project**

## **專案導覽:** 本專案為電商網站，提供基本的購物、註冊會員功能

- 使用技術:
  - Vue 3
    - Vue CLI
    - Vuex with module setting
    - VueRouter
    - Navigation Guard
  - HTML
  - SCSS with RWD
  - JavaScript
  - Firebase as backend
  - Other Packages:
    - Swiper.js 
    - GSAP
    - animejs
  

## **免責聲明:** 本專案為履歷作品，無營利之用途，如有疏漏發生盜用之情形，請盡速聯絡本人(dudulala73@gmail.com)，將立即撤銷素材之使用。

- ## **網站主要功能**
  - 商品面
    - 過濾出符合選擇條件的商品
      - 選擇條件
        - 商品子類別
        - 商品顏色
        - 價格區間
        - 商品評分
    - 商品評價 **(規劃中)**
    - 商品留言 **(規劃中)**
  - 登入 / 註冊功能
    - Firebase設定透過信箱驗證
    - 簡易註冊表單驗證
  - 會員中心
    - 購物車 **(會員專屬)**
      - 顯示所選擇商品、價格、顏色、規格、數量
      - 總價計算
    - 願望清單 **(會員專屬)**
      - 顯示清單商品、價格、顏色、規格
    - **整體購物流程 (規劃中)**
  
- ## **網站頁面**
  - 首頁
  - 商品頁面
    - 商品內容內頁
- **購物流程頁面 (規劃中)**
    - 確認購物明細
    - 確認付款明細
    - 付款成功 (重新導向至會員中心頁面) / 付款失敗
  - 註冊/登入頁面
- 會員中心
  - 會員個資
  - **會員訂單(規劃中)**
  - 會員購物車
  - 會員願望清單

## 下載本專案後請安裝 node module 資料夾中所有套件
```
npm install
```

### 執行開發模式
```
npm run serve
```

### 其餘客製化設定
請參考 [Configuration Reference](https://cli.vuejs.org/config/).
