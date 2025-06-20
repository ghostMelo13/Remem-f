import { login, signup } from '../actions/auth.actions';

export default function LoginPage() {
    return (
        <div className='min-h-screen w-full flex justify-center items-center'>
            <form className='flex flex-col gap-4'>
                <label htmlFor="name">Name:</label>
                <input className='outline-1 outline-neutral-700 p-4 rounded-xl' id="name" name="name" type="name" required />
                <label htmlFor="email">Email:</label>
                <input className='outline-1 outline-neutral-700 p-4 rounded-xl' id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input className='outline-1 outline-neutral-700 p-4 rounded-xl' id="password" name="password" type="password" required />
                <button className='px-6 py-2 bg-slate-400' formAction={signup}>Sign up</button>
            </form>
        </div>
    )
}