import './getintouch.css'
function Getintouch() {
  return (
      <section className='getintouch'>
          <div className='container'>
              <div className='text-center'>
                    <h3>CONTACT US</h3>
                    <h2>Lets get in touch</h2>
                    <div className='d-flex align-items-center text-center my-5'>
                        <div className='col-md-4 col-12'>
                        <h6>PHONE</h6>
                        <span>+1 929 234 5678</span>
                        </div>
                        <div className='col-md-4 col-12'>
                        <h6>LOCATION</h6>
                        <span>egypt_bani-swuef</span>
                        </div>
                        <div className='col-md-4 col-12'>
                        <h6>EMAIL</h6>
                        <span>sasanabil420@gmail.com</span>
                        </div>
                    </div>
                    <div className='img-box'></div>
              </div>
                <div className='p-5 d-flex flex-wrap align-items-center'>
                    <div className='form w-100'>
                        <h2>Drop Us a Line</h2>
                        <div className='d-flex flex-wrap'>
                            <div className='col-md-6 col-12'>
                            <span>Name:</span>
                            <input type="text" />
                            </div>
                            <div className='col-md-6 col-12'>
                            <span>Email Address:</span>
                            <input type='email' />
                            </div>
                        </div>
                        <span>Message:</span>
                        <textarea rows='10' cols='20' />
                        <button>send a massage</button>
                    </div>
              </div>
          </div>
      </section>
  );
}

export default Getintouch;