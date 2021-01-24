import React from 'react'
const RegisterForm =({onRouteChange}) =>{
    return(
        <div>
            <article className="br3 ba dark-gray shadow-5 mv4 w-100 w-50-m w-25-l mw5 center">
                <main className="pa4 black-80">
                    <form class="measure ">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Enter your name</legend>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="input" name="name"  id="name"/>
                        <div claclassNamess="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address"> Enter your Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="password"> Your Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        </fieldset>
                        <div className="">
                        <input 
                        onClick ={()=>onRouteChange('home')}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Register"/>
                        </div>
                       
                    </form>
                </main>
            </article>
        </div>

    )
}
export default RegisterForm;