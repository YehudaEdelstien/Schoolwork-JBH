export default function Login() {
    return (
        <section className="container">
            <article>
                <div id="userGetter" />
                <form >
                    <h1>Log in</h1>
                    <label htmlFor="username">
                        User Name
                        <input type="text" id="username" name="username" placeholder="User Name" required />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input type="password" id="password" name="password" placeholder="Password" required />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </article>
        </section>
    )
}