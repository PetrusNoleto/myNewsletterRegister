const sendNewEmail = async ()=>{
    
    let getPage = document.getElementById('page')
    getPage.preventDefault
    let getInputData = await document.getElementById('subscribeEmail').value
    let dataForSend = {"emailForSub":getInputData}
    try {
         const response = await fetch('https://mynewsletterapi.onrender.com/', {
            method: 'POST',
            body: JSON.stringify(dataForSend)
          })
          const data = await response.json();
          console.log(dataForSend)
          return(alert(`registrado com sucesso   {response api:  ${data.message}}`))
    } catch (error) {
        return(alert( " não foi possivel registrar " + error )) 
    }
}