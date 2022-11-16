import './Login.scss';

const Login = (props) => {
    return (
        <div className="login-container mt-3">
            <div className="container">   {/* tao khoang trong left-right */}
                <div className="row">
                    <div className="content-left col-7">
                        <div className='brand'>
                            AkiChan Shop
                        </div>
                        <div className='detail'>
                            Welcome. 本日,何を着ますか？
                        </div>
                    </div>
                    <div className="content-right col-5 d-flex flex-column gap-3 py-3 ">
                        <input type="text" className='form-control' placeholder='ユーザー名を入力ください' />
                        <input type="password" className='form-control' placeholder='パスワードを入力ください' />
                        <button className='btn btn-primary'>ログイン</button>
                        <span className='text-center'>パスワードを忘れていますか？</span>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success'>新規アカウント登録</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};


export default Login;