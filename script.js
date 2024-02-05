fetch('resume.json')
  .then(r => r.json())
  .then(data => {
    forLoop(data);
    forinLoop(data);
    forofLoop(data);
    foreachLoop(data);
  })
  .catch(error => console.error('Error fetching JSON:', error));
    


  function forLoop(obj){
    let keys =Object.keys(obj);
    for(let i=0;i<keys.length;i++){
        console.log(keys[i]+": ");
        if(obj[keys[i]].length&&Array.isArray(obj[keys[i]])){
          for(let j=0;j<obj[keys[i]].length;j++){
            console.log(obj[keys[i]][j]);
          }
        }
        else if(typeof obj[keys[i]]==='object' && !obj[keys[i]].length){
          for(const [key,value] of Object.entries(obj[keys[i]])){
            console.log(`${key}: ${value}`);
          }
        }
        else{
            console.log(obj[keys[i]]);
        }
    }
  }

  function forinLoop(obj){
    for (const prop in obj) {
      console.log(prop,":")
      if(obj[prop].length&&Array.isArray(obj[prop])){
        for(let j=0;j<obj[prop].length;j++){
          console.log(obj[prop][j]);
        }
      }
      else if(typeof obj[prop]==='object' && !obj[prop].length){
        for(const [key,value] of Object.entries(obj[prop])){
          console.log(`${key}: ${value}`);
        }
      }
      else{
          console.log(obj[prop]);
      }
    }
  }

  function forofLoop(obj){
    for (const [key, value] of Object.entries(obj)) {
      console.log(key,":")
      if(value.length&&Array.isArray(value)){
        for(let j=0;j<value.length;j++){
          console.log(value[j]);
        }
      }
      else if(typeof value==='object' && !value.length){
        for(const [key,value1] of Object.entries(value)){
          console.log(`${key}: ${value1}`);
        }
      }
      else{
          console.log(value);
      }
    }
  }

  function foreachLoop(obj){
    let keys =Object.keys(obj);
   keys.forEach(prop=> {
      console.log(prop,":")
      if(obj[prop].length&&Array.isArray(obj[prop])){
        for(let j=0;j<obj[prop].length;j++){
          console.log(obj[prop][j]);
        }
      }
      else if(typeof obj[prop]==='object' && !obj[prop].length){
        for(const [key,value] of Object.entries(obj[prop])){
          console.log(`${key}: ${value}`);
        }
      }
      else{
          console.log(obj[prop]);
      }
    })
  }