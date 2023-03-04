//**　const let 変数 */
// var vall = "var変数";
// console.log(vall);

// // var変数は上書き可能
// vall = "var変数は上書き可能";
// console.log(vall);

// // var変数は再宣言可能
// var vall = "var変数は再宣言可能";
// console.log(vall);

// let valll = "let変数";
// console.log(valll);

// // let変数は上書き可能
// val2 = "let変数は上書き可能";
// console.log(val2);

// // let変数は再宣言できない
// let val2 = "let変数は再宣言できない";

// const valll = "const変数";
// console.log(val3);

// //const変数は上書き不可
// // valll = "const上書き";

// //const変数は再宣言不可
// const　valll = "constは再宣言不可"；

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "マイマイ",
//   age: 28
// };
// val4.name = "変更";
// val4.address = "大阪市";
// console.log(val4);

//配列
// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// //上書き可能
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 **/

// const name = "パピー";
// const age = 28;
// //私の名前はパピーです。年齢は28歳です

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //現在の方法（テンプレート文字列）
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 **/

//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// //単一処理の場合は1行で省略可能
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(20, 50));

/**
 * 分割代入
 **/
// const myProfile = {
//   name: "マミー",
//   age: 28
// };

// //助長なコード
// //const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}才です。`;
// //const{}で先に宣言したもの取得する。（分割代入）
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}才です。`;
// console.log(message2);

// const myProfile = [`mammy`, 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}才です。`;
// console.log(message3);

// //配列の分割代入
// const [name, age] = myProfile;
// const message4 = `名前は${name}です、年齢は${age}才です。`;
// console.log(message4);

/**
 * デフォルト値
 **/
//デフォルト値（name =初期値）
// const sayhello = (name = "肥後") => console.log(`こんにちは${name}さん`);
// //コード的によくない
// //sayhello();
// sayhello("権三");

/**
 * スプレッド構文　→「...」順番に処理する
 **/
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumfunc = (num1, num2) => console.log(num1 + num2);
// sumfunc(arr1[0], arr1[1]);
//上をスプレッド構文を使うと
// sumfunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

//🌟配列コピ-●
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
// 🌟配列結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//参照が同じになってしまう。❌
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// //arr8はOK
// console.log(arr8);
// //arr4の値が変わってしまう
// console.log(arr4);

//**mapやfilterを使った配列の処理*/

//map
// const nameArr = ["古池", "西尾", "肥後"];
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
//🌟1行で配列が出力できる
// nameArr.map((name) => console.log(`${name}です`));

//filter
// const numArr = [1, 2, 3, 4, 5];
//🌟filterはある条件を満たしたものだけ抽出するときに使う
// const newNumArr = numArr.filter((num) => {
//   //returnの中は条件
//   return num % 2 === 0;
// });
// console.log(newNumArr);
// const newNameArr = nameArr.map((name) => {
//   if (name === "肥後") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 **/
//🌟ある条件　？　条件がtrueのとき　：　条件がfalseのtき
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
//toLocaleString=三桁カンマ表示
// console.log(num.toLocaleString());
//🌟typeofは型判断
// const formattedNum =
//   typeof num === `number` ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

//returnで使う三項演算子
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を越えています` : `許容範囲内です`;
// };
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知る　＆＆　||
 **/
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か２はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も２もtrueになります");
// }

//||は左側がfalseとなるとき右側を返す
// const num = null;
//num(左側)｜｜"金額未設定です。"（右側）
// const fee = num || "金額未設定です。";
// console.log(fee);

//&&は左側がtrueとなるとき右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
