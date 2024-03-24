
export { useUserService }

function useUserService(){

    const url = 'http://127.0.0.1:8000/acceso/login/'

    return {
        
        login: async (username, password) => {
            try {
                
                const resp = await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        //'X-CSRFToken': Cookies.get('csrftoken')
                    },
                    body: JSON.stringify({ username, password })
                })

                if (!resp.ok) {
                    throw new Error("Network response was not ok");
                }

                console.log("Login Successful", resp);
                //toast({ title: "Login Successful" });


            } catch (error) {
                
                console.error(error)
                //alertService.error(error);
            }
        },
        logout: async () => {
            await fetch.post('/api/account/logout');
            router.push('/account/login');
        },
    }

}


