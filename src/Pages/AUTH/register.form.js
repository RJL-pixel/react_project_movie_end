
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authActions} from "../../redux";

function RegisterForm() {
    const {register, handleSubmit} = useForm()
const dispatch = useDispatch();

const submit = async (data) =>{
    const r =  await dispatch(authActions.register({user:data}));
    console.log(r)
};



    return (
        <form onSubmit={handleSubmit(submit)}>
        <input type={"text"} placeholder={'username'} {...register('username')}/>

            <input type={"text"} placeholder={'password'} {...register('password')}/>

               <button>Register</button>
        </form>
    )


}

export default RegisterForm;