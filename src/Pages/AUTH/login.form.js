import './reg.css'
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authActions} from "../../redux";
import {useNavigate} from "react-router-dom";





function LoginForm()  {
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const submit = async (data) => {
        const {error} = await dispatch(authActions.login({user: data}));

        if (!error) {
            navigate('/movies')
        }
    };

    return (
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit(submit)}>
                <div className="user-box">
                    <input type={"text"} placeholder={'username'} {...register('username')}/>
                </div>
                <div className="user-box">
                    <input type={"text"} placeholder={'password'} {...register('password')}/>
                </div>
                <button>
                    <a>
                        <span> </span>
                        <span> </span>
                        <span> </span>
                        <span> </span>
                        Submit
                    </a>
                </button>


            </form>
        </div>







    );
};

export default LoginForm;