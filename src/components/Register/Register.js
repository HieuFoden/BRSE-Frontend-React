import './Register.scss';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const Register = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let history = useHistory();
    const handleLogin = () => {
        history.push('/login');
    }

    useEffect(() => {
        // axios.get('http://localhost:8080/api/test-api').then(data => {
        //     console.log('>>>check data :', data)
        // })
    }, []);

    const isValidInputs = () => {
        if (!email) {
            toast.error('メールが必須。');
            return false;
        };
        if (!phone) {
            toast.error('電話番号が必須。');
            return false;
        };
        if (!username) {
            toast.error('ユーザー名が必須。');
            return false;
        };
        if (!password) {
            toast.error('パスワードが必須。');
            return false;
        };
        if (password != confirmPassword) {
            toast.error('パスワードとパスワード確認の値が一致しません。');
            return false;
        };

        let regx = /\S+@\S+\.\S+/; //js regular expression check email
        if (!regx.test(email)) {
            toast.error('メールアドレスの形式が正しくありません。');
        }
        return false;

        return true;
    };

    const handleRegister = () => {
        let check = isValidInputs();
        let userData = { email, phone, username, password };

    };

    return (
        <div className="register-container">
            <div className="container">   {/* tao khoang trong left-right */}
                <div className="row">
                    <div className="content-left col-7">
                        <div className='brand'>
                            Aki Shop
                        </div>
                        <div className='detail'>
                            Welcome. 本日,何を着ますか？
                        </div>
                    </div>
                    <div className="content-right col-5 d-flex flex-column gap-3 py-3 ">
                        <div className='form-group'>
                            <label>メール：</label>
                            <input type="text" className='form-control' placeholder='メールを入力ください'
                                value={email} onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>電話番号：</label>
                            <input type="text" className='form-control' placeholder='電話番号を入力ください'
                                value={phone} onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>ユーザー名：</label>
                            <input type="text" className='form-control' placeholder='ユーザー名を入力ください'
                                value={username} onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>パスワード：</label>
                            <input type="password" className='form-control' placeholder='パスワードを入力ください'
                                value={password} onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>パスワード確認：</label>
                            <input type="password" className='form-control' placeholder='パスワード確認を入力ください'
                                value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>
                        <button className='btn btn-primary' onClick={() => handleRegister()}>登録</button>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleLogin()}>ログイン</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};


export default Register;