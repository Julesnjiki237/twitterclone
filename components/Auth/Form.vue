<template>
    <div>
        <div class=" pt-5 space-y-6"> 
            <UIInput label="Username"
             placeholder="@username" 
             v-model="data.username"/>
        </div>
        <div class=" pt-5 space-y-6"> 
            <UIInput label="Password"
             placeholder="************" 
             type="password" 
             v-model="data.password"/>
        </div>
        <button @click="handleLogin">Login</button>
    </div>
</template>
<script setup>

const data = reactive({
    password:'',
    username:'',
    loading:false,
})

async function handleLogin(){
    
    const {login} = useAuth()


    data.loading = true
    try {
        await login({
            username: data.username,
            password: data.password
        })
    } catch (error) {
        console.log(error)
    } finally{
        data.loading= false
    }
}

</script>