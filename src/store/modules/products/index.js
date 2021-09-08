import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
  state() {
    return {
      manPage: [
        { id: "man-clothes", label: "Clothes" },
        { id: "man-shoes", label: "Shoes" },
        { id: "man-watches", label: "Watches" },
      ],
      womanPage: [
        { id: "woman-clothes", label: "Clothes" },
        { id: "woman-bags", label: "bags" },
        { id: "woman-jewellery", label: "Jewellery" },
      ],
      otherPage: [
        { id: "other-mobile", label: "Mobile" },
        { id: "other-earphone", label: "Earphone" },
        { id: "other-others", label: "Others" },
      ],
      ratingFilter: [
        { id: "three-star", label: "3" },
        { id: "four-star", label: "4" },
        { id: "five-star", label: "5" },
      ],
      pricingFilter: [
        { id: "under-five-hundred", label: "$499-" },
        { id: "under-one-thousand", label: "$1000-" },
        { id: "over-one-thousand", label: "$1000+" },
      ],
      productsAll:[
        {
          prodId: 'mc01',
          prodName: "Allen Solly Men's Polo",
          prodCategory: 'Man',
          prodCategoryMinor: 'Man-Clothes',
          tags: ["T-shirt","Man-Cloth", "Van Heusen" ],
          price: 599,
          brand: "Van Heusen",
          bestSeller: true,
          imgSrc: 'https://m.media-amazon.com/images/I/81mE0KcpjJL._AC_UL480_FMwebp_QL65_.jpg',
          size:['S','M','L','XL','2XL'],
          color: [
            {
              colorName: 'green',
              imgSrc:'https://m.media-amazon.com/images/I/81mE0KcpjJL._AC_UL480_FMwebp_QL65_.jpg',
            },
            {
              colorName: "blue",
              imgSrc:'https://m.media-amazon.com/images/I/81QVEO08vrL._UL1500_.jpg',
            },
            {
              colorName: "black",
              imgSrc: 'https://m.media-amazon.com/images/I/81D76vnOAsS._UL1500_.jpg',
            },
          ],
          stock:326,
          views: 205,
          prodInfoBrief:"BLIVE Men's Classic Fit T-Shirt",
          productInfo: [
            "Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool",
            "Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera",
            "Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology",
          ],
          feedback: [
            {
              memberId: "Gina",
              rating: 4,
              comment: 'The model is hot. I like it!'
            },
            {
              memberId: "Shawn",
              rating: 5,
              comment: "Quiet good-looking shirt."
            },
            {
              memberId: "Joseph",
              rating: 3,
              comment: "Nice shirt."
            }
          ],
        },
        {
          prodId: 'mc02',
          prodName: "BLIVE Men's Classic Fit T-Shirt",
          prodCategory: 'Man',
          prodCategoryMinor: 'Man-Clothes',
          tags: ["T-shirt","Man-Cloth", "BLIVE" ],
          price: 323,
          brand: "BLIVE",
          bestSeller: true,
          imgSrc: 'https://m.media-amazon.com/images/I/519PV7ZKtpL._UL1000_.jpg',
          size:['S','XL','2XL'],
          color: [
            {
              colorName: 'navy-blue-white',
              imgSrc:'https://m.media-amazon.com/images/I/519PV7ZKtpL._UL1000_.jpg',
            },
            
          ],
          stock:686,
          views: 105,
          prodInfoBrief:"Men's Solid Regular Fit Polo",
          productInfo: [
            "Care Instructions: Wash with mild detergent, do not bleach, dry in shade",
            "Fit Type: regular fit",
            "60% cotton and 40% polyester",
            "Regular fit",
            'Banded collar',
            'Half sleeve',
            'Wash with mild detergent, do not bleach, dry in shade'
          ],
          feedback: [
            {
              memberId: "Bruce",
              rating: 5,
              comment: 'This cloth is so amazing!'
            },
            {
              memberId: "Joane",
              rating: 3,
              comment: "My boyfreind doesn't like it! It makes him look like creepy."
            },
          ],
        },
        {
          prodId: 'mc03',
          prodName: "AELOMART Men's Cotton T-Shirt",
          prodCategory: 'Man',
          prodCategoryMinor: 'Man-Clothes',
          tags: ["T-shirt","Man-Cloth", "AELOMART" ],
          price: 420,
          brand: "AELOMART",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/71+7-wKg4yL._UL1500_.jpg',
          size:['S','M','L'],
          color: [
            {
              colorName: 'red',
              imgSrc:'https://m.media-amazon.com/images/I/71+7-wKg4yL._UL1500_.jpg',
            },
            {
              colorName: "blue",
              imgSrc:'https://m.media-amazon.com/images/I/711XLec82QL._UL1500_.jpg',
            },
            {
              colorName: "black",
              imgSrc: 'https://m.media-amazon.com/images/I/71uvwLeqYOL._UL1500_.jpg',
            },
            {
              colorName: "gray",
              imgSrc: 'https://m.media-amazon.com/images/I/71sOY+sHopL._UL1500_.jpg',
            },
          ],
          stock:1256,
          views: 75,
          prodInfoBrief:"AELOMART Men's Cotton T-Shirt",
          productInfo: [
            'Care Instructions: Machine Wash',
            'Fit Type: Regular Fit',
            'Wash Care: Machine Wash',
            'Fabric Type: Cotton',
            'Pattern name: Striped',
            'Collar Style: Round Collar'
          ],
          feedback: [
            {
              memberId: "Jason",
              rating: 3,
              comment: 'My parent buy me this. Makes me look like a bee.'
            },
            {
              memberId: "Ken",
              rating: 5,
              comment: "Nice Design."
            },
          ],
        },
        {
          prodId: 'mc04',
          prodName: "Van Heusen Athleisure Men's Regular fit T-Shirt",
          prodCategory: 'Man',
          prodCategoryMinor: 'Man-Clothes',
          tags: ["T-shirt","Man-Cloth", "Van Heusen" ],
          price: 629,
          brand: "Van Heusen",
          bestSeller: true,
          imgSrc: 'https://m.media-amazon.com/images/I/81-oD3qvAOL._UL1500_.jpg',
          size:['S','M','L','XL','2XL'],
          color: [
            {
              colorName: 'red',
              imgSrc:'https://m.media-amazon.com/images/I/81-oD3qvAOL._UL1500_.jpg',
            },
            {
              colorName: "gray",
              imgSrc:'https://m.media-amazon.com/images/I/71G5k-e9LNL._UL1500_.jpg',
            },
            {
              colorName: "black",
              imgSrc: 'https://m.media-amazon.com/images/I/71jNGwfQw4L._UL1500_.jpg',
            },
            {
              colorName: "green",
              imgSrc: 'https://m.media-amazon.com/images/I/61s+KIPRObL._UL1500_.jpg',
            }
          
          ],
          stock: 56,
          views: 2105,
          prodInfoBrief:"Van Heusen Athleisure Men's Regular fit T-Shirt",
          productInfo: [
            'Care Instructions: Machine Wash',
            'Fit Type: Regular Fit',
            'Grey',
            '100% Combed Cotton',
            'long sleeve',
            'Machine wash',
            'Made in India'
          ],
          feedback: [
            {
              memberId: "Ron Wesley",
              rating: 2,
              comment: 'I can not afford this!'
            },
            {
              memberId: "Walter White",
              rating: 5,
              comment: "When I cook the meth. I prefer wearing long sleeve but I bought the short one."
            },
            {
              memberId: "Tuco Salamanca",
              rating: 5,
              comment: "Tight Tight Tight! Whatever this is. Bring me more."
            }
          ],
        },
        {
          prodId: 'ms01',
          prodName: "T-Rock Men's Sneaker",
          prodCategory: 'Man',
          prodCategoryMinor: 'Man-Shoes',
          tags: ["Shoes","Man-Shoes", "T-Rock" ],
          price: 709,
          brand: "T-Rock",
          bestSeller: true,
          imgSrc: 'https://m.media-amazon.com/images/I/61t6Mk3v48L._UL1500_.jpg',
          size:['US9','US9.5','US10','US10.5','US11'],
          color: [
            {
              colorName: 'gray',
              imgSrc:'https://m.media-amazon.com/images/I/61t6Mk3v48L._UL1500_.jpg',
            },
            {
              colorName: "white",
              imgSrc:'https://m.media-amazon.com/images/I/61fiR71I0hS._UL1500_.jpg',
            },
          ],
          stock:3226,
          views: 195,
          prodInfoBrief:"T-Rock Men's Sneaker",
          productInfo: [
            'Closure: Lace-Up',
            'Shoe Width: Medium',
            'Closure: lace-up',
            'Shoe Width: Medium',
            'Regular: Comfort',
            'Lifestyle : Casual Shoes',
            'Product Colour May Slightly Vary Due To Photographic Lighting Sources Or Your Monitor Settings'
          ],
          feedback: [
            {
              memberId: "Uzumaki Naruto",
              rating: 5,
              comment: 'Sasuke!!!!'
            },
            {
              memberId: "Uchiha Sasuke",
              rating: 1,
              comment: "Naruto!!!!"
            },
            {
              memberId: "Rock Lee",
              rating: 5,
              comment: "Young age should fighting!!!"
            }
          ],
        },
        {
          prodId: 'ms02',
          prodName: "ASICS Men's Japan S Sneakers",
          prodCategory: 'Man',
          prodCategoryMinor: 'Man-Shoes',
          tags: ["Shoes","Man-Shoes", "ASICS" ],
          price: 5276,
          brand: "ASICS",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/61Ik1iSqzjL._UL1500_.jpg',
          size:['US9','US9.5','US10.5','US11'],
          color: [
            {
              colorName: 'red',
              imgSrc:'https://m.media-amazon.com/images/I/61Ik1iSqzjL._UL1500_.jpg',
            },
            {
              colorName: "green",
              imgSrc:'https://m.media-amazon.com/images/I/81krfHLMA-L._UL1500_.jpg',
            },
          ],
          stock:1026,
          views: 1295,
          prodInfoBrief:"ASICS Men's Japan S Sneakers",
          productInfo: [
            'Sole: Faux Leather',
            'Closure: Lace-Up',
            'Shoe Width: Regular',
            'Outer Material: Synthetic Leather',
            'Closure Type: Lace-Up',
            'Toe Style: Round Toe',
            'Warranty Type: Manufacturer',
            'Warranty Description: 90 days'
          ],
          feedback: [
            {
              memberId: "Kurosaki Ichigo",
              rating: 3,
              comment: 'Bangai'
            },
            {
              memberId: "Inouhei Orihime",
              rating: 5,
              comment: "Kurosaki kun!"
            },
            {
              memberId: "Kuchigi Rukia",
              rating: 5,
              comment: "Yo! Long time no see, Ichigo!"
            }
          ],
        },
        {
          prodId: 'ms03',
          prodName: "ASIAN Men's Wonder-13 Sports Running Shoes",
          prodCategory: 'Man',
          prodCategoryMinor: 'Man-Shoes',
          tags: ["Shoes","Man-Shoes", "ASIAN" ],
          price: 1099,
          brand: "ASIAN",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/31H0XIYHFyL.jpg',
          size:['US8.5','US9','US9.5','US10','US10.5','US11'],
          color: [
            {
              colorName: 'white',
              imgSrc:'https://m.media-amazon.com/images/I/31H0XIYHFyL.jpg',
            },
            {
              colorName: "green",
              imgSrc:'https://m.media-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg',
            },
            {
              colorName: "gray",
              imgSrc:'https://m.media-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg',
            },
            {
              colorName: "red",
              imgSrc:'https://m.media-amazon.com/images/I/61Jpxmkr3dL._UL1100_.jpg',
            },
            {
              colorName: "black",
              imgSrc:'https://m.media-amazon.com/images/I/61Uh7P5bIUL._UL1100_.jpg',
            },
          ],
          stock:7856,
          views: 95,
          prodInfoBrief:"ASIAN Men's Wonder-13 Sports Running Shoes",
          productInfo: [
            'Sole: Ethylene Vinyl Acetate',
            'Closure: Lace-Up',
            'Shoe Width: Medium',
            'Upper Material:Mesh',
            'Sole Material: Eva',
            'Closure: Lace-Ups',
            'Lifestyle: Sports',
            'About ASIAN shoes: we are an ISO 9001: 2015 certified seller of branded footwear online'
          ],
          feedback: [
            {
              memberId: "Roloroa Zoro",
              rating: 2,
              comment: 'O e three thousand world!'
            },
            {
              memberId: "Vinsmoke Sanji",
              rating: 4,
              comment: "Nami swan! Robin Chawn!"
            },
            {
              memberId: "Oden Gongtsugi",
              rating: 5,
              comment: "I wanna leave wano to travel the world!"
            }
          ],
        },
        {
          prodId: 'ms04',
          prodName: "Sparx Men's Sx0397g Running Shoes",
          prodCategory: 'Man',
          prodCategoryMinor: 'Man-Shoes',
          tags: ["Shoes","Man-Shoes", "Sparx" ],
          price: 780,
          brand: "Sparx",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/81cIpes7PbL._UL1500_.jpg',
          size:['US9.5','US10','US10.5','US11'],
          color: [
            {
              colorName: 'gray',
              imgSrc:'https://m.media-amazon.com/images/I/81cIpes7PbL._UL1500_.jpg',
            },
            {
              colorName: "blue",
              imgSrc:'https://m.media-amazon.com/images/I/81DSUmZektL._UL1500_.jpg',
            },
            {
              colorName: "black",
              imgSrc:'https://m.media-amazon.com/images/I/81xt08+0ZrL._UL1500_.jpg',
            },
          ],
          stock:3256,
          views: 915,
          prodInfoBrief:"Sparx Men's Sx0397g Running Shoes",
          productInfo: [
            'Sole: EVA & TPR',
            'Closure: Lace-Up',
            'Shoe Width: Medium',
            'Material:MESH',
            'Lifestyle:Casual',
            'Heel Type:Flats'
          ],
          feedback: [
            {
              memberId: "Leonard Hofstater",
              rating: 2,
              comment: "Why can't I buy my size. You treated me like my mother!"
            },
            {
              memberId: "Sheldon Cooper",
              rating: 5,
              comment: "Bazinga!"
            },
            {
              memberId: "Howard Woliwooz",
              rating: 5,
              comment: "As an astrounaut, it's a great shoe. Why? Don't ask!"
            }
          ],
        },
        {
          prodId: 'ms05',
          prodName: "Centrino Mens Formal Shoes",
          prodCategory: 'Man',
          prodCategoryMinor: 'Man-Shoes',
          tags: ["Shoes","Man-Shoes", "Centrino" ],
          price: 1530,
          brand: "Centrino",
          bestSeller: true,
          imgSrc: 'https://m.media-amazon.com/images/I/61AjKQSFMhL._UL1500_.jpg',
          size:['US9.5','US10','US10.5','US11'],
          color: [
            {
              colorName: 'black',
              imgSrc:'https://m.media-amazon.com/images/I/61AjKQSFMhL._UL1500_.jpg',
            },
            {
              colorName: "blue",
              imgSrc:'https://m.media-amazon.com/images/I/71FSKv5KDpS._UL1500_.jpg',
            },
            {
              colorName: "green",
              imgSrc:'https://m.media-amazon.com/images/I/71a9e1noBQL._UL1500_.jpg',
            },
            {
              colorName: "red",
              imgSrc:'https://m.media-amazon.com/images/I/710OO4KNh+S._UL1500_.jpg',
            },
          ],
          stock:156,
          views: 2915,
          prodInfoBrief:"Centrino Mens Formal Shoes",
          productInfo: [
            'Sole: Leather',
            'Closure: Lace-Up',
            'Shoe Width: Medium',
            'Outer Material: Synthetic',
            "Product type: Men's Uniform Shoes",
            'Target gender: male',
            'item weight: 600.0 grams',
          ],
          feedback: [
            {
              memberId: "Chandler Bing",
              rating: 4,
              comment: "As you know, I am a funny guy!Ha ha ha"
            },
            {
              memberId: "Joey Tribbiani",
              rating: 5,
              comment: "Just like my roomate, I am a fun guy as well but also a smart person."
            },
            {
              memberId: "Monica Geller",
              rating: 5,
              comment: "Yeah! I am a control-freak.So what?"
            }
          ],
        },
        {
          prodId: 'mw01',
          prodName: "TIMEX Analog Blue Men Watch TW00ZR262E",
          prodCategory: 'Man',
          prodCategoryMinor: 'Man-Watches',
          tags: ["Watches","Man-Watches", "TIMEX" ],
          price: 1095,
          brand: "TIMEX",
          bestSeller: true,
          imgSrc: 'https://m.media-amazon.com/images/I/71Kx6rgmlRS._UL1500_.jpg',
          size:['One Size'],
          color: [
            {
              colorName: "blue",
              imgSrc:'https://m.media-amazon.com/images/I/71Kx6rgmlRS._UL1500_.jpg',
            },
          ],
          stock:1156,
          views: 2215,
          prodInfoBrief:"TIMEX Analog Blue Men Watch TW00ZR262E",
          productInfo: [
            "Dial Color: Blue, Case Shape: Round, Dial Glass Material: Mineral. Shock Resistance: No",
            "Band Color: Brown, Band Material: Leather ; Clasp: Buckle",
            "Watch Movement Type: Quartz, Watch Display Type: Analog",
            "Case Material: Brass, Case Diameter: 40 millimeters, Brass Bezel ; Case Thickness: 8.8mm",
            "Water Resistance Depth: 30 meters",
            "1 year domestic warranty"
          ],
          feedback: [
            {
              memberId: "Jay Chou",
              rating: 4,
              comment: "A yo! A yo! Not bad yo!"
            },
            {
              memberId: "David Tao",
              rating: 5,
              comment: "The R&B pioneer in Taiwan."
            },
            {
              memberId: "Tank Lu",
              rating: 5,
              comment: "Am I the most underrated singer in Taiwan?"
            }
          ],
        },
        {
          prodId: 'mw02',
          prodName: "ASGARD Analog Men's & Boy's Watch (Multicolored Dial, Blue Colored Strap)",
          prodCategory: 'Man',
          prodCategoryMinor: 'Man-Watches',
          tags: ["Watches","Man-Watches", "ASGARD" ],
          price: 375,
          brand: "ASGARD",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/71pYwYSQtYL._UL1500_.jpg',
          size:['One Size'],
          color: [
            {
              colorName: "blue",
              imgSrc:'https://m.media-amazon.com/images/I/71pYwYSQtYL._UL1500_.jpg',
            },
            {
              colorName: "white",
              imgSrc:'https://m.media-amazon.com/images/I/71L1I5ZeVpL._UL1500_.jpg',
            },
          ],
          stock:1256,
          views: 515,
          prodInfoBrief:"ASGARD Analog Men's & Boy's Watch (Multicolored Dial, Blue Colored Strap)",
          productInfo: [
            '1 year ASGARD india replacement warranty',
            'Stainless steel strap, stainless steel back, water resistant',
            'Suitable for party wedding, formal and casual occasion',
            'Direct from the brand house, company box, warranty card, GST paid bill',
            'Package Content: 1 Watch'
          ],
          feedback: [
            {
              memberId: "Nike Yang",
              rating: 4,
              comment: "Just do it!"
            },
            {
              memberId: "Adidas Kevin",
              rating: 5,
              comment: "Impossible is nothing."
            },
          ],
        },
        {
          prodId: 'mw03',
          prodName: "SEIKO Analog Black Dial Men's Watch-SSC777P1",
          prodCategory: 'Man',
          prodCategoryMinor: 'Man-Watches',
          tags: ["Watches","Man-Watches", "SEIKO" ],
          price: 25375,
          brand: "SEIKO",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/61+k1nc-ybL._UL1048_.jpg',
          size:['One Size'],
          color: [
            {
              colorName: "black",
              imgSrc:'https://m.media-amazon.com/images/I/61+k1nc-ybL._UL1048_.jpg',
            }
          ],
          stock:7556,
          views: 5215,
          prodInfoBrief:"SEIKO Analog Black Dial Men's Watch-SSC777P1",
          productInfo: [
            'Wrist watches',
            'Bezel Function:	12 Hour Time Display',
            'Clasp:	Push Button Deployment Clasp',
            'Model Number: SSC777P1',
            'Movement: Quartz'
          ],
          feedback: [
            {
              memberId: "Kobe Bryant",
              rating: 4,
              comment: "Have you ever seen L.A at 4 am?"
            },
            {
              memberId: "Nick Young",
              rating: 3,
              comment: "What? What did you say? Mom."
            },
          ],
        },
        {
          prodId: 'mw04',
          prodName: "SKMEI Digital Men's Watch (Black Dial Black Colored Strap)",
          prodCategory: 'Man',
          prodCategoryMinor: 'Man-Watches',
          tags: ["Watches","Man-Watches", "SKMEI" ],
          price: 7490,
          brand: "SKMEI",
          bestSeller: true,
          imgSrc: 'https://m.media-amazon.com/images/I/61sYbegh10L._UL1000_.jpg',
          size:['One Size'],
          color: [
            {
              colorName: "gray",
              imgSrc:'https://m.media-amazon.com/images/I/61sYbegh10L._UL1000_.jpg',
            },
            {
              colorName: "red",
              imgSrc:'https://m.media-amazon.com/images/I/61oGqzi1HuL._UL1000_.jpg',
            },
            {
              colorName: "green",
              imgSrc:'https://m.media-amazon.com/images/I/61ZjdNMUE0L._UL1000_.jpg',
            },
            {
              colorName: "blue",
              imgSrc:'https://m.media-amazon.com/images/I/61ALCZqekEL._UL1000_.jpg',
            },
          ],
          stock:7556,
          views: 5215,
          prodInfoBrief:"SKMEI Digital Men's Watch (Black Dial Black Colored Strap)",
          productInfo: [
            'Dial Color: Blue; Dial Material: Stainless Steel',
            "Dial Shape: Round; Strap Color: Black",
            'Strap Material: Rubber; Watch Movement Type: Automatic',
            'Model number: Skmei_1270_Bl',
            'Warranty Type: Manufacturer - 6 Months Domestic Warranty on Manufacturing Defects'
          ],
          feedback: [
            {
              memberId: "Michael Jordan",
              rating: 5,
              comment: "Limits are like fears are always just an illusion."
            },
            {
              memberId: "Scottie Pippen",
              rating: 5,
              comment: "The league owe me a MVP of the Year!"
            },
          ],
        },
        {
          prodId: 'mw05',
          prodName: "CASIO Analog Black Dial Men's Watch-MTP-1374HD-2AVIF (A1646)",
          prodCategory: 'Man',
          prodCategoryMinor: 'Man-Watches',
          tags: ["Watches","Man-Watches", "CASIO" ],
          price: 4950,
          brand: "CASIO",
          bestSeller: true,
          imgSrc: 'https://m.media-amazon.com/images/I/61IlwQIwyxL._UL1100_.jpg',
          size:['One Size'],
          color: [
            {
              colorName: "blue",
              imgSrc:'https://m.media-amazon.com/images/I/61IlwQIwyxL._UL1100_.jpg',
            },
          ],
          stock:156,
          views: 7215,
          prodInfoBrief:"CASIO Analog Black Dial Men's Watch-MTP-1374HD-2AVIF (A1646)",
          productInfo: [
            'Dial Color: Black, Case Shape: Round, Dial Glass Material: Mineral. Size of case : 47×43.5×10.4mm',
            'Band Color: Silver, Band Material: Stainless Steel',
            'Watch Movement Type: Quartz, Watch Display Type: Analog',
            'Case Material: Metal, Case Diameter: 43.5 millimeters',
            'Water Resistance Depth: 50 meters, Fold-Over Clasp with Safety'
          ],
          feedback: [
            {
              memberId: "Lebron James",
              rating: 3,
              comment: "Everybody are going to Golden State."
            },
            {
              memberId: "Dwyane Wade",
              rating: 3,
              comment: "What an unbelieveble performance. I'll give you 9 points."
            },
          ],
        },
        {
          prodId: 'wc01',
          prodName: "MONTREZ Full Sleeve Solid Women Jacket",
          prodCategory: 'Woman',
          prodCategoryMinor: 'Woman-Clothes',
          tags: ["T-shirt","Woman-Cloth", "MONTREZ" ],
          price: 349,
          brand: "MONTREZ",
          bestSeller: true,
          imgSrc: 'https://m.media-amazon.com/images/I/41saMZqHpmS.jpg',
          size:['S','M','L','XL','2XL'],
          color: [
            {
              colorName: 'blue',
              imgSrc:'https://m.media-amazon.com/images/I/41saMZqHpmS.jpg',
            },
            {
              colorName: "black",
              imgSrc:'https://m.media-amazon.com/images/I/41XrYtw52xS.jpg',
            },
            {
              colorName: "green",
              imgSrc: 'https://m.media-amazon.com/images/I/41JMflxisnL.jpg',
            },
            {
              colorName: "red",
              imgSrc: 'https://m.media-amazon.com/images/I/415pZ3ZPUpL.jpg',
            },
          ],
          stock:126,
          views: 24505,
          prodInfoBrief:"MONTREZ Full Sleeve Solid Women Jacket",
          productInfo: [
            'Care Instructions: Machine Wash',
            'Care Instructions: Machine-wash',
            'Material - Denim',
            'Size Details : S - 34 Chest/31 Waist , M - 36 Chest/33 Waist, L - 38 Chest/35 Waist , XL - 40 Chest/37 Waist',
            'Simple, casual and stylish. Can with t-shirt, blouse, jeans, leisure pants.Perfect for autumn and winter outdoor, work and everyday life.',
            'This Women and Girl Jacket is designed according to the international standard.',
          ],
          feedback: [
            {
              memberId: "Jennifer Lopez",
              rating: 4,
              comment: 'I like the quality!'
            },
            {
              memberId: "Taylor Swift",
              rating: 5,
              comment: "I wear this T to world concert."
            },
            {
              memberId: "Fiona Lisa",
              rating: 3,
              comment: "It's too cheap. I only wear leather."
            }
          ],
        },
        {
          prodId: 'wc02',
          prodName: "AELOMART Women's Cotton Regular Top(AWT2053-Pn)",
          prodCategory: 'Woman',
          prodCategoryMinor: 'Woman-Clothes',
          tags: ["T-shirt","Woman-Cloth", "AELOMART" ],
          price: 399,
          brand: "AELOMART",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._UL1500_.jpg',
          size:['S','M','L'],
          color: [
            {
              colorName: 'yellow',
              imgSrc:'https://m.media-amazon.com/images/I/71lkjZ2hQ8L._UL1500_.jpg',
            },
            {
              colorName: "red",
              imgSrc:'https://m.media-amazon.com/images/I/719P+AkTEPL._UL1500_.jpg',
            },
            
          ],
          stock:4126,
          views: 4505,
          prodInfoBrief:"AELOMART Women's Cotton Regular Top(AWT2053-Pn)",
          productInfo: [
            'Care Instructions: Machine Wash',
            'Fit Type: Regular Fit',
            'Wash Care: Machine Wash',
            'Fabric Type: Cotton',
            'Pattern name: Striped',
            'Closure Type: Pull On',
            'Sleeve Type: Half Sleeve; Collar Style: Round Collar'
          ],
          feedback: [
            {
              memberId: "Julia Roberts",
              rating: 4,
              comment: 'Stunning color!'
            },
            {
              memberId: "Holly Berry",
              rating: 5,
              comment: "I wear cat suit at late night but wear AELOMART at work!"
            },
            {
              memberId: "Sharon Wang",
              rating: 3,
              comment: "The yellow one makes me look like a bee."
            }
          ],
        },
        {
          prodId: 'wc03',
          prodName: "Lymio Women Top for Women Top,Stylish Top, Casual Wear Top for Women/Girls Top",
          prodCategory: 'Woman',
          prodCategoryMinor: 'Woman-Clothes',
          tags: ["T-shirt","Woman-Cloth", "Lymio" ],
          price: 279,
          brand: "Lymio",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/61eUPmFHcOL._UL1280_.jpg',
          size:['S','M','L',"XL"],
          color: [
            {
              colorName: 'red',
              imgSrc:'https://m.media-amazon.com/images/I/61eUPmFHcOL._UL1280_.jpg',
            },
            {
              colorName: "blue",
              imgSrc:'https://m.media-amazon.com/images/I/610cNNl4VLL._UL1500_.jpg',
            },
            
          ],
          stock:2126,
          views: 2505,
          prodInfoBrief:"Lymio Women Top for Women Top,Stylish Top, Casual Wear Top for Women/Girls Top",
          productInfo: [
            'Care Instructions: Dry Clean Only',
            'Fit Type: Regular',
            'Fabric : Polyester',
            'Color : Pink',
            'Wash Care : first wash is dry clean after that use machine wash or hand wash',
            'Sleeve Type : Half Sleevw',
            'Style name: Western'
          ],
          feedback: [
            {
              memberId: "Cindy Wang",
              rating: 4,
              comment: 'Looking Good'
            },
            {
              memberId: "Dora James",
              rating: 5,
              comment: "Gogerous wearing.Can wear it in any occasion."
            },
            {
              memberId: "Karen Paul",
              rating: 3,
              comment: "Looks my granny's wearing."
            }
          ],
        },
        {
          prodId: 'wc04',
          prodName: "Lymio Women's Regular Color Chocker Neck Half Sleeve Polyester Digital Printed Top",
          prodCategory: 'Woman',
          prodCategoryMinor: 'Woman-Clothes',
          tags: ["T-shirt","Woman-Cloth", "Lymio" ],
          price: 369,
          brand: "Lymio",
          bestSeller: true,
          imgSrc: 'https://m.media-amazon.com/images/I/714QwfIyriL._UL1500_.jpg',
          size:['S',"XL"],
          color: [
            {
              colorName: 'green',
              imgSrc:'https://m.media-amazon.com/images/I/714QwfIyriL._UL1500_.jpg',
            },
            {
              colorName: "black",
              imgSrc:'https://m.media-amazon.com/images/I/71ohWSmPQ4L._UL1500_.jpg',
            },
            
          ],
          stock:126,
          views: 42505,
          prodInfoBrief:"Lymio Women's Regular Color Chocker Neck Half Sleeve Polyester Digital Printed Top",
          productInfo: [
            'Care Instructions: Dry Clean Only',
            'Fit Type: Regular',
            'Fabric : Polyester',
            'Color : Black',
            'Sleeve Type : puff Sleeve',
            'Wash Care : first wash is dry clean after that use machine wash or hand wash'
          ],
          feedback: [
            {
              memberId: "Una Liu",
              rating: 4,
              comment: 'Looking Good'
            },
            {
              memberId: "Dora James",
              rating: 5,
              comment: "Gogerous wearing.Can wear it in any occasion."
            },
            {
              memberId: "Karen Paul",
              rating: 3,
              comment: "Looks my granny's wearing."
            }
          ],
        },
        {
          prodId: 'wc05',
          prodName: "DHRUVI TRENDZ Women's Regular Fit T-Shirt",
          prodCategory: 'Woman',
          prodCategoryMinor: 'Woman-Clothes',
          tags: ["T-shirt","Woman-Cloth", "DHRUVI" ],
          price: 349,
          brand: "DHRUVI",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/81wtlI68FLS._UL1500_.jpg',
          size:['S',"XL"],
          color: [
            {
              colorName: 'blue',
              imgSrc:'https://m.media-amazon.com/images/I/81wtlI68FLS._UL1500_.jpg',
            },
            {
              colorName: "red",
              imgSrc:'https://m.media-amazon.com/images/I/91e+XExeWZS._UL1500_.jpg',
            },
            {
              colorName: "gray",
              imgSrc:'https://m.media-amazon.com/images/I/71GoG8xQURS._UL1467_.jpg',
            },
            
          ],
          stock:12786,
          views: 715,
          prodInfoBrief:"DHRUVI TRENDZ Women's Regular Fit T-Shirt",
          productInfo: [
            'Care Instructions: Hand Wash Only',
            'Fit Type: Regular Fit',
            'Fabric: Lycra || style: Casual top || Looks Trendy Top',
            'Team it with a pair of leggings, jeans, shorts and flats to step out in style',
            'This trendy top is designed for comfort and style Womens Feel Looks Casual Western Top',
            'Wash care : Wash Separate with Good Detergent, Do not bleach',
            'Occasion: Casual || Party || Beach || Formal'
          ],
          feedback: [
            {
              memberId: "Fanny King",
              rating: 4,
              comment: "It's very special"
            },
            {
              memberId: "Sandy James",
              rating: 5,
              comment: "Gogerous wearing.Can wear it in any occasion."
            },
            {
              memberId: "Ivy Jones",
              rating: 3,
              comment: "Well, someone like the historic style whether I am not part of that group"
            }
          ],
        },
        {
          prodId: 'wb01',
          prodName: "Leather Love Women's Pure Leather Long SlingHandBag [SS-LS]",
          prodCategory: 'Woman',
          prodCategoryMinor: 'Woman-Bags',
          tags: ["Bags","Woman-Bags", "Leather Love" ],
          price: 1999,
          brand: "Leather Love",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/81Lld2znF0L._UL1500_.jpg',
          size:["One Size"],
          color: [
            {
              colorName: 'black',
              imgSrc:'https://m.media-amazon.com/images/I/81Lld2znF0L._UL1500_.jpg',
            },
            {
              colorName: "red",
              imgSrc:'https://m.media-amazon.com/images/I/718-sz4S1bS._UL1500_.jpg',
            },
            {
              colorName: "green",
              imgSrc:'https://m.media-amazon.com/images/I/8167XpkNwxL._UL1500_.jpg',
            },
            {
              colorName: "red",
              imgSrc:'https://m.media-amazon.com/images/I/716TfFjygNS._UL1500_.jpg',
            },
            
          ],
          stock: 1786,
          views: 7215,
          prodInfoBrief:"Leather Love Women's Pure Leather Long SlingHandBag [SS-LS]",
          productInfo: [
            'Material : Leather',
            'The bag is made up of lightweight material and thus it is worth toting anywhere. Moreover, it is a perfect gifting option for your dear ones.',
            'Ideal for Women and Girls',
            'Fashion handbags for women make a perfect gift! Gift it to your near and dear ones and show off your excellent taste.',
            'Made in India'
          ],
          feedback: [
            {
              memberId: "Laura Sean",
              rating: 4,
              comment: "Not bad"
            },
            {
              memberId: "Simon Thomas",
              rating: 5,
              comment: "Bought it for my GF as birthday gift. Thank God, she likes it"
            },
            {
              memberId: "Steve Richardson",
              rating: 3,
              comment: "Technically, it's fake leather however not a bad product."
            }
          ],
        },
        {
          prodId: 'wb02',
          prodName: "Yovoni Exclusive Premium Designer Women's Handbag",
          prodCategory: 'Woman',
          prodCategoryMinor: 'Woman-Bags',
          tags: ["Bags","Woman-Bags", "Yovoni" ],
          price: 499,
          brand: "Yovoni",
          bestSeller: true,
          imgSrc: 'https://m.media-amazon.com/images/I/71llqY3e2kL._UL1500_.jpg',
          size:["One Size"],
          color: [
            {
              colorName: 'green',
              imgSrc:'https://m.media-amazon.com/images/I/71llqY3e2kL._UL1500_.jpg',
            },
            {
              colorName: "black",
              imgSrc:'https://m.media-amazon.com/images/I/81ReHo-KCOL._UL1500_.jpg',
            },
            {
              colorName: "red",
              imgSrc:'https://m.media-amazon.com/images/I/91b9b4ifH1L._UL1500_.jpg',
            },
            
          ],
          stock: 386,
          views: 31215,
          prodInfoBrief:"Yovoni Exclusive Premium Designer Women's Handbag",
          productInfo: [
            "MATERIAL : Crafted From Tough, 100% Semi PU-Grain, Which Takes Hits Well And Looks Even Better With Age.", 
            "Full-Grain Semi PU Is The Most Expensive And Toughest Part.",
            "CRAFTSMANSHIP, STICHES AND PARTS: Our Products Are Designed By Professionally Skilled Craftsmen, Because Of Which The Bags Have Best Finishing In Its Class. ",
            "OCCASION : Looks Great In The Courtroom, Boardroom, Or Worldwide Travel.", 
            "Our Handbags Has Been Crafted For Casual, Party Wear And Official Use.",
            "FEATURE - Comfortable Handbag,larger capacity. Intimate design, adjustable shoulder strap make this Handbag could be used by anyone, perfect for dating, short trips.",
            "WARRANTIES - If there's any reason causes you not completely satisfied with our product.",
          ],
          feedback: [
            {
              memberId: "Winnie Wade",
              rating: 4,
              comment: "It's very match for my skirts"
            },
            {
              memberId: "Judy Randle",
              rating: 5,
              comment: "This is what I am looking for.Nice Bag!"
            },
            {
              memberId: "Molly Pinkman",
              rating: 3,
              comment: "It's not a expensive product. But I think the manufacture still have to spectaculate the quality of their products."
            }
          ],
        },
        {
          prodId: 'wb03',
          prodName: "Leather Love Women's Pure Leather RHandBag [SS-R]",
          prodCategory: 'Woman',
          prodCategoryMinor: 'Woman-Bags',
          tags: ["Bags","Woman-Bags", "Leather Love" ],
          price: 3500,
          brand: "Leather Love",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/81uJO8WG43L._UL1500_.jpg',
          size:["One Size"],
          color: [
            {
              colorName: 'red',
              imgSrc:'https://m.media-amazon.com/images/I/81uJO8WG43L._UL1500_.jpg',
            },
            {
              colorName: "black",
              imgSrc:'https://m.media-amazon.com/images/I/91VFkIY0q4S._UL1500_.jpg',
            },
            {
              colorName: "green",
              imgSrc:'https://m.media-amazon.com/images/I/41tLNjPz-3L.jpg',
            },
            {
              colorName: "white",
              imgSrc:'https://m.media-amazon.com/images/I/71FKLkBPFnL._UL1500_.jpg',
            },
            
          ],
          stock: 1386,
          views: 21215,
          prodInfoBrief:"Leather Love Women's Pure Leather RHandBag [SS-R]",
          productInfo: [
            "Material : Leather",
            "The bag is made up of lightweight material and thus it is worth toting anywhere. Moreover, it is a perfect gifting option for your dear ones.",
            "Ideal for Women and Girls",
            "Fashion handbags for women make a perfect gift! Gift it to your near and dear ones and show off your excellent taste.",
            "Made in India"
          ],
          feedback: [
            {
              memberId: "Queen Anderson",
              rating: 2,
              comment: "I ordered it on 5/13 but get the goods on 6/2. Are you kidding me?"
            },
            {
              memberId: "Anne FIsher",
              rating: 5,
              comment: "I bought two! Because it's just too beautiful."
            },
          ],
        },
        {
          prodId: 'wb04',
          prodName: "Lino Perros Women's Handbag",
          prodCategory: 'Woman',
          prodCategoryMinor: 'Woman-Bags',
          tags: ["Bags","Woman-Bags", "Lino Perros" ],
          price: 3500,
          brand: "Lino Perros",
          bestSeller: true,
          imgSrc: 'https://m.media-amazon.com/images/I/A1UGKC5cYKL._UL1500_.jpg',
          size:["One Size"],
          color: [
            {
              colorName: 'blue',
              imgSrc:'https://m.media-amazon.com/images/I/A1UGKC5cYKL._UL1500_.jpg',
            },
            {
              colorName: "black",
              imgSrc:'https://m.media-amazon.com/images/I/71duMDnaGlL._UL1500_.jpg',
            },
            {
              colorName: "gray",
              imgSrc:'https://m.media-amazon.com/images/I/81HDIBUiz7L._UL1500_.jpg',
            },
            {
              colorName: "red",
              imgSrc:'https://m.media-amazon.com/images/I/81PJVwLmKjL._UL1500_.jpg',
            },
            
          ],
          stock: 0,
          views: 23487,
          prodInfoBrief:"Lino Perros Women's Handbag",
          productInfo: [
            "Leatherette Navy Colored Hand bag",
            "27 centimeters height X 32 centimeters length X 12 centimeters width",
            "Compartment :2",
            "Closure :Zipper, Pockets : 3",
            "Do not expose to extreme heat"
          ],
          feedback: [
            {
              memberId: "Princess Oliver",
              rating: 2,
              comment: "I bought 5 already. But I want more!"
            },
            {
              memberId: "Nancy Williams",
              rating: 4,
              comment: "Good looking and can take it to any occassion."
            },
          ],
        },
        {
          prodId: 'wb05',
          prodName: "Urban Forest Nancy Quilted Leather Bag for Women",
          prodCategory: 'Woman',
          prodCategoryMinor: 'Woman-Bags',
          tags: ["Bags","Woman-Bags", "Urban Forest" ],
          price: 1879,
          brand: "Urban Forest",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/81XM1lam+iL._UL1500_.jpg',
          size:["One Size"],
          color: [
            {
              colorName: 'red',
              imgSrc:'https://m.media-amazon.com/images/I/81XM1lam+iL._UL1500_.jpg',
            },
            {
              colorName: "black",
              imgSrc:'https://m.media-amazon.com/images/I/81SXBbAs6VL._UL1500_.jpg',
            },
            {
              colorName: "green",
              imgSrc:'https://m.media-amazon.com/images/I/81LYvlXRutL._UL1500_.jpg',
            },
            {
              colorName: "blue",
              imgSrc:'https://m.media-amazon.com/images/I/81zTed3Y5FL._UL1500_.jpg',
            },
            
          ],
          stock: 2350,
          views: 3187,
          prodInfoBrief:"Urban Forest Nancy Quilted Leather Bag for Women",
          productInfo: [
            'The product comes in Proper Packaging',
            'It is Durable',
            'It is Easy to use'
          ],
          feedback: [
            {
              memberId: "Unlucky Lucy",
              rating: 1,
              comment: "I bought a defective. The belt broken when I just carry it for less than 3 days."
            },
            {
              memberId: "Sally Lane",
              rating: 4,
              comment: "Good looking and can take it to any occassion."
            },
          ],
        },
        {
          prodId: 'wj01',
          prodName: "Joyalukkas Emerald Loose Gemstone",
          prodCategory: 'Woman',
          prodCategoryMinor: 'Woman-Jewellery',
          tags: ["Jewellery","Woman-Jewellery", "Joyalukkas" ],
          price: 79360,
          brand: "Joyalukkas",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/516eZL-ZyXL._UL1000_.jpg',
          size:["One Size"],
          color: [
            {
              colorName: 'green',
              imgSrc:'https://m.media-amazon.com/images/I/516eZL-ZyXL._UL1000_.jpg',
            },
          ],
          stock: 750,
          views: 31287,
          prodInfoBrief:"Joyalukkas Emerald Loose Gemstone",
          productInfo: [
            "Joyalukkas Emerald Loose Gemstone",
            "Natural emeralds are commonly enhanced",
            "Deep green in color and transparent",
            "Pear in shape and mixed cut",
            "Gemstone certified by IGI",
            "To ensure a secured delivery experience, delivery associate will request for a government issued photo ID of the customer at the time of order delivery"
          ],
          feedback: [
            {
              memberId: "Cinderella Jones",
              rating: 5,
              comment: "This jewellery has my name on it."
            },
            {
              memberId: "Zona Allen",
              rating: 4,
              comment: "It has very pure color. What a masterpiece made by the Nature."
            },
          ],
        },
        {
          prodId: 'wj02',
          prodName: "AVSAR 18k (750) White Gold and Diamond Ring for Women",
          prodCategory: 'Woman',
          prodCategoryMinor: 'Woman-Jewellery',
          tags: ["Jewellery","Woman-Jewellery", "AVSAR" ],
          price: 5154,
          brand: "AVSAR",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/51rb8nUL-pL._UL1500_.jpg',
          size:["One Size"],
          color: [
            {
              colorName: 'gray',
              imgSrc:'https://m.media-amazon.com/images/I/51rb8nUL-pL._UL1500_.jpg',
            },
          ],
          stock: 2050,
          views: 4287,
          prodInfoBrief:"AVSAR 18k (750) White Gold and Diamond Ring for Women",
          productInfo: [
            'This ring is made of 18k (750) white gold',
            'BIS hallmarked',
            'Adorned with real diamond',
            'The diamond is certified and has a Seller certificate',
            'The product is 19 mm in length and 2 mm in width',
            'This product can be returned in 30 days',
            'Closure type is exactly what is shown in the picture',
            'BIS Hallmark is NOT a separate certificate, it is an inscription made on the product'
          ],
          feedback: [
            {
              memberId: "Dior Quin",
              rating: 4,
              comment: "Plain design but brings out the beauty of diamond."
            },
            {
              memberId: "Eva Longoria",
              rating: 5,
              comment: "I wear it to attend my ex-husband's wedding. Looking him so nervous made my day."
            },
          ],
        },
        {
          prodId: 'wj03',
          prodName: "MJ Women's Red Enamel Band Design Comfortable Toe Rings in Pure 92.5 Sterling Silver",
          prodCategory: 'Woman',
          prodCategoryMinor: 'Woman-Jewellery',
          tags: ["Jewellery","Woman-Jewellery", "MJ" ],
          price: 880,
          brand: "MJ",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/41+h98fZWrL.jpg',
          size:["One Size"],
          color: [
            {
              colorName: 'red',
              imgSrc:'https://m.media-amazon.com/images/I/41+h98fZWrL.jpg',
            },
          ],
          stock: 1950,
          views: 387,
          prodInfoBrief:"MJ Women's Red Enamel Band Design Comfortable Toe Rings in Pure 92.5 Sterling Silver",
          productInfo: [
            'enuine Pure 92.5% Sterling Silver Toe Rings and not just Silver Plated.',
            'Please check for "925" authenticity mark on every product.',
            'Metal Stamp: 0.925 Sterling Silver'
          ],
          feedback: [
            {
              memberId: "Xavier Rodriguez",
              rating: 3,
              comment: "Soso. Nothing special."
            },
            {
              memberId: "Little Girl",
              rating: 5,
              comment: "My mommy gave it to me. Love it!"
            },
          ],
        },
        {
          prodId: 'wj04',
          prodName: "Senco Gold 950 Platinum Pendant for Women",
          prodCategory: 'Woman',
          prodCategoryMinor: 'Woman-Jewellery',
          tags: ["Jewellery","Woman-Jewellery", "Senco Gold" ],
          price: 7884,
          brand: "Senco Gold",
          bestSeller: true,
          imgSrc: 'https://m.media-amazon.com/images/I/41WXVne8a7L._UL1000_.jpg',
          size:["One Size"],
          color: [
            {
              colorName: 'gray',
              imgSrc:'https://m.media-amazon.com/images/I/41WXVne8a7L._UL1000_.jpg',
            },
          ],
          stock: 870,
          views: 38294,
          prodInfoBrief:"Senco Gold 950 Platinum Pendant for Women",
          productInfo: [
            'This pendant is made of 950 platinum platinum',
            'The diamond is certified and has a UL Card from PGI certificate',
            'The product is 2 cm in length and 2 cm in width',
            'This product can be returned in 30 days',
            'Buyback: Exchange & Buyback is available as per Seller / Brand Policy',
            'The chain is not included with the pendant',
            'BIS Hallmark is NOT a separate certificate, it is an inscription made on the product'
          ],
          feedback: [
            {
              memberId: "Ally Huang",
              rating: 5,
              comment: "I put on it then I became the party queen."
            },
          ],
        },
        {
          prodId: 'om01',
          prodName: 'Tecno Camon 17 (Magnet Black, 6GB RAM, 128GB Storage)| 64MP Quad Camera | Professional Video| 6.8" FHD',
          prodCategory: 'Other',
          prodCategoryMinor: 'Other-Mobilephone',
          tags: ["Mobilephone","Other-Mobilephone", "Tecno" ],
          price: 13999,
          brand: "Tecno",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/81G11P+cx9L._SL1500_.jpg',
          size:["64G","128G"],
          color: [
            {
              colorName: 'green',
              imgSrc:'https://m.media-amazon.com/images/I/81G11P+cx9L._SL1500_.jpg',
            },
            {
              colorName: 'gray',
              imgSrc:'https://m.media-amazon.com/images/I/81rOhd8UU4L._SL1500_.jpg',
            },
            {
              colorName: 'black',
              imgSrc:'https://m.media-amazon.com/images/I/81bNGXJTHoL._SL1500_.jpg',
            },
          ],
          stock: 1870,
          views: 8294,
          prodInfoBrief: 'Tecno Camon 17 (Magnet Black, 6GB RAM, 128GB Storage)| 64MP Quad Camera | Professional Video| 6.8" FHD',
          productInfo: [
            '64MP AI Quad Camera| 16MP Front| Super Night Shot | Professional Video Modes',
            '6.8"FHD+ display |180 Hz Touch Sampling Rate',
            'Superfast Helio G85 Gaming Processor',
            'Bigger 128GB ROM and 6GB RAM',
            '5000mAh battery | 18W Fast Charger'
          ],
          feedback: [
            {
              memberId: "Yamamoto Yuki",
              rating: 3,
              comment: "I bought it for 10 days. Still get used to it user interface."
            },
            {
              memberId: "Ben Mitchell",
              rating: 5,
              comment: "It's built-in App is very convient than all the other phone that I have used."
            },
          ],
        },
        {
          prodId: 'om02',
          prodName: 'Oppo F17 (Classic Silver, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
          prodCategory: 'Other',
          prodCategoryMinor: 'Other-Mobilephone',
          tags: ["Mobilephone","Other-Mobilephone", "Oppo" ],
          price: 16990,
          brand: "Oppo",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/81-xJ79cnjL._SL1500_.jpg',
          size:["128G",'256G'],
          color: [
            {
              colorName: 'red',
              imgSrc:'https://m.media-amazon.com/images/I/81-xJ79cnjL._SL1500_.jpg',
            },
            {
              colorName: 'blue',
              imgSrc:'https://m.media-amazon.com/images/I/81lDF673d9L._SL1500_.jpg',
            },
            {
              colorName: 'gray',
              imgSrc:'https://m.media-amazon.com/images/I/81Nv7yT879L._SL1500_.jpg',
            },
          ],
          stock: 1240,
          views: 82574,
          prodInfoBrief: 'Oppo F17 (Classic Silver, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
          productInfo: [
              'Memory, Storage & SIM: 6GB RAM | 128GB internal memory 3-card slot can support up to 256GB.',
              'Dual SIM (nano+nano) dual-standby (4G+4',
              '16MP main camera + 8MP wide angle camera + 2MP mono camera + 2MP mono rear camera with photo',
              '4015mAH massive lithium-polymer battery with 30W VOOC flash charge 4',
              '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
              'Box also includes: Adapter, data cable, sim card ejector tool, earphones, quick start guide and warranty.'
          ],
          feedback: [
            {
              memberId: "Ed Danny",
              rating: 3,
              comment: "I send back to the oppo store for three times in 2 weeks. Really driving me crazy."
            },
            {
              memberId: "Lano Daniel",
              rating: 5,
              comment: "Really enjoy the feature of this mobile phone."
            },
          ],
        },
        {
          prodId: 'om03',
          prodName: 'Mi 11X Pro 5G (Cosmic Black, 8GB RAM, 256GB Storage)',
          prodCategory: 'Other',
          prodCategoryMinor: 'Other-Mobilephone',
          tags: ["Mobilephone","Other-Mobilephone", "Mi" ],
          price: 39999,
          brand: "Mi",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/716FVMg72GS._SL1500_.jpg',
          size:["128G",'256G'],
          color: [
            {
              colorName: 'black',
              imgSrc:'https://m.media-amazon.com/images/I/716FVMg72GS._SL1500_.jpg',
            },
            {
              colorName: 'white',
              imgSrc:'https://m.media-amazon.com/images/I/71+g+SNcILS._SL1500_.jpg',
            },
            {
              colorName: 'blue',
              imgSrc:'https://m.media-amazon.com/images/I/71YLjYRI7CS._SL1500_.jpg',
            },
          ],
          stock: 7890,
          views: 67574,
          prodInfoBrief: 'Mi 11X Pro 5G (Cosmic Black, 8GB RAM, 256GB Storage)',
          productInfo: [
            'Qualcomm Snapdragon 888 5G with Kryo 680 Octa-core', 
            '5nm process; Up to 2.84GHz clock speed; Liquidcool technology',
            'Camera: 108 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera',
            'Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch)',
            '2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology',
            'Battery: 4520 mAH large battery with 33W fast charger in-box and Type-C connectivity',
            'Memory, Storage & SIM: 8GB LPDDR5 RAM | 128GB UFS 3.1 storage'
          ],
          feedback: [
            {
              memberId: "Ian Molina",
              rating: 4,
              comment: "Mi really is the cheapest and powerful mobile phone."
            },
            {
              memberId: "Mandy Williamson",
              rating: 5,
              comment: "I like not only MI watch and MI appliance also Mi phone."
            },
          ],
        },
        {
          prodId: 'om04',
          prodName: 'Nokia G20 Smartphone',
          prodCategory: 'Other',
          prodCategoryMinor: 'Other-Mobilephone',
          tags: ["Mobilephone","Other-Mobilephone", "Nokia" ],
          price: 12990,
          brand: "Nokia",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/61NoYt2pvpS._SL1500_.jpg',
          size:["64G"],
          color: [
            {
              colorName: 'gray',
              imgSrc:'https://m.media-amazon.com/images/I/61NoYt2pvpS._SL1500_.jpg',
            },
            {
              colorName: 'blue',
              imgSrc:'https://m.media-amazon.com/images/I/61OiHUy-bfS._SL1500_.jpg',
            },
          ],
          stock: 12890,
          views: 107574,
          prodInfoBrief: 'Nokia G20 Smartphone',
          productInfo: [
            'A 48 MP quad camera with powerful AI imaging modes and OZO Audio.',
            'Up to 3 days without charging with AI-assisted battery with finger print recognition',
            'Impressive 6.5” (16.51cm) HD+ screen, 1600x720 pixels resolution, 21:9 aspect ratio.',
            '60 Hz refresh rate, with a teardrop display and a brightness boost',
            'Powered by the MediaTek G35 processor and comes equipped with 4GB RAM & 64GB Capacity',
            'Android 11 with up to 2 years of OS updates and 3 years of monthly security updates.',
          ],
          feedback: [
            {
              memberId: "Lola Weng",
              rating: 4,
              comment: "Hope Nokia can get back to the glory era."
            },
            {
              memberId: "Dennis Bobby",
              rating: 5,
              comment: "I am a retired army. Nokia 3310 save my life in Aghanistan."
            },
          ],
        },
      ],



      productsMan: [
        {
          name: "Van Heusen",
          prodName: "Allen Solly Men's Polo",
          tags: ["T-shirt","Man-Cloth", "Van Heusen" ],
          price: 599,
          brand: "Van Heusen",
          bestSeller: true,
          imgSrc: 'https://m.media-amazon.com/images/I/81mE0KcpjJL._AC_UL480_FMwebp_QL65_.jpg',
          size:['S','M','L','XL','2XL'],
          color: [
            {
              colorName: 'green',
              imgs: {
                bigImgSrc:'https://m.media-amazon.com/images/I/81mE0KcpjJL._AC_UL480_FMwebp_QL65_.jpg',
              }
            },
            {
              colorName: "blue",
              imgs: {
                bigImgSrc:'https://m.media-amazon.com/images/I/81QVEO08vrL._UL1500_.jpg',
              },
            },
            {
              colorName: "black",
              imgs: {
                bigImgSrc: 'https://m.media-amazon.com/images/I/81D76vnOAsS._UL1500_.jpg',
              },
            },
          ],
          stock:326,
          views: 205,
          prodInfoBrief:"Men's Solid Regular Fit Polo",
          productInfo: [
            "Care Instructions: Wash with mild detergent, do not bleach, dry in shade",
            "Fit Type: regular fit",
            "60% cotton and 40% polyester",
            "Regular fit",
            'Banded collar',
            'Half sleeve',
            'Wash with mild detergent, do not bleach, dry in shade'
          ],
          feedback: [
            {
              memberId: "Bruce",
              rating: 5,
              comment: 'This cloth is so amazing!'
            },
            {
              memberId: "Joane",
              rating: 3,
              comment: "My boyfreind doesn't like it! It makes him look like creepy."
            },
          ],
        },
        {
          name: "AELOMART",
          tags: ["phone", "mi", "electronics"],
          price: 489,
          brand: "",
          bestSeller: false,
          imgSrc: 'https://m.media-amazon.com/images/I/71kIhgERsfL._AC_UL480_FMwebp_QL65_.jpg',
          color: [
            {
              colorName: "silver",
              imgs: {
                // bigImg: require("../../assets/images/homepage/flash-sale/flash-sale1-big-img1.jpg"),
                // smallImg: require("../../assets/images/homepage/flash-sale/flash-sale1-small-img1.jpg"),
              },
            },
            {
              colorName: "black",
              imgs: {
                // bigImg: require("../../../assets/images/homepage/flash-sale/flash-sale1-big-img2.jpg"),
                // smallImg: require("../../../assets/images/homepage/flash-sale/flash-sale1-small-img2.jpg"),
              },
            },
            {
              colorName: "white",
              imgs: {
                // bigImg: require("../../../assets/images/homepage/flash-sale/flash-sale1-big-img3.jpg"),
                // smallImg: require("../../../assets/images/homepage/flash-sale/flash-sale1-small-img3.jpg"),
              },
            },
          ],
          stock: 503,
          views: 205,
          prodInfoBrief:"Men's Solid Regular Fit Polo",
          productInfo: [
            "Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool",
            "Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera",
            "Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology",
          ],
          feedback: [
            {
              memberId: "Bruce",
              rating: 3,
            },
            {
              memberId: "Joane",
              rating: 3,
            },
          ],
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
