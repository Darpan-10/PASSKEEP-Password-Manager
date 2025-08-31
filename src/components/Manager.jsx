import React from 'react'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {

    const [form, setForm] = useState({
        site: "", username: "", password: "", time: new Date().toLocaleDateString("en-IN", {
            timeZone: "Asia/Kolkata",
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit'
        })
    });
    const [savedPassword, setsavedPassword] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setsavedPassword(JSON.parse(passwords));
        }
    }, [])


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const savePassword = () => {
        if(form.site.length >3 && form.username.length >3 && form.password.length>3){

            setsavedPassword([...savedPassword, {...form , id: uuidv4()}]);
            localStorage.setItem("passwords", JSON.stringify([...savedPassword,{...form , id: uuidv4()}]));
            setForm({
                site: "", username: "", password: "", time: new Date().toLocaleDateString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    year: 'numeric', month: '2-digit', day: '2-digit',
                    hour: '2-digit', minute: '2-digit'
                })
            });
            toast('✅ password saved!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
            });
        }
        else{
            toast("❌ Error: can't be saved!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
            });
        }
    }

    const editPassword =(id) =>{
        setForm(savedPassword.filter(i=>i.id===id)[0])
        setsavedPassword(savedPassword.filter(item=>item.id!==id))
        toast('📝 editing password!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
    }

     const deletePassword =(id) =>{
        setsavedPassword(savedPassword.filter(item=>item.id !== id));
        localStorage.setItem("passwords",JSON.stringify(savedPassword.filter(item=>item.id !== id)))
        toast('🗑️ password deleted!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
    }


    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const copyText = (text) => {
         navigator.clipboard.writeText(text)
        toast('📄 copied to clipboard!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
       

    }


    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"


            />
            <div className="fixed inset-0 -z-10 h-full w-full bg-green-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] "></div>
            <div className=" mx-auto max-w-7xl rounded-3xl shadow-lg bg-green-100 mycontainer px-15 py-5 ">
                <h1 className='text-center p-2'> <div className="logo text-3xl font-bold tracking-wider">
                    <span className='text-black text-4xl'>&lt;</span>
                    Pass<span className='text-3xl text-green-900'>OP</span><span className='text-black text-4xl'>/&gt;</span></div></h1>
                <p className='text-green-950 text-lg text-center font-bold'>Your Own Password Manager</p>

                <div className="text-black  rounded-3xl flex flex-col p-4 gap-4  ">
                    <input value={form.site} name="site" onChange={handleChange} className='w-full border-2 border-green-900 rounded-full bg-white px-4 py-1 placeholder:italic placeholder:tracking-widest' type="text" id="" placeholder='Enter URL...' />
                    <div className="flex flex-col md:flex-row justify-between gap-5">
                        <input value={form.username} name="username" onChange={handleChange} className='flex-1 w-full border-2 border-green-900 rounded-full bg-white px-4 py-1 placeholder:italic placeholder:tracking-widest' type="text" placeholder='Enter Username...' />
                        <div className="relative flex-1">
                            <input value={form.password} name="password" onChange={handleChange} className=' w-full border-2 border-green-900 rounded-full bg-white px-4 py-1 placeholder:italic placeholder:tracking-widest' type={showPassword ? "text" : "password"} placeholder='Enter Password...' />
                            <span className='absolute right-[10px] top-[7px] cursor-pointer' onClick={togglePasswordVisibility}>
                                {showPassword ? (

                                    <svg className="w-5 h-5 text-gray-600 hover:text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                ) : (

                                    <svg className="w-5 h-5 text-gray-600 hover:text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                    </svg>
                                )}
                            </span>

                        </div>
                    </div>
                    <div className='flex justify-center '>
                        <button onClick={savePassword} className='shadow-lg flex justify-center items-center gap-2 rounded-full bg-green-600  text-white px-4 py-1 hover:bg-green-700 transition-all duration-200 ease-in-out w-fit'>
                            <lord-icon
                                src="https://cdn.lordicon.com/efxgwrkc.json"
                                trigger="hover">
                            </lord-icon>Add Password</button>
                    </div>
                </div>
            </div>
            <div className="passwords mx-auto max-w-7xl my-5 p-5 bg-green-100 rounded-3xl shadow-lg">
                <h1 className="text-3xl font-bold p-5 mx-5">Your Passwords..</h1>
                {savedPassword.length === 0 ? (
                    <p className='text-center shadow-lg  bg-green-600 rounded-full font-bold text-lg text-green-950'>No passwords saved yet!</p>
                ) : (

                    <table className="table-fixed w-full mx-auto rounded-xl overflow-hidden shadow-lg py-2 ">
                        <thead className='bg-green-600 '>
                            <tr className=''>
                                <th className="  py-2 text-center">Site URL</th>
                                <th className=" border-x-2 py-2 text-center">Username</th>
                                <th className=" border-x-2 py-2 text-center">Password</th>
                                <th className=" py-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-200  '>
                            {savedPassword.map((item, uuidv4) => (
                                <tr className='' key={uuidv4}>
                                    <td className=" py-2 text-center flex justify-center items-center gap-3"><a href={item.site} className='text-blue-700 hover:underline hover:text-red-700 ' target='_blank'>{item.site}</a>
                                        <svg className='cursor-pointer' onClick={() => { copyText(item.site) }} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="5" y="5" width="12" height="14" rx="1" fill="" />
                                            <rect className="copy-back" x="8" y="5" width="10" height="12" rx="1" fill="white" stroke="black" />
                                        </svg>
                                    </td>
                                    <td className="border-x-2 py-2 text-center">
                                        <div className="flex justify-center items-center gap-2">
                                            <span>{item.username}</span>
                                            <svg className='cursor-pointer' onClick={() => { copyText(item.username) }} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="5" y="5" width="12" height="14" rx="1" fill="" />
                                                <rect className="copy-back" x="8" y="5" width="10" height="12" rx="1" fill="white" stroke="black" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td className="border-x-2 py-2 text-center">
                                        <div className="flex justify-center items-center gap-2">
                                            <span>{item.password}</span>
                                            <svg className='cursor-pointer ' onClick={() => { copyText(item.password) }} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="5" y="5" width="12" height="14" rx="1" fill="" />
                                                <rect className="copy-back" x="8" y="5" width="10" height="12" rx="1" fill="white" stroke="black" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td className='flex justify-center items-center py-2 gap-4'>
                                        <span onClick={()=>{editPassword(item.id)}}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                        <span onClick={()=>{deletePassword(item.id)}}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}

export default Manager