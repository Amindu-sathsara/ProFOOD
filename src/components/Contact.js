

const Contact = () => {
  return (
    <div>
        <h1 className="font-bold text-3xl p-2 m-2 text-center">Contact Us</h1>

        {/*  Let's create some basic form for it  */}
        <p className="from-neutral-400 text-center">Fill our the follwiong form and contact us soon...</p>
        <form className="text-center">
          <input type="text"
           className="border border-black p-2 m-2"
           placeholder="Enter your name" />
          <br/>
          <input type="email" className="border border-black p-2 m-2" placeholder="Enter your email" />
          <br/>
          <textarea className="border border-black p-2 m-2" placeholder="Write your message" />
          <br/>
          <button type="submit" className="border border-slate-600 bg-emerald-400 rounded-lg w-20 h-10">Submit</button>

          {/* add a reset button */}
          {/*<button type="reset">Reset</button>*/}
        
        
        </form>
    </div>
  )
}

export default Contact;