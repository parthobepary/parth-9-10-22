const numbers = [3, 4, 50, 50, 5, 5];
const numbers2 = [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0];
const voiel = ["a", "e", "i", "o", "u"];
const fakeData = [
  {
    name: "I Phone 13 Pro",
    price: 899,
    brand: "iphone",
    rating: { average: "4.2", user_count: 200 },
    discount: "20%",
  },
  {
    name: "I Phone 7",
    price: 399,
    brand: "iphone",
    rating: { average: "3.9", user_count: 600 },
    discount: "0%",
  },
  {
    name: "I Phone sr",
    price: 599,
    brand: "iphone",
    rating: { average: "4.24", user_count: 450 },
    discount: "20%",
  },
  {
    name: "I Phone 12",
    price: 599,
    brand: "iphone",
    rating: { average: "4.3", user_count: 167 },
    discount: "14%",
  },
  {
    name: "Samsung Note 10",
    price: 699,
    brand: "samsung",
    rating: { average: "3.2", user_count: 154 },
    discount: "0%",
  },
  {
    name: "Samsung Note 11",
    price: 799,
    brand: "samsung",
    rating: { average: "4.7", user_count: 312 },
    discount: "5%",
  },
  {
    name: "A52s",
    price: 499,
    brand: "samsung",
    rating: { average: "4.6", user_count: 180 },
    discount: "6%",
  },
  {
    name: "A52s 5G",
    price: 599,
    brand: "samsung",
    rating: { average: "4.4", user_count: 61 },
    discount: "0%",
  },
  {
    name: "I Phone 14",
    price: 800,
    brand: "iphone",
    rating: { average: "4.8", user_count: 20 },
    discount: "0%",
  },
  {
    name: "I Phone 14 pro max",
    price: 1200,
    brand: "iphone",
    rating: { average: "5", user_count: 1 },
    discount: "50%",
  },
  {
    name: "Xiaomi Poco M5",
    price: 267,
    brand: "xiaomi",
    rating: { average: "2.3", user_count: 5 },
    discount: "10%",
  },
  {
    name: "Xiaomi A1",
    price: 199,
    brand: "xiaomi",
    rating: { average: "2.1", user_count: 9 },
    discount: "23%",
  },
  {
    name: "Vivo Y75s",
    price: 256,
    brand: "vivo",
    rating: { average: "4.1", user_count: 43 },
    discount: "16%",
  },
  {
    name: "Vivo iQOO 9T",
    price: 476,
    brand: "vivo",
    rating: { average: "4.5", user_count: 134 },
    discount: "20%",
  },
];

const fakeData2 = [
  {
    id: 1,
    parent_id: null,
    name: "Courses",
    children: [
      {
        id: 3,
        parent_id: 1,
        name: "Subject Wise Videos",
        children: [],
      },
      {
        id: 4,
        parent_id: 1,
        name: "Bangla",
        children: [
          {
            id: 7,
            parent_id: 4,
            name: "Subject Wise Videos",
            children: [
              {
                id: 10,
                parent_id: 7,
                name: "Something",
                children: [
                  {
                    id: 14,
                    parent_id: 10,
                    name: "Anything",
                    children: [
                      {
                        id: 18,
                        parent_id: 10,
                        name: "Im last level",
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    parent_id: 16,
    name: "Books",
    children: [
      {
        id: 7,
        parent_id: 4,
        name: "Subject Wise Videos",
        children: [],
      },
    ],
  },
];

//ques -14

const emptyData = [];
fakeData2.map(f =>{
    const findData = y =>{
        y.children.map(c =>{
            emptyData.push(c.name)
            findData(c)
        })
    }
    findData(f)
});
console.log(emptyData);

//ques -15

let getparent = [];

fakeData2.map(f =>{
    getparent.push({parent: f.name, children:f.children.length})
    const findData = y =>{
        if(y.children.length > 0){
            y.children.map( x2 => {
                if(x2.children.length > 0 ){
                    getparent.push({parent: x2.name, children:x2.children.length})
                    findData(x2)
                }
            })
        }
    }
    findData(f)
});

console.log(getparent);


/* // ques-1

const PrientOddNumber = (number) => {
  let oddArray = [];
  for (let i = 0; i <= number; i++) {
    if (i % 2 != 0) {
      oddArray.push(i);
    }
  }
  return oddArray;
};

console.log(PrientOddNumber(100));

// ques 2

// Sort the numbers in ascending order:
console.log(
  "Answer no Qus-2",
  numbers.sort((a, b) => a - b)
);

// ques-3 

const sumation = numbers.reduce((per, cur) => {
    return (per + cur)
});

console.log(sumation); 

// ques - 4

function getUnique(number) {
  var uniqueArray = [];

  for (i = 0; i < number.length; i++) {
    if (uniqueArray.indexOf(number[i]) === -1) {
      uniqueArray.push(number[i]);
    }
  }

  return uniqueArray.sort();
}
console.log(getUnique(numbers)); 

// ques - 5

const removeNagativeValue = numbers2.filter(n => n > 0);
console.log(removeNagativeValue); 

// ques - 6

const devidetBy10 = numbers2.filter(n => n % 10 == 0);
console.log(devidetBy10); 

// ques 7

const getVouelCount = (str) => {
    var totalCount = 0;
    for(let letter of str){
        if(voiel.includes(letter.toLowerCase())){
            totalCount ++
        }
    }
    return totalCount;
}

console.log(getVouelCount('HELLO I AM PARTHO')); 

// ques- 8

const shortedData = fakeData.sort((a, b) => (a.price < b.price) ? 1: -1);
console.log(shortedData);*/

//ques - 9
 const NewArray = [];

const newObject = (datas) => {
  for (let data of datas) {
    let discunt = data.discount;
    const withParsent = discunt.split("%");
    const OnlyNumber = withParsent[0];
    if (parseInt(OnlyNumber) > 0) {
      data.discounted_price = parseInt(
        (data.price * (parseInt(OnlyNumber) / 100)).toFixed(2)
      );
    } else {
      data.discounted_price = data.price;
    }
    NewArray.push(data);
  }
  return NewArray;
};
console.log(newObject(fakeData));

// ques- 10

const shortedData = NewArray.sort((a, b) =>
  a.discounted_price < b.discounted_price ? 1 : -1
);
console.log(shortedData);

// ques- 11

const shortedRating = fakeData.sort((a, b) =>
  a.rating.average < b.rating.average ? 1 : -1
);
console.log(shortedRating);

// ques -12

 const iPhone = fakeData.filter(element => {
    // 👇️ using AND (&&) operator
    return element.price > 500 && element.brand.includes('iphone');
  });
console.log(iPhone); 

//ques - 13

const iPhoneAndSamsung = fakeData.filter((element) => {
  // 👇️ using AND (&&) operator
  return (
    element.price > 400 &&
    element.brand.includes("iphone") ||
    element.brand.includes("samsung")
  );
});
console.log(iPhoneAndSamsung);
