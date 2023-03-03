const {v4: uuidv4} = require('uuid');


for (let i = 0; i < 10; i++) {
  const guid = uuidv4();
  console.log(guid);
}

console.log('test');
