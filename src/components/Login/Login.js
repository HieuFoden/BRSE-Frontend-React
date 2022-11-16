import './Login.scss';

const Login = (props) => {
    return (
        <div className="login-container">
            <div className="container">   {/* tao khoang trong left-right */}
                <div className="row">
                    <div className="content-left red col-7">
                        <div className='brand'>
                            AkiChan Shop
                        </div>
                        <div className='detail'>
                            Welcome. 本日,何を着ますか？
                        </div>
                    </div>
                    <div className="content-right green col-5">
                        right
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Login;