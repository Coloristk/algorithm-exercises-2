function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin); // ตรงนี้ใช้ Chatgpt ช่วยเพราะไม่รู้ว่าต้องใส่ () ด้วย
}

let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false
