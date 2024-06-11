import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Details = () => {

    const [logindata, setLoginData] = useState([]);
    const [show, setShow] = useState(false);
    const history = useNavigate();
    var todayDate = new Date().toISOString().slice(0, 10);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setLoginData(user);

            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });

            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }
    }

    const userlogout = () => {
        localStorage.removeItem("user_login");
        history("/");
    }

    const Counter = () => {
        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(count + 1);
        };

        const decrement = () => {
            setCount(count - 1);
        };

        return (
            <div style={{ marginTop: '35px' }}>
                <h3> Visits</h3>
                <div>
                    <button onClick={decrement}>-</button>
                    <span style={{ margin: '0 10px' }}>{count}</span>
                    <button onClick={increment}>+</button>
                </div>
            </div>
        );
    };

    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ? "error" :
                    <>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h2> {logindata[0].name}</h2>
                            <div style={{ marginLeft: 'auto', marginTop: '-50px' }}>
                                <Button onClick={userlogout} style={{ backgroundColor: 'red' }}>LogOut</Button>
                            </div>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{marginTop:'35px'}}>
                                    <h3>Create Audience</h3>
                                </div>
                                <DropdownButton id="dropdown-basic-button" title="Total Spends" style={{marginTop:'35px'}}>
                                    <Dropdown.Item href="#/action-1">Less than & Equal to 10000</Dropdown.Item>
                                    {/* ADD A COUNTER HERE */}
                                    <Dropdown.Item href="#/action-3">More than 10000 </Dropdown.Item>
                                </DropdownButton>
                                <Counter /> {/* Add the Counter component here */}
                                <DropdownButton id="dropdown-basic-button" title="Last visited" style={{marginTop:'35px'}}>
                                    <Dropdown.Item href="#/action-1">3 months ago</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">within 3 months</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default Details;
