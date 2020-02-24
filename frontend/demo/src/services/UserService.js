export const fetchUser = async ()  => {
    try {
        
        const response = await fetch("http://127.0.0.1:8000/api/users/");
        console.log(response);
        const user = response.json();
        console.log(user);
        return user;
    }catch(ex) {
        throw ex;
    }
}
