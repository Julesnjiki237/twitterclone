export default()=>{

    
    const login =  ({username, password}) =>{
        return new Promise(async (resolve, reject) => {

            try {
                const {data} = await $fetch('/api/auth/login',{
                    method: 'POST',
                    body: {
                        username,
                        password
                    }
                })
                console.log(data)
                }
             catch (error) {
                
            }
        })
    }
    return {
        login
    }
    
}