import React from 'react'

const UpdateProfile =()=> {
    return (
        <div className='bg-[#E4E7EC] w-[100%] h-[100%] p-6'>
            <div className="updateTitle text-center rounded-2xl   flex-wrap  w-[100%] h-[112px] bg-[#FFFFFF] text-[#000] text-4xl ">
                <h3 className='p-2 font-bold'>Let's update your profile</h3> 
                <h4 className='text-2xl text-[#666567]'>This will help us others get to know better!</h4>
            </div>
            <div className='grid grid-cols-1 gap-4  mt-4 rounded-2xl md:grid-cols-2 '>
                <div className='bg-[#fff] h-[625px] rounded-2xl '>
                    <h3 className='p-2 font-bold text-center text-[40px]'>Cover Picture:</h3> 
                    <img src="https://th.bing.com/th/id/OIP.akz0hTxRH7ofWzOzjjH3zQHaDn?pid=ImgDet&rs=1" alt=""  className='w-[90%] mb-4   h-[427.82px] text center m-auto rounded-2xl'/>
                    <i class="bi bi-exclamation-circle m-12   text-[#707070] text-2xl"></i>
                    <div className='flex justify-end mt-8'>
                    <button className='bg-[#7991BD] p-2 w-[210.7px] text-[#fff] rounded-2xl '>Change Picture</button>
                        <button className='text-[#7991BD] w-[100.7px] '>remove</button>
                    </div>
                </div>
                <div className='bg-[#fff] h-[625px] rounded-2xl '>
                    <h3 className='p-2 font-bold text-center text-[40px]'>Profile Picture :</h3> 
                    <img src="https://th.bing.com/th/id/OIP.bKxmwxuEqQ8SLdnFOXn3KAHaHa?pid=ImgDet&rs=1" alt="" className='w-[440px]   h-[440px] text center m-auto rounded-2xl rounded-full' />
                    <div className='flex 	content-center  justify-center mt-14'>
                        <button className='bg-[#7991BD] p-2 w-[210.7px] text-[#fff] rounded-2xl ml-[120px]  items-center content-center'>Change Picture</button>
                        <button className='text-[#7991BD] w-[100.7px]   '>remove</button>
                    </div>
                </div>
            </div>
            
            <div className='mt-10 flex  justify-center  flex-row'>
                <div className=' border-solid border-4 w-[408.8px] m-2'>
                        <form action="">
                    <lable className='mb-6 text-[20px]'>Personal Info :</lable>
                    <div className=''>
                            <input type="text" className='mb-6 mt-6 w-full border-none text-2xl p-2 outline-none rounded-md ' />
                            <input type="text" className='mb-6 w-full border-none text-2xl p-2 outline-none rounded-md ' />
                            <input type="text" className='mb-6 w-full border-none text-2xl p-2 outline-none rounded-md ' />
                            <input type="text" className='mb-6 w-full border-none text-2xl p-2 outline-none rounded-md ' />
                            <input type="email" className='mb-6 w-full border-none text-2xl p-2 outline-none rounded-md ' />
                            <div className=' flex w-full justify-end'>
                            <select name="MobilNumber" id="PhoneNo" className='h-[37px] rounded-md w-[130px]'>
                                <option value="IND">IND 91+</option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                            <input type="tel" className='mb-6 ml-3 w-full border-none text-2xl p-2 outline-none rounded-md w-[70%] ' />
                            </div>
                            <div className='flex '>
                                <h4 className=' w-[130px] text-[14px] mt-2'>Date of birth*</h4>
                            <input type="date" className='mb-6 ml-3 w-full border-none text-2xl p-2 outline-none rounded-md w-[70%] ' />
                            </div>
                            <div className='flex '>
                                <h4 className=' w-[130px] text-[14px] mt-2'>Gender*</h4>
                                <select name="gender" id="gender" className='h-[37px] rounded-md mb-6 ml-3  border-none text-2xl p-2 outline-none rounded-md w-[98%] '>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                                <select name="country" id="country" className='h-[37px] rounded-md mb-6  border-none text-2xl  outline-none rounded-md w-[100%] '>
                                    <option value="India">India</option>
                                </select>
                            <div className='flex mb-6'>
                                <select name="state" id="state" className='h-[37px] rounded-md  border-none text-2xl  outline-none rounded-md w-full mr-1 '>
                                    <option value="Nellore">Nellore</option>
                                </select>
                                <select name="state" id="state" className='h-[37px] rounded-md  border-none text-2xl outline-none rounded-md w-full ml-1  '>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                </select>
                            </div>
                            <div className='flex mb-6'>
                                <select name="" id="" className='h-[37px] rounded-md  border-none text-2xl  outline-none rounded-md w-full mr-1 '>
                                    <option value="Lok Sabha">Lok Sabha</option>
                                </select>
                                <select name="" id="" className='h-[37px] rounded-md  border-none text-2xl outline-none rounded-md w-full ml-1  '>
                                    <option value="Assembly">Assembly</option>
                                </select>
                            </div>
                            <input type="text" className='mb-6 w-full  text-2xl p-2 outline-none rounded-md border-solid border-1 border-[#000]' />
                            <div className='flext w-full text-center'>
                                <button className='w-[40%] pr-3 bg-[#7991BD] p-4 rounded-xl text-xl text-white'>Save & Continue</button>
                                <button className='w-[40%] ml-3 border-solid border border-[#7991BD] p-4 rounded-xl  text-xl text-[#7991BD]'>Cancel</button>
                            </div>

                    </div>
                        </form>
                </div>
            </div>
         </div>
  )
}

export default UpdateProfile;