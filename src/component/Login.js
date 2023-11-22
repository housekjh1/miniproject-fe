import { Button, Snackbar, TextField } from "@mui/material";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const login = async () => {
        await fetch(process.env.REACT_APP_SERVER_URL + 'login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(resp => {
                const jwtToken = resp.headers.get('Authorization');
                if (jwtToken !== null) {
                    localStorage.setItem("jwt", jwtToken);
                    localStorage.setItem('user', 'authenticated');
                    localStorage.setItem('name', user['username']);
                    window.location.href = '/';
                } else {
                    setOpen(true);
                }
            })
            .catch(e => console.log(e));
    }

    const isAuthenticated = localStorage.getItem('user') === 'authenticated';
    if (isAuthenticated) {
        window.location.href = '/';
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-4">
                <p className="text-3xl mb-4">Login</p>
                <TextField className="w-auto md:w-[15rem]" name="username" label="Username" onChange={handleChange} />
                <TextField className="w-auto md:w-[15rem]" type="password" name="password" label="Password" onChange={handleChange} />
                <Button className="w-auto md:w-[15rem]" variant="outlined" color="primary" onClick={login}>Login</Button>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
                message="Login failed: Check your username and password"
            />
        </div>
    )
}

export default Login
