import './Login.scss';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    let history = useHistory();
    const handleCreateNewAccount = (props) => {
        history.push('/register');
    }

    return (
        <div className="login-container">
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
                        <input type="text" className='form-control' placeholder='ユーザー名を入力ください' />
                        <input type="password" className='form-control' placeholder='パスワードを入力ください' />
                        <button className='btn btn-primary'>ログイン</button>
                        <span className='text-center'><a className='forgot-password' href='#'>パスワードを忘れていますか？</a></span>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleCreateNewAccount()}>新規アカウント登録</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};


export default Login;