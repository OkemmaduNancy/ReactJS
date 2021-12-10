export const times = (a,b) => {
    const output = a * b 
    const result = (value) =>{
        if (value === 81){
            return true 
        }else{
            return false
        }
    }
   const ans = result(output)
   return ans
  }

  export const age = (a) => {
      const b = a
      const show = (val) => {
      if(val > 18) {
          return "You are too old"
      }else {
          return "You are welcome"
      }
  }
  const x = show(b)
  return x
}