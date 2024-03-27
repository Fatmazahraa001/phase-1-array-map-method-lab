const titleCased = () => {
    return tutorials.map((sentence)=>{
      //we are splitting each sentence using the space into  words
      const words=sentence.split(" ")
      console.log(words)
      const titlecaseWord= words.map((word)=>{
          console.log(word)
         return word.charAt(0).toUpperCase()+ word.slice(1)
      })
      const result=titlecaseWord.join(" ")
      
      return result
   })