import React, { useEffect, useState } from 'react'
import './NotFoundcss.css'

function Data() {
    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [data, setdata] = useState([]);
    const [userid, setuserid] = useState(null);
    useEffect(() => {
        getData()
    }, [])
    //  console.log(data)
    function getData() {
        fetch("http://localhost:3000/Users").then((result) => {
            result.json().then((resp) => {
                // console.log(resp);
                setdata(resp)


            })
        })
    }
    function deleteUser(id) {
        fetch(`http://localhost:3000/Users/${id}`, {
            method: "DELETE"
        }).then((result) => {
            result.json().then((resp) => {
                getData()
            })
        })

    }

    function selectUser(id) {
        setname(data[id - 1].name)
        setusername(data[id - 1].username)
        setemail(data[id - 1].email)
        setuserid(data[id - 1].id)
        // console.log(data[id-1]);
    }

    function updateUser(id) {
        fetch(`http://localhost:3000/Users/${userid}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, username, email, userid
            })
        }).then((result) => {
            result.json().then((resp) => {
                getData()
            })
        })

    }


    return (
        <div>
            <h1>Data Printed</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>name</td>
                        <td>username</td>
                        <td>email</td>
                        <td>Delete</td>
                        <td>Update</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) =>
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                                <td><button onClick={() => selectUser(item.id)}>Update</button></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
            <div>
                Name: <input type='text' name='name' value={name} onChange={(e) => { setname(e.target.value) }} /><br /><br />
                Username: <input type='text' name='username' value={username} onChange={(e) => { setusername(e.target.value) }} /><br /><br />
                Email: <input type='text' name='email' value={email} onChange={(e) => { setemail(e.target.value) }} /><br /><br />
                <button onClick={updateUser}>Update User</button>
            </div>

        </div>
    )
}

export default Data
