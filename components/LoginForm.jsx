import { doSocialLogin } from "../app/actions/index.js";

const LoginForm = () => {
  return (
    <form action={doSocialLogin}>
      <button
        className='bg-pink-400 text-white p-1 rounded-md m-1 text-lg'
        type='submit'
        name='action'
        value='google'>
        Sign In With Google
      </button>

      <button
        className='bg-white text-black p-1 rounded-md m-1 text-lg'
        type='submit'
        name='action'
        value='github'>
        Sign In With GitHub
      </button>
    </form>
  );
};

export default LoginForm;
